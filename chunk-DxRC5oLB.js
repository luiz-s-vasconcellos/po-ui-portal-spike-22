import{Br as RE,Di as he,Dt as aae,Hn as AN,Kn as BP,Li as kL,Qi as pt,Rr as Qn,Rt as foe,Sa as zO,Sr as Kc,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Wi as mg,Wt as ioe,Xn as C9,Yn as Bx,ai as aN,dr as Hp,dt as Tte,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ki as ho,la as ug,li as cE,lr as Hn,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,vr as Jv,wt as _4,xi as fo}from"./main-TFA52GHY.js";var te=(()=>{class i{srcImage=`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`;static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-image-basic`]],standalone:!1,decls:1,vars:1,consts:[[`p-alt`,`teste de imagem`,`p-height`,`300`,3,`p-src`]],template:function(a,n){a&1&&Kc(0,`po-image`,0),a&2&&cE(`p-src`,n.srcImage)},dependencies:[foe],encapsulation:2,changeDetection:1})}return i})();var ce=i=>({"docs-sample-code-tabs":i});var ne=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-image-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Image Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-image-basic/sample-po-image-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-image-basic/sample-po-image-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-image-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ce,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,te],encapsulation:2,changeDetection:1})}return i})();var ie=(()=>{class i{alt;height;src;ngOnInit(){this.restore()}restore(){this.alt=void 0,this.height=`auto`,this.src=void 0}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-image-labs`]],standalone:!1,decls:11,vars:6,consts:[[`f`,`ngForm`],[3,`p-src`,`p-alt`,`p-height`],[1,`po-row`],[`name`,`src`,`p-clean`,``,`p-label`,`Source`,`p-help`,`Enter a url or path of the image that will be displayed`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`alt`,`p-clean`,``,`p-label`,`Alternate`,`p-help`,`Alternative text for image description. Ex.: Po Ui logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let d=Bx();Kc(0,`po-image`,1)(1,`po-divider`),Ac(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),RE(`ngModelChange`,function(l){return Jv(d),DN(n.src,l)||(n.src=l),e_(l)}),ug(),p0(),Ac(6,`po-input`,4),RE(`ngModelChange`,function(l){return Jv(d),DN(n.alt,l)||(n.alt=l),e_(l)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(d),DN(n.height,l)||(n.height=l),e_(l)}),ug(),p0(),ug(),Kc(8,`po-divider`),Ac(9,`div`,2)(10,`po-button`,6),pt(`p-click`,function(){return n.restore()}),ug()()()}a&2&&(cE(`p-src`,n.src)(`p-alt`,n.alt)(`p-height`,n.height),Hp(5),TE(`ngModel`,n.src),m0(),Hp(),TE(`ngModel`,n.alt),m0(),Hp(),TE(`ngModel`,n.height),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,_4,foe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i});var ae=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-image-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Image Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-image-labs/sample-po-image-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-image-labs/sample-po-image-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-image-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,fe,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ie],encapsulation:2,changeDetection:1})}return i})();var Ce=[`bookingForm`];var Se=[`datepicker`];var le=(()=>{class i{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];travelOptions=[{label:`Nova york`,value:`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`},{label:`Bélgica`,value:`https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`},{label:`Madrid`,value:`https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-image-travel`]],viewQuery:function(a,n){if(a&1&&Xc(Ce,7)(Se,7),a&2){let d;fo(d=ho())&&(n.form=d.first),fo(d=ho())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:17,vars:11,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[1,`po-md-3`],[`p-height`,`150`,3,`p-src`],[1,`po-md-9`],[`name`,`destinations`,`p-label`,`Destinos`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`]],template:function(a,n){if(a&1){let d=Bx();Ac(0,`div`,2)(1,`div`,3),vN(2,`Choosing a trip`),ug()(),Ac(3,`div`,4)(4,`div`,5),Kc(5,`po-image`,6),ug(),Ac(6,`div`,7)(7,`form`,null,0)(9,`div`,4)(10,`po-select`,8),RE(`ngModelChange`,function(l){return Jv(d),DN(n.destinations,l)||(n.destinations=l),e_(l)}),ug(),p0(),Ac(11,`po-select`,9),RE(`ngModelChange`,function(l){return Jv(d),DN(n.children,l)||(n.children=l),e_(l)}),ug(),p0(),Ac(12,`po-select`,10),RE(`ngModelChange`,function(l){return Jv(d),DN(n.adults,l)||(n.adults=l),e_(l)}),ug(),p0(),ug(),Ac(13,`div`,4)(14,`po-datepicker`,11,1),RE(`ngModelChange`,function(l){return Jv(d),DN(n.checkin,l)||(n.checkin=l),e_(l)}),ug(),p0(),Ac(16,`po-datepicker`,12),RE(`ngModelChange`,function(l){return Jv(d),DN(n.checkout,l)||(n.checkout=l),e_(l)}),ug(),p0(),ug()()()()}a&2&&(Hp(5),cE(`p-src`,n.destinations),Hp(5),TE(`ngModel`,n.destinations),cE(`p-options`,n.travelOptions),m0(),Hp(),TE(`ngModel`,n.children),cE(`p-options`,n.childrenOptions),m0(),Hp(),TE(`ngModel`,n.adults),cE(`p-options`,n.adultsOptions),m0(),Hp(2),TE(`ngModel`,n.checkin),cE(`p-max-date`,n.checkout),m0(),Hp(2),TE(`ngModel`,n.checkout),cE(`p-min-date`,n.checkin),m0())},dependencies:[b9,D9,C9,BP,LP,Tte,ioe,foe],encapsulation:2,changeDetection:1})}return i})();var Ee=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-image-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Image Travel`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-image-travel/sample-po-image-travel.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-text-center">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-image-travel/sample-po-image-travel.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-image-travel`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ee,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-image-doc`]],standalone:!1,decls:181,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoImageLoading`],[`pan`,``,1,`docs-api-property-type`,`boolean`]],template:function(a,n){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoImageModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-image`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoImageComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`As imagens têm a função de traduzir visualmente ideias específicas ou mensagens complexas, mostrar um produto ou contar uma história, estabelecendo empatia e se conectando com os usuários.`),ug(),Ac(15,`h4`),vN(16,`Boas Práticas`),ug(),Ac(17,`p`),vN(18,`O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1. Também foram estruturadas padrões de usabilidade para auxiliar na utilização do componente e garantir uma boa experiência para os usuários. Por isso, é muito importante que, ao aplicar esse componente, o proprietário do conteúdo leve em consideração alguns critérios e práticas:`),ug(),Ac(19,`h5`),vN(20,`Uso`),ug(),Ac(21,`ul`)(22,`li`),vN(23,`Ao utilizar imagens, mantenha uma coerência entre elas no produto, de modo que compartilhem um mesmo estilo e intenção entre si.`),ug(),Ac(24,`li`),vN(25,`Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca.`),ug(),Ac(26,`li`),vN(27,`Ao utilizar fotografias, é recomendável o uso de proporções de aspecto padrão, como 1:1, 3:1, 3:2, 16:9.`),ug(),Ac(28,`li`),vN(29,`Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportará em diferentes formatos. Isso também ajuda a transmitir a mensagem de forma objetiva e consistente.`),ug()(),Ac(30,`h5`),vN(31,`Imagem como plano de fundo`),ug(),Ac(32,`ul`)(33,`li`),vN(34,`Avalie se é realmente necessário o uso de imagem como plano de fundo e evite sempre que possível, pois pode ocasionar em um baixo contraste entre texto e imagem.`),ug(),Ac(35,`li`),vN(36,`Caso utilize, redobre a atenção na escolha da imagem e certifique-se de que ela está adequada para a leitura do texto e não está sendo apenas um ruído.`),ug(),Ac(37,`li`),vN(38,`Tenha especial atenção em telas menores. Embora seja possível posicionar o texto em uma área mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espaços, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualização da imagem.`),ug(),Ac(39,`li`),vN(40,`Verifique a taxa de contraste do texto em relação ao fundo. Deve ser suficiente para atender aos padrões de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt.`),ug(),Ac(41,`li`),vN(42,`Se não tiver controle sobre qual imagem será colocada por trás do texto, o recomendado é não utilizar nesse formato.`),ug()(),Ac(43,`h4`),vN(44,`Acessibilidade tratada no componente`),ug(),Ac(45,`p`),vN(46,`As boas práticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:`),ug(),Ac(47,`ul`)(48,`li`),vN(49,`Imagem informativa simples, como por exemplo uma fotografia de um produto.`),ug(),Ac(50,`li`),vN(51,`Imagem complexa, como um gráfico, infográfico ou diagrama.`),ug(),Ac(52,`li`),vN(53,`Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas não é essencial para compreender a informação.`),ug()()(),Ac(54,`div`,6)(55,`h4`,7),vN(56,`Seletor`),ug(),Ac(57,`pre`,8),vN(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),ug()(),Ac(59,`h4`,9),vN(60,`Propriedades`),ug(),Ac(61,`table`,10)(62,`tr`,11)(63,`th`,12),vN(64,`Nome`),ug(),Ac(65,`th`,12),vN(66,`Tipo`),ug(),Ac(67,`th`,12),vN(68,`Padrão`),ug(),Ac(69,`th`,12),vN(70,`Descrição`),ug()(),Ac(71,`tr`,13)(72,`td`,14)(73,`div`,15)(74,`span`,16),vN(75,` p-alt`),Kc(76,`br`),ug()()(),Ac(77,`td`,17)(78,`code`,18),vN(79,`string`),ug()(),Ac(80,`td`,19),vN(81,`-`),ug(),Ac(82,`td`,20)(83,`em`)(84,`strong`),vN(85,`(opcional)`),ug()(),Ac(86,`p`),vN(87,`Defini o texto alternativo descrevendo a imagem.`),ug()()(),Ac(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),vN(92,` p-height`),Kc(93,`br`),ug()()(),Ac(94,`td`,17)(95,`code`,21),vN(96,`number`),ug()(),Ac(97,`td`,19),vN(98,`-`),ug(),Ac(99,`td`,20)(100,`em`)(101,`strong`),vN(102,`(opcional)`),ug()(),Ac(103,`p`),vN(104,`Define a altura da imagem em `),Ac(105,`em`),vN(106,`pixels`),ug(),vN(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),ug()()(),Ac(108,`tr`,13)(109,`td`,14)(110,`div`,15)(111,`span`,16),vN(112,` p-loading`),Kc(113,`br`),ug()()(),Ac(114,`td`,17)(115,`code`,22),vN(116,`PoImageLoading`),ug()(),Ac(117,`td`,19),vN(118,`-`),ug(),Ac(119,`td`,20)(120,`em`)(121,`strong`),vN(122,`(opcional)`),ug()(),Ac(123,`p`),vN(124,`Defini o carregamento que pode ser dos tipo:`),ug(),Ac(125,`p`),vN(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),ug(),Ac(127,`blockquote`)(128,`p`),vN(129,`Não é permitido definir esta propriedade em conjunto com a propriedade `),Ac(130,`code`),vN(131,`p-priority`),ug(),vN(132,`.`),ug()()()(),Ac(133,`tr`,13)(134,`td`,14)(135,`div`,15)(136,`span`,16),vN(137,` p-priority`),Kc(138,`br`),ug()()(),Ac(139,`td`,17)(140,`code`,23),vN(141,`boolean`),ug()(),Ac(142,`td`,19)(143,`p`)(144,`code`),vN(145,`false`),ug()()(),Ac(146,`td`,20)(147,`em`)(148,`strong`),vN(149,`(opcional)`),ug()(),Ac(150,`p`),vN(151,`Defini a prioridade de carregamento da imagem.`),ug(),Ac(152,`blockquote`)(153,`p`),vN(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),ug()(),Ac(155,`pre`)(156,`code`),vN(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),ug()()()(),Ac(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),vN(162,` p-src`),Kc(163,`br`),ug()()(),Ac(164,`td`,17)(165,`code`,18),vN(166,`string`),ug()(),Ac(167,`td`,19),vN(168,`-`),ug(),Ac(169,`td`,20)(170,`em`)(171,`strong`),vN(172,`(opcional)`),ug()(),Ac(173,`p`),vN(174,`Fonte da imagem que pode ser um caminho local (`),Ac(175,`code`),vN(176,`./assets/images/logo-black-small.png`),ug(),vN(177,`)
ou um servidor externo (`),Ac(178,`code`),vN(179,`https://po-ui.io/assets/images/logo-black-small.png`),ug(),vN(180,`).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var we=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Image`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-image-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-image-basic-view`)(6,`sample-po-image-labs-view`)(7,`sample-po-image-travel-view`),ug()()()),a&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[vze,tae,aae,ne,ae,me,pe],encapsulation:2,changeDetection:1})}return i})()}];var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[kL.forChild(we),kL]})}return i})();var Qe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[Ta,se]})}return i})();export{Qe as DocPoImageModule};