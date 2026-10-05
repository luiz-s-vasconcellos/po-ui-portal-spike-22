import{$i as pt,Ai as ho,C as C4,Ca as zO,Cr as Kc,E as Dze,Er as LP,Gi as mg,Hr as RN,Ji as p0,Jr as TE,Kr as SE,Oi as he$1,Qi as po,Ri as kL,Rt as cae,Si as fo,T as Cze,Un as AN,V as Joe,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Y as Lu,Zn as C9,_a as wn,_n as ta,ai as Zx,ca as ue$1,ei as Wx,fr as Hp,gi as e_,hr as IE,i as _a,ia as sE,in as mae,ir as E,mn as rb,nr as DN,oi as aN,pa as vN,qn as BP,r as Ta,si as b9,ti as Xc,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,yi as f,yr as Jv,zr as Qn}from"./main-DRZDQSOK.js";var _e=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(a,o){a&1&&Kc(0,`po-slide`,0),a&2&&cE(`p-slides`,RN(1,_e))},dependencies:[Dze],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Slide Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-slide-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ce],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{poNotification=f(Lu);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let d=Bx();Kc(0,`po-slide`,2)(1,`po-divider`,3),Ac(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(d),DN(o.slideItem.action,r)||(o.slideItem.action=r),e_(r)}),ug(),p0(),Ac(6,`po-input`,6),RE(`ngModelChange`,function(r){return Jv(d),DN(o.slideItem.alt,r)||(o.slideItem.alt=r),e_(r)}),ug(),p0(),Ac(7,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(d),DN(o.slideItem.image,r)||(o.slideItem.image=r),e_(r)}),ug(),p0(),Ac(8,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(d),DN(o.slideItem.link,r)||(o.slideItem.link=r),e_(r)}),ug(),p0(),ug(),Ac(9,`div`,4)(10,`po-button`,9),pt(`p-click`,function(){return o.addSlide()}),ug()()(),Kc(11,`po-divider`,10),Ac(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),RE(`ngModelChange`,function(r){return Jv(d),DN(o.interval,r)||(o.interval=r),e_(r)}),ug(),p0(),Ac(16,`po-input`,12),RE(`ngModelChange`,function(r){return Jv(d),DN(o.height,r)||(o.height=r),e_(r)}),ug(),p0(),ug(),Ac(17,`div`,4)(18,`po-button`,13),pt(`p-click`,function(){Jv(d);let r=Zx(3),we=Zx(13);return r.reset(),we.reset(),e_(o.restore())}),ug()()()}if(a&2){let d=Zx(3);cE(`p-height`,o.height)(`p-interval`,o.interval)(`p-slides`,o.slideItems),Hp(5),TE(`ngModel`,o.slideItem.action),m0(),Hp(),TE(`ngModel`,o.slideItem.alt),m0(),Hp(),TE(`ngModel`,o.slideItem.image),m0(),Hp(),TE(`ngModel`,o.slideItem.link),m0(),Hp(2),cE(`p-disabled`,d.invalid),Hp(5),TE(`ngModel`,o.interval),m0(),Hp(),TE(`ngModel`,o.height),m0()}},dependencies:[b9,D9,C9,BP,LP,oi,rb,C4,Dze],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Slide Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-slide-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,he],encapsulation:2,changeDetection:1})}return n})();function Be(n,K){if(n&1){let l=Bx();Ac(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),vN(4),ug(),Ac(5,`div`,6),vN(6),ug(),Kc(7,`po-divider`),Ac(8,`div`,7),vN(9),ug(),Ac(10,`po-button`,8),pt(`p-click`,function(){let o=Jv(l).$implicit,d=Wx();return e_(d.redirectLink(o.link))}),ug()()()()}if(n&2){let l=K.$implicit;po(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),Hp(2),po(`background`,`white`),Hp(2),SE(``,l.date,` by `,l.author),Hp(2),IE(l.title),Hp(3),IE(l.description)}}var Se=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){a&1&&(Ac(0,`po-slide`,0),sE(1,Be,11,12,`ng-template`,1),ug()),a&2&&cE(`p-slides`,o.sampleItems)},dependencies:[oi,rb,Dze,Joe],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n});var be=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Slide - Useful articles`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-slide-useful-articles`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Se],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(a,o){if(a&1&&Xc(ta,7),a&2){let d;fo(d=ho())&&(o.modal=d.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(a,o){a&1&&(Kc(0,`po-slide`,0),Ac(1,`po-modal`,1),vN(2),ug()),a&2&&(cE(`p-slides`,o.landscapes),Hp(2),mg(` `,o.modalText,`
`))},dependencies:[ta,Dze],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n});var Ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Slide - Landscapes`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-slide-landscapes`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ze,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,fe],encapsulation:2,changeDetection:1})}return n})();var We=[`slideComponent`];function Ne(n,K){if(n&1){let l=Bx();Ac(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),vN(4),ug(),Ac(5,`div`,9),vN(6),ug(),Kc(7,`po-divider`),Ac(8,`div`,10),vN(9),ug(),Ac(10,`po-button`,11),pt(`p-click`,function(){let o=Jv(l).$implicit,d=Wx();return e_(d.redirectLink(o.link))}),ug()()()()}if(n&2){let l=K.$implicit;po(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),Hp(2),po(`background`,`white`),Hp(2),SE(``,l.date,` by `,l.author),Hp(2),IE(l.title),Hp(3),IE(l.description)}}var ve=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(a,o){if(a&1&&Xc(We,7),a&2){let d;fo(d=ho())&&(o.slideComponent=d.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(a,o){if(a&1&&(Ac(0,`po-slide`,1,0),sE(2,Ne,11,12,`ng-template`,2),ug(),Ac(3,`div`,3)(4,`po-button`,4),pt(`p-click`,function(){return o.previousBtn()}),ug(),Ac(5,`po-button`,5),pt(`p-click`,function(){return o.nextBtn()}),ug()()),a&2){let d=Zx(1);cE(`p-slides`,o.sampleItems),Hp(4),cE(`p-disabled`,d.getCurrentSlideIndex()===0),Hp(),cE(`p-disabled`,d.getCurrentSlideIndex()===o.sampleItems.length-1)}},dependencies:[oi,rb,Dze,Joe],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n});var ye=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Slide - External Controls`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-slide-external-controls`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Oe,o.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ve],encapsulation:2,changeDetection:1})}return n})();var xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:279,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoSlideModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-slide`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoSlideComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Ac(18,`strong`)(19,`a`,6),vN(20,`p-slide-content-template`),ug()(),vN(21,`.`),ug(),Ac(22,`h4`),vN(23,`Boas práticas:`),ug(),Ac(24,`ul`)(25,`li`),vN(26,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),ug(),Ac(27,`li`),vN(28,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),ug(),Ac(29,`li`),vN(30,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),ug()()(),Ac(31,`div`,7)(32,`h4`,8),vN(33,`Seletor`),ug(),Ac(34,`pre`,9),vN(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),ug()(),Ac(36,`h4`,10),vN(37,`Propriedades`),ug(),Ac(38,`table`,11)(39,`tr`,12)(40,`th`,13),vN(41,`Nome`),ug(),Ac(42,`th`,13),vN(43,`Tipo`),ug(),Ac(44,`th`,13),vN(45,`Padrão`),ug(),Ac(46,`th`,13),vN(47,`Descrição`),ug()(),Ac(48,`tr`,14)(49,`td`,15)(50,`div`,16)(51,`span`,17),vN(52,` p-height`),Kc(53,`br`),ug()()(),Ac(54,`td`,18)(55,`code`,19),vN(56,`number`),ug()(),Ac(57,`td`,20)(58,`p`)(59,`code`),vN(60,`336`),ug()()(),Ac(61,`td`,21)(62,`em`)(63,`strong`),vN(64,`(opcional)`),ug()(),Ac(65,`p`),vN(66,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),Ac(67,`code`),vN(68,`default`),ug(),vN(69,`.`),ug()()(),Ac(70,`tr`,14)(71,`td`,15)(72,`div`,16)(73,`span`,17),vN(74,` p-hide-arrows`),Kc(75,`br`),ug()()(),Ac(76,`td`,18)(77,`code`,22),vN(78,`boolean`),ug()(),Ac(79,`td`,20)(80,`p`)(81,`code`),vN(82,`false`),ug()()(),Ac(83,`td`,21)(84,`em`)(85,`strong`),vN(86,`(opcional)`),ug()(),Ac(87,`p`),vN(88,`Define a exibição das setas de navegação.`),ug()()(),Ac(89,`tr`,14)(90,`td`,15)(91,`div`,16)(92,`span`,17),vN(93,` p-interval`),Kc(94,`br`),ug()()(),Ac(95,`td`,18)(96,`code`,19),vN(97,`number`),ug()(),Ac(98,`td`,20)(99,`p`)(100,`code`),vN(101,`4000`),ug()()(),Ac(102,`td`,21)(103,`em`)(104,`strong`),vN(105,`(opcional)`),ug()(),Ac(106,`p`),vN(107,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),Ac(108,`code`),vN(109,`1000`),ug(),vN(110,` os slides não trocam automaticamente.`),ug()()(),Ac(111,`tr`,14)(112,`td`,15)(113,`div`,16)(114,`span`,17),vN(115,` p-slides`),Kc(116,`br`),ug()()(),Ac(117,`td`,18)(118,`code`,23),vN(119,`Array<PoSlideItem `),ug(),Ac(120,`code`,24),vN(121,` string `),ug(),Ac(122,`code`,25),vN(123,` any>`),ug()(),Ac(124,`td`,20),vN(125,`-`),ug(),Ac(126,`td`,21)(127,`p`),vN(128,`Array de imagens ou dados para o slide, pode ser de três formas:`),ug(),Ac(129,`ul`)(130,`li`),vN(131,`Array implementando objetos da interface `),Ac(132,`code`),vN(133,`PoSlideItem`),ug(),vN(134,`:`),Ac(135,`pre`)(136,`code`),vN(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),ug()()(),Ac(138,`li`),vN(139,`Array de `),Ac(140,`code`),vN(141,`strings`),ug(),vN(142,` com os caminhos das imagens:`),Ac(143,`pre`)(144,`code`),vN(145,`['/assets/image-1', '/assets/image-2' ]
`),ug()()(),Ac(146,`li`),vN(147,`Array com lista de itens (para utilizar template):`),Ac(148,`pre`)(149,`code`),vN(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),ug()()()(),Ac(151,`blockquote`)(152,`p`),vN(153,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),ug()()()()(),Ac(154,`h3`,10),vN(155,`Métodos`),ug(),Ac(156,`table`,26)(157,`tr`,14)(158,`th`,27)(159,`div`,16)(160,`h4`)(161,`span`,17),vN(162,` getCurrentSlideIndex `),ug()()()()(),Ac(163,`tr`,21)(164,`td`,21)(165,`p`),vN(166,`Método que retorna o index do slide atual`),ug(),Ac(167,`pre`)(168,`code`),vN(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),ug()()()()(),Kc(170,`br`),Ac(171,`table`,26)(172,`tr`,14)(173,`th`,27)(174,`div`,16)(175,`h4`)(176,`span`,17),vN(177,` next `),ug()()()()(),Ac(178,`tr`,21)(179,`td`,21)(180,`p`),vN(181,`Método para chamar o próximo slide.`),ug(),Ac(182,`pre`)(183,`code`),vN(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),ug()()()()(),Kc(185,`br`),Ac(186,`table`,26)(187,`tr`,14)(188,`th`,27)(189,`div`,16)(190,`h4`)(191,`span`,17),vN(192,` previous `),ug()()()()(),Ac(193,`tr`,21)(194,`td`,21)(195,`p`),vN(196,`Método para chamar o slide anterior.`),ug(),Ac(197,`pre`)(198,`code`),vN(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),ug()()()()(),Kc(200,`br`),Ac(201,`h3`),vN(202,`Interfaces`),ug(),Ac(203,`h4`,28)(204,`code`,5),vN(205,`PoSlideItem`),ug()(),Ac(206,`div`,2)(207,`p`),vN(208,`Interface que define cada objeto do `),Ac(209,`code`),vN(210,`PoSlideItem`),ug(),vN(211,`.`),ug()(),Ac(212,`h4`,10),vN(213,`Propriedades`),ug(),Ac(214,`table`,11)(215,`tr`,12)(216,`th`,13),vN(217,`Nome`),ug(),Ac(218,`th`,13),vN(219,`Tipo`),ug(),Ac(220,`th`,13),vN(221,`Descrição`),ug()(),Ac(222,`tr`,14)(223,`td`,15)(224,`div`,16)(225,`span`,17),vN(226,` action`),Kc(227,`br`),ug()()(),Ac(228,`td`,18)(229,`code`,29),vN(230,`Function`),ug()(),Ac(231,`td`,21)(232,`em`)(233,`strong`),vN(234,`(opcional)`),ug()(),Ac(235,`p`),vN(236,`Ação executada ao clicar no slide caso não tenha link definido.`),ug()()(),Ac(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),vN(241,` alt`),Kc(242,`br`),ug()()(),Ac(243,`td`,18)(244,`code`,24),vN(245,`string`),ug()(),Ac(246,`td`,21)(247,`em`)(248,`strong`),vN(249,`(opcional)`),ug()(),Ac(250,`p`),vN(251,`Texto que aparece quando a imagem não é encontrada.`),ug()()(),Ac(252,`tr`,14)(253,`td`,15)(254,`div`,16)(255,`span`,17),vN(256,` image`),Kc(257,`br`),ug()()(),Ac(258,`td`,18)(259,`code`,24),vN(260,`string`),ug()(),Ac(261,`td`,21)(262,`p`),vN(263,`Define o caminho da imagem.`),ug()()(),Ac(264,`tr`,14)(265,`td`,15)(266,`div`,16)(267,`span`,17),vN(268,` link`),Kc(269,`br`),ug()()(),Ac(270,`td`,18)(271,`code`,24),vN(272,`string`),ug()(),Ac(273,`td`,21)(274,`em`)(275,`strong`),vN(276,`(opcional)`),ug()(),Ac(277,`p`),vN(278,`Link interno ou externo que será aberto ao clicar no slide.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var Ge=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-slide-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-slide-basic-view`)(6,`sample-po-slide-labs-view`)(7,`sample-po-slide-useful-articles-view`)(8,`sample-po-slide-landscapes-view`)(9,`sample-po-slide-external-controls-view`),ug()()()),a&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Cze,cae,mae,ue,ge,be,Ce,ye,xe],encapsulation:2,changeDetection:1})}return n})()}];var Pe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[kL.forChild(Ge),kL]})}return n})();var Mt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[Ta,Pe]})}return n})();export{Mt as DocPoSlideModule};