import{t as r}from"./chunk-zystk1pz.js";import{$r as Wx,Ar as O,Bi as kx,Bn as $e$1,Br as RE,D as DP,Di as he,Dt as aae,En as wa,Hn as AN,I as Goe,Kn as BP,Li as kL,Nt as doe,Pi as ji,Pr as Ox,Q as Pze,Qi as pt,R as Ic,Rr as Qn,Sa as zO,Sr as Kc,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Ur as Rx,Wi as mg,Wn as Ax,Wt as ioe,Xn as C9,Xr as Ue,Yn as Bx,ai as aN,at as Rt,da as uv,dr as Hp,dt as Tte,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,ht as V3,i as _a,ii as Zx,in as ooe,ji as hw,ki as ho,kn as wze,kr as Nx,la as ug,li as cE,lr as Hn,mr as IE,nn as ob,oi as b9,pr as I,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-VW33P2VM.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(Ac(0,`po-stepper`,0),Kc(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),ug()),r&2&&cE(`p-align-center`,!1)},dependencies:[Goe,wze],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Stepper Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-stepper-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ye,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,j){if(a&1&&(Ac(0,`po-step`,3)(1,`h2`),vN(2),ug()()),a&2){let m=j.$implicit;cE(`p-label`,m.label)(`p-icon-default`,m.iconDefault),Hp(2),mg(`Step Content `,m.label)}}var ke=(()=>{class a{changeDetector=f(Ue);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(m){this.steps=[...this.steps,r({},m)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(m){this.event=m,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`po-container`)(1,`po-stepper`,2),pt(`p-change-step`,function(){return i.changeStep(`change`)}),Ox(2,Ge,3,3,`po-step`,3,Nx),ug(),Kc(4,`po-divider`)(5,`po-info`,4),Ac(6,`form`,null,0),Kc(8,`po-dynamic-form`,5),Ac(9,`div`,6)(10,`po-button`,7),pt(`p-click`,function(){Jv(s);let o=Zx(7);return i.addItem(i.stepItem),e_(o.reset())}),ug()()(),Ac(11,`form`,null,1),Kc(13,`po-dynamic-form`,5)(14,`po-divider`),Ac(15,`div`,6)(16,`po-button`,8),pt(`p-click`,function(){Jv(s);let o=Zx(7),Ue=Zx(12);return i.restore(),Ue.reset(),e_(o.reset())}),ug()()()()}if(r&2){let s=Zx(7);Hp(),cE(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),Hp(),kx(i.steps),Hp(3),cE(`p-value`,i.event),Hp(3),cE(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),Hp(2),cE(`p-disabled`,s.invalid),Hp(3),cE(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[b9,C9,LP,ni,Ic,ob,doe,roe,Goe,wze],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Stepper Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-stepper-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ke],encapsulation:2,changeDetection:1})}return a})();var $e=[`addressForm`];var et=[`paymentForm`];var tt=[`personalForm`];var nt=[`successData`];function it(a,j){a&1&&Kc(0,`po-loading-overlay`,18)}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(m){return O(m.form.valid).pipe($e$1(()=>this.isLoadingPayment=!0),uv(2e3),ji(()=>this.isLoadingPayment=!1))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&Xc($e,7)(et,7)(tt,7)(nt,7),r&2){let s;fo(s=ho())&&(i.addressForm=s.first),fo(s=ho())&&(i.paymentForm=s.first),fo(s=ho())&&(i.personalForm=s.first),fo(s=ho())&&(i.successData=s.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),Kc(4,`img`,11),ug(),Ac(5,`div`,12)(6,`p`,13),vN(7,`Nike XYZ - Red/Gold Stripes`),ug(),Ac(8,`p`,14),vN(9,`Brand: Nike | Style: Modern | Men's`),ug(),Ac(10,`p`,15),vN(11,`Width: 12.5 - COD: 001254648412319`),ug(),Kc(12,`po-divider`),Ac(13,`p`,15),vN(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),ug()()()(),Ac(15,`po-widget`,16)(16,`p`,15),vN(17,`$2.500,00`),ug(),Ac(18,`p`,15),vN(19,`$500,00(-)`),ug(),Ac(20,`p`,15),vN(21,`$160,00(+)`),ug(),Kc(22,`po-divider`),Ac(23,`p`,14),vN(24,`Total: $2.160,00`),ug()()(),Kc(25,`po-divider`),Ac(26,`div`,17),Rx(27,it,1,0,`po-loading-overlay`,18),Ac(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),pt(`p-primary-action`,function(){Jv(s);let o=Zx(29);return e_(o.next())}),Ac(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),RE(`ngModelChange`,function(o){return Jv(s),DN(i.name,o)||(i.name=o),e_(o)}),ug(),p0(),Ac(36,`po-datepicker`,23),RE(`ngModelChange`,function(o){return Jv(s),DN(i.birthday,o)||(i.birthday=o),e_(o)}),ug(),p0(),Ac(37,`po-input`,24),RE(`ngModelChange`,function(o){return Jv(s),DN(i.document,o)||(i.document=o),e_(o)}),ug(),p0(),ug()()()(),Ac(38,`po-step`,25)(39,`po-widget`,26),pt(`p-primary-action`,function(){Jv(s);let o=Zx(29);return e_(o.previous())})(`p-secondary-action`,function(){Jv(s);let o=Zx(29);return e_(o.next())}),Ac(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),RE(`ngModelChange`,function(o){return Jv(s),DN(i.address.street,o)||(i.address.street=o),e_(o)}),ug(),p0(),Ac(44,`po-input`,28),RE(`ngModelChange`,function(o){return Jv(s),DN(i.address.number,o)||(i.address.number=o),e_(o)}),ug(),p0(),Ac(45,`po-input`,29),RE(`ngModelChange`,function(o){return Jv(s),DN(i.address.city,o)||(i.address.city=o),e_(o)}),ug(),p0(),ug(),Ac(46,`div`,8)(47,`po-input`,30),RE(`ngModelChange`,function(o){return Jv(s),DN(i.address.code,o)||(i.address.code=o),e_(o)}),ug(),p0(),Ac(48,`po-input`,31),RE(`ngModelChange`,function(o){return Jv(s),DN(i.address.country,o)||(i.address.country=o),e_(o)}),ug(),p0(),Ac(49,`po-input`,32),RE(`ngModelChange`,function(o){return Jv(s),DN(i.address.reference,o)||(i.address.reference=o),e_(o)}),ug(),p0(),ug()()()(),Ac(50,`po-step`,33)(51,`po-widget`,26),pt(`p-primary-action`,function(){Jv(s);let o=Zx(29);return e_(o.previous())})(`p-secondary-action`,function(){Jv(s);let o=Zx(29);return e_(o.next())}),Ac(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),RE(`ngModelChange`,function(o){return Jv(s),DN(i.cardName,o)||(i.cardName=o),e_(o)}),ug(),p0(),Ac(57,`po-input`,35,5),RE(`ngModelChange`,function(o){return Jv(s),DN(i.cardCode,o)||(i.cardCode=o),e_(o)}),ug(),p0(),Ac(59,`po-input`,36,6),RE(`ngModelChange`,function(o){return Jv(s),DN(i.cardValid,o)||(i.cardValid=o),e_(o)}),ug(),p0(),ug()()()(),Ac(61,`po-step`,37)(62,`po-widget`,26),pt(`p-primary-action`,function(){Jv(s);let o=Zx(29);return e_(o.previous())})(`p-secondary-action`,function(){Jv(s);let o=Zx(29);return e_(i.onConfirmStep(o))}),Ac(63,`div`,8),Kc(64,`po-info`,38)(65,`po-info`,39),ug(),Ac(66,`div`,8),Kc(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),ug(),Kc(71,`po-divider`),Ac(72,`div`,8),Kc(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),ug()()()()(),Ac(78,`po-modal`,49,7)(80,`div`,8),Kc(81,`img`,50),Ac(82,`p`,51),vN(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),ug()()()}if(r&2){let s=Zx(33),c=Zx(41),o=Zx(53);Hp(27),Ax(i.isLoadingPayment?27:-1),Hp(3),cE(`p-can-active-next-step`,i.canActiveNextStep.bind(i,s)),Hp(),cE(`p-primary-label`,i.nextLabelWidget),Hp(4),TE(`ngModel`,i.name),m0(),Hp(),TE(`ngModel`,i.birthday),m0(),Hp(),TE(`ngModel`,i.document),m0(),Hp(),cE(`p-can-active-next-step`,i.canActiveNextStep.bind(i,c)),Hp(),cE(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),Hp(4),TE(`ngModel`,i.address.street),m0(),Hp(),TE(`ngModel`,i.address.number),m0(),Hp(),TE(`ngModel`,i.address.city),m0(),Hp(2),TE(`ngModel`,i.address.code),m0(),Hp(),TE(`ngModel`,i.address.country),m0(),Hp(),TE(`ngModel`,i.address.reference),m0(),Hp(),cE(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),Hp(),cE(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),Hp(4),TE(`ngModel`,i.cardName),m0(),Hp(2),TE(`ngModel`,i.cardCode),m0(),Hp(2),TE(`ngModel`,i.cardValid),m0(),Hp(3),cE(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),Hp(2),cE(`p-value`,i.name),Hp(),cE(`p-value`,i.document),Hp(2),cE(`p-value`,i.address.street),Hp(),cE(`p-value`,i.address.number),Hp(),cE(`p-value`,i.address.city),Hp(),cE(`p-value`,i.address.country)}},dependencies:[b9,D9,C9,BP,LP,ob,Tte,_4,roe,DP,wa,Goe,wze,Pze],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Stepper - Sales`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-stepper-position-relative {
  position: relative;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-stepper-sales`),ug(),Kc(29,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,at,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,We],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{http=f(hw);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var rt=[`basicInformation`];var lt=[`academicFormation`];var st=[`professionalExperiences`];function mt(a,j){if(a&1&&(Ac(0,`div`,23)(1,`po-widget`,24)(2,`p`),vN(3),ug()()()),a&2){let m=j.$implicit;Hp(),cE(`p-title`,m.title),Hp(2),IE(m.description)}}function dt(a,j){if(a&1&&(Ac(0,`div`,4),Kc(1,`po-divider`,23),Ox(2,mt,4,2,`div`,23,Nx),ug()),a&2){let m=Wx();Hp(2),kx(m.professionalExperiences)}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(Ue);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&Xc(rt,7)(lt,7)(st,7)(wze,5),r&2){let s;fo(s=ho())&&(i.basicInformationForm=s.first),fo(s=ho())&&(i.academicFormationForm=s.first),fo(s=ho())&&(i.professionalExperiencesForm=s.first),fo(s=ho())&&(i.stepper=s.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),RE(`ngModelChange`,function(o){return Jv(s),DN(i.basicInformation.name,o)||(i.basicInformation.name=o),e_(o)}),ug(),p0(),Ac(7,`po-email`,6),RE(`ngModelChange`,function(o){return Jv(s),DN(i.basicInformation.email,o)||(i.basicInformation.email=o),e_(o)}),ug(),p0(),Ac(8,`po-input`,7),RE(`ngModelChange`,function(o){return Jv(s),DN(i.basicInformation.phone,o)||(i.basicInformation.phone=o),e_(o)}),ug(),p0(),Ac(9,`po-select`,8),RE(`ngModelChange`,function(o){return Jv(s),DN(i.basicInformation.state,o)||(i.basicInformation.state=o),e_(o)}),pt(`p-change`,function(){return i.onChangeState()}),ug(),p0(),Ac(10,`po-select`,9),RE(`ngModelChange`,function(o){return Jv(s),DN(i.basicInformation.city,o)||(i.basicInformation.city=o),e_(o)}),ug(),p0(),ug()()(),Ac(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),Kc(15,`po-divider`,11),Ac(16,`po-input`,12),RE(`ngModelChange`,function(o){return Jv(s),DN(i.highSchool.name,o)||(i.highSchool.name=o),e_(o)}),ug(),p0(),Ac(17,`po-input`,13),RE(`ngModelChange`,function(o){return Jv(s),DN(i.highSchool.city,o)||(i.highSchool.city=o),e_(o)}),ug(),p0(),Ac(18,`po-input`,14),RE(`ngModelChange`,function(o){return Jv(s),DN(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),e_(o)}),ug(),p0(),ug(),Ac(19,`div`,4),Kc(20,`po-divider`,15),Ac(21,`po-input`,16),RE(`ngModelChange`,function(o){return Jv(s),DN(i.universityEducation.name,o)||(i.universityEducation.name=o),e_(o)}),ug(),p0(),Ac(22,`po-input`,17),RE(`ngModelChange`,function(o){return Jv(s),DN(i.universityEducation.city,o)||(i.universityEducation.city=o),e_(o)}),ug(),p0(),Ac(23,`po-input`,18),RE(`ngModelChange`,function(o){return Jv(s),DN(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),e_(o)}),ug(),p0(),ug()()(),Ac(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),RE(`ngModelChange`,function(o){return Jv(s),DN(i.experienceTitle,o)||(i.experienceTitle=o),e_(o)}),ug(),p0(),Ac(29,`po-textarea`,21),RE(`ngModelChange`,function(o){return Jv(s),DN(i.experienceDescripton,o)||(i.experienceDescripton=o),e_(o)}),ug(),p0(),Ac(30,`po-button`,22),pt(`p-click`,function(){Jv(s);let o=Zx(26);return i.addProfessionalExperiences(o),e_(o.reset())}),ug()()(),Rx(31,dt,4,0,`div`,4),ug()()()}r&2&&(Hp(6),TE(`ngModel`,i.basicInformation.name),m0(),Hp(),TE(`ngModel`,i.basicInformation.email),m0(),Hp(),TE(`ngModel`,i.basicInformation.phone),m0(),Hp(),TE(`ngModel`,i.basicInformation.state),cE(`p-options`,i.stateOptions),m0(),Hp(),TE(`ngModel`,i.basicInformation.city),cE(`p-options`,i.cityOptions),m0(),Hp(6),TE(`ngModel`,i.highSchool.name),m0(),Hp(),TE(`ngModel`,i.highSchool.city),m0(),Hp(),TE(`ngModel`,i.highSchool.conclusionYear),m0(),Hp(3),TE(`ngModel`,i.universityEducation.name),m0(),Hp(),TE(`ngModel`,i.universityEducation.city),m0(),Hp(),TE(`ngModel`,i.universityEducation.conclusionYear),m0(),Hp(5),TE(`ngModel`,i.experienceTitle),m0(),Hp(),TE(`ngModel`,i.experienceDescripton),m0(),Hp(2),Ax(i.professionalExperiences?31:-1))},dependencies:[b9,D9,C9,BP,LP,ni,Ic,ob,V3,_4,ioe,ooe,Goe,wze,Pze],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Stepper - Active`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import {
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-stepper-active`),ug(),Kc(27,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ut,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ne],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{changeDetector=f(Ue);currentStep;stepsWithStatus=[{label:`Step 1`,status:Rt.Done},{label:`Step 2`,status:Rt.Active},{label:`Step 3`,status:Rt.Default},{label:`Step 4`,status:Rt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===Rt.Active&&(r.status=Rt.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===Rt.Active&&(r.status=Rt.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===Rt.Disabled&&(this.stepsWithStatus[this.currentStep].status=Rt.Default)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(Ac(0,`po-stepper`,0),pt(`p-change-step`,function(c){return i.onChangeStatus(c)}),ug()),r&2&&cE(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[wze],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Stepper - Steps`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-stepper-steps`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ht,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ze],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1008,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`stepIconsProperty`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`stepperOrientation`],[`id`,`stepperStatus`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoStepperModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-stepper`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoStepperComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O `),Ac(15,`code`),vN(16,`po-stepper`),ug(),vN(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),ug(),Ac(18,`p`),vN(19,`Existem duas formas de utilização:`),ug(),Ac(20,`p`),vN(21,`1 - Usando o componente `),Ac(22,`a`,6)(23,`strong`),vN(24,`po-step`),ug()(),vN(25,` para renderizar e descrever os passos.`),ug(),Ac(26,`p`),vN(27,`2 - Através da propriedade `),Ac(28,`code`),vN(29,`p-steps`),ug(),vN(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Ac(31,`em`),vN(32,`step`),ug(),vN(33,` ativo.`),ug(),Ac(34,`p`),vN(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Ac(36,`em`),vN(37,`steps`),ug(),vN(38,`.`),ug(),Ac(39,`p`),vN(40,`Também é possível navegar entre os `),Ac(41,`em`),vN(42,`steps`),ug(),vN(43,` através do teclado utilizando a tecla `),Ac(44,`em`),vN(45,`tab`),ug(),vN(46,` e, para ativar o `),Ac(47,`em`),vN(48,`step`),ug(),vN(49,` em foco basta
pressionar a tecla `),Ac(50,`em`),vN(51,`enter`),ug(),vN(52,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),Ac(53,`em`),vN(54,`steps`),ug(),vN(55,` atrav\xE9s da
propriedade `),Ac(56,`a`,7)(57,`code`),vN(58,`p-step-icons`),ug()(),vN(59,`.`),ug(),Ac(60,`h4`),vN(61,`Utilizando os métodos do componente:`),ug(),Ac(62,`p`),vN(63,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),ug(),Ac(64,`p`),vN(65,`Por exemplo, utilizando um `),Ac(66,`a`,8)(67,`strong`),vN(68,`ViewChild`),ug()(),vN(69,`:`),ug(),Ac(70,`pre`)(71,`code`),vN(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),ug()(),Ac(73,`p`),vN(74,`E para acessar o método:`),ug(),Ac(75,`pre`)(76,`code`),vN(77,`poStepperComponent.next();
`),ug()(),Ac(78,`h4`),vN(79,`Boas práticas`),ug(),Ac(80,`ul`)(81,`li`),vN(82,`Evite `),Ac(83,`code`),vN(84,`labels`),ug(),vN(85,` extensos que quebram o layout do `),Ac(86,`code`),vN(87,`po-stepper`),ug(),vN(88,`, use `),Ac(89,`code`),vN(90,`labels`),ug(),vN(91,` diretos, curtos e intuitivos.`),ug(),Ac(92,`li`),vN(93,`Utilize apenas um `),Ac(94,`code`),vN(95,`po-stepper`),ug(),vN(96,` por página.`),ug()(),Ac(97,`h4`),vN(98,`Tokens customizáveis`),ug(),Ac(99,`p`),vN(100,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(101,`blockquote`)(102,`p`),vN(103,`Para maiores informações, acesse o guia `),Ac(104,`a`,9),vN(105,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(106,`.`),ug()(),Ac(107,`table`)(108,`thead`)(109,`tr`)(110,`th`),vN(111,`Propriedade`),ug(),Ac(112,`th`),vN(113,`Descrição`),ug(),Ac(114,`th`),vN(115,`Valor Padrão`),ug()()(),Ac(116,`tbody`)(117,`tr`)(118,`td`)(119,`strong`),vN(120,`Label`),ug()(),Kc(121,`td`)(122,`td`),ug(),Ac(123,`tr`)(124,`td`)(125,`code`),vN(126,`--font-family`),ug()(),Ac(127,`td`),vN(128,`Família tipográfica usada`),ug(),Ac(129,`td`)(130,`code`),vN(131,`var(--font-family-theme)`),ug()()(),Ac(132,`tr`)(133,`td`)(134,`code`),vN(135,`--font-size`),ug()(),Ac(136,`td`),vN(137,`Tamanho da fonte`),ug(),Ac(138,`td`)(139,`code`),vN(140,`var(--font-size-default)`),ug()()(),Ac(141,`tr`)(142,`td`)(143,`code`),vN(144,`--font-weight`),ug()(),Ac(145,`td`),vN(146,`Peso da fonte`),ug(),Ac(147,`td`)(148,`code`),vN(149,`var(--font-weight-normal)`),ug()()(),Ac(150,`tr`)(151,`td`)(152,`strong`),vN(153,`Step - Done`),ug()(),Kc(154,`td`)(155,`td`),ug(),Ac(156,`tr`)(157,`td`)(158,`code`),vN(159,`--text-color`),ug()(),Ac(160,`td`),vN(161,`Cor do texto no step concluído`),ug(),Ac(162,`td`)(163,`code`),vN(164,`var(--color-neutral-dark-70)`),ug()()(),Ac(165,`tr`)(166,`td`)(167,`code`),vN(168,`--color-icon-done`),ug()(),Ac(169,`td`),vN(170,`Cor do ícone no step concluído`),ug(),Ac(171,`td`)(172,`code`),vN(173,`var(--color-neutral-dark-70)`),ug()()(),Ac(174,`tr`)(175,`td`)(176,`code`),vN(177,`--background-done`),ug()(),Ac(178,`td`),vN(179,`Cor de fundo no step concluído`),ug(),Ac(180,`td`)(181,`code`),vN(182,`var(--color-neutral-light-00)`),ug()()(),Ac(183,`tr`)(184,`td`)(185,`strong`),vN(186,`Line - Done`),ug()(),Kc(187,`td`)(188,`td`),ug(),Ac(189,`tr`)(190,`td`)(191,`code`),vN(192,`--color-line-done`),ug()(),Ac(193,`td`),vN(194,`Cor da linha no step concluído`),ug(),Ac(195,`td`)(196,`code`),vN(197,`var(--color-neutral-mid-40)`),ug()()(),Ac(198,`tr`)(199,`td`)(200,`strong`),vN(201,`Step - Current`),ug()(),Kc(202,`td`)(203,`td`),ug(),Ac(204,`tr`)(205,`td`)(206,`code`),vN(207,`--color-icon-current`),ug()(),Ac(208,`td`),vN(209,`Cor do ícone no step atual`),ug(),Ac(210,`td`)(211,`code`),vN(212,`var(--color-neutral-light-00)`),ug()()(),Ac(213,`tr`)(214,`td`)(215,`code`),vN(216,`--background-current`),ug()(),Ac(217,`td`),vN(218,`Cor de fundo no step atual`),ug(),Ac(219,`td`)(220,`code`),vN(221,`var(--color-action-default)`),ug()()(),Ac(222,`tr`)(223,`td`)(224,`code`),vN(225,`--font-weight-current`),ug()(),Ac(226,`td`),vN(227,`Peso da fonte no step atual`),ug(),Ac(228,`td`)(229,`code`),vN(230,`var(--font-weight-bold)`),ug()()(),Ac(231,`tr`)(232,`td`)(233,`strong`),vN(234,`Step - Next`),ug()(),Kc(235,`td`)(236,`td`),ug(),Ac(237,`tr`)(238,`td`)(239,`code`),vN(240,`--font-size-circle`),ug()(),Ac(241,`td`),vN(242,`Tamanho da fonte no círculo do próximo step`),ug(),Ac(243,`td`)(244,`code`),vN(245,`var(--font-size-sm)`),ug()()(),Ac(246,`tr`)(247,`td`)(248,`code`),vN(249,`--color-next`),ug()(),Ac(250,`td`),vN(251,`Cor do ícone no próximo step`),ug(),Ac(252,`td`)(253,`code`),vN(254,`var(--color-action-disabled)`),ug()()(),Ac(255,`tr`)(256,`td`)(257,`code`),vN(258,`--text-color-next`),ug()(),Ac(259,`td`),vN(260,`Cor do texto no próximo step`),ug(),Ac(261,`td`)(262,`code`),vN(263,`var(--color-neutral-light-30)`),ug()()(),Ac(264,`tr`)(265,`td`)(266,`strong`),vN(267,`Focused`),ug()(),Kc(268,`td`)(269,`td`),ug(),Ac(270,`tr`)(271,`td`)(272,`code`),vN(273,`--outline-color-focused`),ug()(),Ac(274,`td`),vN(275,`Cor do outline do estado de focus`),ug(),Ac(276,`td`)(277,`code`),vN(278,`var(--color-action-focus)`),ug()()()()()(),Ac(279,`div`,10)(280,`h4`,11),vN(281,`Seletor`),ug(),Ac(282,`pre`,12),vN(283,`<po-stepper
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
`),ug()(),Ac(284,`h4`,13),vN(285,`Propriedades`),ug(),Ac(286,`table`,14)(287,`tr`,15)(288,`th`,16),vN(289,`Nome`),ug(),Ac(290,`th`,16),vN(291,`Tipo`),ug(),Ac(292,`th`,16),vN(293,`Padrão`),ug(),Ac(294,`th`,16),vN(295,`Descrição`),ug()(),Ac(296,`tr`,17)(297,`td`,18)(298,`div`,19)(299,`span`,20),vN(300,` p-align-center`),Kc(301,`br`),ug()()(),Ac(302,`td`,21)(303,`code`,22),vN(304,`boolean`),ug()(),Ac(305,`td`,23)(306,`p`)(307,`code`),vN(308,`true`),ug()()(),Ac(309,`td`,24)(310,`em`)(311,`strong`),vN(312,`(opcional)`),ug()(),Ac(313,`p`),vN(314,`Define o alinhamento dos `),Ac(315,`em`),vN(316,`steps`),ug(),vN(317,` e `),Ac(318,`em`),vN(319,`labels`),ug(),vN(320,` no `),Ac(321,`em`),vN(322,`stepper`),ug(),vN(323,`, dependendo da orientação.`),ug(),Ac(324,`ul`)(325,`li`),vN(326,`Quando `),Ac(327,`code`),vN(328,`true`),ug(),vN(329,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),ug(),Ac(330,`li`),vN(331,`Quando `),Ac(332,`code`),vN(333,`false`),ug(),vN(334,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),ug()()()(),Ac(335,`tr`,17)(336,`td`,18)(337,`div`,19)(338,`span`,20),vN(339,` p-disable-click`),Kc(340,`br`),ug()()(),Ac(341,`td`,21)(342,`code`,22),vN(343,`boolean`),ug()(),Ac(344,`td`,23)(345,`p`)(346,`code`),vN(347,`false`),ug()()(),Ac(348,`td`,24)(349,`em`)(350,`strong`),vN(351,`(opcional)`),ug()(),Ac(352,`p`),vN(353,`Desabilita o clique nos steps.`),ug()()(),Ac(354,`tr`,17)(355,`td`,18)(356,`div`,19)(357,`span`,20),vN(358,` p-step-icon-active`),Kc(359,`br`),ug()()(),Ac(360,`td`,21)(361,`code`,25),vN(362,`string `),ug(),Ac(363,`code`,26),vN(364,` TemplateRef<void>`),ug()(),Ac(365,`td`,23)(366,`p`)(367,`code`),vN(368,`po-icon-edit`),ug()()(),Ac(369,`td`,24)(370,`em`)(371,`strong`),vN(372,`(opcional)`),ug()(),Ac(373,`p`),vN(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Ac(375,`a`,27),vN(376,`Biblioteca de ícones`),ug(),vN(377,`.`),ug(),Ac(378,`pre`)(379,`code`),vN(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),ug()(),Ac(381,`p`),vN(382,`Para customizar o ícone através do `),Ac(383,`code`),vN(384,`TemplateRef`),ug(),vN(385,`, veja a documentação da propriedade `),Ac(386,`code`),vN(387,`p-step-icon-done`),ug(),vN(388,`.`),ug(),Ac(389,`blockquote`)(390,`p`),vN(391,`Deve-se usar `),Ac(392,`code`),vN(393,`font-size: inherit`),ug(),vN(394,` para ajustar ícones que não se ajustam automaticamente.`),ug()()()(),Ac(395,`tr`,17)(396,`td`,18)(397,`div`,19)(398,`span`,20),vN(399,` p-step-icon-done`),Kc(400,`br`),ug()()(),Ac(401,`td`,21)(402,`code`,25),vN(403,`string `),ug(),Ac(404,`code`,26),vN(405,` TemplateRef<void>`),ug()(),Ac(406,`td`,23)(407,`p`)(408,`code`),vN(409,`po-icon-ok`),ug()()(),Ac(410,`td`,24)(411,`em`)(412,`strong`),vN(413,`(opcional)`),ug()(),Ac(414,`p`),vN(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Ac(416,`a`,27),vN(417,`Biblioteca de ícones`),ug()(),Ac(418,`pre`)(419,`code`),vN(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),ug()(),Ac(421,`p`),vN(422,`Outra opção seria a customização do ícone através do `),Ac(423,`code`),vN(424,`TemplateRef`),ug(),vN(425,`, conforme exemplo abaixo:`),ug(),Ac(426,`pre`)(427,`code`),vN(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),ug()(),Ac(429,`blockquote`)(430,`p`),vN(431,`Deve-se usar `),Ac(432,`code`),vN(433,`font-size: inherit`),ug(),vN(434,` para ajustar ícones que não se ajustam automaticamente.`),ug()()()(),Ac(435,`tr`,17)(436,`td`,18)(437,`div`,28)(438,`span`,29),vN(439,` (p-change-step)`),Kc(440,`br`),ug()()(),Ac(441,`td`,21)(442,`code`,30),vN(443,`EventEmitter`),ug()(),Ac(444,`td`,23),vN(445,`-`),ug(),Ac(446,`td`,24)(447,`p`),vN(448,`Ação que será executada quando o usuário mudar o passo do `),Ac(449,`code`),vN(450,`po-stepper`),ug(),vN(451,`.`),ug()()(),Ac(452,`tr`,17)(453,`td`,18)(454,`div`,19)(455,`span`,20),vN(456,` p-orientation`),Kc(457,`br`),ug()()(),Ac(458,`td`,21)(459,`code`,31),vN(460,`PoStepperOrientation`),ug()(),Ac(461,`td`,23)(462,`p`)(463,`code`),vN(464,`PoStepperOrientation.Horizontal`),ug()()(),Ac(465,`td`,24)(466,`em`)(467,`strong`),vN(468,`(opcional)`),ug()(),Ac(469,`p`),vN(470,`Define a orientação de exibição do `),Ac(471,`code`),vN(472,`po-stepper`),ug(),vN(473,`.`),ug(),Ac(474,`blockquote`)(475,`p`),vN(476,`Veja os valores válidos no `),Ac(477,`em`),vN(478,`enum`),ug(),Ac(479,`a`,32),vN(480,`PoStepperOrientation`),ug(),vN(481,`.`),ug()()()(),Ac(482,`tr`,17)(483,`td`,18)(484,`div`,19)(485,`span`,20),vN(486,` p-sequential`),Kc(487,`br`),ug()()(),Ac(488,`td`,21)(489,`code`,22),vN(490,`boolean`),ug()(),Ac(491,`td`,23)(492,`p`)(493,`code`),vN(494,`true`),ug()()(),Ac(495,`td`,24)(496,`em`)(497,`strong`),vN(498,`(opcional)`),ug()(),Ac(499,`p`),vN(500,`Define se o `),Ac(501,`code`),vN(502,`po-stepper`),ug(),vN(503,` será sequencial ou aleatório.`),ug(),Ac(504,`blockquote`)(505,`p`),vN(506,`Ao utilizar o componente `),Ac(507,`a`,6)(508,`strong`),vN(509,`po-step`),ug()(),vN(510,`, o valor desta propriedade sempre será verdadeiro.`),ug()()()(),Ac(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),vN(515,` p-step`),Kc(516,`br`),ug()()(),Ac(517,`td`,21)(518,`code`,33),vN(519,`number`),ug()(),Ac(520,`td`,23)(521,`p`)(522,`code`),vN(523,`1`),ug()()(),Ac(524,`td`,24)(525,`em`)(526,`strong`),vN(527,`(opcional)`),ug()(),Ac(528,`p`),vN(529,`Controla o passo atual do `),Ac(530,`code`),vN(531,`po-stepper`),ug(),vN(532,`.`),ug(),Ac(533,`blockquote`)(534,`p`),vN(535,`Ao utilizar esta propriedade e também utilizar o componente `),Ac(536,`a`,6)(537,`strong`),vN(538,`po-step`),ug()(),vN(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Ac(540,`a`,6)(541,`strong`),vN(542,`po-step`),ug()(),vN(543,`.`),ug()()()(),Ac(544,`tr`,17)(545,`td`,18)(546,`div`,19)(547,`span`,20),vN(548,` p-step-icons`),Kc(549,`br`),ug()()(),Ac(550,`td`,21)(551,`code`,22),vN(552,`boolean`),ug()(),Ac(553,`td`,23)(554,`p`)(555,`code`),vN(556,`false`),ug()()(),Ac(557,`td`,24)(558,`em`)(559,`strong`),vN(560,`(opcional)`),ug()(),Ac(561,`p`),Kc(562,`a`,34),ug(),Ac(563,`p`),vN(564,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),Ac(565,`em`),vN(566,`steps`),ug(),vN(567,`.`),ug()()(),Ac(568,`tr`,17)(569,`td`,18)(570,`div`,19)(571,`span`,20),vN(572,` p-step-size`),Kc(573,`br`),ug()()(),Ac(574,`td`,21)(575,`code`,33),vN(576,`number`),ug()(),Ac(577,`td`,23)(578,`p`)(579,`code`),vN(580,`24`),ug()()(),Ac(581,`td`,24)(582,`em`)(583,`strong`),vN(584,`(opcional)`),ug()(),Ac(585,`p`),vN(586,`Define o tamanho dos `),Ac(587,`em`),vN(588,`steps`),ug(),vN(589,` em `),Ac(590,`em`),vN(591,`pixels`),ug(),vN(592,`, possibilitando um maior destaque.`),ug(),Ac(593,`p`),vN(594,`O valor informado deve ser entre `),Ac(595,`code`),vN(596,`24`),ug(),vN(597,` e `),Ac(598,`code`),vN(599,`64`),ug(),vN(600,`.`),ug(),Ac(601,`blockquote`)(602,`p`),vN(603,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),Ac(604,`em`),vN(605,`default`),ug(),vN(606,`.`),ug()()()(),Ac(607,`tr`,17)(608,`td`,18)(609,`div`,19)(610,`span`,20),vN(611,` p-steps`),Kc(612,`br`),ug()()(),Ac(613,`td`,21)(614,`code`,35),vN(615,`Array<PoStepperItem>`),ug()(),Ac(616,`td`,23),vN(617,`-`),ug(),Ac(618,`td`,24)(619,`em`)(620,`strong`),vN(621,`(opcional)`),ug()(),Ac(622,`p`),vN(623,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ug(),Ac(624,`blockquote`)(625,`p`),vN(626,`Ao utilizar esta propriedade e também utilizar o componente `),Ac(627,`a`,6)(628,`strong`),vN(629,`po-step`),ug()(),vN(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Ac(631,`a`,6)(632,`strong`),vN(633,`po-step`),ug()(),vN(634,`.`),ug()()()()(),Ac(635,`h3`,13),vN(636,`Métodos`),ug(),Ac(637,`table`,36)(638,`tr`,17)(639,`th`,37)(640,`div`,19)(641,`h4`)(642,`span`,20),vN(643,` active `),ug()()()()(),Ac(644,`tr`,24)(645,`td`,24)(646,`p`),vN(647,`Altera o status do `),Ac(648,`em`),vN(649,`step`),ug(),vN(650,` para ativo.`),ug(),Ac(651,`blockquote`)(652,`p`),vN(653,`Este método é valido apenas para as implementações que utilizam o componente `),Ac(654,`a`,6)(655,`strong`),vN(656,`po-step`),ug()(),vN(657,`.`),ug()()()()(),Ac(658,`h5`)(659,`b`),vN(660,`Parâmetros`),ug()(),Ac(661,`table`,14)(662,`tr`,15)(663,`th`,16),vN(664,`Nome`),ug(),Ac(665,`th`,16),vN(666,`Tipo`),ug(),Ac(667,`th`,16),vN(668,`Descrição`),ug()(),Ac(669,`tr`,17)(670,`td`,18),vN(671,` index`),ug(),Ac(672,`td`,21)(673,`code`,38),vN(674,` number `),ug()(),Ac(675,`td`,24)(676,`p`),vN(677,`Índice do `),Ac(678,`code`),vN(679,`po-step`),ug(),vN(680,` que se deseja ativar.`),ug()()()(),Kc(681,`br`),Ac(682,`table`,36)(683,`tr`,17)(684,`th`,37)(685,`div`,19)(686,`h4`)(687,`span`,20),vN(688,` first `),ug()()()()(),Ac(689,`tr`,24)(690,`td`,24)(691,`p`),vN(692,`Ativa o primeiro `),Ac(693,`em`),vN(694,`step`),ug(),vN(695,`.`),ug(),Ac(696,`blockquote`)(697,`p`),vN(698,`Este método é valido apenas para as implementações que utilizam o componente `),Ac(699,`a`,6)(700,`strong`),vN(701,`po-step`),ug()(),vN(702,`.`),ug()()()()(),Kc(703,`br`),Ac(704,`table`,36)(705,`tr`,17)(706,`th`,37)(707,`div`,19)(708,`h4`)(709,`span`,20),vN(710,` next `),ug()()()()(),Ac(711,`tr`,24)(712,`td`,24)(713,`p`),vN(714,`Ativa o próximo `),Ac(715,`em`),vN(716,`step`),ug(),vN(717,`.`),ug(),Ac(718,`blockquote`)(719,`p`),vN(720,`Este método é valido apenas para as implementações que utilizam o componente `),Ac(721,`a`,6)(722,`strong`),vN(723,`po-step`),ug()(),vN(724,`.`),ug()()()()(),Kc(725,`br`),Ac(726,`table`,36)(727,`tr`,17)(728,`th`,37)(729,`div`,19)(730,`h4`)(731,`span`,20),vN(732,` previous `),ug()()()()(),Ac(733,`tr`,24)(734,`td`,24)(735,`p`),vN(736,`Ativa o `),Ac(737,`em`),vN(738,`step`),ug(),vN(739,` anterior.`),ug(),Ac(740,`blockquote`)(741,`p`),vN(742,`Este método é valido apenas para as implementações que utilizam o componente `),Ac(743,`a`,6)(744,`strong`),vN(745,`po-step`),ug()(),vN(746,`.`),ug()()()()(),Kc(747,`br`),Ac(748,`h3`),vN(749,`Interfaces`),ug(),Ac(750,`h4`,39)(751,`code`,5),vN(752,`PoStepperItem`),ug()(),Ac(753,`div`,2)(754,`p`),vN(755,`Interface para definição dos `),Ac(756,`em`),vN(757,`steps`),ug(),vN(758,` do componente `),Ac(759,`code`),vN(760,`po-stepper`),ug(),vN(761,` quando utilizada a propriedade `),Ac(762,`code`),vN(763,`p-steps`),ug(),vN(764,`.`),ug()(),Ac(765,`h4`,13),vN(766,`Propriedades`),ug(),Ac(767,`table`,14)(768,`tr`,15)(769,`th`,16),vN(770,`Nome`),ug(),Ac(771,`th`,16),vN(772,`Tipo`),ug(),Ac(773,`th`,16),vN(774,`Descrição`),ug()(),Ac(775,`tr`,17)(776,`td`,18)(777,`div`,19)(778,`span`,20),vN(779,` iconActive`),Kc(780,`br`),ug()()(),Ac(781,`td`,21)(782,`code`,25),vN(783,`string `),ug(),Ac(784,`code`,26),vN(785,` TemplateRef<void>`),ug()(),Ac(786,`td`,24)(787,`em`)(788,`strong`),vN(789,`(opcional)`),ug()(),Ac(790,`p`),vN(791,`Define o ícone do `),Ac(792,`em`),vN(793,`step`),ug(),vN(794,` ativo.`),ug()()(),Ac(795,`tr`,17)(796,`td`,18)(797,`div`,19)(798,`span`,20),vN(799,` iconDefault`),Kc(800,`br`),ug()()(),Ac(801,`td`,21)(802,`code`,25),vN(803,`string `),ug(),Ac(804,`code`,26),vN(805,` TemplateRef<void>`),ug()(),Ac(806,`td`,24)(807,`em`)(808,`strong`),vN(809,`(opcional)`),ug()(),Ac(810,`p`),vN(811,`Define o ícone do `),Ac(812,`em`),vN(813,`step`),ug(),vN(814,` default.`),ug()()(),Ac(815,`tr`,17)(816,`td`,18)(817,`div`,19)(818,`span`,20),vN(819,` iconDone`),Kc(820,`br`),ug()()(),Ac(821,`td`,21)(822,`code`,25),vN(823,`string `),ug(),Ac(824,`code`,26),vN(825,` TemplateRef<void>`),ug()(),Ac(826,`td`,24)(827,`em`)(828,`strong`),vN(829,`(opcional)`),ug()(),Ac(830,`p`),vN(831,`Define o ícone do `),Ac(832,`em`),vN(833,`step`),ug(),vN(834,` concluído.`),ug()()(),Ac(835,`tr`,17)(836,`td`,18)(837,`div`,19)(838,`span`,20),vN(839,` id`),Kc(840,`br`),ug()()(),Ac(841,`td`,21)(842,`code`,25),vN(843,`string`),ug()(),Ac(844,`td`,24)(845,`em`)(846,`strong`),vN(847,`(opcional)`),ug()(),Ac(848,`p`),vN(849,`Identificador único do step.`),ug()()(),Ac(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),vN(854,` label`),Kc(855,`br`),ug()()(),Ac(856,`td`,21)(857,`code`,25),vN(858,`string`),ug()(),Ac(859,`td`,24)(860,`em`)(861,`strong`),vN(862,`(opcional)`),ug()(),Ac(863,`p`),vN(864,`Texto do item do stepper.`),ug()()(),Ac(865,`tr`,17)(866,`td`,18)(867,`div`,19)(868,`span`,20),vN(869,` status`),Kc(870,`br`),ug()()(),Ac(871,`td`,21)(872,`code`,40),vN(873,`PoStepperStatus`),ug()(),Ac(874,`td`,24)(875,`em`)(876,`strong`),vN(877,`(opcional)`),ug()(),Ac(878,`p`),vN(879,`Define o estado de exibição do `),Ac(880,`em`),vN(881,`step`),ug(),vN(882,`.`),ug()()()(),Ac(883,`h3`),vN(884,`Enums`),ug(),Ac(885,`h4`,4)(886,`code`,5),vN(887,`PoStepperOrientation`),ug()(),Ac(888,`div`,2)(889,`p`),Kc(890,`a`,41),ug(),Ac(891,`p`)(892,`em`),vN(893,`Enums`),ug(),vN(894,` para definição da orientação do `),Ac(895,`code`),vN(896,`po-stepper`),ug(),vN(897,`.`),ug()(),Ac(898,`h4`,13),vN(899,`Propriedades`),ug(),Ac(900,`table`,14)(901,`tr`,15)(902,`th`,16),vN(903,`Nome`),ug(),Ac(904,`th`,16),vN(905,`Descrição`),ug()(),Ac(906,`tr`,17)(907,`td`,18)(908,`div`,19)(909,`span`,20),vN(910,` Horizontal`),Kc(911,`br`),ug()()(),Ac(912,`td`,24)(913,`p`),vN(914,`Define a exibição do componente na horizontal.`),ug()()(),Ac(915,`tr`,17)(916,`td`,18)(917,`div`,19)(918,`span`,20),vN(919,` Vertical`),Kc(920,`br`),ug()()(),Ac(921,`td`,24)(922,`p`),vN(923,`Define a exibição do componente na vertical.`),ug()()()(),Ac(924,`h4`,4)(925,`code`,5),vN(926,`PoStepperStatus`),ug()(),Ac(927,`div`,2)(928,`p`),Kc(929,`a`,42),ug(),Ac(930,`p`)(931,`em`),vN(932,`Enums`),ug(),vN(933,` para os status do `),Ac(934,`code`),vN(935,`po-stepper`),ug(),vN(936,` quando utilizada a propriedade `),Ac(937,`code`),vN(938,`p-steps`),ug(),vN(939,`.`),ug()(),Ac(940,`h4`,13),vN(941,`Propriedades`),ug(),Ac(942,`table`,14)(943,`tr`,15)(944,`th`,16),vN(945,`Nome`),ug(),Ac(946,`th`,16),vN(947,`Descrição`),ug()(),Ac(948,`tr`,17)(949,`td`,18)(950,`div`,19)(951,`span`,20),vN(952,` Active`),Kc(953,`br`),ug()()(),Ac(954,`td`,24)(955,`p`),vN(956,`Define o estado do `),Ac(957,`em`),vN(958,`step`),ug(),vN(959,` como ativo.`),ug()()(),Ac(960,`tr`,17)(961,`td`,18)(962,`div`,19)(963,`span`,20),vN(964,` Default`),Kc(965,`br`),ug()()(),Ac(966,`td`,24)(967,`p`),vN(968,`Define o estado do `),Ac(969,`em`),vN(970,`step`),ug(),vN(971,` como padrão.`),ug()()(),Ac(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),vN(976,` Disabled`),Kc(977,`br`),ug()()(),Ac(978,`td`,24)(979,`p`),vN(980,`Define o estado do `),Ac(981,`em`),vN(982,`step`),ug(),vN(983,` como desabilitado.`),ug()()(),Ac(984,`tr`,17)(985,`td`,18)(986,`div`,19)(987,`span`,20),vN(988,` Done`),Kc(989,`br`),ug()()(),Ac(990,`td`,24)(991,`p`),vN(992,`Define o estado do `),Ac(993,`em`),vN(994,`step`),ug(),vN(995,` como concluído.`),ug()()(),Ac(996,`tr`,17)(997,`td`,18)(998,`div`,19)(999,`span`,20),vN(1e3,` Error`),Kc(1001,`br`),ug()()(),Ac(1002,`td`,24)(1003,`p`),vN(1004,`Define o estado do `),Ac(1005,`em`),vN(1006,`step`),ug(),vN(1007,` com erro.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var bt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Stepper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-stepper-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-stepper-basic-view`)(6,`sample-po-stepper-labs-view`)(7,`sample-po-stepper-sales-view`)(8,`sample-po-stepper-active-view`)(9,`sample-po-stepper-steps-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,Ve,Ae,Le,qe,Oe,Re],encapsulation:2,changeDetection:1})}return a})()}];var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(bt),kL]})}return a})();var En=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,je]})}return a})();export{En as DocPoStepperModule};