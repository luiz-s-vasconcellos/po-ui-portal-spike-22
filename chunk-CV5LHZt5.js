import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,a_ as Ue$1,r as r$1,t as x,d7 as ze$1,d8 as ly,d9 as Vi,K as KC,E,da as Tt$1,cE as Md,cF as DV,J as wl,N as Ul,R as ng,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,a1 as ut$1,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,aG as oY,aH as ok,aK as Pe,ah as uo,aL as di,aM as lT,bC as Vp,al as lx,av as nx,aw as tx,aX as _x,ay as rx,ae as iY,af as ck,b9 as Ro,aO as Yo,aj as ti,aQ as dt$1,aU as IR,ao as QA,am as pw,an as $0,az as Qy,aA as Jy,ar as JA,ap as hw,aq as G0,as as $l,at as uo$1,au as fo,c2 as Ap,ai as ya,aP as Da,db as TVe,a3 as D3,ax as gx,F as uw,aB as $x}from'./main-6SPFG3VI.js';var Ae=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic"]],standalone:false,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(r,i){r&1&&(wl(0,"po-stepper",0),Ul(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),ng()),r&2&&YE("p-align-center",false);},dependencies:[Md,DV],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Stepper Basic"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-stepper-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ke,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ae],encapsulation:2})}return a})();function it(a,H){if(a&1&&(wl(0,"po-step",3)(1,"h2"),Ux(2),ng()()),a&2){let m=H.$implicit;YE("p-label",m.label)("p-icon-default",m.iconDefault),Pp(2),cg("Step Content ",m.label);}}var Ne=(()=>{class a{changeDetector=f(Ue$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:true},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: an an-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: an an-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: an an-question",gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore();}addItem(m){this.steps=[...this.steps,r$1({},m)],this.stepItem={},this.changeDetector.detectChanges();}changeStep(m){this.event=m,this.changeDetector.detectChanges();}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=false;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs"]],standalone:false,decls:17,vars:13,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=lx();wl(0,"po-container")(1,"po-stepper",2),ut$1("p-change-step",function(){return i.changeStep("change")}),nx(2,it,3,3,"po-step",3,tx),ng(),Ul(4,"po-divider")(5,"po-info",4),wl(6,"form",null,0),Ul(8,"po-dynamic-form",5),wl(9,"div",6)(10,"po-button",7),ut$1("p-click",function(){Qy(s);let o=_x(7);return i.addItem(i.stepItem),Jy(o.reset())}),ng()()(),wl(11,"form",null,1),Ul(13,"po-dynamic-form",5)(14,"po-divider"),wl(15,"div",6)(16,"po-button",8),ut$1("p-click",function(){Qy(s);let o=_x(7),Je=_x(12);return i.restore(),Je.reset(),Jy(o.reset())}),ng()()()();}if(r&2){let s=_x(7);Pp(),YE("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),Pp(),rx(i.steps),Pp(3),YE("p-value",i.event),Pp(3),YE("p-fields",i.stepItemFields)("p-value",i.stepItem),Pp(2),YE("p-disabled",s.invalid),Pp(3),YE("p-fields",i.propertiesFields)("p-value",i.properties);}},dependencies:[aY,oY,ok,Pe,uo,di,lT,Vp,Md,DV],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Stepper Labs"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-stepper-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,at,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ne],encapsulation:2})}return a})();var st=["addressForm"],mt=["paymentForm"],dt=["personalForm"],ct=["successData"];function ut(a,H){a&1&&Ul(0,"po-loading-overlay",18);}var ze=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=false;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress();}canActiveFinishStep(m){return x(m.form.valid).pipe(ze$1(()=>this.isLoadingPayment=true),ly(2e3),Vi(()=>this.isLoadingPayment=false))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first();}getAddress(){return {city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales"]],viewQuery:function(r,i){if(r&1&&$l(st,7)(mt,7)(dt,7)(ct,7),r&2){let s;uo$1(s=fo())&&(i.addressForm=s.first),uo$1(s=fo())&&(i.paymentForm=s.first),uo$1(s=fo())&&(i.personalForm=s.first),uo$1(s=fo())&&(i.successData=s.first);}},standalone:false,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[1,"sample-stepper-position-relative"],["p-text","Loading"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"]],template:function(r,i){if(r&1){let s=lx();wl(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),Ul(4,"img",11),ng(),wl(5,"div",12)(6,"p",13),Ux(7,"Nike XYZ - Red/Gold Stripes"),ng(),wl(8,"p",14),Ux(9,"Brand: Nike | Style: Modern | Men's"),ng(),wl(10,"p",15),Ux(11,"Width: 12.5 - COD: 001254648412319"),ng(),Ul(12,"po-divider"),wl(13,"p",15),Ux(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),ng()()()(),wl(15,"po-widget",16)(16,"p",15),Ux(17,"$2.500,00"),ng(),wl(18,"p",15),Ux(19,"$500,00(-)"),ng(),wl(20,"p",15),Ux(21,"$160,00(+)"),ng(),Ul(22,"po-divider"),wl(23,"p",14),Ux(24,"Total: $2.160,00"),ng()()(),Ul(25,"po-divider"),wl(26,"div",17),QA(27,ut,1,0,"po-loading-overlay",18),wl(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),ut$1("p-primary-action",function(){Qy(s);let o=_x(29);return Jy(o.next())}),wl(32,"form",null,1)(34,"div",8)(35,"po-input",22),pw("ngModelChange",function(o){return Qy(s),$x(i.name,o)||(i.name=o),Jy(o)}),ng(),$0(),wl(36,"po-datepicker",23),pw("ngModelChange",function(o){return Qy(s),$x(i.birthday,o)||(i.birthday=o),Jy(o)}),ng(),$0(),wl(37,"po-input",24),pw("ngModelChange",function(o){return Qy(s),$x(i.document,o)||(i.document=o),Jy(o)}),ng(),$0(),ng()()()(),wl(38,"po-step",25)(39,"po-widget",26),ut$1("p-primary-action",function(){Qy(s);let o=_x(29);return Jy(o.previous())})("p-secondary-action",function(){Qy(s);let o=_x(29);return Jy(o.next())}),wl(40,"form",null,2)(42,"div",8)(43,"po-input",27),pw("ngModelChange",function(o){return Qy(s),$x(i.address.street,o)||(i.address.street=o),Jy(o)}),ng(),$0(),wl(44,"po-input",28),pw("ngModelChange",function(o){return Qy(s),$x(i.address.number,o)||(i.address.number=o),Jy(o)}),ng(),$0(),wl(45,"po-input",29),pw("ngModelChange",function(o){return Qy(s),$x(i.address.city,o)||(i.address.city=o),Jy(o)}),ng(),$0(),ng(),wl(46,"div",8)(47,"po-input",30),pw("ngModelChange",function(o){return Qy(s),$x(i.address.code,o)||(i.address.code=o),Jy(o)}),ng(),$0(),wl(48,"po-input",31),pw("ngModelChange",function(o){return Qy(s),$x(i.address.country,o)||(i.address.country=o),Jy(o)}),ng(),$0(),wl(49,"po-input",32),pw("ngModelChange",function(o){return Qy(s),$x(i.address.reference,o)||(i.address.reference=o),Jy(o)}),ng(),$0(),ng()()()(),wl(50,"po-step",33)(51,"po-widget",26),ut$1("p-primary-action",function(){Qy(s);let o=_x(29);return Jy(o.previous())})("p-secondary-action",function(){Qy(s);let o=_x(29);return Jy(o.next())}),wl(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),pw("ngModelChange",function(o){return Qy(s),$x(i.cardName,o)||(i.cardName=o),Jy(o)}),ng(),$0(),wl(57,"po-input",35,5),pw("ngModelChange",function(o){return Qy(s),$x(i.cardCode,o)||(i.cardCode=o),Jy(o)}),ng(),$0(),wl(59,"po-input",36,6),pw("ngModelChange",function(o){return Qy(s),$x(i.cardValid,o)||(i.cardValid=o),Jy(o)}),ng(),$0(),ng()()()(),wl(61,"po-step",37)(62,"po-widget",26),ut$1("p-primary-action",function(){Qy(s);let o=_x(29);return Jy(o.previous())})("p-secondary-action",function(){Qy(s);let o=_x(29);return Jy(i.onConfirmStep(o))}),wl(63,"div",8),Ul(64,"po-info",38)(65,"po-info",39),ng(),wl(66,"div",8),Ul(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),ng(),Ul(71,"po-divider"),wl(72,"div",8),Ul(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),ng()()()()(),wl(78,"po-modal",49,7)(80,"div",8),Ul(81,"img",50),wl(82,"p",51),Ux(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),ng()()();}if(r&2){let s=_x(33),c=_x(41),o=_x(53);Pp(27),JA(i.isLoadingPayment?27:-1),Pp(3),YE("p-can-active-next-step",i.canActiveNextStep.bind(i,s)),Pp(),YE("p-primary-label",i.nextLabelWidget),Pp(4),hw("ngModel",i.name),G0(),Pp(),hw("ngModel",i.birthday),G0(),Pp(),hw("ngModel",i.document),G0(),Pp(),YE("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),Pp(),YE("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Pp(4),hw("ngModel",i.address.street),G0(),Pp(),hw("ngModel",i.address.number),G0(),Pp(),hw("ngModel",i.address.city),G0(),Pp(2),hw("ngModel",i.address.code),G0(),Pp(),hw("ngModel",i.address.country),G0(),Pp(),hw("ngModel",i.address.reference),G0(),Pp(),YE("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),Pp(),YE("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Pp(4),hw("ngModel",i.cardName),G0(),Pp(2),hw("ngModel",i.cardCode),G0(),Pp(2),hw("ngModel",i.cardValid),G0(),Pp(3),YE("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),Pp(2),YE("p-value",i.name),Pp(),YE("p-value",i.document),Pp(2),YE("p-value",i.address.street),Pp(),YE("p-value",i.address.number),Pp(),YE("p-value",i.address.city),Pp(),YE("p-value",i.address.country);}},dependencies:[aY,iY,oY,ck,ok,di,Ro,Yo,Vp,ti,dt$1,Md,DV,IR],styles:[".sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}"],changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Stepper - Sales"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-stepper-sales/sample-po-stepper-sales.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-stepper-position-relative {
  position: relative;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-stepper-sales"),ng(),Ul(29,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,gt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ze],encapsulation:2})}return a})();var Re=(()=>{class a{http=f(KC);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(r){return new(r||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ft=["basicInformation"],Et=["academicFormation"],bt=["professionalExperiences"];function vt(a,H){if(a&1&&(wl(0,"div",23)(1,"po-widget",24)(2,"p"),Ux(3),ng()()()),a&2){let m=H.$implicit;Pp(),YE("p-title",m.title),Pp(2),uw(m.description);}}function Ct(a,H){if(a&1&&(wl(0,"div",4),Ul(1,"po-divider",23),nx(2,vt,4,2,"div",23,tx),ng()),a&2){let m=gx();Pp(2),rx(m.professionalExperiences);}}var He=(()=>{class a{sampleService=f(Re);changeDetector=f(Ue$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep());}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates();}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}activeStep(){this.stepper.active(2);}onChangeState(){this.getCitiesByState(this.basicInformation.state);}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r];}getBasicInformations(){return {name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return {name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return {name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return [{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state);});}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active"]],viewQuery:function(r,i){if(r&1&&$l(ft,7)(Et,7)(bt,7)(TVe,5),r&2){let s;uo$1(s=fo())&&(i.basicInformationForm=s.first),uo$1(s=fo())&&(i.academicFormationForm=s.first),uo$1(s=fo())&&(i.professionalExperiencesForm=s.first),uo$1(s=fo())&&(i.stepper=s.first);}},standalone:false,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],[1,"po-md-12"],[1,"po-md-12",3,"p-title"]],template:function(r,i){if(r&1){let s=lx();wl(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),pw("ngModelChange",function(o){return Qy(s),$x(i.basicInformation.name,o)||(i.basicInformation.name=o),Jy(o)}),ng(),$0(),wl(7,"po-email",6),pw("ngModelChange",function(o){return Qy(s),$x(i.basicInformation.email,o)||(i.basicInformation.email=o),Jy(o)}),ng(),$0(),wl(8,"po-input",7),pw("ngModelChange",function(o){return Qy(s),$x(i.basicInformation.phone,o)||(i.basicInformation.phone=o),Jy(o)}),ng(),$0(),wl(9,"po-select",8),pw("ngModelChange",function(o){return Qy(s),$x(i.basicInformation.state,o)||(i.basicInformation.state=o),Jy(o)}),ut$1("p-change",function(){return i.onChangeState()}),ng(),$0(),wl(10,"po-select",9),pw("ngModelChange",function(o){return Qy(s),$x(i.basicInformation.city,o)||(i.basicInformation.city=o),Jy(o)}),ng(),$0(),ng()()(),wl(11,"po-step",10)(12,"form",null,1)(14,"div",4),Ul(15,"po-divider",11),wl(16,"po-input",12),pw("ngModelChange",function(o){return Qy(s),$x(i.highSchool.name,o)||(i.highSchool.name=o),Jy(o)}),ng(),$0(),wl(17,"po-input",13),pw("ngModelChange",function(o){return Qy(s),$x(i.highSchool.city,o)||(i.highSchool.city=o),Jy(o)}),ng(),$0(),wl(18,"po-input",14),pw("ngModelChange",function(o){return Qy(s),$x(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),Jy(o)}),ng(),$0(),ng(),wl(19,"div",4),Ul(20,"po-divider",15),wl(21,"po-input",16),pw("ngModelChange",function(o){return Qy(s),$x(i.universityEducation.name,o)||(i.universityEducation.name=o),Jy(o)}),ng(),$0(),wl(22,"po-input",17),pw("ngModelChange",function(o){return Qy(s),$x(i.universityEducation.city,o)||(i.universityEducation.city=o),Jy(o)}),ng(),$0(),wl(23,"po-input",18),pw("ngModelChange",function(o){return Qy(s),$x(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),Jy(o)}),ng(),$0(),ng()()(),wl(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),pw("ngModelChange",function(o){return Qy(s),$x(i.experienceTitle,o)||(i.experienceTitle=o),Jy(o)}),ng(),$0(),wl(29,"po-textarea",21),pw("ngModelChange",function(o){return Qy(s),$x(i.experienceDescripton,o)||(i.experienceDescripton=o),Jy(o)}),ng(),$0(),wl(30,"po-button",22),ut$1("p-click",function(){Qy(s);let o=_x(26);return i.addProfessionalExperiences(o),Jy(o.reset())}),ng()()(),QA(31,Ct,4,0,"div",4),ng()()();}r&2&&(Pp(6),hw("ngModel",i.basicInformation.name),G0(),Pp(),hw("ngModel",i.basicInformation.email),G0(),Pp(),hw("ngModel",i.basicInformation.phone),G0(),Pp(),hw("ngModel",i.basicInformation.state),YE("p-options",i.stateOptions),G0(),Pp(),hw("ngModel",i.basicInformation.city),YE("p-options",i.cityOptions),G0(),Pp(6),hw("ngModel",i.highSchool.name),G0(),Pp(),hw("ngModel",i.highSchool.city),G0(),Pp(),hw("ngModel",i.highSchool.conclusionYear),G0(),Pp(3),hw("ngModel",i.universityEducation.name),G0(),Pp(),hw("ngModel",i.universityEducation.city),G0(),Pp(),hw("ngModel",i.universityEducation.conclusionYear),G0(),Pp(5),hw("ngModel",i.experienceTitle),G0(),Pp(),hw("ngModel",i.experienceDescripton),G0(),Pp(2),JA(i.professionalExperiences?31:-1));},dependencies:[aY,iY,oY,ck,ok,Pe,uo,di,Ap,Yo,ya,Da,Md,DV,IR],encapsulation:2,changeDetection:1})}return a})();var xt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Stepper - Active"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-stepper-active"),ng(),Ul(27,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,xt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,He],encapsulation:2})}return a})();var Ue=(()=>{class a{changeDetector=f(Ue$1);currentStep;stepsWithStatus=[{label:"Step 1",status:Tt$1.Done},{label:"Step 2",status:Tt$1.Active},{label:"Step 3",status:Tt$1.Default},{label:"Step 4",status:Tt$1.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges();}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===Tt$1.Active&&(r.status=Tt$1.Done);}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===Tt$1.Active&&(r.status=Tt$1.Default);}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===Tt$1.Disabled&&(this.stepsWithStatus[this.currentStep].status=Tt$1.Default);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps"]],standalone:false,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(r,i){r&1&&(wl(0,"po-stepper",0),ut$1("p-change-step",function(c){return i.onChangeStatus(c)}),ng()),r&2&&YE("p-align-center",false)("p-sequential",false)("p-step",i.currentStep)("p-steps",i.stepsWithStatus);},dependencies:[DV],encapsulation:2,changeDetection:1})}return a})();var wt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Stepper - Steps"),ng(),wl(4,"a",2),ut$1("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-stepper-steps"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,wt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ue],encapsulation:2})}return a})();var Ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-doc"]],standalone:false,decls:1008,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["href","https://angular.io/api/core/ViewChild"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoStepperModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-stepper"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoStepperComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O "),wl(15,"code"),Ux(16,"po-stepper"),ng(),Ux(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),ng(),wl(18,"p"),Ux(19,"Existem duas formas de utiliza\xE7\xE3o:"),ng(),wl(20,"p"),Ux(21,"1 - Usando o componente "),wl(22,"a",6)(23,"strong"),Ux(24,"po-step"),ng()(),Ux(25," para renderizar e descrever os passos."),ng(),wl(26,"p"),Ux(27,"2 - Atrav\xE9s da propriedade "),wl(28,"code"),Ux(29,"p-steps"),ng(),Ux(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),wl(31,"em"),Ux(32,"step"),ng(),Ux(33," ativo."),ng(),wl(34,"p"),Ux(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),wl(36,"em"),Ux(37,"steps"),ng(),Ux(38,"."),ng(),wl(39,"p"),Ux(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),wl(41,"em"),Ux(42,"steps"),ng(),Ux(43," atrav\xE9s do teclado utilizando a tecla "),wl(44,"em"),Ux(45,"tab"),ng(),Ux(46," e, para ativar o "),wl(47,"em"),Ux(48,"step"),ng(),Ux(49,` em foco basta
pressionar a tecla `),wl(50,"em"),Ux(51,"enter"),ng(),Ux(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),wl(53,"em"),Ux(54,"steps"),ng(),Ux(55,` atrav\xE9s da
propriedade `),wl(56,"a",7)(57,"code"),Ux(58,"p-step-icons"),ng()(),Ux(59,"."),ng(),wl(60,"h4"),Ux(61,"Utilizando os m\xE9todos do componente:"),ng(),wl(62,"p"),Ux(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),ng(),wl(64,"p"),Ux(65,"Por exemplo, utilizando um "),wl(66,"a",8)(67,"strong"),Ux(68,"ViewChild"),ng()(),Ux(69,":"),ng(),wl(70,"pre")(71,"code"),Ux(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),ng()(),wl(73,"p"),Ux(74,"E para acessar o m\xE9todo:"),ng(),wl(75,"pre")(76,"code"),Ux(77,`poStepperComponent.next();
`),ng()(),wl(78,"h4"),Ux(79,"Boas pr\xE1ticas"),ng(),wl(80,"ul")(81,"li"),Ux(82,"Evite "),wl(83,"code"),Ux(84,"labels"),ng(),Ux(85," extensos que quebram o layout do "),wl(86,"code"),Ux(87,"po-stepper"),ng(),Ux(88,", use "),wl(89,"code"),Ux(90,"labels"),ng(),Ux(91," diretos, curtos e intuitivos."),ng(),wl(92,"li"),Ux(93,"Utilize apenas um "),wl(94,"code"),Ux(95,"po-stepper"),ng(),Ux(96," por p\xE1gina."),ng()(),wl(97,"h4"),Ux(98,"Tokens customiz\xE1veis"),ng(),wl(99,"p"),Ux(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(101,"blockquote")(102,"p"),Ux(103,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(104,"a",9),Ux(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(106,"."),ng()(),wl(107,"table")(108,"thead")(109,"tr")(110,"th"),Ux(111,"Propriedade"),ng(),wl(112,"th"),Ux(113,"Descri\xE7\xE3o"),ng(),wl(114,"th"),Ux(115,"Valor Padr\xE3o"),ng()()(),wl(116,"tbody")(117,"tr")(118,"td")(119,"strong"),Ux(120,"Label"),ng()(),Ul(121,"td")(122,"td"),ng(),wl(123,"tr")(124,"td")(125,"code"),Ux(126,"--font-family"),ng()(),wl(127,"td"),Ux(128,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(129,"td")(130,"code"),Ux(131,"var(--font-family-theme)"),ng()()(),wl(132,"tr")(133,"td")(134,"code"),Ux(135,"--font-size"),ng()(),wl(136,"td"),Ux(137,"Tamanho da fonte"),ng(),wl(138,"td")(139,"code"),Ux(140,"var(--font-size-default)"),ng()()(),wl(141,"tr")(142,"td")(143,"code"),Ux(144,"--font-weight"),ng()(),wl(145,"td"),Ux(146,"Peso da fonte"),ng(),wl(147,"td")(148,"code"),Ux(149,"var(--font-weight-normal)"),ng()()(),wl(150,"tr")(151,"td")(152,"strong"),Ux(153,"Step - Done"),ng()(),Ul(154,"td")(155,"td"),ng(),wl(156,"tr")(157,"td")(158,"code"),Ux(159,"--text-color"),ng()(),wl(160,"td"),Ux(161,"Cor do texto no step conclu\xEDdo"),ng(),wl(162,"td")(163,"code"),Ux(164,"var(--color-neutral-dark-70)"),ng()()(),wl(165,"tr")(166,"td")(167,"code"),Ux(168,"--color-icon-done"),ng()(),wl(169,"td"),Ux(170,"Cor do \xEDcone no step conclu\xEDdo"),ng(),wl(171,"td")(172,"code"),Ux(173,"var(--color-neutral-dark-70)"),ng()()(),wl(174,"tr")(175,"td")(176,"code"),Ux(177,"--background-done"),ng()(),wl(178,"td"),Ux(179,"Cor de fundo no step conclu\xEDdo"),ng(),wl(180,"td")(181,"code"),Ux(182,"var(--color-neutral-light-00)"),ng()()(),wl(183,"tr")(184,"td")(185,"strong"),Ux(186,"Line - Done"),ng()(),Ul(187,"td")(188,"td"),ng(),wl(189,"tr")(190,"td")(191,"code"),Ux(192,"--color-line-done"),ng()(),wl(193,"td"),Ux(194,"Cor da linha no step conclu\xEDdo"),ng(),wl(195,"td")(196,"code"),Ux(197,"var(--color-neutral-mid-40)"),ng()()(),wl(198,"tr")(199,"td")(200,"strong"),Ux(201,"Step - Current"),ng()(),Ul(202,"td")(203,"td"),ng(),wl(204,"tr")(205,"td")(206,"code"),Ux(207,"--color-icon-current"),ng()(),wl(208,"td"),Ux(209,"Cor do \xEDcone no step atual"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-neutral-light-00)"),ng()()(),wl(213,"tr")(214,"td")(215,"code"),Ux(216,"--background-current"),ng()(),wl(217,"td"),Ux(218,"Cor de fundo no step atual"),ng(),wl(219,"td")(220,"code"),Ux(221,"var(--color-action-default)"),ng()()(),wl(222,"tr")(223,"td")(224,"code"),Ux(225,"--font-weight-current"),ng()(),wl(226,"td"),Ux(227,"Peso da fonte no step atual"),ng(),wl(228,"td")(229,"code"),Ux(230,"var(--font-weight-bold)"),ng()()(),wl(231,"tr")(232,"td")(233,"strong"),Ux(234,"Step - Next"),ng()(),Ul(235,"td")(236,"td"),ng(),wl(237,"tr")(238,"td")(239,"code"),Ux(240,"--font-size-circle"),ng()(),wl(241,"td"),Ux(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),ng(),wl(243,"td")(244,"code"),Ux(245,"var(--font-size-sm)"),ng()()(),wl(246,"tr")(247,"td")(248,"code"),Ux(249,"--color-next"),ng()(),wl(250,"td"),Ux(251,"Cor do \xEDcone no pr\xF3ximo step"),ng(),wl(252,"td")(253,"code"),Ux(254,"var(--color-action-disabled)"),ng()()(),wl(255,"tr")(256,"td")(257,"code"),Ux(258,"--text-color-next"),ng()(),wl(259,"td"),Ux(260,"Cor do texto no pr\xF3ximo step"),ng(),wl(261,"td")(262,"code"),Ux(263,"var(--color-neutral-light-30)"),ng()()(),wl(264,"tr")(265,"td")(266,"strong"),Ux(267,"Focused"),ng()(),Ul(268,"td")(269,"td"),ng(),wl(270,"tr")(271,"td")(272,"code"),Ux(273,"--outline-color-focused"),ng()(),wl(274,"td"),Ux(275,"Cor do outline do estado de focus"),ng(),wl(276,"td")(277,"code"),Ux(278,"var(--color-action-focus)"),ng()()()()()(),wl(279,"div",10)(280,"h4",11),Ux(281,"Seletor"),ng(),wl(282,"pre",12),Ux(283,`<po-stepper
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
`),ng()(),wl(284,"h4",13),Ux(285,"Propriedades"),ng(),wl(286,"table",14)(287,"tr",15)(288,"th",16),Ux(289,"Nome"),ng(),wl(290,"th",16),Ux(291,"Tipo"),ng(),wl(292,"th",16),Ux(293,"Padr\xE3o"),ng(),wl(294,"th",16),Ux(295,"Descri\xE7\xE3o"),ng()(),wl(296,"tr",17)(297,"td",18)(298,"div",19)(299,"span",20),Ux(300," p-align-center"),Ul(301,"br"),ng()()(),wl(302,"td",21)(303,"code",22),Ux(304,"boolean"),ng()(),wl(305,"td",23)(306,"p")(307,"code"),Ux(308,"true"),ng()()(),wl(309,"td",24)(310,"em")(311,"strong"),Ux(312,"(opcional)"),ng()(),wl(313,"p"),Ux(314,"Define o alinhamento dos "),wl(315,"em"),Ux(316,"steps"),ng(),Ux(317," e "),wl(318,"em"),Ux(319,"labels"),ng(),Ux(320," no "),wl(321,"em"),Ux(322,"stepper"),ng(),Ux(323,", dependendo da orienta\xE7\xE3o."),ng(),wl(324,"ul")(325,"li"),Ux(326,"Quando "),wl(327,"code"),Ux(328,"true"),ng(),Ux(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),ng(),wl(330,"li"),Ux(331,"Quando "),wl(332,"code"),Ux(333,"false"),ng(),Ux(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),ng()()()(),wl(335,"tr",17)(336,"td",18)(337,"div",19)(338,"span",20),Ux(339," p-disable-click"),Ul(340,"br"),ng()()(),wl(341,"td",21)(342,"code",22),Ux(343,"boolean"),ng()(),wl(344,"td",23)(345,"p")(346,"code"),Ux(347,"false"),ng()()(),wl(348,"td",24)(349,"em")(350,"strong"),Ux(351,"(opcional)"),ng()(),wl(352,"p"),Ux(353,"Desabilita o clique nos steps."),ng()()(),wl(354,"tr",17)(355,"td",18)(356,"div",19)(357,"span",20),Ux(358," p-step-icon-active"),Ul(359,"br"),ng()()(),wl(360,"td",21)(361,"code",25),Ux(362,"string "),ng(),wl(363,"code",26),Ux(364," TemplateRef<void>"),ng()(),wl(365,"td",23)(366,"p")(367,"code"),Ux(368,"po-icon-edit"),ng()()(),wl(369,"td",24)(370,"em")(371,"strong"),Ux(372,"(opcional)"),ng()(),wl(373,"p"),Ux(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),wl(375,"a",27),Ux(376,"Biblioteca de \xEDcones"),ng(),Ux(377,"."),ng(),wl(378,"pre")(379,"code"),Ux(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),ng()(),wl(381,"p"),Ux(382,"Para customizar o \xEDcone atrav\xE9s do "),wl(383,"code"),Ux(384,"TemplateRef"),ng(),Ux(385,", veja a documenta\xE7\xE3o da propriedade "),wl(386,"code"),Ux(387,"p-step-icon-done"),ng(),Ux(388,"."),ng(),wl(389,"blockquote")(390,"p"),Ux(391,"Deve-se usar "),wl(392,"code"),Ux(393,"font-size: inherit"),ng(),Ux(394," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),ng()()()(),wl(395,"tr",17)(396,"td",18)(397,"div",19)(398,"span",20),Ux(399," p-step-icon-done"),Ul(400,"br"),ng()()(),wl(401,"td",21)(402,"code",25),Ux(403,"string "),ng(),wl(404,"code",26),Ux(405," TemplateRef<void>"),ng()(),wl(406,"td",23)(407,"p")(408,"code"),Ux(409,"po-icon-ok"),ng()()(),wl(410,"td",24)(411,"em")(412,"strong"),Ux(413,"(opcional)"),ng()(),wl(414,"p"),Ux(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),wl(416,"a",27),Ux(417,"Biblioteca de \xEDcones"),ng()(),wl(418,"pre")(419,"code"),Ux(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),ng()(),wl(421,"p"),Ux(422,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(423,"code"),Ux(424,"TemplateRef"),ng(),Ux(425,", conforme exemplo abaixo:"),ng(),wl(426,"pre")(427,"code"),Ux(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),ng()(),wl(429,"blockquote")(430,"p"),Ux(431,"Deve-se usar "),wl(432,"code"),Ux(433,"font-size: inherit"),ng(),Ux(434," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),ng()()()(),wl(435,"tr",17)(436,"td",18)(437,"div",28)(438,"span",29),Ux(439," (p-change-step)"),Ul(440,"br"),ng()()(),wl(441,"td",21)(442,"code",30),Ux(443,"EventEmitter"),ng()(),wl(444,"td",23),Ux(445,"-"),ng(),wl(446,"td",24)(447,"p"),Ux(448,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),wl(449,"code"),Ux(450,"po-stepper"),ng(),Ux(451,"."),ng()()(),wl(452,"tr",17)(453,"td",18)(454,"div",19)(455,"span",20),Ux(456," p-orientation"),Ul(457,"br"),ng()()(),wl(458,"td",21)(459,"code",31),Ux(460,"PoStepperOrientation"),ng()(),wl(461,"td",23)(462,"p")(463,"code"),Ux(464,"PoStepperOrientation.Horizontal"),ng()()(),wl(465,"td",24)(466,"em")(467,"strong"),Ux(468,"(opcional)"),ng()(),wl(469,"p"),Ux(470,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),wl(471,"code"),Ux(472,"po-stepper"),ng(),Ux(473,"."),ng(),wl(474,"blockquote")(475,"p"),Ux(476,"Veja os valores v\xE1lidos no "),wl(477,"em"),Ux(478,"enum"),ng(),wl(479,"a",32),Ux(480,"PoStepperOrientation"),ng(),Ux(481,"."),ng()()()(),wl(482,"tr",17)(483,"td",18)(484,"div",19)(485,"span",20),Ux(486," p-sequential"),Ul(487,"br"),ng()()(),wl(488,"td",21)(489,"code",22),Ux(490,"boolean"),ng()(),wl(491,"td",23)(492,"p")(493,"code"),Ux(494,"true"),ng()()(),wl(495,"td",24)(496,"em")(497,"strong"),Ux(498,"(opcional)"),ng()(),wl(499,"p"),Ux(500,"Define se o "),wl(501,"code"),Ux(502,"po-stepper"),ng(),Ux(503," ser\xE1 sequencial ou aleat\xF3rio."),ng(),wl(504,"blockquote")(505,"p"),Ux(506,"Ao utilizar o componente "),wl(507,"a",6)(508,"strong"),Ux(509,"po-step"),ng()(),Ux(510,", o valor desta propriedade sempre ser\xE1 verdadeiro."),ng()()()(),wl(511,"tr",17)(512,"td",18)(513,"div",19)(514,"span",20),Ux(515," p-step"),Ul(516,"br"),ng()()(),wl(517,"td",21)(518,"code",33),Ux(519,"number"),ng()(),wl(520,"td",23)(521,"p")(522,"code"),Ux(523,"1"),ng()()(),wl(524,"td",24)(525,"em")(526,"strong"),Ux(527,"(opcional)"),ng()(),wl(528,"p"),Ux(529,"Controla o passo atual do "),wl(530,"code"),Ux(531,"po-stepper"),ng(),Ux(532,"."),ng(),wl(533,"blockquote")(534,"p"),Ux(535,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),wl(536,"a",6)(537,"strong"),Ux(538,"po-step"),ng()(),Ux(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),wl(540,"a",6)(541,"strong"),Ux(542,"po-step"),ng()(),Ux(543,"."),ng()()()(),wl(544,"tr",17)(545,"td",18)(546,"div",19)(547,"span",20),Ux(548," p-step-icons"),Ul(549,"br"),ng()()(),wl(550,"td",21)(551,"code",22),Ux(552,"boolean"),ng()(),wl(553,"td",23)(554,"p")(555,"code"),Ux(556,"false"),ng()()(),wl(557,"td",24)(558,"em")(559,"strong"),Ux(560,"(opcional)"),ng()(),wl(561,"p"),Ul(562,"a",34),ng(),wl(563,"p"),Ux(564,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),wl(565,"em"),Ux(566,"steps"),ng(),Ux(567,"."),ng()()(),wl(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),Ux(572," p-step-size"),Ul(573,"br"),ng()()(),wl(574,"td",21)(575,"code",33),Ux(576,"number"),ng()(),wl(577,"td",23)(578,"p")(579,"code"),Ux(580,"24"),ng()()(),wl(581,"td",24)(582,"em")(583,"strong"),Ux(584,"(opcional)"),ng()(),wl(585,"p"),Ux(586,"Define o tamanho dos "),wl(587,"em"),Ux(588,"steps"),ng(),Ux(589," em "),wl(590,"em"),Ux(591,"pixels"),ng(),Ux(592,", possibilitando um maior destaque."),ng(),wl(593,"p"),Ux(594,"O valor informado deve ser entre "),wl(595,"code"),Ux(596,"24"),ng(),Ux(597," e "),wl(598,"code"),Ux(599,"64"),ng(),Ux(600,"."),ng(),wl(601,"blockquote")(602,"p"),Ux(603,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),wl(604,"em"),Ux(605,"default"),ng(),Ux(606,"."),ng()()()(),wl(607,"tr",17)(608,"td",18)(609,"div",19)(610,"span",20),Ux(611," p-steps"),Ul(612,"br"),ng()()(),wl(613,"td",21)(614,"code",35),Ux(615,"Array<PoStepperItem>"),ng()(),wl(616,"td",23),Ux(617,"-"),ng(),wl(618,"td",24)(619,"em")(620,"strong"),Ux(621,"(opcional)"),ng()(),wl(622,"p"),Ux(623,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),ng(),wl(624,"blockquote")(625,"p"),Ux(626,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),wl(627,"a",6)(628,"strong"),Ux(629,"po-step"),ng()(),Ux(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),wl(631,"a",6)(632,"strong"),Ux(633,"po-step"),ng()(),Ux(634,"."),ng()()()()(),wl(635,"h3",13),Ux(636,"M\xE9todos"),ng(),wl(637,"table",36)(638,"tr",17)(639,"th",37)(640,"div",19)(641,"h4")(642,"span",20),Ux(643," active "),ng()()()()(),wl(644,"tr",24)(645,"td",24)(646,"p"),Ux(647,"Altera o status do "),wl(648,"em"),Ux(649,"step"),ng(),Ux(650," para ativo."),ng(),wl(651,"blockquote")(652,"p"),Ux(653,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),wl(654,"a",6)(655,"strong"),Ux(656,"po-step"),ng()(),Ux(657,"."),ng()()()()(),wl(658,"h5")(659,"b"),Ux(660,"Par\xE2metros"),ng()(),wl(661,"table",14)(662,"tr",15)(663,"th",16),Ux(664,"Nome"),ng(),wl(665,"th",16),Ux(666,"Tipo"),ng(),wl(667,"th",16),Ux(668,"Descri\xE7\xE3o"),ng()(),wl(669,"tr",17)(670,"td",18),Ux(671," index"),ng(),wl(672,"td",21)(673,"code",38),Ux(674," number "),ng()(),wl(675,"td",24)(676,"p"),Ux(677,"\xCDndice do "),wl(678,"code"),Ux(679,"po-step"),ng(),Ux(680," que se deseja ativar."),ng()()()(),Ul(681,"br"),wl(682,"table",36)(683,"tr",17)(684,"th",37)(685,"div",19)(686,"h4")(687,"span",20),Ux(688," first "),ng()()()()(),wl(689,"tr",24)(690,"td",24)(691,"p"),Ux(692,"Ativa o primeiro "),wl(693,"em"),Ux(694,"step"),ng(),Ux(695,"."),ng(),wl(696,"blockquote")(697,"p"),Ux(698,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),wl(699,"a",6)(700,"strong"),Ux(701,"po-step"),ng()(),Ux(702,"."),ng()()()()(),Ul(703,"br"),wl(704,"table",36)(705,"tr",17)(706,"th",37)(707,"div",19)(708,"h4")(709,"span",20),Ux(710," next "),ng()()()()(),wl(711,"tr",24)(712,"td",24)(713,"p"),Ux(714,"Ativa o pr\xF3ximo "),wl(715,"em"),Ux(716,"step"),ng(),Ux(717,"."),ng(),wl(718,"blockquote")(719,"p"),Ux(720,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),wl(721,"a",6)(722,"strong"),Ux(723,"po-step"),ng()(),Ux(724,"."),ng()()()()(),Ul(725,"br"),wl(726,"table",36)(727,"tr",17)(728,"th",37)(729,"div",19)(730,"h4")(731,"span",20),Ux(732," previous "),ng()()()()(),wl(733,"tr",24)(734,"td",24)(735,"p"),Ux(736,"Ativa o "),wl(737,"em"),Ux(738,"step"),ng(),Ux(739," anterior."),ng(),wl(740,"blockquote")(741,"p"),Ux(742,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),wl(743,"a",6)(744,"strong"),Ux(745,"po-step"),ng()(),Ux(746,"."),ng()()()()(),Ul(747,"br"),wl(748,"h3"),Ux(749,"Interfaces"),ng(),wl(750,"h4",39)(751,"code",5),Ux(752,"PoStepperItem"),ng()(),wl(753,"div",2)(754,"p"),Ux(755,"Interface para defini\xE7\xE3o dos "),wl(756,"em"),Ux(757,"steps"),ng(),Ux(758," do componente "),wl(759,"code"),Ux(760,"po-stepper"),ng(),Ux(761," quando utilizada a propriedade "),wl(762,"code"),Ux(763,"p-steps"),ng(),Ux(764,"."),ng()(),wl(765,"h4",13),Ux(766,"Propriedades"),ng(),wl(767,"table",14)(768,"tr",15)(769,"th",16),Ux(770,"Nome"),ng(),wl(771,"th",16),Ux(772,"Tipo"),ng(),wl(773,"th",16),Ux(774,"Descri\xE7\xE3o"),ng()(),wl(775,"tr",17)(776,"td",18)(777,"div",19)(778,"span",20),Ux(779," iconActive"),Ul(780,"br"),ng()()(),wl(781,"td",21)(782,"code",25),Ux(783,"string "),ng(),wl(784,"code",26),Ux(785," TemplateRef<void>"),ng()(),wl(786,"td",24)(787,"em")(788,"strong"),Ux(789,"(opcional)"),ng()(),wl(790,"p"),Ux(791,"Define o \xEDcone do "),wl(792,"em"),Ux(793,"step"),ng(),Ux(794," ativo."),ng()()(),wl(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),Ux(799," iconDefault"),Ul(800,"br"),ng()()(),wl(801,"td",21)(802,"code",25),Ux(803,"string "),ng(),wl(804,"code",26),Ux(805," TemplateRef<void>"),ng()(),wl(806,"td",24)(807,"em")(808,"strong"),Ux(809,"(opcional)"),ng()(),wl(810,"p"),Ux(811,"Define o \xEDcone do "),wl(812,"em"),Ux(813,"step"),ng(),Ux(814," default."),ng()()(),wl(815,"tr",17)(816,"td",18)(817,"div",19)(818,"span",20),Ux(819," iconDone"),Ul(820,"br"),ng()()(),wl(821,"td",21)(822,"code",25),Ux(823,"string "),ng(),wl(824,"code",26),Ux(825," TemplateRef<void>"),ng()(),wl(826,"td",24)(827,"em")(828,"strong"),Ux(829,"(opcional)"),ng()(),wl(830,"p"),Ux(831,"Define o \xEDcone do "),wl(832,"em"),Ux(833,"step"),ng(),Ux(834," conclu\xEDdo."),ng()()(),wl(835,"tr",17)(836,"td",18)(837,"div",19)(838,"span",20),Ux(839," id"),Ul(840,"br"),ng()()(),wl(841,"td",21)(842,"code",25),Ux(843,"string"),ng()(),wl(844,"td",24)(845,"em")(846,"strong"),Ux(847,"(opcional)"),ng()(),wl(848,"p"),Ux(849,"Identificador \xFAnico do step."),ng()()(),wl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),Ux(854," label"),Ul(855,"br"),ng()()(),wl(856,"td",21)(857,"code",25),Ux(858,"string"),ng()(),wl(859,"td",24)(860,"em")(861,"strong"),Ux(862,"(opcional)"),ng()(),wl(863,"p"),Ux(864,"Texto do item do stepper."),ng()()(),wl(865,"tr",17)(866,"td",18)(867,"div",19)(868,"span",20),Ux(869," status"),Ul(870,"br"),ng()()(),wl(871,"td",21)(872,"code",40),Ux(873,"PoStepperStatus"),ng()(),wl(874,"td",24)(875,"em")(876,"strong"),Ux(877,"(opcional)"),ng()(),wl(878,"p"),Ux(879,"Define o estado de exibi\xE7\xE3o do "),wl(880,"em"),Ux(881,"step"),ng(),Ux(882,"."),ng()()()(),wl(883,"h3"),Ux(884,"Enums"),ng(),wl(885,"h4",4)(886,"code",5),Ux(887,"PoStepperOrientation"),ng()(),wl(888,"div",2)(889,"p"),Ul(890,"a",41),ng(),wl(891,"p")(892,"em"),Ux(893,"Enums"),ng(),Ux(894," para defini\xE7\xE3o da orienta\xE7\xE3o do "),wl(895,"code"),Ux(896,"po-stepper"),ng(),Ux(897,"."),ng()(),wl(898,"h4",13),Ux(899,"Propriedades"),ng(),wl(900,"table",14)(901,"tr",15)(902,"th",16),Ux(903,"Nome"),ng(),wl(904,"th",16),Ux(905,"Descri\xE7\xE3o"),ng()(),wl(906,"tr",17)(907,"td",18)(908,"div",19)(909,"span",20),Ux(910," Horizontal"),Ul(911,"br"),ng()()(),wl(912,"td",24)(913,"p"),Ux(914,"Define a exibi\xE7\xE3o do componente na horizontal."),ng()()(),wl(915,"tr",17)(916,"td",18)(917,"div",19)(918,"span",20),Ux(919," Vertical"),Ul(920,"br"),ng()()(),wl(921,"td",24)(922,"p"),Ux(923,"Define a exibi\xE7\xE3o do componente na vertical."),ng()()()(),wl(924,"h4",4)(925,"code",5),Ux(926,"PoStepperStatus"),ng()(),wl(927,"div",2)(928,"p"),Ul(929,"a",42),ng(),wl(930,"p")(931,"em"),Ux(932,"Enums"),ng(),Ux(933," para os status do "),wl(934,"code"),Ux(935,"po-stepper"),ng(),Ux(936," quando utilizada a propriedade "),wl(937,"code"),Ux(938,"p-steps"),ng(),Ux(939,"."),ng()(),wl(940,"h4",13),Ux(941,"Propriedades"),ng(),wl(942,"table",14)(943,"tr",15)(944,"th",16),Ux(945,"Nome"),ng(),wl(946,"th",16),Ux(947,"Descri\xE7\xE3o"),ng()(),wl(948,"tr",17)(949,"td",18)(950,"div",19)(951,"span",20),Ux(952," Active"),Ul(953,"br"),ng()()(),wl(954,"td",24)(955,"p"),Ux(956,"Define o estado do "),wl(957,"em"),Ux(958,"step"),ng(),Ux(959," como ativo."),ng()()(),wl(960,"tr",17)(961,"td",18)(962,"div",19)(963,"span",20),Ux(964," Default"),Ul(965,"br"),ng()()(),wl(966,"td",24)(967,"p"),Ux(968,"Define o estado do "),wl(969,"em"),Ux(970,"step"),ng(),Ux(971," como padr\xE3o."),ng()()(),wl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),Ux(976," Disabled"),Ul(977,"br"),ng()()(),wl(978,"td",24)(979,"p"),Ux(980,"Define o estado do "),wl(981,"em"),Ux(982,"step"),ng(),Ux(983," como desabilitado."),ng()()(),wl(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),Ux(988," Done"),Ul(989,"br"),ng()()(),wl(990,"td",24)(991,"p"),Ux(992,"Define o estado do "),wl(993,"em"),Ux(994,"step"),ng(),Ux(995," como conclu\xEDdo."),ng()()(),wl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),Ux(1e3," Error"),Ul(1001,"br"),ng()()(),wl(1002,"td",24)(1003,"p"),Ux(1004,"Define o estado do "),wl(1005,"em"),Ux(1006,"step"),ng(),Ux(1007," com erro."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut$1("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-stepper-doc"),ng(),wl(4,"po-tab",3),ut$1("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,We,qe,Oe,je,Qe,Ye],encapsulation:2})}return a})();var Tt=[{path:"",component:Xe}],Ge=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(Tt),vL]})}return a})();var Ln=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,Ge]})}return a})();export{Ln as DocPoStepperModule};