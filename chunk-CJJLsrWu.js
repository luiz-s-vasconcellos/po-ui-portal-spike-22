import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,t as tb,q as q$1,S,cN as I3,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,bG as k3,b6 as U3,W as we,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Ce=()=>({value:"disclaimer"}),Ee=a=>[a],me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(o,n){o&1&&Hl(0,"po-disclaimer-group",0),o&2&&ZE("p-disclaimers",oN(2,Ee,iN(1,Ce)));},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Disclaimer Group Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-disclaimer-group-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore();}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0};}changeEvent(l){this.event=l;}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event="";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs"]],standalone:false,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let s=gx();Cl(0,"po-disclaimer-group",2),dt("p-change",function(){return n.changeEvent("p-change")}),og(),Hl(1,"po-divider"),Cl(2,"div",3),Hl(3,"po-info",4),og(),Hl(4,"po-divider"),Cl(5,"form",null,0)(7,"div",3)(8,"po-input",5),gw("ngModelChange",function(d){return Jy(s),Zx(n.disclaimer.label,d)||(n.disclaimer.label=d),e_(d)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(d){return Jy(s),Zx(n.disclaimer.value,d)||(n.disclaimer.value=d),e_(d)}),og(),Z0(),og(),Cl(10,"div",3)(11,"po-input",7),gw("ngModelChange",function(d){return Jy(s),Zx(n.disclaimer.property,d)||(n.disclaimer.property=d),e_(d)}),og(),Z0(),Cl(12,"po-switch",8),gw("ngModelChange",function(d){return Jy(s),Zx(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),e_(d)}),og(),Z0(),og(),Cl(13,"div",3)(14,"po-button",9),dt("p-click",function(){return n.addDisclaimer()}),og()()(),Hl(15,"po-divider"),Cl(16,"form",null,1)(18,"div",3)(19,"po-input",10),gw("ngModelChange",function(d){return Jy(s),Zx(n.title,d)||(n.title=d),e_(d)}),og(),Z0(),Cl(20,"po-checkbox-group",11),gw("ngModelChange",function(d){return Jy(s),Zx(n.properties,d)||(n.properties=d),e_(d)}),og(),Z0(),og(),Cl(21,"div",3)(22,"po-button",12),dt("p-click",function(){Jy(s);let d=Sx(6),ve=Sx(17);return d.reset(),ve.reset(),e_(n.restore())}),og()()();}if(o&2){let s=Sx(6);ZE("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),Lp(3),ZE("p-value",n.event),Lp(5),pw("ngModel",n.disclaimer.label),X0(),Lp(),pw("ngModel",n.disclaimer.value),X0(),Lp(2),pw("ngModel",n.disclaimer.property),X0(),Lp(),pw("ngModel",n.disclaimer.hideClose),X0(),Lp(2),ZE("p-disabled",s.invalid),Lp(5),pw("ngModel",n.title),X0(),Lp(),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,I3,_v,L3,q3,H3,sme],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Disclaimer Group Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-disclaimer-group
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-disclaimer-group-labs"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return a})();var q=(()=>{class a{http=f(tb);getClimates(){return [{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return [{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(q$1(l=>l.results))}getTerrains(){return [{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items];}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains();}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n];}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate");}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0);}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n);}resetFilters(){this.filteredItems=[...this.items||[]];}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:false,features:[we([q])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(o,n){o&1&&(Cl(0,"div",0)(1,"po-input",1),gw("ngModelChange",function(p){return Zx(n.name,p)||(n.name=p),p}),dt("p-change",function(){return n.addFilter(n.name,"name")}),og(),Z0(),Cl(2,"po-combo",2),gw("ngModelChange",function(p){return Zx(n.climate,p)||(n.climate=p),p}),dt("p-change",function(){return n.addFilter(n.climate,"climate")}),og(),Z0(),Cl(3,"po-combo",3),gw("ngModelChange",function(p){return Zx(n.terrain,p)||(n.terrain=p),p}),dt("p-change",function(){return n.addFilter(n.terrain,"terrain")}),og(),Z0(),Cl(4,"po-disclaimer-group",4),dt("p-change",function(){return n.changeFilters(n.filters)}),og()(),Hl(5,"po-divider"),Cl(6,"div",0),Hl(7,"po-table",5),og()),o&2&&(Lp(),pw("ngModel",n.name),X0(),Lp(),pw("ngModel",n.climate),ZE("p-options",n.climates),X0(),Lp(),pw("ngModel",n.terrain),ZE("p-options",n.terrains),X0(),Lp(),ZE("p-disclaimers",n.filters),Lp(3),ZE("p-columns",n.columns)("p-items",n.filteredItems)("p-hide-table-search",false));},dependencies:[sY,gk,I3,_v,k3,q3,U3],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Disclaimer Group - Star Wars Planets"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable, inject } from '@angular/core';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-disclaimer-group-sw-planets"),og(),Hl(27,"hr")),o&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-doc"]],standalone:false,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(o,n){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-disclaimer-group."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoDisclaimerGroupComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-disclaimer-group"),og(),qx(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),og(),Cl(18,"p"),qx(19,"\xC0 partir de dois "),Cl(20,"em"),qx(21,"disclaimers"),og(),qx(22," com o bot\xE3o "),Cl(23,"strong"),qx(24,"fechar"),og(),qx(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Cl(26,"em"),qx(27,"disclaimer"),og(),qx(28," que possibilita "),Cl(29,"strong"),qx(30,"remover todos"),og(),qx(31,", mas que tamb\xE9m pode ser desabilitado."),og(),Cl(32,"p"),qx(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Cl(34,"em"),qx(35,"disclaimers"),og(),qx(36," atrav\xE9s do teclado utilizando a tecla "),Cl(37,"em"),qx(38,"tab"),og(),qx(39," e, para remo\xE7\xE3o do "),Cl(40,"em"),qx(41,"disclaimer"),og(),qx(42,` selecionado,
basta pressionar a tecla `),Cl(43,"em"),qx(44,"enter"),og(),qx(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),Cl(46,"code"),qx(47,"hideClose"),og(),qx(48," estiver habilitada."),og(),Cl(49,"blockquote")(50,"p"),qx(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),Cl(52,"a",6),qx(53,"po-page-list"),og(),qx(54,". "),og()()(),Cl(55,"div",7)(56,"h4",8),qx(57,"Seletor"),og(),Cl(58,"pre",9),qx(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),og()(),Cl(60,"h4",10),qx(61,"Propriedades"),og(),Cl(62,"table",11)(63,"tr",12)(64,"th",13),qx(65,"Nome"),og(),Cl(66,"th",13),qx(67,"Tipo"),og(),Cl(68,"th",13),qx(69,"Padr\xE3o"),og(),Cl(70,"th",13),qx(71,"Descri\xE7\xE3o"),og()(),Cl(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),qx(76," (p-change)"),Hl(77,"br"),og()()(),Cl(78,"td",18)(79,"code",19),qx(80,"EventEmitter"),og()(),Cl(81,"td",20),qx(82,"-"),og(),Cl(83,"td",21)(84,"em")(85,"strong"),qx(86,"(opcional)"),og()(),Cl(87,"p"),qx(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Cl(89,"em"),qx(90,"disclaimers"),og(),qx(91," for modificada."),og()()(),Cl(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),qx(96," p-disclaimers"),Hl(97,"br"),og()()(),Cl(98,"td",18)(99,"code",24),qx(100,"PoDisclaimer[]"),og()(),Cl(101,"td",20),qx(102,"-"),og(),Cl(103,"td",21)(104,"p"),qx(105,"Lista de "),Cl(106,"em"),qx(107,"disclaimers"),og(),qx(108,"."),og(),Cl(109,"p"),qx(110,"Para que a lista de "),Cl(111,"em"),qx(112,"disclaimers"),og(),qx(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Cl(114,"code"),qx(115,"PoDisclaimer"),og(),qx(116,"."),og(),Cl(117,"p"),qx(118,"Exemplo adicionando um "),Cl(119,"em"),qx(120,"disclaimer"),og(),qx(121," no array:"),og(),Cl(122,"pre")(123,"code"),qx(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),og()(),Cl(125,"p"),qx(126,"ou"),og(),Cl(127,"pre")(128,"code"),qx(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),og()()()(),Cl(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),qx(134," p-hide-remove-all"),Hl(135,"br"),og()()(),Cl(136,"td",18)(137,"code",25),qx(138,"boolean"),og()(),Cl(139,"td",20)(140,"p")(141,"code"),qx(142,"false"),og()()(),Cl(143,"td",21)(144,"em")(145,"strong"),qx(146,"(opcional)"),og()(),Cl(147,"p"),qx(148,"Oculta o bot\xE3o para remover todos os "),Cl(149,"em"),qx(150,"disclaimers"),og(),qx(151," do grupo."),og(),Cl(152,"blockquote")(153,"p"),qx(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Cl(155,"em"),qx(156,"disclaimers"),og(),qx(157," com a op\xE7\xE3o "),Cl(158,"code"),qx(159,"hideClose"),og(),qx(160," habilitada."),og()()()(),Cl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),qx(165," (p-remove)"),Hl(166,"br"),og()()(),Cl(167,"td",18)(168,"code",19),qx(169,"EventEmitter"),og()(),Cl(170,"td",20),qx(171,"-"),og(),Cl(172,"td",21)(173,"em")(174,"strong"),qx(175,"(opcional)"),og()(),Cl(176,"p"),qx(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Cl(178,"em"),qx(179,"disclaimer"),og(),qx(180," for removido da lista de "),Cl(181,"em"),qx(182,"disclaimers"),og(),qx(183," pelo usu\xE1rio."),og(),Cl(184,"p"),qx(185,"Recebe como par\xE2metro um objeto conforme a interface "),Cl(186,"code"),qx(187,"PoDisclaimerGroupRemoveAction"),og(),qx(188,"."),og()()(),Cl(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),qx(193," (p-remove-all)"),Hl(194,"br"),og()()(),Cl(195,"td",18)(196,"code",19),qx(197,"EventEmitter"),og()(),Cl(198,"td",20),qx(199,"-"),og(),Cl(200,"td",21)(201,"em")(202,"strong"),qx(203,"(opcional)"),og()(),Cl(204,"p"),qx(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Cl(206,"em"),qx(207,"disclaimers"),og(),qx(208," forem removidos da lista de "),Cl(209,"em"),qx(210,"disclaimers"),og(),qx(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Cl(212,"p"),qx(213,"Recebe como par\xE2metro uma lista contendo todos os "),Cl(214,"code"),qx(215,"disclaimers"),og(),qx(216," removidos."),og()()(),Cl(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),qx(221," p-title"),Hl(222,"br"),og()()(),Cl(223,"td",18)(224,"code",26),qx(225,"string"),og()(),Cl(226,"td",20),qx(227,"-"),og(),Cl(228,"td",21)(229,"em")(230,"strong"),qx(231,"(opcional)"),og()(),Cl(232,"p"),qx(233,"T\xEDtulo do grupo de "),Cl(234,"em"),qx(235,"disclaimers"),og(),qx(236,"."),og()()()(),Cl(237,"h3"),qx(238,"Interfaces"),og(),Cl(239,"h4",27)(240,"code",5),qx(241,"PoDisclaimer"),og()(),Cl(242,"div",2)(243,"p"),qx(244,"Interface que representa o objeto "),Cl(245,"code"),qx(246,"po-disclaimer"),og(),qx(247,"."),og()(),Cl(248,"h4",10),qx(249,"Propriedades"),og(),Cl(250,"table",11)(251,"tr",12)(252,"th",13),qx(253,"Nome"),og(),Cl(254,"th",13),qx(255,"Tipo"),og(),Cl(256,"th",13),qx(257,"Descri\xE7\xE3o"),og()(),Cl(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),qx(262," hideClose"),Hl(263,"br"),og()()(),Cl(264,"td",18)(265,"code",25),qx(266,"boolean"),og()(),Cl(267,"td",21)(268,"em")(269,"strong"),qx(270,"(opcional)"),og()(),Cl(271,"p"),qx(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Cl(273,"em"),qx(274,"disclaimer"),og(),qx(275,"."),og()()(),Cl(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),qx(280," label"),Hl(281,"br"),og()()(),Cl(282,"td",18)(283,"code",26),qx(284,"string"),og()(),Cl(285,"td",21)(286,"em")(287,"strong"),qx(288,"(opcional)"),og()(),Cl(289,"p"),qx(290,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Cl(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),qx(295," property"),Hl(296,"br"),og()()(),Cl(297,"td",18)(298,"code",26),qx(299,"string"),og()(),Cl(300,"td",21)(301,"em")(302,"strong"),qx(303,"(opcional)"),og()(),Cl(304,"p"),qx(305,"Nome da propriedade vinculada ao objeto "),Cl(306,"em"),qx(307,"disclaimer"),og(),qx(308,"."),og()()(),Cl(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),qx(313," value"),Hl(314,"br"),og()()(),Cl(315,"td",18)(316,"code",28),qx(317,"any"),og()(),Cl(318,"td",21)(319,"p"),qx(320,"Valor do objeto."),og()()()(),Cl(321,"h4",27)(322,"code",5),qx(323,"PoDisclaimerGroupRemoveAction"),og()(),Cl(324,"div",2)(325,"p"),qx(326,"Estrutura do objeto representando o estado dos "),Cl(327,"em"),qx(328,"disclaimers"),og(),qx(329," ap\xF3s a remo\xE7\xE3o."),og()(),Cl(330,"h4",10),qx(331,"Propriedades"),og(),Cl(332,"table",11)(333,"tr",12)(334,"th",13),qx(335,"Nome"),og(),Cl(336,"th",13),qx(337,"Tipo"),og(),Cl(338,"th",13),qx(339,"Descri\xE7\xE3o"),og()(),Cl(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),qx(344," currentDisclaimers"),Hl(345,"br"),og()()(),Cl(346,"td",18)(347,"code",29),qx(348,"Array<PoDisclaimer>"),og()(),Cl(349,"td",21)(350,"p"),qx(351,"Lista com os "),Cl(352,"em"),qx(353,"disclaimers"),og(),qx(354," atuais (restantes)."),og()()(),Cl(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),qx(359," removedDisclaimer"),Hl(360,"br"),og()()(),Cl(361,"td",18)(362,"code",30),qx(363,"PoDisclaimer"),og()(),Cl(364,"td",21)(365,"p")(366,"em"),qx(367,"Disclaimer"),og(),qx(368," que foi removido."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-disclaimer-group-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),og()()()),o&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,de,ue,he,be],encapsulation:2})}return a})();var Ie=[{path:"",component:fe}],Se=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[bL.forChild(Ie),bL]})}return a})();var ct=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ca,Se]})}return a})();export{ct as DocPoDisclaimerGroupModule};