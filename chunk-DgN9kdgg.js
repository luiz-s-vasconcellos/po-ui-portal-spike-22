import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dM as ov,dN as Fs,bM as Pa,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aJ as nme,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,aq as ix,aO as pw,aP as X0,at as ox,cr as _3,a3 as SNe,b9 as ONe,aQ as cx,aR as ax,bv as Jx,aS as lx,aA as Ex,cM as Qx,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic"]],standalone:false,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(r,i){r&1&&Hl(0,"po-tag",0);},dependencies:[Pa],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tag Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-tag p-value="PO Tag"> </po-tag>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tag-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ke,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return a})();function Me(a,c){if(a&1){let l=gx();Cl(0,"po-select",14),gw("ngModelChange",function(i){Jy(l);let g=Ex();return Zx(g.icon,i)||(g.icon=i),e_(i)}),og(),Z0();}if(a&2){let l=Ex();pw("ngModel",l.icon),ZE("p-options",l.iconList),X0();}}function Be(a,c){if(a&1){let l=gx();Cl(0,"po-switch",15),gw("ngModelChange",function(i){Jy(l);let g=Ex();return Zx(g.icon,i)||(g.icon=i),e_(i)}),og(),Z0();}if(a&2){let l=Ex();pw("ngModel",l.icon),X0();}}var xe=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:ov.Horizontal},{label:"Vertical",value:ov.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:Fs.Info},{label:"Danger",value:Fs.Danger},{label:"Success",value:Fs.Success},{label:"Warning",value:Fs.Warning},{label:"Neutral",value:Fs.Neutral}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}propertiesChange(l){let r=[...this.propertiesOptions];l.includes("removable")?(r[1]={value:"disabled",label:"Disabled",disabled:false},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!=="disabled");}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs"]],standalone:false,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let g=gx();Cl(0,"po-tag",1),dt("p-click",function(){return i.changeEvent("p-click")}),og(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3),og(),Hl(4,"po-divider"),Cl(5,"form",null,0)(7,"div",2)(8,"po-input",4),gw("ngModelChange",function(d){return Jy(g),Zx(i.label,d)||(i.label=d),e_(d)}),og(),Z0(),Cl(9,"po-input",5),gw("ngModelChange",function(d){return Jy(g),Zx(i.value,d)||(i.value=d),e_(d)}),og(),Z0(),og(),Cl(10,"div",2)(11,"po-input",6),gw("ngModelChange",function(d){return Jy(g),Zx(i.color,d)||(i.color=d),e_(d)}),og(),Z0(),Cl(12,"po-input",7),gw("ngModelChange",function(d){return Jy(g),Zx(i.textColor,d)||(i.textColor=d),e_(d)}),og(),Z0(),ix(13,Me,1,2,"po-select",8),Cl(14,"po-checkbox-group",9),gw("ngModelChange",function(d){return Jy(g),Zx(i.properties,d)||(i.properties=d),e_(d)}),dt("p-change",function(d){return i.propertiesChange(d)}),og(),Z0(),ix(15,Be,1,1,"po-switch",10),og(),Cl(16,"div",2)(17,"po-radio-group",11),gw("ngModelChange",function(d){return Jy(g),Zx(i.orientation,d)||(i.orientation=d),e_(d)}),og(),Z0(),Cl(18,"po-radio-group",12),gw("ngModelChange",function(d){return Jy(g),Zx(i.type,d)||(i.type=d),e_(d)}),og(),Z0(),og(),Cl(19,"div",2)(20,"po-button",13),dt("p-click",function(){return i.restore()}),og()()();}r&2&&(ZE("p-color",i.color)("p-disabled",i.properties.includes("disabled"))("p-removable",i.properties.includes("removable"))("p-icon",i.icon)("p-text-color",i.textColor)("p-label",i.label)("p-orientation",i.orientation)("p-type",i.type)("p-value",i.value),Lp(3),ZE("p-value",i.event),Lp(5),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.value),X0(),Lp(2),pw("ngModel",i.color),X0(),Lp(),pw("ngModel",i.textColor),X0(),Lp(),ox(i.type?-1:13),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),ox(i.type?15:-1),Lp(2),pw("ngModel",i.orientation),ZE("p-options",i.orientationOptions),X0(),Lp(),pw("ngModel",i.type),ZE("p-options",i.typeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,nme,H3,Pa,sme],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tag Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-tag
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-tag-labs/sample-po-tag-labs.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-tag-labs"),og(),Hl(29,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,xe],encapsulation:2})}return a})();function Oe(a,c){if(a&1&&Hl(0,"po-tag",12),a&2){let l=c.$implicit;ZE("p-label",l.label)("p-type",l.type)("p-value",l.value);}}function Ie(a,c){if(a&1&&(Cl(0,"po-widget",15)(1,"div",3),Hl(2,"po-info",16)(3,"po-tag",17),og()()),a&2){let l=c.$implicit;Lp(2),ZE("p-label",l.label)("p-value",l.value),Lp(),ZE("p-type",l.type)("p-value",l.text);}}function Ve(a,c){if(a&1&&(Cl(0,"po-tab",14),cx(1,Ie,4,4,"po-widget",15,ax),og()),a&2){let l=c.$implicit;ZE("p-label",Qx(l.month)),Lp(),lx(l.details);}}var fe=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:false,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),Hl(5,"po-avatar",5),og(),Cl(6,"div",6)(7,"div",7),Hl(8,"po-info",8)(9,"po-tag",9),og(),Cl(10,"div",7),Hl(11,"po-info",10),og()()()(),Cl(12,"po-widget",11)(13,"div",3),cx(14,Oe,1,3,"po-tag",12,ax),og()()(),Cl(16,"po-widget",13)(17,"po-tabs"),cx(18,Ve,3,2,"po-tab",14,ax),og()()()),r&2&&(Lp(5),ZE("p-src",Jx("assets/graphics/",i.userData.photo)),Lp(3),ZE("p-value",i.userData.name),Lp(3),ZE("p-value",i.userData.email),Lp(3),lx(i.investiments),Lp(4),lx(i.items));},dependencies:[_3,Pa,sme,SNe,ofe,lfe,ONe],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tag - Bank Account"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Bank Statement">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tag-bank-account"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,qe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,fe],encapsulation:2})}return a})();var j=(a,c)=>c.color,Ne=(a,c)=>c.name;function He(a,c){if(a&1&&Hl(0,"po-tag",3),a&2){let l=c.$implicit;ZE("p-color",l.color)("p-value",l.label);}}function Re(a,c){if(a&1&&Hl(0,"po-tag",5),a&2){let l=c.$implicit;ZE("p-color",l.color)("p-label",l.label)("p-value",l.value);}}function $e(a,c){if(a&1&&Hl(0,"po-tag",7),a&2){let l=c.$implicit;ZE("p-color",l.color)("p-icon",l.icon)("p-value",l.label);}}function je(a,c){if(a&1&&Hl(0,"po-tag",10),a&2){let l=c.$implicit;ZE("p-color",l.color)("p-value",l.label);}}function Ge(a,c){if(a&1&&(Cl(0,"po-tab",9)(1,"div",2),cx(2,je,1,2,"po-tag",10,j),og()()),a&2){let l=c.$implicit;ZE("p-label",l.name),Lp(2),lx(l.tags);}}var Ce=(()=>{class a{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,"0");return {label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:"Ativo",value:"Em operacao",color:"caption-tag-01"},{label:"Pendente",value:"Aguardando aprovacao",color:"caption-tag-06"},{label:"Em analise",value:"Verificacao interna",color:"caption-tag-11"},{label:"Concluido",value:"Finalizado com sucesso",color:"caption-tag-16"},{label:"Cancelado",value:"Operacao cancelada",color:"caption-tag-21"},{label:"Expirado",value:"Prazo excedido",color:"caption-tag-26"},{label:"Bloqueado",value:"Acesso restrito",color:"caption-tag-31"}];categories=[{label:"Financeiro",color:"caption-tag-03",icon:"an an-currency-circle-dollar"},{label:"Recursos Humanos",color:"caption-tag-08",icon:"an an-users"},{label:"Logistica",color:"caption-tag-13",icon:"an an-truck"},{label:"Vendas",color:"caption-tag-18",icon:"an an-shopping-cart-simple"},{label:"Suporte",color:"caption-tag-23",icon:"an an-headset"},{label:"Marketing",color:"caption-tag-28",icon:"an an-megaphone-simple"},{label:"TI",color:"caption-tag-33",icon:"an an-desktop-tower"}];families=[{name:"Familia 01-05",tags:[{label:"caption-tag-01",color:"caption-tag-01"},{label:"caption-tag-02",color:"caption-tag-02"},{label:"caption-tag-03",color:"caption-tag-03"},{label:"caption-tag-04",color:"caption-tag-04"},{label:"caption-tag-05",color:"caption-tag-05"}]},{name:"Familia 06-10",tags:[{label:"caption-tag-06",color:"caption-tag-06"},{label:"caption-tag-07",color:"caption-tag-07"},{label:"caption-tag-08",color:"caption-tag-08"},{label:"caption-tag-09",color:"caption-tag-09"},{label:"caption-tag-10",color:"caption-tag-10"}]},{name:"Familia 11-15",tags:[{label:"caption-tag-11",color:"caption-tag-11"},{label:"caption-tag-12",color:"caption-tag-12"},{label:"caption-tag-13",color:"caption-tag-13"},{label:"caption-tag-14",color:"caption-tag-14"},{label:"caption-tag-15",color:"caption-tag-15"}]},{name:"Familia 16-20",tags:[{label:"caption-tag-16",color:"caption-tag-16"},{label:"caption-tag-17",color:"caption-tag-17"},{label:"caption-tag-18",color:"caption-tag-18"},{label:"caption-tag-19",color:"caption-tag-19"},{label:"caption-tag-20",color:"caption-tag-20"}]},{name:"Familia 21-25",tags:[{label:"caption-tag-21",color:"caption-tag-21"},{label:"caption-tag-22",color:"caption-tag-22"},{label:"caption-tag-23",color:"caption-tag-23"},{label:"caption-tag-24",color:"caption-tag-24"},{label:"caption-tag-25",color:"caption-tag-25"}]},{name:"Familia 26-30",tags:[{label:"caption-tag-26",color:"caption-tag-26"},{label:"caption-tag-27",color:"caption-tag-27"},{label:"caption-tag-28",color:"caption-tag-28"},{label:"caption-tag-29",color:"caption-tag-29"},{label:"caption-tag-30",color:"caption-tag-30"}]},{name:"Familia 31-35",tags:[{label:"caption-tag-31",color:"caption-tag-31"},{label:"caption-tag-32",color:"caption-tag-32"},{label:"caption-tag-33",color:"caption-tag-33"},{label:"caption-tag-34",color:"caption-tag-34"},{label:"caption-tag-35",color:"caption-tag-35"}]}];static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors"]],standalone:false,decls:17,vars:0,consts:[["p-title","Caption Tag Colors"],["p-title","Paleta completa - 35 cores",1,"po-md-12","po-mb-1"],[1,"po-row"],[1,"po-md-3","po-lg-2","po-mb-1",3,"p-color","p-value"],["p-title","Status de processos",1,"po-md-12","po-mb-1"],["p-orientation","horizontal",1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-label","p-value"],["p-title","Categorias com icones",1,"po-md-12"],[1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-icon","p-value"],["p-title","Familias de cores",1,"po-md-12","po-mb-1"],[3,"p-label"],[1,"po-md-4","po-lg-2","po-mb-1",3,"p-color","p-value"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-widget",1)(2,"div",2),cx(3,He,1,2,"po-tag",3,j),og()(),Cl(5,"po-widget",4)(6,"div",2),cx(7,Re,1,3,"po-tag",5,j),og()(),Cl(9,"po-widget",6)(10,"div",2),cx(11,$e,1,3,"po-tag",7,j),og()(),Cl(13,"po-widget",8)(14,"po-tabs"),cx(15,Ge,4,1,"po-tab",9,Ne),og()()()),r&2&&(Lp(3),lx(i.captionTags),Lp(4),lx(i.statusItems),Lp(4),lx(i.categories),Lp(4),lx(i.families));},dependencies:[Pa,SNe,ofe,lfe,ONe],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tag - Caption Tag Colors"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Caption Tag Colors">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tag-caption-tag-colors"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Je,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ce],encapsulation:2})}return a})();var ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-doc"]],standalone:false,decls:1168,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTagModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-tag"),og(),qx(9,"."),og()(),Cl(10,"h3",3),qx(11,"Componente"),og(),Cl(12,"h4",4)(13,"code",5),qx(14,"PoTagComponent"),og()(),Cl(15,"div",2)(16,"p"),qx(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),og(),Cl(18,"p"),qx(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),Cl(20,"em"),qx(21,"click"),og(),qx(22," quanto atrav\xE9s das teclas "),Cl(23,"em"),qx(24,"enter/space"),og(),qx(25,` enquanto navega
utilizando a tecla `),Cl(26,"em"),qx(27,"tab"),og(),qx(28,"."),og(),Cl(29,"p"),qx(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),og(),Cl(31,"h4"),qx(32,"Tokens customiz\xE1veis"),og(),Cl(33,"p"),qx(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(35,"blockquote")(36,"p"),qx(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(38,"a",6),qx(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(40,"."),og()(),Cl(41,"table")(42,"thead")(43,"tr")(44,"th"),qx(45,"Propriedade"),og(),Cl(46,"th"),qx(47,"Descri\xE7\xE3o"),og(),Cl(48,"th"),qx(49,"Valor Padr\xE3o"),og()()(),Cl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),qx(54,"Default Values"),og()(),Hl(55,"td")(56,"td"),og(),Cl(57,"tr")(58,"td")(59,"code"),qx(60,"--font-family"),og()(),Cl(61,"td"),qx(62,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(63,"td")(64,"code"),qx(65,"var(--font-family-theme)"),og()()(),Cl(66,"tr")(67,"td")(68,"code"),qx(69,"--font-size"),og()(),Cl(70,"td"),qx(71,"Tamanho da fonte"),og(),Cl(72,"td")(73,"code"),qx(74,"var(--font-size-sm)"),og()()(),Cl(75,"tr")(76,"td")(77,"code"),qx(78,"--line-height"),og()(),Cl(79,"td"),qx(80,"Tamanho da label"),og(),Cl(81,"td")(82,"code"),qx(83,"var(---line-height-sm)"),og()()(),Cl(84,"tr")(85,"td")(86,"code"),qx(87,"--border-radius"),og()(),Cl(88,"td"),qx(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(90,"td")(91,"code"),qx(92,"var(--border-radius-pill)"),og()()(),Cl(93,"tr")(94,"td")(95,"code"),qx(96,"--gap"),og()(),Cl(97,"td"),qx(98,"Espa\xE7amento entre o label e o value"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--spacing-xs)"),og()()(),Cl(102,"tr")(103,"td")(104,"strong"),qx(105,"Neutral"),og()(),Hl(106,"td")(107,"td"),og(),Cl(108,"tr")(109,"td")(110,"code"),qx(111,"--color-neutral"),og()(),Cl(112,"td"),qx(113,"Cor principal no estado neutral"),og(),Cl(114,"td")(115,"code"),qx(116,"var(--color-neutral-light-10)"),og()()(),Cl(117,"tr")(118,"td")(119,"code"),qx(120,"--text-color-positive"),og()(),Cl(121,"td"),qx(122,"Cor do texto no estado neutral"),og(),Cl(123,"td")(124,"code"),qx(125,"var(--color-neutral-dark-80)"),og()()(),Cl(126,"tr")(127,"td")(128,"strong"),qx(129,"Positive"),og()(),Hl(130,"td")(131,"td"),og(),Cl(132,"tr")(133,"td")(134,"code"),qx(135,"--color-positive"),og()(),Cl(136,"td"),qx(137,"Cor principal no estado positive"),og(),Cl(138,"td")(139,"code"),qx(140,"var(--color-feedback-positive-lightest)"),og()()(),Cl(141,"tr")(142,"td")(143,"code"),qx(144,"--text-color-positive"),og()(),Cl(145,"td"),qx(146,"Cor do texto no estado positive"),og(),Cl(147,"td")(148,"code"),qx(149,"var(--color-feedback-positive-dark)"),og()()(),Cl(150,"tr")(151,"td")(152,"strong"),qx(153,"Negative"),og()(),Hl(154,"td")(155,"td"),og(),Cl(156,"tr")(157,"td")(158,"code"),qx(159,"--color-negative"),og()(),Cl(160,"td"),qx(161,"Cor principal no estado danger"),og(),Cl(162,"td")(163,"code"),qx(164,"var(--color-feedback-negative-lightest)"),og()()(),Cl(165,"tr")(166,"td")(167,"code"),qx(168,"--text-color-negative"),og()(),Cl(169,"td"),qx(170,"Cor do texto no estado danger"),og(),Cl(171,"td")(172,"code"),qx(173,"var(--color-feedback-negative-darker)"),og()()(),Cl(174,"tr")(175,"td")(176,"strong"),qx(177,"Warning"),og()(),Hl(178,"td")(179,"td"),og(),Cl(180,"tr")(181,"td")(182,"code"),qx(183,"--color-tag-warning"),og()(),Cl(184,"td"),qx(185,"Cor principal no estado warning"),og(),Cl(186,"td")(187,"code"),qx(188,"var(--color-feedback-warning-lightest)"),og()()(),Cl(189,"tr")(190,"td")(191,"code"),qx(192,"--text-color-warning"),og()(),Cl(193,"td"),qx(194,"Cor do texto no estado warning"),og(),Cl(195,"td")(196,"code"),qx(197,"var(--color-feedback-warning-darkest)"),og()()(),Cl(198,"tr")(199,"td")(200,"strong"),qx(201,"Info"),og()(),Hl(202,"td")(203,"td"),og(),Cl(204,"tr")(205,"td")(206,"code"),qx(207,"--color-info"),og()(),Cl(208,"td"),qx(209,"Cor principal no estado info"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-feedback-info-lightest)"),og()()(),Cl(213,"tr")(214,"td")(215,"code"),qx(216,"--text-color-info"),og()(),Cl(217,"td"),qx(218,"Cor do texto no estado info"),og(),Cl(219,"td")(220,"code"),qx(221,"var(--color-feedback-info-dark)"),og()()(),Cl(222,"tr")(223,"td")(224,"strong"),qx(225,"Removable"),og()(),Hl(226,"td")(227,"td"),og(),Cl(228,"tr")(229,"td")(230,"code"),qx(231,"--color"),og()(),Cl(232,"td"),qx(233,"Cor principal quando removable"),og(),Cl(234,"td")(235,"code"),qx(236,"var(--color-brand-01-lightest)"),og()()(),Cl(237,"tr")(238,"td")(239,"code"),qx(240,"--border-color"),og()(),Cl(241,"td"),qx(242,"Cor de borda quando removable \xA0"),og(),Cl(243,"td")(244,"code"),qx(245,"var(--color-brand-01-lighter)"),og()()(),Cl(246,"tr")(247,"td")(248,"code"),qx(249,"--color-icon"),og()(),Cl(250,"td"),qx(251,"Cor do \xEDcone quando removable \xA0"),og(),Cl(252,"td")(253,"code"),qx(254,"var(--color-action-default)"),og()()(),Cl(255,"tr")(256,"td")(257,"code"),qx(258,"--text-color"),og()(),Cl(259,"td"),qx(260,"Cor do texto quando removable \xA0"),og(),Cl(261,"td")(262,"code"),qx(263,"var(--color-neutral-dark-80)"),og()()(),Cl(264,"tr")(265,"td")(266,"code"),qx(267,"--color-hover"),og()(),Cl(268,"td"),qx(269,"Cor do hover no estado removable \xA0"),og(),Cl(270,"td")(271,"code"),qx(272,"var(--color-brand-01-lighter)"),og()()(),Cl(273,"tr")(274,"td")(275,"strong"),qx(276,"Focused"),og()(),Hl(277,"td")(278,"td"),og(),Cl(279,"tr")(280,"td")(281,"code"),qx(282,"--outline-color-focused"),og()(),Cl(283,"td"),qx(284,"Cor do outline do estado de focus"),og(),Cl(285,"td")(286,"code"),qx(287,"var(--color-action-focus)"),og()()(),Cl(288,"tr")(289,"td")(290,"strong"),qx(291,"Disabled"),og()(),Hl(292,"td")(293,"td"),og(),Cl(294,"tr")(295,"td")(296,"code"),qx(297,"--color-disabled"),og()(),Cl(298,"td"),qx(299,"Cor principal no estado disabled"),og(),Cl(300,"td")(301,"code"),qx(302,"var(--color-neutral-light-20)"),og()()(),Cl(303,"tr")(304,"td")(305,"code"),qx(306,"--border-color-disabled"),og()(),Cl(307,"td"),qx(308,"Cor da borda no estado disabled \xA0"),og(),Cl(309,"td")(310,"code"),qx(311,"var(--color-action-disabled)"),og()()(),Cl(312,"tr")(313,"td")(314,"code"),qx(315,"--color-icon-disabled"),og()(),Cl(316,"td"),qx(317,"Cor do icone no estado disabled \xA0"),og(),Cl(318,"td")(319,"code"),qx(320,"var(--color-action-disabled)"),og()()(),Cl(321,"tr")(322,"td")(323,"code"),qx(324,"--text-color-disabled"),og()(),Cl(325,"td"),qx(326,"Cor do texto no estado disabled \xA0"),og(),Cl(327,"td")(328,"code"),qx(329,"var(--color-neutral-mid-60)"),og()()()()()(),Cl(330,"div",7)(331,"h4",8),qx(332,"Seletor"),og(),Cl(333,"pre",9),qx(334,`<po-tag
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
`),og()(),Cl(335,"h4",10),qx(336,"Propriedades"),og(),Cl(337,"table",11)(338,"tr",12)(339,"th",13),qx(340,"Nome"),og(),Cl(341,"th",13),qx(342,"Tipo"),og(),Cl(343,"th",13),qx(344,"Padr\xE3o"),og(),Cl(345,"th",13),qx(346,"Descri\xE7\xE3o"),og()(),Cl(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),qx(351," (p-click)"),Hl(352,"br"),og()()(),Cl(353,"td",18)(354,"code",19),qx(355,"EventEmitter"),og()(),Cl(356,"td",20),qx(357,"-"),og(),Cl(358,"td",21)(359,"em")(360,"strong"),qx(361,"(opcional)"),og()(),Cl(362,"p"),qx(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),Cl(364,"code"),qx(365,"po-tag"),og(),qx(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),og(),Cl(367,"p"),qx(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),og()()(),Cl(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),qx(373," p-color"),Hl(374,"br"),og()()(),Cl(375,"td",18)(376,"code",24),qx(377,"string"),og()(),Cl(378,"td",20),qx(379,"-"),og(),Cl(380,"td",21)(381,"em")(382,"strong"),qx(383,"(opcional)"),og()(),Cl(384,"p"),qx(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),og(),Cl(386,"ul")(387,"li"),qx(388,"Hexadeximal, por exemplo "),Cl(389,"code"),qx(390,"#c64840"),og(),qx(391,";"),og(),Cl(392,"li"),qx(393,"RGB, como "),Cl(394,"code"),qx(395,"rgb(0, 0, 165)"),og(),qx(396,";"),og(),Cl(397,"li"),qx(398,"O nome da cor, por exemplo "),Cl(399,"code"),qx(400,"blue"),og(),qx(401,";"),og(),Cl(402,"li"),qx(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Cl(404,"ul")(405,"li"),Hl(406,"span",25),Cl(407,"code"),qx(408,"color-01"),og()(),Cl(409,"li"),Hl(410,"span",26),Cl(411,"code"),qx(412,"color-02"),og()(),Cl(413,"li"),Hl(414,"span",27),Cl(415,"code"),qx(416,"color-03"),og()(),Cl(417,"li"),Hl(418,"span",28),Cl(419,"code"),qx(420,"color-04"),og()(),Cl(421,"li"),Hl(422,"span",29),Cl(423,"code"),qx(424,"color-05"),og()(),Cl(425,"li"),Hl(426,"span",30),Cl(427,"code"),qx(428,"color-06"),og()(),Cl(429,"li"),Hl(430,"span",31),Cl(431,"code"),qx(432,"color-07"),og()(),Cl(433,"li"),Hl(434,"span",32),Cl(435,"code"),qx(436,"color-08"),og()(),Cl(437,"li"),Hl(438,"span",33),Cl(439,"code"),qx(440,"color-09"),og()(),Cl(441,"li"),Hl(442,"span",34),Cl(443,"code"),qx(444,"color-10"),og()(),Cl(445,"li"),Hl(446,"span",35),Cl(447,"code"),qx(448,"color-11"),og()(),Cl(449,"li"),Hl(450,"span",36),Cl(451,"code"),qx(452,"color-12"),og()()()()(),Cl(453,"blockquote")(454,"p"),qx(455,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Cl(456,"strong"),qx(457,"Caption Tag Colors"),og(),qx(458,":"),og()(),Cl(459,"ul")(460,"li"),Hl(461,"span",37),Cl(462,"code"),qx(463,"caption-tag-01"),og(),Hl(464,"span",38),Cl(465,"code"),qx(466,"caption-tag-02"),og(),Hl(467,"span",39),Cl(468,"code"),qx(469,"caption-tag-03"),og(),Hl(470,"span",40),Cl(471,"code"),qx(472,"caption-tag-04"),og(),Hl(473,"span",41),Cl(474,"code"),qx(475,"caption-tag-05"),og()(),Cl(476,"li"),Hl(477,"span",42),Cl(478,"code"),qx(479,"caption-tag-06"),og(),Hl(480,"span",43),Cl(481,"code"),qx(482,"caption-tag-07"),og(),Hl(483,"span",44),Cl(484,"code"),qx(485,"caption-tag-08"),og(),Hl(486,"span",45),Cl(487,"code"),qx(488,"caption-tag-09"),og(),Hl(489,"span",46),Cl(490,"code"),qx(491,"caption-tag-10"),og()(),Cl(492,"li"),Hl(493,"span",47),Cl(494,"code"),qx(495,"caption-tag-11"),og(),Hl(496,"span",48),Cl(497,"code"),qx(498,"caption-tag-12"),og(),Hl(499,"span",49),Cl(500,"code"),qx(501,"caption-tag-13"),og(),Hl(502,"span",50),Cl(503,"code"),qx(504,"caption-tag-14"),og(),Hl(505,"span",51),Cl(506,"code"),qx(507,"caption-tag-15"),og()(),Cl(508,"li"),Hl(509,"span",52),Cl(510,"code"),qx(511,"caption-tag-16"),og(),Hl(512,"span",53),Cl(513,"code"),qx(514,"caption-tag-17"),og(),Hl(515,"span",54),Cl(516,"code"),qx(517,"caption-tag-18"),og(),Hl(518,"span",55),Cl(519,"code"),qx(520,"caption-tag-19"),og(),Hl(521,"span",56),Cl(522,"code"),qx(523,"caption-tag-20"),og()(),Cl(524,"li"),Hl(525,"span",57),Cl(526,"code"),qx(527,"caption-tag-21"),og(),Hl(528,"span",58),Cl(529,"code"),qx(530,"caption-tag-22"),og(),Hl(531,"span",59),Cl(532,"code"),qx(533,"caption-tag-23"),og(),Hl(534,"span",60),Cl(535,"code"),qx(536,"caption-tag-24"),og(),Hl(537,"span",61),Cl(538,"code"),qx(539,"caption-tag-25"),og()(),Cl(540,"li"),Hl(541,"span",62),Cl(542,"code"),qx(543,"caption-tag-26"),og(),Hl(544,"span",63),Cl(545,"code"),qx(546,"caption-tag-27"),og(),Hl(547,"span",64),Cl(548,"code"),qx(549,"caption-tag-28"),og(),Hl(550,"span",65),Cl(551,"code"),qx(552,"caption-tag-29"),og(),Hl(553,"span",66),Cl(554,"code"),qx(555,"caption-tag-30"),og()(),Cl(556,"li"),Hl(557,"span",67),Cl(558,"code"),qx(559,"caption-tag-31"),og(),Hl(560,"span",68),Cl(561,"code"),qx(562,"caption-tag-32"),og(),Hl(563,"span",69),Cl(564,"code"),qx(565,"caption-tag-33"),og(),Hl(566,"span",70),Cl(567,"code"),qx(568,"caption-tag-34"),og(),Hl(569,"span",71),Cl(570,"code"),qx(571,"caption-tag-35"),og()()(),Cl(572,"p"),qx(573,"Exemplo de uso:"),og(),Cl(574,"pre")(575,"code"),qx(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),og()(),Cl(577,"ul")(578,"li"),qx(579,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),og(),Cl(580,"li"),qx(581,"Para as cores legacy ("),Cl(582,"code"),qx(583,"color-01"),og(),qx(584," a "),Cl(585,"code"),qx(586,"color-12"),og(),qx(587,") e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade."),og(),Cl(588,"li"),qx(589,"Para as cores "),Cl(590,"strong"),qx(591,"Caption Tag Colors"),og(),qx(592," ("),Cl(593,"code"),qx(594,"caption-tag-01"),og(),qx(595," a "),Cl(596,"code"),qx(597,"caption-tag-35"),og(),qx(598,"), a cor do texto \xE9 fixa e definida via token CSS, n\xE3o sendo poss\xEDvel alter\xE1-la via "),Cl(599,"code"),qx(600,"p-text-color"),og(),qx(601,"."),og()(),Cl(602,"blockquote")(603,"p")(604,"strong"),qx(605,"Aten\xE7\xE3o:"),og(),qx(606," A propriedade "),Cl(607,"code"),qx(608,"p-type"),og(),qx(609," sobrep\xF5e esta defini\xE7\xE3o."),og()()()(),Cl(610,"tr",14)(611,"td",15)(612,"div",22)(613,"span",23),qx(614," p-disabled"),Hl(615,"br"),og()()(),Cl(616,"td",18)(617,"code",72),qx(618,"boolean"),og()(),Cl(619,"td",20)(620,"p")(621,"code"),qx(622,"false"),og()()(),Cl(623,"td",21)(624,"em")(625,"strong"),qx(626,"(opcional)"),og()(),Cl(627,"p"),qx(628,"Desabilita o "),Cl(629,"code"),qx(630,"po-tag"),og(),qx(631," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og(),Cl(632,"blockquote")(633,"p"),qx(634,"A propriedade "),Cl(635,"code"),qx(636,"p-disabled"),og(),qx(637," somente ter\xE1 efeito caso a propriedade "),Cl(638,"code"),qx(639,"p-removable"),og(),qx(640," esteja definida como "),Cl(641,"code"),qx(642,"true"),og(),qx(643,"."),og()()()(),Cl(644,"tr",14)(645,"td",15)(646,"div",22)(647,"span",23),qx(648," p-icon"),Hl(649,"br"),og()()(),Cl(650,"td",18)(651,"code",24),qx(652,"string "),og(),Cl(653,"code",72),qx(654," boolean "),og(),Cl(655,"code",73),qx(656," TemplateRef<void>"),og()(),Cl(657,"td",20)(658,"p")(659,"code"),qx(660,"false"),og()()(),Cl(661,"td",21)(662,"em")(663,"strong"),qx(664,"(opcional)"),og()(),Cl(665,"p"),qx(666,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Cl(667,"em"),qx(668,"tag"),og(),qx(669,"."),og(),Cl(670,"p"),qx(671,"Quando "),Cl(672,"code"),qx(673,"p-type"),og(),qx(674," estiver definida, basta informar um valor igual a "),Cl(675,"code"),qx(676,"true"),og(),qx(677," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),og(),Cl(678,"ul")(679,"li"),Hl(680,"span",74),qx(681," - "),Cl(682,"code"),qx(683,"success"),og()(),Cl(684,"li"),Hl(685,"span",75),qx(686," - "),Cl(687,"code"),qx(688,"warning"),og()(),Cl(689,"li"),Hl(690,"span",76),qx(691," - "),Cl(692,"code"),qx(693,"danger"),og()(),Cl(694,"li"),Hl(695,"span",77),qx(696," - "),Cl(697,"code"),qx(698,"info"),og()()(),Cl(699,"p"),qx(700,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(701,"a",78),qx(702,"Biblioteca de \xEDcones"),og(),qx(703,". conforme exemplo abaixo:"),og(),Cl(704,"pre")(705,"code"),qx(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),og()(),Cl(707,"p"),qx(708,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(709,"em"),qx(710,"Font Awesome"),og(),qx(711,", da seguinte forma:"),og(),Cl(712,"pre")(713,"code"),qx(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),og()(),Cl(715,"p"),qx(716,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(717,"code"),qx(718,"TemplateRef"),og(),qx(719,", conforme exemplo abaixo:"),og(),Cl(720,"pre")(721,"code"),qx(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(723,"blockquote")(724,"p"),qx(725,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(726,"code"),qx(727,"font-size: inherit"),og(),qx(728," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(729,"tr",14)(730,"td",15)(731,"div",22)(732,"span",23),qx(733," p-label"),Hl(734,"br"),og()()(),Cl(735,"td",18)(736,"code",24),qx(737,"string"),og()(),Cl(738,"td",20),qx(739,"-"),og(),Cl(740,"td",21)(741,"em")(742,"strong"),qx(743,"(opcional)"),og()(),Cl(744,"p"),qx(745,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),Cl(746,"em"),qx(747,"tag"),og(),qx(748,", de acordo com a "),Cl(749,"code"),qx(750,"p-orientation"),og(),qx(751,"."),og()()(),Cl(752,"tr",14)(753,"td",15)(754,"div",22)(755,"span",23),qx(756," p-literals"),Hl(757,"br"),og()()(),Cl(758,"td",18)(759,"code",79),qx(760,"PoTagLiterals"),og()(),Cl(761,"td",20),qx(762,"-"),og(),Cl(763,"td",21)(764,"em")(765,"strong"),qx(766,"(opcional)"),og()(),Cl(767,"p"),qx(768,"Objeto com as literais usadas no "),Cl(769,"code"),qx(770,"po-tag"),og(),qx(771,"."),og(),Cl(772,"p"),qx(773,"Para utilizar, basta passar a literal customizada:"),og(),Cl(774,"pre")(775,"code"),qx(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),og()(),Cl(777,"p"),qx(778,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Cl(779,"pre")(780,"code"),qx(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),og()(),Cl(782,"blockquote")(783,"p"),qx(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(785,"a",80)(786,"code"),qx(787,"PoI18nService"),og()(),qx(788," ou do browser."),og()()()(),Cl(789,"tr",14)(790,"td",15)(791,"div",22)(792,"span",23),qx(793," p-orientation"),Hl(794,"br"),og()()(),Cl(795,"td",18)(796,"code",81),qx(797,"PoTagOrientation"),og()(),Cl(798,"td",20)(799,"p")(800,"code"),qx(801,"vertical"),og()()(),Cl(802,"td",21)(803,"em")(804,"strong"),qx(805,"(opcional)"),og()(),Cl(806,"p"),qx(807,"Define o "),Cl(808,"em"),qx(809,"layout"),og(),qx(810," de exibi\xE7\xE3o."),og()()(),Cl(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),qx(815," p-removable"),Hl(816,"br"),og()()(),Cl(817,"td",18)(818,"code",72),qx(819,"boolean"),og()(),Cl(820,"td",20)(821,"p")(822,"code"),qx(823,"false"),og()()(),Cl(824,"td",21)(825,"em")(826,"strong"),qx(827,"(opcional)"),og()(),Cl(828,"p"),qx(829,"Habilita a op\xE7\xE3o de remover a tag"),og()()(),Cl(830,"tr",14)(831,"td",15)(832,"div",16)(833,"span",17),qx(834," (p-close)"),Hl(835,"br"),og()()(),Cl(836,"td",18)(837,"code",19),qx(838,"EventEmitter"),og()(),Cl(839,"td",20),qx(840,"-"),og(),Cl(841,"td",21)(842,"em")(843,"strong"),qx(844,"(opcional)"),og()(),Cl(845,"p"),qx(846,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),Cl(847,"code"),qx(848,"po-tag"),og()()()(),Cl(849,"tr",14)(850,"td",15)(851,"div",22)(852,"span",23),qx(853," p-text-color"),Hl(854,"br"),og()()(),Cl(855,"td",18)(856,"code",24),qx(857,"string"),og()(),Cl(858,"td",20),qx(859,"-"),og(),Cl(860,"td",21)(861,"em")(862,"strong"),qx(863,"(opcional)"),og()(),Cl(864,"p"),qx(865,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Cl(866,"ul")(867,"li")(868,"p"),qx(869,"Hexadeximal, por exemplo "),Cl(870,"code"),qx(871,"#c64840"),og(),qx(872,";"),og()(),Cl(873,"li")(874,"p"),qx(875,"RGB, como "),Cl(876,"code"),qx(877,"rgb(0, 0, 165)"),og(),qx(878,";"),og()(),Cl(879,"li")(880,"p"),qx(881,"O nome da cor, por exemplo "),Cl(882,"code"),qx(883,"blue"),og(),qx(884,";"),og()(),Cl(885,"li")(886,"p"),qx(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),og(),Cl(888,"ul")(889,"li"),Hl(890,"span",25),Cl(891,"code"),qx(892,"color-01"),og()(),Cl(893,"li"),Hl(894,"span",26),Cl(895,"code"),qx(896,"color-02"),og()(),Cl(897,"li"),Hl(898,"span",27),Cl(899,"code"),qx(900,"color-03"),og()(),Cl(901,"li"),Hl(902,"span",28),Cl(903,"code"),qx(904,"color-04"),og()(),Cl(905,"li"),Hl(906,"span",29),Cl(907,"code"),qx(908,"color-05"),og()(),Cl(909,"li"),Hl(910,"span",30),Cl(911,"code"),qx(912,"color-06"),og()(),Cl(913,"li"),Hl(914,"span",31),Cl(915,"code"),qx(916,"color-07"),og()(),Cl(917,"li"),Hl(918,"span",32),Cl(919,"code"),qx(920,"color-08"),og()(),Cl(921,"li"),Hl(922,"span",33),Cl(923,"code"),qx(924,"color-09"),og()(),Cl(925,"li"),Hl(926,"span",34),Cl(927,"code"),qx(928,"color-10"),og()(),Cl(929,"li"),Hl(930,"span",35),Cl(931,"code"),qx(932,"color-11"),og()(),Cl(933,"li"),Hl(934,"span",36),Cl(935,"code"),qx(936,"color-12"),og()()()(),Cl(937,"li")(938,"p"),qx(939,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),og()()(),Cl(940,"blockquote")(941,"p")(942,"strong"),qx(943,"Aten\xE7\xE3o:"),og(),qx(944," A propriedade "),Cl(945,"code"),qx(946,"p-type"),og(),qx(947," sobrep\xF5e esta defini\xE7\xE3o."),og()(),Cl(948,"blockquote")(949,"p")(950,"strong"),qx(951,"Aten\xE7\xE3o:"),og(),qx(952," As cores da paleta "),Cl(953,"strong"),qx(954,"Caption Tag Colors"),og(),qx(955," ("),Cl(956,"code"),qx(957,"caption-tag-01"),og(),qx(958," a "),Cl(959,"code"),qx(960,"caption-tag-35"),og(),qx(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),og()()()(),Cl(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),qx(966," p-type"),Hl(967,"br"),og()()(),Cl(968,"td",18)(969,"code",82),qx(970,"PoTagType"),og()(),Cl(971,"td",20)(972,"p")(973,"code"),qx(974,"info"),og()()(),Cl(975,"td",21)(976,"em")(977,"strong"),qx(978,"(opcional)"),og()(),Cl(979,"p"),qx(980,"Define o tipo da "),Cl(981,"em"),qx(982,"tag"),og(),qx(983,"."),og(),Cl(984,"p"),qx(985,"Valores v\xE1lidos:"),og(),Cl(986,"ul")(987,"li")(988,"code"),qx(989,"success"),og(),qx(990,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Cl(991,"li")(992,"code"),qx(993,"warning"),og(),qx(994,": cor amarela que representa aviso ou advert\xEAncia."),og(),Cl(995,"li")(996,"code"),qx(997,"danger"),og(),qx(998,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Cl(999,"li")(1e3,"code"),qx(1001,"info"),og(),qx(1002,": cor azul claro que caracteriza conte\xFAdo informativo."),og(),Cl(1003,"li")(1004,"code"),qx(1005,"neutral"),og(),qx(1006,": cor cinza claro para uso geral."),og()(),Cl(1007,"blockquote")(1008,"p"),qx(1009,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Cl(1010,"code"),qx(1011,"p-color"),og(),qx(1012," e "),Cl(1013,"code"),qx(1014,"p-icon"),og(),qx(1015," somente ser\xE1 exibido caso seja "),Cl(1016,"code"),qx(1017,"true"),og(),qx(1018,"."),og()()()(),Cl(1019,"tr",14)(1020,"td",15)(1021,"div",22)(1022,"span",23),qx(1023," p-value"),Hl(1024,"br"),og()()(),Cl(1025,"td",18)(1026,"code",24),qx(1027,"string"),og()(),Cl(1028,"td",20),qx(1029,"-"),og(),Cl(1030,"td",21)(1031,"p"),qx(1032,"Texto da tag."),og()()()(),Cl(1033,"h3"),qx(1034,"Interfaces"),og(),Cl(1035,"h4",83)(1036,"code",5),qx(1037,"PoTagLiterals"),og()(),Cl(1038,"div",2)(1039,"p"),qx(1040,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1041,"code"),qx(1042,"po-tag"),og(),qx(1043,"."),og()(),Cl(1044,"h4",10),qx(1045,"Propriedades"),og(),Cl(1046,"table",11)(1047,"tr",12)(1048,"th",13),qx(1049,"Nome"),og(),Cl(1050,"th",13),qx(1051,"Tipo"),og(),Cl(1052,"th",13),qx(1053,"Descri\xE7\xE3o"),og()(),Cl(1054,"tr",14)(1055,"td",15)(1056,"div",22)(1057,"span",23),qx(1058," remove"),Hl(1059,"br"),og()()(),Cl(1060,"td",18)(1061,"code",24),qx(1062,"string"),og()(),Cl(1063,"td",21)(1064,"em")(1065,"strong"),qx(1066,"(opcional)"),og()(),Cl(1067,"p"),qx(1068,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),og()()()(),Cl(1069,"h3"),qx(1070,"Enums"),og(),Cl(1071,"h4",4)(1072,"code",5),qx(1073,"PoTagOrientation"),og()(),Cl(1074,"div",2)(1075,"p"),qx(1076,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Cl(1077,"code"),qx(1078,"po-tag"),og(),qx(1079,"."),og()(),Cl(1080,"h4",10),qx(1081,"Propriedades"),og(),Cl(1082,"table",11)(1083,"tr",12)(1084,"th",13),qx(1085,"Nome"),og(),Cl(1086,"th",13),qx(1087,"Descri\xE7\xE3o"),og()(),Cl(1088,"tr",14)(1089,"td",15)(1090,"div",22)(1091,"span",23),qx(1092," Horizontal"),Hl(1093,"br"),og()()(),Cl(1094,"td",21)(1095,"p"),qx(1096,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),og()()(),Cl(1097,"tr",14)(1098,"td",15)(1099,"div",22)(1100,"span",23),qx(1101," Vertical"),Hl(1102,"br"),og()()(),Cl(1103,"td",21)(1104,"p"),qx(1105,"Exibe a tag na vertical, ou seja, abaixo do label."),og()()()(),Cl(1106,"h4",4)(1107,"code",5),qx(1108,"PoTagType"),og()(),Cl(1109,"div",2)(1110,"p"),qx(1111,"Define os tipos dispon\xEDveis para o "),Cl(1112,"code"),qx(1113,"po-tag"),og(),qx(1114,"."),og()(),Cl(1115,"h4",10),qx(1116,"Propriedades"),og(),Cl(1117,"table",11)(1118,"tr",12)(1119,"th",13),qx(1120,"Nome"),og(),Cl(1121,"th",13),qx(1122,"Descri\xE7\xE3o"),og()(),Cl(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),qx(1127," Danger"),Hl(1128,"br"),og()()(),Cl(1129,"td",21)(1130,"p"),qx(1131,"Erro, perigo, problema ou aviso cr\xEDtico."),og()()(),Cl(1132,"tr",14)(1133,"td",15)(1134,"div",22)(1135,"span",23),qx(1136," Info"),Hl(1137,"br"),og()()(),Cl(1138,"td",21)(1139,"p"),qx(1140,"Informativo ou explicativo."),og()()(),Cl(1141,"tr",14)(1142,"td",15)(1143,"div",22)(1144,"span",23),qx(1145," Success"),Hl(1146,"br"),og()()(),Cl(1147,"td",21)(1148,"p"),qx(1149,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),og()()(),Cl(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),qx(1154," Warning"),Hl(1155,"br"),og()()(),Cl(1156,"td",21)(1157,"p"),qx(1158,"Aviso ou advert\xEAncia."),og()()(),Cl(1159,"tr",14)(1160,"td",15)(1161,"div",22)(1162,"span",23),qx(1163," Neutral"),Hl(1164,"br"),og()()(),Cl(1165,"td",21)(1166,"p"),qx(1167,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-tag-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view")(8,"sample-po-tag-caption-tag-colors-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ee,ve,he,Te,ye],encapsulation:2})}return a})();var Ke=[{path:"",component:Pe}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(Ke),bL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,we]})}return a})();export{_t as DocPoTagModule};