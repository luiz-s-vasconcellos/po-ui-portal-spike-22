import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Wi as l_,X as N4,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,ga as wx,gi as bL,ha as ww,ht as TP,jr as Ot,l as ar,lr as Gl,oa as u_,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,vi as bx,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var le=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&Gl(0,`po-badge`)},dependencies:[TP],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Badge Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-badge-basic/sample-po-badge-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-badge></po-badge>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-badge-basic/sample-po-badge-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-badge-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,fe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:`showBorder`,label:`Show Border`}];iconsOptions=[{label:`an-check`,value:`an an-check`},{label:`an-check-circle`,value:`an an-check-circle`},{label:`an an-check`,value:`an an-check`},{label:`fa-minus`,value:`fa fa-minus`},{label:`true (Enabled when status is settled)`,value:`true`,disabled:!0},{label:`None`,value:`false`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];statusOptions=[{label:`Positive`,value:`positive`},{label:`Negative`,value:`negative`},{label:`Warning`,value:`warning`},{label:`Disabled`,value:`disabled`},{label:`None`,value:`none`}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p===`none`&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p===`true`}restore(){this.size=`medium`,this.status=void 0,this.icon=void 0,this.color=`color-07`,this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-labs`]],standalone:!1,decls:15,vars:17,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-color`,`p-icon`,`p-size`,`p-status`,`p-show-border`,`p-value`],[`name`,`value`,`p-label`,`Value`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min`],[`name`,`color`,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let g=Ax();Tl(0,`div`,1),Gl(1,`po-badge`,2),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,1)(6,`po-number`,3),ww(`ngModelChange`,function(r){return Ky(g),uN(i.value,r)||(i.value=r),Xy(r)}),ag(),a0(),Tl(7,`po-input`,4),ww(`ngModelChange`,function(r){return Ky(g),uN(i.color,r)||(i.color=r),Xy(r)}),ag(),a0(),ag(),Tl(8,`div`,1)(9,`po-checkbox-group`,5),ww(`ngModelChange`,function(r){return Ky(g),uN(i.properties,r)||(i.properties=r),Xy(r)}),ht(`p-change`,function(r){return i.propertiesChange(r)}),ag(),a0(),Tl(10,`po-radio-group`,6),ww(`ngModelChange`,function(r){return Ky(g),uN(i.status,r)||(i.status=r),Xy(r)}),ht(`p-change`,function(r){return i.statusChange(r)}),ag(),a0(),Tl(11,`po-radio-group`,7),ww(`ngModelChange`,function(r){return Ky(g),uN(i.size,r)||(i.size=r),Xy(r)}),ag(),a0(),Tl(12,`po-radio-group`,8),ww(`ngModelChange`,function(r){return Ky(g),uN(i.icon,r)||(i.icon=r),Xy(r)}),ht(`p-change`,function(r){return i.iconsChange(r)}),ag(),a0(),ag(),Tl(13,`div`,1)(14,`po-button`,9),ht(`p-click`,function(){return i.restore()}),ag()()()}l&2&&(jp(),nw(`p-color`,i.color)(`p-icon`,i.showIcon?!0:i.icon)(`p-size`,i.size)(`p-status`,i.status)(`p-show-border`,i.properties.includes(`showBorder`))(`p-value`,i.value),jp(5),Ew(`ngModel`,i.value),nw(`p-min`,0),l0(),jp(),Ew(`ngModel`,i.color),l0(),jp(2),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.status),nw(`p-options`,i.statusOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizesOptions),l0(),jp(),Ew(`ngModel`,i.icon),nw(`p-options`,i.iconsOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,ube,L0e,TP],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Badge Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-badge-labs/sample-po-badge-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-badge
    [p-color]="color"
    [p-icon]="showIcon ? true : icon"
    [p-size]="size"
    [p-status]="status"
    [p-show-border]="properties.includes('showBorder')"
    [p-value]="value"
  ></po-badge>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-4" name="value" [(ngModel)]="value" p-label="Value" [p-min]="0"> </po-number>
    <po-input
      class="po-md-4"
      name="color"
      [(ngModel)]="color"
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    ></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-12"
      name="status"
      [(ngModel)]="status"
      p-label="Status"
      [p-options]="statusOptions"
      (p-change)="statusChange($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconsOptions"
      (p-change)="iconsChange($event)"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-badge-labs/sample-po-badge-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-badge-labs',
  templateUrl: './sample-po-badge-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeLabsComponent implements OnInit {
  value: number;
  icon: string;
  size: string;
  status: any;
  properties: Array<string>;
  color: string;
  showIcon: boolean;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'showBorder', label: 'Show Border' }];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an-check', value: 'an an-check' },
    { label: 'an-check-circle', value: 'an an-check-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'fa-minus', value: 'fa fa-minus' },
    { label: 'true (Enabled when status is settled)', value: 'true', disabled: true },
    { label: 'None', value: 'false' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Positive', value: 'positive' },
    { label: 'Negative', value: 'negative' },
    { label: 'Warning', value: 'warning' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'None', value: 'none' }
  ];

  constructor() {}

  ngOnInit() {
    this.restore();
  }

  propertiesChange(event) {
    this.properties = event;
  }

  statusChange(event) {
    this.value = undefined;
    this.iconsOptions[4].disabled = false;

    if (event === 'none') {
      this.iconsOptions[4].disabled = true;
    }
  }

  iconsChange(event) {
    this.value = undefined;
    this.showIcon = event === 'true' ? true : false;
  }

  restore() {
    this.size = 'medium';
    this.status = undefined;
    this.icon = undefined;
    this.color = 'color-07';
    this.value = undefined;
    this.showIcon = false;
    this.iconsOptions[4].disabled = true;
    this.properties = [];
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-badge-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return a})();function Pe(a,he){if(a&1&&(Tl(0,`div`,1)(1,`po-container`)(2,`div`,2),l_(),Tl(3,`svg`,3),Gl(4,`circle`,4)(5,`path`,5),ag(),u_(),Tl(6,`p`,6),cN(7),Gl(8,`po-badge`,7),ag()()()()),a&2){let p=he.$implicit;jp(3),Ot(`kind`,p.status),jp(4),hg(` `,p.nome,` `),jp(),nw(`p-status`,p.status===`online`?`positive`:`negative`)}}var me=(()=>{class a{users=[{nome:`Leonardo da vinci`,status:`online`},{nome:`Johann Pachelbel`,status:`offline`},{nome:`Amadeus Mozart`,status:`offline`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-message`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`,`po-mt-3`],[1,`po-mb-1`],[1,`card`],[`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`po-mr-2`],[`cx`,`12`,`cy`,`12`,`r`,`11`],[`d`,`m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9`,`fill`,`none`],[1,`po-mr-2`,`card-name-user`,`po-text-color-neutral-dark-40`],[1,`po-badge-wrap`,3,`p-status`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`div`),Cx(2,Pe,9,3,`div`,1,wx),ag()()),l&2&&(jp(2),bx(i.users))},dependencies:[xp,TP],styles:[`.po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}`],changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-message-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Badge Message`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-badge-message/sample-po-badge-message.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row po-mt-3">
  <div>
    @for (user of users; track user) {
      <div class="po-mb-1">
        <po-container>
          <div class="card">
            <svg class="po-mr-2" [attr.kind]="user.status" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p class="po-mr-2 card-name-user po-text-color-neutral-dark-40">
              { { user.nome }}
              <po-badge
                class="po-badge-wrap"
                [p-status]="user.status === 'online' ? 'positive' : 'negative'"
              ></po-badge>
            </p>
          </div>
        </po-container>
      </div>
    }
  </div>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-badge-message/sample-po-badge-message.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-message',
  templateUrl: './sample-po-badge-message.component.html',
  styleUrls: ['./sample-po-badge-message.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeMessageComponent {
  users: Array<any> = [
    {
      nome: 'Leonardo da vinci',
      status: 'online'
    },
    {
      nome: 'Johann Pachelbel',
      status: 'offline'
    },
    {
      nome: 'Amadeus Mozart',
      status: 'offline'
    }
  ];
}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-badge-message/sample-po-badge-message.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.po-badge-wrap {
  position: absolute;
  top: -5px;
  right: -5px;
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  stroke-width: 2;
  stroke-linecap: round;
}

svg[kind='online'] {
  stroke: #0ea5e9;
  fill: #e0f2fe;
}

svg[kind='offline'] {
  fill: white;
  stroke: #dc2626;
}

.card {
  display: flex;
  align-items: center;
  position: relative;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-badge-message`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-doc`]],standalone:!1,decls:440,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeIcon`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeSize`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeStatus`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoBadgeModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-badge.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoBadgeComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Utilizado para exibir a quantidade de notificações. `),ag()(),Tl(15,`div`,6)(16,`h4`,7),cN(17,`Seletor`),ag(),Tl(18,`pre`,8),cN(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),ag()(),Tl(20,`h4`,9),cN(21,`Propriedades`),ag(),Tl(22,`table`,10)(23,`tr`,11)(24,`th`,12),cN(25,`Nome`),ag(),Tl(26,`th`,12),cN(27,`Tipo`),ag(),Tl(28,`th`,12),cN(29,`Padrão`),ag(),Tl(30,`th`,12),cN(31,`Descrição`),ag()(),Tl(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),cN(36,` p-aria-label`),Gl(37,`br`),ag()()(),Tl(38,`td`,17)(39,`code`,18),cN(40,`string`),ag()(),Tl(41,`td`,19),cN(42,`-`),ag(),Tl(43,`td`,20)(44,`p`),cN(45,`Define um `),Tl(46,`code`),cN(47,`aria-label`),ag(),cN(48,` para o `),Tl(49,`code`),cN(50,`po-badge`),ag()()()(),Tl(51,`tr`,13)(52,`td`,14)(53,`div`,15)(54,`span`,16),cN(55,` p-color`),Gl(56,`br`),ag()()(),Tl(57,`td`,17)(58,`code`,18),cN(59,`string`),ag()(),Tl(60,`td`,19)(61,`p`)(62,`code`),cN(63,`color-07`),ag()()(),Tl(64,`td`,20)(65,`em`)(66,`strong`),cN(67,`(opcional)`),ag()(),Tl(68,`p`),cN(69,`Determina a cor do `),Tl(70,`code`),cN(71,`po-badge`),ag(),cN(72,`. As maneiras de customizar as cores são:`),ag(),Tl(73,`ul`)(74,`li`),cN(75,`Hexadeximal, por exemplo `),Tl(76,`code`),cN(77,`#c64840`),ag(),cN(78,`;`),ag(),Tl(79,`li`),cN(80,`RGB, como `),Tl(81,`code`),cN(82,`rgb(0, 0, 165)`),ag(),cN(83,`;`),ag(),Tl(84,`li`),cN(85,`O nome da cor, por exemplo `),Tl(86,`code`),cN(87,`blue`),ag(),cN(88,`;`),ag(),Tl(89,`li`),cN(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Tl(91,`ul`)(92,`li`),Gl(93,`span`,21),Tl(94,`code`),cN(95,`color-01`),ag()(),Tl(96,`li`),Gl(97,`span`,22),Tl(98,`code`),cN(99,`color-02`),ag()(),Tl(100,`li`),Gl(101,`span`,23),Tl(102,`code`),cN(103,`color-03`),ag()(),Tl(104,`li`),Gl(105,`span`,24),Tl(106,`code`),cN(107,`color-04`),ag()(),Tl(108,`li`),Gl(109,`span`,25),Tl(110,`code`),cN(111,`color-05`),ag()(),Tl(112,`li`),Gl(113,`span`,26),Tl(114,`code`),cN(115,`color-06`),ag()(),Tl(116,`li`),Gl(117,`span`,27),Tl(118,`code`),cN(119,`color-07`),ag()(),Tl(120,`li`),Gl(121,`span`,28),Tl(122,`code`),cN(123,`color-08`),ag()(),Tl(124,`li`),Gl(125,`span`,29),Tl(126,`code`),cN(127,`color-09`),ag()(),Tl(128,`li`),Gl(129,`span`,30),Tl(130,`code`),cN(131,`color-10`),ag()(),Tl(132,`li`),Gl(133,`span`,31),Tl(134,`code`),cN(135,`color-11`),ag()(),Tl(136,`li`),Gl(137,`span`,32),Tl(138,`code`),cN(139,`color-12`),ag()()()()(),Tl(140,`blockquote`)(141,`p`),cN(142,`Também é possível utilizar as 35 cores da paleta `),Tl(143,`strong`),cN(144,`Caption Tag Colors`),ag(),cN(145,`:`),ag()(),Tl(146,`ul`)(147,`li`),Gl(148,`span`,33),Tl(149,`code`),cN(150,`caption-tag-01`),ag(),Gl(151,`span`,34),Tl(152,`code`),cN(153,`caption-tag-02`),ag(),Gl(154,`span`,35),Tl(155,`code`),cN(156,`caption-tag-03`),ag(),Gl(157,`span`,36),Tl(158,`code`),cN(159,`caption-tag-04`),ag(),Gl(160,`span`,37),Tl(161,`code`),cN(162,`caption-tag-05`),ag()(),Tl(163,`li`),Gl(164,`span`,38),Tl(165,`code`),cN(166,`caption-tag-06`),ag(),Gl(167,`span`,39),Tl(168,`code`),cN(169,`caption-tag-07`),ag(),Gl(170,`span`,40),Tl(171,`code`),cN(172,`caption-tag-08`),ag(),Gl(173,`span`,41),Tl(174,`code`),cN(175,`caption-tag-09`),ag(),Gl(176,`span`,42),Tl(177,`code`),cN(178,`caption-tag-10`),ag()(),Tl(179,`li`),Gl(180,`span`,43),Tl(181,`code`),cN(182,`caption-tag-11`),ag(),Gl(183,`span`,44),Tl(184,`code`),cN(185,`caption-tag-12`),ag(),Gl(186,`span`,45),Tl(187,`code`),cN(188,`caption-tag-13`),ag(),Gl(189,`span`,46),Tl(190,`code`),cN(191,`caption-tag-14`),ag(),Gl(192,`span`,47),Tl(193,`code`),cN(194,`caption-tag-15`),ag()(),Tl(195,`li`),Gl(196,`span`,48),Tl(197,`code`),cN(198,`caption-tag-16`),ag(),Gl(199,`span`,49),Tl(200,`code`),cN(201,`caption-tag-17`),ag(),Gl(202,`span`,50),Tl(203,`code`),cN(204,`caption-tag-18`),ag(),Gl(205,`span`,51),Tl(206,`code`),cN(207,`caption-tag-19`),ag(),Gl(208,`span`,52),Tl(209,`code`),cN(210,`caption-tag-20`),ag()(),Tl(211,`li`),Gl(212,`span`,53),Tl(213,`code`),cN(214,`caption-tag-21`),ag(),Gl(215,`span`,54),Tl(216,`code`),cN(217,`caption-tag-22`),ag(),Gl(218,`span`,55),Tl(219,`code`),cN(220,`caption-tag-23`),ag(),Gl(221,`span`,56),Tl(222,`code`),cN(223,`caption-tag-24`),ag(),Gl(224,`span`,57),Tl(225,`code`),cN(226,`caption-tag-25`),ag()(),Tl(227,`li`),Gl(228,`span`,58),Tl(229,`code`),cN(230,`caption-tag-26`),ag(),Gl(231,`span`,59),Tl(232,`code`),cN(233,`caption-tag-27`),ag(),Gl(234,`span`,60),Tl(235,`code`),cN(236,`caption-tag-28`),ag(),Gl(237,`span`,61),Tl(238,`code`),cN(239,`caption-tag-29`),ag(),Gl(240,`span`,62),Tl(241,`code`),cN(242,`caption-tag-30`),ag()(),Tl(243,`li`),Gl(244,`span`,63),Tl(245,`code`),cN(246,`caption-tag-31`),ag(),Gl(247,`span`,64),Tl(248,`code`),cN(249,`caption-tag-32`),ag(),Gl(250,`span`,65),Tl(251,`code`),cN(252,`caption-tag-33`),ag(),Gl(253,`span`,66),Tl(254,`code`),cN(255,`caption-tag-34`),ag(),Gl(256,`span`,67),Tl(257,`code`),cN(258,`caption-tag-35`),ag()()(),Tl(259,`p`),cN(260,`Exemplo de uso:`),ag(),Tl(261,`pre`)(262,`code`),cN(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),ag()()()(),Tl(264,`tr`,13)(265,`td`,14)(266,`div`,15)(267,`span`,16),cN(268,` p-icon`),Gl(269,`br`),ag()()(),Tl(270,`td`,17)(271,`code`,68),cN(272,`PoBadgeIcon`),ag()(),Tl(273,`td`,19),cN(274,`-`),ag(),Tl(275,`td`,20)(276,`em`)(277,`strong`),cN(278,`(opcional)`),ag()(),Tl(279,`p`),cN(280,`Ícone exibido no `),Tl(281,`code`),cN(282,`po-badge`),ag(),cN(283,`.`),ag(),Tl(284,`p`),cN(285,`Para exibir icone do status atual declare a propriedade `),Tl(286,`code`),cN(287,`p-icon`),ag(),cN(288,`. conforme exemplo abaixo:`),ag(),Tl(289,`pre`)(290,`code`),cN(291,`<po-badge [p-icon]="true"></po-badge>
`),ag()(),Tl(292,`p`),cN(293,`É possível usar qualquer um dos ícones da `),Tl(294,`a`,69),cN(295,`Biblioteca de ícones`),ag(),cN(296,`. conforme exemplo abaixo:`),ag(),Tl(297,`pre`)(298,`code`),cN(299,`<po-badge p-icon="an an-user"></po-badge>
`),ag()(),Tl(300,`p`),cN(301,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(302,`em`),cN(303,`Font Awesome`),ag(),cN(304,`, da seguinte forma:`),ag(),Tl(305,`pre`)(306,`code`),cN(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),ag()(),Tl(308,`p`),cN(309,`Outra opção seria a customização do ícone através do `),Tl(310,`code`),cN(311,`TemplateRef`),ag(),cN(312,`, conforme exemplo abaixo:`),ag(),Tl(313,`pre`)(314,`code`),cN(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()()()(),Tl(316,`tr`,13)(317,`td`,14)(318,`div`,15)(319,`span`,16),cN(320,` p-show-border`),Gl(321,`br`),ag()()(),Tl(322,`td`,17)(323,`code`,70),cN(324,`boolean`),ag()(),Tl(325,`td`,19),cN(326,`-`),ag(),Tl(327,`td`,20)(328,`p`),cN(329,`Exibe uma borda para o `),Tl(330,`code`),cN(331,`po-badge`),ag()(),Tl(332,`blockquote`)(333,`p`),cN(334,`Pode personalizar cor da bordar com a propriedade `),Tl(335,`code`),cN(336,`p-color-border`),ag()()()()(),Tl(337,`tr`,13)(338,`td`,14)(339,`div`,15)(340,`span`,16),cN(341,` p-size`),Gl(342,`br`),ag()()(),Tl(343,`td`,17)(344,`code`,71),cN(345,`PoBadgeSize`),ag()(),Tl(346,`td`,19)(347,`p`)(348,`code`),cN(349,`medium`),ag()()(),Tl(350,`td`,20)(351,`p`),cN(352,`Define o tamanho do `),Tl(353,`code`),cN(354,`po-badge`),ag()(),Tl(355,`p`),cN(356,`Valores válidos:`),ag(),Tl(357,`ul`)(358,`li`)(359,`code`),cN(360,`small`),ag(),cN(361,`: o `),Tl(362,`code`),cN(363,`po-badge`),ag(),cN(364,` fica do tamanho padrão, com 8px de altura.;`),ag(),Tl(365,`li`)(366,`code`),cN(367,`medium`),ag(),cN(368,`: o `),Tl(369,`code`),cN(370,`po-badge`),ag(),cN(371,` fica do tamanho padrão, com 16px de altura.;`),ag(),Tl(372,`li`)(373,`code`),cN(374,`large`),ag(),cN(375,`: o `),Tl(376,`code`),cN(377,`po-badge`),ag(),cN(378,` fica do tamanho padrão, com 24px de altura.;`),ag()()()(),Tl(379,`tr`,13)(380,`td`,14)(381,`div`,15)(382,`span`,16),cN(383,` p-status`),Gl(384,`br`),ag()()(),Tl(385,`td`,17)(386,`code`,72),cN(387,`PoBadgeStatus`),ag()(),Tl(388,`td`,19),cN(389,`-`),ag(),Tl(390,`td`,20)(391,`p`),cN(392,`Define o estado do `),Tl(393,`code`),cN(394,`po-badge`),ag()(),Tl(395,`p`),cN(396,`Valores válidos:`),ag(),Tl(397,`ul`)(398,`li`)(399,`code`),cN(400,`positive`),ag(),cN(401,`: Define a cor do `),Tl(402,`code`),cN(403,`po-badge`),ag(),cN(404,` com a cor de feedback positivo.;`),ag(),Tl(405,`li`)(406,`code`),cN(407,`negative`),ag(),cN(408,`: Define a cor do `),Tl(409,`code`),cN(410,`po-badge`),ag(),cN(411,` com a cor de feedback negative.;`),ag(),Tl(412,`li`)(413,`code`),cN(414,`warning`),ag(),cN(415,`: Define a cor do `),Tl(416,`code`),cN(417,`po-badge`),ag(),cN(418,` com a cor de feedback warning.;`),ag(),Tl(419,`li`)(420,`code`),cN(421,`disabled`),ag(),cN(422,`: Define a cor do `),Tl(423,`code`),cN(424,`po-badge`),ag(),cN(425,` com a cor de feedback disabled;`),ag()()()(),Tl(426,`tr`,13)(427,`td`,14)(428,`div`,15)(429,`span`,16),cN(430,` p-value`),Gl(431,`br`),ag()()(),Tl(432,`td`,17)(433,`code`,73),cN(434,`number`),ag()(),Tl(435,`td`,19),cN(436,`-`),ag(),Tl(437,`td`,20)(438,`p`),cN(439,`Número exibido no componente, caso o mesmo seja maior que 9 o valor exibido será 9+.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Me=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Badge`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-badge-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-badge-basic-view`)(6,`sample-po-badge-labs-view`)(7,`sample-po-badge-message-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,re,de,ce,ge],encapsulation:2,changeDetection:1})}return a})()}];var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(Me),bL]})}return a})();var $e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,be]})}return a})();export{$e as DocPoBadgeModule};