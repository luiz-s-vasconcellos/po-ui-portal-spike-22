import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,G as Jze,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Li as nb,Pi as mt,Qi as tb,Qt as ea,Ri as nu,Si as iu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,cr as FE,dt as Sae,ga as xx,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,ni as _o,pa as wg,r as Ta,sa as vo,ta as ue$1,tr as Do,ua as wK,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yn as pae,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var _e=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(a,o){a&1&&nu(0,`po-slide`,0),a&2&&jE(`p-slides`,gO(1,_e))},dependencies:[Jze],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Slide Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-slide-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ce],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{poNotification=p(zu);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let d=Sx();nu(0,`po-slide`,2)(1,`po-divider`,3),jc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.slideItem.action,r)||(o.slideItem.action=r),v_(r)}),wg(),jc(6,`po-input`,6),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.slideItem.alt,r)||(o.slideItem.alt=r),v_(r)}),wg(),jc(7,`po-input`,7),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.slideItem.image,r)||(o.slideItem.image=r),v_(r)}),wg(),jc(8,`po-input`,8),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.slideItem.link,r)||(o.slideItem.link=r),v_(r)}),wg()(),jc(9,`div`,4)(10,`po-button`,9),mt(`p-click`,function(){return o.addSlide()}),wg()()(),nu(11,`po-divider`,10),jc(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.interval,r)||(o.interval=r),v_(r)}),wg(),jc(16,`po-input`,12),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.height,r)||(o.height=r),v_(r)}),wg()(),jc(17,`div`,4)(18,`po-button`,13),mt(`p-click`,function(){y_(d);let r=Fx(3),we=Fx(13);return r.reset(),we.reset(),v_(o.restore())}),wg()()()}if(a&2){let d=Fx(3);jE(`p-height`,o.height)(`p-interval`,o.interval)(`p-slides`,o.slideItems),rg(5),ib(`ngModel`,o.slideItem.action),t0(),rg(),ib(`ngModel`,o.slideItem.alt),t0(),rg(),ib(`ngModel`,o.slideItem.image),t0(),rg(),ib(`ngModel`,o.slideItem.link),t0(),rg(2),jE(`p-disabled`,d.invalid),rg(5),ib(`ngModel`,o.interval),t0(),rg(),ib(`ngModel`,o.height),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,Jze],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Slide Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

<po-divider p-label="Slide Item"></po-divider>

<form #slideItemForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="slideAction" [(ngModel)]="slideItem.action" p-clean p-label="Slide action">
    </po-input>

    <po-input class="po-md-6" name="slideAlt" [(ngModel)]="slideItem.alt" p-clean p-label="Slide alt"> </po-input>

    <po-input
      class="po-md-6"
      name="slideImage"
      [(ngModel)]="slideItem.image"
      p-clean
      p-help="Ex.: https://lorempixel.com/1024/768/"
      p-label="Slide image"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="slideLink"
      [(ngModel)]="slideItem.link"
      p-clean
      p-help="Ex.: https://po-ui.io/home"
      p-label="Slide link"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Add slide" [p-disabled]="slideItemForm.invalid" (p-click)="addSlide()">
    </po-button>
  </div>
</form>

<po-divider p-label="Properties"></po-divider>

<form #slidePropertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="interval" [(ngModel)]="interval" p-clean p-help="Ex.: 7000" p-label="Interval">
    </po-input>

    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-help="Ex.: 300" p-label="Height"> </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="slideItemForm.reset(); slidePropertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-labs',
  templateUrl: './sample-po-slide-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  height: number;
  interval: number;
  slideItem: PoSlideItem;
  slideItems: Array<PoSlideItem>;

  ngOnInit() {
    this.restore();
  }

  addSlide() {
    const item: PoSlideItem = Object.assign({}, this.slideItem);
    item.action = item.action ? this.showAction.bind(this, item.action) : undefined;
    this.slideItems = [...this.slideItems, item];
    this.restoreSlideItemForm();
  }

  restore() {
    this.interval = undefined;
    this.height = undefined;
    this.slideItems = [];
    this.restoreSlideItemForm();
  }

  restoreSlideItemForm() {
    this.slideItem = { action: undefined, alt: undefined, image: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Slide clicked: \${action}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-slide-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return n})();function Be(n,K){if(n&1){let l=Sx();jc(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),iO(4),wg(),jc(5,`div`,6),iO(6),wg(),nu(7,`po-divider`),jc(8,`div`,7),iO(9),wg(),jc(10,`po-button`,8),mt(`p-click`,function(){let o=y_(l).$implicit,d=xx();return v_(d.redirectLink(o.link))}),wg()()()()}if(n&2){let l=K.$implicit;Do(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),rg(2),Do(`background`,`white`),rg(2),nb(``,l.date,` by `,l.author),rg(2),tb(l.title),rg(3),tb(l.description)}}var Se=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){a&1&&(jc(0,`po-slide`,0),FE(1,Be,11,12,`ng-template`,1),wg()),a&2&&jE(`p-slides`,o.sampleItems)},dependencies:[ni,Lf,Jze,pae],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n});var be=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Slide - Useful articles`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-slide p-height="450" [p-slides]="sampleItems">
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-useful-articles',
  templateUrl: './sample-po-slide-useful-articles.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideUsefulArticlesComponent {
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-slide-useful-articles`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Fe,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(a,o){if(a&1&&iu(ea,7),a&2){let d;vo(d=_o())&&(o.modal=d.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(a,o){a&1&&(nu(0,`po-slide`,0),jc(1,`po-modal`,1),iO(2),wg()),a&2&&(jE(`p-slides`,o.landscapes),rg(2),Ag(` `,o.modalText,`
`))},dependencies:[ea,Jze],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n});var Ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Slide - Landscapes`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-landscapes',
  templateUrl: './sample-po-slide-landscapes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLandscapesComponent {
  @ViewChild(PoModalComponent, { static: true }) modal: PoModalComponent;

  landscapes: Array<PoSlideItem> = [
    { image: '/assets/graphics/landscape-01.jpeg', alt: 'On the road', action: this.aboutLandscape.bind(this) },
    {
      image: '/assets/graphics/landscape-02.jpeg',
      alt: 'Birds flying over trees',
      action: this.aboutLandscape.bind(this)
    },
    { image: '/assets/graphics/landscape-03.jpeg', alt: 'That\`s a great sea', action: this.aboutLandscape.bind(this) }
  ];

  modalText: string;

  aboutLandscape(item: PoSlideItem) {
    this.modalText = item.alt;
    this.modal.open();
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-slide-landscapes`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ze,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,fe],encapsulation:2,changeDetection:1})}return n})();var We=[`slideComponent`];function Ne(n,K){if(n&1){let l=Sx();jc(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),iO(4),wg(),jc(5,`div`,9),iO(6),wg(),nu(7,`po-divider`),jc(8,`div`,10),iO(9),wg(),jc(10,`po-button`,11),mt(`p-click`,function(){let o=y_(l).$implicit,d=xx();return v_(d.redirectLink(o.link))}),wg()()()()}if(n&2){let l=K.$implicit;Do(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),rg(2),Do(`background`,`white`),rg(2),nb(``,l.date,` by `,l.author),rg(2),tb(l.title),rg(3),tb(l.description)}}var ve=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(a,o){if(a&1&&iu(We,7),a&2){let d;vo(d=_o())&&(o.slideComponent=d.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){if(a&1&&(jc(0,`po-slide`,1,0),FE(2,Ne,11,12,`ng-template`,2),wg(),jc(3,`div`,3)(4,`po-button`,4),mt(`p-click`,function(){return o.previousBtn()}),wg(),jc(5,`po-button`,5),mt(`p-click`,function(){return o.nextBtn()}),wg()()),a&2){let d=Fx(1);jE(`p-slides`,o.sampleItems),rg(4),jE(`p-disabled`,d.getCurrentSlideIndex()===0),rg(),jE(`p-disabled`,d.getCurrentSlideIndex()===o.sampleItems.length-1)}},dependencies:[ni,Lf,Jze,pae],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n});var ye=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Slide - External Controls`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>

<div class="po-row">
  <po-button
    class="po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Previous"
    (p-click)="previousBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === 0"
  >
  </po-button>
  <po-button
    class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Next"
    (p-click)="nextBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === sampleItems.length - 1"
  >
  </po-button>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-external-controls',
  templateUrl: './sample-po-slide-external-controls.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideExternalControlsComponent {
  @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

  nextLabel: string = 'Next';
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }

  nextBtn() {
    this.slideComponent.next();
  }

  previousBtn() {
    this.slideComponent.previous();
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-slide-external-controls`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Oe,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ve],encapsulation:2,changeDetection:1})}return n})();var xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:279,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoSlideModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-slide`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoSlideComponent`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),jc(18,`strong`)(19,`a`,6),iO(20,`p-slide-content-template`),wg()(),iO(21,`.`),wg(),jc(22,`h4`),iO(23,`Boas práticas:`),wg(),jc(24,`ul`)(25,`li`),iO(26,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),wg(),jc(27,`li`),iO(28,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),wg(),jc(29,`li`),iO(30,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),wg()()(),jc(31,`div`,7)(32,`h4`,8),iO(33,`Seletor`),wg(),jc(34,`pre`,9),iO(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),wg()(),jc(36,`h4`,10),iO(37,`Propriedades`),wg(),jc(38,`table`,11)(39,`tr`,12)(40,`th`,13),iO(41,`Nome`),wg(),jc(42,`th`,13),iO(43,`Tipo`),wg(),jc(44,`th`,13),iO(45,`Padrão`),wg(),jc(46,`th`,13),iO(47,`Descrição`),wg()(),jc(48,`tr`,14)(49,`td`,15)(50,`div`,16)(51,`span`,17),iO(52,` p-height`),nu(53,`br`),wg()()(),jc(54,`td`,18)(55,`code`,19),iO(56,`number`),wg()(),jc(57,`td`,20)(58,`p`)(59,`code`),iO(60,`336`),wg()()(),jc(61,`td`,21)(62,`em`)(63,`strong`),iO(64,`(opcional)`),wg()(),jc(65,`p`),iO(66,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),jc(67,`code`),iO(68,`default`),wg(),iO(69,`.`),wg()()(),jc(70,`tr`,14)(71,`td`,15)(72,`div`,16)(73,`span`,17),iO(74,` p-hide-arrows`),nu(75,`br`),wg()()(),jc(76,`td`,18)(77,`code`,22),iO(78,`boolean`),wg()(),jc(79,`td`,20)(80,`p`)(81,`code`),iO(82,`false`),wg()()(),jc(83,`td`,21)(84,`em`)(85,`strong`),iO(86,`(opcional)`),wg()(),jc(87,`p`),iO(88,`Define a exibição das setas de navegação.`),wg()()(),jc(89,`tr`,14)(90,`td`,15)(91,`div`,16)(92,`span`,17),iO(93,` p-interval`),nu(94,`br`),wg()()(),jc(95,`td`,18)(96,`code`,19),iO(97,`number`),wg()(),jc(98,`td`,20)(99,`p`)(100,`code`),iO(101,`4000`),wg()()(),jc(102,`td`,21)(103,`em`)(104,`strong`),iO(105,`(opcional)`),wg()(),jc(106,`p`),iO(107,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),jc(108,`code`),iO(109,`1000`),wg(),iO(110,` os slides não trocam automaticamente.`),wg()()(),jc(111,`tr`,14)(112,`td`,15)(113,`div`,16)(114,`span`,17),iO(115,` p-slides`),nu(116,`br`),wg()()(),jc(117,`td`,18)(118,`code`,23),iO(119,`Array<PoSlideItem `),wg(),jc(120,`code`,24),iO(121,` string `),wg(),jc(122,`code`,25),iO(123,` any>`),wg()(),jc(124,`td`,20),iO(125,`-`),wg(),jc(126,`td`,21)(127,`p`),iO(128,`Array de imagens ou dados para o slide, pode ser de três formas:`),wg(),jc(129,`ul`)(130,`li`),iO(131,`Array implementando objetos da interface `),jc(132,`code`),iO(133,`PoSlideItem`),wg(),iO(134,`:`),jc(135,`pre`)(136,`code`),iO(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),wg()()(),jc(138,`li`),iO(139,`Array de `),jc(140,`code`),iO(141,`strings`),wg(),iO(142,` com os caminhos das imagens:`),jc(143,`pre`)(144,`code`),iO(145,`['/assets/image-1', '/assets/image-2' ]
`),wg()()(),jc(146,`li`),iO(147,`Array com lista de itens (para utilizar template):`),jc(148,`pre`)(149,`code`),iO(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),wg()()()(),jc(151,`blockquote`)(152,`p`),iO(153,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),wg()()()()(),jc(154,`h3`,10),iO(155,`Métodos`),wg(),jc(156,`table`,26)(157,`tr`,14)(158,`th`,27)(159,`div`,16)(160,`h4`)(161,`span`,17),iO(162,` getCurrentSlideIndex `),wg()()()()(),jc(163,`tr`,21)(164,`td`,21)(165,`p`),iO(166,`Método que retorna o index do slide atual`),wg(),jc(167,`pre`)(168,`code`),iO(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),wg()()()()(),nu(170,`br`),jc(171,`table`,26)(172,`tr`,14)(173,`th`,27)(174,`div`,16)(175,`h4`)(176,`span`,17),iO(177,` next `),wg()()()()(),jc(178,`tr`,21)(179,`td`,21)(180,`p`),iO(181,`Método para chamar o próximo slide.`),wg(),jc(182,`pre`)(183,`code`),iO(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),wg()()()()(),nu(185,`br`),jc(186,`table`,26)(187,`tr`,14)(188,`th`,27)(189,`div`,16)(190,`h4`)(191,`span`,17),iO(192,` previous `),wg()()()()(),jc(193,`tr`,21)(194,`td`,21)(195,`p`),iO(196,`Método para chamar o slide anterior.`),wg(),jc(197,`pre`)(198,`code`),iO(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),wg()()()()(),nu(200,`br`),jc(201,`h3`),iO(202,`Interfaces`),wg(),jc(203,`h4`,28)(204,`code`,5),iO(205,`PoSlideItem`),wg()(),jc(206,`div`,2)(207,`p`),iO(208,`Interface que define cada objeto do `),jc(209,`code`),iO(210,`PoSlideItem`),wg(),iO(211,`.`),wg()(),jc(212,`h4`,10),iO(213,`Propriedades`),wg(),jc(214,`table`,11)(215,`tr`,12)(216,`th`,13),iO(217,`Nome`),wg(),jc(218,`th`,13),iO(219,`Tipo`),wg(),jc(220,`th`,13),iO(221,`Descrição`),wg()(),jc(222,`tr`,14)(223,`td`,15)(224,`div`,16)(225,`span`,17),iO(226,` action`),nu(227,`br`),wg()()(),jc(228,`td`,18)(229,`code`,29),iO(230,`Function`),wg()(),jc(231,`td`,21)(232,`em`)(233,`strong`),iO(234,`(opcional)`),wg()(),jc(235,`p`),iO(236,`Ação executada ao clicar no slide caso não tenha link definido.`),wg()()(),jc(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),iO(241,` alt`),nu(242,`br`),wg()()(),jc(243,`td`,18)(244,`code`,24),iO(245,`string`),wg()(),jc(246,`td`,21)(247,`em`)(248,`strong`),iO(249,`(opcional)`),wg()(),jc(250,`p`),iO(251,`Texto que aparece quando a imagem não é encontrada.`),wg()()(),jc(252,`tr`,14)(253,`td`,15)(254,`div`,16)(255,`span`,17),iO(256,` image`),nu(257,`br`),wg()()(),jc(258,`td`,18)(259,`code`,24),iO(260,`string`),wg()(),jc(261,`td`,21)(262,`p`),iO(263,`Define o caminho da imagem.`),wg()()(),jc(264,`tr`,14)(265,`td`,15)(266,`div`,16)(267,`span`,17),iO(268,` link`),nu(269,`br`),wg()()(),jc(270,`td`,18)(271,`code`,24),iO(272,`string`),wg()(),jc(273,`td`,21)(274,`em`)(275,`strong`),iO(276,`(opcional)`),wg()(),jc(277,`p`),iO(278,`Link interno ou externo que será aberto ao clicar no slide.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var Ge=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-slide-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-slide-basic-view`)(6,`sample-po-slide-labs-view`)(7,`sample-po-slide-useful-articles-view`)(8,`sample-po-slide-landscapes-view`)(9,`sample-po-slide-external-controls-view`),wg()()()),a&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,ue,ge,be,Ce,ye,xe],encapsulation:2,changeDetection:1})}return n})()}];var Pe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue$1({imports:[C1.forChild(Ge),C1]})}return n})();var Mt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue$1({imports:[Ta,Pe]})}return n})();export{Mt as DocPoSlideModule};