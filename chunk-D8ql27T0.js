import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,K as KC,d1 as Op,E,cg as uY,ch as om,ak as jo,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aI as nr,aJ as Zo,aK as Pe,aL as di,bx as ia,aO as Yo,bB as ga,bC as Vp,aU as IR,d2 as Se,al as lx,av as nx,aw as tx,am as pw,an as $0,bq as qx,ay as rx,ap as hw,aq as G0,as as $l,at as uo,au as fo,Z as OI,_ as Jp,a2 as GE,X as we,ah as uo$1,aQ as dt$1,aR as ty,ck as vk,cl as gk,c2 as Ap,bT as ha,cr as tr,a3 as D3,ax as gx,ao as QA,ar as JA,az as Qy,aB as $x,aA as Jy,c3 as zo}from'./main-6SPFG3VI.js';var ze=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic"]],standalone:false,decls:1,vars:0,template:function(o,i){o&1&&Ul(0,"po-search");},dependencies:[jo],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Search Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-search-basic/sample-po-search-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-search></po-search>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-search-basic"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,at,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ze],encapsulation:2})}return a})();var pt=["poSearch"];function dt(a,M){if(a&1&&(wl(0,"div")(1,"strong"),Ux(2),ng(),Ux(3),ng()),a&2){let l=M.$implicit,o=gx().$implicit;Pp(2),cg("",l,": "),Pp(),cg(" ",o[l]," \xA0 ");}}function ct(a,M){if(a&1&&(wl(0,"li"),nx(1,dt,4,2,"div",null,tx),ng()),a&2){let l=M.$implicit,o=gx();Pp(),rx(o.changeFilter(l));}}var We=(()=>{class a{http=f(KC);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Op.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"},{value:"loading",label:"Loading"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:Op.startsWith},{label:"Contains",value:Op.contains},{label:"Ends With",value:Op.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Execute",value:"execute"},{label:"Locate",value:"locate"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}ngOnChanges(l){l.items&&(this.filteredItems=this.items);}changeFilter(l){return Object.keys(l)}onChangeService(){this.http.get(this.service).subscribe(l=>{let o=l.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"]);});}updateFilterKeys(l){this.fieldKeys=this.convertToArray(l);}updateFilterSelect(l){this.fieldSelect=this.convertToArray(l);}filter(l){this.filteredItems=l,this.event=l.length===0?"p-change-model":"p-filtered-items-change";}changeItems(l){try{let o=JSON.parse(l);Array.isArray(o)&&(this.filteredItems=o,this.items=o);}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"");}catch(l){this.customLiterals=void 0;}}changeEvent(l){setTimeout(()=>{this.event=l;});}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"");}catch(l){this.customLocateSummary=void 0;}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Op.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService();}cleanInput(){try{this.poSearch.clearSearch();}catch(l){}}convertToArray(l){try{return JSON.parse(l)}catch(o){return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&$l(pt,7),o&2){let p;uo(p=fo())&&(i.poSearch=p.first);}},standalone:false,features:[Se],decls:32,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-loading","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=lx();wl(0,"div",2)(1,"po-search",3,0),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-filtered-items-change",function(d){return i.filter(d)})("p-locate-next",function(){return i.changeEvent("p-locate-next")})("p-locate-previous",function(){return i.changeEvent("p-locate-previous")}),ng()(),Ul(3,"po-divider"),wl(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),nx(9,ct,3,0,"li",null,tx),ng()()()()(),Ul(11,"po-divider"),wl(12,"div",2),Ul(13,"po-info",7)(14,"po-info",8),ng(),Ul(15,"po-divider"),wl(16,"form",null,1)(18,"po-input",9),pw("ngModelChange",function(d){return Qy(p),$x(i.ariaLabel,d)||(i.ariaLabel=d),Jy(d)}),ng(),$0(),wl(19,"po-input",10),pw("ngModelChange",function(d){return Qy(p),$x(i.itemsModel,d)||(i.itemsModel=d),Jy(d)}),ut("p-change-model",function(d){return i.changeItems(d)}),ng(),$0(),wl(20,"po-checkbox-group",11),pw("ngModelChange",function(d){return Qy(p),$x(i.properties,d)||(i.properties=d),Jy(d)}),ng(),$0(),wl(21,"po-radio-group",12),pw("ngModelChange",function(d){return Qy(p),$x(i.icon,d)||(i.icon=d),Jy(d)}),ng(),$0(),wl(22,"po-radio-group",13),pw("ngModelChange",function(d){return Qy(p),$x(i.searchMode,d)||(i.searchMode=d),Jy(d)}),ng(),$0(),wl(23,"po-radio-group",14),pw("ngModelChange",function(d){return Qy(p),$x(i.filterMode,d)||(i.filterMode=d),Jy(d)}),ng(),$0(),wl(24,"po-radio-group",15),pw("ngModelChange",function(d){return Qy(p),$x(i.size,d)||(i.size=d),Jy(d)}),ng(),$0(),wl(25,"po-input",16),pw("ngModelChange",function(d){return Qy(p),$x(i.locateSummary,d)||(i.locateSummary=d),Jy(d)}),ut("p-change",function(){return i.changeLocateSummary()}),ng(),$0(),wl(26,"po-input",17),pw("ngModelChange",function(d){return Qy(p),$x(i.literals,d)||(i.literals=d),Jy(d)}),ut("p-change",function(){return i.changeLiterals()}),ng(),$0(),wl(27,"po-input",18),pw("ngModelChange",function(d){return Qy(p),$x(i.filterModel,d)||(i.filterModel=d),Jy(d)}),ut("p-change-model",function(d){return i.updateFilterKeys(d)}),ng(),$0(),wl(28,"po-input",19),pw("ngModelChange",function(d){return Qy(p),$x(i.filterSelectModel,d)||(i.filterSelectModel=d),Jy(d)}),ut("p-change",function(d){return i.updateFilterSelect(d)}),ng(),$0(),Ul(29,"po-divider"),wl(30,"div",2)(31,"po-button",20),ut("p-click",function(){return i.restore()}),ng()()();}o&2&&(Pp(),YE("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),Pp(5),YE("p-label",qx("Itens encontrados: ",i.filteredItems?.length)),Pp(3),rx(i.filteredItems),Pp(4),YE("p-value",i.search),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.ariaLabel),G0(),Pp(),hw("ngModel",i.itemsModel),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.icon),YE("p-options",i.iconsOptions),G0(),Pp(),hw("ngModel",i.searchMode),YE("p-options",i.searchModeOptions),G0(),Pp(),hw("ngModel",i.filterMode),YE("p-options",i.filterModeOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0(),Pp(),hw("ngModel",i.locateSummary),G0(),Pp(),hw("ngModel",i.literals),G0(),Pp(),hw("ngModel",i.filterModel),G0(),Pp(),hw("ngModel",i.filterSelectModel),G0());},dependencies:[aY,iY,oY,ck,ok,nr,Zo,Pe,di,ia,Yo,ga,Vp,IR,jo],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"],changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Search Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-search-labs/sample-po-search-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { HttpClient } from '@angular/common/http';
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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-search-labs/sample-po-search-labs.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-search-labs"),ng(),Ul(29,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ht,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,We],encapsulation:2})}return a})();var pe=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ft(a,M){if(a&1&&(wl(0,"div",0),Ul(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),ng()),a&2){let l=M.$implicit;Pp(),YE("p-value",l.name),Pp(),YE("p-value",l.nickname),Pp(),YE("p-value",l.email);}}function gt(a,M){a&1&&Ul(0,"div");}function Et(a,M){if(a&1&&(wl(0,"li",7),Ux(1),QA(2,gt,1,0,"div"),ng(),wl(3,"li",7),Ux(4),ng()),a&2){let l=M.$implicit,o=gx();Pp(),cg(" Nickname: ",l.nickname," "),Pp(),JA(o.compareObjects(l)?2:-1),Pp(2),cg("Email: ",l.email);}}var He=(()=>{class a{service=f(pe);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(l){this.peopleFiltered=l,l.length===4&&(this.peopleFiltered=[]);}compareObjects(l){return !!this.peopleFiltered.includes(l)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people"]],standalone:false,features:[we([pe])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(wl(0,"div",0)(1,"po-search",1),ut("p-filtered-items-change",function(h){return i.filtered(h)}),ng()(),Ul(2,"po-divider"),nx(3,ft,4,3,"div",0,tx),Ul(5,"po-divider"),wl(6,"po-list-view",2),GE(7,Et,5,3,"ng-template",3),ng()),o&2&&(Pp(),YE("p-items",i.items)("p-filter-keys",i.filterKeys),Pp(2),rx(i.peopleFiltered),Pp(3),YE("p-items",i.items));},dependencies:[di,Vp,OI,Jp,jo],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"],changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),Ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Search Find People"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()(),wl(25,"po-tab",10)(26,"div")(27,"label",6),Ux(28,"sample-po-search-find-people/sample-po-search-find-people.component.css"),ng(),wl(29,"pre",11),Ux(30,`li {
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
`),ng()()()()(),wl(31,"div",12),Ul(32,"sample-po-search-find-people"),ng(),Ul(33,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,vt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,He],encapsulation:2})}return a})();var de=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function yt(a,M){if(a&1&&(wl(0,"div",0),Ul(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),ng()),a&2){let l=M.$implicit;Pp(2),YE("p-value",l.name),Pp(),YE("p-value",l.nickname),Pp(),YE("p-value",l.email);}}var Je=(()=>{class a{service=f(de);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(l){this.peopleFiltered=l,l.length===4&&(this.peopleFiltered=[]);}compareObjects(l){return !!this.peopleFiltered.includes(l)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox"]],standalone:false,features:[we([de])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(wl(0,"div",0)(1,"po-search",1),ut("p-filtered-items-change",function(h){return i.filtered(h)}),ng()(),nx(2,yt,5,3,"div",0,tx)),o&2&&(Pp(),YE("p-items",i.items)("p-filter-keys",i.filterKeys),Pp(),rx(i.peopleFiltered));},dependencies:[di,Vp,jo],encapsulation:2,changeDetection:1})}return a})();var Pt=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Search With Listbox"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-search-listbox"),ng(),Ul(27,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Je],encapsulation:2})}return a})();function Mt(a,M){if(a&1&&(wl(0,"div",0)(1,"po-container",2),Ul(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),ng()()),a&2){let l=M.$implicit;Pp(2),YE("p-value",l.name),Pp(),YE("p-value",l.gender),Pp(),YE("p-value",l.planet),Pp(),YE("p-value",l.father);}}var Ge=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}];}filtered(l){this.filteredItems=l;}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select"]],standalone:false,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(wl(0,"div",0)(1,"po-search",1),ut("p-filtered-items-change",function(h){return i.filtered(h)}),ng()(),nx(2,Mt,6,4,"div",0,tx)),o&2&&(Pp(),YE("p-items",i.items)("p-filter-select",i.filterSelect),Pp(),rx(i.filteredItems));},dependencies:[uo$1,Vp,jo],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Search With Filter Select + Listbox"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-search-filter-select"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,It,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ge],encapsulation:2})}return a})();var Xe=(()=>{class a{poModal;filterType=Op.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&$l(zo,7),o&2){let p;uo(p=fo())&&(i.poModal=p.first);}},standalone:false,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){o&1&&(wl(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),Ux(4,"Entre com o nome ou c\xF3digo da rotina"),ng()(),wl(5,"div",1)(6,"po-search",3),ut("p-footer-action-listbox",function(){return i.footerAction()}),ng()()()(),wl(7,"po-modal",4,0),Ul(9,"po-table",5),ng()),o&2&&(Pp(),YE("p-height",180),Pp(5),YE("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),Pp(3),YE("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",true));},dependencies:[dt$1,ty,IR,jo],styles:[".full[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Search Form Fields with Execute"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-search-execute/sample-po-search-execute.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-search-execute/sample-po-search-execute.component.css"),ng(),wl(25,"pre",11),Ux(26,`.full {
  width: 100%;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-search-execute"),ng(),Ul(29,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Dt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Xe],encapsulation:2})}return a})();var At=["nameInput"],qt=["cpfInput"],Ot=["addressInput"],Bt=["numberInput"],Nt=["emailInput"],Vt=["websiteInput"],zt=["reactiveFormData"],Ze=(()=>{class a{fb=f(uY);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=true;locateSummary={currentIndex:0,total:0};filterType=Op.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm();}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}];}createForm(){this.reactiveForm=this.fb.group({name:["",[om.required,om.minLength(5)]],cpf:["",om.required],address:["",om.required],number:["",om.required],email:["",om.required],website:["",om.required]});}updateSearchTerm(l){console.log("updateSearchTerm");let o=l.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i};}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent();}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent();}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary());}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary());}updateSummary(){let l=this.filteredIndexes.length,o=l===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:l};}focusCurrent(){let l=this.filteredIndexes[this.currentIndex];l!==void 0&&(document.activeElement?.blur(),this.filterTargets[l].focus());}getInputElementByIndex(l){switch(l){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&$l(At,7)(qt,7)(Ot,7)(Bt,7)(Nt,7)(Vt,7)(zt,7),o&2){let p;uo(p=fo())&&(i.nameInput=p.first),uo(p=fo())&&(i.cpfInput=p.first),uo(p=fo())&&(i.addressInput=p.first),uo(p=fo())&&(i.numberInput=p.first),uo(p=fo())&&(i.emailInput=p.first),uo(p=fo())&&(i.websiteInput=p.first),uo(p=fo())&&(i.reactiveFormModal=p.first);}},standalone:false,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){o&1&&(wl(0,"div",7)(1,"div",8)(2,"po-search",9),ut("p-change-model",function(h){return i.updateSearchTerm(h)})("p-locate-next",function(){return i.onNextOccurrenceClick()})("p-locate-previous",function(){return i.onPreviousOccurrenceClick()}),ng()()(),Ul(3,"po-divider"),wl(4,"form",10)(5,"div",7),Ul(6,"po-input",11,0),$0(),Ul(8,"po-input",12,1),$0(),ng(),wl(10,"div",7),Ul(11,"po-input",13,2),$0(),Ul(13,"po-number",14,3),$0(),ng(),wl(15,"div",7),Ul(16,"po-email",15,4),$0(),Ul(18,"po-url",16,5),$0(),ng(),wl(20,"div",7)(21,"po-button",17),ut("p-click",function(){return i.saveForm()}),ng()()(),wl(22,"po-modal",18,6)(24,"div",7),Ul(25,"po-info",19)(26,"po-info",20),ng(),Ul(27,"po-divider"),wl(28,"div",7),Ul(29,"po-info",21)(30,"po-info",22),ng(),Ul(31,"po-divider"),wl(32,"div",7),Ul(33,"po-info",23)(34,"po-info",24),ng()()),o&2&&(Pp(2),YE("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),Pp(2),YE("formGroup",i.reactiveForm),Pp(2),G0(),Pp(2),G0(),Pp(3),G0(),Pp(2),G0(),Pp(3),G0(),Pp(2),G0(),Pp(3),YE("p-disabled",!i.reactiveForm.valid),Pp(),YE("p-primary-action",i.modalPrimaryAction),Pp(3),YE("p-value",i.reactiveForm.controls.name.value),Pp(),YE("p-value",i.reactiveForm.controls.cpf.value),Pp(3),YE("p-value",i.reactiveForm.controls.address.value),Pp(),YE("p-value",i.reactiveForm.controls.number.value),Pp(3),YE("p-value",i.reactiveForm.controls.email.value),Pp(),YE("p-value",i.reactiveForm.controls.website.value));},dependencies:[aY,iY,oY,vk,gk,Pe,di,Ap,Yo,ha,tr,Vp,dt$1,jo],encapsulation:2,changeDetection:1})}return a})();var Wt=a=>({"docs-sample-code-tabs":a}),$e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Search Form Fields with Locate"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-search-fields-locate"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Wt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ze],encapsulation:2})}return a})();var et=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-doc"]],standalone:false,decls:1426,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoSearchModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-search."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoSearchComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),ng(),wl(15,"p"),Ux(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),ng(),wl(17,"h4"),Ux(18,"Boas pr\xE1ticas"),ng(),wl(19,"p"),Ux(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),ng(),wl(21,"ul")(22,"li"),Ux(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),ng(),wl(24,"li"),Ux(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),ng(),wl(26,"li"),Ux(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),ng(),wl(28,"li"),Ux(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),ng(),wl(30,"li"),Ux(31,"Quando apropriado, destaque os termos da busca nos resultados."),ng(),wl(32,"li"),Ux(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),ng(),wl(34,"li"),Ux(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),ng(),wl(36,"li"),Ux(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),ng()(),wl(38,"h4"),Ux(39,"Acessibilidade tratada no componente"),ng(),wl(40,"p"),Ux(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),ng(),wl(42,"ul")(43,"li"),Ux(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),ng(),wl(45,"li"),Ux(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),ng()(),wl(47,"h4"),Ux(48,"Tokens customiz\xE1veis"),ng(),wl(49,"p"),Ux(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(51,"blockquote")(52,"p"),Ux(53,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(54,"a",6),Ux(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(56,"."),ng()(),wl(57,"table")(58,"thead")(59,"tr")(60,"th"),Ux(61,"Propriedade"),ng(),wl(62,"th"),Ux(63,"Descri\xE7\xE3o"),ng(),wl(64,"th"),Ux(65,"Valor Padr\xE3o"),ng()()(),wl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Ux(70,"Default Values"),ng()(),Ul(71,"td")(72,"td"),ng(),wl(73,"tr")(74,"td")(75,"code"),Ux(76,"--font-family"),ng()(),wl(77,"td"),Ux(78,"Fam\xEDlia tipogr\xE1fica do campo"),ng(),wl(79,"td")(80,"code"),Ux(81,"var(--font-family-theme)"),ng()()(),wl(82,"tr")(83,"td")(84,"code"),Ux(85,"--font-size"),ng()(),wl(86,"td"),Ux(87,"Tamanho da fonte do campo"),ng(),wl(88,"td")(89,"code"),Ux(90,"var(--font-size-default)"),ng()()(),wl(91,"tr")(92,"td")(93,"code"),Ux(94,"--text-color-placeholder"),ng()(),wl(95,"td"),Ux(96,"Cor do texto no placeholder"),ng(),wl(97,"td")(98,"code"),Ux(99,"var(--color-neutral-light-30)"),ng()()(),wl(100,"tr")(101,"td")(102,"code"),Ux(103,"--color"),ng()(),wl(104,"td"),Ux(105,"Cor das bordas"),ng(),wl(106,"td")(107,"code"),Ux(108,"var(--color-neutral-dark-70)"),ng()()(),wl(109,"tr")(110,"td")(111,"code"),Ux(112,"--border-radius"),ng()(),wl(113,"td"),Ux(114,"Raio das bordas"),ng(),wl(115,"td")(116,"code"),Ux(117,"var(--border-radius-md)"),ng()()(),wl(118,"tr")(119,"td")(120,"code"),Ux(121,"--background"),ng()(),wl(122,"td"),Ux(123,"Cor de background"),ng(),wl(124,"td")(125,"code"),Ux(126,"var(--color-neutral-light-05)"),ng()()(),wl(127,"tr")(128,"td")(129,"code"),Ux(130,"--text-color"),ng()(),wl(131,"td"),Ux(132,"Cor do texto edit\xE1vel"),ng(),wl(133,"td")(134,"code"),Ux(135,"var(--color-neutral-dark-90)"),ng()()(),wl(136,"tr")(137,"td")(138,"code"),Ux(139,"--color-clear"),ng()(),wl(140,"td"),Ux(141,"Cor do \xEDcone close"),ng(),wl(142,"td")(143,"code"),Ux(144,"var(--color-action-default)"),ng()()(),wl(145,"tr")(146,"td")(147,"code"),Ux(148,"--color-controls"),ng()(),wl(149,"td"),Ux(150,"Cor dos \xEDcones de controle do mode location"),ng(),wl(151,"td")(152,"code"),Ux(153,"var(--color-action-default)"),ng()()(),wl(154,"tr")(155,"td")(156,"code"),Ux(157,"--transition-property"),ng()(),wl(158,"td"),Ux(159,"Atributo da transi\xE7\xE3o"),ng(),wl(160,"td")(161,"code"),Ux(162,"all"),ng()()(),wl(163,"tr")(164,"td")(165,"code"),Ux(166,"--transition-duration"),ng()(),wl(167,"td"),Ux(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),ng(),wl(169,"td")(170,"code"),Ux(171,"var(--duration-extra-fast)"),ng()()(),wl(172,"tr")(173,"td")(174,"code"),Ux(175,"--transition-timing"),ng()(),wl(176,"td"),Ux(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),ng(),wl(178,"td")(179,"code"),Ux(180,"var(--timing-standart)"),ng()()(),wl(181,"tr")(182,"td")(183,"strong"),Ux(184,"Icon"),ng()(),Ul(185,"td")(186,"td"),ng(),wl(187,"tr")(188,"td")(189,"code"),Ux(190,"--color-icon-read"),ng()(),wl(191,"td"),Ux(192,"Cor do \xEDcone de busca no modo action"),ng(),wl(193,"td")(194,"code"),Ux(195,"var(--color-neutral-dark-70)"),ng()()(),wl(196,"tr")(197,"td")(198,"code"),Ux(199,"--color-icon"),ng()(),wl(200,"td"),Ux(201,"Cor do \xEDcone de busca no modo trigger"),ng(),wl(202,"td")(203,"code"),Ux(204,"var(--color-action-default)"),ng()()(),wl(205,"tr")(206,"td")(207,"strong"),Ux(208,"Hover"),ng()(),Ul(209,"td")(210,"td"),ng(),wl(211,"tr")(212,"td")(213,"code"),Ux(214,"--color-hover"),ng()(),wl(215,"td"),Ux(216,"Cor das bordas no estado hover"),ng(),wl(217,"td")(218,"code"),Ux(219,"var(--color-action-hover)"),ng()()(),wl(220,"tr")(221,"td")(222,"code"),Ux(223,"--background-hover"),ng()(),wl(224,"td"),Ux(225,"Cor de background no estado hover"),ng(),wl(226,"td")(227,"code"),Ux(228,"var(--color-brand-01-lightest)"),ng()()(),wl(229,"tr")(230,"td")(231,"strong"),Ux(232,"Focused"),ng()(),Ul(233,"td")(234,"td"),ng(),wl(235,"tr")(236,"td")(237,"code"),Ux(238,"--color-focused"),ng()(),wl(239,"td"),Ux(240,"Cor das bordas no estado de focus"),ng(),wl(241,"td")(242,"code"),Ux(243,"var(--color-action-default)"),ng()()(),wl(244,"tr")(245,"td")(246,"code"),Ux(247,"--outline-color-focused"),ng()(),wl(248,"td"),Ux(249,"Cor do outline no estado de focus"),ng(),wl(250,"td")(251,"code"),Ux(252,"var(--color-action-focus)"),ng()()(),wl(253,"tr")(254,"td")(255,"strong"),Ux(256,"Disabled"),ng()(),Ul(257,"td")(258,"td"),ng(),wl(259,"tr")(260,"td")(261,"code"),Ux(262,"--color-disabled"),ng()(),wl(263,"td"),Ux(264,"Cor principal no estado disabled"),ng(),wl(265,"td")(266,"code"),Ux(267,"var(--color-action-disabled)"),ng()()(),wl(268,"tr")(269,"td")(270,"code"),Ux(271,"--background-disabled"),ng()(),wl(272,"td"),Ux(273,"Cor de background no estado disabled"),ng(),wl(274,"td")(275,"code"),Ux(276,"var(--color-neutral-light-20)"),ng()()()()()(),wl(277,"div",7)(278,"h4",8),Ux(279,"Seletor"),ng(),wl(280,"pre",9),Ux(281,`<po-search
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
`),ng()(),wl(282,"h4",10),Ux(283,"Propriedades"),ng(),wl(284,"table",11)(285,"tr",12)(286,"th",13),Ux(287,"Nome"),ng(),wl(288,"th",13),Ux(289,"Tipo"),ng(),wl(290,"th",13),Ux(291,"Padr\xE3o"),ng(),wl(292,"th",13),Ux(293,"Descri\xE7\xE3o"),ng()(),wl(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),Ux(298," p-aria-label"),Ul(299,"br"),ng()()(),wl(300,"td",18)(301,"code",19),Ux(302,"string"),ng()(),wl(303,"td",20),Ux(304,"-"),ng(),wl(305,"td",21)(306,"em")(307,"strong"),Ux(308,"(opcional)"),ng()(),wl(309,"p"),Ux(310,"Define um aria-label para o po-search."),ng(),wl(311,"blockquote")(312,"p"),Ux(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),wl(314,"code"),Ux(315,"aria-label"),ng(),Ux(316,` \xE9 utilizado para
acessibilidade.`),ng()()()(),wl(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),Ux(321," (p-blur)"),Ul(322,"br"),ng()()(),wl(323,"td",18)(324,"code",24),Ux(325,"EventEmitter"),ng()(),wl(326,"td",20),Ux(327,"-"),ng(),wl(328,"td",21)(329,"em")(330,"strong"),Ux(331,"(opcional)"),ng()(),wl(332,"p"),Ux(333,"Evento disparado ao sair do campo."),ng()()(),wl(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),Ux(338," (p-change-model)"),Ul(339,"br"),ng()()(),wl(340,"td",18)(341,"code",24),Ux(342,"EventEmitter"),ng()(),wl(343,"td",20),Ux(344,"-"),ng(),wl(345,"td",21)(346,"em")(347,"strong"),Ux(348,"(opcional)"),ng()(),wl(349,"p"),Ux(350,"Evento disparado ao alterar valor do model."),ng()()(),wl(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),Ux(355," p-disabled"),Ul(356,"br"),ng()()(),wl(357,"td",18)(358,"code",25),Ux(359,"boolean"),ng()(),wl(360,"td",20)(361,"p")(362,"code"),Ux(363,"false"),ng()()(),wl(364,"td",21)(365,"em")(366,"strong"),Ux(367,"(opcional)"),ng()(),wl(368,"p"),Ux(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),ng()()(),wl(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),Ux(374," (p-filter)"),Ul(375,"br"),ng()()(),wl(376,"td",18)(377,"code",24),Ux(378,"EventEmitter"),ng()(),wl(379,"td",20),Ux(380,"-"),ng(),wl(381,"td",21)(382,"em")(383,"strong"),Ux(384,"(opcional)"),ng()(),wl(385,"p"),Ux(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),ng(),wl(387,"blockquote")(388,"p"),Ux(389,"Incompat\xEDvel com a propriedade "),wl(390,"code"),Ux(391,"p-search-type"),ng(),Ux(392," do tipo "),wl(393,"code"),Ux(394,"locate"),ng(),Ux(395,"."),ng()()()(),wl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),Ux(400," p-filter-keys"),Ul(401,"br"),ng()()(),wl(402,"td",18)(403,"code",26),Ux(404,"Array<any>"),ng()(),wl(405,"td",20),Ux(406,"-"),ng(),wl(407,"td",21)(408,"p"),Ux(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),wl(410,"code"),Ux(411,"p-items"),ng(),Ux(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),ng(),wl(413,"pre")(414,"code",27),Ux(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),ng()(),wl(416,"blockquote")(417,"p"),Ux(418,"Esta propriedade \xE9 ignorada quando utilizado com "),wl(419,"code"),Ux(420,"p-filter-select"),ng(),Ux(421,` e incompat\xEDvel com a propriedade
`),wl(422,"code"),Ux(423,"p-search-type"),ng(),Ux(424," do tipo "),wl(425,"code"),Ux(426,"locate"),ng(),Ux(427,"."),ng()()()(),wl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),Ux(432," p-filter-select"),Ul(433,"br"),ng()()(),wl(434,"td",18)(435,"code",28),Ux(436,"PoSearchFilterSelect[]"),ng()(),wl(437,"td",20),Ux(438,"-"),ng(),wl(439,"td",21)(440,"p"),Ux(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),wl(442,"code"),Ux(443,"p-items"),ng(),Ux(444,". Automaticamente adiciona a op\xE7\xE3o "),wl(445,"strong"),Ux(446,"Todos"),ng(),Ux(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),ng(),wl(448,"p"),Ux(449,"Exemplo de uso:"),ng(),wl(450,"pre")(451,"code",27),Ux(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),ng()(),wl(453,"blockquote")(454,"p"),Ux(455,"Ao ser habilitada, a propriedade "),wl(456,"code"),Ux(457,"p-filter-keys"),ng(),Ux(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),wl(459,"code"),Ux(460,"p-search-type"),ng(),Ux(461," do tipo "),wl(462,"code"),Ux(463,"locate"),ng(),Ux(464,"."),ng()()()(),wl(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),Ux(469," p-filter-type"),Ul(470,"br"),ng()()(),wl(471,"td",18)(472,"code",29),Ux(473,"PoSearchFilterMode"),ng()(),wl(474,"td",20)(475,"p")(476,"code"),Ux(477,"startsWith"),ng()()(),wl(478,"td",21)(479,"em")(480,"strong"),Ux(481,"(opcional)"),ng()(),wl(482,"p"),Ux(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),wl(484,"strong"),Ux(485,"PoSearchFilterMode"),ng(),Ux(486,"."),ng(),wl(487,"blockquote")(488,"p"),Ux(489,"Incompat\xEDvel com a propriedade "),wl(490,"code"),Ux(491,"p-search-type"),ng(),Ux(492," do tipo "),wl(493,"code"),Ux(494,"locate"),ng(),Ux(495,"."),ng()()()(),wl(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),Ux(500," (p-filtered-items-change)"),Ul(501,"br"),ng()()(),wl(502,"td",18)(503,"code",24),Ux(504,"EventEmitter"),ng()(),wl(505,"td",20),Ux(506,"-"),ng(),wl(507,"td",21)(508,"em")(509,"strong"),Ux(510,"(opcional)"),ng()(),wl(511,"p"),Ux(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),ng(),wl(513,"blockquote")(514,"p"),Ux(515,"Incompat\xEDvel com a propriedade "),wl(516,"code"),Ux(517,"p-search-type"),ng(),Ux(518," do tipo "),wl(519,"code"),Ux(520,"locate"),ng(),Ux(521,"."),ng()()()(),wl(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),Ux(526," (p-focus)"),Ul(527,"br"),ng()()(),wl(528,"td",18)(529,"code",24),Ux(530,"EventEmitter"),ng()(),wl(531,"td",20),Ux(532,"-"),ng(),wl(533,"td",21)(534,"em")(535,"strong"),Ux(536,"(opcional)"),ng()(),wl(537,"p"),Ux(538,"Evento emitido quando o campo de entrada (input) recebe foco."),ng()()(),wl(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),Ux(543," (p-footer-action-listbox)"),Ul(544,"br"),ng()()(),wl(545,"td",18)(546,"code",24),Ux(547,"EventEmitter"),ng()(),wl(548,"td",20),Ux(549,"-"),ng(),wl(550,"td",21)(551,"em")(552,"strong"),Ux(553,"(opcional)"),ng()(),wl(554,"p"),Ux(555,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),wl(556,"code"),Ux(557,"listbox"),ng(),Ux(558,`.
O texto exibido pode ser configurado por meio do literal `),wl(559,"code"),Ux(560,"footerActionListbox"),ng(),Ux(561,"."),ng()()(),wl(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),Ux(566," p-icon"),Ul(567,"br"),ng()()(),wl(568,"td",18)(569,"code",19),Ux(570,"string "),ng(),wl(571,"code",30),Ux(572," TemplateRef<void>"),ng()(),wl(573,"td",20),Ux(574,"-"),ng(),wl(575,"td",21)(576,"em")(577,"strong"),Ux(578,"(opcional)"),ng()(),wl(579,"p"),Ux(580,"Permite customizar o \xEDcone de busca que acompanha o campo."),ng(),wl(581,"p"),Ux(582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(583,"a",31),Ux(584,"Biblioteca de \xEDcones PO UI"),ng(),Ux(585,", conforme exemplo:"),ng(),wl(586,"pre")(587,"code"),Ux(588,`<po-search p-icon="an an-user"></po-search>
`),ng()(),wl(589,"p"),Ux(590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(591,"em"),Ux(592,"Font Awesome"),ng(),Ux(593,`, desde que a biblioteca
esteja carregada no projeto:`),ng(),wl(594,"pre")(595,"code"),Ux(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),ng()(),wl(597,"p"),Ux(598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(599,"code"),Ux(600,"TemplateRef"),ng(),Ux(601,", conforme exemplo abaixo:"),ng(),wl(602,"pre")(603,"code"),Ux(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),ng()()()(),wl(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),Ux(609," p-items"),Ul(610,"br"),ng()()(),wl(611,"td",18)(612,"code",26),Ux(613,"Array<any>"),ng()(),wl(614,"td",20),Ux(615,"-"),ng(),wl(616,"td",21)(617,"em")(618,"strong"),Ux(619,"(opcional)"),ng()(),wl(620,"p"),Ux(621,"Lista de itens que ser\xE3o utilizados para pesquisa."),ng(),wl(622,"blockquote")(623,"p"),Ux(624,"Incompat\xEDvel com a propriedade "),wl(625,"code"),Ux(626,"p-search-type"),ng(),Ux(627," do tipo "),wl(628,"code"),Ux(629,"locate"),ng(),Ux(630,"."),ng()()()(),wl(631,"tr",14)(632,"td",15)(633,"div",22)(634,"span",23),Ux(635," (p-keydown)"),Ul(636,"br"),ng()()(),wl(637,"td",18)(638,"code",24),Ux(639,"EventEmitter"),ng()(),wl(640,"td",20),Ux(641,"-"),ng(),wl(642,"td",21)(643,"em")(644,"strong"),Ux(645,"(opcional)"),ng()(),wl(646,"p"),Ux(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(648,"code"),Ux(649,"KeyboardEvent"),ng(),Ux(650," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(651,"tr",14)(652,"td",15)(653,"div",16)(654,"span",17),Ux(655," p-keys-label"),Ul(656,"br"),ng()()(),wl(657,"td",18)(658,"code",32),Ux(659,"Array<string>"),ng()(),wl(660,"td",20),Ux(661,"-"),ng(),wl(662,"td",21)(663,"em")(664,"strong"),Ux(665,"(opcional)"),ng()(),wl(666,"p"),Ux(667,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),wl(668,"code"),Ux(669,"listbox"),ng(),Ux(670,` quando a propriedade
`),wl(671,"code"),Ux(672,"p-show-listbox"),ng(),Ux(673," estiver habilitada."),ng(),wl(674,"p"),Ux(675,"Deve ser informado um array de strings contendo at\xE9 "),wl(676,"strong"),Ux(677,"3 propriedades"),ng(),Ux(678,"."),ng(),wl(679,"p"),Ux(680,"Exemplo de uso:"),ng(),wl(681,"pre")(682,"code",33),Ux(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),ng()()()(),wl(684,"tr",14)(685,"td",15)(686,"div",22)(687,"span",23),Ux(688," (p-listbox-onclick)"),Ul(689,"br"),ng()()(),wl(690,"td",18)(691,"code",24),Ux(692,"EventEmitter"),ng()(),wl(693,"td",20),Ux(694,"-"),ng(),wl(695,"td",21)(696,"em")(697,"strong"),Ux(698,"(opcional)"),ng()(),wl(699,"p"),Ux(700,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),ng(),wl(701,"blockquote")(702,"p"),Ux(703,"Incompat\xEDvel com a propriedade "),wl(704,"code"),Ux(705,"p-search-type"),ng(),Ux(706," do tipo "),wl(707,"code"),Ux(708,"locate"),ng(),Ux(709,"."),ng()()()(),wl(710,"tr",14)(711,"td",15)(712,"div",16)(713,"span",17),Ux(714," p-literals"),Ul(715,"br"),ng()()(),wl(716,"td",18)(717,"code",34),Ux(718,"PoSearchLiterals"),ng()(),wl(719,"td",20),Ux(720,"-"),ng(),wl(721,"td",21)(722,"em")(723,"strong"),Ux(724,"(opcional)"),ng()(),wl(725,"p"),Ux(726,"Objeto com as literais usadas no "),wl(727,"code"),Ux(728,"po-search"),ng(),Ux(729,", permitindo personalizar os textos exibidos no componente."),ng(),wl(730,"p"),Ux(731,"Para utilizar basta passar a literal que deseja customizar:"),ng(),wl(732,"pre")(733,"code"),Ux(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),ng()(),wl(735,"p"),Ux(736,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),ng(),wl(737,"pre")(738,"code"),Ux(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),ng()(),wl(740,"blockquote")(741,"p"),Ux(742,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),wl(743,"a",35)(744,"code"),Ux(745,"PoI18nService"),ng()(),Ux(746,` ou
do browser.`),ng()()()(),wl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),Ux(751," p-loading"),Ul(752,"br"),ng()()(),wl(753,"td",18)(754,"code",25),Ux(755,"boolean"),ng()(),wl(756,"td",20)(757,"p")(758,"code"),Ux(759,"false"),ng()()(),wl(760,"td",21)(761,"em")(762,"strong"),Ux(763,"(opcional)"),ng()(),wl(764,"p"),Ux(765,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng(),wl(766,"blockquote")(767,"p"),Ux(768,"Incompat\xEDvel com a propriedade "),wl(769,"code"),Ux(770,"p-search-type"),ng(),Ux(771," do tipo "),wl(772,"code"),Ux(773,"locate"),ng(),Ux(774,"."),ng()()()(),wl(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),Ux(779," (p-locate-next)"),Ul(780,"br"),ng()()(),wl(781,"td",18)(782,"code",24),Ux(783,"EventEmitter"),ng()(),wl(784,"td",20),Ux(785,"-"),ng(),wl(786,"td",21)(787,"em")(788,"strong"),Ux(789,"(opcional)"),ng()(),wl(790,"p"),Ux(791,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),ng(),wl(792,"blockquote")(793,"p"),Ux(794,"Compat\xEDvel com a propriedade "),wl(795,"code"),Ux(796,"p-search-type"),ng(),Ux(797," do tipo "),wl(798,"code"),Ux(799,"locate"),ng(),Ux(800,"."),ng()()()(),wl(801,"tr",14)(802,"td",15)(803,"div",22)(804,"span",23),Ux(805," (p-locate-previous)"),Ul(806,"br"),ng()()(),wl(807,"td",18)(808,"code",24),Ux(809,"EventEmitter"),ng()(),wl(810,"td",20),Ux(811,"-"),ng(),wl(812,"td",21)(813,"em")(814,"strong"),Ux(815,"(opcional)"),ng()(),wl(816,"p"),Ux(817,'Evento disparado ao clicar no controle "Resultado anterior".'),ng(),wl(818,"blockquote")(819,"p"),Ux(820,"Compat\xEDvel com a propriedade "),wl(821,"code"),Ux(822,"p-search-type"),ng(),Ux(823," do tipo "),wl(824,"code"),Ux(825,"locate"),ng(),Ux(826,"."),ng()()()(),wl(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),Ux(831," p-locate-summary"),Ul(832,"br"),ng()()(),wl(833,"td",18)(834,"code",36),Ux(835,"PoSearchLocateSummary"),ng()(),wl(836,"td",20),Ux(837,"-"),ng(),wl(838,"td",21)(839,"em")(840,"strong"),Ux(841,"(opcional)"),ng()(),wl(842,"p"),Ux(843,"Define os valores do contador exibido ao usar a propriedade "),wl(844,"code"),Ux(845,"p-search-type"),ng(),Ux(846," do tipo "),wl(847,"code"),Ux(848,"locate"),ng(),Ux(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),ng(),wl(850,"pre")(851,"code",33),Ux(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),ng()(),wl(853,"blockquote")(854,"p"),Ux(855,"Compat\xEDvel com a propriedade "),wl(856,"code"),Ux(857,"p-search-type"),ng(),Ux(858," do tipo "),wl(859,"code"),Ux(860,"locate"),ng(),Ux(861,"."),ng()()()(),wl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),Ux(866," name"),Ul(867,"br"),ng()()(),wl(868,"td",18)(869,"code",19),Ux(870,"string"),ng()(),wl(871,"td",20),Ux(872,"-"),ng(),wl(873,"td",21)(874,"em")(875,"strong"),Ux(876,"(opcional)"),ng()(),wl(877,"p"),Ux(878,"Nome e identificador do campo."),ng()()(),wl(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),Ux(883," p-no-autocomplete"),Ul(884,"br"),ng()()(),wl(885,"td",18)(886,"code",25),Ux(887,"boolean"),ng()(),wl(888,"td",20)(889,"p")(890,"code"),Ux(891,"false"),ng()()(),wl(892,"td",21)(893,"em")(894,"strong"),Ux(895,"(opcional)"),ng()(),wl(896,"p"),Ux(897,"Define a propriedade nativa "),wl(898,"code"),Ux(899,"autocomplete"),ng(),Ux(900," do campo como "),wl(901,"code"),Ux(902,"off"),ng(),Ux(903,"."),ng()()(),wl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),Ux(908," p-show-listbox"),Ul(909,"br"),ng()()(),wl(910,"td",18)(911,"code",25),Ux(912,"boolean"),ng()(),wl(913,"td",20)(914,"p")(915,"code"),Ux(916,"false"),ng()()(),wl(917,"td",21)(918,"em")(919,"strong"),Ux(920,"(opcional)"),ng()(),wl(921,"p"),Ux(922,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),wl(923,"code"),Ux(924,"p-filter-keys"),ng(),Ux(925," ou "),wl(926,"code"),Ux(927,"p-filter-select"),ng(),Ux(928,` enquanto realiza
uma busca, respeitando o `),wl(929,"code"),Ux(930,"p-filter-type"),ng(),Ux(931," como modo de pesquisa."),ng(),wl(932,"blockquote")(933,"p"),Ux(934,"Incompat\xEDvel com a propriedade "),wl(935,"code"),Ux(936,"p-search-type"),ng(),Ux(937," do tipo "),wl(938,"code"),Ux(939,"locate"),ng(),Ux(940,"."),ng()()()(),wl(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),Ux(945," p-size"),Ul(946,"br"),ng()()(),wl(947,"td",18)(948,"code",19),Ux(949,"string"),ng()(),wl(950,"td",20)(951,"p")(952,"code"),Ux(953,"medium"),ng()()(),wl(954,"td",21)(955,"em")(956,"strong"),Ux(957,"(opcional)"),ng()(),wl(958,"p"),Ux(959,"Define o tamanho do componente:"),ng(),wl(960,"ul")(961,"li")(962,"code"),Ux(963,"small"),ng(),Ux(964,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(965,"li")(966,"code"),Ux(967,"medium"),ng(),Ux(968,": altura do input como 44px."),ng()(),wl(969,"blockquote")(970,"p"),Ux(971,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(972,"code"),Ux(973,"medium"),ng(),Ux(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(975,"a",37),Ux(976,"po-theme"),ng(),Ux(977,"."),ng()()()(),wl(978,"tr",14)(979,"td",15)(980,"div",16)(981,"span",17),Ux(982," p-search-type"),Ul(983,"br"),ng()()(),wl(984,"td",18)(985,"code",38),Ux(986,"searchMode"),ng()(),wl(987,"td",20)(988,"p")(989,"code"),Ux(990,"action"),ng()()(),wl(991,"td",21)(992,"em")(993,"strong"),Ux(994,"(opcional)"),ng()(),wl(995,"p"),Ux(996,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),ng(),wl(997,"ul")(998,"li")(999,"code"),Ux(1e3,"action"),ng(),Ux(1001,": Realiza a busca a cada caractere digitado."),ng(),wl(1002,"li")(1003,"code"),Ux(1004,"trigger"),ng(),Ux(1005,": Realiza a busca ao pressionar "),wl(1006,"code"),Ux(1007,"enter"),ng(),Ux(1008," ou clicar no \xEDcone de busca."),ng(),wl(1009,"li")(1010,"code"),Ux(1011,"locate"),ng(),Ux(1012,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),ng(),wl(1013,"li")(1014,"code"),Ux(1015,"execute"),ng(),Ux(1016,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),wl(1017,"code"),Ux(1018,"listbox"),ng(),Ux(1019,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),wl(1020,"code"),Ux(1021,"action"),ng(),Ux(1022," ou "),wl(1023,"code"),Ux(1024,"url"),ng(),Ux(1025," nos itens definidos em "),wl(1026,"code"),Ux(1027,"p-items"),ng(),Ux(1028,"."),ng()()()()(),wl(1029,"h3"),Ux(1030,"Interfaces"),ng(),wl(1031,"h4",39)(1032,"code",5),Ux(1033,"PoSearchFilterSelect"),ng()(),wl(1034,"div",2)(1035,"p"),Ux(1036,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),wl(1037,"code"),Ux(1038,"po-search"),ng(),Ux(1039,", ao usar a propriedade "),wl(1040,"code"),Ux(1041,"p-filter-select"),ng(),Ux(1042,"."),ng()(),wl(1043,"h4",10),Ux(1044,"Propriedades"),ng(),wl(1045,"table",11)(1046,"tr",12)(1047,"th",13),Ux(1048,"Nome"),ng(),wl(1049,"th",13),Ux(1050,"Tipo"),ng(),wl(1051,"th",13),Ux(1052,"Descri\xE7\xE3o"),ng()(),wl(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),Ux(1057," label"),Ul(1058,"br"),ng()()(),wl(1059,"td",18)(1060,"code",19),Ux(1061,"string"),ng()(),wl(1062,"td",21)(1063,"p"),Ux(1064,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),ng()()(),wl(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),Ux(1069," value"),Ul(1070,"br"),ng()()(),wl(1071,"td",18)(1072,"code",32),Ux(1073,"Array<string> "),ng(),wl(1074,"code",19),Ux(1075," string"),ng()(),wl(1076,"td",21)(1077,"p"),Ux(1078,"Valores que ser\xE3o atribu\xEDdos ao "),wl(1079,"code"),Ux(1080,"p-filter-keys"),ng()()()()(),wl(1081,"h4",39)(1082,"code",5),Ux(1083,"PoSearchLocateSummary"),ng()(),wl(1084,"div",2)(1085,"p"),Ux(1086,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),wl(1087,"code"),Ux(1088,"p-filter-locate"),ng(),Ux(1089,"."),ng()(),wl(1090,"h4",10),Ux(1091,"Propriedades"),ng(),wl(1092,"table",11)(1093,"tr",12)(1094,"th",13),Ux(1095,"Nome"),ng(),wl(1096,"th",13),Ux(1097,"Tipo"),ng(),wl(1098,"th",13),Ux(1099,"Descri\xE7\xE3o"),ng()(),wl(1100,"tr",14)(1101,"td",15)(1102,"div",16)(1103,"span",17),Ux(1104," currentIndex"),Ul(1105,"br"),ng()()(),wl(1106,"td",18)(1107,"code",40),Ux(1108,"number"),ng()(),wl(1109,"td",21)(1110,"p"),Ux(1111,"\xCDndice atual da ocorr\xEAncia localizada."),ng()()(),wl(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),Ux(1116," total"),Ul(1117,"br"),ng()()(),wl(1118,"td",18)(1119,"code",40),Ux(1120,"number"),ng()(),wl(1121,"td",21)(1122,"p"),Ux(1123,"Total de ocorr\xEAncias encontradas."),ng()()()(),wl(1124,"h4",39)(1125,"code",5),Ux(1126,"PoSearchOption"),ng()(),wl(1127,"div",2)(1128,"p"),Ux(1129,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),wl(1130,"code"),Ux(1131,"po-search"),ng(),Ux(1132,"."),ng()(),wl(1133,"h4",10),Ux(1134,"Propriedades"),ng(),wl(1135,"table",11)(1136,"tr",12)(1137,"th",13),Ux(1138,"Nome"),ng(),wl(1139,"th",13),Ux(1140,"Tipo"),ng(),wl(1141,"th",13),Ux(1142,"Descri\xE7\xE3o"),ng()(),wl(1143,"tr",14)(1144,"td",15)(1145,"div",16)(1146,"span",17),Ux(1147," label"),Ul(1148,"br"),ng()()(),wl(1149,"td",18)(1150,"code",19),Ux(1151,"string"),ng()(),wl(1152,"td",21)(1153,"em")(1154,"strong"),Ux(1155,"(opcional)"),ng()(),wl(1156,"p"),Ux(1157,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),ng(),wl(1158,"blockquote")(1159,"p"),Ux(1160,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),wl(1161,"code"),Ux(1162,"value"),ng(),Ux(1163,"."),ng()()()(),wl(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),Ux(1168," value"),Ul(1169,"br"),ng()()(),wl(1170,"td",18)(1171,"code",19),Ux(1172,"string "),ng(),wl(1173,"code",40),Ux(1174," number"),ng()(),wl(1175,"td",21)(1176,"p"),Ux(1177,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),wl(1178,"em"),Ux(1179,"model"),ng(),Ux(1180,"."),ng()()()(),wl(1181,"h4",39)(1182,"code",5),Ux(1183,"PoSearchLiterals"),ng()(),wl(1184,"div",2)(1185,"p"),Ux(1186,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1187,"code"),Ux(1188,"po-search"),ng(),Ux(1189,"."),ng()(),wl(1190,"h4",10),Ux(1191,"Propriedades"),ng(),wl(1192,"table",11)(1193,"tr",12)(1194,"th",13),Ux(1195,"Nome"),ng(),wl(1196,"th",13),Ux(1197,"Tipo"),ng(),wl(1198,"th",13),Ux(1199,"Descri\xE7\xE3o"),ng()(),wl(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),Ux(1204," all"),Ul(1205,"br"),ng()()(),wl(1206,"td",18)(1207,"code",19),Ux(1208,"string"),ng()(),wl(1209,"td",21)(1210,"em")(1211,"strong"),Ux(1212,"(opcional)"),ng()(),wl(1213,"p"),Ux(1214,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),ng(),wl(1215,"blockquote")(1216,"p"),Ux(1217,"Exibido apenas quando a propriedade "),wl(1218,"code"),Ux(1219,"p-filter-select"),ng(),Ux(1220," estiver habilitada."),ng()()()(),wl(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),Ux(1225," clean"),Ul(1226,"br"),ng()()(),wl(1227,"td",18)(1228,"code",19),Ux(1229,"string"),ng()(),wl(1230,"td",21)(1231,"em")(1232,"strong"),Ux(1233,"(opcional)"),ng()(),wl(1234,"p"),Ux(1235,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),ng()()(),wl(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),Ux(1240," footerActionListbox"),Ul(1241,"br"),ng()()(),wl(1242,"td",18)(1243,"code",19),Ux(1244,"string"),ng()(),wl(1245,"td",21)(1246,"em")(1247,"strong"),Ux(1248,"(opcional)"),ng()(),wl(1249,"p"),Ux(1250,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),ng()()(),wl(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),Ux(1255," next"),Ul(1256,"br"),ng()()(),wl(1257,"td",18)(1258,"code",19),Ux(1259,"string"),ng()(),wl(1260,"td",21)(1261,"em")(1262,"strong"),Ux(1263,"(opcional)"),ng()(),wl(1264,"p"),Ux(1265,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),ng(),wl(1266,"blockquote")(1267,"p"),Ux(1268,"Exibido apenas quando a propriedade "),wl(1269,"code"),Ux(1270,"p-filter-locate"),ng(),Ux(1271," estiver habilitada."),ng()()()(),wl(1272,"tr",14)(1273,"td",15)(1274,"div",16)(1275,"span",17),Ux(1276," of"),Ul(1277,"br"),ng()()(),wl(1278,"td",18)(1279,"code",19),Ux(1280,"string"),ng()(),wl(1281,"td",21)(1282,"em")(1283,"strong"),Ux(1284,"(opcional)"),ng()(),wl(1285,"p"),Ux(1286,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),ng(),wl(1287,"blockquote")(1288,"p"),Ux(1289,"Exibido apenas quando a propriedade "),wl(1290,"code"),Ux(1291,"p-filter-locate"),ng(),Ux(1292," estiver habilitada."),ng()()()(),wl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),Ux(1297," placeholderListbox"),Ul(1298,"br"),ng()()(),wl(1299,"td",18)(1300,"code",19),Ux(1301,"string"),ng()(),wl(1302,"td",21)(1303,"em")(1304,"strong"),Ux(1305,"(opcional)"),ng()(),wl(1306,"p"),Ux(1307,"Texto exibido como "),wl(1308,"em"),Ux(1309,"placeholder"),ng(),Ux(1310," na lista de resultados."),ng()()(),wl(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),Ux(1315," previous"),Ul(1316,"br"),ng()()(),wl(1317,"td",18)(1318,"code",19),Ux(1319,"string"),ng()(),wl(1320,"td",21)(1321,"em")(1322,"strong"),Ux(1323,"(opcional)"),ng()(),wl(1324,"p"),Ux(1325,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),ng(),wl(1326,"blockquote")(1327,"p"),Ux(1328,"Exibido apenas quando a propriedade "),wl(1329,"code"),Ux(1330,"p-filter-locate"),ng(),Ux(1331," estiver habilitada."),ng()()()(),wl(1332,"tr",14)(1333,"td",15)(1334,"div",16)(1335,"span",17),Ux(1336," result"),Ul(1337,"br"),ng()()(),wl(1338,"td",18)(1339,"code",19),Ux(1340,"string"),ng()(),wl(1341,"td",21)(1342,"em")(1343,"strong"),Ux(1344,"(opcional)"),ng()(),wl(1345,"p"),Ux(1346,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),ng(),wl(1347,"blockquote")(1348,"p"),Ux(1349,"Exibido apenas quando a propriedade "),wl(1350,"code"),Ux(1351,"p-filter-locate"),ng(),Ux(1352," estiver habilitada."),ng()()()(),wl(1353,"tr",14)(1354,"td",15)(1355,"div",16)(1356,"span",17),Ux(1357," search"),Ul(1358,"br"),ng()()(),wl(1359,"td",18)(1360,"code",19),Ux(1361,"string"),ng()(),wl(1362,"td",21)(1363,"em")(1364,"strong"),Ux(1365,"(opcional)"),ng()(),wl(1366,"p"),Ux(1367,"Texto exibido como "),wl(1368,"em"),Ux(1369,"placeholder"),ng(),Ux(1370," no campo de busca."),ng()()()(),wl(1371,"h3"),Ux(1372,"Enums"),ng(),wl(1373,"h4",4)(1374,"code",5),Ux(1375,"PoSearchFilterMode"),ng()(),wl(1376,"div",2)(1377,"p"),Ux(1378,"Define o tipo de busca usado no "),wl(1379,"code"),Ux(1380,"po-search"),ng(),Ux(1381,"."),ng()(),wl(1382,"h4",10),Ux(1383,"Propriedades"),ng(),wl(1384,"table",11)(1385,"tr",12)(1386,"th",13),Ux(1387,"Nome"),ng(),wl(1388,"th",13),Ux(1389,"Descri\xE7\xE3o"),ng()(),wl(1390,"tr",14)(1391,"td",15)(1392,"div",16)(1393,"span",17),Ux(1394," startsWith"),Ul(1395,"br"),ng()()(),wl(1396,"td",21)(1397,"p"),Ux(1398,"Verifica se o texto "),wl(1399,"em"),Ux(1400,"inicia"),ng(),Ux(1401," com o valor pesquisado."),ng()()(),wl(1402,"tr",14)(1403,"td",15)(1404,"div",16)(1405,"span",17),Ux(1406," contains"),Ul(1407,"br"),ng()()(),wl(1408,"td",21)(1409,"p"),Ux(1410,"Verifica se o texto "),wl(1411,"em"),Ux(1412,"cont\xE9m"),ng(),Ux(1413," o valor pesquisado."),ng()()(),wl(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),Ux(1418," endsWith"),Ul(1419,"br"),ng()()(),wl(1420,"td",21)(1421,"p"),Ux(1422,"Verifica se o texto "),wl(1423,"em"),Ux(1424,"finaliza"),ng(),Ux(1425," com o valor pesquisado."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var tt=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-search-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),ng()()()),o&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,je,Re,Ke,Ue,Qe,Ye,$e,et],encapsulation:2})}return a})();var Kt=[{path:"",component:tt}],nt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(Kt),vL]})}return a})();var ui=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,nt]})}return a})();export{ui as DocPoSearchModule};