import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,cB as Yo,cC as E3,s,r as r$1,d as f,c9 as Qde,cD as Sde,R as Hl,Z as ZE,bQ as sN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,aq as ix,aO as pw,aP as X0,at as ox,aI as gc,b6 as U3,b9 as ONe,W as we$1,a3 as SNe,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Be=()=>({label:"Angular",data:100}),We=()=>({label:"React",data:10}),Fe=(r,W)=>[r,W],Ce=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-series"]],template:function(d,i){d&1&&Hl(0,"po-chart",0),d&2&&ZE("p-series",sN(3,Fe,iN(1,Be),iN(2,We)));},dependencies:[Sde],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Chart Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-chart-basic"),og(),Hl(23,"hr")),d&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ce],encapsulation:2})}return r})();var ze=()=>({value:"fillPoints",label:"fillPoints"}),q=r=>[r],He=()=>({label:"legend",value:"legend"}),Ze=()=>({label:"roseType",value:"roseType"}),Ye=()=>({label:"showFromToLegend",value:"showFromToLegend"}),je=()=>({label:"pointer",value:"pointer"}),Ue=()=>({label:"stacked",value:"stacked"}),Je=()=>({value:"fixed",label:"Fixed"});function Xe(r,W){if(r&1){let l=gx();Cl(0,"po-checkbox-group",54),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),e_(i)}),dt("p-change",function(){Jy(l);let i=Ex();return e_(i.changeDataLabelOptions())}),og(),Z0();}if(r&2){let l=Ex();ZE("p-options",oN(3,q,iN(2,Je))),pw("ngModel",l.selectedValuesDataLabel),X0();}}function Qe(r,W){if(r&1){let l=gx();Cl(0,"po-number",55),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.valueGauge,i)||(s.valueGauge=i),e_(i)}),dt("p-change",function(i){Jy(l);let s=Ex();return e_(s.changeValueGauge(i))}),og(),Z0();}if(r&2){let l=Ex();pw("ngModel",l.valueGauge),X0();}}function Ke(r,W){if(r&1){let l=gx();Cl(0,"po-radio-group",56),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.selectedShapeOption,i)||(s.selectedShapeOption=i),e_(i)}),og(),Z0(),Cl(1,"po-switch",57),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.selectedSplitArea,i)||(s.selectedSplitArea=i),e_(i)}),og(),Z0(),Cl(2,"po-switch",58),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),e_(i)}),og(),Z0();}if(r&2){let l=Ex();ZE("p-options",l.optionsShapeOption),pw("ngModel",l.selectedShapeOption),X0(),Lp(),pw("ngModel",l.selectedSplitArea),X0(),Lp(),pw("ngModel",l.selectedAreaStyle),X0();}}function $e(r,W){if(r&1){let l=gx();Cl(0,"po-input",59),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.data,i)||(s.data=i),e_(i)}),og(),Z0();}if(r&2){let l=Ex();pw("ngModel",l.data),X0();}}function et(r,W){if(r&1){let l=gx();Cl(0,"po-input",60),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.stackGroupName,i)||(s.stackGroupName=i),e_(i)}),og(),Z0();}if(r&2){let l=Ex();pw("ngModel",l.stackGroupName),X0();}}function tt(r,W){if(r&1){let l=gx();Cl(0,"po-number",61),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.fromGauge,i)||(s.fromGauge=i),e_(i)}),og(),Z0();}if(r&2){let l=Ex();pw("ngModel",l.fromGauge),X0();}}function nt(r,W){if(r&1){let l=gx();Cl(0,"po-number",62),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.toGauge,i)||(s.toGauge=i),e_(i)}),og(),Z0();}if(r&2){let l=Ex();pw("ngModel",l.toGauge),X0();}}function it(r,W){if(r&1){let l=gx();Cl(0,"div",3)(1,"po-button",63),dt("p-click",function(){Jy(l);let i=Ex();return e_(i.addData())}),og()();}}function ot(r,W){if(r&1){let l=gx();Cl(0,"po-number",64),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.min,i)||(s.min=i),e_(i)}),og(),Z0(),Cl(1,"po-number",65),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.max,i)||(s.max=i),e_(i)}),og(),Z0(),Cl(2,"po-input",66),gw("ngModelChange",function(i){Jy(l);let s=Ex();return Zx(s.colorIndicator,i)||(s.colorIndicator=i),e_(i)}),og(),Z0(),Cl(3,"div",3)(4,"po-button",67),dt("p-click",function(){Jy(l);let i=Ex();return e_(i.addData())}),og()();}if(r&2){let l=Ex();pw("ngModel",l.min),X0(),Lp(),pw("ngModel",l.max),X0(),Lp(),pw("ngModel",l.colorIndicator),X0(),Lp(2),ZE("p-disabled",l.isTypeRadar&&!l.categories);}}var ye=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=false;isTypeRadar=false;disabledTooltip=false;disabledType=false;selectedSplitArea=false;selectedAreaStyle=false;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedLegendType="plain";selectedRendererOption="canvas";selectedShapeOption="polygon";helpRadar='Example: ["Bold", "Keen", "Calm", "Wise"]';helpGeneric='Example: ["Jan", "Feb", "Mar", "Apr"]';optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsLegendType=[{value:"plain",label:"plain"},{value:"scroll",label:"scroll"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];optionsShapeOption=[{value:"polygon",label:"polygon"},{value:"circle",label:"circle"}];typeOptions=[{label:"Line",value:Yo.Line},{label:"Area",value:Yo.Area},{label:"Bar",value:Yo.Bar},{label:"Column",value:Yo.Column},{label:"Donut",value:Yo.Donut},{label:"Pie",value:Yo.Pie},{label:"Gauge",value:Yo.Gauge},{label:"Radar",value:Yo.Radar}];labelTypeOptions=[{label:"Number",value:E3.Number},{label:"Currency",value:E3.Currency}];changeDataLabelOptions(){this.dataLabel=s(r$1({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")});}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=s(r$1({},this.options),{axis:l});}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=s(r$1({},this.options),{header:l});}changeDataZoomOptions(){this.options=s(r$1({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=r$1({},this.options);}changeFillPointsOptions(){this.options=s(r$1({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")});}changeLegendOptions(){this.options=s(r$1({},this.options),{legend:this.selectedValuesLegend.includes("legend")});}changeRoseTypeOptions(){this.options=s(r$1({},this.options),{roseType:this.selectedRoseType.includes("roseType")});}changeShowFromToLegend(){this.options=s(r$1({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")});}changePointer(){this.options=s(r$1({},this.options),{pointer:this.selectedPointer.includes("pointer")});}changeStacked(){this.options=s(r$1({},this.options),{stacked:this.selectedStacked.includes("stacked")});}changeLegendVerticalPosition(){this.options=s(r$1({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition});}changeLegendPosition(){this.options=s(r$1({},this.options),{legendPosition:this.selectedLegendPosition});}changeLegendType(){this.options=s(r$1({},this.options),{legendType:this.selectedLegendType});}changeRendererOption(){this.options=s(r$1({},this.options),{rendererOption:this.selectedRendererOption});}changeType(l){l===Yo.Gauge&&(this.isTypeGauge=true,this.changeSwitchGauge(true)),l===Yo.Radar&&(this.isTypeRadar=true,this.changeSwitchRadar(true));}changeSwitchGauge(l){this.restore(true),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=Yo.Gauge,this.type=Yo.Gauge,this.isTypeRadar=false):(this.serieType=void 0,this.type=void 0);}changeSwitchRadar(l){this.restore(true,true),this.disabledType=l,l?(this.serieType=Yo.Radar,this.type=Yo.Radar,this.isTypeGauge=false):(this.serieType=void 0,this.type=void 0);}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series]);}ngOnInit(){this.restore();}addOptions(l){this.options=r$1(r$1({},this.options),l?r$1({},l):{});}addCategories(){this.allCategories=this.convertToArray(this.categories);}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea};}addData(){let l=this.serieType??this.type,d;l==="radar"?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r$1({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0);}isTypeGrid(){return this.type===Yo.Line||this.type===Yo.Area||this.type===Yo.Column||this.type===Yo.Bar||this.type===Yo.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`;}restore(l=false,d=false){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=false,this.disabledType=false,this.dataLabel={fixed:false},this.options=s(r$1({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=false),d||(this.isTypeRadar=false,this.categories=void 0,this.radarConfig=[]);}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs"]],standalone:false,decls:66,vars:100,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"p-options","ngModel"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","radar","p-label","Radar Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModel"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModel"],["p-label","Chart categories",1,"po-md-12"],["name","categories",3,"ngModelChange","p-blur","p-label","p-help","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendType","p-label","LegendType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","radioShapeOption","p-label","ShapeOption",1,"po-md-3",3,"ngModelChange","p-options","ngModel"],["name","splitArea","p-label","splitArea",1,"po-md-1",3,"ngModelChange","ngModel"],["name","areaStyle","p-label","areaStyle",1,"po-md-1",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],["name","min","p-label","Min",1,"po-md-3",3,"ngModelChange","ngModel"],["name","max","p-label","Max",1,"po-md-3",3,"ngModelChange","ngModel"],["name","colorIndicator","p-label","Color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click","p-disabled"]],template:function(d,i){if(d&1){let s=gx();Cl(0,"po-chart",1),dt("p-series-click",function(a){return i.changeEvent("p-series-click",a)})("p-series-hover",function(a){return i.changeEvent("p-series-hover",a)}),og(),Hl(1,"po-divider",2),Cl(2,"div",3),Hl(3,"po-info",4),og(),Hl(4,"po-divider",5),Cl(5,"form")(6,"po-select",6),gw("ngModelChange",function(a){return Jy(s),Zx(i.type,a)||(i.type=a),e_(a)}),dt("p-change",function(a){return i.changeType(a)}),og(),Z0(),Cl(7,"po-number",7),gw("ngModelChange",function(a){return Jy(s),Zx(i.height,a)||(i.height=a),e_(a)}),og(),Z0(),Cl(8,"po-input",8),gw("ngModelChange",function(a){return Jy(s),Zx(i.title,a)||(i.title=a),e_(a)}),og(),Z0(),ix(9,Xe,1,5,"po-checkbox-group",9),og(),Hl(10,"po-divider",10),Cl(11,"form",null,0)(13,"div",3)(14,"po-switch",11),gw("ngModelChange",function(a){return Jy(s),Zx(i.isTypeGauge,a)||(i.isTypeGauge=a),e_(a)}),dt("p-change",function(a){return i.changeSwitchGauge(a)}),og(),Z0(),Cl(15,"po-switch",12),gw("ngModelChange",function(a){return Jy(s),Zx(i.isTypeRadar,a)||(i.isTypeRadar=a),e_(a)}),dt("p-change",function(a){return i.changeSwitchRadar(a)}),og(),Z0(),ix(16,Qe,1,1,"po-number",13),ix(17,Ke,3,4),og(),Cl(18,"div",3)(19,"po-input",14),gw("ngModelChange",function(a){return Jy(s),Zx(i.label,a)||(i.label=a),e_(a)}),og(),Z0(),ix(20,$e,1,1,"po-input",15),Cl(21,"po-select",16),gw("ngModelChange",function(a){return Jy(s),Zx(i.serieType,a)||(i.serieType=a),e_(a)}),dt("p-change",function(a){return i.changeType(a)}),og(),Z0(),Cl(22,"po-input",17),gw("ngModelChange",function(a){return Jy(s),Zx(i.tooltip,a)||(i.tooltip=a),e_(a)}),og(),Z0(),Cl(23,"po-input",18),gw("ngModelChange",function(a){return Jy(s),Zx(i.color,a)||(i.color=a),e_(a)}),og(),Z0(),ix(24,et,1,1,"po-input",19),ix(25,tt,1,1,"po-number",20),ix(26,nt,1,1,"po-number",21),ix(27,it,2,0,"div",3),og()(),Cl(28,"div",3),Hl(29,"po-divider",22),Cl(30,"po-input",23),gw("ngModelChange",function(a){return Jy(s),Zx(i.categories,a)||(i.categories=a),e_(a)}),dt("p-blur",function(){return i.addCategories()}),og(),Z0(),ix(31,ot,5,4),og(),Cl(32,"form")(33,"div",3),Hl(34,"po-divider",24),Cl(35,"po-number",25),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.minRange,a)||(i.options.axis.minRange=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(36,"po-number",26),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(37,"po-number",27),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(38,"po-select",28),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.labelType,a)||(i.options.axis.labelType=a),e_(a)}),dt("p-change",function(){return i.addOptions()}),og(),Z0(),Cl(39,"po-number",29),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(40,"po-number",30),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(41,"po-number",31),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(42,"po-number",32),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(43,"po-number",33),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.innerRadius,a)||(i.options.innerRadius=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(44,"po-number",34),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.borderRadius,a)||(i.options.borderRadius=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(45,"po-input",35),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.firstColumnName,a)||(i.options.firstColumnName=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(46,"po-input",36),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(47,"po-input",37),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.descriptionChart,a)||(i.options.descriptionChart=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),Cl(48,"po-input",38),gw("ngModelChange",function(a){return Jy(s),Zx(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),e_(a)}),dt("p-blur",function(){return i.addOptions()}),og(),Z0(),og(),Cl(49,"div",3)(50,"po-checkbox-group",39),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),e_(a)}),dt("p-change",function(){return i.changeHeaderOptions()}),og(),Z0(),Cl(51,"po-checkbox-group",40),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),e_(a)}),dt("p-change",function(){return i.changeAxisOptions()}),og(),Z0(),Cl(52,"po-checkbox-group",41),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),e_(a)}),dt("p-change",function(){return i.changeDataZoomOptions()}),og(),Z0(),Cl(53,"po-checkbox-group",42),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),e_(a)}),dt("p-change",function(){return i.changeFillPointsOptions()}),og(),Z0(),Cl(54,"po-checkbox-group",43),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),e_(a)}),dt("p-change",function(){return i.changeLegendOptions()}),og(),Z0(),Cl(55,"po-checkbox-group",44),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedRoseType,a)||(i.selectedRoseType=a),e_(a)}),dt("p-change",function(){return i.changeRoseTypeOptions()}),og(),Z0(),Cl(56,"po-checkbox-group",45),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),e_(a)}),dt("p-change",function(){return i.changeShowFromToLegend()}),og(),Z0(),Cl(57,"po-checkbox-group",46),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedPointer,a)||(i.selectedPointer=a),e_(a)}),dt("p-change",function(){return i.changePointer()}),og(),Z0(),Cl(58,"po-checkbox-group",47),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedStacked,a)||(i.selectedStacked=a),e_(a)}),dt("p-change",function(){return i.changeStacked()}),og(),Z0(),Cl(59,"po-radio-group",48),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),e_(a)}),dt("p-change",function(){return i.changeLegendVerticalPosition()}),og(),Z0(),Cl(60,"po-radio-group",49),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),e_(a)}),dt("p-change",function(){return i.changeLegendPosition()}),og(),Z0(),Cl(61,"po-radio-group",50),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedLegendType,a)||(i.selectedLegendType=a),e_(a)}),dt("p-change",function(){return i.changeLegendType()}),og(),Z0(),Cl(62,"po-radio-group",51),gw("ngModelChange",function(a){return Jy(s),Zx(i.selectedRendererOption,a)||(i.selectedRendererOption=a),e_(a)}),dt("p-change",function(){return i.changeRendererOption()}),og(),Z0(),og(),Hl(63,"po-divider",52),Cl(64,"div",3)(65,"po-button",53),dt("p-click",function(){return i.restore()}),og()()();}d&2&&(ZE("p-categories",i.isTypeRadar?i.radarConfig:i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),Lp(3),ZE("p-value",i.event),Lp(3),pw("ngModel",i.type),ZE("p-disabled",i.disabledType)("p-options",i.typeOptions),X0(),Lp(),pw("ngModel",i.height),X0(),Lp(),pw("ngModel",i.title),X0(),Lp(),ox(i.isTypeGrid()?9:-1),Lp(5),pw("ngModel",i.isTypeGauge),X0(),Lp(),pw("ngModel",i.isTypeRadar),X0(),Lp(),ox(i.isTypeGauge?16:-1),Lp(),ox(i.isTypeRadar?17:-1),Lp(2),pw("ngModel",i.label),X0(),Lp(),ox(i.isTypeGauge?-1:20),Lp(),pw("ngModel",i.serieType),ZE("p-disabled",i.disabledType)("p-options",i.typeOptions),X0(),Lp(),ZE("p-disabled",i.disabledTooltip),pw("ngModel",i.tooltip),X0(),Lp(),pw("ngModel",i.color),X0(),Lp(),ox(i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"?24:-1),Lp(),ox(i.isTypeGauge?25:-1),Lp(),ox(i.isTypeGauge?26:-1),Lp(),ox(i.isTypeRadar?-1:27),Lp(3),Fx(i.isTypeRadar?"po-md-3":"po-md-4"),ZE("p-label",i.isTypeRadar?"Indicators":"Categories")("p-help",i.isTypeRadar?i.helpRadar:i.helpGeneric),pw("ngModel",i.categories),X0(),Lp(),ox(i.isTypeRadar?31:-1),Lp(4),pw("ngModel",i.options.axis.minRange),X0(),Lp(),pw("ngModel",i.options.axis.maxRange),X0(),Lp(),pw("ngModel",i.options.axis.gridLines),X0(),Lp(),ZE("p-options",i.labelTypeOptions),pw("ngModel",i.options.axis.labelType),X0(),Lp(),pw("ngModel",i.options.axis.paddingBottom),X0(),Lp(),pw("ngModel",i.options.axis.paddingLeft),X0(),Lp(),pw("ngModel",i.options.axis.paddingRight),X0(),Lp(),pw("ngModel",i.options.axis.rotateLegend),X0(),Lp(),pw("ngModel",i.options.innerRadius),X0(),Lp(),pw("ngModel",i.options.borderRadius),X0(),Lp(),pw("ngModel",i.options.firstColumnName),X0(),Lp(),pw("ngModel",i.options.textCenterGraph),X0(),Lp(),pw("ngModel",i.options.descriptionChart),X0(),Lp(),pw("ngModel",i.options.subtitleGauge),X0(),Lp(2),ZE("p-columns",2)("p-options",i.optionsHeader),pw("ngModel",i.selectedValuesHeader),X0(),Lp(),ZE("p-columns",2)("p-options",i.optionsAxis),pw("ngModel",i.selectedValuesAxis),X0(),Lp(),ZE("p-columns",2)("p-options",i.optionsDataZoom),pw("ngModel",i.selectedValuesDataZoom),X0(),Lp(),ZE("p-columns",1)("p-options",oN(83,q,iN(82,ze))),pw("ngModel",i.selectedValuesFillPoints),X0(),Lp(),ZE("p-options",oN(86,q,iN(85,He))),pw("ngModel",i.selectedValuesLegend),X0(),Lp(),ZE("p-options",oN(89,q,iN(88,Ze))),pw("ngModel",i.selectedRoseType),X0(),Lp(),ZE("p-options",oN(92,q,iN(91,Ye))),pw("ngModel",i.selectedFromToLegend),X0(),Lp(),ZE("p-options",oN(95,q,iN(94,je))),pw("ngModel",i.selectedPointer),X0(),Lp(),ZE("p-options",oN(98,q,iN(97,Ue))),pw("ngModel",i.selectedStacked),X0(),Lp(),ZE("p-options",i.optionsLegendVerticalPosition),pw("ngModel",i.selectedLegendVerticalPosition),X0(),Lp(),ZE("p-options",i.optionsLegendPosition),pw("ngModel",i.selectedLegendPosition),X0(),Lp(),ZE("p-options",i.optionsLegendType),pw("ngModel",i.selectedLegendType),X0(),Lp(),ZE("p-options",i.optionsRendererOption),pw("ngModel",i.selectedRendererOption),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,Sde,_v,L3,q3,Hhe,Nde,nme,H3,sme],encapsulation:2,changeDetection:1})}return r})();var rt=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Chart Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-chart
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-chart-labs"),og(),Hl(23,"hr")),d&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,rt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ye],encapsulation:2})}return r})();var _e=(()=>{class r{poAlert=f(Qde);participationByCountryInWorldExportsType=Yo.Line;evolutionOfCoffeeAndSomeCompetitorsType=Yo.Column;coffeConsumingChartType=Yo.Donut;consumptionPerCapitaType=Yo.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:Yo.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:Yo.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:Yo.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:Yo.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"},{label:"Germany",data:5.2,tooltip:"Germany (Europe)"},{label:"Denmark",data:5.1,tooltip:"Denmark (Europe)"},{label:"Sweden",data:4.9,tooltip:"Sweden (Europe)"},{label:"Switzerland",data:4.8,tooltip:"Switzerland (Europe)"},{label:"Belgium",data:4.6,tooltip:"Belgium (Europe)"},{label:"Canada",data:4.5,tooltip:"Canada (North America)"},{label:"Brazil",data:4.3,tooltip:"Brazil (South America)"},{label:"Italy",data:4.2,tooltip:"Italy (Europe)"},{label:"France",data:4.1,tooltip:"France (Europe)"},{label:"USA",data:4,tooltip:"USA (North America)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10",tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:"Vietnam",data:[15,17,23,19,22,18],tooltip:"Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%"},{label:"Colombia",data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:Yo.Column},{label:"2017",data:[93,52,18],type:Yo.Column},{label:"2020",data:[95,21,-17],type:Yo.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:Yo.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:true,borderRadius:8};coffeeConsumptionOptions={legendType:"scroll"};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:E3.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:true};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:E3.Number},dataZoom:true};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:true}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,"_blank");}showMeTheDates(l){this.poAlert.alert({title:"Statistic",message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}});}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:false,features:[we$1([Qde])],decls:28,vars:22,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 15 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-options","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(d,i){d&1&&(Cl(0,"div",0)(1,"div",1)(2,"div",0),Hl(3,"po-chart",2)(4,"po-chart",3),og()(),Cl(5,"div",1),Hl(6,"po-chart",4),og(),Cl(7,"div",5)(8,"po-chart",6),dt("p-series-click",function(m){return i.searchMore(m)}),og(),Cl(9,"po-chart",7),dt("p-series-click",function(m){return i.showMeTheDates(m)}),og()(),Cl(10,"div",0),Hl(11,"po-chart",8),Cl(12,"div",9)(13,"po-widget",10)(14,"div",11),qx(15,"66 billion"),og(),Cl(16,"div",12),qx(17,"cups of coffee are consumed per year in U.S."),og()(),Cl(18,"po-widget",10)(19,"div",11),qx(20,"2nd most"),og(),Cl(21,"div",12),qx(22,"traded commodity in the world second to Oil."),og()()()()(),Cl(23,"div",0)(24,"po-container",13)(25,"div",14),qx(26,"Top 10 Largest Coffee Chains in the World"),og(),Hl(27,"po-table",15),og()()),d&2&&(Lp(3),ZE("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),Lp(),ZE("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),Lp(2),ZE("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),Lp(2),ZE("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),Lp(),ZE("p-series",i.coffeeConsumption)("p-options",i.coffeeConsumptionOptions)("p-type",i.coffeConsumingChartType),Lp(2),ZE("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),Lp(16),ZE("p-items",i.items)("p-hide-table-search",false));},dependencies:[Sde,gc,U3,ONe],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r}),Pe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Chart - Coffee Ranking"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-chart-coffee-ranking"),og(),Hl(23,"hr")),d&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,pt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,_e],encapsulation:2})}return r})();var Te=(()=>{class r{typeBar=Yo.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:true};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked"]],standalone:false,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(d,i){d&1&&(Cl(0,"po-container")(1,"div",0),qx(2,"Energy and Climate Analysis"),og(),Cl(3,"div",1),Hl(4,"po-chart",2)(5,"po-chart",3),og()()),d&2&&(Lp(4),ZE("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),Lp(),ZE("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar));},dependencies:[Sde,gc],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r}),we=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Chart - Stacked"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-chart-stacked"),og(),Hl(23,"hr")),d&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ct,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Te],encapsulation:2})}return r})();var Le=(()=>{class r{type=Yo.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary"]],standalone:false,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(d,i){d&1&&(Cl(0,"po-container")(1,"div",0),qx(2,"Sales Performance"),og(),Cl(3,"div",1)(4,"div",2),Hl(5,"po-chart",3),og(),Cl(6,"div",2),Hl(7,"po-chart",4),og()()()),d&2&&(Lp(5),ZE("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),Lp(2),ZE("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges));},dependencies:[Sde,gc],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r}),Me=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Chart - Summary"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-chart-summary"),og(),Hl(23,"hr")),d&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ht,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Le],encapsulation:2})}return r})();var ke=(()=>{class r{participationByCountryInWorldExportsType=Yo.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:true};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:false,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(d,i){d&1&&(Cl(0,"div",0),Hl(1,"po-chart",1),og()),d&2&&(Lp(),ZE("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel));},dependencies:[Sde],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),De=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Chart - World Exports"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-chart-world-exports"),og(),Hl(23,"hr")),d&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,bt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ke],encapsulation:2})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:"Frontend Development",max:100},{name:"Backend Development",max:100},{name:"Database Design",max:100},{name:"Cloud & DevOps",max:100},{name:"Testing & Quality",max:100},{name:"System Architecture",max:100}],splitArea:true,shape:"circle"};radarConfigMovies={indicator:[{name:"Storytelling",max:100},{name:"Characters",max:100},{name:"Visual Effects",max:100},{name:"Soundtrack",max:100},{name:"Pacing",max:100},{name:"Rewatchability",max:100}],splitArea:true};type=Yo.Radar;series=[{label:"Team Alpha",data:[82,50,78,70,88,81]},{label:"Team Beta",data:[65,83,72,89,60,74]},{label:"Team Delta",data:[45,21,33,65,24,58]},{label:"Team Omega",data:[60,49,19,58,94,59]}];seriesMovies=[{label:"Sci-Fi",data:[60,53,45,58,42,55]},{label:"Fantasy",data:[53,80,66,71,75,88]},{label:"Drama",data:[92,31,98,60,88,72]},{label:"Thriller",data:[44,56,75,84,90,80]}];radarOptions={areaStyle:true};static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill"]],standalone:false,decls:3,vars:6,consts:[[1,"po-row"],["p-title","Technology Skill Assessment",1,"po-md-6",3,"p-categories","p-type","p-series"],["p-title","Genre Popularity","p-type","radar",1,"po-md-6",3,"p-categories","p-series","p-options"]],template:function(d,i){d&1&&(Cl(0,"div",0),Hl(1,"po-chart",1)(2,"po-chart",2),og()),d&2&&(Lp(),ZE("p-categories",i.radarConfig)("p-type",i.type)("p-series",i.series),Lp(),ZE("p-categories",i.radarConfigMovies)("p-series",i.seriesMovies)("p-options",i.radarOptions));},dependencies:[Sde],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r}),Ae=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Chart - Radar"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-chart-technology-skill"),og(),Hl(23,"hr")),d&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ft,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ve],encapsulation:2})}return r})();var Re=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-doc"]],standalone:false,decls:2833,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","PoChartRadarOptions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'plain'"],["pan","",1,"docs-api-property-type","'scroll'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],["pan","",1,"docs-api-property-type","Array<PoChartIndicatorOptions>"],["pan","",1,"docs-api-property-type","'polygon'"],["pan","",1,"docs-api-property-type","'circle'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["pan","",1,"docs-api-property-type","((params:","any)","=>","string)"],[1,"language-ts"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(d,i){d&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoChartModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-chart"),og(),qx(9,"."),og()(),Cl(10,"h3",3),qx(11,"Componente"),og(),Cl(12,"h4",4)(13,"code",5),qx(14,"PoChartComponent"),og()(),Cl(15,"div",2)(16,"p"),qx(17,"O "),Cl(18,"code"),qx(19,"po-chart"),og(),qx(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),og(),Cl(21,"p"),qx(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),og(),Cl(23,"p"),qx(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),og(),Cl(25,"p"),qx(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Cl(27,"em"),qx(28,"mouse"),og(),qx(29," sobre o elemento."),og(),Cl(30,"h4"),qx(31,"Guia de uso para Gr\xE1ficos"),og(),Cl(32,"blockquote")(33,"p"),qx(34,"Veja nosso "),Cl(35,"a",6),qx(36,"guia de uso para gr\xE1ficos"),og(),qx(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),og()(),Cl(38,"h4"),qx(39,"Tokens customiz\xE1veis"),og(),Cl(40,"p"),qx(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(42,"blockquote")(43,"p"),qx(44,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(45,"a",7),qx(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(47,"."),og()(),Cl(48,"table")(49,"thead")(50,"tr")(51,"th"),qx(52,"Propriedade"),og(),Cl(53,"th"),qx(54,"Descri\xE7\xE3o"),og(),Cl(55,"th"),qx(56,"Valor Padr\xE3o"),og()()(),Cl(57,"tbody")(58,"tr")(59,"td")(60,"strong"),qx(61,"Chart (po-chart)"),og()(),Hl(62,"td")(63,"td"),og(),Cl(64,"tr")(65,"td")(66,"code"),qx(67,"--background-color-grid"),og()(),Cl(68,"td"),qx(69,"Cor de background dos gr\xE1ficos"),og(),Cl(70,"td")(71,"code"),qx(72,"var(--color-neutral-light-00)"),og()()(),Cl(73,"tr")(74,"td")(75,"code"),qx(76,"--color-description-chart"),og()(),Cl(77,"td"),qx(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),og(),Cl(79,"td")(80,"code"),qx(81,"var(--color-neutral-dark-70)"),og()()(),Cl(82,"tr")(83,"td")(84,"code"),qx(85,"--font-family-description-chart"),og()(),Cl(86,"td"),qx(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),og(),Cl(88,"td")(89,"code"),qx(90,"var(--font-family-theme)"),og()()(),Cl(91,"tr")(92,"td")(93,"code"),qx(94,"--font-size-description-chart"),og()(),Cl(95,"td"),qx(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),og(),Cl(97,"td")(98,"code"),qx(99,"var(--font-size-sm)"),og()()(),Cl(100,"tr")(101,"td")(102,"code"),qx(103,"--font-weight-description-chart"),og()(),Cl(104,"td"),qx(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),og(),Cl(106,"td")(107,"code"),qx(108,"var(--font-weight-normal)"),og()()(),Cl(109,"tr")(110,"td")(111,"strong"),qx(112,"Header (po-chart .po-chart-header )"),og()(),Hl(113,"td")(114,"td"),og(),Cl(115,"tr")(116,"td")(117,"code"),qx(118,"--background-color"),og()(),Cl(119,"td"),qx(120,"Cor de background do cabe\xE7alho"),og(),Cl(121,"td")(122,"code"),qx(123,"var(--color-neutral-light-00)"),og()()(),Cl(124,"tr")(125,"td")(126,"code"),qx(127,"--color"),og()(),Cl(128,"td"),qx(129,"Cor da fonte do cabe\xE7alho"),og(),Cl(130,"td")(131,"code"),qx(132,"var(--color-neutral-dark-70)"),og()()(),Cl(133,"tr")(134,"td")(135,"code"),qx(136,"--font-family"),og()(),Cl(137,"td"),qx(138,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(139,"td")(140,"code"),qx(141,"var(--font-family-theme)"),og()()(),Cl(142,"tr")(143,"td")(144,"code"),qx(145,"--font-size-title"),og()(),Cl(146,"td"),qx(147,"Tamanho da fonte"),og(),Cl(148,"td")(149,"code"),qx(150,"var(--font-size-default)"),og()()(),Cl(151,"tr")(152,"td")(153,"code"),qx(154,"--font-size-icons"),og()(),Cl(155,"td"),qx(156,"Tamanho dos \xEDcones"),og(),Cl(157,"td")(158,"code"),qx(159,"var(--font-size-md)"),og()()(),Cl(160,"tr")(161,"td")(162,"code"),qx(163,"--font-weight"),og()(),Cl(164,"td"),qx(165,"Peso da fonte"),og(),Cl(166,"td")(167,"code"),qx(168,"var(--font-weight-bold)"),og()()(),Cl(169,"tr")(170,"td")(171,"strong"),qx(172,"Chart (po-chart .po-chart)"),og()(),Hl(173,"td")(174,"td"),og(),Cl(175,"tr")(176,"td")(177,"code"),qx(178,"--color-grid"),og()(),Cl(179,"td"),qx(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),og(),Cl(181,"td")(182,"code"),qx(183,"var(--color-neutral-light-20)"),og()()(),Cl(184,"tr")(185,"td")(186,"code"),qx(187,"--font-family-grid"),og()(),Cl(188,"td"),qx(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),og(),Cl(190,"td")(191,"code"),qx(192,"var(--font-family-theme)"),og()()(),Cl(193,"tr")(194,"td")(195,"code"),qx(196,"--font-size-grid"),og()(),Cl(197,"td"),qx(198,"Tamanho da fonte usada nos valores dos eixos"),og(),Cl(199,"td")(200,"code"),qx(201,"var(--font-size-xs)"),og()()(),Cl(202,"tr")(203,"td")(204,"code"),qx(205,"--font-weight-grid"),og()(),Cl(206,"td"),qx(207,"Peso da fonte usada nos valores dos eixos"),og(),Cl(208,"td")(209,"code"),qx(210,"var(--font-weight-normal)"),og()()(),Cl(211,"tr")(212,"td")(213,"code"),qx(214,"--color-legend"),og()(),Cl(215,"td"),qx(216,"Cor da fonte da legenda"),og(),Cl(217,"td")(218,"code"),qx(219,"var(--color-neutral-dark-70)"),og()()(),Cl(220,"tr")(221,"td")(222,"code"),qx(223,"--color-legend-scroll-icon-active"),og()(),Cl(224,"td"),qx(225,"Cor do \xEDcone de scroll da legenda no estado ativo, pro tipo "),Cl(226,"code"),qx(227,"scroll"),og()(),Cl(228,"td")(229,"code"),qx(230,"var(--color-action-default)"),og()()(),Cl(231,"tr")(232,"td")(233,"code"),qx(234,"--color-legend-scroll-icon-inactive"),og()(),Cl(235,"td"),qx(236,"Cor do \xEDcone de scroll da legenda no estado inativo, pro tipo "),Cl(237,"code"),qx(238,"scroll"),og()(),Cl(239,"td")(240,"code"),qx(241,"var(--color-action-disabled)"),og()()(),Cl(242,"tr")(243,"td")(244,"code"),qx(245,"--border-radius-bar"),og()(),Cl(246,"td"),qx(247,"Tamanho da borda nos graficos "),Cl(248,"code"),qx(249,"Bar"),og(),qx(250," e "),Cl(251,"code"),qx(252,"Column"),og()(),Cl(253,"td")(254,"code"),qx(255,"var(--border-radius-none)"),og()()(),Cl(256,"tr")(257,"td")(258,"code"),qx(259,"--border-color"),og()(),Cl(260,"td"),qx(261,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),Cl(262,"code"),qx(263,"Donut"),og(),qx(264," e "),Cl(265,"code"),qx(266,"Pie"),og()(),Cl(267,"td")(268,"code"),qx(269,"var(--color-neutral-light-00)"),og()()(),Cl(270,"tr")(271,"td")(272,"code"),qx(273,"--color-hightlight-value"),og()(),Cl(274,"td"),qx(275,"Cor do valor de destaque nos Gr\xE1ficos "),Cl(276,"code"),qx(277,"Donut"),og(),qx(278," e "),Cl(279,"code"),qx(280,"Gauge"),og()(),Cl(281,"td")(282,"code"),qx(283,"var(--color-neutral-dark-70)"),og()()(),Cl(284,"tr")(285,"td")(286,"code"),qx(287,"--font-family-hightlight-value"),og()(),Cl(288,"td"),qx(289,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),Cl(290,"code"),qx(291,"Donut"),og(),qx(292," e "),Cl(293,"code"),qx(294,"Gauge"),og()(),Cl(295,"td")(296,"code"),qx(297,"var(--font-family-theme)"),og()()(),Cl(298,"tr")(299,"td")(300,"code"),qx(301,"--font-weight-hightlight-value"),og()(),Cl(302,"td"),qx(303,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),Cl(304,"code"),qx(305,"Donut"),og(),qx(306," e "),Cl(307,"code"),qx(308,"Gauge"),og()(),Cl(309,"td")(310,"code"),qx(311,"var(--font-weight-bold)"),og()()(),Cl(312,"tr")(313,"td")(314,"code"),qx(315,"--color-base-gauge"),og()(),Cl(316,"td"),qx(317,"Cor da base do gr\xE1fico "),Cl(318,"code"),qx(319,"Gauge"),og()(),Cl(320,"td")(321,"code"),qx(322,"var(--color-neutral-light-20)"),og()()(),Cl(323,"tr")(324,"td")(325,"code"),qx(326,"--color-gauge-pointer-color"),og()(),Cl(327,"td"),qx(328,"Cor do ponteiro do gr\xE1fico "),Cl(329,"code"),qx(330,"Gauge"),og()(),Cl(331,"td")(332,"code"),qx(333,"var(--color-neutral-dark-70)"),og()()(),Cl(334,"tr")(335,"td")(336,"code"),qx(337,"--color-chart-line-point-fill"),og()(),Cl(338,"td"),qx(339,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),Cl(340,"code"),qx(341,"Line"),og(),qx(342," e "),Cl(343,"code"),qx(344,"Area"),og()(),Cl(345,"td")(346,"code"),qx(347,"var(--color-neutral-light-00)"),og()()(),Cl(348,"tr")(349,"td")(350,"code"),qx(351,"--border-color-radar"),og()(),Cl(352,"td"),qx(353,"Cor do eixo da grid do gr\xE1fico "),Cl(354,"code"),qx(355,"Radar"),og()(),Cl(356,"td")(357,"code"),qx(358,"var(--color-neutral-light-30)"),og()()(),Cl(359,"tr")(360,"td")(361,"code"),qx(362,"--color-background-zebra"),og()(),Cl(363,"td"),qx(364,"Cor das \xE1reas alternadas (efeito zebrado) da grid do gr\xE1fico "),Cl(365,"code"),qx(366,"Radar"),og()(),Cl(367,"td")(368,"code"),qx(369,"var(--color-neutral-light-10)"),og()()(),Cl(370,"tr")(371,"td")(372,"code"),qx(373,"--color-background-line"),og()(),Cl(374,"td"),qx(375,"Cor das \xE1reas entre as faixas zebradas da grade do "),Cl(376,"code"),qx(377,"Radar"),og()(),Cl(378,"td")(379,"code"),qx(380,"none"),og()()(),Cl(381,"tr")(382,"td")(383,"strong"),qx(384,"Wrapper (.po-chart-container-gauge)"),og()(),Hl(385,"td")(386,"td"),og(),Cl(387,"tr")(388,"td")(389,"code"),qx(390,"--background-color-container-gauge"),og()(),Cl(391,"td"),qx(392,"Cor de background do container do gauge"),og(),Cl(393,"td")(394,"code"),qx(395,"var(--color-neutral-light-00)"),og()()()()()(),Cl(396,"div",8)(397,"h4",9),qx(398,"Seletor"),og(),Cl(399,"pre",10),qx(400,`<po-chart
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
`),og()(),Cl(401,"h4",11),qx(402,"Propriedades"),og(),Cl(403,"table",12)(404,"tr",13)(405,"th",14),qx(406,"Nome"),og(),Cl(407,"th",14),qx(408,"Tipo"),og(),Cl(409,"th",14),qx(410,"Padr\xE3o"),og(),Cl(411,"th",14),qx(412,"Descri\xE7\xE3o"),og()(),Cl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),qx(417," p-categories"),Hl(418,"br"),og()()(),Cl(419,"td",19)(420,"code",20),qx(421,"Array<string> "),og(),Cl(422,"code",21),qx(423," PoChartRadarOptions"),og()(),Cl(424,"td",22),qx(425,"-"),og(),Cl(426,"td",23)(427,"em")(428,"strong"),qx(429,"(opcional)"),og()(),Cl(430,"p"),qx(431,"Define os valores utilizados na constru\xE7\xE3o das categorias do gr\xE1fico."),og(),Cl(432,"p"),qx(433,"Para gr\xE1ficos dos tipos "),Cl(434,"em"),qx(435,"bar"),og(),qx(436,", "),Cl(437,"em"),qx(438,"area"),og(),qx(439,", "),Cl(440,"em"),qx(441,"column"),og(),qx(442," e "),Cl(443,"em"),qx(444,"line"),og(),qx(445,", representa os nomes das categorias exibidas no eixo."),og(),Cl(446,"p"),qx(447,"Para gr\xE1ficos do tipo "),Cl(448,"em"),qx(449,"radar"),og(),qx(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Cl(451,"code"),qx(452,"Radar"),og(),qx(453,"."),og(),Cl(454,"blockquote")(455,"p"),qx(456,"Caso nenhum valor seja informado, ser\xE1 utilizado um h\xEDfen como categoria correspondente para cada s\xE9rie."),og()(),Cl(457,"blockquote")(458,"p"),qx(459,"Gr\xE1ficos do tipo bar dimensionam sua \xE1rea considerando a largura do maior texto da categoria, sendo recomend\xE1vel utilizar r\xF3tulos curtos para facilitar a leitura."),og()()()(),Cl(460,"tr",15)(461,"td",16)(462,"div",17)(463,"span",18),qx(464," p-custom-actions"),Hl(465,"br"),og()()(),Cl(466,"td",19)(467,"code",24),qx(468,"Array<PoPopupAction>"),og()(),Cl(469,"td",22),qx(470,"-"),og(),Cl(471,"td",23)(472,"em")(473,"strong"),qx(474,"(opcional)"),og()(),Cl(475,"p"),qx(476,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),og()()(),Cl(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),qx(481," p-data-label"),Hl(482,"br"),og()()(),Cl(483,"td",19)(484,"code",25),qx(485,"PoChartDataLabel"),og()(),Cl(486,"td",22),qx(487,"-"),og(),Cl(488,"td",23)(489,"em")(490,"strong"),qx(491,"(opcional)"),og()(),Cl(492,"p"),qx(493,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),og(),Cl(494,"p"),qx(495,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),og(),Cl(496,"ul")(497,"li"),qx(498,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),og(),Cl(499,"li"),qx(500,"O "),Cl(501,"em"),qx(502,"tooltip"),og(),qx(503," n\xE3o ser\xE1 exibido."),og(),Cl(504,"li"),qx(505,"Os marcadores ("),Cl(506,"em"),qx(507,"bullets"),og(),qx(508,") ter\xE3o seu estilo ajustado."),og(),Cl(509,"li"),qx(510,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),og()(),Cl(511,"blockquote")(512,"p"),qx(513,"Dispon\xEDvel para gr\xE1ficos do tipo "),Cl(514,"code"),qx(515,"line"),og(),qx(516," e "),Cl(517,"code"),qx(518,"radar"),og(),qx(519,"."),og()(),Cl(520,"h4"),qx(521,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(522,"pre")(523,"code",26),qx(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),og()()()(),Cl(525,"tr",15)(526,"td",16)(527,"div",17)(528,"span",18),qx(529," p-height"),Hl(530,"br"),og()()(),Cl(531,"td",19)(532,"code",27),qx(533,"number"),og()(),Cl(534,"td",22)(535,"p")(536,"code"),qx(537,"400"),og()()(),Cl(538,"td",23)(539,"em")(540,"strong"),qx(541,"(opcional)"),og()(),Cl(542,"p"),qx(543,"Define a altura do gr\xE1fico em px."),og(),Cl(544,"blockquote")(545,"p"),qx(546,"No caso do tipo "),Cl(547,"code"),qx(548,"Gauge"),og(),qx(549,", o valor padr\xE3o \xE9 "),Cl(550,"code"),qx(551,"300"),og(),qx(552," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),og()()()(),Cl(553,"tr",15)(554,"td",16)(555,"div",17)(556,"span",18),qx(557," p-literals"),Hl(558,"br"),og()()(),Cl(559,"td",19)(560,"code",28),qx(561,"PoChartLiterals"),og()(),Cl(562,"td",22),qx(563,"-"),og(),Cl(564,"td",23)(565,"em")(566,"strong"),qx(567,"(opcional)"),og()(),Cl(568,"p"),qx(569,"Objeto com as literais usadas no "),Cl(570,"code"),qx(571,"po-chart"),og(),qx(572,"."),og(),Cl(573,"p"),qx(574,"Para utilizar basta passar a literal que deseja customizar:"),og(),Cl(575,"pre")(576,"code"),qx(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),og()(),Cl(578,"p"),qx(579,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Cl(580,"pre")(581,"code"),qx(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),og()(),Cl(583,"blockquote")(584,"p"),qx(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(586,"a",29)(587,"code"),qx(588,"PoI18nService"),og()(),qx(589," ou do browser."),og()()()(),Cl(590,"tr",15)(591,"td",16)(592,"div",17)(593,"span",18),qx(594," p-options"),Hl(595,"br"),og()()(),Cl(596,"td",19)(597,"code",30),qx(598,"PoChartOptions"),og()(),Cl(599,"td",22),qx(600,"-"),og(),Cl(601,"td",23)(602,"em")(603,"strong"),qx(604,"(opcional)"),og()(),Cl(605,"p"),qx(606,"Objeto com as configura\xE7\xF5es usadas no "),Cl(607,"code"),qx(608,"po-chart"),og(),qx(609,"."),og(),Cl(610,"p"),qx(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Cl(612,"em"),qx(613,"axis"),og(),qx(614,") para os gr\xE1ficos dos tipos "),Cl(615,"code"),qx(616,"area"),og(),qx(617,", "),Cl(618,"code"),qx(619,"line"),og(),qx(620,", "),Cl(621,"code"),qx(622,"column"),og(),qx(623,", "),Cl(624,"code"),qx(625,"bar"),og(),qx(626," e "),Cl(627,"code"),qx(628,"radar"),og(),qx(629," da seguinte forma:"),og(),Cl(630,"pre")(631,"code"),qx(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),og()()()(),Cl(633,"tr",15)(634,"td",16)(635,"div",17)(636,"span",18),qx(637," p-series"),Hl(638,"br"),og()()(),Cl(639,"td",19)(640,"code",31),qx(641,"Array<PoChartSerie>"),og()(),Cl(642,"td",22),qx(643,"-"),og(),Cl(644,"td",23)(645,"p"),qx(646,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),og()()(),Cl(647,"tr",15)(648,"td",16)(649,"div",32)(650,"span",33),qx(651," (p-series-click)"),Hl(652,"br"),og()()(),Cl(653,"td",19)(654,"code",34),qx(655,"EventEmitter"),og()(),Cl(656,"td",22),qx(657,"-"),og(),Cl(658,"td",23)(659,"em")(660,"strong"),qx(661,"(opcional)"),og()(),Cl(662,"p"),qx(663,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),og(),Cl(664,"p"),qx(665,"O evento emitir\xE1 o seguinte par\xE2metro:"),og(),Cl(666,"ul")(667,"li")(668,"em"),qx(669,"donut"),og(),qx(670," e "),Cl(671,"em"),qx(672,"pie"),og(),qx(673,": um objeto contendo a categoria e valor da s\xE9rie."),og(),Cl(674,"li")(675,"em"),qx(676,"radar"),og(),qx(677,": um objeto contendo o nome da s\xE9rie e os valores."),og(),Cl(678,"li")(679,"em"),qx(680,"area"),og(),qx(681,", "),Cl(682,"em"),qx(683,"line"),og(),qx(684,", "),Cl(685,"em"),qx(686,"column"),og(),qx(687," e "),Cl(688,"em"),qx(689,"bar"),og(),qx(690,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),og()()()(),Cl(691,"tr",15)(692,"td",16)(693,"div",32)(694,"span",33),qx(695," (p-series-hover)"),Hl(696,"br"),og()()(),Cl(697,"td",19)(698,"code",34),qx(699,"EventEmitter"),og()(),Cl(700,"td",22),qx(701,"-"),og(),Cl(702,"td",23)(703,"em")(704,"strong"),qx(705,"(opcional)"),og()(),Cl(706,"p"),qx(707,"Evento executado quando o usu\xE1rio passar o "),Cl(708,"em"),qx(709,"mouse"),og(),qx(710," sobre um elemento do gr\xE1fico."),og(),Cl(711,"p"),qx(712,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),og(),Cl(713,"ul")(714,"li")(715,"em"),qx(716,"donut"),og(),qx(717," e "),Cl(718,"em"),qx(719,"pie"),og(),qx(720,": um objeto contendo a categoria e valor da s\xE9rie."),og(),Cl(721,"li")(722,"em"),qx(723,"radar"),og(),qx(724,": um objeto contendo o nome da s\xE9rie e os valores."),og(),Cl(725,"li")(726,"em"),qx(727,"area"),og(),qx(728,", "),Cl(729,"em"),qx(730,"line"),og(),qx(731,", "),Cl(732,"em"),qx(733,"column"),og(),qx(734," e "),Cl(735,"em"),qx(736,"bar"),og(),qx(737,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),og()()()(),Cl(738,"tr",15)(739,"td",16)(740,"div",17)(741,"span",18),qx(742," p-title"),Hl(743,"br"),og()()(),Cl(744,"td",19)(745,"code",35),qx(746,"string"),og()(),Cl(747,"td",22),qx(748,"-"),og(),Cl(749,"td",23)(750,"em")(751,"strong"),qx(752,"(opcional)"),og()(),Cl(753,"p"),qx(754,"Define o t\xEDtulo do gr\xE1fico."),og()()(),Cl(755,"tr",15)(756,"td",16)(757,"div",17)(758,"span",18),qx(759," p-type"),Hl(760,"br"),og()()(),Cl(761,"td",19)(762,"code",36),qx(763,"PoChartType"),og()(),Cl(764,"td",22),qx(765,"-"),og(),Cl(766,"td",23)(767,"em")(768,"strong"),qx(769,"(opcional)"),og()(),Cl(770,"p"),qx(771,"Define o tipo de gr\xE1fico."),og(),Cl(772,"p"),qx(773,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),Cl(774,"code"),qx(775,"type"),og(),qx(776," conforme a interface "),Cl(777,"code"),qx(778,"PoChartSerie"),og(),qx(779,"."),og(),Cl(780,"blockquote")(781,"p"),qx(782,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),Cl(783,"code"),qx(784,"p-type"),og(),qx(785," quanto em "),Cl(786,"code"),qx(787,"PochartSerie.type"),og(),qx(788,", o valor "),Cl(789,"code"),qx(790,"{ type }"),og(),qx(791," da primeira s\xE9rie anular\xE1 o valor definido em "),Cl(792,"code"),qx(793,"p-type"),og(),qx(794,"."),og()(),Cl(795,"p"),qx(796,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),Cl(797,"code"),qx(798,"p-series"),og(),qx(799,":"),og(),Cl(800,"ul")(801,"li"),qx(802,"Se "),Cl(803,"code"),qx(804,"p-series = [{ data: [1,2,3] }]"),og(),qx(805,": ser\xE1 "),Cl(806,"code"),qx(807,"PoChartType.Column"),og(),qx(808,"."),og(),Cl(809,"li"),qx(810,"Se "),Cl(811,"code"),qx(812,"p-series = [{ data: 1 }]"),og(),qx(813,": ser\xE1 "),Cl(814,"code"),qx(815,"PoChartType.Pie"),og(),qx(816,"."),og()(),Cl(817,"blockquote")(818,"p"),qx(819,"Veja os valores v\xE1lidos no "),Cl(820,"em"),qx(821,"enum"),og(),Cl(822,"code"),qx(823,"PoChartType"),og(),qx(824,"."),og()()()(),Cl(825,"tr",15)(826,"td",16)(827,"div",17)(828,"span",18),qx(829," p-value-gauge-multiple"),Hl(830,"br"),og()()(),Cl(831,"td",19)(832,"code",27),qx(833,"number"),og()(),Cl(834,"td",22),qx(835,"-"),og(),Cl(836,"td",23)(837,"em")(838,"strong"),qx(839,"(opcional)"),og()(),Cl(840,"p"),qx(841,"Define o valor do gr\xE1fico do tipo "),Cl(842,"code"),qx(843,"Gauge"),og(),qx(844," quando utliza as propriedades "),Cl(845,"code"),qx(846,"From"),og(),Cl(847,"code"),qx(848,"To"),og(),qx(849,"."),og()()()(),Cl(850,"h3"),qx(851,"Interfaces"),og(),Cl(852,"h4",37)(853,"code",5),qx(854,"PoChartAxisOptions"),og()(),Cl(855,"div",2)(856,"p")(857,"em"),qx(858,"Interface"),og(),qx(859," que define os eixos do grid."),og()(),Cl(860,"h4",11),qx(861,"Propriedades"),og(),Cl(862,"table",12)(863,"tr",13)(864,"th",14),qx(865,"Nome"),og(),Cl(866,"th",14),qx(867,"Tipo"),og(),Cl(868,"th",14),qx(869,"Descri\xE7\xE3o"),og()(),Cl(870,"tr",15)(871,"td",16)(872,"div",17)(873,"span",18),qx(874," gridLines"),Hl(875,"br"),og()()(),Cl(876,"td",19)(877,"code",27),qx(878,"number"),og()(),Cl(879,"td",23)(880,"em")(881,"strong"),qx(882,"(opcional)"),og()(),Cl(883,"p"),qx(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Cl(885,"code"),qx(886,"Area"),og(),qx(887,", "),Cl(888,"code"),qx(889,"Line"),og(),qx(890," e "),Cl(891,"code"),qx(892,"Column"),og(),qx(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Cl(894,"code"),qx(895,"Bar"),og(),qx(896,", tratar\xE1 as linhas verticais (eixo Y)."),og(),Cl(897,"p"),qx(898,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),og(),Cl(899,"ul")(900,"li"),qx(901,"Quantidade padr\xE3o de linhas: '5';"),og(),Cl(902,"li"),qx(903,"Quantidade m\xEDnima permitida: '2';"),og()()()(),Cl(904,"tr",15)(905,"td",16)(906,"div",17)(907,"span",18),qx(908," labelType"),Hl(909,"br"),og()()(),Cl(910,"td",19)(911,"code",38),qx(912,"PoChartLabelFormat"),og()(),Cl(913,"td",23)(914,"em")(915,"strong"),qx(916,"(opcional)"),og()(),Cl(917,"p"),qx(918,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),og()()(),Cl(919,"tr",15)(920,"td",16)(921,"div",17)(922,"span",18),qx(923," maxRange"),Hl(924,"br"),og()()(),Cl(925,"td",19)(926,"code",27),qx(927,"number"),og()(),Cl(928,"td",23)(929,"em")(930,"strong"),qx(931,"(opcional)"),og()(),Cl(932,"p"),qx(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),og(),Cl(934,"blockquote")(935,"p"),qx(936,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),og()()()(),Cl(937,"tr",15)(938,"td",16)(939,"div",17)(940,"span",18),qx(941," minRange"),Hl(942,"br"),og()()(),Cl(943,"td",19)(944,"code",27),qx(945,"number"),og()(),Cl(946,"td",23)(947,"em")(948,"strong"),qx(949,"(opcional)"),og()(),Cl(950,"p"),qx(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),og(),Cl(952,"blockquote")(953,"p"),qx(954,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),og()()()(),Cl(955,"tr",15)(956,"td",16)(957,"div",17)(958,"span",18),qx(959," paddingBottom"),Hl(960,"br"),og()()(),Cl(961,"td",19)(962,"code",27),qx(963,"number"),og()(),Cl(964,"td",23)(965,"em")(966,"strong"),qx(967,"(opcional)"),og()(),Cl(968,"p"),qx(969,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),og()()(),Cl(970,"tr",15)(971,"td",16)(972,"div",17)(973,"span",18),qx(974," paddingLeft"),Hl(975,"br"),og()()(),Cl(976,"td",19)(977,"code",27),qx(978,"number"),og()(),Cl(979,"td",23)(980,"em")(981,"strong"),qx(982,"(opcional)"),og()(),Cl(983,"p"),qx(984,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),og()()(),Cl(985,"tr",15)(986,"td",16)(987,"div",17)(988,"span",18),qx(989," paddingRight"),Hl(990,"br"),og()()(),Cl(991,"td",19)(992,"code",27),qx(993,"number"),og()(),Cl(994,"td",23)(995,"em")(996,"strong"),qx(997,"(opcional)"),og()(),Cl(998,"p"),qx(999,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),og()()(),Cl(1e3,"tr",15)(1001,"td",16)(1002,"div",17)(1003,"span",18),qx(1004," rotateLegend"),Hl(1005,"br"),og()()(),Cl(1006,"td",19)(1007,"code",27),qx(1008,"number"),og()(),Cl(1009,"td",23)(1010,"em")(1011,"strong"),qx(1012,"(opcional)"),og()(),Cl(1013,"p"),qx(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),og(),Cl(1015,"ul")(1016,"li"),qx(1017,"Valores negativos giram a legenda para a esquerda."),og(),Cl(1018,"li"),qx(1019,"Valores positivos giram a legenda para a direita."),og()(),Cl(1020,"p"),qx(1021,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),og()()(),Cl(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),qx(1026," showAxisDetails"),Hl(1027,"br"),og()()(),Cl(1028,"td",19)(1029,"code",39),qx(1030,"boolean"),og()(),Cl(1031,"td",23)(1032,"em")(1033,"strong"),qx(1034,"(opcional)"),og()(),Cl(1035,"p"),qx(1036,"Exibe a linha de detalhes que acompanha o mouse"),og()()(),Cl(1037,"tr",15)(1038,"td",16)(1039,"div",17)(1040,"span",18),qx(1041," showXAxis"),Hl(1042,"br"),og()()(),Cl(1043,"td",19)(1044,"code",39),qx(1045,"boolean"),og()(),Cl(1046,"td",23)(1047,"em")(1048,"strong"),qx(1049,"(opcional)"),og()(),Cl(1050,"p"),qx(1051,"Exibe a linha do eixo X"),og()()(),Cl(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),qx(1056," showYAxis"),Hl(1057,"br"),og()()(),Cl(1058,"td",19)(1059,"code",39),qx(1060,"boolean"),og()(),Cl(1061,"td",23)(1062,"em")(1063,"strong"),qx(1064,"(opcional)"),og()(),Cl(1065,"p"),qx(1066,"Exibe a linha do eixo Y"),og()()()(),Cl(1067,"h4",37)(1068,"code",5),qx(1069,"PoChartHeaderOptions"),og()(),Cl(1070,"div",2)(1071,"p")(1072,"em"),qx(1073,"Interface"),og(),qx(1074," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),og()(),Cl(1075,"h4",11),qx(1076,"Propriedades"),og(),Cl(1077,"table",12)(1078,"tr",13)(1079,"th",14),qx(1080,"Nome"),og(),Cl(1081,"th",14),qx(1082,"Tipo"),og(),Cl(1083,"th",14),qx(1084,"Descri\xE7\xE3o"),og()(),Cl(1085,"tr",15)(1086,"td",16)(1087,"div",17)(1088,"span",18),qx(1089," hideExpand"),Hl(1090,"br"),og()()(),Cl(1091,"td",19)(1092,"code",39),qx(1093,"boolean"),og()(),Cl(1094,"td",23)(1095,"em")(1096,"strong"),qx(1097,"(opcional)"),og()(),Cl(1098,"p"),qx(1099,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),og()()(),Cl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),qx(1104," hideExportCsv"),Hl(1105,"br"),og()()(),Cl(1106,"td",19)(1107,"code",39),qx(1108,"boolean"),og()(),Cl(1109,"td",23)(1110,"em")(1111,"strong"),qx(1112,"(opcional)"),og()(),Cl(1113,"p"),qx(1114,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),og()()(),Cl(1115,"tr",15)(1116,"td",16)(1117,"div",17)(1118,"span",18),qx(1119," hideExportImage"),Hl(1120,"br"),og()()(),Cl(1121,"td",19)(1122,"code",39),qx(1123,"boolean"),og()(),Cl(1124,"td",23)(1125,"em")(1126,"strong"),qx(1127,"(opcional)"),og()(),Cl(1128,"p"),qx(1129,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),og()()(),Cl(1130,"tr",15)(1131,"td",16)(1132,"div",17)(1133,"span",18),qx(1134," hideTableDetails"),Hl(1135,"br"),og()()(),Cl(1136,"td",19)(1137,"code",39),qx(1138,"boolean"),og()(),Cl(1139,"td",23)(1140,"em")(1141,"strong"),qx(1142,"(opcional)"),og()(),Cl(1143,"p"),qx(1144,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),og()()()(),Cl(1145,"h4",37)(1146,"code",5),qx(1147,"PoChartIndicatorOptions"),og()(),Cl(1148,"div",2)(1149,"p"),qx(1150,"Interface para configura\xE7\xF5es dos indicadores do gr\xE1fico "),Cl(1151,"code"),qx(1152,"radar"),og(),qx(1153,"."),og()(),Cl(1154,"h4",11),qx(1155,"Propriedades"),og(),Cl(1156,"table",12)(1157,"tr",13)(1158,"th",14),qx(1159,"Nome"),og(),Cl(1160,"th",14),qx(1161,"Tipo"),og(),Cl(1162,"th",14),qx(1163,"Descri\xE7\xE3o"),og()(),Cl(1164,"tr",15)(1165,"td",16)(1166,"div",17)(1167,"span",18),qx(1168," color"),Hl(1169,"br"),og()()(),Cl(1170,"td",19)(1171,"code",35),qx(1172,"string"),og()(),Cl(1173,"td",23)(1174,"em")(1175,"strong"),qx(1176,"(opcional)"),og()(),Cl(1177,"p"),qx(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),og(),Cl(1179,"blockquote")(1180,"p"),qx(1181,"Nome da cor, hexadecimal ou RGB."),og()()()(),Cl(1182,"tr",15)(1183,"td",16)(1184,"div",17)(1185,"span",18),qx(1186," max"),Hl(1187,"br"),og()()(),Cl(1188,"td",19)(1189,"code",27),qx(1190,"number"),og()(),Cl(1191,"td",23)(1192,"em")(1193,"strong"),qx(1194,"(opcional)"),og()(),Cl(1195,"p"),qx(1196,"Valor m\xE1ximo do indicator."),og(),Cl(1197,"p"),qx(1198,"A propriedade "),Cl(1199,"code"),qx(1200,"max"),og(),qx(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),og()()(),Cl(1202,"tr",15)(1203,"td",16)(1204,"div",17)(1205,"span",18),qx(1206," min"),Hl(1207,"br"),og()()(),Cl(1208,"td",19)(1209,"code",27),qx(1210,"number"),og()(),Cl(1211,"td",23)(1212,"em")(1213,"strong"),qx(1214,"(opcional)"),og()(),Cl(1215,"p"),qx(1216,"Valor m\xEDnimo do indicator, com valor padr\xE3o de 0."),og(),Cl(1217,"p"),qx(1218,"A propriedade "),Cl(1219,"code"),qx(1220,"min"),og(),qx(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),og()()(),Cl(1222,"tr",15)(1223,"td",16)(1224,"div",17)(1225,"span",18),qx(1226," name"),Hl(1227,"br"),og()()(),Cl(1228,"td",19)(1229,"code",35),qx(1230,"string"),og()(),Cl(1231,"td",23)(1232,"em")(1233,"strong"),qx(1234,"(opcional)"),og()(),Cl(1235,"p"),qx(1236,"Nome do indicator."),og()()()(),Cl(1237,"h4",37)(1238,"code",5),qx(1239,"PoChartLiterals"),og()(),Cl(1240,"div",2)(1241,"p"),qx(1242,"Interface para defini\xE7\xE3o dos literais usadas no "),Cl(1243,"code"),qx(1244,"po-chart"),og(),qx(1245,"."),og()(),Cl(1246,"h4",11),qx(1247,"Propriedades"),og(),Cl(1248,"table",12)(1249,"tr",13)(1250,"th",14),qx(1251,"Nome"),og(),Cl(1252,"th",14),qx(1253,"Tipo"),og(),Cl(1254,"th",14),qx(1255,"Descri\xE7\xE3o"),og()(),Cl(1256,"tr",15)(1257,"td",16)(1258,"div",17)(1259,"span",18),qx(1260," category"),Hl(1261,"br"),og()()(),Cl(1262,"td",19)(1263,"code",35),qx(1264,"string"),og()(),Cl(1265,"td",23)(1266,"em")(1267,"strong"),qx(1268,"(opcional)"),og()(),Cl(1269,"p"),qx(1270,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),Cl(1271,"code"),qx(1272,"Bar"),og(),qx(1273,"."),og()()(),Cl(1274,"tr",15)(1275,"td",16)(1276,"div",17)(1277,"span",18),qx(1278," downloadCSV"),Hl(1279,"br"),og()()(),Cl(1280,"td",19)(1281,"code",35),qx(1282,"string"),og()(),Cl(1283,"td",23)(1284,"em")(1285,"strong"),qx(1286,"(opcional)"),og()(),Cl(1287,"p"),qx(1288,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),og()()(),Cl(1289,"tr",15)(1290,"td",16)(1291,"div",17)(1292,"span",18),qx(1293," exportCSV"),Hl(1294,"br"),og()()(),Cl(1295,"td",19)(1296,"code",35),qx(1297,"string"),og()(),Cl(1298,"td",23)(1299,"em")(1300,"strong"),qx(1301,"(opcional)"),og()(),Cl(1302,"p"),qx(1303,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),og()()(),Cl(1304,"tr",15)(1305,"td",16)(1306,"div",17)(1307,"span",18),qx(1308," exportJPG"),Hl(1309,"br"),og()()(),Cl(1310,"td",19)(1311,"code",35),qx(1312,"string"),og()(),Cl(1313,"td",23)(1314,"em")(1315,"strong"),qx(1316,"(opcional)"),og()(),Cl(1317,"p"),qx(1318,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),og()()(),Cl(1319,"tr",15)(1320,"td",16)(1321,"div",17)(1322,"span",18),qx(1323," exportPNG"),Hl(1324,"br"),og()()(),Cl(1325,"td",19)(1326,"code",35),qx(1327,"string"),og()(),Cl(1328,"td",23)(1329,"em")(1330,"strong"),qx(1331,"(opcional)"),og()(),Cl(1332,"p"),qx(1333,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),og()()(),Cl(1334,"tr",15)(1335,"td",16)(1336,"div",17)(1337,"span",18),qx(1338," item"),Hl(1339,"br"),og()()(),Cl(1340,"td",19)(1341,"code",35),qx(1342,"string"),og()(),Cl(1343,"td",23)(1344,"em")(1345,"strong"),qx(1346,"(opcional)"),og()(),Cl(1347,"p"),qx(1348,"Texto dos t\xEDtulos das colunas "),Cl(1349,"code"),qx(1350,"Gauge"),og(),qx(1351," e n\xE3o possui label."),og()()(),Cl(1352,"tr",15)(1353,"td",16)(1354,"div",17)(1355,"span",18),qx(1356," serie"),Hl(1357,"br"),og()()(),Cl(1358,"td",19)(1359,"code",35),qx(1360,"string"),og()(),Cl(1361,"td",23)(1362,"em")(1363,"strong"),qx(1364,"(opcional)"),og()(),Cl(1365,"p"),qx(1366,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),Cl(1367,"code"),qx(1368,"Bar"),og(),qx(1369," e "),Cl(1370,"code"),qx(1371,"Gauge"),og(),qx(1372,"."),og()()(),Cl(1373,"tr",15)(1374,"td",16)(1375,"div",17)(1376,"span",18),qx(1377," value"),Hl(1378,"br"),og()()(),Cl(1379,"td",19)(1380,"code",35),qx(1381,"string"),og()(),Cl(1382,"td",23)(1383,"em")(1384,"strong"),qx(1385,"(opcional)"),og()(),Cl(1386,"p"),qx(1387,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),Cl(1388,"code"),qx(1389,"Gauge"),og(),qx(1390,"."),og()()()(),Cl(1391,"h4",37)(1392,"code",5),qx(1393,"PoChartOptions"),og()(),Cl(1394,"div",2)(1395,"p")(1396,"em"),qx(1397,"Interface"),og(),qx(1398," para configura\xE7\xF5es dos elementos do gr\xE1fico."),og()(),Cl(1399,"h4",11),qx(1400,"Propriedades"),og(),Cl(1401,"table",12)(1402,"tr",13)(1403,"th",14),qx(1404,"Nome"),og(),Cl(1405,"th",14),qx(1406,"Tipo"),og(),Cl(1407,"th",14),qx(1408,"Descri\xE7\xE3o"),og()(),Cl(1409,"tr",15)(1410,"td",16)(1411,"div",17)(1412,"span",18),qx(1413," areaStyle"),Hl(1414,"br"),og()()(),Cl(1415,"td",19)(1416,"code",39),qx(1417,"boolean"),og()(),Cl(1418,"td",23)(1419,"em")(1420,"strong"),qx(1421,"(opcional)"),og()(),Cl(1422,"p"),qx(1423,"Define se as s\xE9ries ter\xE3o sua \xE1rea preenchida."),og(),Cl(1424,"blockquote")(1425,"p"),qx(1426,"Esta propriedade tem preced\xEAncia sobre a defini\xE7\xE3o de "),Cl(1427,"code"),qx(1428,"areaStyle"),og(),qx(1429," em cada s\xE9rie, "),Cl(1430,"code"),qx(1431,"fillpoints"),og(),qx(1432," n\xE3o funciona quando "),Cl(1433,"code"),qx(1434,"areaStyle"),og(),qx(1435," est\xE1 definido como "),Cl(1436,"code"),qx(1437,"true"),og(),qx(1438,"."),og()()()(),Cl(1439,"tr",15)(1440,"td",16)(1441,"div",17)(1442,"span",18),qx(1443," axis"),Hl(1444,"br"),og()()(),Cl(1445,"td",19)(1446,"code",40),qx(1447,"PoChartAxisOptions"),og()(),Cl(1448,"td",23)(1449,"em")(1450,"strong"),qx(1451,"(opcional)"),og()(),Cl(1452,"p"),qx(1453,"Define um objeto do tipo "),Cl(1454,"code"),qx(1455,"PoChartAxisOptions"),og(),qx(1456," para configura\xE7\xE3o dos eixos."),og()()(),Cl(1457,"tr",15)(1458,"td",16)(1459,"div",17)(1460,"span",18),qx(1461," borderRadius"),Hl(1462,"br"),og()()(),Cl(1463,"td",19)(1464,"code",27),qx(1465,"number"),og()(),Cl(1466,"td",23)(1467,"em")(1468,"strong"),qx(1469,"(opcional)"),og()(),Cl(1470,"p"),qx(1471,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),Cl(1472,"code"),qx(1473,"Donut"),og(),qx(1474,", "),Cl(1475,"code"),qx(1476,"Pie"),og(),qx(1477,"."),og(),Cl(1478,"blockquote")(1479,"p"),qx(1480,"Valores v\xE1lidos entre 0 e 100,"),og()()()(),Cl(1481,"tr",15)(1482,"td",16)(1483,"div",17)(1484,"span",18),qx(1485," bottomDataZoom"),Hl(1486,"br"),og()()(),Cl(1487,"td",19)(1488,"code",39),qx(1489,"boolean "),og(),Cl(1490,"code",27),qx(1491," number"),og()(),Cl(1492,"td",23)(1493,"em")(1494,"strong"),qx(1495,"(opcional)"),og()(),Cl(1496,"p"),qx(1497,"Define a dist\xE2ncia inferior do componente DataZoom."),og(),Cl(1498,"p"),qx(1499,"Esta propriedade aceita os seguintes valores:"),og(),Cl(1500,"ul")(1501,"li")(1502,"p")(1503,"code"),qx(1504,"false"),og(),qx(1505," (padr\xE3o): n\xE3o aplica ajustes."),og()(),Cl(1506,"li")(1507,"p")(1508,"code"),qx(1509,"true"),og(),qx(1510,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),og(),Cl(1511,"ul")(1512,"li")(1513,"code"),qx(1514,"8"),og(),qx(1515," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),og(),Cl(1516,"li")(1517,"code"),qx(1518,"32"),og(),qx(1519," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),og()()(),Cl(1520,"li")(1521,"p")(1522,"code"),qx(1523,"number"),og(),qx(1524,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),og()()(),Cl(1525,"blockquote")(1526,"p"),qx(1527,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),Cl(1528,"code"),qx(1529,"dataZoom: true"),og(),qx(1530,")."),og()()()(),Cl(1531,"tr",15)(1532,"td",16)(1533,"div",17)(1534,"span",18),qx(1535," dataZoom"),Hl(1536,"br"),og()()(),Cl(1537,"td",19)(1538,"code",39),qx(1539,"boolean"),og()(),Cl(1540,"td",23)(1541,"em")(1542,"strong"),qx(1543,"(opcional)"),og()(),Cl(1544,"p"),qx(1545,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),og()()(),Cl(1546,"tr",15)(1547,"td",16)(1548,"div",17)(1549,"span",18),qx(1550," descriptionChart"),Hl(1551,"br"),og()()(),Cl(1552,"td",19)(1553,"code",35),qx(1554,"string"),og()(),Cl(1555,"td",23)(1556,"em")(1557,"strong"),qx(1558,"(opcional)"),og()(),Cl(1559,"p"),qx(1560,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),og()()(),Cl(1561,"tr",15)(1562,"td",16)(1563,"div",17)(1564,"span",18),qx(1565," fillPoints"),Hl(1566,"br"),og()()(),Cl(1567,"td",19)(1568,"code",39),qx(1569,"boolean"),og()(),Cl(1570,"td",23)(1571,"em")(1572,"strong"),qx(1573,"(opcional)"),og()(),Cl(1574,"p"),qx(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),og(),Cl(1576,"blockquote")(1577,"p"),qx(1578,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),Cl(1579,"code"),qx(1580,"Area"),og(),qx(1581,", "),Cl(1582,"code"),qx(1583,"Line"),og(),qx(1584," e "),Cl(1585,"code"),qx(1586,"Radar"),og(),qx(1587,`.
Para o tipo `),Cl(1588,"code"),qx(1589,"Radar"),og(),qx(1590,", o valor padr\xE3o \xE9 "),Cl(1591,"code"),qx(1592,"true"),og(),qx(1593,"."),og()()()(),Cl(1594,"tr",15)(1595,"td",16)(1596,"div",17)(1597,"span",18),qx(1598," firstColumnName"),Hl(1599,"br"),og()()(),Cl(1600,"td",19)(1601,"code",35),qx(1602,"string"),og()(),Cl(1603,"td",23)(1604,"em")(1605,"strong"),qx(1606,"(opcional)"),og()(),Cl(1607,"p"),qx(1608,"Valor que permite customizar o nome da "),Cl(1609,"code"),qx(1610,"TH"),og(),qx(1611," da primeira coluna da tabela descritiva."),og()()(),Cl(1612,"tr",15)(1613,"td",16)(1614,"div",17)(1615,"span",18),qx(1616," header"),Hl(1617,"br"),og()()(),Cl(1618,"td",19)(1619,"code",41),qx(1620,"PoChartHeaderOptions"),og()(),Cl(1621,"td",23)(1622,"em")(1623,"strong"),qx(1624,"(opcional)"),og()(),Cl(1625,"p"),qx(1626,"Define um objeto do tipo "),Cl(1627,"code"),qx(1628,"PoChartHeaderOptions"),og(),qx(1629," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),og()()(),Cl(1630,"tr",15)(1631,"td",16)(1632,"div",17)(1633,"span",18),qx(1634," innerRadius"),Hl(1635,"br"),og()()(),Cl(1636,"td",19)(1637,"code",27),qx(1638,"number"),og()(),Cl(1639,"td",23)(1640,"em")(1641,"strong"),qx(1642,"(opcional)"),og()(),Cl(1643,"p"),qx(1644,"Define o di\xE2metro, em valor percentual entre "),Cl(1645,"code"),qx(1646,"0"),og(),qx(1647," e "),Cl(1648,"code"),qx(1649,"100"),og(),qx(1650,", da \xE1rea central para gr\xE1ficos do tipo "),Cl(1651,"code"),qx(1652,"donut"),og(),qx(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Cl(1654,"code"),qx(1655,"40px"),og(),qx(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),og()()(),Cl(1657,"tr",15)(1658,"td",16)(1659,"div",17)(1660,"span",18),qx(1661," legend"),Hl(1662,"br"),og()()(),Cl(1663,"td",19)(1664,"code",39),qx(1665,"boolean"),og()(),Cl(1666,"td",23)(1667,"em")(1668,"strong"),qx(1669,"(opcional)"),og()(),Cl(1670,"p"),qx(1671,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),Cl(1672,"code"),qx(1673,"true"),og()()()(),Cl(1674,"tr",15)(1675,"td",16)(1676,"div",17)(1677,"span",18),qx(1678," legendPosition"),Hl(1679,"br"),og()()(),Cl(1680,"td",19)(1681,"code",42),qx(1682,"'left' "),og(),Cl(1683,"code",43),qx(1684," 'center' "),og(),Cl(1685,"code",44),qx(1686," 'right'"),og()(),Cl(1687,"td",23)(1688,"em")(1689,"strong"),qx(1690,"(opcional)"),og()(),Cl(1691,"p"),qx(1692,"Define o alinhamento horizontal da legenda."),og(),Cl(1693,"blockquote")(1694,"p"),qx(1695,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Cl(1696,"code"),qx(1697,"Gauge"),og(),qx(1698,"."),og()()()(),Cl(1699,"tr",15)(1700,"td",16)(1701,"div",17)(1702,"span",18),qx(1703," legendType"),Hl(1704,"br"),og()()(),Cl(1705,"td",19)(1706,"code",45),qx(1707,"'plain' "),og(),Cl(1708,"code",46),qx(1709," 'scroll'"),og()(),Cl(1710,"td",23)(1711,"em")(1712,"strong"),qx(1713,"(opcional)"),og()(),Cl(1714,"p"),qx(1715,"Define o tipo da legenda."),og(),Cl(1716,"ul")(1717,"li")(1718,"code"),qx(1719,"plain"),og(),qx(1720,": exibe todas as legendas de forma est\xE1tica."),og(),Cl(1721,"li")(1722,"code"),qx(1723,"scroll"),og(),qx(1724,": habilita rolagem quando a quantidade de legendas exceder o espa\xE7o dispon\xEDvel no gr\xE1fico."),og()(),Cl(1725,"blockquote")(1726,"p"),qx(1727,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Cl(1728,"code"),qx(1729,"Gauge"),og(),qx(1730,"."),og()()()(),Cl(1731,"tr",15)(1732,"td",16)(1733,"div",17)(1734,"span",18),qx(1735," legendVerticalPosition"),Hl(1736,"br"),og()()(),Cl(1737,"td",19)(1738,"code",47),qx(1739,"'top' "),og(),Cl(1740,"code",48),qx(1741," 'bottom'"),og()(),Cl(1742,"td",23)(1743,"em")(1744,"strong"),qx(1745,"(opcional)"),og()(),Cl(1746,"p"),qx(1747,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),og(),Cl(1748,"blockquote")(1749,"p"),qx(1750,"Quando utilizada com o valor "),Cl(1751,"code"),qx(1752,"top"),og(),qx(1753,", recomenda-se configurar tamb\xE9m a propriedade "),Cl(1754,"code"),qx(1755,"bottomDataZoom"),og(),qx(1756," caso o "),Cl(1757,"code"),qx(1758,"dataZoom"),og(),qx(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Cl(1760,"code"),qx(1761,"Gauge"),og(),qx(1762,"."),og()()()(),Cl(1763,"tr",15)(1764,"td",16)(1765,"div",17)(1766,"span",18),qx(1767," pointer"),Hl(1768,"br"),og()()(),Cl(1769,"td",19)(1770,"code",39),qx(1771,"boolean"),og()(),Cl(1772,"td",23)(1773,"em")(1774,"strong"),qx(1775,"(opcional)"),og()(),Cl(1776,"p"),qx(1777,"Define a exibi\xE7\xE3o do ponteiro."),og(),Cl(1778,"blockquote")(1779,"p"),qx(1780,"V\xE1lido para gr\xE1fico do tipo "),Cl(1781,"code"),qx(1782,"Gauge"),og(),qx(1783,"."),og()()()(),Cl(1784,"tr",15)(1785,"td",16)(1786,"div",17)(1787,"span",18),qx(1788," rendererOption"),Hl(1789,"br"),og()()(),Cl(1790,"td",19)(1791,"code",49),qx(1792,"'canvas' "),og(),Cl(1793,"code",50),qx(1794," 'svg'"),og()(),Cl(1795,"td",23)(1796,"em")(1797,"strong"),qx(1798,"(opcional)"),og()(),Cl(1799,"p"),qx(1800,"Define como o gr\xE1fico ser\xE1 renderizado."),og(),Cl(1801,"blockquote")(1802,"p"),qx(1803,"Recomenda-se n\xE3o modificar o valor da propriedade "),Cl(1804,"code"),qx(1805,"rendererOption"),og(),qx(1806," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),og()()()(),Cl(1807,"tr",15)(1808,"td",16)(1809,"div",17)(1810,"span",18),qx(1811," roseType"),Hl(1812,"br"),og()()(),Cl(1813,"td",19)(1814,"code",39),qx(1815,"boolean"),og()(),Cl(1816,"td",23)(1817,"em")(1818,"strong"),qx(1819,"(opcional)"),og()(),Cl(1820,"p"),qx(1821,"Transforma os gr\xE1ficos do tipo "),Cl(1822,"code"),qx(1823,"Donut"),og(),qx(1824," ou "),Cl(1825,"code"),qx(1826,"Pie"),og(),qx(1827," num gr\xE1fico de \xE1rea polar."),og(),Cl(1828,"blockquote")(1829,"p"),qx(1830,"V\xE1lido para os gr\xE1ficos "),Cl(1831,"code"),qx(1832,"Donut"),og(),qx(1833," e "),Cl(1834,"code"),qx(1835,"Pie"),og(),qx(1836,"."),og()()()(),Cl(1837,"tr",15)(1838,"td",16)(1839,"div",17)(1840,"span",18),qx(1841," showContainerGauge"),Hl(1842,"br"),og()()(),Cl(1843,"td",19)(1844,"code",39),qx(1845,"boolean"),og()(),Cl(1846,"td",23)(1847,"em")(1848,"strong"),qx(1849,"(opcional)"),og()(),Cl(1850,"p"),qx(1851,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),og(),Cl(1852,"blockquote")(1853,"p"),qx(1854,"V\xE1lido para gr\xE1fico do tipo "),Cl(1855,"code"),qx(1856,"Gauge"),og(),qx(1857,"."),og()()()(),Cl(1858,"tr",15)(1859,"td",16)(1860,"div",17)(1861,"span",18),qx(1862," showFromToLegend"),Hl(1863,"br"),og()()(),Cl(1864,"td",19)(1865,"code",39),qx(1866,"boolean"),og()(),Cl(1867,"td",23)(1868,"em")(1869,"strong"),qx(1870,"(opcional)"),og()(),Cl(1871,"p"),qx(1872,"Exibe os valores das propriedades "),Cl(1873,"code"),qx(1874,"from"),og(),qx(1875," e "),Cl(1876,"code"),qx(1877,"to"),og(),qx(1878," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),og(),Cl(1879,"blockquote")(1880,"p"),qx(1881,"V\xE1lido para gr\xE1fico do tipo "),Cl(1882,"code"),qx(1883,"Gauge"),og(),qx(1884,"."),og()()()(),Cl(1885,"tr",15)(1886,"td",16)(1887,"div",17)(1888,"span",18),qx(1889," stacked"),Hl(1890,"br"),og()()(),Cl(1891,"td",19)(1892,"code",39),qx(1893,"boolean"),og()(),Cl(1894,"td",23)(1895,"em")(1896,"strong"),qx(1897,"(opcional)"),og()(),Cl(1898,"p"),qx(1899,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),Cl(1900,"code"),qx(1901,"stackGroupName"),og(),qx(1902," da interface "),Cl(1903,"code"),qx(1904,"PoChartSerie"),og()(),Cl(1905,"blockquote")(1906,"p"),qx(1907,"V\xE1lido para gr\xE1fico do tipo "),Cl(1908,"code"),qx(1909,"Column"),og(),qx(1910," e "),Cl(1911,"code"),qx(1912,"Bar"),og(),qx(1913,"."),og()(),Cl(1914,"blockquote")(1915,"p"),qx(1916,"Essa propriedade habilita a propriedade "),Cl(1917,"code"),qx(1918,"p-data-label"),og(),qx(1919," por padr\xE3o, podendo ser desabilitada passando "),Cl(1920,"code"),qx(1921,"[p-data-label]={ fixed: false }"),og(),qx(1922,"."),og()()()(),Cl(1923,"tr",15)(1924,"td",16)(1925,"div",17)(1926,"span",18),qx(1927," subtitleGauge"),Hl(1928,"br"),og()()(),Cl(1929,"td",19)(1930,"code",35),qx(1931,"string"),og()(),Cl(1932,"td",23)(1933,"em")(1934,"strong"),qx(1935,"(opcional)"),og()(),Cl(1936,"p"),qx(1937,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),og(),Cl(1938,"blockquote")(1939,"p"),qx(1940,"V\xE1lido para gr\xE1fico do tipo "),Cl(1941,"code"),qx(1942,"Gauge"),og(),qx(1943,"."),og()()()(),Cl(1944,"tr",15)(1945,"td",16)(1946,"div",17)(1947,"span",18),qx(1948," textCenterGraph"),Hl(1949,"br"),og()()(),Cl(1950,"td",19)(1951,"code",35),qx(1952,"string"),og()(),Cl(1953,"td",23)(1954,"em")(1955,"strong"),qx(1956,"(opcional)"),og()(),Cl(1957,"p"),qx(1958,"Aplica texto centralizado customizado nos gr\xE1ficos de "),Cl(1959,"code"),qx(1960,"Donut"),og(),qx(1961,"."),og()()()(),Cl(1962,"h4",37)(1963,"code",5),qx(1964,"PoChartRadarOptions"),og()(),Cl(1965,"div",2)(1966,"p")(1967,"em"),qx(1968,"Interface"),og(),qx(1969," para configura\xE7\xF5es do gr\xE1fico "),Cl(1970,"code"),qx(1971,"radar"),og(),qx(1972,"."),og()(),Cl(1973,"h4",11),qx(1974,"Propriedades"),og(),Cl(1975,"table",12)(1976,"tr",13)(1977,"th",14),qx(1978,"Nome"),og(),Cl(1979,"th",14),qx(1980,"Tipo"),og(),Cl(1981,"th",14),qx(1982,"Descri\xE7\xE3o"),og()(),Cl(1983,"tr",15)(1984,"td",16)(1985,"div",17)(1986,"span",18),qx(1987," indicator"),Hl(1988,"br"),og()()(),Cl(1989,"td",19)(1990,"code",51),qx(1991,"Array<PoChartIndicatorOptions>"),og()(),Cl(1992,"td",23)(1993,"em")(1994,"strong"),qx(1995,"(opcional)"),og()(),Cl(1996,"p"),qx(1997,"Define as configura\xE7\xF5es dos indicadores do gr\xE1fico, como nome, cor, valor m\xEDnimo e valor m\xE1ximo."),og()()(),Cl(1998,"tr",15)(1999,"td",16)(2e3,"div",17)(2001,"span",18),qx(2002," shape"),Hl(2003,"br"),og()()(),Cl(2004,"td",19)(2005,"code",52),qx(2006,"'polygon' "),og(),Cl(2007,"code",53),qx(2008," 'circle'"),og()(),Cl(2009,"td",23)(2010,"em")(2011,"strong"),qx(2012,"(opcional)"),og()(),Cl(2013,"p"),qx(2014,"Define o formato da grid, podendo ser exibida como pol\xEDgono ou c\xEDrculo."),og()()(),Cl(2015,"tr",15)(2016,"td",16)(2017,"div",17)(2018,"span",18),qx(2019," splitArea"),Hl(2020,"br"),og()()(),Cl(2021,"td",19)(2022,"code",39),qx(2023,"boolean"),og()(),Cl(2024,"td",23)(2025,"em")(2026,"strong"),qx(2027,"(opcional)"),og()(),Cl(2028,"p"),qx(2029,"Define o efeito zebrado na grid."),og()()()(),Cl(2030,"h4",37)(2031,"code",5),qx(2032,"PoChartDataLabel"),og()(),Cl(2033,"div",2)(2034,"p"),qx(2035,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),Cl(2036,"code"),qx(2037,"po-chart"),og(),qx(2038,"."),og()(),Cl(2039,"h4",11),qx(2040,"Propriedades"),og(),Cl(2041,"table",12)(2042,"tr",13)(2043,"th",14),qx(2044,"Nome"),og(),Cl(2045,"th",14),qx(2046,"Tipo"),og(),Cl(2047,"th",14),qx(2048,"Descri\xE7\xE3o"),og()(),Cl(2049,"tr",15)(2050,"td",16)(2051,"div",17)(2052,"span",18),qx(2053," fixed"),Hl(2054,"br"),og()()(),Cl(2055,"td",19)(2056,"code",39),qx(2057,"boolean"),og()(),Cl(2058,"td",23)(2059,"em")(2060,"strong"),qx(2061,"(opcional)"),og()(),Cl(2062,"p"),qx(2063,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),og(),Cl(2064,"ul")(2065,"li"),qx(2066,"Quando definido como "),Cl(2067,"code"),qx(2068,"true"),og(),qx(2069,":"),Cl(2070,"ul")(2071,"li"),qx(2072,"O "),Cl(2073,"em"),qx(2074,"tooltip"),og(),qx(2075," n\xE3o ser\xE1 exibido."),og(),Cl(2076,"li"),qx(2077,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),og()()()(),Cl(2078,"blockquote")(2079,"p"),qx(2080,"Dispon\xEDvel para os tipo de gr\xE1fico "),Cl(2081,"code"),qx(2082,"PoChartType.Line"),og(),qx(2083,", "),Cl(2084,"code"),qx(2085,"PoChartType.Area"),og(),qx(2086,", "),Cl(2087,"code"),qx(2088,"PoChartType.Column"),og(),qx(2089,", "),Cl(2090,"code"),qx(2091,"PoChartType.Bar e PoChartType.Radar"),og(),qx(2092,"."),og()()()()(),Cl(2093,"h4",37)(2094,"code",5),qx(2095,"PoChartSerie"),og()(),Cl(2096,"div",2)(2097,"p"),qx(2098,"Interface das series din\xE2micas do "),Cl(2099,"code"),qx(2100,"po-chart"),og(),qx(2101," que possibilita desenhar gr\xE1ficos dos tipos "),Cl(2102,"code"),qx(2103,"area"),og(),qx(2104,", "),Cl(2105,"code"),qx(2106,"bar"),og(),qx(2107,", "),Cl(2108,"code"),qx(2109,"column"),og(),qx(2110,", "),Cl(2111,"code"),qx(2112,"line"),og(),qx(2113,", "),Cl(2114,"code"),qx(2115,"donut"),og(),qx(2116,", "),Cl(2117,"code"),qx(2118,"pie"),og(),qx(2119," e "),Cl(2120,"code"),qx(2121,"radar"),og()()(),Cl(2122,"h4",11),qx(2123,"Propriedades"),og(),Cl(2124,"table",12)(2125,"tr",13)(2126,"th",14),qx(2127,"Nome"),og(),Cl(2128,"th",14),qx(2129,"Tipo"),og(),Cl(2130,"th",14),qx(2131,"Descri\xE7\xE3o"),og()(),Cl(2132,"tr",15)(2133,"td",16)(2134,"div",17)(2135,"span",18),qx(2136," areaStyle"),Hl(2137,"br"),og()()(),Cl(2138,"td",19)(2139,"code",39),qx(2140,"boolean"),og()(),Cl(2141,"td",23)(2142,"em")(2143,"strong"),qx(2144,"(opcional)"),og()(),Cl(2145,"p"),qx(2146,"Define se a s\xE9rie ter\xE1 sua \xE1rea preenchida."),og(),Cl(2147,"blockquote")(2148,"p"),qx(2149,"Propriedade v\xE1lida para gr\xE1ficos do tipo "),Cl(2150,"code"),qx(2151,"Radar"),og(),qx(2152,", "),Cl(2153,"code"),qx(2154,"fillpoints"),og(),qx(2155," n\xE3o funciona quando "),Cl(2156,"code"),qx(2157,"areaStyle"),og(),qx(2158," est\xE1 definido como "),Cl(2159,"code"),qx(2160,"true"),og(),qx(2161,"."),og()()()(),Cl(2162,"tr",15)(2163,"td",16)(2164,"div",17)(2165,"span",18),qx(2166," color"),Hl(2167,"br"),og()()(),Cl(2168,"td",19)(2169,"code",35),qx(2170,"string"),og()(),Cl(2171,"td",23)(2172,"em")(2173,"strong"),qx(2174,"(opcional)"),og()(),Cl(2175,"p"),qx(2176,"Determina a cor da s\xE9rie. As maneiras de customizar o "),Cl(2177,"em"),qx(2178,"preset"),og(),qx(2179," padr\xE3o de cores s\xE3o:"),og(),Cl(2180,"ul")(2181,"li"),qx(2182,"Hexadecimal, por exemplo "),Cl(2183,"code"),qx(2184,"#c64840"),og(),qx(2185,";"),og(),Cl(2186,"li"),qx(2187,"RGB, por exemplo "),Cl(2188,"code"),qx(2189,"rgb(0, 0, 165)"),og()(),Cl(2190,"li"),qx(2191,"O nome da cor, por exemplo "),Cl(2192,"code"),qx(2193,"blue"),og(),qx(2194,";"),og(),Cl(2195,"li"),qx(2196,"Vari\xE1veis CSS, por exemplo "),Cl(2197,"code"),qx(2198,"var(--color-01)"),og(),qx(2199,";"),og(),Cl(2200,"li"),qx(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Cl(2202,"ul")(2203,"li"),Hl(2204,"span",54),Cl(2205,"code"),qx(2206,"color-01"),og()(),Cl(2207,"li"),Hl(2208,"span",55),Cl(2209,"code"),qx(2210,"color-02"),og()(),Cl(2211,"li"),Hl(2212,"span",56),Cl(2213,"code"),qx(2214,"color-03"),og()(),Cl(2215,"li"),Hl(2216,"span",57),Cl(2217,"code"),qx(2218,"color-04"),og()(),Cl(2219,"li"),Hl(2220,"span",58),Cl(2221,"code"),qx(2222,"color-05"),og()(),Cl(2223,"li"),Hl(2224,"span",59),Cl(2225,"code"),qx(2226,"color-06"),og()(),Cl(2227,"li"),Hl(2228,"span",60),Cl(2229,"code"),qx(2230,"color-07"),og()(),Cl(2231,"li"),Hl(2232,"span",61),Cl(2233,"code"),qx(2234,"color-08"),og()(),Cl(2235,"li"),Hl(2236,"span",62),Cl(2237,"code"),qx(2238,"color-09"),og()(),Cl(2239,"li"),Hl(2240,"span",63),Cl(2241,"code"),qx(2242,"color-10"),og()(),Cl(2243,"li"),Hl(2244,"span",64),Cl(2245,"code"),qx(2246,"color-11"),og()(),Cl(2247,"li"),Hl(2248,"span",65),Cl(2249,"code"),qx(2250,"color-12"),og()()()()(),Cl(2251,"ul")(2252,"li"),qx(2253,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),og()()()(),Cl(2254,"tr",15)(2255,"td",16)(2256,"div",17)(2257,"span",18),qx(2258," data"),Hl(2259,"br"),og()()(),Cl(2260,"td",19)(2261,"code",27),qx(2262,"number "),og(),Cl(2263,"code",66),qx(2264," Array<number>"),og()(),Cl(2265,"td",23)(2266,"em")(2267,"strong"),qx(2268,"(opcional)"),og()(),Cl(2269,"p"),qx(2270,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),og(),Cl(2271,"ul")(2272,"li"),qx(2273,"Para gr\xE1ficos dos tipos "),Cl(2274,"code"),qx(2275,"donut"),og(),qx(2276," e "),Cl(2277,"code"),qx(2278,"pie"),og(),qx(2279,", espera-se "),Cl(2280,"em"),qx(2281,"number"),og(),qx(2282,";"),og(),Cl(2283,"li"),qx(2284,"Para gr\xE1ficos dos tipos "),Cl(2285,"code"),qx(2286,"area"),og(),qx(2287,", "),Cl(2288,"code"),qx(2289,"bar"),og(),qx(2290,", "),Cl(2291,"code"),qx(2292,"column"),og(),qx(2293,", "),Cl(2294,"code"),qx(2295,"line"),og(),qx(2296," e "),Cl(2297,"code"),qx(2298,"radar"),og(),qx(2299,", espera-se um "),Cl(2300,"em"),qx(2301,"array"),og(),qx(2302," de "),Cl(2303,"code"),qx(2304,"data"),og(),qx(2305,"."),og()(),Cl(2306,"blockquote")(2307,"p"),qx(2308,"Se passado valor "),Cl(2309,"code"),qx(2310,"null"),og(),qx(2311," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),og()()()(),Cl(2312,"tr",15)(2313,"td",16)(2314,"div",17)(2315,"span",18),qx(2316," from"),Hl(2317,"br"),og()()(),Cl(2318,"td",19)(2319,"code",27),qx(2320,"number"),og()(),Cl(2321,"td",23)(2322,"em")(2323,"strong"),qx(2324,"(opcional)"),og()(),Cl(2325,"p"),qx(2326,"Alcance inicial da cor."),og(),Cl(2327,"blockquote")(2328,"p"),qx(2329,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Cl(2330,"code"),qx(2331,"Gauge"),og(),qx(2332,"."),og()()()(),Cl(2333,"tr",15)(2334,"td",16)(2335,"div",17)(2336,"span",18),qx(2337," label"),Hl(2338,"br"),og()()(),Cl(2339,"td",19)(2340,"code",35),qx(2341,"string"),og()(),Cl(2342,"td",23)(2343,"em")(2344,"strong"),qx(2345,"(opcional)"),og()(),Cl(2346,"p"),qx(2347,"R\xF3tulo refer\xEAncia da s\xE9rie."),og()()(),Cl(2348,"tr",15)(2349,"td",16)(2350,"div",17)(2351,"span",18),qx(2352," stackGroupName"),Hl(2353,"br"),og()()(),Cl(2354,"td",19)(2355,"code",35),qx(2356,"string"),og()(),Cl(2357,"td",23)(2358,"em")(2359,"strong"),qx(2360,"(opcional)"),og()(),Cl(2361,"p"),qx(2362,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),Cl(2363,"code"),qx(2364,"stackGroupName"),og(),qx(2365,". Exemplo:"),og(),Cl(2366,"ul")(2367,"li"),qx(2368,"Serie A: "),Cl(2369,"code"),qx(2370,"{ data: 500, stackGroupName: 'group1' ... }"),og(),qx(2371,";"),og(),Cl(2372,"li"),qx(2373,"S\xE9rie B: "),Cl(2374,"code"),qx(2375,"{ data: 200, stackGroupName: 'group1' ... }"),og(),qx(2376,"."),og(),Cl(2377,"li"),qx(2378,"S\xE9rie C: "),Cl(2379,"code"),qx(2380,"{ data: 100, stackGroupName: 'group2' ... }"),og(),qx(2381,"."),og(),Cl(2382,"li"),qx(2383,"S\xE9rie D: "),Cl(2384,"code"),qx(2385,"{ data: 400, stackGroupName: 'group2' ... }"),og(),qx(2386,"."),og()(),Cl(2387,"p"),qx(2388,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),og(),Cl(2389,"blockquote")(2390,"p"),qx(2391,"V\xE1lido para gr\xE1fico do tipo "),Cl(2392,"code"),qx(2393,"Column"),og(),qx(2394," e "),Cl(2395,"code"),qx(2396,"Bar"),og(),qx(2397,". Essa propriedade \xE9 ignorada caso a propriedade "),Cl(2398,"code"),qx(2399,"stacked"),og(),qx(2400," da interface "),Cl(2401,"code"),qx(2402,"PoChartOptions"),og(),qx(2403," esteja como "),Cl(2404,"code"),qx(2405,"true"),og(),qx(2406,"."),og()(),Cl(2407,"blockquote")(2408,"p"),qx(2409,"Essa propriedade habilita a propriedade "),Cl(2410,"code"),qx(2411,"p-data-label"),og(),qx(2412," por padr\xE3o, podendo ser desabilitada passando "),Cl(2413,"code"),qx(2414,"[p-data-label]={ fixed: false }"),og(),qx(2415,"."),og()()()(),Cl(2416,"tr",15)(2417,"td",16)(2418,"div",17)(2419,"span",18),qx(2420," to"),Hl(2421,"br"),og()()(),Cl(2422,"td",19)(2423,"code",27),qx(2424,"number"),og()(),Cl(2425,"td",23)(2426,"em")(2427,"strong"),qx(2428,"(opcional)"),og()(),Cl(2429,"p"),qx(2430,"Alcance final da cor."),og(),Cl(2431,"blockquote")(2432,"p"),qx(2433,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Cl(2434,"code"),qx(2435,"Gauge"),og(),qx(2436,"."),og()()()(),Cl(2437,"tr",15)(2438,"td",16)(2439,"div",17)(2440,"span",18),qx(2441," tooltip"),Hl(2442,"br"),og()()(),Cl(2443,"td",19)(2444,"code",35),qx(2445,"string "),og(),Cl(2446,"code",67),qx(2447," ((params: any) => string)"),og()(),Cl(2448,"td",23)(2449,"em")(2450,"strong"),qx(2451,"(opcional)"),og()(),Cl(2452,"p"),qx(2453,"Define o texto que ser\xE1 exibido na tooltip ao passar o mouse por cima das s\xE9ries do "),Cl(2454,"em"),qx(2455,"chart"),og(),qx(2456,"."),og(),Cl(2457,"p"),qx(2458,"Formatos aceitos:"),og(),Cl(2459,"ul")(2460,"li")(2461,"p")(2462,"strong"),qx(2463,"string"),og(),qx(2464,": pode conter marcadores din\xE2micos e HTML simples."),og()(),Cl(2465,"li")(2466,"p"),qx(2467,"Marcadores dispon\xEDveis:"),og()(),Cl(2468,"li")(2469,"p")(2470,"code"),qx(2471,"{name}"),og(),qx(2472," \u2192 Nome do item/categoria."),og()(),Cl(2473,"li")(2474,"p")(2475,"code"),qx(2476,"{seriesName}"),og(),qx(2477," \u2192 Nome da s\xE9rie."),og()(),Cl(2478,"li")(2479,"p")(2480,"code"),qx(2481,"{value}"),og(),qx(2482," \u2192 Valor correspondente."),og()(),Cl(2483,"li")(2484,"p")(2485,"strong"),qx(2486,"function"),og(),qx(2487,": fun\xE7\xE3o que recebe o objeto "),Cl(2488,"code"),qx(2489,"params"),og(),qx(2490," e deve retornar uma "),Cl(2491,"em"),qx(2492,"string"),og(),qx(2493," com o conte\xFAdo da tooltip."),og()()(),Cl(2494,"blockquote")(2495,"p"),qx(2496,"\xC9 poss\xEDvel utilizar marca\xE7\xE3o HTML simples ("),Cl(2497,"code"),qx(2498,"<b>"),og(),qx(2499,", "),Cl(2500,"code"),qx(2501,"<i>"),og(),qx(2502,", "),Cl(2503,"code"),qx(2504,"<br>"),og(),qx(2505,", "),Cl(2506,"code"),qx(2507,"<hr>"),og(),qx(2508,", etc.) que ser\xE1 interpretada via "),Cl(2509,"code"),qx(2510,"innerHTML"),og(),qx(2511,"."),og()(),Cl(2512,"blockquote")(2513,"p"),qx(2514,"Formata\xE7\xE3o customizada (ser\xE1 convertido internamente para HTML):"),og()(),Cl(2515,"ul")(2516,"li")(2517,"code"),qx(2518,"\\n"),og(),qx(2519," \u2192 quebra de linha ("),Cl(2520,"code"),qx(2521,"<br>"),og(),qx(2522,")."),og(),Cl(2523,"li")(2524,"code"),qx(2525,"**texto**"),og(),qx(2526," \u2192 negrito ("),Cl(2527,"code"),qx(2528,"<b>"),og(),qx(2529,")."),og(),Cl(2530,"li")(2531,"code"),qx(2532,"__texto__"),og(),qx(2533," \u2192 it\xE1lico ("),Cl(2534,"code"),qx(2535,"<i>"),og(),qx(2536,")."),og()(),Cl(2537,"blockquote")(2538,"p"),qx(2539,"Caso n\xE3o seja informado um valor para o "),Cl(2540,"em"),qx(2541,"tooltip"),og(),qx(2542,", ser\xE1 exibido da seguinte forma:"),og()(),Cl(2543,"ul")(2544,"li")(2545,"code"),qx(2546,"donut"),og(),qx(2547,", "),Cl(2548,"code"),qx(2549,"label"),og(),qx(2550,": valor proporcional ao total em porcentagem."),og(),Cl(2551,"li")(2552,"code"),qx(2553,"radar"),og(),qx(2554,": nome da s\xE9rie, o nome do indicator e os valores correspondentes."),og(),Cl(2555,"li")(2556,"code"),qx(2557,"area"),og(),qx(2558,", "),Cl(2559,"code"),qx(2560,"bar"),og(),qx(2561,", "),Cl(2562,"code"),qx(2563,"column"),og(),qx(2564,", "),Cl(2565,"code"),qx(2566,"line"),og(),qx(2567," e "),Cl(2568,"code"),qx(2569,"pie"),og(),qx(2570,": "),Cl(2571,"code"),qx(2572,"label"),og(),qx(2573,": "),Cl(2574,"code"),qx(2575,"data"),og(),qx(2576,"."),og()(),Cl(2577,"h3"),qx(2578,"Exemplos:"),og(),Cl(2579,"p")(2580,"strong"),qx(2581,"Usando string com placeholders:"),og()(),Cl(2582,"pre")(2583,"code",68),qx(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),og()(),Cl(2585,"p")(2586,"strong"),qx(2587,"Usando fun\xE7\xE3o de callback:"),og()(),Cl(2588,"pre")(2589,"code",68),qx(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),og()()()(),Cl(2591,"tr",15)(2592,"td",16)(2593,"div",17)(2594,"span",18),qx(2595," type"),Hl(2596,"br"),og()()(),Cl(2597,"td",19)(2598,"code",36),qx(2599,"PoChartType"),og()(),Cl(2600,"td",23)(2601,"em")(2602,"strong"),qx(2603,"(opcional)"),og()(),Cl(2604,"p"),qx(2605,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),Cl(2606,"code"),qx(2607,"column"),og(),qx(2608," e "),Cl(2609,"code"),qx(2610,"line"),og(),qx(2611," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),og(),Cl(2612,"ul")(2613,"li"),qx(2614,"Serie A: "),Cl(2615,"code"),qx(2616,"{ type: ChartType.Column, data: ... }"),og(),qx(2617,";"),og(),Cl(2618,"li"),qx(2619,"S\xE9rie B: "),Cl(2620,"code"),qx(2621,"{ type: ChartType.Line, data: ... }"),og(),qx(2622,"."),og()(),Cl(2623,"p"),qx(2624,"Se tanto "),Cl(2625,"code"),qx(2626,"p-type"),og(),qx(2627," quanto "),Cl(2628,"code"),qx(2629,"{ type }"),og(),qx(2630," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),og(),Cl(2631,"ul")(2632,"li")(2633,"code"),qx(2634,"column"),og(),qx(2635,": se "),Cl(2636,"code"),qx(2637,"data"),og(),qx(2638," receber "),Cl(2639,"code"),qx(2640,"Array<number>"),og(),qx(2641,";"),og(),Cl(2642,"li")(2643,"code"),qx(2644,"pie"),og(),qx(2645,": se "),Cl(2646,"code"),qx(2647,"data"),og(),qx(2648," for "),Cl(2649,"em"),qx(2650,"number"),og(),qx(2651,"."),og()(),Cl(2652,"blockquote")(2653,"p"),qx(2654,"Se utilizada a propriedade "),Cl(2655,"code"),qx(2656,"p-type"),og(),qx(2657,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),Cl(2658,"code"),qx(2659,"{type}"),og(),qx(2660," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),Cl(2661,"code"),qx(2662,"p-type"),og(),qx(2663,"."),og()(),Cl(2664,"blockquote")(2665,"p"),qx(2666,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),Cl(2667,"code"),qx(2668,"type"),og(),qx(2669," definido, exceto para mesclagem para tipos "),Cl(2670,"code"),qx(2671,"column"),og(),qx(2672," e "),Cl(2673,"code"),qx(2674,"line"),og(),qx(2675,"."),og()()()()(),Cl(2676,"h3"),qx(2677,"Enums"),og(),Cl(2678,"h4",4)(2679,"code",5),qx(2680,"PoChartLabelFormat"),og()(),Cl(2681,"div",2)(2682,"p")(2683,"em"),qx(2684,"Enum"),og(),Cl(2685,"code"),qx(2686,"PoChartLabelFormat"),og(),qx(2687," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),og()(),Cl(2688,"h4",11),qx(2689,"Propriedades"),og(),Cl(2690,"table",12)(2691,"tr",13)(2692,"th",14),qx(2693,"Nome"),og(),Cl(2694,"th",14),qx(2695,"Descri\xE7\xE3o"),og()(),Cl(2696,"tr",15)(2697,"td",16)(2698,"div",17)(2699,"span",18),qx(2700," Number"),Hl(2701,"br"),og()()(),Cl(2702,"td",23)(2703,"p"),qx(2704,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),Cl(2705,"code"),qx(2706,"'1.2-2'"),og(),qx(2707," da "),Cl(2708,"a",69),qx(2709,"DecimalPipe"),og(),qx(2710,"."),og()()(),Cl(2711,"tr",15)(2712,"td",16)(2713,"div",17)(2714,"span",18),qx(2715," Currency"),Hl(2716,"br"),og()()(),Cl(2717,"td",23)(2718,"p"),qx(2719,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),Cl(2720,"a",70),qx(2721,"DEFAULT_CURRENCY_CODE"),og(),qx(2722,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),Cl(2723,"a",71),qx(2724,"LOCALE_ID"),og(),qx(2725," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),og(),Cl(2726,"pre")(2727,"code"),qx(2728,`import { LOCALE_ID } from '@angular/core';
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
`),og()()()()(),Cl(2729,"h4",4)(2730,"code",5),qx(2731,"PoChartType"),og()(),Cl(2732,"div",2)(2733,"p")(2734,"em"),qx(2735,"Enum"),og(),Cl(2736,"code"),qx(2737,"PoChartType"),og(),qx(2738," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),og()(),Cl(2739,"h4",11),qx(2740,"Propriedades"),og(),Cl(2741,"table",12)(2742,"tr",13)(2743,"th",14),qx(2744,"Nome"),og(),Cl(2745,"th",14),qx(2746,"Descri\xE7\xE3o"),og()(),Cl(2747,"tr",15)(2748,"td",16)(2749,"div",17)(2750,"span",18),qx(2751," Area"),Hl(2752,"br"),og()()(),Cl(2753,"td",23)(2754,"p"),qx(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),og()()(),Cl(2756,"tr",15)(2757,"td",16)(2758,"div",17)(2759,"span",18),qx(2760," Donut"),Hl(2761,"br"),og()()(),Cl(2762,"td",23)(2763,"p"),qx(2764,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),og()()(),Cl(2765,"tr",15)(2766,"td",16)(2767,"div",17)(2768,"span",18),qx(2769," Pie"),Hl(2770,"br"),og()()(),Cl(2771,"td",23)(2772,"p"),qx(2773,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),og()()(),Cl(2774,"tr",15)(2775,"td",16)(2776,"div",17)(2777,"span",18),qx(2778," Line"),Hl(2779,"br"),og()()(),Cl(2780,"td",23)(2781,"p"),qx(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Cl(2783,"code"),qx(2784,"column"),og(),qx(2785," e "),Cl(2786,"code"),qx(2787,"area"),og(),qx(2788,", definindo-se o tipo atrav\xE9s da propriedade "),Cl(2789,"code"),qx(2790,"PoChartSerie.type"),og(),qx(2791,"."),og()()(),Cl(2792,"tr",15)(2793,"td",16)(2794,"div",17)(2795,"span",18),qx(2796," Column"),Hl(2797,"br"),og()()(),Cl(2798,"td",23)(2799,"p"),qx(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),og()()(),Cl(2801,"tr",15)(2802,"td",16)(2803,"div",17)(2804,"span",18),qx(2805," Bar"),Hl(2806,"br"),og()()(),Cl(2807,"td",23)(2808,"p"),qx(2809,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),og()()(),Cl(2810,"tr",15)(2811,"td",16)(2812,"div",17)(2813,"span",18),qx(2814," Gauge"),Hl(2815,"br"),og()()(),Cl(2816,"td",23)(2817,"p"),qx(2818,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),og(),Cl(2819,"ul")(2820,"li"),qx(2821,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),og(),Cl(2822,"li"),qx(2823,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),og()()()(),Cl(2824,"tr",15)(2825,"td",16)(2826,"div",17)(2827,"span",18),qx(2828," Radar"),Hl(2829,"br"),og()()(),Cl(2830,"td",23)(2831,"p"),qx(2832,"Tipo de gr\xE1fico utilizado para visualizar e comparar o desempenho de diferentes itens em m\xFAltiplas categorias."),og()()()()());},dependencies:[Zr],encapsulation:2})}return r})();var Oe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(d){return new(d||r)(w(Xn),w(Cn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,i){d&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-chart-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view")(11,"sample-po-chart-technology-skill-view"),og()()()),d&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,fe,ve,Pe,we,Me,De,Ae,Re],encapsulation:2})}return r})();var _t=[{path:"",component:Oe}],Ge=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[bL.forChild(_t),bL]})}return r})();var yn=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[ca,Ge]})}return r})();export{yn as DocPoChartModule};