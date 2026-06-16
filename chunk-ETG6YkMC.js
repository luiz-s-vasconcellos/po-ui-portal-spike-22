import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cM as Rp,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,aO as Yo,al as lx,am as pw,an as $0,ap as hw,aq as G0,b9 as Ro,ai as ya,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ie=(()=>{class n{srcImage="https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg";static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-basic"]],standalone:false,decls:1,vars:1,consts:[["p-alt","teste de imagem","p-height","300",3,"p-src"]],template:function(a,i){a&1&&Ul(0,"po-image",0),a&2&&YE("p-src",i.srcImage);},dependencies:[Rp],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Image Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-image-basic/sample-po-image-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-image-basic/sample-po-image-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-image-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ge,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ie],encapsulation:2})}return n})();var le=(()=>{class n{alt;height;src;ngOnInit(){this.restore();}restore(){this.alt=void 0,this.height="auto",this.src=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-labs"]],standalone:false,decls:11,vars:6,consts:[["f","ngForm"],[3,"p-src","p-alt","p-height"],[1,"po-row"],["name","src","p-clean","","p-label","Source","p-help","Enter a url or path of the image that will be displayed",1,"po-md-6",3,"ngModelChange","ngModel"],["name","alt","p-clean","","p-label","Alternate","p-help","Alternative text for image description. Ex.: Po Ui logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=lx();Ul(0,"po-image",1)(1,"po-divider"),wl(2,"form",null,0)(4,"div",2)(5,"po-input",3),pw("ngModelChange",function(l){return Qy(d),$x(i.src,l)||(i.src=l),Jy(l)}),ng(),$0(),wl(6,"po-input",4),pw("ngModelChange",function(l){return Qy(d),$x(i.alt,l)||(i.alt=l),Jy(l)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(l){return Qy(d),$x(i.height,l)||(i.height=l),Jy(l)}),ng(),$0(),ng(),Ul(8,"po-divider"),wl(9,"div",2)(10,"po-button",6),ut("p-click",function(){return i.restore()}),ng()()();}a&2&&(YE("p-src",i.src)("p-alt",i.alt)("p-height",i.height),Pp(5),hw("ngModel",i.src),G0(),Pp(),hw("ngModel",i.alt),G0(),Pp(),hw("ngModel",i.height),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Yo,Rp],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Image Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-image-labs/sample-po-image-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-image-labs/sample-po-image-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-image-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ce,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,le],encapsulation:2})}return n})();var Se=["bookingForm"],Ee=["datepicker"],re=(()=>{class n{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];travelOptions=[{label:"Nova york",value:"https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{label:"B\xE9lgica",value:"https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},{label:"Madrid",value:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-travel"]],viewQuery:function(a,i){if(a&1&&$l(Se,7)(Ee,7),a&2){let d;uo(d=fo())&&(i.form=d.first),uo(d=fo())&&(i.datepickerComponent=d.first);}},standalone:false,decls:17,vars:11,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],[1,"po-md-3"],["p-height","150",3,"p-src"],[1,"po-md-9"],["name","destinations","p-label","Destinos",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"]],template:function(a,i){if(a&1){let d=lx();wl(0,"div",2)(1,"div",3),Ux(2,"Choosing a trip"),ng()(),wl(3,"div",4)(4,"div",5),Ul(5,"po-image",6),ng(),wl(6,"div",7)(7,"form",null,0)(9,"div",4)(10,"po-select",8),pw("ngModelChange",function(l){return Qy(d),$x(i.destinations,l)||(i.destinations=l),Jy(l)}),ng(),$0(),wl(11,"po-select",9),pw("ngModelChange",function(l){return Qy(d),$x(i.children,l)||(i.children=l),Jy(l)}),ng(),$0(),wl(12,"po-select",10),pw("ngModelChange",function(l){return Qy(d),$x(i.adults,l)||(i.adults=l),Jy(l)}),ng(),$0(),ng(),wl(13,"div",4)(14,"po-datepicker",11,1),pw("ngModelChange",function(l){return Qy(d),$x(i.checkin,l)||(i.checkin=l),Jy(l)}),ng(),$0(),wl(16,"po-datepicker",12),pw("ngModelChange",function(l){return Qy(d),$x(i.checkout,l)||(i.checkout=l),Jy(l)}),ng(),$0(),ng()()()();}a&2&&(Pp(5),YE("p-src",i.destinations),Pp(5),hw("ngModel",i.destinations),YE("p-options",i.travelOptions),G0(),Pp(),hw("ngModel",i.children),YE("p-options",i.childrenOptions),G0(),Pp(),hw("ngModel",i.adults),YE("p-options",i.adultsOptions),G0(),Pp(2),hw("ngModel",i.checkin),YE("p-max-date",i.checkout),G0(),Pp(2),hw("ngModel",i.checkout),YE("p-min-date",i.checkin),G0());},dependencies:[aY,iY,oY,ck,ok,Ro,ya,Rp],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Image Travel"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-image-travel/sample-po-image-travel.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-text-center">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-image-travel/sample-po-image-travel.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-image-travel"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-doc"]],standalone:false,decls:181,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoImageLoading"],["pan","",1,"docs-api-property-type","boolean"]],template:function(a,i){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoImageModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-image"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoImageComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"As imagens t\xEAm a fun\xE7\xE3o de traduzir visualmente ideias espec\xEDficas ou mensagens complexas, mostrar um produto ou contar uma hist\xF3ria, estabelecendo empatia e se conectando com os usu\xE1rios."),ng(),wl(15,"h4"),Ux(16,"Boas Pr\xE1ticas"),ng(),wl(17,"p"),Ux(18,"O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xFAdo Web (WCAG) 2.1. Tamb\xE9m foram estruturadas padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia para os usu\xE1rios. Por isso, \xE9 muito importante que, ao aplicar esse componente, o propriet\xE1rio do conte\xFAdo leve em considera\xE7\xE3o alguns crit\xE9rios e pr\xE1ticas:"),ng(),wl(19,"h5"),Ux(20,"Uso"),ng(),wl(21,"ul")(22,"li"),Ux(23,"Ao utilizar imagens, mantenha uma coer\xEAncia entre elas no produto, de modo que compartilhem um mesmo estilo e inten\xE7\xE3o entre si."),ng(),wl(24,"li"),Ux(25,"Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca."),ng(),wl(26,"li"),Ux(27,"Ao utilizar fotografias, \xE9 recomend\xE1vel o uso de propor\xE7\xF5es de aspecto padr\xE3o, como 1:1, 3:1, 3:2, 16:9."),ng(),wl(28,"li"),Ux(29,"Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportar\xE1 em diferentes formatos. Isso tamb\xE9m ajuda a transmitir a mensagem de forma objetiva e consistente."),ng()(),wl(30,"h5"),Ux(31,"Imagem como plano de fundo"),ng(),wl(32,"ul")(33,"li"),Ux(34,"Avalie se \xE9 realmente necess\xE1rio o uso de imagem como plano de fundo e evite sempre que poss\xEDvel, pois pode ocasionar em um baixo contraste entre texto e imagem."),ng(),wl(35,"li"),Ux(36,"Caso utilize, redobre a aten\xE7\xE3o na escolha da imagem e certifique-se de que ela est\xE1 adequada para a leitura do texto e n\xE3o est\xE1 sendo apenas um ru\xEDdo."),ng(),wl(37,"li"),Ux(38,"Tenha especial aten\xE7\xE3o em telas menores. Embora seja poss\xEDvel posicionar o texto em uma \xE1rea mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espa\xE7os, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualiza\xE7\xE3o da imagem."),ng(),wl(39,"li"),Ux(40,"Verifique a taxa de contraste do texto em rela\xE7\xE3o ao fundo. Deve ser suficiente para atender aos padr\xF5es de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt."),ng(),wl(41,"li"),Ux(42,"Se n\xE3o tiver controle sobre qual imagem ser\xE1 colocada por tr\xE1s do texto, o recomendado \xE9 n\xE3o utilizar nesse formato."),ng()(),wl(43,"h4"),Ux(44,"Acessibilidade tratada no componente"),ng(),wl(45,"p"),Ux(46,"As boas pr\xE1ticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:"),ng(),wl(47,"ul")(48,"li"),Ux(49,"Imagem informativa simples, como por exemplo uma fotografia de um produto."),ng(),wl(50,"li"),Ux(51,"Imagem complexa, como um gr\xE1fico, infogr\xE1fico ou diagrama."),ng(),wl(52,"li"),Ux(53,"Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas n\xE3o \xE9 essencial para compreender a informa\xE7\xE3o."),ng()()(),wl(54,"div",6)(55,"h4",7),Ux(56,"Seletor"),ng(),wl(57,"pre",8),Ux(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),ng()(),wl(59,"h4",9),Ux(60,"Propriedades"),ng(),wl(61,"table",10)(62,"tr",11)(63,"th",12),Ux(64,"Nome"),ng(),wl(65,"th",12),Ux(66,"Tipo"),ng(),wl(67,"th",12),Ux(68,"Padr\xE3o"),ng(),wl(69,"th",12),Ux(70,"Descri\xE7\xE3o"),ng()(),wl(71,"tr",13)(72,"td",14)(73,"div",15)(74,"span",16),Ux(75," p-alt"),Ul(76,"br"),ng()()(),wl(77,"td",17)(78,"code",18),Ux(79,"string"),ng()(),wl(80,"td",19),Ux(81,"-"),ng(),wl(82,"td",20)(83,"em")(84,"strong"),Ux(85,"(opcional)"),ng()(),wl(86,"p"),Ux(87,"Defini o texto alternativo descrevendo a imagem."),ng()()(),wl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),Ux(92," p-height"),Ul(93,"br"),ng()()(),wl(94,"td",17)(95,"code",21),Ux(96,"number"),ng()(),wl(97,"td",19),Ux(98,"-"),ng(),wl(99,"td",20)(100,"em")(101,"strong"),Ux(102,"(opcional)"),ng()(),wl(103,"p"),Ux(104,"Define a altura da imagem em "),wl(105,"em"),Ux(106,"pixels"),ng(),Ux(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),ng()()(),wl(108,"tr",13)(109,"td",14)(110,"div",15)(111,"span",16),Ux(112," p-loading"),Ul(113,"br"),ng()()(),wl(114,"td",17)(115,"code",22),Ux(116,"PoImageLoading"),ng()(),wl(117,"td",19),Ux(118,"-"),ng(),wl(119,"td",20)(120,"em")(121,"strong"),Ux(122,"(opcional)"),ng()(),wl(123,"p"),Ux(124,"Defini o carregamento que pode ser dos tipo:"),ng(),wl(125,"p"),Ux(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),ng(),wl(127,"blockquote")(128,"p"),Ux(129,"N\xE3o \xE9 permitido definir esta propriedade em conjunto com a propriedade "),wl(130,"code"),Ux(131,"p-priority"),ng(),Ux(132,"."),ng()()()(),wl(133,"tr",13)(134,"td",14)(135,"div",15)(136,"span",16),Ux(137," p-priority"),Ul(138,"br"),ng()()(),wl(139,"td",17)(140,"code",23),Ux(141,"boolean"),ng()(),wl(142,"td",19)(143,"p")(144,"code"),Ux(145,"false"),ng()()(),wl(146,"td",20)(147,"em")(148,"strong"),Ux(149,"(opcional)"),ng()(),wl(150,"p"),Ux(151,"Defini a prioridade de carregamento da imagem."),ng(),wl(152,"blockquote")(153,"p"),Ux(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),ng()(),wl(155,"pre")(156,"code"),Ux(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),ng()()()(),wl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),Ux(162," p-src"),Ul(163,"br"),ng()()(),wl(164,"td",17)(165,"code",18),Ux(166,"string"),ng()(),wl(167,"td",19),Ux(168,"-"),ng(),wl(169,"td",20)(170,"em")(171,"strong"),Ux(172,"(opcional)"),ng()(),wl(173,"p"),Ux(174,"Fonte da imagem que pode ser um caminho local ("),wl(175,"code"),Ux(176,"./assets/images/logo-black-small.png"),ng(),Ux(177,`)
ou um servidor externo (`),wl(178,"code"),Ux(179,"https://po-ui.io/assets/images/logo-black-small.png"),ng(),Ux(180,")."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var de=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Image",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-image-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-image-basic-view")(6,"sample-po-image-labs-view")(7,"sample-po-image-travel-view"),ng()()()),a&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ae,me,pe,se],encapsulation:2})}return n})();var Pe=[{path:"",component:de}],ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(Pe),vL]})}return n})();var ot=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,ce]})}return n})();
export{ot as DocPoImageModule};