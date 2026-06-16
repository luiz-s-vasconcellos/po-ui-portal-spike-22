import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,aK as Pe,aQ as dt,al as lx,J as wl,z as Ux,R as ng,a1 as ut,a$ as fO,ag as fP,aS as Vd,aT as Rd,N as Ul,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,am as pw,an as $0,aX as _x,ap as hw,aq as G0,as as $l,at as uo,au as fo,b8 as $i,aP as Da,cV as Xt,c3 as zo,a3 as D3,az as Qy,aA as Jy,aB as $x}from'./main-6SPFG3VI.js';var ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic"]],standalone:false,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-modal",1,0),Ux(2," We are TOTVS!!! "),ng(),wl(3,"po-button",2),ut("p-click",function(){Qy(d);let i=_x(1);return Jy(i.open())}),ng();}},dependencies:[Pe,dt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Modal Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-modal-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ce],encapsulation:2})}return a})();var ge=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close();},label:"Confirm"};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close();},label:"Cancel"};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open();}ngOnInit(){this.restore();}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize="medium",this.icon=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs"]],viewQuery:function(l,n){if(l&1&&$l(zo,7),l&2){let d;uo(d=fo())&&(n.poModal=d.first);}},standalone:false,decls:21,vars:28,consts:[["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionIcon","p-clean","","p-label","Primary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionIcon","p-clean","","p-label","Secondary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-modal",1),Ux(1),ng(),wl(2,"po-button",2),ut("p-click",function(){return n.openModal()}),ng(),Ul(3,"po-divider"),wl(4,"form",null,0)(6,"div",3)(7,"po-input",4),pw("ngModelChange",function(i){return Qy(d),$x(n.title,i)||(n.title=i),Jy(i)}),ng(),$0(),wl(8,"po-select",5),pw("ngModelChange",function(i){return Qy(d),$x(n.icon,i)||(n.icon=i),Jy(i)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(i){return Qy(d),$x(n.content,i)||(n.content=i),Jy(i)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(i){return Qy(d),$x(n.primaryActionLabel,i)||(n.primaryActionLabel=i),Jy(i)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(i){return Qy(d),$x(n.primaryActionIcon,i)||(n.primaryActionIcon=i),Jy(i)}),ng(),$0(),wl(12,"po-checkbox-group",9),pw("ngModelChange",function(i){return Qy(d),$x(n.primaryActionProperties,i)||(n.primaryActionProperties=i),Jy(i)}),ng(),$0(),wl(13,"po-input",10),pw("ngModelChange",function(i){return Qy(d),$x(n.secondaryActionLabel,i)||(n.secondaryActionLabel=i),Jy(i)}),ng(),$0(),wl(14,"po-input",11),pw("ngModelChange",function(i){return Qy(d),$x(n.secondaryActionIcon,i)||(n.secondaryActionIcon=i),Jy(i)}),ng(),$0(),wl(15,"po-checkbox-group",12),pw("ngModelChange",function(i){return Qy(d),$x(n.secondaryActionProperties,i)||(n.secondaryActionProperties=i),Jy(i)}),ng(),$0(),wl(16,"po-radio-group",13),pw("ngModelChange",function(i){return Qy(d),$x(n.size,i)||(n.size=i),Jy(i)}),ng(),$0(),wl(17,"po-checkbox-group",14),pw("ngModelChange",function(i){return Qy(d),$x(n.properties,i)||(n.properties=i),Jy(i)}),ng(),$0(),wl(18,"po-radio-group",15),pw("ngModelChange",function(i){return Qy(d),$x(n.componentsSize,i)||(n.componentsSize=i),Jy(i)}),ng(),$0(),ng(),wl(19,"div",3)(20,"po-button",16),ut("p-click",function(){return n.restore()}),ng()()();}if(l&2){let d=_x(5);YE("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-primary-action",n.primaryAction)("p-secondary-action",n.secondaryActionLabel?n.secondaryAction:null)("p-size",n.size)("p-title",n.title)("p-icon",n.icon),Pp(),cg(" ",n.content,`
`),Pp(),YE("p-disabled",d.form.invalid),Pp(5),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.icon),YE("p-options",n.iconOptions),G0(),Pp(),hw("ngModel",n.content),G0(),Pp(),hw("ngModel",n.primaryActionLabel),G0(),Pp(),hw("ngModel",n.primaryActionIcon),G0(),Pp(),hw("ngModel",n.primaryActionProperties),YE("p-options",n.primaryActionOptions),G0(),Pp(),hw("ngModel",n.secondaryActionLabel),G0(),Pp(),hw("ngModel",n.secondaryActionIcon),G0(),Pp(),hw("ngModel",n.secondaryActionProperties),YE("p-options",n.secondaryActionOptions),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizeOptions),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ga,ya,dt],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Modal Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-modal
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryActionLabel ? secondaryAction : null"
  [p-size]="size"
  [p-title]="title"
  [p-icon]="icon"
>
  { { content }}
</po-modal>

<po-button p-label="Open Modal" [p-disabled]="f.form.invalid" (p-click)="openModal()"> </po-button>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-3" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconOptions"
    ></po-select>

    <po-input class="po-md-12 po-lg-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-maxlength="200">
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="primaryActionLabel"
      [(ngModel)]="primaryActionLabel"
      p-clean
      p-label="Primary action label"
      p-maxlength="50"
    >
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="primaryActionIcon"
      [(ngModel)]="primaryActionIcon"
      p-clean
      p-label="Primary action icon"
      p-maxlength="50"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="primaryActionProperties"
      [(ngModel)]="primaryActionProperties"
      p-columns="3"
      p-label="Primary Action Properties"
      [p-options]="primaryActionOptions"
    >
    </po-checkbox-group>

    <po-input
      class="po-md-6 po-lg-3"
      name="secondaryActionLabel"
      [(ngModel)]="secondaryActionLabel"
      p-clean
      p-label="Secondary action label"
      p-maxlength="50"
    >
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="secondaryActionIcon"
      [(ngModel)]="secondaryActionIcon"
      p-clean
      p-label="Secondary action icon"
      p-maxlength="50"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="secondaryActionProperties"
      [(ngModel)]="secondaryActionProperties"
      p-columns="3"
      p-label="Secondary Action Properties"
      [p-options]="secondaryActionOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="Size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-labs',
  templateUrl: './sample-po-modal-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  componentsSize: string;
  content;
  size;
  title;
  icon: string;

  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirm'
  };

  primaryActionLabel: string;
  primaryActionIcon: string;
  primaryActionProperties: Array<string>;
  primaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  secondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  secondaryActionLabel: string;
  secondaryActionIcon: string;
  secondaryActionProperties: Array<string>;
  secondaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'click-out', label: 'Click Out' },
    { value: 'hide-close', label: 'Hide Close' }
  ];

  properties: Array<string>;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
    { label: 'Automatic', value: 'auto' }
  ];

  openModal() {
    this.primaryAction.disabled = this.primaryActionProperties.includes('disabled');
    this.primaryAction.label = this.primaryActionLabel;
    this.primaryAction.icon = this.primaryActionIcon;
    this.primaryAction.loading = this.primaryActionProperties.includes('loading');
    this.primaryAction.danger = this.primaryActionProperties.includes('danger');

    this.secondaryAction.disabled = this.secondaryActionProperties.includes('disabled');
    this.secondaryAction.label = this.secondaryActionLabel;
    this.secondaryAction.icon = this.secondaryActionIcon;
    this.secondaryAction.loading = this.secondaryActionProperties.includes('loading');
    this.secondaryAction.danger = this.secondaryActionProperties.includes('danger');

    this.poModal.open();
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.size = undefined;
    this.content = undefined;
    this.title = 'PO Modal';
    this.properties = [];
    this.primaryActionLabel = undefined;
    this.primaryActionIcon = undefined;
    this.primaryActionProperties = [];
    this.secondaryActionLabel = undefined;
    this.secondaryActionIcon = undefined;
    this.secondaryActionProperties = [];
    this.componentsSize = 'medium';
    this.icon = undefined;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-modal-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return a})();var Te=["optionsForm"],Ee=(()=>{class a{poNotification=f(Bp);form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal();},label:"Close",danger:true};confirm={action:()=>{this.proccessOrder();},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];closeModal(){this.form.reset(),this.poModal.close();}confirmFruits(){this.proccessOrder();}restore(){this.form.reset();}openQuestionnaire(){this.poModal.open();}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=true,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=false,this.closeModal();},700));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(l,n){if(l&1&&$l(Te,7)(zo,7),l&2){let d;uo(d=fo())&&(n.form=d.first),uo(d=fo())&&(n.poModal=d.first);}},standalone:false,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),pw("ngModelChange",function(i){return Qy(d),$x(n.fruits,i)||(n.fruits=i),Jy(i)}),ng(),$0(),ng(),wl(5,"div",2)(6,"po-combo",4),pw("ngModelChange",function(i){return Qy(d),$x(n.accompaniment,i)||(n.accompaniment=i),Jy(i)}),ng(),$0(),ng(),wl(7,"div",2)(8,"po-textarea",5),pw("ngModelChange",function(i){return Qy(d),$x(n.orderDetail,i)||(n.orderDetail=i),Jy(i)}),ng(),$0(),ng()(),wl(9,"po-modal-footer",6)(10,"po-button",7),ut("p-click",function(){return n.closeModal()}),ng(),wl(11,"po-button",8),ut("p-click",function(){return n.restore()}),ng(),wl(12,"po-button",9),ut("p-click",function(){return n.confirmFruits()}),ng()()(),wl(13,"po-button",10),ut("p-click",function(){return n.openQuestionnaire()}),ng();}l&2&&(YE("p-primary-action",n.confirm)("p-secondary-action",n.close),Pp(4),hw("ngModel",n.fruits),YE("p-options",n.fruitsOptions),G0(),Pp(2),hw("ngModel",n.accompaniment),YE("p-options",n.accompanimentOptions),G0(),Pp(2),hw("ngModel",n.orderDetail),G0(),Pp(),YE("p-disabled-align",false));},dependencies:[aY,iY,oY,ck,ok,Pe,ia,$i,Da,dt,Xt],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Modal - Fruits Salad"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
  <form #optionsForm="ngForm">
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="checkboxGroup"
        [(ngModel)]="fruits"
        p-label="Fruits:"
        p-required
        [p-options]="fruitsOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-combo
        class="po-md-12"
        name="accompaniment"
        [(ngModel)]="accompaniment"
        p-label="Accompaniment:"
        p-required
        [p-options]="accompanimentOptions"
      >
      </po-combo>
    </div>

    <div class="po-row">
      <po-textarea class="po-md-12" name="orderDetail" [(ngModel)]="orderDetail" p-label="Details:" p-rows="8">
      </po-textarea>
    </div>
  </form>

  <po-modal-footer [p-disabled-align]="false">
    <po-button p-danger="true" p-label="Close" (p-click)="closeModal()"> </po-button>
    <po-button p-label="Clear" (p-click)="restore()"> </po-button>
    <po-button p-kind="primary" p-label="Confirm" (p-click)="confirmFruits()"> </po-button>
  </po-modal-footer>
</po-modal>

<po-button p-label="Buy fruits salad" (p-click)="openQuestionnaire()"> </po-button>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoCheckboxGroupOption, PoComboOption } from '@po-ui/ng-components';

import { PoModalAction } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-fruits-salad',
  templateUrl: './sample-po-modal-fruits-salad.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalFruitsSaladComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly accompanimentOptions: Array<PoComboOption> = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'hazeinut', label: 'Hazelnut' },
    { value: 'milk', label: 'Milk' }
  ];

  public readonly fruitsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'orange', label: 'Orange' },
    { value: 'apple', label: 'Apple' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'graple', label: 'Grape' },
    { value: 'strawberry', label: 'Strawberry' }
  ];

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  confirmFruits() {
    this.proccessOrder();
  }

  restore() {
    this.form.reset();
  }

  openQuestionnaire() {
    this.poModal.open();
  }

  private proccessOrder() {
    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.poNotification.warning(orderInvalidMessage);
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.poNotification.success(\`Your order confirmed: \${this.fruits}, with accompaniment: \${this.accompaniment}.\`);
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-modal-fruits-salad"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Oe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return a})();var fe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-doc"]],standalone:false,decls:606,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoModalModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-modal"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoModalComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-modal"),ng(),Ux(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),ng(),wl(18,"p"),Ux(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),ng(),wl(20,"p"),Ux(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),wl(22,"code"),Ux(23,"po-chart"),ng(),Ux(24,`,
`),wl(25,"code"),Ux(26,"po-table"),ng(),Ux(27," e os demais componentes do PO."),ng(),wl(28,"p"),Ux(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),wl(30,"em"),Ux(31,"danger"),ng(),Ux(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),wl(33,"a",6)(34,"code"),Ux(35,"PoModalFooter"),ng()(),Ux(36,"."),ng(),wl(37,"blockquote")(38,"p"),Ux(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),wl(40,"em"),Ux(41,"ESC"),ng(),Ux(42,", quando a propriedade "),wl(43,"code"),Ux(44,"p-hide-close"),ng(),Ux(45," n\xE3o estiver habilitada."),ng()(),wl(46,"h4"),Ux(47,"Tokens customiz\xE1veis"),ng(),wl(48,"p"),Ux(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(50,"blockquote")(51,"p"),Ux(52,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(53,"a",7),Ux(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(55,"."),ng()(),wl(56,"table")(57,"thead")(58,"tr")(59,"th"),Ux(60,"Propriedade"),ng(),wl(61,"th"),Ux(62,"Descri\xE7\xE3o"),ng(),wl(63,"th"),Ux(64,"Valor Padr\xE3o"),ng()()(),wl(65,"tbody")(66,"tr")(67,"td")(68,"strong"),Ux(69,"Default Values"),ng()(),Ul(70,"td")(71,"td"),ng(),wl(72,"tr")(73,"td")(74,"code"),Ux(75,"--border-radius"),ng(),Ux(76," \xA0"),ng(),wl(77,"td"),Ux(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(79,"td")(80,"code"),Ux(81,"var(--border-radius-md)"),ng()()(),wl(82,"tr")(83,"td")(84,"code"),Ux(85,"--border-width"),ng(),Ux(86," \xA0"),ng(),wl(87,"td"),Ux(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--border-width-sm)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--border-color"),ng(),Ux(96," \xA0"),ng(),wl(97,"td"),Ux(98,"Cor da borda"),ng(),wl(99,"td")(100,"code"),Ux(101,"var(--color-neutral-light-20)"),ng()()(),wl(102,"tr")(103,"td")(104,"code"),Ux(105,"--background"),ng(),Ux(106," \xA0"),ng(),wl(107,"td"),Ux(108,"Cor de background"),ng(),wl(109,"td")(110,"code"),Ux(111,"var(--color-neutral-light-00)"),ng()()(),wl(112,"tr")(113,"td")(114,"code"),Ux(115,"--shadow"),ng(),Ux(116," \xA0"),ng(),wl(117,"td"),Ux(118,"Cont\xE9m o valor da sombra do elemento"),ng(),wl(119,"td")(120,"code"),Ux(121,"var(--shadow-md)"),ng()()(),wl(122,"tr")(123,"td")(124,"code"),Ux(125,"--color-overlay"),ng(),Ux(126," \xA0"),ng(),wl(127,"td"),Ux(128,"Cor da camada visual tempor\xE1ria"),ng(),wl(129,"td")(130,"code"),Ux(131,"var(--color-neutral-dark-80)"),ng()()(),wl(132,"tr")(133,"td")(134,"code"),Ux(135,"--opacity-overlay"),ng(),Ux(136," \xA0"),ng(),wl(137,"td"),Ux(138,"Opacidade da camada visual tempor\xE1ria \xA0"),ng(),wl(139,"td")(140,"code"),Ux(141,"0.7"),ng()()(),wl(142,"tr")(143,"td")(144,"code"),Ux(145,"--color-divider"),ng(),Ux(146," \xA0"),ng(),wl(147,"td"),Ux(148,"Cor das divis\xF5es do modal"),ng(),wl(149,"td")(150,"code"),Ux(151,"var(--color-neutral-light-20)"),ng()()(),wl(152,"tr")(153,"td")(154,"code"),Ux(155,"--padding-header"),ng(),Ux(156," \xA0"),ng(),wl(157,"td"),Ux(158,"Padding do header do modal"),ng(),wl(159,"td")(160,"code"),Ux(161,"var(--spacing-sm) var(--spacing-md)"),ng()()(),wl(162,"tr")(163,"td")(164,"code"),Ux(165,"--padding-body"),ng(),Ux(166," \xA0"),ng(),wl(167,"td"),Ux(168,"Padding do corpo do modal"),ng(),wl(169,"td")(170,"code"),Ux(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) "),ng()()()()()(),wl(172,"div",8)(173,"h4",9),Ux(174,"Seletor"),ng(),wl(175,"pre",10),Ux(176,`<po-modal
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-hide-close="boolean"
    p-icon="string | TemplateRef<void>"
    p-primary-action="PoModalAction"
    p-secondary-action="PoModalAction"
    p-size="string"
    p-title="string" >
</po-modal>
`),ng()(),wl(177,"h4",11),Ux(178,"Propriedades"),ng(),wl(179,"table",12)(180,"tr",13)(181,"th",14),Ux(182,"Nome"),ng(),wl(183,"th",14),Ux(184,"Tipo"),ng(),wl(185,"th",14),Ux(186,"Padr\xE3o"),ng(),wl(187,"th",14),Ux(188,"Descri\xE7\xE3o"),ng()(),wl(189,"tr",15)(190,"td",16)(191,"div",17)(192,"span",18),Ux(193,"p-click-out"),Ul(194,"br"),ng()()(),wl(195,"td",19)(196,"code",20),Ux(197,"boolean"),ng()(),wl(198,"td",21),Ux(199,"-"),ng(),wl(200,"td",22)(201,"em")(202,"strong"),Ux(203,"(opcional)"),ng()(),wl(204,"p"),Ux(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),wl(206,"code"),Ux(207,"true"),ng(),Ux(208," para ativar o fechamento ao clicar fora da modal."),ng()()(),wl(209,"tr",15)(210,"td",16)(211,"div",23)(212,"span",24),Ux(213," (p-close)"),Ul(214,"br"),ng()()(),wl(215,"td",19)(216,"code",25),Ux(217,"EventEmitter"),ng()(),wl(218,"td",21),Ux(219,"-"),ng(),wl(220,"td",22)(221,"p"),Ux(222,"Evento disparado ao fechar o modal."),ng()()(),wl(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),Ux(227," p-components-size"),Ul(228,"br"),ng()()(),wl(229,"td",19)(230,"code",26),Ux(231,"string"),ng()(),wl(232,"td",21)(233,"p")(234,"code"),Ux(235,"medium"),ng()()(),wl(236,"td",22)(237,"em")(238,"strong"),Ux(239,"(opcional)"),ng()(),wl(240,"p"),Ux(241,"Define o tamanho dos componentes de formul\xE1rio no modal:"),ng(),wl(242,"ul")(243,"li")(244,"code"),Ux(245,"small"),ng(),Ux(246,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(247,"li")(248,"code"),Ux(249,"medium"),ng(),Ux(250,": aplica a medida medium de cada componente."),ng()(),wl(251,"blockquote")(252,"p"),Ux(253,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(254,"code"),Ux(255,"medium"),ng(),Ux(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(257,"a",27),Ux(258,"po-theme"),ng(),Ux(259,"."),ng()()()(),wl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),Ux(264," p-hide-close"),Ul(265,"br"),ng()()(),wl(266,"td",19)(267,"code",20),Ux(268,"boolean"),ng()(),wl(269,"td",21)(270,"p")(271,"code"),Ux(272,"false"),ng()()(),wl(273,"td",22)(274,"em")(275,"strong"),Ux(276,"(opcional)"),ng()(),wl(277,"p"),Ux(278,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),ng(),wl(279,"blockquote")(280,"p"),Ux(281,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),wl(282,"em"),Ux(283,"ESC"),ng(),Ux(284,"."),ng()()()(),wl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),Ux(289," p-icon"),Ul(290,"br"),ng()()(),wl(291,"td",19)(292,"code",26),Ux(293,"string "),ng(),wl(294,"code",28),Ux(295," TemplateRef<void>"),ng()(),wl(296,"td",21),Ux(297,"-"),ng(),wl(298,"td",22)(299,"em")(300,"strong"),Ux(301,"(opcional)"),ng()(),wl(302,"p"),Ux(303,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),ng(),wl(304,"p"),Ux(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(306,"a",29),Ux(307,"Biblioteca de \xEDcones"),ng(),Ux(308,". conforme exemplo abaixo:"),ng(),wl(309,"pre")(310,"code"),Ux(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),ng()(),wl(312,"p"),Ux(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(314,"em"),Ux(315,"Font Awesome"),ng(),Ux(316,", da seguinte forma:"),ng(),wl(317,"pre")(318,"code"),Ux(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),ng()(),wl(320,"p"),Ux(321,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(322,"code"),Ux(323,"TemplateRef"),ng(),Ux(324,", conforme exemplo abaixo:"),ng(),wl(325,"pre")(326,"code"),Ux(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()()()(),wl(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),Ux(332," p-primary-action"),Ul(333,"br"),ng()()(),wl(334,"td",19)(335,"code",30),Ux(336,"PoModalAction"),ng()(),wl(337,"td",21),Ux(338,"-"),ng(),wl(339,"td",22)(340,"em")(341,"strong"),Ux(342,"(opcional)"),ng()(),wl(343,"p"),Ux(344,"Deve ser definido um objeto que implementa a interface "),wl(345,"code"),Ux(346,"PoModalAction"),ng(),Ux(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),ng()()(),wl(348,"tr",15)(349,"td",16)(350,"div",17)(351,"span",18),Ux(352," p-secondary-action"),Ul(353,"br"),ng()()(),wl(354,"td",19)(355,"code",30),Ux(356,"PoModalAction"),ng()(),wl(357,"td",21),Ux(358,"-"),ng(),wl(359,"td",22)(360,"em")(361,"strong"),Ux(362,"(opcional)"),ng()(),wl(363,"p"),Ux(364,"Deve ser definido um objeto que implementa a interface "),wl(365,"code"),Ux(366,"PoModalAction"),ng(),Ux(367," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),ng()()(),wl(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),Ux(372," p-size"),Ul(373,"br"),ng()()(),wl(374,"td",19)(375,"code",26),Ux(376,"string"),ng()(),wl(377,"td",21),Ux(378,"-"),ng(),wl(379,"td",22)(380,"p"),Ux(381,"Define o tamanho da modal."),ng(),wl(382,"p"),Ux(383,"Valores v\xE1lidos:"),ng(),wl(384,"ul")(385,"li")(386,"code"),Ux(387,"sm"),ng(),Ux(388," (pequeno)"),ng(),wl(389,"li")(390,"code"),Ux(391,"md"),ng(),Ux(392," (m\xE9dio)"),ng(),wl(393,"li")(394,"code"),Ux(395,"lg"),ng(),Ux(396," (grande)"),ng(),wl(397,"li")(398,"code"),Ux(399,"xl"),ng(),Ux(400," (extra grande)"),ng(),wl(401,"li")(402,"code"),Ux(403,"auto"),ng(),Ux(404," (autom\xE1tico)"),ng()(),wl(405,"blockquote")(406,"p"),Ux(407,"Quando informado "),wl(408,"code"),Ux(409,"auto"),ng(),Ux(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),wl(411,"code"),Ux(412,"md"),ng(),Ux(413,"."),ng()()()(),wl(414,"tr",15)(415,"td",16)(416,"div",17)(417,"span",18),Ux(418," p-title"),Ul(419,"br"),ng()()(),wl(420,"td",19)(421,"code",26),Ux(422,"string"),ng()(),wl(423,"td",21),Ux(424,"-"),ng(),wl(425,"td",22)(426,"p"),Ux(427,"T\xEDtulo da modal."),ng()()()(),wl(428,"h3",11),Ux(429,"M\xE9todos"),ng(),wl(430,"table",31)(431,"tr",15)(432,"th",32)(433,"div",17)(434,"h4")(435,"span",18),Ux(436," close "),ng()()()()(),wl(437,"tr",22)(438,"td",22)(439,"p"),Ux(440,"Fun\xE7\xE3o para fechar a modal."),ng()()()(),Ul(441,"br"),wl(442,"table",31)(443,"tr",15)(444,"th",32)(445,"div",17)(446,"h4")(447,"span",18),Ux(448," open "),ng()()()()(),wl(449,"tr",22)(450,"td",22)(451,"p"),Ux(452,"Fun\xE7\xE3o para abrir a modal."),ng()()()(),Ul(453,"br"),wl(454,"h3"),Ux(455,"Interfaces"),ng(),wl(456,"h4",33)(457,"code",5),Ux(458,"PoModalAction"),ng()(),wl(459,"div",2)(460,"p"),Ux(461,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),wl(462,"code"),Ux(463,"po-modal"),ng(),Ux(464,"."),ng()(),wl(465,"h4",11),Ux(466,"Propriedades"),ng(),wl(467,"table",12)(468,"tr",13)(469,"th",14),Ux(470,"Nome"),ng(),wl(471,"th",14),Ux(472,"Tipo"),ng(),wl(473,"th",14),Ux(474,"Descri\xE7\xE3o"),ng()(),wl(475,"tr",15)(476,"td",16)(477,"div",17)(478,"span",18),Ux(479," action"),Ul(480,"br"),ng()()(),wl(481,"td",19)(482,"code",34),Ux(483,"Function"),ng()(),wl(484,"td",22)(485,"p"),Ux(486,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),ng()()(),wl(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),Ux(491," danger"),Ul(492,"br"),ng()()(),wl(493,"td",19)(494,"code",20),Ux(495,"boolean"),ng()(),wl(496,"td",22)(497,"em")(498,"strong"),Ux(499,"(opcional)"),ng()(),wl(500,"p"),Ux(501,"Define a propriedade "),wl(502,"code"),Ux(503,"p-danger"),ng(),Ux(504," do bot\xE3o."),ng(),wl(505,"blockquote")(506,"p"),Ux(507,"Caso a propriedade esteja definida como "),wl(508,"code"),Ux(509,"true"),ng(),Ux(510," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),wl(511,"code"),Ux(512,"p-danger"),ng(),Ux(513," como "),wl(514,"code"),Ux(515,"true"),ng(),Ux(516,"."),ng()()()(),wl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),Ux(521," disabled"),Ul(522,"br"),ng()()(),wl(523,"td",19)(524,"code",20),Ux(525,"boolean"),ng()(),wl(526,"td",22)(527,"em")(528,"strong"),Ux(529,"(opcional)"),ng()(),wl(530,"p"),Ux(531,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),ng()()(),wl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),Ux(536," icon"),Ul(537,"br"),ng()()(),wl(538,"td",19)(539,"code",26),Ux(540,"string "),ng(),wl(541,"code",28),Ux(542," TemplateRef<void>"),ng()(),wl(543,"td",22)(544,"em")(545,"strong"),Ux(546,"(opcional)"),ng()(),wl(547,"p"),Ux(548,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),ng(),wl(549,"p"),Ux(550,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(551,"a",29),Ux(552,"Biblioteca de \xEDcones"),ng(),Ux(553,", conforme exemplo:"),ng(),wl(554,"pre")(555,"code"),Ux(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),ng()(),wl(557,"p"),Ux(558,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(559,"em"),Ux(560,"Font Awesome"),ng(),Ux(561,`, desde que a biblioteca
esteja carregada no projeto:`),ng(),wl(562,"pre")(563,"code"),Ux(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),ng()(),wl(565,"p"),Ux(566,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(567,"code"),Ux(568,"TemplateRef"),ng(),Ux(569,", conforme exemplo abaixo:"),ng(),wl(570,"pre")(571,"code"),Ux(572,`// Template HTML
<ng-template #customIcon>
  <span class="fa fa-user"></span>
</ng-template>

// Componente TypeScript
@ViewChild('customIcon', { static: true }) customIcon: TemplateRef<void>;

modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone customizado',
};

// Atribui\xE7\xE3o do TemplateRef \xE0 propriedade icon ap\xF3s a inicializa\xE7\xE3o da view
ngAfterViewInit() {
  this.modalAction.icon = this.customIcon;
}
`),ng()(),wl(573,"blockquote")(574,"p"),Ux(575,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(576,"code"),Ux(577,"font-size: inherit"),ng(),Ux(578," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(579,"tr",15)(580,"td",16)(581,"div",17)(582,"span",18),Ux(583," label"),Ul(584,"br"),ng()()(),wl(585,"td",19)(586,"code",26),Ux(587,"string"),ng()(),wl(588,"td",22)(589,"p"),Ux(590,"R\xF3tulo do bot\xE3o."),ng()()(),wl(591,"tr",15)(592,"td",16)(593,"div",17)(594,"span",18),Ux(595," loading"),Ul(596,"br"),ng()()(),wl(597,"td",19)(598,"code",20),Ux(599,"boolean"),ng()(),wl(600,"td",22)(601,"em")(602,"strong"),Ux(603,"(opcional)"),ng()(),wl(604,"p"),Ux(605,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-modal-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),ng()()()),l&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,be,he,Se,fe],encapsulation:2})}return a})();var ze=[{path:"",component:ye}],Ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(ze),vL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,Ce]})}return a})();export{yt as DocPoModalModule};