import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,B,cF as b5,s,r as r$1,cG as fNe,Q as Cl,a1 as dt,T as og,H as Lp,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,z as qx,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,bL as H3,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,b1 as ume,a3 as SNe,b6 as U3,cH as ANe,cI as tw,cJ as bx,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var re=(()=>{class i{poNotification=f(Xp);menuItems=[{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic"]],standalone:false,decls:2,vars:1,consts:[[1,"po-context-menu-wrapper"],["p-context-title","Cadastro","p-title","Fornecedor",3,"p-item-selected","p-items"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"po-context-menu",1),dt("p-item-selected",function(s){return o.onItemSelected(s)}),og()()),a&2&&(Lp(),ZE("p-items",o.menuItems));},dependencies:[fNe],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Context Menu Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-context-menu-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return i})();var pe=(()=>{class i{poNotification=f(Xp);contextTitle=B("Cadastro");title=B("Funcion\xE1rio");expanded=B(true);newItemLabel=B("");selected=B(false);menuItems=B([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(""),this.selected.set(false));}restore(){this.contextTitle.set("Cadastro"),this.title.set("Funcion\xE1rio"),this.expanded.set(true),this.newItemLabel.set(""),this.selected.set(false),this.menuItems.set([]);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs"]],standalone:false,decls:18,vars:9,consts:[["f","ngForm"],[1,"po-context-menu-wrapper"],[3,"p-expandedChange","p-item-selected","p-context-title","p-title","p-items","p-expanded"],[1,"po-row"],["name","contextTitle","p-label","Context Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-label","Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","expanded","p-label","Expanded","p-label-off","Collapsed","p-label-on","Expanded",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-pb-1"],["name","newItemLabel","p-label","New Item Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Selected","p-label","Selected","p-help","Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado.",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let u=gx();Cl(0,"div",1)(1,"po-context-menu",2),gw("p-expandedChange",function(d){return Jy(u),Zx(o.expanded,d)||(o.expanded=d),e_(d)}),dt("p-item-selected",function(d){return o.onItemSelected(d)}),og()(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",3)(6,"po-input",4),gw("ngModelChange",function(d){return Jy(u),Zx(o.contextTitle,d)||(o.contextTitle=d),e_(d)}),og(),Z0(),Cl(7,"po-input",5),gw("ngModelChange",function(d){return Jy(u),Zx(o.title,d)||(o.title=d),e_(d)}),og(),Z0(),og(),Cl(8,"div",3)(9,"po-switch",6),gw("ngModelChange",function(d){return Jy(u),Zx(o.expanded,d)||(o.expanded=d),e_(d)}),og(),Z0(),og(),Hl(10,"po-divider"),Cl(11,"div",7)(12,"po-input",8),gw("ngModelChange",function(d){return Jy(u),Zx(o.newItemLabel,d)||(o.newItemLabel=d),e_(d)}),og(),Z0(),Cl(13,"po-switch",9),gw("ngModelChange",function(d){return Jy(u),Zx(o.selected,d)||(o.selected=d),e_(d)}),og(),Z0(),Cl(14,"po-button",10),dt("p-click",function(){return o.addItem()}),og()(),Hl(15,"po-divider"),Cl(16,"div",3)(17,"po-button",11),dt("p-click",function(){return o.restore()}),og()()();}a&2&&(Lp(),ZE("p-context-title",o.contextTitle())("p-title",o.title())("p-items",o.menuItems()),pw("p-expanded",o.expanded),Lp(5),pw("ngModel",o.contextTitle),X0(),Lp(),pw("ngModel",o.title),X0(),Lp(2),pw("ngModel",o.expanded),X0(),Lp(3),pw("ngModel",o.newItemLabel),X0(),Lp(),pw("ngModel",o.selected),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,fNe,_v,q3,H3],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Context Menu Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-context-menu-wrapper">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-context-menu-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,pe],encapsulation:2})}return i})();var Me=["tab"],ue=(()=>{class i{tab=b5("tab");contextTitle="Cadastro";title="Usu\xE1rio";menuItems=B([{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}]);formDadosCadastrais=[{property:"name",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY."},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required."},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6}];formEndereco=[{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"}];documentos=[{Documento:"CPF",Valor:"987.xxx.xxx-60"},{Documento:"Passporte",Valor:"123456xxx-1"}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label);}onActivatedTab(m){this.updateSelectedItemMenu(m.id);}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r$1({},o),{selected:o.label===m}));this.menuItems.set(a);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user"]],viewQuery:function(a,o){a&1&&tw(o.tab,Me,5),a&2&&bx();},standalone:false,decls:19,vars:12,consts:[["tab",""],["dynamicForm",""],["p-label","Dados cadastrais","p-hide-close","","p-active","","id","Dados cadastrais",3,"p-activated-tab"],[1,"po-context-menu-wrapper"],[3,"p-item-selected","p-context-title","p-title","p-items"],["p-title","Dados cadastrais"],[3,"p-fields"],["p-label","Endere\xE7os","id","Endere\xE7os","p-hide-close","",3,"p-activated-tab"],["p-title","Endere\xE7os"],["p-label","Documentos","id","Documentos","p-hide-close","",3,"p-activated-tab"],["p-title","Documentos"],[3,"p-items"]],template:function(a,o){a&1&&(Cl(0,"po-context-tabs",null,0)(2,"po-tab",2),dt("p-activated-tab",function(s){return o.onActivatedTab(s)}),Cl(3,"div",3)(4,"po-context-menu",4),dt("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Cl(5,"po-page-default",5),Hl(6,"po-dynamic-form",6,1),og()()(),Cl(8,"po-tab",7),dt("p-activated-tab",function(s){return o.onActivatedTab(s)}),Cl(9,"div",3)(10,"po-context-menu",4),dt("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Cl(11,"po-page-default",8),Hl(12,"po-dynamic-form",6,1),og()()(),Cl(14,"po-tab",9),dt("p-activated-tab",function(s){return o.onActivatedTab(s)}),Cl(15,"div",3)(16,"po-context-menu",4),dt("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Cl(17,"po-page-default",10),Hl(18,"po-table",11),og()()()()),a&2&&(Lp(4),ZE("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),ZE("p-fields",o.formDadosCadastrais),Lp(4),ZE("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),ZE("p-fields",o.formEndereco),Lp(4),ZE("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),ZE("p-items",o.documentos));},dependencies:[fNe,ume,SNe,U3,ofe,ANe],styles:["po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}"],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Context - Cadastro de Usu\xE1rio"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-context-menu-user/sample-po-context-menu-user.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-context-tabs #tab>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-context-menu-user/sample-po-context-menu-user.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-context-menu-user/sample-po-context-menu-user.component.css"),og(),Cl(25,"pre",11),qx(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-context-menu-user"),og(),Hl(29,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return i})();var xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-doc"]],standalone:false,decls:420,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"language-html"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoContextMenuItem>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoContextMenuModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-context-menu."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoContextMenuComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-context-menu"),og(),qx(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Cl(18,"code"),qx(19,"po-menu"),og(),qx(20,", por\xE9m independente e focado em navega\xE7\xE3o contextual."),og(),Cl(21,"p"),qx(22,"No caso de uso do componente "),Cl(23,"code"),qx(24,"po-page-default"),og(),qx(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Cl(26,"strong"),qx(27,"po-context-menu-wrapper"),og(),qx(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),og(),Cl(29,"p"),qx(30,"O uso simult\xE2neo dos componentes "),Cl(31,"code"),qx(32,"po-menu"),og(),qx(33," e "),Cl(34,"code"),qx(35,"po-context-menu"),og(),qx(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),og(),Cl(37,"h4"),qx(38,"Tokens customiz\xE1veis"),og(),Cl(39,"p"),qx(40,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(41,"blockquote")(42,"p"),qx(43,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(44,"a",6),qx(45,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(46,"."),og()(),Cl(47,"table")(48,"thead")(49,"tr")(50,"th"),qx(51,"Propriedade"),og(),Cl(52,"th"),qx(53,"Descri\xE7\xE3o"),og(),Cl(54,"th"),qx(55,"Valor Padr\xE3o"),og()()(),Cl(56,"tbody")(57,"tr")(58,"td")(59,"strong"),qx(60,"Default Values"),og()(),Hl(61,"td")(62,"td"),og(),Cl(63,"tr")(64,"td")(65,"code"),qx(66,"--font-family"),og()(),Cl(67,"td"),qx(68,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(69,"td")(70,"code"),qx(71,"var(--font-family-theme)"),og()()(),Cl(72,"tr")(73,"td")(74,"code"),qx(75,"--font-size"),og()(),Cl(76,"td"),qx(77,"Tamanho da fonte dos itens"),og(),Cl(78,"td")(79,"code"),qx(80,"var(--font-size-default)"),og()()(),Cl(81,"tr")(82,"td")(83,"code"),qx(84,"--font-size-context-title"),og()(),Cl(85,"td"),qx(86,"Tamanho da fonte do t\xEDtulo de contexto"),og(),Cl(87,"td")(88,"code"),qx(89,"var(--font-size-sm)"),og()()(),Cl(90,"tr")(91,"td")(92,"code"),qx(93,"--font-size-title"),og()(),Cl(94,"td"),qx(95,"Tamanho da fonte do t\xEDtulo principal"),og(),Cl(96,"td")(97,"code"),qx(98,"var(--font-size-lg)"),og()()(),Cl(99,"tr")(100,"td")(101,"code"),qx(102,"--line-height"),og()(),Cl(103,"td"),qx(104,"Altura da linha"),og(),Cl(105,"td")(106,"code"),qx(107,"var(--line-height-md)"),og()()(),Cl(108,"tr")(109,"td")(110,"code"),qx(111,"--border-radius"),og()(),Cl(112,"td"),qx(113,"Raio dos cantos dos itens"),og(),Cl(114,"td")(115,"code"),qx(116,"var(--border-radius-md)"),og()()(),Cl(117,"tr")(118,"td")(119,"code"),qx(120,"--border-color"),og()(),Cl(121,"td"),qx(122,"Cor da borda lateral direita do componente"),og(),Cl(123,"td")(124,"code"),qx(125,"var(--color-neutral-light-20)"),og()()(),Cl(126,"tr")(127,"td")(128,"code"),qx(129,"--background-color"),og()(),Cl(130,"td"),qx(131,"Cor de fundo do componente"),og(),Cl(132,"td")(133,"code"),qx(134,"var(--color-neutral-light-05)"),og()()(),Cl(135,"tr")(136,"td")(137,"code"),qx(138,"--color"),og()(),Cl(139,"td"),qx(140,"Cor do texto dos itens"),og(),Cl(141,"td")(142,"code"),qx(143,"var(--color-action-default)"),og()()(),Cl(144,"tr")(145,"td")(146,"code"),qx(147,"--color-context-title"),og()(),Cl(148,"td"),qx(149,"Cor do texto do t\xEDtulo de contexto"),og(),Cl(150,"td")(151,"code"),qx(152,"var(--color-neutral-mid-40)"),og()()(),Cl(153,"tr")(154,"td")(155,"code"),qx(156,"--color-title"),og()(),Cl(157,"td"),qx(158,"Cor do texto do t\xEDtulo principal"),og(),Cl(159,"td")(160,"code"),qx(161,"var(--color-neutral-dark-80)"),og()()(),Cl(162,"tr")(163,"td")(164,"code"),qx(165,"--font-weight"),og()(),Cl(166,"td"),qx(167,"Peso da fonte dos itens"),og(),Cl(168,"td")(169,"code"),qx(170,"var(--font-weight-bold)"),og()()(),Cl(171,"tr")(172,"td")(173,"code"),qx(174,"--font-weight-title"),og()(),Cl(175,"td"),qx(176,"Peso da fonte do t\xEDtulo principal"),og(),Cl(177,"td")(178,"code"),qx(179,"var(--font-weight-bold)"),og()()(),Cl(180,"tr")(181,"td")(182,"code"),qx(183,"--outline-color-focused"),og()(),Cl(184,"td"),qx(185,"Cor do outline no estado de focus"),og(),Cl(186,"td")(187,"code"),qx(188,"var(--color-action-focus)"),og()()(),Cl(189,"tr")(190,"td")(191,"strong"),qx(192,"Hover"),og()(),Hl(193,"td")(194,"td"),og(),Cl(195,"tr")(196,"td")(197,"code"),qx(198,"--color-hover"),og()(),Cl(199,"td"),qx(200,"Cor do texto no estado hover"),og(),Cl(201,"td")(202,"code"),qx(203,"var(--color-brand-01-darkest)"),og()()(),Cl(204,"tr")(205,"td")(206,"code"),qx(207,"--background-color-hover"),og()(),Cl(208,"td"),qx(209,"Cor de fundo no estado hover"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-brand-01-lighter)"),og()()(),Cl(213,"tr")(214,"td")(215,"strong"),qx(216,"Pressed"),og()(),Hl(217,"td")(218,"td"),og(),Cl(219,"tr")(220,"td")(221,"code"),qx(222,"--background-color-pressed"),og()(),Cl(223,"td"),qx(224,"Cor de fundo no estado pressed"),og(),Cl(225,"td")(226,"code"),qx(227,"var(--color-brand-01-light)"),og()()(),Cl(228,"tr")(229,"td")(230,"strong"),qx(231,"Active (Selected)"),og()(),Hl(232,"td")(233,"td"),og(),Cl(234,"tr")(235,"td")(236,"code"),qx(237,"--background-color-actived"),og()(),Cl(238,"td"),qx(239,"Cor de fundo do item selecionado"),og(),Cl(240,"td")(241,"code"),qx(242,"var(--color-brand-01-lightest)"),og()()(),Cl(243,"tr")(244,"td")(245,"code"),qx(246,"--color-actived"),og()(),Cl(247,"td"),qx(248,"Cor do texto do item selecionado"),og(),Cl(249,"td")(250,"code"),qx(251,"var(--color-action-pressed)"),og()()()()()(),Cl(252,"div",7)(253,"h4",8),qx(254,"Seletor"),og(),Cl(255,"pre",9),qx(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),og()(),Cl(257,"h4",10),qx(258,"Propriedades"),og(),Cl(259,"table",11)(260,"tr",12)(261,"th",13),qx(262,"Nome"),og(),Cl(263,"th",13),qx(264,"Tipo"),og(),Cl(265,"th",13),qx(266,"Padr\xE3o"),og(),Cl(267,"th",13),qx(268,"Descri\xE7\xE3o"),og()(),Cl(269,"tr",14)(270,"td",15)(271,"div",16)(272,"span",17),qx(273," p-context-title"),Hl(274,"br"),og()()(),Cl(275,"td",18)(276,"code",19),qx(277,"string"),og()(),Cl(278,"td",20),qx(279,"-"),og(),Cl(280,"td",21)(281,"p"),qx(282,"T\xEDtulo do contexto superior"),og()()(),Cl(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),qx(287," p-expanded"),Hl(288,"br"),og()()(),Cl(289,"td",18)(290,"code",22),qx(291,"boolean"),og()(),Cl(292,"td",20)(293,"p")(294,"code"),qx(295,"true"),og()()(),Cl(296,"td",21)(297,"p"),qx(298,"Define se o menu est\xE1 aberto ou fechado."),og(),Cl(299,"p"),qx(300,"Suporta two-way binding:"),og(),Cl(301,"pre")(302,"code",23),qx(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),og()(),Cl(304,"p"),qx(305,"ou"),og(),Cl(306,"pre")(307,"code",23),qx(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),og()()()(),Cl(309,"tr",14)(310,"td",15)(311,"div",24)(312,"span",25),qx(313," (p-item-selected)"),Hl(314,"br"),og()()(),Cl(315,"td",18)(316,"code",26),qx(317,"EventEmitter"),og()(),Cl(318,"td",20),qx(319,"-"),og(),Cl(320,"td",21)(321,"p"),qx(322,"Evento emitido ao selecionar um item. Emite o item selecionado."),og()()(),Cl(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),qx(327," p-items"),Hl(328,"br"),og()()(),Cl(329,"td",18)(330,"code",27),qx(331,"Array<PoContextMenuItem>"),og()(),Cl(332,"td",20),qx(333,"-"),og(),Cl(334,"td",21)(335,"p"),qx(336,"Lista de itens para renderiza\xE7\xE3o."),og(),Cl(337,"blockquote")(338,"p"),qx(339,"Ao receber os itens, o componente valida que apenas um item pode ter "),Cl(340,"code"),qx(341,"selected: true"),og(),qx(342,`.
Se mais de um item estiver com `),Cl(343,"code"),qx(344,"selected: true"),og(),qx(345,", apenas o primeiro ser\xE1 mantido como selecionado."),og()()()(),Cl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),qx(350," p-title"),Hl(351,"br"),og()()(),Cl(352,"td",18)(353,"code",19),qx(354,"string"),og()(),Cl(355,"td",20),qx(356,"-"),og(),Cl(357,"td",21)(358,"p"),qx(359,"T\xEDtulo principal do menu"),og()()()(),Cl(360,"h3"),qx(361,"Interfaces"),og(),Cl(362,"h4",28)(363,"code",5),qx(364,"PoContextMenuItem"),og()(),Cl(365,"div",2)(366,"p"),qx(367,"Interface para os itens do componente po-context-menu."),og()(),Cl(368,"h4",10),qx(369,"Propriedades"),og(),Cl(370,"table",11)(371,"tr",12)(372,"th",13),qx(373,"Nome"),og(),Cl(374,"th",13),qx(375,"Tipo"),og(),Cl(376,"th",13),qx(377,"Descri\xE7\xE3o"),og()(),Cl(378,"tr",14)(379,"td",15)(380,"div",16)(381,"span",17),qx(382," action"),Hl(383,"br"),og()()(),Cl(384,"td",18)(385,"code",29),qx(386,"Function"),og()(),Cl(387,"td",21)(388,"em")(389,"strong"),qx(390,"(opcional)"),og()(),Cl(391,"p"),qx(392,"A\xE7\xE3o executada ao clicar no item."),og()()(),Cl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),qx(397," label"),Hl(398,"br"),og()()(),Cl(399,"td",18)(400,"code",19),qx(401,"string"),og()(),Cl(402,"td",21)(403,"p"),qx(404,"Texto do item de menu."),og()()(),Cl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),qx(409," selected"),Hl(410,"br"),og()()(),Cl(411,"td",18)(412,"code",22),qx(413,"boolean"),og()(),Cl(414,"td",21)(415,"em")(416,"strong"),qx(417,"(opcional)"),og()(),Cl(418,"p"),qx(419,"Estado de sele\xE7\xE3o do item."),og()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Context Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-context-menu-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-context-menu-basic-view")(6,"sample-po-context-menu-labs-view")(7,"sample-po-context-menu-user-view"),og()()()),a&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,se,ce,be,xe],encapsulation:2})}return i})();var De=[{path:"",component:Ce}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[bL.forChild(De),bL]})}return i})();var ct=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ca,Se]})}return i})();export{ct as DocPoContextMenuModule};