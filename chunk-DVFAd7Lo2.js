import{$ as L8e,$i as ow,$r as Vx,Cr as Nx,D as Cu,Et as V8e,F as G4,Hr as Tw,Ii as ht$1,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,L as Gbe,M as ECe,Mi as gg,Mn as xbe,Ni as he,Nn as xve,Qi as oN,Sa as yN,Si as db,Sn as sU,Ti as f0,Ui as lg,Un as Ax,Ur as Tx,Vi as kk,Vr as Te,X as KH,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_ as $8e,_a as wN,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,cn as lU,da as uo,dn as oU,dt as P4,ea as p0,ga as w,hr as MY,ir as I,jn as wp,ki as fm,kn as vr,l as ar,mn as q0e,mr as MN,mt as Pye,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,xa as xx,yr as Mx}from"./main-NT5YGKBQ.js";var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-basic`]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&ql(0,`po-search`)},dependencies:[Pye],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Search Basic`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-basic/sample-po-search-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-search></po-search>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-basic/sample-po-search-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-basic`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,$e,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,qe],encapsulation:2,changeDetection:1})}return a})();var nt=[`poSearch`];function it(a,w){if(a&1&&(Ml(0,`div`)(1,`strong`),mN(2),lg(),mN(3),lg()),a&2){let r=w.$implicit,o=zx().$implicit;Up(2),gg(``,r,`: `),Up(),gg(` `,o[r],` \xA0 `)}}function at(a,w){if(a&1&&(Ml(0,`li`),xx(1,it,4,2,`div`,null,Ax),lg()),a&2){let r=w.$implicit,o=zx();Up(),Nx(o.changeFilter(r))}}var Be=(()=>{class a{http=f(db);poSearch;ariaLabel;customLiterals;literals;properties=[];search=``;event=``;service=`https://po-sample-api.onrender.com/v1/heroes`;items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Cu.startsWith;searchMode=`action`;fieldKey;itemsModel;filterModel=`["name"]`;filterSelectModel;size=`medium`;customLocateSummary;locateSummary;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`showListbox`,label:`Show Listbox`},{value:`loading`,label:`Loading`}];iconsOptions=[{label:`fa-search`,value:`fa fa-search`},{label:`an-user`,value:`an an-user`},{label:`an-magnifying-glass`,value:`an an-magnifying-glass`}];filterModeOptions=[{label:`Starts With`,value:Cu.startsWith},{label:`Contains`,value:Cu.contains},{label:`Ends With`,value:Cu.endsWith}];searchModeOptions=[{label:`Action`,value:`action`},{label:`Execute`,value:`execute`},{label:`Locate`,value:`locate`},{label:`Trigger`,value:`trigger`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=[`name`])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?`p-change-model`:`p-filtered-items-change`}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??``)}catch(r){this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??``)}catch(r){this.customLocateSummary=void 0}}restore(){this.ariaLabel=``,this.search=``,this.event=``,this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel=`["name"]`,this.filterSelectModel=``,this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Cu.startsWith,this.searchMode=`action`,this.literals=void 0,this.locateSummary=void 0,this.size=`medium`,this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-labs`]],viewQuery:function(o,i){if(o&1&&Zl(nt,7),o&2){let p;lo(p=uo())&&(i.poSearch=p.first)}},standalone:!1,features:[Te],decls:32,vars:33,consts:[[`poSearch`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-blur`,`p-change-model`,`p-filtered-items-change`,`p-locate-next`,`p-locate-previous`,`p-aria-label`,`p-disabled`,`p-filter-keys`,`p-filter-type`,`p-filter-select`,`p-icon`,`p-items`,`p-literals`,`p-loading`,`p-locate-summary`,`p-search-type`,`p-show-listbox`,`p-size`],[1,`po-md-12`],[3,`p-label`],[1,`sample-list-search`,`po-md-12`,`row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`ariaLabel`,`p-label`,`Aria label`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`items`,`p-label`,`Items`,`p-help`,`Ex.: [{ "cidade": "São Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "Tóquio", "pais": "Japão" }]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`searchMode`,`p-label`,`Search Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-label`,`Filter Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locateSummary`,`p-help`,`{ "currentIndex": 1000, "total": 1000 }`,`p-label`,`Locate Summary`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"search": "Search people"}`,`p-label`,`Literals`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`Filter Keys`,`p-label`,`Filter Keys`,`p-help`,`Ex.: ["cidade", "pais"]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`Filter Select`,`p-label`,`Filter Select`,`p-help`,`Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(o,i){if(o&1){let p=Vx();Ml(0,`div`,2)(1,`po-search`,3,0),ht$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-filtered-items-change`,function(d){return i.filter(d)})(`p-locate-next`,function(){return i.changeEvent(`p-locate-next`)})(`p-locate-previous`,function(){return i.changeEvent(`p-locate-previous`)}),lg()(),ql(3,`po-divider`),Ml(4,`div`,2)(5,`po-accordion`,4)(6,`po-accordion-item`,5)(7,`po-widget`,4)(8,`ul`,6),xx(9,at,3,0,`li`,null,Ax),lg()()()()(),ql(11,`po-divider`),Ml(12,`div`,2),ql(13,`po-info`,7)(14,`po-info`,8),lg(),ql(15,`po-divider`),Ml(16,`form`,null,1)(18,`po-input`,9),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.ariaLabel,d)||(i.ariaLabel=d),Jy(d)}),lg(),f0(),Ml(19,`po-input`,10),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.itemsModel,d)||(i.itemsModel=d),Jy(d)}),ht$1(`p-change-model`,function(d){return i.changeItems(d)}),lg(),f0(),Ml(20,`po-checkbox-group`,11),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.properties,d)||(i.properties=d),Jy(d)}),lg(),f0(),Ml(21,`po-radio-group`,12),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.icon,d)||(i.icon=d),Jy(d)}),lg(),f0(),Ml(22,`po-radio-group`,13),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.searchMode,d)||(i.searchMode=d),Jy(d)}),lg(),f0(),Ml(23,`po-radio-group`,14),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.filterMode,d)||(i.filterMode=d),Jy(d)}),lg(),f0(),Ml(24,`po-radio-group`,15),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.size,d)||(i.size=d),Jy(d)}),lg(),f0(),Ml(25,`po-input`,16),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.locateSummary,d)||(i.locateSummary=d),Jy(d)}),ht$1(`p-change`,function(){return i.changeLocateSummary()}),lg(),f0(),Ml(26,`po-input`,17),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.literals,d)||(i.literals=d),Jy(d)}),ht$1(`p-change`,function(){return i.changeLiterals()}),lg(),f0(),Ml(27,`po-input`,18),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.filterModel,d)||(i.filterModel=d),Jy(d)}),ht$1(`p-change-model`,function(d){return i.updateFilterKeys(d)}),lg(),f0(),Ml(28,`po-input`,19),Mw(`ngModelChange`,function(d){return Qy(p),yN(i.filterSelectModel,d)||(i.filterSelectModel=d),Jy(d)}),ht$1(`p-change`,function(d){return i.updateFilterSelect(d)}),lg(),f0(),ql(29,`po-divider`),Ml(30,`div`,2)(31,`po-button`,20),ht$1(`p-click`,function(){return i.restore()}),lg()()()}o&2&&(Up(),cw(`p-aria-label`,i.ariaLabel)(`p-disabled`,i.properties.includes(`disabled`))(`p-filter-keys`,i.fieldKeys)(`p-filter-type`,i.filterMode)(`p-filter-select`,i.fieldSelect)(`p-icon`,i.icon)(`p-items`,i.items)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-locate-summary`,i.customLocateSummary)(`p-search-type`,i.searchMode)(`p-show-listbox`,i.properties.includes(`showListbox`))(`p-size`,i.size),Up(5),cw(`p-label`,wN(`Itens encontrados: `,i.filteredItems?.length)),Up(3),Nx(i.filteredItems),Up(4),cw(`p-value`,i.search),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.ariaLabel),p0(),Up(),Tw(`ngModel`,i.itemsModel),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.icon),cw(`p-options`,i.iconsOptions),p0(),Up(),Tw(`ngModel`,i.searchMode),cw(`p-options`,i.searchModeOptions),p0(),Up(),Tw(`ngModel`,i.filterMode),cw(`p-options`,i.filterModeOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0(),Up(),Tw(`ngModel`,i.locateSummary),p0(),Up(),Tw(`ngModel`,i.literals),p0(),Up(),Tw(`ngModel`,i.filterModel),p0(),Up(),Tw(`ngModel`,i.filterSelectModel),p0())},dependencies:[IY,wY,CY,Vk,kk,xve,P4,Zt,nb,G4,lU,q0e,kbe,$8e,Pye],styles:[`.sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}`],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Search Labs`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-labs/sample-po-search-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-locate-summary]="customLocateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="filter($event)"
    (p-locate-next)="changeEvent('p-locate-next')"
    (p-locate-previous)="changeEvent('p-locate-previous')"
  ></po-search>
</div>

<po-divider />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems?.length }}">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          @for (item of filteredItems; track item) {
            <li>
              @for (key of changeFilter(item); track key) {
                <div>
                  <strong>{ { key }}: </strong> { { item[key] }} &nbsp;
                </div>
              }
            </li>
          }
        </ul>
      </po-widget>
    </po-accordion-item>
  </po-accordion>
</div>
<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<!-- Properties -->
<form #f="ngForm">
  <po-input class="po-lg-6" name="ariaLabel" p-label="Aria label" [(ngModel)]="ariaLabel"></po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-6 po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group class="po-lg-6 po-md-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-lg-6 po-md-12"
    name="locateSummary"
    [(ngModel)]="locateSummary"
    p-help='{ "currentIndex": 1000, "total": 1000 }'
    p-label="Locate Summary"
    (p-change)="changeLocateSummary()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Keys"
    [(ngModel)]="filterModel"
    p-label="Filter Keys"
    p-help='Ex.: ["cidade", "pais"]'
    (p-change-model)="updateFilterKeys($event)"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Select"
    [(ngModel)]="filterSelectModel"
    p-label="Filter Select"
    p-help='Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]'
    (p-change)="updateFilterSelect($event)"
  >
  </po-input>

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-labs/sample-po-search-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { PoSearchLocateSummary } from '@po-ui/ng-components/lib/components/po-search/interfaces/po-search-locate-summary.interface';

@Component({
  selector: 'sample-po-search-labs',
  templateUrl: './sample-po-search-labs.component.html',
  styleUrls: ['./sample-po-search-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchLabsComponent implements OnInit, OnChanges {
  protected http = inject(HttpClient);

  @ViewChild('poSearch', { static: true }) poSearch!: PoSearchComponent;

  ariaLabel?: any;
  customLiterals?: PoSearchLiterals;
  literals?: string;
  properties: Array<string> = [];
  search: string = '';
  event: string = '';
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys?: Array<any> = [];
  fieldSelect?: Array<any> = [];
  tooltip?: string;
  icon?: string;
  filterMode: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  searchMode: 'action' | 'trigger' | 'locate' | 'execute' = 'action';
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';
  customLocateSummary?: PoSearchLocateSummary;
  locateSummary?: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'showListbox', label: 'Show Listbox' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'fa-search', value: 'fa fa-search' },
    { label: 'an-user', value: 'an an-user' },
    { label: 'an-magnifying-glass', value: 'an an-magnifying-glass' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly searchModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Action', value: 'action' },
    { label: 'Execute', value: 'execute' },
    { label: 'Locate', value: 'locate' },
    { label: 'Trigger', value: 'trigger' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
    }
  }

  changeFilter(item: any) {
    return Object.keys(item);
  }

  onChangeService() {
    this.http.get(this.service).subscribe((response: any) => {
      const items = response.items;
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string): void {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string): void {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    this.event = event.length === 0 ? 'p-change-model' : 'p-filtered-items-change';
  }

  changeItems(items: string): void {
    try {
      const newItems = JSON.parse(items);
      if (Array.isArray(newItems)) {
        this.filteredItems = newItems;
        this.items = newItems;
      }
    } catch {}
  }

  changeLiterals(): void {
    try {
      this.customLiterals = JSON.parse(this.literals ?? '');
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeEvent(event: string): void {
    setTimeout(() => {
      this.event = event;
    });
  }

  changeLocateSummary(): void {
    try {
      this.customLocateSummary = JSON.parse(this.locateSummary ?? '');
    } catch {
      this.customLocateSummary = undefined;
    }
  }

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.customLocateSummary = undefined;
    this.properties = [];
    this.filteredItems = undefined;
    this.items = undefined;
    this.itemsModel = undefined;
    this.filterModel = '["name"]';
    this.filterSelectModel = '';
    this.fieldKeys = undefined;
    this.fieldSelect = undefined;
    this.filterMode = PoSearchFilterMode.startsWith;
    this.searchMode = 'action';
    this.literals = undefined;
    this.locateSummary = undefined;
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput(): void {
    try {
      this.poSearch.clearSearch();
    } catch {}
  }

  private convertToArray(value: string): Array<any> | undefined {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-search-labs/sample-po-search-labs.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-search-labs`),lg(),ql(29,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,lt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Be],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function st(a,w){if(a&1&&(Ml(0,`div`,0),ql(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),lg()),a&2){let r=w.$implicit;Up(),cw(`p-value`,r.name),Up(),cw(`p-value`,r.nickname),Up(),cw(`p-value`,r.email)}}function mt(a,w){a&1&&ql(0,`div`)}function pt(a,w){if(a&1&&(Ml(0,`li`,7),mN(1),Tx(2,mt,1,0,`div`),lg(),Ml(3,`li`,7),mN(4),lg()),a&2){let r=w.$implicit,o=zx();Up(),gg(` Nickname: `,r.nickname,` `),Up(),Mx(o.compareObjects(r)?2:-1),Up(2),gg(`Email: `,r.email)}}var Ve=(()=>{class a{service=f(le);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-find-people`]],standalone:!1,features:[Ce([le])],decls:8,vars:3,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`],[1,`po-md-12`,`po-text-color-neutral-dark-40`]],template:function(o,i){o&1&&(Ml(0,`div`,0)(1,`po-search`,1),ht$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),lg()(),ql(2,`po-divider`),xx(3,st,4,3,`div`,0,Ax),ql(5,`po-divider`),Ml(6,`po-list-view`,2),ow(7,pt,5,3,`ng-template`,3),lg()),o&2&&(Up(),cw(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),Up(2),Nx(i.peopleFiltered),Up(3),cw(`p-items`,i.items))},dependencies:[nb,kbe,L8e,Gbe,Pye],styles:[`li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}`],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-find-people-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Search Find People`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-find-people/sample-po-search-find-people.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
  ></po-search>
</div>

<po-divider />

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}

<po-divider />

<po-list-view p-property-title="name" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <li class="po-md-12 po-text-color-neutral-dark-40">
      Nickname: { { item.nickname }}
      @if (compareObjects(item)) {
        <div></div>
      }
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: { { item.email }}</li>
  </ng-template>
</po-list-view>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-find-people/sample-po-search-find-people.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SamplePoSearchFindPeopleService } from './sample-po-search-find-people.service';

@Component({
  selector: 'sample-po-search-find-people',
  templateUrl: './sample-po-search-find-people.component.html',
  styleUrls: ['./sample-po-search-find-people.component.css'],
  providers: [SamplePoSearchFindPeopleService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFindPeopleComponent implements OnInit {
  private service = inject(SamplePoSearchFindPeopleService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-search-find-people/sample-po-search-find-people.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchFindPeopleService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),lg()()(),Ml(25,`po-tab`,10)(26,`div`)(27,`label`,6),mN(28,`sample-po-search-find-people/sample-po-search-find-people.component.css`),lg(),Ml(29,`pre`,11),mN(30,`li {
  list-style: none;
  display: flex;
  align-items: center;
}

li div {
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  background-color: green;
  margin-left: 10px;
}
`),lg()()()()(),Ml(31,`div`,12),ql(32,`sample-po-search-find-people`),lg(),ql(33,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ct,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ve],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,w){if(a&1&&(Ml(0,`div`,0),ql(1,`po-divider`)(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),lg()),a&2){let r=w.$implicit;Up(2),cw(`p-value`,r.name),Up(),cw(`p-value`,r.nickname),Up(),cw(`p-value`,r.email)}}var je=(()=>{class a{service=f(re);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-listbox`]],standalone:!1,features:[Ce([re])],decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-show-listbox`,`true`,`p-search-type`,`trigger`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(o,i){o&1&&(Ml(0,`div`,0)(1,`po-search`,1),ht$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),lg()(),xx(2,ht,5,3,`div`,0,Ax)),o&2&&(Up(),cw(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),Up(),Nx(i.peopleFiltered))},dependencies:[nb,kbe,Pye],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-listbox-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Search With Listbox`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-listbox/sample-po-search-listbox.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
    p-show-listbox="true"
    p-search-type="trigger"
  ></po-search>
</div>

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-divider />
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-listbox/sample-po-search-listbox.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SamplePoSearchListboxService } from './sample-po-search-listbox.service';

@Component({
  selector: 'sample-po-search-listbox',
  templateUrl: './sample-po-search-listbox.component.html',
  providers: [SamplePoSearchListboxService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchListboxComponent implements OnInit {
  private service = inject(SamplePoSearchListboxService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-search-listbox/sample-po-search-listbox.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchListboxService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-search-listbox`),lg(),ql(27,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ft,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,je],encapsulation:2,changeDetection:1})}return a})();function Et(a,w){if(a&1&&(Ml(0,`div`,0)(1,`po-container`,2),ql(2,`po-info`,3)(3,`po-info`,4)(4,`po-info`,5)(5,`po-info`,6),lg()()),a&2){let r=w.$implicit;Up(2),cw(`p-value`,r.name),Up(),cw(`p-value`,r.gender),Up(),cw(`p-value`,r.planet),Up(),cw(`p-value`,r.father)}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:`Personal`,value:[`name`,`gender`]},{label:`Planet`,value:[`planet`]},{label:`Family`,value:`father`}];ngOnInit(){this.items=[{name:`Anakin Skywalker`,gender:`male`,planet:`Tatooine`,father:`Darth Sidious`},{name:`Luke Skywalker`,gender:`male`,planet:`Tatooine`,father:`Anakin Skywalker`},{name:`Leia Organa`,gender:`female`,planet:`Alderaan`,father:`Anakin Skywalker`},{name:`Han Solo`,gender:`male`,planet:`Corellia`,father:`Ovan`}]}filtered(r){this.filteredItems=r}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-filter-select`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-search-type`,`trigger`,`p-show-listbox`,`true`,`p-disabled`,`false`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-select`],[1,`po-row`,`po-mt-2`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Gender`,1,`po-md-3`,3,`p-value`],[`p-label`,`Planet`,1,`po-md-3`,3,`p-value`],[`p-label`,`Father`,1,`po-md-3`,3,`p-value`]],template:function(o,i){o&1&&(Ml(0,`div`,0)(1,`po-search`,1),ht$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),lg()(),xx(2,Et,6,4,`div`,0,Ax)),o&2&&(Up(),cw(`p-items`,i.items)(`p-filter-select`,i.filterSelect),Up(),Nx(i.filteredItems))},dependencies:[wp,kbe,Pye],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-filter-select-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Search With Filter Select + Listbox`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    (p-filtered-items-change)="filtered($event)"
    p-search-type="trigger"
    [p-filter-select]="filterSelect"
    p-show-listbox="true"
    p-disabled="false"
  ></po-search>
</div>

@for (people of filteredItems; track people) {
  <div class="po-row">
    <po-container class="po-row po-mt-2">
      <po-info class="po-md-3" p-label="Name" [p-value]="people.name"> </po-info>
      <po-info class="po-md-3" p-label="Gender" [p-value]="people.gender"> </po-info>
      <po-info class="po-md-3" p-label="Planet" [p-value]="people.planet"> </po-info>
      <po-info class="po-md-3" p-label="Father" [p-value]="people.father"> </po-info>
    </po-container>
  </div>
}
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-filter-select',
  templateUrl: './sample-po-search-filter-select.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFilterSelectComponent implements OnInit {
  items: any;
  filteredItems: Array<any> = [];
  filterSelect = [
    { label: 'Personal', value: ['name', 'gender'] },
    { label: 'Planet', value: ['planet'] },
    { label: 'Family', value: 'father' }
  ];

  ngOnInit() {
    this.items = [
      { name: 'Anakin Skywalker', gender: 'male', planet: 'Tatooine', father: 'Darth Sidious' },
      { name: 'Luke Skywalker', gender: 'male', planet: 'Tatooine', father: 'Anakin Skywalker' },
      { name: 'Leia Organa', gender: 'female', planet: 'Alderaan', father: 'Anakin Skywalker' },
      { name: 'Han Solo', gender: 'male', planet: 'Corellia', father: 'Ovan' }
    ];
  }

  filtered(event: Array<any>) {
    this.filteredItems = event;
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-filter-select`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,vt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Re],encapsulation:2,changeDetection:1})}return a})();var Ke=(()=>{class a{poModal;filterType=Cu.contains;filterKeysAction=[`rotina`,`codigo`,`modulo`,`versao`];keysLabel=[`rotina`,`codigo`];itemsAction=[{rotina:`Contas a Pagar`,codigo:`MATA103`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Contas a Pagar`)},{rotina:`Cotação de Fornecedores`,codigo:`MATA140`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Cotação de Fornecedores`)},{rotina:`Meus Funcionarios`,codigo:`XPTO987`,modulo:`RH`,versao:`1.2.3`,url:`documentation/po-widget`}];columns=[{property:`rotina`,label:`Rotina`},{property:`codigo`,label:`Código`},{property:`modulo`,label:`Módulo`},{property:`versao`,label:`Versão`}];footerAction(){this.poModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-execute`]],viewQuery:function(o,i){if(o&1&&Zl(vr,7),o&2){let p;lo(p=uo())&&(i.poModal=p.first)}},standalone:!1,decls:10,vars:9,consts:[[`modal`,``],[1,`po-row`],[`p-title`,`Pesquisar e executar`,`p-help`,`https://github.com/po-ui/po-angular/stargazers`,1,`po-lg-6`,`po-mt-2`,3,`p-height`],[`name`,`Po Search`,1,`po-mt-2`,`full`,3,`p-footer-action-listbox`,`p-search-type`,`p-items`,`p-filter-type`,`p-filter-keys`,`p-keys-label`],[`p-title`,`Rotinas`],[3,`p-columns`,`p-items`,`p-hide-columns-manager`]],template:function(o,i){o&1&&(Ml(0,`div`,1)(1,`po-widget`,2)(2,`div`,1)(3,`span`),mN(4,`Entre com o nome ou código da rotina`),lg()(),Ml(5,`div`,1)(6,`po-search`,3),ht$1(`p-footer-action-listbox`,function(){return i.footerAction()}),lg()()()(),Ml(7,`po-modal`,4,0),ql(9,`po-table`,5),lg()),o&2&&(Up(),cw(`p-height`,180),Up(5),cw(`p-search-type`,`execute`)(`p-items`,i.itemsAction)(`p-filter-type`,i.filterType)(`p-filter-keys`,i.filterKeysAction)(`p-keys-label`,i.keysLabel),Up(3),cw(`p-columns`,i.columns)(`p-items`,i.itemsAction)(`p-hide-columns-manager`,!0))},dependencies:[vr,oU,$8e,Pye],styles:[`.full[_ngcontent-%COMP%]{width:100%}`],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-execute-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Search Form Fields with Execute`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-execute/sample-po-search-execute.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget
    class="po-lg-6 po-mt-2"
    p-title="Pesquisar e executar"
    p-help="https://github.com/po-ui/po-angular/stargazers"
    [p-height]="180"
  >
    <div class="po-row">
      <span>Entre com o nome ou c\xF3digo da rotina</span>
    </div>
    <div class="po-row">
      <po-search
        class="po-mt-2 full"
        name="Po Search"
        [p-search-type]="'execute'"
        [p-items]="itemsAction"
        [p-filter-type]="filterType"
        [p-filter-keys]="filterKeysAction"
        [p-keys-label]="keysLabel"
        (p-footer-action-listbox)="footerAction()"
      />
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Rotinas">
  <po-table [p-columns]="columns" [p-items]="itemsAction" [p-hide-columns-manager]="true"> </po-table>
</po-modal>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-execute/sample-po-search-execute.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoSearchFilterMode } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-execute',
  templateUrl: './sample-po-search-execute.component.html',
  styleUrls: ['./sample-po-search-execute.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchExecuteComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  filterType = PoSearchFilterMode.contains;
  filterKeysAction: Array<string> = ['rotina', 'codigo', 'modulo', 'versao'];
  keysLabel: Array<string> = ['rotina', 'codigo'];

  itemsAction = [
    {
      rotina: 'Contas a Pagar',
      codigo: 'MATA103',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Contas a Pagar\`)
    },
    {
      rotina: 'Cota\xE7\xE3o de Fornecedores',
      codigo: 'MATA140',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Cota\xE7\xE3o de Fornecedores\`)
    },
    {
      rotina: 'Meus Funcionarios',
      codigo: 'XPTO987',
      modulo: 'RH',
      versao: '1.2.3',
      url: 'documentation/po-widget'
    }
  ];

  columns = [
    { property: 'rotina', label: 'Rotina' },
    { property: 'codigo', label: 'C\xF3digo' },
    { property: 'modulo', label: 'M\xF3dulo' },
    { property: 'versao', label: 'Vers\xE3o' }
  ];

  footerAction() {
    this.poModal.open();
  }
}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-search-execute/sample-po-search-execute.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.full {
  width: 100%;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-search-execute`),lg(),ql(29,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ct,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ke],encapsulation:2,changeDetection:1})}return a})();var _t=[`nameInput`];var Mt=[`cpfInput`];var wt=[`addressInput`];var It=[`numberInput`];var Tt=[`emailInput`];var kt=[`websiteInput`];var Ft=[`reactiveFormData`];var Ue=(()=>{class a{fb=f(MY);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=Cu.endsWith;searchLiterals={search:`Buscar campos`};modalPrimaryAction={label:`Close`,action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:`Customer name`,index:0,focus:()=>this.nameInput.focus()},{label:`CPF`,index:1,focus:()=>this.cpfInput.focus()},{label:`Address`,index:2,focus:()=>this.addressInput.focus()},{label:`Number`,index:3,focus:()=>this.numberInput.focus()},{label:`Email`,index:4,focus:()=>this.emailInput.focus()},{label:`Website`,index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:[``,[fm.required,fm.minLength(5)]],cpf:[``,fm.required],address:[``,fm.required],number:[``,fm.required],email:[``,fm.required],website:[``,fm.required]})}updateSearchTerm(r){console.log(`updateSearchTerm`);let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log(`onNextOccurrenceClick`),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log(`onPreviousOccurrenceClick`),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-fields-locate`]],viewQuery:function(o,i){if(o&1&&Zl(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;lo(p=uo())&&(i.nameInput=p.first),lo(p=uo())&&(i.cpfInput=p.first),lo(p=uo())&&(i.addressInput=p.first),lo(p=uo())&&(i.numberInput=p.first),lo(p=uo())&&(i.emailInput=p.first),lo(p=uo())&&(i.websiteInput=p.first),lo(p=uo())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[[`nameInput`,``],[`cpfInput`,``],[`addressInput`,``],[`numberInput`,``],[`emailInput`,``],[`websiteInput`,``],[`reactiveFormData`,``],[1,`po-row`],[1,`po-ml-1`,`po-mr-1`],[`p-search-type`,`locate`,3,`p-change-model`,`p-locate-next`,`p-locate-previous`,`p-literals`,`p-locate-summary`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-9`],[`formControlName`,`cpf`,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-lg-6`,3,`p-value`],[`p-label`,`CPF`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Address`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Number`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Email`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Website`,1,`po-lg-6`,3,`p-value`]],template:function(o,i){o&1&&(Ml(0,`div`,7)(1,`div`,8)(2,`po-search`,9),ht$1(`p-change-model`,function(h){return i.updateSearchTerm(h)})(`p-locate-next`,function(){return i.onNextOccurrenceClick()})(`p-locate-previous`,function(){return i.onPreviousOccurrenceClick()}),lg()()(),ql(3,`po-divider`),Ml(4,`form`,10)(5,`div`,7),ql(6,`po-input`,11,0),f0(),ql(8,`po-input`,12,1),f0(),lg(),Ml(10,`div`,7),ql(11,`po-input`,13,2),f0(),ql(13,`po-number`,14,3),f0(),lg(),Ml(15,`div`,7),ql(16,`po-email`,15,4),f0(),ql(18,`po-url`,16,5),f0(),lg(),Ml(20,`div`,7)(21,`po-button`,17),ht$1(`p-click`,function(){return i.saveForm()}),lg()()(),Ml(22,`po-modal`,18,6)(24,`div`,7),ql(25,`po-info`,19)(26,`po-info`,20),lg(),ql(27,`po-divider`),Ml(28,`div`,7),ql(29,`po-info`,21)(30,`po-info`,22),lg(),ql(31,`po-divider`),Ml(32,`div`,7),ql(33,`po-info`,23)(34,`po-info`,24),lg()()),o&2&&(Up(2),cw(`p-literals`,i.searchLiterals)(`p-locate-summary`,i.locateSummary),Up(2),cw(`formGroup`,i.reactiveForm),Up(2),p0(),Up(2),p0(),Up(3),p0(),Up(2),p0(),Up(3),p0(),Up(2),p0(),Up(3),cw(`p-disabled`,!i.reactiveForm.valid),Up(),cw(`p-primary-action`,i.modalPrimaryAction),Up(3),cw(`p-value`,i.reactiveForm.controls.name.value),Up(),cw(`p-value`,i.reactiveForm.controls.cpf.value),Up(3),cw(`p-value`,i.reactiveForm.controls.address.value),Up(),cw(`p-value`,i.reactiveForm.controls.number.value),Up(3),cw(`p-value`,i.reactiveForm.controls.email.value),Up(),cw(`p-value`,i.reactiveForm.controls.website.value))},dependencies:[IY,wY,CY,qk,Wk,Zt,nb,KH,lU,xbe,sU,kbe,vr,Pye],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a});var Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-fields-locate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Search Form Fields with Locate`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <div class="po-ml-1 po-mr-1">
    <po-search
      p-search-type="locate"
      [p-literals]="searchLiterals"
      [p-locate-summary]="locateSummary"
      (p-change-model)="updateSearchTerm($event)"
      (p-locate-next)="onNextOccurrenceClick()"
      (p-locate-previous)="onPreviousOccurrenceClick()"
    />
  </div>
</div>
<po-divider></po-divider>

<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input #nameInput class="po-lg-9" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
    </po-input>

    <po-input #cpfInput class="po-lg-3" formControlName="cpf" p-label="CPF" p-mask="999.999.999-99" p-clean> </po-input>
  </div>

  <div class="po-row">
    <po-input #addressInput class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number #numberInput class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email #emailInput class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url #websiteInput class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-lg-6" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>

    <po-info class="po-lg-6" p-label="CPF" [p-value]="reactiveForm.controls.cpf.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-lg-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-lg-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {
  PoEmailComponent,
  PoInputComponent,
  PoModalAction,
  PoModalComponent,
  PoNumberComponent,
  PoSearchFilterMode,
  PoSearchLiterals,
  PoUrlComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-fields-locate',
  templateUrl: './sample-po-search-fields-locate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFieldsLocateComponent implements AfterViewInit {
  protected fb = inject(UntypedFormBuilder);

  @ViewChild('nameInput', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('cpfInput', { static: true }) cpfInput!: PoInputComponent;
  @ViewChild('addressInput', { static: true }) addressInput!: PoInputComponent;
  @ViewChild('numberInput', { static: true }) numberInput!: PoNumberComponent;
  @ViewChild('emailInput', { static: true }) emailInput!: PoEmailComponent;
  @ViewChild('websiteInput', { static: true }) websiteInput!: PoUrlComponent;
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal!: PoModalComponent;

  reactiveForm!: UntypedFormGroup;

  filterTargets: Array<{ label: string; index: number; focus: () => void }> = [];
  filteredIndexes: Array<number> = [];
  currentIndex: number = -1;
  firstSearch = true;

  locateSummary: { currentIndex: number; total: number } = { currentIndex: 0, total: 0 };
  filterType: PoSearchFilterMode = PoSearchFilterMode.endsWith;
  searchLiterals: PoSearchLiterals = { search: 'Buscar campos' };
  modalPrimaryAction: PoModalAction = {
    label: 'Close',
    action: () => this.reactiveFormModal.close()
  };

  constructor() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.filterTargets = [
      { label: 'Customer name', index: 0, focus: () => this.nameInput.focus() },
      { label: 'CPF', index: 1, focus: () => this.cpfInput.focus() },
      { label: 'Address', index: 2, focus: () => this.addressInput.focus() },
      { label: 'Number', index: 3, focus: () => this.numberInput.focus() },
      { label: 'Email', index: 4, focus: () => this.emailInput.focus() },
      { label: 'Website', index: 5, focus: () => this.websiteInput.focus() }
    ];
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  // Atualiza os campos filtrados conforme o termo digitado
  updateSearchTerm(term: string) {
    console.log('updateSearchTerm');
    const value = term.toLowerCase();

    this.filteredIndexes = this.filterTargets
      .map((t, i) => ({ i, t }))
      .filter(({ t }) => value && t.label.toLowerCase().startsWith(value))
      .map(({ i }) => i);

    this.currentIndex = -1;

    const total = this.filteredIndexes.length;

    this.locateSummary = {
      currentIndex: 0,
      total: total
    };
  }

  // Navega\xE7\xE3o pelos bot\xF5es
  onNextOccurrenceClick() {
    console.log('onNextOccurrenceClick');
    this.goToNextOccurrence();
    this.focusCurrent();
  }

  onPreviousOccurrenceClick() {
    console.log('onPreviousOccurrenceClick');
    this.goToPreviousOccurrence();
    this.focusCurrent();
  }

  goToNextOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = (this.currentIndex + 1) % this.filteredIndexes.length;
    this.updateSummary();
  }

  goToPreviousOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = this.currentIndex <= 0 ? this.filteredIndexes.length - 1 : this.currentIndex - 1;
    this.updateSummary();
  }

  updateSummary() {
    const total = this.filteredIndexes.length;
    const current = total === 0 || this.currentIndex === -1 ? 0 : this.currentIndex + 1;

    this.locateSummary = {
      currentIndex: current,
      total: total
    };
  }

  // Foca o campo selecionado
  focusCurrent() {
    const index = this.filteredIndexes[this.currentIndex];
    if (index !== undefined) {
      (document.activeElement as HTMLElement)?.blur();
      this.filterTargets[index].focus();
    }
  }

  // Obt\xEAm o elemento real do campo
  getInputElementByIndex(index: number): HTMLElement | null {
    switch (index) {
      case 0:
        return this.nameInput?.inputEl?.nativeElement ?? null;
      case 1:
        return this.cpfInput?.inputEl?.nativeElement ?? null;
      case 2:
        return this.addressInput?.inputEl?.nativeElement ?? null;
      case 3:
        return this.numberInput?.inputEl?.nativeElement ?? null;
      case 4:
        return this.emailInput?.inputEl?.nativeElement ?? null;
      case 5:
        return this.websiteInput?.inputEl?.nativeElement ?? null;
      default:
        return null;
    }
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-search-fields-locate`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Lt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ue],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-doc`]],standalone:!1,decls:1426,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterSelect[]`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLocateSummary`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`searchMode`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,i){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoSearchModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-search.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoSearchComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente search, também conhecido como barra de pesquisa, é utilizado para ajudar os usuários a localizar um determinado conteúdo.`),lg(),Ml(15,`p`),mN(16,`Normalmente localizado no canto superior direito, junto com o ícone de lupa, uma vez que este ícone é amplamente reconhecido.`),lg(),Ml(17,`h4`),mN(18,`Boas práticas`),lg(),Ml(19,`p`),mN(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),lg(),Ml(21,`ul`)(22,`li`),mN(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),lg(),Ml(24,`li`),mN(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),lg(),Ml(26,`li`),mN(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),lg(),Ml(28,`li`),mN(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),lg(),Ml(30,`li`),mN(31,`Quando apropriado, destaque os termos da busca nos resultados.`),lg(),Ml(32,`li`),mN(33,`A entrada do campo de pesquisa deve caber em uma linha. Não use entradas de pesquisa de várias linhas.`),lg(),Ml(34,`li`),mN(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),lg(),Ml(36,`li`),mN(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),lg()(),Ml(38,`h4`),mN(39,`Acessibilidade tratada no componente`),lg(),Ml(40,`p`),mN(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),lg(),Ml(42,`ul`)(43,`li`),mN(44,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),lg(),Ml(45,`li`),mN(46,`Alteração entre os estados precisa ser indicada por mais de um elemento além da cor (1.4.1: Use of Color);`),lg()(),Ml(47,`h4`),mN(48,`Tokens customizáveis`),lg(),Ml(49,`p`),mN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(51,`blockquote`)(52,`p`),mN(53,`Para maiores informações, acesse o guia `),Ml(54,`a`,6),mN(55,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(56,`.`),lg()(),Ml(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),mN(61,`Propriedade`),lg(),Ml(62,`th`),mN(63,`Descrição`),lg(),Ml(64,`th`),mN(65,`Valor Padrão`),lg()()(),Ml(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),mN(70,`Default Values`),lg()(),ql(71,`td`)(72,`td`),lg(),Ml(73,`tr`)(74,`td`)(75,`code`),mN(76,`--font-family`),lg()(),Ml(77,`td`),mN(78,`Família tipográfica do campo`),lg(),Ml(79,`td`)(80,`code`),mN(81,`var(--font-family-theme)`),lg()()(),Ml(82,`tr`)(83,`td`)(84,`code`),mN(85,`--font-size`),lg()(),Ml(86,`td`),mN(87,`Tamanho da fonte do campo`),lg(),Ml(88,`td`)(89,`code`),mN(90,`var(--font-size-default)`),lg()()(),Ml(91,`tr`)(92,`td`)(93,`code`),mN(94,`--text-color-placeholder`),lg()(),Ml(95,`td`),mN(96,`Cor do texto no placeholder`),lg(),Ml(97,`td`)(98,`code`),mN(99,`var(--color-neutral-light-30)`),lg()()(),Ml(100,`tr`)(101,`td`)(102,`code`),mN(103,`--color`),lg()(),Ml(104,`td`),mN(105,`Cor das bordas`),lg(),Ml(106,`td`)(107,`code`),mN(108,`var(--color-neutral-dark-70)`),lg()()(),Ml(109,`tr`)(110,`td`)(111,`code`),mN(112,`--border-radius`),lg()(),Ml(113,`td`),mN(114,`Raio das bordas`),lg(),Ml(115,`td`)(116,`code`),mN(117,`var(--border-radius-md)`),lg()()(),Ml(118,`tr`)(119,`td`)(120,`code`),mN(121,`--background`),lg()(),Ml(122,`td`),mN(123,`Cor de background`),lg(),Ml(124,`td`)(125,`code`),mN(126,`var(--color-neutral-light-05)`),lg()()(),Ml(127,`tr`)(128,`td`)(129,`code`),mN(130,`--text-color`),lg()(),Ml(131,`td`),mN(132,`Cor do texto editável`),lg(),Ml(133,`td`)(134,`code`),mN(135,`var(--color-neutral-dark-90)`),lg()()(),Ml(136,`tr`)(137,`td`)(138,`code`),mN(139,`--color-clear`),lg()(),Ml(140,`td`),mN(141,`Cor do ícone close`),lg(),Ml(142,`td`)(143,`code`),mN(144,`var(--color-action-default)`),lg()()(),Ml(145,`tr`)(146,`td`)(147,`code`),mN(148,`--color-controls`),lg()(),Ml(149,`td`),mN(150,`Cor dos ícones de controle do mode location`),lg(),Ml(151,`td`)(152,`code`),mN(153,`var(--color-action-default)`),lg()()(),Ml(154,`tr`)(155,`td`)(156,`code`),mN(157,`--transition-property`),lg()(),Ml(158,`td`),mN(159,`Atributo da transição`),lg(),Ml(160,`td`)(161,`code`),mN(162,`all`),lg()()(),Ml(163,`tr`)(164,`td`)(165,`code`),mN(166,`--transition-duration`),lg()(),Ml(167,`td`),mN(168,`Duração da transição`),lg(),Ml(169,`td`)(170,`code`),mN(171,`var(--duration-extra-fast)`),lg()()(),Ml(172,`tr`)(173,`td`)(174,`code`),mN(175,`--transition-timing`),lg()(),Ml(176,`td`),mN(177,`Duração da transição com o tipo de transição`),lg(),Ml(178,`td`)(179,`code`),mN(180,`var(--timing-standart)`),lg()()(),Ml(181,`tr`)(182,`td`)(183,`strong`),mN(184,`Icon`),lg()(),ql(185,`td`)(186,`td`),lg(),Ml(187,`tr`)(188,`td`)(189,`code`),mN(190,`--color-icon-read`),lg()(),Ml(191,`td`),mN(192,`Cor do ícone de busca no modo action`),lg(),Ml(193,`td`)(194,`code`),mN(195,`var(--color-neutral-dark-70)`),lg()()(),Ml(196,`tr`)(197,`td`)(198,`code`),mN(199,`--color-icon`),lg()(),Ml(200,`td`),mN(201,`Cor do ícone de busca no modo trigger`),lg(),Ml(202,`td`)(203,`code`),mN(204,`var(--color-action-default)`),lg()()(),Ml(205,`tr`)(206,`td`)(207,`strong`),mN(208,`Hover`),lg()(),ql(209,`td`)(210,`td`),lg(),Ml(211,`tr`)(212,`td`)(213,`code`),mN(214,`--color-hover`),lg()(),Ml(215,`td`),mN(216,`Cor das bordas no estado hover`),lg(),Ml(217,`td`)(218,`code`),mN(219,`var(--color-action-hover)`),lg()()(),Ml(220,`tr`)(221,`td`)(222,`code`),mN(223,`--background-hover`),lg()(),Ml(224,`td`),mN(225,`Cor de background no estado hover`),lg(),Ml(226,`td`)(227,`code`),mN(228,`var(--color-brand-01-lightest)`),lg()()(),Ml(229,`tr`)(230,`td`)(231,`strong`),mN(232,`Focused`),lg()(),ql(233,`td`)(234,`td`),lg(),Ml(235,`tr`)(236,`td`)(237,`code`),mN(238,`--color-focused`),lg()(),Ml(239,`td`),mN(240,`Cor das bordas no estado de focus`),lg(),Ml(241,`td`)(242,`code`),mN(243,`var(--color-action-default)`),lg()()(),Ml(244,`tr`)(245,`td`)(246,`code`),mN(247,`--outline-color-focused`),lg()(),Ml(248,`td`),mN(249,`Cor do outline no estado de focus`),lg(),Ml(250,`td`)(251,`code`),mN(252,`var(--color-action-focus)`),lg()()(),Ml(253,`tr`)(254,`td`)(255,`strong`),mN(256,`Disabled`),lg()(),ql(257,`td`)(258,`td`),lg(),Ml(259,`tr`)(260,`td`)(261,`code`),mN(262,`--color-disabled`),lg()(),Ml(263,`td`),mN(264,`Cor principal no estado disabled`),lg(),Ml(265,`td`)(266,`code`),mN(267,`var(--color-action-disabled)`),lg()()(),Ml(268,`tr`)(269,`td`)(270,`code`),mN(271,`--background-disabled`),lg()(),Ml(272,`td`),mN(273,`Cor de background no estado disabled`),lg(),Ml(274,`td`)(275,`code`),mN(276,`var(--color-neutral-light-20)`),lg()()()()()(),Ml(277,`div`,7)(278,`h4`,8),mN(279,`Seletor`),lg(),Ml(280,`pre`,9),mN(281,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    (p-focus)="EventEmitter"
    (p-footer-action-listbox)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    (p-keydown)="EventEmitter"
    p-keys-label="Array<string>"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    p-loading="boolean"
    (p-locate-next)="EventEmitter"
    (p-locate-previous)="EventEmitter"
    p-locate-summary="PoSearchLocateSummary"
    name="string"
    p-no-autocomplete="boolean"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),lg()(),Ml(282,`h4`,10),mN(283,`Propriedades`),lg(),Ml(284,`table`,11)(285,`tr`,12)(286,`th`,13),mN(287,`Nome`),lg(),Ml(288,`th`,13),mN(289,`Tipo`),lg(),Ml(290,`th`,13),mN(291,`Padrão`),lg(),Ml(292,`th`,13),mN(293,`Descrição`),lg()(),Ml(294,`tr`,14)(295,`td`,15)(296,`div`,16)(297,`span`,17),mN(298,` p-aria-label`),ql(299,`br`),lg()()(),Ml(300,`td`,18)(301,`code`,19),mN(302,`string`),lg()(),Ml(303,`td`,20),mN(304,`-`),lg(),Ml(305,`td`,21)(306,`em`)(307,`strong`),mN(308,`(opcional)`),lg()(),Ml(309,`p`),mN(310,`Define um aria-label para o po-search.`),lg(),Ml(311,`blockquote`)(312,`p`),mN(313,`Devido o componente não possuir uma label assim como outros campos de texto, o `),Ml(314,`code`),mN(315,`aria-label`),lg(),mN(316,` \xE9 utilizado para
acessibilidade.`),lg()()()(),Ml(317,`tr`,14)(318,`td`,15)(319,`div`,22)(320,`span`,23),mN(321,` (p-blur)`),ql(322,`br`),lg()()(),Ml(323,`td`,18)(324,`code`,24),mN(325,`EventEmitter`),lg()(),Ml(326,`td`,20),mN(327,`-`),lg(),Ml(328,`td`,21)(329,`em`)(330,`strong`),mN(331,`(opcional)`),lg()(),Ml(332,`p`),mN(333,`Evento disparado ao sair do campo.`),lg()()(),Ml(334,`tr`,14)(335,`td`,15)(336,`div`,22)(337,`span`,23),mN(338,` (p-change-model)`),ql(339,`br`),lg()()(),Ml(340,`td`,18)(341,`code`,24),mN(342,`EventEmitter`),lg()(),Ml(343,`td`,20),mN(344,`-`),lg(),Ml(345,`td`,21)(346,`em`)(347,`strong`),mN(348,`(opcional)`),lg()(),Ml(349,`p`),mN(350,`Evento disparado ao alterar valor do model.`),lg()()(),Ml(351,`tr`,14)(352,`td`,15)(353,`div`,16)(354,`span`,17),mN(355,` p-disabled`),ql(356,`br`),lg()()(),Ml(357,`td`,18)(358,`code`,25),mN(359,`boolean`),lg()(),Ml(360,`td`,20)(361,`p`)(362,`code`),mN(363,`false`),lg()()(),Ml(364,`td`,21)(365,`em`)(366,`strong`),mN(367,`(opcional)`),lg()(),Ml(368,`p`),mN(369,`Desabilita o po-search e não permite que o usuário interaja com o mesmo.`),lg()()(),Ml(370,`tr`,14)(371,`td`,15)(372,`div`,22)(373,`span`,23),mN(374,` (p-filter)`),ql(375,`br`),lg()()(),Ml(376,`td`,18)(377,`code`,24),mN(378,`EventEmitter`),lg()(),Ml(379,`td`,20),mN(380,`-`),lg(),Ml(381,`td`,21)(382,`em`)(383,`strong`),mN(384,`(opcional)`),lg()(),Ml(385,`p`),mN(386,`Pode ser informada uma função que será disparada quando houver alterações nos filtros.`),lg(),Ml(387,`blockquote`)(388,`p`),mN(389,`Incompatível com a propriedade `),Ml(390,`code`),mN(391,`p-search-type`),lg(),mN(392,` do tipo `),Ml(393,`code`),mN(394,`locate`),lg(),mN(395,`.`),lg()()()(),Ml(396,`tr`,14)(397,`td`,15)(398,`div`,16)(399,`span`,17),mN(400,` p-filter-keys`),ql(401,`br`),lg()()(),Ml(402,`td`,18)(403,`code`,26),mN(404,`Array<any>`),lg()(),Ml(405,`td`,20),mN(406,`-`),lg(),Ml(407,`td`,21)(408,`p`),mN(409,`Define os nomes das propriedades do objeto que serão utilizados para busca em `),Ml(410,`code`),mN(411,`p-items`),lg(),mN(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),lg(),Ml(413,`pre`)(414,`code`,27),mN(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),lg()(),Ml(416,`blockquote`)(417,`p`),mN(418,`Esta propriedade é ignorada quando utilizado com `),Ml(419,`code`),mN(420,`p-filter-select`),lg(),mN(421,` e incompat\xEDvel com a propriedade
`),Ml(422,`code`),mN(423,`p-search-type`),lg(),mN(424,` do tipo `),Ml(425,`code`),mN(426,`locate`),lg(),mN(427,`.`),lg()()()(),Ml(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),mN(432,` p-filter-select`),ql(433,`br`),lg()()(),Ml(434,`td`,18)(435,`code`,28),mN(436,`PoSearchFilterSelect[]`),lg()(),Ml(437,`td`,20),mN(438,`-`),lg(),Ml(439,`td`,21)(440,`p`),mN(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Ml(442,`code`),mN(443,`p-items`),lg(),mN(444,`. Automaticamente adiciona a opção `),Ml(445,`strong`),mN(446,`Todos`),lg(),mN(447,`, com um mapeamento de todas as opções passadas.`),lg(),Ml(448,`p`),mN(449,`Exemplo de uso:`),lg(),Ml(450,`pre`)(451,`code`,27),mN(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),lg()(),Ml(453,`blockquote`)(454,`p`),mN(455,`Ao ser habilitada, a propriedade `),Ml(456,`code`),mN(457,`p-filter-keys`),lg(),mN(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Ml(459,`code`),mN(460,`p-search-type`),lg(),mN(461,` do tipo `),Ml(462,`code`),mN(463,`locate`),lg(),mN(464,`.`),lg()()()(),Ml(465,`tr`,14)(466,`td`,15)(467,`div`,16)(468,`span`,17),mN(469,` p-filter-type`),ql(470,`br`),lg()()(),Ml(471,`td`,18)(472,`code`,29),mN(473,`PoSearchFilterMode`),lg()(),Ml(474,`td`,20)(475,`p`)(476,`code`),mN(477,`startsWith`),lg()()(),Ml(478,`td`,21)(479,`em`)(480,`strong`),mN(481,`(opcional)`),lg()(),Ml(482,`p`),mN(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Ml(484,`strong`),mN(485,`PoSearchFilterMode`),lg(),mN(486,`.`),lg(),Ml(487,`blockquote`)(488,`p`),mN(489,`Incompatível com a propriedade `),Ml(490,`code`),mN(491,`p-search-type`),lg(),mN(492,` do tipo `),Ml(493,`code`),mN(494,`locate`),lg(),mN(495,`.`),lg()()()(),Ml(496,`tr`,14)(497,`td`,15)(498,`div`,22)(499,`span`,23),mN(500,` (p-filtered-items-change)`),ql(501,`br`),lg()()(),Ml(502,`td`,18)(503,`code`,24),mN(504,`EventEmitter`),lg()(),Ml(505,`td`,20),mN(506,`-`),lg(),Ml(507,`td`,21)(508,`em`)(509,`strong`),mN(510,`(opcional)`),lg()(),Ml(511,`p`),mN(512,`Pode ser informada uma função que será disparada quando houver alterações no input.`),lg(),Ml(513,`blockquote`)(514,`p`),mN(515,`Incompatível com a propriedade `),Ml(516,`code`),mN(517,`p-search-type`),lg(),mN(518,` do tipo `),Ml(519,`code`),mN(520,`locate`),lg(),mN(521,`.`),lg()()()(),Ml(522,`tr`,14)(523,`td`,15)(524,`div`,22)(525,`span`,23),mN(526,` (p-focus)`),ql(527,`br`),lg()()(),Ml(528,`td`,18)(529,`code`,24),mN(530,`EventEmitter`),lg()(),Ml(531,`td`,20),mN(532,`-`),lg(),Ml(533,`td`,21)(534,`em`)(535,`strong`),mN(536,`(opcional)`),lg()(),Ml(537,`p`),mN(538,`Evento emitido quando o campo de entrada (input) recebe foco.`),lg()()(),Ml(539,`tr`,14)(540,`td`,15)(541,`div`,22)(542,`span`,23),mN(543,` (p-footer-action-listbox)`),ql(544,`br`),lg()()(),Ml(545,`td`,18)(546,`code`,24),mN(547,`EventEmitter`),lg()(),Ml(548,`td`,20),mN(549,`-`),lg(),Ml(550,`td`,21)(551,`em`)(552,`strong`),mN(553,`(opcional)`),lg()(),Ml(554,`p`),mN(555,`Evento disparado ao clicar no botão de ação exibido no rodapé do `),Ml(556,`code`),mN(557,`listbox`),lg(),mN(558,`.
O texto exibido pode ser configurado por meio do literal `),Ml(559,`code`),mN(560,`footerActionListbox`),lg(),mN(561,`.`),lg()()(),Ml(562,`tr`,14)(563,`td`,15)(564,`div`,16)(565,`span`,17),mN(566,` p-icon`),ql(567,`br`),lg()()(),Ml(568,`td`,18)(569,`code`,19),mN(570,`string `),lg(),Ml(571,`code`,30),mN(572,` TemplateRef<void>`),lg()(),Ml(573,`td`,20),mN(574,`-`),lg(),Ml(575,`td`,21)(576,`em`)(577,`strong`),mN(578,`(opcional)`),lg()(),Ml(579,`p`),mN(580,`Permite customizar o ícone de busca que acompanha o campo.`),lg(),Ml(581,`p`),mN(582,`É possível usar qualquer um dos ícones da `),Ml(583,`a`,31),mN(584,`Biblioteca de ícones PO UI`),lg(),mN(585,`, conforme exemplo:`),lg(),Ml(586,`pre`)(587,`code`),mN(588,`<po-search p-icon="an an-user"></po-search>
`),lg()(),Ml(589,`p`),mN(590,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(591,`em`),mN(592,`Font Awesome`),lg(),mN(593,`, desde que a biblioteca
esteja carregada no projeto:`),lg(),Ml(594,`pre`)(595,`code`),mN(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),lg()(),Ml(597,`p`),mN(598,`Outra opção seria a customização do ícone através do `),Ml(599,`code`),mN(600,`TemplateRef`),lg(),mN(601,`, conforme exemplo abaixo:`),lg(),Ml(602,`pre`)(603,`code`),mN(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),lg()()()(),Ml(605,`tr`,14)(606,`td`,15)(607,`div`,16)(608,`span`,17),mN(609,` p-items`),ql(610,`br`),lg()()(),Ml(611,`td`,18)(612,`code`,26),mN(613,`Array<any>`),lg()(),Ml(614,`td`,20),mN(615,`-`),lg(),Ml(616,`td`,21)(617,`em`)(618,`strong`),mN(619,`(opcional)`),lg()(),Ml(620,`p`),mN(621,`Lista de itens que serão utilizados para pesquisa.`),lg(),Ml(622,`blockquote`)(623,`p`),mN(624,`Incompatível com a propriedade `),Ml(625,`code`),mN(626,`p-search-type`),lg(),mN(627,` do tipo `),Ml(628,`code`),mN(629,`locate`),lg(),mN(630,`.`),lg()()()(),Ml(631,`tr`,14)(632,`td`,15)(633,`div`,22)(634,`span`,23),mN(635,` (p-keydown)`),ql(636,`br`),lg()()(),Ml(637,`td`,18)(638,`code`,24),mN(639,`EventEmitter`),lg()(),Ml(640,`td`,20),mN(641,`-`),lg(),Ml(642,`td`,21)(643,`em`)(644,`strong`),mN(645,`(opcional)`),lg()(),Ml(646,`p`),mN(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(648,`code`),mN(649,`KeyboardEvent`),lg(),mN(650,` com informações sobre a tecla.`),lg()()(),Ml(651,`tr`,14)(652,`td`,15)(653,`div`,16)(654,`span`,17),mN(655,` p-keys-label`),ql(656,`br`),lg()()(),Ml(657,`td`,18)(658,`code`,32),mN(659,`Array<string>`),lg()(),Ml(660,`td`,20),mN(661,`-`),lg(),Ml(662,`td`,21)(663,`em`)(664,`strong`),mN(665,`(opcional)`),lg()(),Ml(666,`p`),mN(667,`Define os nomes das propriedades do objeto que serão exibidos como rótulos (labels) no `),Ml(668,`code`),mN(669,`listbox`),lg(),mN(670,` quando a propriedade
`),Ml(671,`code`),mN(672,`p-show-listbox`),lg(),mN(673,` estiver habilitada.`),lg(),Ml(674,`p`),mN(675,`Deve ser informado um array de strings contendo até `),Ml(676,`strong`),mN(677,`3 propriedades`),lg(),mN(678,`.`),lg(),Ml(679,`p`),mN(680,`Exemplo de uso:`),lg(),Ml(681,`pre`)(682,`code`,33),mN(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),lg()()()(),Ml(684,`tr`,14)(685,`td`,15)(686,`div`,22)(687,`span`,23),mN(688,` (p-listbox-onclick)`),ql(689,`br`),lg()()(),Ml(690,`td`,18)(691,`code`,24),mN(692,`EventEmitter`),lg()(),Ml(693,`td`,20),mN(694,`-`),lg(),Ml(695,`td`,21)(696,`em`)(697,`strong`),mN(698,`(opcional)`),lg()(),Ml(699,`p`),mN(700,`Pode ser informada uma função que será disparada quando houver click no listbox.`),lg(),Ml(701,`blockquote`)(702,`p`),mN(703,`Incompatível com a propriedade `),Ml(704,`code`),mN(705,`p-search-type`),lg(),mN(706,` do tipo `),Ml(707,`code`),mN(708,`locate`),lg(),mN(709,`.`),lg()()()(),Ml(710,`tr`,14)(711,`td`,15)(712,`div`,16)(713,`span`,17),mN(714,` p-literals`),ql(715,`br`),lg()()(),Ml(716,`td`,18)(717,`code`,34),mN(718,`PoSearchLiterals`),lg()(),Ml(719,`td`,20),mN(720,`-`),lg(),Ml(721,`td`,21)(722,`em`)(723,`strong`),mN(724,`(opcional)`),lg()(),Ml(725,`p`),mN(726,`Objeto com as literais usadas no `),Ml(727,`code`),mN(728,`po-search`),lg(),mN(729,`, permitindo personalizar os textos exibidos no componente.`),lg(),Ml(730,`p`),mN(731,`Para utilizar basta passar a literal que deseja customizar:`),lg(),Ml(732,`pre`)(733,`code`),mN(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),lg()(),Ml(735,`p`),mN(736,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),lg(),Ml(737,`pre`)(738,`code`),mN(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),lg()(),Ml(740,`blockquote`)(741,`p`),mN(742,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ml(743,`a`,35)(744,`code`),mN(745,`PoI18nService`),lg()(),mN(746,` ou
do browser.`),lg()()()(),Ml(747,`tr`,14)(748,`td`,15)(749,`div`,16)(750,`span`,17),mN(751,` p-loading`),ql(752,`br`),lg()()(),Ml(753,`td`,18)(754,`code`,25),mN(755,`boolean`),lg()(),Ml(756,`td`,20)(757,`p`)(758,`code`),mN(759,`false`),lg()()(),Ml(760,`td`,21)(761,`em`)(762,`strong`),mN(763,`(opcional)`),lg()(),Ml(764,`p`),mN(765,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg(),Ml(766,`blockquote`)(767,`p`),mN(768,`Incompatível com a propriedade `),Ml(769,`code`),mN(770,`p-search-type`),lg(),mN(771,` do tipo `),Ml(772,`code`),mN(773,`locate`),lg(),mN(774,`.`),lg()()()(),Ml(775,`tr`,14)(776,`td`,15)(777,`div`,22)(778,`span`,23),mN(779,` (p-locate-next)`),ql(780,`br`),lg()()(),Ml(781,`td`,18)(782,`code`,24),mN(783,`EventEmitter`),lg()(),Ml(784,`td`,20),mN(785,`-`),lg(),Ml(786,`td`,21)(787,`em`)(788,`strong`),mN(789,`(opcional)`),lg()(),Ml(790,`p`),mN(791,`Evento disparado ao clicar no controle "Próximo resultado".`),lg(),Ml(792,`blockquote`)(793,`p`),mN(794,`Compatível com a propriedade `),Ml(795,`code`),mN(796,`p-search-type`),lg(),mN(797,` do tipo `),Ml(798,`code`),mN(799,`locate`),lg(),mN(800,`.`),lg()()()(),Ml(801,`tr`,14)(802,`td`,15)(803,`div`,22)(804,`span`,23),mN(805,` (p-locate-previous)`),ql(806,`br`),lg()()(),Ml(807,`td`,18)(808,`code`,24),mN(809,`EventEmitter`),lg()(),Ml(810,`td`,20),mN(811,`-`),lg(),Ml(812,`td`,21)(813,`em`)(814,`strong`),mN(815,`(opcional)`),lg()(),Ml(816,`p`),mN(817,`Evento disparado ao clicar no controle "Resultado anterior".`),lg(),Ml(818,`blockquote`)(819,`p`),mN(820,`Compatível com a propriedade `),Ml(821,`code`),mN(822,`p-search-type`),lg(),mN(823,` do tipo `),Ml(824,`code`),mN(825,`locate`),lg(),mN(826,`.`),lg()()()(),Ml(827,`tr`,14)(828,`td`,15)(829,`div`,16)(830,`span`,17),mN(831,` p-locate-summary`),ql(832,`br`),lg()()(),Ml(833,`td`,18)(834,`code`,36),mN(835,`PoSearchLocateSummary`),lg()(),Ml(836,`td`,20),mN(837,`-`),lg(),Ml(838,`td`,21)(839,`em`)(840,`strong`),mN(841,`(opcional)`),lg()(),Ml(842,`p`),mN(843,`Define os valores do contador exibido ao usar a propriedade `),Ml(844,`code`),mN(845,`p-search-type`),lg(),mN(846,` do tipo `),Ml(847,`code`),mN(848,`locate`),lg(),mN(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),lg(),Ml(850,`pre`)(851,`code`,33),mN(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),lg()(),Ml(853,`blockquote`)(854,`p`),mN(855,`Compatível com a propriedade `),Ml(856,`code`),mN(857,`p-search-type`),lg(),mN(858,` do tipo `),Ml(859,`code`),mN(860,`locate`),lg(),mN(861,`.`),lg()()()(),Ml(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),mN(866,` name`),ql(867,`br`),lg()()(),Ml(868,`td`,18)(869,`code`,19),mN(870,`string`),lg()(),Ml(871,`td`,20),mN(872,`-`),lg(),Ml(873,`td`,21)(874,`em`)(875,`strong`),mN(876,`(opcional)`),lg()(),Ml(877,`p`),mN(878,`Nome e identificador do campo.`),lg()()(),Ml(879,`tr`,14)(880,`td`,15)(881,`div`,16)(882,`span`,17),mN(883,` p-no-autocomplete`),ql(884,`br`),lg()()(),Ml(885,`td`,18)(886,`code`,25),mN(887,`boolean`),lg()(),Ml(888,`td`,20)(889,`p`)(890,`code`),mN(891,`false`),lg()()(),Ml(892,`td`,21)(893,`em`)(894,`strong`),mN(895,`(opcional)`),lg()(),Ml(896,`p`),mN(897,`Define a propriedade nativa `),Ml(898,`code`),mN(899,`autocomplete`),lg(),mN(900,` do campo como `),Ml(901,`code`),mN(902,`off`),lg(),mN(903,`.`),lg()()(),Ml(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),mN(908,` p-show-listbox`),ql(909,`br`),lg()()(),Ml(910,`td`,18)(911,`code`,25),mN(912,`boolean`),lg()(),Ml(913,`td`,20)(914,`p`)(915,`code`),mN(916,`false`),lg()()(),Ml(917,`td`,21)(918,`em`)(919,`strong`),mN(920,`(opcional)`),lg()(),Ml(921,`p`),mN(922,`Exibe uma lista (auto-complete) com as opções definidas em `),Ml(923,`code`),mN(924,`p-filter-keys`),lg(),mN(925,` ou `),Ml(926,`code`),mN(927,`p-filter-select`),lg(),mN(928,` enquanto realiza
uma busca, respeitando o `),Ml(929,`code`),mN(930,`p-filter-type`),lg(),mN(931,` como modo de pesquisa.`),lg(),Ml(932,`blockquote`)(933,`p`),mN(934,`Incompatível com a propriedade `),Ml(935,`code`),mN(936,`p-search-type`),lg(),mN(937,` do tipo `),Ml(938,`code`),mN(939,`locate`),lg(),mN(940,`.`),lg()()()(),Ml(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),mN(945,` p-size`),ql(946,`br`),lg()()(),Ml(947,`td`,18)(948,`code`,19),mN(949,`string`),lg()(),Ml(950,`td`,20)(951,`p`)(952,`code`),mN(953,`medium`),lg()()(),Ml(954,`td`,21)(955,`em`)(956,`strong`),mN(957,`(opcional)`),lg()(),Ml(958,`p`),mN(959,`Define o tamanho do componente:`),lg(),Ml(960,`ul`)(961,`li`)(962,`code`),mN(963,`small`),lg(),mN(964,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(965,`li`)(966,`code`),mN(967,`medium`),lg(),mN(968,`: altura do input como 44px.`),lg()(),Ml(969,`blockquote`)(970,`p`),mN(971,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(972,`code`),mN(973,`medium`),lg(),mN(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(975,`a`,37),mN(976,`po-theme`),lg(),mN(977,`.`),lg()()()(),Ml(978,`tr`,14)(979,`td`,15)(980,`div`,16)(981,`span`,17),mN(982,` p-search-type`),ql(983,`br`),lg()()(),Ml(984,`td`,18)(985,`code`,38),mN(986,`searchMode`),lg()(),Ml(987,`td`,20)(988,`p`)(989,`code`),mN(990,`action`),lg()()(),Ml(991,`td`,21)(992,`em`)(993,`strong`),mN(994,`(opcional)`),lg()(),Ml(995,`p`),mN(996,`Determina a forma de realizar a pesquisa no componente. Valores aceitos:`),lg(),Ml(997,`ul`)(998,`li`)(999,`code`),mN(1e3,`action`),lg(),mN(1001,`: Realiza a busca a cada caractere digitado.`),lg(),Ml(1002,`li`)(1003,`code`),mN(1004,`trigger`),lg(),mN(1005,`: Realiza a busca ao pressionar `),Ml(1006,`code`),mN(1007,`enter`),lg(),mN(1008,` ou clicar no ícone de busca.`),lg(),Ml(1009,`li`)(1010,`code`),mN(1011,`locate`),lg(),mN(1012,`: Modo manual. Exibe botões e contador, mas não executa buscas — controle é do desenvolvedor.`),lg(),Ml(1013,`li`)(1014,`code`),mN(1015,`execute`),lg(),mN(1016,`: Executa uma ação ou realiza um redirecionamento ao selecionar um item no `),Ml(1017,`code`),mN(1018,`listbox`),lg(),mN(1019,`. Para este tipo, é necessário informar as propriedades `),Ml(1020,`code`),mN(1021,`action`),lg(),mN(1022,` ou `),Ml(1023,`code`),mN(1024,`url`),lg(),mN(1025,` nos itens definidos em `),Ml(1026,`code`),mN(1027,`p-items`),lg(),mN(1028,`.`),lg()()()()(),Ml(1029,`h3`),mN(1030,`Interfaces`),lg(),Ml(1031,`h4`,39)(1032,`code`,5),mN(1033,`PoSearchFilterSelect`),lg()(),Ml(1034,`div`,2)(1035,`p`),mN(1036,`Interface que define as opções que serão exibidas no dropdown do `),Ml(1037,`code`),mN(1038,`po-search`),lg(),mN(1039,`, ao usar a propriedade `),Ml(1040,`code`),mN(1041,`p-filter-select`),lg(),mN(1042,`.`),lg()(),Ml(1043,`h4`,10),mN(1044,`Propriedades`),lg(),Ml(1045,`table`,11)(1046,`tr`,12)(1047,`th`,13),mN(1048,`Nome`),lg(),Ml(1049,`th`,13),mN(1050,`Tipo`),lg(),Ml(1051,`th`,13),mN(1052,`Descrição`),lg()(),Ml(1053,`tr`,14)(1054,`td`,15)(1055,`div`,16)(1056,`span`,17),mN(1057,` label`),ql(1058,`br`),lg()()(),Ml(1059,`td`,18)(1060,`code`,19),mN(1061,`string`),lg()(),Ml(1062,`td`,21)(1063,`p`),mN(1064,`Descrição exibida nas opções da lista.`),lg()()(),Ml(1065,`tr`,14)(1066,`td`,15)(1067,`div`,16)(1068,`span`,17),mN(1069,` value`),ql(1070,`br`),lg()()(),Ml(1071,`td`,18)(1072,`code`,32),mN(1073,`Array<string> `),lg(),Ml(1074,`code`,19),mN(1075,` string`),lg()(),Ml(1076,`td`,21)(1077,`p`),mN(1078,`Valores que serão atribuídos ao `),Ml(1079,`code`),mN(1080,`p-filter-keys`),lg()()()()(),Ml(1081,`h4`,39)(1082,`code`,5),mN(1083,`PoSearchLocateSummary`),lg()(),Ml(1084,`div`,2)(1085,`p`),mN(1086,`Interface que define o resumo de localização do filtro `),Ml(1087,`code`),mN(1088,`p-filter-locate`),lg(),mN(1089,`.`),lg()(),Ml(1090,`h4`,10),mN(1091,`Propriedades`),lg(),Ml(1092,`table`,11)(1093,`tr`,12)(1094,`th`,13),mN(1095,`Nome`),lg(),Ml(1096,`th`,13),mN(1097,`Tipo`),lg(),Ml(1098,`th`,13),mN(1099,`Descrição`),lg()(),Ml(1100,`tr`,14)(1101,`td`,15)(1102,`div`,16)(1103,`span`,17),mN(1104,` currentIndex`),ql(1105,`br`),lg()()(),Ml(1106,`td`,18)(1107,`code`,40),mN(1108,`number`),lg()(),Ml(1109,`td`,21)(1110,`p`),mN(1111,`Índice atual da ocorrência localizada.`),lg()()(),Ml(1112,`tr`,14)(1113,`td`,15)(1114,`div`,16)(1115,`span`,17),mN(1116,` total`),ql(1117,`br`),lg()()(),Ml(1118,`td`,18)(1119,`code`,40),mN(1120,`number`),lg()(),Ml(1121,`td`,21)(1122,`p`),mN(1123,`Total de ocorrências encontradas.`),lg()()()(),Ml(1124,`h4`,39)(1125,`code`,5),mN(1126,`PoSearchOption`),lg()(),Ml(1127,`div`,2)(1128,`p`),mN(1129,`Interface que define as opções que serão exibidas na lista ao procurar do `),Ml(1130,`code`),mN(1131,`po-search`),lg(),mN(1132,`.`),lg()(),Ml(1133,`h4`,10),mN(1134,`Propriedades`),lg(),Ml(1135,`table`,11)(1136,`tr`,12)(1137,`th`,13),mN(1138,`Nome`),lg(),Ml(1139,`th`,13),mN(1140,`Tipo`),lg(),Ml(1141,`th`,13),mN(1142,`Descrição`),lg()(),Ml(1143,`tr`,14)(1144,`td`,15)(1145,`div`,16)(1146,`span`,17),mN(1147,` label`),ql(1148,`br`),lg()()(),Ml(1149,`td`,18)(1150,`code`,19),mN(1151,`string`),lg()(),Ml(1152,`td`,21)(1153,`em`)(1154,`strong`),mN(1155,`(opcional)`),lg()(),Ml(1156,`p`),mN(1157,`Descrição exibida nas opções da lista.`),lg(),Ml(1158,`blockquote`)(1159,`p`),mN(1160,`Caso não seja definida será assumido o valor definido na propriedade `),Ml(1161,`code`),mN(1162,`value`),lg(),mN(1163,`.`),lg()()()(),Ml(1164,`tr`,14)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),mN(1168,` value`),ql(1169,`br`),lg()()(),Ml(1170,`td`,18)(1171,`code`,19),mN(1172,`string `),lg(),Ml(1173,`code`,40),mN(1174,` number`),lg()(),Ml(1175,`td`,21)(1176,`p`),mN(1177,`Valor do objeto que será atribuído ao `),Ml(1178,`em`),mN(1179,`model`),lg(),mN(1180,`.`),lg()()()(),Ml(1181,`h4`,39)(1182,`code`,5),mN(1183,`PoSearchLiterals`),lg()(),Ml(1184,`div`,2)(1185,`p`),mN(1186,`Interface para definição das literais usadas no `),Ml(1187,`code`),mN(1188,`po-search`),lg(),mN(1189,`.`),lg()(),Ml(1190,`h4`,10),mN(1191,`Propriedades`),lg(),Ml(1192,`table`,11)(1193,`tr`,12)(1194,`th`,13),mN(1195,`Nome`),lg(),Ml(1196,`th`,13),mN(1197,`Tipo`),lg(),Ml(1198,`th`,13),mN(1199,`Descrição`),lg()(),Ml(1200,`tr`,14)(1201,`td`,15)(1202,`div`,16)(1203,`span`,17),mN(1204,` all`),ql(1205,`br`),lg()()(),Ml(1206,`td`,18)(1207,`code`,19),mN(1208,`string`),lg()(),Ml(1209,`td`,21)(1210,`em`)(1211,`strong`),mN(1212,`(opcional)`),lg()(),Ml(1213,`p`),mN(1214,`Texto exibido no dropdown de tipo de filtro, representando todos os tipos disponíveis.`),lg(),Ml(1215,`blockquote`)(1216,`p`),mN(1217,`Exibido apenas quando a propriedade `),Ml(1218,`code`),mN(1219,`p-filter-select`),lg(),mN(1220,` estiver habilitada.`),lg()()()(),Ml(1221,`tr`,14)(1222,`td`,15)(1223,`div`,16)(1224,`span`,17),mN(1225,` clean`),ql(1226,`br`),lg()()(),Ml(1227,`td`,18)(1228,`code`,19),mN(1229,`string`),lg()(),Ml(1230,`td`,21)(1231,`em`)(1232,`strong`),mN(1233,`(opcional)`),lg()(),Ml(1234,`p`),mN(1235,`Texto alternativo (aria-label) para o botão de limpar o campo de busca, usado por leitores de tela.`),lg()()(),Ml(1236,`tr`,14)(1237,`td`,15)(1238,`div`,16)(1239,`span`,17),mN(1240,` footerActionListbox`),ql(1241,`br`),lg()()(),Ml(1242,`td`,18)(1243,`code`,19),mN(1244,`string`),lg()(),Ml(1245,`td`,21)(1246,`em`)(1247,`strong`),mN(1248,`(opcional)`),lg()(),Ml(1249,`p`),mN(1250,`Texto exibido na ação do rodapé da lista de resultados.`),lg()()(),Ml(1251,`tr`,14)(1252,`td`,15)(1253,`div`,16)(1254,`span`,17),mN(1255,` next`),ql(1256,`br`),lg()()(),Ml(1257,`td`,18)(1258,`code`,19),mN(1259,`string`),lg()(),Ml(1260,`td`,21)(1261,`em`)(1262,`strong`),mN(1263,`(opcional)`),lg()(),Ml(1264,`p`),mN(1265,`Texto alternativo (aria-label) para navegação até o próximo resultado da busca.`),lg(),Ml(1266,`blockquote`)(1267,`p`),mN(1268,`Exibido apenas quando a propriedade `),Ml(1269,`code`),mN(1270,`p-filter-locate`),lg(),mN(1271,` estiver habilitada.`),lg()()()(),Ml(1272,`tr`,14)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),mN(1276,` of`),ql(1277,`br`),lg()()(),Ml(1278,`td`,18)(1279,`code`,19),mN(1280,`string`),lg()(),Ml(1281,`td`,21)(1282,`em`)(1283,`strong`),mN(1284,`(opcional)`),lg()(),Ml(1285,`p`),mN(1286,`Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").`),lg(),Ml(1287,`blockquote`)(1288,`p`),mN(1289,`Exibido apenas quando a propriedade `),Ml(1290,`code`),mN(1291,`p-filter-locate`),lg(),mN(1292,` estiver habilitada.`),lg()()()(),Ml(1293,`tr`,14)(1294,`td`,15)(1295,`div`,16)(1296,`span`,17),mN(1297,` placeholderListbox`),ql(1298,`br`),lg()()(),Ml(1299,`td`,18)(1300,`code`,19),mN(1301,`string`),lg()(),Ml(1302,`td`,21)(1303,`em`)(1304,`strong`),mN(1305,`(opcional)`),lg()(),Ml(1306,`p`),mN(1307,`Texto exibido como `),Ml(1308,`em`),mN(1309,`placeholder`),lg(),mN(1310,` na lista de resultados.`),lg()()(),Ml(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),mN(1315,` previous`),ql(1316,`br`),lg()()(),Ml(1317,`td`,18)(1318,`code`,19),mN(1319,`string`),lg()(),Ml(1320,`td`,21)(1321,`em`)(1322,`strong`),mN(1323,`(opcional)`),lg()(),Ml(1324,`p`),mN(1325,`Texto alternativo (aria-label) para navegação até o resultado anterior da busca.`),lg(),Ml(1326,`blockquote`)(1327,`p`),mN(1328,`Exibido apenas quando a propriedade `),Ml(1329,`code`),mN(1330,`p-filter-locate`),lg(),mN(1331,` estiver habilitada.`),lg()()()(),Ml(1332,`tr`,14)(1333,`td`,15)(1334,`div`,16)(1335,`span`,17),mN(1336,` result`),ql(1337,`br`),lg()()(),Ml(1338,`td`,18)(1339,`code`,19),mN(1340,`string`),lg()(),Ml(1341,`td`,21)(1342,`em`)(1343,`strong`),mN(1344,`(opcional)`),lg()(),Ml(1345,`p`),mN(1346,`Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.`),lg(),Ml(1347,`blockquote`)(1348,`p`),mN(1349,`Exibido apenas quando a propriedade `),Ml(1350,`code`),mN(1351,`p-filter-locate`),lg(),mN(1352,` estiver habilitada.`),lg()()()(),Ml(1353,`tr`,14)(1354,`td`,15)(1355,`div`,16)(1356,`span`,17),mN(1357,` search`),ql(1358,`br`),lg()()(),Ml(1359,`td`,18)(1360,`code`,19),mN(1361,`string`),lg()(),Ml(1362,`td`,21)(1363,`em`)(1364,`strong`),mN(1365,`(opcional)`),lg()(),Ml(1366,`p`),mN(1367,`Texto exibido como `),Ml(1368,`em`),mN(1369,`placeholder`),lg(),mN(1370,` no campo de busca.`),lg()()()(),Ml(1371,`h3`),mN(1372,`Enums`),lg(),Ml(1373,`h4`,4)(1374,`code`,5),mN(1375,`PoSearchFilterMode`),lg()(),Ml(1376,`div`,2)(1377,`p`),mN(1378,`Define o tipo de busca usado no `),Ml(1379,`code`),mN(1380,`po-search`),lg(),mN(1381,`.`),lg()(),Ml(1382,`h4`,10),mN(1383,`Propriedades`),lg(),Ml(1384,`table`,11)(1385,`tr`,12)(1386,`th`,13),mN(1387,`Nome`),lg(),Ml(1388,`th`,13),mN(1389,`Descrição`),lg()(),Ml(1390,`tr`,14)(1391,`td`,15)(1392,`div`,16)(1393,`span`,17),mN(1394,` startsWith`),ql(1395,`br`),lg()()(),Ml(1396,`td`,21)(1397,`p`),mN(1398,`Verifica se o texto `),Ml(1399,`em`),mN(1400,`inicia`),lg(),mN(1401,` com o valor pesquisado.`),lg()()(),Ml(1402,`tr`,14)(1403,`td`,15)(1404,`div`,16)(1405,`span`,17),mN(1406,` contains`),ql(1407,`br`),lg()()(),Ml(1408,`td`,21)(1409,`p`),mN(1410,`Verifica se o texto `),Ml(1411,`em`),mN(1412,`contém`),lg(),mN(1413,` o valor pesquisado.`),lg()()(),Ml(1414,`tr`,14)(1415,`td`,15)(1416,`div`,16)(1417,`span`,17),mN(1418,` endsWith`),ql(1419,`br`),lg()()(),Ml(1420,`td`,21)(1421,`p`),mN(1422,`Verifica se o texto `),Ml(1423,`em`),mN(1424,`finaliza`),lg(),mN(1425,` com o valor pesquisado.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ot=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Search`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-search-doc`),lg(),Ml(4,`po-tab`,3),ht$1(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-search-basic-view`)(6,`sample-po-search-labs-view`)(7,`sample-po-search-find-people-view`)(8,`sample-po-search-listbox-view`)(9,`sample-po-search-filter-select-view`)(10,`sample-po-search-execute-view`)(11,`sample-po-search-fields-locate-view`),lg()()()),o&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2,changeDetection:1})}return a})()}];var Ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(Ot),NL]})}return a})();var Jn=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ye]})}return a})();export{Jn as DocPoSearchModule};