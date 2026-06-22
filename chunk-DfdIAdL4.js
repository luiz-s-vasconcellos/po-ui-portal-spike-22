import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,dG as ev,dH as Es,bI as Sa,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aJ as Uhe,bH as k3,c9 as $he,aB as Cx,aM as Ew,aN as t0,aq as fx,aO as Dw,aP as r0,at as hx,cn as r3,a3 as aNe,ba as gNe,aQ as mx,aR as gx,br as aN,aS as vx,aA as Rx,cH as sN,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var Se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic"]],standalone:false,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(r,i){r&1&&Gl(0,"po-tag",0);},dependencies:[Sa],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tag Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-tag p-value="PO Tag"> </po-tag>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tag-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ke,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return a})();function Me(a,c){if(a&1){let l=Cx();Tl(0,"po-select",14),Ew("ngModelChange",function(i){Ky(l);let g=Rx();return rN(g.icon,i)||(g.icon=i),Xy(i)}),sg(),t0();}if(a&2){let l=Rx();Dw("ngModel",l.icon),tw("p-options",l.iconList),r0();}}function Be(a,c){if(a&1){let l=Cx();Tl(0,"po-switch",15),Ew("ngModelChange",function(i){Ky(l);let g=Rx();return rN(g.icon,i)||(g.icon=i),Xy(i)}),sg(),t0();}if(a&2){let l=Rx();Dw("ngModel",l.icon),r0();}}var xe=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:ev.Horizontal},{label:"Vertical",value:ev.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:Es.Info},{label:"Danger",value:Es.Danger},{label:"Success",value:Es.Success},{label:"Warning",value:Es.Warning},{label:"Neutral",value:Es.Neutral}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}propertiesChange(l){let r=[...this.propertiesOptions];l.includes("removable")?(r[1]={value:"disabled",label:"Disabled",disabled:false},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!=="disabled");}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs"]],standalone:false,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let g=Cx();Tl(0,"po-tag",1),ht("p-click",function(){return i.changeEvent("p-click")}),sg(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3),sg(),Gl(4,"po-divider"),Tl(5,"form",null,0)(7,"div",2)(8,"po-input",4),Ew("ngModelChange",function(d){return Ky(g),rN(i.label,d)||(i.label=d),Xy(d)}),sg(),t0(),Tl(9,"po-input",5),Ew("ngModelChange",function(d){return Ky(g),rN(i.value,d)||(i.value=d),Xy(d)}),sg(),t0(),sg(),Tl(10,"div",2)(11,"po-input",6),Ew("ngModelChange",function(d){return Ky(g),rN(i.color,d)||(i.color=d),Xy(d)}),sg(),t0(),Tl(12,"po-input",7),Ew("ngModelChange",function(d){return Ky(g),rN(i.textColor,d)||(i.textColor=d),Xy(d)}),sg(),t0(),fx(13,Me,1,2,"po-select",8),Tl(14,"po-checkbox-group",9),Ew("ngModelChange",function(d){return Ky(g),rN(i.properties,d)||(i.properties=d),Xy(d)}),ht("p-change",function(d){return i.propertiesChange(d)}),sg(),t0(),fx(15,Be,1,1,"po-switch",10),sg(),Tl(16,"div",2)(17,"po-radio-group",11),Ew("ngModelChange",function(d){return Ky(g),rN(i.orientation,d)||(i.orientation=d),Xy(d)}),sg(),t0(),Tl(18,"po-radio-group",12),Ew("ngModelChange",function(d){return Ky(g),rN(i.type,d)||(i.type=d),Xy(d)}),sg(),t0(),sg(),Tl(19,"div",2)(20,"po-button",13),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(tw("p-color",i.color)("p-disabled",i.properties.includes("disabled"))("p-removable",i.properties.includes("removable"))("p-icon",i.icon)("p-text-color",i.textColor)("p-label",i.label)("p-orientation",i.orientation)("p-type",i.type)("p-value",i.value),Vp(3),tw("p-value",i.event),Vp(5),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.value),r0(),Vp(2),Dw("ngModel",i.color),r0(),Vp(),Dw("ngModel",i.textColor),r0(),Vp(),hx(i.type?-1:13),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),hx(i.type?15:-1),Vp(2),Dw("ngModel",i.orientation),tw("p-options",i.orientationOptions),r0(),Vp(),Dw("ngModel",i.type),tw("p-options",i.typeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,Uhe,k3,Sa,$he],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tag Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-tag
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-tag-labs/sample-po-tag-labs.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-tag-labs"),sg(),Gl(29,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,xe],encapsulation:2})}return a})();function Oe(a,c){if(a&1&&Gl(0,"po-tag",12),a&2){let l=c.$implicit;tw("p-label",l.label)("p-type",l.type)("p-value",l.value);}}function Ie(a,c){if(a&1&&(Tl(0,"po-widget",15)(1,"div",3),Gl(2,"po-info",16)(3,"po-tag",17),sg()()),a&2){let l=c.$implicit;Vp(2),tw("p-label",l.label)("p-value",l.value),Vp(),tw("p-type",l.type)("p-value",l.text);}}function Ve(a,c){if(a&1&&(Tl(0,"po-tab",14),mx(1,Ie,4,4,"po-widget",15,gx),sg()),a&2){let l=c.$implicit;tw("p-label",sN(l.month)),Vp(),vx(l.details);}}var fe=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:false,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),Gl(5,"po-avatar",5),sg(),Tl(6,"div",6)(7,"div",7),Gl(8,"po-info",8)(9,"po-tag",9),sg(),Tl(10,"div",7),Gl(11,"po-info",10),sg()()()(),Tl(12,"po-widget",11)(13,"div",3),mx(14,Oe,1,3,"po-tag",12,gx),sg()()(),Tl(16,"po-widget",13)(17,"po-tabs"),mx(18,Ve,3,2,"po-tab",14,gx),sg()()()),r&2&&(Vp(5),tw("p-src",aN("assets/graphics/",i.userData.photo)),Vp(3),tw("p-value",i.userData.name),Vp(3),tw("p-value",i.userData.email),Vp(3),vx(i.investiments),Vp(4),vx(i.items));},dependencies:[r3,Sa,$he,aNe,Hme,Gme,gNe],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tag - Bank Account"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="Bank Statement">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tag-bank-account"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,qe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,fe],encapsulation:2})}return a})();var j=(a,c)=>c.color,Ne=(a,c)=>c.name;function He(a,c){if(a&1&&Gl(0,"po-tag",3),a&2){let l=c.$implicit;tw("p-color",l.color)("p-value",l.label);}}function Re(a,c){if(a&1&&Gl(0,"po-tag",5),a&2){let l=c.$implicit;tw("p-color",l.color)("p-label",l.label)("p-value",l.value);}}function $e(a,c){if(a&1&&Gl(0,"po-tag",7),a&2){let l=c.$implicit;tw("p-color",l.color)("p-icon",l.icon)("p-value",l.label);}}function je(a,c){if(a&1&&Gl(0,"po-tag",10),a&2){let l=c.$implicit;tw("p-color",l.color)("p-value",l.label);}}function Ge(a,c){if(a&1&&(Tl(0,"po-tab",9)(1,"div",2),mx(2,je,1,2,"po-tag",10,j),sg()()),a&2){let l=c.$implicit;tw("p-label",l.name),Vp(2),vx(l.tags);}}var Ce=(()=>{class a{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,"0");return {label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:"Ativo",value:"Em operacao",color:"caption-tag-01"},{label:"Pendente",value:"Aguardando aprovacao",color:"caption-tag-06"},{label:"Em analise",value:"Verificacao interna",color:"caption-tag-11"},{label:"Concluido",value:"Finalizado com sucesso",color:"caption-tag-16"},{label:"Cancelado",value:"Operacao cancelada",color:"caption-tag-21"},{label:"Expirado",value:"Prazo excedido",color:"caption-tag-26"},{label:"Bloqueado",value:"Acesso restrito",color:"caption-tag-31"}];categories=[{label:"Financeiro",color:"caption-tag-03",icon:"an an-currency-circle-dollar"},{label:"Recursos Humanos",color:"caption-tag-08",icon:"an an-users"},{label:"Logistica",color:"caption-tag-13",icon:"an an-truck"},{label:"Vendas",color:"caption-tag-18",icon:"an an-shopping-cart-simple"},{label:"Suporte",color:"caption-tag-23",icon:"an an-headset"},{label:"Marketing",color:"caption-tag-28",icon:"an an-megaphone-simple"},{label:"TI",color:"caption-tag-33",icon:"an an-desktop-tower"}];families=[{name:"Familia 01-05",tags:[{label:"caption-tag-01",color:"caption-tag-01"},{label:"caption-tag-02",color:"caption-tag-02"},{label:"caption-tag-03",color:"caption-tag-03"},{label:"caption-tag-04",color:"caption-tag-04"},{label:"caption-tag-05",color:"caption-tag-05"}]},{name:"Familia 06-10",tags:[{label:"caption-tag-06",color:"caption-tag-06"},{label:"caption-tag-07",color:"caption-tag-07"},{label:"caption-tag-08",color:"caption-tag-08"},{label:"caption-tag-09",color:"caption-tag-09"},{label:"caption-tag-10",color:"caption-tag-10"}]},{name:"Familia 11-15",tags:[{label:"caption-tag-11",color:"caption-tag-11"},{label:"caption-tag-12",color:"caption-tag-12"},{label:"caption-tag-13",color:"caption-tag-13"},{label:"caption-tag-14",color:"caption-tag-14"},{label:"caption-tag-15",color:"caption-tag-15"}]},{name:"Familia 16-20",tags:[{label:"caption-tag-16",color:"caption-tag-16"},{label:"caption-tag-17",color:"caption-tag-17"},{label:"caption-tag-18",color:"caption-tag-18"},{label:"caption-tag-19",color:"caption-tag-19"},{label:"caption-tag-20",color:"caption-tag-20"}]},{name:"Familia 21-25",tags:[{label:"caption-tag-21",color:"caption-tag-21"},{label:"caption-tag-22",color:"caption-tag-22"},{label:"caption-tag-23",color:"caption-tag-23"},{label:"caption-tag-24",color:"caption-tag-24"},{label:"caption-tag-25",color:"caption-tag-25"}]},{name:"Familia 26-30",tags:[{label:"caption-tag-26",color:"caption-tag-26"},{label:"caption-tag-27",color:"caption-tag-27"},{label:"caption-tag-28",color:"caption-tag-28"},{label:"caption-tag-29",color:"caption-tag-29"},{label:"caption-tag-30",color:"caption-tag-30"}]},{name:"Familia 31-35",tags:[{label:"caption-tag-31",color:"caption-tag-31"},{label:"caption-tag-32",color:"caption-tag-32"},{label:"caption-tag-33",color:"caption-tag-33"},{label:"caption-tag-34",color:"caption-tag-34"},{label:"caption-tag-35",color:"caption-tag-35"}]}];static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors"]],standalone:false,decls:17,vars:0,consts:[["p-title","Caption Tag Colors"],["p-title","Paleta completa - 35 cores",1,"po-md-12","po-mb-1"],[1,"po-row"],[1,"po-md-3","po-lg-2","po-mb-1",3,"p-color","p-value"],["p-title","Status de processos",1,"po-md-12","po-mb-1"],["p-orientation","horizontal",1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-label","p-value"],["p-title","Categorias com icones",1,"po-md-12"],[1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-icon","p-value"],["p-title","Familias de cores",1,"po-md-12","po-mb-1"],[3,"p-label"],[1,"po-md-4","po-lg-2","po-mb-1",3,"p-color","p-value"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-widget",1)(2,"div",2),mx(3,He,1,2,"po-tag",3,j),sg()(),Tl(5,"po-widget",4)(6,"div",2),mx(7,Re,1,3,"po-tag",5,j),sg()(),Tl(9,"po-widget",6)(10,"div",2),mx(11,$e,1,3,"po-tag",7,j),sg()(),Tl(13,"po-widget",8)(14,"po-tabs"),mx(15,Ge,4,1,"po-tab",9,Ne),sg()()()),r&2&&(Vp(3),vx(i.captionTags),Vp(4),vx(i.statusItems),Vp(4),vx(i.categories),Vp(4),vx(i.families));},dependencies:[Sa,aNe,Hme,Gme,gNe],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tag - Caption Tag Colors"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="Caption Tag Colors">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tag-caption-tag-colors"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Je,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ce],encapsulation:2})}return a})();var ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-doc"]],standalone:false,decls:1168,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoTagModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente "),Tl(7,"code"),tN(8,"po-tag"),sg(),tN(9,"."),sg()(),Tl(10,"h3",3),tN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),tN(14,"PoTagComponent"),sg()(),Tl(15,"div",2)(16,"p"),tN(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),sg(),Tl(18,"p"),tN(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),Tl(20,"em"),tN(21,"click"),sg(),tN(22," quanto atrav\xE9s das teclas "),Tl(23,"em"),tN(24,"enter/space"),sg(),tN(25,` enquanto navega
utilizando a tecla `),Tl(26,"em"),tN(27,"tab"),sg(),tN(28,"."),sg(),Tl(29,"p"),tN(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),sg(),Tl(31,"h4"),tN(32,"Tokens customiz\xE1veis"),sg(),Tl(33,"p"),tN(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(35,"blockquote")(36,"p"),tN(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(38,"a",6),tN(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(40,"."),sg()(),Tl(41,"table")(42,"thead")(43,"tr")(44,"th"),tN(45,"Propriedade"),sg(),Tl(46,"th"),tN(47,"Descri\xE7\xE3o"),sg(),Tl(48,"th"),tN(49,"Valor Padr\xE3o"),sg()()(),Tl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),tN(54,"Default Values"),sg()(),Gl(55,"td")(56,"td"),sg(),Tl(57,"tr")(58,"td")(59,"code"),tN(60,"--font-family"),sg()(),Tl(61,"td"),tN(62,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(63,"td")(64,"code"),tN(65,"var(--font-family-theme)"),sg()()(),Tl(66,"tr")(67,"td")(68,"code"),tN(69,"--font-size"),sg()(),Tl(70,"td"),tN(71,"Tamanho da fonte"),sg(),Tl(72,"td")(73,"code"),tN(74,"var(--font-size-sm)"),sg()()(),Tl(75,"tr")(76,"td")(77,"code"),tN(78,"--line-height"),sg()(),Tl(79,"td"),tN(80,"Tamanho da label"),sg(),Tl(81,"td")(82,"code"),tN(83,"var(---line-height-sm)"),sg()()(),Tl(84,"tr")(85,"td")(86,"code"),tN(87,"--border-radius"),sg()(),Tl(88,"td"),tN(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(90,"td")(91,"code"),tN(92,"var(--border-radius-pill)"),sg()()(),Tl(93,"tr")(94,"td")(95,"code"),tN(96,"--gap"),sg()(),Tl(97,"td"),tN(98,"Espa\xE7amento entre o label e o value"),sg(),Tl(99,"td")(100,"code"),tN(101,"var(--spacing-xs)"),sg()()(),Tl(102,"tr")(103,"td")(104,"strong"),tN(105,"Neutral"),sg()(),Gl(106,"td")(107,"td"),sg(),Tl(108,"tr")(109,"td")(110,"code"),tN(111,"--color-neutral"),sg()(),Tl(112,"td"),tN(113,"Cor principal no estado neutral"),sg(),Tl(114,"td")(115,"code"),tN(116,"var(--color-neutral-light-10)"),sg()()(),Tl(117,"tr")(118,"td")(119,"code"),tN(120,"--text-color-positive"),sg()(),Tl(121,"td"),tN(122,"Cor do texto no estado neutral"),sg(),Tl(123,"td")(124,"code"),tN(125,"var(--color-neutral-dark-80)"),sg()()(),Tl(126,"tr")(127,"td")(128,"strong"),tN(129,"Positive"),sg()(),Gl(130,"td")(131,"td"),sg(),Tl(132,"tr")(133,"td")(134,"code"),tN(135,"--color-positive"),sg()(),Tl(136,"td"),tN(137,"Cor principal no estado positive"),sg(),Tl(138,"td")(139,"code"),tN(140,"var(--color-feedback-positive-lightest)"),sg()()(),Tl(141,"tr")(142,"td")(143,"code"),tN(144,"--text-color-positive"),sg()(),Tl(145,"td"),tN(146,"Cor do texto no estado positive"),sg(),Tl(147,"td")(148,"code"),tN(149,"var(--color-feedback-positive-dark)"),sg()()(),Tl(150,"tr")(151,"td")(152,"strong"),tN(153,"Negative"),sg()(),Gl(154,"td")(155,"td"),sg(),Tl(156,"tr")(157,"td")(158,"code"),tN(159,"--color-negative"),sg()(),Tl(160,"td"),tN(161,"Cor principal no estado danger"),sg(),Tl(162,"td")(163,"code"),tN(164,"var(--color-feedback-negative-lightest)"),sg()()(),Tl(165,"tr")(166,"td")(167,"code"),tN(168,"--text-color-negative"),sg()(),Tl(169,"td"),tN(170,"Cor do texto no estado danger"),sg(),Tl(171,"td")(172,"code"),tN(173,"var(--color-feedback-negative-darker)"),sg()()(),Tl(174,"tr")(175,"td")(176,"strong"),tN(177,"Warning"),sg()(),Gl(178,"td")(179,"td"),sg(),Tl(180,"tr")(181,"td")(182,"code"),tN(183,"--color-tag-warning"),sg()(),Tl(184,"td"),tN(185,"Cor principal no estado warning"),sg(),Tl(186,"td")(187,"code"),tN(188,"var(--color-feedback-warning-lightest)"),sg()()(),Tl(189,"tr")(190,"td")(191,"code"),tN(192,"--text-color-warning"),sg()(),Tl(193,"td"),tN(194,"Cor do texto no estado warning"),sg(),Tl(195,"td")(196,"code"),tN(197,"var(--color-feedback-warning-darkest)"),sg()()(),Tl(198,"tr")(199,"td")(200,"strong"),tN(201,"Info"),sg()(),Gl(202,"td")(203,"td"),sg(),Tl(204,"tr")(205,"td")(206,"code"),tN(207,"--color-info"),sg()(),Tl(208,"td"),tN(209,"Cor principal no estado info"),sg(),Tl(210,"td")(211,"code"),tN(212,"var(--color-feedback-info-lightest)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),tN(216,"--text-color-info"),sg()(),Tl(217,"td"),tN(218,"Cor do texto no estado info"),sg(),Tl(219,"td")(220,"code"),tN(221,"var(--color-feedback-info-dark)"),sg()()(),Tl(222,"tr")(223,"td")(224,"strong"),tN(225,"Removable"),sg()(),Gl(226,"td")(227,"td"),sg(),Tl(228,"tr")(229,"td")(230,"code"),tN(231,"--color"),sg()(),Tl(232,"td"),tN(233,"Cor principal quando removable"),sg(),Tl(234,"td")(235,"code"),tN(236,"var(--color-brand-01-lightest)"),sg()()(),Tl(237,"tr")(238,"td")(239,"code"),tN(240,"--border-color"),sg()(),Tl(241,"td"),tN(242,"Cor de borda quando removable \xA0"),sg(),Tl(243,"td")(244,"code"),tN(245,"var(--color-brand-01-lighter)"),sg()()(),Tl(246,"tr")(247,"td")(248,"code"),tN(249,"--color-icon"),sg()(),Tl(250,"td"),tN(251,"Cor do \xEDcone quando removable \xA0"),sg(),Tl(252,"td")(253,"code"),tN(254,"var(--color-action-default)"),sg()()(),Tl(255,"tr")(256,"td")(257,"code"),tN(258,"--text-color"),sg()(),Tl(259,"td"),tN(260,"Cor do texto quando removable \xA0"),sg(),Tl(261,"td")(262,"code"),tN(263,"var(--color-neutral-dark-80)"),sg()()(),Tl(264,"tr")(265,"td")(266,"code"),tN(267,"--color-hover"),sg()(),Tl(268,"td"),tN(269,"Cor do hover no estado removable \xA0"),sg(),Tl(270,"td")(271,"code"),tN(272,"var(--color-brand-01-lighter)"),sg()()(),Tl(273,"tr")(274,"td")(275,"strong"),tN(276,"Focused"),sg()(),Gl(277,"td")(278,"td"),sg(),Tl(279,"tr")(280,"td")(281,"code"),tN(282,"--outline-color-focused"),sg()(),Tl(283,"td"),tN(284,"Cor do outline do estado de focus"),sg(),Tl(285,"td")(286,"code"),tN(287,"var(--color-action-focus)"),sg()()(),Tl(288,"tr")(289,"td")(290,"strong"),tN(291,"Disabled"),sg()(),Gl(292,"td")(293,"td"),sg(),Tl(294,"tr")(295,"td")(296,"code"),tN(297,"--color-disabled"),sg()(),Tl(298,"td"),tN(299,"Cor principal no estado disabled"),sg(),Tl(300,"td")(301,"code"),tN(302,"var(--color-neutral-light-20)"),sg()()(),Tl(303,"tr")(304,"td")(305,"code"),tN(306,"--border-color-disabled"),sg()(),Tl(307,"td"),tN(308,"Cor da borda no estado disabled \xA0"),sg(),Tl(309,"td")(310,"code"),tN(311,"var(--color-action-disabled)"),sg()()(),Tl(312,"tr")(313,"td")(314,"code"),tN(315,"--color-icon-disabled"),sg()(),Tl(316,"td"),tN(317,"Cor do icone no estado disabled \xA0"),sg(),Tl(318,"td")(319,"code"),tN(320,"var(--color-action-disabled)"),sg()()(),Tl(321,"tr")(322,"td")(323,"code"),tN(324,"--text-color-disabled"),sg()(),Tl(325,"td"),tN(326,"Cor do texto no estado disabled \xA0"),sg(),Tl(327,"td")(328,"code"),tN(329,"var(--color-neutral-mid-60)"),sg()()()()()(),Tl(330,"div",7)(331,"h4",8),tN(332,"Seletor"),sg(),Tl(333,"pre",9),tN(334,`<po-tag
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
`),sg()(),Tl(335,"h4",10),tN(336,"Propriedades"),sg(),Tl(337,"table",11)(338,"tr",12)(339,"th",13),tN(340,"Nome"),sg(),Tl(341,"th",13),tN(342,"Tipo"),sg(),Tl(343,"th",13),tN(344,"Padr\xE3o"),sg(),Tl(345,"th",13),tN(346,"Descri\xE7\xE3o"),sg()(),Tl(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),tN(351," (p-click)"),Gl(352,"br"),sg()()(),Tl(353,"td",18)(354,"code",19),tN(355,"EventEmitter"),sg()(),Tl(356,"td",20),tN(357,"-"),sg(),Tl(358,"td",21)(359,"em")(360,"strong"),tN(361,"(opcional)"),sg()(),Tl(362,"p"),tN(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),Tl(364,"code"),tN(365,"po-tag"),sg(),tN(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),sg(),Tl(367,"p"),tN(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),sg()()(),Tl(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),tN(373," p-color"),Gl(374,"br"),sg()()(),Tl(375,"td",18)(376,"code",24),tN(377,"string"),sg()(),Tl(378,"td",20),tN(379,"-"),sg(),Tl(380,"td",21)(381,"em")(382,"strong"),tN(383,"(opcional)"),sg()(),Tl(384,"p"),tN(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Tl(386,"ul")(387,"li"),tN(388,"Hexadeximal, por exemplo "),Tl(389,"code"),tN(390,"#c64840"),sg(),tN(391,";"),sg(),Tl(392,"li"),tN(393,"RGB, como "),Tl(394,"code"),tN(395,"rgb(0, 0, 165)"),sg(),tN(396,";"),sg(),Tl(397,"li"),tN(398,"O nome da cor, por exemplo "),Tl(399,"code"),tN(400,"blue"),sg(),tN(401,";"),sg(),Tl(402,"li"),tN(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Tl(404,"ul")(405,"li"),Gl(406,"span",25),Tl(407,"code"),tN(408,"color-01"),sg()(),Tl(409,"li"),Gl(410,"span",26),Tl(411,"code"),tN(412,"color-02"),sg()(),Tl(413,"li"),Gl(414,"span",27),Tl(415,"code"),tN(416,"color-03"),sg()(),Tl(417,"li"),Gl(418,"span",28),Tl(419,"code"),tN(420,"color-04"),sg()(),Tl(421,"li"),Gl(422,"span",29),Tl(423,"code"),tN(424,"color-05"),sg()(),Tl(425,"li"),Gl(426,"span",30),Tl(427,"code"),tN(428,"color-06"),sg()(),Tl(429,"li"),Gl(430,"span",31),Tl(431,"code"),tN(432,"color-07"),sg()(),Tl(433,"li"),Gl(434,"span",32),Tl(435,"code"),tN(436,"color-08"),sg()(),Tl(437,"li"),Gl(438,"span",33),Tl(439,"code"),tN(440,"color-09"),sg()(),Tl(441,"li"),Gl(442,"span",34),Tl(443,"code"),tN(444,"color-10"),sg()(),Tl(445,"li"),Gl(446,"span",35),Tl(447,"code"),tN(448,"color-11"),sg()(),Tl(449,"li"),Gl(450,"span",36),Tl(451,"code"),tN(452,"color-12"),sg()()()()(),Tl(453,"blockquote")(454,"p"),tN(455,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(456,"strong"),tN(457,"Caption Tag Colors"),sg(),tN(458,":"),sg()(),Tl(459,"ul")(460,"li"),Gl(461,"span",37),Tl(462,"code"),tN(463,"caption-tag-01"),sg(),Gl(464,"span",38),Tl(465,"code"),tN(466,"caption-tag-02"),sg(),Gl(467,"span",39),Tl(468,"code"),tN(469,"caption-tag-03"),sg(),Gl(470,"span",40),Tl(471,"code"),tN(472,"caption-tag-04"),sg(),Gl(473,"span",41),Tl(474,"code"),tN(475,"caption-tag-05"),sg()(),Tl(476,"li"),Gl(477,"span",42),Tl(478,"code"),tN(479,"caption-tag-06"),sg(),Gl(480,"span",43),Tl(481,"code"),tN(482,"caption-tag-07"),sg(),Gl(483,"span",44),Tl(484,"code"),tN(485,"caption-tag-08"),sg(),Gl(486,"span",45),Tl(487,"code"),tN(488,"caption-tag-09"),sg(),Gl(489,"span",46),Tl(490,"code"),tN(491,"caption-tag-10"),sg()(),Tl(492,"li"),Gl(493,"span",47),Tl(494,"code"),tN(495,"caption-tag-11"),sg(),Gl(496,"span",48),Tl(497,"code"),tN(498,"caption-tag-12"),sg(),Gl(499,"span",49),Tl(500,"code"),tN(501,"caption-tag-13"),sg(),Gl(502,"span",50),Tl(503,"code"),tN(504,"caption-tag-14"),sg(),Gl(505,"span",51),Tl(506,"code"),tN(507,"caption-tag-15"),sg()(),Tl(508,"li"),Gl(509,"span",52),Tl(510,"code"),tN(511,"caption-tag-16"),sg(),Gl(512,"span",53),Tl(513,"code"),tN(514,"caption-tag-17"),sg(),Gl(515,"span",54),Tl(516,"code"),tN(517,"caption-tag-18"),sg(),Gl(518,"span",55),Tl(519,"code"),tN(520,"caption-tag-19"),sg(),Gl(521,"span",56),Tl(522,"code"),tN(523,"caption-tag-20"),sg()(),Tl(524,"li"),Gl(525,"span",57),Tl(526,"code"),tN(527,"caption-tag-21"),sg(),Gl(528,"span",58),Tl(529,"code"),tN(530,"caption-tag-22"),sg(),Gl(531,"span",59),Tl(532,"code"),tN(533,"caption-tag-23"),sg(),Gl(534,"span",60),Tl(535,"code"),tN(536,"caption-tag-24"),sg(),Gl(537,"span",61),Tl(538,"code"),tN(539,"caption-tag-25"),sg()(),Tl(540,"li"),Gl(541,"span",62),Tl(542,"code"),tN(543,"caption-tag-26"),sg(),Gl(544,"span",63),Tl(545,"code"),tN(546,"caption-tag-27"),sg(),Gl(547,"span",64),Tl(548,"code"),tN(549,"caption-tag-28"),sg(),Gl(550,"span",65),Tl(551,"code"),tN(552,"caption-tag-29"),sg(),Gl(553,"span",66),Tl(554,"code"),tN(555,"caption-tag-30"),sg()(),Tl(556,"li"),Gl(557,"span",67),Tl(558,"code"),tN(559,"caption-tag-31"),sg(),Gl(560,"span",68),Tl(561,"code"),tN(562,"caption-tag-32"),sg(),Gl(563,"span",69),Tl(564,"code"),tN(565,"caption-tag-33"),sg(),Gl(566,"span",70),Tl(567,"code"),tN(568,"caption-tag-34"),sg(),Gl(569,"span",71),Tl(570,"code"),tN(571,"caption-tag-35"),sg()()(),Tl(572,"p"),tN(573,"Exemplo de uso:"),sg(),Tl(574,"pre")(575,"code"),tN(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),sg()(),Tl(577,"ul")(578,"li"),tN(579,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),sg(),Tl(580,"li"),tN(581,"Para as cores legacy ("),Tl(582,"code"),tN(583,"color-01"),sg(),tN(584," a "),Tl(585,"code"),tN(586,"color-12"),sg(),tN(587,") e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade."),sg(),Tl(588,"li"),tN(589,"Para as cores "),Tl(590,"strong"),tN(591,"Caption Tag Colors"),sg(),tN(592," ("),Tl(593,"code"),tN(594,"caption-tag-01"),sg(),tN(595," a "),Tl(596,"code"),tN(597,"caption-tag-35"),sg(),tN(598,"), a cor do texto \xE9 fixa e definida via token CSS, n\xE3o sendo poss\xEDvel alter\xE1-la via "),Tl(599,"code"),tN(600,"p-text-color"),sg(),tN(601,"."),sg()(),Tl(602,"blockquote")(603,"p")(604,"strong"),tN(605,"Aten\xE7\xE3o:"),sg(),tN(606," A propriedade "),Tl(607,"code"),tN(608,"p-type"),sg(),tN(609," sobrep\xF5e esta defini\xE7\xE3o."),sg()()()(),Tl(610,"tr",14)(611,"td",15)(612,"div",22)(613,"span",23),tN(614," p-disabled"),Gl(615,"br"),sg()()(),Tl(616,"td",18)(617,"code",72),tN(618,"boolean"),sg()(),Tl(619,"td",20)(620,"p")(621,"code"),tN(622,"false"),sg()()(),Tl(623,"td",21)(624,"em")(625,"strong"),tN(626,"(opcional)"),sg()(),Tl(627,"p"),tN(628,"Desabilita o "),Tl(629,"code"),tN(630,"po-tag"),sg(),tN(631," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),sg(),Tl(632,"blockquote")(633,"p"),tN(634,"A propriedade "),Tl(635,"code"),tN(636,"p-disabled"),sg(),tN(637," somente ter\xE1 efeito caso a propriedade "),Tl(638,"code"),tN(639,"p-removable"),sg(),tN(640," esteja definida como "),Tl(641,"code"),tN(642,"true"),sg(),tN(643,"."),sg()()()(),Tl(644,"tr",14)(645,"td",15)(646,"div",22)(647,"span",23),tN(648," p-icon"),Gl(649,"br"),sg()()(),Tl(650,"td",18)(651,"code",24),tN(652,"string "),sg(),Tl(653,"code",72),tN(654," boolean "),sg(),Tl(655,"code",73),tN(656," TemplateRef<void>"),sg()(),Tl(657,"td",20)(658,"p")(659,"code"),tN(660,"false"),sg()()(),Tl(661,"td",21)(662,"em")(663,"strong"),tN(664,"(opcional)"),sg()(),Tl(665,"p"),tN(666,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Tl(667,"em"),tN(668,"tag"),sg(),tN(669,"."),sg(),Tl(670,"p"),tN(671,"Quando "),Tl(672,"code"),tN(673,"p-type"),sg(),tN(674," estiver definida, basta informar um valor igual a "),Tl(675,"code"),tN(676,"true"),sg(),tN(677," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),sg(),Tl(678,"ul")(679,"li"),Gl(680,"span",74),tN(681," - "),Tl(682,"code"),tN(683,"success"),sg()(),Tl(684,"li"),Gl(685,"span",75),tN(686," - "),Tl(687,"code"),tN(688,"warning"),sg()(),Tl(689,"li"),Gl(690,"span",76),tN(691," - "),Tl(692,"code"),tN(693,"danger"),sg()(),Tl(694,"li"),Gl(695,"span",77),tN(696," - "),Tl(697,"code"),tN(698,"info"),sg()()(),Tl(699,"p"),tN(700,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(701,"a",78),tN(702,"Biblioteca de \xEDcones"),sg(),tN(703,". conforme exemplo abaixo:"),sg(),Tl(704,"pre")(705,"code"),tN(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),sg()(),Tl(707,"p"),tN(708,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(709,"em"),tN(710,"Font Awesome"),sg(),tN(711,", da seguinte forma:"),sg(),Tl(712,"pre")(713,"code"),tN(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),sg()(),Tl(715,"p"),tN(716,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(717,"code"),tN(718,"TemplateRef"),sg(),tN(719,", conforme exemplo abaixo:"),sg(),Tl(720,"pre")(721,"code"),tN(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(723,"blockquote")(724,"p"),tN(725,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(726,"code"),tN(727,"font-size: inherit"),sg(),tN(728," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(729,"tr",14)(730,"td",15)(731,"div",22)(732,"span",23),tN(733," p-label"),Gl(734,"br"),sg()()(),Tl(735,"td",18)(736,"code",24),tN(737,"string"),sg()(),Tl(738,"td",20),tN(739,"-"),sg(),Tl(740,"td",21)(741,"em")(742,"strong"),tN(743,"(opcional)"),sg()(),Tl(744,"p"),tN(745,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),Tl(746,"em"),tN(747,"tag"),sg(),tN(748,", de acordo com a "),Tl(749,"code"),tN(750,"p-orientation"),sg(),tN(751,"."),sg()()(),Tl(752,"tr",14)(753,"td",15)(754,"div",22)(755,"span",23),tN(756," p-literals"),Gl(757,"br"),sg()()(),Tl(758,"td",18)(759,"code",79),tN(760,"PoTagLiterals"),sg()(),Tl(761,"td",20),tN(762,"-"),sg(),Tl(763,"td",21)(764,"em")(765,"strong"),tN(766,"(opcional)"),sg()(),Tl(767,"p"),tN(768,"Objeto com as literais usadas no "),Tl(769,"code"),tN(770,"po-tag"),sg(),tN(771,"."),sg(),Tl(772,"p"),tN(773,"Para utilizar, basta passar a literal customizada:"),sg(),Tl(774,"pre")(775,"code"),tN(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),sg()(),Tl(777,"p"),tN(778,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),sg(),Tl(779,"pre")(780,"code"),tN(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),sg()(),Tl(782,"blockquote")(783,"p"),tN(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(785,"a",80)(786,"code"),tN(787,"PoI18nService"),sg()(),tN(788," ou do browser."),sg()()()(),Tl(789,"tr",14)(790,"td",15)(791,"div",22)(792,"span",23),tN(793," p-orientation"),Gl(794,"br"),sg()()(),Tl(795,"td",18)(796,"code",81),tN(797,"PoTagOrientation"),sg()(),Tl(798,"td",20)(799,"p")(800,"code"),tN(801,"vertical"),sg()()(),Tl(802,"td",21)(803,"em")(804,"strong"),tN(805,"(opcional)"),sg()(),Tl(806,"p"),tN(807,"Define o "),Tl(808,"em"),tN(809,"layout"),sg(),tN(810," de exibi\xE7\xE3o."),sg()()(),Tl(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),tN(815," p-removable"),Gl(816,"br"),sg()()(),Tl(817,"td",18)(818,"code",72),tN(819,"boolean"),sg()(),Tl(820,"td",20)(821,"p")(822,"code"),tN(823,"false"),sg()()(),Tl(824,"td",21)(825,"em")(826,"strong"),tN(827,"(opcional)"),sg()(),Tl(828,"p"),tN(829,"Habilita a op\xE7\xE3o de remover a tag"),sg()()(),Tl(830,"tr",14)(831,"td",15)(832,"div",16)(833,"span",17),tN(834," (p-close)"),Gl(835,"br"),sg()()(),Tl(836,"td",18)(837,"code",19),tN(838,"EventEmitter"),sg()(),Tl(839,"td",20),tN(840,"-"),sg(),Tl(841,"td",21)(842,"em")(843,"strong"),tN(844,"(opcional)"),sg()(),Tl(845,"p"),tN(846,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),Tl(847,"code"),tN(848,"po-tag"),sg()()()(),Tl(849,"tr",14)(850,"td",15)(851,"div",22)(852,"span",23),tN(853," p-text-color"),Gl(854,"br"),sg()()(),Tl(855,"td",18)(856,"code",24),tN(857,"string"),sg()(),Tl(858,"td",20),tN(859,"-"),sg(),Tl(860,"td",21)(861,"em")(862,"strong"),tN(863,"(opcional)"),sg()(),Tl(864,"p"),tN(865,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Tl(866,"ul")(867,"li")(868,"p"),tN(869,"Hexadeximal, por exemplo "),Tl(870,"code"),tN(871,"#c64840"),sg(),tN(872,";"),sg()(),Tl(873,"li")(874,"p"),tN(875,"RGB, como "),Tl(876,"code"),tN(877,"rgb(0, 0, 165)"),sg(),tN(878,";"),sg()(),Tl(879,"li")(880,"p"),tN(881,"O nome da cor, por exemplo "),Tl(882,"code"),tN(883,"blue"),sg(),tN(884,";"),sg()(),Tl(885,"li")(886,"p"),tN(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),sg(),Tl(888,"ul")(889,"li"),Gl(890,"span",25),Tl(891,"code"),tN(892,"color-01"),sg()(),Tl(893,"li"),Gl(894,"span",26),Tl(895,"code"),tN(896,"color-02"),sg()(),Tl(897,"li"),Gl(898,"span",27),Tl(899,"code"),tN(900,"color-03"),sg()(),Tl(901,"li"),Gl(902,"span",28),Tl(903,"code"),tN(904,"color-04"),sg()(),Tl(905,"li"),Gl(906,"span",29),Tl(907,"code"),tN(908,"color-05"),sg()(),Tl(909,"li"),Gl(910,"span",30),Tl(911,"code"),tN(912,"color-06"),sg()(),Tl(913,"li"),Gl(914,"span",31),Tl(915,"code"),tN(916,"color-07"),sg()(),Tl(917,"li"),Gl(918,"span",32),Tl(919,"code"),tN(920,"color-08"),sg()(),Tl(921,"li"),Gl(922,"span",33),Tl(923,"code"),tN(924,"color-09"),sg()(),Tl(925,"li"),Gl(926,"span",34),Tl(927,"code"),tN(928,"color-10"),sg()(),Tl(929,"li"),Gl(930,"span",35),Tl(931,"code"),tN(932,"color-11"),sg()(),Tl(933,"li"),Gl(934,"span",36),Tl(935,"code"),tN(936,"color-12"),sg()()()(),Tl(937,"li")(938,"p"),tN(939,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),sg()()(),Tl(940,"blockquote")(941,"p")(942,"strong"),tN(943,"Aten\xE7\xE3o:"),sg(),tN(944," A propriedade "),Tl(945,"code"),tN(946,"p-type"),sg(),tN(947," sobrep\xF5e esta defini\xE7\xE3o."),sg()(),Tl(948,"blockquote")(949,"p")(950,"strong"),tN(951,"Aten\xE7\xE3o:"),sg(),tN(952," As cores da paleta "),Tl(953,"strong"),tN(954,"Caption Tag Colors"),sg(),tN(955," ("),Tl(956,"code"),tN(957,"caption-tag-01"),sg(),tN(958," a "),Tl(959,"code"),tN(960,"caption-tag-35"),sg(),tN(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),sg()()()(),Tl(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),tN(966," p-type"),Gl(967,"br"),sg()()(),Tl(968,"td",18)(969,"code",82),tN(970,"PoTagType"),sg()(),Tl(971,"td",20)(972,"p")(973,"code"),tN(974,"info"),sg()()(),Tl(975,"td",21)(976,"em")(977,"strong"),tN(978,"(opcional)"),sg()(),Tl(979,"p"),tN(980,"Define o tipo da "),Tl(981,"em"),tN(982,"tag"),sg(),tN(983,"."),sg(),Tl(984,"p"),tN(985,"Valores v\xE1lidos:"),sg(),Tl(986,"ul")(987,"li")(988,"code"),tN(989,"success"),sg(),tN(990,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),sg(),Tl(991,"li")(992,"code"),tN(993,"warning"),sg(),tN(994,": cor amarela que representa aviso ou advert\xEAncia."),sg(),Tl(995,"li")(996,"code"),tN(997,"danger"),sg(),tN(998,": cor vermelha para erro ou aviso cr\xEDtico."),sg(),Tl(999,"li")(1e3,"code"),tN(1001,"info"),sg(),tN(1002,": cor azul claro que caracteriza conte\xFAdo informativo."),sg(),Tl(1003,"li")(1004,"code"),tN(1005,"neutral"),sg(),tN(1006,": cor cinza claro para uso geral."),sg()(),Tl(1007,"blockquote")(1008,"p"),tN(1009,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Tl(1010,"code"),tN(1011,"p-color"),sg(),tN(1012," e "),Tl(1013,"code"),tN(1014,"p-icon"),sg(),tN(1015," somente ser\xE1 exibido caso seja "),Tl(1016,"code"),tN(1017,"true"),sg(),tN(1018,"."),sg()()()(),Tl(1019,"tr",14)(1020,"td",15)(1021,"div",22)(1022,"span",23),tN(1023," p-value"),Gl(1024,"br"),sg()()(),Tl(1025,"td",18)(1026,"code",24),tN(1027,"string"),sg()(),Tl(1028,"td",20),tN(1029,"-"),sg(),Tl(1030,"td",21)(1031,"p"),tN(1032,"Texto da tag."),sg()()()(),Tl(1033,"h3"),tN(1034,"Interfaces"),sg(),Tl(1035,"h4",83)(1036,"code",5),tN(1037,"PoTagLiterals"),sg()(),Tl(1038,"div",2)(1039,"p"),tN(1040,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1041,"code"),tN(1042,"po-tag"),sg(),tN(1043,"."),sg()(),Tl(1044,"h4",10),tN(1045,"Propriedades"),sg(),Tl(1046,"table",11)(1047,"tr",12)(1048,"th",13),tN(1049,"Nome"),sg(),Tl(1050,"th",13),tN(1051,"Tipo"),sg(),Tl(1052,"th",13),tN(1053,"Descri\xE7\xE3o"),sg()(),Tl(1054,"tr",14)(1055,"td",15)(1056,"div",22)(1057,"span",23),tN(1058," remove"),Gl(1059,"br"),sg()()(),Tl(1060,"td",18)(1061,"code",24),tN(1062,"string"),sg()(),Tl(1063,"td",21)(1064,"em")(1065,"strong"),tN(1066,"(opcional)"),sg()(),Tl(1067,"p"),tN(1068,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),sg()()()(),Tl(1069,"h3"),tN(1070,"Enums"),sg(),Tl(1071,"h4",4)(1072,"code",5),tN(1073,"PoTagOrientation"),sg()(),Tl(1074,"div",2)(1075,"p"),tN(1076,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Tl(1077,"code"),tN(1078,"po-tag"),sg(),tN(1079,"."),sg()(),Tl(1080,"h4",10),tN(1081,"Propriedades"),sg(),Tl(1082,"table",11)(1083,"tr",12)(1084,"th",13),tN(1085,"Nome"),sg(),Tl(1086,"th",13),tN(1087,"Descri\xE7\xE3o"),sg()(),Tl(1088,"tr",14)(1089,"td",15)(1090,"div",22)(1091,"span",23),tN(1092," Horizontal"),Gl(1093,"br"),sg()()(),Tl(1094,"td",21)(1095,"p"),tN(1096,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),sg()()(),Tl(1097,"tr",14)(1098,"td",15)(1099,"div",22)(1100,"span",23),tN(1101," Vertical"),Gl(1102,"br"),sg()()(),Tl(1103,"td",21)(1104,"p"),tN(1105,"Exibe a tag na vertical, ou seja, abaixo do label."),sg()()()(),Tl(1106,"h4",4)(1107,"code",5),tN(1108,"PoTagType"),sg()(),Tl(1109,"div",2)(1110,"p"),tN(1111,"Define os tipos dispon\xEDveis para o "),Tl(1112,"code"),tN(1113,"po-tag"),sg(),tN(1114,"."),sg()(),Tl(1115,"h4",10),tN(1116,"Propriedades"),sg(),Tl(1117,"table",11)(1118,"tr",12)(1119,"th",13),tN(1120,"Nome"),sg(),Tl(1121,"th",13),tN(1122,"Descri\xE7\xE3o"),sg()(),Tl(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),tN(1127," Danger"),Gl(1128,"br"),sg()()(),Tl(1129,"td",21)(1130,"p"),tN(1131,"Erro, perigo, problema ou aviso cr\xEDtico."),sg()()(),Tl(1132,"tr",14)(1133,"td",15)(1134,"div",22)(1135,"span",23),tN(1136," Info"),Gl(1137,"br"),sg()()(),Tl(1138,"td",21)(1139,"p"),tN(1140,"Informativo ou explicativo."),sg()()(),Tl(1141,"tr",14)(1142,"td",15)(1143,"div",22)(1144,"span",23),tN(1145," Success"),Gl(1146,"br"),sg()()(),Tl(1147,"td",21)(1148,"p"),tN(1149,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),sg()()(),Tl(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),tN(1154," Warning"),Gl(1155,"br"),sg()()(),Tl(1156,"td",21)(1157,"p"),tN(1158,"Aviso ou advert\xEAncia."),sg()()(),Tl(1159,"tr",14)(1160,"td",15)(1161,"div",22)(1162,"span",23),tN(1163," Neutral"),Gl(1164,"br"),sg()()(),Tl(1165,"td",21)(1166,"p"),tN(1167,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-tag-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view")(8,"sample-po-tag-caption-tag-colors-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Ee,ve,he,Te,ye],encapsulation:2})}return a})();var Ke=[{path:"",component:Pe}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Ke),vL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,we]})}return a})();export{_t as DocPoTagModule};