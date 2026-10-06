import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as pt,Br as Qn,Dr as LP,Er as Kx,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Nn as x4,Nr as O5,Nt as _oe,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,Zr as U,_a as wn,_i as e_,ar as E,b as $ze,bi as f,br as Jv,ca as ue$1,ci as b9,ct as Ou,di as cE,dr as Hn,fn as ni,i as _a,k as D4,ki as he$1,kn as v4,kt as Xze,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wi as gE,wr as Kc,wt as Vze,zi as kL}from"./main-AGY457H2.js";var re=(()=>{class i{poNotification=f(Ou);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`po-context-menu`,1),pt(`p-item-selected`,function(s){return o.onItemSelected(s)}),ug()()),a&2&&(Hp(),cE(`p-items`,o.menuItems))},dependencies:[Vze],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Context Menu Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-context-menu-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,he,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{poNotification=f(Ou);contextTitle=U(`Cadastro`);title=U(`Funcionário`);expanded=U(!0);newItemLabel=U(``);selected=U(!1);menuItems=U([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=Bx();Ac(0,`div`,1)(1,`po-context-menu`,2),RE(`p-expandedChange`,function(d){return Jv(u),DN(o.expanded,d)||(o.expanded=d),e_(d)}),pt(`p-item-selected`,function(d){return o.onItemSelected(d)}),ug()(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),RE(`ngModelChange`,function(d){return Jv(u),DN(o.contextTitle,d)||(o.contextTitle=d),e_(d)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(d){return Jv(u),DN(o.title,d)||(o.title=d),e_(d)}),ug(),p0(),ug(),Ac(8,`div`,3)(9,`po-switch`,6),RE(`ngModelChange`,function(d){return Jv(u),DN(o.expanded,d)||(o.expanded=d),e_(d)}),ug(),p0(),ug(),Kc(10,`po-divider`),Ac(11,`div`,7)(12,`po-input`,8),RE(`ngModelChange`,function(d){return Jv(u),DN(o.newItemLabel,d)||(o.newItemLabel=d),e_(d)}),ug(),p0(),Ac(13,`po-switch`,9),RE(`ngModelChange`,function(d){return Jv(u),DN(o.selected,d)||(o.selected=d),e_(d)}),ug(),p0(),Ac(14,`po-button`,10),pt(`p-click`,function(){return o.addItem()}),ug()(),Kc(15,`po-divider`),Ac(16,`div`,3)(17,`po-button`,11),pt(`p-click`,function(){return o.restore()}),ug()()()}a&2&&(Hp(),cE(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),TE(`p-expanded`,o.expanded),Hp(5),TE(`ngModel`,o.contextTitle),m0(),Hp(),TE(`ngModel`,o.title),m0(),Hp(2),TE(`ngModel`,o.expanded),m0(),Hp(3),TE(`ngModel`,o.newItemLabel),m0(),Hp(),TE(`ngModel`,o.selected),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Vze,Ef,D4,v4],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Context Menu Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-context-menu-wrapper">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-context-menu-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,pe],encapsulation:2,changeDetection:1})}return i})();var Me=[`tab`];var ue=(()=>{class i{tab=O5(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=U([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label)}onActivatedTab(m){this.updateSelectedItemMenu(m.id)}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===m}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&gE(o.tab,Me,5),a&2&&Kx()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(Ac(0,`po-context-tabs`,null,0)(2,`po-tab`,2),pt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Ac(3,`div`,3)(4,`po-context-menu`,4),pt(`p-item-selected`,function(s){return o.onItemSelected(s)}),ug(),Ac(5,`po-page-default`,5),Kc(6,`po-dynamic-form`,6,1),ug()()(),Ac(8,`po-tab`,7),pt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Ac(9,`div`,3)(10,`po-context-menu`,4),pt(`p-item-selected`,function(s){return o.onItemSelected(s)}),ug(),Ac(11,`po-page-default`,8),Kc(12,`po-dynamic-form`,6,1),ug()()(),Ac(14,`po-tab`,9),pt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Ac(15,`div`,3)(16,`po-context-menu`,4),pt(`p-item-selected`,function(s){return o.onItemSelected(s)}),ug(),Ac(17,`po-page-default`,10),Kc(18,`po-table`,11),ug()()()()),a&2&&(Hp(4),cE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Hp(2),cE(`p-fields`,o.formDadosCadastrais),Hp(4),cE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Hp(2),cE(`p-fields`,o.formEndereco),Hp(4),cE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Hp(2),cE(`p-items`,o.documentos))},dependencies:[Vze,_oe,$ze,x4,gae,Xze],styles:[`po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Context - Cadastro de Usuário`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-context-tabs #tab>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),ug(),Ac(25,`pre`,11),vN(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-context-menu-user`),ug(),Kc(29,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Pe,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ue],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-context-menu.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoContextMenuComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-context-menu`),ug(),vN(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Ac(18,`code`),vN(19,`po-menu`),ug(),vN(20,`, porém independente e focado em navegação contextual.`),ug(),Ac(21,`p`),vN(22,`No caso de uso do componente `),Ac(23,`code`),vN(24,`po-page-default`),ug(),vN(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Ac(26,`strong`),vN(27,`po-context-menu-wrapper`),ug(),vN(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),ug(),Ac(29,`p`),vN(30,`O uso simultâneo dos componentes `),Ac(31,`code`),vN(32,`po-menu`),ug(),vN(33,` e `),Ac(34,`code`),vN(35,`po-context-menu`),ug(),vN(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),ug(),Ac(37,`h4`),vN(38,`Tokens customizáveis`),ug(),Ac(39,`p`),vN(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(41,`blockquote`)(42,`p`),vN(43,`Para maiores informações, acesse o guia `),Ac(44,`a`,6),vN(45,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(46,`.`),ug()(),Ac(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),vN(51,`Propriedade`),ug(),Ac(52,`th`),vN(53,`Descrição`),ug(),Ac(54,`th`),vN(55,`Valor Padrão`),ug()()(),Ac(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),vN(60,`Default Values`),ug()(),Kc(61,`td`)(62,`td`),ug(),Ac(63,`tr`)(64,`td`)(65,`code`),vN(66,`--font-family`),ug()(),Ac(67,`td`),vN(68,`Família tipográfica usada`),ug(),Ac(69,`td`)(70,`code`),vN(71,`var(--font-family-theme)`),ug()()(),Ac(72,`tr`)(73,`td`)(74,`code`),vN(75,`--font-size`),ug()(),Ac(76,`td`),vN(77,`Tamanho da fonte dos itens`),ug(),Ac(78,`td`)(79,`code`),vN(80,`var(--font-size-default)`),ug()()(),Ac(81,`tr`)(82,`td`)(83,`code`),vN(84,`--font-size-context-title`),ug()(),Ac(85,`td`),vN(86,`Tamanho da fonte do título de contexto`),ug(),Ac(87,`td`)(88,`code`),vN(89,`var(--font-size-sm)`),ug()()(),Ac(90,`tr`)(91,`td`)(92,`code`),vN(93,`--font-size-title`),ug()(),Ac(94,`td`),vN(95,`Tamanho da fonte do título principal`),ug(),Ac(96,`td`)(97,`code`),vN(98,`var(--font-size-lg)`),ug()()(),Ac(99,`tr`)(100,`td`)(101,`code`),vN(102,`--line-height`),ug()(),Ac(103,`td`),vN(104,`Altura da linha`),ug(),Ac(105,`td`)(106,`code`),vN(107,`var(--line-height-md)`),ug()()(),Ac(108,`tr`)(109,`td`)(110,`code`),vN(111,`--border-radius`),ug()(),Ac(112,`td`),vN(113,`Raio dos cantos dos itens`),ug(),Ac(114,`td`)(115,`code`),vN(116,`var(--border-radius-md)`),ug()()(),Ac(117,`tr`)(118,`td`)(119,`code`),vN(120,`--border-color`),ug()(),Ac(121,`td`),vN(122,`Cor da borda lateral direita do componente`),ug(),Ac(123,`td`)(124,`code`),vN(125,`var(--color-neutral-light-20)`),ug()()(),Ac(126,`tr`)(127,`td`)(128,`code`),vN(129,`--background-color`),ug()(),Ac(130,`td`),vN(131,`Cor de fundo do componente`),ug(),Ac(132,`td`)(133,`code`),vN(134,`var(--color-neutral-light-05)`),ug()()(),Ac(135,`tr`)(136,`td`)(137,`code`),vN(138,`--color`),ug()(),Ac(139,`td`),vN(140,`Cor do texto dos itens`),ug(),Ac(141,`td`)(142,`code`),vN(143,`var(--color-action-default)`),ug()()(),Ac(144,`tr`)(145,`td`)(146,`code`),vN(147,`--color-context-title`),ug()(),Ac(148,`td`),vN(149,`Cor do texto do título de contexto`),ug(),Ac(150,`td`)(151,`code`),vN(152,`var(--color-neutral-mid-40)`),ug()()(),Ac(153,`tr`)(154,`td`)(155,`code`),vN(156,`--color-title`),ug()(),Ac(157,`td`),vN(158,`Cor do texto do título principal`),ug(),Ac(159,`td`)(160,`code`),vN(161,`var(--color-neutral-dark-80)`),ug()()(),Ac(162,`tr`)(163,`td`)(164,`code`),vN(165,`--font-weight`),ug()(),Ac(166,`td`),vN(167,`Peso da fonte dos itens`),ug(),Ac(168,`td`)(169,`code`),vN(170,`var(--font-weight-bold)`),ug()()(),Ac(171,`tr`)(172,`td`)(173,`code`),vN(174,`--font-weight-title`),ug()(),Ac(175,`td`),vN(176,`Peso da fonte do título principal`),ug(),Ac(177,`td`)(178,`code`),vN(179,`var(--font-weight-bold)`),ug()()(),Ac(180,`tr`)(181,`td`)(182,`code`),vN(183,`--outline-color-focused`),ug()(),Ac(184,`td`),vN(185,`Cor do outline no estado de focus`),ug(),Ac(186,`td`)(187,`code`),vN(188,`var(--color-action-focus)`),ug()()(),Ac(189,`tr`)(190,`td`)(191,`strong`),vN(192,`Hover`),ug()(),Kc(193,`td`)(194,`td`),ug(),Ac(195,`tr`)(196,`td`)(197,`code`),vN(198,`--color-hover`),ug()(),Ac(199,`td`),vN(200,`Cor do texto no estado hover`),ug(),Ac(201,`td`)(202,`code`),vN(203,`var(--color-brand-01-darkest)`),ug()()(),Ac(204,`tr`)(205,`td`)(206,`code`),vN(207,`--background-color-hover`),ug()(),Ac(208,`td`),vN(209,`Cor de fundo no estado hover`),ug(),Ac(210,`td`)(211,`code`),vN(212,`var(--color-brand-01-lighter)`),ug()()(),Ac(213,`tr`)(214,`td`)(215,`strong`),vN(216,`Pressed`),ug()(),Kc(217,`td`)(218,`td`),ug(),Ac(219,`tr`)(220,`td`)(221,`code`),vN(222,`--background-color-pressed`),ug()(),Ac(223,`td`),vN(224,`Cor de fundo no estado pressed`),ug(),Ac(225,`td`)(226,`code`),vN(227,`var(--color-brand-01-light)`),ug()()(),Ac(228,`tr`)(229,`td`)(230,`strong`),vN(231,`Active (Selected)`),ug()(),Kc(232,`td`)(233,`td`),ug(),Ac(234,`tr`)(235,`td`)(236,`code`),vN(237,`--background-color-actived`),ug()(),Ac(238,`td`),vN(239,`Cor de fundo do item selecionado`),ug(),Ac(240,`td`)(241,`code`),vN(242,`var(--color-brand-01-lightest)`),ug()()(),Ac(243,`tr`)(244,`td`)(245,`code`),vN(246,`--color-actived`),ug()(),Ac(247,`td`),vN(248,`Cor do texto do item selecionado`),ug(),Ac(249,`td`)(250,`code`),vN(251,`var(--color-action-pressed)`),ug()()()()()(),Ac(252,`div`,7)(253,`h4`,8),vN(254,`Seletor`),ug(),Ac(255,`pre`,9),vN(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),ug()(),Ac(257,`h4`,10),vN(258,`Propriedades`),ug(),Ac(259,`table`,11)(260,`tr`,12)(261,`th`,13),vN(262,`Nome`),ug(),Ac(263,`th`,13),vN(264,`Tipo`),ug(),Ac(265,`th`,13),vN(266,`Padrão`),ug(),Ac(267,`th`,13),vN(268,`Descrição`),ug()(),Ac(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),vN(273,` p-context-title`),Kc(274,`br`),ug()()(),Ac(275,`td`,18)(276,`code`,19),vN(277,`string`),ug()(),Ac(278,`td`,20),vN(279,`-`),ug(),Ac(280,`td`,21)(281,`p`),vN(282,`Título do contexto superior`),ug()()(),Ac(283,`tr`,14)(284,`td`,15)(285,`div`,16)(286,`span`,17),vN(287,` p-expanded`),Kc(288,`br`),ug()()(),Ac(289,`td`,18)(290,`code`,22),vN(291,`boolean`),ug()(),Ac(292,`td`,20)(293,`p`)(294,`code`),vN(295,`true`),ug()()(),Ac(296,`td`,21)(297,`p`),vN(298,`Define se o menu está aberto ou fechado.`),ug(),Ac(299,`p`),vN(300,`Suporta two-way binding:`),ug(),Ac(301,`pre`)(302,`code`,23),vN(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),ug()(),Ac(304,`p`),vN(305,`ou`),ug(),Ac(306,`pre`)(307,`code`,23),vN(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),ug()()()(),Ac(309,`tr`,14)(310,`td`,15)(311,`div`,24)(312,`span`,25),vN(313,` (p-item-selected)`),Kc(314,`br`),ug()()(),Ac(315,`td`,18)(316,`code`,26),vN(317,`EventEmitter`),ug()(),Ac(318,`td`,20),vN(319,`-`),ug(),Ac(320,`td`,21)(321,`p`),vN(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),ug()()(),Ac(323,`tr`,14)(324,`td`,15)(325,`div`,16)(326,`span`,17),vN(327,` p-items`),Kc(328,`br`),ug()()(),Ac(329,`td`,18)(330,`code`,27),vN(331,`Array<PoContextMenuItem>`),ug()(),Ac(332,`td`,20),vN(333,`-`),ug(),Ac(334,`td`,21)(335,`p`),vN(336,`Lista de itens para renderização.`),ug(),Ac(337,`blockquote`)(338,`p`),vN(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),Ac(340,`code`),vN(341,`selected: true`),ug(),vN(342,`.
Se mais de um item estiver com `),Ac(343,`code`),vN(344,`selected: true`),ug(),vN(345,`, apenas o primeiro será mantido como selecionado.`),ug()()()(),Ac(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),vN(350,` p-title`),Kc(351,`br`),ug()()(),Ac(352,`td`,18)(353,`code`,19),vN(354,`string`),ug()(),Ac(355,`td`,20),vN(356,`-`),ug(),Ac(357,`td`,21)(358,`p`),vN(359,`Título principal do menu`),ug()()()(),Ac(360,`h3`),vN(361,`Interfaces`),ug(),Ac(362,`h4`,28)(363,`code`,5),vN(364,`PoContextMenuItem`),ug()(),Ac(365,`div`,2)(366,`p`),vN(367,`Interface para os itens do componente po-context-menu.`),ug()(),Ac(368,`h4`,10),vN(369,`Propriedades`),ug(),Ac(370,`table`,11)(371,`tr`,12)(372,`th`,13),vN(373,`Nome`),ug(),Ac(374,`th`,13),vN(375,`Tipo`),ug(),Ac(376,`th`,13),vN(377,`Descrição`),ug()(),Ac(378,`tr`,14)(379,`td`,15)(380,`div`,16)(381,`span`,17),vN(382,` action`),Kc(383,`br`),ug()()(),Ac(384,`td`,18)(385,`code`,29),vN(386,`Function`),ug()(),Ac(387,`td`,21)(388,`em`)(389,`strong`),vN(390,`(opcional)`),ug()(),Ac(391,`p`),vN(392,`Ação executada ao clicar no item.`),ug()()(),Ac(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),vN(397,` label`),Kc(398,`br`),ug()()(),Ac(399,`td`,18)(400,`code`,19),vN(401,`string`),ug()(),Ac(402,`td`,21)(403,`p`),vN(404,`Texto do item de menu.`),ug()()(),Ac(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),vN(409,` selected`),Kc(410,`br`),ug()()(),Ac(411,`td`,18)(412,`code`,22),vN(413,`boolean`),ug()(),Ac(414,`td`,21)(415,`em`)(416,`strong`),vN(417,`(opcional)`),ug()(),Ac(418,`p`),vN(419,`Estado de seleção do item.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var De=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Context Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-context-menu-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-context-menu-basic-view`)(6,`sample-po-context-menu-labs-view`)(7,`sample-po-context-menu-user-view`),ug()()()),a&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[$ze,gae,bae,se,ce,be,xe],encapsulation:2,changeDetection:1})}return i})()}];var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[kL.forChild(De),kL]})}return i})();var ct=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[Ta,Se]})}return i})();export{ct as DocPoContextMenuModule};