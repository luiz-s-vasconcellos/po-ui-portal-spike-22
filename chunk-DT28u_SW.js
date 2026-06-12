import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dC as MNe,Q as Cl,R as Hl,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,ct as Hhe,aJ as nme,cd as sme,aM as gw,aN as Z0,aq as ix,aO as pw,aP as X0,at as ox,b9 as ONe,a3 as SNe,aB as gx,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var oe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row"],[1,"po-md-12"]],template:function(l,a){l&1&&(Cl(0,"div",0),Hl(1,"po-skeleton",1)(2,"po-skeleton",1)(3,"po-skeleton",1),og());},dependencies:[MNe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Skeleton Basic"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-skeleton-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ee,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return o})();function we(o,R){if(o&1){let p=gx();Cl(0,"po-select",12),gw("ngModelChange",function(a){Jy(p);let s=Ex();return Zx(s.size,a)||(s.size=a),e_(a)}),og(),Z0();}if(o&2){let p=Ex();pw("ngModel",p.size),ZE("p-options",p.sizeOptions),X0();}}function ye(o,R){if(o&1){let p=gx();Hl(0,"po-divider",13),Cl(1,"po-number",14),gw("ngModelChange",function(a){Jy(p);let s=Ex();return Zx(s.circleSize,a)||(s.circleSize=a),e_(a)}),dt("p-change",function(){Jy(p);let a=Ex();return e_(a.onCircleSizeChange())}),og(),Z0(),Cl(2,"po-select",15),gw("ngModelChange",function(a){Jy(p);let s=Ex();return Zx(s.circleSizeUnit,a)||(s.circleSizeUnit=a),e_(a)}),dt("p-change",function(){Jy(p);let a=Ex();return e_(a.onCircleSizeUnitChange())}),og(),Z0(),Hl(3,"po-info",16);}if(o&2){let p=Ex();Lp(),pw("ngModel",p.circleSize),X0(),Lp(),pw("ngModel",p.circleSizeUnit),ZE("p-options",p.unitOptions),X0(),Lp(),ZE("p-value",p.circleSize?p.circleSize+p.circleSizeUnit:"Using default size from Size select");}}function Pe(o,R){if(o&1){let p=gx();Hl(0,"po-divider",17),Cl(1,"po-input",18),gw("ngModelChange",function(a){Jy(p);let s=Ex();return Zx(s.width,a)||(s.width=a),e_(a)}),og(),Z0(),Cl(2,"po-input",19),gw("ngModelChange",function(a){Jy(p);let s=Ex();return Zx(s.height,a)||(s.height=a),e_(a)}),og(),Z0(),Cl(3,"po-input",20),gw("ngModelChange",function(a){Jy(p);let s=Ex();return Zx(s.borderRadius,a)||(s.borderRadius=a),e_(a)}),og(),Z0();}if(o&2){let p=Ex();Lp(),pw("ngModel",p.width),X0(),Lp(),pw("ngModel",p.height),X0(),Lp(),pw("ngModel",p.borderRadius),X0();}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit="px";animationOptions=[{label:"Shimmer",value:"shimmer"},{label:"Pulse",value:"pulse"},{label:"None",value:"none"}];sizeOptions=[{label:"Extra Small",value:"xs"},{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra Large",value:"xl"},{label:"Extra Extra Large",value:"2xl"}];typeOptions=[{label:"Normal",value:"normal"},{label:"Primary",value:"primary"},{label:"Content",value:"content"}];variantOptions=[{label:"Circle",value:"circle"},{label:"Text",value:"text"},{label:"Rectangle",value:"rectangle"},{label:"Square",value:"square"}];unitOptions=[{label:"Pixels (px)",value:"px"},{label:"REM",value:"rem"},{label:"EM",value:"em"},{label:"Percentage (%)",value:"%"}];ngOnInit(){this.restore();}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null;}onCircleSizeChange(){if(this.circleSize&&this.variant==="circle"){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius="50%";}else this.width=void 0,this.height=void 0,this.borderRadius=void 0;}onCircleSizeUnitChange(){this.onCircleSizeChange();}restore(){this.variant="circle",this.type="normal",this.animation="shimmer",this.size="md",this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel="Carregando",this.circleSize=null,this.circleSizeUnit="px";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs"]],standalone:false,decls:17,vars:19,consts:[[1,"po-row"],[1,"po-md-12",3,"p-variant","p-type","p-animation","p-size","p-width","p-height","p-border-radius","p-aria-label"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Animation",1,"po-md-12"],["name","animation","p-label","Animation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Shapes",1,"po-md-12"],["name","variant","p-label","Variant",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModel","p-options"],["p-label","Accessibility",1,"po-md-12"],["name","ariaLabel","p-label","Aria Label","p-help","Texto descritivo para leitores de tela (acessibilidade)",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Circle Dynamic Size (optional)",1,"po-md-12"],["name","circleSize","p-clean","","p-label","Circle Size","p-help","Define o tamanho do c\xEDrculo","p-min","1",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","circleSizeUnit","p-label","Unit",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Applied Size",1,"po-md-6",3,"p-value"],["p-label","Custom (optional)",1,"po-md-12"],["name","width","p-clean","","p-label","Width","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderRadius","p-clean","","p-label","Border Radius","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,a){l&1&&(Cl(0,"div",0),Hl(1,"po-skeleton",1),og(),Hl(2,"hr")(3,"po-info",2)(4,"hr"),Cl(5,"form",0),Hl(6,"po-divider",3),Cl(7,"po-select",4),gw("ngModelChange",function(x){return Zx(a.animation,x)||(a.animation=x),x}),og(),Z0(),Cl(8,"po-select",5),gw("ngModelChange",function(x){return Zx(a.type,x)||(a.type=x),x}),og(),Z0(),Hl(9,"po-divider",6),Cl(10,"po-select",7),gw("ngModelChange",function(x){return Zx(a.variant,x)||(a.variant=x),x}),dt("p-change",function(){return a.onVariantChange()}),og(),Z0(),ix(11,we,1,2,"po-select",8),Hl(12,"po-divider",9),Cl(13,"po-input",10),gw("ngModelChange",function(x){return Zx(a.ariaLabel,x)||(a.ariaLabel=x),x}),og(),Z0(),ix(14,ye,4,4),ix(15,Pe,4,3),Cl(16,"po-button",11),dt("p-click",function(){return a.restore()}),og()()),l&2&&(Lp(),ZE("p-variant",a.variant)("p-type",a.type)("p-animation",a.animation)("p-size",a.size)("p-width",a.width||void 0)("p-height",a.height||void 0)("p-border-radius",a.borderRadius||void 0)("p-aria-label",a.ariaLabel),Lp(2),ZE("p-value",a.modelValue),Lp(4),pw("ngModel",a.animation),ZE("p-options",a.animationOptions),X0(),Lp(),pw("ngModel",a.type),ZE("p-options",a.typeOptions),X0(),Lp(2),pw("ngModel",a.variant),ZE("p-options",a.variantOptions),X0(),Lp(),ox(a.variant!=="text"?11:-1),Lp(2),pw("ngModel",a.ariaLabel),X0(),Lp(),ox(a.variant==="circle"?14:-1),Lp(),ox(a.variant==="text"?15:-1));},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Hhe,nme,sme,MNe],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Skeleton Labs"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-skeleton-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card"]],standalone:false,decls:47,vars:0,consts:[[1,"po-row"],["p-height","340","p-title","Payment Method",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card"],[1,"po-md-2","card-chip"],["p-variant","rectangle","p-width","40px","p-height","24px"],[1,"po-row","card-number"],[1,"po-sm-3","po-md-3"],["p-variant","text"],[1,"po-row","card-details"],[1,"po-sm-7","po-md-7","card-holder"],["p-variant","text","p-size","sm","p-width","40px"],["p-variant","text","p-width","120px"],[1,"po-sm-5","po-md-5","card-expiry"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","50px"],[1,"card-brand"],["p-variant","circle","p-size","sm"],["p-height","340","p-title","Payment Method - Content",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card-gray"],["p-variant","rectangle","p-width","40px","p-height","24px","p-type","content"],["p-variant","text","p-type","content"],["p-variant","text","p-size","sm","p-width","40px","p-type","content"],["p-variant","text","p-width","120px","p-type","content"],["p-variant","text","p-width","60px","p-size","sm","p-type","content"],["p-variant","text","p-width","50px","p-type","content"],["p-variant","circle","p-size","sm","p-type","content"]],template:function(l,a){l&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",0)(4,"div",3),Hl(5,"po-skeleton",4),og()(),Cl(6,"div",5)(7,"div",6),Hl(8,"po-skeleton",7),og(),Cl(9,"div",6),Hl(10,"po-skeleton",7),og(),Cl(11,"div",6),Hl(12,"po-skeleton",7),og(),Cl(13,"div",6),Hl(14,"po-skeleton",7),og()(),Cl(15,"div",8)(16,"div",9),Hl(17,"po-skeleton",10)(18,"po-skeleton",11),og(),Cl(19,"div",12),Hl(20,"po-skeleton",13)(21,"po-skeleton",14),og()(),Cl(22,"div",15),Hl(23,"po-skeleton",16),og()()(),Cl(24,"po-widget",17)(25,"div",18)(26,"div",0)(27,"div",3),Hl(28,"po-skeleton",19),og()(),Cl(29,"div",5)(30,"div",6),Hl(31,"po-skeleton",20),og(),Cl(32,"div",6),Hl(33,"po-skeleton",20),og(),Cl(34,"div",6),Hl(35,"po-skeleton",20),og(),Cl(36,"div",6),Hl(37,"po-skeleton",20),og()(),Cl(38,"div",8)(39,"div",9),Hl(40,"po-skeleton",21)(41,"po-skeleton",22),og(),Cl(42,"div",12),Hl(43,"po-skeleton",23)(44,"po-skeleton",24),og()(),Cl(45,"div",15),Hl(46,"po-skeleton",25),og()()()());},dependencies:[ONe,MNe],styles:[".credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}"],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Skeleton - Credit Card"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css"),og(),Cl(25,"pre",11),qx(26,`.credit-card {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-skeleton-credit-card"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return o})();var de=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card"]],standalone:false,decls:17,vars:0,consts:[[1,"po-row"],[1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"widget-card"],[1,"po-row","widget-header"],[1,"po-sm-7","po-md-7"],["p-variant","text","p-height","32px"],[1,"po-sm-3","po-md-3"],["p-variant","text","p-width","80px","p-height","32px"],[1,"po-sm-2","po-md-2","widget-icon"],["p-variant","square","p-size","sm"],[1,"po-row","widget-content"],[1,"widget-spacer"],[1,"po-row","widget-footer"],[1,"po-sm-12","po-md-12","footer-button"],["p-variant","rectangle","p-size","md"]],template:function(l,a){l&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3)(4,"div",4),Hl(5,"po-skeleton",5),og(),Cl(6,"div",6),Hl(7,"po-skeleton",7),og(),Cl(8,"div",8),Hl(9,"po-skeleton",9),og()(),Cl(10,"div",10)(11,"div",4),Hl(12,"po-skeleton",5),og()(),Hl(13,"div",11),Cl(14,"div",12)(15,"div",13),Hl(16,"po-skeleton",14),og()()()()());},dependencies:[ONe,MNe],styles:[".widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Skeleton - Widget Card"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css"),og(),Cl(25,"pre",11),qx(26,`.widget-card {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-skeleton-widget-card"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Oe,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile"]],standalone:false,decls:20,vars:0,consts:[[1,"po-row"],["p-title","User Profile",1,"po-md-6"],[1,"profile-card"],[1,"profile-picture"],["p-variant","circle","p-size","xl","p-aria-label","Carregando perfil do usu\xE1rio"],["p-variant","text","p-width","150px"],["p-variant","text","p-width","200px"],["p-variant","text"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],[1,"profile-stats"],[1,"stat"],["p-variant","text","p-width","40px"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","70px","p-size","sm"],["p-variant","text","p-width","65px","p-size","sm"]],template:function(l,a){l&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Hl(4,"po-skeleton",4),og(),Hl(5,"po-skeleton",5)(6,"po-skeleton",6)(7,"po-skeleton",7)(8,"po-skeleton",8)(9,"po-skeleton",9),Cl(10,"div",10)(11,"div",11),Hl(12,"po-skeleton",12)(13,"po-skeleton",13),og(),Cl(14,"div",11),Hl(15,"po-skeleton",12)(16,"po-skeleton",14),og(),Cl(17,"div",11),Hl(18,"po-skeleton",12)(19,"po-skeleton",15),og()()()()());},dependencies:[ONe,MNe],styles:[".profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Skeleton - User Profile"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css"),og(),Cl(25,"pre",11),qx(26,`.profile-card {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-skeleton-user-profile"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,qe,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return o})();var he=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post"]],standalone:false,decls:35,vars:0,consts:[[1,"po-row"],["p-height","550",1,"po-md-6"],[1,"post-card"],[1,"post-header"],["p-variant","circle","p-size","sm","p-aria-label","Carregando post de rede social"],[1,"post-header-text"],["p-variant","text","p-size","sm"],["p-variant","rectangle","p-height","300px"],[1,"post-actions"],["p-variant","rectangle","p-size","sm","p-width","30px","p-height","30px"],["p-variant","text","p-width","120px"],["p-variant","text"],["p-variant","text","p-width","85%"],["p-variant","text","p-width","60%"],["p-variant","circle","p-size","sm"],["p-variant","rectangle","p-height","250px"],["p-variant","text","p-width","140px"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],["p-variant","text","p-width","65%"],["p-variant","text","p-width","50%"]],template:function(l,a){l&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Hl(4,"po-skeleton",4),Cl(5,"div",5),Hl(6,"po-skeleton",6)(7,"po-skeleton",6),og()(),Hl(8,"po-skeleton",7),Cl(9,"div",8),Hl(10,"po-skeleton",9)(11,"po-skeleton",9)(12,"po-skeleton",9),og(),Hl(13,"po-skeleton",10)(14,"po-skeleton",11)(15,"po-skeleton",12)(16,"po-skeleton",13),og()(),Cl(17,"po-widget",1)(18,"div",2)(19,"div",3),Hl(20,"po-skeleton",14),Cl(21,"div",5),Hl(22,"po-skeleton",6)(23,"po-skeleton",6),og()(),Hl(24,"po-skeleton",15),Cl(25,"div",8),Hl(26,"po-skeleton",9)(27,"po-skeleton",9)(28,"po-skeleton",9),og(),Hl(29,"po-skeleton",16)(30,"po-skeleton",11)(31,"po-skeleton",17)(32,"po-skeleton",18)(33,"po-skeleton",19)(34,"po-skeleton",20),og()()());},dependencies:[ONe,MNe],styles:[".post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Skeleton - Social Post"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css"),og(),Cl(25,"pre",11),qx(26,`.post-card {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-skeleton-social-post"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Fe,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article"]],standalone:false,decls:15,vars:0,consts:[[1,"po-row"],["p-height","380","p-title","Latest Article",1,"po-md-6"],[1,"article-card"],["p-variant","rectangle","p-height","150px","p-aria-label","Carregando artigo"],["p-variant","text"],["p-variant","text","p-width","90%"],[1,"article-author"],["p-variant","circle","p-size","sm"],[1,"author-details"],["p-variant","text","p-width","100px","p-size","sm"],["p-variant","text","p-width","80px","p-size","sm"],["p-variant","text","p-width","75%"],["p-variant","text","p-width","80px"]],template:function(l,a){l&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"div",2),Hl(3,"po-skeleton",3)(4,"po-skeleton",4)(5,"po-skeleton",5),Cl(6,"div",6),Hl(7,"po-skeleton",7),Cl(8,"div",8),Hl(9,"po-skeleton",9)(10,"po-skeleton",10),og()(),Hl(11,"po-skeleton",4)(12,"po-skeleton",4)(13,"po-skeleton",11)(14,"po-skeleton",12),og()()());},dependencies:[ONe,MNe],styles:[".article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Skeleton - Article"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-skeleton-article/sample-po-skeleton-article.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-skeleton-article/sample-po-skeleton-article.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-skeleton-article/sample-po-skeleton-article.component.css"),og(),Cl(25,"pre",11),qx(26,`.article-card {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-skeleton-article"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,He,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return o})();var ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-doc"]],standalone:false,decls:733,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoSkeletonAnimation"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoSkeletonSize"],["pan","",1,"docs-api-property-type","PoSkeletonType"],["pan","",1,"docs-api-property-type","PoSkeletonVariant"]],template:function(l,a){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoSkeletonModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-skeleton."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoSkeletonComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-skeleton"),og(),qx(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),og(),Cl(18,"p"),qx(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),og(),Cl(20,"h4"),qx(21,"Tokens customiz\xE1veis"),og(),Cl(22,"p"),qx(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(24,"blockquote")(25,"p"),qx(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(27,"a",6),qx(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(29,"."),og()(),Cl(30,"table")(31,"thead")(32,"tr")(33,"th"),qx(34,"Propriedade"),og(),Cl(35,"th"),qx(36,"Descri\xE7\xE3o"),og(),Cl(37,"th"),qx(38,"Valor Padr\xE3o"),og()()(),Cl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),qx(43,"Cores"),og()(),Hl(44,"td")(45,"td"),og(),Cl(46,"tr")(47,"td")(48,"code"),qx(49,"--color"),og()(),Cl(50,"td"),qx(51,"Cor de fundo do skeleton (tipo normal)"),og(),Cl(52,"td")(53,"code"),qx(54,"var(--color-neutral-light-20)"),og()()(),Cl(55,"tr")(56,"td")(57,"code"),qx(58,"--color-primary"),og()(),Cl(59,"td"),qx(60,"Cor de fundo do skeleton (tipo primary)"),og(),Cl(61,"td")(62,"code"),qx(63,"var(--color-neutral-mid-40)"),og()()(),Cl(64,"tr")(65,"td")(66,"code"),qx(67,"--color-content"),og()(),Cl(68,"td"),qx(69,"Cor de fundo do skeleton (tipo content)"),og(),Cl(70,"td")(71,"code"),qx(72,"var(--color-neutral-light-00)"),og()()(),Cl(73,"tr")(74,"td")(75,"code"),qx(76,"--shimmer-highlight"),og()(),Cl(77,"td"),qx(78,"Cor de destaque do shimmer (tipo normal)"),og(),Cl(79,"td")(80,"code"),qx(81,"var(--color-neutral-light-30)"),og()()(),Cl(82,"tr")(83,"td")(84,"code"),qx(85,"--shimmer-highlight-primary"),og()(),Cl(86,"td"),qx(87,"Cor de destaque do shimmer (tipo primary)"),og(),Cl(88,"td")(89,"code"),qx(90,"var(--color-neutral-light-20)"),og()()(),Cl(91,"tr")(92,"td")(93,"code"),qx(94,"--shimmer-highlight-content"),og()(),Cl(95,"td"),qx(96,"Cor de destaque do shimmer (tipo content)"),og(),Cl(97,"td")(98,"code"),qx(99,"var(--color-neutral-light-05)"),og()()(),Cl(100,"tr")(101,"td")(102,"strong"),qx(103,"Espa\xE7amento"),og()(),Hl(104,"td")(105,"td"),og(),Cl(106,"tr")(107,"td")(108,"code"),qx(109,"--margin-bottom"),og()(),Cl(110,"td"),qx(111,"Margem inferior do skeleton"),og(),Cl(112,"td")(113,"code"),qx(114,"var(--spacing-xs)"),og()()(),Cl(115,"tr")(116,"td")(117,"strong"),qx(118,"Bordas"),og()(),Hl(119,"td")(120,"td"),og(),Cl(121,"tr")(122,"td")(123,"code"),qx(124,"--border-radius"),og()(),Cl(125,"td"),qx(126,"Raio da borda do skeleton"),og(),Cl(127,"td")(128,"code"),qx(129,"var(--border-radius-md)"),og()()(),Cl(130,"tr")(131,"td")(132,"code"),qx(133,"--border-radius-text"),og()(),Cl(134,"td"),qx(135,"Raio da borda para a variante text"),og(),Cl(136,"td")(137,"code"),qx(138,"var(--border-radius-md)"),og()()(),Cl(139,"tr")(140,"td")(141,"code"),qx(142,"--border-radius-primary"),og()(),Cl(143,"td"),qx(144,"Raio da borda do skeleton (tipo primary)"),og(),Cl(145,"td")(146,"code"),qx(147,"var(--border-radius-md)"),og()()(),Cl(148,"tr")(149,"td")(150,"code"),qx(151,"--border-radius-content"),og()(),Cl(152,"td"),qx(153,"Raio da borda do skeleton (tipo content)"),og(),Cl(154,"td")(155,"code"),qx(156,"var(--border-radius-lg)"),og()()(),Cl(157,"tr")(158,"td")(159,"strong"),qx(160,"Transi\xE7\xF5es"),og()(),Hl(161,"td")(162,"td"),og(),Cl(163,"tr")(164,"td")(165,"code"),qx(166,"--transition-property"),og()(),Cl(167,"td"),qx(168,"Propriedade CSS da transi\xE7\xE3o"),og(),Cl(169,"td")(170,"code"),qx(171,"all"),og()()(),Cl(172,"tr")(173,"td")(174,"code"),qx(175,"--transition-duration"),og()(),Cl(176,"td"),qx(177,"Dura\xE7\xE3o da transi\xE7\xE3o de cor"),og(),Cl(178,"td")(179,"code"),qx(180,"var(--duration-moderate)"),og()()(),Cl(181,"tr")(182,"td")(183,"code"),qx(184,"--transition-timing"),og()(),Cl(185,"td"),qx(186,"Fun\xE7\xE3o de temporiza\xE7\xE3o da transi\xE7\xE3o/anima\xE7\xE3o"),og(),Cl(187,"td")(188,"code"),qx(189,"var(--timing-continuous)"),og()()(),Cl(190,"tr")(191,"td")(192,"strong"),qx(193,"Anima\xE7\xF5es"),og()(),Hl(194,"td")(195,"td"),og(),Cl(196,"tr")(197,"td")(198,"code"),qx(199,"--animation-duration-pulse"),og()(),Cl(200,"td"),qx(201,"Dura\xE7\xE3o da anima\xE7\xE3o de pulsa\xE7\xE3o"),og(),Cl(202,"td")(203,"code"),qx(204,"var(--duration-very-slow)"),og()()(),Cl(205,"tr")(206,"td")(207,"code"),qx(208,"--animation-duration-shimmer"),og()(),Cl(209,"td"),qx(210,"Dura\xE7\xE3o da anima\xE7\xE3o de brilho deslizante"),og(),Cl(211,"td")(212,"code"),qx(213,"var(--duration-ultra-slow)"),og()()()()()(),Cl(214,"div",7)(215,"h4",8),qx(216,"Seletor"),og(),Cl(217,"pre",9),qx(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),og()(),Cl(219,"h4",10),qx(220,"Propriedades"),og(),Cl(221,"table",11)(222,"tr",12)(223,"th",13),qx(224,"Nome"),og(),Cl(225,"th",13),qx(226,"Tipo"),og(),Cl(227,"th",13),qx(228,"Padr\xE3o"),og(),Cl(229,"th",13),qx(230,"Descri\xE7\xE3o"),og()(),Cl(231,"tr",14)(232,"td",15)(233,"div",16)(234,"span",17),qx(235," p-animation"),Hl(236,"br"),og()()(),Cl(237,"td",18)(238,"code",19),qx(239,"PoSkeletonAnimation"),og()(),Cl(240,"td",20)(241,"p")(242,"code"),qx(243,"shimmer"),og()()(),Cl(244,"td",21)(245,"em")(246,"strong"),qx(247,"(opcional)"),og()(),Cl(248,"p"),qx(249,"Define o tipo de anima\xE7\xE3o do skeleton."),og(),Cl(250,"p"),qx(251,"Valores v\xE1lidos:"),og(),Cl(252,"ul")(253,"li")(254,"code"),qx(255,"none"),og(),qx(256,": Sem anima\xE7\xE3o"),og(),Cl(257,"li")(258,"code"),qx(259,"pulse"),og(),qx(260,": Anima\xE7\xE3o de pulsa\xE7\xE3o"),og(),Cl(261,"li")(262,"code"),qx(263,"shimmer"),og(),qx(264,": Anima\xE7\xE3o de brilho deslizante"),og()()()(),Cl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),qx(269," p-aria-label"),Hl(270,"br"),og()()(),Cl(271,"td",18)(272,"code",22),qx(273,"string"),og()(),Cl(274,"td",20),qx(275,"-"),og(),Cl(276,"td",21)(277,"em")(278,"strong"),qx(279,"(opcional)"),og()(),Cl(280,"p"),qx(281,"Define a descri\xE7\xE3o acess\xEDvel do conte\xFAdo que est\xE1 sendo carregado."),og(),Cl(282,"p"),qx(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),og(),Cl(284,"p")(285,"strong"),qx(286,"Quando usar:"),og()(),Cl(287,"ul")(288,"li"),qx(289,"Use em "),Cl(290,"strong"),qx(291,"skeletons \xFAnicos"),og(),qx(292," ou no "),Cl(293,"strong"),qx(294,"primeiro skeleton de um grupo"),og(),qx(295," com descri\xE7\xE3o contextual"),og(),Cl(296,"li"),qx(297,"Evite usar em m\xFAltiplos skeletons dentro da mesma \xE1rea sem contexto, para n\xE3o causar repeti\xE7\xE3o excessiva"),og()(),Cl(298,"p")(299,"strong"),qx(300,"Exemplos de uso:"),og()(),Cl(301,"pre")(302,"code",23),qx(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),og()(),Cl(304,"blockquote")(305,"p")(306,"strong"),qx(307,"Boas pr\xE1ticas de acessibilidade:"),og()(),Cl(308,"ul")(309,"li"),qx(310,"Forne\xE7a contexto espec\xEDfico na label para que os usu\xE1rios entendam o que est\xE1 carregando"),og()()(),Cl(311,"blockquote")(312,"ul")(313,"li"),qx(314,"Em casos complexos, considere usar um \xFAnico "),Cl(315,"code"),qx(316,'<div role="status">'),og(),qx(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),og()()()()(),Cl(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),qx(322," p-border-radius"),Hl(323,"br"),og()()(),Cl(324,"td",18)(325,"code",22),qx(326,"string"),og()(),Cl(327,"td",20),qx(328,"-"),og(),Cl(329,"td",21)(330,"em")(331,"strong"),qx(332,"(opcional)"),og()(),Cl(333,"p"),qx(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Cl(335,"p"),qx(336,"Esta propriedade sobrescreve o border-radius padr\xE3o de cada variante."),og()()(),Cl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),qx(341," p-height"),Hl(342,"br"),og()()(),Cl(343,"td",18)(344,"code",22),qx(345,"string"),og()(),Cl(346,"td",20),qx(347,"-"),og(),Cl(348,"td",21)(349,"em")(350,"strong"),qx(351,"(opcional)"),og()(),Cl(352,"p"),qx(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Cl(354,"p"),qx(355,"Quando definido, sobrescreve a altura padr\xE3o da variante."),og()()(),Cl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),qx(360," p-size"),Hl(361,"br"),og()()(),Cl(362,"td",18)(363,"code",24),qx(364,"PoSkeletonSize"),og()(),Cl(365,"td",20)(366,"p")(367,"code"),qx(368,"md"),og()()(),Cl(369,"td",21)(370,"em")(371,"strong"),qx(372,"(opcional)"),og()(),Cl(373,"p"),qx(374,"Define o tamanho do skeleton para as variantes pr\xE9-definidas ("),Cl(375,"code"),qx(376,"rectangle"),og(),qx(377,", "),Cl(378,"code"),qx(379,"square"),og(),qx(380,", "),Cl(381,"code"),qx(382,"circle"),og(),qx(383,")."),og(),Cl(384,"p"),qx(385,"Valores v\xE1lidos:"),og(),Cl(386,"ul")(387,"li")(388,"code"),qx(389,"xs"),og(),qx(390,": Extra pequeno (24px para square/circle, 72px x 24px para rectangle)"),og(),Cl(391,"li")(392,"code"),qx(393,"sm"),og(),qx(394,": Pequeno (32px para square/circle, 96px x 32px para rectangle)"),og(),Cl(395,"li")(396,"code"),qx(397,"md"),og(),qx(398,": M\xE9dio (48px para square/circle, 144px x 48px para rectangle)"),og(),Cl(399,"li")(400,"code"),qx(401,"lg"),og(),qx(402,": Grande (64px para square/circle, 192px x 64px para rectangle)"),og(),Cl(403,"li")(404,"code"),qx(405,"xl"),og(),qx(406,": Extra grande (96px para square/circle, 288px x 96px para rectangle)"),og(),Cl(407,"li")(408,"code"),qx(409,"2xl"),og(),qx(410,": Extra extra grande (144px para square/circle, 432px x 144px para rectangle)"),og()(),Cl(411,"p"),qx(412,"Esta propriedade \xE9 ignorada quando "),Cl(413,"code"),qx(414,"p-width"),og(),qx(415," ou "),Cl(416,"code"),qx(417,"p-height"),og(),qx(418," s\xE3o definidos explicitamente."),og()()(),Cl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),qx(423," p-type"),Hl(424,"br"),og()()(),Cl(425,"td",18)(426,"code",25),qx(427,"PoSkeletonType"),og()(),Cl(428,"td",20)(429,"p")(430,"code"),qx(431,"normal"),og()()(),Cl(432,"td",21)(433,"em")(434,"strong"),qx(435,"(opcional)"),og()(),Cl(436,"p"),qx(437,"Define o tipo visual do skeleton, alterando sua cor de fundo."),og(),Cl(438,"p"),qx(439,"Valores v\xE1lidos:"),og(),Cl(440,"ul")(441,"li")(442,"code"),qx(443,"normal"),og(),qx(444,": Cor neutra clara (padr\xE3o)"),og(),Cl(445,"li")(446,"code"),qx(447,"primary"),og(),qx(448,": Cor neutra m\xE9dia"),og(),Cl(449,"li")(450,"code"),qx(451,"content"),og(),qx(452,": Fundo branco"),og()()()(),Cl(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),qx(457," p-variant"),Hl(458,"br"),og()()(),Cl(459,"td",18)(460,"code",26),qx(461,"PoSkeletonVariant"),og()(),Cl(462,"td",20)(463,"p")(464,"code"),qx(465,"text"),og()()(),Cl(466,"td",21)(467,"em")(468,"strong"),qx(469,"(opcional)"),og()(),Cl(470,"p"),qx(471,"Define a variante visual do skeleton."),og(),Cl(472,"p"),qx(473,"Valores v\xE1lidos:"),og(),Cl(474,"ul")(475,"li")(476,"code"),qx(477,"text"),og(),qx(478,": Simula uma linha de texto (altura padr\xE3o: 1em)"),og(),Cl(479,"li")(480,"code"),qx(481,"rectangle"),og(),qx(482,": Forma retangular (propor\xE7\xE3o 3:1 por padr\xE3o)"),og(),Cl(483,"li")(484,"code"),qx(485,"square"),og(),qx(486,": Forma quadrada (largura e altura iguais)"),og(),Cl(487,"li")(488,"code"),qx(489,"circle"),og(),qx(490,": Forma circular (largura e altura iguais)"),og()()()(),Cl(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),qx(495," p-width"),Hl(496,"br"),og()()(),Cl(497,"td",18)(498,"code",22),qx(499,"string"),og()(),Cl(500,"td",20)(501,"p")(502,"code"),qx(503,"100%"),og(),qx(504," para variante "),Cl(505,"code"),qx(506,"text"),og(),qx(507,", tamanho baseado em "),Cl(508,"code"),qx(509,"p-size"),og(),qx(510," para outras variantes"),og()(),Cl(511,"td",21)(512,"em")(513,"strong"),qx(514,"(opcional)"),og()(),Cl(515,"p"),qx(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Cl(517,"p"),qx(518,"Quando definido, sobrescreve a largura padr\xE3o da variante."),og()()()(),Cl(519,"h3"),qx(520,"Enums"),og(),Cl(521,"h4",4)(522,"code",5),qx(523,"PoSkeletonAnimation"),og()(),Cl(524,"div",2)(525,"p"),qx(526,"Define os tipos de anima\xE7\xE3o do componente "),Cl(527,"code"),qx(528,"po-skeleton"),og(),qx(529,"."),og()(),Cl(530,"h4",10),qx(531,"Propriedades"),og(),Cl(532,"table",11)(533,"tr",12)(534,"th",13),qx(535,"Nome"),og(),Cl(536,"th",13),qx(537,"Descri\xE7\xE3o"),og()(),Cl(538,"tr",14)(539,"td",15)(540,"div",16)(541,"span",17),qx(542," none"),Hl(543,"br"),og()()(),Cl(544,"td",21)(545,"p"),qx(546,"Sem anima\xE7\xE3o"),og()()(),Cl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),qx(551," pulse"),Hl(552,"br"),og()()(),Cl(553,"td",21)(554,"p"),qx(555,"Anima\xE7\xE3o de pulsa\xE7\xE3o"),og()()(),Cl(556,"tr",14)(557,"td",15)(558,"div",16)(559,"span",17),qx(560," shimmer"),Hl(561,"br"),og()()(),Cl(562,"td",21)(563,"p"),qx(564,"Anima\xE7\xE3o de brilho deslizante"),og()()()(),Cl(565,"h4",4)(566,"code",5),qx(567,"PoSkeletonSize"),og()(),Cl(568,"div",2)(569,"p"),qx(570,"Define os tamanhos dispon\xEDveis para o componente "),Cl(571,"code"),qx(572,"po-skeleton"),og(),qx(573,"."),og()(),Cl(574,"h4",10),qx(575,"Propriedades"),og(),Cl(576,"table",11)(577,"tr",12)(578,"th",13),qx(579,"Nome"),og(),Cl(580,"th",13),qx(581,"Descri\xE7\xE3o"),og()(),Cl(582,"tr",14)(583,"td",15)(584,"div",16)(585,"span",17),qx(586," xs"),Hl(587,"br"),og()()(),Cl(588,"td",21)(589,"p"),qx(590,"Tamanho extra pequeno"),og()()(),Cl(591,"tr",14)(592,"td",15)(593,"div",16)(594,"span",17),qx(595," sm"),Hl(596,"br"),og()()(),Cl(597,"td",21)(598,"p"),qx(599,"Tamanho pequeno"),og()()(),Cl(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),qx(604," md"),Hl(605,"br"),og()()(),Cl(606,"td",21)(607,"p"),qx(608,"Tamanho m\xE9dio"),og()()(),Cl(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),qx(613," lg"),Hl(614,"br"),og()()(),Cl(615,"td",21)(616,"p"),qx(617,"Tamanho grande"),og()()(),Cl(618,"tr",14)(619,"td",15)(620,"div",16)(621,"span",17),qx(622," xl"),Hl(623,"br"),og()()(),Cl(624,"td",21)(625,"p"),qx(626,"Tamanho extra grande"),og()()(),Cl(627,"tr",14)(628,"td",15)(629,"div",16)(630,"span",17),qx(631," xxl"),Hl(632,"br"),og()()(),Cl(633,"td",21)(634,"p"),qx(635,"Tamanho extra extra grande"),og()()()(),Cl(636,"h4",4)(637,"code",5),qx(638,"PoSkeletonType"),og()(),Cl(639,"div",2)(640,"p"),qx(641,"Define os tipos visuais dispon\xEDveis para o componente "),Cl(642,"code"),qx(643,"po-skeleton"),og(),qx(644,"."),og()(),Cl(645,"h4",10),qx(646,"Propriedades"),og(),Cl(647,"table",11)(648,"tr",12)(649,"th",13),qx(650,"Nome"),og(),Cl(651,"th",13),qx(652,"Descri\xE7\xE3o"),og()(),Cl(653,"tr",14)(654,"td",15)(655,"div",16)(656,"span",17),qx(657," normal"),Hl(658,"br"),og()()(),Cl(659,"td",21)(660,"p"),qx(661,"Tipo padr\xE3o com cor neutra clara"),og()()(),Cl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),qx(666," primary"),Hl(667,"br"),og()()(),Cl(668,"td",21)(669,"p"),qx(670,"Tipo prim\xE1rio com cor neutra m\xE9dia"),og()()(),Cl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),qx(675," content"),Hl(676,"br"),og()()(),Cl(677,"td",21)(678,"p"),qx(679,"Tipo de conte\xFAdo com fundo branco"),og()()()(),Cl(680,"h4",4)(681,"code",5),qx(682,"PoSkeletonVariant"),og()(),Cl(683,"div",2)(684,"p"),qx(685,"Define as variantes visuais do componente "),Cl(686,"code"),qx(687,"po-skeleton"),og(),qx(688,"."),og()(),Cl(689,"h4",10),qx(690,"Propriedades"),og(),Cl(691,"table",11)(692,"tr",12)(693,"th",13),qx(694,"Nome"),og(),Cl(695,"th",13),qx(696,"Descri\xE7\xE3o"),og()(),Cl(697,"tr",14)(698,"td",15)(699,"div",16)(700,"span",17),qx(701," text"),Hl(702,"br"),og()()(),Cl(703,"td",21)(704,"p"),qx(705,"Variante para simular texto"),og()()(),Cl(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),qx(710," rectangle"),Hl(711,"br"),og()()(),Cl(712,"td",21)(713,"p"),qx(714,"Variante retangular (largura maior que altura)"),og()()(),Cl(715,"tr",14)(716,"td",15)(717,"div",16)(718,"span",17),qx(719," square"),Hl(720,"br"),og()()(),Cl(721,"td",21)(722,"p"),qx(723,"Variante quadrada (largura igual \xE0 altura)"),og()()(),Cl(724,"tr",14)(725,"td",15)(726,"div",16)(727,"span",17),qx(728," circle"),Hl(729,"br"),og()()(),Cl(730,"td",21)(731,"p"),qx(732,"Variante circular"),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var ke=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Skeleton",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return a.changeTab("doc")}),Hl(3,"sample-po-skeleton-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return a.changeTab("web")}),Hl(5,"sample-po-skeleton-basic-view")(6,"sample-po-skeleton-labs-view")(7,"sample-po-skeleton-credit-card-view")(8,"sample-po-skeleton-widget-card-view")(9,"sample-po-skeleton-user-profile-view")(10,"sample-po-skeleton-social-post-view")(11,"sample-po-skeleton-article-view"),og()()()),l&2&&(ZE("p-actions",a.actions),Lp(2),ZE("p-active",a.activeTab==="doc"),Lp(2),ZE("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2})}return o})();var Ge=[{path:"",component:ke}],Ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[bL.forChild(Ge),bL]})}return o})();var Vt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ca,Ce]})}return o})();export{Vt as DocPoSkeletonModule};