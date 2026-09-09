import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Dx,$r as Xy,$t as iU,A as F4,At as _Ce,Bi as jp,Bt as f8e,Ct as X4,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ht as fr,Ii as hg,Ji as mY,Jn as Ce$1,Li as ht$1,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,bt as W0e,er as EN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,li as _x,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var Be=()=>({label:`Angular`,data:100});var We=()=>({label:`React`,data:10});var Fe=(r,W)=>[r,W];var Ce=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&Gl(0,`po-chart`,0),d&2&&nw(`p-series`,EN(3,Fe,_N(1,Be),_N(2,We)))},dependencies:[f8e],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r});var fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Chart Basic`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-chart-basic`),ag(),Gl(23,`hr`)),d&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:`fillPoints`,label:`fillPoints`});var q=r=>[r];var He=()=>({label:`legend`,value:`legend`});var Ze=()=>({label:`roseType`,value:`roseType`});var Ye=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var je=()=>({label:`pointer`,value:`pointer`});var Ue=()=>({label:`stacked`,value:`stacked`});var Je=()=>({value:`fixed`,label:`Fixed`});function Xe(r,W){if(r&1){let l=Ax();Tl(0,`po-checkbox-group`,54),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),Xy(i)}),ht$1(`p-change`,function(){Ky(l);return Xy(Fx().changeDataLabelOptions())}),ag(),a0()}if(r&2){let l=Fx();nw(`p-options`,DN(3,q,_N(2,Je))),Ew(`ngModel`,l.selectedValuesDataLabel),l0()}}function Qe(r,W){if(r&1){let l=Ax();Tl(0,`po-number`,55),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.valueGauge,i)||(s.valueGauge=i),Xy(i)}),ht$1(`p-change`,function(i){Ky(l);return Xy(Fx().changeValueGauge(i))}),ag(),a0()}if(r&2)Ew(`ngModel`,Fx().valueGauge),l0()}function Ke(r,W){if(r&1){let l=Ax();Tl(0,`po-radio-group`,56),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.selectedShapeOption,i)||(s.selectedShapeOption=i),Xy(i)}),ag(),a0(),Tl(1,`po-switch`,57),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.selectedSplitArea,i)||(s.selectedSplitArea=i),Xy(i)}),ag(),a0(),Tl(2,`po-switch`,58),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),Xy(i)}),ag(),a0()}if(r&2){let l=Fx();nw(`p-options`,l.optionsShapeOption),Ew(`ngModel`,l.selectedShapeOption),l0(),jp(),Ew(`ngModel`,l.selectedSplitArea),l0(),jp(),Ew(`ngModel`,l.selectedAreaStyle),l0()}}function $e(r,W){if(r&1){let l=Ax();Tl(0,`po-input`,59),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.data,i)||(s.data=i),Xy(i)}),ag(),a0()}if(r&2)Ew(`ngModel`,Fx().data),l0()}function et(r,W){if(r&1){let l=Ax();Tl(0,`po-input`,60),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.stackGroupName,i)||(s.stackGroupName=i),Xy(i)}),ag(),a0()}if(r&2)Ew(`ngModel`,Fx().stackGroupName),l0()}function tt(r,W){if(r&1){let l=Ax();Tl(0,`po-number`,61),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.fromGauge,i)||(s.fromGauge=i),Xy(i)}),ag(),a0()}if(r&2)Ew(`ngModel`,Fx().fromGauge),l0()}function nt(r,W){if(r&1){let l=Ax();Tl(0,`po-number`,62),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.toGauge,i)||(s.toGauge=i),Xy(i)}),ag(),a0()}if(r&2)Ew(`ngModel`,Fx().toGauge),l0()}function it(r,W){if(r&1){let l=Ax();Tl(0,`div`,3)(1,`po-button`,63),ht$1(`p-click`,function(){Ky(l);return Xy(Fx().addData())}),ag()()}}function ot(r,W){if(r&1){let l=Ax();Tl(0,`po-number`,64),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.min,i)||(s.min=i),Xy(i)}),ag(),a0(),Tl(1,`po-number`,65),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.max,i)||(s.max=i),Xy(i)}),ag(),a0(),Tl(2,`po-input`,66),ww(`ngModelChange`,function(i){Ky(l);let s=Fx();return uN(s.colorIndicator,i)||(s.colorIndicator=i),Xy(i)}),ag(),a0(),Tl(3,`div`,3)(4,`po-button`,67),ht$1(`p-click`,function(){Ky(l);return Xy(Fx().addData())}),ag()()}if(r&2){let l=Fx();Ew(`ngModel`,l.min),l0(),jp(),Ew(`ngModel`,l.max),l0(),jp(),Ew(`ngModel`,l.colorIndicator),l0(),jp(2),nw(`p-disabled`,l.isTypeRadar&&!l.categories)}}var ye=(()=>{class r$1{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:fr.Line},{label:`Area`,value:fr.Area},{label:`Bar`,value:fr.Bar},{label:`Column`,value:fr.Column},{label:`Donut`,value:fr.Donut},{label:`Pie`,value:fr.Pie},{label:`Gauge`,value:fr.Gauge},{label:`Radar`,value:fr.Radar}];labelTypeOptions=[{label:`Number`,value:F4.Number},{label:`Currency`,value:F4.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:l})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===fr.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===fr.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=fr.Gauge,this.type=fr.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=fr.Radar,this.type=fr.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=r(r({},this.options),l?r({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===fr.Line||this.type===fr.Area||this.type===fr.Column||this.type===fr.Bar||this.type===fr.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static ɵfac=function(d){return new(d||r$1)};static ɵcmp=Un({type:r$1,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:66,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let s=Ax();Tl(0,`po-chart`,1),ht$1(`p-series-click`,function(a){return i.changeEvent(`p-series-click`,a)})(`p-series-hover`,function(a){return i.changeEvent(`p-series-hover`,a)}),ag(),Gl(1,`po-divider`,2),Tl(2,`div`,3),Gl(3,`po-info`,4),ag(),Gl(4,`po-divider`,5),Tl(5,`form`)(6,`po-select`,6),ww(`ngModelChange`,function(a){return Ky(s),uN(i.type,a)||(i.type=a),Xy(a)}),ht$1(`p-change`,function(a){return i.changeType(a)}),ag(),a0(),Tl(7,`po-number`,7),ww(`ngModelChange`,function(a){return Ky(s),uN(i.height,a)||(i.height=a),Xy(a)}),ag(),a0(),Tl(8,`po-input`,8),ww(`ngModelChange`,function(a){return Ky(s),uN(i.title,a)||(i.title=a),Xy(a)}),ag(),a0(),_x(9,Xe,1,5,`po-checkbox-group`,9),ag(),Gl(10,`po-divider`,10),Tl(11,`form`,null,0)(13,`div`,3)(14,`po-switch`,11),ww(`ngModelChange`,function(a){return Ky(s),uN(i.isTypeGauge,a)||(i.isTypeGauge=a),Xy(a)}),ht$1(`p-change`,function(a){return i.changeSwitchGauge(a)}),ag(),a0(),Tl(15,`po-switch`,12),ww(`ngModelChange`,function(a){return Ky(s),uN(i.isTypeRadar,a)||(i.isTypeRadar=a),Xy(a)}),ht$1(`p-change`,function(a){return i.changeSwitchRadar(a)}),ag(),a0(),_x(16,Qe,1,1,`po-number`,13),_x(17,Ke,3,4),ag(),Tl(18,`div`,3)(19,`po-input`,14),ww(`ngModelChange`,function(a){return Ky(s),uN(i.label,a)||(i.label=a),Xy(a)}),ag(),a0(),_x(20,$e,1,1,`po-input`,15),Tl(21,`po-select`,16),ww(`ngModelChange`,function(a){return Ky(s),uN(i.serieType,a)||(i.serieType=a),Xy(a)}),ht$1(`p-change`,function(a){return i.changeType(a)}),ag(),a0(),Tl(22,`po-input`,17),ww(`ngModelChange`,function(a){return Ky(s),uN(i.tooltip,a)||(i.tooltip=a),Xy(a)}),ag(),a0(),Tl(23,`po-input`,18),ww(`ngModelChange`,function(a){return Ky(s),uN(i.color,a)||(i.color=a),Xy(a)}),ag(),a0(),_x(24,et,1,1,`po-input`,19),_x(25,tt,1,1,`po-number`,20),_x(26,nt,1,1,`po-number`,21),_x(27,it,2,0,`div`,3),ag()(),Tl(28,`div`,3),Gl(29,`po-divider`,22),Tl(30,`po-input`,23),ww(`ngModelChange`,function(a){return Ky(s),uN(i.categories,a)||(i.categories=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addCategories()}),ag(),a0(),_x(31,ot,5,4),ag(),Tl(32,`form`)(33,`div`,3),Gl(34,`po-divider`,24),Tl(35,`po-number`,25),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.minRange,a)||(i.options.axis.minRange=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(36,`po-number`,26),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(37,`po-number`,27),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(38,`po-select`,28),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.labelType,a)||(i.options.axis.labelType=a),Xy(a)}),ht$1(`p-change`,function(){return i.addOptions()}),ag(),a0(),Tl(39,`po-number`,29),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(40,`po-number`,30),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(41,`po-number`,31),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(42,`po-number`,32),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(43,`po-number`,33),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.innerRadius,a)||(i.options.innerRadius=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(44,`po-number`,34),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.borderRadius,a)||(i.options.borderRadius=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(45,`po-input`,35),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.firstColumnName,a)||(i.options.firstColumnName=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(46,`po-input`,36),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(47,`po-input`,37),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.descriptionChart,a)||(i.options.descriptionChart=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),Tl(48,`po-input`,38),ww(`ngModelChange`,function(a){return Ky(s),uN(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),Xy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),ag(),a0(),ag(),Tl(49,`div`,3)(50,`po-checkbox-group`,39),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeHeaderOptions()}),ag(),a0(),Tl(51,`po-checkbox-group`,40),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeAxisOptions()}),ag(),a0(),Tl(52,`po-checkbox-group`,41),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeDataZoomOptions()}),ag(),a0(),Tl(53,`po-checkbox-group`,42),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeFillPointsOptions()}),ag(),a0(),Tl(54,`po-checkbox-group`,43),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeLegendOptions()}),ag(),a0(),Tl(55,`po-checkbox-group`,44),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedRoseType,a)||(i.selectedRoseType=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeRoseTypeOptions()}),ag(),a0(),Tl(56,`po-checkbox-group`,45),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeShowFromToLegend()}),ag(),a0(),Tl(57,`po-checkbox-group`,46),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedPointer,a)||(i.selectedPointer=a),Xy(a)}),ht$1(`p-change`,function(){return i.changePointer()}),ag(),a0(),Tl(58,`po-checkbox-group`,47),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedStacked,a)||(i.selectedStacked=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeStacked()}),ag(),a0(),Tl(59,`po-radio-group`,48),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeLegendVerticalPosition()}),ag(),a0(),Tl(60,`po-radio-group`,49),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeLegendPosition()}),ag(),a0(),Tl(61,`po-radio-group`,50),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedLegendType,a)||(i.selectedLegendType=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeLegendType()}),ag(),a0(),Tl(62,`po-radio-group`,51),ww(`ngModelChange`,function(a){return Ky(s),uN(i.selectedRendererOption,a)||(i.selectedRendererOption=a),Xy(a)}),ht$1(`p-change`,function(){return i.changeRendererOption()}),ag(),a0(),ag(),Gl(63,`po-divider`,52),Tl(64,`div`,3)(65,`po-button`,53),ht$1(`p-click`,function(){return i.restore()}),ag()()()}d&2&&(nw(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),jp(3),nw(`p-value`,i.event),jp(3),Ew(`ngModel`,i.type),nw(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),l0(),jp(),Ew(`ngModel`,i.height),l0(),jp(),Ew(`ngModel`,i.title),l0(),jp(),Dx(i.isTypeGrid()?9:-1),jp(5),Ew(`ngModel`,i.isTypeGauge),l0(),jp(),Ew(`ngModel`,i.isTypeRadar),l0(),jp(),Dx(i.isTypeGauge?16:-1),jp(),Dx(i.isTypeRadar?17:-1),jp(2),Ew(`ngModel`,i.label),l0(),jp(),Dx(i.isTypeGauge?-1:20),jp(),Ew(`ngModel`,i.serieType),nw(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),l0(),jp(),nw(`p-disabled`,i.disabledTooltip),Ew(`ngModel`,i.tooltip),l0(),jp(),Ew(`ngModel`,i.color),l0(),jp(),Dx(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?24:-1),jp(),Dx(i.isTypeGauge?25:-1),jp(),Dx(i.isTypeGauge?26:-1),jp(),Dx(i.isTypeRadar?-1:27),jp(3),Xx(i.isTypeRadar?`po-md-3`:`po-md-4`),nw(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),Ew(`ngModel`,i.categories),l0(),jp(),Dx(i.isTypeRadar?31:-1),jp(4),Ew(`ngModel`,i.options.axis.minRange),l0(),jp(),Ew(`ngModel`,i.options.axis.maxRange),l0(),jp(),Ew(`ngModel`,i.options.axis.gridLines),l0(),jp(),nw(`p-options`,i.labelTypeOptions),Ew(`ngModel`,i.options.axis.labelType),l0(),jp(),Ew(`ngModel`,i.options.axis.paddingBottom),l0(),jp(),Ew(`ngModel`,i.options.axis.paddingLeft),l0(),jp(),Ew(`ngModel`,i.options.axis.paddingRight),l0(),jp(),Ew(`ngModel`,i.options.axis.rotateLegend),l0(),jp(),Ew(`ngModel`,i.options.innerRadius),l0(),jp(),Ew(`ngModel`,i.options.borderRadius),l0(),jp(),Ew(`ngModel`,i.options.firstColumnName),l0(),jp(),Ew(`ngModel`,i.options.textCenterGraph),l0(),jp(),Ew(`ngModel`,i.options.descriptionChart),l0(),jp(),Ew(`ngModel`,i.options.subtitleGauge),l0(),jp(2),nw(`p-columns`,2)(`p-options`,i.optionsHeader),Ew(`ngModel`,i.selectedValuesHeader),l0(),jp(),nw(`p-columns`,2)(`p-options`,i.optionsAxis),Ew(`ngModel`,i.selectedValuesAxis),l0(),jp(),nw(`p-columns`,2)(`p-options`,i.optionsDataZoom),Ew(`ngModel`,i.selectedValuesDataZoom),l0(),jp(),nw(`p-columns`,1)(`p-options`,DN(83,q,_N(82,ze))),Ew(`ngModel`,i.selectedValuesFillPoints),l0(),jp(),nw(`p-options`,DN(86,q,_N(85,He))),Ew(`ngModel`,i.selectedValuesLegend),l0(),jp(),nw(`p-options`,DN(89,q,_N(88,Ze))),Ew(`ngModel`,i.selectedRoseType),l0(),jp(),nw(`p-options`,DN(92,q,_N(91,Ye))),Ew(`ngModel`,i.selectedFromToLegend),l0(),jp(),nw(`p-options`,DN(95,q,_N(94,je))),Ew(`ngModel`,i.selectedPointer),l0(),jp(),nw(`p-options`,DN(98,q,_N(97,Ue))),Ew(`ngModel`,i.selectedStacked),l0(),jp(),nw(`p-options`,i.optionsLegendVerticalPosition),Ew(`ngModel`,i.selectedLegendVerticalPosition),l0(),jp(),nw(`p-options`,i.optionsLegendPosition),Ew(`ngModel`,i.selectedLegendPosition),l0(),jp(),nw(`p-options`,i.optionsLegendType),Ew(`ngModel`,i.selectedLegendType),l0(),jp(),nw(`p-options`,i.optionsRendererOption),Ew(`ngModel`,i.selectedRendererOption),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,f8e,Xy$1,N4,iU,ube,L0e,fbe,j4,ybe],encapsulation:2,changeDetection:1})}return r$1})();var rt=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Chart Labs`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-chart
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-chart-labs`),ag(),Gl(23,`hr`)),d&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,rt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=f(W0e);participationByCountryInWorldExportsType=fr.Line;evolutionOfCoffeeAndSomeCompetitorsType=fr.Column;coffeConsumingChartType=fr.Donut;consumptionPerCapitaType=fr.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:fr.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:fr.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:fr.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:fr.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:fr.Column},{label:`2017`,data:[93,52,18],type:fr.Column},{label:`2020`,data:[95,21,-17],type:fr.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:fr.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:F4.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:F4.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,`_blank`)}showMeTheDates(l){this.poAlert.alert({title:`Statistic`,message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[Ce$1([W0e])],decls:28,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,1,`po-md-12`,`po-mt-2`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[`p-title`,`Top 5 coffee producing countries (in tons)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,1,`po-md-6`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[1,`po-md-6`,`po-mt-2`],[`p-height`,`198`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(Tl(0,`div`,0)(1,`div`,1)(2,`div`,0),Gl(3,`po-chart`,2)(4,`po-chart`,3),ag()(),Tl(5,`div`,1),Gl(6,`po-chart`,4),ag(),Tl(7,`div`,5)(8,`po-chart`,6),ht$1(`p-series-click`,function(m){return i.searchMore(m)}),ag(),Tl(9,`po-chart`,7),ht$1(`p-series-click`,function(m){return i.showMeTheDates(m)}),ag()(),Tl(10,`div`,0),Gl(11,`po-chart`,8),Tl(12,`div`,9)(13,`po-widget`,10)(14,`div`,11),cN(15,`66 billion`),ag(),Tl(16,`div`,12),cN(17,`cups of coffee are consumed per year in U.S.`),ag()(),Tl(18,`po-widget`,10)(19,`div`,11),cN(20,`2nd most`),ag(),Tl(21,`div`,12),cN(22,`traded commodity in the world second to Oil.`),ag()()()()(),Tl(23,`div`,0)(24,`po-container`,13)(25,`div`,14),cN(26,`Top 10 Largest Coffee Chains in the World`),ag(),Gl(27,`po-table`,15),ag()()),d&2&&(jp(3),nw(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),jp(),nw(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),jp(2),nw(`p-height`,816)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),jp(2),nw(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),jp(),nw(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),jp(2),nw(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),jp(16),nw(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[f8e,xp,X4,O8e],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r});var Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Chart - Coffee Ranking`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-chart-coffee-ranking`),ag(),Gl(23,`hr`)),d&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,pt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,_e],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{typeBar=fr.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:6,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[`p-title`,`Average Temperature by Region`,1,`po-lg-6`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,1,`po-lg-6`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(Tl(0,`po-container`)(1,`div`,0),cN(2,`Energy and Climate Analysis`),ag(),Tl(3,`div`,1),Gl(4,`po-chart`,2)(5,`po-chart`,3),ag()()),d&2&&(jp(4),nw(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),jp(),nw(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[f8e,xp],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Chart - Stacked`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-chart-stacked`),ag(),Gl(23,`hr`)),d&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ct,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Te],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=fr.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:8,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(Tl(0,`po-container`)(1,`div`,0),cN(2,`Sales Performance`),ag(),Tl(3,`div`,1)(4,`div`,2),Gl(5,`po-chart`,3),ag(),Tl(6,`div`,2),Gl(7,`po-chart`,4),ag()()()),d&2&&(jp(5),nw(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),jp(2),nw(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[f8e,xp],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r});var Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Chart - Summary`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-chart-summary`),ag(),Gl(23,`hr`)),d&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ht,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Le],encapsulation:2,changeDetection:1})}return r})();var De=(()=>{class r{participationByCountryInWorldExportsType=fr.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:2,vars:5,consts:[[1,`po-row`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(Tl(0,`div`,0),Gl(1,`po-chart`,1),ag()),d&2&&(jp(),nw(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[f8e],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r});var ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Chart - World Exports`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-chart-world-exports`),ag(),Gl(23,`hr`)),d&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,bt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,De],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=fr.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:3,vars:6,consts:[[1,`po-row`],[`p-title`,`Technology Skill Assessment`,1,`po-md-6`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,1,`po-md-6`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(Tl(0,`div`,0),Gl(1,`po-chart`,1)(2,`po-chart`,2),ag()),d&2&&(jp(),nw(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),jp(),nw(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[f8e],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Chart - Radar`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-chart-technology-skill`),ag(),Gl(23,`hr`)),d&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ft,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2833,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`]],template:function(d,i){d&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoChartModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-chart`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoChartComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`O `),Tl(18,`code`),cN(19,`po-chart`),ag(),cN(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),ag(),Tl(21,`p`),cN(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),ag(),Tl(23,`p`),cN(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),ag(),Tl(25,`p`),cN(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Tl(27,`em`),cN(28,`mouse`),ag(),cN(29,` sobre o elemento.`),ag(),Tl(30,`h4`),cN(31,`Guia de uso para Gráficos`),ag(),Tl(32,`blockquote`)(33,`p`),cN(34,`Veja nosso `),Tl(35,`a`,6),cN(36,`guia de uso para gráficos`),ag(),cN(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),ag()(),Tl(38,`h4`),cN(39,`Tokens customizáveis`),ag(),Tl(40,`p`),cN(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(42,`blockquote`)(43,`p`),cN(44,`Para maiores informações, acesse o guia `),Tl(45,`a`,7),cN(46,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(47,`.`),ag()(),Tl(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),cN(52,`Propriedade`),ag(),Tl(53,`th`),cN(54,`Descrição`),ag(),Tl(55,`th`),cN(56,`Valor Padrão`),ag()()(),Tl(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),cN(61,`Chart (po-chart)`),ag()(),Gl(62,`td`)(63,`td`),ag(),Tl(64,`tr`)(65,`td`)(66,`code`),cN(67,`--background-color-grid`),ag()(),Tl(68,`td`),cN(69,`Cor de background dos gráficos`),ag(),Tl(70,`td`)(71,`code`),cN(72,`var(--color-neutral-light-00)`),ag()()(),Tl(73,`tr`)(74,`td`)(75,`code`),cN(76,`--color-description-chart`),ag()(),Tl(77,`td`),cN(78,`Cor da descrição dos gráficos`),ag(),Tl(79,`td`)(80,`code`),cN(81,`var(--color-neutral-dark-70)`),ag()()(),Tl(82,`tr`)(83,`td`)(84,`code`),cN(85,`--font-family-description-chart`),ag()(),Tl(86,`td`),cN(87,`Fonte da descrição dos gráficos`),ag(),Tl(88,`td`)(89,`code`),cN(90,`var(--font-family-theme)`),ag()()(),Tl(91,`tr`)(92,`td`)(93,`code`),cN(94,`--font-size-description-chart`),ag()(),Tl(95,`td`),cN(96,`Tamanho da fonte da descrição dos gráficos`),ag(),Tl(97,`td`)(98,`code`),cN(99,`var(--font-size-sm)`),ag()()(),Tl(100,`tr`)(101,`td`)(102,`code`),cN(103,`--font-weight-description-chart`),ag()(),Tl(104,`td`),cN(105,`Peso da fonte da descrição dos gráficos`),ag(),Tl(106,`td`)(107,`code`),cN(108,`var(--font-weight-normal)`),ag()()(),Tl(109,`tr`)(110,`td`)(111,`strong`),cN(112,`Header (po-chart .po-chart-header )`),ag()(),Gl(113,`td`)(114,`td`),ag(),Tl(115,`tr`)(116,`td`)(117,`code`),cN(118,`--background-color`),ag()(),Tl(119,`td`),cN(120,`Cor de background do cabeçalho`),ag(),Tl(121,`td`)(122,`code`),cN(123,`var(--color-neutral-light-00)`),ag()()(),Tl(124,`tr`)(125,`td`)(126,`code`),cN(127,`--color`),ag()(),Tl(128,`td`),cN(129,`Cor da fonte do cabeçalho`),ag(),Tl(130,`td`)(131,`code`),cN(132,`var(--color-neutral-dark-70)`),ag()()(),Tl(133,`tr`)(134,`td`)(135,`code`),cN(136,`--font-family`),ag()(),Tl(137,`td`),cN(138,`Família tipográfica usada`),ag(),Tl(139,`td`)(140,`code`),cN(141,`var(--font-family-theme)`),ag()()(),Tl(142,`tr`)(143,`td`)(144,`code`),cN(145,`--font-size-title`),ag()(),Tl(146,`td`),cN(147,`Tamanho da fonte`),ag(),Tl(148,`td`)(149,`code`),cN(150,`var(--font-size-default)`),ag()()(),Tl(151,`tr`)(152,`td`)(153,`code`),cN(154,`--font-size-icons`),ag()(),Tl(155,`td`),cN(156,`Tamanho dos ícones`),ag(),Tl(157,`td`)(158,`code`),cN(159,`var(--font-size-md)`),ag()()(),Tl(160,`tr`)(161,`td`)(162,`code`),cN(163,`--font-weight`),ag()(),Tl(164,`td`),cN(165,`Peso da fonte`),ag(),Tl(166,`td`)(167,`code`),cN(168,`var(--font-weight-bold)`),ag()()(),Tl(169,`tr`)(170,`td`)(171,`strong`),cN(172,`Chart (po-chart .po-chart)`),ag()(),Gl(173,`td`)(174,`td`),ag(),Tl(175,`tr`)(176,`td`)(177,`code`),cN(178,`--color-grid`),ag()(),Tl(179,`td`),cN(180,`Cor da linha dos gráficos que possuem eixo`),ag(),Tl(181,`td`)(182,`code`),cN(183,`var(--color-neutral-light-20)`),ag()()(),Tl(184,`tr`)(185,`td`)(186,`code`),cN(187,`--font-family-grid`),ag()(),Tl(188,`td`),cN(189,`Família tipográfica usada nos valores dos eixos`),ag(),Tl(190,`td`)(191,`code`),cN(192,`var(--font-family-theme)`),ag()()(),Tl(193,`tr`)(194,`td`)(195,`code`),cN(196,`--font-size-grid`),ag()(),Tl(197,`td`),cN(198,`Tamanho da fonte usada nos valores dos eixos`),ag(),Tl(199,`td`)(200,`code`),cN(201,`var(--font-size-xs)`),ag()()(),Tl(202,`tr`)(203,`td`)(204,`code`),cN(205,`--font-weight-grid`),ag()(),Tl(206,`td`),cN(207,`Peso da fonte usada nos valores dos eixos`),ag(),Tl(208,`td`)(209,`code`),cN(210,`var(--font-weight-normal)`),ag()()(),Tl(211,`tr`)(212,`td`)(213,`code`),cN(214,`--color-legend`),ag()(),Tl(215,`td`),cN(216,`Cor da fonte da legenda`),ag(),Tl(217,`td`)(218,`code`),cN(219,`var(--color-neutral-dark-70)`),ag()()(),Tl(220,`tr`)(221,`td`)(222,`code`),cN(223,`--color-legend-scroll-icon-active`),ag()(),Tl(224,`td`),cN(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),Tl(226,`code`),cN(227,`scroll`),ag()(),Tl(228,`td`)(229,`code`),cN(230,`var(--color-action-default)`),ag()()(),Tl(231,`tr`)(232,`td`)(233,`code`),cN(234,`--color-legend-scroll-icon-inactive`),ag()(),Tl(235,`td`),cN(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),Tl(237,`code`),cN(238,`scroll`),ag()(),Tl(239,`td`)(240,`code`),cN(241,`var(--color-action-disabled)`),ag()()(),Tl(242,`tr`)(243,`td`)(244,`code`),cN(245,`--border-radius-bar`),ag()(),Tl(246,`td`),cN(247,`Tamanho da borda nos graficos `),Tl(248,`code`),cN(249,`Bar`),ag(),cN(250,` e `),Tl(251,`code`),cN(252,`Column`),ag()(),Tl(253,`td`)(254,`code`),cN(255,`var(--border-radius-none)`),ag()()(),Tl(256,`tr`)(257,`td`)(258,`code`),cN(259,`--border-color`),ag()(),Tl(260,`td`),cN(261,`Cor da borda do gráfico nos Gráficos `),Tl(262,`code`),cN(263,`Donut`),ag(),cN(264,` e `),Tl(265,`code`),cN(266,`Pie`),ag()(),Tl(267,`td`)(268,`code`),cN(269,`var(--color-neutral-light-00)`),ag()()(),Tl(270,`tr`)(271,`td`)(272,`code`),cN(273,`--color-hightlight-value`),ag()(),Tl(274,`td`),cN(275,`Cor do valor de destaque nos Gráficos `),Tl(276,`code`),cN(277,`Donut`),ag(),cN(278,` e `),Tl(279,`code`),cN(280,`Gauge`),ag()(),Tl(281,`td`)(282,`code`),cN(283,`var(--color-neutral-dark-70)`),ag()()(),Tl(284,`tr`)(285,`td`)(286,`code`),cN(287,`--font-family-hightlight-value`),ag()(),Tl(288,`td`),cN(289,`Família tipográfica do valor de destaque nos Gráficos `),Tl(290,`code`),cN(291,`Donut`),ag(),cN(292,` e `),Tl(293,`code`),cN(294,`Gauge`),ag()(),Tl(295,`td`)(296,`code`),cN(297,`var(--font-family-theme)`),ag()()(),Tl(298,`tr`)(299,`td`)(300,`code`),cN(301,`--font-weight-hightlight-value`),ag()(),Tl(302,`td`),cN(303,`Peso da fonte do valor de destaque nos Gráficos `),Tl(304,`code`),cN(305,`Donut`),ag(),cN(306,` e `),Tl(307,`code`),cN(308,`Gauge`),ag()(),Tl(309,`td`)(310,`code`),cN(311,`var(--font-weight-bold)`),ag()()(),Tl(312,`tr`)(313,`td`)(314,`code`),cN(315,`--color-base-gauge`),ag()(),Tl(316,`td`),cN(317,`Cor da base do gráfico `),Tl(318,`code`),cN(319,`Gauge`),ag()(),Tl(320,`td`)(321,`code`),cN(322,`var(--color-neutral-light-20)`),ag()()(),Tl(323,`tr`)(324,`td`)(325,`code`),cN(326,`--color-gauge-pointer-color`),ag()(),Tl(327,`td`),cN(328,`Cor do ponteiro do gráfico `),Tl(329,`code`),cN(330,`Gauge`),ag()(),Tl(331,`td`)(332,`code`),cN(333,`var(--color-neutral-dark-70)`),ag()()(),Tl(334,`tr`)(335,`td`)(336,`code`),cN(337,`--color-chart-line-point-fill`),ag()(),Tl(338,`td`),cN(339,`Cor de dentro do círculo dos gráficos `),Tl(340,`code`),cN(341,`Line`),ag(),cN(342,` e `),Tl(343,`code`),cN(344,`Area`),ag()(),Tl(345,`td`)(346,`code`),cN(347,`var(--color-neutral-light-00)`),ag()()(),Tl(348,`tr`)(349,`td`)(350,`code`),cN(351,`--border-color-radar`),ag()(),Tl(352,`td`),cN(353,`Cor do eixo da grid do gráfico `),Tl(354,`code`),cN(355,`Radar`),ag()(),Tl(356,`td`)(357,`code`),cN(358,`var(--color-neutral-light-30)`),ag()()(),Tl(359,`tr`)(360,`td`)(361,`code`),cN(362,`--color-background-zebra`),ag()(),Tl(363,`td`),cN(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),Tl(365,`code`),cN(366,`Radar`),ag()(),Tl(367,`td`)(368,`code`),cN(369,`var(--color-neutral-light-10)`),ag()()(),Tl(370,`tr`)(371,`td`)(372,`code`),cN(373,`--color-background-line`),ag()(),Tl(374,`td`),cN(375,`Cor das áreas entre as faixas zebradas da grade do `),Tl(376,`code`),cN(377,`Radar`),ag()(),Tl(378,`td`)(379,`code`),cN(380,`none`),ag()()(),Tl(381,`tr`)(382,`td`)(383,`strong`),cN(384,`Wrapper (.po-chart-container-gauge)`),ag()(),Gl(385,`td`)(386,`td`),ag(),Tl(387,`tr`)(388,`td`)(389,`code`),cN(390,`--background-color-container-gauge`),ag()(),Tl(391,`td`),cN(392,`Cor de background do container do gauge`),ag(),Tl(393,`td`)(394,`code`),cN(395,`var(--color-neutral-light-00)`),ag()()()()()(),Tl(396,`div`,8)(397,`h4`,9),cN(398,`Seletor`),ag(),Tl(399,`pre`,10),cN(400,`<po-chart
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
`),ag()(),Tl(401,`h4`,11),cN(402,`Propriedades`),ag(),Tl(403,`table`,12)(404,`tr`,13)(405,`th`,14),cN(406,`Nome`),ag(),Tl(407,`th`,14),cN(408,`Tipo`),ag(),Tl(409,`th`,14),cN(410,`Padrão`),ag(),Tl(411,`th`,14),cN(412,`Descrição`),ag()(),Tl(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),cN(417,` p-categories`),Gl(418,`br`),ag()()(),Tl(419,`td`,19)(420,`code`,20),cN(421,`Array<string> `),ag(),Tl(422,`code`,21),cN(423,` PoChartRadarOptions`),ag()(),Tl(424,`td`,22),cN(425,`-`),ag(),Tl(426,`td`,23)(427,`em`)(428,`strong`),cN(429,`(opcional)`),ag()(),Tl(430,`p`),cN(431,`Define os valores utilizados na construção das categorias do gráfico.`),ag(),Tl(432,`p`),cN(433,`Para gráficos dos tipos `),Tl(434,`em`),cN(435,`bar`),ag(),cN(436,`, `),Tl(437,`em`),cN(438,`area`),ag(),cN(439,`, `),Tl(440,`em`),cN(441,`column`),ag(),cN(442,` e `),Tl(443,`em`),cN(444,`line`),ag(),cN(445,`, representa os nomes das categorias exibidas no eixo.`),ag(),Tl(446,`p`),cN(447,`Para gráficos do tipo `),Tl(448,`em`),cN(449,`radar`),ag(),cN(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Tl(451,`code`),cN(452,`Radar`),ag(),cN(453,`.`),ag(),Tl(454,`blockquote`)(455,`p`),cN(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),ag()(),Tl(457,`blockquote`)(458,`p`),cN(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),ag()()()(),Tl(460,`tr`,15)(461,`td`,16)(462,`div`,17)(463,`span`,18),cN(464,` p-custom-actions`),Gl(465,`br`),ag()()(),Tl(466,`td`,19)(467,`code`,24),cN(468,`Array<PoPopupAction>`),ag()(),Tl(469,`td`,22),cN(470,`-`),ag(),Tl(471,`td`,23)(472,`em`)(473,`strong`),cN(474,`(opcional)`),ag()(),Tl(475,`p`),cN(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),ag()()(),Tl(477,`tr`,15)(478,`td`,16)(479,`div`,17)(480,`span`,18),cN(481,` p-data-label`),Gl(482,`br`),ag()()(),Tl(483,`td`,19)(484,`code`,25),cN(485,`PoChartDataLabel`),ag()(),Tl(486,`td`,22),cN(487,`-`),ag(),Tl(488,`td`,23)(489,`em`)(490,`strong`),cN(491,`(opcional)`),ag()(),Tl(492,`p`),cN(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),ag(),Tl(494,`p`),cN(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),ag(),Tl(496,`ul`)(497,`li`),cN(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),ag(),Tl(499,`li`),cN(500,`O `),Tl(501,`em`),cN(502,`tooltip`),ag(),cN(503,` não será exibido.`),ag(),Tl(504,`li`),cN(505,`Os marcadores (`),Tl(506,`em`),cN(507,`bullets`),ag(),cN(508,`) terão seu estilo ajustado.`),ag(),Tl(509,`li`),cN(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),ag()(),Tl(511,`blockquote`)(512,`p`),cN(513,`Disponível para gráficos do tipo `),Tl(514,`code`),cN(515,`line`),ag(),cN(516,` e `),Tl(517,`code`),cN(518,`radar`),ag(),cN(519,`.`),ag()(),Tl(520,`h4`),cN(521,`Exemplo de utilização:`),ag(),Tl(522,`pre`)(523,`code`,26),cN(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),ag()()()(),Tl(525,`tr`,15)(526,`td`,16)(527,`div`,17)(528,`span`,18),cN(529,` p-height`),Gl(530,`br`),ag()()(),Tl(531,`td`,19)(532,`code`,27),cN(533,`number`),ag()(),Tl(534,`td`,22)(535,`p`)(536,`code`),cN(537,`400`),ag()()(),Tl(538,`td`,23)(539,`em`)(540,`strong`),cN(541,`(opcional)`),ag()(),Tl(542,`p`),cN(543,`Define a altura do gráfico em px.`),ag(),Tl(544,`blockquote`)(545,`p`),cN(546,`No caso do tipo `),Tl(547,`code`),cN(548,`Gauge`),ag(),cN(549,`, o valor padrão é `),Tl(550,`code`),cN(551,`300`),ag(),cN(552,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),ag()()()(),Tl(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),cN(557,` p-literals`),Gl(558,`br`),ag()()(),Tl(559,`td`,19)(560,`code`,28),cN(561,`PoChartLiterals`),ag()(),Tl(562,`td`,22),cN(563,`-`),ag(),Tl(564,`td`,23)(565,`em`)(566,`strong`),cN(567,`(opcional)`),ag()(),Tl(568,`p`),cN(569,`Objeto com as literais usadas no `),Tl(570,`code`),cN(571,`po-chart`),ag(),cN(572,`.`),ag(),Tl(573,`p`),cN(574,`Para utilizar basta passar a literal que deseja customizar:`),ag(),Tl(575,`pre`)(576,`code`),cN(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),ag()(),Tl(578,`p`),cN(579,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),ag(),Tl(580,`pre`)(581,`code`),cN(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),ag()(),Tl(583,`blockquote`)(584,`p`),cN(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(586,`a`,29)(587,`code`),cN(588,`PoI18nService`),ag()(),cN(589,` ou do browser.`),ag()()()(),Tl(590,`tr`,15)(591,`td`,16)(592,`div`,17)(593,`span`,18),cN(594,` p-options`),Gl(595,`br`),ag()()(),Tl(596,`td`,19)(597,`code`,30),cN(598,`PoChartOptions`),ag()(),Tl(599,`td`,22),cN(600,`-`),ag(),Tl(601,`td`,23)(602,`em`)(603,`strong`),cN(604,`(opcional)`),ag()(),Tl(605,`p`),cN(606,`Objeto com as configurações usadas no `),Tl(607,`code`),cN(608,`po-chart`),ag(),cN(609,`.`),ag(),Tl(610,`p`),cN(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Tl(612,`em`),cN(613,`axis`),ag(),cN(614,`) para os gráficos dos tipos `),Tl(615,`code`),cN(616,`area`),ag(),cN(617,`, `),Tl(618,`code`),cN(619,`line`),ag(),cN(620,`, `),Tl(621,`code`),cN(622,`column`),ag(),cN(623,`, `),Tl(624,`code`),cN(625,`bar`),ag(),cN(626,` e `),Tl(627,`code`),cN(628,`radar`),ag(),cN(629,` da seguinte forma:`),ag(),Tl(630,`pre`)(631,`code`),cN(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),ag()()()(),Tl(633,`tr`,15)(634,`td`,16)(635,`div`,17)(636,`span`,18),cN(637,` p-series`),Gl(638,`br`),ag()()(),Tl(639,`td`,19)(640,`code`,31),cN(641,`Array<PoChartSerie>`),ag()(),Tl(642,`td`,22),cN(643,`-`),ag(),Tl(644,`td`,23)(645,`p`),cN(646,`Define os elementos do gráfico que serão criados dinamicamente.`),ag()()(),Tl(647,`tr`,15)(648,`td`,16)(649,`div`,32)(650,`span`,33),cN(651,` (p-series-click)`),Gl(652,`br`),ag()()(),Tl(653,`td`,19)(654,`code`,34),cN(655,`EventEmitter`),ag()(),Tl(656,`td`,22),cN(657,`-`),ag(),Tl(658,`td`,23)(659,`em`)(660,`strong`),cN(661,`(opcional)`),ag()(),Tl(662,`p`),cN(663,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),ag(),Tl(664,`p`),cN(665,`O evento emitirá o seguinte parâmetro:`),ag(),Tl(666,`ul`)(667,`li`)(668,`em`),cN(669,`donut`),ag(),cN(670,` e `),Tl(671,`em`),cN(672,`pie`),ag(),cN(673,`: um objeto contendo a categoria e valor da série.`),ag(),Tl(674,`li`)(675,`em`),cN(676,`radar`),ag(),cN(677,`: um objeto contendo o nome da série e os valores.`),ag(),Tl(678,`li`)(679,`em`),cN(680,`area`),ag(),cN(681,`, `),Tl(682,`em`),cN(683,`line`),ag(),cN(684,`, `),Tl(685,`em`),cN(686,`column`),ag(),cN(687,` e `),Tl(688,`em`),cN(689,`bar`),ag(),cN(690,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),ag()()()(),Tl(691,`tr`,15)(692,`td`,16)(693,`div`,32)(694,`span`,33),cN(695,` (p-series-hover)`),Gl(696,`br`),ag()()(),Tl(697,`td`,19)(698,`code`,34),cN(699,`EventEmitter`),ag()(),Tl(700,`td`,22),cN(701,`-`),ag(),Tl(702,`td`,23)(703,`em`)(704,`strong`),cN(705,`(opcional)`),ag()(),Tl(706,`p`),cN(707,`Evento executado quando o usuário passar o `),Tl(708,`em`),cN(709,`mouse`),ag(),cN(710,` sobre um elemento do gráfico.`),ag(),Tl(711,`p`),cN(712,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),ag(),Tl(713,`ul`)(714,`li`)(715,`em`),cN(716,`donut`),ag(),cN(717,` e `),Tl(718,`em`),cN(719,`pie`),ag(),cN(720,`: um objeto contendo a categoria e valor da série.`),ag(),Tl(721,`li`)(722,`em`),cN(723,`radar`),ag(),cN(724,`: um objeto contendo o nome da série e os valores.`),ag(),Tl(725,`li`)(726,`em`),cN(727,`area`),ag(),cN(728,`, `),Tl(729,`em`),cN(730,`line`),ag(),cN(731,`, `),Tl(732,`em`),cN(733,`column`),ag(),cN(734,` e `),Tl(735,`em`),cN(736,`bar`),ag(),cN(737,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),ag()()()(),Tl(738,`tr`,15)(739,`td`,16)(740,`div`,17)(741,`span`,18),cN(742,` p-title`),Gl(743,`br`),ag()()(),Tl(744,`td`,19)(745,`code`,35),cN(746,`string`),ag()(),Tl(747,`td`,22),cN(748,`-`),ag(),Tl(749,`td`,23)(750,`em`)(751,`strong`),cN(752,`(opcional)`),ag()(),Tl(753,`p`),cN(754,`Define o título do gráfico.`),ag()()(),Tl(755,`tr`,15)(756,`td`,16)(757,`div`,17)(758,`span`,18),cN(759,` p-type`),Gl(760,`br`),ag()()(),Tl(761,`td`,19)(762,`code`,36),cN(763,`PoChartType`),ag()(),Tl(764,`td`,22),cN(765,`-`),ag(),Tl(766,`td`,23)(767,`em`)(768,`strong`),cN(769,`(opcional)`),ag()(),Tl(770,`p`),cN(771,`Define o tipo de gráfico.`),ag(),Tl(772,`p`),cN(773,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),Tl(774,`code`),cN(775,`type`),ag(),cN(776,` conforme a interface `),Tl(777,`code`),cN(778,`PoChartSerie`),ag(),cN(779,`.`),ag(),Tl(780,`blockquote`)(781,`p`),cN(782,`Note que, se houver declaração de tipo de gráfico tanto em `),Tl(783,`code`),cN(784,`p-type`),ag(),cN(785,` quanto em `),Tl(786,`code`),cN(787,`PochartSerie.type`),ag(),cN(788,`, o valor `),Tl(789,`code`),cN(790,`{ type }`),ag(),cN(791,` da primeira série anulará o valor definido em `),Tl(792,`code`),cN(793,`p-type`),ag(),cN(794,`.`),ag()(),Tl(795,`p`),cN(796,`Se não passado valor, o padrão será relativo à primeira série passada em `),Tl(797,`code`),cN(798,`p-series`),ag(),cN(799,`:`),ag(),Tl(800,`ul`)(801,`li`),cN(802,`Se `),Tl(803,`code`),cN(804,`p-series = [{ data: [1,2,3] }]`),ag(),cN(805,`: será `),Tl(806,`code`),cN(807,`PoChartType.Column`),ag(),cN(808,`.`),ag(),Tl(809,`li`),cN(810,`Se `),Tl(811,`code`),cN(812,`p-series = [{ data: 1 }]`),ag(),cN(813,`: será `),Tl(814,`code`),cN(815,`PoChartType.Pie`),ag(),cN(816,`.`),ag()(),Tl(817,`blockquote`)(818,`p`),cN(819,`Veja os valores válidos no `),Tl(820,`em`),cN(821,`enum`),ag(),Tl(822,`code`),cN(823,`PoChartType`),ag(),cN(824,`.`),ag()()()(),Tl(825,`tr`,15)(826,`td`,16)(827,`div`,17)(828,`span`,18),cN(829,` p-value-gauge-multiple`),Gl(830,`br`),ag()()(),Tl(831,`td`,19)(832,`code`,27),cN(833,`number`),ag()(),Tl(834,`td`,22),cN(835,`-`),ag(),Tl(836,`td`,23)(837,`em`)(838,`strong`),cN(839,`(opcional)`),ag()(),Tl(840,`p`),cN(841,`Define o valor do gráfico do tipo `),Tl(842,`code`),cN(843,`Gauge`),ag(),cN(844,` quando utliza as propriedades `),Tl(845,`code`),cN(846,`From`),ag(),Tl(847,`code`),cN(848,`To`),ag(),cN(849,`.`),ag()()()(),Tl(850,`h3`),cN(851,`Interfaces`),ag(),Tl(852,`h4`,37)(853,`code`,5),cN(854,`PoChartAxisOptions`),ag()(),Tl(855,`div`,2)(856,`p`)(857,`em`),cN(858,`Interface`),ag(),cN(859,` que define os eixos do grid.`),ag()(),Tl(860,`h4`,11),cN(861,`Propriedades`),ag(),Tl(862,`table`,12)(863,`tr`,13)(864,`th`,14),cN(865,`Nome`),ag(),Tl(866,`th`,14),cN(867,`Tipo`),ag(),Tl(868,`th`,14),cN(869,`Descrição`),ag()(),Tl(870,`tr`,15)(871,`td`,16)(872,`div`,17)(873,`span`,18),cN(874,` gridLines`),Gl(875,`br`),ag()()(),Tl(876,`td`,19)(877,`code`,27),cN(878,`number`),ag()(),Tl(879,`td`,23)(880,`em`)(881,`strong`),cN(882,`(opcional)`),ag()(),Tl(883,`p`),cN(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Tl(885,`code`),cN(886,`Area`),ag(),cN(887,`, `),Tl(888,`code`),cN(889,`Line`),ag(),cN(890,` e `),Tl(891,`code`),cN(892,`Column`),ag(),cN(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Tl(894,`code`),cN(895,`Bar`),ag(),cN(896,`, tratará as linhas verticais (eixo Y).`),ag(),Tl(897,`p`),cN(898,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),ag(),Tl(899,`ul`)(900,`li`),cN(901,`Quantidade padrão de linhas: '5';`),ag(),Tl(902,`li`),cN(903,`Quantidade mínima permitida: '2';`),ag()()()(),Tl(904,`tr`,15)(905,`td`,16)(906,`div`,17)(907,`span`,18),cN(908,` labelType`),Gl(909,`br`),ag()()(),Tl(910,`td`,19)(911,`code`,38),cN(912,`PoChartLabelFormat`),ag()(),Tl(913,`td`,23)(914,`em`)(915,`strong`),cN(916,`(opcional)`),ag()(),Tl(917,`p`),cN(918,`Define o tipo do label e a formatação exibida no eixo de valor.`),ag()()(),Tl(919,`tr`,15)(920,`td`,16)(921,`div`,17)(922,`span`,18),cN(923,` maxRange`),Gl(924,`br`),ag()()(),Tl(925,`td`,19)(926,`code`,27),cN(927,`number`),ag()(),Tl(928,`td`,23)(929,`em`)(930,`strong`),cN(931,`(opcional)`),ag()(),Tl(932,`p`),cN(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),ag(),Tl(934,`blockquote`)(935,`p`),cN(936,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),ag()()()(),Tl(937,`tr`,15)(938,`td`,16)(939,`div`,17)(940,`span`,18),cN(941,` minRange`),Gl(942,`br`),ag()()(),Tl(943,`td`,19)(944,`code`,27),cN(945,`number`),ag()(),Tl(946,`td`,23)(947,`em`)(948,`strong`),cN(949,`(opcional)`),ag()(),Tl(950,`p`),cN(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),ag(),Tl(952,`blockquote`)(953,`p`),cN(954,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),ag()()()(),Tl(955,`tr`,15)(956,`td`,16)(957,`div`,17)(958,`span`,18),cN(959,` paddingBottom`),Gl(960,`br`),ag()()(),Tl(961,`td`,19)(962,`code`,27),cN(963,`number`),ag()(),Tl(964,`td`,23)(965,`em`)(966,`strong`),cN(967,`(opcional)`),ag()(),Tl(968,`p`),cN(969,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),ag()()(),Tl(970,`tr`,15)(971,`td`,16)(972,`div`,17)(973,`span`,18),cN(974,` paddingLeft`),Gl(975,`br`),ag()()(),Tl(976,`td`,19)(977,`code`,27),cN(978,`number`),ag()(),Tl(979,`td`,23)(980,`em`)(981,`strong`),cN(982,`(opcional)`),ag()(),Tl(983,`p`),cN(984,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),ag()()(),Tl(985,`tr`,15)(986,`td`,16)(987,`div`,17)(988,`span`,18),cN(989,` paddingRight`),Gl(990,`br`),ag()()(),Tl(991,`td`,19)(992,`code`,27),cN(993,`number`),ag()(),Tl(994,`td`,23)(995,`em`)(996,`strong`),cN(997,`(opcional)`),ag()(),Tl(998,`p`),cN(999,`Permite aumentar ou diminuir o espaço direito do gráfico.`),ag()()(),Tl(1e3,`tr`,15)(1001,`td`,16)(1002,`div`,17)(1003,`span`,18),cN(1004,` rotateLegend`),Gl(1005,`br`),ag()()(),Tl(1006,`td`,19)(1007,`code`,27),cN(1008,`number`),ag()(),Tl(1009,`td`,23)(1010,`em`)(1011,`strong`),cN(1012,`(opcional)`),ag()(),Tl(1013,`p`),cN(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),ag(),Tl(1015,`ul`)(1016,`li`),cN(1017,`Valores negativos giram a legenda para a esquerda.`),ag(),Tl(1018,`li`),cN(1019,`Valores positivos giram a legenda para a direita.`),ag()(),Tl(1020,`p`),cN(1021,`Se não for definido, a legenda será exibida sem rotação.`),ag()()(),Tl(1022,`tr`,15)(1023,`td`,16)(1024,`div`,17)(1025,`span`,18),cN(1026,` showAxisDetails`),Gl(1027,`br`),ag()()(),Tl(1028,`td`,19)(1029,`code`,39),cN(1030,`boolean`),ag()(),Tl(1031,`td`,23)(1032,`em`)(1033,`strong`),cN(1034,`(opcional)`),ag()(),Tl(1035,`p`),cN(1036,`Exibe a linha de detalhes que acompanha o mouse`),ag()()(),Tl(1037,`tr`,15)(1038,`td`,16)(1039,`div`,17)(1040,`span`,18),cN(1041,` showXAxis`),Gl(1042,`br`),ag()()(),Tl(1043,`td`,19)(1044,`code`,39),cN(1045,`boolean`),ag()(),Tl(1046,`td`,23)(1047,`em`)(1048,`strong`),cN(1049,`(opcional)`),ag()(),Tl(1050,`p`),cN(1051,`Exibe a linha do eixo X`),ag()()(),Tl(1052,`tr`,15)(1053,`td`,16)(1054,`div`,17)(1055,`span`,18),cN(1056,` showYAxis`),Gl(1057,`br`),ag()()(),Tl(1058,`td`,19)(1059,`code`,39),cN(1060,`boolean`),ag()(),Tl(1061,`td`,23)(1062,`em`)(1063,`strong`),cN(1064,`(opcional)`),ag()(),Tl(1065,`p`),cN(1066,`Exibe a linha do eixo Y`),ag()()()(),Tl(1067,`h4`,37)(1068,`code`,5),cN(1069,`PoChartHeaderOptions`),ag()(),Tl(1070,`div`,2)(1071,`p`)(1072,`em`),cN(1073,`Interface`),ag(),cN(1074,` para configuração das ações disponíveis no cabeçalho.`),ag()(),Tl(1075,`h4`,11),cN(1076,`Propriedades`),ag(),Tl(1077,`table`,12)(1078,`tr`,13)(1079,`th`,14),cN(1080,`Nome`),ag(),Tl(1081,`th`,14),cN(1082,`Tipo`),ag(),Tl(1083,`th`,14),cN(1084,`Descrição`),ag()(),Tl(1085,`tr`,15)(1086,`td`,16)(1087,`div`,17)(1088,`span`,18),cN(1089,` hideExpand`),Gl(1090,`br`),ag()()(),Tl(1091,`td`,19)(1092,`code`,39),cN(1093,`boolean`),ag()(),Tl(1094,`td`,23)(1095,`em`)(1096,`strong`),cN(1097,`(opcional)`),ag()(),Tl(1098,`p`),cN(1099,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),ag()()(),Tl(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),cN(1104,` hideExportCsv`),Gl(1105,`br`),ag()()(),Tl(1106,`td`,19)(1107,`code`,39),cN(1108,`boolean`),ag()(),Tl(1109,`td`,23)(1110,`em`)(1111,`strong`),cN(1112,`(opcional)`),ag()(),Tl(1113,`p`),cN(1114,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),ag()()(),Tl(1115,`tr`,15)(1116,`td`,16)(1117,`div`,17)(1118,`span`,18),cN(1119,` hideExportImage`),Gl(1120,`br`),ag()()(),Tl(1121,`td`,19)(1122,`code`,39),cN(1123,`boolean`),ag()(),Tl(1124,`td`,23)(1125,`em`)(1126,`strong`),cN(1127,`(opcional)`),ag()(),Tl(1128,`p`),cN(1129,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),ag()()(),Tl(1130,`tr`,15)(1131,`td`,16)(1132,`div`,17)(1133,`span`,18),cN(1134,` hideTableDetails`),Gl(1135,`br`),ag()()(),Tl(1136,`td`,19)(1137,`code`,39),cN(1138,`boolean`),ag()(),Tl(1139,`td`,23)(1140,`em`)(1141,`strong`),cN(1142,`(opcional)`),ag()(),Tl(1143,`p`),cN(1144,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),ag()()()(),Tl(1145,`h4`,37)(1146,`code`,5),cN(1147,`PoChartIndicatorOptions`),ag()(),Tl(1148,`div`,2)(1149,`p`),cN(1150,`Interface para configurações dos indicadores do gráfico `),Tl(1151,`code`),cN(1152,`radar`),ag(),cN(1153,`.`),ag()(),Tl(1154,`h4`,11),cN(1155,`Propriedades`),ag(),Tl(1156,`table`,12)(1157,`tr`,13)(1158,`th`,14),cN(1159,`Nome`),ag(),Tl(1160,`th`,14),cN(1161,`Tipo`),ag(),Tl(1162,`th`,14),cN(1163,`Descrição`),ag()(),Tl(1164,`tr`,15)(1165,`td`,16)(1166,`div`,17)(1167,`span`,18),cN(1168,` color`),Gl(1169,`br`),ag()()(),Tl(1170,`td`,19)(1171,`code`,35),cN(1172,`string`),ag()(),Tl(1173,`td`,23)(1174,`em`)(1175,`strong`),cN(1176,`(opcional)`),ag()(),Tl(1177,`p`),cN(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),ag(),Tl(1179,`blockquote`)(1180,`p`),cN(1181,`Nome da cor, hexadecimal ou RGB.`),ag()()()(),Tl(1182,`tr`,15)(1183,`td`,16)(1184,`div`,17)(1185,`span`,18),cN(1186,` max`),Gl(1187,`br`),ag()()(),Tl(1188,`td`,19)(1189,`code`,27),cN(1190,`number`),ag()(),Tl(1191,`td`,23)(1192,`em`)(1193,`strong`),cN(1194,`(opcional)`),ag()(),Tl(1195,`p`),cN(1196,`Valor máximo do indicator.`),ag(),Tl(1197,`p`),cN(1198,`A propriedade `),Tl(1199,`code`),cN(1200,`max`),ag(),cN(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),ag()()(),Tl(1202,`tr`,15)(1203,`td`,16)(1204,`div`,17)(1205,`span`,18),cN(1206,` min`),Gl(1207,`br`),ag()()(),Tl(1208,`td`,19)(1209,`code`,27),cN(1210,`number`),ag()(),Tl(1211,`td`,23)(1212,`em`)(1213,`strong`),cN(1214,`(opcional)`),ag()(),Tl(1215,`p`),cN(1216,`Valor mínimo do indicator, com valor padrão de 0.`),ag(),Tl(1217,`p`),cN(1218,`A propriedade `),Tl(1219,`code`),cN(1220,`min`),ag(),cN(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),ag()()(),Tl(1222,`tr`,15)(1223,`td`,16)(1224,`div`,17)(1225,`span`,18),cN(1226,` name`),Gl(1227,`br`),ag()()(),Tl(1228,`td`,19)(1229,`code`,35),cN(1230,`string`),ag()(),Tl(1231,`td`,23)(1232,`em`)(1233,`strong`),cN(1234,`(opcional)`),ag()(),Tl(1235,`p`),cN(1236,`Nome do indicator.`),ag()()()(),Tl(1237,`h4`,37)(1238,`code`,5),cN(1239,`PoChartLiterals`),ag()(),Tl(1240,`div`,2)(1241,`p`),cN(1242,`Interface para definição dos literais usadas no `),Tl(1243,`code`),cN(1244,`po-chart`),ag(),cN(1245,`.`),ag()(),Tl(1246,`h4`,11),cN(1247,`Propriedades`),ag(),Tl(1248,`table`,12)(1249,`tr`,13)(1250,`th`,14),cN(1251,`Nome`),ag(),Tl(1252,`th`,14),cN(1253,`Tipo`),ag(),Tl(1254,`th`,14),cN(1255,`Descrição`),ag()(),Tl(1256,`tr`,15)(1257,`td`,16)(1258,`div`,17)(1259,`span`,18),cN(1260,` category`),Gl(1261,`br`),ag()()(),Tl(1262,`td`,19)(1263,`code`,35),cN(1264,`string`),ag()(),Tl(1265,`td`,23)(1266,`em`)(1267,`strong`),cN(1268,`(opcional)`),ag()(),Tl(1269,`p`),cN(1270,`Texto da primeira coluna da tabela no gráfico do tipo `),Tl(1271,`code`),cN(1272,`Bar`),ag(),cN(1273,`.`),ag()()(),Tl(1274,`tr`,15)(1275,`td`,16)(1276,`div`,17)(1277,`span`,18),cN(1278,` downloadCSV`),Gl(1279,`br`),ag()()(),Tl(1280,`td`,19)(1281,`code`,35),cN(1282,`string`),ag()(),Tl(1283,`td`,23)(1284,`em`)(1285,`strong`),cN(1286,`(opcional)`),ag()(),Tl(1287,`p`),cN(1288,`Texto exibido para a ação de download de dados em formato CSV.`),ag()()(),Tl(1289,`tr`,15)(1290,`td`,16)(1291,`div`,17)(1292,`span`,18),cN(1293,` exportCSV`),Gl(1294,`br`),ag()()(),Tl(1295,`td`,19)(1296,`code`,35),cN(1297,`string`),ag()(),Tl(1298,`td`,23)(1299,`em`)(1300,`strong`),cN(1301,`(opcional)`),ag()(),Tl(1302,`p`),cN(1303,`Texto do botão para exportar o gráfico em CSV.`),ag()()(),Tl(1304,`tr`,15)(1305,`td`,16)(1306,`div`,17)(1307,`span`,18),cN(1308,` exportJPG`),Gl(1309,`br`),ag()()(),Tl(1310,`td`,19)(1311,`code`,35),cN(1312,`string`),ag()(),Tl(1313,`td`,23)(1314,`em`)(1315,`strong`),cN(1316,`(opcional)`),ag()(),Tl(1317,`p`),cN(1318,`Texto do botão para exportar o gráfico como imagem JPG.`),ag()()(),Tl(1319,`tr`,15)(1320,`td`,16)(1321,`div`,17)(1322,`span`,18),cN(1323,` exportPNG`),Gl(1324,`br`),ag()()(),Tl(1325,`td`,19)(1326,`code`,35),cN(1327,`string`),ag()(),Tl(1328,`td`,23)(1329,`em`)(1330,`strong`),cN(1331,`(opcional)`),ag()(),Tl(1332,`p`),cN(1333,`Texto do botão para exportar o gráfico como imagem PNG.`),ag()()(),Tl(1334,`tr`,15)(1335,`td`,16)(1336,`div`,17)(1337,`span`,18),cN(1338,` item`),Gl(1339,`br`),ag()()(),Tl(1340,`td`,19)(1341,`code`,35),cN(1342,`string`),ag()(),Tl(1343,`td`,23)(1344,`em`)(1345,`strong`),cN(1346,`(opcional)`),ag()(),Tl(1347,`p`),cN(1348,`Texto dos títulos das colunas `),Tl(1349,`code`),cN(1350,`Gauge`),ag(),cN(1351,` e não possui label.`),ag()()(),Tl(1352,`tr`,15)(1353,`td`,16)(1354,`div`,17)(1355,`span`,18),cN(1356,` serie`),Gl(1357,`br`),ag()()(),Tl(1358,`td`,19)(1359,`code`,35),cN(1360,`string`),ag()(),Tl(1361,`td`,23)(1362,`em`)(1363,`strong`),cN(1364,`(opcional)`),ag()(),Tl(1365,`p`),cN(1366,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),Tl(1367,`code`),cN(1368,`Bar`),ag(),cN(1369,` e `),Tl(1370,`code`),cN(1371,`Gauge`),ag(),cN(1372,`.`),ag()()(),Tl(1373,`tr`,15)(1374,`td`,16)(1375,`div`,17)(1376,`span`,18),cN(1377,` value`),Gl(1378,`br`),ag()()(),Tl(1379,`td`,19)(1380,`code`,35),cN(1381,`string`),ag()(),Tl(1382,`td`,23)(1383,`em`)(1384,`strong`),cN(1385,`(opcional)`),ag()(),Tl(1386,`p`),cN(1387,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),Tl(1388,`code`),cN(1389,`Gauge`),ag(),cN(1390,`.`),ag()()()(),Tl(1391,`h4`,37)(1392,`code`,5),cN(1393,`PoChartOptions`),ag()(),Tl(1394,`div`,2)(1395,`p`)(1396,`em`),cN(1397,`Interface`),ag(),cN(1398,` para configurações dos elementos do gráfico.`),ag()(),Tl(1399,`h4`,11),cN(1400,`Propriedades`),ag(),Tl(1401,`table`,12)(1402,`tr`,13)(1403,`th`,14),cN(1404,`Nome`),ag(),Tl(1405,`th`,14),cN(1406,`Tipo`),ag(),Tl(1407,`th`,14),cN(1408,`Descrição`),ag()(),Tl(1409,`tr`,15)(1410,`td`,16)(1411,`div`,17)(1412,`span`,18),cN(1413,` areaStyle`),Gl(1414,`br`),ag()()(),Tl(1415,`td`,19)(1416,`code`,39),cN(1417,`boolean`),ag()(),Tl(1418,`td`,23)(1419,`em`)(1420,`strong`),cN(1421,`(opcional)`),ag()(),Tl(1422,`p`),cN(1423,`Define se as séries terão sua área preenchida.`),ag(),Tl(1424,`blockquote`)(1425,`p`),cN(1426,`Esta propriedade tem precedência sobre a definição de `),Tl(1427,`code`),cN(1428,`areaStyle`),ag(),cN(1429,` em cada série, `),Tl(1430,`code`),cN(1431,`fillpoints`),ag(),cN(1432,` não funciona quando `),Tl(1433,`code`),cN(1434,`areaStyle`),ag(),cN(1435,` está definido como `),Tl(1436,`code`),cN(1437,`true`),ag(),cN(1438,`.`),ag()()()(),Tl(1439,`tr`,15)(1440,`td`,16)(1441,`div`,17)(1442,`span`,18),cN(1443,` axis`),Gl(1444,`br`),ag()()(),Tl(1445,`td`,19)(1446,`code`,40),cN(1447,`PoChartAxisOptions`),ag()(),Tl(1448,`td`,23)(1449,`em`)(1450,`strong`),cN(1451,`(opcional)`),ag()(),Tl(1452,`p`),cN(1453,`Define um objeto do tipo `),Tl(1454,`code`),cN(1455,`PoChartAxisOptions`),ag(),cN(1456,` para configuração dos eixos.`),ag()()(),Tl(1457,`tr`,15)(1458,`td`,16)(1459,`div`,17)(1460,`span`,18),cN(1461,` borderRadius`),Gl(1462,`br`),ag()()(),Tl(1463,`td`,19)(1464,`code`,27),cN(1465,`number`),ag()(),Tl(1466,`td`,23)(1467,`em`)(1468,`strong`),cN(1469,`(opcional)`),ag()(),Tl(1470,`p`),cN(1471,`Define borda entre os itens do gráfico. Válido para os gráficos `),Tl(1472,`code`),cN(1473,`Donut`),ag(),cN(1474,`, `),Tl(1475,`code`),cN(1476,`Pie`),ag(),cN(1477,`.`),ag(),Tl(1478,`blockquote`)(1479,`p`),cN(1480,`Valores válidos entre 0 e 100,`),ag()()()(),Tl(1481,`tr`,15)(1482,`td`,16)(1483,`div`,17)(1484,`span`,18),cN(1485,` bottomDataZoom`),Gl(1486,`br`),ag()()(),Tl(1487,`td`,19)(1488,`code`,39),cN(1489,`boolean `),ag(),Tl(1490,`code`,27),cN(1491,` number`),ag()(),Tl(1492,`td`,23)(1493,`em`)(1494,`strong`),cN(1495,`(opcional)`),ag()(),Tl(1496,`p`),cN(1497,`Define a distância inferior do componente DataZoom.`),ag(),Tl(1498,`p`),cN(1499,`Esta propriedade aceita os seguintes valores:`),ag(),Tl(1500,`ul`)(1501,`li`)(1502,`p`)(1503,`code`),cN(1504,`false`),ag(),cN(1505,` (padrão): não aplica ajustes.`),ag()(),Tl(1506,`li`)(1507,`p`)(1508,`code`),cN(1509,`true`),ag(),cN(1510,`: aplica um valor automático com base no posicionamento da legenda:`),ag(),Tl(1511,`ul`)(1512,`li`)(1513,`code`),cN(1514,`8`),ag(),cN(1515,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),ag(),Tl(1516,`li`)(1517,`code`),cN(1518,`32`),ag(),cN(1519,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),ag()()(),Tl(1520,`li`)(1521,`p`)(1522,`code`),cN(1523,`number`),ag(),cN(1524,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),ag()()(),Tl(1525,`blockquote`)(1526,`p`),cN(1527,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),Tl(1528,`code`),cN(1529,`dataZoom: true`),ag(),cN(1530,`).`),ag()()()(),Tl(1531,`tr`,15)(1532,`td`,16)(1533,`div`,17)(1534,`span`,18),cN(1535,` dataZoom`),Gl(1536,`br`),ag()()(),Tl(1537,`td`,19)(1538,`code`,39),cN(1539,`boolean`),ag()(),Tl(1540,`td`,23)(1541,`em`)(1542,`strong`),cN(1543,`(opcional)`),ag()(),Tl(1544,`p`),cN(1545,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),ag()()(),Tl(1546,`tr`,15)(1547,`td`,16)(1548,`div`,17)(1549,`span`,18),cN(1550,` descriptionChart`),Gl(1551,`br`),ag()()(),Tl(1552,`td`,19)(1553,`code`,35),cN(1554,`string`),ag()(),Tl(1555,`td`,23)(1556,`em`)(1557,`strong`),cN(1558,`(opcional)`),ag()(),Tl(1559,`p`),cN(1560,`Define a descrição do gráfico exibido acima do gráfico.`),ag()()(),Tl(1561,`tr`,15)(1562,`td`,16)(1563,`div`,17)(1564,`span`,18),cN(1565,` fillPoints`),Gl(1566,`br`),ag()()(),Tl(1567,`td`,19)(1568,`code`,39),cN(1569,`boolean`),ag()(),Tl(1570,`td`,23)(1571,`em`)(1572,`strong`),cN(1573,`(opcional)`),ag()(),Tl(1574,`p`),cN(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),ag(),Tl(1576,`blockquote`)(1577,`p`),cN(1578,`Esta propriedade é utilizável para os gráficos dos tipos `),Tl(1579,`code`),cN(1580,`Area`),ag(),cN(1581,`, `),Tl(1582,`code`),cN(1583,`Line`),ag(),cN(1584,` e `),Tl(1585,`code`),cN(1586,`Radar`),ag(),cN(1587,`.
Para o tipo `),Tl(1588,`code`),cN(1589,`Radar`),ag(),cN(1590,`, o valor padrão é `),Tl(1591,`code`),cN(1592,`true`),ag(),cN(1593,`.`),ag()()()(),Tl(1594,`tr`,15)(1595,`td`,16)(1596,`div`,17)(1597,`span`,18),cN(1598,` firstColumnName`),Gl(1599,`br`),ag()()(),Tl(1600,`td`,19)(1601,`code`,35),cN(1602,`string`),ag()(),Tl(1603,`td`,23)(1604,`em`)(1605,`strong`),cN(1606,`(opcional)`),ag()(),Tl(1607,`p`),cN(1608,`Valor que permite customizar o nome da `),Tl(1609,`code`),cN(1610,`TH`),ag(),cN(1611,` da primeira coluna da tabela descritiva.`),ag()()(),Tl(1612,`tr`,15)(1613,`td`,16)(1614,`div`,17)(1615,`span`,18),cN(1616,` header`),Gl(1617,`br`),ag()()(),Tl(1618,`td`,19)(1619,`code`,41),cN(1620,`PoChartHeaderOptions`),ag()(),Tl(1621,`td`,23)(1622,`em`)(1623,`strong`),cN(1624,`(opcional)`),ag()(),Tl(1625,`p`),cN(1626,`Define um objeto do tipo `),Tl(1627,`code`),cN(1628,`PoChartHeaderOptions`),ag(),cN(1629,` para configurar a exibição de botões no cabeçalho do gráfico.`),ag()()(),Tl(1630,`tr`,15)(1631,`td`,16)(1632,`div`,17)(1633,`span`,18),cN(1634,` innerRadius`),Gl(1635,`br`),ag()()(),Tl(1636,`td`,19)(1637,`code`,27),cN(1638,`number`),ag()(),Tl(1639,`td`,23)(1640,`em`)(1641,`strong`),cN(1642,`(opcional)`),ag()(),Tl(1643,`p`),cN(1644,`Define o diâmetro, em valor percentual entre `),Tl(1645,`code`),cN(1646,`0`),ag(),cN(1647,` e `),Tl(1648,`code`),cN(1649,`100`),ag(),cN(1650,`, da área central para gráficos do tipo `),Tl(1651,`code`),cN(1652,`donut`),ag(),cN(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Tl(1654,`code`),cN(1655,`40px`),ag(),cN(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),ag()()(),Tl(1657,`tr`,15)(1658,`td`,16)(1659,`div`,17)(1660,`span`,18),cN(1661,` legend`),Gl(1662,`br`),ag()()(),Tl(1663,`td`,19)(1664,`code`,39),cN(1665,`boolean`),ag()(),Tl(1666,`td`,23)(1667,`em`)(1668,`strong`),cN(1669,`(opcional)`),ag()(),Tl(1670,`p`),cN(1671,`Define a exibição da legenda do gráfico. Valor padrão é `),Tl(1672,`code`),cN(1673,`true`),ag()()()(),Tl(1674,`tr`,15)(1675,`td`,16)(1676,`div`,17)(1677,`span`,18),cN(1678,` legendPosition`),Gl(1679,`br`),ag()()(),Tl(1680,`td`,19)(1681,`code`,42),cN(1682,`'left' `),ag(),Tl(1683,`code`,43),cN(1684,` 'center' `),ag(),Tl(1685,`code`,44),cN(1686,` 'right'`),ag()(),Tl(1687,`td`,23)(1688,`em`)(1689,`strong`),cN(1690,`(opcional)`),ag()(),Tl(1691,`p`),cN(1692,`Define o alinhamento horizontal da legenda.`),ag(),Tl(1693,`blockquote`)(1694,`p`),cN(1695,`Propriedade inválida para o gráfico do tipo `),Tl(1696,`code`),cN(1697,`Gauge`),ag(),cN(1698,`.`),ag()()()(),Tl(1699,`tr`,15)(1700,`td`,16)(1701,`div`,17)(1702,`span`,18),cN(1703,` legendType`),Gl(1704,`br`),ag()()(),Tl(1705,`td`,19)(1706,`code`,45),cN(1707,`'plain' `),ag(),Tl(1708,`code`,46),cN(1709,` 'scroll'`),ag()(),Tl(1710,`td`,23)(1711,`em`)(1712,`strong`),cN(1713,`(opcional)`),ag()(),Tl(1714,`p`),cN(1715,`Define o tipo da legenda.`),ag(),Tl(1716,`ul`)(1717,`li`)(1718,`code`),cN(1719,`plain`),ag(),cN(1720,`: exibe todas as legendas de forma estática.`),ag(),Tl(1721,`li`)(1722,`code`),cN(1723,`scroll`),ag(),cN(1724,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),ag()(),Tl(1725,`blockquote`)(1726,`p`),cN(1727,`Propriedade inválida para o gráfico do tipo `),Tl(1728,`code`),cN(1729,`Gauge`),ag(),cN(1730,`.`),ag()()()(),Tl(1731,`tr`,15)(1732,`td`,16)(1733,`div`,17)(1734,`span`,18),cN(1735,` legendVerticalPosition`),Gl(1736,`br`),ag()()(),Tl(1737,`td`,19)(1738,`code`,47),cN(1739,`'top' `),ag(),Tl(1740,`code`,48),cN(1741,` 'bottom'`),ag()(),Tl(1742,`td`,23)(1743,`em`)(1744,`strong`),cN(1745,`(opcional)`),ag()(),Tl(1746,`p`),cN(1747,`Define a posição vertical da legenda no gráfico.`),ag(),Tl(1748,`blockquote`)(1749,`p`),cN(1750,`Quando utilizada com o valor `),Tl(1751,`code`),cN(1752,`top`),ag(),cN(1753,`, recomenda-se configurar também a propriedade `),Tl(1754,`code`),cN(1755,`bottomDataZoom`),ag(),cN(1756,` caso o `),Tl(1757,`code`),cN(1758,`dataZoom`),ag(),cN(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Tl(1760,`code`),cN(1761,`Gauge`),ag(),cN(1762,`.`),ag()()()(),Tl(1763,`tr`,15)(1764,`td`,16)(1765,`div`,17)(1766,`span`,18),cN(1767,` pointer`),Gl(1768,`br`),ag()()(),Tl(1769,`td`,19)(1770,`code`,39),cN(1771,`boolean`),ag()(),Tl(1772,`td`,23)(1773,`em`)(1774,`strong`),cN(1775,`(opcional)`),ag()(),Tl(1776,`p`),cN(1777,`Define a exibição do ponteiro.`),ag(),Tl(1778,`blockquote`)(1779,`p`),cN(1780,`Válido para gráfico do tipo `),Tl(1781,`code`),cN(1782,`Gauge`),ag(),cN(1783,`.`),ag()()()(),Tl(1784,`tr`,15)(1785,`td`,16)(1786,`div`,17)(1787,`span`,18),cN(1788,` rendererOption`),Gl(1789,`br`),ag()()(),Tl(1790,`td`,19)(1791,`code`,49),cN(1792,`'canvas' `),ag(),Tl(1793,`code`,50),cN(1794,` 'svg'`),ag()(),Tl(1795,`td`,23)(1796,`em`)(1797,`strong`),cN(1798,`(opcional)`),ag()(),Tl(1799,`p`),cN(1800,`Define como o gráfico será renderizado.`),ag(),Tl(1801,`blockquote`)(1802,`p`),cN(1803,`Recomenda-se não modificar o valor da propriedade `),Tl(1804,`code`),cN(1805,`rendererOption`),ag(),cN(1806,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),ag()()()(),Tl(1807,`tr`,15)(1808,`td`,16)(1809,`div`,17)(1810,`span`,18),cN(1811,` roseType`),Gl(1812,`br`),ag()()(),Tl(1813,`td`,19)(1814,`code`,39),cN(1815,`boolean`),ag()(),Tl(1816,`td`,23)(1817,`em`)(1818,`strong`),cN(1819,`(opcional)`),ag()(),Tl(1820,`p`),cN(1821,`Transforma os gráficos do tipo `),Tl(1822,`code`),cN(1823,`Donut`),ag(),cN(1824,` ou `),Tl(1825,`code`),cN(1826,`Pie`),ag(),cN(1827,` num gráfico de área polar.`),ag(),Tl(1828,`blockquote`)(1829,`p`),cN(1830,`Válido para os gráficos `),Tl(1831,`code`),cN(1832,`Donut`),ag(),cN(1833,` e `),Tl(1834,`code`),cN(1835,`Pie`),ag(),cN(1836,`.`),ag()()()(),Tl(1837,`tr`,15)(1838,`td`,16)(1839,`div`,17)(1840,`span`,18),cN(1841,` showContainerGauge`),Gl(1842,`br`),ag()()(),Tl(1843,`td`,19)(1844,`code`,39),cN(1845,`boolean`),ag()(),Tl(1846,`td`,23)(1847,`em`)(1848,`strong`),cN(1849,`(opcional)`),ag()(),Tl(1850,`p`),cN(1851,`Esconde a estilização do container em volta do gráfico.`),ag(),Tl(1852,`blockquote`)(1853,`p`),cN(1854,`Válido para gráfico do tipo `),Tl(1855,`code`),cN(1856,`Gauge`),ag(),cN(1857,`.`),ag()()()(),Tl(1858,`tr`,15)(1859,`td`,16)(1860,`div`,17)(1861,`span`,18),cN(1862,` showFromToLegend`),Gl(1863,`br`),ag()()(),Tl(1864,`td`,19)(1865,`code`,39),cN(1866,`boolean`),ag()(),Tl(1867,`td`,23)(1868,`em`)(1869,`strong`),cN(1870,`(opcional)`),ag()(),Tl(1871,`p`),cN(1872,`Exibe os valores das propriedades `),Tl(1873,`code`),cN(1874,`from`),ag(),cN(1875,` e `),Tl(1876,`code`),cN(1877,`to`),ag(),cN(1878,` no gráfico do no texto da legenda entre parênteses.`),ag(),Tl(1879,`blockquote`)(1880,`p`),cN(1881,`Válido para gráfico do tipo `),Tl(1882,`code`),cN(1883,`Gauge`),ag(),cN(1884,`.`),ag()()()(),Tl(1885,`tr`,15)(1886,`td`,16)(1887,`div`,17)(1888,`span`,18),cN(1889,` stacked`),Gl(1890,`br`),ag()()(),Tl(1891,`td`,19)(1892,`code`,39),cN(1893,`boolean`),ag()(),Tl(1894,`td`,23)(1895,`em`)(1896,`strong`),cN(1897,`(opcional)`),ag()(),Tl(1898,`p`),cN(1899,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),Tl(1900,`code`),cN(1901,`stackGroupName`),ag(),cN(1902,` da interface `),Tl(1903,`code`),cN(1904,`PoChartSerie`),ag()(),Tl(1905,`blockquote`)(1906,`p`),cN(1907,`Válido para gráfico do tipo `),Tl(1908,`code`),cN(1909,`Column`),ag(),cN(1910,` e `),Tl(1911,`code`),cN(1912,`Bar`),ag(),cN(1913,`.`),ag()(),Tl(1914,`blockquote`)(1915,`p`),cN(1916,`Essa propriedade habilita a propriedade `),Tl(1917,`code`),cN(1918,`p-data-label`),ag(),cN(1919,` por padrão, podendo ser desabilitada passando `),Tl(1920,`code`),cN(1921,`[p-data-label]={ fixed: false }`),ag(),cN(1922,`.`),ag()()()(),Tl(1923,`tr`,15)(1924,`td`,16)(1925,`div`,17)(1926,`span`,18),cN(1927,` subtitleGauge`),Gl(1928,`br`),ag()()(),Tl(1929,`td`,19)(1930,`code`,35),cN(1931,`string`),ag()(),Tl(1932,`td`,23)(1933,`em`)(1934,`strong`),cN(1935,`(opcional)`),ag()(),Tl(1936,`p`),cN(1937,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),ag(),Tl(1938,`blockquote`)(1939,`p`),cN(1940,`Válido para gráfico do tipo `),Tl(1941,`code`),cN(1942,`Gauge`),ag(),cN(1943,`.`),ag()()()(),Tl(1944,`tr`,15)(1945,`td`,16)(1946,`div`,17)(1947,`span`,18),cN(1948,` textCenterGraph`),Gl(1949,`br`),ag()()(),Tl(1950,`td`,19)(1951,`code`,35),cN(1952,`string`),ag()(),Tl(1953,`td`,23)(1954,`em`)(1955,`strong`),cN(1956,`(opcional)`),ag()(),Tl(1957,`p`),cN(1958,`Aplica texto centralizado customizado nos gráficos de `),Tl(1959,`code`),cN(1960,`Donut`),ag(),cN(1961,`.`),ag()()()(),Tl(1962,`h4`,37)(1963,`code`,5),cN(1964,`PoChartRadarOptions`),ag()(),Tl(1965,`div`,2)(1966,`p`)(1967,`em`),cN(1968,`Interface`),ag(),cN(1969,` para configurações do gráfico `),Tl(1970,`code`),cN(1971,`radar`),ag(),cN(1972,`.`),ag()(),Tl(1973,`h4`,11),cN(1974,`Propriedades`),ag(),Tl(1975,`table`,12)(1976,`tr`,13)(1977,`th`,14),cN(1978,`Nome`),ag(),Tl(1979,`th`,14),cN(1980,`Tipo`),ag(),Tl(1981,`th`,14),cN(1982,`Descrição`),ag()(),Tl(1983,`tr`,15)(1984,`td`,16)(1985,`div`,17)(1986,`span`,18),cN(1987,` indicator`),Gl(1988,`br`),ag()()(),Tl(1989,`td`,19)(1990,`code`,51),cN(1991,`Array<PoChartIndicatorOptions>`),ag()(),Tl(1992,`td`,23)(1993,`em`)(1994,`strong`),cN(1995,`(opcional)`),ag()(),Tl(1996,`p`),cN(1997,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),ag()()(),Tl(1998,`tr`,15)(1999,`td`,16)(2e3,`div`,17)(2001,`span`,18),cN(2002,` shape`),Gl(2003,`br`),ag()()(),Tl(2004,`td`,19)(2005,`code`,52),cN(2006,`'polygon' `),ag(),Tl(2007,`code`,53),cN(2008,` 'circle'`),ag()(),Tl(2009,`td`,23)(2010,`em`)(2011,`strong`),cN(2012,`(opcional)`),ag()(),Tl(2013,`p`),cN(2014,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),ag()()(),Tl(2015,`tr`,15)(2016,`td`,16)(2017,`div`,17)(2018,`span`,18),cN(2019,` splitArea`),Gl(2020,`br`),ag()()(),Tl(2021,`td`,19)(2022,`code`,39),cN(2023,`boolean`),ag()(),Tl(2024,`td`,23)(2025,`em`)(2026,`strong`),cN(2027,`(opcional)`),ag()(),Tl(2028,`p`),cN(2029,`Define o efeito zebrado na grid.`),ag()()()(),Tl(2030,`h4`,37)(2031,`code`,5),cN(2032,`PoChartDataLabel`),ag()(),Tl(2033,`div`,2)(2034,`p`),cN(2035,`Interface que define as propriedades de exibição dos rótulos das séries no `),Tl(2036,`code`),cN(2037,`po-chart`),ag(),cN(2038,`.`),ag()(),Tl(2039,`h4`,11),cN(2040,`Propriedades`),ag(),Tl(2041,`table`,12)(2042,`tr`,13)(2043,`th`,14),cN(2044,`Nome`),ag(),Tl(2045,`th`,14),cN(2046,`Tipo`),ag(),Tl(2047,`th`,14),cN(2048,`Descrição`),ag()(),Tl(2049,`tr`,15)(2050,`td`,16)(2051,`div`,17)(2052,`span`,18),cN(2053,` fixed`),Gl(2054,`br`),ag()()(),Tl(2055,`td`,19)(2056,`code`,39),cN(2057,`boolean`),ag()(),Tl(2058,`td`,23)(2059,`em`)(2060,`strong`),cN(2061,`(opcional)`),ag()(),Tl(2062,`p`),cN(2063,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),ag(),Tl(2064,`ul`)(2065,`li`),cN(2066,`Quando definido como `),Tl(2067,`code`),cN(2068,`true`),ag(),cN(2069,`:`),Tl(2070,`ul`)(2071,`li`),cN(2072,`O `),Tl(2073,`em`),cN(2074,`tooltip`),ag(),cN(2075,` não será exibido.`),ag(),Tl(2076,`li`),cN(2077,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),ag()()()(),Tl(2078,`blockquote`)(2079,`p`),cN(2080,`Disponível para os tipo de gráfico `),Tl(2081,`code`),cN(2082,`PoChartType.Line`),ag(),cN(2083,`, `),Tl(2084,`code`),cN(2085,`PoChartType.Area`),ag(),cN(2086,`, `),Tl(2087,`code`),cN(2088,`PoChartType.Column`),ag(),cN(2089,`, `),Tl(2090,`code`),cN(2091,`PoChartType.Bar e PoChartType.Radar`),ag(),cN(2092,`.`),ag()()()()(),Tl(2093,`h4`,37)(2094,`code`,5),cN(2095,`PoChartSerie`),ag()(),Tl(2096,`div`,2)(2097,`p`),cN(2098,`Interface das series dinâmicas do `),Tl(2099,`code`),cN(2100,`po-chart`),ag(),cN(2101,` que possibilita desenhar gráficos dos tipos `),Tl(2102,`code`),cN(2103,`area`),ag(),cN(2104,`, `),Tl(2105,`code`),cN(2106,`bar`),ag(),cN(2107,`, `),Tl(2108,`code`),cN(2109,`column`),ag(),cN(2110,`, `),Tl(2111,`code`),cN(2112,`line`),ag(),cN(2113,`, `),Tl(2114,`code`),cN(2115,`donut`),ag(),cN(2116,`, `),Tl(2117,`code`),cN(2118,`pie`),ag(),cN(2119,` e `),Tl(2120,`code`),cN(2121,`radar`),ag()()(),Tl(2122,`h4`,11),cN(2123,`Propriedades`),ag(),Tl(2124,`table`,12)(2125,`tr`,13)(2126,`th`,14),cN(2127,`Nome`),ag(),Tl(2128,`th`,14),cN(2129,`Tipo`),ag(),Tl(2130,`th`,14),cN(2131,`Descrição`),ag()(),Tl(2132,`tr`,15)(2133,`td`,16)(2134,`div`,17)(2135,`span`,18),cN(2136,` areaStyle`),Gl(2137,`br`),ag()()(),Tl(2138,`td`,19)(2139,`code`,39),cN(2140,`boolean`),ag()(),Tl(2141,`td`,23)(2142,`em`)(2143,`strong`),cN(2144,`(opcional)`),ag()(),Tl(2145,`p`),cN(2146,`Define se a série terá sua área preenchida.`),ag(),Tl(2147,`blockquote`)(2148,`p`),cN(2149,`Propriedade válida para gráficos do tipo `),Tl(2150,`code`),cN(2151,`Radar`),ag(),cN(2152,`, `),Tl(2153,`code`),cN(2154,`fillpoints`),ag(),cN(2155,` não funciona quando `),Tl(2156,`code`),cN(2157,`areaStyle`),ag(),cN(2158,` está definido como `),Tl(2159,`code`),cN(2160,`true`),ag(),cN(2161,`.`),ag()()()(),Tl(2162,`tr`,15)(2163,`td`,16)(2164,`div`,17)(2165,`span`,18),cN(2166,` color`),Gl(2167,`br`),ag()()(),Tl(2168,`td`,19)(2169,`code`,35),cN(2170,`string`),ag()(),Tl(2171,`td`,23)(2172,`em`)(2173,`strong`),cN(2174,`(opcional)`),ag()(),Tl(2175,`p`),cN(2176,`Determina a cor da série. As maneiras de customizar o `),Tl(2177,`em`),cN(2178,`preset`),ag(),cN(2179,` padrão de cores são:`),ag(),Tl(2180,`ul`)(2181,`li`),cN(2182,`Hexadecimal, por exemplo `),Tl(2183,`code`),cN(2184,`#c64840`),ag(),cN(2185,`;`),ag(),Tl(2186,`li`),cN(2187,`RGB, por exemplo `),Tl(2188,`code`),cN(2189,`rgb(0, 0, 165)`),ag()(),Tl(2190,`li`),cN(2191,`O nome da cor, por exemplo `),Tl(2192,`code`),cN(2193,`blue`),ag(),cN(2194,`;`),ag(),Tl(2195,`li`),cN(2196,`Variáveis CSS, por exemplo `),Tl(2197,`code`),cN(2198,`var(--color-01)`),ag(),cN(2199,`;`),ag(),Tl(2200,`li`),cN(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Tl(2202,`ul`)(2203,`li`),Gl(2204,`span`,54),Tl(2205,`code`),cN(2206,`color-01`),ag()(),Tl(2207,`li`),Gl(2208,`span`,55),Tl(2209,`code`),cN(2210,`color-02`),ag()(),Tl(2211,`li`),Gl(2212,`span`,56),Tl(2213,`code`),cN(2214,`color-03`),ag()(),Tl(2215,`li`),Gl(2216,`span`,57),Tl(2217,`code`),cN(2218,`color-04`),ag()(),Tl(2219,`li`),Gl(2220,`span`,58),Tl(2221,`code`),cN(2222,`color-05`),ag()(),Tl(2223,`li`),Gl(2224,`span`,59),Tl(2225,`code`),cN(2226,`color-06`),ag()(),Tl(2227,`li`),Gl(2228,`span`,60),Tl(2229,`code`),cN(2230,`color-07`),ag()(),Tl(2231,`li`),Gl(2232,`span`,61),Tl(2233,`code`),cN(2234,`color-08`),ag()(),Tl(2235,`li`),Gl(2236,`span`,62),Tl(2237,`code`),cN(2238,`color-09`),ag()(),Tl(2239,`li`),Gl(2240,`span`,63),Tl(2241,`code`),cN(2242,`color-10`),ag()(),Tl(2243,`li`),Gl(2244,`span`,64),Tl(2245,`code`),cN(2246,`color-11`),ag()(),Tl(2247,`li`),Gl(2248,`span`,65),Tl(2249,`code`),cN(2250,`color-12`),ag()()()()(),Tl(2251,`ul`)(2252,`li`),cN(2253,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),ag()()()(),Tl(2254,`tr`,15)(2255,`td`,16)(2256,`div`,17)(2257,`span`,18),cN(2258,` data`),Gl(2259,`br`),ag()()(),Tl(2260,`td`,19)(2261,`code`,27),cN(2262,`number `),ag(),Tl(2263,`code`,66),cN(2264,` Array<number>`),ag()(),Tl(2265,`td`,23)(2266,`em`)(2267,`strong`),cN(2268,`(opcional)`),ag()(),Tl(2269,`p`),cN(2270,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),ag(),Tl(2271,`ul`)(2272,`li`),cN(2273,`Para gráficos dos tipos `),Tl(2274,`code`),cN(2275,`donut`),ag(),cN(2276,` e `),Tl(2277,`code`),cN(2278,`pie`),ag(),cN(2279,`, espera-se `),Tl(2280,`em`),cN(2281,`number`),ag(),cN(2282,`;`),ag(),Tl(2283,`li`),cN(2284,`Para gráficos dos tipos `),Tl(2285,`code`),cN(2286,`area`),ag(),cN(2287,`, `),Tl(2288,`code`),cN(2289,`bar`),ag(),cN(2290,`, `),Tl(2291,`code`),cN(2292,`column`),ag(),cN(2293,`, `),Tl(2294,`code`),cN(2295,`line`),ag(),cN(2296,` e `),Tl(2297,`code`),cN(2298,`radar`),ag(),cN(2299,`, espera-se um `),Tl(2300,`em`),cN(2301,`array`),ag(),cN(2302,` de `),Tl(2303,`code`),cN(2304,`data`),ag(),cN(2305,`.`),ag()(),Tl(2306,`blockquote`)(2307,`p`),cN(2308,`Se passado valor `),Tl(2309,`code`),cN(2310,`null`),ag(),cN(2311,` em determinado item da lista, a iteração irá ignorá-lo.`),ag()()()(),Tl(2312,`tr`,15)(2313,`td`,16)(2314,`div`,17)(2315,`span`,18),cN(2316,` from`),Gl(2317,`br`),ag()()(),Tl(2318,`td`,19)(2319,`code`,27),cN(2320,`number`),ag()(),Tl(2321,`td`,23)(2322,`em`)(2323,`strong`),cN(2324,`(opcional)`),ag()(),Tl(2325,`p`),cN(2326,`Alcance inicial da cor.`),ag(),Tl(2327,`blockquote`)(2328,`p`),cN(2329,`Propriedade válida para gráfico do tipo `),Tl(2330,`code`),cN(2331,`Gauge`),ag(),cN(2332,`.`),ag()()()(),Tl(2333,`tr`,15)(2334,`td`,16)(2335,`div`,17)(2336,`span`,18),cN(2337,` label`),Gl(2338,`br`),ag()()(),Tl(2339,`td`,19)(2340,`code`,35),cN(2341,`string`),ag()(),Tl(2342,`td`,23)(2343,`em`)(2344,`strong`),cN(2345,`(opcional)`),ag()(),Tl(2346,`p`),cN(2347,`Rótulo referência da série.`),ag()()(),Tl(2348,`tr`,15)(2349,`td`,16)(2350,`div`,17)(2351,`span`,18),cN(2352,` stackGroupName`),Gl(2353,`br`),ag()()(),Tl(2354,`td`,19)(2355,`code`,35),cN(2356,`string`),ag()(),Tl(2357,`td`,23)(2358,`em`)(2359,`strong`),cN(2360,`(opcional)`),ag()(),Tl(2361,`p`),cN(2362,`Agrupa as séries em barras ou colunas que receberem o mesmo `),Tl(2363,`code`),cN(2364,`stackGroupName`),ag(),cN(2365,`. Exemplo:`),ag(),Tl(2366,`ul`)(2367,`li`),cN(2368,`Serie A: `),Tl(2369,`code`),cN(2370,`{ data: 500, stackGroupName: 'group1' ... }`),ag(),cN(2371,`;`),ag(),Tl(2372,`li`),cN(2373,`Série B: `),Tl(2374,`code`),cN(2375,`{ data: 200, stackGroupName: 'group1' ... }`),ag(),cN(2376,`.`),ag(),Tl(2377,`li`),cN(2378,`Série C: `),Tl(2379,`code`),cN(2380,`{ data: 100, stackGroupName: 'group2' ... }`),ag(),cN(2381,`.`),ag(),Tl(2382,`li`),cN(2383,`Série D: `),Tl(2384,`code`),cN(2385,`{ data: 400, stackGroupName: 'group2' ... }`),ag(),cN(2386,`.`),ag()(),Tl(2387,`p`),cN(2388,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),ag(),Tl(2389,`blockquote`)(2390,`p`),cN(2391,`Válido para gráfico do tipo `),Tl(2392,`code`),cN(2393,`Column`),ag(),cN(2394,` e `),Tl(2395,`code`),cN(2396,`Bar`),ag(),cN(2397,`. Essa propriedade é ignorada caso a propriedade `),Tl(2398,`code`),cN(2399,`stacked`),ag(),cN(2400,` da interface `),Tl(2401,`code`),cN(2402,`PoChartOptions`),ag(),cN(2403,` esteja como `),Tl(2404,`code`),cN(2405,`true`),ag(),cN(2406,`.`),ag()(),Tl(2407,`blockquote`)(2408,`p`),cN(2409,`Essa propriedade habilita a propriedade `),Tl(2410,`code`),cN(2411,`p-data-label`),ag(),cN(2412,` por padrão, podendo ser desabilitada passando `),Tl(2413,`code`),cN(2414,`[p-data-label]={ fixed: false }`),ag(),cN(2415,`.`),ag()()()(),Tl(2416,`tr`,15)(2417,`td`,16)(2418,`div`,17)(2419,`span`,18),cN(2420,` to`),Gl(2421,`br`),ag()()(),Tl(2422,`td`,19)(2423,`code`,27),cN(2424,`number`),ag()(),Tl(2425,`td`,23)(2426,`em`)(2427,`strong`),cN(2428,`(opcional)`),ag()(),Tl(2429,`p`),cN(2430,`Alcance final da cor.`),ag(),Tl(2431,`blockquote`)(2432,`p`),cN(2433,`Propriedade válida para gráfico do tipo `),Tl(2434,`code`),cN(2435,`Gauge`),ag(),cN(2436,`.`),ag()()()(),Tl(2437,`tr`,15)(2438,`td`,16)(2439,`div`,17)(2440,`span`,18),cN(2441,` tooltip`),Gl(2442,`br`),ag()()(),Tl(2443,`td`,19)(2444,`code`,35),cN(2445,`string `),ag(),Tl(2446,`code`,67),cN(2447,` ((params: any) => string)`),ag()(),Tl(2448,`td`,23)(2449,`em`)(2450,`strong`),cN(2451,`(opcional)`),ag()(),Tl(2452,`p`),cN(2453,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),Tl(2454,`em`),cN(2455,`chart`),ag(),cN(2456,`.`),ag(),Tl(2457,`p`),cN(2458,`Formatos aceitos:`),ag(),Tl(2459,`ul`)(2460,`li`)(2461,`p`)(2462,`strong`),cN(2463,`string`),ag(),cN(2464,`: pode conter marcadores dinâmicos e HTML simples.`),ag()(),Tl(2465,`li`)(2466,`p`),cN(2467,`Marcadores disponíveis:`),ag()(),Tl(2468,`li`)(2469,`p`)(2470,`code`),cN(2471,`{name}`),ag(),cN(2472,` → Nome do item/categoria.`),ag()(),Tl(2473,`li`)(2474,`p`)(2475,`code`),cN(2476,`{seriesName}`),ag(),cN(2477,` → Nome da série.`),ag()(),Tl(2478,`li`)(2479,`p`)(2480,`code`),cN(2481,`{value}`),ag(),cN(2482,` → Valor correspondente.`),ag()(),Tl(2483,`li`)(2484,`p`)(2485,`strong`),cN(2486,`function`),ag(),cN(2487,`: função que recebe o objeto `),Tl(2488,`code`),cN(2489,`params`),ag(),cN(2490,` e deve retornar uma `),Tl(2491,`em`),cN(2492,`string`),ag(),cN(2493,` com o conteúdo da tooltip.`),ag()()(),Tl(2494,`blockquote`)(2495,`p`),cN(2496,`É possível utilizar marcação HTML simples (`),Tl(2497,`code`),cN(2498,`<b>`),ag(),cN(2499,`, `),Tl(2500,`code`),cN(2501,`<i>`),ag(),cN(2502,`, `),Tl(2503,`code`),cN(2504,`<br>`),ag(),cN(2505,`, `),Tl(2506,`code`),cN(2507,`<hr>`),ag(),cN(2508,`, etc.) que será interpretada via `),Tl(2509,`code`),cN(2510,`innerHTML`),ag(),cN(2511,`.`),ag()(),Tl(2512,`blockquote`)(2513,`p`),cN(2514,`Formatação customizada (será convertido internamente para HTML):`),ag()(),Tl(2515,`ul`)(2516,`li`)(2517,`code`),cN(2518,`\\n`),ag(),cN(2519,` → quebra de linha (`),Tl(2520,`code`),cN(2521,`<br>`),ag(),cN(2522,`).`),ag(),Tl(2523,`li`)(2524,`code`),cN(2525,`**texto**`),ag(),cN(2526,` → negrito (`),Tl(2527,`code`),cN(2528,`<b>`),ag(),cN(2529,`).`),ag(),Tl(2530,`li`)(2531,`code`),cN(2532,`__texto__`),ag(),cN(2533,` → itálico (`),Tl(2534,`code`),cN(2535,`<i>`),ag(),cN(2536,`).`),ag()(),Tl(2537,`blockquote`)(2538,`p`),cN(2539,`Caso não seja informado um valor para o `),Tl(2540,`em`),cN(2541,`tooltip`),ag(),cN(2542,`, será exibido da seguinte forma:`),ag()(),Tl(2543,`ul`)(2544,`li`)(2545,`code`),cN(2546,`donut`),ag(),cN(2547,`, `),Tl(2548,`code`),cN(2549,`label`),ag(),cN(2550,`: valor proporcional ao total em porcentagem.`),ag(),Tl(2551,`li`)(2552,`code`),cN(2553,`radar`),ag(),cN(2554,`: nome da série, o nome do indicator e os valores correspondentes.`),ag(),Tl(2555,`li`)(2556,`code`),cN(2557,`area`),ag(),cN(2558,`, `),Tl(2559,`code`),cN(2560,`bar`),ag(),cN(2561,`, `),Tl(2562,`code`),cN(2563,`column`),ag(),cN(2564,`, `),Tl(2565,`code`),cN(2566,`line`),ag(),cN(2567,` e `),Tl(2568,`code`),cN(2569,`pie`),ag(),cN(2570,`: `),Tl(2571,`code`),cN(2572,`label`),ag(),cN(2573,`: `),Tl(2574,`code`),cN(2575,`data`),ag(),cN(2576,`.`),ag()(),Tl(2577,`h3`),cN(2578,`Exemplos:`),ag(),Tl(2579,`p`)(2580,`strong`),cN(2581,`Usando string com placeholders:`),ag()(),Tl(2582,`pre`)(2583,`code`,68),cN(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),ag()(),Tl(2585,`p`)(2586,`strong`),cN(2587,`Usando função de callback:`),ag()(),Tl(2588,`pre`)(2589,`code`,68),cN(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),ag()()()(),Tl(2591,`tr`,15)(2592,`td`,16)(2593,`div`,17)(2594,`span`,18),cN(2595,` type`),Gl(2596,`br`),ag()()(),Tl(2597,`td`,19)(2598,`code`,36),cN(2599,`PoChartType`),ag()(),Tl(2600,`td`,23)(2601,`em`)(2602,`strong`),cN(2603,`(opcional)`),ag()(),Tl(2604,`p`),cN(2605,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),Tl(2606,`code`),cN(2607,`column`),ag(),cN(2608,` e `),Tl(2609,`code`),cN(2610,`line`),ag(),cN(2611,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),ag(),Tl(2612,`ul`)(2613,`li`),cN(2614,`Serie A: `),Tl(2615,`code`),cN(2616,`{ type: ChartType.Column, data: ... }`),ag(),cN(2617,`;`),ag(),Tl(2618,`li`),cN(2619,`Série B: `),Tl(2620,`code`),cN(2621,`{ type: ChartType.Line, data: ... }`),ag(),cN(2622,`.`),ag()(),Tl(2623,`p`),cN(2624,`Se tanto `),Tl(2625,`code`),cN(2626,`p-type`),ag(),cN(2627,` quanto `),Tl(2628,`code`),cN(2629,`{ type }`),ag(),cN(2630,` forem ignorados, o padrão gerado pelo componente será:`),ag(),Tl(2631,`ul`)(2632,`li`)(2633,`code`),cN(2634,`column`),ag(),cN(2635,`: se `),Tl(2636,`code`),cN(2637,`data`),ag(),cN(2638,` receber `),Tl(2639,`code`),cN(2640,`Array<number>`),ag(),cN(2641,`;`),ag(),Tl(2642,`li`)(2643,`code`),cN(2644,`pie`),ag(),cN(2645,`: se `),Tl(2646,`code`),cN(2647,`data`),ag(),cN(2648,` for `),Tl(2649,`em`),cN(2650,`number`),ag(),cN(2651,`.`),ag()(),Tl(2652,`blockquote`)(2653,`p`),cN(2654,`Se utilizada a propriedade `),Tl(2655,`code`),cN(2656,`p-type`),ag(),cN(2657,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),Tl(2658,`code`),cN(2659,`{type}`),ag(),cN(2660,` da primeira série sobrescreverá o valor definido em `),Tl(2661,`code`),cN(2662,`p-type`),ag(),cN(2663,`.`),ag()(),Tl(2664,`blockquote`)(2665,`p`),cN(2666,`O componente só exibirá as séries que tiverem o mesmo `),Tl(2667,`code`),cN(2668,`type`),ag(),cN(2669,` definido, exceto para mesclagem para tipos `),Tl(2670,`code`),cN(2671,`column`),ag(),cN(2672,` e `),Tl(2673,`code`),cN(2674,`line`),ag(),cN(2675,`.`),ag()()()()(),Tl(2676,`h3`),cN(2677,`Enums`),ag(),Tl(2678,`h4`,4)(2679,`code`,5),cN(2680,`PoChartLabelFormat`),ag()(),Tl(2681,`div`,2)(2682,`p`)(2683,`em`),cN(2684,`Enum`),ag(),Tl(2685,`code`),cN(2686,`PoChartLabelFormat`),ag(),cN(2687,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),ag()(),Tl(2688,`h4`,11),cN(2689,`Propriedades`),ag(),Tl(2690,`table`,12)(2691,`tr`,13)(2692,`th`,14),cN(2693,`Nome`),ag(),Tl(2694,`th`,14),cN(2695,`Descrição`),ag()(),Tl(2696,`tr`,15)(2697,`td`,16)(2698,`div`,17)(2699,`span`,18),cN(2700,` Number`),Gl(2701,`br`),ag()()(),Tl(2702,`td`,23)(2703,`p`),cN(2704,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),Tl(2705,`code`),cN(2706,`'1.2-2'`),ag(),cN(2707,` da `),Tl(2708,`a`,69),cN(2709,`DecimalPipe`),ag(),cN(2710,`.`),ag()()(),Tl(2711,`tr`,15)(2712,`td`,16)(2713,`div`,17)(2714,`span`,18),cN(2715,` Currency`),Gl(2716,`br`),ag()()(),Tl(2717,`td`,23)(2718,`p`),cN(2719,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),Tl(2720,`a`,70),cN(2721,`DEFAULT_CURRENCY_CODE`),ag(),cN(2722,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),Tl(2723,`a`,71),cN(2724,`LOCALE_ID`),ag(),cN(2725,` da aplicação. A configuração pode ser feita da seguinte forma:`),ag(),Tl(2726,`pre`)(2727,`code`),cN(2728,`import { LOCALE_ID } from '@angular/core';
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
`),ag()()()()(),Tl(2729,`h4`,4)(2730,`code`,5),cN(2731,`PoChartType`),ag()(),Tl(2732,`div`,2)(2733,`p`)(2734,`em`),cN(2735,`Enum`),ag(),Tl(2736,`code`),cN(2737,`PoChartType`),ag(),cN(2738,` para especificação dos tipos de gráficos.`),ag()(),Tl(2739,`h4`,11),cN(2740,`Propriedades`),ag(),Tl(2741,`table`,12)(2742,`tr`,13)(2743,`th`,14),cN(2744,`Nome`),ag(),Tl(2745,`th`,14),cN(2746,`Descrição`),ag()(),Tl(2747,`tr`,15)(2748,`td`,16)(2749,`div`,17)(2750,`span`,18),cN(2751,` Area`),Gl(2752,`br`),ag()()(),Tl(2753,`td`,23)(2754,`p`),cN(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),ag()()(),Tl(2756,`tr`,15)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),cN(2760,` Donut`),Gl(2761,`br`),ag()()(),Tl(2762,`td`,23)(2763,`p`),cN(2764,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),ag()()(),Tl(2765,`tr`,15)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),cN(2769,` Pie`),Gl(2770,`br`),ag()()(),Tl(2771,`td`,23)(2772,`p`),cN(2773,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),ag()()(),Tl(2774,`tr`,15)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),cN(2778,` Line`),Gl(2779,`br`),ag()()(),Tl(2780,`td`,23)(2781,`p`),cN(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Tl(2783,`code`),cN(2784,`column`),ag(),cN(2785,` e `),Tl(2786,`code`),cN(2787,`area`),ag(),cN(2788,`, definindo-se o tipo através da propriedade `),Tl(2789,`code`),cN(2790,`PoChartSerie.type`),ag(),cN(2791,`.`),ag()()(),Tl(2792,`tr`,15)(2793,`td`,16)(2794,`div`,17)(2795,`span`,18),cN(2796,` Column`),Gl(2797,`br`),ag()()(),Tl(2798,`td`,23)(2799,`p`),cN(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),ag()()(),Tl(2801,`tr`,15)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),cN(2805,` Bar`),Gl(2806,`br`),ag()()(),Tl(2807,`td`,23)(2808,`p`),cN(2809,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),ag()()(),Tl(2810,`tr`,15)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),cN(2814,` Gauge`),Gl(2815,`br`),ag()()(),Tl(2816,`td`,23)(2817,`p`),cN(2818,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),ag(),Tl(2819,`ul`)(2820,`li`),cN(2821,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),ag(),Tl(2822,`li`),cN(2823,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),ag()()()(),Tl(2824,`tr`,15)(2825,`td`,16)(2826,`div`,17)(2827,`span`,18),cN(2828,` Radar`),Gl(2829,`br`),ag()()(),Tl(2830,`td`,23)(2831,`p`),cN(2832,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return r})();var _t=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||r)(w(Xn),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Chart`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(d,i){d&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-chart-doc`),ag(),Tl(4,`po-tab`,3),ht$1(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-chart-basic-view`)(6,`sample-po-chart-labs-view`)(7,`sample-po-chart-coffee-ranking-view`)(8,`sample-po-chart-stacked-view`)(9,`sample-po-chart-summary-view`)(10,`sample-po-chart-world-exports-view`)(11,`sample-po-chart-technology-skill-view`),ag()()()),d&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,fe,ve,Pe,we,Me,ke,Ae,Re],encapsulation:2,changeDetection:1})}return r})()}];var Ge=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[bL.forChild(_t),bL]})}return r})();var yn=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[ar,Ge]})}return r})();export{yn as DocPoChartModule};