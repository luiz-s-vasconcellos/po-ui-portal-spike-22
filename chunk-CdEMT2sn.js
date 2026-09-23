import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,Nt as Y0e,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,_t as Rbe,ar as IY,bi as cw,br as NL,bt as Tbe,cn as lU,da as uo,ea as p0,ga as w,l as ar,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var te=(()=>{class i{srcImage=`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`;static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-basic`]],standalone:!1,decls:1,vars:1,consts:[[`p-alt`,`teste de imagem`,`p-height`,`300`,3,`p-src`]],template:function(a,n){a&1&&ql(0,`po-image`,0),a&2&&cw(`p-src`,n.srcImage)},dependencies:[Rbe],encapsulation:2,changeDetection:1})}return i})();var ce=i=>({"docs-sample-code-tabs":i});var ne=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Image Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-image-basic/sample-po-image-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-image-basic/sample-po-image-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-image-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ce,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,te],encapsulation:2,changeDetection:1})}return i})();var ie=(()=>{class i{alt;height;src;ngOnInit(){this.restore()}restore(){this.alt=void 0,this.height=`auto`,this.src=void 0}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-labs`]],standalone:!1,decls:11,vars:6,consts:[[`f`,`ngForm`],[3,`p-src`,`p-alt`,`p-height`],[1,`po-row`],[`name`,`src`,`p-clean`,``,`p-label`,`Source`,`p-help`,`Enter a url or path of the image that will be displayed`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`alt`,`p-clean`,``,`p-label`,`Alternate`,`p-help`,`Alternative text for image description. Ex.: Po Ui logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let d=Vx();ql(0,`po-image`,1)(1,`po-divider`),Ml(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.src,l)||(n.src=l),Jy(l)}),lg(),f0(),Ml(6,`po-input`,4),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.alt,l)||(n.alt=l),Jy(l)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.height,l)||(n.height=l),Jy(l)}),lg(),f0(),lg(),ql(8,`po-divider`),Ml(9,`div`,2)(10,`po-button`,6),ht(`p-click`,function(){return n.restore()}),lg()()()}a&2&&(cw(`p-src`,n.src)(`p-alt`,n.alt)(`p-height`,n.height),Up(5),Tw(`ngModel`,n.src),p0(),Up(),Tw(`ngModel`,n.alt),p0(),Up(),Tw(`ngModel`,n.height),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,Rbe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i});var ae=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Image Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-image-labs/sample-po-image-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-image-labs/sample-po-image-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-image-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,fe,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ie],encapsulation:2,changeDetection:1})}return i})();var Ce=[`bookingForm`];var Se=[`datepicker`];var le=(()=>{class i{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];travelOptions=[{label:`Nova york`,value:`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`},{label:`Bélgica`,value:`https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`},{label:`Madrid`,value:`https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-travel`]],viewQuery:function(a,n){if(a&1&&Zl(Ce,7)(Se,7),a&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:17,vars:11,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[1,`po-md-3`],[`p-height`,`150`,3,`p-src`],[1,`po-md-9`],[`name`,`destinations`,`p-label`,`Destinos`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`]],template:function(a,n){if(a&1){let d=Vx();Ml(0,`div`,2)(1,`div`,3),mN(2,`Choosing a trip`),lg()(),Ml(3,`div`,4)(4,`div`,5),ql(5,`po-image`,6),lg(),Ml(6,`div`,7)(7,`form`,null,0)(9,`div`,4)(10,`po-select`,8),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.destinations,l)||(n.destinations=l),Jy(l)}),lg(),f0(),Ml(11,`po-select`,9),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.children,l)||(n.children=l),Jy(l)}),lg(),f0(),Ml(12,`po-select`,10),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.adults,l)||(n.adults=l),Jy(l)}),lg(),f0(),lg(),Ml(13,`div`,4)(14,`po-datepicker`,11,1),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.checkin,l)||(n.checkin=l),Jy(l)}),lg(),f0(),Ml(16,`po-datepicker`,12),Mw(`ngModelChange`,function(l){return Qy(d),yN(n.checkout,l)||(n.checkout=l),Jy(l)}),lg(),f0(),lg()()()()}a&2&&(Up(5),cw(`p-src`,n.destinations),Up(5),Tw(`ngModel`,n.destinations),cw(`p-options`,n.travelOptions),p0(),Up(),Tw(`ngModel`,n.children),cw(`p-options`,n.childrenOptions),p0(),Up(),Tw(`ngModel`,n.adults),cw(`p-options`,n.adultsOptions),p0(),Up(2),Tw(`ngModel`,n.checkin),cw(`p-max-date`,n.checkout),p0(),Up(2),Tw(`ngModel`,n.checkout),cw(`p-min-date`,n.checkin),p0())},dependencies:[IY,wY,CY,Vk,kk,Y0e,Tbe,Rbe],encapsulation:2,changeDetection:1})}return i})();var Ee=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Image Travel`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-image-travel/sample-po-image-travel.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-text-center">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-image-travel/sample-po-image-travel.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-image-travel`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ee,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-doc`]],standalone:!1,decls:181,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoImageLoading`],[`pan`,``,1,`docs-api-property-type`,`boolean`]],template:function(a,n){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoImageModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-image`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoImageComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`As imagens têm a função de traduzir visualmente ideias específicas ou mensagens complexas, mostrar um produto ou contar uma história, estabelecendo empatia e se conectando com os usuários.`),lg(),Ml(15,`h4`),mN(16,`Boas Práticas`),lg(),Ml(17,`p`),mN(18,`O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1. Também foram estruturadas padrões de usabilidade para auxiliar na utilização do componente e garantir uma boa experiência para os usuários. Por isso, é muito importante que, ao aplicar esse componente, o proprietário do conteúdo leve em consideração alguns critérios e práticas:`),lg(),Ml(19,`h5`),mN(20,`Uso`),lg(),Ml(21,`ul`)(22,`li`),mN(23,`Ao utilizar imagens, mantenha uma coerência entre elas no produto, de modo que compartilhem um mesmo estilo e intenção entre si.`),lg(),Ml(24,`li`),mN(25,`Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca.`),lg(),Ml(26,`li`),mN(27,`Ao utilizar fotografias, é recomendável o uso de proporções de aspecto padrão, como 1:1, 3:1, 3:2, 16:9.`),lg(),Ml(28,`li`),mN(29,`Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportará em diferentes formatos. Isso também ajuda a transmitir a mensagem de forma objetiva e consistente.`),lg()(),Ml(30,`h5`),mN(31,`Imagem como plano de fundo`),lg(),Ml(32,`ul`)(33,`li`),mN(34,`Avalie se é realmente necessário o uso de imagem como plano de fundo e evite sempre que possível, pois pode ocasionar em um baixo contraste entre texto e imagem.`),lg(),Ml(35,`li`),mN(36,`Caso utilize, redobre a atenção na escolha da imagem e certifique-se de que ela está adequada para a leitura do texto e não está sendo apenas um ruído.`),lg(),Ml(37,`li`),mN(38,`Tenha especial atenção em telas menores. Embora seja possível posicionar o texto em uma área mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espaços, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualização da imagem.`),lg(),Ml(39,`li`),mN(40,`Verifique a taxa de contraste do texto em relação ao fundo. Deve ser suficiente para atender aos padrões de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt.`),lg(),Ml(41,`li`),mN(42,`Se não tiver controle sobre qual imagem será colocada por trás do texto, o recomendado é não utilizar nesse formato.`),lg()(),Ml(43,`h4`),mN(44,`Acessibilidade tratada no componente`),lg(),Ml(45,`p`),mN(46,`As boas práticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:`),lg(),Ml(47,`ul`)(48,`li`),mN(49,`Imagem informativa simples, como por exemplo uma fotografia de um produto.`),lg(),Ml(50,`li`),mN(51,`Imagem complexa, como um gráfico, infográfico ou diagrama.`),lg(),Ml(52,`li`),mN(53,`Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas não é essencial para compreender a informação.`),lg()()(),Ml(54,`div`,6)(55,`h4`,7),mN(56,`Seletor`),lg(),Ml(57,`pre`,8),mN(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),lg()(),Ml(59,`h4`,9),mN(60,`Propriedades`),lg(),Ml(61,`table`,10)(62,`tr`,11)(63,`th`,12),mN(64,`Nome`),lg(),Ml(65,`th`,12),mN(66,`Tipo`),lg(),Ml(67,`th`,12),mN(68,`Padrão`),lg(),Ml(69,`th`,12),mN(70,`Descrição`),lg()(),Ml(71,`tr`,13)(72,`td`,14)(73,`div`,15)(74,`span`,16),mN(75,` p-alt`),ql(76,`br`),lg()()(),Ml(77,`td`,17)(78,`code`,18),mN(79,`string`),lg()(),Ml(80,`td`,19),mN(81,`-`),lg(),Ml(82,`td`,20)(83,`em`)(84,`strong`),mN(85,`(opcional)`),lg()(),Ml(86,`p`),mN(87,`Defini o texto alternativo descrevendo a imagem.`),lg()()(),Ml(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),mN(92,` p-height`),ql(93,`br`),lg()()(),Ml(94,`td`,17)(95,`code`,21),mN(96,`number`),lg()(),Ml(97,`td`,19),mN(98,`-`),lg(),Ml(99,`td`,20)(100,`em`)(101,`strong`),mN(102,`(opcional)`),lg()(),Ml(103,`p`),mN(104,`Define a altura da imagem em `),Ml(105,`em`),mN(106,`pixels`),lg(),mN(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),lg()()(),Ml(108,`tr`,13)(109,`td`,14)(110,`div`,15)(111,`span`,16),mN(112,` p-loading`),ql(113,`br`),lg()()(),Ml(114,`td`,17)(115,`code`,22),mN(116,`PoImageLoading`),lg()(),Ml(117,`td`,19),mN(118,`-`),lg(),Ml(119,`td`,20)(120,`em`)(121,`strong`),mN(122,`(opcional)`),lg()(),Ml(123,`p`),mN(124,`Defini o carregamento que pode ser dos tipo:`),lg(),Ml(125,`p`),mN(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),lg(),Ml(127,`blockquote`)(128,`p`),mN(129,`Não é permitido definir esta propriedade em conjunto com a propriedade `),Ml(130,`code`),mN(131,`p-priority`),lg(),mN(132,`.`),lg()()()(),Ml(133,`tr`,13)(134,`td`,14)(135,`div`,15)(136,`span`,16),mN(137,` p-priority`),ql(138,`br`),lg()()(),Ml(139,`td`,17)(140,`code`,23),mN(141,`boolean`),lg()(),Ml(142,`td`,19)(143,`p`)(144,`code`),mN(145,`false`),lg()()(),Ml(146,`td`,20)(147,`em`)(148,`strong`),mN(149,`(opcional)`),lg()(),Ml(150,`p`),mN(151,`Defini a prioridade de carregamento da imagem.`),lg(),Ml(152,`blockquote`)(153,`p`),mN(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),lg()(),Ml(155,`pre`)(156,`code`),mN(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),lg()()()(),Ml(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),mN(162,` p-src`),ql(163,`br`),lg()()(),Ml(164,`td`,17)(165,`code`,18),mN(166,`string`),lg()(),Ml(167,`td`,19),mN(168,`-`),lg(),Ml(169,`td`,20)(170,`em`)(171,`strong`),mN(172,`(opcional)`),lg()(),Ml(173,`p`),mN(174,`Fonte da imagem que pode ser um caminho local (`),Ml(175,`code`),mN(176,`./assets/images/logo-black-small.png`),lg(),mN(177,`)
ou um servidor externo (`),Ml(178,`code`),mN(179,`https://po-ui.io/assets/images/logo-black-small.png`),lg(),mN(180,`).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var we=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Image`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-image-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-image-basic-view`)(6,`sample-po-image-labs-view`)(7,`sample-po-image-travel-view`),lg()()()),a&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ne,ae,me,pe],encapsulation:2,changeDetection:1})}return i})()}];var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[NL.forChild(we),NL]})}return i})();var Qe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,se]})}return i})();export{Qe as DocPoImageModule};