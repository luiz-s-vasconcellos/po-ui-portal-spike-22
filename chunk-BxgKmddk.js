import{$i as pt,Br as Qn,Ci as fo,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Vt as doe,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue$1,ci as b9,ct as Ou,di as cE,dr as Hn,fn as ni,gn as poe,i as _a,in as kte,ji as ho,k as D4,ki as he,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,qt as g3,r as Ta,rr as DN,si as aN,ua as ug,un as n4,wr as Kc,zi as kL}from"./main-AGY457H2.js";var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,o){if(l&1){let d=Bx();Ac(0,`po-modal`,1,0),vN(2,` We are TOTVS!!! `),ug(),Ac(3,`po-button`,2),pt(`p-click`,function(){Jv(d);let i=Zx(1);return e_(i.open())}),ug()}},dependencies:[ni,ta],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Modal Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-modal-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,fe,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,o){if(l&1&&Xc(ta,7),l&2){let d;fo(d=ho())&&(o.poModal=d.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Bx();Ac(0,`po-modal`,1),vN(1),ug(),Ac(2,`po-button`,2),pt(`p-click`,function(){return o.openModal()}),ug(),Kc(3,`po-divider`),Ac(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),RE(`ngModelChange`,function(i){return Jv(d),DN(o.title,i)||(o.title=i),e_(i)}),ug(),p0(),Ac(8,`po-select`,5),RE(`ngModelChange`,function(i){return Jv(d),DN(o.icon,i)||(o.icon=i),e_(i)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(i){return Jv(d),DN(o.content,i)||(o.content=i),e_(i)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(i){return Jv(d),DN(o.primaryActionLabel,i)||(o.primaryActionLabel=i),e_(i)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(i){return Jv(d),DN(o.primaryActionIcon,i)||(o.primaryActionIcon=i),e_(i)}),ug(),p0(),Ac(12,`po-checkbox-group`,9),RE(`ngModelChange`,function(i){return Jv(d),DN(o.primaryActionProperties,i)||(o.primaryActionProperties=i),e_(i)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(i){return Jv(d),DN(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),e_(i)}),ug(),p0(),Ac(14,`po-input`,11),RE(`ngModelChange`,function(i){return Jv(d),DN(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),e_(i)}),ug(),p0(),Ac(15,`po-checkbox-group`,12),RE(`ngModelChange`,function(i){return Jv(d),DN(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),e_(i)}),ug(),p0(),Ac(16,`po-radio-group`,13),RE(`ngModelChange`,function(i){return Jv(d),DN(o.size,i)||(o.size=i),e_(i)}),ug(),p0(),Ac(17,`po-checkbox-group`,14),RE(`ngModelChange`,function(i){return Jv(d),DN(o.properties,i)||(o.properties=i),e_(i)}),ug(),p0(),Ac(18,`po-radio-group`,15),RE(`ngModelChange`,function(i){return Jv(d),DN(o.componentsSize,i)||(o.componentsSize=i),e_(i)}),ug(),p0(),ug(),Ac(19,`div`,3)(20,`po-button`,16),pt(`p-click`,function(){return o.restore()}),ug()()()}if(l&2){let d=Zx(5);cE(`p-click-out`,o.properties.includes(`click-out`))(`p-components-size`,o.componentsSize)(`p-hide-close`,o.properties.includes(`hide-close`))(`p-primary-action`,o.primaryAction)(`p-secondary-action`,o.secondaryActionLabel?o.secondaryAction:null)(`p-size`,o.size)(`p-title`,o.title)(`p-icon`,o.icon),Hp(),mg(` `,o.content,`
`),Hp(),cE(`p-disabled`,d.form.invalid),Hp(5),TE(`ngModel`,o.title),m0(),Hp(),TE(`ngModel`,o.icon),cE(`p-options`,o.iconOptions),m0(),Hp(),TE(`ngModel`,o.content),m0(),Hp(),TE(`ngModel`,o.primaryActionLabel),m0(),Hp(),TE(`ngModel`,o.primaryActionIcon),m0(),Hp(),TE(`ngModel`,o.primaryActionProperties),cE(`p-options`,o.primaryActionOptions),m0(),Hp(),TE(`ngModel`,o.secondaryActionLabel),m0(),Hp(),TE(`ngModel`,o.secondaryActionIcon),m0(),Hp(),TE(`ngModel`,o.secondaryActionProperties),cE(`p-options`,o.secondaryActionOptions),m0(),Hp(),TE(`ngModel`,o.size),cE(`p-options`,o.sizeOptions),m0(),Hp(),TE(`ngModel`,o.properties),cE(`p-options`,o.propertiesOptions),m0(),Hp(),TE(`ngModel`,o.componentsSize),cE(`p-options`,o.componentsSizeOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,poe,ta],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Modal Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-modal
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-modal-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,se],encapsulation:2,changeDetection:1})}return a})();var Pe=[`optionsForm`];var ue=(()=>{class a{poNotification=f(Ou);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,o){if(l&1&&Xc(Pe,7)(ta,7),l&2){let d;fo(d=ho())&&(o.form=d.first),fo(d=ho())&&(o.poModal=d.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,o){if(l&1){let d=Bx();Ac(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),RE(`ngModelChange`,function(i){return Jv(d),DN(o.fruits,i)||(o.fruits=i),e_(i)}),ug(),p0(),ug(),Ac(5,`div`,2)(6,`po-combo`,4),RE(`ngModelChange`,function(i){return Jv(d),DN(o.accompaniment,i)||(o.accompaniment=i),e_(i)}),ug(),p0(),ug(),Ac(7,`div`,2)(8,`po-textarea`,5),RE(`ngModelChange`,function(i){return Jv(d),DN(o.orderDetail,i)||(o.orderDetail=i),e_(i)}),ug(),p0(),ug()(),Ac(9,`po-modal-footer`,6)(10,`po-button`,7),pt(`p-click`,function(){return o.closeModal()}),ug(),Ac(11,`po-button`,8),pt(`p-click`,function(){return o.restore()}),ug(),Ac(12,`po-button`,9),pt(`p-click`,function(){return o.confirmFruits()}),ug()()(),Ac(13,`po-button`,10),pt(`p-click`,function(){return o.openQuestionnaire()}),ug()}l&2&&(cE(`p-primary-action`,o.confirm)(`p-secondary-action`,o.close),Hp(4),TE(`ngModel`,o.fruits),cE(`p-options`,o.fruitsOptions),m0(),Hp(2),TE(`ngModel`,o.accompaniment),cE(`p-options`,o.accompanimentOptions),m0(),Hp(2),TE(`ngModel`,o.orderDetail),m0(),Hp(),cE(`p-disabled-align`,!1))},dependencies:[b9,D9,C9,BP,LP,ni,l4,n4,doe,ta,g3],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Modal - Fruits Salad`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-modal-fruits-salad`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ue],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:606,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoModalModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-modal`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoModalComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-modal`),ug(),vN(17,` é utilizado para incluir conteúdos rápidos e informativos.`),ug(),Ac(18,`p`),vN(19,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),ug(),Ac(20,`p`),vN(21,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),Ac(22,`code`),vN(23,`po-chart`),ug(),vN(24,`,
`),Ac(25,`code`),vN(26,`po-table`),ug(),vN(27,` e os demais componentes do PO.`),ug(),Ac(28,`p`),vN(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Ac(30,`em`),vN(31,`danger`),ug(),vN(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Ac(33,`a`,6)(34,`code`),vN(35,`PoModalFooter`),ug()(),vN(36,`.`),ug(),Ac(37,`blockquote`)(38,`p`),vN(39,`É possível fechar a modal através da tecla `),Ac(40,`em`),vN(41,`ESC`),ug(),vN(42,`, quando a propriedade `),Ac(43,`code`),vN(44,`p-hide-close`),ug(),vN(45,` não estiver habilitada.`),ug()(),Ac(46,`h4`),vN(47,`Tokens customizáveis`),ug(),Ac(48,`p`),vN(49,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(50,`blockquote`)(51,`p`),vN(52,`Para maiores informações, acesse o guia `),Ac(53,`a`,7),vN(54,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(55,`.`),ug()(),Ac(56,`table`)(57,`thead`)(58,`tr`)(59,`th`),vN(60,`Propriedade`),ug(),Ac(61,`th`),vN(62,`Descrição`),ug(),Ac(63,`th`),vN(64,`Valor Padrão`),ug()()(),Ac(65,`tbody`)(66,`tr`)(67,`td`)(68,`strong`),vN(69,`Default Values`),ug()(),Kc(70,`td`)(71,`td`),ug(),Ac(72,`tr`)(73,`td`)(74,`code`),vN(75,`--border-radius`),ug(),vN(76,` \xA0`),ug(),Ac(77,`td`),vN(78,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(79,`td`)(80,`code`),vN(81,`var(--border-radius-md)`),ug()()(),Ac(82,`tr`)(83,`td`)(84,`code`),vN(85,`--border-width`),ug(),vN(86,` \xA0`),ug(),Ac(87,`td`),vN(88,`Contém o valor da largura dos cantos do elemento\xA0`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--border-width-sm)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--border-color`),ug(),vN(96,` \xA0`),ug(),Ac(97,`td`),vN(98,`Cor da borda`),ug(),Ac(99,`td`)(100,`code`),vN(101,`var(--color-neutral-light-20)`),ug()()(),Ac(102,`tr`)(103,`td`)(104,`code`),vN(105,`--background`),ug(),vN(106,` \xA0`),ug(),Ac(107,`td`),vN(108,`Cor de background`),ug(),Ac(109,`td`)(110,`code`),vN(111,`var(--color-neutral-light-00)`),ug()()(),Ac(112,`tr`)(113,`td`)(114,`code`),vN(115,`--shadow`),ug(),vN(116,` \xA0`),ug(),Ac(117,`td`),vN(118,`Contém o valor da sombra do elemento`),ug(),Ac(119,`td`)(120,`code`),vN(121,`var(--shadow-md)`),ug()()(),Ac(122,`tr`)(123,`td`)(124,`code`),vN(125,`--color-overlay`),ug(),vN(126,` \xA0`),ug(),Ac(127,`td`),vN(128,`Cor da camada visual temporária`),ug(),Ac(129,`td`)(130,`code`),vN(131,`var(--color-neutral-dark-80)`),ug()()(),Ac(132,`tr`)(133,`td`)(134,`code`),vN(135,`--opacity-overlay`),ug(),vN(136,` \xA0`),ug(),Ac(137,`td`),vN(138,`Opacidade da camada visual temporária \xA0`),ug(),Ac(139,`td`)(140,`code`),vN(141,`0.7`),ug()()(),Ac(142,`tr`)(143,`td`)(144,`code`),vN(145,`--color-divider`),ug(),vN(146,` \xA0`),ug(),Ac(147,`td`),vN(148,`Cor das divisões do modal`),ug(),Ac(149,`td`)(150,`code`),vN(151,`var(--color-neutral-light-20)`),ug()()(),Ac(152,`tr`)(153,`td`)(154,`code`),vN(155,`--padding-header`),ug(),vN(156,` \xA0`),ug(),Ac(157,`td`),vN(158,`Padding do header do modal`),ug(),Ac(159,`td`)(160,`code`),vN(161,`var(--spacing-sm) var(--spacing-md)`),ug()()(),Ac(162,`tr`)(163,`td`)(164,`code`),vN(165,`--padding-body`),ug(),vN(166,` \xA0`),ug(),Ac(167,`td`),vN(168,`Padding do corpo do modal`),ug(),Ac(169,`td`)(170,`code`),vN(171,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),ug()()()()()(),Ac(172,`div`,8)(173,`h4`,9),vN(174,`Seletor`),ug(),Ac(175,`pre`,10),vN(176,`<po-modal
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
`),ug()(),Ac(177,`h4`,11),vN(178,`Propriedades`),ug(),Ac(179,`table`,12)(180,`tr`,13)(181,`th`,14),vN(182,`Nome`),ug(),Ac(183,`th`,14),vN(184,`Tipo`),ug(),Ac(185,`th`,14),vN(186,`Padrão`),ug(),Ac(187,`th`,14),vN(188,`Descrição`),ug()(),Ac(189,`tr`,15)(190,`td`,16)(191,`div`,17)(192,`span`,18),vN(193,`p-click-out`),Kc(194,`br`),ug()()(),Ac(195,`td`,19)(196,`code`,20),vN(197,`boolean`),ug()(),Ac(198,`td`,21),vN(199,`-`),ug(),Ac(200,`td`,22)(201,`em`)(202,`strong`),vN(203,`(opcional)`),ug()(),Ac(204,`p`),vN(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Ac(206,`code`),vN(207,`true`),ug(),vN(208,` para ativar o fechamento ao clicar fora da modal.`),ug()()(),Ac(209,`tr`,15)(210,`td`,16)(211,`div`,23)(212,`span`,24),vN(213,` (p-close)`),Kc(214,`br`),ug()()(),Ac(215,`td`,19)(216,`code`,25),vN(217,`EventEmitter`),ug()(),Ac(218,`td`,21),vN(219,`-`),ug(),Ac(220,`td`,22)(221,`p`),vN(222,`Evento disparado ao fechar o modal.`),ug()()(),Ac(223,`tr`,15)(224,`td`,16)(225,`div`,17)(226,`span`,18),vN(227,` p-components-size`),Kc(228,`br`),ug()()(),Ac(229,`td`,19)(230,`code`,26),vN(231,`string`),ug()(),Ac(232,`td`,21)(233,`p`)(234,`code`),vN(235,`medium`),ug()()(),Ac(236,`td`,22)(237,`em`)(238,`strong`),vN(239,`(opcional)`),ug()(),Ac(240,`p`),vN(241,`Define o tamanho dos componentes de formulário no modal:`),ug(),Ac(242,`ul`)(243,`li`)(244,`code`),vN(245,`small`),ug(),vN(246,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(247,`li`)(248,`code`),vN(249,`medium`),ug(),vN(250,`: aplica a medida medium de cada componente.`),ug()(),Ac(251,`blockquote`)(252,`p`),vN(253,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(254,`code`),vN(255,`medium`),ug(),vN(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(257,`a`,27),vN(258,`po-theme`),ug(),vN(259,`.`),ug()()()(),Ac(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),vN(264,` p-hide-close`),Kc(265,`br`),ug()()(),Ac(266,`td`,19)(267,`code`,20),vN(268,`boolean`),ug()(),Ac(269,`td`,21)(270,`p`)(271,`code`),vN(272,`false`),ug()()(),Ac(273,`td`,22)(274,`em`)(275,`strong`),vN(276,`(opcional)`),ug()(),Ac(277,`p`),vN(278,`Oculta o ícone de fechar do cabeçalho da modal.`),ug(),Ac(279,`blockquote`)(280,`p`),vN(281,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),Ac(282,`em`),vN(283,`ESC`),ug(),vN(284,`.`),ug()()()(),Ac(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),vN(289,` p-icon`),Kc(290,`br`),ug()()(),Ac(291,`td`,19)(292,`code`,26),vN(293,`string `),ug(),Ac(294,`code`,28),vN(295,` TemplateRef<void>`),ug()(),Ac(296,`td`,21),vN(297,`-`),ug(),Ac(298,`td`,22)(299,`em`)(300,`strong`),vN(301,`(opcional)`),ug()(),Ac(302,`p`),vN(303,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),ug(),Ac(304,`p`),vN(305,`É possível usar qualquer um dos ícones da `),Ac(306,`a`,29),vN(307,`Biblioteca de ícones`),ug(),vN(308,`. conforme exemplo abaixo:`),ug(),Ac(309,`pre`)(310,`code`),vN(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),ug()(),Ac(312,`p`),vN(313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(314,`em`),vN(315,`Font Awesome`),ug(),vN(316,`, da seguinte forma:`),ug(),Ac(317,`pre`)(318,`code`),vN(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),ug()(),Ac(320,`p`),vN(321,`Outra opção seria a customização do ícone através do `),Ac(322,`code`),vN(323,`TemplateRef`),ug(),vN(324,`, conforme exemplo abaixo:`),ug(),Ac(325,`pre`)(326,`code`),vN(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()()()(),Ac(328,`tr`,15)(329,`td`,16)(330,`div`,17)(331,`span`,18),vN(332,` p-primary-action`),Kc(333,`br`),ug()()(),Ac(334,`td`,19)(335,`code`,30),vN(336,`PoModalAction`),ug()(),Ac(337,`td`,21),vN(338,`-`),ug(),Ac(339,`td`,22)(340,`em`)(341,`strong`),vN(342,`(opcional)`),ug()(),Ac(343,`p`),vN(344,`Deve ser definido um objeto que implementa a interface `),Ac(345,`code`),vN(346,`PoModalAction`),ug(),vN(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),ug()()(),Ac(348,`tr`,15)(349,`td`,16)(350,`div`,17)(351,`span`,18),vN(352,` p-secondary-action`),Kc(353,`br`),ug()()(),Ac(354,`td`,19)(355,`code`,30),vN(356,`PoModalAction`),ug()(),Ac(357,`td`,21),vN(358,`-`),ug(),Ac(359,`td`,22)(360,`em`)(361,`strong`),vN(362,`(opcional)`),ug()(),Ac(363,`p`),vN(364,`Deve ser definido um objeto que implementa a interface `),Ac(365,`code`),vN(366,`PoModalAction`),ug(),vN(367,` contendo a label e a função da segunda ação.`),ug()()(),Ac(368,`tr`,15)(369,`td`,16)(370,`div`,17)(371,`span`,18),vN(372,` p-size`),Kc(373,`br`),ug()()(),Ac(374,`td`,19)(375,`code`,26),vN(376,`string`),ug()(),Ac(377,`td`,21),vN(378,`-`),ug(),Ac(379,`td`,22)(380,`p`),vN(381,`Define o tamanho da modal.`),ug(),Ac(382,`p`),vN(383,`Valores válidos:`),ug(),Ac(384,`ul`)(385,`li`)(386,`code`),vN(387,`sm`),ug(),vN(388,` (pequeno)`),ug(),Ac(389,`li`)(390,`code`),vN(391,`md`),ug(),vN(392,` (médio)`),ug(),Ac(393,`li`)(394,`code`),vN(395,`lg`),ug(),vN(396,` (grande)`),ug(),Ac(397,`li`)(398,`code`),vN(399,`xl`),ug(),vN(400,` (extra grande)`),ug(),Ac(401,`li`)(402,`code`),vN(403,`auto`),ug(),vN(404,` (automático)`),ug()(),Ac(405,`blockquote`)(406,`p`),vN(407,`Quando informado `),Ac(408,`code`),vN(409,`auto`),ug(),vN(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Ac(411,`code`),vN(412,`md`),ug(),vN(413,`.`),ug()()()(),Ac(414,`tr`,15)(415,`td`,16)(416,`div`,17)(417,`span`,18),vN(418,` p-title`),Kc(419,`br`),ug()()(),Ac(420,`td`,19)(421,`code`,26),vN(422,`string`),ug()(),Ac(423,`td`,21),vN(424,`-`),ug(),Ac(425,`td`,22)(426,`p`),vN(427,`Título da modal.`),ug()()()(),Ac(428,`h3`,11),vN(429,`Métodos`),ug(),Ac(430,`table`,31)(431,`tr`,15)(432,`th`,32)(433,`div`,17)(434,`h4`)(435,`span`,18),vN(436,` close `),ug()()()()(),Ac(437,`tr`,22)(438,`td`,22)(439,`p`),vN(440,`Função para fechar a modal.`),ug()()()(),Kc(441,`br`),Ac(442,`table`,31)(443,`tr`,15)(444,`th`,32)(445,`div`,17)(446,`h4`)(447,`span`,18),vN(448,` open `),ug()()()()(),Ac(449,`tr`,22)(450,`td`,22)(451,`p`),vN(452,`Função para abrir a modal.`),ug()()()(),Kc(453,`br`),Ac(454,`h3`),vN(455,`Interfaces`),ug(),Ac(456,`h4`,33)(457,`code`,5),vN(458,`PoModalAction`),ug()(),Ac(459,`div`,2)(460,`p`),vN(461,`Interface que define os botões de ação do componente `),Ac(462,`code`),vN(463,`po-modal`),ug(),vN(464,`.`),ug()(),Ac(465,`h4`,11),vN(466,`Propriedades`),ug(),Ac(467,`table`,12)(468,`tr`,13)(469,`th`,14),vN(470,`Nome`),ug(),Ac(471,`th`,14),vN(472,`Tipo`),ug(),Ac(473,`th`,14),vN(474,`Descrição`),ug()(),Ac(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),vN(479,` action`),Kc(480,`br`),ug()()(),Ac(481,`td`,19)(482,`code`,34),vN(483,`Function`),ug()(),Ac(484,`td`,22)(485,`p`),vN(486,`Função que será executada ao clicar sobre o botão.`),ug()()(),Ac(487,`tr`,15)(488,`td`,16)(489,`div`,17)(490,`span`,18),vN(491,` danger`),Kc(492,`br`),ug()()(),Ac(493,`td`,19)(494,`code`,20),vN(495,`boolean`),ug()(),Ac(496,`td`,22)(497,`em`)(498,`strong`),vN(499,`(opcional)`),ug()(),Ac(500,`p`),vN(501,`Define a propriedade `),Ac(502,`code`),vN(503,`p-danger`),ug(),vN(504,` do botão.`),ug(),Ac(505,`blockquote`)(506,`p`),vN(507,`Caso a propriedade esteja definida como `),Ac(508,`code`),vN(509,`true`),ug(),vN(510,` em ambos os botões, apenas o botão primário receberá o `),Ac(511,`code`),vN(512,`p-danger`),ug(),vN(513,` como `),Ac(514,`code`),vN(515,`true`),ug(),vN(516,`.`),ug()()()(),Ac(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),vN(521,` disabled`),Kc(522,`br`),ug()()(),Ac(523,`td`,19)(524,`code`,20),vN(525,`boolean`),ug()(),Ac(526,`td`,22)(527,`em`)(528,`strong`),vN(529,`(opcional)`),ug()(),Ac(530,`p`),vN(531,`Desabilita o botão impossibilitando que sua ação seja executada.`),ug()()(),Ac(532,`tr`,15)(533,`td`,16)(534,`div`,17)(535,`span`,18),vN(536,` icon`),Kc(537,`br`),ug()()(),Ac(538,`td`,19)(539,`code`,26),vN(540,`string `),ug(),Ac(541,`code`,28),vN(542,` TemplateRef<void>`),ug()(),Ac(543,`td`,22)(544,`em`)(545,`strong`),vN(546,`(opcional)`),ug()(),Ac(547,`p`),vN(548,`Ícone exibido ao lado esquerdo do label do botão.`),ug(),Ac(549,`p`),vN(550,`É possível usar qualquer um dos ícones da `),Ac(551,`a`,29),vN(552,`Biblioteca de ícones`),ug(),vN(553,`, conforme exemplo:`),ug(),Ac(554,`pre`)(555,`code`),vN(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),ug()(),Ac(557,`p`),vN(558,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(559,`em`),vN(560,`Font Awesome`),ug(),vN(561,`, desde que a biblioteca
esteja carregada no projeto:`),ug(),Ac(562,`pre`)(563,`code`),vN(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),ug()(),Ac(565,`p`),vN(566,`Outra opção seria a customização do ícone através do `),Ac(567,`code`),vN(568,`TemplateRef`),ug(),vN(569,`, conforme exemplo abaixo:`),ug(),Ac(570,`pre`)(571,`code`),vN(572,`// Template HTML
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
`),ug()(),Ac(573,`blockquote`)(574,`p`),vN(575,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(576,`code`),vN(577,`font-size: inherit`),ug(),vN(578,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(579,`tr`,15)(580,`td`,16)(581,`div`,17)(582,`span`,18),vN(583,` label`),Kc(584,`br`),ug()()(),Ac(585,`td`,19)(586,`code`,26),vN(587,`string`),ug()(),Ac(588,`td`,22)(589,`p`),vN(590,`Rótulo do botão.`),ug()()(),Ac(591,`tr`,15)(592,`td`,16)(593,`div`,17)(594,`span`,18),vN(595,` loading`),Kc(596,`br`),ug()()(),Ac(597,`td`,19)(598,`code`,20),vN(599,`boolean`),ug()(),Ac(600,`td`,22)(601,`em`)(602,`strong`),vN(603,`(opcional)`),ug()(),Ac(604,`p`),vN(605,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Modal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-modal-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-modal-basic-view`)(6,`sample-po-modal-labs-view`)(7,`sample-po-modal-fruits-salad-view`),ug()()()),l&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[$ze,gae,bae,me,ce,ge,be],encapsulation:2,changeDetection:1})}return a})()}];var Se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[kL.forChild(ke),kL]})}return a})();var rt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[Ta,Se]})}return a})();export{rt as DocPoModalModule};