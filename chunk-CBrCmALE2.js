import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ba as yw,ci as _w,ei as Yl,fi as ag,gi as bL,ha as ww,in as k8e,ji as fo,k as Eu,l as ar,la as uo,lr as Gl,mr as JE,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,sn as nCe,sr as Fx,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN}from"./main-3EWTGE7T.js";var _e=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(a,o){a&1&&Gl(0,`po-slide`,0),a&2&&nw(`p-slides`,_N(1,_e))},dependencies:[k8e],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Slide Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-slide-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ce],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{poNotification=f(Eu);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let d=Ax();Gl(0,`po-slide`,2)(1,`po-divider`,3),Tl(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(d),uN(o.slideItem.action,r)||(o.slideItem.action=r),Xy(r)}),ag(),a0(),Tl(6,`po-input`,6),ww(`ngModelChange`,function(r){return Ky(d),uN(o.slideItem.alt,r)||(o.slideItem.alt=r),Xy(r)}),ag(),a0(),Tl(7,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(d),uN(o.slideItem.image,r)||(o.slideItem.image=r),Xy(r)}),ag(),a0(),Tl(8,`po-input`,8),ww(`ngModelChange`,function(r){return Ky(d),uN(o.slideItem.link,r)||(o.slideItem.link=r),Xy(r)}),ag(),a0(),ag(),Tl(9,`div`,4)(10,`po-button`,9),ht(`p-click`,function(){return o.addSlide()}),ag()()(),Gl(11,`po-divider`,10),Tl(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),ww(`ngModelChange`,function(r){return Ky(d),uN(o.interval,r)||(o.interval=r),Xy(r)}),ag(),a0(),Tl(16,`po-input`,12),ww(`ngModelChange`,function(r){return Ky(d),uN(o.height,r)||(o.height=r),Xy(r)}),ag(),a0(),ag(),Tl(17,`div`,4)(18,`po-button`,13),ht(`p-click`,function(){Ky(d);let r=Bx(3),we=Bx(13);return r.reset(),we.reset(),Xy(o.restore())}),ag()()()}if(a&2){let d=Bx(3);nw(`p-height`,o.height)(`p-interval`,o.interval)(`p-slides`,o.slideItems),jp(5),Ew(`ngModel`,o.slideItem.action),l0(),jp(),Ew(`ngModel`,o.slideItem.alt),l0(),jp(),Ew(`ngModel`,o.slideItem.image),l0(),jp(),Ew(`ngModel`,o.slideItem.link),l0(),jp(2),nw(`p-disabled`,d.invalid),jp(5),Ew(`ngModel`,o.interval),l0(),jp(),Ew(`ngModel`,o.height),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,k8e],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Slide Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-slide-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return n})();function Be(n,K){if(n&1){let l=Ax();Tl(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),cN(4),ag(),Tl(5,`div`,6),cN(6),ag(),Gl(7,`po-divider`),Tl(8,`div`,7),cN(9),ag(),Tl(10,`po-button`,8),ht(`p-click`,function(){let o=Ky(l).$implicit;return Xy(Fx().redirectLink(o.link))}),ag()()()()}if(n&2){let l=K.$implicit;fo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),jp(2),fo(`background`,`white`),jp(2),_w(``,l.date,` by `,l.author),jp(2),yw(l.title),jp(3),yw(l.description)}}var Se=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){a&1&&(Tl(0,`po-slide`,0),JE(1,Be,11,12,`ng-template`,1),ag()),a&2&&nw(`p-slides`,o.sampleItems)},dependencies:[Zt,Xy$1,k8e,nCe],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n});var be=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Slide - Useful articles`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-slide-useful-articles`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(a,o){if(a&1&&Yl(vr,7),a&2){let d;lo(d=uo())&&(o.modal=d.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(a,o){a&1&&(Gl(0,`po-slide`,0),Tl(1,`po-modal`,1),cN(2),ag()),a&2&&(nw(`p-slides`,o.landscapes),jp(2),hg(` `,o.modalText,`
`))},dependencies:[vr,k8e],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n});var Ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Slide - Landscapes`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-slide-landscapes`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ze,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,fe],encapsulation:2,changeDetection:1})}return n})();var We=[`slideComponent`];function Ne(n,K){if(n&1){let l=Ax();Tl(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),cN(4),ag(),Tl(5,`div`,9),cN(6),ag(),Gl(7,`po-divider`),Tl(8,`div`,10),cN(9),ag(),Tl(10,`po-button`,11),ht(`p-click`,function(){let o=Ky(l).$implicit;return Xy(Fx().redirectLink(o.link))}),ag()()()()}if(n&2){let l=K.$implicit;fo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),jp(2),fo(`background`,`white`),jp(2),_w(``,l.date,` by `,l.author),jp(2),yw(l.title),jp(3),yw(l.description)}}var ve=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(a,o){if(a&1&&Yl(We,7),a&2){let d;lo(d=uo())&&(o.slideComponent=d.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){if(a&1&&(Tl(0,`po-slide`,1,0),JE(2,Ne,11,12,`ng-template`,2),ag(),Tl(3,`div`,3)(4,`po-button`,4),ht(`p-click`,function(){return o.previousBtn()}),ag(),Tl(5,`po-button`,5),ht(`p-click`,function(){return o.nextBtn()}),ag()()),a&2){let d=Bx(1);nw(`p-slides`,o.sampleItems),jp(4),nw(`p-disabled`,d.getCurrentSlideIndex()===0),jp(),nw(`p-disabled`,d.getCurrentSlideIndex()===o.sampleItems.length-1)}},dependencies:[Zt,Xy$1,k8e,nCe],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n});var ye=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Slide - External Controls`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-slide-external-controls`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Oe,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ve],encapsulation:2,changeDetection:1})}return n})();var xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:279,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoSlideModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-slide`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoSlideComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Tl(18,`strong`)(19,`a`,6),cN(20,`p-slide-content-template`),ag()(),cN(21,`.`),ag(),Tl(22,`h4`),cN(23,`Boas práticas:`),ag(),Tl(24,`ul`)(25,`li`),cN(26,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),ag(),Tl(27,`li`),cN(28,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),ag(),Tl(29,`li`),cN(30,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),ag()()(),Tl(31,`div`,7)(32,`h4`,8),cN(33,`Seletor`),ag(),Tl(34,`pre`,9),cN(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),ag()(),Tl(36,`h4`,10),cN(37,`Propriedades`),ag(),Tl(38,`table`,11)(39,`tr`,12)(40,`th`,13),cN(41,`Nome`),ag(),Tl(42,`th`,13),cN(43,`Tipo`),ag(),Tl(44,`th`,13),cN(45,`Padrão`),ag(),Tl(46,`th`,13),cN(47,`Descrição`),ag()(),Tl(48,`tr`,14)(49,`td`,15)(50,`div`,16)(51,`span`,17),cN(52,` p-height`),Gl(53,`br`),ag()()(),Tl(54,`td`,18)(55,`code`,19),cN(56,`number`),ag()(),Tl(57,`td`,20)(58,`p`)(59,`code`),cN(60,`336`),ag()()(),Tl(61,`td`,21)(62,`em`)(63,`strong`),cN(64,`(opcional)`),ag()(),Tl(65,`p`),cN(66,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),Tl(67,`code`),cN(68,`default`),ag(),cN(69,`.`),ag()()(),Tl(70,`tr`,14)(71,`td`,15)(72,`div`,16)(73,`span`,17),cN(74,` p-hide-arrows`),Gl(75,`br`),ag()()(),Tl(76,`td`,18)(77,`code`,22),cN(78,`boolean`),ag()(),Tl(79,`td`,20)(80,`p`)(81,`code`),cN(82,`false`),ag()()(),Tl(83,`td`,21)(84,`em`)(85,`strong`),cN(86,`(opcional)`),ag()(),Tl(87,`p`),cN(88,`Define a exibição das setas de navegação.`),ag()()(),Tl(89,`tr`,14)(90,`td`,15)(91,`div`,16)(92,`span`,17),cN(93,` p-interval`),Gl(94,`br`),ag()()(),Tl(95,`td`,18)(96,`code`,19),cN(97,`number`),ag()(),Tl(98,`td`,20)(99,`p`)(100,`code`),cN(101,`4000`),ag()()(),Tl(102,`td`,21)(103,`em`)(104,`strong`),cN(105,`(opcional)`),ag()(),Tl(106,`p`),cN(107,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),Tl(108,`code`),cN(109,`1000`),ag(),cN(110,` os slides não trocam automaticamente.`),ag()()(),Tl(111,`tr`,14)(112,`td`,15)(113,`div`,16)(114,`span`,17),cN(115,` p-slides`),Gl(116,`br`),ag()()(),Tl(117,`td`,18)(118,`code`,23),cN(119,`Array<PoSlideItem `),ag(),Tl(120,`code`,24),cN(121,` string `),ag(),Tl(122,`code`,25),cN(123,` any>`),ag()(),Tl(124,`td`,20),cN(125,`-`),ag(),Tl(126,`td`,21)(127,`p`),cN(128,`Array de imagens ou dados para o slide, pode ser de três formas:`),ag(),Tl(129,`ul`)(130,`li`),cN(131,`Array implementando objetos da interface `),Tl(132,`code`),cN(133,`PoSlideItem`),ag(),cN(134,`:`),Tl(135,`pre`)(136,`code`),cN(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),ag()()(),Tl(138,`li`),cN(139,`Array de `),Tl(140,`code`),cN(141,`strings`),ag(),cN(142,` com os caminhos das imagens:`),Tl(143,`pre`)(144,`code`),cN(145,`['/assets/image-1', '/assets/image-2' ]
`),ag()()(),Tl(146,`li`),cN(147,`Array com lista de itens (para utilizar template):`),Tl(148,`pre`)(149,`code`),cN(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),ag()()()(),Tl(151,`blockquote`)(152,`p`),cN(153,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),ag()()()()(),Tl(154,`h3`,10),cN(155,`Métodos`),ag(),Tl(156,`table`,26)(157,`tr`,14)(158,`th`,27)(159,`div`,16)(160,`h4`)(161,`span`,17),cN(162,` getCurrentSlideIndex `),ag()()()()(),Tl(163,`tr`,21)(164,`td`,21)(165,`p`),cN(166,`Método que retorna o index do slide atual`),ag(),Tl(167,`pre`)(168,`code`),cN(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),ag()()()()(),Gl(170,`br`),Tl(171,`table`,26)(172,`tr`,14)(173,`th`,27)(174,`div`,16)(175,`h4`)(176,`span`,17),cN(177,` next `),ag()()()()(),Tl(178,`tr`,21)(179,`td`,21)(180,`p`),cN(181,`Método para chamar o próximo slide.`),ag(),Tl(182,`pre`)(183,`code`),cN(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),ag()()()()(),Gl(185,`br`),Tl(186,`table`,26)(187,`tr`,14)(188,`th`,27)(189,`div`,16)(190,`h4`)(191,`span`,17),cN(192,` previous `),ag()()()()(),Tl(193,`tr`,21)(194,`td`,21)(195,`p`),cN(196,`Método para chamar o slide anterior.`),ag(),Tl(197,`pre`)(198,`code`),cN(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),ag()()()()(),Gl(200,`br`),Tl(201,`h3`),cN(202,`Interfaces`),ag(),Tl(203,`h4`,28)(204,`code`,5),cN(205,`PoSlideItem`),ag()(),Tl(206,`div`,2)(207,`p`),cN(208,`Interface que define cada objeto do `),Tl(209,`code`),cN(210,`PoSlideItem`),ag(),cN(211,`.`),ag()(),Tl(212,`h4`,10),cN(213,`Propriedades`),ag(),Tl(214,`table`,11)(215,`tr`,12)(216,`th`,13),cN(217,`Nome`),ag(),Tl(218,`th`,13),cN(219,`Tipo`),ag(),Tl(220,`th`,13),cN(221,`Descrição`),ag()(),Tl(222,`tr`,14)(223,`td`,15)(224,`div`,16)(225,`span`,17),cN(226,` action`),Gl(227,`br`),ag()()(),Tl(228,`td`,18)(229,`code`,29),cN(230,`Function`),ag()(),Tl(231,`td`,21)(232,`em`)(233,`strong`),cN(234,`(opcional)`),ag()(),Tl(235,`p`),cN(236,`Ação executada ao clicar no slide caso não tenha link definido.`),ag()()(),Tl(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),cN(241,` alt`),Gl(242,`br`),ag()()(),Tl(243,`td`,18)(244,`code`,24),cN(245,`string`),ag()(),Tl(246,`td`,21)(247,`em`)(248,`strong`),cN(249,`(opcional)`),ag()(),Tl(250,`p`),cN(251,`Texto que aparece quando a imagem não é encontrada.`),ag()()(),Tl(252,`tr`,14)(253,`td`,15)(254,`div`,16)(255,`span`,17),cN(256,` image`),Gl(257,`br`),ag()()(),Tl(258,`td`,18)(259,`code`,24),cN(260,`string`),ag()(),Tl(261,`td`,21)(262,`p`),cN(263,`Define o caminho da imagem.`),ag()()(),Tl(264,`tr`,14)(265,`td`,15)(266,`div`,16)(267,`span`,17),cN(268,` link`),Gl(269,`br`),ag()()(),Tl(270,`td`,18)(271,`code`,24),cN(272,`string`),ag()(),Tl(273,`td`,21)(274,`em`)(275,`strong`),cN(276,`(opcional)`),ag()(),Tl(277,`p`),cN(278,`Link interno ou externo que será aberto ao clicar no slide.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Ge=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-slide-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-slide-basic-view`)(6,`sample-po-slide-labs-view`)(7,`sample-po-slide-useful-articles-view`)(8,`sample-po-slide-landscapes-view`)(9,`sample-po-slide-external-controls-view`),ag()()()),a&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ue,ge,be,Ce,ye,xe],encapsulation:2,changeDetection:1})}return n})()}];var Pe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[bL.forChild(Ge),bL]})}return n})();var Mt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[ar,Pe]})}return n})();export{Mt as DocPoSlideModule};