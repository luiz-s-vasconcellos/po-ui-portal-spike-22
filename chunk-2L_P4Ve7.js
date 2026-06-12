import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,s,r as r$1,S,cd as sme,X as CNe,_ as Sme,Q as Cl,a2 as WE,T as og,Z as ZE,bQ as sN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,z as qx,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,dp as Tme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,cr as _3,bM as Pa,b5 as Ko,$ as PNe,dq as AO,W as we,av as zl,aw as uo,ax as fo,a3 as SNe,a4 as dN,cM as Qx,a5 as hN,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Oe=()=>({name:"Registro 1",email:"register@po-ui.com"}),He=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Be=(a,C)=>[a,C];function je(a,C){if(a&1&&(Cl(0,"div",2),Hl(1,"po-info",3),og()),a&2){let o=C.$implicit;Lp(),ZE("p-value",o.email);}}var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic"]],standalone:false,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(Cl(0,"po-list-view",0),WE(1,je,2,1,"ng-template",1),og()),l&2&&ZE("p-items",sN(3,Be,iN(1,Oe),iN(2,He)));},dependencies:[sme,CNe,Sme],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO List View Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-list-view
  p-property-title="name"
  [p-items]="[
    { name: 'Registro 1', email: 'register@po-ui.com' },
    { name: 'Registro 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-list-view-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ze,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,_e],encapsulation:2})}return a})();function We(a,C){if(a&1&&(Cl(0,"div",5),Hl(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),og()),a&2){let o=C.$implicit;Lp(),ZE("p-value",o.name),Lp(),ZE("p-value",o.email),Lp(),ZE("p-value",o.location),Lp(),ZE("p-value",o.phone);}}function Re(a,C){if(a&1&&(Cl(0,"div",5),Hl(1,"po-info",26)(2,"po-info",27),og()),a&2){let o=C.$implicit;Lp(),ZE("p-value",o.company),Lp(),ZE("p-value",o.zipCode);}}var Ae=(()=>{class a{poNotification=f(Xp);action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:true},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];ngOnInit(){this.restore();}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm();}addItem(){this.items.push(this.generateNewItem(this.items.length+1));}changeAction(o){this.titleAction=o;}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?s(r$1({},o),{disabled:!this.properties.includes("select")}):o);}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(o){this.customLiterals=void 0;}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm();}showMore(){this.addItem();}generateNewItem(o){return {name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null};}showAction(o){this.poNotification.success(`Action clicked: ${o}`);}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs"]],standalone:false,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-list-view",2),dt("p-show-more",function(){return n.showMore()})("p-title-action",function(){return n.changeAction("p-title-action")}),WE(1,We,5,4,"ng-template",3)(2,Re,3,2,"ng-template",4),og(),Hl(3,"po-divider"),Cl(4,"div",5)(5,"po-button",6),dt("p-click",function(){return n.addItem()}),og()(),Hl(6,"po-divider"),Cl(7,"div",5),Hl(8,"po-info",7),og(),Hl(9,"po-divider"),Cl(10,"form",null,0)(12,"div",5)(13,"po-select",8),gw("ngModelChange",function(p){return Jy(d),Zx(n.propertyTitle,p)||(n.propertyTitle=p),e_(p)}),og(),Z0(),Cl(14,"po-number",9),gw("ngModelChange",function(p){return Jy(d),Zx(n.height,p)||(n.height=p),e_(p)}),dt("p-change",function(){return n.changeLiterals()}),og(),Z0(),Cl(15,"po-input",10),gw("ngModelChange",function(p){return Jy(d),Zx(n.propertyLinkValue,p)||(n.propertyLinkValue=p),e_(p)}),og(),Z0(),Cl(16,"po-input",11),gw("ngModelChange",function(p){return Jy(d),Zx(n.literals,p)||(n.literals=p),e_(p)}),dt("p-change",function(){return n.changeLiterals()}),og(),Z0(),Cl(17,"po-radio-group",12),gw("ngModelChange",function(p){return Jy(d),Zx(n.componentsSize,p)||(n.componentsSize=p),e_(p)}),og(),Z0(),og(),Cl(18,"div",5)(19,"po-checkbox-group",13),gw("ngModelChange",function(p){return Jy(d),Zx(n.properties,p)||(n.properties=p),e_(p)}),dt("p-change",function(){return n.changeActionOptions()}),og(),Z0(),og()(),Hl(20,"po-divider"),Cl(21,"form",null,1)(23,"div",5)(24,"po-input",14),gw("ngModelChange",function(p){return Jy(d),Zx(n.action.action,p)||(n.action.action=p),e_(p)}),og(),Z0(),Cl(25,"po-input",15),gw("ngModelChange",function(p){return Jy(d),Zx(n.action.label,p)||(n.action.label=p),e_(p)}),og(),Z0(),Cl(26,"po-input",16),gw("ngModelChange",function(p){return Jy(d),Zx(n.action.url,p)||(n.action.url=p),e_(p)}),og(),Z0(),Cl(27,"po-select",17),gw("ngModelChange",function(p){return Jy(d),Zx(n.action.type,p)||(n.action.type=p),e_(p)}),og(),Z0(),Cl(28,"po-select",18),gw("ngModelChange",function(p){return Jy(d),Zx(n.action.icon,p)||(n.action.icon=p),e_(p)}),og(),Z0(),Cl(29,"po-checkbox-group",19),gw("ngModelChange",function(p){return Jy(d),Zx(n.action,p)||(n.action=p),e_(p)}),og(),Z0(),og(),Cl(30,"div",5)(31,"po-button",20),dt("p-click",function(){return n.addAction(n.action)}),og()()(),Hl(32,"po-divider"),Cl(33,"div",5)(34,"po-button",21),dt("p-click",function(){return Jy(d),Sx(22).reset(),e_(n.restore())}),og()();}if(l&2){let d=Sx(22);ZE("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),Lp(8),ZE("p-value",n.titleAction),Lp(5),pw("ngModel",n.propertyTitle),ZE("p-options",n.propertyTitleOptions),X0(),Lp(),pw("ngModel",n.height),X0(),Lp(),pw("ngModel",n.propertyLinkValue),X0(),Lp(),pw("ngModel",n.literals),X0(),Lp(),pw("ngModel",n.componentsSize),ZE("p-options",n.componentsSizeOptions),X0(),Lp(2),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0(),Lp(5),pw("ngModel",n.action.action),X0(),Lp(),pw("ngModel",n.action.label),X0(),Lp(),pw("ngModel",n.action.url),X0(),Lp(),pw("ngModel",n.action.type),ZE("p-options",n.typeOptions),X0(),Lp(),pw("ngModel",n.action.icon),ZE("p-options",n.iconOptions),X0(),Lp(),pw("ngModel",n.action),ZE("p-options",n.actionOptions),X0(),Lp(2),ZE("p-disabled",d.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Nde,nme,sme,CNe,Sme,Tme],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO List View Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-property-link]="propertyLink"
  [p-property-title]="propertyTitle"
  [p-select]="properties.includes('select')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<po-divider />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-3"
      name="propertyTitle"
      [(ngModel)]="propertyTitle"
      p-help="Ex.: email"
      p-label="Property title"
      [p-options]="propertyTitleOptions"
    >
    </po-select>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-help="Ex.: 200"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-6"
      name="propertyLinkValue"
      [(ngModel)]="propertyLinkValue"
      p-help='Ex.: "http://po.com.br"'
      p-label="Title Link"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      p-help='To enable the "Hide Select All" option, you must select the "Select" option first.'
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<po-divider />

<form #actionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-3"
      p-label="Add Action"
      [p-disabled]="actionForm.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-labs',
  templateUrl: './sample-po-list-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoListViewAction;
  actions: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals: PoListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.componentsSize = 'medium';
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-list-view-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ue,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ae],encapsulation:2})}return a})();var J=(()=>{class a{getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var $e=["detailsModal"];function Qe(a,C){if(a&1&&(Cl(0,"div",6),Hl(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),dN(4,"uppercase"),og()),a&2){let o=C.$implicit;Lp(),ZE("p-value",o.idCard),Lp(),ZE("p-value",o.jobDescription),Lp(),ZE("p-value",Qx(hN(4,4,o.hireStatus)));}}function Ye(a,C){if(a&1&&(Cl(0,"div",6),Hl(1,"po-info",17)(2,"po-info",18),og()),a&2){let o=C.$implicit;Lp(),ZE("p-value",o.age),Lp(),ZE("p-value",o.city);}}var De=(()=>{class a{poNotification=f(Xp);hiringProcessesService=f(J);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=false;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses];}formatTitle(o){return `${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open();}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!");}disableHireButton(){return !this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!");}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)));}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`;}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case "progress":o.call(this,l);break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=false;}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&zl($e,7),l&2){let d;uo(d=fo())&&(n.detailsModalElement=d.first);}},standalone:false,features:[we([J])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){l&1&&(Cl(0,"po-page-list",1)(1,"po-list-view",2),dt("p-title-action",function(c){return n.showDetailModal(c)}),WE(2,Qe,5,6,"ng-template",3)(3,Ye,3,2,"ng-template",4),og(),Cl(4,"po-modal",5,0)(6,"div",6)(7,"div",7),Hl(8,"po-avatar",8),og(),Cl(9,"div",9)(10,"div",10),Hl(11,"po-tag",11),og(),Cl(12,"div",10),Hl(13,"po-info",12),og(),Cl(14,"div",10),Hl(15,"po-info",13),og()()()()()),l&2&&(ZE("p-actions",n.pageActions)("p-filter",n.filterSettings),Lp(),ZE("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),Lp(),ZE("p-title",n.formatTitle),Lp(),ZE("p-show-detail",n.showDetail),Lp(),ZE("p-title",n.titleDetailsModal),Lp(7),ZE("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),Lp(2),ZE("p-value",n.selectedActionItem.email),Lp(2),ZE("p-value",n.selectedActionItem.telephone));},dependencies:[_3,Pa,sme,CNe,Sme,Tme,Ko,PNe,AO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO List View - Hiring Processes"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-property-link="url"
    p-property-title="name"
    p-select
    [p-actions]="actions"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoListViewAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
  selector: 'sample-po-list-view-hiring-processes',
  templateUrl: 'sample-po-list-view-hiring-processes.component.html',
  providers: [SamplePoListViewHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private hiringProcessesService = inject(SamplePoListViewHiringProcessesService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'an an-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(item) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),og(),Cl(21,"label",6),qx(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'progress',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant'
      },
      {
        hireStatus: 'progress',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA'
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer'
      }
    ];
  }
}
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-list-view-hiring-processes"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ke,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,De],encapsulation:2})}return a})();var ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-doc"]],standalone:false,decls:726,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(l,n){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-list-view"),og(),qx(9,"."),og(),Cl(10,"blockquote")(11,"p"),qx(12,"Para o correto funcionamento do componente "),Cl(13,"code"),qx(14,"po-list-view"),og(),qx(15,", deve ser importado o m\xF3dulo "),Cl(16,"code"),qx(17,"BrowserAnimationsModule"),og(),qx(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),og()(),Cl(19,"p"),qx(20,"M\xF3dulo da aplica\xE7\xE3o:"),og(),Cl(21,"pre")(22,"code"),qx(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),og()(),Cl(24,"p"),qx(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),og(),Cl(26,"pre")(27,"code"),qx(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),og()()(),Cl(29,"h3",3),qx(30,"Componente"),og(),Cl(31,"h4",4)(32,"code",5),qx(33,"PoListViewComponent"),og()(),Cl(34,"div",2)(35,"p"),qx(36,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),Cl(37,"em"),qx(38,"templates"),og(),Cl(39,"strong")(40,"a",6),qx(41,"p-list-view-content-template"),og()(),qx(42,` e
`),Cl(43,"strong")(44,"a",7),qx(45,"p-list-view-detail-template"),og()(),qx(46,"."),og(),Cl(47,"p"),qx(48,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),Cl(49,"strong")(50,"a",7),qx(51,"p-list-view-detail-template"),og()(),qx(52,". "),og()(),Cl(53,"div",8)(54,"h4",9),qx(55,"Seletor"),og(),Cl(56,"pre",10),qx(57,`<po-list-view
    p-actions="PoListViewAction[]"
    p-components-size="string"
    p-height="number"
    p-hide-select-all="boolean"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),og()(),Cl(58,"h4",11),qx(59,"Propriedades"),og(),Cl(60,"table",12)(61,"tr",13)(62,"th",14),qx(63,"Nome"),og(),Cl(64,"th",14),qx(65,"Tipo"),og(),Cl(66,"th",14),qx(67,"Padr\xE3o"),og(),Cl(68,"th",14),qx(69,"Descri\xE7\xE3o"),og()(),Cl(70,"tr",15)(71,"td",16)(72,"div",17)(73,"span",18),qx(74," p-actions"),Hl(75,"br"),og()()(),Cl(76,"td",19)(77,"code",20),qx(78,"PoListViewAction[]"),og()(),Cl(79,"td",21),qx(80,"-"),og(),Cl(81,"td",22)(82,"em")(83,"strong"),qx(84,"(opcional)"),og()(),Cl(85,"p"),qx(86,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Cl(87,"tr",15)(88,"td",16)(89,"div",17)(90,"span",18),qx(91," p-components-size"),Hl(92,"br"),og()()(),Cl(93,"td",19)(94,"code",23),qx(95,"string"),og()(),Cl(96,"td",21)(97,"p")(98,"code"),qx(99,"medium"),og()()(),Cl(100,"td",22)(101,"em")(102,"strong"),qx(103,"(opcional)"),og()(),Cl(104,"p"),qx(105,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(106,"ul")(107,"li")(108,"code"),qx(109,"small"),og(),qx(110,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(111,"li")(112,"code"),qx(113,"medium"),og(),qx(114,": aplica a medida medium de cada componente."),og()(),Cl(115,"blockquote")(116,"p"),qx(117,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(118,"code"),qx(119,"medium"),og(),qx(120,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(121,"a",24),qx(122,"po-theme"),og(),qx(123,"."),og()()()(),Cl(124,"tr",15)(125,"td",16)(126,"div",17)(127,"span",18),qx(128," p-height"),Hl(129,"br"),og()()(),Cl(130,"td",19)(131,"code",25),qx(132,"number"),og()(),Cl(133,"td",21),qx(134,"-"),og(),Cl(135,"td",22)(136,"em")(137,"strong"),qx(138,"(opcional)"),og()(),Cl(139,"p"),qx(140,"Define a altura do "),Cl(141,"code"),qx(142,"po-list-view"),og(),qx(143," em "),Cl(144,"em"),qx(145,"pixels"),og(),qx(146,"."),og()()(),Cl(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),qx(151," p-hide-select-all"),Hl(152,"br"),og()()(),Cl(153,"td",19)(154,"code",26),qx(155,"boolean"),og()(),Cl(156,"td",21)(157,"p")(158,"code"),qx(159,"false"),og()()(),Cl(160,"td",22)(161,"p"),qx(162,"Esconde o "),Cl(163,"em"),qx(164,"checkbox"),og(),qx(165," para sele\xE7\xE3o de todos os itens."),og()()(),Cl(166,"tr",15)(167,"td",16)(168,"div",17)(169,"span",18),qx(170," p-items"),Hl(171,"br"),og()()(),Cl(172,"td",19)(173,"code",27),qx(174,"any[]"),og()(),Cl(175,"td",21),qx(176,"-"),og(),Cl(177,"td",22)(178,"p"),qx(179,"Lista de itens que ser\xE3o exibidos no componente."),og()()(),Cl(180,"tr",15)(181,"td",16)(182,"div",17)(183,"span",18),qx(184," p-literals"),Hl(185,"br"),og()()(),Cl(186,"td",19)(187,"code",28),qx(188,"PoListViewLiterals"),og()(),Cl(189,"td",21),qx(190,"-"),og(),Cl(191,"td",22)(192,"em")(193,"strong"),qx(194,"(opcional)"),og()(),Cl(195,"p"),qx(196,"Objeto com as literais usadas no "),Cl(197,"code"),qx(198,"po-list-view"),og(),qx(199,"."),og(),Cl(200,"p"),qx(201,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(202,"pre")(203,"code"),qx(204,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),og()(),Cl(205,"p"),qx(206,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(207,"pre")(208,"code"),qx(209,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),og()(),Cl(210,"p"),qx(211,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(212,"pre")(213,"code"),qx(214,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),og()(),Cl(215,"blockquote")(216,"p"),qx(217,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(218,"a",29)(219,"code"),qx(220,"PoI18nService"),og()(),qx(221," ou do browser."),og()()()(),Cl(222,"tr",15)(223,"td",16)(224,"div",17)(225,"span",18),qx(226," p-property-link"),Hl(227,"br"),og()()(),Cl(228,"td",19)(229,"code",23),qx(230,"string"),og()(),Cl(231,"td",21),qx(232,"-"),og(),Cl(233,"td",22)(234,"em")(235,"strong"),qx(236,"(opcional)"),og()(),Cl(237,"p"),qx(238,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),og()()(),Cl(239,"tr",15)(240,"td",16)(241,"div",17)(242,"span",18),qx(243," p-property-title"),Hl(244,"br"),og()()(),Cl(245,"td",19)(246,"code",23),qx(247,"string"),og()(),Cl(248,"td",21),qx(249,"-"),og(),Cl(250,"td",22)(251,"em")(252,"strong"),qx(253,"(opcional)"),og()(),Cl(254,"p"),qx(255,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),og()()(),Cl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),qx(260," p-select"),Hl(261,"br"),og()()(),Cl(262,"td",19)(263,"code",26),qx(264,"boolean"),og()(),Cl(265,"td",21)(266,"p")(267,"code"),qx(268,"false"),og()()(),Cl(269,"td",22)(270,"em")(271,"strong"),qx(272,"(opcional)"),og()(),Cl(273,"p"),qx(274,"Habilita um "),Cl(275,"em"),qx(276,"checkbox"),og(),qx(277," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),Cl(278,"code"),qx(279,"$selected"),og(),qx(280,` para identificar se o
item est\xE1 selecionado, por exemplo:`),og(),Cl(281,"pre")(282,"code"),qx(283,`item.$selected

// ou

item['$selected']
`),og()()()(),Cl(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),qx(288," (p-show-detail)"),Hl(289,"br"),og()()(),Cl(290,"td",19)(291,"code",32),qx(292,"EventEmitter"),og()(),Cl(293,"td",21),qx(294,"-"),og(),Cl(295,"td",22)(296,"em")(297,"strong"),qx(298,"(opcional)"),og()(),Cl(299,"p"),qx(300,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),og(),Cl(301,"p"),qx(302,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),og()()(),Cl(303,"tr",15)(304,"td",16)(305,"div",30)(306,"span",31),qx(307," (p-show-more)"),Hl(308,"br"),og()()(),Cl(309,"td",19)(310,"code",32),qx(311,"EventEmitter"),og()(),Cl(312,"td",21),qx(313,"-"),og(),Cl(314,"td",22)(315,"em")(316,"strong"),qx(317,"(opcional)"),og()(),Cl(318,"p"),qx(319,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),og(),Cl(320,"blockquote")(321,"p"),qx(322,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),og()()()(),Cl(323,"tr",15)(324,"td",16)(325,"div",17)(326,"span",18),qx(327," p-show-more-disabled"),Hl(328,"br"),og()()(),Cl(329,"td",19)(330,"code",26),qx(331,"boolean"),og()(),Cl(332,"td",21),qx(333,"-"),og(),Cl(334,"td",22)(335,"em")(336,"strong"),qx(337,"(opcional)"),og()(),Cl(338,"p"),qx(339,"Indica que o bot\xE3o "),Cl(340,"code"),qx(341,"Carregar Mais Resultados"),og(),qx(342," ser\xE1 desabilitado."),og()()(),Cl(343,"tr",15)(344,"td",16)(345,"div",30)(346,"span",31),qx(347," (p-title-action)"),Hl(348,"br"),og()()(),Cl(349,"td",19)(350,"code",32),qx(351,"EventEmitter"),og()(),Cl(352,"td",21),qx(353,"-"),og(),Cl(354,"td",22)(355,"em")(356,"strong"),qx(357,"(opcional)"),og()(),Cl(358,"p"),qx(359,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),og(),Cl(360,"p"),qx(361,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),og()()()(),Cl(362,"h3"),qx(363,"Interfaces"),og(),Cl(364,"h4",33)(365,"code",5),qx(366,"PoListViewAction"),og()(),Cl(367,"div",2)(368,"p"),qx(369,"Interface que define as a\xE7\xF5es do componente "),Cl(370,"code"),qx(371,"po-list-view"),og(),qx(372,"."),og(),Cl(373,"blockquote")(374,"p"),qx(375,"As propriedades "),Cl(376,"code"),qx(377,"subItems"),og(),qx(378,", "),Cl(379,"code"),qx(380,"separator"),og(),qx(381,", "),Cl(382,"code"),qx(383,"url"),og(),qx(384," e "),Cl(385,"code"),qx(386,"selected"),og(),qx(387,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),og()()(),Cl(388,"h4",11),qx(389,"Propriedades"),og(),Cl(390,"table",12)(391,"tr",13)(392,"th",14),qx(393,"Nome"),og(),Cl(394,"th",14),qx(395,"Tipo"),og(),Cl(396,"th",14),qx(397,"Descri\xE7\xE3o"),og()(),Cl(398,"tr",15)(399,"td",16)(400,"div",17)(401,"span",18),qx(402," action"),Hl(403,"br"),og()()(),Cl(404,"td",19)(405,"code",34),qx(406,"Function"),og()(),Cl(407,"td",22)(408,"em")(409,"strong"),qx(410,"(opcional)"),og()(),Cl(411,"p"),qx(412,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Cl(413,"p"),qx(414,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(415,"code"),qx(416,"subItems"),og(),qx(417,"."),og(),Cl(418,"blockquote")(419,"p"),qx(420,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Cl(421,"em"),qx(422,"bind"),og(),qx(423,`:
`),Cl(424,"code"),qx(425,"action: this.myFunction.bind(this)"),og()()()()(),Cl(426,"tr",15)(427,"td",16)(428,"div",17)(429,"span",18),qx(430," disabled"),Hl(431,"br"),og()()(),Cl(432,"td",19)(433,"code",26),qx(434,"boolean "),og(),Cl(435,"code",34),qx(436," Function"),og()(),Cl(437,"td",22)(438,"em")(439,"strong"),qx(440,"(opcional)"),og()(),Cl(441,"p"),qx(442,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Cl(443,"tr",15)(444,"td",16)(445,"div",17)(446,"span",18),qx(447," icon"),Hl(448,"br"),og()()(),Cl(449,"td",19)(450,"code",23),qx(451,"string "),og(),Cl(452,"code",35),qx(453," TemplateRef<void>"),og()(),Cl(454,"td",22)(455,"em")(456,"strong"),qx(457,"(opcional)"),og()(),Cl(458,"p"),qx(459,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(460,"p"),qx(461,"Aceita \xEDcones da "),Cl(462,"a",36),qx(463,"Biblioteca de \xEDcones"),og(),qx(464,`, fontes externas (ex: Font Awesome)
ou um `),Cl(465,"code"),qx(466,"TemplateRef"),og(),qx(467," para \xEDcones customizados."),og(),Cl(468,"pre")(469,"code"),qx(470,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Cl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),qx(475," label"),Hl(476,"br"),og()()(),Cl(477,"td",19)(478,"code",23),qx(479,"string"),og()(),Cl(480,"td",22)(481,"p"),qx(482,"R\xF3tulo da a\xE7\xE3o."),og(),Cl(483,"p"),qx(484,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(485,"code"),qx(486,"subItems"),og(),qx(487,"."),og()()(),Cl(488,"tr",15)(489,"td",16)(490,"div",17)(491,"span",18),qx(492," selected"),Hl(493,"br"),og()()(),Cl(494,"td",19)(495,"code",26),qx(496,"boolean"),og()(),Cl(497,"td",22)(498,"em")(499,"strong"),qx(500,"(opcional)"),og()(),Cl(501,"p"),qx(502,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Cl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),qx(507," separator"),Hl(508,"br"),og()()(),Cl(509,"td",19)(510,"code",26),qx(511,"boolean"),og()(),Cl(512,"td",22)(513,"em")(514,"strong"),qx(515,"(opcional)"),og()(),Cl(516,"p"),qx(517,"Atribui uma linha separadora acima do item."),og()()(),Cl(518,"tr",15)(519,"td",16)(520,"div",17)(521,"span",18),qx(522," subItems"),Hl(523,"br"),og()()(),Cl(524,"td",19)(525,"code",37),qx(526,"Array<PoPopupAction>"),og()(),Cl(527,"td",22)(528,"em")(529,"strong"),qx(530,"(opcional)"),og()(),Cl(531,"p"),qx(532,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Cl(533,"p"),qx(534,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Cl(535,"blockquote")(536,"p"),qx(537,"As propriedades "),Cl(538,"code"),qx(539,"disabled"),og(),qx(540,", "),Cl(541,"code"),qx(542,"type"),og(),qx(543," e "),Cl(544,"code"),qx(545,"visible"),og(),qx(546," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Cl(547,"blockquote")(548,"p"),qx(549,"Quando "),Cl(550,"code"),qx(551,"url"),og(),qx(552," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Cl(553,"blockquote")(554,"p"),qx(555,"Em subn\xEDveis aninhados, o "),Cl(556,"code"),qx(557,"icon"),og(),qx(558," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Cl(559,"tr",15)(560,"td",16)(561,"div",17)(562,"span",18),qx(563," type"),Hl(564,"br"),og()()(),Cl(565,"td",19)(566,"code",23),qx(567,"string"),og()(),Cl(568,"td",22)(569,"em")(570,"strong"),qx(571,"(opcional)"),og()(),Cl(572,"p"),qx(573,"Define a cor do item."),og(),Cl(574,"p"),qx(575,"Valores v\xE1lidos:"),og(),Cl(576,"ul")(577,"li")(578,"code"),qx(579,"default"),og()(),Cl(580,"li")(581,"code"),qx(582,"danger"),og()()()()(),Cl(583,"tr",15)(584,"td",16)(585,"div",17)(586,"span",18),qx(587," url"),Hl(588,"br"),og()()(),Cl(589,"td",19)(590,"code",23),qx(591,"string"),og()(),Cl(592,"td",22)(593,"em")(594,"strong"),qx(595,"(opcional)"),og()(),Cl(596,"p"),qx(597,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Cl(598,"p"),qx(599,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Cl(600,"code"),qx(601,"url"),og(),qx(602," \xE9 informada em um agrupador, o clique "),Cl(603,"strong"),qx(604,"n\xE3o abrir\xE1 os subitens"),og(),qx(605,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Cl(606,"blockquote")(607,"p"),qx(608,"Quando informada, tem prioridade sobre a propriedade "),Cl(609,"code"),qx(610,"action"),og(),qx(611,"."),og()()()(),Cl(612,"tr",15)(613,"td",16)(614,"div",17)(615,"span",18),qx(616," visible"),Hl(617,"br"),og()()(),Cl(618,"td",19)(619,"code",26),qx(620,"boolean "),og(),Cl(621,"code",34),qx(622," Function"),og()(),Cl(623,"td",22)(624,"em")(625,"strong"),qx(626,"(opcional)"),og()(),Cl(627,"p"),qx(628,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Cl(629,"h4",33)(630,"code",5),qx(631,"PoListViewLiterals"),og()(),Cl(632,"div",2)(633,"p"),qx(634,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(635,"code"),qx(636,"po-list-view"),og(),qx(637,"."),og()(),Cl(638,"h4",11),qx(639,"Propriedades"),og(),Cl(640,"table",12)(641,"tr",13)(642,"th",14),qx(643,"Nome"),og(),Cl(644,"th",14),qx(645,"Tipo"),og(),Cl(646,"th",14),qx(647,"Descri\xE7\xE3o"),og()(),Cl(648,"tr",15)(649,"td",16)(650,"div",17)(651,"span",18),qx(652," hideDetails"),Hl(653,"br"),og()()(),Cl(654,"td",19)(655,"code",23),qx(656,"string"),og()(),Cl(657,"td",22)(658,"em")(659,"strong"),qx(660,"(opcional)"),og()(),Cl(661,"p"),qx(662,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),og()()(),Cl(663,"tr",15)(664,"td",16)(665,"div",17)(666,"span",18),qx(667," loadMoreData"),Hl(668,"br"),og()()(),Cl(669,"td",19)(670,"code",23),qx(671,"string"),og()(),Cl(672,"td",22)(673,"em")(674,"strong"),qx(675,"(opcional)"),og()(),Cl(676,"p"),qx(677,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),og()()(),Cl(678,"tr",15)(679,"td",16)(680,"div",17)(681,"span",18),qx(682," noData"),Hl(683,"br"),og()()(),Cl(684,"td",19)(685,"code",23),qx(686,"string"),og()(),Cl(687,"td",22)(688,"em")(689,"strong"),qx(690,"(opcional)"),og()(),Cl(691,"p"),qx(692,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),og()()(),Cl(693,"tr",15)(694,"td",16)(695,"div",17)(696,"span",18),qx(697," selectAll"),Hl(698,"br"),og()()(),Cl(699,"td",19)(700,"code",23),qx(701,"string"),og()(),Cl(702,"td",22)(703,"em")(704,"strong"),qx(705,"(opcional)"),og()(),Cl(706,"p"),qx(707,"R\xF3tulo do "),Cl(708,"code"),qx(709,"checkbox"),og(),qx(710," da op\xE7\xE3o de selecionar todos."),og()()(),Cl(711,"tr",15)(712,"td",16)(713,"div",17)(714,"span",18),qx(715," showDetails"),Hl(716,"br"),og()()(),Cl(717,"td",19)(718,"code",23),qx(719,"string"),og()(),Cl(720,"td",22)(721,"em")(722,"strong"),qx(723,"(opcional)"),og()(),Cl(724,"p"),qx(725,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var Fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-list-view-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),og()()()),l&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ve,Me,Te,ke],encapsulation:2})}return a})();var tt=[{path:"",component:Fe}],Ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(tt),bL]})}return a})();var Bt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,Ie]})}return a})();export{Bt as DocPoListViewModule};