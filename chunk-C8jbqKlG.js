import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,cw as $o,cx as y3,s,c as r$1,d as f,c5 as zde,cy as ude,M as Wl,T as tw,bM as fN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht$1,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,aJ as Ghe,bH as E3,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aq as ux,aO as Dw,aP as t0,at as dx,aI as dc,b7 as A3,ba as bNe,X as we$1,a3 as pNe,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var Be=()=>({label:"Angular",data:100}),We=()=>({label:"React",data:10}),Fe=(r,W)=>[r,W],Ce=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-series"]],template:function(d,i){d&1&&Wl(0,"po-chart",0),d&2&&tw("p-series",fN(3,Fe,uN(1,Be),uN(2,We)));},dependencies:[ude],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Chart Basic"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-chart-basic"),sg(),Wl(23,"hr")),d&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ce],encapsulation:2})}return r})();var ze=()=>({value:"fillPoints",label:"fillPoints"}),q=r=>[r],He=()=>({label:"legend",value:"legend"}),Ze=()=>({label:"roseType",value:"roseType"}),Ye=()=>({label:"showFromToLegend",value:"showFromToLegend"}),je=()=>({label:"pointer",value:"pointer"}),Ue=()=>({label:"stacked",value:"stacked"}),Je=()=>({value:"fixed",label:"Fixed"});function Xe(r,W){if(r&1){let l=Ex();Sl(0,"po-checkbox-group",54),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),Qy(i)}),ht$1("p-change",function(){Xy(l);let i=Tx();return Qy(i.changeDataLabelOptions())}),sg(),JA();}if(r&2){let l=Tx();tw("p-options",dN(3,q,uN(2,Je))),Dw("ngModel",l.selectedValuesDataLabel),t0();}}function Qe(r,W){if(r&1){let l=Ex();Sl(0,"po-number",55),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.valueGauge,i)||(s.valueGauge=i),Qy(i)}),ht$1("p-change",function(i){Xy(l);let s=Tx();return Qy(s.changeValueGauge(i))}),sg(),JA();}if(r&2){let l=Tx();Dw("ngModel",l.valueGauge),t0();}}function Ke(r,W){if(r&1){let l=Ex();Sl(0,"po-radio-group",56),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.selectedShapeOption,i)||(s.selectedShapeOption=i),Qy(i)}),sg(),JA(),Sl(1,"po-switch",57),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.selectedSplitArea,i)||(s.selectedSplitArea=i),Qy(i)}),sg(),JA(),Sl(2,"po-switch",58),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),Qy(i)}),sg(),JA();}if(r&2){let l=Tx();tw("p-options",l.optionsShapeOption),Dw("ngModel",l.selectedShapeOption),t0(),Vp(),Dw("ngModel",l.selectedSplitArea),t0(),Vp(),Dw("ngModel",l.selectedAreaStyle),t0();}}function $e(r,W){if(r&1){let l=Ex();Sl(0,"po-input",59),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.data,i)||(s.data=i),Qy(i)}),sg(),JA();}if(r&2){let l=Tx();Dw("ngModel",l.data),t0();}}function et(r,W){if(r&1){let l=Ex();Sl(0,"po-input",60),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.stackGroupName,i)||(s.stackGroupName=i),Qy(i)}),sg(),JA();}if(r&2){let l=Tx();Dw("ngModel",l.stackGroupName),t0();}}function tt(r,W){if(r&1){let l=Ex();Sl(0,"po-number",61),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.fromGauge,i)||(s.fromGauge=i),Qy(i)}),sg(),JA();}if(r&2){let l=Tx();Dw("ngModel",l.fromGauge),t0();}}function nt(r,W){if(r&1){let l=Ex();Sl(0,"po-number",62),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.toGauge,i)||(s.toGauge=i),Qy(i)}),sg(),JA();}if(r&2){let l=Tx();Dw("ngModel",l.toGauge),t0();}}function it(r,W){if(r&1){let l=Ex();Sl(0,"div",3)(1,"po-button",63),ht$1("p-click",function(){Xy(l);let i=Tx();return Qy(i.addData())}),sg()();}}function ot(r,W){if(r&1){let l=Ex();Sl(0,"po-number",64),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.min,i)||(s.min=i),Qy(i)}),sg(),JA(),Sl(1,"po-number",65),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.max,i)||(s.max=i),Qy(i)}),sg(),JA(),Sl(2,"po-input",66),Ew("ngModelChange",function(i){Xy(l);let s=Tx();return tN(s.colorIndicator,i)||(s.colorIndicator=i),Qy(i)}),sg(),JA(),Sl(3,"div",3)(4,"po-button",67),ht$1("p-click",function(){Xy(l);let i=Tx();return Qy(i.addData())}),sg()();}if(r&2){let l=Tx();Dw("ngModel",l.min),t0(),Vp(),Dw("ngModel",l.max),t0(),Vp(),Dw("ngModel",l.colorIndicator),t0(),Vp(2),tw("p-disabled",l.isTypeRadar&&!l.categories);}}var ye=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=false;isTypeRadar=false;disabledTooltip=false;disabledType=false;selectedSplitArea=false;selectedAreaStyle=false;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedLegendType="plain";selectedRendererOption="canvas";selectedShapeOption="polygon";helpRadar='Example: ["Bold", "Keen", "Calm", "Wise"]';helpGeneric='Example: ["Jan", "Feb", "Mar", "Apr"]';optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsLegendType=[{value:"plain",label:"plain"},{value:"scroll",label:"scroll"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];optionsShapeOption=[{value:"polygon",label:"polygon"},{value:"circle",label:"circle"}];typeOptions=[{label:"Line",value:$o.Line},{label:"Area",value:$o.Area},{label:"Bar",value:$o.Bar},{label:"Column",value:$o.Column},{label:"Donut",value:$o.Donut},{label:"Pie",value:$o.Pie},{label:"Gauge",value:$o.Gauge},{label:"Radar",value:$o.Radar}];labelTypeOptions=[{label:"Number",value:y3.Number},{label:"Currency",value:y3.Currency}];changeDataLabelOptions(){this.dataLabel=s(r$1({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")});}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=s(r$1({},this.options),{axis:l});}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=s(r$1({},this.options),{header:l});}changeDataZoomOptions(){this.options=s(r$1({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=r$1({},this.options);}changeFillPointsOptions(){this.options=s(r$1({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")});}changeLegendOptions(){this.options=s(r$1({},this.options),{legend:this.selectedValuesLegend.includes("legend")});}changeRoseTypeOptions(){this.options=s(r$1({},this.options),{roseType:this.selectedRoseType.includes("roseType")});}changeShowFromToLegend(){this.options=s(r$1({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")});}changePointer(){this.options=s(r$1({},this.options),{pointer:this.selectedPointer.includes("pointer")});}changeStacked(){this.options=s(r$1({},this.options),{stacked:this.selectedStacked.includes("stacked")});}changeLegendVerticalPosition(){this.options=s(r$1({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition});}changeLegendPosition(){this.options=s(r$1({},this.options),{legendPosition:this.selectedLegendPosition});}changeLegendType(){this.options=s(r$1({},this.options),{legendType:this.selectedLegendType});}changeRendererOption(){this.options=s(r$1({},this.options),{rendererOption:this.selectedRendererOption});}changeType(l){l===$o.Gauge&&(this.isTypeGauge=true,this.changeSwitchGauge(true)),l===$o.Radar&&(this.isTypeRadar=true,this.changeSwitchRadar(true));}changeSwitchGauge(l){this.restore(true),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=$o.Gauge,this.type=$o.Gauge,this.isTypeRadar=false):(this.serieType=void 0,this.type=void 0);}changeSwitchRadar(l){this.restore(true,true),this.disabledType=l,l?(this.serieType=$o.Radar,this.type=$o.Radar,this.isTypeGauge=false):(this.serieType=void 0,this.type=void 0);}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series]);}ngOnInit(){this.restore();}addOptions(l){this.options=r$1(r$1({},this.options),l?r$1({},l):{});}addCategories(){this.allCategories=this.convertToArray(this.categories);}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea};}addData(){let l=this.serieType??this.type,d;l==="radar"?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r$1({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0);}isTypeGrid(){return this.type===$o.Line||this.type===$o.Area||this.type===$o.Column||this.type===$o.Bar||this.type===$o.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`;}restore(l=false,d=false){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=false,this.disabledType=false,this.dataLabel={fixed:false},this.options=s(r$1({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=false),d||(this.isTypeRadar=false,this.categories=void 0,this.radarConfig=[]);}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs"]],standalone:false,decls:66,vars:100,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"p-options","ngModel"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","radar","p-label","Radar Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModel"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModel"],["p-label","Chart categories",1,"po-md-12"],["name","categories",3,"ngModelChange","p-blur","p-label","p-help","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendType","p-label","LegendType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","radioShapeOption","p-label","ShapeOption",1,"po-md-3",3,"ngModelChange","p-options","ngModel"],["name","splitArea","p-label","splitArea",1,"po-md-1",3,"ngModelChange","ngModel"],["name","areaStyle","p-label","areaStyle",1,"po-md-1",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],["name","min","p-label","Min",1,"po-md-3",3,"ngModelChange","ngModel"],["name","max","p-label","Max",1,"po-md-3",3,"ngModelChange","ngModel"],["name","colorIndicator","p-label","Color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click","p-disabled"]],template:function(d,i){if(d&1){let s=Ex();Sl(0,"po-chart",1),ht$1("p-series-click",function(a){return i.changeEvent("p-series-click",a)})("p-series-hover",function(a){return i.changeEvent("p-series-hover",a)}),sg(),Wl(1,"po-divider",2),Sl(2,"div",3),Wl(3,"po-info",4),sg(),Wl(4,"po-divider",5),Sl(5,"form")(6,"po-select",6),Ew("ngModelChange",function(a){return Xy(s),tN(i.type,a)||(i.type=a),Qy(a)}),ht$1("p-change",function(a){return i.changeType(a)}),sg(),JA(),Sl(7,"po-number",7),Ew("ngModelChange",function(a){return Xy(s),tN(i.height,a)||(i.height=a),Qy(a)}),sg(),JA(),Sl(8,"po-input",8),Ew("ngModelChange",function(a){return Xy(s),tN(i.title,a)||(i.title=a),Qy(a)}),sg(),JA(),ux(9,Xe,1,5,"po-checkbox-group",9),sg(),Wl(10,"po-divider",10),Sl(11,"form",null,0)(13,"div",3)(14,"po-switch",11),Ew("ngModelChange",function(a){return Xy(s),tN(i.isTypeGauge,a)||(i.isTypeGauge=a),Qy(a)}),ht$1("p-change",function(a){return i.changeSwitchGauge(a)}),sg(),JA(),Sl(15,"po-switch",12),Ew("ngModelChange",function(a){return Xy(s),tN(i.isTypeRadar,a)||(i.isTypeRadar=a),Qy(a)}),ht$1("p-change",function(a){return i.changeSwitchRadar(a)}),sg(),JA(),ux(16,Qe,1,1,"po-number",13),ux(17,Ke,3,4),sg(),Sl(18,"div",3)(19,"po-input",14),Ew("ngModelChange",function(a){return Xy(s),tN(i.label,a)||(i.label=a),Qy(a)}),sg(),JA(),ux(20,$e,1,1,"po-input",15),Sl(21,"po-select",16),Ew("ngModelChange",function(a){return Xy(s),tN(i.serieType,a)||(i.serieType=a),Qy(a)}),ht$1("p-change",function(a){return i.changeType(a)}),sg(),JA(),Sl(22,"po-input",17),Ew("ngModelChange",function(a){return Xy(s),tN(i.tooltip,a)||(i.tooltip=a),Qy(a)}),sg(),JA(),Sl(23,"po-input",18),Ew("ngModelChange",function(a){return Xy(s),tN(i.color,a)||(i.color=a),Qy(a)}),sg(),JA(),ux(24,et,1,1,"po-input",19),ux(25,tt,1,1,"po-number",20),ux(26,nt,1,1,"po-number",21),ux(27,it,2,0,"div",3),sg()(),Sl(28,"div",3),Wl(29,"po-divider",22),Sl(30,"po-input",23),Ew("ngModelChange",function(a){return Xy(s),tN(i.categories,a)||(i.categories=a),Qy(a)}),ht$1("p-blur",function(){return i.addCategories()}),sg(),JA(),ux(31,ot,5,4),sg(),Sl(32,"form")(33,"div",3),Wl(34,"po-divider",24),Sl(35,"po-number",25),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.minRange,a)||(i.options.axis.minRange=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(36,"po-number",26),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(37,"po-number",27),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(38,"po-select",28),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.labelType,a)||(i.options.axis.labelType=a),Qy(a)}),ht$1("p-change",function(){return i.addOptions()}),sg(),JA(),Sl(39,"po-number",29),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(40,"po-number",30),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(41,"po-number",31),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(42,"po-number",32),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(43,"po-number",33),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.innerRadius,a)||(i.options.innerRadius=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(44,"po-number",34),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.borderRadius,a)||(i.options.borderRadius=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(45,"po-input",35),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.firstColumnName,a)||(i.options.firstColumnName=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(46,"po-input",36),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(47,"po-input",37),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.descriptionChart,a)||(i.options.descriptionChart=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),Sl(48,"po-input",38),Ew("ngModelChange",function(a){return Xy(s),tN(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),Qy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),JA(),sg(),Sl(49,"div",3)(50,"po-checkbox-group",39),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),Qy(a)}),ht$1("p-change",function(){return i.changeHeaderOptions()}),sg(),JA(),Sl(51,"po-checkbox-group",40),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),Qy(a)}),ht$1("p-change",function(){return i.changeAxisOptions()}),sg(),JA(),Sl(52,"po-checkbox-group",41),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),Qy(a)}),ht$1("p-change",function(){return i.changeDataZoomOptions()}),sg(),JA(),Sl(53,"po-checkbox-group",42),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),Qy(a)}),ht$1("p-change",function(){return i.changeFillPointsOptions()}),sg(),JA(),Sl(54,"po-checkbox-group",43),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),Qy(a)}),ht$1("p-change",function(){return i.changeLegendOptions()}),sg(),JA(),Sl(55,"po-checkbox-group",44),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedRoseType,a)||(i.selectedRoseType=a),Qy(a)}),ht$1("p-change",function(){return i.changeRoseTypeOptions()}),sg(),JA(),Sl(56,"po-checkbox-group",45),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),Qy(a)}),ht$1("p-change",function(){return i.changeShowFromToLegend()}),sg(),JA(),Sl(57,"po-checkbox-group",46),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedPointer,a)||(i.selectedPointer=a),Qy(a)}),ht$1("p-change",function(){return i.changePointer()}),sg(),JA(),Sl(58,"po-checkbox-group",47),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedStacked,a)||(i.selectedStacked=a),Qy(a)}),ht$1("p-change",function(){return i.changeStacked()}),sg(),JA(),Sl(59,"po-radio-group",48),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),Qy(a)}),ht$1("p-change",function(){return i.changeLegendVerticalPosition()}),sg(),JA(),Sl(60,"po-radio-group",49),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),Qy(a)}),ht$1("p-change",function(){return i.changeLegendPosition()}),sg(),JA(),Sl(61,"po-radio-group",50),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedLegendType,a)||(i.selectedLegendType=a),Qy(a)}),ht$1("p-change",function(){return i.changeLegendType()}),sg(),JA(),Sl(62,"po-radio-group",51),Ew("ngModelChange",function(a){return Xy(s),tN(i.selectedRendererOption,a)||(i.selectedRendererOption=a),Qy(a)}),ht$1("p-change",function(){return i.changeRendererOption()}),sg(),JA(),sg(),Wl(63,"po-divider",52),Sl(64,"div",3)(65,"po-button",53),ht$1("p-click",function(){return i.restore()}),sg()()();}d&2&&(tw("p-categories",i.isTypeRadar?i.radarConfig:i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),Vp(3),tw("p-value",i.event),Vp(3),Dw("ngModel",i.type),tw("p-disabled",i.disabledType)("p-options",i.typeOptions),t0(),Vp(),Dw("ngModel",i.height),t0(),Vp(),Dw("ngModel",i.title),t0(),Vp(),dx(i.isTypeGrid()?9:-1),Vp(5),Dw("ngModel",i.isTypeGauge),t0(),Vp(),Dw("ngModel",i.isTypeRadar),t0(),Vp(),dx(i.isTypeGauge?16:-1),Vp(),dx(i.isTypeRadar?17:-1),Vp(2),Dw("ngModel",i.label),t0(),Vp(),dx(i.isTypeGauge?-1:20),Vp(),Dw("ngModel",i.serieType),tw("p-disabled",i.disabledType)("p-options",i.typeOptions),t0(),Vp(),tw("p-disabled",i.disabledTooltip),Dw("ngModel",i.tooltip),t0(),Vp(),Dw("ngModel",i.color),t0(),Vp(),dx(i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"?24:-1),Vp(),dx(i.isTypeGauge?25:-1),Vp(),dx(i.isTypeGauge?26:-1),Vp(),dx(i.isTypeRadar?-1:27),Vp(3),Hx(i.isTypeRadar?"po-md-3":"po-md-4"),tw("p-label",i.isTypeRadar?"Indicators":"Categories")("p-help",i.isTypeRadar?i.helpRadar:i.helpGeneric),Dw("ngModel",i.categories),t0(),Vp(),dx(i.isTypeRadar?31:-1),Vp(4),Dw("ngModel",i.options.axis.minRange),t0(),Vp(),Dw("ngModel",i.options.axis.maxRange),t0(),Vp(),Dw("ngModel",i.options.axis.gridLines),t0(),Vp(),tw("p-options",i.labelTypeOptions),Dw("ngModel",i.options.axis.labelType),t0(),Vp(),Dw("ngModel",i.options.axis.paddingBottom),t0(),Vp(),Dw("ngModel",i.options.axis.paddingLeft),t0(),Vp(),Dw("ngModel",i.options.axis.paddingRight),t0(),Vp(),Dw("ngModel",i.options.axis.rotateLegend),t0(),Vp(),Dw("ngModel",i.options.innerRadius),t0(),Vp(),Dw("ngModel",i.options.borderRadius),t0(),Vp(),Dw("ngModel",i.options.firstColumnName),t0(),Vp(),Dw("ngModel",i.options.textCenterGraph),t0(),Vp(),Dw("ngModel",i.options.descriptionChart),t0(),Vp(),Dw("ngModel",i.options.subtitleGauge),t0(),Vp(2),tw("p-columns",2)("p-options",i.optionsHeader),Dw("ngModel",i.selectedValuesHeader),t0(),Vp(),tw("p-columns",2)("p-options",i.optionsAxis),Dw("ngModel",i.selectedValuesAxis),t0(),Vp(),tw("p-columns",2)("p-options",i.optionsDataZoom),Dw("ngModel",i.selectedValuesDataZoom),t0(),Vp(),tw("p-columns",1)("p-options",dN(83,q,uN(82,ze))),Dw("ngModel",i.selectedValuesFillPoints),t0(),Vp(),tw("p-options",dN(86,q,uN(85,He))),Dw("ngModel",i.selectedValuesLegend),t0(),Vp(),tw("p-options",dN(89,q,uN(88,Ze))),Dw("ngModel",i.selectedRoseType),t0(),Vp(),tw("p-options",dN(92,q,uN(91,Ye))),Dw("ngModel",i.selectedFromToLegend),t0(),Vp(),tw("p-options",dN(95,q,uN(94,je))),Dw("ngModel",i.selectedPointer),t0(),Vp(),tw("p-options",dN(98,q,uN(97,Ue))),Dw("ngModel",i.selectedStacked),t0(),Vp(),tw("p-options",i.optionsLegendVerticalPosition),Dw("ngModel",i.selectedLegendVerticalPosition),t0(),Vp(),tw("p-options",i.optionsLegendPosition),Dw("ngModel",i.selectedLegendPosition),t0(),Vp(),tw("p-options",i.optionsLegendType),Dw("ngModel",i.selectedLegendType),t0(),Vp(),tw("p-options",i.optionsRendererOption),Dw("ngModel",i.selectedRendererOption),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,ude,mv,x3,F3,Uhe,Pde,Ghe,E3,Qhe],encapsulation:2,changeDetection:1})}return r})();var rt=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Chart Labs"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-chart
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-chart-labs"),sg(),Wl(23,"hr")),d&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,rt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ye],encapsulation:2})}return r})();var _e=(()=>{class r{poAlert=f(zde);participationByCountryInWorldExportsType=$o.Line;evolutionOfCoffeeAndSomeCompetitorsType=$o.Column;coffeConsumingChartType=$o.Donut;consumptionPerCapitaType=$o.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:$o.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:$o.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:$o.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:$o.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"},{label:"Germany",data:5.2,tooltip:"Germany (Europe)"},{label:"Denmark",data:5.1,tooltip:"Denmark (Europe)"},{label:"Sweden",data:4.9,tooltip:"Sweden (Europe)"},{label:"Switzerland",data:4.8,tooltip:"Switzerland (Europe)"},{label:"Belgium",data:4.6,tooltip:"Belgium (Europe)"},{label:"Canada",data:4.5,tooltip:"Canada (North America)"},{label:"Brazil",data:4.3,tooltip:"Brazil (South America)"},{label:"Italy",data:4.2,tooltip:"Italy (Europe)"},{label:"France",data:4.1,tooltip:"France (Europe)"},{label:"USA",data:4,tooltip:"USA (North America)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10",tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:"Vietnam",data:[15,17,23,19,22,18],tooltip:"Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%"},{label:"Colombia",data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:$o.Column},{label:"2017",data:[93,52,18],type:$o.Column},{label:"2020",data:[95,21,-17],type:$o.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:$o.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:true,borderRadius:8};coffeeConsumptionOptions={legendType:"scroll"};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:y3.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:true};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:y3.Number},dataZoom:true};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:true}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,"_blank");}showMeTheDates(l){this.poAlert.alert({title:"Statistic",message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}});}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:false,features:[we$1([zde])],decls:28,vars:22,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 15 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-options","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(d,i){d&1&&(Sl(0,"div",0)(1,"div",1)(2,"div",0),Wl(3,"po-chart",2)(4,"po-chart",3),sg()(),Sl(5,"div",1),Wl(6,"po-chart",4),sg(),Sl(7,"div",5)(8,"po-chart",6),ht$1("p-series-click",function(m){return i.searchMore(m)}),sg(),Sl(9,"po-chart",7),ht$1("p-series-click",function(m){return i.showMeTheDates(m)}),sg()(),Sl(10,"div",0),Wl(11,"po-chart",8),Sl(12,"div",9)(13,"po-widget",10)(14,"div",11),Jx(15,"66 billion"),sg(),Sl(16,"div",12),Jx(17,"cups of coffee are consumed per year in U.S."),sg()(),Sl(18,"po-widget",10)(19,"div",11),Jx(20,"2nd most"),sg(),Sl(21,"div",12),Jx(22,"traded commodity in the world second to Oil."),sg()()()()(),Sl(23,"div",0)(24,"po-container",13)(25,"div",14),Jx(26,"Top 10 Largest Coffee Chains in the World"),sg(),Wl(27,"po-table",15),sg()()),d&2&&(Vp(3),tw("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),Vp(),tw("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),Vp(2),tw("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),Vp(2),tw("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),Vp(),tw("p-series",i.coffeeConsumption)("p-options",i.coffeeConsumptionOptions)("p-type",i.coffeConsumingChartType),Vp(2),tw("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),Vp(16),tw("p-items",i.items)("p-hide-table-search",false));},dependencies:[ude,dc,A3,bNe],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r}),Pe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Chart - Coffee Ranking"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-chart-coffee-ranking"),sg(),Wl(23,"hr")),d&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,pt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,_e],encapsulation:2})}return r})();var Te=(()=>{class r{typeBar=$o.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:true};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked"]],standalone:false,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(d,i){d&1&&(Sl(0,"po-container")(1,"div",0),Jx(2,"Energy and Climate Analysis"),sg(),Sl(3,"div",1),Wl(4,"po-chart",2)(5,"po-chart",3),sg()()),d&2&&(Vp(4),tw("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),Vp(),tw("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar));},dependencies:[ude,dc],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r}),we=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Chart - Stacked"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-chart-stacked"),sg(),Wl(23,"hr")),d&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ct,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Te],encapsulation:2})}return r})();var Le=(()=>{class r{type=$o.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary"]],standalone:false,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(d,i){d&1&&(Sl(0,"po-container")(1,"div",0),Jx(2,"Sales Performance"),sg(),Sl(3,"div",1)(4,"div",2),Wl(5,"po-chart",3),sg(),Sl(6,"div",2),Wl(7,"po-chart",4),sg()()()),d&2&&(Vp(5),tw("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),Vp(2),tw("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges));},dependencies:[ude,dc],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r}),Me=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Chart - Summary"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-chart-summary"),sg(),Wl(23,"hr")),d&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ht,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Le],encapsulation:2})}return r})();var ke=(()=>{class r{participationByCountryInWorldExportsType=$o.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:true};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:false,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(d,i){d&1&&(Sl(0,"div",0),Wl(1,"po-chart",1),sg()),d&2&&(Vp(),tw("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel));},dependencies:[ude],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),De=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Chart - World Exports"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-chart-world-exports"),sg(),Wl(23,"hr")),d&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,bt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ke],encapsulation:2})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:"Frontend Development",max:100},{name:"Backend Development",max:100},{name:"Database Design",max:100},{name:"Cloud & DevOps",max:100},{name:"Testing & Quality",max:100},{name:"System Architecture",max:100}],splitArea:true,shape:"circle"};radarConfigMovies={indicator:[{name:"Storytelling",max:100},{name:"Characters",max:100},{name:"Visual Effects",max:100},{name:"Soundtrack",max:100},{name:"Pacing",max:100},{name:"Rewatchability",max:100}],splitArea:true};type=$o.Radar;series=[{label:"Team Alpha",data:[82,50,78,70,88,81]},{label:"Team Beta",data:[65,83,72,89,60,74]},{label:"Team Delta",data:[45,21,33,65,24,58]},{label:"Team Omega",data:[60,49,19,58,94,59]}];seriesMovies=[{label:"Sci-Fi",data:[60,53,45,58,42,55]},{label:"Fantasy",data:[53,80,66,71,75,88]},{label:"Drama",data:[92,31,98,60,88,72]},{label:"Thriller",data:[44,56,75,84,90,80]}];radarOptions={areaStyle:true};static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill"]],standalone:false,decls:3,vars:6,consts:[[1,"po-row"],["p-title","Technology Skill Assessment",1,"po-md-6",3,"p-categories","p-type","p-series"],["p-title","Genre Popularity","p-type","radar",1,"po-md-6",3,"p-categories","p-series","p-options"]],template:function(d,i){d&1&&(Sl(0,"div",0),Wl(1,"po-chart",1)(2,"po-chart",2),sg()),d&2&&(Vp(),tw("p-categories",i.radarConfig)("p-type",i.type)("p-series",i.series),Vp(),tw("p-categories",i.radarConfigMovies)("p-series",i.seriesMovies)("p-options",i.radarOptions));},dependencies:[ude],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r}),Ae=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Chart - Radar"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-chart-technology-skill"),sg(),Wl(23,"hr")),d&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ft,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ve],encapsulation:2})}return r})();var Re=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-doc"]],standalone:false,decls:2833,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","PoChartRadarOptions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'plain'"],["pan","",1,"docs-api-property-type","'scroll'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],["pan","",1,"docs-api-property-type","Array<PoChartIndicatorOptions>"],["pan","",1,"docs-api-property-type","'polygon'"],["pan","",1,"docs-api-property-type","'circle'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["pan","",1,"docs-api-property-type","((params:","any)","=>","string)"],[1,"language-ts"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(d,i){d&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoChartModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-chart"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoChartComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"O "),Sl(18,"code"),Jx(19,"po-chart"),sg(),Jx(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),sg(),Sl(21,"p"),Jx(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),sg(),Sl(23,"p"),Jx(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),sg(),Sl(25,"p"),Jx(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Sl(27,"em"),Jx(28,"mouse"),sg(),Jx(29," sobre o elemento."),sg(),Sl(30,"h4"),Jx(31,"Guia de uso para Gr\xE1ficos"),sg(),Sl(32,"blockquote")(33,"p"),Jx(34,"Veja nosso "),Sl(35,"a",6),Jx(36,"guia de uso para gr\xE1ficos"),sg(),Jx(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),sg()(),Sl(38,"h4"),Jx(39,"Tokens customiz\xE1veis"),sg(),Sl(40,"p"),Jx(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(42,"blockquote")(43,"p"),Jx(44,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(45,"a",7),Jx(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(47,"."),sg()(),Sl(48,"table")(49,"thead")(50,"tr")(51,"th"),Jx(52,"Propriedade"),sg(),Sl(53,"th"),Jx(54,"Descri\xE7\xE3o"),sg(),Sl(55,"th"),Jx(56,"Valor Padr\xE3o"),sg()()(),Sl(57,"tbody")(58,"tr")(59,"td")(60,"strong"),Jx(61,"Chart (po-chart)"),sg()(),Wl(62,"td")(63,"td"),sg(),Sl(64,"tr")(65,"td")(66,"code"),Jx(67,"--background-color-grid"),sg()(),Sl(68,"td"),Jx(69,"Cor de background dos gr\xE1ficos"),sg(),Sl(70,"td")(71,"code"),Jx(72,"var(--color-neutral-light-00)"),sg()()(),Sl(73,"tr")(74,"td")(75,"code"),Jx(76,"--color-description-chart"),sg()(),Sl(77,"td"),Jx(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Sl(79,"td")(80,"code"),Jx(81,"var(--color-neutral-dark-70)"),sg()()(),Sl(82,"tr")(83,"td")(84,"code"),Jx(85,"--font-family-description-chart"),sg()(),Sl(86,"td"),Jx(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Sl(88,"td")(89,"code"),Jx(90,"var(--font-family-theme)"),sg()()(),Sl(91,"tr")(92,"td")(93,"code"),Jx(94,"--font-size-description-chart"),sg()(),Sl(95,"td"),Jx(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Sl(97,"td")(98,"code"),Jx(99,"var(--font-size-sm)"),sg()()(),Sl(100,"tr")(101,"td")(102,"code"),Jx(103,"--font-weight-description-chart"),sg()(),Sl(104,"td"),Jx(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Sl(106,"td")(107,"code"),Jx(108,"var(--font-weight-normal)"),sg()()(),Sl(109,"tr")(110,"td")(111,"strong"),Jx(112,"Header (po-chart .po-chart-header )"),sg()(),Wl(113,"td")(114,"td"),sg(),Sl(115,"tr")(116,"td")(117,"code"),Jx(118,"--background-color"),sg()(),Sl(119,"td"),Jx(120,"Cor de background do cabe\xE7alho"),sg(),Sl(121,"td")(122,"code"),Jx(123,"var(--color-neutral-light-00)"),sg()()(),Sl(124,"tr")(125,"td")(126,"code"),Jx(127,"--color"),sg()(),Sl(128,"td"),Jx(129,"Cor da fonte do cabe\xE7alho"),sg(),Sl(130,"td")(131,"code"),Jx(132,"var(--color-neutral-dark-70)"),sg()()(),Sl(133,"tr")(134,"td")(135,"code"),Jx(136,"--font-family"),sg()(),Sl(137,"td"),Jx(138,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(139,"td")(140,"code"),Jx(141,"var(--font-family-theme)"),sg()()(),Sl(142,"tr")(143,"td")(144,"code"),Jx(145,"--font-size-title"),sg()(),Sl(146,"td"),Jx(147,"Tamanho da fonte"),sg(),Sl(148,"td")(149,"code"),Jx(150,"var(--font-size-default)"),sg()()(),Sl(151,"tr")(152,"td")(153,"code"),Jx(154,"--font-size-icons"),sg()(),Sl(155,"td"),Jx(156,"Tamanho dos \xEDcones"),sg(),Sl(157,"td")(158,"code"),Jx(159,"var(--font-size-md)"),sg()()(),Sl(160,"tr")(161,"td")(162,"code"),Jx(163,"--font-weight"),sg()(),Sl(164,"td"),Jx(165,"Peso da fonte"),sg(),Sl(166,"td")(167,"code"),Jx(168,"var(--font-weight-bold)"),sg()()(),Sl(169,"tr")(170,"td")(171,"strong"),Jx(172,"Chart (po-chart .po-chart)"),sg()(),Wl(173,"td")(174,"td"),sg(),Sl(175,"tr")(176,"td")(177,"code"),Jx(178,"--color-grid"),sg()(),Sl(179,"td"),Jx(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),sg(),Sl(181,"td")(182,"code"),Jx(183,"var(--color-neutral-light-20)"),sg()()(),Sl(184,"tr")(185,"td")(186,"code"),Jx(187,"--font-family-grid"),sg()(),Sl(188,"td"),Jx(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),sg(),Sl(190,"td")(191,"code"),Jx(192,"var(--font-family-theme)"),sg()()(),Sl(193,"tr")(194,"td")(195,"code"),Jx(196,"--font-size-grid"),sg()(),Sl(197,"td"),Jx(198,"Tamanho da fonte usada nos valores dos eixos"),sg(),Sl(199,"td")(200,"code"),Jx(201,"var(--font-size-xs)"),sg()()(),Sl(202,"tr")(203,"td")(204,"code"),Jx(205,"--font-weight-grid"),sg()(),Sl(206,"td"),Jx(207,"Peso da fonte usada nos valores dos eixos"),sg(),Sl(208,"td")(209,"code"),Jx(210,"var(--font-weight-normal)"),sg()()(),Sl(211,"tr")(212,"td")(213,"code"),Jx(214,"--color-legend"),sg()(),Sl(215,"td"),Jx(216,"Cor da fonte da legenda"),sg(),Sl(217,"td")(218,"code"),Jx(219,"var(--color-neutral-dark-70)"),sg()()(),Sl(220,"tr")(221,"td")(222,"code"),Jx(223,"--color-legend-scroll-icon-active"),sg()(),Sl(224,"td"),Jx(225,"Cor do \xEDcone de scroll da legenda no estado ativo, pro tipo "),Sl(226,"code"),Jx(227,"scroll"),sg()(),Sl(228,"td")(229,"code"),Jx(230,"var(--color-action-default)"),sg()()(),Sl(231,"tr")(232,"td")(233,"code"),Jx(234,"--color-legend-scroll-icon-inactive"),sg()(),Sl(235,"td"),Jx(236,"Cor do \xEDcone de scroll da legenda no estado inativo, pro tipo "),Sl(237,"code"),Jx(238,"scroll"),sg()(),Sl(239,"td")(240,"code"),Jx(241,"var(--color-action-disabled)"),sg()()(),Sl(242,"tr")(243,"td")(244,"code"),Jx(245,"--border-radius-bar"),sg()(),Sl(246,"td"),Jx(247,"Tamanho da borda nos graficos "),Sl(248,"code"),Jx(249,"Bar"),sg(),Jx(250," e "),Sl(251,"code"),Jx(252,"Column"),sg()(),Sl(253,"td")(254,"code"),Jx(255,"var(--border-radius-none)"),sg()()(),Sl(256,"tr")(257,"td")(258,"code"),Jx(259,"--border-color"),sg()(),Sl(260,"td"),Jx(261,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),Sl(262,"code"),Jx(263,"Donut"),sg(),Jx(264," e "),Sl(265,"code"),Jx(266,"Pie"),sg()(),Sl(267,"td")(268,"code"),Jx(269,"var(--color-neutral-light-00)"),sg()()(),Sl(270,"tr")(271,"td")(272,"code"),Jx(273,"--color-hightlight-value"),sg()(),Sl(274,"td"),Jx(275,"Cor do valor de destaque nos Gr\xE1ficos "),Sl(276,"code"),Jx(277,"Donut"),sg(),Jx(278," e "),Sl(279,"code"),Jx(280,"Gauge"),sg()(),Sl(281,"td")(282,"code"),Jx(283,"var(--color-neutral-dark-70)"),sg()()(),Sl(284,"tr")(285,"td")(286,"code"),Jx(287,"--font-family-hightlight-value"),sg()(),Sl(288,"td"),Jx(289,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),Sl(290,"code"),Jx(291,"Donut"),sg(),Jx(292," e "),Sl(293,"code"),Jx(294,"Gauge"),sg()(),Sl(295,"td")(296,"code"),Jx(297,"var(--font-family-theme)"),sg()()(),Sl(298,"tr")(299,"td")(300,"code"),Jx(301,"--font-weight-hightlight-value"),sg()(),Sl(302,"td"),Jx(303,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),Sl(304,"code"),Jx(305,"Donut"),sg(),Jx(306," e "),Sl(307,"code"),Jx(308,"Gauge"),sg()(),Sl(309,"td")(310,"code"),Jx(311,"var(--font-weight-bold)"),sg()()(),Sl(312,"tr")(313,"td")(314,"code"),Jx(315,"--color-base-gauge"),sg()(),Sl(316,"td"),Jx(317,"Cor da base do gr\xE1fico "),Sl(318,"code"),Jx(319,"Gauge"),sg()(),Sl(320,"td")(321,"code"),Jx(322,"var(--color-neutral-light-20)"),sg()()(),Sl(323,"tr")(324,"td")(325,"code"),Jx(326,"--color-gauge-pointer-color"),sg()(),Sl(327,"td"),Jx(328,"Cor do ponteiro do gr\xE1fico "),Sl(329,"code"),Jx(330,"Gauge"),sg()(),Sl(331,"td")(332,"code"),Jx(333,"var(--color-neutral-dark-70)"),sg()()(),Sl(334,"tr")(335,"td")(336,"code"),Jx(337,"--color-chart-line-point-fill"),sg()(),Sl(338,"td"),Jx(339,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),Sl(340,"code"),Jx(341,"Line"),sg(),Jx(342," e "),Sl(343,"code"),Jx(344,"Area"),sg()(),Sl(345,"td")(346,"code"),Jx(347,"var(--color-neutral-light-00)"),sg()()(),Sl(348,"tr")(349,"td")(350,"code"),Jx(351,"--border-color-radar"),sg()(),Sl(352,"td"),Jx(353,"Cor do eixo da grid do gr\xE1fico "),Sl(354,"code"),Jx(355,"Radar"),sg()(),Sl(356,"td")(357,"code"),Jx(358,"var(--color-neutral-light-30)"),sg()()(),Sl(359,"tr")(360,"td")(361,"code"),Jx(362,"--color-background-zebra"),sg()(),Sl(363,"td"),Jx(364,"Cor das \xE1reas alternadas (efeito zebrado) da grid do gr\xE1fico "),Sl(365,"code"),Jx(366,"Radar"),sg()(),Sl(367,"td")(368,"code"),Jx(369,"var(--color-neutral-light-10)"),sg()()(),Sl(370,"tr")(371,"td")(372,"code"),Jx(373,"--color-background-line"),sg()(),Sl(374,"td"),Jx(375,"Cor das \xE1reas entre as faixas zebradas da grade do "),Sl(376,"code"),Jx(377,"Radar"),sg()(),Sl(378,"td")(379,"code"),Jx(380,"none"),sg()()(),Sl(381,"tr")(382,"td")(383,"strong"),Jx(384,"Wrapper (.po-chart-container-gauge)"),sg()(),Wl(385,"td")(386,"td"),sg(),Sl(387,"tr")(388,"td")(389,"code"),Jx(390,"--background-color-container-gauge"),sg()(),Sl(391,"td"),Jx(392,"Cor de background do container do gauge"),sg(),Sl(393,"td")(394,"code"),Jx(395,"var(--color-neutral-light-00)"),sg()()()()()(),Sl(396,"div",8)(397,"h4",9),Jx(398,"Seletor"),sg(),Sl(399,"pre",10),Jx(400,`<po-chart
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
`),sg()(),Sl(401,"h4",11),Jx(402,"Propriedades"),sg(),Sl(403,"table",12)(404,"tr",13)(405,"th",14),Jx(406,"Nome"),sg(),Sl(407,"th",14),Jx(408,"Tipo"),sg(),Sl(409,"th",14),Jx(410,"Padr\xE3o"),sg(),Sl(411,"th",14),Jx(412,"Descri\xE7\xE3o"),sg()(),Sl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Jx(417," p-categories"),Wl(418,"br"),sg()()(),Sl(419,"td",19)(420,"code",20),Jx(421,"Array<string> "),sg(),Sl(422,"code",21),Jx(423," PoChartRadarOptions"),sg()(),Sl(424,"td",22),Jx(425,"-"),sg(),Sl(426,"td",23)(427,"em")(428,"strong"),Jx(429,"(opcional)"),sg()(),Sl(430,"p"),Jx(431,"Define os valores utilizados na constru\xE7\xE3o das categorias do gr\xE1fico."),sg(),Sl(432,"p"),Jx(433,"Para gr\xE1ficos dos tipos "),Sl(434,"em"),Jx(435,"bar"),sg(),Jx(436,", "),Sl(437,"em"),Jx(438,"area"),sg(),Jx(439,", "),Sl(440,"em"),Jx(441,"column"),sg(),Jx(442," e "),Sl(443,"em"),Jx(444,"line"),sg(),Jx(445,", representa os nomes das categorias exibidas no eixo."),sg(),Sl(446,"p"),Jx(447,"Para gr\xE1ficos do tipo "),Sl(448,"em"),Jx(449,"radar"),sg(),Jx(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Sl(451,"code"),Jx(452,"Radar"),sg(),Jx(453,"."),sg(),Sl(454,"blockquote")(455,"p"),Jx(456,"Caso nenhum valor seja informado, ser\xE1 utilizado um h\xEDfen como categoria correspondente para cada s\xE9rie."),sg()(),Sl(457,"blockquote")(458,"p"),Jx(459,"Gr\xE1ficos do tipo bar dimensionam sua \xE1rea considerando a largura do maior texto da categoria, sendo recomend\xE1vel utilizar r\xF3tulos curtos para facilitar a leitura."),sg()()()(),Sl(460,"tr",15)(461,"td",16)(462,"div",17)(463,"span",18),Jx(464," p-custom-actions"),Wl(465,"br"),sg()()(),Sl(466,"td",19)(467,"code",24),Jx(468,"Array<PoPopupAction>"),sg()(),Sl(469,"td",22),Jx(470,"-"),sg(),Sl(471,"td",23)(472,"em")(473,"strong"),Jx(474,"(opcional)"),sg()(),Sl(475,"p"),Jx(476,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),sg()()(),Sl(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),Jx(481," p-data-label"),Wl(482,"br"),sg()()(),Sl(483,"td",19)(484,"code",25),Jx(485,"PoChartDataLabel"),sg()(),Sl(486,"td",22),Jx(487,"-"),sg(),Sl(488,"td",23)(489,"em")(490,"strong"),Jx(491,"(opcional)"),sg()(),Sl(492,"p"),Jx(493,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),sg(),Sl(494,"p"),Jx(495,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),sg(),Sl(496,"ul")(497,"li"),Jx(498,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),sg(),Sl(499,"li"),Jx(500,"O "),Sl(501,"em"),Jx(502,"tooltip"),sg(),Jx(503," n\xE3o ser\xE1 exibido."),sg(),Sl(504,"li"),Jx(505,"Os marcadores ("),Sl(506,"em"),Jx(507,"bullets"),sg(),Jx(508,") ter\xE3o seu estilo ajustado."),sg(),Sl(509,"li"),Jx(510,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),sg()(),Sl(511,"blockquote")(512,"p"),Jx(513,"Dispon\xEDvel para gr\xE1ficos do tipo "),Sl(514,"code"),Jx(515,"line"),sg(),Jx(516," e "),Sl(517,"code"),Jx(518,"radar"),sg(),Jx(519,"."),sg()(),Sl(520,"h4"),Jx(521,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(522,"pre")(523,"code",26),Jx(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),sg()()()(),Sl(525,"tr",15)(526,"td",16)(527,"div",17)(528,"span",18),Jx(529," p-height"),Wl(530,"br"),sg()()(),Sl(531,"td",19)(532,"code",27),Jx(533,"number"),sg()(),Sl(534,"td",22)(535,"p")(536,"code"),Jx(537,"400"),sg()()(),Sl(538,"td",23)(539,"em")(540,"strong"),Jx(541,"(opcional)"),sg()(),Sl(542,"p"),Jx(543,"Define a altura do gr\xE1fico em px."),sg(),Sl(544,"blockquote")(545,"p"),Jx(546,"No caso do tipo "),Sl(547,"code"),Jx(548,"Gauge"),sg(),Jx(549,", o valor padr\xE3o \xE9 "),Sl(550,"code"),Jx(551,"300"),sg(),Jx(552," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),sg()()()(),Sl(553,"tr",15)(554,"td",16)(555,"div",17)(556,"span",18),Jx(557," p-literals"),Wl(558,"br"),sg()()(),Sl(559,"td",19)(560,"code",28),Jx(561,"PoChartLiterals"),sg()(),Sl(562,"td",22),Jx(563,"-"),sg(),Sl(564,"td",23)(565,"em")(566,"strong"),Jx(567,"(opcional)"),sg()(),Sl(568,"p"),Jx(569,"Objeto com as literais usadas no "),Sl(570,"code"),Jx(571,"po-chart"),sg(),Jx(572,"."),sg(),Sl(573,"p"),Jx(574,"Para utilizar basta passar a literal que deseja customizar:"),sg(),Sl(575,"pre")(576,"code"),Jx(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),sg()(),Sl(578,"p"),Jx(579,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),sg(),Sl(580,"pre")(581,"code"),Jx(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),sg()(),Sl(583,"blockquote")(584,"p"),Jx(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(586,"a",29)(587,"code"),Jx(588,"PoI18nService"),sg()(),Jx(589," ou do browser."),sg()()()(),Sl(590,"tr",15)(591,"td",16)(592,"div",17)(593,"span",18),Jx(594," p-options"),Wl(595,"br"),sg()()(),Sl(596,"td",19)(597,"code",30),Jx(598,"PoChartOptions"),sg()(),Sl(599,"td",22),Jx(600,"-"),sg(),Sl(601,"td",23)(602,"em")(603,"strong"),Jx(604,"(opcional)"),sg()(),Sl(605,"p"),Jx(606,"Objeto com as configura\xE7\xF5es usadas no "),Sl(607,"code"),Jx(608,"po-chart"),sg(),Jx(609,"."),sg(),Sl(610,"p"),Jx(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Sl(612,"em"),Jx(613,"axis"),sg(),Jx(614,") para os gr\xE1ficos dos tipos "),Sl(615,"code"),Jx(616,"area"),sg(),Jx(617,", "),Sl(618,"code"),Jx(619,"line"),sg(),Jx(620,", "),Sl(621,"code"),Jx(622,"column"),sg(),Jx(623,", "),Sl(624,"code"),Jx(625,"bar"),sg(),Jx(626," e "),Sl(627,"code"),Jx(628,"radar"),sg(),Jx(629," da seguinte forma:"),sg(),Sl(630,"pre")(631,"code"),Jx(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),sg()()()(),Sl(633,"tr",15)(634,"td",16)(635,"div",17)(636,"span",18),Jx(637," p-series"),Wl(638,"br"),sg()()(),Sl(639,"td",19)(640,"code",31),Jx(641,"Array<PoChartSerie>"),sg()(),Sl(642,"td",22),Jx(643,"-"),sg(),Sl(644,"td",23)(645,"p"),Jx(646,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),sg()()(),Sl(647,"tr",15)(648,"td",16)(649,"div",32)(650,"span",33),Jx(651," (p-series-click)"),Wl(652,"br"),sg()()(),Sl(653,"td",19)(654,"code",34),Jx(655,"EventEmitter"),sg()(),Sl(656,"td",22),Jx(657,"-"),sg(),Sl(658,"td",23)(659,"em")(660,"strong"),Jx(661,"(opcional)"),sg()(),Sl(662,"p"),Jx(663,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),sg(),Sl(664,"p"),Jx(665,"O evento emitir\xE1 o seguinte par\xE2metro:"),sg(),Sl(666,"ul")(667,"li")(668,"em"),Jx(669,"donut"),sg(),Jx(670," e "),Sl(671,"em"),Jx(672,"pie"),sg(),Jx(673,": um objeto contendo a categoria e valor da s\xE9rie."),sg(),Sl(674,"li")(675,"em"),Jx(676,"radar"),sg(),Jx(677,": um objeto contendo o nome da s\xE9rie e os valores."),sg(),Sl(678,"li")(679,"em"),Jx(680,"area"),sg(),Jx(681,", "),Sl(682,"em"),Jx(683,"line"),sg(),Jx(684,", "),Sl(685,"em"),Jx(686,"column"),sg(),Jx(687," e "),Sl(688,"em"),Jx(689,"bar"),sg(),Jx(690,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),sg()()()(),Sl(691,"tr",15)(692,"td",16)(693,"div",32)(694,"span",33),Jx(695," (p-series-hover)"),Wl(696,"br"),sg()()(),Sl(697,"td",19)(698,"code",34),Jx(699,"EventEmitter"),sg()(),Sl(700,"td",22),Jx(701,"-"),sg(),Sl(702,"td",23)(703,"em")(704,"strong"),Jx(705,"(opcional)"),sg()(),Sl(706,"p"),Jx(707,"Evento executado quando o usu\xE1rio passar o "),Sl(708,"em"),Jx(709,"mouse"),sg(),Jx(710," sobre um elemento do gr\xE1fico."),sg(),Sl(711,"p"),Jx(712,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),sg(),Sl(713,"ul")(714,"li")(715,"em"),Jx(716,"donut"),sg(),Jx(717," e "),Sl(718,"em"),Jx(719,"pie"),sg(),Jx(720,": um objeto contendo a categoria e valor da s\xE9rie."),sg(),Sl(721,"li")(722,"em"),Jx(723,"radar"),sg(),Jx(724,": um objeto contendo o nome da s\xE9rie e os valores."),sg(),Sl(725,"li")(726,"em"),Jx(727,"area"),sg(),Jx(728,", "),Sl(729,"em"),Jx(730,"line"),sg(),Jx(731,", "),Sl(732,"em"),Jx(733,"column"),sg(),Jx(734," e "),Sl(735,"em"),Jx(736,"bar"),sg(),Jx(737,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),sg()()()(),Sl(738,"tr",15)(739,"td",16)(740,"div",17)(741,"span",18),Jx(742," p-title"),Wl(743,"br"),sg()()(),Sl(744,"td",19)(745,"code",35),Jx(746,"string"),sg()(),Sl(747,"td",22),Jx(748,"-"),sg(),Sl(749,"td",23)(750,"em")(751,"strong"),Jx(752,"(opcional)"),sg()(),Sl(753,"p"),Jx(754,"Define o t\xEDtulo do gr\xE1fico."),sg()()(),Sl(755,"tr",15)(756,"td",16)(757,"div",17)(758,"span",18),Jx(759," p-type"),Wl(760,"br"),sg()()(),Sl(761,"td",19)(762,"code",36),Jx(763,"PoChartType"),sg()(),Sl(764,"td",22),Jx(765,"-"),sg(),Sl(766,"td",23)(767,"em")(768,"strong"),Jx(769,"(opcional)"),sg()(),Sl(770,"p"),Jx(771,"Define o tipo de gr\xE1fico."),sg(),Sl(772,"p"),Jx(773,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),Sl(774,"code"),Jx(775,"type"),sg(),Jx(776," conforme a interface "),Sl(777,"code"),Jx(778,"PoChartSerie"),sg(),Jx(779,"."),sg(),Sl(780,"blockquote")(781,"p"),Jx(782,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),Sl(783,"code"),Jx(784,"p-type"),sg(),Jx(785," quanto em "),Sl(786,"code"),Jx(787,"PochartSerie.type"),sg(),Jx(788,", o valor "),Sl(789,"code"),Jx(790,"{ type }"),sg(),Jx(791," da primeira s\xE9rie anular\xE1 o valor definido em "),Sl(792,"code"),Jx(793,"p-type"),sg(),Jx(794,"."),sg()(),Sl(795,"p"),Jx(796,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),Sl(797,"code"),Jx(798,"p-series"),sg(),Jx(799,":"),sg(),Sl(800,"ul")(801,"li"),Jx(802,"Se "),Sl(803,"code"),Jx(804,"p-series = [{ data: [1,2,3] }]"),sg(),Jx(805,": ser\xE1 "),Sl(806,"code"),Jx(807,"PoChartType.Column"),sg(),Jx(808,"."),sg(),Sl(809,"li"),Jx(810,"Se "),Sl(811,"code"),Jx(812,"p-series = [{ data: 1 }]"),sg(),Jx(813,": ser\xE1 "),Sl(814,"code"),Jx(815,"PoChartType.Pie"),sg(),Jx(816,"."),sg()(),Sl(817,"blockquote")(818,"p"),Jx(819,"Veja os valores v\xE1lidos no "),Sl(820,"em"),Jx(821,"enum"),sg(),Sl(822,"code"),Jx(823,"PoChartType"),sg(),Jx(824,"."),sg()()()(),Sl(825,"tr",15)(826,"td",16)(827,"div",17)(828,"span",18),Jx(829," p-value-gauge-multiple"),Wl(830,"br"),sg()()(),Sl(831,"td",19)(832,"code",27),Jx(833,"number"),sg()(),Sl(834,"td",22),Jx(835,"-"),sg(),Sl(836,"td",23)(837,"em")(838,"strong"),Jx(839,"(opcional)"),sg()(),Sl(840,"p"),Jx(841,"Define o valor do gr\xE1fico do tipo "),Sl(842,"code"),Jx(843,"Gauge"),sg(),Jx(844," quando utliza as propriedades "),Sl(845,"code"),Jx(846,"From"),sg(),Sl(847,"code"),Jx(848,"To"),sg(),Jx(849,"."),sg()()()(),Sl(850,"h3"),Jx(851,"Interfaces"),sg(),Sl(852,"h4",37)(853,"code",5),Jx(854,"PoChartAxisOptions"),sg()(),Sl(855,"div",2)(856,"p")(857,"em"),Jx(858,"Interface"),sg(),Jx(859," que define os eixos do grid."),sg()(),Sl(860,"h4",11),Jx(861,"Propriedades"),sg(),Sl(862,"table",12)(863,"tr",13)(864,"th",14),Jx(865,"Nome"),sg(),Sl(866,"th",14),Jx(867,"Tipo"),sg(),Sl(868,"th",14),Jx(869,"Descri\xE7\xE3o"),sg()(),Sl(870,"tr",15)(871,"td",16)(872,"div",17)(873,"span",18),Jx(874," gridLines"),Wl(875,"br"),sg()()(),Sl(876,"td",19)(877,"code",27),Jx(878,"number"),sg()(),Sl(879,"td",23)(880,"em")(881,"strong"),Jx(882,"(opcional)"),sg()(),Sl(883,"p"),Jx(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Sl(885,"code"),Jx(886,"Area"),sg(),Jx(887,", "),Sl(888,"code"),Jx(889,"Line"),sg(),Jx(890," e "),Sl(891,"code"),Jx(892,"Column"),sg(),Jx(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Sl(894,"code"),Jx(895,"Bar"),sg(),Jx(896,", tratar\xE1 as linhas verticais (eixo Y)."),sg(),Sl(897,"p"),Jx(898,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),sg(),Sl(899,"ul")(900,"li"),Jx(901,"Quantidade padr\xE3o de linhas: '5';"),sg(),Sl(902,"li"),Jx(903,"Quantidade m\xEDnima permitida: '2';"),sg()()()(),Sl(904,"tr",15)(905,"td",16)(906,"div",17)(907,"span",18),Jx(908," labelType"),Wl(909,"br"),sg()()(),Sl(910,"td",19)(911,"code",38),Jx(912,"PoChartLabelFormat"),sg()(),Sl(913,"td",23)(914,"em")(915,"strong"),Jx(916,"(opcional)"),sg()(),Sl(917,"p"),Jx(918,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),sg()()(),Sl(919,"tr",15)(920,"td",16)(921,"div",17)(922,"span",18),Jx(923," maxRange"),Wl(924,"br"),sg()()(),Sl(925,"td",19)(926,"code",27),Jx(927,"number"),sg()(),Sl(928,"td",23)(929,"em")(930,"strong"),Jx(931,"(opcional)"),sg()(),Sl(932,"p"),Jx(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),sg(),Sl(934,"blockquote")(935,"p"),Jx(936,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),sg()()()(),Sl(937,"tr",15)(938,"td",16)(939,"div",17)(940,"span",18),Jx(941," minRange"),Wl(942,"br"),sg()()(),Sl(943,"td",19)(944,"code",27),Jx(945,"number"),sg()(),Sl(946,"td",23)(947,"em")(948,"strong"),Jx(949,"(opcional)"),sg()(),Sl(950,"p"),Jx(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),sg(),Sl(952,"blockquote")(953,"p"),Jx(954,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),sg()()()(),Sl(955,"tr",15)(956,"td",16)(957,"div",17)(958,"span",18),Jx(959," paddingBottom"),Wl(960,"br"),sg()()(),Sl(961,"td",19)(962,"code",27),Jx(963,"number"),sg()(),Sl(964,"td",23)(965,"em")(966,"strong"),Jx(967,"(opcional)"),sg()(),Sl(968,"p"),Jx(969,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),sg()()(),Sl(970,"tr",15)(971,"td",16)(972,"div",17)(973,"span",18),Jx(974," paddingLeft"),Wl(975,"br"),sg()()(),Sl(976,"td",19)(977,"code",27),Jx(978,"number"),sg()(),Sl(979,"td",23)(980,"em")(981,"strong"),Jx(982,"(opcional)"),sg()(),Sl(983,"p"),Jx(984,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),sg()()(),Sl(985,"tr",15)(986,"td",16)(987,"div",17)(988,"span",18),Jx(989," paddingRight"),Wl(990,"br"),sg()()(),Sl(991,"td",19)(992,"code",27),Jx(993,"number"),sg()(),Sl(994,"td",23)(995,"em")(996,"strong"),Jx(997,"(opcional)"),sg()(),Sl(998,"p"),Jx(999,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),sg()()(),Sl(1e3,"tr",15)(1001,"td",16)(1002,"div",17)(1003,"span",18),Jx(1004," rotateLegend"),Wl(1005,"br"),sg()()(),Sl(1006,"td",19)(1007,"code",27),Jx(1008,"number"),sg()(),Sl(1009,"td",23)(1010,"em")(1011,"strong"),Jx(1012,"(opcional)"),sg()(),Sl(1013,"p"),Jx(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),sg(),Sl(1015,"ul")(1016,"li"),Jx(1017,"Valores negativos giram a legenda para a esquerda."),sg(),Sl(1018,"li"),Jx(1019,"Valores positivos giram a legenda para a direita."),sg()(),Sl(1020,"p"),Jx(1021,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),sg()()(),Sl(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),Jx(1026," showAxisDetails"),Wl(1027,"br"),sg()()(),Sl(1028,"td",19)(1029,"code",39),Jx(1030,"boolean"),sg()(),Sl(1031,"td",23)(1032,"em")(1033,"strong"),Jx(1034,"(opcional)"),sg()(),Sl(1035,"p"),Jx(1036,"Exibe a linha de detalhes que acompanha o mouse"),sg()()(),Sl(1037,"tr",15)(1038,"td",16)(1039,"div",17)(1040,"span",18),Jx(1041," showXAxis"),Wl(1042,"br"),sg()()(),Sl(1043,"td",19)(1044,"code",39),Jx(1045,"boolean"),sg()(),Sl(1046,"td",23)(1047,"em")(1048,"strong"),Jx(1049,"(opcional)"),sg()(),Sl(1050,"p"),Jx(1051,"Exibe a linha do eixo X"),sg()()(),Sl(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),Jx(1056," showYAxis"),Wl(1057,"br"),sg()()(),Sl(1058,"td",19)(1059,"code",39),Jx(1060,"boolean"),sg()(),Sl(1061,"td",23)(1062,"em")(1063,"strong"),Jx(1064,"(opcional)"),sg()(),Sl(1065,"p"),Jx(1066,"Exibe a linha do eixo Y"),sg()()()(),Sl(1067,"h4",37)(1068,"code",5),Jx(1069,"PoChartHeaderOptions"),sg()(),Sl(1070,"div",2)(1071,"p")(1072,"em"),Jx(1073,"Interface"),sg(),Jx(1074," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),sg()(),Sl(1075,"h4",11),Jx(1076,"Propriedades"),sg(),Sl(1077,"table",12)(1078,"tr",13)(1079,"th",14),Jx(1080,"Nome"),sg(),Sl(1081,"th",14),Jx(1082,"Tipo"),sg(),Sl(1083,"th",14),Jx(1084,"Descri\xE7\xE3o"),sg()(),Sl(1085,"tr",15)(1086,"td",16)(1087,"div",17)(1088,"span",18),Jx(1089," hideExpand"),Wl(1090,"br"),sg()()(),Sl(1091,"td",19)(1092,"code",39),Jx(1093,"boolean"),sg()(),Sl(1094,"td",23)(1095,"em")(1096,"strong"),Jx(1097,"(opcional)"),sg()(),Sl(1098,"p"),Jx(1099,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),sg()()(),Sl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),Jx(1104," hideExportCsv"),Wl(1105,"br"),sg()()(),Sl(1106,"td",19)(1107,"code",39),Jx(1108,"boolean"),sg()(),Sl(1109,"td",23)(1110,"em")(1111,"strong"),Jx(1112,"(opcional)"),sg()(),Sl(1113,"p"),Jx(1114,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),sg()()(),Sl(1115,"tr",15)(1116,"td",16)(1117,"div",17)(1118,"span",18),Jx(1119," hideExportImage"),Wl(1120,"br"),sg()()(),Sl(1121,"td",19)(1122,"code",39),Jx(1123,"boolean"),sg()(),Sl(1124,"td",23)(1125,"em")(1126,"strong"),Jx(1127,"(opcional)"),sg()(),Sl(1128,"p"),Jx(1129,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),sg()()(),Sl(1130,"tr",15)(1131,"td",16)(1132,"div",17)(1133,"span",18),Jx(1134," hideTableDetails"),Wl(1135,"br"),sg()()(),Sl(1136,"td",19)(1137,"code",39),Jx(1138,"boolean"),sg()(),Sl(1139,"td",23)(1140,"em")(1141,"strong"),Jx(1142,"(opcional)"),sg()(),Sl(1143,"p"),Jx(1144,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),sg()()()(),Sl(1145,"h4",37)(1146,"code",5),Jx(1147,"PoChartIndicatorOptions"),sg()(),Sl(1148,"div",2)(1149,"p"),Jx(1150,"Interface para configura\xE7\xF5es dos indicadores do gr\xE1fico "),Sl(1151,"code"),Jx(1152,"radar"),sg(),Jx(1153,"."),sg()(),Sl(1154,"h4",11),Jx(1155,"Propriedades"),sg(),Sl(1156,"table",12)(1157,"tr",13)(1158,"th",14),Jx(1159,"Nome"),sg(),Sl(1160,"th",14),Jx(1161,"Tipo"),sg(),Sl(1162,"th",14),Jx(1163,"Descri\xE7\xE3o"),sg()(),Sl(1164,"tr",15)(1165,"td",16)(1166,"div",17)(1167,"span",18),Jx(1168," color"),Wl(1169,"br"),sg()()(),Sl(1170,"td",19)(1171,"code",35),Jx(1172,"string"),sg()(),Sl(1173,"td",23)(1174,"em")(1175,"strong"),Jx(1176,"(opcional)"),sg()(),Sl(1177,"p"),Jx(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),sg(),Sl(1179,"blockquote")(1180,"p"),Jx(1181,"Nome da cor, hexadecimal ou RGB."),sg()()()(),Sl(1182,"tr",15)(1183,"td",16)(1184,"div",17)(1185,"span",18),Jx(1186," max"),Wl(1187,"br"),sg()()(),Sl(1188,"td",19)(1189,"code",27),Jx(1190,"number"),sg()(),Sl(1191,"td",23)(1192,"em")(1193,"strong"),Jx(1194,"(opcional)"),sg()(),Sl(1195,"p"),Jx(1196,"Valor m\xE1ximo do indicator."),sg(),Sl(1197,"p"),Jx(1198,"A propriedade "),Sl(1199,"code"),Jx(1200,"max"),sg(),Jx(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),sg()()(),Sl(1202,"tr",15)(1203,"td",16)(1204,"div",17)(1205,"span",18),Jx(1206," min"),Wl(1207,"br"),sg()()(),Sl(1208,"td",19)(1209,"code",27),Jx(1210,"number"),sg()(),Sl(1211,"td",23)(1212,"em")(1213,"strong"),Jx(1214,"(opcional)"),sg()(),Sl(1215,"p"),Jx(1216,"Valor m\xEDnimo do indicator, com valor padr\xE3o de 0."),sg(),Sl(1217,"p"),Jx(1218,"A propriedade "),Sl(1219,"code"),Jx(1220,"min"),sg(),Jx(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),sg()()(),Sl(1222,"tr",15)(1223,"td",16)(1224,"div",17)(1225,"span",18),Jx(1226," name"),Wl(1227,"br"),sg()()(),Sl(1228,"td",19)(1229,"code",35),Jx(1230,"string"),sg()(),Sl(1231,"td",23)(1232,"em")(1233,"strong"),Jx(1234,"(opcional)"),sg()(),Sl(1235,"p"),Jx(1236,"Nome do indicator."),sg()()()(),Sl(1237,"h4",37)(1238,"code",5),Jx(1239,"PoChartLiterals"),sg()(),Sl(1240,"div",2)(1241,"p"),Jx(1242,"Interface para defini\xE7\xE3o dos literais usadas no "),Sl(1243,"code"),Jx(1244,"po-chart"),sg(),Jx(1245,"."),sg()(),Sl(1246,"h4",11),Jx(1247,"Propriedades"),sg(),Sl(1248,"table",12)(1249,"tr",13)(1250,"th",14),Jx(1251,"Nome"),sg(),Sl(1252,"th",14),Jx(1253,"Tipo"),sg(),Sl(1254,"th",14),Jx(1255,"Descri\xE7\xE3o"),sg()(),Sl(1256,"tr",15)(1257,"td",16)(1258,"div",17)(1259,"span",18),Jx(1260," category"),Wl(1261,"br"),sg()()(),Sl(1262,"td",19)(1263,"code",35),Jx(1264,"string"),sg()(),Sl(1265,"td",23)(1266,"em")(1267,"strong"),Jx(1268,"(opcional)"),sg()(),Sl(1269,"p"),Jx(1270,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),Sl(1271,"code"),Jx(1272,"Bar"),sg(),Jx(1273,"."),sg()()(),Sl(1274,"tr",15)(1275,"td",16)(1276,"div",17)(1277,"span",18),Jx(1278," downloadCSV"),Wl(1279,"br"),sg()()(),Sl(1280,"td",19)(1281,"code",35),Jx(1282,"string"),sg()(),Sl(1283,"td",23)(1284,"em")(1285,"strong"),Jx(1286,"(opcional)"),sg()(),Sl(1287,"p"),Jx(1288,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),sg()()(),Sl(1289,"tr",15)(1290,"td",16)(1291,"div",17)(1292,"span",18),Jx(1293," exportCSV"),Wl(1294,"br"),sg()()(),Sl(1295,"td",19)(1296,"code",35),Jx(1297,"string"),sg()(),Sl(1298,"td",23)(1299,"em")(1300,"strong"),Jx(1301,"(opcional)"),sg()(),Sl(1302,"p"),Jx(1303,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),sg()()(),Sl(1304,"tr",15)(1305,"td",16)(1306,"div",17)(1307,"span",18),Jx(1308," exportJPG"),Wl(1309,"br"),sg()()(),Sl(1310,"td",19)(1311,"code",35),Jx(1312,"string"),sg()(),Sl(1313,"td",23)(1314,"em")(1315,"strong"),Jx(1316,"(opcional)"),sg()(),Sl(1317,"p"),Jx(1318,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),sg()()(),Sl(1319,"tr",15)(1320,"td",16)(1321,"div",17)(1322,"span",18),Jx(1323," exportPNG"),Wl(1324,"br"),sg()()(),Sl(1325,"td",19)(1326,"code",35),Jx(1327,"string"),sg()(),Sl(1328,"td",23)(1329,"em")(1330,"strong"),Jx(1331,"(opcional)"),sg()(),Sl(1332,"p"),Jx(1333,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),sg()()(),Sl(1334,"tr",15)(1335,"td",16)(1336,"div",17)(1337,"span",18),Jx(1338," item"),Wl(1339,"br"),sg()()(),Sl(1340,"td",19)(1341,"code",35),Jx(1342,"string"),sg()(),Sl(1343,"td",23)(1344,"em")(1345,"strong"),Jx(1346,"(opcional)"),sg()(),Sl(1347,"p"),Jx(1348,"Texto dos t\xEDtulos das colunas "),Sl(1349,"code"),Jx(1350,"Gauge"),sg(),Jx(1351," e n\xE3o possui label."),sg()()(),Sl(1352,"tr",15)(1353,"td",16)(1354,"div",17)(1355,"span",18),Jx(1356," serie"),Wl(1357,"br"),sg()()(),Sl(1358,"td",19)(1359,"code",35),Jx(1360,"string"),sg()(),Sl(1361,"td",23)(1362,"em")(1363,"strong"),Jx(1364,"(opcional)"),sg()(),Sl(1365,"p"),Jx(1366,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),Sl(1367,"code"),Jx(1368,"Bar"),sg(),Jx(1369," e "),Sl(1370,"code"),Jx(1371,"Gauge"),sg(),Jx(1372,"."),sg()()(),Sl(1373,"tr",15)(1374,"td",16)(1375,"div",17)(1376,"span",18),Jx(1377," value"),Wl(1378,"br"),sg()()(),Sl(1379,"td",19)(1380,"code",35),Jx(1381,"string"),sg()(),Sl(1382,"td",23)(1383,"em")(1384,"strong"),Jx(1385,"(opcional)"),sg()(),Sl(1386,"p"),Jx(1387,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),Sl(1388,"code"),Jx(1389,"Gauge"),sg(),Jx(1390,"."),sg()()()(),Sl(1391,"h4",37)(1392,"code",5),Jx(1393,"PoChartOptions"),sg()(),Sl(1394,"div",2)(1395,"p")(1396,"em"),Jx(1397,"Interface"),sg(),Jx(1398," para configura\xE7\xF5es dos elementos do gr\xE1fico."),sg()(),Sl(1399,"h4",11),Jx(1400,"Propriedades"),sg(),Sl(1401,"table",12)(1402,"tr",13)(1403,"th",14),Jx(1404,"Nome"),sg(),Sl(1405,"th",14),Jx(1406,"Tipo"),sg(),Sl(1407,"th",14),Jx(1408,"Descri\xE7\xE3o"),sg()(),Sl(1409,"tr",15)(1410,"td",16)(1411,"div",17)(1412,"span",18),Jx(1413," areaStyle"),Wl(1414,"br"),sg()()(),Sl(1415,"td",19)(1416,"code",39),Jx(1417,"boolean"),sg()(),Sl(1418,"td",23)(1419,"em")(1420,"strong"),Jx(1421,"(opcional)"),sg()(),Sl(1422,"p"),Jx(1423,"Define se as s\xE9ries ter\xE3o sua \xE1rea preenchida."),sg(),Sl(1424,"blockquote")(1425,"p"),Jx(1426,"Esta propriedade tem preced\xEAncia sobre a defini\xE7\xE3o de "),Sl(1427,"code"),Jx(1428,"areaStyle"),sg(),Jx(1429," em cada s\xE9rie, "),Sl(1430,"code"),Jx(1431,"fillpoints"),sg(),Jx(1432," n\xE3o funciona quando "),Sl(1433,"code"),Jx(1434,"areaStyle"),sg(),Jx(1435," est\xE1 definido como "),Sl(1436,"code"),Jx(1437,"true"),sg(),Jx(1438,"."),sg()()()(),Sl(1439,"tr",15)(1440,"td",16)(1441,"div",17)(1442,"span",18),Jx(1443," axis"),Wl(1444,"br"),sg()()(),Sl(1445,"td",19)(1446,"code",40),Jx(1447,"PoChartAxisOptions"),sg()(),Sl(1448,"td",23)(1449,"em")(1450,"strong"),Jx(1451,"(opcional)"),sg()(),Sl(1452,"p"),Jx(1453,"Define um objeto do tipo "),Sl(1454,"code"),Jx(1455,"PoChartAxisOptions"),sg(),Jx(1456," para configura\xE7\xE3o dos eixos."),sg()()(),Sl(1457,"tr",15)(1458,"td",16)(1459,"div",17)(1460,"span",18),Jx(1461," borderRadius"),Wl(1462,"br"),sg()()(),Sl(1463,"td",19)(1464,"code",27),Jx(1465,"number"),sg()(),Sl(1466,"td",23)(1467,"em")(1468,"strong"),Jx(1469,"(opcional)"),sg()(),Sl(1470,"p"),Jx(1471,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),Sl(1472,"code"),Jx(1473,"Donut"),sg(),Jx(1474,", "),Sl(1475,"code"),Jx(1476,"Pie"),sg(),Jx(1477,"."),sg(),Sl(1478,"blockquote")(1479,"p"),Jx(1480,"Valores v\xE1lidos entre 0 e 100,"),sg()()()(),Sl(1481,"tr",15)(1482,"td",16)(1483,"div",17)(1484,"span",18),Jx(1485," bottomDataZoom"),Wl(1486,"br"),sg()()(),Sl(1487,"td",19)(1488,"code",39),Jx(1489,"boolean "),sg(),Sl(1490,"code",27),Jx(1491," number"),sg()(),Sl(1492,"td",23)(1493,"em")(1494,"strong"),Jx(1495,"(opcional)"),sg()(),Sl(1496,"p"),Jx(1497,"Define a dist\xE2ncia inferior do componente DataZoom."),sg(),Sl(1498,"p"),Jx(1499,"Esta propriedade aceita os seguintes valores:"),sg(),Sl(1500,"ul")(1501,"li")(1502,"p")(1503,"code"),Jx(1504,"false"),sg(),Jx(1505," (padr\xE3o): n\xE3o aplica ajustes."),sg()(),Sl(1506,"li")(1507,"p")(1508,"code"),Jx(1509,"true"),sg(),Jx(1510,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),sg(),Sl(1511,"ul")(1512,"li")(1513,"code"),Jx(1514,"8"),sg(),Jx(1515," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),sg(),Sl(1516,"li")(1517,"code"),Jx(1518,"32"),sg(),Jx(1519," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),sg()()(),Sl(1520,"li")(1521,"p")(1522,"code"),Jx(1523,"number"),sg(),Jx(1524,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),sg()()(),Sl(1525,"blockquote")(1526,"p"),Jx(1527,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),Sl(1528,"code"),Jx(1529,"dataZoom: true"),sg(),Jx(1530,")."),sg()()()(),Sl(1531,"tr",15)(1532,"td",16)(1533,"div",17)(1534,"span",18),Jx(1535," dataZoom"),Wl(1536,"br"),sg()()(),Sl(1537,"td",19)(1538,"code",39),Jx(1539,"boolean"),sg()(),Sl(1540,"td",23)(1541,"em")(1542,"strong"),Jx(1543,"(opcional)"),sg()(),Sl(1544,"p"),Jx(1545,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),sg()()(),Sl(1546,"tr",15)(1547,"td",16)(1548,"div",17)(1549,"span",18),Jx(1550," descriptionChart"),Wl(1551,"br"),sg()()(),Sl(1552,"td",19)(1553,"code",35),Jx(1554,"string"),sg()(),Sl(1555,"td",23)(1556,"em")(1557,"strong"),Jx(1558,"(opcional)"),sg()(),Sl(1559,"p"),Jx(1560,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),sg()()(),Sl(1561,"tr",15)(1562,"td",16)(1563,"div",17)(1564,"span",18),Jx(1565," fillPoints"),Wl(1566,"br"),sg()()(),Sl(1567,"td",19)(1568,"code",39),Jx(1569,"boolean"),sg()(),Sl(1570,"td",23)(1571,"em")(1572,"strong"),Jx(1573,"(opcional)"),sg()(),Sl(1574,"p"),Jx(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),sg(),Sl(1576,"blockquote")(1577,"p"),Jx(1578,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),Sl(1579,"code"),Jx(1580,"Area"),sg(),Jx(1581,", "),Sl(1582,"code"),Jx(1583,"Line"),sg(),Jx(1584," e "),Sl(1585,"code"),Jx(1586,"Radar"),sg(),Jx(1587,`.
Para o tipo `),Sl(1588,"code"),Jx(1589,"Radar"),sg(),Jx(1590,", o valor padr\xE3o \xE9 "),Sl(1591,"code"),Jx(1592,"true"),sg(),Jx(1593,"."),sg()()()(),Sl(1594,"tr",15)(1595,"td",16)(1596,"div",17)(1597,"span",18),Jx(1598," firstColumnName"),Wl(1599,"br"),sg()()(),Sl(1600,"td",19)(1601,"code",35),Jx(1602,"string"),sg()(),Sl(1603,"td",23)(1604,"em")(1605,"strong"),Jx(1606,"(opcional)"),sg()(),Sl(1607,"p"),Jx(1608,"Valor que permite customizar o nome da "),Sl(1609,"code"),Jx(1610,"TH"),sg(),Jx(1611," da primeira coluna da tabela descritiva."),sg()()(),Sl(1612,"tr",15)(1613,"td",16)(1614,"div",17)(1615,"span",18),Jx(1616," header"),Wl(1617,"br"),sg()()(),Sl(1618,"td",19)(1619,"code",41),Jx(1620,"PoChartHeaderOptions"),sg()(),Sl(1621,"td",23)(1622,"em")(1623,"strong"),Jx(1624,"(opcional)"),sg()(),Sl(1625,"p"),Jx(1626,"Define um objeto do tipo "),Sl(1627,"code"),Jx(1628,"PoChartHeaderOptions"),sg(),Jx(1629," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),sg()()(),Sl(1630,"tr",15)(1631,"td",16)(1632,"div",17)(1633,"span",18),Jx(1634," innerRadius"),Wl(1635,"br"),sg()()(),Sl(1636,"td",19)(1637,"code",27),Jx(1638,"number"),sg()(),Sl(1639,"td",23)(1640,"em")(1641,"strong"),Jx(1642,"(opcional)"),sg()(),Sl(1643,"p"),Jx(1644,"Define o di\xE2metro, em valor percentual entre "),Sl(1645,"code"),Jx(1646,"0"),sg(),Jx(1647," e "),Sl(1648,"code"),Jx(1649,"100"),sg(),Jx(1650,", da \xE1rea central para gr\xE1ficos do tipo "),Sl(1651,"code"),Jx(1652,"donut"),sg(),Jx(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Sl(1654,"code"),Jx(1655,"40px"),sg(),Jx(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),sg()()(),Sl(1657,"tr",15)(1658,"td",16)(1659,"div",17)(1660,"span",18),Jx(1661," legend"),Wl(1662,"br"),sg()()(),Sl(1663,"td",19)(1664,"code",39),Jx(1665,"boolean"),sg()(),Sl(1666,"td",23)(1667,"em")(1668,"strong"),Jx(1669,"(opcional)"),sg()(),Sl(1670,"p"),Jx(1671,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),Sl(1672,"code"),Jx(1673,"true"),sg()()()(),Sl(1674,"tr",15)(1675,"td",16)(1676,"div",17)(1677,"span",18),Jx(1678," legendPosition"),Wl(1679,"br"),sg()()(),Sl(1680,"td",19)(1681,"code",42),Jx(1682,"'left' "),sg(),Sl(1683,"code",43),Jx(1684," 'center' "),sg(),Sl(1685,"code",44),Jx(1686," 'right'"),sg()(),Sl(1687,"td",23)(1688,"em")(1689,"strong"),Jx(1690,"(opcional)"),sg()(),Sl(1691,"p"),Jx(1692,"Define o alinhamento horizontal da legenda."),sg(),Sl(1693,"blockquote")(1694,"p"),Jx(1695,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Sl(1696,"code"),Jx(1697,"Gauge"),sg(),Jx(1698,"."),sg()()()(),Sl(1699,"tr",15)(1700,"td",16)(1701,"div",17)(1702,"span",18),Jx(1703," legendType"),Wl(1704,"br"),sg()()(),Sl(1705,"td",19)(1706,"code",45),Jx(1707,"'plain' "),sg(),Sl(1708,"code",46),Jx(1709," 'scroll'"),sg()(),Sl(1710,"td",23)(1711,"em")(1712,"strong"),Jx(1713,"(opcional)"),sg()(),Sl(1714,"p"),Jx(1715,"Define o tipo da legenda."),sg(),Sl(1716,"ul")(1717,"li")(1718,"code"),Jx(1719,"plain"),sg(),Jx(1720,": exibe todas as legendas de forma est\xE1tica."),sg(),Sl(1721,"li")(1722,"code"),Jx(1723,"scroll"),sg(),Jx(1724,": habilita rolagem quando a quantidade de legendas exceder o espa\xE7o dispon\xEDvel no gr\xE1fico."),sg()(),Sl(1725,"blockquote")(1726,"p"),Jx(1727,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Sl(1728,"code"),Jx(1729,"Gauge"),sg(),Jx(1730,"."),sg()()()(),Sl(1731,"tr",15)(1732,"td",16)(1733,"div",17)(1734,"span",18),Jx(1735," legendVerticalPosition"),Wl(1736,"br"),sg()()(),Sl(1737,"td",19)(1738,"code",47),Jx(1739,"'top' "),sg(),Sl(1740,"code",48),Jx(1741," 'bottom'"),sg()(),Sl(1742,"td",23)(1743,"em")(1744,"strong"),Jx(1745,"(opcional)"),sg()(),Sl(1746,"p"),Jx(1747,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),sg(),Sl(1748,"blockquote")(1749,"p"),Jx(1750,"Quando utilizada com o valor "),Sl(1751,"code"),Jx(1752,"top"),sg(),Jx(1753,", recomenda-se configurar tamb\xE9m a propriedade "),Sl(1754,"code"),Jx(1755,"bottomDataZoom"),sg(),Jx(1756," caso o "),Sl(1757,"code"),Jx(1758,"dataZoom"),sg(),Jx(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Sl(1760,"code"),Jx(1761,"Gauge"),sg(),Jx(1762,"."),sg()()()(),Sl(1763,"tr",15)(1764,"td",16)(1765,"div",17)(1766,"span",18),Jx(1767," pointer"),Wl(1768,"br"),sg()()(),Sl(1769,"td",19)(1770,"code",39),Jx(1771,"boolean"),sg()(),Sl(1772,"td",23)(1773,"em")(1774,"strong"),Jx(1775,"(opcional)"),sg()(),Sl(1776,"p"),Jx(1777,"Define a exibi\xE7\xE3o do ponteiro."),sg(),Sl(1778,"blockquote")(1779,"p"),Jx(1780,"V\xE1lido para gr\xE1fico do tipo "),Sl(1781,"code"),Jx(1782,"Gauge"),sg(),Jx(1783,"."),sg()()()(),Sl(1784,"tr",15)(1785,"td",16)(1786,"div",17)(1787,"span",18),Jx(1788," rendererOption"),Wl(1789,"br"),sg()()(),Sl(1790,"td",19)(1791,"code",49),Jx(1792,"'canvas' "),sg(),Sl(1793,"code",50),Jx(1794," 'svg'"),sg()(),Sl(1795,"td",23)(1796,"em")(1797,"strong"),Jx(1798,"(opcional)"),sg()(),Sl(1799,"p"),Jx(1800,"Define como o gr\xE1fico ser\xE1 renderizado."),sg(),Sl(1801,"blockquote")(1802,"p"),Jx(1803,"Recomenda-se n\xE3o modificar o valor da propriedade "),Sl(1804,"code"),Jx(1805,"rendererOption"),sg(),Jx(1806," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),sg()()()(),Sl(1807,"tr",15)(1808,"td",16)(1809,"div",17)(1810,"span",18),Jx(1811," roseType"),Wl(1812,"br"),sg()()(),Sl(1813,"td",19)(1814,"code",39),Jx(1815,"boolean"),sg()(),Sl(1816,"td",23)(1817,"em")(1818,"strong"),Jx(1819,"(opcional)"),sg()(),Sl(1820,"p"),Jx(1821,"Transforma os gr\xE1ficos do tipo "),Sl(1822,"code"),Jx(1823,"Donut"),sg(),Jx(1824," ou "),Sl(1825,"code"),Jx(1826,"Pie"),sg(),Jx(1827," num gr\xE1fico de \xE1rea polar."),sg(),Sl(1828,"blockquote")(1829,"p"),Jx(1830,"V\xE1lido para os gr\xE1ficos "),Sl(1831,"code"),Jx(1832,"Donut"),sg(),Jx(1833," e "),Sl(1834,"code"),Jx(1835,"Pie"),sg(),Jx(1836,"."),sg()()()(),Sl(1837,"tr",15)(1838,"td",16)(1839,"div",17)(1840,"span",18),Jx(1841," showContainerGauge"),Wl(1842,"br"),sg()()(),Sl(1843,"td",19)(1844,"code",39),Jx(1845,"boolean"),sg()(),Sl(1846,"td",23)(1847,"em")(1848,"strong"),Jx(1849,"(opcional)"),sg()(),Sl(1850,"p"),Jx(1851,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),sg(),Sl(1852,"blockquote")(1853,"p"),Jx(1854,"V\xE1lido para gr\xE1fico do tipo "),Sl(1855,"code"),Jx(1856,"Gauge"),sg(),Jx(1857,"."),sg()()()(),Sl(1858,"tr",15)(1859,"td",16)(1860,"div",17)(1861,"span",18),Jx(1862," showFromToLegend"),Wl(1863,"br"),sg()()(),Sl(1864,"td",19)(1865,"code",39),Jx(1866,"boolean"),sg()(),Sl(1867,"td",23)(1868,"em")(1869,"strong"),Jx(1870,"(opcional)"),sg()(),Sl(1871,"p"),Jx(1872,"Exibe os valores das propriedades "),Sl(1873,"code"),Jx(1874,"from"),sg(),Jx(1875," e "),Sl(1876,"code"),Jx(1877,"to"),sg(),Jx(1878," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),sg(),Sl(1879,"blockquote")(1880,"p"),Jx(1881,"V\xE1lido para gr\xE1fico do tipo "),Sl(1882,"code"),Jx(1883,"Gauge"),sg(),Jx(1884,"."),sg()()()(),Sl(1885,"tr",15)(1886,"td",16)(1887,"div",17)(1888,"span",18),Jx(1889," stacked"),Wl(1890,"br"),sg()()(),Sl(1891,"td",19)(1892,"code",39),Jx(1893,"boolean"),sg()(),Sl(1894,"td",23)(1895,"em")(1896,"strong"),Jx(1897,"(opcional)"),sg()(),Sl(1898,"p"),Jx(1899,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),Sl(1900,"code"),Jx(1901,"stackGroupName"),sg(),Jx(1902," da interface "),Sl(1903,"code"),Jx(1904,"PoChartSerie"),sg()(),Sl(1905,"blockquote")(1906,"p"),Jx(1907,"V\xE1lido para gr\xE1fico do tipo "),Sl(1908,"code"),Jx(1909,"Column"),sg(),Jx(1910," e "),Sl(1911,"code"),Jx(1912,"Bar"),sg(),Jx(1913,"."),sg()(),Sl(1914,"blockquote")(1915,"p"),Jx(1916,"Essa propriedade habilita a propriedade "),Sl(1917,"code"),Jx(1918,"p-data-label"),sg(),Jx(1919," por padr\xE3o, podendo ser desabilitada passando "),Sl(1920,"code"),Jx(1921,"[p-data-label]={ fixed: false }"),sg(),Jx(1922,"."),sg()()()(),Sl(1923,"tr",15)(1924,"td",16)(1925,"div",17)(1926,"span",18),Jx(1927," subtitleGauge"),Wl(1928,"br"),sg()()(),Sl(1929,"td",19)(1930,"code",35),Jx(1931,"string"),sg()(),Sl(1932,"td",23)(1933,"em")(1934,"strong"),Jx(1935,"(opcional)"),sg()(),Sl(1936,"p"),Jx(1937,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),sg(),Sl(1938,"blockquote")(1939,"p"),Jx(1940,"V\xE1lido para gr\xE1fico do tipo "),Sl(1941,"code"),Jx(1942,"Gauge"),sg(),Jx(1943,"."),sg()()()(),Sl(1944,"tr",15)(1945,"td",16)(1946,"div",17)(1947,"span",18),Jx(1948," textCenterGraph"),Wl(1949,"br"),sg()()(),Sl(1950,"td",19)(1951,"code",35),Jx(1952,"string"),sg()(),Sl(1953,"td",23)(1954,"em")(1955,"strong"),Jx(1956,"(opcional)"),sg()(),Sl(1957,"p"),Jx(1958,"Aplica texto centralizado customizado nos gr\xE1ficos de "),Sl(1959,"code"),Jx(1960,"Donut"),sg(),Jx(1961,"."),sg()()()(),Sl(1962,"h4",37)(1963,"code",5),Jx(1964,"PoChartRadarOptions"),sg()(),Sl(1965,"div",2)(1966,"p")(1967,"em"),Jx(1968,"Interface"),sg(),Jx(1969," para configura\xE7\xF5es do gr\xE1fico "),Sl(1970,"code"),Jx(1971,"radar"),sg(),Jx(1972,"."),sg()(),Sl(1973,"h4",11),Jx(1974,"Propriedades"),sg(),Sl(1975,"table",12)(1976,"tr",13)(1977,"th",14),Jx(1978,"Nome"),sg(),Sl(1979,"th",14),Jx(1980,"Tipo"),sg(),Sl(1981,"th",14),Jx(1982,"Descri\xE7\xE3o"),sg()(),Sl(1983,"tr",15)(1984,"td",16)(1985,"div",17)(1986,"span",18),Jx(1987," indicator"),Wl(1988,"br"),sg()()(),Sl(1989,"td",19)(1990,"code",51),Jx(1991,"Array<PoChartIndicatorOptions>"),sg()(),Sl(1992,"td",23)(1993,"em")(1994,"strong"),Jx(1995,"(opcional)"),sg()(),Sl(1996,"p"),Jx(1997,"Define as configura\xE7\xF5es dos indicadores do gr\xE1fico, como nome, cor, valor m\xEDnimo e valor m\xE1ximo."),sg()()(),Sl(1998,"tr",15)(1999,"td",16)(2e3,"div",17)(2001,"span",18),Jx(2002," shape"),Wl(2003,"br"),sg()()(),Sl(2004,"td",19)(2005,"code",52),Jx(2006,"'polygon' "),sg(),Sl(2007,"code",53),Jx(2008," 'circle'"),sg()(),Sl(2009,"td",23)(2010,"em")(2011,"strong"),Jx(2012,"(opcional)"),sg()(),Sl(2013,"p"),Jx(2014,"Define o formato da grid, podendo ser exibida como pol\xEDgono ou c\xEDrculo."),sg()()(),Sl(2015,"tr",15)(2016,"td",16)(2017,"div",17)(2018,"span",18),Jx(2019," splitArea"),Wl(2020,"br"),sg()()(),Sl(2021,"td",19)(2022,"code",39),Jx(2023,"boolean"),sg()(),Sl(2024,"td",23)(2025,"em")(2026,"strong"),Jx(2027,"(opcional)"),sg()(),Sl(2028,"p"),Jx(2029,"Define o efeito zebrado na grid."),sg()()()(),Sl(2030,"h4",37)(2031,"code",5),Jx(2032,"PoChartDataLabel"),sg()(),Sl(2033,"div",2)(2034,"p"),Jx(2035,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),Sl(2036,"code"),Jx(2037,"po-chart"),sg(),Jx(2038,"."),sg()(),Sl(2039,"h4",11),Jx(2040,"Propriedades"),sg(),Sl(2041,"table",12)(2042,"tr",13)(2043,"th",14),Jx(2044,"Nome"),sg(),Sl(2045,"th",14),Jx(2046,"Tipo"),sg(),Sl(2047,"th",14),Jx(2048,"Descri\xE7\xE3o"),sg()(),Sl(2049,"tr",15)(2050,"td",16)(2051,"div",17)(2052,"span",18),Jx(2053," fixed"),Wl(2054,"br"),sg()()(),Sl(2055,"td",19)(2056,"code",39),Jx(2057,"boolean"),sg()(),Sl(2058,"td",23)(2059,"em")(2060,"strong"),Jx(2061,"(opcional)"),sg()(),Sl(2062,"p"),Jx(2063,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),sg(),Sl(2064,"ul")(2065,"li"),Jx(2066,"Quando definido como "),Sl(2067,"code"),Jx(2068,"true"),sg(),Jx(2069,":"),Sl(2070,"ul")(2071,"li"),Jx(2072,"O "),Sl(2073,"em"),Jx(2074,"tooltip"),sg(),Jx(2075," n\xE3o ser\xE1 exibido."),sg(),Sl(2076,"li"),Jx(2077,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),sg()()()(),Sl(2078,"blockquote")(2079,"p"),Jx(2080,"Dispon\xEDvel para os tipo de gr\xE1fico "),Sl(2081,"code"),Jx(2082,"PoChartType.Line"),sg(),Jx(2083,", "),Sl(2084,"code"),Jx(2085,"PoChartType.Area"),sg(),Jx(2086,", "),Sl(2087,"code"),Jx(2088,"PoChartType.Column"),sg(),Jx(2089,", "),Sl(2090,"code"),Jx(2091,"PoChartType.Bar e PoChartType.Radar"),sg(),Jx(2092,"."),sg()()()()(),Sl(2093,"h4",37)(2094,"code",5),Jx(2095,"PoChartSerie"),sg()(),Sl(2096,"div",2)(2097,"p"),Jx(2098,"Interface das series din\xE2micas do "),Sl(2099,"code"),Jx(2100,"po-chart"),sg(),Jx(2101," que possibilita desenhar gr\xE1ficos dos tipos "),Sl(2102,"code"),Jx(2103,"area"),sg(),Jx(2104,", "),Sl(2105,"code"),Jx(2106,"bar"),sg(),Jx(2107,", "),Sl(2108,"code"),Jx(2109,"column"),sg(),Jx(2110,", "),Sl(2111,"code"),Jx(2112,"line"),sg(),Jx(2113,", "),Sl(2114,"code"),Jx(2115,"donut"),sg(),Jx(2116,", "),Sl(2117,"code"),Jx(2118,"pie"),sg(),Jx(2119," e "),Sl(2120,"code"),Jx(2121,"radar"),sg()()(),Sl(2122,"h4",11),Jx(2123,"Propriedades"),sg(),Sl(2124,"table",12)(2125,"tr",13)(2126,"th",14),Jx(2127,"Nome"),sg(),Sl(2128,"th",14),Jx(2129,"Tipo"),sg(),Sl(2130,"th",14),Jx(2131,"Descri\xE7\xE3o"),sg()(),Sl(2132,"tr",15)(2133,"td",16)(2134,"div",17)(2135,"span",18),Jx(2136," areaStyle"),Wl(2137,"br"),sg()()(),Sl(2138,"td",19)(2139,"code",39),Jx(2140,"boolean"),sg()(),Sl(2141,"td",23)(2142,"em")(2143,"strong"),Jx(2144,"(opcional)"),sg()(),Sl(2145,"p"),Jx(2146,"Define se a s\xE9rie ter\xE1 sua \xE1rea preenchida."),sg(),Sl(2147,"blockquote")(2148,"p"),Jx(2149,"Propriedade v\xE1lida para gr\xE1ficos do tipo "),Sl(2150,"code"),Jx(2151,"Radar"),sg(),Jx(2152,", "),Sl(2153,"code"),Jx(2154,"fillpoints"),sg(),Jx(2155," n\xE3o funciona quando "),Sl(2156,"code"),Jx(2157,"areaStyle"),sg(),Jx(2158," est\xE1 definido como "),Sl(2159,"code"),Jx(2160,"true"),sg(),Jx(2161,"."),sg()()()(),Sl(2162,"tr",15)(2163,"td",16)(2164,"div",17)(2165,"span",18),Jx(2166," color"),Wl(2167,"br"),sg()()(),Sl(2168,"td",19)(2169,"code",35),Jx(2170,"string"),sg()(),Sl(2171,"td",23)(2172,"em")(2173,"strong"),Jx(2174,"(opcional)"),sg()(),Sl(2175,"p"),Jx(2176,"Determina a cor da s\xE9rie. As maneiras de customizar o "),Sl(2177,"em"),Jx(2178,"preset"),sg(),Jx(2179," padr\xE3o de cores s\xE3o:"),sg(),Sl(2180,"ul")(2181,"li"),Jx(2182,"Hexadecimal, por exemplo "),Sl(2183,"code"),Jx(2184,"#c64840"),sg(),Jx(2185,";"),sg(),Sl(2186,"li"),Jx(2187,"RGB, por exemplo "),Sl(2188,"code"),Jx(2189,"rgb(0, 0, 165)"),sg()(),Sl(2190,"li"),Jx(2191,"O nome da cor, por exemplo "),Sl(2192,"code"),Jx(2193,"blue"),sg(),Jx(2194,";"),sg(),Sl(2195,"li"),Jx(2196,"Vari\xE1veis CSS, por exemplo "),Sl(2197,"code"),Jx(2198,"var(--color-01)"),sg(),Jx(2199,";"),sg(),Sl(2200,"li"),Jx(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Sl(2202,"ul")(2203,"li"),Wl(2204,"span",54),Sl(2205,"code"),Jx(2206,"color-01"),sg()(),Sl(2207,"li"),Wl(2208,"span",55),Sl(2209,"code"),Jx(2210,"color-02"),sg()(),Sl(2211,"li"),Wl(2212,"span",56),Sl(2213,"code"),Jx(2214,"color-03"),sg()(),Sl(2215,"li"),Wl(2216,"span",57),Sl(2217,"code"),Jx(2218,"color-04"),sg()(),Sl(2219,"li"),Wl(2220,"span",58),Sl(2221,"code"),Jx(2222,"color-05"),sg()(),Sl(2223,"li"),Wl(2224,"span",59),Sl(2225,"code"),Jx(2226,"color-06"),sg()(),Sl(2227,"li"),Wl(2228,"span",60),Sl(2229,"code"),Jx(2230,"color-07"),sg()(),Sl(2231,"li"),Wl(2232,"span",61),Sl(2233,"code"),Jx(2234,"color-08"),sg()(),Sl(2235,"li"),Wl(2236,"span",62),Sl(2237,"code"),Jx(2238,"color-09"),sg()(),Sl(2239,"li"),Wl(2240,"span",63),Sl(2241,"code"),Jx(2242,"color-10"),sg()(),Sl(2243,"li"),Wl(2244,"span",64),Sl(2245,"code"),Jx(2246,"color-11"),sg()(),Sl(2247,"li"),Wl(2248,"span",65),Sl(2249,"code"),Jx(2250,"color-12"),sg()()()()(),Sl(2251,"ul")(2252,"li"),Jx(2253,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),sg()()()(),Sl(2254,"tr",15)(2255,"td",16)(2256,"div",17)(2257,"span",18),Jx(2258," data"),Wl(2259,"br"),sg()()(),Sl(2260,"td",19)(2261,"code",27),Jx(2262,"number "),sg(),Sl(2263,"code",66),Jx(2264," Array<number>"),sg()(),Sl(2265,"td",23)(2266,"em")(2267,"strong"),Jx(2268,"(opcional)"),sg()(),Sl(2269,"p"),Jx(2270,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),sg(),Sl(2271,"ul")(2272,"li"),Jx(2273,"Para gr\xE1ficos dos tipos "),Sl(2274,"code"),Jx(2275,"donut"),sg(),Jx(2276," e "),Sl(2277,"code"),Jx(2278,"pie"),sg(),Jx(2279,", espera-se "),Sl(2280,"em"),Jx(2281,"number"),sg(),Jx(2282,";"),sg(),Sl(2283,"li"),Jx(2284,"Para gr\xE1ficos dos tipos "),Sl(2285,"code"),Jx(2286,"area"),sg(),Jx(2287,", "),Sl(2288,"code"),Jx(2289,"bar"),sg(),Jx(2290,", "),Sl(2291,"code"),Jx(2292,"column"),sg(),Jx(2293,", "),Sl(2294,"code"),Jx(2295,"line"),sg(),Jx(2296," e "),Sl(2297,"code"),Jx(2298,"radar"),sg(),Jx(2299,", espera-se um "),Sl(2300,"em"),Jx(2301,"array"),sg(),Jx(2302," de "),Sl(2303,"code"),Jx(2304,"data"),sg(),Jx(2305,"."),sg()(),Sl(2306,"blockquote")(2307,"p"),Jx(2308,"Se passado valor "),Sl(2309,"code"),Jx(2310,"null"),sg(),Jx(2311," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),sg()()()(),Sl(2312,"tr",15)(2313,"td",16)(2314,"div",17)(2315,"span",18),Jx(2316," from"),Wl(2317,"br"),sg()()(),Sl(2318,"td",19)(2319,"code",27),Jx(2320,"number"),sg()(),Sl(2321,"td",23)(2322,"em")(2323,"strong"),Jx(2324,"(opcional)"),sg()(),Sl(2325,"p"),Jx(2326,"Alcance inicial da cor."),sg(),Sl(2327,"blockquote")(2328,"p"),Jx(2329,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Sl(2330,"code"),Jx(2331,"Gauge"),sg(),Jx(2332,"."),sg()()()(),Sl(2333,"tr",15)(2334,"td",16)(2335,"div",17)(2336,"span",18),Jx(2337," label"),Wl(2338,"br"),sg()()(),Sl(2339,"td",19)(2340,"code",35),Jx(2341,"string"),sg()(),Sl(2342,"td",23)(2343,"em")(2344,"strong"),Jx(2345,"(opcional)"),sg()(),Sl(2346,"p"),Jx(2347,"R\xF3tulo refer\xEAncia da s\xE9rie."),sg()()(),Sl(2348,"tr",15)(2349,"td",16)(2350,"div",17)(2351,"span",18),Jx(2352," stackGroupName"),Wl(2353,"br"),sg()()(),Sl(2354,"td",19)(2355,"code",35),Jx(2356,"string"),sg()(),Sl(2357,"td",23)(2358,"em")(2359,"strong"),Jx(2360,"(opcional)"),sg()(),Sl(2361,"p"),Jx(2362,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),Sl(2363,"code"),Jx(2364,"stackGroupName"),sg(),Jx(2365,". Exemplo:"),sg(),Sl(2366,"ul")(2367,"li"),Jx(2368,"Serie A: "),Sl(2369,"code"),Jx(2370,"{ data: 500, stackGroupName: 'group1' ... }"),sg(),Jx(2371,";"),sg(),Sl(2372,"li"),Jx(2373,"S\xE9rie B: "),Sl(2374,"code"),Jx(2375,"{ data: 200, stackGroupName: 'group1' ... }"),sg(),Jx(2376,"."),sg(),Sl(2377,"li"),Jx(2378,"S\xE9rie C: "),Sl(2379,"code"),Jx(2380,"{ data: 100, stackGroupName: 'group2' ... }"),sg(),Jx(2381,"."),sg(),Sl(2382,"li"),Jx(2383,"S\xE9rie D: "),Sl(2384,"code"),Jx(2385,"{ data: 400, stackGroupName: 'group2' ... }"),sg(),Jx(2386,"."),sg()(),Sl(2387,"p"),Jx(2388,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),sg(),Sl(2389,"blockquote")(2390,"p"),Jx(2391,"V\xE1lido para gr\xE1fico do tipo "),Sl(2392,"code"),Jx(2393,"Column"),sg(),Jx(2394," e "),Sl(2395,"code"),Jx(2396,"Bar"),sg(),Jx(2397,". Essa propriedade \xE9 ignorada caso a propriedade "),Sl(2398,"code"),Jx(2399,"stacked"),sg(),Jx(2400," da interface "),Sl(2401,"code"),Jx(2402,"PoChartOptions"),sg(),Jx(2403," esteja como "),Sl(2404,"code"),Jx(2405,"true"),sg(),Jx(2406,"."),sg()(),Sl(2407,"blockquote")(2408,"p"),Jx(2409,"Essa propriedade habilita a propriedade "),Sl(2410,"code"),Jx(2411,"p-data-label"),sg(),Jx(2412," por padr\xE3o, podendo ser desabilitada passando "),Sl(2413,"code"),Jx(2414,"[p-data-label]={ fixed: false }"),sg(),Jx(2415,"."),sg()()()(),Sl(2416,"tr",15)(2417,"td",16)(2418,"div",17)(2419,"span",18),Jx(2420," to"),Wl(2421,"br"),sg()()(),Sl(2422,"td",19)(2423,"code",27),Jx(2424,"number"),sg()(),Sl(2425,"td",23)(2426,"em")(2427,"strong"),Jx(2428,"(opcional)"),sg()(),Sl(2429,"p"),Jx(2430,"Alcance final da cor."),sg(),Sl(2431,"blockquote")(2432,"p"),Jx(2433,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Sl(2434,"code"),Jx(2435,"Gauge"),sg(),Jx(2436,"."),sg()()()(),Sl(2437,"tr",15)(2438,"td",16)(2439,"div",17)(2440,"span",18),Jx(2441," tooltip"),Wl(2442,"br"),sg()()(),Sl(2443,"td",19)(2444,"code",35),Jx(2445,"string "),sg(),Sl(2446,"code",67),Jx(2447," ((params: any) => string)"),sg()(),Sl(2448,"td",23)(2449,"em")(2450,"strong"),Jx(2451,"(opcional)"),sg()(),Sl(2452,"p"),Jx(2453,"Define o texto que ser\xE1 exibido na tooltip ao passar o mouse por cima das s\xE9ries do "),Sl(2454,"em"),Jx(2455,"chart"),sg(),Jx(2456,"."),sg(),Sl(2457,"p"),Jx(2458,"Formatos aceitos:"),sg(),Sl(2459,"ul")(2460,"li")(2461,"p")(2462,"strong"),Jx(2463,"string"),sg(),Jx(2464,": pode conter marcadores din\xE2micos e HTML simples."),sg()(),Sl(2465,"li")(2466,"p"),Jx(2467,"Marcadores dispon\xEDveis:"),sg()(),Sl(2468,"li")(2469,"p")(2470,"code"),Jx(2471,"{name}"),sg(),Jx(2472," \u2192 Nome do item/categoria."),sg()(),Sl(2473,"li")(2474,"p")(2475,"code"),Jx(2476,"{seriesName}"),sg(),Jx(2477," \u2192 Nome da s\xE9rie."),sg()(),Sl(2478,"li")(2479,"p")(2480,"code"),Jx(2481,"{value}"),sg(),Jx(2482," \u2192 Valor correspondente."),sg()(),Sl(2483,"li")(2484,"p")(2485,"strong"),Jx(2486,"function"),sg(),Jx(2487,": fun\xE7\xE3o que recebe o objeto "),Sl(2488,"code"),Jx(2489,"params"),sg(),Jx(2490," e deve retornar uma "),Sl(2491,"em"),Jx(2492,"string"),sg(),Jx(2493," com o conte\xFAdo da tooltip."),sg()()(),Sl(2494,"blockquote")(2495,"p"),Jx(2496,"\xC9 poss\xEDvel utilizar marca\xE7\xE3o HTML simples ("),Sl(2497,"code"),Jx(2498,"<b>"),sg(),Jx(2499,", "),Sl(2500,"code"),Jx(2501,"<i>"),sg(),Jx(2502,", "),Sl(2503,"code"),Jx(2504,"<br>"),sg(),Jx(2505,", "),Sl(2506,"code"),Jx(2507,"<hr>"),sg(),Jx(2508,", etc.) que ser\xE1 interpretada via "),Sl(2509,"code"),Jx(2510,"innerHTML"),sg(),Jx(2511,"."),sg()(),Sl(2512,"blockquote")(2513,"p"),Jx(2514,"Formata\xE7\xE3o customizada (ser\xE1 convertido internamente para HTML):"),sg()(),Sl(2515,"ul")(2516,"li")(2517,"code"),Jx(2518,"\\n"),sg(),Jx(2519," \u2192 quebra de linha ("),Sl(2520,"code"),Jx(2521,"<br>"),sg(),Jx(2522,")."),sg(),Sl(2523,"li")(2524,"code"),Jx(2525,"**texto**"),sg(),Jx(2526," \u2192 negrito ("),Sl(2527,"code"),Jx(2528,"<b>"),sg(),Jx(2529,")."),sg(),Sl(2530,"li")(2531,"code"),Jx(2532,"__texto__"),sg(),Jx(2533," \u2192 it\xE1lico ("),Sl(2534,"code"),Jx(2535,"<i>"),sg(),Jx(2536,")."),sg()(),Sl(2537,"blockquote")(2538,"p"),Jx(2539,"Caso n\xE3o seja informado um valor para o "),Sl(2540,"em"),Jx(2541,"tooltip"),sg(),Jx(2542,", ser\xE1 exibido da seguinte forma:"),sg()(),Sl(2543,"ul")(2544,"li")(2545,"code"),Jx(2546,"donut"),sg(),Jx(2547,", "),Sl(2548,"code"),Jx(2549,"label"),sg(),Jx(2550,": valor proporcional ao total em porcentagem."),sg(),Sl(2551,"li")(2552,"code"),Jx(2553,"radar"),sg(),Jx(2554,": nome da s\xE9rie, o nome do indicator e os valores correspondentes."),sg(),Sl(2555,"li")(2556,"code"),Jx(2557,"area"),sg(),Jx(2558,", "),Sl(2559,"code"),Jx(2560,"bar"),sg(),Jx(2561,", "),Sl(2562,"code"),Jx(2563,"column"),sg(),Jx(2564,", "),Sl(2565,"code"),Jx(2566,"line"),sg(),Jx(2567," e "),Sl(2568,"code"),Jx(2569,"pie"),sg(),Jx(2570,": "),Sl(2571,"code"),Jx(2572,"label"),sg(),Jx(2573,": "),Sl(2574,"code"),Jx(2575,"data"),sg(),Jx(2576,"."),sg()(),Sl(2577,"h3"),Jx(2578,"Exemplos:"),sg(),Sl(2579,"p")(2580,"strong"),Jx(2581,"Usando string com placeholders:"),sg()(),Sl(2582,"pre")(2583,"code",68),Jx(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),sg()(),Sl(2585,"p")(2586,"strong"),Jx(2587,"Usando fun\xE7\xE3o de callback:"),sg()(),Sl(2588,"pre")(2589,"code",68),Jx(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),sg()()()(),Sl(2591,"tr",15)(2592,"td",16)(2593,"div",17)(2594,"span",18),Jx(2595," type"),Wl(2596,"br"),sg()()(),Sl(2597,"td",19)(2598,"code",36),Jx(2599,"PoChartType"),sg()(),Sl(2600,"td",23)(2601,"em")(2602,"strong"),Jx(2603,"(opcional)"),sg()(),Sl(2604,"p"),Jx(2605,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),Sl(2606,"code"),Jx(2607,"column"),sg(),Jx(2608," e "),Sl(2609,"code"),Jx(2610,"line"),sg(),Jx(2611," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),sg(),Sl(2612,"ul")(2613,"li"),Jx(2614,"Serie A: "),Sl(2615,"code"),Jx(2616,"{ type: ChartType.Column, data: ... }"),sg(),Jx(2617,";"),sg(),Sl(2618,"li"),Jx(2619,"S\xE9rie B: "),Sl(2620,"code"),Jx(2621,"{ type: ChartType.Line, data: ... }"),sg(),Jx(2622,"."),sg()(),Sl(2623,"p"),Jx(2624,"Se tanto "),Sl(2625,"code"),Jx(2626,"p-type"),sg(),Jx(2627," quanto "),Sl(2628,"code"),Jx(2629,"{ type }"),sg(),Jx(2630," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),sg(),Sl(2631,"ul")(2632,"li")(2633,"code"),Jx(2634,"column"),sg(),Jx(2635,": se "),Sl(2636,"code"),Jx(2637,"data"),sg(),Jx(2638," receber "),Sl(2639,"code"),Jx(2640,"Array<number>"),sg(),Jx(2641,";"),sg(),Sl(2642,"li")(2643,"code"),Jx(2644,"pie"),sg(),Jx(2645,": se "),Sl(2646,"code"),Jx(2647,"data"),sg(),Jx(2648," for "),Sl(2649,"em"),Jx(2650,"number"),sg(),Jx(2651,"."),sg()(),Sl(2652,"blockquote")(2653,"p"),Jx(2654,"Se utilizada a propriedade "),Sl(2655,"code"),Jx(2656,"p-type"),sg(),Jx(2657,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),Sl(2658,"code"),Jx(2659,"{type}"),sg(),Jx(2660," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),Sl(2661,"code"),Jx(2662,"p-type"),sg(),Jx(2663,"."),sg()(),Sl(2664,"blockquote")(2665,"p"),Jx(2666,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),Sl(2667,"code"),Jx(2668,"type"),sg(),Jx(2669," definido, exceto para mesclagem para tipos "),Sl(2670,"code"),Jx(2671,"column"),sg(),Jx(2672," e "),Sl(2673,"code"),Jx(2674,"line"),sg(),Jx(2675,"."),sg()()()()(),Sl(2676,"h3"),Jx(2677,"Enums"),sg(),Sl(2678,"h4",4)(2679,"code",5),Jx(2680,"PoChartLabelFormat"),sg()(),Sl(2681,"div",2)(2682,"p")(2683,"em"),Jx(2684,"Enum"),sg(),Sl(2685,"code"),Jx(2686,"PoChartLabelFormat"),sg(),Jx(2687," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),sg()(),Sl(2688,"h4",11),Jx(2689,"Propriedades"),sg(),Sl(2690,"table",12)(2691,"tr",13)(2692,"th",14),Jx(2693,"Nome"),sg(),Sl(2694,"th",14),Jx(2695,"Descri\xE7\xE3o"),sg()(),Sl(2696,"tr",15)(2697,"td",16)(2698,"div",17)(2699,"span",18),Jx(2700," Number"),Wl(2701,"br"),sg()()(),Sl(2702,"td",23)(2703,"p"),Jx(2704,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),Sl(2705,"code"),Jx(2706,"'1.2-2'"),sg(),Jx(2707," da "),Sl(2708,"a",69),Jx(2709,"DecimalPipe"),sg(),Jx(2710,"."),sg()()(),Sl(2711,"tr",15)(2712,"td",16)(2713,"div",17)(2714,"span",18),Jx(2715," Currency"),Wl(2716,"br"),sg()()(),Sl(2717,"td",23)(2718,"p"),Jx(2719,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),Sl(2720,"a",70),Jx(2721,"DEFAULT_CURRENCY_CODE"),sg(),Jx(2722,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),Sl(2723,"a",71),Jx(2724,"LOCALE_ID"),sg(),Jx(2725," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),sg(),Sl(2726,"pre")(2727,"code"),Jx(2728,`import { LOCALE_ID } from '@angular/core';
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
`),sg()()()()(),Sl(2729,"h4",4)(2730,"code",5),Jx(2731,"PoChartType"),sg()(),Sl(2732,"div",2)(2733,"p")(2734,"em"),Jx(2735,"Enum"),sg(),Sl(2736,"code"),Jx(2737,"PoChartType"),sg(),Jx(2738," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),sg()(),Sl(2739,"h4",11),Jx(2740,"Propriedades"),sg(),Sl(2741,"table",12)(2742,"tr",13)(2743,"th",14),Jx(2744,"Nome"),sg(),Sl(2745,"th",14),Jx(2746,"Descri\xE7\xE3o"),sg()(),Sl(2747,"tr",15)(2748,"td",16)(2749,"div",17)(2750,"span",18),Jx(2751," Area"),Wl(2752,"br"),sg()()(),Sl(2753,"td",23)(2754,"p"),Jx(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),sg()()(),Sl(2756,"tr",15)(2757,"td",16)(2758,"div",17)(2759,"span",18),Jx(2760," Donut"),Wl(2761,"br"),sg()()(),Sl(2762,"td",23)(2763,"p"),Jx(2764,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),sg()()(),Sl(2765,"tr",15)(2766,"td",16)(2767,"div",17)(2768,"span",18),Jx(2769," Pie"),Wl(2770,"br"),sg()()(),Sl(2771,"td",23)(2772,"p"),Jx(2773,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),sg()()(),Sl(2774,"tr",15)(2775,"td",16)(2776,"div",17)(2777,"span",18),Jx(2778," Line"),Wl(2779,"br"),sg()()(),Sl(2780,"td",23)(2781,"p"),Jx(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Sl(2783,"code"),Jx(2784,"column"),sg(),Jx(2785," e "),Sl(2786,"code"),Jx(2787,"area"),sg(),Jx(2788,", definindo-se o tipo atrav\xE9s da propriedade "),Sl(2789,"code"),Jx(2790,"PoChartSerie.type"),sg(),Jx(2791,"."),sg()()(),Sl(2792,"tr",15)(2793,"td",16)(2794,"div",17)(2795,"span",18),Jx(2796," Column"),Wl(2797,"br"),sg()()(),Sl(2798,"td",23)(2799,"p"),Jx(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),sg()()(),Sl(2801,"tr",15)(2802,"td",16)(2803,"div",17)(2804,"span",18),Jx(2805," Bar"),Wl(2806,"br"),sg()()(),Sl(2807,"td",23)(2808,"p"),Jx(2809,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),sg()()(),Sl(2810,"tr",15)(2811,"td",16)(2812,"div",17)(2813,"span",18),Jx(2814," Gauge"),Wl(2815,"br"),sg()()(),Sl(2816,"td",23)(2817,"p"),Jx(2818,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),sg(),Sl(2819,"ul")(2820,"li"),Jx(2821,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),sg(),Sl(2822,"li"),Jx(2823,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),sg()()()(),Sl(2824,"tr",15)(2825,"td",16)(2826,"div",17)(2827,"span",18),Jx(2828," Radar"),Wl(2829,"br"),sg()()(),Sl(2830,"td",23)(2831,"p"),Jx(2832,"Tipo de gr\xE1fico utilizado para visualizar e comparar o desempenho de diferentes itens em m\xFAltiplas categorias."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return r})();var Oe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(d){return new(d||r)(C(Xn),C(wn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,i){d&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-chart-doc"),sg(),Sl(4,"po-tab",3),ht$1("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view")(11,"sample-po-chart-technology-skill-view"),sg()()()),d&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,fe,ve,Pe,we,Me,De,Ae,Re],encapsulation:2})}return r})();var _t=[{path:"",component:Oe}],Ge=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[pL.forChild(_t),pL]})}return r})();var yn=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[ar,Ge]})}return r})();export{yn as DocPoChartModule};