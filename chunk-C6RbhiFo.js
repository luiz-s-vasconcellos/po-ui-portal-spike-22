import{$r as Zn,Bn as zu,Br as Sx,Bt as b3,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Qt as ea,Ri as nu,Si as iu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,nn as goe,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,vn as p5,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,o){if(l&1){let d=Sx();jc(0,`po-modal`,1,0),iO(2,` We are TOTVS!!! `),wg(),jc(3,`po-button`,2),mt(`p-click`,function(){y_(d);let i=Fx(1);return v_(i.open())}),wg()}},dependencies:[ni,ea],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Modal Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-modal-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,fe,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,o){if(l&1&&iu(ea,7),l&2){let d;vo(d=_o())&&(o.poModal=d.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Sx();jc(0,`po-modal`,1),iO(1),wg(),jc(2,`po-button`,2),mt(`p-click`,function(){return o.openModal()}),wg(),nu(3,`po-divider`),jc(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.title,i)||(o.title=i),v_(i)}),wg(),jc(8,`po-select`,5),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.icon,i)||(o.icon=i),v_(i)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.content,i)||(o.content=i),v_(i)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.primaryActionLabel,i)||(o.primaryActionLabel=i),v_(i)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.primaryActionIcon,i)||(o.primaryActionIcon=i),v_(i)}),wg(),jc(12,`po-checkbox-group`,9),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.primaryActionProperties,i)||(o.primaryActionProperties=i),v_(i)}),wg(),jc(13,`po-input`,10),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),v_(i)}),wg(),jc(14,`po-input`,11),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),v_(i)}),wg(),jc(15,`po-checkbox-group`,12),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),v_(i)}),wg(),jc(16,`po-radio-group`,13),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.size,i)||(o.size=i),v_(i)}),wg(),jc(17,`po-checkbox-group`,14),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.properties,i)||(o.properties=i),v_(i)}),wg(),jc(18,`po-radio-group`,15),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.componentsSize,i)||(o.componentsSize=i),v_(i)}),wg()(),jc(19,`div`,3)(20,`po-button`,16),mt(`p-click`,function(){return o.restore()}),wg()()()}if(l&2){let d=Fx(5);jE(`p-click-out`,o.properties.includes(`click-out`))(`p-components-size`,o.componentsSize)(`p-hide-close`,o.properties.includes(`hide-close`))(`p-primary-action`,o.primaryAction)(`p-secondary-action`,o.secondaryActionLabel?o.secondaryAction:null)(`p-size`,o.size)(`p-title`,o.title)(`p-icon`,o.icon),rg(),Ag(` `,o.content,`
`),rg(),jE(`p-disabled`,d.form.invalid),rg(5),ib(`ngModel`,o.title),t0(),rg(),ib(`ngModel`,o.icon),jE(`p-options`,o.iconOptions),t0(),rg(),ib(`ngModel`,o.content),t0(),rg(),ib(`ngModel`,o.primaryActionLabel),t0(),rg(),ib(`ngModel`,o.primaryActionIcon),t0(),rg(),ib(`ngModel`,o.primaryActionProperties),jE(`p-options`,o.primaryActionOptions),t0(),rg(),ib(`ngModel`,o.secondaryActionLabel),t0(),rg(),ib(`ngModel`,o.secondaryActionIcon),t0(),rg(),ib(`ngModel`,o.secondaryActionProperties),jE(`p-options`,o.secondaryActionOptions),t0(),rg(),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0(),rg(),ib(`ngModel`,o.properties),jE(`p-options`,o.propertiesOptions),t0(),rg(),ib(`ngModel`,o.componentsSize),jE(`p-options`,o.componentsSizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,moe,ea],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Modal Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-modal
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-modal-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return a})();var Pe=[`optionsForm`];var ue=(()=>{class a{poNotification=p(zu);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,o){if(l&1&&iu(Pe,7)(ea,7),l&2){let d;vo(d=_o())&&(o.form=d.first),vo(d=_o())&&(o.poModal=d.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,o){if(l&1){let d=Sx();jc(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.fruits,i)||(o.fruits=i),v_(i)}),wg()(),jc(5,`div`,2)(6,`po-combo`,4),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.accompaniment,i)||(o.accompaniment=i),v_(i)}),wg()(),jc(7,`div`,2)(8,`po-textarea`,5),JN(),ob(`ngModelChange`,function(i){return y_(d),sO(o.orderDetail,i)||(o.orderDetail=i),v_(i)}),wg()()(),jc(9,`po-modal-footer`,6)(10,`po-button`,7),mt(`p-click`,function(){return o.closeModal()}),wg(),jc(11,`po-button`,8),mt(`p-click`,function(){return o.restore()}),wg(),jc(12,`po-button`,9),mt(`p-click`,function(){return o.confirmFruits()}),wg()()(),jc(13,`po-button`,10),mt(`p-click`,function(){return o.openQuestionnaire()}),wg()}l&2&&(jE(`p-primary-action`,o.confirm)(`p-secondary-action`,o.close),rg(4),ib(`ngModel`,o.fruits),jE(`p-options`,o.fruitsOptions),t0(),rg(2),ib(`ngModel`,o.accompaniment),jE(`p-options`,o.accompanimentOptions),t0(),rg(2),ib(`ngModel`,o.orderDetail),t0(),rg(),jE(`p-disabled-align`,!1))},dependencies:[wK,CK,EK,TF,EF,ni,m5,p5,goe,ea,b3],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Modal - Fruits Salad`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-modal-fruits-salad`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:606,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoModalModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-modal`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoModalComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-modal`),wg(),iO(17,` é utilizado para incluir conteúdos rápidos e informativos.`),wg(),jc(18,`p`),iO(19,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),wg(),jc(20,`p`),iO(21,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),jc(22,`code`),iO(23,`po-chart`),wg(),iO(24,`,
`),jc(25,`code`),iO(26,`po-table`),wg(),iO(27,` e os demais componentes do PO.`),wg(),jc(28,`p`),iO(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),jc(30,`em`),iO(31,`danger`),wg(),iO(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),jc(33,`a`,6)(34,`code`),iO(35,`PoModalFooter`),wg()(),iO(36,`.`),wg(),jc(37,`blockquote`)(38,`p`),iO(39,`É possível fechar a modal através da tecla `),jc(40,`em`),iO(41,`ESC`),wg(),iO(42,`, quando a propriedade `),jc(43,`code`),iO(44,`p-hide-close`),wg(),iO(45,` não estiver habilitada.`),wg()(),jc(46,`h4`),iO(47,`Tokens customizáveis`),wg(),jc(48,`p`),iO(49,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(50,`blockquote`)(51,`p`),iO(52,`Para maiores informações, acesse o guia `),jc(53,`a`,7),iO(54,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(55,`.`),wg()(),jc(56,`table`)(57,`thead`)(58,`tr`)(59,`th`),iO(60,`Propriedade`),wg(),jc(61,`th`),iO(62,`Descrição`),wg(),jc(63,`th`),iO(64,`Valor Padrão`),wg()()(),jc(65,`tbody`)(66,`tr`)(67,`td`)(68,`strong`),iO(69,`Default Values`),wg()(),nu(70,`td`)(71,`td`),wg(),jc(72,`tr`)(73,`td`)(74,`code`),iO(75,`--border-radius`),wg(),iO(76,` \xA0`),wg(),jc(77,`td`),iO(78,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(79,`td`)(80,`code`),iO(81,`var(--border-radius-md)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),iO(85,`--border-width`),wg(),iO(86,` \xA0`),wg(),jc(87,`td`),iO(88,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--border-width-sm)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--border-color`),wg(),iO(96,` \xA0`),wg(),jc(97,`td`),iO(98,`Cor da borda`),wg(),jc(99,`td`)(100,`code`),iO(101,`var(--color-neutral-light-20)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),iO(105,`--background`),wg(),iO(106,` \xA0`),wg(),jc(107,`td`),iO(108,`Cor de background`),wg(),jc(109,`td`)(110,`code`),iO(111,`var(--color-neutral-light-00)`),wg()()(),jc(112,`tr`)(113,`td`)(114,`code`),iO(115,`--shadow`),wg(),iO(116,` \xA0`),wg(),jc(117,`td`),iO(118,`Contém o valor da sombra do elemento`),wg(),jc(119,`td`)(120,`code`),iO(121,`var(--shadow-md)`),wg()()(),jc(122,`tr`)(123,`td`)(124,`code`),iO(125,`--color-overlay`),wg(),iO(126,` \xA0`),wg(),jc(127,`td`),iO(128,`Cor da camada visual temporária`),wg(),jc(129,`td`)(130,`code`),iO(131,`var(--color-neutral-dark-80)`),wg()()(),jc(132,`tr`)(133,`td`)(134,`code`),iO(135,`--opacity-overlay`),wg(),iO(136,` \xA0`),wg(),jc(137,`td`),iO(138,`Opacidade da camada visual temporária \xA0`),wg(),jc(139,`td`)(140,`code`),iO(141,`0.7`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),iO(145,`--color-divider`),wg(),iO(146,` \xA0`),wg(),jc(147,`td`),iO(148,`Cor das divisões do modal`),wg(),jc(149,`td`)(150,`code`),iO(151,`var(--color-neutral-light-20)`),wg()()(),jc(152,`tr`)(153,`td`)(154,`code`),iO(155,`--padding-header`),wg(),iO(156,` \xA0`),wg(),jc(157,`td`),iO(158,`Padding do header do modal`),wg(),jc(159,`td`)(160,`code`),iO(161,`var(--spacing-sm) var(--spacing-md)`),wg()()(),jc(162,`tr`)(163,`td`)(164,`code`),iO(165,`--padding-body`),wg(),iO(166,` \xA0`),wg(),jc(167,`td`),iO(168,`Padding do corpo do modal`),wg(),jc(169,`td`)(170,`code`),iO(171,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),wg()()()()()(),jc(172,`div`,8)(173,`h4`,9),iO(174,`Seletor`),wg(),jc(175,`pre`,10),iO(176,`<po-modal
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
`),wg()(),jc(177,`h4`,11),iO(178,`Propriedades`),wg(),jc(179,`table`,12)(180,`tr`,13)(181,`th`,14),iO(182,`Nome`),wg(),jc(183,`th`,14),iO(184,`Tipo`),wg(),jc(185,`th`,14),iO(186,`Padrão`),wg(),jc(187,`th`,14),iO(188,`Descrição`),wg()(),jc(189,`tr`,15)(190,`td`,16)(191,`div`,17)(192,`span`,18),iO(193,`p-click-out`),nu(194,`br`),wg()()(),jc(195,`td`,19)(196,`code`,20),iO(197,`boolean`),wg()(),jc(198,`td`,21),iO(199,`-`),wg(),jc(200,`td`,22)(201,`em`)(202,`strong`),iO(203,`(opcional)`),wg()(),jc(204,`p`),iO(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),jc(206,`code`),iO(207,`true`),wg(),iO(208,` para ativar o fechamento ao clicar fora da modal.`),wg()()(),jc(209,`tr`,15)(210,`td`,16)(211,`div`,23)(212,`span`,24),iO(213,` (p-close)`),nu(214,`br`),wg()()(),jc(215,`td`,19)(216,`code`,25),iO(217,`EventEmitter`),wg()(),jc(218,`td`,21),iO(219,`-`),wg(),jc(220,`td`,22)(221,`p`),iO(222,`Evento disparado ao fechar o modal.`),wg()()(),jc(223,`tr`,15)(224,`td`,16)(225,`div`,17)(226,`span`,18),iO(227,` p-components-size`),nu(228,`br`),wg()()(),jc(229,`td`,19)(230,`code`,26),iO(231,`string`),wg()(),jc(232,`td`,21)(233,`p`)(234,`code`),iO(235,`medium`),wg()()(),jc(236,`td`,22)(237,`em`)(238,`strong`),iO(239,`(opcional)`),wg()(),jc(240,`p`),iO(241,`Define o tamanho dos componentes de formulário no modal:`),wg(),jc(242,`ul`)(243,`li`)(244,`code`),iO(245,`small`),wg(),iO(246,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(247,`li`)(248,`code`),iO(249,`medium`),wg(),iO(250,`: aplica a medida medium de cada componente.`),wg()(),jc(251,`blockquote`)(252,`p`),iO(253,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(254,`code`),iO(255,`medium`),wg(),iO(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(257,`a`,27),iO(258,`po-theme`),wg(),iO(259,`.`),wg()()()(),jc(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),iO(264,` p-hide-close`),nu(265,`br`),wg()()(),jc(266,`td`,19)(267,`code`,20),iO(268,`boolean`),wg()(),jc(269,`td`,21)(270,`p`)(271,`code`),iO(272,`false`),wg()()(),jc(273,`td`,22)(274,`em`)(275,`strong`),iO(276,`(opcional)`),wg()(),jc(277,`p`),iO(278,`Oculta o ícone de fechar do cabeçalho da modal.`),wg(),jc(279,`blockquote`)(280,`p`),iO(281,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),jc(282,`em`),iO(283,`ESC`),wg(),iO(284,`.`),wg()()()(),jc(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),iO(289,` p-icon`),nu(290,`br`),wg()()(),jc(291,`td`,19)(292,`code`,26),iO(293,`string `),wg(),jc(294,`code`,28),iO(295,` TemplateRef<void>`),wg()(),jc(296,`td`,21),iO(297,`-`),wg(),jc(298,`td`,22)(299,`em`)(300,`strong`),iO(301,`(opcional)`),wg()(),jc(302,`p`),iO(303,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),wg(),jc(304,`p`),iO(305,`É possível usar qualquer um dos ícones da `),jc(306,`a`,29),iO(307,`Biblioteca de ícones`),wg(),iO(308,`. conforme exemplo abaixo:`),wg(),jc(309,`pre`)(310,`code`),iO(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),wg()(),jc(312,`p`),iO(313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(314,`em`),iO(315,`Font Awesome`),wg(),iO(316,`, da seguinte forma:`),wg(),jc(317,`pre`)(318,`code`),iO(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),wg()(),jc(320,`p`),iO(321,`Outra opção seria a customização do ícone através do `),jc(322,`code`),iO(323,`TemplateRef`),wg(),iO(324,`, conforme exemplo abaixo:`),wg(),jc(325,`pre`)(326,`code`),iO(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()()()(),jc(328,`tr`,15)(329,`td`,16)(330,`div`,17)(331,`span`,18),iO(332,` p-primary-action`),nu(333,`br`),wg()()(),jc(334,`td`,19)(335,`code`,30),iO(336,`PoModalAction`),wg()(),jc(337,`td`,21),iO(338,`-`),wg(),jc(339,`td`,22)(340,`em`)(341,`strong`),iO(342,`(opcional)`),wg()(),jc(343,`p`),iO(344,`Deve ser definido um objeto que implementa a interface `),jc(345,`code`),iO(346,`PoModalAction`),wg(),iO(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),wg()()(),jc(348,`tr`,15)(349,`td`,16)(350,`div`,17)(351,`span`,18),iO(352,` p-secondary-action`),nu(353,`br`),wg()()(),jc(354,`td`,19)(355,`code`,30),iO(356,`PoModalAction`),wg()(),jc(357,`td`,21),iO(358,`-`),wg(),jc(359,`td`,22)(360,`em`)(361,`strong`),iO(362,`(opcional)`),wg()(),jc(363,`p`),iO(364,`Deve ser definido um objeto que implementa a interface `),jc(365,`code`),iO(366,`PoModalAction`),wg(),iO(367,` contendo a label e a função da segunda ação.`),wg()()(),jc(368,`tr`,15)(369,`td`,16)(370,`div`,17)(371,`span`,18),iO(372,` p-size`),nu(373,`br`),wg()()(),jc(374,`td`,19)(375,`code`,26),iO(376,`string`),wg()(),jc(377,`td`,21),iO(378,`-`),wg(),jc(379,`td`,22)(380,`p`),iO(381,`Define o tamanho da modal.`),wg(),jc(382,`p`),iO(383,`Valores válidos:`),wg(),jc(384,`ul`)(385,`li`)(386,`code`),iO(387,`sm`),wg(),iO(388,` (pequeno)`),wg(),jc(389,`li`)(390,`code`),iO(391,`md`),wg(),iO(392,` (médio)`),wg(),jc(393,`li`)(394,`code`),iO(395,`lg`),wg(),iO(396,` (grande)`),wg(),jc(397,`li`)(398,`code`),iO(399,`xl`),wg(),iO(400,` (extra grande)`),wg(),jc(401,`li`)(402,`code`),iO(403,`auto`),wg(),iO(404,` (automático)`),wg()(),jc(405,`blockquote`)(406,`p`),iO(407,`Quando informado `),jc(408,`code`),iO(409,`auto`),wg(),iO(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),jc(411,`code`),iO(412,`md`),wg(),iO(413,`.`),wg()()()(),jc(414,`tr`,15)(415,`td`,16)(416,`div`,17)(417,`span`,18),iO(418,` p-title`),nu(419,`br`),wg()()(),jc(420,`td`,19)(421,`code`,26),iO(422,`string`),wg()(),jc(423,`td`,21),iO(424,`-`),wg(),jc(425,`td`,22)(426,`p`),iO(427,`Título da modal.`),wg()()()(),jc(428,`h3`,11),iO(429,`Métodos`),wg(),jc(430,`table`,31)(431,`tr`,15)(432,`th`,32)(433,`div`,17)(434,`h4`)(435,`span`,18),iO(436,` close `),wg()()()()(),jc(437,`tr`,22)(438,`td`,22)(439,`p`),iO(440,`Função para fechar a modal.`),wg()()()(),nu(441,`br`),jc(442,`table`,31)(443,`tr`,15)(444,`th`,32)(445,`div`,17)(446,`h4`)(447,`span`,18),iO(448,` open `),wg()()()()(),jc(449,`tr`,22)(450,`td`,22)(451,`p`),iO(452,`Função para abrir a modal.`),wg()()()(),nu(453,`br`),jc(454,`h3`),iO(455,`Interfaces`),wg(),jc(456,`h4`,33)(457,`code`,5),iO(458,`PoModalAction`),wg()(),jc(459,`div`,2)(460,`p`),iO(461,`Interface que define os botões de ação do componente `),jc(462,`code`),iO(463,`po-modal`),wg(),iO(464,`.`),wg()(),jc(465,`h4`,11),iO(466,`Propriedades`),wg(),jc(467,`table`,12)(468,`tr`,13)(469,`th`,14),iO(470,`Nome`),wg(),jc(471,`th`,14),iO(472,`Tipo`),wg(),jc(473,`th`,14),iO(474,`Descrição`),wg()(),jc(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),iO(479,` action`),nu(480,`br`),wg()()(),jc(481,`td`,19)(482,`code`,34),iO(483,`Function`),wg()(),jc(484,`td`,22)(485,`p`),iO(486,`Função que será executada ao clicar sobre o botão.`),wg()()(),jc(487,`tr`,15)(488,`td`,16)(489,`div`,17)(490,`span`,18),iO(491,` danger`),nu(492,`br`),wg()()(),jc(493,`td`,19)(494,`code`,20),iO(495,`boolean`),wg()(),jc(496,`td`,22)(497,`em`)(498,`strong`),iO(499,`(opcional)`),wg()(),jc(500,`p`),iO(501,`Define a propriedade `),jc(502,`code`),iO(503,`p-danger`),wg(),iO(504,` do botão.`),wg(),jc(505,`blockquote`)(506,`p`),iO(507,`Caso a propriedade esteja definida como `),jc(508,`code`),iO(509,`true`),wg(),iO(510,` em ambos os botões, apenas o botão primário receberá o `),jc(511,`code`),iO(512,`p-danger`),wg(),iO(513,` como `),jc(514,`code`),iO(515,`true`),wg(),iO(516,`.`),wg()()()(),jc(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),iO(521,` disabled`),nu(522,`br`),wg()()(),jc(523,`td`,19)(524,`code`,20),iO(525,`boolean`),wg()(),jc(526,`td`,22)(527,`em`)(528,`strong`),iO(529,`(opcional)`),wg()(),jc(530,`p`),iO(531,`Desabilita o botão impossibilitando que sua ação seja executada.`),wg()()(),jc(532,`tr`,15)(533,`td`,16)(534,`div`,17)(535,`span`,18),iO(536,` icon`),nu(537,`br`),wg()()(),jc(538,`td`,19)(539,`code`,26),iO(540,`string `),wg(),jc(541,`code`,28),iO(542,` TemplateRef<void>`),wg()(),jc(543,`td`,22)(544,`em`)(545,`strong`),iO(546,`(opcional)`),wg()(),jc(547,`p`),iO(548,`Ícone exibido ao lado esquerdo do label do botão.`),wg(),jc(549,`p`),iO(550,`É possível usar qualquer um dos ícones da `),jc(551,`a`,29),iO(552,`Biblioteca de ícones`),wg(),iO(553,`, conforme exemplo:`),wg(),jc(554,`pre`)(555,`code`),iO(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),wg()(),jc(557,`p`),iO(558,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(559,`em`),iO(560,`Font Awesome`),wg(),iO(561,`, desde que a biblioteca
esteja carregada no projeto:`),wg(),jc(562,`pre`)(563,`code`),iO(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),wg()(),jc(565,`p`),iO(566,`Outra opção seria a customização do ícone através do `),jc(567,`code`),iO(568,`TemplateRef`),wg(),iO(569,`, conforme exemplo abaixo:`),wg(),jc(570,`pre`)(571,`code`),iO(572,`// Template HTML
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
`),wg()(),jc(573,`blockquote`)(574,`p`),iO(575,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(576,`code`),iO(577,`font-size: inherit`),wg(),iO(578,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(579,`tr`,15)(580,`td`,16)(581,`div`,17)(582,`span`,18),iO(583,` label`),nu(584,`br`),wg()()(),jc(585,`td`,19)(586,`code`,26),iO(587,`string`),wg()(),jc(588,`td`,22)(589,`p`),iO(590,`Rótulo do botão.`),wg()()(),jc(591,`tr`,15)(592,`td`,16)(593,`div`,17)(594,`span`,18),iO(595,` loading`),nu(596,`br`),wg()()(),jc(597,`td`,19)(598,`code`,20),iO(599,`boolean`),wg()(),jc(600,`td`,22)(601,`em`)(602,`strong`),iO(603,`(opcional)`),wg()(),jc(604,`p`),iO(605,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Modal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-modal-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-modal-basic-view`)(6,`sample-po-modal-labs-view`)(7,`sample-po-modal-fruits-salad-view`),wg()()()),l&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,me,ce,ge,be],encapsulation:2,changeDetection:1})}return a})()}];var Se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue$1({imports:[C1.forChild(ke),C1]})}return a})();var rt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue$1({imports:[Ta,Se]})}return a})();export{rt as DocPoModalModule};