import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,dD as kNe,R as Hl,Z as ZE,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,dE as $me,a2 as WE,b5 as Ko,av as zl,aw as uo,ax as fo,a3 as SNe,cy as ho,dF as fw,I as dw,aD as Jy,aT as Zx,aE as e_,aA as Ex}from'./main-OS7VVRJY.js';var _e=()=>["/assets/graphics/landscape-01.jpeg","/assets/graphics/landscape-02.jpeg"],ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-slides"]],template:function(a,o){a&1&&Hl(0,"po-slide",0),a&2&&ZE("p-slides",iN(1,_e));},dependencies:[kNe],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Slide Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-slide-basic/sample-po-slide-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-slide-basic/sample-po-slide-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-slide-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return n})();var he=(()=>{class n{poNotification=f(Xp);height;interval;slideItem;slideItems;ngOnInit(){this.restore();}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm();}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm();}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0};}showAction(l){this.poNotification.success(`Slide clicked: ${l}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs"]],standalone:false,decls:19,vars:10,consts:[["slideItemForm","ngForm"],["slidePropertiesForm","ngForm"],[3,"p-height","p-interval","p-slides"],["p-label","Slide Item"],[1,"po-row"],["name","slideAction","p-clean","","p-label","Slide action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideAlt","p-clean","","p-label","Slide alt",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideImage","p-clean","","p-help","Ex.: https://lorempixel.com/1024/768/","p-label","Slide image","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideLink","p-clean","","p-help","Ex.: https://po-ui.io/home","p-label","Slide link",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add slide",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Properties"],["name","interval","p-clean","","p-help","Ex.: 7000","p-label","Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-help","Ex.: 300","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let m=gx();Hl(0,"po-slide",2)(1,"po-divider",3),Cl(2,"form",null,0)(4,"div",4)(5,"po-input",5),gw("ngModelChange",function(r){return Jy(m),Zx(o.slideItem.action,r)||(o.slideItem.action=r),e_(r)}),og(),Z0(),Cl(6,"po-input",6),gw("ngModelChange",function(r){return Jy(m),Zx(o.slideItem.alt,r)||(o.slideItem.alt=r),e_(r)}),og(),Z0(),Cl(7,"po-input",7),gw("ngModelChange",function(r){return Jy(m),Zx(o.slideItem.image,r)||(o.slideItem.image=r),e_(r)}),og(),Z0(),Cl(8,"po-input",8),gw("ngModelChange",function(r){return Jy(m),Zx(o.slideItem.link,r)||(o.slideItem.link=r),e_(r)}),og(),Z0(),og(),Cl(9,"div",4)(10,"po-button",9),dt("p-click",function(){return o.addSlide()}),og()()(),Hl(11,"po-divider",10),Cl(12,"form",null,1)(14,"div",4)(15,"po-input",11),gw("ngModelChange",function(r){return Jy(m),Zx(o.interval,r)||(o.interval=r),e_(r)}),og(),Z0(),Cl(16,"po-input",12),gw("ngModelChange",function(r){return Jy(m),Zx(o.height,r)||(o.height=r),e_(r)}),og(),Z0(),og(),Cl(17,"div",4)(18,"po-button",13),dt("p-click",function(){Jy(m);let r=Sx(3),Pe=Sx(13);return r.reset(),Pe.reset(),e_(o.restore())}),og()()();}if(a&2){let m=Sx(3);ZE("p-height",o.height)("p-interval",o.interval)("p-slides",o.slideItems),Lp(5),pw("ngModel",o.slideItem.action),X0(),Lp(),pw("ngModel",o.slideItem.alt),X0(),Lp(),pw("ngModel",o.slideItem.image),X0(),Lp(),pw("ngModel",o.slideItem.link),X0(),Lp(2),ZE("p-disabled",m.invalid),Lp(5),pw("ngModel",o.interval),X0(),Lp(),pw("ngModel",o.height),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,kNe],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n}),ge=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Slide Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-slide-labs/sample-po-slide-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-slide-labs/sample-po-slide-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-slide-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return n})();function Be(n,K){if(n&1){let l=gx();Cl(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),qx(4),og(),Cl(5,"div",6),qx(6),og(),Hl(7,"po-divider"),Cl(8,"div",7),qx(9),og(),Cl(10,"po-button",8),dt("p-click",function(){let o=Jy(l).$implicit,m=Ex();return e_(m.redirectLink(o.link))}),og()()()();}if(n&2){let l=K.$implicit;ho("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Lp(2),ho("background","white"),Lp(2),fw("",l.date," by ",l.author),Lp(2),dw(l.title),Lp(3),dw(l.description);}}var Se=(()=>{class n{sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles"]],standalone:false,decls:2,vars:1,consts:[["p-height","450",3,"p-slides"],["p-slide-content-template",""],[1,"sample-background-image"],[1,"po-row"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){a&1&&(Cl(0,"po-slide",0),WE(1,Be,11,12,"ng-template",1),og()),a&2&&ZE("p-slides",o.sampleItems);},dependencies:[Qt,_v,kNe,$me],encapsulation:2,changeDetection:1})}return n})();var Ae=n=>({"docs-sample-code-tabs":n}),be=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Slide - Useful articles"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-slide-useful-articles"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ae,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:"/assets/graphics/landscape-01.jpeg",alt:"On the road",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-02.jpeg",alt:"Birds flying over trees",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-03.jpeg",alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes"]],viewQuery:function(a,o){if(a&1&&zl(Ko,7),a&2){let m;uo(m=fo())&&(o.modal=m.first);}},standalone:false,decls:3,vars:2,consts:[["p-interval","0",3,"p-slides"],["p-title","Landscape detail"]],template:function(a,o){a&1&&(Hl(0,"po-slide",0),Cl(1,"po-modal",1),qx(2),og()),a&2&&(ZE("p-slides",o.landscapes),Lp(2),dg(" ",o.modalText,`
`));},dependencies:[Ko,kNe],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n}),Ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Slide - Landscapes"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-slide-landscapes"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ze,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,fe],encapsulation:2})}return n})();var Ne=["slideComponent"];function We(n,K){if(n&1){let l=gx();Cl(0,"div",6)(1,"div",3)(2,"div",7)(3,"div",8),qx(4),og(),Cl(5,"div",9),qx(6),og(),Hl(7,"po-divider"),Cl(8,"div",10),qx(9),og(),Cl(10,"po-button",11),dt("p-click",function(){let o=Jy(l).$implicit,m=Ex();return e_(m.redirectLink(o.link))}),og()()()();}if(n&2){let l=K.$implicit;ho("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Lp(2),ho("background","white"),Lp(2),fw("",l.date," by ",l.author),Lp(2),dw(l.title),Lp(3),dw(l.description);}}var ve=(()=>{class n{slideComponent;nextLabel="Next";sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}nextBtn(){this.slideComponent.next();}previousBtn(){this.slideComponent.previous();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls"]],viewQuery:function(a,o){if(a&1&&zl(Ne,7),a&2){let m;uo(m=fo())&&(o.slideComponent=m.first);}},standalone:false,decls:6,vars:3,consts:[["slideComponent",""],["p-height","450","p-interval","0","p-hide-arrows","",3,"p-slides"],["p-slide-content-template",""],[1,"po-row"],["p-label","Previous",1,"po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],["p-label","Next",1,"po-offset-lg-4","po-offset-xl-4","po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],[1,"sample-background-image"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){if(a&1&&(Cl(0,"po-slide",1,0),WE(2,We,11,12,"ng-template",2),og(),Cl(3,"div",3)(4,"po-button",4),dt("p-click",function(){return o.previousBtn()}),og(),Cl(5,"po-button",5),dt("p-click",function(){return o.nextBtn()}),og()()),a&2){let m=Sx(1);ZE("p-slides",o.sampleItems),Lp(4),ZE("p-disabled",m.getCurrentSlideIndex()===0),Lp(),ZE("p-disabled",m.getCurrentSlideIndex()===o.sampleItems.length-1);}},dependencies:[Qt,_v,kNe,$me],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n}),Ee=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Slide - External Controls"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-slide-external-controls"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Oe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ve],encapsulation:2})}return n})();var xe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-doc"]],standalone:false,decls:298,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-slide-content-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoSlideItem"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoSlideModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-slide"),og(),qx(9,"."),og(),Cl(10,"blockquote")(11,"p"),qx(12,"Para o correto funcionamento do componente "),Cl(13,"code"),qx(14,"po-slide"),og(),qx(15,", deve ser importado o m\xF3dulo "),Cl(16,"code"),qx(17,"BrowserAnimationsModule"),og(),qx(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),og()(),Cl(19,"p"),qx(20,"M\xF3dulo da aplica\xE7\xE3o:"),og(),Cl(21,"pre")(22,"code"),qx(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),og()(),Cl(24,"p"),qx(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),og(),Cl(26,"pre")(27,"code"),qx(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),og()()(),Cl(29,"h3",3),qx(30,"Componente"),og(),Cl(31,"h4",4)(32,"code",5),qx(33,"PoSlideComponent"),og()(),Cl(34,"div",2)(35,"p"),qx(36,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Cl(37,"strong")(38,"a",6),qx(39,"p-slide-content-template"),og()(),qx(40,"."),og(),Cl(41,"h4"),qx(42,"Boas pr\xE1ticas:"),og(),Cl(43,"ul")(44,"li"),qx(45,"Utilizar imagens no slide, mesmo quando possui conte\xFAdo personalizado."),og(),Cl(46,"li"),qx(47,"Evitar utilizar apenas um slide isolado, utilize pelo menos dois."),og(),Cl(48,"li"),qx(49,"Evitar utilizar mais de 5 slides, pois a ideia do componente \xE9 destacar apenas informa\xE7\xF5es importantes."),og()()(),Cl(50,"div",7)(51,"h4",8),qx(52,"Seletor"),og(),Cl(53,"pre",9),qx(54,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),og()(),Cl(55,"h4",10),qx(56,"Propriedades"),og(),Cl(57,"table",11)(58,"tr",12)(59,"th",13),qx(60,"Nome"),og(),Cl(61,"th",13),qx(62,"Tipo"),og(),Cl(63,"th",13),qx(64,"Padr\xE3o"),og(),Cl(65,"th",13),qx(66,"Descri\xE7\xE3o"),og()(),Cl(67,"tr",14)(68,"td",15)(69,"div",16)(70,"span",17),qx(71," p-height"),Hl(72,"br"),og()()(),Cl(73,"td",18)(74,"code",19),qx(75,"number"),og()(),Cl(76,"td",20)(77,"p")(78,"code"),qx(79,"336"),og()()(),Cl(80,"td",21)(81,"em")(82,"strong"),qx(83,"(opcional)"),og()(),Cl(84,"p"),qx(85,"Altura do po-slide, caso seja slide com template customizado, n\xE3o assume o valor "),Cl(86,"code"),qx(87,"default"),og(),qx(88,"."),og()()(),Cl(89,"tr",14)(90,"td",15)(91,"div",16)(92,"span",17),qx(93," p-hide-arrows"),Hl(94,"br"),og()()(),Cl(95,"td",18)(96,"code",22),qx(97,"boolean"),og()(),Cl(98,"td",20)(99,"p")(100,"code"),qx(101,"false"),og()()(),Cl(102,"td",21)(103,"em")(104,"strong"),qx(105,"(opcional)"),og()(),Cl(106,"p"),qx(107,"Define a exibi\xE7\xE3o das setas de navega\xE7\xE3o."),og()()(),Cl(108,"tr",14)(109,"td",15)(110,"div",16)(111,"span",17),qx(112," p-interval"),Hl(113,"br"),og()()(),Cl(114,"td",18)(115,"code",19),qx(116,"number"),og()(),Cl(117,"td",20)(118,"p")(119,"code"),qx(120,"4000"),og()()(),Cl(121,"td",21)(122,"em")(123,"strong"),qx(124,"(opcional)"),og()(),Cl(125,"p"),qx(126,"Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que "),Cl(127,"code"),qx(128,"1000"),og(),qx(129," os slides n\xE3o trocam automaticamente."),og()()(),Cl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),qx(134," p-slides"),Hl(135,"br"),og()()(),Cl(136,"td",18)(137,"code",23),qx(138,"Array<PoSlideItem "),og(),Cl(139,"code",24),qx(140," string "),og(),Cl(141,"code",25),qx(142," any>"),og()(),Cl(143,"td",20),qx(144,"-"),og(),Cl(145,"td",21)(146,"p"),qx(147,"Array de imagens ou dados para o slide, pode ser de tr\xEAs formas:"),og(),Cl(148,"ul")(149,"li"),qx(150,"Array implementando objetos da interface "),Cl(151,"code"),qx(152,"PoSlideItem"),og(),qx(153,":"),Cl(154,"pre")(155,"code"),qx(156,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),og()()(),Cl(157,"li"),qx(158,"Array de "),Cl(159,"code"),qx(160,"strings"),og(),qx(161," com os caminhos das imagens:"),Cl(162,"pre")(163,"code"),qx(164,`['/assets/image-1', '/assets/image-2' ]
`),og()()(),Cl(165,"li"),qx(166,"Array com lista de itens (para utilizar template):"),Cl(167,"pre")(168,"code"),qx(169,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),og()()()(),Cl(170,"blockquote")(171,"p"),qx(172,"As setas de navega\xE7\xE3o e o controle com c\xEDrculos apenas ser\xE3o renderizados caso possua mais de um slide."),og()()()()(),Cl(173,"h3",10),qx(174,"M\xE9todos"),og(),Cl(175,"table",26)(176,"tr",14)(177,"th",27)(178,"div",16)(179,"h4")(180,"span",17),qx(181," getCurrentSlideIndex "),og()()()()(),Cl(182,"tr",21)(183,"td",21)(184,"p"),qx(185,"M\xE9todo que retorna o index do slide atual"),og(),Cl(186,"pre")(187,"code"),qx(188,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),og()()()()(),Hl(189,"br"),Cl(190,"table",26)(191,"tr",14)(192,"th",27)(193,"div",16)(194,"h4")(195,"span",17),qx(196," next "),og()()()()(),Cl(197,"tr",21)(198,"td",21)(199,"p"),qx(200,"M\xE9todo para chamar o pr\xF3ximo slide."),og(),Cl(201,"pre")(202,"code"),qx(203,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),og()()()()(),Hl(204,"br"),Cl(205,"table",26)(206,"tr",14)(207,"th",27)(208,"div",16)(209,"h4")(210,"span",17),qx(211," previous "),og()()()()(),Cl(212,"tr",21)(213,"td",21)(214,"p"),qx(215,"M\xE9todo para chamar o slide anterior."),og(),Cl(216,"pre")(217,"code"),qx(218,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),og()()()()(),Hl(219,"br"),Cl(220,"h3"),qx(221,"Interfaces"),og(),Cl(222,"h4",28)(223,"code",5),qx(224,"PoSlideItem"),og()(),Cl(225,"div",2)(226,"p"),qx(227,"Interface que define cada objeto do "),Cl(228,"code"),qx(229,"PoSlideItem"),og(),qx(230,"."),og()(),Cl(231,"h4",10),qx(232,"Propriedades"),og(),Cl(233,"table",11)(234,"tr",12)(235,"th",13),qx(236,"Nome"),og(),Cl(237,"th",13),qx(238,"Tipo"),og(),Cl(239,"th",13),qx(240,"Descri\xE7\xE3o"),og()(),Cl(241,"tr",14)(242,"td",15)(243,"div",16)(244,"span",17),qx(245," action"),Hl(246,"br"),og()()(),Cl(247,"td",18)(248,"code",29),qx(249,"Function"),og()(),Cl(250,"td",21)(251,"em")(252,"strong"),qx(253,"(opcional)"),og()(),Cl(254,"p"),qx(255,"A\xE7\xE3o executada ao clicar no slide caso n\xE3o tenha link definido."),og()()(),Cl(256,"tr",14)(257,"td",15)(258,"div",16)(259,"span",17),qx(260," alt"),Hl(261,"br"),og()()(),Cl(262,"td",18)(263,"code",24),qx(264,"string"),og()(),Cl(265,"td",21)(266,"em")(267,"strong"),qx(268,"(opcional)"),og()(),Cl(269,"p"),qx(270,"Texto que aparece quando a imagem n\xE3o \xE9 encontrada."),og()()(),Cl(271,"tr",14)(272,"td",15)(273,"div",16)(274,"span",17),qx(275," image"),Hl(276,"br"),og()()(),Cl(277,"td",18)(278,"code",24),qx(279,"string"),og()(),Cl(280,"td",21)(281,"p"),qx(282,"Define o caminho da imagem."),og()()(),Cl(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),qx(287," link"),Hl(288,"br"),og()()(),Cl(289,"td",18)(290,"code",24),qx(291,"string"),og()(),Cl(292,"td",21)(293,"em")(294,"strong"),qx(295,"(opcional)"),og()(),Cl(296,"p"),qx(297,"Link interno ou externo que ser\xE1 aberto ao clicar no slide."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var ye=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-slide-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-slide-basic-view")(6,"sample-po-slide-labs-view")(7,"sample-po-slide-useful-articles-view")(8,"sample-po-slide-landscapes-view")(9,"sample-po-slide-external-controls-view"),og()()()),a&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ue,ge,be,Ce,Ee,xe],encapsulation:2})}return n})();var Ge=[{path:"",component:ye}],we=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[bL.forChild(Ge),bL]})}return n})();var Mt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[ca,we]})}return n})();export{Mt as DocPoSlideModule};