import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Si as iu,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,it as Poe,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,sa as vo,ta as ue,ua as wK,ut as Rte,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var te=(()=>{class n{srcImage=`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`;static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-image-basic`]],standalone:!1,decls:1,vars:1,consts:[[`p-alt`,`teste de imagem`,`p-height`,`300`,3,`p-src`]],template:function(a,i){a&1&&nu(0,`po-image`,0),a&2&&jE(`p-src`,i.srcImage)},dependencies:[Poe],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-image-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Image Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-image-basic/sample-po-image-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-image-basic/sample-po-image-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-image-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ce,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{alt;height;src;ngOnInit(){this.restore()}restore(){this.alt=void 0,this.height=`auto`,this.src=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-image-labs`]],standalone:!1,decls:11,vars:6,consts:[[`f`,`ngForm`],[3,`p-src`,`p-alt`,`p-height`],[1,`po-row`],[`name`,`src`,`p-clean`,``,`p-label`,`Source`,`p-help`,`Enter a url or path of the image that will be displayed`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`alt`,`p-clean`,``,`p-label`,`Alternate`,`p-help`,`Alternative text for image description. Ex.: Po Ui logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let d=Sx();nu(0,`po-image`,1)(1,`po-divider`),jc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.src,l)||(i.src=l),v_(l)}),wg(),jc(6,`po-input`,4),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.alt,l)||(i.alt=l),v_(l)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.height,l)||(i.height=l),v_(l)}),wg()(),nu(8,`po-divider`),jc(9,`div`,2)(10,`po-button`,6),mt(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(jE(`p-src`,i.src)(`p-alt`,i.alt)(`p-height`,i.height),rg(5),ib(`ngModel`,i.src),t0(),rg(),ib(`ngModel`,i.alt),t0(),rg(),ib(`ngModel`,i.height),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,Poe],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-image-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Image Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-image-labs/sample-po-image-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-image-labs/sample-po-image-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-image-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,fe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ne],encapsulation:2,changeDetection:1})}return n})();var Ce=[`bookingForm`];var Se=[`datepicker`];var le=(()=>{class n{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];travelOptions=[{label:`Nova york`,value:`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`},{label:`Bélgica`,value:`https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`},{label:`Madrid`,value:`https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-image-travel`]],viewQuery:function(a,i){if(a&1&&iu(Ce,7)(Se,7),a&2){let d;vo(d=_o())&&(i.form=d.first),vo(d=_o())&&(i.datepickerComponent=d.first)}},standalone:!1,decls:17,vars:11,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[1,`po-md-3`],[`p-height`,`150`,3,`p-src`],[1,`po-md-9`],[`name`,`destinations`,`p-label`,`Destinos`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`]],template:function(a,i){if(a&1){let d=Sx();jc(0,`div`,2)(1,`div`,3),iO(2,`Choosing a trip`),wg()(),jc(3,`div`,4)(4,`div`,5),nu(5,`po-image`,6),wg(),jc(6,`div`,7)(7,`form`,null,0)(9,`div`,4)(10,`po-select`,8),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.destinations,l)||(i.destinations=l),v_(l)}),wg(),jc(11,`po-select`,9),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.children,l)||(i.children=l),v_(l)}),wg(),jc(12,`po-select`,10),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.adults,l)||(i.adults=l),v_(l)}),wg()(),jc(13,`div`,4)(14,`po-datepicker`,11,1),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.checkin,l)||(i.checkin=l),v_(l)}),wg(),jc(16,`po-datepicker`,12),JN(),ob(`ngModelChange`,function(l){return y_(d),sO(i.checkout,l)||(i.checkout=l),v_(l)}),wg()()()()()}a&2&&(rg(5),jE(`p-src`,i.destinations),rg(5),ib(`ngModel`,i.destinations),jE(`p-options`,i.travelOptions),t0(),rg(),ib(`ngModel`,i.children),jE(`p-options`,i.childrenOptions),t0(),rg(),ib(`ngModel`,i.adults),jE(`p-options`,i.adultsOptions),t0(),rg(2),ib(`ngModel`,i.checkin),jE(`p-max-date`,i.checkout),t0(),rg(2),ib(`ngModel`,i.checkout),jE(`p-min-date`,i.checkin),t0())},dependencies:[wK,CK,EK,TF,EF,Rte,moe,Poe],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-image-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Image Travel`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-image-travel/sample-po-image-travel.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-text-center">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-image-travel/sample-po-image-travel.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-image-travel`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ee,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,le],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-image-doc`]],standalone:!1,decls:181,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoImageLoading`],[`pan`,``,1,`docs-api-property-type`,`boolean`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoImageModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-image`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoImageComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`As imagens têm a função de traduzir visualmente ideias específicas ou mensagens complexas, mostrar um produto ou contar uma história, estabelecendo empatia e se conectando com os usuários.`),wg(),jc(15,`h4`),iO(16,`Boas Práticas`),wg(),jc(17,`p`),iO(18,`O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1. Também foram estruturadas padrões de usabilidade para auxiliar na utilização do componente e garantir uma boa experiência para os usuários. Por isso, é muito importante que, ao aplicar esse componente, o proprietário do conteúdo leve em consideração alguns critérios e práticas:`),wg(),jc(19,`h5`),iO(20,`Uso`),wg(),jc(21,`ul`)(22,`li`),iO(23,`Ao utilizar imagens, mantenha uma coerência entre elas no produto, de modo que compartilhem um mesmo estilo e intenção entre si.`),wg(),jc(24,`li`),iO(25,`Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca.`),wg(),jc(26,`li`),iO(27,`Ao utilizar fotografias, é recomendável o uso de proporções de aspecto padrão, como 1:1, 3:1, 3:2, 16:9.`),wg(),jc(28,`li`),iO(29,`Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportará em diferentes formatos. Isso também ajuda a transmitir a mensagem de forma objetiva e consistente.`),wg()(),jc(30,`h5`),iO(31,`Imagem como plano de fundo`),wg(),jc(32,`ul`)(33,`li`),iO(34,`Avalie se é realmente necessário o uso de imagem como plano de fundo e evite sempre que possível, pois pode ocasionar em um baixo contraste entre texto e imagem.`),wg(),jc(35,`li`),iO(36,`Caso utilize, redobre a atenção na escolha da imagem e certifique-se de que ela está adequada para a leitura do texto e não está sendo apenas um ruído.`),wg(),jc(37,`li`),iO(38,`Tenha especial atenção em telas menores. Embora seja possível posicionar o texto em uma área mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espaços, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualização da imagem.`),wg(),jc(39,`li`),iO(40,`Verifique a taxa de contraste do texto em relação ao fundo. Deve ser suficiente para atender aos padrões de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt.`),wg(),jc(41,`li`),iO(42,`Se não tiver controle sobre qual imagem será colocada por trás do texto, o recomendado é não utilizar nesse formato.`),wg()(),jc(43,`h4`),iO(44,`Acessibilidade tratada no componente`),wg(),jc(45,`p`),iO(46,`As boas práticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:`),wg(),jc(47,`ul`)(48,`li`),iO(49,`Imagem informativa simples, como por exemplo uma fotografia de um produto.`),wg(),jc(50,`li`),iO(51,`Imagem complexa, como um gráfico, infográfico ou diagrama.`),wg(),jc(52,`li`),iO(53,`Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas não é essencial para compreender a informação.`),wg()()(),jc(54,`div`,6)(55,`h4`,7),iO(56,`Seletor`),wg(),jc(57,`pre`,8),iO(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),wg()(),jc(59,`h4`,9),iO(60,`Propriedades`),wg(),jc(61,`table`,10)(62,`tr`,11)(63,`th`,12),iO(64,`Nome`),wg(),jc(65,`th`,12),iO(66,`Tipo`),wg(),jc(67,`th`,12),iO(68,`Padrão`),wg(),jc(69,`th`,12),iO(70,`Descrição`),wg()(),jc(71,`tr`,13)(72,`td`,14)(73,`div`,15)(74,`span`,16),iO(75,` p-alt`),nu(76,`br`),wg()()(),jc(77,`td`,17)(78,`code`,18),iO(79,`string`),wg()(),jc(80,`td`,19),iO(81,`-`),wg(),jc(82,`td`,20)(83,`em`)(84,`strong`),iO(85,`(opcional)`),wg()(),jc(86,`p`),iO(87,`Defini o texto alternativo descrevendo a imagem.`),wg()()(),jc(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),iO(92,` p-height`),nu(93,`br`),wg()()(),jc(94,`td`,17)(95,`code`,21),iO(96,`number`),wg()(),jc(97,`td`,19),iO(98,`-`),wg(),jc(99,`td`,20)(100,`em`)(101,`strong`),iO(102,`(opcional)`),wg()(),jc(103,`p`),iO(104,`Define a altura da imagem em `),jc(105,`em`),iO(106,`pixels`),wg(),iO(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),wg()()(),jc(108,`tr`,13)(109,`td`,14)(110,`div`,15)(111,`span`,16),iO(112,` p-loading`),nu(113,`br`),wg()()(),jc(114,`td`,17)(115,`code`,22),iO(116,`PoImageLoading`),wg()(),jc(117,`td`,19),iO(118,`-`),wg(),jc(119,`td`,20)(120,`em`)(121,`strong`),iO(122,`(opcional)`),wg()(),jc(123,`p`),iO(124,`Defini o carregamento que pode ser dos tipo:`),wg(),jc(125,`p`),iO(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),wg(),jc(127,`blockquote`)(128,`p`),iO(129,`Não é permitido definir esta propriedade em conjunto com a propriedade `),jc(130,`code`),iO(131,`p-priority`),wg(),iO(132,`.`),wg()()()(),jc(133,`tr`,13)(134,`td`,14)(135,`div`,15)(136,`span`,16),iO(137,` p-priority`),nu(138,`br`),wg()()(),jc(139,`td`,17)(140,`code`,23),iO(141,`boolean`),wg()(),jc(142,`td`,19)(143,`p`)(144,`code`),iO(145,`false`),wg()()(),jc(146,`td`,20)(147,`em`)(148,`strong`),iO(149,`(opcional)`),wg()(),jc(150,`p`),iO(151,`Defini a prioridade de carregamento da imagem.`),wg(),jc(152,`blockquote`)(153,`p`),iO(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),wg()(),jc(155,`pre`)(156,`code`),iO(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),wg()()()(),jc(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),iO(162,` p-src`),nu(163,`br`),wg()()(),jc(164,`td`,17)(165,`code`,18),iO(166,`string`),wg()(),jc(167,`td`,19),iO(168,`-`),wg(),jc(169,`td`,20)(170,`em`)(171,`strong`),iO(172,`(opcional)`),wg()(),jc(173,`p`),iO(174,`Fonte da imagem que pode ser um caminho local (`),jc(175,`code`),iO(176,`./assets/images/logo-black-small.png`),wg(),iO(177,`)
ou um servidor externo (`),jc(178,`code`),iO(179,`https://po-ui.io/assets/images/logo-black-small.png`),wg(),iO(180,`).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var we=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Image`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-image-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-image-basic-view`)(6,`sample-po-image-labs-view`)(7,`sample-po-image-travel-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ie,ae,me,pe],encapsulation:2,changeDetection:1})}return n})()}];var se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[C1.forChild(we),C1]})}return n})();var Qe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[Ta,se]})}return n})();export{Qe as DocPoImageModule};