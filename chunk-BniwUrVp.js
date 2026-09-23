import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Bi as k5,Dt as W8e,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Wr as U,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,dn as oU,ea as p0,ga as w,j as E8e,l as ar,mr as MN,nr as HO,oa as ql,q as J4,qr as Up,r as Ga,ra as pw,ri as Xn,sa as qx,sr as Jy,ua as ue$1,un as nb,ut as Obe,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var re=(()=>{class i{poNotification=f(Eu);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`po-context-menu`,1),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),lg()()),a&2&&(Up(),cw(`p-items`,o.menuItems))},dependencies:[E8e],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Context Menu Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-context-menu-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,he,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{poNotification=f(Eu);contextTitle=U(`Cadastro`);title=U(`Funcionário`);expanded=U(!0);newItemLabel=U(``);selected=U(!1);menuItems=U([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=Vx();Ml(0,`div`,1)(1,`po-context-menu`,2),Mw(`p-expandedChange`,function(d){return Qy(u),yN(o.expanded,d)||(o.expanded=d),Jy(d)}),ht(`p-item-selected`,function(d){return o.onItemSelected(d)}),lg()(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),Mw(`ngModelChange`,function(d){return Qy(u),yN(o.contextTitle,d)||(o.contextTitle=d),Jy(d)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(d){return Qy(u),yN(o.title,d)||(o.title=d),Jy(d)}),lg(),f0(),lg(),Ml(8,`div`,3)(9,`po-switch`,6),Mw(`ngModelChange`,function(d){return Qy(u),yN(o.expanded,d)||(o.expanded=d),Jy(d)}),lg(),f0(),lg(),ql(10,`po-divider`),Ml(11,`div`,7)(12,`po-input`,8),Mw(`ngModelChange`,function(d){return Qy(u),yN(o.newItemLabel,d)||(o.newItemLabel=d),Jy(d)}),lg(),f0(),Ml(13,`po-switch`,9),Mw(`ngModelChange`,function(d){return Qy(u),yN(o.selected,d)||(o.selected=d),Jy(d)}),lg(),f0(),Ml(14,`po-button`,10),ht(`p-click`,function(){return o.addItem()}),lg()(),ql(15,`po-divider`),Ml(16,`div`,3)(17,`po-button`,11),ht(`p-click`,function(){return o.restore()}),lg()()()}a&2&&(Up(),cw(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),Tw(`p-expanded`,o.expanded),Up(5),Tw(`ngModel`,o.contextTitle),p0(),Up(),Tw(`ngModel`,o.title),p0(),Up(2),Tw(`ngModel`,o.expanded),p0(),Up(3),Tw(`ngModel`,o.newItemLabel),p0(),Up(),Tw(`ngModel`,o.selected),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,E8e,nb,lU,J4],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Context Menu Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-context-menu-wrapper">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-context-menu-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return i})();var Me=[`tab`];var ue=(()=>{class i{tab=k5(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=U([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label)}onActivatedTab(m){this.updateSelectedItemMenu(m.id)}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===m}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&pw(o.tab,Me,5),a&2&&qx()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(Ml(0,`po-context-tabs`,null,0)(2,`po-tab`,2),ht(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Ml(3,`div`,3)(4,`po-context-menu`,4),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),lg(),Ml(5,`po-page-default`,5),ql(6,`po-dynamic-form`,6,1),lg()()(),Ml(8,`po-tab`,7),ht(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Ml(9,`div`,3)(10,`po-context-menu`,4),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),lg(),Ml(11,`po-page-default`,8),ql(12,`po-dynamic-form`,6,1),lg()()(),Ml(14,`po-tab`,9),ht(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Ml(15,`div`,3)(16,`po-context-menu`,4),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),lg(),Ml(17,`po-page-default`,10),ql(18,`po-table`,11),lg()()()()),a&2&&(Up(4),cw(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Up(2),cw(`p-fields`,o.formDadosCadastrais),Up(4),cw(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Up(2),cw(`p-fields`,o.formEndereco),Up(4),cw(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Up(2),cw(`p-items`,o.documentos))},dependencies:[E8e,Obe,V8e,oU,SCe,W8e],styles:[`po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Context - Cadastro de Usuário`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-context-tabs #tab>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),lg(),Ml(25,`pre`,11),mN(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-context-menu-user`),lg(),ql(29,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Pe,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-context-menu.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoContextMenuComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-context-menu`),lg(),mN(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Ml(18,`code`),mN(19,`po-menu`),lg(),mN(20,`, porém independente e focado em navegação contextual.`),lg(),Ml(21,`p`),mN(22,`No caso de uso do componente `),Ml(23,`code`),mN(24,`po-page-default`),lg(),mN(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Ml(26,`strong`),mN(27,`po-context-menu-wrapper`),lg(),mN(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),lg(),Ml(29,`p`),mN(30,`O uso simultâneo dos componentes `),Ml(31,`code`),mN(32,`po-menu`),lg(),mN(33,` e `),Ml(34,`code`),mN(35,`po-context-menu`),lg(),mN(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),lg(),Ml(37,`h4`),mN(38,`Tokens customizáveis`),lg(),Ml(39,`p`),mN(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(41,`blockquote`)(42,`p`),mN(43,`Para maiores informações, acesse o guia `),Ml(44,`a`,6),mN(45,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(46,`.`),lg()(),Ml(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),mN(51,`Propriedade`),lg(),Ml(52,`th`),mN(53,`Descrição`),lg(),Ml(54,`th`),mN(55,`Valor Padrão`),lg()()(),Ml(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),mN(60,`Default Values`),lg()(),ql(61,`td`)(62,`td`),lg(),Ml(63,`tr`)(64,`td`)(65,`code`),mN(66,`--font-family`),lg()(),Ml(67,`td`),mN(68,`Família tipográfica usada`),lg(),Ml(69,`td`)(70,`code`),mN(71,`var(--font-family-theme)`),lg()()(),Ml(72,`tr`)(73,`td`)(74,`code`),mN(75,`--font-size`),lg()(),Ml(76,`td`),mN(77,`Tamanho da fonte dos itens`),lg(),Ml(78,`td`)(79,`code`),mN(80,`var(--font-size-default)`),lg()()(),Ml(81,`tr`)(82,`td`)(83,`code`),mN(84,`--font-size-context-title`),lg()(),Ml(85,`td`),mN(86,`Tamanho da fonte do título de contexto`),lg(),Ml(87,`td`)(88,`code`),mN(89,`var(--font-size-sm)`),lg()()(),Ml(90,`tr`)(91,`td`)(92,`code`),mN(93,`--font-size-title`),lg()(),Ml(94,`td`),mN(95,`Tamanho da fonte do título principal`),lg(),Ml(96,`td`)(97,`code`),mN(98,`var(--font-size-lg)`),lg()()(),Ml(99,`tr`)(100,`td`)(101,`code`),mN(102,`--line-height`),lg()(),Ml(103,`td`),mN(104,`Altura da linha`),lg(),Ml(105,`td`)(106,`code`),mN(107,`var(--line-height-md)`),lg()()(),Ml(108,`tr`)(109,`td`)(110,`code`),mN(111,`--border-radius`),lg()(),Ml(112,`td`),mN(113,`Raio dos cantos dos itens`),lg(),Ml(114,`td`)(115,`code`),mN(116,`var(--border-radius-md)`),lg()()(),Ml(117,`tr`)(118,`td`)(119,`code`),mN(120,`--border-color`),lg()(),Ml(121,`td`),mN(122,`Cor da borda lateral direita do componente`),lg(),Ml(123,`td`)(124,`code`),mN(125,`var(--color-neutral-light-20)`),lg()()(),Ml(126,`tr`)(127,`td`)(128,`code`),mN(129,`--background-color`),lg()(),Ml(130,`td`),mN(131,`Cor de fundo do componente`),lg(),Ml(132,`td`)(133,`code`),mN(134,`var(--color-neutral-light-05)`),lg()()(),Ml(135,`tr`)(136,`td`)(137,`code`),mN(138,`--color`),lg()(),Ml(139,`td`),mN(140,`Cor do texto dos itens`),lg(),Ml(141,`td`)(142,`code`),mN(143,`var(--color-action-default)`),lg()()(),Ml(144,`tr`)(145,`td`)(146,`code`),mN(147,`--color-context-title`),lg()(),Ml(148,`td`),mN(149,`Cor do texto do título de contexto`),lg(),Ml(150,`td`)(151,`code`),mN(152,`var(--color-neutral-mid-40)`),lg()()(),Ml(153,`tr`)(154,`td`)(155,`code`),mN(156,`--color-title`),lg()(),Ml(157,`td`),mN(158,`Cor do texto do título principal`),lg(),Ml(159,`td`)(160,`code`),mN(161,`var(--color-neutral-dark-80)`),lg()()(),Ml(162,`tr`)(163,`td`)(164,`code`),mN(165,`--font-weight`),lg()(),Ml(166,`td`),mN(167,`Peso da fonte dos itens`),lg(),Ml(168,`td`)(169,`code`),mN(170,`var(--font-weight-bold)`),lg()()(),Ml(171,`tr`)(172,`td`)(173,`code`),mN(174,`--font-weight-title`),lg()(),Ml(175,`td`),mN(176,`Peso da fonte do título principal`),lg(),Ml(177,`td`)(178,`code`),mN(179,`var(--font-weight-bold)`),lg()()(),Ml(180,`tr`)(181,`td`)(182,`code`),mN(183,`--outline-color-focused`),lg()(),Ml(184,`td`),mN(185,`Cor do outline no estado de focus`),lg(),Ml(186,`td`)(187,`code`),mN(188,`var(--color-action-focus)`),lg()()(),Ml(189,`tr`)(190,`td`)(191,`strong`),mN(192,`Hover`),lg()(),ql(193,`td`)(194,`td`),lg(),Ml(195,`tr`)(196,`td`)(197,`code`),mN(198,`--color-hover`),lg()(),Ml(199,`td`),mN(200,`Cor do texto no estado hover`),lg(),Ml(201,`td`)(202,`code`),mN(203,`var(--color-brand-01-darkest)`),lg()()(),Ml(204,`tr`)(205,`td`)(206,`code`),mN(207,`--background-color-hover`),lg()(),Ml(208,`td`),mN(209,`Cor de fundo no estado hover`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--color-brand-01-lighter)`),lg()()(),Ml(213,`tr`)(214,`td`)(215,`strong`),mN(216,`Pressed`),lg()(),ql(217,`td`)(218,`td`),lg(),Ml(219,`tr`)(220,`td`)(221,`code`),mN(222,`--background-color-pressed`),lg()(),Ml(223,`td`),mN(224,`Cor de fundo no estado pressed`),lg(),Ml(225,`td`)(226,`code`),mN(227,`var(--color-brand-01-light)`),lg()()(),Ml(228,`tr`)(229,`td`)(230,`strong`),mN(231,`Active (Selected)`),lg()(),ql(232,`td`)(233,`td`),lg(),Ml(234,`tr`)(235,`td`)(236,`code`),mN(237,`--background-color-actived`),lg()(),Ml(238,`td`),mN(239,`Cor de fundo do item selecionado`),lg(),Ml(240,`td`)(241,`code`),mN(242,`var(--color-brand-01-lightest)`),lg()()(),Ml(243,`tr`)(244,`td`)(245,`code`),mN(246,`--color-actived`),lg()(),Ml(247,`td`),mN(248,`Cor do texto do item selecionado`),lg(),Ml(249,`td`)(250,`code`),mN(251,`var(--color-action-pressed)`),lg()()()()()(),Ml(252,`div`,7)(253,`h4`,8),mN(254,`Seletor`),lg(),Ml(255,`pre`,9),mN(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),lg()(),Ml(257,`h4`,10),mN(258,`Propriedades`),lg(),Ml(259,`table`,11)(260,`tr`,12)(261,`th`,13),mN(262,`Nome`),lg(),Ml(263,`th`,13),mN(264,`Tipo`),lg(),Ml(265,`th`,13),mN(266,`Padrão`),lg(),Ml(267,`th`,13),mN(268,`Descrição`),lg()(),Ml(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),mN(273,` p-context-title`),ql(274,`br`),lg()()(),Ml(275,`td`,18)(276,`code`,19),mN(277,`string`),lg()(),Ml(278,`td`,20),mN(279,`-`),lg(),Ml(280,`td`,21)(281,`p`),mN(282,`Título do contexto superior`),lg()()(),Ml(283,`tr`,14)(284,`td`,15)(285,`div`,16)(286,`span`,17),mN(287,` p-expanded`),ql(288,`br`),lg()()(),Ml(289,`td`,18)(290,`code`,22),mN(291,`boolean`),lg()(),Ml(292,`td`,20)(293,`p`)(294,`code`),mN(295,`true`),lg()()(),Ml(296,`td`,21)(297,`p`),mN(298,`Define se o menu está aberto ou fechado.`),lg(),Ml(299,`p`),mN(300,`Suporta two-way binding:`),lg(),Ml(301,`pre`)(302,`code`,23),mN(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),lg()(),Ml(304,`p`),mN(305,`ou`),lg(),Ml(306,`pre`)(307,`code`,23),mN(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),lg()()()(),Ml(309,`tr`,14)(310,`td`,15)(311,`div`,24)(312,`span`,25),mN(313,` (p-item-selected)`),ql(314,`br`),lg()()(),Ml(315,`td`,18)(316,`code`,26),mN(317,`EventEmitter`),lg()(),Ml(318,`td`,20),mN(319,`-`),lg(),Ml(320,`td`,21)(321,`p`),mN(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),lg()()(),Ml(323,`tr`,14)(324,`td`,15)(325,`div`,16)(326,`span`,17),mN(327,` p-items`),ql(328,`br`),lg()()(),Ml(329,`td`,18)(330,`code`,27),mN(331,`Array<PoContextMenuItem>`),lg()(),Ml(332,`td`,20),mN(333,`-`),lg(),Ml(334,`td`,21)(335,`p`),mN(336,`Lista de itens para renderização.`),lg(),Ml(337,`blockquote`)(338,`p`),mN(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),Ml(340,`code`),mN(341,`selected: true`),lg(),mN(342,`.
Se mais de um item estiver com `),Ml(343,`code`),mN(344,`selected: true`),lg(),mN(345,`, apenas o primeiro será mantido como selecionado.`),lg()()()(),Ml(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),mN(350,` p-title`),ql(351,`br`),lg()()(),Ml(352,`td`,18)(353,`code`,19),mN(354,`string`),lg()(),Ml(355,`td`,20),mN(356,`-`),lg(),Ml(357,`td`,21)(358,`p`),mN(359,`Título principal do menu`),lg()()()(),Ml(360,`h3`),mN(361,`Interfaces`),lg(),Ml(362,`h4`,28)(363,`code`,5),mN(364,`PoContextMenuItem`),lg()(),Ml(365,`div`,2)(366,`p`),mN(367,`Interface para os itens do componente po-context-menu.`),lg()(),Ml(368,`h4`,10),mN(369,`Propriedades`),lg(),Ml(370,`table`,11)(371,`tr`,12)(372,`th`,13),mN(373,`Nome`),lg(),Ml(374,`th`,13),mN(375,`Tipo`),lg(),Ml(376,`th`,13),mN(377,`Descrição`),lg()(),Ml(378,`tr`,14)(379,`td`,15)(380,`div`,16)(381,`span`,17),mN(382,` action`),ql(383,`br`),lg()()(),Ml(384,`td`,18)(385,`code`,29),mN(386,`Function`),lg()(),Ml(387,`td`,21)(388,`em`)(389,`strong`),mN(390,`(opcional)`),lg()(),Ml(391,`p`),mN(392,`Ação executada ao clicar no item.`),lg()()(),Ml(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),mN(397,` label`),ql(398,`br`),lg()()(),Ml(399,`td`,18)(400,`code`,19),mN(401,`string`),lg()(),Ml(402,`td`,21)(403,`p`),mN(404,`Texto do item de menu.`),lg()()(),Ml(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),mN(409,` selected`),ql(410,`br`),lg()()(),Ml(411,`td`,18)(412,`code`,22),mN(413,`boolean`),lg()(),Ml(414,`td`,21)(415,`em`)(416,`strong`),mN(417,`(opcional)`),lg()(),Ml(418,`p`),mN(419,`Estado de seleção do item.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var De=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Context Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-context-menu-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-context-menu-basic-view`)(6,`sample-po-context-menu-labs-view`)(7,`sample-po-context-menu-user-view`),lg()()()),a&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,se,ce,be,xe],encapsulation:2,changeDetection:1})}return i})()}];var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[NL.forChild(De),NL]})}return i})();var ct=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,Se]})}return i})();export{ct as DocPoContextMenuModule};