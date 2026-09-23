import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,S as B4,Sa as yN,T as CH,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,pt as Pbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,o){if(l&1){let d=Vx();Ml(0,`po-modal`,1,0),mN(2,` We are TOTVS!!! `),lg(),Ml(3,`po-button`,2),ht(`p-click`,function(){Qy(d);return Jy(Yx(1).open())}),lg()}},dependencies:[Zt,vr],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Modal Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-modal-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,fe,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,o){if(l&1&&Zl(vr,7),l&2){let d;lo(d=uo())&&(o.poModal=d.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Vx();Ml(0,`po-modal`,1),mN(1),lg(),Ml(2,`po-button`,2),ht(`p-click`,function(){return o.openModal()}),lg(),ql(3,`po-divider`),Ml(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.title,i)||(o.title=i),Jy(i)}),lg(),f0(),Ml(8,`po-select`,5),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.icon,i)||(o.icon=i),Jy(i)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.content,i)||(o.content=i),Jy(i)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.primaryActionLabel,i)||(o.primaryActionLabel=i),Jy(i)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.primaryActionIcon,i)||(o.primaryActionIcon=i),Jy(i)}),lg(),f0(),Ml(12,`po-checkbox-group`,9),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.primaryActionProperties,i)||(o.primaryActionProperties=i),Jy(i)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),Jy(i)}),lg(),f0(),Ml(14,`po-input`,11),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),Jy(i)}),lg(),f0(),Ml(15,`po-checkbox-group`,12),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),Jy(i)}),lg(),f0(),Ml(16,`po-radio-group`,13),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.size,i)||(o.size=i),Jy(i)}),lg(),f0(),Ml(17,`po-checkbox-group`,14),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.properties,i)||(o.properties=i),Jy(i)}),lg(),f0(),Ml(18,`po-radio-group`,15),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.componentsSize,i)||(o.componentsSize=i),Jy(i)}),lg(),f0(),lg(),Ml(19,`div`,3)(20,`po-button`,16),ht(`p-click`,function(){return o.restore()}),lg()()()}if(l&2){let d=Yx(5);cw(`p-click-out`,o.properties.includes(`click-out`))(`p-components-size`,o.componentsSize)(`p-hide-close`,o.properties.includes(`hide-close`))(`p-primary-action`,o.primaryAction)(`p-secondary-action`,o.secondaryActionLabel?o.secondaryAction:null)(`p-size`,o.size)(`p-title`,o.title)(`p-icon`,o.icon),Up(),gg(` `,o.content,`
`),Up(),cw(`p-disabled`,d.form.invalid),Up(5),Tw(`ngModel`,o.title),p0(),Up(),Tw(`ngModel`,o.icon),cw(`p-options`,o.iconOptions),p0(),Up(),Tw(`ngModel`,o.content),p0(),Up(),Tw(`ngModel`,o.primaryActionLabel),p0(),Up(),Tw(`ngModel`,o.primaryActionIcon),p0(),Up(),Tw(`ngModel`,o.primaryActionProperties),cw(`p-options`,o.primaryActionOptions),p0(),Up(),Tw(`ngModel`,o.secondaryActionLabel),p0(),Up(),Tw(`ngModel`,o.secondaryActionIcon),p0(),Up(),Tw(`ngModel`,o.secondaryActionProperties),cw(`p-options`,o.secondaryActionOptions),p0(),Up(),Tw(`ngModel`,o.size),cw(`p-options`,o.sizeOptions),p0(),Up(),Tw(`ngModel`,o.properties),cw(`p-options`,o.propertiesOptions),p0(),Up(),Tw(`ngModel`,o.componentsSize),cw(`p-options`,o.componentsSizeOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,Tbe,vr],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Modal Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-modal
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-modal-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return a})();var Pe=[`optionsForm`];var ue=(()=>{class a{poNotification=f(Eu);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,o){if(l&1&&Zl(Pe,7)(vr,7),l&2){let d;lo(d=uo())&&(o.form=d.first),lo(d=uo())&&(o.poModal=d.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,o){if(l&1){let d=Vx();Ml(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.fruits,i)||(o.fruits=i),Jy(i)}),lg(),f0(),lg(),Ml(5,`div`,2)(6,`po-combo`,4),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.accompaniment,i)||(o.accompaniment=i),Jy(i)}),lg(),f0(),lg(),Ml(7,`div`,2)(8,`po-textarea`,5),Mw(`ngModelChange`,function(i){return Qy(d),yN(o.orderDetail,i)||(o.orderDetail=i),Jy(i)}),lg(),f0(),lg()(),Ml(9,`po-modal-footer`,6)(10,`po-button`,7),ht(`p-click`,function(){return o.closeModal()}),lg(),Ml(11,`po-button`,8),ht(`p-click`,function(){return o.restore()}),lg(),Ml(12,`po-button`,9),ht(`p-click`,function(){return o.confirmFruits()}),lg()()(),Ml(13,`po-button`,10),ht(`p-click`,function(){return o.openQuestionnaire()}),lg()}l&2&&(cw(`p-primary-action`,o.confirm)(`p-secondary-action`,o.close),Up(4),Tw(`ngModel`,o.fruits),cw(`p-options`,o.fruitsOptions),p0(),Up(2),Tw(`ngModel`,o.accompaniment),cw(`p-options`,o.accompanimentOptions),p0(),Up(2),Tw(`ngModel`,o.orderDetail),p0(),Up(),cw(`p-disabled-align`,!1))},dependencies:[IY,wY,CY,Vk,kk,Zt,G4,B4,Pbe,vr,CH],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Modal - Fruits Salad`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-modal-fruits-salad`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:606,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoModalModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-modal`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoModalComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-modal`),lg(),mN(17,` é utilizado para incluir conteúdos rápidos e informativos.`),lg(),Ml(18,`p`),mN(19,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),lg(),Ml(20,`p`),mN(21,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),Ml(22,`code`),mN(23,`po-chart`),lg(),mN(24,`,
`),Ml(25,`code`),mN(26,`po-table`),lg(),mN(27,` e os demais componentes do PO.`),lg(),Ml(28,`p`),mN(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Ml(30,`em`),mN(31,`danger`),lg(),mN(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Ml(33,`a`,6)(34,`code`),mN(35,`PoModalFooter`),lg()(),mN(36,`.`),lg(),Ml(37,`blockquote`)(38,`p`),mN(39,`É possível fechar a modal através da tecla `),Ml(40,`em`),mN(41,`ESC`),lg(),mN(42,`, quando a propriedade `),Ml(43,`code`),mN(44,`p-hide-close`),lg(),mN(45,` não estiver habilitada.`),lg()(),Ml(46,`h4`),mN(47,`Tokens customizáveis`),lg(),Ml(48,`p`),mN(49,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(50,`blockquote`)(51,`p`),mN(52,`Para maiores informações, acesse o guia `),Ml(53,`a`,7),mN(54,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(55,`.`),lg()(),Ml(56,`table`)(57,`thead`)(58,`tr`)(59,`th`),mN(60,`Propriedade`),lg(),Ml(61,`th`),mN(62,`Descrição`),lg(),Ml(63,`th`),mN(64,`Valor Padrão`),lg()()(),Ml(65,`tbody`)(66,`tr`)(67,`td`)(68,`strong`),mN(69,`Default Values`),lg()(),ql(70,`td`)(71,`td`),lg(),Ml(72,`tr`)(73,`td`)(74,`code`),mN(75,`--border-radius`),lg(),mN(76,` \xA0`),lg(),Ml(77,`td`),mN(78,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(79,`td`)(80,`code`),mN(81,`var(--border-radius-md)`),lg()()(),Ml(82,`tr`)(83,`td`)(84,`code`),mN(85,`--border-width`),lg(),mN(86,` \xA0`),lg(),Ml(87,`td`),mN(88,`Contém o valor da largura dos cantos do elemento\xA0`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--border-width-sm)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--border-color`),lg(),mN(96,` \xA0`),lg(),Ml(97,`td`),mN(98,`Cor da borda`),lg(),Ml(99,`td`)(100,`code`),mN(101,`var(--color-neutral-light-20)`),lg()()(),Ml(102,`tr`)(103,`td`)(104,`code`),mN(105,`--background`),lg(),mN(106,` \xA0`),lg(),Ml(107,`td`),mN(108,`Cor de background`),lg(),Ml(109,`td`)(110,`code`),mN(111,`var(--color-neutral-light-00)`),lg()()(),Ml(112,`tr`)(113,`td`)(114,`code`),mN(115,`--shadow`),lg(),mN(116,` \xA0`),lg(),Ml(117,`td`),mN(118,`Contém o valor da sombra do elemento`),lg(),Ml(119,`td`)(120,`code`),mN(121,`var(--shadow-md)`),lg()()(),Ml(122,`tr`)(123,`td`)(124,`code`),mN(125,`--color-overlay`),lg(),mN(126,` \xA0`),lg(),Ml(127,`td`),mN(128,`Cor da camada visual temporária`),lg(),Ml(129,`td`)(130,`code`),mN(131,`var(--color-neutral-dark-80)`),lg()()(),Ml(132,`tr`)(133,`td`)(134,`code`),mN(135,`--opacity-overlay`),lg(),mN(136,` \xA0`),lg(),Ml(137,`td`),mN(138,`Opacidade da camada visual temporária \xA0`),lg(),Ml(139,`td`)(140,`code`),mN(141,`0.7`),lg()()(),Ml(142,`tr`)(143,`td`)(144,`code`),mN(145,`--color-divider`),lg(),mN(146,` \xA0`),lg(),Ml(147,`td`),mN(148,`Cor das divisões do modal`),lg(),Ml(149,`td`)(150,`code`),mN(151,`var(--color-neutral-light-20)`),lg()()(),Ml(152,`tr`)(153,`td`)(154,`code`),mN(155,`--padding-header`),lg(),mN(156,` \xA0`),lg(),Ml(157,`td`),mN(158,`Padding do header do modal`),lg(),Ml(159,`td`)(160,`code`),mN(161,`var(--spacing-sm) var(--spacing-md)`),lg()()(),Ml(162,`tr`)(163,`td`)(164,`code`),mN(165,`--padding-body`),lg(),mN(166,` \xA0`),lg(),Ml(167,`td`),mN(168,`Padding do corpo do modal`),lg(),Ml(169,`td`)(170,`code`),mN(171,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),lg()()()()()(),Ml(172,`div`,8)(173,`h4`,9),mN(174,`Seletor`),lg(),Ml(175,`pre`,10),mN(176,`<po-modal
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
`),lg()(),Ml(177,`h4`,11),mN(178,`Propriedades`),lg(),Ml(179,`table`,12)(180,`tr`,13)(181,`th`,14),mN(182,`Nome`),lg(),Ml(183,`th`,14),mN(184,`Tipo`),lg(),Ml(185,`th`,14),mN(186,`Padrão`),lg(),Ml(187,`th`,14),mN(188,`Descrição`),lg()(),Ml(189,`tr`,15)(190,`td`,16)(191,`div`,17)(192,`span`,18),mN(193,`p-click-out`),ql(194,`br`),lg()()(),Ml(195,`td`,19)(196,`code`,20),mN(197,`boolean`),lg()(),Ml(198,`td`,21),mN(199,`-`),lg(),Ml(200,`td`,22)(201,`em`)(202,`strong`),mN(203,`(opcional)`),lg()(),Ml(204,`p`),mN(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Ml(206,`code`),mN(207,`true`),lg(),mN(208,` para ativar o fechamento ao clicar fora da modal.`),lg()()(),Ml(209,`tr`,15)(210,`td`,16)(211,`div`,23)(212,`span`,24),mN(213,` (p-close)`),ql(214,`br`),lg()()(),Ml(215,`td`,19)(216,`code`,25),mN(217,`EventEmitter`),lg()(),Ml(218,`td`,21),mN(219,`-`),lg(),Ml(220,`td`,22)(221,`p`),mN(222,`Evento disparado ao fechar o modal.`),lg()()(),Ml(223,`tr`,15)(224,`td`,16)(225,`div`,17)(226,`span`,18),mN(227,` p-components-size`),ql(228,`br`),lg()()(),Ml(229,`td`,19)(230,`code`,26),mN(231,`string`),lg()(),Ml(232,`td`,21)(233,`p`)(234,`code`),mN(235,`medium`),lg()()(),Ml(236,`td`,22)(237,`em`)(238,`strong`),mN(239,`(opcional)`),lg()(),Ml(240,`p`),mN(241,`Define o tamanho dos componentes de formulário no modal:`),lg(),Ml(242,`ul`)(243,`li`)(244,`code`),mN(245,`small`),lg(),mN(246,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(247,`li`)(248,`code`),mN(249,`medium`),lg(),mN(250,`: aplica a medida medium de cada componente.`),lg()(),Ml(251,`blockquote`)(252,`p`),mN(253,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(254,`code`),mN(255,`medium`),lg(),mN(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(257,`a`,27),mN(258,`po-theme`),lg(),mN(259,`.`),lg()()()(),Ml(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),mN(264,` p-hide-close`),ql(265,`br`),lg()()(),Ml(266,`td`,19)(267,`code`,20),mN(268,`boolean`),lg()(),Ml(269,`td`,21)(270,`p`)(271,`code`),mN(272,`false`),lg()()(),Ml(273,`td`,22)(274,`em`)(275,`strong`),mN(276,`(opcional)`),lg()(),Ml(277,`p`),mN(278,`Oculta o ícone de fechar do cabeçalho da modal.`),lg(),Ml(279,`blockquote`)(280,`p`),mN(281,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),Ml(282,`em`),mN(283,`ESC`),lg(),mN(284,`.`),lg()()()(),Ml(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),mN(289,` p-icon`),ql(290,`br`),lg()()(),Ml(291,`td`,19)(292,`code`,26),mN(293,`string `),lg(),Ml(294,`code`,28),mN(295,` TemplateRef<void>`),lg()(),Ml(296,`td`,21),mN(297,`-`),lg(),Ml(298,`td`,22)(299,`em`)(300,`strong`),mN(301,`(opcional)`),lg()(),Ml(302,`p`),mN(303,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),lg(),Ml(304,`p`),mN(305,`É possível usar qualquer um dos ícones da `),Ml(306,`a`,29),mN(307,`Biblioteca de ícones`),lg(),mN(308,`. conforme exemplo abaixo:`),lg(),Ml(309,`pre`)(310,`code`),mN(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),lg()(),Ml(312,`p`),mN(313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(314,`em`),mN(315,`Font Awesome`),lg(),mN(316,`, da seguinte forma:`),lg(),Ml(317,`pre`)(318,`code`),mN(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),lg()(),Ml(320,`p`),mN(321,`Outra opção seria a customização do ícone através do `),Ml(322,`code`),mN(323,`TemplateRef`),lg(),mN(324,`, conforme exemplo abaixo:`),lg(),Ml(325,`pre`)(326,`code`),mN(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()()()(),Ml(328,`tr`,15)(329,`td`,16)(330,`div`,17)(331,`span`,18),mN(332,` p-primary-action`),ql(333,`br`),lg()()(),Ml(334,`td`,19)(335,`code`,30),mN(336,`PoModalAction`),lg()(),Ml(337,`td`,21),mN(338,`-`),lg(),Ml(339,`td`,22)(340,`em`)(341,`strong`),mN(342,`(opcional)`),lg()(),Ml(343,`p`),mN(344,`Deve ser definido um objeto que implementa a interface `),Ml(345,`code`),mN(346,`PoModalAction`),lg(),mN(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),lg()()(),Ml(348,`tr`,15)(349,`td`,16)(350,`div`,17)(351,`span`,18),mN(352,` p-secondary-action`),ql(353,`br`),lg()()(),Ml(354,`td`,19)(355,`code`,30),mN(356,`PoModalAction`),lg()(),Ml(357,`td`,21),mN(358,`-`),lg(),Ml(359,`td`,22)(360,`em`)(361,`strong`),mN(362,`(opcional)`),lg()(),Ml(363,`p`),mN(364,`Deve ser definido um objeto que implementa a interface `),Ml(365,`code`),mN(366,`PoModalAction`),lg(),mN(367,` contendo a label e a função da segunda ação.`),lg()()(),Ml(368,`tr`,15)(369,`td`,16)(370,`div`,17)(371,`span`,18),mN(372,` p-size`),ql(373,`br`),lg()()(),Ml(374,`td`,19)(375,`code`,26),mN(376,`string`),lg()(),Ml(377,`td`,21),mN(378,`-`),lg(),Ml(379,`td`,22)(380,`p`),mN(381,`Define o tamanho da modal.`),lg(),Ml(382,`p`),mN(383,`Valores válidos:`),lg(),Ml(384,`ul`)(385,`li`)(386,`code`),mN(387,`sm`),lg(),mN(388,` (pequeno)`),lg(),Ml(389,`li`)(390,`code`),mN(391,`md`),lg(),mN(392,` (médio)`),lg(),Ml(393,`li`)(394,`code`),mN(395,`lg`),lg(),mN(396,` (grande)`),lg(),Ml(397,`li`)(398,`code`),mN(399,`xl`),lg(),mN(400,` (extra grande)`),lg(),Ml(401,`li`)(402,`code`),mN(403,`auto`),lg(),mN(404,` (automático)`),lg()(),Ml(405,`blockquote`)(406,`p`),mN(407,`Quando informado `),Ml(408,`code`),mN(409,`auto`),lg(),mN(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Ml(411,`code`),mN(412,`md`),lg(),mN(413,`.`),lg()()()(),Ml(414,`tr`,15)(415,`td`,16)(416,`div`,17)(417,`span`,18),mN(418,` p-title`),ql(419,`br`),lg()()(),Ml(420,`td`,19)(421,`code`,26),mN(422,`string`),lg()(),Ml(423,`td`,21),mN(424,`-`),lg(),Ml(425,`td`,22)(426,`p`),mN(427,`Título da modal.`),lg()()()(),Ml(428,`h3`,11),mN(429,`Métodos`),lg(),Ml(430,`table`,31)(431,`tr`,15)(432,`th`,32)(433,`div`,17)(434,`h4`)(435,`span`,18),mN(436,` close `),lg()()()()(),Ml(437,`tr`,22)(438,`td`,22)(439,`p`),mN(440,`Função para fechar a modal.`),lg()()()(),ql(441,`br`),Ml(442,`table`,31)(443,`tr`,15)(444,`th`,32)(445,`div`,17)(446,`h4`)(447,`span`,18),mN(448,` open `),lg()()()()(),Ml(449,`tr`,22)(450,`td`,22)(451,`p`),mN(452,`Função para abrir a modal.`),lg()()()(),ql(453,`br`),Ml(454,`h3`),mN(455,`Interfaces`),lg(),Ml(456,`h4`,33)(457,`code`,5),mN(458,`PoModalAction`),lg()(),Ml(459,`div`,2)(460,`p`),mN(461,`Interface que define os botões de ação do componente `),Ml(462,`code`),mN(463,`po-modal`),lg(),mN(464,`.`),lg()(),Ml(465,`h4`,11),mN(466,`Propriedades`),lg(),Ml(467,`table`,12)(468,`tr`,13)(469,`th`,14),mN(470,`Nome`),lg(),Ml(471,`th`,14),mN(472,`Tipo`),lg(),Ml(473,`th`,14),mN(474,`Descrição`),lg()(),Ml(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),mN(479,` action`),ql(480,`br`),lg()()(),Ml(481,`td`,19)(482,`code`,34),mN(483,`Function`),lg()(),Ml(484,`td`,22)(485,`p`),mN(486,`Função que será executada ao clicar sobre o botão.`),lg()()(),Ml(487,`tr`,15)(488,`td`,16)(489,`div`,17)(490,`span`,18),mN(491,` danger`),ql(492,`br`),lg()()(),Ml(493,`td`,19)(494,`code`,20),mN(495,`boolean`),lg()(),Ml(496,`td`,22)(497,`em`)(498,`strong`),mN(499,`(opcional)`),lg()(),Ml(500,`p`),mN(501,`Define a propriedade `),Ml(502,`code`),mN(503,`p-danger`),lg(),mN(504,` do botão.`),lg(),Ml(505,`blockquote`)(506,`p`),mN(507,`Caso a propriedade esteja definida como `),Ml(508,`code`),mN(509,`true`),lg(),mN(510,` em ambos os botões, apenas o botão primário receberá o `),Ml(511,`code`),mN(512,`p-danger`),lg(),mN(513,` como `),Ml(514,`code`),mN(515,`true`),lg(),mN(516,`.`),lg()()()(),Ml(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),mN(521,` disabled`),ql(522,`br`),lg()()(),Ml(523,`td`,19)(524,`code`,20),mN(525,`boolean`),lg()(),Ml(526,`td`,22)(527,`em`)(528,`strong`),mN(529,`(opcional)`),lg()(),Ml(530,`p`),mN(531,`Desabilita o botão impossibilitando que sua ação seja executada.`),lg()()(),Ml(532,`tr`,15)(533,`td`,16)(534,`div`,17)(535,`span`,18),mN(536,` icon`),ql(537,`br`),lg()()(),Ml(538,`td`,19)(539,`code`,26),mN(540,`string `),lg(),Ml(541,`code`,28),mN(542,` TemplateRef<void>`),lg()(),Ml(543,`td`,22)(544,`em`)(545,`strong`),mN(546,`(opcional)`),lg()(),Ml(547,`p`),mN(548,`Ícone exibido ao lado esquerdo do label do botão.`),lg(),Ml(549,`p`),mN(550,`É possível usar qualquer um dos ícones da `),Ml(551,`a`,29),mN(552,`Biblioteca de ícones`),lg(),mN(553,`, conforme exemplo:`),lg(),Ml(554,`pre`)(555,`code`),mN(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),lg()(),Ml(557,`p`),mN(558,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(559,`em`),mN(560,`Font Awesome`),lg(),mN(561,`, desde que a biblioteca
esteja carregada no projeto:`),lg(),Ml(562,`pre`)(563,`code`),mN(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),lg()(),Ml(565,`p`),mN(566,`Outra opção seria a customização do ícone através do `),Ml(567,`code`),mN(568,`TemplateRef`),lg(),mN(569,`, conforme exemplo abaixo:`),lg(),Ml(570,`pre`)(571,`code`),mN(572,`// Template HTML
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
`),lg()(),Ml(573,`blockquote`)(574,`p`),mN(575,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(576,`code`),mN(577,`font-size: inherit`),lg(),mN(578,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(579,`tr`,15)(580,`td`,16)(581,`div`,17)(582,`span`,18),mN(583,` label`),ql(584,`br`),lg()()(),Ml(585,`td`,19)(586,`code`,26),mN(587,`string`),lg()(),Ml(588,`td`,22)(589,`p`),mN(590,`Rótulo do botão.`),lg()()(),Ml(591,`tr`,15)(592,`td`,16)(593,`div`,17)(594,`span`,18),mN(595,` loading`),ql(596,`br`),lg()()(),Ml(597,`td`,19)(598,`code`,20),mN(599,`boolean`),lg()(),Ml(600,`td`,22)(601,`em`)(602,`strong`),mN(603,`(opcional)`),lg()(),Ml(604,`p`),mN(605,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Modal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-modal-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-modal-basic-view`)(6,`sample-po-modal-labs-view`)(7,`sample-po-modal-fruits-salad-view`),lg()()()),l&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,me,ce,ge,be],encapsulation:2,changeDetection:1})}return a})()}];var Se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[NL.forChild(ke),NL]})}return a})();var rt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[ar,Se]})}return a})();export{rt as DocPoModalModule};