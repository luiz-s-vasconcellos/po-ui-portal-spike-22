import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,s,c as r$1,cw as $o,df as Tt,M as Wl,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aF as K9,aG as Dk,b0 as Qt,b1 as mv,bB as cc,b4 as F3,c8 as Pde,aN as JA,aq as ux,aM as Ew,aP as t0,at as dx,bM as fN,a7 as uN,aO as Dw,cy as ude,aI as dc,a3 as pNe,aB as Ex,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var le=(()=>{class o{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&Wl(0,"po-helper",0),l&2&&tw("p-helper",i.poHelper);},dependencies:[Tt],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Helper Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-helper-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return o})();var ge=()=>({label:"Help",value:"help"}),xe=()=>({label:"Info",value:"info"}),re=(o,V)=>[o,V],ve=()=>({label:"Medium",value:"medium"}),Ce=()=>({label:"Small",value:"small"});function ye(o,V){if(o&1){let p=Ex();Sl(0,"po-input",9),Ew("ngModelChange",function(i){Xy(p);let d=Tx();return tN(d.footerTitle,i)||(d.footerTitle=i),Qy(i)}),ht("ngModelChange",function(i){Xy(p);let d=Tx();return Qy(d.setFooterTitle(i))}),sg(),JA();}if(o&2){let p=Tx();Dw("ngModel",p.footerTitle),t0();}}var me=(()=>{class o{helperDisabled=false;helperSize="medium";helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked");}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r$1({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}});}updateHelperType(p){this.helperOptions=s(r$1({},this.helperOptions),{type:p});}reset(){this.helperDisabled=false,this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs"]],standalone:false,decls:16,vars:23,consts:[[3,"p-helper","p-size","p-disabled"],[1,"po-row"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","type","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["name","disabled","p-label","Disabled",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(Wl(0,"po-helper",0)(1,"po-divider"),Sl(2,"div",1)(3,"po-input",2),ht("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{title:u})}),sg(),JA(),Sl(4,"po-input",3),ht("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{content:u})}),sg(),JA(),sg(),Sl(5,"div",1),ux(6,ye,1,1,"po-input",4),sg(),Sl(7,"div",1)(8,"po-radio-group",5),ht("ngModelChange",function(u){return i.updateHelperType(u)}),sg(),JA(),sg(),Sl(9,"div",1)(10,"po-radio-group",6),Ew("ngModelChange",function(u){return tN(i.helperSize,u)||(i.helperSize=u),u}),sg(),JA(),sg(),Sl(11,"div",1)(12,"po-checkbox",7),Ew("ngModelChange",function(u){return tN(i.helperDisabled,u)||(i.helperDisabled=u),u}),sg(),JA(),sg(),Wl(13,"po-divider"),Sl(14,"div",1)(15,"po-button",8),ht("p-click",function(){return i.reset()}),sg()()),l&2&&(tw("p-helper",i.helperOptions)("p-size",i.helperSize)("p-disabled",i.helperDisabled),Vp(3),tw("ngModel",i.helperOptions.title),t0(),Vp(),tw("ngModel",i.helperOptions.content),t0(),Vp(2),dx(i.helperOptions.type==="help"?6:-1),Vp(2),tw("p-columns",4)("ngModel",i.helperOptions.type)("p-options",fN(15,re,uN(13,ge),uN(14,xe))),t0(),Vp(2),Dw("ngModel",i.helperSize),tw("p-columns",4)("p-options",fN(20,re,uN(18,ve),uN(19,Ce))),t0(),Vp(2),Dw("ngModel",i.helperDisabled),t0());},dependencies:[K9,Dk,Qt,mv,cc,F3,Pde,Tt],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Helper Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-helper-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return o})();var de=(()=>{class o{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.",type:"info"};type=$o.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance"]],standalone:false,decls:8,vars:4,consts:[[1,"po-row","po-mb-3"],[1,"po-font-title"],[3,"p-helper"],[1,"po-row"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(Sl(0,"po-container")(1,"div",0)(2,"div",1),Jx(3,"Sales Performance"),sg(),Wl(4,"po-helper",2),sg(),Sl(5,"div",3)(6,"div",4),Wl(7,"po-chart",5),sg()()()),l&2&&(Vp(4),tw("p-helper",i.helperOptions),Vp(3),tw("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover));},dependencies:[ude,dc,Tt],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Helper Sales Performance"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-helper-sales-performance"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return o})();var ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-doc"]],standalone:false,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoHelperModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-helper"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoHelperComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-helper"),sg(),Jx(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),sg(),Sl(18,"p"),Jx(19,"Principais funcionalidades:"),sg(),Sl(20,"ul")(21,"li"),Jx(22,"Exibe \xEDcone de ajuda ("),Sl(23,"code"),Jx(24,"help"),sg(),Jx(25,") ou informa\xE7\xE3o ("),Sl(26,"code"),Jx(27,"info"),sg(),Jx(28,") conforme configura\xE7\xE3o."),sg(),Sl(29,"li"),Jx(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),Sl(31,"code"),Jx(32,"p-helper"),sg(),Jx(33,"."),sg(),Sl(34,"li"),Jx(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),sg(),Sl(36,"li"),Jx(37,"Controle do tamanho do componente via propriedade "),Sl(38,"code"),Jx(39,"p-size"),sg(),Jx(40," ("),Sl(41,"code"),Jx(42,"small"),sg(),Jx(43," ou "),Sl(44,"code"),Jx(45,"medium"),sg(),Jx(46,")."),sg(),Sl(47,"li"),Jx(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),sg()(),Sl(49,"p"),Jx(50,"Exemplo de uso:"),sg(),Sl(51,"pre")(52,"code",6),Jx(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),sg()(),Sl(54,"p"),Jx(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),sg(),Sl(56,"pre")(57,"code",6),Jx(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),sg()(),Sl(59,"p"),Jx(60,"A propriedade "),Sl(61,"code"),Jx(62,"p-helper"),sg(),Jx(63," aceita um objeto do tipo "),Sl(64,"code"),Jx(65,"PoHelperOptions"),sg(),Jx(66,":"),sg(),Sl(67,"pre")(68,"code",7),Jx(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),sg()(),Sl(70,"blockquote")(71,"p")(72,"strong"),Jx(73,"Importante:"),sg(),Jx(74," A propriedade "),Sl(75,"code"),Jx(76,"footerAction"),sg(),Jx(77," n\xE3o pode ser utilizada quando o tipo do helper for "),Sl(78,"code"),Jx(79,"info"),sg(),Jx(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),sg()(),Sl(81,"h4"),Jx(82,"Tokens customiz\xE1veis"),sg(),Sl(83,"p"),Jx(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(85,"blockquote")(86,"p"),Jx(87,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(88,"a",8),Jx(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(90,"."),sg()(),Sl(91,"table")(92,"thead")(93,"tr")(94,"th"),Jx(95,"Propriedade"),sg(),Sl(96,"th"),Jx(97,"Descri\xE7\xE3o"),sg(),Sl(98,"th"),Jx(99,"Valor Padr\xE3o"),sg()()(),Sl(100,"tbody")(101,"tr")(102,"td")(103,"code"),Jx(104,"--color"),sg()(),Sl(105,"td"),Jx(106,"Cor principal do \xEDcone"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--color-action-default)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--border-color-hover"),sg()(),Sl(114,"td"),Jx(115,"Cor da borda no estado hover"),sg(),Sl(116,"td")(117,"code"),Jx(118,"var(--color-brand-01-darkest)"),sg()()(),Sl(119,"tr")(120,"td")(121,"code"),Jx(122,"--background-pressed"),sg()(),Sl(123,"td"),Jx(124,"Cor de background no estado de pressionado\xA0"),sg(),Sl(125,"td")(126,"code"),Jx(127,"var(--color-brand-01-light)"),sg()()(),Sl(128,"tr")(129,"td")(130,"code"),Jx(131,"--color-disabled"),sg()(),Sl(132,"td"),Jx(133,"Cor principal no estado disabled"),sg(),Sl(134,"td")(135,"code"),Jx(136,"var(--color-action-disabled)"),sg()()()()()(),Sl(137,"div",9)(138,"h4",10),Jx(139,"Seletor"),sg(),Sl(140,"pre",11),Jx(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),sg()(),Sl(142,"h4",12),Jx(143,"Propriedades"),sg(),Sl(144,"table",13)(145,"tr",14)(146,"th",15),Jx(147,"Nome"),sg(),Sl(148,"th",15),Jx(149,"Tipo"),sg(),Sl(150,"th",15),Jx(151,"Padr\xE3o"),sg(),Sl(152,"th",15),Jx(153,"Descri\xE7\xE3o"),sg()(),Sl(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),Jx(158," p-append-in-body"),Wl(159,"br"),sg()()(),Sl(160,"td",20)(161,"code",21),Jx(162,"boolean"),sg()(),Sl(163,"td",22),Jx(164,"-"),sg(),Sl(165,"td",23)(166,"em")(167,"strong"),Jx(168,"(opcional)"),sg()(),Sl(169,"p"),Jx(170,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Sl(171,"code"),Jx(172,"p-target"),sg(),Jx(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),sg()()(),Sl(174,"tr",16)(175,"td",17)(176,"div",18)(177,"span",19),Jx(178," p-disabled"),Wl(179,"br"),sg()()(),Sl(180,"td",20)(181,"code",21),Jx(182,"boolean"),sg()(),Sl(183,"td",22)(184,"p")(185,"code"),Jx(186,"false"),sg()()(),Sl(187,"td",23)(188,"em")(189,"strong"),Jx(190,"(opcional)"),sg()(),Sl(191,"p"),Jx(192,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),sg()()(),Sl(193,"tr",16)(194,"td",17)(195,"div",18)(196,"span",19),Jx(197," p-helper"),Wl(198,"br"),sg()()(),Sl(199,"td",20)(200,"code",24),Jx(201,"PoHelperOptions "),sg(),Sl(202,"code",25),Jx(203," string"),sg()(),Sl(204,"td",22),Jx(205,"-"),sg(),Sl(206,"td",23)(207,"em")(208,"strong"),Jx(209,"(opcional)"),sg()(),Sl(210,"p"),Jx(211,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),sg(),Sl(212,"p"),Jx(213,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Sl(214,"code"),Jx(215,"PoHelperOptions"),sg(),Jx(216," para configura\xE7\xE3o avan\xE7ada:"),sg(),Sl(217,"ul")(218,"li")(219,"code"),Jx(220,"title"),sg(),Jx(221,": T\xEDtulo do popover."),sg(),Sl(222,"li")(223,"code"),Jx(224,"content"),sg(),Jx(225,": Conte\xFAdo explicativo exibido no popover."),sg(),Sl(226,"li")(227,"code"),Jx(228,"type"),sg(),Jx(229,": Tipo do \xEDcone ("),Sl(230,"code"),Jx(231,"help"),sg(),Jx(232," ou "),Sl(233,"code"),Jx(234,"info"),sg(),Jx(235,")."),sg(),Sl(236,"li")(237,"code"),Jx(238,"eventOnClick"),sg(),Jx(239,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),sg(),Sl(240,"li")(241,"code"),Jx(242,"footerAction"),sg(),Jx(243,": Objeto com "),Sl(244,"code"),Jx(245,"label"),sg(),Jx(246," e "),Sl(247,"code"),Jx(248,"action"),sg(),Jx(249," para a\xE7\xE3o customizada no rodap\xE9 do popover."),sg()(),Sl(250,"p"),Jx(251,"Exemplo de uso:"),sg(),Sl(252,"pre")(253,"code",6),Jx(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),sg()()()(),Sl(255,"tr",16)(256,"td",17)(257,"div",18)(258,"span",19),Jx(259," p-size"),Wl(260,"br"),sg()()(),Sl(261,"td",20)(262,"code",25),Jx(263,"string"),sg()(),Sl(264,"td",22)(265,"p")(266,"code"),Jx(267,"medium"),sg()()(),Sl(268,"td",23)(269,"em")(270,"strong"),Jx(271,"(opcional)"),sg()(),Sl(272,"p"),Jx(273,"Define o tamanho do componente:"),sg(),Sl(274,"ul")(275,"li")(276,"code"),Jx(277,"small"),sg(),Jx(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(279,"li")(280,"code"),Jx(281,"medium"),sg(),Jx(282,": altura do \xEDcone com seu valor de 24px."),sg()(),Sl(283,"blockquote")(284,"p"),Jx(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(286,"code"),Jx(287,"medium"),sg(),Jx(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(289,"a",26),Jx(290,"po-theme"),sg(),Jx(291,"."),sg()()()()(),Sl(292,"h3"),Jx(293,"Interfaces"),sg(),Sl(294,"h4",27)(295,"code",5),Jx(296,"PoHelperOptions"),sg()(),Sl(297,"div",2)(298,"p"),Jx(299,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Sl(300,"em"),Jx(301,"helper"),sg(),Jx(302,")."),sg()(),Sl(303,"h4",12),Jx(304,"Propriedades"),sg(),Sl(305,"table",13)(306,"tr",14)(307,"th",15),Jx(308,"Nome"),sg(),Sl(309,"th",15),Jx(310,"Tipo"),sg(),Sl(311,"th",15),Jx(312,"Descri\xE7\xE3o"),sg()(),Sl(313,"tr",16)(314,"td",17)(315,"div",18)(316,"span",19),Jx(317," content"),Wl(318,"br"),sg()()(),Sl(319,"td",20)(320,"code",25),Jx(321,"string"),sg()(),Sl(322,"td",23)(323,"em")(324,"strong"),Jx(325,"(opcional)"),sg()(),Sl(326,"p"),Jx(327,"Texto explicativo exibido no popover."),sg(),Sl(328,"p"),Jx(329,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(330,"code"),Jx(331,"<b>"),sg(),Jx(332," (negrito), "),Sl(333,"code"),Jx(334,"<strong>"),sg(),Jx(335," (negrito), "),Sl(336,"code"),Jx(337,"<i>"),sg(),Jx(338," (it\xE1lico), "),Sl(339,"code"),Jx(340,"<em>"),sg(),Jx(341,` (it\xE1lico) e
`),Sl(342,"code"),Jx(343,"<u>"),sg(),Jx(344," (sublinhado)."),sg(),Sl(345,"p"),Jx(346,"Exemplo:"),sg(),Sl(347,"pre")(348,"code",7),Jx(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),sg()()()(),Sl(350,"tr",16)(351,"td",17)(352,"div",18)(353,"span",19),Jx(354," eventOnClick"),Wl(355,"br"),sg()()(),Sl(356,"td",20)(357,"code",28),Jx(358,"Function"),sg()(),Sl(359,"td",23)(360,"em")(361,"strong"),Jx(362,"(opcional)"),sg()(),Sl(363,"p"),Jx(364,"Evento disparado ao clicar no \xEDcone do helper."),sg(),Sl(365,"p"),Jx(366,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),sg(),Sl(367,"p"),Jx(368,"Pode ser uma fun\xE7\xE3o ou um "),Sl(369,"code"),Jx(370,"EventEmitter"),sg(),Jx(371,"."),sg(),Sl(372,"p"),Jx(373,"Exemplo:"),sg(),Sl(374,"pre")(375,"code"),Jx(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),sg()()()(),Sl(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),Jx(381," footerAction"),Wl(382,"br"),sg()()(),Sl(383,"td",20)(384,"code",29),Jx(385,`{ label: string; action: Function;
}`),sg()(),Sl(386,"td",23)(387,"em")(388,"strong"),Jx(389,"(opcional)"),sg()(),Sl(390,"p"),Jx(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Sl(392,"code"),Jx(393,"help"),sg(),Jx(394," e desconsiderada quando o type for "),Sl(395,"code"),Jx(396,"info"),sg(),Jx(397,"."),sg(),Sl(398,"p"),Jx(399,"Deve ser um objeto com as propriedades:"),sg(),Sl(400,"ul")(401,"li")(402,"code"),Jx(403,"label"),sg(),Jx(404,": Texto do bot\xE3o."),sg(),Sl(405,"li")(406,"code"),Jx(407,"action"),sg(),Jx(408,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),sg()(),Sl(409,"p"),Jx(410,"Exemplo:"),sg(),Sl(411,"pre")(412,"code",7),Jx(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),sg()()()(),Sl(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),Jx(418," title"),Wl(419,"br"),sg()()(),Sl(420,"td",20)(421,"code",25),Jx(422,"string"),sg()(),Sl(423,"td",23)(424,"em")(425,"strong"),Jx(426,"(opcional)"),sg()(),Sl(427,"p"),Jx(428,"T\xEDtulo do helper exibido no popover."),sg()()(),Sl(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),Jx(433," type"),Wl(434,"br"),sg()()(),Sl(435,"td",20)(436,"code",30),Jx(437,"'info' "),sg(),Sl(438,"code",31),Jx(439," 'help'"),sg()(),Sl(440,"td",23)(441,"em")(442,"strong"),Jx(443,"(opcional)"),sg()(),Sl(444,"p"),Jx(445,"Tipo do \xEDcone exibido: "),Sl(446,"code"),Jx(447,"info"),sg(),Jx(448," ou "),Sl(449,"code"),Jx(450,"help"),sg(),Jx(451,"."),sg(),Sl(452,"p"),Jx(453,"Quando o valor \xE9 "),Sl(454,"code"),Jx(455,"info"),sg(),Jx(456,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),sg(),Sl(457,"p"),Jx(458,"Quando o valor \xE9 "),Sl(459,"code"),Jx(460,"help"),sg(),Jx(461,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-helper-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,pe,se,ce,ue],encapsulation:2})}return o})();var Oe=[{path:"",component:he}],Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[pL.forChild(Oe),pL]})}return o})();var it=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,Ee]})}return o})();export{it as DocPoHelperModule};