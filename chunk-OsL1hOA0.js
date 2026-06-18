import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,dy as fNe,M as Wl,T as tw,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,dz as Ome,a2 as QE,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as pNe,ct as fo,dA as yw,A as vw,aD as Xy,aT as tN,aE as Qy,aA as Tx}from'./main-UTR4MKMU.js';var _e=()=>["/assets/graphics/landscape-01.jpeg","/assets/graphics/landscape-02.jpeg"],ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-slides"]],template:function(a,o){a&1&&Wl(0,"po-slide",0),a&2&&tw("p-slides",uN(1,_e));},dependencies:[fNe],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Slide Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-slide-basic/sample-po-slide-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-slide-basic/sample-po-slide-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return n})();var he=(()=>{class n{poNotification=f(Yp);height;interval;slideItem;slideItems;ngOnInit(){this.restore();}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm();}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm();}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0};}showAction(l){this.poNotification.success(`Slide clicked: ${l}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs"]],standalone:false,decls:19,vars:10,consts:[["slideItemForm","ngForm"],["slidePropertiesForm","ngForm"],[3,"p-height","p-interval","p-slides"],["p-label","Slide Item"],[1,"po-row"],["name","slideAction","p-clean","","p-label","Slide action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideAlt","p-clean","","p-label","Slide alt",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideImage","p-clean","","p-help","Ex.: https://lorempixel.com/1024/768/","p-label","Slide image","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideLink","p-clean","","p-help","Ex.: https://po-ui.io/home","p-label","Slide link",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add slide",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Properties"],["name","interval","p-clean","","p-help","Ex.: 7000","p-label","Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-help","Ex.: 300","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let d=Ex();Wl(0,"po-slide",2)(1,"po-divider",3),Sl(2,"form",null,0)(4,"div",4)(5,"po-input",5),Ew("ngModelChange",function(r){return Xy(d),tN(o.slideItem.action,r)||(o.slideItem.action=r),Qy(r)}),sg(),JA(),Sl(6,"po-input",6),Ew("ngModelChange",function(r){return Xy(d),tN(o.slideItem.alt,r)||(o.slideItem.alt=r),Qy(r)}),sg(),JA(),Sl(7,"po-input",7),Ew("ngModelChange",function(r){return Xy(d),tN(o.slideItem.image,r)||(o.slideItem.image=r),Qy(r)}),sg(),JA(),Sl(8,"po-input",8),Ew("ngModelChange",function(r){return Xy(d),tN(o.slideItem.link,r)||(o.slideItem.link=r),Qy(r)}),sg(),JA(),sg(),Sl(9,"div",4)(10,"po-button",9),ht("p-click",function(){return o.addSlide()}),sg()()(),Wl(11,"po-divider",10),Sl(12,"form",null,1)(14,"div",4)(15,"po-input",11),Ew("ngModelChange",function(r){return Xy(d),tN(o.interval,r)||(o.interval=r),Qy(r)}),sg(),JA(),Sl(16,"po-input",12),Ew("ngModelChange",function(r){return Xy(d),tN(o.height,r)||(o.height=r),Qy(r)}),sg(),JA(),sg(),Sl(17,"div",4)(18,"po-button",13),ht("p-click",function(){Xy(d);let r=xx(3),we=xx(13);return r.reset(),we.reset(),Qy(o.restore())}),sg()()();}if(a&2){let d=xx(3);tw("p-height",o.height)("p-interval",o.interval)("p-slides",o.slideItems),Vp(5),Dw("ngModel",o.slideItem.action),t0(),Vp(),Dw("ngModel",o.slideItem.alt),t0(),Vp(),Dw("ngModel",o.slideItem.image),t0(),Vp(),Dw("ngModel",o.slideItem.link),t0(),Vp(2),tw("p-disabled",d.invalid),Vp(5),Dw("ngModel",o.interval),t0(),Vp(),Dw("ngModel",o.height),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,fNe],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n}),ge=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Slide Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-slide-labs/sample-po-slide-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-slide-labs/sample-po-slide-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return n})();function Be(n,K){if(n&1){let l=Ex();Sl(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),Jx(4),sg(),Sl(5,"div",6),Jx(6),sg(),Wl(7,"po-divider"),Sl(8,"div",7),Jx(9),sg(),Sl(10,"po-button",8),ht("p-click",function(){let o=Xy(l).$implicit,d=Tx();return Qy(d.redirectLink(o.link))}),sg()()()();}if(n&2){let l=K.$implicit;fo("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Vp(2),fo("background","white"),Vp(2),yw("",l.date," by ",l.author),Vp(2),vw(l.title),Vp(3),vw(l.description);}}var Se=(()=>{class n{sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles"]],standalone:false,decls:2,vars:1,consts:[["p-height","450",3,"p-slides"],["p-slide-content-template",""],[1,"sample-background-image"],[1,"po-row"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){a&1&&(Sl(0,"po-slide",0),QE(1,Be,11,12,"ng-template",1),sg()),a&2&&tw("p-slides",o.sampleItems);},dependencies:[Qt,mv,fNe,Ome],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n}),be=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Slide - Useful articles"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-useful-articles"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:"/assets/graphics/landscape-01.jpeg",alt:"On the road",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-02.jpeg",alt:"Birds flying over trees",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-03.jpeg",alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes"]],viewQuery:function(a,o){if(a&1&&ql(Yo,7),a&2){let d;lo(d=uo())&&(o.modal=d.first);}},standalone:false,decls:3,vars:2,consts:[["p-interval","0",3,"p-slides"],["p-title","Landscape detail"]],template:function(a,o){a&1&&(Wl(0,"po-slide",0),Sl(1,"po-modal",1),Jx(2),sg()),a&2&&(tw("p-slides",o.landscapes),Vp(2),fg(" ",o.modalText,`
`));},dependencies:[Yo,fNe],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n}),Ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Slide - Landscapes"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-landscapes"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ze,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,fe],encapsulation:2})}return n})();var We=["slideComponent"];function Ne(n,K){if(n&1){let l=Ex();Sl(0,"div",6)(1,"div",3)(2,"div",7)(3,"div",8),Jx(4),sg(),Sl(5,"div",9),Jx(6),sg(),Wl(7,"po-divider"),Sl(8,"div",10),Jx(9),sg(),Sl(10,"po-button",11),ht("p-click",function(){let o=Xy(l).$implicit,d=Tx();return Qy(d.redirectLink(o.link))}),sg()()()();}if(n&2){let l=K.$implicit;fo("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Vp(2),fo("background","white"),Vp(2),yw("",l.date," by ",l.author),Vp(2),vw(l.title),Vp(3),vw(l.description);}}var ve=(()=>{class n{slideComponent;nextLabel="Next";sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}nextBtn(){this.slideComponent.next();}previousBtn(){this.slideComponent.previous();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls"]],viewQuery:function(a,o){if(a&1&&ql(We,7),a&2){let d;lo(d=uo())&&(o.slideComponent=d.first);}},standalone:false,decls:6,vars:3,consts:[["slideComponent",""],["p-height","450","p-interval","0","p-hide-arrows","",3,"p-slides"],["p-slide-content-template",""],[1,"po-row"],["p-label","Previous",1,"po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],["p-label","Next",1,"po-offset-lg-4","po-offset-xl-4","po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],[1,"sample-background-image"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){if(a&1&&(Sl(0,"po-slide",1,0),QE(2,Ne,11,12,"ng-template",2),sg(),Sl(3,"div",3)(4,"po-button",4),ht("p-click",function(){return o.previousBtn()}),sg(),Sl(5,"po-button",5),ht("p-click",function(){return o.nextBtn()}),sg()()),a&2){let d=xx(1);tw("p-slides",o.sampleItems),Vp(4),tw("p-disabled",d.getCurrentSlideIndex()===0),Vp(),tw("p-disabled",d.getCurrentSlideIndex()===o.sampleItems.length-1);}},dependencies:[Qt,mv,fNe,Ome],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n}),ye=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Slide - External Controls"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-external-controls"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Oe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ve],encapsulation:2})}return n})();var xe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-doc"]],standalone:false,decls:279,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-slide-content-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoSlideItem"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoSlideModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-slide"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoSlideComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Sl(18,"strong")(19,"a",6),Jx(20,"p-slide-content-template"),sg()(),Jx(21,"."),sg(),Sl(22,"h4"),Jx(23,"Boas pr\xE1ticas:"),sg(),Sl(24,"ul")(25,"li"),Jx(26,"Utilizar imagens no slide, mesmo quando possui conte\xFAdo personalizado."),sg(),Sl(27,"li"),Jx(28,"Evitar utilizar apenas um slide isolado, utilize pelo menos dois."),sg(),Sl(29,"li"),Jx(30,"Evitar utilizar mais de 5 slides, pois a ideia do componente \xE9 destacar apenas informa\xE7\xF5es importantes."),sg()()(),Sl(31,"div",7)(32,"h4",8),Jx(33,"Seletor"),sg(),Sl(34,"pre",9),Jx(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),sg()(),Sl(36,"h4",10),Jx(37,"Propriedades"),sg(),Sl(38,"table",11)(39,"tr",12)(40,"th",13),Jx(41,"Nome"),sg(),Sl(42,"th",13),Jx(43,"Tipo"),sg(),Sl(44,"th",13),Jx(45,"Padr\xE3o"),sg(),Sl(46,"th",13),Jx(47,"Descri\xE7\xE3o"),sg()(),Sl(48,"tr",14)(49,"td",15)(50,"div",16)(51,"span",17),Jx(52," p-height"),Wl(53,"br"),sg()()(),Sl(54,"td",18)(55,"code",19),Jx(56,"number"),sg()(),Sl(57,"td",20)(58,"p")(59,"code"),Jx(60,"336"),sg()()(),Sl(61,"td",21)(62,"em")(63,"strong"),Jx(64,"(opcional)"),sg()(),Sl(65,"p"),Jx(66,"Altura do po-slide, caso seja slide com template customizado, n\xE3o assume o valor "),Sl(67,"code"),Jx(68,"default"),sg(),Jx(69,"."),sg()()(),Sl(70,"tr",14)(71,"td",15)(72,"div",16)(73,"span",17),Jx(74," p-hide-arrows"),Wl(75,"br"),sg()()(),Sl(76,"td",18)(77,"code",22),Jx(78,"boolean"),sg()(),Sl(79,"td",20)(80,"p")(81,"code"),Jx(82,"false"),sg()()(),Sl(83,"td",21)(84,"em")(85,"strong"),Jx(86,"(opcional)"),sg()(),Sl(87,"p"),Jx(88,"Define a exibi\xE7\xE3o das setas de navega\xE7\xE3o."),sg()()(),Sl(89,"tr",14)(90,"td",15)(91,"div",16)(92,"span",17),Jx(93," p-interval"),Wl(94,"br"),sg()()(),Sl(95,"td",18)(96,"code",19),Jx(97,"number"),sg()(),Sl(98,"td",20)(99,"p")(100,"code"),Jx(101,"4000"),sg()()(),Sl(102,"td",21)(103,"em")(104,"strong"),Jx(105,"(opcional)"),sg()(),Sl(106,"p"),Jx(107,"Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que "),Sl(108,"code"),Jx(109,"1000"),sg(),Jx(110," os slides n\xE3o trocam automaticamente."),sg()()(),Sl(111,"tr",14)(112,"td",15)(113,"div",16)(114,"span",17),Jx(115," p-slides"),Wl(116,"br"),sg()()(),Sl(117,"td",18)(118,"code",23),Jx(119,"Array<PoSlideItem "),sg(),Sl(120,"code",24),Jx(121," string "),sg(),Sl(122,"code",25),Jx(123," any>"),sg()(),Sl(124,"td",20),Jx(125,"-"),sg(),Sl(126,"td",21)(127,"p"),Jx(128,"Array de imagens ou dados para o slide, pode ser de tr\xEAs formas:"),sg(),Sl(129,"ul")(130,"li"),Jx(131,"Array implementando objetos da interface "),Sl(132,"code"),Jx(133,"PoSlideItem"),sg(),Jx(134,":"),Sl(135,"pre")(136,"code"),Jx(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),sg()()(),Sl(138,"li"),Jx(139,"Array de "),Sl(140,"code"),Jx(141,"strings"),sg(),Jx(142," com os caminhos das imagens:"),Sl(143,"pre")(144,"code"),Jx(145,`['/assets/image-1', '/assets/image-2' ]
`),sg()()(),Sl(146,"li"),Jx(147,"Array com lista de itens (para utilizar template):"),Sl(148,"pre")(149,"code"),Jx(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),sg()()()(),Sl(151,"blockquote")(152,"p"),Jx(153,"As setas de navega\xE7\xE3o e o controle com c\xEDrculos apenas ser\xE3o renderizados caso possua mais de um slide."),sg()()()()(),Sl(154,"h3",10),Jx(155,"M\xE9todos"),sg(),Sl(156,"table",26)(157,"tr",14)(158,"th",27)(159,"div",16)(160,"h4")(161,"span",17),Jx(162," getCurrentSlideIndex "),sg()()()()(),Sl(163,"tr",21)(164,"td",21)(165,"p"),Jx(166,"M\xE9todo que retorna o index do slide atual"),sg(),Sl(167,"pre")(168,"code"),Jx(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),sg()()()()(),Wl(170,"br"),Sl(171,"table",26)(172,"tr",14)(173,"th",27)(174,"div",16)(175,"h4")(176,"span",17),Jx(177," next "),sg()()()()(),Sl(178,"tr",21)(179,"td",21)(180,"p"),Jx(181,"M\xE9todo para chamar o pr\xF3ximo slide."),sg(),Sl(182,"pre")(183,"code"),Jx(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),sg()()()()(),Wl(185,"br"),Sl(186,"table",26)(187,"tr",14)(188,"th",27)(189,"div",16)(190,"h4")(191,"span",17),Jx(192," previous "),sg()()()()(),Sl(193,"tr",21)(194,"td",21)(195,"p"),Jx(196,"M\xE9todo para chamar o slide anterior."),sg(),Sl(197,"pre")(198,"code"),Jx(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),sg()()()()(),Wl(200,"br"),Sl(201,"h3"),Jx(202,"Interfaces"),sg(),Sl(203,"h4",28)(204,"code",5),Jx(205,"PoSlideItem"),sg()(),Sl(206,"div",2)(207,"p"),Jx(208,"Interface que define cada objeto do "),Sl(209,"code"),Jx(210,"PoSlideItem"),sg(),Jx(211,"."),sg()(),Sl(212,"h4",10),Jx(213,"Propriedades"),sg(),Sl(214,"table",11)(215,"tr",12)(216,"th",13),Jx(217,"Nome"),sg(),Sl(218,"th",13),Jx(219,"Tipo"),sg(),Sl(220,"th",13),Jx(221,"Descri\xE7\xE3o"),sg()(),Sl(222,"tr",14)(223,"td",15)(224,"div",16)(225,"span",17),Jx(226," action"),Wl(227,"br"),sg()()(),Sl(228,"td",18)(229,"code",29),Jx(230,"Function"),sg()(),Sl(231,"td",21)(232,"em")(233,"strong"),Jx(234,"(opcional)"),sg()(),Sl(235,"p"),Jx(236,"A\xE7\xE3o executada ao clicar no slide caso n\xE3o tenha link definido."),sg()()(),Sl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),Jx(241," alt"),Wl(242,"br"),sg()()(),Sl(243,"td",18)(244,"code",24),Jx(245,"string"),sg()(),Sl(246,"td",21)(247,"em")(248,"strong"),Jx(249,"(opcional)"),sg()(),Sl(250,"p"),Jx(251,"Texto que aparece quando a imagem n\xE3o \xE9 encontrada."),sg()()(),Sl(252,"tr",14)(253,"td",15)(254,"div",16)(255,"span",17),Jx(256," image"),Wl(257,"br"),sg()()(),Sl(258,"td",18)(259,"code",24),Jx(260,"string"),sg()(),Sl(261,"td",21)(262,"p"),Jx(263,"Define o caminho da imagem."),sg()()(),Sl(264,"tr",14)(265,"td",15)(266,"div",16)(267,"span",17),Jx(268," link"),Wl(269,"br"),sg()()(),Sl(270,"td",18)(271,"code",24),Jx(272,"string"),sg()(),Sl(273,"td",21)(274,"em")(275,"strong"),Jx(276,"(opcional)"),sg()(),Sl(277,"p"),Jx(278,"Link interno ou externo que ser\xE1 aberto ao clicar no slide."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var Ee=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-slide-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-slide-basic-view")(6,"sample-po-slide-labs-view")(7,"sample-po-slide-useful-articles-view")(8,"sample-po-slide-landscapes-view")(9,"sample-po-slide-external-controls-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ue,ge,be,Ce,ye,xe],encapsulation:2})}return n})();var Ge=[{path:"",component:Ee}],Pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[pL.forChild(Ge),pL]})}return n})();var Mt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[ar,Pe]})}return n})();export{Mt as DocPoSlideModule};