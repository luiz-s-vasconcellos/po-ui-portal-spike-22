import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,cn as ob,ei as Yl,fi as ag,gi as bL,ha as ww,hr as K,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN}from"./main-3EWTGE7T.js";var ie=(()=>{class i{poButton;static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-basic`]],viewQuery:function(a,n){if(a&1&&Yl(Zt,7,K),a&2){let m;lo(m=uo())&&(n.poButton=m.first)}},standalone:!1,decls:3,vars:1,consts:[[3,`p-target`],[`p-label`,`Open Popover`]],template:function(a,n){a&1&&(Tl(0,`po-popover`,0),cN(1,` PO Popover `),ag(),Gl(2,`po-button`,1)),a&2&&nw(`p-target`,n.poButton)},dependencies:[Zt,ob],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Popover Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-popover-basic/sample-po-popover-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-popover-basic/sample-po-popover-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-popover-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ge,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ie],encapsulation:2,changeDetection:1})}return i})();var be=[`buttonClick`];var he=[`buttonHover`];var re=(()=>{class i{buttonClickRef;buttonHoverRef;content=``;position=``;properties=[];title=``;offset=8;positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];offsetOptions=[{label:`0`,value:0},{label:`4`,value:4},{label:`8 (default)`,value:8},{label:`16`,value:16},{label:`32`,value:32}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];restore(){this.content=``,this.position=void 0,this.properties=[],this.title=``,this.offset=8}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-labs`]],viewQuery:function(a,n){if(a&1&&Yl(be,7,K)(he,7,K),a&2){let m;lo(m=uo())&&(n.buttonClickRef=m.first),lo(m=uo())&&(n.buttonHoverRef=m.first)}},standalone:!1,decls:24,vars:21,consts:[[`buttonClick`,``],[`buttonHover`,``],[`f`,`ngForm`],[`p-trigger`,`click`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[`p-trigger`,`hover`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[1,`po-row`],[1,`po-offset-xl-1`,`po-offset-lg-1`,`po-md-6`,`po-lg-3`],[`p-label`,`Popover with click`],[`p-label`,`Popover with hover`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`offset`,`p-label`,`Offset (px)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let m=Ax();Tl(0,`po-popover`,3),cN(1),ag(),Tl(2,`po-popover`,4),cN(3),ag(),Tl(4,`div`,5)(5,`div`,6),Gl(6,`po-button`,7,0),ag(),Tl(8,`div`,6),Gl(9,`po-button`,8,1),ag()(),Gl(11,`po-divider`),Tl(12,`form`,null,2)(14,`div`,5)(15,`po-input`,9),ww(`ngModelChange`,function(l){return Ky(m),uN(n.title,l)||(n.title=l),Xy(l)}),ag(),a0(),Tl(16,`po-input`,10),ww(`ngModelChange`,function(l){return Ky(m),uN(n.content,l)||(n.content=l),Xy(l)}),ag(),a0(),ag(),Tl(17,`div`,5)(18,`po-radio-group`,11),ww(`ngModelChange`,function(l){return Ky(m),uN(n.position,l)||(n.position=l),Xy(l)}),ag(),a0(),Tl(19,`po-checkbox-group`,12),ww(`ngModelChange`,function(l){return Ky(m),uN(n.properties,l)||(n.properties=l),Xy(l)}),ag(),a0(),ag(),Tl(20,`div`,5)(21,`po-radio-group`,13),ww(`ngModelChange`,function(l){return Ky(m),uN(n.offset,l)||(n.offset=l),Xy(l)}),ag(),a0(),ag(),Tl(22,`div`,5)(23,`po-button`,14),ht(`p-click`,function(){return n.restore()}),ag()()()}a&2&&(nw(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonClickRef)(`p-title`,n.title),jp(),hg(` `,n.content,`
`),jp(),nw(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonHoverRef)(`p-title`,n.title),jp(),hg(` `,n.content,`
`),jp(12),Ew(`ngModel`,n.title),l0(),jp(),Ew(`ngModel`,n.content),l0(),jp(2),Ew(`ngModel`,n.position),nw(`p-options`,n.positionOptions),l0(),jp(),Ew(`ngModel`,n.properties),nw(`p-options`,n.propertiesOptions),l0(),jp(2),Ew(`ngModel`,n.offset),nw(`p-columns`,5)(`p-options`,n.offsetOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,ob],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i});var le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Popover Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-popover-labs/sample-po-popover-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-popover
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-popover-labs/sample-po-popover-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-popover-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Se,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return i})();var xe=[`cardname`];var we=[`cardcode`];var ye=[`carddate`];var me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-credit-card`]],viewQuery:function(a,n){if(a&1&&Yl(xe,7,K)(we,7,K)(ye,7,K),a&2){let m;lo(m=uo())&&(n.cardnameref=m.first),lo(m=uo())&&(n.cardcoderef=m.first),lo(m=uo())&&(n.carddateref=m.first)}},standalone:!1,decls:28,vars:10,consts:[[`f`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`modalCreditCard`,``],[`p-trigger`,`hover`,3,`p-target`],[`src`,`assets/graphics/card-code.jpg`],[`src`,`assets/graphics/card-date.jpg`],[`src`,`assets/graphics/card-owner.jpg`],[1,`po-row`],[`name`,`inputCardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Confirm`,1,`po-md-2`,3,`click`,`p-disabled`],[`p-title`,`Your Credit Card`]],template:function(a,n){if(a&1){let m=Ax();Tl(0,`po-popover`,5),Gl(1,`img`,6),ag(),Tl(2,`po-popover`,5),Gl(3,`img`,7),ag(),Tl(4,`po-popover`,5),Gl(5,`img`,8),ag(),Tl(6,`form`,null,0)(8,`div`,9)(9,`po-input`,10,1),ww(`ngModelChange`,function(l){return Ky(m),uN(n.inputCardName,l)||(n.inputCardName=l),Xy(l)}),ag(),a0(),Tl(11,`po-input`,11,2),ww(`ngModelChange`,function(l){return Ky(m),uN(n.inputCardCode,l)||(n.inputCardCode=l),Xy(l)}),ag(),a0(),Tl(13,`po-input`,12,3),ww(`ngModelChange`,function(l){return Ky(m),uN(n.inputCardValid,l)||(n.inputCardValid=l),Xy(l)}),ag(),a0(),ag(),Tl(15,`div`,9)(16,`po-button`,13),ht(`click`,function(){Ky(m);return Xy(Bx(18).open())}),ag()()(),Tl(17,`po-modal`,14,4)(19,`div`,9)(20,`div`),cN(21),ag()(),Tl(22,`div`,9)(23,`div`),cN(24),ag()(),Tl(25,`div`,9)(26,`div`),cN(27),ag()()()}if(a&2){let m=Bx(7);nw(`p-target`,n.cardcoderef),jp(2),nw(`p-target`,n.carddateref),jp(2),nw(`p-target`,n.cardnameref),jp(5),Ew(`ngModel`,n.inputCardName),l0(),jp(2),Ew(`ngModel`,n.inputCardCode),l0(),jp(2),Ew(`ngModel`,n.inputCardValid),l0(),jp(3),nw(`p-disabled`,m.form.invalid),jp(5),hg(`Card Code: `,n.inputCardCode),jp(3),hg(`Card Expiration: `,n.inputCardValid),jp(3),hg(`Card Owner: `,n.inputCardName)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,iU,vr,ob],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Popover - Credit Card`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-popover-credit-card`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-popover-doc`]],standalone:!1,decls:363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-tooltip?view=doc`],[`href`,`https://po-ui.io/documentation/po-modal?view=doc`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`ElementRef`],[`pan`,``,1,`docs-api-property-type`,`HTMLElement`]],template:function(a,n){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPopoverModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-popover.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoPopoverComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-popover`),ag(),cN(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),ag(),Tl(18,`p`),cN(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Tl(20,`a`,6)(21,`strong`),cN(22,`po-tooltip`),ag()(),cN(23,`.`),ag(),Tl(24,`p`),cN(25,`Para conteúdos maiores recomenda-se o uso do `),Tl(26,`a`,7)(27,`strong`),cN(28,`po-modal`),ag()(),cN(29,`.`),ag(),Tl(30,`p`),cN(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Tl(32,`code`),cN(33,`right`),ag(),cN(34,`, `),Tl(35,`code`),cN(36,`right-top`),ag(),cN(37,`, `),Tl(38,`code`),cN(39,`right-bottom`),ag(),cN(40,`, `),Tl(41,`code`),cN(42,`top`),ag(),cN(43,`, `),Tl(44,`code`),cN(45,`top-left`),ag(),cN(46,`, `),Tl(47,`code`),cN(48,`top-right`),ag(),cN(49,`,
`),Tl(50,`code`),cN(51,`left`),ag(),cN(52,`, `),Tl(53,`code`),cN(54,`left-top`),ag(),cN(55,`, `),Tl(56,`code`),cN(57,`left-bottom`),ag(),cN(58,`, `),Tl(59,`code`),cN(60,`bottom`),ag(),cN(61,`, `),Tl(62,`code`),cN(63,`bottom-left`),ag(),cN(64,` e `),Tl(65,`code`),cN(66,`bottom-right`),ag(),cN(67,`.`),ag(),Tl(68,`p`),cN(69,`Também é possível escolher entre os dois eventos que podem abrir o `),Tl(70,`em`),cN(71,`popover`),ag(),cN(72,`.
Os eventos permitidos s\xE3o: `),Tl(73,`code`),cN(74,`click`),ag(),cN(75,` e `),Tl(76,`code`),cN(77,`hover`),ag(),cN(78,`. `),ag()(),Tl(79,`div`,8)(80,`h4`,9),cN(81,`Seletor`),ag(),Tl(82,`pre`,10),cN(83,`<po-popover
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
`),ag()(),Tl(84,`h4`,11),cN(85,`Propriedades`),ag(),Tl(86,`table`,12)(87,`tr`,13)(88,`th`,14),cN(89,`Nome`),ag(),Tl(90,`th`,14),cN(91,`Tipo`),ag(),Tl(92,`th`,14),cN(93,`Padrão`),ag(),Tl(94,`th`,14),cN(95,`Descrição`),ag()(),Tl(96,`tr`,15)(97,`td`,16)(98,`div`,17)(99,`span`,18),cN(100,` p-append-in-body`),Gl(101,`br`),ag()()(),Tl(102,`td`,19)(103,`code`,20),cN(104,`boolean`),ag()(),Tl(105,`td`,21)(106,`p`)(107,`code`),cN(108,`false`),ag()()(),Tl(109,`td`,22)(110,`em`)(111,`strong`),cN(112,`(opcional)`),ag()(),Tl(113,`p`),cN(114,`Define que o popover será inserido no body da página em vez do elemento definido em `),Tl(115,`code`),cN(116,`p-target`),ag(),cN(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),ag()()(),Tl(118,`tr`,15)(119,`td`,16)(120,`div`,23)(121,`span`,24),cN(122,` (p-close)`),Gl(123,`br`),ag()()(),Tl(124,`td`,19)(125,`code`,25),cN(126,`EventEmitter`),ag()(),Tl(127,`td`,21),cN(128,`-`),ag(),Tl(129,`td`,22)(130,`p`),cN(131,`Evento disparado ao fechar o popover.`),ag()()(),Tl(132,`tr`,15)(133,`td`,16)(134,`div`,17)(135,`span`,18),cN(136,` p-custom-classes`),Gl(137,`br`),ag()()(),Tl(138,`td`,19)(139,`code`,26),cN(140,`string`),ag()(),Tl(141,`td`,21),cN(142,`-`),ag(),Tl(143,`td`,22)(144,`em`)(145,`strong`),cN(146,`(opcional)`),ag()(),Tl(147,`p`),cN(148,`Permite a inclusão de classes CSS customizadas ao componente.`),ag(),Tl(149,`p`),cN(150,`Exemplo: `),Tl(151,`code`),cN(152,`p-custom-classes="minha-classe-1 minha-classe-2"`),ag(),cN(153,`.`),ag()()(),Tl(154,`tr`,15)(155,`td`,16)(156,`div`,17)(157,`span`,18),cN(158,` p-hide-arrow`),Gl(159,`br`),ag()()(),Tl(160,`td`,19)(161,`code`,20),cN(162,`boolean`),ag()(),Tl(163,`td`,21)(164,`p`)(165,`code`),cN(166,`false`),ag()()(),Tl(167,`td`,22)(168,`em`)(169,`strong`),cN(170,`(opcional)`),ag()(),Tl(171,`p`),cN(172,`Desabilita a seta do componente `),Tl(173,`em`),cN(174,`popover`),ag(),cN(175,`.`),ag()()(),Tl(176,`tr`,15)(177,`td`,16)(178,`div`,17)(179,`span`,18),cN(180,` p-offset`),Gl(181,`br`),ag()()(),Tl(182,`td`,19)(183,`code`,27),cN(184,`number`),ag()(),Tl(185,`td`,21)(186,`p`)(187,`code`),cN(188,`8`),ag()()(),Tl(189,`td`,22)(190,`em`)(191,`strong`),cN(192,`(opcional)`),ag()(),Tl(193,`p`),cN(194,`Define o espaçamento (em pixels) entre o componente alvo (`),Tl(195,`code`),cN(196,`p-target`),ag(),cN(197,`) e o `),Tl(198,`code`),cN(199,`po-popover`),ag(),cN(200,`.
\xDAtil para componentes com targets pequenos (como \xEDcones) onde o espa\xE7amento padr\xE3o \xE9
proporcionalmente muito grande e cria desalinhamento visual.`),ag()()(),Tl(201,`tr`,15)(202,`td`,16)(203,`div`,23)(204,`span`,24),cN(205,` (p-open)`),Gl(206,`br`),ag()()(),Tl(207,`td`,19)(208,`code`,25),cN(209,`EventEmitter`),ag()(),Tl(210,`td`,21),cN(211,`-`),ag(),Tl(212,`td`,22)(213,`p`),cN(214,`Evento disparado ao abrir o popover.`),ag()()(),Tl(215,`tr`,15)(216,`td`,16)(217,`div`,17)(218,`span`,18),cN(219,` p-position`),Gl(220,`br`),ag()()(),Tl(221,`td`,19)(222,`code`,26),cN(223,`string`),ag()(),Tl(224,`td`,21)(225,`p`),cN(226,`right`),ag()(),Tl(227,`td`,22)(228,`em`)(229,`strong`),cN(230,`(opcional)`),ag()(),Tl(231,`p`),cN(232,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ag(),Tl(233,`p`),cN(234,`Posições válidas:`),ag(),Tl(235,`ul`)(236,`li`)(237,`code`),cN(238,`right`),ag(),cN(239,`: Posiciona o po-popover no lado direito do componente alvo.`),ag(),Tl(240,`li`)(241,`code`),cN(242,`right-bottom`),ag(),cN(243,`: Posiciona o po-popover no lado direito inferior do componente alvo.`),ag(),Tl(244,`li`)(245,`code`),cN(246,`right-top`),ag(),cN(247,`: Posiciona o po-popover no lado direito superior do componente alvo.`),ag(),Tl(248,`li`)(249,`code`),cN(250,`bottom`),ag(),cN(251,`: Posiciona o po-popover abaixo do componente alvo.`),ag(),Tl(252,`li`)(253,`code`),cN(254,`bottom-left`),ag(),cN(255,`: Posiciona o po-popover abaixo e à esquerda do componente alvo.`),ag(),Tl(256,`li`)(257,`code`),cN(258,`bottom-right`),ag(),cN(259,`: Posiciona o po-popover abaixo e à direita do componente alvo.`),ag(),Tl(260,`li`)(261,`code`),cN(262,`left`),ag(),cN(263,`: Posiciona o po-popover no lado esquerdo do componente alvo.`),ag(),Tl(264,`li`)(265,`code`),cN(266,`left-top`),ag(),cN(267,`: Posiciona o po-popover no lado esquerdo superior do componente alvo.`),ag(),Tl(268,`li`)(269,`code`),cN(270,`left-bottom`),ag(),cN(271,`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.`),ag(),Tl(272,`li`)(273,`code`),cN(274,`top`),ag(),cN(275,`: Posiciona o po-popover acima do componente alvo.`),ag(),Tl(276,`li`)(277,`code`),cN(278,`top-right`),ag(),cN(279,`: Posiciona o po-popover acima e à direita do componente alvo.`),ag(),Tl(280,`li`)(281,`code`),cN(282,`top-left`),ag(),cN(283,`: Posiciona o po-popover acima e à esquerda do componente alvo.`),ag()()()(),Tl(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),cN(288,` p-target`),Gl(289,`br`),ag()()(),Tl(290,`td`,19)(291,`code`,28),cN(292,`ElementRef `),ag(),Tl(293,`code`,29),cN(294,` HTMLElement`),ag()(),Tl(295,`td`,21),cN(296,`-`),ag(),Tl(297,`td`,22)(298,`p`),cN(299,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),ag(),Tl(300,`pre`)(301,`code`),cN(302,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),ag()(),Tl(303,`p`),cN(304,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),ag(),Tl(305,`pre`)(306,`code`),cN(307,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),ag()(),Tl(308,`p`),cN(309,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),ag(),Tl(310,`pre`)(311,`code`),cN(312,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),ag()()()(),Tl(313,`tr`,15)(314,`td`,16)(315,`div`,17)(316,`span`,18),cN(317,` p-title`),Gl(318,`br`),ag()()(),Tl(319,`td`,19)(320,`code`,26),cN(321,`string`),ag()(),Tl(322,`td`,21),cN(323,`-`),ag(),Tl(324,`td`,22)(325,`em`)(326,`strong`),cN(327,`(opcional)`),ag()(),Tl(328,`p`),cN(329,`Título do popover.`),ag()()(),Tl(330,`tr`,15)(331,`td`,16)(332,`div`,17)(333,`span`,18),cN(334,` p-trigger`),Gl(335,`br`),ag()()(),Tl(336,`td`,19)(337,`code`,26),cN(338,`string`),ag()(),Tl(339,`td`,21)(340,`p`),cN(341,`click`),ag()(),Tl(342,`td`,22)(343,`em`)(344,`strong`),cN(345,`(opcional)`),ag()(),Tl(346,`p`),cN(347,`Define o evento que abrirá o po-popover.`),ag(),Tl(348,`p`),cN(349,`Valores válidos:`),ag(),Tl(350,`ul`)(351,`li`)(352,`code`),cN(353,`click`),ag(),cN(354,`: Abre ao clicar no componente alvo.`),ag(),Tl(355,`li`)(356,`code`),cN(357,`hover`),ag(),cN(358,`: Abre ao passar o mouse sobre o componente alvo.`),ag(),Tl(359,`li`)(360,`code`),cN(361,`function`),ag(),cN(362,`: Abre através de funções públicas do componente.`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var ke=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Popover`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-popover-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-popover-basic-view`)(6,`sample-po-popover-labs-view`)(7,`sample-po-popover-credit-card-view`),ag()()()),a&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,le,de,se],encapsulation:2,changeDetection:1})}return i})()}];var ue=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[bL.forChild(ke),bL]})}return i})();var ut=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,ue]})}return i})();export{ut as DocPoPopoverModule};