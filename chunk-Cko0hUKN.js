import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,b0 as Qt,b6 as Yo,aB as Ex,H as Sl,J as Jx,O as sg,a1 as ht,an as bO,aH as Ga,b8 as Gme,b9 as Qme,M as Wl,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,bC as _3,b5 as jhe,dp as pz,a3 as pNe,aD as Xy,aE as Qy,aT as tN}from'./main-QNYCBKHQ.js';var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic"]],standalone:false,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(l,o){if(l&1){let d=Ex();Sl(0,"po-modal",1,0),Jx(2," We are TOTVS!!! "),sg(),Sl(3,"po-button",2),ht("p-click",function(){Xy(d);let i=xx(1);return Qy(i.open())}),sg();}},dependencies:[Qt,Yo],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Modal Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,fe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close();},label:"Confirm"};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close();},label:"Cancel"};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open();}ngOnInit(){this.restore();}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize="medium",this.icon=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7),l&2){let d;lo(d=uo())&&(o.poModal=d.first);}},standalone:false,decls:21,vars:28,consts:[["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionIcon","p-clean","","p-label","Primary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionIcon","p-clean","","p-label","Secondary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let d=Ex();Sl(0,"po-modal",1),Jx(1),sg(),Sl(2,"po-button",2),ht("p-click",function(){return o.openModal()}),sg(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"div",3)(7,"po-input",4),Ew("ngModelChange",function(i){return Xy(d),tN(o.title,i)||(o.title=i),Qy(i)}),sg(),JA(),Sl(8,"po-select",5),Ew("ngModelChange",function(i){return Xy(d),tN(o.icon,i)||(o.icon=i),Qy(i)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(i){return Xy(d),tN(o.content,i)||(o.content=i),Qy(i)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(i){return Xy(d),tN(o.primaryActionLabel,i)||(o.primaryActionLabel=i),Qy(i)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(i){return Xy(d),tN(o.primaryActionIcon,i)||(o.primaryActionIcon=i),Qy(i)}),sg(),JA(),Sl(12,"po-checkbox-group",9),Ew("ngModelChange",function(i){return Xy(d),tN(o.primaryActionProperties,i)||(o.primaryActionProperties=i),Qy(i)}),sg(),JA(),Sl(13,"po-input",10),Ew("ngModelChange",function(i){return Xy(d),tN(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),Qy(i)}),sg(),JA(),Sl(14,"po-input",11),Ew("ngModelChange",function(i){return Xy(d),tN(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),Qy(i)}),sg(),JA(),Sl(15,"po-checkbox-group",12),Ew("ngModelChange",function(i){return Xy(d),tN(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),Qy(i)}),sg(),JA(),Sl(16,"po-radio-group",13),Ew("ngModelChange",function(i){return Xy(d),tN(o.size,i)||(o.size=i),Qy(i)}),sg(),JA(),Sl(17,"po-checkbox-group",14),Ew("ngModelChange",function(i){return Xy(d),tN(o.properties,i)||(o.properties=i),Qy(i)}),sg(),JA(),Sl(18,"po-radio-group",15),Ew("ngModelChange",function(i){return Xy(d),tN(o.componentsSize,i)||(o.componentsSize=i),Qy(i)}),sg(),JA(),sg(),Sl(19,"div",3)(20,"po-button",16),ht("p-click",function(){return o.restore()}),sg()()();}if(l&2){let d=xx(5);tw("p-click-out",o.properties.includes("click-out"))("p-components-size",o.componentsSize)("p-hide-close",o.properties.includes("hide-close"))("p-primary-action",o.primaryAction)("p-secondary-action",o.secondaryActionLabel?o.secondaryAction:null)("p-size",o.size)("p-title",o.title)("p-icon",o.icon),Vp(),fg(" ",o.content,`
`),Vp(),tw("p-disabled",d.form.invalid),Vp(5),Dw("ngModel",o.title),t0(),Vp(),Dw("ngModel",o.icon),tw("p-options",o.iconOptions),t0(),Vp(),Dw("ngModel",o.content),t0(),Vp(),Dw("ngModel",o.primaryActionLabel),t0(),Vp(),Dw("ngModel",o.primaryActionIcon),t0(),Vp(),Dw("ngModel",o.primaryActionProperties),tw("p-options",o.primaryActionOptions),t0(),Vp(),Dw("ngModel",o.secondaryActionLabel),t0(),Vp(),Dw("ngModel",o.secondaryActionIcon),t0(),Vp(),Dw("ngModel",o.secondaryActionProperties),tw("p-options",o.secondaryActionOptions),t0(),Vp(),Dw("ngModel",o.size),tw("p-options",o.sizeOptions),t0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),t0(),Vp(),Dw("ngModel",o.componentsSize),tw("p-options",o.componentsSizeOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,Ghe,Yo],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Modal Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-modal
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return a})();var Pe=["optionsForm"],ue=(()=>{class a{poNotification=f(Yp);form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal();},label:"Close",danger:true};confirm={action:()=>{this.proccessOrder();},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];closeModal(){this.form.reset(),this.poModal.close();}confirmFruits(){this.proccessOrder();}restore(){this.form.reset();}openQuestionnaire(){this.poModal.open();}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=true,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=false,this.closeModal();},700));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(l,o){if(l&1&&ql(Pe,7)(Yo,7),l&2){let d;lo(d=uo())&&(o.form=d.first),lo(d=uo())&&(o.poModal=d.first);}},standalone:false,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(l,o){if(l&1){let d=Ex();Sl(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),Ew("ngModelChange",function(i){return Xy(d),tN(o.fruits,i)||(o.fruits=i),Qy(i)}),sg(),JA(),sg(),Sl(5,"div",2)(6,"po-combo",4),Ew("ngModelChange",function(i){return Xy(d),tN(o.accompaniment,i)||(o.accompaniment=i),Qy(i)}),sg(),JA(),sg(),Sl(7,"div",2)(8,"po-textarea",5),Ew("ngModelChange",function(i){return Xy(d),tN(o.orderDetail,i)||(o.orderDetail=i),Qy(i)}),sg(),JA(),sg()(),Sl(9,"po-modal-footer",6)(10,"po-button",7),ht("p-click",function(){return o.closeModal()}),sg(),Sl(11,"po-button",8),ht("p-click",function(){return o.restore()}),sg(),Sl(12,"po-button",9),ht("p-click",function(){return o.confirmFruits()}),sg()()(),Sl(13,"po-button",10),ht("p-click",function(){return o.openQuestionnaire()}),sg();}l&2&&(tw("p-primary-action",o.confirm)("p-secondary-action",o.close),Vp(4),Dw("ngModel",o.fruits),tw("p-options",o.fruitsOptions),t0(),Vp(2),Dw("ngModel",o.accompaniment),tw("p-options",o.accompanimentOptions),t0(),Vp(2),Dw("ngModel",o.orderDetail),t0(),Vp(),tw("p-disabled-align",false));},dependencies:[J9,K9,X9,Dk,vk,Qt,x3,_3,jhe,Yo,pz],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Modal - Fruits Salad"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-fruits-salad"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-doc"]],standalone:false,decls:606,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoModalModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-modal"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoModalComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-modal"),sg(),Jx(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),sg(),Sl(18,"p"),Jx(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),sg(),Sl(20,"p"),Jx(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),Sl(22,"code"),Jx(23,"po-chart"),sg(),Jx(24,`,
`),Sl(25,"code"),Jx(26,"po-table"),sg(),Jx(27," e os demais componentes do PO."),sg(),Sl(28,"p"),Jx(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Sl(30,"em"),Jx(31,"danger"),sg(),Jx(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Sl(33,"a",6)(34,"code"),Jx(35,"PoModalFooter"),sg()(),Jx(36,"."),sg(),Sl(37,"blockquote")(38,"p"),Jx(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Sl(40,"em"),Jx(41,"ESC"),sg(),Jx(42,", quando a propriedade "),Sl(43,"code"),Jx(44,"p-hide-close"),sg(),Jx(45," n\xE3o estiver habilitada."),sg()(),Sl(46,"h4"),Jx(47,"Tokens customiz\xE1veis"),sg(),Sl(48,"p"),Jx(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(50,"blockquote")(51,"p"),Jx(52,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(53,"a",7),Jx(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(55,"."),sg()(),Sl(56,"table")(57,"thead")(58,"tr")(59,"th"),Jx(60,"Propriedade"),sg(),Sl(61,"th"),Jx(62,"Descri\xE7\xE3o"),sg(),Sl(63,"th"),Jx(64,"Valor Padr\xE3o"),sg()()(),Sl(65,"tbody")(66,"tr")(67,"td")(68,"strong"),Jx(69,"Default Values"),sg()(),Wl(70,"td")(71,"td"),sg(),Sl(72,"tr")(73,"td")(74,"code"),Jx(75,"--border-radius"),sg(),Jx(76," \xA0"),sg(),Sl(77,"td"),Jx(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(79,"td")(80,"code"),Jx(81,"var(--border-radius-md)"),sg()()(),Sl(82,"tr")(83,"td")(84,"code"),Jx(85,"--border-width"),sg(),Jx(86," \xA0"),sg(),Sl(87,"td"),Jx(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--border-width-sm)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--border-color"),sg(),Jx(96," \xA0"),sg(),Sl(97,"td"),Jx(98,"Cor da borda"),sg(),Sl(99,"td")(100,"code"),Jx(101,"var(--color-neutral-light-20)"),sg()()(),Sl(102,"tr")(103,"td")(104,"code"),Jx(105,"--background"),sg(),Jx(106," \xA0"),sg(),Sl(107,"td"),Jx(108,"Cor de background"),sg(),Sl(109,"td")(110,"code"),Jx(111,"var(--color-neutral-light-00)"),sg()()(),Sl(112,"tr")(113,"td")(114,"code"),Jx(115,"--shadow"),sg(),Jx(116," \xA0"),sg(),Sl(117,"td"),Jx(118,"Cont\xE9m o valor da sombra do elemento"),sg(),Sl(119,"td")(120,"code"),Jx(121,"var(--shadow-md)"),sg()()(),Sl(122,"tr")(123,"td")(124,"code"),Jx(125,"--color-overlay"),sg(),Jx(126," \xA0"),sg(),Sl(127,"td"),Jx(128,"Cor da camada visual tempor\xE1ria"),sg(),Sl(129,"td")(130,"code"),Jx(131,"var(--color-neutral-dark-80)"),sg()()(),Sl(132,"tr")(133,"td")(134,"code"),Jx(135,"--opacity-overlay"),sg(),Jx(136," \xA0"),sg(),Sl(137,"td"),Jx(138,"Opacidade da camada visual tempor\xE1ria \xA0"),sg(),Sl(139,"td")(140,"code"),Jx(141,"0.7"),sg()()(),Sl(142,"tr")(143,"td")(144,"code"),Jx(145,"--color-divider"),sg(),Jx(146," \xA0"),sg(),Sl(147,"td"),Jx(148,"Cor das divis\xF5es do modal"),sg(),Sl(149,"td")(150,"code"),Jx(151,"var(--color-neutral-light-20)"),sg()()(),Sl(152,"tr")(153,"td")(154,"code"),Jx(155,"--padding-header"),sg(),Jx(156," \xA0"),sg(),Sl(157,"td"),Jx(158,"Padding do header do modal"),sg(),Sl(159,"td")(160,"code"),Jx(161,"var(--spacing-sm) var(--spacing-md)"),sg()()(),Sl(162,"tr")(163,"td")(164,"code"),Jx(165,"--padding-body"),sg(),Jx(166," \xA0"),sg(),Sl(167,"td"),Jx(168,"Padding do corpo do modal"),sg(),Sl(169,"td")(170,"code"),Jx(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) "),sg()()()()()(),Sl(172,"div",8)(173,"h4",9),Jx(174,"Seletor"),sg(),Sl(175,"pre",10),Jx(176,`<po-modal
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
`),sg()(),Sl(177,"h4",11),Jx(178,"Propriedades"),sg(),Sl(179,"table",12)(180,"tr",13)(181,"th",14),Jx(182,"Nome"),sg(),Sl(183,"th",14),Jx(184,"Tipo"),sg(),Sl(185,"th",14),Jx(186,"Padr\xE3o"),sg(),Sl(187,"th",14),Jx(188,"Descri\xE7\xE3o"),sg()(),Sl(189,"tr",15)(190,"td",16)(191,"div",17)(192,"span",18),Jx(193,"p-click-out"),Wl(194,"br"),sg()()(),Sl(195,"td",19)(196,"code",20),Jx(197,"boolean"),sg()(),Sl(198,"td",21),Jx(199,"-"),sg(),Sl(200,"td",22)(201,"em")(202,"strong"),Jx(203,"(opcional)"),sg()(),Sl(204,"p"),Jx(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Sl(206,"code"),Jx(207,"true"),sg(),Jx(208," para ativar o fechamento ao clicar fora da modal."),sg()()(),Sl(209,"tr",15)(210,"td",16)(211,"div",23)(212,"span",24),Jx(213," (p-close)"),Wl(214,"br"),sg()()(),Sl(215,"td",19)(216,"code",25),Jx(217,"EventEmitter"),sg()(),Sl(218,"td",21),Jx(219,"-"),sg(),Sl(220,"td",22)(221,"p"),Jx(222,"Evento disparado ao fechar o modal."),sg()()(),Sl(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),Jx(227," p-components-size"),Wl(228,"br"),sg()()(),Sl(229,"td",19)(230,"code",26),Jx(231,"string"),sg()(),Sl(232,"td",21)(233,"p")(234,"code"),Jx(235,"medium"),sg()()(),Sl(236,"td",22)(237,"em")(238,"strong"),Jx(239,"(opcional)"),sg()(),Sl(240,"p"),Jx(241,"Define o tamanho dos componentes de formul\xE1rio no modal:"),sg(),Sl(242,"ul")(243,"li")(244,"code"),Jx(245,"small"),sg(),Jx(246,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(247,"li")(248,"code"),Jx(249,"medium"),sg(),Jx(250,": aplica a medida medium de cada componente."),sg()(),Sl(251,"blockquote")(252,"p"),Jx(253,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(254,"code"),Jx(255,"medium"),sg(),Jx(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(257,"a",27),Jx(258,"po-theme"),sg(),Jx(259,"."),sg()()()(),Sl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),Jx(264," p-hide-close"),Wl(265,"br"),sg()()(),Sl(266,"td",19)(267,"code",20),Jx(268,"boolean"),sg()(),Sl(269,"td",21)(270,"p")(271,"code"),Jx(272,"false"),sg()()(),Sl(273,"td",22)(274,"em")(275,"strong"),Jx(276,"(opcional)"),sg()(),Sl(277,"p"),Jx(278,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),sg(),Sl(279,"blockquote")(280,"p"),Jx(281,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Sl(282,"em"),Jx(283,"ESC"),sg(),Jx(284,"."),sg()()()(),Sl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),Jx(289," p-icon"),Wl(290,"br"),sg()()(),Sl(291,"td",19)(292,"code",26),Jx(293,"string "),sg(),Sl(294,"code",28),Jx(295," TemplateRef<void>"),sg()(),Sl(296,"td",21),Jx(297,"-"),sg(),Sl(298,"td",22)(299,"em")(300,"strong"),Jx(301,"(opcional)"),sg()(),Sl(302,"p"),Jx(303,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),sg(),Sl(304,"p"),Jx(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(306,"a",29),Jx(307,"Biblioteca de \xEDcones"),sg(),Jx(308,". conforme exemplo abaixo:"),sg(),Sl(309,"pre")(310,"code"),Jx(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),sg()(),Sl(312,"p"),Jx(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(314,"em"),Jx(315,"Font Awesome"),sg(),Jx(316,", da seguinte forma:"),sg(),Sl(317,"pre")(318,"code"),Jx(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),sg()(),Sl(320,"p"),Jx(321,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(322,"code"),Jx(323,"TemplateRef"),sg(),Jx(324,", conforme exemplo abaixo:"),sg(),Sl(325,"pre")(326,"code"),Jx(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()()()(),Sl(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),Jx(332," p-primary-action"),Wl(333,"br"),sg()()(),Sl(334,"td",19)(335,"code",30),Jx(336,"PoModalAction"),sg()(),Sl(337,"td",21),Jx(338,"-"),sg(),Sl(339,"td",22)(340,"em")(341,"strong"),Jx(342,"(opcional)"),sg()(),Sl(343,"p"),Jx(344,"Deve ser definido um objeto que implementa a interface "),Sl(345,"code"),Jx(346,"PoModalAction"),sg(),Jx(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),sg()()(),Sl(348,"tr",15)(349,"td",16)(350,"div",17)(351,"span",18),Jx(352," p-secondary-action"),Wl(353,"br"),sg()()(),Sl(354,"td",19)(355,"code",30),Jx(356,"PoModalAction"),sg()(),Sl(357,"td",21),Jx(358,"-"),sg(),Sl(359,"td",22)(360,"em")(361,"strong"),Jx(362,"(opcional)"),sg()(),Sl(363,"p"),Jx(364,"Deve ser definido um objeto que implementa a interface "),Sl(365,"code"),Jx(366,"PoModalAction"),sg(),Jx(367," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),sg()()(),Sl(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),Jx(372," p-size"),Wl(373,"br"),sg()()(),Sl(374,"td",19)(375,"code",26),Jx(376,"string"),sg()(),Sl(377,"td",21),Jx(378,"-"),sg(),Sl(379,"td",22)(380,"p"),Jx(381,"Define o tamanho da modal."),sg(),Sl(382,"p"),Jx(383,"Valores v\xE1lidos:"),sg(),Sl(384,"ul")(385,"li")(386,"code"),Jx(387,"sm"),sg(),Jx(388," (pequeno)"),sg(),Sl(389,"li")(390,"code"),Jx(391,"md"),sg(),Jx(392," (m\xE9dio)"),sg(),Sl(393,"li")(394,"code"),Jx(395,"lg"),sg(),Jx(396," (grande)"),sg(),Sl(397,"li")(398,"code"),Jx(399,"xl"),sg(),Jx(400," (extra grande)"),sg(),Sl(401,"li")(402,"code"),Jx(403,"auto"),sg(),Jx(404," (autom\xE1tico)"),sg()(),Sl(405,"blockquote")(406,"p"),Jx(407,"Quando informado "),Sl(408,"code"),Jx(409,"auto"),sg(),Jx(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Sl(411,"code"),Jx(412,"md"),sg(),Jx(413,"."),sg()()()(),Sl(414,"tr",15)(415,"td",16)(416,"div",17)(417,"span",18),Jx(418," p-title"),Wl(419,"br"),sg()()(),Sl(420,"td",19)(421,"code",26),Jx(422,"string"),sg()(),Sl(423,"td",21),Jx(424,"-"),sg(),Sl(425,"td",22)(426,"p"),Jx(427,"T\xEDtulo da modal."),sg()()()(),Sl(428,"h3",11),Jx(429,"M\xE9todos"),sg(),Sl(430,"table",31)(431,"tr",15)(432,"th",32)(433,"div",17)(434,"h4")(435,"span",18),Jx(436," close "),sg()()()()(),Sl(437,"tr",22)(438,"td",22)(439,"p"),Jx(440,"Fun\xE7\xE3o para fechar a modal."),sg()()()(),Wl(441,"br"),Sl(442,"table",31)(443,"tr",15)(444,"th",32)(445,"div",17)(446,"h4")(447,"span",18),Jx(448," open "),sg()()()()(),Sl(449,"tr",22)(450,"td",22)(451,"p"),Jx(452,"Fun\xE7\xE3o para abrir a modal."),sg()()()(),Wl(453,"br"),Sl(454,"h3"),Jx(455,"Interfaces"),sg(),Sl(456,"h4",33)(457,"code",5),Jx(458,"PoModalAction"),sg()(),Sl(459,"div",2)(460,"p"),Jx(461,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),Sl(462,"code"),Jx(463,"po-modal"),sg(),Jx(464,"."),sg()(),Sl(465,"h4",11),Jx(466,"Propriedades"),sg(),Sl(467,"table",12)(468,"tr",13)(469,"th",14),Jx(470,"Nome"),sg(),Sl(471,"th",14),Jx(472,"Tipo"),sg(),Sl(473,"th",14),Jx(474,"Descri\xE7\xE3o"),sg()(),Sl(475,"tr",15)(476,"td",16)(477,"div",17)(478,"span",18),Jx(479," action"),Wl(480,"br"),sg()()(),Sl(481,"td",19)(482,"code",34),Jx(483,"Function"),sg()(),Sl(484,"td",22)(485,"p"),Jx(486,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),sg()()(),Sl(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),Jx(491," danger"),Wl(492,"br"),sg()()(),Sl(493,"td",19)(494,"code",20),Jx(495,"boolean"),sg()(),Sl(496,"td",22)(497,"em")(498,"strong"),Jx(499,"(opcional)"),sg()(),Sl(500,"p"),Jx(501,"Define a propriedade "),Sl(502,"code"),Jx(503,"p-danger"),sg(),Jx(504," do bot\xE3o."),sg(),Sl(505,"blockquote")(506,"p"),Jx(507,"Caso a propriedade esteja definida como "),Sl(508,"code"),Jx(509,"true"),sg(),Jx(510," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),Sl(511,"code"),Jx(512,"p-danger"),sg(),Jx(513," como "),Sl(514,"code"),Jx(515,"true"),sg(),Jx(516,"."),sg()()()(),Sl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),Jx(521," disabled"),Wl(522,"br"),sg()()(),Sl(523,"td",19)(524,"code",20),Jx(525,"boolean"),sg()(),Sl(526,"td",22)(527,"em")(528,"strong"),Jx(529,"(opcional)"),sg()(),Sl(530,"p"),Jx(531,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),sg()()(),Sl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),Jx(536," icon"),Wl(537,"br"),sg()()(),Sl(538,"td",19)(539,"code",26),Jx(540,"string "),sg(),Sl(541,"code",28),Jx(542," TemplateRef<void>"),sg()(),Sl(543,"td",22)(544,"em")(545,"strong"),Jx(546,"(opcional)"),sg()(),Sl(547,"p"),Jx(548,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),sg(),Sl(549,"p"),Jx(550,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(551,"a",29),Jx(552,"Biblioteca de \xEDcones"),sg(),Jx(553,", conforme exemplo:"),sg(),Sl(554,"pre")(555,"code"),Jx(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),sg()(),Sl(557,"p"),Jx(558,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(559,"em"),Jx(560,"Font Awesome"),sg(),Jx(561,`, desde que a biblioteca
esteja carregada no projeto:`),sg(),Sl(562,"pre")(563,"code"),Jx(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),sg()(),Sl(565,"p"),Jx(566,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(567,"code"),Jx(568,"TemplateRef"),sg(),Jx(569,", conforme exemplo abaixo:"),sg(),Sl(570,"pre")(571,"code"),Jx(572,`// Template HTML
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
`),sg()(),Sl(573,"blockquote")(574,"p"),Jx(575,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(576,"code"),Jx(577,"font-size: inherit"),sg(),Jx(578," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(579,"tr",15)(580,"td",16)(581,"div",17)(582,"span",18),Jx(583," label"),Wl(584,"br"),sg()()(),Sl(585,"td",19)(586,"code",26),Jx(587,"string"),sg()(),Sl(588,"td",22)(589,"p"),Jx(590,"R\xF3tulo do bot\xE3o."),sg()()(),Sl(591,"tr",15)(592,"td",16)(593,"div",17)(594,"span",18),Jx(595," loading"),Wl(596,"br"),sg()()(),Sl(597,"td",19)(598,"code",20),Jx(599,"boolean"),sg()(),Sl(600,"td",22)(601,"em")(602,"strong"),Jx(603,"(opcional)"),sg()(),Sl(604,"p"),Jx(605,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var he=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-modal-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),sg()()()),l&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,me,ce,be,ge],encapsulation:2})}return a})();var Te=[{path:"",component:he}],Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[pL.forChild(Te),pL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,Ee]})}return a})();export{rt as DocPoModalModule};