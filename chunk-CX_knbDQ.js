import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,b$ as jse,c0 as $se,s,r as r$1,d as f,by as vle,c1 as ep,N as Ul,S as YE,bj as eN,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,ai as ya,bd as na,bC as Vp,al as lx,am as pw,an as $0,ao as QA,ap as hw,aq as G0,ar as JA,ah as uo,aR as ty,aU as IR,X as we$1,a3 as D3,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var Ne=()=>({label:"Angular",data:100}),Ie=()=>({label:"React",data:10}),qe=(r,B)=>[r,B],ye=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-series"]],template:function(d,i){d&1&&Ul(0,"po-chart",0),d&2&&YE("p-series",eN(3,qe,Qx(1,Ne),Qx(2,Ie)));},dependencies:[ep],encapsulation:2,changeDetection:1})}return r})();var He=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Chart Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-chart-basic"),ng(),Ul(23,"hr")),d&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,He,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return r})();var Ye=()=>({value:"fillPoints",label:"fillPoints"}),z=r=>[r],je=()=>({label:"legend",value:"legend"}),Ue=()=>({label:"roseType",value:"roseType"}),Je=()=>({label:"showFromToLegend",value:"showFromToLegend"}),Xe=()=>({label:"pointer",value:"pointer"}),Qe=()=>({label:"stacked",value:"stacked"}),Ke=()=>({value:"fixed",label:"Fixed"});function $e(r,B){if(r&1){let l=lx();wl(0,"po-checkbox-group",54),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),Jy(i)}),ut("p-change",function(){Qy(l);let i=gx();return Jy(i.changeDataLabelOptions())}),ng(),$0();}if(r&2){let l=gx();YE("p-options",Jx(3,z,Qx(2,Ke))),hw("ngModel",l.selectedValuesDataLabel),G0();}}function et(r,B){if(r&1){let l=lx();wl(0,"po-number",55),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.valueGauge,i)||(s.valueGauge=i),Jy(i)}),ut("p-change",function(i){Qy(l);let s=gx();return Jy(s.changeValueGauge(i))}),ng(),$0();}if(r&2){let l=gx();hw("ngModel",l.valueGauge),G0();}}function tt(r,B){if(r&1){let l=lx();wl(0,"po-radio-group",56),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.selectedShapeOption,i)||(s.selectedShapeOption=i),Jy(i)}),ng(),$0(),wl(1,"po-switch",57),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.selectedSplitArea,i)||(s.selectedSplitArea=i),Jy(i)}),ng(),$0(),wl(2,"po-switch",58),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),Jy(i)}),ng(),$0();}if(r&2){let l=gx();YE("p-options",l.optionsShapeOption),hw("ngModel",l.selectedShapeOption),G0(),Pp(),hw("ngModel",l.selectedSplitArea),G0(),Pp(),hw("ngModel",l.selectedAreaStyle),G0();}}function nt(r,B){if(r&1){let l=lx();wl(0,"po-input",59),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.data,i)||(s.data=i),Jy(i)}),ng(),$0();}if(r&2){let l=gx();hw("ngModel",l.data),G0();}}function it(r,B){if(r&1){let l=lx();wl(0,"po-input",60),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.stackGroupName,i)||(s.stackGroupName=i),Jy(i)}),ng(),$0();}if(r&2){let l=gx();hw("ngModel",l.stackGroupName),G0();}}function ot(r,B){if(r&1){let l=lx();wl(0,"po-number",61),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.fromGauge,i)||(s.fromGauge=i),Jy(i)}),ng(),$0();}if(r&2){let l=gx();hw("ngModel",l.fromGauge),G0();}}function at(r,B){if(r&1){let l=lx();wl(0,"po-number",62),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.toGauge,i)||(s.toGauge=i),Jy(i)}),ng(),$0();}if(r&2){let l=gx();hw("ngModel",l.toGauge),G0();}}function rt(r,B){if(r&1){let l=lx();wl(0,"div",3)(1,"po-button",63),ut("p-click",function(){Qy(l);let i=gx();return Jy(i.addData())}),ng()();}}function lt(r,B){if(r&1){let l=lx();wl(0,"po-number",64),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.min,i)||(s.min=i),Jy(i)}),ng(),$0(),wl(1,"po-number",65),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.max,i)||(s.max=i),Jy(i)}),ng(),$0(),wl(2,"po-input",66),pw("ngModelChange",function(i){Qy(l);let s=gx();return $x(s.colorIndicator,i)||(s.colorIndicator=i),Jy(i)}),ng(),$0(),wl(3,"div",3)(4,"po-button",67),ut("p-click",function(){Qy(l);let i=gx();return Jy(i.addData())}),ng()();}if(r&2){let l=gx();hw("ngModel",l.min),G0(),Pp(),hw("ngModel",l.max),G0(),Pp(),hw("ngModel",l.colorIndicator),G0(),Pp(2),YE("p-disabled",l.isTypeRadar&&!l.categories);}}var _e=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=false;isTypeRadar=false;disabledTooltip=false;disabledType=false;selectedSplitArea=false;selectedAreaStyle=false;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedLegendType="plain";selectedRendererOption="canvas";selectedShapeOption="polygon";helpRadar='Example: ["Bold", "Keen", "Calm", "Wise"]';helpGeneric='Example: ["Jan", "Feb", "Mar", "Apr"]';optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsLegendType=[{value:"plain",label:"plain"},{value:"scroll",label:"scroll"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];optionsShapeOption=[{value:"polygon",label:"polygon"},{value:"circle",label:"circle"}];typeOptions=[{label:"Line",value:jse.Line},{label:"Area",value:jse.Area},{label:"Bar",value:jse.Bar},{label:"Column",value:jse.Column},{label:"Donut",value:jse.Donut},{label:"Pie",value:jse.Pie},{label:"Gauge",value:jse.Gauge},{label:"Radar",value:jse.Radar}];labelTypeOptions=[{label:"Number",value:$se.Number},{label:"Currency",value:$se.Currency}];changeDataLabelOptions(){this.dataLabel=s(r$1({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")});}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=s(r$1({},this.options),{axis:l});}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=s(r$1({},this.options),{header:l});}changeDataZoomOptions(){this.options=s(r$1({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=r$1({},this.options);}changeFillPointsOptions(){this.options=s(r$1({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")});}changeLegendOptions(){this.options=s(r$1({},this.options),{legend:this.selectedValuesLegend.includes("legend")});}changeRoseTypeOptions(){this.options=s(r$1({},this.options),{roseType:this.selectedRoseType.includes("roseType")});}changeShowFromToLegend(){this.options=s(r$1({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")});}changePointer(){this.options=s(r$1({},this.options),{pointer:this.selectedPointer.includes("pointer")});}changeStacked(){this.options=s(r$1({},this.options),{stacked:this.selectedStacked.includes("stacked")});}changeLegendVerticalPosition(){this.options=s(r$1({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition});}changeLegendPosition(){this.options=s(r$1({},this.options),{legendPosition:this.selectedLegendPosition});}changeLegendType(){this.options=s(r$1({},this.options),{legendType:this.selectedLegendType});}changeRendererOption(){this.options=s(r$1({},this.options),{rendererOption:this.selectedRendererOption});}changeType(l){l===jse.Gauge&&(this.isTypeGauge=true,this.changeSwitchGauge(true)),l===jse.Radar&&(this.isTypeRadar=true,this.changeSwitchRadar(true));}changeSwitchGauge(l){this.restore(true),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=jse.Gauge,this.type=jse.Gauge,this.isTypeRadar=false):(this.serieType=void 0,this.type=void 0);}changeSwitchRadar(l){this.restore(true,true),this.disabledType=l,l?(this.serieType=jse.Radar,this.type=jse.Radar,this.isTypeGauge=false):(this.serieType=void 0,this.type=void 0);}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series]);}ngOnInit(){this.restore();}addOptions(l){this.options=r$1(r$1({},this.options),l?r$1({},l):{});}addCategories(){this.allCategories=this.convertToArray(this.categories);}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea};}addData(){let l=this.serieType??this.type,d;l==="radar"?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r$1({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0);}isTypeGrid(){return this.type===jse.Line||this.type===jse.Area||this.type===jse.Column||this.type===jse.Bar||this.type===jse.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`;}restore(l=false,d=false){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=false,this.disabledType=false,this.dataLabel={fixed:false},this.options=s(r$1({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=false),d||(this.isTypeRadar=false,this.categories=void 0,this.radarConfig=[]);}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs"]],standalone:false,decls:66,vars:100,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"p-options","ngModel"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","radar","p-label","Radar Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModel"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModel"],["p-label","Chart categories",1,"po-md-12"],["name","categories",3,"ngModelChange","p-blur","p-label","p-help","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendType","p-label","LegendType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","radioShapeOption","p-label","ShapeOption",1,"po-md-3",3,"ngModelChange","p-options","ngModel"],["name","splitArea","p-label","splitArea",1,"po-md-1",3,"ngModelChange","ngModel"],["name","areaStyle","p-label","areaStyle",1,"po-md-1",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],["name","min","p-label","Min",1,"po-md-3",3,"ngModelChange","ngModel"],["name","max","p-label","Max",1,"po-md-3",3,"ngModelChange","ngModel"],["name","colorIndicator","p-label","Color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click","p-disabled"]],template:function(d,i){if(d&1){let s=lx();wl(0,"po-chart",1),ut("p-series-click",function(a){return i.changeEvent("p-series-click",a)})("p-series-hover",function(a){return i.changeEvent("p-series-hover",a)}),ng(),Ul(1,"po-divider",2),wl(2,"div",3),Ul(3,"po-info",4),ng(),Ul(4,"po-divider",5),wl(5,"form")(6,"po-select",6),pw("ngModelChange",function(a){return Qy(s),$x(i.type,a)||(i.type=a),Jy(a)}),ut("p-change",function(a){return i.changeType(a)}),ng(),$0(),wl(7,"po-number",7),pw("ngModelChange",function(a){return Qy(s),$x(i.height,a)||(i.height=a),Jy(a)}),ng(),$0(),wl(8,"po-input",8),pw("ngModelChange",function(a){return Qy(s),$x(i.title,a)||(i.title=a),Jy(a)}),ng(),$0(),QA(9,$e,1,5,"po-checkbox-group",9),ng(),Ul(10,"po-divider",10),wl(11,"form",null,0)(13,"div",3)(14,"po-switch",11),pw("ngModelChange",function(a){return Qy(s),$x(i.isTypeGauge,a)||(i.isTypeGauge=a),Jy(a)}),ut("p-change",function(a){return i.changeSwitchGauge(a)}),ng(),$0(),wl(15,"po-switch",12),pw("ngModelChange",function(a){return Qy(s),$x(i.isTypeRadar,a)||(i.isTypeRadar=a),Jy(a)}),ut("p-change",function(a){return i.changeSwitchRadar(a)}),ng(),$0(),QA(16,et,1,1,"po-number",13),QA(17,tt,3,4),ng(),wl(18,"div",3)(19,"po-input",14),pw("ngModelChange",function(a){return Qy(s),$x(i.label,a)||(i.label=a),Jy(a)}),ng(),$0(),QA(20,nt,1,1,"po-input",15),wl(21,"po-select",16),pw("ngModelChange",function(a){return Qy(s),$x(i.serieType,a)||(i.serieType=a),Jy(a)}),ut("p-change",function(a){return i.changeType(a)}),ng(),$0(),wl(22,"po-input",17),pw("ngModelChange",function(a){return Qy(s),$x(i.tooltip,a)||(i.tooltip=a),Jy(a)}),ng(),$0(),wl(23,"po-input",18),pw("ngModelChange",function(a){return Qy(s),$x(i.color,a)||(i.color=a),Jy(a)}),ng(),$0(),QA(24,it,1,1,"po-input",19),QA(25,ot,1,1,"po-number",20),QA(26,at,1,1,"po-number",21),QA(27,rt,2,0,"div",3),ng()(),wl(28,"div",3),Ul(29,"po-divider",22),wl(30,"po-input",23),pw("ngModelChange",function(a){return Qy(s),$x(i.categories,a)||(i.categories=a),Jy(a)}),ut("p-blur",function(){return i.addCategories()}),ng(),$0(),QA(31,lt,5,4),ng(),wl(32,"form")(33,"div",3),Ul(34,"po-divider",24),wl(35,"po-number",25),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.minRange,a)||(i.options.axis.minRange=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(36,"po-number",26),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(37,"po-number",27),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(38,"po-select",28),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.labelType,a)||(i.options.axis.labelType=a),Jy(a)}),ut("p-change",function(){return i.addOptions()}),ng(),$0(),wl(39,"po-number",29),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(40,"po-number",30),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(41,"po-number",31),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(42,"po-number",32),pw("ngModelChange",function(a){return Qy(s),$x(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(43,"po-number",33),pw("ngModelChange",function(a){return Qy(s),$x(i.options.innerRadius,a)||(i.options.innerRadius=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(44,"po-number",34),pw("ngModelChange",function(a){return Qy(s),$x(i.options.borderRadius,a)||(i.options.borderRadius=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(45,"po-input",35),pw("ngModelChange",function(a){return Qy(s),$x(i.options.firstColumnName,a)||(i.options.firstColumnName=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(46,"po-input",36),pw("ngModelChange",function(a){return Qy(s),$x(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(47,"po-input",37),pw("ngModelChange",function(a){return Qy(s),$x(i.options.descriptionChart,a)||(i.options.descriptionChart=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),wl(48,"po-input",38),pw("ngModelChange",function(a){return Qy(s),$x(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),Jy(a)}),ut("p-blur",function(){return i.addOptions()}),ng(),$0(),ng(),wl(49,"div",3)(50,"po-checkbox-group",39),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),Jy(a)}),ut("p-change",function(){return i.changeHeaderOptions()}),ng(),$0(),wl(51,"po-checkbox-group",40),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),Jy(a)}),ut("p-change",function(){return i.changeAxisOptions()}),ng(),$0(),wl(52,"po-checkbox-group",41),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),Jy(a)}),ut("p-change",function(){return i.changeDataZoomOptions()}),ng(),$0(),wl(53,"po-checkbox-group",42),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),Jy(a)}),ut("p-change",function(){return i.changeFillPointsOptions()}),ng(),$0(),wl(54,"po-checkbox-group",43),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),Jy(a)}),ut("p-change",function(){return i.changeLegendOptions()}),ng(),$0(),wl(55,"po-checkbox-group",44),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedRoseType,a)||(i.selectedRoseType=a),Jy(a)}),ut("p-change",function(){return i.changeRoseTypeOptions()}),ng(),$0(),wl(56,"po-checkbox-group",45),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),Jy(a)}),ut("p-change",function(){return i.changeShowFromToLegend()}),ng(),$0(),wl(57,"po-checkbox-group",46),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedPointer,a)||(i.selectedPointer=a),Jy(a)}),ut("p-change",function(){return i.changePointer()}),ng(),$0(),wl(58,"po-checkbox-group",47),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedStacked,a)||(i.selectedStacked=a),Jy(a)}),ut("p-change",function(){return i.changeStacked()}),ng(),$0(),wl(59,"po-radio-group",48),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),Jy(a)}),ut("p-change",function(){return i.changeLegendVerticalPosition()}),ng(),$0(),wl(60,"po-radio-group",49),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),Jy(a)}),ut("p-change",function(){return i.changeLegendPosition()}),ng(),$0(),wl(61,"po-radio-group",50),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedLegendType,a)||(i.selectedLegendType=a),Jy(a)}),ut("p-change",function(){return i.changeLegendType()}),ng(),$0(),wl(62,"po-radio-group",51),pw("ngModelChange",function(a){return Qy(s),$x(i.selectedRendererOption,a)||(i.selectedRendererOption=a),Jy(a)}),ut("p-change",function(){return i.changeRendererOption()}),ng(),$0(),ng(),Ul(63,"po-divider",52),wl(64,"div",3)(65,"po-button",53),ut("p-click",function(){return i.restore()}),ng()()();}d&2&&(YE("p-categories",i.isTypeRadar?i.radarConfig:i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),Pp(3),YE("p-value",i.event),Pp(3),hw("ngModel",i.type),YE("p-disabled",i.disabledType)("p-options",i.typeOptions),G0(),Pp(),hw("ngModel",i.height),G0(),Pp(),hw("ngModel",i.title),G0(),Pp(),JA(i.isTypeGrid()?9:-1),Pp(5),hw("ngModel",i.isTypeGauge),G0(),Pp(),hw("ngModel",i.isTypeRadar),G0(),Pp(),JA(i.isTypeGauge?16:-1),Pp(),JA(i.isTypeRadar?17:-1),Pp(2),hw("ngModel",i.label),G0(),Pp(),JA(i.isTypeGauge?-1:20),Pp(),hw("ngModel",i.serieType),YE("p-disabled",i.disabledType)("p-options",i.typeOptions),G0(),Pp(),YE("p-disabled",i.disabledTooltip),hw("ngModel",i.tooltip),G0(),Pp(),hw("ngModel",i.color),G0(),Pp(),JA(i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"?24:-1),Pp(),JA(i.isTypeGauge?25:-1),Pp(),JA(i.isTypeGauge?26:-1),Pp(),JA(i.isTypeRadar?-1:27),Pp(3),Ax(i.isTypeRadar?"po-md-3":"po-md-4"),YE("p-label",i.isTypeRadar?"Indicators":"Categories")("p-help",i.isTypeRadar?i.helpRadar:i.helpGeneric),hw("ngModel",i.categories),G0(),Pp(),JA(i.isTypeRadar?31:-1),Pp(4),hw("ngModel",i.options.axis.minRange),G0(),Pp(),hw("ngModel",i.options.axis.maxRange),G0(),Pp(),hw("ngModel",i.options.axis.gridLines),G0(),Pp(),YE("p-options",i.labelTypeOptions),hw("ngModel",i.options.axis.labelType),G0(),Pp(),hw("ngModel",i.options.axis.paddingBottom),G0(),Pp(),hw("ngModel",i.options.axis.paddingLeft),G0(),Pp(),hw("ngModel",i.options.axis.paddingRight),G0(),Pp(),hw("ngModel",i.options.axis.rotateLegend),G0(),Pp(),hw("ngModel",i.options.innerRadius),G0(),Pp(),hw("ngModel",i.options.borderRadius),G0(),Pp(),hw("ngModel",i.options.firstColumnName),G0(),Pp(),hw("ngModel",i.options.textCenterGraph),G0(),Pp(),hw("ngModel",i.options.descriptionChart),G0(),Pp(),hw("ngModel",i.options.subtitleGauge),G0(),Pp(2),YE("p-columns",2)("p-options",i.optionsHeader),hw("ngModel",i.selectedValuesHeader),G0(),Pp(),YE("p-columns",2)("p-options",i.optionsAxis),hw("ngModel",i.selectedValuesAxis),G0(),Pp(),YE("p-columns",2)("p-options",i.optionsDataZoom),hw("ngModel",i.selectedValuesDataZoom),G0(),Pp(),YE("p-columns",1)("p-options",Jx(83,z,Qx(82,Ye))),hw("ngModel",i.selectedValuesFillPoints),G0(),Pp(),YE("p-options",Jx(86,z,Qx(85,je))),hw("ngModel",i.selectedValuesLegend),G0(),Pp(),YE("p-options",Jx(89,z,Qx(88,Ue))),hw("ngModel",i.selectedRoseType),G0(),Pp(),YE("p-options",Jx(92,z,Qx(91,Je))),hw("ngModel",i.selectedFromToLegend),G0(),Pp(),YE("p-options",Jx(95,z,Qx(94,Xe))),hw("ngModel",i.selectedPointer),G0(),Pp(),YE("p-options",Jx(98,z,Qx(97,Qe))),hw("ngModel",i.selectedStacked),G0(),Pp(),YE("p-options",i.optionsLegendVerticalPosition),hw("ngModel",i.selectedLegendVerticalPosition),G0(),Pp(),YE("p-options",i.optionsLegendPosition),hw("ngModel",i.selectedLegendPosition),G0(),Pp(),YE("p-options",i.optionsLegendType),hw("ngModel",i.selectedLegendType),G0(),Pp(),YE("p-options",i.optionsRendererOption),hw("ngModel",i.selectedRendererOption),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,ep,di,ia,Yo,ha,ga,ya,na,Vp],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r}),Pe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Chart Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-chart
  [p-categories]="isTypeRadar ? radarConfig : allCategories"
  [p-height]="height"
  [p-data-label]="dataLabel"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  [p-value-gauge-multiple]="valueGauge"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select
    class="po-md-3"
    name="type"
    [(ngModel)]="type"
    p-columns="3"
    p-label="Type"
    [p-disabled]="disabledType"
    [p-options]="typeOptions"
    (p-change)="changeType($event)"
  >
  </po-select>

  <po-number class="po-md-3" name="height" p-label="Height" [(ngModel)]="height"> </po-number>

  <po-input class="po-md-3" name="title" p-label="Title" [(ngModel)]="title"> </po-input>

  @if (isTypeGrid()) {
    <po-checkbox-group
      class="po-md-3"
      name="dataLabel"
      p-label="DataLabel"
      [p-options]="[{ value: 'fixed', label: 'Fixed' }]"
      [(ngModel)]="selectedValuesDataLabel"
      (p-change)="changeDataLabelOptions()"
    >
    </po-checkbox-group>
  }
</form>

<po-divider class="po-md-12" p-label="Chart series"></po-divider>

<form #chartSeries="ngForm">
  <div class="po-row">
    <po-switch
      class="po-md-3"
      name="switch"
      p-label="Gauge Type"
      [(ngModel)]="isTypeGauge"
      (p-change)="changeSwitchGauge($event)"
    >
    </po-switch>

    <po-switch
      class="po-md-3"
      name="radar"
      p-label="Radar Type"
      [(ngModel)]="isTypeRadar"
      (p-change)="changeSwitchRadar($event)"
    >
    </po-switch>

    @if (isTypeGauge) {
      <po-number
        class="po-md-4"
        p-label="Value Gauge"
        name="valueGauge"
        [(ngModel)]="valueGauge"
        (p-change)="changeValueGauge($event)"
      ></po-number>
    }

    @if (isTypeRadar) {
      <po-radio-group
        class="po-md-3"
        name="radioShapeOption"
        p-label="ShapeOption"
        [p-options]="optionsShapeOption"
        [(ngModel)]="selectedShapeOption"
      >
      </po-radio-group>

      <po-switch name="splitArea" class="po-md-1" p-label="splitArea" [(ngModel)]="selectedSplitArea"> </po-switch>

      <po-switch name="areaStyle" class="po-md-1" p-label="areaStyle" [(ngModel)]="selectedAreaStyle"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-input class="po-md-4" name="label" p-label="Label" [(ngModel)]="label"></po-input>

    @if (!isTypeGauge) {
      <po-input class="po-md-4" name="data" p-label="Data" p-help="Example: [25, 58, 83, 66] or 25" [(ngModel)]="data">
      </po-input>
    }

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-disabled]="disabledType"
      [p-options]="typeOptions"
      (p-change)="changeType($event)"
    >
    </po-select>

    <po-input
      class="po-md-4"
      name="tooltip"
      p-label="Tooltip"
      p-help="Custom Tooltip"
      [p-disabled]="disabledTooltip"
      [(ngModel)]="tooltip"
    ></po-input>

    <po-input class="po-md-4" name="color" p-label="Color" p-help="Custom Color" [(ngModel)]="color"></po-input>

    @if (type === 'bar' || serieType === 'bar' || type === 'column' || serieType === 'column') {
      <po-input
        class="po-md-4"
        name="stackGroupName"
        p-label="Stack Group Name"
        p-help="Custom Group Name"
        [(ngModel)]="stackGroupName"
      ></po-input>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="From" name="from" [(ngModel)]="fromGauge"></po-number>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="To" name="from" [(ngModel)]="toGauge"></po-number>
    }

    @if (!isTypeRadar) {
      <div class="po-row">
        <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()"> </po-button>
      </div>
    }
  </div>
</form>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Chart categories"></po-divider>
  <po-input
    name="categories"
    [class]="isTypeRadar ? 'po-md-3' : 'po-md-4'"
    [p-label]="isTypeRadar ? 'Indicators' : 'Categories'"
    [p-help]="isTypeRadar ? helpRadar : helpGeneric"
    [(ngModel)]="categories"
    (p-blur)="addCategories()"
  >
  </po-input>

  @if (isTypeRadar) {
    <po-number name="min" class="po-md-3" p-label="Min" [(ngModel)]="min"> </po-number>

    <po-number name="max" class="po-md-3" p-label="Max" [(ngModel)]="max"> </po-number>

    <po-input name="colorIndicator" class="po-md-3" p-label="Color" [(ngModel)]="colorIndicator"> </po-input>

    <div class="po-row">
      <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()" [p-disabled]="isTypeRadar && !categories">
      </po-button>
    </div>
  }
</div>
<form>
  <div class="po-row">
    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      p-label="minRange"
      [(ngModel)]="options.axis.minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      p-label="maxRange"
      [(ngModel)]="options.axis.maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      p-label="gridLines"
      [(ngModel)]="options.axis.gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="labelType"
      p-label="labelType"
      [p-options]="labelTypeOptions"
      [(ngModel)]="options.axis.labelType"
      (p-change)="addOptions()"
    >
    </po-select>

    <po-number
      class="po-md-4"
      name="paddingBottom"
      p-label="paddingBottom"
      [(ngModel)]="options.axis.paddingBottom"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingLeft"
      p-label="paddingLeft"
      [(ngModel)]="options.axis.paddingLeft"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingRight"
      p-label="paddingRight"
      [(ngModel)]="options.axis.paddingRight"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="rotateLegend"
      p-label="rotateLegend"
      [(ngModel)]="options.axis.rotateLegend"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      p-label="innerRadius"
      [(ngModel)]="options.innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="borderRadius"
      p-label="borderRadius"
      [(ngModel)]="options.borderRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-input
      class="po-md-4"
      name="firstColumnName"
      p-label="firstColumnName"
      [(ngModel)]="options.firstColumnName"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="textCenterGraph"
      p-label="textCenterGraph"
      [(ngModel)]="options.textCenterGraph"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="descriptionChart"
      p-label="descriptionChart"
      [(ngModel)]="options.descriptionChart"
      (p-blur)="addOptions()"
    ></po-input>

    <po-input
      class="po-md-4"
      name="subtitleGauge"
      p-label="subtitleGauge"
      [(ngModel)]="options.subtitleGauge"
      (p-blur)="addOptions()"
    >
    </po-input>
  </div>
  <div class="po-row">
    <po-checkbox-group
      class="po-md-4"
      name="headerGroup"
      p-label="Header"
      [p-columns]="2"
      [p-options]="optionsHeader"
      [(ngModel)]="selectedValuesHeader"
      (p-change)="changeHeaderOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="axisGroup"
      p-label="Axis"
      [p-columns]="2"
      [p-options]="optionsAxis"
      [(ngModel)]="selectedValuesAxis"
      (p-change)="changeAxisOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="dataZoomGroup"
      p-label="DataZoom"
      [p-columns]="2"
      [p-options]="optionsDataZoom"
      [(ngModel)]="selectedValuesDataZoom"
      (p-change)="changeDataZoomOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="fillPoints"
      p-label="FillPoints"
      [p-columns]="1"
      [p-options]="[{ value: 'fillPoints', label: 'fillPoints' }]"
      [(ngModel)]="selectedValuesFillPoints"
      (p-change)="changeFillPointsOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="legend"
      p-label="Legend"
      [p-options]="[{ label: 'legend', value: 'legend' }]"
      [(ngModel)]="selectedValuesLegend"
      (p-change)="changeLegendOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="roseType"
      p-label="RoseType"
      [p-options]="[{ label: 'roseType', value: 'roseType' }]"
      [(ngModel)]="selectedRoseType"
      (p-change)="changeRoseTypeOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="showFromToLegend"
      p-label="ShowFromToLegend"
      [p-options]="[{ label: 'showFromToLegend', value: 'showFromToLegend' }]"
      [(ngModel)]="selectedFromToLegend"
      (p-change)="changeShowFromToLegend()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="pointer"
      p-label="Pointer"
      [p-options]="[{ label: 'pointer', value: 'pointer' }]"
      [(ngModel)]="selectedPointer"
      (p-change)="changePointer()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="stacked"
      p-label="Stacked"
      [p-options]="[{ label: 'stacked', value: 'stacked' }]"
      [(ngModel)]="selectedStacked"
      (p-change)="changeStacked()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendVerticalPosition"
      p-label="LegendVerticalPosition"
      [p-options]="optionsLegendVerticalPosition"
      [(ngModel)]="selectedLegendVerticalPosition"
      (p-change)="changeLegendVerticalPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendPosition"
      p-label="LegendPosition"
      [p-options]="optionsLegendPosition"
      [(ngModel)]="selectedLegendPosition"
      (p-change)="changeLegendPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendType"
      p-label="LegendType"
      [p-options]="optionsLegendType"
      [(ngModel)]="selectedLegendType"
      (p-change)="changeLegendType()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioRendererOption"
      p-label="RendererOption"
      [p-options]="optionsRendererOption"
      [(ngModel)]="selectedRendererOption"
      (p-change)="changeRendererOption()"
    >
    </po-radio-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-4" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoChartDataLabel,
  PoChartLabelFormat
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  color: string;
  stackGroupName: string;
  data;
  label: string;
  tooltip: string;
  type: PoChartType;
  serieType: PoChartType;
  valueGauge: number;
  fromGauge: number;
  toGauge: number;
  allCategories: Array<string> = [];
  radarConfig: any = {
    indicator: []
  };

  categories: string;
  min: number;
  max: number;
  colorIndicator: string;
  event: string;
  height: number;
  series: Array<PoChartSerie>;
  title: string;
  dataLabel: PoChartDataLabel;
  isTypeGauge = false;
  isTypeRadar = false;
  disabledTooltip = false;
  disabledType = false;
  selectedSplitArea = false;
  selectedAreaStyle = false;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined,
      labelType: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
      rotateLegend: undefined,
      showXAxis: undefined,
      showYAxis: undefined,
      showAxisDetails: undefined
    },
    header: {
      hideExpand: undefined,
      hideExportCsv: undefined,
      hideExportImage: undefined,
      hideTableDetails: undefined
    },
    dataZoom: undefined,
    fillPoints: undefined,
    firstColumnName: undefined,
    innerRadius: undefined,
    borderRadius: undefined,
    textCenterGraph: undefined,
    descriptionChart: undefined,
    subtitleGauge: undefined,
    legend: undefined,
    legendPosition: undefined,
    legendVerticalPosition: undefined,
    bottomDataZoom: undefined,
    rendererOption: undefined,
    pointer: undefined,
    stacked: undefined,
    roseType: undefined,
    showFromToLegend: undefined
  };

  selectedValuesDataLabel: Array<string> = [];
  selectedValuesAxis: Array<string> = [];
  selectedValuesHeader: Array<string> = [];
  selectedValuesDataZoom: Array<string> = [];
  selectedValuesFillPoints: Array<string> = [];
  selectedRoseType: Array<string> = [];
  selectedFromToLegend: Array<string> = [];
  selectedPointer: Array<string> = [];
  selectedStacked: Array<string> = [];
  selectedValuesLegend: Array<string> = ['legend'];
  selectedLegendVerticalPosition: PoChartOptions['legendVerticalPosition'] = 'bottom';
  selectedLegendPosition: PoChartOptions['legendPosition'] = 'center';
  selectedLegendType: PoChartOptions['legendPositionlegendType'] = 'plain';
  selectedRendererOption: PoChartOptions['rendererOption'] = 'canvas';
  selectedShapeOption = 'polygon';
  helpRadar = 'Example: ["Bold", "Keen", "Calm", "Wise"]';
  helpGeneric = 'Example: ["Jan", "Feb", "Mar", "Apr"]';

  optionsAxis = [
    { value: 'showXAxis', label: 'showXAxis' },
    { value: 'showYAxis', label: 'showYAxis' },
    { value: 'showAxisDetails', label: 'showAxisDetails' }
  ];

  optionsHeader = [
    { value: 'hideTableDetails', label: 'hideTableDetails' },
    { value: 'hideExpand', label: 'hideExpand' },
    { value: 'hideExportCsv', label: 'hideExportCsv' },
    { value: 'hideExportImage', label: 'hideExportImage' }
  ];

  optionsDataZoom = [
    { value: 'dataZoom', label: 'dataZoom' },
    { value: 'bottomDataZoom', label: 'bottomDataZoom' }
  ];

  optionsLegendVerticalPosition = [
    { value: 'top', label: 'top' },
    { value: 'bottom', label: 'bottom' }
  ];

  optionsLegendPosition = [
    { value: 'left', label: 'left' },
    { value: 'center', label: 'center' },
    { value: 'right', label: 'right' }
  ];

  optionsLegendType = [
    { value: 'plain', label: 'plain' },
    { value: 'scroll', label: 'scroll' }
  ];

  optionsRendererOption = [
    { value: 'canvas', label: 'canvas' },
    { value: 'svg', label: 'svg' }
  ];

  optionsShapeOption = [
    { value: 'polygon', label: 'polygon' },
    { value: 'circle', label: 'circle' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Line', value: PoChartType.Line },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Bar', value: PoChartType.Bar },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Gauge', value: PoChartType.Gauge },
    { label: 'Radar', value: PoChartType.Radar }
  ];

  readonly labelTypeOptions: Array<PoSelectOption> = [
    { label: 'Number', value: PoChartLabelFormat.Number },
    { label: 'Currency', value: PoChartLabelFormat.Currency }
  ];

  changeDataLabelOptions() {
    this.dataLabel = {
      ...this.dataLabel,
      fixed: this.selectedValuesDataLabel.includes('fixed')
    };
  }

  changeAxisOptions() {
    const newAxis = {
      showXAxis: this.selectedValuesAxis.includes('showXAxis'),
      showYAxis: this.selectedValuesAxis.includes('showYAxis'),
      showAxisDetails: this.selectedValuesAxis.includes('showAxisDetails')
    };

    this.options = {
      ...this.options,
      axis: newAxis
    };
  }

  changeHeaderOptions() {
    const newHeader = {
      hideExpand: this.selectedValuesHeader.includes('hideExpand'),
      hideExportCsv: this.selectedValuesHeader.includes('hideExportCsv'),
      hideExportImage: this.selectedValuesHeader.includes('hideExportImage'),
      hideTableDetails: this.selectedValuesHeader.includes('hideTableDetails')
    };

    this.options = {
      ...this.options,
      header: newHeader
    };
  }

  changeDataZoomOptions() {
    this.options = {
      ...this.options,
      dataZoom: this.selectedValuesDataZoom.includes('dataZoom'),
      bottomDataZoom: this.selectedValuesDataZoom.includes('bottomDataZoom')
    };

    this.options = { ...this.options };
  }

  changeFillPointsOptions() {
    this.options = {
      ...this.options,
      fillPoints: this.selectedValuesFillPoints.includes('fillPoints')
    };
  }

  changeLegendOptions() {
    this.options = {
      ...this.options,
      legend: this.selectedValuesLegend.includes('legend')
    };
  }

  changeRoseTypeOptions() {
    this.options = {
      ...this.options,
      roseType: this.selectedRoseType.includes('roseType')
    };
  }

  changeShowFromToLegend() {
    this.options = {
      ...this.options,
      showFromToLegend: this.selectedFromToLegend.includes('showFromToLegend')
    };
  }

  changePointer() {
    this.options = {
      ...this.options,
      pointer: this.selectedPointer.includes('pointer')
    };
  }

  changeStacked() {
    this.options = {
      ...this.options,
      stacked: this.selectedStacked.includes('stacked')
    };
  }

  changeLegendVerticalPosition() {
    this.options = {
      ...this.options,
      legendVerticalPosition: this.selectedLegendVerticalPosition
    };
  }

  changeLegendPosition() {
    this.options = {
      ...this.options,
      legendPosition: this.selectedLegendPosition
    };
  }

  changeLegendType() {
    this.options = {
      ...this.options,
      legendType: this.selectedLegendType
    };
  }

  changeRendererOption() {
    this.options = {
      ...this.options,
      rendererOption: this.selectedRendererOption
    };
  }

  changeType(event) {
    if (event === PoChartType.Gauge) {
      this.isTypeGauge = true;
      this.changeSwitchGauge(true);
    }
    if (event === PoChartType.Radar) {
      this.isTypeRadar = true;
      this.changeSwitchRadar(true);
    }
  }

  changeSwitchGauge(event) {
    this.restore(true);
    this.disabledTooltip = event;
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Gauge;
      this.type = PoChartType.Gauge;
      this.isTypeRadar = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeSwitchRadar(event) {
    this.restore(true, true);
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Radar;
      this.type = PoChartType.Radar;
      this.isTypeGauge = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeValueGauge(event) {
    if (this.series?.length === 1 && !this.toGauge) {
      this.series[0].data = event;
      this.series = [...this.series];
    }
  }

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addIndicators() {
    if (!this.categories) {
      this.radarConfig = { indicator: [] };
      return;
    }

    const arr = this.convertToArray(this.categories);

    this.radarConfig = {
      indicator: arr.map(item => ({ name: item, min: this.min, max: this.max, color: this.colorIndicator })),
      shape: this.selectedShapeOption,
      splitArea: this.selectedSplitArea
    };
  }

  addData() {
    const type = this.serieType ?? this.type;

    let data;

    if (type === 'radar') {
      const arr = this.convertToArray(this.data);
      data = arr.map(v => Number(v));
      this.addIndicators();
    } else {
      data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    }

    const serie = {
      label: this.label,
      data,
      tooltip: this.tooltip,
      ...(this.color ? { color: this.color } : {}),
      type,
      stackGroupName: this.stackGroupName,
      from: this.fromGauge,
      to: this.toGauge,
      areaStyle: this.selectedAreaStyle ?? undefined
    };

    this.series = [...this.series, serie];

    this.label = undefined;
    this.color = undefined;
    this.data = undefined;
    this.tooltip = undefined;
    this.stackGroupName = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;

    if (!this.isTypeGauge) {
      this.type = undefined;
    }
  }

  isTypeGrid(): boolean {
    return (
      this.type === PoChartType.Line ||
      this.type === PoChartType.Area ||
      this.type === PoChartType.Column ||
      this.type === PoChartType.Bar ||
      this.type === PoChartType.Radar
    );
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore(fromGauge = false, keepRadar = false) {
    this.color = undefined;
    this.data = undefined;
    this.label = undefined;
    this.tooltip = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;
    this.valueGauge = undefined;
    this.allCategories = [];
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.disabledTooltip = false;
    this.disabledType = false;

    this.dataLabel = { fixed: false };

    this.options = {
      ...this.options,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined,
        labelType: undefined,
        paddingBottom: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
        rotateLegend: undefined,
        showXAxis: undefined,
        showYAxis: undefined,
        showAxisDetails: undefined
      },
      header: {
        hideExpand: undefined,
        hideExportCsv: undefined,
        hideExportImage: undefined,
        hideTableDetails: undefined
      },
      dataZoom: undefined,
      fillPoints: undefined,
      firstColumnName: undefined,
      innerRadius: undefined,
      borderRadius: undefined,
      textCenterGraph: undefined,
      descriptionChart: undefined,
      subtitleGauge: undefined,
      legend: undefined,
      legendPosition: undefined,
      legendVerticalPosition: undefined,
      bottomDataZoom: undefined,
      rendererOption: undefined,
      pointer: undefined,
      stacked: undefined,
      roseType: undefined,
      showFromToLegend: undefined
    };

    this.selectedValuesDataLabel = [];
    this.selectedValuesAxis = [];
    this.selectedValuesHeader = [];
    this.selectedValuesDataZoom = [];
    this.selectedValuesFillPoints = [];
    this.selectedValuesLegend = [];
    this.selectedRoseType = [];

    if (!fromGauge) {
      this.selectedFromToLegend = [];
      this.selectedPointer = [];
      this.isTypeGauge = false;
    }

    if (!keepRadar) {
      this.isTypeRadar = false;
      this.categories = undefined;
      this.radarConfig = [];
    }
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-chart-labs"),ng(),Ul(23,"hr")),d&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,pt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,_e],encapsulation:2})}return r})();var we=(()=>{class r{poAlert=f(vle);participationByCountryInWorldExportsType=jse.Line;evolutionOfCoffeeAndSomeCompetitorsType=jse.Column;coffeConsumingChartType=jse.Donut;consumptionPerCapitaType=jse.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:jse.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:jse.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:jse.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:jse.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"},{label:"Germany",data:5.2,tooltip:"Germany (Europe)"},{label:"Denmark",data:5.1,tooltip:"Denmark (Europe)"},{label:"Sweden",data:4.9,tooltip:"Sweden (Europe)"},{label:"Switzerland",data:4.8,tooltip:"Switzerland (Europe)"},{label:"Belgium",data:4.6,tooltip:"Belgium (Europe)"},{label:"Canada",data:4.5,tooltip:"Canada (North America)"},{label:"Brazil",data:4.3,tooltip:"Brazil (South America)"},{label:"Italy",data:4.2,tooltip:"Italy (Europe)"},{label:"France",data:4.1,tooltip:"France (Europe)"},{label:"USA",data:4,tooltip:"USA (North America)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10",tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:"Vietnam",data:[15,17,23,19,22,18],tooltip:"Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%"},{label:"Colombia",data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:jse.Column},{label:"2017",data:[93,52,18],type:jse.Column},{label:"2020",data:[95,21,-17],type:jse.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:jse.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:true,borderRadius:8};coffeeConsumptionOptions={legendType:"scroll"};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:$se.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:true};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:$se.Number},dataZoom:true};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:true}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,"_blank");}showMeTheDates(l){this.poAlert.alert({title:"Statistic",message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}});}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:false,features:[we$1([vle])],decls:28,vars:22,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 15 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-options","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(d,i){d&1&&(wl(0,"div",0)(1,"div",1)(2,"div",0),Ul(3,"po-chart",2)(4,"po-chart",3),ng()(),wl(5,"div",1),Ul(6,"po-chart",4),ng(),wl(7,"div",5)(8,"po-chart",6),ut("p-series-click",function(m){return i.searchMore(m)}),ng(),wl(9,"po-chart",7),ut("p-series-click",function(m){return i.showMeTheDates(m)}),ng()(),wl(10,"div",0),Ul(11,"po-chart",8),wl(12,"div",9)(13,"po-widget",10)(14,"div",11),Ux(15,"66 billion"),ng(),wl(16,"div",12),Ux(17,"cups of coffee are consumed per year in U.S."),ng()(),wl(18,"po-widget",10)(19,"div",11),Ux(20,"2nd most"),ng(),wl(21,"div",12),Ux(22,"traded commodity in the world second to Oil."),ng()()()()(),wl(23,"div",0)(24,"po-container",13)(25,"div",14),Ux(26,"Top 10 Largest Coffee Chains in the World"),ng(),Ul(27,"po-table",15),ng()()),d&2&&(Pp(3),YE("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),Pp(),YE("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),Pp(2),YE("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),Pp(2),YE("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),Pp(),YE("p-series",i.coffeeConsumption)("p-options",i.coffeeConsumptionOptions)("p-type",i.coffeConsumingChartType),Pp(2),YE("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),Pp(16),YE("p-items",i.items)("p-hide-table-search",false));},dependencies:[ep,uo,ty,IR],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r}),Le=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Chart - Coffee Ranking"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-options]="coffeeProductionOptions"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 15 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-options]="coffeeConsumptionOptions"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService, PoChartLabelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  private poAlert = inject(PoDialogService);

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' },
    { label: 'Germany', data: 5.2, tooltip: 'Germany (Europe)' },
    { label: 'Denmark', data: 5.1, tooltip: 'Denmark (Europe)' },
    { label: 'Sweden', data: 4.9, tooltip: 'Sweden (Europe)' },
    { label: 'Switzerland', data: 4.8, tooltip: 'Switzerland (Europe)' },
    { label: 'Belgium', data: 4.6, tooltip: 'Belgium (Europe)' },
    { label: 'Canada', data: 4.5, tooltip: 'Canada (North America)' },
    { label: 'Brazil', data: 4.3, tooltip: 'Brazil (South America)' },
    { label: 'Italy', data: 4.2, tooltip: 'Italy (Europe)' },
    { label: 'France', data: 4.1, tooltip: 'France (Europe)' },
    { label: 'USA', data: 4.0, tooltip: 'USA (North America)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: [35, 32, 25, 29, 33, 33],
      color: 'color-10',
      tooltip: params =>
        \`Pa\xEDs: \${params.seriesName}<br><b>Ano:</b> \${params.name}<br><b>Exporta\xE7\xF5es:</b> \${params.value}%\`
    },
    {
      label: 'Vietnam',
      data: [15, 17, 23, 19, 22, 18],
      tooltip: 'Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%'
    },
    {
      label: 'Colombia',
      data: [8, 7, 6, 9, 10, 11],
      tooltip: 'Pa\xEDs: {seriesName}\\nAno: {name}\\nParticipa\xE7\xE3o: {value}%'
    },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 1796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  coffeeProductionOptions: PoChartOptions = {
    roseType: true,
    borderRadius: 8
  };

  coffeeConsumptionOptions: PoChartOptions = {
    legendType: 'scroll'
  };

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2,
      labelType: PoChartLabelFormat.Number,
      rotateLegend: 45
    },
    legendVerticalPosition: 'top'
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    },
    fillPoints: true
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5,
      labelType: PoChartLabelFormat.Number
    },
    dataZoom: true
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
      showXAxis: true
    }
  };

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-chart-coffee-ranking"),ng(),Ul(23,"hr")),d&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ct,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,we],encapsulation:2})}return r})();var Me=(()=>{class r{typeBar=jse.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:true};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked"]],standalone:false,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(d,i){d&1&&(wl(0,"po-container")(1,"div",0),Ux(2,"Energy and Climate Analysis"),ng(),wl(3,"div",1),Ul(4,"po-chart",2)(5,"po-chart",3),ng()()),d&2&&(Pp(4),YE("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),Pp(),YE("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar));},dependencies:[ep,uo],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r}),ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Chart - Stacked"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
  <div class="po-font-title po-mb-3">Energy and Climate Analysis</div>
  <div class="po-row">
    <po-chart
      class="po-lg-6"
      p-title="Average Temperature by Region"
      [p-height]="500"
      [p-options]="optionsColumn"
      [p-categories]="categoriesColumn"
      [p-series]="seriesColumn"
    >
    </po-chart>

    <po-chart
      class="po-lg-6"
      p-title="Energy Consumption by Region"
      [p-type]="typeBar"
      [p-height]="500"
      [p-options]="optionsBar"
      [p-categories]="categoriesBar"
      [p-series]="seriesBar"
    >
    </po-chart>
  </div>
</po-container>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-stacked',
  templateUrl: './sample-po-chart-stacked.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartStackedComponent {
  typeBar = PoChartType.Bar;

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      gridLines: 7
    }
  };

  categoriesColumn: Array<string> = ['North Region', 'Central Region', 'South Region'];

  seriesColumn: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [51, 40, 42], stackGroupName: 'group1' },
    { label: 'Year 2017', data: [53, 52, 18] },
    { label: 'Year 2020', data: [55, 21, -17], stackGroupName: 'group1' },
    { label: 'Year 2023', data: [35, 27, 23], stackGroupName: 'group2' },
    { label: 'Year 2026', data: [45, 34, 17], stackGroupName: 'group2' },
    { label: 'Year 2029', data: [23, 63, 56], stackGroupName: 'group1' }
  ];

  optionsBar: PoChartOptions = {
    stacked: true
  };

  categoriesBar: Array<string> = [
    'North Region',
    'Central Region',
    'South Region',
    'Southeast Region',
    'Northeast Region'
  ];

  seriesBar: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [199, 340, 247, 236, 222] },
    { label: 'Year 2017', data: [221, 252, 225, 241, 225] },
    { label: 'Year 2020', data: [229, 213, 196, 212, 237] },
    { label: 'Year 2023', data: [240, 237, 230, 223, 231] },
    { label: 'Year 2026', data: [235, 270, 239, 255, 242] }
  ];
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-chart-stacked"),ng(),Ul(23,"hr")),d&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ht,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Me],encapsulation:2})}return r})();var De=(()=>{class r{type=jse.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary"]],standalone:false,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(d,i){d&1&&(wl(0,"po-container")(1,"div",0),Ux(2,"Sales Performance"),ng(),wl(3,"div",1)(4,"div",2),Ul(5,"po-chart",3),ng(),wl(6,"div",2),Ul(7,"po-chart",4),ng()()()),d&2&&(Pp(5),YE("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),Pp(2),YE("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges));},dependencies:[ep,uo],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),Ve=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Chart - Summary"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-lg-6">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
    <div class="po-lg-6">
      <po-chart
        p-title="Sales performance"
        [p-type]="type"
        [p-options]="optionsRange"
        [p-value-gauge-multiple]="50"
        [p-series]="salesRanges"
      ></po-chart>
    </div>
  </div>
</po-container>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-summary',
  templateUrl: './sample-po-chart-summary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartSummaryComponent {
  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-chart-summary"),ng(),Ul(23,"hr")),d&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,bt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,De],encapsulation:2})}return r})();var Ae=(()=>{class r{participationByCountryInWorldExportsType=jse.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:true};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:false,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(d,i){d&1&&(wl(0,"div",0),Ul(1,"po-chart",1),ng()),d&2&&(Pp(),YE("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel));},dependencies:[ep],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r}),Re=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Chart - World Exports"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-chart-world-exports"),ng(),Ul(23,"hr")),d&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ft,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ae],encapsulation:2})}return r})();var Oe=(()=>{class r{radarConfig={indicator:[{name:"Frontend Development",max:100},{name:"Backend Development",max:100},{name:"Database Design",max:100},{name:"Cloud & DevOps",max:100},{name:"Testing & Quality",max:100},{name:"System Architecture",max:100}],splitArea:true,shape:"circle"};radarConfigMovies={indicator:[{name:"Storytelling",max:100},{name:"Characters",max:100},{name:"Visual Effects",max:100},{name:"Soundtrack",max:100},{name:"Pacing",max:100},{name:"Rewatchability",max:100}],splitArea:true};type=jse.Radar;series=[{label:"Team Alpha",data:[82,50,78,70,88,81]},{label:"Team Beta",data:[65,83,72,89,60,74]},{label:"Team Delta",data:[45,21,33,65,24,58]},{label:"Team Omega",data:[60,49,19,58,94,59]}];seriesMovies=[{label:"Sci-Fi",data:[60,53,45,58,42,55]},{label:"Fantasy",data:[53,80,66,71,75,88]},{label:"Drama",data:[92,31,98,60,88,72]},{label:"Thriller",data:[44,56,75,84,90,80]}];radarOptions={areaStyle:true};static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill"]],standalone:false,decls:3,vars:6,consts:[[1,"po-row"],["p-title","Technology Skill Assessment",1,"po-md-6",3,"p-categories","p-type","p-series"],["p-title","Genre Popularity","p-type","radar",1,"po-md-6",3,"p-categories","p-series","p-options"]],template:function(d,i){d&1&&(wl(0,"div",0),Ul(1,"po-chart",1)(2,"po-chart",2),ng()),d&2&&(Pp(),YE("p-categories",i.radarConfig)("p-type",i.type)("p-series",i.series),Pp(),YE("p-categories",i.radarConfigMovies)("p-series",i.seriesMovies)("p-options",i.radarOptions));},dependencies:[ep],encapsulation:2,changeDetection:1})}return r})();var _t=r=>({"docs-sample-code-tabs":r}),Ge=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Chart - Radar"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-chart
    class="po-md-6"
    p-title="Technology Skill Assessment"
    [p-categories]="radarConfig"
    [p-type]="type"
    [p-series]="series"
  >
  </po-chart>

  <po-chart
    class="po-md-6"
    p-title="Genre Popularity"
    p-type="radar"
    [p-categories]="radarConfigMovies"
    [p-series]="seriesMovies"
    [p-options]="radarOptions"
  >
  </po-chart>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoChartOptions, PoChartType } from '@po-ui/ng-components';
import { PoChartRadarOptions } from '@po-ui/ng-components/lib/components/po-chart/interfaces/po-chart-radar-options.interface';

@Component({
  selector: 'sample-po-chart-technology-skill',
  templateUrl: './sample-po-chart-technology-skill.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartTechnologySkillComponent {
  radarConfig: PoChartRadarOptions = {
    indicator: [
      { name: 'Frontend Development', max: 100 },
      { name: 'Backend Development', max: 100 },
      { name: 'Database Design', max: 100 },
      { name: 'Cloud & DevOps', max: 100 },
      { name: 'Testing & Quality', max: 100 },
      { name: 'System Architecture', max: 100 }
    ],
    splitArea: true,
    shape: 'circle'
  };

  radarConfigMovies: PoChartRadarOptions = {
    indicator: [
      { name: 'Storytelling', max: 100 },
      { name: 'Characters', max: 100 },
      { name: 'Visual Effects', max: 100 },
      { name: 'Soundtrack', max: 100 },
      { name: 'Pacing', max: 100 },
      { name: 'Rewatchability', max: 100 }
    ],
    splitArea: true
  };

  type = PoChartType.Radar;

  series = [
    {
      label: 'Team Alpha',
      data: [82, 50, 78, 70, 88, 81]
    },
    {
      label: 'Team Beta',
      data: [65, 83, 72, 89, 60, 74]
    },
    {
      label: 'Team Delta',
      data: [45, 21, 33, 65, 24, 58]
    },
    {
      label: 'Team Omega',
      data: [60, 49, 19, 58, 94, 59]
    }
  ];

  seriesMovies = [
    {
      label: 'Sci-Fi',
      data: [60, 53, 45, 58, 42, 55]
    },
    {
      label: 'Fantasy',
      data: [53, 80, 66, 71, 75, 88]
    },
    {
      label: 'Drama',
      data: [92, 31, 98, 60, 88, 72]
    },
    {
      label: 'Thriller',
      data: [44, 56, 75, 84, 90, 80]
    }
  ];

  radarOptions: PoChartOptions = {
    areaStyle: true
  };
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-chart-technology-skill"),ng(),Ul(23,"hr")),d&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,_t,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Oe],encapsulation:2})}return r})();var Be=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-doc"]],standalone:false,decls:2833,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","PoChartRadarOptions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'plain'"],["pan","",1,"docs-api-property-type","'scroll'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],["pan","",1,"docs-api-property-type","Array<PoChartIndicatorOptions>"],["pan","",1,"docs-api-property-type","'polygon'"],["pan","",1,"docs-api-property-type","'circle'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["pan","",1,"docs-api-property-type","((params:","any)","=>","string)"],[1,"language-ts"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(d,i){d&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoChartModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-chart"),ng(),Ux(9,"."),ng()(),wl(10,"h3",3),Ux(11,"Componente"),ng(),wl(12,"h4",4)(13,"code",5),Ux(14,"PoChartComponent"),ng()(),wl(15,"div",2)(16,"p"),Ux(17,"O "),wl(18,"code"),Ux(19,"po-chart"),ng(),Ux(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),ng(),wl(21,"p"),Ux(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),ng(),wl(23,"p"),Ux(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),ng(),wl(25,"p"),Ux(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),wl(27,"em"),Ux(28,"mouse"),ng(),Ux(29," sobre o elemento."),ng(),wl(30,"h4"),Ux(31,"Guia de uso para Gr\xE1ficos"),ng(),wl(32,"blockquote")(33,"p"),Ux(34,"Veja nosso "),wl(35,"a",6),Ux(36,"guia de uso para gr\xE1ficos"),ng(),Ux(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),ng()(),wl(38,"h4"),Ux(39,"Tokens customiz\xE1veis"),ng(),wl(40,"p"),Ux(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(42,"blockquote")(43,"p"),Ux(44,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(45,"a",7),Ux(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(47,"."),ng()(),wl(48,"table")(49,"thead")(50,"tr")(51,"th"),Ux(52,"Propriedade"),ng(),wl(53,"th"),Ux(54,"Descri\xE7\xE3o"),ng(),wl(55,"th"),Ux(56,"Valor Padr\xE3o"),ng()()(),wl(57,"tbody")(58,"tr")(59,"td")(60,"strong"),Ux(61,"Chart (po-chart)"),ng()(),Ul(62,"td")(63,"td"),ng(),wl(64,"tr")(65,"td")(66,"code"),Ux(67,"--background-color-grid"),ng()(),wl(68,"td"),Ux(69,"Cor de background dos gr\xE1ficos"),ng(),wl(70,"td")(71,"code"),Ux(72,"var(--color-neutral-light-00)"),ng()()(),wl(73,"tr")(74,"td")(75,"code"),Ux(76,"--color-description-chart"),ng()(),wl(77,"td"),Ux(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),ng(),wl(79,"td")(80,"code"),Ux(81,"var(--color-neutral-dark-70)"),ng()()(),wl(82,"tr")(83,"td")(84,"code"),Ux(85,"--font-family-description-chart"),ng()(),wl(86,"td"),Ux(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),ng(),wl(88,"td")(89,"code"),Ux(90,"var(--font-family-theme)"),ng()()(),wl(91,"tr")(92,"td")(93,"code"),Ux(94,"--font-size-description-chart"),ng()(),wl(95,"td"),Ux(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),ng(),wl(97,"td")(98,"code"),Ux(99,"var(--font-size-sm)"),ng()()(),wl(100,"tr")(101,"td")(102,"code"),Ux(103,"--font-weight-description-chart"),ng()(),wl(104,"td"),Ux(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),ng(),wl(106,"td")(107,"code"),Ux(108,"var(--font-weight-normal)"),ng()()(),wl(109,"tr")(110,"td")(111,"strong"),Ux(112,"Header (po-chart .po-chart-header )"),ng()(),Ul(113,"td")(114,"td"),ng(),wl(115,"tr")(116,"td")(117,"code"),Ux(118,"--background-color"),ng()(),wl(119,"td"),Ux(120,"Cor de background do cabe\xE7alho"),ng(),wl(121,"td")(122,"code"),Ux(123,"var(--color-neutral-light-00)"),ng()()(),wl(124,"tr")(125,"td")(126,"code"),Ux(127,"--color"),ng()(),wl(128,"td"),Ux(129,"Cor da fonte do cabe\xE7alho"),ng(),wl(130,"td")(131,"code"),Ux(132,"var(--color-neutral-dark-70)"),ng()()(),wl(133,"tr")(134,"td")(135,"code"),Ux(136,"--font-family"),ng()(),wl(137,"td"),Ux(138,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(139,"td")(140,"code"),Ux(141,"var(--font-family-theme)"),ng()()(),wl(142,"tr")(143,"td")(144,"code"),Ux(145,"--font-size-title"),ng()(),wl(146,"td"),Ux(147,"Tamanho da fonte"),ng(),wl(148,"td")(149,"code"),Ux(150,"var(--font-size-default)"),ng()()(),wl(151,"tr")(152,"td")(153,"code"),Ux(154,"--font-size-icons"),ng()(),wl(155,"td"),Ux(156,"Tamanho dos \xEDcones"),ng(),wl(157,"td")(158,"code"),Ux(159,"var(--font-size-md)"),ng()()(),wl(160,"tr")(161,"td")(162,"code"),Ux(163,"--font-weight"),ng()(),wl(164,"td"),Ux(165,"Peso da fonte"),ng(),wl(166,"td")(167,"code"),Ux(168,"var(--font-weight-bold)"),ng()()(),wl(169,"tr")(170,"td")(171,"strong"),Ux(172,"Chart (po-chart .po-chart)"),ng()(),Ul(173,"td")(174,"td"),ng(),wl(175,"tr")(176,"td")(177,"code"),Ux(178,"--color-grid"),ng()(),wl(179,"td"),Ux(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),ng(),wl(181,"td")(182,"code"),Ux(183,"var(--color-neutral-light-20)"),ng()()(),wl(184,"tr")(185,"td")(186,"code"),Ux(187,"--font-family-grid"),ng()(),wl(188,"td"),Ux(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),ng(),wl(190,"td")(191,"code"),Ux(192,"var(--font-family-theme)"),ng()()(),wl(193,"tr")(194,"td")(195,"code"),Ux(196,"--font-size-grid"),ng()(),wl(197,"td"),Ux(198,"Tamanho da fonte usada nos valores dos eixos"),ng(),wl(199,"td")(200,"code"),Ux(201,"var(--font-size-xs)"),ng()()(),wl(202,"tr")(203,"td")(204,"code"),Ux(205,"--font-weight-grid"),ng()(),wl(206,"td"),Ux(207,"Peso da fonte usada nos valores dos eixos"),ng(),wl(208,"td")(209,"code"),Ux(210,"var(--font-weight-normal)"),ng()()(),wl(211,"tr")(212,"td")(213,"code"),Ux(214,"--color-legend"),ng()(),wl(215,"td"),Ux(216,"Cor da fonte da legenda"),ng(),wl(217,"td")(218,"code"),Ux(219,"var(--color-neutral-dark-70)"),ng()()(),wl(220,"tr")(221,"td")(222,"code"),Ux(223,"--color-legend-scroll-icon-active"),ng()(),wl(224,"td"),Ux(225,"Cor do \xEDcone de scroll da legenda no estado ativo, pro tipo "),wl(226,"code"),Ux(227,"scroll"),ng()(),wl(228,"td")(229,"code"),Ux(230,"var(--color-action-default)"),ng()()(),wl(231,"tr")(232,"td")(233,"code"),Ux(234,"--color-legend-scroll-icon-inactive"),ng()(),wl(235,"td"),Ux(236,"Cor do \xEDcone de scroll da legenda no estado inativo, pro tipo "),wl(237,"code"),Ux(238,"scroll"),ng()(),wl(239,"td")(240,"code"),Ux(241,"var(--color-action-disabled)"),ng()()(),wl(242,"tr")(243,"td")(244,"code"),Ux(245,"--border-radius-bar"),ng()(),wl(246,"td"),Ux(247,"Tamanho da borda nos graficos "),wl(248,"code"),Ux(249,"Bar"),ng(),Ux(250," e "),wl(251,"code"),Ux(252,"Column"),ng()(),wl(253,"td")(254,"code"),Ux(255,"var(--border-radius-none)"),ng()()(),wl(256,"tr")(257,"td")(258,"code"),Ux(259,"--border-color"),ng()(),wl(260,"td"),Ux(261,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),wl(262,"code"),Ux(263,"Donut"),ng(),Ux(264," e "),wl(265,"code"),Ux(266,"Pie"),ng()(),wl(267,"td")(268,"code"),Ux(269,"var(--color-neutral-light-00)"),ng()()(),wl(270,"tr")(271,"td")(272,"code"),Ux(273,"--color-hightlight-value"),ng()(),wl(274,"td"),Ux(275,"Cor do valor de destaque nos Gr\xE1ficos "),wl(276,"code"),Ux(277,"Donut"),ng(),Ux(278," e "),wl(279,"code"),Ux(280,"Gauge"),ng()(),wl(281,"td")(282,"code"),Ux(283,"var(--color-neutral-dark-70)"),ng()()(),wl(284,"tr")(285,"td")(286,"code"),Ux(287,"--font-family-hightlight-value"),ng()(),wl(288,"td"),Ux(289,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),wl(290,"code"),Ux(291,"Donut"),ng(),Ux(292," e "),wl(293,"code"),Ux(294,"Gauge"),ng()(),wl(295,"td")(296,"code"),Ux(297,"var(--font-family-theme)"),ng()()(),wl(298,"tr")(299,"td")(300,"code"),Ux(301,"--font-weight-hightlight-value"),ng()(),wl(302,"td"),Ux(303,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),wl(304,"code"),Ux(305,"Donut"),ng(),Ux(306," e "),wl(307,"code"),Ux(308,"Gauge"),ng()(),wl(309,"td")(310,"code"),Ux(311,"var(--font-weight-bold)"),ng()()(),wl(312,"tr")(313,"td")(314,"code"),Ux(315,"--color-base-gauge"),ng()(),wl(316,"td"),Ux(317,"Cor da base do gr\xE1fico "),wl(318,"code"),Ux(319,"Gauge"),ng()(),wl(320,"td")(321,"code"),Ux(322,"var(--color-neutral-light-20)"),ng()()(),wl(323,"tr")(324,"td")(325,"code"),Ux(326,"--color-gauge-pointer-color"),ng()(),wl(327,"td"),Ux(328,"Cor do ponteiro do gr\xE1fico "),wl(329,"code"),Ux(330,"Gauge"),ng()(),wl(331,"td")(332,"code"),Ux(333,"var(--color-neutral-dark-70)"),ng()()(),wl(334,"tr")(335,"td")(336,"code"),Ux(337,"--color-chart-line-point-fill"),ng()(),wl(338,"td"),Ux(339,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),wl(340,"code"),Ux(341,"Line"),ng(),Ux(342," e "),wl(343,"code"),Ux(344,"Area"),ng()(),wl(345,"td")(346,"code"),Ux(347,"var(--color-neutral-light-00)"),ng()()(),wl(348,"tr")(349,"td")(350,"code"),Ux(351,"--border-color-radar"),ng()(),wl(352,"td"),Ux(353,"Cor do eixo da grid do gr\xE1fico "),wl(354,"code"),Ux(355,"Radar"),ng()(),wl(356,"td")(357,"code"),Ux(358,"var(--color-neutral-light-30)"),ng()()(),wl(359,"tr")(360,"td")(361,"code"),Ux(362,"--color-background-zebra"),ng()(),wl(363,"td"),Ux(364,"Cor das \xE1reas alternadas (efeito zebrado) da grid do gr\xE1fico "),wl(365,"code"),Ux(366,"Radar"),ng()(),wl(367,"td")(368,"code"),Ux(369,"var(--color-neutral-light-10)"),ng()()(),wl(370,"tr")(371,"td")(372,"code"),Ux(373,"--color-background-line"),ng()(),wl(374,"td"),Ux(375,"Cor das \xE1reas entre as faixas zebradas da grade do "),wl(376,"code"),Ux(377,"Radar"),ng()(),wl(378,"td")(379,"code"),Ux(380,"none"),ng()()(),wl(381,"tr")(382,"td")(383,"strong"),Ux(384,"Wrapper (.po-chart-container-gauge)"),ng()(),Ul(385,"td")(386,"td"),ng(),wl(387,"tr")(388,"td")(389,"code"),Ux(390,"--background-color-container-gauge"),ng()(),wl(391,"td"),Ux(392,"Cor de background do container do gauge"),ng(),wl(393,"td")(394,"code"),Ux(395,"var(--color-neutral-light-00)"),ng()()()()()(),wl(396,"div",8)(397,"h4",9),Ux(398,"Seletor"),ng(),wl(399,"pre",10),Ux(400,`<po-chart
    p-categories="Array<string> | PoChartRadarOptions"
    p-custom-actions="Array<PoPopupAction>"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-literals="PoChartLiterals"
    p-options="PoChartOptions"
    p-series="Array<PoChartSerie>"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType"
    p-value-gauge-multiple="number" >
</po-chart>
`),ng()(),wl(401,"h4",11),Ux(402,"Propriedades"),ng(),wl(403,"table",12)(404,"tr",13)(405,"th",14),Ux(406,"Nome"),ng(),wl(407,"th",14),Ux(408,"Tipo"),ng(),wl(409,"th",14),Ux(410,"Padr\xE3o"),ng(),wl(411,"th",14),Ux(412,"Descri\xE7\xE3o"),ng()(),wl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Ux(417," p-categories"),Ul(418,"br"),ng()()(),wl(419,"td",19)(420,"code",20),Ux(421,"Array<string> "),ng(),wl(422,"code",21),Ux(423," PoChartRadarOptions"),ng()(),wl(424,"td",22),Ux(425,"-"),ng(),wl(426,"td",23)(427,"em")(428,"strong"),Ux(429,"(opcional)"),ng()(),wl(430,"p"),Ux(431,"Define os valores utilizados na constru\xE7\xE3o das categorias do gr\xE1fico."),ng(),wl(432,"p"),Ux(433,"Para gr\xE1ficos dos tipos "),wl(434,"em"),Ux(435,"bar"),ng(),Ux(436,", "),wl(437,"em"),Ux(438,"area"),ng(),Ux(439,", "),wl(440,"em"),Ux(441,"column"),ng(),Ux(442," e "),wl(443,"em"),Ux(444,"line"),ng(),Ux(445,", representa os nomes das categorias exibidas no eixo."),ng(),wl(446,"p"),Ux(447,"Para gr\xE1ficos do tipo "),wl(448,"em"),Ux(449,"radar"),ng(),Ux(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),wl(451,"code"),Ux(452,"Radar"),ng(),Ux(453,"."),ng(),wl(454,"blockquote")(455,"p"),Ux(456,"Caso nenhum valor seja informado, ser\xE1 utilizado um h\xEDfen como categoria correspondente para cada s\xE9rie."),ng()(),wl(457,"blockquote")(458,"p"),Ux(459,"Gr\xE1ficos do tipo bar dimensionam sua \xE1rea considerando a largura do maior texto da categoria, sendo recomend\xE1vel utilizar r\xF3tulos curtos para facilitar a leitura."),ng()()()(),wl(460,"tr",15)(461,"td",16)(462,"div",17)(463,"span",18),Ux(464," p-custom-actions"),Ul(465,"br"),ng()()(),wl(466,"td",19)(467,"code",24),Ux(468,"Array<PoPopupAction>"),ng()(),wl(469,"td",22),Ux(470,"-"),ng(),wl(471,"td",23)(472,"em")(473,"strong"),Ux(474,"(opcional)"),ng()(),wl(475,"p"),Ux(476,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),ng()()(),wl(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),Ux(481," p-data-label"),Ul(482,"br"),ng()()(),wl(483,"td",19)(484,"code",25),Ux(485,"PoChartDataLabel"),ng()(),wl(486,"td",22),Ux(487,"-"),ng(),wl(488,"td",23)(489,"em")(490,"strong"),Ux(491,"(opcional)"),ng()(),wl(492,"p"),Ux(493,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),ng(),wl(494,"p"),Ux(495,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),ng(),wl(496,"ul")(497,"li"),Ux(498,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),ng(),wl(499,"li"),Ux(500,"O "),wl(501,"em"),Ux(502,"tooltip"),ng(),Ux(503," n\xE3o ser\xE1 exibido."),ng(),wl(504,"li"),Ux(505,"Os marcadores ("),wl(506,"em"),Ux(507,"bullets"),ng(),Ux(508,") ter\xE3o seu estilo ajustado."),ng(),wl(509,"li"),Ux(510,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),ng()(),wl(511,"blockquote")(512,"p"),Ux(513,"Dispon\xEDvel para gr\xE1ficos do tipo "),wl(514,"code"),Ux(515,"line"),ng(),Ux(516," e "),wl(517,"code"),Ux(518,"radar"),ng(),Ux(519,"."),ng()(),wl(520,"h4"),Ux(521,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(522,"pre")(523,"code",26),Ux(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),ng()()()(),wl(525,"tr",15)(526,"td",16)(527,"div",17)(528,"span",18),Ux(529," p-height"),Ul(530,"br"),ng()()(),wl(531,"td",19)(532,"code",27),Ux(533,"number"),ng()(),wl(534,"td",22)(535,"p")(536,"code"),Ux(537,"400"),ng()()(),wl(538,"td",23)(539,"em")(540,"strong"),Ux(541,"(opcional)"),ng()(),wl(542,"p"),Ux(543,"Define a altura do gr\xE1fico em px."),ng(),wl(544,"blockquote")(545,"p"),Ux(546,"No caso do tipo "),wl(547,"code"),Ux(548,"Gauge"),ng(),Ux(549,", o valor padr\xE3o \xE9 "),wl(550,"code"),Ux(551,"300"),ng(),Ux(552," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),ng()()()(),wl(553,"tr",15)(554,"td",16)(555,"div",17)(556,"span",18),Ux(557," p-literals"),Ul(558,"br"),ng()()(),wl(559,"td",19)(560,"code",28),Ux(561,"PoChartLiterals"),ng()(),wl(562,"td",22),Ux(563,"-"),ng(),wl(564,"td",23)(565,"em")(566,"strong"),Ux(567,"(opcional)"),ng()(),wl(568,"p"),Ux(569,"Objeto com as literais usadas no "),wl(570,"code"),Ux(571,"po-chart"),ng(),Ux(572,"."),ng(),wl(573,"p"),Ux(574,"Para utilizar basta passar a literal que deseja customizar:"),ng(),wl(575,"pre")(576,"code"),Ux(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),ng()(),wl(578,"p"),Ux(579,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),ng(),wl(580,"pre")(581,"code"),Ux(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),ng()(),wl(583,"blockquote")(584,"p"),Ux(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(586,"a",29)(587,"code"),Ux(588,"PoI18nService"),ng()(),Ux(589," ou do browser."),ng()()()(),wl(590,"tr",15)(591,"td",16)(592,"div",17)(593,"span",18),Ux(594," p-options"),Ul(595,"br"),ng()()(),wl(596,"td",19)(597,"code",30),Ux(598,"PoChartOptions"),ng()(),wl(599,"td",22),Ux(600,"-"),ng(),wl(601,"td",23)(602,"em")(603,"strong"),Ux(604,"(opcional)"),ng()(),wl(605,"p"),Ux(606,"Objeto com as configura\xE7\xF5es usadas no "),wl(607,"code"),Ux(608,"po-chart"),ng(),Ux(609,"."),ng(),wl(610,"p"),Ux(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),wl(612,"em"),Ux(613,"axis"),ng(),Ux(614,") para os gr\xE1ficos dos tipos "),wl(615,"code"),Ux(616,"area"),ng(),Ux(617,", "),wl(618,"code"),Ux(619,"line"),ng(),Ux(620,", "),wl(621,"code"),Ux(622,"column"),ng(),Ux(623,", "),wl(624,"code"),Ux(625,"bar"),ng(),Ux(626," e "),wl(627,"code"),Ux(628,"radar"),ng(),Ux(629," da seguinte forma:"),ng(),wl(630,"pre")(631,"code"),Ux(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),ng()()()(),wl(633,"tr",15)(634,"td",16)(635,"div",17)(636,"span",18),Ux(637," p-series"),Ul(638,"br"),ng()()(),wl(639,"td",19)(640,"code",31),Ux(641,"Array<PoChartSerie>"),ng()(),wl(642,"td",22),Ux(643,"-"),ng(),wl(644,"td",23)(645,"p"),Ux(646,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),ng()()(),wl(647,"tr",15)(648,"td",16)(649,"div",32)(650,"span",33),Ux(651," (p-series-click)"),Ul(652,"br"),ng()()(),wl(653,"td",19)(654,"code",34),Ux(655,"EventEmitter"),ng()(),wl(656,"td",22),Ux(657,"-"),ng(),wl(658,"td",23)(659,"em")(660,"strong"),Ux(661,"(opcional)"),ng()(),wl(662,"p"),Ux(663,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),ng(),wl(664,"p"),Ux(665,"O evento emitir\xE1 o seguinte par\xE2metro:"),ng(),wl(666,"ul")(667,"li")(668,"em"),Ux(669,"donut"),ng(),Ux(670," e "),wl(671,"em"),Ux(672,"pie"),ng(),Ux(673,": um objeto contendo a categoria e valor da s\xE9rie."),ng(),wl(674,"li")(675,"em"),Ux(676,"radar"),ng(),Ux(677,": um objeto contendo o nome da s\xE9rie e os valores."),ng(),wl(678,"li")(679,"em"),Ux(680,"area"),ng(),Ux(681,", "),wl(682,"em"),Ux(683,"line"),ng(),Ux(684,", "),wl(685,"em"),Ux(686,"column"),ng(),Ux(687," e "),wl(688,"em"),Ux(689,"bar"),ng(),Ux(690,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),ng()()()(),wl(691,"tr",15)(692,"td",16)(693,"div",32)(694,"span",33),Ux(695," (p-series-hover)"),Ul(696,"br"),ng()()(),wl(697,"td",19)(698,"code",34),Ux(699,"EventEmitter"),ng()(),wl(700,"td",22),Ux(701,"-"),ng(),wl(702,"td",23)(703,"em")(704,"strong"),Ux(705,"(opcional)"),ng()(),wl(706,"p"),Ux(707,"Evento executado quando o usu\xE1rio passar o "),wl(708,"em"),Ux(709,"mouse"),ng(),Ux(710," sobre um elemento do gr\xE1fico."),ng(),wl(711,"p"),Ux(712,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),ng(),wl(713,"ul")(714,"li")(715,"em"),Ux(716,"donut"),ng(),Ux(717," e "),wl(718,"em"),Ux(719,"pie"),ng(),Ux(720,": um objeto contendo a categoria e valor da s\xE9rie."),ng(),wl(721,"li")(722,"em"),Ux(723,"radar"),ng(),Ux(724,": um objeto contendo o nome da s\xE9rie e os valores."),ng(),wl(725,"li")(726,"em"),Ux(727,"area"),ng(),Ux(728,", "),wl(729,"em"),Ux(730,"line"),ng(),Ux(731,", "),wl(732,"em"),Ux(733,"column"),ng(),Ux(734," e "),wl(735,"em"),Ux(736,"bar"),ng(),Ux(737,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),ng()()()(),wl(738,"tr",15)(739,"td",16)(740,"div",17)(741,"span",18),Ux(742," p-title"),Ul(743,"br"),ng()()(),wl(744,"td",19)(745,"code",35),Ux(746,"string"),ng()(),wl(747,"td",22),Ux(748,"-"),ng(),wl(749,"td",23)(750,"em")(751,"strong"),Ux(752,"(opcional)"),ng()(),wl(753,"p"),Ux(754,"Define o t\xEDtulo do gr\xE1fico."),ng()()(),wl(755,"tr",15)(756,"td",16)(757,"div",17)(758,"span",18),Ux(759," p-type"),Ul(760,"br"),ng()()(),wl(761,"td",19)(762,"code",36),Ux(763,"PoChartType"),ng()(),wl(764,"td",22),Ux(765,"-"),ng(),wl(766,"td",23)(767,"em")(768,"strong"),Ux(769,"(opcional)"),ng()(),wl(770,"p"),Ux(771,"Define o tipo de gr\xE1fico."),ng(),wl(772,"p"),Ux(773,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),wl(774,"code"),Ux(775,"type"),ng(),Ux(776," conforme a interface "),wl(777,"code"),Ux(778,"PoChartSerie"),ng(),Ux(779,"."),ng(),wl(780,"blockquote")(781,"p"),Ux(782,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),wl(783,"code"),Ux(784,"p-type"),ng(),Ux(785," quanto em "),wl(786,"code"),Ux(787,"PochartSerie.type"),ng(),Ux(788,", o valor "),wl(789,"code"),Ux(790,"{ type }"),ng(),Ux(791," da primeira s\xE9rie anular\xE1 o valor definido em "),wl(792,"code"),Ux(793,"p-type"),ng(),Ux(794,"."),ng()(),wl(795,"p"),Ux(796,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),wl(797,"code"),Ux(798,"p-series"),ng(),Ux(799,":"),ng(),wl(800,"ul")(801,"li"),Ux(802,"Se "),wl(803,"code"),Ux(804,"p-series = [{ data: [1,2,3] }]"),ng(),Ux(805,": ser\xE1 "),wl(806,"code"),Ux(807,"PoChartType.Column"),ng(),Ux(808,"."),ng(),wl(809,"li"),Ux(810,"Se "),wl(811,"code"),Ux(812,"p-series = [{ data: 1 }]"),ng(),Ux(813,": ser\xE1 "),wl(814,"code"),Ux(815,"PoChartType.Pie"),ng(),Ux(816,"."),ng()(),wl(817,"blockquote")(818,"p"),Ux(819,"Veja os valores v\xE1lidos no "),wl(820,"em"),Ux(821,"enum"),ng(),wl(822,"code"),Ux(823,"PoChartType"),ng(),Ux(824,"."),ng()()()(),wl(825,"tr",15)(826,"td",16)(827,"div",17)(828,"span",18),Ux(829," p-value-gauge-multiple"),Ul(830,"br"),ng()()(),wl(831,"td",19)(832,"code",27),Ux(833,"number"),ng()(),wl(834,"td",22),Ux(835,"-"),ng(),wl(836,"td",23)(837,"em")(838,"strong"),Ux(839,"(opcional)"),ng()(),wl(840,"p"),Ux(841,"Define o valor do gr\xE1fico do tipo "),wl(842,"code"),Ux(843,"Gauge"),ng(),Ux(844," quando utliza as propriedades "),wl(845,"code"),Ux(846,"From"),ng(),wl(847,"code"),Ux(848,"To"),ng(),Ux(849,"."),ng()()()(),wl(850,"h3"),Ux(851,"Interfaces"),ng(),wl(852,"h4",37)(853,"code",5),Ux(854,"PoChartAxisOptions"),ng()(),wl(855,"div",2)(856,"p")(857,"em"),Ux(858,"Interface"),ng(),Ux(859," que define os eixos do grid."),ng()(),wl(860,"h4",11),Ux(861,"Propriedades"),ng(),wl(862,"table",12)(863,"tr",13)(864,"th",14),Ux(865,"Nome"),ng(),wl(866,"th",14),Ux(867,"Tipo"),ng(),wl(868,"th",14),Ux(869,"Descri\xE7\xE3o"),ng()(),wl(870,"tr",15)(871,"td",16)(872,"div",17)(873,"span",18),Ux(874," gridLines"),Ul(875,"br"),ng()()(),wl(876,"td",19)(877,"code",27),Ux(878,"number"),ng()(),wl(879,"td",23)(880,"em")(881,"strong"),Ux(882,"(opcional)"),ng()(),wl(883,"p"),Ux(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),wl(885,"code"),Ux(886,"Area"),ng(),Ux(887,", "),wl(888,"code"),Ux(889,"Line"),ng(),Ux(890," e "),wl(891,"code"),Ux(892,"Column"),ng(),Ux(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),wl(894,"code"),Ux(895,"Bar"),ng(),Ux(896,", tratar\xE1 as linhas verticais (eixo Y)."),ng(),wl(897,"p"),Ux(898,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),ng(),wl(899,"ul")(900,"li"),Ux(901,"Quantidade padr\xE3o de linhas: '5';"),ng(),wl(902,"li"),Ux(903,"Quantidade m\xEDnima permitida: '2';"),ng()()()(),wl(904,"tr",15)(905,"td",16)(906,"div",17)(907,"span",18),Ux(908," labelType"),Ul(909,"br"),ng()()(),wl(910,"td",19)(911,"code",38),Ux(912,"PoChartLabelFormat"),ng()(),wl(913,"td",23)(914,"em")(915,"strong"),Ux(916,"(opcional)"),ng()(),wl(917,"p"),Ux(918,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),ng()()(),wl(919,"tr",15)(920,"td",16)(921,"div",17)(922,"span",18),Ux(923," maxRange"),Ul(924,"br"),ng()()(),wl(925,"td",19)(926,"code",27),Ux(927,"number"),ng()(),wl(928,"td",23)(929,"em")(930,"strong"),Ux(931,"(opcional)"),ng()(),wl(932,"p"),Ux(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),ng(),wl(934,"blockquote")(935,"p"),Ux(936,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),ng()()()(),wl(937,"tr",15)(938,"td",16)(939,"div",17)(940,"span",18),Ux(941," minRange"),Ul(942,"br"),ng()()(),wl(943,"td",19)(944,"code",27),Ux(945,"number"),ng()(),wl(946,"td",23)(947,"em")(948,"strong"),Ux(949,"(opcional)"),ng()(),wl(950,"p"),Ux(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),ng(),wl(952,"blockquote")(953,"p"),Ux(954,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),ng()()()(),wl(955,"tr",15)(956,"td",16)(957,"div",17)(958,"span",18),Ux(959," paddingBottom"),Ul(960,"br"),ng()()(),wl(961,"td",19)(962,"code",27),Ux(963,"number"),ng()(),wl(964,"td",23)(965,"em")(966,"strong"),Ux(967,"(opcional)"),ng()(),wl(968,"p"),Ux(969,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),ng()()(),wl(970,"tr",15)(971,"td",16)(972,"div",17)(973,"span",18),Ux(974," paddingLeft"),Ul(975,"br"),ng()()(),wl(976,"td",19)(977,"code",27),Ux(978,"number"),ng()(),wl(979,"td",23)(980,"em")(981,"strong"),Ux(982,"(opcional)"),ng()(),wl(983,"p"),Ux(984,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),ng()()(),wl(985,"tr",15)(986,"td",16)(987,"div",17)(988,"span",18),Ux(989," paddingRight"),Ul(990,"br"),ng()()(),wl(991,"td",19)(992,"code",27),Ux(993,"number"),ng()(),wl(994,"td",23)(995,"em")(996,"strong"),Ux(997,"(opcional)"),ng()(),wl(998,"p"),Ux(999,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),ng()()(),wl(1e3,"tr",15)(1001,"td",16)(1002,"div",17)(1003,"span",18),Ux(1004," rotateLegend"),Ul(1005,"br"),ng()()(),wl(1006,"td",19)(1007,"code",27),Ux(1008,"number"),ng()(),wl(1009,"td",23)(1010,"em")(1011,"strong"),Ux(1012,"(opcional)"),ng()(),wl(1013,"p"),Ux(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),ng(),wl(1015,"ul")(1016,"li"),Ux(1017,"Valores negativos giram a legenda para a esquerda."),ng(),wl(1018,"li"),Ux(1019,"Valores positivos giram a legenda para a direita."),ng()(),wl(1020,"p"),Ux(1021,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),ng()()(),wl(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),Ux(1026," showAxisDetails"),Ul(1027,"br"),ng()()(),wl(1028,"td",19)(1029,"code",39),Ux(1030,"boolean"),ng()(),wl(1031,"td",23)(1032,"em")(1033,"strong"),Ux(1034,"(opcional)"),ng()(),wl(1035,"p"),Ux(1036,"Exibe a linha de detalhes que acompanha o mouse"),ng()()(),wl(1037,"tr",15)(1038,"td",16)(1039,"div",17)(1040,"span",18),Ux(1041," showXAxis"),Ul(1042,"br"),ng()()(),wl(1043,"td",19)(1044,"code",39),Ux(1045,"boolean"),ng()(),wl(1046,"td",23)(1047,"em")(1048,"strong"),Ux(1049,"(opcional)"),ng()(),wl(1050,"p"),Ux(1051,"Exibe a linha do eixo X"),ng()()(),wl(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),Ux(1056," showYAxis"),Ul(1057,"br"),ng()()(),wl(1058,"td",19)(1059,"code",39),Ux(1060,"boolean"),ng()(),wl(1061,"td",23)(1062,"em")(1063,"strong"),Ux(1064,"(opcional)"),ng()(),wl(1065,"p"),Ux(1066,"Exibe a linha do eixo Y"),ng()()()(),wl(1067,"h4",37)(1068,"code",5),Ux(1069,"PoChartHeaderOptions"),ng()(),wl(1070,"div",2)(1071,"p")(1072,"em"),Ux(1073,"Interface"),ng(),Ux(1074," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),ng()(),wl(1075,"h4",11),Ux(1076,"Propriedades"),ng(),wl(1077,"table",12)(1078,"tr",13)(1079,"th",14),Ux(1080,"Nome"),ng(),wl(1081,"th",14),Ux(1082,"Tipo"),ng(),wl(1083,"th",14),Ux(1084,"Descri\xE7\xE3o"),ng()(),wl(1085,"tr",15)(1086,"td",16)(1087,"div",17)(1088,"span",18),Ux(1089," hideExpand"),Ul(1090,"br"),ng()()(),wl(1091,"td",19)(1092,"code",39),Ux(1093,"boolean"),ng()(),wl(1094,"td",23)(1095,"em")(1096,"strong"),Ux(1097,"(opcional)"),ng()(),wl(1098,"p"),Ux(1099,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),ng()()(),wl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),Ux(1104," hideExportCsv"),Ul(1105,"br"),ng()()(),wl(1106,"td",19)(1107,"code",39),Ux(1108,"boolean"),ng()(),wl(1109,"td",23)(1110,"em")(1111,"strong"),Ux(1112,"(opcional)"),ng()(),wl(1113,"p"),Ux(1114,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),ng()()(),wl(1115,"tr",15)(1116,"td",16)(1117,"div",17)(1118,"span",18),Ux(1119," hideExportImage"),Ul(1120,"br"),ng()()(),wl(1121,"td",19)(1122,"code",39),Ux(1123,"boolean"),ng()(),wl(1124,"td",23)(1125,"em")(1126,"strong"),Ux(1127,"(opcional)"),ng()(),wl(1128,"p"),Ux(1129,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),ng()()(),wl(1130,"tr",15)(1131,"td",16)(1132,"div",17)(1133,"span",18),Ux(1134," hideTableDetails"),Ul(1135,"br"),ng()()(),wl(1136,"td",19)(1137,"code",39),Ux(1138,"boolean"),ng()(),wl(1139,"td",23)(1140,"em")(1141,"strong"),Ux(1142,"(opcional)"),ng()(),wl(1143,"p"),Ux(1144,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),ng()()()(),wl(1145,"h4",37)(1146,"code",5),Ux(1147,"PoChartIndicatorOptions"),ng()(),wl(1148,"div",2)(1149,"p"),Ux(1150,"Interface para configura\xE7\xF5es dos indicadores do gr\xE1fico "),wl(1151,"code"),Ux(1152,"radar"),ng(),Ux(1153,"."),ng()(),wl(1154,"h4",11),Ux(1155,"Propriedades"),ng(),wl(1156,"table",12)(1157,"tr",13)(1158,"th",14),Ux(1159,"Nome"),ng(),wl(1160,"th",14),Ux(1161,"Tipo"),ng(),wl(1162,"th",14),Ux(1163,"Descri\xE7\xE3o"),ng()(),wl(1164,"tr",15)(1165,"td",16)(1166,"div",17)(1167,"span",18),Ux(1168," color"),Ul(1169,"br"),ng()()(),wl(1170,"td",19)(1171,"code",35),Ux(1172,"string"),ng()(),wl(1173,"td",23)(1174,"em")(1175,"strong"),Ux(1176,"(opcional)"),ng()(),wl(1177,"p"),Ux(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),ng(),wl(1179,"blockquote")(1180,"p"),Ux(1181,"Nome da cor, hexadecimal ou RGB."),ng()()()(),wl(1182,"tr",15)(1183,"td",16)(1184,"div",17)(1185,"span",18),Ux(1186," max"),Ul(1187,"br"),ng()()(),wl(1188,"td",19)(1189,"code",27),Ux(1190,"number"),ng()(),wl(1191,"td",23)(1192,"em")(1193,"strong"),Ux(1194,"(opcional)"),ng()(),wl(1195,"p"),Ux(1196,"Valor m\xE1ximo do indicator."),ng(),wl(1197,"p"),Ux(1198,"A propriedade "),wl(1199,"code"),Ux(1200,"max"),ng(),Ux(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),ng()()(),wl(1202,"tr",15)(1203,"td",16)(1204,"div",17)(1205,"span",18),Ux(1206," min"),Ul(1207,"br"),ng()()(),wl(1208,"td",19)(1209,"code",27),Ux(1210,"number"),ng()(),wl(1211,"td",23)(1212,"em")(1213,"strong"),Ux(1214,"(opcional)"),ng()(),wl(1215,"p"),Ux(1216,"Valor m\xEDnimo do indicator, com valor padr\xE3o de 0."),ng(),wl(1217,"p"),Ux(1218,"A propriedade "),wl(1219,"code"),Ux(1220,"min"),ng(),Ux(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),ng()()(),wl(1222,"tr",15)(1223,"td",16)(1224,"div",17)(1225,"span",18),Ux(1226," name"),Ul(1227,"br"),ng()()(),wl(1228,"td",19)(1229,"code",35),Ux(1230,"string"),ng()(),wl(1231,"td",23)(1232,"em")(1233,"strong"),Ux(1234,"(opcional)"),ng()(),wl(1235,"p"),Ux(1236,"Nome do indicator."),ng()()()(),wl(1237,"h4",37)(1238,"code",5),Ux(1239,"PoChartLiterals"),ng()(),wl(1240,"div",2)(1241,"p"),Ux(1242,"Interface para defini\xE7\xE3o dos literais usadas no "),wl(1243,"code"),Ux(1244,"po-chart"),ng(),Ux(1245,"."),ng()(),wl(1246,"h4",11),Ux(1247,"Propriedades"),ng(),wl(1248,"table",12)(1249,"tr",13)(1250,"th",14),Ux(1251,"Nome"),ng(),wl(1252,"th",14),Ux(1253,"Tipo"),ng(),wl(1254,"th",14),Ux(1255,"Descri\xE7\xE3o"),ng()(),wl(1256,"tr",15)(1257,"td",16)(1258,"div",17)(1259,"span",18),Ux(1260," category"),Ul(1261,"br"),ng()()(),wl(1262,"td",19)(1263,"code",35),Ux(1264,"string"),ng()(),wl(1265,"td",23)(1266,"em")(1267,"strong"),Ux(1268,"(opcional)"),ng()(),wl(1269,"p"),Ux(1270,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),wl(1271,"code"),Ux(1272,"Bar"),ng(),Ux(1273,"."),ng()()(),wl(1274,"tr",15)(1275,"td",16)(1276,"div",17)(1277,"span",18),Ux(1278," downloadCSV"),Ul(1279,"br"),ng()()(),wl(1280,"td",19)(1281,"code",35),Ux(1282,"string"),ng()(),wl(1283,"td",23)(1284,"em")(1285,"strong"),Ux(1286,"(opcional)"),ng()(),wl(1287,"p"),Ux(1288,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),ng()()(),wl(1289,"tr",15)(1290,"td",16)(1291,"div",17)(1292,"span",18),Ux(1293," exportCSV"),Ul(1294,"br"),ng()()(),wl(1295,"td",19)(1296,"code",35),Ux(1297,"string"),ng()(),wl(1298,"td",23)(1299,"em")(1300,"strong"),Ux(1301,"(opcional)"),ng()(),wl(1302,"p"),Ux(1303,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),ng()()(),wl(1304,"tr",15)(1305,"td",16)(1306,"div",17)(1307,"span",18),Ux(1308," exportJPG"),Ul(1309,"br"),ng()()(),wl(1310,"td",19)(1311,"code",35),Ux(1312,"string"),ng()(),wl(1313,"td",23)(1314,"em")(1315,"strong"),Ux(1316,"(opcional)"),ng()(),wl(1317,"p"),Ux(1318,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),ng()()(),wl(1319,"tr",15)(1320,"td",16)(1321,"div",17)(1322,"span",18),Ux(1323," exportPNG"),Ul(1324,"br"),ng()()(),wl(1325,"td",19)(1326,"code",35),Ux(1327,"string"),ng()(),wl(1328,"td",23)(1329,"em")(1330,"strong"),Ux(1331,"(opcional)"),ng()(),wl(1332,"p"),Ux(1333,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),ng()()(),wl(1334,"tr",15)(1335,"td",16)(1336,"div",17)(1337,"span",18),Ux(1338," item"),Ul(1339,"br"),ng()()(),wl(1340,"td",19)(1341,"code",35),Ux(1342,"string"),ng()(),wl(1343,"td",23)(1344,"em")(1345,"strong"),Ux(1346,"(opcional)"),ng()(),wl(1347,"p"),Ux(1348,"Texto dos t\xEDtulos das colunas "),wl(1349,"code"),Ux(1350,"Gauge"),ng(),Ux(1351," e n\xE3o possui label."),ng()()(),wl(1352,"tr",15)(1353,"td",16)(1354,"div",17)(1355,"span",18),Ux(1356," serie"),Ul(1357,"br"),ng()()(),wl(1358,"td",19)(1359,"code",35),Ux(1360,"string"),ng()(),wl(1361,"td",23)(1362,"em")(1363,"strong"),Ux(1364,"(opcional)"),ng()(),wl(1365,"p"),Ux(1366,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),wl(1367,"code"),Ux(1368,"Bar"),ng(),Ux(1369," e "),wl(1370,"code"),Ux(1371,"Gauge"),ng(),Ux(1372,"."),ng()()(),wl(1373,"tr",15)(1374,"td",16)(1375,"div",17)(1376,"span",18),Ux(1377," value"),Ul(1378,"br"),ng()()(),wl(1379,"td",19)(1380,"code",35),Ux(1381,"string"),ng()(),wl(1382,"td",23)(1383,"em")(1384,"strong"),Ux(1385,"(opcional)"),ng()(),wl(1386,"p"),Ux(1387,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),wl(1388,"code"),Ux(1389,"Gauge"),ng(),Ux(1390,"."),ng()()()(),wl(1391,"h4",37)(1392,"code",5),Ux(1393,"PoChartOptions"),ng()(),wl(1394,"div",2)(1395,"p")(1396,"em"),Ux(1397,"Interface"),ng(),Ux(1398," para configura\xE7\xF5es dos elementos do gr\xE1fico."),ng()(),wl(1399,"h4",11),Ux(1400,"Propriedades"),ng(),wl(1401,"table",12)(1402,"tr",13)(1403,"th",14),Ux(1404,"Nome"),ng(),wl(1405,"th",14),Ux(1406,"Tipo"),ng(),wl(1407,"th",14),Ux(1408,"Descri\xE7\xE3o"),ng()(),wl(1409,"tr",15)(1410,"td",16)(1411,"div",17)(1412,"span",18),Ux(1413," areaStyle"),Ul(1414,"br"),ng()()(),wl(1415,"td",19)(1416,"code",39),Ux(1417,"boolean"),ng()(),wl(1418,"td",23)(1419,"em")(1420,"strong"),Ux(1421,"(opcional)"),ng()(),wl(1422,"p"),Ux(1423,"Define se as s\xE9ries ter\xE3o sua \xE1rea preenchida."),ng(),wl(1424,"blockquote")(1425,"p"),Ux(1426,"Esta propriedade tem preced\xEAncia sobre a defini\xE7\xE3o de "),wl(1427,"code"),Ux(1428,"areaStyle"),ng(),Ux(1429," em cada s\xE9rie, "),wl(1430,"code"),Ux(1431,"fillpoints"),ng(),Ux(1432," n\xE3o funciona quando "),wl(1433,"code"),Ux(1434,"areaStyle"),ng(),Ux(1435," est\xE1 definido como "),wl(1436,"code"),Ux(1437,"true"),ng(),Ux(1438,"."),ng()()()(),wl(1439,"tr",15)(1440,"td",16)(1441,"div",17)(1442,"span",18),Ux(1443," axis"),Ul(1444,"br"),ng()()(),wl(1445,"td",19)(1446,"code",40),Ux(1447,"PoChartAxisOptions"),ng()(),wl(1448,"td",23)(1449,"em")(1450,"strong"),Ux(1451,"(opcional)"),ng()(),wl(1452,"p"),Ux(1453,"Define um objeto do tipo "),wl(1454,"code"),Ux(1455,"PoChartAxisOptions"),ng(),Ux(1456," para configura\xE7\xE3o dos eixos."),ng()()(),wl(1457,"tr",15)(1458,"td",16)(1459,"div",17)(1460,"span",18),Ux(1461," borderRadius"),Ul(1462,"br"),ng()()(),wl(1463,"td",19)(1464,"code",27),Ux(1465,"number"),ng()(),wl(1466,"td",23)(1467,"em")(1468,"strong"),Ux(1469,"(opcional)"),ng()(),wl(1470,"p"),Ux(1471,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),wl(1472,"code"),Ux(1473,"Donut"),ng(),Ux(1474,", "),wl(1475,"code"),Ux(1476,"Pie"),ng(),Ux(1477,"."),ng(),wl(1478,"blockquote")(1479,"p"),Ux(1480,"Valores v\xE1lidos entre 0 e 100,"),ng()()()(),wl(1481,"tr",15)(1482,"td",16)(1483,"div",17)(1484,"span",18),Ux(1485," bottomDataZoom"),Ul(1486,"br"),ng()()(),wl(1487,"td",19)(1488,"code",39),Ux(1489,"boolean "),ng(),wl(1490,"code",27),Ux(1491," number"),ng()(),wl(1492,"td",23)(1493,"em")(1494,"strong"),Ux(1495,"(opcional)"),ng()(),wl(1496,"p"),Ux(1497,"Define a dist\xE2ncia inferior do componente DataZoom."),ng(),wl(1498,"p"),Ux(1499,"Esta propriedade aceita os seguintes valores:"),ng(),wl(1500,"ul")(1501,"li")(1502,"p")(1503,"code"),Ux(1504,"false"),ng(),Ux(1505," (padr\xE3o): n\xE3o aplica ajustes."),ng()(),wl(1506,"li")(1507,"p")(1508,"code"),Ux(1509,"true"),ng(),Ux(1510,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),ng(),wl(1511,"ul")(1512,"li")(1513,"code"),Ux(1514,"8"),ng(),Ux(1515," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),ng(),wl(1516,"li")(1517,"code"),Ux(1518,"32"),ng(),Ux(1519," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),ng()()(),wl(1520,"li")(1521,"p")(1522,"code"),Ux(1523,"number"),ng(),Ux(1524,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),ng()()(),wl(1525,"blockquote")(1526,"p"),Ux(1527,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),wl(1528,"code"),Ux(1529,"dataZoom: true"),ng(),Ux(1530,")."),ng()()()(),wl(1531,"tr",15)(1532,"td",16)(1533,"div",17)(1534,"span",18),Ux(1535," dataZoom"),Ul(1536,"br"),ng()()(),wl(1537,"td",19)(1538,"code",39),Ux(1539,"boolean"),ng()(),wl(1540,"td",23)(1541,"em")(1542,"strong"),Ux(1543,"(opcional)"),ng()(),wl(1544,"p"),Ux(1545,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),ng()()(),wl(1546,"tr",15)(1547,"td",16)(1548,"div",17)(1549,"span",18),Ux(1550," descriptionChart"),Ul(1551,"br"),ng()()(),wl(1552,"td",19)(1553,"code",35),Ux(1554,"string"),ng()(),wl(1555,"td",23)(1556,"em")(1557,"strong"),Ux(1558,"(opcional)"),ng()(),wl(1559,"p"),Ux(1560,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),ng()()(),wl(1561,"tr",15)(1562,"td",16)(1563,"div",17)(1564,"span",18),Ux(1565," fillPoints"),Ul(1566,"br"),ng()()(),wl(1567,"td",19)(1568,"code",39),Ux(1569,"boolean"),ng()(),wl(1570,"td",23)(1571,"em")(1572,"strong"),Ux(1573,"(opcional)"),ng()(),wl(1574,"p"),Ux(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),ng(),wl(1576,"blockquote")(1577,"p"),Ux(1578,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),wl(1579,"code"),Ux(1580,"Area"),ng(),Ux(1581,", "),wl(1582,"code"),Ux(1583,"Line"),ng(),Ux(1584," e "),wl(1585,"code"),Ux(1586,"Radar"),ng(),Ux(1587,`.
Para o tipo `),wl(1588,"code"),Ux(1589,"Radar"),ng(),Ux(1590,", o valor padr\xE3o \xE9 "),wl(1591,"code"),Ux(1592,"true"),ng(),Ux(1593,"."),ng()()()(),wl(1594,"tr",15)(1595,"td",16)(1596,"div",17)(1597,"span",18),Ux(1598," firstColumnName"),Ul(1599,"br"),ng()()(),wl(1600,"td",19)(1601,"code",35),Ux(1602,"string"),ng()(),wl(1603,"td",23)(1604,"em")(1605,"strong"),Ux(1606,"(opcional)"),ng()(),wl(1607,"p"),Ux(1608,"Valor que permite customizar o nome da "),wl(1609,"code"),Ux(1610,"TH"),ng(),Ux(1611," da primeira coluna da tabela descritiva."),ng()()(),wl(1612,"tr",15)(1613,"td",16)(1614,"div",17)(1615,"span",18),Ux(1616," header"),Ul(1617,"br"),ng()()(),wl(1618,"td",19)(1619,"code",41),Ux(1620,"PoChartHeaderOptions"),ng()(),wl(1621,"td",23)(1622,"em")(1623,"strong"),Ux(1624,"(opcional)"),ng()(),wl(1625,"p"),Ux(1626,"Define um objeto do tipo "),wl(1627,"code"),Ux(1628,"PoChartHeaderOptions"),ng(),Ux(1629," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),ng()()(),wl(1630,"tr",15)(1631,"td",16)(1632,"div",17)(1633,"span",18),Ux(1634," innerRadius"),Ul(1635,"br"),ng()()(),wl(1636,"td",19)(1637,"code",27),Ux(1638,"number"),ng()(),wl(1639,"td",23)(1640,"em")(1641,"strong"),Ux(1642,"(opcional)"),ng()(),wl(1643,"p"),Ux(1644,"Define o di\xE2metro, em valor percentual entre "),wl(1645,"code"),Ux(1646,"0"),ng(),Ux(1647," e "),wl(1648,"code"),Ux(1649,"100"),ng(),Ux(1650,", da \xE1rea central para gr\xE1ficos do tipo "),wl(1651,"code"),Ux(1652,"donut"),ng(),Ux(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),wl(1654,"code"),Ux(1655,"40px"),ng(),Ux(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),ng()()(),wl(1657,"tr",15)(1658,"td",16)(1659,"div",17)(1660,"span",18),Ux(1661," legend"),Ul(1662,"br"),ng()()(),wl(1663,"td",19)(1664,"code",39),Ux(1665,"boolean"),ng()(),wl(1666,"td",23)(1667,"em")(1668,"strong"),Ux(1669,"(opcional)"),ng()(),wl(1670,"p"),Ux(1671,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),wl(1672,"code"),Ux(1673,"true"),ng()()()(),wl(1674,"tr",15)(1675,"td",16)(1676,"div",17)(1677,"span",18),Ux(1678," legendPosition"),Ul(1679,"br"),ng()()(),wl(1680,"td",19)(1681,"code",42),Ux(1682,"'left' "),ng(),wl(1683,"code",43),Ux(1684," 'center' "),ng(),wl(1685,"code",44),Ux(1686," 'right'"),ng()(),wl(1687,"td",23)(1688,"em")(1689,"strong"),Ux(1690,"(opcional)"),ng()(),wl(1691,"p"),Ux(1692,"Define o alinhamento horizontal da legenda."),ng(),wl(1693,"blockquote")(1694,"p"),Ux(1695,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),wl(1696,"code"),Ux(1697,"Gauge"),ng(),Ux(1698,"."),ng()()()(),wl(1699,"tr",15)(1700,"td",16)(1701,"div",17)(1702,"span",18),Ux(1703," legendType"),Ul(1704,"br"),ng()()(),wl(1705,"td",19)(1706,"code",45),Ux(1707,"'plain' "),ng(),wl(1708,"code",46),Ux(1709," 'scroll'"),ng()(),wl(1710,"td",23)(1711,"em")(1712,"strong"),Ux(1713,"(opcional)"),ng()(),wl(1714,"p"),Ux(1715,"Define o tipo da legenda."),ng(),wl(1716,"ul")(1717,"li")(1718,"code"),Ux(1719,"plain"),ng(),Ux(1720,": exibe todas as legendas de forma est\xE1tica."),ng(),wl(1721,"li")(1722,"code"),Ux(1723,"scroll"),ng(),Ux(1724,": habilita rolagem quando a quantidade de legendas exceder o espa\xE7o dispon\xEDvel no gr\xE1fico."),ng()(),wl(1725,"blockquote")(1726,"p"),Ux(1727,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),wl(1728,"code"),Ux(1729,"Gauge"),ng(),Ux(1730,"."),ng()()()(),wl(1731,"tr",15)(1732,"td",16)(1733,"div",17)(1734,"span",18),Ux(1735," legendVerticalPosition"),Ul(1736,"br"),ng()()(),wl(1737,"td",19)(1738,"code",47),Ux(1739,"'top' "),ng(),wl(1740,"code",48),Ux(1741," 'bottom'"),ng()(),wl(1742,"td",23)(1743,"em")(1744,"strong"),Ux(1745,"(opcional)"),ng()(),wl(1746,"p"),Ux(1747,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),ng(),wl(1748,"blockquote")(1749,"p"),Ux(1750,"Quando utilizada com o valor "),wl(1751,"code"),Ux(1752,"top"),ng(),Ux(1753,", recomenda-se configurar tamb\xE9m a propriedade "),wl(1754,"code"),Ux(1755,"bottomDataZoom"),ng(),Ux(1756," caso o "),wl(1757,"code"),Ux(1758,"dataZoom"),ng(),Ux(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),wl(1760,"code"),Ux(1761,"Gauge"),ng(),Ux(1762,"."),ng()()()(),wl(1763,"tr",15)(1764,"td",16)(1765,"div",17)(1766,"span",18),Ux(1767," pointer"),Ul(1768,"br"),ng()()(),wl(1769,"td",19)(1770,"code",39),Ux(1771,"boolean"),ng()(),wl(1772,"td",23)(1773,"em")(1774,"strong"),Ux(1775,"(opcional)"),ng()(),wl(1776,"p"),Ux(1777,"Define a exibi\xE7\xE3o do ponteiro."),ng(),wl(1778,"blockquote")(1779,"p"),Ux(1780,"V\xE1lido para gr\xE1fico do tipo "),wl(1781,"code"),Ux(1782,"Gauge"),ng(),Ux(1783,"."),ng()()()(),wl(1784,"tr",15)(1785,"td",16)(1786,"div",17)(1787,"span",18),Ux(1788," rendererOption"),Ul(1789,"br"),ng()()(),wl(1790,"td",19)(1791,"code",49),Ux(1792,"'canvas' "),ng(),wl(1793,"code",50),Ux(1794," 'svg'"),ng()(),wl(1795,"td",23)(1796,"em")(1797,"strong"),Ux(1798,"(opcional)"),ng()(),wl(1799,"p"),Ux(1800,"Define como o gr\xE1fico ser\xE1 renderizado."),ng(),wl(1801,"blockquote")(1802,"p"),Ux(1803,"Recomenda-se n\xE3o modificar o valor da propriedade "),wl(1804,"code"),Ux(1805,"rendererOption"),ng(),Ux(1806," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),ng()()()(),wl(1807,"tr",15)(1808,"td",16)(1809,"div",17)(1810,"span",18),Ux(1811," roseType"),Ul(1812,"br"),ng()()(),wl(1813,"td",19)(1814,"code",39),Ux(1815,"boolean"),ng()(),wl(1816,"td",23)(1817,"em")(1818,"strong"),Ux(1819,"(opcional)"),ng()(),wl(1820,"p"),Ux(1821,"Transforma os gr\xE1ficos do tipo "),wl(1822,"code"),Ux(1823,"Donut"),ng(),Ux(1824," ou "),wl(1825,"code"),Ux(1826,"Pie"),ng(),Ux(1827," num gr\xE1fico de \xE1rea polar."),ng(),wl(1828,"blockquote")(1829,"p"),Ux(1830,"V\xE1lido para os gr\xE1ficos "),wl(1831,"code"),Ux(1832,"Donut"),ng(),Ux(1833," e "),wl(1834,"code"),Ux(1835,"Pie"),ng(),Ux(1836,"."),ng()()()(),wl(1837,"tr",15)(1838,"td",16)(1839,"div",17)(1840,"span",18),Ux(1841," showContainerGauge"),Ul(1842,"br"),ng()()(),wl(1843,"td",19)(1844,"code",39),Ux(1845,"boolean"),ng()(),wl(1846,"td",23)(1847,"em")(1848,"strong"),Ux(1849,"(opcional)"),ng()(),wl(1850,"p"),Ux(1851,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),ng(),wl(1852,"blockquote")(1853,"p"),Ux(1854,"V\xE1lido para gr\xE1fico do tipo "),wl(1855,"code"),Ux(1856,"Gauge"),ng(),Ux(1857,"."),ng()()()(),wl(1858,"tr",15)(1859,"td",16)(1860,"div",17)(1861,"span",18),Ux(1862," showFromToLegend"),Ul(1863,"br"),ng()()(),wl(1864,"td",19)(1865,"code",39),Ux(1866,"boolean"),ng()(),wl(1867,"td",23)(1868,"em")(1869,"strong"),Ux(1870,"(opcional)"),ng()(),wl(1871,"p"),Ux(1872,"Exibe os valores das propriedades "),wl(1873,"code"),Ux(1874,"from"),ng(),Ux(1875," e "),wl(1876,"code"),Ux(1877,"to"),ng(),Ux(1878," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),ng(),wl(1879,"blockquote")(1880,"p"),Ux(1881,"V\xE1lido para gr\xE1fico do tipo "),wl(1882,"code"),Ux(1883,"Gauge"),ng(),Ux(1884,"."),ng()()()(),wl(1885,"tr",15)(1886,"td",16)(1887,"div",17)(1888,"span",18),Ux(1889," stacked"),Ul(1890,"br"),ng()()(),wl(1891,"td",19)(1892,"code",39),Ux(1893,"boolean"),ng()(),wl(1894,"td",23)(1895,"em")(1896,"strong"),Ux(1897,"(opcional)"),ng()(),wl(1898,"p"),Ux(1899,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),wl(1900,"code"),Ux(1901,"stackGroupName"),ng(),Ux(1902," da interface "),wl(1903,"code"),Ux(1904,"PoChartSerie"),ng()(),wl(1905,"blockquote")(1906,"p"),Ux(1907,"V\xE1lido para gr\xE1fico do tipo "),wl(1908,"code"),Ux(1909,"Column"),ng(),Ux(1910," e "),wl(1911,"code"),Ux(1912,"Bar"),ng(),Ux(1913,"."),ng()(),wl(1914,"blockquote")(1915,"p"),Ux(1916,"Essa propriedade habilita a propriedade "),wl(1917,"code"),Ux(1918,"p-data-label"),ng(),Ux(1919," por padr\xE3o, podendo ser desabilitada passando "),wl(1920,"code"),Ux(1921,"[p-data-label]={ fixed: false }"),ng(),Ux(1922,"."),ng()()()(),wl(1923,"tr",15)(1924,"td",16)(1925,"div",17)(1926,"span",18),Ux(1927," subtitleGauge"),Ul(1928,"br"),ng()()(),wl(1929,"td",19)(1930,"code",35),Ux(1931,"string"),ng()(),wl(1932,"td",23)(1933,"em")(1934,"strong"),Ux(1935,"(opcional)"),ng()(),wl(1936,"p"),Ux(1937,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),ng(),wl(1938,"blockquote")(1939,"p"),Ux(1940,"V\xE1lido para gr\xE1fico do tipo "),wl(1941,"code"),Ux(1942,"Gauge"),ng(),Ux(1943,"."),ng()()()(),wl(1944,"tr",15)(1945,"td",16)(1946,"div",17)(1947,"span",18),Ux(1948," textCenterGraph"),Ul(1949,"br"),ng()()(),wl(1950,"td",19)(1951,"code",35),Ux(1952,"string"),ng()(),wl(1953,"td",23)(1954,"em")(1955,"strong"),Ux(1956,"(opcional)"),ng()(),wl(1957,"p"),Ux(1958,"Aplica texto centralizado customizado nos gr\xE1ficos de "),wl(1959,"code"),Ux(1960,"Donut"),ng(),Ux(1961,"."),ng()()()(),wl(1962,"h4",37)(1963,"code",5),Ux(1964,"PoChartRadarOptions"),ng()(),wl(1965,"div",2)(1966,"p")(1967,"em"),Ux(1968,"Interface"),ng(),Ux(1969," para configura\xE7\xF5es do gr\xE1fico "),wl(1970,"code"),Ux(1971,"radar"),ng(),Ux(1972,"."),ng()(),wl(1973,"h4",11),Ux(1974,"Propriedades"),ng(),wl(1975,"table",12)(1976,"tr",13)(1977,"th",14),Ux(1978,"Nome"),ng(),wl(1979,"th",14),Ux(1980,"Tipo"),ng(),wl(1981,"th",14),Ux(1982,"Descri\xE7\xE3o"),ng()(),wl(1983,"tr",15)(1984,"td",16)(1985,"div",17)(1986,"span",18),Ux(1987," indicator"),Ul(1988,"br"),ng()()(),wl(1989,"td",19)(1990,"code",51),Ux(1991,"Array<PoChartIndicatorOptions>"),ng()(),wl(1992,"td",23)(1993,"em")(1994,"strong"),Ux(1995,"(opcional)"),ng()(),wl(1996,"p"),Ux(1997,"Define as configura\xE7\xF5es dos indicadores do gr\xE1fico, como nome, cor, valor m\xEDnimo e valor m\xE1ximo."),ng()()(),wl(1998,"tr",15)(1999,"td",16)(2e3,"div",17)(2001,"span",18),Ux(2002," shape"),Ul(2003,"br"),ng()()(),wl(2004,"td",19)(2005,"code",52),Ux(2006,"'polygon' "),ng(),wl(2007,"code",53),Ux(2008," 'circle'"),ng()(),wl(2009,"td",23)(2010,"em")(2011,"strong"),Ux(2012,"(opcional)"),ng()(),wl(2013,"p"),Ux(2014,"Define o formato da grid, podendo ser exibida como pol\xEDgono ou c\xEDrculo."),ng()()(),wl(2015,"tr",15)(2016,"td",16)(2017,"div",17)(2018,"span",18),Ux(2019," splitArea"),Ul(2020,"br"),ng()()(),wl(2021,"td",19)(2022,"code",39),Ux(2023,"boolean"),ng()(),wl(2024,"td",23)(2025,"em")(2026,"strong"),Ux(2027,"(opcional)"),ng()(),wl(2028,"p"),Ux(2029,"Define o efeito zebrado na grid."),ng()()()(),wl(2030,"h4",37)(2031,"code",5),Ux(2032,"PoChartDataLabel"),ng()(),wl(2033,"div",2)(2034,"p"),Ux(2035,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),wl(2036,"code"),Ux(2037,"po-chart"),ng(),Ux(2038,"."),ng()(),wl(2039,"h4",11),Ux(2040,"Propriedades"),ng(),wl(2041,"table",12)(2042,"tr",13)(2043,"th",14),Ux(2044,"Nome"),ng(),wl(2045,"th",14),Ux(2046,"Tipo"),ng(),wl(2047,"th",14),Ux(2048,"Descri\xE7\xE3o"),ng()(),wl(2049,"tr",15)(2050,"td",16)(2051,"div",17)(2052,"span",18),Ux(2053," fixed"),Ul(2054,"br"),ng()()(),wl(2055,"td",19)(2056,"code",39),Ux(2057,"boolean"),ng()(),wl(2058,"td",23)(2059,"em")(2060,"strong"),Ux(2061,"(opcional)"),ng()(),wl(2062,"p"),Ux(2063,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),ng(),wl(2064,"ul")(2065,"li"),Ux(2066,"Quando definido como "),wl(2067,"code"),Ux(2068,"true"),ng(),Ux(2069,":"),wl(2070,"ul")(2071,"li"),Ux(2072,"O "),wl(2073,"em"),Ux(2074,"tooltip"),ng(),Ux(2075," n\xE3o ser\xE1 exibido."),ng(),wl(2076,"li"),Ux(2077,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),ng()()()(),wl(2078,"blockquote")(2079,"p"),Ux(2080,"Dispon\xEDvel para os tipo de gr\xE1fico "),wl(2081,"code"),Ux(2082,"PoChartType.Line"),ng(),Ux(2083,", "),wl(2084,"code"),Ux(2085,"PoChartType.Area"),ng(),Ux(2086,", "),wl(2087,"code"),Ux(2088,"PoChartType.Column"),ng(),Ux(2089,", "),wl(2090,"code"),Ux(2091,"PoChartType.Bar e PoChartType.Radar"),ng(),Ux(2092,"."),ng()()()()(),wl(2093,"h4",37)(2094,"code",5),Ux(2095,"PoChartSerie"),ng()(),wl(2096,"div",2)(2097,"p"),Ux(2098,"Interface das series din\xE2micas do "),wl(2099,"code"),Ux(2100,"po-chart"),ng(),Ux(2101," que possibilita desenhar gr\xE1ficos dos tipos "),wl(2102,"code"),Ux(2103,"area"),ng(),Ux(2104,", "),wl(2105,"code"),Ux(2106,"bar"),ng(),Ux(2107,", "),wl(2108,"code"),Ux(2109,"column"),ng(),Ux(2110,", "),wl(2111,"code"),Ux(2112,"line"),ng(),Ux(2113,", "),wl(2114,"code"),Ux(2115,"donut"),ng(),Ux(2116,", "),wl(2117,"code"),Ux(2118,"pie"),ng(),Ux(2119," e "),wl(2120,"code"),Ux(2121,"radar"),ng()()(),wl(2122,"h4",11),Ux(2123,"Propriedades"),ng(),wl(2124,"table",12)(2125,"tr",13)(2126,"th",14),Ux(2127,"Nome"),ng(),wl(2128,"th",14),Ux(2129,"Tipo"),ng(),wl(2130,"th",14),Ux(2131,"Descri\xE7\xE3o"),ng()(),wl(2132,"tr",15)(2133,"td",16)(2134,"div",17)(2135,"span",18),Ux(2136," areaStyle"),Ul(2137,"br"),ng()()(),wl(2138,"td",19)(2139,"code",39),Ux(2140,"boolean"),ng()(),wl(2141,"td",23)(2142,"em")(2143,"strong"),Ux(2144,"(opcional)"),ng()(),wl(2145,"p"),Ux(2146,"Define se a s\xE9rie ter\xE1 sua \xE1rea preenchida."),ng(),wl(2147,"blockquote")(2148,"p"),Ux(2149,"Propriedade v\xE1lida para gr\xE1ficos do tipo "),wl(2150,"code"),Ux(2151,"Radar"),ng(),Ux(2152,", "),wl(2153,"code"),Ux(2154,"fillpoints"),ng(),Ux(2155," n\xE3o funciona quando "),wl(2156,"code"),Ux(2157,"areaStyle"),ng(),Ux(2158," est\xE1 definido como "),wl(2159,"code"),Ux(2160,"true"),ng(),Ux(2161,"."),ng()()()(),wl(2162,"tr",15)(2163,"td",16)(2164,"div",17)(2165,"span",18),Ux(2166," color"),Ul(2167,"br"),ng()()(),wl(2168,"td",19)(2169,"code",35),Ux(2170,"string"),ng()(),wl(2171,"td",23)(2172,"em")(2173,"strong"),Ux(2174,"(opcional)"),ng()(),wl(2175,"p"),Ux(2176,"Determina a cor da s\xE9rie. As maneiras de customizar o "),wl(2177,"em"),Ux(2178,"preset"),ng(),Ux(2179," padr\xE3o de cores s\xE3o:"),ng(),wl(2180,"ul")(2181,"li"),Ux(2182,"Hexadecimal, por exemplo "),wl(2183,"code"),Ux(2184,"#c64840"),ng(),Ux(2185,";"),ng(),wl(2186,"li"),Ux(2187,"RGB, por exemplo "),wl(2188,"code"),Ux(2189,"rgb(0, 0, 165)"),ng()(),wl(2190,"li"),Ux(2191,"O nome da cor, por exemplo "),wl(2192,"code"),Ux(2193,"blue"),ng(),Ux(2194,";"),ng(),wl(2195,"li"),Ux(2196,"Vari\xE1veis CSS, por exemplo "),wl(2197,"code"),Ux(2198,"var(--color-01)"),ng(),Ux(2199,";"),ng(),wl(2200,"li"),Ux(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),wl(2202,"ul")(2203,"li"),Ul(2204,"span",54),wl(2205,"code"),Ux(2206,"color-01"),ng()(),wl(2207,"li"),Ul(2208,"span",55),wl(2209,"code"),Ux(2210,"color-02"),ng()(),wl(2211,"li"),Ul(2212,"span",56),wl(2213,"code"),Ux(2214,"color-03"),ng()(),wl(2215,"li"),Ul(2216,"span",57),wl(2217,"code"),Ux(2218,"color-04"),ng()(),wl(2219,"li"),Ul(2220,"span",58),wl(2221,"code"),Ux(2222,"color-05"),ng()(),wl(2223,"li"),Ul(2224,"span",59),wl(2225,"code"),Ux(2226,"color-06"),ng()(),wl(2227,"li"),Ul(2228,"span",60),wl(2229,"code"),Ux(2230,"color-07"),ng()(),wl(2231,"li"),Ul(2232,"span",61),wl(2233,"code"),Ux(2234,"color-08"),ng()(),wl(2235,"li"),Ul(2236,"span",62),wl(2237,"code"),Ux(2238,"color-09"),ng()(),wl(2239,"li"),Ul(2240,"span",63),wl(2241,"code"),Ux(2242,"color-10"),ng()(),wl(2243,"li"),Ul(2244,"span",64),wl(2245,"code"),Ux(2246,"color-11"),ng()(),wl(2247,"li"),Ul(2248,"span",65),wl(2249,"code"),Ux(2250,"color-12"),ng()()()()(),wl(2251,"ul")(2252,"li"),Ux(2253,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),ng()()()(),wl(2254,"tr",15)(2255,"td",16)(2256,"div",17)(2257,"span",18),Ux(2258," data"),Ul(2259,"br"),ng()()(),wl(2260,"td",19)(2261,"code",27),Ux(2262,"number "),ng(),wl(2263,"code",66),Ux(2264," Array<number>"),ng()(),wl(2265,"td",23)(2266,"em")(2267,"strong"),Ux(2268,"(opcional)"),ng()(),wl(2269,"p"),Ux(2270,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),ng(),wl(2271,"ul")(2272,"li"),Ux(2273,"Para gr\xE1ficos dos tipos "),wl(2274,"code"),Ux(2275,"donut"),ng(),Ux(2276," e "),wl(2277,"code"),Ux(2278,"pie"),ng(),Ux(2279,", espera-se "),wl(2280,"em"),Ux(2281,"number"),ng(),Ux(2282,";"),ng(),wl(2283,"li"),Ux(2284,"Para gr\xE1ficos dos tipos "),wl(2285,"code"),Ux(2286,"area"),ng(),Ux(2287,", "),wl(2288,"code"),Ux(2289,"bar"),ng(),Ux(2290,", "),wl(2291,"code"),Ux(2292,"column"),ng(),Ux(2293,", "),wl(2294,"code"),Ux(2295,"line"),ng(),Ux(2296," e "),wl(2297,"code"),Ux(2298,"radar"),ng(),Ux(2299,", espera-se um "),wl(2300,"em"),Ux(2301,"array"),ng(),Ux(2302," de "),wl(2303,"code"),Ux(2304,"data"),ng(),Ux(2305,"."),ng()(),wl(2306,"blockquote")(2307,"p"),Ux(2308,"Se passado valor "),wl(2309,"code"),Ux(2310,"null"),ng(),Ux(2311," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),ng()()()(),wl(2312,"tr",15)(2313,"td",16)(2314,"div",17)(2315,"span",18),Ux(2316," from"),Ul(2317,"br"),ng()()(),wl(2318,"td",19)(2319,"code",27),Ux(2320,"number"),ng()(),wl(2321,"td",23)(2322,"em")(2323,"strong"),Ux(2324,"(opcional)"),ng()(),wl(2325,"p"),Ux(2326,"Alcance inicial da cor."),ng(),wl(2327,"blockquote")(2328,"p"),Ux(2329,"Propriedade v\xE1lida para gr\xE1fico do tipo "),wl(2330,"code"),Ux(2331,"Gauge"),ng(),Ux(2332,"."),ng()()()(),wl(2333,"tr",15)(2334,"td",16)(2335,"div",17)(2336,"span",18),Ux(2337," label"),Ul(2338,"br"),ng()()(),wl(2339,"td",19)(2340,"code",35),Ux(2341,"string"),ng()(),wl(2342,"td",23)(2343,"em")(2344,"strong"),Ux(2345,"(opcional)"),ng()(),wl(2346,"p"),Ux(2347,"R\xF3tulo refer\xEAncia da s\xE9rie."),ng()()(),wl(2348,"tr",15)(2349,"td",16)(2350,"div",17)(2351,"span",18),Ux(2352," stackGroupName"),Ul(2353,"br"),ng()()(),wl(2354,"td",19)(2355,"code",35),Ux(2356,"string"),ng()(),wl(2357,"td",23)(2358,"em")(2359,"strong"),Ux(2360,"(opcional)"),ng()(),wl(2361,"p"),Ux(2362,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),wl(2363,"code"),Ux(2364,"stackGroupName"),ng(),Ux(2365,". Exemplo:"),ng(),wl(2366,"ul")(2367,"li"),Ux(2368,"Serie A: "),wl(2369,"code"),Ux(2370,"{ data: 500, stackGroupName: 'group1' ... }"),ng(),Ux(2371,";"),ng(),wl(2372,"li"),Ux(2373,"S\xE9rie B: "),wl(2374,"code"),Ux(2375,"{ data: 200, stackGroupName: 'group1' ... }"),ng(),Ux(2376,"."),ng(),wl(2377,"li"),Ux(2378,"S\xE9rie C: "),wl(2379,"code"),Ux(2380,"{ data: 100, stackGroupName: 'group2' ... }"),ng(),Ux(2381,"."),ng(),wl(2382,"li"),Ux(2383,"S\xE9rie D: "),wl(2384,"code"),Ux(2385,"{ data: 400, stackGroupName: 'group2' ... }"),ng(),Ux(2386,"."),ng()(),wl(2387,"p"),Ux(2388,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),ng(),wl(2389,"blockquote")(2390,"p"),Ux(2391,"V\xE1lido para gr\xE1fico do tipo "),wl(2392,"code"),Ux(2393,"Column"),ng(),Ux(2394," e "),wl(2395,"code"),Ux(2396,"Bar"),ng(),Ux(2397,". Essa propriedade \xE9 ignorada caso a propriedade "),wl(2398,"code"),Ux(2399,"stacked"),ng(),Ux(2400," da interface "),wl(2401,"code"),Ux(2402,"PoChartOptions"),ng(),Ux(2403," esteja como "),wl(2404,"code"),Ux(2405,"true"),ng(),Ux(2406,"."),ng()(),wl(2407,"blockquote")(2408,"p"),Ux(2409,"Essa propriedade habilita a propriedade "),wl(2410,"code"),Ux(2411,"p-data-label"),ng(),Ux(2412," por padr\xE3o, podendo ser desabilitada passando "),wl(2413,"code"),Ux(2414,"[p-data-label]={ fixed: false }"),ng(),Ux(2415,"."),ng()()()(),wl(2416,"tr",15)(2417,"td",16)(2418,"div",17)(2419,"span",18),Ux(2420," to"),Ul(2421,"br"),ng()()(),wl(2422,"td",19)(2423,"code",27),Ux(2424,"number"),ng()(),wl(2425,"td",23)(2426,"em")(2427,"strong"),Ux(2428,"(opcional)"),ng()(),wl(2429,"p"),Ux(2430,"Alcance final da cor."),ng(),wl(2431,"blockquote")(2432,"p"),Ux(2433,"Propriedade v\xE1lida para gr\xE1fico do tipo "),wl(2434,"code"),Ux(2435,"Gauge"),ng(),Ux(2436,"."),ng()()()(),wl(2437,"tr",15)(2438,"td",16)(2439,"div",17)(2440,"span",18),Ux(2441," tooltip"),Ul(2442,"br"),ng()()(),wl(2443,"td",19)(2444,"code",35),Ux(2445,"string "),ng(),wl(2446,"code",67),Ux(2447," ((params: any) => string)"),ng()(),wl(2448,"td",23)(2449,"em")(2450,"strong"),Ux(2451,"(opcional)"),ng()(),wl(2452,"p"),Ux(2453,"Define o texto que ser\xE1 exibido na tooltip ao passar o mouse por cima das s\xE9ries do "),wl(2454,"em"),Ux(2455,"chart"),ng(),Ux(2456,"."),ng(),wl(2457,"p"),Ux(2458,"Formatos aceitos:"),ng(),wl(2459,"ul")(2460,"li")(2461,"p")(2462,"strong"),Ux(2463,"string"),ng(),Ux(2464,": pode conter marcadores din\xE2micos e HTML simples."),ng()(),wl(2465,"li")(2466,"p"),Ux(2467,"Marcadores dispon\xEDveis:"),ng()(),wl(2468,"li")(2469,"p")(2470,"code"),Ux(2471,"{name}"),ng(),Ux(2472," \u2192 Nome do item/categoria."),ng()(),wl(2473,"li")(2474,"p")(2475,"code"),Ux(2476,"{seriesName}"),ng(),Ux(2477," \u2192 Nome da s\xE9rie."),ng()(),wl(2478,"li")(2479,"p")(2480,"code"),Ux(2481,"{value}"),ng(),Ux(2482," \u2192 Valor correspondente."),ng()(),wl(2483,"li")(2484,"p")(2485,"strong"),Ux(2486,"function"),ng(),Ux(2487,": fun\xE7\xE3o que recebe o objeto "),wl(2488,"code"),Ux(2489,"params"),ng(),Ux(2490," e deve retornar uma "),wl(2491,"em"),Ux(2492,"string"),ng(),Ux(2493," com o conte\xFAdo da tooltip."),ng()()(),wl(2494,"blockquote")(2495,"p"),Ux(2496,"\xC9 poss\xEDvel utilizar marca\xE7\xE3o HTML simples ("),wl(2497,"code"),Ux(2498,"<b>"),ng(),Ux(2499,", "),wl(2500,"code"),Ux(2501,"<i>"),ng(),Ux(2502,", "),wl(2503,"code"),Ux(2504,"<br>"),ng(),Ux(2505,", "),wl(2506,"code"),Ux(2507,"<hr>"),ng(),Ux(2508,", etc.) que ser\xE1 interpretada via "),wl(2509,"code"),Ux(2510,"innerHTML"),ng(),Ux(2511,"."),ng()(),wl(2512,"blockquote")(2513,"p"),Ux(2514,"Formata\xE7\xE3o customizada (ser\xE1 convertido internamente para HTML):"),ng()(),wl(2515,"ul")(2516,"li")(2517,"code"),Ux(2518,"\\n"),ng(),Ux(2519," \u2192 quebra de linha ("),wl(2520,"code"),Ux(2521,"<br>"),ng(),Ux(2522,")."),ng(),wl(2523,"li")(2524,"code"),Ux(2525,"**texto**"),ng(),Ux(2526," \u2192 negrito ("),wl(2527,"code"),Ux(2528,"<b>"),ng(),Ux(2529,")."),ng(),wl(2530,"li")(2531,"code"),Ux(2532,"__texto__"),ng(),Ux(2533," \u2192 it\xE1lico ("),wl(2534,"code"),Ux(2535,"<i>"),ng(),Ux(2536,")."),ng()(),wl(2537,"blockquote")(2538,"p"),Ux(2539,"Caso n\xE3o seja informado um valor para o "),wl(2540,"em"),Ux(2541,"tooltip"),ng(),Ux(2542,", ser\xE1 exibido da seguinte forma:"),ng()(),wl(2543,"ul")(2544,"li")(2545,"code"),Ux(2546,"donut"),ng(),Ux(2547,", "),wl(2548,"code"),Ux(2549,"label"),ng(),Ux(2550,": valor proporcional ao total em porcentagem."),ng(),wl(2551,"li")(2552,"code"),Ux(2553,"radar"),ng(),Ux(2554,": nome da s\xE9rie, o nome do indicator e os valores correspondentes."),ng(),wl(2555,"li")(2556,"code"),Ux(2557,"area"),ng(),Ux(2558,", "),wl(2559,"code"),Ux(2560,"bar"),ng(),Ux(2561,", "),wl(2562,"code"),Ux(2563,"column"),ng(),Ux(2564,", "),wl(2565,"code"),Ux(2566,"line"),ng(),Ux(2567," e "),wl(2568,"code"),Ux(2569,"pie"),ng(),Ux(2570,": "),wl(2571,"code"),Ux(2572,"label"),ng(),Ux(2573,": "),wl(2574,"code"),Ux(2575,"data"),ng(),Ux(2576,"."),ng()(),wl(2577,"h3"),Ux(2578,"Exemplos:"),ng(),wl(2579,"p")(2580,"strong"),Ux(2581,"Usando string com placeholders:"),ng()(),wl(2582,"pre")(2583,"code",68),Ux(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),ng()(),wl(2585,"p")(2586,"strong"),Ux(2587,"Usando fun\xE7\xE3o de callback:"),ng()(),wl(2588,"pre")(2589,"code",68),Ux(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),ng()()()(),wl(2591,"tr",15)(2592,"td",16)(2593,"div",17)(2594,"span",18),Ux(2595," type"),Ul(2596,"br"),ng()()(),wl(2597,"td",19)(2598,"code",36),Ux(2599,"PoChartType"),ng()(),wl(2600,"td",23)(2601,"em")(2602,"strong"),Ux(2603,"(opcional)"),ng()(),wl(2604,"p"),Ux(2605,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),wl(2606,"code"),Ux(2607,"column"),ng(),Ux(2608," e "),wl(2609,"code"),Ux(2610,"line"),ng(),Ux(2611," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),ng(),wl(2612,"ul")(2613,"li"),Ux(2614,"Serie A: "),wl(2615,"code"),Ux(2616,"{ type: ChartType.Column, data: ... }"),ng(),Ux(2617,";"),ng(),wl(2618,"li"),Ux(2619,"S\xE9rie B: "),wl(2620,"code"),Ux(2621,"{ type: ChartType.Line, data: ... }"),ng(),Ux(2622,"."),ng()(),wl(2623,"p"),Ux(2624,"Se tanto "),wl(2625,"code"),Ux(2626,"p-type"),ng(),Ux(2627," quanto "),wl(2628,"code"),Ux(2629,"{ type }"),ng(),Ux(2630," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),ng(),wl(2631,"ul")(2632,"li")(2633,"code"),Ux(2634,"column"),ng(),Ux(2635,": se "),wl(2636,"code"),Ux(2637,"data"),ng(),Ux(2638," receber "),wl(2639,"code"),Ux(2640,"Array<number>"),ng(),Ux(2641,";"),ng(),wl(2642,"li")(2643,"code"),Ux(2644,"pie"),ng(),Ux(2645,": se "),wl(2646,"code"),Ux(2647,"data"),ng(),Ux(2648," for "),wl(2649,"em"),Ux(2650,"number"),ng(),Ux(2651,"."),ng()(),wl(2652,"blockquote")(2653,"p"),Ux(2654,"Se utilizada a propriedade "),wl(2655,"code"),Ux(2656,"p-type"),ng(),Ux(2657,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),wl(2658,"code"),Ux(2659,"{type}"),ng(),Ux(2660," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),wl(2661,"code"),Ux(2662,"p-type"),ng(),Ux(2663,"."),ng()(),wl(2664,"blockquote")(2665,"p"),Ux(2666,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),wl(2667,"code"),Ux(2668,"type"),ng(),Ux(2669," definido, exceto para mesclagem para tipos "),wl(2670,"code"),Ux(2671,"column"),ng(),Ux(2672," e "),wl(2673,"code"),Ux(2674,"line"),ng(),Ux(2675,"."),ng()()()()(),wl(2676,"h3"),Ux(2677,"Enums"),ng(),wl(2678,"h4",4)(2679,"code",5),Ux(2680,"PoChartLabelFormat"),ng()(),wl(2681,"div",2)(2682,"p")(2683,"em"),Ux(2684,"Enum"),ng(),wl(2685,"code"),Ux(2686,"PoChartLabelFormat"),ng(),Ux(2687," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),ng()(),wl(2688,"h4",11),Ux(2689,"Propriedades"),ng(),wl(2690,"table",12)(2691,"tr",13)(2692,"th",14),Ux(2693,"Nome"),ng(),wl(2694,"th",14),Ux(2695,"Descri\xE7\xE3o"),ng()(),wl(2696,"tr",15)(2697,"td",16)(2698,"div",17)(2699,"span",18),Ux(2700," Number"),Ul(2701,"br"),ng()()(),wl(2702,"td",23)(2703,"p"),Ux(2704,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),wl(2705,"code"),Ux(2706,"'1.2-2'"),ng(),Ux(2707," da "),wl(2708,"a",69),Ux(2709,"DecimalPipe"),ng(),Ux(2710,"."),ng()()(),wl(2711,"tr",15)(2712,"td",16)(2713,"div",17)(2714,"span",18),Ux(2715," Currency"),Ul(2716,"br"),ng()()(),wl(2717,"td",23)(2718,"p"),Ux(2719,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),wl(2720,"a",70),Ux(2721,"DEFAULT_CURRENCY_CODE"),ng(),Ux(2722,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),wl(2723,"a",71),Ux(2724,"LOCALE_ID"),ng(),Ux(2725," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),ng(),wl(2726,"pre")(2727,"code"),Ux(2728,`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class AppModule { }
`),ng()()()()(),wl(2729,"h4",4)(2730,"code",5),Ux(2731,"PoChartType"),ng()(),wl(2732,"div",2)(2733,"p")(2734,"em"),Ux(2735,"Enum"),ng(),wl(2736,"code"),Ux(2737,"PoChartType"),ng(),Ux(2738," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),ng()(),wl(2739,"h4",11),Ux(2740,"Propriedades"),ng(),wl(2741,"table",12)(2742,"tr",13)(2743,"th",14),Ux(2744,"Nome"),ng(),wl(2745,"th",14),Ux(2746,"Descri\xE7\xE3o"),ng()(),wl(2747,"tr",15)(2748,"td",16)(2749,"div",17)(2750,"span",18),Ux(2751," Area"),Ul(2752,"br"),ng()()(),wl(2753,"td",23)(2754,"p"),Ux(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),ng()()(),wl(2756,"tr",15)(2757,"td",16)(2758,"div",17)(2759,"span",18),Ux(2760," Donut"),Ul(2761,"br"),ng()()(),wl(2762,"td",23)(2763,"p"),Ux(2764,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),ng()()(),wl(2765,"tr",15)(2766,"td",16)(2767,"div",17)(2768,"span",18),Ux(2769," Pie"),Ul(2770,"br"),ng()()(),wl(2771,"td",23)(2772,"p"),Ux(2773,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),ng()()(),wl(2774,"tr",15)(2775,"td",16)(2776,"div",17)(2777,"span",18),Ux(2778," Line"),Ul(2779,"br"),ng()()(),wl(2780,"td",23)(2781,"p"),Ux(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),wl(2783,"code"),Ux(2784,"column"),ng(),Ux(2785," e "),wl(2786,"code"),Ux(2787,"area"),ng(),Ux(2788,", definindo-se o tipo atrav\xE9s da propriedade "),wl(2789,"code"),Ux(2790,"PoChartSerie.type"),ng(),Ux(2791,"."),ng()()(),wl(2792,"tr",15)(2793,"td",16)(2794,"div",17)(2795,"span",18),Ux(2796," Column"),Ul(2797,"br"),ng()()(),wl(2798,"td",23)(2799,"p"),Ux(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),ng()()(),wl(2801,"tr",15)(2802,"td",16)(2803,"div",17)(2804,"span",18),Ux(2805," Bar"),Ul(2806,"br"),ng()()(),wl(2807,"td",23)(2808,"p"),Ux(2809,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),ng()()(),wl(2810,"tr",15)(2811,"td",16)(2812,"div",17)(2813,"span",18),Ux(2814," Gauge"),Ul(2815,"br"),ng()()(),wl(2816,"td",23)(2817,"p"),Ux(2818,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),ng(),wl(2819,"ul")(2820,"li"),Ux(2821,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),ng(),wl(2822,"li"),Ux(2823,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),ng()()()(),wl(2824,"tr",15)(2825,"td",16)(2826,"div",17)(2827,"span",18),Ux(2828," Radar"),Ul(2829,"br"),ng()()(),wl(2830,"td",23)(2831,"p"),Ux(2832,"Tipo de gr\xE1fico utilizado para visualizar e comparar o desempenho de diferentes itens em m\xFAltiplas categorias."),ng()()()()());},dependencies:[fP],encapsulation:2})}return r})();var We=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(d){return new(d||r)(C(Xn),C(Cn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,i){d&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-chart-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view")(11,"sample-po-chart-technology-skill-view"),ng()()()),d&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ve,Pe,Le,ke,Ve,Re,Ge,Be],encapsulation:2})}return r})();var wt=[{path:"",component:We}],Fe=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe({type:r});static \u0275inj=ue({imports:[vL.forChild(wt),vL]})}return r})();var Bn=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe({type:r});static \u0275inj=ue({imports:[u5,Fe]})}return r})();export{Bn as DocPoChartModule};