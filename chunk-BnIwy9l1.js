import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Ci as j,Ei as jc,En as tFe,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Or as O6,Pi as mt,Pn as woe,R as Hze,Ri as nu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dr as GE,dt as Sae,i as _a,ir as EF,ji as mO,jr as Px,mn as ni,pa as wg,r as Ta,ta as ue$1,ua as wK,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var re=(()=>{class i{poNotification=p(zu);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`po-context-menu`,1),mt(`p-item-selected`,function(s){return o.onItemSelected(s)}),wg()()),a&2&&(rg(),jE(`p-items`,o.menuItems))},dependencies:[Hze],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Context Menu Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-basic',
  templateUrl: './sample-po-context-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuBasicComponent {
  readonly poNotification = inject(PoNotificationService);

  menuItems: Array<PoContextMenuItem> = [
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ];

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-context-menu-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,he,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,re],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{poNotification=p(zu);contextTitle=j(`Cadastro`);title=j(`Funcionário`);expanded=j(!0);newItemLabel=j(``);selected=j(!1);menuItems=j([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=Sx();jc(0,`div`,1)(1,`po-context-menu`,2),ob(`p-expandedChange`,function(d){return y_(u),sO(o.expanded,d)||(o.expanded=d),v_(d)}),mt(`p-item-selected`,function(d){return o.onItemSelected(d)}),wg()(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(o.contextTitle,d)||(o.contextTitle=d),v_(d)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(o.title,d)||(o.title=d),v_(d)}),wg()(),jc(8,`div`,3)(9,`po-switch`,6),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(o.expanded,d)||(o.expanded=d),v_(d)}),wg()(),nu(10,`po-divider`),jc(11,`div`,7)(12,`po-input`,8),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(o.newItemLabel,d)||(o.newItemLabel=d),v_(d)}),wg(),jc(13,`po-switch`,9),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(o.selected,d)||(o.selected=d),v_(d)}),wg(),jc(14,`po-button`,10),mt(`p-click`,function(){return o.addItem()}),wg()(),nu(15,`po-divider`),jc(16,`div`,3)(17,`po-button`,11),mt(`p-click`,function(){return o.restore()}),wg()()()}a&2&&(rg(),jE(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),ib(`p-expanded`,o.expanded),rg(5),ib(`ngModel`,o.contextTitle),t0(),rg(),ib(`ngModel`,o.title),t0(),rg(2),ib(`ngModel`,o.expanded),t0(),rg(3),ib(`ngModel`,o.newItemLabel),t0(),rg(),ib(`ngModel`,o.selected),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Hze,Lf,A5,w5],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Context Menu Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    [p-context-title]="contextTitle()"
    [p-title]="title()"
    [p-items]="menuItems()"
    [(p-expanded)]="expanded"
    (p-item-selected)="onItemSelected($event)"
  />
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="contextTitle" [(ngModel)]="contextTitle" p-label="Context Title" p-clean />

    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-clean />
  </div>

  <div class="po-row">
    <po-switch
      class="po-md-6"
      name="expanded"
      [(ngModel)]="expanded"
      p-label="Expanded"
      p-label-off="Collapsed"
      p-label-on="Expanded"
    />
  </div>

  <po-divider />

  <div class="po-row po-pb-1">
    <po-input class="po-md-6" name="newItemLabel" [(ngModel)]="newItemLabel" p-label="New Item Label" />

    <po-switch
      class="po-md-6"
      name="Selected"
      [(ngModel)]="selected"
      p-label="Selected"
      p-help="Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado."
    />

    <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()" />
  </div>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-labs',
  templateUrl: './sample-po-context-menu-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuLabsComponent {
  readonly poNotification = inject(PoNotificationService);

  contextTitle = signal<string>('Cadastro');
  title = signal<string>('Funcion\xE1rio');
  expanded = signal<boolean>(true);
  newItemLabel = signal<string>('');
  selected = signal<boolean>(false);

  menuItems = signal<Array<PoContextMenuItem>>([]);

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }

  addItem(): void {
    if (!this.newItemLabel()) {
      return;
    }

    this.menuItems.set([...this.menuItems(), { label: this.newItemLabel(), selected: this.selected() }]);
    this.newItemLabel.set('');
    this.selected.set(false);
  }

  restore(): void {
    this.contextTitle.set('Cadastro');
    this.title.set('Funcion\xE1rio');
    this.expanded.set(true);
    this.newItemLabel.set('');
    this.selected.set(false);
    this.menuItems.set([]);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-context-menu-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,pe],encapsulation:2,changeDetection:1})}return i})();var Me=[`tab`];var ue=(()=>{class i{tab=O6(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=j([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label)}onActivatedTab(m){this.updateSelectedItemMenu(m.id)}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===m}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&GE(o.tab,Me,5),a&2&&Px()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(jc(0,`po-context-tabs`,null,0)(2,`po-tab`,2),mt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),jc(3,`div`,3)(4,`po-context-menu`,4),mt(`p-item-selected`,function(s){return o.onItemSelected(s)}),wg(),jc(5,`po-page-default`,5),nu(6,`po-dynamic-form`,6,1),wg()()(),jc(8,`po-tab`,7),mt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),jc(9,`div`,3)(10,`po-context-menu`,4),mt(`p-item-selected`,function(s){return o.onItemSelected(s)}),wg(),jc(11,`po-page-default`,8),nu(12,`po-dynamic-form`,6,1),wg()()(),jc(14,`po-tab`,9),mt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),jc(15,`div`,3)(16,`po-context-menu`,4),mt(`p-item-selected`,function(s){return o.onItemSelected(s)}),wg(),jc(17,`po-page-default`,10),nu(18,`po-table`,11),wg()()()()),a&2&&(rg(4),jE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),rg(2),jE(`p-fields`,o.formDadosCadastrais),rg(4),jE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),rg(2),jE(`p-fields`,o.formEndereco),rg(4),jE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),rg(2),jE(`p-items`,o.documentos))},dependencies:[Hze,woe,Kze,I5,bae,tFe],styles:[`po-context-tabs[_ngcontent-%COMP%]{--%NS%po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Context - Cadastro de Usuário`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-context-tabs #tab>
  <po-tab
    p-label="Dados cadastrais"
    p-hide-close
    p-active
    id="Dados cadastrais"
    (p-activated-tab)="onActivatedTab($event)"
  >
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Dados cadastrais">
        <po-dynamic-form #dynamicForm [p-fields]="formDadosCadastrais" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Endere\xE7os" id="Endere\xE7os" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Endere\xE7os">
        <po-dynamic-form #dynamicForm [p-fields]="formEndereco" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Documentos" id="Documentos" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Documentos">
        <po-table [p-items]="documentos" />
      </po-page-default>
    </div>
  </po-tab>
</po-context-tabs>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoContextMenuItem, PoContextTabsComponent, PoDynamicFormField, PoTabComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-user',
  templateUrl: './sample-po-context-menu-user.component.html',
  styleUrls: ['./sample-po-context-menu-user.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuUserComponent {
  private readonly tab = viewChild<PoContextTabsComponent>('tab');
  contextTitle = 'Cadastro';
  title = 'Usu\xE1rio';

  menuItems = signal<Array<PoContextMenuItem>>([
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ]);

  formDadosCadastrais: Array<PoDynamicFormField> = [
    {
      property: 'name',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.'
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 }
  ];

  formEndereco: Array<PoDynamicFormField> = [
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' }
  ];

  documentos = [
    { Documento: 'CPF', Valor: '987.xxx.xxx-60' },
    { Documento: 'Passporte', Valor: '123456xxx-1' }
  ];

  onItemSelected(value: PoContextMenuItem) {
    this.updateSelectedItemMenu(value.label);
    this.tab().activateTab(value.label);
  }

  onActivatedTab(value: PoTabComponent) {
    this.updateSelectedItemMenu(value.id);
  }

  private updateSelectedItemMenu(label: string) {
    const menuItems = this.menuItems().map(x => ({ ...x, selected: x.label === label }));
    this.menuItems.set(menuItems);
  }
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),wg(),jc(25,`pre`,11),iO(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-context-menu-user`),wg(),nu(29,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Pe,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-context-menu.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoContextMenuComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-context-menu`),wg(),iO(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),jc(18,`code`),iO(19,`po-menu`),wg(),iO(20,`, porém independente e focado em navegação contextual.`),wg(),jc(21,`p`),iO(22,`No caso de uso do componente `),jc(23,`code`),iO(24,`po-page-default`),wg(),iO(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),jc(26,`strong`),iO(27,`po-context-menu-wrapper`),wg(),iO(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),wg(),jc(29,`p`),iO(30,`O uso simultâneo dos componentes `),jc(31,`code`),iO(32,`po-menu`),wg(),iO(33,` e `),jc(34,`code`),iO(35,`po-context-menu`),wg(),iO(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),wg(),jc(37,`h4`),iO(38,`Tokens customizáveis`),wg(),jc(39,`p`),iO(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(41,`blockquote`)(42,`p`),iO(43,`Para maiores informações, acesse o guia `),jc(44,`a`,6),iO(45,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(46,`.`),wg()(),jc(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),iO(51,`Propriedade`),wg(),jc(52,`th`),iO(53,`Descrição`),wg(),jc(54,`th`),iO(55,`Valor Padrão`),wg()()(),jc(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),iO(60,`Default Values`),wg()(),nu(61,`td`)(62,`td`),wg(),jc(63,`tr`)(64,`td`)(65,`code`),iO(66,`--font-family`),wg()(),jc(67,`td`),iO(68,`Família tipográfica usada`),wg(),jc(69,`td`)(70,`code`),iO(71,`var(--font-family-theme)`),wg()()(),jc(72,`tr`)(73,`td`)(74,`code`),iO(75,`--font-size`),wg()(),jc(76,`td`),iO(77,`Tamanho da fonte dos itens`),wg(),jc(78,`td`)(79,`code`),iO(80,`var(--font-size-default)`),wg()()(),jc(81,`tr`)(82,`td`)(83,`code`),iO(84,`--font-size-context-title`),wg()(),jc(85,`td`),iO(86,`Tamanho da fonte do título de contexto`),wg(),jc(87,`td`)(88,`code`),iO(89,`var(--font-size-sm)`),wg()()(),jc(90,`tr`)(91,`td`)(92,`code`),iO(93,`--font-size-title`),wg()(),jc(94,`td`),iO(95,`Tamanho da fonte do título principal`),wg(),jc(96,`td`)(97,`code`),iO(98,`var(--font-size-lg)`),wg()()(),jc(99,`tr`)(100,`td`)(101,`code`),iO(102,`--line-height`),wg()(),jc(103,`td`),iO(104,`Altura da linha`),wg(),jc(105,`td`)(106,`code`),iO(107,`var(--line-height-md)`),wg()()(),jc(108,`tr`)(109,`td`)(110,`code`),iO(111,`--border-radius`),wg()(),jc(112,`td`),iO(113,`Raio dos cantos dos itens`),wg(),jc(114,`td`)(115,`code`),iO(116,`var(--border-radius-md)`),wg()()(),jc(117,`tr`)(118,`td`)(119,`code`),iO(120,`--border-color`),wg()(),jc(121,`td`),iO(122,`Cor da borda lateral direita do componente`),wg(),jc(123,`td`)(124,`code`),iO(125,`var(--color-neutral-light-20)`),wg()()(),jc(126,`tr`)(127,`td`)(128,`code`),iO(129,`--background-color`),wg()(),jc(130,`td`),iO(131,`Cor de fundo do componente`),wg(),jc(132,`td`)(133,`code`),iO(134,`var(--color-neutral-light-05)`),wg()()(),jc(135,`tr`)(136,`td`)(137,`code`),iO(138,`--color`),wg()(),jc(139,`td`),iO(140,`Cor do texto dos itens`),wg(),jc(141,`td`)(142,`code`),iO(143,`var(--color-action-default)`),wg()()(),jc(144,`tr`)(145,`td`)(146,`code`),iO(147,`--color-context-title`),wg()(),jc(148,`td`),iO(149,`Cor do texto do título de contexto`),wg(),jc(150,`td`)(151,`code`),iO(152,`var(--color-neutral-mid-40)`),wg()()(),jc(153,`tr`)(154,`td`)(155,`code`),iO(156,`--color-title`),wg()(),jc(157,`td`),iO(158,`Cor do texto do título principal`),wg(),jc(159,`td`)(160,`code`),iO(161,`var(--color-neutral-dark-80)`),wg()()(),jc(162,`tr`)(163,`td`)(164,`code`),iO(165,`--font-weight`),wg()(),jc(166,`td`),iO(167,`Peso da fonte dos itens`),wg(),jc(168,`td`)(169,`code`),iO(170,`var(--font-weight-bold)`),wg()()(),jc(171,`tr`)(172,`td`)(173,`code`),iO(174,`--font-weight-title`),wg()(),jc(175,`td`),iO(176,`Peso da fonte do título principal`),wg(),jc(177,`td`)(178,`code`),iO(179,`var(--font-weight-bold)`),wg()()(),jc(180,`tr`)(181,`td`)(182,`code`),iO(183,`--outline-color-focused`),wg()(),jc(184,`td`),iO(185,`Cor do outline no estado de focus`),wg(),jc(186,`td`)(187,`code`),iO(188,`var(--color-action-focus)`),wg()()(),jc(189,`tr`)(190,`td`)(191,`strong`),iO(192,`Hover`),wg()(),nu(193,`td`)(194,`td`),wg(),jc(195,`tr`)(196,`td`)(197,`code`),iO(198,`--color-hover`),wg()(),jc(199,`td`),iO(200,`Cor do texto no estado hover`),wg(),jc(201,`td`)(202,`code`),iO(203,`var(--color-brand-01-darkest)`),wg()()(),jc(204,`tr`)(205,`td`)(206,`code`),iO(207,`--background-color-hover`),wg()(),jc(208,`td`),iO(209,`Cor de fundo no estado hover`),wg(),jc(210,`td`)(211,`code`),iO(212,`var(--color-brand-01-lighter)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`strong`),iO(216,`Pressed`),wg()(),nu(217,`td`)(218,`td`),wg(),jc(219,`tr`)(220,`td`)(221,`code`),iO(222,`--background-color-pressed`),wg()(),jc(223,`td`),iO(224,`Cor de fundo no estado pressed`),wg(),jc(225,`td`)(226,`code`),iO(227,`var(--color-brand-01-light)`),wg()()(),jc(228,`tr`)(229,`td`)(230,`strong`),iO(231,`Active (Selected)`),wg()(),nu(232,`td`)(233,`td`),wg(),jc(234,`tr`)(235,`td`)(236,`code`),iO(237,`--background-color-actived`),wg()(),jc(238,`td`),iO(239,`Cor de fundo do item selecionado`),wg(),jc(240,`td`)(241,`code`),iO(242,`var(--color-brand-01-lightest)`),wg()()(),jc(243,`tr`)(244,`td`)(245,`code`),iO(246,`--color-actived`),wg()(),jc(247,`td`),iO(248,`Cor do texto do item selecionado`),wg(),jc(249,`td`)(250,`code`),iO(251,`var(--color-action-pressed)`),wg()()()()()(),jc(252,`div`,7)(253,`h4`,8),iO(254,`Seletor`),wg(),jc(255,`pre`,9),iO(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),wg()(),jc(257,`h4`,10),iO(258,`Propriedades`),wg(),jc(259,`table`,11)(260,`tr`,12)(261,`th`,13),iO(262,`Nome`),wg(),jc(263,`th`,13),iO(264,`Tipo`),wg(),jc(265,`th`,13),iO(266,`Padrão`),wg(),jc(267,`th`,13),iO(268,`Descrição`),wg()(),jc(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),iO(273,` p-context-title`),nu(274,`br`),wg()()(),jc(275,`td`,18)(276,`code`,19),iO(277,`string`),wg()(),jc(278,`td`,20),iO(279,`-`),wg(),jc(280,`td`,21)(281,`p`),iO(282,`Título do contexto superior`),wg()()(),jc(283,`tr`,14)(284,`td`,15)(285,`div`,16)(286,`span`,17),iO(287,` p-expanded`),nu(288,`br`),wg()()(),jc(289,`td`,18)(290,`code`,22),iO(291,`boolean`),wg()(),jc(292,`td`,20)(293,`p`)(294,`code`),iO(295,`true`),wg()()(),jc(296,`td`,21)(297,`p`),iO(298,`Define se o menu está aberto ou fechado.`),wg(),jc(299,`p`),iO(300,`Suporta two-way binding:`),wg(),jc(301,`pre`)(302,`code`,23),iO(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),wg()(),jc(304,`p`),iO(305,`ou`),wg(),jc(306,`pre`)(307,`code`,23),iO(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),wg()()()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,24)(312,`span`,25),iO(313,` (p-item-selected)`),nu(314,`br`),wg()()(),jc(315,`td`,18)(316,`code`,26),iO(317,`EventEmitter`),wg()(),jc(318,`td`,20),iO(319,`-`),wg(),jc(320,`td`,21)(321,`p`),iO(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),wg()()(),jc(323,`tr`,14)(324,`td`,15)(325,`div`,16)(326,`span`,17),iO(327,` p-items`),nu(328,`br`),wg()()(),jc(329,`td`,18)(330,`code`,27),iO(331,`Array<PoContextMenuItem>`),wg()(),jc(332,`td`,20),iO(333,`-`),wg(),jc(334,`td`,21)(335,`p`),iO(336,`Lista de itens para renderização.`),wg(),jc(337,`blockquote`)(338,`p`),iO(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),jc(340,`code`),iO(341,`selected: true`),wg(),iO(342,`.
Se mais de um item estiver com `),jc(343,`code`),iO(344,`selected: true`),wg(),iO(345,`, apenas o primeiro será mantido como selecionado.`),wg()()()(),jc(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),iO(350,` p-title`),nu(351,`br`),wg()()(),jc(352,`td`,18)(353,`code`,19),iO(354,`string`),wg()(),jc(355,`td`,20),iO(356,`-`),wg(),jc(357,`td`,21)(358,`p`),iO(359,`Título principal do menu`),wg()()()(),jc(360,`h3`),iO(361,`Interfaces`),wg(),jc(362,`h4`,28)(363,`code`,5),iO(364,`PoContextMenuItem`),wg()(),jc(365,`div`,2)(366,`p`),iO(367,`Interface para os itens do componente po-context-menu.`),wg()(),jc(368,`h4`,10),iO(369,`Propriedades`),wg(),jc(370,`table`,11)(371,`tr`,12)(372,`th`,13),iO(373,`Nome`),wg(),jc(374,`th`,13),iO(375,`Tipo`),wg(),jc(376,`th`,13),iO(377,`Descrição`),wg()(),jc(378,`tr`,14)(379,`td`,15)(380,`div`,16)(381,`span`,17),iO(382,` action`),nu(383,`br`),wg()()(),jc(384,`td`,18)(385,`code`,29),iO(386,`Function`),wg()(),jc(387,`td`,21)(388,`em`)(389,`strong`),iO(390,`(opcional)`),wg()(),jc(391,`p`),iO(392,`Ação executada ao clicar no item.`),wg()()(),jc(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),iO(397,` label`),nu(398,`br`),wg()()(),jc(399,`td`,18)(400,`code`,19),iO(401,`string`),wg()(),jc(402,`td`,21)(403,`p`),iO(404,`Texto do item de menu.`),wg()()(),jc(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),iO(409,` selected`),nu(410,`br`),wg()()(),jc(411,`td`,18)(412,`code`,22),iO(413,`boolean`),wg()(),jc(414,`td`,21)(415,`em`)(416,`strong`),iO(417,`(opcional)`),wg()(),jc(418,`p`),iO(419,`Estado de seleção do item.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var De=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Context Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-context-menu-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-context-menu-basic-view`)(6,`sample-po-context-menu-labs-view`)(7,`sample-po-context-menu-user-view`),wg()()()),a&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,se,ce,be,xe],encapsulation:2,changeDetection:1})}return i})()}];var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe$1({type:i});static ɵinj=ue$1({imports:[C1.forChild(De),C1]})}return i})();var ct=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe$1({type:i});static ɵinj=ue$1({imports:[Ta,Se]})}return i})();export{ct as DocPoContextMenuModule};