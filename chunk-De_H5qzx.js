import{Di as he,Dt as aae,Hn as AN,Li as kL,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,Tn as vze,Un as Ac,Ut as hze,Wi as mg,ai as aN,dr as Hp,fa as vN,ga as wn,gn as tae,i as _a,la as ug,li as cE,lr as Hn,r as Ta,rr as E,sa as ue}from"./main-LIMZAZLW.js";var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:`id`,label:`Código`,align:`right`,readonly:!0,freeze:!0,width:120},{property:`name`,label:`Nome`,width:`200px`,required:!0},{property:`occupation`,label:`Cargo`,width:150},{property:`email`,label:`E-mail`,width:100,required:!0},{property:`status`,label:`Status`,align:`center`,width:80},{property:`lastActivity`,label:`Última atividade`,align:`center`,width:140}];data=[{id:629131,name:`Jhonatas Silvano`,occupation:`Developer`,email:`jhonatas.silvano@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:78492341,name:`Rafael Gonçalvez`,occupation:`Engineer`,email:`rafael.goncalvez@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-10`},{id:986434,name:`Nicoli Pereira`,occupation:`Developer`,email:`nicoli.pereira@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:4235652,name:`Mauricio João Mendez`,occupation:`Developer`,email:`mauricio.joao@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-23`},{id:629131,name:`Leandro Oliveira`,occupation:`Engineer`,email:`leandro.oliveira@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-30`}];onBeforeSave(a,o){return a.occupation!==`Engineer`}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-grid-basic`]],standalone:!1,decls:1,vars:3,consts:[[3,`p-row-actions`,`p-data`,`p-columns`]],template:function(o,l){o&1&&Kc(0,`po-grid`,0),o&2&&cE(`p-row-actions`,l.rowActions)(`p-data`,l.data)(`p-columns`,l.columns)},dependencies:[hze],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n});var M=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-grid-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Grid Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return l.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-grid-basic/sample-po-grid-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-grid-basic/sample-po-grid-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-grid-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+l.sampleCodeButtonIcon),Hp(),mg(` `,l.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_,l.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,G],encapsulation:2,changeDetection:1})}return n})();var I=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-grid-doc`]],standalone:!1,decls:217,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoGridRowActions`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(updatedRow:`,`any,`,`originalRow:`,`any)`,`=>`,`boolean`]],template:function(o,l){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoGridModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-grid.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoGridComponent`),ug()(),Ac(12,`div`,2)(13,`blockquote`)(14,`p`),vN(15,`Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.`),ug()(),Ac(16,`p`),vN(17,`Componente grid.`),ug(),Ac(18,`p`),vN(19,`Ações / atalhos:`),ug(),Ac(20,`ul`)(21,`li`),vN(22,`ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;`),ug(),Ac(23,`li`),vN(24,`ARROW-DOWN: Navega para celula inferior;`),ug(),Ac(25,`li`),vN(26,`ARROW-RIGHT: Navega para celula direita;`),ug(),Ac(27,`li`),vN(28,`ARROW-LEFT: Navega para celula esquerda;`),ug(),Ac(29,`li`),vN(30,`TAB: Navega para próxima celula;`),ug(),Ac(31,`li`),vN(32,`SHIFT+TAB: Navega para celula anterior;`),ug(),Ac(33,`li`),vN(34,`CTRL+DEL: Remove linha;`),ug(),Ac(35,`li`),vN(36,`DEL/BACKSPACE: Limpa celula;`),ug(),Ac(37,`li`),vN(38,`ENTER: Edita linha com valor atual/Confirma edição da celula;`),ug(),Ac(39,`li`),vN(40,`DOUBLE-CLICK: Edita linha com valor atual;`),ug(),Ac(41,`li`),vN(42,`ESC: Cancela edição da celula / Cancela inserção de linhas em branco;`),ug(),Ac(43,`li`),vN(44,`A..Z/0..9: Inicia edição com valor em branco.`),ug()()(),Ac(45,`div`,6)(46,`h4`,7),vN(47,`Seletor`),ug(),Ac(48,`pre`,8),vN(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),ug()(),Ac(50,`h4`,9),vN(51,`Propriedades`),ug(),Ac(52,`table`,10)(53,`tr`,11)(54,`th`,12),vN(55,`Nome`),ug(),Ac(56,`th`,12),vN(57,`Tipo`),ug(),Ac(58,`th`,12),vN(59,`Padrão`),ug(),Ac(60,`th`,12),vN(61,`Descrição`),ug()(),Ac(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),vN(66,` p-columns`),Kc(67,`br`),ug()()(),Ac(68,`td`,17)(69,`code`,18),vN(70,`Array<any>`),ug()(),Ac(71,`td`,19),vN(72,`-`),ug(),Ac(73,`td`,20)(74,`p`),vN(75,`Colunas exibidas no grid.`),ug()()(),Ac(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),vN(80,` p-data`),Kc(81,`br`),ug()()(),Ac(82,`td`,17)(83,`code`,18),vN(84,`Array<any>`),ug()(),Ac(85,`td`,19),vN(86,`-`),ug(),Ac(87,`td`,20)(88,`p`),vN(89,`Lista com os dados que serão exibidos no grid.`),ug()()(),Ac(90,`tr`,13)(91,`td`,14)(92,`div`,15)(93,`span`,16),vN(94,` p-row-actions`),Kc(95,`br`),ug()()(),Ac(96,`td`,17)(97,`code`,21),vN(98,`PoGridRowActions`),ug()(),Ac(99,`td`,19),vN(100,`-`),ug(),Ac(101,`td`,20)(102,`p`),vN(103,`Ações disparadas quando uma linha do grid é manipulada.`),ug()()()(),Ac(104,`h3`),vN(105,`Interfaces`),ug(),Ac(106,`h4`,22)(107,`code`,5),vN(108,`PoGridRowActions`),ug()(),Ac(109,`div`,2)(110,`p`),vN(111,`Ações executadas durante a manipulação das linhas do grid.`),ug()(),Ac(112,`h4`,9),vN(113,`Propriedades`),ug(),Ac(114,`table`,10)(115,`tr`,11)(116,`th`,12),vN(117,`Nome`),ug(),Ac(118,`th`,12),vN(119,`Tipo`),ug(),Ac(120,`th`,12),vN(121,`Descrição`),ug()(),Ac(122,`tr`,13)(123,`td`,14)(124,`div`,15)(125,`span`,16),vN(126,` afterRemove`),Kc(127,`br`),ug()()(),Ac(128,`td`,17)(129,`code`,23),vN(130,`() => void`),ug()(),Ac(131,`td`,20)(132,`em`)(133,`strong`),vN(134,`(opcional)`),ug()(),Ac(135,`p`),vN(136,`Método executado após uma linha do grid ser removida.`),ug()()(),Ac(137,`tr`,13)(138,`td`,14)(139,`div`,15)(140,`span`,16),vN(141,` afterSave`),Kc(142,`br`),ug()()(),Ac(143,`td`,17)(144,`code`,24),vN(145,`(row: any) => void`),ug()(),Ac(146,`td`,20)(147,`em`)(148,`strong`),vN(149,`(opcional)`),ug()(),Ac(150,`p`),vN(151,`Método executado após uma linha do grid ser salva, ao ser executado, o método irá receber um objeto com os dados atualizados.`),ug()()(),Ac(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),vN(156,` beforeInsert`),Kc(157,`br`),ug()()(),Ac(158,`td`,17)(159,`code`,25),vN(160,`(row: any) => boolean`),ug()(),Ac(161,`td`,20)(162,`em`)(163,`strong`),vN(164,`(opcional)`),ug()(),Ac(165,`p`),vN(166,`Método executado antes de uma nova linha ser inserida no grid, se o método retornar algo diferente de `),Ac(167,`code`),vN(168,`true`),ug(),vN(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),ug(),Ac(170,`p`),vN(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),ug(),Ac(172,`pre`)(173,`code`),vN(174,`rowActions: PoGridRowActions = {
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
`),ug()()()(),Ac(175,`tr`,13)(176,`td`,14)(177,`div`,15)(178,`span`,16),vN(179,` beforeRemove`),Kc(180,`br`),ug()()(),Ac(181,`td`,17)(182,`code`,25),vN(183,`(row: any) => boolean`),ug()(),Ac(184,`td`,20)(185,`em`)(186,`strong`),vN(187,`(opcional)`),ug()(),Ac(188,`p`),vN(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Ac(190,`code`),vN(191,`true`),ug(),vN(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),ug()()(),Ac(193,`tr`,13)(194,`td`,14)(195,`div`,15)(196,`span`,16),vN(197,` beforeSave`),Kc(198,`br`),ug()()(),Ac(199,`td`,17)(200,`code`,26),vN(201,`(updatedRow: any, originalRow: any) => boolean`),ug()(),Ac(202,`td`,20)(203,`em`)(204,`strong`),vN(205,`(opcional)`),ug()(),Ac(206,`p`),vN(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Ac(208,`code`),vN(209,`true`),ug(),vN(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),ug(),Ac(211,`blockquote`)(212,`p`),vN(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),ug()(),Ac(214,`pre`)(215,`code`),vN(216,`rowActions: PoGridRowActions = {
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
`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var z=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Grid`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return l.changeTab(`doc`)}),Kc(3,`sample-po-grid-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return l.changeTab(`web`)}),Kc(5,`sample-po-grid-basic-view`),ug()()()),o&2&&(cE(`p-actions`,l.actions),Hp(2),cE(`p-active`,l.activeTab===`doc`),Hp(2),cE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[vze,tae,aae,M,I],encapsulation:2,changeDetection:1})}return n})()}];var N=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(z),kL]})}return n})();var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,N]})}return n})();export{oe as DocPoGridModule};