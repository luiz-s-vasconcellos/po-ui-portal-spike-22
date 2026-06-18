import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,dx as mNe,H as Sl,M as Wl,O as sg,an as bO,aH as Ga,b8 as Gme,b9 as Qme,J as Jx,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,cp as Uhe,aJ as Ghe,c9 as Qhe,aM as Ew,aN as JA,aq as ux,aO as Dw,aP as t0,at as dx,ba as bNe,a3 as pNe,aB as Ex,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var oe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row"],[1,"po-md-12"]],template:function(l,a){l&1&&(Sl(0,"div",0),Wl(1,"po-skeleton",1)(2,"po-skeleton",1)(3,"po-skeleton",1),sg());},dependencies:[mNe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Skeleton Basic"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-skeleton-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ee,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return o})();function we(o,R){if(o&1){let p=Ex();Sl(0,"po-select",12),Ew("ngModelChange",function(a){Xy(p);let s=Tx();return tN(s.size,a)||(s.size=a),Qy(a)}),sg(),JA();}if(o&2){let p=Tx();Dw("ngModel",p.size),tw("p-options",p.sizeOptions),t0();}}function ye(o,R){if(o&1){let p=Ex();Wl(0,"po-divider",13),Sl(1,"po-number",14),Ew("ngModelChange",function(a){Xy(p);let s=Tx();return tN(s.circleSize,a)||(s.circleSize=a),Qy(a)}),ht("p-change",function(){Xy(p);let a=Tx();return Qy(a.onCircleSizeChange())}),sg(),JA(),Sl(2,"po-select",15),Ew("ngModelChange",function(a){Xy(p);let s=Tx();return tN(s.circleSizeUnit,a)||(s.circleSizeUnit=a),Qy(a)}),ht("p-change",function(){Xy(p);let a=Tx();return Qy(a.onCircleSizeUnitChange())}),sg(),JA(),Wl(3,"po-info",16);}if(o&2){let p=Tx();Vp(),Dw("ngModel",p.circleSize),t0(),Vp(),Dw("ngModel",p.circleSizeUnit),tw("p-options",p.unitOptions),t0(),Vp(),tw("p-value",p.circleSize?p.circleSize+p.circleSizeUnit:"Using default size from Size select");}}function Pe(o,R){if(o&1){let p=Ex();Wl(0,"po-divider",17),Sl(1,"po-input",18),Ew("ngModelChange",function(a){Xy(p);let s=Tx();return tN(s.width,a)||(s.width=a),Qy(a)}),sg(),JA(),Sl(2,"po-input",19),Ew("ngModelChange",function(a){Xy(p);let s=Tx();return tN(s.height,a)||(s.height=a),Qy(a)}),sg(),JA(),Sl(3,"po-input",20),Ew("ngModelChange",function(a){Xy(p);let s=Tx();return tN(s.borderRadius,a)||(s.borderRadius=a),Qy(a)}),sg(),JA();}if(o&2){let p=Tx();Vp(),Dw("ngModel",p.width),t0(),Vp(),Dw("ngModel",p.height),t0(),Vp(),Dw("ngModel",p.borderRadius),t0();}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit="px";animationOptions=[{label:"Shimmer",value:"shimmer"},{label:"Pulse",value:"pulse"},{label:"None",value:"none"}];sizeOptions=[{label:"Extra Small",value:"xs"},{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra Large",value:"xl"},{label:"Extra Extra Large",value:"2xl"}];typeOptions=[{label:"Normal",value:"normal"},{label:"Primary",value:"primary"},{label:"Content",value:"content"}];variantOptions=[{label:"Circle",value:"circle"},{label:"Text",value:"text"},{label:"Rectangle",value:"rectangle"},{label:"Square",value:"square"}];unitOptions=[{label:"Pixels (px)",value:"px"},{label:"REM",value:"rem"},{label:"EM",value:"em"},{label:"Percentage (%)",value:"%"}];ngOnInit(){this.restore();}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null;}onCircleSizeChange(){if(this.circleSize&&this.variant==="circle"){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius="50%";}else this.width=void 0,this.height=void 0,this.borderRadius=void 0;}onCircleSizeUnitChange(){this.onCircleSizeChange();}restore(){this.variant="circle",this.type="normal",this.animation="shimmer",this.size="md",this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel="Carregando",this.circleSize=null,this.circleSizeUnit="px";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs"]],standalone:false,decls:17,vars:19,consts:[[1,"po-row"],[1,"po-md-12",3,"p-variant","p-type","p-animation","p-size","p-width","p-height","p-border-radius","p-aria-label"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Animation",1,"po-md-12"],["name","animation","p-label","Animation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Shapes",1,"po-md-12"],["name","variant","p-label","Variant",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModel","p-options"],["p-label","Accessibility",1,"po-md-12"],["name","ariaLabel","p-label","Aria Label","p-help","Texto descritivo para leitores de tela (acessibilidade)",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Circle Dynamic Size (optional)",1,"po-md-12"],["name","circleSize","p-clean","","p-label","Circle Size","p-help","Define o tamanho do c\xEDrculo","p-min","1",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","circleSizeUnit","p-label","Unit",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Applied Size",1,"po-md-6",3,"p-value"],["p-label","Custom (optional)",1,"po-md-12"],["name","width","p-clean","","p-label","Width","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderRadius","p-clean","","p-label","Border Radius","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,a){l&1&&(Sl(0,"div",0),Wl(1,"po-skeleton",1),sg(),Wl(2,"hr")(3,"po-info",2)(4,"hr"),Sl(5,"form",0),Wl(6,"po-divider",3),Sl(7,"po-select",4),Ew("ngModelChange",function(x){return tN(a.animation,x)||(a.animation=x),x}),sg(),JA(),Sl(8,"po-select",5),Ew("ngModelChange",function(x){return tN(a.type,x)||(a.type=x),x}),sg(),JA(),Wl(9,"po-divider",6),Sl(10,"po-select",7),Ew("ngModelChange",function(x){return tN(a.variant,x)||(a.variant=x),x}),ht("p-change",function(){return a.onVariantChange()}),sg(),JA(),ux(11,we,1,2,"po-select",8),Wl(12,"po-divider",9),Sl(13,"po-input",10),Ew("ngModelChange",function(x){return tN(a.ariaLabel,x)||(a.ariaLabel=x),x}),sg(),JA(),ux(14,ye,4,4),ux(15,Pe,4,3),Sl(16,"po-button",11),ht("p-click",function(){return a.restore()}),sg()()),l&2&&(Vp(),tw("p-variant",a.variant)("p-type",a.type)("p-animation",a.animation)("p-size",a.size)("p-width",a.width||void 0)("p-height",a.height||void 0)("p-border-radius",a.borderRadius||void 0)("p-aria-label",a.ariaLabel),Vp(2),tw("p-value",a.modelValue),Vp(4),Dw("ngModel",a.animation),tw("p-options",a.animationOptions),t0(),Vp(),Dw("ngModel",a.type),tw("p-options",a.typeOptions),t0(),Vp(2),Dw("ngModel",a.variant),tw("p-options",a.variantOptions),t0(),Vp(),dx(a.variant!=="text"?11:-1),Vp(2),Dw("ngModel",a.ariaLabel),t0(),Vp(),dx(a.variant==="circle"?14:-1),Vp(),dx(a.variant==="text"?15:-1));},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Uhe,Ghe,Qhe,mNe],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Skeleton Labs"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-skeleton-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card"]],standalone:false,decls:47,vars:0,consts:[[1,"po-row"],["p-height","340","p-title","Payment Method",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card"],[1,"po-md-2","card-chip"],["p-variant","rectangle","p-width","40px","p-height","24px"],[1,"po-row","card-number"],[1,"po-sm-3","po-md-3"],["p-variant","text"],[1,"po-row","card-details"],[1,"po-sm-7","po-md-7","card-holder"],["p-variant","text","p-size","sm","p-width","40px"],["p-variant","text","p-width","120px"],[1,"po-sm-5","po-md-5","card-expiry"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","50px"],[1,"card-brand"],["p-variant","circle","p-size","sm"],["p-height","340","p-title","Payment Method - Content",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card-gray"],["p-variant","rectangle","p-width","40px","p-height","24px","p-type","content"],["p-variant","text","p-type","content"],["p-variant","text","p-size","sm","p-width","40px","p-type","content"],["p-variant","text","p-width","120px","p-type","content"],["p-variant","text","p-width","60px","p-size","sm","p-type","content"],["p-variant","text","p-width","50px","p-type","content"],["p-variant","circle","p-size","sm","p-type","content"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",0)(4,"div",3),Wl(5,"po-skeleton",4),sg()(),Sl(6,"div",5)(7,"div",6),Wl(8,"po-skeleton",7),sg(),Sl(9,"div",6),Wl(10,"po-skeleton",7),sg(),Sl(11,"div",6),Wl(12,"po-skeleton",7),sg(),Sl(13,"div",6),Wl(14,"po-skeleton",7),sg()(),Sl(15,"div",8)(16,"div",9),Wl(17,"po-skeleton",10)(18,"po-skeleton",11),sg(),Sl(19,"div",12),Wl(20,"po-skeleton",13)(21,"po-skeleton",14),sg()(),Sl(22,"div",15),Wl(23,"po-skeleton",16),sg()()(),Sl(24,"po-widget",17)(25,"div",18)(26,"div",0)(27,"div",3),Wl(28,"po-skeleton",19),sg()(),Sl(29,"div",5)(30,"div",6),Wl(31,"po-skeleton",20),sg(),Sl(32,"div",6),Wl(33,"po-skeleton",20),sg(),Sl(34,"div",6),Wl(35,"po-skeleton",20),sg(),Sl(36,"div",6),Wl(37,"po-skeleton",20),sg()(),Sl(38,"div",8)(39,"div",9),Wl(40,"po-skeleton",21)(41,"po-skeleton",22),sg(),Sl(42,"div",12),Wl(43,"po-skeleton",23)(44,"po-skeleton",24),sg()(),Sl(45,"div",15),Wl(46,"po-skeleton",25),sg()()()());},dependencies:[bNe,mNe],styles:[".credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}"],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Skeleton - Credit Card"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.credit-card {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-credit-card"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return o})();var de=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card"]],standalone:false,decls:17,vars:0,consts:[[1,"po-row"],[1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"widget-card"],[1,"po-row","widget-header"],[1,"po-sm-7","po-md-7"],["p-variant","text","p-height","32px"],[1,"po-sm-3","po-md-3"],["p-variant","text","p-width","80px","p-height","32px"],[1,"po-sm-2","po-md-2","widget-icon"],["p-variant","square","p-size","sm"],[1,"po-row","widget-content"],[1,"widget-spacer"],[1,"po-row","widget-footer"],[1,"po-sm-12","po-md-12","footer-button"],["p-variant","rectangle","p-size","md"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3)(4,"div",4),Wl(5,"po-skeleton",5),sg(),Sl(6,"div",6),Wl(7,"po-skeleton",7),sg(),Sl(8,"div",8),Wl(9,"po-skeleton",9),sg()(),Sl(10,"div",10)(11,"div",4),Wl(12,"po-skeleton",5),sg()(),Wl(13,"div",11),Sl(14,"div",12)(15,"div",13),Wl(16,"po-skeleton",14),sg()()()()());},dependencies:[bNe,mNe],styles:[".widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Skeleton - Widget Card"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.widget-card {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-widget-card"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Oe,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile"]],standalone:false,decls:20,vars:0,consts:[[1,"po-row"],["p-title","User Profile",1,"po-md-6"],[1,"profile-card"],[1,"profile-picture"],["p-variant","circle","p-size","xl","p-aria-label","Carregando perfil do usu\xE1rio"],["p-variant","text","p-width","150px"],["p-variant","text","p-width","200px"],["p-variant","text"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],[1,"profile-stats"],[1,"stat"],["p-variant","text","p-width","40px"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","70px","p-size","sm"],["p-variant","text","p-width","65px","p-size","sm"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Wl(4,"po-skeleton",4),sg(),Wl(5,"po-skeleton",5)(6,"po-skeleton",6)(7,"po-skeleton",7)(8,"po-skeleton",8)(9,"po-skeleton",9),Sl(10,"div",10)(11,"div",11),Wl(12,"po-skeleton",12)(13,"po-skeleton",13),sg(),Sl(14,"div",11),Wl(15,"po-skeleton",12)(16,"po-skeleton",14),sg(),Sl(17,"div",11),Wl(18,"po-skeleton",12)(19,"po-skeleton",15),sg()()()()());},dependencies:[bNe,mNe],styles:[".profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Skeleton - User Profile"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.profile-card {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-user-profile"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,qe,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return o})();var he=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post"]],standalone:false,decls:35,vars:0,consts:[[1,"po-row"],["p-height","550",1,"po-md-6"],[1,"post-card"],[1,"post-header"],["p-variant","circle","p-size","sm","p-aria-label","Carregando post de rede social"],[1,"post-header-text"],["p-variant","text","p-size","sm"],["p-variant","rectangle","p-height","300px"],[1,"post-actions"],["p-variant","rectangle","p-size","sm","p-width","30px","p-height","30px"],["p-variant","text","p-width","120px"],["p-variant","text"],["p-variant","text","p-width","85%"],["p-variant","text","p-width","60%"],["p-variant","circle","p-size","sm"],["p-variant","rectangle","p-height","250px"],["p-variant","text","p-width","140px"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],["p-variant","text","p-width","65%"],["p-variant","text","p-width","50%"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Wl(4,"po-skeleton",4),Sl(5,"div",5),Wl(6,"po-skeleton",6)(7,"po-skeleton",6),sg()(),Wl(8,"po-skeleton",7),Sl(9,"div",8),Wl(10,"po-skeleton",9)(11,"po-skeleton",9)(12,"po-skeleton",9),sg(),Wl(13,"po-skeleton",10)(14,"po-skeleton",11)(15,"po-skeleton",12)(16,"po-skeleton",13),sg()(),Sl(17,"po-widget",1)(18,"div",2)(19,"div",3),Wl(20,"po-skeleton",14),Sl(21,"div",5),Wl(22,"po-skeleton",6)(23,"po-skeleton",6),sg()(),Wl(24,"po-skeleton",15),Sl(25,"div",8),Wl(26,"po-skeleton",9)(27,"po-skeleton",9)(28,"po-skeleton",9),sg(),Wl(29,"po-skeleton",16)(30,"po-skeleton",11)(31,"po-skeleton",17)(32,"po-skeleton",18)(33,"po-skeleton",19)(34,"po-skeleton",20),sg()()());},dependencies:[bNe,mNe],styles:[".post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Skeleton - Social Post"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.post-card {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-social-post"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article"]],standalone:false,decls:15,vars:0,consts:[[1,"po-row"],["p-height","380","p-title","Latest Article",1,"po-md-6"],[1,"article-card"],["p-variant","rectangle","p-height","150px","p-aria-label","Carregando artigo"],["p-variant","text"],["p-variant","text","p-width","90%"],[1,"article-author"],["p-variant","circle","p-size","sm"],[1,"author-details"],["p-variant","text","p-width","100px","p-size","sm"],["p-variant","text","p-width","80px","p-size","sm"],["p-variant","text","p-width","75%"],["p-variant","text","p-width","80px"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2),Wl(3,"po-skeleton",3)(4,"po-skeleton",4)(5,"po-skeleton",5),Sl(6,"div",6),Wl(7,"po-skeleton",7),Sl(8,"div",8),Wl(9,"po-skeleton",9)(10,"po-skeleton",10),sg()(),Wl(11,"po-skeleton",4)(12,"po-skeleton",4)(13,"po-skeleton",11)(14,"po-skeleton",12),sg()()());},dependencies:[bNe,mNe],styles:[".article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Skeleton - Article"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-skeleton-article/sample-po-skeleton-article.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-skeleton-article/sample-po-skeleton-article.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-skeleton-article/sample-po-skeleton-article.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.article-card {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-article"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,He,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return o})();var ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-doc"]],standalone:false,decls:733,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoSkeletonAnimation"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoSkeletonSize"],["pan","",1,"docs-api-property-type","PoSkeletonType"],["pan","",1,"docs-api-property-type","PoSkeletonVariant"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoSkeletonModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-skeleton."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoSkeletonComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-skeleton"),sg(),Jx(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),sg(),Sl(18,"p"),Jx(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),sg(),Sl(20,"h4"),Jx(21,"Tokens customiz\xE1veis"),sg(),Sl(22,"p"),Jx(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(24,"blockquote")(25,"p"),Jx(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(27,"a",6),Jx(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(29,"."),sg()(),Sl(30,"table")(31,"thead")(32,"tr")(33,"th"),Jx(34,"Propriedade"),sg(),Sl(35,"th"),Jx(36,"Descri\xE7\xE3o"),sg(),Sl(37,"th"),Jx(38,"Valor Padr\xE3o"),sg()()(),Sl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),Jx(43,"Cores"),sg()(),Wl(44,"td")(45,"td"),sg(),Sl(46,"tr")(47,"td")(48,"code"),Jx(49,"--color"),sg()(),Sl(50,"td"),Jx(51,"Cor de fundo do skeleton (tipo normal)"),sg(),Sl(52,"td")(53,"code"),Jx(54,"var(--color-neutral-light-20)"),sg()()(),Sl(55,"tr")(56,"td")(57,"code"),Jx(58,"--color-primary"),sg()(),Sl(59,"td"),Jx(60,"Cor de fundo do skeleton (tipo primary)"),sg(),Sl(61,"td")(62,"code"),Jx(63,"var(--color-neutral-mid-40)"),sg()()(),Sl(64,"tr")(65,"td")(66,"code"),Jx(67,"--color-content"),sg()(),Sl(68,"td"),Jx(69,"Cor de fundo do skeleton (tipo content)"),sg(),Sl(70,"td")(71,"code"),Jx(72,"var(--color-neutral-light-00)"),sg()()(),Sl(73,"tr")(74,"td")(75,"code"),Jx(76,"--shimmer-highlight"),sg()(),Sl(77,"td"),Jx(78,"Cor de destaque do shimmer (tipo normal)"),sg(),Sl(79,"td")(80,"code"),Jx(81,"var(--color-neutral-light-30)"),sg()()(),Sl(82,"tr")(83,"td")(84,"code"),Jx(85,"--shimmer-highlight-primary"),sg()(),Sl(86,"td"),Jx(87,"Cor de destaque do shimmer (tipo primary)"),sg(),Sl(88,"td")(89,"code"),Jx(90,"var(--color-neutral-light-20)"),sg()()(),Sl(91,"tr")(92,"td")(93,"code"),Jx(94,"--shimmer-highlight-content"),sg()(),Sl(95,"td"),Jx(96,"Cor de destaque do shimmer (tipo content)"),sg(),Sl(97,"td")(98,"code"),Jx(99,"var(--color-neutral-light-05)"),sg()()(),Sl(100,"tr")(101,"td")(102,"strong"),Jx(103,"Espa\xE7amento"),sg()(),Wl(104,"td")(105,"td"),sg(),Sl(106,"tr")(107,"td")(108,"code"),Jx(109,"--margin-bottom"),sg()(),Sl(110,"td"),Jx(111,"Margem inferior do skeleton"),sg(),Sl(112,"td")(113,"code"),Jx(114,"var(--spacing-xs)"),sg()()(),Sl(115,"tr")(116,"td")(117,"strong"),Jx(118,"Bordas"),sg()(),Wl(119,"td")(120,"td"),sg(),Sl(121,"tr")(122,"td")(123,"code"),Jx(124,"--border-radius"),sg()(),Sl(125,"td"),Jx(126,"Raio da borda do skeleton"),sg(),Sl(127,"td")(128,"code"),Jx(129,"var(--border-radius-md)"),sg()()(),Sl(130,"tr")(131,"td")(132,"code"),Jx(133,"--border-radius-text"),sg()(),Sl(134,"td"),Jx(135,"Raio da borda para a variante text"),sg(),Sl(136,"td")(137,"code"),Jx(138,"var(--border-radius-md)"),sg()()(),Sl(139,"tr")(140,"td")(141,"code"),Jx(142,"--border-radius-primary"),sg()(),Sl(143,"td"),Jx(144,"Raio da borda do skeleton (tipo primary)"),sg(),Sl(145,"td")(146,"code"),Jx(147,"var(--border-radius-md)"),sg()()(),Sl(148,"tr")(149,"td")(150,"code"),Jx(151,"--border-radius-content"),sg()(),Sl(152,"td"),Jx(153,"Raio da borda do skeleton (tipo content)"),sg(),Sl(154,"td")(155,"code"),Jx(156,"var(--border-radius-lg)"),sg()()(),Sl(157,"tr")(158,"td")(159,"strong"),Jx(160,"Transi\xE7\xF5es"),sg()(),Wl(161,"td")(162,"td"),sg(),Sl(163,"tr")(164,"td")(165,"code"),Jx(166,"--transition-property"),sg()(),Sl(167,"td"),Jx(168,"Propriedade CSS da transi\xE7\xE3o"),sg(),Sl(169,"td")(170,"code"),Jx(171,"all"),sg()()(),Sl(172,"tr")(173,"td")(174,"code"),Jx(175,"--transition-duration"),sg()(),Sl(176,"td"),Jx(177,"Dura\xE7\xE3o da transi\xE7\xE3o de cor"),sg(),Sl(178,"td")(179,"code"),Jx(180,"var(--duration-moderate)"),sg()()(),Sl(181,"tr")(182,"td")(183,"code"),Jx(184,"--transition-timing"),sg()(),Sl(185,"td"),Jx(186,"Fun\xE7\xE3o de temporiza\xE7\xE3o da transi\xE7\xE3o/anima\xE7\xE3o"),sg(),Sl(187,"td")(188,"code"),Jx(189,"var(--timing-continuous)"),sg()()(),Sl(190,"tr")(191,"td")(192,"strong"),Jx(193,"Anima\xE7\xF5es"),sg()(),Wl(194,"td")(195,"td"),sg(),Sl(196,"tr")(197,"td")(198,"code"),Jx(199,"--animation-duration-pulse"),sg()(),Sl(200,"td"),Jx(201,"Dura\xE7\xE3o da anima\xE7\xE3o de pulsa\xE7\xE3o"),sg(),Sl(202,"td")(203,"code"),Jx(204,"var(--duration-very-slow)"),sg()()(),Sl(205,"tr")(206,"td")(207,"code"),Jx(208,"--animation-duration-shimmer"),sg()(),Sl(209,"td"),Jx(210,"Dura\xE7\xE3o da anima\xE7\xE3o de brilho deslizante"),sg(),Sl(211,"td")(212,"code"),Jx(213,"var(--duration-ultra-slow)"),sg()()()()()(),Sl(214,"div",7)(215,"h4",8),Jx(216,"Seletor"),sg(),Sl(217,"pre",9),Jx(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),sg()(),Sl(219,"h4",10),Jx(220,"Propriedades"),sg(),Sl(221,"table",11)(222,"tr",12)(223,"th",13),Jx(224,"Nome"),sg(),Sl(225,"th",13),Jx(226,"Tipo"),sg(),Sl(227,"th",13),Jx(228,"Padr\xE3o"),sg(),Sl(229,"th",13),Jx(230,"Descri\xE7\xE3o"),sg()(),Sl(231,"tr",14)(232,"td",15)(233,"div",16)(234,"span",17),Jx(235," p-animation"),Wl(236,"br"),sg()()(),Sl(237,"td",18)(238,"code",19),Jx(239,"PoSkeletonAnimation"),sg()(),Sl(240,"td",20)(241,"p")(242,"code"),Jx(243,"shimmer"),sg()()(),Sl(244,"td",21)(245,"em")(246,"strong"),Jx(247,"(opcional)"),sg()(),Sl(248,"p"),Jx(249,"Define o tipo de anima\xE7\xE3o do skeleton."),sg(),Sl(250,"p"),Jx(251,"Valores v\xE1lidos:"),sg(),Sl(252,"ul")(253,"li")(254,"code"),Jx(255,"none"),sg(),Jx(256,": Sem anima\xE7\xE3o"),sg(),Sl(257,"li")(258,"code"),Jx(259,"pulse"),sg(),Jx(260,": Anima\xE7\xE3o de pulsa\xE7\xE3o"),sg(),Sl(261,"li")(262,"code"),Jx(263,"shimmer"),sg(),Jx(264,": Anima\xE7\xE3o de brilho deslizante"),sg()()()(),Sl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),Jx(269," p-aria-label"),Wl(270,"br"),sg()()(),Sl(271,"td",18)(272,"code",22),Jx(273,"string"),sg()(),Sl(274,"td",20),Jx(275,"-"),sg(),Sl(276,"td",21)(277,"em")(278,"strong"),Jx(279,"(opcional)"),sg()(),Sl(280,"p"),Jx(281,"Define a descri\xE7\xE3o acess\xEDvel do conte\xFAdo que est\xE1 sendo carregado."),sg(),Sl(282,"p"),Jx(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),sg(),Sl(284,"p")(285,"strong"),Jx(286,"Quando usar:"),sg()(),Sl(287,"ul")(288,"li"),Jx(289,"Use em "),Sl(290,"strong"),Jx(291,"skeletons \xFAnicos"),sg(),Jx(292," ou no "),Sl(293,"strong"),Jx(294,"primeiro skeleton de um grupo"),sg(),Jx(295," com descri\xE7\xE3o contextual"),sg(),Sl(296,"li"),Jx(297,"Evite usar em m\xFAltiplos skeletons dentro da mesma \xE1rea sem contexto, para n\xE3o causar repeti\xE7\xE3o excessiva"),sg()(),Sl(298,"p")(299,"strong"),Jx(300,"Exemplos de uso:"),sg()(),Sl(301,"pre")(302,"code",23),Jx(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),sg()(),Sl(304,"blockquote")(305,"p")(306,"strong"),Jx(307,"Boas pr\xE1ticas de acessibilidade:"),sg()(),Sl(308,"ul")(309,"li"),Jx(310,"Forne\xE7a contexto espec\xEDfico na label para que os usu\xE1rios entendam o que est\xE1 carregando"),sg()()(),Sl(311,"blockquote")(312,"ul")(313,"li"),Jx(314,"Em casos complexos, considere usar um \xFAnico "),Sl(315,"code"),Jx(316,'<div role="status">'),sg(),Jx(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),sg()()()()(),Sl(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),Jx(322," p-border-radius"),Wl(323,"br"),sg()()(),Sl(324,"td",18)(325,"code",22),Jx(326,"string"),sg()(),Sl(327,"td",20),Jx(328,"-"),sg(),Sl(329,"td",21)(330,"em")(331,"strong"),Jx(332,"(opcional)"),sg()(),Sl(333,"p"),Jx(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),sg(),Sl(335,"p"),Jx(336,"Esta propriedade sobrescreve o border-radius padr\xE3o de cada variante."),sg()()(),Sl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),Jx(341," p-height"),Wl(342,"br"),sg()()(),Sl(343,"td",18)(344,"code",22),Jx(345,"string"),sg()(),Sl(346,"td",20),Jx(347,"-"),sg(),Sl(348,"td",21)(349,"em")(350,"strong"),Jx(351,"(opcional)"),sg()(),Sl(352,"p"),Jx(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),sg(),Sl(354,"p"),Jx(355,"Quando definido, sobrescreve a altura padr\xE3o da variante."),sg()()(),Sl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),Jx(360," p-size"),Wl(361,"br"),sg()()(),Sl(362,"td",18)(363,"code",24),Jx(364,"PoSkeletonSize"),sg()(),Sl(365,"td",20)(366,"p")(367,"code"),Jx(368,"md"),sg()()(),Sl(369,"td",21)(370,"em")(371,"strong"),Jx(372,"(opcional)"),sg()(),Sl(373,"p"),Jx(374,"Define o tamanho do skeleton para as variantes pr\xE9-definidas ("),Sl(375,"code"),Jx(376,"rectangle"),sg(),Jx(377,", "),Sl(378,"code"),Jx(379,"square"),sg(),Jx(380,", "),Sl(381,"code"),Jx(382,"circle"),sg(),Jx(383,")."),sg(),Sl(384,"p"),Jx(385,"Valores v\xE1lidos:"),sg(),Sl(386,"ul")(387,"li")(388,"code"),Jx(389,"xs"),sg(),Jx(390,": Extra pequeno (24px para square/circle, 72px x 24px para rectangle)"),sg(),Sl(391,"li")(392,"code"),Jx(393,"sm"),sg(),Jx(394,": Pequeno (32px para square/circle, 96px x 32px para rectangle)"),sg(),Sl(395,"li")(396,"code"),Jx(397,"md"),sg(),Jx(398,": M\xE9dio (48px para square/circle, 144px x 48px para rectangle)"),sg(),Sl(399,"li")(400,"code"),Jx(401,"lg"),sg(),Jx(402,": Grande (64px para square/circle, 192px x 64px para rectangle)"),sg(),Sl(403,"li")(404,"code"),Jx(405,"xl"),sg(),Jx(406,": Extra grande (96px para square/circle, 288px x 96px para rectangle)"),sg(),Sl(407,"li")(408,"code"),Jx(409,"2xl"),sg(),Jx(410,": Extra extra grande (144px para square/circle, 432px x 144px para rectangle)"),sg()(),Sl(411,"p"),Jx(412,"Esta propriedade \xE9 ignorada quando "),Sl(413,"code"),Jx(414,"p-width"),sg(),Jx(415," ou "),Sl(416,"code"),Jx(417,"p-height"),sg(),Jx(418," s\xE3o definidos explicitamente."),sg()()(),Sl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Jx(423," p-type"),Wl(424,"br"),sg()()(),Sl(425,"td",18)(426,"code",25),Jx(427,"PoSkeletonType"),sg()(),Sl(428,"td",20)(429,"p")(430,"code"),Jx(431,"normal"),sg()()(),Sl(432,"td",21)(433,"em")(434,"strong"),Jx(435,"(opcional)"),sg()(),Sl(436,"p"),Jx(437,"Define o tipo visual do skeleton, alterando sua cor de fundo."),sg(),Sl(438,"p"),Jx(439,"Valores v\xE1lidos:"),sg(),Sl(440,"ul")(441,"li")(442,"code"),Jx(443,"normal"),sg(),Jx(444,": Cor neutra clara (padr\xE3o)"),sg(),Sl(445,"li")(446,"code"),Jx(447,"primary"),sg(),Jx(448,": Cor neutra m\xE9dia"),sg(),Sl(449,"li")(450,"code"),Jx(451,"content"),sg(),Jx(452,": Fundo branco"),sg()()()(),Sl(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),Jx(457," p-variant"),Wl(458,"br"),sg()()(),Sl(459,"td",18)(460,"code",26),Jx(461,"PoSkeletonVariant"),sg()(),Sl(462,"td",20)(463,"p")(464,"code"),Jx(465,"text"),sg()()(),Sl(466,"td",21)(467,"em")(468,"strong"),Jx(469,"(opcional)"),sg()(),Sl(470,"p"),Jx(471,"Define a variante visual do skeleton."),sg(),Sl(472,"p"),Jx(473,"Valores v\xE1lidos:"),sg(),Sl(474,"ul")(475,"li")(476,"code"),Jx(477,"text"),sg(),Jx(478,": Simula uma linha de texto (altura padr\xE3o: 1em)"),sg(),Sl(479,"li")(480,"code"),Jx(481,"rectangle"),sg(),Jx(482,": Forma retangular (propor\xE7\xE3o 3:1 por padr\xE3o)"),sg(),Sl(483,"li")(484,"code"),Jx(485,"square"),sg(),Jx(486,": Forma quadrada (largura e altura iguais)"),sg(),Sl(487,"li")(488,"code"),Jx(489,"circle"),sg(),Jx(490,": Forma circular (largura e altura iguais)"),sg()()()(),Sl(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),Jx(495," p-width"),Wl(496,"br"),sg()()(),Sl(497,"td",18)(498,"code",22),Jx(499,"string"),sg()(),Sl(500,"td",20)(501,"p")(502,"code"),Jx(503,"100%"),sg(),Jx(504," para variante "),Sl(505,"code"),Jx(506,"text"),sg(),Jx(507,", tamanho baseado em "),Sl(508,"code"),Jx(509,"p-size"),sg(),Jx(510," para outras variantes"),sg()(),Sl(511,"td",21)(512,"em")(513,"strong"),Jx(514,"(opcional)"),sg()(),Sl(515,"p"),Jx(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),sg(),Sl(517,"p"),Jx(518,"Quando definido, sobrescreve a largura padr\xE3o da variante."),sg()()()(),Sl(519,"h3"),Jx(520,"Enums"),sg(),Sl(521,"h4",4)(522,"code",5),Jx(523,"PoSkeletonAnimation"),sg()(),Sl(524,"div",2)(525,"p"),Jx(526,"Define os tipos de anima\xE7\xE3o do componente "),Sl(527,"code"),Jx(528,"po-skeleton"),sg(),Jx(529,"."),sg()(),Sl(530,"h4",10),Jx(531,"Propriedades"),sg(),Sl(532,"table",11)(533,"tr",12)(534,"th",13),Jx(535,"Nome"),sg(),Sl(536,"th",13),Jx(537,"Descri\xE7\xE3o"),sg()(),Sl(538,"tr",14)(539,"td",15)(540,"div",16)(541,"span",17),Jx(542," none"),Wl(543,"br"),sg()()(),Sl(544,"td",21)(545,"p"),Jx(546,"Sem anima\xE7\xE3o"),sg()()(),Sl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Jx(551," pulse"),Wl(552,"br"),sg()()(),Sl(553,"td",21)(554,"p"),Jx(555,"Anima\xE7\xE3o de pulsa\xE7\xE3o"),sg()()(),Sl(556,"tr",14)(557,"td",15)(558,"div",16)(559,"span",17),Jx(560," shimmer"),Wl(561,"br"),sg()()(),Sl(562,"td",21)(563,"p"),Jx(564,"Anima\xE7\xE3o de brilho deslizante"),sg()()()(),Sl(565,"h4",4)(566,"code",5),Jx(567,"PoSkeletonSize"),sg()(),Sl(568,"div",2)(569,"p"),Jx(570,"Define os tamanhos dispon\xEDveis para o componente "),Sl(571,"code"),Jx(572,"po-skeleton"),sg(),Jx(573,"."),sg()(),Sl(574,"h4",10),Jx(575,"Propriedades"),sg(),Sl(576,"table",11)(577,"tr",12)(578,"th",13),Jx(579,"Nome"),sg(),Sl(580,"th",13),Jx(581,"Descri\xE7\xE3o"),sg()(),Sl(582,"tr",14)(583,"td",15)(584,"div",16)(585,"span",17),Jx(586," xs"),Wl(587,"br"),sg()()(),Sl(588,"td",21)(589,"p"),Jx(590,"Tamanho extra pequeno"),sg()()(),Sl(591,"tr",14)(592,"td",15)(593,"div",16)(594,"span",17),Jx(595," sm"),Wl(596,"br"),sg()()(),Sl(597,"td",21)(598,"p"),Jx(599,"Tamanho pequeno"),sg()()(),Sl(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),Jx(604," md"),Wl(605,"br"),sg()()(),Sl(606,"td",21)(607,"p"),Jx(608,"Tamanho m\xE9dio"),sg()()(),Sl(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),Jx(613," lg"),Wl(614,"br"),sg()()(),Sl(615,"td",21)(616,"p"),Jx(617,"Tamanho grande"),sg()()(),Sl(618,"tr",14)(619,"td",15)(620,"div",16)(621,"span",17),Jx(622," xl"),Wl(623,"br"),sg()()(),Sl(624,"td",21)(625,"p"),Jx(626,"Tamanho extra grande"),sg()()(),Sl(627,"tr",14)(628,"td",15)(629,"div",16)(630,"span",17),Jx(631," xxl"),Wl(632,"br"),sg()()(),Sl(633,"td",21)(634,"p"),Jx(635,"Tamanho extra extra grande"),sg()()()(),Sl(636,"h4",4)(637,"code",5),Jx(638,"PoSkeletonType"),sg()(),Sl(639,"div",2)(640,"p"),Jx(641,"Define os tipos visuais dispon\xEDveis para o componente "),Sl(642,"code"),Jx(643,"po-skeleton"),sg(),Jx(644,"."),sg()(),Sl(645,"h4",10),Jx(646,"Propriedades"),sg(),Sl(647,"table",11)(648,"tr",12)(649,"th",13),Jx(650,"Nome"),sg(),Sl(651,"th",13),Jx(652,"Descri\xE7\xE3o"),sg()(),Sl(653,"tr",14)(654,"td",15)(655,"div",16)(656,"span",17),Jx(657," normal"),Wl(658,"br"),sg()()(),Sl(659,"td",21)(660,"p"),Jx(661,"Tipo padr\xE3o com cor neutra clara"),sg()()(),Sl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),Jx(666," primary"),Wl(667,"br"),sg()()(),Sl(668,"td",21)(669,"p"),Jx(670,"Tipo prim\xE1rio com cor neutra m\xE9dia"),sg()()(),Sl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),Jx(675," content"),Wl(676,"br"),sg()()(),Sl(677,"td",21)(678,"p"),Jx(679,"Tipo de conte\xFAdo com fundo branco"),sg()()()(),Sl(680,"h4",4)(681,"code",5),Jx(682,"PoSkeletonVariant"),sg()(),Sl(683,"div",2)(684,"p"),Jx(685,"Define as variantes visuais do componente "),Sl(686,"code"),Jx(687,"po-skeleton"),sg(),Jx(688,"."),sg()(),Sl(689,"h4",10),Jx(690,"Propriedades"),sg(),Sl(691,"table",11)(692,"tr",12)(693,"th",13),Jx(694,"Nome"),sg(),Sl(695,"th",13),Jx(696,"Descri\xE7\xE3o"),sg()(),Sl(697,"tr",14)(698,"td",15)(699,"div",16)(700,"span",17),Jx(701," text"),Wl(702,"br"),sg()()(),Sl(703,"td",21)(704,"p"),Jx(705,"Variante para simular texto"),sg()()(),Sl(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),Jx(710," rectangle"),Wl(711,"br"),sg()()(),Sl(712,"td",21)(713,"p"),Jx(714,"Variante retangular (largura maior que altura)"),sg()()(),Sl(715,"tr",14)(716,"td",15)(717,"div",16)(718,"span",17),Jx(719," square"),Wl(720,"br"),sg()()(),Sl(721,"td",21)(722,"p"),Jx(723,"Variante quadrada (largura igual \xE0 altura)"),sg()()(),Sl(724,"tr",14)(725,"td",15)(726,"div",16)(727,"span",17),Jx(728," circle"),Wl(729,"br"),sg()()(),Sl(730,"td",21)(731,"p"),Jx(732,"Variante circular"),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var ke=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Skeleton",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Wl(3,"sample-po-skeleton-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Wl(5,"sample-po-skeleton-basic-view")(6,"sample-po-skeleton-labs-view")(7,"sample-po-skeleton-credit-card-view")(8,"sample-po-skeleton-widget-card-view")(9,"sample-po-skeleton-user-profile-view")(10,"sample-po-skeleton-social-post-view")(11,"sample-po-skeleton-article-view"),sg()()()),l&2&&(tw("p-actions",a.actions),Vp(2),tw("p-active",a.activeTab==="doc"),Vp(2),tw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2})}return o})();var Ge=[{path:"",component:ke}],Ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[pL.forChild(Ge),pL]})}return o})();var Vt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,Ce]})}return o})();export{Vt as DocPoSkeletonModule};