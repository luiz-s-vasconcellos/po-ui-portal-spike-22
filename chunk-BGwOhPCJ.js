import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,ae as Be$1,c as r$1,x,dB as ze$1,bi as cy,dC as Li,r as rb,w,dD as Mt,d8 as Vme,d9 as gNe,H as Sl,M as Wl,O as sg,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,J as Jx,a1 as ht$1,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aY as X9,aZ as vk,b0 as Qt,aI as dc,b1 as mv,b2 as eme,c9 as Qhe,aB as Ex,aQ as px,aR as hx,bd as xx,aS as gx,aF as K9,aG as Dk,bD as Ade,b4 as F3,aK as sS,b6 as Yo,ba as bNe,aq as ux,aM as Ew,aN as JA,aD as Xy,aE as Qy,at as dx,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,cz as Ez,aJ as Ghe,b5 as jhe,a3 as pNe,aA as Tx,A as vw,aT as tN}from'./main-UTR4MKMU.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic"]],standalone:false,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(r,i){r&1&&(Sl(0,"po-stepper",0),Wl(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),sg()),r&2&&tw("p-align-center",false);},dependencies:[Vme,gNe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Stepper Basic"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-stepper-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ye,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Fe],encapsulation:2})}return a})();function Ge(a,j){if(a&1&&(Sl(0,"po-step",3)(1,"h2"),Jx(2),sg()()),a&2){let m=j.$implicit;tw("p-label",m.label)("p-icon-default",m.iconDefault),Vp(2),fg("Step Content ",m.label);}}var ke=(()=>{class a{changeDetector=f(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:true},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: an an-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: an an-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: an an-question",gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore();}addItem(m){this.steps=[...this.steps,r$1({},m)],this.stepItem={},this.changeDetector.detectChanges();}changeStep(m){this.event=m,this.changeDetector.detectChanges();}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=false;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs"]],standalone:false,decls:17,vars:13,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"po-container")(1,"po-stepper",2),ht$1("p-change-step",function(){return i.changeStep("change")}),px(2,Ge,3,3,"po-step",3,hx),sg(),Wl(4,"po-divider")(5,"po-info",4),Sl(6,"form",null,0),Wl(8,"po-dynamic-form",5),Sl(9,"div",6)(10,"po-button",7),ht$1("p-click",function(){Xy(s);let o=xx(7);return i.addItem(i.stepItem),Qy(o.reset())}),sg()()(),Sl(11,"form",null,1),Wl(13,"po-dynamic-form",5)(14,"po-divider"),Sl(15,"div",6)(16,"po-button",8),ht$1("p-click",function(){Xy(s);let o=xx(7),Ue=xx(12);return i.restore(),Ue.reset(),Qy(o.reset())}),sg()()()();}if(r&2){let s=xx(7);Vp(),tw("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),Vp(),gx(i.steps),Vp(3),tw("p-value",i.event),Vp(3),tw("p-fields",i.stepItemFields)("p-value",i.stepItem),Vp(2),tw("p-disabled",s.invalid),Vp(3),tw("p-fields",i.propertiesFields)("p-value",i.properties);}},dependencies:[J9,X9,vk,Qt,dc,mv,eme,Qhe,Vme,gNe],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Stepper Labs"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
  stepItem: PoStepperItem = <any>{};
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-stepper-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ke],encapsulation:2})}return a})();var $e=["addressForm"],et=["paymentForm"],tt=["personalForm"],nt=["successData"];function it(a,j){a&1&&Wl(0,"po-loading-overlay",18);}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=false;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress();}canActiveFinishStep(m){return x(m.form.valid).pipe(ze$1(()=>this.isLoadingPayment=true),cy(2e3),Li(()=>this.isLoadingPayment=false))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first();}getAddress(){return {city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales"]],viewQuery:function(r,i){if(r&1&&ql($e,7)(et,7)(tt,7)(nt,7),r&2){let s;lo(s=uo())&&(i.addressForm=s.first),lo(s=uo())&&(i.paymentForm=s.first),lo(s=uo())&&(i.personalForm=s.first),lo(s=uo())&&(i.successData=s.first);}},standalone:false,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[1,"sample-stepper-position-relative"],["p-text","Loading"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),Wl(4,"img",11),sg(),Sl(5,"div",12)(6,"p",13),Jx(7,"Nike XYZ - Red/Gold Stripes"),sg(),Sl(8,"p",14),Jx(9,"Brand: Nike | Style: Modern | Men's"),sg(),Sl(10,"p",15),Jx(11,"Width: 12.5 - COD: 001254648412319"),sg(),Wl(12,"po-divider"),Sl(13,"p",15),Jx(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),sg()()()(),Sl(15,"po-widget",16)(16,"p",15),Jx(17,"$2.500,00"),sg(),Sl(18,"p",15),Jx(19,"$500,00(-)"),sg(),Sl(20,"p",15),Jx(21,"$160,00(+)"),sg(),Wl(22,"po-divider"),Sl(23,"p",14),Jx(24,"Total: $2.160,00"),sg()()(),Wl(25,"po-divider"),Sl(26,"div",17),ux(27,it,1,0,"po-loading-overlay",18),Sl(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),ht$1("p-primary-action",function(){Xy(s);let o=xx(29);return Qy(o.next())}),Sl(32,"form",null,1)(34,"div",8)(35,"po-input",22),Ew("ngModelChange",function(o){return Xy(s),tN(i.name,o)||(i.name=o),Qy(o)}),sg(),JA(),Sl(36,"po-datepicker",23),Ew("ngModelChange",function(o){return Xy(s),tN(i.birthday,o)||(i.birthday=o),Qy(o)}),sg(),JA(),Sl(37,"po-input",24),Ew("ngModelChange",function(o){return Xy(s),tN(i.document,o)||(i.document=o),Qy(o)}),sg(),JA(),sg()()()(),Sl(38,"po-step",25)(39,"po-widget",26),ht$1("p-primary-action",function(){Xy(s);let o=xx(29);return Qy(o.previous())})("p-secondary-action",function(){Xy(s);let o=xx(29);return Qy(o.next())}),Sl(40,"form",null,2)(42,"div",8)(43,"po-input",27),Ew("ngModelChange",function(o){return Xy(s),tN(i.address.street,o)||(i.address.street=o),Qy(o)}),sg(),JA(),Sl(44,"po-input",28),Ew("ngModelChange",function(o){return Xy(s),tN(i.address.number,o)||(i.address.number=o),Qy(o)}),sg(),JA(),Sl(45,"po-input",29),Ew("ngModelChange",function(o){return Xy(s),tN(i.address.city,o)||(i.address.city=o),Qy(o)}),sg(),JA(),sg(),Sl(46,"div",8)(47,"po-input",30),Ew("ngModelChange",function(o){return Xy(s),tN(i.address.code,o)||(i.address.code=o),Qy(o)}),sg(),JA(),Sl(48,"po-input",31),Ew("ngModelChange",function(o){return Xy(s),tN(i.address.country,o)||(i.address.country=o),Qy(o)}),sg(),JA(),Sl(49,"po-input",32),Ew("ngModelChange",function(o){return Xy(s),tN(i.address.reference,o)||(i.address.reference=o),Qy(o)}),sg(),JA(),sg()()()(),Sl(50,"po-step",33)(51,"po-widget",26),ht$1("p-primary-action",function(){Xy(s);let o=xx(29);return Qy(o.previous())})("p-secondary-action",function(){Xy(s);let o=xx(29);return Qy(o.next())}),Sl(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),Ew("ngModelChange",function(o){return Xy(s),tN(i.cardName,o)||(i.cardName=o),Qy(o)}),sg(),JA(),Sl(57,"po-input",35,5),Ew("ngModelChange",function(o){return Xy(s),tN(i.cardCode,o)||(i.cardCode=o),Qy(o)}),sg(),JA(),Sl(59,"po-input",36,6),Ew("ngModelChange",function(o){return Xy(s),tN(i.cardValid,o)||(i.cardValid=o),Qy(o)}),sg(),JA(),sg()()()(),Sl(61,"po-step",37)(62,"po-widget",26),ht$1("p-primary-action",function(){Xy(s);let o=xx(29);return Qy(o.previous())})("p-secondary-action",function(){Xy(s);let o=xx(29);return Qy(i.onConfirmStep(o))}),Sl(63,"div",8),Wl(64,"po-info",38)(65,"po-info",39),sg(),Sl(66,"div",8),Wl(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),sg(),Wl(71,"po-divider"),Sl(72,"div",8),Wl(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),sg()()()()(),Sl(78,"po-modal",49,7)(80,"div",8),Wl(81,"img",50),Sl(82,"p",51),Jx(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),sg()()();}if(r&2){let s=xx(33),c=xx(41),o=xx(53);Vp(27),dx(i.isLoadingPayment?27:-1),Vp(3),tw("p-can-active-next-step",i.canActiveNextStep.bind(i,s)),Vp(),tw("p-primary-label",i.nextLabelWidget),Vp(4),Dw("ngModel",i.name),t0(),Vp(),Dw("ngModel",i.birthday),t0(),Vp(),Dw("ngModel",i.document),t0(),Vp(),tw("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),Vp(),tw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Vp(4),Dw("ngModel",i.address.street),t0(),Vp(),Dw("ngModel",i.address.number),t0(),Vp(),Dw("ngModel",i.address.city),t0(),Vp(2),Dw("ngModel",i.address.code),t0(),Vp(),Dw("ngModel",i.address.country),t0(),Vp(),Dw("ngModel",i.address.reference),t0(),Vp(),tw("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),Vp(),tw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Vp(4),Dw("ngModel",i.cardName),t0(),Vp(2),Dw("ngModel",i.cardCode),t0(),Vp(2),Dw("ngModel",i.cardValid),t0(),Vp(3),tw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),Vp(2),tw("p-value",i.name),Vp(),tw("p-value",i.document),Vp(2),tw("p-value",i.address.street),Vp(),tw("p-value",i.address.number),Vp(),tw("p-value",i.address.city),Vp(),tw("p-value",i.address.country);}},dependencies:[J9,K9,X9,Dk,vk,mv,Ade,F3,Qhe,sS,Yo,Vme,gNe,bNe],styles:[".sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}"],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Stepper - Sales"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-stepper-sales/sample-po-stepper-sales.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-stepper-position-relative {
  position: relative;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-stepper-sales"),sg(),Wl(29,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,at,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,We],encapsulation:2})}return a})();var Be=(()=>{class a{http=f(rb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(r){return new(r||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var rt=["basicInformation"],lt=["academicFormation"],st=["professionalExperiences"];function mt(a,j){if(a&1&&(Sl(0,"div",23)(1,"po-widget",24)(2,"p"),Jx(3),sg()()()),a&2){let m=j.$implicit;Vp(),tw("p-title",m.title),Vp(2),vw(m.description);}}function dt(a,j){if(a&1&&(Sl(0,"div",4),Wl(1,"po-divider",23),px(2,mt,4,2,"div",23,hx),sg()),a&2){let m=Tx();Vp(2),gx(m.professionalExperiences);}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep());}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates();}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}activeStep(){this.stepper.active(2);}onChangeState(){this.getCitiesByState(this.basicInformation.state);}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r];}getBasicInformations(){return {name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return {name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return {name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return [{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state);});}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active"]],viewQuery:function(r,i){if(r&1&&ql(rt,7)(lt,7)(st,7)(gNe,5),r&2){let s;lo(s=uo())&&(i.basicInformationForm=s.first),lo(s=uo())&&(i.academicFormationForm=s.first),lo(s=uo())&&(i.professionalExperiencesForm=s.first),lo(s=uo())&&(i.stepper=s.first);}},standalone:false,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],[1,"po-md-12"],[1,"po-md-12",3,"p-title"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),Ew("ngModelChange",function(o){return Xy(s),tN(i.basicInformation.name,o)||(i.basicInformation.name=o),Qy(o)}),sg(),JA(),Sl(7,"po-email",6),Ew("ngModelChange",function(o){return Xy(s),tN(i.basicInformation.email,o)||(i.basicInformation.email=o),Qy(o)}),sg(),JA(),Sl(8,"po-input",7),Ew("ngModelChange",function(o){return Xy(s),tN(i.basicInformation.phone,o)||(i.basicInformation.phone=o),Qy(o)}),sg(),JA(),Sl(9,"po-select",8),Ew("ngModelChange",function(o){return Xy(s),tN(i.basicInformation.state,o)||(i.basicInformation.state=o),Qy(o)}),ht$1("p-change",function(){return i.onChangeState()}),sg(),JA(),Sl(10,"po-select",9),Ew("ngModelChange",function(o){return Xy(s),tN(i.basicInformation.city,o)||(i.basicInformation.city=o),Qy(o)}),sg(),JA(),sg()()(),Sl(11,"po-step",10)(12,"form",null,1)(14,"div",4),Wl(15,"po-divider",11),Sl(16,"po-input",12),Ew("ngModelChange",function(o){return Xy(s),tN(i.highSchool.name,o)||(i.highSchool.name=o),Qy(o)}),sg(),JA(),Sl(17,"po-input",13),Ew("ngModelChange",function(o){return Xy(s),tN(i.highSchool.city,o)||(i.highSchool.city=o),Qy(o)}),sg(),JA(),Sl(18,"po-input",14),Ew("ngModelChange",function(o){return Xy(s),tN(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),Qy(o)}),sg(),JA(),sg(),Sl(19,"div",4),Wl(20,"po-divider",15),Sl(21,"po-input",16),Ew("ngModelChange",function(o){return Xy(s),tN(i.universityEducation.name,o)||(i.universityEducation.name=o),Qy(o)}),sg(),JA(),Sl(22,"po-input",17),Ew("ngModelChange",function(o){return Xy(s),tN(i.universityEducation.city,o)||(i.universityEducation.city=o),Qy(o)}),sg(),JA(),Sl(23,"po-input",18),Ew("ngModelChange",function(o){return Xy(s),tN(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),Qy(o)}),sg(),JA(),sg()()(),Sl(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),Ew("ngModelChange",function(o){return Xy(s),tN(i.experienceTitle,o)||(i.experienceTitle=o),Qy(o)}),sg(),JA(),Sl(29,"po-textarea",21),Ew("ngModelChange",function(o){return Xy(s),tN(i.experienceDescripton,o)||(i.experienceDescripton=o),Qy(o)}),sg(),JA(),Sl(30,"po-button",22),ht$1("p-click",function(){Xy(s);let o=xx(26);return i.addProfessionalExperiences(o),Qy(o.reset())}),sg()()(),ux(31,dt,4,0,"div",4),sg()()();}r&2&&(Vp(6),Dw("ngModel",i.basicInformation.name),t0(),Vp(),Dw("ngModel",i.basicInformation.email),t0(),Vp(),Dw("ngModel",i.basicInformation.phone),t0(),Vp(),Dw("ngModel",i.basicInformation.state),tw("p-options",i.stateOptions),t0(),Vp(),Dw("ngModel",i.basicInformation.city),tw("p-options",i.cityOptions),t0(),Vp(6),Dw("ngModel",i.highSchool.name),t0(),Vp(),Dw("ngModel",i.highSchool.city),t0(),Vp(),Dw("ngModel",i.highSchool.conclusionYear),t0(),Vp(3),Dw("ngModel",i.universityEducation.name),t0(),Vp(),Dw("ngModel",i.universityEducation.city),t0(),Vp(),Dw("ngModel",i.universityEducation.conclusionYear),t0(),Vp(5),Dw("ngModel",i.experienceTitle),t0(),Vp(),Dw("ngModel",i.experienceDescripton),t0(),Vp(2),dx(i.professionalExperiences?31:-1));},dependencies:[J9,K9,X9,Dk,vk,Qt,dc,mv,Ez,F3,Ghe,jhe,Vme,gNe,bNe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Stepper - Active"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-stepper-active"),sg(),Wl(27,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ut,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ne],encapsulation:2})}return a})();var ze=(()=>{class a{changeDetector=f(Be$1);currentStep;stepsWithStatus=[{label:"Step 1",status:Mt.Done},{label:"Step 2",status:Mt.Active},{label:"Step 3",status:Mt.Default},{label:"Step 4",status:Mt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges();}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===Mt.Active&&(r.status=Mt.Done);}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===Mt.Active&&(r.status=Mt.Default);}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===Mt.Disabled&&(this.stepsWithStatus[this.currentStep].status=Mt.Default);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps"]],standalone:false,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(r,i){r&1&&(Sl(0,"po-stepper",0),ht$1("p-change-step",function(c){return i.onChangeStatus(c)}),sg()),r&2&&tw("p-align-center",false)("p-sequential",false)("p-step",i.currentStep)("p-steps",i.stepsWithStatus);},dependencies:[gNe],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Stepper - Steps"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-stepper-steps"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ht,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ze],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-doc"]],standalone:false,decls:1008,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["href","https://angular.io/api/core/ViewChild"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoStepperModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-stepper"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoStepperComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O "),Sl(15,"code"),Jx(16,"po-stepper"),sg(),Jx(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),sg(),Sl(18,"p"),Jx(19,"Existem duas formas de utiliza\xE7\xE3o:"),sg(),Sl(20,"p"),Jx(21,"1 - Usando o componente "),Sl(22,"a",6)(23,"strong"),Jx(24,"po-step"),sg()(),Jx(25," para renderizar e descrever os passos."),sg(),Sl(26,"p"),Jx(27,"2 - Atrav\xE9s da propriedade "),Sl(28,"code"),Jx(29,"p-steps"),sg(),Jx(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Sl(31,"em"),Jx(32,"step"),sg(),Jx(33," ativo."),sg(),Sl(34,"p"),Jx(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Sl(36,"em"),Jx(37,"steps"),sg(),Jx(38,"."),sg(),Sl(39,"p"),Jx(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Sl(41,"em"),Jx(42,"steps"),sg(),Jx(43," atrav\xE9s do teclado utilizando a tecla "),Sl(44,"em"),Jx(45,"tab"),sg(),Jx(46," e, para ativar o "),Sl(47,"em"),Jx(48,"step"),sg(),Jx(49,` em foco basta
pressionar a tecla `),Sl(50,"em"),Jx(51,"enter"),sg(),Jx(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),Sl(53,"em"),Jx(54,"steps"),sg(),Jx(55,` atrav\xE9s da
propriedade `),Sl(56,"a",7)(57,"code"),Jx(58,"p-step-icons"),sg()(),Jx(59,"."),sg(),Sl(60,"h4"),Jx(61,"Utilizando os m\xE9todos do componente:"),sg(),Sl(62,"p"),Jx(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),sg(),Sl(64,"p"),Jx(65,"Por exemplo, utilizando um "),Sl(66,"a",8)(67,"strong"),Jx(68,"ViewChild"),sg()(),Jx(69,":"),sg(),Sl(70,"pre")(71,"code"),Jx(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),sg()(),Sl(73,"p"),Jx(74,"E para acessar o m\xE9todo:"),sg(),Sl(75,"pre")(76,"code"),Jx(77,`poStepperComponent.next();
`),sg()(),Sl(78,"h4"),Jx(79,"Boas pr\xE1ticas"),sg(),Sl(80,"ul")(81,"li"),Jx(82,"Evite "),Sl(83,"code"),Jx(84,"labels"),sg(),Jx(85," extensos que quebram o layout do "),Sl(86,"code"),Jx(87,"po-stepper"),sg(),Jx(88,", use "),Sl(89,"code"),Jx(90,"labels"),sg(),Jx(91," diretos, curtos e intuitivos."),sg(),Sl(92,"li"),Jx(93,"Utilize apenas um "),Sl(94,"code"),Jx(95,"po-stepper"),sg(),Jx(96," por p\xE1gina."),sg()(),Sl(97,"h4"),Jx(98,"Tokens customiz\xE1veis"),sg(),Sl(99,"p"),Jx(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(101,"blockquote")(102,"p"),Jx(103,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(104,"a",9),Jx(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(106,"."),sg()(),Sl(107,"table")(108,"thead")(109,"tr")(110,"th"),Jx(111,"Propriedade"),sg(),Sl(112,"th"),Jx(113,"Descri\xE7\xE3o"),sg(),Sl(114,"th"),Jx(115,"Valor Padr\xE3o"),sg()()(),Sl(116,"tbody")(117,"tr")(118,"td")(119,"strong"),Jx(120,"Label"),sg()(),Wl(121,"td")(122,"td"),sg(),Sl(123,"tr")(124,"td")(125,"code"),Jx(126,"--font-family"),sg()(),Sl(127,"td"),Jx(128,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(129,"td")(130,"code"),Jx(131,"var(--font-family-theme)"),sg()()(),Sl(132,"tr")(133,"td")(134,"code"),Jx(135,"--font-size"),sg()(),Sl(136,"td"),Jx(137,"Tamanho da fonte"),sg(),Sl(138,"td")(139,"code"),Jx(140,"var(--font-size-default)"),sg()()(),Sl(141,"tr")(142,"td")(143,"code"),Jx(144,"--font-weight"),sg()(),Sl(145,"td"),Jx(146,"Peso da fonte"),sg(),Sl(147,"td")(148,"code"),Jx(149,"var(--font-weight-normal)"),sg()()(),Sl(150,"tr")(151,"td")(152,"strong"),Jx(153,"Step - Done"),sg()(),Wl(154,"td")(155,"td"),sg(),Sl(156,"tr")(157,"td")(158,"code"),Jx(159,"--text-color"),sg()(),Sl(160,"td"),Jx(161,"Cor do texto no step conclu\xEDdo"),sg(),Sl(162,"td")(163,"code"),Jx(164,"var(--color-neutral-dark-70)"),sg()()(),Sl(165,"tr")(166,"td")(167,"code"),Jx(168,"--color-icon-done"),sg()(),Sl(169,"td"),Jx(170,"Cor do \xEDcone no step conclu\xEDdo"),sg(),Sl(171,"td")(172,"code"),Jx(173,"var(--color-neutral-dark-70)"),sg()()(),Sl(174,"tr")(175,"td")(176,"code"),Jx(177,"--background-done"),sg()(),Sl(178,"td"),Jx(179,"Cor de fundo no step conclu\xEDdo"),sg(),Sl(180,"td")(181,"code"),Jx(182,"var(--color-neutral-light-00)"),sg()()(),Sl(183,"tr")(184,"td")(185,"strong"),Jx(186,"Line - Done"),sg()(),Wl(187,"td")(188,"td"),sg(),Sl(189,"tr")(190,"td")(191,"code"),Jx(192,"--color-line-done"),sg()(),Sl(193,"td"),Jx(194,"Cor da linha no step conclu\xEDdo"),sg(),Sl(195,"td")(196,"code"),Jx(197,"var(--color-neutral-mid-40)"),sg()()(),Sl(198,"tr")(199,"td")(200,"strong"),Jx(201,"Step - Current"),sg()(),Wl(202,"td")(203,"td"),sg(),Sl(204,"tr")(205,"td")(206,"code"),Jx(207,"--color-icon-current"),sg()(),Sl(208,"td"),Jx(209,"Cor do \xEDcone no step atual"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-neutral-light-00)"),sg()()(),Sl(213,"tr")(214,"td")(215,"code"),Jx(216,"--background-current"),sg()(),Sl(217,"td"),Jx(218,"Cor de fundo no step atual"),sg(),Sl(219,"td")(220,"code"),Jx(221,"var(--color-action-default)"),sg()()(),Sl(222,"tr")(223,"td")(224,"code"),Jx(225,"--font-weight-current"),sg()(),Sl(226,"td"),Jx(227,"Peso da fonte no step atual"),sg(),Sl(228,"td")(229,"code"),Jx(230,"var(--font-weight-bold)"),sg()()(),Sl(231,"tr")(232,"td")(233,"strong"),Jx(234,"Step - Next"),sg()(),Wl(235,"td")(236,"td"),sg(),Sl(237,"tr")(238,"td")(239,"code"),Jx(240,"--font-size-circle"),sg()(),Sl(241,"td"),Jx(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),sg(),Sl(243,"td")(244,"code"),Jx(245,"var(--font-size-sm)"),sg()()(),Sl(246,"tr")(247,"td")(248,"code"),Jx(249,"--color-next"),sg()(),Sl(250,"td"),Jx(251,"Cor do \xEDcone no pr\xF3ximo step"),sg(),Sl(252,"td")(253,"code"),Jx(254,"var(--color-action-disabled)"),sg()()(),Sl(255,"tr")(256,"td")(257,"code"),Jx(258,"--text-color-next"),sg()(),Sl(259,"td"),Jx(260,"Cor do texto no pr\xF3ximo step"),sg(),Sl(261,"td")(262,"code"),Jx(263,"var(--color-neutral-light-30)"),sg()()(),Sl(264,"tr")(265,"td")(266,"strong"),Jx(267,"Focused"),sg()(),Wl(268,"td")(269,"td"),sg(),Sl(270,"tr")(271,"td")(272,"code"),Jx(273,"--outline-color-focused"),sg()(),Sl(274,"td"),Jx(275,"Cor do outline do estado de focus"),sg(),Sl(276,"td")(277,"code"),Jx(278,"var(--color-action-focus)"),sg()()()()()(),Sl(279,"div",10)(280,"h4",11),Jx(281,"Seletor"),sg(),Sl(282,"pre",12),Jx(283,`<po-stepper
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
`),sg()(),Sl(284,"h4",13),Jx(285,"Propriedades"),sg(),Sl(286,"table",14)(287,"tr",15)(288,"th",16),Jx(289,"Nome"),sg(),Sl(290,"th",16),Jx(291,"Tipo"),sg(),Sl(292,"th",16),Jx(293,"Padr\xE3o"),sg(),Sl(294,"th",16),Jx(295,"Descri\xE7\xE3o"),sg()(),Sl(296,"tr",17)(297,"td",18)(298,"div",19)(299,"span",20),Jx(300," p-align-center"),Wl(301,"br"),sg()()(),Sl(302,"td",21)(303,"code",22),Jx(304,"boolean"),sg()(),Sl(305,"td",23)(306,"p")(307,"code"),Jx(308,"true"),sg()()(),Sl(309,"td",24)(310,"em")(311,"strong"),Jx(312,"(opcional)"),sg()(),Sl(313,"p"),Jx(314,"Define o alinhamento dos "),Sl(315,"em"),Jx(316,"steps"),sg(),Jx(317," e "),Sl(318,"em"),Jx(319,"labels"),sg(),Jx(320," no "),Sl(321,"em"),Jx(322,"stepper"),sg(),Jx(323,", dependendo da orienta\xE7\xE3o."),sg(),Sl(324,"ul")(325,"li"),Jx(326,"Quando "),Sl(327,"code"),Jx(328,"true"),sg(),Jx(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),sg(),Sl(330,"li"),Jx(331,"Quando "),Sl(332,"code"),Jx(333,"false"),sg(),Jx(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),sg()()()(),Sl(335,"tr",17)(336,"td",18)(337,"div",19)(338,"span",20),Jx(339," p-disable-click"),Wl(340,"br"),sg()()(),Sl(341,"td",21)(342,"code",22),Jx(343,"boolean"),sg()(),Sl(344,"td",23)(345,"p")(346,"code"),Jx(347,"false"),sg()()(),Sl(348,"td",24)(349,"em")(350,"strong"),Jx(351,"(opcional)"),sg()(),Sl(352,"p"),Jx(353,"Desabilita o clique nos steps."),sg()()(),Sl(354,"tr",17)(355,"td",18)(356,"div",19)(357,"span",20),Jx(358," p-step-icon-active"),Wl(359,"br"),sg()()(),Sl(360,"td",21)(361,"code",25),Jx(362,"string "),sg(),Sl(363,"code",26),Jx(364," TemplateRef<void>"),sg()(),Sl(365,"td",23)(366,"p")(367,"code"),Jx(368,"po-icon-edit"),sg()()(),Sl(369,"td",24)(370,"em")(371,"strong"),Jx(372,"(opcional)"),sg()(),Sl(373,"p"),Jx(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Sl(375,"a",27),Jx(376,"Biblioteca de \xEDcones"),sg(),Jx(377,"."),sg(),Sl(378,"pre")(379,"code"),Jx(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),sg()(),Sl(381,"p"),Jx(382,"Para customizar o \xEDcone atrav\xE9s do "),Sl(383,"code"),Jx(384,"TemplateRef"),sg(),Jx(385,", veja a documenta\xE7\xE3o da propriedade "),Sl(386,"code"),Jx(387,"p-step-icon-done"),sg(),Jx(388,"."),sg(),Sl(389,"blockquote")(390,"p"),Jx(391,"Deve-se usar "),Sl(392,"code"),Jx(393,"font-size: inherit"),sg(),Jx(394," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),sg()()()(),Sl(395,"tr",17)(396,"td",18)(397,"div",19)(398,"span",20),Jx(399," p-step-icon-done"),Wl(400,"br"),sg()()(),Sl(401,"td",21)(402,"code",25),Jx(403,"string "),sg(),Sl(404,"code",26),Jx(405," TemplateRef<void>"),sg()(),Sl(406,"td",23)(407,"p")(408,"code"),Jx(409,"po-icon-ok"),sg()()(),Sl(410,"td",24)(411,"em")(412,"strong"),Jx(413,"(opcional)"),sg()(),Sl(414,"p"),Jx(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Sl(416,"a",27),Jx(417,"Biblioteca de \xEDcones"),sg()(),Sl(418,"pre")(419,"code"),Jx(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),sg()(),Sl(421,"p"),Jx(422,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(423,"code"),Jx(424,"TemplateRef"),sg(),Jx(425,", conforme exemplo abaixo:"),sg(),Sl(426,"pre")(427,"code"),Jx(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),sg()(),Sl(429,"blockquote")(430,"p"),Jx(431,"Deve-se usar "),Sl(432,"code"),Jx(433,"font-size: inherit"),sg(),Jx(434," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),sg()()()(),Sl(435,"tr",17)(436,"td",18)(437,"div",28)(438,"span",29),Jx(439," (p-change-step)"),Wl(440,"br"),sg()()(),Sl(441,"td",21)(442,"code",30),Jx(443,"EventEmitter"),sg()(),Sl(444,"td",23),Jx(445,"-"),sg(),Sl(446,"td",24)(447,"p"),Jx(448,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),Sl(449,"code"),Jx(450,"po-stepper"),sg(),Jx(451,"."),sg()()(),Sl(452,"tr",17)(453,"td",18)(454,"div",19)(455,"span",20),Jx(456," p-orientation"),Wl(457,"br"),sg()()(),Sl(458,"td",21)(459,"code",31),Jx(460,"PoStepperOrientation"),sg()(),Sl(461,"td",23)(462,"p")(463,"code"),Jx(464,"PoStepperOrientation.Horizontal"),sg()()(),Sl(465,"td",24)(466,"em")(467,"strong"),Jx(468,"(opcional)"),sg()(),Sl(469,"p"),Jx(470,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Sl(471,"code"),Jx(472,"po-stepper"),sg(),Jx(473,"."),sg(),Sl(474,"blockquote")(475,"p"),Jx(476,"Veja os valores v\xE1lidos no "),Sl(477,"em"),Jx(478,"enum"),sg(),Sl(479,"a",32),Jx(480,"PoStepperOrientation"),sg(),Jx(481,"."),sg()()()(),Sl(482,"tr",17)(483,"td",18)(484,"div",19)(485,"span",20),Jx(486," p-sequential"),Wl(487,"br"),sg()()(),Sl(488,"td",21)(489,"code",22),Jx(490,"boolean"),sg()(),Sl(491,"td",23)(492,"p")(493,"code"),Jx(494,"true"),sg()()(),Sl(495,"td",24)(496,"em")(497,"strong"),Jx(498,"(opcional)"),sg()(),Sl(499,"p"),Jx(500,"Define se o "),Sl(501,"code"),Jx(502,"po-stepper"),sg(),Jx(503," ser\xE1 sequencial ou aleat\xF3rio."),sg(),Sl(504,"blockquote")(505,"p"),Jx(506,"Ao utilizar o componente "),Sl(507,"a",6)(508,"strong"),Jx(509,"po-step"),sg()(),Jx(510,", o valor desta propriedade sempre ser\xE1 verdadeiro."),sg()()()(),Sl(511,"tr",17)(512,"td",18)(513,"div",19)(514,"span",20),Jx(515," p-step"),Wl(516,"br"),sg()()(),Sl(517,"td",21)(518,"code",33),Jx(519,"number"),sg()(),Sl(520,"td",23)(521,"p")(522,"code"),Jx(523,"1"),sg()()(),Sl(524,"td",24)(525,"em")(526,"strong"),Jx(527,"(opcional)"),sg()(),Sl(528,"p"),Jx(529,"Controla o passo atual do "),Sl(530,"code"),Jx(531,"po-stepper"),sg(),Jx(532,"."),sg(),Sl(533,"blockquote")(534,"p"),Jx(535,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Sl(536,"a",6)(537,"strong"),Jx(538,"po-step"),sg()(),Jx(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Sl(540,"a",6)(541,"strong"),Jx(542,"po-step"),sg()(),Jx(543,"."),sg()()()(),Sl(544,"tr",17)(545,"td",18)(546,"div",19)(547,"span",20),Jx(548," p-step-icons"),Wl(549,"br"),sg()()(),Sl(550,"td",21)(551,"code",22),Jx(552,"boolean"),sg()(),Sl(553,"td",23)(554,"p")(555,"code"),Jx(556,"false"),sg()()(),Sl(557,"td",24)(558,"em")(559,"strong"),Jx(560,"(opcional)"),sg()(),Sl(561,"p"),Wl(562,"a",34),sg(),Sl(563,"p"),Jx(564,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),Sl(565,"em"),Jx(566,"steps"),sg(),Jx(567,"."),sg()()(),Sl(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),Jx(572," p-step-size"),Wl(573,"br"),sg()()(),Sl(574,"td",21)(575,"code",33),Jx(576,"number"),sg()(),Sl(577,"td",23)(578,"p")(579,"code"),Jx(580,"24"),sg()()(),Sl(581,"td",24)(582,"em")(583,"strong"),Jx(584,"(opcional)"),sg()(),Sl(585,"p"),Jx(586,"Define o tamanho dos "),Sl(587,"em"),Jx(588,"steps"),sg(),Jx(589," em "),Sl(590,"em"),Jx(591,"pixels"),sg(),Jx(592,", possibilitando um maior destaque."),sg(),Sl(593,"p"),Jx(594,"O valor informado deve ser entre "),Sl(595,"code"),Jx(596,"24"),sg(),Jx(597," e "),Sl(598,"code"),Jx(599,"64"),sg(),Jx(600,"."),sg(),Sl(601,"blockquote")(602,"p"),Jx(603,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),Sl(604,"em"),Jx(605,"default"),sg(),Jx(606,"."),sg()()()(),Sl(607,"tr",17)(608,"td",18)(609,"div",19)(610,"span",20),Jx(611," p-steps"),Wl(612,"br"),sg()()(),Sl(613,"td",21)(614,"code",35),Jx(615,"Array<PoStepperItem>"),sg()(),Sl(616,"td",23),Jx(617,"-"),sg(),Sl(618,"td",24)(619,"em")(620,"strong"),Jx(621,"(opcional)"),sg()(),Sl(622,"p"),Jx(623,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg(),Sl(624,"blockquote")(625,"p"),Jx(626,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Sl(627,"a",6)(628,"strong"),Jx(629,"po-step"),sg()(),Jx(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Sl(631,"a",6)(632,"strong"),Jx(633,"po-step"),sg()(),Jx(634,"."),sg()()()()(),Sl(635,"h3",13),Jx(636,"M\xE9todos"),sg(),Sl(637,"table",36)(638,"tr",17)(639,"th",37)(640,"div",19)(641,"h4")(642,"span",20),Jx(643," active "),sg()()()()(),Sl(644,"tr",24)(645,"td",24)(646,"p"),Jx(647,"Altera o status do "),Sl(648,"em"),Jx(649,"step"),sg(),Jx(650," para ativo."),sg(),Sl(651,"blockquote")(652,"p"),Jx(653,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(654,"a",6)(655,"strong"),Jx(656,"po-step"),sg()(),Jx(657,"."),sg()()()()(),Sl(658,"h5")(659,"b"),Jx(660,"Par\xE2metros"),sg()(),Sl(661,"table",14)(662,"tr",15)(663,"th",16),Jx(664,"Nome"),sg(),Sl(665,"th",16),Jx(666,"Tipo"),sg(),Sl(667,"th",16),Jx(668,"Descri\xE7\xE3o"),sg()(),Sl(669,"tr",17)(670,"td",18),Jx(671," index"),sg(),Sl(672,"td",21)(673,"code",38),Jx(674," number "),sg()(),Sl(675,"td",24)(676,"p"),Jx(677,"\xCDndice do "),Sl(678,"code"),Jx(679,"po-step"),sg(),Jx(680," que se deseja ativar."),sg()()()(),Wl(681,"br"),Sl(682,"table",36)(683,"tr",17)(684,"th",37)(685,"div",19)(686,"h4")(687,"span",20),Jx(688," first "),sg()()()()(),Sl(689,"tr",24)(690,"td",24)(691,"p"),Jx(692,"Ativa o primeiro "),Sl(693,"em"),Jx(694,"step"),sg(),Jx(695,"."),sg(),Sl(696,"blockquote")(697,"p"),Jx(698,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(699,"a",6)(700,"strong"),Jx(701,"po-step"),sg()(),Jx(702,"."),sg()()()()(),Wl(703,"br"),Sl(704,"table",36)(705,"tr",17)(706,"th",37)(707,"div",19)(708,"h4")(709,"span",20),Jx(710," next "),sg()()()()(),Sl(711,"tr",24)(712,"td",24)(713,"p"),Jx(714,"Ativa o pr\xF3ximo "),Sl(715,"em"),Jx(716,"step"),sg(),Jx(717,"."),sg(),Sl(718,"blockquote")(719,"p"),Jx(720,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(721,"a",6)(722,"strong"),Jx(723,"po-step"),sg()(),Jx(724,"."),sg()()()()(),Wl(725,"br"),Sl(726,"table",36)(727,"tr",17)(728,"th",37)(729,"div",19)(730,"h4")(731,"span",20),Jx(732," previous "),sg()()()()(),Sl(733,"tr",24)(734,"td",24)(735,"p"),Jx(736,"Ativa o "),Sl(737,"em"),Jx(738,"step"),sg(),Jx(739," anterior."),sg(),Sl(740,"blockquote")(741,"p"),Jx(742,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(743,"a",6)(744,"strong"),Jx(745,"po-step"),sg()(),Jx(746,"."),sg()()()()(),Wl(747,"br"),Sl(748,"h3"),Jx(749,"Interfaces"),sg(),Sl(750,"h4",39)(751,"code",5),Jx(752,"PoStepperItem"),sg()(),Sl(753,"div",2)(754,"p"),Jx(755,"Interface para defini\xE7\xE3o dos "),Sl(756,"em"),Jx(757,"steps"),sg(),Jx(758," do componente "),Sl(759,"code"),Jx(760,"po-stepper"),sg(),Jx(761," quando utilizada a propriedade "),Sl(762,"code"),Jx(763,"p-steps"),sg(),Jx(764,"."),sg()(),Sl(765,"h4",13),Jx(766,"Propriedades"),sg(),Sl(767,"table",14)(768,"tr",15)(769,"th",16),Jx(770,"Nome"),sg(),Sl(771,"th",16),Jx(772,"Tipo"),sg(),Sl(773,"th",16),Jx(774,"Descri\xE7\xE3o"),sg()(),Sl(775,"tr",17)(776,"td",18)(777,"div",19)(778,"span",20),Jx(779," iconActive"),Wl(780,"br"),sg()()(),Sl(781,"td",21)(782,"code",25),Jx(783,"string "),sg(),Sl(784,"code",26),Jx(785," TemplateRef<void>"),sg()(),Sl(786,"td",24)(787,"em")(788,"strong"),Jx(789,"(opcional)"),sg()(),Sl(790,"p"),Jx(791,"Define o \xEDcone do "),Sl(792,"em"),Jx(793,"step"),sg(),Jx(794," ativo."),sg()()(),Sl(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),Jx(799," iconDefault"),Wl(800,"br"),sg()()(),Sl(801,"td",21)(802,"code",25),Jx(803,"string "),sg(),Sl(804,"code",26),Jx(805," TemplateRef<void>"),sg()(),Sl(806,"td",24)(807,"em")(808,"strong"),Jx(809,"(opcional)"),sg()(),Sl(810,"p"),Jx(811,"Define o \xEDcone do "),Sl(812,"em"),Jx(813,"step"),sg(),Jx(814," default."),sg()()(),Sl(815,"tr",17)(816,"td",18)(817,"div",19)(818,"span",20),Jx(819," iconDone"),Wl(820,"br"),sg()()(),Sl(821,"td",21)(822,"code",25),Jx(823,"string "),sg(),Sl(824,"code",26),Jx(825," TemplateRef<void>"),sg()(),Sl(826,"td",24)(827,"em")(828,"strong"),Jx(829,"(opcional)"),sg()(),Sl(830,"p"),Jx(831,"Define o \xEDcone do "),Sl(832,"em"),Jx(833,"step"),sg(),Jx(834," conclu\xEDdo."),sg()()(),Sl(835,"tr",17)(836,"td",18)(837,"div",19)(838,"span",20),Jx(839," id"),Wl(840,"br"),sg()()(),Sl(841,"td",21)(842,"code",25),Jx(843,"string"),sg()(),Sl(844,"td",24)(845,"em")(846,"strong"),Jx(847,"(opcional)"),sg()(),Sl(848,"p"),Jx(849,"Identificador \xFAnico do step."),sg()()(),Sl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),Jx(854," label"),Wl(855,"br"),sg()()(),Sl(856,"td",21)(857,"code",25),Jx(858,"string"),sg()(),Sl(859,"td",24)(860,"em")(861,"strong"),Jx(862,"(opcional)"),sg()(),Sl(863,"p"),Jx(864,"Texto do item do stepper."),sg()()(),Sl(865,"tr",17)(866,"td",18)(867,"div",19)(868,"span",20),Jx(869," status"),Wl(870,"br"),sg()()(),Sl(871,"td",21)(872,"code",40),Jx(873,"PoStepperStatus"),sg()(),Sl(874,"td",24)(875,"em")(876,"strong"),Jx(877,"(opcional)"),sg()(),Sl(878,"p"),Jx(879,"Define o estado de exibi\xE7\xE3o do "),Sl(880,"em"),Jx(881,"step"),sg(),Jx(882,"."),sg()()()(),Sl(883,"h3"),Jx(884,"Enums"),sg(),Sl(885,"h4",4)(886,"code",5),Jx(887,"PoStepperOrientation"),sg()(),Sl(888,"div",2)(889,"p"),Wl(890,"a",41),sg(),Sl(891,"p")(892,"em"),Jx(893,"Enums"),sg(),Jx(894," para defini\xE7\xE3o da orienta\xE7\xE3o do "),Sl(895,"code"),Jx(896,"po-stepper"),sg(),Jx(897,"."),sg()(),Sl(898,"h4",13),Jx(899,"Propriedades"),sg(),Sl(900,"table",14)(901,"tr",15)(902,"th",16),Jx(903,"Nome"),sg(),Sl(904,"th",16),Jx(905,"Descri\xE7\xE3o"),sg()(),Sl(906,"tr",17)(907,"td",18)(908,"div",19)(909,"span",20),Jx(910," Horizontal"),Wl(911,"br"),sg()()(),Sl(912,"td",24)(913,"p"),Jx(914,"Define a exibi\xE7\xE3o do componente na horizontal."),sg()()(),Sl(915,"tr",17)(916,"td",18)(917,"div",19)(918,"span",20),Jx(919," Vertical"),Wl(920,"br"),sg()()(),Sl(921,"td",24)(922,"p"),Jx(923,"Define a exibi\xE7\xE3o do componente na vertical."),sg()()()(),Sl(924,"h4",4)(925,"code",5),Jx(926,"PoStepperStatus"),sg()(),Sl(927,"div",2)(928,"p"),Wl(929,"a",42),sg(),Sl(930,"p")(931,"em"),Jx(932,"Enums"),sg(),Jx(933," para os status do "),Sl(934,"code"),Jx(935,"po-stepper"),sg(),Jx(936," quando utilizada a propriedade "),Sl(937,"code"),Jx(938,"p-steps"),sg(),Jx(939,"."),sg()(),Sl(940,"h4",13),Jx(941,"Propriedades"),sg(),Sl(942,"table",14)(943,"tr",15)(944,"th",16),Jx(945,"Nome"),sg(),Sl(946,"th",16),Jx(947,"Descri\xE7\xE3o"),sg()(),Sl(948,"tr",17)(949,"td",18)(950,"div",19)(951,"span",20),Jx(952," Active"),Wl(953,"br"),sg()()(),Sl(954,"td",24)(955,"p"),Jx(956,"Define o estado do "),Sl(957,"em"),Jx(958,"step"),sg(),Jx(959," como ativo."),sg()()(),Sl(960,"tr",17)(961,"td",18)(962,"div",19)(963,"span",20),Jx(964," Default"),Wl(965,"br"),sg()()(),Sl(966,"td",24)(967,"p"),Jx(968,"Define o estado do "),Sl(969,"em"),Jx(970,"step"),sg(),Jx(971," como padr\xE3o."),sg()()(),Sl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),Jx(976," Disabled"),Wl(977,"br"),sg()()(),Sl(978,"td",24)(979,"p"),Jx(980,"Define o estado do "),Sl(981,"em"),Jx(982,"step"),sg(),Jx(983," como desabilitado."),sg()()(),Sl(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),Jx(988," Done"),Wl(989,"br"),sg()()(),Sl(990,"td",24)(991,"p"),Jx(992,"Define o estado do "),Sl(993,"em"),Jx(994,"step"),sg(),Jx(995," como conclu\xEDdo."),sg()()(),Sl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),Jx(1e3," Error"),Wl(1001,"br"),sg()()(),Sl(1002,"td",24)(1003,"p"),Jx(1004,"Define o estado do "),Sl(1005,"em"),Jx(1006,"step"),sg(),Jx(1007," com erro."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var He=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-stepper-doc"),sg(),Sl(4,"po-tab",3),ht$1("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Ve,Ae,Le,qe,Oe,Re],encapsulation:2})}return a})();var bt=[{path:"",component:He}],je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(bt),pL]})}return a})();var En=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,je]})}return a})();export{En as DocPoStepperModule};