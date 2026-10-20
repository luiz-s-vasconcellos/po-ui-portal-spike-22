import{$r as Zn,Br as Sx,Ei as jc,Fi as mx,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,Pi as mt,Ri as nu,Rt as _oe,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,ga as xx,i as _a,ir as EF,ji as mO,mn as ni,pa as wg,r as Ta,ta as ue$1,ua as wK,va as y_,wi as jE,x as Aee,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var oe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-basic`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`],[1,`po-md-12`]],template:function(l,a){l&1&&(jc(0,`div`,0),nu(1,`po-skeleton`,1)(2,`po-skeleton`,1)(3,`po-skeleton`,1),wg())},dependencies:[Aee],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Skeleton Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-skeleton-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ee,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,oe],encapsulation:2,changeDetection:1})}return o})();function we(o,R){if(o&1){let p=Sx();jc(0,`po-select`,12),JN(),ob(`ngModelChange`,function(a){y_(p);let s=xx();return sO(s.size,a)||(s.size=a),v_(a)}),wg()}if(o&2){let p=xx();ib(`ngModel`,p.size),jE(`p-options`,p.sizeOptions),t0()}}function ye(o,R){if(o&1){let p=Sx();nu(0,`po-divider`,13),jc(1,`po-number`,14),JN(),ob(`ngModelChange`,function(a){y_(p);let s=xx();return sO(s.circleSize,a)||(s.circleSize=a),v_(a)}),mt(`p-change`,function(){y_(p);let a=xx();return v_(a.onCircleSizeChange())}),wg(),jc(2,`po-select`,15),JN(),ob(`ngModelChange`,function(a){y_(p);let s=xx();return sO(s.circleSizeUnit,a)||(s.circleSizeUnit=a),v_(a)}),mt(`p-change`,function(){y_(p);let a=xx();return v_(a.onCircleSizeUnitChange())}),wg(),nu(3,`po-info`,16)}if(o&2){let p=xx();rg(),ib(`ngModel`,p.circleSize),t0(),rg(),ib(`ngModel`,p.circleSizeUnit),jE(`p-options`,p.unitOptions),t0(),rg(),jE(`p-value`,p.circleSize?p.circleSize+p.circleSizeUnit:`Using default size from Size select`)}}function Pe(o,R){if(o&1){let p=Sx();nu(0,`po-divider`,17),jc(1,`po-input`,18),JN(),ob(`ngModelChange`,function(a){y_(p);let s=xx();return sO(s.width,a)||(s.width=a),v_(a)}),wg(),jc(2,`po-input`,19),JN(),ob(`ngModelChange`,function(a){y_(p);let s=xx();return sO(s.height,a)||(s.height=a),v_(a)}),wg(),jc(3,`po-input`,20),JN(),ob(`ngModelChange`,function(a){y_(p);let s=xx();return sO(s.borderRadius,a)||(s.borderRadius=a),v_(a)}),wg()}if(o&2){let p=xx();rg(),ib(`ngModel`,p.width),t0(),rg(),ib(`ngModel`,p.height),t0(),rg(),ib(`ngModel`,p.borderRadius),t0()}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit=`px`;animationOptions=[{label:`Shimmer`,value:`shimmer`},{label:`Pulse`,value:`pulse`},{label:`None`,value:`none`}];sizeOptions=[{label:`Extra Small`,value:`xs`},{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra Large`,value:`xl`},{label:`Extra Extra Large`,value:`2xl`}];typeOptions=[{label:`Normal`,value:`normal`},{label:`Primary`,value:`primary`},{label:`Content`,value:`content`}];variantOptions=[{label:`Circle`,value:`circle`},{label:`Text`,value:`text`},{label:`Rectangle`,value:`rectangle`},{label:`Square`,value:`square`}];unitOptions=[{label:`Pixels (px)`,value:`px`},{label:`REM`,value:`rem`},{label:`EM`,value:`em`},{label:`Percentage (%)`,value:`%`}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant===`circle`){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius=`50%`}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant=`circle`,this.type=`normal`,this.animation=`shimmer`,this.size=`md`,this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel=`Carregando`,this.circleSize=null,this.circleSizeUnit=`px`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-labs`]],standalone:!1,decls:17,vars:19,consts:[[1,`po-row`],[1,`po-md-12`,3,`p-variant`,`p-type`,`p-animation`,`p-size`,`p-width`,`p-height`,`p-border-radius`,`p-aria-label`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Animation`,1,`po-md-12`],[`name`,`animation`,`p-label`,`Animation`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Shapes`,1,`po-md-12`],[`name`,`variant`,`p-label`,`Variant`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModel`,`p-options`],[`p-label`,`Accessibility`,1,`po-md-12`],[`name`,`ariaLabel`,`p-label`,`Aria Label`,`p-help`,`Texto descritivo para leitores de tela (acessibilidade)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Circle Dynamic Size (optional)`,1,`po-md-12`],[`name`,`circleSize`,`p-clean`,``,`p-label`,`Circle Size`,`p-help`,`Define o tamanho do círculo`,`p-min`,`1`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`circleSizeUnit`,`p-label`,`Unit`,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Applied Size`,1,`po-md-6`,3,`p-value`],[`p-label`,`Custom (optional)`,1,`po-md-12`],[`name`,`width`,`p-clean`,``,`p-label`,`Width`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderRadius`,`p-clean`,``,`p-label`,`Border Radius`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,a){l&1&&(jc(0,`div`,0),nu(1,`po-skeleton`,1),wg(),nu(2,`hr`)(3,`po-info`,2)(4,`hr`),jc(5,`form`,0),nu(6,`po-divider`,3),jc(7,`po-select`,4),JN(),ob(`ngModelChange`,function(x){return sO(a.animation,x)||(a.animation=x),x}),wg(),jc(8,`po-select`,5),JN(),ob(`ngModelChange`,function(x){return sO(a.type,x)||(a.type=x),x}),wg(),nu(9,`po-divider`,6),jc(10,`po-select`,7),JN(),ob(`ngModelChange`,function(x){return sO(a.variant,x)||(a.variant=x),x}),mt(`p-change`,function(){return a.onVariantChange()}),wg(),px(11,we,1,2,`po-select`,8),nu(12,`po-divider`,9),jc(13,`po-input`,10),JN(),ob(`ngModelChange`,function(x){return sO(a.ariaLabel,x)||(a.ariaLabel=x),x}),wg(),px(14,ye,4,4),px(15,Pe,4,3),jc(16,`po-button`,11),mt(`p-click`,function(){return a.restore()}),wg()()),l&2&&(rg(),jE(`p-variant`,a.variant)(`p-type`,a.type)(`p-animation`,a.animation)(`p-size`,a.size)(`p-width`,a.width||void 0)(`p-height`,a.height||void 0)(`p-border-radius`,a.borderRadius||void 0)(`p-aria-label`,a.ariaLabel),rg(2),jE(`p-value`,a.modelValue),rg(4),ib(`ngModel`,a.animation),jE(`p-options`,a.animationOptions),t0(),rg(),ib(`ngModel`,a.type),jE(`p-options`,a.typeOptions),t0(),rg(2),ib(`ngModel`,a.variant),jE(`p-options`,a.variantOptions),t0(),rg(),mx(a.variant!==`text`?11:-1),rg(2),ib(`ngModel`,a.ariaLabel),t0(),rg(),mx(a.variant===`circle`?14:-1),rg(),mx(a.variant===`text`?15:-1))},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,doe,moe,_oe,Aee],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Skeleton Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-skeleton-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-credit-card`]],standalone:!1,decls:47,vars:0,consts:[[1,`po-row`],[`p-height`,`340`,`p-title`,`Payment Method`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card`],[1,`po-md-2`,`card-chip`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`],[1,`po-row`,`card-number`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`],[1,`po-row`,`card-details`],[1,`po-sm-7`,`po-md-7`,`card-holder`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`120px`],[1,`po-sm-5`,`po-md-5`,`card-expiry`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`50px`],[1,`card-brand`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-height`,`340`,`p-title`,`Payment Method - Content`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card-gray`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`,`p-type`,`content`],[`p-variant`,`text`,`p-type`,`content`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`120px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`50px`,`p-type`,`content`],[`p-variant`,`circle`,`p-size`,`sm`,`p-type`,`content`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,0)(4,`div`,3),nu(5,`po-skeleton`,4),wg()(),jc(6,`div`,5)(7,`div`,6),nu(8,`po-skeleton`,7),wg(),jc(9,`div`,6),nu(10,`po-skeleton`,7),wg(),jc(11,`div`,6),nu(12,`po-skeleton`,7),wg(),jc(13,`div`,6),nu(14,`po-skeleton`,7),wg()(),jc(15,`div`,8)(16,`div`,9),nu(17,`po-skeleton`,10)(18,`po-skeleton`,11),wg(),jc(19,`div`,12),nu(20,`po-skeleton`,13)(21,`po-skeleton`,14),wg()(),jc(22,`div`,15),nu(23,`po-skeleton`,16),wg()()(),jc(24,`po-widget`,17)(25,`div`,18)(26,`div`,0)(27,`div`,3),nu(28,`po-skeleton`,19),wg()(),jc(29,`div`,5)(30,`div`,6),nu(31,`po-skeleton`,20),wg(),jc(32,`div`,6),nu(33,`po-skeleton`,20),wg(),jc(34,`div`,6),nu(35,`po-skeleton`,20),wg(),jc(36,`div`,6),nu(37,`po-skeleton`,20),wg()(),jc(38,`div`,8)(39,`div`,9),nu(40,`po-skeleton`,21)(41,`po-skeleton`,22),wg(),jc(42,`div`,12),nu(43,`po-skeleton`,23)(44,`po-skeleton`,24),wg()(),jc(45,`div`,15),nu(46,`po-skeleton`,25),wg()()()())},dependencies:[Noe,Aee],styles:[`.credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}`],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-credit-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Skeleton - Credit Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css`),wg(),jc(25,`pre`,11),iO(26,`.credit-card {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-skeleton-credit-card`),wg(),nu(29,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,re],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-widget-card`]],standalone:!1,decls:17,vars:0,consts:[[1,`po-row`],[1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`widget-card`],[1,`po-row`,`widget-header`],[1,`po-sm-7`,`po-md-7`],[`p-variant`,`text`,`p-height`,`32px`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`,`p-width`,`80px`,`p-height`,`32px`],[1,`po-sm-2`,`po-md-2`,`widget-icon`],[`p-variant`,`square`,`p-size`,`sm`],[1,`po-row`,`widget-content`],[1,`widget-spacer`],[1,`po-row`,`widget-footer`],[1,`po-sm-12`,`po-md-12`,`footer-button`],[`p-variant`,`rectangle`,`p-size`,`md`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),nu(5,`po-skeleton`,5),wg(),jc(6,`div`,6),nu(7,`po-skeleton`,7),wg(),jc(8,`div`,8),nu(9,`po-skeleton`,9),wg()(),jc(10,`div`,10)(11,`div`,4),nu(12,`po-skeleton`,5),wg()(),nu(13,`div`,11),jc(14,`div`,12)(15,`div`,13),nu(16,`po-skeleton`,14),wg()()()()())},dependencies:[Noe,Aee],styles:[`.widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-widget-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Skeleton - Widget Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css`),wg(),jc(25,`pre`,11),iO(26,`.widget-card {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-skeleton-widget-card`),wg(),nu(29,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Oe,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-user-profile`]],standalone:!1,decls:20,vars:0,consts:[[1,`po-row`],[`p-title`,`User Profile`,1,`po-md-6`],[1,`profile-card`],[1,`profile-picture`],[`p-variant`,`circle`,`p-size`,`xl`,`p-aria-label`,`Carregando perfil do usuário`],[`p-variant`,`text`,`p-width`,`150px`],[`p-variant`,`text`,`p-width`,`200px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[1,`profile-stats`],[1,`stat`],[`p-variant`,`text`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`70px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`65px`,`p-size`,`sm`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),nu(4,`po-skeleton`,4),wg(),nu(5,`po-skeleton`,5)(6,`po-skeleton`,6)(7,`po-skeleton`,7)(8,`po-skeleton`,8)(9,`po-skeleton`,9),jc(10,`div`,10)(11,`div`,11),nu(12,`po-skeleton`,12)(13,`po-skeleton`,13),wg(),jc(14,`div`,11),nu(15,`po-skeleton`,12)(16,`po-skeleton`,14),wg(),jc(17,`div`,11),nu(18,`po-skeleton`,12)(19,`po-skeleton`,15),wg()()()()())},dependencies:[Noe,Aee],styles:[`.profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-user-profile-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Skeleton - User Profile`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css`),wg(),jc(25,`pre`,11),iO(26,`.profile-card {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-skeleton-user-profile`),wg(),nu(29,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,qe,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-social-post`]],standalone:!1,decls:35,vars:0,consts:[[1,`po-row`],[`p-height`,`550`,1,`po-md-6`],[1,`post-card`],[1,`post-header`],[`p-variant`,`circle`,`p-size`,`sm`,`p-aria-label`,`Carregando post de rede social`],[1,`post-header-text`],[`p-variant`,`text`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`300px`],[1,`post-actions`],[`p-variant`,`rectangle`,`p-size`,`sm`,`p-width`,`30px`,`p-height`,`30px`],[`p-variant`,`text`,`p-width`,`120px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`85%`],[`p-variant`,`text`,`p-width`,`60%`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`250px`],[`p-variant`,`text`,`p-width`,`140px`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[`p-variant`,`text`,`p-width`,`65%`],[`p-variant`,`text`,`p-width`,`50%`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),nu(4,`po-skeleton`,4),jc(5,`div`,5),nu(6,`po-skeleton`,6)(7,`po-skeleton`,6),wg()(),nu(8,`po-skeleton`,7),jc(9,`div`,8),nu(10,`po-skeleton`,9)(11,`po-skeleton`,9)(12,`po-skeleton`,9),wg(),nu(13,`po-skeleton`,10)(14,`po-skeleton`,11)(15,`po-skeleton`,12)(16,`po-skeleton`,13),wg()(),jc(17,`po-widget`,1)(18,`div`,2)(19,`div`,3),nu(20,`po-skeleton`,14),jc(21,`div`,5),nu(22,`po-skeleton`,6)(23,`po-skeleton`,6),wg()(),nu(24,`po-skeleton`,15),jc(25,`div`,8),nu(26,`po-skeleton`,9)(27,`po-skeleton`,9)(28,`po-skeleton`,9),wg(),nu(29,`po-skeleton`,16)(30,`po-skeleton`,11)(31,`po-skeleton`,17)(32,`po-skeleton`,18)(33,`po-skeleton`,19)(34,`po-skeleton`,20),wg()()())},dependencies:[Noe,Aee],styles:[`.post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-social-post-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Skeleton - Social Post`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css`),wg(),jc(25,`pre`,11),iO(26,`.post-card {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-skeleton-social-post`),wg(),nu(29,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Fe,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-article`]],standalone:!1,decls:15,vars:0,consts:[[1,`po-row`],[`p-height`,`380`,`p-title`,`Latest Article`,1,`po-md-6`],[1,`article-card`],[`p-variant`,`rectangle`,`p-height`,`150px`,`p-aria-label`,`Carregando artigo`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[1,`article-author`],[`p-variant`,`circle`,`p-size`,`sm`],[1,`author-details`],[`p-variant`,`text`,`p-width`,`100px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`80px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`75%`],[`p-variant`,`text`,`p-width`,`80px`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),nu(3,`po-skeleton`,3)(4,`po-skeleton`,4)(5,`po-skeleton`,5),jc(6,`div`,6),nu(7,`po-skeleton`,7),jc(8,`div`,8),nu(9,`po-skeleton`,9)(10,`po-skeleton`,10),wg()(),nu(11,`po-skeleton`,4)(12,`po-skeleton`,4)(13,`po-skeleton`,11)(14,`po-skeleton`,12),wg()()())},dependencies:[Noe,Aee],styles:[`.article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-article-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Skeleton - Article`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-skeleton-article/sample-po-skeleton-article.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-skeleton-article/sample-po-skeleton-article.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-skeleton-article/sample-po-skeleton-article.component.css`),wg(),jc(25,`pre`,11),iO(26,`.article-card {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-skeleton-article`),wg(),nu(29,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,He,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-doc`]],standalone:!1,decls:733,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonAnimation`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonSize`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonType`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonVariant`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoSkeletonModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-skeleton.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoSkeletonComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-skeleton`),wg(),iO(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),wg(),jc(18,`p`),iO(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),wg(),jc(20,`h4`),iO(21,`Tokens customizáveis`),wg(),jc(22,`p`),iO(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(24,`blockquote`)(25,`p`),iO(26,`Para maiores informações, acesse o guia `),jc(27,`a`,6),iO(28,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(29,`.`),wg()(),jc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),iO(34,`Propriedade`),wg(),jc(35,`th`),iO(36,`Descrição`),wg(),jc(37,`th`),iO(38,`Valor Padrão`),wg()()(),jc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),iO(43,`Cores`),wg()(),nu(44,`td`)(45,`td`),wg(),jc(46,`tr`)(47,`td`)(48,`code`),iO(49,`--color`),wg()(),jc(50,`td`),iO(51,`Cor de fundo do skeleton (tipo normal)`),wg(),jc(52,`td`)(53,`code`),iO(54,`var(--color-neutral-light-20)`),wg()()(),jc(55,`tr`)(56,`td`)(57,`code`),iO(58,`--color-primary`),wg()(),jc(59,`td`),iO(60,`Cor de fundo do skeleton (tipo primary)`),wg(),jc(61,`td`)(62,`code`),iO(63,`var(--color-neutral-mid-40)`),wg()()(),jc(64,`tr`)(65,`td`)(66,`code`),iO(67,`--color-content`),wg()(),jc(68,`td`),iO(69,`Cor de fundo do skeleton (tipo content)`),wg(),jc(70,`td`)(71,`code`),iO(72,`var(--color-neutral-light-00)`),wg()()(),jc(73,`tr`)(74,`td`)(75,`code`),iO(76,`--shimmer-highlight`),wg()(),jc(77,`td`),iO(78,`Cor de destaque do shimmer (tipo normal)`),wg(),jc(79,`td`)(80,`code`),iO(81,`var(--color-neutral-light-30)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),iO(85,`--shimmer-highlight-primary`),wg()(),jc(86,`td`),iO(87,`Cor de destaque do shimmer (tipo primary)`),wg(),jc(88,`td`)(89,`code`),iO(90,`var(--color-neutral-light-20)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),iO(94,`--shimmer-highlight-content`),wg()(),jc(95,`td`),iO(96,`Cor de destaque do shimmer (tipo content)`),wg(),jc(97,`td`)(98,`code`),iO(99,`var(--color-neutral-light-05)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`strong`),iO(103,`Espaçamento`),wg()(),nu(104,`td`)(105,`td`),wg(),jc(106,`tr`)(107,`td`)(108,`code`),iO(109,`--margin-bottom`),wg()(),jc(110,`td`),iO(111,`Margem inferior do skeleton`),wg(),jc(112,`td`)(113,`code`),iO(114,`var(--spacing-xs)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`strong`),iO(118,`Bordas`),wg()(),nu(119,`td`)(120,`td`),wg(),jc(121,`tr`)(122,`td`)(123,`code`),iO(124,`--border-radius`),wg()(),jc(125,`td`),iO(126,`Raio da borda do skeleton`),wg(),jc(127,`td`)(128,`code`),iO(129,`var(--border-radius-md)`),wg()()(),jc(130,`tr`)(131,`td`)(132,`code`),iO(133,`--border-radius-text`),wg()(),jc(134,`td`),iO(135,`Raio da borda para a variante text`),wg(),jc(136,`td`)(137,`code`),iO(138,`var(--border-radius-md)`),wg()()(),jc(139,`tr`)(140,`td`)(141,`code`),iO(142,`--border-radius-primary`),wg()(),jc(143,`td`),iO(144,`Raio da borda do skeleton (tipo primary)`),wg(),jc(145,`td`)(146,`code`),iO(147,`var(--border-radius-md)`),wg()()(),jc(148,`tr`)(149,`td`)(150,`code`),iO(151,`--border-radius-content`),wg()(),jc(152,`td`),iO(153,`Raio da borda do skeleton (tipo content)`),wg(),jc(154,`td`)(155,`code`),iO(156,`var(--border-radius-lg)`),wg()()(),jc(157,`tr`)(158,`td`)(159,`strong`),iO(160,`Transições`),wg()(),nu(161,`td`)(162,`td`),wg(),jc(163,`tr`)(164,`td`)(165,`code`),iO(166,`--transition-property`),wg()(),jc(167,`td`),iO(168,`Propriedade CSS da transição`),wg(),jc(169,`td`)(170,`code`),iO(171,`all`),wg()()(),jc(172,`tr`)(173,`td`)(174,`code`),iO(175,`--transition-duration`),wg()(),jc(176,`td`),iO(177,`Duração da transição de cor`),wg(),jc(178,`td`)(179,`code`),iO(180,`var(--duration-moderate)`),wg()()(),jc(181,`tr`)(182,`td`)(183,`code`),iO(184,`--transition-timing`),wg()(),jc(185,`td`),iO(186,`Função de temporização da transição/animação`),wg(),jc(187,`td`)(188,`code`),iO(189,`var(--timing-continuous)`),wg()()(),jc(190,`tr`)(191,`td`)(192,`strong`),iO(193,`Animações`),wg()(),nu(194,`td`)(195,`td`),wg(),jc(196,`tr`)(197,`td`)(198,`code`),iO(199,`--animation-duration-pulse`),wg()(),jc(200,`td`),iO(201,`Duração da animação de pulsação`),wg(),jc(202,`td`)(203,`code`),iO(204,`var(--duration-very-slow)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`code`),iO(208,`--animation-duration-shimmer`),wg()(),jc(209,`td`),iO(210,`Duração da animação de brilho deslizante`),wg(),jc(211,`td`)(212,`code`),iO(213,`var(--duration-ultra-slow)`),wg()()()()()(),jc(214,`div`,7)(215,`h4`,8),iO(216,`Seletor`),wg(),jc(217,`pre`,9),iO(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),wg()(),jc(219,`h4`,10),iO(220,`Propriedades`),wg(),jc(221,`table`,11)(222,`tr`,12)(223,`th`,13),iO(224,`Nome`),wg(),jc(225,`th`,13),iO(226,`Tipo`),wg(),jc(227,`th`,13),iO(228,`Padrão`),wg(),jc(229,`th`,13),iO(230,`Descrição`),wg()(),jc(231,`tr`,14)(232,`td`,15)(233,`div`,16)(234,`span`,17),iO(235,` p-animation`),nu(236,`br`),wg()()(),jc(237,`td`,18)(238,`code`,19),iO(239,`PoSkeletonAnimation`),wg()(),jc(240,`td`,20)(241,`p`)(242,`code`),iO(243,`shimmer`),wg()()(),jc(244,`td`,21)(245,`em`)(246,`strong`),iO(247,`(opcional)`),wg()(),jc(248,`p`),iO(249,`Define o tipo de animação do skeleton.`),wg(),jc(250,`p`),iO(251,`Valores válidos:`),wg(),jc(252,`ul`)(253,`li`)(254,`code`),iO(255,`none`),wg(),iO(256,`: Sem animação`),wg(),jc(257,`li`)(258,`code`),iO(259,`pulse`),wg(),iO(260,`: Animação de pulsação`),wg(),jc(261,`li`)(262,`code`),iO(263,`shimmer`),wg(),iO(264,`: Animação de brilho deslizante`),wg()()()(),jc(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),iO(269,` p-aria-label`),nu(270,`br`),wg()()(),jc(271,`td`,18)(272,`code`,22),iO(273,`string`),wg()(),jc(274,`td`,20),iO(275,`-`),wg(),jc(276,`td`,21)(277,`em`)(278,`strong`),iO(279,`(opcional)`),wg()(),jc(280,`p`),iO(281,`Define a descrição acessível do conteúdo que está sendo carregado.`),wg(),jc(282,`p`),iO(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),wg(),jc(284,`p`)(285,`strong`),iO(286,`Quando usar:`),wg()(),jc(287,`ul`)(288,`li`),iO(289,`Use em `),jc(290,`strong`),iO(291,`skeletons únicos`),wg(),iO(292,` ou no `),jc(293,`strong`),iO(294,`primeiro skeleton de um grupo`),wg(),iO(295,` com descrição contextual`),wg(),jc(296,`li`),iO(297,`Evite usar em múltiplos skeletons dentro da mesma área sem contexto, para não causar repetição excessiva`),wg()(),jc(298,`p`)(299,`strong`),iO(300,`Exemplos de uso:`),wg()(),jc(301,`pre`)(302,`code`,23),iO(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),wg()(),jc(304,`blockquote`)(305,`p`)(306,`strong`),iO(307,`Boas práticas de acessibilidade:`),wg()(),jc(308,`ul`)(309,`li`),iO(310,`Forneça contexto específico na label para que os usuários entendam o que está carregando`),wg()()(),jc(311,`blockquote`)(312,`ul`)(313,`li`),iO(314,`Em casos complexos, considere usar um único `),jc(315,`code`),iO(316,`<div role="status">`),wg(),iO(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),wg()()()()(),jc(318,`tr`,14)(319,`td`,15)(320,`div`,16)(321,`span`,17),iO(322,` p-border-radius`),nu(323,`br`),wg()()(),jc(324,`td`,18)(325,`code`,22),iO(326,`string`),wg()(),jc(327,`td`,20),iO(328,`-`),wg(),jc(329,`td`,21)(330,`em`)(331,`strong`),iO(332,`(opcional)`),wg()(),jc(333,`p`),iO(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),wg(),jc(335,`p`),iO(336,`Esta propriedade sobrescreve o border-radius padrão de cada variante.`),wg()()(),jc(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),iO(341,` p-height`),nu(342,`br`),wg()()(),jc(343,`td`,18)(344,`code`,22),iO(345,`string`),wg()(),jc(346,`td`,20),iO(347,`-`),wg(),jc(348,`td`,21)(349,`em`)(350,`strong`),iO(351,`(opcional)`),wg()(),jc(352,`p`),iO(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),wg(),jc(354,`p`),iO(355,`Quando definido, sobrescreve a altura padrão da variante.`),wg()()(),jc(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),iO(360,` p-size`),nu(361,`br`),wg()()(),jc(362,`td`,18)(363,`code`,24),iO(364,`PoSkeletonSize`),wg()(),jc(365,`td`,20)(366,`p`)(367,`code`),iO(368,`md`),wg()()(),jc(369,`td`,21)(370,`em`)(371,`strong`),iO(372,`(opcional)`),wg()(),jc(373,`p`),iO(374,`Define o tamanho do skeleton para as variantes pré-definidas (`),jc(375,`code`),iO(376,`rectangle`),wg(),iO(377,`, `),jc(378,`code`),iO(379,`square`),wg(),iO(380,`, `),jc(381,`code`),iO(382,`circle`),wg(),iO(383,`).`),wg(),jc(384,`p`),iO(385,`Valores válidos:`),wg(),jc(386,`ul`)(387,`li`)(388,`code`),iO(389,`xs`),wg(),iO(390,`: Extra pequeno (24px para square/circle, 72px x 24px para rectangle)`),wg(),jc(391,`li`)(392,`code`),iO(393,`sm`),wg(),iO(394,`: Pequeno (32px para square/circle, 96px x 32px para rectangle)`),wg(),jc(395,`li`)(396,`code`),iO(397,`md`),wg(),iO(398,`: Médio (48px para square/circle, 144px x 48px para rectangle)`),wg(),jc(399,`li`)(400,`code`),iO(401,`lg`),wg(),iO(402,`: Grande (64px para square/circle, 192px x 64px para rectangle)`),wg(),jc(403,`li`)(404,`code`),iO(405,`xl`),wg(),iO(406,`: Extra grande (96px para square/circle, 288px x 96px para rectangle)`),wg(),jc(407,`li`)(408,`code`),iO(409,`2xl`),wg(),iO(410,`: Extra extra grande (144px para square/circle, 432px x 144px para rectangle)`),wg()(),jc(411,`p`),iO(412,`Esta propriedade é ignorada quando `),jc(413,`code`),iO(414,`p-width`),wg(),iO(415,` ou `),jc(416,`code`),iO(417,`p-height`),wg(),iO(418,` são definidos explicitamente.`),wg()()(),jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),iO(423,` p-type`),nu(424,`br`),wg()()(),jc(425,`td`,18)(426,`code`,25),iO(427,`PoSkeletonType`),wg()(),jc(428,`td`,20)(429,`p`)(430,`code`),iO(431,`normal`),wg()()(),jc(432,`td`,21)(433,`em`)(434,`strong`),iO(435,`(opcional)`),wg()(),jc(436,`p`),iO(437,`Define o tipo visual do skeleton, alterando sua cor de fundo.`),wg(),jc(438,`p`),iO(439,`Valores válidos:`),wg(),jc(440,`ul`)(441,`li`)(442,`code`),iO(443,`normal`),wg(),iO(444,`: Cor neutra clara (padrão)`),wg(),jc(445,`li`)(446,`code`),iO(447,`primary`),wg(),iO(448,`: Cor neutra média`),wg(),jc(449,`li`)(450,`code`),iO(451,`content`),wg(),iO(452,`: Fundo branco`),wg()()()(),jc(453,`tr`,14)(454,`td`,15)(455,`div`,16)(456,`span`,17),iO(457,` p-variant`),nu(458,`br`),wg()()(),jc(459,`td`,18)(460,`code`,26),iO(461,`PoSkeletonVariant`),wg()(),jc(462,`td`,20)(463,`p`)(464,`code`),iO(465,`text`),wg()()(),jc(466,`td`,21)(467,`em`)(468,`strong`),iO(469,`(opcional)`),wg()(),jc(470,`p`),iO(471,`Define a variante visual do skeleton.`),wg(),jc(472,`p`),iO(473,`Valores válidos:`),wg(),jc(474,`ul`)(475,`li`)(476,`code`),iO(477,`text`),wg(),iO(478,`: Simula uma linha de texto (altura padrão: 1em)`),wg(),jc(479,`li`)(480,`code`),iO(481,`rectangle`),wg(),iO(482,`: Forma retangular (proporção 3:1 por padrão)`),wg(),jc(483,`li`)(484,`code`),iO(485,`square`),wg(),iO(486,`: Forma quadrada (largura e altura iguais)`),wg(),jc(487,`li`)(488,`code`),iO(489,`circle`),wg(),iO(490,`: Forma circular (largura e altura iguais)`),wg()()()(),jc(491,`tr`,14)(492,`td`,15)(493,`div`,16)(494,`span`,17),iO(495,` p-width`),nu(496,`br`),wg()()(),jc(497,`td`,18)(498,`code`,22),iO(499,`string`),wg()(),jc(500,`td`,20)(501,`p`)(502,`code`),iO(503,`100%`),wg(),iO(504,` para variante `),jc(505,`code`),iO(506,`text`),wg(),iO(507,`, tamanho baseado em `),jc(508,`code`),iO(509,`p-size`),wg(),iO(510,` para outras variantes`),wg()(),jc(511,`td`,21)(512,`em`)(513,`strong`),iO(514,`(opcional)`),wg()(),jc(515,`p`),iO(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),wg(),jc(517,`p`),iO(518,`Quando definido, sobrescreve a largura padrão da variante.`),wg()()()(),jc(519,`h3`),iO(520,`Enums`),wg(),jc(521,`h4`,4)(522,`code`,5),iO(523,`PoSkeletonAnimation`),wg()(),jc(524,`div`,2)(525,`p`),iO(526,`Define os tipos de animação do componente `),jc(527,`code`),iO(528,`po-skeleton`),wg(),iO(529,`.`),wg()(),jc(530,`h4`,10),iO(531,`Propriedades`),wg(),jc(532,`table`,11)(533,`tr`,12)(534,`th`,13),iO(535,`Nome`),wg(),jc(536,`th`,13),iO(537,`Descrição`),wg()(),jc(538,`tr`,14)(539,`td`,15)(540,`div`,16)(541,`span`,17),iO(542,` none`),nu(543,`br`),wg()()(),jc(544,`td`,21)(545,`p`),iO(546,`Sem animação`),wg()()(),jc(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),iO(551,` pulse`),nu(552,`br`),wg()()(),jc(553,`td`,21)(554,`p`),iO(555,`Animação de pulsação`),wg()()(),jc(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),iO(560,` shimmer`),nu(561,`br`),wg()()(),jc(562,`td`,21)(563,`p`),iO(564,`Animação de brilho deslizante`),wg()()()(),jc(565,`h4`,4)(566,`code`,5),iO(567,`PoSkeletonSize`),wg()(),jc(568,`div`,2)(569,`p`),iO(570,`Define os tamanhos disponíveis para o componente `),jc(571,`code`),iO(572,`po-skeleton`),wg(),iO(573,`.`),wg()(),jc(574,`h4`,10),iO(575,`Propriedades`),wg(),jc(576,`table`,11)(577,`tr`,12)(578,`th`,13),iO(579,`Nome`),wg(),jc(580,`th`,13),iO(581,`Descrição`),wg()(),jc(582,`tr`,14)(583,`td`,15)(584,`div`,16)(585,`span`,17),iO(586,` xs`),nu(587,`br`),wg()()(),jc(588,`td`,21)(589,`p`),iO(590,`Tamanho extra pequeno`),wg()()(),jc(591,`tr`,14)(592,`td`,15)(593,`div`,16)(594,`span`,17),iO(595,` sm`),nu(596,`br`),wg()()(),jc(597,`td`,21)(598,`p`),iO(599,`Tamanho pequeno`),wg()()(),jc(600,`tr`,14)(601,`td`,15)(602,`div`,16)(603,`span`,17),iO(604,` md`),nu(605,`br`),wg()()(),jc(606,`td`,21)(607,`p`),iO(608,`Tamanho médio`),wg()()(),jc(609,`tr`,14)(610,`td`,15)(611,`div`,16)(612,`span`,17),iO(613,` lg`),nu(614,`br`),wg()()(),jc(615,`td`,21)(616,`p`),iO(617,`Tamanho grande`),wg()()(),jc(618,`tr`,14)(619,`td`,15)(620,`div`,16)(621,`span`,17),iO(622,` xl`),nu(623,`br`),wg()()(),jc(624,`td`,21)(625,`p`),iO(626,`Tamanho extra grande`),wg()()(),jc(627,`tr`,14)(628,`td`,15)(629,`div`,16)(630,`span`,17),iO(631,` xxl`),nu(632,`br`),wg()()(),jc(633,`td`,21)(634,`p`),iO(635,`Tamanho extra extra grande`),wg()()()(),jc(636,`h4`,4)(637,`code`,5),iO(638,`PoSkeletonType`),wg()(),jc(639,`div`,2)(640,`p`),iO(641,`Define os tipos visuais disponíveis para o componente `),jc(642,`code`),iO(643,`po-skeleton`),wg(),iO(644,`.`),wg()(),jc(645,`h4`,10),iO(646,`Propriedades`),wg(),jc(647,`table`,11)(648,`tr`,12)(649,`th`,13),iO(650,`Nome`),wg(),jc(651,`th`,13),iO(652,`Descrição`),wg()(),jc(653,`tr`,14)(654,`td`,15)(655,`div`,16)(656,`span`,17),iO(657,` normal`),nu(658,`br`),wg()()(),jc(659,`td`,21)(660,`p`),iO(661,`Tipo padrão com cor neutra clara`),wg()()(),jc(662,`tr`,14)(663,`td`,15)(664,`div`,16)(665,`span`,17),iO(666,` primary`),nu(667,`br`),wg()()(),jc(668,`td`,21)(669,`p`),iO(670,`Tipo primário com cor neutra média`),wg()()(),jc(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),iO(675,` content`),nu(676,`br`),wg()()(),jc(677,`td`,21)(678,`p`),iO(679,`Tipo de conteúdo com fundo branco`),wg()()()(),jc(680,`h4`,4)(681,`code`,5),iO(682,`PoSkeletonVariant`),wg()(),jc(683,`div`,2)(684,`p`),iO(685,`Define as variantes visuais do componente `),jc(686,`code`),iO(687,`po-skeleton`),wg(),iO(688,`.`),wg()(),jc(689,`h4`,10),iO(690,`Propriedades`),wg(),jc(691,`table`,11)(692,`tr`,12)(693,`th`,13),iO(694,`Nome`),wg(),jc(695,`th`,13),iO(696,`Descrição`),wg()(),jc(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),iO(701,` text`),nu(702,`br`),wg()()(),jc(703,`td`,21)(704,`p`),iO(705,`Variante para simular texto`),wg()()(),jc(706,`tr`,14)(707,`td`,15)(708,`div`,16)(709,`span`,17),iO(710,` rectangle`),nu(711,`br`),wg()()(),jc(712,`td`,21)(713,`p`),iO(714,`Variante retangular (largura maior que altura)`),wg()()(),jc(715,`tr`,14)(716,`td`,15)(717,`div`,16)(718,`span`,17),iO(719,` square`),nu(720,`br`),wg()()(),jc(721,`td`,21)(722,`p`),iO(723,`Variante quadrada (largura igual à altura)`),wg()()(),jc(724,`tr`,14)(725,`td`,15)(726,`div`,16)(727,`span`,17),iO(728,` circle`),nu(729,`br`),wg()()(),jc(730,`td`,21)(731,`p`),iO(732,`Variante circular`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Skeleton`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(3,`sample-po-skeleton-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`web`)}),nu(5,`sample-po-skeleton-basic-view`)(6,`sample-po-skeleton-labs-view`)(7,`sample-po-skeleton-credit-card-view`)(8,`sample-po-skeleton-widget-card-view`)(9,`sample-po-skeleton-user-profile-view`)(10,`sample-po-skeleton-social-post-view`)(11,`sample-po-skeleton-article-view`),wg()()()),l&2&&(jE(`p-actions`,a.actions),rg(2),jE(`p-active`,a.activeTab===`doc`),rg(2),jE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[Kze,bae,Sae,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})()}];var ke=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[C1.forChild(Ge),C1]})}return o})();var Vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[Ta,ke]})}return o})();export{Vt as DocPoSkeletonModule};