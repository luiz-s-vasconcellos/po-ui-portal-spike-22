import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,r as rb,dw as Up,w,cM as nY,cN as lm,aL as ehe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht$1,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,a_ as lpe,a$ as r3,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,c9 as Qhe,ba as bNe,ap as Te,aB as Ex,aQ as px,aR as hx,aM as Ew,aN as JA,br as oN,aS as gx,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,Y as sNe,_ as ume,a2 as QE,X as we,aI as dc,b6 as Yo,b7 as A3,cQ as Rk,cR as Tk,cz as Ez,cp as Uhe,cX as O3,a3 as pNe,aA as Tx,aq as ux,at as dx,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic"]],standalone:false,decls:1,vars:0,template:function(o,i){o&1&&Wl(0,"po-search");},dependencies:[ehe],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Search Basic"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-search-basic/sample-po-search-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-search></po-search>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-search-basic"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,$e,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,qe],encapsulation:2})}return a})();var nt=["poSearch"];function it(a,w){if(a&1&&(Sl(0,"div")(1,"strong"),Jx(2),sg(),Jx(3),sg()),a&2){let r=w.$implicit,o=Tx().$implicit;Vp(2),fg("",r,": "),Vp(),fg(" ",o[r]," \xA0 ");}}function at(a,w){if(a&1&&(Sl(0,"li"),px(1,it,4,2,"div",null,hx),sg()),a&2){let r=w.$implicit,o=Tx();Vp(),gx(o.changeFilter(r));}}var Be=(()=>{class a{http=f(rb);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Up.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"},{value:"loading",label:"Loading"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Execute",value:"execute"},{label:"Locate",value:"locate"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}ngOnChanges(r){r.items&&(this.filteredItems=this.items);}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"]);});}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r);}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r);}filter(r){this.filteredItems=r,this.event=r.length===0?"p-change-model":"p-filtered-items-change";}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o);}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"");}catch(r){this.customLiterals=void 0;}}changeEvent(r){setTimeout(()=>{this.event=r;});}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"");}catch(r){this.customLocateSummary=void 0;}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Up.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService();}cleanInput(){try{this.poSearch.clearSearch();}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&ql(nt,7),o&2){let p;lo(p=uo())&&(i.poSearch=p.first);}},standalone:false,features:[Te],decls:32,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-loading","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=Ex();Sl(0,"div",2)(1,"po-search",3,0),ht$1("p-blur",function(){return i.changeEvent("p-blur")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-filtered-items-change",function(d){return i.filter(d)})("p-locate-next",function(){return i.changeEvent("p-locate-next")})("p-locate-previous",function(){return i.changeEvent("p-locate-previous")}),sg()(),Wl(3,"po-divider"),Sl(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),px(9,at,3,0,"li",null,hx),sg()()()()(),Wl(11,"po-divider"),Sl(12,"div",2),Wl(13,"po-info",7)(14,"po-info",8),sg(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"po-input",9),Ew("ngModelChange",function(d){return Xy(p),tN(i.ariaLabel,d)||(i.ariaLabel=d),Qy(d)}),sg(),JA(),Sl(19,"po-input",10),Ew("ngModelChange",function(d){return Xy(p),tN(i.itemsModel,d)||(i.itemsModel=d),Qy(d)}),ht$1("p-change-model",function(d){return i.changeItems(d)}),sg(),JA(),Sl(20,"po-checkbox-group",11),Ew("ngModelChange",function(d){return Xy(p),tN(i.properties,d)||(i.properties=d),Qy(d)}),sg(),JA(),Sl(21,"po-radio-group",12),Ew("ngModelChange",function(d){return Xy(p),tN(i.icon,d)||(i.icon=d),Qy(d)}),sg(),JA(),Sl(22,"po-radio-group",13),Ew("ngModelChange",function(d){return Xy(p),tN(i.searchMode,d)||(i.searchMode=d),Qy(d)}),sg(),JA(),Sl(23,"po-radio-group",14),Ew("ngModelChange",function(d){return Xy(p),tN(i.filterMode,d)||(i.filterMode=d),Qy(d)}),sg(),JA(),Sl(24,"po-radio-group",15),Ew("ngModelChange",function(d){return Xy(p),tN(i.size,d)||(i.size=d),Qy(d)}),sg(),JA(),Sl(25,"po-input",16),Ew("ngModelChange",function(d){return Xy(p),tN(i.locateSummary,d)||(i.locateSummary=d),Qy(d)}),ht$1("p-change",function(){return i.changeLocateSummary()}),sg(),JA(),Sl(26,"po-input",17),Ew("ngModelChange",function(d){return Xy(p),tN(i.literals,d)||(i.literals=d),Qy(d)}),ht$1("p-change",function(){return i.changeLiterals()}),sg(),JA(),Sl(27,"po-input",18),Ew("ngModelChange",function(d){return Xy(p),tN(i.filterModel,d)||(i.filterModel=d),Qy(d)}),ht$1("p-change-model",function(d){return i.updateFilterKeys(d)}),sg(),JA(),Sl(28,"po-input",19),Ew("ngModelChange",function(d){return Xy(p),tN(i.filterSelectModel,d)||(i.filterSelectModel=d),Qy(d)}),ht$1("p-change",function(d){return i.updateFilterSelect(d)}),sg(),JA(),Wl(29,"po-divider"),Sl(30,"div",2)(31,"po-button",20),ht$1("p-click",function(){return i.restore()}),sg()()();}o&2&&(Vp(),tw("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),Vp(5),tw("p-label",oN("Itens encontrados: ",i.filteredItems?.length)),Vp(3),gx(i.filteredItems),Vp(4),tw("p-value",i.search),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.ariaLabel),t0(),Vp(),Dw("ngModel",i.itemsModel),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconsOptions),t0(),Vp(),Dw("ngModel",i.searchMode),tw("p-options",i.searchModeOptions),t0(),Vp(),Dw("ngModel",i.filterMode),tw("p-options",i.filterModeOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0(),Vp(),Dw("ngModel",i.locateSummary),t0(),Vp(),Dw("ngModel",i.literals),t0(),Vp(),Dw("ngModel",i.filterModel),t0(),Vp(),Dw("ngModel",i.filterSelectModel),t0());},dependencies:[J9,K9,X9,Dk,vk,lpe,r3,Qt,mv,x3,F3,Pde,Qhe,bNe,ehe],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Search Labs"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-search-labs/sample-po-search-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { HttpClient } from '@angular/common/http';
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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-search-labs/sample-po-search-labs.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-search-labs"),sg(),Wl(29,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,lt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Be],encapsulation:2})}return a})();var le=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function st(a,w){if(a&1&&(Sl(0,"div",0),Wl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),sg()),a&2){let r=w.$implicit;Vp(),tw("p-value",r.name),Vp(),tw("p-value",r.nickname),Vp(),tw("p-value",r.email);}}function mt(a,w){a&1&&Wl(0,"div");}function pt(a,w){if(a&1&&(Sl(0,"li",7),Jx(1),ux(2,mt,1,0,"div"),sg(),Sl(3,"li",7),Jx(4),sg()),a&2){let r=w.$implicit,o=Tx();Vp(),fg(" Nickname: ",r.nickname," "),Vp(),dx(o.compareObjects(r)?2:-1),Vp(2),fg("Email: ",r.email);}}var Ve=(()=>{class a{service=f(le);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people"]],standalone:false,features:[we([le])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"po-search",1),ht$1("p-filtered-items-change",function(h){return i.filtered(h)}),sg()(),Wl(2,"po-divider"),px(3,st,4,3,"div",0,hx),Wl(5,"po-divider"),Sl(6,"po-list-view",2),QE(7,pt,5,3,"ng-template",3),sg()),o&2&&(Vp(),tw("p-items",i.items)("p-filter-keys",i.filterKeys),Vp(2),gx(i.peopleFiltered),Vp(3),tw("p-items",i.items));},dependencies:[mv,Qhe,sNe,ume,ehe],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Search Find People"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),Jx(28,"sample-po-search-find-people/sample-po-search-find-people.component.css"),sg(),Sl(29,"pre",11),Jx(30,`li {
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
`),sg()()()()(),Sl(31,"div",12),Wl(32,"sample-po-search-find-people"),sg(),Wl(33,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ct,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ve],encapsulation:2})}return a})();var re=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ht(a,w){if(a&1&&(Sl(0,"div",0),Wl(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),sg()),a&2){let r=w.$implicit;Vp(2),tw("p-value",r.name),Vp(),tw("p-value",r.nickname),Vp(),tw("p-value",r.email);}}var je=(()=>{class a{service=f(re);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox"]],standalone:false,features:[we([re])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"po-search",1),ht$1("p-filtered-items-change",function(h){return i.filtered(h)}),sg()(),px(2,ht,5,3,"div",0,hx)),o&2&&(Vp(),tw("p-items",i.items)("p-filter-keys",i.filterKeys),Vp(),gx(i.peopleFiltered));},dependencies:[mv,Qhe,ehe],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Search With Listbox"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-search-listbox"),sg(),Wl(27,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ft,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,je],encapsulation:2})}return a})();function Et(a,w){if(a&1&&(Sl(0,"div",0)(1,"po-container",2),Wl(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),sg()()),a&2){let r=w.$implicit;Vp(2),tw("p-value",r.name),Vp(),tw("p-value",r.gender),Vp(),tw("p-value",r.planet),Vp(),tw("p-value",r.father);}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}];}filtered(r){this.filteredItems=r;}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select"]],standalone:false,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"po-search",1),ht$1("p-filtered-items-change",function(h){return i.filtered(h)}),sg()(),px(2,Et,6,4,"div",0,hx)),o&2&&(Vp(),tw("p-items",i.items)("p-filter-select",i.filterSelect),Vp(),gx(i.filteredItems));},dependencies:[dc,Qhe,ehe],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Search With Filter Select + Listbox"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-search-filter-select"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,vt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Re],encapsulation:2})}return a})();var Ke=(()=>{class a{poModal;filterType=Up.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&ql(Yo,7),o&2){let p;lo(p=uo())&&(i.poModal=p.first);}},standalone:false,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){o&1&&(Sl(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),Jx(4,"Entre com o nome ou c\xF3digo da rotina"),sg()(),Sl(5,"div",1)(6,"po-search",3),ht$1("p-footer-action-listbox",function(){return i.footerAction()}),sg()()()(),Sl(7,"po-modal",4,0),Wl(9,"po-table",5),sg()),o&2&&(Vp(),tw("p-height",180),Vp(5),tw("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),Vp(3),tw("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",true));},dependencies:[Yo,A3,bNe,ehe],styles:[".full[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Search Form Fields with Execute"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-search-execute/sample-po-search-execute.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-search-execute/sample-po-search-execute.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.full {
  width: 100%;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-search-execute"),sg(),Wl(29,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ct,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ke],encapsulation:2})}return a})();var _t=["nameInput"],Mt=["cpfInput"],wt=["addressInput"],It=["numberInput"],Tt=["emailInput"],kt=["websiteInput"],Ft=["reactiveFormData"],Ue=(()=>{class a{fb=f(nY);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=true;locateSummary={currentIndex:0,total:0};filterType=Up.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm();}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}];}createForm(){this.reactiveForm=this.fb.group({name:["",[lm.required,lm.minLength(5)]],cpf:["",lm.required],address:["",lm.required],number:["",lm.required],email:["",lm.required],website:["",lm.required]});}updateSearchTerm(r){console.log("updateSearchTerm");let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i};}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent();}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent();}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary());}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary());}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r};}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus());}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&ql(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;lo(p=uo())&&(i.nameInput=p.first),lo(p=uo())&&(i.cpfInput=p.first),lo(p=uo())&&(i.addressInput=p.first),lo(p=uo())&&(i.numberInput=p.first),lo(p=uo())&&(i.emailInput=p.first),lo(p=uo())&&(i.websiteInput=p.first),lo(p=uo())&&(i.reactiveFormModal=p.first);}},standalone:false,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){o&1&&(Sl(0,"div",7)(1,"div",8)(2,"po-search",9),ht$1("p-change-model",function(h){return i.updateSearchTerm(h)})("p-locate-next",function(){return i.onNextOccurrenceClick()})("p-locate-previous",function(){return i.onPreviousOccurrenceClick()}),sg()()(),Wl(3,"po-divider"),Sl(4,"form",10)(5,"div",7),Wl(6,"po-input",11,0),JA(),Wl(8,"po-input",12,1),JA(),sg(),Sl(10,"div",7),Wl(11,"po-input",13,2),JA(),Wl(13,"po-number",14,3),JA(),sg(),Sl(15,"div",7),Wl(16,"po-email",15,4),JA(),Wl(18,"po-url",16,5),JA(),sg(),Sl(20,"div",7)(21,"po-button",17),ht$1("p-click",function(){return i.saveForm()}),sg()()(),Sl(22,"po-modal",18,6)(24,"div",7),Wl(25,"po-info",19)(26,"po-info",20),sg(),Wl(27,"po-divider"),Sl(28,"div",7),Wl(29,"po-info",21)(30,"po-info",22),sg(),Wl(31,"po-divider"),Sl(32,"div",7),Wl(33,"po-info",23)(34,"po-info",24),sg()()),o&2&&(Vp(2),tw("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),Vp(2),tw("formGroup",i.reactiveForm),Vp(2),t0(),Vp(2),t0(),Vp(3),t0(),Vp(2),t0(),Vp(3),t0(),Vp(2),t0(),Vp(3),tw("p-disabled",!i.reactiveForm.valid),Vp(),tw("p-primary-action",i.modalPrimaryAction),Vp(3),tw("p-value",i.reactiveForm.controls.name.value),Vp(),tw("p-value",i.reactiveForm.controls.cpf.value),Vp(3),tw("p-value",i.reactiveForm.controls.address.value),Vp(),tw("p-value",i.reactiveForm.controls.number.value),Vp(3),tw("p-value",i.reactiveForm.controls.email.value),Vp(),tw("p-value",i.reactiveForm.controls.website.value));},dependencies:[J9,K9,X9,Rk,Tk,Qt,mv,Ez,F3,Uhe,O3,Qhe,Yo,ehe],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Search Form Fields with Locate"),sg(),Sl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-search-fields-locate"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Lt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ue],encapsulation:2})}return a})();var Qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-doc"]],standalone:false,decls:1426,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoSearchModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-search."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoSearchComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),sg(),Sl(15,"p"),Jx(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),sg(),Sl(17,"h4"),Jx(18,"Boas pr\xE1ticas"),sg(),Sl(19,"p"),Jx(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),sg(),Sl(21,"ul")(22,"li"),Jx(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),sg(),Sl(24,"li"),Jx(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),sg(),Sl(26,"li"),Jx(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),sg(),Sl(28,"li"),Jx(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),sg(),Sl(30,"li"),Jx(31,"Quando apropriado, destaque os termos da busca nos resultados."),sg(),Sl(32,"li"),Jx(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),sg(),Sl(34,"li"),Jx(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),sg(),Sl(36,"li"),Jx(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),sg()(),Sl(38,"h4"),Jx(39,"Acessibilidade tratada no componente"),sg(),Sl(40,"p"),Jx(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),sg(),Sl(42,"ul")(43,"li"),Jx(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),sg(),Sl(45,"li"),Jx(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),sg()(),Sl(47,"h4"),Jx(48,"Tokens customiz\xE1veis"),sg(),Sl(49,"p"),Jx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(51,"blockquote")(52,"p"),Jx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(54,"a",6),Jx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(56,"."),sg()(),Sl(57,"table")(58,"thead")(59,"tr")(60,"th"),Jx(61,"Propriedade"),sg(),Sl(62,"th"),Jx(63,"Descri\xE7\xE3o"),sg(),Sl(64,"th"),Jx(65,"Valor Padr\xE3o"),sg()()(),Sl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Jx(70,"Default Values"),sg()(),Wl(71,"td")(72,"td"),sg(),Sl(73,"tr")(74,"td")(75,"code"),Jx(76,"--font-family"),sg()(),Sl(77,"td"),Jx(78,"Fam\xEDlia tipogr\xE1fica do campo"),sg(),Sl(79,"td")(80,"code"),Jx(81,"var(--font-family-theme)"),sg()()(),Sl(82,"tr")(83,"td")(84,"code"),Jx(85,"--font-size"),sg()(),Sl(86,"td"),Jx(87,"Tamanho da fonte do campo"),sg(),Sl(88,"td")(89,"code"),Jx(90,"var(--font-size-default)"),sg()()(),Sl(91,"tr")(92,"td")(93,"code"),Jx(94,"--text-color-placeholder"),sg()(),Sl(95,"td"),Jx(96,"Cor do texto no placeholder"),sg(),Sl(97,"td")(98,"code"),Jx(99,"var(--color-neutral-light-30)"),sg()()(),Sl(100,"tr")(101,"td")(102,"code"),Jx(103,"--color"),sg()(),Sl(104,"td"),Jx(105,"Cor das bordas"),sg(),Sl(106,"td")(107,"code"),Jx(108,"var(--color-neutral-dark-70)"),sg()()(),Sl(109,"tr")(110,"td")(111,"code"),Jx(112,"--border-radius"),sg()(),Sl(113,"td"),Jx(114,"Raio das bordas"),sg(),Sl(115,"td")(116,"code"),Jx(117,"var(--border-radius-md)"),sg()()(),Sl(118,"tr")(119,"td")(120,"code"),Jx(121,"--background"),sg()(),Sl(122,"td"),Jx(123,"Cor de background"),sg(),Sl(124,"td")(125,"code"),Jx(126,"var(--color-neutral-light-05)"),sg()()(),Sl(127,"tr")(128,"td")(129,"code"),Jx(130,"--text-color"),sg()(),Sl(131,"td"),Jx(132,"Cor do texto edit\xE1vel"),sg(),Sl(133,"td")(134,"code"),Jx(135,"var(--color-neutral-dark-90)"),sg()()(),Sl(136,"tr")(137,"td")(138,"code"),Jx(139,"--color-clear"),sg()(),Sl(140,"td"),Jx(141,"Cor do \xEDcone close"),sg(),Sl(142,"td")(143,"code"),Jx(144,"var(--color-action-default)"),sg()()(),Sl(145,"tr")(146,"td")(147,"code"),Jx(148,"--color-controls"),sg()(),Sl(149,"td"),Jx(150,"Cor dos \xEDcones de controle do mode location"),sg(),Sl(151,"td")(152,"code"),Jx(153,"var(--color-action-default)"),sg()()(),Sl(154,"tr")(155,"td")(156,"code"),Jx(157,"--transition-property"),sg()(),Sl(158,"td"),Jx(159,"Atributo da transi\xE7\xE3o"),sg(),Sl(160,"td")(161,"code"),Jx(162,"all"),sg()()(),Sl(163,"tr")(164,"td")(165,"code"),Jx(166,"--transition-duration"),sg()(),Sl(167,"td"),Jx(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),sg(),Sl(169,"td")(170,"code"),Jx(171,"var(--duration-extra-fast)"),sg()()(),Sl(172,"tr")(173,"td")(174,"code"),Jx(175,"--transition-timing"),sg()(),Sl(176,"td"),Jx(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),sg(),Sl(178,"td")(179,"code"),Jx(180,"var(--timing-standart)"),sg()()(),Sl(181,"tr")(182,"td")(183,"strong"),Jx(184,"Icon"),sg()(),Wl(185,"td")(186,"td"),sg(),Sl(187,"tr")(188,"td")(189,"code"),Jx(190,"--color-icon-read"),sg()(),Sl(191,"td"),Jx(192,"Cor do \xEDcone de busca no modo action"),sg(),Sl(193,"td")(194,"code"),Jx(195,"var(--color-neutral-dark-70)"),sg()()(),Sl(196,"tr")(197,"td")(198,"code"),Jx(199,"--color-icon"),sg()(),Sl(200,"td"),Jx(201,"Cor do \xEDcone de busca no modo trigger"),sg(),Sl(202,"td")(203,"code"),Jx(204,"var(--color-action-default)"),sg()()(),Sl(205,"tr")(206,"td")(207,"strong"),Jx(208,"Hover"),sg()(),Wl(209,"td")(210,"td"),sg(),Sl(211,"tr")(212,"td")(213,"code"),Jx(214,"--color-hover"),sg()(),Sl(215,"td"),Jx(216,"Cor das bordas no estado hover"),sg(),Sl(217,"td")(218,"code"),Jx(219,"var(--color-action-hover)"),sg()()(),Sl(220,"tr")(221,"td")(222,"code"),Jx(223,"--background-hover"),sg()(),Sl(224,"td"),Jx(225,"Cor de background no estado hover"),sg(),Sl(226,"td")(227,"code"),Jx(228,"var(--color-brand-01-lightest)"),sg()()(),Sl(229,"tr")(230,"td")(231,"strong"),Jx(232,"Focused"),sg()(),Wl(233,"td")(234,"td"),sg(),Sl(235,"tr")(236,"td")(237,"code"),Jx(238,"--color-focused"),sg()(),Sl(239,"td"),Jx(240,"Cor das bordas no estado de focus"),sg(),Sl(241,"td")(242,"code"),Jx(243,"var(--color-action-default)"),sg()()(),Sl(244,"tr")(245,"td")(246,"code"),Jx(247,"--outline-color-focused"),sg()(),Sl(248,"td"),Jx(249,"Cor do outline no estado de focus"),sg(),Sl(250,"td")(251,"code"),Jx(252,"var(--color-action-focus)"),sg()()(),Sl(253,"tr")(254,"td")(255,"strong"),Jx(256,"Disabled"),sg()(),Wl(257,"td")(258,"td"),sg(),Sl(259,"tr")(260,"td")(261,"code"),Jx(262,"--color-disabled"),sg()(),Sl(263,"td"),Jx(264,"Cor principal no estado disabled"),sg(),Sl(265,"td")(266,"code"),Jx(267,"var(--color-action-disabled)"),sg()()(),Sl(268,"tr")(269,"td")(270,"code"),Jx(271,"--background-disabled"),sg()(),Sl(272,"td"),Jx(273,"Cor de background no estado disabled"),sg(),Sl(274,"td")(275,"code"),Jx(276,"var(--color-neutral-light-20)"),sg()()()()()(),Sl(277,"div",7)(278,"h4",8),Jx(279,"Seletor"),sg(),Sl(280,"pre",9),Jx(281,`<po-search
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
`),sg()(),Sl(282,"h4",10),Jx(283,"Propriedades"),sg(),Sl(284,"table",11)(285,"tr",12)(286,"th",13),Jx(287,"Nome"),sg(),Sl(288,"th",13),Jx(289,"Tipo"),sg(),Sl(290,"th",13),Jx(291,"Padr\xE3o"),sg(),Sl(292,"th",13),Jx(293,"Descri\xE7\xE3o"),sg()(),Sl(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),Jx(298," p-aria-label"),Wl(299,"br"),sg()()(),Sl(300,"td",18)(301,"code",19),Jx(302,"string"),sg()(),Sl(303,"td",20),Jx(304,"-"),sg(),Sl(305,"td",21)(306,"em")(307,"strong"),Jx(308,"(opcional)"),sg()(),Sl(309,"p"),Jx(310,"Define um aria-label para o po-search."),sg(),Sl(311,"blockquote")(312,"p"),Jx(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),Sl(314,"code"),Jx(315,"aria-label"),sg(),Jx(316,` \xE9 utilizado para
acessibilidade.`),sg()()()(),Sl(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),Jx(321," (p-blur)"),Wl(322,"br"),sg()()(),Sl(323,"td",18)(324,"code",24),Jx(325,"EventEmitter"),sg()(),Sl(326,"td",20),Jx(327,"-"),sg(),Sl(328,"td",21)(329,"em")(330,"strong"),Jx(331,"(opcional)"),sg()(),Sl(332,"p"),Jx(333,"Evento disparado ao sair do campo."),sg()()(),Sl(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),Jx(338," (p-change-model)"),Wl(339,"br"),sg()()(),Sl(340,"td",18)(341,"code",24),Jx(342,"EventEmitter"),sg()(),Sl(343,"td",20),Jx(344,"-"),sg(),Sl(345,"td",21)(346,"em")(347,"strong"),Jx(348,"(opcional)"),sg()(),Sl(349,"p"),Jx(350,"Evento disparado ao alterar valor do model."),sg()()(),Sl(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),Jx(355," p-disabled"),Wl(356,"br"),sg()()(),Sl(357,"td",18)(358,"code",25),Jx(359,"boolean"),sg()(),Sl(360,"td",20)(361,"p")(362,"code"),Jx(363,"false"),sg()()(),Sl(364,"td",21)(365,"em")(366,"strong"),Jx(367,"(opcional)"),sg()(),Sl(368,"p"),Jx(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),sg()()(),Sl(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),Jx(374," (p-filter)"),Wl(375,"br"),sg()()(),Sl(376,"td",18)(377,"code",24),Jx(378,"EventEmitter"),sg()(),Sl(379,"td",20),Jx(380,"-"),sg(),Sl(381,"td",21)(382,"em")(383,"strong"),Jx(384,"(opcional)"),sg()(),Sl(385,"p"),Jx(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),sg(),Sl(387,"blockquote")(388,"p"),Jx(389,"Incompat\xEDvel com a propriedade "),Sl(390,"code"),Jx(391,"p-search-type"),sg(),Jx(392," do tipo "),Sl(393,"code"),Jx(394,"locate"),sg(),Jx(395,"."),sg()()()(),Sl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),Jx(400," p-filter-keys"),Wl(401,"br"),sg()()(),Sl(402,"td",18)(403,"code",26),Jx(404,"Array<any>"),sg()(),Sl(405,"td",20),Jx(406,"-"),sg(),Sl(407,"td",21)(408,"p"),Jx(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),Sl(410,"code"),Jx(411,"p-items"),sg(),Jx(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),sg(),Sl(413,"pre")(414,"code",27),Jx(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),sg()(),Sl(416,"blockquote")(417,"p"),Jx(418,"Esta propriedade \xE9 ignorada quando utilizado com "),Sl(419,"code"),Jx(420,"p-filter-select"),sg(),Jx(421,` e incompat\xEDvel com a propriedade
`),Sl(422,"code"),Jx(423,"p-search-type"),sg(),Jx(424," do tipo "),Sl(425,"code"),Jx(426,"locate"),sg(),Jx(427,"."),sg()()()(),Sl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),Jx(432," p-filter-select"),Wl(433,"br"),sg()()(),Sl(434,"td",18)(435,"code",28),Jx(436,"PoSearchFilterSelect[]"),sg()(),Sl(437,"td",20),Jx(438,"-"),sg(),Sl(439,"td",21)(440,"p"),Jx(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Sl(442,"code"),Jx(443,"p-items"),sg(),Jx(444,". Automaticamente adiciona a op\xE7\xE3o "),Sl(445,"strong"),Jx(446,"Todos"),sg(),Jx(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),sg(),Sl(448,"p"),Jx(449,"Exemplo de uso:"),sg(),Sl(450,"pre")(451,"code",27),Jx(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),sg()(),Sl(453,"blockquote")(454,"p"),Jx(455,"Ao ser habilitada, a propriedade "),Sl(456,"code"),Jx(457,"p-filter-keys"),sg(),Jx(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Sl(459,"code"),Jx(460,"p-search-type"),sg(),Jx(461," do tipo "),Sl(462,"code"),Jx(463,"locate"),sg(),Jx(464,"."),sg()()()(),Sl(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),Jx(469," p-filter-type"),Wl(470,"br"),sg()()(),Sl(471,"td",18)(472,"code",29),Jx(473,"PoSearchFilterMode"),sg()(),Sl(474,"td",20)(475,"p")(476,"code"),Jx(477,"startsWith"),sg()()(),Sl(478,"td",21)(479,"em")(480,"strong"),Jx(481,"(opcional)"),sg()(),Sl(482,"p"),Jx(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Sl(484,"strong"),Jx(485,"PoSearchFilterMode"),sg(),Jx(486,"."),sg(),Sl(487,"blockquote")(488,"p"),Jx(489,"Incompat\xEDvel com a propriedade "),Sl(490,"code"),Jx(491,"p-search-type"),sg(),Jx(492," do tipo "),Sl(493,"code"),Jx(494,"locate"),sg(),Jx(495,"."),sg()()()(),Sl(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),Jx(500," (p-filtered-items-change)"),Wl(501,"br"),sg()()(),Sl(502,"td",18)(503,"code",24),Jx(504,"EventEmitter"),sg()(),Sl(505,"td",20),Jx(506,"-"),sg(),Sl(507,"td",21)(508,"em")(509,"strong"),Jx(510,"(opcional)"),sg()(),Sl(511,"p"),Jx(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),sg(),Sl(513,"blockquote")(514,"p"),Jx(515,"Incompat\xEDvel com a propriedade "),Sl(516,"code"),Jx(517,"p-search-type"),sg(),Jx(518," do tipo "),Sl(519,"code"),Jx(520,"locate"),sg(),Jx(521,"."),sg()()()(),Sl(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),Jx(526," (p-focus)"),Wl(527,"br"),sg()()(),Sl(528,"td",18)(529,"code",24),Jx(530,"EventEmitter"),sg()(),Sl(531,"td",20),Jx(532,"-"),sg(),Sl(533,"td",21)(534,"em")(535,"strong"),Jx(536,"(opcional)"),sg()(),Sl(537,"p"),Jx(538,"Evento emitido quando o campo de entrada (input) recebe foco."),sg()()(),Sl(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),Jx(543," (p-footer-action-listbox)"),Wl(544,"br"),sg()()(),Sl(545,"td",18)(546,"code",24),Jx(547,"EventEmitter"),sg()(),Sl(548,"td",20),Jx(549,"-"),sg(),Sl(550,"td",21)(551,"em")(552,"strong"),Jx(553,"(opcional)"),sg()(),Sl(554,"p"),Jx(555,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),Sl(556,"code"),Jx(557,"listbox"),sg(),Jx(558,`.
O texto exibido pode ser configurado por meio do literal `),Sl(559,"code"),Jx(560,"footerActionListbox"),sg(),Jx(561,"."),sg()()(),Sl(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),Jx(566," p-icon"),Wl(567,"br"),sg()()(),Sl(568,"td",18)(569,"code",19),Jx(570,"string "),sg(),Sl(571,"code",30),Jx(572," TemplateRef<void>"),sg()(),Sl(573,"td",20),Jx(574,"-"),sg(),Sl(575,"td",21)(576,"em")(577,"strong"),Jx(578,"(opcional)"),sg()(),Sl(579,"p"),Jx(580,"Permite customizar o \xEDcone de busca que acompanha o campo."),sg(),Sl(581,"p"),Jx(582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(583,"a",31),Jx(584,"Biblioteca de \xEDcones PO UI"),sg(),Jx(585,", conforme exemplo:"),sg(),Sl(586,"pre")(587,"code"),Jx(588,`<po-search p-icon="an an-user"></po-search>
`),sg()(),Sl(589,"p"),Jx(590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(591,"em"),Jx(592,"Font Awesome"),sg(),Jx(593,`, desde que a biblioteca
esteja carregada no projeto:`),sg(),Sl(594,"pre")(595,"code"),Jx(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),sg()(),Sl(597,"p"),Jx(598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(599,"code"),Jx(600,"TemplateRef"),sg(),Jx(601,", conforme exemplo abaixo:"),sg(),Sl(602,"pre")(603,"code"),Jx(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),sg()()()(),Sl(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),Jx(609," p-items"),Wl(610,"br"),sg()()(),Sl(611,"td",18)(612,"code",26),Jx(613,"Array<any>"),sg()(),Sl(614,"td",20),Jx(615,"-"),sg(),Sl(616,"td",21)(617,"em")(618,"strong"),Jx(619,"(opcional)"),sg()(),Sl(620,"p"),Jx(621,"Lista de itens que ser\xE3o utilizados para pesquisa."),sg(),Sl(622,"blockquote")(623,"p"),Jx(624,"Incompat\xEDvel com a propriedade "),Sl(625,"code"),Jx(626,"p-search-type"),sg(),Jx(627," do tipo "),Sl(628,"code"),Jx(629,"locate"),sg(),Jx(630,"."),sg()()()(),Sl(631,"tr",14)(632,"td",15)(633,"div",22)(634,"span",23),Jx(635," (p-keydown)"),Wl(636,"br"),sg()()(),Sl(637,"td",18)(638,"code",24),Jx(639,"EventEmitter"),sg()(),Sl(640,"td",20),Jx(641,"-"),sg(),Sl(642,"td",21)(643,"em")(644,"strong"),Jx(645,"(opcional)"),sg()(),Sl(646,"p"),Jx(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(648,"code"),Jx(649,"KeyboardEvent"),sg(),Jx(650," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(651,"tr",14)(652,"td",15)(653,"div",16)(654,"span",17),Jx(655," p-keys-label"),Wl(656,"br"),sg()()(),Sl(657,"td",18)(658,"code",32),Jx(659,"Array<string>"),sg()(),Sl(660,"td",20),Jx(661,"-"),sg(),Sl(662,"td",21)(663,"em")(664,"strong"),Jx(665,"(opcional)"),sg()(),Sl(666,"p"),Jx(667,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),Sl(668,"code"),Jx(669,"listbox"),sg(),Jx(670,` quando a propriedade
`),Sl(671,"code"),Jx(672,"p-show-listbox"),sg(),Jx(673," estiver habilitada."),sg(),Sl(674,"p"),Jx(675,"Deve ser informado um array de strings contendo at\xE9 "),Sl(676,"strong"),Jx(677,"3 propriedades"),sg(),Jx(678,"."),sg(),Sl(679,"p"),Jx(680,"Exemplo de uso:"),sg(),Sl(681,"pre")(682,"code",33),Jx(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),sg()()()(),Sl(684,"tr",14)(685,"td",15)(686,"div",22)(687,"span",23),Jx(688," (p-listbox-onclick)"),Wl(689,"br"),sg()()(),Sl(690,"td",18)(691,"code",24),Jx(692,"EventEmitter"),sg()(),Sl(693,"td",20),Jx(694,"-"),sg(),Sl(695,"td",21)(696,"em")(697,"strong"),Jx(698,"(opcional)"),sg()(),Sl(699,"p"),Jx(700,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),sg(),Sl(701,"blockquote")(702,"p"),Jx(703,"Incompat\xEDvel com a propriedade "),Sl(704,"code"),Jx(705,"p-search-type"),sg(),Jx(706," do tipo "),Sl(707,"code"),Jx(708,"locate"),sg(),Jx(709,"."),sg()()()(),Sl(710,"tr",14)(711,"td",15)(712,"div",16)(713,"span",17),Jx(714," p-literals"),Wl(715,"br"),sg()()(),Sl(716,"td",18)(717,"code",34),Jx(718,"PoSearchLiterals"),sg()(),Sl(719,"td",20),Jx(720,"-"),sg(),Sl(721,"td",21)(722,"em")(723,"strong"),Jx(724,"(opcional)"),sg()(),Sl(725,"p"),Jx(726,"Objeto com as literais usadas no "),Sl(727,"code"),Jx(728,"po-search"),sg(),Jx(729,", permitindo personalizar os textos exibidos no componente."),sg(),Sl(730,"p"),Jx(731,"Para utilizar basta passar a literal que deseja customizar:"),sg(),Sl(732,"pre")(733,"code"),Jx(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),sg()(),Sl(735,"p"),Jx(736,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),sg(),Sl(737,"pre")(738,"code"),Jx(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),sg()(),Sl(740,"blockquote")(741,"p"),Jx(742,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Sl(743,"a",35)(744,"code"),Jx(745,"PoI18nService"),sg()(),Jx(746,` ou
do browser.`),sg()()()(),Sl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),Jx(751," p-loading"),Wl(752,"br"),sg()()(),Sl(753,"td",18)(754,"code",25),Jx(755,"boolean"),sg()(),Sl(756,"td",20)(757,"p")(758,"code"),Jx(759,"false"),sg()()(),Sl(760,"td",21)(761,"em")(762,"strong"),Jx(763,"(opcional)"),sg()(),Sl(764,"p"),Jx(765,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg(),Sl(766,"blockquote")(767,"p"),Jx(768,"Incompat\xEDvel com a propriedade "),Sl(769,"code"),Jx(770,"p-search-type"),sg(),Jx(771," do tipo "),Sl(772,"code"),Jx(773,"locate"),sg(),Jx(774,"."),sg()()()(),Sl(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),Jx(779," (p-locate-next)"),Wl(780,"br"),sg()()(),Sl(781,"td",18)(782,"code",24),Jx(783,"EventEmitter"),sg()(),Sl(784,"td",20),Jx(785,"-"),sg(),Sl(786,"td",21)(787,"em")(788,"strong"),Jx(789,"(opcional)"),sg()(),Sl(790,"p"),Jx(791,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),sg(),Sl(792,"blockquote")(793,"p"),Jx(794,"Compat\xEDvel com a propriedade "),Sl(795,"code"),Jx(796,"p-search-type"),sg(),Jx(797," do tipo "),Sl(798,"code"),Jx(799,"locate"),sg(),Jx(800,"."),sg()()()(),Sl(801,"tr",14)(802,"td",15)(803,"div",22)(804,"span",23),Jx(805," (p-locate-previous)"),Wl(806,"br"),sg()()(),Sl(807,"td",18)(808,"code",24),Jx(809,"EventEmitter"),sg()(),Sl(810,"td",20),Jx(811,"-"),sg(),Sl(812,"td",21)(813,"em")(814,"strong"),Jx(815,"(opcional)"),sg()(),Sl(816,"p"),Jx(817,'Evento disparado ao clicar no controle "Resultado anterior".'),sg(),Sl(818,"blockquote")(819,"p"),Jx(820,"Compat\xEDvel com a propriedade "),Sl(821,"code"),Jx(822,"p-search-type"),sg(),Jx(823," do tipo "),Sl(824,"code"),Jx(825,"locate"),sg(),Jx(826,"."),sg()()()(),Sl(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),Jx(831," p-locate-summary"),Wl(832,"br"),sg()()(),Sl(833,"td",18)(834,"code",36),Jx(835,"PoSearchLocateSummary"),sg()(),Sl(836,"td",20),Jx(837,"-"),sg(),Sl(838,"td",21)(839,"em")(840,"strong"),Jx(841,"(opcional)"),sg()(),Sl(842,"p"),Jx(843,"Define os valores do contador exibido ao usar a propriedade "),Sl(844,"code"),Jx(845,"p-search-type"),sg(),Jx(846," do tipo "),Sl(847,"code"),Jx(848,"locate"),sg(),Jx(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),sg(),Sl(850,"pre")(851,"code",33),Jx(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),sg()(),Sl(853,"blockquote")(854,"p"),Jx(855,"Compat\xEDvel com a propriedade "),Sl(856,"code"),Jx(857,"p-search-type"),sg(),Jx(858," do tipo "),Sl(859,"code"),Jx(860,"locate"),sg(),Jx(861,"."),sg()()()(),Sl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),Jx(866," name"),Wl(867,"br"),sg()()(),Sl(868,"td",18)(869,"code",19),Jx(870,"string"),sg()(),Sl(871,"td",20),Jx(872,"-"),sg(),Sl(873,"td",21)(874,"em")(875,"strong"),Jx(876,"(opcional)"),sg()(),Sl(877,"p"),Jx(878,"Nome e identificador do campo."),sg()()(),Sl(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),Jx(883," p-no-autocomplete"),Wl(884,"br"),sg()()(),Sl(885,"td",18)(886,"code",25),Jx(887,"boolean"),sg()(),Sl(888,"td",20)(889,"p")(890,"code"),Jx(891,"false"),sg()()(),Sl(892,"td",21)(893,"em")(894,"strong"),Jx(895,"(opcional)"),sg()(),Sl(896,"p"),Jx(897,"Define a propriedade nativa "),Sl(898,"code"),Jx(899,"autocomplete"),sg(),Jx(900," do campo como "),Sl(901,"code"),Jx(902,"off"),sg(),Jx(903,"."),sg()()(),Sl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),Jx(908," p-show-listbox"),Wl(909,"br"),sg()()(),Sl(910,"td",18)(911,"code",25),Jx(912,"boolean"),sg()(),Sl(913,"td",20)(914,"p")(915,"code"),Jx(916,"false"),sg()()(),Sl(917,"td",21)(918,"em")(919,"strong"),Jx(920,"(opcional)"),sg()(),Sl(921,"p"),Jx(922,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),Sl(923,"code"),Jx(924,"p-filter-keys"),sg(),Jx(925," ou "),Sl(926,"code"),Jx(927,"p-filter-select"),sg(),Jx(928,` enquanto realiza
uma busca, respeitando o `),Sl(929,"code"),Jx(930,"p-filter-type"),sg(),Jx(931," como modo de pesquisa."),sg(),Sl(932,"blockquote")(933,"p"),Jx(934,"Incompat\xEDvel com a propriedade "),Sl(935,"code"),Jx(936,"p-search-type"),sg(),Jx(937," do tipo "),Sl(938,"code"),Jx(939,"locate"),sg(),Jx(940,"."),sg()()()(),Sl(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),Jx(945," p-size"),Wl(946,"br"),sg()()(),Sl(947,"td",18)(948,"code",19),Jx(949,"string"),sg()(),Sl(950,"td",20)(951,"p")(952,"code"),Jx(953,"medium"),sg()()(),Sl(954,"td",21)(955,"em")(956,"strong"),Jx(957,"(opcional)"),sg()(),Sl(958,"p"),Jx(959,"Define o tamanho do componente:"),sg(),Sl(960,"ul")(961,"li")(962,"code"),Jx(963,"small"),sg(),Jx(964,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(965,"li")(966,"code"),Jx(967,"medium"),sg(),Jx(968,": altura do input como 44px."),sg()(),Sl(969,"blockquote")(970,"p"),Jx(971,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(972,"code"),Jx(973,"medium"),sg(),Jx(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(975,"a",37),Jx(976,"po-theme"),sg(),Jx(977,"."),sg()()()(),Sl(978,"tr",14)(979,"td",15)(980,"div",16)(981,"span",17),Jx(982," p-search-type"),Wl(983,"br"),sg()()(),Sl(984,"td",18)(985,"code",38),Jx(986,"searchMode"),sg()(),Sl(987,"td",20)(988,"p")(989,"code"),Jx(990,"action"),sg()()(),Sl(991,"td",21)(992,"em")(993,"strong"),Jx(994,"(opcional)"),sg()(),Sl(995,"p"),Jx(996,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),sg(),Sl(997,"ul")(998,"li")(999,"code"),Jx(1e3,"action"),sg(),Jx(1001,": Realiza a busca a cada caractere digitado."),sg(),Sl(1002,"li")(1003,"code"),Jx(1004,"trigger"),sg(),Jx(1005,": Realiza a busca ao pressionar "),Sl(1006,"code"),Jx(1007,"enter"),sg(),Jx(1008," ou clicar no \xEDcone de busca."),sg(),Sl(1009,"li")(1010,"code"),Jx(1011,"locate"),sg(),Jx(1012,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),sg(),Sl(1013,"li")(1014,"code"),Jx(1015,"execute"),sg(),Jx(1016,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),Sl(1017,"code"),Jx(1018,"listbox"),sg(),Jx(1019,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),Sl(1020,"code"),Jx(1021,"action"),sg(),Jx(1022," ou "),Sl(1023,"code"),Jx(1024,"url"),sg(),Jx(1025," nos itens definidos em "),Sl(1026,"code"),Jx(1027,"p-items"),sg(),Jx(1028,"."),sg()()()()(),Sl(1029,"h3"),Jx(1030,"Interfaces"),sg(),Sl(1031,"h4",39)(1032,"code",5),Jx(1033,"PoSearchFilterSelect"),sg()(),Sl(1034,"div",2)(1035,"p"),Jx(1036,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),Sl(1037,"code"),Jx(1038,"po-search"),sg(),Jx(1039,", ao usar a propriedade "),Sl(1040,"code"),Jx(1041,"p-filter-select"),sg(),Jx(1042,"."),sg()(),Sl(1043,"h4",10),Jx(1044,"Propriedades"),sg(),Sl(1045,"table",11)(1046,"tr",12)(1047,"th",13),Jx(1048,"Nome"),sg(),Sl(1049,"th",13),Jx(1050,"Tipo"),sg(),Sl(1051,"th",13),Jx(1052,"Descri\xE7\xE3o"),sg()(),Sl(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),Jx(1057," label"),Wl(1058,"br"),sg()()(),Sl(1059,"td",18)(1060,"code",19),Jx(1061,"string"),sg()(),Sl(1062,"td",21)(1063,"p"),Jx(1064,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),sg()()(),Sl(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),Jx(1069," value"),Wl(1070,"br"),sg()()(),Sl(1071,"td",18)(1072,"code",32),Jx(1073,"Array<string> "),sg(),Sl(1074,"code",19),Jx(1075," string"),sg()(),Sl(1076,"td",21)(1077,"p"),Jx(1078,"Valores que ser\xE3o atribu\xEDdos ao "),Sl(1079,"code"),Jx(1080,"p-filter-keys"),sg()()()()(),Sl(1081,"h4",39)(1082,"code",5),Jx(1083,"PoSearchLocateSummary"),sg()(),Sl(1084,"div",2)(1085,"p"),Jx(1086,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),Sl(1087,"code"),Jx(1088,"p-filter-locate"),sg(),Jx(1089,"."),sg()(),Sl(1090,"h4",10),Jx(1091,"Propriedades"),sg(),Sl(1092,"table",11)(1093,"tr",12)(1094,"th",13),Jx(1095,"Nome"),sg(),Sl(1096,"th",13),Jx(1097,"Tipo"),sg(),Sl(1098,"th",13),Jx(1099,"Descri\xE7\xE3o"),sg()(),Sl(1100,"tr",14)(1101,"td",15)(1102,"div",16)(1103,"span",17),Jx(1104," currentIndex"),Wl(1105,"br"),sg()()(),Sl(1106,"td",18)(1107,"code",40),Jx(1108,"number"),sg()(),Sl(1109,"td",21)(1110,"p"),Jx(1111,"\xCDndice atual da ocorr\xEAncia localizada."),sg()()(),Sl(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),Jx(1116," total"),Wl(1117,"br"),sg()()(),Sl(1118,"td",18)(1119,"code",40),Jx(1120,"number"),sg()(),Sl(1121,"td",21)(1122,"p"),Jx(1123,"Total de ocorr\xEAncias encontradas."),sg()()()(),Sl(1124,"h4",39)(1125,"code",5),Jx(1126,"PoSearchOption"),sg()(),Sl(1127,"div",2)(1128,"p"),Jx(1129,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),Sl(1130,"code"),Jx(1131,"po-search"),sg(),Jx(1132,"."),sg()(),Sl(1133,"h4",10),Jx(1134,"Propriedades"),sg(),Sl(1135,"table",11)(1136,"tr",12)(1137,"th",13),Jx(1138,"Nome"),sg(),Sl(1139,"th",13),Jx(1140,"Tipo"),sg(),Sl(1141,"th",13),Jx(1142,"Descri\xE7\xE3o"),sg()(),Sl(1143,"tr",14)(1144,"td",15)(1145,"div",16)(1146,"span",17),Jx(1147," label"),Wl(1148,"br"),sg()()(),Sl(1149,"td",18)(1150,"code",19),Jx(1151,"string"),sg()(),Sl(1152,"td",21)(1153,"em")(1154,"strong"),Jx(1155,"(opcional)"),sg()(),Sl(1156,"p"),Jx(1157,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),sg(),Sl(1158,"blockquote")(1159,"p"),Jx(1160,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Sl(1161,"code"),Jx(1162,"value"),sg(),Jx(1163,"."),sg()()()(),Sl(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),Jx(1168," value"),Wl(1169,"br"),sg()()(),Sl(1170,"td",18)(1171,"code",19),Jx(1172,"string "),sg(),Sl(1173,"code",40),Jx(1174," number"),sg()(),Sl(1175,"td",21)(1176,"p"),Jx(1177,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Sl(1178,"em"),Jx(1179,"model"),sg(),Jx(1180,"."),sg()()()(),Sl(1181,"h4",39)(1182,"code",5),Jx(1183,"PoSearchLiterals"),sg()(),Sl(1184,"div",2)(1185,"p"),Jx(1186,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1187,"code"),Jx(1188,"po-search"),sg(),Jx(1189,"."),sg()(),Sl(1190,"h4",10),Jx(1191,"Propriedades"),sg(),Sl(1192,"table",11)(1193,"tr",12)(1194,"th",13),Jx(1195,"Nome"),sg(),Sl(1196,"th",13),Jx(1197,"Tipo"),sg(),Sl(1198,"th",13),Jx(1199,"Descri\xE7\xE3o"),sg()(),Sl(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),Jx(1204," all"),Wl(1205,"br"),sg()()(),Sl(1206,"td",18)(1207,"code",19),Jx(1208,"string"),sg()(),Sl(1209,"td",21)(1210,"em")(1211,"strong"),Jx(1212,"(opcional)"),sg()(),Sl(1213,"p"),Jx(1214,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),sg(),Sl(1215,"blockquote")(1216,"p"),Jx(1217,"Exibido apenas quando a propriedade "),Sl(1218,"code"),Jx(1219,"p-filter-select"),sg(),Jx(1220," estiver habilitada."),sg()()()(),Sl(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),Jx(1225," clean"),Wl(1226,"br"),sg()()(),Sl(1227,"td",18)(1228,"code",19),Jx(1229,"string"),sg()(),Sl(1230,"td",21)(1231,"em")(1232,"strong"),Jx(1233,"(opcional)"),sg()(),Sl(1234,"p"),Jx(1235,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),sg()()(),Sl(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),Jx(1240," footerActionListbox"),Wl(1241,"br"),sg()()(),Sl(1242,"td",18)(1243,"code",19),Jx(1244,"string"),sg()(),Sl(1245,"td",21)(1246,"em")(1247,"strong"),Jx(1248,"(opcional)"),sg()(),Sl(1249,"p"),Jx(1250,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),sg()()(),Sl(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),Jx(1255," next"),Wl(1256,"br"),sg()()(),Sl(1257,"td",18)(1258,"code",19),Jx(1259,"string"),sg()(),Sl(1260,"td",21)(1261,"em")(1262,"strong"),Jx(1263,"(opcional)"),sg()(),Sl(1264,"p"),Jx(1265,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),sg(),Sl(1266,"blockquote")(1267,"p"),Jx(1268,"Exibido apenas quando a propriedade "),Sl(1269,"code"),Jx(1270,"p-filter-locate"),sg(),Jx(1271," estiver habilitada."),sg()()()(),Sl(1272,"tr",14)(1273,"td",15)(1274,"div",16)(1275,"span",17),Jx(1276," of"),Wl(1277,"br"),sg()()(),Sl(1278,"td",18)(1279,"code",19),Jx(1280,"string"),sg()(),Sl(1281,"td",21)(1282,"em")(1283,"strong"),Jx(1284,"(opcional)"),sg()(),Sl(1285,"p"),Jx(1286,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),sg(),Sl(1287,"blockquote")(1288,"p"),Jx(1289,"Exibido apenas quando a propriedade "),Sl(1290,"code"),Jx(1291,"p-filter-locate"),sg(),Jx(1292," estiver habilitada."),sg()()()(),Sl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),Jx(1297," placeholderListbox"),Wl(1298,"br"),sg()()(),Sl(1299,"td",18)(1300,"code",19),Jx(1301,"string"),sg()(),Sl(1302,"td",21)(1303,"em")(1304,"strong"),Jx(1305,"(opcional)"),sg()(),Sl(1306,"p"),Jx(1307,"Texto exibido como "),Sl(1308,"em"),Jx(1309,"placeholder"),sg(),Jx(1310," na lista de resultados."),sg()()(),Sl(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),Jx(1315," previous"),Wl(1316,"br"),sg()()(),Sl(1317,"td",18)(1318,"code",19),Jx(1319,"string"),sg()(),Sl(1320,"td",21)(1321,"em")(1322,"strong"),Jx(1323,"(opcional)"),sg()(),Sl(1324,"p"),Jx(1325,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),sg(),Sl(1326,"blockquote")(1327,"p"),Jx(1328,"Exibido apenas quando a propriedade "),Sl(1329,"code"),Jx(1330,"p-filter-locate"),sg(),Jx(1331," estiver habilitada."),sg()()()(),Sl(1332,"tr",14)(1333,"td",15)(1334,"div",16)(1335,"span",17),Jx(1336," result"),Wl(1337,"br"),sg()()(),Sl(1338,"td",18)(1339,"code",19),Jx(1340,"string"),sg()(),Sl(1341,"td",21)(1342,"em")(1343,"strong"),Jx(1344,"(opcional)"),sg()(),Sl(1345,"p"),Jx(1346,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),sg(),Sl(1347,"blockquote")(1348,"p"),Jx(1349,"Exibido apenas quando a propriedade "),Sl(1350,"code"),Jx(1351,"p-filter-locate"),sg(),Jx(1352," estiver habilitada."),sg()()()(),Sl(1353,"tr",14)(1354,"td",15)(1355,"div",16)(1356,"span",17),Jx(1357," search"),Wl(1358,"br"),sg()()(),Sl(1359,"td",18)(1360,"code",19),Jx(1361,"string"),sg()(),Sl(1362,"td",21)(1363,"em")(1364,"strong"),Jx(1365,"(opcional)"),sg()(),Sl(1366,"p"),Jx(1367,"Texto exibido como "),Sl(1368,"em"),Jx(1369,"placeholder"),sg(),Jx(1370," no campo de busca."),sg()()()(),Sl(1371,"h3"),Jx(1372,"Enums"),sg(),Sl(1373,"h4",4)(1374,"code",5),Jx(1375,"PoSearchFilterMode"),sg()(),Sl(1376,"div",2)(1377,"p"),Jx(1378,"Define o tipo de busca usado no "),Sl(1379,"code"),Jx(1380,"po-search"),sg(),Jx(1381,"."),sg()(),Sl(1382,"h4",10),Jx(1383,"Propriedades"),sg(),Sl(1384,"table",11)(1385,"tr",12)(1386,"th",13),Jx(1387,"Nome"),sg(),Sl(1388,"th",13),Jx(1389,"Descri\xE7\xE3o"),sg()(),Sl(1390,"tr",14)(1391,"td",15)(1392,"div",16)(1393,"span",17),Jx(1394," startsWith"),Wl(1395,"br"),sg()()(),Sl(1396,"td",21)(1397,"p"),Jx(1398,"Verifica se o texto "),Sl(1399,"em"),Jx(1400,"inicia"),sg(),Jx(1401," com o valor pesquisado."),sg()()(),Sl(1402,"tr",14)(1403,"td",15)(1404,"div",16)(1405,"span",17),Jx(1406," contains"),Wl(1407,"br"),sg()()(),Sl(1408,"td",21)(1409,"p"),Jx(1410,"Verifica se o texto "),Sl(1411,"em"),Jx(1412,"cont\xE9m"),sg(),Jx(1413," o valor pesquisado."),sg()()(),Sl(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),Jx(1418," endsWith"),Wl(1419,"br"),sg()()(),Sl(1420,"td",21)(1421,"p"),Jx(1422,"Verifica se o texto "),Sl(1423,"em"),Jx(1424,"finaliza"),sg(),Jx(1425," com o valor pesquisado."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-search-doc"),sg(),Sl(4,"po-tab",3),ht$1("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),sg()()()),o&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2})}return a})();var Ot=[{path:"",component:Xe}],Ye=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(Ot),pL]})}return a})();var Jn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ye]})}return a})();export{Jn as DocPoSearchModule};