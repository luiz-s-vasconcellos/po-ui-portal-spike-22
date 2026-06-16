import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,s,r as r$1,b$ as jse,cL as ue$2,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,ae as iY,af as ck,aK as Pe$1,aL as di,b7 as Ge,aO as Yo,bB as ga,an as $0,ao as QA,am as pw,aq as G0,ar as JA,bj as eN,a7 as Qx,ap as hw,c1 as ep,ah as uo,a3 as D3,al as lx,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var pe=(()=>{class o{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&Ul(0,"po-helper",0),l&2&&YE("p-helper",i.poHelper);},dependencies:[ue$2],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Helper Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-helper-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ge,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return o})();var ve=()=>({label:"Help",value:"help"}),Ce=()=>({label:"Info",value:"info"}),se=(o,R)=>[o,R],ye=()=>({label:"Medium",value:"medium"}),Pe=()=>({label:"Small",value:"small"});function Te(o,R){if(o&1){let p=lx();wl(0,"po-input",9),pw("ngModelChange",function(i){Qy(p);let d=gx();return $x(d.footerTitle,i)||(d.footerTitle=i),Jy(i)}),ut("ngModelChange",function(i){Qy(p);let d=gx();return Jy(d.setFooterTitle(i))}),ng(),$0();}if(o&2){let p=gx();hw("ngModel",p.footerTitle),G0();}}var de=(()=>{class o{helperDisabled=false;helperSize="medium";helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked");}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r$1({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}});}updateHelperType(p){this.helperOptions=s(r$1({},this.helperOptions),{type:p});}reset(){this.helperDisabled=false,this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs"]],standalone:false,decls:16,vars:23,consts:[[3,"p-helper","p-size","p-disabled"],[1,"po-row"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","type","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["name","disabled","p-label","Disabled",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(Ul(0,"po-helper",0)(1,"po-divider"),wl(2,"div",1)(3,"po-input",2),ut("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{title:u})}),ng(),$0(),wl(4,"po-input",3),ut("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{content:u})}),ng(),$0(),ng(),wl(5,"div",1),QA(6,Te,1,1,"po-input",4),ng(),wl(7,"div",1)(8,"po-radio-group",5),ut("ngModelChange",function(u){return i.updateHelperType(u)}),ng(),$0(),ng(),wl(9,"div",1)(10,"po-radio-group",6),pw("ngModelChange",function(u){return $x(i.helperSize,u)||(i.helperSize=u),u}),ng(),$0(),ng(),wl(11,"div",1)(12,"po-checkbox",7),pw("ngModelChange",function(u){return $x(i.helperDisabled,u)||(i.helperDisabled=u),u}),ng(),$0(),ng(),Ul(13,"po-divider"),wl(14,"div",1)(15,"po-button",8),ut("p-click",function(){return i.reset()}),ng()()),l&2&&(YE("p-helper",i.helperOptions)("p-size",i.helperSize)("p-disabled",i.helperDisabled),Pp(3),YE("ngModel",i.helperOptions.title),G0(),Pp(),YE("ngModel",i.helperOptions.content),G0(),Pp(2),JA(i.helperOptions.type==="help"?6:-1),Pp(2),YE("p-columns",4)("ngModel",i.helperOptions.type)("p-options",eN(15,se,Qx(13,ve),Qx(14,Ce))),G0(),Pp(2),hw("ngModel",i.helperSize),YE("p-columns",4)("p-options",eN(20,se,Qx(18,ye),Qx(19,Pe))),G0(),Pp(2),hw("ngModel",i.helperDisabled),G0());},dependencies:[iY,ck,Pe$1,di,Ge,Yo,ga,ue$2],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Helper Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-helper-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,_e,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,de],encapsulation:2})}return o})();var ue=(()=>{class o{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.",type:"info"};type=jse.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance"]],standalone:false,decls:8,vars:4,consts:[[1,"po-row","po-mb-3"],[1,"po-font-title"],[3,"p-helper"],[1,"po-row"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(wl(0,"po-container")(1,"div",0)(2,"div",1),Ux(3,"Sales Performance"),ng(),Ul(4,"po-helper",2),ng(),wl(5,"div",3)(6,"div",4),Ul(7,"po-chart",5),ng()()()),l&2&&(Pp(4),YE("p-helper",i.helperOptions),Pp(3),YE("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover));},dependencies:[ep,uo,ue$2],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Helper Sales Performance"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-helper-sales-performance"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-doc"]],standalone:false,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoHelperModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-helper"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoHelperComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-helper"),ng(),Ux(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),ng(),wl(18,"p"),Ux(19,"Principais funcionalidades:"),ng(),wl(20,"ul")(21,"li"),Ux(22,"Exibe \xEDcone de ajuda ("),wl(23,"code"),Ux(24,"help"),ng(),Ux(25,") ou informa\xE7\xE3o ("),wl(26,"code"),Ux(27,"info"),ng(),Ux(28,") conforme configura\xE7\xE3o."),ng(),wl(29,"li"),Ux(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),wl(31,"code"),Ux(32,"p-helper"),ng(),Ux(33,"."),ng(),wl(34,"li"),Ux(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),ng(),wl(36,"li"),Ux(37,"Controle do tamanho do componente via propriedade "),wl(38,"code"),Ux(39,"p-size"),ng(),Ux(40," ("),wl(41,"code"),Ux(42,"small"),ng(),Ux(43," ou "),wl(44,"code"),Ux(45,"medium"),ng(),Ux(46,")."),ng(),wl(47,"li"),Ux(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),ng()(),wl(49,"p"),Ux(50,"Exemplo de uso:"),ng(),wl(51,"pre")(52,"code",6),Ux(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),ng()(),wl(54,"p"),Ux(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),ng(),wl(56,"pre")(57,"code",6),Ux(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),ng()(),wl(59,"p"),Ux(60,"A propriedade "),wl(61,"code"),Ux(62,"p-helper"),ng(),Ux(63," aceita um objeto do tipo "),wl(64,"code"),Ux(65,"PoHelperOptions"),ng(),Ux(66,":"),ng(),wl(67,"pre")(68,"code",7),Ux(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),ng()(),wl(70,"blockquote")(71,"p")(72,"strong"),Ux(73,"Importante:"),ng(),Ux(74," A propriedade "),wl(75,"code"),Ux(76,"footerAction"),ng(),Ux(77," n\xE3o pode ser utilizada quando o tipo do helper for "),wl(78,"code"),Ux(79,"info"),ng(),Ux(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),ng()(),wl(81,"h4"),Ux(82,"Tokens customiz\xE1veis"),ng(),wl(83,"p"),Ux(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(85,"blockquote")(86,"p"),Ux(87,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(88,"a",8),Ux(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(90,"."),ng()(),wl(91,"table")(92,"thead")(93,"tr")(94,"th"),Ux(95,"Propriedade"),ng(),wl(96,"th"),Ux(97,"Descri\xE7\xE3o"),ng(),wl(98,"th"),Ux(99,"Valor Padr\xE3o"),ng()()(),wl(100,"tbody")(101,"tr")(102,"td")(103,"code"),Ux(104,"--color"),ng()(),wl(105,"td"),Ux(106,"Cor principal do \xEDcone"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--color-action-default)"),ng()()(),wl(110,"tr")(111,"td")(112,"code"),Ux(113,"--border-color-hover"),ng()(),wl(114,"td"),Ux(115,"Cor da borda no estado hover"),ng(),wl(116,"td")(117,"code"),Ux(118,"var(--color-brand-01-darkest)"),ng()()(),wl(119,"tr")(120,"td")(121,"code"),Ux(122,"--background-pressed"),ng()(),wl(123,"td"),Ux(124,"Cor de background no estado de pressionado\xA0"),ng(),wl(125,"td")(126,"code"),Ux(127,"var(--color-brand-01-light)"),ng()()(),wl(128,"tr")(129,"td")(130,"code"),Ux(131,"--color-disabled"),ng()(),wl(132,"td"),Ux(133,"Cor principal no estado disabled"),ng(),wl(134,"td")(135,"code"),Ux(136,"var(--color-action-disabled)"),ng()()()()()(),wl(137,"div",9)(138,"h4",10),Ux(139,"Seletor"),ng(),wl(140,"pre",11),Ux(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),ng()(),wl(142,"h4",12),Ux(143,"Propriedades"),ng(),wl(144,"table",13)(145,"tr",14)(146,"th",15),Ux(147,"Nome"),ng(),wl(148,"th",15),Ux(149,"Tipo"),ng(),wl(150,"th",15),Ux(151,"Padr\xE3o"),ng(),wl(152,"th",15),Ux(153,"Descri\xE7\xE3o"),ng()(),wl(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),Ux(158," p-append-in-body"),Ul(159,"br"),ng()()(),wl(160,"td",20)(161,"code",21),Ux(162,"boolean"),ng()(),wl(163,"td",22),Ux(164,"-"),ng(),wl(165,"td",23)(166,"em")(167,"strong"),Ux(168,"(opcional)"),ng()(),wl(169,"p"),Ux(170,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),wl(171,"code"),Ux(172,"p-target"),ng(),Ux(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),ng()()(),wl(174,"tr",16)(175,"td",17)(176,"div",18)(177,"span",19),Ux(178," p-disabled"),Ul(179,"br"),ng()()(),wl(180,"td",20)(181,"code",21),Ux(182,"boolean"),ng()(),wl(183,"td",22)(184,"p")(185,"code"),Ux(186,"false"),ng()()(),wl(187,"td",23)(188,"em")(189,"strong"),Ux(190,"(opcional)"),ng()(),wl(191,"p"),Ux(192,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),ng()()(),wl(193,"tr",16)(194,"td",17)(195,"div",18)(196,"span",19),Ux(197," p-helper"),Ul(198,"br"),ng()()(),wl(199,"td",20)(200,"code",24),Ux(201,"PoHelperOptions "),ng(),wl(202,"code",25),Ux(203," string"),ng()(),wl(204,"td",22),Ux(205,"-"),ng(),wl(206,"td",23)(207,"em")(208,"strong"),Ux(209,"(opcional)"),ng()(),wl(210,"p"),Ux(211,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),ng(),wl(212,"p"),Ux(213,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),wl(214,"code"),Ux(215,"PoHelperOptions"),ng(),Ux(216," para configura\xE7\xE3o avan\xE7ada:"),ng(),wl(217,"ul")(218,"li")(219,"code"),Ux(220,"title"),ng(),Ux(221,": T\xEDtulo do popover."),ng(),wl(222,"li")(223,"code"),Ux(224,"content"),ng(),Ux(225,": Conte\xFAdo explicativo exibido no popover."),ng(),wl(226,"li")(227,"code"),Ux(228,"type"),ng(),Ux(229,": Tipo do \xEDcone ("),wl(230,"code"),Ux(231,"help"),ng(),Ux(232," ou "),wl(233,"code"),Ux(234,"info"),ng(),Ux(235,")."),ng(),wl(236,"li")(237,"code"),Ux(238,"eventOnClick"),ng(),Ux(239,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),ng(),wl(240,"li")(241,"code"),Ux(242,"footerAction"),ng(),Ux(243,": Objeto com "),wl(244,"code"),Ux(245,"label"),ng(),Ux(246," e "),wl(247,"code"),Ux(248,"action"),ng(),Ux(249," para a\xE7\xE3o customizada no rodap\xE9 do popover."),ng()(),wl(250,"p"),Ux(251,"Exemplo de uso:"),ng(),wl(252,"pre")(253,"code",6),Ux(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),ng()()()(),wl(255,"tr",16)(256,"td",17)(257,"div",18)(258,"span",19),Ux(259," p-size"),Ul(260,"br"),ng()()(),wl(261,"td",20)(262,"code",25),Ux(263,"string"),ng()(),wl(264,"td",22)(265,"p")(266,"code"),Ux(267,"medium"),ng()()(),wl(268,"td",23)(269,"em")(270,"strong"),Ux(271,"(opcional)"),ng()(),wl(272,"p"),Ux(273,"Define o tamanho do componente:"),ng(),wl(274,"ul")(275,"li")(276,"code"),Ux(277,"small"),ng(),Ux(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(279,"li")(280,"code"),Ux(281,"medium"),ng(),Ux(282,": altura do \xEDcone com seu valor de 24px."),ng()(),wl(283,"blockquote")(284,"p"),Ux(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(286,"code"),Ux(287,"medium"),ng(),Ux(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(289,"a",26),Ux(290,"po-theme"),ng(),Ux(291,"."),ng()()()()(),wl(292,"h3"),Ux(293,"Interfaces"),ng(),wl(294,"h4",27)(295,"code",5),Ux(296,"PoHelperOptions"),ng()(),wl(297,"div",2)(298,"p"),Ux(299,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),wl(300,"em"),Ux(301,"helper"),ng(),Ux(302,")."),ng()(),wl(303,"h4",12),Ux(304,"Propriedades"),ng(),wl(305,"table",13)(306,"tr",14)(307,"th",15),Ux(308,"Nome"),ng(),wl(309,"th",15),Ux(310,"Tipo"),ng(),wl(311,"th",15),Ux(312,"Descri\xE7\xE3o"),ng()(),wl(313,"tr",16)(314,"td",17)(315,"div",18)(316,"span",19),Ux(317," content"),Ul(318,"br"),ng()()(),wl(319,"td",20)(320,"code",25),Ux(321,"string"),ng()(),wl(322,"td",23)(323,"em")(324,"strong"),Ux(325,"(opcional)"),ng()(),wl(326,"p"),Ux(327,"Texto explicativo exibido no popover."),ng(),wl(328,"p"),Ux(329,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),wl(330,"code"),Ux(331,"<b>"),ng(),Ux(332," (negrito), "),wl(333,"code"),Ux(334,"<strong>"),ng(),Ux(335," (negrito), "),wl(336,"code"),Ux(337,"<i>"),ng(),Ux(338," (it\xE1lico), "),wl(339,"code"),Ux(340,"<em>"),ng(),Ux(341,` (it\xE1lico) e
`),wl(342,"code"),Ux(343,"<u>"),ng(),Ux(344," (sublinhado)."),ng(),wl(345,"p"),Ux(346,"Exemplo:"),ng(),wl(347,"pre")(348,"code",7),Ux(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),ng()()()(),wl(350,"tr",16)(351,"td",17)(352,"div",18)(353,"span",19),Ux(354," eventOnClick"),Ul(355,"br"),ng()()(),wl(356,"td",20)(357,"code",28),Ux(358,"Function"),ng()(),wl(359,"td",23)(360,"em")(361,"strong"),Ux(362,"(opcional)"),ng()(),wl(363,"p"),Ux(364,"Evento disparado ao clicar no \xEDcone do helper."),ng(),wl(365,"p"),Ux(366,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),ng(),wl(367,"p"),Ux(368,"Pode ser uma fun\xE7\xE3o ou um "),wl(369,"code"),Ux(370,"EventEmitter"),ng(),Ux(371,"."),ng(),wl(372,"p"),Ux(373,"Exemplo:"),ng(),wl(374,"pre")(375,"code"),Ux(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),ng()()()(),wl(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),Ux(381," footerAction"),Ul(382,"br"),ng()()(),wl(383,"td",20)(384,"code",29),Ux(385,`{ label: string; action: Function;
}`),ng()(),wl(386,"td",23)(387,"em")(388,"strong"),Ux(389,"(opcional)"),ng()(),wl(390,"p"),Ux(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),wl(392,"code"),Ux(393,"help"),ng(),Ux(394," e desconsiderada quando o type for "),wl(395,"code"),Ux(396,"info"),ng(),Ux(397,"."),ng(),wl(398,"p"),Ux(399,"Deve ser um objeto com as propriedades:"),ng(),wl(400,"ul")(401,"li")(402,"code"),Ux(403,"label"),ng(),Ux(404,": Texto do bot\xE3o."),ng(),wl(405,"li")(406,"code"),Ux(407,"action"),ng(),Ux(408,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),ng()(),wl(409,"p"),Ux(410,"Exemplo:"),ng(),wl(411,"pre")(412,"code",7),Ux(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),ng()()()(),wl(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),Ux(418," title"),Ul(419,"br"),ng()()(),wl(420,"td",20)(421,"code",25),Ux(422,"string"),ng()(),wl(423,"td",23)(424,"em")(425,"strong"),Ux(426,"(opcional)"),ng()(),wl(427,"p"),Ux(428,"T\xEDtulo do helper exibido no popover."),ng()()(),wl(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),Ux(433," type"),Ul(434,"br"),ng()()(),wl(435,"td",20)(436,"code",30),Ux(437,"'info' "),ng(),wl(438,"code",31),Ux(439," 'help'"),ng()(),wl(440,"td",23)(441,"em")(442,"strong"),Ux(443,"(opcional)"),ng()(),wl(444,"p"),Ux(445,"Tipo do \xEDcone exibido: "),wl(446,"code"),Ux(447,"info"),ng(),Ux(448," ou "),wl(449,"code"),Ux(450,"help"),ng(),Ux(451,"."),ng(),wl(452,"p"),Ux(453,"Quando o valor \xE9 "),wl(454,"code"),Ux(455,"info"),ng(),Ux(456,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),ng(),wl(457,"p"),Ux(458,"Quando o valor \xE9 "),wl(459,"code"),Ux(460,"help"),ng(),Ux(461,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var Se=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-helper-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),ng()()()),l&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,me,ce,he,Ee],encapsulation:2})}return o})();var ke=[{path:"",component:Se}],be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[vL.forChild(ke),vL]})}return o})();var ht=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[u5,be]})}return o})();export{ht as DocPoHelperModule};