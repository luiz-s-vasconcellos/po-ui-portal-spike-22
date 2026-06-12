import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,t as tb,dB as $p,S,cR as fY,cS as am,aL as uhe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,aZ as bpe,a_ as g3,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,cd as sme,b9 as ONe,ap as Ie,aB as gx,aQ as cx,aR as ax,aM as gw,aN as Z0,bv as Jx,aS as lx,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,X as CNe,_ as Sme,a2 as WE,W as we,aI as gc,b5 as Ko,b6 as U3,cV as bk,cW as wk,cE as Uz,ct as Hhe,d0 as $3,a3 as SNe,aA as Ex,aq as ix,at as ox,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic"]],standalone:false,decls:1,vars:0,template:function(o,i){o&1&&Hl(0,"po-search");},dependencies:[uhe],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Search Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-search-basic/sample-po-search-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-search></po-search>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-search-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,$e,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,qe],encapsulation:2})}return a})();var nt=["poSearch"];function it(a,w){if(a&1&&(Cl(0,"div")(1,"strong"),qx(2),og(),qx(3),og()),a&2){let r=w.$implicit,o=Ex().$implicit;Lp(2),dg("",r,": "),Lp(),dg(" ",o[r]," \xA0 ");}}function at(a,w){if(a&1&&(Cl(0,"li"),cx(1,it,4,2,"div",null,ax),og()),a&2){let r=w.$implicit,o=Ex();Lp(),lx(o.changeFilter(r));}}var Be=(()=>{class a{http=f(tb);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=$p.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"},{value:"loading",label:"Loading"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:$p.startsWith},{label:"Contains",value:$p.contains},{label:"Ends With",value:$p.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Execute",value:"execute"},{label:"Locate",value:"locate"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}ngOnChanges(r){r.items&&(this.filteredItems=this.items);}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"]);});}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r);}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r);}filter(r){this.filteredItems=r,this.event=r.length===0?"p-change-model":"p-filtered-items-change";}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o);}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"");}catch(r){this.customLiterals=void 0;}}changeEvent(r){setTimeout(()=>{this.event=r;});}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"");}catch(r){this.customLocateSummary=void 0;}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=$p.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService();}cleanInput(){try{this.poSearch.clearSearch();}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&zl(nt,7),o&2){let p;uo(p=fo())&&(i.poSearch=p.first);}},standalone:false,features:[Ie],decls:32,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-loading","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=gx();Cl(0,"div",2)(1,"po-search",3,0),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-filtered-items-change",function(d){return i.filter(d)})("p-locate-next",function(){return i.changeEvent("p-locate-next")})("p-locate-previous",function(){return i.changeEvent("p-locate-previous")}),og()(),Hl(3,"po-divider"),Cl(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),cx(9,at,3,0,"li",null,ax),og()()()()(),Hl(11,"po-divider"),Cl(12,"div",2),Hl(13,"po-info",7)(14,"po-info",8),og(),Hl(15,"po-divider"),Cl(16,"form",null,1)(18,"po-input",9),gw("ngModelChange",function(d){return Jy(p),Zx(i.ariaLabel,d)||(i.ariaLabel=d),e_(d)}),og(),Z0(),Cl(19,"po-input",10),gw("ngModelChange",function(d){return Jy(p),Zx(i.itemsModel,d)||(i.itemsModel=d),e_(d)}),dt("p-change-model",function(d){return i.changeItems(d)}),og(),Z0(),Cl(20,"po-checkbox-group",11),gw("ngModelChange",function(d){return Jy(p),Zx(i.properties,d)||(i.properties=d),e_(d)}),og(),Z0(),Cl(21,"po-radio-group",12),gw("ngModelChange",function(d){return Jy(p),Zx(i.icon,d)||(i.icon=d),e_(d)}),og(),Z0(),Cl(22,"po-radio-group",13),gw("ngModelChange",function(d){return Jy(p),Zx(i.searchMode,d)||(i.searchMode=d),e_(d)}),og(),Z0(),Cl(23,"po-radio-group",14),gw("ngModelChange",function(d){return Jy(p),Zx(i.filterMode,d)||(i.filterMode=d),e_(d)}),og(),Z0(),Cl(24,"po-radio-group",15),gw("ngModelChange",function(d){return Jy(p),Zx(i.size,d)||(i.size=d),e_(d)}),og(),Z0(),Cl(25,"po-input",16),gw("ngModelChange",function(d){return Jy(p),Zx(i.locateSummary,d)||(i.locateSummary=d),e_(d)}),dt("p-change",function(){return i.changeLocateSummary()}),og(),Z0(),Cl(26,"po-input",17),gw("ngModelChange",function(d){return Jy(p),Zx(i.literals,d)||(i.literals=d),e_(d)}),dt("p-change",function(){return i.changeLiterals()}),og(),Z0(),Cl(27,"po-input",18),gw("ngModelChange",function(d){return Jy(p),Zx(i.filterModel,d)||(i.filterModel=d),e_(d)}),dt("p-change-model",function(d){return i.updateFilterKeys(d)}),og(),Z0(),Cl(28,"po-input",19),gw("ngModelChange",function(d){return Jy(p),Zx(i.filterSelectModel,d)||(i.filterSelectModel=d),e_(d)}),dt("p-change",function(d){return i.updateFilterSelect(d)}),og(),Z0(),Hl(29,"po-divider"),Cl(30,"div",2)(31,"po-button",20),dt("p-click",function(){return i.restore()}),og()()();}o&2&&(Lp(),ZE("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),Lp(5),ZE("p-label",Jx("Itens encontrados: ",i.filteredItems?.length)),Lp(3),lx(i.filteredItems),Lp(4),ZE("p-value",i.search),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.ariaLabel),X0(),Lp(),pw("ngModel",i.itemsModel),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.icon),ZE("p-options",i.iconsOptions),X0(),Lp(),pw("ngModel",i.searchMode),ZE("p-options",i.searchModeOptions),X0(),Lp(),pw("ngModel",i.filterMode),ZE("p-options",i.filterModeOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0(),Lp(),pw("ngModel",i.locateSummary),X0(),Lp(),pw("ngModel",i.literals),X0(),Lp(),pw("ngModel",i.filterModel),X0(),Lp(),pw("ngModel",i.filterSelectModel),X0());},dependencies:[lY,sY,aY,gk,fk,bpe,g3,Qt,_v,L3,q3,Nde,sme,ONe,uhe],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Search Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-search-labs/sample-po-search-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-search-labs/sample-po-search-labs.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-search-labs"),og(),Hl(29,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,lt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Be],encapsulation:2})}return a})();var le=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function st(a,w){if(a&1&&(Cl(0,"div",0),Hl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),og()),a&2){let r=w.$implicit;Lp(),ZE("p-value",r.name),Lp(),ZE("p-value",r.nickname),Lp(),ZE("p-value",r.email);}}function mt(a,w){a&1&&Hl(0,"div");}function pt(a,w){if(a&1&&(Cl(0,"li",7),qx(1),ix(2,mt,1,0,"div"),og(),Cl(3,"li",7),qx(4),og()),a&2){let r=w.$implicit,o=Ex();Lp(),dg(" Nickname: ",r.nickname," "),Lp(),ox(o.compareObjects(r)?2:-1),Lp(2),dg("Email: ",r.email);}}var Ve=(()=>{class a{service=f(le);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people"]],standalone:false,features:[we([le])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(Cl(0,"div",0)(1,"po-search",1),dt("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),Hl(2,"po-divider"),cx(3,st,4,3,"div",0,ax),Hl(5,"po-divider"),Cl(6,"po-list-view",2),WE(7,pt,5,3,"ng-template",3),og()),o&2&&(Lp(),ZE("p-items",i.items)("p-filter-keys",i.filterKeys),Lp(2),lx(i.peopleFiltered),Lp(3),ZE("p-items",i.items));},dependencies:[_v,sme,CNe,Sme,uhe],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Search Find People"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Cl(25,"po-tab",10)(26,"div")(27,"label",6),qx(28,"sample-po-search-find-people/sample-po-search-find-people.component.css"),og(),Cl(29,"pre",11),qx(30,`li {
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
`),og()()()()(),Cl(31,"div",12),Hl(32,"sample-po-search-find-people"),og(),Hl(33,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ct,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ve],encapsulation:2})}return a})();var re=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ht(a,w){if(a&1&&(Cl(0,"div",0),Hl(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),og()),a&2){let r=w.$implicit;Lp(2),ZE("p-value",r.name),Lp(),ZE("p-value",r.nickname),Lp(),ZE("p-value",r.email);}}var je=(()=>{class a{service=f(re);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox"]],standalone:false,features:[we([re])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(Cl(0,"div",0)(1,"po-search",1),dt("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),cx(2,ht,5,3,"div",0,ax)),o&2&&(Lp(),ZE("p-items",i.items)("p-filter-keys",i.filterKeys),Lp(),lx(i.peopleFiltered));},dependencies:[_v,sme,uhe],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Search With Listbox"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-search-listbox"),og(),Hl(27,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ft,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,je],encapsulation:2})}return a})();function Et(a,w){if(a&1&&(Cl(0,"div",0)(1,"po-container",2),Hl(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),og()()),a&2){let r=w.$implicit;Lp(2),ZE("p-value",r.name),Lp(),ZE("p-value",r.gender),Lp(),ZE("p-value",r.planet),Lp(),ZE("p-value",r.father);}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}];}filtered(r){this.filteredItems=r;}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select"]],standalone:false,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(Cl(0,"div",0)(1,"po-search",1),dt("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),cx(2,Et,6,4,"div",0,ax)),o&2&&(Lp(),ZE("p-items",i.items)("p-filter-select",i.filterSelect),Lp(),lx(i.filteredItems));},dependencies:[gc,sme,uhe],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Search With Filter Select + Listbox"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-search-filter-select"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,vt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Re],encapsulation:2})}return a})();var Ke=(()=>{class a{poModal;filterType=$p.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&zl(Ko,7),o&2){let p;uo(p=fo())&&(i.poModal=p.first);}},standalone:false,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){o&1&&(Cl(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),qx(4,"Entre com o nome ou c\xF3digo da rotina"),og()(),Cl(5,"div",1)(6,"po-search",3),dt("p-footer-action-listbox",function(){return i.footerAction()}),og()()()(),Cl(7,"po-modal",4,0),Hl(9,"po-table",5),og()),o&2&&(Lp(),ZE("p-height",180),Lp(5),ZE("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),Lp(3),ZE("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",true));},dependencies:[Ko,U3,ONe,uhe],styles:[".full[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Search Form Fields with Execute"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-search-execute/sample-po-search-execute.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-search-execute/sample-po-search-execute.component.css"),og(),Cl(25,"pre",11),qx(26,`.full {
  width: 100%;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-search-execute"),og(),Hl(29,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ct,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ke],encapsulation:2})}return a})();var _t=["nameInput"],Mt=["cpfInput"],wt=["addressInput"],It=["numberInput"],Tt=["emailInput"],kt=["websiteInput"],Ft=["reactiveFormData"],Ue=(()=>{class a{fb=f(fY);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=true;locateSummary={currentIndex:0,total:0};filterType=$p.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm();}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}];}createForm(){this.reactiveForm=this.fb.group({name:["",[am.required,am.minLength(5)]],cpf:["",am.required],address:["",am.required],number:["",am.required],email:["",am.required],website:["",am.required]});}updateSearchTerm(r){console.log("updateSearchTerm");let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i};}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent();}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent();}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary());}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary());}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r};}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus());}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&zl(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;uo(p=fo())&&(i.nameInput=p.first),uo(p=fo())&&(i.cpfInput=p.first),uo(p=fo())&&(i.addressInput=p.first),uo(p=fo())&&(i.numberInput=p.first),uo(p=fo())&&(i.emailInput=p.first),uo(p=fo())&&(i.websiteInput=p.first),uo(p=fo())&&(i.reactiveFormModal=p.first);}},standalone:false,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){o&1&&(Cl(0,"div",7)(1,"div",8)(2,"po-search",9),dt("p-change-model",function(h){return i.updateSearchTerm(h)})("p-locate-next",function(){return i.onNextOccurrenceClick()})("p-locate-previous",function(){return i.onPreviousOccurrenceClick()}),og()()(),Hl(3,"po-divider"),Cl(4,"form",10)(5,"div",7),Hl(6,"po-input",11,0),Z0(),Hl(8,"po-input",12,1),Z0(),og(),Cl(10,"div",7),Hl(11,"po-input",13,2),Z0(),Hl(13,"po-number",14,3),Z0(),og(),Cl(15,"div",7),Hl(16,"po-email",15,4),Z0(),Hl(18,"po-url",16,5),Z0(),og(),Cl(20,"div",7)(21,"po-button",17),dt("p-click",function(){return i.saveForm()}),og()()(),Cl(22,"po-modal",18,6)(24,"div",7),Hl(25,"po-info",19)(26,"po-info",20),og(),Hl(27,"po-divider"),Cl(28,"div",7),Hl(29,"po-info",21)(30,"po-info",22),og(),Hl(31,"po-divider"),Cl(32,"div",7),Hl(33,"po-info",23)(34,"po-info",24),og()()),o&2&&(Lp(2),ZE("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),Lp(2),ZE("formGroup",i.reactiveForm),Lp(2),X0(),Lp(2),X0(),Lp(3),X0(),Lp(2),X0(),Lp(3),X0(),Lp(2),X0(),Lp(3),ZE("p-disabled",!i.reactiveForm.valid),Lp(),ZE("p-primary-action",i.modalPrimaryAction),Lp(3),ZE("p-value",i.reactiveForm.controls.name.value),Lp(),ZE("p-value",i.reactiveForm.controls.cpf.value),Lp(3),ZE("p-value",i.reactiveForm.controls.address.value),Lp(),ZE("p-value",i.reactiveForm.controls.number.value),Lp(3),ZE("p-value",i.reactiveForm.controls.email.value),Lp(),ZE("p-value",i.reactiveForm.controls.website.value));},dependencies:[lY,sY,aY,bk,wk,Qt,_v,Uz,q3,Hhe,$3,sme,Ko,uhe],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Search Form Fields with Locate"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-search-fields-locate"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Lt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ue],encapsulation:2})}return a})();var Qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-doc"]],standalone:false,decls:1426,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoSearchModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-search."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoSearchComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),og(),Cl(15,"p"),qx(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),og(),Cl(17,"h4"),qx(18,"Boas pr\xE1ticas"),og(),Cl(19,"p"),qx(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),og(),Cl(21,"ul")(22,"li"),qx(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),og(),Cl(24,"li"),qx(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),og(),Cl(26,"li"),qx(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),og(),Cl(28,"li"),qx(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),og(),Cl(30,"li"),qx(31,"Quando apropriado, destaque os termos da busca nos resultados."),og(),Cl(32,"li"),qx(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),og(),Cl(34,"li"),qx(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),og(),Cl(36,"li"),qx(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),og()(),Cl(38,"h4"),qx(39,"Acessibilidade tratada no componente"),og(),Cl(40,"p"),qx(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),og(),Cl(42,"ul")(43,"li"),qx(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),og(),Cl(45,"li"),qx(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),og()(),Cl(47,"h4"),qx(48,"Tokens customiz\xE1veis"),og(),Cl(49,"p"),qx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(51,"blockquote")(52,"p"),qx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(54,"a",6),qx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(56,"."),og()(),Cl(57,"table")(58,"thead")(59,"tr")(60,"th"),qx(61,"Propriedade"),og(),Cl(62,"th"),qx(63,"Descri\xE7\xE3o"),og(),Cl(64,"th"),qx(65,"Valor Padr\xE3o"),og()()(),Cl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),qx(70,"Default Values"),og()(),Hl(71,"td")(72,"td"),og(),Cl(73,"tr")(74,"td")(75,"code"),qx(76,"--font-family"),og()(),Cl(77,"td"),qx(78,"Fam\xEDlia tipogr\xE1fica do campo"),og(),Cl(79,"td")(80,"code"),qx(81,"var(--font-family-theme)"),og()()(),Cl(82,"tr")(83,"td")(84,"code"),qx(85,"--font-size"),og()(),Cl(86,"td"),qx(87,"Tamanho da fonte do campo"),og(),Cl(88,"td")(89,"code"),qx(90,"var(--font-size-default)"),og()()(),Cl(91,"tr")(92,"td")(93,"code"),qx(94,"--text-color-placeholder"),og()(),Cl(95,"td"),qx(96,"Cor do texto no placeholder"),og(),Cl(97,"td")(98,"code"),qx(99,"var(--color-neutral-light-30)"),og()()(),Cl(100,"tr")(101,"td")(102,"code"),qx(103,"--color"),og()(),Cl(104,"td"),qx(105,"Cor das bordas"),og(),Cl(106,"td")(107,"code"),qx(108,"var(--color-neutral-dark-70)"),og()()(),Cl(109,"tr")(110,"td")(111,"code"),qx(112,"--border-radius"),og()(),Cl(113,"td"),qx(114,"Raio das bordas"),og(),Cl(115,"td")(116,"code"),qx(117,"var(--border-radius-md)"),og()()(),Cl(118,"tr")(119,"td")(120,"code"),qx(121,"--background"),og()(),Cl(122,"td"),qx(123,"Cor de background"),og(),Cl(124,"td")(125,"code"),qx(126,"var(--color-neutral-light-05)"),og()()(),Cl(127,"tr")(128,"td")(129,"code"),qx(130,"--text-color"),og()(),Cl(131,"td"),qx(132,"Cor do texto edit\xE1vel"),og(),Cl(133,"td")(134,"code"),qx(135,"var(--color-neutral-dark-90)"),og()()(),Cl(136,"tr")(137,"td")(138,"code"),qx(139,"--color-clear"),og()(),Cl(140,"td"),qx(141,"Cor do \xEDcone close"),og(),Cl(142,"td")(143,"code"),qx(144,"var(--color-action-default)"),og()()(),Cl(145,"tr")(146,"td")(147,"code"),qx(148,"--color-controls"),og()(),Cl(149,"td"),qx(150,"Cor dos \xEDcones de controle do mode location"),og(),Cl(151,"td")(152,"code"),qx(153,"var(--color-action-default)"),og()()(),Cl(154,"tr")(155,"td")(156,"code"),qx(157,"--transition-property"),og()(),Cl(158,"td"),qx(159,"Atributo da transi\xE7\xE3o"),og(),Cl(160,"td")(161,"code"),qx(162,"all"),og()()(),Cl(163,"tr")(164,"td")(165,"code"),qx(166,"--transition-duration"),og()(),Cl(167,"td"),qx(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),og(),Cl(169,"td")(170,"code"),qx(171,"var(--duration-extra-fast)"),og()()(),Cl(172,"tr")(173,"td")(174,"code"),qx(175,"--transition-timing"),og()(),Cl(176,"td"),qx(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),og(),Cl(178,"td")(179,"code"),qx(180,"var(--timing-standart)"),og()()(),Cl(181,"tr")(182,"td")(183,"strong"),qx(184,"Icon"),og()(),Hl(185,"td")(186,"td"),og(),Cl(187,"tr")(188,"td")(189,"code"),qx(190,"--color-icon-read"),og()(),Cl(191,"td"),qx(192,"Cor do \xEDcone de busca no modo action"),og(),Cl(193,"td")(194,"code"),qx(195,"var(--color-neutral-dark-70)"),og()()(),Cl(196,"tr")(197,"td")(198,"code"),qx(199,"--color-icon"),og()(),Cl(200,"td"),qx(201,"Cor do \xEDcone de busca no modo trigger"),og(),Cl(202,"td")(203,"code"),qx(204,"var(--color-action-default)"),og()()(),Cl(205,"tr")(206,"td")(207,"strong"),qx(208,"Hover"),og()(),Hl(209,"td")(210,"td"),og(),Cl(211,"tr")(212,"td")(213,"code"),qx(214,"--color-hover"),og()(),Cl(215,"td"),qx(216,"Cor das bordas no estado hover"),og(),Cl(217,"td")(218,"code"),qx(219,"var(--color-action-hover)"),og()()(),Cl(220,"tr")(221,"td")(222,"code"),qx(223,"--background-hover"),og()(),Cl(224,"td"),qx(225,"Cor de background no estado hover"),og(),Cl(226,"td")(227,"code"),qx(228,"var(--color-brand-01-lightest)"),og()()(),Cl(229,"tr")(230,"td")(231,"strong"),qx(232,"Focused"),og()(),Hl(233,"td")(234,"td"),og(),Cl(235,"tr")(236,"td")(237,"code"),qx(238,"--color-focused"),og()(),Cl(239,"td"),qx(240,"Cor das bordas no estado de focus"),og(),Cl(241,"td")(242,"code"),qx(243,"var(--color-action-default)"),og()()(),Cl(244,"tr")(245,"td")(246,"code"),qx(247,"--outline-color-focused"),og()(),Cl(248,"td"),qx(249,"Cor do outline no estado de focus"),og(),Cl(250,"td")(251,"code"),qx(252,"var(--color-action-focus)"),og()()(),Cl(253,"tr")(254,"td")(255,"strong"),qx(256,"Disabled"),og()(),Hl(257,"td")(258,"td"),og(),Cl(259,"tr")(260,"td")(261,"code"),qx(262,"--color-disabled"),og()(),Cl(263,"td"),qx(264,"Cor principal no estado disabled"),og(),Cl(265,"td")(266,"code"),qx(267,"var(--color-action-disabled)"),og()()(),Cl(268,"tr")(269,"td")(270,"code"),qx(271,"--background-disabled"),og()(),Cl(272,"td"),qx(273,"Cor de background no estado disabled"),og(),Cl(274,"td")(275,"code"),qx(276,"var(--color-neutral-light-20)"),og()()()()()(),Cl(277,"div",7)(278,"h4",8),qx(279,"Seletor"),og(),Cl(280,"pre",9),qx(281,`<po-search
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
`),og()(),Cl(282,"h4",10),qx(283,"Propriedades"),og(),Cl(284,"table",11)(285,"tr",12)(286,"th",13),qx(287,"Nome"),og(),Cl(288,"th",13),qx(289,"Tipo"),og(),Cl(290,"th",13),qx(291,"Padr\xE3o"),og(),Cl(292,"th",13),qx(293,"Descri\xE7\xE3o"),og()(),Cl(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),qx(298," p-aria-label"),Hl(299,"br"),og()()(),Cl(300,"td",18)(301,"code",19),qx(302,"string"),og()(),Cl(303,"td",20),qx(304,"-"),og(),Cl(305,"td",21)(306,"em")(307,"strong"),qx(308,"(opcional)"),og()(),Cl(309,"p"),qx(310,"Define um aria-label para o po-search."),og(),Cl(311,"blockquote")(312,"p"),qx(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),Cl(314,"code"),qx(315,"aria-label"),og(),qx(316,` \xE9 utilizado para
acessibilidade.`),og()()()(),Cl(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),qx(321," (p-blur)"),Hl(322,"br"),og()()(),Cl(323,"td",18)(324,"code",24),qx(325,"EventEmitter"),og()(),Cl(326,"td",20),qx(327,"-"),og(),Cl(328,"td",21)(329,"em")(330,"strong"),qx(331,"(opcional)"),og()(),Cl(332,"p"),qx(333,"Evento disparado ao sair do campo."),og()()(),Cl(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),qx(338," (p-change-model)"),Hl(339,"br"),og()()(),Cl(340,"td",18)(341,"code",24),qx(342,"EventEmitter"),og()(),Cl(343,"td",20),qx(344,"-"),og(),Cl(345,"td",21)(346,"em")(347,"strong"),qx(348,"(opcional)"),og()(),Cl(349,"p"),qx(350,"Evento disparado ao alterar valor do model."),og()()(),Cl(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),qx(355," p-disabled"),Hl(356,"br"),og()()(),Cl(357,"td",18)(358,"code",25),qx(359,"boolean"),og()(),Cl(360,"td",20)(361,"p")(362,"code"),qx(363,"false"),og()()(),Cl(364,"td",21)(365,"em")(366,"strong"),qx(367,"(opcional)"),og()(),Cl(368,"p"),qx(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og()()(),Cl(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),qx(374," (p-filter)"),Hl(375,"br"),og()()(),Cl(376,"td",18)(377,"code",24),qx(378,"EventEmitter"),og()(),Cl(379,"td",20),qx(380,"-"),og(),Cl(381,"td",21)(382,"em")(383,"strong"),qx(384,"(opcional)"),og()(),Cl(385,"p"),qx(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),og(),Cl(387,"blockquote")(388,"p"),qx(389,"Incompat\xEDvel com a propriedade "),Cl(390,"code"),qx(391,"p-search-type"),og(),qx(392," do tipo "),Cl(393,"code"),qx(394,"locate"),og(),qx(395,"."),og()()()(),Cl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),qx(400," p-filter-keys"),Hl(401,"br"),og()()(),Cl(402,"td",18)(403,"code",26),qx(404,"Array<any>"),og()(),Cl(405,"td",20),qx(406,"-"),og(),Cl(407,"td",21)(408,"p"),qx(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),Cl(410,"code"),qx(411,"p-items"),og(),qx(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),og(),Cl(413,"pre")(414,"code",27),qx(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),og()(),Cl(416,"blockquote")(417,"p"),qx(418,"Esta propriedade \xE9 ignorada quando utilizado com "),Cl(419,"code"),qx(420,"p-filter-select"),og(),qx(421,` e incompat\xEDvel com a propriedade
`),Cl(422,"code"),qx(423,"p-search-type"),og(),qx(424," do tipo "),Cl(425,"code"),qx(426,"locate"),og(),qx(427,"."),og()()()(),Cl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),qx(432," p-filter-select"),Hl(433,"br"),og()()(),Cl(434,"td",18)(435,"code",28),qx(436,"PoSearchFilterSelect[]"),og()(),Cl(437,"td",20),qx(438,"-"),og(),Cl(439,"td",21)(440,"p"),qx(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Cl(442,"code"),qx(443,"p-items"),og(),qx(444,". Automaticamente adiciona a op\xE7\xE3o "),Cl(445,"strong"),qx(446,"Todos"),og(),qx(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),og(),Cl(448,"p"),qx(449,"Exemplo de uso:"),og(),Cl(450,"pre")(451,"code",27),qx(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),og()(),Cl(453,"blockquote")(454,"p"),qx(455,"Ao ser habilitada, a propriedade "),Cl(456,"code"),qx(457,"p-filter-keys"),og(),qx(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Cl(459,"code"),qx(460,"p-search-type"),og(),qx(461," do tipo "),Cl(462,"code"),qx(463,"locate"),og(),qx(464,"."),og()()()(),Cl(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),qx(469," p-filter-type"),Hl(470,"br"),og()()(),Cl(471,"td",18)(472,"code",29),qx(473,"PoSearchFilterMode"),og()(),Cl(474,"td",20)(475,"p")(476,"code"),qx(477,"startsWith"),og()()(),Cl(478,"td",21)(479,"em")(480,"strong"),qx(481,"(opcional)"),og()(),Cl(482,"p"),qx(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Cl(484,"strong"),qx(485,"PoSearchFilterMode"),og(),qx(486,"."),og(),Cl(487,"blockquote")(488,"p"),qx(489,"Incompat\xEDvel com a propriedade "),Cl(490,"code"),qx(491,"p-search-type"),og(),qx(492," do tipo "),Cl(493,"code"),qx(494,"locate"),og(),qx(495,"."),og()()()(),Cl(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),qx(500," (p-filtered-items-change)"),Hl(501,"br"),og()()(),Cl(502,"td",18)(503,"code",24),qx(504,"EventEmitter"),og()(),Cl(505,"td",20),qx(506,"-"),og(),Cl(507,"td",21)(508,"em")(509,"strong"),qx(510,"(opcional)"),og()(),Cl(511,"p"),qx(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),og(),Cl(513,"blockquote")(514,"p"),qx(515,"Incompat\xEDvel com a propriedade "),Cl(516,"code"),qx(517,"p-search-type"),og(),qx(518," do tipo "),Cl(519,"code"),qx(520,"locate"),og(),qx(521,"."),og()()()(),Cl(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),qx(526," (p-focus)"),Hl(527,"br"),og()()(),Cl(528,"td",18)(529,"code",24),qx(530,"EventEmitter"),og()(),Cl(531,"td",20),qx(532,"-"),og(),Cl(533,"td",21)(534,"em")(535,"strong"),qx(536,"(opcional)"),og()(),Cl(537,"p"),qx(538,"Evento emitido quando o campo de entrada (input) recebe foco."),og()()(),Cl(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),qx(543," (p-footer-action-listbox)"),Hl(544,"br"),og()()(),Cl(545,"td",18)(546,"code",24),qx(547,"EventEmitter"),og()(),Cl(548,"td",20),qx(549,"-"),og(),Cl(550,"td",21)(551,"em")(552,"strong"),qx(553,"(opcional)"),og()(),Cl(554,"p"),qx(555,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),Cl(556,"code"),qx(557,"listbox"),og(),qx(558,`.
O texto exibido pode ser configurado por meio do literal `),Cl(559,"code"),qx(560,"footerActionListbox"),og(),qx(561,"."),og()()(),Cl(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),qx(566," p-icon"),Hl(567,"br"),og()()(),Cl(568,"td",18)(569,"code",19),qx(570,"string "),og(),Cl(571,"code",30),qx(572," TemplateRef<void>"),og()(),Cl(573,"td",20),qx(574,"-"),og(),Cl(575,"td",21)(576,"em")(577,"strong"),qx(578,"(opcional)"),og()(),Cl(579,"p"),qx(580,"Permite customizar o \xEDcone de busca que acompanha o campo."),og(),Cl(581,"p"),qx(582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(583,"a",31),qx(584,"Biblioteca de \xEDcones PO UI"),og(),qx(585,", conforme exemplo:"),og(),Cl(586,"pre")(587,"code"),qx(588,`<po-search p-icon="an an-user"></po-search>
`),og()(),Cl(589,"p"),qx(590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(591,"em"),qx(592,"Font Awesome"),og(),qx(593,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Cl(594,"pre")(595,"code"),qx(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),og()(),Cl(597,"p"),qx(598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(599,"code"),qx(600,"TemplateRef"),og(),qx(601,", conforme exemplo abaixo:"),og(),Cl(602,"pre")(603,"code"),qx(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),og()()()(),Cl(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),qx(609," p-items"),Hl(610,"br"),og()()(),Cl(611,"td",18)(612,"code",26),qx(613,"Array<any>"),og()(),Cl(614,"td",20),qx(615,"-"),og(),Cl(616,"td",21)(617,"em")(618,"strong"),qx(619,"(opcional)"),og()(),Cl(620,"p"),qx(621,"Lista de itens que ser\xE3o utilizados para pesquisa."),og(),Cl(622,"blockquote")(623,"p"),qx(624,"Incompat\xEDvel com a propriedade "),Cl(625,"code"),qx(626,"p-search-type"),og(),qx(627," do tipo "),Cl(628,"code"),qx(629,"locate"),og(),qx(630,"."),og()()()(),Cl(631,"tr",14)(632,"td",15)(633,"div",22)(634,"span",23),qx(635," (p-keydown)"),Hl(636,"br"),og()()(),Cl(637,"td",18)(638,"code",24),qx(639,"EventEmitter"),og()(),Cl(640,"td",20),qx(641,"-"),og(),Cl(642,"td",21)(643,"em")(644,"strong"),qx(645,"(opcional)"),og()(),Cl(646,"p"),qx(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(648,"code"),qx(649,"KeyboardEvent"),og(),qx(650," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(651,"tr",14)(652,"td",15)(653,"div",16)(654,"span",17),qx(655," p-keys-label"),Hl(656,"br"),og()()(),Cl(657,"td",18)(658,"code",32),qx(659,"Array<string>"),og()(),Cl(660,"td",20),qx(661,"-"),og(),Cl(662,"td",21)(663,"em")(664,"strong"),qx(665,"(opcional)"),og()(),Cl(666,"p"),qx(667,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),Cl(668,"code"),qx(669,"listbox"),og(),qx(670,` quando a propriedade
`),Cl(671,"code"),qx(672,"p-show-listbox"),og(),qx(673," estiver habilitada."),og(),Cl(674,"p"),qx(675,"Deve ser informado um array de strings contendo at\xE9 "),Cl(676,"strong"),qx(677,"3 propriedades"),og(),qx(678,"."),og(),Cl(679,"p"),qx(680,"Exemplo de uso:"),og(),Cl(681,"pre")(682,"code",33),qx(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),og()()()(),Cl(684,"tr",14)(685,"td",15)(686,"div",22)(687,"span",23),qx(688," (p-listbox-onclick)"),Hl(689,"br"),og()()(),Cl(690,"td",18)(691,"code",24),qx(692,"EventEmitter"),og()(),Cl(693,"td",20),qx(694,"-"),og(),Cl(695,"td",21)(696,"em")(697,"strong"),qx(698,"(opcional)"),og()(),Cl(699,"p"),qx(700,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),og(),Cl(701,"blockquote")(702,"p"),qx(703,"Incompat\xEDvel com a propriedade "),Cl(704,"code"),qx(705,"p-search-type"),og(),qx(706," do tipo "),Cl(707,"code"),qx(708,"locate"),og(),qx(709,"."),og()()()(),Cl(710,"tr",14)(711,"td",15)(712,"div",16)(713,"span",17),qx(714," p-literals"),Hl(715,"br"),og()()(),Cl(716,"td",18)(717,"code",34),qx(718,"PoSearchLiterals"),og()(),Cl(719,"td",20),qx(720,"-"),og(),Cl(721,"td",21)(722,"em")(723,"strong"),qx(724,"(opcional)"),og()(),Cl(725,"p"),qx(726,"Objeto com as literais usadas no "),Cl(727,"code"),qx(728,"po-search"),og(),qx(729,", permitindo personalizar os textos exibidos no componente."),og(),Cl(730,"p"),qx(731,"Para utilizar basta passar a literal que deseja customizar:"),og(),Cl(732,"pre")(733,"code"),qx(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),og()(),Cl(735,"p"),qx(736,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Cl(737,"pre")(738,"code"),qx(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),og()(),Cl(740,"blockquote")(741,"p"),qx(742,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Cl(743,"a",35)(744,"code"),qx(745,"PoI18nService"),og()(),qx(746,` ou
do browser.`),og()()()(),Cl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),qx(751," p-loading"),Hl(752,"br"),og()()(),Cl(753,"td",18)(754,"code",25),qx(755,"boolean"),og()(),Cl(756,"td",20)(757,"p")(758,"code"),qx(759,"false"),og()()(),Cl(760,"td",21)(761,"em")(762,"strong"),qx(763,"(opcional)"),og()(),Cl(764,"p"),qx(765,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og(),Cl(766,"blockquote")(767,"p"),qx(768,"Incompat\xEDvel com a propriedade "),Cl(769,"code"),qx(770,"p-search-type"),og(),qx(771," do tipo "),Cl(772,"code"),qx(773,"locate"),og(),qx(774,"."),og()()()(),Cl(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),qx(779," (p-locate-next)"),Hl(780,"br"),og()()(),Cl(781,"td",18)(782,"code",24),qx(783,"EventEmitter"),og()(),Cl(784,"td",20),qx(785,"-"),og(),Cl(786,"td",21)(787,"em")(788,"strong"),qx(789,"(opcional)"),og()(),Cl(790,"p"),qx(791,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),og(),Cl(792,"blockquote")(793,"p"),qx(794,"Compat\xEDvel com a propriedade "),Cl(795,"code"),qx(796,"p-search-type"),og(),qx(797," do tipo "),Cl(798,"code"),qx(799,"locate"),og(),qx(800,"."),og()()()(),Cl(801,"tr",14)(802,"td",15)(803,"div",22)(804,"span",23),qx(805," (p-locate-previous)"),Hl(806,"br"),og()()(),Cl(807,"td",18)(808,"code",24),qx(809,"EventEmitter"),og()(),Cl(810,"td",20),qx(811,"-"),og(),Cl(812,"td",21)(813,"em")(814,"strong"),qx(815,"(opcional)"),og()(),Cl(816,"p"),qx(817,'Evento disparado ao clicar no controle "Resultado anterior".'),og(),Cl(818,"blockquote")(819,"p"),qx(820,"Compat\xEDvel com a propriedade "),Cl(821,"code"),qx(822,"p-search-type"),og(),qx(823," do tipo "),Cl(824,"code"),qx(825,"locate"),og(),qx(826,"."),og()()()(),Cl(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),qx(831," p-locate-summary"),Hl(832,"br"),og()()(),Cl(833,"td",18)(834,"code",36),qx(835,"PoSearchLocateSummary"),og()(),Cl(836,"td",20),qx(837,"-"),og(),Cl(838,"td",21)(839,"em")(840,"strong"),qx(841,"(opcional)"),og()(),Cl(842,"p"),qx(843,"Define os valores do contador exibido ao usar a propriedade "),Cl(844,"code"),qx(845,"p-search-type"),og(),qx(846," do tipo "),Cl(847,"code"),qx(848,"locate"),og(),qx(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),og(),Cl(850,"pre")(851,"code",33),qx(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),og()(),Cl(853,"blockquote")(854,"p"),qx(855,"Compat\xEDvel com a propriedade "),Cl(856,"code"),qx(857,"p-search-type"),og(),qx(858," do tipo "),Cl(859,"code"),qx(860,"locate"),og(),qx(861,"."),og()()()(),Cl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),qx(866," name"),Hl(867,"br"),og()()(),Cl(868,"td",18)(869,"code",19),qx(870,"string"),og()(),Cl(871,"td",20),qx(872,"-"),og(),Cl(873,"td",21)(874,"em")(875,"strong"),qx(876,"(opcional)"),og()(),Cl(877,"p"),qx(878,"Nome e identificador do campo."),og()()(),Cl(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),qx(883," p-no-autocomplete"),Hl(884,"br"),og()()(),Cl(885,"td",18)(886,"code",25),qx(887,"boolean"),og()(),Cl(888,"td",20)(889,"p")(890,"code"),qx(891,"false"),og()()(),Cl(892,"td",21)(893,"em")(894,"strong"),qx(895,"(opcional)"),og()(),Cl(896,"p"),qx(897,"Define a propriedade nativa "),Cl(898,"code"),qx(899,"autocomplete"),og(),qx(900," do campo como "),Cl(901,"code"),qx(902,"off"),og(),qx(903,"."),og()()(),Cl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),qx(908," p-show-listbox"),Hl(909,"br"),og()()(),Cl(910,"td",18)(911,"code",25),qx(912,"boolean"),og()(),Cl(913,"td",20)(914,"p")(915,"code"),qx(916,"false"),og()()(),Cl(917,"td",21)(918,"em")(919,"strong"),qx(920,"(opcional)"),og()(),Cl(921,"p"),qx(922,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),Cl(923,"code"),qx(924,"p-filter-keys"),og(),qx(925," ou "),Cl(926,"code"),qx(927,"p-filter-select"),og(),qx(928,` enquanto realiza
uma busca, respeitando o `),Cl(929,"code"),qx(930,"p-filter-type"),og(),qx(931," como modo de pesquisa."),og(),Cl(932,"blockquote")(933,"p"),qx(934,"Incompat\xEDvel com a propriedade "),Cl(935,"code"),qx(936,"p-search-type"),og(),qx(937," do tipo "),Cl(938,"code"),qx(939,"locate"),og(),qx(940,"."),og()()()(),Cl(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),qx(945," p-size"),Hl(946,"br"),og()()(),Cl(947,"td",18)(948,"code",19),qx(949,"string"),og()(),Cl(950,"td",20)(951,"p")(952,"code"),qx(953,"medium"),og()()(),Cl(954,"td",21)(955,"em")(956,"strong"),qx(957,"(opcional)"),og()(),Cl(958,"p"),qx(959,"Define o tamanho do componente:"),og(),Cl(960,"ul")(961,"li")(962,"code"),qx(963,"small"),og(),qx(964,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(965,"li")(966,"code"),qx(967,"medium"),og(),qx(968,": altura do input como 44px."),og()(),Cl(969,"blockquote")(970,"p"),qx(971,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(972,"code"),qx(973,"medium"),og(),qx(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(975,"a",37),qx(976,"po-theme"),og(),qx(977,"."),og()()()(),Cl(978,"tr",14)(979,"td",15)(980,"div",16)(981,"span",17),qx(982," p-search-type"),Hl(983,"br"),og()()(),Cl(984,"td",18)(985,"code",38),qx(986,"searchMode"),og()(),Cl(987,"td",20)(988,"p")(989,"code"),qx(990,"action"),og()()(),Cl(991,"td",21)(992,"em")(993,"strong"),qx(994,"(opcional)"),og()(),Cl(995,"p"),qx(996,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),og(),Cl(997,"ul")(998,"li")(999,"code"),qx(1e3,"action"),og(),qx(1001,": Realiza a busca a cada caractere digitado."),og(),Cl(1002,"li")(1003,"code"),qx(1004,"trigger"),og(),qx(1005,": Realiza a busca ao pressionar "),Cl(1006,"code"),qx(1007,"enter"),og(),qx(1008," ou clicar no \xEDcone de busca."),og(),Cl(1009,"li")(1010,"code"),qx(1011,"locate"),og(),qx(1012,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),og(),Cl(1013,"li")(1014,"code"),qx(1015,"execute"),og(),qx(1016,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),Cl(1017,"code"),qx(1018,"listbox"),og(),qx(1019,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),Cl(1020,"code"),qx(1021,"action"),og(),qx(1022," ou "),Cl(1023,"code"),qx(1024,"url"),og(),qx(1025," nos itens definidos em "),Cl(1026,"code"),qx(1027,"p-items"),og(),qx(1028,"."),og()()()()(),Cl(1029,"h3"),qx(1030,"Interfaces"),og(),Cl(1031,"h4",39)(1032,"code",5),qx(1033,"PoSearchFilterSelect"),og()(),Cl(1034,"div",2)(1035,"p"),qx(1036,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),Cl(1037,"code"),qx(1038,"po-search"),og(),qx(1039,", ao usar a propriedade "),Cl(1040,"code"),qx(1041,"p-filter-select"),og(),qx(1042,"."),og()(),Cl(1043,"h4",10),qx(1044,"Propriedades"),og(),Cl(1045,"table",11)(1046,"tr",12)(1047,"th",13),qx(1048,"Nome"),og(),Cl(1049,"th",13),qx(1050,"Tipo"),og(),Cl(1051,"th",13),qx(1052,"Descri\xE7\xE3o"),og()(),Cl(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),qx(1057," label"),Hl(1058,"br"),og()()(),Cl(1059,"td",18)(1060,"code",19),qx(1061,"string"),og()(),Cl(1062,"td",21)(1063,"p"),qx(1064,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og()()(),Cl(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),qx(1069," value"),Hl(1070,"br"),og()()(),Cl(1071,"td",18)(1072,"code",32),qx(1073,"Array<string> "),og(),Cl(1074,"code",19),qx(1075," string"),og()(),Cl(1076,"td",21)(1077,"p"),qx(1078,"Valores que ser\xE3o atribu\xEDdos ao "),Cl(1079,"code"),qx(1080,"p-filter-keys"),og()()()()(),Cl(1081,"h4",39)(1082,"code",5),qx(1083,"PoSearchLocateSummary"),og()(),Cl(1084,"div",2)(1085,"p"),qx(1086,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),Cl(1087,"code"),qx(1088,"p-filter-locate"),og(),qx(1089,"."),og()(),Cl(1090,"h4",10),qx(1091,"Propriedades"),og(),Cl(1092,"table",11)(1093,"tr",12)(1094,"th",13),qx(1095,"Nome"),og(),Cl(1096,"th",13),qx(1097,"Tipo"),og(),Cl(1098,"th",13),qx(1099,"Descri\xE7\xE3o"),og()(),Cl(1100,"tr",14)(1101,"td",15)(1102,"div",16)(1103,"span",17),qx(1104," currentIndex"),Hl(1105,"br"),og()()(),Cl(1106,"td",18)(1107,"code",40),qx(1108,"number"),og()(),Cl(1109,"td",21)(1110,"p"),qx(1111,"\xCDndice atual da ocorr\xEAncia localizada."),og()()(),Cl(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),qx(1116," total"),Hl(1117,"br"),og()()(),Cl(1118,"td",18)(1119,"code",40),qx(1120,"number"),og()(),Cl(1121,"td",21)(1122,"p"),qx(1123,"Total de ocorr\xEAncias encontradas."),og()()()(),Cl(1124,"h4",39)(1125,"code",5),qx(1126,"PoSearchOption"),og()(),Cl(1127,"div",2)(1128,"p"),qx(1129,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),Cl(1130,"code"),qx(1131,"po-search"),og(),qx(1132,"."),og()(),Cl(1133,"h4",10),qx(1134,"Propriedades"),og(),Cl(1135,"table",11)(1136,"tr",12)(1137,"th",13),qx(1138,"Nome"),og(),Cl(1139,"th",13),qx(1140,"Tipo"),og(),Cl(1141,"th",13),qx(1142,"Descri\xE7\xE3o"),og()(),Cl(1143,"tr",14)(1144,"td",15)(1145,"div",16)(1146,"span",17),qx(1147," label"),Hl(1148,"br"),og()()(),Cl(1149,"td",18)(1150,"code",19),qx(1151,"string"),og()(),Cl(1152,"td",21)(1153,"em")(1154,"strong"),qx(1155,"(opcional)"),og()(),Cl(1156,"p"),qx(1157,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og(),Cl(1158,"blockquote")(1159,"p"),qx(1160,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Cl(1161,"code"),qx(1162,"value"),og(),qx(1163,"."),og()()()(),Cl(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),qx(1168," value"),Hl(1169,"br"),og()()(),Cl(1170,"td",18)(1171,"code",19),qx(1172,"string "),og(),Cl(1173,"code",40),qx(1174," number"),og()(),Cl(1175,"td",21)(1176,"p"),qx(1177,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Cl(1178,"em"),qx(1179,"model"),og(),qx(1180,"."),og()()()(),Cl(1181,"h4",39)(1182,"code",5),qx(1183,"PoSearchLiterals"),og()(),Cl(1184,"div",2)(1185,"p"),qx(1186,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1187,"code"),qx(1188,"po-search"),og(),qx(1189,"."),og()(),Cl(1190,"h4",10),qx(1191,"Propriedades"),og(),Cl(1192,"table",11)(1193,"tr",12)(1194,"th",13),qx(1195,"Nome"),og(),Cl(1196,"th",13),qx(1197,"Tipo"),og(),Cl(1198,"th",13),qx(1199,"Descri\xE7\xE3o"),og()(),Cl(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),qx(1204," all"),Hl(1205,"br"),og()()(),Cl(1206,"td",18)(1207,"code",19),qx(1208,"string"),og()(),Cl(1209,"td",21)(1210,"em")(1211,"strong"),qx(1212,"(opcional)"),og()(),Cl(1213,"p"),qx(1214,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),og(),Cl(1215,"blockquote")(1216,"p"),qx(1217,"Exibido apenas quando a propriedade "),Cl(1218,"code"),qx(1219,"p-filter-select"),og(),qx(1220," estiver habilitada."),og()()()(),Cl(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),qx(1225," clean"),Hl(1226,"br"),og()()(),Cl(1227,"td",18)(1228,"code",19),qx(1229,"string"),og()(),Cl(1230,"td",21)(1231,"em")(1232,"strong"),qx(1233,"(opcional)"),og()(),Cl(1234,"p"),qx(1235,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),og()()(),Cl(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),qx(1240," footerActionListbox"),Hl(1241,"br"),og()()(),Cl(1242,"td",18)(1243,"code",19),qx(1244,"string"),og()(),Cl(1245,"td",21)(1246,"em")(1247,"strong"),qx(1248,"(opcional)"),og()(),Cl(1249,"p"),qx(1250,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),og()()(),Cl(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),qx(1255," next"),Hl(1256,"br"),og()()(),Cl(1257,"td",18)(1258,"code",19),qx(1259,"string"),og()(),Cl(1260,"td",21)(1261,"em")(1262,"strong"),qx(1263,"(opcional)"),og()(),Cl(1264,"p"),qx(1265,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),og(),Cl(1266,"blockquote")(1267,"p"),qx(1268,"Exibido apenas quando a propriedade "),Cl(1269,"code"),qx(1270,"p-filter-locate"),og(),qx(1271," estiver habilitada."),og()()()(),Cl(1272,"tr",14)(1273,"td",15)(1274,"div",16)(1275,"span",17),qx(1276," of"),Hl(1277,"br"),og()()(),Cl(1278,"td",18)(1279,"code",19),qx(1280,"string"),og()(),Cl(1281,"td",21)(1282,"em")(1283,"strong"),qx(1284,"(opcional)"),og()(),Cl(1285,"p"),qx(1286,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),og(),Cl(1287,"blockquote")(1288,"p"),qx(1289,"Exibido apenas quando a propriedade "),Cl(1290,"code"),qx(1291,"p-filter-locate"),og(),qx(1292," estiver habilitada."),og()()()(),Cl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),qx(1297," placeholderListbox"),Hl(1298,"br"),og()()(),Cl(1299,"td",18)(1300,"code",19),qx(1301,"string"),og()(),Cl(1302,"td",21)(1303,"em")(1304,"strong"),qx(1305,"(opcional)"),og()(),Cl(1306,"p"),qx(1307,"Texto exibido como "),Cl(1308,"em"),qx(1309,"placeholder"),og(),qx(1310," na lista de resultados."),og()()(),Cl(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),qx(1315," previous"),Hl(1316,"br"),og()()(),Cl(1317,"td",18)(1318,"code",19),qx(1319,"string"),og()(),Cl(1320,"td",21)(1321,"em")(1322,"strong"),qx(1323,"(opcional)"),og()(),Cl(1324,"p"),qx(1325,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),og(),Cl(1326,"blockquote")(1327,"p"),qx(1328,"Exibido apenas quando a propriedade "),Cl(1329,"code"),qx(1330,"p-filter-locate"),og(),qx(1331," estiver habilitada."),og()()()(),Cl(1332,"tr",14)(1333,"td",15)(1334,"div",16)(1335,"span",17),qx(1336," result"),Hl(1337,"br"),og()()(),Cl(1338,"td",18)(1339,"code",19),qx(1340,"string"),og()(),Cl(1341,"td",21)(1342,"em")(1343,"strong"),qx(1344,"(opcional)"),og()(),Cl(1345,"p"),qx(1346,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),og(),Cl(1347,"blockquote")(1348,"p"),qx(1349,"Exibido apenas quando a propriedade "),Cl(1350,"code"),qx(1351,"p-filter-locate"),og(),qx(1352," estiver habilitada."),og()()()(),Cl(1353,"tr",14)(1354,"td",15)(1355,"div",16)(1356,"span",17),qx(1357," search"),Hl(1358,"br"),og()()(),Cl(1359,"td",18)(1360,"code",19),qx(1361,"string"),og()(),Cl(1362,"td",21)(1363,"em")(1364,"strong"),qx(1365,"(opcional)"),og()(),Cl(1366,"p"),qx(1367,"Texto exibido como "),Cl(1368,"em"),qx(1369,"placeholder"),og(),qx(1370," no campo de busca."),og()()()(),Cl(1371,"h3"),qx(1372,"Enums"),og(),Cl(1373,"h4",4)(1374,"code",5),qx(1375,"PoSearchFilterMode"),og()(),Cl(1376,"div",2)(1377,"p"),qx(1378,"Define o tipo de busca usado no "),Cl(1379,"code"),qx(1380,"po-search"),og(),qx(1381,"."),og()(),Cl(1382,"h4",10),qx(1383,"Propriedades"),og(),Cl(1384,"table",11)(1385,"tr",12)(1386,"th",13),qx(1387,"Nome"),og(),Cl(1388,"th",13),qx(1389,"Descri\xE7\xE3o"),og()(),Cl(1390,"tr",14)(1391,"td",15)(1392,"div",16)(1393,"span",17),qx(1394," startsWith"),Hl(1395,"br"),og()()(),Cl(1396,"td",21)(1397,"p"),qx(1398,"Verifica se o texto "),Cl(1399,"em"),qx(1400,"inicia"),og(),qx(1401," com o valor pesquisado."),og()()(),Cl(1402,"tr",14)(1403,"td",15)(1404,"div",16)(1405,"span",17),qx(1406," contains"),Hl(1407,"br"),og()()(),Cl(1408,"td",21)(1409,"p"),qx(1410,"Verifica se o texto "),Cl(1411,"em"),qx(1412,"cont\xE9m"),og(),qx(1413," o valor pesquisado."),og()()(),Cl(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),qx(1418," endsWith"),Hl(1419,"br"),og()()(),Cl(1420,"td",21)(1421,"p"),qx(1422,"Verifica se o texto "),Cl(1423,"em"),qx(1424,"finaliza"),og(),qx(1425," com o valor pesquisado."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var Xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-search-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),og()()()),o&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2})}return a})();var Ot=[{path:"",component:Xe}],Ye=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(Ot),bL]})}return a})();var Jn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,Ye]})}return a})();export{Jn as DocPoSearchModule};