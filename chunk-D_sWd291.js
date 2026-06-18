import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,dH as ev,dI as Es,bI as Sa,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,bH as E3,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aq as ux,aO as Dw,aP as t0,at as dx,cn as s3,a3 as pNe,ba as bNe,aQ as px,aR as hx,br as oN,aS as gx,aA as Tx,cH as iN,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var Se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic"]],standalone:false,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(r,i){r&1&&Wl(0,"po-tag",0);},dependencies:[Sa],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tag Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-tag p-value="PO Tag"> </po-tag>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tag-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ke,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return a})();function Me(a,c){if(a&1){let l=Ex();Sl(0,"po-select",14),Ew("ngModelChange",function(i){Xy(l);let g=Tx();return tN(g.icon,i)||(g.icon=i),Qy(i)}),sg(),JA();}if(a&2){let l=Tx();Dw("ngModel",l.icon),tw("p-options",l.iconList),t0();}}function Be(a,c){if(a&1){let l=Ex();Sl(0,"po-switch",15),Ew("ngModelChange",function(i){Xy(l);let g=Tx();return tN(g.icon,i)||(g.icon=i),Qy(i)}),sg(),JA();}if(a&2){let l=Tx();Dw("ngModel",l.icon),t0();}}var xe=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:ev.Horizontal},{label:"Vertical",value:ev.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:Es.Info},{label:"Danger",value:Es.Danger},{label:"Success",value:Es.Success},{label:"Warning",value:Es.Warning},{label:"Neutral",value:Es.Neutral}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}propertiesChange(l){let r=[...this.propertiesOptions];l.includes("removable")?(r[1]={value:"disabled",label:"Disabled",disabled:false},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!=="disabled");}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs"]],standalone:false,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let g=Ex();Sl(0,"po-tag",1),ht("p-click",function(){return i.changeEvent("p-click")}),sg(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),sg(),Wl(4,"po-divider"),Sl(5,"form",null,0)(7,"div",2)(8,"po-input",4),Ew("ngModelChange",function(d){return Xy(g),tN(i.label,d)||(i.label=d),Qy(d)}),sg(),JA(),Sl(9,"po-input",5),Ew("ngModelChange",function(d){return Xy(g),tN(i.value,d)||(i.value=d),Qy(d)}),sg(),JA(),sg(),Sl(10,"div",2)(11,"po-input",6),Ew("ngModelChange",function(d){return Xy(g),tN(i.color,d)||(i.color=d),Qy(d)}),sg(),JA(),Sl(12,"po-input",7),Ew("ngModelChange",function(d){return Xy(g),tN(i.textColor,d)||(i.textColor=d),Qy(d)}),sg(),JA(),ux(13,Me,1,2,"po-select",8),Sl(14,"po-checkbox-group",9),Ew("ngModelChange",function(d){return Xy(g),tN(i.properties,d)||(i.properties=d),Qy(d)}),ht("p-change",function(d){return i.propertiesChange(d)}),sg(),JA(),ux(15,Be,1,1,"po-switch",10),sg(),Sl(16,"div",2)(17,"po-radio-group",11),Ew("ngModelChange",function(d){return Xy(g),tN(i.orientation,d)||(i.orientation=d),Qy(d)}),sg(),JA(),Sl(18,"po-radio-group",12),Ew("ngModelChange",function(d){return Xy(g),tN(i.type,d)||(i.type=d),Qy(d)}),sg(),JA(),sg(),Sl(19,"div",2)(20,"po-button",13),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(tw("p-color",i.color)("p-disabled",i.properties.includes("disabled"))("p-removable",i.properties.includes("removable"))("p-icon",i.icon)("p-text-color",i.textColor)("p-label",i.label)("p-orientation",i.orientation)("p-type",i.type)("p-value",i.value),Vp(3),tw("p-value",i.event),Vp(5),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.value),t0(),Vp(2),Dw("ngModel",i.color),t0(),Vp(),Dw("ngModel",i.textColor),t0(),Vp(),dx(i.type?-1:13),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),dx(i.type?15:-1),Vp(2),Dw("ngModel",i.orientation),tw("p-options",i.orientationOptions),t0(),Vp(),Dw("ngModel",i.type),tw("p-options",i.typeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,Ghe,E3,Sa,Qhe],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tag Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    @if (!type) {
      <po-select class="po-md-6 po-mt-2" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconList">
      </po-select>
    }

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    @if (type) {
      <po-switch class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styleUrls: ['./sample-po-tag-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'removable', label: 'Removable' }];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[1] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      this.propertiesOptions = value.filter(option => option.value !== 'disabled');
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-tag-labs/sample-po-tag-labs.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-tag-labs"),sg(),Wl(29,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,xe],encapsulation:2})}return a})();function Oe(a,c){if(a&1&&Wl(0,"po-tag",12),a&2){let l=c.$implicit;tw("p-label",l.label)("p-type",l.type)("p-value",l.value);}}function Ie(a,c){if(a&1&&(Sl(0,"po-widget",15)(1,"div",3),Wl(2,"po-info",16)(3,"po-tag",17),sg()()),a&2){let l=c.$implicit;Vp(2),tw("p-label",l.label)("p-value",l.value),Vp(),tw("p-type",l.type)("p-value",l.text);}}function Ve(a,c){if(a&1&&(Sl(0,"po-tab",14),px(1,Ie,4,4,"po-widget",15,hx),sg()),a&2){let l=c.$implicit;tw("p-label",iN(l.month)),Vp(),gx(l.details);}}var fe=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:false,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),Wl(5,"po-avatar",5),sg(),Sl(6,"div",6)(7,"div",7),Wl(8,"po-info",8)(9,"po-tag",9),sg(),Sl(10,"div",7),Wl(11,"po-info",10),sg()()()(),Sl(12,"po-widget",11)(13,"div",3),px(14,Oe,1,3,"po-tag",12,hx),sg()()(),Sl(16,"po-widget",13)(17,"po-tabs"),px(18,Ve,3,2,"po-tab",14,hx),sg()()()),r&2&&(Vp(5),tw("p-src",oN("assets/graphics/",i.userData.photo)),Vp(3),tw("p-value",i.userData.name),Vp(3),tw("p-value",i.userData.email),Vp(3),gx(i.investiments),Vp(4),gx(i.items));},dependencies:[s3,Sa,Qhe,pNe,Gme,Qme,bNe],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tag - Bank Account"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        @for (investiment of investiments; track investiment) {
          <po-tag
            class="po-md-6 po-lg-3"
            [p-label]="investiment.label"
            [p-type]="investiment.type"
            [p-value]="investiment.value"
          >
          </po-tag>
        }
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      @for (item of items; track item) {
        <po-tab p-active p-label="{ { item.month }}">
          @for (item of item.details; track item) {
            <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1">
              <div class="po-row">
                <po-info
                  class="po-lg-9 po-md-8"
                  p-label-size="6"
                  p-orientation="horizontal"
                  [p-label]="item.label"
                  [p-value]="item.value"
                >
                </po-info>
                <po-tag
                  class="po-lg-3 po-md-4"
                  p-icon
                  p-orientation="horizontal"
                  [p-type]="item.type"
                  [p-value]="item.text"
                >
                </po-tag>
              </div>
            </po-widget>
          }
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tag-bank-account"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,qe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,fe],encapsulation:2})}return a})();var j=(a,c)=>c.color,Ne=(a,c)=>c.name;function He(a,c){if(a&1&&Wl(0,"po-tag",3),a&2){let l=c.$implicit;tw("p-color",l.color)("p-value",l.label);}}function Re(a,c){if(a&1&&Wl(0,"po-tag",5),a&2){let l=c.$implicit;tw("p-color",l.color)("p-label",l.label)("p-value",l.value);}}function $e(a,c){if(a&1&&Wl(0,"po-tag",7),a&2){let l=c.$implicit;tw("p-color",l.color)("p-icon",l.icon)("p-value",l.label);}}function je(a,c){if(a&1&&Wl(0,"po-tag",10),a&2){let l=c.$implicit;tw("p-color",l.color)("p-value",l.label);}}function Ge(a,c){if(a&1&&(Sl(0,"po-tab",9)(1,"div",2),px(2,je,1,2,"po-tag",10,j),sg()()),a&2){let l=c.$implicit;tw("p-label",l.name),Vp(2),gx(l.tags);}}var Ce=(()=>{class a{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,"0");return {label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:"Ativo",value:"Em operacao",color:"caption-tag-01"},{label:"Pendente",value:"Aguardando aprovacao",color:"caption-tag-06"},{label:"Em analise",value:"Verificacao interna",color:"caption-tag-11"},{label:"Concluido",value:"Finalizado com sucesso",color:"caption-tag-16"},{label:"Cancelado",value:"Operacao cancelada",color:"caption-tag-21"},{label:"Expirado",value:"Prazo excedido",color:"caption-tag-26"},{label:"Bloqueado",value:"Acesso restrito",color:"caption-tag-31"}];categories=[{label:"Financeiro",color:"caption-tag-03",icon:"an an-currency-circle-dollar"},{label:"Recursos Humanos",color:"caption-tag-08",icon:"an an-users"},{label:"Logistica",color:"caption-tag-13",icon:"an an-truck"},{label:"Vendas",color:"caption-tag-18",icon:"an an-shopping-cart-simple"},{label:"Suporte",color:"caption-tag-23",icon:"an an-headset"},{label:"Marketing",color:"caption-tag-28",icon:"an an-megaphone-simple"},{label:"TI",color:"caption-tag-33",icon:"an an-desktop-tower"}];families=[{name:"Familia 01-05",tags:[{label:"caption-tag-01",color:"caption-tag-01"},{label:"caption-tag-02",color:"caption-tag-02"},{label:"caption-tag-03",color:"caption-tag-03"},{label:"caption-tag-04",color:"caption-tag-04"},{label:"caption-tag-05",color:"caption-tag-05"}]},{name:"Familia 06-10",tags:[{label:"caption-tag-06",color:"caption-tag-06"},{label:"caption-tag-07",color:"caption-tag-07"},{label:"caption-tag-08",color:"caption-tag-08"},{label:"caption-tag-09",color:"caption-tag-09"},{label:"caption-tag-10",color:"caption-tag-10"}]},{name:"Familia 11-15",tags:[{label:"caption-tag-11",color:"caption-tag-11"},{label:"caption-tag-12",color:"caption-tag-12"},{label:"caption-tag-13",color:"caption-tag-13"},{label:"caption-tag-14",color:"caption-tag-14"},{label:"caption-tag-15",color:"caption-tag-15"}]},{name:"Familia 16-20",tags:[{label:"caption-tag-16",color:"caption-tag-16"},{label:"caption-tag-17",color:"caption-tag-17"},{label:"caption-tag-18",color:"caption-tag-18"},{label:"caption-tag-19",color:"caption-tag-19"},{label:"caption-tag-20",color:"caption-tag-20"}]},{name:"Familia 21-25",tags:[{label:"caption-tag-21",color:"caption-tag-21"},{label:"caption-tag-22",color:"caption-tag-22"},{label:"caption-tag-23",color:"caption-tag-23"},{label:"caption-tag-24",color:"caption-tag-24"},{label:"caption-tag-25",color:"caption-tag-25"}]},{name:"Familia 26-30",tags:[{label:"caption-tag-26",color:"caption-tag-26"},{label:"caption-tag-27",color:"caption-tag-27"},{label:"caption-tag-28",color:"caption-tag-28"},{label:"caption-tag-29",color:"caption-tag-29"},{label:"caption-tag-30",color:"caption-tag-30"}]},{name:"Familia 31-35",tags:[{label:"caption-tag-31",color:"caption-tag-31"},{label:"caption-tag-32",color:"caption-tag-32"},{label:"caption-tag-33",color:"caption-tag-33"},{label:"caption-tag-34",color:"caption-tag-34"},{label:"caption-tag-35",color:"caption-tag-35"}]}];static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors"]],standalone:false,decls:17,vars:0,consts:[["p-title","Caption Tag Colors"],["p-title","Paleta completa - 35 cores",1,"po-md-12","po-mb-1"],[1,"po-row"],[1,"po-md-3","po-lg-2","po-mb-1",3,"p-color","p-value"],["p-title","Status de processos",1,"po-md-12","po-mb-1"],["p-orientation","horizontal",1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-label","p-value"],["p-title","Categorias com icones",1,"po-md-12"],[1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-icon","p-value"],["p-title","Familias de cores",1,"po-md-12","po-mb-1"],[3,"p-label"],[1,"po-md-4","po-lg-2","po-mb-1",3,"p-color","p-value"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-widget",1)(2,"div",2),px(3,He,1,2,"po-tag",3,j),sg()(),Sl(5,"po-widget",4)(6,"div",2),px(7,Re,1,3,"po-tag",5,j),sg()(),Sl(9,"po-widget",6)(10,"div",2),px(11,$e,1,3,"po-tag",7,j),sg()(),Sl(13,"po-widget",8)(14,"po-tabs"),px(15,Ge,4,1,"po-tab",9,Ne),sg()()()),r&2&&(Vp(3),gx(i.captionTags),Vp(4),gx(i.statusItems),Vp(4),gx(i.categories),Vp(4),gx(i.families));},dependencies:[Sa,pNe,Gme,Qme,bNe],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tag - Caption Tag Colors"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Caption Tag Colors">
  <po-widget class="po-md-12 po-mb-1" p-title="Paleta completa - 35 cores">
    <div class="po-row">
      @for (tag of captionTags; track tag.color) {
        <po-tag class="po-md-3 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Status de processos">
    <div class="po-row">
      @for (item of statusItems; track item.color) {
        <po-tag
          class="po-md-4 po-lg-3 po-mb-1"
          [p-color]="item.color"
          [p-label]="item.label"
          [p-value]="item.value"
          p-orientation="horizontal"
        >
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12" p-title="Categorias com icones">
    <div class="po-row">
      @for (cat of categories; track cat.color) {
        <po-tag class="po-md-4 po-lg-3 po-mb-1" [p-color]="cat.color" [p-icon]="cat.icon" [p-value]="cat.label">
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Familias de cores">
    <po-tabs>
      @for (family of families; track family.name) {
        <po-tab [p-label]="family.name">
          <div class="po-row">
            @for (tag of family.tags; track tag.color) {
              <po-tag class="po-md-4 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
            }
          </div>
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-caption-tag-colors',
  templateUrl: './sample-po-tag-caption-tag-colors.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagCaptionTagColorsComponent {
  captionTags = Array.from({ length: 35 }, (_, i) => {
    const index = String(i + 1).padStart(2, '0');
    return { label: \`Caption Tag \${index}\`, color: \`caption-tag-\${index}\` };
  });

  statusItems = [
    { label: 'Ativo', value: 'Em operacao', color: 'caption-tag-01' },
    { label: 'Pendente', value: 'Aguardando aprovacao', color: 'caption-tag-06' },
    { label: 'Em analise', value: 'Verificacao interna', color: 'caption-tag-11' },
    { label: 'Concluido', value: 'Finalizado com sucesso', color: 'caption-tag-16' },
    { label: 'Cancelado', value: 'Operacao cancelada', color: 'caption-tag-21' },
    { label: 'Expirado', value: 'Prazo excedido', color: 'caption-tag-26' },
    { label: 'Bloqueado', value: 'Acesso restrito', color: 'caption-tag-31' }
  ];

  categories = [
    { label: 'Financeiro', color: 'caption-tag-03', icon: 'an an-currency-circle-dollar' },
    { label: 'Recursos Humanos', color: 'caption-tag-08', icon: 'an an-users' },
    { label: 'Logistica', color: 'caption-tag-13', icon: 'an an-truck' },
    { label: 'Vendas', color: 'caption-tag-18', icon: 'an an-shopping-cart-simple' },
    { label: 'Suporte', color: 'caption-tag-23', icon: 'an an-headset' },
    { label: 'Marketing', color: 'caption-tag-28', icon: 'an an-megaphone-simple' },
    { label: 'TI', color: 'caption-tag-33', icon: 'an an-desktop-tower' }
  ];

  families = [
    {
      name: 'Familia 01-05',
      tags: [
        { label: 'caption-tag-01', color: 'caption-tag-01' },
        { label: 'caption-tag-02', color: 'caption-tag-02' },
        { label: 'caption-tag-03', color: 'caption-tag-03' },
        { label: 'caption-tag-04', color: 'caption-tag-04' },
        { label: 'caption-tag-05', color: 'caption-tag-05' }
      ]
    },
    {
      name: 'Familia 06-10',
      tags: [
        { label: 'caption-tag-06', color: 'caption-tag-06' },
        { label: 'caption-tag-07', color: 'caption-tag-07' },
        { label: 'caption-tag-08', color: 'caption-tag-08' },
        { label: 'caption-tag-09', color: 'caption-tag-09' },
        { label: 'caption-tag-10', color: 'caption-tag-10' }
      ]
    },
    {
      name: 'Familia 11-15',
      tags: [
        { label: 'caption-tag-11', color: 'caption-tag-11' },
        { label: 'caption-tag-12', color: 'caption-tag-12' },
        { label: 'caption-tag-13', color: 'caption-tag-13' },
        { label: 'caption-tag-14', color: 'caption-tag-14' },
        { label: 'caption-tag-15', color: 'caption-tag-15' }
      ]
    },
    {
      name: 'Familia 16-20',
      tags: [
        { label: 'caption-tag-16', color: 'caption-tag-16' },
        { label: 'caption-tag-17', color: 'caption-tag-17' },
        { label: 'caption-tag-18', color: 'caption-tag-18' },
        { label: 'caption-tag-19', color: 'caption-tag-19' },
        { label: 'caption-tag-20', color: 'caption-tag-20' }
      ]
    },
    {
      name: 'Familia 21-25',
      tags: [
        { label: 'caption-tag-21', color: 'caption-tag-21' },
        { label: 'caption-tag-22', color: 'caption-tag-22' },
        { label: 'caption-tag-23', color: 'caption-tag-23' },
        { label: 'caption-tag-24', color: 'caption-tag-24' },
        { label: 'caption-tag-25', color: 'caption-tag-25' }
      ]
    },
    {
      name: 'Familia 26-30',
      tags: [
        { label: 'caption-tag-26', color: 'caption-tag-26' },
        { label: 'caption-tag-27', color: 'caption-tag-27' },
        { label: 'caption-tag-28', color: 'caption-tag-28' },
        { label: 'caption-tag-29', color: 'caption-tag-29' },
        { label: 'caption-tag-30', color: 'caption-tag-30' }
      ]
    },
    {
      name: 'Familia 31-35',
      tags: [
        { label: 'caption-tag-31', color: 'caption-tag-31' },
        { label: 'caption-tag-32', color: 'caption-tag-32' },
        { label: 'caption-tag-33', color: 'caption-tag-33' },
        { label: 'caption-tag-34', color: 'caption-tag-34' },
        { label: 'caption-tag-35', color: 'caption-tag-35' }
      ]
    }
  ];
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tag-caption-tag-colors"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Je,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ce],encapsulation:2})}return a})();var ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-doc"]],standalone:false,decls:1168,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoTagModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-tag"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoTagComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),sg(),Sl(18,"p"),Jx(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),Sl(20,"em"),Jx(21,"click"),sg(),Jx(22," quanto atrav\xE9s das teclas "),Sl(23,"em"),Jx(24,"enter/space"),sg(),Jx(25,` enquanto navega
utilizando a tecla `),Sl(26,"em"),Jx(27,"tab"),sg(),Jx(28,"."),sg(),Sl(29,"p"),Jx(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),sg(),Sl(31,"h4"),Jx(32,"Tokens customiz\xE1veis"),sg(),Sl(33,"p"),Jx(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(35,"blockquote")(36,"p"),Jx(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(38,"a",6),Jx(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(40,"."),sg()(),Sl(41,"table")(42,"thead")(43,"tr")(44,"th"),Jx(45,"Propriedade"),sg(),Sl(46,"th"),Jx(47,"Descri\xE7\xE3o"),sg(),Sl(48,"th"),Jx(49,"Valor Padr\xE3o"),sg()()(),Sl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),Jx(54,"Default Values"),sg()(),Wl(55,"td")(56,"td"),sg(),Sl(57,"tr")(58,"td")(59,"code"),Jx(60,"--font-family"),sg()(),Sl(61,"td"),Jx(62,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(63,"td")(64,"code"),Jx(65,"var(--font-family-theme)"),sg()()(),Sl(66,"tr")(67,"td")(68,"code"),Jx(69,"--font-size"),sg()(),Sl(70,"td"),Jx(71,"Tamanho da fonte"),sg(),Sl(72,"td")(73,"code"),Jx(74,"var(--font-size-sm)"),sg()()(),Sl(75,"tr")(76,"td")(77,"code"),Jx(78,"--line-height"),sg()(),Sl(79,"td"),Jx(80,"Tamanho da label"),sg(),Sl(81,"td")(82,"code"),Jx(83,"var(---line-height-sm)"),sg()()(),Sl(84,"tr")(85,"td")(86,"code"),Jx(87,"--border-radius"),sg()(),Sl(88,"td"),Jx(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(90,"td")(91,"code"),Jx(92,"var(--border-radius-pill)"),sg()()(),Sl(93,"tr")(94,"td")(95,"code"),Jx(96,"--gap"),sg()(),Sl(97,"td"),Jx(98,"Espa\xE7amento entre o label e o value"),sg(),Sl(99,"td")(100,"code"),Jx(101,"var(--spacing-xs)"),sg()()(),Sl(102,"tr")(103,"td")(104,"strong"),Jx(105,"Neutral"),sg()(),Wl(106,"td")(107,"td"),sg(),Sl(108,"tr")(109,"td")(110,"code"),Jx(111,"--color-neutral"),sg()(),Sl(112,"td"),Jx(113,"Cor principal no estado neutral"),sg(),Sl(114,"td")(115,"code"),Jx(116,"var(--color-neutral-light-10)"),sg()()(),Sl(117,"tr")(118,"td")(119,"code"),Jx(120,"--text-color-positive"),sg()(),Sl(121,"td"),Jx(122,"Cor do texto no estado neutral"),sg(),Sl(123,"td")(124,"code"),Jx(125,"var(--color-neutral-dark-80)"),sg()()(),Sl(126,"tr")(127,"td")(128,"strong"),Jx(129,"Positive"),sg()(),Wl(130,"td")(131,"td"),sg(),Sl(132,"tr")(133,"td")(134,"code"),Jx(135,"--color-positive"),sg()(),Sl(136,"td"),Jx(137,"Cor principal no estado positive"),sg(),Sl(138,"td")(139,"code"),Jx(140,"var(--color-feedback-positive-lightest)"),sg()()(),Sl(141,"tr")(142,"td")(143,"code"),Jx(144,"--text-color-positive"),sg()(),Sl(145,"td"),Jx(146,"Cor do texto no estado positive"),sg(),Sl(147,"td")(148,"code"),Jx(149,"var(--color-feedback-positive-dark)"),sg()()(),Sl(150,"tr")(151,"td")(152,"strong"),Jx(153,"Negative"),sg()(),Wl(154,"td")(155,"td"),sg(),Sl(156,"tr")(157,"td")(158,"code"),Jx(159,"--color-negative"),sg()(),Sl(160,"td"),Jx(161,"Cor principal no estado danger"),sg(),Sl(162,"td")(163,"code"),Jx(164,"var(--color-feedback-negative-lightest)"),sg()()(),Sl(165,"tr")(166,"td")(167,"code"),Jx(168,"--text-color-negative"),sg()(),Sl(169,"td"),Jx(170,"Cor do texto no estado danger"),sg(),Sl(171,"td")(172,"code"),Jx(173,"var(--color-feedback-negative-darker)"),sg()()(),Sl(174,"tr")(175,"td")(176,"strong"),Jx(177,"Warning"),sg()(),Wl(178,"td")(179,"td"),sg(),Sl(180,"tr")(181,"td")(182,"code"),Jx(183,"--color-tag-warning"),sg()(),Sl(184,"td"),Jx(185,"Cor principal no estado warning"),sg(),Sl(186,"td")(187,"code"),Jx(188,"var(--color-feedback-warning-lightest)"),sg()()(),Sl(189,"tr")(190,"td")(191,"code"),Jx(192,"--text-color-warning"),sg()(),Sl(193,"td"),Jx(194,"Cor do texto no estado warning"),sg(),Sl(195,"td")(196,"code"),Jx(197,"var(--color-feedback-warning-darkest)"),sg()()(),Sl(198,"tr")(199,"td")(200,"strong"),Jx(201,"Info"),sg()(),Wl(202,"td")(203,"td"),sg(),Sl(204,"tr")(205,"td")(206,"code"),Jx(207,"--color-info"),sg()(),Sl(208,"td"),Jx(209,"Cor principal no estado info"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-feedback-info-lightest)"),sg()()(),Sl(213,"tr")(214,"td")(215,"code"),Jx(216,"--text-color-info"),sg()(),Sl(217,"td"),Jx(218,"Cor do texto no estado info"),sg(),Sl(219,"td")(220,"code"),Jx(221,"var(--color-feedback-info-dark)"),sg()()(),Sl(222,"tr")(223,"td")(224,"strong"),Jx(225,"Removable"),sg()(),Wl(226,"td")(227,"td"),sg(),Sl(228,"tr")(229,"td")(230,"code"),Jx(231,"--color"),sg()(),Sl(232,"td"),Jx(233,"Cor principal quando removable"),sg(),Sl(234,"td")(235,"code"),Jx(236,"var(--color-brand-01-lightest)"),sg()()(),Sl(237,"tr")(238,"td")(239,"code"),Jx(240,"--border-color"),sg()(),Sl(241,"td"),Jx(242,"Cor de borda quando removable \xA0"),sg(),Sl(243,"td")(244,"code"),Jx(245,"var(--color-brand-01-lighter)"),sg()()(),Sl(246,"tr")(247,"td")(248,"code"),Jx(249,"--color-icon"),sg()(),Sl(250,"td"),Jx(251,"Cor do \xEDcone quando removable \xA0"),sg(),Sl(252,"td")(253,"code"),Jx(254,"var(--color-action-default)"),sg()()(),Sl(255,"tr")(256,"td")(257,"code"),Jx(258,"--text-color"),sg()(),Sl(259,"td"),Jx(260,"Cor do texto quando removable \xA0"),sg(),Sl(261,"td")(262,"code"),Jx(263,"var(--color-neutral-dark-80)"),sg()()(),Sl(264,"tr")(265,"td")(266,"code"),Jx(267,"--color-hover"),sg()(),Sl(268,"td"),Jx(269,"Cor do hover no estado removable \xA0"),sg(),Sl(270,"td")(271,"code"),Jx(272,"var(--color-brand-01-lighter)"),sg()()(),Sl(273,"tr")(274,"td")(275,"strong"),Jx(276,"Focused"),sg()(),Wl(277,"td")(278,"td"),sg(),Sl(279,"tr")(280,"td")(281,"code"),Jx(282,"--outline-color-focused"),sg()(),Sl(283,"td"),Jx(284,"Cor do outline do estado de focus"),sg(),Sl(285,"td")(286,"code"),Jx(287,"var(--color-action-focus)"),sg()()(),Sl(288,"tr")(289,"td")(290,"strong"),Jx(291,"Disabled"),sg()(),Wl(292,"td")(293,"td"),sg(),Sl(294,"tr")(295,"td")(296,"code"),Jx(297,"--color-disabled"),sg()(),Sl(298,"td"),Jx(299,"Cor principal no estado disabled"),sg(),Sl(300,"td")(301,"code"),Jx(302,"var(--color-neutral-light-20)"),sg()()(),Sl(303,"tr")(304,"td")(305,"code"),Jx(306,"--border-color-disabled"),sg()(),Sl(307,"td"),Jx(308,"Cor da borda no estado disabled \xA0"),sg(),Sl(309,"td")(310,"code"),Jx(311,"var(--color-action-disabled)"),sg()()(),Sl(312,"tr")(313,"td")(314,"code"),Jx(315,"--color-icon-disabled"),sg()(),Sl(316,"td"),Jx(317,"Cor do icone no estado disabled \xA0"),sg(),Sl(318,"td")(319,"code"),Jx(320,"var(--color-action-disabled)"),sg()()(),Sl(321,"tr")(322,"td")(323,"code"),Jx(324,"--text-color-disabled"),sg()(),Sl(325,"td"),Jx(326,"Cor do texto no estado disabled \xA0"),sg(),Sl(327,"td")(328,"code"),Jx(329,"var(--color-neutral-mid-60)"),sg()()()()()(),Sl(330,"div",7)(331,"h4",8),Jx(332,"Seletor"),sg(),Sl(333,"pre",9),Jx(334,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),sg()(),Sl(335,"h4",10),Jx(336,"Propriedades"),sg(),Sl(337,"table",11)(338,"tr",12)(339,"th",13),Jx(340,"Nome"),sg(),Sl(341,"th",13),Jx(342,"Tipo"),sg(),Sl(343,"th",13),Jx(344,"Padr\xE3o"),sg(),Sl(345,"th",13),Jx(346,"Descri\xE7\xE3o"),sg()(),Sl(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),Jx(351," (p-click)"),Wl(352,"br"),sg()()(),Sl(353,"td",18)(354,"code",19),Jx(355,"EventEmitter"),sg()(),Sl(356,"td",20),Jx(357,"-"),sg(),Sl(358,"td",21)(359,"em")(360,"strong"),Jx(361,"(opcional)"),sg()(),Sl(362,"p"),Jx(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),Sl(364,"code"),Jx(365,"po-tag"),sg(),Jx(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),sg(),Sl(367,"p"),Jx(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),sg()()(),Sl(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),Jx(373," p-color"),Wl(374,"br"),sg()()(),Sl(375,"td",18)(376,"code",24),Jx(377,"string"),sg()(),Sl(378,"td",20),Jx(379,"-"),sg(),Sl(380,"td",21)(381,"em")(382,"strong"),Jx(383,"(opcional)"),sg()(),Sl(384,"p"),Jx(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Sl(386,"ul")(387,"li"),Jx(388,"Hexadeximal, por exemplo "),Sl(389,"code"),Jx(390,"#c64840"),sg(),Jx(391,";"),sg(),Sl(392,"li"),Jx(393,"RGB, como "),Sl(394,"code"),Jx(395,"rgb(0, 0, 165)"),sg(),Jx(396,";"),sg(),Sl(397,"li"),Jx(398,"O nome da cor, por exemplo "),Sl(399,"code"),Jx(400,"blue"),sg(),Jx(401,";"),sg(),Sl(402,"li"),Jx(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Sl(404,"ul")(405,"li"),Wl(406,"span",25),Sl(407,"code"),Jx(408,"color-01"),sg()(),Sl(409,"li"),Wl(410,"span",26),Sl(411,"code"),Jx(412,"color-02"),sg()(),Sl(413,"li"),Wl(414,"span",27),Sl(415,"code"),Jx(416,"color-03"),sg()(),Sl(417,"li"),Wl(418,"span",28),Sl(419,"code"),Jx(420,"color-04"),sg()(),Sl(421,"li"),Wl(422,"span",29),Sl(423,"code"),Jx(424,"color-05"),sg()(),Sl(425,"li"),Wl(426,"span",30),Sl(427,"code"),Jx(428,"color-06"),sg()(),Sl(429,"li"),Wl(430,"span",31),Sl(431,"code"),Jx(432,"color-07"),sg()(),Sl(433,"li"),Wl(434,"span",32),Sl(435,"code"),Jx(436,"color-08"),sg()(),Sl(437,"li"),Wl(438,"span",33),Sl(439,"code"),Jx(440,"color-09"),sg()(),Sl(441,"li"),Wl(442,"span",34),Sl(443,"code"),Jx(444,"color-10"),sg()(),Sl(445,"li"),Wl(446,"span",35),Sl(447,"code"),Jx(448,"color-11"),sg()(),Sl(449,"li"),Wl(450,"span",36),Sl(451,"code"),Jx(452,"color-12"),sg()()()()(),Sl(453,"blockquote")(454,"p"),Jx(455,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(456,"strong"),Jx(457,"Caption Tag Colors"),sg(),Jx(458,":"),sg()(),Sl(459,"ul")(460,"li"),Wl(461,"span",37),Sl(462,"code"),Jx(463,"caption-tag-01"),sg(),Wl(464,"span",38),Sl(465,"code"),Jx(466,"caption-tag-02"),sg(),Wl(467,"span",39),Sl(468,"code"),Jx(469,"caption-tag-03"),sg(),Wl(470,"span",40),Sl(471,"code"),Jx(472,"caption-tag-04"),sg(),Wl(473,"span",41),Sl(474,"code"),Jx(475,"caption-tag-05"),sg()(),Sl(476,"li"),Wl(477,"span",42),Sl(478,"code"),Jx(479,"caption-tag-06"),sg(),Wl(480,"span",43),Sl(481,"code"),Jx(482,"caption-tag-07"),sg(),Wl(483,"span",44),Sl(484,"code"),Jx(485,"caption-tag-08"),sg(),Wl(486,"span",45),Sl(487,"code"),Jx(488,"caption-tag-09"),sg(),Wl(489,"span",46),Sl(490,"code"),Jx(491,"caption-tag-10"),sg()(),Sl(492,"li"),Wl(493,"span",47),Sl(494,"code"),Jx(495,"caption-tag-11"),sg(),Wl(496,"span",48),Sl(497,"code"),Jx(498,"caption-tag-12"),sg(),Wl(499,"span",49),Sl(500,"code"),Jx(501,"caption-tag-13"),sg(),Wl(502,"span",50),Sl(503,"code"),Jx(504,"caption-tag-14"),sg(),Wl(505,"span",51),Sl(506,"code"),Jx(507,"caption-tag-15"),sg()(),Sl(508,"li"),Wl(509,"span",52),Sl(510,"code"),Jx(511,"caption-tag-16"),sg(),Wl(512,"span",53),Sl(513,"code"),Jx(514,"caption-tag-17"),sg(),Wl(515,"span",54),Sl(516,"code"),Jx(517,"caption-tag-18"),sg(),Wl(518,"span",55),Sl(519,"code"),Jx(520,"caption-tag-19"),sg(),Wl(521,"span",56),Sl(522,"code"),Jx(523,"caption-tag-20"),sg()(),Sl(524,"li"),Wl(525,"span",57),Sl(526,"code"),Jx(527,"caption-tag-21"),sg(),Wl(528,"span",58),Sl(529,"code"),Jx(530,"caption-tag-22"),sg(),Wl(531,"span",59),Sl(532,"code"),Jx(533,"caption-tag-23"),sg(),Wl(534,"span",60),Sl(535,"code"),Jx(536,"caption-tag-24"),sg(),Wl(537,"span",61),Sl(538,"code"),Jx(539,"caption-tag-25"),sg()(),Sl(540,"li"),Wl(541,"span",62),Sl(542,"code"),Jx(543,"caption-tag-26"),sg(),Wl(544,"span",63),Sl(545,"code"),Jx(546,"caption-tag-27"),sg(),Wl(547,"span",64),Sl(548,"code"),Jx(549,"caption-tag-28"),sg(),Wl(550,"span",65),Sl(551,"code"),Jx(552,"caption-tag-29"),sg(),Wl(553,"span",66),Sl(554,"code"),Jx(555,"caption-tag-30"),sg()(),Sl(556,"li"),Wl(557,"span",67),Sl(558,"code"),Jx(559,"caption-tag-31"),sg(),Wl(560,"span",68),Sl(561,"code"),Jx(562,"caption-tag-32"),sg(),Wl(563,"span",69),Sl(564,"code"),Jx(565,"caption-tag-33"),sg(),Wl(566,"span",70),Sl(567,"code"),Jx(568,"caption-tag-34"),sg(),Wl(569,"span",71),Sl(570,"code"),Jx(571,"caption-tag-35"),sg()()(),Sl(572,"p"),Jx(573,"Exemplo de uso:"),sg(),Sl(574,"pre")(575,"code"),Jx(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),sg()(),Sl(577,"ul")(578,"li"),Jx(579,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),sg(),Sl(580,"li"),Jx(581,"Para as cores legacy ("),Sl(582,"code"),Jx(583,"color-01"),sg(),Jx(584," a "),Sl(585,"code"),Jx(586,"color-12"),sg(),Jx(587,") e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade."),sg(),Sl(588,"li"),Jx(589,"Para as cores "),Sl(590,"strong"),Jx(591,"Caption Tag Colors"),sg(),Jx(592," ("),Sl(593,"code"),Jx(594,"caption-tag-01"),sg(),Jx(595," a "),Sl(596,"code"),Jx(597,"caption-tag-35"),sg(),Jx(598,"), a cor do texto \xE9 fixa e definida via token CSS, n\xE3o sendo poss\xEDvel alter\xE1-la via "),Sl(599,"code"),Jx(600,"p-text-color"),sg(),Jx(601,"."),sg()(),Sl(602,"blockquote")(603,"p")(604,"strong"),Jx(605,"Aten\xE7\xE3o:"),sg(),Jx(606," A propriedade "),Sl(607,"code"),Jx(608,"p-type"),sg(),Jx(609," sobrep\xF5e esta defini\xE7\xE3o."),sg()()()(),Sl(610,"tr",14)(611,"td",15)(612,"div",22)(613,"span",23),Jx(614," p-disabled"),Wl(615,"br"),sg()()(),Sl(616,"td",18)(617,"code",72),Jx(618,"boolean"),sg()(),Sl(619,"td",20)(620,"p")(621,"code"),Jx(622,"false"),sg()()(),Sl(623,"td",21)(624,"em")(625,"strong"),Jx(626,"(opcional)"),sg()(),Sl(627,"p"),Jx(628,"Desabilita o "),Sl(629,"code"),Jx(630,"po-tag"),sg(),Jx(631," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),sg(),Sl(632,"blockquote")(633,"p"),Jx(634,"A propriedade "),Sl(635,"code"),Jx(636,"p-disabled"),sg(),Jx(637," somente ter\xE1 efeito caso a propriedade "),Sl(638,"code"),Jx(639,"p-removable"),sg(),Jx(640," esteja definida como "),Sl(641,"code"),Jx(642,"true"),sg(),Jx(643,"."),sg()()()(),Sl(644,"tr",14)(645,"td",15)(646,"div",22)(647,"span",23),Jx(648," p-icon"),Wl(649,"br"),sg()()(),Sl(650,"td",18)(651,"code",24),Jx(652,"string "),sg(),Sl(653,"code",72),Jx(654," boolean "),sg(),Sl(655,"code",73),Jx(656," TemplateRef<void>"),sg()(),Sl(657,"td",20)(658,"p")(659,"code"),Jx(660,"false"),sg()()(),Sl(661,"td",21)(662,"em")(663,"strong"),Jx(664,"(opcional)"),sg()(),Sl(665,"p"),Jx(666,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Sl(667,"em"),Jx(668,"tag"),sg(),Jx(669,"."),sg(),Sl(670,"p"),Jx(671,"Quando "),Sl(672,"code"),Jx(673,"p-type"),sg(),Jx(674," estiver definida, basta informar um valor igual a "),Sl(675,"code"),Jx(676,"true"),sg(),Jx(677," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),sg(),Sl(678,"ul")(679,"li"),Wl(680,"span",74),Jx(681," - "),Sl(682,"code"),Jx(683,"success"),sg()(),Sl(684,"li"),Wl(685,"span",75),Jx(686," - "),Sl(687,"code"),Jx(688,"warning"),sg()(),Sl(689,"li"),Wl(690,"span",76),Jx(691," - "),Sl(692,"code"),Jx(693,"danger"),sg()(),Sl(694,"li"),Wl(695,"span",77),Jx(696," - "),Sl(697,"code"),Jx(698,"info"),sg()()(),Sl(699,"p"),Jx(700,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(701,"a",78),Jx(702,"Biblioteca de \xEDcones"),sg(),Jx(703,". conforme exemplo abaixo:"),sg(),Sl(704,"pre")(705,"code"),Jx(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),sg()(),Sl(707,"p"),Jx(708,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(709,"em"),Jx(710,"Font Awesome"),sg(),Jx(711,", da seguinte forma:"),sg(),Sl(712,"pre")(713,"code"),Jx(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),sg()(),Sl(715,"p"),Jx(716,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(717,"code"),Jx(718,"TemplateRef"),sg(),Jx(719,", conforme exemplo abaixo:"),sg(),Sl(720,"pre")(721,"code"),Jx(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(723,"blockquote")(724,"p"),Jx(725,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(726,"code"),Jx(727,"font-size: inherit"),sg(),Jx(728," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(729,"tr",14)(730,"td",15)(731,"div",22)(732,"span",23),Jx(733," p-label"),Wl(734,"br"),sg()()(),Sl(735,"td",18)(736,"code",24),Jx(737,"string"),sg()(),Sl(738,"td",20),Jx(739,"-"),sg(),Sl(740,"td",21)(741,"em")(742,"strong"),Jx(743,"(opcional)"),sg()(),Sl(744,"p"),Jx(745,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),Sl(746,"em"),Jx(747,"tag"),sg(),Jx(748,", de acordo com a "),Sl(749,"code"),Jx(750,"p-orientation"),sg(),Jx(751,"."),sg()()(),Sl(752,"tr",14)(753,"td",15)(754,"div",22)(755,"span",23),Jx(756," p-literals"),Wl(757,"br"),sg()()(),Sl(758,"td",18)(759,"code",79),Jx(760,"PoTagLiterals"),sg()(),Sl(761,"td",20),Jx(762,"-"),sg(),Sl(763,"td",21)(764,"em")(765,"strong"),Jx(766,"(opcional)"),sg()(),Sl(767,"p"),Jx(768,"Objeto com as literais usadas no "),Sl(769,"code"),Jx(770,"po-tag"),sg(),Jx(771,"."),sg(),Sl(772,"p"),Jx(773,"Para utilizar, basta passar a literal customizada:"),sg(),Sl(774,"pre")(775,"code"),Jx(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),sg()(),Sl(777,"p"),Jx(778,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),sg(),Sl(779,"pre")(780,"code"),Jx(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),sg()(),Sl(782,"blockquote")(783,"p"),Jx(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(785,"a",80)(786,"code"),Jx(787,"PoI18nService"),sg()(),Jx(788," ou do browser."),sg()()()(),Sl(789,"tr",14)(790,"td",15)(791,"div",22)(792,"span",23),Jx(793," p-orientation"),Wl(794,"br"),sg()()(),Sl(795,"td",18)(796,"code",81),Jx(797,"PoTagOrientation"),sg()(),Sl(798,"td",20)(799,"p")(800,"code"),Jx(801,"vertical"),sg()()(),Sl(802,"td",21)(803,"em")(804,"strong"),Jx(805,"(opcional)"),sg()(),Sl(806,"p"),Jx(807,"Define o "),Sl(808,"em"),Jx(809,"layout"),sg(),Jx(810," de exibi\xE7\xE3o."),sg()()(),Sl(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),Jx(815," p-removable"),Wl(816,"br"),sg()()(),Sl(817,"td",18)(818,"code",72),Jx(819,"boolean"),sg()(),Sl(820,"td",20)(821,"p")(822,"code"),Jx(823,"false"),sg()()(),Sl(824,"td",21)(825,"em")(826,"strong"),Jx(827,"(opcional)"),sg()(),Sl(828,"p"),Jx(829,"Habilita a op\xE7\xE3o de remover a tag"),sg()()(),Sl(830,"tr",14)(831,"td",15)(832,"div",16)(833,"span",17),Jx(834," (p-close)"),Wl(835,"br"),sg()()(),Sl(836,"td",18)(837,"code",19),Jx(838,"EventEmitter"),sg()(),Sl(839,"td",20),Jx(840,"-"),sg(),Sl(841,"td",21)(842,"em")(843,"strong"),Jx(844,"(opcional)"),sg()(),Sl(845,"p"),Jx(846,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),Sl(847,"code"),Jx(848,"po-tag"),sg()()()(),Sl(849,"tr",14)(850,"td",15)(851,"div",22)(852,"span",23),Jx(853," p-text-color"),Wl(854,"br"),sg()()(),Sl(855,"td",18)(856,"code",24),Jx(857,"string"),sg()(),Sl(858,"td",20),Jx(859,"-"),sg(),Sl(860,"td",21)(861,"em")(862,"strong"),Jx(863,"(opcional)"),sg()(),Sl(864,"p"),Jx(865,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Sl(866,"ul")(867,"li")(868,"p"),Jx(869,"Hexadeximal, por exemplo "),Sl(870,"code"),Jx(871,"#c64840"),sg(),Jx(872,";"),sg()(),Sl(873,"li")(874,"p"),Jx(875,"RGB, como "),Sl(876,"code"),Jx(877,"rgb(0, 0, 165)"),sg(),Jx(878,";"),sg()(),Sl(879,"li")(880,"p"),Jx(881,"O nome da cor, por exemplo "),Sl(882,"code"),Jx(883,"blue"),sg(),Jx(884,";"),sg()(),Sl(885,"li")(886,"p"),Jx(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),sg(),Sl(888,"ul")(889,"li"),Wl(890,"span",25),Sl(891,"code"),Jx(892,"color-01"),sg()(),Sl(893,"li"),Wl(894,"span",26),Sl(895,"code"),Jx(896,"color-02"),sg()(),Sl(897,"li"),Wl(898,"span",27),Sl(899,"code"),Jx(900,"color-03"),sg()(),Sl(901,"li"),Wl(902,"span",28),Sl(903,"code"),Jx(904,"color-04"),sg()(),Sl(905,"li"),Wl(906,"span",29),Sl(907,"code"),Jx(908,"color-05"),sg()(),Sl(909,"li"),Wl(910,"span",30),Sl(911,"code"),Jx(912,"color-06"),sg()(),Sl(913,"li"),Wl(914,"span",31),Sl(915,"code"),Jx(916,"color-07"),sg()(),Sl(917,"li"),Wl(918,"span",32),Sl(919,"code"),Jx(920,"color-08"),sg()(),Sl(921,"li"),Wl(922,"span",33),Sl(923,"code"),Jx(924,"color-09"),sg()(),Sl(925,"li"),Wl(926,"span",34),Sl(927,"code"),Jx(928,"color-10"),sg()(),Sl(929,"li"),Wl(930,"span",35),Sl(931,"code"),Jx(932,"color-11"),sg()(),Sl(933,"li"),Wl(934,"span",36),Sl(935,"code"),Jx(936,"color-12"),sg()()()(),Sl(937,"li")(938,"p"),Jx(939,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),sg()()(),Sl(940,"blockquote")(941,"p")(942,"strong"),Jx(943,"Aten\xE7\xE3o:"),sg(),Jx(944," A propriedade "),Sl(945,"code"),Jx(946,"p-type"),sg(),Jx(947," sobrep\xF5e esta defini\xE7\xE3o."),sg()(),Sl(948,"blockquote")(949,"p")(950,"strong"),Jx(951,"Aten\xE7\xE3o:"),sg(),Jx(952," As cores da paleta "),Sl(953,"strong"),Jx(954,"Caption Tag Colors"),sg(),Jx(955," ("),Sl(956,"code"),Jx(957,"caption-tag-01"),sg(),Jx(958," a "),Sl(959,"code"),Jx(960,"caption-tag-35"),sg(),Jx(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),sg()()()(),Sl(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),Jx(966," p-type"),Wl(967,"br"),sg()()(),Sl(968,"td",18)(969,"code",82),Jx(970,"PoTagType"),sg()(),Sl(971,"td",20)(972,"p")(973,"code"),Jx(974,"info"),sg()()(),Sl(975,"td",21)(976,"em")(977,"strong"),Jx(978,"(opcional)"),sg()(),Sl(979,"p"),Jx(980,"Define o tipo da "),Sl(981,"em"),Jx(982,"tag"),sg(),Jx(983,"."),sg(),Sl(984,"p"),Jx(985,"Valores v\xE1lidos:"),sg(),Sl(986,"ul")(987,"li")(988,"code"),Jx(989,"success"),sg(),Jx(990,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),sg(),Sl(991,"li")(992,"code"),Jx(993,"warning"),sg(),Jx(994,": cor amarela que representa aviso ou advert\xEAncia."),sg(),Sl(995,"li")(996,"code"),Jx(997,"danger"),sg(),Jx(998,": cor vermelha para erro ou aviso cr\xEDtico."),sg(),Sl(999,"li")(1e3,"code"),Jx(1001,"info"),sg(),Jx(1002,": cor azul claro que caracteriza conte\xFAdo informativo."),sg(),Sl(1003,"li")(1004,"code"),Jx(1005,"neutral"),sg(),Jx(1006,": cor cinza claro para uso geral."),sg()(),Sl(1007,"blockquote")(1008,"p"),Jx(1009,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Sl(1010,"code"),Jx(1011,"p-color"),sg(),Jx(1012," e "),Sl(1013,"code"),Jx(1014,"p-icon"),sg(),Jx(1015," somente ser\xE1 exibido caso seja "),Sl(1016,"code"),Jx(1017,"true"),sg(),Jx(1018,"."),sg()()()(),Sl(1019,"tr",14)(1020,"td",15)(1021,"div",22)(1022,"span",23),Jx(1023," p-value"),Wl(1024,"br"),sg()()(),Sl(1025,"td",18)(1026,"code",24),Jx(1027,"string"),sg()(),Sl(1028,"td",20),Jx(1029,"-"),sg(),Sl(1030,"td",21)(1031,"p"),Jx(1032,"Texto da tag."),sg()()()(),Sl(1033,"h3"),Jx(1034,"Interfaces"),sg(),Sl(1035,"h4",83)(1036,"code",5),Jx(1037,"PoTagLiterals"),sg()(),Sl(1038,"div",2)(1039,"p"),Jx(1040,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1041,"code"),Jx(1042,"po-tag"),sg(),Jx(1043,"."),sg()(),Sl(1044,"h4",10),Jx(1045,"Propriedades"),sg(),Sl(1046,"table",11)(1047,"tr",12)(1048,"th",13),Jx(1049,"Nome"),sg(),Sl(1050,"th",13),Jx(1051,"Tipo"),sg(),Sl(1052,"th",13),Jx(1053,"Descri\xE7\xE3o"),sg()(),Sl(1054,"tr",14)(1055,"td",15)(1056,"div",22)(1057,"span",23),Jx(1058," remove"),Wl(1059,"br"),sg()()(),Sl(1060,"td",18)(1061,"code",24),Jx(1062,"string"),sg()(),Sl(1063,"td",21)(1064,"em")(1065,"strong"),Jx(1066,"(opcional)"),sg()(),Sl(1067,"p"),Jx(1068,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),sg()()()(),Sl(1069,"h3"),Jx(1070,"Enums"),sg(),Sl(1071,"h4",4)(1072,"code",5),Jx(1073,"PoTagOrientation"),sg()(),Sl(1074,"div",2)(1075,"p"),Jx(1076,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Sl(1077,"code"),Jx(1078,"po-tag"),sg(),Jx(1079,"."),sg()(),Sl(1080,"h4",10),Jx(1081,"Propriedades"),sg(),Sl(1082,"table",11)(1083,"tr",12)(1084,"th",13),Jx(1085,"Nome"),sg(),Sl(1086,"th",13),Jx(1087,"Descri\xE7\xE3o"),sg()(),Sl(1088,"tr",14)(1089,"td",15)(1090,"div",22)(1091,"span",23),Jx(1092," Horizontal"),Wl(1093,"br"),sg()()(),Sl(1094,"td",21)(1095,"p"),Jx(1096,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),sg()()(),Sl(1097,"tr",14)(1098,"td",15)(1099,"div",22)(1100,"span",23),Jx(1101," Vertical"),Wl(1102,"br"),sg()()(),Sl(1103,"td",21)(1104,"p"),Jx(1105,"Exibe a tag na vertical, ou seja, abaixo do label."),sg()()()(),Sl(1106,"h4",4)(1107,"code",5),Jx(1108,"PoTagType"),sg()(),Sl(1109,"div",2)(1110,"p"),Jx(1111,"Define os tipos dispon\xEDveis para o "),Sl(1112,"code"),Jx(1113,"po-tag"),sg(),Jx(1114,"."),sg()(),Sl(1115,"h4",10),Jx(1116,"Propriedades"),sg(),Sl(1117,"table",11)(1118,"tr",12)(1119,"th",13),Jx(1120,"Nome"),sg(),Sl(1121,"th",13),Jx(1122,"Descri\xE7\xE3o"),sg()(),Sl(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),Jx(1127," Danger"),Wl(1128,"br"),sg()()(),Sl(1129,"td",21)(1130,"p"),Jx(1131,"Erro, perigo, problema ou aviso cr\xEDtico."),sg()()(),Sl(1132,"tr",14)(1133,"td",15)(1134,"div",22)(1135,"span",23),Jx(1136," Info"),Wl(1137,"br"),sg()()(),Sl(1138,"td",21)(1139,"p"),Jx(1140,"Informativo ou explicativo."),sg()()(),Sl(1141,"tr",14)(1142,"td",15)(1143,"div",22)(1144,"span",23),Jx(1145," Success"),Wl(1146,"br"),sg()()(),Sl(1147,"td",21)(1148,"p"),Jx(1149,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),sg()()(),Sl(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),Jx(1154," Warning"),Wl(1155,"br"),sg()()(),Sl(1156,"td",21)(1157,"p"),Jx(1158,"Aviso ou advert\xEAncia."),sg()()(),Sl(1159,"tr",14)(1160,"td",15)(1161,"div",22)(1162,"span",23),Jx(1163," Neutral"),Wl(1164,"br"),sg()()(),Sl(1165,"td",21)(1166,"p"),Jx(1167,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-tag-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view")(8,"sample-po-tag-caption-tag-colors-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Ee,ve,he,Te,ye],encapsulation:2})}return a})();var Ke=[{path:"",component:Pe}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(Ke),pL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,we]})}return a})();export{_t as DocPoTagModule};