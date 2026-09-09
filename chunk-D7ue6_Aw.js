import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ci as cw,Cr as M5,Ct as X4,Ei as f,Fi as he$1,Gr as Un,Gt as g8e,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,Ui as l0,Ur as U,Vi as jx,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,dt as Sbe,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,v as A8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var re=(()=>{class i{poNotification=f(Eu);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`po-context-menu`,1),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),ag()()),a&2&&(jp(),nw(`p-items`,o.menuItems))},dependencies:[g8e],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Context Menu Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-context-menu-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,he,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{poNotification=f(Eu);contextTitle=U(`Cadastro`);title=U(`Funcionário`);expanded=U(!0);newItemLabel=U(``);selected=U(!1);menuItems=U([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=Ax();Tl(0,`div`,1)(1,`po-context-menu`,2),ww(`p-expandedChange`,function(d){return Ky(u),uN(o.expanded,d)||(o.expanded=d),Xy(d)}),ht(`p-item-selected`,function(d){return o.onItemSelected(d)}),ag()(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),ww(`ngModelChange`,function(d){return Ky(u),uN(o.contextTitle,d)||(o.contextTitle=d),Xy(d)}),ag(),a0(),Tl(7,`po-input`,5),ww(`ngModelChange`,function(d){return Ky(u),uN(o.title,d)||(o.title=d),Xy(d)}),ag(),a0(),ag(),Tl(8,`div`,3)(9,`po-switch`,6),ww(`ngModelChange`,function(d){return Ky(u),uN(o.expanded,d)||(o.expanded=d),Xy(d)}),ag(),a0(),ag(),Gl(10,`po-divider`),Tl(11,`div`,7)(12,`po-input`,8),ww(`ngModelChange`,function(d){return Ky(u),uN(o.newItemLabel,d)||(o.newItemLabel=d),Xy(d)}),ag(),a0(),Tl(13,`po-switch`,9),ww(`ngModelChange`,function(d){return Ky(u),uN(o.selected,d)||(o.selected=d),Xy(d)}),ag(),a0(),Tl(14,`po-button`,10),ht(`p-click`,function(){return o.addItem()}),ag()(),Gl(15,`po-divider`),Tl(16,`div`,3)(17,`po-button`,11),ht(`p-click`,function(){return o.restore()}),ag()()()}a&2&&(jp(),nw(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),Ew(`p-expanded`,o.expanded),jp(5),Ew(`ngModel`,o.contextTitle),l0(),jp(),Ew(`ngModel`,o.title),l0(),jp(2),Ew(`ngModel`,o.expanded),l0(),jp(3),Ew(`ngModel`,o.newItemLabel),l0(),jp(),Ew(`ngModel`,o.selected),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,g8e,Xy$1,iU,j4],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Context Menu Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-context-menu-wrapper">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-context-menu-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return i})();var Me=[`tab`];var ue=(()=>{class i{tab=M5(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=U([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label)}onActivatedTab(m){this.updateSelectedItemMenu(m.id)}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===m}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&cw(o.tab,Me,5),a&2&&jx()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(Tl(0,`po-context-tabs`,null,0)(2,`po-tab`,2),ht(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Tl(3,`div`,3)(4,`po-context-menu`,4),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),ag(),Tl(5,`po-page-default`,5),Gl(6,`po-dynamic-form`,6,1),ag()()(),Tl(8,`po-tab`,7),ht(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Tl(9,`div`,3)(10,`po-context-menu`,4),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),ag(),Tl(11,`po-page-default`,8),Gl(12,`po-dynamic-form`,6,1),ag()()(),Tl(14,`po-tab`,9),ht(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Tl(15,`div`,3)(16,`po-context-menu`,4),ht(`p-item-selected`,function(s){return o.onItemSelected(s)}),ag(),Tl(17,`po-page-default`,10),Gl(18,`po-table`,11),ag()()()()),a&2&&(jp(4),nw(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),jp(2),nw(`p-fields`,o.formDadosCadastrais),jp(4),nw(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),jp(2),nw(`p-fields`,o.formEndereco),jp(4),nw(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),jp(2),nw(`p-items`,o.documentos))},dependencies:[g8e,Sbe,S8e,X4,mCe,A8e],styles:[`po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Context - Cadastro de Usuário`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-context-tabs #tab>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),ag(),Tl(25,`pre`,11),cN(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-context-menu-user`),ag(),Gl(29,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Pe,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-context-menu.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoContextMenuComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-context-menu`),ag(),cN(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Tl(18,`code`),cN(19,`po-menu`),ag(),cN(20,`, porém independente e focado em navegação contextual.`),ag(),Tl(21,`p`),cN(22,`No caso de uso do componente `),Tl(23,`code`),cN(24,`po-page-default`),ag(),cN(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Tl(26,`strong`),cN(27,`po-context-menu-wrapper`),ag(),cN(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),ag(),Tl(29,`p`),cN(30,`O uso simultâneo dos componentes `),Tl(31,`code`),cN(32,`po-menu`),ag(),cN(33,` e `),Tl(34,`code`),cN(35,`po-context-menu`),ag(),cN(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),ag(),Tl(37,`h4`),cN(38,`Tokens customizáveis`),ag(),Tl(39,`p`),cN(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(41,`blockquote`)(42,`p`),cN(43,`Para maiores informações, acesse o guia `),Tl(44,`a`,6),cN(45,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(46,`.`),ag()(),Tl(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),cN(51,`Propriedade`),ag(),Tl(52,`th`),cN(53,`Descrição`),ag(),Tl(54,`th`),cN(55,`Valor Padrão`),ag()()(),Tl(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),cN(60,`Default Values`),ag()(),Gl(61,`td`)(62,`td`),ag(),Tl(63,`tr`)(64,`td`)(65,`code`),cN(66,`--font-family`),ag()(),Tl(67,`td`),cN(68,`Família tipográfica usada`),ag(),Tl(69,`td`)(70,`code`),cN(71,`var(--font-family-theme)`),ag()()(),Tl(72,`tr`)(73,`td`)(74,`code`),cN(75,`--font-size`),ag()(),Tl(76,`td`),cN(77,`Tamanho da fonte dos itens`),ag(),Tl(78,`td`)(79,`code`),cN(80,`var(--font-size-default)`),ag()()(),Tl(81,`tr`)(82,`td`)(83,`code`),cN(84,`--font-size-context-title`),ag()(),Tl(85,`td`),cN(86,`Tamanho da fonte do título de contexto`),ag(),Tl(87,`td`)(88,`code`),cN(89,`var(--font-size-sm)`),ag()()(),Tl(90,`tr`)(91,`td`)(92,`code`),cN(93,`--font-size-title`),ag()(),Tl(94,`td`),cN(95,`Tamanho da fonte do título principal`),ag(),Tl(96,`td`)(97,`code`),cN(98,`var(--font-size-lg)`),ag()()(),Tl(99,`tr`)(100,`td`)(101,`code`),cN(102,`--line-height`),ag()(),Tl(103,`td`),cN(104,`Altura da linha`),ag(),Tl(105,`td`)(106,`code`),cN(107,`var(--line-height-md)`),ag()()(),Tl(108,`tr`)(109,`td`)(110,`code`),cN(111,`--border-radius`),ag()(),Tl(112,`td`),cN(113,`Raio dos cantos dos itens`),ag(),Tl(114,`td`)(115,`code`),cN(116,`var(--border-radius-md)`),ag()()(),Tl(117,`tr`)(118,`td`)(119,`code`),cN(120,`--border-color`),ag()(),Tl(121,`td`),cN(122,`Cor da borda lateral direita do componente`),ag(),Tl(123,`td`)(124,`code`),cN(125,`var(--color-neutral-light-20)`),ag()()(),Tl(126,`tr`)(127,`td`)(128,`code`),cN(129,`--background-color`),ag()(),Tl(130,`td`),cN(131,`Cor de fundo do componente`),ag(),Tl(132,`td`)(133,`code`),cN(134,`var(--color-neutral-light-05)`),ag()()(),Tl(135,`tr`)(136,`td`)(137,`code`),cN(138,`--color`),ag()(),Tl(139,`td`),cN(140,`Cor do texto dos itens`),ag(),Tl(141,`td`)(142,`code`),cN(143,`var(--color-action-default)`),ag()()(),Tl(144,`tr`)(145,`td`)(146,`code`),cN(147,`--color-context-title`),ag()(),Tl(148,`td`),cN(149,`Cor do texto do título de contexto`),ag(),Tl(150,`td`)(151,`code`),cN(152,`var(--color-neutral-mid-40)`),ag()()(),Tl(153,`tr`)(154,`td`)(155,`code`),cN(156,`--color-title`),ag()(),Tl(157,`td`),cN(158,`Cor do texto do título principal`),ag(),Tl(159,`td`)(160,`code`),cN(161,`var(--color-neutral-dark-80)`),ag()()(),Tl(162,`tr`)(163,`td`)(164,`code`),cN(165,`--font-weight`),ag()(),Tl(166,`td`),cN(167,`Peso da fonte dos itens`),ag(),Tl(168,`td`)(169,`code`),cN(170,`var(--font-weight-bold)`),ag()()(),Tl(171,`tr`)(172,`td`)(173,`code`),cN(174,`--font-weight-title`),ag()(),Tl(175,`td`),cN(176,`Peso da fonte do título principal`),ag(),Tl(177,`td`)(178,`code`),cN(179,`var(--font-weight-bold)`),ag()()(),Tl(180,`tr`)(181,`td`)(182,`code`),cN(183,`--outline-color-focused`),ag()(),Tl(184,`td`),cN(185,`Cor do outline no estado de focus`),ag(),Tl(186,`td`)(187,`code`),cN(188,`var(--color-action-focus)`),ag()()(),Tl(189,`tr`)(190,`td`)(191,`strong`),cN(192,`Hover`),ag()(),Gl(193,`td`)(194,`td`),ag(),Tl(195,`tr`)(196,`td`)(197,`code`),cN(198,`--color-hover`),ag()(),Tl(199,`td`),cN(200,`Cor do texto no estado hover`),ag(),Tl(201,`td`)(202,`code`),cN(203,`var(--color-brand-01-darkest)`),ag()()(),Tl(204,`tr`)(205,`td`)(206,`code`),cN(207,`--background-color-hover`),ag()(),Tl(208,`td`),cN(209,`Cor de fundo no estado hover`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--color-brand-01-lighter)`),ag()()(),Tl(213,`tr`)(214,`td`)(215,`strong`),cN(216,`Pressed`),ag()(),Gl(217,`td`)(218,`td`),ag(),Tl(219,`tr`)(220,`td`)(221,`code`),cN(222,`--background-color-pressed`),ag()(),Tl(223,`td`),cN(224,`Cor de fundo no estado pressed`),ag(),Tl(225,`td`)(226,`code`),cN(227,`var(--color-brand-01-light)`),ag()()(),Tl(228,`tr`)(229,`td`)(230,`strong`),cN(231,`Active (Selected)`),ag()(),Gl(232,`td`)(233,`td`),ag(),Tl(234,`tr`)(235,`td`)(236,`code`),cN(237,`--background-color-actived`),ag()(),Tl(238,`td`),cN(239,`Cor de fundo do item selecionado`),ag(),Tl(240,`td`)(241,`code`),cN(242,`var(--color-brand-01-lightest)`),ag()()(),Tl(243,`tr`)(244,`td`)(245,`code`),cN(246,`--color-actived`),ag()(),Tl(247,`td`),cN(248,`Cor do texto do item selecionado`),ag(),Tl(249,`td`)(250,`code`),cN(251,`var(--color-action-pressed)`),ag()()()()()(),Tl(252,`div`,7)(253,`h4`,8),cN(254,`Seletor`),ag(),Tl(255,`pre`,9),cN(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),ag()(),Tl(257,`h4`,10),cN(258,`Propriedades`),ag(),Tl(259,`table`,11)(260,`tr`,12)(261,`th`,13),cN(262,`Nome`),ag(),Tl(263,`th`,13),cN(264,`Tipo`),ag(),Tl(265,`th`,13),cN(266,`Padrão`),ag(),Tl(267,`th`,13),cN(268,`Descrição`),ag()(),Tl(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),cN(273,` p-context-title`),Gl(274,`br`),ag()()(),Tl(275,`td`,18)(276,`code`,19),cN(277,`string`),ag()(),Tl(278,`td`,20),cN(279,`-`),ag(),Tl(280,`td`,21)(281,`p`),cN(282,`Título do contexto superior`),ag()()(),Tl(283,`tr`,14)(284,`td`,15)(285,`div`,16)(286,`span`,17),cN(287,` p-expanded`),Gl(288,`br`),ag()()(),Tl(289,`td`,18)(290,`code`,22),cN(291,`boolean`),ag()(),Tl(292,`td`,20)(293,`p`)(294,`code`),cN(295,`true`),ag()()(),Tl(296,`td`,21)(297,`p`),cN(298,`Define se o menu está aberto ou fechado.`),ag(),Tl(299,`p`),cN(300,`Suporta two-way binding:`),ag(),Tl(301,`pre`)(302,`code`,23),cN(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),ag()(),Tl(304,`p`),cN(305,`ou`),ag(),Tl(306,`pre`)(307,`code`,23),cN(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),ag()()()(),Tl(309,`tr`,14)(310,`td`,15)(311,`div`,24)(312,`span`,25),cN(313,` (p-item-selected)`),Gl(314,`br`),ag()()(),Tl(315,`td`,18)(316,`code`,26),cN(317,`EventEmitter`),ag()(),Tl(318,`td`,20),cN(319,`-`),ag(),Tl(320,`td`,21)(321,`p`),cN(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),ag()()(),Tl(323,`tr`,14)(324,`td`,15)(325,`div`,16)(326,`span`,17),cN(327,` p-items`),Gl(328,`br`),ag()()(),Tl(329,`td`,18)(330,`code`,27),cN(331,`Array<PoContextMenuItem>`),ag()(),Tl(332,`td`,20),cN(333,`-`),ag(),Tl(334,`td`,21)(335,`p`),cN(336,`Lista de itens para renderização.`),ag(),Tl(337,`blockquote`)(338,`p`),cN(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),Tl(340,`code`),cN(341,`selected: true`),ag(),cN(342,`.
Se mais de um item estiver com `),Tl(343,`code`),cN(344,`selected: true`),ag(),cN(345,`, apenas o primeiro será mantido como selecionado.`),ag()()()(),Tl(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),cN(350,` p-title`),Gl(351,`br`),ag()()(),Tl(352,`td`,18)(353,`code`,19),cN(354,`string`),ag()(),Tl(355,`td`,20),cN(356,`-`),ag(),Tl(357,`td`,21)(358,`p`),cN(359,`Título principal do menu`),ag()()()(),Tl(360,`h3`),cN(361,`Interfaces`),ag(),Tl(362,`h4`,28)(363,`code`,5),cN(364,`PoContextMenuItem`),ag()(),Tl(365,`div`,2)(366,`p`),cN(367,`Interface para os itens do componente po-context-menu.`),ag()(),Tl(368,`h4`,10),cN(369,`Propriedades`),ag(),Tl(370,`table`,11)(371,`tr`,12)(372,`th`,13),cN(373,`Nome`),ag(),Tl(374,`th`,13),cN(375,`Tipo`),ag(),Tl(376,`th`,13),cN(377,`Descrição`),ag()(),Tl(378,`tr`,14)(379,`td`,15)(380,`div`,16)(381,`span`,17),cN(382,` action`),Gl(383,`br`),ag()()(),Tl(384,`td`,18)(385,`code`,29),cN(386,`Function`),ag()(),Tl(387,`td`,21)(388,`em`)(389,`strong`),cN(390,`(opcional)`),ag()(),Tl(391,`p`),cN(392,`Ação executada ao clicar no item.`),ag()()(),Tl(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),cN(397,` label`),Gl(398,`br`),ag()()(),Tl(399,`td`,18)(400,`code`,19),cN(401,`string`),ag()(),Tl(402,`td`,21)(403,`p`),cN(404,`Texto do item de menu.`),ag()()(),Tl(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),cN(409,` selected`),Gl(410,`br`),ag()()(),Tl(411,`td`,18)(412,`code`,22),cN(413,`boolean`),ag()(),Tl(414,`td`,21)(415,`em`)(416,`strong`),cN(417,`(opcional)`),ag()(),Tl(418,`p`),cN(419,`Estado de seleção do item.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var De=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Context Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-context-menu-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-context-menu-basic-view`)(6,`sample-po-context-menu-labs-view`)(7,`sample-po-context-menu-user-view`),ag()()()),a&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,se,ce,be,xe],encapsulation:2,changeDetection:1})}return i})()}];var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[bL.forChild(De),bL]})}return i})();var ct=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,Se]})}return i})();export{ct as DocPoContextMenuModule};