import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dg as yNe,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,aI as gc,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-value"]],template:function(l,o){l&1&&Hl(0,"po-gauge",0),l&2&&ZE("p-value",50);},dependencies:[yNe],encapsulation:2,changeDetection:1})}return a})();var de=a=>({"docs-sample-code-tabs":a}),ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Gauge Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-gauge-basic/sample-po-gauge-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-gauge [p-value]="50"></po-gauge>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-gauge-basic/sample-po-gauge-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-gauge-basic',
  templateUrl: './sample-po-gauge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-gauge-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,de,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ee],encapsulation:2})}return a})();var oe=(()=>{class a{description;subtitle;gaugeValue;height;options;optionsRanges={};properties;ranges=[];title;propertiesOptions=[{value:"showFromToLegend",label:"Show From To Legend"},{value:"showPointer",label:"Show Pointer"},{value:"showContainerGauge",label:"Show Container"},{value:"hideExpand",label:"Hide Expand"},{value:"hideTableDetails",label:"Hide Table Details"},{value:"hideExportCsv",label:"Hide Export Csv"},{value:"hideExportImage",label:"Hide Export Image"}];get isEmptyObject(){return Object.keys(this.optionsRanges).length===0}ngOnInit(){this.restore();}addRange(){this.ranges=[...this.ranges,this.optionsRanges],this.optionsRanges={};}restore(){this.description=void 0,this.gaugeValue=void 0,this.height=void 0,this.optionsRanges={},this.ranges=[],this.title=void 0,this.properties=["showPointer","showContainerGauge"],this.changeOptions();}changeOptions(){this.options={showFromToLegend:this.properties.includes("showFromToLegend"),pointer:this.properties.includes("showPointer"),showContainerGauge:this.properties.includes("showContainerGauge"),subtitleGauge:this.subtitle,header:{hideExpand:this.properties.includes("hideExpand"),hideTableDetails:this.properties.includes("hideTableDetails"),hideExportCsv:this.properties.includes("hideExportCsv"),hideExportImage:this.properties.includes("hideExportImage")}};}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs"]],standalone:false,decls:24,vars:20,consts:[["rangesForm","ngForm"],[3,"p-description","p-height","p-ranges","p-title","p-value","p-options","p-show-from-to-legend","p-show-pointer"],["p-label","Properties",1,"po-md-12"],[1,"row"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["name","gaugeValue","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","description","p-label","Description",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Ranges",1,"po-md-12"],["name","from","p-label","from",1,"po-md-3",3,"ngModelChange","ngModel"],["name","from","p-label","to",1,"po-md-3",3,"ngModelChange","ngModel"],["name","label","p-label","label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","color","p-label","color",1,"po-md-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Add Range",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let d=gx();Hl(0,"po-gauge",1)(1,"po-divider",2),Cl(2,"form")(3,"div",3)(4,"po-input",4),gw("ngModelChange",function(r){return Jy(d),Zx(o.title,r)||(o.title=r),e_(r)}),og(),Z0(),Cl(5,"po-number",5),gw("ngModelChange",function(r){return Jy(d),Zx(o.height,r)||(o.height=r),e_(r)}),og(),Z0(),Cl(6,"po-number",6),gw("ngModelChange",function(r){return Jy(d),Zx(o.gaugeValue,r)||(o.gaugeValue=r),e_(r)}),og(),Z0(),Cl(7,"po-input",7),gw("ngModelChange",function(r){return Jy(d),Zx(o.description,r)||(o.description=r),e_(r)}),og(),Z0(),Cl(8,"po-input",8),gw("ngModelChange",function(r){return Jy(d),Zx(o.subtitle,r)||(o.subtitle=r),e_(r)}),dt("p-change",function(){return o.changeOptions()}),og(),Z0(),og(),Cl(9,"form",null,0)(11,"div",9),Hl(12,"po-divider",10),Cl(13,"po-number",11),gw("ngModelChange",function(r){return Jy(d),Zx(o.optionsRanges.from,r)||(o.optionsRanges.from=r),e_(r)}),og(),Z0(),Cl(14,"po-number",12),gw("ngModelChange",function(r){return Jy(d),Zx(o.optionsRanges.to,r)||(o.optionsRanges.to=r),e_(r)}),og(),Z0(),Cl(15,"po-input",13),gw("ngModelChange",function(r){return Jy(d),Zx(o.optionsRanges.label,r)||(o.optionsRanges.label=r),e_(r)}),og(),Z0(),Cl(16,"po-input",14),gw("ngModelChange",function(r){return Jy(d),Zx(o.optionsRanges.color,r)||(o.optionsRanges.color=r),e_(r)}),og(),Z0(),og(),Cl(17,"div",9)(18,"po-checkbox-group",15),gw("ngModelChange",function(r){return Jy(d),Zx(o.properties,r)||(o.properties=r),e_(r)}),dt("p-change",function(){return o.changeOptions()}),og(),Z0(),og(),Cl(19,"div",9)(20,"po-button",16),dt("p-click",function(){return o.addRange()}),og()()()(),Cl(21,"div",9),Hl(22,"po-divider",17),Cl(23,"po-button",18),dt("p-click",function(){return o.restore()}),og()();}if(l&2){let d=Sx(10);ZE("p-description",o.description)("p-height",o.height)("p-ranges",o.ranges)("p-title",o.title)("p-value",o.gaugeValue)("p-options",o.options)("p-show-from-to-legend",o.properties.includes("showFromToLegend"))("p-show-pointer",o.properties.includes("showPointer")),Lp(4),pw("ngModel",o.title),X0(),Lp(),pw("ngModel",o.height),X0(),Lp(),pw("ngModel",o.gaugeValue),X0(),Lp(),pw("ngModel",o.description),X0(),Lp(),pw("ngModel",o.subtitle),X0(),Lp(5),pw("ngModel",o.optionsRanges.from),X0(),Lp(),pw("ngModel",o.optionsRanges.to),X0(),Lp(),pw("ngModel",o.optionsRanges.label),X0(),Lp(),pw("ngModel",o.optionsRanges.color),X0(),Lp(2),pw("ngModel",o.properties),ZE("p-options",o.propertiesOptions),X0(),Lp(2),ZE("p-disabled",d.invalid||o.isEmptyObject);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,yNe],encapsulation:2,changeDetection:1})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Gauge Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-gauge-labs/sample-po-gauge-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-gauge
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-gauge-labs/sample-po-gauge-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-gauge-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return a})();var ae=(()=>{class a{salesRanges=[{from:0,to:50,label:"Sales reduction",color:"#c64840"},{from:50,to:75,label:"Average sales",color:"#ea9b3e"},{from:75,to:100,label:"Sales soared",color:"#00b28e"}];turnoverRanges=[{from:0,to:50,label:"Low rate",color:"#00b28e"},{from:50,to:75,label:"Average rate",color:"#ea9b3e"},{from:75,to:100,label:"High rate",color:"#c64840"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary"]],standalone:false,decls:8,vars:4,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-md-6"],["p-title","Employee turnover rate","p-value","25","p-description","25% of turnover",3,"p-show-from-to-legend","p-ranges"],["p-title","Sales performance","p-value","82","p-description","The sales increased in 82% in the first bimester of 2020",3,"p-show-from-to-legend","p-ranges"]],template:function(l,o){l&1&&(Cl(0,"po-container")(1,"div",0),qx(2,"Sales Performance"),og(),Cl(3,"div",1)(4,"div",2),Hl(5,"po-gauge",3),og(),Cl(6,"div",2),Hl(7,"po-gauge",4),og()()()),l&2&&(Lp(5),ZE("p-show-from-to-legend",true)("p-ranges",o.turnoverRanges),Lp(2),ZE("p-show-from-to-legend",true)("p-ranges",o.salesRanges));},dependencies:[gc,yNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Gauge Summary"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-gauge-summary/sample-po-gauge-summary.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-gauge-summary/sample-po-gauge-summary.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-gauge-summary"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,be,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ae],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-doc"]],standalone:false,decls:583,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-class-deprecated-marker"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoGaugeOptions"],["pan","",1,"docs-api-property-type","Array<PoGaugeRanges>"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"]],template:function(l,o){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoGaugeModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-gauge."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoGaugeComponent"),og()(),Cl(12,"div",2)(13,"blockquote")(14,"p"),qx(15,"ESSE COMPONENTE EST\xC1 DEPRECIADO E SER\xC1 REMOVIDO NA v22.x.x. Indicamos a utiliza\xE7\xE3o do "),Cl(16,"code"),qx(17,"po-chart"),og(),qx(18," com "),Cl(19,"code"),qx(20,"type"),og(),qx(21," Gauge."),og()(),Cl(22,"p"),qx(23,"O componente "),Cl(24,"code"),qx(25,"po-gauge"),og(),qx(26,` prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. \xC9 muito comum, por exemplo, para demonstrar o desempenho ou progresso de algo.
O `),Cl(27,"code"),qx(28,"po-gauge"),og(),qx(29," possui dois tipos de tratamentos:"),og(),Cl(30,"ul")(31,"li"),qx(32,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),og(),Cl(33,"li"),qx(34,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),og()(),Cl(35,"h4"),qx(36,"Guia de uso para Gr\xE1ficos"),og(),Cl(37,"blockquote")(38,"p"),qx(39,"Veja nosso "),Cl(40,"a",6),qx(41,"guia de uso para gr\xE1ficos"),og(),qx(42,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),og()()(),Cl(43,"div",7)(44,"h4",8),qx(45,"Seletor"),og(),Cl(46,"pre",9),qx(47,`<po-gauge
    p-description="string"
    p-height="number"
    p-options="PoGaugeOptions"
    p-ranges="Array<PoGaugeRanges>"
    p-show-from-to-legend="boolean"
    p-show-pointer="boolean"
    p-title="string"
    p-value="number" >
</po-gauge>
`),og()(),Cl(48,"div",10),qx(49,"Deprecated"),og(),Cl(50,"h4",11),qx(51,"Propriedades"),og(),Cl(52,"table",12)(53,"tr",13)(54,"th",14),qx(55,"Nome"),og(),Cl(56,"th",14),qx(57,"Tipo"),og(),Cl(58,"th",14),qx(59,"Padr\xE3o"),og(),Cl(60,"th",14),qx(61,"Descri\xE7\xE3o"),og()(),Cl(62,"tr",15)(63,"td",16)(64,"div",17)(65,"span",18),qx(66," p-description"),Hl(67,"br"),og()()(),Cl(68,"td",19)(69,"code",20),qx(70,"string"),og()(),Cl(71,"td",21),qx(72,"-"),og(),Cl(73,"td",22)(74,"em")(75,"strong"),qx(76,"(opcional)"),og()(),Cl(77,"p"),qx(78,`Define o texto que ser\xE1 exibido no gauge.
H\xE1 dois posicionamentos para ele:`),og(),Cl(79,"ul")(80,"li"),qx(81,"Se houver defini\xE7\xE3o para "),Cl(82,"code"),qx(83,"p-ranges"),og(),qx(84,", o descritivo ser\xE1 exibido no topo do container, ficando acima do gauge;"),og(),Cl(85,"li"),qx(86,"Na aus\xEAncia de "),Cl(87,"code"),qx(88,"p-ranges"),og(),qx(89,", ser\xE1 incorporado dentro do arco do gauge, e abaixo de "),Cl(90,"code"),qx(91,"p-value"),og(),qx(92,"."),og()(),Cl(93,"blockquote")(94,"p"),qx(95,`Para uma melhor experi\xEAncia do usu\xE1rio, \xE9 recomendado um descritivo breve e com poucas palavras.
Indicamos a utiliza\xE7\xE3o da nova propriedade `),Cl(96,"code"),qx(97,"descriptionChart"),og(),qx(98," em "),Cl(99,"code"),qx(100,"p-options"),og(),qx(101,"."),og()()()(),Cl(102,"tr",15)(103,"td",16)(104,"div",17)(105,"span",18),qx(106," p-height"),Hl(107,"br"),og()()(),Cl(108,"td",19)(109,"code",23),qx(110,"number"),og()(),Cl(111,"td",21)(112,"p")(113,"code"),qx(114,"300px"),og()()(),Cl(115,"td",22)(116,"em")(117,"strong"),qx(118,"(opcional)"),og()(),Cl(119,"p"),qx(120,"Define a altura do gauge."),og(),Cl(121,"p"),qx(122,"O valor m\xEDnimo aceito \xE9 300px."),og()()(),Cl(123,"tr",15)(124,"td",16)(125,"div",17)(126,"span",18),qx(127," p-options"),Hl(128,"br"),og()()(),Cl(129,"td",19)(130,"code",24),qx(131,"PoGaugeOptions"),og()(),Cl(132,"td",21),qx(133,"-"),og(),Cl(134,"td",22)(135,"em")(136,"strong"),qx(137,"(opcional)"),og()(),Cl(138,"p"),qx(139,"Objeto com as configura\xE7\xF5es usadas no "),Cl(140,"code"),qx(141,"po-gauge"),og(),qx(142,"."),og(),Cl(143,"p"),qx(144,`\xC9 poss\xEDvel, por exemplo, esconder as funcionalidades do header,
ou habilitar uma legenda com `),Cl(145,"code"),qx(146,"From"),og(),Cl(147,"code"),qx(148,"To"),og(),qx(149," da seguinte forma:"),og(),Cl(150,"pre")(151,"code"),qx(152,`chartOptions: PoGaugeOptions = {
  showFromToLegend: true,
  header: {
    hideExpand: true,
  },
};
`),og()()()(),Cl(153,"tr",15)(154,"td",16)(155,"div",17)(156,"span",18),qx(157," p-ranges"),Hl(158,"br"),og()()(),Cl(159,"td",19)(160,"code",25),qx(161,"Array<PoGaugeRanges>"),og()(),Cl(162,"td",21),qx(163,"-"),og(),Cl(164,"td",22)(165,"em")(166,"strong"),qx(167,"(opcional)"),og()(),Cl(168,"p"),qx(169,`Defini\xE7\xE3o para o alcance de cores. Ao adicionar pelo menos um item na lista,
incorpora-se o ponteiro que assinala o valor passado em `),Cl(170,"code"),qx(171,"p-value"),og(),qx(172,`.
Se o valor de `),Cl(173,"code"),qx(174,"p-value"),og(),qx(175," for inferior ao m\xEDnimo valor definido em "),Cl(176,"code"),qx(177,"PoGaugeRanges.from"),og(),qx(178,", o dom\xEDnio m\xEDnimo do gauge ser\xE1 "),Cl(179,"code"),qx(180,"p-value"),og(),qx(181,`.
A mesma regra prevalece para valores m\xE1ximos.`),og()()(),Cl(182,"tr",15)(183,"td",16)(184,"div",17)(185,"span",18),qx(186," p-show-from-to-legend"),Hl(187,"br"),og()()(),Cl(188,"td",19)(189,"code",26),qx(190,"boolean"),og()(),Cl(191,"td",21)(192,"p")(193,"code"),qx(194,"false"),og()()(),Cl(195,"td",22)(196,"em")(197,"strong"),qx(198,"(opcional)"),og()(),Cl(199,"p"),qx(200,"Define a exibi\xE7\xE3o dos valores de "),Cl(201,"code"),qx(202,"from"),og(),qx(203," - "),Cl(204,"code"),qx(205,"to"),og(),qx(206," entre par\xEAnteses caso haja defini\xE7\xE3o de "),Cl(207,"code"),qx(208,"p-ranges"),og(),qx(209,"."),og()()(),Cl(210,"tr",15)(211,"td",16)(212,"div",17)(213,"span",18),qx(214," p-show-pointer"),Hl(215,"br"),og()()(),Cl(216,"td",19)(217,"code",26),qx(218,"boolean"),og()(),Cl(219,"td",21)(220,"p")(221,"code"),qx(222,"true"),og()()(),Cl(223,"td",22)(224,"em")(225,"strong"),qx(226,"(opcional)"),og()(),Cl(227,"p"),qx(228,"Define a exibi\xE7\xE3o do ponteiro caso haja defini\xE7\xE3o de "),Cl(229,"code"),qx(230,"p-ranges"),og(),qx(231,"."),og()()(),Cl(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),qx(236," p-title"),Hl(237,"br"),og()()(),Cl(238,"td",19)(239,"code",20),qx(240,"string"),og()(),Cl(241,"td",21),qx(242,"-"),og(),Cl(243,"td",22)(244,"em")(245,"strong"),qx(246,"(opcional)"),og()(),Cl(247,"p"),qx(248,"Define o t\xEDtulo do gauge."),og()()(),Cl(249,"tr",15)(250,"td",16)(251,"div",17)(252,"span",18),qx(253," p-value"),Hl(254,"br"),og()()(),Cl(255,"td",19)(256,"code",23),qx(257,"number"),og()(),Cl(258,"td",21),qx(259,"-"),og(),Cl(260,"td",22)(261,"em")(262,"strong"),qx(263,"(opcional)"),og()(),Cl(264,"p"),qx(265,"Valor referente ao valor da s\xE9rie. Seu comportamento segue a seguintes regras:"),og(),Cl(266,"ul")(267,"li"),qx(268,"Sem "),Cl(269,"code"),qx(270,"p-ranges"),og(),qx(271,": Os valores passados para "),Cl(272,"code"),qx(273,"p-value"),og(),qx(274," e "),Cl(275,"code"),qx(276,"p-description"),og(),qx(277,` ser\xE3o centralizados no interior do arco.
A base do valor ser\xE1 percentual tendo como base os alcances entre zero e 100%. Se passado um valor superior a 100,
A coloriza\xE7\xE3o do gauge ser\xE1 completa e o valor passado ser\xE1 exibido no interior do arco.`),og(),Cl(278,"li"),qx(279,"Com "),Cl(280,"code"),qx(281,"p-ranges"),og(),qx(282,": A descri\xE7\xE3o ser\xE1 exibida acima do gauge e haver\xE1 um ponteiro marcando o valor passado em "),Cl(283,"code"),qx(284,"p-value"),og(),qx(285,`.
Considerando que o alcance em `),Cl(286,"code"),qx(287,"ranges"),og(),qx(288," \xE9 aberto, ent\xE3o a escala de "),Cl(289,"code"),qx(290,"p-value"),og(),qx(291,` ser\xE1 em rela\xE7\xE3o ao menor/maior alcance
absoluto definido em `),Cl(292,"code"),qx(293,"p-ranges"),og(),qx(294,`.
Se passado um `),Cl(295,"code"),qx(296,"p-value"),og(),qx(297," inferior em rela\xE7\xE3o ao m\xEDnimo valor definido em "),Cl(298,"code"),qx(299,"p-ranges"),og(),qx(300,", o dom\xEDnio m\xEDnimo do gauge partir\xE1 de "),Cl(301,"code"),qx(302,"p-value"),og(),qx(303,`.
A mesma regra prevalece para valores m\xE1ximos.`),og()()()()(),Cl(304,"h3"),qx(305,"Interfaces"),og(),Cl(306,"h4",27)(307,"code",5),qx(308,"PoGaugeOptions"),og()(),Cl(309,"div",2)(310,"p")(311,"em"),qx(312,"Interface"),og(),qx(313," para configura\xE7\xF5es dos elementos do gr\xE1fico."),og()(),Cl(314,"h4",11),qx(315,"Propriedades"),og(),Cl(316,"table",12)(317,"tr",13)(318,"th",14),qx(319,"Nome"),og(),Cl(320,"th",14),qx(321,"Tipo"),og(),Cl(322,"th",14),qx(323,"Descri\xE7\xE3o"),og()(),Cl(324,"tr",15)(325,"td",16)(326,"div",17)(327,"span",18),qx(328," descriptionChart"),Hl(329,"br"),og()()(),Cl(330,"td",19)(331,"code",20),qx(332,"string"),og()(),Cl(333,"td",22)(334,"em")(335,"strong"),qx(336,"(opcional)"),og()(),Cl(337,"p"),qx(338,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),og()()(),Cl(339,"tr",15)(340,"td",16)(341,"div",17)(342,"span",18),qx(343," header"),Hl(344,"br"),og()()(),Cl(345,"td",19)(346,"code",28),qx(347,"PoChartHeaderOptions"),og()(),Cl(348,"td",22)(349,"em")(350,"strong"),qx(351,"(opcional)"),og()(),Cl(352,"p"),qx(353,"Define um objeto do tipo "),Cl(354,"code"),qx(355,"PoChartHeaderOptions"),og(),qx(356," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),og()()(),Cl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),qx(361," pointer"),Hl(362,"br"),og()()(),Cl(363,"td",19)(364,"code",26),qx(365,"boolean"),og()(),Cl(366,"td",22)(367,"em")(368,"strong"),qx(369,"(opcional)"),og()(),Cl(370,"p"),qx(371,"Define a exibi\xE7\xE3o do ponteiro."),og(),Cl(372,"blockquote")(373,"p"),qx(374,"V\xE1lido para gr\xE1fico do tipo "),Cl(375,"code"),qx(376,"Gauge"),og(),qx(377,"."),og()()()(),Cl(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),qx(382," showContainerGauge"),Hl(383,"br"),og()()(),Cl(384,"td",19)(385,"code",26),qx(386,"boolean"),og()(),Cl(387,"td",22)(388,"em")(389,"strong"),qx(390,"(opcional)"),og()(),Cl(391,"p"),qx(392,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),og()()(),Cl(393,"tr",15)(394,"td",16)(395,"div",17)(396,"span",18),qx(397," showFromToLegend"),Hl(398,"br"),og()()(),Cl(399,"td",19)(400,"code",26),qx(401,"boolean"),og()(),Cl(402,"td",22)(403,"em")(404,"strong"),qx(405,"(opcional)"),og()(),Cl(406,"p"),qx(407,"Exibe os valores das propriedades "),Cl(408,"code"),qx(409,"from"),og(),qx(410," e "),Cl(411,"code"),qx(412,"to"),og(),qx(413," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),og(),Cl(414,"blockquote")(415,"p"),qx(416,"V\xE1lido para gr\xE1fico do tipo "),Cl(417,"code"),qx(418,"Gauge"),og(),qx(419,"."),og()()()(),Cl(420,"tr",15)(421,"td",16)(422,"div",17)(423,"span",18),qx(424," subtitleGauge"),Hl(425,"br"),og()()(),Cl(426,"td",19)(427,"code",20),qx(428,"string"),og()(),Cl(429,"td",22)(430,"em")(431,"strong"),qx(432,"(opcional)"),og()(),Cl(433,"p"),qx(434,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),og()()()(),Cl(435,"h4",27)(436,"code",5),qx(437,"PoGaugeRanges"),og()(),Cl(438,"div",2)(439,"p"),qx(440,"Interface que define os alcances das cores do gauge."),og()(),Cl(441,"h4",11),qx(442,"Propriedades"),og(),Cl(443,"table",12)(444,"tr",13)(445,"th",14),qx(446,"Nome"),og(),Cl(447,"th",14),qx(448,"Tipo"),og(),Cl(449,"th",14),qx(450,"Descri\xE7\xE3o"),og()(),Cl(451,"tr",15)(452,"td",16)(453,"div",17)(454,"span",18),qx(455," color"),Hl(456,"br"),og()()(),Cl(457,"td",19)(458,"code",20),qx(459,"string"),og()(),Cl(460,"td",22)(461,"em")(462,"strong"),qx(463,"(opcional)"),og()(),Cl(464,"p"),qx(465,"Determina a cor do alcance. As maneiras de customizar o "),Cl(466,"em"),qx(467,"preset"),og(),qx(468," padr\xE3o de cores s\xE3o:"),og(),Cl(469,"ul")(470,"li"),qx(471,"Hexadeximal, por exemplo "),Cl(472,"code"),qx(473,"#c64840"),og(),qx(474,";"),og(),Cl(475,"li"),qx(476,"RGB, como "),Cl(477,"code"),qx(478,"rgb(0, 0, 165)"),og()(),Cl(479,"li"),qx(480,"O nome da cor, por exemplo "),Cl(481,"em"),qx(482,"blue"),og(),qx(483,");"),og(),Cl(484,"li"),qx(485,"Usando uma das cores do tema do PO: Valores v\xE1lidos:"),Cl(486,"ul")(487,"li"),Hl(488,"span",29),Cl(489,"code"),qx(490,"color-01"),og()(),Cl(491,"li"),Hl(492,"span",30),Cl(493,"code"),qx(494,"color-02"),og()(),Cl(495,"li"),Hl(496,"span",31),Cl(497,"code"),qx(498,"color-03"),og()(),Cl(499,"li"),Hl(500,"span",32),Cl(501,"code"),qx(502,"color-04"),og()(),Cl(503,"li"),Hl(504,"span",33),Cl(505,"code"),qx(506,"color-05"),og()(),Cl(507,"li"),Hl(508,"span",34),Cl(509,"code"),qx(510,"color-06"),og()(),Cl(511,"li"),Hl(512,"span",35),Cl(513,"code"),qx(514,"color-07"),og()(),Cl(515,"li"),Hl(516,"span",36),Cl(517,"code"),qx(518,"color-08"),og()(),Cl(519,"li"),Hl(520,"span",37),Cl(521,"code"),qx(522,"color-09"),og()(),Cl(523,"li"),Hl(524,"span",38),Cl(525,"code"),qx(526,"color-10"),og()(),Cl(527,"li"),Hl(528,"span",39),Cl(529,"code"),qx(530,"color-11"),og()(),Cl(531,"li"),Hl(532,"span",40),Cl(533,"code"),qx(534,"color-12"),og()()()()()()(),Cl(535,"tr",15)(536,"td",16)(537,"div",17)(538,"span",18),qx(539," from"),Hl(540,"br"),og()()(),Cl(541,"td",19)(542,"code",23),qx(543,"number"),og()(),Cl(544,"td",22)(545,"em")(546,"strong"),qx(547,"(opcional)"),og()(),Cl(548,"p"),qx(549,"Alcance inicial da cor. O valor padr\xE3o \xE9 0."),og()()(),Cl(550,"tr",15)(551,"td",16)(552,"div",17)(553,"span",18),qx(554," label"),Hl(555,"br"),og()()(),Cl(556,"td",19)(557,"code",20),qx(558,"string"),og()(),Cl(559,"td",22)(560,"em")(561,"strong"),qx(562,"(opcional)"),og()(),Cl(563,"p"),qx(564,"O texto para a legenda do alcance."),og(),Cl(565,"blockquote")(566,"p"),qx(567,"Se desejar ocultar a legenda basta ignorar esta propriedade."),og()()()(),Cl(568,"tr",15)(569,"td",16)(570,"div",17)(571,"span",18),qx(572," to"),Hl(573,"br"),og()()(),Cl(574,"td",19)(575,"code",23),qx(576,"number"),og()(),Cl(577,"td",22)(578,"em")(579,"strong"),qx(580,"(opcional)"),og()(),Cl(581,"p"),qx(582,"Alcance final da cor. O valor padr\xE3o \xE9 100."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Gauge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-gauge-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-gauge-basic-view")(6,"sample-po-gauge-labs-view")(7,"sample-po-gauge-summary-view"),og()()()),l&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ne,ie,le,re],encapsulation:2})}return a})();var xe=[{path:"",component:pe}],me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(xe),bL]})}return a})();var ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,me]})}return a})();export{ze as DocPoGaugeModule};