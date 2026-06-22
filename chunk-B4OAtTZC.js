import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,ae as Be$1,e as r$1,x as N,dA as Ue,bi as ay,dB as Vi,r as rb,I,dC as Dt,d8 as Ime,d9 as uNe,T as Tl,J as Gl,L as sg,M as tw,an as TO,aH as Ga,b8 as Hme,b9 as Gme,z as tN,a1 as ht$1,F as Vp,ar as zx,au as fg,bs as hN,aX as nY,aY as eY,aZ as Dk,b0 as Qt,aI as dc,b1 as mv,b2 as Zhe,c9 as $he,aB as Cx,aQ as mx,aR as gx,bd as Ox,aS as vx,aF as J9,aG as Ck,bD as Mde,b4 as O3,aK as aS,b6 as Yo,ba as gNe,aq as fx,aM as Ew,aN as t0,aD as Ky,aE as Xy,at as hx,aO as Dw,aP as r0,av as Yl,aw as uo,ax as fo,cz as Mz,aJ as Uhe,b5 as qhe,a3 as aNe,aA as Rx,H as vw,aT as rN}from'./main-LUSFEIN7.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic"]],standalone:false,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(r,i){r&1&&(Tl(0,"po-stepper",0),Gl(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),sg()),r&2&&tw("p-align-center",false);},dependencies:[Ime,uNe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Stepper Basic"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-stepper-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ye,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Fe],encapsulation:2})}return a})();function Ge(a,j){if(a&1&&(Tl(0,"po-step",3)(1,"h2"),tN(2),sg()()),a&2){let m=j.$implicit;tw("p-label",m.label)("p-icon-default",m.iconDefault),Vp(2),fg("Step Content ",m.label);}}var ke=(()=>{class a{changeDetector=f(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:true},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: an an-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: an an-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: an an-question",gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore();}addItem(m){this.steps=[...this.steps,r$1({},m)],this.stepItem={},this.changeDetector.detectChanges();}changeStep(m){this.event=m,this.changeDetector.detectChanges();}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=false;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs"]],standalone:false,decls:17,vars:13,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=Cx();Tl(0,"po-container")(1,"po-stepper",2),ht$1("p-change-step",function(){return i.changeStep("change")}),mx(2,Ge,3,3,"po-step",3,gx),sg(),Gl(4,"po-divider")(5,"po-info",4),Tl(6,"form",null,0),Gl(8,"po-dynamic-form",5),Tl(9,"div",6)(10,"po-button",7),ht$1("p-click",function(){Ky(s);let o=Ox(7);return i.addItem(i.stepItem),Xy(o.reset())}),sg()()(),Tl(11,"form",null,1),Gl(13,"po-dynamic-form",5)(14,"po-divider"),Tl(15,"div",6)(16,"po-button",8),ht$1("p-click",function(){Ky(s);let o=Ox(7),Ue=Ox(12);return i.restore(),Ue.reset(),Xy(o.reset())}),sg()()()();}if(r&2){let s=Ox(7);Vp(),tw("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),Vp(),vx(i.steps),Vp(3),tw("p-value",i.event),Vp(3),tw("p-fields",i.stepItemFields)("p-value",i.stepItem),Vp(2),tw("p-disabled",s.invalid),Vp(3),tw("p-fields",i.propertiesFields)("p-value",i.properties);}},dependencies:[nY,eY,Dk,Qt,dc,mv,Zhe,$he,Ime,uNe],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Stepper Labs"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-stepper-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ke],encapsulation:2})}return a})();var $e=["addressForm"],et=["paymentForm"],tt=["personalForm"],nt=["successData"];function it(a,j){a&1&&Gl(0,"po-loading-overlay",18);}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=false;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress();}canActiveFinishStep(m){return N(m.form.valid).pipe(Ue(()=>this.isLoadingPayment=true),ay(2e3),Vi(()=>this.isLoadingPayment=false))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first();}getAddress(){return {city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales"]],viewQuery:function(r,i){if(r&1&&Yl($e,7)(et,7)(tt,7)(nt,7),r&2){let s;uo(s=fo())&&(i.addressForm=s.first),uo(s=fo())&&(i.paymentForm=s.first),uo(s=fo())&&(i.personalForm=s.first),uo(s=fo())&&(i.successData=s.first);}},standalone:false,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[1,"sample-stepper-position-relative"],["p-text","Loading"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"]],template:function(r,i){if(r&1){let s=Cx();Tl(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),Gl(4,"img",11),sg(),Tl(5,"div",12)(6,"p",13),tN(7,"Nike XYZ - Red/Gold Stripes"),sg(),Tl(8,"p",14),tN(9,"Brand: Nike | Style: Modern | Men's"),sg(),Tl(10,"p",15),tN(11,"Width: 12.5 - COD: 001254648412319"),sg(),Gl(12,"po-divider"),Tl(13,"p",15),tN(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),sg()()()(),Tl(15,"po-widget",16)(16,"p",15),tN(17,"$2.500,00"),sg(),Tl(18,"p",15),tN(19,"$500,00(-)"),sg(),Tl(20,"p",15),tN(21,"$160,00(+)"),sg(),Gl(22,"po-divider"),Tl(23,"p",14),tN(24,"Total: $2.160,00"),sg()()(),Gl(25,"po-divider"),Tl(26,"div",17),fx(27,it,1,0,"po-loading-overlay",18),Tl(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),ht$1("p-primary-action",function(){Ky(s);let o=Ox(29);return Xy(o.next())}),Tl(32,"form",null,1)(34,"div",8)(35,"po-input",22),Ew("ngModelChange",function(o){return Ky(s),rN(i.name,o)||(i.name=o),Xy(o)}),sg(),t0(),Tl(36,"po-datepicker",23),Ew("ngModelChange",function(o){return Ky(s),rN(i.birthday,o)||(i.birthday=o),Xy(o)}),sg(),t0(),Tl(37,"po-input",24),Ew("ngModelChange",function(o){return Ky(s),rN(i.document,o)||(i.document=o),Xy(o)}),sg(),t0(),sg()()()(),Tl(38,"po-step",25)(39,"po-widget",26),ht$1("p-primary-action",function(){Ky(s);let o=Ox(29);return Xy(o.previous())})("p-secondary-action",function(){Ky(s);let o=Ox(29);return Xy(o.next())}),Tl(40,"form",null,2)(42,"div",8)(43,"po-input",27),Ew("ngModelChange",function(o){return Ky(s),rN(i.address.street,o)||(i.address.street=o),Xy(o)}),sg(),t0(),Tl(44,"po-input",28),Ew("ngModelChange",function(o){return Ky(s),rN(i.address.number,o)||(i.address.number=o),Xy(o)}),sg(),t0(),Tl(45,"po-input",29),Ew("ngModelChange",function(o){return Ky(s),rN(i.address.city,o)||(i.address.city=o),Xy(o)}),sg(),t0(),sg(),Tl(46,"div",8)(47,"po-input",30),Ew("ngModelChange",function(o){return Ky(s),rN(i.address.code,o)||(i.address.code=o),Xy(o)}),sg(),t0(),Tl(48,"po-input",31),Ew("ngModelChange",function(o){return Ky(s),rN(i.address.country,o)||(i.address.country=o),Xy(o)}),sg(),t0(),Tl(49,"po-input",32),Ew("ngModelChange",function(o){return Ky(s),rN(i.address.reference,o)||(i.address.reference=o),Xy(o)}),sg(),t0(),sg()()()(),Tl(50,"po-step",33)(51,"po-widget",26),ht$1("p-primary-action",function(){Ky(s);let o=Ox(29);return Xy(o.previous())})("p-secondary-action",function(){Ky(s);let o=Ox(29);return Xy(o.next())}),Tl(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),Ew("ngModelChange",function(o){return Ky(s),rN(i.cardName,o)||(i.cardName=o),Xy(o)}),sg(),t0(),Tl(57,"po-input",35,5),Ew("ngModelChange",function(o){return Ky(s),rN(i.cardCode,o)||(i.cardCode=o),Xy(o)}),sg(),t0(),Tl(59,"po-input",36,6),Ew("ngModelChange",function(o){return Ky(s),rN(i.cardValid,o)||(i.cardValid=o),Xy(o)}),sg(),t0(),sg()()()(),Tl(61,"po-step",37)(62,"po-widget",26),ht$1("p-primary-action",function(){Ky(s);let o=Ox(29);return Xy(o.previous())})("p-secondary-action",function(){Ky(s);let o=Ox(29);return Xy(i.onConfirmStep(o))}),Tl(63,"div",8),Gl(64,"po-info",38)(65,"po-info",39),sg(),Tl(66,"div",8),Gl(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),sg(),Gl(71,"po-divider"),Tl(72,"div",8),Gl(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),sg()()()()(),Tl(78,"po-modal",49,7)(80,"div",8),Gl(81,"img",50),Tl(82,"p",51),tN(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),sg()()();}if(r&2){let s=Ox(33),c=Ox(41),o=Ox(53);Vp(27),hx(i.isLoadingPayment?27:-1),Vp(3),tw("p-can-active-next-step",i.canActiveNextStep.bind(i,s)),Vp(),tw("p-primary-label",i.nextLabelWidget),Vp(4),Dw("ngModel",i.name),r0(),Vp(),Dw("ngModel",i.birthday),r0(),Vp(),Dw("ngModel",i.document),r0(),Vp(),tw("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),Vp(),tw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Vp(4),Dw("ngModel",i.address.street),r0(),Vp(),Dw("ngModel",i.address.number),r0(),Vp(),Dw("ngModel",i.address.city),r0(),Vp(2),Dw("ngModel",i.address.code),r0(),Vp(),Dw("ngModel",i.address.country),r0(),Vp(),Dw("ngModel",i.address.reference),r0(),Vp(),tw("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),Vp(),tw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Vp(4),Dw("ngModel",i.cardName),r0(),Vp(2),Dw("ngModel",i.cardCode),r0(),Vp(2),Dw("ngModel",i.cardValid),r0(),Vp(3),tw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),Vp(2),tw("p-value",i.name),Vp(),tw("p-value",i.document),Vp(2),tw("p-value",i.address.street),Vp(),tw("p-value",i.address.number),Vp(),tw("p-value",i.address.city),Vp(),tw("p-value",i.address.country);}},dependencies:[nY,J9,eY,Ck,Dk,mv,Mde,O3,$he,aS,Yo,Ime,uNe,gNe],styles:[".sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}"],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Stepper - Sales"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-stepper-sales/sample-po-stepper-sales.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-stepper-position-relative {
  position: relative;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-stepper-sales"),sg(),Gl(29,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,at,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,We],encapsulation:2})}return a})();var Be=(()=>{class a{http=f(rb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(r){return new(r||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var rt=["basicInformation"],lt=["academicFormation"],st=["professionalExperiences"];function mt(a,j){if(a&1&&(Tl(0,"div",23)(1,"po-widget",24)(2,"p"),tN(3),sg()()()),a&2){let m=j.$implicit;Vp(),tw("p-title",m.title),Vp(2),vw(m.description);}}function dt(a,j){if(a&1&&(Tl(0,"div",4),Gl(1,"po-divider",23),mx(2,mt,4,2,"div",23,gx),sg()),a&2){let m=Rx();Vp(2),vx(m.professionalExperiences);}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep());}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates();}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}activeStep(){this.stepper.active(2);}onChangeState(){this.getCitiesByState(this.basicInformation.state);}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r];}getBasicInformations(){return {name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return {name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return {name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return [{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state);});}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active"]],viewQuery:function(r,i){if(r&1&&Yl(rt,7)(lt,7)(st,7)(uNe,5),r&2){let s;uo(s=fo())&&(i.basicInformationForm=s.first),uo(s=fo())&&(i.academicFormationForm=s.first),uo(s=fo())&&(i.professionalExperiencesForm=s.first),uo(s=fo())&&(i.stepper=s.first);}},standalone:false,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],[1,"po-md-12"],[1,"po-md-12",3,"p-title"]],template:function(r,i){if(r&1){let s=Cx();Tl(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),Ew("ngModelChange",function(o){return Ky(s),rN(i.basicInformation.name,o)||(i.basicInformation.name=o),Xy(o)}),sg(),t0(),Tl(7,"po-email",6),Ew("ngModelChange",function(o){return Ky(s),rN(i.basicInformation.email,o)||(i.basicInformation.email=o),Xy(o)}),sg(),t0(),Tl(8,"po-input",7),Ew("ngModelChange",function(o){return Ky(s),rN(i.basicInformation.phone,o)||(i.basicInformation.phone=o),Xy(o)}),sg(),t0(),Tl(9,"po-select",8),Ew("ngModelChange",function(o){return Ky(s),rN(i.basicInformation.state,o)||(i.basicInformation.state=o),Xy(o)}),ht$1("p-change",function(){return i.onChangeState()}),sg(),t0(),Tl(10,"po-select",9),Ew("ngModelChange",function(o){return Ky(s),rN(i.basicInformation.city,o)||(i.basicInformation.city=o),Xy(o)}),sg(),t0(),sg()()(),Tl(11,"po-step",10)(12,"form",null,1)(14,"div",4),Gl(15,"po-divider",11),Tl(16,"po-input",12),Ew("ngModelChange",function(o){return Ky(s),rN(i.highSchool.name,o)||(i.highSchool.name=o),Xy(o)}),sg(),t0(),Tl(17,"po-input",13),Ew("ngModelChange",function(o){return Ky(s),rN(i.highSchool.city,o)||(i.highSchool.city=o),Xy(o)}),sg(),t0(),Tl(18,"po-input",14),Ew("ngModelChange",function(o){return Ky(s),rN(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),Xy(o)}),sg(),t0(),sg(),Tl(19,"div",4),Gl(20,"po-divider",15),Tl(21,"po-input",16),Ew("ngModelChange",function(o){return Ky(s),rN(i.universityEducation.name,o)||(i.universityEducation.name=o),Xy(o)}),sg(),t0(),Tl(22,"po-input",17),Ew("ngModelChange",function(o){return Ky(s),rN(i.universityEducation.city,o)||(i.universityEducation.city=o),Xy(o)}),sg(),t0(),Tl(23,"po-input",18),Ew("ngModelChange",function(o){return Ky(s),rN(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),Xy(o)}),sg(),t0(),sg()()(),Tl(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),Ew("ngModelChange",function(o){return Ky(s),rN(i.experienceTitle,o)||(i.experienceTitle=o),Xy(o)}),sg(),t0(),Tl(29,"po-textarea",21),Ew("ngModelChange",function(o){return Ky(s),rN(i.experienceDescripton,o)||(i.experienceDescripton=o),Xy(o)}),sg(),t0(),Tl(30,"po-button",22),ht$1("p-click",function(){Ky(s);let o=Ox(26);return i.addProfessionalExperiences(o),Xy(o.reset())}),sg()()(),fx(31,dt,4,0,"div",4),sg()()();}r&2&&(Vp(6),Dw("ngModel",i.basicInformation.name),r0(),Vp(),Dw("ngModel",i.basicInformation.email),r0(),Vp(),Dw("ngModel",i.basicInformation.phone),r0(),Vp(),Dw("ngModel",i.basicInformation.state),tw("p-options",i.stateOptions),r0(),Vp(),Dw("ngModel",i.basicInformation.city),tw("p-options",i.cityOptions),r0(),Vp(6),Dw("ngModel",i.highSchool.name),r0(),Vp(),Dw("ngModel",i.highSchool.city),r0(),Vp(),Dw("ngModel",i.highSchool.conclusionYear),r0(),Vp(3),Dw("ngModel",i.universityEducation.name),r0(),Vp(),Dw("ngModel",i.universityEducation.city),r0(),Vp(),Dw("ngModel",i.universityEducation.conclusionYear),r0(),Vp(5),Dw("ngModel",i.experienceTitle),r0(),Vp(),Dw("ngModel",i.experienceDescripton),r0(),Vp(2),hx(i.professionalExperiences?31:-1));},dependencies:[nY,J9,eY,Ck,Dk,Qt,dc,mv,Mz,O3,Uhe,qhe,Ime,uNe,gNe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Stepper - Active"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-stepper-active"),sg(),Gl(27,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ut,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ne],encapsulation:2})}return a})();var ze=(()=>{class a{changeDetector=f(Be$1);currentStep;stepsWithStatus=[{label:"Step 1",status:Dt.Done},{label:"Step 2",status:Dt.Active},{label:"Step 3",status:Dt.Default},{label:"Step 4",status:Dt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges();}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===Dt.Active&&(r.status=Dt.Done);}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===Dt.Active&&(r.status=Dt.Default);}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===Dt.Disabled&&(this.stepsWithStatus[this.currentStep].status=Dt.Default);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps"]],standalone:false,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(r,i){r&1&&(Tl(0,"po-stepper",0),ht$1("p-change-step",function(c){return i.onChangeStatus(c)}),sg()),r&2&&tw("p-align-center",false)("p-sequential",false)("p-step",i.currentStep)("p-steps",i.stepsWithStatus);},dependencies:[uNe],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Stepper - Steps"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-stepper-steps"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ht,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ze],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-doc"]],standalone:false,decls:1008,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["href","https://angular.io/api/core/ViewChild"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoStepperModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-stepper"),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoStepperComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O "),Tl(15,"code"),tN(16,"po-stepper"),sg(),tN(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),sg(),Tl(18,"p"),tN(19,"Existem duas formas de utiliza\xE7\xE3o:"),sg(),Tl(20,"p"),tN(21,"1 - Usando o componente "),Tl(22,"a",6)(23,"strong"),tN(24,"po-step"),sg()(),tN(25," para renderizar e descrever os passos."),sg(),Tl(26,"p"),tN(27,"2 - Atrav\xE9s da propriedade "),Tl(28,"code"),tN(29,"p-steps"),sg(),tN(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Tl(31,"em"),tN(32,"step"),sg(),tN(33," ativo."),sg(),Tl(34,"p"),tN(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Tl(36,"em"),tN(37,"steps"),sg(),tN(38,"."),sg(),Tl(39,"p"),tN(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Tl(41,"em"),tN(42,"steps"),sg(),tN(43," atrav\xE9s do teclado utilizando a tecla "),Tl(44,"em"),tN(45,"tab"),sg(),tN(46," e, para ativar o "),Tl(47,"em"),tN(48,"step"),sg(),tN(49,` em foco basta
pressionar a tecla `),Tl(50,"em"),tN(51,"enter"),sg(),tN(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),Tl(53,"em"),tN(54,"steps"),sg(),tN(55,` atrav\xE9s da
propriedade `),Tl(56,"a",7)(57,"code"),tN(58,"p-step-icons"),sg()(),tN(59,"."),sg(),Tl(60,"h4"),tN(61,"Utilizando os m\xE9todos do componente:"),sg(),Tl(62,"p"),tN(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),sg(),Tl(64,"p"),tN(65,"Por exemplo, utilizando um "),Tl(66,"a",8)(67,"strong"),tN(68,"ViewChild"),sg()(),tN(69,":"),sg(),Tl(70,"pre")(71,"code"),tN(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),sg()(),Tl(73,"p"),tN(74,"E para acessar o m\xE9todo:"),sg(),Tl(75,"pre")(76,"code"),tN(77,`poStepperComponent.next();
`),sg()(),Tl(78,"h4"),tN(79,"Boas pr\xE1ticas"),sg(),Tl(80,"ul")(81,"li"),tN(82,"Evite "),Tl(83,"code"),tN(84,"labels"),sg(),tN(85," extensos que quebram o layout do "),Tl(86,"code"),tN(87,"po-stepper"),sg(),tN(88,", use "),Tl(89,"code"),tN(90,"labels"),sg(),tN(91," diretos, curtos e intuitivos."),sg(),Tl(92,"li"),tN(93,"Utilize apenas um "),Tl(94,"code"),tN(95,"po-stepper"),sg(),tN(96," por p\xE1gina."),sg()(),Tl(97,"h4"),tN(98,"Tokens customiz\xE1veis"),sg(),Tl(99,"p"),tN(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(101,"blockquote")(102,"p"),tN(103,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(104,"a",9),tN(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(106,"."),sg()(),Tl(107,"table")(108,"thead")(109,"tr")(110,"th"),tN(111,"Propriedade"),sg(),Tl(112,"th"),tN(113,"Descri\xE7\xE3o"),sg(),Tl(114,"th"),tN(115,"Valor Padr\xE3o"),sg()()(),Tl(116,"tbody")(117,"tr")(118,"td")(119,"strong"),tN(120,"Label"),sg()(),Gl(121,"td")(122,"td"),sg(),Tl(123,"tr")(124,"td")(125,"code"),tN(126,"--font-family"),sg()(),Tl(127,"td"),tN(128,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(129,"td")(130,"code"),tN(131,"var(--font-family-theme)"),sg()()(),Tl(132,"tr")(133,"td")(134,"code"),tN(135,"--font-size"),sg()(),Tl(136,"td"),tN(137,"Tamanho da fonte"),sg(),Tl(138,"td")(139,"code"),tN(140,"var(--font-size-default)"),sg()()(),Tl(141,"tr")(142,"td")(143,"code"),tN(144,"--font-weight"),sg()(),Tl(145,"td"),tN(146,"Peso da fonte"),sg(),Tl(147,"td")(148,"code"),tN(149,"var(--font-weight-normal)"),sg()()(),Tl(150,"tr")(151,"td")(152,"strong"),tN(153,"Step - Done"),sg()(),Gl(154,"td")(155,"td"),sg(),Tl(156,"tr")(157,"td")(158,"code"),tN(159,"--text-color"),sg()(),Tl(160,"td"),tN(161,"Cor do texto no step conclu\xEDdo"),sg(),Tl(162,"td")(163,"code"),tN(164,"var(--color-neutral-dark-70)"),sg()()(),Tl(165,"tr")(166,"td")(167,"code"),tN(168,"--color-icon-done"),sg()(),Tl(169,"td"),tN(170,"Cor do \xEDcone no step conclu\xEDdo"),sg(),Tl(171,"td")(172,"code"),tN(173,"var(--color-neutral-dark-70)"),sg()()(),Tl(174,"tr")(175,"td")(176,"code"),tN(177,"--background-done"),sg()(),Tl(178,"td"),tN(179,"Cor de fundo no step conclu\xEDdo"),sg(),Tl(180,"td")(181,"code"),tN(182,"var(--color-neutral-light-00)"),sg()()(),Tl(183,"tr")(184,"td")(185,"strong"),tN(186,"Line - Done"),sg()(),Gl(187,"td")(188,"td"),sg(),Tl(189,"tr")(190,"td")(191,"code"),tN(192,"--color-line-done"),sg()(),Tl(193,"td"),tN(194,"Cor da linha no step conclu\xEDdo"),sg(),Tl(195,"td")(196,"code"),tN(197,"var(--color-neutral-mid-40)"),sg()()(),Tl(198,"tr")(199,"td")(200,"strong"),tN(201,"Step - Current"),sg()(),Gl(202,"td")(203,"td"),sg(),Tl(204,"tr")(205,"td")(206,"code"),tN(207,"--color-icon-current"),sg()(),Tl(208,"td"),tN(209,"Cor do \xEDcone no step atual"),sg(),Tl(210,"td")(211,"code"),tN(212,"var(--color-neutral-light-00)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),tN(216,"--background-current"),sg()(),Tl(217,"td"),tN(218,"Cor de fundo no step atual"),sg(),Tl(219,"td")(220,"code"),tN(221,"var(--color-action-default)"),sg()()(),Tl(222,"tr")(223,"td")(224,"code"),tN(225,"--font-weight-current"),sg()(),Tl(226,"td"),tN(227,"Peso da fonte no step atual"),sg(),Tl(228,"td")(229,"code"),tN(230,"var(--font-weight-bold)"),sg()()(),Tl(231,"tr")(232,"td")(233,"strong"),tN(234,"Step - Next"),sg()(),Gl(235,"td")(236,"td"),sg(),Tl(237,"tr")(238,"td")(239,"code"),tN(240,"--font-size-circle"),sg()(),Tl(241,"td"),tN(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),sg(),Tl(243,"td")(244,"code"),tN(245,"var(--font-size-sm)"),sg()()(),Tl(246,"tr")(247,"td")(248,"code"),tN(249,"--color-next"),sg()(),Tl(250,"td"),tN(251,"Cor do \xEDcone no pr\xF3ximo step"),sg(),Tl(252,"td")(253,"code"),tN(254,"var(--color-action-disabled)"),sg()()(),Tl(255,"tr")(256,"td")(257,"code"),tN(258,"--text-color-next"),sg()(),Tl(259,"td"),tN(260,"Cor do texto no pr\xF3ximo step"),sg(),Tl(261,"td")(262,"code"),tN(263,"var(--color-neutral-light-30)"),sg()()(),Tl(264,"tr")(265,"td")(266,"strong"),tN(267,"Focused"),sg()(),Gl(268,"td")(269,"td"),sg(),Tl(270,"tr")(271,"td")(272,"code"),tN(273,"--outline-color-focused"),sg()(),Tl(274,"td"),tN(275,"Cor do outline do estado de focus"),sg(),Tl(276,"td")(277,"code"),tN(278,"var(--color-action-focus)"),sg()()()()()(),Tl(279,"div",10)(280,"h4",11),tN(281,"Seletor"),sg(),Tl(282,"pre",12),tN(283,`<po-stepper
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
`),sg()(),Tl(284,"h4",13),tN(285,"Propriedades"),sg(),Tl(286,"table",14)(287,"tr",15)(288,"th",16),tN(289,"Nome"),sg(),Tl(290,"th",16),tN(291,"Tipo"),sg(),Tl(292,"th",16),tN(293,"Padr\xE3o"),sg(),Tl(294,"th",16),tN(295,"Descri\xE7\xE3o"),sg()(),Tl(296,"tr",17)(297,"td",18)(298,"div",19)(299,"span",20),tN(300," p-align-center"),Gl(301,"br"),sg()()(),Tl(302,"td",21)(303,"code",22),tN(304,"boolean"),sg()(),Tl(305,"td",23)(306,"p")(307,"code"),tN(308,"true"),sg()()(),Tl(309,"td",24)(310,"em")(311,"strong"),tN(312,"(opcional)"),sg()(),Tl(313,"p"),tN(314,"Define o alinhamento dos "),Tl(315,"em"),tN(316,"steps"),sg(),tN(317," e "),Tl(318,"em"),tN(319,"labels"),sg(),tN(320," no "),Tl(321,"em"),tN(322,"stepper"),sg(),tN(323,", dependendo da orienta\xE7\xE3o."),sg(),Tl(324,"ul")(325,"li"),tN(326,"Quando "),Tl(327,"code"),tN(328,"true"),sg(),tN(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),sg(),Tl(330,"li"),tN(331,"Quando "),Tl(332,"code"),tN(333,"false"),sg(),tN(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),sg()()()(),Tl(335,"tr",17)(336,"td",18)(337,"div",19)(338,"span",20),tN(339," p-disable-click"),Gl(340,"br"),sg()()(),Tl(341,"td",21)(342,"code",22),tN(343,"boolean"),sg()(),Tl(344,"td",23)(345,"p")(346,"code"),tN(347,"false"),sg()()(),Tl(348,"td",24)(349,"em")(350,"strong"),tN(351,"(opcional)"),sg()(),Tl(352,"p"),tN(353,"Desabilita o clique nos steps."),sg()()(),Tl(354,"tr",17)(355,"td",18)(356,"div",19)(357,"span",20),tN(358," p-step-icon-active"),Gl(359,"br"),sg()()(),Tl(360,"td",21)(361,"code",25),tN(362,"string "),sg(),Tl(363,"code",26),tN(364," TemplateRef<void>"),sg()(),Tl(365,"td",23)(366,"p")(367,"code"),tN(368,"po-icon-edit"),sg()()(),Tl(369,"td",24)(370,"em")(371,"strong"),tN(372,"(opcional)"),sg()(),Tl(373,"p"),tN(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Tl(375,"a",27),tN(376,"Biblioteca de \xEDcones"),sg(),tN(377,"."),sg(),Tl(378,"pre")(379,"code"),tN(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),sg()(),Tl(381,"p"),tN(382,"Para customizar o \xEDcone atrav\xE9s do "),Tl(383,"code"),tN(384,"TemplateRef"),sg(),tN(385,", veja a documenta\xE7\xE3o da propriedade "),Tl(386,"code"),tN(387,"p-step-icon-done"),sg(),tN(388,"."),sg(),Tl(389,"blockquote")(390,"p"),tN(391,"Deve-se usar "),Tl(392,"code"),tN(393,"font-size: inherit"),sg(),tN(394," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),sg()()()(),Tl(395,"tr",17)(396,"td",18)(397,"div",19)(398,"span",20),tN(399," p-step-icon-done"),Gl(400,"br"),sg()()(),Tl(401,"td",21)(402,"code",25),tN(403,"string "),sg(),Tl(404,"code",26),tN(405," TemplateRef<void>"),sg()(),Tl(406,"td",23)(407,"p")(408,"code"),tN(409,"po-icon-ok"),sg()()(),Tl(410,"td",24)(411,"em")(412,"strong"),tN(413,"(opcional)"),sg()(),Tl(414,"p"),tN(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Tl(416,"a",27),tN(417,"Biblioteca de \xEDcones"),sg()(),Tl(418,"pre")(419,"code"),tN(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),sg()(),Tl(421,"p"),tN(422,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(423,"code"),tN(424,"TemplateRef"),sg(),tN(425,", conforme exemplo abaixo:"),sg(),Tl(426,"pre")(427,"code"),tN(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),sg()(),Tl(429,"blockquote")(430,"p"),tN(431,"Deve-se usar "),Tl(432,"code"),tN(433,"font-size: inherit"),sg(),tN(434," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),sg()()()(),Tl(435,"tr",17)(436,"td",18)(437,"div",28)(438,"span",29),tN(439," (p-change-step)"),Gl(440,"br"),sg()()(),Tl(441,"td",21)(442,"code",30),tN(443,"EventEmitter"),sg()(),Tl(444,"td",23),tN(445,"-"),sg(),Tl(446,"td",24)(447,"p"),tN(448,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),Tl(449,"code"),tN(450,"po-stepper"),sg(),tN(451,"."),sg()()(),Tl(452,"tr",17)(453,"td",18)(454,"div",19)(455,"span",20),tN(456," p-orientation"),Gl(457,"br"),sg()()(),Tl(458,"td",21)(459,"code",31),tN(460,"PoStepperOrientation"),sg()(),Tl(461,"td",23)(462,"p")(463,"code"),tN(464,"PoStepperOrientation.Horizontal"),sg()()(),Tl(465,"td",24)(466,"em")(467,"strong"),tN(468,"(opcional)"),sg()(),Tl(469,"p"),tN(470,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Tl(471,"code"),tN(472,"po-stepper"),sg(),tN(473,"."),sg(),Tl(474,"blockquote")(475,"p"),tN(476,"Veja os valores v\xE1lidos no "),Tl(477,"em"),tN(478,"enum"),sg(),Tl(479,"a",32),tN(480,"PoStepperOrientation"),sg(),tN(481,"."),sg()()()(),Tl(482,"tr",17)(483,"td",18)(484,"div",19)(485,"span",20),tN(486," p-sequential"),Gl(487,"br"),sg()()(),Tl(488,"td",21)(489,"code",22),tN(490,"boolean"),sg()(),Tl(491,"td",23)(492,"p")(493,"code"),tN(494,"true"),sg()()(),Tl(495,"td",24)(496,"em")(497,"strong"),tN(498,"(opcional)"),sg()(),Tl(499,"p"),tN(500,"Define se o "),Tl(501,"code"),tN(502,"po-stepper"),sg(),tN(503," ser\xE1 sequencial ou aleat\xF3rio."),sg(),Tl(504,"blockquote")(505,"p"),tN(506,"Ao utilizar o componente "),Tl(507,"a",6)(508,"strong"),tN(509,"po-step"),sg()(),tN(510,", o valor desta propriedade sempre ser\xE1 verdadeiro."),sg()()()(),Tl(511,"tr",17)(512,"td",18)(513,"div",19)(514,"span",20),tN(515," p-step"),Gl(516,"br"),sg()()(),Tl(517,"td",21)(518,"code",33),tN(519,"number"),sg()(),Tl(520,"td",23)(521,"p")(522,"code"),tN(523,"1"),sg()()(),Tl(524,"td",24)(525,"em")(526,"strong"),tN(527,"(opcional)"),sg()(),Tl(528,"p"),tN(529,"Controla o passo atual do "),Tl(530,"code"),tN(531,"po-stepper"),sg(),tN(532,"."),sg(),Tl(533,"blockquote")(534,"p"),tN(535,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Tl(536,"a",6)(537,"strong"),tN(538,"po-step"),sg()(),tN(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Tl(540,"a",6)(541,"strong"),tN(542,"po-step"),sg()(),tN(543,"."),sg()()()(),Tl(544,"tr",17)(545,"td",18)(546,"div",19)(547,"span",20),tN(548," p-step-icons"),Gl(549,"br"),sg()()(),Tl(550,"td",21)(551,"code",22),tN(552,"boolean"),sg()(),Tl(553,"td",23)(554,"p")(555,"code"),tN(556,"false"),sg()()(),Tl(557,"td",24)(558,"em")(559,"strong"),tN(560,"(opcional)"),sg()(),Tl(561,"p"),Gl(562,"a",34),sg(),Tl(563,"p"),tN(564,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),Tl(565,"em"),tN(566,"steps"),sg(),tN(567,"."),sg()()(),Tl(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),tN(572," p-step-size"),Gl(573,"br"),sg()()(),Tl(574,"td",21)(575,"code",33),tN(576,"number"),sg()(),Tl(577,"td",23)(578,"p")(579,"code"),tN(580,"24"),sg()()(),Tl(581,"td",24)(582,"em")(583,"strong"),tN(584,"(opcional)"),sg()(),Tl(585,"p"),tN(586,"Define o tamanho dos "),Tl(587,"em"),tN(588,"steps"),sg(),tN(589," em "),Tl(590,"em"),tN(591,"pixels"),sg(),tN(592,", possibilitando um maior destaque."),sg(),Tl(593,"p"),tN(594,"O valor informado deve ser entre "),Tl(595,"code"),tN(596,"24"),sg(),tN(597," e "),Tl(598,"code"),tN(599,"64"),sg(),tN(600,"."),sg(),Tl(601,"blockquote")(602,"p"),tN(603,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),Tl(604,"em"),tN(605,"default"),sg(),tN(606,"."),sg()()()(),Tl(607,"tr",17)(608,"td",18)(609,"div",19)(610,"span",20),tN(611," p-steps"),Gl(612,"br"),sg()()(),Tl(613,"td",21)(614,"code",35),tN(615,"Array<PoStepperItem>"),sg()(),Tl(616,"td",23),tN(617,"-"),sg(),Tl(618,"td",24)(619,"em")(620,"strong"),tN(621,"(opcional)"),sg()(),Tl(622,"p"),tN(623,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg(),Tl(624,"blockquote")(625,"p"),tN(626,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Tl(627,"a",6)(628,"strong"),tN(629,"po-step"),sg()(),tN(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Tl(631,"a",6)(632,"strong"),tN(633,"po-step"),sg()(),tN(634,"."),sg()()()()(),Tl(635,"h3",13),tN(636,"M\xE9todos"),sg(),Tl(637,"table",36)(638,"tr",17)(639,"th",37)(640,"div",19)(641,"h4")(642,"span",20),tN(643," active "),sg()()()()(),Tl(644,"tr",24)(645,"td",24)(646,"p"),tN(647,"Altera o status do "),Tl(648,"em"),tN(649,"step"),sg(),tN(650," para ativo."),sg(),Tl(651,"blockquote")(652,"p"),tN(653,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Tl(654,"a",6)(655,"strong"),tN(656,"po-step"),sg()(),tN(657,"."),sg()()()()(),Tl(658,"h5")(659,"b"),tN(660,"Par\xE2metros"),sg()(),Tl(661,"table",14)(662,"tr",15)(663,"th",16),tN(664,"Nome"),sg(),Tl(665,"th",16),tN(666,"Tipo"),sg(),Tl(667,"th",16),tN(668,"Descri\xE7\xE3o"),sg()(),Tl(669,"tr",17)(670,"td",18),tN(671," index"),sg(),Tl(672,"td",21)(673,"code",38),tN(674," number "),sg()(),Tl(675,"td",24)(676,"p"),tN(677,"\xCDndice do "),Tl(678,"code"),tN(679,"po-step"),sg(),tN(680," que se deseja ativar."),sg()()()(),Gl(681,"br"),Tl(682,"table",36)(683,"tr",17)(684,"th",37)(685,"div",19)(686,"h4")(687,"span",20),tN(688," first "),sg()()()()(),Tl(689,"tr",24)(690,"td",24)(691,"p"),tN(692,"Ativa o primeiro "),Tl(693,"em"),tN(694,"step"),sg(),tN(695,"."),sg(),Tl(696,"blockquote")(697,"p"),tN(698,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Tl(699,"a",6)(700,"strong"),tN(701,"po-step"),sg()(),tN(702,"."),sg()()()()(),Gl(703,"br"),Tl(704,"table",36)(705,"tr",17)(706,"th",37)(707,"div",19)(708,"h4")(709,"span",20),tN(710," next "),sg()()()()(),Tl(711,"tr",24)(712,"td",24)(713,"p"),tN(714,"Ativa o pr\xF3ximo "),Tl(715,"em"),tN(716,"step"),sg(),tN(717,"."),sg(),Tl(718,"blockquote")(719,"p"),tN(720,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Tl(721,"a",6)(722,"strong"),tN(723,"po-step"),sg()(),tN(724,"."),sg()()()()(),Gl(725,"br"),Tl(726,"table",36)(727,"tr",17)(728,"th",37)(729,"div",19)(730,"h4")(731,"span",20),tN(732," previous "),sg()()()()(),Tl(733,"tr",24)(734,"td",24)(735,"p"),tN(736,"Ativa o "),Tl(737,"em"),tN(738,"step"),sg(),tN(739," anterior."),sg(),Tl(740,"blockquote")(741,"p"),tN(742,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Tl(743,"a",6)(744,"strong"),tN(745,"po-step"),sg()(),tN(746,"."),sg()()()()(),Gl(747,"br"),Tl(748,"h3"),tN(749,"Interfaces"),sg(),Tl(750,"h4",39)(751,"code",5),tN(752,"PoStepperItem"),sg()(),Tl(753,"div",2)(754,"p"),tN(755,"Interface para defini\xE7\xE3o dos "),Tl(756,"em"),tN(757,"steps"),sg(),tN(758," do componente "),Tl(759,"code"),tN(760,"po-stepper"),sg(),tN(761," quando utilizada a propriedade "),Tl(762,"code"),tN(763,"p-steps"),sg(),tN(764,"."),sg()(),Tl(765,"h4",13),tN(766,"Propriedades"),sg(),Tl(767,"table",14)(768,"tr",15)(769,"th",16),tN(770,"Nome"),sg(),Tl(771,"th",16),tN(772,"Tipo"),sg(),Tl(773,"th",16),tN(774,"Descri\xE7\xE3o"),sg()(),Tl(775,"tr",17)(776,"td",18)(777,"div",19)(778,"span",20),tN(779," iconActive"),Gl(780,"br"),sg()()(),Tl(781,"td",21)(782,"code",25),tN(783,"string "),sg(),Tl(784,"code",26),tN(785," TemplateRef<void>"),sg()(),Tl(786,"td",24)(787,"em")(788,"strong"),tN(789,"(opcional)"),sg()(),Tl(790,"p"),tN(791,"Define o \xEDcone do "),Tl(792,"em"),tN(793,"step"),sg(),tN(794," ativo."),sg()()(),Tl(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),tN(799," iconDefault"),Gl(800,"br"),sg()()(),Tl(801,"td",21)(802,"code",25),tN(803,"string "),sg(),Tl(804,"code",26),tN(805," TemplateRef<void>"),sg()(),Tl(806,"td",24)(807,"em")(808,"strong"),tN(809,"(opcional)"),sg()(),Tl(810,"p"),tN(811,"Define o \xEDcone do "),Tl(812,"em"),tN(813,"step"),sg(),tN(814," default."),sg()()(),Tl(815,"tr",17)(816,"td",18)(817,"div",19)(818,"span",20),tN(819," iconDone"),Gl(820,"br"),sg()()(),Tl(821,"td",21)(822,"code",25),tN(823,"string "),sg(),Tl(824,"code",26),tN(825," TemplateRef<void>"),sg()(),Tl(826,"td",24)(827,"em")(828,"strong"),tN(829,"(opcional)"),sg()(),Tl(830,"p"),tN(831,"Define o \xEDcone do "),Tl(832,"em"),tN(833,"step"),sg(),tN(834," conclu\xEDdo."),sg()()(),Tl(835,"tr",17)(836,"td",18)(837,"div",19)(838,"span",20),tN(839," id"),Gl(840,"br"),sg()()(),Tl(841,"td",21)(842,"code",25),tN(843,"string"),sg()(),Tl(844,"td",24)(845,"em")(846,"strong"),tN(847,"(opcional)"),sg()(),Tl(848,"p"),tN(849,"Identificador \xFAnico do step."),sg()()(),Tl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),tN(854," label"),Gl(855,"br"),sg()()(),Tl(856,"td",21)(857,"code",25),tN(858,"string"),sg()(),Tl(859,"td",24)(860,"em")(861,"strong"),tN(862,"(opcional)"),sg()(),Tl(863,"p"),tN(864,"Texto do item do stepper."),sg()()(),Tl(865,"tr",17)(866,"td",18)(867,"div",19)(868,"span",20),tN(869," status"),Gl(870,"br"),sg()()(),Tl(871,"td",21)(872,"code",40),tN(873,"PoStepperStatus"),sg()(),Tl(874,"td",24)(875,"em")(876,"strong"),tN(877,"(opcional)"),sg()(),Tl(878,"p"),tN(879,"Define o estado de exibi\xE7\xE3o do "),Tl(880,"em"),tN(881,"step"),sg(),tN(882,"."),sg()()()(),Tl(883,"h3"),tN(884,"Enums"),sg(),Tl(885,"h4",4)(886,"code",5),tN(887,"PoStepperOrientation"),sg()(),Tl(888,"div",2)(889,"p"),Gl(890,"a",41),sg(),Tl(891,"p")(892,"em"),tN(893,"Enums"),sg(),tN(894," para defini\xE7\xE3o da orienta\xE7\xE3o do "),Tl(895,"code"),tN(896,"po-stepper"),sg(),tN(897,"."),sg()(),Tl(898,"h4",13),tN(899,"Propriedades"),sg(),Tl(900,"table",14)(901,"tr",15)(902,"th",16),tN(903,"Nome"),sg(),Tl(904,"th",16),tN(905,"Descri\xE7\xE3o"),sg()(),Tl(906,"tr",17)(907,"td",18)(908,"div",19)(909,"span",20),tN(910," Horizontal"),Gl(911,"br"),sg()()(),Tl(912,"td",24)(913,"p"),tN(914,"Define a exibi\xE7\xE3o do componente na horizontal."),sg()()(),Tl(915,"tr",17)(916,"td",18)(917,"div",19)(918,"span",20),tN(919," Vertical"),Gl(920,"br"),sg()()(),Tl(921,"td",24)(922,"p"),tN(923,"Define a exibi\xE7\xE3o do componente na vertical."),sg()()()(),Tl(924,"h4",4)(925,"code",5),tN(926,"PoStepperStatus"),sg()(),Tl(927,"div",2)(928,"p"),Gl(929,"a",42),sg(),Tl(930,"p")(931,"em"),tN(932,"Enums"),sg(),tN(933," para os status do "),Tl(934,"code"),tN(935,"po-stepper"),sg(),tN(936," quando utilizada a propriedade "),Tl(937,"code"),tN(938,"p-steps"),sg(),tN(939,"."),sg()(),Tl(940,"h4",13),tN(941,"Propriedades"),sg(),Tl(942,"table",14)(943,"tr",15)(944,"th",16),tN(945,"Nome"),sg(),Tl(946,"th",16),tN(947,"Descri\xE7\xE3o"),sg()(),Tl(948,"tr",17)(949,"td",18)(950,"div",19)(951,"span",20),tN(952," Active"),Gl(953,"br"),sg()()(),Tl(954,"td",24)(955,"p"),tN(956,"Define o estado do "),Tl(957,"em"),tN(958,"step"),sg(),tN(959," como ativo."),sg()()(),Tl(960,"tr",17)(961,"td",18)(962,"div",19)(963,"span",20),tN(964," Default"),Gl(965,"br"),sg()()(),Tl(966,"td",24)(967,"p"),tN(968,"Define o estado do "),Tl(969,"em"),tN(970,"step"),sg(),tN(971," como padr\xE3o."),sg()()(),Tl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),tN(976," Disabled"),Gl(977,"br"),sg()()(),Tl(978,"td",24)(979,"p"),tN(980,"Define o estado do "),Tl(981,"em"),tN(982,"step"),sg(),tN(983," como desabilitado."),sg()()(),Tl(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),tN(988," Done"),Gl(989,"br"),sg()()(),Tl(990,"td",24)(991,"p"),tN(992,"Define o estado do "),Tl(993,"em"),tN(994,"step"),sg(),tN(995," como conclu\xEDdo."),sg()()(),Tl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),tN(1e3," Error"),Gl(1001,"br"),sg()()(),Tl(1002,"td",24)(1003,"p"),tN(1004,"Define o estado do "),Tl(1005,"em"),tN(1006,"step"),sg(),tN(1007," com erro."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var He=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-stepper-doc"),sg(),Tl(4,"po-tab",3),ht$1("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Ve,Ae,Le,qe,Oe,Re],encapsulation:2})}return a})();var bt=[{path:"",component:He}],je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(bt),vL]})}return a})();var En=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,je]})}return a})();export{En as DocPoStepperModule};