import{$r as Vx,Br as TN,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,S as B4,Sa as yN,Si as db,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce$1,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,dn as oU,ea as p0,ga as w,hn as q4,ia as q$1,ir as I,l as ar,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var Ce=()=>({value:`disclaimer`});var Ee=a=>[a];var me=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-disclaimer-group-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-disclaimers`]],template:function(o,n){o&1&&ql(0,`po-disclaimer-group`,0),o&2&&cw(`p-disclaimers`,MN(2,Ee,TN(1,Ce)))},dependencies:[q4],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-disclaimer-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Disclaimer Group Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-disclaimer-group-basic`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Pe,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:`hideRemoveAll`,label:`Hide remove all`}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(l){this.event=l}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=``}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-disclaimer-group-labs`]],standalone:!1,decls:23,vars:12,consts:[[`disclaimerForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change`,`p-disclaimers`,`p-hide-remove-all`,`p-title`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`disclaimerLabel`,`p-label`,`Disclaimer Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-label`,`Disclaimer Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-label`,`Disclaimer Property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer Hide Close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Disclaimer`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,n){if(o&1){let s=Vx();Ml(0,`po-disclaimer-group`,2),ht(`p-change`,function(){return n.changeEvent(`p-change`)}),lg(),ql(1,`po-divider`),Ml(2,`div`,3),ql(3,`po-info`,4),lg(),ql(4,`po-divider`),Ml(5,`form`,null,0)(7,`div`,3)(8,`po-input`,5),Mw(`ngModelChange`,function(d){return Qy(s),yN(n.disclaimer.label,d)||(n.disclaimer.label=d),Jy(d)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(d){return Qy(s),yN(n.disclaimer.value,d)||(n.disclaimer.value=d),Jy(d)}),lg(),f0(),lg(),Ml(10,`div`,3)(11,`po-input`,7),Mw(`ngModelChange`,function(d){return Qy(s),yN(n.disclaimer.property,d)||(n.disclaimer.property=d),Jy(d)}),lg(),f0(),Ml(12,`po-switch`,8),Mw(`ngModelChange`,function(d){return Qy(s),yN(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),Jy(d)}),lg(),f0(),lg(),Ml(13,`div`,3)(14,`po-button`,9),ht(`p-click`,function(){return n.addDisclaimer()}),lg()()(),ql(15,`po-divider`),Ml(16,`form`,null,1)(18,`div`,3)(19,`po-input`,10),Mw(`ngModelChange`,function(d){return Qy(s),yN(n.title,d)||(n.title=d),Jy(d)}),lg(),f0(),Ml(20,`po-checkbox-group`,11),Mw(`ngModelChange`,function(d){return Qy(s),yN(n.properties,d)||(n.properties=d),Jy(d)}),lg(),f0(),lg(),Ml(21,`div`,3)(22,`po-button`,12),ht(`p-click`,function(){Qy(s);let d=Yx(6),ve=Yx(17);return d.reset(),ve.reset(),Jy(n.restore())}),lg()()()}if(o&2){let s=Yx(6);cw(`p-disclaimers`,n.disclaimers)(`p-hide-remove-all`,n.properties?.includes(`hideRemoveAll`))(`p-title`,n.title),Up(3),cw(`p-value`,n.event),Up(5),Tw(`ngModel`,n.disclaimer.label),p0(),Up(),Tw(`ngModel`,n.disclaimer.value),p0(),Up(2),Tw(`ngModel`,n.disclaimer.property),p0(),Up(),Tw(`ngModel`,n.disclaimer.hideClose),p0(),Up(2),cw(`p-disabled`,s.invalid),Up(5),Tw(`ngModel`,n.title),p0(),Up(),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,q4,nb,G4,lU,J4,kbe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-disclaimer-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Disclaimer Group Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-disclaimer-group
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-disclaimer-group-labs`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ce],encapsulation:2,changeDetection:1})}return a})();var q=(()=>{class a{http=f(db);getClimates(){return[{value:`arid`,label:`Arid`},{value:`frozen`,label:`Frozen`},{value:`murky`,label:`Murky`},{value:`temperate`,label:`Temperate`},{value:`tropical`,label:`Tropical`}]}getColumns(){return[{property:`name`,label:`Planet Name`},{property:`climate`,label:`Climate`},{property:`terrain`,label:`Terrain`},{property:`surface_water`,label:`Surface Water`},{property:`gravity`,label:`Gravity`},{property:`population`,label:`Population`,type:`number`}]}getItems(){return this.http.get(`https://swapi.dev/api/planets/`).pipe(q$1(l=>l.results))}getTerrains(){return[{value:`barren`,label:`Barren`},{value:`cityscape`,label:`Cityscape`},{value:`desert`,label:`Desert`},{value:`forests`,label:`Forests`},{value:`gas giant`,label:`Gas giant`},{value:`grasslands`,label:`Grasslands`},{value:`grassy hills`,label:`Grassy hills`},{value:`ice caves`,label:`Ice caves`},{value:`jungles`,label:`Jungles`},{value:`lakes`,label:`Lakes`},{value:`mountain ranges`,label:`Mountain ranges`},{value:`mountains`,label:`Mountains`},{value:`ocean`,label:`Ocean`},{value:`rainforests`,label:`Rainforests`},{value:`rock`,label:`Rock`},{value:`swamp`,label:`Swamp`},{value:`tundra`,label:`Tundra`}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n]}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter(`name`,`terrain`,`climate`)}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0)}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-disclaimer-group-sw-planets`]],standalone:!1,features:[Ce$1([q])],decls:8,vars:9,consts:[[1,`po-row`],[`name`,`name`,`p-help`,`Contains planet name`,`p-label`,`Planet Name`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`climate`,`p-help`,`Planet climate`,`p-label`,`Climate`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`terrain`,`p-help`,`Planet terrain`,`p-label`,`Terrain`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[3,`p-change`,`p-disclaimers`],[1,`po-md-12`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(o,n){o&1&&(Ml(0,`div`,0)(1,`po-input`,1),Mw(`ngModelChange`,function(p){return yN(n.name,p)||(n.name=p),p}),ht(`p-change`,function(){return n.addFilter(n.name,`name`)}),lg(),f0(),Ml(2,`po-combo`,2),Mw(`ngModelChange`,function(p){return yN(n.climate,p)||(n.climate=p),p}),ht(`p-change`,function(){return n.addFilter(n.climate,`climate`)}),lg(),f0(),Ml(3,`po-combo`,3),Mw(`ngModelChange`,function(p){return yN(n.terrain,p)||(n.terrain=p),p}),ht(`p-change`,function(){return n.addFilter(n.terrain,`terrain`)}),lg(),f0(),Ml(4,`po-disclaimer-group`,4),ht(`p-change`,function(){return n.changeFilters(n.filters)}),lg()(),ql(5,`po-divider`),Ml(6,`div`,0),ql(7,`po-table`,5),lg()),o&2&&(Up(),Tw(`ngModel`,n.name),p0(),Up(),Tw(`ngModel`,n.climate),cw(`p-options`,n.climates),p0(),Up(),Tw(`ngModel`,n.terrain),cw(`p-options`,n.terrains),p0(),Up(),cw(`p-disclaimers`,n.filters),Up(3),cw(`p-columns`,n.columns)(`p-items`,n.filteredItems)(`p-hide-table-search`,!1))},dependencies:[wY,Vk,q4,nb,B4,lU,oU],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-disclaimer-group-sw-planets-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,n){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Disclaimer Group - Star Wars Planets`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable, inject } from '@angular/core';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-disclaimer-group-sw-planets`),lg(),ql(27,`hr`)),o&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Me,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-disclaimer-group-doc`]],standalone:!1,decls:369,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-list`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`]],template:function(o,n){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoDisclaimerGroupModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-disclaimer-group.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoDisclaimerGroupComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-disclaimer-group`),lg(),mN(17,` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.`),lg(),Ml(18,`p`),mN(19,`À partir de dois `),Ml(20,`em`),mN(21,`disclaimers`),lg(),mN(22,` com o botão `),Ml(23,`strong`),mN(24,`fechar`),lg(),mN(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Ml(26,`em`),mN(27,`disclaimer`),lg(),mN(28,` que possibilita `),Ml(29,`strong`),mN(30,`remover todos`),lg(),mN(31,`, mas que também pode ser desabilitado.`),lg(),Ml(32,`p`),mN(33,`Também é possível navegar entre os `),Ml(34,`em`),mN(35,`disclaimers`),lg(),mN(36,` através do teclado utilizando a tecla `),Ml(37,`em`),mN(38,`tab`),lg(),mN(39,` e, para remoção do `),Ml(40,`em`),mN(41,`disclaimer`),lg(),mN(42,` selecionado,
basta pressionar a tecla `),Ml(43,`em`),mN(44,`enter`),lg(),mN(45,`. Esta funcionalidade não se aplica caso a propriedade `),Ml(46,`code`),mN(47,`hideClose`),lg(),mN(48,` estiver habilitada.`),lg(),Ml(49,`blockquote`)(50,`p`),mN(51,`Veja a integração destas funcionalidade no componente `),Ml(52,`a`,6),mN(53,`po-page-list`),lg(),mN(54,`. `),lg()()(),Ml(55,`div`,7)(56,`h4`,8),mN(57,`Seletor`),lg(),Ml(58,`pre`,9),mN(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),lg()(),Ml(60,`h4`,10),mN(61,`Propriedades`),lg(),Ml(62,`table`,11)(63,`tr`,12)(64,`th`,13),mN(65,`Nome`),lg(),Ml(66,`th`,13),mN(67,`Tipo`),lg(),Ml(68,`th`,13),mN(69,`Padrão`),lg(),Ml(70,`th`,13),mN(71,`Descrição`),lg()(),Ml(72,`tr`,14)(73,`td`,15)(74,`div`,16)(75,`span`,17),mN(76,` (p-change)`),ql(77,`br`),lg()()(),Ml(78,`td`,18)(79,`code`,19),mN(80,`EventEmitter`),lg()(),Ml(81,`td`,20),mN(82,`-`),lg(),Ml(83,`td`,21)(84,`em`)(85,`strong`),mN(86,`(opcional)`),lg()(),Ml(87,`p`),mN(88,`Função que será disparada quando a lista de `),Ml(89,`em`),mN(90,`disclaimers`),lg(),mN(91,` for modificada.`),lg()()(),Ml(92,`tr`,14)(93,`td`,15)(94,`div`,22)(95,`span`,23),mN(96,` p-disclaimers`),ql(97,`br`),lg()()(),Ml(98,`td`,18)(99,`code`,24),mN(100,`PoDisclaimer[]`),lg()(),Ml(101,`td`,20),mN(102,`-`),lg(),Ml(103,`td`,21)(104,`p`),mN(105,`Lista de `),Ml(106,`em`),mN(107,`disclaimers`),lg(),mN(108,`.`),lg(),Ml(109,`p`),mN(110,`Para que a lista de `),Ml(111,`em`),mN(112,`disclaimers`),lg(),mN(113,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Ml(114,`code`),mN(115,`PoDisclaimer`),lg(),mN(116,`.`),lg(),Ml(117,`p`),mN(118,`Exemplo adicionando um `),Ml(119,`em`),mN(120,`disclaimer`),lg(),mN(121,` no array:`),lg(),Ml(122,`pre`)(123,`code`),mN(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),lg()(),Ml(125,`p`),mN(126,`ou`),lg(),Ml(127,`pre`)(128,`code`),mN(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),lg()()()(),Ml(130,`tr`,14)(131,`td`,15)(132,`div`,22)(133,`span`,23),mN(134,` p-hide-remove-all`),ql(135,`br`),lg()()(),Ml(136,`td`,18)(137,`code`,25),mN(138,`boolean`),lg()(),Ml(139,`td`,20)(140,`p`)(141,`code`),mN(142,`false`),lg()()(),Ml(143,`td`,21)(144,`em`)(145,`strong`),mN(146,`(opcional)`),lg()(),Ml(147,`p`),mN(148,`Oculta o botão para remover todos os `),Ml(149,`em`),mN(150,`disclaimers`),lg(),mN(151,` do grupo.`),lg(),Ml(152,`blockquote`)(153,`p`),mN(154,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Ml(155,`em`),mN(156,`disclaimers`),lg(),mN(157,` com a opção `),Ml(158,`code`),mN(159,`hideClose`),lg(),mN(160,` habilitada.`),lg()()()(),Ml(161,`tr`,14)(162,`td`,15)(163,`div`,16)(164,`span`,17),mN(165,` (p-remove)`),ql(166,`br`),lg()()(),Ml(167,`td`,18)(168,`code`,19),mN(169,`EventEmitter`),lg()(),Ml(170,`td`,20),mN(171,`-`),lg(),Ml(172,`td`,21)(173,`em`)(174,`strong`),mN(175,`(opcional)`),lg()(),Ml(176,`p`),mN(177,`Função que será disparada quando um `),Ml(178,`em`),mN(179,`disclaimer`),lg(),mN(180,` for removido da lista de `),Ml(181,`em`),mN(182,`disclaimers`),lg(),mN(183,` pelo usuário.`),lg(),Ml(184,`p`),mN(185,`Recebe como parâmetro um objeto conforme a interface `),Ml(186,`code`),mN(187,`PoDisclaimerGroupRemoveAction`),lg(),mN(188,`.`),lg()()(),Ml(189,`tr`,14)(190,`td`,15)(191,`div`,16)(192,`span`,17),mN(193,` (p-remove-all)`),ql(194,`br`),lg()()(),Ml(195,`td`,18)(196,`code`,19),mN(197,`EventEmitter`),lg()(),Ml(198,`td`,20),mN(199,`-`),lg(),Ml(200,`td`,21)(201,`em`)(202,`strong`),mN(203,`(opcional)`),lg()(),Ml(204,`p`),mN(205,`Função que será disparada quando todos os `),Ml(206,`em`),mN(207,`disclaimers`),lg(),mN(208,` forem removidos da lista de `),Ml(209,`em`),mN(210,`disclaimers`),lg(),mN(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),lg(),Ml(212,`p`),mN(213,`Recebe como parâmetro uma lista contendo todos os `),Ml(214,`code`),mN(215,`disclaimers`),lg(),mN(216,` removidos.`),lg()()(),Ml(217,`tr`,14)(218,`td`,15)(219,`div`,22)(220,`span`,23),mN(221,` p-title`),ql(222,`br`),lg()()(),Ml(223,`td`,18)(224,`code`,26),mN(225,`string`),lg()(),Ml(226,`td`,20),mN(227,`-`),lg(),Ml(228,`td`,21)(229,`em`)(230,`strong`),mN(231,`(opcional)`),lg()(),Ml(232,`p`),mN(233,`Título do grupo de `),Ml(234,`em`),mN(235,`disclaimers`),lg(),mN(236,`.`),lg()()()(),Ml(237,`h3`),mN(238,`Interfaces`),lg(),Ml(239,`h4`,27)(240,`code`,5),mN(241,`PoDisclaimer`),lg()(),Ml(242,`div`,2)(243,`p`),mN(244,`Interface que representa o objeto `),Ml(245,`code`),mN(246,`po-disclaimer`),lg(),mN(247,`.`),lg()(),Ml(248,`h4`,10),mN(249,`Propriedades`),lg(),Ml(250,`table`,11)(251,`tr`,12)(252,`th`,13),mN(253,`Nome`),lg(),Ml(254,`th`,13),mN(255,`Tipo`),lg(),Ml(256,`th`,13),mN(257,`Descrição`),lg()(),Ml(258,`tr`,14)(259,`td`,15)(260,`div`,22)(261,`span`,23),mN(262,` hideClose`),ql(263,`br`),lg()()(),Ml(264,`td`,18)(265,`code`,25),mN(266,`boolean`),lg()(),Ml(267,`td`,21)(268,`em`)(269,`strong`),mN(270,`(opcional)`),lg()(),Ml(271,`p`),mN(272,`Se verdadeiro, oculta o botão para fechar o `),Ml(273,`em`),mN(274,`disclaimer`),lg(),mN(275,`.`),lg()()(),Ml(276,`tr`,14)(277,`td`,15)(278,`div`,22)(279,`span`,23),mN(280,` label`),ql(281,`br`),lg()()(),Ml(282,`td`,18)(283,`code`,26),mN(284,`string`),lg()(),Ml(285,`td`,21)(286,`em`)(287,`strong`),mN(288,`(opcional)`),lg()(),Ml(289,`p`),mN(290,`Texto de exibição do objeto.`),lg()()(),Ml(291,`tr`,14)(292,`td`,15)(293,`div`,22)(294,`span`,23),mN(295,` property`),ql(296,`br`),lg()()(),Ml(297,`td`,18)(298,`code`,26),mN(299,`string`),lg()(),Ml(300,`td`,21)(301,`em`)(302,`strong`),mN(303,`(opcional)`),lg()(),Ml(304,`p`),mN(305,`Nome da propriedade vinculada ao objeto `),Ml(306,`em`),mN(307,`disclaimer`),lg(),mN(308,`.`),lg()()(),Ml(309,`tr`,14)(310,`td`,15)(311,`div`,22)(312,`span`,23),mN(313,` value`),ql(314,`br`),lg()()(),Ml(315,`td`,18)(316,`code`,28),mN(317,`any`),lg()(),Ml(318,`td`,21)(319,`p`),mN(320,`Valor do objeto.`),lg()()()(),Ml(321,`h4`,27)(322,`code`,5),mN(323,`PoDisclaimerGroupRemoveAction`),lg()(),Ml(324,`div`,2)(325,`p`),mN(326,`Estrutura do objeto representando o estado dos `),Ml(327,`em`),mN(328,`disclaimers`),lg(),mN(329,` após a remoção.`),lg()(),Ml(330,`h4`,10),mN(331,`Propriedades`),lg(),Ml(332,`table`,11)(333,`tr`,12)(334,`th`,13),mN(335,`Nome`),lg(),Ml(336,`th`,13),mN(337,`Tipo`),lg(),Ml(338,`th`,13),mN(339,`Descrição`),lg()(),Ml(340,`tr`,14)(341,`td`,15)(342,`div`,22)(343,`span`,23),mN(344,` currentDisclaimers`),ql(345,`br`),lg()()(),Ml(346,`td`,18)(347,`code`,29),mN(348,`Array<PoDisclaimer>`),lg()(),Ml(349,`td`,21)(350,`p`),mN(351,`Lista com os `),Ml(352,`em`),mN(353,`disclaimers`),lg(),mN(354,` atuais (restantes).`),lg()()(),Ml(355,`tr`,14)(356,`td`,15)(357,`div`,22)(358,`span`,23),mN(359,` removedDisclaimer`),ql(360,`br`),lg()()(),Ml(361,`td`,18)(362,`code`,30),mN(363,`PoDisclaimer`),lg()(),Ml(364,`td`,21)(365,`p`)(366,`em`),mN(367,`Disclaimer`),lg(),mN(368,` que foi removido.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ie=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Disclaimer Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,n){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-disclaimer-group-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-disclaimer-group-basic-view`)(6,`sample-po-disclaimer-group-labs-view`)(7,`sample-po-disclaimer-group-sw-planets-view`),lg()()()),o&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,de,ue,he,be],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[NL.forChild(Ie),NL]})}return a})();var ct=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[ar,fe]})}return a})();export{ct as DocPoDisclaimerGroupModule};