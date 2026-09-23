import{t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Cr as Nx,Et as V8e,G as It,Gr as Ue,Hr as Tw,Ii as ht$1,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,Nt as Y0e,Qi as oN,Sa as yN,Si as db,St as U8e,Ti as f0,Ui as lg,Un as Ax,Ur as Tx,Vi as kk,X as KH,Xn as Cn,Yi as mN,Yt as fCe,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,fr as Li,ga as w,gi as bw,ir as I,jn as wp,kn as vr,l as ar,lt as OP,mr as MN,nr as HO,oa as ql,on as kbe,pt as Pbe,qi as ly,qr as Up,r as Ga,ri as Xn,rr as He,sr as Jy,ua as ue,ui as Zl,un as nb,ut as Obe,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,wr as O,xa as xx,yr as Mx}from"./main-NT5YGKBQ.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(Ml(0,`po-stepper`,0),ql(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),lg()),r&2&&cw(`p-align-center`,!1)},dependencies:[fCe,U8e],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Stepper Basic`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-stepper-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,j){if(a&1&&(Ml(0,`po-step`,3)(1,`h2`),mN(2),lg()()),a&2){let m=j.$implicit;cw(`p-label`,m.label)(`p-icon-default`,m.iconDefault),Up(2),gg(`Step Content `,m.label)}}var ke=(()=>{class a{changeDetector=f(Ue);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(m){this.steps=[...this.steps,r({},m)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(m){this.event=m,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`po-container`)(1,`po-stepper`,2),ht$1(`p-change-step`,function(){return i.changeStep(`change`)}),xx(2,Ge,3,3,`po-step`,3,Ax),lg(),ql(4,`po-divider`)(5,`po-info`,4),Ml(6,`form`,null,0),ql(8,`po-dynamic-form`,5),Ml(9,`div`,6)(10,`po-button`,7),ht$1(`p-click`,function(){Qy(s);let o=Yx(7);return i.addItem(i.stepItem),Jy(o.reset())}),lg()()(),Ml(11,`form`,null,1),ql(13,`po-dynamic-form`,5)(14,`po-divider`),Ml(15,`div`,6)(16,`po-button`,8),ht$1(`p-click`,function(){Qy(s);let o=Yx(7),Ue=Yx(12);return i.restore(),Ue.reset(),Jy(o.reset())}),lg()()()()}if(r&2){let s=Yx(7);Up(),cw(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),Up(),Nx(i.steps),Up(3),cw(`p-value`,i.event),Up(3),cw(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),Up(2),cw(`p-disabled`,s.invalid),Up(3),cw(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[IY,CY,kk,Zt,wp,nb,Obe,kbe,fCe,U8e],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Stepper Labs`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-stepper-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ze,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ke],encapsulation:2,changeDetection:1})}return a})();var $e=[`addressForm`];var et=[`paymentForm`];var tt=[`personalForm`];var nt=[`successData`];function it(a,j){a&1&&ql(0,`po-loading-overlay`,18)}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(m){return O(m.form.valid).pipe(He(()=>this.isLoadingPayment=!0),ly(2e3),Li(()=>this.isLoadingPayment=!1))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&Zl($e,7)(et,7)(tt,7)(nt,7),r&2){let s;lo(s=uo())&&(i.addressForm=s.first),lo(s=uo())&&(i.paymentForm=s.first),lo(s=uo())&&(i.personalForm=s.first),lo(s=uo())&&(i.successData=s.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),ql(4,`img`,11),lg(),Ml(5,`div`,12)(6,`p`,13),mN(7,`Nike XYZ - Red/Gold Stripes`),lg(),Ml(8,`p`,14),mN(9,`Brand: Nike | Style: Modern | Men's`),lg(),Ml(10,`p`,15),mN(11,`Width: 12.5 - COD: 001254648412319`),lg(),ql(12,`po-divider`),Ml(13,`p`,15),mN(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),lg()()()(),Ml(15,`po-widget`,16)(16,`p`,15),mN(17,`$2.500,00`),lg(),Ml(18,`p`,15),mN(19,`$500,00(-)`),lg(),Ml(20,`p`,15),mN(21,`$160,00(+)`),lg(),ql(22,`po-divider`),Ml(23,`p`,14),mN(24,`Total: $2.160,00`),lg()()(),ql(25,`po-divider`),Ml(26,`div`,17),Tx(27,it,1,0,`po-loading-overlay`,18),Ml(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),ht$1(`p-primary-action`,function(){Qy(s);return Jy(Yx(29).next())}),Ml(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.name,o)||(i.name=o),Jy(o)}),lg(),f0(),Ml(36,`po-datepicker`,23),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.birthday,o)||(i.birthday=o),Jy(o)}),lg(),f0(),Ml(37,`po-input`,24),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.document,o)||(i.document=o),Jy(o)}),lg(),f0(),lg()()()(),Ml(38,`po-step`,25)(39,`po-widget`,26),ht$1(`p-primary-action`,function(){Qy(s);return Jy(Yx(29).previous())})(`p-secondary-action`,function(){Qy(s);return Jy(Yx(29).next())}),Ml(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.address.street,o)||(i.address.street=o),Jy(o)}),lg(),f0(),Ml(44,`po-input`,28),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.address.number,o)||(i.address.number=o),Jy(o)}),lg(),f0(),Ml(45,`po-input`,29),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.address.city,o)||(i.address.city=o),Jy(o)}),lg(),f0(),lg(),Ml(46,`div`,8)(47,`po-input`,30),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.address.code,o)||(i.address.code=o),Jy(o)}),lg(),f0(),Ml(48,`po-input`,31),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.address.country,o)||(i.address.country=o),Jy(o)}),lg(),f0(),Ml(49,`po-input`,32),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.address.reference,o)||(i.address.reference=o),Jy(o)}),lg(),f0(),lg()()()(),Ml(50,`po-step`,33)(51,`po-widget`,26),ht$1(`p-primary-action`,function(){Qy(s);return Jy(Yx(29).previous())})(`p-secondary-action`,function(){Qy(s);return Jy(Yx(29).next())}),Ml(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.cardName,o)||(i.cardName=o),Jy(o)}),lg(),f0(),Ml(57,`po-input`,35,5),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.cardCode,o)||(i.cardCode=o),Jy(o)}),lg(),f0(),Ml(59,`po-input`,36,6),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.cardValid,o)||(i.cardValid=o),Jy(o)}),lg(),f0(),lg()()()(),Ml(61,`po-step`,37)(62,`po-widget`,26),ht$1(`p-primary-action`,function(){Qy(s);return Jy(Yx(29).previous())})(`p-secondary-action`,function(){Qy(s);let o=Yx(29);return Jy(i.onConfirmStep(o))}),Ml(63,`div`,8),ql(64,`po-info`,38)(65,`po-info`,39),lg(),Ml(66,`div`,8),ql(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),lg(),ql(71,`po-divider`),Ml(72,`div`,8),ql(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),lg()()()()(),Ml(78,`po-modal`,49,7)(80,`div`,8),ql(81,`img`,50),Ml(82,`p`,51),mN(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),lg()()()}if(r&2){let s=Yx(33),c=Yx(41),o=Yx(53);Up(27),Mx(i.isLoadingPayment?27:-1),Up(3),cw(`p-can-active-next-step`,i.canActiveNextStep.bind(i,s)),Up(),cw(`p-primary-label`,i.nextLabelWidget),Up(4),Tw(`ngModel`,i.name),p0(),Up(),Tw(`ngModel`,i.birthday),p0(),Up(),Tw(`ngModel`,i.document),p0(),Up(),cw(`p-can-active-next-step`,i.canActiveNextStep.bind(i,c)),Up(),cw(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),Up(4),Tw(`ngModel`,i.address.street),p0(),Up(),Tw(`ngModel`,i.address.number),p0(),Up(),Tw(`ngModel`,i.address.city),p0(),Up(2),Tw(`ngModel`,i.address.code),p0(),Up(),Tw(`ngModel`,i.address.country),p0(),Up(),Tw(`ngModel`,i.address.reference),p0(),Up(),cw(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),Up(),cw(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),Up(4),Tw(`ngModel`,i.cardName),p0(),Up(2),Tw(`ngModel`,i.cardCode),p0(),Up(2),Tw(`ngModel`,i.cardValid),p0(),Up(3),cw(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),Up(2),cw(`p-value`,i.name),Up(),cw(`p-value`,i.document),Up(2),cw(`p-value`,i.address.street),Up(),cw(`p-value`,i.address.number),Up(),cw(`p-value`,i.address.city),Up(),cw(`p-value`,i.address.country)}},dependencies:[IY,wY,CY,Vk,kk,nb,Y0e,lU,kbe,OP,vr,fCe,U8e,$8e],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Stepper - Sales`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-stepper-position-relative {
  position: relative;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-stepper-sales`),lg(),ql(29,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,at,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,We],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{http=f(db);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var rt=[`basicInformation`];var lt=[`academicFormation`];var st=[`professionalExperiences`];function mt(a,j){if(a&1&&(Ml(0,`div`,23)(1,`po-widget`,24)(2,`p`),mN(3),lg()()()),a&2){let m=j.$implicit;Up(),cw(`p-title`,m.title),Up(2),bw(m.description)}}function dt(a,j){if(a&1&&(Ml(0,`div`,4),ql(1,`po-divider`,23),xx(2,mt,4,2,`div`,23,Ax),lg()),a&2){let m=zx();Up(2),Nx(m.professionalExperiences)}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(Ue);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&Zl(rt,7)(lt,7)(st,7)(U8e,5),r&2){let s;lo(s=uo())&&(i.basicInformationForm=s.first),lo(s=uo())&&(i.academicFormationForm=s.first),lo(s=uo())&&(i.professionalExperiencesForm=s.first),lo(s=uo())&&(i.stepper=s.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.basicInformation.name,o)||(i.basicInformation.name=o),Jy(o)}),lg(),f0(),Ml(7,`po-email`,6),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.basicInformation.email,o)||(i.basicInformation.email=o),Jy(o)}),lg(),f0(),Ml(8,`po-input`,7),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.basicInformation.phone,o)||(i.basicInformation.phone=o),Jy(o)}),lg(),f0(),Ml(9,`po-select`,8),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.basicInformation.state,o)||(i.basicInformation.state=o),Jy(o)}),ht$1(`p-change`,function(){return i.onChangeState()}),lg(),f0(),Ml(10,`po-select`,9),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.basicInformation.city,o)||(i.basicInformation.city=o),Jy(o)}),lg(),f0(),lg()()(),Ml(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),ql(15,`po-divider`,11),Ml(16,`po-input`,12),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.highSchool.name,o)||(i.highSchool.name=o),Jy(o)}),lg(),f0(),Ml(17,`po-input`,13),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.highSchool.city,o)||(i.highSchool.city=o),Jy(o)}),lg(),f0(),Ml(18,`po-input`,14),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),Jy(o)}),lg(),f0(),lg(),Ml(19,`div`,4),ql(20,`po-divider`,15),Ml(21,`po-input`,16),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.universityEducation.name,o)||(i.universityEducation.name=o),Jy(o)}),lg(),f0(),Ml(22,`po-input`,17),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.universityEducation.city,o)||(i.universityEducation.city=o),Jy(o)}),lg(),f0(),Ml(23,`po-input`,18),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),Jy(o)}),lg(),f0(),lg()()(),Ml(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.experienceTitle,o)||(i.experienceTitle=o),Jy(o)}),lg(),f0(),Ml(29,`po-textarea`,21),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.experienceDescripton,o)||(i.experienceDescripton=o),Jy(o)}),lg(),f0(),Ml(30,`po-button`,22),ht$1(`p-click`,function(){Qy(s);let o=Yx(26);return i.addProfessionalExperiences(o),Jy(o.reset())}),lg()()(),Tx(31,dt,4,0,`div`,4),lg()()()}r&2&&(Up(6),Tw(`ngModel`,i.basicInformation.name),p0(),Up(),Tw(`ngModel`,i.basicInformation.email),p0(),Up(),Tw(`ngModel`,i.basicInformation.phone),p0(),Up(),Tw(`ngModel`,i.basicInformation.state),cw(`p-options`,i.stateOptions),p0(),Up(),Tw(`ngModel`,i.basicInformation.city),cw(`p-options`,i.cityOptions),p0(),Up(6),Tw(`ngModel`,i.highSchool.name),p0(),Up(),Tw(`ngModel`,i.highSchool.city),p0(),Up(),Tw(`ngModel`,i.highSchool.conclusionYear),p0(),Up(3),Tw(`ngModel`,i.universityEducation.name),p0(),Up(),Tw(`ngModel`,i.universityEducation.city),p0(),Up(),Tw(`ngModel`,i.universityEducation.conclusionYear),p0(),Up(5),Tw(`ngModel`,i.experienceTitle),p0(),Up(),Tw(`ngModel`,i.experienceDescripton),p0(),Up(2),Mx(i.professionalExperiences?31:-1))},dependencies:[IY,wY,CY,Vk,kk,Zt,wp,nb,KH,lU,Tbe,Pbe,fCe,U8e,$8e],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Stepper - Active`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import {
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-stepper-active`),lg(),ql(27,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ut,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ne],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{changeDetector=f(Ue);currentStep;stepsWithStatus=[{label:`Step 1`,status:It.Done},{label:`Step 2`,status:It.Active},{label:`Step 3`,status:It.Default},{label:`Step 4`,status:It.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===It.Active&&(r.status=It.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===It.Active&&(r.status=It.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===It.Disabled&&(this.stepsWithStatus[this.currentStep].status=It.Default)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(Ml(0,`po-stepper`,0),ht$1(`p-change-step`,function(c){return i.onChangeStatus(c)}),lg()),r&2&&cw(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[U8e],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Stepper - Steps`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-stepper-steps`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ht,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ze],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1008,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`stepIconsProperty`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`stepperOrientation`],[`id`,`stepperStatus`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoStepperModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-stepper`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoStepperComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O `),Ml(15,`code`),mN(16,`po-stepper`),lg(),mN(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),lg(),Ml(18,`p`),mN(19,`Existem duas formas de utilização:`),lg(),Ml(20,`p`),mN(21,`1 - Usando o componente `),Ml(22,`a`,6)(23,`strong`),mN(24,`po-step`),lg()(),mN(25,` para renderizar e descrever os passos.`),lg(),Ml(26,`p`),mN(27,`2 - Através da propriedade `),Ml(28,`code`),mN(29,`p-steps`),lg(),mN(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Ml(31,`em`),mN(32,`step`),lg(),mN(33,` ativo.`),lg(),Ml(34,`p`),mN(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Ml(36,`em`),mN(37,`steps`),lg(),mN(38,`.`),lg(),Ml(39,`p`),mN(40,`Também é possível navegar entre os `),Ml(41,`em`),mN(42,`steps`),lg(),mN(43,` através do teclado utilizando a tecla `),Ml(44,`em`),mN(45,`tab`),lg(),mN(46,` e, para ativar o `),Ml(47,`em`),mN(48,`step`),lg(),mN(49,` em foco basta
pressionar a tecla `),Ml(50,`em`),mN(51,`enter`),lg(),mN(52,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),Ml(53,`em`),mN(54,`steps`),lg(),mN(55,` atrav\xE9s da
propriedade `),Ml(56,`a`,7)(57,`code`),mN(58,`p-step-icons`),lg()(),mN(59,`.`),lg(),Ml(60,`h4`),mN(61,`Utilizando os métodos do componente:`),lg(),Ml(62,`p`),mN(63,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),lg(),Ml(64,`p`),mN(65,`Por exemplo, utilizando um `),Ml(66,`a`,8)(67,`strong`),mN(68,`ViewChild`),lg()(),mN(69,`:`),lg(),Ml(70,`pre`)(71,`code`),mN(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),lg()(),Ml(73,`p`),mN(74,`E para acessar o método:`),lg(),Ml(75,`pre`)(76,`code`),mN(77,`poStepperComponent.next();
`),lg()(),Ml(78,`h4`),mN(79,`Boas práticas`),lg(),Ml(80,`ul`)(81,`li`),mN(82,`Evite `),Ml(83,`code`),mN(84,`labels`),lg(),mN(85,` extensos que quebram o layout do `),Ml(86,`code`),mN(87,`po-stepper`),lg(),mN(88,`, use `),Ml(89,`code`),mN(90,`labels`),lg(),mN(91,` diretos, curtos e intuitivos.`),lg(),Ml(92,`li`),mN(93,`Utilize apenas um `),Ml(94,`code`),mN(95,`po-stepper`),lg(),mN(96,` por página.`),lg()(),Ml(97,`h4`),mN(98,`Tokens customizáveis`),lg(),Ml(99,`p`),mN(100,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(101,`blockquote`)(102,`p`),mN(103,`Para maiores informações, acesse o guia `),Ml(104,`a`,9),mN(105,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(106,`.`),lg()(),Ml(107,`table`)(108,`thead`)(109,`tr`)(110,`th`),mN(111,`Propriedade`),lg(),Ml(112,`th`),mN(113,`Descrição`),lg(),Ml(114,`th`),mN(115,`Valor Padrão`),lg()()(),Ml(116,`tbody`)(117,`tr`)(118,`td`)(119,`strong`),mN(120,`Label`),lg()(),ql(121,`td`)(122,`td`),lg(),Ml(123,`tr`)(124,`td`)(125,`code`),mN(126,`--font-family`),lg()(),Ml(127,`td`),mN(128,`Família tipográfica usada`),lg(),Ml(129,`td`)(130,`code`),mN(131,`var(--font-family-theme)`),lg()()(),Ml(132,`tr`)(133,`td`)(134,`code`),mN(135,`--font-size`),lg()(),Ml(136,`td`),mN(137,`Tamanho da fonte`),lg(),Ml(138,`td`)(139,`code`),mN(140,`var(--font-size-default)`),lg()()(),Ml(141,`tr`)(142,`td`)(143,`code`),mN(144,`--font-weight`),lg()(),Ml(145,`td`),mN(146,`Peso da fonte`),lg(),Ml(147,`td`)(148,`code`),mN(149,`var(--font-weight-normal)`),lg()()(),Ml(150,`tr`)(151,`td`)(152,`strong`),mN(153,`Step - Done`),lg()(),ql(154,`td`)(155,`td`),lg(),Ml(156,`tr`)(157,`td`)(158,`code`),mN(159,`--text-color`),lg()(),Ml(160,`td`),mN(161,`Cor do texto no step concluído`),lg(),Ml(162,`td`)(163,`code`),mN(164,`var(--color-neutral-dark-70)`),lg()()(),Ml(165,`tr`)(166,`td`)(167,`code`),mN(168,`--color-icon-done`),lg()(),Ml(169,`td`),mN(170,`Cor do ícone no step concluído`),lg(),Ml(171,`td`)(172,`code`),mN(173,`var(--color-neutral-dark-70)`),lg()()(),Ml(174,`tr`)(175,`td`)(176,`code`),mN(177,`--background-done`),lg()(),Ml(178,`td`),mN(179,`Cor de fundo no step concluído`),lg(),Ml(180,`td`)(181,`code`),mN(182,`var(--color-neutral-light-00)`),lg()()(),Ml(183,`tr`)(184,`td`)(185,`strong`),mN(186,`Line - Done`),lg()(),ql(187,`td`)(188,`td`),lg(),Ml(189,`tr`)(190,`td`)(191,`code`),mN(192,`--color-line-done`),lg()(),Ml(193,`td`),mN(194,`Cor da linha no step concluído`),lg(),Ml(195,`td`)(196,`code`),mN(197,`var(--color-neutral-mid-40)`),lg()()(),Ml(198,`tr`)(199,`td`)(200,`strong`),mN(201,`Step - Current`),lg()(),ql(202,`td`)(203,`td`),lg(),Ml(204,`tr`)(205,`td`)(206,`code`),mN(207,`--color-icon-current`),lg()(),Ml(208,`td`),mN(209,`Cor do ícone no step atual`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--color-neutral-light-00)`),lg()()(),Ml(213,`tr`)(214,`td`)(215,`code`),mN(216,`--background-current`),lg()(),Ml(217,`td`),mN(218,`Cor de fundo no step atual`),lg(),Ml(219,`td`)(220,`code`),mN(221,`var(--color-action-default)`),lg()()(),Ml(222,`tr`)(223,`td`)(224,`code`),mN(225,`--font-weight-current`),lg()(),Ml(226,`td`),mN(227,`Peso da fonte no step atual`),lg(),Ml(228,`td`)(229,`code`),mN(230,`var(--font-weight-bold)`),lg()()(),Ml(231,`tr`)(232,`td`)(233,`strong`),mN(234,`Step - Next`),lg()(),ql(235,`td`)(236,`td`),lg(),Ml(237,`tr`)(238,`td`)(239,`code`),mN(240,`--font-size-circle`),lg()(),Ml(241,`td`),mN(242,`Tamanho da fonte no círculo do próximo step`),lg(),Ml(243,`td`)(244,`code`),mN(245,`var(--font-size-sm)`),lg()()(),Ml(246,`tr`)(247,`td`)(248,`code`),mN(249,`--color-next`),lg()(),Ml(250,`td`),mN(251,`Cor do ícone no próximo step`),lg(),Ml(252,`td`)(253,`code`),mN(254,`var(--color-action-disabled)`),lg()()(),Ml(255,`tr`)(256,`td`)(257,`code`),mN(258,`--text-color-next`),lg()(),Ml(259,`td`),mN(260,`Cor do texto no próximo step`),lg(),Ml(261,`td`)(262,`code`),mN(263,`var(--color-neutral-light-30)`),lg()()(),Ml(264,`tr`)(265,`td`)(266,`strong`),mN(267,`Focused`),lg()(),ql(268,`td`)(269,`td`),lg(),Ml(270,`tr`)(271,`td`)(272,`code`),mN(273,`--outline-color-focused`),lg()(),Ml(274,`td`),mN(275,`Cor do outline do estado de focus`),lg(),Ml(276,`td`)(277,`code`),mN(278,`var(--color-action-focus)`),lg()()()()()(),Ml(279,`div`,10)(280,`h4`,11),mN(281,`Seletor`),lg(),Ml(282,`pre`,12),mN(283,`<po-stepper
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
`),lg()(),Ml(284,`h4`,13),mN(285,`Propriedades`),lg(),Ml(286,`table`,14)(287,`tr`,15)(288,`th`,16),mN(289,`Nome`),lg(),Ml(290,`th`,16),mN(291,`Tipo`),lg(),Ml(292,`th`,16),mN(293,`Padrão`),lg(),Ml(294,`th`,16),mN(295,`Descrição`),lg()(),Ml(296,`tr`,17)(297,`td`,18)(298,`div`,19)(299,`span`,20),mN(300,` p-align-center`),ql(301,`br`),lg()()(),Ml(302,`td`,21)(303,`code`,22),mN(304,`boolean`),lg()(),Ml(305,`td`,23)(306,`p`)(307,`code`),mN(308,`true`),lg()()(),Ml(309,`td`,24)(310,`em`)(311,`strong`),mN(312,`(opcional)`),lg()(),Ml(313,`p`),mN(314,`Define o alinhamento dos `),Ml(315,`em`),mN(316,`steps`),lg(),mN(317,` e `),Ml(318,`em`),mN(319,`labels`),lg(),mN(320,` no `),Ml(321,`em`),mN(322,`stepper`),lg(),mN(323,`, dependendo da orientação.`),lg(),Ml(324,`ul`)(325,`li`),mN(326,`Quando `),Ml(327,`code`),mN(328,`true`),lg(),mN(329,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),lg(),Ml(330,`li`),mN(331,`Quando `),Ml(332,`code`),mN(333,`false`),lg(),mN(334,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),lg()()()(),Ml(335,`tr`,17)(336,`td`,18)(337,`div`,19)(338,`span`,20),mN(339,` p-disable-click`),ql(340,`br`),lg()()(),Ml(341,`td`,21)(342,`code`,22),mN(343,`boolean`),lg()(),Ml(344,`td`,23)(345,`p`)(346,`code`),mN(347,`false`),lg()()(),Ml(348,`td`,24)(349,`em`)(350,`strong`),mN(351,`(opcional)`),lg()(),Ml(352,`p`),mN(353,`Desabilita o clique nos steps.`),lg()()(),Ml(354,`tr`,17)(355,`td`,18)(356,`div`,19)(357,`span`,20),mN(358,` p-step-icon-active`),ql(359,`br`),lg()()(),Ml(360,`td`,21)(361,`code`,25),mN(362,`string `),lg(),Ml(363,`code`,26),mN(364,` TemplateRef<void>`),lg()(),Ml(365,`td`,23)(366,`p`)(367,`code`),mN(368,`po-icon-edit`),lg()()(),Ml(369,`td`,24)(370,`em`)(371,`strong`),mN(372,`(opcional)`),lg()(),Ml(373,`p`),mN(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Ml(375,`a`,27),mN(376,`Biblioteca de ícones`),lg(),mN(377,`.`),lg(),Ml(378,`pre`)(379,`code`),mN(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),lg()(),Ml(381,`p`),mN(382,`Para customizar o ícone através do `),Ml(383,`code`),mN(384,`TemplateRef`),lg(),mN(385,`, veja a documentação da propriedade `),Ml(386,`code`),mN(387,`p-step-icon-done`),lg(),mN(388,`.`),lg(),Ml(389,`blockquote`)(390,`p`),mN(391,`Deve-se usar `),Ml(392,`code`),mN(393,`font-size: inherit`),lg(),mN(394,` para ajustar ícones que não se ajustam automaticamente.`),lg()()()(),Ml(395,`tr`,17)(396,`td`,18)(397,`div`,19)(398,`span`,20),mN(399,` p-step-icon-done`),ql(400,`br`),lg()()(),Ml(401,`td`,21)(402,`code`,25),mN(403,`string `),lg(),Ml(404,`code`,26),mN(405,` TemplateRef<void>`),lg()(),Ml(406,`td`,23)(407,`p`)(408,`code`),mN(409,`po-icon-ok`),lg()()(),Ml(410,`td`,24)(411,`em`)(412,`strong`),mN(413,`(opcional)`),lg()(),Ml(414,`p`),mN(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Ml(416,`a`,27),mN(417,`Biblioteca de ícones`),lg()(),Ml(418,`pre`)(419,`code`),mN(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),lg()(),Ml(421,`p`),mN(422,`Outra opção seria a customização do ícone através do `),Ml(423,`code`),mN(424,`TemplateRef`),lg(),mN(425,`, conforme exemplo abaixo:`),lg(),Ml(426,`pre`)(427,`code`),mN(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),lg()(),Ml(429,`blockquote`)(430,`p`),mN(431,`Deve-se usar `),Ml(432,`code`),mN(433,`font-size: inherit`),lg(),mN(434,` para ajustar ícones que não se ajustam automaticamente.`),lg()()()(),Ml(435,`tr`,17)(436,`td`,18)(437,`div`,28)(438,`span`,29),mN(439,` (p-change-step)`),ql(440,`br`),lg()()(),Ml(441,`td`,21)(442,`code`,30),mN(443,`EventEmitter`),lg()(),Ml(444,`td`,23),mN(445,`-`),lg(),Ml(446,`td`,24)(447,`p`),mN(448,`Ação que será executada quando o usuário mudar o passo do `),Ml(449,`code`),mN(450,`po-stepper`),lg(),mN(451,`.`),lg()()(),Ml(452,`tr`,17)(453,`td`,18)(454,`div`,19)(455,`span`,20),mN(456,` p-orientation`),ql(457,`br`),lg()()(),Ml(458,`td`,21)(459,`code`,31),mN(460,`PoStepperOrientation`),lg()(),Ml(461,`td`,23)(462,`p`)(463,`code`),mN(464,`PoStepperOrientation.Horizontal`),lg()()(),Ml(465,`td`,24)(466,`em`)(467,`strong`),mN(468,`(opcional)`),lg()(),Ml(469,`p`),mN(470,`Define a orientação de exibição do `),Ml(471,`code`),mN(472,`po-stepper`),lg(),mN(473,`.`),lg(),Ml(474,`blockquote`)(475,`p`),mN(476,`Veja os valores válidos no `),Ml(477,`em`),mN(478,`enum`),lg(),Ml(479,`a`,32),mN(480,`PoStepperOrientation`),lg(),mN(481,`.`),lg()()()(),Ml(482,`tr`,17)(483,`td`,18)(484,`div`,19)(485,`span`,20),mN(486,` p-sequential`),ql(487,`br`),lg()()(),Ml(488,`td`,21)(489,`code`,22),mN(490,`boolean`),lg()(),Ml(491,`td`,23)(492,`p`)(493,`code`),mN(494,`true`),lg()()(),Ml(495,`td`,24)(496,`em`)(497,`strong`),mN(498,`(opcional)`),lg()(),Ml(499,`p`),mN(500,`Define se o `),Ml(501,`code`),mN(502,`po-stepper`),lg(),mN(503,` será sequencial ou aleatório.`),lg(),Ml(504,`blockquote`)(505,`p`),mN(506,`Ao utilizar o componente `),Ml(507,`a`,6)(508,`strong`),mN(509,`po-step`),lg()(),mN(510,`, o valor desta propriedade sempre será verdadeiro.`),lg()()()(),Ml(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),mN(515,` p-step`),ql(516,`br`),lg()()(),Ml(517,`td`,21)(518,`code`,33),mN(519,`number`),lg()(),Ml(520,`td`,23)(521,`p`)(522,`code`),mN(523,`1`),lg()()(),Ml(524,`td`,24)(525,`em`)(526,`strong`),mN(527,`(opcional)`),lg()(),Ml(528,`p`),mN(529,`Controla o passo atual do `),Ml(530,`code`),mN(531,`po-stepper`),lg(),mN(532,`.`),lg(),Ml(533,`blockquote`)(534,`p`),mN(535,`Ao utilizar esta propriedade e também utilizar o componente `),Ml(536,`a`,6)(537,`strong`),mN(538,`po-step`),lg()(),mN(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Ml(540,`a`,6)(541,`strong`),mN(542,`po-step`),lg()(),mN(543,`.`),lg()()()(),Ml(544,`tr`,17)(545,`td`,18)(546,`div`,19)(547,`span`,20),mN(548,` p-step-icons`),ql(549,`br`),lg()()(),Ml(550,`td`,21)(551,`code`,22),mN(552,`boolean`),lg()(),Ml(553,`td`,23)(554,`p`)(555,`code`),mN(556,`false`),lg()()(),Ml(557,`td`,24)(558,`em`)(559,`strong`),mN(560,`(opcional)`),lg()(),Ml(561,`p`),ql(562,`a`,34),lg(),Ml(563,`p`),mN(564,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),Ml(565,`em`),mN(566,`steps`),lg(),mN(567,`.`),lg()()(),Ml(568,`tr`,17)(569,`td`,18)(570,`div`,19)(571,`span`,20),mN(572,` p-step-size`),ql(573,`br`),lg()()(),Ml(574,`td`,21)(575,`code`,33),mN(576,`number`),lg()(),Ml(577,`td`,23)(578,`p`)(579,`code`),mN(580,`24`),lg()()(),Ml(581,`td`,24)(582,`em`)(583,`strong`),mN(584,`(opcional)`),lg()(),Ml(585,`p`),mN(586,`Define o tamanho dos `),Ml(587,`em`),mN(588,`steps`),lg(),mN(589,` em `),Ml(590,`em`),mN(591,`pixels`),lg(),mN(592,`, possibilitando um maior destaque.`),lg(),Ml(593,`p`),mN(594,`O valor informado deve ser entre `),Ml(595,`code`),mN(596,`24`),lg(),mN(597,` e `),Ml(598,`code`),mN(599,`64`),lg(),mN(600,`.`),lg(),Ml(601,`blockquote`)(602,`p`),mN(603,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),Ml(604,`em`),mN(605,`default`),lg(),mN(606,`.`),lg()()()(),Ml(607,`tr`,17)(608,`td`,18)(609,`div`,19)(610,`span`,20),mN(611,` p-steps`),ql(612,`br`),lg()()(),Ml(613,`td`,21)(614,`code`,35),mN(615,`Array<PoStepperItem>`),lg()(),Ml(616,`td`,23),mN(617,`-`),lg(),Ml(618,`td`,24)(619,`em`)(620,`strong`),mN(621,`(opcional)`),lg()(),Ml(622,`p`),mN(623,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),lg(),Ml(624,`blockquote`)(625,`p`),mN(626,`Ao utilizar esta propriedade e também utilizar o componente `),Ml(627,`a`,6)(628,`strong`),mN(629,`po-step`),lg()(),mN(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Ml(631,`a`,6)(632,`strong`),mN(633,`po-step`),lg()(),mN(634,`.`),lg()()()()(),Ml(635,`h3`,13),mN(636,`Métodos`),lg(),Ml(637,`table`,36)(638,`tr`,17)(639,`th`,37)(640,`div`,19)(641,`h4`)(642,`span`,20),mN(643,` active `),lg()()()()(),Ml(644,`tr`,24)(645,`td`,24)(646,`p`),mN(647,`Altera o status do `),Ml(648,`em`),mN(649,`step`),lg(),mN(650,` para ativo.`),lg(),Ml(651,`blockquote`)(652,`p`),mN(653,`Este método é valido apenas para as implementações que utilizam o componente `),Ml(654,`a`,6)(655,`strong`),mN(656,`po-step`),lg()(),mN(657,`.`),lg()()()()(),Ml(658,`h5`)(659,`b`),mN(660,`Parâmetros`),lg()(),Ml(661,`table`,14)(662,`tr`,15)(663,`th`,16),mN(664,`Nome`),lg(),Ml(665,`th`,16),mN(666,`Tipo`),lg(),Ml(667,`th`,16),mN(668,`Descrição`),lg()(),Ml(669,`tr`,17)(670,`td`,18),mN(671,` index`),lg(),Ml(672,`td`,21)(673,`code`,38),mN(674,` number `),lg()(),Ml(675,`td`,24)(676,`p`),mN(677,`Índice do `),Ml(678,`code`),mN(679,`po-step`),lg(),mN(680,` que se deseja ativar.`),lg()()()(),ql(681,`br`),Ml(682,`table`,36)(683,`tr`,17)(684,`th`,37)(685,`div`,19)(686,`h4`)(687,`span`,20),mN(688,` first `),lg()()()()(),Ml(689,`tr`,24)(690,`td`,24)(691,`p`),mN(692,`Ativa o primeiro `),Ml(693,`em`),mN(694,`step`),lg(),mN(695,`.`),lg(),Ml(696,`blockquote`)(697,`p`),mN(698,`Este método é valido apenas para as implementações que utilizam o componente `),Ml(699,`a`,6)(700,`strong`),mN(701,`po-step`),lg()(),mN(702,`.`),lg()()()()(),ql(703,`br`),Ml(704,`table`,36)(705,`tr`,17)(706,`th`,37)(707,`div`,19)(708,`h4`)(709,`span`,20),mN(710,` next `),lg()()()()(),Ml(711,`tr`,24)(712,`td`,24)(713,`p`),mN(714,`Ativa o próximo `),Ml(715,`em`),mN(716,`step`),lg(),mN(717,`.`),lg(),Ml(718,`blockquote`)(719,`p`),mN(720,`Este método é valido apenas para as implementações que utilizam o componente `),Ml(721,`a`,6)(722,`strong`),mN(723,`po-step`),lg()(),mN(724,`.`),lg()()()()(),ql(725,`br`),Ml(726,`table`,36)(727,`tr`,17)(728,`th`,37)(729,`div`,19)(730,`h4`)(731,`span`,20),mN(732,` previous `),lg()()()()(),Ml(733,`tr`,24)(734,`td`,24)(735,`p`),mN(736,`Ativa o `),Ml(737,`em`),mN(738,`step`),lg(),mN(739,` anterior.`),lg(),Ml(740,`blockquote`)(741,`p`),mN(742,`Este método é valido apenas para as implementações que utilizam o componente `),Ml(743,`a`,6)(744,`strong`),mN(745,`po-step`),lg()(),mN(746,`.`),lg()()()()(),ql(747,`br`),Ml(748,`h3`),mN(749,`Interfaces`),lg(),Ml(750,`h4`,39)(751,`code`,5),mN(752,`PoStepperItem`),lg()(),Ml(753,`div`,2)(754,`p`),mN(755,`Interface para definição dos `),Ml(756,`em`),mN(757,`steps`),lg(),mN(758,` do componente `),Ml(759,`code`),mN(760,`po-stepper`),lg(),mN(761,` quando utilizada a propriedade `),Ml(762,`code`),mN(763,`p-steps`),lg(),mN(764,`.`),lg()(),Ml(765,`h4`,13),mN(766,`Propriedades`),lg(),Ml(767,`table`,14)(768,`tr`,15)(769,`th`,16),mN(770,`Nome`),lg(),Ml(771,`th`,16),mN(772,`Tipo`),lg(),Ml(773,`th`,16),mN(774,`Descrição`),lg()(),Ml(775,`tr`,17)(776,`td`,18)(777,`div`,19)(778,`span`,20),mN(779,` iconActive`),ql(780,`br`),lg()()(),Ml(781,`td`,21)(782,`code`,25),mN(783,`string `),lg(),Ml(784,`code`,26),mN(785,` TemplateRef<void>`),lg()(),Ml(786,`td`,24)(787,`em`)(788,`strong`),mN(789,`(opcional)`),lg()(),Ml(790,`p`),mN(791,`Define o ícone do `),Ml(792,`em`),mN(793,`step`),lg(),mN(794,` ativo.`),lg()()(),Ml(795,`tr`,17)(796,`td`,18)(797,`div`,19)(798,`span`,20),mN(799,` iconDefault`),ql(800,`br`),lg()()(),Ml(801,`td`,21)(802,`code`,25),mN(803,`string `),lg(),Ml(804,`code`,26),mN(805,` TemplateRef<void>`),lg()(),Ml(806,`td`,24)(807,`em`)(808,`strong`),mN(809,`(opcional)`),lg()(),Ml(810,`p`),mN(811,`Define o ícone do `),Ml(812,`em`),mN(813,`step`),lg(),mN(814,` default.`),lg()()(),Ml(815,`tr`,17)(816,`td`,18)(817,`div`,19)(818,`span`,20),mN(819,` iconDone`),ql(820,`br`),lg()()(),Ml(821,`td`,21)(822,`code`,25),mN(823,`string `),lg(),Ml(824,`code`,26),mN(825,` TemplateRef<void>`),lg()(),Ml(826,`td`,24)(827,`em`)(828,`strong`),mN(829,`(opcional)`),lg()(),Ml(830,`p`),mN(831,`Define o ícone do `),Ml(832,`em`),mN(833,`step`),lg(),mN(834,` concluído.`),lg()()(),Ml(835,`tr`,17)(836,`td`,18)(837,`div`,19)(838,`span`,20),mN(839,` id`),ql(840,`br`),lg()()(),Ml(841,`td`,21)(842,`code`,25),mN(843,`string`),lg()(),Ml(844,`td`,24)(845,`em`)(846,`strong`),mN(847,`(opcional)`),lg()(),Ml(848,`p`),mN(849,`Identificador único do step.`),lg()()(),Ml(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),mN(854,` label`),ql(855,`br`),lg()()(),Ml(856,`td`,21)(857,`code`,25),mN(858,`string`),lg()(),Ml(859,`td`,24)(860,`em`)(861,`strong`),mN(862,`(opcional)`),lg()(),Ml(863,`p`),mN(864,`Texto do item do stepper.`),lg()()(),Ml(865,`tr`,17)(866,`td`,18)(867,`div`,19)(868,`span`,20),mN(869,` status`),ql(870,`br`),lg()()(),Ml(871,`td`,21)(872,`code`,40),mN(873,`PoStepperStatus`),lg()(),Ml(874,`td`,24)(875,`em`)(876,`strong`),mN(877,`(opcional)`),lg()(),Ml(878,`p`),mN(879,`Define o estado de exibição do `),Ml(880,`em`),mN(881,`step`),lg(),mN(882,`.`),lg()()()(),Ml(883,`h3`),mN(884,`Enums`),lg(),Ml(885,`h4`,4)(886,`code`,5),mN(887,`PoStepperOrientation`),lg()(),Ml(888,`div`,2)(889,`p`),ql(890,`a`,41),lg(),Ml(891,`p`)(892,`em`),mN(893,`Enums`),lg(),mN(894,` para definição da orientação do `),Ml(895,`code`),mN(896,`po-stepper`),lg(),mN(897,`.`),lg()(),Ml(898,`h4`,13),mN(899,`Propriedades`),lg(),Ml(900,`table`,14)(901,`tr`,15)(902,`th`,16),mN(903,`Nome`),lg(),Ml(904,`th`,16),mN(905,`Descrição`),lg()(),Ml(906,`tr`,17)(907,`td`,18)(908,`div`,19)(909,`span`,20),mN(910,` Horizontal`),ql(911,`br`),lg()()(),Ml(912,`td`,24)(913,`p`),mN(914,`Define a exibição do componente na horizontal.`),lg()()(),Ml(915,`tr`,17)(916,`td`,18)(917,`div`,19)(918,`span`,20),mN(919,` Vertical`),ql(920,`br`),lg()()(),Ml(921,`td`,24)(922,`p`),mN(923,`Define a exibição do componente na vertical.`),lg()()()(),Ml(924,`h4`,4)(925,`code`,5),mN(926,`PoStepperStatus`),lg()(),Ml(927,`div`,2)(928,`p`),ql(929,`a`,42),lg(),Ml(930,`p`)(931,`em`),mN(932,`Enums`),lg(),mN(933,` para os status do `),Ml(934,`code`),mN(935,`po-stepper`),lg(),mN(936,` quando utilizada a propriedade `),Ml(937,`code`),mN(938,`p-steps`),lg(),mN(939,`.`),lg()(),Ml(940,`h4`,13),mN(941,`Propriedades`),lg(),Ml(942,`table`,14)(943,`tr`,15)(944,`th`,16),mN(945,`Nome`),lg(),Ml(946,`th`,16),mN(947,`Descrição`),lg()(),Ml(948,`tr`,17)(949,`td`,18)(950,`div`,19)(951,`span`,20),mN(952,` Active`),ql(953,`br`),lg()()(),Ml(954,`td`,24)(955,`p`),mN(956,`Define o estado do `),Ml(957,`em`),mN(958,`step`),lg(),mN(959,` como ativo.`),lg()()(),Ml(960,`tr`,17)(961,`td`,18)(962,`div`,19)(963,`span`,20),mN(964,` Default`),ql(965,`br`),lg()()(),Ml(966,`td`,24)(967,`p`),mN(968,`Define o estado do `),Ml(969,`em`),mN(970,`step`),lg(),mN(971,` como padrão.`),lg()()(),Ml(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),mN(976,` Disabled`),ql(977,`br`),lg()()(),Ml(978,`td`,24)(979,`p`),mN(980,`Define o estado do `),Ml(981,`em`),mN(982,`step`),lg(),mN(983,` como desabilitado.`),lg()()(),Ml(984,`tr`,17)(985,`td`,18)(986,`div`,19)(987,`span`,20),mN(988,` Done`),ql(989,`br`),lg()()(),Ml(990,`td`,24)(991,`p`),mN(992,`Define o estado do `),Ml(993,`em`),mN(994,`step`),lg(),mN(995,` como concluído.`),lg()()(),Ml(996,`tr`,17)(997,`td`,18)(998,`div`,19)(999,`span`,20),mN(1e3,` Error`),ql(1001,`br`),lg()()(),Ml(1002,`td`,24)(1003,`p`),mN(1004,`Define o estado do `),Ml(1005,`em`),mN(1006,`step`),lg(),mN(1007,` com erro.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var bt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Stepper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-stepper-doc`),lg(),Ml(4,`po-tab`,3),ht$1(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-stepper-basic-view`)(6,`sample-po-stepper-labs-view`)(7,`sample-po-stepper-sales-view`)(8,`sample-po-stepper-active-view`)(9,`sample-po-stepper-steps-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ve,Ae,Le,qe,Oe,Re],encapsulation:2,changeDetection:1})}return a})()}];var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(bt),NL]})}return a})();var En=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,je]})}return a})();export{En as DocPoStepperModule};