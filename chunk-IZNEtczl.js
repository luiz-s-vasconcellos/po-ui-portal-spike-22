import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Ni as hw,Nn as x4,Qn as C9,Sa as zO,Ur as RN,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,ea as q$1,en as hoe,fn as ni,hr as I,i as _a,k as D4,ki as he$1,kn as v4,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,ui as be$1,un as n4,wr as Kc,xn as s4,zi as kL}from"./main-FUFQFMHQ.js";var Ce=()=>({value:`disclaimer`});var Ee=a=>[a];var me=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-disclaimer-group-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-disclaimers`]],template:function(o,n){o&1&&Kc(0,`po-disclaimer-group`,0),o&2&&cE(`p-disclaimers`,AN(2,Ee,RN(1,Ce)))},dependencies:[s4],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-disclaimer-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Disclaimer Group Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-disclaimer-group-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Pe,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:`hideRemoveAll`,label:`Hide remove all`}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(l){this.event=l}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=``}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-disclaimer-group-labs`]],standalone:!1,decls:23,vars:12,consts:[[`disclaimerForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change`,`p-disclaimers`,`p-hide-remove-all`,`p-title`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`disclaimerLabel`,`p-label`,`Disclaimer Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-label`,`Disclaimer Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-label`,`Disclaimer Property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer Hide Close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Disclaimer`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,n){if(o&1){let s=Bx();Ac(0,`po-disclaimer-group`,2),pt(`p-change`,function(){return n.changeEvent(`p-change`)}),ug(),Kc(1,`po-divider`),Ac(2,`div`,3),Kc(3,`po-info`,4),ug(),Kc(4,`po-divider`),Ac(5,`form`,null,0)(7,`div`,3)(8,`po-input`,5),RE(`ngModelChange`,function(d){return Jv(s),DN(n.disclaimer.label,d)||(n.disclaimer.label=d),e_(d)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(d){return Jv(s),DN(n.disclaimer.value,d)||(n.disclaimer.value=d),e_(d)}),ug(),p0(),ug(),Ac(10,`div`,3)(11,`po-input`,7),RE(`ngModelChange`,function(d){return Jv(s),DN(n.disclaimer.property,d)||(n.disclaimer.property=d),e_(d)}),ug(),p0(),Ac(12,`po-switch`,8),RE(`ngModelChange`,function(d){return Jv(s),DN(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),e_(d)}),ug(),p0(),ug(),Ac(13,`div`,3)(14,`po-button`,9),pt(`p-click`,function(){return n.addDisclaimer()}),ug()()(),Kc(15,`po-divider`),Ac(16,`form`,null,1)(18,`div`,3)(19,`po-input`,10),RE(`ngModelChange`,function(d){return Jv(s),DN(n.title,d)||(n.title=d),e_(d)}),ug(),p0(),Ac(20,`po-checkbox-group`,11),RE(`ngModelChange`,function(d){return Jv(s),DN(n.properties,d)||(n.properties=d),e_(d)}),ug(),p0(),ug(),Ac(21,`div`,3)(22,`po-button`,12),pt(`p-click`,function(){Jv(s);let d=Zx(6),ve=Zx(17);return d.reset(),ve.reset(),e_(n.restore())}),ug()()()}if(o&2){let s=Zx(6);cE(`p-disclaimers`,n.disclaimers)(`p-hide-remove-all`,n.properties?.includes(`hideRemoveAll`))(`p-title`,n.title),Hp(3),cE(`p-value`,n.event),Hp(5),TE(`ngModel`,n.disclaimer.label),m0(),Hp(),TE(`ngModel`,n.disclaimer.value),m0(),Hp(2),TE(`ngModel`,n.disclaimer.property),m0(),Hp(),TE(`ngModel`,n.disclaimer.hideClose),m0(),Hp(2),cE(`p-disabled`,s.invalid),Hp(5),TE(`ngModel`,n.title),m0(),Hp(),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,s4,Ef,l4,D4,v4,hoe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-disclaimer-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Disclaimer Group Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-disclaimer-group
  [p-disclaimers]="disclaimers"
  [p-hide-remove-all]="properties?.includes('hideRemoveAll')"
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-disclaimer-group-labs`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ce],encapsulation:2,changeDetection:1})}return a})();var q=(()=>{class a{http=f(hw);getClimates(){return[{value:`arid`,label:`Arid`},{value:`frozen`,label:`Frozen`},{value:`murky`,label:`Murky`},{value:`temperate`,label:`Temperate`},{value:`tropical`,label:`Tropical`}]}getColumns(){return[{property:`name`,label:`Planet Name`},{property:`climate`,label:`Climate`},{property:`terrain`,label:`Terrain`},{property:`surface_water`,label:`Surface Water`},{property:`gravity`,label:`Gravity`},{property:`population`,label:`Population`,type:`number`}]}getItems(){return this.http.get(`https://swapi.dev/api/planets/`).pipe(q$1(l=>l.results))}getTerrains(){return[{value:`barren`,label:`Barren`},{value:`cityscape`,label:`Cityscape`},{value:`desert`,label:`Desert`},{value:`forests`,label:`Forests`},{value:`gas giant`,label:`Gas giant`},{value:`grasslands`,label:`Grasslands`},{value:`grassy hills`,label:`Grassy hills`},{value:`ice caves`,label:`Ice caves`},{value:`jungles`,label:`Jungles`},{value:`lakes`,label:`Lakes`},{value:`mountain ranges`,label:`Mountain ranges`},{value:`mountains`,label:`Mountains`},{value:`ocean`,label:`Ocean`},{value:`rainforests`,label:`Rainforests`},{value:`rock`,label:`Rock`},{value:`swamp`,label:`Swamp`},{value:`tundra`,label:`Tundra`}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n]}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter(`name`,`terrain`,`climate`)}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0)}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-disclaimer-group-sw-planets`]],standalone:!1,features:[be$1([q])],decls:8,vars:9,consts:[[1,`po-row`],[`name`,`name`,`p-help`,`Contains planet name`,`p-label`,`Planet Name`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`climate`,`p-help`,`Planet climate`,`p-label`,`Climate`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`terrain`,`p-help`,`Planet terrain`,`p-label`,`Terrain`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[3,`p-change`,`p-disclaimers`],[1,`po-md-12`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(o,n){o&1&&(Ac(0,`div`,0)(1,`po-input`,1),RE(`ngModelChange`,function(p){return DN(n.name,p)||(n.name=p),p}),pt(`p-change`,function(){return n.addFilter(n.name,`name`)}),ug(),p0(),Ac(2,`po-combo`,2),RE(`ngModelChange`,function(p){return DN(n.climate,p)||(n.climate=p),p}),pt(`p-change`,function(){return n.addFilter(n.climate,`climate`)}),ug(),p0(),Ac(3,`po-combo`,3),RE(`ngModelChange`,function(p){return DN(n.terrain,p)||(n.terrain=p),p}),pt(`p-change`,function(){return n.addFilter(n.terrain,`terrain`)}),ug(),p0(),Ac(4,`po-disclaimer-group`,4),pt(`p-change`,function(){return n.changeFilters(n.filters)}),ug()(),Kc(5,`po-divider`),Ac(6,`div`,0),Kc(7,`po-table`,5),ug()),o&2&&(Hp(),TE(`ngModel`,n.name),m0(),Hp(),TE(`ngModel`,n.climate),cE(`p-options`,n.climates),m0(),Hp(),TE(`ngModel`,n.terrain),cE(`p-options`,n.terrains),m0(),Hp(),cE(`p-disclaimers`,n.filters),Hp(3),cE(`p-columns`,n.columns)(`p-items`,n.filteredItems)(`p-hide-table-search`,!1))},dependencies:[D9,BP,s4,Ef,n4,D4,x4],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-disclaimer-group-sw-planets-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Disclaimer Group - Star Wars Planets`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable, inject } from '@angular/core';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-disclaimer-group-sw-planets`),ug(),Kc(27,`hr`)),o&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Me,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ge],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-disclaimer-group-doc`]],standalone:!1,decls:369,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-list`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`]],template:function(o,n){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoDisclaimerGroupModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-disclaimer-group.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoDisclaimerGroupComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-disclaimer-group`),ug(),vN(17,` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.`),ug(),Ac(18,`p`),vN(19,`À partir de dois `),Ac(20,`em`),vN(21,`disclaimers`),ug(),vN(22,` com o botão `),Ac(23,`strong`),vN(24,`fechar`),ug(),vN(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Ac(26,`em`),vN(27,`disclaimer`),ug(),vN(28,` que possibilita `),Ac(29,`strong`),vN(30,`remover todos`),ug(),vN(31,`, mas que também pode ser desabilitado.`),ug(),Ac(32,`p`),vN(33,`Também é possível navegar entre os `),Ac(34,`em`),vN(35,`disclaimers`),ug(),vN(36,` através do teclado utilizando a tecla `),Ac(37,`em`),vN(38,`tab`),ug(),vN(39,` e, para remoção do `),Ac(40,`em`),vN(41,`disclaimer`),ug(),vN(42,` selecionado,
basta pressionar a tecla `),Ac(43,`em`),vN(44,`enter`),ug(),vN(45,`. Esta funcionalidade não se aplica caso a propriedade `),Ac(46,`code`),vN(47,`hideClose`),ug(),vN(48,` estiver habilitada.`),ug(),Ac(49,`blockquote`)(50,`p`),vN(51,`Veja a integração destas funcionalidade no componente `),Ac(52,`a`,6),vN(53,`po-page-list`),ug(),vN(54,`. `),ug()()(),Ac(55,`div`,7)(56,`h4`,8),vN(57,`Seletor`),ug(),Ac(58,`pre`,9),vN(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),ug()(),Ac(60,`h4`,10),vN(61,`Propriedades`),ug(),Ac(62,`table`,11)(63,`tr`,12)(64,`th`,13),vN(65,`Nome`),ug(),Ac(66,`th`,13),vN(67,`Tipo`),ug(),Ac(68,`th`,13),vN(69,`Padrão`),ug(),Ac(70,`th`,13),vN(71,`Descrição`),ug()(),Ac(72,`tr`,14)(73,`td`,15)(74,`div`,16)(75,`span`,17),vN(76,` (p-change)`),Kc(77,`br`),ug()()(),Ac(78,`td`,18)(79,`code`,19),vN(80,`EventEmitter`),ug()(),Ac(81,`td`,20),vN(82,`-`),ug(),Ac(83,`td`,21)(84,`em`)(85,`strong`),vN(86,`(opcional)`),ug()(),Ac(87,`p`),vN(88,`Função que será disparada quando a lista de `),Ac(89,`em`),vN(90,`disclaimers`),ug(),vN(91,` for modificada.`),ug()()(),Ac(92,`tr`,14)(93,`td`,15)(94,`div`,22)(95,`span`,23),vN(96,` p-disclaimers`),Kc(97,`br`),ug()()(),Ac(98,`td`,18)(99,`code`,24),vN(100,`PoDisclaimer[]`),ug()(),Ac(101,`td`,20),vN(102,`-`),ug(),Ac(103,`td`,21)(104,`p`),vN(105,`Lista de `),Ac(106,`em`),vN(107,`disclaimers`),ug(),vN(108,`.`),ug(),Ac(109,`p`),vN(110,`Para que a lista de `),Ac(111,`em`),vN(112,`disclaimers`),ug(),vN(113,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Ac(114,`code`),vN(115,`PoDisclaimer`),ug(),vN(116,`.`),ug(),Ac(117,`p`),vN(118,`Exemplo adicionando um `),Ac(119,`em`),vN(120,`disclaimer`),ug(),vN(121,` no array:`),ug(),Ac(122,`pre`)(123,`code`),vN(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),ug()(),Ac(125,`p`),vN(126,`ou`),ug(),Ac(127,`pre`)(128,`code`),vN(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),ug()()()(),Ac(130,`tr`,14)(131,`td`,15)(132,`div`,22)(133,`span`,23),vN(134,` p-hide-remove-all`),Kc(135,`br`),ug()()(),Ac(136,`td`,18)(137,`code`,25),vN(138,`boolean`),ug()(),Ac(139,`td`,20)(140,`p`)(141,`code`),vN(142,`false`),ug()()(),Ac(143,`td`,21)(144,`em`)(145,`strong`),vN(146,`(opcional)`),ug()(),Ac(147,`p`),vN(148,`Oculta o botão para remover todos os `),Ac(149,`em`),vN(150,`disclaimers`),ug(),vN(151,` do grupo.`),ug(),Ac(152,`blockquote`)(153,`p`),vN(154,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Ac(155,`em`),vN(156,`disclaimers`),ug(),vN(157,` com a opção `),Ac(158,`code`),vN(159,`hideClose`),ug(),vN(160,` habilitada.`),ug()()()(),Ac(161,`tr`,14)(162,`td`,15)(163,`div`,16)(164,`span`,17),vN(165,` (p-remove)`),Kc(166,`br`),ug()()(),Ac(167,`td`,18)(168,`code`,19),vN(169,`EventEmitter`),ug()(),Ac(170,`td`,20),vN(171,`-`),ug(),Ac(172,`td`,21)(173,`em`)(174,`strong`),vN(175,`(opcional)`),ug()(),Ac(176,`p`),vN(177,`Função que será disparada quando um `),Ac(178,`em`),vN(179,`disclaimer`),ug(),vN(180,` for removido da lista de `),Ac(181,`em`),vN(182,`disclaimers`),ug(),vN(183,` pelo usuário.`),ug(),Ac(184,`p`),vN(185,`Recebe como parâmetro um objeto conforme a interface `),Ac(186,`code`),vN(187,`PoDisclaimerGroupRemoveAction`),ug(),vN(188,`.`),ug()()(),Ac(189,`tr`,14)(190,`td`,15)(191,`div`,16)(192,`span`,17),vN(193,` (p-remove-all)`),Kc(194,`br`),ug()()(),Ac(195,`td`,18)(196,`code`,19),vN(197,`EventEmitter`),ug()(),Ac(198,`td`,20),vN(199,`-`),ug(),Ac(200,`td`,21)(201,`em`)(202,`strong`),vN(203,`(opcional)`),ug()(),Ac(204,`p`),vN(205,`Função que será disparada quando todos os `),Ac(206,`em`),vN(207,`disclaimers`),ug(),vN(208,` forem removidos da lista de `),Ac(209,`em`),vN(210,`disclaimers`),ug(),vN(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),ug(),Ac(212,`p`),vN(213,`Recebe como parâmetro uma lista contendo todos os `),Ac(214,`code`),vN(215,`disclaimers`),ug(),vN(216,` removidos.`),ug()()(),Ac(217,`tr`,14)(218,`td`,15)(219,`div`,22)(220,`span`,23),vN(221,` p-title`),Kc(222,`br`),ug()()(),Ac(223,`td`,18)(224,`code`,26),vN(225,`string`),ug()(),Ac(226,`td`,20),vN(227,`-`),ug(),Ac(228,`td`,21)(229,`em`)(230,`strong`),vN(231,`(opcional)`),ug()(),Ac(232,`p`),vN(233,`Título do grupo de `),Ac(234,`em`),vN(235,`disclaimers`),ug(),vN(236,`.`),ug()()()(),Ac(237,`h3`),vN(238,`Interfaces`),ug(),Ac(239,`h4`,27)(240,`code`,5),vN(241,`PoDisclaimer`),ug()(),Ac(242,`div`,2)(243,`p`),vN(244,`Interface que representa o objeto `),Ac(245,`code`),vN(246,`po-disclaimer`),ug(),vN(247,`.`),ug()(),Ac(248,`h4`,10),vN(249,`Propriedades`),ug(),Ac(250,`table`,11)(251,`tr`,12)(252,`th`,13),vN(253,`Nome`),ug(),Ac(254,`th`,13),vN(255,`Tipo`),ug(),Ac(256,`th`,13),vN(257,`Descrição`),ug()(),Ac(258,`tr`,14)(259,`td`,15)(260,`div`,22)(261,`span`,23),vN(262,` hideClose`),Kc(263,`br`),ug()()(),Ac(264,`td`,18)(265,`code`,25),vN(266,`boolean`),ug()(),Ac(267,`td`,21)(268,`em`)(269,`strong`),vN(270,`(opcional)`),ug()(),Ac(271,`p`),vN(272,`Se verdadeiro, oculta o botão para fechar o `),Ac(273,`em`),vN(274,`disclaimer`),ug(),vN(275,`.`),ug()()(),Ac(276,`tr`,14)(277,`td`,15)(278,`div`,22)(279,`span`,23),vN(280,` label`),Kc(281,`br`),ug()()(),Ac(282,`td`,18)(283,`code`,26),vN(284,`string`),ug()(),Ac(285,`td`,21)(286,`em`)(287,`strong`),vN(288,`(opcional)`),ug()(),Ac(289,`p`),vN(290,`Texto de exibição do objeto.`),ug()()(),Ac(291,`tr`,14)(292,`td`,15)(293,`div`,22)(294,`span`,23),vN(295,` property`),Kc(296,`br`),ug()()(),Ac(297,`td`,18)(298,`code`,26),vN(299,`string`),ug()(),Ac(300,`td`,21)(301,`em`)(302,`strong`),vN(303,`(opcional)`),ug()(),Ac(304,`p`),vN(305,`Nome da propriedade vinculada ao objeto `),Ac(306,`em`),vN(307,`disclaimer`),ug(),vN(308,`.`),ug()()(),Ac(309,`tr`,14)(310,`td`,15)(311,`div`,22)(312,`span`,23),vN(313,` value`),Kc(314,`br`),ug()()(),Ac(315,`td`,18)(316,`code`,28),vN(317,`any`),ug()(),Ac(318,`td`,21)(319,`p`),vN(320,`Valor do objeto.`),ug()()()(),Ac(321,`h4`,27)(322,`code`,5),vN(323,`PoDisclaimerGroupRemoveAction`),ug()(),Ac(324,`div`,2)(325,`p`),vN(326,`Estrutura do objeto representando o estado dos `),Ac(327,`em`),vN(328,`disclaimers`),ug(),vN(329,` após a remoção.`),ug()(),Ac(330,`h4`,10),vN(331,`Propriedades`),ug(),Ac(332,`table`,11)(333,`tr`,12)(334,`th`,13),vN(335,`Nome`),ug(),Ac(336,`th`,13),vN(337,`Tipo`),ug(),Ac(338,`th`,13),vN(339,`Descrição`),ug()(),Ac(340,`tr`,14)(341,`td`,15)(342,`div`,22)(343,`span`,23),vN(344,` currentDisclaimers`),Kc(345,`br`),ug()()(),Ac(346,`td`,18)(347,`code`,29),vN(348,`Array<PoDisclaimer>`),ug()(),Ac(349,`td`,21)(350,`p`),vN(351,`Lista com os `),Ac(352,`em`),vN(353,`disclaimers`),ug(),vN(354,` atuais (restantes).`),ug()()(),Ac(355,`tr`,14)(356,`td`,15)(357,`div`,22)(358,`span`,23),vN(359,` removedDisclaimer`),Kc(360,`br`),ug()()(),Ac(361,`td`,18)(362,`code`,30),vN(363,`PoDisclaimer`),ug()(),Ac(364,`td`,21)(365,`p`)(366,`em`),vN(367,`Disclaimer`),ug(),vN(368,` que foi removido.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ie=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Disclaimer Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,n){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-disclaimer-group-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-disclaimer-group-basic-view`)(6,`sample-po-disclaimer-group-labs-view`)(7,`sample-po-disclaimer-group-sw-planets-view`),ug()()()),o&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,de,ue,he,be],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[kL.forChild(Ie),kL]})}return a})();var ct=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[Ta,fe]})}return a})();export{ct as DocPoDisclaimerGroupModule};