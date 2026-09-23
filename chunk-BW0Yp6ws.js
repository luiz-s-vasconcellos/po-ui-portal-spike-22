import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ut as cb,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,cr as K,da as uo,ea as p0,ga as w,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var ie=(()=>{class i{poButton;static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-basic`]],viewQuery:function(a,n){if(a&1&&Zl(Zt,7,K),a&2){let m;lo(m=uo())&&(n.poButton=m.first)}},standalone:!1,decls:3,vars:1,consts:[[3,`p-target`],[`p-label`,`Open Popover`]],template:function(a,n){a&1&&(Ml(0,`po-popover`,0),mN(1,` PO Popover `),lg(),ql(2,`po-button`,1)),a&2&&cw(`p-target`,n.poButton)},dependencies:[Zt,cb],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Popover Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-popover-basic/sample-po-popover-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-popover-basic/sample-po-popover-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-basic',
  templateUrl: './sample-po-popover-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverBasicComponent {
  @ViewChild(PoButtonComponent, { read: ElementRef, static: true }) poButton: PoButtonComponent;
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-popover-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ge,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ie],encapsulation:2,changeDetection:1})}return i})();var be=[`buttonClick`];var he=[`buttonHover`];var re=(()=>{class i{buttonClickRef;buttonHoverRef;content=``;position=``;properties=[];title=``;offset=8;positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];offsetOptions=[{label:`0`,value:0},{label:`4`,value:4},{label:`8 (default)`,value:8},{label:`16`,value:16},{label:`32`,value:32}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];restore(){this.content=``,this.position=void 0,this.properties=[],this.title=``,this.offset=8}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-labs`]],viewQuery:function(a,n){if(a&1&&Zl(be,7,K)(he,7,K),a&2){let m;lo(m=uo())&&(n.buttonClickRef=m.first),lo(m=uo())&&(n.buttonHoverRef=m.first)}},standalone:!1,decls:24,vars:21,consts:[[`buttonClick`,``],[`buttonHover`,``],[`f`,`ngForm`],[`p-trigger`,`click`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[`p-trigger`,`hover`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[1,`po-row`],[1,`po-offset-xl-1`,`po-offset-lg-1`,`po-md-6`,`po-lg-3`],[`p-label`,`Popover with click`],[`p-label`,`Popover with hover`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`offset`,`p-label`,`Offset (px)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let m=Vx();Ml(0,`po-popover`,3),mN(1),lg(),Ml(2,`po-popover`,4),mN(3),lg(),Ml(4,`div`,5)(5,`div`,6),ql(6,`po-button`,7,0),lg(),Ml(8,`div`,6),ql(9,`po-button`,8,1),lg()(),ql(11,`po-divider`),Ml(12,`form`,null,2)(14,`div`,5)(15,`po-input`,9),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.title,l)||(n.title=l),Jy(l)}),lg(),f0(),Ml(16,`po-input`,10),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.content,l)||(n.content=l),Jy(l)}),lg(),f0(),lg(),Ml(17,`div`,5)(18,`po-radio-group`,11),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.position,l)||(n.position=l),Jy(l)}),lg(),f0(),Ml(19,`po-checkbox-group`,12),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.properties,l)||(n.properties=l),Jy(l)}),lg(),f0(),lg(),Ml(20,`div`,5)(21,`po-radio-group`,13),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.offset,l)||(n.offset=l),Jy(l)}),lg(),f0(),lg(),Ml(22,`div`,5)(23,`po-button`,14),ht(`p-click`,function(){return n.restore()}),lg()()()}a&2&&(cw(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonClickRef)(`p-title`,n.title),Up(),gg(` `,n.content,`
`),Up(),cw(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonHoverRef)(`p-title`,n.title),Up(),gg(` `,n.content,`
`),Up(12),Tw(`ngModel`,n.title),p0(),Up(),Tw(`ngModel`,n.content),p0(),Up(2),Tw(`ngModel`,n.position),cw(`p-options`,n.positionOptions),p0(),Up(),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0(),Up(2),Tw(`ngModel`,n.offset),cw(`p-columns`,5)(`p-options`,n.offsetOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,cb],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i});var le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Popover Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-popover-labs/sample-po-popover-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-popover
  p-trigger="click"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-offset]="offset"
  [p-target]="buttonClickRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<po-popover
  p-trigger="hover"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-offset]="offset"
  [p-target]="buttonHoverRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<div class="po-row">
  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonClick p-label="Popover with click"> </po-button>
  </div>

  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonHover p-label="Popover with hover"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-input class="po-md-6" name="content" [(ngModel)]="content" p-clean p-label="Content"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-8"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-12"
      name="offset"
      [(ngModel)]="offset"
      [p-columns]="5"
      p-label="Offset (px)"
      [p-options]="offsetOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-popover-labs/sample-po-popover-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-labs',
  templateUrl: './sample-po-popover-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverLabsComponent {
  @ViewChild('buttonClick', { read: ElementRef, static: true }) buttonClickRef: ElementRef;
  @ViewChild('buttonHover', { read: ElementRef, static: true }) buttonHoverRef: ElementRef;

  content: string = '';
  position: string = '';
  properties: Array<string> = [];
  title: string = '';
  offset: number = 8;

  public readonly positionOptions: Array<PoRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly offsetOptions: Array<PoRadioGroupOption> = [
    { label: '0', value: 0 },
    { label: '4', value: 4 },
    { label: '8 (default)', value: 8 },
    { label: '16', value: 16 },
    { label: '32', value: 32 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  restore() {
    this.content = '';
    this.position = undefined;
    this.properties = [];
    this.title = '';
    this.offset = 8;
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-popover-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return i})();var xe=[`cardname`];var we=[`cardcode`];var ye=[`carddate`];var me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-credit-card`]],viewQuery:function(a,n){if(a&1&&Zl(xe,7,K)(we,7,K)(ye,7,K),a&2){let m;lo(m=uo())&&(n.cardnameref=m.first),lo(m=uo())&&(n.cardcoderef=m.first),lo(m=uo())&&(n.carddateref=m.first)}},standalone:!1,decls:28,vars:10,consts:[[`f`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`modalCreditCard`,``],[`p-trigger`,`hover`,3,`p-target`],[`src`,`assets/graphics/card-code.jpg`],[`src`,`assets/graphics/card-date.jpg`],[`src`,`assets/graphics/card-owner.jpg`],[1,`po-row`],[`name`,`inputCardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Confirm`,1,`po-md-2`,3,`click`,`p-disabled`],[`p-title`,`Your Credit Card`]],template:function(a,n){if(a&1){let m=Vx();Ml(0,`po-popover`,5),ql(1,`img`,6),lg(),Ml(2,`po-popover`,5),ql(3,`img`,7),lg(),Ml(4,`po-popover`,5),ql(5,`img`,8),lg(),Ml(6,`form`,null,0)(8,`div`,9)(9,`po-input`,10,1),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.inputCardName,l)||(n.inputCardName=l),Jy(l)}),lg(),f0(),Ml(11,`po-input`,11,2),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.inputCardCode,l)||(n.inputCardCode=l),Jy(l)}),lg(),f0(),Ml(13,`po-input`,12,3),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.inputCardValid,l)||(n.inputCardValid=l),Jy(l)}),lg(),f0(),lg(),Ml(15,`div`,9)(16,`po-button`,13),ht(`click`,function(){Qy(m);return Jy(Yx(18).open())}),lg()()(),Ml(17,`po-modal`,14,4)(19,`div`,9)(20,`div`),mN(21),lg()(),Ml(22,`div`,9)(23,`div`),mN(24),lg()(),Ml(25,`div`,9)(26,`div`),mN(27),lg()()()}if(a&2){let m=Yx(7);cw(`p-target`,n.cardcoderef),Up(2),cw(`p-target`,n.carddateref),Up(2),cw(`p-target`,n.cardnameref),Up(5),Tw(`ngModel`,n.inputCardName),p0(),Up(2),Tw(`ngModel`,n.inputCardCode),p0(),Up(2),Tw(`ngModel`,n.inputCardValid),p0(),Up(3),cw(`p-disabled`,m.form.invalid),Up(5),gg(`Card Code: `,n.inputCardCode),Up(3),gg(`Card Expiration: `,n.inputCardValid),Up(3),gg(`Card Owner: `,n.inputCardName)}},dependencies:[IY,wY,CY,Vk,kk,Zt,lU,vr,cb],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Popover - Credit Card`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
  <img src="assets/graphics/card-code.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="carddateref">
  <img src="assets/graphics/card-date.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="cardnameref">
  <img src="assets/graphics/card-owner.jpg" />
</po-popover>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      #cardname
      class="po-lg-6"
      name="inputCardName"
      [(ngModel)]="inputCardName"
      p-clean
      p-label="Name"
      p-required
    >
    </po-input>

    <po-input
      #cardcode
      class="po-lg-4 po-md-9"
      name="inputCardCode"
      [(ngModel)]="inputCardCode"
      p-clean
      p-label="Code"
      p-mask="9999 9999 9999 9999"
      p-mask-format-model
      p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
      p-required
    >
    </po-input>

    <po-input
      #carddate
      class="po-lg-2 po-md-3"
      name="inputCardValid"
      [(ngModel)]="inputCardValid"
      p-clean
      p-label="Expiration Date"
      p-mask="12/99"
      p-mask-format-model
      p-pattern="\\d{2}\\/\\d{2}"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-2" p-label="Confirm" [p-disabled]="f.form.invalid" (click)="modalCreditCard.open()">
    </po-button>
  </div>
</form>

<po-modal #modalCreditCard p-title="Your Credit Card">
  <div class="po-row">
    <div>Card Code: { { inputCardCode }}</div>
  </div>
  <div class="po-row">
    <div>Card Expiration: { { inputCardValid }}</div>
  </div>
  <div class="po-row">
    <div>Card Owner: { { inputCardName }}</div>
  </div>
</po-modal>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-popover-credit-card',
  templateUrl: './sample-po-popover-credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverCreditCardComponent {
  @ViewChild('cardname', { read: ElementRef, static: true }) cardnameref: ElementRef;
  @ViewChild('cardcode', { read: ElementRef, static: true }) cardcoderef: ElementRef;
  @ViewChild('carddate', { read: ElementRef, static: true }) carddateref: ElementRef;

  public inputCardName: string;
  public inputCardCode: string;
  public inputCardValid: string;
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-popover-credit-card`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-doc`]],standalone:!1,decls:363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-tooltip?view=doc`],[`href`,`https://po-ui.io/documentation/po-modal?view=doc`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`ElementRef`],[`pan`,``,1,`docs-api-property-type`,`HTMLElement`]],template:function(a,n){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPopoverModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-popover.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoPopoverComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-popover`),lg(),mN(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),lg(),Ml(18,`p`),mN(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Ml(20,`a`,6)(21,`strong`),mN(22,`po-tooltip`),lg()(),mN(23,`.`),lg(),Ml(24,`p`),mN(25,`Para conteúdos maiores recomenda-se o uso do `),Ml(26,`a`,7)(27,`strong`),mN(28,`po-modal`),lg()(),mN(29,`.`),lg(),Ml(30,`p`),mN(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Ml(32,`code`),mN(33,`right`),lg(),mN(34,`, `),Ml(35,`code`),mN(36,`right-top`),lg(),mN(37,`, `),Ml(38,`code`),mN(39,`right-bottom`),lg(),mN(40,`, `),Ml(41,`code`),mN(42,`top`),lg(),mN(43,`, `),Ml(44,`code`),mN(45,`top-left`),lg(),mN(46,`, `),Ml(47,`code`),mN(48,`top-right`),lg(),mN(49,`,
`),Ml(50,`code`),mN(51,`left`),lg(),mN(52,`, `),Ml(53,`code`),mN(54,`left-top`),lg(),mN(55,`, `),Ml(56,`code`),mN(57,`left-bottom`),lg(),mN(58,`, `),Ml(59,`code`),mN(60,`bottom`),lg(),mN(61,`, `),Ml(62,`code`),mN(63,`bottom-left`),lg(),mN(64,` e `),Ml(65,`code`),mN(66,`bottom-right`),lg(),mN(67,`.`),lg(),Ml(68,`p`),mN(69,`Também é possível escolher entre os dois eventos que podem abrir o `),Ml(70,`em`),mN(71,`popover`),lg(),mN(72,`.
Os eventos permitidos s\xE3o: `),Ml(73,`code`),mN(74,`click`),lg(),mN(75,` e `),Ml(76,`code`),mN(77,`hover`),lg(),mN(78,`. `),lg()(),Ml(79,`div`,8)(80,`h4`,9),mN(81,`Seletor`),lg(),Ml(82,`pre`,10),mN(83,`<po-popover
    p-append-in-body="boolean"
    (p-close)="EventEmitter"
    p-custom-classes="string"
    p-hide-arrow="boolean"
    p-offset="number"
    (p-open)="EventEmitter"
    p-position="string"
    p-target="ElementRef | HTMLElement"
    p-title="string"
    p-trigger="string" >
</po-popover>
`),lg()(),Ml(84,`h4`,11),mN(85,`Propriedades`),lg(),Ml(86,`table`,12)(87,`tr`,13)(88,`th`,14),mN(89,`Nome`),lg(),Ml(90,`th`,14),mN(91,`Tipo`),lg(),Ml(92,`th`,14),mN(93,`Padrão`),lg(),Ml(94,`th`,14),mN(95,`Descrição`),lg()(),Ml(96,`tr`,15)(97,`td`,16)(98,`div`,17)(99,`span`,18),mN(100,` p-append-in-body`),ql(101,`br`),lg()()(),Ml(102,`td`,19)(103,`code`,20),mN(104,`boolean`),lg()(),Ml(105,`td`,21)(106,`p`)(107,`code`),mN(108,`false`),lg()()(),Ml(109,`td`,22)(110,`em`)(111,`strong`),mN(112,`(opcional)`),lg()(),Ml(113,`p`),mN(114,`Define que o popover será inserido no body da página em vez do elemento definido em `),Ml(115,`code`),mN(116,`p-target`),lg(),mN(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),lg()()(),Ml(118,`tr`,15)(119,`td`,16)(120,`div`,23)(121,`span`,24),mN(122,` (p-close)`),ql(123,`br`),lg()()(),Ml(124,`td`,19)(125,`code`,25),mN(126,`EventEmitter`),lg()(),Ml(127,`td`,21),mN(128,`-`),lg(),Ml(129,`td`,22)(130,`p`),mN(131,`Evento disparado ao fechar o popover.`),lg()()(),Ml(132,`tr`,15)(133,`td`,16)(134,`div`,17)(135,`span`,18),mN(136,` p-custom-classes`),ql(137,`br`),lg()()(),Ml(138,`td`,19)(139,`code`,26),mN(140,`string`),lg()(),Ml(141,`td`,21),mN(142,`-`),lg(),Ml(143,`td`,22)(144,`em`)(145,`strong`),mN(146,`(opcional)`),lg()(),Ml(147,`p`),mN(148,`Permite a inclusão de classes CSS customizadas ao componente.`),lg(),Ml(149,`p`),mN(150,`Exemplo: `),Ml(151,`code`),mN(152,`p-custom-classes="minha-classe-1 minha-classe-2"`),lg(),mN(153,`.`),lg()()(),Ml(154,`tr`,15)(155,`td`,16)(156,`div`,17)(157,`span`,18),mN(158,` p-hide-arrow`),ql(159,`br`),lg()()(),Ml(160,`td`,19)(161,`code`,20),mN(162,`boolean`),lg()(),Ml(163,`td`,21)(164,`p`)(165,`code`),mN(166,`false`),lg()()(),Ml(167,`td`,22)(168,`em`)(169,`strong`),mN(170,`(opcional)`),lg()(),Ml(171,`p`),mN(172,`Desabilita a seta do componente `),Ml(173,`em`),mN(174,`popover`),lg(),mN(175,`.`),lg()()(),Ml(176,`tr`,15)(177,`td`,16)(178,`div`,17)(179,`span`,18),mN(180,` p-offset`),ql(181,`br`),lg()()(),Ml(182,`td`,19)(183,`code`,27),mN(184,`number`),lg()(),Ml(185,`td`,21)(186,`p`)(187,`code`),mN(188,`8`),lg()()(),Ml(189,`td`,22)(190,`em`)(191,`strong`),mN(192,`(opcional)`),lg()(),Ml(193,`p`),mN(194,`Define o espaçamento (em pixels) entre o componente alvo (`),Ml(195,`code`),mN(196,`p-target`),lg(),mN(197,`) e o `),Ml(198,`code`),mN(199,`po-popover`),lg(),mN(200,`.
\xDAtil para componentes com targets pequenos (como \xEDcones) onde o espa\xE7amento padr\xE3o \xE9
proporcionalmente muito grande e cria desalinhamento visual.`),lg()()(),Ml(201,`tr`,15)(202,`td`,16)(203,`div`,23)(204,`span`,24),mN(205,` (p-open)`),ql(206,`br`),lg()()(),Ml(207,`td`,19)(208,`code`,25),mN(209,`EventEmitter`),lg()(),Ml(210,`td`,21),mN(211,`-`),lg(),Ml(212,`td`,22)(213,`p`),mN(214,`Evento disparado ao abrir o popover.`),lg()()(),Ml(215,`tr`,15)(216,`td`,16)(217,`div`,17)(218,`span`,18),mN(219,` p-position`),ql(220,`br`),lg()()(),Ml(221,`td`,19)(222,`code`,26),mN(223,`string`),lg()(),Ml(224,`td`,21)(225,`p`),mN(226,`right`),lg()(),Ml(227,`td`,22)(228,`em`)(229,`strong`),mN(230,`(opcional)`),lg()(),Ml(231,`p`),mN(232,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),lg(),Ml(233,`p`),mN(234,`Posições válidas:`),lg(),Ml(235,`ul`)(236,`li`)(237,`code`),mN(238,`right`),lg(),mN(239,`: Posiciona o po-popover no lado direito do componente alvo.`),lg(),Ml(240,`li`)(241,`code`),mN(242,`right-bottom`),lg(),mN(243,`: Posiciona o po-popover no lado direito inferior do componente alvo.`),lg(),Ml(244,`li`)(245,`code`),mN(246,`right-top`),lg(),mN(247,`: Posiciona o po-popover no lado direito superior do componente alvo.`),lg(),Ml(248,`li`)(249,`code`),mN(250,`bottom`),lg(),mN(251,`: Posiciona o po-popover abaixo do componente alvo.`),lg(),Ml(252,`li`)(253,`code`),mN(254,`bottom-left`),lg(),mN(255,`: Posiciona o po-popover abaixo e à esquerda do componente alvo.`),lg(),Ml(256,`li`)(257,`code`),mN(258,`bottom-right`),lg(),mN(259,`: Posiciona o po-popover abaixo e à direita do componente alvo.`),lg(),Ml(260,`li`)(261,`code`),mN(262,`left`),lg(),mN(263,`: Posiciona o po-popover no lado esquerdo do componente alvo.`),lg(),Ml(264,`li`)(265,`code`),mN(266,`left-top`),lg(),mN(267,`: Posiciona o po-popover no lado esquerdo superior do componente alvo.`),lg(),Ml(268,`li`)(269,`code`),mN(270,`left-bottom`),lg(),mN(271,`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.`),lg(),Ml(272,`li`)(273,`code`),mN(274,`top`),lg(),mN(275,`: Posiciona o po-popover acima do componente alvo.`),lg(),Ml(276,`li`)(277,`code`),mN(278,`top-right`),lg(),mN(279,`: Posiciona o po-popover acima e à direita do componente alvo.`),lg(),Ml(280,`li`)(281,`code`),mN(282,`top-left`),lg(),mN(283,`: Posiciona o po-popover acima e à esquerda do componente alvo.`),lg()()()(),Ml(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),mN(288,` p-target`),ql(289,`br`),lg()()(),Ml(290,`td`,19)(291,`code`,28),mN(292,`ElementRef `),lg(),Ml(293,`code`,29),mN(294,` HTMLElement`),lg()(),Ml(295,`td`,21),mN(296,`-`),lg(),Ml(297,`td`,22)(298,`p`),mN(299,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),lg(),Ml(300,`pre`)(301,`code`),mN(302,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),lg()(),Ml(303,`p`),mN(304,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),lg(),Ml(305,`pre`)(306,`code`),mN(307,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),lg()(),Ml(308,`p`),mN(309,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),lg(),Ml(310,`pre`)(311,`code`),mN(312,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),lg()()()(),Ml(313,`tr`,15)(314,`td`,16)(315,`div`,17)(316,`span`,18),mN(317,` p-title`),ql(318,`br`),lg()()(),Ml(319,`td`,19)(320,`code`,26),mN(321,`string`),lg()(),Ml(322,`td`,21),mN(323,`-`),lg(),Ml(324,`td`,22)(325,`em`)(326,`strong`),mN(327,`(opcional)`),lg()(),Ml(328,`p`),mN(329,`Título do popover.`),lg()()(),Ml(330,`tr`,15)(331,`td`,16)(332,`div`,17)(333,`span`,18),mN(334,` p-trigger`),ql(335,`br`),lg()()(),Ml(336,`td`,19)(337,`code`,26),mN(338,`string`),lg()(),Ml(339,`td`,21)(340,`p`),mN(341,`click`),lg()(),Ml(342,`td`,22)(343,`em`)(344,`strong`),mN(345,`(opcional)`),lg()(),Ml(346,`p`),mN(347,`Define o evento que abrirá o po-popover.`),lg(),Ml(348,`p`),mN(349,`Valores válidos:`),lg(),Ml(350,`ul`)(351,`li`)(352,`code`),mN(353,`click`),lg(),mN(354,`: Abre ao clicar no componente alvo.`),lg(),Ml(355,`li`)(356,`code`),mN(357,`hover`),lg(),mN(358,`: Abre ao passar o mouse sobre o componente alvo.`),lg(),Ml(359,`li`)(360,`code`),mN(361,`function`),lg(),mN(362,`: Abre através de funções públicas do componente.`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var ke=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Popover`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-popover-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-popover-basic-view`)(6,`sample-po-popover-labs-view`)(7,`sample-po-popover-credit-card-view`),lg()()()),a&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,le,de,se],encapsulation:2,changeDetection:1})}return i})()}];var ue=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[NL.forChild(ke),NL]})}return i})();var ut=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,ue]})}return i})();export{ut as DocPoPopoverModule};