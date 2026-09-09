import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Br as Te,Ct as X4,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce,Ki as lo,Li as ht$1,M as Fbe,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qi as pN,Qn as DN,Qr as Xx,S as C8e,Tn as vye,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Wt as fve,X as N4,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,ca as um,dr as I,ei as Yl,fi as ag,ga as wx,gi as bL,ha as ww,jn as ybe,l as ar,la as uo,li as _x,lr as Gl,mr as JE,nt as O8e,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,sr as Fx,tr as EY,ui as a0,ut as S8e,va as yY,vi as bx,vn as tU,w as Cu,wn as vr,x as C4,xr as Lk,yi as cN,yn as ube,zi as jk}from"./main-3EWTGE7T.js";var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-basic`]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&Gl(0,`po-search`)},dependencies:[vye],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Search Basic`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-basic/sample-po-search-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-search></po-search>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-basic/sample-po-search-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-search-basic`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,$e,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,qe],encapsulation:2,changeDetection:1})}return a})();var nt=[`poSearch`];function it(a,w){if(a&1&&(Tl(0,`div`)(1,`strong`),cN(2),ag(),cN(3),ag()),a&2){let r=w.$implicit,o=Fx().$implicit;jp(2),hg(``,r,`: `),jp(),hg(` `,o[r],` \xA0 `)}}function at(a,w){if(a&1&&(Tl(0,`li`),Cx(1,it,4,2,`div`,null,wx),ag()),a&2){let r=w.$implicit,o=Fx();jp(),bx(o.changeFilter(r))}}var Be=(()=>{class a{http=f(ob);poSearch;ariaLabel;customLiterals;literals;properties=[];search=``;event=``;service=`https://po-sample-api.onrender.com/v1/heroes`;items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Cu.startsWith;searchMode=`action`;fieldKey;itemsModel;filterModel=`["name"]`;filterSelectModel;size=`medium`;customLocateSummary;locateSummary;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`showListbox`,label:`Show Listbox`},{value:`loading`,label:`Loading`}];iconsOptions=[{label:`fa-search`,value:`fa fa-search`},{label:`an-user`,value:`an an-user`},{label:`an-magnifying-glass`,value:`an an-magnifying-glass`}];filterModeOptions=[{label:`Starts With`,value:Cu.startsWith},{label:`Contains`,value:Cu.contains},{label:`Ends With`,value:Cu.endsWith}];searchModeOptions=[{label:`Action`,value:`action`},{label:`Execute`,value:`execute`},{label:`Locate`,value:`locate`},{label:`Trigger`,value:`trigger`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=[`name`])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?`p-change-model`:`p-filtered-items-change`}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??``)}catch(r){this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??``)}catch(r){this.customLocateSummary=void 0}}restore(){this.ariaLabel=``,this.search=``,this.event=``,this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel=`["name"]`,this.filterSelectModel=``,this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Cu.startsWith,this.searchMode=`action`,this.literals=void 0,this.locateSummary=void 0,this.size=`medium`,this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-labs`]],viewQuery:function(o,i){if(o&1&&Yl(nt,7),o&2){let p;lo(p=uo())&&(i.poSearch=p.first)}},standalone:!1,features:[Te],decls:32,vars:33,consts:[[`poSearch`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-blur`,`p-change-model`,`p-filtered-items-change`,`p-locate-next`,`p-locate-previous`,`p-aria-label`,`p-disabled`,`p-filter-keys`,`p-filter-type`,`p-filter-select`,`p-icon`,`p-items`,`p-literals`,`p-loading`,`p-locate-summary`,`p-search-type`,`p-show-listbox`,`p-size`],[1,`po-md-12`],[3,`p-label`],[1,`sample-list-search`,`po-md-12`,`row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`ariaLabel`,`p-label`,`Aria label`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`items`,`p-label`,`Items`,`p-help`,`Ex.: [{ "cidade": "São Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "Tóquio", "pais": "Japão" }]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`searchMode`,`p-label`,`Search Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-label`,`Filter Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locateSummary`,`p-help`,`{ "currentIndex": 1000, "total": 1000 }`,`p-label`,`Locate Summary`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"search": "Search people"}`,`p-label`,`Literals`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`Filter Keys`,`p-label`,`Filter Keys`,`p-help`,`Ex.: ["cidade", "pais"]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`Filter Select`,`p-label`,`Filter Select`,`p-help`,`Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(o,i){if(o&1){let p=Ax();Tl(0,`div`,2)(1,`po-search`,3,0),ht$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-filtered-items-change`,function(d){return i.filter(d)})(`p-locate-next`,function(){return i.changeEvent(`p-locate-next`)})(`p-locate-previous`,function(){return i.changeEvent(`p-locate-previous`)}),ag()(),Gl(3,`po-divider`),Tl(4,`div`,2)(5,`po-accordion`,4)(6,`po-accordion-item`,5)(7,`po-widget`,4)(8,`ul`,6),Cx(9,at,3,0,`li`,null,wx),ag()()()()(),Gl(11,`po-divider`),Tl(12,`div`,2),Gl(13,`po-info`,7)(14,`po-info`,8),ag(),Gl(15,`po-divider`),Tl(16,`form`,null,1)(18,`po-input`,9),ww(`ngModelChange`,function(d){return Ky(p),uN(i.ariaLabel,d)||(i.ariaLabel=d),Xy(d)}),ag(),a0(),Tl(19,`po-input`,10),ww(`ngModelChange`,function(d){return Ky(p),uN(i.itemsModel,d)||(i.itemsModel=d),Xy(d)}),ht$1(`p-change-model`,function(d){return i.changeItems(d)}),ag(),a0(),Tl(20,`po-checkbox-group`,11),ww(`ngModelChange`,function(d){return Ky(p),uN(i.properties,d)||(i.properties=d),Xy(d)}),ag(),a0(),Tl(21,`po-radio-group`,12),ww(`ngModelChange`,function(d){return Ky(p),uN(i.icon,d)||(i.icon=d),Xy(d)}),ag(),a0(),Tl(22,`po-radio-group`,13),ww(`ngModelChange`,function(d){return Ky(p),uN(i.searchMode,d)||(i.searchMode=d),Xy(d)}),ag(),a0(),Tl(23,`po-radio-group`,14),ww(`ngModelChange`,function(d){return Ky(p),uN(i.filterMode,d)||(i.filterMode=d),Xy(d)}),ag(),a0(),Tl(24,`po-radio-group`,15),ww(`ngModelChange`,function(d){return Ky(p),uN(i.size,d)||(i.size=d),Xy(d)}),ag(),a0(),Tl(25,`po-input`,16),ww(`ngModelChange`,function(d){return Ky(p),uN(i.locateSummary,d)||(i.locateSummary=d),Xy(d)}),ht$1(`p-change`,function(){return i.changeLocateSummary()}),ag(),a0(),Tl(26,`po-input`,17),ww(`ngModelChange`,function(d){return Ky(p),uN(i.literals,d)||(i.literals=d),Xy(d)}),ht$1(`p-change`,function(){return i.changeLiterals()}),ag(),a0(),Tl(27,`po-input`,18),ww(`ngModelChange`,function(d){return Ky(p),uN(i.filterModel,d)||(i.filterModel=d),Xy(d)}),ht$1(`p-change-model`,function(d){return i.updateFilterKeys(d)}),ag(),a0(),Tl(28,`po-input`,19),ww(`ngModelChange`,function(d){return Ky(p),uN(i.filterSelectModel,d)||(i.filterSelectModel=d),Xy(d)}),ht$1(`p-change`,function(d){return i.updateFilterSelect(d)}),ag(),a0(),Gl(29,`po-divider`),Tl(30,`div`,2)(31,`po-button`,20),ht$1(`p-click`,function(){return i.restore()}),ag()()()}o&2&&(jp(),nw(`p-aria-label`,i.ariaLabel)(`p-disabled`,i.properties.includes(`disabled`))(`p-filter-keys`,i.fieldKeys)(`p-filter-type`,i.filterMode)(`p-filter-select`,i.fieldSelect)(`p-icon`,i.icon)(`p-items`,i.items)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-locate-summary`,i.customLocateSummary)(`p-search-type`,i.searchMode)(`p-show-listbox`,i.properties.includes(`showListbox`))(`p-size`,i.size),jp(5),nw(`p-label`,pN(`Itens encontrados: `,i.filteredItems?.length)),jp(3),bx(i.filteredItems),jp(4),nw(`p-value`,i.search),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.ariaLabel),l0(),jp(),Ew(`ngModel`,i.itemsModel),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.icon),nw(`p-options`,i.iconsOptions),l0(),jp(),Ew(`ngModel`,i.searchMode),nw(`p-options`,i.searchModeOptions),l0(),jp(),Ew(`ngModel`,i.filterMode),nw(`p-options`,i.filterModeOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0(),jp(),Ew(`ngModel`,i.locateSummary),l0(),jp(),Ew(`ngModel`,i.literals),l0(),jp(),Ew(`ngModel`,i.filterModel),l0(),jp(),Ew(`ngModel`,i.filterSelectModel),l0())},dependencies:[yY,gY,mY,Ak,Tk,fve,C4,Zt,Xy$1,N4,iU,L0e,ybe,O8e,vye],styles:[`.sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}`],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Search Labs`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-labs/sample-po-search-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-labs/sample-po-search-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { HttpClient } from '@angular/common/http';
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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-search-labs/sample-po-search-labs.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-search-labs`),ag(),Gl(29,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,lt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Be],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function st(a,w){if(a&1&&(Tl(0,`div`,0),Gl(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),ag()),a&2){let r=w.$implicit;jp(),nw(`p-value`,r.name),jp(),nw(`p-value`,r.nickname),jp(),nw(`p-value`,r.email)}}function mt(a,w){a&1&&Gl(0,`div`)}function pt(a,w){if(a&1&&(Tl(0,`li`,7),cN(1),_x(2,mt,1,0,`div`),ag(),Tl(3,`li`,7),cN(4),ag()),a&2){let r=w.$implicit,o=Fx();jp(),hg(` Nickname: `,r.nickname,` `),jp(),Dx(o.compareObjects(r)?2:-1),jp(2),hg(`Email: `,r.email)}}var Ve=(()=>{class a{service=f(le);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-find-people`]],standalone:!1,features:[Ce([le])],decls:8,vars:3,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`],[1,`po-md-12`,`po-text-color-neutral-dark-40`]],template:function(o,i){o&1&&(Tl(0,`div`,0)(1,`po-search`,1),ht$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),ag()(),Gl(2,`po-divider`),Cx(3,st,4,3,`div`,0,wx),Gl(5,`po-divider`),Tl(6,`po-list-view`,2),JE(7,pt,5,3,`ng-template`,3),ag()),o&2&&(jp(),nw(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),jp(2),bx(i.peopleFiltered),jp(3),nw(`p-items`,i.items))},dependencies:[Xy$1,ybe,C8e,Fbe,vye],styles:[`li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}`],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-find-people-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Search Find People`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-find-people/sample-po-search-find-people.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-find-people/sample-po-search-find-people.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-search-find-people/sample-po-search-find-people.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()(),Tl(25,`po-tab`,10)(26,`div`)(27,`label`,6),cN(28,`sample-po-search-find-people/sample-po-search-find-people.component.css`),ag(),Tl(29,`pre`,11),cN(30,`li {
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
`),ag()()()()(),Tl(31,`div`,12),Gl(32,`sample-po-search-find-people`),ag(),Gl(33,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ct,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ve],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,w){if(a&1&&(Tl(0,`div`,0),Gl(1,`po-divider`)(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),ag()),a&2){let r=w.$implicit;jp(2),nw(`p-value`,r.name),jp(),nw(`p-value`,r.nickname),jp(),nw(`p-value`,r.email)}}var je=(()=>{class a{service=f(re);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-listbox`]],standalone:!1,features:[Ce([re])],decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-show-listbox`,`true`,`p-search-type`,`trigger`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(o,i){o&1&&(Tl(0,`div`,0)(1,`po-search`,1),ht$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),ag()(),Cx(2,ht,5,3,`div`,0,wx)),o&2&&(jp(),nw(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),jp(),bx(i.peopleFiltered))},dependencies:[Xy$1,ybe,vye],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-listbox-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Search With Listbox`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-listbox/sample-po-search-listbox.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-listbox/sample-po-search-listbox.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-search-listbox/sample-po-search-listbox.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-search-listbox`),ag(),Gl(27,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ft,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,je],encapsulation:2,changeDetection:1})}return a})();function Et(a,w){if(a&1&&(Tl(0,`div`,0)(1,`po-container`,2),Gl(2,`po-info`,3)(3,`po-info`,4)(4,`po-info`,5)(5,`po-info`,6),ag()()),a&2){let r=w.$implicit;jp(2),nw(`p-value`,r.name),jp(),nw(`p-value`,r.gender),jp(),nw(`p-value`,r.planet),jp(),nw(`p-value`,r.father)}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:`Personal`,value:[`name`,`gender`]},{label:`Planet`,value:[`planet`]},{label:`Family`,value:`father`}];ngOnInit(){this.items=[{name:`Anakin Skywalker`,gender:`male`,planet:`Tatooine`,father:`Darth Sidious`},{name:`Luke Skywalker`,gender:`male`,planet:`Tatooine`,father:`Anakin Skywalker`},{name:`Leia Organa`,gender:`female`,planet:`Alderaan`,father:`Anakin Skywalker`},{name:`Han Solo`,gender:`male`,planet:`Corellia`,father:`Ovan`}]}filtered(r){this.filteredItems=r}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-filter-select`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-search-type`,`trigger`,`p-show-listbox`,`true`,`p-disabled`,`false`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-select`],[1,`po-row`,`po-mt-2`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Gender`,1,`po-md-3`,3,`p-value`],[`p-label`,`Planet`,1,`po-md-3`,3,`p-value`],[`p-label`,`Father`,1,`po-md-3`,3,`p-value`]],template:function(o,i){o&1&&(Tl(0,`div`,0)(1,`po-search`,1),ht$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),ag()(),Cx(2,Et,6,4,`div`,0,wx)),o&2&&(jp(),nw(`p-items`,i.items)(`p-filter-select`,i.filterSelect),jp(),bx(i.filteredItems))},dependencies:[xp,ybe,vye],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-filter-select-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Search With Filter Select + Listbox`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-search-filter-select`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,vt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Re],encapsulation:2,changeDetection:1})}return a})();var Ke=(()=>{class a{poModal;filterType=Cu.contains;filterKeysAction=[`rotina`,`codigo`,`modulo`,`versao`];keysLabel=[`rotina`,`codigo`];itemsAction=[{rotina:`Contas a Pagar`,codigo:`MATA103`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Contas a Pagar`)},{rotina:`Cotação de Fornecedores`,codigo:`MATA140`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Cotação de Fornecedores`)},{rotina:`Meus Funcionarios`,codigo:`XPTO987`,modulo:`RH`,versao:`1.2.3`,url:`documentation/po-widget`}];columns=[{property:`rotina`,label:`Rotina`},{property:`codigo`,label:`Código`},{property:`modulo`,label:`Módulo`},{property:`versao`,label:`Versão`}];footerAction(){this.poModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-execute`]],viewQuery:function(o,i){if(o&1&&Yl(vr,7),o&2){let p;lo(p=uo())&&(i.poModal=p.first)}},standalone:!1,decls:10,vars:9,consts:[[`modal`,``],[1,`po-row`],[`p-title`,`Pesquisar e executar`,`p-help`,`https://github.com/po-ui/po-angular/stargazers`,1,`po-lg-6`,`po-mt-2`,3,`p-height`],[`name`,`Po Search`,1,`po-mt-2`,`full`,3,`p-footer-action-listbox`,`p-search-type`,`p-items`,`p-filter-type`,`p-filter-keys`,`p-keys-label`],[`p-title`,`Rotinas`],[3,`p-columns`,`p-items`,`p-hide-columns-manager`]],template:function(o,i){o&1&&(Tl(0,`div`,1)(1,`po-widget`,2)(2,`div`,1)(3,`span`),cN(4,`Entre com o nome ou código da rotina`),ag()(),Tl(5,`div`,1)(6,`po-search`,3),ht$1(`p-footer-action-listbox`,function(){return i.footerAction()}),ag()()()(),Tl(7,`po-modal`,4,0),Gl(9,`po-table`,5),ag()),o&2&&(jp(),nw(`p-height`,180),jp(5),nw(`p-search-type`,`execute`)(`p-items`,i.itemsAction)(`p-filter-type`,i.filterType)(`p-filter-keys`,i.filterKeysAction)(`p-keys-label`,i.keysLabel),jp(3),nw(`p-columns`,i.columns)(`p-items`,i.itemsAction)(`p-hide-columns-manager`,!0))},dependencies:[vr,X4,O8e,vye],styles:[`.full[_ngcontent-%COMP%]{width:100%}`],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-execute-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Search Form Fields with Execute`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-execute/sample-po-search-execute.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-execute/sample-po-search-execute.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-search-execute/sample-po-search-execute.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.full {
  width: 100%;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-search-execute`),ag(),Gl(29,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ct,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ke],encapsulation:2,changeDetection:1})}return a})();var _t=[`nameInput`];var Mt=[`cpfInput`];var wt=[`addressInput`];var It=[`numberInput`];var Tt=[`emailInput`];var kt=[`websiteInput`];var Ft=[`reactiveFormData`];var Ue=(()=>{class a{fb=f(EY);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=Cu.endsWith;searchLiterals={search:`Buscar campos`};modalPrimaryAction={label:`Close`,action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:`Customer name`,index:0,focus:()=>this.nameInput.focus()},{label:`CPF`,index:1,focus:()=>this.cpfInput.focus()},{label:`Address`,index:2,focus:()=>this.addressInput.focus()},{label:`Number`,index:3,focus:()=>this.numberInput.focus()},{label:`Email`,index:4,focus:()=>this.emailInput.focus()},{label:`Website`,index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:[``,[um.required,um.minLength(5)]],cpf:[``,um.required],address:[``,um.required],number:[``,um.required],email:[``,um.required],website:[``,um.required]})}updateSearchTerm(r){console.log(`updateSearchTerm`);let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log(`onNextOccurrenceClick`),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log(`onPreviousOccurrenceClick`),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-fields-locate`]],viewQuery:function(o,i){if(o&1&&Yl(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;lo(p=uo())&&(i.nameInput=p.first),lo(p=uo())&&(i.cpfInput=p.first),lo(p=uo())&&(i.addressInput=p.first),lo(p=uo())&&(i.numberInput=p.first),lo(p=uo())&&(i.emailInput=p.first),lo(p=uo())&&(i.websiteInput=p.first),lo(p=uo())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[[`nameInput`,``],[`cpfInput`,``],[`addressInput`,``],[`numberInput`,``],[`emailInput`,``],[`websiteInput`,``],[`reactiveFormData`,``],[1,`po-row`],[1,`po-ml-1`,`po-mr-1`],[`p-search-type`,`locate`,3,`p-change-model`,`p-locate-next`,`p-locate-previous`,`p-literals`,`p-locate-summary`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-9`],[`formControlName`,`cpf`,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-lg-6`,3,`p-value`],[`p-label`,`CPF`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Address`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Number`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Email`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Website`,1,`po-lg-6`,3,`p-value`]],template:function(o,i){o&1&&(Tl(0,`div`,7)(1,`div`,8)(2,`po-search`,9),ht$1(`p-change-model`,function(h){return i.updateSearchTerm(h)})(`p-locate-next`,function(){return i.onNextOccurrenceClick()})(`p-locate-previous`,function(){return i.onPreviousOccurrenceClick()}),ag()()(),Gl(3,`po-divider`),Tl(4,`form`,10)(5,`div`,7),Gl(6,`po-input`,11,0),a0(),Gl(8,`po-input`,12,1),a0(),ag(),Tl(10,`div`,7),Gl(11,`po-input`,13,2),a0(),Gl(13,`po-number`,14,3),a0(),ag(),Tl(15,`div`,7),Gl(16,`po-email`,15,4),a0(),Gl(18,`po-url`,16,5),a0(),ag(),Tl(20,`div`,7)(21,`po-button`,17),ht$1(`p-click`,function(){return i.saveForm()}),ag()()(),Tl(22,`po-modal`,18,6)(24,`div`,7),Gl(25,`po-info`,19)(26,`po-info`,20),ag(),Gl(27,`po-divider`),Tl(28,`div`,7),Gl(29,`po-info`,21)(30,`po-info`,22),ag(),Gl(31,`po-divider`),Tl(32,`div`,7),Gl(33,`po-info`,23)(34,`po-info`,24),ag()()),o&2&&(jp(2),nw(`p-literals`,i.searchLiterals)(`p-locate-summary`,i.locateSummary),jp(2),nw(`formGroup`,i.reactiveForm),jp(2),l0(),jp(2),l0(),jp(3),l0(),jp(2),l0(),jp(3),l0(),jp(2),l0(),jp(3),nw(`p-disabled`,!i.reactiveForm.valid),jp(),nw(`p-primary-action`,i.modalPrimaryAction),jp(3),nw(`p-value`,i.reactiveForm.controls.name.value),jp(),nw(`p-value`,i.reactiveForm.controls.cpf.value),jp(3),nw(`p-value`,i.reactiveForm.controls.address.value),jp(),nw(`p-value`,i.reactiveForm.controls.number.value),jp(3),nw(`p-value`,i.reactiveForm.controls.email.value),jp(),nw(`p-value`,i.reactiveForm.controls.website.value))},dependencies:[yY,gY,mY,jk,Lk,Zt,Xy$1,qH,iU,ube,tU,ybe,vr,vye],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a});var Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-fields-locate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Search Form Fields with Locate`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-search-fields-locate`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Lt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ue],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-search-doc`]],standalone:!1,decls:1426,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterSelect[]`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLocateSummary`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`searchMode`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,i){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoSearchModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-search.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoSearchComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente search, também conhecido como barra de pesquisa, é utilizado para ajudar os usuários a localizar um determinado conteúdo.`),ag(),Tl(15,`p`),cN(16,`Normalmente localizado no canto superior direito, junto com o ícone de lupa, uma vez que este ícone é amplamente reconhecido.`),ag(),Tl(17,`h4`),cN(18,`Boas práticas`),ag(),Tl(19,`p`),cN(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),ag(),Tl(21,`ul`)(22,`li`),cN(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),ag(),Tl(24,`li`),cN(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),ag(),Tl(26,`li`),cN(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),ag(),Tl(28,`li`),cN(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),ag(),Tl(30,`li`),cN(31,`Quando apropriado, destaque os termos da busca nos resultados.`),ag(),Tl(32,`li`),cN(33,`A entrada do campo de pesquisa deve caber em uma linha. Não use entradas de pesquisa de várias linhas.`),ag(),Tl(34,`li`),cN(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),ag(),Tl(36,`li`),cN(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),ag()(),Tl(38,`h4`),cN(39,`Acessibilidade tratada no componente`),ag(),Tl(40,`p`),cN(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),ag(),Tl(42,`ul`)(43,`li`),cN(44,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),ag(),Tl(45,`li`),cN(46,`Alteração entre os estados precisa ser indicada por mais de um elemento além da cor (1.4.1: Use of Color);`),ag()(),Tl(47,`h4`),cN(48,`Tokens customizáveis`),ag(),Tl(49,`p`),cN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(51,`blockquote`)(52,`p`),cN(53,`Para maiores informações, acesse o guia `),Tl(54,`a`,6),cN(55,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(56,`.`),ag()(),Tl(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),cN(61,`Propriedade`),ag(),Tl(62,`th`),cN(63,`Descrição`),ag(),Tl(64,`th`),cN(65,`Valor Padrão`),ag()()(),Tl(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),cN(70,`Default Values`),ag()(),Gl(71,`td`)(72,`td`),ag(),Tl(73,`tr`)(74,`td`)(75,`code`),cN(76,`--font-family`),ag()(),Tl(77,`td`),cN(78,`Família tipográfica do campo`),ag(),Tl(79,`td`)(80,`code`),cN(81,`var(--font-family-theme)`),ag()()(),Tl(82,`tr`)(83,`td`)(84,`code`),cN(85,`--font-size`),ag()(),Tl(86,`td`),cN(87,`Tamanho da fonte do campo`),ag(),Tl(88,`td`)(89,`code`),cN(90,`var(--font-size-default)`),ag()()(),Tl(91,`tr`)(92,`td`)(93,`code`),cN(94,`--text-color-placeholder`),ag()(),Tl(95,`td`),cN(96,`Cor do texto no placeholder`),ag(),Tl(97,`td`)(98,`code`),cN(99,`var(--color-neutral-light-30)`),ag()()(),Tl(100,`tr`)(101,`td`)(102,`code`),cN(103,`--color`),ag()(),Tl(104,`td`),cN(105,`Cor das bordas`),ag(),Tl(106,`td`)(107,`code`),cN(108,`var(--color-neutral-dark-70)`),ag()()(),Tl(109,`tr`)(110,`td`)(111,`code`),cN(112,`--border-radius`),ag()(),Tl(113,`td`),cN(114,`Raio das bordas`),ag(),Tl(115,`td`)(116,`code`),cN(117,`var(--border-radius-md)`),ag()()(),Tl(118,`tr`)(119,`td`)(120,`code`),cN(121,`--background`),ag()(),Tl(122,`td`),cN(123,`Cor de background`),ag(),Tl(124,`td`)(125,`code`),cN(126,`var(--color-neutral-light-05)`),ag()()(),Tl(127,`tr`)(128,`td`)(129,`code`),cN(130,`--text-color`),ag()(),Tl(131,`td`),cN(132,`Cor do texto editável`),ag(),Tl(133,`td`)(134,`code`),cN(135,`var(--color-neutral-dark-90)`),ag()()(),Tl(136,`tr`)(137,`td`)(138,`code`),cN(139,`--color-clear`),ag()(),Tl(140,`td`),cN(141,`Cor do ícone close`),ag(),Tl(142,`td`)(143,`code`),cN(144,`var(--color-action-default)`),ag()()(),Tl(145,`tr`)(146,`td`)(147,`code`),cN(148,`--color-controls`),ag()(),Tl(149,`td`),cN(150,`Cor dos ícones de controle do mode location`),ag(),Tl(151,`td`)(152,`code`),cN(153,`var(--color-action-default)`),ag()()(),Tl(154,`tr`)(155,`td`)(156,`code`),cN(157,`--transition-property`),ag()(),Tl(158,`td`),cN(159,`Atributo da transição`),ag(),Tl(160,`td`)(161,`code`),cN(162,`all`),ag()()(),Tl(163,`tr`)(164,`td`)(165,`code`),cN(166,`--transition-duration`),ag()(),Tl(167,`td`),cN(168,`Duração da transição`),ag(),Tl(169,`td`)(170,`code`),cN(171,`var(--duration-extra-fast)`),ag()()(),Tl(172,`tr`)(173,`td`)(174,`code`),cN(175,`--transition-timing`),ag()(),Tl(176,`td`),cN(177,`Duração da transição com o tipo de transição`),ag(),Tl(178,`td`)(179,`code`),cN(180,`var(--timing-standart)`),ag()()(),Tl(181,`tr`)(182,`td`)(183,`strong`),cN(184,`Icon`),ag()(),Gl(185,`td`)(186,`td`),ag(),Tl(187,`tr`)(188,`td`)(189,`code`),cN(190,`--color-icon-read`),ag()(),Tl(191,`td`),cN(192,`Cor do ícone de busca no modo action`),ag(),Tl(193,`td`)(194,`code`),cN(195,`var(--color-neutral-dark-70)`),ag()()(),Tl(196,`tr`)(197,`td`)(198,`code`),cN(199,`--color-icon`),ag()(),Tl(200,`td`),cN(201,`Cor do ícone de busca no modo trigger`),ag(),Tl(202,`td`)(203,`code`),cN(204,`var(--color-action-default)`),ag()()(),Tl(205,`tr`)(206,`td`)(207,`strong`),cN(208,`Hover`),ag()(),Gl(209,`td`)(210,`td`),ag(),Tl(211,`tr`)(212,`td`)(213,`code`),cN(214,`--color-hover`),ag()(),Tl(215,`td`),cN(216,`Cor das bordas no estado hover`),ag(),Tl(217,`td`)(218,`code`),cN(219,`var(--color-action-hover)`),ag()()(),Tl(220,`tr`)(221,`td`)(222,`code`),cN(223,`--background-hover`),ag()(),Tl(224,`td`),cN(225,`Cor de background no estado hover`),ag(),Tl(226,`td`)(227,`code`),cN(228,`var(--color-brand-01-lightest)`),ag()()(),Tl(229,`tr`)(230,`td`)(231,`strong`),cN(232,`Focused`),ag()(),Gl(233,`td`)(234,`td`),ag(),Tl(235,`tr`)(236,`td`)(237,`code`),cN(238,`--color-focused`),ag()(),Tl(239,`td`),cN(240,`Cor das bordas no estado de focus`),ag(),Tl(241,`td`)(242,`code`),cN(243,`var(--color-action-default)`),ag()()(),Tl(244,`tr`)(245,`td`)(246,`code`),cN(247,`--outline-color-focused`),ag()(),Tl(248,`td`),cN(249,`Cor do outline no estado de focus`),ag(),Tl(250,`td`)(251,`code`),cN(252,`var(--color-action-focus)`),ag()()(),Tl(253,`tr`)(254,`td`)(255,`strong`),cN(256,`Disabled`),ag()(),Gl(257,`td`)(258,`td`),ag(),Tl(259,`tr`)(260,`td`)(261,`code`),cN(262,`--color-disabled`),ag()(),Tl(263,`td`),cN(264,`Cor principal no estado disabled`),ag(),Tl(265,`td`)(266,`code`),cN(267,`var(--color-action-disabled)`),ag()()(),Tl(268,`tr`)(269,`td`)(270,`code`),cN(271,`--background-disabled`),ag()(),Tl(272,`td`),cN(273,`Cor de background no estado disabled`),ag(),Tl(274,`td`)(275,`code`),cN(276,`var(--color-neutral-light-20)`),ag()()()()()(),Tl(277,`div`,7)(278,`h4`,8),cN(279,`Seletor`),ag(),Tl(280,`pre`,9),cN(281,`<po-search
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
`),ag()(),Tl(282,`h4`,10),cN(283,`Propriedades`),ag(),Tl(284,`table`,11)(285,`tr`,12)(286,`th`,13),cN(287,`Nome`),ag(),Tl(288,`th`,13),cN(289,`Tipo`),ag(),Tl(290,`th`,13),cN(291,`Padrão`),ag(),Tl(292,`th`,13),cN(293,`Descrição`),ag()(),Tl(294,`tr`,14)(295,`td`,15)(296,`div`,16)(297,`span`,17),cN(298,` p-aria-label`),Gl(299,`br`),ag()()(),Tl(300,`td`,18)(301,`code`,19),cN(302,`string`),ag()(),Tl(303,`td`,20),cN(304,`-`),ag(),Tl(305,`td`,21)(306,`em`)(307,`strong`),cN(308,`(opcional)`),ag()(),Tl(309,`p`),cN(310,`Define um aria-label para o po-search.`),ag(),Tl(311,`blockquote`)(312,`p`),cN(313,`Devido o componente não possuir uma label assim como outros campos de texto, o `),Tl(314,`code`),cN(315,`aria-label`),ag(),cN(316,` \xE9 utilizado para
acessibilidade.`),ag()()()(),Tl(317,`tr`,14)(318,`td`,15)(319,`div`,22)(320,`span`,23),cN(321,` (p-blur)`),Gl(322,`br`),ag()()(),Tl(323,`td`,18)(324,`code`,24),cN(325,`EventEmitter`),ag()(),Tl(326,`td`,20),cN(327,`-`),ag(),Tl(328,`td`,21)(329,`em`)(330,`strong`),cN(331,`(opcional)`),ag()(),Tl(332,`p`),cN(333,`Evento disparado ao sair do campo.`),ag()()(),Tl(334,`tr`,14)(335,`td`,15)(336,`div`,22)(337,`span`,23),cN(338,` (p-change-model)`),Gl(339,`br`),ag()()(),Tl(340,`td`,18)(341,`code`,24),cN(342,`EventEmitter`),ag()(),Tl(343,`td`,20),cN(344,`-`),ag(),Tl(345,`td`,21)(346,`em`)(347,`strong`),cN(348,`(opcional)`),ag()(),Tl(349,`p`),cN(350,`Evento disparado ao alterar valor do model.`),ag()()(),Tl(351,`tr`,14)(352,`td`,15)(353,`div`,16)(354,`span`,17),cN(355,` p-disabled`),Gl(356,`br`),ag()()(),Tl(357,`td`,18)(358,`code`,25),cN(359,`boolean`),ag()(),Tl(360,`td`,20)(361,`p`)(362,`code`),cN(363,`false`),ag()()(),Tl(364,`td`,21)(365,`em`)(366,`strong`),cN(367,`(opcional)`),ag()(),Tl(368,`p`),cN(369,`Desabilita o po-search e não permite que o usuário interaja com o mesmo.`),ag()()(),Tl(370,`tr`,14)(371,`td`,15)(372,`div`,22)(373,`span`,23),cN(374,` (p-filter)`),Gl(375,`br`),ag()()(),Tl(376,`td`,18)(377,`code`,24),cN(378,`EventEmitter`),ag()(),Tl(379,`td`,20),cN(380,`-`),ag(),Tl(381,`td`,21)(382,`em`)(383,`strong`),cN(384,`(opcional)`),ag()(),Tl(385,`p`),cN(386,`Pode ser informada uma função que será disparada quando houver alterações nos filtros.`),ag(),Tl(387,`blockquote`)(388,`p`),cN(389,`Incompatível com a propriedade `),Tl(390,`code`),cN(391,`p-search-type`),ag(),cN(392,` do tipo `),Tl(393,`code`),cN(394,`locate`),ag(),cN(395,`.`),ag()()()(),Tl(396,`tr`,14)(397,`td`,15)(398,`div`,16)(399,`span`,17),cN(400,` p-filter-keys`),Gl(401,`br`),ag()()(),Tl(402,`td`,18)(403,`code`,26),cN(404,`Array<any>`),ag()(),Tl(405,`td`,20),cN(406,`-`),ag(),Tl(407,`td`,21)(408,`p`),cN(409,`Define os nomes das propriedades do objeto que serão utilizados para busca em `),Tl(410,`code`),cN(411,`p-items`),ag(),cN(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),ag(),Tl(413,`pre`)(414,`code`,27),cN(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),ag()(),Tl(416,`blockquote`)(417,`p`),cN(418,`Esta propriedade é ignorada quando utilizado com `),Tl(419,`code`),cN(420,`p-filter-select`),ag(),cN(421,` e incompat\xEDvel com a propriedade
`),Tl(422,`code`),cN(423,`p-search-type`),ag(),cN(424,` do tipo `),Tl(425,`code`),cN(426,`locate`),ag(),cN(427,`.`),ag()()()(),Tl(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),cN(432,` p-filter-select`),Gl(433,`br`),ag()()(),Tl(434,`td`,18)(435,`code`,28),cN(436,`PoSearchFilterSelect[]`),ag()(),Tl(437,`td`,20),cN(438,`-`),ag(),Tl(439,`td`,21)(440,`p`),cN(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Tl(442,`code`),cN(443,`p-items`),ag(),cN(444,`. Automaticamente adiciona a opção `),Tl(445,`strong`),cN(446,`Todos`),ag(),cN(447,`, com um mapeamento de todas as opções passadas.`),ag(),Tl(448,`p`),cN(449,`Exemplo de uso:`),ag(),Tl(450,`pre`)(451,`code`,27),cN(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),ag()(),Tl(453,`blockquote`)(454,`p`),cN(455,`Ao ser habilitada, a propriedade `),Tl(456,`code`),cN(457,`p-filter-keys`),ag(),cN(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Tl(459,`code`),cN(460,`p-search-type`),ag(),cN(461,` do tipo `),Tl(462,`code`),cN(463,`locate`),ag(),cN(464,`.`),ag()()()(),Tl(465,`tr`,14)(466,`td`,15)(467,`div`,16)(468,`span`,17),cN(469,` p-filter-type`),Gl(470,`br`),ag()()(),Tl(471,`td`,18)(472,`code`,29),cN(473,`PoSearchFilterMode`),ag()(),Tl(474,`td`,20)(475,`p`)(476,`code`),cN(477,`startsWith`),ag()()(),Tl(478,`td`,21)(479,`em`)(480,`strong`),cN(481,`(opcional)`),ag()(),Tl(482,`p`),cN(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Tl(484,`strong`),cN(485,`PoSearchFilterMode`),ag(),cN(486,`.`),ag(),Tl(487,`blockquote`)(488,`p`),cN(489,`Incompatível com a propriedade `),Tl(490,`code`),cN(491,`p-search-type`),ag(),cN(492,` do tipo `),Tl(493,`code`),cN(494,`locate`),ag(),cN(495,`.`),ag()()()(),Tl(496,`tr`,14)(497,`td`,15)(498,`div`,22)(499,`span`,23),cN(500,` (p-filtered-items-change)`),Gl(501,`br`),ag()()(),Tl(502,`td`,18)(503,`code`,24),cN(504,`EventEmitter`),ag()(),Tl(505,`td`,20),cN(506,`-`),ag(),Tl(507,`td`,21)(508,`em`)(509,`strong`),cN(510,`(opcional)`),ag()(),Tl(511,`p`),cN(512,`Pode ser informada uma função que será disparada quando houver alterações no input.`),ag(),Tl(513,`blockquote`)(514,`p`),cN(515,`Incompatível com a propriedade `),Tl(516,`code`),cN(517,`p-search-type`),ag(),cN(518,` do tipo `),Tl(519,`code`),cN(520,`locate`),ag(),cN(521,`.`),ag()()()(),Tl(522,`tr`,14)(523,`td`,15)(524,`div`,22)(525,`span`,23),cN(526,` (p-focus)`),Gl(527,`br`),ag()()(),Tl(528,`td`,18)(529,`code`,24),cN(530,`EventEmitter`),ag()(),Tl(531,`td`,20),cN(532,`-`),ag(),Tl(533,`td`,21)(534,`em`)(535,`strong`),cN(536,`(opcional)`),ag()(),Tl(537,`p`),cN(538,`Evento emitido quando o campo de entrada (input) recebe foco.`),ag()()(),Tl(539,`tr`,14)(540,`td`,15)(541,`div`,22)(542,`span`,23),cN(543,` (p-footer-action-listbox)`),Gl(544,`br`),ag()()(),Tl(545,`td`,18)(546,`code`,24),cN(547,`EventEmitter`),ag()(),Tl(548,`td`,20),cN(549,`-`),ag(),Tl(550,`td`,21)(551,`em`)(552,`strong`),cN(553,`(opcional)`),ag()(),Tl(554,`p`),cN(555,`Evento disparado ao clicar no botão de ação exibido no rodapé do `),Tl(556,`code`),cN(557,`listbox`),ag(),cN(558,`.
O texto exibido pode ser configurado por meio do literal `),Tl(559,`code`),cN(560,`footerActionListbox`),ag(),cN(561,`.`),ag()()(),Tl(562,`tr`,14)(563,`td`,15)(564,`div`,16)(565,`span`,17),cN(566,` p-icon`),Gl(567,`br`),ag()()(),Tl(568,`td`,18)(569,`code`,19),cN(570,`string `),ag(),Tl(571,`code`,30),cN(572,` TemplateRef<void>`),ag()(),Tl(573,`td`,20),cN(574,`-`),ag(),Tl(575,`td`,21)(576,`em`)(577,`strong`),cN(578,`(opcional)`),ag()(),Tl(579,`p`),cN(580,`Permite customizar o ícone de busca que acompanha o campo.`),ag(),Tl(581,`p`),cN(582,`É possível usar qualquer um dos ícones da `),Tl(583,`a`,31),cN(584,`Biblioteca de ícones PO UI`),ag(),cN(585,`, conforme exemplo:`),ag(),Tl(586,`pre`)(587,`code`),cN(588,`<po-search p-icon="an an-user"></po-search>
`),ag()(),Tl(589,`p`),cN(590,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(591,`em`),cN(592,`Font Awesome`),ag(),cN(593,`, desde que a biblioteca
esteja carregada no projeto:`),ag(),Tl(594,`pre`)(595,`code`),cN(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),ag()(),Tl(597,`p`),cN(598,`Outra opção seria a customização do ícone através do `),Tl(599,`code`),cN(600,`TemplateRef`),ag(),cN(601,`, conforme exemplo abaixo:`),ag(),Tl(602,`pre`)(603,`code`),cN(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),ag()()()(),Tl(605,`tr`,14)(606,`td`,15)(607,`div`,16)(608,`span`,17),cN(609,` p-items`),Gl(610,`br`),ag()()(),Tl(611,`td`,18)(612,`code`,26),cN(613,`Array<any>`),ag()(),Tl(614,`td`,20),cN(615,`-`),ag(),Tl(616,`td`,21)(617,`em`)(618,`strong`),cN(619,`(opcional)`),ag()(),Tl(620,`p`),cN(621,`Lista de itens que serão utilizados para pesquisa.`),ag(),Tl(622,`blockquote`)(623,`p`),cN(624,`Incompatível com a propriedade `),Tl(625,`code`),cN(626,`p-search-type`),ag(),cN(627,` do tipo `),Tl(628,`code`),cN(629,`locate`),ag(),cN(630,`.`),ag()()()(),Tl(631,`tr`,14)(632,`td`,15)(633,`div`,22)(634,`span`,23),cN(635,` (p-keydown)`),Gl(636,`br`),ag()()(),Tl(637,`td`,18)(638,`code`,24),cN(639,`EventEmitter`),ag()(),Tl(640,`td`,20),cN(641,`-`),ag(),Tl(642,`td`,21)(643,`em`)(644,`strong`),cN(645,`(opcional)`),ag()(),Tl(646,`p`),cN(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(648,`code`),cN(649,`KeyboardEvent`),ag(),cN(650,` com informações sobre a tecla.`),ag()()(),Tl(651,`tr`,14)(652,`td`,15)(653,`div`,16)(654,`span`,17),cN(655,` p-keys-label`),Gl(656,`br`),ag()()(),Tl(657,`td`,18)(658,`code`,32),cN(659,`Array<string>`),ag()(),Tl(660,`td`,20),cN(661,`-`),ag(),Tl(662,`td`,21)(663,`em`)(664,`strong`),cN(665,`(opcional)`),ag()(),Tl(666,`p`),cN(667,`Define os nomes das propriedades do objeto que serão exibidos como rótulos (labels) no `),Tl(668,`code`),cN(669,`listbox`),ag(),cN(670,` quando a propriedade
`),Tl(671,`code`),cN(672,`p-show-listbox`),ag(),cN(673,` estiver habilitada.`),ag(),Tl(674,`p`),cN(675,`Deve ser informado um array de strings contendo até `),Tl(676,`strong`),cN(677,`3 propriedades`),ag(),cN(678,`.`),ag(),Tl(679,`p`),cN(680,`Exemplo de uso:`),ag(),Tl(681,`pre`)(682,`code`,33),cN(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),ag()()()(),Tl(684,`tr`,14)(685,`td`,15)(686,`div`,22)(687,`span`,23),cN(688,` (p-listbox-onclick)`),Gl(689,`br`),ag()()(),Tl(690,`td`,18)(691,`code`,24),cN(692,`EventEmitter`),ag()(),Tl(693,`td`,20),cN(694,`-`),ag(),Tl(695,`td`,21)(696,`em`)(697,`strong`),cN(698,`(opcional)`),ag()(),Tl(699,`p`),cN(700,`Pode ser informada uma função que será disparada quando houver click no listbox.`),ag(),Tl(701,`blockquote`)(702,`p`),cN(703,`Incompatível com a propriedade `),Tl(704,`code`),cN(705,`p-search-type`),ag(),cN(706,` do tipo `),Tl(707,`code`),cN(708,`locate`),ag(),cN(709,`.`),ag()()()(),Tl(710,`tr`,14)(711,`td`,15)(712,`div`,16)(713,`span`,17),cN(714,` p-literals`),Gl(715,`br`),ag()()(),Tl(716,`td`,18)(717,`code`,34),cN(718,`PoSearchLiterals`),ag()(),Tl(719,`td`,20),cN(720,`-`),ag(),Tl(721,`td`,21)(722,`em`)(723,`strong`),cN(724,`(opcional)`),ag()(),Tl(725,`p`),cN(726,`Objeto com as literais usadas no `),Tl(727,`code`),cN(728,`po-search`),ag(),cN(729,`, permitindo personalizar os textos exibidos no componente.`),ag(),Tl(730,`p`),cN(731,`Para utilizar basta passar a literal que deseja customizar:`),ag(),Tl(732,`pre`)(733,`code`),cN(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),ag()(),Tl(735,`p`),cN(736,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),ag(),Tl(737,`pre`)(738,`code`),cN(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),ag()(),Tl(740,`blockquote`)(741,`p`),cN(742,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Tl(743,`a`,35)(744,`code`),cN(745,`PoI18nService`),ag()(),cN(746,` ou
do browser.`),ag()()()(),Tl(747,`tr`,14)(748,`td`,15)(749,`div`,16)(750,`span`,17),cN(751,` p-loading`),Gl(752,`br`),ag()()(),Tl(753,`td`,18)(754,`code`,25),cN(755,`boolean`),ag()(),Tl(756,`td`,20)(757,`p`)(758,`code`),cN(759,`false`),ag()()(),Tl(760,`td`,21)(761,`em`)(762,`strong`),cN(763,`(opcional)`),ag()(),Tl(764,`p`),cN(765,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag(),Tl(766,`blockquote`)(767,`p`),cN(768,`Incompatível com a propriedade `),Tl(769,`code`),cN(770,`p-search-type`),ag(),cN(771,` do tipo `),Tl(772,`code`),cN(773,`locate`),ag(),cN(774,`.`),ag()()()(),Tl(775,`tr`,14)(776,`td`,15)(777,`div`,22)(778,`span`,23),cN(779,` (p-locate-next)`),Gl(780,`br`),ag()()(),Tl(781,`td`,18)(782,`code`,24),cN(783,`EventEmitter`),ag()(),Tl(784,`td`,20),cN(785,`-`),ag(),Tl(786,`td`,21)(787,`em`)(788,`strong`),cN(789,`(opcional)`),ag()(),Tl(790,`p`),cN(791,`Evento disparado ao clicar no controle "Próximo resultado".`),ag(),Tl(792,`blockquote`)(793,`p`),cN(794,`Compatível com a propriedade `),Tl(795,`code`),cN(796,`p-search-type`),ag(),cN(797,` do tipo `),Tl(798,`code`),cN(799,`locate`),ag(),cN(800,`.`),ag()()()(),Tl(801,`tr`,14)(802,`td`,15)(803,`div`,22)(804,`span`,23),cN(805,` (p-locate-previous)`),Gl(806,`br`),ag()()(),Tl(807,`td`,18)(808,`code`,24),cN(809,`EventEmitter`),ag()(),Tl(810,`td`,20),cN(811,`-`),ag(),Tl(812,`td`,21)(813,`em`)(814,`strong`),cN(815,`(opcional)`),ag()(),Tl(816,`p`),cN(817,`Evento disparado ao clicar no controle "Resultado anterior".`),ag(),Tl(818,`blockquote`)(819,`p`),cN(820,`Compatível com a propriedade `),Tl(821,`code`),cN(822,`p-search-type`),ag(),cN(823,` do tipo `),Tl(824,`code`),cN(825,`locate`),ag(),cN(826,`.`),ag()()()(),Tl(827,`tr`,14)(828,`td`,15)(829,`div`,16)(830,`span`,17),cN(831,` p-locate-summary`),Gl(832,`br`),ag()()(),Tl(833,`td`,18)(834,`code`,36),cN(835,`PoSearchLocateSummary`),ag()(),Tl(836,`td`,20),cN(837,`-`),ag(),Tl(838,`td`,21)(839,`em`)(840,`strong`),cN(841,`(opcional)`),ag()(),Tl(842,`p`),cN(843,`Define os valores do contador exibido ao usar a propriedade `),Tl(844,`code`),cN(845,`p-search-type`),ag(),cN(846,` do tipo `),Tl(847,`code`),cN(848,`locate`),ag(),cN(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),ag(),Tl(850,`pre`)(851,`code`,33),cN(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),ag()(),Tl(853,`blockquote`)(854,`p`),cN(855,`Compatível com a propriedade `),Tl(856,`code`),cN(857,`p-search-type`),ag(),cN(858,` do tipo `),Tl(859,`code`),cN(860,`locate`),ag(),cN(861,`.`),ag()()()(),Tl(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),cN(866,` name`),Gl(867,`br`),ag()()(),Tl(868,`td`,18)(869,`code`,19),cN(870,`string`),ag()(),Tl(871,`td`,20),cN(872,`-`),ag(),Tl(873,`td`,21)(874,`em`)(875,`strong`),cN(876,`(opcional)`),ag()(),Tl(877,`p`),cN(878,`Nome e identificador do campo.`),ag()()(),Tl(879,`tr`,14)(880,`td`,15)(881,`div`,16)(882,`span`,17),cN(883,` p-no-autocomplete`),Gl(884,`br`),ag()()(),Tl(885,`td`,18)(886,`code`,25),cN(887,`boolean`),ag()(),Tl(888,`td`,20)(889,`p`)(890,`code`),cN(891,`false`),ag()()(),Tl(892,`td`,21)(893,`em`)(894,`strong`),cN(895,`(opcional)`),ag()(),Tl(896,`p`),cN(897,`Define a propriedade nativa `),Tl(898,`code`),cN(899,`autocomplete`),ag(),cN(900,` do campo como `),Tl(901,`code`),cN(902,`off`),ag(),cN(903,`.`),ag()()(),Tl(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),cN(908,` p-show-listbox`),Gl(909,`br`),ag()()(),Tl(910,`td`,18)(911,`code`,25),cN(912,`boolean`),ag()(),Tl(913,`td`,20)(914,`p`)(915,`code`),cN(916,`false`),ag()()(),Tl(917,`td`,21)(918,`em`)(919,`strong`),cN(920,`(opcional)`),ag()(),Tl(921,`p`),cN(922,`Exibe uma lista (auto-complete) com as opções definidas em `),Tl(923,`code`),cN(924,`p-filter-keys`),ag(),cN(925,` ou `),Tl(926,`code`),cN(927,`p-filter-select`),ag(),cN(928,` enquanto realiza
uma busca, respeitando o `),Tl(929,`code`),cN(930,`p-filter-type`),ag(),cN(931,` como modo de pesquisa.`),ag(),Tl(932,`blockquote`)(933,`p`),cN(934,`Incompatível com a propriedade `),Tl(935,`code`),cN(936,`p-search-type`),ag(),cN(937,` do tipo `),Tl(938,`code`),cN(939,`locate`),ag(),cN(940,`.`),ag()()()(),Tl(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),cN(945,` p-size`),Gl(946,`br`),ag()()(),Tl(947,`td`,18)(948,`code`,19),cN(949,`string`),ag()(),Tl(950,`td`,20)(951,`p`)(952,`code`),cN(953,`medium`),ag()()(),Tl(954,`td`,21)(955,`em`)(956,`strong`),cN(957,`(opcional)`),ag()(),Tl(958,`p`),cN(959,`Define o tamanho do componente:`),ag(),Tl(960,`ul`)(961,`li`)(962,`code`),cN(963,`small`),ag(),cN(964,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(965,`li`)(966,`code`),cN(967,`medium`),ag(),cN(968,`: altura do input como 44px.`),ag()(),Tl(969,`blockquote`)(970,`p`),cN(971,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(972,`code`),cN(973,`medium`),ag(),cN(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(975,`a`,37),cN(976,`po-theme`),ag(),cN(977,`.`),ag()()()(),Tl(978,`tr`,14)(979,`td`,15)(980,`div`,16)(981,`span`,17),cN(982,` p-search-type`),Gl(983,`br`),ag()()(),Tl(984,`td`,18)(985,`code`,38),cN(986,`searchMode`),ag()(),Tl(987,`td`,20)(988,`p`)(989,`code`),cN(990,`action`),ag()()(),Tl(991,`td`,21)(992,`em`)(993,`strong`),cN(994,`(opcional)`),ag()(),Tl(995,`p`),cN(996,`Determina a forma de realizar a pesquisa no componente. Valores aceitos:`),ag(),Tl(997,`ul`)(998,`li`)(999,`code`),cN(1e3,`action`),ag(),cN(1001,`: Realiza a busca a cada caractere digitado.`),ag(),Tl(1002,`li`)(1003,`code`),cN(1004,`trigger`),ag(),cN(1005,`: Realiza a busca ao pressionar `),Tl(1006,`code`),cN(1007,`enter`),ag(),cN(1008,` ou clicar no ícone de busca.`),ag(),Tl(1009,`li`)(1010,`code`),cN(1011,`locate`),ag(),cN(1012,`: Modo manual. Exibe botões e contador, mas não executa buscas — controle é do desenvolvedor.`),ag(),Tl(1013,`li`)(1014,`code`),cN(1015,`execute`),ag(),cN(1016,`: Executa uma ação ou realiza um redirecionamento ao selecionar um item no `),Tl(1017,`code`),cN(1018,`listbox`),ag(),cN(1019,`. Para este tipo, é necessário informar as propriedades `),Tl(1020,`code`),cN(1021,`action`),ag(),cN(1022,` ou `),Tl(1023,`code`),cN(1024,`url`),ag(),cN(1025,` nos itens definidos em `),Tl(1026,`code`),cN(1027,`p-items`),ag(),cN(1028,`.`),ag()()()()(),Tl(1029,`h3`),cN(1030,`Interfaces`),ag(),Tl(1031,`h4`,39)(1032,`code`,5),cN(1033,`PoSearchFilterSelect`),ag()(),Tl(1034,`div`,2)(1035,`p`),cN(1036,`Interface que define as opções que serão exibidas no dropdown do `),Tl(1037,`code`),cN(1038,`po-search`),ag(),cN(1039,`, ao usar a propriedade `),Tl(1040,`code`),cN(1041,`p-filter-select`),ag(),cN(1042,`.`),ag()(),Tl(1043,`h4`,10),cN(1044,`Propriedades`),ag(),Tl(1045,`table`,11)(1046,`tr`,12)(1047,`th`,13),cN(1048,`Nome`),ag(),Tl(1049,`th`,13),cN(1050,`Tipo`),ag(),Tl(1051,`th`,13),cN(1052,`Descrição`),ag()(),Tl(1053,`tr`,14)(1054,`td`,15)(1055,`div`,16)(1056,`span`,17),cN(1057,` label`),Gl(1058,`br`),ag()()(),Tl(1059,`td`,18)(1060,`code`,19),cN(1061,`string`),ag()(),Tl(1062,`td`,21)(1063,`p`),cN(1064,`Descrição exibida nas opções da lista.`),ag()()(),Tl(1065,`tr`,14)(1066,`td`,15)(1067,`div`,16)(1068,`span`,17),cN(1069,` value`),Gl(1070,`br`),ag()()(),Tl(1071,`td`,18)(1072,`code`,32),cN(1073,`Array<string> `),ag(),Tl(1074,`code`,19),cN(1075,` string`),ag()(),Tl(1076,`td`,21)(1077,`p`),cN(1078,`Valores que serão atribuídos ao `),Tl(1079,`code`),cN(1080,`p-filter-keys`),ag()()()()(),Tl(1081,`h4`,39)(1082,`code`,5),cN(1083,`PoSearchLocateSummary`),ag()(),Tl(1084,`div`,2)(1085,`p`),cN(1086,`Interface que define o resumo de localização do filtro `),Tl(1087,`code`),cN(1088,`p-filter-locate`),ag(),cN(1089,`.`),ag()(),Tl(1090,`h4`,10),cN(1091,`Propriedades`),ag(),Tl(1092,`table`,11)(1093,`tr`,12)(1094,`th`,13),cN(1095,`Nome`),ag(),Tl(1096,`th`,13),cN(1097,`Tipo`),ag(),Tl(1098,`th`,13),cN(1099,`Descrição`),ag()(),Tl(1100,`tr`,14)(1101,`td`,15)(1102,`div`,16)(1103,`span`,17),cN(1104,` currentIndex`),Gl(1105,`br`),ag()()(),Tl(1106,`td`,18)(1107,`code`,40),cN(1108,`number`),ag()(),Tl(1109,`td`,21)(1110,`p`),cN(1111,`Índice atual da ocorrência localizada.`),ag()()(),Tl(1112,`tr`,14)(1113,`td`,15)(1114,`div`,16)(1115,`span`,17),cN(1116,` total`),Gl(1117,`br`),ag()()(),Tl(1118,`td`,18)(1119,`code`,40),cN(1120,`number`),ag()(),Tl(1121,`td`,21)(1122,`p`),cN(1123,`Total de ocorrências encontradas.`),ag()()()(),Tl(1124,`h4`,39)(1125,`code`,5),cN(1126,`PoSearchOption`),ag()(),Tl(1127,`div`,2)(1128,`p`),cN(1129,`Interface que define as opções que serão exibidas na lista ao procurar do `),Tl(1130,`code`),cN(1131,`po-search`),ag(),cN(1132,`.`),ag()(),Tl(1133,`h4`,10),cN(1134,`Propriedades`),ag(),Tl(1135,`table`,11)(1136,`tr`,12)(1137,`th`,13),cN(1138,`Nome`),ag(),Tl(1139,`th`,13),cN(1140,`Tipo`),ag(),Tl(1141,`th`,13),cN(1142,`Descrição`),ag()(),Tl(1143,`tr`,14)(1144,`td`,15)(1145,`div`,16)(1146,`span`,17),cN(1147,` label`),Gl(1148,`br`),ag()()(),Tl(1149,`td`,18)(1150,`code`,19),cN(1151,`string`),ag()(),Tl(1152,`td`,21)(1153,`em`)(1154,`strong`),cN(1155,`(opcional)`),ag()(),Tl(1156,`p`),cN(1157,`Descrição exibida nas opções da lista.`),ag(),Tl(1158,`blockquote`)(1159,`p`),cN(1160,`Caso não seja definida será assumido o valor definido na propriedade `),Tl(1161,`code`),cN(1162,`value`),ag(),cN(1163,`.`),ag()()()(),Tl(1164,`tr`,14)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),cN(1168,` value`),Gl(1169,`br`),ag()()(),Tl(1170,`td`,18)(1171,`code`,19),cN(1172,`string `),ag(),Tl(1173,`code`,40),cN(1174,` number`),ag()(),Tl(1175,`td`,21)(1176,`p`),cN(1177,`Valor do objeto que será atribuído ao `),Tl(1178,`em`),cN(1179,`model`),ag(),cN(1180,`.`),ag()()()(),Tl(1181,`h4`,39)(1182,`code`,5),cN(1183,`PoSearchLiterals`),ag()(),Tl(1184,`div`,2)(1185,`p`),cN(1186,`Interface para definição das literais usadas no `),Tl(1187,`code`),cN(1188,`po-search`),ag(),cN(1189,`.`),ag()(),Tl(1190,`h4`,10),cN(1191,`Propriedades`),ag(),Tl(1192,`table`,11)(1193,`tr`,12)(1194,`th`,13),cN(1195,`Nome`),ag(),Tl(1196,`th`,13),cN(1197,`Tipo`),ag(),Tl(1198,`th`,13),cN(1199,`Descrição`),ag()(),Tl(1200,`tr`,14)(1201,`td`,15)(1202,`div`,16)(1203,`span`,17),cN(1204,` all`),Gl(1205,`br`),ag()()(),Tl(1206,`td`,18)(1207,`code`,19),cN(1208,`string`),ag()(),Tl(1209,`td`,21)(1210,`em`)(1211,`strong`),cN(1212,`(opcional)`),ag()(),Tl(1213,`p`),cN(1214,`Texto exibido no dropdown de tipo de filtro, representando todos os tipos disponíveis.`),ag(),Tl(1215,`blockquote`)(1216,`p`),cN(1217,`Exibido apenas quando a propriedade `),Tl(1218,`code`),cN(1219,`p-filter-select`),ag(),cN(1220,` estiver habilitada.`),ag()()()(),Tl(1221,`tr`,14)(1222,`td`,15)(1223,`div`,16)(1224,`span`,17),cN(1225,` clean`),Gl(1226,`br`),ag()()(),Tl(1227,`td`,18)(1228,`code`,19),cN(1229,`string`),ag()(),Tl(1230,`td`,21)(1231,`em`)(1232,`strong`),cN(1233,`(opcional)`),ag()(),Tl(1234,`p`),cN(1235,`Texto alternativo (aria-label) para o botão de limpar o campo de busca, usado por leitores de tela.`),ag()()(),Tl(1236,`tr`,14)(1237,`td`,15)(1238,`div`,16)(1239,`span`,17),cN(1240,` footerActionListbox`),Gl(1241,`br`),ag()()(),Tl(1242,`td`,18)(1243,`code`,19),cN(1244,`string`),ag()(),Tl(1245,`td`,21)(1246,`em`)(1247,`strong`),cN(1248,`(opcional)`),ag()(),Tl(1249,`p`),cN(1250,`Texto exibido na ação do rodapé da lista de resultados.`),ag()()(),Tl(1251,`tr`,14)(1252,`td`,15)(1253,`div`,16)(1254,`span`,17),cN(1255,` next`),Gl(1256,`br`),ag()()(),Tl(1257,`td`,18)(1258,`code`,19),cN(1259,`string`),ag()(),Tl(1260,`td`,21)(1261,`em`)(1262,`strong`),cN(1263,`(opcional)`),ag()(),Tl(1264,`p`),cN(1265,`Texto alternativo (aria-label) para navegação até o próximo resultado da busca.`),ag(),Tl(1266,`blockquote`)(1267,`p`),cN(1268,`Exibido apenas quando a propriedade `),Tl(1269,`code`),cN(1270,`p-filter-locate`),ag(),cN(1271,` estiver habilitada.`),ag()()()(),Tl(1272,`tr`,14)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),cN(1276,` of`),Gl(1277,`br`),ag()()(),Tl(1278,`td`,18)(1279,`code`,19),cN(1280,`string`),ag()(),Tl(1281,`td`,21)(1282,`em`)(1283,`strong`),cN(1284,`(opcional)`),ag()(),Tl(1285,`p`),cN(1286,`Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").`),ag(),Tl(1287,`blockquote`)(1288,`p`),cN(1289,`Exibido apenas quando a propriedade `),Tl(1290,`code`),cN(1291,`p-filter-locate`),ag(),cN(1292,` estiver habilitada.`),ag()()()(),Tl(1293,`tr`,14)(1294,`td`,15)(1295,`div`,16)(1296,`span`,17),cN(1297,` placeholderListbox`),Gl(1298,`br`),ag()()(),Tl(1299,`td`,18)(1300,`code`,19),cN(1301,`string`),ag()(),Tl(1302,`td`,21)(1303,`em`)(1304,`strong`),cN(1305,`(opcional)`),ag()(),Tl(1306,`p`),cN(1307,`Texto exibido como `),Tl(1308,`em`),cN(1309,`placeholder`),ag(),cN(1310,` na lista de resultados.`),ag()()(),Tl(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),cN(1315,` previous`),Gl(1316,`br`),ag()()(),Tl(1317,`td`,18)(1318,`code`,19),cN(1319,`string`),ag()(),Tl(1320,`td`,21)(1321,`em`)(1322,`strong`),cN(1323,`(opcional)`),ag()(),Tl(1324,`p`),cN(1325,`Texto alternativo (aria-label) para navegação até o resultado anterior da busca.`),ag(),Tl(1326,`blockquote`)(1327,`p`),cN(1328,`Exibido apenas quando a propriedade `),Tl(1329,`code`),cN(1330,`p-filter-locate`),ag(),cN(1331,` estiver habilitada.`),ag()()()(),Tl(1332,`tr`,14)(1333,`td`,15)(1334,`div`,16)(1335,`span`,17),cN(1336,` result`),Gl(1337,`br`),ag()()(),Tl(1338,`td`,18)(1339,`code`,19),cN(1340,`string`),ag()(),Tl(1341,`td`,21)(1342,`em`)(1343,`strong`),cN(1344,`(opcional)`),ag()(),Tl(1345,`p`),cN(1346,`Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.`),ag(),Tl(1347,`blockquote`)(1348,`p`),cN(1349,`Exibido apenas quando a propriedade `),Tl(1350,`code`),cN(1351,`p-filter-locate`),ag(),cN(1352,` estiver habilitada.`),ag()()()(),Tl(1353,`tr`,14)(1354,`td`,15)(1355,`div`,16)(1356,`span`,17),cN(1357,` search`),Gl(1358,`br`),ag()()(),Tl(1359,`td`,18)(1360,`code`,19),cN(1361,`string`),ag()(),Tl(1362,`td`,21)(1363,`em`)(1364,`strong`),cN(1365,`(opcional)`),ag()(),Tl(1366,`p`),cN(1367,`Texto exibido como `),Tl(1368,`em`),cN(1369,`placeholder`),ag(),cN(1370,` no campo de busca.`),ag()()()(),Tl(1371,`h3`),cN(1372,`Enums`),ag(),Tl(1373,`h4`,4)(1374,`code`,5),cN(1375,`PoSearchFilterMode`),ag()(),Tl(1376,`div`,2)(1377,`p`),cN(1378,`Define o tipo de busca usado no `),Tl(1379,`code`),cN(1380,`po-search`),ag(),cN(1381,`.`),ag()(),Tl(1382,`h4`,10),cN(1383,`Propriedades`),ag(),Tl(1384,`table`,11)(1385,`tr`,12)(1386,`th`,13),cN(1387,`Nome`),ag(),Tl(1388,`th`,13),cN(1389,`Descrição`),ag()(),Tl(1390,`tr`,14)(1391,`td`,15)(1392,`div`,16)(1393,`span`,17),cN(1394,` startsWith`),Gl(1395,`br`),ag()()(),Tl(1396,`td`,21)(1397,`p`),cN(1398,`Verifica se o texto `),Tl(1399,`em`),cN(1400,`inicia`),ag(),cN(1401,` com o valor pesquisado.`),ag()()(),Tl(1402,`tr`,14)(1403,`td`,15)(1404,`div`,16)(1405,`span`,17),cN(1406,` contains`),Gl(1407,`br`),ag()()(),Tl(1408,`td`,21)(1409,`p`),cN(1410,`Verifica se o texto `),Tl(1411,`em`),cN(1412,`contém`),ag(),cN(1413,` o valor pesquisado.`),ag()()(),Tl(1414,`tr`,14)(1415,`td`,15)(1416,`div`,16)(1417,`span`,17),cN(1418,` endsWith`),Gl(1419,`br`),ag()()(),Tl(1420,`td`,21)(1421,`p`),cN(1422,`Verifica se o texto `),Tl(1423,`em`),cN(1424,`finaliza`),ag(),cN(1425,` com o valor pesquisado.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ot=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Search`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-search-doc`),ag(),Tl(4,`po-tab`,3),ht$1(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-search-basic-view`)(6,`sample-po-search-labs-view`)(7,`sample-po-search-find-people-view`)(8,`sample-po-search-listbox-view`)(9,`sample-po-search-filter-select-view`)(10,`sample-po-search-execute-view`)(11,`sample-po-search-fields-locate-view`),ag()()()),o&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2,changeDetection:1})}return a})()}];var Ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(Ot),bL]})}return a})();var Jn=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ye]})}return a})();export{Jn as DocPoSearchModule};