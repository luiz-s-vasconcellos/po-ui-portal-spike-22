import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Kt as gH,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ei as Yl,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,tt as O4,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN}from"./main-3EWTGE7T.js";var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,o){if(l&1){let d=Ax();Tl(0,`po-modal`,1,0),cN(2,` We are TOTVS!!! `),ag(),Tl(3,`po-button`,2),ht(`p-click`,function(){Ky(d);return Xy(Bx(1).open())}),ag()}},dependencies:[Zt,vr],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Modal Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-modal-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,fe,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,o){if(l&1&&Yl(vr,7),l&2){let d;lo(d=uo())&&(o.poModal=d.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Ax();Tl(0,`po-modal`,1),cN(1),ag(),Tl(2,`po-button`,2),ht(`p-click`,function(){return o.openModal()}),ag(),Gl(3,`po-divider`),Tl(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),ww(`ngModelChange`,function(i){return Ky(d),uN(o.title,i)||(o.title=i),Xy(i)}),ag(),a0(),Tl(8,`po-select`,5),ww(`ngModelChange`,function(i){return Ky(d),uN(o.icon,i)||(o.icon=i),Xy(i)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(i){return Ky(d),uN(o.content,i)||(o.content=i),Xy(i)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(i){return Ky(d),uN(o.primaryActionLabel,i)||(o.primaryActionLabel=i),Xy(i)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(i){return Ky(d),uN(o.primaryActionIcon,i)||(o.primaryActionIcon=i),Xy(i)}),ag(),a0(),Tl(12,`po-checkbox-group`,9),ww(`ngModelChange`,function(i){return Ky(d),uN(o.primaryActionProperties,i)||(o.primaryActionProperties=i),Xy(i)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(i){return Ky(d),uN(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),Xy(i)}),ag(),a0(),Tl(14,`po-input`,11),ww(`ngModelChange`,function(i){return Ky(d),uN(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),Xy(i)}),ag(),a0(),Tl(15,`po-checkbox-group`,12),ww(`ngModelChange`,function(i){return Ky(d),uN(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),Xy(i)}),ag(),a0(),Tl(16,`po-radio-group`,13),ww(`ngModelChange`,function(i){return Ky(d),uN(o.size,i)||(o.size=i),Xy(i)}),ag(),a0(),Tl(17,`po-checkbox-group`,14),ww(`ngModelChange`,function(i){return Ky(d),uN(o.properties,i)||(o.properties=i),Xy(i)}),ag(),a0(),Tl(18,`po-radio-group`,15),ww(`ngModelChange`,function(i){return Ky(d),uN(o.componentsSize,i)||(o.componentsSize=i),Xy(i)}),ag(),a0(),ag(),Tl(19,`div`,3)(20,`po-button`,16),ht(`p-click`,function(){return o.restore()}),ag()()()}if(l&2){let d=Bx(5);nw(`p-click-out`,o.properties.includes(`click-out`))(`p-components-size`,o.componentsSize)(`p-hide-close`,o.properties.includes(`hide-close`))(`p-primary-action`,o.primaryAction)(`p-secondary-action`,o.secondaryActionLabel?o.secondaryAction:null)(`p-size`,o.size)(`p-title`,o.title)(`p-icon`,o.icon),jp(),hg(` `,o.content,`
`),jp(),nw(`p-disabled`,d.form.invalid),jp(5),Ew(`ngModel`,o.title),l0(),jp(),Ew(`ngModel`,o.icon),nw(`p-options`,o.iconOptions),l0(),jp(),Ew(`ngModel`,o.content),l0(),jp(),Ew(`ngModel`,o.primaryActionLabel),l0(),jp(),Ew(`ngModel`,o.primaryActionIcon),l0(),jp(),Ew(`ngModel`,o.primaryActionProperties),nw(`p-options`,o.primaryActionOptions),l0(),jp(),Ew(`ngModel`,o.secondaryActionLabel),l0(),jp(),Ew(`ngModel`,o.secondaryActionIcon),l0(),jp(),Ew(`ngModel`,o.secondaryActionProperties),nw(`p-options`,o.secondaryActionOptions),l0(),jp(),Ew(`ngModel`,o.size),nw(`p-options`,o.sizeOptions),l0(),jp(),Ew(`ngModel`,o.properties),nw(`p-options`,o.propertiesOptions),l0(),jp(),Ew(`ngModel`,o.componentsSize),nw(`p-options`,o.componentsSizeOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,fbe,vr],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Modal Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-modal
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-modal-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return a})();var Pe=[`optionsForm`];var ue=(()=>{class a{poNotification=f(Eu);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,o){if(l&1&&Yl(Pe,7)(vr,7),l&2){let d;lo(d=uo())&&(o.form=d.first),lo(d=uo())&&(o.poModal=d.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,o){if(l&1){let d=Ax();Tl(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),ww(`ngModelChange`,function(i){return Ky(d),uN(o.fruits,i)||(o.fruits=i),Xy(i)}),ag(),a0(),ag(),Tl(5,`div`,2)(6,`po-combo`,4),ww(`ngModelChange`,function(i){return Ky(d),uN(o.accompaniment,i)||(o.accompaniment=i),Xy(i)}),ag(),a0(),ag(),Tl(7,`div`,2)(8,`po-textarea`,5),ww(`ngModelChange`,function(i){return Ky(d),uN(o.orderDetail,i)||(o.orderDetail=i),Xy(i)}),ag(),a0(),ag()(),Tl(9,`po-modal-footer`,6)(10,`po-button`,7),ht(`p-click`,function(){return o.closeModal()}),ag(),Tl(11,`po-button`,8),ht(`p-click`,function(){return o.restore()}),ag(),Tl(12,`po-button`,9),ht(`p-click`,function(){return o.confirmFruits()}),ag()()(),Tl(13,`po-button`,10),ht(`p-click`,function(){return o.openQuestionnaire()}),ag()}l&2&&(nw(`p-primary-action`,o.confirm)(`p-secondary-action`,o.close),jp(4),Ew(`ngModel`,o.fruits),nw(`p-options`,o.fruitsOptions),l0(),jp(2),Ew(`ngModel`,o.accompaniment),nw(`p-options`,o.accompanimentOptions),l0(),jp(2),Ew(`ngModel`,o.orderDetail),l0(),jp(),nw(`p-disabled-align`,!1))},dependencies:[yY,gY,mY,Ak,Tk,Zt,N4,O4,vbe,vr,gH],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Modal - Fruits Salad`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-modal-fruits-salad`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:606,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoModalModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-modal`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoModalComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-modal`),ag(),cN(17,` é utilizado para incluir conteúdos rápidos e informativos.`),ag(),Tl(18,`p`),cN(19,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),ag(),Tl(20,`p`),cN(21,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),Tl(22,`code`),cN(23,`po-chart`),ag(),cN(24,`,
`),Tl(25,`code`),cN(26,`po-table`),ag(),cN(27,` e os demais componentes do PO.`),ag(),Tl(28,`p`),cN(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Tl(30,`em`),cN(31,`danger`),ag(),cN(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Tl(33,`a`,6)(34,`code`),cN(35,`PoModalFooter`),ag()(),cN(36,`.`),ag(),Tl(37,`blockquote`)(38,`p`),cN(39,`É possível fechar a modal através da tecla `),Tl(40,`em`),cN(41,`ESC`),ag(),cN(42,`, quando a propriedade `),Tl(43,`code`),cN(44,`p-hide-close`),ag(),cN(45,` não estiver habilitada.`),ag()(),Tl(46,`h4`),cN(47,`Tokens customizáveis`),ag(),Tl(48,`p`),cN(49,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(50,`blockquote`)(51,`p`),cN(52,`Para maiores informações, acesse o guia `),Tl(53,`a`,7),cN(54,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(55,`.`),ag()(),Tl(56,`table`)(57,`thead`)(58,`tr`)(59,`th`),cN(60,`Propriedade`),ag(),Tl(61,`th`),cN(62,`Descrição`),ag(),Tl(63,`th`),cN(64,`Valor Padrão`),ag()()(),Tl(65,`tbody`)(66,`tr`)(67,`td`)(68,`strong`),cN(69,`Default Values`),ag()(),Gl(70,`td`)(71,`td`),ag(),Tl(72,`tr`)(73,`td`)(74,`code`),cN(75,`--border-radius`),ag(),cN(76,` \xA0`),ag(),Tl(77,`td`),cN(78,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(79,`td`)(80,`code`),cN(81,`var(--border-radius-md)`),ag()()(),Tl(82,`tr`)(83,`td`)(84,`code`),cN(85,`--border-width`),ag(),cN(86,` \xA0`),ag(),Tl(87,`td`),cN(88,`Contém o valor da largura dos cantos do elemento\xA0`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--border-width-sm)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--border-color`),ag(),cN(96,` \xA0`),ag(),Tl(97,`td`),cN(98,`Cor da borda`),ag(),Tl(99,`td`)(100,`code`),cN(101,`var(--color-neutral-light-20)`),ag()()(),Tl(102,`tr`)(103,`td`)(104,`code`),cN(105,`--background`),ag(),cN(106,` \xA0`),ag(),Tl(107,`td`),cN(108,`Cor de background`),ag(),Tl(109,`td`)(110,`code`),cN(111,`var(--color-neutral-light-00)`),ag()()(),Tl(112,`tr`)(113,`td`)(114,`code`),cN(115,`--shadow`),ag(),cN(116,` \xA0`),ag(),Tl(117,`td`),cN(118,`Contém o valor da sombra do elemento`),ag(),Tl(119,`td`)(120,`code`),cN(121,`var(--shadow-md)`),ag()()(),Tl(122,`tr`)(123,`td`)(124,`code`),cN(125,`--color-overlay`),ag(),cN(126,` \xA0`),ag(),Tl(127,`td`),cN(128,`Cor da camada visual temporária`),ag(),Tl(129,`td`)(130,`code`),cN(131,`var(--color-neutral-dark-80)`),ag()()(),Tl(132,`tr`)(133,`td`)(134,`code`),cN(135,`--opacity-overlay`),ag(),cN(136,` \xA0`),ag(),Tl(137,`td`),cN(138,`Opacidade da camada visual temporária \xA0`),ag(),Tl(139,`td`)(140,`code`),cN(141,`0.7`),ag()()(),Tl(142,`tr`)(143,`td`)(144,`code`),cN(145,`--color-divider`),ag(),cN(146,` \xA0`),ag(),Tl(147,`td`),cN(148,`Cor das divisões do modal`),ag(),Tl(149,`td`)(150,`code`),cN(151,`var(--color-neutral-light-20)`),ag()()(),Tl(152,`tr`)(153,`td`)(154,`code`),cN(155,`--padding-header`),ag(),cN(156,` \xA0`),ag(),Tl(157,`td`),cN(158,`Padding do header do modal`),ag(),Tl(159,`td`)(160,`code`),cN(161,`var(--spacing-sm) var(--spacing-md)`),ag()()(),Tl(162,`tr`)(163,`td`)(164,`code`),cN(165,`--padding-body`),ag(),cN(166,` \xA0`),ag(),Tl(167,`td`),cN(168,`Padding do corpo do modal`),ag(),Tl(169,`td`)(170,`code`),cN(171,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),ag()()()()()(),Tl(172,`div`,8)(173,`h4`,9),cN(174,`Seletor`),ag(),Tl(175,`pre`,10),cN(176,`<po-modal
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
`),ag()(),Tl(177,`h4`,11),cN(178,`Propriedades`),ag(),Tl(179,`table`,12)(180,`tr`,13)(181,`th`,14),cN(182,`Nome`),ag(),Tl(183,`th`,14),cN(184,`Tipo`),ag(),Tl(185,`th`,14),cN(186,`Padrão`),ag(),Tl(187,`th`,14),cN(188,`Descrição`),ag()(),Tl(189,`tr`,15)(190,`td`,16)(191,`div`,17)(192,`span`,18),cN(193,`p-click-out`),Gl(194,`br`),ag()()(),Tl(195,`td`,19)(196,`code`,20),cN(197,`boolean`),ag()(),Tl(198,`td`,21),cN(199,`-`),ag(),Tl(200,`td`,22)(201,`em`)(202,`strong`),cN(203,`(opcional)`),ag()(),Tl(204,`p`),cN(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Tl(206,`code`),cN(207,`true`),ag(),cN(208,` para ativar o fechamento ao clicar fora da modal.`),ag()()(),Tl(209,`tr`,15)(210,`td`,16)(211,`div`,23)(212,`span`,24),cN(213,` (p-close)`),Gl(214,`br`),ag()()(),Tl(215,`td`,19)(216,`code`,25),cN(217,`EventEmitter`),ag()(),Tl(218,`td`,21),cN(219,`-`),ag(),Tl(220,`td`,22)(221,`p`),cN(222,`Evento disparado ao fechar o modal.`),ag()()(),Tl(223,`tr`,15)(224,`td`,16)(225,`div`,17)(226,`span`,18),cN(227,` p-components-size`),Gl(228,`br`),ag()()(),Tl(229,`td`,19)(230,`code`,26),cN(231,`string`),ag()(),Tl(232,`td`,21)(233,`p`)(234,`code`),cN(235,`medium`),ag()()(),Tl(236,`td`,22)(237,`em`)(238,`strong`),cN(239,`(opcional)`),ag()(),Tl(240,`p`),cN(241,`Define o tamanho dos componentes de formulário no modal:`),ag(),Tl(242,`ul`)(243,`li`)(244,`code`),cN(245,`small`),ag(),cN(246,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(247,`li`)(248,`code`),cN(249,`medium`),ag(),cN(250,`: aplica a medida medium de cada componente.`),ag()(),Tl(251,`blockquote`)(252,`p`),cN(253,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(254,`code`),cN(255,`medium`),ag(),cN(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(257,`a`,27),cN(258,`po-theme`),ag(),cN(259,`.`),ag()()()(),Tl(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),cN(264,` p-hide-close`),Gl(265,`br`),ag()()(),Tl(266,`td`,19)(267,`code`,20),cN(268,`boolean`),ag()(),Tl(269,`td`,21)(270,`p`)(271,`code`),cN(272,`false`),ag()()(),Tl(273,`td`,22)(274,`em`)(275,`strong`),cN(276,`(opcional)`),ag()(),Tl(277,`p`),cN(278,`Oculta o ícone de fechar do cabeçalho da modal.`),ag(),Tl(279,`blockquote`)(280,`p`),cN(281,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),Tl(282,`em`),cN(283,`ESC`),ag(),cN(284,`.`),ag()()()(),Tl(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),cN(289,` p-icon`),Gl(290,`br`),ag()()(),Tl(291,`td`,19)(292,`code`,26),cN(293,`string `),ag(),Tl(294,`code`,28),cN(295,` TemplateRef<void>`),ag()(),Tl(296,`td`,21),cN(297,`-`),ag(),Tl(298,`td`,22)(299,`em`)(300,`strong`),cN(301,`(opcional)`),ag()(),Tl(302,`p`),cN(303,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),ag(),Tl(304,`p`),cN(305,`É possível usar qualquer um dos ícones da `),Tl(306,`a`,29),cN(307,`Biblioteca de ícones`),ag(),cN(308,`. conforme exemplo abaixo:`),ag(),Tl(309,`pre`)(310,`code`),cN(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),ag()(),Tl(312,`p`),cN(313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(314,`em`),cN(315,`Font Awesome`),ag(),cN(316,`, da seguinte forma:`),ag(),Tl(317,`pre`)(318,`code`),cN(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),ag()(),Tl(320,`p`),cN(321,`Outra opção seria a customização do ícone através do `),Tl(322,`code`),cN(323,`TemplateRef`),ag(),cN(324,`, conforme exemplo abaixo:`),ag(),Tl(325,`pre`)(326,`code`),cN(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()()()(),Tl(328,`tr`,15)(329,`td`,16)(330,`div`,17)(331,`span`,18),cN(332,` p-primary-action`),Gl(333,`br`),ag()()(),Tl(334,`td`,19)(335,`code`,30),cN(336,`PoModalAction`),ag()(),Tl(337,`td`,21),cN(338,`-`),ag(),Tl(339,`td`,22)(340,`em`)(341,`strong`),cN(342,`(opcional)`),ag()(),Tl(343,`p`),cN(344,`Deve ser definido um objeto que implementa a interface `),Tl(345,`code`),cN(346,`PoModalAction`),ag(),cN(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),ag()()(),Tl(348,`tr`,15)(349,`td`,16)(350,`div`,17)(351,`span`,18),cN(352,` p-secondary-action`),Gl(353,`br`),ag()()(),Tl(354,`td`,19)(355,`code`,30),cN(356,`PoModalAction`),ag()(),Tl(357,`td`,21),cN(358,`-`),ag(),Tl(359,`td`,22)(360,`em`)(361,`strong`),cN(362,`(opcional)`),ag()(),Tl(363,`p`),cN(364,`Deve ser definido um objeto que implementa a interface `),Tl(365,`code`),cN(366,`PoModalAction`),ag(),cN(367,` contendo a label e a função da segunda ação.`),ag()()(),Tl(368,`tr`,15)(369,`td`,16)(370,`div`,17)(371,`span`,18),cN(372,` p-size`),Gl(373,`br`),ag()()(),Tl(374,`td`,19)(375,`code`,26),cN(376,`string`),ag()(),Tl(377,`td`,21),cN(378,`-`),ag(),Tl(379,`td`,22)(380,`p`),cN(381,`Define o tamanho da modal.`),ag(),Tl(382,`p`),cN(383,`Valores válidos:`),ag(),Tl(384,`ul`)(385,`li`)(386,`code`),cN(387,`sm`),ag(),cN(388,` (pequeno)`),ag(),Tl(389,`li`)(390,`code`),cN(391,`md`),ag(),cN(392,` (médio)`),ag(),Tl(393,`li`)(394,`code`),cN(395,`lg`),ag(),cN(396,` (grande)`),ag(),Tl(397,`li`)(398,`code`),cN(399,`xl`),ag(),cN(400,` (extra grande)`),ag(),Tl(401,`li`)(402,`code`),cN(403,`auto`),ag(),cN(404,` (automático)`),ag()(),Tl(405,`blockquote`)(406,`p`),cN(407,`Quando informado `),Tl(408,`code`),cN(409,`auto`),ag(),cN(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Tl(411,`code`),cN(412,`md`),ag(),cN(413,`.`),ag()()()(),Tl(414,`tr`,15)(415,`td`,16)(416,`div`,17)(417,`span`,18),cN(418,` p-title`),Gl(419,`br`),ag()()(),Tl(420,`td`,19)(421,`code`,26),cN(422,`string`),ag()(),Tl(423,`td`,21),cN(424,`-`),ag(),Tl(425,`td`,22)(426,`p`),cN(427,`Título da modal.`),ag()()()(),Tl(428,`h3`,11),cN(429,`Métodos`),ag(),Tl(430,`table`,31)(431,`tr`,15)(432,`th`,32)(433,`div`,17)(434,`h4`)(435,`span`,18),cN(436,` close `),ag()()()()(),Tl(437,`tr`,22)(438,`td`,22)(439,`p`),cN(440,`Função para fechar a modal.`),ag()()()(),Gl(441,`br`),Tl(442,`table`,31)(443,`tr`,15)(444,`th`,32)(445,`div`,17)(446,`h4`)(447,`span`,18),cN(448,` open `),ag()()()()(),Tl(449,`tr`,22)(450,`td`,22)(451,`p`),cN(452,`Função para abrir a modal.`),ag()()()(),Gl(453,`br`),Tl(454,`h3`),cN(455,`Interfaces`),ag(),Tl(456,`h4`,33)(457,`code`,5),cN(458,`PoModalAction`),ag()(),Tl(459,`div`,2)(460,`p`),cN(461,`Interface que define os botões de ação do componente `),Tl(462,`code`),cN(463,`po-modal`),ag(),cN(464,`.`),ag()(),Tl(465,`h4`,11),cN(466,`Propriedades`),ag(),Tl(467,`table`,12)(468,`tr`,13)(469,`th`,14),cN(470,`Nome`),ag(),Tl(471,`th`,14),cN(472,`Tipo`),ag(),Tl(473,`th`,14),cN(474,`Descrição`),ag()(),Tl(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),cN(479,` action`),Gl(480,`br`),ag()()(),Tl(481,`td`,19)(482,`code`,34),cN(483,`Function`),ag()(),Tl(484,`td`,22)(485,`p`),cN(486,`Função que será executada ao clicar sobre o botão.`),ag()()(),Tl(487,`tr`,15)(488,`td`,16)(489,`div`,17)(490,`span`,18),cN(491,` danger`),Gl(492,`br`),ag()()(),Tl(493,`td`,19)(494,`code`,20),cN(495,`boolean`),ag()(),Tl(496,`td`,22)(497,`em`)(498,`strong`),cN(499,`(opcional)`),ag()(),Tl(500,`p`),cN(501,`Define a propriedade `),Tl(502,`code`),cN(503,`p-danger`),ag(),cN(504,` do botão.`),ag(),Tl(505,`blockquote`)(506,`p`),cN(507,`Caso a propriedade esteja definida como `),Tl(508,`code`),cN(509,`true`),ag(),cN(510,` em ambos os botões, apenas o botão primário receberá o `),Tl(511,`code`),cN(512,`p-danger`),ag(),cN(513,` como `),Tl(514,`code`),cN(515,`true`),ag(),cN(516,`.`),ag()()()(),Tl(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),cN(521,` disabled`),Gl(522,`br`),ag()()(),Tl(523,`td`,19)(524,`code`,20),cN(525,`boolean`),ag()(),Tl(526,`td`,22)(527,`em`)(528,`strong`),cN(529,`(opcional)`),ag()(),Tl(530,`p`),cN(531,`Desabilita o botão impossibilitando que sua ação seja executada.`),ag()()(),Tl(532,`tr`,15)(533,`td`,16)(534,`div`,17)(535,`span`,18),cN(536,` icon`),Gl(537,`br`),ag()()(),Tl(538,`td`,19)(539,`code`,26),cN(540,`string `),ag(),Tl(541,`code`,28),cN(542,` TemplateRef<void>`),ag()(),Tl(543,`td`,22)(544,`em`)(545,`strong`),cN(546,`(opcional)`),ag()(),Tl(547,`p`),cN(548,`Ícone exibido ao lado esquerdo do label do botão.`),ag(),Tl(549,`p`),cN(550,`É possível usar qualquer um dos ícones da `),Tl(551,`a`,29),cN(552,`Biblioteca de ícones`),ag(),cN(553,`, conforme exemplo:`),ag(),Tl(554,`pre`)(555,`code`),cN(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),ag()(),Tl(557,`p`),cN(558,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(559,`em`),cN(560,`Font Awesome`),ag(),cN(561,`, desde que a biblioteca
esteja carregada no projeto:`),ag(),Tl(562,`pre`)(563,`code`),cN(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),ag()(),Tl(565,`p`),cN(566,`Outra opção seria a customização do ícone através do `),Tl(567,`code`),cN(568,`TemplateRef`),ag(),cN(569,`, conforme exemplo abaixo:`),ag(),Tl(570,`pre`)(571,`code`),cN(572,`// Template HTML
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
`),ag()(),Tl(573,`blockquote`)(574,`p`),cN(575,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(576,`code`),cN(577,`font-size: inherit`),ag(),cN(578,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(579,`tr`,15)(580,`td`,16)(581,`div`,17)(582,`span`,18),cN(583,` label`),Gl(584,`br`),ag()()(),Tl(585,`td`,19)(586,`code`,26),cN(587,`string`),ag()(),Tl(588,`td`,22)(589,`p`),cN(590,`Rótulo do botão.`),ag()()(),Tl(591,`tr`,15)(592,`td`,16)(593,`div`,17)(594,`span`,18),cN(595,` loading`),Gl(596,`br`),ag()()(),Tl(597,`td`,19)(598,`code`,20),cN(599,`boolean`),ag()(),Tl(600,`td`,22)(601,`em`)(602,`strong`),cN(603,`(opcional)`),ag()(),Tl(604,`p`),cN(605,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Modal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-modal-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-modal-basic-view`)(6,`sample-po-modal-labs-view`)(7,`sample-po-modal-fruits-salad-view`),ag()()()),l&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,me,ce,ge,be],encapsulation:2,changeDetection:1})}return a})()}];var Se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[bL.forChild(ke),bL]})}return a})();var rt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[ar,Se]})}return a})();export{rt as DocPoModalModule};