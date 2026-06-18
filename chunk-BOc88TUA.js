import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,j,cA as l5,s,c as r$1,cB as tNe,H as Sl,a1 as ht,O as sg,z as Vp,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,M as Wl,J as Jx,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,bH as E3,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,b2 as eme,a3 as pNe,b7 as A3,cC as vNe,cD as aw,cE as Ax,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var re=(()=>{class i{poNotification=f(Yp);menuItems=[{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic"]],standalone:false,decls:2,vars:1,consts:[[1,"po-context-menu-wrapper"],["p-context-title","Cadastro","p-title","Fornecedor",3,"p-item-selected","p-items"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"po-context-menu",1),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg()()),a&2&&(Vp(),tw("p-items",o.menuItems));},dependencies:[tNe],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Context Menu Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-menu-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return i})();var pe=(()=>{class i{poNotification=f(Yp);contextTitle=j("Cadastro");title=j("Funcion\xE1rio");expanded=j(true);newItemLabel=j("");selected=j(false);menuItems=j([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(""),this.selected.set(false));}restore(){this.contextTitle.set("Cadastro"),this.title.set("Funcion\xE1rio"),this.expanded.set(true),this.newItemLabel.set(""),this.selected.set(false),this.menuItems.set([]);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs"]],standalone:false,decls:18,vars:9,consts:[["f","ngForm"],[1,"po-context-menu-wrapper"],[3,"p-expandedChange","p-item-selected","p-context-title","p-title","p-items","p-expanded"],[1,"po-row"],["name","contextTitle","p-label","Context Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-label","Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","expanded","p-label","Expanded","p-label-off","Collapsed","p-label-on","Expanded",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-pb-1"],["name","newItemLabel","p-label","New Item Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Selected","p-label","Selected","p-help","Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado.",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let u=Ex();Sl(0,"div",1)(1,"po-context-menu",2),Ew("p-expandedChange",function(d){return Xy(u),tN(o.expanded,d)||(o.expanded=d),Qy(d)}),ht("p-item-selected",function(d){return o.onItemSelected(d)}),sg()(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",3)(6,"po-input",4),Ew("ngModelChange",function(d){return Xy(u),tN(o.contextTitle,d)||(o.contextTitle=d),Qy(d)}),sg(),JA(),Sl(7,"po-input",5),Ew("ngModelChange",function(d){return Xy(u),tN(o.title,d)||(o.title=d),Qy(d)}),sg(),JA(),sg(),Sl(8,"div",3)(9,"po-switch",6),Ew("ngModelChange",function(d){return Xy(u),tN(o.expanded,d)||(o.expanded=d),Qy(d)}),sg(),JA(),sg(),Wl(10,"po-divider"),Sl(11,"div",7)(12,"po-input",8),Ew("ngModelChange",function(d){return Xy(u),tN(o.newItemLabel,d)||(o.newItemLabel=d),Qy(d)}),sg(),JA(),Sl(13,"po-switch",9),Ew("ngModelChange",function(d){return Xy(u),tN(o.selected,d)||(o.selected=d),Qy(d)}),sg(),JA(),Sl(14,"po-button",10),ht("p-click",function(){return o.addItem()}),sg()(),Wl(15,"po-divider"),Sl(16,"div",3)(17,"po-button",11),ht("p-click",function(){return o.restore()}),sg()()();}a&2&&(Vp(),tw("p-context-title",o.contextTitle())("p-title",o.title())("p-items",o.menuItems()),Dw("p-expanded",o.expanded),Vp(5),Dw("ngModel",o.contextTitle),t0(),Vp(),Dw("ngModel",o.title),t0(),Vp(2),Dw("ngModel",o.expanded),t0(),Vp(3),Dw("ngModel",o.newItemLabel),t0(),Vp(),Dw("ngModel",o.selected),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,tNe,mv,F3,E3],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Context Menu Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-context-menu-wrapper">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-menu-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return i})();var Me=["tab"],ue=(()=>{class i{tab=l5("tab");contextTitle="Cadastro";title="Usu\xE1rio";menuItems=j([{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}]);formDadosCadastrais=[{property:"name",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY."},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required."},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6}];formEndereco=[{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"}];documentos=[{Documento:"CPF",Valor:"987.xxx.xxx-60"},{Documento:"Passporte",Valor:"123456xxx-1"}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label);}onActivatedTab(m){this.updateSelectedItemMenu(m.id);}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r$1({},o),{selected:o.label===m}));this.menuItems.set(a);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user"]],viewQuery:function(a,o){a&1&&aw(o.tab,Me,5),a&2&&Ax();},standalone:false,decls:19,vars:12,consts:[["tab",""],["dynamicForm",""],["p-label","Dados cadastrais","p-hide-close","","p-active","","id","Dados cadastrais",3,"p-activated-tab"],[1,"po-context-menu-wrapper"],[3,"p-item-selected","p-context-title","p-title","p-items"],["p-title","Dados cadastrais"],[3,"p-fields"],["p-label","Endere\xE7os","id","Endere\xE7os","p-hide-close","",3,"p-activated-tab"],["p-title","Endere\xE7os"],["p-label","Documentos","id","Documentos","p-hide-close","",3,"p-activated-tab"],["p-title","Documentos"],[3,"p-items"]],template:function(a,o){a&1&&(Sl(0,"po-context-tabs",null,0)(2,"po-tab",2),ht("p-activated-tab",function(s){return o.onActivatedTab(s)}),Sl(3,"div",3)(4,"po-context-menu",4),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg(),Sl(5,"po-page-default",5),Wl(6,"po-dynamic-form",6,1),sg()()(),Sl(8,"po-tab",7),ht("p-activated-tab",function(s){return o.onActivatedTab(s)}),Sl(9,"div",3)(10,"po-context-menu",4),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg(),Sl(11,"po-page-default",8),Wl(12,"po-dynamic-form",6,1),sg()()(),Sl(14,"po-tab",9),ht("p-activated-tab",function(s){return o.onActivatedTab(s)}),Sl(15,"div",3)(16,"po-context-menu",4),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg(),Sl(17,"po-page-default",10),Wl(18,"po-table",11),sg()()()()),a&2&&(Vp(4),tw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Vp(2),tw("p-fields",o.formDadosCadastrais),Vp(4),tw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Vp(2),tw("p-fields",o.formEndereco),Vp(4),tw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Vp(2),tw("p-items",o.documentos));},dependencies:[tNe,eme,pNe,A3,Gme,vNe],styles:["po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}"],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Context - Cadastro de Usu\xE1rio"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-context-menu-user/sample-po-context-menu-user.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-context-tabs #tab>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-context-menu-user/sample-po-context-menu-user.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-context-menu-user/sample-po-context-menu-user.component.css"),sg(),Sl(25,"pre",11),Jx(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-context-menu-user"),sg(),Wl(29,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return i})();var xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-doc"]],standalone:false,decls:420,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"language-html"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoContextMenuItem>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoContextMenuModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-context-menu."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoContextMenuComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-context-menu"),sg(),Jx(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Sl(18,"code"),Jx(19,"po-menu"),sg(),Jx(20,", por\xE9m independente e focado em navega\xE7\xE3o contextual."),sg(),Sl(21,"p"),Jx(22,"No caso de uso do componente "),Sl(23,"code"),Jx(24,"po-page-default"),sg(),Jx(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Sl(26,"strong"),Jx(27,"po-context-menu-wrapper"),sg(),Jx(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),sg(),Sl(29,"p"),Jx(30,"O uso simult\xE2neo dos componentes "),Sl(31,"code"),Jx(32,"po-menu"),sg(),Jx(33," e "),Sl(34,"code"),Jx(35,"po-context-menu"),sg(),Jx(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),sg(),Sl(37,"h4"),Jx(38,"Tokens customiz\xE1veis"),sg(),Sl(39,"p"),Jx(40,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(41,"blockquote")(42,"p"),Jx(43,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(44,"a",6),Jx(45,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(46,"."),sg()(),Sl(47,"table")(48,"thead")(49,"tr")(50,"th"),Jx(51,"Propriedade"),sg(),Sl(52,"th"),Jx(53,"Descri\xE7\xE3o"),sg(),Sl(54,"th"),Jx(55,"Valor Padr\xE3o"),sg()()(),Sl(56,"tbody")(57,"tr")(58,"td")(59,"strong"),Jx(60,"Default Values"),sg()(),Wl(61,"td")(62,"td"),sg(),Sl(63,"tr")(64,"td")(65,"code"),Jx(66,"--font-family"),sg()(),Sl(67,"td"),Jx(68,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(69,"td")(70,"code"),Jx(71,"var(--font-family-theme)"),sg()()(),Sl(72,"tr")(73,"td")(74,"code"),Jx(75,"--font-size"),sg()(),Sl(76,"td"),Jx(77,"Tamanho da fonte dos itens"),sg(),Sl(78,"td")(79,"code"),Jx(80,"var(--font-size-default)"),sg()()(),Sl(81,"tr")(82,"td")(83,"code"),Jx(84,"--font-size-context-title"),sg()(),Sl(85,"td"),Jx(86,"Tamanho da fonte do t\xEDtulo de contexto"),sg(),Sl(87,"td")(88,"code"),Jx(89,"var(--font-size-sm)"),sg()()(),Sl(90,"tr")(91,"td")(92,"code"),Jx(93,"--font-size-title"),sg()(),Sl(94,"td"),Jx(95,"Tamanho da fonte do t\xEDtulo principal"),sg(),Sl(96,"td")(97,"code"),Jx(98,"var(--font-size-lg)"),sg()()(),Sl(99,"tr")(100,"td")(101,"code"),Jx(102,"--line-height"),sg()(),Sl(103,"td"),Jx(104,"Altura da linha"),sg(),Sl(105,"td")(106,"code"),Jx(107,"var(--line-height-md)"),sg()()(),Sl(108,"tr")(109,"td")(110,"code"),Jx(111,"--border-radius"),sg()(),Sl(112,"td"),Jx(113,"Raio dos cantos dos itens"),sg(),Sl(114,"td")(115,"code"),Jx(116,"var(--border-radius-md)"),sg()()(),Sl(117,"tr")(118,"td")(119,"code"),Jx(120,"--border-color"),sg()(),Sl(121,"td"),Jx(122,"Cor da borda lateral direita do componente"),sg(),Sl(123,"td")(124,"code"),Jx(125,"var(--color-neutral-light-20)"),sg()()(),Sl(126,"tr")(127,"td")(128,"code"),Jx(129,"--background-color"),sg()(),Sl(130,"td"),Jx(131,"Cor de fundo do componente"),sg(),Sl(132,"td")(133,"code"),Jx(134,"var(--color-neutral-light-05)"),sg()()(),Sl(135,"tr")(136,"td")(137,"code"),Jx(138,"--color"),sg()(),Sl(139,"td"),Jx(140,"Cor do texto dos itens"),sg(),Sl(141,"td")(142,"code"),Jx(143,"var(--color-action-default)"),sg()()(),Sl(144,"tr")(145,"td")(146,"code"),Jx(147,"--color-context-title"),sg()(),Sl(148,"td"),Jx(149,"Cor do texto do t\xEDtulo de contexto"),sg(),Sl(150,"td")(151,"code"),Jx(152,"var(--color-neutral-mid-40)"),sg()()(),Sl(153,"tr")(154,"td")(155,"code"),Jx(156,"--color-title"),sg()(),Sl(157,"td"),Jx(158,"Cor do texto do t\xEDtulo principal"),sg(),Sl(159,"td")(160,"code"),Jx(161,"var(--color-neutral-dark-80)"),sg()()(),Sl(162,"tr")(163,"td")(164,"code"),Jx(165,"--font-weight"),sg()(),Sl(166,"td"),Jx(167,"Peso da fonte dos itens"),sg(),Sl(168,"td")(169,"code"),Jx(170,"var(--font-weight-bold)"),sg()()(),Sl(171,"tr")(172,"td")(173,"code"),Jx(174,"--font-weight-title"),sg()(),Sl(175,"td"),Jx(176,"Peso da fonte do t\xEDtulo principal"),sg(),Sl(177,"td")(178,"code"),Jx(179,"var(--font-weight-bold)"),sg()()(),Sl(180,"tr")(181,"td")(182,"code"),Jx(183,"--outline-color-focused"),sg()(),Sl(184,"td"),Jx(185,"Cor do outline no estado de focus"),sg(),Sl(186,"td")(187,"code"),Jx(188,"var(--color-action-focus)"),sg()()(),Sl(189,"tr")(190,"td")(191,"strong"),Jx(192,"Hover"),sg()(),Wl(193,"td")(194,"td"),sg(),Sl(195,"tr")(196,"td")(197,"code"),Jx(198,"--color-hover"),sg()(),Sl(199,"td"),Jx(200,"Cor do texto no estado hover"),sg(),Sl(201,"td")(202,"code"),Jx(203,"var(--color-brand-01-darkest)"),sg()()(),Sl(204,"tr")(205,"td")(206,"code"),Jx(207,"--background-color-hover"),sg()(),Sl(208,"td"),Jx(209,"Cor de fundo no estado hover"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-brand-01-lighter)"),sg()()(),Sl(213,"tr")(214,"td")(215,"strong"),Jx(216,"Pressed"),sg()(),Wl(217,"td")(218,"td"),sg(),Sl(219,"tr")(220,"td")(221,"code"),Jx(222,"--background-color-pressed"),sg()(),Sl(223,"td"),Jx(224,"Cor de fundo no estado pressed"),sg(),Sl(225,"td")(226,"code"),Jx(227,"var(--color-brand-01-light)"),sg()()(),Sl(228,"tr")(229,"td")(230,"strong"),Jx(231,"Active (Selected)"),sg()(),Wl(232,"td")(233,"td"),sg(),Sl(234,"tr")(235,"td")(236,"code"),Jx(237,"--background-color-actived"),sg()(),Sl(238,"td"),Jx(239,"Cor de fundo do item selecionado"),sg(),Sl(240,"td")(241,"code"),Jx(242,"var(--color-brand-01-lightest)"),sg()()(),Sl(243,"tr")(244,"td")(245,"code"),Jx(246,"--color-actived"),sg()(),Sl(247,"td"),Jx(248,"Cor do texto do item selecionado"),sg(),Sl(249,"td")(250,"code"),Jx(251,"var(--color-action-pressed)"),sg()()()()()(),Sl(252,"div",7)(253,"h4",8),Jx(254,"Seletor"),sg(),Sl(255,"pre",9),Jx(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),sg()(),Sl(257,"h4",10),Jx(258,"Propriedades"),sg(),Sl(259,"table",11)(260,"tr",12)(261,"th",13),Jx(262,"Nome"),sg(),Sl(263,"th",13),Jx(264,"Tipo"),sg(),Sl(265,"th",13),Jx(266,"Padr\xE3o"),sg(),Sl(267,"th",13),Jx(268,"Descri\xE7\xE3o"),sg()(),Sl(269,"tr",14)(270,"td",15)(271,"div",16)(272,"span",17),Jx(273," p-context-title"),Wl(274,"br"),sg()()(),Sl(275,"td",18)(276,"code",19),Jx(277,"string"),sg()(),Sl(278,"td",20),Jx(279,"-"),sg(),Sl(280,"td",21)(281,"p"),Jx(282,"T\xEDtulo do contexto superior"),sg()()(),Sl(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),Jx(287," p-expanded"),Wl(288,"br"),sg()()(),Sl(289,"td",18)(290,"code",22),Jx(291,"boolean"),sg()(),Sl(292,"td",20)(293,"p")(294,"code"),Jx(295,"true"),sg()()(),Sl(296,"td",21)(297,"p"),Jx(298,"Define se o menu est\xE1 aberto ou fechado."),sg(),Sl(299,"p"),Jx(300,"Suporta two-way binding:"),sg(),Sl(301,"pre")(302,"code",23),Jx(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),sg()(),Sl(304,"p"),Jx(305,"ou"),sg(),Sl(306,"pre")(307,"code",23),Jx(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),sg()()()(),Sl(309,"tr",14)(310,"td",15)(311,"div",24)(312,"span",25),Jx(313," (p-item-selected)"),Wl(314,"br"),sg()()(),Sl(315,"td",18)(316,"code",26),Jx(317,"EventEmitter"),sg()(),Sl(318,"td",20),Jx(319,"-"),sg(),Sl(320,"td",21)(321,"p"),Jx(322,"Evento emitido ao selecionar um item. Emite o item selecionado."),sg()()(),Sl(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),Jx(327," p-items"),Wl(328,"br"),sg()()(),Sl(329,"td",18)(330,"code",27),Jx(331,"Array<PoContextMenuItem>"),sg()(),Sl(332,"td",20),Jx(333,"-"),sg(),Sl(334,"td",21)(335,"p"),Jx(336,"Lista de itens para renderiza\xE7\xE3o."),sg(),Sl(337,"blockquote")(338,"p"),Jx(339,"Ao receber os itens, o componente valida que apenas um item pode ter "),Sl(340,"code"),Jx(341,"selected: true"),sg(),Jx(342,`.
Se mais de um item estiver com `),Sl(343,"code"),Jx(344,"selected: true"),sg(),Jx(345,", apenas o primeiro ser\xE1 mantido como selecionado."),sg()()()(),Sl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),Jx(350," p-title"),Wl(351,"br"),sg()()(),Sl(352,"td",18)(353,"code",19),Jx(354,"string"),sg()(),Sl(355,"td",20),Jx(356,"-"),sg(),Sl(357,"td",21)(358,"p"),Jx(359,"T\xEDtulo principal do menu"),sg()()()(),Sl(360,"h3"),Jx(361,"Interfaces"),sg(),Sl(362,"h4",28)(363,"code",5),Jx(364,"PoContextMenuItem"),sg()(),Sl(365,"div",2)(366,"p"),Jx(367,"Interface para os itens do componente po-context-menu."),sg()(),Sl(368,"h4",10),Jx(369,"Propriedades"),sg(),Sl(370,"table",11)(371,"tr",12)(372,"th",13),Jx(373,"Nome"),sg(),Sl(374,"th",13),Jx(375,"Tipo"),sg(),Sl(376,"th",13),Jx(377,"Descri\xE7\xE3o"),sg()(),Sl(378,"tr",14)(379,"td",15)(380,"div",16)(381,"span",17),Jx(382," action"),Wl(383,"br"),sg()()(),Sl(384,"td",18)(385,"code",29),Jx(386,"Function"),sg()(),Sl(387,"td",21)(388,"em")(389,"strong"),Jx(390,"(opcional)"),sg()(),Sl(391,"p"),Jx(392,"A\xE7\xE3o executada ao clicar no item."),sg()()(),Sl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),Jx(397," label"),Wl(398,"br"),sg()()(),Sl(399,"td",18)(400,"code",19),Jx(401,"string"),sg()(),Sl(402,"td",21)(403,"p"),Jx(404,"Texto do item de menu."),sg()()(),Sl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),Jx(409," selected"),Wl(410,"br"),sg()()(),Sl(411,"td",18)(412,"code",22),Jx(413,"boolean"),sg()(),Sl(414,"td",21)(415,"em")(416,"strong"),Jx(417,"(opcional)"),sg()(),Sl(418,"p"),Jx(419,"Estado de sele\xE7\xE3o do item."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Context Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-context-menu-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-context-menu-basic-view")(6,"sample-po-context-menu-labs-view")(7,"sample-po-context-menu-user-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,se,ce,be,xe],encapsulation:2})}return i})();var De=[{path:"",component:Ce}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[pL.forChild(De),pL]})}return i})();var ct=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ar,Se]})}return i})();export{ct as DocPoContextMenuModule};