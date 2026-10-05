import{$i as pt$1,Ai as hm,Br as Qn,Bt as dne,Ci as fo,Cr as KP,Ct as Voe,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hi as kx,Hr as RE,Ir as Ox,Ji as p0,Jn as BP,Jt as gae,Kn as Ax,Kr as S9,Lt as bae,M as Ef,Ni as hw,Nn as x4,Qn as C9,Sa as zO,Tt as W5,Wi as m0,Wn as AN,Xr as Te,Yr as TE,Zn as Bx,_ as $3,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,bt as Uze,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,ga as wN,hr as I,i as _a,ia as sE,in as kte,j as Ec,ji as ho,jr as Nx,k as D4,ki as he,lt as Pu,na as qP,ni as Xc,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ti as Wx,ua as ug,ui as be,wn as see,wr as Kc,yt as T4,zi as kL}from"./main-BRRQVWD7.js";var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-basic`]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&Kc(0,`po-search`)},dependencies:[dne],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Search Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-basic/sample-po-search-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-search></po-search>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-basic/sample-po-search-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-search-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,$e,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,qe],encapsulation:2,changeDetection:1})}return a})();var nt=[`poSearch`];function it(a,w){if(a&1&&(Ac(0,`div`)(1,`strong`),vN(2),ug(),vN(3),ug()),a&2){let r=w.$implicit,o=Wx().$implicit;Hp(2),mg(``,r,`: `),Hp(),mg(` `,o[r],` \xA0 `)}}function at(a,w){if(a&1&&(Ac(0,`li`),Ox(1,it,4,2,`div`,null,Nx),ug()),a&2){let r=w.$implicit,o=Wx();Hp(),kx(o.changeFilter(r))}}var Be=(()=>{class a{http=f(hw);poSearch;ariaLabel;customLiterals;literals;properties=[];search=``;event=``;service=`https://po-sample-api.onrender.com/v1/heroes`;items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Pu.startsWith;searchMode=`action`;fieldKey;itemsModel;filterModel=`["name"]`;filterSelectModel;size=`medium`;customLocateSummary;locateSummary;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`showListbox`,label:`Show Listbox`},{value:`loading`,label:`Loading`}];iconsOptions=[{label:`fa-search`,value:`fa fa-search`},{label:`an-user`,value:`an an-user`},{label:`an-magnifying-glass`,value:`an an-magnifying-glass`}];filterModeOptions=[{label:`Starts With`,value:Pu.startsWith},{label:`Contains`,value:Pu.contains},{label:`Ends With`,value:Pu.endsWith}];searchModeOptions=[{label:`Action`,value:`action`},{label:`Execute`,value:`execute`},{label:`Locate`,value:`locate`},{label:`Trigger`,value:`trigger`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=[`name`])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?`p-change-model`:`p-filtered-items-change`}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??``)}catch(r){this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??``)}catch(r){this.customLocateSummary=void 0}}restore(){this.ariaLabel=``,this.search=``,this.event=``,this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel=`["name"]`,this.filterSelectModel=``,this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Pu.startsWith,this.searchMode=`action`,this.literals=void 0,this.locateSummary=void 0,this.size=`medium`,this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-labs`]],viewQuery:function(o,i){if(o&1&&Xc(nt,7),o&2){let p;fo(p=ho())&&(i.poSearch=p.first)}},standalone:!1,features:[Te],decls:32,vars:33,consts:[[`poSearch`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-blur`,`p-change-model`,`p-filtered-items-change`,`p-locate-next`,`p-locate-previous`,`p-aria-label`,`p-disabled`,`p-filter-keys`,`p-filter-type`,`p-filter-select`,`p-icon`,`p-items`,`p-literals`,`p-loading`,`p-locate-summary`,`p-search-type`,`p-show-listbox`,`p-size`],[1,`po-md-12`],[3,`p-label`],[1,`sample-list-search`,`po-md-12`,`row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`ariaLabel`,`p-label`,`Aria label`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`items`,`p-label`,`Items`,`p-help`,`Ex.: [{ "cidade": "São Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "Tóquio", "pais": "Japão" }]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`searchMode`,`p-label`,`Search Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-label`,`Filter Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locateSummary`,`p-help`,`{ "currentIndex": 1000, "total": 1000 }`,`p-label`,`Locate Summary`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"search": "Search people"}`,`p-label`,`Literals`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`Filter Keys`,`p-label`,`Filter Keys`,`p-help`,`Ex.: ["cidade", "pais"]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`Filter Select`,`p-label`,`Filter Select`,`p-help`,`Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(o,i){if(o&1){let p=Bx();Ac(0,`div`,2)(1,`po-search`,3,0),pt$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-filtered-items-change`,function(d){return i.filter(d)})(`p-locate-next`,function(){return i.changeEvent(`p-locate-next`)})(`p-locate-previous`,function(){return i.changeEvent(`p-locate-previous`)}),ug()(),Kc(3,`po-divider`),Ac(4,`div`,2)(5,`po-accordion`,4)(6,`po-accordion-item`,5)(7,`po-widget`,4)(8,`ul`,6),Ox(9,at,3,0,`li`,null,Nx),ug()()()()(),Kc(11,`po-divider`),Ac(12,`div`,2),Kc(13,`po-info`,7)(14,`po-info`,8),ug(),Kc(15,`po-divider`),Ac(16,`form`,null,1)(18,`po-input`,9),RE(`ngModelChange`,function(d){return Jv(p),DN(i.ariaLabel,d)||(i.ariaLabel=d),e_(d)}),ug(),p0(),Ac(19,`po-input`,10),RE(`ngModelChange`,function(d){return Jv(p),DN(i.itemsModel,d)||(i.itemsModel=d),e_(d)}),pt$1(`p-change-model`,function(d){return i.changeItems(d)}),ug(),p0(),Ac(20,`po-checkbox-group`,11),RE(`ngModelChange`,function(d){return Jv(p),DN(i.properties,d)||(i.properties=d),e_(d)}),ug(),p0(),Ac(21,`po-radio-group`,12),RE(`ngModelChange`,function(d){return Jv(p),DN(i.icon,d)||(i.icon=d),e_(d)}),ug(),p0(),Ac(22,`po-radio-group`,13),RE(`ngModelChange`,function(d){return Jv(p),DN(i.searchMode,d)||(i.searchMode=d),e_(d)}),ug(),p0(),Ac(23,`po-radio-group`,14),RE(`ngModelChange`,function(d){return Jv(p),DN(i.filterMode,d)||(i.filterMode=d),e_(d)}),ug(),p0(),Ac(24,`po-radio-group`,15),RE(`ngModelChange`,function(d){return Jv(p),DN(i.size,d)||(i.size=d),e_(d)}),ug(),p0(),Ac(25,`po-input`,16),RE(`ngModelChange`,function(d){return Jv(p),DN(i.locateSummary,d)||(i.locateSummary=d),e_(d)}),pt$1(`p-change`,function(){return i.changeLocateSummary()}),ug(),p0(),Ac(26,`po-input`,17),RE(`ngModelChange`,function(d){return Jv(p),DN(i.literals,d)||(i.literals=d),e_(d)}),pt$1(`p-change`,function(){return i.changeLiterals()}),ug(),p0(),Ac(27,`po-input`,18),RE(`ngModelChange`,function(d){return Jv(p),DN(i.filterModel,d)||(i.filterModel=d),e_(d)}),pt$1(`p-change-model`,function(d){return i.updateFilterKeys(d)}),ug(),p0(),Ac(28,`po-input`,19),RE(`ngModelChange`,function(d){return Jv(p),DN(i.filterSelectModel,d)||(i.filterSelectModel=d),e_(d)}),pt$1(`p-change`,function(d){return i.updateFilterSelect(d)}),ug(),p0(),Kc(29,`po-divider`),Ac(30,`div`,2)(31,`po-button`,20),pt$1(`p-click`,function(){return i.restore()}),ug()()()}o&2&&(Hp(),cE(`p-aria-label`,i.ariaLabel)(`p-disabled`,i.properties.includes(`disabled`))(`p-filter-keys`,i.fieldKeys)(`p-filter-type`,i.filterMode)(`p-filter-select`,i.fieldSelect)(`p-icon`,i.icon)(`p-items`,i.items)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-locate-summary`,i.customLocateSummary)(`p-search-type`,i.searchMode)(`p-show-listbox`,i.properties.includes(`showListbox`))(`p-size`,i.size),Hp(5),cE(`p-label`,wN(`Itens encontrados: `,i.filteredItems?.length)),Hp(3),kx(i.filteredItems),Hp(4),cE(`p-value`,i.search),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.ariaLabel),m0(),Hp(),TE(`ngModel`,i.itemsModel),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.icon),cE(`p-options`,i.iconsOptions),m0(),Hp(),TE(`ngModel`,i.searchMode),cE(`p-options`,i.searchModeOptions),m0(),Hp(),TE(`ngModel`,i.filterMode),cE(`p-options`,i.filterModeOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0(),Hp(),TE(`ngModel`,i.locateSummary),m0(),Hp(),TE(`ngModel`,i.literals),m0(),Hp(),TE(`ngModel`,i.filterModel),m0(),Hp(),TE(`ngModel`,i.filterSelectModel),m0())},dependencies:[b9,D9,C9,BP,LP,see,W5,ni,Ef,l4,D4,kte,hoe,Ooe,dne],styles:[`.sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}`],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Search Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-labs/sample-po-search-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-labs/sample-po-search-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { HttpClient } from '@angular/common/http';
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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-search-labs/sample-po-search-labs.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-search-labs`),ug(),Kc(29,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,lt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Be],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function st(a,w){if(a&1&&(Ac(0,`div`,0),Kc(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),ug()),a&2){let r=w.$implicit;Hp(),cE(`p-value`,r.name),Hp(),cE(`p-value`,r.nickname),Hp(),cE(`p-value`,r.email)}}function mt(a,w){a&1&&Kc(0,`div`)}function pt(a,w){if(a&1&&(Ac(0,`li`,7),vN(1),Rx(2,mt,1,0,`div`),ug(),Ac(3,`li`,7),vN(4),ug()),a&2){let r=w.$implicit,o=Wx();Hp(),mg(` Nickname: `,r.nickname,` `),Hp(),Ax(o.compareObjects(r)?2:-1),Hp(2),mg(`Email: `,r.email)}}var Ve=(()=>{class a{service=f(le);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-find-people`]],standalone:!1,features:[be([le])],decls:8,vars:3,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`],[1,`po-md-12`,`po-text-color-neutral-dark-40`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`po-search`,1),pt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),ug()(),Kc(2,`po-divider`),Ox(3,st,4,3,`div`,0,Nx),Kc(5,`po-divider`),Ac(6,`po-list-view`,2),sE(7,pt,5,3,`ng-template`,3),ug()),o&2&&(Hp(),cE(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),Hp(2),kx(i.peopleFiltered),Hp(3),cE(`p-items`,i.items))},dependencies:[Ef,hoe,Uze,Voe,dne],styles:[`li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}`],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-find-people-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Search Find People`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-find-people/sample-po-search-find-people.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-find-people/sample-po-search-find-people.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-search-find-people/sample-po-search-find-people.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()(),Ac(25,`po-tab`,10)(26,`div`)(27,`label`,6),vN(28,`sample-po-search-find-people/sample-po-search-find-people.component.css`),ug(),Ac(29,`pre`,11),vN(30,`li {
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
`),ug()()()()(),Ac(31,`div`,12),Kc(32,`sample-po-search-find-people`),ug(),Kc(33,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ct,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ve],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,w){if(a&1&&(Ac(0,`div`,0),Kc(1,`po-divider`)(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),ug()),a&2){let r=w.$implicit;Hp(2),cE(`p-value`,r.name),Hp(),cE(`p-value`,r.nickname),Hp(),cE(`p-value`,r.email)}}var je=(()=>{class a{service=f(re);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-listbox`]],standalone:!1,features:[be([re])],decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-show-listbox`,`true`,`p-search-type`,`trigger`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`po-search`,1),pt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),ug()(),Ox(2,ht,5,3,`div`,0,Nx)),o&2&&(Hp(),cE(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),Hp(),kx(i.peopleFiltered))},dependencies:[Ef,hoe,dne],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-listbox-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Search With Listbox`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-listbox/sample-po-search-listbox.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-listbox/sample-po-search-listbox.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-search-listbox/sample-po-search-listbox.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-search-listbox`),ug(),Kc(27,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ft,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,je],encapsulation:2,changeDetection:1})}return a})();function Et(a,w){if(a&1&&(Ac(0,`div`,0)(1,`po-container`,2),Kc(2,`po-info`,3)(3,`po-info`,4)(4,`po-info`,5)(5,`po-info`,6),ug()()),a&2){let r=w.$implicit;Hp(2),cE(`p-value`,r.name),Hp(),cE(`p-value`,r.gender),Hp(),cE(`p-value`,r.planet),Hp(),cE(`p-value`,r.father)}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:`Personal`,value:[`name`,`gender`]},{label:`Planet`,value:[`planet`]},{label:`Family`,value:`father`}];ngOnInit(){this.items=[{name:`Anakin Skywalker`,gender:`male`,planet:`Tatooine`,father:`Darth Sidious`},{name:`Luke Skywalker`,gender:`male`,planet:`Tatooine`,father:`Anakin Skywalker`},{name:`Leia Organa`,gender:`female`,planet:`Alderaan`,father:`Anakin Skywalker`},{name:`Han Solo`,gender:`male`,planet:`Corellia`,father:`Ovan`}]}filtered(r){this.filteredItems=r}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-filter-select`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-search-type`,`trigger`,`p-show-listbox`,`true`,`p-disabled`,`false`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-select`],[1,`po-row`,`po-mt-2`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Gender`,1,`po-md-3`,3,`p-value`],[`p-label`,`Planet`,1,`po-md-3`,3,`p-value`],[`p-label`,`Father`,1,`po-md-3`,3,`p-value`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`po-search`,1),pt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),ug()(),Ox(2,Et,6,4,`div`,0,Nx)),o&2&&(Hp(),cE(`p-items`,i.items)(`p-filter-select`,i.filterSelect),Hp(),kx(i.filteredItems))},dependencies:[Ec,hoe,dne],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-filter-select-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Search With Filter Select + Listbox`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-search-filter-select`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,vt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Re],encapsulation:2,changeDetection:1})}return a})();var Ke=(()=>{class a{poModal;filterType=Pu.contains;filterKeysAction=[`rotina`,`codigo`,`modulo`,`versao`];keysLabel=[`rotina`,`codigo`];itemsAction=[{rotina:`Contas a Pagar`,codigo:`MATA103`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Contas a Pagar`)},{rotina:`Cotação de Fornecedores`,codigo:`MATA140`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Cotação de Fornecedores`)},{rotina:`Meus Funcionarios`,codigo:`XPTO987`,modulo:`RH`,versao:`1.2.3`,url:`documentation/po-widget`}];columns=[{property:`rotina`,label:`Rotina`},{property:`codigo`,label:`Código`},{property:`modulo`,label:`Módulo`},{property:`versao`,label:`Versão`}];footerAction(){this.poModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-execute`]],viewQuery:function(o,i){if(o&1&&Xc(ta,7),o&2){let p;fo(p=ho())&&(i.poModal=p.first)}},standalone:!1,decls:10,vars:9,consts:[[`modal`,``],[1,`po-row`],[`p-title`,`Pesquisar e executar`,`p-help`,`https://github.com/po-ui/po-angular/stargazers`,1,`po-lg-6`,`po-mt-2`,3,`p-height`],[`name`,`Po Search`,1,`po-mt-2`,`full`,3,`p-footer-action-listbox`,`p-search-type`,`p-items`,`p-filter-type`,`p-filter-keys`,`p-keys-label`],[`p-title`,`Rotinas`],[3,`p-columns`,`p-items`,`p-hide-columns-manager`]],template:function(o,i){o&1&&(Ac(0,`div`,1)(1,`po-widget`,2)(2,`div`,1)(3,`span`),vN(4,`Entre com o nome ou código da rotina`),ug()(),Ac(5,`div`,1)(6,`po-search`,3),pt$1(`p-footer-action-listbox`,function(){return i.footerAction()}),ug()()()(),Ac(7,`po-modal`,4,0),Kc(9,`po-table`,5),ug()),o&2&&(Hp(),cE(`p-height`,180),Hp(5),cE(`p-search-type`,`execute`)(`p-items`,i.itemsAction)(`p-filter-type`,i.filterType)(`p-filter-keys`,i.filterKeysAction)(`p-keys-label`,i.keysLabel),Hp(3),cE(`p-columns`,i.columns)(`p-items`,i.itemsAction)(`p-hide-columns-manager`,!0))},dependencies:[ta,x4,Ooe,dne],styles:[`.full[_ngcontent-%COMP%]{width:100%}`],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-execute-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Search Form Fields with Execute`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-execute/sample-po-search-execute.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-execute/sample-po-search-execute.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-search-execute/sample-po-search-execute.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.full {
  width: 100%;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-search-execute`),ug(),Kc(29,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ct,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ke],encapsulation:2,changeDetection:1})}return a})();var _t=[`nameInput`];var Mt=[`cpfInput`];var wt=[`addressInput`];var It=[`numberInput`];var Tt=[`emailInput`];var kt=[`websiteInput`];var Ft=[`reactiveFormData`];var Ue=(()=>{class a{fb=f(S9);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=Pu.endsWith;searchLiterals={search:`Buscar campos`};modalPrimaryAction={label:`Close`,action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:`Customer name`,index:0,focus:()=>this.nameInput.focus()},{label:`CPF`,index:1,focus:()=>this.cpfInput.focus()},{label:`Address`,index:2,focus:()=>this.addressInput.focus()},{label:`Number`,index:3,focus:()=>this.numberInput.focus()},{label:`Email`,index:4,focus:()=>this.emailInput.focus()},{label:`Website`,index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:[``,[hm.required,hm.minLength(5)]],cpf:[``,hm.required],address:[``,hm.required],number:[``,hm.required],email:[``,hm.required],website:[``,hm.required]})}updateSearchTerm(r){console.log(`updateSearchTerm`);let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log(`onNextOccurrenceClick`),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log(`onPreviousOccurrenceClick`),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-fields-locate`]],viewQuery:function(o,i){if(o&1&&Xc(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;fo(p=ho())&&(i.nameInput=p.first),fo(p=ho())&&(i.cpfInput=p.first),fo(p=ho())&&(i.addressInput=p.first),fo(p=ho())&&(i.numberInput=p.first),fo(p=ho())&&(i.emailInput=p.first),fo(p=ho())&&(i.websiteInput=p.first),fo(p=ho())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[[`nameInput`,``],[`cpfInput`,``],[`addressInput`,``],[`numberInput`,``],[`emailInput`,``],[`websiteInput`,``],[`reactiveFormData`,``],[1,`po-row`],[1,`po-ml-1`,`po-mr-1`],[`p-search-type`,`locate`,3,`p-change-model`,`p-locate-next`,`p-locate-previous`,`p-literals`,`p-locate-summary`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-9`],[`formControlName`,`cpf`,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-lg-6`,3,`p-value`],[`p-label`,`CPF`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Address`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Number`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Email`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Website`,1,`po-lg-6`,3,`p-value`]],template:function(o,i){o&1&&(Ac(0,`div`,7)(1,`div`,8)(2,`po-search`,9),pt$1(`p-change-model`,function(h){return i.updateSearchTerm(h)})(`p-locate-next`,function(){return i.onNextOccurrenceClick()})(`p-locate-previous`,function(){return i.onPreviousOccurrenceClick()}),ug()()(),Kc(3,`po-divider`),Ac(4,`form`,10)(5,`div`,7),Kc(6,`po-input`,11,0),p0(),Kc(8,`po-input`,12,1),p0(),ug(),Ac(10,`div`,7),Kc(11,`po-input`,13,2),p0(),Kc(13,`po-number`,14,3),p0(),ug(),Ac(15,`div`,7),Kc(16,`po-email`,15,4),p0(),Kc(18,`po-url`,16,5),p0(),ug(),Ac(20,`div`,7)(21,`po-button`,17),pt$1(`p-click`,function(){return i.saveForm()}),ug()()(),Ac(22,`po-modal`,18,6)(24,`div`,7),Kc(25,`po-info`,19)(26,`po-info`,20),ug(),Kc(27,`po-divider`),Ac(28,`div`,7),Kc(29,`po-info`,21)(30,`po-info`,22),ug(),Kc(31,`po-divider`),Ac(32,`div`,7),Kc(33,`po-info`,23)(34,`po-info`,24),ug()()),o&2&&(Hp(2),cE(`p-literals`,i.searchLiterals)(`p-locate-summary`,i.locateSummary),Hp(2),cE(`formGroup`,i.reactiveForm),Hp(2),m0(),Hp(2),m0(),Hp(3),m0(),Hp(2),m0(),Hp(3),m0(),Hp(2),m0(),Hp(3),cE(`p-disabled`,!i.reactiveForm.valid),Hp(),cE(`p-primary-action`,i.modalPrimaryAction),Hp(3),cE(`p-value`,i.reactiveForm.controls.name.value),Hp(),cE(`p-value`,i.reactiveForm.controls.cpf.value),Hp(3),cE(`p-value`,i.reactiveForm.controls.address.value),Hp(),cE(`p-value`,i.reactiveForm.controls.number.value),Hp(3),cE(`p-value`,i.reactiveForm.controls.email.value),Hp(),cE(`p-value`,i.reactiveForm.controls.website.value))},dependencies:[b9,D9,C9,KP,qP,ni,Ef,$3,D4,roe,T4,hoe,ta,dne],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a});var Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-fields-locate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Search Form Fields with Locate`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-search-fields-locate`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Lt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ue],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-search-doc`]],standalone:!1,decls:1426,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterSelect[]`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLocateSummary`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`searchMode`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoSearchModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-search.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoSearchComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente search, também conhecido como barra de pesquisa, é utilizado para ajudar os usuários a localizar um determinado conteúdo.`),ug(),Ac(15,`p`),vN(16,`Normalmente localizado no canto superior direito, junto com o ícone de lupa, uma vez que este ícone é amplamente reconhecido.`),ug(),Ac(17,`h4`),vN(18,`Boas práticas`),ug(),Ac(19,`p`),vN(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),ug(),Ac(21,`ul`)(22,`li`),vN(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),ug(),Ac(24,`li`),vN(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),ug(),Ac(26,`li`),vN(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),ug(),Ac(28,`li`),vN(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),ug(),Ac(30,`li`),vN(31,`Quando apropriado, destaque os termos da busca nos resultados.`),ug(),Ac(32,`li`),vN(33,`A entrada do campo de pesquisa deve caber em uma linha. Não use entradas de pesquisa de várias linhas.`),ug(),Ac(34,`li`),vN(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),ug(),Ac(36,`li`),vN(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),ug()(),Ac(38,`h4`),vN(39,`Acessibilidade tratada no componente`),ug(),Ac(40,`p`),vN(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),ug(),Ac(42,`ul`)(43,`li`),vN(44,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),ug(),Ac(45,`li`),vN(46,`Alteração entre os estados precisa ser indicada por mais de um elemento além da cor (1.4.1: Use of Color);`),ug()(),Ac(47,`h4`),vN(48,`Tokens customizáveis`),ug(),Ac(49,`p`),vN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(51,`blockquote`)(52,`p`),vN(53,`Para maiores informações, acesse o guia `),Ac(54,`a`,6),vN(55,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(56,`.`),ug()(),Ac(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),vN(61,`Propriedade`),ug(),Ac(62,`th`),vN(63,`Descrição`),ug(),Ac(64,`th`),vN(65,`Valor Padrão`),ug()()(),Ac(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),vN(70,`Default Values`),ug()(),Kc(71,`td`)(72,`td`),ug(),Ac(73,`tr`)(74,`td`)(75,`code`),vN(76,`--font-family`),ug()(),Ac(77,`td`),vN(78,`Família tipográfica do campo`),ug(),Ac(79,`td`)(80,`code`),vN(81,`var(--font-family-theme)`),ug()()(),Ac(82,`tr`)(83,`td`)(84,`code`),vN(85,`--font-size`),ug()(),Ac(86,`td`),vN(87,`Tamanho da fonte do campo`),ug(),Ac(88,`td`)(89,`code`),vN(90,`var(--font-size-default)`),ug()()(),Ac(91,`tr`)(92,`td`)(93,`code`),vN(94,`--text-color-placeholder`),ug()(),Ac(95,`td`),vN(96,`Cor do texto no placeholder`),ug(),Ac(97,`td`)(98,`code`),vN(99,`var(--color-neutral-light-30)`),ug()()(),Ac(100,`tr`)(101,`td`)(102,`code`),vN(103,`--color`),ug()(),Ac(104,`td`),vN(105,`Cor das bordas`),ug(),Ac(106,`td`)(107,`code`),vN(108,`var(--color-neutral-dark-70)`),ug()()(),Ac(109,`tr`)(110,`td`)(111,`code`),vN(112,`--border-radius`),ug()(),Ac(113,`td`),vN(114,`Raio das bordas`),ug(),Ac(115,`td`)(116,`code`),vN(117,`var(--border-radius-md)`),ug()()(),Ac(118,`tr`)(119,`td`)(120,`code`),vN(121,`--background`),ug()(),Ac(122,`td`),vN(123,`Cor de background`),ug(),Ac(124,`td`)(125,`code`),vN(126,`var(--color-neutral-light-05)`),ug()()(),Ac(127,`tr`)(128,`td`)(129,`code`),vN(130,`--text-color`),ug()(),Ac(131,`td`),vN(132,`Cor do texto editável`),ug(),Ac(133,`td`)(134,`code`),vN(135,`var(--color-neutral-dark-90)`),ug()()(),Ac(136,`tr`)(137,`td`)(138,`code`),vN(139,`--color-clear`),ug()(),Ac(140,`td`),vN(141,`Cor do ícone close`),ug(),Ac(142,`td`)(143,`code`),vN(144,`var(--color-action-default)`),ug()()(),Ac(145,`tr`)(146,`td`)(147,`code`),vN(148,`--color-controls`),ug()(),Ac(149,`td`),vN(150,`Cor dos ícones de controle do mode location`),ug(),Ac(151,`td`)(152,`code`),vN(153,`var(--color-action-default)`),ug()()(),Ac(154,`tr`)(155,`td`)(156,`code`),vN(157,`--transition-property`),ug()(),Ac(158,`td`),vN(159,`Atributo da transição`),ug(),Ac(160,`td`)(161,`code`),vN(162,`all`),ug()()(),Ac(163,`tr`)(164,`td`)(165,`code`),vN(166,`--transition-duration`),ug()(),Ac(167,`td`),vN(168,`Duração da transição`),ug(),Ac(169,`td`)(170,`code`),vN(171,`var(--duration-extra-fast)`),ug()()(),Ac(172,`tr`)(173,`td`)(174,`code`),vN(175,`--transition-timing`),ug()(),Ac(176,`td`),vN(177,`Duração da transição com o tipo de transição`),ug(),Ac(178,`td`)(179,`code`),vN(180,`var(--timing-standart)`),ug()()(),Ac(181,`tr`)(182,`td`)(183,`strong`),vN(184,`Icon`),ug()(),Kc(185,`td`)(186,`td`),ug(),Ac(187,`tr`)(188,`td`)(189,`code`),vN(190,`--color-icon-read`),ug()(),Ac(191,`td`),vN(192,`Cor do ícone de busca no modo action`),ug(),Ac(193,`td`)(194,`code`),vN(195,`var(--color-neutral-dark-70)`),ug()()(),Ac(196,`tr`)(197,`td`)(198,`code`),vN(199,`--color-icon`),ug()(),Ac(200,`td`),vN(201,`Cor do ícone de busca no modo trigger`),ug(),Ac(202,`td`)(203,`code`),vN(204,`var(--color-action-default)`),ug()()(),Ac(205,`tr`)(206,`td`)(207,`strong`),vN(208,`Hover`),ug()(),Kc(209,`td`)(210,`td`),ug(),Ac(211,`tr`)(212,`td`)(213,`code`),vN(214,`--color-hover`),ug()(),Ac(215,`td`),vN(216,`Cor das bordas no estado hover`),ug(),Ac(217,`td`)(218,`code`),vN(219,`var(--color-action-hover)`),ug()()(),Ac(220,`tr`)(221,`td`)(222,`code`),vN(223,`--background-hover`),ug()(),Ac(224,`td`),vN(225,`Cor de background no estado hover`),ug(),Ac(226,`td`)(227,`code`),vN(228,`var(--color-brand-01-lightest)`),ug()()(),Ac(229,`tr`)(230,`td`)(231,`strong`),vN(232,`Focused`),ug()(),Kc(233,`td`)(234,`td`),ug(),Ac(235,`tr`)(236,`td`)(237,`code`),vN(238,`--color-focused`),ug()(),Ac(239,`td`),vN(240,`Cor das bordas no estado de focus`),ug(),Ac(241,`td`)(242,`code`),vN(243,`var(--color-action-default)`),ug()()(),Ac(244,`tr`)(245,`td`)(246,`code`),vN(247,`--outline-color-focused`),ug()(),Ac(248,`td`),vN(249,`Cor do outline no estado de focus`),ug(),Ac(250,`td`)(251,`code`),vN(252,`var(--color-action-focus)`),ug()()(),Ac(253,`tr`)(254,`td`)(255,`strong`),vN(256,`Disabled`),ug()(),Kc(257,`td`)(258,`td`),ug(),Ac(259,`tr`)(260,`td`)(261,`code`),vN(262,`--color-disabled`),ug()(),Ac(263,`td`),vN(264,`Cor principal no estado disabled`),ug(),Ac(265,`td`)(266,`code`),vN(267,`var(--color-action-disabled)`),ug()()(),Ac(268,`tr`)(269,`td`)(270,`code`),vN(271,`--background-disabled`),ug()(),Ac(272,`td`),vN(273,`Cor de background no estado disabled`),ug(),Ac(274,`td`)(275,`code`),vN(276,`var(--color-neutral-light-20)`),ug()()()()()(),Ac(277,`div`,7)(278,`h4`,8),vN(279,`Seletor`),ug(),Ac(280,`pre`,9),vN(281,`<po-search
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
`),ug()(),Ac(282,`h4`,10),vN(283,`Propriedades`),ug(),Ac(284,`table`,11)(285,`tr`,12)(286,`th`,13),vN(287,`Nome`),ug(),Ac(288,`th`,13),vN(289,`Tipo`),ug(),Ac(290,`th`,13),vN(291,`Padrão`),ug(),Ac(292,`th`,13),vN(293,`Descrição`),ug()(),Ac(294,`tr`,14)(295,`td`,15)(296,`div`,16)(297,`span`,17),vN(298,` p-aria-label`),Kc(299,`br`),ug()()(),Ac(300,`td`,18)(301,`code`,19),vN(302,`string`),ug()(),Ac(303,`td`,20),vN(304,`-`),ug(),Ac(305,`td`,21)(306,`em`)(307,`strong`),vN(308,`(opcional)`),ug()(),Ac(309,`p`),vN(310,`Define um aria-label para o po-search.`),ug(),Ac(311,`blockquote`)(312,`p`),vN(313,`Devido o componente não possuir uma label assim como outros campos de texto, o `),Ac(314,`code`),vN(315,`aria-label`),ug(),vN(316,` \xE9 utilizado para
acessibilidade.`),ug()()()(),Ac(317,`tr`,14)(318,`td`,15)(319,`div`,22)(320,`span`,23),vN(321,` (p-blur)`),Kc(322,`br`),ug()()(),Ac(323,`td`,18)(324,`code`,24),vN(325,`EventEmitter`),ug()(),Ac(326,`td`,20),vN(327,`-`),ug(),Ac(328,`td`,21)(329,`em`)(330,`strong`),vN(331,`(opcional)`),ug()(),Ac(332,`p`),vN(333,`Evento disparado ao sair do campo.`),ug()()(),Ac(334,`tr`,14)(335,`td`,15)(336,`div`,22)(337,`span`,23),vN(338,` (p-change-model)`),Kc(339,`br`),ug()()(),Ac(340,`td`,18)(341,`code`,24),vN(342,`EventEmitter`),ug()(),Ac(343,`td`,20),vN(344,`-`),ug(),Ac(345,`td`,21)(346,`em`)(347,`strong`),vN(348,`(opcional)`),ug()(),Ac(349,`p`),vN(350,`Evento disparado ao alterar valor do model.`),ug()()(),Ac(351,`tr`,14)(352,`td`,15)(353,`div`,16)(354,`span`,17),vN(355,` p-disabled`),Kc(356,`br`),ug()()(),Ac(357,`td`,18)(358,`code`,25),vN(359,`boolean`),ug()(),Ac(360,`td`,20)(361,`p`)(362,`code`),vN(363,`false`),ug()()(),Ac(364,`td`,21)(365,`em`)(366,`strong`),vN(367,`(opcional)`),ug()(),Ac(368,`p`),vN(369,`Desabilita o po-search e não permite que o usuário interaja com o mesmo.`),ug()()(),Ac(370,`tr`,14)(371,`td`,15)(372,`div`,22)(373,`span`,23),vN(374,` (p-filter)`),Kc(375,`br`),ug()()(),Ac(376,`td`,18)(377,`code`,24),vN(378,`EventEmitter`),ug()(),Ac(379,`td`,20),vN(380,`-`),ug(),Ac(381,`td`,21)(382,`em`)(383,`strong`),vN(384,`(opcional)`),ug()(),Ac(385,`p`),vN(386,`Pode ser informada uma função que será disparada quando houver alterações nos filtros.`),ug(),Ac(387,`blockquote`)(388,`p`),vN(389,`Incompatível com a propriedade `),Ac(390,`code`),vN(391,`p-search-type`),ug(),vN(392,` do tipo `),Ac(393,`code`),vN(394,`locate`),ug(),vN(395,`.`),ug()()()(),Ac(396,`tr`,14)(397,`td`,15)(398,`div`,16)(399,`span`,17),vN(400,` p-filter-keys`),Kc(401,`br`),ug()()(),Ac(402,`td`,18)(403,`code`,26),vN(404,`Array<any>`),ug()(),Ac(405,`td`,20),vN(406,`-`),ug(),Ac(407,`td`,21)(408,`p`),vN(409,`Define os nomes das propriedades do objeto que serão utilizados para busca em `),Ac(410,`code`),vN(411,`p-items`),ug(),vN(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),ug(),Ac(413,`pre`)(414,`code`,27),vN(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),ug()(),Ac(416,`blockquote`)(417,`p`),vN(418,`Esta propriedade é ignorada quando utilizado com `),Ac(419,`code`),vN(420,`p-filter-select`),ug(),vN(421,` e incompat\xEDvel com a propriedade
`),Ac(422,`code`),vN(423,`p-search-type`),ug(),vN(424,` do tipo `),Ac(425,`code`),vN(426,`locate`),ug(),vN(427,`.`),ug()()()(),Ac(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),vN(432,` p-filter-select`),Kc(433,`br`),ug()()(),Ac(434,`td`,18)(435,`code`,28),vN(436,`PoSearchFilterSelect[]`),ug()(),Ac(437,`td`,20),vN(438,`-`),ug(),Ac(439,`td`,21)(440,`p`),vN(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Ac(442,`code`),vN(443,`p-items`),ug(),vN(444,`. Automaticamente adiciona a opção `),Ac(445,`strong`),vN(446,`Todos`),ug(),vN(447,`, com um mapeamento de todas as opções passadas.`),ug(),Ac(448,`p`),vN(449,`Exemplo de uso:`),ug(),Ac(450,`pre`)(451,`code`,27),vN(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),ug()(),Ac(453,`blockquote`)(454,`p`),vN(455,`Ao ser habilitada, a propriedade `),Ac(456,`code`),vN(457,`p-filter-keys`),ug(),vN(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Ac(459,`code`),vN(460,`p-search-type`),ug(),vN(461,` do tipo `),Ac(462,`code`),vN(463,`locate`),ug(),vN(464,`.`),ug()()()(),Ac(465,`tr`,14)(466,`td`,15)(467,`div`,16)(468,`span`,17),vN(469,` p-filter-type`),Kc(470,`br`),ug()()(),Ac(471,`td`,18)(472,`code`,29),vN(473,`PoSearchFilterMode`),ug()(),Ac(474,`td`,20)(475,`p`)(476,`code`),vN(477,`startsWith`),ug()()(),Ac(478,`td`,21)(479,`em`)(480,`strong`),vN(481,`(opcional)`),ug()(),Ac(482,`p`),vN(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Ac(484,`strong`),vN(485,`PoSearchFilterMode`),ug(),vN(486,`.`),ug(),Ac(487,`blockquote`)(488,`p`),vN(489,`Incompatível com a propriedade `),Ac(490,`code`),vN(491,`p-search-type`),ug(),vN(492,` do tipo `),Ac(493,`code`),vN(494,`locate`),ug(),vN(495,`.`),ug()()()(),Ac(496,`tr`,14)(497,`td`,15)(498,`div`,22)(499,`span`,23),vN(500,` (p-filtered-items-change)`),Kc(501,`br`),ug()()(),Ac(502,`td`,18)(503,`code`,24),vN(504,`EventEmitter`),ug()(),Ac(505,`td`,20),vN(506,`-`),ug(),Ac(507,`td`,21)(508,`em`)(509,`strong`),vN(510,`(opcional)`),ug()(),Ac(511,`p`),vN(512,`Pode ser informada uma função que será disparada quando houver alterações no input.`),ug(),Ac(513,`blockquote`)(514,`p`),vN(515,`Incompatível com a propriedade `),Ac(516,`code`),vN(517,`p-search-type`),ug(),vN(518,` do tipo `),Ac(519,`code`),vN(520,`locate`),ug(),vN(521,`.`),ug()()()(),Ac(522,`tr`,14)(523,`td`,15)(524,`div`,22)(525,`span`,23),vN(526,` (p-focus)`),Kc(527,`br`),ug()()(),Ac(528,`td`,18)(529,`code`,24),vN(530,`EventEmitter`),ug()(),Ac(531,`td`,20),vN(532,`-`),ug(),Ac(533,`td`,21)(534,`em`)(535,`strong`),vN(536,`(opcional)`),ug()(),Ac(537,`p`),vN(538,`Evento emitido quando o campo de entrada (input) recebe foco.`),ug()()(),Ac(539,`tr`,14)(540,`td`,15)(541,`div`,22)(542,`span`,23),vN(543,` (p-footer-action-listbox)`),Kc(544,`br`),ug()()(),Ac(545,`td`,18)(546,`code`,24),vN(547,`EventEmitter`),ug()(),Ac(548,`td`,20),vN(549,`-`),ug(),Ac(550,`td`,21)(551,`em`)(552,`strong`),vN(553,`(opcional)`),ug()(),Ac(554,`p`),vN(555,`Evento disparado ao clicar no botão de ação exibido no rodapé do `),Ac(556,`code`),vN(557,`listbox`),ug(),vN(558,`.
O texto exibido pode ser configurado por meio do literal `),Ac(559,`code`),vN(560,`footerActionListbox`),ug(),vN(561,`.`),ug()()(),Ac(562,`tr`,14)(563,`td`,15)(564,`div`,16)(565,`span`,17),vN(566,` p-icon`),Kc(567,`br`),ug()()(),Ac(568,`td`,18)(569,`code`,19),vN(570,`string `),ug(),Ac(571,`code`,30),vN(572,` TemplateRef<void>`),ug()(),Ac(573,`td`,20),vN(574,`-`),ug(),Ac(575,`td`,21)(576,`em`)(577,`strong`),vN(578,`(opcional)`),ug()(),Ac(579,`p`),vN(580,`Permite customizar o ícone de busca que acompanha o campo.`),ug(),Ac(581,`p`),vN(582,`É possível usar qualquer um dos ícones da `),Ac(583,`a`,31),vN(584,`Biblioteca de ícones PO UI`),ug(),vN(585,`, conforme exemplo:`),ug(),Ac(586,`pre`)(587,`code`),vN(588,`<po-search p-icon="an an-user"></po-search>
`),ug()(),Ac(589,`p`),vN(590,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(591,`em`),vN(592,`Font Awesome`),ug(),vN(593,`, desde que a biblioteca
esteja carregada no projeto:`),ug(),Ac(594,`pre`)(595,`code`),vN(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),ug()(),Ac(597,`p`),vN(598,`Outra opção seria a customização do ícone através do `),Ac(599,`code`),vN(600,`TemplateRef`),ug(),vN(601,`, conforme exemplo abaixo:`),ug(),Ac(602,`pre`)(603,`code`),vN(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),ug()()()(),Ac(605,`tr`,14)(606,`td`,15)(607,`div`,16)(608,`span`,17),vN(609,` p-items`),Kc(610,`br`),ug()()(),Ac(611,`td`,18)(612,`code`,26),vN(613,`Array<any>`),ug()(),Ac(614,`td`,20),vN(615,`-`),ug(),Ac(616,`td`,21)(617,`em`)(618,`strong`),vN(619,`(opcional)`),ug()(),Ac(620,`p`),vN(621,`Lista de itens que serão utilizados para pesquisa.`),ug(),Ac(622,`blockquote`)(623,`p`),vN(624,`Incompatível com a propriedade `),Ac(625,`code`),vN(626,`p-search-type`),ug(),vN(627,` do tipo `),Ac(628,`code`),vN(629,`locate`),ug(),vN(630,`.`),ug()()()(),Ac(631,`tr`,14)(632,`td`,15)(633,`div`,22)(634,`span`,23),vN(635,` (p-keydown)`),Kc(636,`br`),ug()()(),Ac(637,`td`,18)(638,`code`,24),vN(639,`EventEmitter`),ug()(),Ac(640,`td`,20),vN(641,`-`),ug(),Ac(642,`td`,21)(643,`em`)(644,`strong`),vN(645,`(opcional)`),ug()(),Ac(646,`p`),vN(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(648,`code`),vN(649,`KeyboardEvent`),ug(),vN(650,` com informações sobre a tecla.`),ug()()(),Ac(651,`tr`,14)(652,`td`,15)(653,`div`,16)(654,`span`,17),vN(655,` p-keys-label`),Kc(656,`br`),ug()()(),Ac(657,`td`,18)(658,`code`,32),vN(659,`Array<string>`),ug()(),Ac(660,`td`,20),vN(661,`-`),ug(),Ac(662,`td`,21)(663,`em`)(664,`strong`),vN(665,`(opcional)`),ug()(),Ac(666,`p`),vN(667,`Define os nomes das propriedades do objeto que serão exibidos como rótulos (labels) no `),Ac(668,`code`),vN(669,`listbox`),ug(),vN(670,` quando a propriedade
`),Ac(671,`code`),vN(672,`p-show-listbox`),ug(),vN(673,` estiver habilitada.`),ug(),Ac(674,`p`),vN(675,`Deve ser informado um array de strings contendo até `),Ac(676,`strong`),vN(677,`3 propriedades`),ug(),vN(678,`.`),ug(),Ac(679,`p`),vN(680,`Exemplo de uso:`),ug(),Ac(681,`pre`)(682,`code`,33),vN(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),ug()()()(),Ac(684,`tr`,14)(685,`td`,15)(686,`div`,22)(687,`span`,23),vN(688,` (p-listbox-onclick)`),Kc(689,`br`),ug()()(),Ac(690,`td`,18)(691,`code`,24),vN(692,`EventEmitter`),ug()(),Ac(693,`td`,20),vN(694,`-`),ug(),Ac(695,`td`,21)(696,`em`)(697,`strong`),vN(698,`(opcional)`),ug()(),Ac(699,`p`),vN(700,`Pode ser informada uma função que será disparada quando houver click no listbox.`),ug(),Ac(701,`blockquote`)(702,`p`),vN(703,`Incompatível com a propriedade `),Ac(704,`code`),vN(705,`p-search-type`),ug(),vN(706,` do tipo `),Ac(707,`code`),vN(708,`locate`),ug(),vN(709,`.`),ug()()()(),Ac(710,`tr`,14)(711,`td`,15)(712,`div`,16)(713,`span`,17),vN(714,` p-literals`),Kc(715,`br`),ug()()(),Ac(716,`td`,18)(717,`code`,34),vN(718,`PoSearchLiterals`),ug()(),Ac(719,`td`,20),vN(720,`-`),ug(),Ac(721,`td`,21)(722,`em`)(723,`strong`),vN(724,`(opcional)`),ug()(),Ac(725,`p`),vN(726,`Objeto com as literais usadas no `),Ac(727,`code`),vN(728,`po-search`),ug(),vN(729,`, permitindo personalizar os textos exibidos no componente.`),ug(),Ac(730,`p`),vN(731,`Para utilizar basta passar a literal que deseja customizar:`),ug(),Ac(732,`pre`)(733,`code`),vN(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),ug()(),Ac(735,`p`),vN(736,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),ug(),Ac(737,`pre`)(738,`code`),vN(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),ug()(),Ac(740,`blockquote`)(741,`p`),vN(742,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ac(743,`a`,35)(744,`code`),vN(745,`PoI18nService`),ug()(),vN(746,` ou
do browser.`),ug()()()(),Ac(747,`tr`,14)(748,`td`,15)(749,`div`,16)(750,`span`,17),vN(751,` p-loading`),Kc(752,`br`),ug()()(),Ac(753,`td`,18)(754,`code`,25),vN(755,`boolean`),ug()(),Ac(756,`td`,20)(757,`p`)(758,`code`),vN(759,`false`),ug()()(),Ac(760,`td`,21)(761,`em`)(762,`strong`),vN(763,`(opcional)`),ug()(),Ac(764,`p`),vN(765,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug(),Ac(766,`blockquote`)(767,`p`),vN(768,`Incompatível com a propriedade `),Ac(769,`code`),vN(770,`p-search-type`),ug(),vN(771,` do tipo `),Ac(772,`code`),vN(773,`locate`),ug(),vN(774,`.`),ug()()()(),Ac(775,`tr`,14)(776,`td`,15)(777,`div`,22)(778,`span`,23),vN(779,` (p-locate-next)`),Kc(780,`br`),ug()()(),Ac(781,`td`,18)(782,`code`,24),vN(783,`EventEmitter`),ug()(),Ac(784,`td`,20),vN(785,`-`),ug(),Ac(786,`td`,21)(787,`em`)(788,`strong`),vN(789,`(opcional)`),ug()(),Ac(790,`p`),vN(791,`Evento disparado ao clicar no controle "Próximo resultado".`),ug(),Ac(792,`blockquote`)(793,`p`),vN(794,`Compatível com a propriedade `),Ac(795,`code`),vN(796,`p-search-type`),ug(),vN(797,` do tipo `),Ac(798,`code`),vN(799,`locate`),ug(),vN(800,`.`),ug()()()(),Ac(801,`tr`,14)(802,`td`,15)(803,`div`,22)(804,`span`,23),vN(805,` (p-locate-previous)`),Kc(806,`br`),ug()()(),Ac(807,`td`,18)(808,`code`,24),vN(809,`EventEmitter`),ug()(),Ac(810,`td`,20),vN(811,`-`),ug(),Ac(812,`td`,21)(813,`em`)(814,`strong`),vN(815,`(opcional)`),ug()(),Ac(816,`p`),vN(817,`Evento disparado ao clicar no controle "Resultado anterior".`),ug(),Ac(818,`blockquote`)(819,`p`),vN(820,`Compatível com a propriedade `),Ac(821,`code`),vN(822,`p-search-type`),ug(),vN(823,` do tipo `),Ac(824,`code`),vN(825,`locate`),ug(),vN(826,`.`),ug()()()(),Ac(827,`tr`,14)(828,`td`,15)(829,`div`,16)(830,`span`,17),vN(831,` p-locate-summary`),Kc(832,`br`),ug()()(),Ac(833,`td`,18)(834,`code`,36),vN(835,`PoSearchLocateSummary`),ug()(),Ac(836,`td`,20),vN(837,`-`),ug(),Ac(838,`td`,21)(839,`em`)(840,`strong`),vN(841,`(opcional)`),ug()(),Ac(842,`p`),vN(843,`Define os valores do contador exibido ao usar a propriedade `),Ac(844,`code`),vN(845,`p-search-type`),ug(),vN(846,` do tipo `),Ac(847,`code`),vN(848,`locate`),ug(),vN(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),ug(),Ac(850,`pre`)(851,`code`,33),vN(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),ug()(),Ac(853,`blockquote`)(854,`p`),vN(855,`Compatível com a propriedade `),Ac(856,`code`),vN(857,`p-search-type`),ug(),vN(858,` do tipo `),Ac(859,`code`),vN(860,`locate`),ug(),vN(861,`.`),ug()()()(),Ac(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),vN(866,` name`),Kc(867,`br`),ug()()(),Ac(868,`td`,18)(869,`code`,19),vN(870,`string`),ug()(),Ac(871,`td`,20),vN(872,`-`),ug(),Ac(873,`td`,21)(874,`em`)(875,`strong`),vN(876,`(opcional)`),ug()(),Ac(877,`p`),vN(878,`Nome e identificador do campo.`),ug()()(),Ac(879,`tr`,14)(880,`td`,15)(881,`div`,16)(882,`span`,17),vN(883,` p-no-autocomplete`),Kc(884,`br`),ug()()(),Ac(885,`td`,18)(886,`code`,25),vN(887,`boolean`),ug()(),Ac(888,`td`,20)(889,`p`)(890,`code`),vN(891,`false`),ug()()(),Ac(892,`td`,21)(893,`em`)(894,`strong`),vN(895,`(opcional)`),ug()(),Ac(896,`p`),vN(897,`Define a propriedade nativa `),Ac(898,`code`),vN(899,`autocomplete`),ug(),vN(900,` do campo como `),Ac(901,`code`),vN(902,`off`),ug(),vN(903,`.`),ug()()(),Ac(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),vN(908,` p-show-listbox`),Kc(909,`br`),ug()()(),Ac(910,`td`,18)(911,`code`,25),vN(912,`boolean`),ug()(),Ac(913,`td`,20)(914,`p`)(915,`code`),vN(916,`false`),ug()()(),Ac(917,`td`,21)(918,`em`)(919,`strong`),vN(920,`(opcional)`),ug()(),Ac(921,`p`),vN(922,`Exibe uma lista (auto-complete) com as opções definidas em `),Ac(923,`code`),vN(924,`p-filter-keys`),ug(),vN(925,` ou `),Ac(926,`code`),vN(927,`p-filter-select`),ug(),vN(928,` enquanto realiza
uma busca, respeitando o `),Ac(929,`code`),vN(930,`p-filter-type`),ug(),vN(931,` como modo de pesquisa.`),ug(),Ac(932,`blockquote`)(933,`p`),vN(934,`Incompatível com a propriedade `),Ac(935,`code`),vN(936,`p-search-type`),ug(),vN(937,` do tipo `),Ac(938,`code`),vN(939,`locate`),ug(),vN(940,`.`),ug()()()(),Ac(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),vN(945,` p-size`),Kc(946,`br`),ug()()(),Ac(947,`td`,18)(948,`code`,19),vN(949,`string`),ug()(),Ac(950,`td`,20)(951,`p`)(952,`code`),vN(953,`medium`),ug()()(),Ac(954,`td`,21)(955,`em`)(956,`strong`),vN(957,`(opcional)`),ug()(),Ac(958,`p`),vN(959,`Define o tamanho do componente:`),ug(),Ac(960,`ul`)(961,`li`)(962,`code`),vN(963,`small`),ug(),vN(964,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(965,`li`)(966,`code`),vN(967,`medium`),ug(),vN(968,`: altura do input como 44px.`),ug()(),Ac(969,`blockquote`)(970,`p`),vN(971,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(972,`code`),vN(973,`medium`),ug(),vN(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(975,`a`,37),vN(976,`po-theme`),ug(),vN(977,`.`),ug()()()(),Ac(978,`tr`,14)(979,`td`,15)(980,`div`,16)(981,`span`,17),vN(982,` p-search-type`),Kc(983,`br`),ug()()(),Ac(984,`td`,18)(985,`code`,38),vN(986,`searchMode`),ug()(),Ac(987,`td`,20)(988,`p`)(989,`code`),vN(990,`action`),ug()()(),Ac(991,`td`,21)(992,`em`)(993,`strong`),vN(994,`(opcional)`),ug()(),Ac(995,`p`),vN(996,`Determina a forma de realizar a pesquisa no componente. Valores aceitos:`),ug(),Ac(997,`ul`)(998,`li`)(999,`code`),vN(1e3,`action`),ug(),vN(1001,`: Realiza a busca a cada caractere digitado.`),ug(),Ac(1002,`li`)(1003,`code`),vN(1004,`trigger`),ug(),vN(1005,`: Realiza a busca ao pressionar `),Ac(1006,`code`),vN(1007,`enter`),ug(),vN(1008,` ou clicar no ícone de busca.`),ug(),Ac(1009,`li`)(1010,`code`),vN(1011,`locate`),ug(),vN(1012,`: Modo manual. Exibe botões e contador, mas não executa buscas — controle é do desenvolvedor.`),ug(),Ac(1013,`li`)(1014,`code`),vN(1015,`execute`),ug(),vN(1016,`: Executa uma ação ou realiza um redirecionamento ao selecionar um item no `),Ac(1017,`code`),vN(1018,`listbox`),ug(),vN(1019,`. Para este tipo, é necessário informar as propriedades `),Ac(1020,`code`),vN(1021,`action`),ug(),vN(1022,` ou `),Ac(1023,`code`),vN(1024,`url`),ug(),vN(1025,` nos itens definidos em `),Ac(1026,`code`),vN(1027,`p-items`),ug(),vN(1028,`.`),ug()()()()(),Ac(1029,`h3`),vN(1030,`Interfaces`),ug(),Ac(1031,`h4`,39)(1032,`code`,5),vN(1033,`PoSearchFilterSelect`),ug()(),Ac(1034,`div`,2)(1035,`p`),vN(1036,`Interface que define as opções que serão exibidas no dropdown do `),Ac(1037,`code`),vN(1038,`po-search`),ug(),vN(1039,`, ao usar a propriedade `),Ac(1040,`code`),vN(1041,`p-filter-select`),ug(),vN(1042,`.`),ug()(),Ac(1043,`h4`,10),vN(1044,`Propriedades`),ug(),Ac(1045,`table`,11)(1046,`tr`,12)(1047,`th`,13),vN(1048,`Nome`),ug(),Ac(1049,`th`,13),vN(1050,`Tipo`),ug(),Ac(1051,`th`,13),vN(1052,`Descrição`),ug()(),Ac(1053,`tr`,14)(1054,`td`,15)(1055,`div`,16)(1056,`span`,17),vN(1057,` label`),Kc(1058,`br`),ug()()(),Ac(1059,`td`,18)(1060,`code`,19),vN(1061,`string`),ug()(),Ac(1062,`td`,21)(1063,`p`),vN(1064,`Descrição exibida nas opções da lista.`),ug()()(),Ac(1065,`tr`,14)(1066,`td`,15)(1067,`div`,16)(1068,`span`,17),vN(1069,` value`),Kc(1070,`br`),ug()()(),Ac(1071,`td`,18)(1072,`code`,32),vN(1073,`Array<string> `),ug(),Ac(1074,`code`,19),vN(1075,` string`),ug()(),Ac(1076,`td`,21)(1077,`p`),vN(1078,`Valores que serão atribuídos ao `),Ac(1079,`code`),vN(1080,`p-filter-keys`),ug()()()()(),Ac(1081,`h4`,39)(1082,`code`,5),vN(1083,`PoSearchLocateSummary`),ug()(),Ac(1084,`div`,2)(1085,`p`),vN(1086,`Interface que define o resumo de localização do filtro `),Ac(1087,`code`),vN(1088,`p-filter-locate`),ug(),vN(1089,`.`),ug()(),Ac(1090,`h4`,10),vN(1091,`Propriedades`),ug(),Ac(1092,`table`,11)(1093,`tr`,12)(1094,`th`,13),vN(1095,`Nome`),ug(),Ac(1096,`th`,13),vN(1097,`Tipo`),ug(),Ac(1098,`th`,13),vN(1099,`Descrição`),ug()(),Ac(1100,`tr`,14)(1101,`td`,15)(1102,`div`,16)(1103,`span`,17),vN(1104,` currentIndex`),Kc(1105,`br`),ug()()(),Ac(1106,`td`,18)(1107,`code`,40),vN(1108,`number`),ug()(),Ac(1109,`td`,21)(1110,`p`),vN(1111,`Índice atual da ocorrência localizada.`),ug()()(),Ac(1112,`tr`,14)(1113,`td`,15)(1114,`div`,16)(1115,`span`,17),vN(1116,` total`),Kc(1117,`br`),ug()()(),Ac(1118,`td`,18)(1119,`code`,40),vN(1120,`number`),ug()(),Ac(1121,`td`,21)(1122,`p`),vN(1123,`Total de ocorrências encontradas.`),ug()()()(),Ac(1124,`h4`,39)(1125,`code`,5),vN(1126,`PoSearchOption`),ug()(),Ac(1127,`div`,2)(1128,`p`),vN(1129,`Interface que define as opções que serão exibidas na lista ao procurar do `),Ac(1130,`code`),vN(1131,`po-search`),ug(),vN(1132,`.`),ug()(),Ac(1133,`h4`,10),vN(1134,`Propriedades`),ug(),Ac(1135,`table`,11)(1136,`tr`,12)(1137,`th`,13),vN(1138,`Nome`),ug(),Ac(1139,`th`,13),vN(1140,`Tipo`),ug(),Ac(1141,`th`,13),vN(1142,`Descrição`),ug()(),Ac(1143,`tr`,14)(1144,`td`,15)(1145,`div`,16)(1146,`span`,17),vN(1147,` label`),Kc(1148,`br`),ug()()(),Ac(1149,`td`,18)(1150,`code`,19),vN(1151,`string`),ug()(),Ac(1152,`td`,21)(1153,`em`)(1154,`strong`),vN(1155,`(opcional)`),ug()(),Ac(1156,`p`),vN(1157,`Descrição exibida nas opções da lista.`),ug(),Ac(1158,`blockquote`)(1159,`p`),vN(1160,`Caso não seja definida será assumido o valor definido na propriedade `),Ac(1161,`code`),vN(1162,`value`),ug(),vN(1163,`.`),ug()()()(),Ac(1164,`tr`,14)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),vN(1168,` value`),Kc(1169,`br`),ug()()(),Ac(1170,`td`,18)(1171,`code`,19),vN(1172,`string `),ug(),Ac(1173,`code`,40),vN(1174,` number`),ug()(),Ac(1175,`td`,21)(1176,`p`),vN(1177,`Valor do objeto que será atribuído ao `),Ac(1178,`em`),vN(1179,`model`),ug(),vN(1180,`.`),ug()()()(),Ac(1181,`h4`,39)(1182,`code`,5),vN(1183,`PoSearchLiterals`),ug()(),Ac(1184,`div`,2)(1185,`p`),vN(1186,`Interface para definição das literais usadas no `),Ac(1187,`code`),vN(1188,`po-search`),ug(),vN(1189,`.`),ug()(),Ac(1190,`h4`,10),vN(1191,`Propriedades`),ug(),Ac(1192,`table`,11)(1193,`tr`,12)(1194,`th`,13),vN(1195,`Nome`),ug(),Ac(1196,`th`,13),vN(1197,`Tipo`),ug(),Ac(1198,`th`,13),vN(1199,`Descrição`),ug()(),Ac(1200,`tr`,14)(1201,`td`,15)(1202,`div`,16)(1203,`span`,17),vN(1204,` all`),Kc(1205,`br`),ug()()(),Ac(1206,`td`,18)(1207,`code`,19),vN(1208,`string`),ug()(),Ac(1209,`td`,21)(1210,`em`)(1211,`strong`),vN(1212,`(opcional)`),ug()(),Ac(1213,`p`),vN(1214,`Texto exibido no dropdown de tipo de filtro, representando todos os tipos disponíveis.`),ug(),Ac(1215,`blockquote`)(1216,`p`),vN(1217,`Exibido apenas quando a propriedade `),Ac(1218,`code`),vN(1219,`p-filter-select`),ug(),vN(1220,` estiver habilitada.`),ug()()()(),Ac(1221,`tr`,14)(1222,`td`,15)(1223,`div`,16)(1224,`span`,17),vN(1225,` clean`),Kc(1226,`br`),ug()()(),Ac(1227,`td`,18)(1228,`code`,19),vN(1229,`string`),ug()(),Ac(1230,`td`,21)(1231,`em`)(1232,`strong`),vN(1233,`(opcional)`),ug()(),Ac(1234,`p`),vN(1235,`Texto alternativo (aria-label) para o botão de limpar o campo de busca, usado por leitores de tela.`),ug()()(),Ac(1236,`tr`,14)(1237,`td`,15)(1238,`div`,16)(1239,`span`,17),vN(1240,` footerActionListbox`),Kc(1241,`br`),ug()()(),Ac(1242,`td`,18)(1243,`code`,19),vN(1244,`string`),ug()(),Ac(1245,`td`,21)(1246,`em`)(1247,`strong`),vN(1248,`(opcional)`),ug()(),Ac(1249,`p`),vN(1250,`Texto exibido na ação do rodapé da lista de resultados.`),ug()()(),Ac(1251,`tr`,14)(1252,`td`,15)(1253,`div`,16)(1254,`span`,17),vN(1255,` next`),Kc(1256,`br`),ug()()(),Ac(1257,`td`,18)(1258,`code`,19),vN(1259,`string`),ug()(),Ac(1260,`td`,21)(1261,`em`)(1262,`strong`),vN(1263,`(opcional)`),ug()(),Ac(1264,`p`),vN(1265,`Texto alternativo (aria-label) para navegação até o próximo resultado da busca.`),ug(),Ac(1266,`blockquote`)(1267,`p`),vN(1268,`Exibido apenas quando a propriedade `),Ac(1269,`code`),vN(1270,`p-filter-locate`),ug(),vN(1271,` estiver habilitada.`),ug()()()(),Ac(1272,`tr`,14)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),vN(1276,` of`),Kc(1277,`br`),ug()()(),Ac(1278,`td`,18)(1279,`code`,19),vN(1280,`string`),ug()(),Ac(1281,`td`,21)(1282,`em`)(1283,`strong`),vN(1284,`(opcional)`),ug()(),Ac(1285,`p`),vN(1286,`Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").`),ug(),Ac(1287,`blockquote`)(1288,`p`),vN(1289,`Exibido apenas quando a propriedade `),Ac(1290,`code`),vN(1291,`p-filter-locate`),ug(),vN(1292,` estiver habilitada.`),ug()()()(),Ac(1293,`tr`,14)(1294,`td`,15)(1295,`div`,16)(1296,`span`,17),vN(1297,` placeholderListbox`),Kc(1298,`br`),ug()()(),Ac(1299,`td`,18)(1300,`code`,19),vN(1301,`string`),ug()(),Ac(1302,`td`,21)(1303,`em`)(1304,`strong`),vN(1305,`(opcional)`),ug()(),Ac(1306,`p`),vN(1307,`Texto exibido como `),Ac(1308,`em`),vN(1309,`placeholder`),ug(),vN(1310,` na lista de resultados.`),ug()()(),Ac(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),vN(1315,` previous`),Kc(1316,`br`),ug()()(),Ac(1317,`td`,18)(1318,`code`,19),vN(1319,`string`),ug()(),Ac(1320,`td`,21)(1321,`em`)(1322,`strong`),vN(1323,`(opcional)`),ug()(),Ac(1324,`p`),vN(1325,`Texto alternativo (aria-label) para navegação até o resultado anterior da busca.`),ug(),Ac(1326,`blockquote`)(1327,`p`),vN(1328,`Exibido apenas quando a propriedade `),Ac(1329,`code`),vN(1330,`p-filter-locate`),ug(),vN(1331,` estiver habilitada.`),ug()()()(),Ac(1332,`tr`,14)(1333,`td`,15)(1334,`div`,16)(1335,`span`,17),vN(1336,` result`),Kc(1337,`br`),ug()()(),Ac(1338,`td`,18)(1339,`code`,19),vN(1340,`string`),ug()(),Ac(1341,`td`,21)(1342,`em`)(1343,`strong`),vN(1344,`(opcional)`),ug()(),Ac(1345,`p`),vN(1346,`Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.`),ug(),Ac(1347,`blockquote`)(1348,`p`),vN(1349,`Exibido apenas quando a propriedade `),Ac(1350,`code`),vN(1351,`p-filter-locate`),ug(),vN(1352,` estiver habilitada.`),ug()()()(),Ac(1353,`tr`,14)(1354,`td`,15)(1355,`div`,16)(1356,`span`,17),vN(1357,` search`),Kc(1358,`br`),ug()()(),Ac(1359,`td`,18)(1360,`code`,19),vN(1361,`string`),ug()(),Ac(1362,`td`,21)(1363,`em`)(1364,`strong`),vN(1365,`(opcional)`),ug()(),Ac(1366,`p`),vN(1367,`Texto exibido como `),Ac(1368,`em`),vN(1369,`placeholder`),ug(),vN(1370,` no campo de busca.`),ug()()()(),Ac(1371,`h3`),vN(1372,`Enums`),ug(),Ac(1373,`h4`,4)(1374,`code`,5),vN(1375,`PoSearchFilterMode`),ug()(),Ac(1376,`div`,2)(1377,`p`),vN(1378,`Define o tipo de busca usado no `),Ac(1379,`code`),vN(1380,`po-search`),ug(),vN(1381,`.`),ug()(),Ac(1382,`h4`,10),vN(1383,`Propriedades`),ug(),Ac(1384,`table`,11)(1385,`tr`,12)(1386,`th`,13),vN(1387,`Nome`),ug(),Ac(1388,`th`,13),vN(1389,`Descrição`),ug()(),Ac(1390,`tr`,14)(1391,`td`,15)(1392,`div`,16)(1393,`span`,17),vN(1394,` startsWith`),Kc(1395,`br`),ug()()(),Ac(1396,`td`,21)(1397,`p`),vN(1398,`Verifica se o texto `),Ac(1399,`em`),vN(1400,`inicia`),ug(),vN(1401,` com o valor pesquisado.`),ug()()(),Ac(1402,`tr`,14)(1403,`td`,15)(1404,`div`,16)(1405,`span`,17),vN(1406,` contains`),Kc(1407,`br`),ug()()(),Ac(1408,`td`,21)(1409,`p`),vN(1410,`Verifica se o texto `),Ac(1411,`em`),vN(1412,`contém`),ug(),vN(1413,` o valor pesquisado.`),ug()()(),Ac(1414,`tr`,14)(1415,`td`,15)(1416,`div`,16)(1417,`span`,17),vN(1418,` endsWith`),Kc(1419,`br`),ug()()(),Ac(1420,`td`,21)(1421,`p`),vN(1422,`Verifica se o texto `),Ac(1423,`em`),vN(1424,`finaliza`),ug(),vN(1425,` com o valor pesquisado.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ot=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Search`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-search-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-search-basic-view`)(6,`sample-po-search-labs-view`)(7,`sample-po-search-find-people-view`)(8,`sample-po-search-listbox-view`)(9,`sample-po-search-filter-select-view`)(10,`sample-po-search-execute-view`)(11,`sample-po-search-fields-locate-view`),ug()()()),o&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2,changeDetection:1})}return a})()}];var Ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Ot),kL]})}return a})();var Jn=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Ye]})}return a})();export{Jn as DocPoSearchModule};