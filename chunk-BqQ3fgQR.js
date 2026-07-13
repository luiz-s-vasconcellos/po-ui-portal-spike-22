import {f as fe$1,u as ue$1,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,c as f,aW as Yp,b0 as Qt,b6 as Yo,aB as Sx,T as Tl,C as iN,M as sg,a1 as ht,an as AO,aH as Ka,b8 as Ume,b9 as $me,L as Gl,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aJ as Whe,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,av as Yl,aw as uo,ax as fo,bC as f3,b5 as Ghe,dn as sz,a3 as sNe,aD as Ky,aE as Xy,aT as sN}from'./main-JFQ6NFFH.js';var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic"]],standalone:false,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(l,o){if(l&1){let d=Sx();Tl(0,"po-modal",1,0),iN(2," We are TOTVS!!! "),sg(),Tl(3,"po-button",2),ht("p-click",function(){Ky(d);let i=Fx(1);return Xy(i.open())}),sg();}},dependencies:[Qt,Yo],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Modal Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-modal-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,fe,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close();},label:"Confirm"};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close();},label:"Cancel"};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open();}ngOnInit(){this.restore();}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize="medium",this.icon=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs"]],viewQuery:function(l,o){if(l&1&&Yl(Yo,7),l&2){let d;uo(d=fo())&&(o.poModal=d.first);}},standalone:false,decls:21,vars:28,consts:[["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionIcon","p-clean","","p-label","Primary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionIcon","p-clean","","p-label","Secondary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let d=Sx();Tl(0,"po-modal",1),iN(1),sg(),Tl(2,"po-button",2),ht("p-click",function(){return o.openModal()}),sg(),Gl(3,"po-divider"),Tl(4,"form",null,0)(6,"div",3)(7,"po-input",4),ww("ngModelChange",function(i){return Ky(d),sN(o.title,i)||(o.title=i),Xy(i)}),sg(),r0(),Tl(8,"po-select",5),ww("ngModelChange",function(i){return Ky(d),sN(o.icon,i)||(o.icon=i),Xy(i)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(i){return Ky(d),sN(o.content,i)||(o.content=i),Xy(i)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(i){return Ky(d),sN(o.primaryActionLabel,i)||(o.primaryActionLabel=i),Xy(i)}),sg(),r0(),Tl(11,"po-input",8),ww("ngModelChange",function(i){return Ky(d),sN(o.primaryActionIcon,i)||(o.primaryActionIcon=i),Xy(i)}),sg(),r0(),Tl(12,"po-checkbox-group",9),ww("ngModelChange",function(i){return Ky(d),sN(o.primaryActionProperties,i)||(o.primaryActionProperties=i),Xy(i)}),sg(),r0(),Tl(13,"po-input",10),ww("ngModelChange",function(i){return Ky(d),sN(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),Xy(i)}),sg(),r0(),Tl(14,"po-input",11),ww("ngModelChange",function(i){return Ky(d),sN(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),Xy(i)}),sg(),r0(),Tl(15,"po-checkbox-group",12),ww("ngModelChange",function(i){return Ky(d),sN(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),Xy(i)}),sg(),r0(),Tl(16,"po-radio-group",13),ww("ngModelChange",function(i){return Ky(d),sN(o.size,i)||(o.size=i),Xy(i)}),sg(),r0(),Tl(17,"po-checkbox-group",14),ww("ngModelChange",function(i){return Ky(d),sN(o.properties,i)||(o.properties=i),Xy(i)}),sg(),r0(),Tl(18,"po-radio-group",15),ww("ngModelChange",function(i){return Ky(d),sN(o.componentsSize,i)||(o.componentsSize=i),Xy(i)}),sg(),r0(),sg(),Tl(19,"div",3)(20,"po-button",16),ht("p-click",function(){return o.restore()}),sg()()();}if(l&2){let d=Fx(5);nw("p-click-out",o.properties.includes("click-out"))("p-components-size",o.componentsSize)("p-hide-close",o.properties.includes("hide-close"))("p-primary-action",o.primaryAction)("p-secondary-action",o.secondaryActionLabel?o.secondaryAction:null)("p-size",o.size)("p-title",o.title)("p-icon",o.icon),Vp(),fg(" ",o.content,`
`),Vp(),nw("p-disabled",d.form.invalid),Vp(5),Ew("ngModel",o.title),o0(),Vp(),Ew("ngModel",o.icon),nw("p-options",o.iconOptions),o0(),Vp(),Ew("ngModel",o.content),o0(),Vp(),Ew("ngModel",o.primaryActionLabel),o0(),Vp(),Ew("ngModel",o.primaryActionIcon),o0(),Vp(),Ew("ngModel",o.primaryActionProperties),nw("p-options",o.primaryActionOptions),o0(),Vp(),Ew("ngModel",o.secondaryActionLabel),o0(),Vp(),Ew("ngModel",o.secondaryActionIcon),o0(),Vp(),Ew("ngModel",o.secondaryActionProperties),nw("p-options",o.secondaryActionOptions),o0(),Vp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),o0(),Vp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),o0(),Vp(),Ew("ngModel",o.componentsSize),nw("p-options",o.componentsSizeOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,b3,L3,Tde,Whe,Yo],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Modal Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-modal
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-modal-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ve,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return a})();var Pe=["optionsForm"],ue=(()=>{class a{poNotification=f(Yp);form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal();},label:"Close",danger:true};confirm={action:()=>{this.proccessOrder();},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];closeModal(){this.form.reset(),this.poModal.close();}confirmFruits(){this.proccessOrder();}restore(){this.form.reset();}openQuestionnaire(){this.poModal.open();}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=true,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=false,this.closeModal();},700));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(l,o){if(l&1&&Yl(Pe,7)(Yo,7),l&2){let d;uo(d=fo())&&(o.form=d.first),uo(d=fo())&&(o.poModal=d.first);}},standalone:false,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(l,o){if(l&1){let d=Sx();Tl(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),ww("ngModelChange",function(i){return Ky(d),sN(o.fruits,i)||(o.fruits=i),Xy(i)}),sg(),r0(),sg(),Tl(5,"div",2)(6,"po-combo",4),ww("ngModelChange",function(i){return Ky(d),sN(o.accompaniment,i)||(o.accompaniment=i),Xy(i)}),sg(),r0(),sg(),Tl(7,"div",2)(8,"po-textarea",5),ww("ngModelChange",function(i){return Ky(d),sN(o.orderDetail,i)||(o.orderDetail=i),Xy(i)}),sg(),r0(),sg()(),Tl(9,"po-modal-footer",6)(10,"po-button",7),ht("p-click",function(){return o.closeModal()}),sg(),Tl(11,"po-button",8),ht("p-click",function(){return o.restore()}),sg(),Tl(12,"po-button",9),ht("p-click",function(){return o.confirmFruits()}),sg()()(),Tl(13,"po-button",10),ht("p-click",function(){return o.openQuestionnaire()}),sg();}l&2&&(nw("p-primary-action",o.confirm)("p-secondary-action",o.close),Vp(4),Ew("ngModel",o.fruits),nw("p-options",o.fruitsOptions),o0(),Vp(2),Ew("ngModel",o.accompaniment),nw("p-options",o.accompanimentOptions),o0(),Vp(2),Ew("ngModel",o.orderDetail),o0(),Vp(),nw("p-disabled-align",false));},dependencies:[oY,nY,rY,Sk,Ck,Qt,b3,f3,Ghe,Yo,sz],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Modal - Fruits Salad"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-modal-fruits-salad"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,_e,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ue],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-doc"]],standalone:false,decls:606,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoModalModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-modal"),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoModalComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-modal"),sg(),iN(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),sg(),Tl(18,"p"),iN(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),sg(),Tl(20,"p"),iN(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),Tl(22,"code"),iN(23,"po-chart"),sg(),iN(24,`,
`),Tl(25,"code"),iN(26,"po-table"),sg(),iN(27," e os demais componentes do PO."),sg(),Tl(28,"p"),iN(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Tl(30,"em"),iN(31,"danger"),sg(),iN(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Tl(33,"a",6)(34,"code"),iN(35,"PoModalFooter"),sg()(),iN(36,"."),sg(),Tl(37,"blockquote")(38,"p"),iN(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Tl(40,"em"),iN(41,"ESC"),sg(),iN(42,", quando a propriedade "),Tl(43,"code"),iN(44,"p-hide-close"),sg(),iN(45," n\xE3o estiver habilitada."),sg()(),Tl(46,"h4"),iN(47,"Tokens customiz\xE1veis"),sg(),Tl(48,"p"),iN(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(50,"blockquote")(51,"p"),iN(52,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(53,"a",7),iN(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(55,"."),sg()(),Tl(56,"table")(57,"thead")(58,"tr")(59,"th"),iN(60,"Propriedade"),sg(),Tl(61,"th"),iN(62,"Descri\xE7\xE3o"),sg(),Tl(63,"th"),iN(64,"Valor Padr\xE3o"),sg()()(),Tl(65,"tbody")(66,"tr")(67,"td")(68,"strong"),iN(69,"Default Values"),sg()(),Gl(70,"td")(71,"td"),sg(),Tl(72,"tr")(73,"td")(74,"code"),iN(75,"--border-radius"),sg(),iN(76," \xA0"),sg(),Tl(77,"td"),iN(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(79,"td")(80,"code"),iN(81,"var(--border-radius-md)"),sg()()(),Tl(82,"tr")(83,"td")(84,"code"),iN(85,"--border-width"),sg(),iN(86," \xA0"),sg(),Tl(87,"td"),iN(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Tl(89,"td")(90,"code"),iN(91,"var(--border-width-sm)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),iN(95,"--border-color"),sg(),iN(96," \xA0"),sg(),Tl(97,"td"),iN(98,"Cor da borda"),sg(),Tl(99,"td")(100,"code"),iN(101,"var(--color-neutral-light-20)"),sg()()(),Tl(102,"tr")(103,"td")(104,"code"),iN(105,"--background"),sg(),iN(106," \xA0"),sg(),Tl(107,"td"),iN(108,"Cor de background"),sg(),Tl(109,"td")(110,"code"),iN(111,"var(--color-neutral-light-00)"),sg()()(),Tl(112,"tr")(113,"td")(114,"code"),iN(115,"--shadow"),sg(),iN(116," \xA0"),sg(),Tl(117,"td"),iN(118,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(119,"td")(120,"code"),iN(121,"var(--shadow-md)"),sg()()(),Tl(122,"tr")(123,"td")(124,"code"),iN(125,"--color-overlay"),sg(),iN(126," \xA0"),sg(),Tl(127,"td"),iN(128,"Cor da camada visual tempor\xE1ria"),sg(),Tl(129,"td")(130,"code"),iN(131,"var(--color-neutral-dark-80)"),sg()()(),Tl(132,"tr")(133,"td")(134,"code"),iN(135,"--opacity-overlay"),sg(),iN(136," \xA0"),sg(),Tl(137,"td"),iN(138,"Opacidade da camada visual tempor\xE1ria \xA0"),sg(),Tl(139,"td")(140,"code"),iN(141,"0.7"),sg()()(),Tl(142,"tr")(143,"td")(144,"code"),iN(145,"--color-divider"),sg(),iN(146," \xA0"),sg(),Tl(147,"td"),iN(148,"Cor das divis\xF5es do modal"),sg(),Tl(149,"td")(150,"code"),iN(151,"var(--color-neutral-light-20)"),sg()()(),Tl(152,"tr")(153,"td")(154,"code"),iN(155,"--padding-header"),sg(),iN(156," \xA0"),sg(),Tl(157,"td"),iN(158,"Padding do header do modal"),sg(),Tl(159,"td")(160,"code"),iN(161,"var(--spacing-sm) var(--spacing-md)"),sg()()(),Tl(162,"tr")(163,"td")(164,"code"),iN(165,"--padding-body"),sg(),iN(166," \xA0"),sg(),Tl(167,"td"),iN(168,"Padding do corpo do modal"),sg(),Tl(169,"td")(170,"code"),iN(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) "),sg()()()()()(),Tl(172,"div",8)(173,"h4",9),iN(174,"Seletor"),sg(),Tl(175,"pre",10),iN(176,`<po-modal
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
`),sg()(),Tl(177,"h4",11),iN(178,"Propriedades"),sg(),Tl(179,"table",12)(180,"tr",13)(181,"th",14),iN(182,"Nome"),sg(),Tl(183,"th",14),iN(184,"Tipo"),sg(),Tl(185,"th",14),iN(186,"Padr\xE3o"),sg(),Tl(187,"th",14),iN(188,"Descri\xE7\xE3o"),sg()(),Tl(189,"tr",15)(190,"td",16)(191,"div",17)(192,"span",18),iN(193,"p-click-out"),Gl(194,"br"),sg()()(),Tl(195,"td",19)(196,"code",20),iN(197,"boolean"),sg()(),Tl(198,"td",21),iN(199,"-"),sg(),Tl(200,"td",22)(201,"em")(202,"strong"),iN(203,"(opcional)"),sg()(),Tl(204,"p"),iN(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Tl(206,"code"),iN(207,"true"),sg(),iN(208," para ativar o fechamento ao clicar fora da modal."),sg()()(),Tl(209,"tr",15)(210,"td",16)(211,"div",23)(212,"span",24),iN(213," (p-close)"),Gl(214,"br"),sg()()(),Tl(215,"td",19)(216,"code",25),iN(217,"EventEmitter"),sg()(),Tl(218,"td",21),iN(219,"-"),sg(),Tl(220,"td",22)(221,"p"),iN(222,"Evento disparado ao fechar o modal."),sg()()(),Tl(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),iN(227," p-components-size"),Gl(228,"br"),sg()()(),Tl(229,"td",19)(230,"code",26),iN(231,"string"),sg()(),Tl(232,"td",21)(233,"p")(234,"code"),iN(235,"medium"),sg()()(),Tl(236,"td",22)(237,"em")(238,"strong"),iN(239,"(opcional)"),sg()(),Tl(240,"p"),iN(241,"Define o tamanho dos componentes de formul\xE1rio no modal:"),sg(),Tl(242,"ul")(243,"li")(244,"code"),iN(245,"small"),sg(),iN(246,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(247,"li")(248,"code"),iN(249,"medium"),sg(),iN(250,": aplica a medida medium de cada componente."),sg()(),Tl(251,"blockquote")(252,"p"),iN(253,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(254,"code"),iN(255,"medium"),sg(),iN(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(257,"a",27),iN(258,"po-theme"),sg(),iN(259,"."),sg()()()(),Tl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),iN(264," p-hide-close"),Gl(265,"br"),sg()()(),Tl(266,"td",19)(267,"code",20),iN(268,"boolean"),sg()(),Tl(269,"td",21)(270,"p")(271,"code"),iN(272,"false"),sg()()(),Tl(273,"td",22)(274,"em")(275,"strong"),iN(276,"(opcional)"),sg()(),Tl(277,"p"),iN(278,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),sg(),Tl(279,"blockquote")(280,"p"),iN(281,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Tl(282,"em"),iN(283,"ESC"),sg(),iN(284,"."),sg()()()(),Tl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),iN(289," p-icon"),Gl(290,"br"),sg()()(),Tl(291,"td",19)(292,"code",26),iN(293,"string "),sg(),Tl(294,"code",28),iN(295," TemplateRef<void>"),sg()(),Tl(296,"td",21),iN(297,"-"),sg(),Tl(298,"td",22)(299,"em")(300,"strong"),iN(301,"(opcional)"),sg()(),Tl(302,"p"),iN(303,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),sg(),Tl(304,"p"),iN(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(306,"a",29),iN(307,"Biblioteca de \xEDcones"),sg(),iN(308,". conforme exemplo abaixo:"),sg(),Tl(309,"pre")(310,"code"),iN(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),sg()(),Tl(312,"p"),iN(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(314,"em"),iN(315,"Font Awesome"),sg(),iN(316,", da seguinte forma:"),sg(),Tl(317,"pre")(318,"code"),iN(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),sg()(),Tl(320,"p"),iN(321,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(322,"code"),iN(323,"TemplateRef"),sg(),iN(324,", conforme exemplo abaixo:"),sg(),Tl(325,"pre")(326,"code"),iN(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()()()(),Tl(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),iN(332," p-primary-action"),Gl(333,"br"),sg()()(),Tl(334,"td",19)(335,"code",30),iN(336,"PoModalAction"),sg()(),Tl(337,"td",21),iN(338,"-"),sg(),Tl(339,"td",22)(340,"em")(341,"strong"),iN(342,"(opcional)"),sg()(),Tl(343,"p"),iN(344,"Deve ser definido um objeto que implementa a interface "),Tl(345,"code"),iN(346,"PoModalAction"),sg(),iN(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),sg()()(),Tl(348,"tr",15)(349,"td",16)(350,"div",17)(351,"span",18),iN(352," p-secondary-action"),Gl(353,"br"),sg()()(),Tl(354,"td",19)(355,"code",30),iN(356,"PoModalAction"),sg()(),Tl(357,"td",21),iN(358,"-"),sg(),Tl(359,"td",22)(360,"em")(361,"strong"),iN(362,"(opcional)"),sg()(),Tl(363,"p"),iN(364,"Deve ser definido um objeto que implementa a interface "),Tl(365,"code"),iN(366,"PoModalAction"),sg(),iN(367," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),sg()()(),Tl(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),iN(372," p-size"),Gl(373,"br"),sg()()(),Tl(374,"td",19)(375,"code",26),iN(376,"string"),sg()(),Tl(377,"td",21),iN(378,"-"),sg(),Tl(379,"td",22)(380,"p"),iN(381,"Define o tamanho da modal."),sg(),Tl(382,"p"),iN(383,"Valores v\xE1lidos:"),sg(),Tl(384,"ul")(385,"li")(386,"code"),iN(387,"sm"),sg(),iN(388," (pequeno)"),sg(),Tl(389,"li")(390,"code"),iN(391,"md"),sg(),iN(392," (m\xE9dio)"),sg(),Tl(393,"li")(394,"code"),iN(395,"lg"),sg(),iN(396," (grande)"),sg(),Tl(397,"li")(398,"code"),iN(399,"xl"),sg(),iN(400," (extra grande)"),sg(),Tl(401,"li")(402,"code"),iN(403,"auto"),sg(),iN(404," (autom\xE1tico)"),sg()(),Tl(405,"blockquote")(406,"p"),iN(407,"Quando informado "),Tl(408,"code"),iN(409,"auto"),sg(),iN(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Tl(411,"code"),iN(412,"md"),sg(),iN(413,"."),sg()()()(),Tl(414,"tr",15)(415,"td",16)(416,"div",17)(417,"span",18),iN(418," p-title"),Gl(419,"br"),sg()()(),Tl(420,"td",19)(421,"code",26),iN(422,"string"),sg()(),Tl(423,"td",21),iN(424,"-"),sg(),Tl(425,"td",22)(426,"p"),iN(427,"T\xEDtulo da modal."),sg()()()(),Tl(428,"h3",11),iN(429,"M\xE9todos"),sg(),Tl(430,"table",31)(431,"tr",15)(432,"th",32)(433,"div",17)(434,"h4")(435,"span",18),iN(436," close "),sg()()()()(),Tl(437,"tr",22)(438,"td",22)(439,"p"),iN(440,"Fun\xE7\xE3o para fechar a modal."),sg()()()(),Gl(441,"br"),Tl(442,"table",31)(443,"tr",15)(444,"th",32)(445,"div",17)(446,"h4")(447,"span",18),iN(448," open "),sg()()()()(),Tl(449,"tr",22)(450,"td",22)(451,"p"),iN(452,"Fun\xE7\xE3o para abrir a modal."),sg()()()(),Gl(453,"br"),Tl(454,"h3"),iN(455,"Interfaces"),sg(),Tl(456,"h4",33)(457,"code",5),iN(458,"PoModalAction"),sg()(),Tl(459,"div",2)(460,"p"),iN(461,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),Tl(462,"code"),iN(463,"po-modal"),sg(),iN(464,"."),sg()(),Tl(465,"h4",11),iN(466,"Propriedades"),sg(),Tl(467,"table",12)(468,"tr",13)(469,"th",14),iN(470,"Nome"),sg(),Tl(471,"th",14),iN(472,"Tipo"),sg(),Tl(473,"th",14),iN(474,"Descri\xE7\xE3o"),sg()(),Tl(475,"tr",15)(476,"td",16)(477,"div",17)(478,"span",18),iN(479," action"),Gl(480,"br"),sg()()(),Tl(481,"td",19)(482,"code",34),iN(483,"Function"),sg()(),Tl(484,"td",22)(485,"p"),iN(486,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),sg()()(),Tl(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),iN(491," danger"),Gl(492,"br"),sg()()(),Tl(493,"td",19)(494,"code",20),iN(495,"boolean"),sg()(),Tl(496,"td",22)(497,"em")(498,"strong"),iN(499,"(opcional)"),sg()(),Tl(500,"p"),iN(501,"Define a propriedade "),Tl(502,"code"),iN(503,"p-danger"),sg(),iN(504," do bot\xE3o."),sg(),Tl(505,"blockquote")(506,"p"),iN(507,"Caso a propriedade esteja definida como "),Tl(508,"code"),iN(509,"true"),sg(),iN(510," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),Tl(511,"code"),iN(512,"p-danger"),sg(),iN(513," como "),Tl(514,"code"),iN(515,"true"),sg(),iN(516,"."),sg()()()(),Tl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),iN(521," disabled"),Gl(522,"br"),sg()()(),Tl(523,"td",19)(524,"code",20),iN(525,"boolean"),sg()(),Tl(526,"td",22)(527,"em")(528,"strong"),iN(529,"(opcional)"),sg()(),Tl(530,"p"),iN(531,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),sg()()(),Tl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),iN(536," icon"),Gl(537,"br"),sg()()(),Tl(538,"td",19)(539,"code",26),iN(540,"string "),sg(),Tl(541,"code",28),iN(542," TemplateRef<void>"),sg()(),Tl(543,"td",22)(544,"em")(545,"strong"),iN(546,"(opcional)"),sg()(),Tl(547,"p"),iN(548,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),sg(),Tl(549,"p"),iN(550,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(551,"a",29),iN(552,"Biblioteca de \xEDcones"),sg(),iN(553,", conforme exemplo:"),sg(),Tl(554,"pre")(555,"code"),iN(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),sg()(),Tl(557,"p"),iN(558,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(559,"em"),iN(560,"Font Awesome"),sg(),iN(561,`, desde que a biblioteca
esteja carregada no projeto:`),sg(),Tl(562,"pre")(563,"code"),iN(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),sg()(),Tl(565,"p"),iN(566,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(567,"code"),iN(568,"TemplateRef"),sg(),iN(569,", conforme exemplo abaixo:"),sg(),Tl(570,"pre")(571,"code"),iN(572,`// Template HTML
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
`),sg()(),Tl(573,"blockquote")(574,"p"),iN(575,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(576,"code"),iN(577,"font-size: inherit"),sg(),iN(578," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(579,"tr",15)(580,"td",16)(581,"div",17)(582,"span",18),iN(583," label"),Gl(584,"br"),sg()()(),Tl(585,"td",19)(586,"code",26),iN(587,"string"),sg()(),Tl(588,"td",22)(589,"p"),iN(590,"R\xF3tulo do bot\xE3o."),sg()()(),Tl(591,"tr",15)(592,"td",16)(593,"div",17)(594,"span",18),iN(595," loading"),Gl(596,"br"),sg()()(),Tl(597,"td",19)(598,"code",20),iN(599,"boolean"),sg()(),Tl(600,"td",22)(601,"em")(602,"strong"),iN(603,"(opcional)"),sg()(),Tl(604,"p"),iN(605,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-modal-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),sg()()()),l&2&&(nw("p-actions",o.actions),Vp(2),nw("p-active",o.activeTab==="doc"),Vp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,me,ce,ge,be],encapsulation:2,changeDetection:1})}return a})();var ke=[{path:"",component:he}],Se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[DL.forChild(ke),DL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Se]})}return a})();export{rt as DocPoModalModule};