import {f as fe,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,cu as uh,d as f,aW as Yp,cv as Ch,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,bD as Ede,c8 as Dde,bH as M3,c9 as Yhe,bc as $O,aB as Sx,aM as ww,aN as r0,a4 as wN,aO as Ew,aP as o0,a5 as bN,aJ as qhe,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var re=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Gl(0,"po-calendar");},dependencies:[Ch],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Calendar Basic"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-calendar-basic/sample-po-calendar-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-calendar></po-calendar>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-calendar-basic/sample-po-calendar-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-calendar-basic',
  templateUrl: './sample-po-calendar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCalendarBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-calendar-basic"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,be,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,re],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-range-presets"]],standalone:false,decls:1,vars:0,consts:[["p-mode","range","p-range-presets",""]],template:function(i,a){i&1&&Gl(0,"po-calendar",0);},dependencies:[Ch],encapsulation:2,changeDetection:1})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-range-presets-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Calendar - Range and Presets"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-calendar-range-presets/sample-po-calendar-range-presets.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-calendar p-mode="range" p-range-presets></po-calendar>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-calendar-range-presets/sample-po-calendar-range-presets.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-calendar-range-presets',
  templateUrl: './sample-po-calendar-range-presets.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCalendarRangePresetsComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-calendar-range-presets"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ve,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,se],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{calendar="";event="";infoValue;locale="";maxDate="";minDate="";mode;monthYearEvent;size="";rangePresets=false;rangePresetsOrder="asc";customPresets=[];useCustomPresets=false;localeOptions=[{label:"pt",value:"pt"},{label:"es",value:"es"},{label:"en",value:"en"},{label:"ru",value:"ru"}];calendarModeOptions=[{label:"Range",value:uh.Range},{label:"Unset",value:""}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];presetsOrderOptions=[{label:"ASC",value:"asc"},{label:"DESC",value:"desc"}];sampleCustomPresets=[{label:"Pr\xF3ximos 3 meses",dateRange:r=>{let i=new Date(r);return i.setMonth(i.getMonth()+3),{start:new Date(r.getFullYear(),r.getMonth(),r.getDate()),end:i}}},{label:"\xDAltima semana",dateRange:r=>{let i=new Date(r);return i.setDate(i.getDate()-7),{start:i,end:new Date(r.getFullYear(),r.getMonth(),r.getDate())}}}];ngOnInit(){this.restore();}onCustomPresetsChange(r){this.useCustomPresets=r,this.customPresets=r?[...this.sampleCustomPresets]:[];}changeEvent(r,i){r==="p-change"&&(this.calendar=i,this.infoValue=i),r==="p-change-month-year"&&(this.monthYearEvent=i,this.infoValue=i),this.event=r;}restore(){this.calendar="",this.event="",this.infoValue="",this.locale="",this.maxDate="",this.minDate="",this.mode=void 0,this.size="medium",this.rangePresets=false,this.rangePresetsOrder="asc",this.customPresets=[],this.useCustomPresets=false;}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-labs"]],standalone:false,decls:23,vars:28,consts:[["f","ngForm"],[1,"po-md-8","po-p-2"],[3,"ngModelChange","p-change","p-change-month-year","ngModel","p-locale","p-min-date","p-max-date","p-mode","p-size","p-range-presets","p-range-preset-options","p-range-presets-order"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","mode","p-label","Mode",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","locales","p-help","Select a locale for the calendar","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","rangePresets","p-label","Range Presets",1,"po-md-4",3,"ngModelChange","ngModel"],["name","customPresets","p-label","Custom Presets",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","presetsOrder","p-label","Presets Order",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let c=Sx();Tl(0,"div",1)(1,"po-calendar",2),ww("ngModelChange",function(d){return Ky(c),sN(a.calendar,d)||(a.calendar=d),Xy(d)}),ht("p-change",function(d){return a.changeEvent("p-change",d)})("p-change-month-year",function(d){return a.changeEvent("p-change-month-year",d)}),sg(),r0(),sg(),Gl(2,"po-divider"),Tl(3,"div",3),Gl(4,"po-info",4),wN(5,"json"),Gl(6,"po-info",5),sg(),Gl(7,"po-divider"),Tl(8,"form",null,0)(10,"div",3)(11,"po-datepicker",6),ww("ngModelChange",function(d){return Ky(c),sN(a.minDate,d)||(a.minDate=d),Xy(d)}),sg(),r0(),Tl(12,"po-datepicker",7),ww("ngModelChange",function(d){return Ky(c),sN(a.maxDate,d)||(a.maxDate=d),Xy(d)}),sg(),r0(),Tl(13,"po-radio-group",8),ww("ngModelChange",function(d){return Ky(c),sN(a.mode,d)||(a.mode=d),Xy(d)}),sg(),r0(),sg(),Tl(14,"div",3)(15,"po-radio-group",9),ww("ngModelChange",function(d){return Ky(c),sN(a.locale,d)||(a.locale=d),Xy(d)}),sg(),r0(),Tl(16,"po-radio-group",10),ww("ngModelChange",function(d){return Ky(c),sN(a.size,d)||(a.size=d),Xy(d)}),sg(),r0(),sg(),Tl(17,"div",3)(18,"po-switch",11),ww("ngModelChange",function(d){return Ky(c),sN(a.rangePresets,d)||(a.rangePresets=d),Xy(d)}),sg(),r0(),Tl(19,"po-switch",12),ww("ngModelChange",function(d){return Ky(c),sN(a.useCustomPresets,d)||(a.useCustomPresets=d),Xy(d)}),ht("p-change",function(d){return a.onCustomPresetsChange(d)}),sg(),r0(),Tl(20,"po-radio-group",13),ww("ngModelChange",function(d){return Ky(c),sN(a.rangePresetsOrder,d)||(a.rangePresetsOrder=d),Xy(d)}),sg(),r0(),sg(),Tl(21,"div",3)(22,"po-button",14),ht("p-click",function(){return a.restore()}),sg()()();}i&2&&(Vp(),Ew("ngModel",a.calendar),nw("p-locale",a.locale)("p-min-date",a.minDate)("p-max-date",a.maxDate)("p-mode",a.mode)("p-size",a.size)("p-range-presets",a.rangePresets)("p-range-preset-options",a.customPresets)("p-range-presets-order",a.rangePresetsOrder),o0(),Vp(3),nw("p-value",bN(5,26,a.infoValue)),Vp(2),nw("p-value",a.event),Vp(5),Ew("ngModel",a.minDate),nw("p-max-date",a.maxDate),o0(),Vp(),Ew("ngModel",a.maxDate),nw("p-min-date",a.minDate),o0(),Vp(),Ew("ngModel",a.mode),nw("p-options",a.calendarModeOptions),o0(),Vp(2),Ew("ngModel",a.locale),nw("p-columns",4)("p-options",a.localeOptions),o0(),Vp(),Ew("ngModel",a.size),nw("p-options",a.sizeOptions),o0(),Vp(2),Ew("ngModel",a.rangePresets),o0(),Vp(),Ew("ngModel",a.useCustomPresets),o0(),Vp(),Ew("ngModel",a.rangePresetsOrder),nw("p-options",a.presetsOrderOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,Ch,mv,Ede,Dde,M3,Yhe,$O],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Calendar Labs"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-calendar-labs/sample-po-calendar-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-md-8 po-p-2">
  <po-calendar
    [(ngModel)]="calendar"
    [p-locale]="locale"
    [p-min-date]="minDate"
    [p-max-date]="maxDate"
    [p-mode]="mode"
    [p-size]="size"
    [p-range-presets]="rangePresets"
    [p-range-preset-options]="customPresets"
    [p-range-presets-order]="rangePresetsOrder"
    (p-change)="changeEvent('p-change', $event)"
    (p-change-month-year)="changeEvent('p-change-month-year', $event)"
  >
  </po-calendar>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="infoValue | json"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-4"
      name="minDate"
      [(ngModel)]="minDate"
      p-clean
      p-label="Min Date"
      [p-max-date]="maxDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="maxDate"
      [(ngModel)]="maxDate"
      p-clean
      p-label="Max Date"
      [p-min-date]="minDate"
    >
    </po-datepicker>

    <po-radio-group class="po-md-4" name="mode" [(ngModel)]="mode" p-label="Mode" [p-options]="calendarModeOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="locales"
      [(ngModel)]="locale"
      [p-columns]="4"
      p-help="Select a locale for the calendar"
      p-label="Locale"
      [p-options]="localeOptions"
    >
    </po-radio-group>
    <po-radio-group
      class="po-md-6"
      name="size"
      [(ngModel)]="size"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-switch class="po-md-4" name="rangePresets" [(ngModel)]="rangePresets" p-label="Range Presets"> </po-switch>
    <po-switch
      class="po-md-4"
      name="customPresets"
      [(ngModel)]="useCustomPresets"
      p-label="Custom Presets"
      (p-change)="onCustomPresetsChange($event)"
    >
    </po-switch>
    <po-radio-group
      class="po-md-4"
      name="presetsOrder"
      [(ngModel)]="rangePresetsOrder"
      p-label="Presets Order"
      [p-options]="presetsOrderOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-calendar-labs/sample-po-calendar-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption, PoCalendarMode, PoCalendarRangePreset } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-calendar-labs',
  templateUrl: './sample-po-calendar-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCalendarLabsComponent implements OnInit {
  calendar: string = '';
  event: string = '';
  infoValue: any;
  locale: string = '';
  maxDate: string | Date = '';
  minDate: string | Date = '';
  mode: any;
  monthYearEvent: any;
  size: string = '';
  rangePresets: boolean = false;
  rangePresetsOrder: 'asc' | 'desc' = 'asc';
  customPresets: Array<PoCalendarRangePreset> = [];
  useCustomPresets: boolean = false;

  readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'es', value: 'es' },
    { label: 'en', value: 'en' },
    { label: 'ru', value: 'ru' }
  ];

  readonly calendarModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Range', value: PoCalendarMode.Range },
    { label: 'Unset', value: '' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly presetsOrderOptions: Array<PoRadioGroupOption> = [
    { label: 'ASC', value: 'asc' },
    { label: 'DESC', value: 'desc' }
  ];

  readonly sampleCustomPresets: Array<PoCalendarRangePreset> = [
    {
      label: 'Pr\xF3ximos 3 meses',
      dateRange: (today: Date) => {
        const end = new Date(today);
        end.setMonth(end.getMonth() + 3);
        return { start: new Date(today.getFullYear(), today.getMonth(), today.getDate()), end };
      }
    },
    {
      label: '\xDAltima semana',
      dateRange: (today: Date) => {
        const start = new Date(today);
        start.setDate(start.getDate() - 7);
        return { start, end: new Date(today.getFullYear(), today.getMonth(), today.getDate()) };
      }
    }
  ];

  ngOnInit() {
    this.restore();
  }

  onCustomPresetsChange(value: boolean) {
    this.useCustomPresets = value;
    this.customPresets = value ? [...this.sampleCustomPresets] : [];
  }

  changeEvent(type: string, event?: any) {
    if (type === 'p-change') {
      this.calendar = event;
      this.infoValue = event;
    }

    if (type === 'p-change-month-year') {
      this.monthYearEvent = event;
      this.infoValue = event;
    }

    this.event = type;
  }

  restore() {
    this.calendar = '';
    this.event = '';
    this.infoValue = '';
    this.locale = '';
    this.maxDate = '';
    this.minDate = '';
    this.mode = undefined;
    this.size = 'medium';
    this.rangePresets = false;
    this.rangePresetsOrder = 'asc';
    this.customPresets = [];
    this.useCustomPresets = false;
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-calendar-labs"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,we,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,pe],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{poNotification=f(Yp);date;halfPriceTicketQuantity;tickets;pageActions=[{label:"Buy tickets",action:this.buyTickets.bind(this),disabled:this.isdisableBuy.bind(this)}];ticketsOptions=[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}];buyTickets(){this.poNotification.success(`Tickets purchased to ${this.getDate(this.date)} successfully!`),this.date=void 0,this.tickets=void 0,this.halfPriceTicketQuantity=void 0;}getDate(r){let i=r.substring(0,4),a=r.substring(5,7),c=r.substring(8,10);return `${a}/${c}/${i}`}isdisableBuy(){return !(this.date&&(this.tickets>0||this.halfPriceTicketQuantity>0))}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-ticket-sales"]],standalone:false,decls:12,vars:6,consts:[["p-title","Tickets sales",3,"p-actions"],[1,"po-row"],[1,"po-lg-8","po-md-7"],["p-label","Prices",1,"po-md-12"],["p-label","Weekends and holidays","p-value","$ 20,00",1,"po-md-6"],["p-label","Working days","p-value","$ 10,00",1,"po-md-6"],["p-label","Quantity",1,"po-md-12"],["p-help","From 12 years","p-label","Adults",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-help","04 to 11 years","p-label","Children and older adults",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-4","po-md-5"],["p-label","Select the date",1,"po-md-12"],["p-locale","en",3,"ngModelChange","ngModel"]],template:function(i,a){i&1&&(Tl(0,"po-page-default",0)(1,"div",1)(2,"div",2),Gl(3,"po-divider",3)(4,"po-info",4)(5,"po-info",5)(6,"po-divider",6),Tl(7,"po-select",7),ww("ngModelChange",function(p){return sN(a.tickets,p)||(a.tickets=p),p}),sg(),r0(),Tl(8,"po-select",8),ww("ngModelChange",function(p){return sN(a.halfPriceTicketQuantity,p)||(a.halfPriceTicketQuantity=p),p}),sg(),r0(),sg(),Tl(9,"div",9),Gl(10,"po-divider",10),Tl(11,"po-calendar",11),ww("ngModelChange",function(p){return sN(a.date,p)||(a.date=p),p}),sg(),r0(),sg()()()),i&2&&(nw("p-actions",a.pageActions),Vp(7),Ew("ngModel",a.tickets),nw("p-options",a.ticketsOptions),o0(),Vp(),Ew("ngModel",a.halfPriceTicketQuantity),nw("p-options",a.ticketsOptions),o0(),Vp(3),Ew("ngModel",a.date),o0());},dependencies:[nY,Sk,Ch,mv,qhe,Yhe,lNe],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-ticket-sales-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Calendar - Ticket Sales"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Tickets sales" [p-actions]="pageActions">
  <div class="po-row">
    <div class="po-lg-8 po-md-7">
      <po-divider class="po-md-12" p-label="Prices"></po-divider>

      <po-info class="po-md-6" p-label="Weekends and holidays" p-value="$ 20,00"> </po-info>

      <po-info class="po-md-6" p-label="Working days" p-value="$ 10,00"> </po-info>

      <po-divider class="po-md-12" p-label="Quantity"></po-divider>

      <po-select
        class="po-lg-6"
        [(ngModel)]="tickets"
        p-help="From 12 years"
        p-label="Adults"
        [p-options]="ticketsOptions"
      >
      </po-select>

      <po-select
        class="po-lg-6"
        [(ngModel)]="halfPriceTicketQuantity"
        p-help="04 to 11 years"
        p-label="Children and older adults"
        [p-options]="ticketsOptions"
      >
      </po-select>
    </div>

    <div class="po-lg-4 po-md-5">
      <po-divider class="po-md-12" p-label="Select the date"></po-divider>

      <po-calendar [(ngModel)]="date" p-locale="en"> </po-calendar>
    </div>
  </div>
</po-page-default>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoPageAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-calendar-ticket-sales',
  templateUrl: './sample-po-calendar-ticket-sales.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCalendarTicketSalesComponent {
  private poNotification = inject(PoNotificationService);

  date: string;
  halfPriceTicketQuantity: number;
  tickets: number;

  readonly pageActions: Array<PoPageAction> = [
    { label: 'Buy tickets', action: this.buyTickets.bind(this), disabled: this.isdisableBuy.bind(this) }
  ];

  readonly ticketsOptions: Array<PoSelectOption> = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ];

  private buyTickets() {
    this.poNotification.success(\`Tickets purchased to \${this.getDate(this.date)} successfully!\`);

    this.date = undefined;
    this.tickets = undefined;
    this.halfPriceTicketQuantity = undefined;
  }

  private getDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return \`\${month}/\${day}/\${year}\`;
  }

  private isdisableBuy(): boolean {
    return !(this.date && (this.tickets > 0 || this.halfPriceTicketQuantity > 0));
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-calendar-ticket-sales"),sg(),Gl(23,"hr")),i&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,a.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ue],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-calendar-doc"]],standalone:false,decls:797,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoCalendarMode"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["href","https://po-ui.io/documentation/po-theme"]],template:function(i,a){i&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoCalendarModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-calendar"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoCalendarComponent"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,"O "),Tl(18,"code"),iN(19,"po-calendar"),sg(),iN(20,` \xE9 um componente para sele\xE7\xE3o de datas que permite a navega\xE7\xE3o entre meses por meio das setas direcionais
e dos seletores de m\xEAs e ano exibidos no cabe\xE7alho.`),sg(),Tl(21,"p"),iN(22,`O componente \xE9 recomendado para casos de sele\xE7\xE3o de datas pr\xF3ximas ao tempo presente. Por padr\xE3o, apresenta os dados do
m\xEAs atual e apenas um m\xEAs por vez, podendo exibir uma data pr\xE9-estabelecida conforme o contexto.`),sg(),Tl(23,"p"),iN(24,"Este componente pode receber os seguintes formatos de data:"),sg(),Tl(25,"table")(26,"thead")(27,"tr")(28,"th"),iN(29,"Formato"),sg(),Tl(30,"th"),iN(31,"Exemplo"),sg()()(),Tl(32,"tbody")(33,"tr")(34,"td")(35,"code"),iN(36,"ISO 8601 (Data/Hora)"),sg()(),Tl(37,"td")(38,"code"),iN(39,"2017-11-28T00:00:00-02:00"),sg()()(),Tl(40,"tr")(41,"td")(42,"code"),iN(43,"ISO 8601 (Data)"),sg()(),Tl(44,"td")(45,"code"),iN(46,"2017-11-28"),sg()()(),Tl(47,"tr")(48,"td")(49,"code"),iN(50,"JavaScript Date Object"),sg()(),Tl(51,"td")(52,"code"),iN(53,"new Date(2017, 10, 28)"),sg()()()()(),Tl(54,"blockquote")(55,"p"),iN(56,"O valor \xE9 tratado internamente como "),Tl(57,"strong"),iN(58,"yyyy-mm-dd"),sg(),iN(59,"."),sg()(),Tl(60,"p")(61,"strong"),iN(62,"Importante:"),sg()(),Tl(63,"ul")(64,"li"),iN(65,"Datas fora do intervalo ("),Tl(66,"code"),iN(67,"p-min-date"),sg(),iN(68," / "),Tl(69,"code"),iN(70,"p-max-date"),sg(),iN(71,") aparecem desabilitadas sem alterar o "),Tl(72,"em"),iN(73,"model"),sg(),iN(74,"."),sg()(),Tl(75,"h4"),iN(76,"Boas pr\xE1ticas"),sg(),Tl(77,"ul")(78,"li"),iN(79,`Evite datas distantes: O uso do calend\xE1rio n\xE3o \xE9 recomendado para datas muito distantes (como data de nascimento), pois
exige excesso de cliques. Nesses casos, prefira um campo de texto para digita\xE7\xE3o.`),sg(),Tl(80,"li"),iN(81,`Impe\xE7a sele\xE7\xF5es il\xF3gicas: Utilize as propriedades de limite para impedir que o usu\xE1rio selecione per\xEDodos inv\xE1lidos (ex:
data de retorno anterior \xE0 de partida).`),sg(),Tl(82,"li"),iN(83,`Sinalize a disponibilidade: Para datas que n\xE3o podem ser selecionadas devido a um contexto espec\xEDfico, mantenha-as
inativas por meio de opacidade e desabilite a op\xE7\xE3o de clique.`),sg(),Tl(84,"li"),iN(85,`Contexto claro: Certifique-se de que o m\xEAs e o ano estejam sempre vis\xEDveis no cabe\xE7alho para orientar a pessoa usu\xE1ria
durante a navega\xE7\xE3o.`),sg()(),Tl(86,"h4"),iN(87,"Acessibilidade tratada no componente"),sg(),Tl(88,"p"),iN(89,`Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),sg(),Tl(90,"ul")(91,"li"),iN(92,`Navega\xE7\xE3o por teclado: O componente permite intera\xE7\xE3o via tecla Tab entre os controles do cabe\xE7alho e navega\xE7\xE3o no grid
de dias por meio das setas direcionais.`),sg(),Tl(93,"li"),iN(94,`Foco visual: A \xE1rea de foco possui espessura de pelo menos 2 pixels CSS e n\xE3o \xE9 sobreposta por outros elementos da tela,
garantindo visibilidade para usu\xE1rios que utilizam teclado. `),Tl(95,"a",6),iN(96,"WCAG 2.4.12: Focus Appearance"),sg()()(),Tl(97,"h4"),iN(98,"Tokens customiz\xE1veis"),sg(),Tl(99,"p"),iN(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(101,"blockquote")(102,"p"),iN(103,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(104,"a",7),iN(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(106,"."),sg()(),Tl(107,"table")(108,"thead")(109,"tr")(110,"th"),iN(111,"Propriedade"),sg(),Tl(112,"th"),iN(113,"Descri\xE7\xE3o"),sg(),Tl(114,"th"),iN(115,"Valor Padr\xE3o"),sg()()(),Tl(116,"tbody")(117,"tr")(118,"td")(119,"strong"),iN(120,"Default Values"),sg()(),Gl(121,"td")(122,"td"),sg(),Tl(123,"tr")(124,"td")(125,"code"),iN(126,"--background"),sg()(),Tl(127,"td"),iN(128,"Cor de fundo"),sg(),Tl(129,"td")(130,"code"),iN(131,"var(--color-neutral-light-00)"),sg()()(),Tl(132,"tr")(133,"td")(134,"code"),iN(135,"--border-color"),sg()(),Tl(136,"td"),iN(137,"Cor da borda"),sg(),Tl(138,"td")(139,"code"),iN(140,"var(--color-neutral-light-20)"),sg()()(),Tl(141,"tr")(142,"td")(143,"code"),iN(144,"--border-radius"),sg()(),Tl(145,"td"),iN(146,"Raio da borda"),sg(),Tl(147,"td")(148,"code"),iN(149,"var(--border-radius-md)"),sg()()(),Tl(150,"tr")(151,"td")(152,"code"),iN(153,"--border-width"),sg()(),Tl(154,"td"),iN(155,"Largura da borda"),sg(),Tl(156,"td")(157,"code"),iN(158,"var(--border-width-sm)"),sg()()(),Tl(159,"tr")(160,"td")(161,"code"),iN(162,"--shadow"),sg()(),Tl(163,"td"),iN(164,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(165,"td")(166,"code"),iN(167,"var(--shadow-md)"),sg()()(),Tl(168,"tr")(169,"td")(170,"strong"),iN(171,"Weekly cells"),sg()(),Gl(172,"td")(173,"td"),sg(),Tl(174,"tr")(175,"td")(176,"code"),iN(177,"--text-color-weekly"),sg()(),Tl(178,"td"),iN(179,"Cor da fonte utilizada nas c\xE9lulas semanais"),sg(),Tl(180,"td")(181,"code"),iN(182,"var(--color-neutral-dark-90)"),sg()()(),Tl(183,"tr")(184,"td")(185,"code"),iN(186,"--font-family"),sg()(),Tl(187,"td"),iN(188,"Fonte utilizada nas c\xE9lulas semanais"),sg(),Tl(189,"td")(190,"code"),iN(191,"var(--font-family-text)"),sg()()(),Tl(192,"tr")(193,"td")(194,"code"),iN(195,"--font-size"),sg()(),Tl(196,"td"),iN(197,"Tamanho da fonte utilizada nas c\xE9lulas semanais"),sg(),Tl(198,"td")(199,"code"),iN(200,"var(--font-size-sm)"),sg()()(),Tl(201,"tr")(202,"td")(203,"code"),iN(204,"--font-weight-weekly"),sg()(),Tl(205,"td"),iN(206,"Peso da fonte utilizada nas c\xE9lulas semanais"),sg(),Tl(207,"td")(208,"code"),iN(209,"var(--font-weight-bold)"),sg()()(),Tl(210,"tr")(211,"td")(212,"strong"),iN(213,"Days cells"),sg()(),Gl(214,"td")(215,"td"),sg(),Tl(216,"tr")(217,"td")(218,"code"),iN(219,"--font-weight-days"),sg()(),Tl(220,"td"),iN(221,"Peso da fonte utilizada nas c\xE9lulas de dias"),sg(),Tl(222,"td")(223,"code"),iN(224,"var(--font-weight-normal)"),sg()()(),Tl(225,"tr")(226,"td")(227,"code"),iN(228,"--text-color"),sg()(),Tl(229,"td"),iN(230,"Cor da fonte utilizada nas c\xE9lulas de dias"),sg(),Tl(231,"td")(232,"code"),iN(233,"var(--color-neutral-dark-90)"),sg()()(),Tl(234,"tr")(235,"td")(236,"code"),iN(237,"--border-radius-days"),sg()(),Tl(238,"td"),iN(239,"Raio da borda"),sg(),Tl(240,"td")(241,"code"),iN(242,"var(--border-radius-md)"),sg()()(),Tl(243,"tr")(244,"td")(245,"code"),iN(246,"--border-width-days"),sg()(),Tl(247,"td"),iN(248,"Largura da borda"),sg(),Tl(249,"td")(250,"code"),iN(251,"var(--border-width-sm)"),sg()()(),Tl(252,"tr")(253,"td")(254,"code"),iN(255,"--day-cell-transition-duration"),sg()(),Tl(256,"td"),iN(257,"Dura\xE7\xE3o da transi\xE7\xE3o"),sg(),Tl(258,"td")(259,"code"),iN(260,"var(--duration-extra-fast)"),sg()()(),Tl(261,"tr")(262,"td")(263,"code"),iN(264,"--day-cell-transition-property"),sg()(),Tl(265,"td"),iN(266,"Atributo da transi\xE7\xE3o"),sg(),Tl(267,"td")(268,"code"),iN(269,"all"),sg()()(),Tl(270,"tr")(271,"td")(272,"code"),iN(273,"--day-cell-transition-timing"),sg()(),Tl(274,"td"),iN(275,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),sg(),Tl(276,"td")(277,"code"),iN(278,"var(--timing-standart)"),sg()()(),Tl(279,"tr")(280,"td")(281,"strong"),iN(282,"Today"),sg()(),Gl(283,"td")(284,"td"),sg(),Tl(285,"tr")(286,"td")(287,"code"),iN(288,"--font-weight-today"),sg()(),Tl(289,"td"),iN(290,"Peso da fonte utilizada na c\xE9lula de hoje"),sg(),Tl(291,"td")(292,"code"),iN(293,"var(--font-weight-bold)"),sg()()(),Tl(294,"tr")(295,"td")(296,"code"),iN(297,"--text-color-today"),sg()(),Tl(298,"td"),iN(299,"Cor da fonte utilizada na c\xE9lula de hoje"),sg(),Tl(300,"td")(301,"code"),iN(302,"var(--color-action-default)"),sg()()(),Tl(303,"tr")(304,"td")(305,"strong"),iN(306,"Focused"),sg()(),Gl(307,"td")(308,"td"),sg(),Tl(309,"tr")(310,"td")(311,"code"),iN(312,"--outline-color-focused"),sg()(),Tl(313,"td"),iN(314,"Cor do outline do estado de focus"),sg(),Tl(315,"td")(316,"code"),iN(317,"var(--color-action-focus)"),sg()()(),Tl(318,"tr")(319,"td")(320,"strong"),iN(321,"Hover"),sg()(),Gl(322,"td")(323,"td"),sg(),Tl(324,"tr")(325,"td")(326,"code"),iN(327,"--color-hover"),sg()(),Tl(328,"td"),iN(329,"Cor de fundo das c\xE9lulas ao passar o mouse"),sg(),Tl(330,"td")(331,"code"),iN(332,"var(--color-neutral-light-00)"),sg()()(),Tl(333,"tr")(334,"td")(335,"code"),iN(336,"--text-color-hover"),sg()(),Tl(337,"td"),iN(338,"Cor da fonte utilizada nas c\xE9lulas ao passar o mouse"),sg(),Tl(339,"td")(340,"code"),iN(341,"var(--color-action-hover)"),sg()()(),Tl(342,"tr")(343,"td")(344,"strong"),iN(345,"Interval"),sg()(),Gl(346,"td")(347,"td"),sg(),Tl(348,"tr")(349,"td")(350,"code"),iN(351,"--color-interval"),sg()(),Tl(352,"td"),iN(353,"Cor de fundo das c\xE9lulas de intervalo"),sg(),Tl(354,"td")(355,"code"),iN(356,"var(--color-brand-01-lighter)"),sg()()(),Tl(357,"tr")(358,"td")(359,"code"),iN(360,"--text-color-interval"),sg()(),Tl(361,"td"),iN(362,"Cor da fonte utilizada nas c\xE9lulas de intervalo"),sg(),Tl(363,"td")(364,"code"),iN(365,"var(--color-action-default)"),sg()()(),Tl(366,"tr")(367,"td")(368,"strong"),iN(369,"Next Month"),sg()(),Gl(370,"td")(371,"td"),sg(),Tl(372,"tr")(373,"td")(374,"code"),iN(375,"--text-color-next"),sg()(),Tl(376,"td"),iN(377,"Cor da fonte utilizada nas c\xE9lulas do pr\xF3ximo m\xEAs"),sg(),Tl(378,"td")(379,"code"),iN(380,"var(--color-action-default)"),sg()()(),Tl(381,"tr")(382,"td")(383,"strong"),iN(384,"Disabled"),sg()(),Gl(385,"td")(386,"td"),sg(),Tl(387,"tr")(388,"td")(389,"code"),iN(390,"--border-disabled"),sg()(),Tl(391,"td"),iN(392,"Cor da borda das c\xE9lulas desabilitadas"),sg(),Tl(393,"td")(394,"code"),iN(395,"var(--color-action-disabled)"),sg()()(),Tl(396,"tr")(397,"td")(398,"code"),iN(399,"--text-color-disabled"),sg()(),Tl(400,"td"),iN(401,"Cor da fonte utilizada nas c\xE9lulas desabilitadas"),sg(),Tl(402,"td")(403,"code"),iN(404,"var(--color-action-disabled)"),sg()()(),Tl(405,"tr")(406,"td")(407,"strong"),iN(408,"Selected"),sg()(),Gl(409,"td")(410,"td"),sg(),Tl(411,"tr")(412,"td")(413,"code"),iN(414,"--color-selected"),sg()(),Tl(415,"td"),iN(416,"Cor de fundo das c\xE9lulas selecionadas"),sg(),Tl(417,"td")(418,"code"),iN(419,"var(--color-neutral-light-00)"),sg()()(),Tl(420,"tr")(421,"td")(422,"code"),iN(423,"--text-color-selected"),sg()(),Tl(424,"td"),iN(425,"Cor da fonte utilizada nas c\xE9lulas selecionadas"),sg(),Tl(426,"td")(427,"code"),iN(428,"var(--color-action-default)"),sg()()()()()(),Tl(429,"div",8)(430,"h4",9),iN(431,"Seletor"),sg(),Tl(432,"pre",10),iN(433,`<po-calendar
    (p-change)="EventEmitter"
    (p-change-month-year)="EventEmitter"
    p-locale="string"
    p-max-date="any"
    p-min-date="any"
    p-mode="PoCalendarMode"
    p-range-preset-options="Array<PoCalendarRangePreset>"
    p-range-presets="boolean | Array<string>"
    p-range-presets-order="'asc' | 'desc'"
    p-size="string" >
</po-calendar>
`),sg()(),Tl(434,"h4",11),iN(435,"Propriedades"),sg(),Tl(436,"table",12)(437,"tr",13)(438,"th",14),iN(439,"Nome"),sg(),Tl(440,"th",14),iN(441,"Tipo"),sg(),Tl(442,"th",14),iN(443,"Padr\xE3o"),sg(),Tl(444,"th",14),iN(445,"Descri\xE7\xE3o"),sg()(),Tl(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),iN(450," (p-change)"),Gl(451,"br"),sg()()(),Tl(452,"td",19)(453,"code",20),iN(454,"EventEmitter"),sg()(),Tl(455,"td",21),iN(456,"-"),sg(),Tl(457,"td",22)(458,"em")(459,"strong"),iN(460,"(opcional)"),sg()(),Tl(461,"p"),iN(462,`Evento disparado ao alterar o valor do model.
Em modo padr\xE3o, retorna uma `),Tl(463,"code"),iN(464,"string"),sg(),iN(465," no formato ISO 8601 ("),Tl(466,"code"),iN(467,"yyyy-mm-dd"),sg(),iN(468,`).
Em modo `),Tl(469,"em"),iN(470,"range"),sg(),iN(471,", retorna um objeto contendo as datas de in\xEDcio ("),Tl(472,"code"),iN(473,"start"),sg(),iN(474,") e fim ("),Tl(475,"code"),iN(476,"end"),sg(),iN(477,")."),sg()()(),Tl(478,"tr",15)(479,"td",16)(480,"div",17)(481,"span",18),iN(482," (p-change-month-year)"),Gl(483,"br"),sg()()(),Tl(484,"td",19)(485,"code",20),iN(486,"EventEmitter"),sg()(),Tl(487,"td",21),iN(488,"-"),sg(),Tl(489,"td",22)(490,"p"),iN(491,`Evento disparado ao alterar o m\xEAs ou o ano no cabe\xE7alho do calend\xE1rio.
Retorna um objeto contendo os valores num\xE9ricos:`),sg(),Tl(492,"ul")(493,"li")(494,"code"),iN(495,"month"),sg(),iN(496,": M\xEAs selecionado (variando de 1 a 12)."),sg(),Tl(497,"li")(498,"code"),iN(499,"year"),sg(),iN(500,": Ano selecionado."),sg()()()(),Tl(501,"tr",15)(502,"td",16)(503,"div",23)(504,"span",24),iN(505," p-locale"),Gl(506,"br"),sg()()(),Tl(507,"td",19)(508,"code",25),iN(509,"string"),sg()(),Tl(510,"td",21),iN(511,"-"),sg(),Tl(512,"td",22)(513,"em")(514,"strong"),iN(515,"(opcional)"),sg()(),Tl(516,"p"),iN(517,"Idioma do componente."),sg(),Tl(518,"blockquote")(519,"p"),iN(520,"O locale padr\xE3o ser\xE1 recuperado com base no "),Tl(521,"a",26)(522,"code"),iN(523,"PoI18nService"),sg()(),iN(524," ou "),Tl(525,"em"),iN(526,"browser"),sg(),iN(527,"."),sg()()()(),Tl(528,"tr",15)(529,"td",16)(530,"div",23)(531,"span",24),iN(532," p-max-date"),Gl(533,"br"),sg()()(),Tl(534,"td",19)(535,"code",27),iN(536,"any"),sg()(),Tl(537,"td",21),iN(538,"-"),sg(),Tl(539,"td",22)(540,"em")(541,"strong"),iN(542,"(opcional)"),sg()(),Tl(543,"p"),iN(544,`Define a data m\xE1xima permitida para sele\xE7\xE3o. As datas posteriores ao limite definido permanecem vis\xEDveis, mas ficam
desabilitadas para clique.`),sg(),Tl(545,"p"),iN(546,"Aceita os seguintes formatos:"),sg(),Tl(547,"ul")(548,"li")(549,"p")(550,"strong"),iN(551,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),sg()(),Tl(552,"pre")(553,"code"),iN(554,`this.date = '2017-11-28T00:00:00-02:00';
`),sg()()(),Tl(555,"li")(556,"p")(557,"strong"),iN(558,"Data (E8601DAw.): yyyy-mm-dd"),sg()(),Tl(559,"pre")(560,"code"),iN(561,`this.date = '2017-11-28';
`),sg()()(),Tl(562,"li")(563,"p")(564,"strong"),iN(565,"JavaScript Date Object:"),sg()(),Tl(566,"pre")(567,"code"),iN(568,`this.date = new Date(2017, 10, 28);
`),sg()()()()()(),Tl(569,"tr",15)(570,"td",16)(571,"div",23)(572,"span",24),iN(573," p-min-date"),Gl(574,"br"),sg()()(),Tl(575,"td",19)(576,"code",27),iN(577,"any"),sg()(),Tl(578,"td",21),iN(579,"-"),sg(),Tl(580,"td",22)(581,"em")(582,"strong"),iN(583,"(opcional)"),sg()(),Tl(584,"p"),iN(585,"Define a data m\xEDnima para sele\xE7\xE3o. As datas anteriores ao limite permanecem vis\xEDveis, mas desabilitadas para clique."),sg(),Tl(586,"p"),iN(587,"Aceita os seguintes formatos:"),sg(),Tl(588,"ul")(589,"li")(590,"p")(591,"strong"),iN(592,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),sg()(),Tl(593,"pre")(594,"code"),iN(595,`this.date = '2017-11-28T00:00:00-02:00';
`),sg()()(),Tl(596,"li")(597,"p")(598,"strong"),iN(599,"Data (E8601DAw.): yyyy-mm-dd"),sg()(),Tl(600,"pre")(601,"code"),iN(602,`this.date = '2017-11-28';
`),sg()()(),Tl(603,"li")(604,"p")(605,"strong"),iN(606,"JavaScript Date Object:"),sg()(),Tl(607,"pre")(608,"code"),iN(609,`this.date = new Date(2017, 10, 28);
`),sg()()()()()(),Tl(610,"tr",15)(611,"td",16)(612,"div",23)(613,"span",24),iN(614," p-mode"),Gl(615,"br"),sg()()(),Tl(616,"td",19)(617,"code",28),iN(618,"PoCalendarMode"),sg()(),Tl(619,"td",21),iN(620,"-"),sg(),Tl(621,"td",22)(622,"em")(623,"strong"),iN(624,"(opcional)"),sg()(),Tl(625,"p"),iN(626,`Define o modo de exibi\xE7\xE3o do calend\xE1rio.
Caso n\xE3o seja informado, o componente operar\xE1 no modo padr\xE3o de sele\xE7\xE3o \xFAnica.
Para permitir a sele\xE7\xE3o de um intervalo de datas, deve ser utilizado o valor `),Tl(627,"code"),iN(628,"PoCalendarMode.Range"),sg(),iN(629,"."),sg()()(),Tl(630,"tr",15)(631,"td",16)(632,"div",23)(633,"span",24),iN(634," p-range-preset-options"),Gl(635,"br"),sg()()(),Tl(636,"td",19)(637,"code",29),iN(638,"Array<PoCalendarRangePreset>"),sg()(),Tl(639,"td",21),iN(640,"-"),sg(),Tl(641,"td",22)(642,"em")(643,"strong"),iN(644,"(opcional)"),sg()(),Tl(645,"p"),iN(646,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio em modo "),Tl(647,"em"),iN(648,"range"),sg(),iN(649,"."),sg(),Tl(650,"p"),iN(651,"Quando informado sem "),Tl(652,"code"),iN(653,"p-range-presets"),sg(),iN(654,`, exibe apenas os presets customizados.
Quando informado junto com `),Tl(655,"code"),iN(656,"p-range-presets"),sg(),iN(657,` habilitado, os presets customizados ser\xE3o exibidos junto aos presets padr\xE3o,
ordenados automaticamente por temporalidade com base na data in\xEDcio (Futuro \u2192 Presente \u2192 Passado).`),sg(),Tl(658,"p"),iN(659,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Tl(660,"code"),iN(661,"PoCalendarRangePreset"),sg(),iN(662,"."),sg()()(),Tl(663,"tr",15)(664,"td",16)(665,"div",23)(666,"span",24),iN(667," p-range-presets"),Gl(668,"br"),sg()()(),Tl(669,"td",19)(670,"code",30),iN(671,"boolean "),sg(),Tl(672,"code",31),iN(673," Array<string>"),sg()(),Tl(674,"td",21)(675,"p")(676,"code"),iN(677,"false"),sg()()(),Tl(678,"td",22)(679,"em")(680,"strong"),iN(681,"(opcional)"),sg()(),Tl(682,"p"),iN(683,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio em modo "),Tl(684,"em"),iN(685,"range"),sg(),iN(686,"."),sg(),Tl(687,"p"),iN(688,"Aceita os seguintes valores:"),sg(),Tl(689,"ul")(690,"li")(691,"code"),iN(692,"true"),sg(),iN(693,": exibe todos os presets padr\xE3o (Amanh\xE3, Hoje, Ontem, \xDAltimos 7 dias, \xDAltimos 14 dias, \xDAltimos 30 dias, \xDAltimos 3 meses, \xDAltimos 6 meses)."),sg(),Tl(694,"li")(695,"code"),iN(696,"false"),sg(),iN(697,": n\xE3o exibe os presets padr\xE3o."),sg(),Tl(698,"li")(699,"code"),iN(700,"Array<string>"),sg(),iN(701,`: exibe apenas os presets padr\xE3o cujos labels estejam no array informado.
O preset "today" \xE9 obrigat\xF3rio e ser\xE1 inclu\xEDdo automaticamente mesmo que n\xE3o esteja no array.`),sg()(),Tl(702,"p"),iN(703,"Caso "),Tl(704,"code"),iN(705,"p-range-preset-options"),sg(),iN(706,` tamb\xE9m seja informado, os presets customizados ser\xE3o exibidos junto aos presets padr\xE3o,
ordenados automaticamente por temporalidade com base na data in\xEDcio (Futuro \u2192 Presente \u2192 Passado).`),sg()()(),Tl(707,"tr",15)(708,"td",16)(709,"div",23)(710,"span",24),iN(711," p-range-presets-order"),Gl(712,"br"),sg()()(),Tl(713,"td",19)(714,"code",32),iN(715,"'asc' "),sg(),Tl(716,"code",33),iN(717," 'desc'"),sg()(),Tl(718,"td",21)(719,"p")(720,"code"),iN(721,"asc"),sg()()(),Tl(722,"td",22)(723,"em")(724,"strong"),iN(725,"(opcional)"),sg()(),Tl(726,"p"),iN(727,"Define a ordena\xE7\xE3o dos presets na lista."),sg(),Tl(728,"p"),iN(729,"Valores aceitos:"),sg(),Tl(730,"ul")(731,"li")(732,"code"),iN(733,"'asc'"),sg(),iN(734," (padr\xE3o): presets mais pr\xF3ximos de hoje aparecem primeiro."),sg(),Tl(735,"li")(736,"code"),iN(737,"'desc'"),sg(),iN(738,": presets mais distantes de hoje aparecem primeiro."),sg()(),Tl(739,"p"),iN(740,"A ordena\xE7\xE3o \xE9 aplicada dentro de cada grupo de temporalidade com base na data in\xEDcio (Futuro \u2192 Presente \u2192 Passado)."),sg()()(),Tl(741,"tr",15)(742,"td",16)(743,"div",23)(744,"span",24),iN(745," p-size"),Gl(746,"br"),sg()()(),Tl(747,"td",19)(748,"code",25),iN(749,"string"),sg()(),Tl(750,"td",21)(751,"p")(752,"code"),iN(753,"medium"),sg()()(),Tl(754,"td",22)(755,"em")(756,"strong"),iN(757,"(opcional)"),sg()(),Tl(758,"p"),iN(759,"Define o tamanho do componente."),sg(),Tl(760,"blockquote")(761,"p"),iN(762,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(763,"code"),iN(764,"medium"),sg(),iN(765,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(766,"a",34),iN(767,"po-theme"),sg(),iN(768,"."),sg()()()()(),Tl(769,"h3"),iN(770,"Enums"),sg(),Tl(771,"h4",4)(772,"code",5),iN(773,"PoCalendarMode"),sg()(),Tl(774,"div",2)(775,"p"),iN(776,"Define os modos de exibi\xE7\xE3o do "),Tl(777,"code"),iN(778,"po-calendar"),sg(),iN(779,"."),sg()(),Tl(780,"h4",11),iN(781,"Propriedades"),sg(),Tl(782,"table",12)(783,"tr",13)(784,"th",14),iN(785,"Nome"),sg(),Tl(786,"th",14),iN(787,"Descri\xE7\xE3o"),sg()(),Tl(788,"tr",15)(789,"td",16)(790,"div",23)(791,"span",24),iN(792," Range"),Gl(793,"br"),sg()()(),Tl(794,"td",22)(795,"p"),iN(796,"Modo de sele\xE7\xE3o de intervalo (data inicial e final)."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Calendar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Gl(3,"sample-po-calendar-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Gl(5,"sample-po-calendar-basic-view")(6,"sample-po-calendar-range-presets-view")(7,"sample-po-calendar-labs-view")(8,"sample-po-calendar-ticket-sales-view"),sg()()()),i&2&&(nw("p-actions",a.actions),Vp(2),nw("p-active",a.activeTab==="doc"),Vp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[lNe,Wme,jme,de,me,ce,ge,Ee],encapsulation:2,changeDetection:1})}return o})();var Ae=[{path:"",component:he}],Se=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[DL.forChild(Ae),DL]})}return o})();var pt=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,Se]})}return o})();export{pt as DocPoCalendarModule};