import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,K as KC,W,E,cc as Xo,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bd as na,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,b8 as $i,aR as ty,X as we$1,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ye=()=>({value:"disclaimer"}),Pe=o=>[o],de=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-disclaimer-group-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(a,n){a&1&&Ul(0,"po-disclaimer-group",0),a&2&&YE("p-disclaimers",Jx(2,Pe,Qx(1,ye)));},dependencies:[Xo],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Disclaimer Group Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-disclaimer-group-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,de],encapsulation:2})}return o})();var ge=(()=>{class o{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore();}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0};}changeEvent(l){this.event=l;}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event="";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-disclaimer-group-labs"]],standalone:false,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,n){if(a&1){let s=lx();wl(0,"po-disclaimer-group",2),ut("p-change",function(){return n.changeEvent("p-change")}),ng(),Ul(1,"po-divider"),wl(2,"div",3),Ul(3,"po-info",4),ng(),Ul(4,"po-divider"),wl(5,"form",null,0)(7,"div",3)(8,"po-input",5),pw("ngModelChange",function(d){return Qy(s),$x(n.disclaimer.label,d)||(n.disclaimer.label=d),Jy(d)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(d){return Qy(s),$x(n.disclaimer.value,d)||(n.disclaimer.value=d),Jy(d)}),ng(),$0(),ng(),wl(10,"div",3)(11,"po-input",7),pw("ngModelChange",function(d){return Qy(s),$x(n.disclaimer.property,d)||(n.disclaimer.property=d),Jy(d)}),ng(),$0(),wl(12,"po-switch",8),pw("ngModelChange",function(d){return Qy(s),$x(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),Jy(d)}),ng(),$0(),ng(),wl(13,"div",3)(14,"po-button",9),ut("p-click",function(){return n.addDisclaimer()}),ng()()(),Ul(15,"po-divider"),wl(16,"form",null,1)(18,"div",3)(19,"po-input",10),pw("ngModelChange",function(d){return Qy(s),$x(n.title,d)||(n.title=d),Jy(d)}),ng(),$0(),wl(20,"po-checkbox-group",11),pw("ngModelChange",function(d){return Qy(s),$x(n.properties,d)||(n.properties=d),Jy(d)}),ng(),$0(),ng(),wl(21,"div",3)(22,"po-button",12),ut("p-click",function(){Qy(s);let d=_x(6),Ee=_x(17);return d.reset(),Ee.reset(),Jy(n.restore())}),ng()()();}if(a&2){let s=_x(6);YE("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),Pp(3),YE("p-value",n.event),Pp(5),hw("ngModel",n.disclaimer.label),G0(),Pp(),hw("ngModel",n.disclaimer.value),G0(),Pp(2),hw("ngModel",n.disclaimer.property),G0(),Pp(),hw("ngModel",n.disclaimer.hideClose),G0(),Pp(2),YE("p-disabled",s.invalid),Pp(5),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe$1,Xo,di,ia,Yo,na,Vp],encapsulation:2,changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Disclaimer Group Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-disclaimer-group
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-disclaimer-group-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Fe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return o})();var R=(()=>{class o{http=f(KC);getClimates(){return [{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return [{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(W(l=>l.results))}getTerrains(){return [{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var be=(()=>{class o{disclaimerGroupSwPlanetsService=f(R);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items];}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains();}addFilter(l,a){let n=this.filters.find(s=>s.property===a);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:a},n.value=l,n.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,n];}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate");}clearFieldsIfNoFilter(...l){let a=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&a(s)).forEach(s=>this[s]=void 0);}filter(l){let a=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>a(p,s));this.filteredItems=this.items.filter(n);}resetFilters(){this.filteredItems=[...this.items||[]];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:false,features:[we$1([R])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(a,n){a&1&&(wl(0,"div",0)(1,"po-input",1),pw("ngModelChange",function(p){return $x(n.name,p)||(n.name=p),p}),ut("p-change",function(){return n.addFilter(n.name,"name")}),ng(),$0(),wl(2,"po-combo",2),pw("ngModelChange",function(p){return $x(n.climate,p)||(n.climate=p),p}),ut("p-change",function(){return n.addFilter(n.climate,"climate")}),ng(),$0(),wl(3,"po-combo",3),pw("ngModelChange",function(p){return $x(n.terrain,p)||(n.terrain=p),p}),ut("p-change",function(){return n.addFilter(n.terrain,"terrain")}),ng(),$0(),wl(4,"po-disclaimer-group",4),ut("p-change",function(){return n.changeFilters(n.filters)}),ng()(),Ul(5,"po-divider"),wl(6,"div",0),Ul(7,"po-table",5),ng()),a&2&&(Pp(),hw("ngModel",n.name),G0(),Pp(),hw("ngModel",n.climate),YE("p-options",n.climates),G0(),Pp(),hw("ngModel",n.terrain),YE("p-options",n.terrains),G0(),Pp(),YE("p-disclaimers",n.filters),Pp(3),YE("p-columns",n.columns)("p-items",n.filteredItems)("p-hide-table-search",false));},dependencies:[iY,ck,Xo,di,$i,Yo,ty],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Disclaimer Group - Star Wars Planets"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable, inject } from '@angular/core';
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-disclaimer-group-sw-planets"),ng(),Ul(27,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-disclaimer-group-doc"]],standalone:false,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(a,n){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-disclaimer-group."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoDisclaimerGroupComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-disclaimer-group"),ng(),Ux(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),ng(),wl(18,"p"),Ux(19,"\xC0 partir de dois "),wl(20,"em"),Ux(21,"disclaimers"),ng(),Ux(22," com o bot\xE3o "),wl(23,"strong"),Ux(24,"fechar"),ng(),Ux(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),wl(26,"em"),Ux(27,"disclaimer"),ng(),Ux(28," que possibilita "),wl(29,"strong"),Ux(30,"remover todos"),ng(),Ux(31,", mas que tamb\xE9m pode ser desabilitado."),ng(),wl(32,"p"),Ux(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),wl(34,"em"),Ux(35,"disclaimers"),ng(),Ux(36," atrav\xE9s do teclado utilizando a tecla "),wl(37,"em"),Ux(38,"tab"),ng(),Ux(39," e, para remo\xE7\xE3o do "),wl(40,"em"),Ux(41,"disclaimer"),ng(),Ux(42,` selecionado,
basta pressionar a tecla `),wl(43,"em"),Ux(44,"enter"),ng(),Ux(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),wl(46,"code"),Ux(47,"hideClose"),ng(),Ux(48," estiver habilitada."),ng(),wl(49,"blockquote")(50,"p"),Ux(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),wl(52,"a",6),Ux(53,"po-page-list"),ng(),Ux(54,". "),ng()()(),wl(55,"div",7)(56,"h4",8),Ux(57,"Seletor"),ng(),wl(58,"pre",9),Ux(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),ng()(),wl(60,"h4",10),Ux(61,"Propriedades"),ng(),wl(62,"table",11)(63,"tr",12)(64,"th",13),Ux(65,"Nome"),ng(),wl(66,"th",13),Ux(67,"Tipo"),ng(),wl(68,"th",13),Ux(69,"Padr\xE3o"),ng(),wl(70,"th",13),Ux(71,"Descri\xE7\xE3o"),ng()(),wl(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),Ux(76," (p-change)"),Ul(77,"br"),ng()()(),wl(78,"td",18)(79,"code",19),Ux(80,"EventEmitter"),ng()(),wl(81,"td",20),Ux(82,"-"),ng(),wl(83,"td",21)(84,"em")(85,"strong"),Ux(86,"(opcional)"),ng()(),wl(87,"p"),Ux(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),wl(89,"em"),Ux(90,"disclaimers"),ng(),Ux(91," for modificada."),ng()()(),wl(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),Ux(96," p-disclaimers"),Ul(97,"br"),ng()()(),wl(98,"td",18)(99,"code",24),Ux(100,"PoDisclaimer[]"),ng()(),wl(101,"td",20),Ux(102,"-"),ng(),wl(103,"td",21)(104,"p"),Ux(105,"Lista de "),wl(106,"em"),Ux(107,"disclaimers"),ng(),Ux(108,"."),ng(),wl(109,"p"),Ux(110,"Para que a lista de "),wl(111,"em"),Ux(112,"disclaimers"),ng(),Ux(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),wl(114,"code"),Ux(115,"PoDisclaimer"),ng(),Ux(116,"."),ng(),wl(117,"p"),Ux(118,"Exemplo adicionando um "),wl(119,"em"),Ux(120,"disclaimer"),ng(),Ux(121," no array:"),ng(),wl(122,"pre")(123,"code"),Ux(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),ng()(),wl(125,"p"),Ux(126,"ou"),ng(),wl(127,"pre")(128,"code"),Ux(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),ng()()()(),wl(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),Ux(134," p-hide-remove-all"),Ul(135,"br"),ng()()(),wl(136,"td",18)(137,"code",25),Ux(138,"boolean"),ng()(),wl(139,"td",20)(140,"p")(141,"code"),Ux(142,"false"),ng()()(),wl(143,"td",21)(144,"em")(145,"strong"),Ux(146,"(opcional)"),ng()(),wl(147,"p"),Ux(148,"Oculta o bot\xE3o para remover todos os "),wl(149,"em"),Ux(150,"disclaimers"),ng(),Ux(151," do grupo."),ng(),wl(152,"blockquote")(153,"p"),Ux(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),wl(155,"em"),Ux(156,"disclaimers"),ng(),Ux(157," com a op\xE7\xE3o "),wl(158,"code"),Ux(159,"hideClose"),ng(),Ux(160," habilitada."),ng()()()(),wl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),Ux(165," (p-remove)"),Ul(166,"br"),ng()()(),wl(167,"td",18)(168,"code",19),Ux(169,"EventEmitter"),ng()(),wl(170,"td",20),Ux(171,"-"),ng(),wl(172,"td",21)(173,"em")(174,"strong"),Ux(175,"(opcional)"),ng()(),wl(176,"p"),Ux(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),wl(178,"em"),Ux(179,"disclaimer"),ng(),Ux(180," for removido da lista de "),wl(181,"em"),Ux(182,"disclaimers"),ng(),Ux(183," pelo usu\xE1rio."),ng(),wl(184,"p"),Ux(185,"Recebe como par\xE2metro um objeto conforme a interface "),wl(186,"code"),Ux(187,"PoDisclaimerGroupRemoveAction"),ng(),Ux(188,"."),ng()()(),wl(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),Ux(193," (p-remove-all)"),Ul(194,"br"),ng()()(),wl(195,"td",18)(196,"code",19),Ux(197,"EventEmitter"),ng()(),wl(198,"td",20),Ux(199,"-"),ng(),wl(200,"td",21)(201,"em")(202,"strong"),Ux(203,"(opcional)"),ng()(),wl(204,"p"),Ux(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),wl(206,"em"),Ux(207,"disclaimers"),ng(),Ux(208," forem removidos da lista de "),wl(209,"em"),Ux(210,"disclaimers"),ng(),Ux(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),ng(),wl(212,"p"),Ux(213,"Recebe como par\xE2metro uma lista contendo todos os "),wl(214,"code"),Ux(215,"disclaimers"),ng(),Ux(216," removidos."),ng()()(),wl(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),Ux(221," p-title"),Ul(222,"br"),ng()()(),wl(223,"td",18)(224,"code",26),Ux(225,"string"),ng()(),wl(226,"td",20),Ux(227,"-"),ng(),wl(228,"td",21)(229,"em")(230,"strong"),Ux(231,"(opcional)"),ng()(),wl(232,"p"),Ux(233,"T\xEDtulo do grupo de "),wl(234,"em"),Ux(235,"disclaimers"),ng(),Ux(236,"."),ng()()()(),wl(237,"h3"),Ux(238,"Interfaces"),ng(),wl(239,"h4",27)(240,"code",5),Ux(241,"PoDisclaimer"),ng()(),wl(242,"div",2)(243,"p"),Ux(244,"Interface que representa o objeto "),wl(245,"code"),Ux(246,"po-disclaimer"),ng(),Ux(247,"."),ng()(),wl(248,"h4",10),Ux(249,"Propriedades"),ng(),wl(250,"table",11)(251,"tr",12)(252,"th",13),Ux(253,"Nome"),ng(),wl(254,"th",13),Ux(255,"Tipo"),ng(),wl(256,"th",13),Ux(257,"Descri\xE7\xE3o"),ng()(),wl(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),Ux(262," hideClose"),Ul(263,"br"),ng()()(),wl(264,"td",18)(265,"code",25),Ux(266,"boolean"),ng()(),wl(267,"td",21)(268,"em")(269,"strong"),Ux(270,"(opcional)"),ng()(),wl(271,"p"),Ux(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),wl(273,"em"),Ux(274,"disclaimer"),ng(),Ux(275,"."),ng()()(),wl(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),Ux(280," label"),Ul(281,"br"),ng()()(),wl(282,"td",18)(283,"code",26),Ux(284,"string"),ng()(),wl(285,"td",21)(286,"em")(287,"strong"),Ux(288,"(opcional)"),ng()(),wl(289,"p"),Ux(290,"Texto de exibi\xE7\xE3o do objeto."),ng()()(),wl(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),Ux(295," property"),Ul(296,"br"),ng()()(),wl(297,"td",18)(298,"code",26),Ux(299,"string"),ng()(),wl(300,"td",21)(301,"em")(302,"strong"),Ux(303,"(opcional)"),ng()(),wl(304,"p"),Ux(305,"Nome da propriedade vinculada ao objeto "),wl(306,"em"),Ux(307,"disclaimer"),ng(),Ux(308,"."),ng()()(),wl(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),Ux(313," value"),Ul(314,"br"),ng()()(),wl(315,"td",18)(316,"code",28),Ux(317,"any"),ng()(),wl(318,"td",21)(319,"p"),Ux(320,"Valor do objeto."),ng()()()(),wl(321,"h4",27)(322,"code",5),Ux(323,"PoDisclaimerGroupRemoveAction"),ng()(),wl(324,"div",2)(325,"p"),Ux(326,"Estrutura do objeto representando o estado dos "),wl(327,"em"),Ux(328,"disclaimers"),ng(),Ux(329," ap\xF3s a remo\xE7\xE3o."),ng()(),wl(330,"h4",10),Ux(331,"Propriedades"),ng(),wl(332,"table",11)(333,"tr",12)(334,"th",13),Ux(335,"Nome"),ng(),wl(336,"th",13),Ux(337,"Tipo"),ng(),wl(338,"th",13),Ux(339,"Descri\xE7\xE3o"),ng()(),wl(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),Ux(344," currentDisclaimers"),Ul(345,"br"),ng()()(),wl(346,"td",18)(347,"code",29),Ux(348,"Array<PoDisclaimer>"),ng()(),wl(349,"td",21)(350,"p"),Ux(351,"Lista com os "),wl(352,"em"),Ux(353,"disclaimers"),ng(),Ux(354," atuais (restantes)."),ng()()(),wl(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),Ux(359," removedDisclaimer"),Ul(360,"br"),ng()()(),wl(361,"td",18)(362,"code",30),Ux(363,"PoDisclaimer"),ng()(),wl(364,"td",21)(365,"p")(366,"em"),Ux(367,"Disclaimer"),ng(),Ux(368," que foi removido."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var ve=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-disclaimer-group-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),ng()()()),a&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,ue,he,fe,Se],encapsulation:2})}return o})();var Ve=[{path:"",component:ve}],Ce=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[vL.forChild(Ve),vL]})}return o})();var Pt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[u5,Ce]})}return o})();export{Pt as DocPoDisclaimerGroupModule};