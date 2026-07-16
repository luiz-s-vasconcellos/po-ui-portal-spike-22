import {f as fe,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,aW as Yp,B,cA as g5,s,r as r$1,cB as eNe,T as Tl,a1 as ht,M as sg,H as Vp,O as nw,an as AO,aH as Ga,b8 as Wme,b9 as jme,L as Gl,C as iN,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as O3,bH as M3,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,b2 as Jhe,a3 as lNe,b7 as E3,cC as fNe,cD as cw,cE as kx,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var re=(()=>{class i{poNotification=f(Yp);menuItems=[{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic"]],standalone:false,decls:2,vars:1,consts:[[1,"po-context-menu-wrapper"],["p-context-title","Cadastro","p-title","Fornecedor",3,"p-item-selected","p-items"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"po-context-menu",1),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg()()),a&2&&(Vp(),nw("p-items",o.menuItems));},dependencies:[eNe],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Context Menu Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-context-menu-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,he,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,re],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{poNotification=f(Yp);contextTitle=B("Cadastro");title=B("Funcion\xE1rio");expanded=B(true);newItemLabel=B("");selected=B(false);menuItems=B([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(""),this.selected.set(false));}restore(){this.contextTitle.set("Cadastro"),this.title.set("Funcion\xE1rio"),this.expanded.set(true),this.newItemLabel.set(""),this.selected.set(false),this.menuItems.set([]);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs"]],standalone:false,decls:18,vars:9,consts:[["f","ngForm"],[1,"po-context-menu-wrapper"],[3,"p-expandedChange","p-item-selected","p-context-title","p-title","p-items","p-expanded"],[1,"po-row"],["name","contextTitle","p-label","Context Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-label","Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","expanded","p-label","Expanded","p-label-off","Collapsed","p-label-on","Expanded",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-pb-1"],["name","newItemLabel","p-label","New Item Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Selected","p-label","Selected","p-help","Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado.",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let u=Sx();Tl(0,"div",1)(1,"po-context-menu",2),ww("p-expandedChange",function(d){return Ky(u),sN(o.expanded,d)||(o.expanded=d),Xy(d)}),ht("p-item-selected",function(d){return o.onItemSelected(d)}),sg()(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(d){return Ky(u),sN(o.contextTitle,d)||(o.contextTitle=d),Xy(d)}),sg(),r0(),Tl(7,"po-input",5),ww("ngModelChange",function(d){return Ky(u),sN(o.title,d)||(o.title=d),Xy(d)}),sg(),r0(),sg(),Tl(8,"div",3)(9,"po-switch",6),ww("ngModelChange",function(d){return Ky(u),sN(o.expanded,d)||(o.expanded=d),Xy(d)}),sg(),r0(),sg(),Gl(10,"po-divider"),Tl(11,"div",7)(12,"po-input",8),ww("ngModelChange",function(d){return Ky(u),sN(o.newItemLabel,d)||(o.newItemLabel=d),Xy(d)}),sg(),r0(),Tl(13,"po-switch",9),ww("ngModelChange",function(d){return Ky(u),sN(o.selected,d)||(o.selected=d),Xy(d)}),sg(),r0(),Tl(14,"po-button",10),ht("p-click",function(){return o.addItem()}),sg()(),Gl(15,"po-divider"),Tl(16,"div",3)(17,"po-button",11),ht("p-click",function(){return o.restore()}),sg()()();}a&2&&(Vp(),nw("p-context-title",o.contextTitle())("p-title",o.title())("p-items",o.menuItems()),Ew("p-expanded",o.expanded),Vp(5),Ew("ngModel",o.contextTitle),o0(),Vp(),Ew("ngModel",o.title),o0(),Vp(2),Ew("ngModel",o.expanded),o0(),Vp(3),Ew("ngModel",o.newItemLabel),o0(),Vp(),Ew("ngModel",o.selected),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,eNe,mv,O3,M3],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Context Menu Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-context-menu-wrapper">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-context-menu-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ve,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,pe],encapsulation:2,changeDetection:1})}return i})();var Me=["tab"],ue=(()=>{class i{tab=g5("tab");contextTitle="Cadastro";title="Usu\xE1rio";menuItems=B([{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}]);formDadosCadastrais=[{property:"name",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY."},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required."},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6}];formEndereco=[{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"}];documentos=[{Documento:"CPF",Valor:"987.xxx.xxx-60"},{Documento:"Passporte",Valor:"123456xxx-1"}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label);}onActivatedTab(m){this.updateSelectedItemMenu(m.id);}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r$1({},o),{selected:o.label===m}));this.menuItems.set(a);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user"]],viewQuery:function(a,o){a&1&&cw(o.tab,Me,5),a&2&&kx();},standalone:false,decls:19,vars:12,consts:[["tab",""],["dynamicForm",""],["p-label","Dados cadastrais","p-hide-close","","p-active","","id","Dados cadastrais",3,"p-activated-tab"],[1,"po-context-menu-wrapper"],[3,"p-item-selected","p-context-title","p-title","p-items"],["p-title","Dados cadastrais"],[3,"p-fields"],["p-label","Endere\xE7os","id","Endere\xE7os","p-hide-close","",3,"p-activated-tab"],["p-title","Endere\xE7os"],["p-label","Documentos","id","Documentos","p-hide-close","",3,"p-activated-tab"],["p-title","Documentos"],[3,"p-items"]],template:function(a,o){a&1&&(Tl(0,"po-context-tabs",null,0)(2,"po-tab",2),ht("p-activated-tab",function(s){return o.onActivatedTab(s)}),Tl(3,"div",3)(4,"po-context-menu",4),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg(),Tl(5,"po-page-default",5),Gl(6,"po-dynamic-form",6,1),sg()()(),Tl(8,"po-tab",7),ht("p-activated-tab",function(s){return o.onActivatedTab(s)}),Tl(9,"div",3)(10,"po-context-menu",4),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg(),Tl(11,"po-page-default",8),Gl(12,"po-dynamic-form",6,1),sg()()(),Tl(14,"po-tab",9),ht("p-activated-tab",function(s){return o.onActivatedTab(s)}),Tl(15,"div",3)(16,"po-context-menu",4),ht("p-item-selected",function(s){return o.onItemSelected(s)}),sg(),Tl(17,"po-page-default",10),Gl(18,"po-table",11),sg()()()()),a&2&&(Vp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Vp(2),nw("p-fields",o.formDadosCadastrais),Vp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Vp(2),nw("p-fields",o.formEndereco),Vp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Vp(2),nw("p-items",o.documentos));},dependencies:[eNe,Jhe,lNe,E3,Wme,fNe],styles:["po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}"],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Context - Cadastro de Usu\xE1rio"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-context-menu-user/sample-po-context-menu-user.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-context-tabs #tab>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-context-menu-user/sample-po-context-menu-user.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-context-menu-user/sample-po-context-menu-user.component.css"),sg(),Tl(25,"pre",11),iN(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-context-menu-user"),sg(),Gl(29,"hr")),a&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ue],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-doc"]],standalone:false,decls:420,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"language-html"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoContextMenuItem>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoContextMenuModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-context-menu."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoContextMenuComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-context-menu"),sg(),iN(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Tl(18,"code"),iN(19,"po-menu"),sg(),iN(20,", por\xE9m independente e focado em navega\xE7\xE3o contextual."),sg(),Tl(21,"p"),iN(22,"No caso de uso do componente "),Tl(23,"code"),iN(24,"po-page-default"),sg(),iN(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Tl(26,"strong"),iN(27,"po-context-menu-wrapper"),sg(),iN(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),sg(),Tl(29,"p"),iN(30,"O uso simult\xE2neo dos componentes "),Tl(31,"code"),iN(32,"po-menu"),sg(),iN(33," e "),Tl(34,"code"),iN(35,"po-context-menu"),sg(),iN(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),sg(),Tl(37,"h4"),iN(38,"Tokens customiz\xE1veis"),sg(),Tl(39,"p"),iN(40,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(41,"blockquote")(42,"p"),iN(43,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(44,"a",6),iN(45,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(46,"."),sg()(),Tl(47,"table")(48,"thead")(49,"tr")(50,"th"),iN(51,"Propriedade"),sg(),Tl(52,"th"),iN(53,"Descri\xE7\xE3o"),sg(),Tl(54,"th"),iN(55,"Valor Padr\xE3o"),sg()()(),Tl(56,"tbody")(57,"tr")(58,"td")(59,"strong"),iN(60,"Default Values"),sg()(),Gl(61,"td")(62,"td"),sg(),Tl(63,"tr")(64,"td")(65,"code"),iN(66,"--font-family"),sg()(),Tl(67,"td"),iN(68,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(69,"td")(70,"code"),iN(71,"var(--font-family-theme)"),sg()()(),Tl(72,"tr")(73,"td")(74,"code"),iN(75,"--font-size"),sg()(),Tl(76,"td"),iN(77,"Tamanho da fonte dos itens"),sg(),Tl(78,"td")(79,"code"),iN(80,"var(--font-size-default)"),sg()()(),Tl(81,"tr")(82,"td")(83,"code"),iN(84,"--font-size-context-title"),sg()(),Tl(85,"td"),iN(86,"Tamanho da fonte do t\xEDtulo de contexto"),sg(),Tl(87,"td")(88,"code"),iN(89,"var(--font-size-sm)"),sg()()(),Tl(90,"tr")(91,"td")(92,"code"),iN(93,"--font-size-title"),sg()(),Tl(94,"td"),iN(95,"Tamanho da fonte do t\xEDtulo principal"),sg(),Tl(96,"td")(97,"code"),iN(98,"var(--font-size-lg)"),sg()()(),Tl(99,"tr")(100,"td")(101,"code"),iN(102,"--line-height"),sg()(),Tl(103,"td"),iN(104,"Altura da linha"),sg(),Tl(105,"td")(106,"code"),iN(107,"var(--line-height-md)"),sg()()(),Tl(108,"tr")(109,"td")(110,"code"),iN(111,"--border-radius"),sg()(),Tl(112,"td"),iN(113,"Raio dos cantos dos itens"),sg(),Tl(114,"td")(115,"code"),iN(116,"var(--border-radius-md)"),sg()()(),Tl(117,"tr")(118,"td")(119,"code"),iN(120,"--border-color"),sg()(),Tl(121,"td"),iN(122,"Cor da borda lateral direita do componente"),sg(),Tl(123,"td")(124,"code"),iN(125,"var(--color-neutral-light-20)"),sg()()(),Tl(126,"tr")(127,"td")(128,"code"),iN(129,"--background-color"),sg()(),Tl(130,"td"),iN(131,"Cor de fundo do componente"),sg(),Tl(132,"td")(133,"code"),iN(134,"var(--color-neutral-light-05)"),sg()()(),Tl(135,"tr")(136,"td")(137,"code"),iN(138,"--color"),sg()(),Tl(139,"td"),iN(140,"Cor do texto dos itens"),sg(),Tl(141,"td")(142,"code"),iN(143,"var(--color-action-default)"),sg()()(),Tl(144,"tr")(145,"td")(146,"code"),iN(147,"--color-context-title"),sg()(),Tl(148,"td"),iN(149,"Cor do texto do t\xEDtulo de contexto"),sg(),Tl(150,"td")(151,"code"),iN(152,"var(--color-neutral-mid-40)"),sg()()(),Tl(153,"tr")(154,"td")(155,"code"),iN(156,"--color-title"),sg()(),Tl(157,"td"),iN(158,"Cor do texto do t\xEDtulo principal"),sg(),Tl(159,"td")(160,"code"),iN(161,"var(--color-neutral-dark-80)"),sg()()(),Tl(162,"tr")(163,"td")(164,"code"),iN(165,"--font-weight"),sg()(),Tl(166,"td"),iN(167,"Peso da fonte dos itens"),sg(),Tl(168,"td")(169,"code"),iN(170,"var(--font-weight-bold)"),sg()()(),Tl(171,"tr")(172,"td")(173,"code"),iN(174,"--font-weight-title"),sg()(),Tl(175,"td"),iN(176,"Peso da fonte do t\xEDtulo principal"),sg(),Tl(177,"td")(178,"code"),iN(179,"var(--font-weight-bold)"),sg()()(),Tl(180,"tr")(181,"td")(182,"code"),iN(183,"--outline-color-focused"),sg()(),Tl(184,"td"),iN(185,"Cor do outline no estado de focus"),sg(),Tl(186,"td")(187,"code"),iN(188,"var(--color-action-focus)"),sg()()(),Tl(189,"tr")(190,"td")(191,"strong"),iN(192,"Hover"),sg()(),Gl(193,"td")(194,"td"),sg(),Tl(195,"tr")(196,"td")(197,"code"),iN(198,"--color-hover"),sg()(),Tl(199,"td"),iN(200,"Cor do texto no estado hover"),sg(),Tl(201,"td")(202,"code"),iN(203,"var(--color-brand-01-darkest)"),sg()()(),Tl(204,"tr")(205,"td")(206,"code"),iN(207,"--background-color-hover"),sg()(),Tl(208,"td"),iN(209,"Cor de fundo no estado hover"),sg(),Tl(210,"td")(211,"code"),iN(212,"var(--color-brand-01-lighter)"),sg()()(),Tl(213,"tr")(214,"td")(215,"strong"),iN(216,"Pressed"),sg()(),Gl(217,"td")(218,"td"),sg(),Tl(219,"tr")(220,"td")(221,"code"),iN(222,"--background-color-pressed"),sg()(),Tl(223,"td"),iN(224,"Cor de fundo no estado pressed"),sg(),Tl(225,"td")(226,"code"),iN(227,"var(--color-brand-01-light)"),sg()()(),Tl(228,"tr")(229,"td")(230,"strong"),iN(231,"Active (Selected)"),sg()(),Gl(232,"td")(233,"td"),sg(),Tl(234,"tr")(235,"td")(236,"code"),iN(237,"--background-color-actived"),sg()(),Tl(238,"td"),iN(239,"Cor de fundo do item selecionado"),sg(),Tl(240,"td")(241,"code"),iN(242,"var(--color-brand-01-lightest)"),sg()()(),Tl(243,"tr")(244,"td")(245,"code"),iN(246,"--color-actived"),sg()(),Tl(247,"td"),iN(248,"Cor do texto do item selecionado"),sg(),Tl(249,"td")(250,"code"),iN(251,"var(--color-action-pressed)"),sg()()()()()(),Tl(252,"div",7)(253,"h4",8),iN(254,"Seletor"),sg(),Tl(255,"pre",9),iN(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),sg()(),Tl(257,"h4",10),iN(258,"Propriedades"),sg(),Tl(259,"table",11)(260,"tr",12)(261,"th",13),iN(262,"Nome"),sg(),Tl(263,"th",13),iN(264,"Tipo"),sg(),Tl(265,"th",13),iN(266,"Padr\xE3o"),sg(),Tl(267,"th",13),iN(268,"Descri\xE7\xE3o"),sg()(),Tl(269,"tr",14)(270,"td",15)(271,"div",16)(272,"span",17),iN(273," p-context-title"),Gl(274,"br"),sg()()(),Tl(275,"td",18)(276,"code",19),iN(277,"string"),sg()(),Tl(278,"td",20),iN(279,"-"),sg(),Tl(280,"td",21)(281,"p"),iN(282,"T\xEDtulo do contexto superior"),sg()()(),Tl(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),iN(287," p-expanded"),Gl(288,"br"),sg()()(),Tl(289,"td",18)(290,"code",22),iN(291,"boolean"),sg()(),Tl(292,"td",20)(293,"p")(294,"code"),iN(295,"true"),sg()()(),Tl(296,"td",21)(297,"p"),iN(298,"Define se o menu est\xE1 aberto ou fechado."),sg(),Tl(299,"p"),iN(300,"Suporta two-way binding:"),sg(),Tl(301,"pre")(302,"code",23),iN(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),sg()(),Tl(304,"p"),iN(305,"ou"),sg(),Tl(306,"pre")(307,"code",23),iN(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),sg()()()(),Tl(309,"tr",14)(310,"td",15)(311,"div",24)(312,"span",25),iN(313," (p-item-selected)"),Gl(314,"br"),sg()()(),Tl(315,"td",18)(316,"code",26),iN(317,"EventEmitter"),sg()(),Tl(318,"td",20),iN(319,"-"),sg(),Tl(320,"td",21)(321,"p"),iN(322,"Evento emitido ao selecionar um item. Emite o item selecionado."),sg()()(),Tl(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),iN(327," p-items"),Gl(328,"br"),sg()()(),Tl(329,"td",18)(330,"code",27),iN(331,"Array<PoContextMenuItem>"),sg()(),Tl(332,"td",20),iN(333,"-"),sg(),Tl(334,"td",21)(335,"p"),iN(336,"Lista de itens para renderiza\xE7\xE3o."),sg(),Tl(337,"blockquote")(338,"p"),iN(339,"Ao receber os itens, o componente valida que apenas um item pode ter "),Tl(340,"code"),iN(341,"selected: true"),sg(),iN(342,`.
Se mais de um item estiver com `),Tl(343,"code"),iN(344,"selected: true"),sg(),iN(345,", apenas o primeiro ser\xE1 mantido como selecionado."),sg()()()(),Tl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),iN(350," p-title"),Gl(351,"br"),sg()()(),Tl(352,"td",18)(353,"code",19),iN(354,"string"),sg()(),Tl(355,"td",20),iN(356,"-"),sg(),Tl(357,"td",21)(358,"p"),iN(359,"T\xEDtulo principal do menu"),sg()()()(),Tl(360,"h3"),iN(361,"Interfaces"),sg(),Tl(362,"h4",28)(363,"code",5),iN(364,"PoContextMenuItem"),sg()(),Tl(365,"div",2)(366,"p"),iN(367,"Interface para os itens do componente po-context-menu."),sg()(),Tl(368,"h4",10),iN(369,"Propriedades"),sg(),Tl(370,"table",11)(371,"tr",12)(372,"th",13),iN(373,"Nome"),sg(),Tl(374,"th",13),iN(375,"Tipo"),sg(),Tl(376,"th",13),iN(377,"Descri\xE7\xE3o"),sg()(),Tl(378,"tr",14)(379,"td",15)(380,"div",16)(381,"span",17),iN(382," action"),Gl(383,"br"),sg()()(),Tl(384,"td",18)(385,"code",29),iN(386,"Function"),sg()(),Tl(387,"td",21)(388,"em")(389,"strong"),iN(390,"(opcional)"),sg()(),Tl(391,"p"),iN(392,"A\xE7\xE3o executada ao clicar no item."),sg()()(),Tl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),iN(397," label"),Gl(398,"br"),sg()()(),Tl(399,"td",18)(400,"code",19),iN(401,"string"),sg()(),Tl(402,"td",21)(403,"p"),iN(404,"Texto do item de menu."),sg()()(),Tl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),iN(409," selected"),Gl(410,"br"),sg()()(),Tl(411,"td",18)(412,"code",22),iN(413,"boolean"),sg()(),Tl(414,"td",21)(415,"em")(416,"strong"),iN(417,"(opcional)"),sg()(),Tl(418,"p"),iN(419,"Estado de sele\xE7\xE3o do item."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Context Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-context-menu-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-context-menu-basic-view")(6,"sample-po-context-menu-labs-view")(7,"sample-po-context-menu-user-view"),sg()()()),a&2&&(nw("p-actions",o.actions),Vp(2),nw("p-active",o.activeTab==="doc"),Vp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[lNe,Wme,jme,se,ce,be,xe],encapsulation:2,changeDetection:1})}return i})();var De=[{path:"",component:Ce}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[DL.forChild(De),DL]})}return i})();var ct=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ar,Se]})}return i})();export{ct as DocPoContextMenuModule};