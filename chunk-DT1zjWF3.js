import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,dh as V0,di as ws,be as ri,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,bd as na,bC as Vp,al as lx,am as pw,an as $0,ao as QA,ap as hw,aq as G0,ar as JA,bR as Qn,a3 as D3,aU as IR,av as nx,aw as tx,bq as qx,ay as rx,ax as gx,cb as Wx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic"]],standalone:false,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(r,i){r&1&&Ul(0,"po-tag",0);},dependencies:[ri],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tag Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-tag p-value="PO Tag"> </po-tag>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tag-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Be,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,xe],encapsulation:2})}return a})();function Ae(a,c){if(a&1){let l=lx();wl(0,"po-select",14),pw("ngModelChange",function(i){Qy(l);let g=gx();return $x(g.icon,i)||(g.icon=i),Jy(i)}),ng(),$0();}if(a&2){let l=gx();hw("ngModel",l.icon),YE("p-options",l.iconList),G0();}}function Oe(a,c){if(a&1){let l=lx();wl(0,"po-switch",15),pw("ngModelChange",function(i){Qy(l);let g=gx();return $x(g.icon,i)||(g.icon=i),Jy(i)}),ng(),$0();}if(a&2){let l=gx();hw("ngModel",l.icon),G0();}}var fe=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:V0.Horizontal},{label:"Vertical",value:V0.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:ws.Info},{label:"Danger",value:ws.Danger},{label:"Success",value:ws.Success},{label:"Warning",value:ws.Warning},{label:"Neutral",value:ws.Neutral}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}propertiesChange(l){let r=[...this.propertiesOptions];l.includes("removable")?(r[1]={value:"disabled",label:"Disabled",disabled:false},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!=="disabled");}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs"]],standalone:false,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let g=lx();wl(0,"po-tag",1),ut("p-click",function(){return i.changeEvent("p-click")}),ng(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3),ng(),Ul(4,"po-divider"),wl(5,"form",null,0)(7,"div",2)(8,"po-input",4),pw("ngModelChange",function(d){return Qy(g),$x(i.label,d)||(i.label=d),Jy(d)}),ng(),$0(),wl(9,"po-input",5),pw("ngModelChange",function(d){return Qy(g),$x(i.value,d)||(i.value=d),Jy(d)}),ng(),$0(),ng(),wl(10,"div",2)(11,"po-input",6),pw("ngModelChange",function(d){return Qy(g),$x(i.color,d)||(i.color=d),Jy(d)}),ng(),$0(),wl(12,"po-input",7),pw("ngModelChange",function(d){return Qy(g),$x(i.textColor,d)||(i.textColor=d),Jy(d)}),ng(),$0(),QA(13,Ae,1,2,"po-select",8),wl(14,"po-checkbox-group",9),pw("ngModelChange",function(d){return Qy(g),$x(i.properties,d)||(i.properties=d),Jy(d)}),ut("p-change",function(d){return i.propertiesChange(d)}),ng(),$0(),QA(15,Oe,1,1,"po-switch",10),ng(),wl(16,"div",2)(17,"po-radio-group",11),pw("ngModelChange",function(d){return Qy(g),$x(i.orientation,d)||(i.orientation=d),Jy(d)}),ng(),$0(),wl(18,"po-radio-group",12),pw("ngModelChange",function(d){return Qy(g),$x(i.type,d)||(i.type=d),Jy(d)}),ng(),$0(),ng(),wl(19,"div",2)(20,"po-button",13),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(YE("p-color",i.color)("p-disabled",i.properties.includes("disabled"))("p-removable",i.properties.includes("removable"))("p-icon",i.icon)("p-text-color",i.textColor)("p-label",i.label)("p-orientation",i.orientation)("p-type",i.type)("p-value",i.value),Pp(3),YE("p-value",i.event),Pp(5),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.value),G0(),Pp(2),hw("ngModel",i.color),G0(),Pp(),hw("ngModel",i.textColor),G0(),Pp(),JA(i.type?-1:13),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),JA(i.type?15:-1),Pp(2),hw("ngModel",i.orientation),YE("p-options",i.orientationOptions),G0(),Pp(),hw("ngModel",i.type),YE("p-options",i.typeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,ya,na,ri,Vp],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"],changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tag Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-tag
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-tag-labs/sample-po-tag-labs.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-tag-labs"),ng(),Ul(29,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ve,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return a})();function We(a,c){if(a&1&&Ul(0,"po-tag",12),a&2){let l=c.$implicit;YE("p-label",l.label)("p-type",l.type)("p-value",l.value);}}function Ne(a,c){if(a&1&&(wl(0,"po-widget",15)(1,"div",3),Ul(2,"po-info",16)(3,"po-tag",17),ng()()),a&2){let l=c.$implicit;Pp(2),YE("p-label",l.label)("p-value",l.value),Pp(),YE("p-type",l.type)("p-value",l.text);}}function He(a,c){if(a&1&&(wl(0,"po-tab",14),nx(1,Ne,4,4,"po-widget",15,tx),ng()),a&2){let l=c.$implicit;YE("p-label",Wx(l.month)),Pp(),rx(l.details);}}var Te=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:false,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),Ul(5,"po-avatar",5),ng(),wl(6,"div",6)(7,"div",7),Ul(8,"po-info",8)(9,"po-tag",9),ng(),wl(10,"div",7),Ul(11,"po-info",10),ng()()()(),wl(12,"po-widget",11)(13,"div",3),nx(14,We,1,3,"po-tag",12,tx),ng()()(),wl(16,"po-widget",13)(17,"po-tabs"),nx(18,He,3,2,"po-tab",14,tx),ng()()()),r&2&&(Pp(5),YE("p-src",qx("assets/graphics/",i.userData.photo)),Pp(3),YE("p-value",i.userData.name),Pp(3),YE("p-value",i.userData.email),Pp(3),rx(i.investiments),Pp(4),rx(i.items));},dependencies:[Qn,ri,Vp,D3,Vd,Rd,IR],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tag - Bank Account"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Bank Statement">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tag-bank-account"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,$e,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Te],encapsulation:2})}return a})();var G=(a,c)=>c.color,Ge=(a,c)=>c.name;function Ue(a,c){if(a&1&&Ul(0,"po-tag",3),a&2){let l=c.$implicit;YE("p-color",l.color)("p-value",l.label);}}function Je(a,c){if(a&1&&Ul(0,"po-tag",5),a&2){let l=c.$implicit;YE("p-color",l.color)("p-label",l.label)("p-value",l.value);}}function Qe(a,c){if(a&1&&Ul(0,"po-tag",7),a&2){let l=c.$implicit;YE("p-color",l.color)("p-icon",l.icon)("p-value",l.label);}}function Ye(a,c){if(a&1&&Ul(0,"po-tag",10),a&2){let l=c.$implicit;YE("p-color",l.color)("p-value",l.label);}}function Ke(a,c){if(a&1&&(wl(0,"po-tab",9)(1,"div",2),nx(2,Ye,1,2,"po-tag",10,G),ng()()),a&2){let l=c.$implicit;YE("p-label",l.name),Pp(2),rx(l.tags);}}var Pe=(()=>{class a{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,"0");return {label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:"Ativo",value:"Em operacao",color:"caption-tag-01"},{label:"Pendente",value:"Aguardando aprovacao",color:"caption-tag-06"},{label:"Em analise",value:"Verificacao interna",color:"caption-tag-11"},{label:"Concluido",value:"Finalizado com sucesso",color:"caption-tag-16"},{label:"Cancelado",value:"Operacao cancelada",color:"caption-tag-21"},{label:"Expirado",value:"Prazo excedido",color:"caption-tag-26"},{label:"Bloqueado",value:"Acesso restrito",color:"caption-tag-31"}];categories=[{label:"Financeiro",color:"caption-tag-03",icon:"an an-currency-circle-dollar"},{label:"Recursos Humanos",color:"caption-tag-08",icon:"an an-users"},{label:"Logistica",color:"caption-tag-13",icon:"an an-truck"},{label:"Vendas",color:"caption-tag-18",icon:"an an-shopping-cart-simple"},{label:"Suporte",color:"caption-tag-23",icon:"an an-headset"},{label:"Marketing",color:"caption-tag-28",icon:"an an-megaphone-simple"},{label:"TI",color:"caption-tag-33",icon:"an an-desktop-tower"}];families=[{name:"Familia 01-05",tags:[{label:"caption-tag-01",color:"caption-tag-01"},{label:"caption-tag-02",color:"caption-tag-02"},{label:"caption-tag-03",color:"caption-tag-03"},{label:"caption-tag-04",color:"caption-tag-04"},{label:"caption-tag-05",color:"caption-tag-05"}]},{name:"Familia 06-10",tags:[{label:"caption-tag-06",color:"caption-tag-06"},{label:"caption-tag-07",color:"caption-tag-07"},{label:"caption-tag-08",color:"caption-tag-08"},{label:"caption-tag-09",color:"caption-tag-09"},{label:"caption-tag-10",color:"caption-tag-10"}]},{name:"Familia 11-15",tags:[{label:"caption-tag-11",color:"caption-tag-11"},{label:"caption-tag-12",color:"caption-tag-12"},{label:"caption-tag-13",color:"caption-tag-13"},{label:"caption-tag-14",color:"caption-tag-14"},{label:"caption-tag-15",color:"caption-tag-15"}]},{name:"Familia 16-20",tags:[{label:"caption-tag-16",color:"caption-tag-16"},{label:"caption-tag-17",color:"caption-tag-17"},{label:"caption-tag-18",color:"caption-tag-18"},{label:"caption-tag-19",color:"caption-tag-19"},{label:"caption-tag-20",color:"caption-tag-20"}]},{name:"Familia 21-25",tags:[{label:"caption-tag-21",color:"caption-tag-21"},{label:"caption-tag-22",color:"caption-tag-22"},{label:"caption-tag-23",color:"caption-tag-23"},{label:"caption-tag-24",color:"caption-tag-24"},{label:"caption-tag-25",color:"caption-tag-25"}]},{name:"Familia 26-30",tags:[{label:"caption-tag-26",color:"caption-tag-26"},{label:"caption-tag-27",color:"caption-tag-27"},{label:"caption-tag-28",color:"caption-tag-28"},{label:"caption-tag-29",color:"caption-tag-29"},{label:"caption-tag-30",color:"caption-tag-30"}]},{name:"Familia 31-35",tags:[{label:"caption-tag-31",color:"caption-tag-31"},{label:"caption-tag-32",color:"caption-tag-32"},{label:"caption-tag-33",color:"caption-tag-33"},{label:"caption-tag-34",color:"caption-tag-34"},{label:"caption-tag-35",color:"caption-tag-35"}]}];static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors"]],standalone:false,decls:17,vars:0,consts:[["p-title","Caption Tag Colors"],["p-title","Paleta completa - 35 cores",1,"po-md-12","po-mb-1"],[1,"po-row"],[1,"po-md-3","po-lg-2","po-mb-1",3,"p-color","p-value"],["p-title","Status de processos",1,"po-md-12","po-mb-1"],["p-orientation","horizontal",1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-label","p-value"],["p-title","Categorias com icones",1,"po-md-12"],[1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-icon","p-value"],["p-title","Familias de cores",1,"po-md-12","po-mb-1"],[3,"p-label"],[1,"po-md-4","po-lg-2","po-mb-1",3,"p-color","p-value"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-widget",1)(2,"div",2),nx(3,Ue,1,2,"po-tag",3,G),ng()(),wl(5,"po-widget",4)(6,"div",2),nx(7,Je,1,3,"po-tag",5,G),ng()(),wl(9,"po-widget",6)(10,"div",2),nx(11,Qe,1,3,"po-tag",7,G),ng()(),wl(13,"po-widget",8)(14,"po-tabs"),nx(15,Ke,4,1,"po-tab",9,Ge),ng()()()),r&2&&(Pp(3),rx(i.captionTags),Pp(4),rx(i.statusItems),Pp(4),rx(i.categories),Pp(4),rx(i.families));},dependencies:[ri,D3,Vd,Rd,IR],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tag - Caption Tag Colors"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Caption Tag Colors">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tag-caption-tag-colors"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ze,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Pe],encapsulation:2})}return a})();var _e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-doc"]],standalone:false,decls:1168,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoTagModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-tag"),ng(),Ux(9,"."),ng()(),wl(10,"h3",3),Ux(11,"Componente"),ng(),wl(12,"h4",4)(13,"code",5),Ux(14,"PoTagComponent"),ng()(),wl(15,"div",2)(16,"p"),Ux(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),ng(),wl(18,"p"),Ux(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),wl(20,"em"),Ux(21,"click"),ng(),Ux(22," quanto atrav\xE9s das teclas "),wl(23,"em"),Ux(24,"enter/space"),ng(),Ux(25,` enquanto navega
utilizando a tecla `),wl(26,"em"),Ux(27,"tab"),ng(),Ux(28,"."),ng(),wl(29,"p"),Ux(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),ng(),wl(31,"h4"),Ux(32,"Tokens customiz\xE1veis"),ng(),wl(33,"p"),Ux(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(35,"blockquote")(36,"p"),Ux(37,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(38,"a",6),Ux(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(40,"."),ng()(),wl(41,"table")(42,"thead")(43,"tr")(44,"th"),Ux(45,"Propriedade"),ng(),wl(46,"th"),Ux(47,"Descri\xE7\xE3o"),ng(),wl(48,"th"),Ux(49,"Valor Padr\xE3o"),ng()()(),wl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),Ux(54,"Default Values"),ng()(),Ul(55,"td")(56,"td"),ng(),wl(57,"tr")(58,"td")(59,"code"),Ux(60,"--font-family"),ng()(),wl(61,"td"),Ux(62,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(63,"td")(64,"code"),Ux(65,"var(--font-family-theme)"),ng()()(),wl(66,"tr")(67,"td")(68,"code"),Ux(69,"--font-size"),ng()(),wl(70,"td"),Ux(71,"Tamanho da fonte"),ng(),wl(72,"td")(73,"code"),Ux(74,"var(--font-size-sm)"),ng()()(),wl(75,"tr")(76,"td")(77,"code"),Ux(78,"--line-height"),ng()(),wl(79,"td"),Ux(80,"Tamanho da label"),ng(),wl(81,"td")(82,"code"),Ux(83,"var(---line-height-sm)"),ng()()(),wl(84,"tr")(85,"td")(86,"code"),Ux(87,"--border-radius"),ng()(),wl(88,"td"),Ux(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(90,"td")(91,"code"),Ux(92,"var(--border-radius-pill)"),ng()()(),wl(93,"tr")(94,"td")(95,"code"),Ux(96,"--gap"),ng()(),wl(97,"td"),Ux(98,"Espa\xE7amento entre o label e o value"),ng(),wl(99,"td")(100,"code"),Ux(101,"var(--spacing-xs)"),ng()()(),wl(102,"tr")(103,"td")(104,"strong"),Ux(105,"Neutral"),ng()(),Ul(106,"td")(107,"td"),ng(),wl(108,"tr")(109,"td")(110,"code"),Ux(111,"--color-neutral"),ng()(),wl(112,"td"),Ux(113,"Cor principal no estado neutral"),ng(),wl(114,"td")(115,"code"),Ux(116,"var(--color-neutral-light-10)"),ng()()(),wl(117,"tr")(118,"td")(119,"code"),Ux(120,"--text-color-positive"),ng()(),wl(121,"td"),Ux(122,"Cor do texto no estado neutral"),ng(),wl(123,"td")(124,"code"),Ux(125,"var(--color-neutral-dark-80)"),ng()()(),wl(126,"tr")(127,"td")(128,"strong"),Ux(129,"Positive"),ng()(),Ul(130,"td")(131,"td"),ng(),wl(132,"tr")(133,"td")(134,"code"),Ux(135,"--color-positive"),ng()(),wl(136,"td"),Ux(137,"Cor principal no estado positive"),ng(),wl(138,"td")(139,"code"),Ux(140,"var(--color-feedback-positive-lightest)"),ng()()(),wl(141,"tr")(142,"td")(143,"code"),Ux(144,"--text-color-positive"),ng()(),wl(145,"td"),Ux(146,"Cor do texto no estado positive"),ng(),wl(147,"td")(148,"code"),Ux(149,"var(--color-feedback-positive-dark)"),ng()()(),wl(150,"tr")(151,"td")(152,"strong"),Ux(153,"Negative"),ng()(),Ul(154,"td")(155,"td"),ng(),wl(156,"tr")(157,"td")(158,"code"),Ux(159,"--color-negative"),ng()(),wl(160,"td"),Ux(161,"Cor principal no estado danger"),ng(),wl(162,"td")(163,"code"),Ux(164,"var(--color-feedback-negative-lightest)"),ng()()(),wl(165,"tr")(166,"td")(167,"code"),Ux(168,"--text-color-negative"),ng()(),wl(169,"td"),Ux(170,"Cor do texto no estado danger"),ng(),wl(171,"td")(172,"code"),Ux(173,"var(--color-feedback-negative-darker)"),ng()()(),wl(174,"tr")(175,"td")(176,"strong"),Ux(177,"Warning"),ng()(),Ul(178,"td")(179,"td"),ng(),wl(180,"tr")(181,"td")(182,"code"),Ux(183,"--color-tag-warning"),ng()(),wl(184,"td"),Ux(185,"Cor principal no estado warning"),ng(),wl(186,"td")(187,"code"),Ux(188,"var(--color-feedback-warning-lightest)"),ng()()(),wl(189,"tr")(190,"td")(191,"code"),Ux(192,"--text-color-warning"),ng()(),wl(193,"td"),Ux(194,"Cor do texto no estado warning"),ng(),wl(195,"td")(196,"code"),Ux(197,"var(--color-feedback-warning-darkest)"),ng()()(),wl(198,"tr")(199,"td")(200,"strong"),Ux(201,"Info"),ng()(),Ul(202,"td")(203,"td"),ng(),wl(204,"tr")(205,"td")(206,"code"),Ux(207,"--color-info"),ng()(),wl(208,"td"),Ux(209,"Cor principal no estado info"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-feedback-info-lightest)"),ng()()(),wl(213,"tr")(214,"td")(215,"code"),Ux(216,"--text-color-info"),ng()(),wl(217,"td"),Ux(218,"Cor do texto no estado info"),ng(),wl(219,"td")(220,"code"),Ux(221,"var(--color-feedback-info-dark)"),ng()()(),wl(222,"tr")(223,"td")(224,"strong"),Ux(225,"Removable"),ng()(),Ul(226,"td")(227,"td"),ng(),wl(228,"tr")(229,"td")(230,"code"),Ux(231,"--color"),ng()(),wl(232,"td"),Ux(233,"Cor principal quando removable"),ng(),wl(234,"td")(235,"code"),Ux(236,"var(--color-brand-01-lightest)"),ng()()(),wl(237,"tr")(238,"td")(239,"code"),Ux(240,"--border-color"),ng()(),wl(241,"td"),Ux(242,"Cor de borda quando removable \xA0"),ng(),wl(243,"td")(244,"code"),Ux(245,"var(--color-brand-01-lighter)"),ng()()(),wl(246,"tr")(247,"td")(248,"code"),Ux(249,"--color-icon"),ng()(),wl(250,"td"),Ux(251,"Cor do \xEDcone quando removable \xA0"),ng(),wl(252,"td")(253,"code"),Ux(254,"var(--color-action-default)"),ng()()(),wl(255,"tr")(256,"td")(257,"code"),Ux(258,"--text-color"),ng()(),wl(259,"td"),Ux(260,"Cor do texto quando removable \xA0"),ng(),wl(261,"td")(262,"code"),Ux(263,"var(--color-neutral-dark-80)"),ng()()(),wl(264,"tr")(265,"td")(266,"code"),Ux(267,"--color-hover"),ng()(),wl(268,"td"),Ux(269,"Cor do hover no estado removable \xA0"),ng(),wl(270,"td")(271,"code"),Ux(272,"var(--color-brand-01-lighter)"),ng()()(),wl(273,"tr")(274,"td")(275,"strong"),Ux(276,"Focused"),ng()(),Ul(277,"td")(278,"td"),ng(),wl(279,"tr")(280,"td")(281,"code"),Ux(282,"--outline-color-focused"),ng()(),wl(283,"td"),Ux(284,"Cor do outline do estado de focus"),ng(),wl(285,"td")(286,"code"),Ux(287,"var(--color-action-focus)"),ng()()(),wl(288,"tr")(289,"td")(290,"strong"),Ux(291,"Disabled"),ng()(),Ul(292,"td")(293,"td"),ng(),wl(294,"tr")(295,"td")(296,"code"),Ux(297,"--color-disabled"),ng()(),wl(298,"td"),Ux(299,"Cor principal no estado disabled"),ng(),wl(300,"td")(301,"code"),Ux(302,"var(--color-neutral-light-20)"),ng()()(),wl(303,"tr")(304,"td")(305,"code"),Ux(306,"--border-color-disabled"),ng()(),wl(307,"td"),Ux(308,"Cor da borda no estado disabled \xA0"),ng(),wl(309,"td")(310,"code"),Ux(311,"var(--color-action-disabled)"),ng()()(),wl(312,"tr")(313,"td")(314,"code"),Ux(315,"--color-icon-disabled"),ng()(),wl(316,"td"),Ux(317,"Cor do icone no estado disabled \xA0"),ng(),wl(318,"td")(319,"code"),Ux(320,"var(--color-action-disabled)"),ng()()(),wl(321,"tr")(322,"td")(323,"code"),Ux(324,"--text-color-disabled"),ng()(),wl(325,"td"),Ux(326,"Cor do texto no estado disabled \xA0"),ng(),wl(327,"td")(328,"code"),Ux(329,"var(--color-neutral-mid-60)"),ng()()()()()(),wl(330,"div",7)(331,"h4",8),Ux(332,"Seletor"),ng(),wl(333,"pre",9),Ux(334,`<po-tag
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
`),ng()(),wl(335,"h4",10),Ux(336,"Propriedades"),ng(),wl(337,"table",11)(338,"tr",12)(339,"th",13),Ux(340,"Nome"),ng(),wl(341,"th",13),Ux(342,"Tipo"),ng(),wl(343,"th",13),Ux(344,"Padr\xE3o"),ng(),wl(345,"th",13),Ux(346,"Descri\xE7\xE3o"),ng()(),wl(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),Ux(351," (p-click)"),Ul(352,"br"),ng()()(),wl(353,"td",18)(354,"code",19),Ux(355,"EventEmitter"),ng()(),wl(356,"td",20),Ux(357,"-"),ng(),wl(358,"td",21)(359,"em")(360,"strong"),Ux(361,"(opcional)"),ng()(),wl(362,"p"),Ux(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),wl(364,"code"),Ux(365,"po-tag"),ng(),Ux(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),ng(),wl(367,"p"),Ux(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),ng()()(),wl(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),Ux(373," p-color"),Ul(374,"br"),ng()()(),wl(375,"td",18)(376,"code",24),Ux(377,"string"),ng()(),wl(378,"td",20),Ux(379,"-"),ng(),wl(380,"td",21)(381,"em")(382,"strong"),Ux(383,"(opcional)"),ng()(),wl(384,"p"),Ux(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),ng(),wl(386,"ul")(387,"li"),Ux(388,"Hexadeximal, por exemplo "),wl(389,"code"),Ux(390,"#c64840"),ng(),Ux(391,";"),ng(),wl(392,"li"),Ux(393,"RGB, como "),wl(394,"code"),Ux(395,"rgb(0, 0, 165)"),ng(),Ux(396,";"),ng(),wl(397,"li"),Ux(398,"O nome da cor, por exemplo "),wl(399,"code"),Ux(400,"blue"),ng(),Ux(401,";"),ng(),wl(402,"li"),Ux(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),wl(404,"ul")(405,"li"),Ul(406,"span",25),wl(407,"code"),Ux(408,"color-01"),ng()(),wl(409,"li"),Ul(410,"span",26),wl(411,"code"),Ux(412,"color-02"),ng()(),wl(413,"li"),Ul(414,"span",27),wl(415,"code"),Ux(416,"color-03"),ng()(),wl(417,"li"),Ul(418,"span",28),wl(419,"code"),Ux(420,"color-04"),ng()(),wl(421,"li"),Ul(422,"span",29),wl(423,"code"),Ux(424,"color-05"),ng()(),wl(425,"li"),Ul(426,"span",30),wl(427,"code"),Ux(428,"color-06"),ng()(),wl(429,"li"),Ul(430,"span",31),wl(431,"code"),Ux(432,"color-07"),ng()(),wl(433,"li"),Ul(434,"span",32),wl(435,"code"),Ux(436,"color-08"),ng()(),wl(437,"li"),Ul(438,"span",33),wl(439,"code"),Ux(440,"color-09"),ng()(),wl(441,"li"),Ul(442,"span",34),wl(443,"code"),Ux(444,"color-10"),ng()(),wl(445,"li"),Ul(446,"span",35),wl(447,"code"),Ux(448,"color-11"),ng()(),wl(449,"li"),Ul(450,"span",36),wl(451,"code"),Ux(452,"color-12"),ng()()()()(),wl(453,"blockquote")(454,"p"),Ux(455,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),wl(456,"strong"),Ux(457,"Caption Tag Colors"),ng(),Ux(458,":"),ng()(),wl(459,"ul")(460,"li"),Ul(461,"span",37),wl(462,"code"),Ux(463,"caption-tag-01"),ng(),Ul(464,"span",38),wl(465,"code"),Ux(466,"caption-tag-02"),ng(),Ul(467,"span",39),wl(468,"code"),Ux(469,"caption-tag-03"),ng(),Ul(470,"span",40),wl(471,"code"),Ux(472,"caption-tag-04"),ng(),Ul(473,"span",41),wl(474,"code"),Ux(475,"caption-tag-05"),ng()(),wl(476,"li"),Ul(477,"span",42),wl(478,"code"),Ux(479,"caption-tag-06"),ng(),Ul(480,"span",43),wl(481,"code"),Ux(482,"caption-tag-07"),ng(),Ul(483,"span",44),wl(484,"code"),Ux(485,"caption-tag-08"),ng(),Ul(486,"span",45),wl(487,"code"),Ux(488,"caption-tag-09"),ng(),Ul(489,"span",46),wl(490,"code"),Ux(491,"caption-tag-10"),ng()(),wl(492,"li"),Ul(493,"span",47),wl(494,"code"),Ux(495,"caption-tag-11"),ng(),Ul(496,"span",48),wl(497,"code"),Ux(498,"caption-tag-12"),ng(),Ul(499,"span",49),wl(500,"code"),Ux(501,"caption-tag-13"),ng(),Ul(502,"span",50),wl(503,"code"),Ux(504,"caption-tag-14"),ng(),Ul(505,"span",51),wl(506,"code"),Ux(507,"caption-tag-15"),ng()(),wl(508,"li"),Ul(509,"span",52),wl(510,"code"),Ux(511,"caption-tag-16"),ng(),Ul(512,"span",53),wl(513,"code"),Ux(514,"caption-tag-17"),ng(),Ul(515,"span",54),wl(516,"code"),Ux(517,"caption-tag-18"),ng(),Ul(518,"span",55),wl(519,"code"),Ux(520,"caption-tag-19"),ng(),Ul(521,"span",56),wl(522,"code"),Ux(523,"caption-tag-20"),ng()(),wl(524,"li"),Ul(525,"span",57),wl(526,"code"),Ux(527,"caption-tag-21"),ng(),Ul(528,"span",58),wl(529,"code"),Ux(530,"caption-tag-22"),ng(),Ul(531,"span",59),wl(532,"code"),Ux(533,"caption-tag-23"),ng(),Ul(534,"span",60),wl(535,"code"),Ux(536,"caption-tag-24"),ng(),Ul(537,"span",61),wl(538,"code"),Ux(539,"caption-tag-25"),ng()(),wl(540,"li"),Ul(541,"span",62),wl(542,"code"),Ux(543,"caption-tag-26"),ng(),Ul(544,"span",63),wl(545,"code"),Ux(546,"caption-tag-27"),ng(),Ul(547,"span",64),wl(548,"code"),Ux(549,"caption-tag-28"),ng(),Ul(550,"span",65),wl(551,"code"),Ux(552,"caption-tag-29"),ng(),Ul(553,"span",66),wl(554,"code"),Ux(555,"caption-tag-30"),ng()(),wl(556,"li"),Ul(557,"span",67),wl(558,"code"),Ux(559,"caption-tag-31"),ng(),Ul(560,"span",68),wl(561,"code"),Ux(562,"caption-tag-32"),ng(),Ul(563,"span",69),wl(564,"code"),Ux(565,"caption-tag-33"),ng(),Ul(566,"span",70),wl(567,"code"),Ux(568,"caption-tag-34"),ng(),Ul(569,"span",71),wl(570,"code"),Ux(571,"caption-tag-35"),ng()()(),wl(572,"p"),Ux(573,"Exemplo de uso:"),ng(),wl(574,"pre")(575,"code"),Ux(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),ng()(),wl(577,"ul")(578,"li"),Ux(579,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),ng(),wl(580,"li"),Ux(581,"Para as cores legacy ("),wl(582,"code"),Ux(583,"color-01"),ng(),Ux(584," a "),wl(585,"code"),Ux(586,"color-12"),ng(),Ux(587,") e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade."),ng(),wl(588,"li"),Ux(589,"Para as cores "),wl(590,"strong"),Ux(591,"Caption Tag Colors"),ng(),Ux(592," ("),wl(593,"code"),Ux(594,"caption-tag-01"),ng(),Ux(595," a "),wl(596,"code"),Ux(597,"caption-tag-35"),ng(),Ux(598,"), a cor do texto \xE9 fixa e definida via token CSS, n\xE3o sendo poss\xEDvel alter\xE1-la via "),wl(599,"code"),Ux(600,"p-text-color"),ng(),Ux(601,"."),ng()(),wl(602,"blockquote")(603,"p")(604,"strong"),Ux(605,"Aten\xE7\xE3o:"),ng(),Ux(606," A propriedade "),wl(607,"code"),Ux(608,"p-type"),ng(),Ux(609," sobrep\xF5e esta defini\xE7\xE3o."),ng()()()(),wl(610,"tr",14)(611,"td",15)(612,"div",22)(613,"span",23),Ux(614," p-disabled"),Ul(615,"br"),ng()()(),wl(616,"td",18)(617,"code",72),Ux(618,"boolean"),ng()(),wl(619,"td",20)(620,"p")(621,"code"),Ux(622,"false"),ng()()(),wl(623,"td",21)(624,"em")(625,"strong"),Ux(626,"(opcional)"),ng()(),wl(627,"p"),Ux(628,"Desabilita o "),wl(629,"code"),Ux(630,"po-tag"),ng(),Ux(631," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),ng(),wl(632,"blockquote")(633,"p"),Ux(634,"A propriedade "),wl(635,"code"),Ux(636,"p-disabled"),ng(),Ux(637," somente ter\xE1 efeito caso a propriedade "),wl(638,"code"),Ux(639,"p-removable"),ng(),Ux(640," esteja definida como "),wl(641,"code"),Ux(642,"true"),ng(),Ux(643,"."),ng()()()(),wl(644,"tr",14)(645,"td",15)(646,"div",22)(647,"span",23),Ux(648," p-icon"),Ul(649,"br"),ng()()(),wl(650,"td",18)(651,"code",24),Ux(652,"string "),ng(),wl(653,"code",72),Ux(654," boolean "),ng(),wl(655,"code",73),Ux(656," TemplateRef<void>"),ng()(),wl(657,"td",20)(658,"p")(659,"code"),Ux(660,"false"),ng()()(),wl(661,"td",21)(662,"em")(663,"strong"),Ux(664,"(opcional)"),ng()(),wl(665,"p"),Ux(666,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),wl(667,"em"),Ux(668,"tag"),ng(),Ux(669,"."),ng(),wl(670,"p"),Ux(671,"Quando "),wl(672,"code"),Ux(673,"p-type"),ng(),Ux(674," estiver definida, basta informar um valor igual a "),wl(675,"code"),Ux(676,"true"),ng(),Ux(677," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),ng(),wl(678,"ul")(679,"li"),Ul(680,"span",74),Ux(681," - "),wl(682,"code"),Ux(683,"success"),ng()(),wl(684,"li"),Ul(685,"span",75),Ux(686," - "),wl(687,"code"),Ux(688,"warning"),ng()(),wl(689,"li"),Ul(690,"span",76),Ux(691," - "),wl(692,"code"),Ux(693,"danger"),ng()(),wl(694,"li"),Ul(695,"span",77),Ux(696," - "),wl(697,"code"),Ux(698,"info"),ng()()(),wl(699,"p"),Ux(700,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(701,"a",78),Ux(702,"Biblioteca de \xEDcones"),ng(),Ux(703,". conforme exemplo abaixo:"),ng(),wl(704,"pre")(705,"code"),Ux(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),ng()(),wl(707,"p"),Ux(708,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(709,"em"),Ux(710,"Font Awesome"),ng(),Ux(711,", da seguinte forma:"),ng(),wl(712,"pre")(713,"code"),Ux(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),ng()(),wl(715,"p"),Ux(716,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(717,"code"),Ux(718,"TemplateRef"),ng(),Ux(719,", conforme exemplo abaixo:"),ng(),wl(720,"pre")(721,"code"),Ux(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(723,"blockquote")(724,"p"),Ux(725,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(726,"code"),Ux(727,"font-size: inherit"),ng(),Ux(728," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(729,"tr",14)(730,"td",15)(731,"div",22)(732,"span",23),Ux(733," p-label"),Ul(734,"br"),ng()()(),wl(735,"td",18)(736,"code",24),Ux(737,"string"),ng()(),wl(738,"td",20),Ux(739,"-"),ng(),wl(740,"td",21)(741,"em")(742,"strong"),Ux(743,"(opcional)"),ng()(),wl(744,"p"),Ux(745,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),wl(746,"em"),Ux(747,"tag"),ng(),Ux(748,", de acordo com a "),wl(749,"code"),Ux(750,"p-orientation"),ng(),Ux(751,"."),ng()()(),wl(752,"tr",14)(753,"td",15)(754,"div",22)(755,"span",23),Ux(756," p-literals"),Ul(757,"br"),ng()()(),wl(758,"td",18)(759,"code",79),Ux(760,"PoTagLiterals"),ng()(),wl(761,"td",20),Ux(762,"-"),ng(),wl(763,"td",21)(764,"em")(765,"strong"),Ux(766,"(opcional)"),ng()(),wl(767,"p"),Ux(768,"Objeto com as literais usadas no "),wl(769,"code"),Ux(770,"po-tag"),ng(),Ux(771,"."),ng(),wl(772,"p"),Ux(773,"Para utilizar, basta passar a literal customizada:"),ng(),wl(774,"pre")(775,"code"),Ux(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),ng()(),wl(777,"p"),Ux(778,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),ng(),wl(779,"pre")(780,"code"),Ux(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),ng()(),wl(782,"blockquote")(783,"p"),Ux(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(785,"a",80)(786,"code"),Ux(787,"PoI18nService"),ng()(),Ux(788," ou do browser."),ng()()()(),wl(789,"tr",14)(790,"td",15)(791,"div",22)(792,"span",23),Ux(793," p-orientation"),Ul(794,"br"),ng()()(),wl(795,"td",18)(796,"code",81),Ux(797,"PoTagOrientation"),ng()(),wl(798,"td",20)(799,"p")(800,"code"),Ux(801,"vertical"),ng()()(),wl(802,"td",21)(803,"em")(804,"strong"),Ux(805,"(opcional)"),ng()(),wl(806,"p"),Ux(807,"Define o "),wl(808,"em"),Ux(809,"layout"),ng(),Ux(810," de exibi\xE7\xE3o."),ng()()(),wl(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),Ux(815," p-removable"),Ul(816,"br"),ng()()(),wl(817,"td",18)(818,"code",72),Ux(819,"boolean"),ng()(),wl(820,"td",20)(821,"p")(822,"code"),Ux(823,"false"),ng()()(),wl(824,"td",21)(825,"em")(826,"strong"),Ux(827,"(opcional)"),ng()(),wl(828,"p"),Ux(829,"Habilita a op\xE7\xE3o de remover a tag"),ng()()(),wl(830,"tr",14)(831,"td",15)(832,"div",16)(833,"span",17),Ux(834," (p-close)"),Ul(835,"br"),ng()()(),wl(836,"td",18)(837,"code",19),Ux(838,"EventEmitter"),ng()(),wl(839,"td",20),Ux(840,"-"),ng(),wl(841,"td",21)(842,"em")(843,"strong"),Ux(844,"(opcional)"),ng()(),wl(845,"p"),Ux(846,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),wl(847,"code"),Ux(848,"po-tag"),ng()()()(),wl(849,"tr",14)(850,"td",15)(851,"div",22)(852,"span",23),Ux(853," p-text-color"),Ul(854,"br"),ng()()(),wl(855,"td",18)(856,"code",24),Ux(857,"string"),ng()(),wl(858,"td",20),Ux(859,"-"),ng(),wl(860,"td",21)(861,"em")(862,"strong"),Ux(863,"(opcional)"),ng()(),wl(864,"p"),Ux(865,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),ng(),wl(866,"ul")(867,"li")(868,"p"),Ux(869,"Hexadeximal, por exemplo "),wl(870,"code"),Ux(871,"#c64840"),ng(),Ux(872,";"),ng()(),wl(873,"li")(874,"p"),Ux(875,"RGB, como "),wl(876,"code"),Ux(877,"rgb(0, 0, 165)"),ng(),Ux(878,";"),ng()(),wl(879,"li")(880,"p"),Ux(881,"O nome da cor, por exemplo "),wl(882,"code"),Ux(883,"blue"),ng(),Ux(884,";"),ng()(),wl(885,"li")(886,"p"),Ux(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),ng(),wl(888,"ul")(889,"li"),Ul(890,"span",25),wl(891,"code"),Ux(892,"color-01"),ng()(),wl(893,"li"),Ul(894,"span",26),wl(895,"code"),Ux(896,"color-02"),ng()(),wl(897,"li"),Ul(898,"span",27),wl(899,"code"),Ux(900,"color-03"),ng()(),wl(901,"li"),Ul(902,"span",28),wl(903,"code"),Ux(904,"color-04"),ng()(),wl(905,"li"),Ul(906,"span",29),wl(907,"code"),Ux(908,"color-05"),ng()(),wl(909,"li"),Ul(910,"span",30),wl(911,"code"),Ux(912,"color-06"),ng()(),wl(913,"li"),Ul(914,"span",31),wl(915,"code"),Ux(916,"color-07"),ng()(),wl(917,"li"),Ul(918,"span",32),wl(919,"code"),Ux(920,"color-08"),ng()(),wl(921,"li"),Ul(922,"span",33),wl(923,"code"),Ux(924,"color-09"),ng()(),wl(925,"li"),Ul(926,"span",34),wl(927,"code"),Ux(928,"color-10"),ng()(),wl(929,"li"),Ul(930,"span",35),wl(931,"code"),Ux(932,"color-11"),ng()(),wl(933,"li"),Ul(934,"span",36),wl(935,"code"),Ux(936,"color-12"),ng()()()(),wl(937,"li")(938,"p"),Ux(939,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),ng()()(),wl(940,"blockquote")(941,"p")(942,"strong"),Ux(943,"Aten\xE7\xE3o:"),ng(),Ux(944," A propriedade "),wl(945,"code"),Ux(946,"p-type"),ng(),Ux(947," sobrep\xF5e esta defini\xE7\xE3o."),ng()(),wl(948,"blockquote")(949,"p")(950,"strong"),Ux(951,"Aten\xE7\xE3o:"),ng(),Ux(952," As cores da paleta "),wl(953,"strong"),Ux(954,"Caption Tag Colors"),ng(),Ux(955," ("),wl(956,"code"),Ux(957,"caption-tag-01"),ng(),Ux(958," a "),wl(959,"code"),Ux(960,"caption-tag-35"),ng(),Ux(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),ng()()()(),wl(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),Ux(966," p-type"),Ul(967,"br"),ng()()(),wl(968,"td",18)(969,"code",82),Ux(970,"PoTagType"),ng()(),wl(971,"td",20)(972,"p")(973,"code"),Ux(974,"info"),ng()()(),wl(975,"td",21)(976,"em")(977,"strong"),Ux(978,"(opcional)"),ng()(),wl(979,"p"),Ux(980,"Define o tipo da "),wl(981,"em"),Ux(982,"tag"),ng(),Ux(983,"."),ng(),wl(984,"p"),Ux(985,"Valores v\xE1lidos:"),ng(),wl(986,"ul")(987,"li")(988,"code"),Ux(989,"success"),ng(),Ux(990,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),ng(),wl(991,"li")(992,"code"),Ux(993,"warning"),ng(),Ux(994,": cor amarela que representa aviso ou advert\xEAncia."),ng(),wl(995,"li")(996,"code"),Ux(997,"danger"),ng(),Ux(998,": cor vermelha para erro ou aviso cr\xEDtico."),ng(),wl(999,"li")(1e3,"code"),Ux(1001,"info"),ng(),Ux(1002,": cor azul claro que caracteriza conte\xFAdo informativo."),ng(),wl(1003,"li")(1004,"code"),Ux(1005,"neutral"),ng(),Ux(1006,": cor cinza claro para uso geral."),ng()(),wl(1007,"blockquote")(1008,"p"),Ux(1009,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),wl(1010,"code"),Ux(1011,"p-color"),ng(),Ux(1012," e "),wl(1013,"code"),Ux(1014,"p-icon"),ng(),Ux(1015," somente ser\xE1 exibido caso seja "),wl(1016,"code"),Ux(1017,"true"),ng(),Ux(1018,"."),ng()()()(),wl(1019,"tr",14)(1020,"td",15)(1021,"div",22)(1022,"span",23),Ux(1023," p-value"),Ul(1024,"br"),ng()()(),wl(1025,"td",18)(1026,"code",24),Ux(1027,"string"),ng()(),wl(1028,"td",20),Ux(1029,"-"),ng(),wl(1030,"td",21)(1031,"p"),Ux(1032,"Texto da tag."),ng()()()(),wl(1033,"h3"),Ux(1034,"Interfaces"),ng(),wl(1035,"h4",83)(1036,"code",5),Ux(1037,"PoTagLiterals"),ng()(),wl(1038,"div",2)(1039,"p"),Ux(1040,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1041,"code"),Ux(1042,"po-tag"),ng(),Ux(1043,"."),ng()(),wl(1044,"h4",10),Ux(1045,"Propriedades"),ng(),wl(1046,"table",11)(1047,"tr",12)(1048,"th",13),Ux(1049,"Nome"),ng(),wl(1050,"th",13),Ux(1051,"Tipo"),ng(),wl(1052,"th",13),Ux(1053,"Descri\xE7\xE3o"),ng()(),wl(1054,"tr",14)(1055,"td",15)(1056,"div",22)(1057,"span",23),Ux(1058," remove"),Ul(1059,"br"),ng()()(),wl(1060,"td",18)(1061,"code",24),Ux(1062,"string"),ng()(),wl(1063,"td",21)(1064,"em")(1065,"strong"),Ux(1066,"(opcional)"),ng()(),wl(1067,"p"),Ux(1068,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),ng()()()(),wl(1069,"h3"),Ux(1070,"Enums"),ng(),wl(1071,"h4",4)(1072,"code",5),Ux(1073,"PoTagOrientation"),ng()(),wl(1074,"div",2)(1075,"p"),Ux(1076,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),wl(1077,"code"),Ux(1078,"po-tag"),ng(),Ux(1079,"."),ng()(),wl(1080,"h4",10),Ux(1081,"Propriedades"),ng(),wl(1082,"table",11)(1083,"tr",12)(1084,"th",13),Ux(1085,"Nome"),ng(),wl(1086,"th",13),Ux(1087,"Descri\xE7\xE3o"),ng()(),wl(1088,"tr",14)(1089,"td",15)(1090,"div",22)(1091,"span",23),Ux(1092," Horizontal"),Ul(1093,"br"),ng()()(),wl(1094,"td",21)(1095,"p"),Ux(1096,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),ng()()(),wl(1097,"tr",14)(1098,"td",15)(1099,"div",22)(1100,"span",23),Ux(1101," Vertical"),Ul(1102,"br"),ng()()(),wl(1103,"td",21)(1104,"p"),Ux(1105,"Exibe a tag na vertical, ou seja, abaixo do label."),ng()()()(),wl(1106,"h4",4)(1107,"code",5),Ux(1108,"PoTagType"),ng()(),wl(1109,"div",2)(1110,"p"),Ux(1111,"Define os tipos dispon\xEDveis para o "),wl(1112,"code"),Ux(1113,"po-tag"),ng(),Ux(1114,"."),ng()(),wl(1115,"h4",10),Ux(1116,"Propriedades"),ng(),wl(1117,"table",11)(1118,"tr",12)(1119,"th",13),Ux(1120,"Nome"),ng(),wl(1121,"th",13),Ux(1122,"Descri\xE7\xE3o"),ng()(),wl(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),Ux(1127," Danger"),Ul(1128,"br"),ng()()(),wl(1129,"td",21)(1130,"p"),Ux(1131,"Erro, perigo, problema ou aviso cr\xEDtico."),ng()()(),wl(1132,"tr",14)(1133,"td",15)(1134,"div",22)(1135,"span",23),Ux(1136," Info"),Ul(1137,"br"),ng()()(),wl(1138,"td",21)(1139,"p"),Ux(1140,"Informativo ou explicativo."),ng()()(),wl(1141,"tr",14)(1142,"td",15)(1143,"div",22)(1144,"span",23),Ux(1145," Success"),Ul(1146,"br"),ng()()(),wl(1147,"td",21)(1148,"p"),Ux(1149,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),ng()()(),wl(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),Ux(1154," Warning"),Ul(1155,"br"),ng()()(),wl(1156,"td",21)(1157,"p"),Ux(1158,"Aviso ou advert\xEAncia."),ng()()(),wl(1159,"tr",14)(1160,"td",15)(1161,"div",22)(1162,"span",23),Ux(1163," Neutral"),Ul(1164,"br"),ng()()(),wl(1165,"td",21)(1166,"p"),Ux(1167,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var ke=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-tag-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view")(8,"sample-po-tag-caption-tag-colors-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ve,he,ye,we,_e],encapsulation:2})}return a})();var nt=[{path:"",component:ke}],De=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(nt),vL]})}return a})();var Wt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,De]})}return a})();export{Wt as DocPoTagModule};