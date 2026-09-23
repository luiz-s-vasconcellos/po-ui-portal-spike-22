import{$i as ow,$r as Vx,Ai as fo,B as H8e,Br as TN,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,gi as bw,kn as vr,l as ar,mr as MN,nr as HO,oa as ql,or as Iw,qr as Up,r as Ga,ri as Xn,sr as Jy,tn as hCe,ua as ue$1,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f}from"./main-NT5YGKBQ.js";var _e=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(a,o){a&1&&ql(0,`po-slide`,0),a&2&&cw(`p-slides`,TN(1,_e))},dependencies:[H8e],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Slide Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-slide-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ce],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{poNotification=f(Eu);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let d=Vx();ql(0,`po-slide`,2)(1,`po-divider`,3),Ml(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.slideItem.action,r)||(o.slideItem.action=r),Jy(r)}),lg(),f0(),Ml(6,`po-input`,6),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.slideItem.alt,r)||(o.slideItem.alt=r),Jy(r)}),lg(),f0(),Ml(7,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.slideItem.image,r)||(o.slideItem.image=r),Jy(r)}),lg(),f0(),Ml(8,`po-input`,8),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.slideItem.link,r)||(o.slideItem.link=r),Jy(r)}),lg(),f0(),lg(),Ml(9,`div`,4)(10,`po-button`,9),ht(`p-click`,function(){return o.addSlide()}),lg()()(),ql(11,`po-divider`,10),Ml(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.interval,r)||(o.interval=r),Jy(r)}),lg(),f0(),Ml(16,`po-input`,12),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.height,r)||(o.height=r),Jy(r)}),lg(),f0(),lg(),Ml(17,`div`,4)(18,`po-button`,13),ht(`p-click`,function(){Qy(d);let r=Yx(3),we=Yx(13);return r.reset(),we.reset(),Jy(o.restore())}),lg()()()}if(a&2){let d=Yx(3);cw(`p-height`,o.height)(`p-interval`,o.interval)(`p-slides`,o.slideItems),Up(5),Tw(`ngModel`,o.slideItem.action),p0(),Up(),Tw(`ngModel`,o.slideItem.alt),p0(),Up(),Tw(`ngModel`,o.slideItem.image),p0(),Up(),Tw(`ngModel`,o.slideItem.link),p0(),Up(2),cw(`p-disabled`,d.invalid),Up(5),Tw(`ngModel`,o.interval),p0(),Up(),Tw(`ngModel`,o.height),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,H8e],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Slide Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-slide-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return n})();function Be(n,K){if(n&1){let l=Vx();Ml(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),mN(4),lg(),Ml(5,`div`,6),mN(6),lg(),ql(7,`po-divider`),Ml(8,`div`,7),mN(9),lg(),Ml(10,`po-button`,8),ht(`p-click`,function(){let o=Qy(l).$implicit;return Jy(zx().redirectLink(o.link))}),lg()()()()}if(n&2){let l=K.$implicit;fo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),Up(2),fo(`background`,`white`),Up(2),Iw(``,l.date,` by `,l.author),Up(2),bw(l.title),Up(3),bw(l.description)}}var Se=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){a&1&&(Ml(0,`po-slide`,0),ow(1,Be,11,12,`ng-template`,1),lg()),a&2&&cw(`p-slides`,o.sampleItems)},dependencies:[Zt,nb,H8e,hCe],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n});var be=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Slide - Useful articles`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-slide-useful-articles`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(a,o){if(a&1&&Zl(vr,7),a&2){let d;lo(d=uo())&&(o.modal=d.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(a,o){a&1&&(ql(0,`po-slide`,0),Ml(1,`po-modal`,1),mN(2),lg()),a&2&&(cw(`p-slides`,o.landscapes),Up(2),gg(` `,o.modalText,`
`))},dependencies:[vr,H8e],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n});var Ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Slide - Landscapes`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-slide-landscapes`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ze,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,fe],encapsulation:2,changeDetection:1})}return n})();var We=[`slideComponent`];function Ne(n,K){if(n&1){let l=Vx();Ml(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),mN(4),lg(),Ml(5,`div`,9),mN(6),lg(),ql(7,`po-divider`),Ml(8,`div`,10),mN(9),lg(),Ml(10,`po-button`,11),ht(`p-click`,function(){let o=Qy(l).$implicit;return Jy(zx().redirectLink(o.link))}),lg()()()()}if(n&2){let l=K.$implicit;fo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),Up(2),fo(`background`,`white`),Up(2),Iw(``,l.date,` by `,l.author),Up(2),bw(l.title),Up(3),bw(l.description)}}var ve=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(a,o){if(a&1&&Zl(We,7),a&2){let d;lo(d=uo())&&(o.slideComponent=d.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){if(a&1&&(Ml(0,`po-slide`,1,0),ow(2,Ne,11,12,`ng-template`,2),lg(),Ml(3,`div`,3)(4,`po-button`,4),ht(`p-click`,function(){return o.previousBtn()}),lg(),Ml(5,`po-button`,5),ht(`p-click`,function(){return o.nextBtn()}),lg()()),a&2){let d=Yx(1);cw(`p-slides`,o.sampleItems),Up(4),cw(`p-disabled`,d.getCurrentSlideIndex()===0),Up(),cw(`p-disabled`,d.getCurrentSlideIndex()===o.sampleItems.length-1)}},dependencies:[Zt,nb,H8e,hCe],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n});var ye=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Slide - External Controls`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-slide-external-controls`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Oe,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ve],encapsulation:2,changeDetection:1})}return n})();var xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:279,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoSlideModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-slide`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoSlideComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Ml(18,`strong`)(19,`a`,6),mN(20,`p-slide-content-template`),lg()(),mN(21,`.`),lg(),Ml(22,`h4`),mN(23,`Boas práticas:`),lg(),Ml(24,`ul`)(25,`li`),mN(26,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),lg(),Ml(27,`li`),mN(28,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),lg(),Ml(29,`li`),mN(30,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),lg()()(),Ml(31,`div`,7)(32,`h4`,8),mN(33,`Seletor`),lg(),Ml(34,`pre`,9),mN(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),lg()(),Ml(36,`h4`,10),mN(37,`Propriedades`),lg(),Ml(38,`table`,11)(39,`tr`,12)(40,`th`,13),mN(41,`Nome`),lg(),Ml(42,`th`,13),mN(43,`Tipo`),lg(),Ml(44,`th`,13),mN(45,`Padrão`),lg(),Ml(46,`th`,13),mN(47,`Descrição`),lg()(),Ml(48,`tr`,14)(49,`td`,15)(50,`div`,16)(51,`span`,17),mN(52,` p-height`),ql(53,`br`),lg()()(),Ml(54,`td`,18)(55,`code`,19),mN(56,`number`),lg()(),Ml(57,`td`,20)(58,`p`)(59,`code`),mN(60,`336`),lg()()(),Ml(61,`td`,21)(62,`em`)(63,`strong`),mN(64,`(opcional)`),lg()(),Ml(65,`p`),mN(66,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),Ml(67,`code`),mN(68,`default`),lg(),mN(69,`.`),lg()()(),Ml(70,`tr`,14)(71,`td`,15)(72,`div`,16)(73,`span`,17),mN(74,` p-hide-arrows`),ql(75,`br`),lg()()(),Ml(76,`td`,18)(77,`code`,22),mN(78,`boolean`),lg()(),Ml(79,`td`,20)(80,`p`)(81,`code`),mN(82,`false`),lg()()(),Ml(83,`td`,21)(84,`em`)(85,`strong`),mN(86,`(opcional)`),lg()(),Ml(87,`p`),mN(88,`Define a exibição das setas de navegação.`),lg()()(),Ml(89,`tr`,14)(90,`td`,15)(91,`div`,16)(92,`span`,17),mN(93,` p-interval`),ql(94,`br`),lg()()(),Ml(95,`td`,18)(96,`code`,19),mN(97,`number`),lg()(),Ml(98,`td`,20)(99,`p`)(100,`code`),mN(101,`4000`),lg()()(),Ml(102,`td`,21)(103,`em`)(104,`strong`),mN(105,`(opcional)`),lg()(),Ml(106,`p`),mN(107,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),Ml(108,`code`),mN(109,`1000`),lg(),mN(110,` os slides não trocam automaticamente.`),lg()()(),Ml(111,`tr`,14)(112,`td`,15)(113,`div`,16)(114,`span`,17),mN(115,` p-slides`),ql(116,`br`),lg()()(),Ml(117,`td`,18)(118,`code`,23),mN(119,`Array<PoSlideItem `),lg(),Ml(120,`code`,24),mN(121,` string `),lg(),Ml(122,`code`,25),mN(123,` any>`),lg()(),Ml(124,`td`,20),mN(125,`-`),lg(),Ml(126,`td`,21)(127,`p`),mN(128,`Array de imagens ou dados para o slide, pode ser de três formas:`),lg(),Ml(129,`ul`)(130,`li`),mN(131,`Array implementando objetos da interface `),Ml(132,`code`),mN(133,`PoSlideItem`),lg(),mN(134,`:`),Ml(135,`pre`)(136,`code`),mN(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),lg()()(),Ml(138,`li`),mN(139,`Array de `),Ml(140,`code`),mN(141,`strings`),lg(),mN(142,` com os caminhos das imagens:`),Ml(143,`pre`)(144,`code`),mN(145,`['/assets/image-1', '/assets/image-2' ]
`),lg()()(),Ml(146,`li`),mN(147,`Array com lista de itens (para utilizar template):`),Ml(148,`pre`)(149,`code`),mN(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),lg()()()(),Ml(151,`blockquote`)(152,`p`),mN(153,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),lg()()()()(),Ml(154,`h3`,10),mN(155,`Métodos`),lg(),Ml(156,`table`,26)(157,`tr`,14)(158,`th`,27)(159,`div`,16)(160,`h4`)(161,`span`,17),mN(162,` getCurrentSlideIndex `),lg()()()()(),Ml(163,`tr`,21)(164,`td`,21)(165,`p`),mN(166,`Método que retorna o index do slide atual`),lg(),Ml(167,`pre`)(168,`code`),mN(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),lg()()()()(),ql(170,`br`),Ml(171,`table`,26)(172,`tr`,14)(173,`th`,27)(174,`div`,16)(175,`h4`)(176,`span`,17),mN(177,` next `),lg()()()()(),Ml(178,`tr`,21)(179,`td`,21)(180,`p`),mN(181,`Método para chamar o próximo slide.`),lg(),Ml(182,`pre`)(183,`code`),mN(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),lg()()()()(),ql(185,`br`),Ml(186,`table`,26)(187,`tr`,14)(188,`th`,27)(189,`div`,16)(190,`h4`)(191,`span`,17),mN(192,` previous `),lg()()()()(),Ml(193,`tr`,21)(194,`td`,21)(195,`p`),mN(196,`Método para chamar o slide anterior.`),lg(),Ml(197,`pre`)(198,`code`),mN(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),lg()()()()(),ql(200,`br`),Ml(201,`h3`),mN(202,`Interfaces`),lg(),Ml(203,`h4`,28)(204,`code`,5),mN(205,`PoSlideItem`),lg()(),Ml(206,`div`,2)(207,`p`),mN(208,`Interface que define cada objeto do `),Ml(209,`code`),mN(210,`PoSlideItem`),lg(),mN(211,`.`),lg()(),Ml(212,`h4`,10),mN(213,`Propriedades`),lg(),Ml(214,`table`,11)(215,`tr`,12)(216,`th`,13),mN(217,`Nome`),lg(),Ml(218,`th`,13),mN(219,`Tipo`),lg(),Ml(220,`th`,13),mN(221,`Descrição`),lg()(),Ml(222,`tr`,14)(223,`td`,15)(224,`div`,16)(225,`span`,17),mN(226,` action`),ql(227,`br`),lg()()(),Ml(228,`td`,18)(229,`code`,29),mN(230,`Function`),lg()(),Ml(231,`td`,21)(232,`em`)(233,`strong`),mN(234,`(opcional)`),lg()(),Ml(235,`p`),mN(236,`Ação executada ao clicar no slide caso não tenha link definido.`),lg()()(),Ml(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),mN(241,` alt`),ql(242,`br`),lg()()(),Ml(243,`td`,18)(244,`code`,24),mN(245,`string`),lg()(),Ml(246,`td`,21)(247,`em`)(248,`strong`),mN(249,`(opcional)`),lg()(),Ml(250,`p`),mN(251,`Texto que aparece quando a imagem não é encontrada.`),lg()()(),Ml(252,`tr`,14)(253,`td`,15)(254,`div`,16)(255,`span`,17),mN(256,` image`),ql(257,`br`),lg()()(),Ml(258,`td`,18)(259,`code`,24),mN(260,`string`),lg()(),Ml(261,`td`,21)(262,`p`),mN(263,`Define o caminho da imagem.`),lg()()(),Ml(264,`tr`,14)(265,`td`,15)(266,`div`,16)(267,`span`,17),mN(268,` link`),ql(269,`br`),lg()()(),Ml(270,`td`,18)(271,`code`,24),mN(272,`string`),lg()(),Ml(273,`td`,21)(274,`em`)(275,`strong`),mN(276,`(opcional)`),lg()(),Ml(277,`p`),mN(278,`Link interno ou externo que será aberto ao clicar no slide.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Ge=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-slide-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-slide-basic-view`)(6,`sample-po-slide-labs-view`)(7,`sample-po-slide-useful-articles-view`)(8,`sample-po-slide-landscapes-view`)(9,`sample-po-slide-external-controls-view`),lg()()()),a&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ue,ge,be,Ce,ye,xe],encapsulation:2,changeDetection:1})}return n})()}];var Pe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[NL.forChild(Ge),NL]})}return n})();var Mt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[ar,Pe]})}return n})();export{Mt as DocPoSlideModule};