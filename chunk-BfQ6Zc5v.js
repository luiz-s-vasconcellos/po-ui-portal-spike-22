import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,s,r as r$1,cB as Yo,dk as Tt,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aF as sY,aG as gk,a$ as Qt,b0 as _v,bF as mc,b3 as q3,cc as Nde,aN as Z0,aq as ix,aM as gw,aP as X0,at as ox,bQ as sN,a7 as iN,aO as pw,cD as Sde,aI as gc,a3 as SNe,aB as gx,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var le=(()=>{class o{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&Hl(0,"po-helper",0),l&2&&ZE("p-helper",i.poHelper);},dependencies:[Tt],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Helper Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-helper-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,be,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return o})();var ge=()=>({label:"Help",value:"help"}),xe=()=>({label:"Info",value:"info"}),re=(o,V)=>[o,V],ve=()=>({label:"Medium",value:"medium"}),Ce=()=>({label:"Small",value:"small"});function ye(o,V){if(o&1){let p=gx();Cl(0,"po-input",9),gw("ngModelChange",function(i){Jy(p);let d=Ex();return Zx(d.footerTitle,i)||(d.footerTitle=i),e_(i)}),dt("ngModelChange",function(i){Jy(p);let d=Ex();return e_(d.setFooterTitle(i))}),og(),Z0();}if(o&2){let p=Ex();pw("ngModel",p.footerTitle),X0();}}var me=(()=>{class o{helperDisabled=false;helperSize="medium";helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked");}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r$1({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}});}updateHelperType(p){this.helperOptions=s(r$1({},this.helperOptions),{type:p});}reset(){this.helperDisabled=false,this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs"]],standalone:false,decls:16,vars:23,consts:[[3,"p-helper","p-size","p-disabled"],[1,"po-row"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","type","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["name","disabled","p-label","Disabled",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(Hl(0,"po-helper",0)(1,"po-divider"),Cl(2,"div",1)(3,"po-input",2),dt("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{title:u})}),og(),Z0(),Cl(4,"po-input",3),dt("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{content:u})}),og(),Z0(),og(),Cl(5,"div",1),ix(6,ye,1,1,"po-input",4),og(),Cl(7,"div",1)(8,"po-radio-group",5),dt("ngModelChange",function(u){return i.updateHelperType(u)}),og(),Z0(),og(),Cl(9,"div",1)(10,"po-radio-group",6),gw("ngModelChange",function(u){return Zx(i.helperSize,u)||(i.helperSize=u),u}),og(),Z0(),og(),Cl(11,"div",1)(12,"po-checkbox",7),gw("ngModelChange",function(u){return Zx(i.helperDisabled,u)||(i.helperDisabled=u),u}),og(),Z0(),og(),Hl(13,"po-divider"),Cl(14,"div",1)(15,"po-button",8),dt("p-click",function(){return i.reset()}),og()()),l&2&&(ZE("p-helper",i.helperOptions)("p-size",i.helperSize)("p-disabled",i.helperDisabled),Lp(3),ZE("ngModel",i.helperOptions.title),X0(),Lp(),ZE("ngModel",i.helperOptions.content),X0(),Lp(2),ox(i.helperOptions.type==="help"?6:-1),Lp(2),ZE("p-columns",4)("ngModel",i.helperOptions.type)("p-options",sN(15,re,iN(13,ge),iN(14,xe))),X0(),Lp(2),pw("ngModel",i.helperSize),ZE("p-columns",4)("p-options",sN(20,re,iN(18,ve),iN(19,Ce))),X0(),Lp(2),pw("ngModel",i.helperDisabled),X0());},dependencies:[sY,gk,Qt,_v,mc,q3,Nde,Tt],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Helper Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-helper-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return o})();var de=(()=>{class o{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.",type:"info"};type=Yo.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance"]],standalone:false,decls:8,vars:4,consts:[[1,"po-row","po-mb-3"],[1,"po-font-title"],[3,"p-helper"],[1,"po-row"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(Cl(0,"po-container")(1,"div",0)(2,"div",1),qx(3,"Sales Performance"),og(),Hl(4,"po-helper",2),og(),Cl(5,"div",3)(6,"div",4),Hl(7,"po-chart",5),og()()()),l&2&&(Lp(4),ZE("p-helper",i.helperOptions),Lp(3),ZE("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover));},dependencies:[Sde,gc,Tt],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Helper Sales Performance"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-helper-sales-performance"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return o})();var ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-doc"]],standalone:false,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoHelperModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-helper"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoHelperComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-helper"),og(),qx(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),og(),Cl(18,"p"),qx(19,"Principais funcionalidades:"),og(),Cl(20,"ul")(21,"li"),qx(22,"Exibe \xEDcone de ajuda ("),Cl(23,"code"),qx(24,"help"),og(),qx(25,") ou informa\xE7\xE3o ("),Cl(26,"code"),qx(27,"info"),og(),qx(28,") conforme configura\xE7\xE3o."),og(),Cl(29,"li"),qx(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),Cl(31,"code"),qx(32,"p-helper"),og(),qx(33,"."),og(),Cl(34,"li"),qx(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),og(),Cl(36,"li"),qx(37,"Controle do tamanho do componente via propriedade "),Cl(38,"code"),qx(39,"p-size"),og(),qx(40," ("),Cl(41,"code"),qx(42,"small"),og(),qx(43," ou "),Cl(44,"code"),qx(45,"medium"),og(),qx(46,")."),og(),Cl(47,"li"),qx(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),og()(),Cl(49,"p"),qx(50,"Exemplo de uso:"),og(),Cl(51,"pre")(52,"code",6),qx(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),og()(),Cl(54,"p"),qx(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),og(),Cl(56,"pre")(57,"code",6),qx(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),og()(),Cl(59,"p"),qx(60,"A propriedade "),Cl(61,"code"),qx(62,"p-helper"),og(),qx(63," aceita um objeto do tipo "),Cl(64,"code"),qx(65,"PoHelperOptions"),og(),qx(66,":"),og(),Cl(67,"pre")(68,"code",7),qx(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),og()(),Cl(70,"blockquote")(71,"p")(72,"strong"),qx(73,"Importante:"),og(),qx(74," A propriedade "),Cl(75,"code"),qx(76,"footerAction"),og(),qx(77," n\xE3o pode ser utilizada quando o tipo do helper for "),Cl(78,"code"),qx(79,"info"),og(),qx(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),og()(),Cl(81,"h4"),qx(82,"Tokens customiz\xE1veis"),og(),Cl(83,"p"),qx(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(85,"blockquote")(86,"p"),qx(87,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(88,"a",8),qx(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(90,"."),og()(),Cl(91,"table")(92,"thead")(93,"tr")(94,"th"),qx(95,"Propriedade"),og(),Cl(96,"th"),qx(97,"Descri\xE7\xE3o"),og(),Cl(98,"th"),qx(99,"Valor Padr\xE3o"),og()()(),Cl(100,"tbody")(101,"tr")(102,"td")(103,"code"),qx(104,"--color"),og()(),Cl(105,"td"),qx(106,"Cor principal do \xEDcone"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--color-action-default)"),og()()(),Cl(110,"tr")(111,"td")(112,"code"),qx(113,"--border-color-hover"),og()(),Cl(114,"td"),qx(115,"Cor da borda no estado hover"),og(),Cl(116,"td")(117,"code"),qx(118,"var(--color-brand-01-darkest)"),og()()(),Cl(119,"tr")(120,"td")(121,"code"),qx(122,"--background-pressed"),og()(),Cl(123,"td"),qx(124,"Cor de background no estado de pressionado\xA0"),og(),Cl(125,"td")(126,"code"),qx(127,"var(--color-brand-01-light)"),og()()(),Cl(128,"tr")(129,"td")(130,"code"),qx(131,"--color-disabled"),og()(),Cl(132,"td"),qx(133,"Cor principal no estado disabled"),og(),Cl(134,"td")(135,"code"),qx(136,"var(--color-action-disabled)"),og()()()()()(),Cl(137,"div",9)(138,"h4",10),qx(139,"Seletor"),og(),Cl(140,"pre",11),qx(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),og()(),Cl(142,"h4",12),qx(143,"Propriedades"),og(),Cl(144,"table",13)(145,"tr",14)(146,"th",15),qx(147,"Nome"),og(),Cl(148,"th",15),qx(149,"Tipo"),og(),Cl(150,"th",15),qx(151,"Padr\xE3o"),og(),Cl(152,"th",15),qx(153,"Descri\xE7\xE3o"),og()(),Cl(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),qx(158," p-append-in-body"),Hl(159,"br"),og()()(),Cl(160,"td",20)(161,"code",21),qx(162,"boolean"),og()(),Cl(163,"td",22),qx(164,"-"),og(),Cl(165,"td",23)(166,"em")(167,"strong"),qx(168,"(opcional)"),og()(),Cl(169,"p"),qx(170,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Cl(171,"code"),qx(172,"p-target"),og(),qx(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),og()()(),Cl(174,"tr",16)(175,"td",17)(176,"div",18)(177,"span",19),qx(178," p-disabled"),Hl(179,"br"),og()()(),Cl(180,"td",20)(181,"code",21),qx(182,"boolean"),og()(),Cl(183,"td",22)(184,"p")(185,"code"),qx(186,"false"),og()()(),Cl(187,"td",23)(188,"em")(189,"strong"),qx(190,"(opcional)"),og()(),Cl(191,"p"),qx(192,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),og()()(),Cl(193,"tr",16)(194,"td",17)(195,"div",18)(196,"span",19),qx(197," p-helper"),Hl(198,"br"),og()()(),Cl(199,"td",20)(200,"code",24),qx(201,"PoHelperOptions "),og(),Cl(202,"code",25),qx(203," string"),og()(),Cl(204,"td",22),qx(205,"-"),og(),Cl(206,"td",23)(207,"em")(208,"strong"),qx(209,"(opcional)"),og()(),Cl(210,"p"),qx(211,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),og(),Cl(212,"p"),qx(213,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Cl(214,"code"),qx(215,"PoHelperOptions"),og(),qx(216," para configura\xE7\xE3o avan\xE7ada:"),og(),Cl(217,"ul")(218,"li")(219,"code"),qx(220,"title"),og(),qx(221,": T\xEDtulo do popover."),og(),Cl(222,"li")(223,"code"),qx(224,"content"),og(),qx(225,": Conte\xFAdo explicativo exibido no popover."),og(),Cl(226,"li")(227,"code"),qx(228,"type"),og(),qx(229,": Tipo do \xEDcone ("),Cl(230,"code"),qx(231,"help"),og(),qx(232," ou "),Cl(233,"code"),qx(234,"info"),og(),qx(235,")."),og(),Cl(236,"li")(237,"code"),qx(238,"eventOnClick"),og(),qx(239,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),og(),Cl(240,"li")(241,"code"),qx(242,"footerAction"),og(),qx(243,": Objeto com "),Cl(244,"code"),qx(245,"label"),og(),qx(246," e "),Cl(247,"code"),qx(248,"action"),og(),qx(249," para a\xE7\xE3o customizada no rodap\xE9 do popover."),og()(),Cl(250,"p"),qx(251,"Exemplo de uso:"),og(),Cl(252,"pre")(253,"code",6),qx(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),og()()()(),Cl(255,"tr",16)(256,"td",17)(257,"div",18)(258,"span",19),qx(259," p-size"),Hl(260,"br"),og()()(),Cl(261,"td",20)(262,"code",25),qx(263,"string"),og()(),Cl(264,"td",22)(265,"p")(266,"code"),qx(267,"medium"),og()()(),Cl(268,"td",23)(269,"em")(270,"strong"),qx(271,"(opcional)"),og()(),Cl(272,"p"),qx(273,"Define o tamanho do componente:"),og(),Cl(274,"ul")(275,"li")(276,"code"),qx(277,"small"),og(),qx(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(279,"li")(280,"code"),qx(281,"medium"),og(),qx(282,": altura do \xEDcone com seu valor de 24px."),og()(),Cl(283,"blockquote")(284,"p"),qx(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(286,"code"),qx(287,"medium"),og(),qx(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(289,"a",26),qx(290,"po-theme"),og(),qx(291,"."),og()()()()(),Cl(292,"h3"),qx(293,"Interfaces"),og(),Cl(294,"h4",27)(295,"code",5),qx(296,"PoHelperOptions"),og()(),Cl(297,"div",2)(298,"p"),qx(299,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Cl(300,"em"),qx(301,"helper"),og(),qx(302,")."),og()(),Cl(303,"h4",12),qx(304,"Propriedades"),og(),Cl(305,"table",13)(306,"tr",14)(307,"th",15),qx(308,"Nome"),og(),Cl(309,"th",15),qx(310,"Tipo"),og(),Cl(311,"th",15),qx(312,"Descri\xE7\xE3o"),og()(),Cl(313,"tr",16)(314,"td",17)(315,"div",18)(316,"span",19),qx(317," content"),Hl(318,"br"),og()()(),Cl(319,"td",20)(320,"code",25),qx(321,"string"),og()(),Cl(322,"td",23)(323,"em")(324,"strong"),qx(325,"(opcional)"),og()(),Cl(326,"p"),qx(327,"Texto explicativo exibido no popover."),og(),Cl(328,"p"),qx(329,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Cl(330,"code"),qx(331,"<b>"),og(),qx(332," (negrito), "),Cl(333,"code"),qx(334,"<strong>"),og(),qx(335," (negrito), "),Cl(336,"code"),qx(337,"<i>"),og(),qx(338," (it\xE1lico), "),Cl(339,"code"),qx(340,"<em>"),og(),qx(341,` (it\xE1lico) e
`),Cl(342,"code"),qx(343,"<u>"),og(),qx(344," (sublinhado)."),og(),Cl(345,"p"),qx(346,"Exemplo:"),og(),Cl(347,"pre")(348,"code",7),qx(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),og()()()(),Cl(350,"tr",16)(351,"td",17)(352,"div",18)(353,"span",19),qx(354," eventOnClick"),Hl(355,"br"),og()()(),Cl(356,"td",20)(357,"code",28),qx(358,"Function"),og()(),Cl(359,"td",23)(360,"em")(361,"strong"),qx(362,"(opcional)"),og()(),Cl(363,"p"),qx(364,"Evento disparado ao clicar no \xEDcone do helper."),og(),Cl(365,"p"),qx(366,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),og(),Cl(367,"p"),qx(368,"Pode ser uma fun\xE7\xE3o ou um "),Cl(369,"code"),qx(370,"EventEmitter"),og(),qx(371,"."),og(),Cl(372,"p"),qx(373,"Exemplo:"),og(),Cl(374,"pre")(375,"code"),qx(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),og()()()(),Cl(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),qx(381," footerAction"),Hl(382,"br"),og()()(),Cl(383,"td",20)(384,"code",29),qx(385,`{ label: string; action: Function;
}`),og()(),Cl(386,"td",23)(387,"em")(388,"strong"),qx(389,"(opcional)"),og()(),Cl(390,"p"),qx(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Cl(392,"code"),qx(393,"help"),og(),qx(394," e desconsiderada quando o type for "),Cl(395,"code"),qx(396,"info"),og(),qx(397,"."),og(),Cl(398,"p"),qx(399,"Deve ser um objeto com as propriedades:"),og(),Cl(400,"ul")(401,"li")(402,"code"),qx(403,"label"),og(),qx(404,": Texto do bot\xE3o."),og(),Cl(405,"li")(406,"code"),qx(407,"action"),og(),qx(408,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),og()(),Cl(409,"p"),qx(410,"Exemplo:"),og(),Cl(411,"pre")(412,"code",7),qx(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),og()()()(),Cl(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),qx(418," title"),Hl(419,"br"),og()()(),Cl(420,"td",20)(421,"code",25),qx(422,"string"),og()(),Cl(423,"td",23)(424,"em")(425,"strong"),qx(426,"(opcional)"),og()(),Cl(427,"p"),qx(428,"T\xEDtulo do helper exibido no popover."),og()()(),Cl(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),qx(433," type"),Hl(434,"br"),og()()(),Cl(435,"td",20)(436,"code",30),qx(437,"'info' "),og(),Cl(438,"code",31),qx(439," 'help'"),og()(),Cl(440,"td",23)(441,"em")(442,"strong"),qx(443,"(opcional)"),og()(),Cl(444,"p"),qx(445,"Tipo do \xEDcone exibido: "),Cl(446,"code"),qx(447,"info"),og(),qx(448," ou "),Cl(449,"code"),qx(450,"help"),og(),qx(451,"."),og(),Cl(452,"p"),qx(453,"Quando o valor \xE9 "),Cl(454,"code"),qx(455,"info"),og(),qx(456,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),og(),Cl(457,"p"),qx(458,"Quando o valor \xE9 "),Cl(459,"code"),qx(460,"help"),og(),qx(461,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-helper-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),og()()()),l&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,pe,se,ce,ue],encapsulation:2})}return o})();var Oe=[{path:"",component:he}],Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[bL.forChild(Oe),bL]})}return o})();var it=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ca,Ee]})}return o})();export{it as DocPoHelperModule};