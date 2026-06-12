import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dl as gme,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,bH as Wde,aJ as nme,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var te=(()=>{class n{srcImage="https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg";static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-basic"]],standalone:false,decls:1,vars:1,consts:[["p-alt","teste de imagem","p-height","300",3,"p-src"]],template:function(a,i){a&1&&Hl(0,"po-image",0),a&2&&ZE("p-src",i.srcImage);},dependencies:[gme],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Image Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-image-basic/sample-po-image-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-image-basic/sample-po-image-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-image-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ce,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,te],encapsulation:2})}return n})();var ne=(()=>{class n{alt;height;src;ngOnInit(){this.restore();}restore(){this.alt=void 0,this.height="auto",this.src=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-labs"]],standalone:false,decls:11,vars:6,consts:[["f","ngForm"],[3,"p-src","p-alt","p-height"],[1,"po-row"],["name","src","p-clean","","p-label","Source","p-help","Enter a url or path of the image that will be displayed",1,"po-md-6",3,"ngModelChange","ngModel"],["name","alt","p-clean","","p-label","Alternate","p-help","Alternative text for image description. Ex.: Po Ui logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=gx();Hl(0,"po-image",1)(1,"po-divider"),Cl(2,"form",null,0)(4,"div",2)(5,"po-input",3),gw("ngModelChange",function(l){return Jy(d),Zx(i.src,l)||(i.src=l),e_(l)}),og(),Z0(),Cl(6,"po-input",4),gw("ngModelChange",function(l){return Jy(d),Zx(i.alt,l)||(i.alt=l),e_(l)}),og(),Z0(),Cl(7,"po-input",5),gw("ngModelChange",function(l){return Jy(d),Zx(i.height,l)||(i.height=l),e_(l)}),og(),Z0(),og(),Hl(8,"po-divider"),Cl(9,"div",2)(10,"po-button",6),dt("p-click",function(){return i.restore()}),og()()();}a&2&&(ZE("p-src",i.src)("p-alt",i.alt)("p-height",i.height),Lp(5),pw("ngModel",i.src),X0(),Lp(),pw("ngModel",i.alt),X0(),Lp(),pw("ngModel",i.height),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,gme],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Image Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-image-labs/sample-po-image-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

<po-divider />
<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="src"
      [(ngModel)]="src"
      p-clean
      p-label="Source"
      p-help="Enter a url or path of the image that will be displayed"
    ></po-input>
    <po-input
      class="po-md-6"
      name="alt"
      [(ngModel)]="alt"
      p-clean
      p-label="Alternate"
      p-help="Alternative text for image description. Ex.: Po Ui logo"
    ></po-input>
    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-label="Height"></po-input>
  </div>
  <po-divider />
  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-image-labs/sample-po-image-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-labs',
  templateUrl: './sample-po-image-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageLabsComponent implements OnInit {
  alt: string;
  height: string | number;
  src: string;

  ngOnInit(): void {
    this.restore();
  }

  restore() {
    this.alt = undefined;
    this.height = 'auto';
    this.src = undefined;
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-image-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ne],encapsulation:2})}return n})();var Ce=["bookingForm"],ve=["datepicker"],le=(()=>{class n{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];travelOptions=[{label:"Nova york",value:"https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{label:"B\xE9lgica",value:"https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},{label:"Madrid",value:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-travel"]],viewQuery:function(a,i){if(a&1&&zl(Ce,7)(ve,7),a&2){let d;uo(d=fo())&&(i.form=d.first),uo(d=fo())&&(i.datepickerComponent=d.first);}},standalone:false,decls:17,vars:11,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],[1,"po-md-3"],["p-height","150",3,"p-src"],[1,"po-md-9"],["name","destinations","p-label","Destinos",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"]],template:function(a,i){if(a&1){let d=gx();Cl(0,"div",2)(1,"div",3),qx(2,"Choosing a trip"),og()(),Cl(3,"div",4)(4,"div",5),Hl(5,"po-image",6),og(),Cl(6,"div",7)(7,"form",null,0)(9,"div",4)(10,"po-select",8),gw("ngModelChange",function(l){return Jy(d),Zx(i.destinations,l)||(i.destinations=l),e_(l)}),og(),Z0(),Cl(11,"po-select",9),gw("ngModelChange",function(l){return Jy(d),Zx(i.children,l)||(i.children=l),e_(l)}),og(),Z0(),Cl(12,"po-select",10),gw("ngModelChange",function(l){return Jy(d),Zx(i.adults,l)||(i.adults=l),e_(l)}),og(),Z0(),og(),Cl(13,"div",4)(14,"po-datepicker",11,1),gw("ngModelChange",function(l){return Jy(d),Zx(i.checkin,l)||(i.checkin=l),e_(l)}),og(),Z0(),Cl(16,"po-datepicker",12),gw("ngModelChange",function(l){return Jy(d),Zx(i.checkout,l)||(i.checkout=l),e_(l)}),og(),Z0(),og()()()();}a&2&&(Lp(5),ZE("p-src",i.destinations),Lp(5),pw("ngModel",i.destinations),ZE("p-options",i.travelOptions),X0(),Lp(),pw("ngModel",i.children),ZE("p-options",i.childrenOptions),X0(),Lp(),pw("ngModel",i.adults),ZE("p-options",i.adultsOptions),X0(),Lp(2),pw("ngModel",i.checkin),ZE("p-max-date",i.checkout),X0(),Lp(2),pw("ngModel",i.checkout),ZE("p-min-date",i.checkin),X0());},dependencies:[lY,sY,aY,gk,fk,Wde,nme,gme],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Image Travel"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-image-travel/sample-po-image-travel.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-text-center">
  <div class="po-font-title">Choosing a trip</div>
</div>

<div class="po-row">
  <div class="po-md-3">
    <po-image [p-src]="destinations" p-height="150"> </po-image>
  </div>

  <div class="po-md-9">
    <form #bookingForm="ngForm">
      <div class="po-row">
        <po-select
          class="po-md-4"
          name="destinations"
          [(ngModel)]="destinations"
          p-label="Destinos"
          [p-options]="travelOptions"
        >
        </po-select>

        <po-select
          class="po-md-4"
          name="children"
          [(ngModel)]="children"
          p-label="Children"
          [p-options]="childrenOptions"
        >
        </po-select>

        <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
        </po-select>
      </div>

      <div class="po-row">
        <po-datepicker
          #datepicker
          class="po-md-4"
          name="checkin"
          [(ngModel)]="checkin"
          p-label="Check In"
          p-placeholder="dd/mm/yyyy"
          p-required
          [p-max-date]="checkout"
        >
        </po-datepicker>

        <po-datepicker
          class="po-md-4"
          name="checkout"
          [(ngModel)]="checkout"
          p-label="Check Out"
          p-placeholder="dd/mm/yyyy"
          p-required
          [p-min-date]="checkin"
        >
        </po-datepicker>
      </div>
    </form>
  </div>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-image-travel/sample-po-image-travel.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-image-travel',
  templateUrl: './sample-po-image-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageTravelComponent {
  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  destinations: string =
    'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly travelOptions: Array<PoSelectOption> = [
    {
      label: 'Nova york',
      value:
        'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      label: 'B\xE9lgica',
      value:
        'https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      label: 'Madrid',
      value:
        'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ];

  constructor() {}

  restore() {
    this.adults = 1;
    this.children = 0;
    this.checkin = undefined;
    this.checkout = undefined;
    this.destinations =
      'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-image-travel"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return n})();var pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-doc"]],standalone:false,decls:181,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoImageLoading"],["pan","",1,"docs-api-property-type","boolean"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoImageModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-image"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoImageComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"As imagens t\xEAm a fun\xE7\xE3o de traduzir visualmente ideias espec\xEDficas ou mensagens complexas, mostrar um produto ou contar uma hist\xF3ria, estabelecendo empatia e se conectando com os usu\xE1rios."),og(),Cl(15,"h4"),qx(16,"Boas Pr\xE1ticas"),og(),Cl(17,"p"),qx(18,"O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xFAdo Web (WCAG) 2.1. Tamb\xE9m foram estruturadas padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia para os usu\xE1rios. Por isso, \xE9 muito importante que, ao aplicar esse componente, o propriet\xE1rio do conte\xFAdo leve em considera\xE7\xE3o alguns crit\xE9rios e pr\xE1ticas:"),og(),Cl(19,"h5"),qx(20,"Uso"),og(),Cl(21,"ul")(22,"li"),qx(23,"Ao utilizar imagens, mantenha uma coer\xEAncia entre elas no produto, de modo que compartilhem um mesmo estilo e inten\xE7\xE3o entre si."),og(),Cl(24,"li"),qx(25,"Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca."),og(),Cl(26,"li"),qx(27,"Ao utilizar fotografias, \xE9 recomend\xE1vel o uso de propor\xE7\xF5es de aspecto padr\xE3o, como 1:1, 3:1, 3:2, 16:9."),og(),Cl(28,"li"),qx(29,"Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportar\xE1 em diferentes formatos. Isso tamb\xE9m ajuda a transmitir a mensagem de forma objetiva e consistente."),og()(),Cl(30,"h5"),qx(31,"Imagem como plano de fundo"),og(),Cl(32,"ul")(33,"li"),qx(34,"Avalie se \xE9 realmente necess\xE1rio o uso de imagem como plano de fundo e evite sempre que poss\xEDvel, pois pode ocasionar em um baixo contraste entre texto e imagem."),og(),Cl(35,"li"),qx(36,"Caso utilize, redobre a aten\xE7\xE3o na escolha da imagem e certifique-se de que ela est\xE1 adequada para a leitura do texto e n\xE3o est\xE1 sendo apenas um ru\xEDdo."),og(),Cl(37,"li"),qx(38,"Tenha especial aten\xE7\xE3o em telas menores. Embora seja poss\xEDvel posicionar o texto em uma \xE1rea mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espa\xE7os, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualiza\xE7\xE3o da imagem."),og(),Cl(39,"li"),qx(40,"Verifique a taxa de contraste do texto em rela\xE7\xE3o ao fundo. Deve ser suficiente para atender aos padr\xF5es de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt."),og(),Cl(41,"li"),qx(42,"Se n\xE3o tiver controle sobre qual imagem ser\xE1 colocada por tr\xE1s do texto, o recomendado \xE9 n\xE3o utilizar nesse formato."),og()(),Cl(43,"h4"),qx(44,"Acessibilidade tratada no componente"),og(),Cl(45,"p"),qx(46,"As boas pr\xE1ticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:"),og(),Cl(47,"ul")(48,"li"),qx(49,"Imagem informativa simples, como por exemplo uma fotografia de um produto."),og(),Cl(50,"li"),qx(51,"Imagem complexa, como um gr\xE1fico, infogr\xE1fico ou diagrama."),og(),Cl(52,"li"),qx(53,"Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas n\xE3o \xE9 essencial para compreender a informa\xE7\xE3o."),og()()(),Cl(54,"div",6)(55,"h4",7),qx(56,"Seletor"),og(),Cl(57,"pre",8),qx(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),og()(),Cl(59,"h4",9),qx(60,"Propriedades"),og(),Cl(61,"table",10)(62,"tr",11)(63,"th",12),qx(64,"Nome"),og(),Cl(65,"th",12),qx(66,"Tipo"),og(),Cl(67,"th",12),qx(68,"Padr\xE3o"),og(),Cl(69,"th",12),qx(70,"Descri\xE7\xE3o"),og()(),Cl(71,"tr",13)(72,"td",14)(73,"div",15)(74,"span",16),qx(75," p-alt"),Hl(76,"br"),og()()(),Cl(77,"td",17)(78,"code",18),qx(79,"string"),og()(),Cl(80,"td",19),qx(81,"-"),og(),Cl(82,"td",20)(83,"em")(84,"strong"),qx(85,"(opcional)"),og()(),Cl(86,"p"),qx(87,"Defini o texto alternativo descrevendo a imagem."),og()()(),Cl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),qx(92," p-height"),Hl(93,"br"),og()()(),Cl(94,"td",17)(95,"code",21),qx(96,"number"),og()(),Cl(97,"td",19),qx(98,"-"),og(),Cl(99,"td",20)(100,"em")(101,"strong"),qx(102,"(opcional)"),og()(),Cl(103,"p"),qx(104,"Define a altura da imagem em "),Cl(105,"em"),qx(106,"pixels"),og(),qx(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),og()()(),Cl(108,"tr",13)(109,"td",14)(110,"div",15)(111,"span",16),qx(112," p-loading"),Hl(113,"br"),og()()(),Cl(114,"td",17)(115,"code",22),qx(116,"PoImageLoading"),og()(),Cl(117,"td",19),qx(118,"-"),og(),Cl(119,"td",20)(120,"em")(121,"strong"),qx(122,"(opcional)"),og()(),Cl(123,"p"),qx(124,"Defini o carregamento que pode ser dos tipo:"),og(),Cl(125,"p"),qx(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),og(),Cl(127,"blockquote")(128,"p"),qx(129,"N\xE3o \xE9 permitido definir esta propriedade em conjunto com a propriedade "),Cl(130,"code"),qx(131,"p-priority"),og(),qx(132,"."),og()()()(),Cl(133,"tr",13)(134,"td",14)(135,"div",15)(136,"span",16),qx(137," p-priority"),Hl(138,"br"),og()()(),Cl(139,"td",17)(140,"code",23),qx(141,"boolean"),og()(),Cl(142,"td",19)(143,"p")(144,"code"),qx(145,"false"),og()()(),Cl(146,"td",20)(147,"em")(148,"strong"),qx(149,"(opcional)"),og()(),Cl(150,"p"),qx(151,"Defini a prioridade de carregamento da imagem."),og(),Cl(152,"blockquote")(153,"p"),qx(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),og()(),Cl(155,"pre")(156,"code"),qx(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),og()()()(),Cl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),qx(162," p-src"),Hl(163,"br"),og()()(),Cl(164,"td",17)(165,"code",18),qx(166,"string"),og()(),Cl(167,"td",19),qx(168,"-"),og(),Cl(169,"td",20)(170,"em")(171,"strong"),qx(172,"(opcional)"),og()(),Cl(173,"p"),qx(174,"Fonte da imagem que pode ser um caminho local ("),Cl(175,"code"),qx(176,"./assets/images/logo-black-small.png"),og(),qx(177,`)
ou um servidor externo (`),Cl(178,"code"),qx(179,"https://po-ui.io/assets/images/logo-black-small.png"),og(),qx(180,")."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Image",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-image-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-image-basic-view")(6,"sample-po-image-labs-view")(7,"sample-po-image-travel-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ie,ae,me,pe],encapsulation:2})}return n})();var we=[{path:"",component:re}],se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[bL.forChild(we),bL]})}return n})();var Qe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[ca,se]})}return n})();
export{Qe as DocPoImageModule};