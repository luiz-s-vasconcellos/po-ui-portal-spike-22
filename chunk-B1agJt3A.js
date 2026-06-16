import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d3 as nF,J as wl,N as Ul,R as ng,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bT as ha,ai as ya,bC as Vp,am as pw,an as $0,ao as QA,ap as hw,aq as G0,ar as JA,aU as IR,a3 as D3,al as lx,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var pe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row"],[1,"po-md-12"]],template:function(l,a){l&1&&(wl(0,"div",0),Ul(1,"po-skeleton",1)(2,"po-skeleton",1)(3,"po-skeleton",1),ng());},dependencies:[nF],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),re=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Skeleton Basic"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-skeleton-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return o})();function _e(o,j){if(o&1){let p=lx();wl(0,"po-select",12),pw("ngModelChange",function(a){Qy(p);let s=gx();return $x(s.size,a)||(s.size=a),Jy(a)}),ng(),$0();}if(o&2){let p=gx();hw("ngModel",p.size),YE("p-options",p.sizeOptions),G0();}}function Te(o,j){if(o&1){let p=lx();Ul(0,"po-divider",13),wl(1,"po-number",14),pw("ngModelChange",function(a){Qy(p);let s=gx();return $x(s.circleSize,a)||(s.circleSize=a),Jy(a)}),ut("p-change",function(){Qy(p);let a=gx();return Jy(a.onCircleSizeChange())}),ng(),$0(),wl(2,"po-select",15),pw("ngModelChange",function(a){Qy(p);let s=gx();return $x(s.circleSizeUnit,a)||(s.circleSizeUnit=a),Jy(a)}),ut("p-change",function(){Qy(p);let a=gx();return Jy(a.onCircleSizeUnitChange())}),ng(),$0(),Ul(3,"po-info",16);}if(o&2){let p=gx();Pp(),hw("ngModel",p.circleSize),G0(),Pp(),hw("ngModel",p.circleSizeUnit),YE("p-options",p.unitOptions),G0(),Pp(),YE("p-value",p.circleSize?p.circleSize+p.circleSizeUnit:"Using default size from Size select");}}function Me(o,j){if(o&1){let p=lx();Ul(0,"po-divider",17),wl(1,"po-input",18),pw("ngModelChange",function(a){Qy(p);let s=gx();return $x(s.width,a)||(s.width=a),Jy(a)}),ng(),$0(),wl(2,"po-input",19),pw("ngModelChange",function(a){Qy(p);let s=gx();return $x(s.height,a)||(s.height=a),Jy(a)}),ng(),$0(),wl(3,"po-input",20),pw("ngModelChange",function(a){Qy(p);let s=gx();return $x(s.borderRadius,a)||(s.borderRadius=a),Jy(a)}),ng(),$0();}if(o&2){let p=gx();Pp(),hw("ngModel",p.width),G0(),Pp(),hw("ngModel",p.height),G0(),Pp(),hw("ngModel",p.borderRadius),G0();}}var se=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit="px";animationOptions=[{label:"Shimmer",value:"shimmer"},{label:"Pulse",value:"pulse"},{label:"None",value:"none"}];sizeOptions=[{label:"Extra Small",value:"xs"},{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra Large",value:"xl"},{label:"Extra Extra Large",value:"2xl"}];typeOptions=[{label:"Normal",value:"normal"},{label:"Primary",value:"primary"},{label:"Content",value:"content"}];variantOptions=[{label:"Circle",value:"circle"},{label:"Text",value:"text"},{label:"Rectangle",value:"rectangle"},{label:"Square",value:"square"}];unitOptions=[{label:"Pixels (px)",value:"px"},{label:"REM",value:"rem"},{label:"EM",value:"em"},{label:"Percentage (%)",value:"%"}];ngOnInit(){this.restore();}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null;}onCircleSizeChange(){if(this.circleSize&&this.variant==="circle"){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius="50%";}else this.width=void 0,this.height=void 0,this.borderRadius=void 0;}onCircleSizeUnitChange(){this.onCircleSizeChange();}restore(){this.variant="circle",this.type="normal",this.animation="shimmer",this.size="md",this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel="Carregando",this.circleSize=null,this.circleSizeUnit="px";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs"]],standalone:false,decls:17,vars:19,consts:[[1,"po-row"],[1,"po-md-12",3,"p-variant","p-type","p-animation","p-size","p-width","p-height","p-border-radius","p-aria-label"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Animation",1,"po-md-12"],["name","animation","p-label","Animation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Shapes",1,"po-md-12"],["name","variant","p-label","Variant",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModel","p-options"],["p-label","Accessibility",1,"po-md-12"],["name","ariaLabel","p-label","Aria Label","p-help","Texto descritivo para leitores de tela (acessibilidade)",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Circle Dynamic Size (optional)",1,"po-md-12"],["name","circleSize","p-clean","","p-label","Circle Size","p-help","Define o tamanho do c\xEDrculo","p-min","1",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","circleSizeUnit","p-label","Unit",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Applied Size",1,"po-md-6",3,"p-value"],["p-label","Custom (optional)",1,"po-md-12"],["name","width","p-clean","","p-label","Width","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderRadius","p-clean","","p-label","Border Radius","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,a){l&1&&(wl(0,"div",0),Ul(1,"po-skeleton",1),ng(),Ul(2,"hr")(3,"po-info",2)(4,"hr"),wl(5,"form",0),Ul(6,"po-divider",3),wl(7,"po-select",4),pw("ngModelChange",function(x){return $x(a.animation,x)||(a.animation=x),x}),ng(),$0(),wl(8,"po-select",5),pw("ngModelChange",function(x){return $x(a.type,x)||(a.type=x),x}),ng(),$0(),Ul(9,"po-divider",6),wl(10,"po-select",7),pw("ngModelChange",function(x){return $x(a.variant,x)||(a.variant=x),x}),ut("p-change",function(){return a.onVariantChange()}),ng(),$0(),QA(11,_e,1,2,"po-select",8),Ul(12,"po-divider",9),wl(13,"po-input",10),pw("ngModelChange",function(x){return $x(a.ariaLabel,x)||(a.ariaLabel=x),x}),ng(),$0(),QA(14,Te,4,4),QA(15,Me,4,3),wl(16,"po-button",11),ut("p-click",function(){return a.restore()}),ng()()),l&2&&(Pp(),YE("p-variant",a.variant)("p-type",a.type)("p-animation",a.animation)("p-size",a.size)("p-width",a.width||void 0)("p-height",a.height||void 0)("p-border-radius",a.borderRadius||void 0)("p-aria-label",a.ariaLabel),Pp(2),YE("p-value",a.modelValue),Pp(4),hw("ngModel",a.animation),YE("p-options",a.animationOptions),G0(),Pp(),hw("ngModel",a.type),YE("p-options",a.typeOptions),G0(),Pp(2),hw("ngModel",a.variant),YE("p-options",a.variantOptions),G0(),Pp(),JA(a.variant!=="text"?11:-1),Pp(2),hw("ngModel",a.ariaLabel),G0(),Pp(),JA(a.variant==="circle"?14:-1),Pp(),JA(a.variant==="text"?15:-1));},dependencies:[aY,iY,oY,ck,ok,Pe,di,Yo,ha,ya,Vp,nF],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Skeleton Labs"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-skeleton-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,De,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return o})();var me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card"]],standalone:false,decls:47,vars:0,consts:[[1,"po-row"],["p-height","340","p-title","Payment Method",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card"],[1,"po-md-2","card-chip"],["p-variant","rectangle","p-width","40px","p-height","24px"],[1,"po-row","card-number"],[1,"po-sm-3","po-md-3"],["p-variant","text"],[1,"po-row","card-details"],[1,"po-sm-7","po-md-7","card-holder"],["p-variant","text","p-size","sm","p-width","40px"],["p-variant","text","p-width","120px"],[1,"po-sm-5","po-md-5","card-expiry"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","50px"],[1,"card-brand"],["p-variant","circle","p-size","sm"],["p-height","340","p-title","Payment Method - Content",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card-gray"],["p-variant","rectangle","p-width","40px","p-height","24px","p-type","content"],["p-variant","text","p-type","content"],["p-variant","text","p-size","sm","p-width","40px","p-type","content"],["p-variant","text","p-width","120px","p-type","content"],["p-variant","text","p-width","60px","p-size","sm","p-type","content"],["p-variant","text","p-width","50px","p-type","content"],["p-variant","circle","p-size","sm","p-type","content"]],template:function(l,a){l&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",0)(4,"div",3),Ul(5,"po-skeleton",4),ng()(),wl(6,"div",5)(7,"div",6),Ul(8,"po-skeleton",7),ng(),wl(9,"div",6),Ul(10,"po-skeleton",7),ng(),wl(11,"div",6),Ul(12,"po-skeleton",7),ng(),wl(13,"div",6),Ul(14,"po-skeleton",7),ng()(),wl(15,"div",8)(16,"div",9),Ul(17,"po-skeleton",10)(18,"po-skeleton",11),ng(),wl(19,"div",12),Ul(20,"po-skeleton",13)(21,"po-skeleton",14),ng()(),wl(22,"div",15),Ul(23,"po-skeleton",16),ng()()(),wl(24,"po-widget",17)(25,"div",18)(26,"div",0)(27,"div",3),Ul(28,"po-skeleton",19),ng()(),wl(29,"div",5)(30,"div",6),Ul(31,"po-skeleton",20),ng(),wl(32,"div",6),Ul(33,"po-skeleton",20),ng(),wl(34,"div",6),Ul(35,"po-skeleton",20),ng(),wl(36,"div",6),Ul(37,"po-skeleton",20),ng()(),wl(38,"div",8)(39,"div",9),Ul(40,"po-skeleton",21)(41,"po-skeleton",22),ng(),wl(42,"div",12),Ul(43,"po-skeleton",23)(44,"po-skeleton",24),ng()(),wl(45,"div",15),Ul(46,"po-skeleton",25),ng()()()());},dependencies:[IR,nF],styles:[".credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}"],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Skeleton - Credit Card"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css"),ng(),wl(25,"pre",11),Ux(26,`.credit-card {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-skeleton-credit-card"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Oe,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,me],encapsulation:2})}return o})();var ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card"]],standalone:false,decls:17,vars:0,consts:[[1,"po-row"],[1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"widget-card"],[1,"po-row","widget-header"],[1,"po-sm-7","po-md-7"],["p-variant","text","p-height","32px"],[1,"po-sm-3","po-md-3"],["p-variant","text","p-width","80px","p-height","32px"],[1,"po-sm-2","po-md-2","widget-icon"],["p-variant","square","p-size","sm"],[1,"po-row","widget-content"],[1,"widget-spacer"],[1,"po-row","widget-footer"],[1,"po-sm-12","po-md-12","footer-button"],["p-variant","rectangle","p-size","md"]],template:function(l,a){l&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3)(4,"div",4),Ul(5,"po-skeleton",5),ng(),wl(6,"div",6),Ul(7,"po-skeleton",7),ng(),wl(8,"div",8),Ul(9,"po-skeleton",9),ng()(),wl(10,"div",10)(11,"div",4),Ul(12,"po-skeleton",5),ng()(),Ul(13,"div",11),wl(14,"div",12)(15,"div",13),Ul(16,"po-skeleton",14),ng()()()()());},dependencies:[IR,nF],styles:[".widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Skeleton - Widget Card"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css"),ng(),wl(25,"pre",11),Ux(26,`.widget-card {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-skeleton-widget-card"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,qe,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile"]],standalone:false,decls:20,vars:0,consts:[[1,"po-row"],["p-title","User Profile",1,"po-md-6"],[1,"profile-card"],[1,"profile-picture"],["p-variant","circle","p-size","xl","p-aria-label","Carregando perfil do usu\xE1rio"],["p-variant","text","p-width","150px"],["p-variant","text","p-width","200px"],["p-variant","text"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],[1,"profile-stats"],[1,"stat"],["p-variant","text","p-width","40px"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","70px","p-size","sm"],["p-variant","text","p-width","65px","p-size","sm"]],template:function(l,a){l&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Ul(4,"po-skeleton",4),ng(),Ul(5,"po-skeleton",5)(6,"po-skeleton",6)(7,"po-skeleton",7)(8,"po-skeleton",8)(9,"po-skeleton",9),wl(10,"div",10)(11,"div",11),Ul(12,"po-skeleton",12)(13,"po-skeleton",13),ng(),wl(14,"div",11),Ul(15,"po-skeleton",12)(16,"po-skeleton",14),ng(),wl(17,"div",11),Ul(18,"po-skeleton",12)(19,"po-skeleton",15),ng()()()()());},dependencies:[IR,nF],styles:[".profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Skeleton - User Profile"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css"),ng(),wl(25,"pre",11),Ux(26,`.profile-card {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-skeleton-user-profile"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Fe,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return o})();var xe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post"]],standalone:false,decls:35,vars:0,consts:[[1,"po-row"],["p-height","550",1,"po-md-6"],[1,"post-card"],[1,"post-header"],["p-variant","circle","p-size","sm","p-aria-label","Carregando post de rede social"],[1,"post-header-text"],["p-variant","text","p-size","sm"],["p-variant","rectangle","p-height","300px"],[1,"post-actions"],["p-variant","rectangle","p-size","sm","p-width","30px","p-height","30px"],["p-variant","text","p-width","120px"],["p-variant","text"],["p-variant","text","p-width","85%"],["p-variant","text","p-width","60%"],["p-variant","circle","p-size","sm"],["p-variant","rectangle","p-height","250px"],["p-variant","text","p-width","140px"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],["p-variant","text","p-width","65%"],["p-variant","text","p-width","50%"]],template:function(l,a){l&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Ul(4,"po-skeleton",4),wl(5,"div",5),Ul(6,"po-skeleton",6)(7,"po-skeleton",6),ng()(),Ul(8,"po-skeleton",7),wl(9,"div",8),Ul(10,"po-skeleton",9)(11,"po-skeleton",9)(12,"po-skeleton",9),ng(),Ul(13,"po-skeleton",10)(14,"po-skeleton",11)(15,"po-skeleton",12)(16,"po-skeleton",13),ng()(),wl(17,"po-widget",1)(18,"div",2)(19,"div",3),Ul(20,"po-skeleton",14),wl(21,"div",5),Ul(22,"po-skeleton",6)(23,"po-skeleton",6),ng()(),Ul(24,"po-skeleton",15),wl(25,"div",8),Ul(26,"po-skeleton",9)(27,"po-skeleton",9)(28,"po-skeleton",9),ng(),Ul(29,"po-skeleton",16)(30,"po-skeleton",11)(31,"po-skeleton",17)(32,"po-skeleton",18)(33,"po-skeleton",19)(34,"po-skeleton",20),ng()()());},dependencies:[IR,nF],styles:[".post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Skeleton - Social Post"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css"),ng(),wl(25,"pre",11),Ux(26,`.post-card {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-skeleton-social-post"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,He,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,xe],encapsulation:2})}return o})();var ke=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article"]],standalone:false,decls:15,vars:0,consts:[[1,"po-row"],["p-height","380","p-title","Latest Article",1,"po-md-6"],[1,"article-card"],["p-variant","rectangle","p-height","150px","p-aria-label","Carregando artigo"],["p-variant","text"],["p-variant","text","p-width","90%"],[1,"article-author"],["p-variant","circle","p-size","sm"],[1,"author-details"],["p-variant","text","p-width","100px","p-size","sm"],["p-variant","text","p-width","80px","p-size","sm"],["p-variant","text","p-width","75%"],["p-variant","text","p-width","80px"]],template:function(l,a){l&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"div",2),Ul(3,"po-skeleton",3)(4,"po-skeleton",4)(5,"po-skeleton",5),wl(6,"div",6),Ul(7,"po-skeleton",7),wl(8,"div",8),Ul(9,"po-skeleton",9)(10,"po-skeleton",10),ng()(),Ul(11,"po-skeleton",4)(12,"po-skeleton",4)(13,"po-skeleton",11)(14,"po-skeleton",12),ng()()());},dependencies:[IR,nF],styles:[".article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var Ge=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Skeleton - Article"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-skeleton-article/sample-po-skeleton-article.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-skeleton-article/sample-po-skeleton-article.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-skeleton-article/sample-po-skeleton-article.component.css"),ng(),wl(25,"pre",11),Ux(26,`.article-card {
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
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-skeleton-article"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ke],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-doc"]],standalone:false,decls:733,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoSkeletonAnimation"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoSkeletonSize"],["pan","",1,"docs-api-property-type","PoSkeletonType"],["pan","",1,"docs-api-property-type","PoSkeletonVariant"]],template:function(l,a){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoSkeletonModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-skeleton."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoSkeletonComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-skeleton"),ng(),Ux(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),ng(),wl(18,"p"),Ux(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),ng(),wl(20,"h4"),Ux(21,"Tokens customiz\xE1veis"),ng(),wl(22,"p"),Ux(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(24,"blockquote")(25,"p"),Ux(26,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(27,"a",6),Ux(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(29,"."),ng()(),wl(30,"table")(31,"thead")(32,"tr")(33,"th"),Ux(34,"Propriedade"),ng(),wl(35,"th"),Ux(36,"Descri\xE7\xE3o"),ng(),wl(37,"th"),Ux(38,"Valor Padr\xE3o"),ng()()(),wl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),Ux(43,"Cores"),ng()(),Ul(44,"td")(45,"td"),ng(),wl(46,"tr")(47,"td")(48,"code"),Ux(49,"--color"),ng()(),wl(50,"td"),Ux(51,"Cor de fundo do skeleton (tipo normal)"),ng(),wl(52,"td")(53,"code"),Ux(54,"var(--color-neutral-light-20)"),ng()()(),wl(55,"tr")(56,"td")(57,"code"),Ux(58,"--color-primary"),ng()(),wl(59,"td"),Ux(60,"Cor de fundo do skeleton (tipo primary)"),ng(),wl(61,"td")(62,"code"),Ux(63,"var(--color-neutral-mid-40)"),ng()()(),wl(64,"tr")(65,"td")(66,"code"),Ux(67,"--color-content"),ng()(),wl(68,"td"),Ux(69,"Cor de fundo do skeleton (tipo content)"),ng(),wl(70,"td")(71,"code"),Ux(72,"var(--color-neutral-light-00)"),ng()()(),wl(73,"tr")(74,"td")(75,"code"),Ux(76,"--shimmer-highlight"),ng()(),wl(77,"td"),Ux(78,"Cor de destaque do shimmer (tipo normal)"),ng(),wl(79,"td")(80,"code"),Ux(81,"var(--color-neutral-light-30)"),ng()()(),wl(82,"tr")(83,"td")(84,"code"),Ux(85,"--shimmer-highlight-primary"),ng()(),wl(86,"td"),Ux(87,"Cor de destaque do shimmer (tipo primary)"),ng(),wl(88,"td")(89,"code"),Ux(90,"var(--color-neutral-light-20)"),ng()()(),wl(91,"tr")(92,"td")(93,"code"),Ux(94,"--shimmer-highlight-content"),ng()(),wl(95,"td"),Ux(96,"Cor de destaque do shimmer (tipo content)"),ng(),wl(97,"td")(98,"code"),Ux(99,"var(--color-neutral-light-05)"),ng()()(),wl(100,"tr")(101,"td")(102,"strong"),Ux(103,"Espa\xE7amento"),ng()(),Ul(104,"td")(105,"td"),ng(),wl(106,"tr")(107,"td")(108,"code"),Ux(109,"--margin-bottom"),ng()(),wl(110,"td"),Ux(111,"Margem inferior do skeleton"),ng(),wl(112,"td")(113,"code"),Ux(114,"var(--spacing-xs)"),ng()()(),wl(115,"tr")(116,"td")(117,"strong"),Ux(118,"Bordas"),ng()(),Ul(119,"td")(120,"td"),ng(),wl(121,"tr")(122,"td")(123,"code"),Ux(124,"--border-radius"),ng()(),wl(125,"td"),Ux(126,"Raio da borda do skeleton"),ng(),wl(127,"td")(128,"code"),Ux(129,"var(--border-radius-md)"),ng()()(),wl(130,"tr")(131,"td")(132,"code"),Ux(133,"--border-radius-text"),ng()(),wl(134,"td"),Ux(135,"Raio da borda para a variante text"),ng(),wl(136,"td")(137,"code"),Ux(138,"var(--border-radius-md)"),ng()()(),wl(139,"tr")(140,"td")(141,"code"),Ux(142,"--border-radius-primary"),ng()(),wl(143,"td"),Ux(144,"Raio da borda do skeleton (tipo primary)"),ng(),wl(145,"td")(146,"code"),Ux(147,"var(--border-radius-md)"),ng()()(),wl(148,"tr")(149,"td")(150,"code"),Ux(151,"--border-radius-content"),ng()(),wl(152,"td"),Ux(153,"Raio da borda do skeleton (tipo content)"),ng(),wl(154,"td")(155,"code"),Ux(156,"var(--border-radius-lg)"),ng()()(),wl(157,"tr")(158,"td")(159,"strong"),Ux(160,"Transi\xE7\xF5es"),ng()(),Ul(161,"td")(162,"td"),ng(),wl(163,"tr")(164,"td")(165,"code"),Ux(166,"--transition-property"),ng()(),wl(167,"td"),Ux(168,"Propriedade CSS da transi\xE7\xE3o"),ng(),wl(169,"td")(170,"code"),Ux(171,"all"),ng()()(),wl(172,"tr")(173,"td")(174,"code"),Ux(175,"--transition-duration"),ng()(),wl(176,"td"),Ux(177,"Dura\xE7\xE3o da transi\xE7\xE3o de cor"),ng(),wl(178,"td")(179,"code"),Ux(180,"var(--duration-moderate)"),ng()()(),wl(181,"tr")(182,"td")(183,"code"),Ux(184,"--transition-timing"),ng()(),wl(185,"td"),Ux(186,"Fun\xE7\xE3o de temporiza\xE7\xE3o da transi\xE7\xE3o/anima\xE7\xE3o"),ng(),wl(187,"td")(188,"code"),Ux(189,"var(--timing-continuous)"),ng()()(),wl(190,"tr")(191,"td")(192,"strong"),Ux(193,"Anima\xE7\xF5es"),ng()(),Ul(194,"td")(195,"td"),ng(),wl(196,"tr")(197,"td")(198,"code"),Ux(199,"--animation-duration-pulse"),ng()(),wl(200,"td"),Ux(201,"Dura\xE7\xE3o da anima\xE7\xE3o de pulsa\xE7\xE3o"),ng(),wl(202,"td")(203,"code"),Ux(204,"var(--duration-very-slow)"),ng()()(),wl(205,"tr")(206,"td")(207,"code"),Ux(208,"--animation-duration-shimmer"),ng()(),wl(209,"td"),Ux(210,"Dura\xE7\xE3o da anima\xE7\xE3o de brilho deslizante"),ng(),wl(211,"td")(212,"code"),Ux(213,"var(--duration-ultra-slow)"),ng()()()()()(),wl(214,"div",7)(215,"h4",8),Ux(216,"Seletor"),ng(),wl(217,"pre",9),Ux(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),ng()(),wl(219,"h4",10),Ux(220,"Propriedades"),ng(),wl(221,"table",11)(222,"tr",12)(223,"th",13),Ux(224,"Nome"),ng(),wl(225,"th",13),Ux(226,"Tipo"),ng(),wl(227,"th",13),Ux(228,"Padr\xE3o"),ng(),wl(229,"th",13),Ux(230,"Descri\xE7\xE3o"),ng()(),wl(231,"tr",14)(232,"td",15)(233,"div",16)(234,"span",17),Ux(235," p-animation"),Ul(236,"br"),ng()()(),wl(237,"td",18)(238,"code",19),Ux(239,"PoSkeletonAnimation"),ng()(),wl(240,"td",20)(241,"p")(242,"code"),Ux(243,"shimmer"),ng()()(),wl(244,"td",21)(245,"em")(246,"strong"),Ux(247,"(opcional)"),ng()(),wl(248,"p"),Ux(249,"Define o tipo de anima\xE7\xE3o do skeleton."),ng(),wl(250,"p"),Ux(251,"Valores v\xE1lidos:"),ng(),wl(252,"ul")(253,"li")(254,"code"),Ux(255,"none"),ng(),Ux(256,": Sem anima\xE7\xE3o"),ng(),wl(257,"li")(258,"code"),Ux(259,"pulse"),ng(),Ux(260,": Anima\xE7\xE3o de pulsa\xE7\xE3o"),ng(),wl(261,"li")(262,"code"),Ux(263,"shimmer"),ng(),Ux(264,": Anima\xE7\xE3o de brilho deslizante"),ng()()()(),wl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),Ux(269," p-aria-label"),Ul(270,"br"),ng()()(),wl(271,"td",18)(272,"code",22),Ux(273,"string"),ng()(),wl(274,"td",20),Ux(275,"-"),ng(),wl(276,"td",21)(277,"em")(278,"strong"),Ux(279,"(opcional)"),ng()(),wl(280,"p"),Ux(281,"Define a descri\xE7\xE3o acess\xEDvel do conte\xFAdo que est\xE1 sendo carregado."),ng(),wl(282,"p"),Ux(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),ng(),wl(284,"p")(285,"strong"),Ux(286,"Quando usar:"),ng()(),wl(287,"ul")(288,"li"),Ux(289,"Use em "),wl(290,"strong"),Ux(291,"skeletons \xFAnicos"),ng(),Ux(292," ou no "),wl(293,"strong"),Ux(294,"primeiro skeleton de um grupo"),ng(),Ux(295," com descri\xE7\xE3o contextual"),ng(),wl(296,"li"),Ux(297,"Evite usar em m\xFAltiplos skeletons dentro da mesma \xE1rea sem contexto, para n\xE3o causar repeti\xE7\xE3o excessiva"),ng()(),wl(298,"p")(299,"strong"),Ux(300,"Exemplos de uso:"),ng()(),wl(301,"pre")(302,"code",23),Ux(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),ng()(),wl(304,"blockquote")(305,"p")(306,"strong"),Ux(307,"Boas pr\xE1ticas de acessibilidade:"),ng()(),wl(308,"ul")(309,"li"),Ux(310,"Forne\xE7a contexto espec\xEDfico na label para que os usu\xE1rios entendam o que est\xE1 carregando"),ng()()(),wl(311,"blockquote")(312,"ul")(313,"li"),Ux(314,"Em casos complexos, considere usar um \xFAnico "),wl(315,"code"),Ux(316,'<div role="status">'),ng(),Ux(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),ng()()()()(),wl(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),Ux(322," p-border-radius"),Ul(323,"br"),ng()()(),wl(324,"td",18)(325,"code",22),Ux(326,"string"),ng()(),wl(327,"td",20),Ux(328,"-"),ng(),wl(329,"td",21)(330,"em")(331,"strong"),Ux(332,"(opcional)"),ng()(),wl(333,"p"),Ux(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ng(),wl(335,"p"),Ux(336,"Esta propriedade sobrescreve o border-radius padr\xE3o de cada variante."),ng()()(),wl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),Ux(341," p-height"),Ul(342,"br"),ng()()(),wl(343,"td",18)(344,"code",22),Ux(345,"string"),ng()(),wl(346,"td",20),Ux(347,"-"),ng(),wl(348,"td",21)(349,"em")(350,"strong"),Ux(351,"(opcional)"),ng()(),wl(352,"p"),Ux(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ng(),wl(354,"p"),Ux(355,"Quando definido, sobrescreve a altura padr\xE3o da variante."),ng()()(),wl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),Ux(360," p-size"),Ul(361,"br"),ng()()(),wl(362,"td",18)(363,"code",24),Ux(364,"PoSkeletonSize"),ng()(),wl(365,"td",20)(366,"p")(367,"code"),Ux(368,"md"),ng()()(),wl(369,"td",21)(370,"em")(371,"strong"),Ux(372,"(opcional)"),ng()(),wl(373,"p"),Ux(374,"Define o tamanho do skeleton para as variantes pr\xE9-definidas ("),wl(375,"code"),Ux(376,"rectangle"),ng(),Ux(377,", "),wl(378,"code"),Ux(379,"square"),ng(),Ux(380,", "),wl(381,"code"),Ux(382,"circle"),ng(),Ux(383,")."),ng(),wl(384,"p"),Ux(385,"Valores v\xE1lidos:"),ng(),wl(386,"ul")(387,"li")(388,"code"),Ux(389,"xs"),ng(),Ux(390,": Extra pequeno (24px para square/circle, 72px x 24px para rectangle)"),ng(),wl(391,"li")(392,"code"),Ux(393,"sm"),ng(),Ux(394,": Pequeno (32px para square/circle, 96px x 32px para rectangle)"),ng(),wl(395,"li")(396,"code"),Ux(397,"md"),ng(),Ux(398,": M\xE9dio (48px para square/circle, 144px x 48px para rectangle)"),ng(),wl(399,"li")(400,"code"),Ux(401,"lg"),ng(),Ux(402,": Grande (64px para square/circle, 192px x 64px para rectangle)"),ng(),wl(403,"li")(404,"code"),Ux(405,"xl"),ng(),Ux(406,": Extra grande (96px para square/circle, 288px x 96px para rectangle)"),ng(),wl(407,"li")(408,"code"),Ux(409,"2xl"),ng(),Ux(410,": Extra extra grande (144px para square/circle, 432px x 144px para rectangle)"),ng()(),wl(411,"p"),Ux(412,"Esta propriedade \xE9 ignorada quando "),wl(413,"code"),Ux(414,"p-width"),ng(),Ux(415," ou "),wl(416,"code"),Ux(417,"p-height"),ng(),Ux(418," s\xE3o definidos explicitamente."),ng()()(),wl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Ux(423," p-type"),Ul(424,"br"),ng()()(),wl(425,"td",18)(426,"code",25),Ux(427,"PoSkeletonType"),ng()(),wl(428,"td",20)(429,"p")(430,"code"),Ux(431,"normal"),ng()()(),wl(432,"td",21)(433,"em")(434,"strong"),Ux(435,"(opcional)"),ng()(),wl(436,"p"),Ux(437,"Define o tipo visual do skeleton, alterando sua cor de fundo."),ng(),wl(438,"p"),Ux(439,"Valores v\xE1lidos:"),ng(),wl(440,"ul")(441,"li")(442,"code"),Ux(443,"normal"),ng(),Ux(444,": Cor neutra clara (padr\xE3o)"),ng(),wl(445,"li")(446,"code"),Ux(447,"primary"),ng(),Ux(448,": Cor neutra m\xE9dia"),ng(),wl(449,"li")(450,"code"),Ux(451,"content"),ng(),Ux(452,": Fundo branco"),ng()()()(),wl(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),Ux(457," p-variant"),Ul(458,"br"),ng()()(),wl(459,"td",18)(460,"code",26),Ux(461,"PoSkeletonVariant"),ng()(),wl(462,"td",20)(463,"p")(464,"code"),Ux(465,"text"),ng()()(),wl(466,"td",21)(467,"em")(468,"strong"),Ux(469,"(opcional)"),ng()(),wl(470,"p"),Ux(471,"Define a variante visual do skeleton."),ng(),wl(472,"p"),Ux(473,"Valores v\xE1lidos:"),ng(),wl(474,"ul")(475,"li")(476,"code"),Ux(477,"text"),ng(),Ux(478,": Simula uma linha de texto (altura padr\xE3o: 1em)"),ng(),wl(479,"li")(480,"code"),Ux(481,"rectangle"),ng(),Ux(482,": Forma retangular (propor\xE7\xE3o 3:1 por padr\xE3o)"),ng(),wl(483,"li")(484,"code"),Ux(485,"square"),ng(),Ux(486,": Forma quadrada (largura e altura iguais)"),ng(),wl(487,"li")(488,"code"),Ux(489,"circle"),ng(),Ux(490,": Forma circular (largura e altura iguais)"),ng()()()(),wl(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),Ux(495," p-width"),Ul(496,"br"),ng()()(),wl(497,"td",18)(498,"code",22),Ux(499,"string"),ng()(),wl(500,"td",20)(501,"p")(502,"code"),Ux(503,"100%"),ng(),Ux(504," para variante "),wl(505,"code"),Ux(506,"text"),ng(),Ux(507,", tamanho baseado em "),wl(508,"code"),Ux(509,"p-size"),ng(),Ux(510," para outras variantes"),ng()(),wl(511,"td",21)(512,"em")(513,"strong"),Ux(514,"(opcional)"),ng()(),wl(515,"p"),Ux(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),ng(),wl(517,"p"),Ux(518,"Quando definido, sobrescreve a largura padr\xE3o da variante."),ng()()()(),wl(519,"h3"),Ux(520,"Enums"),ng(),wl(521,"h4",4)(522,"code",5),Ux(523,"PoSkeletonAnimation"),ng()(),wl(524,"div",2)(525,"p"),Ux(526,"Define os tipos de anima\xE7\xE3o do componente "),wl(527,"code"),Ux(528,"po-skeleton"),ng(),Ux(529,"."),ng()(),wl(530,"h4",10),Ux(531,"Propriedades"),ng(),wl(532,"table",11)(533,"tr",12)(534,"th",13),Ux(535,"Nome"),ng(),wl(536,"th",13),Ux(537,"Descri\xE7\xE3o"),ng()(),wl(538,"tr",14)(539,"td",15)(540,"div",16)(541,"span",17),Ux(542," none"),Ul(543,"br"),ng()()(),wl(544,"td",21)(545,"p"),Ux(546,"Sem anima\xE7\xE3o"),ng()()(),wl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Ux(551," pulse"),Ul(552,"br"),ng()()(),wl(553,"td",21)(554,"p"),Ux(555,"Anima\xE7\xE3o de pulsa\xE7\xE3o"),ng()()(),wl(556,"tr",14)(557,"td",15)(558,"div",16)(559,"span",17),Ux(560," shimmer"),Ul(561,"br"),ng()()(),wl(562,"td",21)(563,"p"),Ux(564,"Anima\xE7\xE3o de brilho deslizante"),ng()()()(),wl(565,"h4",4)(566,"code",5),Ux(567,"PoSkeletonSize"),ng()(),wl(568,"div",2)(569,"p"),Ux(570,"Define os tamanhos dispon\xEDveis para o componente "),wl(571,"code"),Ux(572,"po-skeleton"),ng(),Ux(573,"."),ng()(),wl(574,"h4",10),Ux(575,"Propriedades"),ng(),wl(576,"table",11)(577,"tr",12)(578,"th",13),Ux(579,"Nome"),ng(),wl(580,"th",13),Ux(581,"Descri\xE7\xE3o"),ng()(),wl(582,"tr",14)(583,"td",15)(584,"div",16)(585,"span",17),Ux(586," xs"),Ul(587,"br"),ng()()(),wl(588,"td",21)(589,"p"),Ux(590,"Tamanho extra pequeno"),ng()()(),wl(591,"tr",14)(592,"td",15)(593,"div",16)(594,"span",17),Ux(595," sm"),Ul(596,"br"),ng()()(),wl(597,"td",21)(598,"p"),Ux(599,"Tamanho pequeno"),ng()()(),wl(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),Ux(604," md"),Ul(605,"br"),ng()()(),wl(606,"td",21)(607,"p"),Ux(608,"Tamanho m\xE9dio"),ng()()(),wl(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),Ux(613," lg"),Ul(614,"br"),ng()()(),wl(615,"td",21)(616,"p"),Ux(617,"Tamanho grande"),ng()()(),wl(618,"tr",14)(619,"td",15)(620,"div",16)(621,"span",17),Ux(622," xl"),Ul(623,"br"),ng()()(),wl(624,"td",21)(625,"p"),Ux(626,"Tamanho extra grande"),ng()()(),wl(627,"tr",14)(628,"td",15)(629,"div",16)(630,"span",17),Ux(631," xxl"),Ul(632,"br"),ng()()(),wl(633,"td",21)(634,"p"),Ux(635,"Tamanho extra extra grande"),ng()()()(),wl(636,"h4",4)(637,"code",5),Ux(638,"PoSkeletonType"),ng()(),wl(639,"div",2)(640,"p"),Ux(641,"Define os tipos visuais dispon\xEDveis para o componente "),wl(642,"code"),Ux(643,"po-skeleton"),ng(),Ux(644,"."),ng()(),wl(645,"h4",10),Ux(646,"Propriedades"),ng(),wl(647,"table",11)(648,"tr",12)(649,"th",13),Ux(650,"Nome"),ng(),wl(651,"th",13),Ux(652,"Descri\xE7\xE3o"),ng()(),wl(653,"tr",14)(654,"td",15)(655,"div",16)(656,"span",17),Ux(657," normal"),Ul(658,"br"),ng()()(),wl(659,"td",21)(660,"p"),Ux(661,"Tipo padr\xE3o com cor neutra clara"),ng()()(),wl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),Ux(666," primary"),Ul(667,"br"),ng()()(),wl(668,"td",21)(669,"p"),Ux(670,"Tipo prim\xE1rio com cor neutra m\xE9dia"),ng()()(),wl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),Ux(675," content"),Ul(676,"br"),ng()()(),wl(677,"td",21)(678,"p"),Ux(679,"Tipo de conte\xFAdo com fundo branco"),ng()()()(),wl(680,"h4",4)(681,"code",5),Ux(682,"PoSkeletonVariant"),ng()(),wl(683,"div",2)(684,"p"),Ux(685,"Define as variantes visuais do componente "),wl(686,"code"),Ux(687,"po-skeleton"),ng(),Ux(688,"."),ng()(),wl(689,"h4",10),Ux(690,"Propriedades"),ng(),wl(691,"table",11)(692,"tr",12)(693,"th",13),Ux(694,"Nome"),ng(),wl(695,"th",13),Ux(696,"Descri\xE7\xE3o"),ng()(),wl(697,"tr",14)(698,"td",15)(699,"div",16)(700,"span",17),Ux(701," text"),Ul(702,"br"),ng()()(),wl(703,"td",21)(704,"p"),Ux(705,"Variante para simular texto"),ng()()(),wl(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),Ux(710," rectangle"),Ul(711,"br"),ng()()(),wl(712,"td",21)(713,"p"),Ux(714,"Variante retangular (largura maior que altura)"),ng()()(),wl(715,"tr",14)(716,"td",15)(717,"div",16)(718,"span",17),Ux(719," square"),Ul(720,"br"),ng()()(),wl(721,"td",21)(722,"p"),Ux(723,"Variante quadrada (largura igual \xE0 altura)"),ng()()(),wl(724,"tr",14)(725,"td",15)(726,"div",16)(727,"span",17),Ux(728," circle"),Ul(729,"br"),ng()()(),wl(730,"td",21)(731,"p"),Ux(732,"Variante circular"),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var Ee=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Skeleton",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return a.changeTab("doc")}),Ul(3,"sample-po-skeleton-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return a.changeTab("web")}),Ul(5,"sample-po-skeleton-basic-view")(6,"sample-po-skeleton-labs-view")(7,"sample-po-skeleton-credit-card-view")(8,"sample-po-skeleton-widget-card-view")(9,"sample-po-skeleton-user-profile-view")(10,"sample-po-skeleton-social-post-view")(11,"sample-po-skeleton-article-view"),ng()()()),l&2&&(YE("p-actions",a.actions),Pp(2),YE("p-active",a.activeTab==="doc"),Pp(2),YE("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[D3,Vd,Rd,re,de,ce,he,Se,ve,Ce,be],encapsulation:2})}return o})();var Ke=[{path:"",component:Ee}],fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[vL.forChild(Ke),vL]})}return o})();var Ht=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[u5,fe]})}return o})();export{Ht as DocPoSkeletonModule};