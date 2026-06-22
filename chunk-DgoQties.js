import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,s,e as r$1,cw as $o,de as St,J as Gl,M as tw,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,bs as hN,aF as J9,aG as Ck,b0 as Qt,b1 as mv,bB as cc,b4 as O3,c8 as Sde,aN as t0,aq as fx,aM as Ew,aP as r0,at as hx,bM as pN,a7 as fN,aO as Dw,cy as Z3e,aI as dc,a3 as aNe,aB as Cx,aA as Rx,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var le=(()=>{class o{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&Gl(0,"po-helper",0),l&2&&tw("p-helper",i.poHelper);},dependencies:[St],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Helper Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-basic',
  templateUrl: './sample-po-helper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperBasicComponent {
  poHelper: PoHelperOptions = {
    title: 'PO Helper Basic',
    content:
      'Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.'
  };
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-helper-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,be,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,le],encapsulation:2})}return o})();var ge=()=>({label:"Help",value:"help"}),xe=()=>({label:"Info",value:"info"}),re=(o,V)=>[o,V],ve=()=>({label:"Medium",value:"medium"}),Ce=()=>({label:"Small",value:"small"});function ye(o,V){if(o&1){let p=Cx();Tl(0,"po-input",9),Ew("ngModelChange",function(i){Ky(p);let d=Rx();return rN(d.footerTitle,i)||(d.footerTitle=i),Xy(i)}),ht("ngModelChange",function(i){Ky(p);let d=Rx();return Xy(d.setFooterTitle(i))}),sg(),t0();}if(o&2){let p=Rx();Dw("ngModel",p.footerTitle),r0();}}var me=(()=>{class o{helperDisabled=false;helperSize="medium";helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked");}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r$1({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}});}updateHelperType(p){this.helperOptions=s(r$1({},this.helperOptions),{type:p});}reset(){this.helperDisabled=false,this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs"]],standalone:false,decls:16,vars:23,consts:[[3,"p-helper","p-size","p-disabled"],[1,"po-row"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","type","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["name","disabled","p-label","Disabled",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(Gl(0,"po-helper",0)(1,"po-divider"),Tl(2,"div",1)(3,"po-input",2),ht("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{title:u})}),sg(),t0(),Tl(4,"po-input",3),ht("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{content:u})}),sg(),t0(),sg(),Tl(5,"div",1),fx(6,ye,1,1,"po-input",4),sg(),Tl(7,"div",1)(8,"po-radio-group",5),ht("ngModelChange",function(u){return i.updateHelperType(u)}),sg(),t0(),sg(),Tl(9,"div",1)(10,"po-radio-group",6),Ew("ngModelChange",function(u){return rN(i.helperSize,u)||(i.helperSize=u),u}),sg(),t0(),sg(),Tl(11,"div",1)(12,"po-checkbox",7),Ew("ngModelChange",function(u){return rN(i.helperDisabled,u)||(i.helperDisabled=u),u}),sg(),t0(),sg(),Gl(13,"po-divider"),Tl(14,"div",1)(15,"po-button",8),ht("p-click",function(){return i.reset()}),sg()()),l&2&&(tw("p-helper",i.helperOptions)("p-size",i.helperSize)("p-disabled",i.helperDisabled),Vp(3),tw("ngModel",i.helperOptions.title),r0(),Vp(),tw("ngModel",i.helperOptions.content),r0(),Vp(2),hx(i.helperOptions.type==="help"?6:-1),Vp(2),tw("p-columns",4)("ngModel",i.helperOptions.type)("p-options",pN(15,re,fN(13,ge),fN(14,xe))),r0(),Vp(2),Dw("ngModel",i.helperSize),tw("p-columns",4)("p-options",pN(20,re,fN(18,ve),fN(19,Ce))),r0(),Vp(2),Dw("ngModel",i.helperDisabled),r0());},dependencies:[J9,Ck,Qt,mv,cc,O3,Sde,St],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Helper Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

<po-divider></po-divider>

<div class="po-row">
  <po-input
    class="po-md-6"
    name="title"
    [ngModel]="helperOptions.title"
    (ngModelChange)="helperOptions = { ...helperOptions, title: $event }"
    p-clean
    p-label="Title"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="content"
    [ngModel]="helperOptions.content"
    (ngModelChange)="helperOptions = { ...helperOptions, content: $event }"
    p-clean
    p-label="Content"
    p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
  >
  </po-input>
</div>

<div class="po-row">
  @if (helperOptions.type === 'help') {
    <po-input
      class="po-md-6"
      name="footerTitle"
      [(ngModel)]="footerTitle"
      (ngModelChange)="setFooterTitle($event)"
      p-clean
      p-label="Footer Action"
    >
    </po-input>
  }
</div>

<div class="po-row">
  <po-radio-group
    name="type"
    class="po-md-12"
    [p-columns]="4"
    p-label="Type"
    [ngModel]="helperOptions.type"
    (ngModelChange)="updateHelperType($event)"
    [p-options]="[
      { label: 'Help', value: 'help' },
      { label: 'Info', value: 'info' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="helperSize"
    [p-columns]="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="[
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-checkbox class="po-md-12" name="disabled" [(ngModel)]="helperDisabled" p-label="Disabled"> </po-checkbox>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="reset()"></po-button>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-labs',
  templateUrl: './sample-po-helper-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperLabsComponent {
  helperDisabled: boolean = false;
  helperSize: string = 'medium';

  helperOptions: PoHelperOptions = {
    title: '',
    content: '',
    type: 'help'
  };

  footerTitle: string = '';

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  setFooterTitle(title: string) {
    this.footerTitle = title;
    if (title.length === 0) {
      delete this.helperOptions.footerAction;
    } else {
      this.helperOptions = {
        ...this.helperOptions,
        footerAction: {
          label: this.footerTitle,
          action: this.footerAction.bind(this)
        }
      };
    }
  }

  updateHelperType(type: string) {
    this.helperOptions = {
      ...this.helperOptions,
      type: type as 'help' | 'info'
    };
  }

  reset() {
    this.helperDisabled = false;
    this.helperOptions = {
      title: '',
      content: '',
      type: 'help'
    };
    this.helperSize = 'medium';
    this.footerTitle = '';
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-helper-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Te,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,me],encapsulation:2})}return o})();var de=(()=>{class o{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.",type:"info"};type=$o.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance"]],standalone:false,decls:8,vars:4,consts:[[1,"po-row","po-mb-3"],[1,"po-font-title"],[3,"p-helper"],[1,"po-row"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(Tl(0,"po-container")(1,"div",0)(2,"div",1),tN(3,"Sales Performance"),sg(),Gl(4,"po-helper",2),sg(),Tl(5,"div",3)(6,"div",4),Gl(7,"po-chart",5),sg()()()),l&2&&(Vp(4),tw("p-helper",i.helperOptions),Vp(3),tw("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover));},dependencies:[Z3e,dc,St],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Helper Sales Performance"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-container>
  <div class="po-row po-mb-3">
    <div class="po-font-title">Sales Performance</div>
    <po-helper [p-helper]="helperOptions"></po-helper>
  </div>
  <div class="po-row">
    <div class="po-lg-12">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
  </div>
</po-container>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions, PoChartType, PoChartOptions, PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-sales-performance',
  templateUrl: './sample-po-helper-sales-performance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperSalesPerformanceComponent {
  helperOptions: PoHelperOptions = {
    title: 'Sales Performance Overview',
    content:
      'This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.',
    type: 'info'
  };

  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-helper-sales-performance"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,De,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,de],encapsulation:2})}return o})();var ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-doc"]],standalone:false,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoHelperModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-helper"),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoHelperComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-helper"),sg(),tN(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),sg(),Tl(18,"p"),tN(19,"Principais funcionalidades:"),sg(),Tl(20,"ul")(21,"li"),tN(22,"Exibe \xEDcone de ajuda ("),Tl(23,"code"),tN(24,"help"),sg(),tN(25,") ou informa\xE7\xE3o ("),Tl(26,"code"),tN(27,"info"),sg(),tN(28,") conforme configura\xE7\xE3o."),sg(),Tl(29,"li"),tN(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),Tl(31,"code"),tN(32,"p-helper"),sg(),tN(33,"."),sg(),Tl(34,"li"),tN(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),sg(),Tl(36,"li"),tN(37,"Controle do tamanho do componente via propriedade "),Tl(38,"code"),tN(39,"p-size"),sg(),tN(40," ("),Tl(41,"code"),tN(42,"small"),sg(),tN(43," ou "),Tl(44,"code"),tN(45,"medium"),sg(),tN(46,")."),sg(),Tl(47,"li"),tN(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),sg()(),Tl(49,"p"),tN(50,"Exemplo de uso:"),sg(),Tl(51,"pre")(52,"code",6),tN(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),sg()(),Tl(54,"p"),tN(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),sg(),Tl(56,"pre")(57,"code",6),tN(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),sg()(),Tl(59,"p"),tN(60,"A propriedade "),Tl(61,"code"),tN(62,"p-helper"),sg(),tN(63," aceita um objeto do tipo "),Tl(64,"code"),tN(65,"PoHelperOptions"),sg(),tN(66,":"),sg(),Tl(67,"pre")(68,"code",7),tN(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),sg()(),Tl(70,"blockquote")(71,"p")(72,"strong"),tN(73,"Importante:"),sg(),tN(74," A propriedade "),Tl(75,"code"),tN(76,"footerAction"),sg(),tN(77," n\xE3o pode ser utilizada quando o tipo do helper for "),Tl(78,"code"),tN(79,"info"),sg(),tN(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),sg()(),Tl(81,"h4"),tN(82,"Tokens customiz\xE1veis"),sg(),Tl(83,"p"),tN(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(85,"blockquote")(86,"p"),tN(87,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(88,"a",8),tN(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(90,"."),sg()(),Tl(91,"table")(92,"thead")(93,"tr")(94,"th"),tN(95,"Propriedade"),sg(),Tl(96,"th"),tN(97,"Descri\xE7\xE3o"),sg(),Tl(98,"th"),tN(99,"Valor Padr\xE3o"),sg()()(),Tl(100,"tbody")(101,"tr")(102,"td")(103,"code"),tN(104,"--color"),sg()(),Tl(105,"td"),tN(106,"Cor principal do \xEDcone"),sg(),Tl(107,"td")(108,"code"),tN(109,"var(--color-action-default)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),tN(113,"--border-color-hover"),sg()(),Tl(114,"td"),tN(115,"Cor da borda no estado hover"),sg(),Tl(116,"td")(117,"code"),tN(118,"var(--color-brand-01-darkest)"),sg()()(),Tl(119,"tr")(120,"td")(121,"code"),tN(122,"--background-pressed"),sg()(),Tl(123,"td"),tN(124,"Cor de background no estado de pressionado\xA0"),sg(),Tl(125,"td")(126,"code"),tN(127,"var(--color-brand-01-light)"),sg()()(),Tl(128,"tr")(129,"td")(130,"code"),tN(131,"--color-disabled"),sg()(),Tl(132,"td"),tN(133,"Cor principal no estado disabled"),sg(),Tl(134,"td")(135,"code"),tN(136,"var(--color-action-disabled)"),sg()()()()()(),Tl(137,"div",9)(138,"h4",10),tN(139,"Seletor"),sg(),Tl(140,"pre",11),tN(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),sg()(),Tl(142,"h4",12),tN(143,"Propriedades"),sg(),Tl(144,"table",13)(145,"tr",14)(146,"th",15),tN(147,"Nome"),sg(),Tl(148,"th",15),tN(149,"Tipo"),sg(),Tl(150,"th",15),tN(151,"Padr\xE3o"),sg(),Tl(152,"th",15),tN(153,"Descri\xE7\xE3o"),sg()(),Tl(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),tN(158," p-append-in-body"),Gl(159,"br"),sg()()(),Tl(160,"td",20)(161,"code",21),tN(162,"boolean"),sg()(),Tl(163,"td",22),tN(164,"-"),sg(),Tl(165,"td",23)(166,"em")(167,"strong"),tN(168,"(opcional)"),sg()(),Tl(169,"p"),tN(170,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Tl(171,"code"),tN(172,"p-target"),sg(),tN(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),sg()()(),Tl(174,"tr",16)(175,"td",17)(176,"div",18)(177,"span",19),tN(178," p-disabled"),Gl(179,"br"),sg()()(),Tl(180,"td",20)(181,"code",21),tN(182,"boolean"),sg()(),Tl(183,"td",22)(184,"p")(185,"code"),tN(186,"false"),sg()()(),Tl(187,"td",23)(188,"em")(189,"strong"),tN(190,"(opcional)"),sg()(),Tl(191,"p"),tN(192,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),sg()()(),Tl(193,"tr",16)(194,"td",17)(195,"div",18)(196,"span",19),tN(197," p-helper"),Gl(198,"br"),sg()()(),Tl(199,"td",20)(200,"code",24),tN(201,"PoHelperOptions "),sg(),Tl(202,"code",25),tN(203," string"),sg()(),Tl(204,"td",22),tN(205,"-"),sg(),Tl(206,"td",23)(207,"em")(208,"strong"),tN(209,"(opcional)"),sg()(),Tl(210,"p"),tN(211,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),sg(),Tl(212,"p"),tN(213,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Tl(214,"code"),tN(215,"PoHelperOptions"),sg(),tN(216," para configura\xE7\xE3o avan\xE7ada:"),sg(),Tl(217,"ul")(218,"li")(219,"code"),tN(220,"title"),sg(),tN(221,": T\xEDtulo do popover."),sg(),Tl(222,"li")(223,"code"),tN(224,"content"),sg(),tN(225,": Conte\xFAdo explicativo exibido no popover."),sg(),Tl(226,"li")(227,"code"),tN(228,"type"),sg(),tN(229,": Tipo do \xEDcone ("),Tl(230,"code"),tN(231,"help"),sg(),tN(232," ou "),Tl(233,"code"),tN(234,"info"),sg(),tN(235,")."),sg(),Tl(236,"li")(237,"code"),tN(238,"eventOnClick"),sg(),tN(239,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),sg(),Tl(240,"li")(241,"code"),tN(242,"footerAction"),sg(),tN(243,": Objeto com "),Tl(244,"code"),tN(245,"label"),sg(),tN(246," e "),Tl(247,"code"),tN(248,"action"),sg(),tN(249," para a\xE7\xE3o customizada no rodap\xE9 do popover."),sg()(),Tl(250,"p"),tN(251,"Exemplo de uso:"),sg(),Tl(252,"pre")(253,"code",6),tN(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),sg()()()(),Tl(255,"tr",16)(256,"td",17)(257,"div",18)(258,"span",19),tN(259," p-size"),Gl(260,"br"),sg()()(),Tl(261,"td",20)(262,"code",25),tN(263,"string"),sg()(),Tl(264,"td",22)(265,"p")(266,"code"),tN(267,"medium"),sg()()(),Tl(268,"td",23)(269,"em")(270,"strong"),tN(271,"(opcional)"),sg()(),Tl(272,"p"),tN(273,"Define o tamanho do componente:"),sg(),Tl(274,"ul")(275,"li")(276,"code"),tN(277,"small"),sg(),tN(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(279,"li")(280,"code"),tN(281,"medium"),sg(),tN(282,": altura do \xEDcone com seu valor de 24px."),sg()(),Tl(283,"blockquote")(284,"p"),tN(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(286,"code"),tN(287,"medium"),sg(),tN(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(289,"a",26),tN(290,"po-theme"),sg(),tN(291,"."),sg()()()()(),Tl(292,"h3"),tN(293,"Interfaces"),sg(),Tl(294,"h4",27)(295,"code",5),tN(296,"PoHelperOptions"),sg()(),Tl(297,"div",2)(298,"p"),tN(299,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Tl(300,"em"),tN(301,"helper"),sg(),tN(302,")."),sg()(),Tl(303,"h4",12),tN(304,"Propriedades"),sg(),Tl(305,"table",13)(306,"tr",14)(307,"th",15),tN(308,"Nome"),sg(),Tl(309,"th",15),tN(310,"Tipo"),sg(),Tl(311,"th",15),tN(312,"Descri\xE7\xE3o"),sg()(),Tl(313,"tr",16)(314,"td",17)(315,"div",18)(316,"span",19),tN(317," content"),Gl(318,"br"),sg()()(),Tl(319,"td",20)(320,"code",25),tN(321,"string"),sg()(),Tl(322,"td",23)(323,"em")(324,"strong"),tN(325,"(opcional)"),sg()(),Tl(326,"p"),tN(327,"Texto explicativo exibido no popover."),sg(),Tl(328,"p"),tN(329,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Tl(330,"code"),tN(331,"<b>"),sg(),tN(332," (negrito), "),Tl(333,"code"),tN(334,"<strong>"),sg(),tN(335," (negrito), "),Tl(336,"code"),tN(337,"<i>"),sg(),tN(338," (it\xE1lico), "),Tl(339,"code"),tN(340,"<em>"),sg(),tN(341,` (it\xE1lico) e
`),Tl(342,"code"),tN(343,"<u>"),sg(),tN(344," (sublinhado)."),sg(),Tl(345,"p"),tN(346,"Exemplo:"),sg(),Tl(347,"pre")(348,"code",7),tN(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),sg()()()(),Tl(350,"tr",16)(351,"td",17)(352,"div",18)(353,"span",19),tN(354," eventOnClick"),Gl(355,"br"),sg()()(),Tl(356,"td",20)(357,"code",28),tN(358,"Function"),sg()(),Tl(359,"td",23)(360,"em")(361,"strong"),tN(362,"(opcional)"),sg()(),Tl(363,"p"),tN(364,"Evento disparado ao clicar no \xEDcone do helper."),sg(),Tl(365,"p"),tN(366,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),sg(),Tl(367,"p"),tN(368,"Pode ser uma fun\xE7\xE3o ou um "),Tl(369,"code"),tN(370,"EventEmitter"),sg(),tN(371,"."),sg(),Tl(372,"p"),tN(373,"Exemplo:"),sg(),Tl(374,"pre")(375,"code"),tN(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),sg()()()(),Tl(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),tN(381," footerAction"),Gl(382,"br"),sg()()(),Tl(383,"td",20)(384,"code",29),tN(385,`{ label: string; action: Function;
}`),sg()(),Tl(386,"td",23)(387,"em")(388,"strong"),tN(389,"(opcional)"),sg()(),Tl(390,"p"),tN(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Tl(392,"code"),tN(393,"help"),sg(),tN(394," e desconsiderada quando o type for "),Tl(395,"code"),tN(396,"info"),sg(),tN(397,"."),sg(),Tl(398,"p"),tN(399,"Deve ser um objeto com as propriedades:"),sg(),Tl(400,"ul")(401,"li")(402,"code"),tN(403,"label"),sg(),tN(404,": Texto do bot\xE3o."),sg(),Tl(405,"li")(406,"code"),tN(407,"action"),sg(),tN(408,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),sg()(),Tl(409,"p"),tN(410,"Exemplo:"),sg(),Tl(411,"pre")(412,"code",7),tN(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),sg()()()(),Tl(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),tN(418," title"),Gl(419,"br"),sg()()(),Tl(420,"td",20)(421,"code",25),tN(422,"string"),sg()(),Tl(423,"td",23)(424,"em")(425,"strong"),tN(426,"(opcional)"),sg()(),Tl(427,"p"),tN(428,"T\xEDtulo do helper exibido no popover."),sg()()(),Tl(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),tN(433," type"),Gl(434,"br"),sg()()(),Tl(435,"td",20)(436,"code",30),tN(437,"'info' "),sg(),Tl(438,"code",31),tN(439," 'help'"),sg()(),Tl(440,"td",23)(441,"em")(442,"strong"),tN(443,"(opcional)"),sg()(),Tl(444,"p"),tN(445,"Tipo do \xEDcone exibido: "),Tl(446,"code"),tN(447,"info"),sg(),tN(448," ou "),Tl(449,"code"),tN(450,"help"),sg(),tN(451,"."),sg(),Tl(452,"p"),tN(453,"Quando o valor \xE9 "),Tl(454,"code"),tN(455,"info"),sg(),tN(456,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),sg(),Tl(457,"p"),tN(458,"Quando o valor \xE9 "),Tl(459,"code"),tN(460,"help"),sg(),tN(461,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-helper-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,pe,se,ce,ue],encapsulation:2})}return o})();var Oe=[{path:"",component:he}],Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[vL.forChild(Oe),vL]})}return o})();var it=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,Ee]})}return o})();export{it as DocPoHelperModule};