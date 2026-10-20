import{$r as Zn,Br as Sx,Ca as zw,Ei as jc,Et as Y4,Fi as mx,Gn as Ae,H as Iu,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,K as K3,Ki as px,Kn as Ag,Kt as cee,Lr as SF,O as E5,P as Gze,Pi as mt$1,Pr as R,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Sr as Mm,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,bt as Uoe,cr as FE,dt as Sae,ea as uO,et as Noe,fa as we,ga as xx,i as _a,ii as _x,ir as EF,ji as mO,k as Ec,ki as kF,la as vx,mn as ni,ni as _o,pa as wg,r as Ta,rr as Dx,rt as Ote,sa as vo,ta as ue,tn as gne,ua as wK,un as m5,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-basic`]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&nu(0,`po-search`)},dependencies:[gne],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Search Basic`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-basic/sample-po-search-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-search></po-search>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-basic/sample-po-search-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-search-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,$e,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,qe],encapsulation:2,changeDetection:1})}return a})();var nt=[`poSearch`];function it(a,w){if(a&1&&(jc(0,`div`)(1,`strong`),iO(2),wg(),iO(3),wg()),a&2){let r=w.$implicit,o=xx().$implicit;rg(2),Ag(``,r,`: `),rg(),Ag(` `,o[r],` \xA0 `)}}function at(a,w){if(a&1&&(jc(0,`li`),_x(1,it,4,2,`div`,null,vx),wg()),a&2){let r=w.$implicit,o=xx();rg(),Dx(o.changeFilter(r))}}var Be=(()=>{class a{http=p(zw);poSearch;ariaLabel;customLiterals;literals;properties=[];search=``;event=``;service=`https://po-sample-api.onrender.com/v1/heroes`;items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Iu.startsWith;searchMode=`action`;fieldKey;itemsModel;filterModel=`["name"]`;filterSelectModel;size=`medium`;customLocateSummary;locateSummary;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`showListbox`,label:`Show Listbox`},{value:`loading`,label:`Loading`}];iconsOptions=[{label:`fa-search`,value:`fa fa-search`},{label:`an-user`,value:`an an-user`},{label:`an-magnifying-glass`,value:`an an-magnifying-glass`}];filterModeOptions=[{label:`Starts With`,value:Iu.startsWith},{label:`Contains`,value:Iu.contains},{label:`Ends With`,value:Iu.endsWith}];searchModeOptions=[{label:`Action`,value:`action`},{label:`Execute`,value:`execute`},{label:`Locate`,value:`locate`},{label:`Trigger`,value:`trigger`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=[`name`])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?`p-change-model`:`p-filtered-items-change`}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??``)}catch(r){this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??``)}catch(r){this.customLocateSummary=void 0}}restore(){this.ariaLabel=``,this.search=``,this.event=``,this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel=`["name"]`,this.filterSelectModel=``,this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Iu.startsWith,this.searchMode=`action`,this.literals=void 0,this.locateSummary=void 0,this.size=`medium`,this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-labs`]],viewQuery:function(o,i){if(o&1&&iu(nt,7),o&2){let p;vo(p=_o())&&(i.poSearch=p.first)}},standalone:!1,features:[Ae],decls:32,vars:33,consts:[[`poSearch`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-blur`,`p-change-model`,`p-filtered-items-change`,`p-locate-next`,`p-locate-previous`,`p-aria-label`,`p-disabled`,`p-filter-keys`,`p-filter-type`,`p-filter-select`,`p-icon`,`p-items`,`p-literals`,`p-loading`,`p-locate-summary`,`p-search-type`,`p-show-listbox`,`p-size`],[1,`po-md-12`],[3,`p-label`],[1,`sample-list-search`,`po-md-12`,`row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`ariaLabel`,`p-label`,`Aria label`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`items`,`p-label`,`Items`,`p-help`,`Ex.: [{ "cidade": "São Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "Tóquio", "pais": "Japão" }]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`searchMode`,`p-label`,`Search Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-label`,`Filter Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locateSummary`,`p-help`,`{ "currentIndex": 1000, "total": 1000 }`,`p-label`,`Locate Summary`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"search": "Search people"}`,`p-label`,`Literals`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`Filter Keys`,`p-label`,`Filter Keys`,`p-help`,`Ex.: ["cidade", "pais"]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`Filter Select`,`p-label`,`Filter Select`,`p-help`,`Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(o,i){if(o&1){let p=Sx();jc(0,`div`,2)(1,`po-search`,3,0),mt$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-filtered-items-change`,function(d){return i.filter(d)})(`p-locate-next`,function(){return i.changeEvent(`p-locate-next`)})(`p-locate-previous`,function(){return i.changeEvent(`p-locate-previous`)}),wg()(),nu(3,`po-divider`),jc(4,`div`,2)(5,`po-accordion`,4)(6,`po-accordion-item`,5)(7,`po-widget`,4)(8,`ul`,6),_x(9,at,3,0,`li`,null,vx),wg()()()()(),nu(11,`po-divider`),jc(12,`div`,2),nu(13,`po-info`,7)(14,`po-info`,8),wg(),nu(15,`po-divider`),jc(16,`form`,null,1)(18,`po-input`,9),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.ariaLabel,d)||(i.ariaLabel=d),v_(d)}),wg(),jc(19,`po-input`,10),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.itemsModel,d)||(i.itemsModel=d),v_(d)}),mt$1(`p-change-model`,function(d){return i.changeItems(d)}),wg(),jc(20,`po-checkbox-group`,11),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.properties,d)||(i.properties=d),v_(d)}),wg(),jc(21,`po-radio-group`,12),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.icon,d)||(i.icon=d),v_(d)}),wg(),jc(22,`po-radio-group`,13),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.searchMode,d)||(i.searchMode=d),v_(d)}),wg(),jc(23,`po-radio-group`,14),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.filterMode,d)||(i.filterMode=d),v_(d)}),wg(),jc(24,`po-radio-group`,15),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.size,d)||(i.size=d),v_(d)}),wg(),jc(25,`po-input`,16),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.locateSummary,d)||(i.locateSummary=d),v_(d)}),mt$1(`p-change`,function(){return i.changeLocateSummary()}),wg(),jc(26,`po-input`,17),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.literals,d)||(i.literals=d),v_(d)}),mt$1(`p-change`,function(){return i.changeLiterals()}),wg(),jc(27,`po-input`,18),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.filterModel,d)||(i.filterModel=d),v_(d)}),mt$1(`p-change-model`,function(d){return i.updateFilterKeys(d)}),wg(),jc(28,`po-input`,19),JN(),ob(`ngModelChange`,function(d){return y_(p),sO(i.filterSelectModel,d)||(i.filterSelectModel=d),v_(d)}),mt$1(`p-change`,function(d){return i.updateFilterSelect(d)}),wg(),nu(29,`po-divider`),jc(30,`div`,2)(31,`po-button`,20),mt$1(`p-click`,function(){return i.restore()}),wg()()()}o&2&&(rg(),jE(`p-aria-label`,i.ariaLabel)(`p-disabled`,i.properties.includes(`disabled`))(`p-filter-keys`,i.fieldKeys)(`p-filter-type`,i.filterMode)(`p-filter-select`,i.fieldSelect)(`p-icon`,i.icon)(`p-items`,i.items)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-locate-summary`,i.customLocateSummary)(`p-search-type`,i.searchMode)(`p-show-listbox`,i.properties.includes(`showListbox`))(`p-size`,i.size),rg(5),jE(`p-label`,uO(`Itens encontrados: `,i.filteredItems?.length)),rg(3),Dx(i.filteredItems),rg(4),jE(`p-value`,i.search),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.ariaLabel),t0(),rg(),ib(`ngModel`,i.itemsModel),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.icon),jE(`p-options`,i.iconsOptions),t0(),rg(),ib(`ngModel`,i.searchMode),jE(`p-options`,i.searchModeOptions),t0(),rg(),ib(`ngModel`,i.filterMode),jE(`p-options`,i.filterModeOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0(),rg(),ib(`ngModel`,i.locateSummary),t0(),rg(),ib(`ngModel`,i.literals),t0(),rg(),ib(`ngModel`,i.filterModel),t0(),rg(),ib(`ngModel`,i.filterSelectModel),t0())},dependencies:[wK,CK,EK,TF,EF,cee,Y4,ni,Lf,m5,A5,Ote,_oe,Noe,gne],styles:[`.sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}`],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Search Labs`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-labs/sample-po-search-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-labs/sample-po-search-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { HttpClient } from '@angular/common/http';
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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-search-labs/sample-po-search-labs.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-search-labs`),wg(),nu(29,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,lt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Be],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function st(a,w){if(a&1&&(jc(0,`div`,0),nu(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),wg()),a&2){let r=w.$implicit;rg(),jE(`p-value`,r.name),rg(),jE(`p-value`,r.nickname),rg(),jE(`p-value`,r.email)}}function mt(a,w){a&1&&nu(0,`div`)}function pt(a,w){if(a&1&&(jc(0,`li`,7),iO(1),px(2,mt,1,0,`div`),wg(),jc(3,`li`,7),iO(4),wg()),a&2){let r=w.$implicit,o=xx();rg(),Ag(` Nickname: `,r.nickname,` `),rg(),mx(o.compareObjects(r)?2:-1),rg(2),Ag(`Email: `,r.email)}}var Ve=(()=>{class a{service=p(le);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-find-people`]],standalone:!1,features:[we([le])],decls:8,vars:3,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`],[1,`po-md-12`,`po-text-color-neutral-dark-40`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`po-search`,1),mt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),wg()(),nu(2,`po-divider`),_x(3,st,4,3,`div`,0,vx),nu(5,`po-divider`),jc(6,`po-list-view`,2),FE(7,pt,5,3,`ng-template`,3),wg()),o&2&&(rg(),jE(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),rg(2),Dx(i.peopleFiltered),rg(3),jE(`p-items`,i.items))},dependencies:[Lf,_oe,Gze,Uoe,gne],styles:[`li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}`],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-find-people-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Search Find People`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-find-people/sample-po-search-find-people.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-find-people/sample-po-search-find-people.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-search-find-people/sample-po-search-find-people.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()(),jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),iO(28,`sample-po-search-find-people/sample-po-search-find-people.component.css`),wg(),jc(29,`pre`,11),iO(30,`li {
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
`),wg()()()()(),jc(31,`div`,12),nu(32,`sample-po-search-find-people`),wg(),nu(33,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ct,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ve],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,w){if(a&1&&(jc(0,`div`,0),nu(1,`po-divider`)(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),wg()),a&2){let r=w.$implicit;rg(2),jE(`p-value`,r.name),rg(),jE(`p-value`,r.nickname),rg(),jE(`p-value`,r.email)}}var je=(()=>{class a{service=p(re);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-listbox`]],standalone:!1,features:[we([re])],decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-show-listbox`,`true`,`p-search-type`,`trigger`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`po-search`,1),mt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),wg()(),_x(2,ht,5,3,`div`,0,vx)),o&2&&(rg(),jE(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),rg(),Dx(i.peopleFiltered))},dependencies:[Lf,_oe,gne],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-listbox-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Search With Listbox`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-listbox/sample-po-search-listbox.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-listbox/sample-po-search-listbox.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-search-listbox/sample-po-search-listbox.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-search-listbox`),wg(),nu(27,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ft,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,je],encapsulation:2,changeDetection:1})}return a})();function Et(a,w){if(a&1&&(jc(0,`div`,0)(1,`po-container`,2),nu(2,`po-info`,3)(3,`po-info`,4)(4,`po-info`,5)(5,`po-info`,6),wg()()),a&2){let r=w.$implicit;rg(2),jE(`p-value`,r.name),rg(),jE(`p-value`,r.gender),rg(),jE(`p-value`,r.planet),rg(),jE(`p-value`,r.father)}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:`Personal`,value:[`name`,`gender`]},{label:`Planet`,value:[`planet`]},{label:`Family`,value:`father`}];ngOnInit(){this.items=[{name:`Anakin Skywalker`,gender:`male`,planet:`Tatooine`,father:`Darth Sidious`},{name:`Luke Skywalker`,gender:`male`,planet:`Tatooine`,father:`Anakin Skywalker`},{name:`Leia Organa`,gender:`female`,planet:`Alderaan`,father:`Anakin Skywalker`},{name:`Han Solo`,gender:`male`,planet:`Corellia`,father:`Ovan`}]}filtered(r){this.filteredItems=r}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-filter-select`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-search-type`,`trigger`,`p-show-listbox`,`true`,`p-disabled`,`false`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-select`],[1,`po-row`,`po-mt-2`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Gender`,1,`po-md-3`,3,`p-value`],[`p-label`,`Planet`,1,`po-md-3`,3,`p-value`],[`p-label`,`Father`,1,`po-md-3`,3,`p-value`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`po-search`,1),mt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),wg()(),_x(2,Et,6,4,`div`,0,vx)),o&2&&(rg(),jE(`p-items`,i.items)(`p-filter-select`,i.filterSelect),rg(),Dx(i.filteredItems))},dependencies:[Ec,_oe,gne],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-filter-select-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Search With Filter Select + Listbox`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-search-filter-select`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,vt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Re],encapsulation:2,changeDetection:1})}return a})();var Ke=(()=>{class a{poModal;filterType=Iu.contains;filterKeysAction=[`rotina`,`codigo`,`modulo`,`versao`];keysLabel=[`rotina`,`codigo`];itemsAction=[{rotina:`Contas a Pagar`,codigo:`MATA103`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Contas a Pagar`)},{rotina:`Cotação de Fornecedores`,codigo:`MATA140`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Cotação de Fornecedores`)},{rotina:`Meus Funcionarios`,codigo:`XPTO987`,modulo:`RH`,versao:`1.2.3`,url:`documentation/po-widget`}];columns=[{property:`rotina`,label:`Rotina`},{property:`codigo`,label:`Código`},{property:`modulo`,label:`Módulo`},{property:`versao`,label:`Versão`}];footerAction(){this.poModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-execute`]],viewQuery:function(o,i){if(o&1&&iu(ea,7),o&2){let p;vo(p=_o())&&(i.poModal=p.first)}},standalone:!1,decls:10,vars:9,consts:[[`modal`,``],[1,`po-row`],[`p-title`,`Pesquisar e executar`,`p-help`,`https://github.com/po-ui/po-angular/stargazers`,1,`po-lg-6`,`po-mt-2`,3,`p-height`],[`name`,`Po Search`,1,`po-mt-2`,`full`,3,`p-footer-action-listbox`,`p-search-type`,`p-items`,`p-filter-type`,`p-filter-keys`,`p-keys-label`],[`p-title`,`Rotinas`],[3,`p-columns`,`p-items`,`p-hide-columns-manager`]],template:function(o,i){o&1&&(jc(0,`div`,1)(1,`po-widget`,2)(2,`div`,1)(3,`span`),iO(4,`Entre com o nome ou código da rotina`),wg()(),jc(5,`div`,1)(6,`po-search`,3),mt$1(`p-footer-action-listbox`,function(){return i.footerAction()}),wg()()()(),jc(7,`po-modal`,4,0),nu(9,`po-table`,5),wg()),o&2&&(rg(),jE(`p-height`,180),rg(5),jE(`p-search-type`,`execute`)(`p-items`,i.itemsAction)(`p-filter-type`,i.filterType)(`p-filter-keys`,i.filterKeysAction)(`p-keys-label`,i.keysLabel),rg(3),jE(`p-columns`,i.columns)(`p-items`,i.itemsAction)(`p-hide-columns-manager`,!0))},dependencies:[ea,I5,Noe,gne],styles:[`.full[_ngcontent-%COMP%]{width:100%}`],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-execute-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Search Form Fields with Execute`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-execute/sample-po-search-execute.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-execute/sample-po-search-execute.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-search-execute/sample-po-search-execute.component.css`),wg(),jc(25,`pre`,11),iO(26,`.full {
  width: 100%;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-search-execute`),wg(),nu(29,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ct,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ke],encapsulation:2,changeDetection:1})}return a})();var _t=[`nameInput`];var Mt=[`cpfInput`];var wt=[`addressInput`];var It=[`numberInput`];var Tt=[`emailInput`];var kt=[`websiteInput`];var Ft=[`reactiveFormData`];var Ue=(()=>{class a{fb=p(MK);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=Iu.endsWith;searchLiterals={search:`Buscar campos`};modalPrimaryAction={label:`Close`,action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:`Customer name`,index:0,focus:()=>this.nameInput.focus()},{label:`CPF`,index:1,focus:()=>this.cpfInput.focus()},{label:`Address`,index:2,focus:()=>this.addressInput.focus()},{label:`Number`,index:3,focus:()=>this.numberInput.focus()},{label:`Email`,index:4,focus:()=>this.emailInput.focus()},{label:`Website`,index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:[``,[Mm.required,Mm.minLength(5)]],cpf:[``,Mm.required],address:[``,Mm.required],number:[``,Mm.required],email:[``,Mm.required],website:[``,Mm.required]})}updateSearchTerm(r){console.log(`updateSearchTerm`);let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log(`onNextOccurrenceClick`),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log(`onPreviousOccurrenceClick`),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-fields-locate`]],viewQuery:function(o,i){if(o&1&&iu(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;vo(p=_o())&&(i.nameInput=p.first),vo(p=_o())&&(i.cpfInput=p.first),vo(p=_o())&&(i.addressInput=p.first),vo(p=_o())&&(i.numberInput=p.first),vo(p=_o())&&(i.emailInput=p.first),vo(p=_o())&&(i.websiteInput=p.first),vo(p=_o())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[[`nameInput`,``],[`cpfInput`,``],[`addressInput`,``],[`numberInput`,``],[`emailInput`,``],[`websiteInput`,``],[`reactiveFormData`,``],[1,`po-row`],[1,`po-ml-1`,`po-mr-1`],[`p-search-type`,`locate`,3,`p-change-model`,`p-locate-next`,`p-locate-previous`,`p-literals`,`p-locate-summary`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-9`],[`formControlName`,`cpf`,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-lg-6`,3,`p-value`],[`p-label`,`CPF`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Address`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Number`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Email`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Website`,1,`po-lg-6`,3,`p-value`]],template:function(o,i){o&1&&(jc(0,`div`,7)(1,`div`,8)(2,`po-search`,9),mt$1(`p-change-model`,function(h){return i.updateSearchTerm(h)})(`p-locate-next`,function(){return i.onNextOccurrenceClick()})(`p-locate-previous`,function(){return i.onPreviousOccurrenceClick()}),wg()()(),nu(3,`po-divider`),jc(4,`form`,10)(5,`div`,7)(6,`po-input`,11,0),JN(),wg(),jc(8,`po-input`,12,1),JN(),wg()(),jc(10,`div`,7)(11,`po-input`,13,2),JN(),wg(),jc(13,`po-number`,14,3),JN(),wg()(),jc(15,`div`,7)(16,`po-email`,15,4),JN(),wg(),jc(18,`po-url`,16,5),JN(),wg()(),jc(20,`div`,7)(21,`po-button`,17),mt$1(`p-click`,function(){return i.saveForm()}),wg()()(),jc(22,`po-modal`,18,6)(24,`div`,7),nu(25,`po-info`,19)(26,`po-info`,20),wg(),nu(27,`po-divider`),jc(28,`div`,7),nu(29,`po-info`,21)(30,`po-info`,22),wg(),nu(31,`po-divider`),jc(32,`div`,7),nu(33,`po-info`,23)(34,`po-info`,24),wg()()),o&2&&(rg(2),jE(`p-literals`,i.searchLiterals)(`p-locate-summary`,i.locateSummary),rg(2),jE(`formGroup`,i.reactiveForm),rg(2),t0(),rg(2),t0(),rg(3),t0(),rg(2),t0(),rg(3),t0(),rg(2),t0(),rg(3),jE(`p-disabled`,!i.reactiveForm.valid),rg(),jE(`p-primary-action`,i.modalPrimaryAction),rg(3),jE(`p-value`,i.reactiveForm.controls.name.value),rg(),jE(`p-value`,i.reactiveForm.controls.cpf.value),rg(3),jE(`p-value`,i.reactiveForm.controls.address.value),rg(),jE(`p-value`,i.reactiveForm.controls.number.value),rg(3),jE(`p-value`,i.reactiveForm.controls.email.value),rg(),jE(`p-value`,i.reactiveForm.controls.website.value))},dependencies:[wK,CK,EK,SF,kF,ni,Lf,K3,A5,doe,E5,_oe,ea,gne],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a});var Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-fields-locate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Search Form Fields with Locate`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-search-fields-locate`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Lt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ue],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-search-doc`]],standalone:!1,decls:1426,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterSelect[]`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLocateSummary`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`searchMode`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoSearchModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-search.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoSearchComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente search, também conhecido como barra de pesquisa, é utilizado para ajudar os usuários a localizar um determinado conteúdo.`),wg(),jc(15,`p`),iO(16,`Normalmente localizado no canto superior direito, junto com o ícone de lupa, uma vez que este ícone é amplamente reconhecido.`),wg(),jc(17,`h4`),iO(18,`Boas práticas`),wg(),jc(19,`p`),iO(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),wg(),jc(21,`ul`)(22,`li`),iO(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),wg(),jc(24,`li`),iO(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),wg(),jc(26,`li`),iO(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),wg(),jc(28,`li`),iO(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),wg(),jc(30,`li`),iO(31,`Quando apropriado, destaque os termos da busca nos resultados.`),wg(),jc(32,`li`),iO(33,`A entrada do campo de pesquisa deve caber em uma linha. Não use entradas de pesquisa de várias linhas.`),wg(),jc(34,`li`),iO(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),wg(),jc(36,`li`),iO(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),wg()(),jc(38,`h4`),iO(39,`Acessibilidade tratada no componente`),wg(),jc(40,`p`),iO(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),wg(),jc(42,`ul`)(43,`li`),iO(44,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),wg(),jc(45,`li`),iO(46,`Alteração entre os estados precisa ser indicada por mais de um elemento além da cor (1.4.1: Use of Color);`),wg()(),jc(47,`h4`),iO(48,`Tokens customizáveis`),wg(),jc(49,`p`),iO(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(51,`blockquote`)(52,`p`),iO(53,`Para maiores informações, acesse o guia `),jc(54,`a`,6),iO(55,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(56,`.`),wg()(),jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),iO(61,`Propriedade`),wg(),jc(62,`th`),iO(63,`Descrição`),wg(),jc(64,`th`),iO(65,`Valor Padrão`),wg()()(),jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),iO(70,`Default Values`),wg()(),nu(71,`td`)(72,`td`),wg(),jc(73,`tr`)(74,`td`)(75,`code`),iO(76,`--font-family`),wg()(),jc(77,`td`),iO(78,`Família tipográfica do campo`),wg(),jc(79,`td`)(80,`code`),iO(81,`var(--font-family-theme)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),iO(85,`--font-size`),wg()(),jc(86,`td`),iO(87,`Tamanho da fonte do campo`),wg(),jc(88,`td`)(89,`code`),iO(90,`var(--font-size-default)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),iO(94,`--text-color-placeholder`),wg()(),jc(95,`td`),iO(96,`Cor do texto no placeholder`),wg(),jc(97,`td`)(98,`code`),iO(99,`var(--color-neutral-light-30)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`code`),iO(103,`--color`),wg()(),jc(104,`td`),iO(105,`Cor das bordas`),wg(),jc(106,`td`)(107,`code`),iO(108,`var(--color-neutral-dark-70)`),wg()()(),jc(109,`tr`)(110,`td`)(111,`code`),iO(112,`--border-radius`),wg()(),jc(113,`td`),iO(114,`Raio das bordas`),wg(),jc(115,`td`)(116,`code`),iO(117,`var(--border-radius-md)`),wg()()(),jc(118,`tr`)(119,`td`)(120,`code`),iO(121,`--background`),wg()(),jc(122,`td`),iO(123,`Cor de background`),wg(),jc(124,`td`)(125,`code`),iO(126,`var(--color-neutral-light-05)`),wg()()(),jc(127,`tr`)(128,`td`)(129,`code`),iO(130,`--text-color`),wg()(),jc(131,`td`),iO(132,`Cor do texto editável`),wg(),jc(133,`td`)(134,`code`),iO(135,`var(--color-neutral-dark-90)`),wg()()(),jc(136,`tr`)(137,`td`)(138,`code`),iO(139,`--color-clear`),wg()(),jc(140,`td`),iO(141,`Cor do ícone close`),wg(),jc(142,`td`)(143,`code`),iO(144,`var(--color-action-default)`),wg()()(),jc(145,`tr`)(146,`td`)(147,`code`),iO(148,`--color-controls`),wg()(),jc(149,`td`),iO(150,`Cor dos ícones de controle do mode location`),wg(),jc(151,`td`)(152,`code`),iO(153,`var(--color-action-default)`),wg()()(),jc(154,`tr`)(155,`td`)(156,`code`),iO(157,`--transition-property`),wg()(),jc(158,`td`),iO(159,`Atributo da transição`),wg(),jc(160,`td`)(161,`code`),iO(162,`all`),wg()()(),jc(163,`tr`)(164,`td`)(165,`code`),iO(166,`--transition-duration`),wg()(),jc(167,`td`),iO(168,`Duração da transição`),wg(),jc(169,`td`)(170,`code`),iO(171,`var(--duration-extra-fast)`),wg()()(),jc(172,`tr`)(173,`td`)(174,`code`),iO(175,`--transition-timing`),wg()(),jc(176,`td`),iO(177,`Duração da transição com o tipo de transição`),wg(),jc(178,`td`)(179,`code`),iO(180,`var(--timing-standart)`),wg()()(),jc(181,`tr`)(182,`td`)(183,`strong`),iO(184,`Icon`),wg()(),nu(185,`td`)(186,`td`),wg(),jc(187,`tr`)(188,`td`)(189,`code`),iO(190,`--color-icon-read`),wg()(),jc(191,`td`),iO(192,`Cor do ícone de busca no modo action`),wg(),jc(193,`td`)(194,`code`),iO(195,`var(--color-neutral-dark-70)`),wg()()(),jc(196,`tr`)(197,`td`)(198,`code`),iO(199,`--color-icon`),wg()(),jc(200,`td`),iO(201,`Cor do ícone de busca no modo trigger`),wg(),jc(202,`td`)(203,`code`),iO(204,`var(--color-action-default)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`strong`),iO(208,`Hover`),wg()(),nu(209,`td`)(210,`td`),wg(),jc(211,`tr`)(212,`td`)(213,`code`),iO(214,`--color-hover`),wg()(),jc(215,`td`),iO(216,`Cor das bordas no estado hover`),wg(),jc(217,`td`)(218,`code`),iO(219,`var(--color-action-hover)`),wg()()(),jc(220,`tr`)(221,`td`)(222,`code`),iO(223,`--background-hover`),wg()(),jc(224,`td`),iO(225,`Cor de background no estado hover`),wg(),jc(226,`td`)(227,`code`),iO(228,`var(--color-brand-01-lightest)`),wg()()(),jc(229,`tr`)(230,`td`)(231,`strong`),iO(232,`Focused`),wg()(),nu(233,`td`)(234,`td`),wg(),jc(235,`tr`)(236,`td`)(237,`code`),iO(238,`--color-focused`),wg()(),jc(239,`td`),iO(240,`Cor das bordas no estado de focus`),wg(),jc(241,`td`)(242,`code`),iO(243,`var(--color-action-default)`),wg()()(),jc(244,`tr`)(245,`td`)(246,`code`),iO(247,`--outline-color-focused`),wg()(),jc(248,`td`),iO(249,`Cor do outline no estado de focus`),wg(),jc(250,`td`)(251,`code`),iO(252,`var(--color-action-focus)`),wg()()(),jc(253,`tr`)(254,`td`)(255,`strong`),iO(256,`Disabled`),wg()(),nu(257,`td`)(258,`td`),wg(),jc(259,`tr`)(260,`td`)(261,`code`),iO(262,`--color-disabled`),wg()(),jc(263,`td`),iO(264,`Cor principal no estado disabled`),wg(),jc(265,`td`)(266,`code`),iO(267,`var(--color-action-disabled)`),wg()()(),jc(268,`tr`)(269,`td`)(270,`code`),iO(271,`--background-disabled`),wg()(),jc(272,`td`),iO(273,`Cor de background no estado disabled`),wg(),jc(274,`td`)(275,`code`),iO(276,`var(--color-neutral-light-20)`),wg()()()()()(),jc(277,`div`,7)(278,`h4`,8),iO(279,`Seletor`),wg(),jc(280,`pre`,9),iO(281,`<po-search
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
`),wg()(),jc(282,`h4`,10),iO(283,`Propriedades`),wg(),jc(284,`table`,11)(285,`tr`,12)(286,`th`,13),iO(287,`Nome`),wg(),jc(288,`th`,13),iO(289,`Tipo`),wg(),jc(290,`th`,13),iO(291,`Padrão`),wg(),jc(292,`th`,13),iO(293,`Descrição`),wg()(),jc(294,`tr`,14)(295,`td`,15)(296,`div`,16)(297,`span`,17),iO(298,` p-aria-label`),nu(299,`br`),wg()()(),jc(300,`td`,18)(301,`code`,19),iO(302,`string`),wg()(),jc(303,`td`,20),iO(304,`-`),wg(),jc(305,`td`,21)(306,`em`)(307,`strong`),iO(308,`(opcional)`),wg()(),jc(309,`p`),iO(310,`Define um aria-label para o po-search.`),wg(),jc(311,`blockquote`)(312,`p`),iO(313,`Devido o componente não possuir uma label assim como outros campos de texto, o `),jc(314,`code`),iO(315,`aria-label`),wg(),iO(316,` \xE9 utilizado para
acessibilidade.`),wg()()()(),jc(317,`tr`,14)(318,`td`,15)(319,`div`,22)(320,`span`,23),iO(321,` (p-blur)`),nu(322,`br`),wg()()(),jc(323,`td`,18)(324,`code`,24),iO(325,`EventEmitter`),wg()(),jc(326,`td`,20),iO(327,`-`),wg(),jc(328,`td`,21)(329,`em`)(330,`strong`),iO(331,`(opcional)`),wg()(),jc(332,`p`),iO(333,`Evento disparado ao sair do campo.`),wg()()(),jc(334,`tr`,14)(335,`td`,15)(336,`div`,22)(337,`span`,23),iO(338,` (p-change-model)`),nu(339,`br`),wg()()(),jc(340,`td`,18)(341,`code`,24),iO(342,`EventEmitter`),wg()(),jc(343,`td`,20),iO(344,`-`),wg(),jc(345,`td`,21)(346,`em`)(347,`strong`),iO(348,`(opcional)`),wg()(),jc(349,`p`),iO(350,`Evento disparado ao alterar valor do model.`),wg()()(),jc(351,`tr`,14)(352,`td`,15)(353,`div`,16)(354,`span`,17),iO(355,` p-disabled`),nu(356,`br`),wg()()(),jc(357,`td`,18)(358,`code`,25),iO(359,`boolean`),wg()(),jc(360,`td`,20)(361,`p`)(362,`code`),iO(363,`false`),wg()()(),jc(364,`td`,21)(365,`em`)(366,`strong`),iO(367,`(opcional)`),wg()(),jc(368,`p`),iO(369,`Desabilita o po-search e não permite que o usuário interaja com o mesmo.`),wg()()(),jc(370,`tr`,14)(371,`td`,15)(372,`div`,22)(373,`span`,23),iO(374,` (p-filter)`),nu(375,`br`),wg()()(),jc(376,`td`,18)(377,`code`,24),iO(378,`EventEmitter`),wg()(),jc(379,`td`,20),iO(380,`-`),wg(),jc(381,`td`,21)(382,`em`)(383,`strong`),iO(384,`(opcional)`),wg()(),jc(385,`p`),iO(386,`Pode ser informada uma função que será disparada quando houver alterações nos filtros.`),wg(),jc(387,`blockquote`)(388,`p`),iO(389,`Incompatível com a propriedade `),jc(390,`code`),iO(391,`p-search-type`),wg(),iO(392,` do tipo `),jc(393,`code`),iO(394,`locate`),wg(),iO(395,`.`),wg()()()(),jc(396,`tr`,14)(397,`td`,15)(398,`div`,16)(399,`span`,17),iO(400,` p-filter-keys`),nu(401,`br`),wg()()(),jc(402,`td`,18)(403,`code`,26),iO(404,`Array<any>`),wg()(),jc(405,`td`,20),iO(406,`-`),wg(),jc(407,`td`,21)(408,`p`),iO(409,`Define os nomes das propriedades do objeto que serão utilizados para busca em `),jc(410,`code`),iO(411,`p-items`),wg(),iO(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),wg(),jc(413,`pre`)(414,`code`,27),iO(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),wg()(),jc(416,`blockquote`)(417,`p`),iO(418,`Esta propriedade é ignorada quando utilizado com `),jc(419,`code`),iO(420,`p-filter-select`),wg(),iO(421,` e incompat\xEDvel com a propriedade
`),jc(422,`code`),iO(423,`p-search-type`),wg(),iO(424,` do tipo `),jc(425,`code`),iO(426,`locate`),wg(),iO(427,`.`),wg()()()(),jc(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),iO(432,` p-filter-select`),nu(433,`br`),wg()()(),jc(434,`td`,18)(435,`code`,28),iO(436,`PoSearchFilterSelect[]`),wg()(),jc(437,`td`,20),iO(438,`-`),wg(),jc(439,`td`,21)(440,`p`),iO(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),jc(442,`code`),iO(443,`p-items`),wg(),iO(444,`. Automaticamente adiciona a opção `),jc(445,`strong`),iO(446,`Todos`),wg(),iO(447,`, com um mapeamento de todas as opções passadas.`),wg(),jc(448,`p`),iO(449,`Exemplo de uso:`),wg(),jc(450,`pre`)(451,`code`,27),iO(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),wg()(),jc(453,`blockquote`)(454,`p`),iO(455,`Ao ser habilitada, a propriedade `),jc(456,`code`),iO(457,`p-filter-keys`),wg(),iO(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),jc(459,`code`),iO(460,`p-search-type`),wg(),iO(461,` do tipo `),jc(462,`code`),iO(463,`locate`),wg(),iO(464,`.`),wg()()()(),jc(465,`tr`,14)(466,`td`,15)(467,`div`,16)(468,`span`,17),iO(469,` p-filter-type`),nu(470,`br`),wg()()(),jc(471,`td`,18)(472,`code`,29),iO(473,`PoSearchFilterMode`),wg()(),jc(474,`td`,20)(475,`p`)(476,`code`),iO(477,`startsWith`),wg()()(),jc(478,`td`,21)(479,`em`)(480,`strong`),iO(481,`(opcional)`),wg()(),jc(482,`p`),iO(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),jc(484,`strong`),iO(485,`PoSearchFilterMode`),wg(),iO(486,`.`),wg(),jc(487,`blockquote`)(488,`p`),iO(489,`Incompatível com a propriedade `),jc(490,`code`),iO(491,`p-search-type`),wg(),iO(492,` do tipo `),jc(493,`code`),iO(494,`locate`),wg(),iO(495,`.`),wg()()()(),jc(496,`tr`,14)(497,`td`,15)(498,`div`,22)(499,`span`,23),iO(500,` (p-filtered-items-change)`),nu(501,`br`),wg()()(),jc(502,`td`,18)(503,`code`,24),iO(504,`EventEmitter`),wg()(),jc(505,`td`,20),iO(506,`-`),wg(),jc(507,`td`,21)(508,`em`)(509,`strong`),iO(510,`(opcional)`),wg()(),jc(511,`p`),iO(512,`Pode ser informada uma função que será disparada quando houver alterações no input.`),wg(),jc(513,`blockquote`)(514,`p`),iO(515,`Incompatível com a propriedade `),jc(516,`code`),iO(517,`p-search-type`),wg(),iO(518,` do tipo `),jc(519,`code`),iO(520,`locate`),wg(),iO(521,`.`),wg()()()(),jc(522,`tr`,14)(523,`td`,15)(524,`div`,22)(525,`span`,23),iO(526,` (p-focus)`),nu(527,`br`),wg()()(),jc(528,`td`,18)(529,`code`,24),iO(530,`EventEmitter`),wg()(),jc(531,`td`,20),iO(532,`-`),wg(),jc(533,`td`,21)(534,`em`)(535,`strong`),iO(536,`(opcional)`),wg()(),jc(537,`p`),iO(538,`Evento emitido quando o campo de entrada (input) recebe foco.`),wg()()(),jc(539,`tr`,14)(540,`td`,15)(541,`div`,22)(542,`span`,23),iO(543,` (p-footer-action-listbox)`),nu(544,`br`),wg()()(),jc(545,`td`,18)(546,`code`,24),iO(547,`EventEmitter`),wg()(),jc(548,`td`,20),iO(549,`-`),wg(),jc(550,`td`,21)(551,`em`)(552,`strong`),iO(553,`(opcional)`),wg()(),jc(554,`p`),iO(555,`Evento disparado ao clicar no botão de ação exibido no rodapé do `),jc(556,`code`),iO(557,`listbox`),wg(),iO(558,`.
O texto exibido pode ser configurado por meio do literal `),jc(559,`code`),iO(560,`footerActionListbox`),wg(),iO(561,`.`),wg()()(),jc(562,`tr`,14)(563,`td`,15)(564,`div`,16)(565,`span`,17),iO(566,` p-icon`),nu(567,`br`),wg()()(),jc(568,`td`,18)(569,`code`,19),iO(570,`string `),wg(),jc(571,`code`,30),iO(572,` TemplateRef<void>`),wg()(),jc(573,`td`,20),iO(574,`-`),wg(),jc(575,`td`,21)(576,`em`)(577,`strong`),iO(578,`(opcional)`),wg()(),jc(579,`p`),iO(580,`Permite customizar o ícone de busca que acompanha o campo.`),wg(),jc(581,`p`),iO(582,`É possível usar qualquer um dos ícones da `),jc(583,`a`,31),iO(584,`Biblioteca de ícones PO UI`),wg(),iO(585,`, conforme exemplo:`),wg(),jc(586,`pre`)(587,`code`),iO(588,`<po-search p-icon="an an-user"></po-search>
`),wg()(),jc(589,`p`),iO(590,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(591,`em`),iO(592,`Font Awesome`),wg(),iO(593,`, desde que a biblioteca
esteja carregada no projeto:`),wg(),jc(594,`pre`)(595,`code`),iO(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),wg()(),jc(597,`p`),iO(598,`Outra opção seria a customização do ícone através do `),jc(599,`code`),iO(600,`TemplateRef`),wg(),iO(601,`, conforme exemplo abaixo:`),wg(),jc(602,`pre`)(603,`code`),iO(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),wg()()()(),jc(605,`tr`,14)(606,`td`,15)(607,`div`,16)(608,`span`,17),iO(609,` p-items`),nu(610,`br`),wg()()(),jc(611,`td`,18)(612,`code`,26),iO(613,`Array<any>`),wg()(),jc(614,`td`,20),iO(615,`-`),wg(),jc(616,`td`,21)(617,`em`)(618,`strong`),iO(619,`(opcional)`),wg()(),jc(620,`p`),iO(621,`Lista de itens que serão utilizados para pesquisa.`),wg(),jc(622,`blockquote`)(623,`p`),iO(624,`Incompatível com a propriedade `),jc(625,`code`),iO(626,`p-search-type`),wg(),iO(627,` do tipo `),jc(628,`code`),iO(629,`locate`),wg(),iO(630,`.`),wg()()()(),jc(631,`tr`,14)(632,`td`,15)(633,`div`,22)(634,`span`,23),iO(635,` (p-keydown)`),nu(636,`br`),wg()()(),jc(637,`td`,18)(638,`code`,24),iO(639,`EventEmitter`),wg()(),jc(640,`td`,20),iO(641,`-`),wg(),jc(642,`td`,21)(643,`em`)(644,`strong`),iO(645,`(opcional)`),wg()(),jc(646,`p`),iO(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(648,`code`),iO(649,`KeyboardEvent`),wg(),iO(650,` com informações sobre a tecla.`),wg()()(),jc(651,`tr`,14)(652,`td`,15)(653,`div`,16)(654,`span`,17),iO(655,` p-keys-label`),nu(656,`br`),wg()()(),jc(657,`td`,18)(658,`code`,32),iO(659,`Array<string>`),wg()(),jc(660,`td`,20),iO(661,`-`),wg(),jc(662,`td`,21)(663,`em`)(664,`strong`),iO(665,`(opcional)`),wg()(),jc(666,`p`),iO(667,`Define os nomes das propriedades do objeto que serão exibidos como rótulos (labels) no `),jc(668,`code`),iO(669,`listbox`),wg(),iO(670,` quando a propriedade
`),jc(671,`code`),iO(672,`p-show-listbox`),wg(),iO(673,` estiver habilitada.`),wg(),jc(674,`p`),iO(675,`Deve ser informado um array de strings contendo até `),jc(676,`strong`),iO(677,`3 propriedades`),wg(),iO(678,`.`),wg(),jc(679,`p`),iO(680,`Exemplo de uso:`),wg(),jc(681,`pre`)(682,`code`,33),iO(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),wg()()()(),jc(684,`tr`,14)(685,`td`,15)(686,`div`,22)(687,`span`,23),iO(688,` (p-listbox-onclick)`),nu(689,`br`),wg()()(),jc(690,`td`,18)(691,`code`,24),iO(692,`EventEmitter`),wg()(),jc(693,`td`,20),iO(694,`-`),wg(),jc(695,`td`,21)(696,`em`)(697,`strong`),iO(698,`(opcional)`),wg()(),jc(699,`p`),iO(700,`Pode ser informada uma função que será disparada quando houver click no listbox.`),wg(),jc(701,`blockquote`)(702,`p`),iO(703,`Incompatível com a propriedade `),jc(704,`code`),iO(705,`p-search-type`),wg(),iO(706,` do tipo `),jc(707,`code`),iO(708,`locate`),wg(),iO(709,`.`),wg()()()(),jc(710,`tr`,14)(711,`td`,15)(712,`div`,16)(713,`span`,17),iO(714,` p-literals`),nu(715,`br`),wg()()(),jc(716,`td`,18)(717,`code`,34),iO(718,`PoSearchLiterals`),wg()(),jc(719,`td`,20),iO(720,`-`),wg(),jc(721,`td`,21)(722,`em`)(723,`strong`),iO(724,`(opcional)`),wg()(),jc(725,`p`),iO(726,`Objeto com as literais usadas no `),jc(727,`code`),iO(728,`po-search`),wg(),iO(729,`, permitindo personalizar os textos exibidos no componente.`),wg(),jc(730,`p`),iO(731,`Para utilizar basta passar a literal que deseja customizar:`),wg(),jc(732,`pre`)(733,`code`),iO(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),wg()(),jc(735,`p`),iO(736,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),wg(),jc(737,`pre`)(738,`code`),iO(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),wg()(),jc(740,`blockquote`)(741,`p`),iO(742,`O objeto padrão de literais será traduzido de acordo com o idioma do `),jc(743,`a`,35)(744,`code`),iO(745,`PoI18nService`),wg()(),iO(746,` ou
do browser.`),wg()()()(),jc(747,`tr`,14)(748,`td`,15)(749,`div`,16)(750,`span`,17),iO(751,` p-loading`),nu(752,`br`),wg()()(),jc(753,`td`,18)(754,`code`,25),iO(755,`boolean`),wg()(),jc(756,`td`,20)(757,`p`)(758,`code`),iO(759,`false`),wg()()(),jc(760,`td`,21)(761,`em`)(762,`strong`),iO(763,`(opcional)`),wg()(),jc(764,`p`),iO(765,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg(),jc(766,`blockquote`)(767,`p`),iO(768,`Incompatível com a propriedade `),jc(769,`code`),iO(770,`p-search-type`),wg(),iO(771,` do tipo `),jc(772,`code`),iO(773,`locate`),wg(),iO(774,`.`),wg()()()(),jc(775,`tr`,14)(776,`td`,15)(777,`div`,22)(778,`span`,23),iO(779,` (p-locate-next)`),nu(780,`br`),wg()()(),jc(781,`td`,18)(782,`code`,24),iO(783,`EventEmitter`),wg()(),jc(784,`td`,20),iO(785,`-`),wg(),jc(786,`td`,21)(787,`em`)(788,`strong`),iO(789,`(opcional)`),wg()(),jc(790,`p`),iO(791,`Evento disparado ao clicar no controle "Próximo resultado".`),wg(),jc(792,`blockquote`)(793,`p`),iO(794,`Compatível com a propriedade `),jc(795,`code`),iO(796,`p-search-type`),wg(),iO(797,` do tipo `),jc(798,`code`),iO(799,`locate`),wg(),iO(800,`.`),wg()()()(),jc(801,`tr`,14)(802,`td`,15)(803,`div`,22)(804,`span`,23),iO(805,` (p-locate-previous)`),nu(806,`br`),wg()()(),jc(807,`td`,18)(808,`code`,24),iO(809,`EventEmitter`),wg()(),jc(810,`td`,20),iO(811,`-`),wg(),jc(812,`td`,21)(813,`em`)(814,`strong`),iO(815,`(opcional)`),wg()(),jc(816,`p`),iO(817,`Evento disparado ao clicar no controle "Resultado anterior".`),wg(),jc(818,`blockquote`)(819,`p`),iO(820,`Compatível com a propriedade `),jc(821,`code`),iO(822,`p-search-type`),wg(),iO(823,` do tipo `),jc(824,`code`),iO(825,`locate`),wg(),iO(826,`.`),wg()()()(),jc(827,`tr`,14)(828,`td`,15)(829,`div`,16)(830,`span`,17),iO(831,` p-locate-summary`),nu(832,`br`),wg()()(),jc(833,`td`,18)(834,`code`,36),iO(835,`PoSearchLocateSummary`),wg()(),jc(836,`td`,20),iO(837,`-`),wg(),jc(838,`td`,21)(839,`em`)(840,`strong`),iO(841,`(opcional)`),wg()(),jc(842,`p`),iO(843,`Define os valores do contador exibido ao usar a propriedade `),jc(844,`code`),iO(845,`p-search-type`),wg(),iO(846,` do tipo `),jc(847,`code`),iO(848,`locate`),wg(),iO(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),wg(),jc(850,`pre`)(851,`code`,33),iO(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),wg()(),jc(853,`blockquote`)(854,`p`),iO(855,`Compatível com a propriedade `),jc(856,`code`),iO(857,`p-search-type`),wg(),iO(858,` do tipo `),jc(859,`code`),iO(860,`locate`),wg(),iO(861,`.`),wg()()()(),jc(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),iO(866,` name`),nu(867,`br`),wg()()(),jc(868,`td`,18)(869,`code`,19),iO(870,`string`),wg()(),jc(871,`td`,20),iO(872,`-`),wg(),jc(873,`td`,21)(874,`em`)(875,`strong`),iO(876,`(opcional)`),wg()(),jc(877,`p`),iO(878,`Nome e identificador do campo.`),wg()()(),jc(879,`tr`,14)(880,`td`,15)(881,`div`,16)(882,`span`,17),iO(883,` p-no-autocomplete`),nu(884,`br`),wg()()(),jc(885,`td`,18)(886,`code`,25),iO(887,`boolean`),wg()(),jc(888,`td`,20)(889,`p`)(890,`code`),iO(891,`false`),wg()()(),jc(892,`td`,21)(893,`em`)(894,`strong`),iO(895,`(opcional)`),wg()(),jc(896,`p`),iO(897,`Define a propriedade nativa `),jc(898,`code`),iO(899,`autocomplete`),wg(),iO(900,` do campo como `),jc(901,`code`),iO(902,`off`),wg(),iO(903,`.`),wg()()(),jc(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),iO(908,` p-show-listbox`),nu(909,`br`),wg()()(),jc(910,`td`,18)(911,`code`,25),iO(912,`boolean`),wg()(),jc(913,`td`,20)(914,`p`)(915,`code`),iO(916,`false`),wg()()(),jc(917,`td`,21)(918,`em`)(919,`strong`),iO(920,`(opcional)`),wg()(),jc(921,`p`),iO(922,`Exibe uma lista (auto-complete) com as opções definidas em `),jc(923,`code`),iO(924,`p-filter-keys`),wg(),iO(925,` ou `),jc(926,`code`),iO(927,`p-filter-select`),wg(),iO(928,` enquanto realiza
uma busca, respeitando o `),jc(929,`code`),iO(930,`p-filter-type`),wg(),iO(931,` como modo de pesquisa.`),wg(),jc(932,`blockquote`)(933,`p`),iO(934,`Incompatível com a propriedade `),jc(935,`code`),iO(936,`p-search-type`),wg(),iO(937,` do tipo `),jc(938,`code`),iO(939,`locate`),wg(),iO(940,`.`),wg()()()(),jc(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),iO(945,` p-size`),nu(946,`br`),wg()()(),jc(947,`td`,18)(948,`code`,19),iO(949,`string`),wg()(),jc(950,`td`,20)(951,`p`)(952,`code`),iO(953,`medium`),wg()()(),jc(954,`td`,21)(955,`em`)(956,`strong`),iO(957,`(opcional)`),wg()(),jc(958,`p`),iO(959,`Define o tamanho do componente:`),wg(),jc(960,`ul`)(961,`li`)(962,`code`),iO(963,`small`),wg(),iO(964,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(965,`li`)(966,`code`),iO(967,`medium`),wg(),iO(968,`: altura do input como 44px.`),wg()(),jc(969,`blockquote`)(970,`p`),iO(971,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(972,`code`),iO(973,`medium`),wg(),iO(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(975,`a`,37),iO(976,`po-theme`),wg(),iO(977,`.`),wg()()()(),jc(978,`tr`,14)(979,`td`,15)(980,`div`,16)(981,`span`,17),iO(982,` p-search-type`),nu(983,`br`),wg()()(),jc(984,`td`,18)(985,`code`,38),iO(986,`searchMode`),wg()(),jc(987,`td`,20)(988,`p`)(989,`code`),iO(990,`action`),wg()()(),jc(991,`td`,21)(992,`em`)(993,`strong`),iO(994,`(opcional)`),wg()(),jc(995,`p`),iO(996,`Determina a forma de realizar a pesquisa no componente. Valores aceitos:`),wg(),jc(997,`ul`)(998,`li`)(999,`code`),iO(1e3,`action`),wg(),iO(1001,`: Realiza a busca a cada caractere digitado.`),wg(),jc(1002,`li`)(1003,`code`),iO(1004,`trigger`),wg(),iO(1005,`: Realiza a busca ao pressionar `),jc(1006,`code`),iO(1007,`enter`),wg(),iO(1008,` ou clicar no ícone de busca.`),wg(),jc(1009,`li`)(1010,`code`),iO(1011,`locate`),wg(),iO(1012,`: Modo manual. Exibe botões e contador, mas não executa buscas — controle é do desenvolvedor.`),wg(),jc(1013,`li`)(1014,`code`),iO(1015,`execute`),wg(),iO(1016,`: Executa uma ação ou realiza um redirecionamento ao selecionar um item no `),jc(1017,`code`),iO(1018,`listbox`),wg(),iO(1019,`. Para este tipo, é necessário informar as propriedades `),jc(1020,`code`),iO(1021,`action`),wg(),iO(1022,` ou `),jc(1023,`code`),iO(1024,`url`),wg(),iO(1025,` nos itens definidos em `),jc(1026,`code`),iO(1027,`p-items`),wg(),iO(1028,`.`),wg()()()()(),jc(1029,`h3`),iO(1030,`Interfaces`),wg(),jc(1031,`h4`,39)(1032,`code`,5),iO(1033,`PoSearchFilterSelect`),wg()(),jc(1034,`div`,2)(1035,`p`),iO(1036,`Interface que define as opções que serão exibidas no dropdown do `),jc(1037,`code`),iO(1038,`po-search`),wg(),iO(1039,`, ao usar a propriedade `),jc(1040,`code`),iO(1041,`p-filter-select`),wg(),iO(1042,`.`),wg()(),jc(1043,`h4`,10),iO(1044,`Propriedades`),wg(),jc(1045,`table`,11)(1046,`tr`,12)(1047,`th`,13),iO(1048,`Nome`),wg(),jc(1049,`th`,13),iO(1050,`Tipo`),wg(),jc(1051,`th`,13),iO(1052,`Descrição`),wg()(),jc(1053,`tr`,14)(1054,`td`,15)(1055,`div`,16)(1056,`span`,17),iO(1057,` label`),nu(1058,`br`),wg()()(),jc(1059,`td`,18)(1060,`code`,19),iO(1061,`string`),wg()(),jc(1062,`td`,21)(1063,`p`),iO(1064,`Descrição exibida nas opções da lista.`),wg()()(),jc(1065,`tr`,14)(1066,`td`,15)(1067,`div`,16)(1068,`span`,17),iO(1069,` value`),nu(1070,`br`),wg()()(),jc(1071,`td`,18)(1072,`code`,32),iO(1073,`Array<string> `),wg(),jc(1074,`code`,19),iO(1075,` string`),wg()(),jc(1076,`td`,21)(1077,`p`),iO(1078,`Valores que serão atribuídos ao `),jc(1079,`code`),iO(1080,`p-filter-keys`),wg()()()()(),jc(1081,`h4`,39)(1082,`code`,5),iO(1083,`PoSearchLocateSummary`),wg()(),jc(1084,`div`,2)(1085,`p`),iO(1086,`Interface que define o resumo de localização do filtro `),jc(1087,`code`),iO(1088,`p-filter-locate`),wg(),iO(1089,`.`),wg()(),jc(1090,`h4`,10),iO(1091,`Propriedades`),wg(),jc(1092,`table`,11)(1093,`tr`,12)(1094,`th`,13),iO(1095,`Nome`),wg(),jc(1096,`th`,13),iO(1097,`Tipo`),wg(),jc(1098,`th`,13),iO(1099,`Descrição`),wg()(),jc(1100,`tr`,14)(1101,`td`,15)(1102,`div`,16)(1103,`span`,17),iO(1104,` currentIndex`),nu(1105,`br`),wg()()(),jc(1106,`td`,18)(1107,`code`,40),iO(1108,`number`),wg()(),jc(1109,`td`,21)(1110,`p`),iO(1111,`Índice atual da ocorrência localizada.`),wg()()(),jc(1112,`tr`,14)(1113,`td`,15)(1114,`div`,16)(1115,`span`,17),iO(1116,` total`),nu(1117,`br`),wg()()(),jc(1118,`td`,18)(1119,`code`,40),iO(1120,`number`),wg()(),jc(1121,`td`,21)(1122,`p`),iO(1123,`Total de ocorrências encontradas.`),wg()()()(),jc(1124,`h4`,39)(1125,`code`,5),iO(1126,`PoSearchOption`),wg()(),jc(1127,`div`,2)(1128,`p`),iO(1129,`Interface que define as opções que serão exibidas na lista ao procurar do `),jc(1130,`code`),iO(1131,`po-search`),wg(),iO(1132,`.`),wg()(),jc(1133,`h4`,10),iO(1134,`Propriedades`),wg(),jc(1135,`table`,11)(1136,`tr`,12)(1137,`th`,13),iO(1138,`Nome`),wg(),jc(1139,`th`,13),iO(1140,`Tipo`),wg(),jc(1141,`th`,13),iO(1142,`Descrição`),wg()(),jc(1143,`tr`,14)(1144,`td`,15)(1145,`div`,16)(1146,`span`,17),iO(1147,` label`),nu(1148,`br`),wg()()(),jc(1149,`td`,18)(1150,`code`,19),iO(1151,`string`),wg()(),jc(1152,`td`,21)(1153,`em`)(1154,`strong`),iO(1155,`(opcional)`),wg()(),jc(1156,`p`),iO(1157,`Descrição exibida nas opções da lista.`),wg(),jc(1158,`blockquote`)(1159,`p`),iO(1160,`Caso não seja definida será assumido o valor definido na propriedade `),jc(1161,`code`),iO(1162,`value`),wg(),iO(1163,`.`),wg()()()(),jc(1164,`tr`,14)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),iO(1168,` value`),nu(1169,`br`),wg()()(),jc(1170,`td`,18)(1171,`code`,19),iO(1172,`string `),wg(),jc(1173,`code`,40),iO(1174,` number`),wg()(),jc(1175,`td`,21)(1176,`p`),iO(1177,`Valor do objeto que será atribuído ao `),jc(1178,`em`),iO(1179,`model`),wg(),iO(1180,`.`),wg()()()(),jc(1181,`h4`,39)(1182,`code`,5),iO(1183,`PoSearchLiterals`),wg()(),jc(1184,`div`,2)(1185,`p`),iO(1186,`Interface para definição das literais usadas no `),jc(1187,`code`),iO(1188,`po-search`),wg(),iO(1189,`.`),wg()(),jc(1190,`h4`,10),iO(1191,`Propriedades`),wg(),jc(1192,`table`,11)(1193,`tr`,12)(1194,`th`,13),iO(1195,`Nome`),wg(),jc(1196,`th`,13),iO(1197,`Tipo`),wg(),jc(1198,`th`,13),iO(1199,`Descrição`),wg()(),jc(1200,`tr`,14)(1201,`td`,15)(1202,`div`,16)(1203,`span`,17),iO(1204,` all`),nu(1205,`br`),wg()()(),jc(1206,`td`,18)(1207,`code`,19),iO(1208,`string`),wg()(),jc(1209,`td`,21)(1210,`em`)(1211,`strong`),iO(1212,`(opcional)`),wg()(),jc(1213,`p`),iO(1214,`Texto exibido no dropdown de tipo de filtro, representando todos os tipos disponíveis.`),wg(),jc(1215,`blockquote`)(1216,`p`),iO(1217,`Exibido apenas quando a propriedade `),jc(1218,`code`),iO(1219,`p-filter-select`),wg(),iO(1220,` estiver habilitada.`),wg()()()(),jc(1221,`tr`,14)(1222,`td`,15)(1223,`div`,16)(1224,`span`,17),iO(1225,` clean`),nu(1226,`br`),wg()()(),jc(1227,`td`,18)(1228,`code`,19),iO(1229,`string`),wg()(),jc(1230,`td`,21)(1231,`em`)(1232,`strong`),iO(1233,`(opcional)`),wg()(),jc(1234,`p`),iO(1235,`Texto alternativo (aria-label) para o botão de limpar o campo de busca, usado por leitores de tela.`),wg()()(),jc(1236,`tr`,14)(1237,`td`,15)(1238,`div`,16)(1239,`span`,17),iO(1240,` footerActionListbox`),nu(1241,`br`),wg()()(),jc(1242,`td`,18)(1243,`code`,19),iO(1244,`string`),wg()(),jc(1245,`td`,21)(1246,`em`)(1247,`strong`),iO(1248,`(opcional)`),wg()(),jc(1249,`p`),iO(1250,`Texto exibido na ação do rodapé da lista de resultados.`),wg()()(),jc(1251,`tr`,14)(1252,`td`,15)(1253,`div`,16)(1254,`span`,17),iO(1255,` next`),nu(1256,`br`),wg()()(),jc(1257,`td`,18)(1258,`code`,19),iO(1259,`string`),wg()(),jc(1260,`td`,21)(1261,`em`)(1262,`strong`),iO(1263,`(opcional)`),wg()(),jc(1264,`p`),iO(1265,`Texto alternativo (aria-label) para navegação até o próximo resultado da busca.`),wg(),jc(1266,`blockquote`)(1267,`p`),iO(1268,`Exibido apenas quando a propriedade `),jc(1269,`code`),iO(1270,`p-filter-locate`),wg(),iO(1271,` estiver habilitada.`),wg()()()(),jc(1272,`tr`,14)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),iO(1276,` of`),nu(1277,`br`),wg()()(),jc(1278,`td`,18)(1279,`code`,19),iO(1280,`string`),wg()(),jc(1281,`td`,21)(1282,`em`)(1283,`strong`),iO(1284,`(opcional)`),wg()(),jc(1285,`p`),iO(1286,`Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").`),wg(),jc(1287,`blockquote`)(1288,`p`),iO(1289,`Exibido apenas quando a propriedade `),jc(1290,`code`),iO(1291,`p-filter-locate`),wg(),iO(1292,` estiver habilitada.`),wg()()()(),jc(1293,`tr`,14)(1294,`td`,15)(1295,`div`,16)(1296,`span`,17),iO(1297,` placeholderListbox`),nu(1298,`br`),wg()()(),jc(1299,`td`,18)(1300,`code`,19),iO(1301,`string`),wg()(),jc(1302,`td`,21)(1303,`em`)(1304,`strong`),iO(1305,`(opcional)`),wg()(),jc(1306,`p`),iO(1307,`Texto exibido como `),jc(1308,`em`),iO(1309,`placeholder`),wg(),iO(1310,` na lista de resultados.`),wg()()(),jc(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),iO(1315,` previous`),nu(1316,`br`),wg()()(),jc(1317,`td`,18)(1318,`code`,19),iO(1319,`string`),wg()(),jc(1320,`td`,21)(1321,`em`)(1322,`strong`),iO(1323,`(opcional)`),wg()(),jc(1324,`p`),iO(1325,`Texto alternativo (aria-label) para navegação até o resultado anterior da busca.`),wg(),jc(1326,`blockquote`)(1327,`p`),iO(1328,`Exibido apenas quando a propriedade `),jc(1329,`code`),iO(1330,`p-filter-locate`),wg(),iO(1331,` estiver habilitada.`),wg()()()(),jc(1332,`tr`,14)(1333,`td`,15)(1334,`div`,16)(1335,`span`,17),iO(1336,` result`),nu(1337,`br`),wg()()(),jc(1338,`td`,18)(1339,`code`,19),iO(1340,`string`),wg()(),jc(1341,`td`,21)(1342,`em`)(1343,`strong`),iO(1344,`(opcional)`),wg()(),jc(1345,`p`),iO(1346,`Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.`),wg(),jc(1347,`blockquote`)(1348,`p`),iO(1349,`Exibido apenas quando a propriedade `),jc(1350,`code`),iO(1351,`p-filter-locate`),wg(),iO(1352,` estiver habilitada.`),wg()()()(),jc(1353,`tr`,14)(1354,`td`,15)(1355,`div`,16)(1356,`span`,17),iO(1357,` search`),nu(1358,`br`),wg()()(),jc(1359,`td`,18)(1360,`code`,19),iO(1361,`string`),wg()(),jc(1362,`td`,21)(1363,`em`)(1364,`strong`),iO(1365,`(opcional)`),wg()(),jc(1366,`p`),iO(1367,`Texto exibido como `),jc(1368,`em`),iO(1369,`placeholder`),wg(),iO(1370,` no campo de busca.`),wg()()()(),jc(1371,`h3`),iO(1372,`Enums`),wg(),jc(1373,`h4`,4)(1374,`code`,5),iO(1375,`PoSearchFilterMode`),wg()(),jc(1376,`div`,2)(1377,`p`),iO(1378,`Define o tipo de busca usado no `),jc(1379,`code`),iO(1380,`po-search`),wg(),iO(1381,`.`),wg()(),jc(1382,`h4`,10),iO(1383,`Propriedades`),wg(),jc(1384,`table`,11)(1385,`tr`,12)(1386,`th`,13),iO(1387,`Nome`),wg(),jc(1388,`th`,13),iO(1389,`Descrição`),wg()(),jc(1390,`tr`,14)(1391,`td`,15)(1392,`div`,16)(1393,`span`,17),iO(1394,` startsWith`),nu(1395,`br`),wg()()(),jc(1396,`td`,21)(1397,`p`),iO(1398,`Verifica se o texto `),jc(1399,`em`),iO(1400,`inicia`),wg(),iO(1401,` com o valor pesquisado.`),wg()()(),jc(1402,`tr`,14)(1403,`td`,15)(1404,`div`,16)(1405,`span`,17),iO(1406,` contains`),nu(1407,`br`),wg()()(),jc(1408,`td`,21)(1409,`p`),iO(1410,`Verifica se o texto `),jc(1411,`em`),iO(1412,`contém`),wg(),iO(1413,` o valor pesquisado.`),wg()()(),jc(1414,`tr`,14)(1415,`td`,15)(1416,`div`,16)(1417,`span`,17),iO(1418,` endsWith`),nu(1419,`br`),wg()()(),jc(1420,`td`,21)(1421,`p`),iO(1422,`Verifica se o texto `),jc(1423,`em`),iO(1424,`finaliza`),wg(),iO(1425,` com o valor pesquisado.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ot=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Search`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt$1(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-search-doc`),wg(),jc(4,`po-tab`,3),mt$1(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-search-basic-view`)(6,`sample-po-search-labs-view`)(7,`sample-po-search-find-people-view`)(8,`sample-po-search-listbox-view`)(9,`sample-po-search-filter-select-view`)(10,`sample-po-search-execute-view`)(11,`sample-po-search-fields-locate-view`),wg()()()),o&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2,changeDetection:1})}return a})()}];var Ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(Ot),C1]})}return a})();var Jn=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,Ye]})}return a})();export{Jn as DocPoSearchModule};