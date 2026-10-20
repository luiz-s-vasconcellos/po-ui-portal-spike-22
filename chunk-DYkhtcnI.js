import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Br as Sx,C as Bze,Ct as Wte,Ei as jc,Fi as mx,Hi as pe,Ht as bae,In as xa,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,Mn as w5,Pi as mt,Ri as nu,Rt as _oe,Ut as c5,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_a as yO,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,fa as we$1,ga as xx,i as _a,ir as EF,ji as mO,k as Ec,mi as gO,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,un as m5,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Be=()=>({label:`Angular`,data:100});var We=()=>({label:`React`,data:10});var Fe=(r,W)=>[r,W];var Ce=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&nu(0,`po-chart`,0),d&2&&jE(`p-series`,yO(3,Fe,gO(1,Be),gO(2,We)))},dependencies:[Bze],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r});var fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Chart Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-chart-basic`),wg(),nu(23,`hr`)),d&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ie,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:`fillPoints`,label:`fillPoints`});var q=r=>[r];var He=()=>({label:`legend`,value:`legend`});var Ze=()=>({label:`roseType`,value:`roseType`});var Ye=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var je=()=>({label:`pointer`,value:`pointer`});var Ue=()=>({label:`stacked`,value:`stacked`});var Je=()=>({value:`fixed`,label:`Fixed`});function Xe(r,W){if(r&1){let l=Sx();jc(0,`po-checkbox-group`,54),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),v_(i)}),mt(`p-change`,function(){y_(l);let i=xx();return v_(i.changeDataLabelOptions())}),wg()}if(r&2){let l=xx();jE(`p-options`,mO(3,q,gO(2,Je))),ib(`ngModel`,l.selectedValuesDataLabel),t0()}}function Qe(r,W){if(r&1){let l=Sx();jc(0,`po-number`,55),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.valueGauge,i)||(s.valueGauge=i),v_(i)}),mt(`p-change`,function(i){y_(l);let s=xx();return v_(s.changeValueGauge(i))}),wg()}if(r&2){let l=xx();ib(`ngModel`,l.valueGauge),t0()}}function Ke(r,W){if(r&1){let l=Sx();jc(0,`po-radio-group`,56),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.selectedShapeOption,i)||(s.selectedShapeOption=i),v_(i)}),wg(),jc(1,`po-switch`,57),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.selectedSplitArea,i)||(s.selectedSplitArea=i),v_(i)}),wg(),jc(2,`po-switch`,58),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),v_(i)}),wg()}if(r&2){let l=xx();jE(`p-options`,l.optionsShapeOption),ib(`ngModel`,l.selectedShapeOption),t0(),rg(),ib(`ngModel`,l.selectedSplitArea),t0(),rg(),ib(`ngModel`,l.selectedAreaStyle),t0()}}function $e(r,W){if(r&1){let l=Sx();jc(0,`po-input`,59),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.data,i)||(s.data=i),v_(i)}),wg()}if(r&2){let l=xx();ib(`ngModel`,l.data),t0()}}function et(r,W){if(r&1){let l=Sx();jc(0,`po-input`,60),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.stackGroupName,i)||(s.stackGroupName=i),v_(i)}),wg()}if(r&2){let l=xx();ib(`ngModel`,l.stackGroupName),t0()}}function tt(r,W){if(r&1){let l=Sx();jc(0,`po-number`,61),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.fromGauge,i)||(s.fromGauge=i),v_(i)}),wg()}if(r&2){let l=xx();ib(`ngModel`,l.fromGauge),t0()}}function nt(r,W){if(r&1){let l=Sx();jc(0,`po-number`,62),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.toGauge,i)||(s.toGauge=i),v_(i)}),wg()}if(r&2){let l=xx();ib(`ngModel`,l.toGauge),t0()}}function it(r,W){if(r&1){let l=Sx();jc(0,`div`,3)(1,`po-button`,63),mt(`p-click`,function(){y_(l);let i=xx();return v_(i.addData())}),wg()()}}function ot(r,W){if(r&1){let l=Sx();jc(0,`po-number`,64),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.min,i)||(s.min=i),v_(i)}),wg(),jc(1,`po-number`,65),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.max,i)||(s.max=i),v_(i)}),wg(),jc(2,`po-input`,66),JN(),ob(`ngModelChange`,function(i){y_(l);let s=xx();return sO(s.colorIndicator,i)||(s.colorIndicator=i),v_(i)}),wg(),jc(3,`div`,3)(4,`po-button`,67),mt(`p-click`,function(){y_(l);let i=xx();return v_(i.addData())}),wg()()}if(r&2){let l=xx();ib(`ngModel`,l.min),t0(),rg(),ib(`ngModel`,l.max),t0(),rg(),ib(`ngModel`,l.colorIndicator),t0(),rg(2),jE(`p-disabled`,l.isTypeRadar&&!l.categories)}}var ye=(()=>{class r$1{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:xa.Line},{label:`Area`,value:xa.Area},{label:`Bar`,value:xa.Bar},{label:`Column`,value:xa.Column},{label:`Donut`,value:xa.Donut},{label:`Pie`,value:xa.Pie},{label:`Gauge`,value:xa.Gauge},{label:`Radar`,value:xa.Radar}];labelTypeOptions=[{label:`Number`,value:c5.Number},{label:`Currency`,value:c5.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:l})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===xa.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===xa.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=xa.Gauge,this.type=xa.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=xa.Radar,this.type=xa.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=r(r({},this.options),l?r({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===xa.Line||this.type===xa.Area||this.type===xa.Column||this.type===xa.Bar||this.type===xa.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static ɵfac=function(d){return new(d||r$1)};static ɵcmp=Zn({type:r$1,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:66,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let s=Sx();jc(0,`po-chart`,1),mt(`p-series-click`,function(a){return i.changeEvent(`p-series-click`,a)})(`p-series-hover`,function(a){return i.changeEvent(`p-series-hover`,a)}),wg(),nu(1,`po-divider`,2),jc(2,`div`,3),nu(3,`po-info`,4),wg(),nu(4,`po-divider`,5),jc(5,`form`)(6,`po-select`,6),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.type,a)||(i.type=a),v_(a)}),mt(`p-change`,function(a){return i.changeType(a)}),wg(),jc(7,`po-number`,7),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.height,a)||(i.height=a),v_(a)}),wg(),jc(8,`po-input`,8),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.title,a)||(i.title=a),v_(a)}),wg(),px(9,Xe,1,5,`po-checkbox-group`,9),wg(),nu(10,`po-divider`,10),jc(11,`form`,null,0)(13,`div`,3)(14,`po-switch`,11),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.isTypeGauge,a)||(i.isTypeGauge=a),v_(a)}),mt(`p-change`,function(a){return i.changeSwitchGauge(a)}),wg(),jc(15,`po-switch`,12),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.isTypeRadar,a)||(i.isTypeRadar=a),v_(a)}),mt(`p-change`,function(a){return i.changeSwitchRadar(a)}),wg(),px(16,Qe,1,1,`po-number`,13),px(17,Ke,3,4),wg(),jc(18,`div`,3)(19,`po-input`,14),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.label,a)||(i.label=a),v_(a)}),wg(),px(20,$e,1,1,`po-input`,15),jc(21,`po-select`,16),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.serieType,a)||(i.serieType=a),v_(a)}),mt(`p-change`,function(a){return i.changeType(a)}),wg(),jc(22,`po-input`,17),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.tooltip,a)||(i.tooltip=a),v_(a)}),wg(),jc(23,`po-input`,18),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.color,a)||(i.color=a),v_(a)}),wg(),px(24,et,1,1,`po-input`,19),px(25,tt,1,1,`po-number`,20),px(26,nt,1,1,`po-number`,21),px(27,it,2,0,`div`,3),wg()(),jc(28,`div`,3),nu(29,`po-divider`,22),jc(30,`po-input`,23),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.categories,a)||(i.categories=a),v_(a)}),mt(`p-blur`,function(){return i.addCategories()}),wg(),px(31,ot,5,4),wg(),jc(32,`form`)(33,`div`,3),nu(34,`po-divider`,24),jc(35,`po-number`,25),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.minRange,a)||(i.options.axis.minRange=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(36,`po-number`,26),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(37,`po-number`,27),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(38,`po-select`,28),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.labelType,a)||(i.options.axis.labelType=a),v_(a)}),mt(`p-change`,function(){return i.addOptions()}),wg(),jc(39,`po-number`,29),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(40,`po-number`,30),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(41,`po-number`,31),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(42,`po-number`,32),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(43,`po-number`,33),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.innerRadius,a)||(i.options.innerRadius=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(44,`po-number`,34),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.borderRadius,a)||(i.options.borderRadius=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(45,`po-input`,35),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.firstColumnName,a)||(i.options.firstColumnName=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(46,`po-input`,36),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(47,`po-input`,37),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.descriptionChart,a)||(i.options.descriptionChart=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(48,`po-input`,38),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),v_(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg()(),jc(49,`div`,3)(50,`po-checkbox-group`,39),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),v_(a)}),mt(`p-change`,function(){return i.changeHeaderOptions()}),wg(),jc(51,`po-checkbox-group`,40),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),v_(a)}),mt(`p-change`,function(){return i.changeAxisOptions()}),wg(),jc(52,`po-checkbox-group`,41),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),v_(a)}),mt(`p-change`,function(){return i.changeDataZoomOptions()}),wg(),jc(53,`po-checkbox-group`,42),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),v_(a)}),mt(`p-change`,function(){return i.changeFillPointsOptions()}),wg(),jc(54,`po-checkbox-group`,43),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),v_(a)}),mt(`p-change`,function(){return i.changeLegendOptions()}),wg(),jc(55,`po-checkbox-group`,44),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedRoseType,a)||(i.selectedRoseType=a),v_(a)}),mt(`p-change`,function(){return i.changeRoseTypeOptions()}),wg(),jc(56,`po-checkbox-group`,45),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),v_(a)}),mt(`p-change`,function(){return i.changeShowFromToLegend()}),wg(),jc(57,`po-checkbox-group`,46),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedPointer,a)||(i.selectedPointer=a),v_(a)}),mt(`p-change`,function(){return i.changePointer()}),wg(),jc(58,`po-checkbox-group`,47),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedStacked,a)||(i.selectedStacked=a),v_(a)}),mt(`p-change`,function(){return i.changeStacked()}),wg(),jc(59,`po-radio-group`,48),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),v_(a)}),mt(`p-change`,function(){return i.changeLegendVerticalPosition()}),wg(),jc(60,`po-radio-group`,49),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),v_(a)}),mt(`p-change`,function(){return i.changeLegendPosition()}),wg(),jc(61,`po-radio-group`,50),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedLegendType,a)||(i.selectedLegendType=a),v_(a)}),mt(`p-change`,function(){return i.changeLegendType()}),wg(),jc(62,`po-radio-group`,51),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.selectedRendererOption,a)||(i.selectedRendererOption=a),v_(a)}),mt(`p-change`,function(){return i.changeRendererOption()}),wg()(),nu(63,`po-divider`,52),jc(64,`div`,3)(65,`po-button`,53),mt(`p-click`,function(){return i.restore()}),wg()()()}d&2&&(jE(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),rg(3),jE(`p-value`,i.event),rg(3),ib(`ngModel`,i.type),jE(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),t0(),rg(),ib(`ngModel`,i.height),t0(),rg(),ib(`ngModel`,i.title),t0(),rg(),mx(i.isTypeGrid()?9:-1),rg(5),ib(`ngModel`,i.isTypeGauge),t0(),rg(),ib(`ngModel`,i.isTypeRadar),t0(),rg(),mx(i.isTypeGauge?16:-1),rg(),mx(i.isTypeRadar?17:-1),rg(2),ib(`ngModel`,i.label),t0(),rg(),mx(i.isTypeGauge?-1:20),rg(),ib(`ngModel`,i.serieType),jE(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),t0(),rg(),jE(`p-disabled`,i.disabledTooltip),ib(`ngModel`,i.tooltip),t0(),rg(),ib(`ngModel`,i.color),t0(),rg(),mx(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?24:-1),rg(),mx(i.isTypeGauge?25:-1),rg(),mx(i.isTypeGauge?26:-1),rg(),mx(i.isTypeRadar?-1:27),rg(3),qx(i.isTypeRadar?`po-md-3`:`po-md-4`),jE(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),ib(`ngModel`,i.categories),t0(),rg(),mx(i.isTypeRadar?31:-1),rg(4),ib(`ngModel`,i.options.axis.minRange),t0(),rg(),ib(`ngModel`,i.options.axis.maxRange),t0(),rg(),ib(`ngModel`,i.options.axis.gridLines),t0(),rg(),jE(`p-options`,i.labelTypeOptions),ib(`ngModel`,i.options.axis.labelType),t0(),rg(),ib(`ngModel`,i.options.axis.paddingBottom),t0(),rg(),ib(`ngModel`,i.options.axis.paddingLeft),t0(),rg(),ib(`ngModel`,i.options.axis.paddingRight),t0(),rg(),ib(`ngModel`,i.options.axis.rotateLegend),t0(),rg(),ib(`ngModel`,i.options.innerRadius),t0(),rg(),ib(`ngModel`,i.options.borderRadius),t0(),rg(),ib(`ngModel`,i.options.firstColumnName),t0(),rg(),ib(`ngModel`,i.options.textCenterGraph),t0(),rg(),ib(`ngModel`,i.options.descriptionChart),t0(),rg(),ib(`ngModel`,i.options.subtitleGauge),t0(),rg(2),jE(`p-columns`,2)(`p-options`,i.optionsHeader),ib(`ngModel`,i.selectedValuesHeader),t0(),rg(),jE(`p-columns`,2)(`p-options`,i.optionsAxis),ib(`ngModel`,i.selectedValuesAxis),t0(),rg(),jE(`p-columns`,2)(`p-options`,i.optionsDataZoom),ib(`ngModel`,i.selectedValuesDataZoom),t0(),rg(),jE(`p-columns`,1)(`p-options`,mO(83,q,gO(82,ze))),ib(`ngModel`,i.selectedValuesFillPoints),t0(),rg(),jE(`p-options`,mO(86,q,gO(85,He))),ib(`ngModel`,i.selectedValuesLegend),t0(),rg(),jE(`p-options`,mO(89,q,gO(88,Ze))),ib(`ngModel`,i.selectedRoseType),t0(),rg(),jE(`p-options`,mO(92,q,gO(91,Ye))),ib(`ngModel`,i.selectedFromToLegend),t0(),rg(),jE(`p-options`,mO(95,q,gO(94,je))),ib(`ngModel`,i.selectedPointer),t0(),rg(),jE(`p-options`,mO(98,q,gO(97,Ue))),ib(`ngModel`,i.selectedStacked),t0(),rg(),jE(`p-options`,i.optionsLegendVerticalPosition),ib(`ngModel`,i.selectedLegendVerticalPosition),t0(),rg(),jE(`p-options`,i.optionsLegendPosition),ib(`ngModel`,i.selectedLegendPosition),t0(),rg(),jE(`p-options`,i.optionsLegendType),ib(`ngModel`,i.selectedLegendType),t0(),rg(),jE(`p-options`,i.optionsRendererOption),ib(`ngModel`,i.selectedRendererOption),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Bze,Lf,m5,A5,doe,Ote,moe,w5,_oe],encapsulation:2,changeDetection:1})}return r$1})();var rt=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Chart Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-chart
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-chart-labs`),wg(),nu(23,`hr`)),d&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,rt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=p(Wte);participationByCountryInWorldExportsType=xa.Line;evolutionOfCoffeeAndSomeCompetitorsType=xa.Column;coffeConsumingChartType=xa.Donut;consumptionPerCapitaType=xa.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:xa.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:xa.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:xa.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:xa.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:xa.Column},{label:`2017`,data:[93,52,18],type:xa.Column},{label:`2020`,data:[95,21,-17],type:xa.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:xa.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:c5.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:c5.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,`_blank`)}showMeTheDates(l){this.poAlert.alert({title:`Statistic`,message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[we$1([Wte])],decls:28,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,1,`po-md-12`,`po-mt-2`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[`p-title`,`Top 5 coffee producing countries (in tons)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,1,`po-md-6`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[1,`po-md-6`,`po-mt-2`],[`p-height`,`198`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(jc(0,`div`,0)(1,`div`,1)(2,`div`,0),nu(3,`po-chart`,2)(4,`po-chart`,3),wg()(),jc(5,`div`,1),nu(6,`po-chart`,4),wg(),jc(7,`div`,5)(8,`po-chart`,6),mt(`p-series-click`,function(m){return i.searchMore(m)}),wg(),jc(9,`po-chart`,7),mt(`p-series-click`,function(m){return i.showMeTheDates(m)}),wg()(),jc(10,`div`,0),nu(11,`po-chart`,8),jc(12,`div`,9)(13,`po-widget`,10)(14,`div`,11),iO(15,`66 billion`),wg(),jc(16,`div`,12),iO(17,`cups of coffee are consumed per year in U.S.`),wg()(),jc(18,`po-widget`,10)(19,`div`,11),iO(20,`2nd most`),wg(),jc(21,`div`,12),iO(22,`traded commodity in the world second to Oil.`),wg()()()()(),jc(23,`div`,0)(24,`po-container`,13)(25,`div`,14),iO(26,`Top 10 Largest Coffee Chains in the World`),wg(),nu(27,`po-table`,15),wg()()),d&2&&(rg(3),jE(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),rg(),jE(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),rg(2),jE(`p-height`,816)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),rg(2),jE(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),rg(),jE(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),rg(2),jE(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),rg(16),jE(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[Bze,Ec,I5,Noe],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r});var Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Chart - Coffee Ranking`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-chart-coffee-ranking`),wg(),nu(23,`hr`)),d&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,pt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,_e],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{typeBar=xa.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:6,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[`p-title`,`Average Temperature by Region`,1,`po-lg-6`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,1,`po-lg-6`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(jc(0,`po-container`)(1,`div`,0),iO(2,`Energy and Climate Analysis`),wg(),jc(3,`div`,1),nu(4,`po-chart`,2)(5,`po-chart`,3),wg()()),d&2&&(rg(4),jE(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),rg(),jE(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[Bze,Ec],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Chart - Stacked`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-chart-stacked`),wg(),nu(23,`hr`)),d&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ct,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Te],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=xa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:8,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(jc(0,`po-container`)(1,`div`,0),iO(2,`Sales Performance`),wg(),jc(3,`div`,1)(4,`div`,2),nu(5,`po-chart`,3),wg(),jc(6,`div`,2),nu(7,`po-chart`,4),wg()()()),d&2&&(rg(5),jE(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),rg(2),jE(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[Bze,Ec],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r});var Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Chart - Summary`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-chart-summary`),wg(),nu(23,`hr`)),d&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ht,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Le],encapsulation:2,changeDetection:1})}return r})();var De=(()=>{class r{participationByCountryInWorldExportsType=xa.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:2,vars:5,consts:[[1,`po-row`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(jc(0,`div`,0),nu(1,`po-chart`,1),wg()),d&2&&(rg(),jE(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[Bze],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r});var ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Chart - World Exports`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-chart-world-exports`),wg(),nu(23,`hr`)),d&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,bt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,De],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=xa.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:3,vars:6,consts:[[1,`po-row`],[`p-title`,`Technology Skill Assessment`,1,`po-md-6`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,1,`po-md-6`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(jc(0,`div`,0),nu(1,`po-chart`,1)(2,`po-chart`,2),wg()),d&2&&(rg(),jE(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),rg(),jE(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[Bze],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Chart - Radar`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-chart-technology-skill`),wg(),nu(23,`hr`)),d&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ft,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2842,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`]],template:function(d,i){d&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoChartModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-chart`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoChartComponent`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`O `),jc(18,`code`),iO(19,`po-chart`),wg(),iO(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),wg(),jc(21,`p`),iO(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),wg(),jc(23,`p`),iO(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),wg(),jc(25,`p`),iO(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),jc(27,`em`),iO(28,`mouse`),wg(),iO(29,` sobre o elemento.`),wg(),jc(30,`h4`),iO(31,`Guia de uso para Gráficos`),wg(),jc(32,`blockquote`)(33,`p`),iO(34,`Veja nosso `),jc(35,`a`,6),iO(36,`guia de uso para gráficos`),wg(),iO(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),wg()(),jc(38,`h4`),iO(39,`Tokens customizáveis`),wg(),jc(40,`p`),iO(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(42,`blockquote`)(43,`p`),iO(44,`Para maiores informações, acesse o guia `),jc(45,`a`,7),iO(46,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(47,`.`),wg()(),jc(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),iO(52,`Propriedade`),wg(),jc(53,`th`),iO(54,`Descrição`),wg(),jc(55,`th`),iO(56,`Valor Padrão`),wg()()(),jc(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),iO(61,`Chart (po-chart)`),wg()(),nu(62,`td`)(63,`td`),wg(),jc(64,`tr`)(65,`td`)(66,`code`),iO(67,`--background-color-grid`),wg()(),jc(68,`td`),iO(69,`Cor de background dos gráficos`),wg(),jc(70,`td`)(71,`code`),iO(72,`var(--color-neutral-light-00)`),wg()()(),jc(73,`tr`)(74,`td`)(75,`code`),iO(76,`--color-description-chart`),wg()(),jc(77,`td`),iO(78,`Cor da descrição dos gráficos`),wg(),jc(79,`td`)(80,`code`),iO(81,`var(--color-neutral-dark-70)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),iO(85,`--font-family-description-chart`),wg()(),jc(86,`td`),iO(87,`Fonte da descrição dos gráficos`),wg(),jc(88,`td`)(89,`code`),iO(90,`var(--font-family-theme)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),iO(94,`--font-size-description-chart`),wg()(),jc(95,`td`),iO(96,`Tamanho da fonte da descrição dos gráficos`),wg(),jc(97,`td`)(98,`code`),iO(99,`var(--font-size-sm)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`code`),iO(103,`--font-weight-description-chart`),wg()(),jc(104,`td`),iO(105,`Peso da fonte da descrição dos gráficos`),wg(),jc(106,`td`)(107,`code`),iO(108,`var(--font-weight-normal)`),wg()()(),jc(109,`tr`)(110,`td`)(111,`strong`),iO(112,`Header (po-chart .po-chart-header )`),wg()(),nu(113,`td`)(114,`td`),wg(),jc(115,`tr`)(116,`td`)(117,`code`),iO(118,`--background-color`),wg()(),jc(119,`td`),iO(120,`Cor de background do cabeçalho`),wg(),jc(121,`td`)(122,`code`),iO(123,`var(--color-neutral-light-00)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),iO(127,`--color`),wg()(),jc(128,`td`),iO(129,`Cor da fonte do cabeçalho`),wg(),jc(130,`td`)(131,`code`),iO(132,`var(--color-neutral-dark-70)`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),iO(136,`--font-family`),wg()(),jc(137,`td`),iO(138,`Família tipográfica usada`),wg(),jc(139,`td`)(140,`code`),iO(141,`var(--font-family-theme)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),iO(145,`--font-size-title`),wg()(),jc(146,`td`),iO(147,`Tamanho da fonte`),wg(),jc(148,`td`)(149,`code`),iO(150,`var(--font-size-default)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),iO(154,`--font-size-icons`),wg()(),jc(155,`td`),iO(156,`Tamanho dos ícones`),wg(),jc(157,`td`)(158,`code`),iO(159,`var(--font-size-md)`),wg()()(),jc(160,`tr`)(161,`td`)(162,`code`),iO(163,`--font-weight`),wg()(),jc(164,`td`),iO(165,`Peso da fonte`),wg(),jc(166,`td`)(167,`code`),iO(168,`var(--font-weight-bold)`),wg()()(),jc(169,`tr`)(170,`td`)(171,`strong`),iO(172,`Chart (po-chart .po-chart)`),wg()(),nu(173,`td`)(174,`td`),wg(),jc(175,`tr`)(176,`td`)(177,`code`),iO(178,`--color-grid`),wg()(),jc(179,`td`),iO(180,`Cor da linha dos gráficos que possuem eixo`),wg(),jc(181,`td`)(182,`code`),iO(183,`var(--color-neutral-light-20)`),wg()()(),jc(184,`tr`)(185,`td`)(186,`code`),iO(187,`--font-family-grid`),wg()(),jc(188,`td`),iO(189,`Família tipográfica usada nos valores dos eixos`),wg(),jc(190,`td`)(191,`code`),iO(192,`var(--font-family-theme)`),wg()()(),jc(193,`tr`)(194,`td`)(195,`code`),iO(196,`--font-size-grid`),wg()(),jc(197,`td`),iO(198,`Tamanho da fonte usada nos valores dos eixos`),wg(),jc(199,`td`)(200,`code`),iO(201,`var(--font-size-xs)`),wg()()(),jc(202,`tr`)(203,`td`)(204,`code`),iO(205,`--font-weight-grid`),wg()(),jc(206,`td`),iO(207,`Peso da fonte usada nos valores dos eixos`),wg(),jc(208,`td`)(209,`code`),iO(210,`var(--font-weight-normal)`),wg()()(),jc(211,`tr`)(212,`td`)(213,`code`),iO(214,`--color-legend`),wg()(),jc(215,`td`),iO(216,`Cor da fonte da legenda`),wg(),jc(217,`td`)(218,`code`),iO(219,`var(--color-neutral-dark-70)`),wg()()(),jc(220,`tr`)(221,`td`)(222,`code`),iO(223,`--color-legend-scroll-icon-active`),wg()(),jc(224,`td`),iO(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),jc(226,`code`),iO(227,`scroll`),wg()(),jc(228,`td`)(229,`code`),iO(230,`var(--color-action-default)`),wg()()(),jc(231,`tr`)(232,`td`)(233,`code`),iO(234,`--color-legend-scroll-icon-inactive`),wg()(),jc(235,`td`),iO(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),jc(237,`code`),iO(238,`scroll`),wg()(),jc(239,`td`)(240,`code`),iO(241,`var(--color-action-disabled)`),wg()()(),jc(242,`tr`)(243,`td`)(244,`code`),iO(245,`--border-radius-bar`),wg()(),jc(246,`td`),iO(247,`Tamanho da borda nos graficos `),jc(248,`code`),iO(249,`Bar`),wg(),iO(250,` e `),jc(251,`code`),iO(252,`Column`),wg()(),jc(253,`td`)(254,`code`),iO(255,`var(--border-radius-none)`),wg()()(),jc(256,`tr`)(257,`td`)(258,`code`),iO(259,`--border-color`),wg()(),jc(260,`td`),iO(261,`Cor da borda do gráfico nos Gráficos `),jc(262,`code`),iO(263,`Donut`),wg(),iO(264,` e `),jc(265,`code`),iO(266,`Pie`),wg()(),jc(267,`td`)(268,`code`),iO(269,`var(--color-neutral-light-00)`),wg()()(),jc(270,`tr`)(271,`td`)(272,`code`),iO(273,`--color-hightlight-value`),wg()(),jc(274,`td`),iO(275,`Cor do valor de destaque nos Gráficos `),jc(276,`code`),iO(277,`Donut`),wg(),iO(278,` e `),jc(279,`code`),iO(280,`Gauge`),wg()(),jc(281,`td`)(282,`code`),iO(283,`var(--color-neutral-dark-70)`),wg()()(),jc(284,`tr`)(285,`td`)(286,`code`),iO(287,`--font-family-hightlight-value`),wg()(),jc(288,`td`),iO(289,`Família tipográfica do valor de destaque nos Gráficos `),jc(290,`code`),iO(291,`Donut`),wg(),iO(292,` e `),jc(293,`code`),iO(294,`Gauge`),wg()(),jc(295,`td`)(296,`code`),iO(297,`var(--font-family-theme)`),wg()()(),jc(298,`tr`)(299,`td`)(300,`code`),iO(301,`--font-weight-hightlight-value`),wg()(),jc(302,`td`),iO(303,`Peso da fonte do valor de destaque nos Gráficos `),jc(304,`code`),iO(305,`Donut`),wg(),iO(306,` e `),jc(307,`code`),iO(308,`Gauge`),wg()(),jc(309,`td`)(310,`code`),iO(311,`var(--font-weight-bold)`),wg()()(),jc(312,`tr`)(313,`td`)(314,`code`),iO(315,`--color-base-gauge`),wg()(),jc(316,`td`),iO(317,`Cor da base do gráfico `),jc(318,`code`),iO(319,`Gauge`),wg()(),jc(320,`td`)(321,`code`),iO(322,`var(--color-neutral-light-20)`),wg()()(),jc(323,`tr`)(324,`td`)(325,`code`),iO(326,`--color-gauge-pointer-color`),wg()(),jc(327,`td`),iO(328,`Cor do ponteiro do gráfico `),jc(329,`code`),iO(330,`Gauge`),wg()(),jc(331,`td`)(332,`code`),iO(333,`var(--color-neutral-dark-70)`),wg()()(),jc(334,`tr`)(335,`td`)(336,`code`),iO(337,`--color-chart-line-point-fill`),wg()(),jc(338,`td`),iO(339,`Cor de dentro do círculo dos gráficos `),jc(340,`code`),iO(341,`Line`),wg(),iO(342,` e `),jc(343,`code`),iO(344,`Area`),wg()(),jc(345,`td`)(346,`code`),iO(347,`var(--color-neutral-light-00)`),wg()()(),jc(348,`tr`)(349,`td`)(350,`code`),iO(351,`--border-color-radar`),wg()(),jc(352,`td`),iO(353,`Cor do eixo da grid do gráfico `),jc(354,`code`),iO(355,`Radar`),wg()(),jc(356,`td`)(357,`code`),iO(358,`var(--color-neutral-light-30)`),wg()()(),jc(359,`tr`)(360,`td`)(361,`code`),iO(362,`--color-background-zebra`),wg()(),jc(363,`td`),iO(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),jc(365,`code`),iO(366,`Radar`),wg()(),jc(367,`td`)(368,`code`),iO(369,`var(--color-neutral-light-10)`),wg()()(),jc(370,`tr`)(371,`td`)(372,`code`),iO(373,`--color-background-line`),wg()(),jc(374,`td`),iO(375,`Cor das áreas entre as faixas zebradas da grade do `),jc(376,`code`),iO(377,`Radar`),wg()(),jc(378,`td`)(379,`code`),iO(380,`none`),wg()()(),jc(381,`tr`)(382,`td`)(383,`strong`),iO(384,`Wrapper (.po-chart-container-gauge)`),wg()(),nu(385,`td`)(386,`td`),wg(),jc(387,`tr`)(388,`td`)(389,`code`),iO(390,`--background-color-container-gauge`),wg()(),jc(391,`td`),iO(392,`Cor de background do container do gauge`),wg(),jc(393,`td`)(394,`code`),iO(395,`var(--color-neutral-light-00)`),wg()()()()()(),jc(396,`div`,8)(397,`h4`,9),iO(398,`Seletor`),wg(),jc(399,`pre`,10),iO(400,`<po-chart
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
`),wg()(),jc(401,`h4`,11),iO(402,`Propriedades`),wg(),jc(403,`table`,12)(404,`tr`,13)(405,`th`,14),iO(406,`Nome`),wg(),jc(407,`th`,14),iO(408,`Tipo`),wg(),jc(409,`th`,14),iO(410,`Padrão`),wg(),jc(411,`th`,14),iO(412,`Descrição`),wg()(),jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),iO(417,` p-categories`),nu(418,`br`),wg()()(),jc(419,`td`,19)(420,`code`,20),iO(421,`Array<string> `),wg(),jc(422,`code`,21),iO(423,` PoChartRadarOptions`),wg()(),jc(424,`td`,22),iO(425,`-`),wg(),jc(426,`td`,23)(427,`em`)(428,`strong`),iO(429,`(opcional)`),wg()(),jc(430,`p`),iO(431,`Define os valores utilizados na construção das categorias do gráfico.`),wg(),jc(432,`p`),iO(433,`Para gráficos dos tipos `),jc(434,`em`),iO(435,`bar`),wg(),iO(436,`, `),jc(437,`em`),iO(438,`area`),wg(),iO(439,`, `),jc(440,`em`),iO(441,`column`),wg(),iO(442,` e `),jc(443,`em`),iO(444,`line`),wg(),iO(445,`, representa os nomes das categorias exibidas no eixo.`),wg(),jc(446,`p`),iO(447,`Para gráficos do tipo `),jc(448,`em`),iO(449,`radar`),wg(),iO(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),jc(451,`code`),iO(452,`Radar`),wg(),iO(453,`.`),wg(),jc(454,`blockquote`)(455,`p`),iO(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),wg()(),jc(457,`blockquote`)(458,`p`),iO(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),wg()()()(),jc(460,`tr`,15)(461,`td`,16)(462,`div`,17)(463,`span`,18),iO(464,` p-custom-actions`),nu(465,`br`),wg()()(),jc(466,`td`,19)(467,`code`,24),iO(468,`Array<PoPopupAction>`),wg()(),jc(469,`td`,22),iO(470,`-`),wg(),jc(471,`td`,23)(472,`em`)(473,`strong`),iO(474,`(opcional)`),wg()(),jc(475,`p`),iO(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),wg()()(),jc(477,`tr`,15)(478,`td`,16)(479,`div`,17)(480,`span`,18),iO(481,` p-data-label`),nu(482,`br`),wg()()(),jc(483,`td`,19)(484,`code`,25),iO(485,`PoChartDataLabel`),wg()(),jc(486,`td`,22),iO(487,`-`),wg(),jc(488,`td`,23)(489,`em`)(490,`strong`),iO(491,`(opcional)`),wg()(),jc(492,`p`),iO(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),wg(),jc(494,`p`),iO(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),wg(),jc(496,`ul`)(497,`li`),iO(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),wg(),jc(499,`li`),iO(500,`O `),jc(501,`em`),iO(502,`tooltip`),wg(),iO(503,` não será exibido.`),wg(),jc(504,`li`),iO(505,`Os marcadores (`),jc(506,`em`),iO(507,`bullets`),wg(),iO(508,`) terão seu estilo ajustado.`),wg(),jc(509,`li`),iO(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),wg()(),jc(511,`blockquote`)(512,`p`),iO(513,`Disponível para gráficos do tipo `),jc(514,`code`),iO(515,`line`),wg(),iO(516,`, `),jc(517,`code`),iO(518,`area`),wg(),iO(519,`, `),jc(520,`code`),iO(521,`column`),wg(),iO(522,`, `),jc(523,`code`),iO(524,`bar`),wg(),iO(525,` e `),jc(526,`code`),iO(527,`radar`),wg(),iO(528,`.`),wg()(),jc(529,`h4`),iO(530,`Exemplo de utilização:`),wg(),jc(531,`pre`)(532,`code`,26),iO(533,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),wg()()()(),jc(534,`tr`,15)(535,`td`,16)(536,`div`,17)(537,`span`,18),iO(538,` p-height`),nu(539,`br`),wg()()(),jc(540,`td`,19)(541,`code`,27),iO(542,`number`),wg()(),jc(543,`td`,22)(544,`p`)(545,`code`),iO(546,`400`),wg()()(),jc(547,`td`,23)(548,`em`)(549,`strong`),iO(550,`(opcional)`),wg()(),jc(551,`p`),iO(552,`Define a altura do gráfico em px.`),wg(),jc(553,`blockquote`)(554,`p`),iO(555,`No caso do tipo `),jc(556,`code`),iO(557,`Gauge`),wg(),iO(558,`, o valor padrão é `),jc(559,`code`),iO(560,`300`),wg(),iO(561,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),wg()()()(),jc(562,`tr`,15)(563,`td`,16)(564,`div`,17)(565,`span`,18),iO(566,` p-literals`),nu(567,`br`),wg()()(),jc(568,`td`,19)(569,`code`,28),iO(570,`PoChartLiterals`),wg()(),jc(571,`td`,22),iO(572,`-`),wg(),jc(573,`td`,23)(574,`em`)(575,`strong`),iO(576,`(opcional)`),wg()(),jc(577,`p`),iO(578,`Objeto com as literais usadas no `),jc(579,`code`),iO(580,`po-chart`),wg(),iO(581,`.`),wg(),jc(582,`p`),iO(583,`Para utilizar basta passar a literal que deseja customizar:`),wg(),jc(584,`pre`)(585,`code`),iO(586,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),wg()(),jc(587,`p`),iO(588,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),wg(),jc(589,`pre`)(590,`code`),iO(591,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),wg()(),jc(592,`blockquote`)(593,`p`),iO(594,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(595,`a`,29)(596,`code`),iO(597,`PoI18nService`),wg()(),iO(598,` ou do browser.`),wg()()()(),jc(599,`tr`,15)(600,`td`,16)(601,`div`,17)(602,`span`,18),iO(603,` p-options`),nu(604,`br`),wg()()(),jc(605,`td`,19)(606,`code`,30),iO(607,`PoChartOptions`),wg()(),jc(608,`td`,22),iO(609,`-`),wg(),jc(610,`td`,23)(611,`em`)(612,`strong`),iO(613,`(opcional)`),wg()(),jc(614,`p`),iO(615,`Objeto com as configurações usadas no `),jc(616,`code`),iO(617,`po-chart`),wg(),iO(618,`.`),wg(),jc(619,`p`),iO(620,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),jc(621,`em`),iO(622,`axis`),wg(),iO(623,`) para os gráficos dos tipos `),jc(624,`code`),iO(625,`area`),wg(),iO(626,`, `),jc(627,`code`),iO(628,`line`),wg(),iO(629,`, `),jc(630,`code`),iO(631,`column`),wg(),iO(632,`, `),jc(633,`code`),iO(634,`bar`),wg(),iO(635,` e `),jc(636,`code`),iO(637,`radar`),wg(),iO(638,` da seguinte forma:`),wg(),jc(639,`pre`)(640,`code`),iO(641,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),wg()()()(),jc(642,`tr`,15)(643,`td`,16)(644,`div`,17)(645,`span`,18),iO(646,` p-series`),nu(647,`br`),wg()()(),jc(648,`td`,19)(649,`code`,31),iO(650,`Array<PoChartSerie>`),wg()(),jc(651,`td`,22),iO(652,`-`),wg(),jc(653,`td`,23)(654,`p`),iO(655,`Define os elementos do gráfico que serão criados dinamicamente.`),wg()()(),jc(656,`tr`,15)(657,`td`,16)(658,`div`,32)(659,`span`,33),iO(660,` (p-series-click)`),nu(661,`br`),wg()()(),jc(662,`td`,19)(663,`code`,34),iO(664,`EventEmitter`),wg()(),jc(665,`td`,22),iO(666,`-`),wg(),jc(667,`td`,23)(668,`em`)(669,`strong`),iO(670,`(opcional)`),wg()(),jc(671,`p`),iO(672,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),wg(),jc(673,`p`),iO(674,`O evento emitirá o seguinte parâmetro:`),wg(),jc(675,`ul`)(676,`li`)(677,`em`),iO(678,`donut`),wg(),iO(679,` e `),jc(680,`em`),iO(681,`pie`),wg(),iO(682,`: um objeto contendo a categoria e valor da série.`),wg(),jc(683,`li`)(684,`em`),iO(685,`radar`),wg(),iO(686,`: um objeto contendo o nome da série e os valores.`),wg(),jc(687,`li`)(688,`em`),iO(689,`area`),wg(),iO(690,`, `),jc(691,`em`),iO(692,`line`),wg(),iO(693,`, `),jc(694,`em`),iO(695,`column`),wg(),iO(696,` e `),jc(697,`em`),iO(698,`bar`),wg(),iO(699,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),wg()()()(),jc(700,`tr`,15)(701,`td`,16)(702,`div`,32)(703,`span`,33),iO(704,` (p-series-hover)`),nu(705,`br`),wg()()(),jc(706,`td`,19)(707,`code`,34),iO(708,`EventEmitter`),wg()(),jc(709,`td`,22),iO(710,`-`),wg(),jc(711,`td`,23)(712,`em`)(713,`strong`),iO(714,`(opcional)`),wg()(),jc(715,`p`),iO(716,`Evento executado quando o usuário passar o `),jc(717,`em`),iO(718,`mouse`),wg(),iO(719,` sobre um elemento do gráfico.`),wg(),jc(720,`p`),iO(721,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),wg(),jc(722,`ul`)(723,`li`)(724,`em`),iO(725,`donut`),wg(),iO(726,` e `),jc(727,`em`),iO(728,`pie`),wg(),iO(729,`: um objeto contendo a categoria e valor da série.`),wg(),jc(730,`li`)(731,`em`),iO(732,`radar`),wg(),iO(733,`: um objeto contendo o nome da série e os valores.`),wg(),jc(734,`li`)(735,`em`),iO(736,`area`),wg(),iO(737,`, `),jc(738,`em`),iO(739,`line`),wg(),iO(740,`, `),jc(741,`em`),iO(742,`column`),wg(),iO(743,` e `),jc(744,`em`),iO(745,`bar`),wg(),iO(746,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),wg()()()(),jc(747,`tr`,15)(748,`td`,16)(749,`div`,17)(750,`span`,18),iO(751,` p-title`),nu(752,`br`),wg()()(),jc(753,`td`,19)(754,`code`,35),iO(755,`string`),wg()(),jc(756,`td`,22),iO(757,`-`),wg(),jc(758,`td`,23)(759,`em`)(760,`strong`),iO(761,`(opcional)`),wg()(),jc(762,`p`),iO(763,`Define o título do gráfico.`),wg()()(),jc(764,`tr`,15)(765,`td`,16)(766,`div`,17)(767,`span`,18),iO(768,` p-type`),nu(769,`br`),wg()()(),jc(770,`td`,19)(771,`code`,36),iO(772,`PoChartType`),wg()(),jc(773,`td`,22),iO(774,`-`),wg(),jc(775,`td`,23)(776,`em`)(777,`strong`),iO(778,`(opcional)`),wg()(),jc(779,`p`),iO(780,`Define o tipo de gráfico.`),wg(),jc(781,`p`),iO(782,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),jc(783,`code`),iO(784,`type`),wg(),iO(785,` conforme a interface `),jc(786,`code`),iO(787,`PoChartSerie`),wg(),iO(788,`.`),wg(),jc(789,`blockquote`)(790,`p`),iO(791,`Note que, se houver declaração de tipo de gráfico tanto em `),jc(792,`code`),iO(793,`p-type`),wg(),iO(794,` quanto em `),jc(795,`code`),iO(796,`PochartSerie.type`),wg(),iO(797,`, o valor `),jc(798,`code`),iO(799,`{ type }`),wg(),iO(800,` da primeira série anulará o valor definido em `),jc(801,`code`),iO(802,`p-type`),wg(),iO(803,`.`),wg()(),jc(804,`p`),iO(805,`Se não passado valor, o padrão será relativo à primeira série passada em `),jc(806,`code`),iO(807,`p-series`),wg(),iO(808,`:`),wg(),jc(809,`ul`)(810,`li`),iO(811,`Se `),jc(812,`code`),iO(813,`p-series = [{ data: [1,2,3] }]`),wg(),iO(814,`: será `),jc(815,`code`),iO(816,`PoChartType.Column`),wg(),iO(817,`.`),wg(),jc(818,`li`),iO(819,`Se `),jc(820,`code`),iO(821,`p-series = [{ data: 1 }]`),wg(),iO(822,`: será `),jc(823,`code`),iO(824,`PoChartType.Pie`),wg(),iO(825,`.`),wg()(),jc(826,`blockquote`)(827,`p`),iO(828,`Veja os valores válidos no `),jc(829,`em`),iO(830,`enum`),wg(),jc(831,`code`),iO(832,`PoChartType`),wg(),iO(833,`.`),wg()()()(),jc(834,`tr`,15)(835,`td`,16)(836,`div`,17)(837,`span`,18),iO(838,` p-value-gauge-multiple`),nu(839,`br`),wg()()(),jc(840,`td`,19)(841,`code`,27),iO(842,`number`),wg()(),jc(843,`td`,22),iO(844,`-`),wg(),jc(845,`td`,23)(846,`em`)(847,`strong`),iO(848,`(opcional)`),wg()(),jc(849,`p`),iO(850,`Define o valor do gráfico do tipo `),jc(851,`code`),iO(852,`Gauge`),wg(),iO(853,` quando utliza as propriedades `),jc(854,`code`),iO(855,`From`),wg(),jc(856,`code`),iO(857,`To`),wg(),iO(858,`.`),wg()()()(),jc(859,`h3`),iO(860,`Interfaces`),wg(),jc(861,`h4`,37)(862,`code`,5),iO(863,`PoChartAxisOptions`),wg()(),jc(864,`div`,2)(865,`p`)(866,`em`),iO(867,`Interface`),wg(),iO(868,` que define os eixos do grid.`),wg()(),jc(869,`h4`,11),iO(870,`Propriedades`),wg(),jc(871,`table`,12)(872,`tr`,13)(873,`th`,14),iO(874,`Nome`),wg(),jc(875,`th`,14),iO(876,`Tipo`),wg(),jc(877,`th`,14),iO(878,`Descrição`),wg()(),jc(879,`tr`,15)(880,`td`,16)(881,`div`,17)(882,`span`,18),iO(883,` gridLines`),nu(884,`br`),wg()()(),jc(885,`td`,19)(886,`code`,27),iO(887,`number`),wg()(),jc(888,`td`,23)(889,`em`)(890,`strong`),iO(891,`(opcional)`),wg()(),jc(892,`p`),iO(893,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),jc(894,`code`),iO(895,`Area`),wg(),iO(896,`, `),jc(897,`code`),iO(898,`Line`),wg(),iO(899,` e `),jc(900,`code`),iO(901,`Column`),wg(),iO(902,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),jc(903,`code`),iO(904,`Bar`),wg(),iO(905,`, tratará as linhas verticais (eixo Y).`),wg(),jc(906,`p`),iO(907,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),wg(),jc(908,`ul`)(909,`li`),iO(910,`Quantidade padrão de linhas: '5';`),wg(),jc(911,`li`),iO(912,`Quantidade mínima permitida: '2';`),wg()()()(),jc(913,`tr`,15)(914,`td`,16)(915,`div`,17)(916,`span`,18),iO(917,` labelType`),nu(918,`br`),wg()()(),jc(919,`td`,19)(920,`code`,38),iO(921,`PoChartLabelFormat`),wg()(),jc(922,`td`,23)(923,`em`)(924,`strong`),iO(925,`(opcional)`),wg()(),jc(926,`p`),iO(927,`Define o tipo do label e a formatação exibida no eixo de valor.`),wg()()(),jc(928,`tr`,15)(929,`td`,16)(930,`div`,17)(931,`span`,18),iO(932,` maxRange`),nu(933,`br`),wg()()(),jc(934,`td`,19)(935,`code`,27),iO(936,`number`),wg()(),jc(937,`td`,23)(938,`em`)(939,`strong`),iO(940,`(opcional)`),wg()(),jc(941,`p`),iO(942,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),wg(),jc(943,`blockquote`)(944,`p`),iO(945,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),wg()()()(),jc(946,`tr`,15)(947,`td`,16)(948,`div`,17)(949,`span`,18),iO(950,` minRange`),nu(951,`br`),wg()()(),jc(952,`td`,19)(953,`code`,27),iO(954,`number`),wg()(),jc(955,`td`,23)(956,`em`)(957,`strong`),iO(958,`(opcional)`),wg()(),jc(959,`p`),iO(960,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),wg(),jc(961,`blockquote`)(962,`p`),iO(963,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),wg()()()(),jc(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),iO(968,` paddingBottom`),nu(969,`br`),wg()()(),jc(970,`td`,19)(971,`code`,27),iO(972,`number`),wg()(),jc(973,`td`,23)(974,`em`)(975,`strong`),iO(976,`(opcional)`),wg()(),jc(977,`p`),iO(978,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),wg()()(),jc(979,`tr`,15)(980,`td`,16)(981,`div`,17)(982,`span`,18),iO(983,` paddingLeft`),nu(984,`br`),wg()()(),jc(985,`td`,19)(986,`code`,27),iO(987,`number`),wg()(),jc(988,`td`,23)(989,`em`)(990,`strong`),iO(991,`(opcional)`),wg()(),jc(992,`p`),iO(993,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),wg()()(),jc(994,`tr`,15)(995,`td`,16)(996,`div`,17)(997,`span`,18),iO(998,` paddingRight`),nu(999,`br`),wg()()(),jc(1e3,`td`,19)(1001,`code`,27),iO(1002,`number`),wg()(),jc(1003,`td`,23)(1004,`em`)(1005,`strong`),iO(1006,`(opcional)`),wg()(),jc(1007,`p`),iO(1008,`Permite aumentar ou diminuir o espaço direito do gráfico.`),wg()()(),jc(1009,`tr`,15)(1010,`td`,16)(1011,`div`,17)(1012,`span`,18),iO(1013,` rotateLegend`),nu(1014,`br`),wg()()(),jc(1015,`td`,19)(1016,`code`,27),iO(1017,`number`),wg()(),jc(1018,`td`,23)(1019,`em`)(1020,`strong`),iO(1021,`(opcional)`),wg()(),jc(1022,`p`),iO(1023,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),wg(),jc(1024,`ul`)(1025,`li`),iO(1026,`Valores negativos giram a legenda para a esquerda.`),wg(),jc(1027,`li`),iO(1028,`Valores positivos giram a legenda para a direita.`),wg()(),jc(1029,`p`),iO(1030,`Se não for definido, a legenda será exibida sem rotação.`),wg()()(),jc(1031,`tr`,15)(1032,`td`,16)(1033,`div`,17)(1034,`span`,18),iO(1035,` showAxisDetails`),nu(1036,`br`),wg()()(),jc(1037,`td`,19)(1038,`code`,39),iO(1039,`boolean`),wg()(),jc(1040,`td`,23)(1041,`em`)(1042,`strong`),iO(1043,`(opcional)`),wg()(),jc(1044,`p`),iO(1045,`Exibe a linha de detalhes que acompanha o mouse`),wg()()(),jc(1046,`tr`,15)(1047,`td`,16)(1048,`div`,17)(1049,`span`,18),iO(1050,` showXAxis`),nu(1051,`br`),wg()()(),jc(1052,`td`,19)(1053,`code`,39),iO(1054,`boolean`),wg()(),jc(1055,`td`,23)(1056,`em`)(1057,`strong`),iO(1058,`(opcional)`),wg()(),jc(1059,`p`),iO(1060,`Exibe a linha do eixo X`),wg()()(),jc(1061,`tr`,15)(1062,`td`,16)(1063,`div`,17)(1064,`span`,18),iO(1065,` showYAxis`),nu(1066,`br`),wg()()(),jc(1067,`td`,19)(1068,`code`,39),iO(1069,`boolean`),wg()(),jc(1070,`td`,23)(1071,`em`)(1072,`strong`),iO(1073,`(opcional)`),wg()(),jc(1074,`p`),iO(1075,`Exibe a linha do eixo Y`),wg()()()(),jc(1076,`h4`,37)(1077,`code`,5),iO(1078,`PoChartHeaderOptions`),wg()(),jc(1079,`div`,2)(1080,`p`)(1081,`em`),iO(1082,`Interface`),wg(),iO(1083,` para configuração das ações disponíveis no cabeçalho.`),wg()(),jc(1084,`h4`,11),iO(1085,`Propriedades`),wg(),jc(1086,`table`,12)(1087,`tr`,13)(1088,`th`,14),iO(1089,`Nome`),wg(),jc(1090,`th`,14),iO(1091,`Tipo`),wg(),jc(1092,`th`,14),iO(1093,`Descrição`),wg()(),jc(1094,`tr`,15)(1095,`td`,16)(1096,`div`,17)(1097,`span`,18),iO(1098,` hideExpand`),nu(1099,`br`),wg()()(),jc(1100,`td`,19)(1101,`code`,39),iO(1102,`boolean`),wg()(),jc(1103,`td`,23)(1104,`em`)(1105,`strong`),iO(1106,`(opcional)`),wg()(),jc(1107,`p`),iO(1108,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),wg()()(),jc(1109,`tr`,15)(1110,`td`,16)(1111,`div`,17)(1112,`span`,18),iO(1113,` hideExportCsv`),nu(1114,`br`),wg()()(),jc(1115,`td`,19)(1116,`code`,39),iO(1117,`boolean`),wg()(),jc(1118,`td`,23)(1119,`em`)(1120,`strong`),iO(1121,`(opcional)`),wg()(),jc(1122,`p`),iO(1123,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),wg()()(),jc(1124,`tr`,15)(1125,`td`,16)(1126,`div`,17)(1127,`span`,18),iO(1128,` hideExportImage`),nu(1129,`br`),wg()()(),jc(1130,`td`,19)(1131,`code`,39),iO(1132,`boolean`),wg()(),jc(1133,`td`,23)(1134,`em`)(1135,`strong`),iO(1136,`(opcional)`),wg()(),jc(1137,`p`),iO(1138,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),wg()()(),jc(1139,`tr`,15)(1140,`td`,16)(1141,`div`,17)(1142,`span`,18),iO(1143,` hideTableDetails`),nu(1144,`br`),wg()()(),jc(1145,`td`,19)(1146,`code`,39),iO(1147,`boolean`),wg()(),jc(1148,`td`,23)(1149,`em`)(1150,`strong`),iO(1151,`(opcional)`),wg()(),jc(1152,`p`),iO(1153,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),wg()()()(),jc(1154,`h4`,37)(1155,`code`,5),iO(1156,`PoChartIndicatorOptions`),wg()(),jc(1157,`div`,2)(1158,`p`),iO(1159,`Interface para configurações dos indicadores do gráfico `),jc(1160,`code`),iO(1161,`radar`),wg(),iO(1162,`.`),wg()(),jc(1163,`h4`,11),iO(1164,`Propriedades`),wg(),jc(1165,`table`,12)(1166,`tr`,13)(1167,`th`,14),iO(1168,`Nome`),wg(),jc(1169,`th`,14),iO(1170,`Tipo`),wg(),jc(1171,`th`,14),iO(1172,`Descrição`),wg()(),jc(1173,`tr`,15)(1174,`td`,16)(1175,`div`,17)(1176,`span`,18),iO(1177,` color`),nu(1178,`br`),wg()()(),jc(1179,`td`,19)(1180,`code`,35),iO(1181,`string`),wg()(),jc(1182,`td`,23)(1183,`em`)(1184,`strong`),iO(1185,`(opcional)`),wg()(),jc(1186,`p`),iO(1187,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),wg(),jc(1188,`blockquote`)(1189,`p`),iO(1190,`Nome da cor, hexadecimal ou RGB.`),wg()()()(),jc(1191,`tr`,15)(1192,`td`,16)(1193,`div`,17)(1194,`span`,18),iO(1195,` max`),nu(1196,`br`),wg()()(),jc(1197,`td`,19)(1198,`code`,27),iO(1199,`number`),wg()(),jc(1200,`td`,23)(1201,`em`)(1202,`strong`),iO(1203,`(opcional)`),wg()(),jc(1204,`p`),iO(1205,`Valor máximo do indicator.`),wg(),jc(1206,`p`),iO(1207,`A propriedade `),jc(1208,`code`),iO(1209,`max`),wg(),iO(1210,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),wg()()(),jc(1211,`tr`,15)(1212,`td`,16)(1213,`div`,17)(1214,`span`,18),iO(1215,` min`),nu(1216,`br`),wg()()(),jc(1217,`td`,19)(1218,`code`,27),iO(1219,`number`),wg()(),jc(1220,`td`,23)(1221,`em`)(1222,`strong`),iO(1223,`(opcional)`),wg()(),jc(1224,`p`),iO(1225,`Valor mínimo do indicator, com valor padrão de 0.`),wg(),jc(1226,`p`),iO(1227,`A propriedade `),jc(1228,`code`),iO(1229,`min`),wg(),iO(1230,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),wg()()(),jc(1231,`tr`,15)(1232,`td`,16)(1233,`div`,17)(1234,`span`,18),iO(1235,` name`),nu(1236,`br`),wg()()(),jc(1237,`td`,19)(1238,`code`,35),iO(1239,`string`),wg()(),jc(1240,`td`,23)(1241,`em`)(1242,`strong`),iO(1243,`(opcional)`),wg()(),jc(1244,`p`),iO(1245,`Nome do indicator.`),wg()()()(),jc(1246,`h4`,37)(1247,`code`,5),iO(1248,`PoChartLiterals`),wg()(),jc(1249,`div`,2)(1250,`p`),iO(1251,`Interface para definição dos literais usadas no `),jc(1252,`code`),iO(1253,`po-chart`),wg(),iO(1254,`.`),wg()(),jc(1255,`h4`,11),iO(1256,`Propriedades`),wg(),jc(1257,`table`,12)(1258,`tr`,13)(1259,`th`,14),iO(1260,`Nome`),wg(),jc(1261,`th`,14),iO(1262,`Tipo`),wg(),jc(1263,`th`,14),iO(1264,`Descrição`),wg()(),jc(1265,`tr`,15)(1266,`td`,16)(1267,`div`,17)(1268,`span`,18),iO(1269,` category`),nu(1270,`br`),wg()()(),jc(1271,`td`,19)(1272,`code`,35),iO(1273,`string`),wg()(),jc(1274,`td`,23)(1275,`em`)(1276,`strong`),iO(1277,`(opcional)`),wg()(),jc(1278,`p`),iO(1279,`Texto da primeira coluna da tabela no gráfico do tipo `),jc(1280,`code`),iO(1281,`Bar`),wg(),iO(1282,`.`),wg()()(),jc(1283,`tr`,15)(1284,`td`,16)(1285,`div`,17)(1286,`span`,18),iO(1287,` downloadCSV`),nu(1288,`br`),wg()()(),jc(1289,`td`,19)(1290,`code`,35),iO(1291,`string`),wg()(),jc(1292,`td`,23)(1293,`em`)(1294,`strong`),iO(1295,`(opcional)`),wg()(),jc(1296,`p`),iO(1297,`Texto exibido para a ação de download de dados em formato CSV.`),wg()()(),jc(1298,`tr`,15)(1299,`td`,16)(1300,`div`,17)(1301,`span`,18),iO(1302,` exportCSV`),nu(1303,`br`),wg()()(),jc(1304,`td`,19)(1305,`code`,35),iO(1306,`string`),wg()(),jc(1307,`td`,23)(1308,`em`)(1309,`strong`),iO(1310,`(opcional)`),wg()(),jc(1311,`p`),iO(1312,`Texto do botão para exportar o gráfico em CSV.`),wg()()(),jc(1313,`tr`,15)(1314,`td`,16)(1315,`div`,17)(1316,`span`,18),iO(1317,` exportJPG`),nu(1318,`br`),wg()()(),jc(1319,`td`,19)(1320,`code`,35),iO(1321,`string`),wg()(),jc(1322,`td`,23)(1323,`em`)(1324,`strong`),iO(1325,`(opcional)`),wg()(),jc(1326,`p`),iO(1327,`Texto do botão para exportar o gráfico como imagem JPG.`),wg()()(),jc(1328,`tr`,15)(1329,`td`,16)(1330,`div`,17)(1331,`span`,18),iO(1332,` exportPNG`),nu(1333,`br`),wg()()(),jc(1334,`td`,19)(1335,`code`,35),iO(1336,`string`),wg()(),jc(1337,`td`,23)(1338,`em`)(1339,`strong`),iO(1340,`(opcional)`),wg()(),jc(1341,`p`),iO(1342,`Texto do botão para exportar o gráfico como imagem PNG.`),wg()()(),jc(1343,`tr`,15)(1344,`td`,16)(1345,`div`,17)(1346,`span`,18),iO(1347,` item`),nu(1348,`br`),wg()()(),jc(1349,`td`,19)(1350,`code`,35),iO(1351,`string`),wg()(),jc(1352,`td`,23)(1353,`em`)(1354,`strong`),iO(1355,`(opcional)`),wg()(),jc(1356,`p`),iO(1357,`Texto dos títulos das colunas `),jc(1358,`code`),iO(1359,`Gauge`),wg(),iO(1360,` e não possui label.`),wg()()(),jc(1361,`tr`,15)(1362,`td`,16)(1363,`div`,17)(1364,`span`,18),iO(1365,` serie`),nu(1366,`br`),wg()()(),jc(1367,`td`,19)(1368,`code`,35),iO(1369,`string`),wg()(),jc(1370,`td`,23)(1371,`em`)(1372,`strong`),iO(1373,`(opcional)`),wg()(),jc(1374,`p`),iO(1375,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),jc(1376,`code`),iO(1377,`Bar`),wg(),iO(1378,` e `),jc(1379,`code`),iO(1380,`Gauge`),wg(),iO(1381,`.`),wg()()(),jc(1382,`tr`,15)(1383,`td`,16)(1384,`div`,17)(1385,`span`,18),iO(1386,` value`),nu(1387,`br`),wg()()(),jc(1388,`td`,19)(1389,`code`,35),iO(1390,`string`),wg()(),jc(1391,`td`,23)(1392,`em`)(1393,`strong`),iO(1394,`(opcional)`),wg()(),jc(1395,`p`),iO(1396,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),jc(1397,`code`),iO(1398,`Gauge`),wg(),iO(1399,`.`),wg()()()(),jc(1400,`h4`,37)(1401,`code`,5),iO(1402,`PoChartOptions`),wg()(),jc(1403,`div`,2)(1404,`p`)(1405,`em`),iO(1406,`Interface`),wg(),iO(1407,` para configurações dos elementos do gráfico.`),wg()(),jc(1408,`h4`,11),iO(1409,`Propriedades`),wg(),jc(1410,`table`,12)(1411,`tr`,13)(1412,`th`,14),iO(1413,`Nome`),wg(),jc(1414,`th`,14),iO(1415,`Tipo`),wg(),jc(1416,`th`,14),iO(1417,`Descrição`),wg()(),jc(1418,`tr`,15)(1419,`td`,16)(1420,`div`,17)(1421,`span`,18),iO(1422,` areaStyle`),nu(1423,`br`),wg()()(),jc(1424,`td`,19)(1425,`code`,39),iO(1426,`boolean`),wg()(),jc(1427,`td`,23)(1428,`em`)(1429,`strong`),iO(1430,`(opcional)`),wg()(),jc(1431,`p`),iO(1432,`Define se as séries terão sua área preenchida.`),wg(),jc(1433,`blockquote`)(1434,`p`),iO(1435,`Esta propriedade tem precedência sobre a definição de `),jc(1436,`code`),iO(1437,`areaStyle`),wg(),iO(1438,` em cada série, `),jc(1439,`code`),iO(1440,`fillpoints`),wg(),iO(1441,` não funciona quando `),jc(1442,`code`),iO(1443,`areaStyle`),wg(),iO(1444,` está definido como `),jc(1445,`code`),iO(1446,`true`),wg(),iO(1447,`.`),wg()()()(),jc(1448,`tr`,15)(1449,`td`,16)(1450,`div`,17)(1451,`span`,18),iO(1452,` axis`),nu(1453,`br`),wg()()(),jc(1454,`td`,19)(1455,`code`,40),iO(1456,`PoChartAxisOptions`),wg()(),jc(1457,`td`,23)(1458,`em`)(1459,`strong`),iO(1460,`(opcional)`),wg()(),jc(1461,`p`),iO(1462,`Define um objeto do tipo `),jc(1463,`code`),iO(1464,`PoChartAxisOptions`),wg(),iO(1465,` para configuração dos eixos.`),wg()()(),jc(1466,`tr`,15)(1467,`td`,16)(1468,`div`,17)(1469,`span`,18),iO(1470,` borderRadius`),nu(1471,`br`),wg()()(),jc(1472,`td`,19)(1473,`code`,27),iO(1474,`number`),wg()(),jc(1475,`td`,23)(1476,`em`)(1477,`strong`),iO(1478,`(opcional)`),wg()(),jc(1479,`p`),iO(1480,`Define borda entre os itens do gráfico. Válido para os gráficos `),jc(1481,`code`),iO(1482,`Donut`),wg(),iO(1483,`, `),jc(1484,`code`),iO(1485,`Pie`),wg(),iO(1486,`.`),wg(),jc(1487,`blockquote`)(1488,`p`),iO(1489,`Valores válidos entre 0 e 100,`),wg()()()(),jc(1490,`tr`,15)(1491,`td`,16)(1492,`div`,17)(1493,`span`,18),iO(1494,` bottomDataZoom`),nu(1495,`br`),wg()()(),jc(1496,`td`,19)(1497,`code`,39),iO(1498,`boolean `),wg(),jc(1499,`code`,27),iO(1500,` number`),wg()(),jc(1501,`td`,23)(1502,`em`)(1503,`strong`),iO(1504,`(opcional)`),wg()(),jc(1505,`p`),iO(1506,`Define a distância inferior do componente DataZoom.`),wg(),jc(1507,`p`),iO(1508,`Esta propriedade aceita os seguintes valores:`),wg(),jc(1509,`ul`)(1510,`li`)(1511,`p`)(1512,`code`),iO(1513,`false`),wg(),iO(1514,` (padrão): não aplica ajustes.`),wg()(),jc(1515,`li`)(1516,`p`)(1517,`code`),iO(1518,`true`),wg(),iO(1519,`: aplica um valor automático com base no posicionamento da legenda:`),wg(),jc(1520,`ul`)(1521,`li`)(1522,`code`),iO(1523,`8`),wg(),iO(1524,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),wg(),jc(1525,`li`)(1526,`code`),iO(1527,`32`),wg(),iO(1528,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),wg()()(),jc(1529,`li`)(1530,`p`)(1531,`code`),iO(1532,`number`),wg(),iO(1533,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),wg()()(),jc(1534,`blockquote`)(1535,`p`),iO(1536,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),jc(1537,`code`),iO(1538,`dataZoom: true`),wg(),iO(1539,`).`),wg()()()(),jc(1540,`tr`,15)(1541,`td`,16)(1542,`div`,17)(1543,`span`,18),iO(1544,` dataZoom`),nu(1545,`br`),wg()()(),jc(1546,`td`,19)(1547,`code`,39),iO(1548,`boolean`),wg()(),jc(1549,`td`,23)(1550,`em`)(1551,`strong`),iO(1552,`(opcional)`),wg()(),jc(1553,`p`),iO(1554,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),wg()()(),jc(1555,`tr`,15)(1556,`td`,16)(1557,`div`,17)(1558,`span`,18),iO(1559,` descriptionChart`),nu(1560,`br`),wg()()(),jc(1561,`td`,19)(1562,`code`,35),iO(1563,`string`),wg()(),jc(1564,`td`,23)(1565,`em`)(1566,`strong`),iO(1567,`(opcional)`),wg()(),jc(1568,`p`),iO(1569,`Define a descrição do gráfico exibido acima do gráfico.`),wg()()(),jc(1570,`tr`,15)(1571,`td`,16)(1572,`div`,17)(1573,`span`,18),iO(1574,` fillPoints`),nu(1575,`br`),wg()()(),jc(1576,`td`,19)(1577,`code`,39),iO(1578,`boolean`),wg()(),jc(1579,`td`,23)(1580,`em`)(1581,`strong`),iO(1582,`(opcional)`),wg()(),jc(1583,`p`),iO(1584,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),wg(),jc(1585,`blockquote`)(1586,`p`),iO(1587,`Esta propriedade é utilizável para os gráficos dos tipos `),jc(1588,`code`),iO(1589,`Area`),wg(),iO(1590,`, `),jc(1591,`code`),iO(1592,`Line`),wg(),iO(1593,` e `),jc(1594,`code`),iO(1595,`Radar`),wg(),iO(1596,`.
Para o tipo `),jc(1597,`code`),iO(1598,`Radar`),wg(),iO(1599,`, o valor padrão é `),jc(1600,`code`),iO(1601,`true`),wg(),iO(1602,`.`),wg()()()(),jc(1603,`tr`,15)(1604,`td`,16)(1605,`div`,17)(1606,`span`,18),iO(1607,` firstColumnName`),nu(1608,`br`),wg()()(),jc(1609,`td`,19)(1610,`code`,35),iO(1611,`string`),wg()(),jc(1612,`td`,23)(1613,`em`)(1614,`strong`),iO(1615,`(opcional)`),wg()(),jc(1616,`p`),iO(1617,`Valor que permite customizar o nome da `),jc(1618,`code`),iO(1619,`TH`),wg(),iO(1620,` da primeira coluna da tabela descritiva.`),wg()()(),jc(1621,`tr`,15)(1622,`td`,16)(1623,`div`,17)(1624,`span`,18),iO(1625,` header`),nu(1626,`br`),wg()()(),jc(1627,`td`,19)(1628,`code`,41),iO(1629,`PoChartHeaderOptions`),wg()(),jc(1630,`td`,23)(1631,`em`)(1632,`strong`),iO(1633,`(opcional)`),wg()(),jc(1634,`p`),iO(1635,`Define um objeto do tipo `),jc(1636,`code`),iO(1637,`PoChartHeaderOptions`),wg(),iO(1638,` para configurar a exibição de botões no cabeçalho do gráfico.`),wg()()(),jc(1639,`tr`,15)(1640,`td`,16)(1641,`div`,17)(1642,`span`,18),iO(1643,` innerRadius`),nu(1644,`br`),wg()()(),jc(1645,`td`,19)(1646,`code`,27),iO(1647,`number`),wg()(),jc(1648,`td`,23)(1649,`em`)(1650,`strong`),iO(1651,`(opcional)`),wg()(),jc(1652,`p`),iO(1653,`Define o diâmetro, em valor percentual entre `),jc(1654,`code`),iO(1655,`0`),wg(),iO(1656,` e `),jc(1657,`code`),iO(1658,`100`),wg(),iO(1659,`, da área central para gráficos do tipo `),jc(1660,`code`),iO(1661,`donut`),wg(),iO(1662,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),jc(1663,`code`),iO(1664,`40px`),wg(),iO(1665,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),wg()()(),jc(1666,`tr`,15)(1667,`td`,16)(1668,`div`,17)(1669,`span`,18),iO(1670,` legend`),nu(1671,`br`),wg()()(),jc(1672,`td`,19)(1673,`code`,39),iO(1674,`boolean`),wg()(),jc(1675,`td`,23)(1676,`em`)(1677,`strong`),iO(1678,`(opcional)`),wg()(),jc(1679,`p`),iO(1680,`Define a exibição da legenda do gráfico. Valor padrão é `),jc(1681,`code`),iO(1682,`true`),wg()()()(),jc(1683,`tr`,15)(1684,`td`,16)(1685,`div`,17)(1686,`span`,18),iO(1687,` legendPosition`),nu(1688,`br`),wg()()(),jc(1689,`td`,19)(1690,`code`,42),iO(1691,`'left' `),wg(),jc(1692,`code`,43),iO(1693,` 'center' `),wg(),jc(1694,`code`,44),iO(1695,` 'right'`),wg()(),jc(1696,`td`,23)(1697,`em`)(1698,`strong`),iO(1699,`(opcional)`),wg()(),jc(1700,`p`),iO(1701,`Define o alinhamento horizontal da legenda.`),wg(),jc(1702,`blockquote`)(1703,`p`),iO(1704,`Propriedade inválida para o gráfico do tipo `),jc(1705,`code`),iO(1706,`Gauge`),wg(),iO(1707,`.`),wg()()()(),jc(1708,`tr`,15)(1709,`td`,16)(1710,`div`,17)(1711,`span`,18),iO(1712,` legendType`),nu(1713,`br`),wg()()(),jc(1714,`td`,19)(1715,`code`,45),iO(1716,`'plain' `),wg(),jc(1717,`code`,46),iO(1718,` 'scroll'`),wg()(),jc(1719,`td`,23)(1720,`em`)(1721,`strong`),iO(1722,`(opcional)`),wg()(),jc(1723,`p`),iO(1724,`Define o tipo da legenda.`),wg(),jc(1725,`ul`)(1726,`li`)(1727,`code`),iO(1728,`plain`),wg(),iO(1729,`: exibe todas as legendas de forma estática.`),wg(),jc(1730,`li`)(1731,`code`),iO(1732,`scroll`),wg(),iO(1733,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),wg()(),jc(1734,`blockquote`)(1735,`p`),iO(1736,`Propriedade inválida para o gráfico do tipo `),jc(1737,`code`),iO(1738,`Gauge`),wg(),iO(1739,`.`),wg()()()(),jc(1740,`tr`,15)(1741,`td`,16)(1742,`div`,17)(1743,`span`,18),iO(1744,` legendVerticalPosition`),nu(1745,`br`),wg()()(),jc(1746,`td`,19)(1747,`code`,47),iO(1748,`'top' `),wg(),jc(1749,`code`,48),iO(1750,` 'bottom'`),wg()(),jc(1751,`td`,23)(1752,`em`)(1753,`strong`),iO(1754,`(opcional)`),wg()(),jc(1755,`p`),iO(1756,`Define a posição vertical da legenda no gráfico.`),wg(),jc(1757,`blockquote`)(1758,`p`),iO(1759,`Quando utilizada com o valor `),jc(1760,`code`),iO(1761,`top`),wg(),iO(1762,`, recomenda-se configurar também a propriedade `),jc(1763,`code`),iO(1764,`bottomDataZoom`),wg(),iO(1765,` caso o `),jc(1766,`code`),iO(1767,`dataZoom`),wg(),iO(1768,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),jc(1769,`code`),iO(1770,`Gauge`),wg(),iO(1771,`.`),wg()()()(),jc(1772,`tr`,15)(1773,`td`,16)(1774,`div`,17)(1775,`span`,18),iO(1776,` pointer`),nu(1777,`br`),wg()()(),jc(1778,`td`,19)(1779,`code`,39),iO(1780,`boolean`),wg()(),jc(1781,`td`,23)(1782,`em`)(1783,`strong`),iO(1784,`(opcional)`),wg()(),jc(1785,`p`),iO(1786,`Define a exibição do ponteiro.`),wg(),jc(1787,`blockquote`)(1788,`p`),iO(1789,`Válido para gráfico do tipo `),jc(1790,`code`),iO(1791,`Gauge`),wg(),iO(1792,`.`),wg()()()(),jc(1793,`tr`,15)(1794,`td`,16)(1795,`div`,17)(1796,`span`,18),iO(1797,` rendererOption`),nu(1798,`br`),wg()()(),jc(1799,`td`,19)(1800,`code`,49),iO(1801,`'canvas' `),wg(),jc(1802,`code`,50),iO(1803,` 'svg'`),wg()(),jc(1804,`td`,23)(1805,`em`)(1806,`strong`),iO(1807,`(opcional)`),wg()(),jc(1808,`p`),iO(1809,`Define como o gráfico será renderizado.`),wg(),jc(1810,`blockquote`)(1811,`p`),iO(1812,`Recomenda-se não modificar o valor da propriedade `),jc(1813,`code`),iO(1814,`rendererOption`),wg(),iO(1815,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),wg()()()(),jc(1816,`tr`,15)(1817,`td`,16)(1818,`div`,17)(1819,`span`,18),iO(1820,` roseType`),nu(1821,`br`),wg()()(),jc(1822,`td`,19)(1823,`code`,39),iO(1824,`boolean`),wg()(),jc(1825,`td`,23)(1826,`em`)(1827,`strong`),iO(1828,`(opcional)`),wg()(),jc(1829,`p`),iO(1830,`Transforma os gráficos do tipo `),jc(1831,`code`),iO(1832,`Donut`),wg(),iO(1833,` ou `),jc(1834,`code`),iO(1835,`Pie`),wg(),iO(1836,` num gráfico de área polar.`),wg(),jc(1837,`blockquote`)(1838,`p`),iO(1839,`Válido para os gráficos `),jc(1840,`code`),iO(1841,`Donut`),wg(),iO(1842,` e `),jc(1843,`code`),iO(1844,`Pie`),wg(),iO(1845,`.`),wg()()()(),jc(1846,`tr`,15)(1847,`td`,16)(1848,`div`,17)(1849,`span`,18),iO(1850,` showContainerGauge`),nu(1851,`br`),wg()()(),jc(1852,`td`,19)(1853,`code`,39),iO(1854,`boolean`),wg()(),jc(1855,`td`,23)(1856,`em`)(1857,`strong`),iO(1858,`(opcional)`),wg()(),jc(1859,`p`),iO(1860,`Esconde a estilização do container em volta do gráfico.`),wg(),jc(1861,`blockquote`)(1862,`p`),iO(1863,`Válido para gráfico do tipo `),jc(1864,`code`),iO(1865,`Gauge`),wg(),iO(1866,`.`),wg()()()(),jc(1867,`tr`,15)(1868,`td`,16)(1869,`div`,17)(1870,`span`,18),iO(1871,` showFromToLegend`),nu(1872,`br`),wg()()(),jc(1873,`td`,19)(1874,`code`,39),iO(1875,`boolean`),wg()(),jc(1876,`td`,23)(1877,`em`)(1878,`strong`),iO(1879,`(opcional)`),wg()(),jc(1880,`p`),iO(1881,`Exibe os valores das propriedades `),jc(1882,`code`),iO(1883,`from`),wg(),iO(1884,` e `),jc(1885,`code`),iO(1886,`to`),wg(),iO(1887,` no gráfico do no texto da legenda entre parênteses.`),wg(),jc(1888,`blockquote`)(1889,`p`),iO(1890,`Válido para gráfico do tipo `),jc(1891,`code`),iO(1892,`Gauge`),wg(),iO(1893,`.`),wg()()()(),jc(1894,`tr`,15)(1895,`td`,16)(1896,`div`,17)(1897,`span`,18),iO(1898,` stacked`),nu(1899,`br`),wg()()(),jc(1900,`td`,19)(1901,`code`,39),iO(1902,`boolean`),wg()(),jc(1903,`td`,23)(1904,`em`)(1905,`strong`),iO(1906,`(opcional)`),wg()(),jc(1907,`p`),iO(1908,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),jc(1909,`code`),iO(1910,`stackGroupName`),wg(),iO(1911,` da interface `),jc(1912,`code`),iO(1913,`PoChartSerie`),wg()(),jc(1914,`blockquote`)(1915,`p`),iO(1916,`Válido para gráfico do tipo `),jc(1917,`code`),iO(1918,`Column`),wg(),iO(1919,` e `),jc(1920,`code`),iO(1921,`Bar`),wg(),iO(1922,`.`),wg()(),jc(1923,`blockquote`)(1924,`p`),iO(1925,`Essa propriedade habilita a propriedade `),jc(1926,`code`),iO(1927,`p-data-label`),wg(),iO(1928,` por padrão, podendo ser desabilitada passando `),jc(1929,`code`),iO(1930,`[p-data-label]={ fixed: false }`),wg(),iO(1931,`.`),wg()()()(),jc(1932,`tr`,15)(1933,`td`,16)(1934,`div`,17)(1935,`span`,18),iO(1936,` subtitleGauge`),nu(1937,`br`),wg()()(),jc(1938,`td`,19)(1939,`code`,35),iO(1940,`string`),wg()(),jc(1941,`td`,23)(1942,`em`)(1943,`strong`),iO(1944,`(opcional)`),wg()(),jc(1945,`p`),iO(1946,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),wg(),jc(1947,`blockquote`)(1948,`p`),iO(1949,`Válido para gráfico do tipo `),jc(1950,`code`),iO(1951,`Gauge`),wg(),iO(1952,`.`),wg()()()(),jc(1953,`tr`,15)(1954,`td`,16)(1955,`div`,17)(1956,`span`,18),iO(1957,` textCenterGraph`),nu(1958,`br`),wg()()(),jc(1959,`td`,19)(1960,`code`,35),iO(1961,`string`),wg()(),jc(1962,`td`,23)(1963,`em`)(1964,`strong`),iO(1965,`(opcional)`),wg()(),jc(1966,`p`),iO(1967,`Aplica texto centralizado customizado nos gráficos de `),jc(1968,`code`),iO(1969,`Donut`),wg(),iO(1970,`.`),wg()()()(),jc(1971,`h4`,37)(1972,`code`,5),iO(1973,`PoChartRadarOptions`),wg()(),jc(1974,`div`,2)(1975,`p`)(1976,`em`),iO(1977,`Interface`),wg(),iO(1978,` para configurações do gráfico `),jc(1979,`code`),iO(1980,`radar`),wg(),iO(1981,`.`),wg()(),jc(1982,`h4`,11),iO(1983,`Propriedades`),wg(),jc(1984,`table`,12)(1985,`tr`,13)(1986,`th`,14),iO(1987,`Nome`),wg(),jc(1988,`th`,14),iO(1989,`Tipo`),wg(),jc(1990,`th`,14),iO(1991,`Descrição`),wg()(),jc(1992,`tr`,15)(1993,`td`,16)(1994,`div`,17)(1995,`span`,18),iO(1996,` indicator`),nu(1997,`br`),wg()()(),jc(1998,`td`,19)(1999,`code`,51),iO(2e3,`Array<PoChartIndicatorOptions>`),wg()(),jc(2001,`td`,23)(2002,`em`)(2003,`strong`),iO(2004,`(opcional)`),wg()(),jc(2005,`p`),iO(2006,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),wg()()(),jc(2007,`tr`,15)(2008,`td`,16)(2009,`div`,17)(2010,`span`,18),iO(2011,` shape`),nu(2012,`br`),wg()()(),jc(2013,`td`,19)(2014,`code`,52),iO(2015,`'polygon' `),wg(),jc(2016,`code`,53),iO(2017,` 'circle'`),wg()(),jc(2018,`td`,23)(2019,`em`)(2020,`strong`),iO(2021,`(opcional)`),wg()(),jc(2022,`p`),iO(2023,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),wg()()(),jc(2024,`tr`,15)(2025,`td`,16)(2026,`div`,17)(2027,`span`,18),iO(2028,` splitArea`),nu(2029,`br`),wg()()(),jc(2030,`td`,19)(2031,`code`,39),iO(2032,`boolean`),wg()(),jc(2033,`td`,23)(2034,`em`)(2035,`strong`),iO(2036,`(opcional)`),wg()(),jc(2037,`p`),iO(2038,`Define o efeito zebrado na grid.`),wg()()()(),jc(2039,`h4`,37)(2040,`code`,5),iO(2041,`PoChartDataLabel`),wg()(),jc(2042,`div`,2)(2043,`p`),iO(2044,`Interface que define as propriedades de exibição dos rótulos das séries no `),jc(2045,`code`),iO(2046,`po-chart`),wg(),iO(2047,`.`),wg()(),jc(2048,`h4`,11),iO(2049,`Propriedades`),wg(),jc(2050,`table`,12)(2051,`tr`,13)(2052,`th`,14),iO(2053,`Nome`),wg(),jc(2054,`th`,14),iO(2055,`Tipo`),wg(),jc(2056,`th`,14),iO(2057,`Descrição`),wg()(),jc(2058,`tr`,15)(2059,`td`,16)(2060,`div`,17)(2061,`span`,18),iO(2062,` fixed`),nu(2063,`br`),wg()()(),jc(2064,`td`,19)(2065,`code`,39),iO(2066,`boolean`),wg()(),jc(2067,`td`,23)(2068,`em`)(2069,`strong`),iO(2070,`(opcional)`),wg()(),jc(2071,`p`),iO(2072,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),wg(),jc(2073,`ul`)(2074,`li`),iO(2075,`Quando definido como `),jc(2076,`code`),iO(2077,`true`),wg(),iO(2078,`:`),jc(2079,`ul`)(2080,`li`),iO(2081,`O `),jc(2082,`em`),iO(2083,`tooltip`),wg(),iO(2084,` não será exibido.`),wg(),jc(2085,`li`),iO(2086,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),wg()()()(),jc(2087,`blockquote`)(2088,`p`),iO(2089,`Disponível para os tipo de gráfico `),jc(2090,`code`),iO(2091,`PoChartType.Line`),wg(),iO(2092,`, `),jc(2093,`code`),iO(2094,`PoChartType.Area`),wg(),iO(2095,`, `),jc(2096,`code`),iO(2097,`PoChartType.Column`),wg(),iO(2098,`, `),jc(2099,`code`),iO(2100,`PoChartType.Bar e PoChartType.Radar`),wg(),iO(2101,`.`),wg()()()()(),jc(2102,`h4`,37)(2103,`code`,5),iO(2104,`PoChartSerie`),wg()(),jc(2105,`div`,2)(2106,`p`),iO(2107,`Interface das series dinâmicas do `),jc(2108,`code`),iO(2109,`po-chart`),wg(),iO(2110,` que possibilita desenhar gráficos dos tipos `),jc(2111,`code`),iO(2112,`area`),wg(),iO(2113,`, `),jc(2114,`code`),iO(2115,`bar`),wg(),iO(2116,`, `),jc(2117,`code`),iO(2118,`column`),wg(),iO(2119,`, `),jc(2120,`code`),iO(2121,`line`),wg(),iO(2122,`, `),jc(2123,`code`),iO(2124,`donut`),wg(),iO(2125,`, `),jc(2126,`code`),iO(2127,`pie`),wg(),iO(2128,` e `),jc(2129,`code`),iO(2130,`radar`),wg()()(),jc(2131,`h4`,11),iO(2132,`Propriedades`),wg(),jc(2133,`table`,12)(2134,`tr`,13)(2135,`th`,14),iO(2136,`Nome`),wg(),jc(2137,`th`,14),iO(2138,`Tipo`),wg(),jc(2139,`th`,14),iO(2140,`Descrição`),wg()(),jc(2141,`tr`,15)(2142,`td`,16)(2143,`div`,17)(2144,`span`,18),iO(2145,` areaStyle`),nu(2146,`br`),wg()()(),jc(2147,`td`,19)(2148,`code`,39),iO(2149,`boolean`),wg()(),jc(2150,`td`,23)(2151,`em`)(2152,`strong`),iO(2153,`(opcional)`),wg()(),jc(2154,`p`),iO(2155,`Define se a série terá sua área preenchida.`),wg(),jc(2156,`blockquote`)(2157,`p`),iO(2158,`Propriedade válida para gráficos do tipo `),jc(2159,`code`),iO(2160,`Radar`),wg(),iO(2161,`, `),jc(2162,`code`),iO(2163,`fillpoints`),wg(),iO(2164,` não funciona quando `),jc(2165,`code`),iO(2166,`areaStyle`),wg(),iO(2167,` está definido como `),jc(2168,`code`),iO(2169,`true`),wg(),iO(2170,`.`),wg()()()(),jc(2171,`tr`,15)(2172,`td`,16)(2173,`div`,17)(2174,`span`,18),iO(2175,` color`),nu(2176,`br`),wg()()(),jc(2177,`td`,19)(2178,`code`,35),iO(2179,`string`),wg()(),jc(2180,`td`,23)(2181,`em`)(2182,`strong`),iO(2183,`(opcional)`),wg()(),jc(2184,`p`),iO(2185,`Determina a cor da série. As maneiras de customizar o `),jc(2186,`em`),iO(2187,`preset`),wg(),iO(2188,` padrão de cores são:`),wg(),jc(2189,`ul`)(2190,`li`),iO(2191,`Hexadecimal, por exemplo `),jc(2192,`code`),iO(2193,`#c64840`),wg(),iO(2194,`;`),wg(),jc(2195,`li`),iO(2196,`RGB, por exemplo `),jc(2197,`code`),iO(2198,`rgb(0, 0, 165)`),wg()(),jc(2199,`li`),iO(2200,`O nome da cor, por exemplo `),jc(2201,`code`),iO(2202,`blue`),wg(),iO(2203,`;`),wg(),jc(2204,`li`),iO(2205,`Variáveis CSS, por exemplo `),jc(2206,`code`),iO(2207,`var(--color-01)`),wg(),iO(2208,`;`),wg(),jc(2209,`li`),iO(2210,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),jc(2211,`ul`)(2212,`li`),nu(2213,`span`,54),jc(2214,`code`),iO(2215,`color-01`),wg()(),jc(2216,`li`),nu(2217,`span`,55),jc(2218,`code`),iO(2219,`color-02`),wg()(),jc(2220,`li`),nu(2221,`span`,56),jc(2222,`code`),iO(2223,`color-03`),wg()(),jc(2224,`li`),nu(2225,`span`,57),jc(2226,`code`),iO(2227,`color-04`),wg()(),jc(2228,`li`),nu(2229,`span`,58),jc(2230,`code`),iO(2231,`color-05`),wg()(),jc(2232,`li`),nu(2233,`span`,59),jc(2234,`code`),iO(2235,`color-06`),wg()(),jc(2236,`li`),nu(2237,`span`,60),jc(2238,`code`),iO(2239,`color-07`),wg()(),jc(2240,`li`),nu(2241,`span`,61),jc(2242,`code`),iO(2243,`color-08`),wg()(),jc(2244,`li`),nu(2245,`span`,62),jc(2246,`code`),iO(2247,`color-09`),wg()(),jc(2248,`li`),nu(2249,`span`,63),jc(2250,`code`),iO(2251,`color-10`),wg()(),jc(2252,`li`),nu(2253,`span`,64),jc(2254,`code`),iO(2255,`color-11`),wg()(),jc(2256,`li`),nu(2257,`span`,65),jc(2258,`code`),iO(2259,`color-12`),wg()()()()(),jc(2260,`ul`)(2261,`li`),iO(2262,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),wg()()()(),jc(2263,`tr`,15)(2264,`td`,16)(2265,`div`,17)(2266,`span`,18),iO(2267,` data`),nu(2268,`br`),wg()()(),jc(2269,`td`,19)(2270,`code`,27),iO(2271,`number `),wg(),jc(2272,`code`,66),iO(2273,` Array<number>`),wg()(),jc(2274,`td`,23)(2275,`em`)(2276,`strong`),iO(2277,`(opcional)`),wg()(),jc(2278,`p`),iO(2279,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),wg(),jc(2280,`ul`)(2281,`li`),iO(2282,`Para gráficos dos tipos `),jc(2283,`code`),iO(2284,`donut`),wg(),iO(2285,` e `),jc(2286,`code`),iO(2287,`pie`),wg(),iO(2288,`, espera-se `),jc(2289,`em`),iO(2290,`number`),wg(),iO(2291,`;`),wg(),jc(2292,`li`),iO(2293,`Para gráficos dos tipos `),jc(2294,`code`),iO(2295,`area`),wg(),iO(2296,`, `),jc(2297,`code`),iO(2298,`bar`),wg(),iO(2299,`, `),jc(2300,`code`),iO(2301,`column`),wg(),iO(2302,`, `),jc(2303,`code`),iO(2304,`line`),wg(),iO(2305,` e `),jc(2306,`code`),iO(2307,`radar`),wg(),iO(2308,`, espera-se um `),jc(2309,`em`),iO(2310,`array`),wg(),iO(2311,` de `),jc(2312,`code`),iO(2313,`data`),wg(),iO(2314,`.`),wg()(),jc(2315,`blockquote`)(2316,`p`),iO(2317,`Se passado valor `),jc(2318,`code`),iO(2319,`null`),wg(),iO(2320,` em determinado item da lista, a iteração irá ignorá-lo.`),wg()()()(),jc(2321,`tr`,15)(2322,`td`,16)(2323,`div`,17)(2324,`span`,18),iO(2325,` from`),nu(2326,`br`),wg()()(),jc(2327,`td`,19)(2328,`code`,27),iO(2329,`number`),wg()(),jc(2330,`td`,23)(2331,`em`)(2332,`strong`),iO(2333,`(opcional)`),wg()(),jc(2334,`p`),iO(2335,`Alcance inicial da cor.`),wg(),jc(2336,`blockquote`)(2337,`p`),iO(2338,`Propriedade válida para gráfico do tipo `),jc(2339,`code`),iO(2340,`Gauge`),wg(),iO(2341,`.`),wg()()()(),jc(2342,`tr`,15)(2343,`td`,16)(2344,`div`,17)(2345,`span`,18),iO(2346,` label`),nu(2347,`br`),wg()()(),jc(2348,`td`,19)(2349,`code`,35),iO(2350,`string`),wg()(),jc(2351,`td`,23)(2352,`em`)(2353,`strong`),iO(2354,`(opcional)`),wg()(),jc(2355,`p`),iO(2356,`Rótulo referência da série.`),wg()()(),jc(2357,`tr`,15)(2358,`td`,16)(2359,`div`,17)(2360,`span`,18),iO(2361,` stackGroupName`),nu(2362,`br`),wg()()(),jc(2363,`td`,19)(2364,`code`,35),iO(2365,`string`),wg()(),jc(2366,`td`,23)(2367,`em`)(2368,`strong`),iO(2369,`(opcional)`),wg()(),jc(2370,`p`),iO(2371,`Agrupa as séries em barras ou colunas que receberem o mesmo `),jc(2372,`code`),iO(2373,`stackGroupName`),wg(),iO(2374,`. Exemplo:`),wg(),jc(2375,`ul`)(2376,`li`),iO(2377,`Serie A: `),jc(2378,`code`),iO(2379,`{ data: 500, stackGroupName: 'group1' ... }`),wg(),iO(2380,`;`),wg(),jc(2381,`li`),iO(2382,`Série B: `),jc(2383,`code`),iO(2384,`{ data: 200, stackGroupName: 'group1' ... }`),wg(),iO(2385,`.`),wg(),jc(2386,`li`),iO(2387,`Série C: `),jc(2388,`code`),iO(2389,`{ data: 100, stackGroupName: 'group2' ... }`),wg(),iO(2390,`.`),wg(),jc(2391,`li`),iO(2392,`Série D: `),jc(2393,`code`),iO(2394,`{ data: 400, stackGroupName: 'group2' ... }`),wg(),iO(2395,`.`),wg()(),jc(2396,`p`),iO(2397,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),wg(),jc(2398,`blockquote`)(2399,`p`),iO(2400,`Válido para gráfico do tipo `),jc(2401,`code`),iO(2402,`Column`),wg(),iO(2403,` e `),jc(2404,`code`),iO(2405,`Bar`),wg(),iO(2406,`. Essa propriedade é ignorada caso a propriedade `),jc(2407,`code`),iO(2408,`stacked`),wg(),iO(2409,` da interface `),jc(2410,`code`),iO(2411,`PoChartOptions`),wg(),iO(2412,` esteja como `),jc(2413,`code`),iO(2414,`true`),wg(),iO(2415,`.`),wg()(),jc(2416,`blockquote`)(2417,`p`),iO(2418,`Essa propriedade habilita a propriedade `),jc(2419,`code`),iO(2420,`p-data-label`),wg(),iO(2421,` por padrão, podendo ser desabilitada passando `),jc(2422,`code`),iO(2423,`[p-data-label]={ fixed: false }`),wg(),iO(2424,`.`),wg()()()(),jc(2425,`tr`,15)(2426,`td`,16)(2427,`div`,17)(2428,`span`,18),iO(2429,` to`),nu(2430,`br`),wg()()(),jc(2431,`td`,19)(2432,`code`,27),iO(2433,`number`),wg()(),jc(2434,`td`,23)(2435,`em`)(2436,`strong`),iO(2437,`(opcional)`),wg()(),jc(2438,`p`),iO(2439,`Alcance final da cor.`),wg(),jc(2440,`blockquote`)(2441,`p`),iO(2442,`Propriedade válida para gráfico do tipo `),jc(2443,`code`),iO(2444,`Gauge`),wg(),iO(2445,`.`),wg()()()(),jc(2446,`tr`,15)(2447,`td`,16)(2448,`div`,17)(2449,`span`,18),iO(2450,` tooltip`),nu(2451,`br`),wg()()(),jc(2452,`td`,19)(2453,`code`,35),iO(2454,`string `),wg(),jc(2455,`code`,67),iO(2456,` ((params: any) => string)`),wg()(),jc(2457,`td`,23)(2458,`em`)(2459,`strong`),iO(2460,`(opcional)`),wg()(),jc(2461,`p`),iO(2462,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),jc(2463,`em`),iO(2464,`chart`),wg(),iO(2465,`.`),wg(),jc(2466,`p`),iO(2467,`Formatos aceitos:`),wg(),jc(2468,`ul`)(2469,`li`)(2470,`p`)(2471,`strong`),iO(2472,`string`),wg(),iO(2473,`: pode conter marcadores dinâmicos e HTML simples.`),wg()(),jc(2474,`li`)(2475,`p`),iO(2476,`Marcadores disponíveis:`),wg()(),jc(2477,`li`)(2478,`p`)(2479,`code`),iO(2480,`{name}`),wg(),iO(2481,` → Nome do item/categoria.`),wg()(),jc(2482,`li`)(2483,`p`)(2484,`code`),iO(2485,`{seriesName}`),wg(),iO(2486,` → Nome da série.`),wg()(),jc(2487,`li`)(2488,`p`)(2489,`code`),iO(2490,`{value}`),wg(),iO(2491,` → Valor correspondente.`),wg()(),jc(2492,`li`)(2493,`p`)(2494,`strong`),iO(2495,`function`),wg(),iO(2496,`: função que recebe o objeto `),jc(2497,`code`),iO(2498,`params`),wg(),iO(2499,` e deve retornar uma `),jc(2500,`em`),iO(2501,`string`),wg(),iO(2502,` com o conteúdo da tooltip.`),wg()()(),jc(2503,`blockquote`)(2504,`p`),iO(2505,`É possível utilizar marcação HTML simples (`),jc(2506,`code`),iO(2507,`<b>`),wg(),iO(2508,`, `),jc(2509,`code`),iO(2510,`<i>`),wg(),iO(2511,`, `),jc(2512,`code`),iO(2513,`<br>`),wg(),iO(2514,`, `),jc(2515,`code`),iO(2516,`<hr>`),wg(),iO(2517,`, etc.) que será interpretada via `),jc(2518,`code`),iO(2519,`innerHTML`),wg(),iO(2520,`.`),wg()(),jc(2521,`blockquote`)(2522,`p`),iO(2523,`Formatação customizada (será convertido internamente para HTML):`),wg()(),jc(2524,`ul`)(2525,`li`)(2526,`code`),iO(2527,`\\n`),wg(),iO(2528,` → quebra de linha (`),jc(2529,`code`),iO(2530,`<br>`),wg(),iO(2531,`).`),wg(),jc(2532,`li`)(2533,`code`),iO(2534,`**texto**`),wg(),iO(2535,` → negrito (`),jc(2536,`code`),iO(2537,`<b>`),wg(),iO(2538,`).`),wg(),jc(2539,`li`)(2540,`code`),iO(2541,`__texto__`),wg(),iO(2542,` → itálico (`),jc(2543,`code`),iO(2544,`<i>`),wg(),iO(2545,`).`),wg()(),jc(2546,`blockquote`)(2547,`p`),iO(2548,`Caso não seja informado um valor para o `),jc(2549,`em`),iO(2550,`tooltip`),wg(),iO(2551,`, será exibido da seguinte forma:`),wg()(),jc(2552,`ul`)(2553,`li`)(2554,`code`),iO(2555,`donut`),wg(),iO(2556,`, `),jc(2557,`code`),iO(2558,`label`),wg(),iO(2559,`: valor proporcional ao total em porcentagem.`),wg(),jc(2560,`li`)(2561,`code`),iO(2562,`radar`),wg(),iO(2563,`: nome da série, o nome do indicator e os valores correspondentes.`),wg(),jc(2564,`li`)(2565,`code`),iO(2566,`area`),wg(),iO(2567,`, `),jc(2568,`code`),iO(2569,`bar`),wg(),iO(2570,`, `),jc(2571,`code`),iO(2572,`column`),wg(),iO(2573,`, `),jc(2574,`code`),iO(2575,`line`),wg(),iO(2576,` e `),jc(2577,`code`),iO(2578,`pie`),wg(),iO(2579,`: `),jc(2580,`code`),iO(2581,`label`),wg(),iO(2582,`: `),jc(2583,`code`),iO(2584,`data`),wg(),iO(2585,`.`),wg()(),jc(2586,`h3`),iO(2587,`Exemplos:`),wg(),jc(2588,`p`)(2589,`strong`),iO(2590,`Usando string com placeholders:`),wg()(),jc(2591,`pre`)(2592,`code`,68),iO(2593,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),wg()(),jc(2594,`p`)(2595,`strong`),iO(2596,`Usando função de callback:`),wg()(),jc(2597,`pre`)(2598,`code`,68),iO(2599,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),wg()()()(),jc(2600,`tr`,15)(2601,`td`,16)(2602,`div`,17)(2603,`span`,18),iO(2604,` type`),nu(2605,`br`),wg()()(),jc(2606,`td`,19)(2607,`code`,36),iO(2608,`PoChartType`),wg()(),jc(2609,`td`,23)(2610,`em`)(2611,`strong`),iO(2612,`(opcional)`),wg()(),jc(2613,`p`),iO(2614,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),jc(2615,`code`),iO(2616,`column`),wg(),iO(2617,` e `),jc(2618,`code`),iO(2619,`line`),wg(),iO(2620,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),wg(),jc(2621,`ul`)(2622,`li`),iO(2623,`Serie A: `),jc(2624,`code`),iO(2625,`{ type: ChartType.Column, data: ... }`),wg(),iO(2626,`;`),wg(),jc(2627,`li`),iO(2628,`Série B: `),jc(2629,`code`),iO(2630,`{ type: ChartType.Line, data: ... }`),wg(),iO(2631,`.`),wg()(),jc(2632,`p`),iO(2633,`Se tanto `),jc(2634,`code`),iO(2635,`p-type`),wg(),iO(2636,` quanto `),jc(2637,`code`),iO(2638,`{ type }`),wg(),iO(2639,` forem ignorados, o padrão gerado pelo componente será:`),wg(),jc(2640,`ul`)(2641,`li`)(2642,`code`),iO(2643,`column`),wg(),iO(2644,`: se `),jc(2645,`code`),iO(2646,`data`),wg(),iO(2647,` receber `),jc(2648,`code`),iO(2649,`Array<number>`),wg(),iO(2650,`;`),wg(),jc(2651,`li`)(2652,`code`),iO(2653,`pie`),wg(),iO(2654,`: se `),jc(2655,`code`),iO(2656,`data`),wg(),iO(2657,` for `),jc(2658,`em`),iO(2659,`number`),wg(),iO(2660,`.`),wg()(),jc(2661,`blockquote`)(2662,`p`),iO(2663,`Se utilizada a propriedade `),jc(2664,`code`),iO(2665,`p-type`),wg(),iO(2666,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),jc(2667,`code`),iO(2668,`{type}`),wg(),iO(2669,` da primeira série sobrescreverá o valor definido em `),jc(2670,`code`),iO(2671,`p-type`),wg(),iO(2672,`.`),wg()(),jc(2673,`blockquote`)(2674,`p`),iO(2675,`O componente só exibirá as séries que tiverem o mesmo `),jc(2676,`code`),iO(2677,`type`),wg(),iO(2678,` definido, exceto para mesclagem para tipos `),jc(2679,`code`),iO(2680,`column`),wg(),iO(2681,` e `),jc(2682,`code`),iO(2683,`line`),wg(),iO(2684,`.`),wg()()()()(),jc(2685,`h3`),iO(2686,`Enums`),wg(),jc(2687,`h4`,4)(2688,`code`,5),iO(2689,`PoChartLabelFormat`),wg()(),jc(2690,`div`,2)(2691,`p`)(2692,`em`),iO(2693,`Enum`),wg(),jc(2694,`code`),iO(2695,`PoChartLabelFormat`),wg(),iO(2696,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),wg()(),jc(2697,`h4`,11),iO(2698,`Propriedades`),wg(),jc(2699,`table`,12)(2700,`tr`,13)(2701,`th`,14),iO(2702,`Nome`),wg(),jc(2703,`th`,14),iO(2704,`Descrição`),wg()(),jc(2705,`tr`,15)(2706,`td`,16)(2707,`div`,17)(2708,`span`,18),iO(2709,` Number`),nu(2710,`br`),wg()()(),jc(2711,`td`,23)(2712,`p`),iO(2713,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),jc(2714,`code`),iO(2715,`'1.2-2'`),wg(),iO(2716,` da `),jc(2717,`a`,69),iO(2718,`DecimalPipe`),wg(),iO(2719,`.`),wg()()(),jc(2720,`tr`,15)(2721,`td`,16)(2722,`div`,17)(2723,`span`,18),iO(2724,` Currency`),nu(2725,`br`),wg()()(),jc(2726,`td`,23)(2727,`p`),iO(2728,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),jc(2729,`a`,70),iO(2730,`DEFAULT_CURRENCY_CODE`),wg(),iO(2731,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),jc(2732,`a`,71),iO(2733,`LOCALE_ID`),wg(),iO(2734,` da aplicação. A configuração pode ser feita da seguinte forma:`),wg(),jc(2735,`pre`)(2736,`code`),iO(2737,`import { LOCALE_ID } from '@angular/core';
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
`),wg()()()()(),jc(2738,`h4`,4)(2739,`code`,5),iO(2740,`PoChartType`),wg()(),jc(2741,`div`,2)(2742,`p`)(2743,`em`),iO(2744,`Enum`),wg(),jc(2745,`code`),iO(2746,`PoChartType`),wg(),iO(2747,` para especificação dos tipos de gráficos.`),wg()(),jc(2748,`h4`,11),iO(2749,`Propriedades`),wg(),jc(2750,`table`,12)(2751,`tr`,13)(2752,`th`,14),iO(2753,`Nome`),wg(),jc(2754,`th`,14),iO(2755,`Descrição`),wg()(),jc(2756,`tr`,15)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),iO(2760,` Area`),nu(2761,`br`),wg()()(),jc(2762,`td`,23)(2763,`p`),iO(2764,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),wg()()(),jc(2765,`tr`,15)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),iO(2769,` Donut`),nu(2770,`br`),wg()()(),jc(2771,`td`,23)(2772,`p`),iO(2773,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),wg()()(),jc(2774,`tr`,15)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),iO(2778,` Pie`),nu(2779,`br`),wg()()(),jc(2780,`td`,23)(2781,`p`),iO(2782,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),wg()()(),jc(2783,`tr`,15)(2784,`td`,16)(2785,`div`,17)(2786,`span`,18),iO(2787,` Line`),nu(2788,`br`),wg()()(),jc(2789,`td`,23)(2790,`p`),iO(2791,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),jc(2792,`code`),iO(2793,`column`),wg(),iO(2794,` e `),jc(2795,`code`),iO(2796,`area`),wg(),iO(2797,`, definindo-se o tipo através da propriedade `),jc(2798,`code`),iO(2799,`PoChartSerie.type`),wg(),iO(2800,`.`),wg()()(),jc(2801,`tr`,15)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),iO(2805,` Column`),nu(2806,`br`),wg()()(),jc(2807,`td`,23)(2808,`p`),iO(2809,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),wg()()(),jc(2810,`tr`,15)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),iO(2814,` Bar`),nu(2815,`br`),wg()()(),jc(2816,`td`,23)(2817,`p`),iO(2818,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),wg()()(),jc(2819,`tr`,15)(2820,`td`,16)(2821,`div`,17)(2822,`span`,18),iO(2823,` Gauge`),nu(2824,`br`),wg()()(),jc(2825,`td`,23)(2826,`p`),iO(2827,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),wg(),jc(2828,`ul`)(2829,`li`),iO(2830,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),wg(),jc(2831,`li`),iO(2832,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),wg()()()(),jc(2833,`tr`,15)(2834,`td`,16)(2835,`div`,17)(2836,`span`,18),iO(2837,` Radar`),nu(2838,`br`),wg()()(),jc(2839,`td`,23)(2840,`p`),iO(2841,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return r})();var _t=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||r)(b(ir),b(Sn))};static ɵcmp=Zn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Chart`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(d,i){d&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-chart-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-chart-basic-view`)(6,`sample-po-chart-labs-view`)(7,`sample-po-chart-coffee-ranking-view`)(8,`sample-po-chart-stacked-view`)(9,`sample-po-chart-summary-view`)(10,`sample-po-chart-world-exports-view`)(11,`sample-po-chart-technology-skill-view`),wg()()()),d&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,fe,ve,Pe,we,Me,ke,Ae,Re],encapsulation:2,changeDetection:1})}return r})()}];var Ge=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[C1.forChild(_t),C1]})}return r})();var yn=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[Ta,Ge]})}return r})();export{yn as DocPoChartModule};