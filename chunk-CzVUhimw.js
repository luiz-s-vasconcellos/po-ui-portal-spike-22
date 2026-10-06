import{$i as pt,Br as Qn,Ci as fo,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Gt as fb,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,fn as ni,i as _a,ii as Z,in as kte,ji as ho,k as D4,ki as he$1,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-AGY457H2.js";var ie=(()=>{class i{poButton;static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-popover-basic`]],viewQuery:function(a,n){if(a&1&&Xc(ni,7,Z),a&2){let m;fo(m=ho())&&(n.poButton=m.first)}},standalone:!1,decls:3,vars:1,consts:[[3,`p-target`],[`p-label`,`Open Popover`]],template:function(a,n){a&1&&(Ac(0,`po-popover`,0),vN(1,` PO Popover `),ug(),Kc(2,`po-button`,1)),a&2&&cE(`p-target`,n.poButton)},dependencies:[ni,fb],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-popover-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Popover Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-popover-basic/sample-po-popover-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-popover-basic/sample-po-popover-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-popover-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ge,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ie],encapsulation:2,changeDetection:1})}return i})();var be=[`buttonClick`];var he=[`buttonHover`];var re=(()=>{class i{buttonClickRef;buttonHoverRef;content=``;position=``;properties=[];title=``;offset=8;positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];offsetOptions=[{label:`0`,value:0},{label:`4`,value:4},{label:`8 (default)`,value:8},{label:`16`,value:16},{label:`32`,value:32}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];restore(){this.content=``,this.position=void 0,this.properties=[],this.title=``,this.offset=8}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-popover-labs`]],viewQuery:function(a,n){if(a&1&&Xc(be,7,Z)(he,7,Z),a&2){let m;fo(m=ho())&&(n.buttonClickRef=m.first),fo(m=ho())&&(n.buttonHoverRef=m.first)}},standalone:!1,decls:24,vars:21,consts:[[`buttonClick`,``],[`buttonHover`,``],[`f`,`ngForm`],[`p-trigger`,`click`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[`p-trigger`,`hover`,3,`p-hide-arrow`,`p-position`,`p-offset`,`p-target`,`p-title`],[1,`po-row`],[1,`po-offset-xl-1`,`po-offset-lg-1`,`po-md-6`,`po-lg-3`],[`p-label`,`Popover with click`],[`p-label`,`Popover with hover`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`offset`,`p-label`,`Offset (px)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let m=Bx();Ac(0,`po-popover`,3),vN(1),ug(),Ac(2,`po-popover`,4),vN(3),ug(),Ac(4,`div`,5)(5,`div`,6),Kc(6,`po-button`,7,0),ug(),Ac(8,`div`,6),Kc(9,`po-button`,8,1),ug()(),Kc(11,`po-divider`),Ac(12,`form`,null,2)(14,`div`,5)(15,`po-input`,9),RE(`ngModelChange`,function(l){return Jv(m),DN(n.title,l)||(n.title=l),e_(l)}),ug(),p0(),Ac(16,`po-input`,10),RE(`ngModelChange`,function(l){return Jv(m),DN(n.content,l)||(n.content=l),e_(l)}),ug(),p0(),ug(),Ac(17,`div`,5)(18,`po-radio-group`,11),RE(`ngModelChange`,function(l){return Jv(m),DN(n.position,l)||(n.position=l),e_(l)}),ug(),p0(),Ac(19,`po-checkbox-group`,12),RE(`ngModelChange`,function(l){return Jv(m),DN(n.properties,l)||(n.properties=l),e_(l)}),ug(),p0(),ug(),Ac(20,`div`,5)(21,`po-radio-group`,13),RE(`ngModelChange`,function(l){return Jv(m),DN(n.offset,l)||(n.offset=l),e_(l)}),ug(),p0(),ug(),Ac(22,`div`,5)(23,`po-button`,14),pt(`p-click`,function(){return n.restore()}),ug()()()}a&2&&(cE(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonClickRef)(`p-title`,n.title),Hp(),mg(` `,n.content,`
`),Hp(),cE(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-offset`,n.offset)(`p-target`,n.buttonHoverRef)(`p-title`,n.title),Hp(),mg(` `,n.content,`
`),Hp(12),TE(`ngModel`,n.title),m0(),Hp(),TE(`ngModel`,n.content),m0(),Hp(2),TE(`ngModel`,n.position),cE(`p-options`,n.positionOptions),m0(),Hp(),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0(),Hp(2),TE(`ngModel`,n.offset),cE(`p-columns`,5)(`p-options`,n.offsetOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,fb],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i});var le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-popover-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Popover Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-popover-labs/sample-po-popover-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-popover
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-popover-labs/sample-po-popover-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-popover-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return i})();var xe=[`cardname`];var we=[`cardcode`];var ye=[`carddate`];var me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-popover-credit-card`]],viewQuery:function(a,n){if(a&1&&Xc(xe,7,Z)(we,7,Z)(ye,7,Z),a&2){let m;fo(m=ho())&&(n.cardnameref=m.first),fo(m=ho())&&(n.cardcoderef=m.first),fo(m=ho())&&(n.carddateref=m.first)}},standalone:!1,decls:28,vars:10,consts:[[`f`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`modalCreditCard`,``],[`p-trigger`,`hover`,3,`p-target`],[`src`,`assets/graphics/card-code.jpg`],[`src`,`assets/graphics/card-date.jpg`],[`src`,`assets/graphics/card-owner.jpg`],[1,`po-row`],[`name`,`inputCardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`inputCardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Confirm`,1,`po-md-2`,3,`click`,`p-disabled`],[`p-title`,`Your Credit Card`]],template:function(a,n){if(a&1){let m=Bx();Ac(0,`po-popover`,5),Kc(1,`img`,6),ug(),Ac(2,`po-popover`,5),Kc(3,`img`,7),ug(),Ac(4,`po-popover`,5),Kc(5,`img`,8),ug(),Ac(6,`form`,null,0)(8,`div`,9)(9,`po-input`,10,1),RE(`ngModelChange`,function(l){return Jv(m),DN(n.inputCardName,l)||(n.inputCardName=l),e_(l)}),ug(),p0(),Ac(11,`po-input`,11,2),RE(`ngModelChange`,function(l){return Jv(m),DN(n.inputCardCode,l)||(n.inputCardCode=l),e_(l)}),ug(),p0(),Ac(13,`po-input`,12,3),RE(`ngModelChange`,function(l){return Jv(m),DN(n.inputCardValid,l)||(n.inputCardValid=l),e_(l)}),ug(),p0(),ug(),Ac(15,`div`,9)(16,`po-button`,13),pt(`click`,function(){Jv(m);let l=Zx(18);return e_(l.open())}),ug()()(),Ac(17,`po-modal`,14,4)(19,`div`,9)(20,`div`),vN(21),ug()(),Ac(22,`div`,9)(23,`div`),vN(24),ug()(),Ac(25,`div`,9)(26,`div`),vN(27),ug()()()}if(a&2){let m=Zx(7);cE(`p-target`,n.cardcoderef),Hp(2),cE(`p-target`,n.carddateref),Hp(2),cE(`p-target`,n.cardnameref),Hp(5),TE(`ngModel`,n.inputCardName),m0(),Hp(2),TE(`ngModel`,n.inputCardCode),m0(),Hp(2),TE(`ngModel`,n.inputCardValid),m0(),Hp(3),cE(`p-disabled`,m.form.invalid),Hp(5),mg(`Card Code: `,n.inputCardCode),Hp(3),mg(`Card Expiration: `,n.inputCardValid),Hp(3),mg(`Card Owner: `,n.inputCardName)}},dependencies:[b9,D9,C9,BP,LP,ni,D4,ta,fb],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-popover-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Popover - Credit Card`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-popover-credit-card`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,me],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-popover-doc`]],standalone:!1,decls:363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-tooltip?view=doc`],[`href`,`https://po-ui.io/documentation/po-modal?view=doc`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`ElementRef`],[`pan`,``,1,`docs-api-property-type`,`HTMLElement`]],template:function(a,n){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPopoverModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-popover.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoPopoverComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-popover`),ug(),vN(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),ug(),Ac(18,`p`),vN(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Ac(20,`a`,6)(21,`strong`),vN(22,`po-tooltip`),ug()(),vN(23,`.`),ug(),Ac(24,`p`),vN(25,`Para conteúdos maiores recomenda-se o uso do `),Ac(26,`a`,7)(27,`strong`),vN(28,`po-modal`),ug()(),vN(29,`.`),ug(),Ac(30,`p`),vN(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Ac(32,`code`),vN(33,`right`),ug(),vN(34,`, `),Ac(35,`code`),vN(36,`right-top`),ug(),vN(37,`, `),Ac(38,`code`),vN(39,`right-bottom`),ug(),vN(40,`, `),Ac(41,`code`),vN(42,`top`),ug(),vN(43,`, `),Ac(44,`code`),vN(45,`top-left`),ug(),vN(46,`, `),Ac(47,`code`),vN(48,`top-right`),ug(),vN(49,`,
`),Ac(50,`code`),vN(51,`left`),ug(),vN(52,`, `),Ac(53,`code`),vN(54,`left-top`),ug(),vN(55,`, `),Ac(56,`code`),vN(57,`left-bottom`),ug(),vN(58,`, `),Ac(59,`code`),vN(60,`bottom`),ug(),vN(61,`, `),Ac(62,`code`),vN(63,`bottom-left`),ug(),vN(64,` e `),Ac(65,`code`),vN(66,`bottom-right`),ug(),vN(67,`.`),ug(),Ac(68,`p`),vN(69,`Também é possível escolher entre os dois eventos que podem abrir o `),Ac(70,`em`),vN(71,`popover`),ug(),vN(72,`.
Os eventos permitidos s\xE3o: `),Ac(73,`code`),vN(74,`click`),ug(),vN(75,` e `),Ac(76,`code`),vN(77,`hover`),ug(),vN(78,`. `),ug()(),Ac(79,`div`,8)(80,`h4`,9),vN(81,`Seletor`),ug(),Ac(82,`pre`,10),vN(83,`<po-popover
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
`),ug()(),Ac(84,`h4`,11),vN(85,`Propriedades`),ug(),Ac(86,`table`,12)(87,`tr`,13)(88,`th`,14),vN(89,`Nome`),ug(),Ac(90,`th`,14),vN(91,`Tipo`),ug(),Ac(92,`th`,14),vN(93,`Padrão`),ug(),Ac(94,`th`,14),vN(95,`Descrição`),ug()(),Ac(96,`tr`,15)(97,`td`,16)(98,`div`,17)(99,`span`,18),vN(100,` p-append-in-body`),Kc(101,`br`),ug()()(),Ac(102,`td`,19)(103,`code`,20),vN(104,`boolean`),ug()(),Ac(105,`td`,21)(106,`p`)(107,`code`),vN(108,`false`),ug()()(),Ac(109,`td`,22)(110,`em`)(111,`strong`),vN(112,`(opcional)`),ug()(),Ac(113,`p`),vN(114,`Define que o popover será inserido no body da página em vez do elemento definido em `),Ac(115,`code`),vN(116,`p-target`),ug(),vN(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),ug()()(),Ac(118,`tr`,15)(119,`td`,16)(120,`div`,23)(121,`span`,24),vN(122,` (p-close)`),Kc(123,`br`),ug()()(),Ac(124,`td`,19)(125,`code`,25),vN(126,`EventEmitter`),ug()(),Ac(127,`td`,21),vN(128,`-`),ug(),Ac(129,`td`,22)(130,`p`),vN(131,`Evento disparado ao fechar o popover.`),ug()()(),Ac(132,`tr`,15)(133,`td`,16)(134,`div`,17)(135,`span`,18),vN(136,` p-custom-classes`),Kc(137,`br`),ug()()(),Ac(138,`td`,19)(139,`code`,26),vN(140,`string`),ug()(),Ac(141,`td`,21),vN(142,`-`),ug(),Ac(143,`td`,22)(144,`em`)(145,`strong`),vN(146,`(opcional)`),ug()(),Ac(147,`p`),vN(148,`Permite a inclusão de classes CSS customizadas ao componente.`),ug(),Ac(149,`p`),vN(150,`Exemplo: `),Ac(151,`code`),vN(152,`p-custom-classes="minha-classe-1 minha-classe-2"`),ug(),vN(153,`.`),ug()()(),Ac(154,`tr`,15)(155,`td`,16)(156,`div`,17)(157,`span`,18),vN(158,` p-hide-arrow`),Kc(159,`br`),ug()()(),Ac(160,`td`,19)(161,`code`,20),vN(162,`boolean`),ug()(),Ac(163,`td`,21)(164,`p`)(165,`code`),vN(166,`false`),ug()()(),Ac(167,`td`,22)(168,`em`)(169,`strong`),vN(170,`(opcional)`),ug()(),Ac(171,`p`),vN(172,`Desabilita a seta do componente `),Ac(173,`em`),vN(174,`popover`),ug(),vN(175,`.`),ug()()(),Ac(176,`tr`,15)(177,`td`,16)(178,`div`,17)(179,`span`,18),vN(180,` p-offset`),Kc(181,`br`),ug()()(),Ac(182,`td`,19)(183,`code`,27),vN(184,`number`),ug()(),Ac(185,`td`,21)(186,`p`)(187,`code`),vN(188,`8`),ug()()(),Ac(189,`td`,22)(190,`em`)(191,`strong`),vN(192,`(opcional)`),ug()(),Ac(193,`p`),vN(194,`Define o espaçamento (em pixels) entre o componente alvo (`),Ac(195,`code`),vN(196,`p-target`),ug(),vN(197,`) e o `),Ac(198,`code`),vN(199,`po-popover`),ug(),vN(200,`.
\xDAtil para componentes com targets pequenos (como \xEDcones) onde o espa\xE7amento padr\xE3o \xE9
proporcionalmente muito grande e cria desalinhamento visual.`),ug()()(),Ac(201,`tr`,15)(202,`td`,16)(203,`div`,23)(204,`span`,24),vN(205,` (p-open)`),Kc(206,`br`),ug()()(),Ac(207,`td`,19)(208,`code`,25),vN(209,`EventEmitter`),ug()(),Ac(210,`td`,21),vN(211,`-`),ug(),Ac(212,`td`,22)(213,`p`),vN(214,`Evento disparado ao abrir o popover.`),ug()()(),Ac(215,`tr`,15)(216,`td`,16)(217,`div`,17)(218,`span`,18),vN(219,` p-position`),Kc(220,`br`),ug()()(),Ac(221,`td`,19)(222,`code`,26),vN(223,`string`),ug()(),Ac(224,`td`,21)(225,`p`),vN(226,`right`),ug()(),Ac(227,`td`,22)(228,`em`)(229,`strong`),vN(230,`(opcional)`),ug()(),Ac(231,`p`),vN(232,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ug(),Ac(233,`p`),vN(234,`Posições válidas:`),ug(),Ac(235,`ul`)(236,`li`)(237,`code`),vN(238,`right`),ug(),vN(239,`: Posiciona o po-popover no lado direito do componente alvo.`),ug(),Ac(240,`li`)(241,`code`),vN(242,`right-bottom`),ug(),vN(243,`: Posiciona o po-popover no lado direito inferior do componente alvo.`),ug(),Ac(244,`li`)(245,`code`),vN(246,`right-top`),ug(),vN(247,`: Posiciona o po-popover no lado direito superior do componente alvo.`),ug(),Ac(248,`li`)(249,`code`),vN(250,`bottom`),ug(),vN(251,`: Posiciona o po-popover abaixo do componente alvo.`),ug(),Ac(252,`li`)(253,`code`),vN(254,`bottom-left`),ug(),vN(255,`: Posiciona o po-popover abaixo e à esquerda do componente alvo.`),ug(),Ac(256,`li`)(257,`code`),vN(258,`bottom-right`),ug(),vN(259,`: Posiciona o po-popover abaixo e à direita do componente alvo.`),ug(),Ac(260,`li`)(261,`code`),vN(262,`left`),ug(),vN(263,`: Posiciona o po-popover no lado esquerdo do componente alvo.`),ug(),Ac(264,`li`)(265,`code`),vN(266,`left-top`),ug(),vN(267,`: Posiciona o po-popover no lado esquerdo superior do componente alvo.`),ug(),Ac(268,`li`)(269,`code`),vN(270,`left-bottom`),ug(),vN(271,`: Posiciona o po-popover no lado esquerdo inferior do componente alvo.`),ug(),Ac(272,`li`)(273,`code`),vN(274,`top`),ug(),vN(275,`: Posiciona o po-popover acima do componente alvo.`),ug(),Ac(276,`li`)(277,`code`),vN(278,`top-right`),ug(),vN(279,`: Posiciona o po-popover acima e à direita do componente alvo.`),ug(),Ac(280,`li`)(281,`code`),vN(282,`top-left`),ug(),vN(283,`: Posiciona o po-popover acima e à esquerda do componente alvo.`),ug()()()(),Ac(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),vN(288,` p-target`),Kc(289,`br`),ug()()(),Ac(290,`td`,19)(291,`code`,28),vN(292,`ElementRef `),ug(),Ac(293,`code`,29),vN(294,` HTMLElement`),ug()(),Ac(295,`td`,21),vN(296,`-`),ug(),Ac(297,`td`,22)(298,`p`),vN(299,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),ug(),Ac(300,`pre`)(301,`code`),vN(302,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),ug()(),Ac(303,`p`),vN(304,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),ug(),Ac(305,`pre`)(306,`code`),vN(307,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),ug()(),Ac(308,`p`),vN(309,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),ug(),Ac(310,`pre`)(311,`code`),vN(312,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),ug()()()(),Ac(313,`tr`,15)(314,`td`,16)(315,`div`,17)(316,`span`,18),vN(317,` p-title`),Kc(318,`br`),ug()()(),Ac(319,`td`,19)(320,`code`,26),vN(321,`string`),ug()(),Ac(322,`td`,21),vN(323,`-`),ug(),Ac(324,`td`,22)(325,`em`)(326,`strong`),vN(327,`(opcional)`),ug()(),Ac(328,`p`),vN(329,`Título do popover.`),ug()()(),Ac(330,`tr`,15)(331,`td`,16)(332,`div`,17)(333,`span`,18),vN(334,` p-trigger`),Kc(335,`br`),ug()()(),Ac(336,`td`,19)(337,`code`,26),vN(338,`string`),ug()(),Ac(339,`td`,21)(340,`p`),vN(341,`click`),ug()(),Ac(342,`td`,22)(343,`em`)(344,`strong`),vN(345,`(opcional)`),ug()(),Ac(346,`p`),vN(347,`Define o evento que abrirá o po-popover.`),ug(),Ac(348,`p`),vN(349,`Valores válidos:`),ug(),Ac(350,`ul`)(351,`li`)(352,`code`),vN(353,`click`),ug(),vN(354,`: Abre ao clicar no componente alvo.`),ug(),Ac(355,`li`)(356,`code`),vN(357,`hover`),ug(),vN(358,`: Abre ao passar o mouse sobre o componente alvo.`),ug(),Ac(359,`li`)(360,`code`),vN(361,`function`),ug(),vN(362,`: Abre através de funções públicas do componente.`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var ke=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Popover`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-popover-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-popover-basic-view`)(6,`sample-po-popover-labs-view`)(7,`sample-po-popover-credit-card-view`),ug()()()),a&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,pe,le,de,se],encapsulation:2,changeDetection:1})}return i})()}];var ue=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[kL.forChild(ke),kL]})}return i})();var ut=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[Ta,ue]})}return i})();export{ut as DocPoPopoverModule};