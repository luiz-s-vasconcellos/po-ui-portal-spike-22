import{$r as Vx,C as B8e,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,cn as lU,ea as p0,ga as w,l as ar,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,yr as Mx}from"./main-NT5YGKBQ.js";var oe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-basic`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`],[1,`po-md-12`]],template:function(l,a){l&1&&(Ml(0,`div`,0),ql(1,`po-skeleton`,1)(2,`po-skeleton`,1)(3,`po-skeleton`,1),lg())},dependencies:[B8e],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Skeleton Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-skeleton-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ee,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,oe],encapsulation:2,changeDetection:1})}return o})();function we(o,R){if(o&1){let p=Vx();Ml(0,`po-select`,12),Mw(`ngModelChange`,function(a){Qy(p);let s=zx();return yN(s.size,a)||(s.size=a),Jy(a)}),lg(),f0()}if(o&2){let p=zx();Tw(`ngModel`,p.size),cw(`p-options`,p.sizeOptions),p0()}}function ye(o,R){if(o&1){let p=Vx();ql(0,`po-divider`,13),Ml(1,`po-number`,14),Mw(`ngModelChange`,function(a){Qy(p);let s=zx();return yN(s.circleSize,a)||(s.circleSize=a),Jy(a)}),ht(`p-change`,function(){Qy(p);return Jy(zx().onCircleSizeChange())}),lg(),f0(),Ml(2,`po-select`,15),Mw(`ngModelChange`,function(a){Qy(p);let s=zx();return yN(s.circleSizeUnit,a)||(s.circleSizeUnit=a),Jy(a)}),ht(`p-change`,function(){Qy(p);return Jy(zx().onCircleSizeUnitChange())}),lg(),f0(),ql(3,`po-info`,16)}if(o&2){let p=zx();Up(),Tw(`ngModel`,p.circleSize),p0(),Up(),Tw(`ngModel`,p.circleSizeUnit),cw(`p-options`,p.unitOptions),p0(),Up(),cw(`p-value`,p.circleSize?p.circleSize+p.circleSizeUnit:`Using default size from Size select`)}}function Pe(o,R){if(o&1){let p=Vx();ql(0,`po-divider`,17),Ml(1,`po-input`,18),Mw(`ngModelChange`,function(a){Qy(p);let s=zx();return yN(s.width,a)||(s.width=a),Jy(a)}),lg(),f0(),Ml(2,`po-input`,19),Mw(`ngModelChange`,function(a){Qy(p);let s=zx();return yN(s.height,a)||(s.height=a),Jy(a)}),lg(),f0(),Ml(3,`po-input`,20),Mw(`ngModelChange`,function(a){Qy(p);let s=zx();return yN(s.borderRadius,a)||(s.borderRadius=a),Jy(a)}),lg(),f0()}if(o&2){let p=zx();Up(),Tw(`ngModel`,p.width),p0(),Up(),Tw(`ngModel`,p.height),p0(),Up(),Tw(`ngModel`,p.borderRadius),p0()}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit=`px`;animationOptions=[{label:`Shimmer`,value:`shimmer`},{label:`Pulse`,value:`pulse`},{label:`None`,value:`none`}];sizeOptions=[{label:`Extra Small`,value:`xs`},{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra Large`,value:`xl`},{label:`Extra Extra Large`,value:`2xl`}];typeOptions=[{label:`Normal`,value:`normal`},{label:`Primary`,value:`primary`},{label:`Content`,value:`content`}];variantOptions=[{label:`Circle`,value:`circle`},{label:`Text`,value:`text`},{label:`Rectangle`,value:`rectangle`},{label:`Square`,value:`square`}];unitOptions=[{label:`Pixels (px)`,value:`px`},{label:`REM`,value:`rem`},{label:`EM`,value:`em`},{label:`Percentage (%)`,value:`%`}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant===`circle`){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius=`50%`}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant=`circle`,this.type=`normal`,this.animation=`shimmer`,this.size=`md`,this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel=`Carregando`,this.circleSize=null,this.circleSizeUnit=`px`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-labs`]],standalone:!1,decls:17,vars:19,consts:[[1,`po-row`],[1,`po-md-12`,3,`p-variant`,`p-type`,`p-animation`,`p-size`,`p-width`,`p-height`,`p-border-radius`,`p-aria-label`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Animation`,1,`po-md-12`],[`name`,`animation`,`p-label`,`Animation`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Shapes`,1,`po-md-12`],[`name`,`variant`,`p-label`,`Variant`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModel`,`p-options`],[`p-label`,`Accessibility`,1,`po-md-12`],[`name`,`ariaLabel`,`p-label`,`Aria Label`,`p-help`,`Texto descritivo para leitores de tela (acessibilidade)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Circle Dynamic Size (optional)`,1,`po-md-12`],[`name`,`circleSize`,`p-clean`,``,`p-label`,`Circle Size`,`p-help`,`Define o tamanho do círculo`,`p-min`,`1`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`circleSizeUnit`,`p-label`,`Unit`,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Applied Size`,1,`po-md-6`,3,`p-value`],[`p-label`,`Custom (optional)`,1,`po-md-12`],[`name`,`width`,`p-clean`,``,`p-label`,`Width`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderRadius`,`p-clean`,``,`p-label`,`Border Radius`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,a){l&1&&(Ml(0,`div`,0),ql(1,`po-skeleton`,1),lg(),ql(2,`hr`)(3,`po-info`,2)(4,`hr`),Ml(5,`form`,0),ql(6,`po-divider`,3),Ml(7,`po-select`,4),Mw(`ngModelChange`,function(x){return yN(a.animation,x)||(a.animation=x),x}),lg(),f0(),Ml(8,`po-select`,5),Mw(`ngModelChange`,function(x){return yN(a.type,x)||(a.type=x),x}),lg(),f0(),ql(9,`po-divider`,6),Ml(10,`po-select`,7),Mw(`ngModelChange`,function(x){return yN(a.variant,x)||(a.variant=x),x}),ht(`p-change`,function(){return a.onVariantChange()}),lg(),f0(),Tx(11,we,1,2,`po-select`,8),ql(12,`po-divider`,9),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(x){return yN(a.ariaLabel,x)||(a.ariaLabel=x),x}),lg(),f0(),Tx(14,ye,4,4),Tx(15,Pe,4,3),Ml(16,`po-button`,11),ht(`p-click`,function(){return a.restore()}),lg()()),l&2&&(Up(),cw(`p-variant`,a.variant)(`p-type`,a.type)(`p-animation`,a.animation)(`p-size`,a.size)(`p-width`,a.width||void 0)(`p-height`,a.height||void 0)(`p-border-radius`,a.borderRadius||void 0)(`p-aria-label`,a.ariaLabel),Up(2),cw(`p-value`,a.modelValue),Up(4),Tw(`ngModel`,a.animation),cw(`p-options`,a.animationOptions),p0(),Up(),Tw(`ngModel`,a.type),cw(`p-options`,a.typeOptions),p0(),Up(2),Tw(`ngModel`,a.variant),cw(`p-options`,a.variantOptions),p0(),Up(),Mx(a.variant!==`text`?11:-1),Up(2),Tw(`ngModel`,a.ariaLabel),p0(),Up(),Mx(a.variant===`circle`?14:-1),Up(),Mx(a.variant===`text`?15:-1))},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,xbe,Tbe,kbe,B8e],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Skeleton Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-skeleton-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-credit-card`]],standalone:!1,decls:47,vars:0,consts:[[1,`po-row`],[`p-height`,`340`,`p-title`,`Payment Method`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card`],[1,`po-md-2`,`card-chip`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`],[1,`po-row`,`card-number`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`],[1,`po-row`,`card-details`],[1,`po-sm-7`,`po-md-7`,`card-holder`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`120px`],[1,`po-sm-5`,`po-md-5`,`card-expiry`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`50px`],[1,`card-brand`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-height`,`340`,`p-title`,`Payment Method - Content`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card-gray`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`,`p-type`,`content`],[`p-variant`,`text`,`p-type`,`content`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`120px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`50px`,`p-type`,`content`],[`p-variant`,`circle`,`p-size`,`sm`,`p-type`,`content`]],template:function(l,a){l&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,0)(4,`div`,3),ql(5,`po-skeleton`,4),lg()(),Ml(6,`div`,5)(7,`div`,6),ql(8,`po-skeleton`,7),lg(),Ml(9,`div`,6),ql(10,`po-skeleton`,7),lg(),Ml(11,`div`,6),ql(12,`po-skeleton`,7),lg(),Ml(13,`div`,6),ql(14,`po-skeleton`,7),lg()(),Ml(15,`div`,8)(16,`div`,9),ql(17,`po-skeleton`,10)(18,`po-skeleton`,11),lg(),Ml(19,`div`,12),ql(20,`po-skeleton`,13)(21,`po-skeleton`,14),lg()(),Ml(22,`div`,15),ql(23,`po-skeleton`,16),lg()()(),Ml(24,`po-widget`,17)(25,`div`,18)(26,`div`,0)(27,`div`,3),ql(28,`po-skeleton`,19),lg()(),Ml(29,`div`,5)(30,`div`,6),ql(31,`po-skeleton`,20),lg(),Ml(32,`div`,6),ql(33,`po-skeleton`,20),lg(),Ml(34,`div`,6),ql(35,`po-skeleton`,20),lg(),Ml(36,`div`,6),ql(37,`po-skeleton`,20),lg()(),Ml(38,`div`,8)(39,`div`,9),ql(40,`po-skeleton`,21)(41,`po-skeleton`,22),lg(),Ml(42,`div`,12),ql(43,`po-skeleton`,23)(44,`po-skeleton`,24),lg()(),Ml(45,`div`,15),ql(46,`po-skeleton`,25),lg()()()())},dependencies:[$8e,B8e],styles:[`.credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}`],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-credit-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Skeleton - Credit Card`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.credit-card {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-skeleton-credit-card`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-widget-card`]],standalone:!1,decls:17,vars:0,consts:[[1,`po-row`],[1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`widget-card`],[1,`po-row`,`widget-header`],[1,`po-sm-7`,`po-md-7`],[`p-variant`,`text`,`p-height`,`32px`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`,`p-width`,`80px`,`p-height`,`32px`],[1,`po-sm-2`,`po-md-2`,`widget-icon`],[`p-variant`,`square`,`p-size`,`sm`],[1,`po-row`,`widget-content`],[1,`widget-spacer`],[1,`po-row`,`widget-footer`],[1,`po-sm-12`,`po-md-12`,`footer-button`],[`p-variant`,`rectangle`,`p-size`,`md`]],template:function(l,a){l&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),ql(5,`po-skeleton`,5),lg(),Ml(6,`div`,6),ql(7,`po-skeleton`,7),lg(),Ml(8,`div`,8),ql(9,`po-skeleton`,9),lg()(),Ml(10,`div`,10)(11,`div`,4),ql(12,`po-skeleton`,5),lg()(),ql(13,`div`,11),Ml(14,`div`,12)(15,`div`,13),ql(16,`po-skeleton`,14),lg()()()()())},dependencies:[$8e,B8e],styles:[`.widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-widget-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Skeleton - Widget Card`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.widget-card {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-skeleton-widget-card`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Oe,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-user-profile`]],standalone:!1,decls:20,vars:0,consts:[[1,`po-row`],[`p-title`,`User Profile`,1,`po-md-6`],[1,`profile-card`],[1,`profile-picture`],[`p-variant`,`circle`,`p-size`,`xl`,`p-aria-label`,`Carregando perfil do usuário`],[`p-variant`,`text`,`p-width`,`150px`],[`p-variant`,`text`,`p-width`,`200px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[1,`profile-stats`],[1,`stat`],[`p-variant`,`text`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`70px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`65px`,`p-size`,`sm`]],template:function(l,a){l&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),ql(4,`po-skeleton`,4),lg(),ql(5,`po-skeleton`,5)(6,`po-skeleton`,6)(7,`po-skeleton`,7)(8,`po-skeleton`,8)(9,`po-skeleton`,9),Ml(10,`div`,10)(11,`div`,11),ql(12,`po-skeleton`,12)(13,`po-skeleton`,13),lg(),Ml(14,`div`,11),ql(15,`po-skeleton`,12)(16,`po-skeleton`,14),lg(),Ml(17,`div`,11),ql(18,`po-skeleton`,12)(19,`po-skeleton`,15),lg()()()()())},dependencies:[$8e,B8e],styles:[`.profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-user-profile-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Skeleton - User Profile`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.profile-card {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-skeleton-user-profile`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,qe,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-social-post`]],standalone:!1,decls:35,vars:0,consts:[[1,`po-row`],[`p-height`,`550`,1,`po-md-6`],[1,`post-card`],[1,`post-header`],[`p-variant`,`circle`,`p-size`,`sm`,`p-aria-label`,`Carregando post de rede social`],[1,`post-header-text`],[`p-variant`,`text`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`300px`],[1,`post-actions`],[`p-variant`,`rectangle`,`p-size`,`sm`,`p-width`,`30px`,`p-height`,`30px`],[`p-variant`,`text`,`p-width`,`120px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`85%`],[`p-variant`,`text`,`p-width`,`60%`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`250px`],[`p-variant`,`text`,`p-width`,`140px`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[`p-variant`,`text`,`p-width`,`65%`],[`p-variant`,`text`,`p-width`,`50%`]],template:function(l,a){l&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),ql(4,`po-skeleton`,4),Ml(5,`div`,5),ql(6,`po-skeleton`,6)(7,`po-skeleton`,6),lg()(),ql(8,`po-skeleton`,7),Ml(9,`div`,8),ql(10,`po-skeleton`,9)(11,`po-skeleton`,9)(12,`po-skeleton`,9),lg(),ql(13,`po-skeleton`,10)(14,`po-skeleton`,11)(15,`po-skeleton`,12)(16,`po-skeleton`,13),lg()(),Ml(17,`po-widget`,1)(18,`div`,2)(19,`div`,3),ql(20,`po-skeleton`,14),Ml(21,`div`,5),ql(22,`po-skeleton`,6)(23,`po-skeleton`,6),lg()(),ql(24,`po-skeleton`,15),Ml(25,`div`,8),ql(26,`po-skeleton`,9)(27,`po-skeleton`,9)(28,`po-skeleton`,9),lg(),ql(29,`po-skeleton`,16)(30,`po-skeleton`,11)(31,`po-skeleton`,17)(32,`po-skeleton`,18)(33,`po-skeleton`,19)(34,`po-skeleton`,20),lg()()())},dependencies:[$8e,B8e],styles:[`.post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-social-post-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Skeleton - Social Post`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.post-card {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-skeleton-social-post`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Fe,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-article`]],standalone:!1,decls:15,vars:0,consts:[[1,`po-row`],[`p-height`,`380`,`p-title`,`Latest Article`,1,`po-md-6`],[1,`article-card`],[`p-variant`,`rectangle`,`p-height`,`150px`,`p-aria-label`,`Carregando artigo`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[1,`article-author`],[`p-variant`,`circle`,`p-size`,`sm`],[1,`author-details`],[`p-variant`,`text`,`p-width`,`100px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`80px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`75%`],[`p-variant`,`text`,`p-width`,`80px`]],template:function(l,a){l&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),ql(3,`po-skeleton`,3)(4,`po-skeleton`,4)(5,`po-skeleton`,5),Ml(6,`div`,6),ql(7,`po-skeleton`,7),Ml(8,`div`,8),ql(9,`po-skeleton`,9)(10,`po-skeleton`,10),lg()(),ql(11,`po-skeleton`,4)(12,`po-skeleton`,4)(13,`po-skeleton`,11)(14,`po-skeleton`,12),lg()()())},dependencies:[$8e,B8e],styles:[`.article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-article-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Skeleton - Article`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-skeleton-article/sample-po-skeleton-article.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-skeleton-article/sample-po-skeleton-article.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-skeleton-article/sample-po-skeleton-article.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.article-card {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-skeleton-article`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,He,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-doc`]],standalone:!1,decls:733,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonAnimation`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonSize`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonType`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonVariant`]],template:function(l,a){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoSkeletonModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-skeleton.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoSkeletonComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-skeleton`),lg(),mN(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),lg(),Ml(18,`p`),mN(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),lg(),Ml(20,`h4`),mN(21,`Tokens customizáveis`),lg(),Ml(22,`p`),mN(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(24,`blockquote`)(25,`p`),mN(26,`Para maiores informações, acesse o guia `),Ml(27,`a`,6),mN(28,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(29,`.`),lg()(),Ml(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),mN(34,`Propriedade`),lg(),Ml(35,`th`),mN(36,`Descrição`),lg(),Ml(37,`th`),mN(38,`Valor Padrão`),lg()()(),Ml(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),mN(43,`Cores`),lg()(),ql(44,`td`)(45,`td`),lg(),Ml(46,`tr`)(47,`td`)(48,`code`),mN(49,`--color`),lg()(),Ml(50,`td`),mN(51,`Cor de fundo do skeleton (tipo normal)`),lg(),Ml(52,`td`)(53,`code`),mN(54,`var(--color-neutral-light-20)`),lg()()(),Ml(55,`tr`)(56,`td`)(57,`code`),mN(58,`--color-primary`),lg()(),Ml(59,`td`),mN(60,`Cor de fundo do skeleton (tipo primary)`),lg(),Ml(61,`td`)(62,`code`),mN(63,`var(--color-neutral-mid-40)`),lg()()(),Ml(64,`tr`)(65,`td`)(66,`code`),mN(67,`--color-content`),lg()(),Ml(68,`td`),mN(69,`Cor de fundo do skeleton (tipo content)`),lg(),Ml(70,`td`)(71,`code`),mN(72,`var(--color-neutral-light-00)`),lg()()(),Ml(73,`tr`)(74,`td`)(75,`code`),mN(76,`--shimmer-highlight`),lg()(),Ml(77,`td`),mN(78,`Cor de destaque do shimmer (tipo normal)`),lg(),Ml(79,`td`)(80,`code`),mN(81,`var(--color-neutral-light-30)`),lg()()(),Ml(82,`tr`)(83,`td`)(84,`code`),mN(85,`--shimmer-highlight-primary`),lg()(),Ml(86,`td`),mN(87,`Cor de destaque do shimmer (tipo primary)`),lg(),Ml(88,`td`)(89,`code`),mN(90,`var(--color-neutral-light-20)`),lg()()(),Ml(91,`tr`)(92,`td`)(93,`code`),mN(94,`--shimmer-highlight-content`),lg()(),Ml(95,`td`),mN(96,`Cor de destaque do shimmer (tipo content)`),lg(),Ml(97,`td`)(98,`code`),mN(99,`var(--color-neutral-light-05)`),lg()()(),Ml(100,`tr`)(101,`td`)(102,`strong`),mN(103,`Espaçamento`),lg()(),ql(104,`td`)(105,`td`),lg(),Ml(106,`tr`)(107,`td`)(108,`code`),mN(109,`--margin-bottom`),lg()(),Ml(110,`td`),mN(111,`Margem inferior do skeleton`),lg(),Ml(112,`td`)(113,`code`),mN(114,`var(--spacing-xs)`),lg()()(),Ml(115,`tr`)(116,`td`)(117,`strong`),mN(118,`Bordas`),lg()(),ql(119,`td`)(120,`td`),lg(),Ml(121,`tr`)(122,`td`)(123,`code`),mN(124,`--border-radius`),lg()(),Ml(125,`td`),mN(126,`Raio da borda do skeleton`),lg(),Ml(127,`td`)(128,`code`),mN(129,`var(--border-radius-md)`),lg()()(),Ml(130,`tr`)(131,`td`)(132,`code`),mN(133,`--border-radius-text`),lg()(),Ml(134,`td`),mN(135,`Raio da borda para a variante text`),lg(),Ml(136,`td`)(137,`code`),mN(138,`var(--border-radius-md)`),lg()()(),Ml(139,`tr`)(140,`td`)(141,`code`),mN(142,`--border-radius-primary`),lg()(),Ml(143,`td`),mN(144,`Raio da borda do skeleton (tipo primary)`),lg(),Ml(145,`td`)(146,`code`),mN(147,`var(--border-radius-md)`),lg()()(),Ml(148,`tr`)(149,`td`)(150,`code`),mN(151,`--border-radius-content`),lg()(),Ml(152,`td`),mN(153,`Raio da borda do skeleton (tipo content)`),lg(),Ml(154,`td`)(155,`code`),mN(156,`var(--border-radius-lg)`),lg()()(),Ml(157,`tr`)(158,`td`)(159,`strong`),mN(160,`Transições`),lg()(),ql(161,`td`)(162,`td`),lg(),Ml(163,`tr`)(164,`td`)(165,`code`),mN(166,`--transition-property`),lg()(),Ml(167,`td`),mN(168,`Propriedade CSS da transição`),lg(),Ml(169,`td`)(170,`code`),mN(171,`all`),lg()()(),Ml(172,`tr`)(173,`td`)(174,`code`),mN(175,`--transition-duration`),lg()(),Ml(176,`td`),mN(177,`Duração da transição de cor`),lg(),Ml(178,`td`)(179,`code`),mN(180,`var(--duration-moderate)`),lg()()(),Ml(181,`tr`)(182,`td`)(183,`code`),mN(184,`--transition-timing`),lg()(),Ml(185,`td`),mN(186,`Função de temporização da transição/animação`),lg(),Ml(187,`td`)(188,`code`),mN(189,`var(--timing-continuous)`),lg()()(),Ml(190,`tr`)(191,`td`)(192,`strong`),mN(193,`Animações`),lg()(),ql(194,`td`)(195,`td`),lg(),Ml(196,`tr`)(197,`td`)(198,`code`),mN(199,`--animation-duration-pulse`),lg()(),Ml(200,`td`),mN(201,`Duração da animação de pulsação`),lg(),Ml(202,`td`)(203,`code`),mN(204,`var(--duration-very-slow)`),lg()()(),Ml(205,`tr`)(206,`td`)(207,`code`),mN(208,`--animation-duration-shimmer`),lg()(),Ml(209,`td`),mN(210,`Duração da animação de brilho deslizante`),lg(),Ml(211,`td`)(212,`code`),mN(213,`var(--duration-ultra-slow)`),lg()()()()()(),Ml(214,`div`,7)(215,`h4`,8),mN(216,`Seletor`),lg(),Ml(217,`pre`,9),mN(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),lg()(),Ml(219,`h4`,10),mN(220,`Propriedades`),lg(),Ml(221,`table`,11)(222,`tr`,12)(223,`th`,13),mN(224,`Nome`),lg(),Ml(225,`th`,13),mN(226,`Tipo`),lg(),Ml(227,`th`,13),mN(228,`Padrão`),lg(),Ml(229,`th`,13),mN(230,`Descrição`),lg()(),Ml(231,`tr`,14)(232,`td`,15)(233,`div`,16)(234,`span`,17),mN(235,` p-animation`),ql(236,`br`),lg()()(),Ml(237,`td`,18)(238,`code`,19),mN(239,`PoSkeletonAnimation`),lg()(),Ml(240,`td`,20)(241,`p`)(242,`code`),mN(243,`shimmer`),lg()()(),Ml(244,`td`,21)(245,`em`)(246,`strong`),mN(247,`(opcional)`),lg()(),Ml(248,`p`),mN(249,`Define o tipo de animação do skeleton.`),lg(),Ml(250,`p`),mN(251,`Valores válidos:`),lg(),Ml(252,`ul`)(253,`li`)(254,`code`),mN(255,`none`),lg(),mN(256,`: Sem animação`),lg(),Ml(257,`li`)(258,`code`),mN(259,`pulse`),lg(),mN(260,`: Animação de pulsação`),lg(),Ml(261,`li`)(262,`code`),mN(263,`shimmer`),lg(),mN(264,`: Animação de brilho deslizante`),lg()()()(),Ml(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),mN(269,` p-aria-label`),ql(270,`br`),lg()()(),Ml(271,`td`,18)(272,`code`,22),mN(273,`string`),lg()(),Ml(274,`td`,20),mN(275,`-`),lg(),Ml(276,`td`,21)(277,`em`)(278,`strong`),mN(279,`(opcional)`),lg()(),Ml(280,`p`),mN(281,`Define a descrição acessível do conteúdo que está sendo carregado.`),lg(),Ml(282,`p`),mN(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),lg(),Ml(284,`p`)(285,`strong`),mN(286,`Quando usar:`),lg()(),Ml(287,`ul`)(288,`li`),mN(289,`Use em `),Ml(290,`strong`),mN(291,`skeletons únicos`),lg(),mN(292,` ou no `),Ml(293,`strong`),mN(294,`primeiro skeleton de um grupo`),lg(),mN(295,` com descrição contextual`),lg(),Ml(296,`li`),mN(297,`Evite usar em múltiplos skeletons dentro da mesma área sem contexto, para não causar repetição excessiva`),lg()(),Ml(298,`p`)(299,`strong`),mN(300,`Exemplos de uso:`),lg()(),Ml(301,`pre`)(302,`code`,23),mN(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),lg()(),Ml(304,`blockquote`)(305,`p`)(306,`strong`),mN(307,`Boas práticas de acessibilidade:`),lg()(),Ml(308,`ul`)(309,`li`),mN(310,`Forneça contexto específico na label para que os usuários entendam o que está carregando`),lg()()(),Ml(311,`blockquote`)(312,`ul`)(313,`li`),mN(314,`Em casos complexos, considere usar um único `),Ml(315,`code`),mN(316,`<div role="status">`),lg(),mN(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),lg()()()()(),Ml(318,`tr`,14)(319,`td`,15)(320,`div`,16)(321,`span`,17),mN(322,` p-border-radius`),ql(323,`br`),lg()()(),Ml(324,`td`,18)(325,`code`,22),mN(326,`string`),lg()(),Ml(327,`td`,20),mN(328,`-`),lg(),Ml(329,`td`,21)(330,`em`)(331,`strong`),mN(332,`(opcional)`),lg()(),Ml(333,`p`),mN(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),lg(),Ml(335,`p`),mN(336,`Esta propriedade sobrescreve o border-radius padrão de cada variante.`),lg()()(),Ml(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),mN(341,` p-height`),ql(342,`br`),lg()()(),Ml(343,`td`,18)(344,`code`,22),mN(345,`string`),lg()(),Ml(346,`td`,20),mN(347,`-`),lg(),Ml(348,`td`,21)(349,`em`)(350,`strong`),mN(351,`(opcional)`),lg()(),Ml(352,`p`),mN(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),lg(),Ml(354,`p`),mN(355,`Quando definido, sobrescreve a altura padrão da variante.`),lg()()(),Ml(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),mN(360,` p-size`),ql(361,`br`),lg()()(),Ml(362,`td`,18)(363,`code`,24),mN(364,`PoSkeletonSize`),lg()(),Ml(365,`td`,20)(366,`p`)(367,`code`),mN(368,`md`),lg()()(),Ml(369,`td`,21)(370,`em`)(371,`strong`),mN(372,`(opcional)`),lg()(),Ml(373,`p`),mN(374,`Define o tamanho do skeleton para as variantes pré-definidas (`),Ml(375,`code`),mN(376,`rectangle`),lg(),mN(377,`, `),Ml(378,`code`),mN(379,`square`),lg(),mN(380,`, `),Ml(381,`code`),mN(382,`circle`),lg(),mN(383,`).`),lg(),Ml(384,`p`),mN(385,`Valores válidos:`),lg(),Ml(386,`ul`)(387,`li`)(388,`code`),mN(389,`xs`),lg(),mN(390,`: Extra pequeno (24px para square/circle, 72px x 24px para rectangle)`),lg(),Ml(391,`li`)(392,`code`),mN(393,`sm`),lg(),mN(394,`: Pequeno (32px para square/circle, 96px x 32px para rectangle)`),lg(),Ml(395,`li`)(396,`code`),mN(397,`md`),lg(),mN(398,`: Médio (48px para square/circle, 144px x 48px para rectangle)`),lg(),Ml(399,`li`)(400,`code`),mN(401,`lg`),lg(),mN(402,`: Grande (64px para square/circle, 192px x 64px para rectangle)`),lg(),Ml(403,`li`)(404,`code`),mN(405,`xl`),lg(),mN(406,`: Extra grande (96px para square/circle, 288px x 96px para rectangle)`),lg(),Ml(407,`li`)(408,`code`),mN(409,`2xl`),lg(),mN(410,`: Extra extra grande (144px para square/circle, 432px x 144px para rectangle)`),lg()(),Ml(411,`p`),mN(412,`Esta propriedade é ignorada quando `),Ml(413,`code`),mN(414,`p-width`),lg(),mN(415,` ou `),Ml(416,`code`),mN(417,`p-height`),lg(),mN(418,` são definidos explicitamente.`),lg()()(),Ml(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),mN(423,` p-type`),ql(424,`br`),lg()()(),Ml(425,`td`,18)(426,`code`,25),mN(427,`PoSkeletonType`),lg()(),Ml(428,`td`,20)(429,`p`)(430,`code`),mN(431,`normal`),lg()()(),Ml(432,`td`,21)(433,`em`)(434,`strong`),mN(435,`(opcional)`),lg()(),Ml(436,`p`),mN(437,`Define o tipo visual do skeleton, alterando sua cor de fundo.`),lg(),Ml(438,`p`),mN(439,`Valores válidos:`),lg(),Ml(440,`ul`)(441,`li`)(442,`code`),mN(443,`normal`),lg(),mN(444,`: Cor neutra clara (padrão)`),lg(),Ml(445,`li`)(446,`code`),mN(447,`primary`),lg(),mN(448,`: Cor neutra média`),lg(),Ml(449,`li`)(450,`code`),mN(451,`content`),lg(),mN(452,`: Fundo branco`),lg()()()(),Ml(453,`tr`,14)(454,`td`,15)(455,`div`,16)(456,`span`,17),mN(457,` p-variant`),ql(458,`br`),lg()()(),Ml(459,`td`,18)(460,`code`,26),mN(461,`PoSkeletonVariant`),lg()(),Ml(462,`td`,20)(463,`p`)(464,`code`),mN(465,`text`),lg()()(),Ml(466,`td`,21)(467,`em`)(468,`strong`),mN(469,`(opcional)`),lg()(),Ml(470,`p`),mN(471,`Define a variante visual do skeleton.`),lg(),Ml(472,`p`),mN(473,`Valores válidos:`),lg(),Ml(474,`ul`)(475,`li`)(476,`code`),mN(477,`text`),lg(),mN(478,`: Simula uma linha de texto (altura padrão: 1em)`),lg(),Ml(479,`li`)(480,`code`),mN(481,`rectangle`),lg(),mN(482,`: Forma retangular (proporção 3:1 por padrão)`),lg(),Ml(483,`li`)(484,`code`),mN(485,`square`),lg(),mN(486,`: Forma quadrada (largura e altura iguais)`),lg(),Ml(487,`li`)(488,`code`),mN(489,`circle`),lg(),mN(490,`: Forma circular (largura e altura iguais)`),lg()()()(),Ml(491,`tr`,14)(492,`td`,15)(493,`div`,16)(494,`span`,17),mN(495,` p-width`),ql(496,`br`),lg()()(),Ml(497,`td`,18)(498,`code`,22),mN(499,`string`),lg()(),Ml(500,`td`,20)(501,`p`)(502,`code`),mN(503,`100%`),lg(),mN(504,` para variante `),Ml(505,`code`),mN(506,`text`),lg(),mN(507,`, tamanho baseado em `),Ml(508,`code`),mN(509,`p-size`),lg(),mN(510,` para outras variantes`),lg()(),Ml(511,`td`,21)(512,`em`)(513,`strong`),mN(514,`(opcional)`),lg()(),Ml(515,`p`),mN(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),lg(),Ml(517,`p`),mN(518,`Quando definido, sobrescreve a largura padrão da variante.`),lg()()()(),Ml(519,`h3`),mN(520,`Enums`),lg(),Ml(521,`h4`,4)(522,`code`,5),mN(523,`PoSkeletonAnimation`),lg()(),Ml(524,`div`,2)(525,`p`),mN(526,`Define os tipos de animação do componente `),Ml(527,`code`),mN(528,`po-skeleton`),lg(),mN(529,`.`),lg()(),Ml(530,`h4`,10),mN(531,`Propriedades`),lg(),Ml(532,`table`,11)(533,`tr`,12)(534,`th`,13),mN(535,`Nome`),lg(),Ml(536,`th`,13),mN(537,`Descrição`),lg()(),Ml(538,`tr`,14)(539,`td`,15)(540,`div`,16)(541,`span`,17),mN(542,` none`),ql(543,`br`),lg()()(),Ml(544,`td`,21)(545,`p`),mN(546,`Sem animação`),lg()()(),Ml(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),mN(551,` pulse`),ql(552,`br`),lg()()(),Ml(553,`td`,21)(554,`p`),mN(555,`Animação de pulsação`),lg()()(),Ml(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),mN(560,` shimmer`),ql(561,`br`),lg()()(),Ml(562,`td`,21)(563,`p`),mN(564,`Animação de brilho deslizante`),lg()()()(),Ml(565,`h4`,4)(566,`code`,5),mN(567,`PoSkeletonSize`),lg()(),Ml(568,`div`,2)(569,`p`),mN(570,`Define os tamanhos disponíveis para o componente `),Ml(571,`code`),mN(572,`po-skeleton`),lg(),mN(573,`.`),lg()(),Ml(574,`h4`,10),mN(575,`Propriedades`),lg(),Ml(576,`table`,11)(577,`tr`,12)(578,`th`,13),mN(579,`Nome`),lg(),Ml(580,`th`,13),mN(581,`Descrição`),lg()(),Ml(582,`tr`,14)(583,`td`,15)(584,`div`,16)(585,`span`,17),mN(586,` xs`),ql(587,`br`),lg()()(),Ml(588,`td`,21)(589,`p`),mN(590,`Tamanho extra pequeno`),lg()()(),Ml(591,`tr`,14)(592,`td`,15)(593,`div`,16)(594,`span`,17),mN(595,` sm`),ql(596,`br`),lg()()(),Ml(597,`td`,21)(598,`p`),mN(599,`Tamanho pequeno`),lg()()(),Ml(600,`tr`,14)(601,`td`,15)(602,`div`,16)(603,`span`,17),mN(604,` md`),ql(605,`br`),lg()()(),Ml(606,`td`,21)(607,`p`),mN(608,`Tamanho médio`),lg()()(),Ml(609,`tr`,14)(610,`td`,15)(611,`div`,16)(612,`span`,17),mN(613,` lg`),ql(614,`br`),lg()()(),Ml(615,`td`,21)(616,`p`),mN(617,`Tamanho grande`),lg()()(),Ml(618,`tr`,14)(619,`td`,15)(620,`div`,16)(621,`span`,17),mN(622,` xl`),ql(623,`br`),lg()()(),Ml(624,`td`,21)(625,`p`),mN(626,`Tamanho extra grande`),lg()()(),Ml(627,`tr`,14)(628,`td`,15)(629,`div`,16)(630,`span`,17),mN(631,` xxl`),ql(632,`br`),lg()()(),Ml(633,`td`,21)(634,`p`),mN(635,`Tamanho extra extra grande`),lg()()()(),Ml(636,`h4`,4)(637,`code`,5),mN(638,`PoSkeletonType`),lg()(),Ml(639,`div`,2)(640,`p`),mN(641,`Define os tipos visuais disponíveis para o componente `),Ml(642,`code`),mN(643,`po-skeleton`),lg(),mN(644,`.`),lg()(),Ml(645,`h4`,10),mN(646,`Propriedades`),lg(),Ml(647,`table`,11)(648,`tr`,12)(649,`th`,13),mN(650,`Nome`),lg(),Ml(651,`th`,13),mN(652,`Descrição`),lg()(),Ml(653,`tr`,14)(654,`td`,15)(655,`div`,16)(656,`span`,17),mN(657,` normal`),ql(658,`br`),lg()()(),Ml(659,`td`,21)(660,`p`),mN(661,`Tipo padrão com cor neutra clara`),lg()()(),Ml(662,`tr`,14)(663,`td`,15)(664,`div`,16)(665,`span`,17),mN(666,` primary`),ql(667,`br`),lg()()(),Ml(668,`td`,21)(669,`p`),mN(670,`Tipo primário com cor neutra média`),lg()()(),Ml(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),mN(675,` content`),ql(676,`br`),lg()()(),Ml(677,`td`,21)(678,`p`),mN(679,`Tipo de conteúdo com fundo branco`),lg()()()(),Ml(680,`h4`,4)(681,`code`,5),mN(682,`PoSkeletonVariant`),lg()(),Ml(683,`div`,2)(684,`p`),mN(685,`Define as variantes visuais do componente `),Ml(686,`code`),mN(687,`po-skeleton`),lg(),mN(688,`.`),lg()(),Ml(689,`h4`,10),mN(690,`Propriedades`),lg(),Ml(691,`table`,11)(692,`tr`,12)(693,`th`,13),mN(694,`Nome`),lg(),Ml(695,`th`,13),mN(696,`Descrição`),lg()(),Ml(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),mN(701,` text`),ql(702,`br`),lg()()(),Ml(703,`td`,21)(704,`p`),mN(705,`Variante para simular texto`),lg()()(),Ml(706,`tr`,14)(707,`td`,15)(708,`div`,16)(709,`span`,17),mN(710,` rectangle`),ql(711,`br`),lg()()(),Ml(712,`td`,21)(713,`p`),mN(714,`Variante retangular (largura maior que altura)`),lg()()(),Ml(715,`tr`,14)(716,`td`,15)(717,`div`,16)(718,`span`,17),mN(719,` square`),ql(720,`br`),lg()()(),Ml(721,`td`,21)(722,`p`),mN(723,`Variante quadrada (largura igual à altura)`),lg()()(),Ml(724,`tr`,14)(725,`td`,15)(726,`div`,16)(727,`span`,17),mN(728,` circle`),ql(729,`br`),lg()()(),Ml(730,`td`,21)(731,`p`),mN(732,`Variante circular`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Skeleton`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),ql(3,`sample-po-skeleton-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),ql(5,`sample-po-skeleton-basic-view`)(6,`sample-po-skeleton-labs-view`)(7,`sample-po-skeleton-credit-card-view`)(8,`sample-po-skeleton-widget-card-view`)(9,`sample-po-skeleton-user-profile-view`)(10,`sample-po-skeleton-social-post-view`)(11,`sample-po-skeleton-article-view`),lg()()()),l&2&&(cw(`p-actions`,a.actions),Up(2),cw(`p-active`,a.activeTab===`doc`),Up(2),cw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})()}];var ke=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[NL.forChild(Ge),NL]})}return o})();var Vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,ke]})}return o})();export{Vt as DocPoSkeletonModule};