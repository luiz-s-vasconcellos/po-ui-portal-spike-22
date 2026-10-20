import{$r as Zn,Br as Sx,Ca as zw,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Pr as R,Ri as nu,Rt as _oe,Vi as p,Vr as TF,X as Lf,Xi as sO,Xr as Y,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,fa as we,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,pa as wg,r as Ta,rn as h5,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,vn as p5,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Ce=()=>({value:`disclaimer`});var Ee=a=>[a];var me=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-disclaimer-group-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-disclaimers`]],template:function(o,n){o&1&&nu(0,`po-disclaimer-group`,0),o&2&&jE(`p-disclaimers`,mO(2,Ee,gO(1,Ce)))},dependencies:[h5],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-disclaimer-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Disclaimer Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-disclaimer-group-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Pe,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:`hideRemoveAll`,label:`Hide remove all`}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(l){this.event=l}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=``}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-disclaimer-group-labs`]],standalone:!1,decls:23,vars:12,consts:[[`disclaimerForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change`,`p-disclaimers`,`p-hide-remove-all`,`p-title`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`disclaimerLabel`,`p-label`,`Disclaimer Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-label`,`Disclaimer Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-label`,`Disclaimer Property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer Hide Close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Disclaimer`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,n){if(o&1){let s=Sx();jc(0,`po-disclaimer-group`,2),mt(`p-change`,function(){return n.changeEvent(`p-change`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4),wg(),nu(4,`po-divider`),jc(5,`form`,null,0)(7,`div`,3)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(d){return y_(s),sO(n.disclaimer.label,d)||(n.disclaimer.label=d),v_(d)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(d){return y_(s),sO(n.disclaimer.value,d)||(n.disclaimer.value=d),v_(d)}),wg()(),jc(10,`div`,3)(11,`po-input`,7),JN(),ob(`ngModelChange`,function(d){return y_(s),sO(n.disclaimer.property,d)||(n.disclaimer.property=d),v_(d)}),wg(),jc(12,`po-switch`,8),JN(),ob(`ngModelChange`,function(d){return y_(s),sO(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),v_(d)}),wg()(),jc(13,`div`,3)(14,`po-button`,9),mt(`p-click`,function(){return n.addDisclaimer()}),wg()()(),nu(15,`po-divider`),jc(16,`form`,null,1)(18,`div`,3)(19,`po-input`,10),JN(),ob(`ngModelChange`,function(d){return y_(s),sO(n.title,d)||(n.title=d),v_(d)}),wg(),jc(20,`po-checkbox-group`,11),JN(),ob(`ngModelChange`,function(d){return y_(s),sO(n.properties,d)||(n.properties=d),v_(d)}),wg()(),jc(21,`div`,3)(22,`po-button`,12),mt(`p-click`,function(){y_(s);let d=Fx(6),ve=Fx(17);return d.reset(),ve.reset(),v_(n.restore())}),wg()()()}if(o&2){let s=Fx(6);jE(`p-disclaimers`,n.disclaimers)(`p-hide-remove-all`,n.properties?.includes(`hideRemoveAll`))(`p-title`,n.title),rg(3),jE(`p-value`,n.event),rg(5),ib(`ngModel`,n.disclaimer.label),t0(),rg(),ib(`ngModel`,n.disclaimer.value),t0(),rg(2),ib(`ngModel`,n.disclaimer.property),t0(),rg(),ib(`ngModel`,n.disclaimer.hideClose),t0(),rg(2),jE(`p-disabled`,s.invalid),rg(5),ib(`ngModel`,n.title),t0(),rg(),ib(`ngModel`,n.properties),jE(`p-options`,n.propertiesOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,h5,Lf,m5,A5,w5,_oe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-disclaimer-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Disclaimer Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-disclaimer-group
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-disclaimer-group-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ce],encapsulation:2,changeDetection:1})}return a})();var q=(()=>{class a{http=p(zw);getClimates(){return[{value:`arid`,label:`Arid`},{value:`frozen`,label:`Frozen`},{value:`murky`,label:`Murky`},{value:`temperate`,label:`Temperate`},{value:`tropical`,label:`Tropical`}]}getColumns(){return[{property:`name`,label:`Planet Name`},{property:`climate`,label:`Climate`},{property:`terrain`,label:`Terrain`},{property:`surface_water`,label:`Surface Water`},{property:`gravity`,label:`Gravity`},{property:`population`,label:`Population`,type:`number`}]}getItems(){return this.http.get(`https://swapi.dev/api/planets/`).pipe(Y(l=>l.results))}getTerrains(){return[{value:`barren`,label:`Barren`},{value:`cityscape`,label:`Cityscape`},{value:`desert`,label:`Desert`},{value:`forests`,label:`Forests`},{value:`gas giant`,label:`Gas giant`},{value:`grasslands`,label:`Grasslands`},{value:`grassy hills`,label:`Grassy hills`},{value:`ice caves`,label:`Ice caves`},{value:`jungles`,label:`Jungles`},{value:`lakes`,label:`Lakes`},{value:`mountain ranges`,label:`Mountain ranges`},{value:`mountains`,label:`Mountains`},{value:`ocean`,label:`Ocean`},{value:`rainforests`,label:`Rainforests`},{value:`rock`,label:`Rock`},{value:`swamp`,label:`Swamp`},{value:`tundra`,label:`Tundra`}]}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=p(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n]}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter(`name`,`terrain`,`climate`)}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0)}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-disclaimer-group-sw-planets`]],standalone:!1,features:[we([q])],decls:8,vars:9,consts:[[1,`po-row`],[`name`,`name`,`p-help`,`Contains planet name`,`p-label`,`Planet Name`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`climate`,`p-help`,`Planet climate`,`p-label`,`Climate`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`terrain`,`p-help`,`Planet terrain`,`p-label`,`Terrain`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[3,`p-change`,`p-disclaimers`],[1,`po-md-12`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(o,n){o&1&&(jc(0,`div`,0)(1,`po-input`,1),JN(),ob(`ngModelChange`,function(p){return sO(n.name,p)||(n.name=p),p}),mt(`p-change`,function(){return n.addFilter(n.name,`name`)}),wg(),jc(2,`po-combo`,2),JN(),ob(`ngModelChange`,function(p){return sO(n.climate,p)||(n.climate=p),p}),mt(`p-change`,function(){return n.addFilter(n.climate,`climate`)}),wg(),jc(3,`po-combo`,3),JN(),ob(`ngModelChange`,function(p){return sO(n.terrain,p)||(n.terrain=p),p}),mt(`p-change`,function(){return n.addFilter(n.terrain,`terrain`)}),wg(),jc(4,`po-disclaimer-group`,4),mt(`p-change`,function(){return n.changeFilters(n.filters)}),wg()(),nu(5,`po-divider`),jc(6,`div`,0),nu(7,`po-table`,5),wg()),o&2&&(rg(),ib(`ngModel`,n.name),t0(),rg(),ib(`ngModel`,n.climate),jE(`p-options`,n.climates),t0(),rg(),ib(`ngModel`,n.terrain),jE(`p-options`,n.terrains),t0(),rg(),jE(`p-disclaimers`,n.filters),rg(3),jE(`p-columns`,n.columns)(`p-items`,n.filteredItems)(`p-hide-table-search`,!1))},dependencies:[CK,TF,h5,Lf,p5,A5,I5],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-disclaimer-group-sw-planets-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Disclaimer Group - Star Wars Planets`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable, inject } from '@angular/core';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-disclaimer-group-sw-planets`),wg(),nu(27,`hr`)),o&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Me,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-disclaimer-group-doc`]],standalone:!1,decls:369,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-list`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`]],template:function(o,n){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoDisclaimerGroupModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-disclaimer-group.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoDisclaimerGroupComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-disclaimer-group`),wg(),iO(17,` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.`),wg(),jc(18,`p`),iO(19,`À partir de dois `),jc(20,`em`),iO(21,`disclaimers`),wg(),iO(22,` com o botão `),jc(23,`strong`),iO(24,`fechar`),wg(),iO(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),jc(26,`em`),iO(27,`disclaimer`),wg(),iO(28,` que possibilita `),jc(29,`strong`),iO(30,`remover todos`),wg(),iO(31,`, mas que também pode ser desabilitado.`),wg(),jc(32,`p`),iO(33,`Também é possível navegar entre os `),jc(34,`em`),iO(35,`disclaimers`),wg(),iO(36,` através do teclado utilizando a tecla `),jc(37,`em`),iO(38,`tab`),wg(),iO(39,` e, para remoção do `),jc(40,`em`),iO(41,`disclaimer`),wg(),iO(42,` selecionado,
basta pressionar a tecla `),jc(43,`em`),iO(44,`enter`),wg(),iO(45,`. Esta funcionalidade não se aplica caso a propriedade `),jc(46,`code`),iO(47,`hideClose`),wg(),iO(48,` estiver habilitada.`),wg(),jc(49,`blockquote`)(50,`p`),iO(51,`Veja a integração destas funcionalidade no componente `),jc(52,`a`,6),iO(53,`po-page-list`),wg(),iO(54,`. `),wg()()(),jc(55,`div`,7)(56,`h4`,8),iO(57,`Seletor`),wg(),jc(58,`pre`,9),iO(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),wg()(),jc(60,`h4`,10),iO(61,`Propriedades`),wg(),jc(62,`table`,11)(63,`tr`,12)(64,`th`,13),iO(65,`Nome`),wg(),jc(66,`th`,13),iO(67,`Tipo`),wg(),jc(68,`th`,13),iO(69,`Padrão`),wg(),jc(70,`th`,13),iO(71,`Descrição`),wg()(),jc(72,`tr`,14)(73,`td`,15)(74,`div`,16)(75,`span`,17),iO(76,` (p-change)`),nu(77,`br`),wg()()(),jc(78,`td`,18)(79,`code`,19),iO(80,`EventEmitter`),wg()(),jc(81,`td`,20),iO(82,`-`),wg(),jc(83,`td`,21)(84,`em`)(85,`strong`),iO(86,`(opcional)`),wg()(),jc(87,`p`),iO(88,`Função que será disparada quando a lista de `),jc(89,`em`),iO(90,`disclaimers`),wg(),iO(91,` for modificada.`),wg()()(),jc(92,`tr`,14)(93,`td`,15)(94,`div`,22)(95,`span`,23),iO(96,` p-disclaimers`),nu(97,`br`),wg()()(),jc(98,`td`,18)(99,`code`,24),iO(100,`PoDisclaimer[]`),wg()(),jc(101,`td`,20),iO(102,`-`),wg(),jc(103,`td`,21)(104,`p`),iO(105,`Lista de `),jc(106,`em`),iO(107,`disclaimers`),wg(),iO(108,`.`),wg(),jc(109,`p`),iO(110,`Para que a lista de `),jc(111,`em`),iO(112,`disclaimers`),wg(),iO(113,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),jc(114,`code`),iO(115,`PoDisclaimer`),wg(),iO(116,`.`),wg(),jc(117,`p`),iO(118,`Exemplo adicionando um `),jc(119,`em`),iO(120,`disclaimer`),wg(),iO(121,` no array:`),wg(),jc(122,`pre`)(123,`code`),iO(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),wg()(),jc(125,`p`),iO(126,`ou`),wg(),jc(127,`pre`)(128,`code`),iO(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),wg()()()(),jc(130,`tr`,14)(131,`td`,15)(132,`div`,22)(133,`span`,23),iO(134,` p-hide-remove-all`),nu(135,`br`),wg()()(),jc(136,`td`,18)(137,`code`,25),iO(138,`boolean`),wg()(),jc(139,`td`,20)(140,`p`)(141,`code`),iO(142,`false`),wg()()(),jc(143,`td`,21)(144,`em`)(145,`strong`),iO(146,`(opcional)`),wg()(),jc(147,`p`),iO(148,`Oculta o botão para remover todos os `),jc(149,`em`),iO(150,`disclaimers`),wg(),iO(151,` do grupo.`),wg(),jc(152,`blockquote`)(153,`p`),iO(154,`Por padrão, o mesmo é exibido à partir de dois ou mais `),jc(155,`em`),iO(156,`disclaimers`),wg(),iO(157,` com a opção `),jc(158,`code`),iO(159,`hideClose`),wg(),iO(160,` habilitada.`),wg()()()(),jc(161,`tr`,14)(162,`td`,15)(163,`div`,16)(164,`span`,17),iO(165,` (p-remove)`),nu(166,`br`),wg()()(),jc(167,`td`,18)(168,`code`,19),iO(169,`EventEmitter`),wg()(),jc(170,`td`,20),iO(171,`-`),wg(),jc(172,`td`,21)(173,`em`)(174,`strong`),iO(175,`(opcional)`),wg()(),jc(176,`p`),iO(177,`Função que será disparada quando um `),jc(178,`em`),iO(179,`disclaimer`),wg(),iO(180,` for removido da lista de `),jc(181,`em`),iO(182,`disclaimers`),wg(),iO(183,` pelo usuário.`),wg(),jc(184,`p`),iO(185,`Recebe como parâmetro um objeto conforme a interface `),jc(186,`code`),iO(187,`PoDisclaimerGroupRemoveAction`),wg(),iO(188,`.`),wg()()(),jc(189,`tr`,14)(190,`td`,15)(191,`div`,16)(192,`span`,17),iO(193,` (p-remove-all)`),nu(194,`br`),wg()()(),jc(195,`td`,18)(196,`code`,19),iO(197,`EventEmitter`),wg()(),jc(198,`td`,20),iO(199,`-`),wg(),jc(200,`td`,21)(201,`em`)(202,`strong`),iO(203,`(opcional)`),wg()(),jc(204,`p`),iO(205,`Função que será disparada quando todos os `),jc(206,`em`),iO(207,`disclaimers`),wg(),iO(208,` forem removidos da lista de `),jc(209,`em`),iO(210,`disclaimers`),wg(),iO(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),wg(),jc(212,`p`),iO(213,`Recebe como parâmetro uma lista contendo todos os `),jc(214,`code`),iO(215,`disclaimers`),wg(),iO(216,` removidos.`),wg()()(),jc(217,`tr`,14)(218,`td`,15)(219,`div`,22)(220,`span`,23),iO(221,` p-title`),nu(222,`br`),wg()()(),jc(223,`td`,18)(224,`code`,26),iO(225,`string`),wg()(),jc(226,`td`,20),iO(227,`-`),wg(),jc(228,`td`,21)(229,`em`)(230,`strong`),iO(231,`(opcional)`),wg()(),jc(232,`p`),iO(233,`Título do grupo de `),jc(234,`em`),iO(235,`disclaimers`),wg(),iO(236,`.`),wg()()()(),jc(237,`h3`),iO(238,`Interfaces`),wg(),jc(239,`h4`,27)(240,`code`,5),iO(241,`PoDisclaimer`),wg()(),jc(242,`div`,2)(243,`p`),iO(244,`Interface que representa o objeto `),jc(245,`code`),iO(246,`po-disclaimer`),wg(),iO(247,`.`),wg()(),jc(248,`h4`,10),iO(249,`Propriedades`),wg(),jc(250,`table`,11)(251,`tr`,12)(252,`th`,13),iO(253,`Nome`),wg(),jc(254,`th`,13),iO(255,`Tipo`),wg(),jc(256,`th`,13),iO(257,`Descrição`),wg()(),jc(258,`tr`,14)(259,`td`,15)(260,`div`,22)(261,`span`,23),iO(262,` hideClose`),nu(263,`br`),wg()()(),jc(264,`td`,18)(265,`code`,25),iO(266,`boolean`),wg()(),jc(267,`td`,21)(268,`em`)(269,`strong`),iO(270,`(opcional)`),wg()(),jc(271,`p`),iO(272,`Se verdadeiro, oculta o botão para fechar o `),jc(273,`em`),iO(274,`disclaimer`),wg(),iO(275,`.`),wg()()(),jc(276,`tr`,14)(277,`td`,15)(278,`div`,22)(279,`span`,23),iO(280,` label`),nu(281,`br`),wg()()(),jc(282,`td`,18)(283,`code`,26),iO(284,`string`),wg()(),jc(285,`td`,21)(286,`em`)(287,`strong`),iO(288,`(opcional)`),wg()(),jc(289,`p`),iO(290,`Texto de exibição do objeto.`),wg()()(),jc(291,`tr`,14)(292,`td`,15)(293,`div`,22)(294,`span`,23),iO(295,` property`),nu(296,`br`),wg()()(),jc(297,`td`,18)(298,`code`,26),iO(299,`string`),wg()(),jc(300,`td`,21)(301,`em`)(302,`strong`),iO(303,`(opcional)`),wg()(),jc(304,`p`),iO(305,`Nome da propriedade vinculada ao objeto `),jc(306,`em`),iO(307,`disclaimer`),wg(),iO(308,`.`),wg()()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,22)(312,`span`,23),iO(313,` value`),nu(314,`br`),wg()()(),jc(315,`td`,18)(316,`code`,28),iO(317,`any`),wg()(),jc(318,`td`,21)(319,`p`),iO(320,`Valor do objeto.`),wg()()()(),jc(321,`h4`,27)(322,`code`,5),iO(323,`PoDisclaimerGroupRemoveAction`),wg()(),jc(324,`div`,2)(325,`p`),iO(326,`Estrutura do objeto representando o estado dos `),jc(327,`em`),iO(328,`disclaimers`),wg(),iO(329,` após a remoção.`),wg()(),jc(330,`h4`,10),iO(331,`Propriedades`),wg(),jc(332,`table`,11)(333,`tr`,12)(334,`th`,13),iO(335,`Nome`),wg(),jc(336,`th`,13),iO(337,`Tipo`),wg(),jc(338,`th`,13),iO(339,`Descrição`),wg()(),jc(340,`tr`,14)(341,`td`,15)(342,`div`,22)(343,`span`,23),iO(344,` currentDisclaimers`),nu(345,`br`),wg()()(),jc(346,`td`,18)(347,`code`,29),iO(348,`Array<PoDisclaimer>`),wg()(),jc(349,`td`,21)(350,`p`),iO(351,`Lista com os `),jc(352,`em`),iO(353,`disclaimers`),wg(),iO(354,` atuais (restantes).`),wg()()(),jc(355,`tr`,14)(356,`td`,15)(357,`div`,22)(358,`span`,23),iO(359,` removedDisclaimer`),nu(360,`br`),wg()()(),jc(361,`td`,18)(362,`code`,30),iO(363,`PoDisclaimer`),wg()(),jc(364,`td`,21)(365,`p`)(366,`em`),iO(367,`Disclaimer`),wg(),iO(368,` que foi removido.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ie=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Disclaimer Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,n){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-disclaimer-group-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-disclaimer-group-basic-view`)(6,`sample-po-disclaimer-group-labs-view`)(7,`sample-po-disclaimer-group-sw-planets-view`),wg()()()),o&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,de,ue,he,be],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue$1({imports:[C1.forChild(Ie),C1]})}return a})();var ct=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue$1({imports:[Ta,fe]})}return a})();export{ct as DocPoDisclaimerGroupModule};