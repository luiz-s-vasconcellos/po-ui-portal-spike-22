import{t as r}from"./chunk-zystk1pz.js";import{$n as Dx,$r as Xy,$t as iU,Ar as O,At as _Ce,Bi as jp,Ei as f,Fi as he,G as M8e,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht$1,Ni as gY,Nn as z0e,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Wn as Be$1,Wr as Ue,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,at as PP,ba as yw,br as Li,dr as I,dt as Sbe,ei as Yl,fi as ag,ga as wx,gi as bL,ha as ww,hn as rCe,jn as ybe,l as ar,la as uo,li as _x,lr as Gl,mi as ay,nt as O8e,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,vi as bx,wn as vr,yi as cN,z as It}from"./main-3EWTGE7T.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(Tl(0,`po-stepper`,0),Gl(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),ag()),r&2&&nw(`p-align-center`,!1)},dependencies:[rCe,M8e],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Stepper Basic`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-stepper-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,j){if(a&1&&(Tl(0,`po-step`,3)(1,`h2`),cN(2),ag()()),a&2){let m=j.$implicit;nw(`p-label`,m.label)(`p-icon-default`,m.iconDefault),jp(2),hg(`Step Content `,m.label)}}var ke=(()=>{class a{changeDetector=f(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(m){this.steps=[...this.steps,r({},m)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(m){this.event=m,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`po-container`)(1,`po-stepper`,2),ht$1(`p-change-step`,function(){return i.changeStep(`change`)}),Cx(2,Ge,3,3,`po-step`,3,wx),ag(),Gl(4,`po-divider`)(5,`po-info`,4),Tl(6,`form`,null,0),Gl(8,`po-dynamic-form`,5),Tl(9,`div`,6)(10,`po-button`,7),ht$1(`p-click`,function(){Ky(s);let o=Bx(7);return i.addItem(i.stepItem),Xy(o.reset())}),ag()()(),Tl(11,`form`,null,1),Gl(13,`po-dynamic-form`,5)(14,`po-divider`),Tl(15,`div`,6)(16,`po-button`,8),ht$1(`p-click`,function(){Ky(s);let o=Bx(7),Ue=Bx(12);return i.restore(),Ue.reset(),Xy(o.reset())}),ag()()()()}if(r&2){let s=Bx(7);jp(),nw(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),jp(),bx(i.steps),jp(3),nw(`p-value`,i.event),jp(3),nw(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),jp(2),nw(`p-disabled`,s.invalid),jp(3),nw(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[yY,mY,Tk,Zt,xp,Xy$1,Sbe,ybe,rCe,M8e],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Stepper Labs`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-stepper-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ke],encapsulation:2,changeDetection:1})}return a})();var $e=[`addressForm`];var et=[`paymentForm`];var tt=[`personalForm`];var nt=[`successData`];function it(a,j){a&1&&Gl(0,`po-loading-overlay`,18)}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(m){return O(m.form.valid).pipe(Ue(()=>this.isLoadingPayment=!0),ay(2e3),Li(()=>this.isLoadingPayment=!1))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&Yl($e,7)(et,7)(tt,7)(nt,7),r&2){let s;lo(s=uo())&&(i.addressForm=s.first),lo(s=uo())&&(i.paymentForm=s.first),lo(s=uo())&&(i.personalForm=s.first),lo(s=uo())&&(i.successData=s.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),Gl(4,`img`,11),ag(),Tl(5,`div`,12)(6,`p`,13),cN(7,`Nike XYZ - Red/Gold Stripes`),ag(),Tl(8,`p`,14),cN(9,`Brand: Nike | Style: Modern | Men's`),ag(),Tl(10,`p`,15),cN(11,`Width: 12.5 - COD: 001254648412319`),ag(),Gl(12,`po-divider`),Tl(13,`p`,15),cN(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),ag()()()(),Tl(15,`po-widget`,16)(16,`p`,15),cN(17,`$2.500,00`),ag(),Tl(18,`p`,15),cN(19,`$500,00(-)`),ag(),Tl(20,`p`,15),cN(21,`$160,00(+)`),ag(),Gl(22,`po-divider`),Tl(23,`p`,14),cN(24,`Total: $2.160,00`),ag()()(),Gl(25,`po-divider`),Tl(26,`div`,17),_x(27,it,1,0,`po-loading-overlay`,18),Tl(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),ht$1(`p-primary-action`,function(){Ky(s);return Xy(Bx(29).next())}),Tl(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),ww(`ngModelChange`,function(o){return Ky(s),uN(i.name,o)||(i.name=o),Xy(o)}),ag(),a0(),Tl(36,`po-datepicker`,23),ww(`ngModelChange`,function(o){return Ky(s),uN(i.birthday,o)||(i.birthday=o),Xy(o)}),ag(),a0(),Tl(37,`po-input`,24),ww(`ngModelChange`,function(o){return Ky(s),uN(i.document,o)||(i.document=o),Xy(o)}),ag(),a0(),ag()()()(),Tl(38,`po-step`,25)(39,`po-widget`,26),ht$1(`p-primary-action`,function(){Ky(s);return Xy(Bx(29).previous())})(`p-secondary-action`,function(){Ky(s);return Xy(Bx(29).next())}),Tl(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),ww(`ngModelChange`,function(o){return Ky(s),uN(i.address.street,o)||(i.address.street=o),Xy(o)}),ag(),a0(),Tl(44,`po-input`,28),ww(`ngModelChange`,function(o){return Ky(s),uN(i.address.number,o)||(i.address.number=o),Xy(o)}),ag(),a0(),Tl(45,`po-input`,29),ww(`ngModelChange`,function(o){return Ky(s),uN(i.address.city,o)||(i.address.city=o),Xy(o)}),ag(),a0(),ag(),Tl(46,`div`,8)(47,`po-input`,30),ww(`ngModelChange`,function(o){return Ky(s),uN(i.address.code,o)||(i.address.code=o),Xy(o)}),ag(),a0(),Tl(48,`po-input`,31),ww(`ngModelChange`,function(o){return Ky(s),uN(i.address.country,o)||(i.address.country=o),Xy(o)}),ag(),a0(),Tl(49,`po-input`,32),ww(`ngModelChange`,function(o){return Ky(s),uN(i.address.reference,o)||(i.address.reference=o),Xy(o)}),ag(),a0(),ag()()()(),Tl(50,`po-step`,33)(51,`po-widget`,26),ht$1(`p-primary-action`,function(){Ky(s);return Xy(Bx(29).previous())})(`p-secondary-action`,function(){Ky(s);return Xy(Bx(29).next())}),Tl(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),ww(`ngModelChange`,function(o){return Ky(s),uN(i.cardName,o)||(i.cardName=o),Xy(o)}),ag(),a0(),Tl(57,`po-input`,35,5),ww(`ngModelChange`,function(o){return Ky(s),uN(i.cardCode,o)||(i.cardCode=o),Xy(o)}),ag(),a0(),Tl(59,`po-input`,36,6),ww(`ngModelChange`,function(o){return Ky(s),uN(i.cardValid,o)||(i.cardValid=o),Xy(o)}),ag(),a0(),ag()()()(),Tl(61,`po-step`,37)(62,`po-widget`,26),ht$1(`p-primary-action`,function(){Ky(s);return Xy(Bx(29).previous())})(`p-secondary-action`,function(){Ky(s);let o=Bx(29);return Xy(i.onConfirmStep(o))}),Tl(63,`div`,8),Gl(64,`po-info`,38)(65,`po-info`,39),ag(),Tl(66,`div`,8),Gl(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),ag(),Gl(71,`po-divider`),Tl(72,`div`,8),Gl(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),ag()()()()(),Tl(78,`po-modal`,49,7)(80,`div`,8),Gl(81,`img`,50),Tl(82,`p`,51),cN(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),ag()()()}if(r&2){let s=Bx(33),c=Bx(41),o=Bx(53);jp(27),Dx(i.isLoadingPayment?27:-1),jp(3),nw(`p-can-active-next-step`,i.canActiveNextStep.bind(i,s)),jp(),nw(`p-primary-label`,i.nextLabelWidget),jp(4),Ew(`ngModel`,i.name),l0(),jp(),Ew(`ngModel`,i.birthday),l0(),jp(),Ew(`ngModel`,i.document),l0(),jp(),nw(`p-can-active-next-step`,i.canActiveNextStep.bind(i,c)),jp(),nw(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),jp(4),Ew(`ngModel`,i.address.street),l0(),jp(),Ew(`ngModel`,i.address.number),l0(),jp(),Ew(`ngModel`,i.address.city),l0(),jp(2),Ew(`ngModel`,i.address.code),l0(),jp(),Ew(`ngModel`,i.address.country),l0(),jp(),Ew(`ngModel`,i.address.reference),l0(),jp(),nw(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),jp(),nw(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),jp(4),Ew(`ngModel`,i.cardName),l0(),jp(2),Ew(`ngModel`,i.cardCode),l0(),jp(2),Ew(`ngModel`,i.cardValid),l0(),jp(3),nw(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),jp(2),nw(`p-value`,i.name),jp(),nw(`p-value`,i.document),jp(2),nw(`p-value`,i.address.street),jp(),nw(`p-value`,i.address.number),jp(),nw(`p-value`,i.address.city),jp(),nw(`p-value`,i.address.country)}},dependencies:[yY,gY,mY,Ak,Tk,Xy$1,z0e,iU,ybe,PP,vr,rCe,M8e,O8e],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Stepper - Sales`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-stepper-position-relative {
  position: relative;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-stepper-sales`),ag(),Gl(29,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,at,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,We],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{http=f(ob);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var rt=[`basicInformation`];var lt=[`academicFormation`];var st=[`professionalExperiences`];function mt(a,j){if(a&1&&(Tl(0,`div`,23)(1,`po-widget`,24)(2,`p`),cN(3),ag()()()),a&2){let m=j.$implicit;jp(),nw(`p-title`,m.title),jp(2),yw(m.description)}}function dt(a,j){if(a&1&&(Tl(0,`div`,4),Gl(1,`po-divider`,23),Cx(2,mt,4,2,`div`,23,wx),ag()),a&2){let m=Fx();jp(2),bx(m.professionalExperiences)}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&Yl(rt,7)(lt,7)(st,7)(M8e,5),r&2){let s;lo(s=uo())&&(i.basicInformationForm=s.first),lo(s=uo())&&(i.academicFormationForm=s.first),lo(s=uo())&&(i.professionalExperiencesForm=s.first),lo(s=uo())&&(i.stepper=s.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),ww(`ngModelChange`,function(o){return Ky(s),uN(i.basicInformation.name,o)||(i.basicInformation.name=o),Xy(o)}),ag(),a0(),Tl(7,`po-email`,6),ww(`ngModelChange`,function(o){return Ky(s),uN(i.basicInformation.email,o)||(i.basicInformation.email=o),Xy(o)}),ag(),a0(),Tl(8,`po-input`,7),ww(`ngModelChange`,function(o){return Ky(s),uN(i.basicInformation.phone,o)||(i.basicInformation.phone=o),Xy(o)}),ag(),a0(),Tl(9,`po-select`,8),ww(`ngModelChange`,function(o){return Ky(s),uN(i.basicInformation.state,o)||(i.basicInformation.state=o),Xy(o)}),ht$1(`p-change`,function(){return i.onChangeState()}),ag(),a0(),Tl(10,`po-select`,9),ww(`ngModelChange`,function(o){return Ky(s),uN(i.basicInformation.city,o)||(i.basicInformation.city=o),Xy(o)}),ag(),a0(),ag()()(),Tl(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),Gl(15,`po-divider`,11),Tl(16,`po-input`,12),ww(`ngModelChange`,function(o){return Ky(s),uN(i.highSchool.name,o)||(i.highSchool.name=o),Xy(o)}),ag(),a0(),Tl(17,`po-input`,13),ww(`ngModelChange`,function(o){return Ky(s),uN(i.highSchool.city,o)||(i.highSchool.city=o),Xy(o)}),ag(),a0(),Tl(18,`po-input`,14),ww(`ngModelChange`,function(o){return Ky(s),uN(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),Xy(o)}),ag(),a0(),ag(),Tl(19,`div`,4),Gl(20,`po-divider`,15),Tl(21,`po-input`,16),ww(`ngModelChange`,function(o){return Ky(s),uN(i.universityEducation.name,o)||(i.universityEducation.name=o),Xy(o)}),ag(),a0(),Tl(22,`po-input`,17),ww(`ngModelChange`,function(o){return Ky(s),uN(i.universityEducation.city,o)||(i.universityEducation.city=o),Xy(o)}),ag(),a0(),Tl(23,`po-input`,18),ww(`ngModelChange`,function(o){return Ky(s),uN(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),Xy(o)}),ag(),a0(),ag()()(),Tl(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),ww(`ngModelChange`,function(o){return Ky(s),uN(i.experienceTitle,o)||(i.experienceTitle=o),Xy(o)}),ag(),a0(),Tl(29,`po-textarea`,21),ww(`ngModelChange`,function(o){return Ky(s),uN(i.experienceDescripton,o)||(i.experienceDescripton=o),Xy(o)}),ag(),a0(),Tl(30,`po-button`,22),ht$1(`p-click`,function(){Ky(s);let o=Bx(26);return i.addProfessionalExperiences(o),Xy(o.reset())}),ag()()(),_x(31,dt,4,0,`div`,4),ag()()()}r&2&&(jp(6),Ew(`ngModel`,i.basicInformation.name),l0(),jp(),Ew(`ngModel`,i.basicInformation.email),l0(),jp(),Ew(`ngModel`,i.basicInformation.phone),l0(),jp(),Ew(`ngModel`,i.basicInformation.state),nw(`p-options`,i.stateOptions),l0(),jp(),Ew(`ngModel`,i.basicInformation.city),nw(`p-options`,i.cityOptions),l0(),jp(6),Ew(`ngModel`,i.highSchool.name),l0(),jp(),Ew(`ngModel`,i.highSchool.city),l0(),jp(),Ew(`ngModel`,i.highSchool.conclusionYear),l0(),jp(3),Ew(`ngModel`,i.universityEducation.name),l0(),jp(),Ew(`ngModel`,i.universityEducation.city),l0(),jp(),Ew(`ngModel`,i.universityEducation.conclusionYear),l0(),jp(5),Ew(`ngModel`,i.experienceTitle),l0(),jp(),Ew(`ngModel`,i.experienceDescripton),l0(),jp(2),Dx(i.professionalExperiences?31:-1))},dependencies:[yY,gY,mY,Ak,Tk,Zt,xp,Xy$1,qH,iU,fbe,vbe,rCe,M8e,O8e],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Stepper - Active`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import {
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-stepper-active`),ag(),Gl(27,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ut,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ne],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{changeDetector=f(Be$1);currentStep;stepsWithStatus=[{label:`Step 1`,status:It.Done},{label:`Step 2`,status:It.Active},{label:`Step 3`,status:It.Default},{label:`Step 4`,status:It.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===It.Active&&(r.status=It.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===It.Active&&(r.status=It.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===It.Disabled&&(this.stepsWithStatus[this.currentStep].status=It.Default)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(Tl(0,`po-stepper`,0),ht$1(`p-change-step`,function(c){return i.onChangeStatus(c)}),ag()),r&2&&nw(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[M8e],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Stepper - Steps`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-stepper-steps`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ht,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ze],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1008,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`stepIconsProperty`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`stepperOrientation`],[`id`,`stepperStatus`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoStepperModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-stepper`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoStepperComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O `),Tl(15,`code`),cN(16,`po-stepper`),ag(),cN(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),ag(),Tl(18,`p`),cN(19,`Existem duas formas de utilização:`),ag(),Tl(20,`p`),cN(21,`1 - Usando o componente `),Tl(22,`a`,6)(23,`strong`),cN(24,`po-step`),ag()(),cN(25,` para renderizar e descrever os passos.`),ag(),Tl(26,`p`),cN(27,`2 - Através da propriedade `),Tl(28,`code`),cN(29,`p-steps`),ag(),cN(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Tl(31,`em`),cN(32,`step`),ag(),cN(33,` ativo.`),ag(),Tl(34,`p`),cN(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Tl(36,`em`),cN(37,`steps`),ag(),cN(38,`.`),ag(),Tl(39,`p`),cN(40,`Também é possível navegar entre os `),Tl(41,`em`),cN(42,`steps`),ag(),cN(43,` através do teclado utilizando a tecla `),Tl(44,`em`),cN(45,`tab`),ag(),cN(46,` e, para ativar o `),Tl(47,`em`),cN(48,`step`),ag(),cN(49,` em foco basta
pressionar a tecla `),Tl(50,`em`),cN(51,`enter`),ag(),cN(52,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),Tl(53,`em`),cN(54,`steps`),ag(),cN(55,` atrav\xE9s da
propriedade `),Tl(56,`a`,7)(57,`code`),cN(58,`p-step-icons`),ag()(),cN(59,`.`),ag(),Tl(60,`h4`),cN(61,`Utilizando os métodos do componente:`),ag(),Tl(62,`p`),cN(63,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),ag(),Tl(64,`p`),cN(65,`Por exemplo, utilizando um `),Tl(66,`a`,8)(67,`strong`),cN(68,`ViewChild`),ag()(),cN(69,`:`),ag(),Tl(70,`pre`)(71,`code`),cN(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),ag()(),Tl(73,`p`),cN(74,`E para acessar o método:`),ag(),Tl(75,`pre`)(76,`code`),cN(77,`poStepperComponent.next();
`),ag()(),Tl(78,`h4`),cN(79,`Boas práticas`),ag(),Tl(80,`ul`)(81,`li`),cN(82,`Evite `),Tl(83,`code`),cN(84,`labels`),ag(),cN(85,` extensos que quebram o layout do `),Tl(86,`code`),cN(87,`po-stepper`),ag(),cN(88,`, use `),Tl(89,`code`),cN(90,`labels`),ag(),cN(91,` diretos, curtos e intuitivos.`),ag(),Tl(92,`li`),cN(93,`Utilize apenas um `),Tl(94,`code`),cN(95,`po-stepper`),ag(),cN(96,` por página.`),ag()(),Tl(97,`h4`),cN(98,`Tokens customizáveis`),ag(),Tl(99,`p`),cN(100,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(101,`blockquote`)(102,`p`),cN(103,`Para maiores informações, acesse o guia `),Tl(104,`a`,9),cN(105,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(106,`.`),ag()(),Tl(107,`table`)(108,`thead`)(109,`tr`)(110,`th`),cN(111,`Propriedade`),ag(),Tl(112,`th`),cN(113,`Descrição`),ag(),Tl(114,`th`),cN(115,`Valor Padrão`),ag()()(),Tl(116,`tbody`)(117,`tr`)(118,`td`)(119,`strong`),cN(120,`Label`),ag()(),Gl(121,`td`)(122,`td`),ag(),Tl(123,`tr`)(124,`td`)(125,`code`),cN(126,`--font-family`),ag()(),Tl(127,`td`),cN(128,`Família tipográfica usada`),ag(),Tl(129,`td`)(130,`code`),cN(131,`var(--font-family-theme)`),ag()()(),Tl(132,`tr`)(133,`td`)(134,`code`),cN(135,`--font-size`),ag()(),Tl(136,`td`),cN(137,`Tamanho da fonte`),ag(),Tl(138,`td`)(139,`code`),cN(140,`var(--font-size-default)`),ag()()(),Tl(141,`tr`)(142,`td`)(143,`code`),cN(144,`--font-weight`),ag()(),Tl(145,`td`),cN(146,`Peso da fonte`),ag(),Tl(147,`td`)(148,`code`),cN(149,`var(--font-weight-normal)`),ag()()(),Tl(150,`tr`)(151,`td`)(152,`strong`),cN(153,`Step - Done`),ag()(),Gl(154,`td`)(155,`td`),ag(),Tl(156,`tr`)(157,`td`)(158,`code`),cN(159,`--text-color`),ag()(),Tl(160,`td`),cN(161,`Cor do texto no step concluído`),ag(),Tl(162,`td`)(163,`code`),cN(164,`var(--color-neutral-dark-70)`),ag()()(),Tl(165,`tr`)(166,`td`)(167,`code`),cN(168,`--color-icon-done`),ag()(),Tl(169,`td`),cN(170,`Cor do ícone no step concluído`),ag(),Tl(171,`td`)(172,`code`),cN(173,`var(--color-neutral-dark-70)`),ag()()(),Tl(174,`tr`)(175,`td`)(176,`code`),cN(177,`--background-done`),ag()(),Tl(178,`td`),cN(179,`Cor de fundo no step concluído`),ag(),Tl(180,`td`)(181,`code`),cN(182,`var(--color-neutral-light-00)`),ag()()(),Tl(183,`tr`)(184,`td`)(185,`strong`),cN(186,`Line - Done`),ag()(),Gl(187,`td`)(188,`td`),ag(),Tl(189,`tr`)(190,`td`)(191,`code`),cN(192,`--color-line-done`),ag()(),Tl(193,`td`),cN(194,`Cor da linha no step concluído`),ag(),Tl(195,`td`)(196,`code`),cN(197,`var(--color-neutral-mid-40)`),ag()()(),Tl(198,`tr`)(199,`td`)(200,`strong`),cN(201,`Step - Current`),ag()(),Gl(202,`td`)(203,`td`),ag(),Tl(204,`tr`)(205,`td`)(206,`code`),cN(207,`--color-icon-current`),ag()(),Tl(208,`td`),cN(209,`Cor do ícone no step atual`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--color-neutral-light-00)`),ag()()(),Tl(213,`tr`)(214,`td`)(215,`code`),cN(216,`--background-current`),ag()(),Tl(217,`td`),cN(218,`Cor de fundo no step atual`),ag(),Tl(219,`td`)(220,`code`),cN(221,`var(--color-action-default)`),ag()()(),Tl(222,`tr`)(223,`td`)(224,`code`),cN(225,`--font-weight-current`),ag()(),Tl(226,`td`),cN(227,`Peso da fonte no step atual`),ag(),Tl(228,`td`)(229,`code`),cN(230,`var(--font-weight-bold)`),ag()()(),Tl(231,`tr`)(232,`td`)(233,`strong`),cN(234,`Step - Next`),ag()(),Gl(235,`td`)(236,`td`),ag(),Tl(237,`tr`)(238,`td`)(239,`code`),cN(240,`--font-size-circle`),ag()(),Tl(241,`td`),cN(242,`Tamanho da fonte no círculo do próximo step`),ag(),Tl(243,`td`)(244,`code`),cN(245,`var(--font-size-sm)`),ag()()(),Tl(246,`tr`)(247,`td`)(248,`code`),cN(249,`--color-next`),ag()(),Tl(250,`td`),cN(251,`Cor do ícone no próximo step`),ag(),Tl(252,`td`)(253,`code`),cN(254,`var(--color-action-disabled)`),ag()()(),Tl(255,`tr`)(256,`td`)(257,`code`),cN(258,`--text-color-next`),ag()(),Tl(259,`td`),cN(260,`Cor do texto no próximo step`),ag(),Tl(261,`td`)(262,`code`),cN(263,`var(--color-neutral-light-30)`),ag()()(),Tl(264,`tr`)(265,`td`)(266,`strong`),cN(267,`Focused`),ag()(),Gl(268,`td`)(269,`td`),ag(),Tl(270,`tr`)(271,`td`)(272,`code`),cN(273,`--outline-color-focused`),ag()(),Tl(274,`td`),cN(275,`Cor do outline do estado de focus`),ag(),Tl(276,`td`)(277,`code`),cN(278,`var(--color-action-focus)`),ag()()()()()(),Tl(279,`div`,10)(280,`h4`,11),cN(281,`Seletor`),ag(),Tl(282,`pre`,12),cN(283,`<po-stepper
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
`),ag()(),Tl(284,`h4`,13),cN(285,`Propriedades`),ag(),Tl(286,`table`,14)(287,`tr`,15)(288,`th`,16),cN(289,`Nome`),ag(),Tl(290,`th`,16),cN(291,`Tipo`),ag(),Tl(292,`th`,16),cN(293,`Padrão`),ag(),Tl(294,`th`,16),cN(295,`Descrição`),ag()(),Tl(296,`tr`,17)(297,`td`,18)(298,`div`,19)(299,`span`,20),cN(300,` p-align-center`),Gl(301,`br`),ag()()(),Tl(302,`td`,21)(303,`code`,22),cN(304,`boolean`),ag()(),Tl(305,`td`,23)(306,`p`)(307,`code`),cN(308,`true`),ag()()(),Tl(309,`td`,24)(310,`em`)(311,`strong`),cN(312,`(opcional)`),ag()(),Tl(313,`p`),cN(314,`Define o alinhamento dos `),Tl(315,`em`),cN(316,`steps`),ag(),cN(317,` e `),Tl(318,`em`),cN(319,`labels`),ag(),cN(320,` no `),Tl(321,`em`),cN(322,`stepper`),ag(),cN(323,`, dependendo da orientação.`),ag(),Tl(324,`ul`)(325,`li`),cN(326,`Quando `),Tl(327,`code`),cN(328,`true`),ag(),cN(329,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),ag(),Tl(330,`li`),cN(331,`Quando `),Tl(332,`code`),cN(333,`false`),ag(),cN(334,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),ag()()()(),Tl(335,`tr`,17)(336,`td`,18)(337,`div`,19)(338,`span`,20),cN(339,` p-disable-click`),Gl(340,`br`),ag()()(),Tl(341,`td`,21)(342,`code`,22),cN(343,`boolean`),ag()(),Tl(344,`td`,23)(345,`p`)(346,`code`),cN(347,`false`),ag()()(),Tl(348,`td`,24)(349,`em`)(350,`strong`),cN(351,`(opcional)`),ag()(),Tl(352,`p`),cN(353,`Desabilita o clique nos steps.`),ag()()(),Tl(354,`tr`,17)(355,`td`,18)(356,`div`,19)(357,`span`,20),cN(358,` p-step-icon-active`),Gl(359,`br`),ag()()(),Tl(360,`td`,21)(361,`code`,25),cN(362,`string `),ag(),Tl(363,`code`,26),cN(364,` TemplateRef<void>`),ag()(),Tl(365,`td`,23)(366,`p`)(367,`code`),cN(368,`po-icon-edit`),ag()()(),Tl(369,`td`,24)(370,`em`)(371,`strong`),cN(372,`(opcional)`),ag()(),Tl(373,`p`),cN(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Tl(375,`a`,27),cN(376,`Biblioteca de ícones`),ag(),cN(377,`.`),ag(),Tl(378,`pre`)(379,`code`),cN(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),ag()(),Tl(381,`p`),cN(382,`Para customizar o ícone através do `),Tl(383,`code`),cN(384,`TemplateRef`),ag(),cN(385,`, veja a documentação da propriedade `),Tl(386,`code`),cN(387,`p-step-icon-done`),ag(),cN(388,`.`),ag(),Tl(389,`blockquote`)(390,`p`),cN(391,`Deve-se usar `),Tl(392,`code`),cN(393,`font-size: inherit`),ag(),cN(394,` para ajustar ícones que não se ajustam automaticamente.`),ag()()()(),Tl(395,`tr`,17)(396,`td`,18)(397,`div`,19)(398,`span`,20),cN(399,` p-step-icon-done`),Gl(400,`br`),ag()()(),Tl(401,`td`,21)(402,`code`,25),cN(403,`string `),ag(),Tl(404,`code`,26),cN(405,` TemplateRef<void>`),ag()(),Tl(406,`td`,23)(407,`p`)(408,`code`),cN(409,`po-icon-ok`),ag()()(),Tl(410,`td`,24)(411,`em`)(412,`strong`),cN(413,`(opcional)`),ag()(),Tl(414,`p`),cN(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Tl(416,`a`,27),cN(417,`Biblioteca de ícones`),ag()(),Tl(418,`pre`)(419,`code`),cN(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),ag()(),Tl(421,`p`),cN(422,`Outra opção seria a customização do ícone através do `),Tl(423,`code`),cN(424,`TemplateRef`),ag(),cN(425,`, conforme exemplo abaixo:`),ag(),Tl(426,`pre`)(427,`code`),cN(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),ag()(),Tl(429,`blockquote`)(430,`p`),cN(431,`Deve-se usar `),Tl(432,`code`),cN(433,`font-size: inherit`),ag(),cN(434,` para ajustar ícones que não se ajustam automaticamente.`),ag()()()(),Tl(435,`tr`,17)(436,`td`,18)(437,`div`,28)(438,`span`,29),cN(439,` (p-change-step)`),Gl(440,`br`),ag()()(),Tl(441,`td`,21)(442,`code`,30),cN(443,`EventEmitter`),ag()(),Tl(444,`td`,23),cN(445,`-`),ag(),Tl(446,`td`,24)(447,`p`),cN(448,`Ação que será executada quando o usuário mudar o passo do `),Tl(449,`code`),cN(450,`po-stepper`),ag(),cN(451,`.`),ag()()(),Tl(452,`tr`,17)(453,`td`,18)(454,`div`,19)(455,`span`,20),cN(456,` p-orientation`),Gl(457,`br`),ag()()(),Tl(458,`td`,21)(459,`code`,31),cN(460,`PoStepperOrientation`),ag()(),Tl(461,`td`,23)(462,`p`)(463,`code`),cN(464,`PoStepperOrientation.Horizontal`),ag()()(),Tl(465,`td`,24)(466,`em`)(467,`strong`),cN(468,`(opcional)`),ag()(),Tl(469,`p`),cN(470,`Define a orientação de exibição do `),Tl(471,`code`),cN(472,`po-stepper`),ag(),cN(473,`.`),ag(),Tl(474,`blockquote`)(475,`p`),cN(476,`Veja os valores válidos no `),Tl(477,`em`),cN(478,`enum`),ag(),Tl(479,`a`,32),cN(480,`PoStepperOrientation`),ag(),cN(481,`.`),ag()()()(),Tl(482,`tr`,17)(483,`td`,18)(484,`div`,19)(485,`span`,20),cN(486,` p-sequential`),Gl(487,`br`),ag()()(),Tl(488,`td`,21)(489,`code`,22),cN(490,`boolean`),ag()(),Tl(491,`td`,23)(492,`p`)(493,`code`),cN(494,`true`),ag()()(),Tl(495,`td`,24)(496,`em`)(497,`strong`),cN(498,`(opcional)`),ag()(),Tl(499,`p`),cN(500,`Define se o `),Tl(501,`code`),cN(502,`po-stepper`),ag(),cN(503,` será sequencial ou aleatório.`),ag(),Tl(504,`blockquote`)(505,`p`),cN(506,`Ao utilizar o componente `),Tl(507,`a`,6)(508,`strong`),cN(509,`po-step`),ag()(),cN(510,`, o valor desta propriedade sempre será verdadeiro.`),ag()()()(),Tl(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),cN(515,` p-step`),Gl(516,`br`),ag()()(),Tl(517,`td`,21)(518,`code`,33),cN(519,`number`),ag()(),Tl(520,`td`,23)(521,`p`)(522,`code`),cN(523,`1`),ag()()(),Tl(524,`td`,24)(525,`em`)(526,`strong`),cN(527,`(opcional)`),ag()(),Tl(528,`p`),cN(529,`Controla o passo atual do `),Tl(530,`code`),cN(531,`po-stepper`),ag(),cN(532,`.`),ag(),Tl(533,`blockquote`)(534,`p`),cN(535,`Ao utilizar esta propriedade e também utilizar o componente `),Tl(536,`a`,6)(537,`strong`),cN(538,`po-step`),ag()(),cN(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Tl(540,`a`,6)(541,`strong`),cN(542,`po-step`),ag()(),cN(543,`.`),ag()()()(),Tl(544,`tr`,17)(545,`td`,18)(546,`div`,19)(547,`span`,20),cN(548,` p-step-icons`),Gl(549,`br`),ag()()(),Tl(550,`td`,21)(551,`code`,22),cN(552,`boolean`),ag()(),Tl(553,`td`,23)(554,`p`)(555,`code`),cN(556,`false`),ag()()(),Tl(557,`td`,24)(558,`em`)(559,`strong`),cN(560,`(opcional)`),ag()(),Tl(561,`p`),Gl(562,`a`,34),ag(),Tl(563,`p`),cN(564,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),Tl(565,`em`),cN(566,`steps`),ag(),cN(567,`.`),ag()()(),Tl(568,`tr`,17)(569,`td`,18)(570,`div`,19)(571,`span`,20),cN(572,` p-step-size`),Gl(573,`br`),ag()()(),Tl(574,`td`,21)(575,`code`,33),cN(576,`number`),ag()(),Tl(577,`td`,23)(578,`p`)(579,`code`),cN(580,`24`),ag()()(),Tl(581,`td`,24)(582,`em`)(583,`strong`),cN(584,`(opcional)`),ag()(),Tl(585,`p`),cN(586,`Define o tamanho dos `),Tl(587,`em`),cN(588,`steps`),ag(),cN(589,` em `),Tl(590,`em`),cN(591,`pixels`),ag(),cN(592,`, possibilitando um maior destaque.`),ag(),Tl(593,`p`),cN(594,`O valor informado deve ser entre `),Tl(595,`code`),cN(596,`24`),ag(),cN(597,` e `),Tl(598,`code`),cN(599,`64`),ag(),cN(600,`.`),ag(),Tl(601,`blockquote`)(602,`p`),cN(603,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),Tl(604,`em`),cN(605,`default`),ag(),cN(606,`.`),ag()()()(),Tl(607,`tr`,17)(608,`td`,18)(609,`div`,19)(610,`span`,20),cN(611,` p-steps`),Gl(612,`br`),ag()()(),Tl(613,`td`,21)(614,`code`,35),cN(615,`Array<PoStepperItem>`),ag()(),Tl(616,`td`,23),cN(617,`-`),ag(),Tl(618,`td`,24)(619,`em`)(620,`strong`),cN(621,`(opcional)`),ag()(),Tl(622,`p`),cN(623,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ag(),Tl(624,`blockquote`)(625,`p`),cN(626,`Ao utilizar esta propriedade e também utilizar o componente `),Tl(627,`a`,6)(628,`strong`),cN(629,`po-step`),ag()(),cN(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Tl(631,`a`,6)(632,`strong`),cN(633,`po-step`),ag()(),cN(634,`.`),ag()()()()(),Tl(635,`h3`,13),cN(636,`Métodos`),ag(),Tl(637,`table`,36)(638,`tr`,17)(639,`th`,37)(640,`div`,19)(641,`h4`)(642,`span`,20),cN(643,` active `),ag()()()()(),Tl(644,`tr`,24)(645,`td`,24)(646,`p`),cN(647,`Altera o status do `),Tl(648,`em`),cN(649,`step`),ag(),cN(650,` para ativo.`),ag(),Tl(651,`blockquote`)(652,`p`),cN(653,`Este método é valido apenas para as implementações que utilizam o componente `),Tl(654,`a`,6)(655,`strong`),cN(656,`po-step`),ag()(),cN(657,`.`),ag()()()()(),Tl(658,`h5`)(659,`b`),cN(660,`Parâmetros`),ag()(),Tl(661,`table`,14)(662,`tr`,15)(663,`th`,16),cN(664,`Nome`),ag(),Tl(665,`th`,16),cN(666,`Tipo`),ag(),Tl(667,`th`,16),cN(668,`Descrição`),ag()(),Tl(669,`tr`,17)(670,`td`,18),cN(671,` index`),ag(),Tl(672,`td`,21)(673,`code`,38),cN(674,` number `),ag()(),Tl(675,`td`,24)(676,`p`),cN(677,`Índice do `),Tl(678,`code`),cN(679,`po-step`),ag(),cN(680,` que se deseja ativar.`),ag()()()(),Gl(681,`br`),Tl(682,`table`,36)(683,`tr`,17)(684,`th`,37)(685,`div`,19)(686,`h4`)(687,`span`,20),cN(688,` first `),ag()()()()(),Tl(689,`tr`,24)(690,`td`,24)(691,`p`),cN(692,`Ativa o primeiro `),Tl(693,`em`),cN(694,`step`),ag(),cN(695,`.`),ag(),Tl(696,`blockquote`)(697,`p`),cN(698,`Este método é valido apenas para as implementações que utilizam o componente `),Tl(699,`a`,6)(700,`strong`),cN(701,`po-step`),ag()(),cN(702,`.`),ag()()()()(),Gl(703,`br`),Tl(704,`table`,36)(705,`tr`,17)(706,`th`,37)(707,`div`,19)(708,`h4`)(709,`span`,20),cN(710,` next `),ag()()()()(),Tl(711,`tr`,24)(712,`td`,24)(713,`p`),cN(714,`Ativa o próximo `),Tl(715,`em`),cN(716,`step`),ag(),cN(717,`.`),ag(),Tl(718,`blockquote`)(719,`p`),cN(720,`Este método é valido apenas para as implementações que utilizam o componente `),Tl(721,`a`,6)(722,`strong`),cN(723,`po-step`),ag()(),cN(724,`.`),ag()()()()(),Gl(725,`br`),Tl(726,`table`,36)(727,`tr`,17)(728,`th`,37)(729,`div`,19)(730,`h4`)(731,`span`,20),cN(732,` previous `),ag()()()()(),Tl(733,`tr`,24)(734,`td`,24)(735,`p`),cN(736,`Ativa o `),Tl(737,`em`),cN(738,`step`),ag(),cN(739,` anterior.`),ag(),Tl(740,`blockquote`)(741,`p`),cN(742,`Este método é valido apenas para as implementações que utilizam o componente `),Tl(743,`a`,6)(744,`strong`),cN(745,`po-step`),ag()(),cN(746,`.`),ag()()()()(),Gl(747,`br`),Tl(748,`h3`),cN(749,`Interfaces`),ag(),Tl(750,`h4`,39)(751,`code`,5),cN(752,`PoStepperItem`),ag()(),Tl(753,`div`,2)(754,`p`),cN(755,`Interface para definição dos `),Tl(756,`em`),cN(757,`steps`),ag(),cN(758,` do componente `),Tl(759,`code`),cN(760,`po-stepper`),ag(),cN(761,` quando utilizada a propriedade `),Tl(762,`code`),cN(763,`p-steps`),ag(),cN(764,`.`),ag()(),Tl(765,`h4`,13),cN(766,`Propriedades`),ag(),Tl(767,`table`,14)(768,`tr`,15)(769,`th`,16),cN(770,`Nome`),ag(),Tl(771,`th`,16),cN(772,`Tipo`),ag(),Tl(773,`th`,16),cN(774,`Descrição`),ag()(),Tl(775,`tr`,17)(776,`td`,18)(777,`div`,19)(778,`span`,20),cN(779,` iconActive`),Gl(780,`br`),ag()()(),Tl(781,`td`,21)(782,`code`,25),cN(783,`string `),ag(),Tl(784,`code`,26),cN(785,` TemplateRef<void>`),ag()(),Tl(786,`td`,24)(787,`em`)(788,`strong`),cN(789,`(opcional)`),ag()(),Tl(790,`p`),cN(791,`Define o ícone do `),Tl(792,`em`),cN(793,`step`),ag(),cN(794,` ativo.`),ag()()(),Tl(795,`tr`,17)(796,`td`,18)(797,`div`,19)(798,`span`,20),cN(799,` iconDefault`),Gl(800,`br`),ag()()(),Tl(801,`td`,21)(802,`code`,25),cN(803,`string `),ag(),Tl(804,`code`,26),cN(805,` TemplateRef<void>`),ag()(),Tl(806,`td`,24)(807,`em`)(808,`strong`),cN(809,`(opcional)`),ag()(),Tl(810,`p`),cN(811,`Define o ícone do `),Tl(812,`em`),cN(813,`step`),ag(),cN(814,` default.`),ag()()(),Tl(815,`tr`,17)(816,`td`,18)(817,`div`,19)(818,`span`,20),cN(819,` iconDone`),Gl(820,`br`),ag()()(),Tl(821,`td`,21)(822,`code`,25),cN(823,`string `),ag(),Tl(824,`code`,26),cN(825,` TemplateRef<void>`),ag()(),Tl(826,`td`,24)(827,`em`)(828,`strong`),cN(829,`(opcional)`),ag()(),Tl(830,`p`),cN(831,`Define o ícone do `),Tl(832,`em`),cN(833,`step`),ag(),cN(834,` concluído.`),ag()()(),Tl(835,`tr`,17)(836,`td`,18)(837,`div`,19)(838,`span`,20),cN(839,` id`),Gl(840,`br`),ag()()(),Tl(841,`td`,21)(842,`code`,25),cN(843,`string`),ag()(),Tl(844,`td`,24)(845,`em`)(846,`strong`),cN(847,`(opcional)`),ag()(),Tl(848,`p`),cN(849,`Identificador único do step.`),ag()()(),Tl(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),cN(854,` label`),Gl(855,`br`),ag()()(),Tl(856,`td`,21)(857,`code`,25),cN(858,`string`),ag()(),Tl(859,`td`,24)(860,`em`)(861,`strong`),cN(862,`(opcional)`),ag()(),Tl(863,`p`),cN(864,`Texto do item do stepper.`),ag()()(),Tl(865,`tr`,17)(866,`td`,18)(867,`div`,19)(868,`span`,20),cN(869,` status`),Gl(870,`br`),ag()()(),Tl(871,`td`,21)(872,`code`,40),cN(873,`PoStepperStatus`),ag()(),Tl(874,`td`,24)(875,`em`)(876,`strong`),cN(877,`(opcional)`),ag()(),Tl(878,`p`),cN(879,`Define o estado de exibição do `),Tl(880,`em`),cN(881,`step`),ag(),cN(882,`.`),ag()()()(),Tl(883,`h3`),cN(884,`Enums`),ag(),Tl(885,`h4`,4)(886,`code`,5),cN(887,`PoStepperOrientation`),ag()(),Tl(888,`div`,2)(889,`p`),Gl(890,`a`,41),ag(),Tl(891,`p`)(892,`em`),cN(893,`Enums`),ag(),cN(894,` para definição da orientação do `),Tl(895,`code`),cN(896,`po-stepper`),ag(),cN(897,`.`),ag()(),Tl(898,`h4`,13),cN(899,`Propriedades`),ag(),Tl(900,`table`,14)(901,`tr`,15)(902,`th`,16),cN(903,`Nome`),ag(),Tl(904,`th`,16),cN(905,`Descrição`),ag()(),Tl(906,`tr`,17)(907,`td`,18)(908,`div`,19)(909,`span`,20),cN(910,` Horizontal`),Gl(911,`br`),ag()()(),Tl(912,`td`,24)(913,`p`),cN(914,`Define a exibição do componente na horizontal.`),ag()()(),Tl(915,`tr`,17)(916,`td`,18)(917,`div`,19)(918,`span`,20),cN(919,` Vertical`),Gl(920,`br`),ag()()(),Tl(921,`td`,24)(922,`p`),cN(923,`Define a exibição do componente na vertical.`),ag()()()(),Tl(924,`h4`,4)(925,`code`,5),cN(926,`PoStepperStatus`),ag()(),Tl(927,`div`,2)(928,`p`),Gl(929,`a`,42),ag(),Tl(930,`p`)(931,`em`),cN(932,`Enums`),ag(),cN(933,` para os status do `),Tl(934,`code`),cN(935,`po-stepper`),ag(),cN(936,` quando utilizada a propriedade `),Tl(937,`code`),cN(938,`p-steps`),ag(),cN(939,`.`),ag()(),Tl(940,`h4`,13),cN(941,`Propriedades`),ag(),Tl(942,`table`,14)(943,`tr`,15)(944,`th`,16),cN(945,`Nome`),ag(),Tl(946,`th`,16),cN(947,`Descrição`),ag()(),Tl(948,`tr`,17)(949,`td`,18)(950,`div`,19)(951,`span`,20),cN(952,` Active`),Gl(953,`br`),ag()()(),Tl(954,`td`,24)(955,`p`),cN(956,`Define o estado do `),Tl(957,`em`),cN(958,`step`),ag(),cN(959,` como ativo.`),ag()()(),Tl(960,`tr`,17)(961,`td`,18)(962,`div`,19)(963,`span`,20),cN(964,` Default`),Gl(965,`br`),ag()()(),Tl(966,`td`,24)(967,`p`),cN(968,`Define o estado do `),Tl(969,`em`),cN(970,`step`),ag(),cN(971,` como padrão.`),ag()()(),Tl(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),cN(976,` Disabled`),Gl(977,`br`),ag()()(),Tl(978,`td`,24)(979,`p`),cN(980,`Define o estado do `),Tl(981,`em`),cN(982,`step`),ag(),cN(983,` como desabilitado.`),ag()()(),Tl(984,`tr`,17)(985,`td`,18)(986,`div`,19)(987,`span`,20),cN(988,` Done`),Gl(989,`br`),ag()()(),Tl(990,`td`,24)(991,`p`),cN(992,`Define o estado do `),Tl(993,`em`),cN(994,`step`),ag(),cN(995,` como concluído.`),ag()()(),Tl(996,`tr`,17)(997,`td`,18)(998,`div`,19)(999,`span`,20),cN(1e3,` Error`),Gl(1001,`br`),ag()()(),Tl(1002,`td`,24)(1003,`p`),cN(1004,`Define o estado do `),Tl(1005,`em`),cN(1006,`step`),ag(),cN(1007,` com erro.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var bt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Stepper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-stepper-doc`),ag(),Tl(4,`po-tab`,3),ht$1(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-stepper-basic-view`)(6,`sample-po-stepper-labs-view`)(7,`sample-po-stepper-sales-view`)(8,`sample-po-stepper-active-view`)(9,`sample-po-stepper-steps-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Ve,Ae,Le,qe,Oe,Re],encapsulation:2,changeDetection:1})}return a})()}];var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(bt),bL]})}return a})();var En=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,je]})}return a})();export{En as DocPoStepperModule};