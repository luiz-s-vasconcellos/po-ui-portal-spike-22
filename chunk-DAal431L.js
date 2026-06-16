import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,d4 as FF,N as Ul,S as YE,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,aO as Yo,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,d5 as wd,a2 as GE,aQ as dt,as as $l,at as uo,au as fo,a3 as D3,bY as ho,d6 as dw,F as uw,az as Qy,aB as $x,aA as Jy,ax as gx,c3 as zo}from'./main-6SPFG3VI.js';var De=()=>["/assets/graphics/landscape-01.jpeg","/assets/graphics/landscape-02.jpeg"],ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-slides"]],template:function(a,o){a&1&&Ul(0,"po-slide",0),a&2&&YE("p-slides",Qx(1,De));},dependencies:[FF],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n}),Se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Slide Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-slide-basic/sample-po-slide-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-slide-basic/sample-po-slide-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-slide-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Be,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return n})();var Ce=(()=>{class n{poNotification=f(Bp);height;interval;slideItem;slideItems;ngOnInit(){this.restore();}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm();}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm();}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0};}showAction(l){this.poNotification.success(`Slide clicked: ${l}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs"]],standalone:false,decls:19,vars:10,consts:[["slideItemForm","ngForm"],["slidePropertiesForm","ngForm"],[3,"p-height","p-interval","p-slides"],["p-label","Slide Item"],[1,"po-row"],["name","slideAction","p-clean","","p-label","Slide action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideAlt","p-clean","","p-label","Slide alt",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideImage","p-clean","","p-help","Ex.: https://lorempixel.com/1024/768/","p-label","Slide image","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideLink","p-clean","","p-help","Ex.: https://po-ui.io/home","p-label","Slide link",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add slide",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Properties"],["name","interval","p-clean","","p-help","Ex.: 7000","p-label","Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-help","Ex.: 300","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let m=lx();Ul(0,"po-slide",2)(1,"po-divider",3),wl(2,"form",null,0)(4,"div",4)(5,"po-input",5),pw("ngModelChange",function(r){return Qy(m),$x(o.slideItem.action,r)||(o.slideItem.action=r),Jy(r)}),ng(),$0(),wl(6,"po-input",6),pw("ngModelChange",function(r){return Qy(m),$x(o.slideItem.alt,r)||(o.slideItem.alt=r),Jy(r)}),ng(),$0(),wl(7,"po-input",7),pw("ngModelChange",function(r){return Qy(m),$x(o.slideItem.image,r)||(o.slideItem.image=r),Jy(r)}),ng(),$0(),wl(8,"po-input",8),pw("ngModelChange",function(r){return Qy(m),$x(o.slideItem.link,r)||(o.slideItem.link=r),Jy(r)}),ng(),$0(),ng(),wl(9,"div",4)(10,"po-button",9),ut("p-click",function(){return o.addSlide()}),ng()()(),Ul(11,"po-divider",10),wl(12,"form",null,1)(14,"div",4)(15,"po-input",11),pw("ngModelChange",function(r){return Qy(m),$x(o.interval,r)||(o.interval=r),Jy(r)}),ng(),$0(),wl(16,"po-input",12),pw("ngModelChange",function(r){return Qy(m),$x(o.height,r)||(o.height=r),Jy(r)}),ng(),$0(),ng(),wl(17,"div",4)(18,"po-button",13),ut("p-click",function(){Qy(m);let r=_x(3),Me=_x(13);return r.reset(),Me.reset(),Jy(o.restore())}),ng()()();}if(a&2){let m=_x(3);YE("p-height",o.height)("p-interval",o.interval)("p-slides",o.slideItems),Pp(5),hw("ngModel",o.slideItem.action),G0(),Pp(),hw("ngModel",o.slideItem.alt),G0(),Pp(),hw("ngModel",o.slideItem.image),G0(),Pp(),hw("ngModel",o.slideItem.link),G0(),Pp(2),YE("p-disabled",m.invalid),Pp(5),hw("ngModel",o.interval),G0(),Pp(),hw("ngModel",o.height),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Yo,FF],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n}),ve=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Slide Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-slide-labs/sample-po-slide-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-slide-labs/sample-po-slide-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-slide-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Fe,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ce],encapsulation:2})}return n})();function He(n,X){if(n&1){let l=lx();wl(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),Ux(4),ng(),wl(5,"div",6),Ux(6),ng(),Ul(7,"po-divider"),wl(8,"div",7),Ux(9),ng(),wl(10,"po-button",8),ut("p-click",function(){let o=Qy(l).$implicit,m=gx();return Jy(m.redirectLink(o.link))}),ng()()()();}if(n&2){let l=X.$implicit;ho("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Pp(2),ho("background","white"),Pp(2),dw("",l.date," by ",l.author),Pp(2),uw(l.title),Pp(3),uw(l.description);}}var Ee=(()=>{class n{sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles"]],standalone:false,decls:2,vars:1,consts:[["p-height","450",3,"p-slides"],["p-slide-content-template",""],[1,"sample-background-image"],[1,"po-row"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){a&1&&(wl(0,"po-slide",0),GE(1,He,11,12,"ng-template",1),ng()),a&2&&YE("p-slides",o.sampleItems);},dependencies:[Pe$1,di,FF,wd],encapsulation:2,changeDetection:1})}return n})();var We=n=>({"docs-sample-code-tabs":n}),xe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Slide - Useful articles"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-slide-useful-articles"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,We,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return n})();var ye=(()=>{class n{modal;landscapes=[{image:"/assets/graphics/landscape-01.jpeg",alt:"On the road",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-02.jpeg",alt:"Birds flying over trees",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-03.jpeg",alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes"]],viewQuery:function(a,o){if(a&1&&$l(zo,7),a&2){let m;uo(m=fo())&&(o.modal=m.first);}},standalone:false,decls:3,vars:2,consts:[["p-interval","0",3,"p-slides"],["p-title","Landscape detail"]],template:function(a,o){a&1&&(Ul(0,"po-slide",0),wl(1,"po-modal",1),Ux(2),ng()),a&2&&(YE("p-slides",o.landscapes),Pp(2),cg(" ",o.modalText,`
`));},dependencies:[dt,FF],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n}),we=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Slide - Landscapes"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-slide-landscapes"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ue,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return n})();var Ge=["slideComponent"];function Qe(n,X){if(n&1){let l=lx();wl(0,"div",6)(1,"div",3)(2,"div",7)(3,"div",8),Ux(4),ng(),wl(5,"div",9),Ux(6),ng(),Ul(7,"po-divider"),wl(8,"div",10),Ux(9),ng(),wl(10,"po-button",11),ut("p-click",function(){let o=Qy(l).$implicit,m=gx();return Jy(m.redirectLink(o.link))}),ng()()()();}if(n&2){let l=X.$implicit;ho("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Pp(2),ho("background","white"),Pp(2),dw("",l.date," by ",l.author),Pp(2),uw(l.title),Pp(3),uw(l.description);}}var Pe=(()=>{class n{slideComponent;nextLabel="Next";sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}nextBtn(){this.slideComponent.next();}previousBtn(){this.slideComponent.previous();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls"]],viewQuery:function(a,o){if(a&1&&$l(Ge,7),a&2){let m;uo(m=fo())&&(o.slideComponent=m.first);}},standalone:false,decls:6,vars:3,consts:[["slideComponent",""],["p-height","450","p-interval","0","p-hide-arrows","",3,"p-slides"],["p-slide-content-template",""],[1,"po-row"],["p-label","Previous",1,"po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],["p-label","Next",1,"po-offset-lg-4","po-offset-xl-4","po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],[1,"sample-background-image"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){if(a&1&&(wl(0,"po-slide",1,0),GE(2,Qe,11,12,"ng-template",2),ng(),wl(3,"div",3)(4,"po-button",4),ut("p-click",function(){return o.previousBtn()}),ng(),wl(5,"po-button",5),ut("p-click",function(){return o.nextBtn()}),ng()()),a&2){let m=_x(1);YE("p-slides",o.sampleItems),Pp(4),YE("p-disabled",m.getCurrentSlideIndex()===0),Pp(),YE("p-disabled",m.getCurrentSlideIndex()===o.sampleItems.length-1);}},dependencies:[Pe$1,di,FF,wd],encapsulation:2,changeDetection:1})}return n})();var Je=n=>({"docs-sample-code-tabs":n}),_e=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Slide - External Controls"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-slide-external-controls"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Je,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Pe],encapsulation:2})}return n})();var ke=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-doc"]],standalone:false,decls:298,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-slide-content-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoSlideItem"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoSlideModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-slide"),ng(),Ux(9,"."),ng(),wl(10,"blockquote")(11,"p"),Ux(12,"Para o correto funcionamento do componente "),wl(13,"code"),Ux(14,"po-slide"),ng(),Ux(15,", deve ser importado o m\xF3dulo "),wl(16,"code"),Ux(17,"BrowserAnimationsModule"),ng(),Ux(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),ng()(),wl(19,"p"),Ux(20,"M\xF3dulo da aplica\xE7\xE3o:"),ng(),wl(21,"pre")(22,"code"),Ux(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),ng()(),wl(24,"p"),Ux(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),ng(),wl(26,"pre")(27,"code"),Ux(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),ng()()(),wl(29,"h3",3),Ux(30,"Componente"),ng(),wl(31,"h4",4)(32,"code",5),Ux(33,"PoSlideComponent"),ng()(),wl(34,"div",2)(35,"p"),Ux(36,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),wl(37,"strong")(38,"a",6),Ux(39,"p-slide-content-template"),ng()(),Ux(40,"."),ng(),wl(41,"h4"),Ux(42,"Boas pr\xE1ticas:"),ng(),wl(43,"ul")(44,"li"),Ux(45,"Utilizar imagens no slide, mesmo quando possui conte\xFAdo personalizado."),ng(),wl(46,"li"),Ux(47,"Evitar utilizar apenas um slide isolado, utilize pelo menos dois."),ng(),wl(48,"li"),Ux(49,"Evitar utilizar mais de 5 slides, pois a ideia do componente \xE9 destacar apenas informa\xE7\xF5es importantes."),ng()()(),wl(50,"div",7)(51,"h4",8),Ux(52,"Seletor"),ng(),wl(53,"pre",9),Ux(54,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),ng()(),wl(55,"h4",10),Ux(56,"Propriedades"),ng(),wl(57,"table",11)(58,"tr",12)(59,"th",13),Ux(60,"Nome"),ng(),wl(61,"th",13),Ux(62,"Tipo"),ng(),wl(63,"th",13),Ux(64,"Padr\xE3o"),ng(),wl(65,"th",13),Ux(66,"Descri\xE7\xE3o"),ng()(),wl(67,"tr",14)(68,"td",15)(69,"div",16)(70,"span",17),Ux(71," p-height"),Ul(72,"br"),ng()()(),wl(73,"td",18)(74,"code",19),Ux(75,"number"),ng()(),wl(76,"td",20)(77,"p")(78,"code"),Ux(79,"336"),ng()()(),wl(80,"td",21)(81,"em")(82,"strong"),Ux(83,"(opcional)"),ng()(),wl(84,"p"),Ux(85,"Altura do po-slide, caso seja slide com template customizado, n\xE3o assume o valor "),wl(86,"code"),Ux(87,"default"),ng(),Ux(88,"."),ng()()(),wl(89,"tr",14)(90,"td",15)(91,"div",16)(92,"span",17),Ux(93," p-hide-arrows"),Ul(94,"br"),ng()()(),wl(95,"td",18)(96,"code",22),Ux(97,"boolean"),ng()(),wl(98,"td",20)(99,"p")(100,"code"),Ux(101,"false"),ng()()(),wl(102,"td",21)(103,"em")(104,"strong"),Ux(105,"(opcional)"),ng()(),wl(106,"p"),Ux(107,"Define a exibi\xE7\xE3o das setas de navega\xE7\xE3o."),ng()()(),wl(108,"tr",14)(109,"td",15)(110,"div",16)(111,"span",17),Ux(112," p-interval"),Ul(113,"br"),ng()()(),wl(114,"td",18)(115,"code",19),Ux(116,"number"),ng()(),wl(117,"td",20)(118,"p")(119,"code"),Ux(120,"4000"),ng()()(),wl(121,"td",21)(122,"em")(123,"strong"),Ux(124,"(opcional)"),ng()(),wl(125,"p"),Ux(126,"Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que "),wl(127,"code"),Ux(128,"1000"),ng(),Ux(129," os slides n\xE3o trocam automaticamente."),ng()()(),wl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),Ux(134," p-slides"),Ul(135,"br"),ng()()(),wl(136,"td",18)(137,"code",23),Ux(138,"Array<PoSlideItem "),ng(),wl(139,"code",24),Ux(140," string "),ng(),wl(141,"code",25),Ux(142," any>"),ng()(),wl(143,"td",20),Ux(144,"-"),ng(),wl(145,"td",21)(146,"p"),Ux(147,"Array de imagens ou dados para o slide, pode ser de tr\xEAs formas:"),ng(),wl(148,"ul")(149,"li"),Ux(150,"Array implementando objetos da interface "),wl(151,"code"),Ux(152,"PoSlideItem"),ng(),Ux(153,":"),wl(154,"pre")(155,"code"),Ux(156,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),ng()()(),wl(157,"li"),Ux(158,"Array de "),wl(159,"code"),Ux(160,"strings"),ng(),Ux(161," com os caminhos das imagens:"),wl(162,"pre")(163,"code"),Ux(164,`['/assets/image-1', '/assets/image-2' ]
`),ng()()(),wl(165,"li"),Ux(166,"Array com lista de itens (para utilizar template):"),wl(167,"pre")(168,"code"),Ux(169,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),ng()()()(),wl(170,"blockquote")(171,"p"),Ux(172,"As setas de navega\xE7\xE3o e o controle com c\xEDrculos apenas ser\xE3o renderizados caso possua mais de um slide."),ng()()()()(),wl(173,"h3",10),Ux(174,"M\xE9todos"),ng(),wl(175,"table",26)(176,"tr",14)(177,"th",27)(178,"div",16)(179,"h4")(180,"span",17),Ux(181," getCurrentSlideIndex "),ng()()()()(),wl(182,"tr",21)(183,"td",21)(184,"p"),Ux(185,"M\xE9todo que retorna o index do slide atual"),ng(),wl(186,"pre")(187,"code"),Ux(188,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),ng()()()()(),Ul(189,"br"),wl(190,"table",26)(191,"tr",14)(192,"th",27)(193,"div",16)(194,"h4")(195,"span",17),Ux(196," next "),ng()()()()(),wl(197,"tr",21)(198,"td",21)(199,"p"),Ux(200,"M\xE9todo para chamar o pr\xF3ximo slide."),ng(),wl(201,"pre")(202,"code"),Ux(203,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),ng()()()()(),Ul(204,"br"),wl(205,"table",26)(206,"tr",14)(207,"th",27)(208,"div",16)(209,"h4")(210,"span",17),Ux(211," previous "),ng()()()()(),wl(212,"tr",21)(213,"td",21)(214,"p"),Ux(215,"M\xE9todo para chamar o slide anterior."),ng(),wl(216,"pre")(217,"code"),Ux(218,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),ng()()()()(),Ul(219,"br"),wl(220,"h3"),Ux(221,"Interfaces"),ng(),wl(222,"h4",28)(223,"code",5),Ux(224,"PoSlideItem"),ng()(),wl(225,"div",2)(226,"p"),Ux(227,"Interface que define cada objeto do "),wl(228,"code"),Ux(229,"PoSlideItem"),ng(),Ux(230,"."),ng()(),wl(231,"h4",10),Ux(232,"Propriedades"),ng(),wl(233,"table",11)(234,"tr",12)(235,"th",13),Ux(236,"Nome"),ng(),wl(237,"th",13),Ux(238,"Tipo"),ng(),wl(239,"th",13),Ux(240,"Descri\xE7\xE3o"),ng()(),wl(241,"tr",14)(242,"td",15)(243,"div",16)(244,"span",17),Ux(245," action"),Ul(246,"br"),ng()()(),wl(247,"td",18)(248,"code",29),Ux(249,"Function"),ng()(),wl(250,"td",21)(251,"em")(252,"strong"),Ux(253,"(opcional)"),ng()(),wl(254,"p"),Ux(255,"A\xE7\xE3o executada ao clicar no slide caso n\xE3o tenha link definido."),ng()()(),wl(256,"tr",14)(257,"td",15)(258,"div",16)(259,"span",17),Ux(260," alt"),Ul(261,"br"),ng()()(),wl(262,"td",18)(263,"code",24),Ux(264,"string"),ng()(),wl(265,"td",21)(266,"em")(267,"strong"),Ux(268,"(opcional)"),ng()(),wl(269,"p"),Ux(270,"Texto que aparece quando a imagem n\xE3o \xE9 encontrada."),ng()()(),wl(271,"tr",14)(272,"td",15)(273,"div",16)(274,"span",17),Ux(275," image"),Ul(276,"br"),ng()()(),wl(277,"td",18)(278,"code",24),Ux(279,"string"),ng()(),wl(280,"td",21)(281,"p"),Ux(282,"Define o caminho da imagem."),ng()()(),wl(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),Ux(287," link"),Ul(288,"br"),ng()()(),wl(289,"td",18)(290,"code",24),Ux(291,"string"),ng()(),wl(292,"td",21)(293,"em")(294,"strong"),Ux(295,"(opcional)"),ng()(),wl(296,"p"),Ux(297,"Link interno ou externo que ser\xE1 aberto ao clicar no slide."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var Te=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-slide-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-slide-basic-view")(6,"sample-po-slide-labs-view")(7,"sample-po-slide-useful-articles-view")(8,"sample-po-slide-landscapes-view")(9,"sample-po-slide-external-controls-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,Se,ve,xe,we,_e,ke],encapsulation:2})}return n})();var Ze=[{path:"",component:Te}],Ie=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(Ze),vL]})}return n})();var Ht=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,Ie]})}return n})();export{Ht as DocPoSlideModule};