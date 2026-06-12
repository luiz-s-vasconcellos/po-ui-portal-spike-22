import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,a$ as Qt,b5 as Ko,aB as gx,Q as Cl,z as qx,T as og,a1 as dt,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aJ as nme,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,bG as k3,b4 as rme,du as xz,a3 as SNe,aD as Jy,aE as e_,aT as Zx}from'./main-OS7VVRJY.js';var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic"]],standalone:false,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(l,o){if(l&1){let d=gx();Cl(0,"po-modal",1,0),qx(2," We are TOTVS!!! "),og(),Cl(3,"po-button",2),dt("p-click",function(){Jy(d);let i=Sx(1);return e_(i.open())}),og();}},dependencies:[Qt,Ko],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Modal Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-modal-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,pe],encapsulation:2})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close();},label:"Confirm"};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close();},label:"Cancel"};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open();}ngOnInit(){this.restore();}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize="medium",this.icon=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs"]],viewQuery:function(l,o){if(l&1&&zl(Ko,7),l&2){let d;uo(d=fo())&&(o.poModal=d.first);}},standalone:false,decls:21,vars:28,consts:[["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionIcon","p-clean","","p-label","Primary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionIcon","p-clean","","p-label","Secondary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let d=gx();Cl(0,"po-modal",1),qx(1),og(),Cl(2,"po-button",2),dt("p-click",function(){return o.openModal()}),og(),Hl(3,"po-divider"),Cl(4,"form",null,0)(6,"div",3)(7,"po-input",4),gw("ngModelChange",function(i){return Jy(d),Zx(o.title,i)||(o.title=i),e_(i)}),og(),Z0(),Cl(8,"po-select",5),gw("ngModelChange",function(i){return Jy(d),Zx(o.icon,i)||(o.icon=i),e_(i)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(i){return Jy(d),Zx(o.content,i)||(o.content=i),e_(i)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(i){return Jy(d),Zx(o.primaryActionLabel,i)||(o.primaryActionLabel=i),e_(i)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(i){return Jy(d),Zx(o.primaryActionIcon,i)||(o.primaryActionIcon=i),e_(i)}),og(),Z0(),Cl(12,"po-checkbox-group",9),gw("ngModelChange",function(i){return Jy(d),Zx(o.primaryActionProperties,i)||(o.primaryActionProperties=i),e_(i)}),og(),Z0(),Cl(13,"po-input",10),gw("ngModelChange",function(i){return Jy(d),Zx(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),e_(i)}),og(),Z0(),Cl(14,"po-input",11),gw("ngModelChange",function(i){return Jy(d),Zx(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),e_(i)}),og(),Z0(),Cl(15,"po-checkbox-group",12),gw("ngModelChange",function(i){return Jy(d),Zx(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),e_(i)}),og(),Z0(),Cl(16,"po-radio-group",13),gw("ngModelChange",function(i){return Jy(d),Zx(o.size,i)||(o.size=i),e_(i)}),og(),Z0(),Cl(17,"po-checkbox-group",14),gw("ngModelChange",function(i){return Jy(d),Zx(o.properties,i)||(o.properties=i),e_(i)}),og(),Z0(),Cl(18,"po-radio-group",15),gw("ngModelChange",function(i){return Jy(d),Zx(o.componentsSize,i)||(o.componentsSize=i),e_(i)}),og(),Z0(),og(),Cl(19,"div",3)(20,"po-button",16),dt("p-click",function(){return o.restore()}),og()()();}if(l&2){let d=Sx(5);ZE("p-click-out",o.properties.includes("click-out"))("p-components-size",o.componentsSize)("p-hide-close",o.properties.includes("hide-close"))("p-primary-action",o.primaryAction)("p-secondary-action",o.secondaryActionLabel?o.secondaryAction:null)("p-size",o.size)("p-title",o.title)("p-icon",o.icon),Lp(),dg(" ",o.content,`
`),Lp(),ZE("p-disabled",d.form.invalid),Lp(5),pw("ngModel",o.title),X0(),Lp(),pw("ngModel",o.icon),ZE("p-options",o.iconOptions),X0(),Lp(),pw("ngModel",o.content),X0(),Lp(),pw("ngModel",o.primaryActionLabel),X0(),Lp(),pw("ngModel",o.primaryActionIcon),X0(),Lp(),pw("ngModel",o.primaryActionProperties),ZE("p-options",o.primaryActionOptions),X0(),Lp(),pw("ngModel",o.secondaryActionLabel),X0(),Lp(),pw("ngModel",o.secondaryActionIcon),X0(),Lp(),pw("ngModel",o.secondaryActionProperties),ZE("p-options",o.secondaryActionOptions),X0(),Lp(),pw("ngModel",o.size),ZE("p-options",o.sizeOptions),X0(),Lp(),pw("ngModel",o.properties),ZE("p-options",o.propertiesOptions),X0(),Lp(),pw("ngModel",o.componentsSize),ZE("p-options",o.componentsSizeOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,nme,Ko],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Modal Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-modal
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-modal-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return a})();var Pe=["optionsForm"],ue=(()=>{class a{poNotification=f(Xp);form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal();},label:"Close",danger:true};confirm={action:()=>{this.proccessOrder();},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];closeModal(){this.form.reset(),this.poModal.close();}confirmFruits(){this.proccessOrder();}restore(){this.form.reset();}openQuestionnaire(){this.poModal.open();}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=true,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=false,this.closeModal();},700));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(l,o){if(l&1&&zl(Pe,7)(Ko,7),l&2){let d;uo(d=fo())&&(o.form=d.first),uo(d=fo())&&(o.poModal=d.first);}},standalone:false,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(l,o){if(l&1){let d=gx();Cl(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),gw("ngModelChange",function(i){return Jy(d),Zx(o.fruits,i)||(o.fruits=i),e_(i)}),og(),Z0(),og(),Cl(5,"div",2)(6,"po-combo",4),gw("ngModelChange",function(i){return Jy(d),Zx(o.accompaniment,i)||(o.accompaniment=i),e_(i)}),og(),Z0(),og(),Cl(7,"div",2)(8,"po-textarea",5),gw("ngModelChange",function(i){return Jy(d),Zx(o.orderDetail,i)||(o.orderDetail=i),e_(i)}),og(),Z0(),og()(),Cl(9,"po-modal-footer",6)(10,"po-button",7),dt("p-click",function(){return o.closeModal()}),og(),Cl(11,"po-button",8),dt("p-click",function(){return o.restore()}),og(),Cl(12,"po-button",9),dt("p-click",function(){return o.confirmFruits()}),og()()(),Cl(13,"po-button",10),dt("p-click",function(){return o.openQuestionnaire()}),og();}l&2&&(ZE("p-primary-action",o.confirm)("p-secondary-action",o.close),Lp(4),pw("ngModel",o.fruits),ZE("p-options",o.fruitsOptions),X0(),Lp(2),pw("ngModel",o.accompaniment),ZE("p-options",o.accompanimentOptions),X0(),Lp(2),pw("ngModel",o.orderDetail),X0(),Lp(),ZE("p-disabled-align",false));},dependencies:[lY,sY,aY,gk,fk,Qt,L3,k3,rme,Ko,xz],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Modal - Fruits Salad"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-modal-fruits-salad"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-doc"]],standalone:false,decls:606,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,o){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoModalModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-modal"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoModalComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-modal"),og(),qx(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),og(),Cl(18,"p"),qx(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),og(),Cl(20,"p"),qx(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),Cl(22,"code"),qx(23,"po-chart"),og(),qx(24,`,
`),Cl(25,"code"),qx(26,"po-table"),og(),qx(27," e os demais componentes do PO."),og(),Cl(28,"p"),qx(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Cl(30,"em"),qx(31,"danger"),og(),qx(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Cl(33,"a",6)(34,"code"),qx(35,"PoModalFooter"),og()(),qx(36,"."),og(),Cl(37,"blockquote")(38,"p"),qx(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Cl(40,"em"),qx(41,"ESC"),og(),qx(42,", quando a propriedade "),Cl(43,"code"),qx(44,"p-hide-close"),og(),qx(45," n\xE3o estiver habilitada."),og()(),Cl(46,"h4"),qx(47,"Tokens customiz\xE1veis"),og(),Cl(48,"p"),qx(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(50,"blockquote")(51,"p"),qx(52,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(53,"a",7),qx(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(55,"."),og()(),Cl(56,"table")(57,"thead")(58,"tr")(59,"th"),qx(60,"Propriedade"),og(),Cl(61,"th"),qx(62,"Descri\xE7\xE3o"),og(),Cl(63,"th"),qx(64,"Valor Padr\xE3o"),og()()(),Cl(65,"tbody")(66,"tr")(67,"td")(68,"strong"),qx(69,"Default Values"),og()(),Hl(70,"td")(71,"td"),og(),Cl(72,"tr")(73,"td")(74,"code"),qx(75,"--border-radius"),og(),qx(76," \xA0"),og(),Cl(77,"td"),qx(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(79,"td")(80,"code"),qx(81,"var(--border-radius-md)"),og()()(),Cl(82,"tr")(83,"td")(84,"code"),qx(85,"--border-width"),og(),qx(86," \xA0"),og(),Cl(87,"td"),qx(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--border-width-sm)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--border-color"),og(),qx(96," \xA0"),og(),Cl(97,"td"),qx(98,"Cor da borda"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--color-neutral-light-20)"),og()()(),Cl(102,"tr")(103,"td")(104,"code"),qx(105,"--background"),og(),qx(106," \xA0"),og(),Cl(107,"td"),qx(108,"Cor de background"),og(),Cl(109,"td")(110,"code"),qx(111,"var(--color-neutral-light-00)"),og()()(),Cl(112,"tr")(113,"td")(114,"code"),qx(115,"--shadow"),og(),qx(116," \xA0"),og(),Cl(117,"td"),qx(118,"Cont\xE9m o valor da sombra do elemento"),og(),Cl(119,"td")(120,"code"),qx(121,"var(--shadow-md)"),og()()(),Cl(122,"tr")(123,"td")(124,"code"),qx(125,"--color-overlay"),og(),qx(126," \xA0"),og(),Cl(127,"td"),qx(128,"Cor da camada visual tempor\xE1ria"),og(),Cl(129,"td")(130,"code"),qx(131,"var(--color-neutral-dark-80)"),og()()(),Cl(132,"tr")(133,"td")(134,"code"),qx(135,"--opacity-overlay"),og(),qx(136," \xA0"),og(),Cl(137,"td"),qx(138,"Opacidade da camada visual tempor\xE1ria \xA0"),og(),Cl(139,"td")(140,"code"),qx(141,"0.7"),og()()(),Cl(142,"tr")(143,"td")(144,"code"),qx(145,"--color-divider"),og(),qx(146," \xA0"),og(),Cl(147,"td"),qx(148,"Cor das divis\xF5es do modal"),og(),Cl(149,"td")(150,"code"),qx(151,"var(--color-neutral-light-20)"),og()()(),Cl(152,"tr")(153,"td")(154,"code"),qx(155,"--padding-header"),og(),qx(156," \xA0"),og(),Cl(157,"td"),qx(158,"Padding do header do modal"),og(),Cl(159,"td")(160,"code"),qx(161,"var(--spacing-sm) var(--spacing-md)"),og()()(),Cl(162,"tr")(163,"td")(164,"code"),qx(165,"--padding-body"),og(),qx(166," \xA0"),og(),Cl(167,"td"),qx(168,"Padding do corpo do modal"),og(),Cl(169,"td")(170,"code"),qx(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) "),og()()()()()(),Cl(172,"div",8)(173,"h4",9),qx(174,"Seletor"),og(),Cl(175,"pre",10),qx(176,`<po-modal
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
`),og()(),Cl(177,"h4",11),qx(178,"Propriedades"),og(),Cl(179,"table",12)(180,"tr",13)(181,"th",14),qx(182,"Nome"),og(),Cl(183,"th",14),qx(184,"Tipo"),og(),Cl(185,"th",14),qx(186,"Padr\xE3o"),og(),Cl(187,"th",14),qx(188,"Descri\xE7\xE3o"),og()(),Cl(189,"tr",15)(190,"td",16)(191,"div",17)(192,"span",18),qx(193,"p-click-out"),Hl(194,"br"),og()()(),Cl(195,"td",19)(196,"code",20),qx(197,"boolean"),og()(),Cl(198,"td",21),qx(199,"-"),og(),Cl(200,"td",22)(201,"em")(202,"strong"),qx(203,"(opcional)"),og()(),Cl(204,"p"),qx(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Cl(206,"code"),qx(207,"true"),og(),qx(208," para ativar o fechamento ao clicar fora da modal."),og()()(),Cl(209,"tr",15)(210,"td",16)(211,"div",23)(212,"span",24),qx(213," (p-close)"),Hl(214,"br"),og()()(),Cl(215,"td",19)(216,"code",25),qx(217,"EventEmitter"),og()(),Cl(218,"td",21),qx(219,"-"),og(),Cl(220,"td",22)(221,"p"),qx(222,"Evento disparado ao fechar o modal."),og()()(),Cl(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),qx(227," p-components-size"),Hl(228,"br"),og()()(),Cl(229,"td",19)(230,"code",26),qx(231,"string"),og()(),Cl(232,"td",21)(233,"p")(234,"code"),qx(235,"medium"),og()()(),Cl(236,"td",22)(237,"em")(238,"strong"),qx(239,"(opcional)"),og()(),Cl(240,"p"),qx(241,"Define o tamanho dos componentes de formul\xE1rio no modal:"),og(),Cl(242,"ul")(243,"li")(244,"code"),qx(245,"small"),og(),qx(246,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(247,"li")(248,"code"),qx(249,"medium"),og(),qx(250,": aplica a medida medium de cada componente."),og()(),Cl(251,"blockquote")(252,"p"),qx(253,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(254,"code"),qx(255,"medium"),og(),qx(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(257,"a",27),qx(258,"po-theme"),og(),qx(259,"."),og()()()(),Cl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),qx(264," p-hide-close"),Hl(265,"br"),og()()(),Cl(266,"td",19)(267,"code",20),qx(268,"boolean"),og()(),Cl(269,"td",21)(270,"p")(271,"code"),qx(272,"false"),og()()(),Cl(273,"td",22)(274,"em")(275,"strong"),qx(276,"(opcional)"),og()(),Cl(277,"p"),qx(278,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),og(),Cl(279,"blockquote")(280,"p"),qx(281,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Cl(282,"em"),qx(283,"ESC"),og(),qx(284,"."),og()()()(),Cl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),qx(289," p-icon"),Hl(290,"br"),og()()(),Cl(291,"td",19)(292,"code",26),qx(293,"string "),og(),Cl(294,"code",28),qx(295," TemplateRef<void>"),og()(),Cl(296,"td",21),qx(297,"-"),og(),Cl(298,"td",22)(299,"em")(300,"strong"),qx(301,"(opcional)"),og()(),Cl(302,"p"),qx(303,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),og(),Cl(304,"p"),qx(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(306,"a",29),qx(307,"Biblioteca de \xEDcones"),og(),qx(308,". conforme exemplo abaixo:"),og(),Cl(309,"pre")(310,"code"),qx(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),og()(),Cl(312,"p"),qx(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(314,"em"),qx(315,"Font Awesome"),og(),qx(316,", da seguinte forma:"),og(),Cl(317,"pre")(318,"code"),qx(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),og()(),Cl(320,"p"),qx(321,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(322,"code"),qx(323,"TemplateRef"),og(),qx(324,", conforme exemplo abaixo:"),og(),Cl(325,"pre")(326,"code"),qx(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()()()(),Cl(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),qx(332," p-primary-action"),Hl(333,"br"),og()()(),Cl(334,"td",19)(335,"code",30),qx(336,"PoModalAction"),og()(),Cl(337,"td",21),qx(338,"-"),og(),Cl(339,"td",22)(340,"em")(341,"strong"),qx(342,"(opcional)"),og()(),Cl(343,"p"),qx(344,"Deve ser definido um objeto que implementa a interface "),Cl(345,"code"),qx(346,"PoModalAction"),og(),qx(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),og()()(),Cl(348,"tr",15)(349,"td",16)(350,"div",17)(351,"span",18),qx(352," p-secondary-action"),Hl(353,"br"),og()()(),Cl(354,"td",19)(355,"code",30),qx(356,"PoModalAction"),og()(),Cl(357,"td",21),qx(358,"-"),og(),Cl(359,"td",22)(360,"em")(361,"strong"),qx(362,"(opcional)"),og()(),Cl(363,"p"),qx(364,"Deve ser definido um objeto que implementa a interface "),Cl(365,"code"),qx(366,"PoModalAction"),og(),qx(367," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),og()()(),Cl(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),qx(372," p-size"),Hl(373,"br"),og()()(),Cl(374,"td",19)(375,"code",26),qx(376,"string"),og()(),Cl(377,"td",21),qx(378,"-"),og(),Cl(379,"td",22)(380,"p"),qx(381,"Define o tamanho da modal."),og(),Cl(382,"p"),qx(383,"Valores v\xE1lidos:"),og(),Cl(384,"ul")(385,"li")(386,"code"),qx(387,"sm"),og(),qx(388," (pequeno)"),og(),Cl(389,"li")(390,"code"),qx(391,"md"),og(),qx(392," (m\xE9dio)"),og(),Cl(393,"li")(394,"code"),qx(395,"lg"),og(),qx(396," (grande)"),og(),Cl(397,"li")(398,"code"),qx(399,"xl"),og(),qx(400," (extra grande)"),og(),Cl(401,"li")(402,"code"),qx(403,"auto"),og(),qx(404," (autom\xE1tico)"),og()(),Cl(405,"blockquote")(406,"p"),qx(407,"Quando informado "),Cl(408,"code"),qx(409,"auto"),og(),qx(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Cl(411,"code"),qx(412,"md"),og(),qx(413,"."),og()()()(),Cl(414,"tr",15)(415,"td",16)(416,"div",17)(417,"span",18),qx(418," p-title"),Hl(419,"br"),og()()(),Cl(420,"td",19)(421,"code",26),qx(422,"string"),og()(),Cl(423,"td",21),qx(424,"-"),og(),Cl(425,"td",22)(426,"p"),qx(427,"T\xEDtulo da modal."),og()()()(),Cl(428,"h3",11),qx(429,"M\xE9todos"),og(),Cl(430,"table",31)(431,"tr",15)(432,"th",32)(433,"div",17)(434,"h4")(435,"span",18),qx(436," close "),og()()()()(),Cl(437,"tr",22)(438,"td",22)(439,"p"),qx(440,"Fun\xE7\xE3o para fechar a modal."),og()()()(),Hl(441,"br"),Cl(442,"table",31)(443,"tr",15)(444,"th",32)(445,"div",17)(446,"h4")(447,"span",18),qx(448," open "),og()()()()(),Cl(449,"tr",22)(450,"td",22)(451,"p"),qx(452,"Fun\xE7\xE3o para abrir a modal."),og()()()(),Hl(453,"br"),Cl(454,"h3"),qx(455,"Interfaces"),og(),Cl(456,"h4",33)(457,"code",5),qx(458,"PoModalAction"),og()(),Cl(459,"div",2)(460,"p"),qx(461,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),Cl(462,"code"),qx(463,"po-modal"),og(),qx(464,"."),og()(),Cl(465,"h4",11),qx(466,"Propriedades"),og(),Cl(467,"table",12)(468,"tr",13)(469,"th",14),qx(470,"Nome"),og(),Cl(471,"th",14),qx(472,"Tipo"),og(),Cl(473,"th",14),qx(474,"Descri\xE7\xE3o"),og()(),Cl(475,"tr",15)(476,"td",16)(477,"div",17)(478,"span",18),qx(479," action"),Hl(480,"br"),og()()(),Cl(481,"td",19)(482,"code",34),qx(483,"Function"),og()(),Cl(484,"td",22)(485,"p"),qx(486,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),og()()(),Cl(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),qx(491," danger"),Hl(492,"br"),og()()(),Cl(493,"td",19)(494,"code",20),qx(495,"boolean"),og()(),Cl(496,"td",22)(497,"em")(498,"strong"),qx(499,"(opcional)"),og()(),Cl(500,"p"),qx(501,"Define a propriedade "),Cl(502,"code"),qx(503,"p-danger"),og(),qx(504," do bot\xE3o."),og(),Cl(505,"blockquote")(506,"p"),qx(507,"Caso a propriedade esteja definida como "),Cl(508,"code"),qx(509,"true"),og(),qx(510," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),Cl(511,"code"),qx(512,"p-danger"),og(),qx(513," como "),Cl(514,"code"),qx(515,"true"),og(),qx(516,"."),og()()()(),Cl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),qx(521," disabled"),Hl(522,"br"),og()()(),Cl(523,"td",19)(524,"code",20),qx(525,"boolean"),og()(),Cl(526,"td",22)(527,"em")(528,"strong"),qx(529,"(opcional)"),og()(),Cl(530,"p"),qx(531,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),og()()(),Cl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),qx(536," icon"),Hl(537,"br"),og()()(),Cl(538,"td",19)(539,"code",26),qx(540,"string "),og(),Cl(541,"code",28),qx(542," TemplateRef<void>"),og()(),Cl(543,"td",22)(544,"em")(545,"strong"),qx(546,"(opcional)"),og()(),Cl(547,"p"),qx(548,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Cl(549,"p"),qx(550,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(551,"a",29),qx(552,"Biblioteca de \xEDcones"),og(),qx(553,", conforme exemplo:"),og(),Cl(554,"pre")(555,"code"),qx(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),og()(),Cl(557,"p"),qx(558,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(559,"em"),qx(560,"Font Awesome"),og(),qx(561,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Cl(562,"pre")(563,"code"),qx(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),og()(),Cl(565,"p"),qx(566,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(567,"code"),qx(568,"TemplateRef"),og(),qx(569,", conforme exemplo abaixo:"),og(),Cl(570,"pre")(571,"code"),qx(572,`// Template HTML
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
`),og()(),Cl(573,"blockquote")(574,"p"),qx(575,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(576,"code"),qx(577,"font-size: inherit"),og(),qx(578," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(579,"tr",15)(580,"td",16)(581,"div",17)(582,"span",18),qx(583," label"),Hl(584,"br"),og()()(),Cl(585,"td",19)(586,"code",26),qx(587,"string"),og()(),Cl(588,"td",22)(589,"p"),qx(590,"R\xF3tulo do bot\xE3o."),og()()(),Cl(591,"tr",15)(592,"td",16)(593,"div",17)(594,"span",18),qx(595," loading"),Hl(596,"br"),og()()(),Cl(597,"td",19)(598,"code",20),qx(599,"boolean"),og()(),Cl(600,"td",22)(601,"em")(602,"strong"),qx(603,"(opcional)"),og()(),Cl(604,"p"),qx(605,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var he=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-modal-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),og()()()),l&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,me,ce,be,ge],encapsulation:2})}return a})();var Te=[{path:"",component:he}],Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[bL.forChild(Te),bL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ca,Ee]})}return a})();export{rt as DocPoModalModule};