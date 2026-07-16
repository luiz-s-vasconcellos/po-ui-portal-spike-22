import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,i as ib,dv as Up,I,cM as cY,cN as lm,aL as Jue,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht$1,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,a_ as lpe,a$ as n3,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,c9 as Yhe,ba as _Ne,ap as Te,aB as Sx,aQ as _x,aR as yx,aM as ww,aN as r0,br as uN,aS as Dx,aO as Ew,aP as o0,av as Yl,aw as uo,ax as fo,Z as rNe,_ as pme,a2 as JE,Y as we,aI as dc,b6 as Yo,b7 as E3,cQ as kk,cR as Ok,cz as kz,cp as Hhe,cX as L3,a3 as lNe,aA as Nx,aq as gx,at as mx,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic"]],standalone:false,decls:1,vars:0,template:function(o,i){o&1&&Gl(0,"po-search");},dependencies:[Jue],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Search Basic"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-search-basic/sample-po-search-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-search></po-search>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-search-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,$e,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,qe],encapsulation:2,changeDetection:1})}return a})();var nt=["poSearch"];function it(a,w){if(a&1&&(Tl(0,"div")(1,"strong"),iN(2),sg(),iN(3),sg()),a&2){let r=w.$implicit,o=Nx().$implicit;Vp(2),fg("",r,": "),Vp(),fg(" ",o[r]," \xA0 ");}}function at(a,w){if(a&1&&(Tl(0,"li"),_x(1,it,4,2,"div",null,yx),sg()),a&2){let r=w.$implicit,o=Nx();Vp(),Dx(o.changeFilter(r));}}var Be=(()=>{class a{http=f(ib);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Up.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"},{value:"loading",label:"Loading"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Execute",value:"execute"},{label:"Locate",value:"locate"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}ngOnChanges(r){r.items&&(this.filteredItems=this.items);}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"]);});}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r);}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r);}filter(r){this.filteredItems=r,this.event=r.length===0?"p-change-model":"p-filtered-items-change";}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o);}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"");}catch(r){this.customLiterals=void 0;}}changeEvent(r){setTimeout(()=>{this.event=r;});}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"");}catch(r){this.customLocateSummary=void 0;}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Up.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService();}cleanInput(){try{this.poSearch.clearSearch();}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&Yl(nt,7),o&2){let p;uo(p=fo())&&(i.poSearch=p.first);}},standalone:false,features:[Te],decls:32,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-loading","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=Sx();Tl(0,"div",2)(1,"po-search",3,0),ht$1("p-blur",function(){return i.changeEvent("p-blur")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-filtered-items-change",function(d){return i.filter(d)})("p-locate-next",function(){return i.changeEvent("p-locate-next")})("p-locate-previous",function(){return i.changeEvent("p-locate-previous")}),sg()(),Gl(3,"po-divider"),Tl(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),_x(9,at,3,0,"li",null,yx),sg()()()()(),Gl(11,"po-divider"),Tl(12,"div",2),Gl(13,"po-info",7)(14,"po-info",8),sg(),Gl(15,"po-divider"),Tl(16,"form",null,1)(18,"po-input",9),ww("ngModelChange",function(d){return Ky(p),sN(i.ariaLabel,d)||(i.ariaLabel=d),Xy(d)}),sg(),r0(),Tl(19,"po-input",10),ww("ngModelChange",function(d){return Ky(p),sN(i.itemsModel,d)||(i.itemsModel=d),Xy(d)}),ht$1("p-change-model",function(d){return i.changeItems(d)}),sg(),r0(),Tl(20,"po-checkbox-group",11),ww("ngModelChange",function(d){return Ky(p),sN(i.properties,d)||(i.properties=d),Xy(d)}),sg(),r0(),Tl(21,"po-radio-group",12),ww("ngModelChange",function(d){return Ky(p),sN(i.icon,d)||(i.icon=d),Xy(d)}),sg(),r0(),Tl(22,"po-radio-group",13),ww("ngModelChange",function(d){return Ky(p),sN(i.searchMode,d)||(i.searchMode=d),Xy(d)}),sg(),r0(),Tl(23,"po-radio-group",14),ww("ngModelChange",function(d){return Ky(p),sN(i.filterMode,d)||(i.filterMode=d),Xy(d)}),sg(),r0(),Tl(24,"po-radio-group",15),ww("ngModelChange",function(d){return Ky(p),sN(i.size,d)||(i.size=d),Xy(d)}),sg(),r0(),Tl(25,"po-input",16),ww("ngModelChange",function(d){return Ky(p),sN(i.locateSummary,d)||(i.locateSummary=d),Xy(d)}),ht$1("p-change",function(){return i.changeLocateSummary()}),sg(),r0(),Tl(26,"po-input",17),ww("ngModelChange",function(d){return Ky(p),sN(i.literals,d)||(i.literals=d),Xy(d)}),ht$1("p-change",function(){return i.changeLiterals()}),sg(),r0(),Tl(27,"po-input",18),ww("ngModelChange",function(d){return Ky(p),sN(i.filterModel,d)||(i.filterModel=d),Xy(d)}),ht$1("p-change-model",function(d){return i.updateFilterKeys(d)}),sg(),r0(),Tl(28,"po-input",19),ww("ngModelChange",function(d){return Ky(p),sN(i.filterSelectModel,d)||(i.filterSelectModel=d),Xy(d)}),ht$1("p-change",function(d){return i.updateFilterSelect(d)}),sg(),r0(),Gl(29,"po-divider"),Tl(30,"div",2)(31,"po-button",20),ht$1("p-click",function(){return i.restore()}),sg()()();}o&2&&(Vp(),nw("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),Vp(5),nw("p-label",uN("Itens encontrados: ",i.filteredItems?.length)),Vp(3),Dx(i.filteredItems),Vp(4),nw("p-value",i.search),Vp(),nw("p-value",i.event),Vp(4),Ew("ngModel",i.ariaLabel),o0(),Vp(),Ew("ngModel",i.itemsModel),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.icon),nw("p-options",i.iconsOptions),o0(),Vp(),Ew("ngModel",i.searchMode),nw("p-options",i.searchModeOptions),o0(),Vp(),Ew("ngModel",i.filterMode),nw("p-options",i.filterModeOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0(),Vp(),Ew("ngModel",i.locateSummary),o0(),Vp(),Ew("ngModel",i.literals),o0(),Vp(),Ew("ngModel",i.filterModel),o0(),Vp(),Ew("ngModel",i.filterSelectModel),o0());},dependencies:[oY,nY,rY,Sk,Ck,lpe,n3,Qt,mv,C3,O3,Dde,Yhe,_Ne,Jue],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Search Labs"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-search-labs/sample-po-search-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { HttpClient } from '@angular/common/http';
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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-search-labs/sample-po-search-labs.component.css"),sg(),Tl(25,"pre",11),iN(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-search-labs"),sg(),Gl(29,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,lt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Be],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function st(a,w){if(a&1&&(Tl(0,"div",0),Gl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),sg()),a&2){let r=w.$implicit;Vp(),nw("p-value",r.name),Vp(),nw("p-value",r.nickname),Vp(),nw("p-value",r.email);}}function mt(a,w){a&1&&Gl(0,"div");}function pt(a,w){if(a&1&&(Tl(0,"li",7),iN(1),gx(2,mt,1,0,"div"),sg(),Tl(3,"li",7),iN(4),sg()),a&2){let r=w.$implicit,o=Nx();Vp(),fg(" Nickname: ",r.nickname," "),Vp(),mx(o.compareObjects(r)?2:-1),Vp(2),fg("Email: ",r.email);}}var Ve=(()=>{class a{service=f(le);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people"]],standalone:false,features:[we([le])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(Tl(0,"div",0)(1,"po-search",1),ht$1("p-filtered-items-change",function(h){return i.filtered(h)}),sg()(),Gl(2,"po-divider"),_x(3,st,4,3,"div",0,yx),Gl(5,"po-divider"),Tl(6,"po-list-view",2),JE(7,pt,5,3,"ng-template",3),sg()),o&2&&(Vp(),nw("p-items",i.items)("p-filter-keys",i.filterKeys),Vp(2),Dx(i.peopleFiltered),Vp(3),nw("p-items",i.items));},dependencies:[mv,Yhe,rNe,pme,Jue],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Search Find People"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()(),Tl(25,"po-tab",10)(26,"div")(27,"label",6),iN(28,"sample-po-search-find-people/sample-po-search-find-people.component.css"),sg(),Tl(29,"pre",11),iN(30,`li {
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
`),sg()()()()(),Tl(31,"div",12),Gl(32,"sample-po-search-find-people"),sg(),Gl(33,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ct,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ve],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ht(a,w){if(a&1&&(Tl(0,"div",0),Gl(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),sg()),a&2){let r=w.$implicit;Vp(2),nw("p-value",r.name),Vp(),nw("p-value",r.nickname),Vp(),nw("p-value",r.email);}}var je=(()=>{class a{service=f(re);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox"]],standalone:false,features:[we([re])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(Tl(0,"div",0)(1,"po-search",1),ht$1("p-filtered-items-change",function(h){return i.filtered(h)}),sg()(),_x(2,ht,5,3,"div",0,yx)),o&2&&(Vp(),nw("p-items",i.items)("p-filter-keys",i.filterKeys),Vp(),Dx(i.peopleFiltered));},dependencies:[mv,Yhe,Jue],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Search With Listbox"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-search-listbox"),sg(),Gl(27,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ft,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,je],encapsulation:2,changeDetection:1})}return a})();function Et(a,w){if(a&1&&(Tl(0,"div",0)(1,"po-container",2),Gl(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),sg()()),a&2){let r=w.$implicit;Vp(2),nw("p-value",r.name),Vp(),nw("p-value",r.gender),Vp(),nw("p-value",r.planet),Vp(),nw("p-value",r.father);}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}];}filtered(r){this.filteredItems=r;}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select"]],standalone:false,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(Tl(0,"div",0)(1,"po-search",1),ht$1("p-filtered-items-change",function(h){return i.filtered(h)}),sg()(),_x(2,Et,6,4,"div",0,yx)),o&2&&(Vp(),nw("p-items",i.items)("p-filter-select",i.filterSelect),Vp(),Dx(i.filteredItems));},dependencies:[dc,Yhe,Jue],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Search With Filter Select + Listbox"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-search-filter-select"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,vt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Re],encapsulation:2,changeDetection:1})}return a})();var Ke=(()=>{class a{poModal;filterType=Up.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&Yl(Yo,7),o&2){let p;uo(p=fo())&&(i.poModal=p.first);}},standalone:false,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){o&1&&(Tl(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),iN(4,"Entre com o nome ou c\xF3digo da rotina"),sg()(),Tl(5,"div",1)(6,"po-search",3),ht$1("p-footer-action-listbox",function(){return i.footerAction()}),sg()()()(),Tl(7,"po-modal",4,0),Gl(9,"po-table",5),sg()),o&2&&(Vp(),nw("p-height",180),Vp(5),nw("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),Vp(3),nw("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",true));},dependencies:[Yo,E3,_Ne,Jue],styles:[".full[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Search Form Fields with Execute"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-search-execute/sample-po-search-execute.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-search-execute/sample-po-search-execute.component.css"),sg(),Tl(25,"pre",11),iN(26,`.full {
  width: 100%;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-search-execute"),sg(),Gl(29,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ct,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ke],encapsulation:2,changeDetection:1})}return a})();var _t=["nameInput"],Mt=["cpfInput"],wt=["addressInput"],It=["numberInput"],Tt=["emailInput"],kt=["websiteInput"],Ft=["reactiveFormData"],Ue=(()=>{class a{fb=f(cY);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=true;locateSummary={currentIndex:0,total:0};filterType=Up.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm();}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}];}createForm(){this.reactiveForm=this.fb.group({name:["",[lm.required,lm.minLength(5)]],cpf:["",lm.required],address:["",lm.required],number:["",lm.required],email:["",lm.required],website:["",lm.required]});}updateSearchTerm(r){console.log("updateSearchTerm");let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i};}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent();}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent();}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary());}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary());}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r};}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus());}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&Yl(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;uo(p=fo())&&(i.nameInput=p.first),uo(p=fo())&&(i.cpfInput=p.first),uo(p=fo())&&(i.addressInput=p.first),uo(p=fo())&&(i.numberInput=p.first),uo(p=fo())&&(i.emailInput=p.first),uo(p=fo())&&(i.websiteInput=p.first),uo(p=fo())&&(i.reactiveFormModal=p.first);}},standalone:false,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){o&1&&(Tl(0,"div",7)(1,"div",8)(2,"po-search",9),ht$1("p-change-model",function(h){return i.updateSearchTerm(h)})("p-locate-next",function(){return i.onNextOccurrenceClick()})("p-locate-previous",function(){return i.onPreviousOccurrenceClick()}),sg()()(),Gl(3,"po-divider"),Tl(4,"form",10)(5,"div",7),Gl(6,"po-input",11,0),r0(),Gl(8,"po-input",12,1),r0(),sg(),Tl(10,"div",7),Gl(11,"po-input",13,2),r0(),Gl(13,"po-number",14,3),r0(),sg(),Tl(15,"div",7),Gl(16,"po-email",15,4),r0(),Gl(18,"po-url",16,5),r0(),sg(),Tl(20,"div",7)(21,"po-button",17),ht$1("p-click",function(){return i.saveForm()}),sg()()(),Tl(22,"po-modal",18,6)(24,"div",7),Gl(25,"po-info",19)(26,"po-info",20),sg(),Gl(27,"po-divider"),Tl(28,"div",7),Gl(29,"po-info",21)(30,"po-info",22),sg(),Gl(31,"po-divider"),Tl(32,"div",7),Gl(33,"po-info",23)(34,"po-info",24),sg()()),o&2&&(Vp(2),nw("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),Vp(2),nw("formGroup",i.reactiveForm),Vp(2),o0(),Vp(2),o0(),Vp(3),o0(),Vp(2),o0(),Vp(3),o0(),Vp(2),o0(),Vp(3),nw("p-disabled",!i.reactiveForm.valid),Vp(),nw("p-primary-action",i.modalPrimaryAction),Vp(3),nw("p-value",i.reactiveForm.controls.name.value),Vp(),nw("p-value",i.reactiveForm.controls.cpf.value),Vp(3),nw("p-value",i.reactiveForm.controls.address.value),Vp(),nw("p-value",i.reactiveForm.controls.number.value),Vp(3),nw("p-value",i.reactiveForm.controls.email.value),Vp(),nw("p-value",i.reactiveForm.controls.website.value));},dependencies:[oY,nY,rY,kk,Ok,Qt,mv,kz,O3,Hhe,L3,Yhe,Yo,Jue],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Search Form Fields with Locate"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-search-fields-locate"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Lt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ue],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-doc"]],standalone:false,decls:1426,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoSearchModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-search."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoSearchComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),sg(),Tl(15,"p"),iN(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),sg(),Tl(17,"h4"),iN(18,"Boas pr\xE1ticas"),sg(),Tl(19,"p"),iN(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),sg(),Tl(21,"ul")(22,"li"),iN(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),sg(),Tl(24,"li"),iN(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),sg(),Tl(26,"li"),iN(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),sg(),Tl(28,"li"),iN(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),sg(),Tl(30,"li"),iN(31,"Quando apropriado, destaque os termos da busca nos resultados."),sg(),Tl(32,"li"),iN(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),sg(),Tl(34,"li"),iN(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),sg(),Tl(36,"li"),iN(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),sg()(),Tl(38,"h4"),iN(39,"Acessibilidade tratada no componente"),sg(),Tl(40,"p"),iN(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),sg(),Tl(42,"ul")(43,"li"),iN(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),sg(),Tl(45,"li"),iN(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),sg()(),Tl(47,"h4"),iN(48,"Tokens customiz\xE1veis"),sg(),Tl(49,"p"),iN(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(51,"blockquote")(52,"p"),iN(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(54,"a",6),iN(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(56,"."),sg()(),Tl(57,"table")(58,"thead")(59,"tr")(60,"th"),iN(61,"Propriedade"),sg(),Tl(62,"th"),iN(63,"Descri\xE7\xE3o"),sg(),Tl(64,"th"),iN(65,"Valor Padr\xE3o"),sg()()(),Tl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),iN(70,"Default Values"),sg()(),Gl(71,"td")(72,"td"),sg(),Tl(73,"tr")(74,"td")(75,"code"),iN(76,"--font-family"),sg()(),Tl(77,"td"),iN(78,"Fam\xEDlia tipogr\xE1fica do campo"),sg(),Tl(79,"td")(80,"code"),iN(81,"var(--font-family-theme)"),sg()()(),Tl(82,"tr")(83,"td")(84,"code"),iN(85,"--font-size"),sg()(),Tl(86,"td"),iN(87,"Tamanho da fonte do campo"),sg(),Tl(88,"td")(89,"code"),iN(90,"var(--font-size-default)"),sg()()(),Tl(91,"tr")(92,"td")(93,"code"),iN(94,"--text-color-placeholder"),sg()(),Tl(95,"td"),iN(96,"Cor do texto no placeholder"),sg(),Tl(97,"td")(98,"code"),iN(99,"var(--color-neutral-light-30)"),sg()()(),Tl(100,"tr")(101,"td")(102,"code"),iN(103,"--color"),sg()(),Tl(104,"td"),iN(105,"Cor das bordas"),sg(),Tl(106,"td")(107,"code"),iN(108,"var(--color-neutral-dark-70)"),sg()()(),Tl(109,"tr")(110,"td")(111,"code"),iN(112,"--border-radius"),sg()(),Tl(113,"td"),iN(114,"Raio das bordas"),sg(),Tl(115,"td")(116,"code"),iN(117,"var(--border-radius-md)"),sg()()(),Tl(118,"tr")(119,"td")(120,"code"),iN(121,"--background"),sg()(),Tl(122,"td"),iN(123,"Cor de background"),sg(),Tl(124,"td")(125,"code"),iN(126,"var(--color-neutral-light-05)"),sg()()(),Tl(127,"tr")(128,"td")(129,"code"),iN(130,"--text-color"),sg()(),Tl(131,"td"),iN(132,"Cor do texto edit\xE1vel"),sg(),Tl(133,"td")(134,"code"),iN(135,"var(--color-neutral-dark-90)"),sg()()(),Tl(136,"tr")(137,"td")(138,"code"),iN(139,"--color-clear"),sg()(),Tl(140,"td"),iN(141,"Cor do \xEDcone close"),sg(),Tl(142,"td")(143,"code"),iN(144,"var(--color-action-default)"),sg()()(),Tl(145,"tr")(146,"td")(147,"code"),iN(148,"--color-controls"),sg()(),Tl(149,"td"),iN(150,"Cor dos \xEDcones de controle do mode location"),sg(),Tl(151,"td")(152,"code"),iN(153,"var(--color-action-default)"),sg()()(),Tl(154,"tr")(155,"td")(156,"code"),iN(157,"--transition-property"),sg()(),Tl(158,"td"),iN(159,"Atributo da transi\xE7\xE3o"),sg(),Tl(160,"td")(161,"code"),iN(162,"all"),sg()()(),Tl(163,"tr")(164,"td")(165,"code"),iN(166,"--transition-duration"),sg()(),Tl(167,"td"),iN(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),sg(),Tl(169,"td")(170,"code"),iN(171,"var(--duration-extra-fast)"),sg()()(),Tl(172,"tr")(173,"td")(174,"code"),iN(175,"--transition-timing"),sg()(),Tl(176,"td"),iN(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),sg(),Tl(178,"td")(179,"code"),iN(180,"var(--timing-standart)"),sg()()(),Tl(181,"tr")(182,"td")(183,"strong"),iN(184,"Icon"),sg()(),Gl(185,"td")(186,"td"),sg(),Tl(187,"tr")(188,"td")(189,"code"),iN(190,"--color-icon-read"),sg()(),Tl(191,"td"),iN(192,"Cor do \xEDcone de busca no modo action"),sg(),Tl(193,"td")(194,"code"),iN(195,"var(--color-neutral-dark-70)"),sg()()(),Tl(196,"tr")(197,"td")(198,"code"),iN(199,"--color-icon"),sg()(),Tl(200,"td"),iN(201,"Cor do \xEDcone de busca no modo trigger"),sg(),Tl(202,"td")(203,"code"),iN(204,"var(--color-action-default)"),sg()()(),Tl(205,"tr")(206,"td")(207,"strong"),iN(208,"Hover"),sg()(),Gl(209,"td")(210,"td"),sg(),Tl(211,"tr")(212,"td")(213,"code"),iN(214,"--color-hover"),sg()(),Tl(215,"td"),iN(216,"Cor das bordas no estado hover"),sg(),Tl(217,"td")(218,"code"),iN(219,"var(--color-action-hover)"),sg()()(),Tl(220,"tr")(221,"td")(222,"code"),iN(223,"--background-hover"),sg()(),Tl(224,"td"),iN(225,"Cor de background no estado hover"),sg(),Tl(226,"td")(227,"code"),iN(228,"var(--color-brand-01-lightest)"),sg()()(),Tl(229,"tr")(230,"td")(231,"strong"),iN(232,"Focused"),sg()(),Gl(233,"td")(234,"td"),sg(),Tl(235,"tr")(236,"td")(237,"code"),iN(238,"--color-focused"),sg()(),Tl(239,"td"),iN(240,"Cor das bordas no estado de focus"),sg(),Tl(241,"td")(242,"code"),iN(243,"var(--color-action-default)"),sg()()(),Tl(244,"tr")(245,"td")(246,"code"),iN(247,"--outline-color-focused"),sg()(),Tl(248,"td"),iN(249,"Cor do outline no estado de focus"),sg(),Tl(250,"td")(251,"code"),iN(252,"var(--color-action-focus)"),sg()()(),Tl(253,"tr")(254,"td")(255,"strong"),iN(256,"Disabled"),sg()(),Gl(257,"td")(258,"td"),sg(),Tl(259,"tr")(260,"td")(261,"code"),iN(262,"--color-disabled"),sg()(),Tl(263,"td"),iN(264,"Cor principal no estado disabled"),sg(),Tl(265,"td")(266,"code"),iN(267,"var(--color-action-disabled)"),sg()()(),Tl(268,"tr")(269,"td")(270,"code"),iN(271,"--background-disabled"),sg()(),Tl(272,"td"),iN(273,"Cor de background no estado disabled"),sg(),Tl(274,"td")(275,"code"),iN(276,"var(--color-neutral-light-20)"),sg()()()()()(),Tl(277,"div",7)(278,"h4",8),iN(279,"Seletor"),sg(),Tl(280,"pre",9),iN(281,`<po-search
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
`),sg()(),Tl(282,"h4",10),iN(283,"Propriedades"),sg(),Tl(284,"table",11)(285,"tr",12)(286,"th",13),iN(287,"Nome"),sg(),Tl(288,"th",13),iN(289,"Tipo"),sg(),Tl(290,"th",13),iN(291,"Padr\xE3o"),sg(),Tl(292,"th",13),iN(293,"Descri\xE7\xE3o"),sg()(),Tl(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),iN(298," p-aria-label"),Gl(299,"br"),sg()()(),Tl(300,"td",18)(301,"code",19),iN(302,"string"),sg()(),Tl(303,"td",20),iN(304,"-"),sg(),Tl(305,"td",21)(306,"em")(307,"strong"),iN(308,"(opcional)"),sg()(),Tl(309,"p"),iN(310,"Define um aria-label para o po-search."),sg(),Tl(311,"blockquote")(312,"p"),iN(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),Tl(314,"code"),iN(315,"aria-label"),sg(),iN(316,` \xE9 utilizado para
acessibilidade.`),sg()()()(),Tl(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),iN(321," (p-blur)"),Gl(322,"br"),sg()()(),Tl(323,"td",18)(324,"code",24),iN(325,"EventEmitter"),sg()(),Tl(326,"td",20),iN(327,"-"),sg(),Tl(328,"td",21)(329,"em")(330,"strong"),iN(331,"(opcional)"),sg()(),Tl(332,"p"),iN(333,"Evento disparado ao sair do campo."),sg()()(),Tl(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),iN(338," (p-change-model)"),Gl(339,"br"),sg()()(),Tl(340,"td",18)(341,"code",24),iN(342,"EventEmitter"),sg()(),Tl(343,"td",20),iN(344,"-"),sg(),Tl(345,"td",21)(346,"em")(347,"strong"),iN(348,"(opcional)"),sg()(),Tl(349,"p"),iN(350,"Evento disparado ao alterar valor do model."),sg()()(),Tl(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),iN(355," p-disabled"),Gl(356,"br"),sg()()(),Tl(357,"td",18)(358,"code",25),iN(359,"boolean"),sg()(),Tl(360,"td",20)(361,"p")(362,"code"),iN(363,"false"),sg()()(),Tl(364,"td",21)(365,"em")(366,"strong"),iN(367,"(opcional)"),sg()(),Tl(368,"p"),iN(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),sg()()(),Tl(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),iN(374," (p-filter)"),Gl(375,"br"),sg()()(),Tl(376,"td",18)(377,"code",24),iN(378,"EventEmitter"),sg()(),Tl(379,"td",20),iN(380,"-"),sg(),Tl(381,"td",21)(382,"em")(383,"strong"),iN(384,"(opcional)"),sg()(),Tl(385,"p"),iN(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),sg(),Tl(387,"blockquote")(388,"p"),iN(389,"Incompat\xEDvel com a propriedade "),Tl(390,"code"),iN(391,"p-search-type"),sg(),iN(392," do tipo "),Tl(393,"code"),iN(394,"locate"),sg(),iN(395,"."),sg()()()(),Tl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),iN(400," p-filter-keys"),Gl(401,"br"),sg()()(),Tl(402,"td",18)(403,"code",26),iN(404,"Array<any>"),sg()(),Tl(405,"td",20),iN(406,"-"),sg(),Tl(407,"td",21)(408,"p"),iN(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),Tl(410,"code"),iN(411,"p-items"),sg(),iN(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),sg(),Tl(413,"pre")(414,"code",27),iN(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),sg()(),Tl(416,"blockquote")(417,"p"),iN(418,"Esta propriedade \xE9 ignorada quando utilizado com "),Tl(419,"code"),iN(420,"p-filter-select"),sg(),iN(421,` e incompat\xEDvel com a propriedade
`),Tl(422,"code"),iN(423,"p-search-type"),sg(),iN(424," do tipo "),Tl(425,"code"),iN(426,"locate"),sg(),iN(427,"."),sg()()()(),Tl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),iN(432," p-filter-select"),Gl(433,"br"),sg()()(),Tl(434,"td",18)(435,"code",28),iN(436,"PoSearchFilterSelect[]"),sg()(),Tl(437,"td",20),iN(438,"-"),sg(),Tl(439,"td",21)(440,"p"),iN(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Tl(442,"code"),iN(443,"p-items"),sg(),iN(444,". Automaticamente adiciona a op\xE7\xE3o "),Tl(445,"strong"),iN(446,"Todos"),sg(),iN(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),sg(),Tl(448,"p"),iN(449,"Exemplo de uso:"),sg(),Tl(450,"pre")(451,"code",27),iN(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),sg()(),Tl(453,"blockquote")(454,"p"),iN(455,"Ao ser habilitada, a propriedade "),Tl(456,"code"),iN(457,"p-filter-keys"),sg(),iN(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Tl(459,"code"),iN(460,"p-search-type"),sg(),iN(461," do tipo "),Tl(462,"code"),iN(463,"locate"),sg(),iN(464,"."),sg()()()(),Tl(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),iN(469," p-filter-type"),Gl(470,"br"),sg()()(),Tl(471,"td",18)(472,"code",29),iN(473,"PoSearchFilterMode"),sg()(),Tl(474,"td",20)(475,"p")(476,"code"),iN(477,"startsWith"),sg()()(),Tl(478,"td",21)(479,"em")(480,"strong"),iN(481,"(opcional)"),sg()(),Tl(482,"p"),iN(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Tl(484,"strong"),iN(485,"PoSearchFilterMode"),sg(),iN(486,"."),sg(),Tl(487,"blockquote")(488,"p"),iN(489,"Incompat\xEDvel com a propriedade "),Tl(490,"code"),iN(491,"p-search-type"),sg(),iN(492," do tipo "),Tl(493,"code"),iN(494,"locate"),sg(),iN(495,"."),sg()()()(),Tl(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),iN(500," (p-filtered-items-change)"),Gl(501,"br"),sg()()(),Tl(502,"td",18)(503,"code",24),iN(504,"EventEmitter"),sg()(),Tl(505,"td",20),iN(506,"-"),sg(),Tl(507,"td",21)(508,"em")(509,"strong"),iN(510,"(opcional)"),sg()(),Tl(511,"p"),iN(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),sg(),Tl(513,"blockquote")(514,"p"),iN(515,"Incompat\xEDvel com a propriedade "),Tl(516,"code"),iN(517,"p-search-type"),sg(),iN(518," do tipo "),Tl(519,"code"),iN(520,"locate"),sg(),iN(521,"."),sg()()()(),Tl(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),iN(526," (p-focus)"),Gl(527,"br"),sg()()(),Tl(528,"td",18)(529,"code",24),iN(530,"EventEmitter"),sg()(),Tl(531,"td",20),iN(532,"-"),sg(),Tl(533,"td",21)(534,"em")(535,"strong"),iN(536,"(opcional)"),sg()(),Tl(537,"p"),iN(538,"Evento emitido quando o campo de entrada (input) recebe foco."),sg()()(),Tl(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),iN(543," (p-footer-action-listbox)"),Gl(544,"br"),sg()()(),Tl(545,"td",18)(546,"code",24),iN(547,"EventEmitter"),sg()(),Tl(548,"td",20),iN(549,"-"),sg(),Tl(550,"td",21)(551,"em")(552,"strong"),iN(553,"(opcional)"),sg()(),Tl(554,"p"),iN(555,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),Tl(556,"code"),iN(557,"listbox"),sg(),iN(558,`.
O texto exibido pode ser configurado por meio do literal `),Tl(559,"code"),iN(560,"footerActionListbox"),sg(),iN(561,"."),sg()()(),Tl(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),iN(566," p-icon"),Gl(567,"br"),sg()()(),Tl(568,"td",18)(569,"code",19),iN(570,"string "),sg(),Tl(571,"code",30),iN(572," TemplateRef<void>"),sg()(),Tl(573,"td",20),iN(574,"-"),sg(),Tl(575,"td",21)(576,"em")(577,"strong"),iN(578,"(opcional)"),sg()(),Tl(579,"p"),iN(580,"Permite customizar o \xEDcone de busca que acompanha o campo."),sg(),Tl(581,"p"),iN(582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(583,"a",31),iN(584,"Biblioteca de \xEDcones PO UI"),sg(),iN(585,", conforme exemplo:"),sg(),Tl(586,"pre")(587,"code"),iN(588,`<po-search p-icon="an an-user"></po-search>
`),sg()(),Tl(589,"p"),iN(590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(591,"em"),iN(592,"Font Awesome"),sg(),iN(593,`, desde que a biblioteca
esteja carregada no projeto:`),sg(),Tl(594,"pre")(595,"code"),iN(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),sg()(),Tl(597,"p"),iN(598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(599,"code"),iN(600,"TemplateRef"),sg(),iN(601,", conforme exemplo abaixo:"),sg(),Tl(602,"pre")(603,"code"),iN(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),sg()()()(),Tl(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),iN(609," p-items"),Gl(610,"br"),sg()()(),Tl(611,"td",18)(612,"code",26),iN(613,"Array<any>"),sg()(),Tl(614,"td",20),iN(615,"-"),sg(),Tl(616,"td",21)(617,"em")(618,"strong"),iN(619,"(opcional)"),sg()(),Tl(620,"p"),iN(621,"Lista de itens que ser\xE3o utilizados para pesquisa."),sg(),Tl(622,"blockquote")(623,"p"),iN(624,"Incompat\xEDvel com a propriedade "),Tl(625,"code"),iN(626,"p-search-type"),sg(),iN(627," do tipo "),Tl(628,"code"),iN(629,"locate"),sg(),iN(630,"."),sg()()()(),Tl(631,"tr",14)(632,"td",15)(633,"div",22)(634,"span",23),iN(635," (p-keydown)"),Gl(636,"br"),sg()()(),Tl(637,"td",18)(638,"code",24),iN(639,"EventEmitter"),sg()(),Tl(640,"td",20),iN(641,"-"),sg(),Tl(642,"td",21)(643,"em")(644,"strong"),iN(645,"(opcional)"),sg()(),Tl(646,"p"),iN(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(648,"code"),iN(649,"KeyboardEvent"),sg(),iN(650," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(651,"tr",14)(652,"td",15)(653,"div",16)(654,"span",17),iN(655," p-keys-label"),Gl(656,"br"),sg()()(),Tl(657,"td",18)(658,"code",32),iN(659,"Array<string>"),sg()(),Tl(660,"td",20),iN(661,"-"),sg(),Tl(662,"td",21)(663,"em")(664,"strong"),iN(665,"(opcional)"),sg()(),Tl(666,"p"),iN(667,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),Tl(668,"code"),iN(669,"listbox"),sg(),iN(670,` quando a propriedade
`),Tl(671,"code"),iN(672,"p-show-listbox"),sg(),iN(673," estiver habilitada."),sg(),Tl(674,"p"),iN(675,"Deve ser informado um array de strings contendo at\xE9 "),Tl(676,"strong"),iN(677,"3 propriedades"),sg(),iN(678,"."),sg(),Tl(679,"p"),iN(680,"Exemplo de uso:"),sg(),Tl(681,"pre")(682,"code",33),iN(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),sg()()()(),Tl(684,"tr",14)(685,"td",15)(686,"div",22)(687,"span",23),iN(688," (p-listbox-onclick)"),Gl(689,"br"),sg()()(),Tl(690,"td",18)(691,"code",24),iN(692,"EventEmitter"),sg()(),Tl(693,"td",20),iN(694,"-"),sg(),Tl(695,"td",21)(696,"em")(697,"strong"),iN(698,"(opcional)"),sg()(),Tl(699,"p"),iN(700,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),sg(),Tl(701,"blockquote")(702,"p"),iN(703,"Incompat\xEDvel com a propriedade "),Tl(704,"code"),iN(705,"p-search-type"),sg(),iN(706," do tipo "),Tl(707,"code"),iN(708,"locate"),sg(),iN(709,"."),sg()()()(),Tl(710,"tr",14)(711,"td",15)(712,"div",16)(713,"span",17),iN(714," p-literals"),Gl(715,"br"),sg()()(),Tl(716,"td",18)(717,"code",34),iN(718,"PoSearchLiterals"),sg()(),Tl(719,"td",20),iN(720,"-"),sg(),Tl(721,"td",21)(722,"em")(723,"strong"),iN(724,"(opcional)"),sg()(),Tl(725,"p"),iN(726,"Objeto com as literais usadas no "),Tl(727,"code"),iN(728,"po-search"),sg(),iN(729,", permitindo personalizar os textos exibidos no componente."),sg(),Tl(730,"p"),iN(731,"Para utilizar basta passar a literal que deseja customizar:"),sg(),Tl(732,"pre")(733,"code"),iN(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),sg()(),Tl(735,"p"),iN(736,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),sg(),Tl(737,"pre")(738,"code"),iN(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),sg()(),Tl(740,"blockquote")(741,"p"),iN(742,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Tl(743,"a",35)(744,"code"),iN(745,"PoI18nService"),sg()(),iN(746,` ou
do browser.`),sg()()()(),Tl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),iN(751," p-loading"),Gl(752,"br"),sg()()(),Tl(753,"td",18)(754,"code",25),iN(755,"boolean"),sg()(),Tl(756,"td",20)(757,"p")(758,"code"),iN(759,"false"),sg()()(),Tl(760,"td",21)(761,"em")(762,"strong"),iN(763,"(opcional)"),sg()(),Tl(764,"p"),iN(765,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg(),Tl(766,"blockquote")(767,"p"),iN(768,"Incompat\xEDvel com a propriedade "),Tl(769,"code"),iN(770,"p-search-type"),sg(),iN(771," do tipo "),Tl(772,"code"),iN(773,"locate"),sg(),iN(774,"."),sg()()()(),Tl(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),iN(779," (p-locate-next)"),Gl(780,"br"),sg()()(),Tl(781,"td",18)(782,"code",24),iN(783,"EventEmitter"),sg()(),Tl(784,"td",20),iN(785,"-"),sg(),Tl(786,"td",21)(787,"em")(788,"strong"),iN(789,"(opcional)"),sg()(),Tl(790,"p"),iN(791,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),sg(),Tl(792,"blockquote")(793,"p"),iN(794,"Compat\xEDvel com a propriedade "),Tl(795,"code"),iN(796,"p-search-type"),sg(),iN(797," do tipo "),Tl(798,"code"),iN(799,"locate"),sg(),iN(800,"."),sg()()()(),Tl(801,"tr",14)(802,"td",15)(803,"div",22)(804,"span",23),iN(805," (p-locate-previous)"),Gl(806,"br"),sg()()(),Tl(807,"td",18)(808,"code",24),iN(809,"EventEmitter"),sg()(),Tl(810,"td",20),iN(811,"-"),sg(),Tl(812,"td",21)(813,"em")(814,"strong"),iN(815,"(opcional)"),sg()(),Tl(816,"p"),iN(817,'Evento disparado ao clicar no controle "Resultado anterior".'),sg(),Tl(818,"blockquote")(819,"p"),iN(820,"Compat\xEDvel com a propriedade "),Tl(821,"code"),iN(822,"p-search-type"),sg(),iN(823," do tipo "),Tl(824,"code"),iN(825,"locate"),sg(),iN(826,"."),sg()()()(),Tl(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),iN(831," p-locate-summary"),Gl(832,"br"),sg()()(),Tl(833,"td",18)(834,"code",36),iN(835,"PoSearchLocateSummary"),sg()(),Tl(836,"td",20),iN(837,"-"),sg(),Tl(838,"td",21)(839,"em")(840,"strong"),iN(841,"(opcional)"),sg()(),Tl(842,"p"),iN(843,"Define os valores do contador exibido ao usar a propriedade "),Tl(844,"code"),iN(845,"p-search-type"),sg(),iN(846," do tipo "),Tl(847,"code"),iN(848,"locate"),sg(),iN(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),sg(),Tl(850,"pre")(851,"code",33),iN(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),sg()(),Tl(853,"blockquote")(854,"p"),iN(855,"Compat\xEDvel com a propriedade "),Tl(856,"code"),iN(857,"p-search-type"),sg(),iN(858," do tipo "),Tl(859,"code"),iN(860,"locate"),sg(),iN(861,"."),sg()()()(),Tl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),iN(866," name"),Gl(867,"br"),sg()()(),Tl(868,"td",18)(869,"code",19),iN(870,"string"),sg()(),Tl(871,"td",20),iN(872,"-"),sg(),Tl(873,"td",21)(874,"em")(875,"strong"),iN(876,"(opcional)"),sg()(),Tl(877,"p"),iN(878,"Nome e identificador do campo."),sg()()(),Tl(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),iN(883," p-no-autocomplete"),Gl(884,"br"),sg()()(),Tl(885,"td",18)(886,"code",25),iN(887,"boolean"),sg()(),Tl(888,"td",20)(889,"p")(890,"code"),iN(891,"false"),sg()()(),Tl(892,"td",21)(893,"em")(894,"strong"),iN(895,"(opcional)"),sg()(),Tl(896,"p"),iN(897,"Define a propriedade nativa "),Tl(898,"code"),iN(899,"autocomplete"),sg(),iN(900," do campo como "),Tl(901,"code"),iN(902,"off"),sg(),iN(903,"."),sg()()(),Tl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),iN(908," p-show-listbox"),Gl(909,"br"),sg()()(),Tl(910,"td",18)(911,"code",25),iN(912,"boolean"),sg()(),Tl(913,"td",20)(914,"p")(915,"code"),iN(916,"false"),sg()()(),Tl(917,"td",21)(918,"em")(919,"strong"),iN(920,"(opcional)"),sg()(),Tl(921,"p"),iN(922,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),Tl(923,"code"),iN(924,"p-filter-keys"),sg(),iN(925," ou "),Tl(926,"code"),iN(927,"p-filter-select"),sg(),iN(928,` enquanto realiza
uma busca, respeitando o `),Tl(929,"code"),iN(930,"p-filter-type"),sg(),iN(931," como modo de pesquisa."),sg(),Tl(932,"blockquote")(933,"p"),iN(934,"Incompat\xEDvel com a propriedade "),Tl(935,"code"),iN(936,"p-search-type"),sg(),iN(937," do tipo "),Tl(938,"code"),iN(939,"locate"),sg(),iN(940,"."),sg()()()(),Tl(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),iN(945," p-size"),Gl(946,"br"),sg()()(),Tl(947,"td",18)(948,"code",19),iN(949,"string"),sg()(),Tl(950,"td",20)(951,"p")(952,"code"),iN(953,"medium"),sg()()(),Tl(954,"td",21)(955,"em")(956,"strong"),iN(957,"(opcional)"),sg()(),Tl(958,"p"),iN(959,"Define o tamanho do componente:"),sg(),Tl(960,"ul")(961,"li")(962,"code"),iN(963,"small"),sg(),iN(964,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(965,"li")(966,"code"),iN(967,"medium"),sg(),iN(968,": altura do input como 44px."),sg()(),Tl(969,"blockquote")(970,"p"),iN(971,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(972,"code"),iN(973,"medium"),sg(),iN(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(975,"a",37),iN(976,"po-theme"),sg(),iN(977,"."),sg()()()(),Tl(978,"tr",14)(979,"td",15)(980,"div",16)(981,"span",17),iN(982," p-search-type"),Gl(983,"br"),sg()()(),Tl(984,"td",18)(985,"code",38),iN(986,"searchMode"),sg()(),Tl(987,"td",20)(988,"p")(989,"code"),iN(990,"action"),sg()()(),Tl(991,"td",21)(992,"em")(993,"strong"),iN(994,"(opcional)"),sg()(),Tl(995,"p"),iN(996,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),sg(),Tl(997,"ul")(998,"li")(999,"code"),iN(1e3,"action"),sg(),iN(1001,": Realiza a busca a cada caractere digitado."),sg(),Tl(1002,"li")(1003,"code"),iN(1004,"trigger"),sg(),iN(1005,": Realiza a busca ao pressionar "),Tl(1006,"code"),iN(1007,"enter"),sg(),iN(1008," ou clicar no \xEDcone de busca."),sg(),Tl(1009,"li")(1010,"code"),iN(1011,"locate"),sg(),iN(1012,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),sg(),Tl(1013,"li")(1014,"code"),iN(1015,"execute"),sg(),iN(1016,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),Tl(1017,"code"),iN(1018,"listbox"),sg(),iN(1019,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),Tl(1020,"code"),iN(1021,"action"),sg(),iN(1022," ou "),Tl(1023,"code"),iN(1024,"url"),sg(),iN(1025," nos itens definidos em "),Tl(1026,"code"),iN(1027,"p-items"),sg(),iN(1028,"."),sg()()()()(),Tl(1029,"h3"),iN(1030,"Interfaces"),sg(),Tl(1031,"h4",39)(1032,"code",5),iN(1033,"PoSearchFilterSelect"),sg()(),Tl(1034,"div",2)(1035,"p"),iN(1036,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),Tl(1037,"code"),iN(1038,"po-search"),sg(),iN(1039,", ao usar a propriedade "),Tl(1040,"code"),iN(1041,"p-filter-select"),sg(),iN(1042,"."),sg()(),Tl(1043,"h4",10),iN(1044,"Propriedades"),sg(),Tl(1045,"table",11)(1046,"tr",12)(1047,"th",13),iN(1048,"Nome"),sg(),Tl(1049,"th",13),iN(1050,"Tipo"),sg(),Tl(1051,"th",13),iN(1052,"Descri\xE7\xE3o"),sg()(),Tl(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),iN(1057," label"),Gl(1058,"br"),sg()()(),Tl(1059,"td",18)(1060,"code",19),iN(1061,"string"),sg()(),Tl(1062,"td",21)(1063,"p"),iN(1064,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),sg()()(),Tl(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),iN(1069," value"),Gl(1070,"br"),sg()()(),Tl(1071,"td",18)(1072,"code",32),iN(1073,"Array<string> "),sg(),Tl(1074,"code",19),iN(1075," string"),sg()(),Tl(1076,"td",21)(1077,"p"),iN(1078,"Valores que ser\xE3o atribu\xEDdos ao "),Tl(1079,"code"),iN(1080,"p-filter-keys"),sg()()()()(),Tl(1081,"h4",39)(1082,"code",5),iN(1083,"PoSearchLocateSummary"),sg()(),Tl(1084,"div",2)(1085,"p"),iN(1086,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),Tl(1087,"code"),iN(1088,"p-filter-locate"),sg(),iN(1089,"."),sg()(),Tl(1090,"h4",10),iN(1091,"Propriedades"),sg(),Tl(1092,"table",11)(1093,"tr",12)(1094,"th",13),iN(1095,"Nome"),sg(),Tl(1096,"th",13),iN(1097,"Tipo"),sg(),Tl(1098,"th",13),iN(1099,"Descri\xE7\xE3o"),sg()(),Tl(1100,"tr",14)(1101,"td",15)(1102,"div",16)(1103,"span",17),iN(1104," currentIndex"),Gl(1105,"br"),sg()()(),Tl(1106,"td",18)(1107,"code",40),iN(1108,"number"),sg()(),Tl(1109,"td",21)(1110,"p"),iN(1111,"\xCDndice atual da ocorr\xEAncia localizada."),sg()()(),Tl(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),iN(1116," total"),Gl(1117,"br"),sg()()(),Tl(1118,"td",18)(1119,"code",40),iN(1120,"number"),sg()(),Tl(1121,"td",21)(1122,"p"),iN(1123,"Total de ocorr\xEAncias encontradas."),sg()()()(),Tl(1124,"h4",39)(1125,"code",5),iN(1126,"PoSearchOption"),sg()(),Tl(1127,"div",2)(1128,"p"),iN(1129,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),Tl(1130,"code"),iN(1131,"po-search"),sg(),iN(1132,"."),sg()(),Tl(1133,"h4",10),iN(1134,"Propriedades"),sg(),Tl(1135,"table",11)(1136,"tr",12)(1137,"th",13),iN(1138,"Nome"),sg(),Tl(1139,"th",13),iN(1140,"Tipo"),sg(),Tl(1141,"th",13),iN(1142,"Descri\xE7\xE3o"),sg()(),Tl(1143,"tr",14)(1144,"td",15)(1145,"div",16)(1146,"span",17),iN(1147," label"),Gl(1148,"br"),sg()()(),Tl(1149,"td",18)(1150,"code",19),iN(1151,"string"),sg()(),Tl(1152,"td",21)(1153,"em")(1154,"strong"),iN(1155,"(opcional)"),sg()(),Tl(1156,"p"),iN(1157,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),sg(),Tl(1158,"blockquote")(1159,"p"),iN(1160,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Tl(1161,"code"),iN(1162,"value"),sg(),iN(1163,"."),sg()()()(),Tl(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),iN(1168," value"),Gl(1169,"br"),sg()()(),Tl(1170,"td",18)(1171,"code",19),iN(1172,"string "),sg(),Tl(1173,"code",40),iN(1174," number"),sg()(),Tl(1175,"td",21)(1176,"p"),iN(1177,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Tl(1178,"em"),iN(1179,"model"),sg(),iN(1180,"."),sg()()()(),Tl(1181,"h4",39)(1182,"code",5),iN(1183,"PoSearchLiterals"),sg()(),Tl(1184,"div",2)(1185,"p"),iN(1186,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1187,"code"),iN(1188,"po-search"),sg(),iN(1189,"."),sg()(),Tl(1190,"h4",10),iN(1191,"Propriedades"),sg(),Tl(1192,"table",11)(1193,"tr",12)(1194,"th",13),iN(1195,"Nome"),sg(),Tl(1196,"th",13),iN(1197,"Tipo"),sg(),Tl(1198,"th",13),iN(1199,"Descri\xE7\xE3o"),sg()(),Tl(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),iN(1204," all"),Gl(1205,"br"),sg()()(),Tl(1206,"td",18)(1207,"code",19),iN(1208,"string"),sg()(),Tl(1209,"td",21)(1210,"em")(1211,"strong"),iN(1212,"(opcional)"),sg()(),Tl(1213,"p"),iN(1214,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),sg(),Tl(1215,"blockquote")(1216,"p"),iN(1217,"Exibido apenas quando a propriedade "),Tl(1218,"code"),iN(1219,"p-filter-select"),sg(),iN(1220," estiver habilitada."),sg()()()(),Tl(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),iN(1225," clean"),Gl(1226,"br"),sg()()(),Tl(1227,"td",18)(1228,"code",19),iN(1229,"string"),sg()(),Tl(1230,"td",21)(1231,"em")(1232,"strong"),iN(1233,"(opcional)"),sg()(),Tl(1234,"p"),iN(1235,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),sg()()(),Tl(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),iN(1240," footerActionListbox"),Gl(1241,"br"),sg()()(),Tl(1242,"td",18)(1243,"code",19),iN(1244,"string"),sg()(),Tl(1245,"td",21)(1246,"em")(1247,"strong"),iN(1248,"(opcional)"),sg()(),Tl(1249,"p"),iN(1250,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),sg()()(),Tl(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),iN(1255," next"),Gl(1256,"br"),sg()()(),Tl(1257,"td",18)(1258,"code",19),iN(1259,"string"),sg()(),Tl(1260,"td",21)(1261,"em")(1262,"strong"),iN(1263,"(opcional)"),sg()(),Tl(1264,"p"),iN(1265,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),sg(),Tl(1266,"blockquote")(1267,"p"),iN(1268,"Exibido apenas quando a propriedade "),Tl(1269,"code"),iN(1270,"p-filter-locate"),sg(),iN(1271," estiver habilitada."),sg()()()(),Tl(1272,"tr",14)(1273,"td",15)(1274,"div",16)(1275,"span",17),iN(1276," of"),Gl(1277,"br"),sg()()(),Tl(1278,"td",18)(1279,"code",19),iN(1280,"string"),sg()(),Tl(1281,"td",21)(1282,"em")(1283,"strong"),iN(1284,"(opcional)"),sg()(),Tl(1285,"p"),iN(1286,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),sg(),Tl(1287,"blockquote")(1288,"p"),iN(1289,"Exibido apenas quando a propriedade "),Tl(1290,"code"),iN(1291,"p-filter-locate"),sg(),iN(1292," estiver habilitada."),sg()()()(),Tl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),iN(1297," placeholderListbox"),Gl(1298,"br"),sg()()(),Tl(1299,"td",18)(1300,"code",19),iN(1301,"string"),sg()(),Tl(1302,"td",21)(1303,"em")(1304,"strong"),iN(1305,"(opcional)"),sg()(),Tl(1306,"p"),iN(1307,"Texto exibido como "),Tl(1308,"em"),iN(1309,"placeholder"),sg(),iN(1310," na lista de resultados."),sg()()(),Tl(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),iN(1315," previous"),Gl(1316,"br"),sg()()(),Tl(1317,"td",18)(1318,"code",19),iN(1319,"string"),sg()(),Tl(1320,"td",21)(1321,"em")(1322,"strong"),iN(1323,"(opcional)"),sg()(),Tl(1324,"p"),iN(1325,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),sg(),Tl(1326,"blockquote")(1327,"p"),iN(1328,"Exibido apenas quando a propriedade "),Tl(1329,"code"),iN(1330,"p-filter-locate"),sg(),iN(1331," estiver habilitada."),sg()()()(),Tl(1332,"tr",14)(1333,"td",15)(1334,"div",16)(1335,"span",17),iN(1336," result"),Gl(1337,"br"),sg()()(),Tl(1338,"td",18)(1339,"code",19),iN(1340,"string"),sg()(),Tl(1341,"td",21)(1342,"em")(1343,"strong"),iN(1344,"(opcional)"),sg()(),Tl(1345,"p"),iN(1346,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),sg(),Tl(1347,"blockquote")(1348,"p"),iN(1349,"Exibido apenas quando a propriedade "),Tl(1350,"code"),iN(1351,"p-filter-locate"),sg(),iN(1352," estiver habilitada."),sg()()()(),Tl(1353,"tr",14)(1354,"td",15)(1355,"div",16)(1356,"span",17),iN(1357," search"),Gl(1358,"br"),sg()()(),Tl(1359,"td",18)(1360,"code",19),iN(1361,"string"),sg()(),Tl(1362,"td",21)(1363,"em")(1364,"strong"),iN(1365,"(opcional)"),sg()(),Tl(1366,"p"),iN(1367,"Texto exibido como "),Tl(1368,"em"),iN(1369,"placeholder"),sg(),iN(1370," no campo de busca."),sg()()()(),Tl(1371,"h3"),iN(1372,"Enums"),sg(),Tl(1373,"h4",4)(1374,"code",5),iN(1375,"PoSearchFilterMode"),sg()(),Tl(1376,"div",2)(1377,"p"),iN(1378,"Define o tipo de busca usado no "),Tl(1379,"code"),iN(1380,"po-search"),sg(),iN(1381,"."),sg()(),Tl(1382,"h4",10),iN(1383,"Propriedades"),sg(),Tl(1384,"table",11)(1385,"tr",12)(1386,"th",13),iN(1387,"Nome"),sg(),Tl(1388,"th",13),iN(1389,"Descri\xE7\xE3o"),sg()(),Tl(1390,"tr",14)(1391,"td",15)(1392,"div",16)(1393,"span",17),iN(1394," startsWith"),Gl(1395,"br"),sg()()(),Tl(1396,"td",21)(1397,"p"),iN(1398,"Verifica se o texto "),Tl(1399,"em"),iN(1400,"inicia"),sg(),iN(1401," com o valor pesquisado."),sg()()(),Tl(1402,"tr",14)(1403,"td",15)(1404,"div",16)(1405,"span",17),iN(1406," contains"),Gl(1407,"br"),sg()()(),Tl(1408,"td",21)(1409,"p"),iN(1410,"Verifica se o texto "),Tl(1411,"em"),iN(1412,"cont\xE9m"),sg(),iN(1413," o valor pesquisado."),sg()()(),Tl(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),iN(1418," endsWith"),Gl(1419,"br"),sg()()(),Tl(1420,"td",21)(1421,"p"),iN(1422,"Verifica se o texto "),Tl(1423,"em"),iN(1424,"finaliza"),sg(),iN(1425," com o valor pesquisado."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-search-doc"),sg(),Tl(4,"po-tab",3),ht$1("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),sg()()()),o&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2,changeDetection:1})}return a})();var Ot=[{path:"",component:Xe}],Ye=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[DL.forChild(Ot),DL]})}return a})();var Jn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ye]})}return a})();export{Jn as DocPoSearchModule};