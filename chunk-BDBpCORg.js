import {f as fe$1,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,cw as $o,cx as g3,h as s,r as r$1,c as f,c5 as Ode,cy as X3e,L as Gl,O as nw,bM as vN,a7 as gN,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht$1,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,aJ as Whe,bH as k3,c9 as jhe,aB as Sx,aM as ww,aN as r0,aq as gx,aO as Ew,aP as o0,at as mx,aI as dc,b7 as M3,ba as vNe,Q as we$1,a3 as sNe,aA as Nx,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var Be=()=>({label:"Angular",data:100}),We=()=>({label:"React",data:10}),Fe=(r,W)=>[r,W],Ce=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-series"]],template:function(d,i){d&1&&Gl(0,"po-chart",0),d&2&&nw("p-series",vN(3,Fe,gN(1,Be),gN(2,We)));},dependencies:[X3e],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Chart Basic"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-chart-basic"),sg(),Gl(23,"hr")),d&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:"fillPoints",label:"fillPoints"}),q=r=>[r],He=()=>({label:"legend",value:"legend"}),Ze=()=>({label:"roseType",value:"roseType"}),Ye=()=>({label:"showFromToLegend",value:"showFromToLegend"}),je=()=>({label:"pointer",value:"pointer"}),Ue=()=>({label:"stacked",value:"stacked"}),Je=()=>({value:"fixed",label:"Fixed"});function Xe(r,W){if(r&1){let l=Sx();Tl(0,"po-checkbox-group",54),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),Xy(i)}),ht$1("p-change",function(){Ky(l);let i=Nx();return Xy(i.changeDataLabelOptions())}),sg(),r0();}if(r&2){let l=Nx();nw("p-options",mN(3,q,gN(2,Je))),Ew("ngModel",l.selectedValuesDataLabel),o0();}}function Qe(r,W){if(r&1){let l=Sx();Tl(0,"po-number",55),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.valueGauge,i)||(s.valueGauge=i),Xy(i)}),ht$1("p-change",function(i){Ky(l);let s=Nx();return Xy(s.changeValueGauge(i))}),sg(),r0();}if(r&2){let l=Nx();Ew("ngModel",l.valueGauge),o0();}}function Ke(r,W){if(r&1){let l=Sx();Tl(0,"po-radio-group",56),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.selectedShapeOption,i)||(s.selectedShapeOption=i),Xy(i)}),sg(),r0(),Tl(1,"po-switch",57),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.selectedSplitArea,i)||(s.selectedSplitArea=i),Xy(i)}),sg(),r0(),Tl(2,"po-switch",58),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),Xy(i)}),sg(),r0();}if(r&2){let l=Nx();nw("p-options",l.optionsShapeOption),Ew("ngModel",l.selectedShapeOption),o0(),Vp(),Ew("ngModel",l.selectedSplitArea),o0(),Vp(),Ew("ngModel",l.selectedAreaStyle),o0();}}function $e(r,W){if(r&1){let l=Sx();Tl(0,"po-input",59),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.data,i)||(s.data=i),Xy(i)}),sg(),r0();}if(r&2){let l=Nx();Ew("ngModel",l.data),o0();}}function et(r,W){if(r&1){let l=Sx();Tl(0,"po-input",60),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.stackGroupName,i)||(s.stackGroupName=i),Xy(i)}),sg(),r0();}if(r&2){let l=Nx();Ew("ngModel",l.stackGroupName),o0();}}function tt(r,W){if(r&1){let l=Sx();Tl(0,"po-number",61),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.fromGauge,i)||(s.fromGauge=i),Xy(i)}),sg(),r0();}if(r&2){let l=Nx();Ew("ngModel",l.fromGauge),o0();}}function nt(r,W){if(r&1){let l=Sx();Tl(0,"po-number",62),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.toGauge,i)||(s.toGauge=i),Xy(i)}),sg(),r0();}if(r&2){let l=Nx();Ew("ngModel",l.toGauge),o0();}}function it(r,W){if(r&1){let l=Sx();Tl(0,"div",3)(1,"po-button",63),ht$1("p-click",function(){Ky(l);let i=Nx();return Xy(i.addData())}),sg()();}}function ot(r,W){if(r&1){let l=Sx();Tl(0,"po-number",64),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.min,i)||(s.min=i),Xy(i)}),sg(),r0(),Tl(1,"po-number",65),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.max,i)||(s.max=i),Xy(i)}),sg(),r0(),Tl(2,"po-input",66),ww("ngModelChange",function(i){Ky(l);let s=Nx();return sN(s.colorIndicator,i)||(s.colorIndicator=i),Xy(i)}),sg(),r0(),Tl(3,"div",3)(4,"po-button",67),ht$1("p-click",function(){Ky(l);let i=Nx();return Xy(i.addData())}),sg()();}if(r&2){let l=Nx();Ew("ngModel",l.min),o0(),Vp(),Ew("ngModel",l.max),o0(),Vp(),Ew("ngModel",l.colorIndicator),o0(),Vp(2),nw("p-disabled",l.isTypeRadar&&!l.categories);}}var ye=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=false;isTypeRadar=false;disabledTooltip=false;disabledType=false;selectedSplitArea=false;selectedAreaStyle=false;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedLegendType="plain";selectedRendererOption="canvas";selectedShapeOption="polygon";helpRadar='Example: ["Bold", "Keen", "Calm", "Wise"]';helpGeneric='Example: ["Jan", "Feb", "Mar", "Apr"]';optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsLegendType=[{value:"plain",label:"plain"},{value:"scroll",label:"scroll"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];optionsShapeOption=[{value:"polygon",label:"polygon"},{value:"circle",label:"circle"}];typeOptions=[{label:"Line",value:$o.Line},{label:"Area",value:$o.Area},{label:"Bar",value:$o.Bar},{label:"Column",value:$o.Column},{label:"Donut",value:$o.Donut},{label:"Pie",value:$o.Pie},{label:"Gauge",value:$o.Gauge},{label:"Radar",value:$o.Radar}];labelTypeOptions=[{label:"Number",value:g3.Number},{label:"Currency",value:g3.Currency}];changeDataLabelOptions(){this.dataLabel=s(r$1({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")});}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=s(r$1({},this.options),{axis:l});}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=s(r$1({},this.options),{header:l});}changeDataZoomOptions(){this.options=s(r$1({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=r$1({},this.options);}changeFillPointsOptions(){this.options=s(r$1({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")});}changeLegendOptions(){this.options=s(r$1({},this.options),{legend:this.selectedValuesLegend.includes("legend")});}changeRoseTypeOptions(){this.options=s(r$1({},this.options),{roseType:this.selectedRoseType.includes("roseType")});}changeShowFromToLegend(){this.options=s(r$1({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")});}changePointer(){this.options=s(r$1({},this.options),{pointer:this.selectedPointer.includes("pointer")});}changeStacked(){this.options=s(r$1({},this.options),{stacked:this.selectedStacked.includes("stacked")});}changeLegendVerticalPosition(){this.options=s(r$1({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition});}changeLegendPosition(){this.options=s(r$1({},this.options),{legendPosition:this.selectedLegendPosition});}changeLegendType(){this.options=s(r$1({},this.options),{legendType:this.selectedLegendType});}changeRendererOption(){this.options=s(r$1({},this.options),{rendererOption:this.selectedRendererOption});}changeType(l){l===$o.Gauge&&(this.isTypeGauge=true,this.changeSwitchGauge(true)),l===$o.Radar&&(this.isTypeRadar=true,this.changeSwitchRadar(true));}changeSwitchGauge(l){this.restore(true),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=$o.Gauge,this.type=$o.Gauge,this.isTypeRadar=false):(this.serieType=void 0,this.type=void 0);}changeSwitchRadar(l){this.restore(true,true),this.disabledType=l,l?(this.serieType=$o.Radar,this.type=$o.Radar,this.isTypeGauge=false):(this.serieType=void 0,this.type=void 0);}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series]);}ngOnInit(){this.restore();}addOptions(l){this.options=r$1(r$1({},this.options),l?r$1({},l):{});}addCategories(){this.allCategories=this.convertToArray(this.categories);}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea};}addData(){let l=this.serieType??this.type,d;l==="radar"?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r$1({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0);}isTypeGrid(){return this.type===$o.Line||this.type===$o.Area||this.type===$o.Column||this.type===$o.Bar||this.type===$o.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`;}restore(l=false,d=false){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=false,this.disabledType=false,this.dataLabel={fixed:false},this.options=s(r$1({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=false),d||(this.isTypeRadar=false,this.categories=void 0,this.radarConfig=[]);}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs"]],standalone:false,decls:66,vars:100,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"p-options","ngModel"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","radar","p-label","Radar Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModel"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModel"],["p-label","Chart categories",1,"po-md-12"],["name","categories",3,"ngModelChange","p-blur","p-label","p-help","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendType","p-label","LegendType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","radioShapeOption","p-label","ShapeOption",1,"po-md-3",3,"ngModelChange","p-options","ngModel"],["name","splitArea","p-label","splitArea",1,"po-md-1",3,"ngModelChange","ngModel"],["name","areaStyle","p-label","areaStyle",1,"po-md-1",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],["name","min","p-label","Min",1,"po-md-3",3,"ngModelChange","ngModel"],["name","max","p-label","Max",1,"po-md-3",3,"ngModelChange","ngModel"],["name","colorIndicator","p-label","Color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click","p-disabled"]],template:function(d,i){if(d&1){let s=Sx();Tl(0,"po-chart",1),ht$1("p-series-click",function(a){return i.changeEvent("p-series-click",a)})("p-series-hover",function(a){return i.changeEvent("p-series-hover",a)}),sg(),Gl(1,"po-divider",2),Tl(2,"div",3),Gl(3,"po-info",4),sg(),Gl(4,"po-divider",5),Tl(5,"form")(6,"po-select",6),ww("ngModelChange",function(a){return Ky(s),sN(i.type,a)||(i.type=a),Xy(a)}),ht$1("p-change",function(a){return i.changeType(a)}),sg(),r0(),Tl(7,"po-number",7),ww("ngModelChange",function(a){return Ky(s),sN(i.height,a)||(i.height=a),Xy(a)}),sg(),r0(),Tl(8,"po-input",8),ww("ngModelChange",function(a){return Ky(s),sN(i.title,a)||(i.title=a),Xy(a)}),sg(),r0(),gx(9,Xe,1,5,"po-checkbox-group",9),sg(),Gl(10,"po-divider",10),Tl(11,"form",null,0)(13,"div",3)(14,"po-switch",11),ww("ngModelChange",function(a){return Ky(s),sN(i.isTypeGauge,a)||(i.isTypeGauge=a),Xy(a)}),ht$1("p-change",function(a){return i.changeSwitchGauge(a)}),sg(),r0(),Tl(15,"po-switch",12),ww("ngModelChange",function(a){return Ky(s),sN(i.isTypeRadar,a)||(i.isTypeRadar=a),Xy(a)}),ht$1("p-change",function(a){return i.changeSwitchRadar(a)}),sg(),r0(),gx(16,Qe,1,1,"po-number",13),gx(17,Ke,3,4),sg(),Tl(18,"div",3)(19,"po-input",14),ww("ngModelChange",function(a){return Ky(s),sN(i.label,a)||(i.label=a),Xy(a)}),sg(),r0(),gx(20,$e,1,1,"po-input",15),Tl(21,"po-select",16),ww("ngModelChange",function(a){return Ky(s),sN(i.serieType,a)||(i.serieType=a),Xy(a)}),ht$1("p-change",function(a){return i.changeType(a)}),sg(),r0(),Tl(22,"po-input",17),ww("ngModelChange",function(a){return Ky(s),sN(i.tooltip,a)||(i.tooltip=a),Xy(a)}),sg(),r0(),Tl(23,"po-input",18),ww("ngModelChange",function(a){return Ky(s),sN(i.color,a)||(i.color=a),Xy(a)}),sg(),r0(),gx(24,et,1,1,"po-input",19),gx(25,tt,1,1,"po-number",20),gx(26,nt,1,1,"po-number",21),gx(27,it,2,0,"div",3),sg()(),Tl(28,"div",3),Gl(29,"po-divider",22),Tl(30,"po-input",23),ww("ngModelChange",function(a){return Ky(s),sN(i.categories,a)||(i.categories=a),Xy(a)}),ht$1("p-blur",function(){return i.addCategories()}),sg(),r0(),gx(31,ot,5,4),sg(),Tl(32,"form")(33,"div",3),Gl(34,"po-divider",24),Tl(35,"po-number",25),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.minRange,a)||(i.options.axis.minRange=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(36,"po-number",26),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(37,"po-number",27),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(38,"po-select",28),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.labelType,a)||(i.options.axis.labelType=a),Xy(a)}),ht$1("p-change",function(){return i.addOptions()}),sg(),r0(),Tl(39,"po-number",29),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(40,"po-number",30),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(41,"po-number",31),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(42,"po-number",32),ww("ngModelChange",function(a){return Ky(s),sN(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(43,"po-number",33),ww("ngModelChange",function(a){return Ky(s),sN(i.options.innerRadius,a)||(i.options.innerRadius=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(44,"po-number",34),ww("ngModelChange",function(a){return Ky(s),sN(i.options.borderRadius,a)||(i.options.borderRadius=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(45,"po-input",35),ww("ngModelChange",function(a){return Ky(s),sN(i.options.firstColumnName,a)||(i.options.firstColumnName=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(46,"po-input",36),ww("ngModelChange",function(a){return Ky(s),sN(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(47,"po-input",37),ww("ngModelChange",function(a){return Ky(s),sN(i.options.descriptionChart,a)||(i.options.descriptionChart=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),Tl(48,"po-input",38),ww("ngModelChange",function(a){return Ky(s),sN(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),Xy(a)}),ht$1("p-blur",function(){return i.addOptions()}),sg(),r0(),sg(),Tl(49,"div",3)(50,"po-checkbox-group",39),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),Xy(a)}),ht$1("p-change",function(){return i.changeHeaderOptions()}),sg(),r0(),Tl(51,"po-checkbox-group",40),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),Xy(a)}),ht$1("p-change",function(){return i.changeAxisOptions()}),sg(),r0(),Tl(52,"po-checkbox-group",41),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),Xy(a)}),ht$1("p-change",function(){return i.changeDataZoomOptions()}),sg(),r0(),Tl(53,"po-checkbox-group",42),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),Xy(a)}),ht$1("p-change",function(){return i.changeFillPointsOptions()}),sg(),r0(),Tl(54,"po-checkbox-group",43),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),Xy(a)}),ht$1("p-change",function(){return i.changeLegendOptions()}),sg(),r0(),Tl(55,"po-checkbox-group",44),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedRoseType,a)||(i.selectedRoseType=a),Xy(a)}),ht$1("p-change",function(){return i.changeRoseTypeOptions()}),sg(),r0(),Tl(56,"po-checkbox-group",45),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),Xy(a)}),ht$1("p-change",function(){return i.changeShowFromToLegend()}),sg(),r0(),Tl(57,"po-checkbox-group",46),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedPointer,a)||(i.selectedPointer=a),Xy(a)}),ht$1("p-change",function(){return i.changePointer()}),sg(),r0(),Tl(58,"po-checkbox-group",47),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedStacked,a)||(i.selectedStacked=a),Xy(a)}),ht$1("p-change",function(){return i.changeStacked()}),sg(),r0(),Tl(59,"po-radio-group",48),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),Xy(a)}),ht$1("p-change",function(){return i.changeLegendVerticalPosition()}),sg(),r0(),Tl(60,"po-radio-group",49),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),Xy(a)}),ht$1("p-change",function(){return i.changeLegendPosition()}),sg(),r0(),Tl(61,"po-radio-group",50),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedLegendType,a)||(i.selectedLegendType=a),Xy(a)}),ht$1("p-change",function(){return i.changeLegendType()}),sg(),r0(),Tl(62,"po-radio-group",51),ww("ngModelChange",function(a){return Ky(s),sN(i.selectedRendererOption,a)||(i.selectedRendererOption=a),Xy(a)}),ht$1("p-change",function(){return i.changeRendererOption()}),sg(),r0(),sg(),Gl(63,"po-divider",52),Tl(64,"div",3)(65,"po-button",53),ht$1("p-click",function(){return i.restore()}),sg()()();}d&2&&(nw("p-categories",i.isTypeRadar?i.radarConfig:i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),Vp(3),nw("p-value",i.event),Vp(3),Ew("ngModel",i.type),nw("p-disabled",i.disabledType)("p-options",i.typeOptions),o0(),Vp(),Ew("ngModel",i.height),o0(),Vp(),Ew("ngModel",i.title),o0(),Vp(),mx(i.isTypeGrid()?9:-1),Vp(5),Ew("ngModel",i.isTypeGauge),o0(),Vp(),Ew("ngModel",i.isTypeRadar),o0(),Vp(),mx(i.isTypeGauge?16:-1),Vp(),mx(i.isTypeRadar?17:-1),Vp(2),Ew("ngModel",i.label),o0(),Vp(),mx(i.isTypeGauge?-1:20),Vp(),Ew("ngModel",i.serieType),nw("p-disabled",i.disabledType)("p-options",i.typeOptions),o0(),Vp(),nw("p-disabled",i.disabledTooltip),Ew("ngModel",i.tooltip),o0(),Vp(),Ew("ngModel",i.color),o0(),Vp(),mx(i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"?24:-1),Vp(),mx(i.isTypeGauge?25:-1),Vp(),mx(i.isTypeGauge?26:-1),Vp(),mx(i.isTypeRadar?-1:27),Vp(3),qx(i.isTypeRadar?"po-md-3":"po-md-4"),nw("p-label",i.isTypeRadar?"Indicators":"Categories")("p-help",i.isTypeRadar?i.helpRadar:i.helpGeneric),Ew("ngModel",i.categories),o0(),Vp(),mx(i.isTypeRadar?31:-1),Vp(4),Ew("ngModel",i.options.axis.minRange),o0(),Vp(),Ew("ngModel",i.options.axis.maxRange),o0(),Vp(),Ew("ngModel",i.options.axis.gridLines),o0(),Vp(),nw("p-options",i.labelTypeOptions),Ew("ngModel",i.options.axis.labelType),o0(),Vp(),Ew("ngModel",i.options.axis.paddingBottom),o0(),Vp(),Ew("ngModel",i.options.axis.paddingLeft),o0(),Vp(),Ew("ngModel",i.options.axis.paddingRight),o0(),Vp(),Ew("ngModel",i.options.axis.rotateLegend),o0(),Vp(),Ew("ngModel",i.options.innerRadius),o0(),Vp(),Ew("ngModel",i.options.borderRadius),o0(),Vp(),Ew("ngModel",i.options.firstColumnName),o0(),Vp(),Ew("ngModel",i.options.textCenterGraph),o0(),Vp(),Ew("ngModel",i.options.descriptionChart),o0(),Vp(),Ew("ngModel",i.options.subtitleGauge),o0(),Vp(2),nw("p-columns",2)("p-options",i.optionsHeader),Ew("ngModel",i.selectedValuesHeader),o0(),Vp(),nw("p-columns",2)("p-options",i.optionsAxis),Ew("ngModel",i.selectedValuesAxis),o0(),Vp(),nw("p-columns",2)("p-options",i.optionsDataZoom),Ew("ngModel",i.selectedValuesDataZoom),o0(),Vp(),nw("p-columns",1)("p-options",mN(83,q,gN(82,ze))),Ew("ngModel",i.selectedValuesFillPoints),o0(),Vp(),nw("p-options",mN(86,q,gN(85,He))),Ew("ngModel",i.selectedValuesLegend),o0(),Vp(),nw("p-options",mN(89,q,gN(88,Ze))),Ew("ngModel",i.selectedRoseType),o0(),Vp(),nw("p-options",mN(92,q,gN(91,Ye))),Ew("ngModel",i.selectedFromToLegend),o0(),Vp(),nw("p-options",mN(95,q,gN(94,je))),Ew("ngModel",i.selectedPointer),o0(),Vp(),nw("p-options",mN(98,q,gN(97,Ue))),Ew("ngModel",i.selectedStacked),o0(),Vp(),nw("p-options",i.optionsLegendVerticalPosition),Ew("ngModel",i.selectedLegendVerticalPosition),o0(),Vp(),nw("p-options",i.optionsLegendPosition),Ew("ngModel",i.selectedLegendPosition),o0(),Vp(),nw("p-options",i.optionsLegendType),Ew("ngModel",i.selectedLegendType),o0(),Vp(),nw("p-options",i.optionsRendererOption),Ew("ngModel",i.selectedRendererOption),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,X3e,mv,b3,L3,Bhe,Tde,Whe,k3,jhe],encapsulation:2,changeDetection:1})}return r})();var rt=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Chart Labs"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-chart
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-chart-labs"),sg(),Gl(23,"hr")),d&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,rt,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=f(Ode);participationByCountryInWorldExportsType=$o.Line;evolutionOfCoffeeAndSomeCompetitorsType=$o.Column;coffeConsumingChartType=$o.Donut;consumptionPerCapitaType=$o.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:$o.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:$o.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:$o.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:$o.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"},{label:"Germany",data:5.2,tooltip:"Germany (Europe)"},{label:"Denmark",data:5.1,tooltip:"Denmark (Europe)"},{label:"Sweden",data:4.9,tooltip:"Sweden (Europe)"},{label:"Switzerland",data:4.8,tooltip:"Switzerland (Europe)"},{label:"Belgium",data:4.6,tooltip:"Belgium (Europe)"},{label:"Canada",data:4.5,tooltip:"Canada (North America)"},{label:"Brazil",data:4.3,tooltip:"Brazil (South America)"},{label:"Italy",data:4.2,tooltip:"Italy (Europe)"},{label:"France",data:4.1,tooltip:"France (Europe)"},{label:"USA",data:4,tooltip:"USA (North America)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10",tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:"Vietnam",data:[15,17,23,19,22,18],tooltip:"Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%"},{label:"Colombia",data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:$o.Column},{label:"2017",data:[93,52,18],type:$o.Column},{label:"2020",data:[95,21,-17],type:$o.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:$o.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:true,borderRadius:8};coffeeConsumptionOptions={legendType:"scroll"};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:g3.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:true};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:g3.Number},dataZoom:true};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:true}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,"_blank");}showMeTheDates(l){this.poAlert.alert({title:"Statistic",message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}});}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:false,features:[we$1([Ode])],decls:28,vars:22,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 15 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-options","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(d,i){d&1&&(Tl(0,"div",0)(1,"div",1)(2,"div",0),Gl(3,"po-chart",2)(4,"po-chart",3),sg()(),Tl(5,"div",1),Gl(6,"po-chart",4),sg(),Tl(7,"div",5)(8,"po-chart",6),ht$1("p-series-click",function(m){return i.searchMore(m)}),sg(),Tl(9,"po-chart",7),ht$1("p-series-click",function(m){return i.showMeTheDates(m)}),sg()(),Tl(10,"div",0),Gl(11,"po-chart",8),Tl(12,"div",9)(13,"po-widget",10)(14,"div",11),iN(15,"66 billion"),sg(),Tl(16,"div",12),iN(17,"cups of coffee are consumed per year in U.S."),sg()(),Tl(18,"po-widget",10)(19,"div",11),iN(20,"2nd most"),sg(),Tl(21,"div",12),iN(22,"traded commodity in the world second to Oil."),sg()()()()(),Tl(23,"div",0)(24,"po-container",13)(25,"div",14),iN(26,"Top 10 Largest Coffee Chains in the World"),sg(),Gl(27,"po-table",15),sg()()),d&2&&(Vp(3),nw("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),Vp(),nw("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),Vp(2),nw("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),Vp(2),nw("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),Vp(),nw("p-series",i.coffeeConsumption)("p-options",i.coffeeConsumptionOptions)("p-type",i.coffeConsumingChartType),Vp(2),nw("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),Vp(16),nw("p-items",i.items)("p-hide-table-search",false));},dependencies:[X3e,dc,M3,vNe],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r}),Pe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Chart - Coffee Ranking"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-chart-coffee-ranking"),sg(),Gl(23,"hr")),d&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,pt,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,_e],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{typeBar=$o.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:true};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked"]],standalone:false,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(d,i){d&1&&(Tl(0,"po-container")(1,"div",0),iN(2,"Energy and Climate Analysis"),sg(),Tl(3,"div",1),Gl(4,"po-chart",2)(5,"po-chart",3),sg()()),d&2&&(Vp(4),nw("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),Vp(),nw("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar));},dependencies:[X3e,dc],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r}),we=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Chart - Stacked"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-chart-stacked"),sg(),Gl(23,"hr")),d&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ct,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Te],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=$o.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary"]],standalone:false,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(d,i){d&1&&(Tl(0,"po-container")(1,"div",0),iN(2,"Sales Performance"),sg(),Tl(3,"div",1)(4,"div",2),Gl(5,"po-chart",3),sg(),Tl(6,"div",2),Gl(7,"po-chart",4),sg()()()),d&2&&(Vp(5),nw("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),Vp(2),nw("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges));},dependencies:[X3e,dc],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r}),Me=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Chart - Summary"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-chart-summary"),sg(),Gl(23,"hr")),d&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ht,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Le],encapsulation:2,changeDetection:1})}return r})();var De=(()=>{class r{participationByCountryInWorldExportsType=$o.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:true};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:false,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(d,i){d&1&&(Tl(0,"div",0),Gl(1,"po-chart",1),sg()),d&2&&(Vp(),nw("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel));},dependencies:[X3e],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Chart - World Exports"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-chart-world-exports"),sg(),Gl(23,"hr")),d&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,bt,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,De],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:"Frontend Development",max:100},{name:"Backend Development",max:100},{name:"Database Design",max:100},{name:"Cloud & DevOps",max:100},{name:"Testing & Quality",max:100},{name:"System Architecture",max:100}],splitArea:true,shape:"circle"};radarConfigMovies={indicator:[{name:"Storytelling",max:100},{name:"Characters",max:100},{name:"Visual Effects",max:100},{name:"Soundtrack",max:100},{name:"Pacing",max:100},{name:"Rewatchability",max:100}],splitArea:true};type=$o.Radar;series=[{label:"Team Alpha",data:[82,50,78,70,88,81]},{label:"Team Beta",data:[65,83,72,89,60,74]},{label:"Team Delta",data:[45,21,33,65,24,58]},{label:"Team Omega",data:[60,49,19,58,94,59]}];seriesMovies=[{label:"Sci-Fi",data:[60,53,45,58,42,55]},{label:"Fantasy",data:[53,80,66,71,75,88]},{label:"Drama",data:[92,31,98,60,88,72]},{label:"Thriller",data:[44,56,75,84,90,80]}];radarOptions={areaStyle:true};static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill"]],standalone:false,decls:3,vars:6,consts:[[1,"po-row"],["p-title","Technology Skill Assessment",1,"po-md-6",3,"p-categories","p-type","p-series"],["p-title","Genre Popularity","p-type","radar",1,"po-md-6",3,"p-categories","p-series","p-options"]],template:function(d,i){d&1&&(Tl(0,"div",0),Gl(1,"po-chart",1)(2,"po-chart",2),sg()),d&2&&(Vp(),nw("p-categories",i.radarConfig)("p-type",i.type)("p-series",i.series),Vp(),nw("p-categories",i.radarConfigMovies)("p-series",i.seriesMovies)("p-options",i.radarOptions));},dependencies:[X3e],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r}),Ae=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Chart - Radar"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-chart-technology-skill"),sg(),Gl(23,"hr")),d&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ft,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-doc"]],standalone:false,decls:2833,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","PoChartRadarOptions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'plain'"],["pan","",1,"docs-api-property-type","'scroll'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],["pan","",1,"docs-api-property-type","Array<PoChartIndicatorOptions>"],["pan","",1,"docs-api-property-type","'polygon'"],["pan","",1,"docs-api-property-type","'circle'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["pan","",1,"docs-api-property-type","((params:","any)","=>","string)"],[1,"language-ts"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(d,i){d&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoChartModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-chart"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoChartComponent"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,"O "),Tl(18,"code"),iN(19,"po-chart"),sg(),iN(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),sg(),Tl(21,"p"),iN(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),sg(),Tl(23,"p"),iN(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),sg(),Tl(25,"p"),iN(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Tl(27,"em"),iN(28,"mouse"),sg(),iN(29," sobre o elemento."),sg(),Tl(30,"h4"),iN(31,"Guia de uso para Gr\xE1ficos"),sg(),Tl(32,"blockquote")(33,"p"),iN(34,"Veja nosso "),Tl(35,"a",6),iN(36,"guia de uso para gr\xE1ficos"),sg(),iN(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),sg()(),Tl(38,"h4"),iN(39,"Tokens customiz\xE1veis"),sg(),Tl(40,"p"),iN(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(42,"blockquote")(43,"p"),iN(44,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(45,"a",7),iN(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(47,"."),sg()(),Tl(48,"table")(49,"thead")(50,"tr")(51,"th"),iN(52,"Propriedade"),sg(),Tl(53,"th"),iN(54,"Descri\xE7\xE3o"),sg(),Tl(55,"th"),iN(56,"Valor Padr\xE3o"),sg()()(),Tl(57,"tbody")(58,"tr")(59,"td")(60,"strong"),iN(61,"Chart (po-chart)"),sg()(),Gl(62,"td")(63,"td"),sg(),Tl(64,"tr")(65,"td")(66,"code"),iN(67,"--background-color-grid"),sg()(),Tl(68,"td"),iN(69,"Cor de background dos gr\xE1ficos"),sg(),Tl(70,"td")(71,"code"),iN(72,"var(--color-neutral-light-00)"),sg()()(),Tl(73,"tr")(74,"td")(75,"code"),iN(76,"--color-description-chart"),sg()(),Tl(77,"td"),iN(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Tl(79,"td")(80,"code"),iN(81,"var(--color-neutral-dark-70)"),sg()()(),Tl(82,"tr")(83,"td")(84,"code"),iN(85,"--font-family-description-chart"),sg()(),Tl(86,"td"),iN(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Tl(88,"td")(89,"code"),iN(90,"var(--font-family-theme)"),sg()()(),Tl(91,"tr")(92,"td")(93,"code"),iN(94,"--font-size-description-chart"),sg()(),Tl(95,"td"),iN(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Tl(97,"td")(98,"code"),iN(99,"var(--font-size-sm)"),sg()()(),Tl(100,"tr")(101,"td")(102,"code"),iN(103,"--font-weight-description-chart"),sg()(),Tl(104,"td"),iN(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),sg(),Tl(106,"td")(107,"code"),iN(108,"var(--font-weight-normal)"),sg()()(),Tl(109,"tr")(110,"td")(111,"strong"),iN(112,"Header (po-chart .po-chart-header )"),sg()(),Gl(113,"td")(114,"td"),sg(),Tl(115,"tr")(116,"td")(117,"code"),iN(118,"--background-color"),sg()(),Tl(119,"td"),iN(120,"Cor de background do cabe\xE7alho"),sg(),Tl(121,"td")(122,"code"),iN(123,"var(--color-neutral-light-00)"),sg()()(),Tl(124,"tr")(125,"td")(126,"code"),iN(127,"--color"),sg()(),Tl(128,"td"),iN(129,"Cor da fonte do cabe\xE7alho"),sg(),Tl(130,"td")(131,"code"),iN(132,"var(--color-neutral-dark-70)"),sg()()(),Tl(133,"tr")(134,"td")(135,"code"),iN(136,"--font-family"),sg()(),Tl(137,"td"),iN(138,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(139,"td")(140,"code"),iN(141,"var(--font-family-theme)"),sg()()(),Tl(142,"tr")(143,"td")(144,"code"),iN(145,"--font-size-title"),sg()(),Tl(146,"td"),iN(147,"Tamanho da fonte"),sg(),Tl(148,"td")(149,"code"),iN(150,"var(--font-size-default)"),sg()()(),Tl(151,"tr")(152,"td")(153,"code"),iN(154,"--font-size-icons"),sg()(),Tl(155,"td"),iN(156,"Tamanho dos \xEDcones"),sg(),Tl(157,"td")(158,"code"),iN(159,"var(--font-size-md)"),sg()()(),Tl(160,"tr")(161,"td")(162,"code"),iN(163,"--font-weight"),sg()(),Tl(164,"td"),iN(165,"Peso da fonte"),sg(),Tl(166,"td")(167,"code"),iN(168,"var(--font-weight-bold)"),sg()()(),Tl(169,"tr")(170,"td")(171,"strong"),iN(172,"Chart (po-chart .po-chart)"),sg()(),Gl(173,"td")(174,"td"),sg(),Tl(175,"tr")(176,"td")(177,"code"),iN(178,"--color-grid"),sg()(),Tl(179,"td"),iN(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),sg(),Tl(181,"td")(182,"code"),iN(183,"var(--color-neutral-light-20)"),sg()()(),Tl(184,"tr")(185,"td")(186,"code"),iN(187,"--font-family-grid"),sg()(),Tl(188,"td"),iN(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),sg(),Tl(190,"td")(191,"code"),iN(192,"var(--font-family-theme)"),sg()()(),Tl(193,"tr")(194,"td")(195,"code"),iN(196,"--font-size-grid"),sg()(),Tl(197,"td"),iN(198,"Tamanho da fonte usada nos valores dos eixos"),sg(),Tl(199,"td")(200,"code"),iN(201,"var(--font-size-xs)"),sg()()(),Tl(202,"tr")(203,"td")(204,"code"),iN(205,"--font-weight-grid"),sg()(),Tl(206,"td"),iN(207,"Peso da fonte usada nos valores dos eixos"),sg(),Tl(208,"td")(209,"code"),iN(210,"var(--font-weight-normal)"),sg()()(),Tl(211,"tr")(212,"td")(213,"code"),iN(214,"--color-legend"),sg()(),Tl(215,"td"),iN(216,"Cor da fonte da legenda"),sg(),Tl(217,"td")(218,"code"),iN(219,"var(--color-neutral-dark-70)"),sg()()(),Tl(220,"tr")(221,"td")(222,"code"),iN(223,"--color-legend-scroll-icon-active"),sg()(),Tl(224,"td"),iN(225,"Cor do \xEDcone de scroll da legenda no estado ativo, pro tipo "),Tl(226,"code"),iN(227,"scroll"),sg()(),Tl(228,"td")(229,"code"),iN(230,"var(--color-action-default)"),sg()()(),Tl(231,"tr")(232,"td")(233,"code"),iN(234,"--color-legend-scroll-icon-inactive"),sg()(),Tl(235,"td"),iN(236,"Cor do \xEDcone de scroll da legenda no estado inativo, pro tipo "),Tl(237,"code"),iN(238,"scroll"),sg()(),Tl(239,"td")(240,"code"),iN(241,"var(--color-action-disabled)"),sg()()(),Tl(242,"tr")(243,"td")(244,"code"),iN(245,"--border-radius-bar"),sg()(),Tl(246,"td"),iN(247,"Tamanho da borda nos graficos "),Tl(248,"code"),iN(249,"Bar"),sg(),iN(250," e "),Tl(251,"code"),iN(252,"Column"),sg()(),Tl(253,"td")(254,"code"),iN(255,"var(--border-radius-none)"),sg()()(),Tl(256,"tr")(257,"td")(258,"code"),iN(259,"--border-color"),sg()(),Tl(260,"td"),iN(261,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),Tl(262,"code"),iN(263,"Donut"),sg(),iN(264," e "),Tl(265,"code"),iN(266,"Pie"),sg()(),Tl(267,"td")(268,"code"),iN(269,"var(--color-neutral-light-00)"),sg()()(),Tl(270,"tr")(271,"td")(272,"code"),iN(273,"--color-hightlight-value"),sg()(),Tl(274,"td"),iN(275,"Cor do valor de destaque nos Gr\xE1ficos "),Tl(276,"code"),iN(277,"Donut"),sg(),iN(278," e "),Tl(279,"code"),iN(280,"Gauge"),sg()(),Tl(281,"td")(282,"code"),iN(283,"var(--color-neutral-dark-70)"),sg()()(),Tl(284,"tr")(285,"td")(286,"code"),iN(287,"--font-family-hightlight-value"),sg()(),Tl(288,"td"),iN(289,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),Tl(290,"code"),iN(291,"Donut"),sg(),iN(292," e "),Tl(293,"code"),iN(294,"Gauge"),sg()(),Tl(295,"td")(296,"code"),iN(297,"var(--font-family-theme)"),sg()()(),Tl(298,"tr")(299,"td")(300,"code"),iN(301,"--font-weight-hightlight-value"),sg()(),Tl(302,"td"),iN(303,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),Tl(304,"code"),iN(305,"Donut"),sg(),iN(306," e "),Tl(307,"code"),iN(308,"Gauge"),sg()(),Tl(309,"td")(310,"code"),iN(311,"var(--font-weight-bold)"),sg()()(),Tl(312,"tr")(313,"td")(314,"code"),iN(315,"--color-base-gauge"),sg()(),Tl(316,"td"),iN(317,"Cor da base do gr\xE1fico "),Tl(318,"code"),iN(319,"Gauge"),sg()(),Tl(320,"td")(321,"code"),iN(322,"var(--color-neutral-light-20)"),sg()()(),Tl(323,"tr")(324,"td")(325,"code"),iN(326,"--color-gauge-pointer-color"),sg()(),Tl(327,"td"),iN(328,"Cor do ponteiro do gr\xE1fico "),Tl(329,"code"),iN(330,"Gauge"),sg()(),Tl(331,"td")(332,"code"),iN(333,"var(--color-neutral-dark-70)"),sg()()(),Tl(334,"tr")(335,"td")(336,"code"),iN(337,"--color-chart-line-point-fill"),sg()(),Tl(338,"td"),iN(339,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),Tl(340,"code"),iN(341,"Line"),sg(),iN(342," e "),Tl(343,"code"),iN(344,"Area"),sg()(),Tl(345,"td")(346,"code"),iN(347,"var(--color-neutral-light-00)"),sg()()(),Tl(348,"tr")(349,"td")(350,"code"),iN(351,"--border-color-radar"),sg()(),Tl(352,"td"),iN(353,"Cor do eixo da grid do gr\xE1fico "),Tl(354,"code"),iN(355,"Radar"),sg()(),Tl(356,"td")(357,"code"),iN(358,"var(--color-neutral-light-30)"),sg()()(),Tl(359,"tr")(360,"td")(361,"code"),iN(362,"--color-background-zebra"),sg()(),Tl(363,"td"),iN(364,"Cor das \xE1reas alternadas (efeito zebrado) da grid do gr\xE1fico "),Tl(365,"code"),iN(366,"Radar"),sg()(),Tl(367,"td")(368,"code"),iN(369,"var(--color-neutral-light-10)"),sg()()(),Tl(370,"tr")(371,"td")(372,"code"),iN(373,"--color-background-line"),sg()(),Tl(374,"td"),iN(375,"Cor das \xE1reas entre as faixas zebradas da grade do "),Tl(376,"code"),iN(377,"Radar"),sg()(),Tl(378,"td")(379,"code"),iN(380,"none"),sg()()(),Tl(381,"tr")(382,"td")(383,"strong"),iN(384,"Wrapper (.po-chart-container-gauge)"),sg()(),Gl(385,"td")(386,"td"),sg(),Tl(387,"tr")(388,"td")(389,"code"),iN(390,"--background-color-container-gauge"),sg()(),Tl(391,"td"),iN(392,"Cor de background do container do gauge"),sg(),Tl(393,"td")(394,"code"),iN(395,"var(--color-neutral-light-00)"),sg()()()()()(),Tl(396,"div",8)(397,"h4",9),iN(398,"Seletor"),sg(),Tl(399,"pre",10),iN(400,`<po-chart
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
`),sg()(),Tl(401,"h4",11),iN(402,"Propriedades"),sg(),Tl(403,"table",12)(404,"tr",13)(405,"th",14),iN(406,"Nome"),sg(),Tl(407,"th",14),iN(408,"Tipo"),sg(),Tl(409,"th",14),iN(410,"Padr\xE3o"),sg(),Tl(411,"th",14),iN(412,"Descri\xE7\xE3o"),sg()(),Tl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),iN(417," p-categories"),Gl(418,"br"),sg()()(),Tl(419,"td",19)(420,"code",20),iN(421,"Array<string> "),sg(),Tl(422,"code",21),iN(423," PoChartRadarOptions"),sg()(),Tl(424,"td",22),iN(425,"-"),sg(),Tl(426,"td",23)(427,"em")(428,"strong"),iN(429,"(opcional)"),sg()(),Tl(430,"p"),iN(431,"Define os valores utilizados na constru\xE7\xE3o das categorias do gr\xE1fico."),sg(),Tl(432,"p"),iN(433,"Para gr\xE1ficos dos tipos "),Tl(434,"em"),iN(435,"bar"),sg(),iN(436,", "),Tl(437,"em"),iN(438,"area"),sg(),iN(439,", "),Tl(440,"em"),iN(441,"column"),sg(),iN(442," e "),Tl(443,"em"),iN(444,"line"),sg(),iN(445,", representa os nomes das categorias exibidas no eixo."),sg(),Tl(446,"p"),iN(447,"Para gr\xE1ficos do tipo "),Tl(448,"em"),iN(449,"radar"),sg(),iN(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Tl(451,"code"),iN(452,"Radar"),sg(),iN(453,"."),sg(),Tl(454,"blockquote")(455,"p"),iN(456,"Caso nenhum valor seja informado, ser\xE1 utilizado um h\xEDfen como categoria correspondente para cada s\xE9rie."),sg()(),Tl(457,"blockquote")(458,"p"),iN(459,"Gr\xE1ficos do tipo bar dimensionam sua \xE1rea considerando a largura do maior texto da categoria, sendo recomend\xE1vel utilizar r\xF3tulos curtos para facilitar a leitura."),sg()()()(),Tl(460,"tr",15)(461,"td",16)(462,"div",17)(463,"span",18),iN(464," p-custom-actions"),Gl(465,"br"),sg()()(),Tl(466,"td",19)(467,"code",24),iN(468,"Array<PoPopupAction>"),sg()(),Tl(469,"td",22),iN(470,"-"),sg(),Tl(471,"td",23)(472,"em")(473,"strong"),iN(474,"(opcional)"),sg()(),Tl(475,"p"),iN(476,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),sg()()(),Tl(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),iN(481," p-data-label"),Gl(482,"br"),sg()()(),Tl(483,"td",19)(484,"code",25),iN(485,"PoChartDataLabel"),sg()(),Tl(486,"td",22),iN(487,"-"),sg(),Tl(488,"td",23)(489,"em")(490,"strong"),iN(491,"(opcional)"),sg()(),Tl(492,"p"),iN(493,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),sg(),Tl(494,"p"),iN(495,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),sg(),Tl(496,"ul")(497,"li"),iN(498,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),sg(),Tl(499,"li"),iN(500,"O "),Tl(501,"em"),iN(502,"tooltip"),sg(),iN(503," n\xE3o ser\xE1 exibido."),sg(),Tl(504,"li"),iN(505,"Os marcadores ("),Tl(506,"em"),iN(507,"bullets"),sg(),iN(508,") ter\xE3o seu estilo ajustado."),sg(),Tl(509,"li"),iN(510,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),sg()(),Tl(511,"blockquote")(512,"p"),iN(513,"Dispon\xEDvel para gr\xE1ficos do tipo "),Tl(514,"code"),iN(515,"line"),sg(),iN(516," e "),Tl(517,"code"),iN(518,"radar"),sg(),iN(519,"."),sg()(),Tl(520,"h4"),iN(521,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(522,"pre")(523,"code",26),iN(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),sg()()()(),Tl(525,"tr",15)(526,"td",16)(527,"div",17)(528,"span",18),iN(529," p-height"),Gl(530,"br"),sg()()(),Tl(531,"td",19)(532,"code",27),iN(533,"number"),sg()(),Tl(534,"td",22)(535,"p")(536,"code"),iN(537,"400"),sg()()(),Tl(538,"td",23)(539,"em")(540,"strong"),iN(541,"(opcional)"),sg()(),Tl(542,"p"),iN(543,"Define a altura do gr\xE1fico em px."),sg(),Tl(544,"blockquote")(545,"p"),iN(546,"No caso do tipo "),Tl(547,"code"),iN(548,"Gauge"),sg(),iN(549,", o valor padr\xE3o \xE9 "),Tl(550,"code"),iN(551,"300"),sg(),iN(552," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),sg()()()(),Tl(553,"tr",15)(554,"td",16)(555,"div",17)(556,"span",18),iN(557," p-literals"),Gl(558,"br"),sg()()(),Tl(559,"td",19)(560,"code",28),iN(561,"PoChartLiterals"),sg()(),Tl(562,"td",22),iN(563,"-"),sg(),Tl(564,"td",23)(565,"em")(566,"strong"),iN(567,"(opcional)"),sg()(),Tl(568,"p"),iN(569,"Objeto com as literais usadas no "),Tl(570,"code"),iN(571,"po-chart"),sg(),iN(572,"."),sg(),Tl(573,"p"),iN(574,"Para utilizar basta passar a literal que deseja customizar:"),sg(),Tl(575,"pre")(576,"code"),iN(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),sg()(),Tl(578,"p"),iN(579,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),sg(),Tl(580,"pre")(581,"code"),iN(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),sg()(),Tl(583,"blockquote")(584,"p"),iN(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(586,"a",29)(587,"code"),iN(588,"PoI18nService"),sg()(),iN(589," ou do browser."),sg()()()(),Tl(590,"tr",15)(591,"td",16)(592,"div",17)(593,"span",18),iN(594," p-options"),Gl(595,"br"),sg()()(),Tl(596,"td",19)(597,"code",30),iN(598,"PoChartOptions"),sg()(),Tl(599,"td",22),iN(600,"-"),sg(),Tl(601,"td",23)(602,"em")(603,"strong"),iN(604,"(opcional)"),sg()(),Tl(605,"p"),iN(606,"Objeto com as configura\xE7\xF5es usadas no "),Tl(607,"code"),iN(608,"po-chart"),sg(),iN(609,"."),sg(),Tl(610,"p"),iN(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Tl(612,"em"),iN(613,"axis"),sg(),iN(614,") para os gr\xE1ficos dos tipos "),Tl(615,"code"),iN(616,"area"),sg(),iN(617,", "),Tl(618,"code"),iN(619,"line"),sg(),iN(620,", "),Tl(621,"code"),iN(622,"column"),sg(),iN(623,", "),Tl(624,"code"),iN(625,"bar"),sg(),iN(626," e "),Tl(627,"code"),iN(628,"radar"),sg(),iN(629," da seguinte forma:"),sg(),Tl(630,"pre")(631,"code"),iN(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),sg()()()(),Tl(633,"tr",15)(634,"td",16)(635,"div",17)(636,"span",18),iN(637," p-series"),Gl(638,"br"),sg()()(),Tl(639,"td",19)(640,"code",31),iN(641,"Array<PoChartSerie>"),sg()(),Tl(642,"td",22),iN(643,"-"),sg(),Tl(644,"td",23)(645,"p"),iN(646,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),sg()()(),Tl(647,"tr",15)(648,"td",16)(649,"div",32)(650,"span",33),iN(651," (p-series-click)"),Gl(652,"br"),sg()()(),Tl(653,"td",19)(654,"code",34),iN(655,"EventEmitter"),sg()(),Tl(656,"td",22),iN(657,"-"),sg(),Tl(658,"td",23)(659,"em")(660,"strong"),iN(661,"(opcional)"),sg()(),Tl(662,"p"),iN(663,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),sg(),Tl(664,"p"),iN(665,"O evento emitir\xE1 o seguinte par\xE2metro:"),sg(),Tl(666,"ul")(667,"li")(668,"em"),iN(669,"donut"),sg(),iN(670," e "),Tl(671,"em"),iN(672,"pie"),sg(),iN(673,": um objeto contendo a categoria e valor da s\xE9rie."),sg(),Tl(674,"li")(675,"em"),iN(676,"radar"),sg(),iN(677,": um objeto contendo o nome da s\xE9rie e os valores."),sg(),Tl(678,"li")(679,"em"),iN(680,"area"),sg(),iN(681,", "),Tl(682,"em"),iN(683,"line"),sg(),iN(684,", "),Tl(685,"em"),iN(686,"column"),sg(),iN(687," e "),Tl(688,"em"),iN(689,"bar"),sg(),iN(690,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),sg()()()(),Tl(691,"tr",15)(692,"td",16)(693,"div",32)(694,"span",33),iN(695," (p-series-hover)"),Gl(696,"br"),sg()()(),Tl(697,"td",19)(698,"code",34),iN(699,"EventEmitter"),sg()(),Tl(700,"td",22),iN(701,"-"),sg(),Tl(702,"td",23)(703,"em")(704,"strong"),iN(705,"(opcional)"),sg()(),Tl(706,"p"),iN(707,"Evento executado quando o usu\xE1rio passar o "),Tl(708,"em"),iN(709,"mouse"),sg(),iN(710," sobre um elemento do gr\xE1fico."),sg(),Tl(711,"p"),iN(712,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),sg(),Tl(713,"ul")(714,"li")(715,"em"),iN(716,"donut"),sg(),iN(717," e "),Tl(718,"em"),iN(719,"pie"),sg(),iN(720,": um objeto contendo a categoria e valor da s\xE9rie."),sg(),Tl(721,"li")(722,"em"),iN(723,"radar"),sg(),iN(724,": um objeto contendo o nome da s\xE9rie e os valores."),sg(),Tl(725,"li")(726,"em"),iN(727,"area"),sg(),iN(728,", "),Tl(729,"em"),iN(730,"line"),sg(),iN(731,", "),Tl(732,"em"),iN(733,"column"),sg(),iN(734," e "),Tl(735,"em"),iN(736,"bar"),sg(),iN(737,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),sg()()()(),Tl(738,"tr",15)(739,"td",16)(740,"div",17)(741,"span",18),iN(742," p-title"),Gl(743,"br"),sg()()(),Tl(744,"td",19)(745,"code",35),iN(746,"string"),sg()(),Tl(747,"td",22),iN(748,"-"),sg(),Tl(749,"td",23)(750,"em")(751,"strong"),iN(752,"(opcional)"),sg()(),Tl(753,"p"),iN(754,"Define o t\xEDtulo do gr\xE1fico."),sg()()(),Tl(755,"tr",15)(756,"td",16)(757,"div",17)(758,"span",18),iN(759," p-type"),Gl(760,"br"),sg()()(),Tl(761,"td",19)(762,"code",36),iN(763,"PoChartType"),sg()(),Tl(764,"td",22),iN(765,"-"),sg(),Tl(766,"td",23)(767,"em")(768,"strong"),iN(769,"(opcional)"),sg()(),Tl(770,"p"),iN(771,"Define o tipo de gr\xE1fico."),sg(),Tl(772,"p"),iN(773,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),Tl(774,"code"),iN(775,"type"),sg(),iN(776," conforme a interface "),Tl(777,"code"),iN(778,"PoChartSerie"),sg(),iN(779,"."),sg(),Tl(780,"blockquote")(781,"p"),iN(782,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),Tl(783,"code"),iN(784,"p-type"),sg(),iN(785," quanto em "),Tl(786,"code"),iN(787,"PochartSerie.type"),sg(),iN(788,", o valor "),Tl(789,"code"),iN(790,"{ type }"),sg(),iN(791," da primeira s\xE9rie anular\xE1 o valor definido em "),Tl(792,"code"),iN(793,"p-type"),sg(),iN(794,"."),sg()(),Tl(795,"p"),iN(796,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),Tl(797,"code"),iN(798,"p-series"),sg(),iN(799,":"),sg(),Tl(800,"ul")(801,"li"),iN(802,"Se "),Tl(803,"code"),iN(804,"p-series = [{ data: [1,2,3] }]"),sg(),iN(805,": ser\xE1 "),Tl(806,"code"),iN(807,"PoChartType.Column"),sg(),iN(808,"."),sg(),Tl(809,"li"),iN(810,"Se "),Tl(811,"code"),iN(812,"p-series = [{ data: 1 }]"),sg(),iN(813,": ser\xE1 "),Tl(814,"code"),iN(815,"PoChartType.Pie"),sg(),iN(816,"."),sg()(),Tl(817,"blockquote")(818,"p"),iN(819,"Veja os valores v\xE1lidos no "),Tl(820,"em"),iN(821,"enum"),sg(),Tl(822,"code"),iN(823,"PoChartType"),sg(),iN(824,"."),sg()()()(),Tl(825,"tr",15)(826,"td",16)(827,"div",17)(828,"span",18),iN(829," p-value-gauge-multiple"),Gl(830,"br"),sg()()(),Tl(831,"td",19)(832,"code",27),iN(833,"number"),sg()(),Tl(834,"td",22),iN(835,"-"),sg(),Tl(836,"td",23)(837,"em")(838,"strong"),iN(839,"(opcional)"),sg()(),Tl(840,"p"),iN(841,"Define o valor do gr\xE1fico do tipo "),Tl(842,"code"),iN(843,"Gauge"),sg(),iN(844," quando utliza as propriedades "),Tl(845,"code"),iN(846,"From"),sg(),Tl(847,"code"),iN(848,"To"),sg(),iN(849,"."),sg()()()(),Tl(850,"h3"),iN(851,"Interfaces"),sg(),Tl(852,"h4",37)(853,"code",5),iN(854,"PoChartAxisOptions"),sg()(),Tl(855,"div",2)(856,"p")(857,"em"),iN(858,"Interface"),sg(),iN(859," que define os eixos do grid."),sg()(),Tl(860,"h4",11),iN(861,"Propriedades"),sg(),Tl(862,"table",12)(863,"tr",13)(864,"th",14),iN(865,"Nome"),sg(),Tl(866,"th",14),iN(867,"Tipo"),sg(),Tl(868,"th",14),iN(869,"Descri\xE7\xE3o"),sg()(),Tl(870,"tr",15)(871,"td",16)(872,"div",17)(873,"span",18),iN(874," gridLines"),Gl(875,"br"),sg()()(),Tl(876,"td",19)(877,"code",27),iN(878,"number"),sg()(),Tl(879,"td",23)(880,"em")(881,"strong"),iN(882,"(opcional)"),sg()(),Tl(883,"p"),iN(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Tl(885,"code"),iN(886,"Area"),sg(),iN(887,", "),Tl(888,"code"),iN(889,"Line"),sg(),iN(890," e "),Tl(891,"code"),iN(892,"Column"),sg(),iN(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Tl(894,"code"),iN(895,"Bar"),sg(),iN(896,", tratar\xE1 as linhas verticais (eixo Y)."),sg(),Tl(897,"p"),iN(898,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),sg(),Tl(899,"ul")(900,"li"),iN(901,"Quantidade padr\xE3o de linhas: '5';"),sg(),Tl(902,"li"),iN(903,"Quantidade m\xEDnima permitida: '2';"),sg()()()(),Tl(904,"tr",15)(905,"td",16)(906,"div",17)(907,"span",18),iN(908," labelType"),Gl(909,"br"),sg()()(),Tl(910,"td",19)(911,"code",38),iN(912,"PoChartLabelFormat"),sg()(),Tl(913,"td",23)(914,"em")(915,"strong"),iN(916,"(opcional)"),sg()(),Tl(917,"p"),iN(918,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),sg()()(),Tl(919,"tr",15)(920,"td",16)(921,"div",17)(922,"span",18),iN(923," maxRange"),Gl(924,"br"),sg()()(),Tl(925,"td",19)(926,"code",27),iN(927,"number"),sg()(),Tl(928,"td",23)(929,"em")(930,"strong"),iN(931,"(opcional)"),sg()(),Tl(932,"p"),iN(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),sg(),Tl(934,"blockquote")(935,"p"),iN(936,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),sg()()()(),Tl(937,"tr",15)(938,"td",16)(939,"div",17)(940,"span",18),iN(941," minRange"),Gl(942,"br"),sg()()(),Tl(943,"td",19)(944,"code",27),iN(945,"number"),sg()(),Tl(946,"td",23)(947,"em")(948,"strong"),iN(949,"(opcional)"),sg()(),Tl(950,"p"),iN(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),sg(),Tl(952,"blockquote")(953,"p"),iN(954,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),sg()()()(),Tl(955,"tr",15)(956,"td",16)(957,"div",17)(958,"span",18),iN(959," paddingBottom"),Gl(960,"br"),sg()()(),Tl(961,"td",19)(962,"code",27),iN(963,"number"),sg()(),Tl(964,"td",23)(965,"em")(966,"strong"),iN(967,"(opcional)"),sg()(),Tl(968,"p"),iN(969,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),sg()()(),Tl(970,"tr",15)(971,"td",16)(972,"div",17)(973,"span",18),iN(974," paddingLeft"),Gl(975,"br"),sg()()(),Tl(976,"td",19)(977,"code",27),iN(978,"number"),sg()(),Tl(979,"td",23)(980,"em")(981,"strong"),iN(982,"(opcional)"),sg()(),Tl(983,"p"),iN(984,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),sg()()(),Tl(985,"tr",15)(986,"td",16)(987,"div",17)(988,"span",18),iN(989," paddingRight"),Gl(990,"br"),sg()()(),Tl(991,"td",19)(992,"code",27),iN(993,"number"),sg()(),Tl(994,"td",23)(995,"em")(996,"strong"),iN(997,"(opcional)"),sg()(),Tl(998,"p"),iN(999,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),sg()()(),Tl(1e3,"tr",15)(1001,"td",16)(1002,"div",17)(1003,"span",18),iN(1004," rotateLegend"),Gl(1005,"br"),sg()()(),Tl(1006,"td",19)(1007,"code",27),iN(1008,"number"),sg()(),Tl(1009,"td",23)(1010,"em")(1011,"strong"),iN(1012,"(opcional)"),sg()(),Tl(1013,"p"),iN(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),sg(),Tl(1015,"ul")(1016,"li"),iN(1017,"Valores negativos giram a legenda para a esquerda."),sg(),Tl(1018,"li"),iN(1019,"Valores positivos giram a legenda para a direita."),sg()(),Tl(1020,"p"),iN(1021,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),sg()()(),Tl(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),iN(1026," showAxisDetails"),Gl(1027,"br"),sg()()(),Tl(1028,"td",19)(1029,"code",39),iN(1030,"boolean"),sg()(),Tl(1031,"td",23)(1032,"em")(1033,"strong"),iN(1034,"(opcional)"),sg()(),Tl(1035,"p"),iN(1036,"Exibe a linha de detalhes que acompanha o mouse"),sg()()(),Tl(1037,"tr",15)(1038,"td",16)(1039,"div",17)(1040,"span",18),iN(1041," showXAxis"),Gl(1042,"br"),sg()()(),Tl(1043,"td",19)(1044,"code",39),iN(1045,"boolean"),sg()(),Tl(1046,"td",23)(1047,"em")(1048,"strong"),iN(1049,"(opcional)"),sg()(),Tl(1050,"p"),iN(1051,"Exibe a linha do eixo X"),sg()()(),Tl(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),iN(1056," showYAxis"),Gl(1057,"br"),sg()()(),Tl(1058,"td",19)(1059,"code",39),iN(1060,"boolean"),sg()(),Tl(1061,"td",23)(1062,"em")(1063,"strong"),iN(1064,"(opcional)"),sg()(),Tl(1065,"p"),iN(1066,"Exibe a linha do eixo Y"),sg()()()(),Tl(1067,"h4",37)(1068,"code",5),iN(1069,"PoChartHeaderOptions"),sg()(),Tl(1070,"div",2)(1071,"p")(1072,"em"),iN(1073,"Interface"),sg(),iN(1074," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),sg()(),Tl(1075,"h4",11),iN(1076,"Propriedades"),sg(),Tl(1077,"table",12)(1078,"tr",13)(1079,"th",14),iN(1080,"Nome"),sg(),Tl(1081,"th",14),iN(1082,"Tipo"),sg(),Tl(1083,"th",14),iN(1084,"Descri\xE7\xE3o"),sg()(),Tl(1085,"tr",15)(1086,"td",16)(1087,"div",17)(1088,"span",18),iN(1089," hideExpand"),Gl(1090,"br"),sg()()(),Tl(1091,"td",19)(1092,"code",39),iN(1093,"boolean"),sg()(),Tl(1094,"td",23)(1095,"em")(1096,"strong"),iN(1097,"(opcional)"),sg()(),Tl(1098,"p"),iN(1099,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),sg()()(),Tl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),iN(1104," hideExportCsv"),Gl(1105,"br"),sg()()(),Tl(1106,"td",19)(1107,"code",39),iN(1108,"boolean"),sg()(),Tl(1109,"td",23)(1110,"em")(1111,"strong"),iN(1112,"(opcional)"),sg()(),Tl(1113,"p"),iN(1114,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),sg()()(),Tl(1115,"tr",15)(1116,"td",16)(1117,"div",17)(1118,"span",18),iN(1119," hideExportImage"),Gl(1120,"br"),sg()()(),Tl(1121,"td",19)(1122,"code",39),iN(1123,"boolean"),sg()(),Tl(1124,"td",23)(1125,"em")(1126,"strong"),iN(1127,"(opcional)"),sg()(),Tl(1128,"p"),iN(1129,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),sg()()(),Tl(1130,"tr",15)(1131,"td",16)(1132,"div",17)(1133,"span",18),iN(1134," hideTableDetails"),Gl(1135,"br"),sg()()(),Tl(1136,"td",19)(1137,"code",39),iN(1138,"boolean"),sg()(),Tl(1139,"td",23)(1140,"em")(1141,"strong"),iN(1142,"(opcional)"),sg()(),Tl(1143,"p"),iN(1144,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),sg()()()(),Tl(1145,"h4",37)(1146,"code",5),iN(1147,"PoChartIndicatorOptions"),sg()(),Tl(1148,"div",2)(1149,"p"),iN(1150,"Interface para configura\xE7\xF5es dos indicadores do gr\xE1fico "),Tl(1151,"code"),iN(1152,"radar"),sg(),iN(1153,"."),sg()(),Tl(1154,"h4",11),iN(1155,"Propriedades"),sg(),Tl(1156,"table",12)(1157,"tr",13)(1158,"th",14),iN(1159,"Nome"),sg(),Tl(1160,"th",14),iN(1161,"Tipo"),sg(),Tl(1162,"th",14),iN(1163,"Descri\xE7\xE3o"),sg()(),Tl(1164,"tr",15)(1165,"td",16)(1166,"div",17)(1167,"span",18),iN(1168," color"),Gl(1169,"br"),sg()()(),Tl(1170,"td",19)(1171,"code",35),iN(1172,"string"),sg()(),Tl(1173,"td",23)(1174,"em")(1175,"strong"),iN(1176,"(opcional)"),sg()(),Tl(1177,"p"),iN(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),sg(),Tl(1179,"blockquote")(1180,"p"),iN(1181,"Nome da cor, hexadecimal ou RGB."),sg()()()(),Tl(1182,"tr",15)(1183,"td",16)(1184,"div",17)(1185,"span",18),iN(1186," max"),Gl(1187,"br"),sg()()(),Tl(1188,"td",19)(1189,"code",27),iN(1190,"number"),sg()(),Tl(1191,"td",23)(1192,"em")(1193,"strong"),iN(1194,"(opcional)"),sg()(),Tl(1195,"p"),iN(1196,"Valor m\xE1ximo do indicator."),sg(),Tl(1197,"p"),iN(1198,"A propriedade "),Tl(1199,"code"),iN(1200,"max"),sg(),iN(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),sg()()(),Tl(1202,"tr",15)(1203,"td",16)(1204,"div",17)(1205,"span",18),iN(1206," min"),Gl(1207,"br"),sg()()(),Tl(1208,"td",19)(1209,"code",27),iN(1210,"number"),sg()(),Tl(1211,"td",23)(1212,"em")(1213,"strong"),iN(1214,"(opcional)"),sg()(),Tl(1215,"p"),iN(1216,"Valor m\xEDnimo do indicator, com valor padr\xE3o de 0."),sg(),Tl(1217,"p"),iN(1218,"A propriedade "),Tl(1219,"code"),iN(1220,"min"),sg(),iN(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),sg()()(),Tl(1222,"tr",15)(1223,"td",16)(1224,"div",17)(1225,"span",18),iN(1226," name"),Gl(1227,"br"),sg()()(),Tl(1228,"td",19)(1229,"code",35),iN(1230,"string"),sg()(),Tl(1231,"td",23)(1232,"em")(1233,"strong"),iN(1234,"(opcional)"),sg()(),Tl(1235,"p"),iN(1236,"Nome do indicator."),sg()()()(),Tl(1237,"h4",37)(1238,"code",5),iN(1239,"PoChartLiterals"),sg()(),Tl(1240,"div",2)(1241,"p"),iN(1242,"Interface para defini\xE7\xE3o dos literais usadas no "),Tl(1243,"code"),iN(1244,"po-chart"),sg(),iN(1245,"."),sg()(),Tl(1246,"h4",11),iN(1247,"Propriedades"),sg(),Tl(1248,"table",12)(1249,"tr",13)(1250,"th",14),iN(1251,"Nome"),sg(),Tl(1252,"th",14),iN(1253,"Tipo"),sg(),Tl(1254,"th",14),iN(1255,"Descri\xE7\xE3o"),sg()(),Tl(1256,"tr",15)(1257,"td",16)(1258,"div",17)(1259,"span",18),iN(1260," category"),Gl(1261,"br"),sg()()(),Tl(1262,"td",19)(1263,"code",35),iN(1264,"string"),sg()(),Tl(1265,"td",23)(1266,"em")(1267,"strong"),iN(1268,"(opcional)"),sg()(),Tl(1269,"p"),iN(1270,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),Tl(1271,"code"),iN(1272,"Bar"),sg(),iN(1273,"."),sg()()(),Tl(1274,"tr",15)(1275,"td",16)(1276,"div",17)(1277,"span",18),iN(1278," downloadCSV"),Gl(1279,"br"),sg()()(),Tl(1280,"td",19)(1281,"code",35),iN(1282,"string"),sg()(),Tl(1283,"td",23)(1284,"em")(1285,"strong"),iN(1286,"(opcional)"),sg()(),Tl(1287,"p"),iN(1288,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),sg()()(),Tl(1289,"tr",15)(1290,"td",16)(1291,"div",17)(1292,"span",18),iN(1293," exportCSV"),Gl(1294,"br"),sg()()(),Tl(1295,"td",19)(1296,"code",35),iN(1297,"string"),sg()(),Tl(1298,"td",23)(1299,"em")(1300,"strong"),iN(1301,"(opcional)"),sg()(),Tl(1302,"p"),iN(1303,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),sg()()(),Tl(1304,"tr",15)(1305,"td",16)(1306,"div",17)(1307,"span",18),iN(1308," exportJPG"),Gl(1309,"br"),sg()()(),Tl(1310,"td",19)(1311,"code",35),iN(1312,"string"),sg()(),Tl(1313,"td",23)(1314,"em")(1315,"strong"),iN(1316,"(opcional)"),sg()(),Tl(1317,"p"),iN(1318,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),sg()()(),Tl(1319,"tr",15)(1320,"td",16)(1321,"div",17)(1322,"span",18),iN(1323," exportPNG"),Gl(1324,"br"),sg()()(),Tl(1325,"td",19)(1326,"code",35),iN(1327,"string"),sg()(),Tl(1328,"td",23)(1329,"em")(1330,"strong"),iN(1331,"(opcional)"),sg()(),Tl(1332,"p"),iN(1333,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),sg()()(),Tl(1334,"tr",15)(1335,"td",16)(1336,"div",17)(1337,"span",18),iN(1338," item"),Gl(1339,"br"),sg()()(),Tl(1340,"td",19)(1341,"code",35),iN(1342,"string"),sg()(),Tl(1343,"td",23)(1344,"em")(1345,"strong"),iN(1346,"(opcional)"),sg()(),Tl(1347,"p"),iN(1348,"Texto dos t\xEDtulos das colunas "),Tl(1349,"code"),iN(1350,"Gauge"),sg(),iN(1351," e n\xE3o possui label."),sg()()(),Tl(1352,"tr",15)(1353,"td",16)(1354,"div",17)(1355,"span",18),iN(1356," serie"),Gl(1357,"br"),sg()()(),Tl(1358,"td",19)(1359,"code",35),iN(1360,"string"),sg()(),Tl(1361,"td",23)(1362,"em")(1363,"strong"),iN(1364,"(opcional)"),sg()(),Tl(1365,"p"),iN(1366,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),Tl(1367,"code"),iN(1368,"Bar"),sg(),iN(1369," e "),Tl(1370,"code"),iN(1371,"Gauge"),sg(),iN(1372,"."),sg()()(),Tl(1373,"tr",15)(1374,"td",16)(1375,"div",17)(1376,"span",18),iN(1377," value"),Gl(1378,"br"),sg()()(),Tl(1379,"td",19)(1380,"code",35),iN(1381,"string"),sg()(),Tl(1382,"td",23)(1383,"em")(1384,"strong"),iN(1385,"(opcional)"),sg()(),Tl(1386,"p"),iN(1387,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),Tl(1388,"code"),iN(1389,"Gauge"),sg(),iN(1390,"."),sg()()()(),Tl(1391,"h4",37)(1392,"code",5),iN(1393,"PoChartOptions"),sg()(),Tl(1394,"div",2)(1395,"p")(1396,"em"),iN(1397,"Interface"),sg(),iN(1398," para configura\xE7\xF5es dos elementos do gr\xE1fico."),sg()(),Tl(1399,"h4",11),iN(1400,"Propriedades"),sg(),Tl(1401,"table",12)(1402,"tr",13)(1403,"th",14),iN(1404,"Nome"),sg(),Tl(1405,"th",14),iN(1406,"Tipo"),sg(),Tl(1407,"th",14),iN(1408,"Descri\xE7\xE3o"),sg()(),Tl(1409,"tr",15)(1410,"td",16)(1411,"div",17)(1412,"span",18),iN(1413," areaStyle"),Gl(1414,"br"),sg()()(),Tl(1415,"td",19)(1416,"code",39),iN(1417,"boolean"),sg()(),Tl(1418,"td",23)(1419,"em")(1420,"strong"),iN(1421,"(opcional)"),sg()(),Tl(1422,"p"),iN(1423,"Define se as s\xE9ries ter\xE3o sua \xE1rea preenchida."),sg(),Tl(1424,"blockquote")(1425,"p"),iN(1426,"Esta propriedade tem preced\xEAncia sobre a defini\xE7\xE3o de "),Tl(1427,"code"),iN(1428,"areaStyle"),sg(),iN(1429," em cada s\xE9rie, "),Tl(1430,"code"),iN(1431,"fillpoints"),sg(),iN(1432," n\xE3o funciona quando "),Tl(1433,"code"),iN(1434,"areaStyle"),sg(),iN(1435," est\xE1 definido como "),Tl(1436,"code"),iN(1437,"true"),sg(),iN(1438,"."),sg()()()(),Tl(1439,"tr",15)(1440,"td",16)(1441,"div",17)(1442,"span",18),iN(1443," axis"),Gl(1444,"br"),sg()()(),Tl(1445,"td",19)(1446,"code",40),iN(1447,"PoChartAxisOptions"),sg()(),Tl(1448,"td",23)(1449,"em")(1450,"strong"),iN(1451,"(opcional)"),sg()(),Tl(1452,"p"),iN(1453,"Define um objeto do tipo "),Tl(1454,"code"),iN(1455,"PoChartAxisOptions"),sg(),iN(1456," para configura\xE7\xE3o dos eixos."),sg()()(),Tl(1457,"tr",15)(1458,"td",16)(1459,"div",17)(1460,"span",18),iN(1461," borderRadius"),Gl(1462,"br"),sg()()(),Tl(1463,"td",19)(1464,"code",27),iN(1465,"number"),sg()(),Tl(1466,"td",23)(1467,"em")(1468,"strong"),iN(1469,"(opcional)"),sg()(),Tl(1470,"p"),iN(1471,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),Tl(1472,"code"),iN(1473,"Donut"),sg(),iN(1474,", "),Tl(1475,"code"),iN(1476,"Pie"),sg(),iN(1477,"."),sg(),Tl(1478,"blockquote")(1479,"p"),iN(1480,"Valores v\xE1lidos entre 0 e 100,"),sg()()()(),Tl(1481,"tr",15)(1482,"td",16)(1483,"div",17)(1484,"span",18),iN(1485," bottomDataZoom"),Gl(1486,"br"),sg()()(),Tl(1487,"td",19)(1488,"code",39),iN(1489,"boolean "),sg(),Tl(1490,"code",27),iN(1491," number"),sg()(),Tl(1492,"td",23)(1493,"em")(1494,"strong"),iN(1495,"(opcional)"),sg()(),Tl(1496,"p"),iN(1497,"Define a dist\xE2ncia inferior do componente DataZoom."),sg(),Tl(1498,"p"),iN(1499,"Esta propriedade aceita os seguintes valores:"),sg(),Tl(1500,"ul")(1501,"li")(1502,"p")(1503,"code"),iN(1504,"false"),sg(),iN(1505," (padr\xE3o): n\xE3o aplica ajustes."),sg()(),Tl(1506,"li")(1507,"p")(1508,"code"),iN(1509,"true"),sg(),iN(1510,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),sg(),Tl(1511,"ul")(1512,"li")(1513,"code"),iN(1514,"8"),sg(),iN(1515," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),sg(),Tl(1516,"li")(1517,"code"),iN(1518,"32"),sg(),iN(1519," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),sg()()(),Tl(1520,"li")(1521,"p")(1522,"code"),iN(1523,"number"),sg(),iN(1524,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),sg()()(),Tl(1525,"blockquote")(1526,"p"),iN(1527,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),Tl(1528,"code"),iN(1529,"dataZoom: true"),sg(),iN(1530,")."),sg()()()(),Tl(1531,"tr",15)(1532,"td",16)(1533,"div",17)(1534,"span",18),iN(1535," dataZoom"),Gl(1536,"br"),sg()()(),Tl(1537,"td",19)(1538,"code",39),iN(1539,"boolean"),sg()(),Tl(1540,"td",23)(1541,"em")(1542,"strong"),iN(1543,"(opcional)"),sg()(),Tl(1544,"p"),iN(1545,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),sg()()(),Tl(1546,"tr",15)(1547,"td",16)(1548,"div",17)(1549,"span",18),iN(1550," descriptionChart"),Gl(1551,"br"),sg()()(),Tl(1552,"td",19)(1553,"code",35),iN(1554,"string"),sg()(),Tl(1555,"td",23)(1556,"em")(1557,"strong"),iN(1558,"(opcional)"),sg()(),Tl(1559,"p"),iN(1560,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),sg()()(),Tl(1561,"tr",15)(1562,"td",16)(1563,"div",17)(1564,"span",18),iN(1565," fillPoints"),Gl(1566,"br"),sg()()(),Tl(1567,"td",19)(1568,"code",39),iN(1569,"boolean"),sg()(),Tl(1570,"td",23)(1571,"em")(1572,"strong"),iN(1573,"(opcional)"),sg()(),Tl(1574,"p"),iN(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),sg(),Tl(1576,"blockquote")(1577,"p"),iN(1578,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),Tl(1579,"code"),iN(1580,"Area"),sg(),iN(1581,", "),Tl(1582,"code"),iN(1583,"Line"),sg(),iN(1584," e "),Tl(1585,"code"),iN(1586,"Radar"),sg(),iN(1587,`.
Para o tipo `),Tl(1588,"code"),iN(1589,"Radar"),sg(),iN(1590,", o valor padr\xE3o \xE9 "),Tl(1591,"code"),iN(1592,"true"),sg(),iN(1593,"."),sg()()()(),Tl(1594,"tr",15)(1595,"td",16)(1596,"div",17)(1597,"span",18),iN(1598," firstColumnName"),Gl(1599,"br"),sg()()(),Tl(1600,"td",19)(1601,"code",35),iN(1602,"string"),sg()(),Tl(1603,"td",23)(1604,"em")(1605,"strong"),iN(1606,"(opcional)"),sg()(),Tl(1607,"p"),iN(1608,"Valor que permite customizar o nome da "),Tl(1609,"code"),iN(1610,"TH"),sg(),iN(1611," da primeira coluna da tabela descritiva."),sg()()(),Tl(1612,"tr",15)(1613,"td",16)(1614,"div",17)(1615,"span",18),iN(1616," header"),Gl(1617,"br"),sg()()(),Tl(1618,"td",19)(1619,"code",41),iN(1620,"PoChartHeaderOptions"),sg()(),Tl(1621,"td",23)(1622,"em")(1623,"strong"),iN(1624,"(opcional)"),sg()(),Tl(1625,"p"),iN(1626,"Define um objeto do tipo "),Tl(1627,"code"),iN(1628,"PoChartHeaderOptions"),sg(),iN(1629," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),sg()()(),Tl(1630,"tr",15)(1631,"td",16)(1632,"div",17)(1633,"span",18),iN(1634," innerRadius"),Gl(1635,"br"),sg()()(),Tl(1636,"td",19)(1637,"code",27),iN(1638,"number"),sg()(),Tl(1639,"td",23)(1640,"em")(1641,"strong"),iN(1642,"(opcional)"),sg()(),Tl(1643,"p"),iN(1644,"Define o di\xE2metro, em valor percentual entre "),Tl(1645,"code"),iN(1646,"0"),sg(),iN(1647," e "),Tl(1648,"code"),iN(1649,"100"),sg(),iN(1650,", da \xE1rea central para gr\xE1ficos do tipo "),Tl(1651,"code"),iN(1652,"donut"),sg(),iN(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Tl(1654,"code"),iN(1655,"40px"),sg(),iN(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),sg()()(),Tl(1657,"tr",15)(1658,"td",16)(1659,"div",17)(1660,"span",18),iN(1661," legend"),Gl(1662,"br"),sg()()(),Tl(1663,"td",19)(1664,"code",39),iN(1665,"boolean"),sg()(),Tl(1666,"td",23)(1667,"em")(1668,"strong"),iN(1669,"(opcional)"),sg()(),Tl(1670,"p"),iN(1671,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),Tl(1672,"code"),iN(1673,"true"),sg()()()(),Tl(1674,"tr",15)(1675,"td",16)(1676,"div",17)(1677,"span",18),iN(1678," legendPosition"),Gl(1679,"br"),sg()()(),Tl(1680,"td",19)(1681,"code",42),iN(1682,"'left' "),sg(),Tl(1683,"code",43),iN(1684," 'center' "),sg(),Tl(1685,"code",44),iN(1686," 'right'"),sg()(),Tl(1687,"td",23)(1688,"em")(1689,"strong"),iN(1690,"(opcional)"),sg()(),Tl(1691,"p"),iN(1692,"Define o alinhamento horizontal da legenda."),sg(),Tl(1693,"blockquote")(1694,"p"),iN(1695,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Tl(1696,"code"),iN(1697,"Gauge"),sg(),iN(1698,"."),sg()()()(),Tl(1699,"tr",15)(1700,"td",16)(1701,"div",17)(1702,"span",18),iN(1703," legendType"),Gl(1704,"br"),sg()()(),Tl(1705,"td",19)(1706,"code",45),iN(1707,"'plain' "),sg(),Tl(1708,"code",46),iN(1709," 'scroll'"),sg()(),Tl(1710,"td",23)(1711,"em")(1712,"strong"),iN(1713,"(opcional)"),sg()(),Tl(1714,"p"),iN(1715,"Define o tipo da legenda."),sg(),Tl(1716,"ul")(1717,"li")(1718,"code"),iN(1719,"plain"),sg(),iN(1720,": exibe todas as legendas de forma est\xE1tica."),sg(),Tl(1721,"li")(1722,"code"),iN(1723,"scroll"),sg(),iN(1724,": habilita rolagem quando a quantidade de legendas exceder o espa\xE7o dispon\xEDvel no gr\xE1fico."),sg()(),Tl(1725,"blockquote")(1726,"p"),iN(1727,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Tl(1728,"code"),iN(1729,"Gauge"),sg(),iN(1730,"."),sg()()()(),Tl(1731,"tr",15)(1732,"td",16)(1733,"div",17)(1734,"span",18),iN(1735," legendVerticalPosition"),Gl(1736,"br"),sg()()(),Tl(1737,"td",19)(1738,"code",47),iN(1739,"'top' "),sg(),Tl(1740,"code",48),iN(1741," 'bottom'"),sg()(),Tl(1742,"td",23)(1743,"em")(1744,"strong"),iN(1745,"(opcional)"),sg()(),Tl(1746,"p"),iN(1747,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),sg(),Tl(1748,"blockquote")(1749,"p"),iN(1750,"Quando utilizada com o valor "),Tl(1751,"code"),iN(1752,"top"),sg(),iN(1753,", recomenda-se configurar tamb\xE9m a propriedade "),Tl(1754,"code"),iN(1755,"bottomDataZoom"),sg(),iN(1756," caso o "),Tl(1757,"code"),iN(1758,"dataZoom"),sg(),iN(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Tl(1760,"code"),iN(1761,"Gauge"),sg(),iN(1762,"."),sg()()()(),Tl(1763,"tr",15)(1764,"td",16)(1765,"div",17)(1766,"span",18),iN(1767," pointer"),Gl(1768,"br"),sg()()(),Tl(1769,"td",19)(1770,"code",39),iN(1771,"boolean"),sg()(),Tl(1772,"td",23)(1773,"em")(1774,"strong"),iN(1775,"(opcional)"),sg()(),Tl(1776,"p"),iN(1777,"Define a exibi\xE7\xE3o do ponteiro."),sg(),Tl(1778,"blockquote")(1779,"p"),iN(1780,"V\xE1lido para gr\xE1fico do tipo "),Tl(1781,"code"),iN(1782,"Gauge"),sg(),iN(1783,"."),sg()()()(),Tl(1784,"tr",15)(1785,"td",16)(1786,"div",17)(1787,"span",18),iN(1788," rendererOption"),Gl(1789,"br"),sg()()(),Tl(1790,"td",19)(1791,"code",49),iN(1792,"'canvas' "),sg(),Tl(1793,"code",50),iN(1794," 'svg'"),sg()(),Tl(1795,"td",23)(1796,"em")(1797,"strong"),iN(1798,"(opcional)"),sg()(),Tl(1799,"p"),iN(1800,"Define como o gr\xE1fico ser\xE1 renderizado."),sg(),Tl(1801,"blockquote")(1802,"p"),iN(1803,"Recomenda-se n\xE3o modificar o valor da propriedade "),Tl(1804,"code"),iN(1805,"rendererOption"),sg(),iN(1806," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),sg()()()(),Tl(1807,"tr",15)(1808,"td",16)(1809,"div",17)(1810,"span",18),iN(1811," roseType"),Gl(1812,"br"),sg()()(),Tl(1813,"td",19)(1814,"code",39),iN(1815,"boolean"),sg()(),Tl(1816,"td",23)(1817,"em")(1818,"strong"),iN(1819,"(opcional)"),sg()(),Tl(1820,"p"),iN(1821,"Transforma os gr\xE1ficos do tipo "),Tl(1822,"code"),iN(1823,"Donut"),sg(),iN(1824," ou "),Tl(1825,"code"),iN(1826,"Pie"),sg(),iN(1827," num gr\xE1fico de \xE1rea polar."),sg(),Tl(1828,"blockquote")(1829,"p"),iN(1830,"V\xE1lido para os gr\xE1ficos "),Tl(1831,"code"),iN(1832,"Donut"),sg(),iN(1833," e "),Tl(1834,"code"),iN(1835,"Pie"),sg(),iN(1836,"."),sg()()()(),Tl(1837,"tr",15)(1838,"td",16)(1839,"div",17)(1840,"span",18),iN(1841," showContainerGauge"),Gl(1842,"br"),sg()()(),Tl(1843,"td",19)(1844,"code",39),iN(1845,"boolean"),sg()(),Tl(1846,"td",23)(1847,"em")(1848,"strong"),iN(1849,"(opcional)"),sg()(),Tl(1850,"p"),iN(1851,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),sg(),Tl(1852,"blockquote")(1853,"p"),iN(1854,"V\xE1lido para gr\xE1fico do tipo "),Tl(1855,"code"),iN(1856,"Gauge"),sg(),iN(1857,"."),sg()()()(),Tl(1858,"tr",15)(1859,"td",16)(1860,"div",17)(1861,"span",18),iN(1862," showFromToLegend"),Gl(1863,"br"),sg()()(),Tl(1864,"td",19)(1865,"code",39),iN(1866,"boolean"),sg()(),Tl(1867,"td",23)(1868,"em")(1869,"strong"),iN(1870,"(opcional)"),sg()(),Tl(1871,"p"),iN(1872,"Exibe os valores das propriedades "),Tl(1873,"code"),iN(1874,"from"),sg(),iN(1875," e "),Tl(1876,"code"),iN(1877,"to"),sg(),iN(1878," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),sg(),Tl(1879,"blockquote")(1880,"p"),iN(1881,"V\xE1lido para gr\xE1fico do tipo "),Tl(1882,"code"),iN(1883,"Gauge"),sg(),iN(1884,"."),sg()()()(),Tl(1885,"tr",15)(1886,"td",16)(1887,"div",17)(1888,"span",18),iN(1889," stacked"),Gl(1890,"br"),sg()()(),Tl(1891,"td",19)(1892,"code",39),iN(1893,"boolean"),sg()(),Tl(1894,"td",23)(1895,"em")(1896,"strong"),iN(1897,"(opcional)"),sg()(),Tl(1898,"p"),iN(1899,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),Tl(1900,"code"),iN(1901,"stackGroupName"),sg(),iN(1902," da interface "),Tl(1903,"code"),iN(1904,"PoChartSerie"),sg()(),Tl(1905,"blockquote")(1906,"p"),iN(1907,"V\xE1lido para gr\xE1fico do tipo "),Tl(1908,"code"),iN(1909,"Column"),sg(),iN(1910," e "),Tl(1911,"code"),iN(1912,"Bar"),sg(),iN(1913,"."),sg()(),Tl(1914,"blockquote")(1915,"p"),iN(1916,"Essa propriedade habilita a propriedade "),Tl(1917,"code"),iN(1918,"p-data-label"),sg(),iN(1919," por padr\xE3o, podendo ser desabilitada passando "),Tl(1920,"code"),iN(1921,"[p-data-label]={ fixed: false }"),sg(),iN(1922,"."),sg()()()(),Tl(1923,"tr",15)(1924,"td",16)(1925,"div",17)(1926,"span",18),iN(1927," subtitleGauge"),Gl(1928,"br"),sg()()(),Tl(1929,"td",19)(1930,"code",35),iN(1931,"string"),sg()(),Tl(1932,"td",23)(1933,"em")(1934,"strong"),iN(1935,"(opcional)"),sg()(),Tl(1936,"p"),iN(1937,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),sg(),Tl(1938,"blockquote")(1939,"p"),iN(1940,"V\xE1lido para gr\xE1fico do tipo "),Tl(1941,"code"),iN(1942,"Gauge"),sg(),iN(1943,"."),sg()()()(),Tl(1944,"tr",15)(1945,"td",16)(1946,"div",17)(1947,"span",18),iN(1948," textCenterGraph"),Gl(1949,"br"),sg()()(),Tl(1950,"td",19)(1951,"code",35),iN(1952,"string"),sg()(),Tl(1953,"td",23)(1954,"em")(1955,"strong"),iN(1956,"(opcional)"),sg()(),Tl(1957,"p"),iN(1958,"Aplica texto centralizado customizado nos gr\xE1ficos de "),Tl(1959,"code"),iN(1960,"Donut"),sg(),iN(1961,"."),sg()()()(),Tl(1962,"h4",37)(1963,"code",5),iN(1964,"PoChartRadarOptions"),sg()(),Tl(1965,"div",2)(1966,"p")(1967,"em"),iN(1968,"Interface"),sg(),iN(1969," para configura\xE7\xF5es do gr\xE1fico "),Tl(1970,"code"),iN(1971,"radar"),sg(),iN(1972,"."),sg()(),Tl(1973,"h4",11),iN(1974,"Propriedades"),sg(),Tl(1975,"table",12)(1976,"tr",13)(1977,"th",14),iN(1978,"Nome"),sg(),Tl(1979,"th",14),iN(1980,"Tipo"),sg(),Tl(1981,"th",14),iN(1982,"Descri\xE7\xE3o"),sg()(),Tl(1983,"tr",15)(1984,"td",16)(1985,"div",17)(1986,"span",18),iN(1987," indicator"),Gl(1988,"br"),sg()()(),Tl(1989,"td",19)(1990,"code",51),iN(1991,"Array<PoChartIndicatorOptions>"),sg()(),Tl(1992,"td",23)(1993,"em")(1994,"strong"),iN(1995,"(opcional)"),sg()(),Tl(1996,"p"),iN(1997,"Define as configura\xE7\xF5es dos indicadores do gr\xE1fico, como nome, cor, valor m\xEDnimo e valor m\xE1ximo."),sg()()(),Tl(1998,"tr",15)(1999,"td",16)(2e3,"div",17)(2001,"span",18),iN(2002," shape"),Gl(2003,"br"),sg()()(),Tl(2004,"td",19)(2005,"code",52),iN(2006,"'polygon' "),sg(),Tl(2007,"code",53),iN(2008," 'circle'"),sg()(),Tl(2009,"td",23)(2010,"em")(2011,"strong"),iN(2012,"(opcional)"),sg()(),Tl(2013,"p"),iN(2014,"Define o formato da grid, podendo ser exibida como pol\xEDgono ou c\xEDrculo."),sg()()(),Tl(2015,"tr",15)(2016,"td",16)(2017,"div",17)(2018,"span",18),iN(2019," splitArea"),Gl(2020,"br"),sg()()(),Tl(2021,"td",19)(2022,"code",39),iN(2023,"boolean"),sg()(),Tl(2024,"td",23)(2025,"em")(2026,"strong"),iN(2027,"(opcional)"),sg()(),Tl(2028,"p"),iN(2029,"Define o efeito zebrado na grid."),sg()()()(),Tl(2030,"h4",37)(2031,"code",5),iN(2032,"PoChartDataLabel"),sg()(),Tl(2033,"div",2)(2034,"p"),iN(2035,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),Tl(2036,"code"),iN(2037,"po-chart"),sg(),iN(2038,"."),sg()(),Tl(2039,"h4",11),iN(2040,"Propriedades"),sg(),Tl(2041,"table",12)(2042,"tr",13)(2043,"th",14),iN(2044,"Nome"),sg(),Tl(2045,"th",14),iN(2046,"Tipo"),sg(),Tl(2047,"th",14),iN(2048,"Descri\xE7\xE3o"),sg()(),Tl(2049,"tr",15)(2050,"td",16)(2051,"div",17)(2052,"span",18),iN(2053," fixed"),Gl(2054,"br"),sg()()(),Tl(2055,"td",19)(2056,"code",39),iN(2057,"boolean"),sg()(),Tl(2058,"td",23)(2059,"em")(2060,"strong"),iN(2061,"(opcional)"),sg()(),Tl(2062,"p"),iN(2063,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),sg(),Tl(2064,"ul")(2065,"li"),iN(2066,"Quando definido como "),Tl(2067,"code"),iN(2068,"true"),sg(),iN(2069,":"),Tl(2070,"ul")(2071,"li"),iN(2072,"O "),Tl(2073,"em"),iN(2074,"tooltip"),sg(),iN(2075," n\xE3o ser\xE1 exibido."),sg(),Tl(2076,"li"),iN(2077,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),sg()()()(),Tl(2078,"blockquote")(2079,"p"),iN(2080,"Dispon\xEDvel para os tipo de gr\xE1fico "),Tl(2081,"code"),iN(2082,"PoChartType.Line"),sg(),iN(2083,", "),Tl(2084,"code"),iN(2085,"PoChartType.Area"),sg(),iN(2086,", "),Tl(2087,"code"),iN(2088,"PoChartType.Column"),sg(),iN(2089,", "),Tl(2090,"code"),iN(2091,"PoChartType.Bar e PoChartType.Radar"),sg(),iN(2092,"."),sg()()()()(),Tl(2093,"h4",37)(2094,"code",5),iN(2095,"PoChartSerie"),sg()(),Tl(2096,"div",2)(2097,"p"),iN(2098,"Interface das series din\xE2micas do "),Tl(2099,"code"),iN(2100,"po-chart"),sg(),iN(2101," que possibilita desenhar gr\xE1ficos dos tipos "),Tl(2102,"code"),iN(2103,"area"),sg(),iN(2104,", "),Tl(2105,"code"),iN(2106,"bar"),sg(),iN(2107,", "),Tl(2108,"code"),iN(2109,"column"),sg(),iN(2110,", "),Tl(2111,"code"),iN(2112,"line"),sg(),iN(2113,", "),Tl(2114,"code"),iN(2115,"donut"),sg(),iN(2116,", "),Tl(2117,"code"),iN(2118,"pie"),sg(),iN(2119," e "),Tl(2120,"code"),iN(2121,"radar"),sg()()(),Tl(2122,"h4",11),iN(2123,"Propriedades"),sg(),Tl(2124,"table",12)(2125,"tr",13)(2126,"th",14),iN(2127,"Nome"),sg(),Tl(2128,"th",14),iN(2129,"Tipo"),sg(),Tl(2130,"th",14),iN(2131,"Descri\xE7\xE3o"),sg()(),Tl(2132,"tr",15)(2133,"td",16)(2134,"div",17)(2135,"span",18),iN(2136," areaStyle"),Gl(2137,"br"),sg()()(),Tl(2138,"td",19)(2139,"code",39),iN(2140,"boolean"),sg()(),Tl(2141,"td",23)(2142,"em")(2143,"strong"),iN(2144,"(opcional)"),sg()(),Tl(2145,"p"),iN(2146,"Define se a s\xE9rie ter\xE1 sua \xE1rea preenchida."),sg(),Tl(2147,"blockquote")(2148,"p"),iN(2149,"Propriedade v\xE1lida para gr\xE1ficos do tipo "),Tl(2150,"code"),iN(2151,"Radar"),sg(),iN(2152,", "),Tl(2153,"code"),iN(2154,"fillpoints"),sg(),iN(2155," n\xE3o funciona quando "),Tl(2156,"code"),iN(2157,"areaStyle"),sg(),iN(2158," est\xE1 definido como "),Tl(2159,"code"),iN(2160,"true"),sg(),iN(2161,"."),sg()()()(),Tl(2162,"tr",15)(2163,"td",16)(2164,"div",17)(2165,"span",18),iN(2166," color"),Gl(2167,"br"),sg()()(),Tl(2168,"td",19)(2169,"code",35),iN(2170,"string"),sg()(),Tl(2171,"td",23)(2172,"em")(2173,"strong"),iN(2174,"(opcional)"),sg()(),Tl(2175,"p"),iN(2176,"Determina a cor da s\xE9rie. As maneiras de customizar o "),Tl(2177,"em"),iN(2178,"preset"),sg(),iN(2179," padr\xE3o de cores s\xE3o:"),sg(),Tl(2180,"ul")(2181,"li"),iN(2182,"Hexadecimal, por exemplo "),Tl(2183,"code"),iN(2184,"#c64840"),sg(),iN(2185,";"),sg(),Tl(2186,"li"),iN(2187,"RGB, por exemplo "),Tl(2188,"code"),iN(2189,"rgb(0, 0, 165)"),sg()(),Tl(2190,"li"),iN(2191,"O nome da cor, por exemplo "),Tl(2192,"code"),iN(2193,"blue"),sg(),iN(2194,";"),sg(),Tl(2195,"li"),iN(2196,"Vari\xE1veis CSS, por exemplo "),Tl(2197,"code"),iN(2198,"var(--color-01)"),sg(),iN(2199,";"),sg(),Tl(2200,"li"),iN(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Tl(2202,"ul")(2203,"li"),Gl(2204,"span",54),Tl(2205,"code"),iN(2206,"color-01"),sg()(),Tl(2207,"li"),Gl(2208,"span",55),Tl(2209,"code"),iN(2210,"color-02"),sg()(),Tl(2211,"li"),Gl(2212,"span",56),Tl(2213,"code"),iN(2214,"color-03"),sg()(),Tl(2215,"li"),Gl(2216,"span",57),Tl(2217,"code"),iN(2218,"color-04"),sg()(),Tl(2219,"li"),Gl(2220,"span",58),Tl(2221,"code"),iN(2222,"color-05"),sg()(),Tl(2223,"li"),Gl(2224,"span",59),Tl(2225,"code"),iN(2226,"color-06"),sg()(),Tl(2227,"li"),Gl(2228,"span",60),Tl(2229,"code"),iN(2230,"color-07"),sg()(),Tl(2231,"li"),Gl(2232,"span",61),Tl(2233,"code"),iN(2234,"color-08"),sg()(),Tl(2235,"li"),Gl(2236,"span",62),Tl(2237,"code"),iN(2238,"color-09"),sg()(),Tl(2239,"li"),Gl(2240,"span",63),Tl(2241,"code"),iN(2242,"color-10"),sg()(),Tl(2243,"li"),Gl(2244,"span",64),Tl(2245,"code"),iN(2246,"color-11"),sg()(),Tl(2247,"li"),Gl(2248,"span",65),Tl(2249,"code"),iN(2250,"color-12"),sg()()()()(),Tl(2251,"ul")(2252,"li"),iN(2253,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),sg()()()(),Tl(2254,"tr",15)(2255,"td",16)(2256,"div",17)(2257,"span",18),iN(2258," data"),Gl(2259,"br"),sg()()(),Tl(2260,"td",19)(2261,"code",27),iN(2262,"number "),sg(),Tl(2263,"code",66),iN(2264," Array<number>"),sg()(),Tl(2265,"td",23)(2266,"em")(2267,"strong"),iN(2268,"(opcional)"),sg()(),Tl(2269,"p"),iN(2270,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),sg(),Tl(2271,"ul")(2272,"li"),iN(2273,"Para gr\xE1ficos dos tipos "),Tl(2274,"code"),iN(2275,"donut"),sg(),iN(2276," e "),Tl(2277,"code"),iN(2278,"pie"),sg(),iN(2279,", espera-se "),Tl(2280,"em"),iN(2281,"number"),sg(),iN(2282,";"),sg(),Tl(2283,"li"),iN(2284,"Para gr\xE1ficos dos tipos "),Tl(2285,"code"),iN(2286,"area"),sg(),iN(2287,", "),Tl(2288,"code"),iN(2289,"bar"),sg(),iN(2290,", "),Tl(2291,"code"),iN(2292,"column"),sg(),iN(2293,", "),Tl(2294,"code"),iN(2295,"line"),sg(),iN(2296," e "),Tl(2297,"code"),iN(2298,"radar"),sg(),iN(2299,", espera-se um "),Tl(2300,"em"),iN(2301,"array"),sg(),iN(2302," de "),Tl(2303,"code"),iN(2304,"data"),sg(),iN(2305,"."),sg()(),Tl(2306,"blockquote")(2307,"p"),iN(2308,"Se passado valor "),Tl(2309,"code"),iN(2310,"null"),sg(),iN(2311," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),sg()()()(),Tl(2312,"tr",15)(2313,"td",16)(2314,"div",17)(2315,"span",18),iN(2316," from"),Gl(2317,"br"),sg()()(),Tl(2318,"td",19)(2319,"code",27),iN(2320,"number"),sg()(),Tl(2321,"td",23)(2322,"em")(2323,"strong"),iN(2324,"(opcional)"),sg()(),Tl(2325,"p"),iN(2326,"Alcance inicial da cor."),sg(),Tl(2327,"blockquote")(2328,"p"),iN(2329,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Tl(2330,"code"),iN(2331,"Gauge"),sg(),iN(2332,"."),sg()()()(),Tl(2333,"tr",15)(2334,"td",16)(2335,"div",17)(2336,"span",18),iN(2337," label"),Gl(2338,"br"),sg()()(),Tl(2339,"td",19)(2340,"code",35),iN(2341,"string"),sg()(),Tl(2342,"td",23)(2343,"em")(2344,"strong"),iN(2345,"(opcional)"),sg()(),Tl(2346,"p"),iN(2347,"R\xF3tulo refer\xEAncia da s\xE9rie."),sg()()(),Tl(2348,"tr",15)(2349,"td",16)(2350,"div",17)(2351,"span",18),iN(2352," stackGroupName"),Gl(2353,"br"),sg()()(),Tl(2354,"td",19)(2355,"code",35),iN(2356,"string"),sg()(),Tl(2357,"td",23)(2358,"em")(2359,"strong"),iN(2360,"(opcional)"),sg()(),Tl(2361,"p"),iN(2362,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),Tl(2363,"code"),iN(2364,"stackGroupName"),sg(),iN(2365,". Exemplo:"),sg(),Tl(2366,"ul")(2367,"li"),iN(2368,"Serie A: "),Tl(2369,"code"),iN(2370,"{ data: 500, stackGroupName: 'group1' ... }"),sg(),iN(2371,";"),sg(),Tl(2372,"li"),iN(2373,"S\xE9rie B: "),Tl(2374,"code"),iN(2375,"{ data: 200, stackGroupName: 'group1' ... }"),sg(),iN(2376,"."),sg(),Tl(2377,"li"),iN(2378,"S\xE9rie C: "),Tl(2379,"code"),iN(2380,"{ data: 100, stackGroupName: 'group2' ... }"),sg(),iN(2381,"."),sg(),Tl(2382,"li"),iN(2383,"S\xE9rie D: "),Tl(2384,"code"),iN(2385,"{ data: 400, stackGroupName: 'group2' ... }"),sg(),iN(2386,"."),sg()(),Tl(2387,"p"),iN(2388,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),sg(),Tl(2389,"blockquote")(2390,"p"),iN(2391,"V\xE1lido para gr\xE1fico do tipo "),Tl(2392,"code"),iN(2393,"Column"),sg(),iN(2394," e "),Tl(2395,"code"),iN(2396,"Bar"),sg(),iN(2397,". Essa propriedade \xE9 ignorada caso a propriedade "),Tl(2398,"code"),iN(2399,"stacked"),sg(),iN(2400," da interface "),Tl(2401,"code"),iN(2402,"PoChartOptions"),sg(),iN(2403," esteja como "),Tl(2404,"code"),iN(2405,"true"),sg(),iN(2406,"."),sg()(),Tl(2407,"blockquote")(2408,"p"),iN(2409,"Essa propriedade habilita a propriedade "),Tl(2410,"code"),iN(2411,"p-data-label"),sg(),iN(2412," por padr\xE3o, podendo ser desabilitada passando "),Tl(2413,"code"),iN(2414,"[p-data-label]={ fixed: false }"),sg(),iN(2415,"."),sg()()()(),Tl(2416,"tr",15)(2417,"td",16)(2418,"div",17)(2419,"span",18),iN(2420," to"),Gl(2421,"br"),sg()()(),Tl(2422,"td",19)(2423,"code",27),iN(2424,"number"),sg()(),Tl(2425,"td",23)(2426,"em")(2427,"strong"),iN(2428,"(opcional)"),sg()(),Tl(2429,"p"),iN(2430,"Alcance final da cor."),sg(),Tl(2431,"blockquote")(2432,"p"),iN(2433,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Tl(2434,"code"),iN(2435,"Gauge"),sg(),iN(2436,"."),sg()()()(),Tl(2437,"tr",15)(2438,"td",16)(2439,"div",17)(2440,"span",18),iN(2441," tooltip"),Gl(2442,"br"),sg()()(),Tl(2443,"td",19)(2444,"code",35),iN(2445,"string "),sg(),Tl(2446,"code",67),iN(2447," ((params: any) => string)"),sg()(),Tl(2448,"td",23)(2449,"em")(2450,"strong"),iN(2451,"(opcional)"),sg()(),Tl(2452,"p"),iN(2453,"Define o texto que ser\xE1 exibido na tooltip ao passar o mouse por cima das s\xE9ries do "),Tl(2454,"em"),iN(2455,"chart"),sg(),iN(2456,"."),sg(),Tl(2457,"p"),iN(2458,"Formatos aceitos:"),sg(),Tl(2459,"ul")(2460,"li")(2461,"p")(2462,"strong"),iN(2463,"string"),sg(),iN(2464,": pode conter marcadores din\xE2micos e HTML simples."),sg()(),Tl(2465,"li")(2466,"p"),iN(2467,"Marcadores dispon\xEDveis:"),sg()(),Tl(2468,"li")(2469,"p")(2470,"code"),iN(2471,"{name}"),sg(),iN(2472," \u2192 Nome do item/categoria."),sg()(),Tl(2473,"li")(2474,"p")(2475,"code"),iN(2476,"{seriesName}"),sg(),iN(2477," \u2192 Nome da s\xE9rie."),sg()(),Tl(2478,"li")(2479,"p")(2480,"code"),iN(2481,"{value}"),sg(),iN(2482," \u2192 Valor correspondente."),sg()(),Tl(2483,"li")(2484,"p")(2485,"strong"),iN(2486,"function"),sg(),iN(2487,": fun\xE7\xE3o que recebe o objeto "),Tl(2488,"code"),iN(2489,"params"),sg(),iN(2490," e deve retornar uma "),Tl(2491,"em"),iN(2492,"string"),sg(),iN(2493," com o conte\xFAdo da tooltip."),sg()()(),Tl(2494,"blockquote")(2495,"p"),iN(2496,"\xC9 poss\xEDvel utilizar marca\xE7\xE3o HTML simples ("),Tl(2497,"code"),iN(2498,"<b>"),sg(),iN(2499,", "),Tl(2500,"code"),iN(2501,"<i>"),sg(),iN(2502,", "),Tl(2503,"code"),iN(2504,"<br>"),sg(),iN(2505,", "),Tl(2506,"code"),iN(2507,"<hr>"),sg(),iN(2508,", etc.) que ser\xE1 interpretada via "),Tl(2509,"code"),iN(2510,"innerHTML"),sg(),iN(2511,"."),sg()(),Tl(2512,"blockquote")(2513,"p"),iN(2514,"Formata\xE7\xE3o customizada (ser\xE1 convertido internamente para HTML):"),sg()(),Tl(2515,"ul")(2516,"li")(2517,"code"),iN(2518,"\\n"),sg(),iN(2519," \u2192 quebra de linha ("),Tl(2520,"code"),iN(2521,"<br>"),sg(),iN(2522,")."),sg(),Tl(2523,"li")(2524,"code"),iN(2525,"**texto**"),sg(),iN(2526," \u2192 negrito ("),Tl(2527,"code"),iN(2528,"<b>"),sg(),iN(2529,")."),sg(),Tl(2530,"li")(2531,"code"),iN(2532,"__texto__"),sg(),iN(2533," \u2192 it\xE1lico ("),Tl(2534,"code"),iN(2535,"<i>"),sg(),iN(2536,")."),sg()(),Tl(2537,"blockquote")(2538,"p"),iN(2539,"Caso n\xE3o seja informado um valor para o "),Tl(2540,"em"),iN(2541,"tooltip"),sg(),iN(2542,", ser\xE1 exibido da seguinte forma:"),sg()(),Tl(2543,"ul")(2544,"li")(2545,"code"),iN(2546,"donut"),sg(),iN(2547,", "),Tl(2548,"code"),iN(2549,"label"),sg(),iN(2550,": valor proporcional ao total em porcentagem."),sg(),Tl(2551,"li")(2552,"code"),iN(2553,"radar"),sg(),iN(2554,": nome da s\xE9rie, o nome do indicator e os valores correspondentes."),sg(),Tl(2555,"li")(2556,"code"),iN(2557,"area"),sg(),iN(2558,", "),Tl(2559,"code"),iN(2560,"bar"),sg(),iN(2561,", "),Tl(2562,"code"),iN(2563,"column"),sg(),iN(2564,", "),Tl(2565,"code"),iN(2566,"line"),sg(),iN(2567," e "),Tl(2568,"code"),iN(2569,"pie"),sg(),iN(2570,": "),Tl(2571,"code"),iN(2572,"label"),sg(),iN(2573,": "),Tl(2574,"code"),iN(2575,"data"),sg(),iN(2576,"."),sg()(),Tl(2577,"h3"),iN(2578,"Exemplos:"),sg(),Tl(2579,"p")(2580,"strong"),iN(2581,"Usando string com placeholders:"),sg()(),Tl(2582,"pre")(2583,"code",68),iN(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),sg()(),Tl(2585,"p")(2586,"strong"),iN(2587,"Usando fun\xE7\xE3o de callback:"),sg()(),Tl(2588,"pre")(2589,"code",68),iN(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),sg()()()(),Tl(2591,"tr",15)(2592,"td",16)(2593,"div",17)(2594,"span",18),iN(2595," type"),Gl(2596,"br"),sg()()(),Tl(2597,"td",19)(2598,"code",36),iN(2599,"PoChartType"),sg()(),Tl(2600,"td",23)(2601,"em")(2602,"strong"),iN(2603,"(opcional)"),sg()(),Tl(2604,"p"),iN(2605,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),Tl(2606,"code"),iN(2607,"column"),sg(),iN(2608," e "),Tl(2609,"code"),iN(2610,"line"),sg(),iN(2611," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),sg(),Tl(2612,"ul")(2613,"li"),iN(2614,"Serie A: "),Tl(2615,"code"),iN(2616,"{ type: ChartType.Column, data: ... }"),sg(),iN(2617,";"),sg(),Tl(2618,"li"),iN(2619,"S\xE9rie B: "),Tl(2620,"code"),iN(2621,"{ type: ChartType.Line, data: ... }"),sg(),iN(2622,"."),sg()(),Tl(2623,"p"),iN(2624,"Se tanto "),Tl(2625,"code"),iN(2626,"p-type"),sg(),iN(2627," quanto "),Tl(2628,"code"),iN(2629,"{ type }"),sg(),iN(2630," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),sg(),Tl(2631,"ul")(2632,"li")(2633,"code"),iN(2634,"column"),sg(),iN(2635,": se "),Tl(2636,"code"),iN(2637,"data"),sg(),iN(2638," receber "),Tl(2639,"code"),iN(2640,"Array<number>"),sg(),iN(2641,";"),sg(),Tl(2642,"li")(2643,"code"),iN(2644,"pie"),sg(),iN(2645,": se "),Tl(2646,"code"),iN(2647,"data"),sg(),iN(2648," for "),Tl(2649,"em"),iN(2650,"number"),sg(),iN(2651,"."),sg()(),Tl(2652,"blockquote")(2653,"p"),iN(2654,"Se utilizada a propriedade "),Tl(2655,"code"),iN(2656,"p-type"),sg(),iN(2657,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),Tl(2658,"code"),iN(2659,"{type}"),sg(),iN(2660," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),Tl(2661,"code"),iN(2662,"p-type"),sg(),iN(2663,"."),sg()(),Tl(2664,"blockquote")(2665,"p"),iN(2666,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),Tl(2667,"code"),iN(2668,"type"),sg(),iN(2669," definido, exceto para mesclagem para tipos "),Tl(2670,"code"),iN(2671,"column"),sg(),iN(2672," e "),Tl(2673,"code"),iN(2674,"line"),sg(),iN(2675,"."),sg()()()()(),Tl(2676,"h3"),iN(2677,"Enums"),sg(),Tl(2678,"h4",4)(2679,"code",5),iN(2680,"PoChartLabelFormat"),sg()(),Tl(2681,"div",2)(2682,"p")(2683,"em"),iN(2684,"Enum"),sg(),Tl(2685,"code"),iN(2686,"PoChartLabelFormat"),sg(),iN(2687," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),sg()(),Tl(2688,"h4",11),iN(2689,"Propriedades"),sg(),Tl(2690,"table",12)(2691,"tr",13)(2692,"th",14),iN(2693,"Nome"),sg(),Tl(2694,"th",14),iN(2695,"Descri\xE7\xE3o"),sg()(),Tl(2696,"tr",15)(2697,"td",16)(2698,"div",17)(2699,"span",18),iN(2700," Number"),Gl(2701,"br"),sg()()(),Tl(2702,"td",23)(2703,"p"),iN(2704,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),Tl(2705,"code"),iN(2706,"'1.2-2'"),sg(),iN(2707," da "),Tl(2708,"a",69),iN(2709,"DecimalPipe"),sg(),iN(2710,"."),sg()()(),Tl(2711,"tr",15)(2712,"td",16)(2713,"div",17)(2714,"span",18),iN(2715," Currency"),Gl(2716,"br"),sg()()(),Tl(2717,"td",23)(2718,"p"),iN(2719,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),Tl(2720,"a",70),iN(2721,"DEFAULT_CURRENCY_CODE"),sg(),iN(2722,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),Tl(2723,"a",71),iN(2724,"LOCALE_ID"),sg(),iN(2725," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),sg(),Tl(2726,"pre")(2727,"code"),iN(2728,`import { LOCALE_ID } from '@angular/core';
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
`),sg()()()()(),Tl(2729,"h4",4)(2730,"code",5),iN(2731,"PoChartType"),sg()(),Tl(2732,"div",2)(2733,"p")(2734,"em"),iN(2735,"Enum"),sg(),Tl(2736,"code"),iN(2737,"PoChartType"),sg(),iN(2738," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),sg()(),Tl(2739,"h4",11),iN(2740,"Propriedades"),sg(),Tl(2741,"table",12)(2742,"tr",13)(2743,"th",14),iN(2744,"Nome"),sg(),Tl(2745,"th",14),iN(2746,"Descri\xE7\xE3o"),sg()(),Tl(2747,"tr",15)(2748,"td",16)(2749,"div",17)(2750,"span",18),iN(2751," Area"),Gl(2752,"br"),sg()()(),Tl(2753,"td",23)(2754,"p"),iN(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),sg()()(),Tl(2756,"tr",15)(2757,"td",16)(2758,"div",17)(2759,"span",18),iN(2760," Donut"),Gl(2761,"br"),sg()()(),Tl(2762,"td",23)(2763,"p"),iN(2764,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),sg()()(),Tl(2765,"tr",15)(2766,"td",16)(2767,"div",17)(2768,"span",18),iN(2769," Pie"),Gl(2770,"br"),sg()()(),Tl(2771,"td",23)(2772,"p"),iN(2773,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),sg()()(),Tl(2774,"tr",15)(2775,"td",16)(2776,"div",17)(2777,"span",18),iN(2778," Line"),Gl(2779,"br"),sg()()(),Tl(2780,"td",23)(2781,"p"),iN(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Tl(2783,"code"),iN(2784,"column"),sg(),iN(2785," e "),Tl(2786,"code"),iN(2787,"area"),sg(),iN(2788,", definindo-se o tipo atrav\xE9s da propriedade "),Tl(2789,"code"),iN(2790,"PoChartSerie.type"),sg(),iN(2791,"."),sg()()(),Tl(2792,"tr",15)(2793,"td",16)(2794,"div",17)(2795,"span",18),iN(2796," Column"),Gl(2797,"br"),sg()()(),Tl(2798,"td",23)(2799,"p"),iN(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),sg()()(),Tl(2801,"tr",15)(2802,"td",16)(2803,"div",17)(2804,"span",18),iN(2805," Bar"),Gl(2806,"br"),sg()()(),Tl(2807,"td",23)(2808,"p"),iN(2809,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),sg()()(),Tl(2810,"tr",15)(2811,"td",16)(2812,"div",17)(2813,"span",18),iN(2814," Gauge"),Gl(2815,"br"),sg()()(),Tl(2816,"td",23)(2817,"p"),iN(2818,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),sg(),Tl(2819,"ul")(2820,"li"),iN(2821,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),sg(),Tl(2822,"li"),iN(2823,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),sg()()()(),Tl(2824,"tr",15)(2825,"td",16)(2826,"div",17)(2827,"span",18),iN(2828," Radar"),Gl(2829,"br"),sg()()(),Tl(2830,"td",23)(2831,"p"),iN(2832,"Tipo de gr\xE1fico utilizado para visualizar e comparar o desempenho de diferentes itens em m\xFAltiplas categorias."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return r})();var Oe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(d){return new(d||r)(w(Xn),w(wn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,i){d&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-chart-doc"),sg(),Tl(4,"po-tab",3),ht$1("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view")(11,"sample-po-chart-technology-skill-view"),sg()()()),d&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,fe,ve,Pe,we,Me,ke,Ae,Re],encapsulation:2,changeDetection:1})}return r})();var _t=[{path:"",component:Oe}],Ge=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[DL.forChild(_t),DL]})}return r})();var yn=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[sr,Ge]})}return r})();export{yn as DocPoChartModule};