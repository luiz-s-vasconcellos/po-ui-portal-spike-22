import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cH as UD,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,ah as uo,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-value"]],template:function(l,o){l&1&&Ul(0,"po-gauge",0),l&2&&YE("p-value",50);},dependencies:[UD],encapsulation:2,changeDetection:1})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Gauge Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-gauge-basic/sample-po-gauge-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-gauge [p-value]="50"></po-gauge>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-gauge-basic/sample-po-gauge-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-gauge-basic',
  templateUrl: './sample-po-gauge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-gauge-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ue,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ne],encapsulation:2})}return a})();var ae=(()=>{class a{description;subtitle;gaugeValue;height;options;optionsRanges={};properties;ranges=[];title;propertiesOptions=[{value:"showFromToLegend",label:"Show From To Legend"},{value:"showPointer",label:"Show Pointer"},{value:"showContainerGauge",label:"Show Container"},{value:"hideExpand",label:"Hide Expand"},{value:"hideTableDetails",label:"Hide Table Details"},{value:"hideExportCsv",label:"Hide Export Csv"},{value:"hideExportImage",label:"Hide Export Image"}];get isEmptyObject(){return Object.keys(this.optionsRanges).length===0}ngOnInit(){this.restore();}addRange(){this.ranges=[...this.ranges,this.optionsRanges],this.optionsRanges={};}restore(){this.description=void 0,this.gaugeValue=void 0,this.height=void 0,this.optionsRanges={},this.ranges=[],this.title=void 0,this.properties=["showPointer","showContainerGauge"],this.changeOptions();}changeOptions(){this.options={showFromToLegend:this.properties.includes("showFromToLegend"),pointer:this.properties.includes("showPointer"),showContainerGauge:this.properties.includes("showContainerGauge"),subtitleGauge:this.subtitle,header:{hideExpand:this.properties.includes("hideExpand"),hideTableDetails:this.properties.includes("hideTableDetails"),hideExportCsv:this.properties.includes("hideExportCsv"),hideExportImage:this.properties.includes("hideExportImage")}};}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs"]],standalone:false,decls:24,vars:20,consts:[["rangesForm","ngForm"],[3,"p-description","p-height","p-ranges","p-title","p-value","p-options","p-show-from-to-legend","p-show-pointer"],["p-label","Properties",1,"po-md-12"],[1,"row"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["name","gaugeValue","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","description","p-label","Description",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Ranges",1,"po-md-12"],["name","from","p-label","from",1,"po-md-3",3,"ngModelChange","ngModel"],["name","from","p-label","to",1,"po-md-3",3,"ngModelChange","ngModel"],["name","label","p-label","label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","color","p-label","color",1,"po-md-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Add Range",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let d=lx();Ul(0,"po-gauge",1)(1,"po-divider",2),wl(2,"form")(3,"div",3)(4,"po-input",4),pw("ngModelChange",function(r){return Qy(d),$x(o.title,r)||(o.title=r),Jy(r)}),ng(),$0(),wl(5,"po-number",5),pw("ngModelChange",function(r){return Qy(d),$x(o.height,r)||(o.height=r),Jy(r)}),ng(),$0(),wl(6,"po-number",6),pw("ngModelChange",function(r){return Qy(d),$x(o.gaugeValue,r)||(o.gaugeValue=r),Jy(r)}),ng(),$0(),wl(7,"po-input",7),pw("ngModelChange",function(r){return Qy(d),$x(o.description,r)||(o.description=r),Jy(r)}),ng(),$0(),wl(8,"po-input",8),pw("ngModelChange",function(r){return Qy(d),$x(o.subtitle,r)||(o.subtitle=r),Jy(r)}),ut("p-change",function(){return o.changeOptions()}),ng(),$0(),ng(),wl(9,"form",null,0)(11,"div",9),Ul(12,"po-divider",10),wl(13,"po-number",11),pw("ngModelChange",function(r){return Qy(d),$x(o.optionsRanges.from,r)||(o.optionsRanges.from=r),Jy(r)}),ng(),$0(),wl(14,"po-number",12),pw("ngModelChange",function(r){return Qy(d),$x(o.optionsRanges.to,r)||(o.optionsRanges.to=r),Jy(r)}),ng(),$0(),wl(15,"po-input",13),pw("ngModelChange",function(r){return Qy(d),$x(o.optionsRanges.label,r)||(o.optionsRanges.label=r),Jy(r)}),ng(),$0(),wl(16,"po-input",14),pw("ngModelChange",function(r){return Qy(d),$x(o.optionsRanges.color,r)||(o.optionsRanges.color=r),Jy(r)}),ng(),$0(),ng(),wl(17,"div",9)(18,"po-checkbox-group",15),pw("ngModelChange",function(r){return Qy(d),$x(o.properties,r)||(o.properties=r),Jy(r)}),ut("p-change",function(){return o.changeOptions()}),ng(),$0(),ng(),wl(19,"div",9)(20,"po-button",16),ut("p-click",function(){return o.addRange()}),ng()()()(),wl(21,"div",9),Ul(22,"po-divider",17),wl(23,"po-button",18),ut("p-click",function(){return o.restore()}),ng()();}if(l&2){let d=_x(10);YE("p-description",o.description)("p-height",o.height)("p-ranges",o.ranges)("p-title",o.title)("p-value",o.gaugeValue)("p-options",o.options)("p-show-from-to-legend",o.properties.includes("showFromToLegend"))("p-show-pointer",o.properties.includes("showPointer")),Pp(4),hw("ngModel",o.title),G0(),Pp(),hw("ngModel",o.height),G0(),Pp(),hw("ngModel",o.gaugeValue),G0(),Pp(),hw("ngModel",o.description),G0(),Pp(),hw("ngModel",o.subtitle),G0(),Pp(5),hw("ngModel",o.optionsRanges.from),G0(),Pp(),hw("ngModel",o.optionsRanges.to),G0(),Pp(),hw("ngModel",o.optionsRanges.label),G0(),Pp(),hw("ngModel",o.optionsRanges.color),G0(),Pp(2),hw("ngModel",o.properties),YE("p-options",o.propertiesOptions),G0(),Pp(2),YE("p-disabled",d.invalid||o.isEmptyObject);}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ha,UD],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Gauge Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-gauge-labs/sample-po-gauge-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-gauge
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-gauge-labs/sample-po-gauge-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-gauge-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ee,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ae],encapsulation:2})}return a})();var re=(()=>{class a{salesRanges=[{from:0,to:50,label:"Sales reduction",color:"#c64840"},{from:50,to:75,label:"Average sales",color:"#ea9b3e"},{from:75,to:100,label:"Sales soared",color:"#00b28e"}];turnoverRanges=[{from:0,to:50,label:"Low rate",color:"#00b28e"},{from:50,to:75,label:"Average rate",color:"#ea9b3e"},{from:75,to:100,label:"High rate",color:"#c64840"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary"]],standalone:false,decls:8,vars:4,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-md-6"],["p-title","Employee turnover rate","p-value","25","p-description","25% of turnover",3,"p-show-from-to-legend","p-ranges"],["p-title","Sales performance","p-value","82","p-description","The sales increased in 82% in the first bimester of 2020",3,"p-show-from-to-legend","p-ranges"]],template:function(l,o){l&1&&(wl(0,"po-container")(1,"div",0),Ux(2,"Sales Performance"),ng(),wl(3,"div",1)(4,"div",2),Ul(5,"po-gauge",3),ng(),wl(6,"div",2),Ul(7,"po-gauge",4),ng()()()),l&2&&(Pp(5),YE("p-show-from-to-legend",true)("p-ranges",o.turnoverRanges),Pp(2),YE("p-show-from-to-legend",true)("p-ranges",o.salesRanges));},dependencies:[uo,UD],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Gauge Summary"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-gauge-summary/sample-po-gauge-summary.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-gauge-summary/sample-po-gauge-summary.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-gauge-summary"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,fe,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-doc"]],standalone:false,decls:583,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-class-deprecated-marker"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoGaugeOptions"],["pan","",1,"docs-api-property-type","Array<PoGaugeRanges>"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"]],template:function(l,o){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoGaugeModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-gauge."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoGaugeComponent"),ng()(),wl(12,"div",2)(13,"blockquote")(14,"p"),Ux(15,"ESSE COMPONENTE EST\xC1 DEPRECIADO E SER\xC1 REMOVIDO NA v22.x.x. Indicamos a utiliza\xE7\xE3o do "),wl(16,"code"),Ux(17,"po-chart"),ng(),Ux(18," com "),wl(19,"code"),Ux(20,"type"),ng(),Ux(21," Gauge."),ng()(),wl(22,"p"),Ux(23,"O componente "),wl(24,"code"),Ux(25,"po-gauge"),ng(),Ux(26,` prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. \xC9 muito comum, por exemplo, para demonstrar o desempenho ou progresso de algo.
O `),wl(27,"code"),Ux(28,"po-gauge"),ng(),Ux(29," possui dois tipos de tratamentos:"),ng(),wl(30,"ul")(31,"li"),Ux(32,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),ng(),wl(33,"li"),Ux(34,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),ng()(),wl(35,"h4"),Ux(36,"Guia de uso para Gr\xE1ficos"),ng(),wl(37,"blockquote")(38,"p"),Ux(39,"Veja nosso "),wl(40,"a",6),Ux(41,"guia de uso para gr\xE1ficos"),ng(),Ux(42,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),ng()()(),wl(43,"div",7)(44,"h4",8),Ux(45,"Seletor"),ng(),wl(46,"pre",9),Ux(47,`<po-gauge
    p-description="string"
    p-height="number"
    p-options="PoGaugeOptions"
    p-ranges="Array<PoGaugeRanges>"
    p-show-from-to-legend="boolean"
    p-show-pointer="boolean"
    p-title="string"
    p-value="number" >
</po-gauge>
`),ng()(),wl(48,"div",10),Ux(49,"Deprecated"),ng(),wl(50,"h4",11),Ux(51,"Propriedades"),ng(),wl(52,"table",12)(53,"tr",13)(54,"th",14),Ux(55,"Nome"),ng(),wl(56,"th",14),Ux(57,"Tipo"),ng(),wl(58,"th",14),Ux(59,"Padr\xE3o"),ng(),wl(60,"th",14),Ux(61,"Descri\xE7\xE3o"),ng()(),wl(62,"tr",15)(63,"td",16)(64,"div",17)(65,"span",18),Ux(66," p-description"),Ul(67,"br"),ng()()(),wl(68,"td",19)(69,"code",20),Ux(70,"string"),ng()(),wl(71,"td",21),Ux(72,"-"),ng(),wl(73,"td",22)(74,"em")(75,"strong"),Ux(76,"(opcional)"),ng()(),wl(77,"p"),Ux(78,`Define o texto que ser\xE1 exibido no gauge.
H\xE1 dois posicionamentos para ele:`),ng(),wl(79,"ul")(80,"li"),Ux(81,"Se houver defini\xE7\xE3o para "),wl(82,"code"),Ux(83,"p-ranges"),ng(),Ux(84,", o descritivo ser\xE1 exibido no topo do container, ficando acima do gauge;"),ng(),wl(85,"li"),Ux(86,"Na aus\xEAncia de "),wl(87,"code"),Ux(88,"p-ranges"),ng(),Ux(89,", ser\xE1 incorporado dentro do arco do gauge, e abaixo de "),wl(90,"code"),Ux(91,"p-value"),ng(),Ux(92,"."),ng()(),wl(93,"blockquote")(94,"p"),Ux(95,`Para uma melhor experi\xEAncia do usu\xE1rio, \xE9 recomendado um descritivo breve e com poucas palavras.
Indicamos a utiliza\xE7\xE3o da nova propriedade `),wl(96,"code"),Ux(97,"descriptionChart"),ng(),Ux(98," em "),wl(99,"code"),Ux(100,"p-options"),ng(),Ux(101,"."),ng()()()(),wl(102,"tr",15)(103,"td",16)(104,"div",17)(105,"span",18),Ux(106," p-height"),Ul(107,"br"),ng()()(),wl(108,"td",19)(109,"code",23),Ux(110,"number"),ng()(),wl(111,"td",21)(112,"p")(113,"code"),Ux(114,"300px"),ng()()(),wl(115,"td",22)(116,"em")(117,"strong"),Ux(118,"(opcional)"),ng()(),wl(119,"p"),Ux(120,"Define a altura do gauge."),ng(),wl(121,"p"),Ux(122,"O valor m\xEDnimo aceito \xE9 300px."),ng()()(),wl(123,"tr",15)(124,"td",16)(125,"div",17)(126,"span",18),Ux(127," p-options"),Ul(128,"br"),ng()()(),wl(129,"td",19)(130,"code",24),Ux(131,"PoGaugeOptions"),ng()(),wl(132,"td",21),Ux(133,"-"),ng(),wl(134,"td",22)(135,"em")(136,"strong"),Ux(137,"(opcional)"),ng()(),wl(138,"p"),Ux(139,"Objeto com as configura\xE7\xF5es usadas no "),wl(140,"code"),Ux(141,"po-gauge"),ng(),Ux(142,"."),ng(),wl(143,"p"),Ux(144,`\xC9 poss\xEDvel, por exemplo, esconder as funcionalidades do header,
ou habilitar uma legenda com `),wl(145,"code"),Ux(146,"From"),ng(),wl(147,"code"),Ux(148,"To"),ng(),Ux(149," da seguinte forma:"),ng(),wl(150,"pre")(151,"code"),Ux(152,`chartOptions: PoGaugeOptions = {
  showFromToLegend: true,
  header: {
    hideExpand: true,
  },
};
`),ng()()()(),wl(153,"tr",15)(154,"td",16)(155,"div",17)(156,"span",18),Ux(157," p-ranges"),Ul(158,"br"),ng()()(),wl(159,"td",19)(160,"code",25),Ux(161,"Array<PoGaugeRanges>"),ng()(),wl(162,"td",21),Ux(163,"-"),ng(),wl(164,"td",22)(165,"em")(166,"strong"),Ux(167,"(opcional)"),ng()(),wl(168,"p"),Ux(169,`Defini\xE7\xE3o para o alcance de cores. Ao adicionar pelo menos um item na lista,
incorpora-se o ponteiro que assinala o valor passado em `),wl(170,"code"),Ux(171,"p-value"),ng(),Ux(172,`.
Se o valor de `),wl(173,"code"),Ux(174,"p-value"),ng(),Ux(175," for inferior ao m\xEDnimo valor definido em "),wl(176,"code"),Ux(177,"PoGaugeRanges.from"),ng(),Ux(178,", o dom\xEDnio m\xEDnimo do gauge ser\xE1 "),wl(179,"code"),Ux(180,"p-value"),ng(),Ux(181,`.
A mesma regra prevalece para valores m\xE1ximos.`),ng()()(),wl(182,"tr",15)(183,"td",16)(184,"div",17)(185,"span",18),Ux(186," p-show-from-to-legend"),Ul(187,"br"),ng()()(),wl(188,"td",19)(189,"code",26),Ux(190,"boolean"),ng()(),wl(191,"td",21)(192,"p")(193,"code"),Ux(194,"false"),ng()()(),wl(195,"td",22)(196,"em")(197,"strong"),Ux(198,"(opcional)"),ng()(),wl(199,"p"),Ux(200,"Define a exibi\xE7\xE3o dos valores de "),wl(201,"code"),Ux(202,"from"),ng(),Ux(203," - "),wl(204,"code"),Ux(205,"to"),ng(),Ux(206," entre par\xEAnteses caso haja defini\xE7\xE3o de "),wl(207,"code"),Ux(208,"p-ranges"),ng(),Ux(209,"."),ng()()(),wl(210,"tr",15)(211,"td",16)(212,"div",17)(213,"span",18),Ux(214," p-show-pointer"),Ul(215,"br"),ng()()(),wl(216,"td",19)(217,"code",26),Ux(218,"boolean"),ng()(),wl(219,"td",21)(220,"p")(221,"code"),Ux(222,"true"),ng()()(),wl(223,"td",22)(224,"em")(225,"strong"),Ux(226,"(opcional)"),ng()(),wl(227,"p"),Ux(228,"Define a exibi\xE7\xE3o do ponteiro caso haja defini\xE7\xE3o de "),wl(229,"code"),Ux(230,"p-ranges"),ng(),Ux(231,"."),ng()()(),wl(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),Ux(236," p-title"),Ul(237,"br"),ng()()(),wl(238,"td",19)(239,"code",20),Ux(240,"string"),ng()(),wl(241,"td",21),Ux(242,"-"),ng(),wl(243,"td",22)(244,"em")(245,"strong"),Ux(246,"(opcional)"),ng()(),wl(247,"p"),Ux(248,"Define o t\xEDtulo do gauge."),ng()()(),wl(249,"tr",15)(250,"td",16)(251,"div",17)(252,"span",18),Ux(253," p-value"),Ul(254,"br"),ng()()(),wl(255,"td",19)(256,"code",23),Ux(257,"number"),ng()(),wl(258,"td",21),Ux(259,"-"),ng(),wl(260,"td",22)(261,"em")(262,"strong"),Ux(263,"(opcional)"),ng()(),wl(264,"p"),Ux(265,"Valor referente ao valor da s\xE9rie. Seu comportamento segue a seguintes regras:"),ng(),wl(266,"ul")(267,"li"),Ux(268,"Sem "),wl(269,"code"),Ux(270,"p-ranges"),ng(),Ux(271,": Os valores passados para "),wl(272,"code"),Ux(273,"p-value"),ng(),Ux(274," e "),wl(275,"code"),Ux(276,"p-description"),ng(),Ux(277,` ser\xE3o centralizados no interior do arco.
A base do valor ser\xE1 percentual tendo como base os alcances entre zero e 100%. Se passado um valor superior a 100,
A coloriza\xE7\xE3o do gauge ser\xE1 completa e o valor passado ser\xE1 exibido no interior do arco.`),ng(),wl(278,"li"),Ux(279,"Com "),wl(280,"code"),Ux(281,"p-ranges"),ng(),Ux(282,": A descri\xE7\xE3o ser\xE1 exibida acima do gauge e haver\xE1 um ponteiro marcando o valor passado em "),wl(283,"code"),Ux(284,"p-value"),ng(),Ux(285,`.
Considerando que o alcance em `),wl(286,"code"),Ux(287,"ranges"),ng(),Ux(288," \xE9 aberto, ent\xE3o a escala de "),wl(289,"code"),Ux(290,"p-value"),ng(),Ux(291,` ser\xE1 em rela\xE7\xE3o ao menor/maior alcance
absoluto definido em `),wl(292,"code"),Ux(293,"p-ranges"),ng(),Ux(294,`.
Se passado um `),wl(295,"code"),Ux(296,"p-value"),ng(),Ux(297," inferior em rela\xE7\xE3o ao m\xEDnimo valor definido em "),wl(298,"code"),Ux(299,"p-ranges"),ng(),Ux(300,", o dom\xEDnio m\xEDnimo do gauge partir\xE1 de "),wl(301,"code"),Ux(302,"p-value"),ng(),Ux(303,`.
A mesma regra prevalece para valores m\xE1ximos.`),ng()()()()(),wl(304,"h3"),Ux(305,"Interfaces"),ng(),wl(306,"h4",27)(307,"code",5),Ux(308,"PoGaugeOptions"),ng()(),wl(309,"div",2)(310,"p")(311,"em"),Ux(312,"Interface"),ng(),Ux(313," para configura\xE7\xF5es dos elementos do gr\xE1fico."),ng()(),wl(314,"h4",11),Ux(315,"Propriedades"),ng(),wl(316,"table",12)(317,"tr",13)(318,"th",14),Ux(319,"Nome"),ng(),wl(320,"th",14),Ux(321,"Tipo"),ng(),wl(322,"th",14),Ux(323,"Descri\xE7\xE3o"),ng()(),wl(324,"tr",15)(325,"td",16)(326,"div",17)(327,"span",18),Ux(328," descriptionChart"),Ul(329,"br"),ng()()(),wl(330,"td",19)(331,"code",20),Ux(332,"string"),ng()(),wl(333,"td",22)(334,"em")(335,"strong"),Ux(336,"(opcional)"),ng()(),wl(337,"p"),Ux(338,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),ng()()(),wl(339,"tr",15)(340,"td",16)(341,"div",17)(342,"span",18),Ux(343," header"),Ul(344,"br"),ng()()(),wl(345,"td",19)(346,"code",28),Ux(347,"PoChartHeaderOptions"),ng()(),wl(348,"td",22)(349,"em")(350,"strong"),Ux(351,"(opcional)"),ng()(),wl(352,"p"),Ux(353,"Define um objeto do tipo "),wl(354,"code"),Ux(355,"PoChartHeaderOptions"),ng(),Ux(356," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),ng()()(),wl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),Ux(361," pointer"),Ul(362,"br"),ng()()(),wl(363,"td",19)(364,"code",26),Ux(365,"boolean"),ng()(),wl(366,"td",22)(367,"em")(368,"strong"),Ux(369,"(opcional)"),ng()(),wl(370,"p"),Ux(371,"Define a exibi\xE7\xE3o do ponteiro."),ng(),wl(372,"blockquote")(373,"p"),Ux(374,"V\xE1lido para gr\xE1fico do tipo "),wl(375,"code"),Ux(376,"Gauge"),ng(),Ux(377,"."),ng()()()(),wl(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),Ux(382," showContainerGauge"),Ul(383,"br"),ng()()(),wl(384,"td",19)(385,"code",26),Ux(386,"boolean"),ng()(),wl(387,"td",22)(388,"em")(389,"strong"),Ux(390,"(opcional)"),ng()(),wl(391,"p"),Ux(392,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),ng()()(),wl(393,"tr",15)(394,"td",16)(395,"div",17)(396,"span",18),Ux(397," showFromToLegend"),Ul(398,"br"),ng()()(),wl(399,"td",19)(400,"code",26),Ux(401,"boolean"),ng()(),wl(402,"td",22)(403,"em")(404,"strong"),Ux(405,"(opcional)"),ng()(),wl(406,"p"),Ux(407,"Exibe os valores das propriedades "),wl(408,"code"),Ux(409,"from"),ng(),Ux(410," e "),wl(411,"code"),Ux(412,"to"),ng(),Ux(413," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),ng(),wl(414,"blockquote")(415,"p"),Ux(416,"V\xE1lido para gr\xE1fico do tipo "),wl(417,"code"),Ux(418,"Gauge"),ng(),Ux(419,"."),ng()()()(),wl(420,"tr",15)(421,"td",16)(422,"div",17)(423,"span",18),Ux(424," subtitleGauge"),Ul(425,"br"),ng()()(),wl(426,"td",19)(427,"code",20),Ux(428,"string"),ng()(),wl(429,"td",22)(430,"em")(431,"strong"),Ux(432,"(opcional)"),ng()(),wl(433,"p"),Ux(434,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),ng()()()(),wl(435,"h4",27)(436,"code",5),Ux(437,"PoGaugeRanges"),ng()(),wl(438,"div",2)(439,"p"),Ux(440,"Interface que define os alcances das cores do gauge."),ng()(),wl(441,"h4",11),Ux(442,"Propriedades"),ng(),wl(443,"table",12)(444,"tr",13)(445,"th",14),Ux(446,"Nome"),ng(),wl(447,"th",14),Ux(448,"Tipo"),ng(),wl(449,"th",14),Ux(450,"Descri\xE7\xE3o"),ng()(),wl(451,"tr",15)(452,"td",16)(453,"div",17)(454,"span",18),Ux(455," color"),Ul(456,"br"),ng()()(),wl(457,"td",19)(458,"code",20),Ux(459,"string"),ng()(),wl(460,"td",22)(461,"em")(462,"strong"),Ux(463,"(opcional)"),ng()(),wl(464,"p"),Ux(465,"Determina a cor do alcance. As maneiras de customizar o "),wl(466,"em"),Ux(467,"preset"),ng(),Ux(468," padr\xE3o de cores s\xE3o:"),ng(),wl(469,"ul")(470,"li"),Ux(471,"Hexadeximal, por exemplo "),wl(472,"code"),Ux(473,"#c64840"),ng(),Ux(474,";"),ng(),wl(475,"li"),Ux(476,"RGB, como "),wl(477,"code"),Ux(478,"rgb(0, 0, 165)"),ng()(),wl(479,"li"),Ux(480,"O nome da cor, por exemplo "),wl(481,"em"),Ux(482,"blue"),ng(),Ux(483,");"),ng(),wl(484,"li"),Ux(485,"Usando uma das cores do tema do PO: Valores v\xE1lidos:"),wl(486,"ul")(487,"li"),Ul(488,"span",29),wl(489,"code"),Ux(490,"color-01"),ng()(),wl(491,"li"),Ul(492,"span",30),wl(493,"code"),Ux(494,"color-02"),ng()(),wl(495,"li"),Ul(496,"span",31),wl(497,"code"),Ux(498,"color-03"),ng()(),wl(499,"li"),Ul(500,"span",32),wl(501,"code"),Ux(502,"color-04"),ng()(),wl(503,"li"),Ul(504,"span",33),wl(505,"code"),Ux(506,"color-05"),ng()(),wl(507,"li"),Ul(508,"span",34),wl(509,"code"),Ux(510,"color-06"),ng()(),wl(511,"li"),Ul(512,"span",35),wl(513,"code"),Ux(514,"color-07"),ng()(),wl(515,"li"),Ul(516,"span",36),wl(517,"code"),Ux(518,"color-08"),ng()(),wl(519,"li"),Ul(520,"span",37),wl(521,"code"),Ux(522,"color-09"),ng()(),wl(523,"li"),Ul(524,"span",38),wl(525,"code"),Ux(526,"color-10"),ng()(),wl(527,"li"),Ul(528,"span",39),wl(529,"code"),Ux(530,"color-11"),ng()(),wl(531,"li"),Ul(532,"span",40),wl(533,"code"),Ux(534,"color-12"),ng()()()()()()(),wl(535,"tr",15)(536,"td",16)(537,"div",17)(538,"span",18),Ux(539," from"),Ul(540,"br"),ng()()(),wl(541,"td",19)(542,"code",23),Ux(543,"number"),ng()(),wl(544,"td",22)(545,"em")(546,"strong"),Ux(547,"(opcional)"),ng()(),wl(548,"p"),Ux(549,"Alcance inicial da cor. O valor padr\xE3o \xE9 0."),ng()()(),wl(550,"tr",15)(551,"td",16)(552,"div",17)(553,"span",18),Ux(554," label"),Ul(555,"br"),ng()()(),wl(556,"td",19)(557,"code",20),Ux(558,"string"),ng()(),wl(559,"td",22)(560,"em")(561,"strong"),Ux(562,"(opcional)"),ng()(),wl(563,"p"),Ux(564,"O texto para a legenda do alcance."),ng(),wl(565,"blockquote")(566,"p"),Ux(567,"Se desejar ocultar a legenda basta ignorar esta propriedade."),ng()()()(),wl(568,"tr",15)(569,"td",16)(570,"div",17)(571,"span",18),Ux(572," to"),Ul(573,"br"),ng()()(),wl(574,"td",19)(575,"code",23),Ux(576,"number"),ng()(),wl(577,"td",22)(578,"em")(579,"strong"),Ux(580,"(opcional)"),ng()(),wl(581,"p"),Ux(582,"Alcance final da cor. O valor padr\xE3o \xE9 100."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Gauge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-gauge-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-gauge-basic-view")(6,"sample-po-gauge-labs-view")(7,"sample-po-gauge-summary-view"),ng()()()),l&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,ie,le,pe,me],encapsulation:2})}return a})();var ve=[{path:"",component:se}],de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[vL.forChild(ve),vL]})}return a})();var et=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[u5,de]})}return a})();export{et as DocPoGaugeModule};