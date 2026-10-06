import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kn as Ax,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Y as Kze,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,bn as roe,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,i as _a,k as D4,ki as he$1,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ti as Wx,ua as ug,wr as Kc,zi as kL}from"./main-EZZF3RMT.js";var oe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-basic`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`],[1,`po-md-12`]],template:function(l,a){l&1&&(Ac(0,`div`,0),Kc(1,`po-skeleton`,1)(2,`po-skeleton`,1)(3,`po-skeleton`,1),ug())},dependencies:[Kze],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Skeleton Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-skeleton-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ee,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,oe],encapsulation:2,changeDetection:1})}return o})();function we(o,R){if(o&1){let p=Bx();Ac(0,`po-select`,12),RE(`ngModelChange`,function(a){Jv(p);let s=Wx();return DN(s.size,a)||(s.size=a),e_(a)}),ug(),p0()}if(o&2){let p=Wx();TE(`ngModel`,p.size),cE(`p-options`,p.sizeOptions),m0()}}function ye(o,R){if(o&1){let p=Bx();Kc(0,`po-divider`,13),Ac(1,`po-number`,14),RE(`ngModelChange`,function(a){Jv(p);let s=Wx();return DN(s.circleSize,a)||(s.circleSize=a),e_(a)}),pt(`p-change`,function(){Jv(p);let a=Wx();return e_(a.onCircleSizeChange())}),ug(),p0(),Ac(2,`po-select`,15),RE(`ngModelChange`,function(a){Jv(p);let s=Wx();return DN(s.circleSizeUnit,a)||(s.circleSizeUnit=a),e_(a)}),pt(`p-change`,function(){Jv(p);let a=Wx();return e_(a.onCircleSizeUnitChange())}),ug(),p0(),Kc(3,`po-info`,16)}if(o&2){let p=Wx();Hp(),TE(`ngModel`,p.circleSize),m0(),Hp(),TE(`ngModel`,p.circleSizeUnit),cE(`p-options`,p.unitOptions),m0(),Hp(),cE(`p-value`,p.circleSize?p.circleSize+p.circleSizeUnit:`Using default size from Size select`)}}function Pe(o,R){if(o&1){let p=Bx();Kc(0,`po-divider`,17),Ac(1,`po-input`,18),RE(`ngModelChange`,function(a){Jv(p);let s=Wx();return DN(s.width,a)||(s.width=a),e_(a)}),ug(),p0(),Ac(2,`po-input`,19),RE(`ngModelChange`,function(a){Jv(p);let s=Wx();return DN(s.height,a)||(s.height=a),e_(a)}),ug(),p0(),Ac(3,`po-input`,20),RE(`ngModelChange`,function(a){Jv(p);let s=Wx();return DN(s.borderRadius,a)||(s.borderRadius=a),e_(a)}),ug(),p0()}if(o&2){let p=Wx();Hp(),TE(`ngModel`,p.width),m0(),Hp(),TE(`ngModel`,p.height),m0(),Hp(),TE(`ngModel`,p.borderRadius),m0()}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit=`px`;animationOptions=[{label:`Shimmer`,value:`shimmer`},{label:`Pulse`,value:`pulse`},{label:`None`,value:`none`}];sizeOptions=[{label:`Extra Small`,value:`xs`},{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra Large`,value:`xl`},{label:`Extra Extra Large`,value:`2xl`}];typeOptions=[{label:`Normal`,value:`normal`},{label:`Primary`,value:`primary`},{label:`Content`,value:`content`}];variantOptions=[{label:`Circle`,value:`circle`},{label:`Text`,value:`text`},{label:`Rectangle`,value:`rectangle`},{label:`Square`,value:`square`}];unitOptions=[{label:`Pixels (px)`,value:`px`},{label:`REM`,value:`rem`},{label:`EM`,value:`em`},{label:`Percentage (%)`,value:`%`}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant===`circle`){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius=`50%`}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant=`circle`,this.type=`normal`,this.animation=`shimmer`,this.size=`md`,this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel=`Carregando`,this.circleSize=null,this.circleSizeUnit=`px`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-labs`]],standalone:!1,decls:17,vars:19,consts:[[1,`po-row`],[1,`po-md-12`,3,`p-variant`,`p-type`,`p-animation`,`p-size`,`p-width`,`p-height`,`p-border-radius`,`p-aria-label`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Animation`,1,`po-md-12`],[`name`,`animation`,`p-label`,`Animation`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Shapes`,1,`po-md-12`],[`name`,`variant`,`p-label`,`Variant`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModel`,`p-options`],[`p-label`,`Accessibility`,1,`po-md-12`],[`name`,`ariaLabel`,`p-label`,`Aria Label`,`p-help`,`Texto descritivo para leitores de tela (acessibilidade)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Circle Dynamic Size (optional)`,1,`po-md-12`],[`name`,`circleSize`,`p-clean`,``,`p-label`,`Circle Size`,`p-help`,`Define o tamanho do círculo`,`p-min`,`1`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`circleSizeUnit`,`p-label`,`Unit`,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Applied Size`,1,`po-md-6`,3,`p-value`],[`p-label`,`Custom (optional)`,1,`po-md-12`],[`name`,`width`,`p-clean`,``,`p-label`,`Width`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderRadius`,`p-clean`,``,`p-label`,`Border Radius`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,a){l&1&&(Ac(0,`div`,0),Kc(1,`po-skeleton`,1),ug(),Kc(2,`hr`)(3,`po-info`,2)(4,`hr`),Ac(5,`form`,0),Kc(6,`po-divider`,3),Ac(7,`po-select`,4),RE(`ngModelChange`,function(x){return DN(a.animation,x)||(a.animation=x),x}),ug(),p0(),Ac(8,`po-select`,5),RE(`ngModelChange`,function(x){return DN(a.type,x)||(a.type=x),x}),ug(),p0(),Kc(9,`po-divider`,6),Ac(10,`po-select`,7),RE(`ngModelChange`,function(x){return DN(a.variant,x)||(a.variant=x),x}),pt(`p-change`,function(){return a.onVariantChange()}),ug(),p0(),Rx(11,we,1,2,`po-select`,8),Kc(12,`po-divider`,9),Ac(13,`po-input`,10),RE(`ngModelChange`,function(x){return DN(a.ariaLabel,x)||(a.ariaLabel=x),x}),ug(),p0(),Rx(14,ye,4,4),Rx(15,Pe,4,3),Ac(16,`po-button`,11),pt(`p-click`,function(){return a.restore()}),ug()()),l&2&&(Hp(),cE(`p-variant`,a.variant)(`p-type`,a.type)(`p-animation`,a.animation)(`p-size`,a.size)(`p-width`,a.width||void 0)(`p-height`,a.height||void 0)(`p-border-radius`,a.borderRadius||void 0)(`p-aria-label`,a.ariaLabel),Hp(2),cE(`p-value`,a.modelValue),Hp(4),TE(`ngModel`,a.animation),cE(`p-options`,a.animationOptions),m0(),Hp(),TE(`ngModel`,a.type),cE(`p-options`,a.typeOptions),m0(),Hp(2),TE(`ngModel`,a.variant),cE(`p-options`,a.variantOptions),m0(),Hp(),Ax(a.variant!==`text`?11:-1),Hp(2),TE(`ngModel`,a.ariaLabel),m0(),Hp(),Ax(a.variant===`circle`?14:-1),Hp(),Ax(a.variant===`text`?15:-1))},dependencies:[b9,D9,C9,BP,LP,ni,Ef,D4,roe,poe,hoe,Kze],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Skeleton Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-skeleton
    class="po-md-12"
    [p-variant]="variant"
    [p-type]="type"
    [p-animation]="animation"
    [p-size]="size"
    [p-width]="width || undefined"
    [p-height]="height || undefined"
    [p-border-radius]="borderRadius || undefined"
    [p-aria-label]="ariaLabel"
  >
  </po-skeleton>
</div>

<hr />

<po-info class="po-md-12" p-label="Model" [p-value]="modelValue"></po-info>

<hr />

<form class="po-row">
  <po-divider class="po-md-12" p-label="Animation"></po-divider>

  <po-select
    class="po-md-6"
    name="animation"
    [(ngModel)]="animation"
    p-label="Animation"
    [p-options]="animationOptions"
  >
  </po-select>

  <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

  <po-divider class="po-md-12" p-label="Shapes"></po-divider>

  <po-select
    class="po-md-6"
    name="variant"
    [(ngModel)]="variant"
    p-label="Variant"
    [p-options]="variantOptions"
    (p-change)="onVariantChange()"
  >
  </po-select>

  @if (variant !== 'text') {
    <po-select class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizeOptions"> </po-select>
  }

  <po-divider class="po-md-12" p-label="Accessibility"></po-divider>

  <po-input
    class="po-md-12"
    name="ariaLabel"
    [(ngModel)]="ariaLabel"
    p-label="Aria Label"
    p-help="Texto descritivo para leitores de tela (acessibilidade)"
  >
  </po-input>

  @if (variant === 'circle') {
    <po-divider class="po-md-12" p-label="Circle Dynamic Size (optional)"></po-divider>

    <po-number
      class="po-md-4"
      name="circleSize"
      [(ngModel)]="circleSize"
      p-clean
      p-label="Circle Size"
      p-help="Define o tamanho do c\xEDrculo"
      p-min="1"
      (p-change)="onCircleSizeChange()"
    >
    </po-number>

    <po-select
      class="po-md-2"
      name="circleSizeUnit"
      [(ngModel)]="circleSizeUnit"
      p-label="Unit"
      [p-options]="unitOptions"
      (p-change)="onCircleSizeUnitChange()"
    >
    </po-select>

    <po-info
      class="po-md-6"
      p-label="Applied Size"
      [p-value]="circleSize ? circleSize + circleSizeUnit : 'Using default size from Size select'"
    >
    </po-info>
  }

  @if (variant === 'text') {
    <po-divider class="po-md-12" p-label="Custom (optional)"></po-divider>

    <po-input
      class="po-md-6"
      name="width"
      [(ngModel)]="width"
      p-clean
      p-label="Width"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-label="Height"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="borderRadius"
      [(ngModel)]="borderRadius"
      p-clean
      p-label="Border Radius"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>
  }

  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-labs',
  templateUrl: './sample-po-skeleton-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonLabsComponent implements OnInit {
  animation: string;
  borderRadius: string;
  height: string;
  ariaLabel: string;
  size: string;
  type: string;
  variant: string;
  width: string;
  circleSize: number;
  circleSizeUnit: string = 'px';

  readonly animationOptions = [
    { label: 'Shimmer', value: 'shimmer' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'None', value: 'none' }
  ];

  readonly sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
    { label: 'Extra Extra Large', value: '2xl' }
  ];

  readonly typeOptions = [
    { label: 'Normal', value: 'normal' },
    { label: 'Primary', value: 'primary' },
    { label: 'Content', value: 'content' }
  ];

  readonly variantOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Text', value: 'text' },
    { label: 'Rectangle', value: 'rectangle' },
    { label: 'Square', value: 'square' }
  ];

  readonly unitOptions = [
    { label: 'Pixels (px)', value: 'px' },
    { label: 'REM', value: 'rem' },
    { label: 'EM', value: 'em' },
    { label: 'Percentage (%)', value: '%' }
  ];

  ngOnInit() {
    this.restore();
  }

  get modelValue() {
    return JSON.stringify(
      {
        variant: this.variant,
        type: this.type,
        animation: this.animation,
        size: this.size,
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius,
        ariaLabel: this.ariaLabel
      },
      null,
      2
    );
  }

  onVariantChange() {
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.circleSize = null;
  }

  onCircleSizeChange() {
    if (this.circleSize && this.variant === 'circle') {
      const sizeValue = \`\${this.circleSize}\${this.circleSizeUnit}\`;
      this.width = sizeValue;
      this.height = sizeValue;
      this.borderRadius = '50%';
    } else {
      this.width = undefined;
      this.height = undefined;
      this.borderRadius = undefined;
    }
  }

  onCircleSizeUnitChange() {
    this.onCircleSizeChange();
  }

  restore() {
    this.variant = 'circle';
    this.type = 'normal';
    this.animation = 'shimmer';
    this.size = 'md';
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.ariaLabel = 'Carregando';
    this.circleSize = null;
    this.circleSizeUnit = 'px';
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-skeleton-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-credit-card`]],standalone:!1,decls:47,vars:0,consts:[[1,`po-row`],[`p-height`,`340`,`p-title`,`Payment Method`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card`],[1,`po-md-2`,`card-chip`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`],[1,`po-row`,`card-number`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`],[1,`po-row`,`card-details`],[1,`po-sm-7`,`po-md-7`,`card-holder`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`120px`],[1,`po-sm-5`,`po-md-5`,`card-expiry`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`50px`],[1,`card-brand`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-height`,`340`,`p-title`,`Payment Method - Content`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card-gray`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`,`p-type`,`content`],[`p-variant`,`text`,`p-type`,`content`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`120px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`50px`,`p-type`,`content`],[`p-variant`,`circle`,`p-size`,`sm`,`p-type`,`content`]],template:function(l,a){l&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,0)(4,`div`,3),Kc(5,`po-skeleton`,4),ug()(),Ac(6,`div`,5)(7,`div`,6),Kc(8,`po-skeleton`,7),ug(),Ac(9,`div`,6),Kc(10,`po-skeleton`,7),ug(),Ac(11,`div`,6),Kc(12,`po-skeleton`,7),ug(),Ac(13,`div`,6),Kc(14,`po-skeleton`,7),ug()(),Ac(15,`div`,8)(16,`div`,9),Kc(17,`po-skeleton`,10)(18,`po-skeleton`,11),ug(),Ac(19,`div`,12),Kc(20,`po-skeleton`,13)(21,`po-skeleton`,14),ug()(),Ac(22,`div`,15),Kc(23,`po-skeleton`,16),ug()()(),Ac(24,`po-widget`,17)(25,`div`,18)(26,`div`,0)(27,`div`,3),Kc(28,`po-skeleton`,19),ug()(),Ac(29,`div`,5)(30,`div`,6),Kc(31,`po-skeleton`,20),ug(),Ac(32,`div`,6),Kc(33,`po-skeleton`,20),ug(),Ac(34,`div`,6),Kc(35,`po-skeleton`,20),ug(),Ac(36,`div`,6),Kc(37,`po-skeleton`,20),ug()(),Ac(38,`div`,8)(39,`div`,9),Kc(40,`po-skeleton`,21)(41,`po-skeleton`,22),ug(),Ac(42,`div`,12),Kc(43,`po-skeleton`,23)(44,`po-skeleton`,24),ug()(),Ac(45,`div`,15),Kc(46,`po-skeleton`,25),ug()()()())},dependencies:[Ooe,Kze],styles:[`.credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}`],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-credit-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Skeleton - Credit Card`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method">
    <div class="credit-card">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method - Content">
    <div class="credit-card-gray">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm" p-type="content"></po-skeleton>
      </div>
    </div>
  </po-widget>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.credit-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.credit-card-gray {
  background: linear-gradient(135deg, #8b93a7 0%, #6b7280 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.card-chip,
.card-number {
  margin-bottom: 15px;
}

.card-holder,
.card-expiry {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-brand {
  position: absolute;
  bottom: 24px;
  right: 35px;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-skeleton-credit-card`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-widget-card`]],standalone:!1,decls:17,vars:0,consts:[[1,`po-row`],[1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`widget-card`],[1,`po-row`,`widget-header`],[1,`po-sm-7`,`po-md-7`],[`p-variant`,`text`,`p-height`,`32px`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`,`p-width`,`80px`,`p-height`,`32px`],[1,`po-sm-2`,`po-md-2`,`widget-icon`],[`p-variant`,`square`,`p-size`,`sm`],[1,`po-row`,`widget-content`],[1,`widget-spacer`],[1,`po-row`,`widget-footer`],[1,`po-sm-12`,`po-md-12`,`footer-button`],[`p-variant`,`rectangle`,`p-size`,`md`]],template:function(l,a){l&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),Kc(5,`po-skeleton`,5),ug(),Ac(6,`div`,6),Kc(7,`po-skeleton`,7),ug(),Ac(8,`div`,8),Kc(9,`po-skeleton`,9),ug()(),Ac(10,`div`,10)(11,`div`,4),Kc(12,`po-skeleton`,5),ug()(),Kc(13,`div`,11),Ac(14,`div`,12)(15,`div`,13),Kc(16,`po-skeleton`,14),ug()()()()())},dependencies:[Ooe,Kze],styles:[`.widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-widget-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Skeleton - Widget Card`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3">
    <div class="widget-card">
      <div class="po-row widget-header">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-width="80px" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-2 po-md-2 widget-icon">
          <po-skeleton p-variant="square" p-size="sm"></po-skeleton>
        </div>
      </div>

      <div class="po-row widget-content">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
      </div>

      <div class="widget-spacer"></div>

      <div class="po-row widget-footer">
        <div class="po-sm-12 po-md-12 footer-button">
          <po-skeleton p-variant="rectangle" p-size="md"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.widget-card {
  padding: 8px 0;
}

.widget-header {
  margin-bottom: 8px;
  align-items: center;
}

.widget-icon {
  display: flex;
  justify-content: flex-end;
}

.widget-content {
  margin-bottom: 16px;
}

.widget-spacer {
  height: 40px;
}

.widget-footer {
  display: flex;
  justify-content: flex-end;
}

.footer-button {
  display: flex;
  justify-content: flex-end;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-skeleton-widget-card`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Oe,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-user-profile`]],standalone:!1,decls:20,vars:0,consts:[[1,`po-row`],[`p-title`,`User Profile`,1,`po-md-6`],[1,`profile-card`],[1,`profile-picture`],[`p-variant`,`circle`,`p-size`,`xl`,`p-aria-label`,`Carregando perfil do usuário`],[`p-variant`,`text`,`p-width`,`150px`],[`p-variant`,`text`,`p-width`,`200px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[1,`profile-stats`],[1,`stat`],[`p-variant`,`text`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`70px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`65px`,`p-size`,`sm`]],template:function(l,a){l&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),Kc(4,`po-skeleton`,4),ug(),Kc(5,`po-skeleton`,5)(6,`po-skeleton`,6)(7,`po-skeleton`,7)(8,`po-skeleton`,8)(9,`po-skeleton`,9),Ac(10,`div`,10)(11,`div`,11),Kc(12,`po-skeleton`,12)(13,`po-skeleton`,13),ug(),Ac(14,`div`,11),Kc(15,`po-skeleton`,12)(16,`po-skeleton`,14),ug(),Ac(17,`div`,11),Kc(18,`po-skeleton`,12)(19,`po-skeleton`,15),ug()()()()())},dependencies:[Ooe,Kze],styles:[`.profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-user-profile-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Skeleton - User Profile`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-widget class="po-md-6" p-title="User Profile">
    <div class="profile-card">
      <!-- Profile picture -->
      <div class="profile-picture">
        <po-skeleton p-variant="circle" p-size="xl" p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>
      </div>

      <!-- Name -->
      <po-skeleton p-variant="text" p-width="150px"></po-skeleton>

      <!-- Email -->
      <po-skeleton p-variant="text" p-width="200px"></po-skeleton>

      <!-- Bio -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>

      <!-- Stats -->
      <div class="profile-stats">
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="70px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="65px" p-size="sm"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.profile-card {
  text-align: center;
  padding: 24px;
}

.profile-picture {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.profile-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-skeleton-user-profile`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,qe,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-social-post`]],standalone:!1,decls:35,vars:0,consts:[[1,`po-row`],[`p-height`,`550`,1,`po-md-6`],[1,`post-card`],[1,`post-header`],[`p-variant`,`circle`,`p-size`,`sm`,`p-aria-label`,`Carregando post de rede social`],[1,`post-header-text`],[`p-variant`,`text`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`300px`],[1,`post-actions`],[`p-variant`,`rectangle`,`p-size`,`sm`,`p-width`,`30px`,`p-height`,`30px`],[`p-variant`,`text`,`p-width`,`120px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`85%`],[`p-variant`,`text`,`p-width`,`60%`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`250px`],[`p-variant`,`text`,`p-width`,`140px`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[`p-variant`,`text`,`p-width`,`65%`],[`p-variant`,`text`,`p-width`,`50%`]],template:function(l,a){l&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),Kc(4,`po-skeleton`,4),Ac(5,`div`,5),Kc(6,`po-skeleton`,6)(7,`po-skeleton`,6),ug()(),Kc(8,`po-skeleton`,7),Ac(9,`div`,8),Kc(10,`po-skeleton`,9)(11,`po-skeleton`,9)(12,`po-skeleton`,9),ug(),Kc(13,`po-skeleton`,10)(14,`po-skeleton`,11)(15,`po-skeleton`,12)(16,`po-skeleton`,13),ug()(),Ac(17,`po-widget`,1)(18,`div`,2)(19,`div`,3),Kc(20,`po-skeleton`,14),Ac(21,`div`,5),Kc(22,`po-skeleton`,6)(23,`po-skeleton`,6),ug()(),Kc(24,`po-skeleton`,15),Ac(25,`div`,8),Kc(26,`po-skeleton`,9)(27,`po-skeleton`,9)(28,`po-skeleton`,9),ug(),Kc(29,`po-skeleton`,16)(30,`po-skeleton`,11)(31,`po-skeleton`,17)(32,`po-skeleton`,18)(33,`po-skeleton`,19)(34,`po-skeleton`,20),ug()()())},dependencies:[Ooe,Kze],styles:[`.post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-social-post-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Skeleton - Social Post`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <!-- Post Card 1 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm" p-aria-label="Carregando post de rede social"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="300px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="120px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="85%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="60%"></po-skeleton>
    </div>
  </po-widget>

  <!-- Post Card 2 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="250px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="140px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="65%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="50%"></po-skeleton>
    </div>
  </po-widget>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.post-card {
  padding: 16px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.post-header-text {
  flex: 1;
}

.post-actions {
  display: flex;
  gap: 16px;
  margin: 12px 0;
}

.post-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-skeleton-social-post`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Fe,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-article`]],standalone:!1,decls:15,vars:0,consts:[[1,`po-row`],[`p-height`,`380`,`p-title`,`Latest Article`,1,`po-md-6`],[1,`article-card`],[`p-variant`,`rectangle`,`p-height`,`150px`,`p-aria-label`,`Carregando artigo`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[1,`article-author`],[`p-variant`,`circle`,`p-size`,`sm`],[1,`author-details`],[`p-variant`,`text`,`p-width`,`100px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`80px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`75%`],[`p-variant`,`text`,`p-width`,`80px`]],template:function(l,a){l&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),Kc(3,`po-skeleton`,3)(4,`po-skeleton`,4)(5,`po-skeleton`,5),Ac(6,`div`,6),Kc(7,`po-skeleton`,7),Ac(8,`div`,8),Kc(9,`po-skeleton`,9)(10,`po-skeleton`,10),ug()(),Kc(11,`po-skeleton`,4)(12,`po-skeleton`,4)(13,`po-skeleton`,11)(14,`po-skeleton`,12),ug()()())},dependencies:[Ooe,Kze],styles:[`.article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-article-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Skeleton - Article`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-skeleton-article/sample-po-skeleton-article.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-widget class="po-md-6" p-height="380" p-title="Latest Article">
    <div class="article-card">
      <!-- Article thumbnail -->
      <po-skeleton p-variant="rectangle" p-height="150px" p-aria-label="Carregando artigo"></po-skeleton>

      <!-- Article title -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Author info -->
      <div class="article-author">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="author-details">
          <po-skeleton p-variant="text" p-width="100px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="80px" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Article excerpt -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="75%"></po-skeleton>

      <!-- Read more -->
      <po-skeleton p-variant="text" p-width="80px"></po-skeleton>
    </div>
  </po-widget>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-skeleton-article/sample-po-skeleton-article.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-skeleton-article/sample-po-skeleton-article.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.article-card {
  padding: 16px;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
}

.author-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.article-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-skeleton-article`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,He,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-skeleton-doc`]],standalone:!1,decls:733,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonAnimation`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonSize`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonType`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonVariant`]],template:function(l,a){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoSkeletonModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-skeleton.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoSkeletonComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-skeleton`),ug(),vN(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),ug(),Ac(18,`p`),vN(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),ug(),Ac(20,`h4`),vN(21,`Tokens customizáveis`),ug(),Ac(22,`p`),vN(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(24,`blockquote`)(25,`p`),vN(26,`Para maiores informações, acesse o guia `),Ac(27,`a`,6),vN(28,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(29,`.`),ug()(),Ac(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),vN(34,`Propriedade`),ug(),Ac(35,`th`),vN(36,`Descrição`),ug(),Ac(37,`th`),vN(38,`Valor Padrão`),ug()()(),Ac(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),vN(43,`Cores`),ug()(),Kc(44,`td`)(45,`td`),ug(),Ac(46,`tr`)(47,`td`)(48,`code`),vN(49,`--color`),ug()(),Ac(50,`td`),vN(51,`Cor de fundo do skeleton (tipo normal)`),ug(),Ac(52,`td`)(53,`code`),vN(54,`var(--color-neutral-light-20)`),ug()()(),Ac(55,`tr`)(56,`td`)(57,`code`),vN(58,`--color-primary`),ug()(),Ac(59,`td`),vN(60,`Cor de fundo do skeleton (tipo primary)`),ug(),Ac(61,`td`)(62,`code`),vN(63,`var(--color-neutral-mid-40)`),ug()()(),Ac(64,`tr`)(65,`td`)(66,`code`),vN(67,`--color-content`),ug()(),Ac(68,`td`),vN(69,`Cor de fundo do skeleton (tipo content)`),ug(),Ac(70,`td`)(71,`code`),vN(72,`var(--color-neutral-light-00)`),ug()()(),Ac(73,`tr`)(74,`td`)(75,`code`),vN(76,`--shimmer-highlight`),ug()(),Ac(77,`td`),vN(78,`Cor de destaque do shimmer (tipo normal)`),ug(),Ac(79,`td`)(80,`code`),vN(81,`var(--color-neutral-light-30)`),ug()()(),Ac(82,`tr`)(83,`td`)(84,`code`),vN(85,`--shimmer-highlight-primary`),ug()(),Ac(86,`td`),vN(87,`Cor de destaque do shimmer (tipo primary)`),ug(),Ac(88,`td`)(89,`code`),vN(90,`var(--color-neutral-light-20)`),ug()()(),Ac(91,`tr`)(92,`td`)(93,`code`),vN(94,`--shimmer-highlight-content`),ug()(),Ac(95,`td`),vN(96,`Cor de destaque do shimmer (tipo content)`),ug(),Ac(97,`td`)(98,`code`),vN(99,`var(--color-neutral-light-05)`),ug()()(),Ac(100,`tr`)(101,`td`)(102,`strong`),vN(103,`Espaçamento`),ug()(),Kc(104,`td`)(105,`td`),ug(),Ac(106,`tr`)(107,`td`)(108,`code`),vN(109,`--margin-bottom`),ug()(),Ac(110,`td`),vN(111,`Margem inferior do skeleton`),ug(),Ac(112,`td`)(113,`code`),vN(114,`var(--spacing-xs)`),ug()()(),Ac(115,`tr`)(116,`td`)(117,`strong`),vN(118,`Bordas`),ug()(),Kc(119,`td`)(120,`td`),ug(),Ac(121,`tr`)(122,`td`)(123,`code`),vN(124,`--border-radius`),ug()(),Ac(125,`td`),vN(126,`Raio da borda do skeleton`),ug(),Ac(127,`td`)(128,`code`),vN(129,`var(--border-radius-md)`),ug()()(),Ac(130,`tr`)(131,`td`)(132,`code`),vN(133,`--border-radius-text`),ug()(),Ac(134,`td`),vN(135,`Raio da borda para a variante text`),ug(),Ac(136,`td`)(137,`code`),vN(138,`var(--border-radius-md)`),ug()()(),Ac(139,`tr`)(140,`td`)(141,`code`),vN(142,`--border-radius-primary`),ug()(),Ac(143,`td`),vN(144,`Raio da borda do skeleton (tipo primary)`),ug(),Ac(145,`td`)(146,`code`),vN(147,`var(--border-radius-md)`),ug()()(),Ac(148,`tr`)(149,`td`)(150,`code`),vN(151,`--border-radius-content`),ug()(),Ac(152,`td`),vN(153,`Raio da borda do skeleton (tipo content)`),ug(),Ac(154,`td`)(155,`code`),vN(156,`var(--border-radius-lg)`),ug()()(),Ac(157,`tr`)(158,`td`)(159,`strong`),vN(160,`Transições`),ug()(),Kc(161,`td`)(162,`td`),ug(),Ac(163,`tr`)(164,`td`)(165,`code`),vN(166,`--transition-property`),ug()(),Ac(167,`td`),vN(168,`Propriedade CSS da transição`),ug(),Ac(169,`td`)(170,`code`),vN(171,`all`),ug()()(),Ac(172,`tr`)(173,`td`)(174,`code`),vN(175,`--transition-duration`),ug()(),Ac(176,`td`),vN(177,`Duração da transição de cor`),ug(),Ac(178,`td`)(179,`code`),vN(180,`var(--duration-moderate)`),ug()()(),Ac(181,`tr`)(182,`td`)(183,`code`),vN(184,`--transition-timing`),ug()(),Ac(185,`td`),vN(186,`Função de temporização da transição/animação`),ug(),Ac(187,`td`)(188,`code`),vN(189,`var(--timing-continuous)`),ug()()(),Ac(190,`tr`)(191,`td`)(192,`strong`),vN(193,`Animações`),ug()(),Kc(194,`td`)(195,`td`),ug(),Ac(196,`tr`)(197,`td`)(198,`code`),vN(199,`--animation-duration-pulse`),ug()(),Ac(200,`td`),vN(201,`Duração da animação de pulsação`),ug(),Ac(202,`td`)(203,`code`),vN(204,`var(--duration-very-slow)`),ug()()(),Ac(205,`tr`)(206,`td`)(207,`code`),vN(208,`--animation-duration-shimmer`),ug()(),Ac(209,`td`),vN(210,`Duração da animação de brilho deslizante`),ug(),Ac(211,`td`)(212,`code`),vN(213,`var(--duration-ultra-slow)`),ug()()()()()(),Ac(214,`div`,7)(215,`h4`,8),vN(216,`Seletor`),ug(),Ac(217,`pre`,9),vN(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),ug()(),Ac(219,`h4`,10),vN(220,`Propriedades`),ug(),Ac(221,`table`,11)(222,`tr`,12)(223,`th`,13),vN(224,`Nome`),ug(),Ac(225,`th`,13),vN(226,`Tipo`),ug(),Ac(227,`th`,13),vN(228,`Padrão`),ug(),Ac(229,`th`,13),vN(230,`Descrição`),ug()(),Ac(231,`tr`,14)(232,`td`,15)(233,`div`,16)(234,`span`,17),vN(235,` p-animation`),Kc(236,`br`),ug()()(),Ac(237,`td`,18)(238,`code`,19),vN(239,`PoSkeletonAnimation`),ug()(),Ac(240,`td`,20)(241,`p`)(242,`code`),vN(243,`shimmer`),ug()()(),Ac(244,`td`,21)(245,`em`)(246,`strong`),vN(247,`(opcional)`),ug()(),Ac(248,`p`),vN(249,`Define o tipo de animação do skeleton.`),ug(),Ac(250,`p`),vN(251,`Valores válidos:`),ug(),Ac(252,`ul`)(253,`li`)(254,`code`),vN(255,`none`),ug(),vN(256,`: Sem animação`),ug(),Ac(257,`li`)(258,`code`),vN(259,`pulse`),ug(),vN(260,`: Animação de pulsação`),ug(),Ac(261,`li`)(262,`code`),vN(263,`shimmer`),ug(),vN(264,`: Animação de brilho deslizante`),ug()()()(),Ac(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),vN(269,` p-aria-label`),Kc(270,`br`),ug()()(),Ac(271,`td`,18)(272,`code`,22),vN(273,`string`),ug()(),Ac(274,`td`,20),vN(275,`-`),ug(),Ac(276,`td`,21)(277,`em`)(278,`strong`),vN(279,`(opcional)`),ug()(),Ac(280,`p`),vN(281,`Define a descrição acessível do conteúdo que está sendo carregado.`),ug(),Ac(282,`p`),vN(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),ug(),Ac(284,`p`)(285,`strong`),vN(286,`Quando usar:`),ug()(),Ac(287,`ul`)(288,`li`),vN(289,`Use em `),Ac(290,`strong`),vN(291,`skeletons únicos`),ug(),vN(292,` ou no `),Ac(293,`strong`),vN(294,`primeiro skeleton de um grupo`),ug(),vN(295,` com descrição contextual`),ug(),Ac(296,`li`),vN(297,`Evite usar em múltiplos skeletons dentro da mesma área sem contexto, para não causar repetição excessiva`),ug()(),Ac(298,`p`)(299,`strong`),vN(300,`Exemplos de uso:`),ug()(),Ac(301,`pre`)(302,`code`,23),vN(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),ug()(),Ac(304,`blockquote`)(305,`p`)(306,`strong`),vN(307,`Boas práticas de acessibilidade:`),ug()(),Ac(308,`ul`)(309,`li`),vN(310,`Forneça contexto específico na label para que os usuários entendam o que está carregando`),ug()()(),Ac(311,`blockquote`)(312,`ul`)(313,`li`),vN(314,`Em casos complexos, considere usar um único `),Ac(315,`code`),vN(316,`<div role="status">`),ug(),vN(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),ug()()()()(),Ac(318,`tr`,14)(319,`td`,15)(320,`div`,16)(321,`span`,17),vN(322,` p-border-radius`),Kc(323,`br`),ug()()(),Ac(324,`td`,18)(325,`code`,22),vN(326,`string`),ug()(),Ac(327,`td`,20),vN(328,`-`),ug(),Ac(329,`td`,21)(330,`em`)(331,`strong`),vN(332,`(opcional)`),ug()(),Ac(333,`p`),vN(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ug(),Ac(335,`p`),vN(336,`Esta propriedade sobrescreve o border-radius padrão de cada variante.`),ug()()(),Ac(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),vN(341,` p-height`),Kc(342,`br`),ug()()(),Ac(343,`td`,18)(344,`code`,22),vN(345,`string`),ug()(),Ac(346,`td`,20),vN(347,`-`),ug(),Ac(348,`td`,21)(349,`em`)(350,`strong`),vN(351,`(opcional)`),ug()(),Ac(352,`p`),vN(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ug(),Ac(354,`p`),vN(355,`Quando definido, sobrescreve a altura padrão da variante.`),ug()()(),Ac(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),vN(360,` p-size`),Kc(361,`br`),ug()()(),Ac(362,`td`,18)(363,`code`,24),vN(364,`PoSkeletonSize`),ug()(),Ac(365,`td`,20)(366,`p`)(367,`code`),vN(368,`md`),ug()()(),Ac(369,`td`,21)(370,`em`)(371,`strong`),vN(372,`(opcional)`),ug()(),Ac(373,`p`),vN(374,`Define o tamanho do skeleton para as variantes pré-definidas (`),Ac(375,`code`),vN(376,`rectangle`),ug(),vN(377,`, `),Ac(378,`code`),vN(379,`square`),ug(),vN(380,`, `),Ac(381,`code`),vN(382,`circle`),ug(),vN(383,`).`),ug(),Ac(384,`p`),vN(385,`Valores válidos:`),ug(),Ac(386,`ul`)(387,`li`)(388,`code`),vN(389,`xs`),ug(),vN(390,`: Extra pequeno (24px para square/circle, 72px x 24px para rectangle)`),ug(),Ac(391,`li`)(392,`code`),vN(393,`sm`),ug(),vN(394,`: Pequeno (32px para square/circle, 96px x 32px para rectangle)`),ug(),Ac(395,`li`)(396,`code`),vN(397,`md`),ug(),vN(398,`: Médio (48px para square/circle, 144px x 48px para rectangle)`),ug(),Ac(399,`li`)(400,`code`),vN(401,`lg`),ug(),vN(402,`: Grande (64px para square/circle, 192px x 64px para rectangle)`),ug(),Ac(403,`li`)(404,`code`),vN(405,`xl`),ug(),vN(406,`: Extra grande (96px para square/circle, 288px x 96px para rectangle)`),ug(),Ac(407,`li`)(408,`code`),vN(409,`2xl`),ug(),vN(410,`: Extra extra grande (144px para square/circle, 432px x 144px para rectangle)`),ug()(),Ac(411,`p`),vN(412,`Esta propriedade é ignorada quando `),Ac(413,`code`),vN(414,`p-width`),ug(),vN(415,` ou `),Ac(416,`code`),vN(417,`p-height`),ug(),vN(418,` são definidos explicitamente.`),ug()()(),Ac(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),vN(423,` p-type`),Kc(424,`br`),ug()()(),Ac(425,`td`,18)(426,`code`,25),vN(427,`PoSkeletonType`),ug()(),Ac(428,`td`,20)(429,`p`)(430,`code`),vN(431,`normal`),ug()()(),Ac(432,`td`,21)(433,`em`)(434,`strong`),vN(435,`(opcional)`),ug()(),Ac(436,`p`),vN(437,`Define o tipo visual do skeleton, alterando sua cor de fundo.`),ug(),Ac(438,`p`),vN(439,`Valores válidos:`),ug(),Ac(440,`ul`)(441,`li`)(442,`code`),vN(443,`normal`),ug(),vN(444,`: Cor neutra clara (padrão)`),ug(),Ac(445,`li`)(446,`code`),vN(447,`primary`),ug(),vN(448,`: Cor neutra média`),ug(),Ac(449,`li`)(450,`code`),vN(451,`content`),ug(),vN(452,`: Fundo branco`),ug()()()(),Ac(453,`tr`,14)(454,`td`,15)(455,`div`,16)(456,`span`,17),vN(457,` p-variant`),Kc(458,`br`),ug()()(),Ac(459,`td`,18)(460,`code`,26),vN(461,`PoSkeletonVariant`),ug()(),Ac(462,`td`,20)(463,`p`)(464,`code`),vN(465,`text`),ug()()(),Ac(466,`td`,21)(467,`em`)(468,`strong`),vN(469,`(opcional)`),ug()(),Ac(470,`p`),vN(471,`Define a variante visual do skeleton.`),ug(),Ac(472,`p`),vN(473,`Valores válidos:`),ug(),Ac(474,`ul`)(475,`li`)(476,`code`),vN(477,`text`),ug(),vN(478,`: Simula uma linha de texto (altura padrão: 1em)`),ug(),Ac(479,`li`)(480,`code`),vN(481,`rectangle`),ug(),vN(482,`: Forma retangular (proporção 3:1 por padrão)`),ug(),Ac(483,`li`)(484,`code`),vN(485,`square`),ug(),vN(486,`: Forma quadrada (largura e altura iguais)`),ug(),Ac(487,`li`)(488,`code`),vN(489,`circle`),ug(),vN(490,`: Forma circular (largura e altura iguais)`),ug()()()(),Ac(491,`tr`,14)(492,`td`,15)(493,`div`,16)(494,`span`,17),vN(495,` p-width`),Kc(496,`br`),ug()()(),Ac(497,`td`,18)(498,`code`,22),vN(499,`string`),ug()(),Ac(500,`td`,20)(501,`p`)(502,`code`),vN(503,`100%`),ug(),vN(504,` para variante `),Ac(505,`code`),vN(506,`text`),ug(),vN(507,`, tamanho baseado em `),Ac(508,`code`),vN(509,`p-size`),ug(),vN(510,` para outras variantes`),ug()(),Ac(511,`td`,21)(512,`em`)(513,`strong`),vN(514,`(opcional)`),ug()(),Ac(515,`p`),vN(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ug(),Ac(517,`p`),vN(518,`Quando definido, sobrescreve a largura padrão da variante.`),ug()()()(),Ac(519,`h3`),vN(520,`Enums`),ug(),Ac(521,`h4`,4)(522,`code`,5),vN(523,`PoSkeletonAnimation`),ug()(),Ac(524,`div`,2)(525,`p`),vN(526,`Define os tipos de animação do componente `),Ac(527,`code`),vN(528,`po-skeleton`),ug(),vN(529,`.`),ug()(),Ac(530,`h4`,10),vN(531,`Propriedades`),ug(),Ac(532,`table`,11)(533,`tr`,12)(534,`th`,13),vN(535,`Nome`),ug(),Ac(536,`th`,13),vN(537,`Descrição`),ug()(),Ac(538,`tr`,14)(539,`td`,15)(540,`div`,16)(541,`span`,17),vN(542,` none`),Kc(543,`br`),ug()()(),Ac(544,`td`,21)(545,`p`),vN(546,`Sem animação`),ug()()(),Ac(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),vN(551,` pulse`),Kc(552,`br`),ug()()(),Ac(553,`td`,21)(554,`p`),vN(555,`Animação de pulsação`),ug()()(),Ac(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),vN(560,` shimmer`),Kc(561,`br`),ug()()(),Ac(562,`td`,21)(563,`p`),vN(564,`Animação de brilho deslizante`),ug()()()(),Ac(565,`h4`,4)(566,`code`,5),vN(567,`PoSkeletonSize`),ug()(),Ac(568,`div`,2)(569,`p`),vN(570,`Define os tamanhos disponíveis para o componente `),Ac(571,`code`),vN(572,`po-skeleton`),ug(),vN(573,`.`),ug()(),Ac(574,`h4`,10),vN(575,`Propriedades`),ug(),Ac(576,`table`,11)(577,`tr`,12)(578,`th`,13),vN(579,`Nome`),ug(),Ac(580,`th`,13),vN(581,`Descrição`),ug()(),Ac(582,`tr`,14)(583,`td`,15)(584,`div`,16)(585,`span`,17),vN(586,` xs`),Kc(587,`br`),ug()()(),Ac(588,`td`,21)(589,`p`),vN(590,`Tamanho extra pequeno`),ug()()(),Ac(591,`tr`,14)(592,`td`,15)(593,`div`,16)(594,`span`,17),vN(595,` sm`),Kc(596,`br`),ug()()(),Ac(597,`td`,21)(598,`p`),vN(599,`Tamanho pequeno`),ug()()(),Ac(600,`tr`,14)(601,`td`,15)(602,`div`,16)(603,`span`,17),vN(604,` md`),Kc(605,`br`),ug()()(),Ac(606,`td`,21)(607,`p`),vN(608,`Tamanho médio`),ug()()(),Ac(609,`tr`,14)(610,`td`,15)(611,`div`,16)(612,`span`,17),vN(613,` lg`),Kc(614,`br`),ug()()(),Ac(615,`td`,21)(616,`p`),vN(617,`Tamanho grande`),ug()()(),Ac(618,`tr`,14)(619,`td`,15)(620,`div`,16)(621,`span`,17),vN(622,` xl`),Kc(623,`br`),ug()()(),Ac(624,`td`,21)(625,`p`),vN(626,`Tamanho extra grande`),ug()()(),Ac(627,`tr`,14)(628,`td`,15)(629,`div`,16)(630,`span`,17),vN(631,` xxl`),Kc(632,`br`),ug()()(),Ac(633,`td`,21)(634,`p`),vN(635,`Tamanho extra extra grande`),ug()()()(),Ac(636,`h4`,4)(637,`code`,5),vN(638,`PoSkeletonType`),ug()(),Ac(639,`div`,2)(640,`p`),vN(641,`Define os tipos visuais disponíveis para o componente `),Ac(642,`code`),vN(643,`po-skeleton`),ug(),vN(644,`.`),ug()(),Ac(645,`h4`,10),vN(646,`Propriedades`),ug(),Ac(647,`table`,11)(648,`tr`,12)(649,`th`,13),vN(650,`Nome`),ug(),Ac(651,`th`,13),vN(652,`Descrição`),ug()(),Ac(653,`tr`,14)(654,`td`,15)(655,`div`,16)(656,`span`,17),vN(657,` normal`),Kc(658,`br`),ug()()(),Ac(659,`td`,21)(660,`p`),vN(661,`Tipo padrão com cor neutra clara`),ug()()(),Ac(662,`tr`,14)(663,`td`,15)(664,`div`,16)(665,`span`,17),vN(666,` primary`),Kc(667,`br`),ug()()(),Ac(668,`td`,21)(669,`p`),vN(670,`Tipo primário com cor neutra média`),ug()()(),Ac(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),vN(675,` content`),Kc(676,`br`),ug()()(),Ac(677,`td`,21)(678,`p`),vN(679,`Tipo de conteúdo com fundo branco`),ug()()()(),Ac(680,`h4`,4)(681,`code`,5),vN(682,`PoSkeletonVariant`),ug()(),Ac(683,`div`,2)(684,`p`),vN(685,`Define as variantes visuais do componente `),Ac(686,`code`),vN(687,`po-skeleton`),ug(),vN(688,`.`),ug()(),Ac(689,`h4`,10),vN(690,`Propriedades`),ug(),Ac(691,`table`,11)(692,`tr`,12)(693,`th`,13),vN(694,`Nome`),ug(),Ac(695,`th`,13),vN(696,`Descrição`),ug()(),Ac(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),vN(701,` text`),Kc(702,`br`),ug()()(),Ac(703,`td`,21)(704,`p`),vN(705,`Variante para simular texto`),ug()()(),Ac(706,`tr`,14)(707,`td`,15)(708,`div`,16)(709,`span`,17),vN(710,` rectangle`),Kc(711,`br`),ug()()(),Ac(712,`td`,21)(713,`p`),vN(714,`Variante retangular (largura maior que altura)`),ug()()(),Ac(715,`tr`,14)(716,`td`,15)(717,`div`,16)(718,`span`,17),vN(719,` square`),Kc(720,`br`),ug()()(),Ac(721,`td`,21)(722,`p`),vN(723,`Variante quadrada (largura igual à altura)`),ug()()(),Ac(724,`tr`,14)(725,`td`,15)(726,`div`,16)(727,`span`,17),vN(728,` circle`),Kc(729,`br`),ug()()(),Ac(730,`td`,21)(731,`p`),vN(732,`Variante circular`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Skeleton`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return a.changeTab(`doc`)}),Kc(3,`sample-po-skeleton-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return a.changeTab(`web`)}),Kc(5,`sample-po-skeleton-basic-view`)(6,`sample-po-skeleton-labs-view`)(7,`sample-po-skeleton-credit-card-view`)(8,`sample-po-skeleton-widget-card-view`)(9,`sample-po-skeleton-user-profile-view`)(10,`sample-po-skeleton-social-post-view`)(11,`sample-po-skeleton-article-view`),ug()()()),l&2&&(cE(`p-actions`,a.actions),Hp(2),cE(`p-active`,a.activeTab===`doc`),Hp(2),cE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[$ze,gae,bae,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})()}];var ke=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[kL.forChild(Ge),kL]})}return o})();var Vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[Ta,ke]})}return o})();export{Vt as DocPoSkeletonModule};