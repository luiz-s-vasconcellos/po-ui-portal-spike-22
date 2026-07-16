import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,aW as Yp,s,r as r$1,I,c9 as Yhe,Z as rNe,_ as pme,T as Tl,a2 as JE,M as sg,O as nw,bM as vN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,L as Gl,C as iN,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,aJ as qhe,di as dme,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,cn as r3,bI as Sa,b6 as Yo,$ as dNe,dj as BO,Y as we,av as Yl,aw as uo,ax as fo,a3 as lNe,a4 as wN,cH as lN,a5 as bN,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var Oe=()=>({name:"Registro 1",email:"register@po-ui.com"}),He=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Be=(a,C)=>[a,C];function je(a,C){if(a&1&&(Tl(0,"div",2),Gl(1,"po-info",3),sg()),a&2){let o=C.$implicit;Vp(),nw("p-value",o.email);}}var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic"]],standalone:false,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(Tl(0,"po-list-view",0),JE(1,je,2,1,"ng-template",1),sg()),l&2&&nw("p-items",vN(3,Be,gN(1,Oe),gN(2,He)));},dependencies:[Yhe,rNe,pme],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO List View Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-list-view
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-list-view-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ze,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,_e],encapsulation:2,changeDetection:1})}return a})();function We(a,C){if(a&1&&(Tl(0,"div",5),Gl(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),sg()),a&2){let o=C.$implicit;Vp(),nw("p-value",o.name),Vp(),nw("p-value",o.email),Vp(),nw("p-value",o.location),Vp(),nw("p-value",o.phone);}}function Re(a,C){if(a&1&&(Tl(0,"div",5),Gl(1,"po-info",26)(2,"po-info",27),sg()),a&2){let o=C.$implicit;Vp(),nw("p-value",o.company),Vp(),nw("p-value",o.zipCode);}}var De=(()=>{class a{poNotification=f(Yp);action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:true},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];ngOnInit(){this.restore();}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm();}addItem(){this.items.push(this.generateNewItem(this.items.length+1));}changeAction(o){this.titleAction=o;}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?s(r$1({},o),{disabled:!this.properties.includes("select")}):o);}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(o){this.customLiterals=void 0;}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm();}showMore(){this.addItem();}generateNewItem(o){return {name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null};}showAction(o){this.poNotification.success(`Action clicked: ${o}`);}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs"]],standalone:false,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=Sx();Tl(0,"po-list-view",2),ht("p-show-more",function(){return n.showMore()})("p-title-action",function(){return n.changeAction("p-title-action")}),JE(1,We,5,4,"ng-template",3)(2,Re,3,2,"ng-template",4),sg(),Gl(3,"po-divider"),Tl(4,"div",5)(5,"po-button",6),ht("p-click",function(){return n.addItem()}),sg()(),Gl(6,"po-divider"),Tl(7,"div",5),Gl(8,"po-info",7),sg(),Gl(9,"po-divider"),Tl(10,"form",null,0)(12,"div",5)(13,"po-select",8),ww("ngModelChange",function(p){return Ky(d),sN(n.propertyTitle,p)||(n.propertyTitle=p),Xy(p)}),sg(),r0(),Tl(14,"po-number",9),ww("ngModelChange",function(p){return Ky(d),sN(n.height,p)||(n.height=p),Xy(p)}),ht("p-change",function(){return n.changeLiterals()}),sg(),r0(),Tl(15,"po-input",10),ww("ngModelChange",function(p){return Ky(d),sN(n.propertyLinkValue,p)||(n.propertyLinkValue=p),Xy(p)}),sg(),r0(),Tl(16,"po-input",11),ww("ngModelChange",function(p){return Ky(d),sN(n.literals,p)||(n.literals=p),Xy(p)}),ht("p-change",function(){return n.changeLiterals()}),sg(),r0(),Tl(17,"po-radio-group",12),ww("ngModelChange",function(p){return Ky(d),sN(n.componentsSize,p)||(n.componentsSize=p),Xy(p)}),sg(),r0(),sg(),Tl(18,"div",5)(19,"po-checkbox-group",13),ww("ngModelChange",function(p){return Ky(d),sN(n.properties,p)||(n.properties=p),Xy(p)}),ht("p-change",function(){return n.changeActionOptions()}),sg(),r0(),sg()(),Gl(20,"po-divider"),Tl(21,"form",null,1)(23,"div",5)(24,"po-input",14),ww("ngModelChange",function(p){return Ky(d),sN(n.action.action,p)||(n.action.action=p),Xy(p)}),sg(),r0(),Tl(25,"po-input",15),ww("ngModelChange",function(p){return Ky(d),sN(n.action.label,p)||(n.action.label=p),Xy(p)}),sg(),r0(),Tl(26,"po-input",16),ww("ngModelChange",function(p){return Ky(d),sN(n.action.url,p)||(n.action.url=p),Xy(p)}),sg(),r0(),Tl(27,"po-select",17),ww("ngModelChange",function(p){return Ky(d),sN(n.action.type,p)||(n.action.type=p),Xy(p)}),sg(),r0(),Tl(28,"po-select",18),ww("ngModelChange",function(p){return Ky(d),sN(n.action.icon,p)||(n.action.icon=p),Xy(p)}),sg(),r0(),Tl(29,"po-checkbox-group",19),ww("ngModelChange",function(p){return Ky(d),sN(n.action,p)||(n.action=p),Xy(p)}),sg(),r0(),sg(),Tl(30,"div",5)(31,"po-button",20),ht("p-click",function(){return n.addAction(n.action)}),sg()()(),Gl(32,"po-divider"),Tl(33,"div",5)(34,"po-button",21),ht("p-click",function(){return Ky(d),Fx(22).reset(),Xy(n.restore())}),sg()();}if(l&2){let d=Fx(22);nw("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),Vp(8),nw("p-value",n.titleAction),Vp(5),Ew("ngModel",n.propertyTitle),nw("p-options",n.propertyTitleOptions),o0(),Vp(),Ew("ngModel",n.height),o0(),Vp(),Ew("ngModel",n.propertyLinkValue),o0(),Vp(),Ew("ngModel",n.literals),o0(),Vp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),o0(),Vp(2),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),o0(),Vp(5),Ew("ngModel",n.action.action),o0(),Vp(),Ew("ngModel",n.action.label),o0(),Vp(),Ew("ngModel",n.action.url),o0(),Vp(),Ew("ngModel",n.action.type),nw("p-options",n.typeOptions),o0(),Vp(),Ew("ngModel",n.action.icon),nw("p-options",n.iconOptions),o0(),Vp(),Ew("ngModel",n.action),nw("p-options",n.actionOptions),o0(),Vp(2),nw("p-disabled",d.invalid);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Hhe,Dde,qhe,Yhe,rNe,pme,dme],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO List View Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-list-view
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-list-view-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ue,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,De],encapsulation:2,changeDetection:1})}return a})();var J=(()=>{class a{getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var $e=["detailsModal"];function Qe(a,C){if(a&1&&(Tl(0,"div",6),Gl(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),wN(4,"uppercase"),sg()),a&2){let o=C.$implicit;Vp(),nw("p-value",o.idCard),Vp(),nw("p-value",o.jobDescription),Vp(),nw("p-value",lN(bN(4,4,o.hireStatus)));}}function Ye(a,C){if(a&1&&(Tl(0,"div",6),Gl(1,"po-info",17)(2,"po-info",18),sg()),a&2){let o=C.$implicit;Vp(),nw("p-value",o.age),Vp(),nw("p-value",o.city);}}var Me=(()=>{class a{poNotification=f(Yp);hiringProcessesService=f(J);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=false;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses];}formatTitle(o){return `${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open();}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!");}disableHireButton(){return !this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!");}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)));}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`;}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case "progress":o.call(this,l);break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=false;}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&Yl($e,7),l&2){let d;uo(d=fo())&&(n.detailsModalElement=d.first);}},standalone:false,features:[we([J])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){l&1&&(Tl(0,"po-page-list",1)(1,"po-list-view",2),ht("p-title-action",function(c){return n.showDetailModal(c)}),JE(2,Qe,5,6,"ng-template",3)(3,Ye,3,2,"ng-template",4),sg(),Tl(4,"po-modal",5,0)(6,"div",6)(7,"div",7),Gl(8,"po-avatar",8),sg(),Tl(9,"div",9)(10,"div",10),Gl(11,"po-tag",11),sg(),Tl(12,"div",10),Gl(13,"po-info",12),sg(),Tl(14,"div",10),Gl(15,"po-info",13),sg()()()()()),l&2&&(nw("p-actions",n.pageActions)("p-filter",n.filterSettings),Vp(),nw("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),Vp(),nw("p-title",n.formatTitle),Vp(),nw("p-show-detail",n.showDetail),Vp(),nw("p-title",n.titleDetailsModal),Vp(7),nw("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),Vp(2),nw("p-value",n.selectedActionItem.email),Vp(2),nw("p-value",n.selectedActionItem.telephone));},dependencies:[r3,Sa,Yhe,rNe,pme,dme,Yo,dNe,BO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO List View - Hiring Processes"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-list-view-hiring-processes"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ke,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Me],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-doc"]],standalone:false,decls:707,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(l,n){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-list-view"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoListViewComponent"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),Tl(18,"em"),iN(19,"templates"),sg(),Tl(20,"strong")(21,"a",6),iN(22,"p-list-view-content-template"),sg()(),iN(23,` e
`),Tl(24,"strong")(25,"a",7),iN(26,"p-list-view-detail-template"),sg()(),iN(27,"."),sg(),Tl(28,"p"),iN(29,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),Tl(30,"strong")(31,"a",7),iN(32,"p-list-view-detail-template"),sg()(),iN(33,". "),sg()(),Tl(34,"div",8)(35,"h4",9),iN(36,"Seletor"),sg(),Tl(37,"pre",10),iN(38,`<po-list-view
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
`),sg()(),Tl(39,"h4",11),iN(40,"Propriedades"),sg(),Tl(41,"table",12)(42,"tr",13)(43,"th",14),iN(44,"Nome"),sg(),Tl(45,"th",14),iN(46,"Tipo"),sg(),Tl(47,"th",14),iN(48,"Padr\xE3o"),sg(),Tl(49,"th",14),iN(50,"Descri\xE7\xE3o"),sg()(),Tl(51,"tr",15)(52,"td",16)(53,"div",17)(54,"span",18),iN(55," p-actions"),Gl(56,"br"),sg()()(),Tl(57,"td",19)(58,"code",20),iN(59,"PoListViewAction[]"),sg()(),Tl(60,"td",21),iN(61,"-"),sg(),Tl(62,"td",22)(63,"em")(64,"strong"),iN(65,"(opcional)"),sg()(),Tl(66,"p"),iN(67,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),sg()()(),Tl(68,"tr",15)(69,"td",16)(70,"div",17)(71,"span",18),iN(72," p-components-size"),Gl(73,"br"),sg()()(),Tl(74,"td",19)(75,"code",23),iN(76,"string"),sg()(),Tl(77,"td",21)(78,"p")(79,"code"),iN(80,"medium"),sg()()(),Tl(81,"td",22)(82,"em")(83,"strong"),iN(84,"(opcional)"),sg()(),Tl(85,"p"),iN(86,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(87,"ul")(88,"li")(89,"code"),iN(90,"small"),sg(),iN(91,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(92,"li")(93,"code"),iN(94,"medium"),sg(),iN(95,": aplica a medida medium de cada componente."),sg()(),Tl(96,"blockquote")(97,"p"),iN(98,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(99,"code"),iN(100,"medium"),sg(),iN(101,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(102,"a",24),iN(103,"po-theme"),sg(),iN(104,"."),sg()()()(),Tl(105,"tr",15)(106,"td",16)(107,"div",17)(108,"span",18),iN(109," p-height"),Gl(110,"br"),sg()()(),Tl(111,"td",19)(112,"code",25),iN(113,"number"),sg()(),Tl(114,"td",21),iN(115,"-"),sg(),Tl(116,"td",22)(117,"em")(118,"strong"),iN(119,"(opcional)"),sg()(),Tl(120,"p"),iN(121,"Define a altura do "),Tl(122,"code"),iN(123,"po-list-view"),sg(),iN(124," em "),Tl(125,"em"),iN(126,"pixels"),sg(),iN(127,"."),sg()()(),Tl(128,"tr",15)(129,"td",16)(130,"div",17)(131,"span",18),iN(132," p-hide-select-all"),Gl(133,"br"),sg()()(),Tl(134,"td",19)(135,"code",26),iN(136,"boolean"),sg()(),Tl(137,"td",21)(138,"p")(139,"code"),iN(140,"false"),sg()()(),Tl(141,"td",22)(142,"p"),iN(143,"Esconde o "),Tl(144,"em"),iN(145,"checkbox"),sg(),iN(146," para sele\xE7\xE3o de todos os itens."),sg()()(),Tl(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),iN(151," p-items"),Gl(152,"br"),sg()()(),Tl(153,"td",19)(154,"code",27),iN(155,"any[]"),sg()(),Tl(156,"td",21),iN(157,"-"),sg(),Tl(158,"td",22)(159,"p"),iN(160,"Lista de itens que ser\xE3o exibidos no componente."),sg()()(),Tl(161,"tr",15)(162,"td",16)(163,"div",17)(164,"span",18),iN(165," p-literals"),Gl(166,"br"),sg()()(),Tl(167,"td",19)(168,"code",28),iN(169,"PoListViewLiterals"),sg()(),Tl(170,"td",21),iN(171,"-"),sg(),Tl(172,"td",22)(173,"em")(174,"strong"),iN(175,"(opcional)"),sg()(),Tl(176,"p"),iN(177,"Objeto com as literais usadas no "),Tl(178,"code"),iN(179,"po-list-view"),sg(),iN(180,"."),sg(),Tl(181,"p"),iN(182,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(183,"pre")(184,"code"),iN(185,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),sg()(),Tl(186,"p"),iN(187,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(188,"pre")(189,"code"),iN(190,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),sg()(),Tl(191,"p"),iN(192,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(193,"pre")(194,"code"),iN(195,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),sg()(),Tl(196,"blockquote")(197,"p"),iN(198,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(199,"a",29)(200,"code"),iN(201,"PoI18nService"),sg()(),iN(202," ou do browser."),sg()()()(),Tl(203,"tr",15)(204,"td",16)(205,"div",17)(206,"span",18),iN(207," p-property-link"),Gl(208,"br"),sg()()(),Tl(209,"td",19)(210,"code",23),iN(211,"string"),sg()(),Tl(212,"td",21),iN(213,"-"),sg(),Tl(214,"td",22)(215,"em")(216,"strong"),iN(217,"(opcional)"),sg()(),Tl(218,"p"),iN(219,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),sg()()(),Tl(220,"tr",15)(221,"td",16)(222,"div",17)(223,"span",18),iN(224," p-property-title"),Gl(225,"br"),sg()()(),Tl(226,"td",19)(227,"code",23),iN(228,"string"),sg()(),Tl(229,"td",21),iN(230,"-"),sg(),Tl(231,"td",22)(232,"em")(233,"strong"),iN(234,"(opcional)"),sg()(),Tl(235,"p"),iN(236,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),sg()()(),Tl(237,"tr",15)(238,"td",16)(239,"div",17)(240,"span",18),iN(241," p-select"),Gl(242,"br"),sg()()(),Tl(243,"td",19)(244,"code",26),iN(245,"boolean"),sg()(),Tl(246,"td",21)(247,"p")(248,"code"),iN(249,"false"),sg()()(),Tl(250,"td",22)(251,"em")(252,"strong"),iN(253,"(opcional)"),sg()(),Tl(254,"p"),iN(255,"Habilita um "),Tl(256,"em"),iN(257,"checkbox"),sg(),iN(258," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),Tl(259,"code"),iN(260,"$selected"),sg(),iN(261,` para identificar se o
item est\xE1 selecionado, por exemplo:`),sg(),Tl(262,"pre")(263,"code"),iN(264,`item.$selected

// ou

item['$selected']
`),sg()()()(),Tl(265,"tr",15)(266,"td",16)(267,"div",30)(268,"span",31),iN(269," (p-show-detail)"),Gl(270,"br"),sg()()(),Tl(271,"td",19)(272,"code",32),iN(273,"EventEmitter"),sg()(),Tl(274,"td",21),iN(275,"-"),sg(),Tl(276,"td",22)(277,"em")(278,"strong"),iN(279,"(opcional)"),sg()(),Tl(280,"p"),iN(281,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),sg(),Tl(282,"p"),iN(283,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),sg()()(),Tl(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),iN(288," (p-show-more)"),Gl(289,"br"),sg()()(),Tl(290,"td",19)(291,"code",32),iN(292,"EventEmitter"),sg()(),Tl(293,"td",21),iN(294,"-"),sg(),Tl(295,"td",22)(296,"em")(297,"strong"),iN(298,"(opcional)"),sg()(),Tl(299,"p"),iN(300,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),sg(),Tl(301,"blockquote")(302,"p"),iN(303,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),sg()()()(),Tl(304,"tr",15)(305,"td",16)(306,"div",17)(307,"span",18),iN(308," p-show-more-disabled"),Gl(309,"br"),sg()()(),Tl(310,"td",19)(311,"code",26),iN(312,"boolean"),sg()(),Tl(313,"td",21),iN(314,"-"),sg(),Tl(315,"td",22)(316,"em")(317,"strong"),iN(318,"(opcional)"),sg()(),Tl(319,"p"),iN(320,"Indica que o bot\xE3o "),Tl(321,"code"),iN(322,"Carregar Mais Resultados"),sg(),iN(323," ser\xE1 desabilitado."),sg()()(),Tl(324,"tr",15)(325,"td",16)(326,"div",30)(327,"span",31),iN(328," (p-title-action)"),Gl(329,"br"),sg()()(),Tl(330,"td",19)(331,"code",32),iN(332,"EventEmitter"),sg()(),Tl(333,"td",21),iN(334,"-"),sg(),Tl(335,"td",22)(336,"em")(337,"strong"),iN(338,"(opcional)"),sg()(),Tl(339,"p"),iN(340,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),sg(),Tl(341,"p"),iN(342,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),sg()()()(),Tl(343,"h3"),iN(344,"Interfaces"),sg(),Tl(345,"h4",33)(346,"code",5),iN(347,"PoListViewAction"),sg()(),Tl(348,"div",2)(349,"p"),iN(350,"Interface que define as a\xE7\xF5es do componente "),Tl(351,"code"),iN(352,"po-list-view"),sg(),iN(353,"."),sg(),Tl(354,"blockquote")(355,"p"),iN(356,"As propriedades "),Tl(357,"code"),iN(358,"subItems"),sg(),iN(359,", "),Tl(360,"code"),iN(361,"separator"),sg(),iN(362,", "),Tl(363,"code"),iN(364,"url"),sg(),iN(365," e "),Tl(366,"code"),iN(367,"selected"),sg(),iN(368,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),sg()()(),Tl(369,"h4",11),iN(370,"Propriedades"),sg(),Tl(371,"table",12)(372,"tr",13)(373,"th",14),iN(374,"Nome"),sg(),Tl(375,"th",14),iN(376,"Tipo"),sg(),Tl(377,"th",14),iN(378,"Descri\xE7\xE3o"),sg()(),Tl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),iN(383," action"),Gl(384,"br"),sg()()(),Tl(385,"td",19)(386,"code",34),iN(387,"Function"),sg()(),Tl(388,"td",22)(389,"em")(390,"strong"),iN(391,"(opcional)"),sg()(),Tl(392,"p"),iN(393,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(394,"p"),iN(395,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(396,"code"),iN(397,"subItems"),sg(),iN(398,"."),sg(),Tl(399,"blockquote")(400,"p"),iN(401,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(402,"em"),iN(403,"bind"),sg(),iN(404,`:
`),Tl(405,"code"),iN(406,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(407,"tr",15)(408,"td",16)(409,"div",17)(410,"span",18),iN(411," disabled"),Gl(412,"br"),sg()()(),Tl(413,"td",19)(414,"code",26),iN(415,"boolean "),sg(),Tl(416,"code",34),iN(417," Function"),sg()(),Tl(418,"td",22)(419,"em")(420,"strong"),iN(421,"(opcional)"),sg()(),Tl(422,"p"),iN(423,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(424,"tr",15)(425,"td",16)(426,"div",17)(427,"span",18),iN(428," icon"),Gl(429,"br"),sg()()(),Tl(430,"td",19)(431,"code",23),iN(432,"string "),sg(),Tl(433,"code",35),iN(434," TemplateRef<void>"),sg()(),Tl(435,"td",22)(436,"em")(437,"strong"),iN(438,"(opcional)"),sg()(),Tl(439,"p"),iN(440,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(441,"p"),iN(442,"Aceita \xEDcones da "),Tl(443,"a",36),iN(444,"Biblioteca de \xEDcones"),sg(),iN(445,`, fontes externas (ex: Font Awesome)
ou um `),Tl(446,"code"),iN(447,"TemplateRef"),sg(),iN(448," para \xEDcones customizados."),sg(),Tl(449,"pre")(450,"code"),iN(451,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(452,"tr",15)(453,"td",16)(454,"div",17)(455,"span",18),iN(456," label"),Gl(457,"br"),sg()()(),Tl(458,"td",19)(459,"code",23),iN(460,"string"),sg()(),Tl(461,"td",22)(462,"p"),iN(463,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(464,"p"),iN(465,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(466,"code"),iN(467,"subItems"),sg(),iN(468,"."),sg()()(),Tl(469,"tr",15)(470,"td",16)(471,"div",17)(472,"span",18),iN(473," selected"),Gl(474,"br"),sg()()(),Tl(475,"td",19)(476,"code",26),iN(477,"boolean"),sg()(),Tl(478,"td",22)(479,"em")(480,"strong"),iN(481,"(opcional)"),sg()(),Tl(482,"p"),iN(483,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(484,"tr",15)(485,"td",16)(486,"div",17)(487,"span",18),iN(488," separator"),Gl(489,"br"),sg()()(),Tl(490,"td",19)(491,"code",26),iN(492,"boolean"),sg()(),Tl(493,"td",22)(494,"em")(495,"strong"),iN(496,"(opcional)"),sg()(),Tl(497,"p"),iN(498,"Atribui uma linha separadora acima do item."),sg()()(),Tl(499,"tr",15)(500,"td",16)(501,"div",17)(502,"span",18),iN(503," subItems"),Gl(504,"br"),sg()()(),Tl(505,"td",19)(506,"code",37),iN(507,"Array<PoPopupAction>"),sg()(),Tl(508,"td",22)(509,"em")(510,"strong"),iN(511,"(opcional)"),sg()(),Tl(512,"p"),iN(513,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(514,"p"),iN(515,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(516,"blockquote")(517,"p"),iN(518,"As propriedades "),Tl(519,"code"),iN(520,"disabled"),sg(),iN(521,", "),Tl(522,"code"),iN(523,"type"),sg(),iN(524," e "),Tl(525,"code"),iN(526,"visible"),sg(),iN(527," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(528,"blockquote")(529,"p"),iN(530,"Quando "),Tl(531,"code"),iN(532,"url"),sg(),iN(533," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(534,"blockquote")(535,"p"),iN(536,"Em subn\xEDveis aninhados, o "),Tl(537,"code"),iN(538,"icon"),sg(),iN(539," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(540,"tr",15)(541,"td",16)(542,"div",17)(543,"span",18),iN(544," type"),Gl(545,"br"),sg()()(),Tl(546,"td",19)(547,"code",23),iN(548,"string"),sg()(),Tl(549,"td",22)(550,"em")(551,"strong"),iN(552,"(opcional)"),sg()(),Tl(553,"p"),iN(554,"Define a cor do item."),sg(),Tl(555,"p"),iN(556,"Valores v\xE1lidos:"),sg(),Tl(557,"ul")(558,"li")(559,"code"),iN(560,"default"),sg()(),Tl(561,"li")(562,"code"),iN(563,"danger"),sg()()()()(),Tl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),iN(568," url"),Gl(569,"br"),sg()()(),Tl(570,"td",19)(571,"code",23),iN(572,"string"),sg()(),Tl(573,"td",22)(574,"em")(575,"strong"),iN(576,"(opcional)"),sg()(),Tl(577,"p"),iN(578,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(579,"p"),iN(580,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(581,"code"),iN(582,"url"),sg(),iN(583," \xE9 informada em um agrupador, o clique "),Tl(584,"strong"),iN(585,"n\xE3o abrir\xE1 os subitens"),sg(),iN(586,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(587,"blockquote")(588,"p"),iN(589,"Quando informada, tem prioridade sobre a propriedade "),Tl(590,"code"),iN(591,"action"),sg(),iN(592,"."),sg()()()(),Tl(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),iN(597," visible"),Gl(598,"br"),sg()()(),Tl(599,"td",19)(600,"code",26),iN(601,"boolean "),sg(),Tl(602,"code",34),iN(603," Function"),sg()(),Tl(604,"td",22)(605,"em")(606,"strong"),iN(607,"(opcional)"),sg()(),Tl(608,"p"),iN(609,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Tl(610,"h4",33)(611,"code",5),iN(612,"PoListViewLiterals"),sg()(),Tl(613,"div",2)(614,"p"),iN(615,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(616,"code"),iN(617,"po-list-view"),sg(),iN(618,"."),sg()(),Tl(619,"h4",11),iN(620,"Propriedades"),sg(),Tl(621,"table",12)(622,"tr",13)(623,"th",14),iN(624,"Nome"),sg(),Tl(625,"th",14),iN(626,"Tipo"),sg(),Tl(627,"th",14),iN(628,"Descri\xE7\xE3o"),sg()(),Tl(629,"tr",15)(630,"td",16)(631,"div",17)(632,"span",18),iN(633," hideDetails"),Gl(634,"br"),sg()()(),Tl(635,"td",19)(636,"code",23),iN(637,"string"),sg()(),Tl(638,"td",22)(639,"em")(640,"strong"),iN(641,"(opcional)"),sg()(),Tl(642,"p"),iN(643,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),sg()()(),Tl(644,"tr",15)(645,"td",16)(646,"div",17)(647,"span",18),iN(648," loadMoreData"),Gl(649,"br"),sg()()(),Tl(650,"td",19)(651,"code",23),iN(652,"string"),sg()(),Tl(653,"td",22)(654,"em")(655,"strong"),iN(656,"(opcional)"),sg()(),Tl(657,"p"),iN(658,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),sg()()(),Tl(659,"tr",15)(660,"td",16)(661,"div",17)(662,"span",18),iN(663," noData"),Gl(664,"br"),sg()()(),Tl(665,"td",19)(666,"code",23),iN(667,"string"),sg()(),Tl(668,"td",22)(669,"em")(670,"strong"),iN(671,"(opcional)"),sg()(),Tl(672,"p"),iN(673,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),sg()()(),Tl(674,"tr",15)(675,"td",16)(676,"div",17)(677,"span",18),iN(678," selectAll"),Gl(679,"br"),sg()()(),Tl(680,"td",19)(681,"code",23),iN(682,"string"),sg()(),Tl(683,"td",22)(684,"em")(685,"strong"),iN(686,"(opcional)"),sg()(),Tl(687,"p"),iN(688,"R\xF3tulo do "),Tl(689,"code"),iN(690,"checkbox"),sg(),iN(691," da op\xE7\xE3o de selecionar todos."),sg()()(),Tl(692,"tr",15)(693,"td",16)(694,"div",17)(695,"span",18),iN(696," showDetails"),Gl(697,"br"),sg()()(),Tl(698,"td",19)(699,"code",23),iN(700,"string"),sg()(),Tl(701,"td",22)(702,"em")(703,"strong"),iN(704,"(opcional)"),sg()(),Tl(705,"p"),iN(706,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-list-view-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),sg()()()),l&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[lNe,Wme,jme,Ve,Ae,Te,ke],encapsulation:2,changeDetection:1})}return a})();var tt=[{path:"",component:Fe}],Ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[DL.forChild(tt),DL]})}return a})();var Bt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ie]})}return a})();export{Bt as DocPoListViewModule};