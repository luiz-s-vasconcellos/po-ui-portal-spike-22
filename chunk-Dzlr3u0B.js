import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,r as rb,W,w,cI as C3,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,bH as E3,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,bC as _3,b7 as A3,X as we,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var Ce=()=>({value:"disclaimer"}),Ee=a=>[a],me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(o,n){o&1&&Wl(0,"po-disclaimer-group",0),o&2&&tw("p-disclaimers",dN(2,Ee,uN(1,Ce)));},dependencies:[C3],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Disclaimer Group Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-disclaimer-group-basic"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore();}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0};}changeEvent(l){this.event=l;}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event="";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs"]],standalone:false,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let s=Ex();Sl(0,"po-disclaimer-group",2),ht("p-change",function(){return n.changeEvent("p-change")}),sg(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4),sg(),Wl(4,"po-divider"),Sl(5,"form",null,0)(7,"div",3)(8,"po-input",5),Ew("ngModelChange",function(d){return Xy(s),tN(n.disclaimer.label,d)||(n.disclaimer.label=d),Qy(d)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(d){return Xy(s),tN(n.disclaimer.value,d)||(n.disclaimer.value=d),Qy(d)}),sg(),JA(),sg(),Sl(10,"div",3)(11,"po-input",7),Ew("ngModelChange",function(d){return Xy(s),tN(n.disclaimer.property,d)||(n.disclaimer.property=d),Qy(d)}),sg(),JA(),Sl(12,"po-switch",8),Ew("ngModelChange",function(d){return Xy(s),tN(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),Qy(d)}),sg(),JA(),sg(),Sl(13,"div",3)(14,"po-button",9),ht("p-click",function(){return n.addDisclaimer()}),sg()()(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"div",3)(19,"po-input",10),Ew("ngModelChange",function(d){return Xy(s),tN(n.title,d)||(n.title=d),Qy(d)}),sg(),JA(),Sl(20,"po-checkbox-group",11),Ew("ngModelChange",function(d){return Xy(s),tN(n.properties,d)||(n.properties=d),Qy(d)}),sg(),JA(),sg(),Sl(21,"div",3)(22,"po-button",12),ht("p-click",function(){Xy(s);let d=xx(6),ve=xx(17);return d.reset(),ve.reset(),Qy(n.restore())}),sg()()();}if(o&2){let s=xx(6);tw("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),Vp(3),tw("p-value",n.event),Vp(5),Dw("ngModel",n.disclaimer.label),t0(),Vp(),Dw("ngModel",n.disclaimer.value),t0(),Vp(2),Dw("ngModel",n.disclaimer.property),t0(),Vp(),Dw("ngModel",n.disclaimer.hideClose),t0(),Vp(2),tw("p-disabled",s.invalid),Vp(5),Dw("ngModel",n.title),t0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,C3,mv,x3,F3,E3,Qhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Disclaimer Group Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-disclaimer-group
  [p-disclaimers]="disclaimers"
  [p-hide-remove-all]="$safeNavigationMigration(properties?.includes('hideRemoveAll'))"
  [p-title]="title"
  (p-change)="changeEvent('p-change')"
>
</po-disclaimer-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #disclaimerForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimer.label" p-label="Disclaimer Label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimer.value"
      p-label="Disclaimer Value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerProperty" [(ngModel)]="disclaimer.property" p-label="Disclaimer Property">
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimer.hideClose"
      p-label="Disclaimer Hide Close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Disclaimer"
      [p-disabled]="disclaimerForm.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="disclaimerForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDisclaimer } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-disclaimer-group-labs',
  templateUrl: './sample-po-disclaimer-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupLabsComponent implements OnInit {
  disclaimer: PoDisclaimer;
  disclaimers: Array<PoDisclaimer>;
  event: string;
  properties: Array<string> = [];
  title: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideRemoveAll', label: 'Hide remove all' }];

  ngOnInit() {
    this.restore();
  }

  addDisclaimer() {
    this.disclaimers = [...this.disclaimers, this.disclaimer];

    this.disclaimer = { value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.disclaimer = { value: undefined };
    this.disclaimers = [];

    this.event = '';
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-disclaimer-group-labs"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return a})();var q=(()=>{class a{http=f(rb);getClimates(){return [{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return [{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(W(l=>l.results))}getTerrains(){return [{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items];}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains();}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n];}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate");}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0);}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n);}resetFilters(){this.filteredItems=[...this.items||[]];}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:false,features:[we([q])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(o,n){o&1&&(Sl(0,"div",0)(1,"po-input",1),Ew("ngModelChange",function(p){return tN(n.name,p)||(n.name=p),p}),ht("p-change",function(){return n.addFilter(n.name,"name")}),sg(),JA(),Sl(2,"po-combo",2),Ew("ngModelChange",function(p){return tN(n.climate,p)||(n.climate=p),p}),ht("p-change",function(){return n.addFilter(n.climate,"climate")}),sg(),JA(),Sl(3,"po-combo",3),Ew("ngModelChange",function(p){return tN(n.terrain,p)||(n.terrain=p),p}),ht("p-change",function(){return n.addFilter(n.terrain,"terrain")}),sg(),JA(),Sl(4,"po-disclaimer-group",4),ht("p-change",function(){return n.changeFilters(n.filters)}),sg()(),Wl(5,"po-divider"),Sl(6,"div",0),Wl(7,"po-table",5),sg()),o&2&&(Vp(),Dw("ngModel",n.name),t0(),Vp(),Dw("ngModel",n.climate),tw("p-options",n.climates),t0(),Vp(),Dw("ngModel",n.terrain),tw("p-options",n.terrains),t0(),Vp(),tw("p-disclaimers",n.filters),Vp(3),tw("p-columns",n.columns)("p-items",n.filteredItems)("p-hide-table-search",false));},dependencies:[K9,Dk,C3,mv,_3,F3,A3],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Disclaimer Group - Star Wars Planets"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-input
    class="po-md-4"
    name="name"
    [(ngModel)]="name"
    p-help="Contains planet name"
    p-label="Planet Name"
    (p-change)="addFilter(name, 'name')"
  >
  </po-input>

  <po-combo
    class="po-md-4"
    name="climate"
    [(ngModel)]="climate"
    p-help="Planet climate"
    p-label="Climate"
    [p-options]="climates"
    (p-change)="addFilter(climate, 'climate')"
  >
  </po-combo>

  <po-combo
    class="po-md-4"
    [(ngModel)]="terrain"
    name="terrain"
    p-help="Planet terrain"
    p-label="Terrain"
    [p-options]="terrains"
    (p-change)="addFilter(terrain, 'terrain')"
  >
  </po-combo>

  <po-disclaimer-group [p-disclaimers]="filters" (p-change)="changeFilters(filters)"> </po-disclaimer-group>
</div>

<po-divider />

<div class="po-row">
  <po-table class="po-md-12" [p-columns]="columns" [p-items]="filteredItems" [p-hide-table-search]="false"> </po-table>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoComboOption, PoDisclaimer, PoTableColumn } from '@po-ui/ng-components';

import { SamplePoDisclaimerGroupSwPlanetsService } from './sample-po-disclaimer-group-sw-planets.service';

@Component({
  selector: 'sample-po-disclaimer-group-sw-planets',
  templateUrl: './sample-po-disclaimer-group-sw-planets.component.html',
  providers: [SamplePoDisclaimerGroupSwPlanetsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupSwPlanetsComponent implements OnInit {
  disclaimerGroupSwPlanetsService = inject(SamplePoDisclaimerGroupSwPlanetsService);

  climate: string;
  columns: Array<PoTableColumn>;
  filteredItems: Array<any> = [];
  filters: Array<PoDisclaimer> = [];
  items: Array<any>;
  name: string;
  terrain: string;

  public climates: Array<PoComboOption>;
  public terrains: Array<PoComboOption>;

  ngOnInit() {
    this.disclaimerGroupSwPlanetsService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = [...this.items];
    });
    this.columns = this.disclaimerGroupSwPlanetsService.getColumns();
    this.climates = this.disclaimerGroupSwPlanetsService.getClimates();
    this.terrains = this.disclaimerGroupSwPlanetsService.getTerrains();
  }

  addFilter(value: any, property: string) {
    let filter = this.filters.find(item => item.property === property);

    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;
    this.filters = [...this.filters, filter];
  }

  changeFilters(filters: Array<PoDisclaimer>) {
    filters.length ? this.filter(filters) : this.resetFilters();
    this.clearFieldsIfNoFilter('name', 'terrain', 'climate');
  }

  private clearFieldsIfNoFilter(...fields: Array<string>) {
    const fieldHaveNoFilter = field => !this.filters.some(filter => filter.property === field);

    const fieldsWithoutFilter = fields.filter(field => this[field] && fieldHaveNoFilter(field));

    fieldsWithoutFilter.forEach(field => (this[field] = undefined));
  }

  private filter(filters: Array<PoDisclaimer>) {
    const filterCondition = (filter, item) =>
      item[filter.property].toLocaleLowerCase().includes(filter.value.toLocaleLowerCase());
    const filterItems = item => filters.every(filter => filterCondition(filter, item));

    this.filteredItems = this.items.filter(filterItems);
  }

  private resetFilters() {
    this.filteredItems = [...(this.items || [])];
  }
}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoComboOption, PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDisclaimerGroupSwPlanetsService {
  private http = inject(HttpClient);

  getClimates(): Array<PoComboOption> {
    return [
      { value: 'arid', label: 'Arid' },
      { value: 'frozen', label: 'Frozen' },
      { value: 'murky', label: 'Murky' },
      { value: 'temperate', label: 'Temperate' },
      { value: 'tropical', label: 'Tropical' }
    ];
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Planet Name' },
      { property: 'climate', label: 'Climate' },
      { property: 'terrain', label: 'Terrain' },
      { property: 'surface_water', label: 'Surface Water' },
      { property: 'gravity', label: 'Gravity' },
      { property: 'population', label: 'Population', type: 'number' }
    ];
  }

  getItems(): Observable<Array<any>> {
    return this.http.get('https://swapi.dev/api/planets/').pipe(map((response: any) => response.results));
  }

  getTerrains(): Array<PoComboOption> {
    return [
      { value: 'barren', label: 'Barren' },
      { value: 'cityscape', label: 'Cityscape' },
      { value: 'desert', label: 'Desert' },
      { value: 'forests', label: 'Forests' },
      { value: 'gas giant', label: 'Gas giant' },
      { value: 'grasslands', label: 'Grasslands' },
      { value: 'grassy hills', label: 'Grassy hills' },
      { value: 'ice caves', label: 'Ice caves' },
      { value: 'jungles', label: 'Jungles' },
      { value: 'lakes', label: 'Lakes' },
      { value: 'mountain ranges', label: 'Mountain ranges' },
      { value: 'mountains', label: 'Mountains' },
      { value: 'ocean', label: 'Ocean' },
      { value: 'rainforests', label: 'Rainforests' },
      { value: 'rock', label: 'Rock' },
      { value: 'swamp', label: 'Swamp' },
      { value: 'tundra', label: 'Tundra' }
    ];
  }
}
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-disclaimer-group-sw-planets"),sg(),Wl(27,"hr")),o&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-doc"]],standalone:false,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(o,n){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-disclaimer-group."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoDisclaimerGroupComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-disclaimer-group"),sg(),Jx(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),sg(),Sl(18,"p"),Jx(19,"\xC0 partir de dois "),Sl(20,"em"),Jx(21,"disclaimers"),sg(),Jx(22," com o bot\xE3o "),Sl(23,"strong"),Jx(24,"fechar"),sg(),Jx(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Sl(26,"em"),Jx(27,"disclaimer"),sg(),Jx(28," que possibilita "),Sl(29,"strong"),Jx(30,"remover todos"),sg(),Jx(31,", mas que tamb\xE9m pode ser desabilitado."),sg(),Sl(32,"p"),Jx(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Sl(34,"em"),Jx(35,"disclaimers"),sg(),Jx(36," atrav\xE9s do teclado utilizando a tecla "),Sl(37,"em"),Jx(38,"tab"),sg(),Jx(39," e, para remo\xE7\xE3o do "),Sl(40,"em"),Jx(41,"disclaimer"),sg(),Jx(42,` selecionado,
basta pressionar a tecla `),Sl(43,"em"),Jx(44,"enter"),sg(),Jx(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),Sl(46,"code"),Jx(47,"hideClose"),sg(),Jx(48," estiver habilitada."),sg(),Sl(49,"blockquote")(50,"p"),Jx(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),Sl(52,"a",6),Jx(53,"po-page-list"),sg(),Jx(54,". "),sg()()(),Sl(55,"div",7)(56,"h4",8),Jx(57,"Seletor"),sg(),Sl(58,"pre",9),Jx(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),sg()(),Sl(60,"h4",10),Jx(61,"Propriedades"),sg(),Sl(62,"table",11)(63,"tr",12)(64,"th",13),Jx(65,"Nome"),sg(),Sl(66,"th",13),Jx(67,"Tipo"),sg(),Sl(68,"th",13),Jx(69,"Padr\xE3o"),sg(),Sl(70,"th",13),Jx(71,"Descri\xE7\xE3o"),sg()(),Sl(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),Jx(76," (p-change)"),Wl(77,"br"),sg()()(),Sl(78,"td",18)(79,"code",19),Jx(80,"EventEmitter"),sg()(),Sl(81,"td",20),Jx(82,"-"),sg(),Sl(83,"td",21)(84,"em")(85,"strong"),Jx(86,"(opcional)"),sg()(),Sl(87,"p"),Jx(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Sl(89,"em"),Jx(90,"disclaimers"),sg(),Jx(91," for modificada."),sg()()(),Sl(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),Jx(96," p-disclaimers"),Wl(97,"br"),sg()()(),Sl(98,"td",18)(99,"code",24),Jx(100,"PoDisclaimer[]"),sg()(),Sl(101,"td",20),Jx(102,"-"),sg(),Sl(103,"td",21)(104,"p"),Jx(105,"Lista de "),Sl(106,"em"),Jx(107,"disclaimers"),sg(),Jx(108,"."),sg(),Sl(109,"p"),Jx(110,"Para que a lista de "),Sl(111,"em"),Jx(112,"disclaimers"),sg(),Jx(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Sl(114,"code"),Jx(115,"PoDisclaimer"),sg(),Jx(116,"."),sg(),Sl(117,"p"),Jx(118,"Exemplo adicionando um "),Sl(119,"em"),Jx(120,"disclaimer"),sg(),Jx(121," no array:"),sg(),Sl(122,"pre")(123,"code"),Jx(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),sg()(),Sl(125,"p"),Jx(126,"ou"),sg(),Sl(127,"pre")(128,"code"),Jx(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),sg()()()(),Sl(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),Jx(134," p-hide-remove-all"),Wl(135,"br"),sg()()(),Sl(136,"td",18)(137,"code",25),Jx(138,"boolean"),sg()(),Sl(139,"td",20)(140,"p")(141,"code"),Jx(142,"false"),sg()()(),Sl(143,"td",21)(144,"em")(145,"strong"),Jx(146,"(opcional)"),sg()(),Sl(147,"p"),Jx(148,"Oculta o bot\xE3o para remover todos os "),Sl(149,"em"),Jx(150,"disclaimers"),sg(),Jx(151," do grupo."),sg(),Sl(152,"blockquote")(153,"p"),Jx(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Sl(155,"em"),Jx(156,"disclaimers"),sg(),Jx(157," com a op\xE7\xE3o "),Sl(158,"code"),Jx(159,"hideClose"),sg(),Jx(160," habilitada."),sg()()()(),Sl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),Jx(165," (p-remove)"),Wl(166,"br"),sg()()(),Sl(167,"td",18)(168,"code",19),Jx(169,"EventEmitter"),sg()(),Sl(170,"td",20),Jx(171,"-"),sg(),Sl(172,"td",21)(173,"em")(174,"strong"),Jx(175,"(opcional)"),sg()(),Sl(176,"p"),Jx(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Sl(178,"em"),Jx(179,"disclaimer"),sg(),Jx(180," for removido da lista de "),Sl(181,"em"),Jx(182,"disclaimers"),sg(),Jx(183," pelo usu\xE1rio."),sg(),Sl(184,"p"),Jx(185,"Recebe como par\xE2metro um objeto conforme a interface "),Sl(186,"code"),Jx(187,"PoDisclaimerGroupRemoveAction"),sg(),Jx(188,"."),sg()()(),Sl(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),Jx(193," (p-remove-all)"),Wl(194,"br"),sg()()(),Sl(195,"td",18)(196,"code",19),Jx(197,"EventEmitter"),sg()(),Sl(198,"td",20),Jx(199,"-"),sg(),Sl(200,"td",21)(201,"em")(202,"strong"),Jx(203,"(opcional)"),sg()(),Sl(204,"p"),Jx(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Sl(206,"em"),Jx(207,"disclaimers"),sg(),Jx(208," forem removidos da lista de "),Sl(209,"em"),Jx(210,"disclaimers"),sg(),Jx(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),sg(),Sl(212,"p"),Jx(213,"Recebe como par\xE2metro uma lista contendo todos os "),Sl(214,"code"),Jx(215,"disclaimers"),sg(),Jx(216," removidos."),sg()()(),Sl(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),Jx(221," p-title"),Wl(222,"br"),sg()()(),Sl(223,"td",18)(224,"code",26),Jx(225,"string"),sg()(),Sl(226,"td",20),Jx(227,"-"),sg(),Sl(228,"td",21)(229,"em")(230,"strong"),Jx(231,"(opcional)"),sg()(),Sl(232,"p"),Jx(233,"T\xEDtulo do grupo de "),Sl(234,"em"),Jx(235,"disclaimers"),sg(),Jx(236,"."),sg()()()(),Sl(237,"h3"),Jx(238,"Interfaces"),sg(),Sl(239,"h4",27)(240,"code",5),Jx(241,"PoDisclaimer"),sg()(),Sl(242,"div",2)(243,"p"),Jx(244,"Interface que representa o objeto "),Sl(245,"code"),Jx(246,"po-disclaimer"),sg(),Jx(247,"."),sg()(),Sl(248,"h4",10),Jx(249,"Propriedades"),sg(),Sl(250,"table",11)(251,"tr",12)(252,"th",13),Jx(253,"Nome"),sg(),Sl(254,"th",13),Jx(255,"Tipo"),sg(),Sl(256,"th",13),Jx(257,"Descri\xE7\xE3o"),sg()(),Sl(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),Jx(262," hideClose"),Wl(263,"br"),sg()()(),Sl(264,"td",18)(265,"code",25),Jx(266,"boolean"),sg()(),Sl(267,"td",21)(268,"em")(269,"strong"),Jx(270,"(opcional)"),sg()(),Sl(271,"p"),Jx(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Sl(273,"em"),Jx(274,"disclaimer"),sg(),Jx(275,"."),sg()()(),Sl(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),Jx(280," label"),Wl(281,"br"),sg()()(),Sl(282,"td",18)(283,"code",26),Jx(284,"string"),sg()(),Sl(285,"td",21)(286,"em")(287,"strong"),Jx(288,"(opcional)"),sg()(),Sl(289,"p"),Jx(290,"Texto de exibi\xE7\xE3o do objeto."),sg()()(),Sl(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),Jx(295," property"),Wl(296,"br"),sg()()(),Sl(297,"td",18)(298,"code",26),Jx(299,"string"),sg()(),Sl(300,"td",21)(301,"em")(302,"strong"),Jx(303,"(opcional)"),sg()(),Sl(304,"p"),Jx(305,"Nome da propriedade vinculada ao objeto "),Sl(306,"em"),Jx(307,"disclaimer"),sg(),Jx(308,"."),sg()()(),Sl(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),Jx(313," value"),Wl(314,"br"),sg()()(),Sl(315,"td",18)(316,"code",28),Jx(317,"any"),sg()(),Sl(318,"td",21)(319,"p"),Jx(320,"Valor do objeto."),sg()()()(),Sl(321,"h4",27)(322,"code",5),Jx(323,"PoDisclaimerGroupRemoveAction"),sg()(),Sl(324,"div",2)(325,"p"),Jx(326,"Estrutura do objeto representando o estado dos "),Sl(327,"em"),Jx(328,"disclaimers"),sg(),Jx(329," ap\xF3s a remo\xE7\xE3o."),sg()(),Sl(330,"h4",10),Jx(331,"Propriedades"),sg(),Sl(332,"table",11)(333,"tr",12)(334,"th",13),Jx(335,"Nome"),sg(),Sl(336,"th",13),Jx(337,"Tipo"),sg(),Sl(338,"th",13),Jx(339,"Descri\xE7\xE3o"),sg()(),Sl(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),Jx(344," currentDisclaimers"),Wl(345,"br"),sg()()(),Sl(346,"td",18)(347,"code",29),Jx(348,"Array<PoDisclaimer>"),sg()(),Sl(349,"td",21)(350,"p"),Jx(351,"Lista com os "),Sl(352,"em"),Jx(353,"disclaimers"),sg(),Jx(354," atuais (restantes)."),sg()()(),Sl(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),Jx(359," removedDisclaimer"),Wl(360,"br"),sg()()(),Sl(361,"td",18)(362,"code",30),Jx(363,"PoDisclaimer"),sg()(),Sl(364,"td",21)(365,"p")(366,"em"),Jx(367,"Disclaimer"),sg(),Jx(368," que foi removido."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-disclaimer-group-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),sg()()()),o&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,de,ue,he,be],encapsulation:2})}return a})();var Ie=[{path:"",component:fe}],Se=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[pL.forChild(Ie),pL]})}return a})();var ct=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,Se]})}return a})();export{ct as DocPoDisclaimerGroupModule};