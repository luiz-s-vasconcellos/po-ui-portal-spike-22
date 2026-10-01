import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Wx,Br as RE,C as Ca,Ct as Z5,Di as he,Dt as aae,Hn as AN,Kn as BP,Li as kL,M as Ete,Q as Pze,Qi as pt$1,Qt as m4,R as Ic,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Ur as Rx,Vr as RN,Wi as mg,Wn as Ax,Wt as ioe,Xn as C9,Yn as Bx,Zt as lze,_a as xN,ai as aN,an as p4,ci as be,dr as Hp,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,un as roe,vi as f,vr as Jv,wt as _4}from"./main-LIMZAZLW.js";var Be=()=>({label:`Angular`,data:100});var We=()=>({label:`React`,data:10});var Fe=(r,W)=>[r,W];var Ce=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&Kc(0,`po-chart`,0),d&2&&cE(`p-series`,xN(3,Fe,RN(1,Be),RN(2,We)))},dependencies:[lze],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r});var fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Chart Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-chart-basic`),ug(),Kc(23,`hr`)),d&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:`fillPoints`,label:`fillPoints`});var q=r=>[r];var He=()=>({label:`legend`,value:`legend`});var Ze=()=>({label:`roseType`,value:`roseType`});var Ye=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var je=()=>({label:`pointer`,value:`pointer`});var Ue=()=>({label:`stacked`,value:`stacked`});var Je=()=>({value:`fixed`,label:`Fixed`});function Xe(r,W){if(r&1){let l=Bx();Ac(0,`po-checkbox-group`,54),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),e_(i)}),pt$1(`p-change`,function(){Jv(l);let i=Wx();return e_(i.changeDataLabelOptions())}),ug(),p0()}if(r&2){let l=Wx();cE(`p-options`,AN(3,q,RN(2,Je))),TE(`ngModel`,l.selectedValuesDataLabel),m0()}}function Qe(r,W){if(r&1){let l=Bx();Ac(0,`po-number`,55),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.valueGauge,i)||(s.valueGauge=i),e_(i)}),pt$1(`p-change`,function(i){Jv(l);let s=Wx();return e_(s.changeValueGauge(i))}),ug(),p0()}if(r&2){let l=Wx();TE(`ngModel`,l.valueGauge),m0()}}function Ke(r,W){if(r&1){let l=Bx();Ac(0,`po-radio-group`,56),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.selectedShapeOption,i)||(s.selectedShapeOption=i),e_(i)}),ug(),p0(),Ac(1,`po-switch`,57),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.selectedSplitArea,i)||(s.selectedSplitArea=i),e_(i)}),ug(),p0(),Ac(2,`po-switch`,58),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),e_(i)}),ug(),p0()}if(r&2){let l=Wx();cE(`p-options`,l.optionsShapeOption),TE(`ngModel`,l.selectedShapeOption),m0(),Hp(),TE(`ngModel`,l.selectedSplitArea),m0(),Hp(),TE(`ngModel`,l.selectedAreaStyle),m0()}}function $e(r,W){if(r&1){let l=Bx();Ac(0,`po-input`,59),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.data,i)||(s.data=i),e_(i)}),ug(),p0()}if(r&2){let l=Wx();TE(`ngModel`,l.data),m0()}}function et(r,W){if(r&1){let l=Bx();Ac(0,`po-input`,60),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.stackGroupName,i)||(s.stackGroupName=i),e_(i)}),ug(),p0()}if(r&2){let l=Wx();TE(`ngModel`,l.stackGroupName),m0()}}function tt(r,W){if(r&1){let l=Bx();Ac(0,`po-number`,61),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.fromGauge,i)||(s.fromGauge=i),e_(i)}),ug(),p0()}if(r&2){let l=Wx();TE(`ngModel`,l.fromGauge),m0()}}function nt(r,W){if(r&1){let l=Bx();Ac(0,`po-number`,62),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.toGauge,i)||(s.toGauge=i),e_(i)}),ug(),p0()}if(r&2){let l=Wx();TE(`ngModel`,l.toGauge),m0()}}function it(r,W){if(r&1){let l=Bx();Ac(0,`div`,3)(1,`po-button`,63),pt$1(`p-click`,function(){Jv(l);let i=Wx();return e_(i.addData())}),ug()()}}function ot(r,W){if(r&1){let l=Bx();Ac(0,`po-number`,64),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.min,i)||(s.min=i),e_(i)}),ug(),p0(),Ac(1,`po-number`,65),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.max,i)||(s.max=i),e_(i)}),ug(),p0(),Ac(2,`po-input`,66),RE(`ngModelChange`,function(i){Jv(l);let s=Wx();return DN(s.colorIndicator,i)||(s.colorIndicator=i),e_(i)}),ug(),p0(),Ac(3,`div`,3)(4,`po-button`,67),pt$1(`p-click`,function(){Jv(l);let i=Wx();return e_(i.addData())}),ug()()}if(r&2){let l=Wx();TE(`ngModel`,l.min),m0(),Hp(),TE(`ngModel`,l.max),m0(),Hp(),TE(`ngModel`,l.colorIndicator),m0(),Hp(2),cE(`p-disabled`,l.isTypeRadar&&!l.categories)}}var ye=(()=>{class r$1{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:Ca.Line},{label:`Area`,value:Ca.Area},{label:`Bar`,value:Ca.Bar},{label:`Column`,value:Ca.Column},{label:`Donut`,value:Ca.Donut},{label:`Pie`,value:Ca.Pie},{label:`Gauge`,value:Ca.Gauge},{label:`Radar`,value:Ca.Radar}];labelTypeOptions=[{label:`Number`,value:Z5.Number},{label:`Currency`,value:Z5.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:l})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===Ca.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===Ca.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=Ca.Gauge,this.type=Ca.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=Ca.Radar,this.type=Ca.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=r(r({},this.options),l?r({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===Ca.Line||this.type===Ca.Area||this.type===Ca.Column||this.type===Ca.Bar||this.type===Ca.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static ɵfac=function(d){return new(d||r$1)};static ɵcmp=Hn({type:r$1,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:66,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let s=Bx();Ac(0,`po-chart`,1),pt$1(`p-series-click`,function(a){return i.changeEvent(`p-series-click`,a)})(`p-series-hover`,function(a){return i.changeEvent(`p-series-hover`,a)}),ug(),Kc(1,`po-divider`,2),Ac(2,`div`,3),Kc(3,`po-info`,4),ug(),Kc(4,`po-divider`,5),Ac(5,`form`)(6,`po-select`,6),RE(`ngModelChange`,function(a){return Jv(s),DN(i.type,a)||(i.type=a),e_(a)}),pt$1(`p-change`,function(a){return i.changeType(a)}),ug(),p0(),Ac(7,`po-number`,7),RE(`ngModelChange`,function(a){return Jv(s),DN(i.height,a)||(i.height=a),e_(a)}),ug(),p0(),Ac(8,`po-input`,8),RE(`ngModelChange`,function(a){return Jv(s),DN(i.title,a)||(i.title=a),e_(a)}),ug(),p0(),Rx(9,Xe,1,5,`po-checkbox-group`,9),ug(),Kc(10,`po-divider`,10),Ac(11,`form`,null,0)(13,`div`,3)(14,`po-switch`,11),RE(`ngModelChange`,function(a){return Jv(s),DN(i.isTypeGauge,a)||(i.isTypeGauge=a),e_(a)}),pt$1(`p-change`,function(a){return i.changeSwitchGauge(a)}),ug(),p0(),Ac(15,`po-switch`,12),RE(`ngModelChange`,function(a){return Jv(s),DN(i.isTypeRadar,a)||(i.isTypeRadar=a),e_(a)}),pt$1(`p-change`,function(a){return i.changeSwitchRadar(a)}),ug(),p0(),Rx(16,Qe,1,1,`po-number`,13),Rx(17,Ke,3,4),ug(),Ac(18,`div`,3)(19,`po-input`,14),RE(`ngModelChange`,function(a){return Jv(s),DN(i.label,a)||(i.label=a),e_(a)}),ug(),p0(),Rx(20,$e,1,1,`po-input`,15),Ac(21,`po-select`,16),RE(`ngModelChange`,function(a){return Jv(s),DN(i.serieType,a)||(i.serieType=a),e_(a)}),pt$1(`p-change`,function(a){return i.changeType(a)}),ug(),p0(),Ac(22,`po-input`,17),RE(`ngModelChange`,function(a){return Jv(s),DN(i.tooltip,a)||(i.tooltip=a),e_(a)}),ug(),p0(),Ac(23,`po-input`,18),RE(`ngModelChange`,function(a){return Jv(s),DN(i.color,a)||(i.color=a),e_(a)}),ug(),p0(),Rx(24,et,1,1,`po-input`,19),Rx(25,tt,1,1,`po-number`,20),Rx(26,nt,1,1,`po-number`,21),Rx(27,it,2,0,`div`,3),ug()(),Ac(28,`div`,3),Kc(29,`po-divider`,22),Ac(30,`po-input`,23),RE(`ngModelChange`,function(a){return Jv(s),DN(i.categories,a)||(i.categories=a),e_(a)}),pt$1(`p-blur`,function(){return i.addCategories()}),ug(),p0(),Rx(31,ot,5,4),ug(),Ac(32,`form`)(33,`div`,3),Kc(34,`po-divider`,24),Ac(35,`po-number`,25),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.minRange,a)||(i.options.axis.minRange=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(36,`po-number`,26),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(37,`po-number`,27),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(38,`po-select`,28),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.labelType,a)||(i.options.axis.labelType=a),e_(a)}),pt$1(`p-change`,function(){return i.addOptions()}),ug(),p0(),Ac(39,`po-number`,29),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(40,`po-number`,30),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(41,`po-number`,31),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(42,`po-number`,32),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(43,`po-number`,33),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.innerRadius,a)||(i.options.innerRadius=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(44,`po-number`,34),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.borderRadius,a)||(i.options.borderRadius=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(45,`po-input`,35),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.firstColumnName,a)||(i.options.firstColumnName=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(46,`po-input`,36),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(47,`po-input`,37),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.descriptionChart,a)||(i.options.descriptionChart=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),Ac(48,`po-input`,38),RE(`ngModelChange`,function(a){return Jv(s),DN(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),e_(a)}),pt$1(`p-blur`,function(){return i.addOptions()}),ug(),p0(),ug(),Ac(49,`div`,3)(50,`po-checkbox-group`,39),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),e_(a)}),pt$1(`p-change`,function(){return i.changeHeaderOptions()}),ug(),p0(),Ac(51,`po-checkbox-group`,40),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),e_(a)}),pt$1(`p-change`,function(){return i.changeAxisOptions()}),ug(),p0(),Ac(52,`po-checkbox-group`,41),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),e_(a)}),pt$1(`p-change`,function(){return i.changeDataZoomOptions()}),ug(),p0(),Ac(53,`po-checkbox-group`,42),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),e_(a)}),pt$1(`p-change`,function(){return i.changeFillPointsOptions()}),ug(),p0(),Ac(54,`po-checkbox-group`,43),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),e_(a)}),pt$1(`p-change`,function(){return i.changeLegendOptions()}),ug(),p0(),Ac(55,`po-checkbox-group`,44),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedRoseType,a)||(i.selectedRoseType=a),e_(a)}),pt$1(`p-change`,function(){return i.changeRoseTypeOptions()}),ug(),p0(),Ac(56,`po-checkbox-group`,45),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),e_(a)}),pt$1(`p-change`,function(){return i.changeShowFromToLegend()}),ug(),p0(),Ac(57,`po-checkbox-group`,46),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedPointer,a)||(i.selectedPointer=a),e_(a)}),pt$1(`p-change`,function(){return i.changePointer()}),ug(),p0(),Ac(58,`po-checkbox-group`,47),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedStacked,a)||(i.selectedStacked=a),e_(a)}),pt$1(`p-change`,function(){return i.changeStacked()}),ug(),p0(),Ac(59,`po-radio-group`,48),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),e_(a)}),pt$1(`p-change`,function(){return i.changeLegendVerticalPosition()}),ug(),p0(),Ac(60,`po-radio-group`,49),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),e_(a)}),pt$1(`p-change`,function(){return i.changeLegendPosition()}),ug(),p0(),Ac(61,`po-radio-group`,50),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedLegendType,a)||(i.selectedLegendType=a),e_(a)}),pt$1(`p-change`,function(){return i.changeLegendType()}),ug(),p0(),Ac(62,`po-radio-group`,51),RE(`ngModelChange`,function(a){return Jv(s),DN(i.selectedRendererOption,a)||(i.selectedRendererOption=a),e_(a)}),pt$1(`p-change`,function(){return i.changeRendererOption()}),ug(),p0(),ug(),Kc(63,`po-divider`,52),Ac(64,`div`,3)(65,`po-button`,53),pt$1(`p-click`,function(){return i.restore()}),ug()()()}d&2&&(cE(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),Hp(3),cE(`p-value`,i.event),Hp(3),TE(`ngModel`,i.type),cE(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),m0(),Hp(),TE(`ngModel`,i.height),m0(),Hp(),TE(`ngModel`,i.title),m0(),Hp(),Ax(i.isTypeGrid()?9:-1),Hp(5),TE(`ngModel`,i.isTypeGauge),m0(),Hp(),TE(`ngModel`,i.isTypeRadar),m0(),Hp(),Ax(i.isTypeGauge?16:-1),Hp(),Ax(i.isTypeRadar?17:-1),Hp(2),TE(`ngModel`,i.label),m0(),Hp(),Ax(i.isTypeGauge?-1:20),Hp(),TE(`ngModel`,i.serieType),cE(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),m0(),Hp(),cE(`p-disabled`,i.disabledTooltip),TE(`ngModel`,i.tooltip),m0(),Hp(),TE(`ngModel`,i.color),m0(),Hp(),Ax(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?24:-1),Hp(),Ax(i.isTypeGauge?25:-1),Hp(),Ax(i.isTypeGauge?26:-1),Hp(),Ax(i.isTypeRadar?-1:27),Hp(3),aN(i.isTypeRadar?`po-md-3`:`po-md-4`),cE(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),TE(`ngModel`,i.categories),m0(),Hp(),Ax(i.isTypeRadar?31:-1),Hp(4),TE(`ngModel`,i.options.axis.minRange),m0(),Hp(),TE(`ngModel`,i.options.axis.maxRange),m0(),Hp(),TE(`ngModel`,i.options.axis.gridLines),m0(),Hp(),cE(`p-options`,i.labelTypeOptions),TE(`ngModel`,i.options.axis.labelType),m0(),Hp(),TE(`ngModel`,i.options.axis.paddingBottom),m0(),Hp(),TE(`ngModel`,i.options.axis.paddingLeft),m0(),Hp(),TE(`ngModel`,i.options.axis.paddingRight),m0(),Hp(),TE(`ngModel`,i.options.axis.rotateLegend),m0(),Hp(),TE(`ngModel`,i.options.innerRadius),m0(),Hp(),TE(`ngModel`,i.options.borderRadius),m0(),Hp(),TE(`ngModel`,i.options.firstColumnName),m0(),Hp(),TE(`ngModel`,i.options.textCenterGraph),m0(),Hp(),TE(`ngModel`,i.options.descriptionChart),m0(),Hp(),TE(`ngModel`,i.options.subtitleGauge),m0(),Hp(2),cE(`p-columns`,2)(`p-options`,i.optionsHeader),TE(`ngModel`,i.selectedValuesHeader),m0(),Hp(),cE(`p-columns`,2)(`p-options`,i.optionsAxis),TE(`ngModel`,i.selectedValuesAxis),m0(),Hp(),cE(`p-columns`,2)(`p-options`,i.optionsDataZoom),TE(`ngModel`,i.selectedValuesDataZoom),m0(),Hp(),cE(`p-columns`,1)(`p-options`,AN(83,q,RN(82,ze))),TE(`ngModel`,i.selectedValuesFillPoints),m0(),Hp(),cE(`p-options`,AN(86,q,RN(85,He))),TE(`ngModel`,i.selectedValuesLegend),m0(),Hp(),cE(`p-options`,AN(89,q,RN(88,Ze))),TE(`ngModel`,i.selectedRoseType),m0(),Hp(),cE(`p-options`,AN(92,q,RN(91,Ye))),TE(`ngModel`,i.selectedFromToLegend),m0(),Hp(),cE(`p-options`,AN(95,q,RN(94,je))),TE(`ngModel`,i.selectedPointer),m0(),Hp(),cE(`p-options`,AN(98,q,RN(97,Ue))),TE(`ngModel`,i.selectedStacked),m0(),Hp(),cE(`p-options`,i.optionsLegendVerticalPosition),TE(`ngModel`,i.selectedLegendVerticalPosition),m0(),Hp(),cE(`p-options`,i.optionsLegendPosition),TE(`ngModel`,i.selectedLegendPosition),m0(),Hp(),cE(`p-options`,i.optionsLegendType),TE(`ngModel`,i.selectedLegendType),m0(),Hp(),cE(`p-options`,i.optionsRendererOption),TE(`ngModel`,i.selectedRendererOption),m0())},dependencies:[b9,D9,C9,BP,LP,ni,lze,ob,t4,_4,Jne,Cte,ioe,p4,roe],encapsulation:2,changeDetection:1})}return r$1})();var rt=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Chart Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-chart
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-chart-labs`),ug(),Kc(23,`hr`)),d&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,rt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=f(Ete);participationByCountryInWorldExportsType=Ca.Line;evolutionOfCoffeeAndSomeCompetitorsType=Ca.Column;coffeConsumingChartType=Ca.Donut;consumptionPerCapitaType=Ca.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:Ca.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:Ca.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:Ca.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:Ca.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:Ca.Column},{label:`2017`,data:[93,52,18],type:Ca.Column},{label:`2020`,data:[95,21,-17],type:Ca.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:Ca.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:Z5.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:Z5.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,`_blank`)}showMeTheDates(l){this.poAlert.alert({title:`Statistic`,message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[be([Ete])],decls:28,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,1,`po-md-12`,`po-mt-2`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[`p-title`,`Top 5 coffee producing countries (in tons)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,1,`po-md-6`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[1,`po-md-6`,`po-mt-2`],[`p-height`,`198`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(Ac(0,`div`,0)(1,`div`,1)(2,`div`,0),Kc(3,`po-chart`,2)(4,`po-chart`,3),ug()(),Ac(5,`div`,1),Kc(6,`po-chart`,4),ug(),Ac(7,`div`,5)(8,`po-chart`,6),pt$1(`p-series-click`,function(m){return i.searchMore(m)}),ug(),Ac(9,`po-chart`,7),pt$1(`p-series-click`,function(m){return i.showMeTheDates(m)}),ug()(),Ac(10,`div`,0),Kc(11,`po-chart`,8),Ac(12,`div`,9)(13,`po-widget`,10)(14,`div`,11),vN(15,`66 billion`),ug(),Ac(16,`div`,12),vN(17,`cups of coffee are consumed per year in U.S.`),ug()(),Ac(18,`po-widget`,10)(19,`div`,11),vN(20,`2nd most`),ug(),Ac(21,`div`,12),vN(22,`traded commodity in the world second to Oil.`),ug()()()()(),Ac(23,`div`,0)(24,`po-container`,13)(25,`div`,14),vN(26,`Top 10 Largest Coffee Chains in the World`),ug(),Kc(27,`po-table`,15),ug()()),d&2&&(Hp(3),cE(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),Hp(),cE(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),Hp(2),cE(`p-height`,816)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),Hp(2),cE(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),Hp(),cE(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),Hp(2),cE(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),Hp(16),cE(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[lze,Ic,m4,Pze],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r});var Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Chart - Coffee Ranking`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-chart-coffee-ranking`),ug(),Kc(23,`hr`)),d&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,pt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,_e],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{typeBar=Ca.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:6,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[`p-title`,`Average Temperature by Region`,1,`po-lg-6`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,1,`po-lg-6`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(Ac(0,`po-container`)(1,`div`,0),vN(2,`Energy and Climate Analysis`),ug(),Ac(3,`div`,1),Kc(4,`po-chart`,2)(5,`po-chart`,3),ug()()),d&2&&(Hp(4),cE(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),Hp(),cE(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[lze,Ic],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Chart - Stacked`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-chart-stacked`),ug(),Kc(23,`hr`)),d&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ct,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Te],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=Ca.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:8,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(Ac(0,`po-container`)(1,`div`,0),vN(2,`Sales Performance`),ug(),Ac(3,`div`,1)(4,`div`,2),Kc(5,`po-chart`,3),ug(),Ac(6,`div`,2),Kc(7,`po-chart`,4),ug()()()),d&2&&(Hp(5),cE(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),Hp(2),cE(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[lze,Ic],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r});var Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Chart - Summary`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-chart-summary`),ug(),Kc(23,`hr`)),d&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ht,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Le],encapsulation:2,changeDetection:1})}return r})();var De=(()=>{class r{participationByCountryInWorldExportsType=Ca.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:2,vars:5,consts:[[1,`po-row`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(Ac(0,`div`,0),Kc(1,`po-chart`,1),ug()),d&2&&(Hp(),cE(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[lze],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r});var ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Chart - World Exports`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-chart-world-exports`),ug(),Kc(23,`hr`)),d&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,bt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,De],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=Ca.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:3,vars:6,consts:[[1,`po-row`],[`p-title`,`Technology Skill Assessment`,1,`po-md-6`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,1,`po-md-6`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(Ac(0,`div`,0),Kc(1,`po-chart`,1)(2,`po-chart`,2),ug()),d&2&&(Hp(),cE(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),Hp(),cE(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[lze],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Chart - Radar`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-chart-technology-skill`),ug(),Kc(23,`hr`)),d&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ft,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2833,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`]],template:function(d,i){d&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoChartModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-chart`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoChartComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`O `),Ac(18,`code`),vN(19,`po-chart`),ug(),vN(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),ug(),Ac(21,`p`),vN(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),ug(),Ac(23,`p`),vN(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),ug(),Ac(25,`p`),vN(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Ac(27,`em`),vN(28,`mouse`),ug(),vN(29,` sobre o elemento.`),ug(),Ac(30,`h4`),vN(31,`Guia de uso para Gráficos`),ug(),Ac(32,`blockquote`)(33,`p`),vN(34,`Veja nosso `),Ac(35,`a`,6),vN(36,`guia de uso para gráficos`),ug(),vN(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),ug()(),Ac(38,`h4`),vN(39,`Tokens customizáveis`),ug(),Ac(40,`p`),vN(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(42,`blockquote`)(43,`p`),vN(44,`Para maiores informações, acesse o guia `),Ac(45,`a`,7),vN(46,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(47,`.`),ug()(),Ac(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),vN(52,`Propriedade`),ug(),Ac(53,`th`),vN(54,`Descrição`),ug(),Ac(55,`th`),vN(56,`Valor Padrão`),ug()()(),Ac(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),vN(61,`Chart (po-chart)`),ug()(),Kc(62,`td`)(63,`td`),ug(),Ac(64,`tr`)(65,`td`)(66,`code`),vN(67,`--background-color-grid`),ug()(),Ac(68,`td`),vN(69,`Cor de background dos gráficos`),ug(),Ac(70,`td`)(71,`code`),vN(72,`var(--color-neutral-light-00)`),ug()()(),Ac(73,`tr`)(74,`td`)(75,`code`),vN(76,`--color-description-chart`),ug()(),Ac(77,`td`),vN(78,`Cor da descrição dos gráficos`),ug(),Ac(79,`td`)(80,`code`),vN(81,`var(--color-neutral-dark-70)`),ug()()(),Ac(82,`tr`)(83,`td`)(84,`code`),vN(85,`--font-family-description-chart`),ug()(),Ac(86,`td`),vN(87,`Fonte da descrição dos gráficos`),ug(),Ac(88,`td`)(89,`code`),vN(90,`var(--font-family-theme)`),ug()()(),Ac(91,`tr`)(92,`td`)(93,`code`),vN(94,`--font-size-description-chart`),ug()(),Ac(95,`td`),vN(96,`Tamanho da fonte da descrição dos gráficos`),ug(),Ac(97,`td`)(98,`code`),vN(99,`var(--font-size-sm)`),ug()()(),Ac(100,`tr`)(101,`td`)(102,`code`),vN(103,`--font-weight-description-chart`),ug()(),Ac(104,`td`),vN(105,`Peso da fonte da descrição dos gráficos`),ug(),Ac(106,`td`)(107,`code`),vN(108,`var(--font-weight-normal)`),ug()()(),Ac(109,`tr`)(110,`td`)(111,`strong`),vN(112,`Header (po-chart .po-chart-header )`),ug()(),Kc(113,`td`)(114,`td`),ug(),Ac(115,`tr`)(116,`td`)(117,`code`),vN(118,`--background-color`),ug()(),Ac(119,`td`),vN(120,`Cor de background do cabeçalho`),ug(),Ac(121,`td`)(122,`code`),vN(123,`var(--color-neutral-light-00)`),ug()()(),Ac(124,`tr`)(125,`td`)(126,`code`),vN(127,`--color`),ug()(),Ac(128,`td`),vN(129,`Cor da fonte do cabeçalho`),ug(),Ac(130,`td`)(131,`code`),vN(132,`var(--color-neutral-dark-70)`),ug()()(),Ac(133,`tr`)(134,`td`)(135,`code`),vN(136,`--font-family`),ug()(),Ac(137,`td`),vN(138,`Família tipográfica usada`),ug(),Ac(139,`td`)(140,`code`),vN(141,`var(--font-family-theme)`),ug()()(),Ac(142,`tr`)(143,`td`)(144,`code`),vN(145,`--font-size-title`),ug()(),Ac(146,`td`),vN(147,`Tamanho da fonte`),ug(),Ac(148,`td`)(149,`code`),vN(150,`var(--font-size-default)`),ug()()(),Ac(151,`tr`)(152,`td`)(153,`code`),vN(154,`--font-size-icons`),ug()(),Ac(155,`td`),vN(156,`Tamanho dos ícones`),ug(),Ac(157,`td`)(158,`code`),vN(159,`var(--font-size-md)`),ug()()(),Ac(160,`tr`)(161,`td`)(162,`code`),vN(163,`--font-weight`),ug()(),Ac(164,`td`),vN(165,`Peso da fonte`),ug(),Ac(166,`td`)(167,`code`),vN(168,`var(--font-weight-bold)`),ug()()(),Ac(169,`tr`)(170,`td`)(171,`strong`),vN(172,`Chart (po-chart .po-chart)`),ug()(),Kc(173,`td`)(174,`td`),ug(),Ac(175,`tr`)(176,`td`)(177,`code`),vN(178,`--color-grid`),ug()(),Ac(179,`td`),vN(180,`Cor da linha dos gráficos que possuem eixo`),ug(),Ac(181,`td`)(182,`code`),vN(183,`var(--color-neutral-light-20)`),ug()()(),Ac(184,`tr`)(185,`td`)(186,`code`),vN(187,`--font-family-grid`),ug()(),Ac(188,`td`),vN(189,`Família tipográfica usada nos valores dos eixos`),ug(),Ac(190,`td`)(191,`code`),vN(192,`var(--font-family-theme)`),ug()()(),Ac(193,`tr`)(194,`td`)(195,`code`),vN(196,`--font-size-grid`),ug()(),Ac(197,`td`),vN(198,`Tamanho da fonte usada nos valores dos eixos`),ug(),Ac(199,`td`)(200,`code`),vN(201,`var(--font-size-xs)`),ug()()(),Ac(202,`tr`)(203,`td`)(204,`code`),vN(205,`--font-weight-grid`),ug()(),Ac(206,`td`),vN(207,`Peso da fonte usada nos valores dos eixos`),ug(),Ac(208,`td`)(209,`code`),vN(210,`var(--font-weight-normal)`),ug()()(),Ac(211,`tr`)(212,`td`)(213,`code`),vN(214,`--color-legend`),ug()(),Ac(215,`td`),vN(216,`Cor da fonte da legenda`),ug(),Ac(217,`td`)(218,`code`),vN(219,`var(--color-neutral-dark-70)`),ug()()(),Ac(220,`tr`)(221,`td`)(222,`code`),vN(223,`--color-legend-scroll-icon-active`),ug()(),Ac(224,`td`),vN(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),Ac(226,`code`),vN(227,`scroll`),ug()(),Ac(228,`td`)(229,`code`),vN(230,`var(--color-action-default)`),ug()()(),Ac(231,`tr`)(232,`td`)(233,`code`),vN(234,`--color-legend-scroll-icon-inactive`),ug()(),Ac(235,`td`),vN(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),Ac(237,`code`),vN(238,`scroll`),ug()(),Ac(239,`td`)(240,`code`),vN(241,`var(--color-action-disabled)`),ug()()(),Ac(242,`tr`)(243,`td`)(244,`code`),vN(245,`--border-radius-bar`),ug()(),Ac(246,`td`),vN(247,`Tamanho da borda nos graficos `),Ac(248,`code`),vN(249,`Bar`),ug(),vN(250,` e `),Ac(251,`code`),vN(252,`Column`),ug()(),Ac(253,`td`)(254,`code`),vN(255,`var(--border-radius-none)`),ug()()(),Ac(256,`tr`)(257,`td`)(258,`code`),vN(259,`--border-color`),ug()(),Ac(260,`td`),vN(261,`Cor da borda do gráfico nos Gráficos `),Ac(262,`code`),vN(263,`Donut`),ug(),vN(264,` e `),Ac(265,`code`),vN(266,`Pie`),ug()(),Ac(267,`td`)(268,`code`),vN(269,`var(--color-neutral-light-00)`),ug()()(),Ac(270,`tr`)(271,`td`)(272,`code`),vN(273,`--color-hightlight-value`),ug()(),Ac(274,`td`),vN(275,`Cor do valor de destaque nos Gráficos `),Ac(276,`code`),vN(277,`Donut`),ug(),vN(278,` e `),Ac(279,`code`),vN(280,`Gauge`),ug()(),Ac(281,`td`)(282,`code`),vN(283,`var(--color-neutral-dark-70)`),ug()()(),Ac(284,`tr`)(285,`td`)(286,`code`),vN(287,`--font-family-hightlight-value`),ug()(),Ac(288,`td`),vN(289,`Família tipográfica do valor de destaque nos Gráficos `),Ac(290,`code`),vN(291,`Donut`),ug(),vN(292,` e `),Ac(293,`code`),vN(294,`Gauge`),ug()(),Ac(295,`td`)(296,`code`),vN(297,`var(--font-family-theme)`),ug()()(),Ac(298,`tr`)(299,`td`)(300,`code`),vN(301,`--font-weight-hightlight-value`),ug()(),Ac(302,`td`),vN(303,`Peso da fonte do valor de destaque nos Gráficos `),Ac(304,`code`),vN(305,`Donut`),ug(),vN(306,` e `),Ac(307,`code`),vN(308,`Gauge`),ug()(),Ac(309,`td`)(310,`code`),vN(311,`var(--font-weight-bold)`),ug()()(),Ac(312,`tr`)(313,`td`)(314,`code`),vN(315,`--color-base-gauge`),ug()(),Ac(316,`td`),vN(317,`Cor da base do gráfico `),Ac(318,`code`),vN(319,`Gauge`),ug()(),Ac(320,`td`)(321,`code`),vN(322,`var(--color-neutral-light-20)`),ug()()(),Ac(323,`tr`)(324,`td`)(325,`code`),vN(326,`--color-gauge-pointer-color`),ug()(),Ac(327,`td`),vN(328,`Cor do ponteiro do gráfico `),Ac(329,`code`),vN(330,`Gauge`),ug()(),Ac(331,`td`)(332,`code`),vN(333,`var(--color-neutral-dark-70)`),ug()()(),Ac(334,`tr`)(335,`td`)(336,`code`),vN(337,`--color-chart-line-point-fill`),ug()(),Ac(338,`td`),vN(339,`Cor de dentro do círculo dos gráficos `),Ac(340,`code`),vN(341,`Line`),ug(),vN(342,` e `),Ac(343,`code`),vN(344,`Area`),ug()(),Ac(345,`td`)(346,`code`),vN(347,`var(--color-neutral-light-00)`),ug()()(),Ac(348,`tr`)(349,`td`)(350,`code`),vN(351,`--border-color-radar`),ug()(),Ac(352,`td`),vN(353,`Cor do eixo da grid do gráfico `),Ac(354,`code`),vN(355,`Radar`),ug()(),Ac(356,`td`)(357,`code`),vN(358,`var(--color-neutral-light-30)`),ug()()(),Ac(359,`tr`)(360,`td`)(361,`code`),vN(362,`--color-background-zebra`),ug()(),Ac(363,`td`),vN(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),Ac(365,`code`),vN(366,`Radar`),ug()(),Ac(367,`td`)(368,`code`),vN(369,`var(--color-neutral-light-10)`),ug()()(),Ac(370,`tr`)(371,`td`)(372,`code`),vN(373,`--color-background-line`),ug()(),Ac(374,`td`),vN(375,`Cor das áreas entre as faixas zebradas da grade do `),Ac(376,`code`),vN(377,`Radar`),ug()(),Ac(378,`td`)(379,`code`),vN(380,`none`),ug()()(),Ac(381,`tr`)(382,`td`)(383,`strong`),vN(384,`Wrapper (.po-chart-container-gauge)`),ug()(),Kc(385,`td`)(386,`td`),ug(),Ac(387,`tr`)(388,`td`)(389,`code`),vN(390,`--background-color-container-gauge`),ug()(),Ac(391,`td`),vN(392,`Cor de background do container do gauge`),ug(),Ac(393,`td`)(394,`code`),vN(395,`var(--color-neutral-light-00)`),ug()()()()()(),Ac(396,`div`,8)(397,`h4`,9),vN(398,`Seletor`),ug(),Ac(399,`pre`,10),vN(400,`<po-chart
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
`),ug()(),Ac(401,`h4`,11),vN(402,`Propriedades`),ug(),Ac(403,`table`,12)(404,`tr`,13)(405,`th`,14),vN(406,`Nome`),ug(),Ac(407,`th`,14),vN(408,`Tipo`),ug(),Ac(409,`th`,14),vN(410,`Padrão`),ug(),Ac(411,`th`,14),vN(412,`Descrição`),ug()(),Ac(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),vN(417,` p-categories`),Kc(418,`br`),ug()()(),Ac(419,`td`,19)(420,`code`,20),vN(421,`Array<string> `),ug(),Ac(422,`code`,21),vN(423,` PoChartRadarOptions`),ug()(),Ac(424,`td`,22),vN(425,`-`),ug(),Ac(426,`td`,23)(427,`em`)(428,`strong`),vN(429,`(opcional)`),ug()(),Ac(430,`p`),vN(431,`Define os valores utilizados na construção das categorias do gráfico.`),ug(),Ac(432,`p`),vN(433,`Para gráficos dos tipos `),Ac(434,`em`),vN(435,`bar`),ug(),vN(436,`, `),Ac(437,`em`),vN(438,`area`),ug(),vN(439,`, `),Ac(440,`em`),vN(441,`column`),ug(),vN(442,` e `),Ac(443,`em`),vN(444,`line`),ug(),vN(445,`, representa os nomes das categorias exibidas no eixo.`),ug(),Ac(446,`p`),vN(447,`Para gráficos do tipo `),Ac(448,`em`),vN(449,`radar`),ug(),vN(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Ac(451,`code`),vN(452,`Radar`),ug(),vN(453,`.`),ug(),Ac(454,`blockquote`)(455,`p`),vN(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),ug()(),Ac(457,`blockquote`)(458,`p`),vN(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),ug()()()(),Ac(460,`tr`,15)(461,`td`,16)(462,`div`,17)(463,`span`,18),vN(464,` p-custom-actions`),Kc(465,`br`),ug()()(),Ac(466,`td`,19)(467,`code`,24),vN(468,`Array<PoPopupAction>`),ug()(),Ac(469,`td`,22),vN(470,`-`),ug(),Ac(471,`td`,23)(472,`em`)(473,`strong`),vN(474,`(opcional)`),ug()(),Ac(475,`p`),vN(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),ug()()(),Ac(477,`tr`,15)(478,`td`,16)(479,`div`,17)(480,`span`,18),vN(481,` p-data-label`),Kc(482,`br`),ug()()(),Ac(483,`td`,19)(484,`code`,25),vN(485,`PoChartDataLabel`),ug()(),Ac(486,`td`,22),vN(487,`-`),ug(),Ac(488,`td`,23)(489,`em`)(490,`strong`),vN(491,`(opcional)`),ug()(),Ac(492,`p`),vN(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),ug(),Ac(494,`p`),vN(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),ug(),Ac(496,`ul`)(497,`li`),vN(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),ug(),Ac(499,`li`),vN(500,`O `),Ac(501,`em`),vN(502,`tooltip`),ug(),vN(503,` não será exibido.`),ug(),Ac(504,`li`),vN(505,`Os marcadores (`),Ac(506,`em`),vN(507,`bullets`),ug(),vN(508,`) terão seu estilo ajustado.`),ug(),Ac(509,`li`),vN(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),ug()(),Ac(511,`blockquote`)(512,`p`),vN(513,`Disponível para gráficos do tipo `),Ac(514,`code`),vN(515,`line`),ug(),vN(516,` e `),Ac(517,`code`),vN(518,`radar`),ug(),vN(519,`.`),ug()(),Ac(520,`h4`),vN(521,`Exemplo de utilização:`),ug(),Ac(522,`pre`)(523,`code`,26),vN(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),ug()()()(),Ac(525,`tr`,15)(526,`td`,16)(527,`div`,17)(528,`span`,18),vN(529,` p-height`),Kc(530,`br`),ug()()(),Ac(531,`td`,19)(532,`code`,27),vN(533,`number`),ug()(),Ac(534,`td`,22)(535,`p`)(536,`code`),vN(537,`400`),ug()()(),Ac(538,`td`,23)(539,`em`)(540,`strong`),vN(541,`(opcional)`),ug()(),Ac(542,`p`),vN(543,`Define a altura do gráfico em px.`),ug(),Ac(544,`blockquote`)(545,`p`),vN(546,`No caso do tipo `),Ac(547,`code`),vN(548,`Gauge`),ug(),vN(549,`, o valor padrão é `),Ac(550,`code`),vN(551,`300`),ug(),vN(552,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),ug()()()(),Ac(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),vN(557,` p-literals`),Kc(558,`br`),ug()()(),Ac(559,`td`,19)(560,`code`,28),vN(561,`PoChartLiterals`),ug()(),Ac(562,`td`,22),vN(563,`-`),ug(),Ac(564,`td`,23)(565,`em`)(566,`strong`),vN(567,`(opcional)`),ug()(),Ac(568,`p`),vN(569,`Objeto com as literais usadas no `),Ac(570,`code`),vN(571,`po-chart`),ug(),vN(572,`.`),ug(),Ac(573,`p`),vN(574,`Para utilizar basta passar a literal que deseja customizar:`),ug(),Ac(575,`pre`)(576,`code`),vN(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),ug()(),Ac(578,`p`),vN(579,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),ug(),Ac(580,`pre`)(581,`code`),vN(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),ug()(),Ac(583,`blockquote`)(584,`p`),vN(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(586,`a`,29)(587,`code`),vN(588,`PoI18nService`),ug()(),vN(589,` ou do browser.`),ug()()()(),Ac(590,`tr`,15)(591,`td`,16)(592,`div`,17)(593,`span`,18),vN(594,` p-options`),Kc(595,`br`),ug()()(),Ac(596,`td`,19)(597,`code`,30),vN(598,`PoChartOptions`),ug()(),Ac(599,`td`,22),vN(600,`-`),ug(),Ac(601,`td`,23)(602,`em`)(603,`strong`),vN(604,`(opcional)`),ug()(),Ac(605,`p`),vN(606,`Objeto com as configurações usadas no `),Ac(607,`code`),vN(608,`po-chart`),ug(),vN(609,`.`),ug(),Ac(610,`p`),vN(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Ac(612,`em`),vN(613,`axis`),ug(),vN(614,`) para os gráficos dos tipos `),Ac(615,`code`),vN(616,`area`),ug(),vN(617,`, `),Ac(618,`code`),vN(619,`line`),ug(),vN(620,`, `),Ac(621,`code`),vN(622,`column`),ug(),vN(623,`, `),Ac(624,`code`),vN(625,`bar`),ug(),vN(626,` e `),Ac(627,`code`),vN(628,`radar`),ug(),vN(629,` da seguinte forma:`),ug(),Ac(630,`pre`)(631,`code`),vN(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),ug()()()(),Ac(633,`tr`,15)(634,`td`,16)(635,`div`,17)(636,`span`,18),vN(637,` p-series`),Kc(638,`br`),ug()()(),Ac(639,`td`,19)(640,`code`,31),vN(641,`Array<PoChartSerie>`),ug()(),Ac(642,`td`,22),vN(643,`-`),ug(),Ac(644,`td`,23)(645,`p`),vN(646,`Define os elementos do gráfico que serão criados dinamicamente.`),ug()()(),Ac(647,`tr`,15)(648,`td`,16)(649,`div`,32)(650,`span`,33),vN(651,` (p-series-click)`),Kc(652,`br`),ug()()(),Ac(653,`td`,19)(654,`code`,34),vN(655,`EventEmitter`),ug()(),Ac(656,`td`,22),vN(657,`-`),ug(),Ac(658,`td`,23)(659,`em`)(660,`strong`),vN(661,`(opcional)`),ug()(),Ac(662,`p`),vN(663,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),ug(),Ac(664,`p`),vN(665,`O evento emitirá o seguinte parâmetro:`),ug(),Ac(666,`ul`)(667,`li`)(668,`em`),vN(669,`donut`),ug(),vN(670,` e `),Ac(671,`em`),vN(672,`pie`),ug(),vN(673,`: um objeto contendo a categoria e valor da série.`),ug(),Ac(674,`li`)(675,`em`),vN(676,`radar`),ug(),vN(677,`: um objeto contendo o nome da série e os valores.`),ug(),Ac(678,`li`)(679,`em`),vN(680,`area`),ug(),vN(681,`, `),Ac(682,`em`),vN(683,`line`),ug(),vN(684,`, `),Ac(685,`em`),vN(686,`column`),ug(),vN(687,` e `),Ac(688,`em`),vN(689,`bar`),ug(),vN(690,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),ug()()()(),Ac(691,`tr`,15)(692,`td`,16)(693,`div`,32)(694,`span`,33),vN(695,` (p-series-hover)`),Kc(696,`br`),ug()()(),Ac(697,`td`,19)(698,`code`,34),vN(699,`EventEmitter`),ug()(),Ac(700,`td`,22),vN(701,`-`),ug(),Ac(702,`td`,23)(703,`em`)(704,`strong`),vN(705,`(opcional)`),ug()(),Ac(706,`p`),vN(707,`Evento executado quando o usuário passar o `),Ac(708,`em`),vN(709,`mouse`),ug(),vN(710,` sobre um elemento do gráfico.`),ug(),Ac(711,`p`),vN(712,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),ug(),Ac(713,`ul`)(714,`li`)(715,`em`),vN(716,`donut`),ug(),vN(717,` e `),Ac(718,`em`),vN(719,`pie`),ug(),vN(720,`: um objeto contendo a categoria e valor da série.`),ug(),Ac(721,`li`)(722,`em`),vN(723,`radar`),ug(),vN(724,`: um objeto contendo o nome da série e os valores.`),ug(),Ac(725,`li`)(726,`em`),vN(727,`area`),ug(),vN(728,`, `),Ac(729,`em`),vN(730,`line`),ug(),vN(731,`, `),Ac(732,`em`),vN(733,`column`),ug(),vN(734,` e `),Ac(735,`em`),vN(736,`bar`),ug(),vN(737,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),ug()()()(),Ac(738,`tr`,15)(739,`td`,16)(740,`div`,17)(741,`span`,18),vN(742,` p-title`),Kc(743,`br`),ug()()(),Ac(744,`td`,19)(745,`code`,35),vN(746,`string`),ug()(),Ac(747,`td`,22),vN(748,`-`),ug(),Ac(749,`td`,23)(750,`em`)(751,`strong`),vN(752,`(opcional)`),ug()(),Ac(753,`p`),vN(754,`Define o título do gráfico.`),ug()()(),Ac(755,`tr`,15)(756,`td`,16)(757,`div`,17)(758,`span`,18),vN(759,` p-type`),Kc(760,`br`),ug()()(),Ac(761,`td`,19)(762,`code`,36),vN(763,`PoChartType`),ug()(),Ac(764,`td`,22),vN(765,`-`),ug(),Ac(766,`td`,23)(767,`em`)(768,`strong`),vN(769,`(opcional)`),ug()(),Ac(770,`p`),vN(771,`Define o tipo de gráfico.`),ug(),Ac(772,`p`),vN(773,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),Ac(774,`code`),vN(775,`type`),ug(),vN(776,` conforme a interface `),Ac(777,`code`),vN(778,`PoChartSerie`),ug(),vN(779,`.`),ug(),Ac(780,`blockquote`)(781,`p`),vN(782,`Note que, se houver declaração de tipo de gráfico tanto em `),Ac(783,`code`),vN(784,`p-type`),ug(),vN(785,` quanto em `),Ac(786,`code`),vN(787,`PochartSerie.type`),ug(),vN(788,`, o valor `),Ac(789,`code`),vN(790,`{ type }`),ug(),vN(791,` da primeira série anulará o valor definido em `),Ac(792,`code`),vN(793,`p-type`),ug(),vN(794,`.`),ug()(),Ac(795,`p`),vN(796,`Se não passado valor, o padrão será relativo à primeira série passada em `),Ac(797,`code`),vN(798,`p-series`),ug(),vN(799,`:`),ug(),Ac(800,`ul`)(801,`li`),vN(802,`Se `),Ac(803,`code`),vN(804,`p-series = [{ data: [1,2,3] }]`),ug(),vN(805,`: será `),Ac(806,`code`),vN(807,`PoChartType.Column`),ug(),vN(808,`.`),ug(),Ac(809,`li`),vN(810,`Se `),Ac(811,`code`),vN(812,`p-series = [{ data: 1 }]`),ug(),vN(813,`: será `),Ac(814,`code`),vN(815,`PoChartType.Pie`),ug(),vN(816,`.`),ug()(),Ac(817,`blockquote`)(818,`p`),vN(819,`Veja os valores válidos no `),Ac(820,`em`),vN(821,`enum`),ug(),Ac(822,`code`),vN(823,`PoChartType`),ug(),vN(824,`.`),ug()()()(),Ac(825,`tr`,15)(826,`td`,16)(827,`div`,17)(828,`span`,18),vN(829,` p-value-gauge-multiple`),Kc(830,`br`),ug()()(),Ac(831,`td`,19)(832,`code`,27),vN(833,`number`),ug()(),Ac(834,`td`,22),vN(835,`-`),ug(),Ac(836,`td`,23)(837,`em`)(838,`strong`),vN(839,`(opcional)`),ug()(),Ac(840,`p`),vN(841,`Define o valor do gráfico do tipo `),Ac(842,`code`),vN(843,`Gauge`),ug(),vN(844,` quando utliza as propriedades `),Ac(845,`code`),vN(846,`From`),ug(),Ac(847,`code`),vN(848,`To`),ug(),vN(849,`.`),ug()()()(),Ac(850,`h3`),vN(851,`Interfaces`),ug(),Ac(852,`h4`,37)(853,`code`,5),vN(854,`PoChartAxisOptions`),ug()(),Ac(855,`div`,2)(856,`p`)(857,`em`),vN(858,`Interface`),ug(),vN(859,` que define os eixos do grid.`),ug()(),Ac(860,`h4`,11),vN(861,`Propriedades`),ug(),Ac(862,`table`,12)(863,`tr`,13)(864,`th`,14),vN(865,`Nome`),ug(),Ac(866,`th`,14),vN(867,`Tipo`),ug(),Ac(868,`th`,14),vN(869,`Descrição`),ug()(),Ac(870,`tr`,15)(871,`td`,16)(872,`div`,17)(873,`span`,18),vN(874,` gridLines`),Kc(875,`br`),ug()()(),Ac(876,`td`,19)(877,`code`,27),vN(878,`number`),ug()(),Ac(879,`td`,23)(880,`em`)(881,`strong`),vN(882,`(opcional)`),ug()(),Ac(883,`p`),vN(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Ac(885,`code`),vN(886,`Area`),ug(),vN(887,`, `),Ac(888,`code`),vN(889,`Line`),ug(),vN(890,` e `),Ac(891,`code`),vN(892,`Column`),ug(),vN(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Ac(894,`code`),vN(895,`Bar`),ug(),vN(896,`, tratará as linhas verticais (eixo Y).`),ug(),Ac(897,`p`),vN(898,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),ug(),Ac(899,`ul`)(900,`li`),vN(901,`Quantidade padrão de linhas: '5';`),ug(),Ac(902,`li`),vN(903,`Quantidade mínima permitida: '2';`),ug()()()(),Ac(904,`tr`,15)(905,`td`,16)(906,`div`,17)(907,`span`,18),vN(908,` labelType`),Kc(909,`br`),ug()()(),Ac(910,`td`,19)(911,`code`,38),vN(912,`PoChartLabelFormat`),ug()(),Ac(913,`td`,23)(914,`em`)(915,`strong`),vN(916,`(opcional)`),ug()(),Ac(917,`p`),vN(918,`Define o tipo do label e a formatação exibida no eixo de valor.`),ug()()(),Ac(919,`tr`,15)(920,`td`,16)(921,`div`,17)(922,`span`,18),vN(923,` maxRange`),Kc(924,`br`),ug()()(),Ac(925,`td`,19)(926,`code`,27),vN(927,`number`),ug()(),Ac(928,`td`,23)(929,`em`)(930,`strong`),vN(931,`(opcional)`),ug()(),Ac(932,`p`),vN(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),ug(),Ac(934,`blockquote`)(935,`p`),vN(936,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),ug()()()(),Ac(937,`tr`,15)(938,`td`,16)(939,`div`,17)(940,`span`,18),vN(941,` minRange`),Kc(942,`br`),ug()()(),Ac(943,`td`,19)(944,`code`,27),vN(945,`number`),ug()(),Ac(946,`td`,23)(947,`em`)(948,`strong`),vN(949,`(opcional)`),ug()(),Ac(950,`p`),vN(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),ug(),Ac(952,`blockquote`)(953,`p`),vN(954,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),ug()()()(),Ac(955,`tr`,15)(956,`td`,16)(957,`div`,17)(958,`span`,18),vN(959,` paddingBottom`),Kc(960,`br`),ug()()(),Ac(961,`td`,19)(962,`code`,27),vN(963,`number`),ug()(),Ac(964,`td`,23)(965,`em`)(966,`strong`),vN(967,`(opcional)`),ug()(),Ac(968,`p`),vN(969,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),ug()()(),Ac(970,`tr`,15)(971,`td`,16)(972,`div`,17)(973,`span`,18),vN(974,` paddingLeft`),Kc(975,`br`),ug()()(),Ac(976,`td`,19)(977,`code`,27),vN(978,`number`),ug()(),Ac(979,`td`,23)(980,`em`)(981,`strong`),vN(982,`(opcional)`),ug()(),Ac(983,`p`),vN(984,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),ug()()(),Ac(985,`tr`,15)(986,`td`,16)(987,`div`,17)(988,`span`,18),vN(989,` paddingRight`),Kc(990,`br`),ug()()(),Ac(991,`td`,19)(992,`code`,27),vN(993,`number`),ug()(),Ac(994,`td`,23)(995,`em`)(996,`strong`),vN(997,`(opcional)`),ug()(),Ac(998,`p`),vN(999,`Permite aumentar ou diminuir o espaço direito do gráfico.`),ug()()(),Ac(1e3,`tr`,15)(1001,`td`,16)(1002,`div`,17)(1003,`span`,18),vN(1004,` rotateLegend`),Kc(1005,`br`),ug()()(),Ac(1006,`td`,19)(1007,`code`,27),vN(1008,`number`),ug()(),Ac(1009,`td`,23)(1010,`em`)(1011,`strong`),vN(1012,`(opcional)`),ug()(),Ac(1013,`p`),vN(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),ug(),Ac(1015,`ul`)(1016,`li`),vN(1017,`Valores negativos giram a legenda para a esquerda.`),ug(),Ac(1018,`li`),vN(1019,`Valores positivos giram a legenda para a direita.`),ug()(),Ac(1020,`p`),vN(1021,`Se não for definido, a legenda será exibida sem rotação.`),ug()()(),Ac(1022,`tr`,15)(1023,`td`,16)(1024,`div`,17)(1025,`span`,18),vN(1026,` showAxisDetails`),Kc(1027,`br`),ug()()(),Ac(1028,`td`,19)(1029,`code`,39),vN(1030,`boolean`),ug()(),Ac(1031,`td`,23)(1032,`em`)(1033,`strong`),vN(1034,`(opcional)`),ug()(),Ac(1035,`p`),vN(1036,`Exibe a linha de detalhes que acompanha o mouse`),ug()()(),Ac(1037,`tr`,15)(1038,`td`,16)(1039,`div`,17)(1040,`span`,18),vN(1041,` showXAxis`),Kc(1042,`br`),ug()()(),Ac(1043,`td`,19)(1044,`code`,39),vN(1045,`boolean`),ug()(),Ac(1046,`td`,23)(1047,`em`)(1048,`strong`),vN(1049,`(opcional)`),ug()(),Ac(1050,`p`),vN(1051,`Exibe a linha do eixo X`),ug()()(),Ac(1052,`tr`,15)(1053,`td`,16)(1054,`div`,17)(1055,`span`,18),vN(1056,` showYAxis`),Kc(1057,`br`),ug()()(),Ac(1058,`td`,19)(1059,`code`,39),vN(1060,`boolean`),ug()(),Ac(1061,`td`,23)(1062,`em`)(1063,`strong`),vN(1064,`(opcional)`),ug()(),Ac(1065,`p`),vN(1066,`Exibe a linha do eixo Y`),ug()()()(),Ac(1067,`h4`,37)(1068,`code`,5),vN(1069,`PoChartHeaderOptions`),ug()(),Ac(1070,`div`,2)(1071,`p`)(1072,`em`),vN(1073,`Interface`),ug(),vN(1074,` para configuração das ações disponíveis no cabeçalho.`),ug()(),Ac(1075,`h4`,11),vN(1076,`Propriedades`),ug(),Ac(1077,`table`,12)(1078,`tr`,13)(1079,`th`,14),vN(1080,`Nome`),ug(),Ac(1081,`th`,14),vN(1082,`Tipo`),ug(),Ac(1083,`th`,14),vN(1084,`Descrição`),ug()(),Ac(1085,`tr`,15)(1086,`td`,16)(1087,`div`,17)(1088,`span`,18),vN(1089,` hideExpand`),Kc(1090,`br`),ug()()(),Ac(1091,`td`,19)(1092,`code`,39),vN(1093,`boolean`),ug()(),Ac(1094,`td`,23)(1095,`em`)(1096,`strong`),vN(1097,`(opcional)`),ug()(),Ac(1098,`p`),vN(1099,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),ug()()(),Ac(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),vN(1104,` hideExportCsv`),Kc(1105,`br`),ug()()(),Ac(1106,`td`,19)(1107,`code`,39),vN(1108,`boolean`),ug()(),Ac(1109,`td`,23)(1110,`em`)(1111,`strong`),vN(1112,`(opcional)`),ug()(),Ac(1113,`p`),vN(1114,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),ug()()(),Ac(1115,`tr`,15)(1116,`td`,16)(1117,`div`,17)(1118,`span`,18),vN(1119,` hideExportImage`),Kc(1120,`br`),ug()()(),Ac(1121,`td`,19)(1122,`code`,39),vN(1123,`boolean`),ug()(),Ac(1124,`td`,23)(1125,`em`)(1126,`strong`),vN(1127,`(opcional)`),ug()(),Ac(1128,`p`),vN(1129,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),ug()()(),Ac(1130,`tr`,15)(1131,`td`,16)(1132,`div`,17)(1133,`span`,18),vN(1134,` hideTableDetails`),Kc(1135,`br`),ug()()(),Ac(1136,`td`,19)(1137,`code`,39),vN(1138,`boolean`),ug()(),Ac(1139,`td`,23)(1140,`em`)(1141,`strong`),vN(1142,`(opcional)`),ug()(),Ac(1143,`p`),vN(1144,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),ug()()()(),Ac(1145,`h4`,37)(1146,`code`,5),vN(1147,`PoChartIndicatorOptions`),ug()(),Ac(1148,`div`,2)(1149,`p`),vN(1150,`Interface para configurações dos indicadores do gráfico `),Ac(1151,`code`),vN(1152,`radar`),ug(),vN(1153,`.`),ug()(),Ac(1154,`h4`,11),vN(1155,`Propriedades`),ug(),Ac(1156,`table`,12)(1157,`tr`,13)(1158,`th`,14),vN(1159,`Nome`),ug(),Ac(1160,`th`,14),vN(1161,`Tipo`),ug(),Ac(1162,`th`,14),vN(1163,`Descrição`),ug()(),Ac(1164,`tr`,15)(1165,`td`,16)(1166,`div`,17)(1167,`span`,18),vN(1168,` color`),Kc(1169,`br`),ug()()(),Ac(1170,`td`,19)(1171,`code`,35),vN(1172,`string`),ug()(),Ac(1173,`td`,23)(1174,`em`)(1175,`strong`),vN(1176,`(opcional)`),ug()(),Ac(1177,`p`),vN(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),ug(),Ac(1179,`blockquote`)(1180,`p`),vN(1181,`Nome da cor, hexadecimal ou RGB.`),ug()()()(),Ac(1182,`tr`,15)(1183,`td`,16)(1184,`div`,17)(1185,`span`,18),vN(1186,` max`),Kc(1187,`br`),ug()()(),Ac(1188,`td`,19)(1189,`code`,27),vN(1190,`number`),ug()(),Ac(1191,`td`,23)(1192,`em`)(1193,`strong`),vN(1194,`(opcional)`),ug()(),Ac(1195,`p`),vN(1196,`Valor máximo do indicator.`),ug(),Ac(1197,`p`),vN(1198,`A propriedade `),Ac(1199,`code`),vN(1200,`max`),ug(),vN(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),ug()()(),Ac(1202,`tr`,15)(1203,`td`,16)(1204,`div`,17)(1205,`span`,18),vN(1206,` min`),Kc(1207,`br`),ug()()(),Ac(1208,`td`,19)(1209,`code`,27),vN(1210,`number`),ug()(),Ac(1211,`td`,23)(1212,`em`)(1213,`strong`),vN(1214,`(opcional)`),ug()(),Ac(1215,`p`),vN(1216,`Valor mínimo do indicator, com valor padrão de 0.`),ug(),Ac(1217,`p`),vN(1218,`A propriedade `),Ac(1219,`code`),vN(1220,`min`),ug(),vN(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),ug()()(),Ac(1222,`tr`,15)(1223,`td`,16)(1224,`div`,17)(1225,`span`,18),vN(1226,` name`),Kc(1227,`br`),ug()()(),Ac(1228,`td`,19)(1229,`code`,35),vN(1230,`string`),ug()(),Ac(1231,`td`,23)(1232,`em`)(1233,`strong`),vN(1234,`(opcional)`),ug()(),Ac(1235,`p`),vN(1236,`Nome do indicator.`),ug()()()(),Ac(1237,`h4`,37)(1238,`code`,5),vN(1239,`PoChartLiterals`),ug()(),Ac(1240,`div`,2)(1241,`p`),vN(1242,`Interface para definição dos literais usadas no `),Ac(1243,`code`),vN(1244,`po-chart`),ug(),vN(1245,`.`),ug()(),Ac(1246,`h4`,11),vN(1247,`Propriedades`),ug(),Ac(1248,`table`,12)(1249,`tr`,13)(1250,`th`,14),vN(1251,`Nome`),ug(),Ac(1252,`th`,14),vN(1253,`Tipo`),ug(),Ac(1254,`th`,14),vN(1255,`Descrição`),ug()(),Ac(1256,`tr`,15)(1257,`td`,16)(1258,`div`,17)(1259,`span`,18),vN(1260,` category`),Kc(1261,`br`),ug()()(),Ac(1262,`td`,19)(1263,`code`,35),vN(1264,`string`),ug()(),Ac(1265,`td`,23)(1266,`em`)(1267,`strong`),vN(1268,`(opcional)`),ug()(),Ac(1269,`p`),vN(1270,`Texto da primeira coluna da tabela no gráfico do tipo `),Ac(1271,`code`),vN(1272,`Bar`),ug(),vN(1273,`.`),ug()()(),Ac(1274,`tr`,15)(1275,`td`,16)(1276,`div`,17)(1277,`span`,18),vN(1278,` downloadCSV`),Kc(1279,`br`),ug()()(),Ac(1280,`td`,19)(1281,`code`,35),vN(1282,`string`),ug()(),Ac(1283,`td`,23)(1284,`em`)(1285,`strong`),vN(1286,`(opcional)`),ug()(),Ac(1287,`p`),vN(1288,`Texto exibido para a ação de download de dados em formato CSV.`),ug()()(),Ac(1289,`tr`,15)(1290,`td`,16)(1291,`div`,17)(1292,`span`,18),vN(1293,` exportCSV`),Kc(1294,`br`),ug()()(),Ac(1295,`td`,19)(1296,`code`,35),vN(1297,`string`),ug()(),Ac(1298,`td`,23)(1299,`em`)(1300,`strong`),vN(1301,`(opcional)`),ug()(),Ac(1302,`p`),vN(1303,`Texto do botão para exportar o gráfico em CSV.`),ug()()(),Ac(1304,`tr`,15)(1305,`td`,16)(1306,`div`,17)(1307,`span`,18),vN(1308,` exportJPG`),Kc(1309,`br`),ug()()(),Ac(1310,`td`,19)(1311,`code`,35),vN(1312,`string`),ug()(),Ac(1313,`td`,23)(1314,`em`)(1315,`strong`),vN(1316,`(opcional)`),ug()(),Ac(1317,`p`),vN(1318,`Texto do botão para exportar o gráfico como imagem JPG.`),ug()()(),Ac(1319,`tr`,15)(1320,`td`,16)(1321,`div`,17)(1322,`span`,18),vN(1323,` exportPNG`),Kc(1324,`br`),ug()()(),Ac(1325,`td`,19)(1326,`code`,35),vN(1327,`string`),ug()(),Ac(1328,`td`,23)(1329,`em`)(1330,`strong`),vN(1331,`(opcional)`),ug()(),Ac(1332,`p`),vN(1333,`Texto do botão para exportar o gráfico como imagem PNG.`),ug()()(),Ac(1334,`tr`,15)(1335,`td`,16)(1336,`div`,17)(1337,`span`,18),vN(1338,` item`),Kc(1339,`br`),ug()()(),Ac(1340,`td`,19)(1341,`code`,35),vN(1342,`string`),ug()(),Ac(1343,`td`,23)(1344,`em`)(1345,`strong`),vN(1346,`(opcional)`),ug()(),Ac(1347,`p`),vN(1348,`Texto dos títulos das colunas `),Ac(1349,`code`),vN(1350,`Gauge`),ug(),vN(1351,` e não possui label.`),ug()()(),Ac(1352,`tr`,15)(1353,`td`,16)(1354,`div`,17)(1355,`span`,18),vN(1356,` serie`),Kc(1357,`br`),ug()()(),Ac(1358,`td`,19)(1359,`code`,35),vN(1360,`string`),ug()(),Ac(1361,`td`,23)(1362,`em`)(1363,`strong`),vN(1364,`(opcional)`),ug()(),Ac(1365,`p`),vN(1366,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),Ac(1367,`code`),vN(1368,`Bar`),ug(),vN(1369,` e `),Ac(1370,`code`),vN(1371,`Gauge`),ug(),vN(1372,`.`),ug()()(),Ac(1373,`tr`,15)(1374,`td`,16)(1375,`div`,17)(1376,`span`,18),vN(1377,` value`),Kc(1378,`br`),ug()()(),Ac(1379,`td`,19)(1380,`code`,35),vN(1381,`string`),ug()(),Ac(1382,`td`,23)(1383,`em`)(1384,`strong`),vN(1385,`(opcional)`),ug()(),Ac(1386,`p`),vN(1387,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),Ac(1388,`code`),vN(1389,`Gauge`),ug(),vN(1390,`.`),ug()()()(),Ac(1391,`h4`,37)(1392,`code`,5),vN(1393,`PoChartOptions`),ug()(),Ac(1394,`div`,2)(1395,`p`)(1396,`em`),vN(1397,`Interface`),ug(),vN(1398,` para configurações dos elementos do gráfico.`),ug()(),Ac(1399,`h4`,11),vN(1400,`Propriedades`),ug(),Ac(1401,`table`,12)(1402,`tr`,13)(1403,`th`,14),vN(1404,`Nome`),ug(),Ac(1405,`th`,14),vN(1406,`Tipo`),ug(),Ac(1407,`th`,14),vN(1408,`Descrição`),ug()(),Ac(1409,`tr`,15)(1410,`td`,16)(1411,`div`,17)(1412,`span`,18),vN(1413,` areaStyle`),Kc(1414,`br`),ug()()(),Ac(1415,`td`,19)(1416,`code`,39),vN(1417,`boolean`),ug()(),Ac(1418,`td`,23)(1419,`em`)(1420,`strong`),vN(1421,`(opcional)`),ug()(),Ac(1422,`p`),vN(1423,`Define se as séries terão sua área preenchida.`),ug(),Ac(1424,`blockquote`)(1425,`p`),vN(1426,`Esta propriedade tem precedência sobre a definição de `),Ac(1427,`code`),vN(1428,`areaStyle`),ug(),vN(1429,` em cada série, `),Ac(1430,`code`),vN(1431,`fillpoints`),ug(),vN(1432,` não funciona quando `),Ac(1433,`code`),vN(1434,`areaStyle`),ug(),vN(1435,` está definido como `),Ac(1436,`code`),vN(1437,`true`),ug(),vN(1438,`.`),ug()()()(),Ac(1439,`tr`,15)(1440,`td`,16)(1441,`div`,17)(1442,`span`,18),vN(1443,` axis`),Kc(1444,`br`),ug()()(),Ac(1445,`td`,19)(1446,`code`,40),vN(1447,`PoChartAxisOptions`),ug()(),Ac(1448,`td`,23)(1449,`em`)(1450,`strong`),vN(1451,`(opcional)`),ug()(),Ac(1452,`p`),vN(1453,`Define um objeto do tipo `),Ac(1454,`code`),vN(1455,`PoChartAxisOptions`),ug(),vN(1456,` para configuração dos eixos.`),ug()()(),Ac(1457,`tr`,15)(1458,`td`,16)(1459,`div`,17)(1460,`span`,18),vN(1461,` borderRadius`),Kc(1462,`br`),ug()()(),Ac(1463,`td`,19)(1464,`code`,27),vN(1465,`number`),ug()(),Ac(1466,`td`,23)(1467,`em`)(1468,`strong`),vN(1469,`(opcional)`),ug()(),Ac(1470,`p`),vN(1471,`Define borda entre os itens do gráfico. Válido para os gráficos `),Ac(1472,`code`),vN(1473,`Donut`),ug(),vN(1474,`, `),Ac(1475,`code`),vN(1476,`Pie`),ug(),vN(1477,`.`),ug(),Ac(1478,`blockquote`)(1479,`p`),vN(1480,`Valores válidos entre 0 e 100,`),ug()()()(),Ac(1481,`tr`,15)(1482,`td`,16)(1483,`div`,17)(1484,`span`,18),vN(1485,` bottomDataZoom`),Kc(1486,`br`),ug()()(),Ac(1487,`td`,19)(1488,`code`,39),vN(1489,`boolean `),ug(),Ac(1490,`code`,27),vN(1491,` number`),ug()(),Ac(1492,`td`,23)(1493,`em`)(1494,`strong`),vN(1495,`(opcional)`),ug()(),Ac(1496,`p`),vN(1497,`Define a distância inferior do componente DataZoom.`),ug(),Ac(1498,`p`),vN(1499,`Esta propriedade aceita os seguintes valores:`),ug(),Ac(1500,`ul`)(1501,`li`)(1502,`p`)(1503,`code`),vN(1504,`false`),ug(),vN(1505,` (padrão): não aplica ajustes.`),ug()(),Ac(1506,`li`)(1507,`p`)(1508,`code`),vN(1509,`true`),ug(),vN(1510,`: aplica um valor automático com base no posicionamento da legenda:`),ug(),Ac(1511,`ul`)(1512,`li`)(1513,`code`),vN(1514,`8`),ug(),vN(1515,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),ug(),Ac(1516,`li`)(1517,`code`),vN(1518,`32`),ug(),vN(1519,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),ug()()(),Ac(1520,`li`)(1521,`p`)(1522,`code`),vN(1523,`number`),ug(),vN(1524,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),ug()()(),Ac(1525,`blockquote`)(1526,`p`),vN(1527,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),Ac(1528,`code`),vN(1529,`dataZoom: true`),ug(),vN(1530,`).`),ug()()()(),Ac(1531,`tr`,15)(1532,`td`,16)(1533,`div`,17)(1534,`span`,18),vN(1535,` dataZoom`),Kc(1536,`br`),ug()()(),Ac(1537,`td`,19)(1538,`code`,39),vN(1539,`boolean`),ug()(),Ac(1540,`td`,23)(1541,`em`)(1542,`strong`),vN(1543,`(opcional)`),ug()(),Ac(1544,`p`),vN(1545,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),ug()()(),Ac(1546,`tr`,15)(1547,`td`,16)(1548,`div`,17)(1549,`span`,18),vN(1550,` descriptionChart`),Kc(1551,`br`),ug()()(),Ac(1552,`td`,19)(1553,`code`,35),vN(1554,`string`),ug()(),Ac(1555,`td`,23)(1556,`em`)(1557,`strong`),vN(1558,`(opcional)`),ug()(),Ac(1559,`p`),vN(1560,`Define a descrição do gráfico exibido acima do gráfico.`),ug()()(),Ac(1561,`tr`,15)(1562,`td`,16)(1563,`div`,17)(1564,`span`,18),vN(1565,` fillPoints`),Kc(1566,`br`),ug()()(),Ac(1567,`td`,19)(1568,`code`,39),vN(1569,`boolean`),ug()(),Ac(1570,`td`,23)(1571,`em`)(1572,`strong`),vN(1573,`(opcional)`),ug()(),Ac(1574,`p`),vN(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),ug(),Ac(1576,`blockquote`)(1577,`p`),vN(1578,`Esta propriedade é utilizável para os gráficos dos tipos `),Ac(1579,`code`),vN(1580,`Area`),ug(),vN(1581,`, `),Ac(1582,`code`),vN(1583,`Line`),ug(),vN(1584,` e `),Ac(1585,`code`),vN(1586,`Radar`),ug(),vN(1587,`.
Para o tipo `),Ac(1588,`code`),vN(1589,`Radar`),ug(),vN(1590,`, o valor padrão é `),Ac(1591,`code`),vN(1592,`true`),ug(),vN(1593,`.`),ug()()()(),Ac(1594,`tr`,15)(1595,`td`,16)(1596,`div`,17)(1597,`span`,18),vN(1598,` firstColumnName`),Kc(1599,`br`),ug()()(),Ac(1600,`td`,19)(1601,`code`,35),vN(1602,`string`),ug()(),Ac(1603,`td`,23)(1604,`em`)(1605,`strong`),vN(1606,`(opcional)`),ug()(),Ac(1607,`p`),vN(1608,`Valor que permite customizar o nome da `),Ac(1609,`code`),vN(1610,`TH`),ug(),vN(1611,` da primeira coluna da tabela descritiva.`),ug()()(),Ac(1612,`tr`,15)(1613,`td`,16)(1614,`div`,17)(1615,`span`,18),vN(1616,` header`),Kc(1617,`br`),ug()()(),Ac(1618,`td`,19)(1619,`code`,41),vN(1620,`PoChartHeaderOptions`),ug()(),Ac(1621,`td`,23)(1622,`em`)(1623,`strong`),vN(1624,`(opcional)`),ug()(),Ac(1625,`p`),vN(1626,`Define um objeto do tipo `),Ac(1627,`code`),vN(1628,`PoChartHeaderOptions`),ug(),vN(1629,` para configurar a exibição de botões no cabeçalho do gráfico.`),ug()()(),Ac(1630,`tr`,15)(1631,`td`,16)(1632,`div`,17)(1633,`span`,18),vN(1634,` innerRadius`),Kc(1635,`br`),ug()()(),Ac(1636,`td`,19)(1637,`code`,27),vN(1638,`number`),ug()(),Ac(1639,`td`,23)(1640,`em`)(1641,`strong`),vN(1642,`(opcional)`),ug()(),Ac(1643,`p`),vN(1644,`Define o diâmetro, em valor percentual entre `),Ac(1645,`code`),vN(1646,`0`),ug(),vN(1647,` e `),Ac(1648,`code`),vN(1649,`100`),ug(),vN(1650,`, da área central para gráficos do tipo `),Ac(1651,`code`),vN(1652,`donut`),ug(),vN(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Ac(1654,`code`),vN(1655,`40px`),ug(),vN(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),ug()()(),Ac(1657,`tr`,15)(1658,`td`,16)(1659,`div`,17)(1660,`span`,18),vN(1661,` legend`),Kc(1662,`br`),ug()()(),Ac(1663,`td`,19)(1664,`code`,39),vN(1665,`boolean`),ug()(),Ac(1666,`td`,23)(1667,`em`)(1668,`strong`),vN(1669,`(opcional)`),ug()(),Ac(1670,`p`),vN(1671,`Define a exibição da legenda do gráfico. Valor padrão é `),Ac(1672,`code`),vN(1673,`true`),ug()()()(),Ac(1674,`tr`,15)(1675,`td`,16)(1676,`div`,17)(1677,`span`,18),vN(1678,` legendPosition`),Kc(1679,`br`),ug()()(),Ac(1680,`td`,19)(1681,`code`,42),vN(1682,`'left' `),ug(),Ac(1683,`code`,43),vN(1684,` 'center' `),ug(),Ac(1685,`code`,44),vN(1686,` 'right'`),ug()(),Ac(1687,`td`,23)(1688,`em`)(1689,`strong`),vN(1690,`(opcional)`),ug()(),Ac(1691,`p`),vN(1692,`Define o alinhamento horizontal da legenda.`),ug(),Ac(1693,`blockquote`)(1694,`p`),vN(1695,`Propriedade inválida para o gráfico do tipo `),Ac(1696,`code`),vN(1697,`Gauge`),ug(),vN(1698,`.`),ug()()()(),Ac(1699,`tr`,15)(1700,`td`,16)(1701,`div`,17)(1702,`span`,18),vN(1703,` legendType`),Kc(1704,`br`),ug()()(),Ac(1705,`td`,19)(1706,`code`,45),vN(1707,`'plain' `),ug(),Ac(1708,`code`,46),vN(1709,` 'scroll'`),ug()(),Ac(1710,`td`,23)(1711,`em`)(1712,`strong`),vN(1713,`(opcional)`),ug()(),Ac(1714,`p`),vN(1715,`Define o tipo da legenda.`),ug(),Ac(1716,`ul`)(1717,`li`)(1718,`code`),vN(1719,`plain`),ug(),vN(1720,`: exibe todas as legendas de forma estática.`),ug(),Ac(1721,`li`)(1722,`code`),vN(1723,`scroll`),ug(),vN(1724,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),ug()(),Ac(1725,`blockquote`)(1726,`p`),vN(1727,`Propriedade inválida para o gráfico do tipo `),Ac(1728,`code`),vN(1729,`Gauge`),ug(),vN(1730,`.`),ug()()()(),Ac(1731,`tr`,15)(1732,`td`,16)(1733,`div`,17)(1734,`span`,18),vN(1735,` legendVerticalPosition`),Kc(1736,`br`),ug()()(),Ac(1737,`td`,19)(1738,`code`,47),vN(1739,`'top' `),ug(),Ac(1740,`code`,48),vN(1741,` 'bottom'`),ug()(),Ac(1742,`td`,23)(1743,`em`)(1744,`strong`),vN(1745,`(opcional)`),ug()(),Ac(1746,`p`),vN(1747,`Define a posição vertical da legenda no gráfico.`),ug(),Ac(1748,`blockquote`)(1749,`p`),vN(1750,`Quando utilizada com o valor `),Ac(1751,`code`),vN(1752,`top`),ug(),vN(1753,`, recomenda-se configurar também a propriedade `),Ac(1754,`code`),vN(1755,`bottomDataZoom`),ug(),vN(1756,` caso o `),Ac(1757,`code`),vN(1758,`dataZoom`),ug(),vN(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Ac(1760,`code`),vN(1761,`Gauge`),ug(),vN(1762,`.`),ug()()()(),Ac(1763,`tr`,15)(1764,`td`,16)(1765,`div`,17)(1766,`span`,18),vN(1767,` pointer`),Kc(1768,`br`),ug()()(),Ac(1769,`td`,19)(1770,`code`,39),vN(1771,`boolean`),ug()(),Ac(1772,`td`,23)(1773,`em`)(1774,`strong`),vN(1775,`(opcional)`),ug()(),Ac(1776,`p`),vN(1777,`Define a exibição do ponteiro.`),ug(),Ac(1778,`blockquote`)(1779,`p`),vN(1780,`Válido para gráfico do tipo `),Ac(1781,`code`),vN(1782,`Gauge`),ug(),vN(1783,`.`),ug()()()(),Ac(1784,`tr`,15)(1785,`td`,16)(1786,`div`,17)(1787,`span`,18),vN(1788,` rendererOption`),Kc(1789,`br`),ug()()(),Ac(1790,`td`,19)(1791,`code`,49),vN(1792,`'canvas' `),ug(),Ac(1793,`code`,50),vN(1794,` 'svg'`),ug()(),Ac(1795,`td`,23)(1796,`em`)(1797,`strong`),vN(1798,`(opcional)`),ug()(),Ac(1799,`p`),vN(1800,`Define como o gráfico será renderizado.`),ug(),Ac(1801,`blockquote`)(1802,`p`),vN(1803,`Recomenda-se não modificar o valor da propriedade `),Ac(1804,`code`),vN(1805,`rendererOption`),ug(),vN(1806,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),ug()()()(),Ac(1807,`tr`,15)(1808,`td`,16)(1809,`div`,17)(1810,`span`,18),vN(1811,` roseType`),Kc(1812,`br`),ug()()(),Ac(1813,`td`,19)(1814,`code`,39),vN(1815,`boolean`),ug()(),Ac(1816,`td`,23)(1817,`em`)(1818,`strong`),vN(1819,`(opcional)`),ug()(),Ac(1820,`p`),vN(1821,`Transforma os gráficos do tipo `),Ac(1822,`code`),vN(1823,`Donut`),ug(),vN(1824,` ou `),Ac(1825,`code`),vN(1826,`Pie`),ug(),vN(1827,` num gráfico de área polar.`),ug(),Ac(1828,`blockquote`)(1829,`p`),vN(1830,`Válido para os gráficos `),Ac(1831,`code`),vN(1832,`Donut`),ug(),vN(1833,` e `),Ac(1834,`code`),vN(1835,`Pie`),ug(),vN(1836,`.`),ug()()()(),Ac(1837,`tr`,15)(1838,`td`,16)(1839,`div`,17)(1840,`span`,18),vN(1841,` showContainerGauge`),Kc(1842,`br`),ug()()(),Ac(1843,`td`,19)(1844,`code`,39),vN(1845,`boolean`),ug()(),Ac(1846,`td`,23)(1847,`em`)(1848,`strong`),vN(1849,`(opcional)`),ug()(),Ac(1850,`p`),vN(1851,`Esconde a estilização do container em volta do gráfico.`),ug(),Ac(1852,`blockquote`)(1853,`p`),vN(1854,`Válido para gráfico do tipo `),Ac(1855,`code`),vN(1856,`Gauge`),ug(),vN(1857,`.`),ug()()()(),Ac(1858,`tr`,15)(1859,`td`,16)(1860,`div`,17)(1861,`span`,18),vN(1862,` showFromToLegend`),Kc(1863,`br`),ug()()(),Ac(1864,`td`,19)(1865,`code`,39),vN(1866,`boolean`),ug()(),Ac(1867,`td`,23)(1868,`em`)(1869,`strong`),vN(1870,`(opcional)`),ug()(),Ac(1871,`p`),vN(1872,`Exibe os valores das propriedades `),Ac(1873,`code`),vN(1874,`from`),ug(),vN(1875,` e `),Ac(1876,`code`),vN(1877,`to`),ug(),vN(1878,` no gráfico do no texto da legenda entre parênteses.`),ug(),Ac(1879,`blockquote`)(1880,`p`),vN(1881,`Válido para gráfico do tipo `),Ac(1882,`code`),vN(1883,`Gauge`),ug(),vN(1884,`.`),ug()()()(),Ac(1885,`tr`,15)(1886,`td`,16)(1887,`div`,17)(1888,`span`,18),vN(1889,` stacked`),Kc(1890,`br`),ug()()(),Ac(1891,`td`,19)(1892,`code`,39),vN(1893,`boolean`),ug()(),Ac(1894,`td`,23)(1895,`em`)(1896,`strong`),vN(1897,`(opcional)`),ug()(),Ac(1898,`p`),vN(1899,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),Ac(1900,`code`),vN(1901,`stackGroupName`),ug(),vN(1902,` da interface `),Ac(1903,`code`),vN(1904,`PoChartSerie`),ug()(),Ac(1905,`blockquote`)(1906,`p`),vN(1907,`Válido para gráfico do tipo `),Ac(1908,`code`),vN(1909,`Column`),ug(),vN(1910,` e `),Ac(1911,`code`),vN(1912,`Bar`),ug(),vN(1913,`.`),ug()(),Ac(1914,`blockquote`)(1915,`p`),vN(1916,`Essa propriedade habilita a propriedade `),Ac(1917,`code`),vN(1918,`p-data-label`),ug(),vN(1919,` por padrão, podendo ser desabilitada passando `),Ac(1920,`code`),vN(1921,`[p-data-label]={ fixed: false }`),ug(),vN(1922,`.`),ug()()()(),Ac(1923,`tr`,15)(1924,`td`,16)(1925,`div`,17)(1926,`span`,18),vN(1927,` subtitleGauge`),Kc(1928,`br`),ug()()(),Ac(1929,`td`,19)(1930,`code`,35),vN(1931,`string`),ug()(),Ac(1932,`td`,23)(1933,`em`)(1934,`strong`),vN(1935,`(opcional)`),ug()(),Ac(1936,`p`),vN(1937,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),ug(),Ac(1938,`blockquote`)(1939,`p`),vN(1940,`Válido para gráfico do tipo `),Ac(1941,`code`),vN(1942,`Gauge`),ug(),vN(1943,`.`),ug()()()(),Ac(1944,`tr`,15)(1945,`td`,16)(1946,`div`,17)(1947,`span`,18),vN(1948,` textCenterGraph`),Kc(1949,`br`),ug()()(),Ac(1950,`td`,19)(1951,`code`,35),vN(1952,`string`),ug()(),Ac(1953,`td`,23)(1954,`em`)(1955,`strong`),vN(1956,`(opcional)`),ug()(),Ac(1957,`p`),vN(1958,`Aplica texto centralizado customizado nos gráficos de `),Ac(1959,`code`),vN(1960,`Donut`),ug(),vN(1961,`.`),ug()()()(),Ac(1962,`h4`,37)(1963,`code`,5),vN(1964,`PoChartRadarOptions`),ug()(),Ac(1965,`div`,2)(1966,`p`)(1967,`em`),vN(1968,`Interface`),ug(),vN(1969,` para configurações do gráfico `),Ac(1970,`code`),vN(1971,`radar`),ug(),vN(1972,`.`),ug()(),Ac(1973,`h4`,11),vN(1974,`Propriedades`),ug(),Ac(1975,`table`,12)(1976,`tr`,13)(1977,`th`,14),vN(1978,`Nome`),ug(),Ac(1979,`th`,14),vN(1980,`Tipo`),ug(),Ac(1981,`th`,14),vN(1982,`Descrição`),ug()(),Ac(1983,`tr`,15)(1984,`td`,16)(1985,`div`,17)(1986,`span`,18),vN(1987,` indicator`),Kc(1988,`br`),ug()()(),Ac(1989,`td`,19)(1990,`code`,51),vN(1991,`Array<PoChartIndicatorOptions>`),ug()(),Ac(1992,`td`,23)(1993,`em`)(1994,`strong`),vN(1995,`(opcional)`),ug()(),Ac(1996,`p`),vN(1997,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),ug()()(),Ac(1998,`tr`,15)(1999,`td`,16)(2e3,`div`,17)(2001,`span`,18),vN(2002,` shape`),Kc(2003,`br`),ug()()(),Ac(2004,`td`,19)(2005,`code`,52),vN(2006,`'polygon' `),ug(),Ac(2007,`code`,53),vN(2008,` 'circle'`),ug()(),Ac(2009,`td`,23)(2010,`em`)(2011,`strong`),vN(2012,`(opcional)`),ug()(),Ac(2013,`p`),vN(2014,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),ug()()(),Ac(2015,`tr`,15)(2016,`td`,16)(2017,`div`,17)(2018,`span`,18),vN(2019,` splitArea`),Kc(2020,`br`),ug()()(),Ac(2021,`td`,19)(2022,`code`,39),vN(2023,`boolean`),ug()(),Ac(2024,`td`,23)(2025,`em`)(2026,`strong`),vN(2027,`(opcional)`),ug()(),Ac(2028,`p`),vN(2029,`Define o efeito zebrado na grid.`),ug()()()(),Ac(2030,`h4`,37)(2031,`code`,5),vN(2032,`PoChartDataLabel`),ug()(),Ac(2033,`div`,2)(2034,`p`),vN(2035,`Interface que define as propriedades de exibição dos rótulos das séries no `),Ac(2036,`code`),vN(2037,`po-chart`),ug(),vN(2038,`.`),ug()(),Ac(2039,`h4`,11),vN(2040,`Propriedades`),ug(),Ac(2041,`table`,12)(2042,`tr`,13)(2043,`th`,14),vN(2044,`Nome`),ug(),Ac(2045,`th`,14),vN(2046,`Tipo`),ug(),Ac(2047,`th`,14),vN(2048,`Descrição`),ug()(),Ac(2049,`tr`,15)(2050,`td`,16)(2051,`div`,17)(2052,`span`,18),vN(2053,` fixed`),Kc(2054,`br`),ug()()(),Ac(2055,`td`,19)(2056,`code`,39),vN(2057,`boolean`),ug()(),Ac(2058,`td`,23)(2059,`em`)(2060,`strong`),vN(2061,`(opcional)`),ug()(),Ac(2062,`p`),vN(2063,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),ug(),Ac(2064,`ul`)(2065,`li`),vN(2066,`Quando definido como `),Ac(2067,`code`),vN(2068,`true`),ug(),vN(2069,`:`),Ac(2070,`ul`)(2071,`li`),vN(2072,`O `),Ac(2073,`em`),vN(2074,`tooltip`),ug(),vN(2075,` não será exibido.`),ug(),Ac(2076,`li`),vN(2077,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),ug()()()(),Ac(2078,`blockquote`)(2079,`p`),vN(2080,`Disponível para os tipo de gráfico `),Ac(2081,`code`),vN(2082,`PoChartType.Line`),ug(),vN(2083,`, `),Ac(2084,`code`),vN(2085,`PoChartType.Area`),ug(),vN(2086,`, `),Ac(2087,`code`),vN(2088,`PoChartType.Column`),ug(),vN(2089,`, `),Ac(2090,`code`),vN(2091,`PoChartType.Bar e PoChartType.Radar`),ug(),vN(2092,`.`),ug()()()()(),Ac(2093,`h4`,37)(2094,`code`,5),vN(2095,`PoChartSerie`),ug()(),Ac(2096,`div`,2)(2097,`p`),vN(2098,`Interface das series dinâmicas do `),Ac(2099,`code`),vN(2100,`po-chart`),ug(),vN(2101,` que possibilita desenhar gráficos dos tipos `),Ac(2102,`code`),vN(2103,`area`),ug(),vN(2104,`, `),Ac(2105,`code`),vN(2106,`bar`),ug(),vN(2107,`, `),Ac(2108,`code`),vN(2109,`column`),ug(),vN(2110,`, `),Ac(2111,`code`),vN(2112,`line`),ug(),vN(2113,`, `),Ac(2114,`code`),vN(2115,`donut`),ug(),vN(2116,`, `),Ac(2117,`code`),vN(2118,`pie`),ug(),vN(2119,` e `),Ac(2120,`code`),vN(2121,`radar`),ug()()(),Ac(2122,`h4`,11),vN(2123,`Propriedades`),ug(),Ac(2124,`table`,12)(2125,`tr`,13)(2126,`th`,14),vN(2127,`Nome`),ug(),Ac(2128,`th`,14),vN(2129,`Tipo`),ug(),Ac(2130,`th`,14),vN(2131,`Descrição`),ug()(),Ac(2132,`tr`,15)(2133,`td`,16)(2134,`div`,17)(2135,`span`,18),vN(2136,` areaStyle`),Kc(2137,`br`),ug()()(),Ac(2138,`td`,19)(2139,`code`,39),vN(2140,`boolean`),ug()(),Ac(2141,`td`,23)(2142,`em`)(2143,`strong`),vN(2144,`(opcional)`),ug()(),Ac(2145,`p`),vN(2146,`Define se a série terá sua área preenchida.`),ug(),Ac(2147,`blockquote`)(2148,`p`),vN(2149,`Propriedade válida para gráficos do tipo `),Ac(2150,`code`),vN(2151,`Radar`),ug(),vN(2152,`, `),Ac(2153,`code`),vN(2154,`fillpoints`),ug(),vN(2155,` não funciona quando `),Ac(2156,`code`),vN(2157,`areaStyle`),ug(),vN(2158,` está definido como `),Ac(2159,`code`),vN(2160,`true`),ug(),vN(2161,`.`),ug()()()(),Ac(2162,`tr`,15)(2163,`td`,16)(2164,`div`,17)(2165,`span`,18),vN(2166,` color`),Kc(2167,`br`),ug()()(),Ac(2168,`td`,19)(2169,`code`,35),vN(2170,`string`),ug()(),Ac(2171,`td`,23)(2172,`em`)(2173,`strong`),vN(2174,`(opcional)`),ug()(),Ac(2175,`p`),vN(2176,`Determina a cor da série. As maneiras de customizar o `),Ac(2177,`em`),vN(2178,`preset`),ug(),vN(2179,` padrão de cores são:`),ug(),Ac(2180,`ul`)(2181,`li`),vN(2182,`Hexadecimal, por exemplo `),Ac(2183,`code`),vN(2184,`#c64840`),ug(),vN(2185,`;`),ug(),Ac(2186,`li`),vN(2187,`RGB, por exemplo `),Ac(2188,`code`),vN(2189,`rgb(0, 0, 165)`),ug()(),Ac(2190,`li`),vN(2191,`O nome da cor, por exemplo `),Ac(2192,`code`),vN(2193,`blue`),ug(),vN(2194,`;`),ug(),Ac(2195,`li`),vN(2196,`Variáveis CSS, por exemplo `),Ac(2197,`code`),vN(2198,`var(--color-01)`),ug(),vN(2199,`;`),ug(),Ac(2200,`li`),vN(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Ac(2202,`ul`)(2203,`li`),Kc(2204,`span`,54),Ac(2205,`code`),vN(2206,`color-01`),ug()(),Ac(2207,`li`),Kc(2208,`span`,55),Ac(2209,`code`),vN(2210,`color-02`),ug()(),Ac(2211,`li`),Kc(2212,`span`,56),Ac(2213,`code`),vN(2214,`color-03`),ug()(),Ac(2215,`li`),Kc(2216,`span`,57),Ac(2217,`code`),vN(2218,`color-04`),ug()(),Ac(2219,`li`),Kc(2220,`span`,58),Ac(2221,`code`),vN(2222,`color-05`),ug()(),Ac(2223,`li`),Kc(2224,`span`,59),Ac(2225,`code`),vN(2226,`color-06`),ug()(),Ac(2227,`li`),Kc(2228,`span`,60),Ac(2229,`code`),vN(2230,`color-07`),ug()(),Ac(2231,`li`),Kc(2232,`span`,61),Ac(2233,`code`),vN(2234,`color-08`),ug()(),Ac(2235,`li`),Kc(2236,`span`,62),Ac(2237,`code`),vN(2238,`color-09`),ug()(),Ac(2239,`li`),Kc(2240,`span`,63),Ac(2241,`code`),vN(2242,`color-10`),ug()(),Ac(2243,`li`),Kc(2244,`span`,64),Ac(2245,`code`),vN(2246,`color-11`),ug()(),Ac(2247,`li`),Kc(2248,`span`,65),Ac(2249,`code`),vN(2250,`color-12`),ug()()()()(),Ac(2251,`ul`)(2252,`li`),vN(2253,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),ug()()()(),Ac(2254,`tr`,15)(2255,`td`,16)(2256,`div`,17)(2257,`span`,18),vN(2258,` data`),Kc(2259,`br`),ug()()(),Ac(2260,`td`,19)(2261,`code`,27),vN(2262,`number `),ug(),Ac(2263,`code`,66),vN(2264,` Array<number>`),ug()(),Ac(2265,`td`,23)(2266,`em`)(2267,`strong`),vN(2268,`(opcional)`),ug()(),Ac(2269,`p`),vN(2270,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),ug(),Ac(2271,`ul`)(2272,`li`),vN(2273,`Para gráficos dos tipos `),Ac(2274,`code`),vN(2275,`donut`),ug(),vN(2276,` e `),Ac(2277,`code`),vN(2278,`pie`),ug(),vN(2279,`, espera-se `),Ac(2280,`em`),vN(2281,`number`),ug(),vN(2282,`;`),ug(),Ac(2283,`li`),vN(2284,`Para gráficos dos tipos `),Ac(2285,`code`),vN(2286,`area`),ug(),vN(2287,`, `),Ac(2288,`code`),vN(2289,`bar`),ug(),vN(2290,`, `),Ac(2291,`code`),vN(2292,`column`),ug(),vN(2293,`, `),Ac(2294,`code`),vN(2295,`line`),ug(),vN(2296,` e `),Ac(2297,`code`),vN(2298,`radar`),ug(),vN(2299,`, espera-se um `),Ac(2300,`em`),vN(2301,`array`),ug(),vN(2302,` de `),Ac(2303,`code`),vN(2304,`data`),ug(),vN(2305,`.`),ug()(),Ac(2306,`blockquote`)(2307,`p`),vN(2308,`Se passado valor `),Ac(2309,`code`),vN(2310,`null`),ug(),vN(2311,` em determinado item da lista, a iteração irá ignorá-lo.`),ug()()()(),Ac(2312,`tr`,15)(2313,`td`,16)(2314,`div`,17)(2315,`span`,18),vN(2316,` from`),Kc(2317,`br`),ug()()(),Ac(2318,`td`,19)(2319,`code`,27),vN(2320,`number`),ug()(),Ac(2321,`td`,23)(2322,`em`)(2323,`strong`),vN(2324,`(opcional)`),ug()(),Ac(2325,`p`),vN(2326,`Alcance inicial da cor.`),ug(),Ac(2327,`blockquote`)(2328,`p`),vN(2329,`Propriedade válida para gráfico do tipo `),Ac(2330,`code`),vN(2331,`Gauge`),ug(),vN(2332,`.`),ug()()()(),Ac(2333,`tr`,15)(2334,`td`,16)(2335,`div`,17)(2336,`span`,18),vN(2337,` label`),Kc(2338,`br`),ug()()(),Ac(2339,`td`,19)(2340,`code`,35),vN(2341,`string`),ug()(),Ac(2342,`td`,23)(2343,`em`)(2344,`strong`),vN(2345,`(opcional)`),ug()(),Ac(2346,`p`),vN(2347,`Rótulo referência da série.`),ug()()(),Ac(2348,`tr`,15)(2349,`td`,16)(2350,`div`,17)(2351,`span`,18),vN(2352,` stackGroupName`),Kc(2353,`br`),ug()()(),Ac(2354,`td`,19)(2355,`code`,35),vN(2356,`string`),ug()(),Ac(2357,`td`,23)(2358,`em`)(2359,`strong`),vN(2360,`(opcional)`),ug()(),Ac(2361,`p`),vN(2362,`Agrupa as séries em barras ou colunas que receberem o mesmo `),Ac(2363,`code`),vN(2364,`stackGroupName`),ug(),vN(2365,`. Exemplo:`),ug(),Ac(2366,`ul`)(2367,`li`),vN(2368,`Serie A: `),Ac(2369,`code`),vN(2370,`{ data: 500, stackGroupName: 'group1' ... }`),ug(),vN(2371,`;`),ug(),Ac(2372,`li`),vN(2373,`Série B: `),Ac(2374,`code`),vN(2375,`{ data: 200, stackGroupName: 'group1' ... }`),ug(),vN(2376,`.`),ug(),Ac(2377,`li`),vN(2378,`Série C: `),Ac(2379,`code`),vN(2380,`{ data: 100, stackGroupName: 'group2' ... }`),ug(),vN(2381,`.`),ug(),Ac(2382,`li`),vN(2383,`Série D: `),Ac(2384,`code`),vN(2385,`{ data: 400, stackGroupName: 'group2' ... }`),ug(),vN(2386,`.`),ug()(),Ac(2387,`p`),vN(2388,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),ug(),Ac(2389,`blockquote`)(2390,`p`),vN(2391,`Válido para gráfico do tipo `),Ac(2392,`code`),vN(2393,`Column`),ug(),vN(2394,` e `),Ac(2395,`code`),vN(2396,`Bar`),ug(),vN(2397,`. Essa propriedade é ignorada caso a propriedade `),Ac(2398,`code`),vN(2399,`stacked`),ug(),vN(2400,` da interface `),Ac(2401,`code`),vN(2402,`PoChartOptions`),ug(),vN(2403,` esteja como `),Ac(2404,`code`),vN(2405,`true`),ug(),vN(2406,`.`),ug()(),Ac(2407,`blockquote`)(2408,`p`),vN(2409,`Essa propriedade habilita a propriedade `),Ac(2410,`code`),vN(2411,`p-data-label`),ug(),vN(2412,` por padrão, podendo ser desabilitada passando `),Ac(2413,`code`),vN(2414,`[p-data-label]={ fixed: false }`),ug(),vN(2415,`.`),ug()()()(),Ac(2416,`tr`,15)(2417,`td`,16)(2418,`div`,17)(2419,`span`,18),vN(2420,` to`),Kc(2421,`br`),ug()()(),Ac(2422,`td`,19)(2423,`code`,27),vN(2424,`number`),ug()(),Ac(2425,`td`,23)(2426,`em`)(2427,`strong`),vN(2428,`(opcional)`),ug()(),Ac(2429,`p`),vN(2430,`Alcance final da cor.`),ug(),Ac(2431,`blockquote`)(2432,`p`),vN(2433,`Propriedade válida para gráfico do tipo `),Ac(2434,`code`),vN(2435,`Gauge`),ug(),vN(2436,`.`),ug()()()(),Ac(2437,`tr`,15)(2438,`td`,16)(2439,`div`,17)(2440,`span`,18),vN(2441,` tooltip`),Kc(2442,`br`),ug()()(),Ac(2443,`td`,19)(2444,`code`,35),vN(2445,`string `),ug(),Ac(2446,`code`,67),vN(2447,` ((params: any) => string)`),ug()(),Ac(2448,`td`,23)(2449,`em`)(2450,`strong`),vN(2451,`(opcional)`),ug()(),Ac(2452,`p`),vN(2453,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),Ac(2454,`em`),vN(2455,`chart`),ug(),vN(2456,`.`),ug(),Ac(2457,`p`),vN(2458,`Formatos aceitos:`),ug(),Ac(2459,`ul`)(2460,`li`)(2461,`p`)(2462,`strong`),vN(2463,`string`),ug(),vN(2464,`: pode conter marcadores dinâmicos e HTML simples.`),ug()(),Ac(2465,`li`)(2466,`p`),vN(2467,`Marcadores disponíveis:`),ug()(),Ac(2468,`li`)(2469,`p`)(2470,`code`),vN(2471,`{name}`),ug(),vN(2472,` → Nome do item/categoria.`),ug()(),Ac(2473,`li`)(2474,`p`)(2475,`code`),vN(2476,`{seriesName}`),ug(),vN(2477,` → Nome da série.`),ug()(),Ac(2478,`li`)(2479,`p`)(2480,`code`),vN(2481,`{value}`),ug(),vN(2482,` → Valor correspondente.`),ug()(),Ac(2483,`li`)(2484,`p`)(2485,`strong`),vN(2486,`function`),ug(),vN(2487,`: função que recebe o objeto `),Ac(2488,`code`),vN(2489,`params`),ug(),vN(2490,` e deve retornar uma `),Ac(2491,`em`),vN(2492,`string`),ug(),vN(2493,` com o conteúdo da tooltip.`),ug()()(),Ac(2494,`blockquote`)(2495,`p`),vN(2496,`É possível utilizar marcação HTML simples (`),Ac(2497,`code`),vN(2498,`<b>`),ug(),vN(2499,`, `),Ac(2500,`code`),vN(2501,`<i>`),ug(),vN(2502,`, `),Ac(2503,`code`),vN(2504,`<br>`),ug(),vN(2505,`, `),Ac(2506,`code`),vN(2507,`<hr>`),ug(),vN(2508,`, etc.) que será interpretada via `),Ac(2509,`code`),vN(2510,`innerHTML`),ug(),vN(2511,`.`),ug()(),Ac(2512,`blockquote`)(2513,`p`),vN(2514,`Formatação customizada (será convertido internamente para HTML):`),ug()(),Ac(2515,`ul`)(2516,`li`)(2517,`code`),vN(2518,`\\n`),ug(),vN(2519,` → quebra de linha (`),Ac(2520,`code`),vN(2521,`<br>`),ug(),vN(2522,`).`),ug(),Ac(2523,`li`)(2524,`code`),vN(2525,`**texto**`),ug(),vN(2526,` → negrito (`),Ac(2527,`code`),vN(2528,`<b>`),ug(),vN(2529,`).`),ug(),Ac(2530,`li`)(2531,`code`),vN(2532,`__texto__`),ug(),vN(2533,` → itálico (`),Ac(2534,`code`),vN(2535,`<i>`),ug(),vN(2536,`).`),ug()(),Ac(2537,`blockquote`)(2538,`p`),vN(2539,`Caso não seja informado um valor para o `),Ac(2540,`em`),vN(2541,`tooltip`),ug(),vN(2542,`, será exibido da seguinte forma:`),ug()(),Ac(2543,`ul`)(2544,`li`)(2545,`code`),vN(2546,`donut`),ug(),vN(2547,`, `),Ac(2548,`code`),vN(2549,`label`),ug(),vN(2550,`: valor proporcional ao total em porcentagem.`),ug(),Ac(2551,`li`)(2552,`code`),vN(2553,`radar`),ug(),vN(2554,`: nome da série, o nome do indicator e os valores correspondentes.`),ug(),Ac(2555,`li`)(2556,`code`),vN(2557,`area`),ug(),vN(2558,`, `),Ac(2559,`code`),vN(2560,`bar`),ug(),vN(2561,`, `),Ac(2562,`code`),vN(2563,`column`),ug(),vN(2564,`, `),Ac(2565,`code`),vN(2566,`line`),ug(),vN(2567,` e `),Ac(2568,`code`),vN(2569,`pie`),ug(),vN(2570,`: `),Ac(2571,`code`),vN(2572,`label`),ug(),vN(2573,`: `),Ac(2574,`code`),vN(2575,`data`),ug(),vN(2576,`.`),ug()(),Ac(2577,`h3`),vN(2578,`Exemplos:`),ug(),Ac(2579,`p`)(2580,`strong`),vN(2581,`Usando string com placeholders:`),ug()(),Ac(2582,`pre`)(2583,`code`,68),vN(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),ug()(),Ac(2585,`p`)(2586,`strong`),vN(2587,`Usando função de callback:`),ug()(),Ac(2588,`pre`)(2589,`code`,68),vN(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),ug()()()(),Ac(2591,`tr`,15)(2592,`td`,16)(2593,`div`,17)(2594,`span`,18),vN(2595,` type`),Kc(2596,`br`),ug()()(),Ac(2597,`td`,19)(2598,`code`,36),vN(2599,`PoChartType`),ug()(),Ac(2600,`td`,23)(2601,`em`)(2602,`strong`),vN(2603,`(opcional)`),ug()(),Ac(2604,`p`),vN(2605,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),Ac(2606,`code`),vN(2607,`column`),ug(),vN(2608,` e `),Ac(2609,`code`),vN(2610,`line`),ug(),vN(2611,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),ug(),Ac(2612,`ul`)(2613,`li`),vN(2614,`Serie A: `),Ac(2615,`code`),vN(2616,`{ type: ChartType.Column, data: ... }`),ug(),vN(2617,`;`),ug(),Ac(2618,`li`),vN(2619,`Série B: `),Ac(2620,`code`),vN(2621,`{ type: ChartType.Line, data: ... }`),ug(),vN(2622,`.`),ug()(),Ac(2623,`p`),vN(2624,`Se tanto `),Ac(2625,`code`),vN(2626,`p-type`),ug(),vN(2627,` quanto `),Ac(2628,`code`),vN(2629,`{ type }`),ug(),vN(2630,` forem ignorados, o padrão gerado pelo componente será:`),ug(),Ac(2631,`ul`)(2632,`li`)(2633,`code`),vN(2634,`column`),ug(),vN(2635,`: se `),Ac(2636,`code`),vN(2637,`data`),ug(),vN(2638,` receber `),Ac(2639,`code`),vN(2640,`Array<number>`),ug(),vN(2641,`;`),ug(),Ac(2642,`li`)(2643,`code`),vN(2644,`pie`),ug(),vN(2645,`: se `),Ac(2646,`code`),vN(2647,`data`),ug(),vN(2648,` for `),Ac(2649,`em`),vN(2650,`number`),ug(),vN(2651,`.`),ug()(),Ac(2652,`blockquote`)(2653,`p`),vN(2654,`Se utilizada a propriedade `),Ac(2655,`code`),vN(2656,`p-type`),ug(),vN(2657,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),Ac(2658,`code`),vN(2659,`{type}`),ug(),vN(2660,` da primeira série sobrescreverá o valor definido em `),Ac(2661,`code`),vN(2662,`p-type`),ug(),vN(2663,`.`),ug()(),Ac(2664,`blockquote`)(2665,`p`),vN(2666,`O componente só exibirá as séries que tiverem o mesmo `),Ac(2667,`code`),vN(2668,`type`),ug(),vN(2669,` definido, exceto para mesclagem para tipos `),Ac(2670,`code`),vN(2671,`column`),ug(),vN(2672,` e `),Ac(2673,`code`),vN(2674,`line`),ug(),vN(2675,`.`),ug()()()()(),Ac(2676,`h3`),vN(2677,`Enums`),ug(),Ac(2678,`h4`,4)(2679,`code`,5),vN(2680,`PoChartLabelFormat`),ug()(),Ac(2681,`div`,2)(2682,`p`)(2683,`em`),vN(2684,`Enum`),ug(),Ac(2685,`code`),vN(2686,`PoChartLabelFormat`),ug(),vN(2687,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),ug()(),Ac(2688,`h4`,11),vN(2689,`Propriedades`),ug(),Ac(2690,`table`,12)(2691,`tr`,13)(2692,`th`,14),vN(2693,`Nome`),ug(),Ac(2694,`th`,14),vN(2695,`Descrição`),ug()(),Ac(2696,`tr`,15)(2697,`td`,16)(2698,`div`,17)(2699,`span`,18),vN(2700,` Number`),Kc(2701,`br`),ug()()(),Ac(2702,`td`,23)(2703,`p`),vN(2704,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),Ac(2705,`code`),vN(2706,`'1.2-2'`),ug(),vN(2707,` da `),Ac(2708,`a`,69),vN(2709,`DecimalPipe`),ug(),vN(2710,`.`),ug()()(),Ac(2711,`tr`,15)(2712,`td`,16)(2713,`div`,17)(2714,`span`,18),vN(2715,` Currency`),Kc(2716,`br`),ug()()(),Ac(2717,`td`,23)(2718,`p`),vN(2719,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),Ac(2720,`a`,70),vN(2721,`DEFAULT_CURRENCY_CODE`),ug(),vN(2722,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),Ac(2723,`a`,71),vN(2724,`LOCALE_ID`),ug(),vN(2725,` da aplicação. A configuração pode ser feita da seguinte forma:`),ug(),Ac(2726,`pre`)(2727,`code`),vN(2728,`import { LOCALE_ID } from '@angular/core';
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
`),ug()()()()(),Ac(2729,`h4`,4)(2730,`code`,5),vN(2731,`PoChartType`),ug()(),Ac(2732,`div`,2)(2733,`p`)(2734,`em`),vN(2735,`Enum`),ug(),Ac(2736,`code`),vN(2737,`PoChartType`),ug(),vN(2738,` para especificação dos tipos de gráficos.`),ug()(),Ac(2739,`h4`,11),vN(2740,`Propriedades`),ug(),Ac(2741,`table`,12)(2742,`tr`,13)(2743,`th`,14),vN(2744,`Nome`),ug(),Ac(2745,`th`,14),vN(2746,`Descrição`),ug()(),Ac(2747,`tr`,15)(2748,`td`,16)(2749,`div`,17)(2750,`span`,18),vN(2751,` Area`),Kc(2752,`br`),ug()()(),Ac(2753,`td`,23)(2754,`p`),vN(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),ug()()(),Ac(2756,`tr`,15)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),vN(2760,` Donut`),Kc(2761,`br`),ug()()(),Ac(2762,`td`,23)(2763,`p`),vN(2764,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),ug()()(),Ac(2765,`tr`,15)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),vN(2769,` Pie`),Kc(2770,`br`),ug()()(),Ac(2771,`td`,23)(2772,`p`),vN(2773,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),ug()()(),Ac(2774,`tr`,15)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),vN(2778,` Line`),Kc(2779,`br`),ug()()(),Ac(2780,`td`,23)(2781,`p`),vN(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Ac(2783,`code`),vN(2784,`column`),ug(),vN(2785,` e `),Ac(2786,`code`),vN(2787,`area`),ug(),vN(2788,`, definindo-se o tipo através da propriedade `),Ac(2789,`code`),vN(2790,`PoChartSerie.type`),ug(),vN(2791,`.`),ug()()(),Ac(2792,`tr`,15)(2793,`td`,16)(2794,`div`,17)(2795,`span`,18),vN(2796,` Column`),Kc(2797,`br`),ug()()(),Ac(2798,`td`,23)(2799,`p`),vN(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),ug()()(),Ac(2801,`tr`,15)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),vN(2805,` Bar`),Kc(2806,`br`),ug()()(),Ac(2807,`td`,23)(2808,`p`),vN(2809,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),ug()()(),Ac(2810,`tr`,15)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),vN(2814,` Gauge`),Kc(2815,`br`),ug()()(),Ac(2816,`td`,23)(2817,`p`),vN(2818,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),ug(),Ac(2819,`ul`)(2820,`li`),vN(2821,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),ug(),Ac(2822,`li`),vN(2823,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),ug()()()(),Ac(2824,`tr`,15)(2825,`td`,16)(2826,`div`,17)(2827,`span`,18),vN(2828,` Radar`),Kc(2829,`br`),ug()()(),Ac(2830,`td`,23)(2831,`p`),vN(2832,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return r})();var _t=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||r)(E(Qn),E(wn))};static ɵcmp=Hn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Chart`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(d,i){d&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-chart-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-chart-basic-view`)(6,`sample-po-chart-labs-view`)(7,`sample-po-chart-coffee-ranking-view`)(8,`sample-po-chart-stacked-view`)(9,`sample-po-chart-summary-view`)(10,`sample-po-chart-world-exports-view`)(11,`sample-po-chart-technology-skill-view`),ug()()()),d&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,fe,ve,Pe,we,Me,ke,Ae,Re],encapsulation:2,changeDetection:1})}return r})()}];var Ge=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[kL.forChild(_t),kL]})}return r})();var yn=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[Ta,Ge]})}return r})();export{yn as DocPoChartModule};