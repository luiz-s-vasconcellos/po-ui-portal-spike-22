import{$i as pt,Br as Qn,Dr as LP,F as Fl,Gi as mg,Gn as Ac,Gr as Rx,Hi as kx,Hr as RE,In as xs,Ir as Ox,Ji as p0,Jn as BP,Jt as gae,Kn as Ax,Lt as bae,M as Ef,On as tb,Qn as C9,R as G5,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,ga as wN,gn as poe,i as _a,in as kte,jr as Nx,k as D4,ki as he$1,kn as v4,li as bN,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ti as Wx,ua as ug,wr as Kc,zi as kL}from"./main-AGY457H2.js";var Se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-value`,`PO Tag`]],template:function(r,i){r&1&&Kc(0,`po-tag`,0)},dependencies:[xs],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tag Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tag-basic/sample-po-tag-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tag p-value="PO Tag"> </po-tag>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tag-basic/sample-po-tag-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tag-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return o})();function Me(o,c){if(o&1){let l=Bx();Ac(0,`po-select`,14),RE(`ngModelChange`,function(i){Jv(l);let g=Wx();return DN(g.icon,i)||(g.icon=i),e_(i)}),ug(),p0()}if(o&2){let l=Wx();TE(`ngModel`,l.icon),cE(`p-options`,l.iconList),m0()}}function Be(o,c){if(o&1){let l=Bx();Ac(0,`po-switch`,15),RE(`ngModelChange`,function(i){Jv(l);let g=Wx();return DN(g.icon,i)||(g.icon=i),e_(i)}),ug(),p0()}if(o&2){let l=Wx();TE(`ngModel`,l.icon),m0()}}var xe=(()=>{class o{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:`removable`,label:`Removable`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];orientationOptions=[{label:`Horizontal`,value:tb.Horizontal},{label:`Vertical`,value:tb.Vertical}];typeOptions=[{label:`None`,value:void 0},{label:`Info`,value:Fl.Info},{label:`Danger`,value:Fl.Danger},{label:`Success`,value:Fl.Success},{label:`Warning`,value:Fl.Warning},{label:`Neutral`,value:Fl.Neutral}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}propertiesChange(l){let r=[...this.propertiesOptions];l.includes(`removable`)?(r[1]={value:`disabled`,label:`Disabled`,disabled:!1},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!==`disabled`)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value=`PO Tag`,this.type=void 0,this.event=``,this.textColor=void 0,this.properties=[]}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-labs`]],standalone:!1,decls:21,vars:22,consts:[[`f`,`ngForm`],[3,`p-click`,`p-color`,`p-disabled`,`p-removable`,`p-icon`,`p-text-color`,`p-label`,`p-orientation`,`p-type`,`p-value`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`color`,`p-clean`,``,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`textColor`,`p-clean`,``,`p-label`,`Text color`,`p-help`,`color-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModel`],[`name`,`orientation`,`p-columns`,`1`,`p-label`,`Orientation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let g=Bx();Ac(0,`po-tag`,1),pt(`p-click`,function(){return i.changeEvent(`p-click`)}),ug(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3),ug(),Kc(4,`po-divider`),Ac(5,`form`,null,0)(7,`div`,2)(8,`po-input`,4),RE(`ngModelChange`,function(d){return Jv(g),DN(i.label,d)||(i.label=d),e_(d)}),ug(),p0(),Ac(9,`po-input`,5),RE(`ngModelChange`,function(d){return Jv(g),DN(i.value,d)||(i.value=d),e_(d)}),ug(),p0(),ug(),Ac(10,`div`,2)(11,`po-input`,6),RE(`ngModelChange`,function(d){return Jv(g),DN(i.color,d)||(i.color=d),e_(d)}),ug(),p0(),Ac(12,`po-input`,7),RE(`ngModelChange`,function(d){return Jv(g),DN(i.textColor,d)||(i.textColor=d),e_(d)}),ug(),p0(),Rx(13,Me,1,2,`po-select`,8),Ac(14,`po-checkbox-group`,9),RE(`ngModelChange`,function(d){return Jv(g),DN(i.properties,d)||(i.properties=d),e_(d)}),pt(`p-change`,function(d){return i.propertiesChange(d)}),ug(),p0(),Rx(15,Be,1,1,`po-switch`,10),ug(),Ac(16,`div`,2)(17,`po-radio-group`,11),RE(`ngModelChange`,function(d){return Jv(g),DN(i.orientation,d)||(i.orientation=d),e_(d)}),ug(),p0(),Ac(18,`po-radio-group`,12),RE(`ngModelChange`,function(d){return Jv(g),DN(i.type,d)||(i.type=d),e_(d)}),ug(),p0(),ug(),Ac(19,`div`,2)(20,`po-button`,13),pt(`p-click`,function(){return i.restore()}),ug()()()}r&2&&(cE(`p-color`,i.color)(`p-disabled`,i.properties.includes(`disabled`))(`p-removable`,i.properties.includes(`removable`))(`p-icon`,i.icon)(`p-text-color`,i.textColor)(`p-label`,i.label)(`p-orientation`,i.orientation)(`p-type`,i.type)(`p-value`,i.value),Hp(3),cE(`p-value`,i.event),Hp(5),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.value),m0(),Hp(2),TE(`ngModel`,i.color),m0(),Hp(),TE(`ngModel`,i.textColor),m0(),Hp(),Ax(i.type?-1:13),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),Ax(i.type?15:-1),Hp(2),TE(`ngModel`,i.orientation),cE(`p-options`,i.orientationOptions),m0(),Hp(),TE(`ngModel`,i.type),cE(`p-options`,i.typeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,poe,v4,xs,hoe],styles:[`.sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tag Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tag-labs/sample-po-tag-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    @if (!type) {
      <po-select class="po-md-6 po-mt-2" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconList">
      </po-select>
    }

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    @if (type) {
      <po-switch class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tag-labs/sample-po-tag-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styleUrls: ['./sample-po-tag-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'removable', label: 'Removable' }];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[1] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      this.propertiesOptions = value.filter(option => option.value !== 'disabled');
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-tag-labs/sample-po-tag-labs.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-tag-labs`),ug(),Kc(29,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Fe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,xe],encapsulation:2,changeDetection:1})}return o})();function Oe(o,c){if(o&1&&Kc(0,`po-tag`,12),o&2){let l=c.$implicit;cE(`p-label`,l.label)(`p-type`,l.type)(`p-value`,l.value)}}function Ie(o,c){if(o&1&&(Ac(0,`po-widget`,15)(1,`div`,3),Kc(2,`po-info`,16)(3,`po-tag`,17),ug()()),o&2){let l=c.$implicit;Hp(2),cE(`p-label`,l.label)(`p-value`,l.value),Hp(),cE(`p-type`,l.type)(`p-value`,l.text)}}function Ve(o,c){if(o&1&&(Ac(0,`po-tab`,14),Ox(1,Ie,4,4,`po-widget`,15,Nx),ug()),o&2){let l=c.$implicit;cE(`p-label`,bN(l.month)),Hp(),kx(l.details)}}var fe=(()=>{class o{investiments=[{label:`Stocks`,type:`danger`,value:`Low -3.50%`},{label:`Treasury bills`,type:`success`,value:`Growing +2.25%`},{label:`Real estate`,type:`warning`,value:`Risk -0.02%`},{label:`Mutual fund`,type:`success`,value:`Growing +3.00%`}];items=[{month:`June`,details:[{label:`Automatic Payment`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Credit Card`,value:`$ 230`,type:`danger`,text:`Expense`},{label:`Personal Loan`,value:`$ 150`,type:`warning`,text:`Future`}]},{month:`July`,details:[{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Car insurance`,value:`$ 40`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 200`,type:`success`,text:`Income`},{label:`Bank statement`,value:`$ 5`,type:`info`,text:`Document`},{label:`Deposit`,value:`$ 70`,type:`success`,text:`Income`}]},{month:`August`,details:[{label:`Student Loan`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 50`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Automatic Payment`,value:`$ 230`,type:`warning`,text:`Future`},{label:`Credit Card`,value:`$ 150`,type:`warning`,text:`Future`}]}];advantages=[{title:`Platinum Card:`,description:`best card in the market. You earn points and have concierge service and cultural advice.`},{title:`Exclusive agencies:`,description:`environments designed to offer comfort and privacy.`},{title:`Unique experience`,description:`with exclusivity background in travel, culture, entertainment and much more.`},{title:`Progressive discounts`,description:`on service packages, according to the volume of investments.`},{title:`Free tax:`,description:`withdrawals and Transfers Between Unlimited Accounts.`}];userData={name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`};static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-bank-account`]],standalone:!1,decls:20,vars:4,consts:[[`p-title`,`Bank Statement`],[1,`po-mt-1`,`po-lg-7`],[`p-title`,`User information`,1,`po-md-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Name`,3,`p-value`],[`p-value`,`Premium Account`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-title`,`My Investiments`,1,`po-md-12`,`po-sm-mt-1`,`po-mt-1`,`po-lg-mt-1`],[1,`po-md-6`,`po-lg-3`,3,`p-label`,`p-type`,`p-value`],[`p-title`,`Last three month operations`,1,`po-mt-1`,`po-lg-5`],[`p-active`,``,3,`p-label`],[1,`po-lg-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[`p-label-size`,`6`,`p-orientation`,`horizontal`,1,`po-lg-9`,`po-md-8`,3,`p-label`,`p-value`],[`p-icon`,``,`p-orientation`,`horizontal`,1,`po-lg-3`,`po-md-4`,3,`p-type`,`p-value`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`div`,1)(2,`po-widget`,2)(3,`div`,3)(4,`div`,4),Kc(5,`po-avatar`,5),ug(),Ac(6,`div`,6)(7,`div`,7),Kc(8,`po-info`,8)(9,`po-tag`,9),ug(),Ac(10,`div`,7),Kc(11,`po-info`,10),ug()()()(),Ac(12,`po-widget`,11)(13,`div`,3),Ox(14,Oe,1,3,`po-tag`,12,Nx),ug()()(),Ac(16,`po-widget`,13)(17,`po-tabs`),Ox(18,Ve,3,2,`po-tab`,14,Nx),ug()()()),r&2&&(Hp(5),cE(`p-src`,wN(`assets/graphics/`,i.userData.photo)),Hp(3),cE(`p-value`,i.userData.name),Hp(3),cE(`p-value`,i.userData.email),Hp(3),kx(i.investiments),Hp(4),kx(i.items))},dependencies:[G5,xs,hoe,$ze,gae,bae,Ooe],encapsulation:2,changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-bank-account-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tag - Bank Account`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        @for (investiment of investiments; track investiment) {
          <po-tag
            class="po-md-6 po-lg-3"
            [p-label]="investiment.label"
            [p-type]="investiment.type"
            [p-value]="investiment.value"
          >
          </po-tag>
        }
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      @for (item of items; track item) {
        <po-tab p-active p-label="{ { item.month }}">
          @for (item of item.details; track item) {
            <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1">
              <div class="po-row">
                <po-info
                  class="po-lg-9 po-md-8"
                  p-label-size="6"
                  p-orientation="horizontal"
                  [p-label]="item.label"
                  [p-value]="item.value"
                >
                </po-info>
                <po-tag
                  class="po-lg-3 po-md-4"
                  p-icon
                  p-orientation="horizontal"
                  [p-type]="item.type"
                  [p-value]="item.text"
                >
                </po-tag>
              </div>
            </po-widget>
          }
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tag-bank-account`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,qe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,fe],encapsulation:2,changeDetection:1})}return o})();var j=(o,c)=>c.color;var Ne=(o,c)=>c.name;function He(o,c){if(o&1&&Kc(0,`po-tag`,3),o&2){let l=c.$implicit;cE(`p-color`,l.color)(`p-value`,l.label)}}function Re(o,c){if(o&1&&Kc(0,`po-tag`,5),o&2){let l=c.$implicit;cE(`p-color`,l.color)(`p-label`,l.label)(`p-value`,l.value)}}function $e(o,c){if(o&1&&Kc(0,`po-tag`,7),o&2){let l=c.$implicit;cE(`p-color`,l.color)(`p-icon`,l.icon)(`p-value`,l.label)}}function je(o,c){if(o&1&&Kc(0,`po-tag`,10),o&2){let l=c.$implicit;cE(`p-color`,l.color)(`p-value`,l.label)}}function Ge(o,c){if(o&1&&(Ac(0,`po-tab`,9)(1,`div`,2),Ox(2,je,1,2,`po-tag`,10,j),ug()()),o&2){let l=c.$implicit;cE(`p-label`,l.name),Hp(2),kx(l.tags)}}var Ce=(()=>{class o{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,`0`);return{label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:`Ativo`,value:`Em operacao`,color:`caption-tag-01`},{label:`Pendente`,value:`Aguardando aprovacao`,color:`caption-tag-06`},{label:`Em analise`,value:`Verificacao interna`,color:`caption-tag-11`},{label:`Concluido`,value:`Finalizado com sucesso`,color:`caption-tag-16`},{label:`Cancelado`,value:`Operacao cancelada`,color:`caption-tag-21`},{label:`Expirado`,value:`Prazo excedido`,color:`caption-tag-26`},{label:`Bloqueado`,value:`Acesso restrito`,color:`caption-tag-31`}];categories=[{label:`Financeiro`,color:`caption-tag-03`,icon:`an an-currency-circle-dollar`},{label:`Recursos Humanos`,color:`caption-tag-08`,icon:`an an-users`},{label:`Logistica`,color:`caption-tag-13`,icon:`an an-truck`},{label:`Vendas`,color:`caption-tag-18`,icon:`an an-shopping-cart-simple`},{label:`Suporte`,color:`caption-tag-23`,icon:`an an-headset`},{label:`Marketing`,color:`caption-tag-28`,icon:`an an-megaphone-simple`},{label:`TI`,color:`caption-tag-33`,icon:`an an-desktop-tower`}];families=[{name:`Familia 01-05`,tags:[{label:`caption-tag-01`,color:`caption-tag-01`},{label:`caption-tag-02`,color:`caption-tag-02`},{label:`caption-tag-03`,color:`caption-tag-03`},{label:`caption-tag-04`,color:`caption-tag-04`},{label:`caption-tag-05`,color:`caption-tag-05`}]},{name:`Familia 06-10`,tags:[{label:`caption-tag-06`,color:`caption-tag-06`},{label:`caption-tag-07`,color:`caption-tag-07`},{label:`caption-tag-08`,color:`caption-tag-08`},{label:`caption-tag-09`,color:`caption-tag-09`},{label:`caption-tag-10`,color:`caption-tag-10`}]},{name:`Familia 11-15`,tags:[{label:`caption-tag-11`,color:`caption-tag-11`},{label:`caption-tag-12`,color:`caption-tag-12`},{label:`caption-tag-13`,color:`caption-tag-13`},{label:`caption-tag-14`,color:`caption-tag-14`},{label:`caption-tag-15`,color:`caption-tag-15`}]},{name:`Familia 16-20`,tags:[{label:`caption-tag-16`,color:`caption-tag-16`},{label:`caption-tag-17`,color:`caption-tag-17`},{label:`caption-tag-18`,color:`caption-tag-18`},{label:`caption-tag-19`,color:`caption-tag-19`},{label:`caption-tag-20`,color:`caption-tag-20`}]},{name:`Familia 21-25`,tags:[{label:`caption-tag-21`,color:`caption-tag-21`},{label:`caption-tag-22`,color:`caption-tag-22`},{label:`caption-tag-23`,color:`caption-tag-23`},{label:`caption-tag-24`,color:`caption-tag-24`},{label:`caption-tag-25`,color:`caption-tag-25`}]},{name:`Familia 26-30`,tags:[{label:`caption-tag-26`,color:`caption-tag-26`},{label:`caption-tag-27`,color:`caption-tag-27`},{label:`caption-tag-28`,color:`caption-tag-28`},{label:`caption-tag-29`,color:`caption-tag-29`},{label:`caption-tag-30`,color:`caption-tag-30`}]},{name:`Familia 31-35`,tags:[{label:`caption-tag-31`,color:`caption-tag-31`},{label:`caption-tag-32`,color:`caption-tag-32`},{label:`caption-tag-33`,color:`caption-tag-33`},{label:`caption-tag-34`,color:`caption-tag-34`},{label:`caption-tag-35`,color:`caption-tag-35`}]}];static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-caption-tag-colors`]],standalone:!1,decls:17,vars:0,consts:[[`p-title`,`Caption Tag Colors`],[`p-title`,`Paleta completa - 35 cores`,1,`po-md-12`,`po-mb-1`],[1,`po-row`],[1,`po-md-3`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`],[`p-title`,`Status de processos`,1,`po-md-12`,`po-mb-1`],[`p-orientation`,`horizontal`,1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-label`,`p-value`],[`p-title`,`Categorias com icones`,1,`po-md-12`],[1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-icon`,`p-value`],[`p-title`,`Familias de cores`,1,`po-md-12`,`po-mb-1`],[3,`p-label`],[1,`po-md-4`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-widget`,1)(2,`div`,2),Ox(3,He,1,2,`po-tag`,3,j),ug()(),Ac(5,`po-widget`,4)(6,`div`,2),Ox(7,Re,1,3,`po-tag`,5,j),ug()(),Ac(9,`po-widget`,6)(10,`div`,2),Ox(11,$e,1,3,`po-tag`,7,j),ug()(),Ac(13,`po-widget`,8)(14,`po-tabs`),Ox(15,Ge,4,1,`po-tab`,9,Ne),ug()()()),r&2&&(Hp(3),kx(i.captionTags),Hp(4),kx(i.statusItems),Hp(4),kx(i.categories),Hp(4),kx(i.families))},dependencies:[xs,$ze,gae,bae,Ooe],encapsulation:2,changeDetection:1})}return o})();var Je=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-caption-tag-colors-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tag - Caption Tag Colors`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Caption Tag Colors">
  <po-widget class="po-md-12 po-mb-1" p-title="Paleta completa - 35 cores">
    <div class="po-row">
      @for (tag of captionTags; track tag.color) {
        <po-tag class="po-md-3 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Status de processos">
    <div class="po-row">
      @for (item of statusItems; track item.color) {
        <po-tag
          class="po-md-4 po-lg-3 po-mb-1"
          [p-color]="item.color"
          [p-label]="item.label"
          [p-value]="item.value"
          p-orientation="horizontal"
        >
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12" p-title="Categorias com icones">
    <div class="po-row">
      @for (cat of categories; track cat.color) {
        <po-tag class="po-md-4 po-lg-3 po-mb-1" [p-color]="cat.color" [p-icon]="cat.icon" [p-value]="cat.label">
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Familias de cores">
    <po-tabs>
      @for (family of families; track family.name) {
        <po-tab [p-label]="family.name">
          <div class="po-row">
            @for (tag of family.tags; track tag.color) {
              <po-tag class="po-md-4 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
            }
          </div>
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-caption-tag-colors',
  templateUrl: './sample-po-tag-caption-tag-colors.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagCaptionTagColorsComponent {
  captionTags = Array.from({ length: 35 }, (_, i) => {
    const index = String(i + 1).padStart(2, '0');
    return { label: \`Caption Tag \${index}\`, color: \`caption-tag-\${index}\` };
  });

  statusItems = [
    { label: 'Ativo', value: 'Em operacao', color: 'caption-tag-01' },
    { label: 'Pendente', value: 'Aguardando aprovacao', color: 'caption-tag-06' },
    { label: 'Em analise', value: 'Verificacao interna', color: 'caption-tag-11' },
    { label: 'Concluido', value: 'Finalizado com sucesso', color: 'caption-tag-16' },
    { label: 'Cancelado', value: 'Operacao cancelada', color: 'caption-tag-21' },
    { label: 'Expirado', value: 'Prazo excedido', color: 'caption-tag-26' },
    { label: 'Bloqueado', value: 'Acesso restrito', color: 'caption-tag-31' }
  ];

  categories = [
    { label: 'Financeiro', color: 'caption-tag-03', icon: 'an an-currency-circle-dollar' },
    { label: 'Recursos Humanos', color: 'caption-tag-08', icon: 'an an-users' },
    { label: 'Logistica', color: 'caption-tag-13', icon: 'an an-truck' },
    { label: 'Vendas', color: 'caption-tag-18', icon: 'an an-shopping-cart-simple' },
    { label: 'Suporte', color: 'caption-tag-23', icon: 'an an-headset' },
    { label: 'Marketing', color: 'caption-tag-28', icon: 'an an-megaphone-simple' },
    { label: 'TI', color: 'caption-tag-33', icon: 'an an-desktop-tower' }
  ];

  families = [
    {
      name: 'Familia 01-05',
      tags: [
        { label: 'caption-tag-01', color: 'caption-tag-01' },
        { label: 'caption-tag-02', color: 'caption-tag-02' },
        { label: 'caption-tag-03', color: 'caption-tag-03' },
        { label: 'caption-tag-04', color: 'caption-tag-04' },
        { label: 'caption-tag-05', color: 'caption-tag-05' }
      ]
    },
    {
      name: 'Familia 06-10',
      tags: [
        { label: 'caption-tag-06', color: 'caption-tag-06' },
        { label: 'caption-tag-07', color: 'caption-tag-07' },
        { label: 'caption-tag-08', color: 'caption-tag-08' },
        { label: 'caption-tag-09', color: 'caption-tag-09' },
        { label: 'caption-tag-10', color: 'caption-tag-10' }
      ]
    },
    {
      name: 'Familia 11-15',
      tags: [
        { label: 'caption-tag-11', color: 'caption-tag-11' },
        { label: 'caption-tag-12', color: 'caption-tag-12' },
        { label: 'caption-tag-13', color: 'caption-tag-13' },
        { label: 'caption-tag-14', color: 'caption-tag-14' },
        { label: 'caption-tag-15', color: 'caption-tag-15' }
      ]
    },
    {
      name: 'Familia 16-20',
      tags: [
        { label: 'caption-tag-16', color: 'caption-tag-16' },
        { label: 'caption-tag-17', color: 'caption-tag-17' },
        { label: 'caption-tag-18', color: 'caption-tag-18' },
        { label: 'caption-tag-19', color: 'caption-tag-19' },
        { label: 'caption-tag-20', color: 'caption-tag-20' }
      ]
    },
    {
      name: 'Familia 21-25',
      tags: [
        { label: 'caption-tag-21', color: 'caption-tag-21' },
        { label: 'caption-tag-22', color: 'caption-tag-22' },
        { label: 'caption-tag-23', color: 'caption-tag-23' },
        { label: 'caption-tag-24', color: 'caption-tag-24' },
        { label: 'caption-tag-25', color: 'caption-tag-25' }
      ]
    },
    {
      name: 'Familia 26-30',
      tags: [
        { label: 'caption-tag-26', color: 'caption-tag-26' },
        { label: 'caption-tag-27', color: 'caption-tag-27' },
        { label: 'caption-tag-28', color: 'caption-tag-28' },
        { label: 'caption-tag-29', color: 'caption-tag-29' },
        { label: 'caption-tag-30', color: 'caption-tag-30' }
      ]
    },
    {
      name: 'Familia 31-35',
      tags: [
        { label: 'caption-tag-31', color: 'caption-tag-31' },
        { label: 'caption-tag-32', color: 'caption-tag-32' },
        { label: 'caption-tag-33', color: 'caption-tag-33' },
        { label: 'caption-tag-34', color: 'caption-tag-34' },
        { label: 'caption-tag-35', color: 'caption-tag-35' }
      ]
    }
  ];
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tag-caption-tag-colors`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Je,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ce],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-tag-doc`]],standalone:!1,decls:1168,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTagOrientation`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTagModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-tag`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoTagComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),ug(),Ac(18,`p`),vN(19,`Além disso, é possível definir uma ação que será executada tanto ao `),Ac(20,`em`),vN(21,`click`),ug(),vN(22,` quanto através das teclas `),Ac(23,`em`),vN(24,`enter/space`),ug(),vN(25,` enquanto navega
utilizando a tecla `),Ac(26,`em`),vN(27,`tab`),ug(),vN(28,`.`),ug(),Ac(29,`p`),vN(30,`Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.`),ug(),Ac(31,`h4`),vN(32,`Tokens customizáveis`),ug(),Ac(33,`p`),vN(34,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(35,`blockquote`)(36,`p`),vN(37,`Para maiores informações, acesse o guia `),Ac(38,`a`,6),vN(39,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(40,`.`),ug()(),Ac(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),vN(45,`Propriedade`),ug(),Ac(46,`th`),vN(47,`Descrição`),ug(),Ac(48,`th`),vN(49,`Valor Padrão`),ug()()(),Ac(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),vN(54,`Default Values`),ug()(),Kc(55,`td`)(56,`td`),ug(),Ac(57,`tr`)(58,`td`)(59,`code`),vN(60,`--font-family`),ug()(),Ac(61,`td`),vN(62,`Família tipográfica usada`),ug(),Ac(63,`td`)(64,`code`),vN(65,`var(--font-family-theme)`),ug()()(),Ac(66,`tr`)(67,`td`)(68,`code`),vN(69,`--font-size`),ug()(),Ac(70,`td`),vN(71,`Tamanho da fonte`),ug(),Ac(72,`td`)(73,`code`),vN(74,`var(--font-size-sm)`),ug()()(),Ac(75,`tr`)(76,`td`)(77,`code`),vN(78,`--line-height`),ug()(),Ac(79,`td`),vN(80,`Tamanho da label`),ug(),Ac(81,`td`)(82,`code`),vN(83,`var(---line-height-sm)`),ug()()(),Ac(84,`tr`)(85,`td`)(86,`code`),vN(87,`--border-radius`),ug()(),Ac(88,`td`),vN(89,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(90,`td`)(91,`code`),vN(92,`var(--border-radius-pill)`),ug()()(),Ac(93,`tr`)(94,`td`)(95,`code`),vN(96,`--gap`),ug()(),Ac(97,`td`),vN(98,`Espaçamento entre o label e o value`),ug(),Ac(99,`td`)(100,`code`),vN(101,`var(--spacing-xs)`),ug()()(),Ac(102,`tr`)(103,`td`)(104,`strong`),vN(105,`Neutral`),ug()(),Kc(106,`td`)(107,`td`),ug(),Ac(108,`tr`)(109,`td`)(110,`code`),vN(111,`--color-neutral`),ug()(),Ac(112,`td`),vN(113,`Cor principal no estado neutral`),ug(),Ac(114,`td`)(115,`code`),vN(116,`var(--color-neutral-light-10)`),ug()()(),Ac(117,`tr`)(118,`td`)(119,`code`),vN(120,`--text-color-positive`),ug()(),Ac(121,`td`),vN(122,`Cor do texto no estado neutral`),ug(),Ac(123,`td`)(124,`code`),vN(125,`var(--color-neutral-dark-80)`),ug()()(),Ac(126,`tr`)(127,`td`)(128,`strong`),vN(129,`Positive`),ug()(),Kc(130,`td`)(131,`td`),ug(),Ac(132,`tr`)(133,`td`)(134,`code`),vN(135,`--color-positive`),ug()(),Ac(136,`td`),vN(137,`Cor principal no estado positive`),ug(),Ac(138,`td`)(139,`code`),vN(140,`var(--color-feedback-positive-lightest)`),ug()()(),Ac(141,`tr`)(142,`td`)(143,`code`),vN(144,`--text-color-positive`),ug()(),Ac(145,`td`),vN(146,`Cor do texto no estado positive`),ug(),Ac(147,`td`)(148,`code`),vN(149,`var(--color-feedback-positive-dark)`),ug()()(),Ac(150,`tr`)(151,`td`)(152,`strong`),vN(153,`Negative`),ug()(),Kc(154,`td`)(155,`td`),ug(),Ac(156,`tr`)(157,`td`)(158,`code`),vN(159,`--color-negative`),ug()(),Ac(160,`td`),vN(161,`Cor principal no estado danger`),ug(),Ac(162,`td`)(163,`code`),vN(164,`var(--color-feedback-negative-lightest)`),ug()()(),Ac(165,`tr`)(166,`td`)(167,`code`),vN(168,`--text-color-negative`),ug()(),Ac(169,`td`),vN(170,`Cor do texto no estado danger`),ug(),Ac(171,`td`)(172,`code`),vN(173,`var(--color-feedback-negative-darker)`),ug()()(),Ac(174,`tr`)(175,`td`)(176,`strong`),vN(177,`Warning`),ug()(),Kc(178,`td`)(179,`td`),ug(),Ac(180,`tr`)(181,`td`)(182,`code`),vN(183,`--color-tag-warning`),ug()(),Ac(184,`td`),vN(185,`Cor principal no estado warning`),ug(),Ac(186,`td`)(187,`code`),vN(188,`var(--color-feedback-warning-lightest)`),ug()()(),Ac(189,`tr`)(190,`td`)(191,`code`),vN(192,`--text-color-warning`),ug()(),Ac(193,`td`),vN(194,`Cor do texto no estado warning`),ug(),Ac(195,`td`)(196,`code`),vN(197,`var(--color-feedback-warning-darkest)`),ug()()(),Ac(198,`tr`)(199,`td`)(200,`strong`),vN(201,`Info`),ug()(),Kc(202,`td`)(203,`td`),ug(),Ac(204,`tr`)(205,`td`)(206,`code`),vN(207,`--color-info`),ug()(),Ac(208,`td`),vN(209,`Cor principal no estado info`),ug(),Ac(210,`td`)(211,`code`),vN(212,`var(--color-feedback-info-lightest)`),ug()()(),Ac(213,`tr`)(214,`td`)(215,`code`),vN(216,`--text-color-info`),ug()(),Ac(217,`td`),vN(218,`Cor do texto no estado info`),ug(),Ac(219,`td`)(220,`code`),vN(221,`var(--color-feedback-info-dark)`),ug()()(),Ac(222,`tr`)(223,`td`)(224,`strong`),vN(225,`Removable`),ug()(),Kc(226,`td`)(227,`td`),ug(),Ac(228,`tr`)(229,`td`)(230,`code`),vN(231,`--color`),ug()(),Ac(232,`td`),vN(233,`Cor principal quando removable`),ug(),Ac(234,`td`)(235,`code`),vN(236,`var(--color-brand-01-lightest)`),ug()()(),Ac(237,`tr`)(238,`td`)(239,`code`),vN(240,`--border-color`),ug()(),Ac(241,`td`),vN(242,`Cor de borda quando removable \xA0`),ug(),Ac(243,`td`)(244,`code`),vN(245,`var(--color-brand-01-lighter)`),ug()()(),Ac(246,`tr`)(247,`td`)(248,`code`),vN(249,`--color-icon`),ug()(),Ac(250,`td`),vN(251,`Cor do ícone quando removable \xA0`),ug(),Ac(252,`td`)(253,`code`),vN(254,`var(--color-action-default)`),ug()()(),Ac(255,`tr`)(256,`td`)(257,`code`),vN(258,`--text-color`),ug()(),Ac(259,`td`),vN(260,`Cor do texto quando removable \xA0`),ug(),Ac(261,`td`)(262,`code`),vN(263,`var(--color-neutral-dark-80)`),ug()()(),Ac(264,`tr`)(265,`td`)(266,`code`),vN(267,`--color-hover`),ug()(),Ac(268,`td`),vN(269,`Cor do hover no estado removable \xA0`),ug(),Ac(270,`td`)(271,`code`),vN(272,`var(--color-brand-01-lighter)`),ug()()(),Ac(273,`tr`)(274,`td`)(275,`strong`),vN(276,`Focused`),ug()(),Kc(277,`td`)(278,`td`),ug(),Ac(279,`tr`)(280,`td`)(281,`code`),vN(282,`--outline-color-focused`),ug()(),Ac(283,`td`),vN(284,`Cor do outline do estado de focus`),ug(),Ac(285,`td`)(286,`code`),vN(287,`var(--color-action-focus)`),ug()()(),Ac(288,`tr`)(289,`td`)(290,`strong`),vN(291,`Disabled`),ug()(),Kc(292,`td`)(293,`td`),ug(),Ac(294,`tr`)(295,`td`)(296,`code`),vN(297,`--color-disabled`),ug()(),Ac(298,`td`),vN(299,`Cor principal no estado disabled`),ug(),Ac(300,`td`)(301,`code`),vN(302,`var(--color-neutral-light-20)`),ug()()(),Ac(303,`tr`)(304,`td`)(305,`code`),vN(306,`--border-color-disabled`),ug()(),Ac(307,`td`),vN(308,`Cor da borda no estado disabled \xA0`),ug(),Ac(309,`td`)(310,`code`),vN(311,`var(--color-action-disabled)`),ug()()(),Ac(312,`tr`)(313,`td`)(314,`code`),vN(315,`--color-icon-disabled`),ug()(),Ac(316,`td`),vN(317,`Cor do icone no estado disabled \xA0`),ug(),Ac(318,`td`)(319,`code`),vN(320,`var(--color-action-disabled)`),ug()()(),Ac(321,`tr`)(322,`td`)(323,`code`),vN(324,`--text-color-disabled`),ug()(),Ac(325,`td`),vN(326,`Cor do texto no estado disabled \xA0`),ug(),Ac(327,`td`)(328,`code`),vN(329,`var(--color-neutral-mid-60)`),ug()()()()()(),Ac(330,`div`,7)(331,`h4`,8),vN(332,`Seletor`),ug(),Ac(333,`pre`,9),vN(334,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),ug()(),Ac(335,`h4`,10),vN(336,`Propriedades`),ug(),Ac(337,`table`,11)(338,`tr`,12)(339,`th`,13),vN(340,`Nome`),ug(),Ac(341,`th`,13),vN(342,`Tipo`),ug(),Ac(343,`th`,13),vN(344,`Padrão`),ug(),Ac(345,`th`,13),vN(346,`Descrição`),ug()(),Ac(347,`tr`,14)(348,`td`,15)(349,`div`,16)(350,`span`,17),vN(351,` (p-click)`),Kc(352,`br`),ug()()(),Ac(353,`td`,18)(354,`code`,19),vN(355,`EventEmitter`),ug()(),Ac(356,`td`,20),vN(357,`-`),ug(),Ac(358,`td`,21)(359,`em`)(360,`strong`),vN(361,`(opcional)`),ug()(),Ac(362,`p`),vN(363,`Ação que será executada ao clicar sobre o `),Ac(364,`code`),vN(365,`po-tag`),ug(),vN(366,` e que receberá como parâmetro um objeto contendo o seu valor e tipo.`),ug(),Ac(367,`p`),vN(368,`O evento de click só funciona se a tag não for removível.`),ug()()(),Ac(369,`tr`,14)(370,`td`,15)(371,`div`,22)(372,`span`,23),vN(373,` p-color`),Kc(374,`br`),ug()()(),Ac(375,`td`,18)(376,`code`,24),vN(377,`string`),ug()(),Ac(378,`td`,20),vN(379,`-`),ug(),Ac(380,`td`,21)(381,`em`)(382,`strong`),vN(383,`(opcional)`),ug()(),Ac(384,`p`),vN(385,`Determina a cor da tag. As maneiras de customizar as cores são:`),ug(),Ac(386,`ul`)(387,`li`),vN(388,`Hexadeximal, por exemplo `),Ac(389,`code`),vN(390,`#c64840`),ug(),vN(391,`;`),ug(),Ac(392,`li`),vN(393,`RGB, como `),Ac(394,`code`),vN(395,`rgb(0, 0, 165)`),ug(),vN(396,`;`),ug(),Ac(397,`li`),vN(398,`O nome da cor, por exemplo `),Ac(399,`code`),vN(400,`blue`),ug(),vN(401,`;`),ug(),Ac(402,`li`),vN(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Ac(404,`ul`)(405,`li`),Kc(406,`span`,25),Ac(407,`code`),vN(408,`color-01`),ug()(),Ac(409,`li`),Kc(410,`span`,26),Ac(411,`code`),vN(412,`color-02`),ug()(),Ac(413,`li`),Kc(414,`span`,27),Ac(415,`code`),vN(416,`color-03`),ug()(),Ac(417,`li`),Kc(418,`span`,28),Ac(419,`code`),vN(420,`color-04`),ug()(),Ac(421,`li`),Kc(422,`span`,29),Ac(423,`code`),vN(424,`color-05`),ug()(),Ac(425,`li`),Kc(426,`span`,30),Ac(427,`code`),vN(428,`color-06`),ug()(),Ac(429,`li`),Kc(430,`span`,31),Ac(431,`code`),vN(432,`color-07`),ug()(),Ac(433,`li`),Kc(434,`span`,32),Ac(435,`code`),vN(436,`color-08`),ug()(),Ac(437,`li`),Kc(438,`span`,33),Ac(439,`code`),vN(440,`color-09`),ug()(),Ac(441,`li`),Kc(442,`span`,34),Ac(443,`code`),vN(444,`color-10`),ug()(),Ac(445,`li`),Kc(446,`span`,35),Ac(447,`code`),vN(448,`color-11`),ug()(),Ac(449,`li`),Kc(450,`span`,36),Ac(451,`code`),vN(452,`color-12`),ug()()()()(),Ac(453,`blockquote`)(454,`p`),vN(455,`Também é possível utilizar as 35 cores da paleta `),Ac(456,`strong`),vN(457,`Caption Tag Colors`),ug(),vN(458,`:`),ug()(),Ac(459,`ul`)(460,`li`),Kc(461,`span`,37),Ac(462,`code`),vN(463,`caption-tag-01`),ug(),Kc(464,`span`,38),Ac(465,`code`),vN(466,`caption-tag-02`),ug(),Kc(467,`span`,39),Ac(468,`code`),vN(469,`caption-tag-03`),ug(),Kc(470,`span`,40),Ac(471,`code`),vN(472,`caption-tag-04`),ug(),Kc(473,`span`,41),Ac(474,`code`),vN(475,`caption-tag-05`),ug()(),Ac(476,`li`),Kc(477,`span`,42),Ac(478,`code`),vN(479,`caption-tag-06`),ug(),Kc(480,`span`,43),Ac(481,`code`),vN(482,`caption-tag-07`),ug(),Kc(483,`span`,44),Ac(484,`code`),vN(485,`caption-tag-08`),ug(),Kc(486,`span`,45),Ac(487,`code`),vN(488,`caption-tag-09`),ug(),Kc(489,`span`,46),Ac(490,`code`),vN(491,`caption-tag-10`),ug()(),Ac(492,`li`),Kc(493,`span`,47),Ac(494,`code`),vN(495,`caption-tag-11`),ug(),Kc(496,`span`,48),Ac(497,`code`),vN(498,`caption-tag-12`),ug(),Kc(499,`span`,49),Ac(500,`code`),vN(501,`caption-tag-13`),ug(),Kc(502,`span`,50),Ac(503,`code`),vN(504,`caption-tag-14`),ug(),Kc(505,`span`,51),Ac(506,`code`),vN(507,`caption-tag-15`),ug()(),Ac(508,`li`),Kc(509,`span`,52),Ac(510,`code`),vN(511,`caption-tag-16`),ug(),Kc(512,`span`,53),Ac(513,`code`),vN(514,`caption-tag-17`),ug(),Kc(515,`span`,54),Ac(516,`code`),vN(517,`caption-tag-18`),ug(),Kc(518,`span`,55),Ac(519,`code`),vN(520,`caption-tag-19`),ug(),Kc(521,`span`,56),Ac(522,`code`),vN(523,`caption-tag-20`),ug()(),Ac(524,`li`),Kc(525,`span`,57),Ac(526,`code`),vN(527,`caption-tag-21`),ug(),Kc(528,`span`,58),Ac(529,`code`),vN(530,`caption-tag-22`),ug(),Kc(531,`span`,59),Ac(532,`code`),vN(533,`caption-tag-23`),ug(),Kc(534,`span`,60),Ac(535,`code`),vN(536,`caption-tag-24`),ug(),Kc(537,`span`,61),Ac(538,`code`),vN(539,`caption-tag-25`),ug()(),Ac(540,`li`),Kc(541,`span`,62),Ac(542,`code`),vN(543,`caption-tag-26`),ug(),Kc(544,`span`,63),Ac(545,`code`),vN(546,`caption-tag-27`),ug(),Kc(547,`span`,64),Ac(548,`code`),vN(549,`caption-tag-28`),ug(),Kc(550,`span`,65),Ac(551,`code`),vN(552,`caption-tag-29`),ug(),Kc(553,`span`,66),Ac(554,`code`),vN(555,`caption-tag-30`),ug()(),Ac(556,`li`),Kc(557,`span`,67),Ac(558,`code`),vN(559,`caption-tag-31`),ug(),Kc(560,`span`,68),Ac(561,`code`),vN(562,`caption-tag-32`),ug(),Kc(563,`span`,69),Ac(564,`code`),vN(565,`caption-tag-33`),ug(),Kc(566,`span`,70),Ac(567,`code`),vN(568,`caption-tag-34`),ug(),Kc(569,`span`,71),Ac(570,`code`),vN(571,`caption-tag-35`),ug()()(),Ac(572,`p`),vN(573,`Exemplo de uso:`),ug(),Ac(574,`pre`)(575,`code`),vN(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),ug()(),Ac(577,`ul`)(578,`li`),vN(579,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background;`),ug(),Ac(580,`li`),vN(581,`Para as cores legacy (`),Ac(582,`code`),vN(583,`color-01`),ug(),vN(584,` a `),Ac(585,`code`),vN(586,`color-12`),ug(),vN(587,`) e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade.`),ug(),Ac(588,`li`),vN(589,`Para as cores `),Ac(590,`strong`),vN(591,`Caption Tag Colors`),ug(),vN(592,` (`),Ac(593,`code`),vN(594,`caption-tag-01`),ug(),vN(595,` a `),Ac(596,`code`),vN(597,`caption-tag-35`),ug(),vN(598,`), a cor do texto é fixa e definida via token CSS, não sendo possível alterá-la via `),Ac(599,`code`),vN(600,`p-text-color`),ug(),vN(601,`.`),ug()(),Ac(602,`blockquote`)(603,`p`)(604,`strong`),vN(605,`Atenção:`),ug(),vN(606,` A propriedade `),Ac(607,`code`),vN(608,`p-type`),ug(),vN(609,` sobrepõe esta definição.`),ug()()()(),Ac(610,`tr`,14)(611,`td`,15)(612,`div`,22)(613,`span`,23),vN(614,` p-disabled`),Kc(615,`br`),ug()()(),Ac(616,`td`,18)(617,`code`,72),vN(618,`boolean`),ug()(),Ac(619,`td`,20)(620,`p`)(621,`code`),vN(622,`false`),ug()()(),Ac(623,`td`,21)(624,`em`)(625,`strong`),vN(626,`(opcional)`),ug()(),Ac(627,`p`),vN(628,`Desabilita o `),Ac(629,`code`),vN(630,`po-tag`),ug(),vN(631,` e não permite que o usuário interaja com o mesmo.`),ug(),Ac(632,`blockquote`)(633,`p`),vN(634,`A propriedade `),Ac(635,`code`),vN(636,`p-disabled`),ug(),vN(637,` somente terá efeito caso a propriedade `),Ac(638,`code`),vN(639,`p-removable`),ug(),vN(640,` esteja definida como `),Ac(641,`code`),vN(642,`true`),ug(),vN(643,`.`),ug()()()(),Ac(644,`tr`,14)(645,`td`,15)(646,`div`,22)(647,`span`,23),vN(648,` p-icon`),Kc(649,`br`),ug()()(),Ac(650,`td`,18)(651,`code`,24),vN(652,`string `),ug(),Ac(653,`code`,72),vN(654,` boolean `),ug(),Ac(655,`code`,73),vN(656,` TemplateRef<void>`),ug()(),Ac(657,`td`,20)(658,`p`)(659,`code`),vN(660,`false`),ug()()(),Ac(661,`td`,21)(662,`em`)(663,`strong`),vN(664,`(opcional)`),ug()(),Ac(665,`p`),vN(666,`Define ou ativa um ícone que será exibido ao lado do valor da `),Ac(667,`em`),vN(668,`tag`),ug(),vN(669,`.`),ug(),Ac(670,`p`),vN(671,`Quando `),Ac(672,`code`),vN(673,`p-type`),ug(),vN(674,` estiver definida, basta informar um valor igual a `),Ac(675,`code`),vN(676,`true`),ug(),vN(677,` para que o ícone seja exibido conforme descrições abaixo:`),ug(),Ac(678,`ul`)(679,`li`),Kc(680,`span`,74),vN(681,` - `),Ac(682,`code`),vN(683,`success`),ug()(),Ac(684,`li`),Kc(685,`span`,75),vN(686,` - `),Ac(687,`code`),vN(688,`warning`),ug()(),Ac(689,`li`),Kc(690,`span`,76),vN(691,` - `),Ac(692,`code`),vN(693,`danger`),ug()(),Ac(694,`li`),Kc(695,`span`,77),vN(696,` - `),Ac(697,`code`),vN(698,`info`),ug()()(),Ac(699,`p`),vN(700,`Também É possível usar qualquer um dos ícones da `),Ac(701,`a`,78),vN(702,`Biblioteca de ícones`),ug(),vN(703,`. conforme exemplo abaixo:`),ug(),Ac(704,`pre`)(705,`code`),vN(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),ug()(),Ac(707,`p`),vN(708,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(709,`em`),vN(710,`Font Awesome`),ug(),vN(711,`, da seguinte forma:`),ug(),Ac(712,`pre`)(713,`code`),vN(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),ug()(),Ac(715,`p`),vN(716,`Outra opção seria a customização do ícone através do `),Ac(717,`code`),vN(718,`TemplateRef`),ug(),vN(719,`, conforme exemplo abaixo:`),ug(),Ac(720,`pre`)(721,`code`),vN(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(723,`blockquote`)(724,`p`),vN(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(726,`code`),vN(727,`font-size: inherit`),ug(),vN(728,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(729,`tr`,14)(730,`td`,15)(731,`div`,22)(732,`span`,23),vN(733,` p-label`),Kc(734,`br`),ug()()(),Ac(735,`td`,18)(736,`code`,24),vN(737,`string`),ug()(),Ac(738,`td`,20),vN(739,`-`),ug(),Ac(740,`td`,21)(741,`em`)(742,`strong`),vN(743,`(opcional)`),ug()(),Ac(744,`p`),vN(745,`Define uma legenda que será exibida acima ou ao lado da `),Ac(746,`em`),vN(747,`tag`),ug(),vN(748,`, de acordo com a `),Ac(749,`code`),vN(750,`p-orientation`),ug(),vN(751,`.`),ug()()(),Ac(752,`tr`,14)(753,`td`,15)(754,`div`,22)(755,`span`,23),vN(756,` p-literals`),Kc(757,`br`),ug()()(),Ac(758,`td`,18)(759,`code`,79),vN(760,`PoTagLiterals`),ug()(),Ac(761,`td`,20),vN(762,`-`),ug(),Ac(763,`td`,21)(764,`em`)(765,`strong`),vN(766,`(opcional)`),ug()(),Ac(767,`p`),vN(768,`Objeto com as literais usadas no `),Ac(769,`code`),vN(770,`po-tag`),ug(),vN(771,`.`),ug(),Ac(772,`p`),vN(773,`Para utilizar, basta passar a literal customizada:`),ug(),Ac(774,`pre`)(775,`code`),vN(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),ug()(),Ac(777,`p`),vN(778,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),ug(),Ac(779,`pre`)(780,`code`),vN(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),ug()(),Ac(782,`blockquote`)(783,`p`),vN(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(785,`a`,80)(786,`code`),vN(787,`PoI18nService`),ug()(),vN(788,` ou do browser.`),ug()()()(),Ac(789,`tr`,14)(790,`td`,15)(791,`div`,22)(792,`span`,23),vN(793,` p-orientation`),Kc(794,`br`),ug()()(),Ac(795,`td`,18)(796,`code`,81),vN(797,`PoTagOrientation`),ug()(),Ac(798,`td`,20)(799,`p`)(800,`code`),vN(801,`vertical`),ug()()(),Ac(802,`td`,21)(803,`em`)(804,`strong`),vN(805,`(opcional)`),ug()(),Ac(806,`p`),vN(807,`Define o `),Ac(808,`em`),vN(809,`layout`),ug(),vN(810,` de exibição.`),ug()()(),Ac(811,`tr`,14)(812,`td`,15)(813,`div`,22)(814,`span`,23),vN(815,` p-removable`),Kc(816,`br`),ug()()(),Ac(817,`td`,18)(818,`code`,72),vN(819,`boolean`),ug()(),Ac(820,`td`,20)(821,`p`)(822,`code`),vN(823,`false`),ug()()(),Ac(824,`td`,21)(825,`em`)(826,`strong`),vN(827,`(opcional)`),ug()(),Ac(828,`p`),vN(829,`Habilita a opção de remover a tag`),ug()()(),Ac(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),vN(834,` (p-close)`),Kc(835,`br`),ug()()(),Ac(836,`td`,18)(837,`code`,19),vN(838,`EventEmitter`),ug()(),Ac(839,`td`,20),vN(840,`-`),ug(),Ac(841,`td`,21)(842,`em`)(843,`strong`),vN(844,`(opcional)`),ug()(),Ac(845,`p`),vN(846,`Ação que sera executada quando clicar sobre o ícone de remover no `),Ac(847,`code`),vN(848,`po-tag`),ug()()()(),Ac(849,`tr`,14)(850,`td`,15)(851,`div`,22)(852,`span`,23),vN(853,` p-text-color`),Kc(854,`br`),ug()()(),Ac(855,`td`,18)(856,`code`,24),vN(857,`string`),ug()(),Ac(858,`td`,20),vN(859,`-`),ug(),Ac(860,`td`,21)(861,`em`)(862,`strong`),vN(863,`(opcional)`),ug()(),Ac(864,`p`),vN(865,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),ug(),Ac(866,`ul`)(867,`li`)(868,`p`),vN(869,`Hexadeximal, por exemplo `),Ac(870,`code`),vN(871,`#c64840`),ug(),vN(872,`;`),ug()(),Ac(873,`li`)(874,`p`),vN(875,`RGB, como `),Ac(876,`code`),vN(877,`rgb(0, 0, 165)`),ug(),vN(878,`;`),ug()(),Ac(879,`li`)(880,`p`),vN(881,`O nome da cor, por exemplo `),Ac(882,`code`),vN(883,`blue`),ug(),vN(884,`;`),ug()(),Ac(885,`li`)(886,`p`),vN(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),ug(),Ac(888,`ul`)(889,`li`),Kc(890,`span`,25),Ac(891,`code`),vN(892,`color-01`),ug()(),Ac(893,`li`),Kc(894,`span`,26),Ac(895,`code`),vN(896,`color-02`),ug()(),Ac(897,`li`),Kc(898,`span`,27),Ac(899,`code`),vN(900,`color-03`),ug()(),Ac(901,`li`),Kc(902,`span`,28),Ac(903,`code`),vN(904,`color-04`),ug()(),Ac(905,`li`),Kc(906,`span`,29),Ac(907,`code`),vN(908,`color-05`),ug()(),Ac(909,`li`),Kc(910,`span`,30),Ac(911,`code`),vN(912,`color-06`),ug()(),Ac(913,`li`),Kc(914,`span`,31),Ac(915,`code`),vN(916,`color-07`),ug()(),Ac(917,`li`),Kc(918,`span`,32),Ac(919,`code`),vN(920,`color-08`),ug()(),Ac(921,`li`),Kc(922,`span`,33),Ac(923,`code`),vN(924,`color-09`),ug()(),Ac(925,`li`),Kc(926,`span`,34),Ac(927,`code`),vN(928,`color-10`),ug()(),Ac(929,`li`),Kc(930,`span`,35),Ac(931,`code`),vN(932,`color-11`),ug()(),Ac(933,`li`),Kc(934,`span`,36),Ac(935,`code`),vN(936,`color-12`),ug()()()(),Ac(937,`li`)(938,`p`),vN(939,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),ug()()(),Ac(940,`blockquote`)(941,`p`)(942,`strong`),vN(943,`Atenção:`),ug(),vN(944,` A propriedade `),Ac(945,`code`),vN(946,`p-type`),ug(),vN(947,` sobrepõe esta definição.`),ug()(),Ac(948,`blockquote`)(949,`p`)(950,`strong`),vN(951,`Atenção:`),ug(),vN(952,` As cores da paleta `),Ac(953,`strong`),vN(954,`Caption Tag Colors`),ug(),vN(955,` (`),Ac(956,`code`),vN(957,`caption-tag-01`),ug(),vN(958,` a `),Ac(959,`code`),vN(960,`caption-tag-35`),ug(),vN(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),ug()()()(),Ac(962,`tr`,14)(963,`td`,15)(964,`div`,22)(965,`span`,23),vN(966,` p-type`),Kc(967,`br`),ug()()(),Ac(968,`td`,18)(969,`code`,82),vN(970,`PoTagType`),ug()(),Ac(971,`td`,20)(972,`p`)(973,`code`),vN(974,`info`),ug()()(),Ac(975,`td`,21)(976,`em`)(977,`strong`),vN(978,`(opcional)`),ug()(),Ac(979,`p`),vN(980,`Define o tipo da `),Ac(981,`em`),vN(982,`tag`),ug(),vN(983,`.`),ug(),Ac(984,`p`),vN(985,`Valores válidos:`),ug(),Ac(986,`ul`)(987,`li`)(988,`code`),vN(989,`success`),ug(),vN(990,`: cor verde utilizada para simbolizar sucesso ou êxito.`),ug(),Ac(991,`li`)(992,`code`),vN(993,`warning`),ug(),vN(994,`: cor amarela que representa aviso ou advertência.`),ug(),Ac(995,`li`)(996,`code`),vN(997,`danger`),ug(),vN(998,`: cor vermelha para erro ou aviso crítico.`),ug(),Ac(999,`li`)(1e3,`code`),vN(1001,`info`),ug(),vN(1002,`: cor azul claro que caracteriza conteúdo informativo.`),ug(),Ac(1003,`li`)(1004,`code`),vN(1005,`neutral`),ug(),vN(1006,`: cor cinza claro para uso geral.`),ug()(),Ac(1007,`blockquote`)(1008,`p`),vN(1009,`Quando esta propriedade for definida, irá sobrepor a definição de `),Ac(1010,`code`),vN(1011,`p-color`),ug(),vN(1012,` e `),Ac(1013,`code`),vN(1014,`p-icon`),ug(),vN(1015,` somente será exibido caso seja `),Ac(1016,`code`),vN(1017,`true`),ug(),vN(1018,`.`),ug()()()(),Ac(1019,`tr`,14)(1020,`td`,15)(1021,`div`,22)(1022,`span`,23),vN(1023,` p-value`),Kc(1024,`br`),ug()()(),Ac(1025,`td`,18)(1026,`code`,24),vN(1027,`string`),ug()(),Ac(1028,`td`,20),vN(1029,`-`),ug(),Ac(1030,`td`,21)(1031,`p`),vN(1032,`Texto da tag.`),ug()()()(),Ac(1033,`h3`),vN(1034,`Interfaces`),ug(),Ac(1035,`h4`,83)(1036,`code`,5),vN(1037,`PoTagLiterals`),ug()(),Ac(1038,`div`,2)(1039,`p`),vN(1040,`Interface para definição das literais usadas no `),Ac(1041,`code`),vN(1042,`po-tag`),ug(),vN(1043,`.`),ug()(),Ac(1044,`h4`,10),vN(1045,`Propriedades`),ug(),Ac(1046,`table`,11)(1047,`tr`,12)(1048,`th`,13),vN(1049,`Nome`),ug(),Ac(1050,`th`,13),vN(1051,`Tipo`),ug(),Ac(1052,`th`,13),vN(1053,`Descrição`),ug()(),Ac(1054,`tr`,14)(1055,`td`,15)(1056,`div`,22)(1057,`span`,23),vN(1058,` remove`),Kc(1059,`br`),ug()()(),Ac(1060,`td`,18)(1061,`code`,24),vN(1062,`string`),ug()(),Ac(1063,`td`,21)(1064,`em`)(1065,`strong`),vN(1066,`(opcional)`),ug()(),Ac(1067,`p`),vN(1068,`Texto exibido no tooltip indicando remoção da tag.`),ug()()()(),Ac(1069,`h3`),vN(1070,`Enums`),ug(),Ac(1071,`h4`,4)(1072,`code`,5),vN(1073,`PoTagOrientation`),ug()(),Ac(1074,`div`,2)(1075,`p`),vN(1076,`Define os tipos de orientações disponíveis para o `),Ac(1077,`code`),vN(1078,`po-tag`),ug(),vN(1079,`.`),ug()(),Ac(1080,`h4`,10),vN(1081,`Propriedades`),ug(),Ac(1082,`table`,11)(1083,`tr`,12)(1084,`th`,13),vN(1085,`Nome`),ug(),Ac(1086,`th`,13),vN(1087,`Descrição`),ug()(),Ac(1088,`tr`,14)(1089,`td`,15)(1090,`div`,22)(1091,`span`,23),vN(1092,` Horizontal`),Kc(1093,`br`),ug()()(),Ac(1094,`td`,21)(1095,`p`),vN(1096,`A tag será exibida na horizontal, ao lado direito em relação ao label.`),ug()()(),Ac(1097,`tr`,14)(1098,`td`,15)(1099,`div`,22)(1100,`span`,23),vN(1101,` Vertical`),Kc(1102,`br`),ug()()(),Ac(1103,`td`,21)(1104,`p`),vN(1105,`Exibe a tag na vertical, ou seja, abaixo do label.`),ug()()()(),Ac(1106,`h4`,4)(1107,`code`,5),vN(1108,`PoTagType`),ug()(),Ac(1109,`div`,2)(1110,`p`),vN(1111,`Define os tipos disponíveis para o `),Ac(1112,`code`),vN(1113,`po-tag`),ug(),vN(1114,`.`),ug()(),Ac(1115,`h4`,10),vN(1116,`Propriedades`),ug(),Ac(1117,`table`,11)(1118,`tr`,12)(1119,`th`,13),vN(1120,`Nome`),ug(),Ac(1121,`th`,13),vN(1122,`Descrição`),ug()(),Ac(1123,`tr`,14)(1124,`td`,15)(1125,`div`,22)(1126,`span`,23),vN(1127,` Danger`),Kc(1128,`br`),ug()()(),Ac(1129,`td`,21)(1130,`p`),vN(1131,`Erro, perigo, problema ou aviso crítico.`),ug()()(),Ac(1132,`tr`,14)(1133,`td`,15)(1134,`div`,22)(1135,`span`,23),vN(1136,` Info`),Kc(1137,`br`),ug()()(),Ac(1138,`td`,21)(1139,`p`),vN(1140,`Informativo ou explicativo.`),ug()()(),Ac(1141,`tr`,14)(1142,`td`,15)(1143,`div`,22)(1144,`span`,23),vN(1145,` Success`),Kc(1146,`br`),ug()()(),Ac(1147,`td`,21)(1148,`p`),vN(1149,`Confirmação, resultados positivos ou êxito.`),ug()()(),Ac(1150,`tr`,14)(1151,`td`,15)(1152,`div`,22)(1153,`span`,23),vN(1154,` Warning`),Kc(1155,`br`),ug()()(),Ac(1156,`td`,21)(1157,`p`),vN(1158,`Aviso ou advertência.`),ug()()(),Ac(1159,`tr`,14)(1160,`td`,15)(1161,`div`,22)(1162,`span`,23),vN(1163,` Neutral`),Kc(1164,`br`),ug()()(),Ac(1165,`td`,21)(1166,`p`),vN(1167,`De uso geral, quando os tipos Info, Warning, Success e Danger não atendem a necessidade.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-tag-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-tag-basic-view`)(6,`sample-po-tag-labs-view`)(7,`sample-po-tag-bank-account-view`)(8,`sample-po-tag-caption-tag-colors-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,Ee,ve,he,Te,ye],encapsulation:2,changeDetection:1})}return o})()}];var we=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[kL.forChild(Ke),kL]})}return o})();var _t=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[Ta,we]})}return o})();export{_t as DocPoTagModule};