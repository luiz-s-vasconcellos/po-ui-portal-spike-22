import {f as fe,u as ue$1,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,dw as dNe,T as Tl,L as Gl,M as sg,an as AO,aH as Ka,b8 as Ume,b9 as $me,C as iN,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as L3,cp as Bhe,aJ as Whe,c9 as jhe,aM as ww,aN as r0,aq as gx,aO as Ew,aP as o0,at as mx,ba as vNe,a3 as sNe,aB as Sx,aA as Nx,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var oe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row"],[1,"po-md-12"]],template:function(l,a){l&1&&(Tl(0,"div",0),Gl(1,"po-skeleton",1)(2,"po-skeleton",1)(3,"po-skeleton",1),sg());},dependencies:[dNe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Skeleton Basic"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-skeleton-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ee,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,oe],encapsulation:2,changeDetection:1})}return o})();function we(o,R){if(o&1){let p=Sx();Tl(0,"po-select",12),ww("ngModelChange",function(a){Ky(p);let s=Nx();return sN(s.size,a)||(s.size=a),Xy(a)}),sg(),r0();}if(o&2){let p=Nx();Ew("ngModel",p.size),nw("p-options",p.sizeOptions),o0();}}function ye(o,R){if(o&1){let p=Sx();Gl(0,"po-divider",13),Tl(1,"po-number",14),ww("ngModelChange",function(a){Ky(p);let s=Nx();return sN(s.circleSize,a)||(s.circleSize=a),Xy(a)}),ht("p-change",function(){Ky(p);let a=Nx();return Xy(a.onCircleSizeChange())}),sg(),r0(),Tl(2,"po-select",15),ww("ngModelChange",function(a){Ky(p);let s=Nx();return sN(s.circleSizeUnit,a)||(s.circleSizeUnit=a),Xy(a)}),ht("p-change",function(){Ky(p);let a=Nx();return Xy(a.onCircleSizeUnitChange())}),sg(),r0(),Gl(3,"po-info",16);}if(o&2){let p=Nx();Vp(),Ew("ngModel",p.circleSize),o0(),Vp(),Ew("ngModel",p.circleSizeUnit),nw("p-options",p.unitOptions),o0(),Vp(),nw("p-value",p.circleSize?p.circleSize+p.circleSizeUnit:"Using default size from Size select");}}function Pe(o,R){if(o&1){let p=Sx();Gl(0,"po-divider",17),Tl(1,"po-input",18),ww("ngModelChange",function(a){Ky(p);let s=Nx();return sN(s.width,a)||(s.width=a),Xy(a)}),sg(),r0(),Tl(2,"po-input",19),ww("ngModelChange",function(a){Ky(p);let s=Nx();return sN(s.height,a)||(s.height=a),Xy(a)}),sg(),r0(),Tl(3,"po-input",20),ww("ngModelChange",function(a){Ky(p);let s=Nx();return sN(s.borderRadius,a)||(s.borderRadius=a),Xy(a)}),sg(),r0();}if(o&2){let p=Nx();Vp(),Ew("ngModel",p.width),o0(),Vp(),Ew("ngModel",p.height),o0(),Vp(),Ew("ngModel",p.borderRadius),o0();}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit="px";animationOptions=[{label:"Shimmer",value:"shimmer"},{label:"Pulse",value:"pulse"},{label:"None",value:"none"}];sizeOptions=[{label:"Extra Small",value:"xs"},{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra Large",value:"xl"},{label:"Extra Extra Large",value:"2xl"}];typeOptions=[{label:"Normal",value:"normal"},{label:"Primary",value:"primary"},{label:"Content",value:"content"}];variantOptions=[{label:"Circle",value:"circle"},{label:"Text",value:"text"},{label:"Rectangle",value:"rectangle"},{label:"Square",value:"square"}];unitOptions=[{label:"Pixels (px)",value:"px"},{label:"REM",value:"rem"},{label:"EM",value:"em"},{label:"Percentage (%)",value:"%"}];ngOnInit(){this.restore();}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null;}onCircleSizeChange(){if(this.circleSize&&this.variant==="circle"){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius="50%";}else this.width=void 0,this.height=void 0,this.borderRadius=void 0;}onCircleSizeUnitChange(){this.onCircleSizeChange();}restore(){this.variant="circle",this.type="normal",this.animation="shimmer",this.size="md",this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel="Carregando",this.circleSize=null,this.circleSizeUnit="px";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs"]],standalone:false,decls:17,vars:19,consts:[[1,"po-row"],[1,"po-md-12",3,"p-variant","p-type","p-animation","p-size","p-width","p-height","p-border-radius","p-aria-label"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Animation",1,"po-md-12"],["name","animation","p-label","Animation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Shapes",1,"po-md-12"],["name","variant","p-label","Variant",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModel","p-options"],["p-label","Accessibility",1,"po-md-12"],["name","ariaLabel","p-label","Aria Label","p-help","Texto descritivo para leitores de tela (acessibilidade)",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Circle Dynamic Size (optional)",1,"po-md-12"],["name","circleSize","p-clean","","p-label","Circle Size","p-help","Define o tamanho do c\xEDrculo","p-min","1",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","circleSizeUnit","p-label","Unit",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Applied Size",1,"po-md-6",3,"p-value"],["p-label","Custom (optional)",1,"po-md-12"],["name","width","p-clean","","p-label","Width","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderRadius","p-clean","","p-label","Border Radius","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,a){l&1&&(Tl(0,"div",0),Gl(1,"po-skeleton",1),sg(),Gl(2,"hr")(3,"po-info",2)(4,"hr"),Tl(5,"form",0),Gl(6,"po-divider",3),Tl(7,"po-select",4),ww("ngModelChange",function(x){return sN(a.animation,x)||(a.animation=x),x}),sg(),r0(),Tl(8,"po-select",5),ww("ngModelChange",function(x){return sN(a.type,x)||(a.type=x),x}),sg(),r0(),Gl(9,"po-divider",6),Tl(10,"po-select",7),ww("ngModelChange",function(x){return sN(a.variant,x)||(a.variant=x),x}),ht("p-change",function(){return a.onVariantChange()}),sg(),r0(),gx(11,we,1,2,"po-select",8),Gl(12,"po-divider",9),Tl(13,"po-input",10),ww("ngModelChange",function(x){return sN(a.ariaLabel,x)||(a.ariaLabel=x),x}),sg(),r0(),gx(14,ye,4,4),gx(15,Pe,4,3),Tl(16,"po-button",11),ht("p-click",function(){return a.restore()}),sg()()),l&2&&(Vp(),nw("p-variant",a.variant)("p-type",a.type)("p-animation",a.animation)("p-size",a.size)("p-width",a.width||void 0)("p-height",a.height||void 0)("p-border-radius",a.borderRadius||void 0)("p-aria-label",a.ariaLabel),Vp(2),nw("p-value",a.modelValue),Vp(4),Ew("ngModel",a.animation),nw("p-options",a.animationOptions),o0(),Vp(),Ew("ngModel",a.type),nw("p-options",a.typeOptions),o0(),Vp(2),Ew("ngModel",a.variant),nw("p-options",a.variantOptions),o0(),Vp(),mx(a.variant!=="text"?11:-1),Vp(2),Ew("ngModel",a.ariaLabel),o0(),Vp(),mx(a.variant==="circle"?14:-1),Vp(),mx(a.variant==="text"?15:-1));},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,L3,Bhe,Whe,jhe,dNe],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Skeleton Labs"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-skeleton-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card"]],standalone:false,decls:47,vars:0,consts:[[1,"po-row"],["p-height","340","p-title","Payment Method",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card"],[1,"po-md-2","card-chip"],["p-variant","rectangle","p-width","40px","p-height","24px"],[1,"po-row","card-number"],[1,"po-sm-3","po-md-3"],["p-variant","text"],[1,"po-row","card-details"],[1,"po-sm-7","po-md-7","card-holder"],["p-variant","text","p-size","sm","p-width","40px"],["p-variant","text","p-width","120px"],[1,"po-sm-5","po-md-5","card-expiry"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","50px"],[1,"card-brand"],["p-variant","circle","p-size","sm"],["p-height","340","p-title","Payment Method - Content",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card-gray"],["p-variant","rectangle","p-width","40px","p-height","24px","p-type","content"],["p-variant","text","p-type","content"],["p-variant","text","p-size","sm","p-width","40px","p-type","content"],["p-variant","text","p-width","120px","p-type","content"],["p-variant","text","p-width","60px","p-size","sm","p-type","content"],["p-variant","text","p-width","50px","p-type","content"],["p-variant","circle","p-size","sm","p-type","content"]],template:function(l,a){l&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",0)(4,"div",3),Gl(5,"po-skeleton",4),sg()(),Tl(6,"div",5)(7,"div",6),Gl(8,"po-skeleton",7),sg(),Tl(9,"div",6),Gl(10,"po-skeleton",7),sg(),Tl(11,"div",6),Gl(12,"po-skeleton",7),sg(),Tl(13,"div",6),Gl(14,"po-skeleton",7),sg()(),Tl(15,"div",8)(16,"div",9),Gl(17,"po-skeleton",10)(18,"po-skeleton",11),sg(),Tl(19,"div",12),Gl(20,"po-skeleton",13)(21,"po-skeleton",14),sg()(),Tl(22,"div",15),Gl(23,"po-skeleton",16),sg()()(),Tl(24,"po-widget",17)(25,"div",18)(26,"div",0)(27,"div",3),Gl(28,"po-skeleton",19),sg()(),Tl(29,"div",5)(30,"div",6),Gl(31,"po-skeleton",20),sg(),Tl(32,"div",6),Gl(33,"po-skeleton",20),sg(),Tl(34,"div",6),Gl(35,"po-skeleton",20),sg(),Tl(36,"div",6),Gl(37,"po-skeleton",20),sg()(),Tl(38,"div",8)(39,"div",9),Gl(40,"po-skeleton",21)(41,"po-skeleton",22),sg(),Tl(42,"div",12),Gl(43,"po-skeleton",23)(44,"po-skeleton",24),sg()(),Tl(45,"div",15),Gl(46,"po-skeleton",25),sg()()()());},dependencies:[vNe,dNe],styles:[".credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}"],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Skeleton - Credit Card"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css"),sg(),Tl(25,"pre",11),iN(26,`.credit-card {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-skeleton-credit-card"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,De,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,re],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card"]],standalone:false,decls:17,vars:0,consts:[[1,"po-row"],[1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"widget-card"],[1,"po-row","widget-header"],[1,"po-sm-7","po-md-7"],["p-variant","text","p-height","32px"],[1,"po-sm-3","po-md-3"],["p-variant","text","p-width","80px","p-height","32px"],[1,"po-sm-2","po-md-2","widget-icon"],["p-variant","square","p-size","sm"],[1,"po-row","widget-content"],[1,"widget-spacer"],[1,"po-row","widget-footer"],[1,"po-sm-12","po-md-12","footer-button"],["p-variant","rectangle","p-size","md"]],template:function(l,a){l&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3)(4,"div",4),Gl(5,"po-skeleton",5),sg(),Tl(6,"div",6),Gl(7,"po-skeleton",7),sg(),Tl(8,"div",8),Gl(9,"po-skeleton",9),sg()(),Tl(10,"div",10)(11,"div",4),Gl(12,"po-skeleton",5),sg()(),Gl(13,"div",11),Tl(14,"div",12)(15,"div",13),Gl(16,"po-skeleton",14),sg()()()()());},dependencies:[vNe,dNe],styles:[".widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Skeleton - Widget Card"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css"),sg(),Tl(25,"pre",11),iN(26,`.widget-card {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-skeleton-widget-card"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Oe,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile"]],standalone:false,decls:20,vars:0,consts:[[1,"po-row"],["p-title","User Profile",1,"po-md-6"],[1,"profile-card"],[1,"profile-picture"],["p-variant","circle","p-size","xl","p-aria-label","Carregando perfil do usu\xE1rio"],["p-variant","text","p-width","150px"],["p-variant","text","p-width","200px"],["p-variant","text"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],[1,"profile-stats"],[1,"stat"],["p-variant","text","p-width","40px"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","70px","p-size","sm"],["p-variant","text","p-width","65px","p-size","sm"]],template:function(l,a){l&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Gl(4,"po-skeleton",4),sg(),Gl(5,"po-skeleton",5)(6,"po-skeleton",6)(7,"po-skeleton",7)(8,"po-skeleton",8)(9,"po-skeleton",9),Tl(10,"div",10)(11,"div",11),Gl(12,"po-skeleton",12)(13,"po-skeleton",13),sg(),Tl(14,"div",11),Gl(15,"po-skeleton",12)(16,"po-skeleton",14),sg(),Tl(17,"div",11),Gl(18,"po-skeleton",12)(19,"po-skeleton",15),sg()()()()());},dependencies:[vNe,dNe],styles:[".profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Skeleton - User Profile"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css"),sg(),Tl(25,"pre",11),iN(26,`.profile-card {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-skeleton-user-profile"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,qe,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post"]],standalone:false,decls:35,vars:0,consts:[[1,"po-row"],["p-height","550",1,"po-md-6"],[1,"post-card"],[1,"post-header"],["p-variant","circle","p-size","sm","p-aria-label","Carregando post de rede social"],[1,"post-header-text"],["p-variant","text","p-size","sm"],["p-variant","rectangle","p-height","300px"],[1,"post-actions"],["p-variant","rectangle","p-size","sm","p-width","30px","p-height","30px"],["p-variant","text","p-width","120px"],["p-variant","text"],["p-variant","text","p-width","85%"],["p-variant","text","p-width","60%"],["p-variant","circle","p-size","sm"],["p-variant","rectangle","p-height","250px"],["p-variant","text","p-width","140px"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],["p-variant","text","p-width","65%"],["p-variant","text","p-width","50%"]],template:function(l,a){l&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Gl(4,"po-skeleton",4),Tl(5,"div",5),Gl(6,"po-skeleton",6)(7,"po-skeleton",6),sg()(),Gl(8,"po-skeleton",7),Tl(9,"div",8),Gl(10,"po-skeleton",9)(11,"po-skeleton",9)(12,"po-skeleton",9),sg(),Gl(13,"po-skeleton",10)(14,"po-skeleton",11)(15,"po-skeleton",12)(16,"po-skeleton",13),sg()(),Tl(17,"po-widget",1)(18,"div",2)(19,"div",3),Gl(20,"po-skeleton",14),Tl(21,"div",5),Gl(22,"po-skeleton",6)(23,"po-skeleton",6),sg()(),Gl(24,"po-skeleton",15),Tl(25,"div",8),Gl(26,"po-skeleton",9)(27,"po-skeleton",9)(28,"po-skeleton",9),sg(),Gl(29,"po-skeleton",16)(30,"po-skeleton",11)(31,"po-skeleton",17)(32,"po-skeleton",18)(33,"po-skeleton",19)(34,"po-skeleton",20),sg()()());},dependencies:[vNe,dNe],styles:[".post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Skeleton - Social Post"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css"),sg(),Tl(25,"pre",11),iN(26,`.post-card {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-skeleton-social-post"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Fe,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article"]],standalone:false,decls:15,vars:0,consts:[[1,"po-row"],["p-height","380","p-title","Latest Article",1,"po-md-6"],[1,"article-card"],["p-variant","rectangle","p-height","150px","p-aria-label","Carregando artigo"],["p-variant","text"],["p-variant","text","p-width","90%"],[1,"article-author"],["p-variant","circle","p-size","sm"],[1,"author-details"],["p-variant","text","p-width","100px","p-size","sm"],["p-variant","text","p-width","80px","p-size","sm"],["p-variant","text","p-width","75%"],["p-variant","text","p-width","80px"]],template:function(l,a){l&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"div",2),Gl(3,"po-skeleton",3)(4,"po-skeleton",4)(5,"po-skeleton",5),Tl(6,"div",6),Gl(7,"po-skeleton",7),Tl(8,"div",8),Gl(9,"po-skeleton",9)(10,"po-skeleton",10),sg()(),Gl(11,"po-skeleton",4)(12,"po-skeleton",4)(13,"po-skeleton",11)(14,"po-skeleton",12),sg()()());},dependencies:[vNe,dNe],styles:[".article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Skeleton - Article"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-skeleton-article/sample-po-skeleton-article.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-skeleton-article/sample-po-skeleton-article.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-skeleton-article/sample-po-skeleton-article.component.css"),sg(),Tl(25,"pre",11),iN(26,`.article-card {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-skeleton-article"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,He,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-doc"]],standalone:false,decls:733,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoSkeletonAnimation"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoSkeletonSize"],["pan","",1,"docs-api-property-type","PoSkeletonType"],["pan","",1,"docs-api-property-type","PoSkeletonVariant"]],template:function(l,a){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoSkeletonModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-skeleton."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoSkeletonComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-skeleton"),sg(),iN(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),sg(),Tl(18,"p"),iN(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),sg(),Tl(20,"h4"),iN(21,"Tokens customiz\xE1veis"),sg(),Tl(22,"p"),iN(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(24,"blockquote")(25,"p"),iN(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(27,"a",6),iN(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(29,"."),sg()(),Tl(30,"table")(31,"thead")(32,"tr")(33,"th"),iN(34,"Propriedade"),sg(),Tl(35,"th"),iN(36,"Descri\xE7\xE3o"),sg(),Tl(37,"th"),iN(38,"Valor Padr\xE3o"),sg()()(),Tl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),iN(43,"Cores"),sg()(),Gl(44,"td")(45,"td"),sg(),Tl(46,"tr")(47,"td")(48,"code"),iN(49,"--color"),sg()(),Tl(50,"td"),iN(51,"Cor de fundo do skeleton (tipo normal)"),sg(),Tl(52,"td")(53,"code"),iN(54,"var(--color-neutral-light-20)"),sg()()(),Tl(55,"tr")(56,"td")(57,"code"),iN(58,"--color-primary"),sg()(),Tl(59,"td"),iN(60,"Cor de fundo do skeleton (tipo primary)"),sg(),Tl(61,"td")(62,"code"),iN(63,"var(--color-neutral-mid-40)"),sg()()(),Tl(64,"tr")(65,"td")(66,"code"),iN(67,"--color-content"),sg()(),Tl(68,"td"),iN(69,"Cor de fundo do skeleton (tipo content)"),sg(),Tl(70,"td")(71,"code"),iN(72,"var(--color-neutral-light-00)"),sg()()(),Tl(73,"tr")(74,"td")(75,"code"),iN(76,"--shimmer-highlight"),sg()(),Tl(77,"td"),iN(78,"Cor de destaque do shimmer (tipo normal)"),sg(),Tl(79,"td")(80,"code"),iN(81,"var(--color-neutral-light-30)"),sg()()(),Tl(82,"tr")(83,"td")(84,"code"),iN(85,"--shimmer-highlight-primary"),sg()(),Tl(86,"td"),iN(87,"Cor de destaque do shimmer (tipo primary)"),sg(),Tl(88,"td")(89,"code"),iN(90,"var(--color-neutral-light-20)"),sg()()(),Tl(91,"tr")(92,"td")(93,"code"),iN(94,"--shimmer-highlight-content"),sg()(),Tl(95,"td"),iN(96,"Cor de destaque do shimmer (tipo content)"),sg(),Tl(97,"td")(98,"code"),iN(99,"var(--color-neutral-light-05)"),sg()()(),Tl(100,"tr")(101,"td")(102,"strong"),iN(103,"Espa\xE7amento"),sg()(),Gl(104,"td")(105,"td"),sg(),Tl(106,"tr")(107,"td")(108,"code"),iN(109,"--margin-bottom"),sg()(),Tl(110,"td"),iN(111,"Margem inferior do skeleton"),sg(),Tl(112,"td")(113,"code"),iN(114,"var(--spacing-xs)"),sg()()(),Tl(115,"tr")(116,"td")(117,"strong"),iN(118,"Bordas"),sg()(),Gl(119,"td")(120,"td"),sg(),Tl(121,"tr")(122,"td")(123,"code"),iN(124,"--border-radius"),sg()(),Tl(125,"td"),iN(126,"Raio da borda do skeleton"),sg(),Tl(127,"td")(128,"code"),iN(129,"var(--border-radius-md)"),sg()()(),Tl(130,"tr")(131,"td")(132,"code"),iN(133,"--border-radius-text"),sg()(),Tl(134,"td"),iN(135,"Raio da borda para a variante text"),sg(),Tl(136,"td")(137,"code"),iN(138,"var(--border-radius-md)"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),iN(142,"--border-radius-primary"),sg()(),Tl(143,"td"),iN(144,"Raio da borda do skeleton (tipo primary)"),sg(),Tl(145,"td")(146,"code"),iN(147,"var(--border-radius-md)"),sg()()(),Tl(148,"tr")(149,"td")(150,"code"),iN(151,"--border-radius-content"),sg()(),Tl(152,"td"),iN(153,"Raio da borda do skeleton (tipo content)"),sg(),Tl(154,"td")(155,"code"),iN(156,"var(--border-radius-lg)"),sg()()(),Tl(157,"tr")(158,"td")(159,"strong"),iN(160,"Transi\xE7\xF5es"),sg()(),Gl(161,"td")(162,"td"),sg(),Tl(163,"tr")(164,"td")(165,"code"),iN(166,"--transition-property"),sg()(),Tl(167,"td"),iN(168,"Propriedade CSS da transi\xE7\xE3o"),sg(),Tl(169,"td")(170,"code"),iN(171,"all"),sg()()(),Tl(172,"tr")(173,"td")(174,"code"),iN(175,"--transition-duration"),sg()(),Tl(176,"td"),iN(177,"Dura\xE7\xE3o da transi\xE7\xE3o de cor"),sg(),Tl(178,"td")(179,"code"),iN(180,"var(--duration-moderate)"),sg()()(),Tl(181,"tr")(182,"td")(183,"code"),iN(184,"--transition-timing"),sg()(),Tl(185,"td"),iN(186,"Fun\xE7\xE3o de temporiza\xE7\xE3o da transi\xE7\xE3o/anima\xE7\xE3o"),sg(),Tl(187,"td")(188,"code"),iN(189,"var(--timing-continuous)"),sg()()(),Tl(190,"tr")(191,"td")(192,"strong"),iN(193,"Anima\xE7\xF5es"),sg()(),Gl(194,"td")(195,"td"),sg(),Tl(196,"tr")(197,"td")(198,"code"),iN(199,"--animation-duration-pulse"),sg()(),Tl(200,"td"),iN(201,"Dura\xE7\xE3o da anima\xE7\xE3o de pulsa\xE7\xE3o"),sg(),Tl(202,"td")(203,"code"),iN(204,"var(--duration-very-slow)"),sg()()(),Tl(205,"tr")(206,"td")(207,"code"),iN(208,"--animation-duration-shimmer"),sg()(),Tl(209,"td"),iN(210,"Dura\xE7\xE3o da anima\xE7\xE3o de brilho deslizante"),sg(),Tl(211,"td")(212,"code"),iN(213,"var(--duration-ultra-slow)"),sg()()()()()(),Tl(214,"div",7)(215,"h4",8),iN(216,"Seletor"),sg(),Tl(217,"pre",9),iN(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),sg()(),Tl(219,"h4",10),iN(220,"Propriedades"),sg(),Tl(221,"table",11)(222,"tr",12)(223,"th",13),iN(224,"Nome"),sg(),Tl(225,"th",13),iN(226,"Tipo"),sg(),Tl(227,"th",13),iN(228,"Padr\xE3o"),sg(),Tl(229,"th",13),iN(230,"Descri\xE7\xE3o"),sg()(),Tl(231,"tr",14)(232,"td",15)(233,"div",16)(234,"span",17),iN(235," p-animation"),Gl(236,"br"),sg()()(),Tl(237,"td",18)(238,"code",19),iN(239,"PoSkeletonAnimation"),sg()(),Tl(240,"td",20)(241,"p")(242,"code"),iN(243,"shimmer"),sg()()(),Tl(244,"td",21)(245,"em")(246,"strong"),iN(247,"(opcional)"),sg()(),Tl(248,"p"),iN(249,"Define o tipo de anima\xE7\xE3o do skeleton."),sg(),Tl(250,"p"),iN(251,"Valores v\xE1lidos:"),sg(),Tl(252,"ul")(253,"li")(254,"code"),iN(255,"none"),sg(),iN(256,": Sem anima\xE7\xE3o"),sg(),Tl(257,"li")(258,"code"),iN(259,"pulse"),sg(),iN(260,": Anima\xE7\xE3o de pulsa\xE7\xE3o"),sg(),Tl(261,"li")(262,"code"),iN(263,"shimmer"),sg(),iN(264,": Anima\xE7\xE3o de brilho deslizante"),sg()()()(),Tl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),iN(269," p-aria-label"),Gl(270,"br"),sg()()(),Tl(271,"td",18)(272,"code",22),iN(273,"string"),sg()(),Tl(274,"td",20),iN(275,"-"),sg(),Tl(276,"td",21)(277,"em")(278,"strong"),iN(279,"(opcional)"),sg()(),Tl(280,"p"),iN(281,"Define a descri\xE7\xE3o acess\xEDvel do conte\xFAdo que est\xE1 sendo carregado."),sg(),Tl(282,"p"),iN(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),sg(),Tl(284,"p")(285,"strong"),iN(286,"Quando usar:"),sg()(),Tl(287,"ul")(288,"li"),iN(289,"Use em "),Tl(290,"strong"),iN(291,"skeletons \xFAnicos"),sg(),iN(292," ou no "),Tl(293,"strong"),iN(294,"primeiro skeleton de um grupo"),sg(),iN(295," com descri\xE7\xE3o contextual"),sg(),Tl(296,"li"),iN(297,"Evite usar em m\xFAltiplos skeletons dentro da mesma \xE1rea sem contexto, para n\xE3o causar repeti\xE7\xE3o excessiva"),sg()(),Tl(298,"p")(299,"strong"),iN(300,"Exemplos de uso:"),sg()(),Tl(301,"pre")(302,"code",23),iN(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),sg()(),Tl(304,"blockquote")(305,"p")(306,"strong"),iN(307,"Boas pr\xE1ticas de acessibilidade:"),sg()(),Tl(308,"ul")(309,"li"),iN(310,"Forne\xE7a contexto espec\xEDfico na label para que os usu\xE1rios entendam o que est\xE1 carregando"),sg()()(),Tl(311,"blockquote")(312,"ul")(313,"li"),iN(314,"Em casos complexos, considere usar um \xFAnico "),Tl(315,"code"),iN(316,'<div role="status">'),sg(),iN(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),sg()()()()(),Tl(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),iN(322," p-border-radius"),Gl(323,"br"),sg()()(),Tl(324,"td",18)(325,"code",22),iN(326,"string"),sg()(),Tl(327,"td",20),iN(328,"-"),sg(),Tl(329,"td",21)(330,"em")(331,"strong"),iN(332,"(opcional)"),sg()(),Tl(333,"p"),iN(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),sg(),Tl(335,"p"),iN(336,"Esta propriedade sobrescreve o border-radius padr\xE3o de cada variante."),sg()()(),Tl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),iN(341," p-height"),Gl(342,"br"),sg()()(),Tl(343,"td",18)(344,"code",22),iN(345,"string"),sg()(),Tl(346,"td",20),iN(347,"-"),sg(),Tl(348,"td",21)(349,"em")(350,"strong"),iN(351,"(opcional)"),sg()(),Tl(352,"p"),iN(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),sg(),Tl(354,"p"),iN(355,"Quando definido, sobrescreve a altura padr\xE3o da variante."),sg()()(),Tl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),iN(360," p-size"),Gl(361,"br"),sg()()(),Tl(362,"td",18)(363,"code",24),iN(364,"PoSkeletonSize"),sg()(),Tl(365,"td",20)(366,"p")(367,"code"),iN(368,"md"),sg()()(),Tl(369,"td",21)(370,"em")(371,"strong"),iN(372,"(opcional)"),sg()(),Tl(373,"p"),iN(374,"Define o tamanho do skeleton para as variantes pr\xE9-definidas ("),Tl(375,"code"),iN(376,"rectangle"),sg(),iN(377,", "),Tl(378,"code"),iN(379,"square"),sg(),iN(380,", "),Tl(381,"code"),iN(382,"circle"),sg(),iN(383,")."),sg(),Tl(384,"p"),iN(385,"Valores v\xE1lidos:"),sg(),Tl(386,"ul")(387,"li")(388,"code"),iN(389,"xs"),sg(),iN(390,": Extra pequeno (24px para square/circle, 72px x 24px para rectangle)"),sg(),Tl(391,"li")(392,"code"),iN(393,"sm"),sg(),iN(394,": Pequeno (32px para square/circle, 96px x 32px para rectangle)"),sg(),Tl(395,"li")(396,"code"),iN(397,"md"),sg(),iN(398,": M\xE9dio (48px para square/circle, 144px x 48px para rectangle)"),sg(),Tl(399,"li")(400,"code"),iN(401,"lg"),sg(),iN(402,": Grande (64px para square/circle, 192px x 64px para rectangle)"),sg(),Tl(403,"li")(404,"code"),iN(405,"xl"),sg(),iN(406,": Extra grande (96px para square/circle, 288px x 96px para rectangle)"),sg(),Tl(407,"li")(408,"code"),iN(409,"2xl"),sg(),iN(410,": Extra extra grande (144px para square/circle, 432px x 144px para rectangle)"),sg()(),Tl(411,"p"),iN(412,"Esta propriedade \xE9 ignorada quando "),Tl(413,"code"),iN(414,"p-width"),sg(),iN(415," ou "),Tl(416,"code"),iN(417,"p-height"),sg(),iN(418," s\xE3o definidos explicitamente."),sg()()(),Tl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),iN(423," p-type"),Gl(424,"br"),sg()()(),Tl(425,"td",18)(426,"code",25),iN(427,"PoSkeletonType"),sg()(),Tl(428,"td",20)(429,"p")(430,"code"),iN(431,"normal"),sg()()(),Tl(432,"td",21)(433,"em")(434,"strong"),iN(435,"(opcional)"),sg()(),Tl(436,"p"),iN(437,"Define o tipo visual do skeleton, alterando sua cor de fundo."),sg(),Tl(438,"p"),iN(439,"Valores v\xE1lidos:"),sg(),Tl(440,"ul")(441,"li")(442,"code"),iN(443,"normal"),sg(),iN(444,": Cor neutra clara (padr\xE3o)"),sg(),Tl(445,"li")(446,"code"),iN(447,"primary"),sg(),iN(448,": Cor neutra m\xE9dia"),sg(),Tl(449,"li")(450,"code"),iN(451,"content"),sg(),iN(452,": Fundo branco"),sg()()()(),Tl(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),iN(457," p-variant"),Gl(458,"br"),sg()()(),Tl(459,"td",18)(460,"code",26),iN(461,"PoSkeletonVariant"),sg()(),Tl(462,"td",20)(463,"p")(464,"code"),iN(465,"text"),sg()()(),Tl(466,"td",21)(467,"em")(468,"strong"),iN(469,"(opcional)"),sg()(),Tl(470,"p"),iN(471,"Define a variante visual do skeleton."),sg(),Tl(472,"p"),iN(473,"Valores v\xE1lidos:"),sg(),Tl(474,"ul")(475,"li")(476,"code"),iN(477,"text"),sg(),iN(478,": Simula uma linha de texto (altura padr\xE3o: 1em)"),sg(),Tl(479,"li")(480,"code"),iN(481,"rectangle"),sg(),iN(482,": Forma retangular (propor\xE7\xE3o 3:1 por padr\xE3o)"),sg(),Tl(483,"li")(484,"code"),iN(485,"square"),sg(),iN(486,": Forma quadrada (largura e altura iguais)"),sg(),Tl(487,"li")(488,"code"),iN(489,"circle"),sg(),iN(490,": Forma circular (largura e altura iguais)"),sg()()()(),Tl(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),iN(495," p-width"),Gl(496,"br"),sg()()(),Tl(497,"td",18)(498,"code",22),iN(499,"string"),sg()(),Tl(500,"td",20)(501,"p")(502,"code"),iN(503,"100%"),sg(),iN(504," para variante "),Tl(505,"code"),iN(506,"text"),sg(),iN(507,", tamanho baseado em "),Tl(508,"code"),iN(509,"p-size"),sg(),iN(510," para outras variantes"),sg()(),Tl(511,"td",21)(512,"em")(513,"strong"),iN(514,"(opcional)"),sg()(),Tl(515,"p"),iN(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),sg(),Tl(517,"p"),iN(518,"Quando definido, sobrescreve a largura padr\xE3o da variante."),sg()()()(),Tl(519,"h3"),iN(520,"Enums"),sg(),Tl(521,"h4",4)(522,"code",5),iN(523,"PoSkeletonAnimation"),sg()(),Tl(524,"div",2)(525,"p"),iN(526,"Define os tipos de anima\xE7\xE3o do componente "),Tl(527,"code"),iN(528,"po-skeleton"),sg(),iN(529,"."),sg()(),Tl(530,"h4",10),iN(531,"Propriedades"),sg(),Tl(532,"table",11)(533,"tr",12)(534,"th",13),iN(535,"Nome"),sg(),Tl(536,"th",13),iN(537,"Descri\xE7\xE3o"),sg()(),Tl(538,"tr",14)(539,"td",15)(540,"div",16)(541,"span",17),iN(542," none"),Gl(543,"br"),sg()()(),Tl(544,"td",21)(545,"p"),iN(546,"Sem anima\xE7\xE3o"),sg()()(),Tl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),iN(551," pulse"),Gl(552,"br"),sg()()(),Tl(553,"td",21)(554,"p"),iN(555,"Anima\xE7\xE3o de pulsa\xE7\xE3o"),sg()()(),Tl(556,"tr",14)(557,"td",15)(558,"div",16)(559,"span",17),iN(560," shimmer"),Gl(561,"br"),sg()()(),Tl(562,"td",21)(563,"p"),iN(564,"Anima\xE7\xE3o de brilho deslizante"),sg()()()(),Tl(565,"h4",4)(566,"code",5),iN(567,"PoSkeletonSize"),sg()(),Tl(568,"div",2)(569,"p"),iN(570,"Define os tamanhos dispon\xEDveis para o componente "),Tl(571,"code"),iN(572,"po-skeleton"),sg(),iN(573,"."),sg()(),Tl(574,"h4",10),iN(575,"Propriedades"),sg(),Tl(576,"table",11)(577,"tr",12)(578,"th",13),iN(579,"Nome"),sg(),Tl(580,"th",13),iN(581,"Descri\xE7\xE3o"),sg()(),Tl(582,"tr",14)(583,"td",15)(584,"div",16)(585,"span",17),iN(586," xs"),Gl(587,"br"),sg()()(),Tl(588,"td",21)(589,"p"),iN(590,"Tamanho extra pequeno"),sg()()(),Tl(591,"tr",14)(592,"td",15)(593,"div",16)(594,"span",17),iN(595," sm"),Gl(596,"br"),sg()()(),Tl(597,"td",21)(598,"p"),iN(599,"Tamanho pequeno"),sg()()(),Tl(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),iN(604," md"),Gl(605,"br"),sg()()(),Tl(606,"td",21)(607,"p"),iN(608,"Tamanho m\xE9dio"),sg()()(),Tl(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),iN(613," lg"),Gl(614,"br"),sg()()(),Tl(615,"td",21)(616,"p"),iN(617,"Tamanho grande"),sg()()(),Tl(618,"tr",14)(619,"td",15)(620,"div",16)(621,"span",17),iN(622," xl"),Gl(623,"br"),sg()()(),Tl(624,"td",21)(625,"p"),iN(626,"Tamanho extra grande"),sg()()(),Tl(627,"tr",14)(628,"td",15)(629,"div",16)(630,"span",17),iN(631," xxl"),Gl(632,"br"),sg()()(),Tl(633,"td",21)(634,"p"),iN(635,"Tamanho extra extra grande"),sg()()()(),Tl(636,"h4",4)(637,"code",5),iN(638,"PoSkeletonType"),sg()(),Tl(639,"div",2)(640,"p"),iN(641,"Define os tipos visuais dispon\xEDveis para o componente "),Tl(642,"code"),iN(643,"po-skeleton"),sg(),iN(644,"."),sg()(),Tl(645,"h4",10),iN(646,"Propriedades"),sg(),Tl(647,"table",11)(648,"tr",12)(649,"th",13),iN(650,"Nome"),sg(),Tl(651,"th",13),iN(652,"Descri\xE7\xE3o"),sg()(),Tl(653,"tr",14)(654,"td",15)(655,"div",16)(656,"span",17),iN(657," normal"),Gl(658,"br"),sg()()(),Tl(659,"td",21)(660,"p"),iN(661,"Tipo padr\xE3o com cor neutra clara"),sg()()(),Tl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),iN(666," primary"),Gl(667,"br"),sg()()(),Tl(668,"td",21)(669,"p"),iN(670,"Tipo prim\xE1rio com cor neutra m\xE9dia"),sg()()(),Tl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),iN(675," content"),Gl(676,"br"),sg()()(),Tl(677,"td",21)(678,"p"),iN(679,"Tipo de conte\xFAdo com fundo branco"),sg()()()(),Tl(680,"h4",4)(681,"code",5),iN(682,"PoSkeletonVariant"),sg()(),Tl(683,"div",2)(684,"p"),iN(685,"Define as variantes visuais do componente "),Tl(686,"code"),iN(687,"po-skeleton"),sg(),iN(688,"."),sg()(),Tl(689,"h4",10),iN(690,"Propriedades"),sg(),Tl(691,"table",11)(692,"tr",12)(693,"th",13),iN(694,"Nome"),sg(),Tl(695,"th",13),iN(696,"Descri\xE7\xE3o"),sg()(),Tl(697,"tr",14)(698,"td",15)(699,"div",16)(700,"span",17),iN(701," text"),Gl(702,"br"),sg()()(),Tl(703,"td",21)(704,"p"),iN(705,"Variante para simular texto"),sg()()(),Tl(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),iN(710," rectangle"),Gl(711,"br"),sg()()(),Tl(712,"td",21)(713,"p"),iN(714,"Variante retangular (largura maior que altura)"),sg()()(),Tl(715,"tr",14)(716,"td",15)(717,"div",16)(718,"span",17),iN(719," square"),Gl(720,"br"),sg()()(),Tl(721,"td",21)(722,"p"),iN(723,"Variante quadrada (largura igual \xE0 altura)"),sg()()(),Tl(724,"tr",14)(725,"td",15)(726,"div",16)(727,"span",17),iN(728," circle"),Gl(729,"br"),sg()()(),Tl(730,"td",21)(731,"p"),iN(732,"Variante circular"),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Skeleton",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Gl(3,"sample-po-skeleton-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Gl(5,"sample-po-skeleton-basic-view")(6,"sample-po-skeleton-labs-view")(7,"sample-po-skeleton-credit-card-view")(8,"sample-po-skeleton-widget-card-view")(9,"sample-po-skeleton-user-profile-view")(10,"sample-po-skeleton-social-post-view")(11,"sample-po-skeleton-article-view"),sg()()()),l&2&&(nw("p-actions",a.actions),Vp(2),nw("p-active",a.activeTab==="doc"),Vp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[sNe,Ume,$me,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:"",component:Ce}],ke=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[DL.forChild(Ge),DL]})}return o})();var Vt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,ke]})}return o})();export{Vt as DocPoSkeletonModule};