import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,j,c4 as v5,s,r as r$1,c5 as ix,J as wl,a1 as ut,R as ng,P as Pp,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,N as Ul,z as Ux,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bd as na,al as lx,am as pw,an as $0,ap as hw,aq as G0,aM as lT,a3 as D3,aR as ty,c6 as WB,c7 as ew,c8 as yx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var se=(()=>{class i{poNotification=f(Bp);menuItems=[{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic"]],standalone:false,decls:2,vars:1,consts:[[1,"po-context-menu-wrapper"],["p-context-title","Cadastro","p-title","Fornecedor",3,"p-item-selected","p-items"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"po-context-menu",1),ut("p-item-selected",function(s){return o.onItemSelected(s)}),ng()()),a&2&&(Pp(),YE("p-items",o.menuItems));},dependencies:[ix],encapsulation:2,changeDetection:1})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Context Menu Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-context-menu-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ee,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return i})();var ue=(()=>{class i{poNotification=f(Bp);contextTitle=j("Cadastro");title=j("Funcion\xE1rio");expanded=j(true);newItemLabel=j("");selected=j(false);menuItems=j([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(""),this.selected.set(false));}restore(){this.contextTitle.set("Cadastro"),this.title.set("Funcion\xE1rio"),this.expanded.set(true),this.newItemLabel.set(""),this.selected.set(false),this.menuItems.set([]);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs"]],standalone:false,decls:18,vars:9,consts:[["f","ngForm"],[1,"po-context-menu-wrapper"],[3,"p-expandedChange","p-item-selected","p-context-title","p-title","p-items","p-expanded"],[1,"po-row"],["name","contextTitle","p-label","Context Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-label","Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","expanded","p-label","Expanded","p-label-off","Collapsed","p-label-on","Expanded",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-pb-1"],["name","newItemLabel","p-label","New Item Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Selected","p-label","Selected","p-help","Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado.",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let u=lx();wl(0,"div",1)(1,"po-context-menu",2),pw("p-expandedChange",function(d){return Qy(u),$x(o.expanded,d)||(o.expanded=d),Jy(d)}),ut("p-item-selected",function(d){return o.onItemSelected(d)}),ng()(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",3)(6,"po-input",4),pw("ngModelChange",function(d){return Qy(u),$x(o.contextTitle,d)||(o.contextTitle=d),Jy(d)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(d){return Qy(u),$x(o.title,d)||(o.title=d),Jy(d)}),ng(),$0(),ng(),wl(8,"div",3)(9,"po-switch",6),pw("ngModelChange",function(d){return Qy(u),$x(o.expanded,d)||(o.expanded=d),Jy(d)}),ng(),$0(),ng(),Ul(10,"po-divider"),wl(11,"div",7)(12,"po-input",8),pw("ngModelChange",function(d){return Qy(u),$x(o.newItemLabel,d)||(o.newItemLabel=d),Jy(d)}),ng(),$0(),wl(13,"po-switch",9),pw("ngModelChange",function(d){return Qy(u),$x(o.selected,d)||(o.selected=d),Jy(d)}),ng(),$0(),wl(14,"po-button",10),ut("p-click",function(){return o.addItem()}),ng()(),Ul(15,"po-divider"),wl(16,"div",3)(17,"po-button",11),ut("p-click",function(){return o.restore()}),ng()()();}a&2&&(Pp(),YE("p-context-title",o.contextTitle())("p-title",o.title())("p-items",o.menuItems()),hw("p-expanded",o.expanded),Pp(5),hw("ngModel",o.contextTitle),G0(),Pp(),hw("ngModel",o.title),G0(),Pp(2),hw("ngModel",o.expanded),G0(),Pp(3),hw("ngModel",o.newItemLabel),G0(),Pp(),hw("ngModel",o.selected),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,ix,di,Yo,na],encapsulation:2,changeDetection:1})}return i})();var Me=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Context Menu Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-context-menu-wrapper">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-context-menu-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return i})();var Te=["tab"],xe=(()=>{class i{tab=v5("tab");contextTitle="Cadastro";title="Usu\xE1rio";menuItems=j([{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}]);formDadosCadastrais=[{property:"name",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY."},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required."},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6}];formEndereco=[{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"}];documentos=[{Documento:"CPF",Valor:"987.xxx.xxx-60"},{Documento:"Passporte",Valor:"123456xxx-1"}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label);}onActivatedTab(m){this.updateSelectedItemMenu(m.id);}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r$1({},o),{selected:o.label===m}));this.menuItems.set(a);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user"]],viewQuery:function(a,o){a&1&&ew(o.tab,Te,5),a&2&&yx();},standalone:false,decls:19,vars:12,consts:[["tab",""],["dynamicForm",""],["p-label","Dados cadastrais","p-hide-close","","p-active","","id","Dados cadastrais",3,"p-activated-tab"],[1,"po-context-menu-wrapper"],[3,"p-item-selected","p-context-title","p-title","p-items"],["p-title","Dados cadastrais"],[3,"p-fields"],["p-label","Endere\xE7os","id","Endere\xE7os","p-hide-close","",3,"p-activated-tab"],["p-title","Endere\xE7os"],["p-label","Documentos","id","Documentos","p-hide-close","",3,"p-activated-tab"],["p-title","Documentos"],[3,"p-items"]],template:function(a,o){a&1&&(wl(0,"po-context-tabs",null,0)(2,"po-tab",2),ut("p-activated-tab",function(s){return o.onActivatedTab(s)}),wl(3,"div",3)(4,"po-context-menu",4),ut("p-item-selected",function(s){return o.onItemSelected(s)}),ng(),wl(5,"po-page-default",5),Ul(6,"po-dynamic-form",6,1),ng()()(),wl(8,"po-tab",7),ut("p-activated-tab",function(s){return o.onActivatedTab(s)}),wl(9,"div",3)(10,"po-context-menu",4),ut("p-item-selected",function(s){return o.onItemSelected(s)}),ng(),wl(11,"po-page-default",8),Ul(12,"po-dynamic-form",6,1),ng()()(),wl(14,"po-tab",9),ut("p-activated-tab",function(s){return o.onActivatedTab(s)}),wl(15,"div",3)(16,"po-context-menu",4),ut("p-item-selected",function(s){return o.onItemSelected(s)}),ng(),wl(17,"po-page-default",10),Ul(18,"po-table",11),ng()()()()),a&2&&(Pp(4),YE("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Pp(2),YE("p-fields",o.formDadosCadastrais),Pp(4),YE("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Pp(2),YE("p-fields",o.formEndereco),Pp(4),YE("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Pp(2),YE("p-items",o.documentos));},dependencies:[ix,lT,D3,ty,Vd,WB],styles:["po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}"],changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),Ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Context - Cadastro de Usu\xE1rio"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-context-menu-user/sample-po-context-menu-user.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-context-tabs #tab>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-context-menu-user/sample-po-context-menu-user.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-context-menu-user/sample-po-context-menu-user.component.css"),ng(),wl(25,"pre",11),Ux(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-context-menu-user"),ng(),Ul(29,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,De,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,xe],encapsulation:2})}return i})();var Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-doc"]],standalone:false,decls:420,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"language-html"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoContextMenuItem>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoContextMenuModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-context-menu."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoContextMenuComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-context-menu"),ng(),Ux(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),wl(18,"code"),Ux(19,"po-menu"),ng(),Ux(20,", por\xE9m independente e focado em navega\xE7\xE3o contextual."),ng(),wl(21,"p"),Ux(22,"No caso de uso do componente "),wl(23,"code"),Ux(24,"po-page-default"),ng(),Ux(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),wl(26,"strong"),Ux(27,"po-context-menu-wrapper"),ng(),Ux(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),ng(),wl(29,"p"),Ux(30,"O uso simult\xE2neo dos componentes "),wl(31,"code"),Ux(32,"po-menu"),ng(),Ux(33," e "),wl(34,"code"),Ux(35,"po-context-menu"),ng(),Ux(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),ng(),wl(37,"h4"),Ux(38,"Tokens customiz\xE1veis"),ng(),wl(39,"p"),Ux(40,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(41,"blockquote")(42,"p"),Ux(43,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(44,"a",6),Ux(45,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(46,"."),ng()(),wl(47,"table")(48,"thead")(49,"tr")(50,"th"),Ux(51,"Propriedade"),ng(),wl(52,"th"),Ux(53,"Descri\xE7\xE3o"),ng(),wl(54,"th"),Ux(55,"Valor Padr\xE3o"),ng()()(),wl(56,"tbody")(57,"tr")(58,"td")(59,"strong"),Ux(60,"Default Values"),ng()(),Ul(61,"td")(62,"td"),ng(),wl(63,"tr")(64,"td")(65,"code"),Ux(66,"--font-family"),ng()(),wl(67,"td"),Ux(68,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(69,"td")(70,"code"),Ux(71,"var(--font-family-theme)"),ng()()(),wl(72,"tr")(73,"td")(74,"code"),Ux(75,"--font-size"),ng()(),wl(76,"td"),Ux(77,"Tamanho da fonte dos itens"),ng(),wl(78,"td")(79,"code"),Ux(80,"var(--font-size-default)"),ng()()(),wl(81,"tr")(82,"td")(83,"code"),Ux(84,"--font-size-context-title"),ng()(),wl(85,"td"),Ux(86,"Tamanho da fonte do t\xEDtulo de contexto"),ng(),wl(87,"td")(88,"code"),Ux(89,"var(--font-size-sm)"),ng()()(),wl(90,"tr")(91,"td")(92,"code"),Ux(93,"--font-size-title"),ng()(),wl(94,"td"),Ux(95,"Tamanho da fonte do t\xEDtulo principal"),ng(),wl(96,"td")(97,"code"),Ux(98,"var(--font-size-lg)"),ng()()(),wl(99,"tr")(100,"td")(101,"code"),Ux(102,"--line-height"),ng()(),wl(103,"td"),Ux(104,"Altura da linha"),ng(),wl(105,"td")(106,"code"),Ux(107,"var(--line-height-md)"),ng()()(),wl(108,"tr")(109,"td")(110,"code"),Ux(111,"--border-radius"),ng()(),wl(112,"td"),Ux(113,"Raio dos cantos dos itens"),ng(),wl(114,"td")(115,"code"),Ux(116,"var(--border-radius-md)"),ng()()(),wl(117,"tr")(118,"td")(119,"code"),Ux(120,"--border-color"),ng()(),wl(121,"td"),Ux(122,"Cor da borda lateral direita do componente"),ng(),wl(123,"td")(124,"code"),Ux(125,"var(--color-neutral-light-20)"),ng()()(),wl(126,"tr")(127,"td")(128,"code"),Ux(129,"--background-color"),ng()(),wl(130,"td"),Ux(131,"Cor de fundo do componente"),ng(),wl(132,"td")(133,"code"),Ux(134,"var(--color-neutral-light-05)"),ng()()(),wl(135,"tr")(136,"td")(137,"code"),Ux(138,"--color"),ng()(),wl(139,"td"),Ux(140,"Cor do texto dos itens"),ng(),wl(141,"td")(142,"code"),Ux(143,"var(--color-action-default)"),ng()()(),wl(144,"tr")(145,"td")(146,"code"),Ux(147,"--color-context-title"),ng()(),wl(148,"td"),Ux(149,"Cor do texto do t\xEDtulo de contexto"),ng(),wl(150,"td")(151,"code"),Ux(152,"var(--color-neutral-mid-40)"),ng()()(),wl(153,"tr")(154,"td")(155,"code"),Ux(156,"--color-title"),ng()(),wl(157,"td"),Ux(158,"Cor do texto do t\xEDtulo principal"),ng(),wl(159,"td")(160,"code"),Ux(161,"var(--color-neutral-dark-80)"),ng()()(),wl(162,"tr")(163,"td")(164,"code"),Ux(165,"--font-weight"),ng()(),wl(166,"td"),Ux(167,"Peso da fonte dos itens"),ng(),wl(168,"td")(169,"code"),Ux(170,"var(--font-weight-bold)"),ng()()(),wl(171,"tr")(172,"td")(173,"code"),Ux(174,"--font-weight-title"),ng()(),wl(175,"td"),Ux(176,"Peso da fonte do t\xEDtulo principal"),ng(),wl(177,"td")(178,"code"),Ux(179,"var(--font-weight-bold)"),ng()()(),wl(180,"tr")(181,"td")(182,"code"),Ux(183,"--outline-color-focused"),ng()(),wl(184,"td"),Ux(185,"Cor do outline no estado de focus"),ng(),wl(186,"td")(187,"code"),Ux(188,"var(--color-action-focus)"),ng()()(),wl(189,"tr")(190,"td")(191,"strong"),Ux(192,"Hover"),ng()(),Ul(193,"td")(194,"td"),ng(),wl(195,"tr")(196,"td")(197,"code"),Ux(198,"--color-hover"),ng()(),wl(199,"td"),Ux(200,"Cor do texto no estado hover"),ng(),wl(201,"td")(202,"code"),Ux(203,"var(--color-brand-01-darkest)"),ng()()(),wl(204,"tr")(205,"td")(206,"code"),Ux(207,"--background-color-hover"),ng()(),wl(208,"td"),Ux(209,"Cor de fundo no estado hover"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-brand-01-lighter)"),ng()()(),wl(213,"tr")(214,"td")(215,"strong"),Ux(216,"Pressed"),ng()(),Ul(217,"td")(218,"td"),ng(),wl(219,"tr")(220,"td")(221,"code"),Ux(222,"--background-color-pressed"),ng()(),wl(223,"td"),Ux(224,"Cor de fundo no estado pressed"),ng(),wl(225,"td")(226,"code"),Ux(227,"var(--color-brand-01-light)"),ng()()(),wl(228,"tr")(229,"td")(230,"strong"),Ux(231,"Active (Selected)"),ng()(),Ul(232,"td")(233,"td"),ng(),wl(234,"tr")(235,"td")(236,"code"),Ux(237,"--background-color-actived"),ng()(),wl(238,"td"),Ux(239,"Cor de fundo do item selecionado"),ng(),wl(240,"td")(241,"code"),Ux(242,"var(--color-brand-01-lightest)"),ng()()(),wl(243,"tr")(244,"td")(245,"code"),Ux(246,"--color-actived"),ng()(),wl(247,"td"),Ux(248,"Cor do texto do item selecionado"),ng(),wl(249,"td")(250,"code"),Ux(251,"var(--color-action-pressed)"),ng()()()()()(),wl(252,"div",7)(253,"h4",8),Ux(254,"Seletor"),ng(),wl(255,"pre",9),Ux(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),ng()(),wl(257,"h4",10),Ux(258,"Propriedades"),ng(),wl(259,"table",11)(260,"tr",12)(261,"th",13),Ux(262,"Nome"),ng(),wl(263,"th",13),Ux(264,"Tipo"),ng(),wl(265,"th",13),Ux(266,"Padr\xE3o"),ng(),wl(267,"th",13),Ux(268,"Descri\xE7\xE3o"),ng()(),wl(269,"tr",14)(270,"td",15)(271,"div",16)(272,"span",17),Ux(273," p-context-title"),Ul(274,"br"),ng()()(),wl(275,"td",18)(276,"code",19),Ux(277,"string"),ng()(),wl(278,"td",20),Ux(279,"-"),ng(),wl(280,"td",21)(281,"p"),Ux(282,"T\xEDtulo do contexto superior"),ng()()(),wl(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),Ux(287," p-expanded"),Ul(288,"br"),ng()()(),wl(289,"td",18)(290,"code",22),Ux(291,"boolean"),ng()(),wl(292,"td",20)(293,"p")(294,"code"),Ux(295,"true"),ng()()(),wl(296,"td",21)(297,"p"),Ux(298,"Define se o menu est\xE1 aberto ou fechado."),ng(),wl(299,"p"),Ux(300,"Suporta two-way binding:"),ng(),wl(301,"pre")(302,"code",23),Ux(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),ng()(),wl(304,"p"),Ux(305,"ou"),ng(),wl(306,"pre")(307,"code",23),Ux(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),ng()()()(),wl(309,"tr",14)(310,"td",15)(311,"div",24)(312,"span",25),Ux(313," (p-item-selected)"),Ul(314,"br"),ng()()(),wl(315,"td",18)(316,"code",26),Ux(317,"EventEmitter"),ng()(),wl(318,"td",20),Ux(319,"-"),ng(),wl(320,"td",21)(321,"p"),Ux(322,"Evento emitido ao selecionar um item. Emite o item selecionado."),ng()()(),wl(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),Ux(327," p-items"),Ul(328,"br"),ng()()(),wl(329,"td",18)(330,"code",27),Ux(331,"Array<PoContextMenuItem>"),ng()(),wl(332,"td",20),Ux(333,"-"),ng(),wl(334,"td",21)(335,"p"),Ux(336,"Lista de itens para renderiza\xE7\xE3o."),ng(),wl(337,"blockquote")(338,"p"),Ux(339,"Ao receber os itens, o componente valida que apenas um item pode ter "),wl(340,"code"),Ux(341,"selected: true"),ng(),Ux(342,`.
Se mais de um item estiver com `),wl(343,"code"),Ux(344,"selected: true"),ng(),Ux(345,", apenas o primeiro ser\xE1 mantido como selecionado."),ng()()()(),wl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),Ux(350," p-title"),Ul(351,"br"),ng()()(),wl(352,"td",18)(353,"code",19),Ux(354,"string"),ng()(),wl(355,"td",20),Ux(356,"-"),ng(),wl(357,"td",21)(358,"p"),Ux(359,"T\xEDtulo principal do menu"),ng()()()(),wl(360,"h3"),Ux(361,"Interfaces"),ng(),wl(362,"h4",28)(363,"code",5),Ux(364,"PoContextMenuItem"),ng()(),wl(365,"div",2)(366,"p"),Ux(367,"Interface para os itens do componente po-context-menu."),ng()(),wl(368,"h4",10),Ux(369,"Propriedades"),ng(),wl(370,"table",11)(371,"tr",12)(372,"th",13),Ux(373,"Nome"),ng(),wl(374,"th",13),Ux(375,"Tipo"),ng(),wl(376,"th",13),Ux(377,"Descri\xE7\xE3o"),ng()(),wl(378,"tr",14)(379,"td",15)(380,"div",16)(381,"span",17),Ux(382," action"),Ul(383,"br"),ng()()(),wl(384,"td",18)(385,"code",29),Ux(386,"Function"),ng()(),wl(387,"td",21)(388,"em")(389,"strong"),Ux(390,"(opcional)"),ng()(),wl(391,"p"),Ux(392,"A\xE7\xE3o executada ao clicar no item."),ng()()(),wl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),Ux(397," label"),Ul(398,"br"),ng()()(),wl(399,"td",18)(400,"code",19),Ux(401,"string"),ng()(),wl(402,"td",21)(403,"p"),Ux(404,"Texto do item de menu."),ng()()(),wl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),Ux(409," selected"),Ul(410,"br"),ng()()(),wl(411,"td",18)(412,"code",22),Ux(413,"boolean"),ng()(),wl(414,"td",21)(415,"em")(416,"strong"),Ux(417,"(opcional)"),ng()(),wl(418,"p"),Ux(419,"Estado de sele\xE7\xE3o do item."),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Context Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-context-menu-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-context-menu-basic-view")(6,"sample-po-context-menu-labs-view")(7,"sample-po-context-menu-user-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,ce,be,Ce,Se],encapsulation:2})}return i})();var ke=[{path:"",component:he}],ge=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[vL.forChild(ke),vL]})}return i})();var vt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[u5,ge]})}return i})();export{vt as DocPoContextMenuModule};