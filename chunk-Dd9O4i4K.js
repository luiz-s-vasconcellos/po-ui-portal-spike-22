import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,E as E8e,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,li as _x,lr as Gl,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,sr as Fx,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var oe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-basic`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`],[1,`po-md-12`]],template:function(l,a){l&1&&(Tl(0,`div`,0),Gl(1,`po-skeleton`,1)(2,`po-skeleton`,1)(3,`po-skeleton`,1),ag())},dependencies:[E8e],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Skeleton Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-skeleton-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ee,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,oe],encapsulation:2,changeDetection:1})}return o})();function we(o,R){if(o&1){let p=Ax();Tl(0,`po-select`,12),ww(`ngModelChange`,function(a){Ky(p);let s=Fx();return uN(s.size,a)||(s.size=a),Xy(a)}),ag(),a0()}if(o&2){let p=Fx();Ew(`ngModel`,p.size),nw(`p-options`,p.sizeOptions),l0()}}function ye(o,R){if(o&1){let p=Ax();Gl(0,`po-divider`,13),Tl(1,`po-number`,14),ww(`ngModelChange`,function(a){Ky(p);let s=Fx();return uN(s.circleSize,a)||(s.circleSize=a),Xy(a)}),ht(`p-change`,function(){Ky(p);return Xy(Fx().onCircleSizeChange())}),ag(),a0(),Tl(2,`po-select`,15),ww(`ngModelChange`,function(a){Ky(p);let s=Fx();return uN(s.circleSizeUnit,a)||(s.circleSizeUnit=a),Xy(a)}),ht(`p-change`,function(){Ky(p);return Xy(Fx().onCircleSizeUnitChange())}),ag(),a0(),Gl(3,`po-info`,16)}if(o&2){let p=Fx();jp(),Ew(`ngModel`,p.circleSize),l0(),jp(),Ew(`ngModel`,p.circleSizeUnit),nw(`p-options`,p.unitOptions),l0(),jp(),nw(`p-value`,p.circleSize?p.circleSize+p.circleSizeUnit:`Using default size from Size select`)}}function Pe(o,R){if(o&1){let p=Ax();Gl(0,`po-divider`,17),Tl(1,`po-input`,18),ww(`ngModelChange`,function(a){Ky(p);let s=Fx();return uN(s.width,a)||(s.width=a),Xy(a)}),ag(),a0(),Tl(2,`po-input`,19),ww(`ngModelChange`,function(a){Ky(p);let s=Fx();return uN(s.height,a)||(s.height=a),Xy(a)}),ag(),a0(),Tl(3,`po-input`,20),ww(`ngModelChange`,function(a){Ky(p);let s=Fx();return uN(s.borderRadius,a)||(s.borderRadius=a),Xy(a)}),ag(),a0()}if(o&2){let p=Fx();jp(),Ew(`ngModel`,p.width),l0(),jp(),Ew(`ngModel`,p.height),l0(),jp(),Ew(`ngModel`,p.borderRadius),l0()}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit=`px`;animationOptions=[{label:`Shimmer`,value:`shimmer`},{label:`Pulse`,value:`pulse`},{label:`None`,value:`none`}];sizeOptions=[{label:`Extra Small`,value:`xs`},{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra Large`,value:`xl`},{label:`Extra Extra Large`,value:`2xl`}];typeOptions=[{label:`Normal`,value:`normal`},{label:`Primary`,value:`primary`},{label:`Content`,value:`content`}];variantOptions=[{label:`Circle`,value:`circle`},{label:`Text`,value:`text`},{label:`Rectangle`,value:`rectangle`},{label:`Square`,value:`square`}];unitOptions=[{label:`Pixels (px)`,value:`px`},{label:`REM`,value:`rem`},{label:`EM`,value:`em`},{label:`Percentage (%)`,value:`%`}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant===`circle`){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius=`50%`}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant=`circle`,this.type=`normal`,this.animation=`shimmer`,this.size=`md`,this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel=`Carregando`,this.circleSize=null,this.circleSizeUnit=`px`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-labs`]],standalone:!1,decls:17,vars:19,consts:[[1,`po-row`],[1,`po-md-12`,3,`p-variant`,`p-type`,`p-animation`,`p-size`,`p-width`,`p-height`,`p-border-radius`,`p-aria-label`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Animation`,1,`po-md-12`],[`name`,`animation`,`p-label`,`Animation`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Shapes`,1,`po-md-12`],[`name`,`variant`,`p-label`,`Variant`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModel`,`p-options`],[`p-label`,`Accessibility`,1,`po-md-12`],[`name`,`ariaLabel`,`p-label`,`Aria Label`,`p-help`,`Texto descritivo para leitores de tela (acessibilidade)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Circle Dynamic Size (optional)`,1,`po-md-12`],[`name`,`circleSize`,`p-clean`,``,`p-label`,`Circle Size`,`p-help`,`Define o tamanho do círculo`,`p-min`,`1`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`circleSizeUnit`,`p-label`,`Unit`,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Applied Size`,1,`po-md-6`,3,`p-value`],[`p-label`,`Custom (optional)`,1,`po-md-12`],[`name`,`width`,`p-clean`,``,`p-label`,`Width`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderRadius`,`p-clean`,``,`p-label`,`Border Radius`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,a){l&1&&(Tl(0,`div`,0),Gl(1,`po-skeleton`,1),ag(),Gl(2,`hr`)(3,`po-info`,2)(4,`hr`),Tl(5,`form`,0),Gl(6,`po-divider`,3),Tl(7,`po-select`,4),ww(`ngModelChange`,function(x){return uN(a.animation,x)||(a.animation=x),x}),ag(),a0(),Tl(8,`po-select`,5),ww(`ngModelChange`,function(x){return uN(a.type,x)||(a.type=x),x}),ag(),a0(),Gl(9,`po-divider`,6),Tl(10,`po-select`,7),ww(`ngModelChange`,function(x){return uN(a.variant,x)||(a.variant=x),x}),ht(`p-change`,function(){return a.onVariantChange()}),ag(),a0(),_x(11,we,1,2,`po-select`,8),Gl(12,`po-divider`,9),Tl(13,`po-input`,10),ww(`ngModelChange`,function(x){return uN(a.ariaLabel,x)||(a.ariaLabel=x),x}),ag(),a0(),_x(14,ye,4,4),_x(15,Pe,4,3),Tl(16,`po-button`,11),ht(`p-click`,function(){return a.restore()}),ag()()),l&2&&(jp(),nw(`p-variant`,a.variant)(`p-type`,a.type)(`p-animation`,a.animation)(`p-size`,a.size)(`p-width`,a.width||void 0)(`p-height`,a.height||void 0)(`p-border-radius`,a.borderRadius||void 0)(`p-aria-label`,a.ariaLabel),jp(2),nw(`p-value`,a.modelValue),jp(4),Ew(`ngModel`,a.animation),nw(`p-options`,a.animationOptions),l0(),jp(),Ew(`ngModel`,a.type),nw(`p-options`,a.typeOptions),l0(),jp(2),Ew(`ngModel`,a.variant),nw(`p-options`,a.variantOptions),l0(),jp(),Dx(a.variant!==`text`?11:-1),jp(2),Ew(`ngModel`,a.ariaLabel),l0(),jp(),Dx(a.variant===`circle`?14:-1),jp(),Dx(a.variant===`text`?15:-1))},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,ube,fbe,ybe,E8e],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Skeleton Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-skeleton-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-credit-card`]],standalone:!1,decls:47,vars:0,consts:[[1,`po-row`],[`p-height`,`340`,`p-title`,`Payment Method`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card`],[1,`po-md-2`,`card-chip`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`],[1,`po-row`,`card-number`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`],[1,`po-row`,`card-details`],[1,`po-sm-7`,`po-md-7`,`card-holder`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`120px`],[1,`po-sm-5`,`po-md-5`,`card-expiry`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`50px`],[1,`card-brand`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-height`,`340`,`p-title`,`Payment Method - Content`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card-gray`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`,`p-type`,`content`],[`p-variant`,`text`,`p-type`,`content`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`120px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`50px`,`p-type`,`content`],[`p-variant`,`circle`,`p-size`,`sm`,`p-type`,`content`]],template:function(l,a){l&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,0)(4,`div`,3),Gl(5,`po-skeleton`,4),ag()(),Tl(6,`div`,5)(7,`div`,6),Gl(8,`po-skeleton`,7),ag(),Tl(9,`div`,6),Gl(10,`po-skeleton`,7),ag(),Tl(11,`div`,6),Gl(12,`po-skeleton`,7),ag(),Tl(13,`div`,6),Gl(14,`po-skeleton`,7),ag()(),Tl(15,`div`,8)(16,`div`,9),Gl(17,`po-skeleton`,10)(18,`po-skeleton`,11),ag(),Tl(19,`div`,12),Gl(20,`po-skeleton`,13)(21,`po-skeleton`,14),ag()(),Tl(22,`div`,15),Gl(23,`po-skeleton`,16),ag()()(),Tl(24,`po-widget`,17)(25,`div`,18)(26,`div`,0)(27,`div`,3),Gl(28,`po-skeleton`,19),ag()(),Tl(29,`div`,5)(30,`div`,6),Gl(31,`po-skeleton`,20),ag(),Tl(32,`div`,6),Gl(33,`po-skeleton`,20),ag(),Tl(34,`div`,6),Gl(35,`po-skeleton`,20),ag(),Tl(36,`div`,6),Gl(37,`po-skeleton`,20),ag()(),Tl(38,`div`,8)(39,`div`,9),Gl(40,`po-skeleton`,21)(41,`po-skeleton`,22),ag(),Tl(42,`div`,12),Gl(43,`po-skeleton`,23)(44,`po-skeleton`,24),ag()(),Tl(45,`div`,15),Gl(46,`po-skeleton`,25),ag()()()())},dependencies:[O8e,E8e],styles:[`.credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}`],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-credit-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Skeleton - Credit Card`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.credit-card {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-skeleton-credit-card`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-widget-card`]],standalone:!1,decls:17,vars:0,consts:[[1,`po-row`],[1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`widget-card`],[1,`po-row`,`widget-header`],[1,`po-sm-7`,`po-md-7`],[`p-variant`,`text`,`p-height`,`32px`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`,`p-width`,`80px`,`p-height`,`32px`],[1,`po-sm-2`,`po-md-2`,`widget-icon`],[`p-variant`,`square`,`p-size`,`sm`],[1,`po-row`,`widget-content`],[1,`widget-spacer`],[1,`po-row`,`widget-footer`],[1,`po-sm-12`,`po-md-12`,`footer-button`],[`p-variant`,`rectangle`,`p-size`,`md`]],template:function(l,a){l&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),Gl(5,`po-skeleton`,5),ag(),Tl(6,`div`,6),Gl(7,`po-skeleton`,7),ag(),Tl(8,`div`,8),Gl(9,`po-skeleton`,9),ag()(),Tl(10,`div`,10)(11,`div`,4),Gl(12,`po-skeleton`,5),ag()(),Gl(13,`div`,11),Tl(14,`div`,12)(15,`div`,13),Gl(16,`po-skeleton`,14),ag()()()()())},dependencies:[O8e,E8e],styles:[`.widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-widget-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Skeleton - Widget Card`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.widget-card {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-skeleton-widget-card`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Oe,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-user-profile`]],standalone:!1,decls:20,vars:0,consts:[[1,`po-row`],[`p-title`,`User Profile`,1,`po-md-6`],[1,`profile-card`],[1,`profile-picture`],[`p-variant`,`circle`,`p-size`,`xl`,`p-aria-label`,`Carregando perfil do usuário`],[`p-variant`,`text`,`p-width`,`150px`],[`p-variant`,`text`,`p-width`,`200px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[1,`profile-stats`],[1,`stat`],[`p-variant`,`text`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`70px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`65px`,`p-size`,`sm`]],template:function(l,a){l&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),Gl(4,`po-skeleton`,4),ag(),Gl(5,`po-skeleton`,5)(6,`po-skeleton`,6)(7,`po-skeleton`,7)(8,`po-skeleton`,8)(9,`po-skeleton`,9),Tl(10,`div`,10)(11,`div`,11),Gl(12,`po-skeleton`,12)(13,`po-skeleton`,13),ag(),Tl(14,`div`,11),Gl(15,`po-skeleton`,12)(16,`po-skeleton`,14),ag(),Tl(17,`div`,11),Gl(18,`po-skeleton`,12)(19,`po-skeleton`,15),ag()()()()())},dependencies:[O8e,E8e],styles:[`.profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-user-profile-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Skeleton - User Profile`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.profile-card {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-skeleton-user-profile`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,qe,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-social-post`]],standalone:!1,decls:35,vars:0,consts:[[1,`po-row`],[`p-height`,`550`,1,`po-md-6`],[1,`post-card`],[1,`post-header`],[`p-variant`,`circle`,`p-size`,`sm`,`p-aria-label`,`Carregando post de rede social`],[1,`post-header-text`],[`p-variant`,`text`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`300px`],[1,`post-actions`],[`p-variant`,`rectangle`,`p-size`,`sm`,`p-width`,`30px`,`p-height`,`30px`],[`p-variant`,`text`,`p-width`,`120px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`85%`],[`p-variant`,`text`,`p-width`,`60%`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`250px`],[`p-variant`,`text`,`p-width`,`140px`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[`p-variant`,`text`,`p-width`,`65%`],[`p-variant`,`text`,`p-width`,`50%`]],template:function(l,a){l&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),Gl(4,`po-skeleton`,4),Tl(5,`div`,5),Gl(6,`po-skeleton`,6)(7,`po-skeleton`,6),ag()(),Gl(8,`po-skeleton`,7),Tl(9,`div`,8),Gl(10,`po-skeleton`,9)(11,`po-skeleton`,9)(12,`po-skeleton`,9),ag(),Gl(13,`po-skeleton`,10)(14,`po-skeleton`,11)(15,`po-skeleton`,12)(16,`po-skeleton`,13),ag()(),Tl(17,`po-widget`,1)(18,`div`,2)(19,`div`,3),Gl(20,`po-skeleton`,14),Tl(21,`div`,5),Gl(22,`po-skeleton`,6)(23,`po-skeleton`,6),ag()(),Gl(24,`po-skeleton`,15),Tl(25,`div`,8),Gl(26,`po-skeleton`,9)(27,`po-skeleton`,9)(28,`po-skeleton`,9),ag(),Gl(29,`po-skeleton`,16)(30,`po-skeleton`,11)(31,`po-skeleton`,17)(32,`po-skeleton`,18)(33,`po-skeleton`,19)(34,`po-skeleton`,20),ag()()())},dependencies:[O8e,E8e],styles:[`.post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-social-post-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Skeleton - Social Post`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.post-card {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-skeleton-social-post`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Fe,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-article`]],standalone:!1,decls:15,vars:0,consts:[[1,`po-row`],[`p-height`,`380`,`p-title`,`Latest Article`,1,`po-md-6`],[1,`article-card`],[`p-variant`,`rectangle`,`p-height`,`150px`,`p-aria-label`,`Carregando artigo`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[1,`article-author`],[`p-variant`,`circle`,`p-size`,`sm`],[1,`author-details`],[`p-variant`,`text`,`p-width`,`100px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`80px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`75%`],[`p-variant`,`text`,`p-width`,`80px`]],template:function(l,a){l&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),Gl(3,`po-skeleton`,3)(4,`po-skeleton`,4)(5,`po-skeleton`,5),Tl(6,`div`,6),Gl(7,`po-skeleton`,7),Tl(8,`div`,8),Gl(9,`po-skeleton`,9)(10,`po-skeleton`,10),ag()(),Gl(11,`po-skeleton`,4)(12,`po-skeleton`,4)(13,`po-skeleton`,11)(14,`po-skeleton`,12),ag()()())},dependencies:[O8e,E8e],styles:[`.article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-article-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Skeleton - Article`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-skeleton-article/sample-po-skeleton-article.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-skeleton-article/sample-po-skeleton-article.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-skeleton-article/sample-po-skeleton-article.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.article-card {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-skeleton-article`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,He,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-skeleton-doc`]],standalone:!1,decls:733,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonAnimation`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonSize`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonType`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonVariant`]],template:function(l,a){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoSkeletonModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-skeleton.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoSkeletonComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-skeleton`),ag(),cN(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),ag(),Tl(18,`p`),cN(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),ag(),Tl(20,`h4`),cN(21,`Tokens customizáveis`),ag(),Tl(22,`p`),cN(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(24,`blockquote`)(25,`p`),cN(26,`Para maiores informações, acesse o guia `),Tl(27,`a`,6),cN(28,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(29,`.`),ag()(),Tl(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),cN(34,`Propriedade`),ag(),Tl(35,`th`),cN(36,`Descrição`),ag(),Tl(37,`th`),cN(38,`Valor Padrão`),ag()()(),Tl(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),cN(43,`Cores`),ag()(),Gl(44,`td`)(45,`td`),ag(),Tl(46,`tr`)(47,`td`)(48,`code`),cN(49,`--color`),ag()(),Tl(50,`td`),cN(51,`Cor de fundo do skeleton (tipo normal)`),ag(),Tl(52,`td`)(53,`code`),cN(54,`var(--color-neutral-light-20)`),ag()()(),Tl(55,`tr`)(56,`td`)(57,`code`),cN(58,`--color-primary`),ag()(),Tl(59,`td`),cN(60,`Cor de fundo do skeleton (tipo primary)`),ag(),Tl(61,`td`)(62,`code`),cN(63,`var(--color-neutral-mid-40)`),ag()()(),Tl(64,`tr`)(65,`td`)(66,`code`),cN(67,`--color-content`),ag()(),Tl(68,`td`),cN(69,`Cor de fundo do skeleton (tipo content)`),ag(),Tl(70,`td`)(71,`code`),cN(72,`var(--color-neutral-light-00)`),ag()()(),Tl(73,`tr`)(74,`td`)(75,`code`),cN(76,`--shimmer-highlight`),ag()(),Tl(77,`td`),cN(78,`Cor de destaque do shimmer (tipo normal)`),ag(),Tl(79,`td`)(80,`code`),cN(81,`var(--color-neutral-light-30)`),ag()()(),Tl(82,`tr`)(83,`td`)(84,`code`),cN(85,`--shimmer-highlight-primary`),ag()(),Tl(86,`td`),cN(87,`Cor de destaque do shimmer (tipo primary)`),ag(),Tl(88,`td`)(89,`code`),cN(90,`var(--color-neutral-light-20)`),ag()()(),Tl(91,`tr`)(92,`td`)(93,`code`),cN(94,`--shimmer-highlight-content`),ag()(),Tl(95,`td`),cN(96,`Cor de destaque do shimmer (tipo content)`),ag(),Tl(97,`td`)(98,`code`),cN(99,`var(--color-neutral-light-05)`),ag()()(),Tl(100,`tr`)(101,`td`)(102,`strong`),cN(103,`Espaçamento`),ag()(),Gl(104,`td`)(105,`td`),ag(),Tl(106,`tr`)(107,`td`)(108,`code`),cN(109,`--margin-bottom`),ag()(),Tl(110,`td`),cN(111,`Margem inferior do skeleton`),ag(),Tl(112,`td`)(113,`code`),cN(114,`var(--spacing-xs)`),ag()()(),Tl(115,`tr`)(116,`td`)(117,`strong`),cN(118,`Bordas`),ag()(),Gl(119,`td`)(120,`td`),ag(),Tl(121,`tr`)(122,`td`)(123,`code`),cN(124,`--border-radius`),ag()(),Tl(125,`td`),cN(126,`Raio da borda do skeleton`),ag(),Tl(127,`td`)(128,`code`),cN(129,`var(--border-radius-md)`),ag()()(),Tl(130,`tr`)(131,`td`)(132,`code`),cN(133,`--border-radius-text`),ag()(),Tl(134,`td`),cN(135,`Raio da borda para a variante text`),ag(),Tl(136,`td`)(137,`code`),cN(138,`var(--border-radius-md)`),ag()()(),Tl(139,`tr`)(140,`td`)(141,`code`),cN(142,`--border-radius-primary`),ag()(),Tl(143,`td`),cN(144,`Raio da borda do skeleton (tipo primary)`),ag(),Tl(145,`td`)(146,`code`),cN(147,`var(--border-radius-md)`),ag()()(),Tl(148,`tr`)(149,`td`)(150,`code`),cN(151,`--border-radius-content`),ag()(),Tl(152,`td`),cN(153,`Raio da borda do skeleton (tipo content)`),ag(),Tl(154,`td`)(155,`code`),cN(156,`var(--border-radius-lg)`),ag()()(),Tl(157,`tr`)(158,`td`)(159,`strong`),cN(160,`Transições`),ag()(),Gl(161,`td`)(162,`td`),ag(),Tl(163,`tr`)(164,`td`)(165,`code`),cN(166,`--transition-property`),ag()(),Tl(167,`td`),cN(168,`Propriedade CSS da transição`),ag(),Tl(169,`td`)(170,`code`),cN(171,`all`),ag()()(),Tl(172,`tr`)(173,`td`)(174,`code`),cN(175,`--transition-duration`),ag()(),Tl(176,`td`),cN(177,`Duração da transição de cor`),ag(),Tl(178,`td`)(179,`code`),cN(180,`var(--duration-moderate)`),ag()()(),Tl(181,`tr`)(182,`td`)(183,`code`),cN(184,`--transition-timing`),ag()(),Tl(185,`td`),cN(186,`Função de temporização da transição/animação`),ag(),Tl(187,`td`)(188,`code`),cN(189,`var(--timing-continuous)`),ag()()(),Tl(190,`tr`)(191,`td`)(192,`strong`),cN(193,`Animações`),ag()(),Gl(194,`td`)(195,`td`),ag(),Tl(196,`tr`)(197,`td`)(198,`code`),cN(199,`--animation-duration-pulse`),ag()(),Tl(200,`td`),cN(201,`Duração da animação de pulsação`),ag(),Tl(202,`td`)(203,`code`),cN(204,`var(--duration-very-slow)`),ag()()(),Tl(205,`tr`)(206,`td`)(207,`code`),cN(208,`--animation-duration-shimmer`),ag()(),Tl(209,`td`),cN(210,`Duração da animação de brilho deslizante`),ag(),Tl(211,`td`)(212,`code`),cN(213,`var(--duration-ultra-slow)`),ag()()()()()(),Tl(214,`div`,7)(215,`h4`,8),cN(216,`Seletor`),ag(),Tl(217,`pre`,9),cN(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),ag()(),Tl(219,`h4`,10),cN(220,`Propriedades`),ag(),Tl(221,`table`,11)(222,`tr`,12)(223,`th`,13),cN(224,`Nome`),ag(),Tl(225,`th`,13),cN(226,`Tipo`),ag(),Tl(227,`th`,13),cN(228,`Padrão`),ag(),Tl(229,`th`,13),cN(230,`Descrição`),ag()(),Tl(231,`tr`,14)(232,`td`,15)(233,`div`,16)(234,`span`,17),cN(235,` p-animation`),Gl(236,`br`),ag()()(),Tl(237,`td`,18)(238,`code`,19),cN(239,`PoSkeletonAnimation`),ag()(),Tl(240,`td`,20)(241,`p`)(242,`code`),cN(243,`shimmer`),ag()()(),Tl(244,`td`,21)(245,`em`)(246,`strong`),cN(247,`(opcional)`),ag()(),Tl(248,`p`),cN(249,`Define o tipo de animação do skeleton.`),ag(),Tl(250,`p`),cN(251,`Valores válidos:`),ag(),Tl(252,`ul`)(253,`li`)(254,`code`),cN(255,`none`),ag(),cN(256,`: Sem animação`),ag(),Tl(257,`li`)(258,`code`),cN(259,`pulse`),ag(),cN(260,`: Animação de pulsação`),ag(),Tl(261,`li`)(262,`code`),cN(263,`shimmer`),ag(),cN(264,`: Animação de brilho deslizante`),ag()()()(),Tl(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),cN(269,` p-aria-label`),Gl(270,`br`),ag()()(),Tl(271,`td`,18)(272,`code`,22),cN(273,`string`),ag()(),Tl(274,`td`,20),cN(275,`-`),ag(),Tl(276,`td`,21)(277,`em`)(278,`strong`),cN(279,`(opcional)`),ag()(),Tl(280,`p`),cN(281,`Define a descrição acessível do conteúdo que está sendo carregado.`),ag(),Tl(282,`p`),cN(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),ag(),Tl(284,`p`)(285,`strong`),cN(286,`Quando usar:`),ag()(),Tl(287,`ul`)(288,`li`),cN(289,`Use em `),Tl(290,`strong`),cN(291,`skeletons únicos`),ag(),cN(292,` ou no `),Tl(293,`strong`),cN(294,`primeiro skeleton de um grupo`),ag(),cN(295,` com descrição contextual`),ag(),Tl(296,`li`),cN(297,`Evite usar em múltiplos skeletons dentro da mesma área sem contexto, para não causar repetição excessiva`),ag()(),Tl(298,`p`)(299,`strong`),cN(300,`Exemplos de uso:`),ag()(),Tl(301,`pre`)(302,`code`,23),cN(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),ag()(),Tl(304,`blockquote`)(305,`p`)(306,`strong`),cN(307,`Boas práticas de acessibilidade:`),ag()(),Tl(308,`ul`)(309,`li`),cN(310,`Forneça contexto específico na label para que os usuários entendam o que está carregando`),ag()()(),Tl(311,`blockquote`)(312,`ul`)(313,`li`),cN(314,`Em casos complexos, considere usar um único `),Tl(315,`code`),cN(316,`<div role="status">`),ag(),cN(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),ag()()()()(),Tl(318,`tr`,14)(319,`td`,15)(320,`div`,16)(321,`span`,17),cN(322,` p-border-radius`),Gl(323,`br`),ag()()(),Tl(324,`td`,18)(325,`code`,22),cN(326,`string`),ag()(),Tl(327,`td`,20),cN(328,`-`),ag(),Tl(329,`td`,21)(330,`em`)(331,`strong`),cN(332,`(opcional)`),ag()(),Tl(333,`p`),cN(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ag(),Tl(335,`p`),cN(336,`Esta propriedade sobrescreve o border-radius padrão de cada variante.`),ag()()(),Tl(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),cN(341,` p-height`),Gl(342,`br`),ag()()(),Tl(343,`td`,18)(344,`code`,22),cN(345,`string`),ag()(),Tl(346,`td`,20),cN(347,`-`),ag(),Tl(348,`td`,21)(349,`em`)(350,`strong`),cN(351,`(opcional)`),ag()(),Tl(352,`p`),cN(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ag(),Tl(354,`p`),cN(355,`Quando definido, sobrescreve a altura padrão da variante.`),ag()()(),Tl(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),cN(360,` p-size`),Gl(361,`br`),ag()()(),Tl(362,`td`,18)(363,`code`,24),cN(364,`PoSkeletonSize`),ag()(),Tl(365,`td`,20)(366,`p`)(367,`code`),cN(368,`md`),ag()()(),Tl(369,`td`,21)(370,`em`)(371,`strong`),cN(372,`(opcional)`),ag()(),Tl(373,`p`),cN(374,`Define o tamanho do skeleton para as variantes pré-definidas (`),Tl(375,`code`),cN(376,`rectangle`),ag(),cN(377,`, `),Tl(378,`code`),cN(379,`square`),ag(),cN(380,`, `),Tl(381,`code`),cN(382,`circle`),ag(),cN(383,`).`),ag(),Tl(384,`p`),cN(385,`Valores válidos:`),ag(),Tl(386,`ul`)(387,`li`)(388,`code`),cN(389,`xs`),ag(),cN(390,`: Extra pequeno (24px para square/circle, 72px x 24px para rectangle)`),ag(),Tl(391,`li`)(392,`code`),cN(393,`sm`),ag(),cN(394,`: Pequeno (32px para square/circle, 96px x 32px para rectangle)`),ag(),Tl(395,`li`)(396,`code`),cN(397,`md`),ag(),cN(398,`: Médio (48px para square/circle, 144px x 48px para rectangle)`),ag(),Tl(399,`li`)(400,`code`),cN(401,`lg`),ag(),cN(402,`: Grande (64px para square/circle, 192px x 64px para rectangle)`),ag(),Tl(403,`li`)(404,`code`),cN(405,`xl`),ag(),cN(406,`: Extra grande (96px para square/circle, 288px x 96px para rectangle)`),ag(),Tl(407,`li`)(408,`code`),cN(409,`2xl`),ag(),cN(410,`: Extra extra grande (144px para square/circle, 432px x 144px para rectangle)`),ag()(),Tl(411,`p`),cN(412,`Esta propriedade é ignorada quando `),Tl(413,`code`),cN(414,`p-width`),ag(),cN(415,` ou `),Tl(416,`code`),cN(417,`p-height`),ag(),cN(418,` são definidos explicitamente.`),ag()()(),Tl(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),cN(423,` p-type`),Gl(424,`br`),ag()()(),Tl(425,`td`,18)(426,`code`,25),cN(427,`PoSkeletonType`),ag()(),Tl(428,`td`,20)(429,`p`)(430,`code`),cN(431,`normal`),ag()()(),Tl(432,`td`,21)(433,`em`)(434,`strong`),cN(435,`(opcional)`),ag()(),Tl(436,`p`),cN(437,`Define o tipo visual do skeleton, alterando sua cor de fundo.`),ag(),Tl(438,`p`),cN(439,`Valores válidos:`),ag(),Tl(440,`ul`)(441,`li`)(442,`code`),cN(443,`normal`),ag(),cN(444,`: Cor neutra clara (padrão)`),ag(),Tl(445,`li`)(446,`code`),cN(447,`primary`),ag(),cN(448,`: Cor neutra média`),ag(),Tl(449,`li`)(450,`code`),cN(451,`content`),ag(),cN(452,`: Fundo branco`),ag()()()(),Tl(453,`tr`,14)(454,`td`,15)(455,`div`,16)(456,`span`,17),cN(457,` p-variant`),Gl(458,`br`),ag()()(),Tl(459,`td`,18)(460,`code`,26),cN(461,`PoSkeletonVariant`),ag()(),Tl(462,`td`,20)(463,`p`)(464,`code`),cN(465,`text`),ag()()(),Tl(466,`td`,21)(467,`em`)(468,`strong`),cN(469,`(opcional)`),ag()(),Tl(470,`p`),cN(471,`Define a variante visual do skeleton.`),ag(),Tl(472,`p`),cN(473,`Valores válidos:`),ag(),Tl(474,`ul`)(475,`li`)(476,`code`),cN(477,`text`),ag(),cN(478,`: Simula uma linha de texto (altura padrão: 1em)`),ag(),Tl(479,`li`)(480,`code`),cN(481,`rectangle`),ag(),cN(482,`: Forma retangular (proporção 3:1 por padrão)`),ag(),Tl(483,`li`)(484,`code`),cN(485,`square`),ag(),cN(486,`: Forma quadrada (largura e altura iguais)`),ag(),Tl(487,`li`)(488,`code`),cN(489,`circle`),ag(),cN(490,`: Forma circular (largura e altura iguais)`),ag()()()(),Tl(491,`tr`,14)(492,`td`,15)(493,`div`,16)(494,`span`,17),cN(495,` p-width`),Gl(496,`br`),ag()()(),Tl(497,`td`,18)(498,`code`,22),cN(499,`string`),ag()(),Tl(500,`td`,20)(501,`p`)(502,`code`),cN(503,`100%`),ag(),cN(504,` para variante `),Tl(505,`code`),cN(506,`text`),ag(),cN(507,`, tamanho baseado em `),Tl(508,`code`),cN(509,`p-size`),ag(),cN(510,` para outras variantes`),ag()(),Tl(511,`td`,21)(512,`em`)(513,`strong`),cN(514,`(opcional)`),ag()(),Tl(515,`p`),cN(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ag(),Tl(517,`p`),cN(518,`Quando definido, sobrescreve a largura padrão da variante.`),ag()()()(),Tl(519,`h3`),cN(520,`Enums`),ag(),Tl(521,`h4`,4)(522,`code`,5),cN(523,`PoSkeletonAnimation`),ag()(),Tl(524,`div`,2)(525,`p`),cN(526,`Define os tipos de animação do componente `),Tl(527,`code`),cN(528,`po-skeleton`),ag(),cN(529,`.`),ag()(),Tl(530,`h4`,10),cN(531,`Propriedades`),ag(),Tl(532,`table`,11)(533,`tr`,12)(534,`th`,13),cN(535,`Nome`),ag(),Tl(536,`th`,13),cN(537,`Descrição`),ag()(),Tl(538,`tr`,14)(539,`td`,15)(540,`div`,16)(541,`span`,17),cN(542,` none`),Gl(543,`br`),ag()()(),Tl(544,`td`,21)(545,`p`),cN(546,`Sem animação`),ag()()(),Tl(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),cN(551,` pulse`),Gl(552,`br`),ag()()(),Tl(553,`td`,21)(554,`p`),cN(555,`Animação de pulsação`),ag()()(),Tl(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),cN(560,` shimmer`),Gl(561,`br`),ag()()(),Tl(562,`td`,21)(563,`p`),cN(564,`Animação de brilho deslizante`),ag()()()(),Tl(565,`h4`,4)(566,`code`,5),cN(567,`PoSkeletonSize`),ag()(),Tl(568,`div`,2)(569,`p`),cN(570,`Define os tamanhos disponíveis para o componente `),Tl(571,`code`),cN(572,`po-skeleton`),ag(),cN(573,`.`),ag()(),Tl(574,`h4`,10),cN(575,`Propriedades`),ag(),Tl(576,`table`,11)(577,`tr`,12)(578,`th`,13),cN(579,`Nome`),ag(),Tl(580,`th`,13),cN(581,`Descrição`),ag()(),Tl(582,`tr`,14)(583,`td`,15)(584,`div`,16)(585,`span`,17),cN(586,` xs`),Gl(587,`br`),ag()()(),Tl(588,`td`,21)(589,`p`),cN(590,`Tamanho extra pequeno`),ag()()(),Tl(591,`tr`,14)(592,`td`,15)(593,`div`,16)(594,`span`,17),cN(595,` sm`),Gl(596,`br`),ag()()(),Tl(597,`td`,21)(598,`p`),cN(599,`Tamanho pequeno`),ag()()(),Tl(600,`tr`,14)(601,`td`,15)(602,`div`,16)(603,`span`,17),cN(604,` md`),Gl(605,`br`),ag()()(),Tl(606,`td`,21)(607,`p`),cN(608,`Tamanho médio`),ag()()(),Tl(609,`tr`,14)(610,`td`,15)(611,`div`,16)(612,`span`,17),cN(613,` lg`),Gl(614,`br`),ag()()(),Tl(615,`td`,21)(616,`p`),cN(617,`Tamanho grande`),ag()()(),Tl(618,`tr`,14)(619,`td`,15)(620,`div`,16)(621,`span`,17),cN(622,` xl`),Gl(623,`br`),ag()()(),Tl(624,`td`,21)(625,`p`),cN(626,`Tamanho extra grande`),ag()()(),Tl(627,`tr`,14)(628,`td`,15)(629,`div`,16)(630,`span`,17),cN(631,` xxl`),Gl(632,`br`),ag()()(),Tl(633,`td`,21)(634,`p`),cN(635,`Tamanho extra extra grande`),ag()()()(),Tl(636,`h4`,4)(637,`code`,5),cN(638,`PoSkeletonType`),ag()(),Tl(639,`div`,2)(640,`p`),cN(641,`Define os tipos visuais disponíveis para o componente `),Tl(642,`code`),cN(643,`po-skeleton`),ag(),cN(644,`.`),ag()(),Tl(645,`h4`,10),cN(646,`Propriedades`),ag(),Tl(647,`table`,11)(648,`tr`,12)(649,`th`,13),cN(650,`Nome`),ag(),Tl(651,`th`,13),cN(652,`Descrição`),ag()(),Tl(653,`tr`,14)(654,`td`,15)(655,`div`,16)(656,`span`,17),cN(657,` normal`),Gl(658,`br`),ag()()(),Tl(659,`td`,21)(660,`p`),cN(661,`Tipo padrão com cor neutra clara`),ag()()(),Tl(662,`tr`,14)(663,`td`,15)(664,`div`,16)(665,`span`,17),cN(666,` primary`),Gl(667,`br`),ag()()(),Tl(668,`td`,21)(669,`p`),cN(670,`Tipo primário com cor neutra média`),ag()()(),Tl(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),cN(675,` content`),Gl(676,`br`),ag()()(),Tl(677,`td`,21)(678,`p`),cN(679,`Tipo de conteúdo com fundo branco`),ag()()()(),Tl(680,`h4`,4)(681,`code`,5),cN(682,`PoSkeletonVariant`),ag()(),Tl(683,`div`,2)(684,`p`),cN(685,`Define as variantes visuais do componente `),Tl(686,`code`),cN(687,`po-skeleton`),ag(),cN(688,`.`),ag()(),Tl(689,`h4`,10),cN(690,`Propriedades`),ag(),Tl(691,`table`,11)(692,`tr`,12)(693,`th`,13),cN(694,`Nome`),ag(),Tl(695,`th`,13),cN(696,`Descrição`),ag()(),Tl(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),cN(701,` text`),Gl(702,`br`),ag()()(),Tl(703,`td`,21)(704,`p`),cN(705,`Variante para simular texto`),ag()()(),Tl(706,`tr`,14)(707,`td`,15)(708,`div`,16)(709,`span`,17),cN(710,` rectangle`),Gl(711,`br`),ag()()(),Tl(712,`td`,21)(713,`p`),cN(714,`Variante retangular (largura maior que altura)`),ag()()(),Tl(715,`tr`,14)(716,`td`,15)(717,`div`,16)(718,`span`,17),cN(719,` square`),Gl(720,`br`),ag()()(),Tl(721,`td`,21)(722,`p`),cN(723,`Variante quadrada (largura igual à altura)`),ag()()(),Tl(724,`tr`,14)(725,`td`,15)(726,`div`,16)(727,`span`,17),cN(728,` circle`),Gl(729,`br`),ag()()(),Tl(730,`td`,21)(731,`p`),cN(732,`Variante circular`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:12,vars:4,consts:[[`p-title`,`Skeleton`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),Gl(3,`sample-po-skeleton-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),Gl(5,`sample-po-skeleton-basic-view`)(6,`sample-po-skeleton-labs-view`)(7,`sample-po-skeleton-credit-card-view`)(8,`sample-po-skeleton-widget-card-view`)(9,`sample-po-skeleton-user-profile-view`)(10,`sample-po-skeleton-social-post-view`)(11,`sample-po-skeleton-article-view`),ag()()()),l&2&&(nw(`p-actions`,a.actions),jp(2),nw(`p-active`,a.activeTab===`doc`),jp(2),nw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})()}];var ke=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[bL.forChild(Ge),bL]})}return o})();var Vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,ke]})}return o})();export{Vt as DocPoSkeletonModule};