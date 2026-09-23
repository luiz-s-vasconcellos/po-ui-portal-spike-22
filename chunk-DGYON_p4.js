import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Br as TN,Et as V8e,F as G4,Hr as Tw,Ii as ht$1,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Kr as Un,Lr as RN,M as ECe,Mi as gg,Mn as xbe,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Xt as fr,Yi as mN,Yn as Ce$1,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,cn as lU,dn as oU,ea as p0,ft as P8e,ga as w,jn as wp,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx,z as H4}from"./main-NT5YGKBQ.js";var Be=()=>({label:`Angular`,data:100});var We=()=>({label:`React`,data:10});var Fe=(r,W)=>[r,W];var Ce=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&ql(0,`po-chart`,0),d&2&&cw(`p-series`,RN(3,Fe,TN(1,Be),TN(2,We)))},dependencies:[P8e],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r});var fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Chart Basic`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-chart-basic`),lg(),ql(23,`hr`)),d&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:`fillPoints`,label:`fillPoints`});var q=r=>[r];var He=()=>({label:`legend`,value:`legend`});var Ze=()=>({label:`roseType`,value:`roseType`});var Ye=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var je=()=>({label:`pointer`,value:`pointer`});var Ue=()=>({label:`stacked`,value:`stacked`});var Je=()=>({value:`fixed`,label:`Fixed`});function Xe(r,W){if(r&1){let l=Vx();Ml(0,`po-checkbox-group`,54),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),Jy(i)}),ht$1(`p-change`,function(){Qy(l);return Jy(zx().changeDataLabelOptions())}),lg(),f0()}if(r&2){let l=zx();cw(`p-options`,MN(3,q,TN(2,Je))),Tw(`ngModel`,l.selectedValuesDataLabel),p0()}}function Qe(r,W){if(r&1){let l=Vx();Ml(0,`po-number`,55),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.valueGauge,i)||(s.valueGauge=i),Jy(i)}),ht$1(`p-change`,function(i){Qy(l);return Jy(zx().changeValueGauge(i))}),lg(),f0()}if(r&2)Tw(`ngModel`,zx().valueGauge),p0()}function Ke(r,W){if(r&1){let l=Vx();Ml(0,`po-radio-group`,56),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.selectedShapeOption,i)||(s.selectedShapeOption=i),Jy(i)}),lg(),f0(),Ml(1,`po-switch`,57),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.selectedSplitArea,i)||(s.selectedSplitArea=i),Jy(i)}),lg(),f0(),Ml(2,`po-switch`,58),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),Jy(i)}),lg(),f0()}if(r&2){let l=zx();cw(`p-options`,l.optionsShapeOption),Tw(`ngModel`,l.selectedShapeOption),p0(),Up(),Tw(`ngModel`,l.selectedSplitArea),p0(),Up(),Tw(`ngModel`,l.selectedAreaStyle),p0()}}function $e(r,W){if(r&1){let l=Vx();Ml(0,`po-input`,59),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.data,i)||(s.data=i),Jy(i)}),lg(),f0()}if(r&2)Tw(`ngModel`,zx().data),p0()}function et(r,W){if(r&1){let l=Vx();Ml(0,`po-input`,60),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.stackGroupName,i)||(s.stackGroupName=i),Jy(i)}),lg(),f0()}if(r&2)Tw(`ngModel`,zx().stackGroupName),p0()}function tt(r,W){if(r&1){let l=Vx();Ml(0,`po-number`,61),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.fromGauge,i)||(s.fromGauge=i),Jy(i)}),lg(),f0()}if(r&2)Tw(`ngModel`,zx().fromGauge),p0()}function nt(r,W){if(r&1){let l=Vx();Ml(0,`po-number`,62),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.toGauge,i)||(s.toGauge=i),Jy(i)}),lg(),f0()}if(r&2)Tw(`ngModel`,zx().toGauge),p0()}function it(r,W){if(r&1){let l=Vx();Ml(0,`div`,3)(1,`po-button`,63),ht$1(`p-click`,function(){Qy(l);return Jy(zx().addData())}),lg()()}}function ot(r,W){if(r&1){let l=Vx();Ml(0,`po-number`,64),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.min,i)||(s.min=i),Jy(i)}),lg(),f0(),Ml(1,`po-number`,65),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.max,i)||(s.max=i),Jy(i)}),lg(),f0(),Ml(2,`po-input`,66),Mw(`ngModelChange`,function(i){Qy(l);let s=zx();return yN(s.colorIndicator,i)||(s.colorIndicator=i),Jy(i)}),lg(),f0(),Ml(3,`div`,3)(4,`po-button`,67),ht$1(`p-click`,function(){Qy(l);return Jy(zx().addData())}),lg()()}if(r&2){let l=zx();Tw(`ngModel`,l.min),p0(),Up(),Tw(`ngModel`,l.max),p0(),Up(),Tw(`ngModel`,l.colorIndicator),p0(),Up(2),cw(`p-disabled`,l.isTypeRadar&&!l.categories)}}var ye=(()=>{class r$1{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:fr.Line},{label:`Area`,value:fr.Area},{label:`Bar`,value:fr.Bar},{label:`Column`,value:fr.Column},{label:`Donut`,value:fr.Donut},{label:`Pie`,value:fr.Pie},{label:`Gauge`,value:fr.Gauge},{label:`Radar`,value:fr.Radar}];labelTypeOptions=[{label:`Number`,value:H4.Number},{label:`Currency`,value:H4.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:l})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===fr.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===fr.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=fr.Gauge,this.type=fr.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=fr.Radar,this.type=fr.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=r(r({},this.options),l?r({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===fr.Line||this.type===fr.Area||this.type===fr.Column||this.type===fr.Bar||this.type===fr.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static ɵfac=function(d){return new(d||r$1)};static ɵcmp=Un({type:r$1,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:66,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let s=Vx();Ml(0,`po-chart`,1),ht$1(`p-series-click`,function(a){return i.changeEvent(`p-series-click`,a)})(`p-series-hover`,function(a){return i.changeEvent(`p-series-hover`,a)}),lg(),ql(1,`po-divider`,2),Ml(2,`div`,3),ql(3,`po-info`,4),lg(),ql(4,`po-divider`,5),Ml(5,`form`)(6,`po-select`,6),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.type,a)||(i.type=a),Jy(a)}),ht$1(`p-change`,function(a){return i.changeType(a)}),lg(),f0(),Ml(7,`po-number`,7),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.height,a)||(i.height=a),Jy(a)}),lg(),f0(),Ml(8,`po-input`,8),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.title,a)||(i.title=a),Jy(a)}),lg(),f0(),Tx(9,Xe,1,5,`po-checkbox-group`,9),lg(),ql(10,`po-divider`,10),Ml(11,`form`,null,0)(13,`div`,3)(14,`po-switch`,11),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.isTypeGauge,a)||(i.isTypeGauge=a),Jy(a)}),ht$1(`p-change`,function(a){return i.changeSwitchGauge(a)}),lg(),f0(),Ml(15,`po-switch`,12),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.isTypeRadar,a)||(i.isTypeRadar=a),Jy(a)}),ht$1(`p-change`,function(a){return i.changeSwitchRadar(a)}),lg(),f0(),Tx(16,Qe,1,1,`po-number`,13),Tx(17,Ke,3,4),lg(),Ml(18,`div`,3)(19,`po-input`,14),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.label,a)||(i.label=a),Jy(a)}),lg(),f0(),Tx(20,$e,1,1,`po-input`,15),Ml(21,`po-select`,16),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.serieType,a)||(i.serieType=a),Jy(a)}),ht$1(`p-change`,function(a){return i.changeType(a)}),lg(),f0(),Ml(22,`po-input`,17),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.tooltip,a)||(i.tooltip=a),Jy(a)}),lg(),f0(),Ml(23,`po-input`,18),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.color,a)||(i.color=a),Jy(a)}),lg(),f0(),Tx(24,et,1,1,`po-input`,19),Tx(25,tt,1,1,`po-number`,20),Tx(26,nt,1,1,`po-number`,21),Tx(27,it,2,0,`div`,3),lg()(),Ml(28,`div`,3),ql(29,`po-divider`,22),Ml(30,`po-input`,23),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.categories,a)||(i.categories=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addCategories()}),lg(),f0(),Tx(31,ot,5,4),lg(),Ml(32,`form`)(33,`div`,3),ql(34,`po-divider`,24),Ml(35,`po-number`,25),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.minRange,a)||(i.options.axis.minRange=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(36,`po-number`,26),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(37,`po-number`,27),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(38,`po-select`,28),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.labelType,a)||(i.options.axis.labelType=a),Jy(a)}),ht$1(`p-change`,function(){return i.addOptions()}),lg(),f0(),Ml(39,`po-number`,29),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(40,`po-number`,30),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(41,`po-number`,31),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(42,`po-number`,32),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(43,`po-number`,33),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.innerRadius,a)||(i.options.innerRadius=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(44,`po-number`,34),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.borderRadius,a)||(i.options.borderRadius=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(45,`po-input`,35),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.firstColumnName,a)||(i.options.firstColumnName=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(46,`po-input`,36),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(47,`po-input`,37),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.descriptionChart,a)||(i.options.descriptionChart=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),Ml(48,`po-input`,38),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),Jy(a)}),ht$1(`p-blur`,function(){return i.addOptions()}),lg(),f0(),lg(),Ml(49,`div`,3)(50,`po-checkbox-group`,39),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeHeaderOptions()}),lg(),f0(),Ml(51,`po-checkbox-group`,40),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeAxisOptions()}),lg(),f0(),Ml(52,`po-checkbox-group`,41),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeDataZoomOptions()}),lg(),f0(),Ml(53,`po-checkbox-group`,42),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeFillPointsOptions()}),lg(),f0(),Ml(54,`po-checkbox-group`,43),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeLegendOptions()}),lg(),f0(),Ml(55,`po-checkbox-group`,44),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedRoseType,a)||(i.selectedRoseType=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeRoseTypeOptions()}),lg(),f0(),Ml(56,`po-checkbox-group`,45),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeShowFromToLegend()}),lg(),f0(),Ml(57,`po-checkbox-group`,46),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedPointer,a)||(i.selectedPointer=a),Jy(a)}),ht$1(`p-change`,function(){return i.changePointer()}),lg(),f0(),Ml(58,`po-checkbox-group`,47),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedStacked,a)||(i.selectedStacked=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeStacked()}),lg(),f0(),Ml(59,`po-radio-group`,48),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeLegendVerticalPosition()}),lg(),f0(),Ml(60,`po-radio-group`,49),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeLegendPosition()}),lg(),f0(),Ml(61,`po-radio-group`,50),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedLegendType,a)||(i.selectedLegendType=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeLegendType()}),lg(),f0(),Ml(62,`po-radio-group`,51),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.selectedRendererOption,a)||(i.selectedRendererOption=a),Jy(a)}),ht$1(`p-change`,function(){return i.changeRendererOption()}),lg(),f0(),lg(),ql(63,`po-divider`,52),Ml(64,`div`,3)(65,`po-button`,53),ht$1(`p-click`,function(){return i.restore()}),lg()()()}d&2&&(cw(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),Up(3),cw(`p-value`,i.event),Up(3),Tw(`ngModel`,i.type),cw(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),p0(),Up(),Tw(`ngModel`,i.height),p0(),Up(),Tw(`ngModel`,i.title),p0(),Up(),Mx(i.isTypeGrid()?9:-1),Up(5),Tw(`ngModel`,i.isTypeGauge),p0(),Up(),Tw(`ngModel`,i.isTypeRadar),p0(),Up(),Mx(i.isTypeGauge?16:-1),Up(),Mx(i.isTypeRadar?17:-1),Up(2),Tw(`ngModel`,i.label),p0(),Up(),Mx(i.isTypeGauge?-1:20),Up(),Tw(`ngModel`,i.serieType),cw(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),p0(),Up(),cw(`p-disabled`,i.disabledTooltip),Tw(`ngModel`,i.tooltip),p0(),Up(),Tw(`ngModel`,i.color),p0(),Up(),Mx(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?24:-1),Up(),Mx(i.isTypeGauge?25:-1),Up(),Mx(i.isTypeGauge?26:-1),Up(),Mx(i.isTypeRadar?-1:27),Up(3),oN(i.isTypeRadar?`po-md-3`:`po-md-4`),cw(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),Tw(`ngModel`,i.categories),p0(),Up(),Mx(i.isTypeRadar?31:-1),Up(4),Tw(`ngModel`,i.options.axis.minRange),p0(),Up(),Tw(`ngModel`,i.options.axis.maxRange),p0(),Up(),Tw(`ngModel`,i.options.axis.gridLines),p0(),Up(),cw(`p-options`,i.labelTypeOptions),Tw(`ngModel`,i.options.axis.labelType),p0(),Up(),Tw(`ngModel`,i.options.axis.paddingBottom),p0(),Up(),Tw(`ngModel`,i.options.axis.paddingLeft),p0(),Up(),Tw(`ngModel`,i.options.axis.paddingRight),p0(),Up(),Tw(`ngModel`,i.options.axis.rotateLegend),p0(),Up(),Tw(`ngModel`,i.options.innerRadius),p0(),Up(),Tw(`ngModel`,i.options.borderRadius),p0(),Up(),Tw(`ngModel`,i.options.firstColumnName),p0(),Up(),Tw(`ngModel`,i.options.textCenterGraph),p0(),Up(),Tw(`ngModel`,i.options.descriptionChart),p0(),Up(),Tw(`ngModel`,i.options.subtitleGauge),p0(),Up(2),cw(`p-columns`,2)(`p-options`,i.optionsHeader),Tw(`ngModel`,i.selectedValuesHeader),p0(),Up(),cw(`p-columns`,2)(`p-options`,i.optionsAxis),Tw(`ngModel`,i.selectedValuesAxis),p0(),Up(),cw(`p-columns`,2)(`p-options`,i.optionsDataZoom),Tw(`ngModel`,i.selectedValuesDataZoom),p0(),Up(),cw(`p-columns`,1)(`p-options`,MN(83,q,TN(82,ze))),Tw(`ngModel`,i.selectedValuesFillPoints),p0(),Up(),cw(`p-options`,MN(86,q,TN(85,He))),Tw(`ngModel`,i.selectedValuesLegend),p0(),Up(),cw(`p-options`,MN(89,q,TN(88,Ze))),Tw(`ngModel`,i.selectedRoseType),p0(),Up(),cw(`p-options`,MN(92,q,TN(91,Ye))),Tw(`ngModel`,i.selectedFromToLegend),p0(),Up(),cw(`p-options`,MN(95,q,TN(94,je))),Tw(`ngModel`,i.selectedPointer),p0(),Up(),cw(`p-options`,MN(98,q,TN(97,Ue))),Tw(`ngModel`,i.selectedStacked),p0(),Up(),cw(`p-options`,i.optionsLegendVerticalPosition),Tw(`ngModel`,i.selectedLegendVerticalPosition),p0(),Up(),cw(`p-options`,i.optionsLegendPosition),Tw(`ngModel`,i.selectedLegendPosition),p0(),Up(),cw(`p-options`,i.optionsLegendType),Tw(`ngModel`,i.selectedLegendType),p0(),Up(),cw(`p-options`,i.optionsRendererOption),Tw(`ngModel`,i.selectedRendererOption),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,P8e,nb,G4,lU,xbe,q0e,Tbe,J4,kbe],encapsulation:2,changeDetection:1})}return r$1})();var rt=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Chart Labs`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-chart
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-chart-labs`),lg(),ql(23,`hr`)),d&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,rt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=f(e_e);participationByCountryInWorldExportsType=fr.Line;evolutionOfCoffeeAndSomeCompetitorsType=fr.Column;coffeConsumingChartType=fr.Donut;consumptionPerCapitaType=fr.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:fr.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:fr.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:fr.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:fr.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:fr.Column},{label:`2017`,data:[93,52,18],type:fr.Column},{label:`2020`,data:[95,21,-17],type:fr.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:fr.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:H4.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:H4.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,`_blank`)}showMeTheDates(l){this.poAlert.alert({title:`Statistic`,message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[Ce$1([e_e])],decls:28,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,1,`po-md-12`,`po-mt-2`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[`p-title`,`Top 5 coffee producing countries (in tons)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,1,`po-md-6`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[1,`po-md-6`,`po-mt-2`],[`p-height`,`198`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(Ml(0,`div`,0)(1,`div`,1)(2,`div`,0),ql(3,`po-chart`,2)(4,`po-chart`,3),lg()(),Ml(5,`div`,1),ql(6,`po-chart`,4),lg(),Ml(7,`div`,5)(8,`po-chart`,6),ht$1(`p-series-click`,function(m){return i.searchMore(m)}),lg(),Ml(9,`po-chart`,7),ht$1(`p-series-click`,function(m){return i.showMeTheDates(m)}),lg()(),Ml(10,`div`,0),ql(11,`po-chart`,8),Ml(12,`div`,9)(13,`po-widget`,10)(14,`div`,11),mN(15,`66 billion`),lg(),Ml(16,`div`,12),mN(17,`cups of coffee are consumed per year in U.S.`),lg()(),Ml(18,`po-widget`,10)(19,`div`,11),mN(20,`2nd most`),lg(),Ml(21,`div`,12),mN(22,`traded commodity in the world second to Oil.`),lg()()()()(),Ml(23,`div`,0)(24,`po-container`,13)(25,`div`,14),mN(26,`Top 10 Largest Coffee Chains in the World`),lg(),ql(27,`po-table`,15),lg()()),d&2&&(Up(3),cw(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),Up(),cw(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),Up(2),cw(`p-height`,816)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),Up(2),cw(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),Up(),cw(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),Up(2),cw(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),Up(16),cw(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[P8e,wp,oU,$8e],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r});var Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Chart - Coffee Ranking`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-chart-coffee-ranking`),lg(),ql(23,`hr`)),d&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,pt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,_e],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{typeBar=fr.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:6,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[`p-title`,`Average Temperature by Region`,1,`po-lg-6`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,1,`po-lg-6`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(Ml(0,`po-container`)(1,`div`,0),mN(2,`Energy and Climate Analysis`),lg(),Ml(3,`div`,1),ql(4,`po-chart`,2)(5,`po-chart`,3),lg()()),d&2&&(Up(4),cw(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),Up(),cw(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[P8e,wp],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Chart - Stacked`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-chart-stacked`),lg(),ql(23,`hr`)),d&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ct,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Te],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=fr.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:8,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(Ml(0,`po-container`)(1,`div`,0),mN(2,`Sales Performance`),lg(),Ml(3,`div`,1)(4,`div`,2),ql(5,`po-chart`,3),lg(),Ml(6,`div`,2),ql(7,`po-chart`,4),lg()()()),d&2&&(Up(5),cw(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),Up(2),cw(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[P8e,wp],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r});var Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Chart - Summary`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-chart-summary`),lg(),ql(23,`hr`)),d&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ht,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Le],encapsulation:2,changeDetection:1})}return r})();var De=(()=>{class r{participationByCountryInWorldExportsType=fr.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:2,vars:5,consts:[[1,`po-row`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(Ml(0,`div`,0),ql(1,`po-chart`,1),lg()),d&2&&(Up(),cw(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[P8e],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r});var ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Chart - World Exports`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-chart-world-exports`),lg(),ql(23,`hr`)),d&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,bt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,De],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=fr.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:3,vars:6,consts:[[1,`po-row`],[`p-title`,`Technology Skill Assessment`,1,`po-md-6`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,1,`po-md-6`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(Ml(0,`div`,0),ql(1,`po-chart`,1)(2,`po-chart`,2),lg()),d&2&&(Up(),cw(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),Up(),cw(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[P8e],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Chart - Radar`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-chart-technology-skill`),lg(),ql(23,`hr`)),d&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ft,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2833,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`]],template:function(d,i){d&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoChartModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-chart`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoChartComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`O `),Ml(18,`code`),mN(19,`po-chart`),lg(),mN(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),lg(),Ml(21,`p`),mN(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),lg(),Ml(23,`p`),mN(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),lg(),Ml(25,`p`),mN(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Ml(27,`em`),mN(28,`mouse`),lg(),mN(29,` sobre o elemento.`),lg(),Ml(30,`h4`),mN(31,`Guia de uso para Gráficos`),lg(),Ml(32,`blockquote`)(33,`p`),mN(34,`Veja nosso `),Ml(35,`a`,6),mN(36,`guia de uso para gráficos`),lg(),mN(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),lg()(),Ml(38,`h4`),mN(39,`Tokens customizáveis`),lg(),Ml(40,`p`),mN(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(42,`blockquote`)(43,`p`),mN(44,`Para maiores informações, acesse o guia `),Ml(45,`a`,7),mN(46,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(47,`.`),lg()(),Ml(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),mN(52,`Propriedade`),lg(),Ml(53,`th`),mN(54,`Descrição`),lg(),Ml(55,`th`),mN(56,`Valor Padrão`),lg()()(),Ml(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),mN(61,`Chart (po-chart)`),lg()(),ql(62,`td`)(63,`td`),lg(),Ml(64,`tr`)(65,`td`)(66,`code`),mN(67,`--background-color-grid`),lg()(),Ml(68,`td`),mN(69,`Cor de background dos gráficos`),lg(),Ml(70,`td`)(71,`code`),mN(72,`var(--color-neutral-light-00)`),lg()()(),Ml(73,`tr`)(74,`td`)(75,`code`),mN(76,`--color-description-chart`),lg()(),Ml(77,`td`),mN(78,`Cor da descrição dos gráficos`),lg(),Ml(79,`td`)(80,`code`),mN(81,`var(--color-neutral-dark-70)`),lg()()(),Ml(82,`tr`)(83,`td`)(84,`code`),mN(85,`--font-family-description-chart`),lg()(),Ml(86,`td`),mN(87,`Fonte da descrição dos gráficos`),lg(),Ml(88,`td`)(89,`code`),mN(90,`var(--font-family-theme)`),lg()()(),Ml(91,`tr`)(92,`td`)(93,`code`),mN(94,`--font-size-description-chart`),lg()(),Ml(95,`td`),mN(96,`Tamanho da fonte da descrição dos gráficos`),lg(),Ml(97,`td`)(98,`code`),mN(99,`var(--font-size-sm)`),lg()()(),Ml(100,`tr`)(101,`td`)(102,`code`),mN(103,`--font-weight-description-chart`),lg()(),Ml(104,`td`),mN(105,`Peso da fonte da descrição dos gráficos`),lg(),Ml(106,`td`)(107,`code`),mN(108,`var(--font-weight-normal)`),lg()()(),Ml(109,`tr`)(110,`td`)(111,`strong`),mN(112,`Header (po-chart .po-chart-header )`),lg()(),ql(113,`td`)(114,`td`),lg(),Ml(115,`tr`)(116,`td`)(117,`code`),mN(118,`--background-color`),lg()(),Ml(119,`td`),mN(120,`Cor de background do cabeçalho`),lg(),Ml(121,`td`)(122,`code`),mN(123,`var(--color-neutral-light-00)`),lg()()(),Ml(124,`tr`)(125,`td`)(126,`code`),mN(127,`--color`),lg()(),Ml(128,`td`),mN(129,`Cor da fonte do cabeçalho`),lg(),Ml(130,`td`)(131,`code`),mN(132,`var(--color-neutral-dark-70)`),lg()()(),Ml(133,`tr`)(134,`td`)(135,`code`),mN(136,`--font-family`),lg()(),Ml(137,`td`),mN(138,`Família tipográfica usada`),lg(),Ml(139,`td`)(140,`code`),mN(141,`var(--font-family-theme)`),lg()()(),Ml(142,`tr`)(143,`td`)(144,`code`),mN(145,`--font-size-title`),lg()(),Ml(146,`td`),mN(147,`Tamanho da fonte`),lg(),Ml(148,`td`)(149,`code`),mN(150,`var(--font-size-default)`),lg()()(),Ml(151,`tr`)(152,`td`)(153,`code`),mN(154,`--font-size-icons`),lg()(),Ml(155,`td`),mN(156,`Tamanho dos ícones`),lg(),Ml(157,`td`)(158,`code`),mN(159,`var(--font-size-md)`),lg()()(),Ml(160,`tr`)(161,`td`)(162,`code`),mN(163,`--font-weight`),lg()(),Ml(164,`td`),mN(165,`Peso da fonte`),lg(),Ml(166,`td`)(167,`code`),mN(168,`var(--font-weight-bold)`),lg()()(),Ml(169,`tr`)(170,`td`)(171,`strong`),mN(172,`Chart (po-chart .po-chart)`),lg()(),ql(173,`td`)(174,`td`),lg(),Ml(175,`tr`)(176,`td`)(177,`code`),mN(178,`--color-grid`),lg()(),Ml(179,`td`),mN(180,`Cor da linha dos gráficos que possuem eixo`),lg(),Ml(181,`td`)(182,`code`),mN(183,`var(--color-neutral-light-20)`),lg()()(),Ml(184,`tr`)(185,`td`)(186,`code`),mN(187,`--font-family-grid`),lg()(),Ml(188,`td`),mN(189,`Família tipográfica usada nos valores dos eixos`),lg(),Ml(190,`td`)(191,`code`),mN(192,`var(--font-family-theme)`),lg()()(),Ml(193,`tr`)(194,`td`)(195,`code`),mN(196,`--font-size-grid`),lg()(),Ml(197,`td`),mN(198,`Tamanho da fonte usada nos valores dos eixos`),lg(),Ml(199,`td`)(200,`code`),mN(201,`var(--font-size-xs)`),lg()()(),Ml(202,`tr`)(203,`td`)(204,`code`),mN(205,`--font-weight-grid`),lg()(),Ml(206,`td`),mN(207,`Peso da fonte usada nos valores dos eixos`),lg(),Ml(208,`td`)(209,`code`),mN(210,`var(--font-weight-normal)`),lg()()(),Ml(211,`tr`)(212,`td`)(213,`code`),mN(214,`--color-legend`),lg()(),Ml(215,`td`),mN(216,`Cor da fonte da legenda`),lg(),Ml(217,`td`)(218,`code`),mN(219,`var(--color-neutral-dark-70)`),lg()()(),Ml(220,`tr`)(221,`td`)(222,`code`),mN(223,`--color-legend-scroll-icon-active`),lg()(),Ml(224,`td`),mN(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),Ml(226,`code`),mN(227,`scroll`),lg()(),Ml(228,`td`)(229,`code`),mN(230,`var(--color-action-default)`),lg()()(),Ml(231,`tr`)(232,`td`)(233,`code`),mN(234,`--color-legend-scroll-icon-inactive`),lg()(),Ml(235,`td`),mN(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),Ml(237,`code`),mN(238,`scroll`),lg()(),Ml(239,`td`)(240,`code`),mN(241,`var(--color-action-disabled)`),lg()()(),Ml(242,`tr`)(243,`td`)(244,`code`),mN(245,`--border-radius-bar`),lg()(),Ml(246,`td`),mN(247,`Tamanho da borda nos graficos `),Ml(248,`code`),mN(249,`Bar`),lg(),mN(250,` e `),Ml(251,`code`),mN(252,`Column`),lg()(),Ml(253,`td`)(254,`code`),mN(255,`var(--border-radius-none)`),lg()()(),Ml(256,`tr`)(257,`td`)(258,`code`),mN(259,`--border-color`),lg()(),Ml(260,`td`),mN(261,`Cor da borda do gráfico nos Gráficos `),Ml(262,`code`),mN(263,`Donut`),lg(),mN(264,` e `),Ml(265,`code`),mN(266,`Pie`),lg()(),Ml(267,`td`)(268,`code`),mN(269,`var(--color-neutral-light-00)`),lg()()(),Ml(270,`tr`)(271,`td`)(272,`code`),mN(273,`--color-hightlight-value`),lg()(),Ml(274,`td`),mN(275,`Cor do valor de destaque nos Gráficos `),Ml(276,`code`),mN(277,`Donut`),lg(),mN(278,` e `),Ml(279,`code`),mN(280,`Gauge`),lg()(),Ml(281,`td`)(282,`code`),mN(283,`var(--color-neutral-dark-70)`),lg()()(),Ml(284,`tr`)(285,`td`)(286,`code`),mN(287,`--font-family-hightlight-value`),lg()(),Ml(288,`td`),mN(289,`Família tipográfica do valor de destaque nos Gráficos `),Ml(290,`code`),mN(291,`Donut`),lg(),mN(292,` e `),Ml(293,`code`),mN(294,`Gauge`),lg()(),Ml(295,`td`)(296,`code`),mN(297,`var(--font-family-theme)`),lg()()(),Ml(298,`tr`)(299,`td`)(300,`code`),mN(301,`--font-weight-hightlight-value`),lg()(),Ml(302,`td`),mN(303,`Peso da fonte do valor de destaque nos Gráficos `),Ml(304,`code`),mN(305,`Donut`),lg(),mN(306,` e `),Ml(307,`code`),mN(308,`Gauge`),lg()(),Ml(309,`td`)(310,`code`),mN(311,`var(--font-weight-bold)`),lg()()(),Ml(312,`tr`)(313,`td`)(314,`code`),mN(315,`--color-base-gauge`),lg()(),Ml(316,`td`),mN(317,`Cor da base do gráfico `),Ml(318,`code`),mN(319,`Gauge`),lg()(),Ml(320,`td`)(321,`code`),mN(322,`var(--color-neutral-light-20)`),lg()()(),Ml(323,`tr`)(324,`td`)(325,`code`),mN(326,`--color-gauge-pointer-color`),lg()(),Ml(327,`td`),mN(328,`Cor do ponteiro do gráfico `),Ml(329,`code`),mN(330,`Gauge`),lg()(),Ml(331,`td`)(332,`code`),mN(333,`var(--color-neutral-dark-70)`),lg()()(),Ml(334,`tr`)(335,`td`)(336,`code`),mN(337,`--color-chart-line-point-fill`),lg()(),Ml(338,`td`),mN(339,`Cor de dentro do círculo dos gráficos `),Ml(340,`code`),mN(341,`Line`),lg(),mN(342,` e `),Ml(343,`code`),mN(344,`Area`),lg()(),Ml(345,`td`)(346,`code`),mN(347,`var(--color-neutral-light-00)`),lg()()(),Ml(348,`tr`)(349,`td`)(350,`code`),mN(351,`--border-color-radar`),lg()(),Ml(352,`td`),mN(353,`Cor do eixo da grid do gráfico `),Ml(354,`code`),mN(355,`Radar`),lg()(),Ml(356,`td`)(357,`code`),mN(358,`var(--color-neutral-light-30)`),lg()()(),Ml(359,`tr`)(360,`td`)(361,`code`),mN(362,`--color-background-zebra`),lg()(),Ml(363,`td`),mN(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),Ml(365,`code`),mN(366,`Radar`),lg()(),Ml(367,`td`)(368,`code`),mN(369,`var(--color-neutral-light-10)`),lg()()(),Ml(370,`tr`)(371,`td`)(372,`code`),mN(373,`--color-background-line`),lg()(),Ml(374,`td`),mN(375,`Cor das áreas entre as faixas zebradas da grade do `),Ml(376,`code`),mN(377,`Radar`),lg()(),Ml(378,`td`)(379,`code`),mN(380,`none`),lg()()(),Ml(381,`tr`)(382,`td`)(383,`strong`),mN(384,`Wrapper (.po-chart-container-gauge)`),lg()(),ql(385,`td`)(386,`td`),lg(),Ml(387,`tr`)(388,`td`)(389,`code`),mN(390,`--background-color-container-gauge`),lg()(),Ml(391,`td`),mN(392,`Cor de background do container do gauge`),lg(),Ml(393,`td`)(394,`code`),mN(395,`var(--color-neutral-light-00)`),lg()()()()()(),Ml(396,`div`,8)(397,`h4`,9),mN(398,`Seletor`),lg(),Ml(399,`pre`,10),mN(400,`<po-chart
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
`),lg()(),Ml(401,`h4`,11),mN(402,`Propriedades`),lg(),Ml(403,`table`,12)(404,`tr`,13)(405,`th`,14),mN(406,`Nome`),lg(),Ml(407,`th`,14),mN(408,`Tipo`),lg(),Ml(409,`th`,14),mN(410,`Padrão`),lg(),Ml(411,`th`,14),mN(412,`Descrição`),lg()(),Ml(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),mN(417,` p-categories`),ql(418,`br`),lg()()(),Ml(419,`td`,19)(420,`code`,20),mN(421,`Array<string> `),lg(),Ml(422,`code`,21),mN(423,` PoChartRadarOptions`),lg()(),Ml(424,`td`,22),mN(425,`-`),lg(),Ml(426,`td`,23)(427,`em`)(428,`strong`),mN(429,`(opcional)`),lg()(),Ml(430,`p`),mN(431,`Define os valores utilizados na construção das categorias do gráfico.`),lg(),Ml(432,`p`),mN(433,`Para gráficos dos tipos `),Ml(434,`em`),mN(435,`bar`),lg(),mN(436,`, `),Ml(437,`em`),mN(438,`area`),lg(),mN(439,`, `),Ml(440,`em`),mN(441,`column`),lg(),mN(442,` e `),Ml(443,`em`),mN(444,`line`),lg(),mN(445,`, representa os nomes das categorias exibidas no eixo.`),lg(),Ml(446,`p`),mN(447,`Para gráficos do tipo `),Ml(448,`em`),mN(449,`radar`),lg(),mN(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Ml(451,`code`),mN(452,`Radar`),lg(),mN(453,`.`),lg(),Ml(454,`blockquote`)(455,`p`),mN(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),lg()(),Ml(457,`blockquote`)(458,`p`),mN(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),lg()()()(),Ml(460,`tr`,15)(461,`td`,16)(462,`div`,17)(463,`span`,18),mN(464,` p-custom-actions`),ql(465,`br`),lg()()(),Ml(466,`td`,19)(467,`code`,24),mN(468,`Array<PoPopupAction>`),lg()(),Ml(469,`td`,22),mN(470,`-`),lg(),Ml(471,`td`,23)(472,`em`)(473,`strong`),mN(474,`(opcional)`),lg()(),Ml(475,`p`),mN(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),lg()()(),Ml(477,`tr`,15)(478,`td`,16)(479,`div`,17)(480,`span`,18),mN(481,` p-data-label`),ql(482,`br`),lg()()(),Ml(483,`td`,19)(484,`code`,25),mN(485,`PoChartDataLabel`),lg()(),Ml(486,`td`,22),mN(487,`-`),lg(),Ml(488,`td`,23)(489,`em`)(490,`strong`),mN(491,`(opcional)`),lg()(),Ml(492,`p`),mN(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),lg(),Ml(494,`p`),mN(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),lg(),Ml(496,`ul`)(497,`li`),mN(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),lg(),Ml(499,`li`),mN(500,`O `),Ml(501,`em`),mN(502,`tooltip`),lg(),mN(503,` não será exibido.`),lg(),Ml(504,`li`),mN(505,`Os marcadores (`),Ml(506,`em`),mN(507,`bullets`),lg(),mN(508,`) terão seu estilo ajustado.`),lg(),Ml(509,`li`),mN(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),lg()(),Ml(511,`blockquote`)(512,`p`),mN(513,`Disponível para gráficos do tipo `),Ml(514,`code`),mN(515,`line`),lg(),mN(516,` e `),Ml(517,`code`),mN(518,`radar`),lg(),mN(519,`.`),lg()(),Ml(520,`h4`),mN(521,`Exemplo de utilização:`),lg(),Ml(522,`pre`)(523,`code`,26),mN(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),lg()()()(),Ml(525,`tr`,15)(526,`td`,16)(527,`div`,17)(528,`span`,18),mN(529,` p-height`),ql(530,`br`),lg()()(),Ml(531,`td`,19)(532,`code`,27),mN(533,`number`),lg()(),Ml(534,`td`,22)(535,`p`)(536,`code`),mN(537,`400`),lg()()(),Ml(538,`td`,23)(539,`em`)(540,`strong`),mN(541,`(opcional)`),lg()(),Ml(542,`p`),mN(543,`Define a altura do gráfico em px.`),lg(),Ml(544,`blockquote`)(545,`p`),mN(546,`No caso do tipo `),Ml(547,`code`),mN(548,`Gauge`),lg(),mN(549,`, o valor padrão é `),Ml(550,`code`),mN(551,`300`),lg(),mN(552,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),lg()()()(),Ml(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),mN(557,` p-literals`),ql(558,`br`),lg()()(),Ml(559,`td`,19)(560,`code`,28),mN(561,`PoChartLiterals`),lg()(),Ml(562,`td`,22),mN(563,`-`),lg(),Ml(564,`td`,23)(565,`em`)(566,`strong`),mN(567,`(opcional)`),lg()(),Ml(568,`p`),mN(569,`Objeto com as literais usadas no `),Ml(570,`code`),mN(571,`po-chart`),lg(),mN(572,`.`),lg(),Ml(573,`p`),mN(574,`Para utilizar basta passar a literal que deseja customizar:`),lg(),Ml(575,`pre`)(576,`code`),mN(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),lg()(),Ml(578,`p`),mN(579,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),lg(),Ml(580,`pre`)(581,`code`),mN(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),lg()(),Ml(583,`blockquote`)(584,`p`),mN(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(586,`a`,29)(587,`code`),mN(588,`PoI18nService`),lg()(),mN(589,` ou do browser.`),lg()()()(),Ml(590,`tr`,15)(591,`td`,16)(592,`div`,17)(593,`span`,18),mN(594,` p-options`),ql(595,`br`),lg()()(),Ml(596,`td`,19)(597,`code`,30),mN(598,`PoChartOptions`),lg()(),Ml(599,`td`,22),mN(600,`-`),lg(),Ml(601,`td`,23)(602,`em`)(603,`strong`),mN(604,`(opcional)`),lg()(),Ml(605,`p`),mN(606,`Objeto com as configurações usadas no `),Ml(607,`code`),mN(608,`po-chart`),lg(),mN(609,`.`),lg(),Ml(610,`p`),mN(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Ml(612,`em`),mN(613,`axis`),lg(),mN(614,`) para os gráficos dos tipos `),Ml(615,`code`),mN(616,`area`),lg(),mN(617,`, `),Ml(618,`code`),mN(619,`line`),lg(),mN(620,`, `),Ml(621,`code`),mN(622,`column`),lg(),mN(623,`, `),Ml(624,`code`),mN(625,`bar`),lg(),mN(626,` e `),Ml(627,`code`),mN(628,`radar`),lg(),mN(629,` da seguinte forma:`),lg(),Ml(630,`pre`)(631,`code`),mN(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),lg()()()(),Ml(633,`tr`,15)(634,`td`,16)(635,`div`,17)(636,`span`,18),mN(637,` p-series`),ql(638,`br`),lg()()(),Ml(639,`td`,19)(640,`code`,31),mN(641,`Array<PoChartSerie>`),lg()(),Ml(642,`td`,22),mN(643,`-`),lg(),Ml(644,`td`,23)(645,`p`),mN(646,`Define os elementos do gráfico que serão criados dinamicamente.`),lg()()(),Ml(647,`tr`,15)(648,`td`,16)(649,`div`,32)(650,`span`,33),mN(651,` (p-series-click)`),ql(652,`br`),lg()()(),Ml(653,`td`,19)(654,`code`,34),mN(655,`EventEmitter`),lg()(),Ml(656,`td`,22),mN(657,`-`),lg(),Ml(658,`td`,23)(659,`em`)(660,`strong`),mN(661,`(opcional)`),lg()(),Ml(662,`p`),mN(663,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),lg(),Ml(664,`p`),mN(665,`O evento emitirá o seguinte parâmetro:`),lg(),Ml(666,`ul`)(667,`li`)(668,`em`),mN(669,`donut`),lg(),mN(670,` e `),Ml(671,`em`),mN(672,`pie`),lg(),mN(673,`: um objeto contendo a categoria e valor da série.`),lg(),Ml(674,`li`)(675,`em`),mN(676,`radar`),lg(),mN(677,`: um objeto contendo o nome da série e os valores.`),lg(),Ml(678,`li`)(679,`em`),mN(680,`area`),lg(),mN(681,`, `),Ml(682,`em`),mN(683,`line`),lg(),mN(684,`, `),Ml(685,`em`),mN(686,`column`),lg(),mN(687,` e `),Ml(688,`em`),mN(689,`bar`),lg(),mN(690,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),lg()()()(),Ml(691,`tr`,15)(692,`td`,16)(693,`div`,32)(694,`span`,33),mN(695,` (p-series-hover)`),ql(696,`br`),lg()()(),Ml(697,`td`,19)(698,`code`,34),mN(699,`EventEmitter`),lg()(),Ml(700,`td`,22),mN(701,`-`),lg(),Ml(702,`td`,23)(703,`em`)(704,`strong`),mN(705,`(opcional)`),lg()(),Ml(706,`p`),mN(707,`Evento executado quando o usuário passar o `),Ml(708,`em`),mN(709,`mouse`),lg(),mN(710,` sobre um elemento do gráfico.`),lg(),Ml(711,`p`),mN(712,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),lg(),Ml(713,`ul`)(714,`li`)(715,`em`),mN(716,`donut`),lg(),mN(717,` e `),Ml(718,`em`),mN(719,`pie`),lg(),mN(720,`: um objeto contendo a categoria e valor da série.`),lg(),Ml(721,`li`)(722,`em`),mN(723,`radar`),lg(),mN(724,`: um objeto contendo o nome da série e os valores.`),lg(),Ml(725,`li`)(726,`em`),mN(727,`area`),lg(),mN(728,`, `),Ml(729,`em`),mN(730,`line`),lg(),mN(731,`, `),Ml(732,`em`),mN(733,`column`),lg(),mN(734,` e `),Ml(735,`em`),mN(736,`bar`),lg(),mN(737,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),lg()()()(),Ml(738,`tr`,15)(739,`td`,16)(740,`div`,17)(741,`span`,18),mN(742,` p-title`),ql(743,`br`),lg()()(),Ml(744,`td`,19)(745,`code`,35),mN(746,`string`),lg()(),Ml(747,`td`,22),mN(748,`-`),lg(),Ml(749,`td`,23)(750,`em`)(751,`strong`),mN(752,`(opcional)`),lg()(),Ml(753,`p`),mN(754,`Define o título do gráfico.`),lg()()(),Ml(755,`tr`,15)(756,`td`,16)(757,`div`,17)(758,`span`,18),mN(759,` p-type`),ql(760,`br`),lg()()(),Ml(761,`td`,19)(762,`code`,36),mN(763,`PoChartType`),lg()(),Ml(764,`td`,22),mN(765,`-`),lg(),Ml(766,`td`,23)(767,`em`)(768,`strong`),mN(769,`(opcional)`),lg()(),Ml(770,`p`),mN(771,`Define o tipo de gráfico.`),lg(),Ml(772,`p`),mN(773,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),Ml(774,`code`),mN(775,`type`),lg(),mN(776,` conforme a interface `),Ml(777,`code`),mN(778,`PoChartSerie`),lg(),mN(779,`.`),lg(),Ml(780,`blockquote`)(781,`p`),mN(782,`Note que, se houver declaração de tipo de gráfico tanto em `),Ml(783,`code`),mN(784,`p-type`),lg(),mN(785,` quanto em `),Ml(786,`code`),mN(787,`PochartSerie.type`),lg(),mN(788,`, o valor `),Ml(789,`code`),mN(790,`{ type }`),lg(),mN(791,` da primeira série anulará o valor definido em `),Ml(792,`code`),mN(793,`p-type`),lg(),mN(794,`.`),lg()(),Ml(795,`p`),mN(796,`Se não passado valor, o padrão será relativo à primeira série passada em `),Ml(797,`code`),mN(798,`p-series`),lg(),mN(799,`:`),lg(),Ml(800,`ul`)(801,`li`),mN(802,`Se `),Ml(803,`code`),mN(804,`p-series = [{ data: [1,2,3] }]`),lg(),mN(805,`: será `),Ml(806,`code`),mN(807,`PoChartType.Column`),lg(),mN(808,`.`),lg(),Ml(809,`li`),mN(810,`Se `),Ml(811,`code`),mN(812,`p-series = [{ data: 1 }]`),lg(),mN(813,`: será `),Ml(814,`code`),mN(815,`PoChartType.Pie`),lg(),mN(816,`.`),lg()(),Ml(817,`blockquote`)(818,`p`),mN(819,`Veja os valores válidos no `),Ml(820,`em`),mN(821,`enum`),lg(),Ml(822,`code`),mN(823,`PoChartType`),lg(),mN(824,`.`),lg()()()(),Ml(825,`tr`,15)(826,`td`,16)(827,`div`,17)(828,`span`,18),mN(829,` p-value-gauge-multiple`),ql(830,`br`),lg()()(),Ml(831,`td`,19)(832,`code`,27),mN(833,`number`),lg()(),Ml(834,`td`,22),mN(835,`-`),lg(),Ml(836,`td`,23)(837,`em`)(838,`strong`),mN(839,`(opcional)`),lg()(),Ml(840,`p`),mN(841,`Define o valor do gráfico do tipo `),Ml(842,`code`),mN(843,`Gauge`),lg(),mN(844,` quando utliza as propriedades `),Ml(845,`code`),mN(846,`From`),lg(),Ml(847,`code`),mN(848,`To`),lg(),mN(849,`.`),lg()()()(),Ml(850,`h3`),mN(851,`Interfaces`),lg(),Ml(852,`h4`,37)(853,`code`,5),mN(854,`PoChartAxisOptions`),lg()(),Ml(855,`div`,2)(856,`p`)(857,`em`),mN(858,`Interface`),lg(),mN(859,` que define os eixos do grid.`),lg()(),Ml(860,`h4`,11),mN(861,`Propriedades`),lg(),Ml(862,`table`,12)(863,`tr`,13)(864,`th`,14),mN(865,`Nome`),lg(),Ml(866,`th`,14),mN(867,`Tipo`),lg(),Ml(868,`th`,14),mN(869,`Descrição`),lg()(),Ml(870,`tr`,15)(871,`td`,16)(872,`div`,17)(873,`span`,18),mN(874,` gridLines`),ql(875,`br`),lg()()(),Ml(876,`td`,19)(877,`code`,27),mN(878,`number`),lg()(),Ml(879,`td`,23)(880,`em`)(881,`strong`),mN(882,`(opcional)`),lg()(),Ml(883,`p`),mN(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Ml(885,`code`),mN(886,`Area`),lg(),mN(887,`, `),Ml(888,`code`),mN(889,`Line`),lg(),mN(890,` e `),Ml(891,`code`),mN(892,`Column`),lg(),mN(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Ml(894,`code`),mN(895,`Bar`),lg(),mN(896,`, tratará as linhas verticais (eixo Y).`),lg(),Ml(897,`p`),mN(898,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),lg(),Ml(899,`ul`)(900,`li`),mN(901,`Quantidade padrão de linhas: '5';`),lg(),Ml(902,`li`),mN(903,`Quantidade mínima permitida: '2';`),lg()()()(),Ml(904,`tr`,15)(905,`td`,16)(906,`div`,17)(907,`span`,18),mN(908,` labelType`),ql(909,`br`),lg()()(),Ml(910,`td`,19)(911,`code`,38),mN(912,`PoChartLabelFormat`),lg()(),Ml(913,`td`,23)(914,`em`)(915,`strong`),mN(916,`(opcional)`),lg()(),Ml(917,`p`),mN(918,`Define o tipo do label e a formatação exibida no eixo de valor.`),lg()()(),Ml(919,`tr`,15)(920,`td`,16)(921,`div`,17)(922,`span`,18),mN(923,` maxRange`),ql(924,`br`),lg()()(),Ml(925,`td`,19)(926,`code`,27),mN(927,`number`),lg()(),Ml(928,`td`,23)(929,`em`)(930,`strong`),mN(931,`(opcional)`),lg()(),Ml(932,`p`),mN(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),lg(),Ml(934,`blockquote`)(935,`p`),mN(936,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),lg()()()(),Ml(937,`tr`,15)(938,`td`,16)(939,`div`,17)(940,`span`,18),mN(941,` minRange`),ql(942,`br`),lg()()(),Ml(943,`td`,19)(944,`code`,27),mN(945,`number`),lg()(),Ml(946,`td`,23)(947,`em`)(948,`strong`),mN(949,`(opcional)`),lg()(),Ml(950,`p`),mN(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),lg(),Ml(952,`blockquote`)(953,`p`),mN(954,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),lg()()()(),Ml(955,`tr`,15)(956,`td`,16)(957,`div`,17)(958,`span`,18),mN(959,` paddingBottom`),ql(960,`br`),lg()()(),Ml(961,`td`,19)(962,`code`,27),mN(963,`number`),lg()(),Ml(964,`td`,23)(965,`em`)(966,`strong`),mN(967,`(opcional)`),lg()(),Ml(968,`p`),mN(969,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),lg()()(),Ml(970,`tr`,15)(971,`td`,16)(972,`div`,17)(973,`span`,18),mN(974,` paddingLeft`),ql(975,`br`),lg()()(),Ml(976,`td`,19)(977,`code`,27),mN(978,`number`),lg()(),Ml(979,`td`,23)(980,`em`)(981,`strong`),mN(982,`(opcional)`),lg()(),Ml(983,`p`),mN(984,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),lg()()(),Ml(985,`tr`,15)(986,`td`,16)(987,`div`,17)(988,`span`,18),mN(989,` paddingRight`),ql(990,`br`),lg()()(),Ml(991,`td`,19)(992,`code`,27),mN(993,`number`),lg()(),Ml(994,`td`,23)(995,`em`)(996,`strong`),mN(997,`(opcional)`),lg()(),Ml(998,`p`),mN(999,`Permite aumentar ou diminuir o espaço direito do gráfico.`),lg()()(),Ml(1e3,`tr`,15)(1001,`td`,16)(1002,`div`,17)(1003,`span`,18),mN(1004,` rotateLegend`),ql(1005,`br`),lg()()(),Ml(1006,`td`,19)(1007,`code`,27),mN(1008,`number`),lg()(),Ml(1009,`td`,23)(1010,`em`)(1011,`strong`),mN(1012,`(opcional)`),lg()(),Ml(1013,`p`),mN(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),lg(),Ml(1015,`ul`)(1016,`li`),mN(1017,`Valores negativos giram a legenda para a esquerda.`),lg(),Ml(1018,`li`),mN(1019,`Valores positivos giram a legenda para a direita.`),lg()(),Ml(1020,`p`),mN(1021,`Se não for definido, a legenda será exibida sem rotação.`),lg()()(),Ml(1022,`tr`,15)(1023,`td`,16)(1024,`div`,17)(1025,`span`,18),mN(1026,` showAxisDetails`),ql(1027,`br`),lg()()(),Ml(1028,`td`,19)(1029,`code`,39),mN(1030,`boolean`),lg()(),Ml(1031,`td`,23)(1032,`em`)(1033,`strong`),mN(1034,`(opcional)`),lg()(),Ml(1035,`p`),mN(1036,`Exibe a linha de detalhes que acompanha o mouse`),lg()()(),Ml(1037,`tr`,15)(1038,`td`,16)(1039,`div`,17)(1040,`span`,18),mN(1041,` showXAxis`),ql(1042,`br`),lg()()(),Ml(1043,`td`,19)(1044,`code`,39),mN(1045,`boolean`),lg()(),Ml(1046,`td`,23)(1047,`em`)(1048,`strong`),mN(1049,`(opcional)`),lg()(),Ml(1050,`p`),mN(1051,`Exibe a linha do eixo X`),lg()()(),Ml(1052,`tr`,15)(1053,`td`,16)(1054,`div`,17)(1055,`span`,18),mN(1056,` showYAxis`),ql(1057,`br`),lg()()(),Ml(1058,`td`,19)(1059,`code`,39),mN(1060,`boolean`),lg()(),Ml(1061,`td`,23)(1062,`em`)(1063,`strong`),mN(1064,`(opcional)`),lg()(),Ml(1065,`p`),mN(1066,`Exibe a linha do eixo Y`),lg()()()(),Ml(1067,`h4`,37)(1068,`code`,5),mN(1069,`PoChartHeaderOptions`),lg()(),Ml(1070,`div`,2)(1071,`p`)(1072,`em`),mN(1073,`Interface`),lg(),mN(1074,` para configuração das ações disponíveis no cabeçalho.`),lg()(),Ml(1075,`h4`,11),mN(1076,`Propriedades`),lg(),Ml(1077,`table`,12)(1078,`tr`,13)(1079,`th`,14),mN(1080,`Nome`),lg(),Ml(1081,`th`,14),mN(1082,`Tipo`),lg(),Ml(1083,`th`,14),mN(1084,`Descrição`),lg()(),Ml(1085,`tr`,15)(1086,`td`,16)(1087,`div`,17)(1088,`span`,18),mN(1089,` hideExpand`),ql(1090,`br`),lg()()(),Ml(1091,`td`,19)(1092,`code`,39),mN(1093,`boolean`),lg()(),Ml(1094,`td`,23)(1095,`em`)(1096,`strong`),mN(1097,`(opcional)`),lg()(),Ml(1098,`p`),mN(1099,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),lg()()(),Ml(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),mN(1104,` hideExportCsv`),ql(1105,`br`),lg()()(),Ml(1106,`td`,19)(1107,`code`,39),mN(1108,`boolean`),lg()(),Ml(1109,`td`,23)(1110,`em`)(1111,`strong`),mN(1112,`(opcional)`),lg()(),Ml(1113,`p`),mN(1114,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),lg()()(),Ml(1115,`tr`,15)(1116,`td`,16)(1117,`div`,17)(1118,`span`,18),mN(1119,` hideExportImage`),ql(1120,`br`),lg()()(),Ml(1121,`td`,19)(1122,`code`,39),mN(1123,`boolean`),lg()(),Ml(1124,`td`,23)(1125,`em`)(1126,`strong`),mN(1127,`(opcional)`),lg()(),Ml(1128,`p`),mN(1129,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),lg()()(),Ml(1130,`tr`,15)(1131,`td`,16)(1132,`div`,17)(1133,`span`,18),mN(1134,` hideTableDetails`),ql(1135,`br`),lg()()(),Ml(1136,`td`,19)(1137,`code`,39),mN(1138,`boolean`),lg()(),Ml(1139,`td`,23)(1140,`em`)(1141,`strong`),mN(1142,`(opcional)`),lg()(),Ml(1143,`p`),mN(1144,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),lg()()()(),Ml(1145,`h4`,37)(1146,`code`,5),mN(1147,`PoChartIndicatorOptions`),lg()(),Ml(1148,`div`,2)(1149,`p`),mN(1150,`Interface para configurações dos indicadores do gráfico `),Ml(1151,`code`),mN(1152,`radar`),lg(),mN(1153,`.`),lg()(),Ml(1154,`h4`,11),mN(1155,`Propriedades`),lg(),Ml(1156,`table`,12)(1157,`tr`,13)(1158,`th`,14),mN(1159,`Nome`),lg(),Ml(1160,`th`,14),mN(1161,`Tipo`),lg(),Ml(1162,`th`,14),mN(1163,`Descrição`),lg()(),Ml(1164,`tr`,15)(1165,`td`,16)(1166,`div`,17)(1167,`span`,18),mN(1168,` color`),ql(1169,`br`),lg()()(),Ml(1170,`td`,19)(1171,`code`,35),mN(1172,`string`),lg()(),Ml(1173,`td`,23)(1174,`em`)(1175,`strong`),mN(1176,`(opcional)`),lg()(),Ml(1177,`p`),mN(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),lg(),Ml(1179,`blockquote`)(1180,`p`),mN(1181,`Nome da cor, hexadecimal ou RGB.`),lg()()()(),Ml(1182,`tr`,15)(1183,`td`,16)(1184,`div`,17)(1185,`span`,18),mN(1186,` max`),ql(1187,`br`),lg()()(),Ml(1188,`td`,19)(1189,`code`,27),mN(1190,`number`),lg()(),Ml(1191,`td`,23)(1192,`em`)(1193,`strong`),mN(1194,`(opcional)`),lg()(),Ml(1195,`p`),mN(1196,`Valor máximo do indicator.`),lg(),Ml(1197,`p`),mN(1198,`A propriedade `),Ml(1199,`code`),mN(1200,`max`),lg(),mN(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),lg()()(),Ml(1202,`tr`,15)(1203,`td`,16)(1204,`div`,17)(1205,`span`,18),mN(1206,` min`),ql(1207,`br`),lg()()(),Ml(1208,`td`,19)(1209,`code`,27),mN(1210,`number`),lg()(),Ml(1211,`td`,23)(1212,`em`)(1213,`strong`),mN(1214,`(opcional)`),lg()(),Ml(1215,`p`),mN(1216,`Valor mínimo do indicator, com valor padrão de 0.`),lg(),Ml(1217,`p`),mN(1218,`A propriedade `),Ml(1219,`code`),mN(1220,`min`),lg(),mN(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),lg()()(),Ml(1222,`tr`,15)(1223,`td`,16)(1224,`div`,17)(1225,`span`,18),mN(1226,` name`),ql(1227,`br`),lg()()(),Ml(1228,`td`,19)(1229,`code`,35),mN(1230,`string`),lg()(),Ml(1231,`td`,23)(1232,`em`)(1233,`strong`),mN(1234,`(opcional)`),lg()(),Ml(1235,`p`),mN(1236,`Nome do indicator.`),lg()()()(),Ml(1237,`h4`,37)(1238,`code`,5),mN(1239,`PoChartLiterals`),lg()(),Ml(1240,`div`,2)(1241,`p`),mN(1242,`Interface para definição dos literais usadas no `),Ml(1243,`code`),mN(1244,`po-chart`),lg(),mN(1245,`.`),lg()(),Ml(1246,`h4`,11),mN(1247,`Propriedades`),lg(),Ml(1248,`table`,12)(1249,`tr`,13)(1250,`th`,14),mN(1251,`Nome`),lg(),Ml(1252,`th`,14),mN(1253,`Tipo`),lg(),Ml(1254,`th`,14),mN(1255,`Descrição`),lg()(),Ml(1256,`tr`,15)(1257,`td`,16)(1258,`div`,17)(1259,`span`,18),mN(1260,` category`),ql(1261,`br`),lg()()(),Ml(1262,`td`,19)(1263,`code`,35),mN(1264,`string`),lg()(),Ml(1265,`td`,23)(1266,`em`)(1267,`strong`),mN(1268,`(opcional)`),lg()(),Ml(1269,`p`),mN(1270,`Texto da primeira coluna da tabela no gráfico do tipo `),Ml(1271,`code`),mN(1272,`Bar`),lg(),mN(1273,`.`),lg()()(),Ml(1274,`tr`,15)(1275,`td`,16)(1276,`div`,17)(1277,`span`,18),mN(1278,` downloadCSV`),ql(1279,`br`),lg()()(),Ml(1280,`td`,19)(1281,`code`,35),mN(1282,`string`),lg()(),Ml(1283,`td`,23)(1284,`em`)(1285,`strong`),mN(1286,`(opcional)`),lg()(),Ml(1287,`p`),mN(1288,`Texto exibido para a ação de download de dados em formato CSV.`),lg()()(),Ml(1289,`tr`,15)(1290,`td`,16)(1291,`div`,17)(1292,`span`,18),mN(1293,` exportCSV`),ql(1294,`br`),lg()()(),Ml(1295,`td`,19)(1296,`code`,35),mN(1297,`string`),lg()(),Ml(1298,`td`,23)(1299,`em`)(1300,`strong`),mN(1301,`(opcional)`),lg()(),Ml(1302,`p`),mN(1303,`Texto do botão para exportar o gráfico em CSV.`),lg()()(),Ml(1304,`tr`,15)(1305,`td`,16)(1306,`div`,17)(1307,`span`,18),mN(1308,` exportJPG`),ql(1309,`br`),lg()()(),Ml(1310,`td`,19)(1311,`code`,35),mN(1312,`string`),lg()(),Ml(1313,`td`,23)(1314,`em`)(1315,`strong`),mN(1316,`(opcional)`),lg()(),Ml(1317,`p`),mN(1318,`Texto do botão para exportar o gráfico como imagem JPG.`),lg()()(),Ml(1319,`tr`,15)(1320,`td`,16)(1321,`div`,17)(1322,`span`,18),mN(1323,` exportPNG`),ql(1324,`br`),lg()()(),Ml(1325,`td`,19)(1326,`code`,35),mN(1327,`string`),lg()(),Ml(1328,`td`,23)(1329,`em`)(1330,`strong`),mN(1331,`(opcional)`),lg()(),Ml(1332,`p`),mN(1333,`Texto do botão para exportar o gráfico como imagem PNG.`),lg()()(),Ml(1334,`tr`,15)(1335,`td`,16)(1336,`div`,17)(1337,`span`,18),mN(1338,` item`),ql(1339,`br`),lg()()(),Ml(1340,`td`,19)(1341,`code`,35),mN(1342,`string`),lg()(),Ml(1343,`td`,23)(1344,`em`)(1345,`strong`),mN(1346,`(opcional)`),lg()(),Ml(1347,`p`),mN(1348,`Texto dos títulos das colunas `),Ml(1349,`code`),mN(1350,`Gauge`),lg(),mN(1351,` e não possui label.`),lg()()(),Ml(1352,`tr`,15)(1353,`td`,16)(1354,`div`,17)(1355,`span`,18),mN(1356,` serie`),ql(1357,`br`),lg()()(),Ml(1358,`td`,19)(1359,`code`,35),mN(1360,`string`),lg()(),Ml(1361,`td`,23)(1362,`em`)(1363,`strong`),mN(1364,`(opcional)`),lg()(),Ml(1365,`p`),mN(1366,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),Ml(1367,`code`),mN(1368,`Bar`),lg(),mN(1369,` e `),Ml(1370,`code`),mN(1371,`Gauge`),lg(),mN(1372,`.`),lg()()(),Ml(1373,`tr`,15)(1374,`td`,16)(1375,`div`,17)(1376,`span`,18),mN(1377,` value`),ql(1378,`br`),lg()()(),Ml(1379,`td`,19)(1380,`code`,35),mN(1381,`string`),lg()(),Ml(1382,`td`,23)(1383,`em`)(1384,`strong`),mN(1385,`(opcional)`),lg()(),Ml(1386,`p`),mN(1387,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),Ml(1388,`code`),mN(1389,`Gauge`),lg(),mN(1390,`.`),lg()()()(),Ml(1391,`h4`,37)(1392,`code`,5),mN(1393,`PoChartOptions`),lg()(),Ml(1394,`div`,2)(1395,`p`)(1396,`em`),mN(1397,`Interface`),lg(),mN(1398,` para configurações dos elementos do gráfico.`),lg()(),Ml(1399,`h4`,11),mN(1400,`Propriedades`),lg(),Ml(1401,`table`,12)(1402,`tr`,13)(1403,`th`,14),mN(1404,`Nome`),lg(),Ml(1405,`th`,14),mN(1406,`Tipo`),lg(),Ml(1407,`th`,14),mN(1408,`Descrição`),lg()(),Ml(1409,`tr`,15)(1410,`td`,16)(1411,`div`,17)(1412,`span`,18),mN(1413,` areaStyle`),ql(1414,`br`),lg()()(),Ml(1415,`td`,19)(1416,`code`,39),mN(1417,`boolean`),lg()(),Ml(1418,`td`,23)(1419,`em`)(1420,`strong`),mN(1421,`(opcional)`),lg()(),Ml(1422,`p`),mN(1423,`Define se as séries terão sua área preenchida.`),lg(),Ml(1424,`blockquote`)(1425,`p`),mN(1426,`Esta propriedade tem precedência sobre a definição de `),Ml(1427,`code`),mN(1428,`areaStyle`),lg(),mN(1429,` em cada série, `),Ml(1430,`code`),mN(1431,`fillpoints`),lg(),mN(1432,` não funciona quando `),Ml(1433,`code`),mN(1434,`areaStyle`),lg(),mN(1435,` está definido como `),Ml(1436,`code`),mN(1437,`true`),lg(),mN(1438,`.`),lg()()()(),Ml(1439,`tr`,15)(1440,`td`,16)(1441,`div`,17)(1442,`span`,18),mN(1443,` axis`),ql(1444,`br`),lg()()(),Ml(1445,`td`,19)(1446,`code`,40),mN(1447,`PoChartAxisOptions`),lg()(),Ml(1448,`td`,23)(1449,`em`)(1450,`strong`),mN(1451,`(opcional)`),lg()(),Ml(1452,`p`),mN(1453,`Define um objeto do tipo `),Ml(1454,`code`),mN(1455,`PoChartAxisOptions`),lg(),mN(1456,` para configuração dos eixos.`),lg()()(),Ml(1457,`tr`,15)(1458,`td`,16)(1459,`div`,17)(1460,`span`,18),mN(1461,` borderRadius`),ql(1462,`br`),lg()()(),Ml(1463,`td`,19)(1464,`code`,27),mN(1465,`number`),lg()(),Ml(1466,`td`,23)(1467,`em`)(1468,`strong`),mN(1469,`(opcional)`),lg()(),Ml(1470,`p`),mN(1471,`Define borda entre os itens do gráfico. Válido para os gráficos `),Ml(1472,`code`),mN(1473,`Donut`),lg(),mN(1474,`, `),Ml(1475,`code`),mN(1476,`Pie`),lg(),mN(1477,`.`),lg(),Ml(1478,`blockquote`)(1479,`p`),mN(1480,`Valores válidos entre 0 e 100,`),lg()()()(),Ml(1481,`tr`,15)(1482,`td`,16)(1483,`div`,17)(1484,`span`,18),mN(1485,` bottomDataZoom`),ql(1486,`br`),lg()()(),Ml(1487,`td`,19)(1488,`code`,39),mN(1489,`boolean `),lg(),Ml(1490,`code`,27),mN(1491,` number`),lg()(),Ml(1492,`td`,23)(1493,`em`)(1494,`strong`),mN(1495,`(opcional)`),lg()(),Ml(1496,`p`),mN(1497,`Define a distância inferior do componente DataZoom.`),lg(),Ml(1498,`p`),mN(1499,`Esta propriedade aceita os seguintes valores:`),lg(),Ml(1500,`ul`)(1501,`li`)(1502,`p`)(1503,`code`),mN(1504,`false`),lg(),mN(1505,` (padrão): não aplica ajustes.`),lg()(),Ml(1506,`li`)(1507,`p`)(1508,`code`),mN(1509,`true`),lg(),mN(1510,`: aplica um valor automático com base no posicionamento da legenda:`),lg(),Ml(1511,`ul`)(1512,`li`)(1513,`code`),mN(1514,`8`),lg(),mN(1515,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),lg(),Ml(1516,`li`)(1517,`code`),mN(1518,`32`),lg(),mN(1519,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),lg()()(),Ml(1520,`li`)(1521,`p`)(1522,`code`),mN(1523,`number`),lg(),mN(1524,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),lg()()(),Ml(1525,`blockquote`)(1526,`p`),mN(1527,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),Ml(1528,`code`),mN(1529,`dataZoom: true`),lg(),mN(1530,`).`),lg()()()(),Ml(1531,`tr`,15)(1532,`td`,16)(1533,`div`,17)(1534,`span`,18),mN(1535,` dataZoom`),ql(1536,`br`),lg()()(),Ml(1537,`td`,19)(1538,`code`,39),mN(1539,`boolean`),lg()(),Ml(1540,`td`,23)(1541,`em`)(1542,`strong`),mN(1543,`(opcional)`),lg()(),Ml(1544,`p`),mN(1545,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),lg()()(),Ml(1546,`tr`,15)(1547,`td`,16)(1548,`div`,17)(1549,`span`,18),mN(1550,` descriptionChart`),ql(1551,`br`),lg()()(),Ml(1552,`td`,19)(1553,`code`,35),mN(1554,`string`),lg()(),Ml(1555,`td`,23)(1556,`em`)(1557,`strong`),mN(1558,`(opcional)`),lg()(),Ml(1559,`p`),mN(1560,`Define a descrição do gráfico exibido acima do gráfico.`),lg()()(),Ml(1561,`tr`,15)(1562,`td`,16)(1563,`div`,17)(1564,`span`,18),mN(1565,` fillPoints`),ql(1566,`br`),lg()()(),Ml(1567,`td`,19)(1568,`code`,39),mN(1569,`boolean`),lg()(),Ml(1570,`td`,23)(1571,`em`)(1572,`strong`),mN(1573,`(opcional)`),lg()(),Ml(1574,`p`),mN(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),lg(),Ml(1576,`blockquote`)(1577,`p`),mN(1578,`Esta propriedade é utilizável para os gráficos dos tipos `),Ml(1579,`code`),mN(1580,`Area`),lg(),mN(1581,`, `),Ml(1582,`code`),mN(1583,`Line`),lg(),mN(1584,` e `),Ml(1585,`code`),mN(1586,`Radar`),lg(),mN(1587,`.
Para o tipo `),Ml(1588,`code`),mN(1589,`Radar`),lg(),mN(1590,`, o valor padrão é `),Ml(1591,`code`),mN(1592,`true`),lg(),mN(1593,`.`),lg()()()(),Ml(1594,`tr`,15)(1595,`td`,16)(1596,`div`,17)(1597,`span`,18),mN(1598,` firstColumnName`),ql(1599,`br`),lg()()(),Ml(1600,`td`,19)(1601,`code`,35),mN(1602,`string`),lg()(),Ml(1603,`td`,23)(1604,`em`)(1605,`strong`),mN(1606,`(opcional)`),lg()(),Ml(1607,`p`),mN(1608,`Valor que permite customizar o nome da `),Ml(1609,`code`),mN(1610,`TH`),lg(),mN(1611,` da primeira coluna da tabela descritiva.`),lg()()(),Ml(1612,`tr`,15)(1613,`td`,16)(1614,`div`,17)(1615,`span`,18),mN(1616,` header`),ql(1617,`br`),lg()()(),Ml(1618,`td`,19)(1619,`code`,41),mN(1620,`PoChartHeaderOptions`),lg()(),Ml(1621,`td`,23)(1622,`em`)(1623,`strong`),mN(1624,`(opcional)`),lg()(),Ml(1625,`p`),mN(1626,`Define um objeto do tipo `),Ml(1627,`code`),mN(1628,`PoChartHeaderOptions`),lg(),mN(1629,` para configurar a exibição de botões no cabeçalho do gráfico.`),lg()()(),Ml(1630,`tr`,15)(1631,`td`,16)(1632,`div`,17)(1633,`span`,18),mN(1634,` innerRadius`),ql(1635,`br`),lg()()(),Ml(1636,`td`,19)(1637,`code`,27),mN(1638,`number`),lg()(),Ml(1639,`td`,23)(1640,`em`)(1641,`strong`),mN(1642,`(opcional)`),lg()(),Ml(1643,`p`),mN(1644,`Define o diâmetro, em valor percentual entre `),Ml(1645,`code`),mN(1646,`0`),lg(),mN(1647,` e `),Ml(1648,`code`),mN(1649,`100`),lg(),mN(1650,`, da área central para gráficos do tipo `),Ml(1651,`code`),mN(1652,`donut`),lg(),mN(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Ml(1654,`code`),mN(1655,`40px`),lg(),mN(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),lg()()(),Ml(1657,`tr`,15)(1658,`td`,16)(1659,`div`,17)(1660,`span`,18),mN(1661,` legend`),ql(1662,`br`),lg()()(),Ml(1663,`td`,19)(1664,`code`,39),mN(1665,`boolean`),lg()(),Ml(1666,`td`,23)(1667,`em`)(1668,`strong`),mN(1669,`(opcional)`),lg()(),Ml(1670,`p`),mN(1671,`Define a exibição da legenda do gráfico. Valor padrão é `),Ml(1672,`code`),mN(1673,`true`),lg()()()(),Ml(1674,`tr`,15)(1675,`td`,16)(1676,`div`,17)(1677,`span`,18),mN(1678,` legendPosition`),ql(1679,`br`),lg()()(),Ml(1680,`td`,19)(1681,`code`,42),mN(1682,`'left' `),lg(),Ml(1683,`code`,43),mN(1684,` 'center' `),lg(),Ml(1685,`code`,44),mN(1686,` 'right'`),lg()(),Ml(1687,`td`,23)(1688,`em`)(1689,`strong`),mN(1690,`(opcional)`),lg()(),Ml(1691,`p`),mN(1692,`Define o alinhamento horizontal da legenda.`),lg(),Ml(1693,`blockquote`)(1694,`p`),mN(1695,`Propriedade inválida para o gráfico do tipo `),Ml(1696,`code`),mN(1697,`Gauge`),lg(),mN(1698,`.`),lg()()()(),Ml(1699,`tr`,15)(1700,`td`,16)(1701,`div`,17)(1702,`span`,18),mN(1703,` legendType`),ql(1704,`br`),lg()()(),Ml(1705,`td`,19)(1706,`code`,45),mN(1707,`'plain' `),lg(),Ml(1708,`code`,46),mN(1709,` 'scroll'`),lg()(),Ml(1710,`td`,23)(1711,`em`)(1712,`strong`),mN(1713,`(opcional)`),lg()(),Ml(1714,`p`),mN(1715,`Define o tipo da legenda.`),lg(),Ml(1716,`ul`)(1717,`li`)(1718,`code`),mN(1719,`plain`),lg(),mN(1720,`: exibe todas as legendas de forma estática.`),lg(),Ml(1721,`li`)(1722,`code`),mN(1723,`scroll`),lg(),mN(1724,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),lg()(),Ml(1725,`blockquote`)(1726,`p`),mN(1727,`Propriedade inválida para o gráfico do tipo `),Ml(1728,`code`),mN(1729,`Gauge`),lg(),mN(1730,`.`),lg()()()(),Ml(1731,`tr`,15)(1732,`td`,16)(1733,`div`,17)(1734,`span`,18),mN(1735,` legendVerticalPosition`),ql(1736,`br`),lg()()(),Ml(1737,`td`,19)(1738,`code`,47),mN(1739,`'top' `),lg(),Ml(1740,`code`,48),mN(1741,` 'bottom'`),lg()(),Ml(1742,`td`,23)(1743,`em`)(1744,`strong`),mN(1745,`(opcional)`),lg()(),Ml(1746,`p`),mN(1747,`Define a posição vertical da legenda no gráfico.`),lg(),Ml(1748,`blockquote`)(1749,`p`),mN(1750,`Quando utilizada com o valor `),Ml(1751,`code`),mN(1752,`top`),lg(),mN(1753,`, recomenda-se configurar também a propriedade `),Ml(1754,`code`),mN(1755,`bottomDataZoom`),lg(),mN(1756,` caso o `),Ml(1757,`code`),mN(1758,`dataZoom`),lg(),mN(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Ml(1760,`code`),mN(1761,`Gauge`),lg(),mN(1762,`.`),lg()()()(),Ml(1763,`tr`,15)(1764,`td`,16)(1765,`div`,17)(1766,`span`,18),mN(1767,` pointer`),ql(1768,`br`),lg()()(),Ml(1769,`td`,19)(1770,`code`,39),mN(1771,`boolean`),lg()(),Ml(1772,`td`,23)(1773,`em`)(1774,`strong`),mN(1775,`(opcional)`),lg()(),Ml(1776,`p`),mN(1777,`Define a exibição do ponteiro.`),lg(),Ml(1778,`blockquote`)(1779,`p`),mN(1780,`Válido para gráfico do tipo `),Ml(1781,`code`),mN(1782,`Gauge`),lg(),mN(1783,`.`),lg()()()(),Ml(1784,`tr`,15)(1785,`td`,16)(1786,`div`,17)(1787,`span`,18),mN(1788,` rendererOption`),ql(1789,`br`),lg()()(),Ml(1790,`td`,19)(1791,`code`,49),mN(1792,`'canvas' `),lg(),Ml(1793,`code`,50),mN(1794,` 'svg'`),lg()(),Ml(1795,`td`,23)(1796,`em`)(1797,`strong`),mN(1798,`(opcional)`),lg()(),Ml(1799,`p`),mN(1800,`Define como o gráfico será renderizado.`),lg(),Ml(1801,`blockquote`)(1802,`p`),mN(1803,`Recomenda-se não modificar o valor da propriedade `),Ml(1804,`code`),mN(1805,`rendererOption`),lg(),mN(1806,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),lg()()()(),Ml(1807,`tr`,15)(1808,`td`,16)(1809,`div`,17)(1810,`span`,18),mN(1811,` roseType`),ql(1812,`br`),lg()()(),Ml(1813,`td`,19)(1814,`code`,39),mN(1815,`boolean`),lg()(),Ml(1816,`td`,23)(1817,`em`)(1818,`strong`),mN(1819,`(opcional)`),lg()(),Ml(1820,`p`),mN(1821,`Transforma os gráficos do tipo `),Ml(1822,`code`),mN(1823,`Donut`),lg(),mN(1824,` ou `),Ml(1825,`code`),mN(1826,`Pie`),lg(),mN(1827,` num gráfico de área polar.`),lg(),Ml(1828,`blockquote`)(1829,`p`),mN(1830,`Válido para os gráficos `),Ml(1831,`code`),mN(1832,`Donut`),lg(),mN(1833,` e `),Ml(1834,`code`),mN(1835,`Pie`),lg(),mN(1836,`.`),lg()()()(),Ml(1837,`tr`,15)(1838,`td`,16)(1839,`div`,17)(1840,`span`,18),mN(1841,` showContainerGauge`),ql(1842,`br`),lg()()(),Ml(1843,`td`,19)(1844,`code`,39),mN(1845,`boolean`),lg()(),Ml(1846,`td`,23)(1847,`em`)(1848,`strong`),mN(1849,`(opcional)`),lg()(),Ml(1850,`p`),mN(1851,`Esconde a estilização do container em volta do gráfico.`),lg(),Ml(1852,`blockquote`)(1853,`p`),mN(1854,`Válido para gráfico do tipo `),Ml(1855,`code`),mN(1856,`Gauge`),lg(),mN(1857,`.`),lg()()()(),Ml(1858,`tr`,15)(1859,`td`,16)(1860,`div`,17)(1861,`span`,18),mN(1862,` showFromToLegend`),ql(1863,`br`),lg()()(),Ml(1864,`td`,19)(1865,`code`,39),mN(1866,`boolean`),lg()(),Ml(1867,`td`,23)(1868,`em`)(1869,`strong`),mN(1870,`(opcional)`),lg()(),Ml(1871,`p`),mN(1872,`Exibe os valores das propriedades `),Ml(1873,`code`),mN(1874,`from`),lg(),mN(1875,` e `),Ml(1876,`code`),mN(1877,`to`),lg(),mN(1878,` no gráfico do no texto da legenda entre parênteses.`),lg(),Ml(1879,`blockquote`)(1880,`p`),mN(1881,`Válido para gráfico do tipo `),Ml(1882,`code`),mN(1883,`Gauge`),lg(),mN(1884,`.`),lg()()()(),Ml(1885,`tr`,15)(1886,`td`,16)(1887,`div`,17)(1888,`span`,18),mN(1889,` stacked`),ql(1890,`br`),lg()()(),Ml(1891,`td`,19)(1892,`code`,39),mN(1893,`boolean`),lg()(),Ml(1894,`td`,23)(1895,`em`)(1896,`strong`),mN(1897,`(opcional)`),lg()(),Ml(1898,`p`),mN(1899,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),Ml(1900,`code`),mN(1901,`stackGroupName`),lg(),mN(1902,` da interface `),Ml(1903,`code`),mN(1904,`PoChartSerie`),lg()(),Ml(1905,`blockquote`)(1906,`p`),mN(1907,`Válido para gráfico do tipo `),Ml(1908,`code`),mN(1909,`Column`),lg(),mN(1910,` e `),Ml(1911,`code`),mN(1912,`Bar`),lg(),mN(1913,`.`),lg()(),Ml(1914,`blockquote`)(1915,`p`),mN(1916,`Essa propriedade habilita a propriedade `),Ml(1917,`code`),mN(1918,`p-data-label`),lg(),mN(1919,` por padrão, podendo ser desabilitada passando `),Ml(1920,`code`),mN(1921,`[p-data-label]={ fixed: false }`),lg(),mN(1922,`.`),lg()()()(),Ml(1923,`tr`,15)(1924,`td`,16)(1925,`div`,17)(1926,`span`,18),mN(1927,` subtitleGauge`),ql(1928,`br`),lg()()(),Ml(1929,`td`,19)(1930,`code`,35),mN(1931,`string`),lg()(),Ml(1932,`td`,23)(1933,`em`)(1934,`strong`),mN(1935,`(opcional)`),lg()(),Ml(1936,`p`),mN(1937,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),lg(),Ml(1938,`blockquote`)(1939,`p`),mN(1940,`Válido para gráfico do tipo `),Ml(1941,`code`),mN(1942,`Gauge`),lg(),mN(1943,`.`),lg()()()(),Ml(1944,`tr`,15)(1945,`td`,16)(1946,`div`,17)(1947,`span`,18),mN(1948,` textCenterGraph`),ql(1949,`br`),lg()()(),Ml(1950,`td`,19)(1951,`code`,35),mN(1952,`string`),lg()(),Ml(1953,`td`,23)(1954,`em`)(1955,`strong`),mN(1956,`(opcional)`),lg()(),Ml(1957,`p`),mN(1958,`Aplica texto centralizado customizado nos gráficos de `),Ml(1959,`code`),mN(1960,`Donut`),lg(),mN(1961,`.`),lg()()()(),Ml(1962,`h4`,37)(1963,`code`,5),mN(1964,`PoChartRadarOptions`),lg()(),Ml(1965,`div`,2)(1966,`p`)(1967,`em`),mN(1968,`Interface`),lg(),mN(1969,` para configurações do gráfico `),Ml(1970,`code`),mN(1971,`radar`),lg(),mN(1972,`.`),lg()(),Ml(1973,`h4`,11),mN(1974,`Propriedades`),lg(),Ml(1975,`table`,12)(1976,`tr`,13)(1977,`th`,14),mN(1978,`Nome`),lg(),Ml(1979,`th`,14),mN(1980,`Tipo`),lg(),Ml(1981,`th`,14),mN(1982,`Descrição`),lg()(),Ml(1983,`tr`,15)(1984,`td`,16)(1985,`div`,17)(1986,`span`,18),mN(1987,` indicator`),ql(1988,`br`),lg()()(),Ml(1989,`td`,19)(1990,`code`,51),mN(1991,`Array<PoChartIndicatorOptions>`),lg()(),Ml(1992,`td`,23)(1993,`em`)(1994,`strong`),mN(1995,`(opcional)`),lg()(),Ml(1996,`p`),mN(1997,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),lg()()(),Ml(1998,`tr`,15)(1999,`td`,16)(2e3,`div`,17)(2001,`span`,18),mN(2002,` shape`),ql(2003,`br`),lg()()(),Ml(2004,`td`,19)(2005,`code`,52),mN(2006,`'polygon' `),lg(),Ml(2007,`code`,53),mN(2008,` 'circle'`),lg()(),Ml(2009,`td`,23)(2010,`em`)(2011,`strong`),mN(2012,`(opcional)`),lg()(),Ml(2013,`p`),mN(2014,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),lg()()(),Ml(2015,`tr`,15)(2016,`td`,16)(2017,`div`,17)(2018,`span`,18),mN(2019,` splitArea`),ql(2020,`br`),lg()()(),Ml(2021,`td`,19)(2022,`code`,39),mN(2023,`boolean`),lg()(),Ml(2024,`td`,23)(2025,`em`)(2026,`strong`),mN(2027,`(opcional)`),lg()(),Ml(2028,`p`),mN(2029,`Define o efeito zebrado na grid.`),lg()()()(),Ml(2030,`h4`,37)(2031,`code`,5),mN(2032,`PoChartDataLabel`),lg()(),Ml(2033,`div`,2)(2034,`p`),mN(2035,`Interface que define as propriedades de exibição dos rótulos das séries no `),Ml(2036,`code`),mN(2037,`po-chart`),lg(),mN(2038,`.`),lg()(),Ml(2039,`h4`,11),mN(2040,`Propriedades`),lg(),Ml(2041,`table`,12)(2042,`tr`,13)(2043,`th`,14),mN(2044,`Nome`),lg(),Ml(2045,`th`,14),mN(2046,`Tipo`),lg(),Ml(2047,`th`,14),mN(2048,`Descrição`),lg()(),Ml(2049,`tr`,15)(2050,`td`,16)(2051,`div`,17)(2052,`span`,18),mN(2053,` fixed`),ql(2054,`br`),lg()()(),Ml(2055,`td`,19)(2056,`code`,39),mN(2057,`boolean`),lg()(),Ml(2058,`td`,23)(2059,`em`)(2060,`strong`),mN(2061,`(opcional)`),lg()(),Ml(2062,`p`),mN(2063,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),lg(),Ml(2064,`ul`)(2065,`li`),mN(2066,`Quando definido como `),Ml(2067,`code`),mN(2068,`true`),lg(),mN(2069,`:`),Ml(2070,`ul`)(2071,`li`),mN(2072,`O `),Ml(2073,`em`),mN(2074,`tooltip`),lg(),mN(2075,` não será exibido.`),lg(),Ml(2076,`li`),mN(2077,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),lg()()()(),Ml(2078,`blockquote`)(2079,`p`),mN(2080,`Disponível para os tipo de gráfico `),Ml(2081,`code`),mN(2082,`PoChartType.Line`),lg(),mN(2083,`, `),Ml(2084,`code`),mN(2085,`PoChartType.Area`),lg(),mN(2086,`, `),Ml(2087,`code`),mN(2088,`PoChartType.Column`),lg(),mN(2089,`, `),Ml(2090,`code`),mN(2091,`PoChartType.Bar e PoChartType.Radar`),lg(),mN(2092,`.`),lg()()()()(),Ml(2093,`h4`,37)(2094,`code`,5),mN(2095,`PoChartSerie`),lg()(),Ml(2096,`div`,2)(2097,`p`),mN(2098,`Interface das series dinâmicas do `),Ml(2099,`code`),mN(2100,`po-chart`),lg(),mN(2101,` que possibilita desenhar gráficos dos tipos `),Ml(2102,`code`),mN(2103,`area`),lg(),mN(2104,`, `),Ml(2105,`code`),mN(2106,`bar`),lg(),mN(2107,`, `),Ml(2108,`code`),mN(2109,`column`),lg(),mN(2110,`, `),Ml(2111,`code`),mN(2112,`line`),lg(),mN(2113,`, `),Ml(2114,`code`),mN(2115,`donut`),lg(),mN(2116,`, `),Ml(2117,`code`),mN(2118,`pie`),lg(),mN(2119,` e `),Ml(2120,`code`),mN(2121,`radar`),lg()()(),Ml(2122,`h4`,11),mN(2123,`Propriedades`),lg(),Ml(2124,`table`,12)(2125,`tr`,13)(2126,`th`,14),mN(2127,`Nome`),lg(),Ml(2128,`th`,14),mN(2129,`Tipo`),lg(),Ml(2130,`th`,14),mN(2131,`Descrição`),lg()(),Ml(2132,`tr`,15)(2133,`td`,16)(2134,`div`,17)(2135,`span`,18),mN(2136,` areaStyle`),ql(2137,`br`),lg()()(),Ml(2138,`td`,19)(2139,`code`,39),mN(2140,`boolean`),lg()(),Ml(2141,`td`,23)(2142,`em`)(2143,`strong`),mN(2144,`(opcional)`),lg()(),Ml(2145,`p`),mN(2146,`Define se a série terá sua área preenchida.`),lg(),Ml(2147,`blockquote`)(2148,`p`),mN(2149,`Propriedade válida para gráficos do tipo `),Ml(2150,`code`),mN(2151,`Radar`),lg(),mN(2152,`, `),Ml(2153,`code`),mN(2154,`fillpoints`),lg(),mN(2155,` não funciona quando `),Ml(2156,`code`),mN(2157,`areaStyle`),lg(),mN(2158,` está definido como `),Ml(2159,`code`),mN(2160,`true`),lg(),mN(2161,`.`),lg()()()(),Ml(2162,`tr`,15)(2163,`td`,16)(2164,`div`,17)(2165,`span`,18),mN(2166,` color`),ql(2167,`br`),lg()()(),Ml(2168,`td`,19)(2169,`code`,35),mN(2170,`string`),lg()(),Ml(2171,`td`,23)(2172,`em`)(2173,`strong`),mN(2174,`(opcional)`),lg()(),Ml(2175,`p`),mN(2176,`Determina a cor da série. As maneiras de customizar o `),Ml(2177,`em`),mN(2178,`preset`),lg(),mN(2179,` padrão de cores são:`),lg(),Ml(2180,`ul`)(2181,`li`),mN(2182,`Hexadecimal, por exemplo `),Ml(2183,`code`),mN(2184,`#c64840`),lg(),mN(2185,`;`),lg(),Ml(2186,`li`),mN(2187,`RGB, por exemplo `),Ml(2188,`code`),mN(2189,`rgb(0, 0, 165)`),lg()(),Ml(2190,`li`),mN(2191,`O nome da cor, por exemplo `),Ml(2192,`code`),mN(2193,`blue`),lg(),mN(2194,`;`),lg(),Ml(2195,`li`),mN(2196,`Variáveis CSS, por exemplo `),Ml(2197,`code`),mN(2198,`var(--color-01)`),lg(),mN(2199,`;`),lg(),Ml(2200,`li`),mN(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Ml(2202,`ul`)(2203,`li`),ql(2204,`span`,54),Ml(2205,`code`),mN(2206,`color-01`),lg()(),Ml(2207,`li`),ql(2208,`span`,55),Ml(2209,`code`),mN(2210,`color-02`),lg()(),Ml(2211,`li`),ql(2212,`span`,56),Ml(2213,`code`),mN(2214,`color-03`),lg()(),Ml(2215,`li`),ql(2216,`span`,57),Ml(2217,`code`),mN(2218,`color-04`),lg()(),Ml(2219,`li`),ql(2220,`span`,58),Ml(2221,`code`),mN(2222,`color-05`),lg()(),Ml(2223,`li`),ql(2224,`span`,59),Ml(2225,`code`),mN(2226,`color-06`),lg()(),Ml(2227,`li`),ql(2228,`span`,60),Ml(2229,`code`),mN(2230,`color-07`),lg()(),Ml(2231,`li`),ql(2232,`span`,61),Ml(2233,`code`),mN(2234,`color-08`),lg()(),Ml(2235,`li`),ql(2236,`span`,62),Ml(2237,`code`),mN(2238,`color-09`),lg()(),Ml(2239,`li`),ql(2240,`span`,63),Ml(2241,`code`),mN(2242,`color-10`),lg()(),Ml(2243,`li`),ql(2244,`span`,64),Ml(2245,`code`),mN(2246,`color-11`),lg()(),Ml(2247,`li`),ql(2248,`span`,65),Ml(2249,`code`),mN(2250,`color-12`),lg()()()()(),Ml(2251,`ul`)(2252,`li`),mN(2253,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),lg()()()(),Ml(2254,`tr`,15)(2255,`td`,16)(2256,`div`,17)(2257,`span`,18),mN(2258,` data`),ql(2259,`br`),lg()()(),Ml(2260,`td`,19)(2261,`code`,27),mN(2262,`number `),lg(),Ml(2263,`code`,66),mN(2264,` Array<number>`),lg()(),Ml(2265,`td`,23)(2266,`em`)(2267,`strong`),mN(2268,`(opcional)`),lg()(),Ml(2269,`p`),mN(2270,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),lg(),Ml(2271,`ul`)(2272,`li`),mN(2273,`Para gráficos dos tipos `),Ml(2274,`code`),mN(2275,`donut`),lg(),mN(2276,` e `),Ml(2277,`code`),mN(2278,`pie`),lg(),mN(2279,`, espera-se `),Ml(2280,`em`),mN(2281,`number`),lg(),mN(2282,`;`),lg(),Ml(2283,`li`),mN(2284,`Para gráficos dos tipos `),Ml(2285,`code`),mN(2286,`area`),lg(),mN(2287,`, `),Ml(2288,`code`),mN(2289,`bar`),lg(),mN(2290,`, `),Ml(2291,`code`),mN(2292,`column`),lg(),mN(2293,`, `),Ml(2294,`code`),mN(2295,`line`),lg(),mN(2296,` e `),Ml(2297,`code`),mN(2298,`radar`),lg(),mN(2299,`, espera-se um `),Ml(2300,`em`),mN(2301,`array`),lg(),mN(2302,` de `),Ml(2303,`code`),mN(2304,`data`),lg(),mN(2305,`.`),lg()(),Ml(2306,`blockquote`)(2307,`p`),mN(2308,`Se passado valor `),Ml(2309,`code`),mN(2310,`null`),lg(),mN(2311,` em determinado item da lista, a iteração irá ignorá-lo.`),lg()()()(),Ml(2312,`tr`,15)(2313,`td`,16)(2314,`div`,17)(2315,`span`,18),mN(2316,` from`),ql(2317,`br`),lg()()(),Ml(2318,`td`,19)(2319,`code`,27),mN(2320,`number`),lg()(),Ml(2321,`td`,23)(2322,`em`)(2323,`strong`),mN(2324,`(opcional)`),lg()(),Ml(2325,`p`),mN(2326,`Alcance inicial da cor.`),lg(),Ml(2327,`blockquote`)(2328,`p`),mN(2329,`Propriedade válida para gráfico do tipo `),Ml(2330,`code`),mN(2331,`Gauge`),lg(),mN(2332,`.`),lg()()()(),Ml(2333,`tr`,15)(2334,`td`,16)(2335,`div`,17)(2336,`span`,18),mN(2337,` label`),ql(2338,`br`),lg()()(),Ml(2339,`td`,19)(2340,`code`,35),mN(2341,`string`),lg()(),Ml(2342,`td`,23)(2343,`em`)(2344,`strong`),mN(2345,`(opcional)`),lg()(),Ml(2346,`p`),mN(2347,`Rótulo referência da série.`),lg()()(),Ml(2348,`tr`,15)(2349,`td`,16)(2350,`div`,17)(2351,`span`,18),mN(2352,` stackGroupName`),ql(2353,`br`),lg()()(),Ml(2354,`td`,19)(2355,`code`,35),mN(2356,`string`),lg()(),Ml(2357,`td`,23)(2358,`em`)(2359,`strong`),mN(2360,`(opcional)`),lg()(),Ml(2361,`p`),mN(2362,`Agrupa as séries em barras ou colunas que receberem o mesmo `),Ml(2363,`code`),mN(2364,`stackGroupName`),lg(),mN(2365,`. Exemplo:`),lg(),Ml(2366,`ul`)(2367,`li`),mN(2368,`Serie A: `),Ml(2369,`code`),mN(2370,`{ data: 500, stackGroupName: 'group1' ... }`),lg(),mN(2371,`;`),lg(),Ml(2372,`li`),mN(2373,`Série B: `),Ml(2374,`code`),mN(2375,`{ data: 200, stackGroupName: 'group1' ... }`),lg(),mN(2376,`.`),lg(),Ml(2377,`li`),mN(2378,`Série C: `),Ml(2379,`code`),mN(2380,`{ data: 100, stackGroupName: 'group2' ... }`),lg(),mN(2381,`.`),lg(),Ml(2382,`li`),mN(2383,`Série D: `),Ml(2384,`code`),mN(2385,`{ data: 400, stackGroupName: 'group2' ... }`),lg(),mN(2386,`.`),lg()(),Ml(2387,`p`),mN(2388,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),lg(),Ml(2389,`blockquote`)(2390,`p`),mN(2391,`Válido para gráfico do tipo `),Ml(2392,`code`),mN(2393,`Column`),lg(),mN(2394,` e `),Ml(2395,`code`),mN(2396,`Bar`),lg(),mN(2397,`. Essa propriedade é ignorada caso a propriedade `),Ml(2398,`code`),mN(2399,`stacked`),lg(),mN(2400,` da interface `),Ml(2401,`code`),mN(2402,`PoChartOptions`),lg(),mN(2403,` esteja como `),Ml(2404,`code`),mN(2405,`true`),lg(),mN(2406,`.`),lg()(),Ml(2407,`blockquote`)(2408,`p`),mN(2409,`Essa propriedade habilita a propriedade `),Ml(2410,`code`),mN(2411,`p-data-label`),lg(),mN(2412,` por padrão, podendo ser desabilitada passando `),Ml(2413,`code`),mN(2414,`[p-data-label]={ fixed: false }`),lg(),mN(2415,`.`),lg()()()(),Ml(2416,`tr`,15)(2417,`td`,16)(2418,`div`,17)(2419,`span`,18),mN(2420,` to`),ql(2421,`br`),lg()()(),Ml(2422,`td`,19)(2423,`code`,27),mN(2424,`number`),lg()(),Ml(2425,`td`,23)(2426,`em`)(2427,`strong`),mN(2428,`(opcional)`),lg()(),Ml(2429,`p`),mN(2430,`Alcance final da cor.`),lg(),Ml(2431,`blockquote`)(2432,`p`),mN(2433,`Propriedade válida para gráfico do tipo `),Ml(2434,`code`),mN(2435,`Gauge`),lg(),mN(2436,`.`),lg()()()(),Ml(2437,`tr`,15)(2438,`td`,16)(2439,`div`,17)(2440,`span`,18),mN(2441,` tooltip`),ql(2442,`br`),lg()()(),Ml(2443,`td`,19)(2444,`code`,35),mN(2445,`string `),lg(),Ml(2446,`code`,67),mN(2447,` ((params: any) => string)`),lg()(),Ml(2448,`td`,23)(2449,`em`)(2450,`strong`),mN(2451,`(opcional)`),lg()(),Ml(2452,`p`),mN(2453,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),Ml(2454,`em`),mN(2455,`chart`),lg(),mN(2456,`.`),lg(),Ml(2457,`p`),mN(2458,`Formatos aceitos:`),lg(),Ml(2459,`ul`)(2460,`li`)(2461,`p`)(2462,`strong`),mN(2463,`string`),lg(),mN(2464,`: pode conter marcadores dinâmicos e HTML simples.`),lg()(),Ml(2465,`li`)(2466,`p`),mN(2467,`Marcadores disponíveis:`),lg()(),Ml(2468,`li`)(2469,`p`)(2470,`code`),mN(2471,`{name}`),lg(),mN(2472,` → Nome do item/categoria.`),lg()(),Ml(2473,`li`)(2474,`p`)(2475,`code`),mN(2476,`{seriesName}`),lg(),mN(2477,` → Nome da série.`),lg()(),Ml(2478,`li`)(2479,`p`)(2480,`code`),mN(2481,`{value}`),lg(),mN(2482,` → Valor correspondente.`),lg()(),Ml(2483,`li`)(2484,`p`)(2485,`strong`),mN(2486,`function`),lg(),mN(2487,`: função que recebe o objeto `),Ml(2488,`code`),mN(2489,`params`),lg(),mN(2490,` e deve retornar uma `),Ml(2491,`em`),mN(2492,`string`),lg(),mN(2493,` com o conteúdo da tooltip.`),lg()()(),Ml(2494,`blockquote`)(2495,`p`),mN(2496,`É possível utilizar marcação HTML simples (`),Ml(2497,`code`),mN(2498,`<b>`),lg(),mN(2499,`, `),Ml(2500,`code`),mN(2501,`<i>`),lg(),mN(2502,`, `),Ml(2503,`code`),mN(2504,`<br>`),lg(),mN(2505,`, `),Ml(2506,`code`),mN(2507,`<hr>`),lg(),mN(2508,`, etc.) que será interpretada via `),Ml(2509,`code`),mN(2510,`innerHTML`),lg(),mN(2511,`.`),lg()(),Ml(2512,`blockquote`)(2513,`p`),mN(2514,`Formatação customizada (será convertido internamente para HTML):`),lg()(),Ml(2515,`ul`)(2516,`li`)(2517,`code`),mN(2518,`\\n`),lg(),mN(2519,` → quebra de linha (`),Ml(2520,`code`),mN(2521,`<br>`),lg(),mN(2522,`).`),lg(),Ml(2523,`li`)(2524,`code`),mN(2525,`**texto**`),lg(),mN(2526,` → negrito (`),Ml(2527,`code`),mN(2528,`<b>`),lg(),mN(2529,`).`),lg(),Ml(2530,`li`)(2531,`code`),mN(2532,`__texto__`),lg(),mN(2533,` → itálico (`),Ml(2534,`code`),mN(2535,`<i>`),lg(),mN(2536,`).`),lg()(),Ml(2537,`blockquote`)(2538,`p`),mN(2539,`Caso não seja informado um valor para o `),Ml(2540,`em`),mN(2541,`tooltip`),lg(),mN(2542,`, será exibido da seguinte forma:`),lg()(),Ml(2543,`ul`)(2544,`li`)(2545,`code`),mN(2546,`donut`),lg(),mN(2547,`, `),Ml(2548,`code`),mN(2549,`label`),lg(),mN(2550,`: valor proporcional ao total em porcentagem.`),lg(),Ml(2551,`li`)(2552,`code`),mN(2553,`radar`),lg(),mN(2554,`: nome da série, o nome do indicator e os valores correspondentes.`),lg(),Ml(2555,`li`)(2556,`code`),mN(2557,`area`),lg(),mN(2558,`, `),Ml(2559,`code`),mN(2560,`bar`),lg(),mN(2561,`, `),Ml(2562,`code`),mN(2563,`column`),lg(),mN(2564,`, `),Ml(2565,`code`),mN(2566,`line`),lg(),mN(2567,` e `),Ml(2568,`code`),mN(2569,`pie`),lg(),mN(2570,`: `),Ml(2571,`code`),mN(2572,`label`),lg(),mN(2573,`: `),Ml(2574,`code`),mN(2575,`data`),lg(),mN(2576,`.`),lg()(),Ml(2577,`h3`),mN(2578,`Exemplos:`),lg(),Ml(2579,`p`)(2580,`strong`),mN(2581,`Usando string com placeholders:`),lg()(),Ml(2582,`pre`)(2583,`code`,68),mN(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),lg()(),Ml(2585,`p`)(2586,`strong`),mN(2587,`Usando função de callback:`),lg()(),Ml(2588,`pre`)(2589,`code`,68),mN(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),lg()()()(),Ml(2591,`tr`,15)(2592,`td`,16)(2593,`div`,17)(2594,`span`,18),mN(2595,` type`),ql(2596,`br`),lg()()(),Ml(2597,`td`,19)(2598,`code`,36),mN(2599,`PoChartType`),lg()(),Ml(2600,`td`,23)(2601,`em`)(2602,`strong`),mN(2603,`(opcional)`),lg()(),Ml(2604,`p`),mN(2605,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),Ml(2606,`code`),mN(2607,`column`),lg(),mN(2608,` e `),Ml(2609,`code`),mN(2610,`line`),lg(),mN(2611,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),lg(),Ml(2612,`ul`)(2613,`li`),mN(2614,`Serie A: `),Ml(2615,`code`),mN(2616,`{ type: ChartType.Column, data: ... }`),lg(),mN(2617,`;`),lg(),Ml(2618,`li`),mN(2619,`Série B: `),Ml(2620,`code`),mN(2621,`{ type: ChartType.Line, data: ... }`),lg(),mN(2622,`.`),lg()(),Ml(2623,`p`),mN(2624,`Se tanto `),Ml(2625,`code`),mN(2626,`p-type`),lg(),mN(2627,` quanto `),Ml(2628,`code`),mN(2629,`{ type }`),lg(),mN(2630,` forem ignorados, o padrão gerado pelo componente será:`),lg(),Ml(2631,`ul`)(2632,`li`)(2633,`code`),mN(2634,`column`),lg(),mN(2635,`: se `),Ml(2636,`code`),mN(2637,`data`),lg(),mN(2638,` receber `),Ml(2639,`code`),mN(2640,`Array<number>`),lg(),mN(2641,`;`),lg(),Ml(2642,`li`)(2643,`code`),mN(2644,`pie`),lg(),mN(2645,`: se `),Ml(2646,`code`),mN(2647,`data`),lg(),mN(2648,` for `),Ml(2649,`em`),mN(2650,`number`),lg(),mN(2651,`.`),lg()(),Ml(2652,`blockquote`)(2653,`p`),mN(2654,`Se utilizada a propriedade `),Ml(2655,`code`),mN(2656,`p-type`),lg(),mN(2657,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),Ml(2658,`code`),mN(2659,`{type}`),lg(),mN(2660,` da primeira série sobrescreverá o valor definido em `),Ml(2661,`code`),mN(2662,`p-type`),lg(),mN(2663,`.`),lg()(),Ml(2664,`blockquote`)(2665,`p`),mN(2666,`O componente só exibirá as séries que tiverem o mesmo `),Ml(2667,`code`),mN(2668,`type`),lg(),mN(2669,` definido, exceto para mesclagem para tipos `),Ml(2670,`code`),mN(2671,`column`),lg(),mN(2672,` e `),Ml(2673,`code`),mN(2674,`line`),lg(),mN(2675,`.`),lg()()()()(),Ml(2676,`h3`),mN(2677,`Enums`),lg(),Ml(2678,`h4`,4)(2679,`code`,5),mN(2680,`PoChartLabelFormat`),lg()(),Ml(2681,`div`,2)(2682,`p`)(2683,`em`),mN(2684,`Enum`),lg(),Ml(2685,`code`),mN(2686,`PoChartLabelFormat`),lg(),mN(2687,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),lg()(),Ml(2688,`h4`,11),mN(2689,`Propriedades`),lg(),Ml(2690,`table`,12)(2691,`tr`,13)(2692,`th`,14),mN(2693,`Nome`),lg(),Ml(2694,`th`,14),mN(2695,`Descrição`),lg()(),Ml(2696,`tr`,15)(2697,`td`,16)(2698,`div`,17)(2699,`span`,18),mN(2700,` Number`),ql(2701,`br`),lg()()(),Ml(2702,`td`,23)(2703,`p`),mN(2704,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),Ml(2705,`code`),mN(2706,`'1.2-2'`),lg(),mN(2707,` da `),Ml(2708,`a`,69),mN(2709,`DecimalPipe`),lg(),mN(2710,`.`),lg()()(),Ml(2711,`tr`,15)(2712,`td`,16)(2713,`div`,17)(2714,`span`,18),mN(2715,` Currency`),ql(2716,`br`),lg()()(),Ml(2717,`td`,23)(2718,`p`),mN(2719,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),Ml(2720,`a`,70),mN(2721,`DEFAULT_CURRENCY_CODE`),lg(),mN(2722,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),Ml(2723,`a`,71),mN(2724,`LOCALE_ID`),lg(),mN(2725,` da aplicação. A configuração pode ser feita da seguinte forma:`),lg(),Ml(2726,`pre`)(2727,`code`),mN(2728,`import { LOCALE_ID } from '@angular/core';
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
`),lg()()()()(),Ml(2729,`h4`,4)(2730,`code`,5),mN(2731,`PoChartType`),lg()(),Ml(2732,`div`,2)(2733,`p`)(2734,`em`),mN(2735,`Enum`),lg(),Ml(2736,`code`),mN(2737,`PoChartType`),lg(),mN(2738,` para especificação dos tipos de gráficos.`),lg()(),Ml(2739,`h4`,11),mN(2740,`Propriedades`),lg(),Ml(2741,`table`,12)(2742,`tr`,13)(2743,`th`,14),mN(2744,`Nome`),lg(),Ml(2745,`th`,14),mN(2746,`Descrição`),lg()(),Ml(2747,`tr`,15)(2748,`td`,16)(2749,`div`,17)(2750,`span`,18),mN(2751,` Area`),ql(2752,`br`),lg()()(),Ml(2753,`td`,23)(2754,`p`),mN(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),lg()()(),Ml(2756,`tr`,15)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),mN(2760,` Donut`),ql(2761,`br`),lg()()(),Ml(2762,`td`,23)(2763,`p`),mN(2764,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),lg()()(),Ml(2765,`tr`,15)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),mN(2769,` Pie`),ql(2770,`br`),lg()()(),Ml(2771,`td`,23)(2772,`p`),mN(2773,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),lg()()(),Ml(2774,`tr`,15)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),mN(2778,` Line`),ql(2779,`br`),lg()()(),Ml(2780,`td`,23)(2781,`p`),mN(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Ml(2783,`code`),mN(2784,`column`),lg(),mN(2785,` e `),Ml(2786,`code`),mN(2787,`area`),lg(),mN(2788,`, definindo-se o tipo através da propriedade `),Ml(2789,`code`),mN(2790,`PoChartSerie.type`),lg(),mN(2791,`.`),lg()()(),Ml(2792,`tr`,15)(2793,`td`,16)(2794,`div`,17)(2795,`span`,18),mN(2796,` Column`),ql(2797,`br`),lg()()(),Ml(2798,`td`,23)(2799,`p`),mN(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),lg()()(),Ml(2801,`tr`,15)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),mN(2805,` Bar`),ql(2806,`br`),lg()()(),Ml(2807,`td`,23)(2808,`p`),mN(2809,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),lg()()(),Ml(2810,`tr`,15)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),mN(2814,` Gauge`),ql(2815,`br`),lg()()(),Ml(2816,`td`,23)(2817,`p`),mN(2818,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),lg(),Ml(2819,`ul`)(2820,`li`),mN(2821,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),lg(),Ml(2822,`li`),mN(2823,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),lg()()()(),Ml(2824,`tr`,15)(2825,`td`,16)(2826,`div`,17)(2827,`span`,18),mN(2828,` Radar`),ql(2829,`br`),lg()()(),Ml(2830,`td`,23)(2831,`p`),mN(2832,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return r})();var _t=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||r)(w(Xn),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Chart`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(d,i){d&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-chart-doc`),lg(),Ml(4,`po-tab`,3),ht$1(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-chart-basic-view`)(6,`sample-po-chart-labs-view`)(7,`sample-po-chart-coffee-ranking-view`)(8,`sample-po-chart-stacked-view`)(9,`sample-po-chart-summary-view`)(10,`sample-po-chart-world-exports-view`)(11,`sample-po-chart-technology-skill-view`),lg()()()),d&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,fe,ve,Pe,we,Me,ke,Ae,Re],encapsulation:2,changeDetection:1})}return r})()}];var Ge=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[NL.forChild(_t),NL]})}return r})();var yn=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=he({type:r});static ɵinj=ue({imports:[ar,Ge]})}return r})();export{yn as DocPoChartModule};