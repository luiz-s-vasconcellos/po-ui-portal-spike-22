import {f as fe$1,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,i as ib,G,I,cI as b3,L as Gl,O as nw,bs as mN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,bH as M3,c9 as Yhe,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,bC as g3,b7 as E3,Y as we,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var Ce=()=>({value:"disclaimer"}),Ee=a=>[a],me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(o,n){o&1&&Gl(0,"po-disclaimer-group",0),o&2&&nw("p-disclaimers",mN(2,Ee,gN(1,Ce)));},dependencies:[b3],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Disclaimer Group Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-disclaimer-group-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore();}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0};}changeEvent(l){this.event=l;}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event="";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs"]],standalone:false,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let s=Sx();Tl(0,"po-disclaimer-group",2),ht("p-change",function(){return n.changeEvent("p-change")}),sg(),Gl(1,"po-divider"),Tl(2,"div",3),Gl(3,"po-info",4),sg(),Gl(4,"po-divider"),Tl(5,"form",null,0)(7,"div",3)(8,"po-input",5),ww("ngModelChange",function(d){return Ky(s),sN(n.disclaimer.label,d)||(n.disclaimer.label=d),Xy(d)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(d){return Ky(s),sN(n.disclaimer.value,d)||(n.disclaimer.value=d),Xy(d)}),sg(),r0(),sg(),Tl(10,"div",3)(11,"po-input",7),ww("ngModelChange",function(d){return Ky(s),sN(n.disclaimer.property,d)||(n.disclaimer.property=d),Xy(d)}),sg(),r0(),Tl(12,"po-switch",8),ww("ngModelChange",function(d){return Ky(s),sN(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),Xy(d)}),sg(),r0(),sg(),Tl(13,"div",3)(14,"po-button",9),ht("p-click",function(){return n.addDisclaimer()}),sg()()(),Gl(15,"po-divider"),Tl(16,"form",null,1)(18,"div",3)(19,"po-input",10),ww("ngModelChange",function(d){return Ky(s),sN(n.title,d)||(n.title=d),Xy(d)}),sg(),r0(),Tl(20,"po-checkbox-group",11),ww("ngModelChange",function(d){return Ky(s),sN(n.properties,d)||(n.properties=d),Xy(d)}),sg(),r0(),sg(),Tl(21,"div",3)(22,"po-button",12),ht("p-click",function(){Ky(s);let d=Fx(6),ve=Fx(17);return d.reset(),ve.reset(),Xy(n.restore())}),sg()()();}if(o&2){let s=Fx(6);nw("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),Vp(3),nw("p-value",n.event),Vp(5),Ew("ngModel",n.disclaimer.label),o0(),Vp(),Ew("ngModel",n.disclaimer.value),o0(),Vp(2),Ew("ngModel",n.disclaimer.property),o0(),Vp(),Ew("ngModel",n.disclaimer.hideClose),o0(),Vp(2),nw("p-disabled",s.invalid),Vp(5),Ew("ngModel",n.title),o0(),Vp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,b3,mv,C3,O3,M3,Yhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Disclaimer Group Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-disclaimer-group
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-disclaimer-group-labs"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,_e,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ce],encapsulation:2,changeDetection:1})}return a})();var q=(()=>{class a{http=f(ib);getClimates(){return [{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return [{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(G(l=>l.results))}getTerrains(){return [{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items];}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains();}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n];}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate");}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0);}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n);}resetFilters(){this.filteredItems=[...this.items||[]];}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:false,features:[we([q])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(o,n){o&1&&(Tl(0,"div",0)(1,"po-input",1),ww("ngModelChange",function(p){return sN(n.name,p)||(n.name=p),p}),ht("p-change",function(){return n.addFilter(n.name,"name")}),sg(),r0(),Tl(2,"po-combo",2),ww("ngModelChange",function(p){return sN(n.climate,p)||(n.climate=p),p}),ht("p-change",function(){return n.addFilter(n.climate,"climate")}),sg(),r0(),Tl(3,"po-combo",3),ww("ngModelChange",function(p){return sN(n.terrain,p)||(n.terrain=p),p}),ht("p-change",function(){return n.addFilter(n.terrain,"terrain")}),sg(),r0(),Tl(4,"po-disclaimer-group",4),ht("p-change",function(){return n.changeFilters(n.filters)}),sg()(),Gl(5,"po-divider"),Tl(6,"div",0),Gl(7,"po-table",5),sg()),o&2&&(Vp(),Ew("ngModel",n.name),o0(),Vp(),Ew("ngModel",n.climate),nw("p-options",n.climates),o0(),Vp(),Ew("ngModel",n.terrain),nw("p-options",n.terrains),o0(),Vp(),nw("p-disclaimers",n.filters),Vp(3),nw("p-columns",n.columns)("p-items",n.filteredItems)("p-hide-table-search",false));},dependencies:[nY,Sk,b3,mv,g3,O3,E3],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Disclaimer Group - Star Wars Planets"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable, inject } from '@angular/core';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-disclaimer-group-sw-planets"),sg(),Gl(27,"hr")),o&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Me,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ge],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-doc"]],standalone:false,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(o,n){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-disclaimer-group."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoDisclaimerGroupComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-disclaimer-group"),sg(),iN(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),sg(),Tl(18,"p"),iN(19,"\xC0 partir de dois "),Tl(20,"em"),iN(21,"disclaimers"),sg(),iN(22," com o bot\xE3o "),Tl(23,"strong"),iN(24,"fechar"),sg(),iN(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Tl(26,"em"),iN(27,"disclaimer"),sg(),iN(28," que possibilita "),Tl(29,"strong"),iN(30,"remover todos"),sg(),iN(31,", mas que tamb\xE9m pode ser desabilitado."),sg(),Tl(32,"p"),iN(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Tl(34,"em"),iN(35,"disclaimers"),sg(),iN(36," atrav\xE9s do teclado utilizando a tecla "),Tl(37,"em"),iN(38,"tab"),sg(),iN(39," e, para remo\xE7\xE3o do "),Tl(40,"em"),iN(41,"disclaimer"),sg(),iN(42,` selecionado,
basta pressionar a tecla `),Tl(43,"em"),iN(44,"enter"),sg(),iN(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),Tl(46,"code"),iN(47,"hideClose"),sg(),iN(48," estiver habilitada."),sg(),Tl(49,"blockquote")(50,"p"),iN(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),Tl(52,"a",6),iN(53,"po-page-list"),sg(),iN(54,". "),sg()()(),Tl(55,"div",7)(56,"h4",8),iN(57,"Seletor"),sg(),Tl(58,"pre",9),iN(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),sg()(),Tl(60,"h4",10),iN(61,"Propriedades"),sg(),Tl(62,"table",11)(63,"tr",12)(64,"th",13),iN(65,"Nome"),sg(),Tl(66,"th",13),iN(67,"Tipo"),sg(),Tl(68,"th",13),iN(69,"Padr\xE3o"),sg(),Tl(70,"th",13),iN(71,"Descri\xE7\xE3o"),sg()(),Tl(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),iN(76," (p-change)"),Gl(77,"br"),sg()()(),Tl(78,"td",18)(79,"code",19),iN(80,"EventEmitter"),sg()(),Tl(81,"td",20),iN(82,"-"),sg(),Tl(83,"td",21)(84,"em")(85,"strong"),iN(86,"(opcional)"),sg()(),Tl(87,"p"),iN(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Tl(89,"em"),iN(90,"disclaimers"),sg(),iN(91," for modificada."),sg()()(),Tl(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),iN(96," p-disclaimers"),Gl(97,"br"),sg()()(),Tl(98,"td",18)(99,"code",24),iN(100,"PoDisclaimer[]"),sg()(),Tl(101,"td",20),iN(102,"-"),sg(),Tl(103,"td",21)(104,"p"),iN(105,"Lista de "),Tl(106,"em"),iN(107,"disclaimers"),sg(),iN(108,"."),sg(),Tl(109,"p"),iN(110,"Para que a lista de "),Tl(111,"em"),iN(112,"disclaimers"),sg(),iN(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Tl(114,"code"),iN(115,"PoDisclaimer"),sg(),iN(116,"."),sg(),Tl(117,"p"),iN(118,"Exemplo adicionando um "),Tl(119,"em"),iN(120,"disclaimer"),sg(),iN(121," no array:"),sg(),Tl(122,"pre")(123,"code"),iN(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),sg()(),Tl(125,"p"),iN(126,"ou"),sg(),Tl(127,"pre")(128,"code"),iN(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),sg()()()(),Tl(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),iN(134," p-hide-remove-all"),Gl(135,"br"),sg()()(),Tl(136,"td",18)(137,"code",25),iN(138,"boolean"),sg()(),Tl(139,"td",20)(140,"p")(141,"code"),iN(142,"false"),sg()()(),Tl(143,"td",21)(144,"em")(145,"strong"),iN(146,"(opcional)"),sg()(),Tl(147,"p"),iN(148,"Oculta o bot\xE3o para remover todos os "),Tl(149,"em"),iN(150,"disclaimers"),sg(),iN(151," do grupo."),sg(),Tl(152,"blockquote")(153,"p"),iN(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Tl(155,"em"),iN(156,"disclaimers"),sg(),iN(157," com a op\xE7\xE3o "),Tl(158,"code"),iN(159,"hideClose"),sg(),iN(160," habilitada."),sg()()()(),Tl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),iN(165," (p-remove)"),Gl(166,"br"),sg()()(),Tl(167,"td",18)(168,"code",19),iN(169,"EventEmitter"),sg()(),Tl(170,"td",20),iN(171,"-"),sg(),Tl(172,"td",21)(173,"em")(174,"strong"),iN(175,"(opcional)"),sg()(),Tl(176,"p"),iN(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Tl(178,"em"),iN(179,"disclaimer"),sg(),iN(180," for removido da lista de "),Tl(181,"em"),iN(182,"disclaimers"),sg(),iN(183," pelo usu\xE1rio."),sg(),Tl(184,"p"),iN(185,"Recebe como par\xE2metro um objeto conforme a interface "),Tl(186,"code"),iN(187,"PoDisclaimerGroupRemoveAction"),sg(),iN(188,"."),sg()()(),Tl(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),iN(193," (p-remove-all)"),Gl(194,"br"),sg()()(),Tl(195,"td",18)(196,"code",19),iN(197,"EventEmitter"),sg()(),Tl(198,"td",20),iN(199,"-"),sg(),Tl(200,"td",21)(201,"em")(202,"strong"),iN(203,"(opcional)"),sg()(),Tl(204,"p"),iN(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Tl(206,"em"),iN(207,"disclaimers"),sg(),iN(208," forem removidos da lista de "),Tl(209,"em"),iN(210,"disclaimers"),sg(),iN(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),sg(),Tl(212,"p"),iN(213,"Recebe como par\xE2metro uma lista contendo todos os "),Tl(214,"code"),iN(215,"disclaimers"),sg(),iN(216," removidos."),sg()()(),Tl(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),iN(221," p-title"),Gl(222,"br"),sg()()(),Tl(223,"td",18)(224,"code",26),iN(225,"string"),sg()(),Tl(226,"td",20),iN(227,"-"),sg(),Tl(228,"td",21)(229,"em")(230,"strong"),iN(231,"(opcional)"),sg()(),Tl(232,"p"),iN(233,"T\xEDtulo do grupo de "),Tl(234,"em"),iN(235,"disclaimers"),sg(),iN(236,"."),sg()()()(),Tl(237,"h3"),iN(238,"Interfaces"),sg(),Tl(239,"h4",27)(240,"code",5),iN(241,"PoDisclaimer"),sg()(),Tl(242,"div",2)(243,"p"),iN(244,"Interface que representa o objeto "),Tl(245,"code"),iN(246,"po-disclaimer"),sg(),iN(247,"."),sg()(),Tl(248,"h4",10),iN(249,"Propriedades"),sg(),Tl(250,"table",11)(251,"tr",12)(252,"th",13),iN(253,"Nome"),sg(),Tl(254,"th",13),iN(255,"Tipo"),sg(),Tl(256,"th",13),iN(257,"Descri\xE7\xE3o"),sg()(),Tl(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),iN(262," hideClose"),Gl(263,"br"),sg()()(),Tl(264,"td",18)(265,"code",25),iN(266,"boolean"),sg()(),Tl(267,"td",21)(268,"em")(269,"strong"),iN(270,"(opcional)"),sg()(),Tl(271,"p"),iN(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Tl(273,"em"),iN(274,"disclaimer"),sg(),iN(275,"."),sg()()(),Tl(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),iN(280," label"),Gl(281,"br"),sg()()(),Tl(282,"td",18)(283,"code",26),iN(284,"string"),sg()(),Tl(285,"td",21)(286,"em")(287,"strong"),iN(288,"(opcional)"),sg()(),Tl(289,"p"),iN(290,"Texto de exibi\xE7\xE3o do objeto."),sg()()(),Tl(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),iN(295," property"),Gl(296,"br"),sg()()(),Tl(297,"td",18)(298,"code",26),iN(299,"string"),sg()(),Tl(300,"td",21)(301,"em")(302,"strong"),iN(303,"(opcional)"),sg()(),Tl(304,"p"),iN(305,"Nome da propriedade vinculada ao objeto "),Tl(306,"em"),iN(307,"disclaimer"),sg(),iN(308,"."),sg()()(),Tl(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),iN(313," value"),Gl(314,"br"),sg()()(),Tl(315,"td",18)(316,"code",28),iN(317,"any"),sg()(),Tl(318,"td",21)(319,"p"),iN(320,"Valor do objeto."),sg()()()(),Tl(321,"h4",27)(322,"code",5),iN(323,"PoDisclaimerGroupRemoveAction"),sg()(),Tl(324,"div",2)(325,"p"),iN(326,"Estrutura do objeto representando o estado dos "),Tl(327,"em"),iN(328,"disclaimers"),sg(),iN(329," ap\xF3s a remo\xE7\xE3o."),sg()(),Tl(330,"h4",10),iN(331,"Propriedades"),sg(),Tl(332,"table",11)(333,"tr",12)(334,"th",13),iN(335,"Nome"),sg(),Tl(336,"th",13),iN(337,"Tipo"),sg(),Tl(338,"th",13),iN(339,"Descri\xE7\xE3o"),sg()(),Tl(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),iN(344," currentDisclaimers"),Gl(345,"br"),sg()()(),Tl(346,"td",18)(347,"code",29),iN(348,"Array<PoDisclaimer>"),sg()(),Tl(349,"td",21)(350,"p"),iN(351,"Lista com os "),Tl(352,"em"),iN(353,"disclaimers"),sg(),iN(354," atuais (restantes)."),sg()()(),Tl(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),iN(359," removedDisclaimer"),Gl(360,"br"),sg()()(),Tl(361,"td",18)(362,"code",30),iN(363,"PoDisclaimer"),sg()(),Tl(364,"td",21)(365,"p")(366,"em"),iN(367,"Disclaimer"),sg(),iN(368," que foi removido."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-disclaimer-group-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),sg()()()),o&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[lNe,Wme,jme,de,ue,he,be],encapsulation:2,changeDetection:1})}return a})();var Ie=[{path:"",component:Se}],fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[DL.forChild(Ie),DL]})}return a})();var ct=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,fe]})}return a})();export{ct as DocPoDisclaimerGroupModule};