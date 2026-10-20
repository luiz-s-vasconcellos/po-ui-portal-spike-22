import{t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Br as Sx,Ca as zw,Dr as O,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Jt as dae,K as K3,Ki as px,Kn as Ag,Mr as Qe,Pi as mt$1,Pn as woe,Pr as R,Qi as tb,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Sn as qt,Vi as p,Vr as TF,Wr as Tv,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,Zt as eFe,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,ga as xx,i as _a,ii as _x,ir as EF,j as FP,ji as mO,k as Ec,la as vx,mn as ni,mr as He,ni as _o,nn as goe,pa as wg,pr as Gr,r as Ta,rr as Dx,sa as vo,ta as ue,ua as wK,ur as Fx,ut as Rte,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(jc(0,`po-stepper`,0),nu(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),wg()),r&2&&jE(`p-align-center`,!1)},dependencies:[dae,eFe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Stepper Basic`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-stepper-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ye,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,j){if(a&1&&(jc(0,`po-step`,3)(1,`h2`),iO(2),wg()()),a&2){let m=j.$implicit;jE(`p-label`,m.label)(`p-icon-default`,m.iconDefault),rg(2),Ag(`Step Content `,m.label)}}var ke=(()=>{class a{changeDetector=p(He);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(m){this.steps=[...this.steps,r({},m)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(m){this.event=m,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`po-container`)(1,`po-stepper`,2),mt$1(`p-change-step`,function(){return i.changeStep(`change`)}),_x(2,Ge,3,3,`po-step`,3,vx),wg(),nu(4,`po-divider`)(5,`po-info`,4),jc(6,`form`,null,0),nu(8,`po-dynamic-form`,5),jc(9,`div`,6)(10,`po-button`,7),mt$1(`p-click`,function(){y_(s);let o=Fx(7);return i.addItem(i.stepItem),v_(o.reset())}),wg()()(),jc(11,`form`,null,1),nu(13,`po-dynamic-form`,5)(14,`po-divider`),jc(15,`div`,6)(16,`po-button`,8),mt$1(`p-click`,function(){y_(s);let o=Fx(7),Ue=Fx(12);return i.restore(),Ue.reset(),v_(o.reset())}),wg()()()()}if(r&2){let s=Fx(7);rg(),jE(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),rg(),Dx(i.steps),rg(3),jE(`p-value`,i.event),rg(3),jE(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),rg(2),jE(`p-disabled`,s.invalid),rg(3),jE(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[wK,EK,EF,ni,Ec,Lf,woe,_oe,dae,eFe],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Stepper Labs`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container>
  <po-stepper
    [p-align-center]="properties.alignCenter"
    [p-orientation]="properties.orientation"
    [p-step-icons]="properties.stepIcons"
    [p-step-size]="properties.stepSize"
    [p-step-icon-active]="properties.iconActive"
    [p-step-icon-done]="properties.iconDone"
    [p-disable-click]="properties.disabledClick"
    (p-change-step)="changeStep('change')"
  >
    @for (step of steps; track step) {
      <po-step [p-label]="step.label" [p-icon-default]="step.iconDefault">
        <h2>Step Content { { step.label }}</h2>
      </po-step>
    }
  </po-stepper>

  <po-divider />

  <po-info p-label="Event" [p-value]="event"> </po-info>

  <form #stepForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="stepItemFields" [p-value]="stepItem"> </po-dynamic-form>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Step"
        [p-disabled]="stepForm.invalid"
        (p-click)="addItem(stepItem); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>

  <form #propertiesForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="propertiesFields" [p-value]="properties"> </po-dynamic-form>
    <po-divider />
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="restore(); propertiesForm.reset(); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>
</po-container>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicFormField, PoStepperItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-labs',
  templateUrl: './sample-po-stepper-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperLabsComponent implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);

  event: any;
  properties: any = {};
  stepItem: PoStepperItem = {};
  steps: Array<PoStepperItem> = [];

  readonly propertiesFields: Array<PoDynamicFormField> = [
    {
      divider: 'Properties',
      property: 'stepSize',
      label: 'Step Size',
      type: 'number',
      maxValue: 64,
      minValue: 24,
      gridLgColumns: 2
    },
    {
      property: 'orientation',
      options: [
        { value: 'vertical', label: 'Vertical', checked: true },
        { value: 'horizontal', label: 'Horizontal' }
      ],
      gridLgColumns: 4
    },
    {
      label: 'Align Steps Center',
      gridLgColumns: 3,
      property: 'alignCenter',
      type: 'boolean'
    },
    {
      label: 'Step icons',
      gridLgColumns: 3,
      property: 'stepIcons',
      type: 'boolean'
    },
    {
      label: 'Step Icon Active Custom',
      help: 'Ex.: an an-pencil-simple-line',
      gridLgColumns: 4,
      property: 'iconActive'
    },
    {
      label: 'Step Icon Done Custom',
      help: 'Ex.: an an-check-fat',
      gridLgColumns: 4,
      property: 'iconDone'
    },
    {
      property: 'disabledClick',
      label: 'Disabled click',
      type: 'boolean'
    }
  ];

  readonly stepItemFields: Array<PoDynamicFormField> = [
    {
      divider: 'Step form',
      property: 'label',
      label: 'Step Label',
      gridMdColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'iconDefault',
      label: 'Step Icon Default Custom',
      help: 'Ex.: an an-question',
      gridMdColumns: 6,
      gridXlColumns: 6
    }
  ];

  ngOnInit() {
    this.restore();
  }

  addItem(stepItem: PoStepperItem) {
    this.steps = [...this.steps, { ...stepItem }];
    this.stepItem = {};
    this.changeDetector.detectChanges();
  }

  changeStep(event) {
    this.event = event;

    this.changeDetector.detectChanges();
  }

  restore() {
    this.properties = {};
    this.steps = [];
    this.event = undefined;
    this.properties.orientation = 'horizontal';
    this.properties.alignCenter = false;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-stepper-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ze,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ke],encapsulation:2,changeDetection:1})}return a})();var $e=[`addressForm`];var et=[`paymentForm`];var tt=[`personalForm`];var nt=[`successData`];function it(a,j){a&1&&nu(0,`po-loading-overlay`,18)}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(m){return O(m.form.valid).pipe(Qe(()=>this.isLoadingPayment=!0),Tv(2e3),Gr(()=>this.isLoadingPayment=!1))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&iu($e,7)(et,7)(tt,7)(nt,7),r&2){let s;vo(s=_o())&&(i.addressForm=s.first),vo(s=_o())&&(i.paymentForm=s.first),vo(s=_o())&&(i.personalForm=s.first),vo(s=_o())&&(i.successData=s.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),nu(4,`img`,11),wg(),jc(5,`div`,12)(6,`p`,13),iO(7,`Nike XYZ - Red/Gold Stripes`),wg(),jc(8,`p`,14),iO(9,`Brand: Nike | Style: Modern | Men's`),wg(),jc(10,`p`,15),iO(11,`Width: 12.5 - COD: 001254648412319`),wg(),nu(12,`po-divider`),jc(13,`p`,15),iO(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),wg()()()(),jc(15,`po-widget`,16)(16,`p`,15),iO(17,`$2.500,00`),wg(),jc(18,`p`,15),iO(19,`$500,00(-)`),wg(),jc(20,`p`,15),iO(21,`$160,00(+)`),wg(),nu(22,`po-divider`),jc(23,`p`,14),iO(24,`Total: $2.160,00`),wg()()(),nu(25,`po-divider`),jc(26,`div`,17),px(27,it,1,0,`po-loading-overlay`,18),jc(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),mt$1(`p-primary-action`,function(){y_(s);let o=Fx(29);return v_(o.next())}),jc(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.name,o)||(i.name=o),v_(o)}),wg(),jc(36,`po-datepicker`,23),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.birthday,o)||(i.birthday=o),v_(o)}),wg(),jc(37,`po-input`,24),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.document,o)||(i.document=o),v_(o)}),wg()()()()(),jc(38,`po-step`,25)(39,`po-widget`,26),mt$1(`p-primary-action`,function(){y_(s);let o=Fx(29);return v_(o.previous())})(`p-secondary-action`,function(){y_(s);let o=Fx(29);return v_(o.next())}),jc(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.address.street,o)||(i.address.street=o),v_(o)}),wg(),jc(44,`po-input`,28),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.address.number,o)||(i.address.number=o),v_(o)}),wg(),jc(45,`po-input`,29),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.address.city,o)||(i.address.city=o),v_(o)}),wg()(),jc(46,`div`,8)(47,`po-input`,30),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.address.code,o)||(i.address.code=o),v_(o)}),wg(),jc(48,`po-input`,31),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.address.country,o)||(i.address.country=o),v_(o)}),wg(),jc(49,`po-input`,32),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.address.reference,o)||(i.address.reference=o),v_(o)}),wg()()()()(),jc(50,`po-step`,33)(51,`po-widget`,26),mt$1(`p-primary-action`,function(){y_(s);let o=Fx(29);return v_(o.previous())})(`p-secondary-action`,function(){y_(s);let o=Fx(29);return v_(o.next())}),jc(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.cardName,o)||(i.cardName=o),v_(o)}),wg(),jc(57,`po-input`,35,5),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.cardCode,o)||(i.cardCode=o),v_(o)}),wg(),jc(59,`po-input`,36,6),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.cardValid,o)||(i.cardValid=o),v_(o)}),wg()()()()(),jc(61,`po-step`,37)(62,`po-widget`,26),mt$1(`p-primary-action`,function(){y_(s);let o=Fx(29);return v_(o.previous())})(`p-secondary-action`,function(){y_(s);let o=Fx(29);return v_(i.onConfirmStep(o))}),jc(63,`div`,8),nu(64,`po-info`,38)(65,`po-info`,39),wg(),jc(66,`div`,8),nu(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),wg(),nu(71,`po-divider`),jc(72,`div`,8),nu(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),wg()()()()(),jc(78,`po-modal`,49,7)(80,`div`,8),nu(81,`img`,50),jc(82,`p`,51),iO(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),wg()()()}if(r&2){let s=Fx(33),c=Fx(41),o=Fx(53);rg(27),mx(i.isLoadingPayment?27:-1),rg(3),jE(`p-can-active-next-step`,i.canActiveNextStep.bind(i,s)),rg(),jE(`p-primary-label`,i.nextLabelWidget),rg(4),ib(`ngModel`,i.name),t0(),rg(),ib(`ngModel`,i.birthday),t0(),rg(),ib(`ngModel`,i.document),t0(),rg(),jE(`p-can-active-next-step`,i.canActiveNextStep.bind(i,c)),rg(),jE(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),rg(4),ib(`ngModel`,i.address.street),t0(),rg(),ib(`ngModel`,i.address.number),t0(),rg(),ib(`ngModel`,i.address.city),t0(),rg(2),ib(`ngModel`,i.address.code),t0(),rg(),ib(`ngModel`,i.address.country),t0(),rg(),ib(`ngModel`,i.address.reference),t0(),rg(),jE(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),rg(),jE(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),rg(4),ib(`ngModel`,i.cardName),t0(),rg(2),ib(`ngModel`,i.cardCode),t0(),rg(2),ib(`ngModel`,i.cardValid),t0(),rg(3),jE(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),rg(2),jE(`p-value`,i.name),rg(),jE(`p-value`,i.document),rg(2),jE(`p-value`,i.address.street),rg(),jE(`p-value`,i.address.number),rg(),jE(`p-value`,i.address.city),rg(),jE(`p-value`,i.address.country)}},dependencies:[wK,CK,EK,TF,EF,Lf,Rte,A5,_oe,FP,ea,dae,eFe,Noe],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Stepper - Sales`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-widget class="po-md-9" p-title="Product Detail">
    <div class="po-row">
      <div class="po-lg-4">
        <img src="../../../assets/graphics/shoe.gif" width="215" height="200" />
      </div>
      <div class="po-lg-8">
        <p class="po-font-title">Nike XYZ - Red/Gold Stripes</p>
        <p class="po-font-text-large-bold">Brand: Nike | Style: Modern | Men's</p>
        <p class="po-font-text">Width: 12.5 - COD: 001254648412319</p>
        <po-divider />
        <p class="po-font-text">Price: $2.500,00 | Discount: $500,00 | Tax: $160,00</p>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-md-3" p-height="317" p-title="Price">
    <p class="po-font-text">$2.500,00</p>
    <p class="po-font-text">$500,00(-)</p>
    <p class="po-font-text">$160,00(+)</p>
    <po-divider />
    <p class="po-font-text-large-bold">Total: $2.160,00</p>
  </po-widget>
</div>

<po-divider />

<div class="sample-stepper-position-relative">
  @if (isLoadingPayment) {
    <po-loading-overlay p-text="Loading"> </po-loading-overlay>
  }

  <po-stepper #stepper p-align-center="false" p-orientation="vertical" p-step-icons p-step-size="32">
    <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this, personalForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.next()"
      >
        <form #personalForm="ngForm">
          <div class="po-row">
            <po-input class="po-md-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
            <po-datepicker
              class="po-md-3"
              name="birthday"
              [(ngModel)]="birthday"
              p-format="dd/mm/yyyy"
              p-label="Birthday"
              p-optional
            >
            </po-datepicker>
            <po-input class="po-md-3" name="document" [(ngModel)]="document" p-label="Document" p-optional> </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Address" [p-can-active-next-step]="canActiveNextStep.bind(this, addressForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        p-title="Purchase"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #addressForm="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-6"
              name="address.street"
              [(ngModel)]="address.street"
              p-label="Street/House"
              p-required
            >
            </po-input>
            <po-input class="po-md-3" name="number" [(ngModel)]="address.number" p-label="Number" p-required>
            </po-input>
            <po-input class="po-md-3" name="city" [(ngModel)]="address.city" p-label="City" p-required> </po-input>
          </div>
          <div class="po-row">
            <po-input class="po-md-3" name="code" [(ngModel)]="address.code" p-label="Postal Code" p-required>
            </po-input>
            <po-input class="po-md-3" name="country" [(ngModel)]="address.country" p-label="Country" p-required>
            </po-input>
            <po-input class="po-md-6" name="reference" [(ngModel)]="address.reference" p-label="Reference" p-optional>
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Payment" [p-can-active-next-step]="canActiveFinishStep.bind(this, paymentForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #paymentForm="ngForm">
          <div class="po-row">
            <po-input
              #cardname
              class="po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name"
              p-required
            >
            </po-input>

            <po-input
              #cardcode
              class="po-lg-4 po-md-9"
              name="cardCode"
              [(ngModel)]="cardCode"
              p-clean
              p-label="Code"
              p-mask="9999 9999 9999 9999"
              p-mask-format-model
              p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
              p-required
            >
            </po-input>

            <po-input
              #carddate
              class="po-lg-2 po-md-3"
              name="cardValid"
              [(ngModel)]="cardValid"
              p-clean
              p-label="Expiration Date"
              p-mask="12/99"
              p-mask-format-model
              p-pattern="\\d{2}\\/\\d{2}"
              p-required
            >
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Finish">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="confirmLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="onConfirmStep(stepper)"
      >
        <div class="po-row">
          <po-info class="po-md-3" p-label="Name" [p-value]="name"> </po-info>
          <po-info class="po-md-3" p-label="Document" [p-value]="document"> </po-info>
        </div>
        <div class="po-row">
          <po-info class="po-md-3" p-label="Address" [p-value]="address.street"> </po-info>
          <po-info class="po-md-3" p-label="Number" [p-value]="address.number"> </po-info>
          <po-info class="po-md-3" p-label="City" [p-value]="address.city"> </po-info>
          <po-info class="po-md-3" p-label="Country" [p-value]="address.country"> </po-info>
        </div>
        <po-divider />
        <div class="po-row">
          <po-info class="po-md-4" p-label="Product" p-value="Nike XYZ - Red/Gold Stripes"> </po-info>
          <po-info class="po-md-2" p-label="Price" p-value="$2.500,00"> </po-info>
          <po-info class="po-md-2" p-label="Discount" p-value="$500,00"> </po-info>
          <po-info class="po-md-2" p-label="Tax" p-value="$160,00"> </po-info>
          <po-info class="po-md-2" p-label="Final Price" p-value="$2.160,00"> </po-info>
        </div>
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #successData p-title="Informations">
  <div class="po-row">
    <img class="po-offset-md-6 po-offset-xl-3" src="../../../assets/graphics/check.jpg" width="350" height="350" />
    <p class="po-offset-md-8 po-offset-xl-3 po-font-title">Success! ORDER NUMBER: 5767686678609-XPTOA</p>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalComponent, PoStepComponent, PoStepperComponent } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'sample-po-stepper-sales',
  templateUrl: './sample-po-stepper-sales.component.html',
  styleUrls: ['./sample-po-stepper-sales.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperSalesComponent {
  @ViewChild('addressForm', { static: true }) addressForm: NgForm;
  @ViewChild('paymentForm', { static: true }) paymentForm: NgForm;
  @ViewChild('personalForm', { static: true }) personalForm: NgForm;
  @ViewChild('successData', { static: true }) successData: PoModalComponent;

  address: any;
  birthday: string;
  cardCode: string;
  cardName: string;
  cardValid: string;
  confirmLabelWidget: string = 'Confirm Purchase';
  currentActiveStep: PoStepComponent;
  document: string;
  isLoadingPayment: boolean = false;
  name: string;
  nextLabelWidget: string = 'Next Step';
  previousLabelWidget: string = 'Previous Step';

  constructor() {
    this.address = this.getAddress();
  }

  canActiveFinishStep(paymentForm: NgForm) {
    return of(paymentForm.form.valid).pipe(
      tap(() => (this.isLoadingPayment = true)),
      delay(2000),
      finalize(() => (this.isLoadingPayment = false))
    );
  }

  canActiveNextStep(form: NgForm) {
    return form.valid;
  }

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();

    this.resetForms();
    this.address = this.getAddress();
    stepper.first();
  }

  private getAddress() {
    return {
      city: 'Sao Paulo',
      code: '02511-000',
      country: 'Brazil',
      number: '1000',
      reference: '',
      street: 'Avenida Braz Leme'
    };
  }

  private resetForms(): void {
    this.personalForm.reset();
    this.paymentForm.reset();
  }
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-stepper-position-relative {
  position: relative;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-stepper-sales`),wg(),nu(29,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,at,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,We],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{http=p(zw);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var rt=[`basicInformation`];var lt=[`academicFormation`];var st=[`professionalExperiences`];function mt(a,j){if(a&1&&(jc(0,`div`,23)(1,`po-widget`,24)(2,`p`),iO(3),wg()()()),a&2){let m=j.$implicit;rg(),jE(`p-title`,m.title),rg(2),tb(m.description)}}function dt(a,j){if(a&1&&(jc(0,`div`,4),nu(1,`po-divider`,23),_x(2,mt,4,2,`div`,23,vx),wg()),a&2){let m=xx();rg(2),Dx(m.professionalExperiences)}}var Ne=(()=>{class a{sampleService=p(Be);changeDetector=p(He);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&iu(rt,7)(lt,7)(st,7)(eFe,5),r&2){let s;vo(s=_o())&&(i.basicInformationForm=s.first),vo(s=_o())&&(i.academicFormationForm=s.first),vo(s=_o())&&(i.professionalExperiencesForm=s.first),vo(s=_o())&&(i.stepper=s.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.basicInformation.name,o)||(i.basicInformation.name=o),v_(o)}),wg(),jc(7,`po-email`,6),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.basicInformation.email,o)||(i.basicInformation.email=o),v_(o)}),wg(),jc(8,`po-input`,7),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.basicInformation.phone,o)||(i.basicInformation.phone=o),v_(o)}),wg(),jc(9,`po-select`,8),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.basicInformation.state,o)||(i.basicInformation.state=o),v_(o)}),mt$1(`p-change`,function(){return i.onChangeState()}),wg(),jc(10,`po-select`,9),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.basicInformation.city,o)||(i.basicInformation.city=o),v_(o)}),wg()()()(),jc(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),nu(15,`po-divider`,11),jc(16,`po-input`,12),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.highSchool.name,o)||(i.highSchool.name=o),v_(o)}),wg(),jc(17,`po-input`,13),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.highSchool.city,o)||(i.highSchool.city=o),v_(o)}),wg(),jc(18,`po-input`,14),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),v_(o)}),wg()(),jc(19,`div`,4),nu(20,`po-divider`,15),jc(21,`po-input`,16),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.universityEducation.name,o)||(i.universityEducation.name=o),v_(o)}),wg(),jc(22,`po-input`,17),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.universityEducation.city,o)||(i.universityEducation.city=o),v_(o)}),wg(),jc(23,`po-input`,18),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),v_(o)}),wg()()()(),jc(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.experienceTitle,o)||(i.experienceTitle=o),v_(o)}),wg(),jc(29,`po-textarea`,21),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.experienceDescripton,o)||(i.experienceDescripton=o),v_(o)}),wg(),jc(30,`po-button`,22),mt$1(`p-click`,function(){y_(s);let o=Fx(26);return i.addProfessionalExperiences(o),v_(o.reset())}),wg()()(),px(31,dt,4,0,`div`,4),wg()()()}r&2&&(rg(6),ib(`ngModel`,i.basicInformation.name),t0(),rg(),ib(`ngModel`,i.basicInformation.email),t0(),rg(),ib(`ngModel`,i.basicInformation.phone),t0(),rg(),ib(`ngModel`,i.basicInformation.state),jE(`p-options`,i.stateOptions),t0(),rg(),ib(`ngModel`,i.basicInformation.city),jE(`p-options`,i.cityOptions),t0(),rg(6),ib(`ngModel`,i.highSchool.name),t0(),rg(),ib(`ngModel`,i.highSchool.city),t0(),rg(),ib(`ngModel`,i.highSchool.conclusionYear),t0(),rg(3),ib(`ngModel`,i.universityEducation.name),t0(),rg(),ib(`ngModel`,i.universityEducation.city),t0(),rg(),ib(`ngModel`,i.universityEducation.conclusionYear),t0(),rg(5),ib(`ngModel`,i.experienceTitle),t0(),rg(),ib(`ngModel`,i.experienceDescripton),t0(),rg(2),mx(i.professionalExperiences?31:-1))},dependencies:[wK,CK,EK,TF,EF,ni,Ec,Lf,K3,A5,moe,goe,dae,eFe,Noe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Stepper - Active`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container>
  <po-stepper>
    <po-step p-label="Basic information">
      <form #basicInformationForm="ngForm">
        <div class="po-row">
          <po-input class="po-md-6" name="name" [(ngModel)]="basicInformation.name" p-clean p-label="Name" p-required>
          </po-input>
          <po-email
            class="po-md-6"
            name="email"
            [(ngModel)]="basicInformation.email"
            p-clean
            p-label="Email"
            p-required
          >
          </po-email>
          <po-input class="po-md-4" name="phone" [(ngModel)]="basicInformation.phone" p-label="Phone" p-optional>
          </po-input>
          <po-select
            class="po-md-4"
            name="state"
            [(ngModel)]="basicInformation.state"
            p-label="State"
            [p-options]="stateOptions"
            (p-change)="onChangeState()"
          >
          </po-select>
          <po-select
            class="po-md-4"
            name="city"
            [(ngModel)]="basicInformation.city"
            p-label="City"
            [p-options]="cityOptions"
          >
          </po-select>
        </div>
      </form>
    </po-step>
    <po-step p-label="Academic formation">
      <form #academicFormationForm="ngForm">
        <div class="po-row">
          <po-divider class="po-md-12" p-label="High school"></po-divider>
          <po-input class="po-md-6" name="highSchoolName" [(ngModel)]="highSchool.name" p-clean p-label="Name">
          </po-input>
          <po-input class="po-md-3" name="highSchoolCity" [(ngModel)]="highSchool.city" p-clean p-label="City">
          </po-input>
          <po-input class="po-md-3" name="highSchoolPeriod" [(ngModel)]="highSchool.conclusionYear" p-label="Period">
          </po-input>
        </div>
        <div class="po-row">
          <po-divider class="po-md-12" p-label="University education"> </po-divider>
          <po-input
            class="po-md-6"
            name="universityEducationName"
            [(ngModel)]="universityEducation.name"
            p-clean
            p-label="Name"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationCity"
            [(ngModel)]="universityEducation.city"
            p-clean
            p-label="City"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationPeriod"
            [(ngModel)]="universityEducation.conclusionYear"
            p-label="Period"
          >
          </po-input>
        </div>
      </form>
    </po-step>
    <po-step p-label="Professional experiences">
      <form #professionalExperiencesForm="ngForm">
        <div class="po-row">
          <po-input
            class="po-md-12"
            name="experienceTitle"
            [(ngModel)]="experienceTitle"
            p-label="Professional position"
          ></po-input>
          <po-textarea
            class="po-md-12"
            name="experienceDescripton"
            [(ngModel)]="experienceDescripton"
            p-label="Describe your responsibilities"
            p-rows="4"
          ></po-textarea>
          <po-button
            class="po-md-4"
            type="submit"
            p-label="Add professional experience"
            (p-click)="addProfessionalExperiences(professionalExperiencesForm); professionalExperiencesForm.reset()"
          ></po-button>
        </div>
      </form>
      @if (professionalExperiences) {
        <div class="po-row">
          <po-divider class="po-md-12"> </po-divider>
          @for (experience of professionalExperiences; track experience) {
            <div class="po-md-12">
              <po-widget class="po-md-12" [p-title]="experience.title">
                <p>{ { experience.description }}</p>
              </po-widget>
            </div>
          }
        </div>
      }
    </po-step>
  </po-stepper>
</po-container>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PoSelectOption, PoStepperComponent } from '@po-ui/ng-components';
import { SamplePoStepperActiveService } from './sample-po-stepper-active.service';

@Component({
  selector: 'sample-po-stepper-active',
  templateUrl: './sample-po-stepper-active.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperActiveComponent implements OnInit, AfterViewInit, OnDestroy {
  sampleService = inject(SamplePoStepperActiveService);
  private changeDetector = inject(ChangeDetectorRef);

  @ViewChild('basicInformation', { static: true }) basicInformationForm: NgForm;
  @ViewChild('academicFormation', { static: true }) academicFormationForm: NgForm;
  @ViewChild('professionalExperiences', { static: true }) professionalExperiencesForm: NgForm;
  @ViewChild(PoStepperComponent) stepper: PoStepperComponent;

  cityOptions: Array<PoSelectOption> = [];
  stateOptions: Array<PoSelectOption> = [];
  basicInformation: any;
  highSchool: any;
  universityEducation: any;
  professionalExperiences: Array<any>;
  experienceTitle: string;
  experienceDescripton: string;
  overview: any;

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => this.activeStep());
  }

  ngOnInit(): void {
    this.basicInformation = this.getBasicInformations();
    this.highSchool = this.getHighSchool();
    this.universityEducation = this.getUniversityEducation();
    this.professionalExperiences = this.getProfessionalExperiencies();
    this.getStates();
  }

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  activeStep() {
    this.stepper.active(2);
  }

  onChangeState() {
    this.getCitiesByState(this.basicInformation.state);
  }

  addProfessionalExperiences(form: NgForm) {
    const experience = {
      title: form.value['experienceTitle'],
      description: form.value['experienceDescripton']
    };
    this.professionalExperiences = [...this.professionalExperiences, experience];
  }

  private getBasicInformations() {
    return {
      name: 'Maria Alice',
      email: 'mariaalice@gmail.com',
      phone: '47988888888',
      state: 'sp',
      city: 1
    };
  }

  private getHighSchool() {
    return {
      name: 'Escola de Ensino B\xE1sico Dr Jorge Lacerda',
      city: 'Joinville',
      conclusionYear: '2016'
    };
  }

  private getUniversityEducation() {
    return {
      name: 'Universidade Federal do Santa Catarina',
      city: 'Florian\xF3polis',
      conclusionYear: '2020'
    };
  }

  private getProfessionalExperiencies() {
    return [
      {
        title: 'Analista de desenvolvimento de software na TOTVS',
        description:
          'Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020'
      }
    ];
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.basicInformation.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.getCitiesByState(this.basicInformation.state);
    });
  }
}
`),wg(),jc(21,`label`,6),iO(22,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoStepperActiveService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-stepper-active`),wg(),nu(27,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ut,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ne],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{changeDetector=p(He);currentStep;stepsWithStatus=[{label:`Step 1`,status:qt.Done},{label:`Step 2`,status:qt.Active},{label:`Step 3`,status:qt.Default},{label:`Step 4`,status:qt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===qt.Active&&(r.status=qt.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===qt.Active&&(r.status=qt.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===qt.Disabled&&(this.stepsWithStatus[this.currentStep].status=qt.Default)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(jc(0,`po-stepper`,0),mt$1(`p-change-step`,function(c){return i.onChangeStatus(c)}),wg()),r&2&&jE(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[eFe],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Stepper - Steps`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoStepperItem, PoStepperStatus } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-steps',
  templateUrl: './sample-po-stepper-steps.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperStepsComponent implements AfterViewInit {
  private changeDetector = inject(ChangeDetectorRef);

  currentStep: number;
  stepsWithStatus: Array<PoStepperItem> = [
    { label: 'Step 1', status: PoStepperStatus.Done },
    { label: 'Step 2', status: PoStepperStatus.Active },
    { label: 'Step 3', status: PoStepperStatus.Default },
    { label: 'Step 4', status: PoStepperStatus.Disabled }
  ];

  ngAfterViewInit(): void {
    this.currentStep = 2;
    this.changeDetector.detectChanges();
  }

  onChangeStatus(event: number): void {
    this.currentStep = event;

    this.stepsWithStatus.forEach(step => {
      if (step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Done;
      }
    });

    this.stepsWithStatus.forEach((step, index) => {
      if (index > this.currentStep && step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Default;
      }
    });
    if (
      this.currentStep < this.stepsWithStatus.length &&
      this.stepsWithStatus[this.currentStep].status === PoStepperStatus.Disabled
    ) {
      this.stepsWithStatus[this.currentStep].status = PoStepperStatus.Default;
    }
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-stepper-steps`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ht,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ze],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1008,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`stepIconsProperty`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`stepperOrientation`],[`id`,`stepperStatus`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoStepperModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-stepper`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoStepperComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O `),jc(15,`code`),iO(16,`po-stepper`),wg(),iO(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),wg(),jc(18,`p`),iO(19,`Existem duas formas de utilização:`),wg(),jc(20,`p`),iO(21,`1 - Usando o componente `),jc(22,`a`,6)(23,`strong`),iO(24,`po-step`),wg()(),iO(25,` para renderizar e descrever os passos.`),wg(),jc(26,`p`),iO(27,`2 - Através da propriedade `),jc(28,`code`),iO(29,`p-steps`),wg(),iO(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),jc(31,`em`),iO(32,`step`),wg(),iO(33,` ativo.`),wg(),jc(34,`p`),iO(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),jc(36,`em`),iO(37,`steps`),wg(),iO(38,`.`),wg(),jc(39,`p`),iO(40,`Também é possível navegar entre os `),jc(41,`em`),iO(42,`steps`),wg(),iO(43,` através do teclado utilizando a tecla `),jc(44,`em`),iO(45,`tab`),wg(),iO(46,` e, para ativar o `),jc(47,`em`),iO(48,`step`),wg(),iO(49,` em foco basta
pressionar a tecla `),jc(50,`em`),iO(51,`enter`),wg(),iO(52,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),jc(53,`em`),iO(54,`steps`),wg(),iO(55,` atrav\xE9s da
propriedade `),jc(56,`a`,7)(57,`code`),iO(58,`p-step-icons`),wg()(),iO(59,`.`),wg(),jc(60,`h4`),iO(61,`Utilizando os métodos do componente:`),wg(),jc(62,`p`),iO(63,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),wg(),jc(64,`p`),iO(65,`Por exemplo, utilizando um `),jc(66,`a`,8)(67,`strong`),iO(68,`ViewChild`),wg()(),iO(69,`:`),wg(),jc(70,`pre`)(71,`code`),iO(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),wg()(),jc(73,`p`),iO(74,`E para acessar o método:`),wg(),jc(75,`pre`)(76,`code`),iO(77,`poStepperComponent.next();
`),wg()(),jc(78,`h4`),iO(79,`Boas práticas`),wg(),jc(80,`ul`)(81,`li`),iO(82,`Evite `),jc(83,`code`),iO(84,`labels`),wg(),iO(85,` extensos que quebram o layout do `),jc(86,`code`),iO(87,`po-stepper`),wg(),iO(88,`, use `),jc(89,`code`),iO(90,`labels`),wg(),iO(91,` diretos, curtos e intuitivos.`),wg(),jc(92,`li`),iO(93,`Utilize apenas um `),jc(94,`code`),iO(95,`po-stepper`),wg(),iO(96,` por página.`),wg()(),jc(97,`h4`),iO(98,`Tokens customizáveis`),wg(),jc(99,`p`),iO(100,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(101,`blockquote`)(102,`p`),iO(103,`Para maiores informações, acesse o guia `),jc(104,`a`,9),iO(105,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(106,`.`),wg()(),jc(107,`table`)(108,`thead`)(109,`tr`)(110,`th`),iO(111,`Propriedade`),wg(),jc(112,`th`),iO(113,`Descrição`),wg(),jc(114,`th`),iO(115,`Valor Padrão`),wg()()(),jc(116,`tbody`)(117,`tr`)(118,`td`)(119,`strong`),iO(120,`Label`),wg()(),nu(121,`td`)(122,`td`),wg(),jc(123,`tr`)(124,`td`)(125,`code`),iO(126,`--font-family`),wg()(),jc(127,`td`),iO(128,`Família tipográfica usada`),wg(),jc(129,`td`)(130,`code`),iO(131,`var(--font-family-theme)`),wg()()(),jc(132,`tr`)(133,`td`)(134,`code`),iO(135,`--font-size`),wg()(),jc(136,`td`),iO(137,`Tamanho da fonte`),wg(),jc(138,`td`)(139,`code`),iO(140,`var(--font-size-default)`),wg()()(),jc(141,`tr`)(142,`td`)(143,`code`),iO(144,`--font-weight`),wg()(),jc(145,`td`),iO(146,`Peso da fonte`),wg(),jc(147,`td`)(148,`code`),iO(149,`var(--font-weight-normal)`),wg()()(),jc(150,`tr`)(151,`td`)(152,`strong`),iO(153,`Step - Done`),wg()(),nu(154,`td`)(155,`td`),wg(),jc(156,`tr`)(157,`td`)(158,`code`),iO(159,`--text-color`),wg()(),jc(160,`td`),iO(161,`Cor do texto no step concluído`),wg(),jc(162,`td`)(163,`code`),iO(164,`var(--color-neutral-dark-70)`),wg()()(),jc(165,`tr`)(166,`td`)(167,`code`),iO(168,`--color-icon-done`),wg()(),jc(169,`td`),iO(170,`Cor do ícone no step concluído`),wg(),jc(171,`td`)(172,`code`),iO(173,`var(--color-neutral-dark-70)`),wg()()(),jc(174,`tr`)(175,`td`)(176,`code`),iO(177,`--background-done`),wg()(),jc(178,`td`),iO(179,`Cor de fundo no step concluído`),wg(),jc(180,`td`)(181,`code`),iO(182,`var(--color-neutral-light-00)`),wg()()(),jc(183,`tr`)(184,`td`)(185,`strong`),iO(186,`Line - Done`),wg()(),nu(187,`td`)(188,`td`),wg(),jc(189,`tr`)(190,`td`)(191,`code`),iO(192,`--color-line-done`),wg()(),jc(193,`td`),iO(194,`Cor da linha no step concluído`),wg(),jc(195,`td`)(196,`code`),iO(197,`var(--color-neutral-mid-40)`),wg()()(),jc(198,`tr`)(199,`td`)(200,`strong`),iO(201,`Step - Current`),wg()(),nu(202,`td`)(203,`td`),wg(),jc(204,`tr`)(205,`td`)(206,`code`),iO(207,`--color-icon-current`),wg()(),jc(208,`td`),iO(209,`Cor do ícone no step atual`),wg(),jc(210,`td`)(211,`code`),iO(212,`var(--color-neutral-light-00)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`code`),iO(216,`--background-current`),wg()(),jc(217,`td`),iO(218,`Cor de fundo no step atual`),wg(),jc(219,`td`)(220,`code`),iO(221,`var(--color-action-default)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`code`),iO(225,`--font-weight-current`),wg()(),jc(226,`td`),iO(227,`Peso da fonte no step atual`),wg(),jc(228,`td`)(229,`code`),iO(230,`var(--font-weight-bold)`),wg()()(),jc(231,`tr`)(232,`td`)(233,`strong`),iO(234,`Step - Next`),wg()(),nu(235,`td`)(236,`td`),wg(),jc(237,`tr`)(238,`td`)(239,`code`),iO(240,`--font-size-circle`),wg()(),jc(241,`td`),iO(242,`Tamanho da fonte no círculo do próximo step`),wg(),jc(243,`td`)(244,`code`),iO(245,`var(--font-size-sm)`),wg()()(),jc(246,`tr`)(247,`td`)(248,`code`),iO(249,`--color-next`),wg()(),jc(250,`td`),iO(251,`Cor do ícone no próximo step`),wg(),jc(252,`td`)(253,`code`),iO(254,`var(--color-action-disabled)`),wg()()(),jc(255,`tr`)(256,`td`)(257,`code`),iO(258,`--text-color-next`),wg()(),jc(259,`td`),iO(260,`Cor do texto no próximo step`),wg(),jc(261,`td`)(262,`code`),iO(263,`var(--color-neutral-light-30)`),wg()()(),jc(264,`tr`)(265,`td`)(266,`strong`),iO(267,`Focused`),wg()(),nu(268,`td`)(269,`td`),wg(),jc(270,`tr`)(271,`td`)(272,`code`),iO(273,`--outline-color-focused`),wg()(),jc(274,`td`),iO(275,`Cor do outline do estado de focus`),wg(),jc(276,`td`)(277,`code`),iO(278,`var(--color-action-focus)`),wg()()()()()(),jc(279,`div`,10)(280,`h4`,11),iO(281,`Seletor`),wg(),jc(282,`pre`,12),iO(283,`<po-stepper
    p-align-center="boolean"
    p-disable-click="boolean"
    p-step-icon-active="string | TemplateRef<void>"
    p-step-icon-done="string | TemplateRef<void>"
    (p-change-step)="EventEmitter"
    p-orientation="PoStepperOrientation"
    p-sequential="boolean"
    p-step="number"
    p-step-icons="boolean"
    p-step-size="number"
    p-steps="Array<PoStepperItem>" >
</po-stepper>
`),wg()(),jc(284,`h4`,13),iO(285,`Propriedades`),wg(),jc(286,`table`,14)(287,`tr`,15)(288,`th`,16),iO(289,`Nome`),wg(),jc(290,`th`,16),iO(291,`Tipo`),wg(),jc(292,`th`,16),iO(293,`Padrão`),wg(),jc(294,`th`,16),iO(295,`Descrição`),wg()(),jc(296,`tr`,17)(297,`td`,18)(298,`div`,19)(299,`span`,20),iO(300,` p-align-center`),nu(301,`br`),wg()()(),jc(302,`td`,21)(303,`code`,22),iO(304,`boolean`),wg()(),jc(305,`td`,23)(306,`p`)(307,`code`),iO(308,`true`),wg()()(),jc(309,`td`,24)(310,`em`)(311,`strong`),iO(312,`(opcional)`),wg()(),jc(313,`p`),iO(314,`Define o alinhamento dos `),jc(315,`em`),iO(316,`steps`),wg(),iO(317,` e `),jc(318,`em`),iO(319,`labels`),wg(),iO(320,` no `),jc(321,`em`),iO(322,`stepper`),wg(),iO(323,`, dependendo da orientação.`),wg(),jc(324,`ul`)(325,`li`),iO(326,`Quando `),jc(327,`code`),iO(328,`true`),wg(),iO(329,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),wg(),jc(330,`li`),iO(331,`Quando `),jc(332,`code`),iO(333,`false`),wg(),iO(334,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),wg()()()(),jc(335,`tr`,17)(336,`td`,18)(337,`div`,19)(338,`span`,20),iO(339,` p-disable-click`),nu(340,`br`),wg()()(),jc(341,`td`,21)(342,`code`,22),iO(343,`boolean`),wg()(),jc(344,`td`,23)(345,`p`)(346,`code`),iO(347,`false`),wg()()(),jc(348,`td`,24)(349,`em`)(350,`strong`),iO(351,`(opcional)`),wg()(),jc(352,`p`),iO(353,`Desabilita o clique nos steps.`),wg()()(),jc(354,`tr`,17)(355,`td`,18)(356,`div`,19)(357,`span`,20),iO(358,` p-step-icon-active`),nu(359,`br`),wg()()(),jc(360,`td`,21)(361,`code`,25),iO(362,`string `),wg(),jc(363,`code`,26),iO(364,` TemplateRef<void>`),wg()(),jc(365,`td`,23)(366,`p`)(367,`code`),iO(368,`po-icon-edit`),wg()()(),jc(369,`td`,24)(370,`em`)(371,`strong`),iO(372,`(opcional)`),wg()(),jc(373,`p`),iO(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),jc(375,`a`,27),iO(376,`Biblioteca de ícones`),wg(),iO(377,`.`),wg(),jc(378,`pre`)(379,`code`),iO(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),wg()(),jc(381,`p`),iO(382,`Para customizar o ícone através do `),jc(383,`code`),iO(384,`TemplateRef`),wg(),iO(385,`, veja a documentação da propriedade `),jc(386,`code`),iO(387,`p-step-icon-done`),wg(),iO(388,`.`),wg(),jc(389,`blockquote`)(390,`p`),iO(391,`Deve-se usar `),jc(392,`code`),iO(393,`font-size: inherit`),wg(),iO(394,` para ajustar ícones que não se ajustam automaticamente.`),wg()()()(),jc(395,`tr`,17)(396,`td`,18)(397,`div`,19)(398,`span`,20),iO(399,` p-step-icon-done`),nu(400,`br`),wg()()(),jc(401,`td`,21)(402,`code`,25),iO(403,`string `),wg(),jc(404,`code`,26),iO(405,` TemplateRef<void>`),wg()(),jc(406,`td`,23)(407,`p`)(408,`code`),iO(409,`po-icon-ok`),wg()()(),jc(410,`td`,24)(411,`em`)(412,`strong`),iO(413,`(opcional)`),wg()(),jc(414,`p`),iO(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),jc(416,`a`,27),iO(417,`Biblioteca de ícones`),wg()(),jc(418,`pre`)(419,`code`),iO(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),wg()(),jc(421,`p`),iO(422,`Outra opção seria a customização do ícone através do `),jc(423,`code`),iO(424,`TemplateRef`),wg(),iO(425,`, conforme exemplo abaixo:`),wg(),jc(426,`pre`)(427,`code`),iO(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),wg()(),jc(429,`blockquote`)(430,`p`),iO(431,`Deve-se usar `),jc(432,`code`),iO(433,`font-size: inherit`),wg(),iO(434,` para ajustar ícones que não se ajustam automaticamente.`),wg()()()(),jc(435,`tr`,17)(436,`td`,18)(437,`div`,28)(438,`span`,29),iO(439,` (p-change-step)`),nu(440,`br`),wg()()(),jc(441,`td`,21)(442,`code`,30),iO(443,`EventEmitter`),wg()(),jc(444,`td`,23),iO(445,`-`),wg(),jc(446,`td`,24)(447,`p`),iO(448,`Ação que será executada quando o usuário mudar o passo do `),jc(449,`code`),iO(450,`po-stepper`),wg(),iO(451,`.`),wg()()(),jc(452,`tr`,17)(453,`td`,18)(454,`div`,19)(455,`span`,20),iO(456,` p-orientation`),nu(457,`br`),wg()()(),jc(458,`td`,21)(459,`code`,31),iO(460,`PoStepperOrientation`),wg()(),jc(461,`td`,23)(462,`p`)(463,`code`),iO(464,`PoStepperOrientation.Horizontal`),wg()()(),jc(465,`td`,24)(466,`em`)(467,`strong`),iO(468,`(opcional)`),wg()(),jc(469,`p`),iO(470,`Define a orientação de exibição do `),jc(471,`code`),iO(472,`po-stepper`),wg(),iO(473,`.`),wg(),jc(474,`blockquote`)(475,`p`),iO(476,`Veja os valores válidos no `),jc(477,`em`),iO(478,`enum`),wg(),jc(479,`a`,32),iO(480,`PoStepperOrientation`),wg(),iO(481,`.`),wg()()()(),jc(482,`tr`,17)(483,`td`,18)(484,`div`,19)(485,`span`,20),iO(486,` p-sequential`),nu(487,`br`),wg()()(),jc(488,`td`,21)(489,`code`,22),iO(490,`boolean`),wg()(),jc(491,`td`,23)(492,`p`)(493,`code`),iO(494,`true`),wg()()(),jc(495,`td`,24)(496,`em`)(497,`strong`),iO(498,`(opcional)`),wg()(),jc(499,`p`),iO(500,`Define se o `),jc(501,`code`),iO(502,`po-stepper`),wg(),iO(503,` será sequencial ou aleatório.`),wg(),jc(504,`blockquote`)(505,`p`),iO(506,`Ao utilizar o componente `),jc(507,`a`,6)(508,`strong`),iO(509,`po-step`),wg()(),iO(510,`, o valor desta propriedade sempre será verdadeiro.`),wg()()()(),jc(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),iO(515,` p-step`),nu(516,`br`),wg()()(),jc(517,`td`,21)(518,`code`,33),iO(519,`number`),wg()(),jc(520,`td`,23)(521,`p`)(522,`code`),iO(523,`1`),wg()()(),jc(524,`td`,24)(525,`em`)(526,`strong`),iO(527,`(opcional)`),wg()(),jc(528,`p`),iO(529,`Controla o passo atual do `),jc(530,`code`),iO(531,`po-stepper`),wg(),iO(532,`.`),wg(),jc(533,`blockquote`)(534,`p`),iO(535,`Ao utilizar esta propriedade e também utilizar o componente `),jc(536,`a`,6)(537,`strong`),iO(538,`po-step`),wg()(),iO(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),jc(540,`a`,6)(541,`strong`),iO(542,`po-step`),wg()(),iO(543,`.`),wg()()()(),jc(544,`tr`,17)(545,`td`,18)(546,`div`,19)(547,`span`,20),iO(548,` p-step-icons`),nu(549,`br`),wg()()(),jc(550,`td`,21)(551,`code`,22),iO(552,`boolean`),wg()(),jc(553,`td`,23)(554,`p`)(555,`code`),iO(556,`false`),wg()()(),jc(557,`td`,24)(558,`em`)(559,`strong`),iO(560,`(opcional)`),wg()(),jc(561,`p`),nu(562,`a`,34),wg(),jc(563,`p`),iO(564,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),jc(565,`em`),iO(566,`steps`),wg(),iO(567,`.`),wg()()(),jc(568,`tr`,17)(569,`td`,18)(570,`div`,19)(571,`span`,20),iO(572,` p-step-size`),nu(573,`br`),wg()()(),jc(574,`td`,21)(575,`code`,33),iO(576,`number`),wg()(),jc(577,`td`,23)(578,`p`)(579,`code`),iO(580,`24`),wg()()(),jc(581,`td`,24)(582,`em`)(583,`strong`),iO(584,`(opcional)`),wg()(),jc(585,`p`),iO(586,`Define o tamanho dos `),jc(587,`em`),iO(588,`steps`),wg(),iO(589,` em `),jc(590,`em`),iO(591,`pixels`),wg(),iO(592,`, possibilitando um maior destaque.`),wg(),jc(593,`p`),iO(594,`O valor informado deve ser entre `),jc(595,`code`),iO(596,`24`),wg(),iO(597,` e `),jc(598,`code`),iO(599,`64`),wg(),iO(600,`.`),wg(),jc(601,`blockquote`)(602,`p`),iO(603,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),jc(604,`em`),iO(605,`default`),wg(),iO(606,`.`),wg()()()(),jc(607,`tr`,17)(608,`td`,18)(609,`div`,19)(610,`span`,20),iO(611,` p-steps`),nu(612,`br`),wg()()(),jc(613,`td`,21)(614,`code`,35),iO(615,`Array<PoStepperItem>`),wg()(),jc(616,`td`,23),iO(617,`-`),wg(),jc(618,`td`,24)(619,`em`)(620,`strong`),iO(621,`(opcional)`),wg()(),jc(622,`p`),iO(623,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),wg(),jc(624,`blockquote`)(625,`p`),iO(626,`Ao utilizar esta propriedade e também utilizar o componente `),jc(627,`a`,6)(628,`strong`),iO(629,`po-step`),wg()(),iO(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),jc(631,`a`,6)(632,`strong`),iO(633,`po-step`),wg()(),iO(634,`.`),wg()()()()(),jc(635,`h3`,13),iO(636,`Métodos`),wg(),jc(637,`table`,36)(638,`tr`,17)(639,`th`,37)(640,`div`,19)(641,`h4`)(642,`span`,20),iO(643,` active `),wg()()()()(),jc(644,`tr`,24)(645,`td`,24)(646,`p`),iO(647,`Altera o status do `),jc(648,`em`),iO(649,`step`),wg(),iO(650,` para ativo.`),wg(),jc(651,`blockquote`)(652,`p`),iO(653,`Este método é valido apenas para as implementações que utilizam o componente `),jc(654,`a`,6)(655,`strong`),iO(656,`po-step`),wg()(),iO(657,`.`),wg()()()()(),jc(658,`h5`)(659,`b`),iO(660,`Parâmetros`),wg()(),jc(661,`table`,14)(662,`tr`,15)(663,`th`,16),iO(664,`Nome`),wg(),jc(665,`th`,16),iO(666,`Tipo`),wg(),jc(667,`th`,16),iO(668,`Descrição`),wg()(),jc(669,`tr`,17)(670,`td`,18),iO(671,` index`),wg(),jc(672,`td`,21)(673,`code`,38),iO(674,` number `),wg()(),jc(675,`td`,24)(676,`p`),iO(677,`Índice do `),jc(678,`code`),iO(679,`po-step`),wg(),iO(680,` que se deseja ativar.`),wg()()()(),nu(681,`br`),jc(682,`table`,36)(683,`tr`,17)(684,`th`,37)(685,`div`,19)(686,`h4`)(687,`span`,20),iO(688,` first `),wg()()()()(),jc(689,`tr`,24)(690,`td`,24)(691,`p`),iO(692,`Ativa o primeiro `),jc(693,`em`),iO(694,`step`),wg(),iO(695,`.`),wg(),jc(696,`blockquote`)(697,`p`),iO(698,`Este método é valido apenas para as implementações que utilizam o componente `),jc(699,`a`,6)(700,`strong`),iO(701,`po-step`),wg()(),iO(702,`.`),wg()()()()(),nu(703,`br`),jc(704,`table`,36)(705,`tr`,17)(706,`th`,37)(707,`div`,19)(708,`h4`)(709,`span`,20),iO(710,` next `),wg()()()()(),jc(711,`tr`,24)(712,`td`,24)(713,`p`),iO(714,`Ativa o próximo `),jc(715,`em`),iO(716,`step`),wg(),iO(717,`.`),wg(),jc(718,`blockquote`)(719,`p`),iO(720,`Este método é valido apenas para as implementações que utilizam o componente `),jc(721,`a`,6)(722,`strong`),iO(723,`po-step`),wg()(),iO(724,`.`),wg()()()()(),nu(725,`br`),jc(726,`table`,36)(727,`tr`,17)(728,`th`,37)(729,`div`,19)(730,`h4`)(731,`span`,20),iO(732,` previous `),wg()()()()(),jc(733,`tr`,24)(734,`td`,24)(735,`p`),iO(736,`Ativa o `),jc(737,`em`),iO(738,`step`),wg(),iO(739,` anterior.`),wg(),jc(740,`blockquote`)(741,`p`),iO(742,`Este método é valido apenas para as implementações que utilizam o componente `),jc(743,`a`,6)(744,`strong`),iO(745,`po-step`),wg()(),iO(746,`.`),wg()()()()(),nu(747,`br`),jc(748,`h3`),iO(749,`Interfaces`),wg(),jc(750,`h4`,39)(751,`code`,5),iO(752,`PoStepperItem`),wg()(),jc(753,`div`,2)(754,`p`),iO(755,`Interface para definição dos `),jc(756,`em`),iO(757,`steps`),wg(),iO(758,` do componente `),jc(759,`code`),iO(760,`po-stepper`),wg(),iO(761,` quando utilizada a propriedade `),jc(762,`code`),iO(763,`p-steps`),wg(),iO(764,`.`),wg()(),jc(765,`h4`,13),iO(766,`Propriedades`),wg(),jc(767,`table`,14)(768,`tr`,15)(769,`th`,16),iO(770,`Nome`),wg(),jc(771,`th`,16),iO(772,`Tipo`),wg(),jc(773,`th`,16),iO(774,`Descrição`),wg()(),jc(775,`tr`,17)(776,`td`,18)(777,`div`,19)(778,`span`,20),iO(779,` iconActive`),nu(780,`br`),wg()()(),jc(781,`td`,21)(782,`code`,25),iO(783,`string `),wg(),jc(784,`code`,26),iO(785,` TemplateRef<void>`),wg()(),jc(786,`td`,24)(787,`em`)(788,`strong`),iO(789,`(opcional)`),wg()(),jc(790,`p`),iO(791,`Define o ícone do `),jc(792,`em`),iO(793,`step`),wg(),iO(794,` ativo.`),wg()()(),jc(795,`tr`,17)(796,`td`,18)(797,`div`,19)(798,`span`,20),iO(799,` iconDefault`),nu(800,`br`),wg()()(),jc(801,`td`,21)(802,`code`,25),iO(803,`string `),wg(),jc(804,`code`,26),iO(805,` TemplateRef<void>`),wg()(),jc(806,`td`,24)(807,`em`)(808,`strong`),iO(809,`(opcional)`),wg()(),jc(810,`p`),iO(811,`Define o ícone do `),jc(812,`em`),iO(813,`step`),wg(),iO(814,` default.`),wg()()(),jc(815,`tr`,17)(816,`td`,18)(817,`div`,19)(818,`span`,20),iO(819,` iconDone`),nu(820,`br`),wg()()(),jc(821,`td`,21)(822,`code`,25),iO(823,`string `),wg(),jc(824,`code`,26),iO(825,` TemplateRef<void>`),wg()(),jc(826,`td`,24)(827,`em`)(828,`strong`),iO(829,`(opcional)`),wg()(),jc(830,`p`),iO(831,`Define o ícone do `),jc(832,`em`),iO(833,`step`),wg(),iO(834,` concluído.`),wg()()(),jc(835,`tr`,17)(836,`td`,18)(837,`div`,19)(838,`span`,20),iO(839,` id`),nu(840,`br`),wg()()(),jc(841,`td`,21)(842,`code`,25),iO(843,`string`),wg()(),jc(844,`td`,24)(845,`em`)(846,`strong`),iO(847,`(opcional)`),wg()(),jc(848,`p`),iO(849,`Identificador único do step.`),wg()()(),jc(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),iO(854,` label`),nu(855,`br`),wg()()(),jc(856,`td`,21)(857,`code`,25),iO(858,`string`),wg()(),jc(859,`td`,24)(860,`em`)(861,`strong`),iO(862,`(opcional)`),wg()(),jc(863,`p`),iO(864,`Texto do item do stepper.`),wg()()(),jc(865,`tr`,17)(866,`td`,18)(867,`div`,19)(868,`span`,20),iO(869,` status`),nu(870,`br`),wg()()(),jc(871,`td`,21)(872,`code`,40),iO(873,`PoStepperStatus`),wg()(),jc(874,`td`,24)(875,`em`)(876,`strong`),iO(877,`(opcional)`),wg()(),jc(878,`p`),iO(879,`Define o estado de exibição do `),jc(880,`em`),iO(881,`step`),wg(),iO(882,`.`),wg()()()(),jc(883,`h3`),iO(884,`Enums`),wg(),jc(885,`h4`,4)(886,`code`,5),iO(887,`PoStepperOrientation`),wg()(),jc(888,`div`,2)(889,`p`),nu(890,`a`,41),wg(),jc(891,`p`)(892,`em`),iO(893,`Enums`),wg(),iO(894,` para definição da orientação do `),jc(895,`code`),iO(896,`po-stepper`),wg(),iO(897,`.`),wg()(),jc(898,`h4`,13),iO(899,`Propriedades`),wg(),jc(900,`table`,14)(901,`tr`,15)(902,`th`,16),iO(903,`Nome`),wg(),jc(904,`th`,16),iO(905,`Descrição`),wg()(),jc(906,`tr`,17)(907,`td`,18)(908,`div`,19)(909,`span`,20),iO(910,` Horizontal`),nu(911,`br`),wg()()(),jc(912,`td`,24)(913,`p`),iO(914,`Define a exibição do componente na horizontal.`),wg()()(),jc(915,`tr`,17)(916,`td`,18)(917,`div`,19)(918,`span`,20),iO(919,` Vertical`),nu(920,`br`),wg()()(),jc(921,`td`,24)(922,`p`),iO(923,`Define a exibição do componente na vertical.`),wg()()()(),jc(924,`h4`,4)(925,`code`,5),iO(926,`PoStepperStatus`),wg()(),jc(927,`div`,2)(928,`p`),nu(929,`a`,42),wg(),jc(930,`p`)(931,`em`),iO(932,`Enums`),wg(),iO(933,` para os status do `),jc(934,`code`),iO(935,`po-stepper`),wg(),iO(936,` quando utilizada a propriedade `),jc(937,`code`),iO(938,`p-steps`),wg(),iO(939,`.`),wg()(),jc(940,`h4`,13),iO(941,`Propriedades`),wg(),jc(942,`table`,14)(943,`tr`,15)(944,`th`,16),iO(945,`Nome`),wg(),jc(946,`th`,16),iO(947,`Descrição`),wg()(),jc(948,`tr`,17)(949,`td`,18)(950,`div`,19)(951,`span`,20),iO(952,` Active`),nu(953,`br`),wg()()(),jc(954,`td`,24)(955,`p`),iO(956,`Define o estado do `),jc(957,`em`),iO(958,`step`),wg(),iO(959,` como ativo.`),wg()()(),jc(960,`tr`,17)(961,`td`,18)(962,`div`,19)(963,`span`,20),iO(964,` Default`),nu(965,`br`),wg()()(),jc(966,`td`,24)(967,`p`),iO(968,`Define o estado do `),jc(969,`em`),iO(970,`step`),wg(),iO(971,` como padrão.`),wg()()(),jc(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),iO(976,` Disabled`),nu(977,`br`),wg()()(),jc(978,`td`,24)(979,`p`),iO(980,`Define o estado do `),jc(981,`em`),iO(982,`step`),wg(),iO(983,` como desabilitado.`),wg()()(),jc(984,`tr`,17)(985,`td`,18)(986,`div`,19)(987,`span`,20),iO(988,` Done`),nu(989,`br`),wg()()(),jc(990,`td`,24)(991,`p`),iO(992,`Define o estado do `),jc(993,`em`),iO(994,`step`),wg(),iO(995,` como concluído.`),wg()()(),jc(996,`tr`,17)(997,`td`,18)(998,`div`,19)(999,`span`,20),iO(1e3,` Error`),nu(1001,`br`),wg()()(),jc(1002,`td`,24)(1003,`p`),iO(1004,`Define o estado do `),jc(1005,`em`),iO(1006,`step`),wg(),iO(1007,` com erro.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var bt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Stepper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt$1(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-stepper-doc`),wg(),jc(4,`po-tab`,3),mt$1(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-stepper-basic-view`)(6,`sample-po-stepper-labs-view`)(7,`sample-po-stepper-sales-view`)(8,`sample-po-stepper-active-view`)(9,`sample-po-stepper-steps-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,Ve,Ae,Le,qe,Oe,Re],encapsulation:2,changeDetection:1})}return a})()}];var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(bt),C1]})}return a})();var En=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,je]})}return a})();export{En as DocPoStepperModule};