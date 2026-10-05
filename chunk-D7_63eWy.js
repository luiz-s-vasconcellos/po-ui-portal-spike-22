import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hi as kx,Hr as RE,Ir as Ox,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Oi as h_,Qn as C9,S as AP,Sa as zO,Vi as kt,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bn as roe,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,fn as ni,i as _a,in as kte,j as Ec,jr as Nx,k as D4,ki as he,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,xi as f_,zi as kL}from"./main-BRRQVWD7.js";var le=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-badge-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&Kc(0,`po-badge`)},dependencies:[AP],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-badge-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Badge Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-badge-basic/sample-po-badge-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-badge></po-badge>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-badge-basic/sample-po-badge-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-badge-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,fe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,le],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:`showBorder`,label:`Show Border`}];iconsOptions=[{label:`an-check`,value:`an an-check`},{label:`an-check-circle`,value:`an an-check-circle`},{label:`an an-check`,value:`an an-check`},{label:`fa-minus`,value:`fa fa-minus`},{label:`true (Enabled when status is settled)`,value:`true`,disabled:!0},{label:`None`,value:`false`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];statusOptions=[{label:`Positive`,value:`positive`},{label:`Negative`,value:`negative`},{label:`Warning`,value:`warning`},{label:`Disabled`,value:`disabled`},{label:`None`,value:`none`}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p===`none`&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p===`true`}restore(){this.size=`medium`,this.status=void 0,this.icon=void 0,this.color=`color-07`,this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-badge-labs`]],standalone:!1,decls:15,vars:17,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-color`,`p-icon`,`p-size`,`p-status`,`p-show-border`,`p-value`],[`name`,`value`,`p-label`,`Value`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min`],[`name`,`color`,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,i){if(l&1){let g=Bx();Ac(0,`div`,1),Kc(1,`po-badge`,2),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,1)(6,`po-number`,3),RE(`ngModelChange`,function(r){return Jv(g),DN(i.value,r)||(i.value=r),e_(r)}),ug(),p0(),Ac(7,`po-input`,4),RE(`ngModelChange`,function(r){return Jv(g),DN(i.color,r)||(i.color=r),e_(r)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-checkbox-group`,5),RE(`ngModelChange`,function(r){return Jv(g),DN(i.properties,r)||(i.properties=r),e_(r)}),pt(`p-change`,function(r){return i.propertiesChange(r)}),ug(),p0(),Ac(10,`po-radio-group`,6),RE(`ngModelChange`,function(r){return Jv(g),DN(i.status,r)||(i.status=r),e_(r)}),pt(`p-change`,function(r){return i.statusChange(r)}),ug(),p0(),Ac(11,`po-radio-group`,7),RE(`ngModelChange`,function(r){return Jv(g),DN(i.size,r)||(i.size=r),e_(r)}),ug(),p0(),Ac(12,`po-radio-group`,8),RE(`ngModelChange`,function(r){return Jv(g),DN(i.icon,r)||(i.icon=r),e_(r)}),pt(`p-change`,function(r){return i.iconsChange(r)}),ug(),p0(),ug(),Ac(13,`div`,1)(14,`po-button`,9),pt(`p-click`,function(){return i.restore()}),ug()()()}l&2&&(Hp(),cE(`p-color`,i.color)(`p-icon`,i.showIcon?!0:i.icon)(`p-size`,i.size)(`p-status`,i.status)(`p-show-border`,i.properties.includes(`showBorder`))(`p-value`,i.value),Hp(5),TE(`ngModel`,i.value),cE(`p-min`,0),m0(),Hp(),TE(`ngModel`,i.color),m0(),Hp(2),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.status),cE(`p-options`,i.statusOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizesOptions),m0(),Hp(),TE(`ngModel`,i.icon),cE(`p-options`,i.iconsOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,roe,kte,AP],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-badge-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Badge Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-badge-labs/sample-po-badge-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-badge-labs/sample-po-badge-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-badge-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,se],encapsulation:2,changeDetection:1})}return a})();function Pe(a,he){if(a&1&&(Ac(0,`div`,1)(1,`po-container`)(2,`div`,2),f_(),Ac(3,`svg`,3),Kc(4,`circle`,4)(5,`path`,5),ug(),h_(),Ac(6,`p`,6),vN(7),Kc(8,`po-badge`,7),ug()()()()),a&2){let p=he.$implicit;Hp(3),kt(`kind`,p.status),Hp(4),mg(` `,p.nome,` `),Hp(),cE(`p-status`,p.status===`online`?`positive`:`negative`)}}var me=(()=>{class a{users=[{nome:`Leonardo da vinci`,status:`online`},{nome:`Johann Pachelbel`,status:`offline`},{nome:`Amadeus Mozart`,status:`offline`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-badge-message`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`,`po-mt-3`],[1,`po-mb-1`],[1,`card`],[`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`po-mr-2`],[`cx`,`12`,`cy`,`12`,`r`,`11`],[`d`,`m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9`,`fill`,`none`],[1,`po-mr-2`,`card-name-user`,`po-text-color-neutral-dark-40`],[1,`po-badge-wrap`,3,`p-status`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`div`),Ox(2,Pe,9,3,`div`,1,Nx),ug()()),l&2&&(Hp(2),kx(i.users))},dependencies:[Ec,AP],styles:[`.po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}`],changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-badge-message-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Badge Message`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-badge-message/sample-po-badge-message.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row po-mt-3">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-badge-message/sample-po-badge-message.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-badge-message/sample-po-badge-message.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.po-badge-wrap {
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
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-badge-message`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ye,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,me],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-badge-doc`]],standalone:!1,decls:440,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeIcon`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeSize`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeStatus`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoBadgeModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-badge.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoBadgeComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Utilizado para exibir a quantidade de notificações. `),ug()(),Ac(15,`div`,6)(16,`h4`,7),vN(17,`Seletor`),ug(),Ac(18,`pre`,8),vN(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),ug()(),Ac(20,`h4`,9),vN(21,`Propriedades`),ug(),Ac(22,`table`,10)(23,`tr`,11)(24,`th`,12),vN(25,`Nome`),ug(),Ac(26,`th`,12),vN(27,`Tipo`),ug(),Ac(28,`th`,12),vN(29,`Padrão`),ug(),Ac(30,`th`,12),vN(31,`Descrição`),ug()(),Ac(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),vN(36,` p-aria-label`),Kc(37,`br`),ug()()(),Ac(38,`td`,17)(39,`code`,18),vN(40,`string`),ug()(),Ac(41,`td`,19),vN(42,`-`),ug(),Ac(43,`td`,20)(44,`p`),vN(45,`Define um `),Ac(46,`code`),vN(47,`aria-label`),ug(),vN(48,` para o `),Ac(49,`code`),vN(50,`po-badge`),ug()()()(),Ac(51,`tr`,13)(52,`td`,14)(53,`div`,15)(54,`span`,16),vN(55,` p-color`),Kc(56,`br`),ug()()(),Ac(57,`td`,17)(58,`code`,18),vN(59,`string`),ug()(),Ac(60,`td`,19)(61,`p`)(62,`code`),vN(63,`color-07`),ug()()(),Ac(64,`td`,20)(65,`em`)(66,`strong`),vN(67,`(opcional)`),ug()(),Ac(68,`p`),vN(69,`Determina a cor do `),Ac(70,`code`),vN(71,`po-badge`),ug(),vN(72,`. As maneiras de customizar as cores são:`),ug(),Ac(73,`ul`)(74,`li`),vN(75,`Hexadeximal, por exemplo `),Ac(76,`code`),vN(77,`#c64840`),ug(),vN(78,`;`),ug(),Ac(79,`li`),vN(80,`RGB, como `),Ac(81,`code`),vN(82,`rgb(0, 0, 165)`),ug(),vN(83,`;`),ug(),Ac(84,`li`),vN(85,`O nome da cor, por exemplo `),Ac(86,`code`),vN(87,`blue`),ug(),vN(88,`;`),ug(),Ac(89,`li`),vN(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Ac(91,`ul`)(92,`li`),Kc(93,`span`,21),Ac(94,`code`),vN(95,`color-01`),ug()(),Ac(96,`li`),Kc(97,`span`,22),Ac(98,`code`),vN(99,`color-02`),ug()(),Ac(100,`li`),Kc(101,`span`,23),Ac(102,`code`),vN(103,`color-03`),ug()(),Ac(104,`li`),Kc(105,`span`,24),Ac(106,`code`),vN(107,`color-04`),ug()(),Ac(108,`li`),Kc(109,`span`,25),Ac(110,`code`),vN(111,`color-05`),ug()(),Ac(112,`li`),Kc(113,`span`,26),Ac(114,`code`),vN(115,`color-06`),ug()(),Ac(116,`li`),Kc(117,`span`,27),Ac(118,`code`),vN(119,`color-07`),ug()(),Ac(120,`li`),Kc(121,`span`,28),Ac(122,`code`),vN(123,`color-08`),ug()(),Ac(124,`li`),Kc(125,`span`,29),Ac(126,`code`),vN(127,`color-09`),ug()(),Ac(128,`li`),Kc(129,`span`,30),Ac(130,`code`),vN(131,`color-10`),ug()(),Ac(132,`li`),Kc(133,`span`,31),Ac(134,`code`),vN(135,`color-11`),ug()(),Ac(136,`li`),Kc(137,`span`,32),Ac(138,`code`),vN(139,`color-12`),ug()()()()(),Ac(140,`blockquote`)(141,`p`),vN(142,`Também é possível utilizar as 35 cores da paleta `),Ac(143,`strong`),vN(144,`Caption Tag Colors`),ug(),vN(145,`:`),ug()(),Ac(146,`ul`)(147,`li`),Kc(148,`span`,33),Ac(149,`code`),vN(150,`caption-tag-01`),ug(),Kc(151,`span`,34),Ac(152,`code`),vN(153,`caption-tag-02`),ug(),Kc(154,`span`,35),Ac(155,`code`),vN(156,`caption-tag-03`),ug(),Kc(157,`span`,36),Ac(158,`code`),vN(159,`caption-tag-04`),ug(),Kc(160,`span`,37),Ac(161,`code`),vN(162,`caption-tag-05`),ug()(),Ac(163,`li`),Kc(164,`span`,38),Ac(165,`code`),vN(166,`caption-tag-06`),ug(),Kc(167,`span`,39),Ac(168,`code`),vN(169,`caption-tag-07`),ug(),Kc(170,`span`,40),Ac(171,`code`),vN(172,`caption-tag-08`),ug(),Kc(173,`span`,41),Ac(174,`code`),vN(175,`caption-tag-09`),ug(),Kc(176,`span`,42),Ac(177,`code`),vN(178,`caption-tag-10`),ug()(),Ac(179,`li`),Kc(180,`span`,43),Ac(181,`code`),vN(182,`caption-tag-11`),ug(),Kc(183,`span`,44),Ac(184,`code`),vN(185,`caption-tag-12`),ug(),Kc(186,`span`,45),Ac(187,`code`),vN(188,`caption-tag-13`),ug(),Kc(189,`span`,46),Ac(190,`code`),vN(191,`caption-tag-14`),ug(),Kc(192,`span`,47),Ac(193,`code`),vN(194,`caption-tag-15`),ug()(),Ac(195,`li`),Kc(196,`span`,48),Ac(197,`code`),vN(198,`caption-tag-16`),ug(),Kc(199,`span`,49),Ac(200,`code`),vN(201,`caption-tag-17`),ug(),Kc(202,`span`,50),Ac(203,`code`),vN(204,`caption-tag-18`),ug(),Kc(205,`span`,51),Ac(206,`code`),vN(207,`caption-tag-19`),ug(),Kc(208,`span`,52),Ac(209,`code`),vN(210,`caption-tag-20`),ug()(),Ac(211,`li`),Kc(212,`span`,53),Ac(213,`code`),vN(214,`caption-tag-21`),ug(),Kc(215,`span`,54),Ac(216,`code`),vN(217,`caption-tag-22`),ug(),Kc(218,`span`,55),Ac(219,`code`),vN(220,`caption-tag-23`),ug(),Kc(221,`span`,56),Ac(222,`code`),vN(223,`caption-tag-24`),ug(),Kc(224,`span`,57),Ac(225,`code`),vN(226,`caption-tag-25`),ug()(),Ac(227,`li`),Kc(228,`span`,58),Ac(229,`code`),vN(230,`caption-tag-26`),ug(),Kc(231,`span`,59),Ac(232,`code`),vN(233,`caption-tag-27`),ug(),Kc(234,`span`,60),Ac(235,`code`),vN(236,`caption-tag-28`),ug(),Kc(237,`span`,61),Ac(238,`code`),vN(239,`caption-tag-29`),ug(),Kc(240,`span`,62),Ac(241,`code`),vN(242,`caption-tag-30`),ug()(),Ac(243,`li`),Kc(244,`span`,63),Ac(245,`code`),vN(246,`caption-tag-31`),ug(),Kc(247,`span`,64),Ac(248,`code`),vN(249,`caption-tag-32`),ug(),Kc(250,`span`,65),Ac(251,`code`),vN(252,`caption-tag-33`),ug(),Kc(253,`span`,66),Ac(254,`code`),vN(255,`caption-tag-34`),ug(),Kc(256,`span`,67),Ac(257,`code`),vN(258,`caption-tag-35`),ug()()(),Ac(259,`p`),vN(260,`Exemplo de uso:`),ug(),Ac(261,`pre`)(262,`code`),vN(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),ug()()()(),Ac(264,`tr`,13)(265,`td`,14)(266,`div`,15)(267,`span`,16),vN(268,` p-icon`),Kc(269,`br`),ug()()(),Ac(270,`td`,17)(271,`code`,68),vN(272,`PoBadgeIcon`),ug()(),Ac(273,`td`,19),vN(274,`-`),ug(),Ac(275,`td`,20)(276,`em`)(277,`strong`),vN(278,`(opcional)`),ug()(),Ac(279,`p`),vN(280,`Ícone exibido no `),Ac(281,`code`),vN(282,`po-badge`),ug(),vN(283,`.`),ug(),Ac(284,`p`),vN(285,`Para exibir icone do status atual declare a propriedade `),Ac(286,`code`),vN(287,`p-icon`),ug(),vN(288,`. conforme exemplo abaixo:`),ug(),Ac(289,`pre`)(290,`code`),vN(291,`<po-badge [p-icon]="true"></po-badge>
`),ug()(),Ac(292,`p`),vN(293,`É possível usar qualquer um dos ícones da `),Ac(294,`a`,69),vN(295,`Biblioteca de ícones`),ug(),vN(296,`. conforme exemplo abaixo:`),ug(),Ac(297,`pre`)(298,`code`),vN(299,`<po-badge p-icon="an an-user"></po-badge>
`),ug()(),Ac(300,`p`),vN(301,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(302,`em`),vN(303,`Font Awesome`),ug(),vN(304,`, da seguinte forma:`),ug(),Ac(305,`pre`)(306,`code`),vN(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),ug()(),Ac(308,`p`),vN(309,`Outra opção seria a customização do ícone através do `),Ac(310,`code`),vN(311,`TemplateRef`),ug(),vN(312,`, conforme exemplo abaixo:`),ug(),Ac(313,`pre`)(314,`code`),vN(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()()()(),Ac(316,`tr`,13)(317,`td`,14)(318,`div`,15)(319,`span`,16),vN(320,` p-show-border`),Kc(321,`br`),ug()()(),Ac(322,`td`,17)(323,`code`,70),vN(324,`boolean`),ug()(),Ac(325,`td`,19),vN(326,`-`),ug(),Ac(327,`td`,20)(328,`p`),vN(329,`Exibe uma borda para o `),Ac(330,`code`),vN(331,`po-badge`),ug()(),Ac(332,`blockquote`)(333,`p`),vN(334,`Pode personalizar cor da bordar com a propriedade `),Ac(335,`code`),vN(336,`p-color-border`),ug()()()()(),Ac(337,`tr`,13)(338,`td`,14)(339,`div`,15)(340,`span`,16),vN(341,` p-size`),Kc(342,`br`),ug()()(),Ac(343,`td`,17)(344,`code`,71),vN(345,`PoBadgeSize`),ug()(),Ac(346,`td`,19)(347,`p`)(348,`code`),vN(349,`medium`),ug()()(),Ac(350,`td`,20)(351,`p`),vN(352,`Define o tamanho do `),Ac(353,`code`),vN(354,`po-badge`),ug()(),Ac(355,`p`),vN(356,`Valores válidos:`),ug(),Ac(357,`ul`)(358,`li`)(359,`code`),vN(360,`small`),ug(),vN(361,`: o `),Ac(362,`code`),vN(363,`po-badge`),ug(),vN(364,` fica do tamanho padrão, com 8px de altura.;`),ug(),Ac(365,`li`)(366,`code`),vN(367,`medium`),ug(),vN(368,`: o `),Ac(369,`code`),vN(370,`po-badge`),ug(),vN(371,` fica do tamanho padrão, com 16px de altura.;`),ug(),Ac(372,`li`)(373,`code`),vN(374,`large`),ug(),vN(375,`: o `),Ac(376,`code`),vN(377,`po-badge`),ug(),vN(378,` fica do tamanho padrão, com 24px de altura.;`),ug()()()(),Ac(379,`tr`,13)(380,`td`,14)(381,`div`,15)(382,`span`,16),vN(383,` p-status`),Kc(384,`br`),ug()()(),Ac(385,`td`,17)(386,`code`,72),vN(387,`PoBadgeStatus`),ug()(),Ac(388,`td`,19),vN(389,`-`),ug(),Ac(390,`td`,20)(391,`p`),vN(392,`Define o estado do `),Ac(393,`code`),vN(394,`po-badge`),ug()(),Ac(395,`p`),vN(396,`Valores válidos:`),ug(),Ac(397,`ul`)(398,`li`)(399,`code`),vN(400,`positive`),ug(),vN(401,`: Define a cor do `),Ac(402,`code`),vN(403,`po-badge`),ug(),vN(404,` com a cor de feedback positivo.;`),ug(),Ac(405,`li`)(406,`code`),vN(407,`negative`),ug(),vN(408,`: Define a cor do `),Ac(409,`code`),vN(410,`po-badge`),ug(),vN(411,` com a cor de feedback negative.;`),ug(),Ac(412,`li`)(413,`code`),vN(414,`warning`),ug(),vN(415,`: Define a cor do `),Ac(416,`code`),vN(417,`po-badge`),ug(),vN(418,` com a cor de feedback warning.;`),ug(),Ac(419,`li`)(420,`code`),vN(421,`disabled`),ug(),vN(422,`: Define a cor do `),Ac(423,`code`),vN(424,`po-badge`),ug(),vN(425,` com a cor de feedback disabled;`),ug()()()(),Ac(426,`tr`,13)(427,`td`,14)(428,`div`,15)(429,`span`,16),vN(430,` p-value`),Kc(431,`br`),ug()()(),Ac(432,`td`,17)(433,`code`,73),vN(434,`number`),ug()(),Ac(435,`td`,19),vN(436,`-`),ug(),Ac(437,`td`,20)(438,`p`),vN(439,`Número exibido no componente, caso o mesmo seja maior que 9 o valor exibido será 9+.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Me=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Badge`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-badge-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-badge-basic-view`)(6,`sample-po-badge-labs-view`)(7,`sample-po-badge-message-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,re,de,ce,ge],encapsulation:2,changeDetection:1})}return a})()}];var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Me),kL]})}return a})();var $e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,be]})}return a})();export{$e as DocPoBadgeModule};