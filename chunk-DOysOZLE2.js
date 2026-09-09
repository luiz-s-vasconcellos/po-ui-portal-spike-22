import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Li as ht,Ni as gY,Nn as z0e,Nr as PO,O as Ebe,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ei as Yl,fi as ag,gi as bL,ha as ww,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var te=(()=>{class i{srcImage=`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`;static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-basic`]],standalone:!1,decls:1,vars:1,consts:[[`p-alt`,`teste de imagem`,`p-height`,`300`,3,`p-src`]],template:function(a,n){a&1&&Gl(0,`po-image`,0),a&2&&nw(`p-src`,n.srcImage)},dependencies:[Ebe],encapsulation:2,changeDetection:1})}return i})();var ce=i=>({"docs-sample-code-tabs":i});var ne=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Image Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-image-basic/sample-po-image-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-image-basic/sample-po-image-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-image-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ce,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,te],encapsulation:2,changeDetection:1})}return i})();var ie=(()=>{class i{alt;height;src;ngOnInit(){this.restore()}restore(){this.alt=void 0,this.height=`auto`,this.src=void 0}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-labs`]],standalone:!1,decls:11,vars:6,consts:[[`f`,`ngForm`],[3,`p-src`,`p-alt`,`p-height`],[1,`po-row`],[`name`,`src`,`p-clean`,``,`p-label`,`Source`,`p-help`,`Enter a url or path of the image that will be displayed`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`alt`,`p-clean`,``,`p-label`,`Alternate`,`p-help`,`Alternative text for image description. Ex.: Po Ui logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let d=Ax();Gl(0,`po-image`,1)(1,`po-divider`),Tl(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),ww(`ngModelChange`,function(l){return Ky(d),uN(n.src,l)||(n.src=l),Xy(l)}),ag(),a0(),Tl(6,`po-input`,4),ww(`ngModelChange`,function(l){return Ky(d),uN(n.alt,l)||(n.alt=l),Xy(l)}),ag(),a0(),Tl(7,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(d),uN(n.height,l)||(n.height=l),Xy(l)}),ag(),a0(),ag(),Gl(8,`po-divider`),Tl(9,`div`,2)(10,`po-button`,6),ht(`p-click`,function(){return n.restore()}),ag()()()}a&2&&(nw(`p-src`,n.src)(`p-alt`,n.alt)(`p-height`,n.height),jp(5),Ew(`ngModel`,n.src),l0(),jp(),Ew(`ngModel`,n.alt),l0(),jp(),Ew(`ngModel`,n.height),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,Ebe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i});var ae=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Image Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-image-labs/sample-po-image-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-image-labs/sample-po-image-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-image-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,fe,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ie],encapsulation:2,changeDetection:1})}return i})();var Ce=[`bookingForm`];var Se=[`datepicker`];var le=(()=>{class i{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];travelOptions=[{label:`Nova york`,value:`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`},{label:`Bélgica`,value:`https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`},{label:`Madrid`,value:`https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-travel`]],viewQuery:function(a,n){if(a&1&&Yl(Ce,7)(Se,7),a&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:17,vars:11,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[1,`po-md-3`],[`p-height`,`150`,3,`p-src`],[1,`po-md-9`],[`name`,`destinations`,`p-label`,`Destinos`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`]],template:function(a,n){if(a&1){let d=Ax();Tl(0,`div`,2)(1,`div`,3),cN(2,`Choosing a trip`),ag()(),Tl(3,`div`,4)(4,`div`,5),Gl(5,`po-image`,6),ag(),Tl(6,`div`,7)(7,`form`,null,0)(9,`div`,4)(10,`po-select`,8),ww(`ngModelChange`,function(l){return Ky(d),uN(n.destinations,l)||(n.destinations=l),Xy(l)}),ag(),a0(),Tl(11,`po-select`,9),ww(`ngModelChange`,function(l){return Ky(d),uN(n.children,l)||(n.children=l),Xy(l)}),ag(),a0(),Tl(12,`po-select`,10),ww(`ngModelChange`,function(l){return Ky(d),uN(n.adults,l)||(n.adults=l),Xy(l)}),ag(),a0(),ag(),Tl(13,`div`,4)(14,`po-datepicker`,11,1),ww(`ngModelChange`,function(l){return Ky(d),uN(n.checkin,l)||(n.checkin=l),Xy(l)}),ag(),a0(),Tl(16,`po-datepicker`,12),ww(`ngModelChange`,function(l){return Ky(d),uN(n.checkout,l)||(n.checkout=l),Xy(l)}),ag(),a0(),ag()()()()}a&2&&(jp(5),nw(`p-src`,n.destinations),jp(5),Ew(`ngModel`,n.destinations),nw(`p-options`,n.travelOptions),l0(),jp(),Ew(`ngModel`,n.children),nw(`p-options`,n.childrenOptions),l0(),jp(),Ew(`ngModel`,n.adults),nw(`p-options`,n.adultsOptions),l0(),jp(2),Ew(`ngModel`,n.checkin),nw(`p-max-date`,n.checkout),l0(),jp(2),Ew(`ngModel`,n.checkout),nw(`p-min-date`,n.checkin),l0())},dependencies:[yY,gY,mY,Ak,Tk,z0e,fbe,Ebe],encapsulation:2,changeDetection:1})}return i})();var Ee=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Image Travel`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-image-travel/sample-po-image-travel.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-text-center">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-image-travel/sample-po-image-travel.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-image-travel`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ee,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-image-doc`]],standalone:!1,decls:181,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoImageLoading`],[`pan`,``,1,`docs-api-property-type`,`boolean`]],template:function(a,n){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoImageModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-image`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoImageComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`As imagens têm a função de traduzir visualmente ideias específicas ou mensagens complexas, mostrar um produto ou contar uma história, estabelecendo empatia e se conectando com os usuários.`),ag(),Tl(15,`h4`),cN(16,`Boas Práticas`),ag(),Tl(17,`p`),cN(18,`O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1. Também foram estruturadas padrões de usabilidade para auxiliar na utilização do componente e garantir uma boa experiência para os usuários. Por isso, é muito importante que, ao aplicar esse componente, o proprietário do conteúdo leve em consideração alguns critérios e práticas:`),ag(),Tl(19,`h5`),cN(20,`Uso`),ag(),Tl(21,`ul`)(22,`li`),cN(23,`Ao utilizar imagens, mantenha uma coerência entre elas no produto, de modo que compartilhem um mesmo estilo e intenção entre si.`),ag(),Tl(24,`li`),cN(25,`Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca.`),ag(),Tl(26,`li`),cN(27,`Ao utilizar fotografias, é recomendável o uso de proporções de aspecto padrão, como 1:1, 3:1, 3:2, 16:9.`),ag(),Tl(28,`li`),cN(29,`Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportará em diferentes formatos. Isso também ajuda a transmitir a mensagem de forma objetiva e consistente.`),ag()(),Tl(30,`h5`),cN(31,`Imagem como plano de fundo`),ag(),Tl(32,`ul`)(33,`li`),cN(34,`Avalie se é realmente necessário o uso de imagem como plano de fundo e evite sempre que possível, pois pode ocasionar em um baixo contraste entre texto e imagem.`),ag(),Tl(35,`li`),cN(36,`Caso utilize, redobre a atenção na escolha da imagem e certifique-se de que ela está adequada para a leitura do texto e não está sendo apenas um ruído.`),ag(),Tl(37,`li`),cN(38,`Tenha especial atenção em telas menores. Embora seja possível posicionar o texto em uma área mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espaços, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualização da imagem.`),ag(),Tl(39,`li`),cN(40,`Verifique a taxa de contraste do texto em relação ao fundo. Deve ser suficiente para atender aos padrões de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt.`),ag(),Tl(41,`li`),cN(42,`Se não tiver controle sobre qual imagem será colocada por trás do texto, o recomendado é não utilizar nesse formato.`),ag()(),Tl(43,`h4`),cN(44,`Acessibilidade tratada no componente`),ag(),Tl(45,`p`),cN(46,`As boas práticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:`),ag(),Tl(47,`ul`)(48,`li`),cN(49,`Imagem informativa simples, como por exemplo uma fotografia de um produto.`),ag(),Tl(50,`li`),cN(51,`Imagem complexa, como um gráfico, infográfico ou diagrama.`),ag(),Tl(52,`li`),cN(53,`Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas não é essencial para compreender a informação.`),ag()()(),Tl(54,`div`,6)(55,`h4`,7),cN(56,`Seletor`),ag(),Tl(57,`pre`,8),cN(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),ag()(),Tl(59,`h4`,9),cN(60,`Propriedades`),ag(),Tl(61,`table`,10)(62,`tr`,11)(63,`th`,12),cN(64,`Nome`),ag(),Tl(65,`th`,12),cN(66,`Tipo`),ag(),Tl(67,`th`,12),cN(68,`Padrão`),ag(),Tl(69,`th`,12),cN(70,`Descrição`),ag()(),Tl(71,`tr`,13)(72,`td`,14)(73,`div`,15)(74,`span`,16),cN(75,` p-alt`),Gl(76,`br`),ag()()(),Tl(77,`td`,17)(78,`code`,18),cN(79,`string`),ag()(),Tl(80,`td`,19),cN(81,`-`),ag(),Tl(82,`td`,20)(83,`em`)(84,`strong`),cN(85,`(opcional)`),ag()(),Tl(86,`p`),cN(87,`Defini o texto alternativo descrevendo a imagem.`),ag()()(),Tl(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),cN(92,` p-height`),Gl(93,`br`),ag()()(),Tl(94,`td`,17)(95,`code`,21),cN(96,`number`),ag()(),Tl(97,`td`,19),cN(98,`-`),ag(),Tl(99,`td`,20)(100,`em`)(101,`strong`),cN(102,`(opcional)`),ag()(),Tl(103,`p`),cN(104,`Define a altura da imagem em `),Tl(105,`em`),cN(106,`pixels`),ag(),cN(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),ag()()(),Tl(108,`tr`,13)(109,`td`,14)(110,`div`,15)(111,`span`,16),cN(112,` p-loading`),Gl(113,`br`),ag()()(),Tl(114,`td`,17)(115,`code`,22),cN(116,`PoImageLoading`),ag()(),Tl(117,`td`,19),cN(118,`-`),ag(),Tl(119,`td`,20)(120,`em`)(121,`strong`),cN(122,`(opcional)`),ag()(),Tl(123,`p`),cN(124,`Defini o carregamento que pode ser dos tipo:`),ag(),Tl(125,`p`),cN(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),ag(),Tl(127,`blockquote`)(128,`p`),cN(129,`Não é permitido definir esta propriedade em conjunto com a propriedade `),Tl(130,`code`),cN(131,`p-priority`),ag(),cN(132,`.`),ag()()()(),Tl(133,`tr`,13)(134,`td`,14)(135,`div`,15)(136,`span`,16),cN(137,` p-priority`),Gl(138,`br`),ag()()(),Tl(139,`td`,17)(140,`code`,23),cN(141,`boolean`),ag()(),Tl(142,`td`,19)(143,`p`)(144,`code`),cN(145,`false`),ag()()(),Tl(146,`td`,20)(147,`em`)(148,`strong`),cN(149,`(opcional)`),ag()(),Tl(150,`p`),cN(151,`Defini a prioridade de carregamento da imagem.`),ag(),Tl(152,`blockquote`)(153,`p`),cN(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),ag()(),Tl(155,`pre`)(156,`code`),cN(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),ag()()()(),Tl(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),cN(162,` p-src`),Gl(163,`br`),ag()()(),Tl(164,`td`,17)(165,`code`,18),cN(166,`string`),ag()(),Tl(167,`td`,19),cN(168,`-`),ag(),Tl(169,`td`,20)(170,`em`)(171,`strong`),cN(172,`(opcional)`),ag()(),Tl(173,`p`),cN(174,`Fonte da imagem que pode ser um caminho local (`),Tl(175,`code`),cN(176,`./assets/images/logo-black-small.png`),ag(),cN(177,`)
ou um servidor externo (`),Tl(178,`code`),cN(179,`https://po-ui.io/assets/images/logo-black-small.png`),ag(),cN(180,`).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var we=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Image`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-image-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-image-basic-view`)(6,`sample-po-image-labs-view`)(7,`sample-po-image-travel-view`),ag()()()),a&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ne,ae,me,pe],encapsulation:2,changeDetection:1})}return i})()}];var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[bL.forChild(we),bL]})}return i})();var Qe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he({type:i});static ɵinj=ue({imports:[ar,se]})}return i})();export{Qe as DocPoImageModule};