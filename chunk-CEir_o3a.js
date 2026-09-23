import{$r as Vx,Cr as Nx,Dr as Ot,Ei as f_,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Un as Ax,Vi as kk,W as IP,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,ea as p0,ga as w,jn as wp,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,xa as xx,xi as d_}from"./main-NT5YGKBQ.js";var le=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&ql(0,`po-badge`)},dependencies:[IP],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Badge Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-badge-basic/sample-po-badge-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-badge></po-badge>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-badge-basic/sample-po-badge-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-badge-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,fe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:`showBorder`,label:`Show Border`}];iconsOptions=[{label:`an-check`,value:`an an-check`},{label:`an-check-circle`,value:`an an-check-circle`},{label:`an an-check`,value:`an an-check`},{label:`fa-minus`,value:`fa fa-minus`},{label:`true (Enabled when status is settled)`,value:`true`,disabled:!0},{label:`None`,value:`false`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];statusOptions=[{label:`Positive`,value:`positive`},{label:`Negative`,value:`negative`},{label:`Warning`,value:`warning`},{label:`Disabled`,value:`disabled`},{label:`None`,value:`none`}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p===`none`&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p===`true`}restore(){this.size=`medium`,this.status=void 0,this.icon=void 0,this.color=`color-07`,this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-labs`]],standalone:!1,decls:15,vars:17,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-color`,`p-icon`,`p-size`,`p-status`,`p-show-border`,`p-value`],[`name`,`value`,`p-label`,`Value`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min`],[`name`,`color`,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let g=Vx();Ml(0,`div`,1),ql(1,`po-badge`,2),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,1)(6,`po-number`,3),Mw(`ngModelChange`,function(r){return Qy(g),yN(i.value,r)||(i.value=r),Jy(r)}),lg(),f0(),Ml(7,`po-input`,4),Mw(`ngModelChange`,function(r){return Qy(g),yN(i.color,r)||(i.color=r),Jy(r)}),lg(),f0(),lg(),Ml(8,`div`,1)(9,`po-checkbox-group`,5),Mw(`ngModelChange`,function(r){return Qy(g),yN(i.properties,r)||(i.properties=r),Jy(r)}),ht(`p-change`,function(r){return i.propertiesChange(r)}),lg(),f0(),Ml(10,`po-radio-group`,6),Mw(`ngModelChange`,function(r){return Qy(g),yN(i.status,r)||(i.status=r),Jy(r)}),ht(`p-change`,function(r){return i.statusChange(r)}),lg(),f0(),Ml(11,`po-radio-group`,7),Mw(`ngModelChange`,function(r){return Qy(g),yN(i.size,r)||(i.size=r),Jy(r)}),lg(),f0(),Ml(12,`po-radio-group`,8),Mw(`ngModelChange`,function(r){return Qy(g),yN(i.icon,r)||(i.icon=r),Jy(r)}),ht(`p-change`,function(r){return i.iconsChange(r)}),lg(),f0(),lg(),Ml(13,`div`,1)(14,`po-button`,9),ht(`p-click`,function(){return i.restore()}),lg()()()}l&2&&(Up(),cw(`p-color`,i.color)(`p-icon`,i.showIcon?!0:i.icon)(`p-size`,i.size)(`p-status`,i.status)(`p-show-border`,i.properties.includes(`showBorder`))(`p-value`,i.value),Up(5),Tw(`ngModel`,i.value),cw(`p-min`,0),p0(),Up(),Tw(`ngModel`,i.color),p0(),Up(2),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.status),cw(`p-options`,i.statusOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizesOptions),p0(),Up(),Tw(`ngModel`,i.icon),cw(`p-options`,i.iconsOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,q0e,IP],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Badge Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-badge-labs/sample-po-badge-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-badge-labs/sample-po-badge-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-badge-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return a})();function Pe(a,he){if(a&1&&(Ml(0,`div`,1)(1,`po-container`)(2,`div`,2),d_(),Ml(3,`svg`,3),ql(4,`circle`,4)(5,`path`,5),lg(),f_(),Ml(6,`p`,6),mN(7),ql(8,`po-badge`,7),lg()()()()),a&2){let p=he.$implicit;Up(3),Ot(`kind`,p.status),Up(4),gg(` `,p.nome,` `),Up(),cw(`p-status`,p.status===`online`?`positive`:`negative`)}}var me=(()=>{class a{users=[{nome:`Leonardo da vinci`,status:`online`},{nome:`Johann Pachelbel`,status:`offline`},{nome:`Amadeus Mozart`,status:`offline`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-message`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`,`po-mt-3`],[1,`po-mb-1`],[1,`card`],[`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`po-mr-2`],[`cx`,`12`,`cy`,`12`,`r`,`11`],[`d`,`m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9`,`fill`,`none`],[1,`po-mr-2`,`card-name-user`,`po-text-color-neutral-dark-40`],[1,`po-badge-wrap`,3,`p-status`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`div`),xx(2,Pe,9,3,`div`,1,Ax),lg()()),l&2&&(Up(2),Nx(i.users))},dependencies:[wp,IP],styles:[`.po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}`],changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-message-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Badge Message`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-badge-message/sample-po-badge-message.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row po-mt-3">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-badge-message/sample-po-badge-message.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-badge-message/sample-po-badge-message.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.po-badge-wrap {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-badge-message`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-badge-doc`]],standalone:!1,decls:440,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeIcon`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeSize`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeStatus`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoBadgeModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-badge.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoBadgeComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Utilizado para exibir a quantidade de notificações. `),lg()(),Ml(15,`div`,6)(16,`h4`,7),mN(17,`Seletor`),lg(),Ml(18,`pre`,8),mN(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),lg()(),Ml(20,`h4`,9),mN(21,`Propriedades`),lg(),Ml(22,`table`,10)(23,`tr`,11)(24,`th`,12),mN(25,`Nome`),lg(),Ml(26,`th`,12),mN(27,`Tipo`),lg(),Ml(28,`th`,12),mN(29,`Padrão`),lg(),Ml(30,`th`,12),mN(31,`Descrição`),lg()(),Ml(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),mN(36,` p-aria-label`),ql(37,`br`),lg()()(),Ml(38,`td`,17)(39,`code`,18),mN(40,`string`),lg()(),Ml(41,`td`,19),mN(42,`-`),lg(),Ml(43,`td`,20)(44,`p`),mN(45,`Define um `),Ml(46,`code`),mN(47,`aria-label`),lg(),mN(48,` para o `),Ml(49,`code`),mN(50,`po-badge`),lg()()()(),Ml(51,`tr`,13)(52,`td`,14)(53,`div`,15)(54,`span`,16),mN(55,` p-color`),ql(56,`br`),lg()()(),Ml(57,`td`,17)(58,`code`,18),mN(59,`string`),lg()(),Ml(60,`td`,19)(61,`p`)(62,`code`),mN(63,`color-07`),lg()()(),Ml(64,`td`,20)(65,`em`)(66,`strong`),mN(67,`(opcional)`),lg()(),Ml(68,`p`),mN(69,`Determina a cor do `),Ml(70,`code`),mN(71,`po-badge`),lg(),mN(72,`. As maneiras de customizar as cores são:`),lg(),Ml(73,`ul`)(74,`li`),mN(75,`Hexadeximal, por exemplo `),Ml(76,`code`),mN(77,`#c64840`),lg(),mN(78,`;`),lg(),Ml(79,`li`),mN(80,`RGB, como `),Ml(81,`code`),mN(82,`rgb(0, 0, 165)`),lg(),mN(83,`;`),lg(),Ml(84,`li`),mN(85,`O nome da cor, por exemplo `),Ml(86,`code`),mN(87,`blue`),lg(),mN(88,`;`),lg(),Ml(89,`li`),mN(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Ml(91,`ul`)(92,`li`),ql(93,`span`,21),Ml(94,`code`),mN(95,`color-01`),lg()(),Ml(96,`li`),ql(97,`span`,22),Ml(98,`code`),mN(99,`color-02`),lg()(),Ml(100,`li`),ql(101,`span`,23),Ml(102,`code`),mN(103,`color-03`),lg()(),Ml(104,`li`),ql(105,`span`,24),Ml(106,`code`),mN(107,`color-04`),lg()(),Ml(108,`li`),ql(109,`span`,25),Ml(110,`code`),mN(111,`color-05`),lg()(),Ml(112,`li`),ql(113,`span`,26),Ml(114,`code`),mN(115,`color-06`),lg()(),Ml(116,`li`),ql(117,`span`,27),Ml(118,`code`),mN(119,`color-07`),lg()(),Ml(120,`li`),ql(121,`span`,28),Ml(122,`code`),mN(123,`color-08`),lg()(),Ml(124,`li`),ql(125,`span`,29),Ml(126,`code`),mN(127,`color-09`),lg()(),Ml(128,`li`),ql(129,`span`,30),Ml(130,`code`),mN(131,`color-10`),lg()(),Ml(132,`li`),ql(133,`span`,31),Ml(134,`code`),mN(135,`color-11`),lg()(),Ml(136,`li`),ql(137,`span`,32),Ml(138,`code`),mN(139,`color-12`),lg()()()()(),Ml(140,`blockquote`)(141,`p`),mN(142,`Também é possível utilizar as 35 cores da paleta `),Ml(143,`strong`),mN(144,`Caption Tag Colors`),lg(),mN(145,`:`),lg()(),Ml(146,`ul`)(147,`li`),ql(148,`span`,33),Ml(149,`code`),mN(150,`caption-tag-01`),lg(),ql(151,`span`,34),Ml(152,`code`),mN(153,`caption-tag-02`),lg(),ql(154,`span`,35),Ml(155,`code`),mN(156,`caption-tag-03`),lg(),ql(157,`span`,36),Ml(158,`code`),mN(159,`caption-tag-04`),lg(),ql(160,`span`,37),Ml(161,`code`),mN(162,`caption-tag-05`),lg()(),Ml(163,`li`),ql(164,`span`,38),Ml(165,`code`),mN(166,`caption-tag-06`),lg(),ql(167,`span`,39),Ml(168,`code`),mN(169,`caption-tag-07`),lg(),ql(170,`span`,40),Ml(171,`code`),mN(172,`caption-tag-08`),lg(),ql(173,`span`,41),Ml(174,`code`),mN(175,`caption-tag-09`),lg(),ql(176,`span`,42),Ml(177,`code`),mN(178,`caption-tag-10`),lg()(),Ml(179,`li`),ql(180,`span`,43),Ml(181,`code`),mN(182,`caption-tag-11`),lg(),ql(183,`span`,44),Ml(184,`code`),mN(185,`caption-tag-12`),lg(),ql(186,`span`,45),Ml(187,`code`),mN(188,`caption-tag-13`),lg(),ql(189,`span`,46),Ml(190,`code`),mN(191,`caption-tag-14`),lg(),ql(192,`span`,47),Ml(193,`code`),mN(194,`caption-tag-15`),lg()(),Ml(195,`li`),ql(196,`span`,48),Ml(197,`code`),mN(198,`caption-tag-16`),lg(),ql(199,`span`,49),Ml(200,`code`),mN(201,`caption-tag-17`),lg(),ql(202,`span`,50),Ml(203,`code`),mN(204,`caption-tag-18`),lg(),ql(205,`span`,51),Ml(206,`code`),mN(207,`caption-tag-19`),lg(),ql(208,`span`,52),Ml(209,`code`),mN(210,`caption-tag-20`),lg()(),Ml(211,`li`),ql(212,`span`,53),Ml(213,`code`),mN(214,`caption-tag-21`),lg(),ql(215,`span`,54),Ml(216,`code`),mN(217,`caption-tag-22`),lg(),ql(218,`span`,55),Ml(219,`code`),mN(220,`caption-tag-23`),lg(),ql(221,`span`,56),Ml(222,`code`),mN(223,`caption-tag-24`),lg(),ql(224,`span`,57),Ml(225,`code`),mN(226,`caption-tag-25`),lg()(),Ml(227,`li`),ql(228,`span`,58),Ml(229,`code`),mN(230,`caption-tag-26`),lg(),ql(231,`span`,59),Ml(232,`code`),mN(233,`caption-tag-27`),lg(),ql(234,`span`,60),Ml(235,`code`),mN(236,`caption-tag-28`),lg(),ql(237,`span`,61),Ml(238,`code`),mN(239,`caption-tag-29`),lg(),ql(240,`span`,62),Ml(241,`code`),mN(242,`caption-tag-30`),lg()(),Ml(243,`li`),ql(244,`span`,63),Ml(245,`code`),mN(246,`caption-tag-31`),lg(),ql(247,`span`,64),Ml(248,`code`),mN(249,`caption-tag-32`),lg(),ql(250,`span`,65),Ml(251,`code`),mN(252,`caption-tag-33`),lg(),ql(253,`span`,66),Ml(254,`code`),mN(255,`caption-tag-34`),lg(),ql(256,`span`,67),Ml(257,`code`),mN(258,`caption-tag-35`),lg()()(),Ml(259,`p`),mN(260,`Exemplo de uso:`),lg(),Ml(261,`pre`)(262,`code`),mN(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),lg()()()(),Ml(264,`tr`,13)(265,`td`,14)(266,`div`,15)(267,`span`,16),mN(268,` p-icon`),ql(269,`br`),lg()()(),Ml(270,`td`,17)(271,`code`,68),mN(272,`PoBadgeIcon`),lg()(),Ml(273,`td`,19),mN(274,`-`),lg(),Ml(275,`td`,20)(276,`em`)(277,`strong`),mN(278,`(opcional)`),lg()(),Ml(279,`p`),mN(280,`Ícone exibido no `),Ml(281,`code`),mN(282,`po-badge`),lg(),mN(283,`.`),lg(),Ml(284,`p`),mN(285,`Para exibir icone do status atual declare a propriedade `),Ml(286,`code`),mN(287,`p-icon`),lg(),mN(288,`. conforme exemplo abaixo:`),lg(),Ml(289,`pre`)(290,`code`),mN(291,`<po-badge [p-icon]="true"></po-badge>
`),lg()(),Ml(292,`p`),mN(293,`É possível usar qualquer um dos ícones da `),Ml(294,`a`,69),mN(295,`Biblioteca de ícones`),lg(),mN(296,`. conforme exemplo abaixo:`),lg(),Ml(297,`pre`)(298,`code`),mN(299,`<po-badge p-icon="an an-user"></po-badge>
`),lg()(),Ml(300,`p`),mN(301,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(302,`em`),mN(303,`Font Awesome`),lg(),mN(304,`, da seguinte forma:`),lg(),Ml(305,`pre`)(306,`code`),mN(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),lg()(),Ml(308,`p`),mN(309,`Outra opção seria a customização do ícone através do `),Ml(310,`code`),mN(311,`TemplateRef`),lg(),mN(312,`, conforme exemplo abaixo:`),lg(),Ml(313,`pre`)(314,`code`),mN(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()()()(),Ml(316,`tr`,13)(317,`td`,14)(318,`div`,15)(319,`span`,16),mN(320,` p-show-border`),ql(321,`br`),lg()()(),Ml(322,`td`,17)(323,`code`,70),mN(324,`boolean`),lg()(),Ml(325,`td`,19),mN(326,`-`),lg(),Ml(327,`td`,20)(328,`p`),mN(329,`Exibe uma borda para o `),Ml(330,`code`),mN(331,`po-badge`),lg()(),Ml(332,`blockquote`)(333,`p`),mN(334,`Pode personalizar cor da bordar com a propriedade `),Ml(335,`code`),mN(336,`p-color-border`),lg()()()()(),Ml(337,`tr`,13)(338,`td`,14)(339,`div`,15)(340,`span`,16),mN(341,` p-size`),ql(342,`br`),lg()()(),Ml(343,`td`,17)(344,`code`,71),mN(345,`PoBadgeSize`),lg()(),Ml(346,`td`,19)(347,`p`)(348,`code`),mN(349,`medium`),lg()()(),Ml(350,`td`,20)(351,`p`),mN(352,`Define o tamanho do `),Ml(353,`code`),mN(354,`po-badge`),lg()(),Ml(355,`p`),mN(356,`Valores válidos:`),lg(),Ml(357,`ul`)(358,`li`)(359,`code`),mN(360,`small`),lg(),mN(361,`: o `),Ml(362,`code`),mN(363,`po-badge`),lg(),mN(364,` fica do tamanho padrão, com 8px de altura.;`),lg(),Ml(365,`li`)(366,`code`),mN(367,`medium`),lg(),mN(368,`: o `),Ml(369,`code`),mN(370,`po-badge`),lg(),mN(371,` fica do tamanho padrão, com 16px de altura.;`),lg(),Ml(372,`li`)(373,`code`),mN(374,`large`),lg(),mN(375,`: o `),Ml(376,`code`),mN(377,`po-badge`),lg(),mN(378,` fica do tamanho padrão, com 24px de altura.;`),lg()()()(),Ml(379,`tr`,13)(380,`td`,14)(381,`div`,15)(382,`span`,16),mN(383,` p-status`),ql(384,`br`),lg()()(),Ml(385,`td`,17)(386,`code`,72),mN(387,`PoBadgeStatus`),lg()(),Ml(388,`td`,19),mN(389,`-`),lg(),Ml(390,`td`,20)(391,`p`),mN(392,`Define o estado do `),Ml(393,`code`),mN(394,`po-badge`),lg()(),Ml(395,`p`),mN(396,`Valores válidos:`),lg(),Ml(397,`ul`)(398,`li`)(399,`code`),mN(400,`positive`),lg(),mN(401,`: Define a cor do `),Ml(402,`code`),mN(403,`po-badge`),lg(),mN(404,` com a cor de feedback positivo.;`),lg(),Ml(405,`li`)(406,`code`),mN(407,`negative`),lg(),mN(408,`: Define a cor do `),Ml(409,`code`),mN(410,`po-badge`),lg(),mN(411,` com a cor de feedback negative.;`),lg(),Ml(412,`li`)(413,`code`),mN(414,`warning`),lg(),mN(415,`: Define a cor do `),Ml(416,`code`),mN(417,`po-badge`),lg(),mN(418,` com a cor de feedback warning.;`),lg(),Ml(419,`li`)(420,`code`),mN(421,`disabled`),lg(),mN(422,`: Define a cor do `),Ml(423,`code`),mN(424,`po-badge`),lg(),mN(425,` com a cor de feedback disabled;`),lg()()()(),Ml(426,`tr`,13)(427,`td`,14)(428,`div`,15)(429,`span`,16),mN(430,` p-value`),ql(431,`br`),lg()()(),Ml(432,`td`,17)(433,`code`,73),mN(434,`number`),lg()(),Ml(435,`td`,19),mN(436,`-`),lg(),Ml(437,`td`,20)(438,`p`),mN(439,`Número exibido no componente, caso o mesmo seja maior que 9 o valor exibido será 9+.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Me=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Badge`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-badge-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-badge-basic-view`)(6,`sample-po-badge-labs-view`)(7,`sample-po-badge-message-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,re,de,ce,ge],encapsulation:2,changeDetection:1})}return a})()}];var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(Me),NL]})}return a})();var $e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,be]})}return a})();export{$e as DocPoBadgeModule};