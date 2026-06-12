import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,ae as He$1,r as r$1,O,dG as Ge$1,bh as uy,dH as Vi,t as tb,S,dI as Mt,dd as Qme,de as ENe,Q as Cl,R as Hl,T as og,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,a1 as dt$1,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aX as aY,aY as fk,a$ as Qt,aI as gc,b0 as _v,b1 as ume,cd as sme,aB as gx,aQ as cx,aR as ax,bc as Sx,aS as lx,aF as sY,aG as gk,bH as Wde,b3 as q3,aK as fS,b5 as Ko,b9 as ONe,aq as ix,aM as gw,aN as Z0,aD as Jy,aE as e_,at as ox,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,cE as Uz,aJ as nme,b4 as rme,a3 as SNe,aA as Ex,I as dw,aT as Zx}from'./main-OS7VVRJY.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic"]],standalone:false,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(r,i){r&1&&(Cl(0,"po-stepper",0),Hl(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),og()),r&2&&ZE("p-align-center",false);},dependencies:[Qme,ENe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Stepper Basic"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-stepper-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ye,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Fe],encapsulation:2})}return a})();function Ge(a,j){if(a&1&&(Cl(0,"po-step",3)(1,"h2"),qx(2),og()()),a&2){let m=j.$implicit;ZE("p-label",m.label)("p-icon-default",m.iconDefault),Lp(2),dg("Step Content ",m.label);}}var ke=(()=>{class a{changeDetector=f(He$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:true},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: an an-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: an an-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: an an-question",gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore();}addItem(m){this.steps=[...this.steps,r$1({},m)],this.stepItem={},this.changeDetector.detectChanges();}changeStep(m){this.event=m,this.changeDetector.detectChanges();}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=false;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs"]],standalone:false,decls:17,vars:13,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"po-container")(1,"po-stepper",2),dt$1("p-change-step",function(){return i.changeStep("change")}),cx(2,Ge,3,3,"po-step",3,ax),og(),Hl(4,"po-divider")(5,"po-info",4),Cl(6,"form",null,0),Hl(8,"po-dynamic-form",5),Cl(9,"div",6)(10,"po-button",7),dt$1("p-click",function(){Jy(s);let o=Sx(7);return i.addItem(i.stepItem),e_(o.reset())}),og()()(),Cl(11,"form",null,1),Hl(13,"po-dynamic-form",5)(14,"po-divider"),Cl(15,"div",6)(16,"po-button",8),dt$1("p-click",function(){Jy(s);let o=Sx(7),Ue=Sx(12);return i.restore(),Ue.reset(),e_(o.reset())}),og()()()();}if(r&2){let s=Sx(7);Lp(),ZE("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),Lp(),lx(i.steps),Lp(3),ZE("p-value",i.event),Lp(3),ZE("p-fields",i.stepItemFields)("p-value",i.stepItem),Lp(2),ZE("p-disabled",s.invalid),Lp(3),ZE("p-fields",i.propertiesFields)("p-value",i.properties);}},dependencies:[lY,aY,fk,Qt,gc,_v,ume,sme,Qme,ENe],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Stepper Labs"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-stepper-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ke],encapsulation:2})}return a})();var $e=["addressForm"],et=["paymentForm"],tt=["personalForm"],nt=["successData"];function it(a,j){a&1&&Hl(0,"po-loading-overlay",18);}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=false;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress();}canActiveFinishStep(m){return O(m.form.valid).pipe(Ge$1(()=>this.isLoadingPayment=true),uy(2e3),Vi(()=>this.isLoadingPayment=false))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first();}getAddress(){return {city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales"]],viewQuery:function(r,i){if(r&1&&zl($e,7)(et,7)(tt,7)(nt,7),r&2){let s;uo(s=fo())&&(i.addressForm=s.first),uo(s=fo())&&(i.paymentForm=s.first),uo(s=fo())&&(i.personalForm=s.first),uo(s=fo())&&(i.successData=s.first);}},standalone:false,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[1,"sample-stepper-position-relative"],["p-text","Loading"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),Hl(4,"img",11),og(),Cl(5,"div",12)(6,"p",13),qx(7,"Nike XYZ - Red/Gold Stripes"),og(),Cl(8,"p",14),qx(9,"Brand: Nike | Style: Modern | Men's"),og(),Cl(10,"p",15),qx(11,"Width: 12.5 - COD: 001254648412319"),og(),Hl(12,"po-divider"),Cl(13,"p",15),qx(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),og()()()(),Cl(15,"po-widget",16)(16,"p",15),qx(17,"$2.500,00"),og(),Cl(18,"p",15),qx(19,"$500,00(-)"),og(),Cl(20,"p",15),qx(21,"$160,00(+)"),og(),Hl(22,"po-divider"),Cl(23,"p",14),qx(24,"Total: $2.160,00"),og()()(),Hl(25,"po-divider"),Cl(26,"div",17),ix(27,it,1,0,"po-loading-overlay",18),Cl(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),dt$1("p-primary-action",function(){Jy(s);let o=Sx(29);return e_(o.next())}),Cl(32,"form",null,1)(34,"div",8)(35,"po-input",22),gw("ngModelChange",function(o){return Jy(s),Zx(i.name,o)||(i.name=o),e_(o)}),og(),Z0(),Cl(36,"po-datepicker",23),gw("ngModelChange",function(o){return Jy(s),Zx(i.birthday,o)||(i.birthday=o),e_(o)}),og(),Z0(),Cl(37,"po-input",24),gw("ngModelChange",function(o){return Jy(s),Zx(i.document,o)||(i.document=o),e_(o)}),og(),Z0(),og()()()(),Cl(38,"po-step",25)(39,"po-widget",26),dt$1("p-primary-action",function(){Jy(s);let o=Sx(29);return e_(o.previous())})("p-secondary-action",function(){Jy(s);let o=Sx(29);return e_(o.next())}),Cl(40,"form",null,2)(42,"div",8)(43,"po-input",27),gw("ngModelChange",function(o){return Jy(s),Zx(i.address.street,o)||(i.address.street=o),e_(o)}),og(),Z0(),Cl(44,"po-input",28),gw("ngModelChange",function(o){return Jy(s),Zx(i.address.number,o)||(i.address.number=o),e_(o)}),og(),Z0(),Cl(45,"po-input",29),gw("ngModelChange",function(o){return Jy(s),Zx(i.address.city,o)||(i.address.city=o),e_(o)}),og(),Z0(),og(),Cl(46,"div",8)(47,"po-input",30),gw("ngModelChange",function(o){return Jy(s),Zx(i.address.code,o)||(i.address.code=o),e_(o)}),og(),Z0(),Cl(48,"po-input",31),gw("ngModelChange",function(o){return Jy(s),Zx(i.address.country,o)||(i.address.country=o),e_(o)}),og(),Z0(),Cl(49,"po-input",32),gw("ngModelChange",function(o){return Jy(s),Zx(i.address.reference,o)||(i.address.reference=o),e_(o)}),og(),Z0(),og()()()(),Cl(50,"po-step",33)(51,"po-widget",26),dt$1("p-primary-action",function(){Jy(s);let o=Sx(29);return e_(o.previous())})("p-secondary-action",function(){Jy(s);let o=Sx(29);return e_(o.next())}),Cl(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),gw("ngModelChange",function(o){return Jy(s),Zx(i.cardName,o)||(i.cardName=o),e_(o)}),og(),Z0(),Cl(57,"po-input",35,5),gw("ngModelChange",function(o){return Jy(s),Zx(i.cardCode,o)||(i.cardCode=o),e_(o)}),og(),Z0(),Cl(59,"po-input",36,6),gw("ngModelChange",function(o){return Jy(s),Zx(i.cardValid,o)||(i.cardValid=o),e_(o)}),og(),Z0(),og()()()(),Cl(61,"po-step",37)(62,"po-widget",26),dt$1("p-primary-action",function(){Jy(s);let o=Sx(29);return e_(o.previous())})("p-secondary-action",function(){Jy(s);let o=Sx(29);return e_(i.onConfirmStep(o))}),Cl(63,"div",8),Hl(64,"po-info",38)(65,"po-info",39),og(),Cl(66,"div",8),Hl(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),og(),Hl(71,"po-divider"),Cl(72,"div",8),Hl(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),og()()()()(),Cl(78,"po-modal",49,7)(80,"div",8),Hl(81,"img",50),Cl(82,"p",51),qx(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),og()()();}if(r&2){let s=Sx(33),c=Sx(41),o=Sx(53);Lp(27),ox(i.isLoadingPayment?27:-1),Lp(3),ZE("p-can-active-next-step",i.canActiveNextStep.bind(i,s)),Lp(),ZE("p-primary-label",i.nextLabelWidget),Lp(4),pw("ngModel",i.name),X0(),Lp(),pw("ngModel",i.birthday),X0(),Lp(),pw("ngModel",i.document),X0(),Lp(),ZE("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),Lp(),ZE("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Lp(4),pw("ngModel",i.address.street),X0(),Lp(),pw("ngModel",i.address.number),X0(),Lp(),pw("ngModel",i.address.city),X0(),Lp(2),pw("ngModel",i.address.code),X0(),Lp(),pw("ngModel",i.address.country),X0(),Lp(),pw("ngModel",i.address.reference),X0(),Lp(),ZE("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),Lp(),ZE("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Lp(4),pw("ngModel",i.cardName),X0(),Lp(2),pw("ngModel",i.cardCode),X0(),Lp(2),pw("ngModel",i.cardValid),X0(),Lp(3),ZE("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),Lp(2),ZE("p-value",i.name),Lp(),ZE("p-value",i.document),Lp(2),ZE("p-value",i.address.street),Lp(),ZE("p-value",i.address.number),Lp(),ZE("p-value",i.address.city),Lp(),ZE("p-value",i.address.country);}},dependencies:[lY,sY,aY,gk,fk,_v,Wde,q3,sme,fS,Ko,Qme,ENe,ONe],styles:[".sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}"],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Stepper - Sales"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-stepper-sales/sample-po-stepper-sales.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-stepper-position-relative {
  position: relative;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-stepper-sales"),og(),Hl(29,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,at,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,We],encapsulation:2})}return a})();var Be=(()=>{class a{http=f(tb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(r){return new(r||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var rt=["basicInformation"],lt=["academicFormation"],st=["professionalExperiences"];function mt(a,j){if(a&1&&(Cl(0,"div",23)(1,"po-widget",24)(2,"p"),qx(3),og()()()),a&2){let m=j.$implicit;Lp(),ZE("p-title",m.title),Lp(2),dw(m.description);}}function dt(a,j){if(a&1&&(Cl(0,"div",4),Hl(1,"po-divider",23),cx(2,mt,4,2,"div",23,ax),og()),a&2){let m=Ex();Lp(2),lx(m.professionalExperiences);}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(He$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep());}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates();}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}activeStep(){this.stepper.active(2);}onChangeState(){this.getCitiesByState(this.basicInformation.state);}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r];}getBasicInformations(){return {name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return {name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return {name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return [{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state);});}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active"]],viewQuery:function(r,i){if(r&1&&zl(rt,7)(lt,7)(st,7)(ENe,5),r&2){let s;uo(s=fo())&&(i.basicInformationForm=s.first),uo(s=fo())&&(i.academicFormationForm=s.first),uo(s=fo())&&(i.professionalExperiencesForm=s.first),uo(s=fo())&&(i.stepper=s.first);}},standalone:false,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],[1,"po-md-12"],[1,"po-md-12",3,"p-title"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),gw("ngModelChange",function(o){return Jy(s),Zx(i.basicInformation.name,o)||(i.basicInformation.name=o),e_(o)}),og(),Z0(),Cl(7,"po-email",6),gw("ngModelChange",function(o){return Jy(s),Zx(i.basicInformation.email,o)||(i.basicInformation.email=o),e_(o)}),og(),Z0(),Cl(8,"po-input",7),gw("ngModelChange",function(o){return Jy(s),Zx(i.basicInformation.phone,o)||(i.basicInformation.phone=o),e_(o)}),og(),Z0(),Cl(9,"po-select",8),gw("ngModelChange",function(o){return Jy(s),Zx(i.basicInformation.state,o)||(i.basicInformation.state=o),e_(o)}),dt$1("p-change",function(){return i.onChangeState()}),og(),Z0(),Cl(10,"po-select",9),gw("ngModelChange",function(o){return Jy(s),Zx(i.basicInformation.city,o)||(i.basicInformation.city=o),e_(o)}),og(),Z0(),og()()(),Cl(11,"po-step",10)(12,"form",null,1)(14,"div",4),Hl(15,"po-divider",11),Cl(16,"po-input",12),gw("ngModelChange",function(o){return Jy(s),Zx(i.highSchool.name,o)||(i.highSchool.name=o),e_(o)}),og(),Z0(),Cl(17,"po-input",13),gw("ngModelChange",function(o){return Jy(s),Zx(i.highSchool.city,o)||(i.highSchool.city=o),e_(o)}),og(),Z0(),Cl(18,"po-input",14),gw("ngModelChange",function(o){return Jy(s),Zx(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),e_(o)}),og(),Z0(),og(),Cl(19,"div",4),Hl(20,"po-divider",15),Cl(21,"po-input",16),gw("ngModelChange",function(o){return Jy(s),Zx(i.universityEducation.name,o)||(i.universityEducation.name=o),e_(o)}),og(),Z0(),Cl(22,"po-input",17),gw("ngModelChange",function(o){return Jy(s),Zx(i.universityEducation.city,o)||(i.universityEducation.city=o),e_(o)}),og(),Z0(),Cl(23,"po-input",18),gw("ngModelChange",function(o){return Jy(s),Zx(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),e_(o)}),og(),Z0(),og()()(),Cl(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),gw("ngModelChange",function(o){return Jy(s),Zx(i.experienceTitle,o)||(i.experienceTitle=o),e_(o)}),og(),Z0(),Cl(29,"po-textarea",21),gw("ngModelChange",function(o){return Jy(s),Zx(i.experienceDescripton,o)||(i.experienceDescripton=o),e_(o)}),og(),Z0(),Cl(30,"po-button",22),dt$1("p-click",function(){Jy(s);let o=Sx(26);return i.addProfessionalExperiences(o),e_(o.reset())}),og()()(),ix(31,dt,4,0,"div",4),og()()();}r&2&&(Lp(6),pw("ngModel",i.basicInformation.name),X0(),Lp(),pw("ngModel",i.basicInformation.email),X0(),Lp(),pw("ngModel",i.basicInformation.phone),X0(),Lp(),pw("ngModel",i.basicInformation.state),ZE("p-options",i.stateOptions),X0(),Lp(),pw("ngModel",i.basicInformation.city),ZE("p-options",i.cityOptions),X0(),Lp(6),pw("ngModel",i.highSchool.name),X0(),Lp(),pw("ngModel",i.highSchool.city),X0(),Lp(),pw("ngModel",i.highSchool.conclusionYear),X0(),Lp(3),pw("ngModel",i.universityEducation.name),X0(),Lp(),pw("ngModel",i.universityEducation.city),X0(),Lp(),pw("ngModel",i.universityEducation.conclusionYear),X0(),Lp(5),pw("ngModel",i.experienceTitle),X0(),Lp(),pw("ngModel",i.experienceDescripton),X0(),Lp(2),ox(i.professionalExperiences?31:-1));},dependencies:[lY,sY,aY,gk,fk,Qt,gc,_v,Uz,q3,nme,rme,Qme,ENe,ONe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Stepper - Active"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-stepper-active"),og(),Hl(27,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ut,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ne],encapsulation:2})}return a})();var ze=(()=>{class a{changeDetector=f(He$1);currentStep;stepsWithStatus=[{label:"Step 1",status:Mt.Done},{label:"Step 2",status:Mt.Active},{label:"Step 3",status:Mt.Default},{label:"Step 4",status:Mt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges();}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===Mt.Active&&(r.status=Mt.Done);}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===Mt.Active&&(r.status=Mt.Default);}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===Mt.Disabled&&(this.stepsWithStatus[this.currentStep].status=Mt.Default);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps"]],standalone:false,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(r,i){r&1&&(Cl(0,"po-stepper",0),dt$1("p-change-step",function(c){return i.onChangeStatus(c)}),og()),r&2&&ZE("p-align-center",false)("p-sequential",false)("p-step",i.currentStep)("p-steps",i.stepsWithStatus);},dependencies:[ENe],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Stepper - Steps"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-stepper-steps"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ht,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ze],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-doc"]],standalone:false,decls:1008,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["href","https://angular.io/api/core/ViewChild"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoStepperModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-stepper"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoStepperComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O "),Cl(15,"code"),qx(16,"po-stepper"),og(),qx(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),og(),Cl(18,"p"),qx(19,"Existem duas formas de utiliza\xE7\xE3o:"),og(),Cl(20,"p"),qx(21,"1 - Usando o componente "),Cl(22,"a",6)(23,"strong"),qx(24,"po-step"),og()(),qx(25," para renderizar e descrever os passos."),og(),Cl(26,"p"),qx(27,"2 - Atrav\xE9s da propriedade "),Cl(28,"code"),qx(29,"p-steps"),og(),qx(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Cl(31,"em"),qx(32,"step"),og(),qx(33," ativo."),og(),Cl(34,"p"),qx(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Cl(36,"em"),qx(37,"steps"),og(),qx(38,"."),og(),Cl(39,"p"),qx(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Cl(41,"em"),qx(42,"steps"),og(),qx(43," atrav\xE9s do teclado utilizando a tecla "),Cl(44,"em"),qx(45,"tab"),og(),qx(46," e, para ativar o "),Cl(47,"em"),qx(48,"step"),og(),qx(49,` em foco basta
pressionar a tecla `),Cl(50,"em"),qx(51,"enter"),og(),qx(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),Cl(53,"em"),qx(54,"steps"),og(),qx(55,` atrav\xE9s da
propriedade `),Cl(56,"a",7)(57,"code"),qx(58,"p-step-icons"),og()(),qx(59,"."),og(),Cl(60,"h4"),qx(61,"Utilizando os m\xE9todos do componente:"),og(),Cl(62,"p"),qx(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),og(),Cl(64,"p"),qx(65,"Por exemplo, utilizando um "),Cl(66,"a",8)(67,"strong"),qx(68,"ViewChild"),og()(),qx(69,":"),og(),Cl(70,"pre")(71,"code"),qx(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),og()(),Cl(73,"p"),qx(74,"E para acessar o m\xE9todo:"),og(),Cl(75,"pre")(76,"code"),qx(77,`poStepperComponent.next();
`),og()(),Cl(78,"h4"),qx(79,"Boas pr\xE1ticas"),og(),Cl(80,"ul")(81,"li"),qx(82,"Evite "),Cl(83,"code"),qx(84,"labels"),og(),qx(85," extensos que quebram o layout do "),Cl(86,"code"),qx(87,"po-stepper"),og(),qx(88,", use "),Cl(89,"code"),qx(90,"labels"),og(),qx(91," diretos, curtos e intuitivos."),og(),Cl(92,"li"),qx(93,"Utilize apenas um "),Cl(94,"code"),qx(95,"po-stepper"),og(),qx(96," por p\xE1gina."),og()(),Cl(97,"h4"),qx(98,"Tokens customiz\xE1veis"),og(),Cl(99,"p"),qx(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(101,"blockquote")(102,"p"),qx(103,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(104,"a",9),qx(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(106,"."),og()(),Cl(107,"table")(108,"thead")(109,"tr")(110,"th"),qx(111,"Propriedade"),og(),Cl(112,"th"),qx(113,"Descri\xE7\xE3o"),og(),Cl(114,"th"),qx(115,"Valor Padr\xE3o"),og()()(),Cl(116,"tbody")(117,"tr")(118,"td")(119,"strong"),qx(120,"Label"),og()(),Hl(121,"td")(122,"td"),og(),Cl(123,"tr")(124,"td")(125,"code"),qx(126,"--font-family"),og()(),Cl(127,"td"),qx(128,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(129,"td")(130,"code"),qx(131,"var(--font-family-theme)"),og()()(),Cl(132,"tr")(133,"td")(134,"code"),qx(135,"--font-size"),og()(),Cl(136,"td"),qx(137,"Tamanho da fonte"),og(),Cl(138,"td")(139,"code"),qx(140,"var(--font-size-default)"),og()()(),Cl(141,"tr")(142,"td")(143,"code"),qx(144,"--font-weight"),og()(),Cl(145,"td"),qx(146,"Peso da fonte"),og(),Cl(147,"td")(148,"code"),qx(149,"var(--font-weight-normal)"),og()()(),Cl(150,"tr")(151,"td")(152,"strong"),qx(153,"Step - Done"),og()(),Hl(154,"td")(155,"td"),og(),Cl(156,"tr")(157,"td")(158,"code"),qx(159,"--text-color"),og()(),Cl(160,"td"),qx(161,"Cor do texto no step conclu\xEDdo"),og(),Cl(162,"td")(163,"code"),qx(164,"var(--color-neutral-dark-70)"),og()()(),Cl(165,"tr")(166,"td")(167,"code"),qx(168,"--color-icon-done"),og()(),Cl(169,"td"),qx(170,"Cor do \xEDcone no step conclu\xEDdo"),og(),Cl(171,"td")(172,"code"),qx(173,"var(--color-neutral-dark-70)"),og()()(),Cl(174,"tr")(175,"td")(176,"code"),qx(177,"--background-done"),og()(),Cl(178,"td"),qx(179,"Cor de fundo no step conclu\xEDdo"),og(),Cl(180,"td")(181,"code"),qx(182,"var(--color-neutral-light-00)"),og()()(),Cl(183,"tr")(184,"td")(185,"strong"),qx(186,"Line - Done"),og()(),Hl(187,"td")(188,"td"),og(),Cl(189,"tr")(190,"td")(191,"code"),qx(192,"--color-line-done"),og()(),Cl(193,"td"),qx(194,"Cor da linha no step conclu\xEDdo"),og(),Cl(195,"td")(196,"code"),qx(197,"var(--color-neutral-mid-40)"),og()()(),Cl(198,"tr")(199,"td")(200,"strong"),qx(201,"Step - Current"),og()(),Hl(202,"td")(203,"td"),og(),Cl(204,"tr")(205,"td")(206,"code"),qx(207,"--color-icon-current"),og()(),Cl(208,"td"),qx(209,"Cor do \xEDcone no step atual"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-neutral-light-00)"),og()()(),Cl(213,"tr")(214,"td")(215,"code"),qx(216,"--background-current"),og()(),Cl(217,"td"),qx(218,"Cor de fundo no step atual"),og(),Cl(219,"td")(220,"code"),qx(221,"var(--color-action-default)"),og()()(),Cl(222,"tr")(223,"td")(224,"code"),qx(225,"--font-weight-current"),og()(),Cl(226,"td"),qx(227,"Peso da fonte no step atual"),og(),Cl(228,"td")(229,"code"),qx(230,"var(--font-weight-bold)"),og()()(),Cl(231,"tr")(232,"td")(233,"strong"),qx(234,"Step - Next"),og()(),Hl(235,"td")(236,"td"),og(),Cl(237,"tr")(238,"td")(239,"code"),qx(240,"--font-size-circle"),og()(),Cl(241,"td"),qx(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),og(),Cl(243,"td")(244,"code"),qx(245,"var(--font-size-sm)"),og()()(),Cl(246,"tr")(247,"td")(248,"code"),qx(249,"--color-next"),og()(),Cl(250,"td"),qx(251,"Cor do \xEDcone no pr\xF3ximo step"),og(),Cl(252,"td")(253,"code"),qx(254,"var(--color-action-disabled)"),og()()(),Cl(255,"tr")(256,"td")(257,"code"),qx(258,"--text-color-next"),og()(),Cl(259,"td"),qx(260,"Cor do texto no pr\xF3ximo step"),og(),Cl(261,"td")(262,"code"),qx(263,"var(--color-neutral-light-30)"),og()()(),Cl(264,"tr")(265,"td")(266,"strong"),qx(267,"Focused"),og()(),Hl(268,"td")(269,"td"),og(),Cl(270,"tr")(271,"td")(272,"code"),qx(273,"--outline-color-focused"),og()(),Cl(274,"td"),qx(275,"Cor do outline do estado de focus"),og(),Cl(276,"td")(277,"code"),qx(278,"var(--color-action-focus)"),og()()()()()(),Cl(279,"div",10)(280,"h4",11),qx(281,"Seletor"),og(),Cl(282,"pre",12),qx(283,`<po-stepper
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
`),og()(),Cl(284,"h4",13),qx(285,"Propriedades"),og(),Cl(286,"table",14)(287,"tr",15)(288,"th",16),qx(289,"Nome"),og(),Cl(290,"th",16),qx(291,"Tipo"),og(),Cl(292,"th",16),qx(293,"Padr\xE3o"),og(),Cl(294,"th",16),qx(295,"Descri\xE7\xE3o"),og()(),Cl(296,"tr",17)(297,"td",18)(298,"div",19)(299,"span",20),qx(300," p-align-center"),Hl(301,"br"),og()()(),Cl(302,"td",21)(303,"code",22),qx(304,"boolean"),og()(),Cl(305,"td",23)(306,"p")(307,"code"),qx(308,"true"),og()()(),Cl(309,"td",24)(310,"em")(311,"strong"),qx(312,"(opcional)"),og()(),Cl(313,"p"),qx(314,"Define o alinhamento dos "),Cl(315,"em"),qx(316,"steps"),og(),qx(317," e "),Cl(318,"em"),qx(319,"labels"),og(),qx(320," no "),Cl(321,"em"),qx(322,"stepper"),og(),qx(323,", dependendo da orienta\xE7\xE3o."),og(),Cl(324,"ul")(325,"li"),qx(326,"Quando "),Cl(327,"code"),qx(328,"true"),og(),qx(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),og(),Cl(330,"li"),qx(331,"Quando "),Cl(332,"code"),qx(333,"false"),og(),qx(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),og()()()(),Cl(335,"tr",17)(336,"td",18)(337,"div",19)(338,"span",20),qx(339," p-disable-click"),Hl(340,"br"),og()()(),Cl(341,"td",21)(342,"code",22),qx(343,"boolean"),og()(),Cl(344,"td",23)(345,"p")(346,"code"),qx(347,"false"),og()()(),Cl(348,"td",24)(349,"em")(350,"strong"),qx(351,"(opcional)"),og()(),Cl(352,"p"),qx(353,"Desabilita o clique nos steps."),og()()(),Cl(354,"tr",17)(355,"td",18)(356,"div",19)(357,"span",20),qx(358," p-step-icon-active"),Hl(359,"br"),og()()(),Cl(360,"td",21)(361,"code",25),qx(362,"string "),og(),Cl(363,"code",26),qx(364," TemplateRef<void>"),og()(),Cl(365,"td",23)(366,"p")(367,"code"),qx(368,"po-icon-edit"),og()()(),Cl(369,"td",24)(370,"em")(371,"strong"),qx(372,"(opcional)"),og()(),Cl(373,"p"),qx(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Cl(375,"a",27),qx(376,"Biblioteca de \xEDcones"),og(),qx(377,"."),og(),Cl(378,"pre")(379,"code"),qx(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),og()(),Cl(381,"p"),qx(382,"Para customizar o \xEDcone atrav\xE9s do "),Cl(383,"code"),qx(384,"TemplateRef"),og(),qx(385,", veja a documenta\xE7\xE3o da propriedade "),Cl(386,"code"),qx(387,"p-step-icon-done"),og(),qx(388,"."),og(),Cl(389,"blockquote")(390,"p"),qx(391,"Deve-se usar "),Cl(392,"code"),qx(393,"font-size: inherit"),og(),qx(394," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Cl(395,"tr",17)(396,"td",18)(397,"div",19)(398,"span",20),qx(399," p-step-icon-done"),Hl(400,"br"),og()()(),Cl(401,"td",21)(402,"code",25),qx(403,"string "),og(),Cl(404,"code",26),qx(405," TemplateRef<void>"),og()(),Cl(406,"td",23)(407,"p")(408,"code"),qx(409,"po-icon-ok"),og()()(),Cl(410,"td",24)(411,"em")(412,"strong"),qx(413,"(opcional)"),og()(),Cl(414,"p"),qx(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Cl(416,"a",27),qx(417,"Biblioteca de \xEDcones"),og()(),Cl(418,"pre")(419,"code"),qx(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),og()(),Cl(421,"p"),qx(422,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(423,"code"),qx(424,"TemplateRef"),og(),qx(425,", conforme exemplo abaixo:"),og(),Cl(426,"pre")(427,"code"),qx(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),og()(),Cl(429,"blockquote")(430,"p"),qx(431,"Deve-se usar "),Cl(432,"code"),qx(433,"font-size: inherit"),og(),qx(434," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Cl(435,"tr",17)(436,"td",18)(437,"div",28)(438,"span",29),qx(439," (p-change-step)"),Hl(440,"br"),og()()(),Cl(441,"td",21)(442,"code",30),qx(443,"EventEmitter"),og()(),Cl(444,"td",23),qx(445,"-"),og(),Cl(446,"td",24)(447,"p"),qx(448,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),Cl(449,"code"),qx(450,"po-stepper"),og(),qx(451,"."),og()()(),Cl(452,"tr",17)(453,"td",18)(454,"div",19)(455,"span",20),qx(456," p-orientation"),Hl(457,"br"),og()()(),Cl(458,"td",21)(459,"code",31),qx(460,"PoStepperOrientation"),og()(),Cl(461,"td",23)(462,"p")(463,"code"),qx(464,"PoStepperOrientation.Horizontal"),og()()(),Cl(465,"td",24)(466,"em")(467,"strong"),qx(468,"(opcional)"),og()(),Cl(469,"p"),qx(470,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Cl(471,"code"),qx(472,"po-stepper"),og(),qx(473,"."),og(),Cl(474,"blockquote")(475,"p"),qx(476,"Veja os valores v\xE1lidos no "),Cl(477,"em"),qx(478,"enum"),og(),Cl(479,"a",32),qx(480,"PoStepperOrientation"),og(),qx(481,"."),og()()()(),Cl(482,"tr",17)(483,"td",18)(484,"div",19)(485,"span",20),qx(486," p-sequential"),Hl(487,"br"),og()()(),Cl(488,"td",21)(489,"code",22),qx(490,"boolean"),og()(),Cl(491,"td",23)(492,"p")(493,"code"),qx(494,"true"),og()()(),Cl(495,"td",24)(496,"em")(497,"strong"),qx(498,"(opcional)"),og()(),Cl(499,"p"),qx(500,"Define se o "),Cl(501,"code"),qx(502,"po-stepper"),og(),qx(503," ser\xE1 sequencial ou aleat\xF3rio."),og(),Cl(504,"blockquote")(505,"p"),qx(506,"Ao utilizar o componente "),Cl(507,"a",6)(508,"strong"),qx(509,"po-step"),og()(),qx(510,", o valor desta propriedade sempre ser\xE1 verdadeiro."),og()()()(),Cl(511,"tr",17)(512,"td",18)(513,"div",19)(514,"span",20),qx(515," p-step"),Hl(516,"br"),og()()(),Cl(517,"td",21)(518,"code",33),qx(519,"number"),og()(),Cl(520,"td",23)(521,"p")(522,"code"),qx(523,"1"),og()()(),Cl(524,"td",24)(525,"em")(526,"strong"),qx(527,"(opcional)"),og()(),Cl(528,"p"),qx(529,"Controla o passo atual do "),Cl(530,"code"),qx(531,"po-stepper"),og(),qx(532,"."),og(),Cl(533,"blockquote")(534,"p"),qx(535,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Cl(536,"a",6)(537,"strong"),qx(538,"po-step"),og()(),qx(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Cl(540,"a",6)(541,"strong"),qx(542,"po-step"),og()(),qx(543,"."),og()()()(),Cl(544,"tr",17)(545,"td",18)(546,"div",19)(547,"span",20),qx(548," p-step-icons"),Hl(549,"br"),og()()(),Cl(550,"td",21)(551,"code",22),qx(552,"boolean"),og()(),Cl(553,"td",23)(554,"p")(555,"code"),qx(556,"false"),og()()(),Cl(557,"td",24)(558,"em")(559,"strong"),qx(560,"(opcional)"),og()(),Cl(561,"p"),Hl(562,"a",34),og(),Cl(563,"p"),qx(564,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),Cl(565,"em"),qx(566,"steps"),og(),qx(567,"."),og()()(),Cl(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),qx(572," p-step-size"),Hl(573,"br"),og()()(),Cl(574,"td",21)(575,"code",33),qx(576,"number"),og()(),Cl(577,"td",23)(578,"p")(579,"code"),qx(580,"24"),og()()(),Cl(581,"td",24)(582,"em")(583,"strong"),qx(584,"(opcional)"),og()(),Cl(585,"p"),qx(586,"Define o tamanho dos "),Cl(587,"em"),qx(588,"steps"),og(),qx(589," em "),Cl(590,"em"),qx(591,"pixels"),og(),qx(592,", possibilitando um maior destaque."),og(),Cl(593,"p"),qx(594,"O valor informado deve ser entre "),Cl(595,"code"),qx(596,"24"),og(),qx(597," e "),Cl(598,"code"),qx(599,"64"),og(),qx(600,"."),og(),Cl(601,"blockquote")(602,"p"),qx(603,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),Cl(604,"em"),qx(605,"default"),og(),qx(606,"."),og()()()(),Cl(607,"tr",17)(608,"td",18)(609,"div",19)(610,"span",20),qx(611," p-steps"),Hl(612,"br"),og()()(),Cl(613,"td",21)(614,"code",35),qx(615,"Array<PoStepperItem>"),og()(),Cl(616,"td",23),qx(617,"-"),og(),Cl(618,"td",24)(619,"em")(620,"strong"),qx(621,"(opcional)"),og()(),Cl(622,"p"),qx(623,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og(),Cl(624,"blockquote")(625,"p"),qx(626,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Cl(627,"a",6)(628,"strong"),qx(629,"po-step"),og()(),qx(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Cl(631,"a",6)(632,"strong"),qx(633,"po-step"),og()(),qx(634,"."),og()()()()(),Cl(635,"h3",13),qx(636,"M\xE9todos"),og(),Cl(637,"table",36)(638,"tr",17)(639,"th",37)(640,"div",19)(641,"h4")(642,"span",20),qx(643," active "),og()()()()(),Cl(644,"tr",24)(645,"td",24)(646,"p"),qx(647,"Altera o status do "),Cl(648,"em"),qx(649,"step"),og(),qx(650," para ativo."),og(),Cl(651,"blockquote")(652,"p"),qx(653,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Cl(654,"a",6)(655,"strong"),qx(656,"po-step"),og()(),qx(657,"."),og()()()()(),Cl(658,"h5")(659,"b"),qx(660,"Par\xE2metros"),og()(),Cl(661,"table",14)(662,"tr",15)(663,"th",16),qx(664,"Nome"),og(),Cl(665,"th",16),qx(666,"Tipo"),og(),Cl(667,"th",16),qx(668,"Descri\xE7\xE3o"),og()(),Cl(669,"tr",17)(670,"td",18),qx(671," index"),og(),Cl(672,"td",21)(673,"code",38),qx(674," number "),og()(),Cl(675,"td",24)(676,"p"),qx(677,"\xCDndice do "),Cl(678,"code"),qx(679,"po-step"),og(),qx(680," que se deseja ativar."),og()()()(),Hl(681,"br"),Cl(682,"table",36)(683,"tr",17)(684,"th",37)(685,"div",19)(686,"h4")(687,"span",20),qx(688," first "),og()()()()(),Cl(689,"tr",24)(690,"td",24)(691,"p"),qx(692,"Ativa o primeiro "),Cl(693,"em"),qx(694,"step"),og(),qx(695,"."),og(),Cl(696,"blockquote")(697,"p"),qx(698,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Cl(699,"a",6)(700,"strong"),qx(701,"po-step"),og()(),qx(702,"."),og()()()()(),Hl(703,"br"),Cl(704,"table",36)(705,"tr",17)(706,"th",37)(707,"div",19)(708,"h4")(709,"span",20),qx(710," next "),og()()()()(),Cl(711,"tr",24)(712,"td",24)(713,"p"),qx(714,"Ativa o pr\xF3ximo "),Cl(715,"em"),qx(716,"step"),og(),qx(717,"."),og(),Cl(718,"blockquote")(719,"p"),qx(720,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Cl(721,"a",6)(722,"strong"),qx(723,"po-step"),og()(),qx(724,"."),og()()()()(),Hl(725,"br"),Cl(726,"table",36)(727,"tr",17)(728,"th",37)(729,"div",19)(730,"h4")(731,"span",20),qx(732," previous "),og()()()()(),Cl(733,"tr",24)(734,"td",24)(735,"p"),qx(736,"Ativa o "),Cl(737,"em"),qx(738,"step"),og(),qx(739," anterior."),og(),Cl(740,"blockquote")(741,"p"),qx(742,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Cl(743,"a",6)(744,"strong"),qx(745,"po-step"),og()(),qx(746,"."),og()()()()(),Hl(747,"br"),Cl(748,"h3"),qx(749,"Interfaces"),og(),Cl(750,"h4",39)(751,"code",5),qx(752,"PoStepperItem"),og()(),Cl(753,"div",2)(754,"p"),qx(755,"Interface para defini\xE7\xE3o dos "),Cl(756,"em"),qx(757,"steps"),og(),qx(758," do componente "),Cl(759,"code"),qx(760,"po-stepper"),og(),qx(761," quando utilizada a propriedade "),Cl(762,"code"),qx(763,"p-steps"),og(),qx(764,"."),og()(),Cl(765,"h4",13),qx(766,"Propriedades"),og(),Cl(767,"table",14)(768,"tr",15)(769,"th",16),qx(770,"Nome"),og(),Cl(771,"th",16),qx(772,"Tipo"),og(),Cl(773,"th",16),qx(774,"Descri\xE7\xE3o"),og()(),Cl(775,"tr",17)(776,"td",18)(777,"div",19)(778,"span",20),qx(779," iconActive"),Hl(780,"br"),og()()(),Cl(781,"td",21)(782,"code",25),qx(783,"string "),og(),Cl(784,"code",26),qx(785," TemplateRef<void>"),og()(),Cl(786,"td",24)(787,"em")(788,"strong"),qx(789,"(opcional)"),og()(),Cl(790,"p"),qx(791,"Define o \xEDcone do "),Cl(792,"em"),qx(793,"step"),og(),qx(794," ativo."),og()()(),Cl(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),qx(799," iconDefault"),Hl(800,"br"),og()()(),Cl(801,"td",21)(802,"code",25),qx(803,"string "),og(),Cl(804,"code",26),qx(805," TemplateRef<void>"),og()(),Cl(806,"td",24)(807,"em")(808,"strong"),qx(809,"(opcional)"),og()(),Cl(810,"p"),qx(811,"Define o \xEDcone do "),Cl(812,"em"),qx(813,"step"),og(),qx(814," default."),og()()(),Cl(815,"tr",17)(816,"td",18)(817,"div",19)(818,"span",20),qx(819," iconDone"),Hl(820,"br"),og()()(),Cl(821,"td",21)(822,"code",25),qx(823,"string "),og(),Cl(824,"code",26),qx(825," TemplateRef<void>"),og()(),Cl(826,"td",24)(827,"em")(828,"strong"),qx(829,"(opcional)"),og()(),Cl(830,"p"),qx(831,"Define o \xEDcone do "),Cl(832,"em"),qx(833,"step"),og(),qx(834," conclu\xEDdo."),og()()(),Cl(835,"tr",17)(836,"td",18)(837,"div",19)(838,"span",20),qx(839," id"),Hl(840,"br"),og()()(),Cl(841,"td",21)(842,"code",25),qx(843,"string"),og()(),Cl(844,"td",24)(845,"em")(846,"strong"),qx(847,"(opcional)"),og()(),Cl(848,"p"),qx(849,"Identificador \xFAnico do step."),og()()(),Cl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),qx(854," label"),Hl(855,"br"),og()()(),Cl(856,"td",21)(857,"code",25),qx(858,"string"),og()(),Cl(859,"td",24)(860,"em")(861,"strong"),qx(862,"(opcional)"),og()(),Cl(863,"p"),qx(864,"Texto do item do stepper."),og()()(),Cl(865,"tr",17)(866,"td",18)(867,"div",19)(868,"span",20),qx(869," status"),Hl(870,"br"),og()()(),Cl(871,"td",21)(872,"code",40),qx(873,"PoStepperStatus"),og()(),Cl(874,"td",24)(875,"em")(876,"strong"),qx(877,"(opcional)"),og()(),Cl(878,"p"),qx(879,"Define o estado de exibi\xE7\xE3o do "),Cl(880,"em"),qx(881,"step"),og(),qx(882,"."),og()()()(),Cl(883,"h3"),qx(884,"Enums"),og(),Cl(885,"h4",4)(886,"code",5),qx(887,"PoStepperOrientation"),og()(),Cl(888,"div",2)(889,"p"),Hl(890,"a",41),og(),Cl(891,"p")(892,"em"),qx(893,"Enums"),og(),qx(894," para defini\xE7\xE3o da orienta\xE7\xE3o do "),Cl(895,"code"),qx(896,"po-stepper"),og(),qx(897,"."),og()(),Cl(898,"h4",13),qx(899,"Propriedades"),og(),Cl(900,"table",14)(901,"tr",15)(902,"th",16),qx(903,"Nome"),og(),Cl(904,"th",16),qx(905,"Descri\xE7\xE3o"),og()(),Cl(906,"tr",17)(907,"td",18)(908,"div",19)(909,"span",20),qx(910," Horizontal"),Hl(911,"br"),og()()(),Cl(912,"td",24)(913,"p"),qx(914,"Define a exibi\xE7\xE3o do componente na horizontal."),og()()(),Cl(915,"tr",17)(916,"td",18)(917,"div",19)(918,"span",20),qx(919," Vertical"),Hl(920,"br"),og()()(),Cl(921,"td",24)(922,"p"),qx(923,"Define a exibi\xE7\xE3o do componente na vertical."),og()()()(),Cl(924,"h4",4)(925,"code",5),qx(926,"PoStepperStatus"),og()(),Cl(927,"div",2)(928,"p"),Hl(929,"a",42),og(),Cl(930,"p")(931,"em"),qx(932,"Enums"),og(),qx(933," para os status do "),Cl(934,"code"),qx(935,"po-stepper"),og(),qx(936," quando utilizada a propriedade "),Cl(937,"code"),qx(938,"p-steps"),og(),qx(939,"."),og()(),Cl(940,"h4",13),qx(941,"Propriedades"),og(),Cl(942,"table",14)(943,"tr",15)(944,"th",16),qx(945,"Nome"),og(),Cl(946,"th",16),qx(947,"Descri\xE7\xE3o"),og()(),Cl(948,"tr",17)(949,"td",18)(950,"div",19)(951,"span",20),qx(952," Active"),Hl(953,"br"),og()()(),Cl(954,"td",24)(955,"p"),qx(956,"Define o estado do "),Cl(957,"em"),qx(958,"step"),og(),qx(959," como ativo."),og()()(),Cl(960,"tr",17)(961,"td",18)(962,"div",19)(963,"span",20),qx(964," Default"),Hl(965,"br"),og()()(),Cl(966,"td",24)(967,"p"),qx(968,"Define o estado do "),Cl(969,"em"),qx(970,"step"),og(),qx(971," como padr\xE3o."),og()()(),Cl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),qx(976," Disabled"),Hl(977,"br"),og()()(),Cl(978,"td",24)(979,"p"),qx(980,"Define o estado do "),Cl(981,"em"),qx(982,"step"),og(),qx(983," como desabilitado."),og()()(),Cl(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),qx(988," Done"),Hl(989,"br"),og()()(),Cl(990,"td",24)(991,"p"),qx(992,"Define o estado do "),Cl(993,"em"),qx(994,"step"),og(),qx(995," como conclu\xEDdo."),og()()(),Cl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),qx(1e3," Error"),Hl(1001,"br"),og()()(),Cl(1002,"td",24)(1003,"p"),qx(1004,"Define o estado do "),Cl(1005,"em"),qx(1006,"step"),og(),qx(1007," com erro."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var He=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt$1("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-stepper-doc"),og(),Cl(4,"po-tab",3),dt$1("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ve,Ae,Le,qe,Oe,Re],encapsulation:2})}return a})();var bt=[{path:"",component:He}],je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(bt),bL]})}return a})();var En=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,je]})}return a})();export{En as DocPoStepperModule};