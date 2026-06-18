import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,db as rNe,M as Wl,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,aI as dc,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-value"]],template:function(l,o){l&1&&Wl(0,"po-gauge",0),l&2&&tw("p-value",50);},dependencies:[rNe],encapsulation:2,changeDetection:1})}return a})();var de=a=>({"docs-sample-code-tabs":a}),ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Gauge Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-gauge-basic/sample-po-gauge-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-gauge [p-value]="50"></po-gauge>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-gauge-basic/sample-po-gauge-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-gauge-basic',
  templateUrl: './sample-po-gauge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-gauge-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,de,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ee],encapsulation:2})}return a})();var oe=(()=>{class a{description;subtitle;gaugeValue;height;options;optionsRanges={};properties;ranges=[];title;propertiesOptions=[{value:"showFromToLegend",label:"Show From To Legend"},{value:"showPointer",label:"Show Pointer"},{value:"showContainerGauge",label:"Show Container"},{value:"hideExpand",label:"Hide Expand"},{value:"hideTableDetails",label:"Hide Table Details"},{value:"hideExportCsv",label:"Hide Export Csv"},{value:"hideExportImage",label:"Hide Export Image"}];get isEmptyObject(){return Object.keys(this.optionsRanges).length===0}ngOnInit(){this.restore();}addRange(){this.ranges=[...this.ranges,this.optionsRanges],this.optionsRanges={};}restore(){this.description=void 0,this.gaugeValue=void 0,this.height=void 0,this.optionsRanges={},this.ranges=[],this.title=void 0,this.properties=["showPointer","showContainerGauge"],this.changeOptions();}changeOptions(){this.options={showFromToLegend:this.properties.includes("showFromToLegend"),pointer:this.properties.includes("showPointer"),showContainerGauge:this.properties.includes("showContainerGauge"),subtitleGauge:this.subtitle,header:{hideExpand:this.properties.includes("hideExpand"),hideTableDetails:this.properties.includes("hideTableDetails"),hideExportCsv:this.properties.includes("hideExportCsv"),hideExportImage:this.properties.includes("hideExportImage")}};}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs"]],standalone:false,decls:24,vars:20,consts:[["rangesForm","ngForm"],[3,"p-description","p-height","p-ranges","p-title","p-value","p-options","p-show-from-to-legend","p-show-pointer"],["p-label","Properties",1,"po-md-12"],[1,"row"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["name","gaugeValue","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","description","p-label","Description",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Ranges",1,"po-md-12"],["name","from","p-label","from",1,"po-md-3",3,"ngModelChange","ngModel"],["name","from","p-label","to",1,"po-md-3",3,"ngModelChange","ngModel"],["name","label","p-label","label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","color","p-label","color",1,"po-md-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Add Range",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let d=Ex();Wl(0,"po-gauge",1)(1,"po-divider",2),Sl(2,"form")(3,"div",3)(4,"po-input",4),Ew("ngModelChange",function(r){return Xy(d),tN(o.title,r)||(o.title=r),Qy(r)}),sg(),JA(),Sl(5,"po-number",5),Ew("ngModelChange",function(r){return Xy(d),tN(o.height,r)||(o.height=r),Qy(r)}),sg(),JA(),Sl(6,"po-number",6),Ew("ngModelChange",function(r){return Xy(d),tN(o.gaugeValue,r)||(o.gaugeValue=r),Qy(r)}),sg(),JA(),Sl(7,"po-input",7),Ew("ngModelChange",function(r){return Xy(d),tN(o.description,r)||(o.description=r),Qy(r)}),sg(),JA(),Sl(8,"po-input",8),Ew("ngModelChange",function(r){return Xy(d),tN(o.subtitle,r)||(o.subtitle=r),Qy(r)}),ht("p-change",function(){return o.changeOptions()}),sg(),JA(),sg(),Sl(9,"form",null,0)(11,"div",9),Wl(12,"po-divider",10),Sl(13,"po-number",11),Ew("ngModelChange",function(r){return Xy(d),tN(o.optionsRanges.from,r)||(o.optionsRanges.from=r),Qy(r)}),sg(),JA(),Sl(14,"po-number",12),Ew("ngModelChange",function(r){return Xy(d),tN(o.optionsRanges.to,r)||(o.optionsRanges.to=r),Qy(r)}),sg(),JA(),Sl(15,"po-input",13),Ew("ngModelChange",function(r){return Xy(d),tN(o.optionsRanges.label,r)||(o.optionsRanges.label=r),Qy(r)}),sg(),JA(),Sl(16,"po-input",14),Ew("ngModelChange",function(r){return Xy(d),tN(o.optionsRanges.color,r)||(o.optionsRanges.color=r),Qy(r)}),sg(),JA(),sg(),Sl(17,"div",9)(18,"po-checkbox-group",15),Ew("ngModelChange",function(r){return Xy(d),tN(o.properties,r)||(o.properties=r),Qy(r)}),ht("p-change",function(){return o.changeOptions()}),sg(),JA(),sg(),Sl(19,"div",9)(20,"po-button",16),ht("p-click",function(){return o.addRange()}),sg()()()(),Sl(21,"div",9),Wl(22,"po-divider",17),Sl(23,"po-button",18),ht("p-click",function(){return o.restore()}),sg()();}if(l&2){let d=xx(10);tw("p-description",o.description)("p-height",o.height)("p-ranges",o.ranges)("p-title",o.title)("p-value",o.gaugeValue)("p-options",o.options)("p-show-from-to-legend",o.properties.includes("showFromToLegend"))("p-show-pointer",o.properties.includes("showPointer")),Vp(4),Dw("ngModel",o.title),t0(),Vp(),Dw("ngModel",o.height),t0(),Vp(),Dw("ngModel",o.gaugeValue),t0(),Vp(),Dw("ngModel",o.description),t0(),Vp(),Dw("ngModel",o.subtitle),t0(),Vp(5),Dw("ngModel",o.optionsRanges.from),t0(),Vp(),Dw("ngModel",o.optionsRanges.to),t0(),Vp(),Dw("ngModel",o.optionsRanges.label),t0(),Vp(),Dw("ngModel",o.optionsRanges.color),t0(),Vp(2),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),t0(),Vp(2),tw("p-disabled",d.invalid||o.isEmptyObject);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,rNe],encapsulation:2,changeDetection:1})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Gauge Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-gauge-labs/sample-po-gauge-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-gauge
  [p-description]="description"
  [p-height]="height"
  [p-ranges]="ranges"
  [p-title]="title"
  [p-value]="gaugeValue"
  [p-options]="options"
  [p-show-from-to-legend]="properties.includes('showFromToLegend')"
  [p-show-pointer]="properties.includes('showPointer')"
>
</po-gauge>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <div class="row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
    <po-number class="po-md-6" name="height" [(ngModel)]="height" p-label="Height"> </po-number>
    <po-number class="po-md-6" name="gaugeValue" [(ngModel)]="gaugeValue" p-label="Value"> </po-number>
    <po-input class="po-md-6" name="description" [(ngModel)]="description" p-label="Description"> </po-input>
    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" (p-change)="changeOptions()" p-label="Subtitle">
    </po-input>
  </div>

  <form #rangesForm="ngForm">
    <div class="po-row">
      <po-divider class="po-md-12" p-label="Ranges"></po-divider>
      <po-number class="po-md-3" name="from" [(ngModel)]="optionsRanges.from" p-label="from"></po-number>
      <po-number class="po-md-3" name="from" [(ngModel)]="optionsRanges.to" p-label="to"></po-number>
      <po-input class="po-md-3" name="label" [(ngModel)]="optionsRanges.label" p-label="label"></po-input>
      <po-input class="po-md-3" name="color" [(ngModel)]="optionsRanges.color" p-label="color"></po-input>
    </div>
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
        (p-change)="changeOptions()"
      >
      </po-checkbox-group>
    </div>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Range"
        [p-disabled]="rangesForm.invalid || isEmptyObject"
        (p-click)="addRange()"
      ></po-button>
    </div>
  </form>
</form>

<div class="po-row">
  <po-divider class="po-md-12"></po-divider>
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-gauge-labs/sample-po-gauge-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoGaugeOptions, PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-labs',
  templateUrl: './sample-po-gauge-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeLabsComponent implements OnInit {
  description: string;
  subtitle: string;
  gaugeValue: number;
  height: number;
  options: PoGaugeOptions;
  optionsRanges: PoGaugeRanges = {};
  properties: Array<string>;
  ranges: Array<PoGaugeRanges> = [];
  title: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showFromToLegend', label: 'Show From To Legend' },
    { value: 'showPointer', label: 'Show Pointer' },
    { value: 'showContainerGauge', label: 'Show Container' },
    { value: 'hideExpand', label: 'Hide Expand' },
    { value: 'hideTableDetails', label: 'Hide Table Details' },
    { value: 'hideExportCsv', label: 'Hide Export Csv' },
    { value: 'hideExportImage', label: 'Hide Export Image' }
  ];

  get isEmptyObject() {
    return Object.keys(this.optionsRanges).length === 0;
  }

  ngOnInit() {
    this.restore();
  }

  addRange() {
    this.ranges = [...this.ranges, this.optionsRanges];
    this.optionsRanges = {};
  }

  restore() {
    this.description = undefined;
    this.gaugeValue = undefined;
    this.height = undefined;
    this.optionsRanges = {};
    this.ranges = [];
    this.title = undefined;
    this.properties = ['showPointer', 'showContainerGauge'];
    this.changeOptions();
  }

  changeOptions() {
    this.options = {
      showFromToLegend: this.properties.includes('showFromToLegend'),
      pointer: this.properties.includes('showPointer'),
      showContainerGauge: this.properties.includes('showContainerGauge'),
      subtitleGauge: this.subtitle,
      header: {
        hideExpand: this.properties.includes('hideExpand'),
        hideTableDetails: this.properties.includes('hideTableDetails'),
        hideExportCsv: this.properties.includes('hideExportCsv'),
        hideExportImage: this.properties.includes('hideExportImage')
      }
    };
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-gauge-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return a})();var ae=(()=>{class a{salesRanges=[{from:0,to:50,label:"Sales reduction",color:"#c64840"},{from:50,to:75,label:"Average sales",color:"#ea9b3e"},{from:75,to:100,label:"Sales soared",color:"#00b28e"}];turnoverRanges=[{from:0,to:50,label:"Low rate",color:"#00b28e"},{from:50,to:75,label:"Average rate",color:"#ea9b3e"},{from:75,to:100,label:"High rate",color:"#c64840"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary"]],standalone:false,decls:8,vars:4,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-md-6"],["p-title","Employee turnover rate","p-value","25","p-description","25% of turnover",3,"p-show-from-to-legend","p-ranges"],["p-title","Sales performance","p-value","82","p-description","The sales increased in 82% in the first bimester of 2020",3,"p-show-from-to-legend","p-ranges"]],template:function(l,o){l&1&&(Sl(0,"po-container")(1,"div",0),Jx(2,"Sales Performance"),sg(),Sl(3,"div",1)(4,"div",2),Wl(5,"po-gauge",3),sg(),Sl(6,"div",2),Wl(7,"po-gauge",4),sg()()()),l&2&&(Vp(5),tw("p-show-from-to-legend",true)("p-ranges",o.turnoverRanges),Vp(2),tw("p-show-from-to-legend",true)("p-ranges",o.salesRanges));},dependencies:[dc,rNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Gauge Summary"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-gauge-summary/sample-po-gauge-summary.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-md-6">
      <po-gauge
        p-title="Employee turnover rate"
        p-value="25"
        p-description="25% of turnover"
        [p-show-from-to-legend]="true"
        [p-ranges]="turnoverRanges"
      ></po-gauge>
    </div>
    <div class="po-md-6">
      <po-gauge
        p-title="Sales performance"
        p-value="82"
        p-description="The sales increased in 82% in the first bimester of 2020"
        [p-show-from-to-legend]="true"
        [p-ranges]="salesRanges"
      ></po-gauge>
    </div>
  </div>
</po-container>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-gauge-summary/sample-po-gauge-summary.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-summary',
  templateUrl: './sample-po-gauge-summary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeSummaryComponent {
  salesRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Sales reduction', color: '#c64840' },
    { from: 50, to: 75, label: 'Average sales', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'Sales soared', color: '#00b28e' }
  ];

  turnoverRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
    { from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'High rate', color: '#c64840' }
  ];
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-gauge-summary"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,be,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ae],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-doc"]],standalone:false,decls:583,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-class-deprecated-marker"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoGaugeOptions"],["pan","",1,"docs-api-property-type","Array<PoGaugeRanges>"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoGaugeModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-gauge."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoGaugeComponent"),sg()(),Sl(12,"div",2)(13,"blockquote")(14,"p"),Jx(15,"ESSE COMPONENTE EST\xC1 DEPRECIADO E SER\xC1 REMOVIDO NA v22.x.x. Indicamos a utiliza\xE7\xE3o do "),Sl(16,"code"),Jx(17,"po-chart"),sg(),Jx(18," com "),Sl(19,"code"),Jx(20,"type"),sg(),Jx(21," Gauge."),sg()(),Sl(22,"p"),Jx(23,"O componente "),Sl(24,"code"),Jx(25,"po-gauge"),sg(),Jx(26,` prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. \xC9 muito comum, por exemplo, para demonstrar o desempenho ou progresso de algo.
O `),Sl(27,"code"),Jx(28,"po-gauge"),sg(),Jx(29," possui dois tipos de tratamentos:"),sg(),Sl(30,"ul")(31,"li"),Jx(32,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),sg(),Sl(33,"li"),Jx(34,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),sg()(),Sl(35,"h4"),Jx(36,"Guia de uso para Gr\xE1ficos"),sg(),Sl(37,"blockquote")(38,"p"),Jx(39,"Veja nosso "),Sl(40,"a",6),Jx(41,"guia de uso para gr\xE1ficos"),sg(),Jx(42,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),sg()()(),Sl(43,"div",7)(44,"h4",8),Jx(45,"Seletor"),sg(),Sl(46,"pre",9),Jx(47,`<po-gauge
    p-description="string"
    p-height="number"
    p-options="PoGaugeOptions"
    p-ranges="Array<PoGaugeRanges>"
    p-show-from-to-legend="boolean"
    p-show-pointer="boolean"
    p-title="string"
    p-value="number" >
</po-gauge>
`),sg()(),Sl(48,"div",10),Jx(49,"Deprecated"),sg(),Sl(50,"h4",11),Jx(51,"Propriedades"),sg(),Sl(52,"table",12)(53,"tr",13)(54,"th",14),Jx(55,"Nome"),sg(),Sl(56,"th",14),Jx(57,"Tipo"),sg(),Sl(58,"th",14),Jx(59,"Padr\xE3o"),sg(),Sl(60,"th",14),Jx(61,"Descri\xE7\xE3o"),sg()(),Sl(62,"tr",15)(63,"td",16)(64,"div",17)(65,"span",18),Jx(66," p-description"),Wl(67,"br"),sg()()(),Sl(68,"td",19)(69,"code",20),Jx(70,"string"),sg()(),Sl(71,"td",21),Jx(72,"-"),sg(),Sl(73,"td",22)(74,"em")(75,"strong"),Jx(76,"(opcional)"),sg()(),Sl(77,"p"),Jx(78,`Define o texto que ser\xE1 exibido no gauge.
H\xE1 dois posicionamentos para ele:`),sg(),Sl(79,"ul")(80,"li"),Jx(81,"Se houver defini\xE7\xE3o para "),Sl(82,"code"),Jx(83,"p-ranges"),sg(),Jx(84,", o descritivo ser\xE1 exibido no topo do container, ficando acima do gauge;"),sg(),Sl(85,"li"),Jx(86,"Na aus\xEAncia de "),Sl(87,"code"),Jx(88,"p-ranges"),sg(),Jx(89,", ser\xE1 incorporado dentro do arco do gauge, e abaixo de "),Sl(90,"code"),Jx(91,"p-value"),sg(),Jx(92,"."),sg()(),Sl(93,"blockquote")(94,"p"),Jx(95,`Para uma melhor experi\xEAncia do usu\xE1rio, \xE9 recomendado um descritivo breve e com poucas palavras.
Indicamos a utiliza\xE7\xE3o da nova propriedade `),Sl(96,"code"),Jx(97,"descriptionChart"),sg(),Jx(98," em "),Sl(99,"code"),Jx(100,"p-options"),sg(),Jx(101,"."),sg()()()(),Sl(102,"tr",15)(103,"td",16)(104,"div",17)(105,"span",18),Jx(106," p-height"),Wl(107,"br"),sg()()(),Sl(108,"td",19)(109,"code",23),Jx(110,"number"),sg()(),Sl(111,"td",21)(112,"p")(113,"code"),Jx(114,"300px"),sg()()(),Sl(115,"td",22)(116,"em")(117,"strong"),Jx(118,"(opcional)"),sg()(),Sl(119,"p"),Jx(120,"Define a altura do gauge."),sg(),Sl(121,"p"),Jx(122,"O valor m\xEDnimo aceito \xE9 300px."),sg()()(),Sl(123,"tr",15)(124,"td",16)(125,"div",17)(126,"span",18),Jx(127," p-options"),Wl(128,"br"),sg()()(),Sl(129,"td",19)(130,"code",24),Jx(131,"PoGaugeOptions"),sg()(),Sl(132,"td",21),Jx(133,"-"),sg(),Sl(134,"td",22)(135,"em")(136,"strong"),Jx(137,"(opcional)"),sg()(),Sl(138,"p"),Jx(139,"Objeto com as configura\xE7\xF5es usadas no "),Sl(140,"code"),Jx(141,"po-gauge"),sg(),Jx(142,"."),sg(),Sl(143,"p"),Jx(144,`\xC9 poss\xEDvel, por exemplo, esconder as funcionalidades do header,
ou habilitar uma legenda com `),Sl(145,"code"),Jx(146,"From"),sg(),Sl(147,"code"),Jx(148,"To"),sg(),Jx(149," da seguinte forma:"),sg(),Sl(150,"pre")(151,"code"),Jx(152,`chartOptions: PoGaugeOptions = {
  showFromToLegend: true,
  header: {
    hideExpand: true,
  },
};
`),sg()()()(),Sl(153,"tr",15)(154,"td",16)(155,"div",17)(156,"span",18),Jx(157," p-ranges"),Wl(158,"br"),sg()()(),Sl(159,"td",19)(160,"code",25),Jx(161,"Array<PoGaugeRanges>"),sg()(),Sl(162,"td",21),Jx(163,"-"),sg(),Sl(164,"td",22)(165,"em")(166,"strong"),Jx(167,"(opcional)"),sg()(),Sl(168,"p"),Jx(169,`Defini\xE7\xE3o para o alcance de cores. Ao adicionar pelo menos um item na lista,
incorpora-se o ponteiro que assinala o valor passado em `),Sl(170,"code"),Jx(171,"p-value"),sg(),Jx(172,`.
Se o valor de `),Sl(173,"code"),Jx(174,"p-value"),sg(),Jx(175," for inferior ao m\xEDnimo valor definido em "),Sl(176,"code"),Jx(177,"PoGaugeRanges.from"),sg(),Jx(178,", o dom\xEDnio m\xEDnimo do gauge ser\xE1 "),Sl(179,"code"),Jx(180,"p-value"),sg(),Jx(181,`.
A mesma regra prevalece para valores m\xE1ximos.`),sg()()(),Sl(182,"tr",15)(183,"td",16)(184,"div",17)(185,"span",18),Jx(186," p-show-from-to-legend"),Wl(187,"br"),sg()()(),Sl(188,"td",19)(189,"code",26),Jx(190,"boolean"),sg()(),Sl(191,"td",21)(192,"p")(193,"code"),Jx(194,"false"),sg()()(),Sl(195,"td",22)(196,"em")(197,"strong"),Jx(198,"(opcional)"),sg()(),Sl(199,"p"),Jx(200,"Define a exibi\xE7\xE3o dos valores de "),Sl(201,"code"),Jx(202,"from"),sg(),Jx(203," - "),Sl(204,"code"),Jx(205,"to"),sg(),Jx(206," entre par\xEAnteses caso haja defini\xE7\xE3o de "),Sl(207,"code"),Jx(208,"p-ranges"),sg(),Jx(209,"."),sg()()(),Sl(210,"tr",15)(211,"td",16)(212,"div",17)(213,"span",18),Jx(214," p-show-pointer"),Wl(215,"br"),sg()()(),Sl(216,"td",19)(217,"code",26),Jx(218,"boolean"),sg()(),Sl(219,"td",21)(220,"p")(221,"code"),Jx(222,"true"),sg()()(),Sl(223,"td",22)(224,"em")(225,"strong"),Jx(226,"(opcional)"),sg()(),Sl(227,"p"),Jx(228,"Define a exibi\xE7\xE3o do ponteiro caso haja defini\xE7\xE3o de "),Sl(229,"code"),Jx(230,"p-ranges"),sg(),Jx(231,"."),sg()()(),Sl(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),Jx(236," p-title"),Wl(237,"br"),sg()()(),Sl(238,"td",19)(239,"code",20),Jx(240,"string"),sg()(),Sl(241,"td",21),Jx(242,"-"),sg(),Sl(243,"td",22)(244,"em")(245,"strong"),Jx(246,"(opcional)"),sg()(),Sl(247,"p"),Jx(248,"Define o t\xEDtulo do gauge."),sg()()(),Sl(249,"tr",15)(250,"td",16)(251,"div",17)(252,"span",18),Jx(253," p-value"),Wl(254,"br"),sg()()(),Sl(255,"td",19)(256,"code",23),Jx(257,"number"),sg()(),Sl(258,"td",21),Jx(259,"-"),sg(),Sl(260,"td",22)(261,"em")(262,"strong"),Jx(263,"(opcional)"),sg()(),Sl(264,"p"),Jx(265,"Valor referente ao valor da s\xE9rie. Seu comportamento segue a seguintes regras:"),sg(),Sl(266,"ul")(267,"li"),Jx(268,"Sem "),Sl(269,"code"),Jx(270,"p-ranges"),sg(),Jx(271,": Os valores passados para "),Sl(272,"code"),Jx(273,"p-value"),sg(),Jx(274," e "),Sl(275,"code"),Jx(276,"p-description"),sg(),Jx(277,` ser\xE3o centralizados no interior do arco.
A base do valor ser\xE1 percentual tendo como base os alcances entre zero e 100%. Se passado um valor superior a 100,
A coloriza\xE7\xE3o do gauge ser\xE1 completa e o valor passado ser\xE1 exibido no interior do arco.`),sg(),Sl(278,"li"),Jx(279,"Com "),Sl(280,"code"),Jx(281,"p-ranges"),sg(),Jx(282,": A descri\xE7\xE3o ser\xE1 exibida acima do gauge e haver\xE1 um ponteiro marcando o valor passado em "),Sl(283,"code"),Jx(284,"p-value"),sg(),Jx(285,`.
Considerando que o alcance em `),Sl(286,"code"),Jx(287,"ranges"),sg(),Jx(288," \xE9 aberto, ent\xE3o a escala de "),Sl(289,"code"),Jx(290,"p-value"),sg(),Jx(291,` ser\xE1 em rela\xE7\xE3o ao menor/maior alcance
absoluto definido em `),Sl(292,"code"),Jx(293,"p-ranges"),sg(),Jx(294,`.
Se passado um `),Sl(295,"code"),Jx(296,"p-value"),sg(),Jx(297," inferior em rela\xE7\xE3o ao m\xEDnimo valor definido em "),Sl(298,"code"),Jx(299,"p-ranges"),sg(),Jx(300,", o dom\xEDnio m\xEDnimo do gauge partir\xE1 de "),Sl(301,"code"),Jx(302,"p-value"),sg(),Jx(303,`.
A mesma regra prevalece para valores m\xE1ximos.`),sg()()()()(),Sl(304,"h3"),Jx(305,"Interfaces"),sg(),Sl(306,"h4",27)(307,"code",5),Jx(308,"PoGaugeOptions"),sg()(),Sl(309,"div",2)(310,"p")(311,"em"),Jx(312,"Interface"),sg(),Jx(313," para configura\xE7\xF5es dos elementos do gr\xE1fico."),sg()(),Sl(314,"h4",11),Jx(315,"Propriedades"),sg(),Sl(316,"table",12)(317,"tr",13)(318,"th",14),Jx(319,"Nome"),sg(),Sl(320,"th",14),Jx(321,"Tipo"),sg(),Sl(322,"th",14),Jx(323,"Descri\xE7\xE3o"),sg()(),Sl(324,"tr",15)(325,"td",16)(326,"div",17)(327,"span",18),Jx(328," descriptionChart"),Wl(329,"br"),sg()()(),Sl(330,"td",19)(331,"code",20),Jx(332,"string"),sg()(),Sl(333,"td",22)(334,"em")(335,"strong"),Jx(336,"(opcional)"),sg()(),Sl(337,"p"),Jx(338,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),sg()()(),Sl(339,"tr",15)(340,"td",16)(341,"div",17)(342,"span",18),Jx(343," header"),Wl(344,"br"),sg()()(),Sl(345,"td",19)(346,"code",28),Jx(347,"PoChartHeaderOptions"),sg()(),Sl(348,"td",22)(349,"em")(350,"strong"),Jx(351,"(opcional)"),sg()(),Sl(352,"p"),Jx(353,"Define um objeto do tipo "),Sl(354,"code"),Jx(355,"PoChartHeaderOptions"),sg(),Jx(356," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),sg()()(),Sl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),Jx(361," pointer"),Wl(362,"br"),sg()()(),Sl(363,"td",19)(364,"code",26),Jx(365,"boolean"),sg()(),Sl(366,"td",22)(367,"em")(368,"strong"),Jx(369,"(opcional)"),sg()(),Sl(370,"p"),Jx(371,"Define a exibi\xE7\xE3o do ponteiro."),sg(),Sl(372,"blockquote")(373,"p"),Jx(374,"V\xE1lido para gr\xE1fico do tipo "),Sl(375,"code"),Jx(376,"Gauge"),sg(),Jx(377,"."),sg()()()(),Sl(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),Jx(382," showContainerGauge"),Wl(383,"br"),sg()()(),Sl(384,"td",19)(385,"code",26),Jx(386,"boolean"),sg()(),Sl(387,"td",22)(388,"em")(389,"strong"),Jx(390,"(opcional)"),sg()(),Sl(391,"p"),Jx(392,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),sg()()(),Sl(393,"tr",15)(394,"td",16)(395,"div",17)(396,"span",18),Jx(397," showFromToLegend"),Wl(398,"br"),sg()()(),Sl(399,"td",19)(400,"code",26),Jx(401,"boolean"),sg()(),Sl(402,"td",22)(403,"em")(404,"strong"),Jx(405,"(opcional)"),sg()(),Sl(406,"p"),Jx(407,"Exibe os valores das propriedades "),Sl(408,"code"),Jx(409,"from"),sg(),Jx(410," e "),Sl(411,"code"),Jx(412,"to"),sg(),Jx(413," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),sg(),Sl(414,"blockquote")(415,"p"),Jx(416,"V\xE1lido para gr\xE1fico do tipo "),Sl(417,"code"),Jx(418,"Gauge"),sg(),Jx(419,"."),sg()()()(),Sl(420,"tr",15)(421,"td",16)(422,"div",17)(423,"span",18),Jx(424," subtitleGauge"),Wl(425,"br"),sg()()(),Sl(426,"td",19)(427,"code",20),Jx(428,"string"),sg()(),Sl(429,"td",22)(430,"em")(431,"strong"),Jx(432,"(opcional)"),sg()(),Sl(433,"p"),Jx(434,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),sg()()()(),Sl(435,"h4",27)(436,"code",5),Jx(437,"PoGaugeRanges"),sg()(),Sl(438,"div",2)(439,"p"),Jx(440,"Interface que define os alcances das cores do gauge."),sg()(),Sl(441,"h4",11),Jx(442,"Propriedades"),sg(),Sl(443,"table",12)(444,"tr",13)(445,"th",14),Jx(446,"Nome"),sg(),Sl(447,"th",14),Jx(448,"Tipo"),sg(),Sl(449,"th",14),Jx(450,"Descri\xE7\xE3o"),sg()(),Sl(451,"tr",15)(452,"td",16)(453,"div",17)(454,"span",18),Jx(455," color"),Wl(456,"br"),sg()()(),Sl(457,"td",19)(458,"code",20),Jx(459,"string"),sg()(),Sl(460,"td",22)(461,"em")(462,"strong"),Jx(463,"(opcional)"),sg()(),Sl(464,"p"),Jx(465,"Determina a cor do alcance. As maneiras de customizar o "),Sl(466,"em"),Jx(467,"preset"),sg(),Jx(468," padr\xE3o de cores s\xE3o:"),sg(),Sl(469,"ul")(470,"li"),Jx(471,"Hexadeximal, por exemplo "),Sl(472,"code"),Jx(473,"#c64840"),sg(),Jx(474,";"),sg(),Sl(475,"li"),Jx(476,"RGB, como "),Sl(477,"code"),Jx(478,"rgb(0, 0, 165)"),sg()(),Sl(479,"li"),Jx(480,"O nome da cor, por exemplo "),Sl(481,"em"),Jx(482,"blue"),sg(),Jx(483,");"),sg(),Sl(484,"li"),Jx(485,"Usando uma das cores do tema do PO: Valores v\xE1lidos:"),Sl(486,"ul")(487,"li"),Wl(488,"span",29),Sl(489,"code"),Jx(490,"color-01"),sg()(),Sl(491,"li"),Wl(492,"span",30),Sl(493,"code"),Jx(494,"color-02"),sg()(),Sl(495,"li"),Wl(496,"span",31),Sl(497,"code"),Jx(498,"color-03"),sg()(),Sl(499,"li"),Wl(500,"span",32),Sl(501,"code"),Jx(502,"color-04"),sg()(),Sl(503,"li"),Wl(504,"span",33),Sl(505,"code"),Jx(506,"color-05"),sg()(),Sl(507,"li"),Wl(508,"span",34),Sl(509,"code"),Jx(510,"color-06"),sg()(),Sl(511,"li"),Wl(512,"span",35),Sl(513,"code"),Jx(514,"color-07"),sg()(),Sl(515,"li"),Wl(516,"span",36),Sl(517,"code"),Jx(518,"color-08"),sg()(),Sl(519,"li"),Wl(520,"span",37),Sl(521,"code"),Jx(522,"color-09"),sg()(),Sl(523,"li"),Wl(524,"span",38),Sl(525,"code"),Jx(526,"color-10"),sg()(),Sl(527,"li"),Wl(528,"span",39),Sl(529,"code"),Jx(530,"color-11"),sg()(),Sl(531,"li"),Wl(532,"span",40),Sl(533,"code"),Jx(534,"color-12"),sg()()()()()()(),Sl(535,"tr",15)(536,"td",16)(537,"div",17)(538,"span",18),Jx(539," from"),Wl(540,"br"),sg()()(),Sl(541,"td",19)(542,"code",23),Jx(543,"number"),sg()(),Sl(544,"td",22)(545,"em")(546,"strong"),Jx(547,"(opcional)"),sg()(),Sl(548,"p"),Jx(549,"Alcance inicial da cor. O valor padr\xE3o \xE9 0."),sg()()(),Sl(550,"tr",15)(551,"td",16)(552,"div",17)(553,"span",18),Jx(554," label"),Wl(555,"br"),sg()()(),Sl(556,"td",19)(557,"code",20),Jx(558,"string"),sg()(),Sl(559,"td",22)(560,"em")(561,"strong"),Jx(562,"(opcional)"),sg()(),Sl(563,"p"),Jx(564,"O texto para a legenda do alcance."),sg(),Sl(565,"blockquote")(566,"p"),Jx(567,"Se desejar ocultar a legenda basta ignorar esta propriedade."),sg()()()(),Sl(568,"tr",15)(569,"td",16)(570,"div",17)(571,"span",18),Jx(572," to"),Wl(573,"br"),sg()()(),Sl(574,"td",19)(575,"code",23),Jx(576,"number"),sg()(),Sl(577,"td",22)(578,"em")(579,"strong"),Jx(580,"(opcional)"),sg()(),Sl(581,"p"),Jx(582,"Alcance final da cor. O valor padr\xE3o \xE9 100."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Gauge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-gauge-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-gauge-basic-view")(6,"sample-po-gauge-labs-view")(7,"sample-po-gauge-summary-view"),sg()()()),l&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ne,ie,le,re],encapsulation:2})}return a})();var xe=[{path:"",component:pe}],me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(xe),pL]})}return a})();var ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,me]})}return a})();export{ze as DocPoGaugeModule};