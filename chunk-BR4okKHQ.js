import{$r as Vx,Cr as Nx,Et as V8e,F as G4,Hr as Tw,Ii as ht,In as ys,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Qn as EN,R as Gy,Sa as yN,Ti as f0,Ui as lg,Un as Ax,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_a as wN,_r as Ml,an as k4,ar as IY,bi as cw,br as NL,bt as Tbe,cn as lU,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,rt as Ml$1,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,xa as xx,yr as Mx}from"./main-NT5YGKBQ.js";var Se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-value`,`PO Tag`]],template:function(r,i){r&1&&ql(0,`po-tag`,0)},dependencies:[ys],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tag Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tag-basic/sample-po-tag-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-tag p-value="PO Tag"> </po-tag>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tag-basic/sample-po-tag-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tag-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return o})();function Me(o,c){if(o&1){let l=Vx();Ml(0,`po-select`,14),Mw(`ngModelChange`,function(i){Qy(l);let g=zx();return yN(g.icon,i)||(g.icon=i),Jy(i)}),lg(),f0()}if(o&2){let l=zx();Tw(`ngModel`,l.icon),cw(`p-options`,l.iconList),p0()}}function Be(o,c){if(o&1){let l=Vx();Ml(0,`po-switch`,15),Mw(`ngModelChange`,function(i){Qy(l);let g=zx();return yN(g.icon,i)||(g.icon=i),Jy(i)}),lg(),f0()}if(o&2)Tw(`ngModel`,zx().icon),p0()}var xe=(()=>{class o{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:`removable`,label:`Removable`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];orientationOptions=[{label:`Horizontal`,value:Gy.Horizontal},{label:`Vertical`,value:Gy.Vertical}];typeOptions=[{label:`None`,value:void 0},{label:`Info`,value:Ml$1.Info},{label:`Danger`,value:Ml$1.Danger},{label:`Success`,value:Ml$1.Success},{label:`Warning`,value:Ml$1.Warning},{label:`Neutral`,value:Ml$1.Neutral}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}propertiesChange(l){let r=[...this.propertiesOptions];l.includes(`removable`)?(r[1]={value:`disabled`,label:`Disabled`,disabled:!1},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!==`disabled`)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value=`PO Tag`,this.type=void 0,this.event=``,this.textColor=void 0,this.properties=[]}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-labs`]],standalone:!1,decls:21,vars:22,consts:[[`f`,`ngForm`],[3,`p-click`,`p-color`,`p-disabled`,`p-removable`,`p-icon`,`p-text-color`,`p-label`,`p-orientation`,`p-type`,`p-value`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`color`,`p-clean`,``,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`textColor`,`p-clean`,``,`p-label`,`Text color`,`p-help`,`color-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModel`],[`name`,`orientation`,`p-columns`,`1`,`p-label`,`Orientation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let g=Vx();Ml(0,`po-tag`,1),ht(`p-click`,function(){return i.changeEvent(`p-click`)}),lg(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3),lg(),ql(4,`po-divider`),Ml(5,`form`,null,0)(7,`div`,2)(8,`po-input`,4),Mw(`ngModelChange`,function(d){return Qy(g),yN(i.label,d)||(i.label=d),Jy(d)}),lg(),f0(),Ml(9,`po-input`,5),Mw(`ngModelChange`,function(d){return Qy(g),yN(i.value,d)||(i.value=d),Jy(d)}),lg(),f0(),lg(),Ml(10,`div`,2)(11,`po-input`,6),Mw(`ngModelChange`,function(d){return Qy(g),yN(i.color,d)||(i.color=d),Jy(d)}),lg(),f0(),Ml(12,`po-input`,7),Mw(`ngModelChange`,function(d){return Qy(g),yN(i.textColor,d)||(i.textColor=d),Jy(d)}),lg(),f0(),Tx(13,Me,1,2,`po-select`,8),Ml(14,`po-checkbox-group`,9),Mw(`ngModelChange`,function(d){return Qy(g),yN(i.properties,d)||(i.properties=d),Jy(d)}),ht(`p-change`,function(d){return i.propertiesChange(d)}),lg(),f0(),Tx(15,Be,1,1,`po-switch`,10),lg(),Ml(16,`div`,2)(17,`po-radio-group`,11),Mw(`ngModelChange`,function(d){return Qy(g),yN(i.orientation,d)||(i.orientation=d),Jy(d)}),lg(),f0(),Ml(18,`po-radio-group`,12),Mw(`ngModelChange`,function(d){return Qy(g),yN(i.type,d)||(i.type=d),Jy(d)}),lg(),f0(),lg(),Ml(19,`div`,2)(20,`po-button`,13),ht(`p-click`,function(){return i.restore()}),lg()()()}r&2&&(cw(`p-color`,i.color)(`p-disabled`,i.properties.includes(`disabled`))(`p-removable`,i.properties.includes(`removable`))(`p-icon`,i.icon)(`p-text-color`,i.textColor)(`p-label`,i.label)(`p-orientation`,i.orientation)(`p-type`,i.type)(`p-value`,i.value),Up(3),cw(`p-value`,i.event),Up(5),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.value),p0(),Up(2),Tw(`ngModel`,i.color),p0(),Up(),Tw(`ngModel`,i.textColor),p0(),Up(),Mx(i.type?-1:13),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Mx(i.type?15:-1),Up(2),Tw(`ngModel`,i.orientation),cw(`p-options`,i.orientationOptions),p0(),Up(),Tw(`ngModel`,i.type),cw(`p-options`,i.typeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,Tbe,J4,ys,kbe],styles:[`.sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tag Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tag-labs/sample-po-tag-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-tag
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tag-labs/sample-po-tag-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-tag-labs/sample-po-tag-labs.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-tag-labs`),lg(),ql(29,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Fe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,xe],encapsulation:2,changeDetection:1})}return o})();function Oe(o,c){if(o&1&&ql(0,`po-tag`,12),o&2){let l=c.$implicit;cw(`p-label`,l.label)(`p-type`,l.type)(`p-value`,l.value)}}function Ie(o,c){if(o&1&&(Ml(0,`po-widget`,15)(1,`div`,3),ql(2,`po-info`,16)(3,`po-tag`,17),lg()()),o&2){let l=c.$implicit;Up(2),cw(`p-label`,l.label)(`p-value`,l.value),Up(),cw(`p-type`,l.type)(`p-value`,l.text)}}function Ve(o,c){if(o&1&&(Ml(0,`po-tab`,14),xx(1,Ie,4,4,`po-widget`,15,Ax),lg()),o&2){let l=c.$implicit;cw(`p-label`,EN(l.month)),Up(),Nx(l.details)}}var fe=(()=>{class o{investiments=[{label:`Stocks`,type:`danger`,value:`Low -3.50%`},{label:`Treasury bills`,type:`success`,value:`Growing +2.25%`},{label:`Real estate`,type:`warning`,value:`Risk -0.02%`},{label:`Mutual fund`,type:`success`,value:`Growing +3.00%`}];items=[{month:`June`,details:[{label:`Automatic Payment`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Credit Card`,value:`$ 230`,type:`danger`,text:`Expense`},{label:`Personal Loan`,value:`$ 150`,type:`warning`,text:`Future`}]},{month:`July`,details:[{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Car insurance`,value:`$ 40`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 200`,type:`success`,text:`Income`},{label:`Bank statement`,value:`$ 5`,type:`info`,text:`Document`},{label:`Deposit`,value:`$ 70`,type:`success`,text:`Income`}]},{month:`August`,details:[{label:`Student Loan`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 50`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Automatic Payment`,value:`$ 230`,type:`warning`,text:`Future`},{label:`Credit Card`,value:`$ 150`,type:`warning`,text:`Future`}]}];advantages=[{title:`Platinum Card:`,description:`best card in the market. You earn points and have concierge service and cultural advice.`},{title:`Exclusive agencies:`,description:`environments designed to offer comfort and privacy.`},{title:`Unique experience`,description:`with exclusivity background in travel, culture, entertainment and much more.`},{title:`Progressive discounts`,description:`on service packages, according to the volume of investments.`},{title:`Free tax:`,description:`withdrawals and Transfers Between Unlimited Accounts.`}];userData={name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`};static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-bank-account`]],standalone:!1,decls:20,vars:4,consts:[[`p-title`,`Bank Statement`],[1,`po-mt-1`,`po-lg-7`],[`p-title`,`User information`,1,`po-md-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Name`,3,`p-value`],[`p-value`,`Premium Account`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-title`,`My Investiments`,1,`po-md-12`,`po-sm-mt-1`,`po-mt-1`,`po-lg-mt-1`],[1,`po-md-6`,`po-lg-3`,3,`p-label`,`p-type`,`p-value`],[`p-title`,`Last three month operations`,1,`po-mt-1`,`po-lg-5`],[`p-active`,``,3,`p-label`],[1,`po-lg-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[`p-label-size`,`6`,`p-orientation`,`horizontal`,1,`po-lg-9`,`po-md-8`,3,`p-label`,`p-value`],[`p-icon`,``,`p-orientation`,`horizontal`,1,`po-lg-3`,`po-md-4`,3,`p-type`,`p-value`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`div`,1)(2,`po-widget`,2)(3,`div`,3)(4,`div`,4),ql(5,`po-avatar`,5),lg(),Ml(6,`div`,6)(7,`div`,7),ql(8,`po-info`,8)(9,`po-tag`,9),lg(),Ml(10,`div`,7),ql(11,`po-info`,10),lg()()()(),Ml(12,`po-widget`,11)(13,`div`,3),xx(14,Oe,1,3,`po-tag`,12,Ax),lg()()(),Ml(16,`po-widget`,13)(17,`po-tabs`),xx(18,Ve,3,2,`po-tab`,14,Ax),lg()()()),r&2&&(Up(5),cw(`p-src`,wN(`assets/graphics/`,i.userData.photo)),Up(3),cw(`p-value`,i.userData.name),Up(3),cw(`p-value`,i.userData.email),Up(3),Nx(i.investiments),Up(4),Nx(i.items))},dependencies:[k4,ys,kbe,V8e,SCe,ECe,$8e],encapsulation:2,changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-bank-account-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tag - Bank Account`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Bank Statement">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tag-bank-account`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,qe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,fe],encapsulation:2,changeDetection:1})}return o})();var j=(o,c)=>c.color;var Ne=(o,c)=>c.name;function He(o,c){if(o&1&&ql(0,`po-tag`,3),o&2){let l=c.$implicit;cw(`p-color`,l.color)(`p-value`,l.label)}}function Re(o,c){if(o&1&&ql(0,`po-tag`,5),o&2){let l=c.$implicit;cw(`p-color`,l.color)(`p-label`,l.label)(`p-value`,l.value)}}function $e(o,c){if(o&1&&ql(0,`po-tag`,7),o&2){let l=c.$implicit;cw(`p-color`,l.color)(`p-icon`,l.icon)(`p-value`,l.label)}}function je(o,c){if(o&1&&ql(0,`po-tag`,10),o&2){let l=c.$implicit;cw(`p-color`,l.color)(`p-value`,l.label)}}function Ge(o,c){if(o&1&&(Ml(0,`po-tab`,9)(1,`div`,2),xx(2,je,1,2,`po-tag`,10,j),lg()()),o&2){let l=c.$implicit;cw(`p-label`,l.name),Up(2),Nx(l.tags)}}var Ce=(()=>{class o{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,`0`);return{label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:`Ativo`,value:`Em operacao`,color:`caption-tag-01`},{label:`Pendente`,value:`Aguardando aprovacao`,color:`caption-tag-06`},{label:`Em analise`,value:`Verificacao interna`,color:`caption-tag-11`},{label:`Concluido`,value:`Finalizado com sucesso`,color:`caption-tag-16`},{label:`Cancelado`,value:`Operacao cancelada`,color:`caption-tag-21`},{label:`Expirado`,value:`Prazo excedido`,color:`caption-tag-26`},{label:`Bloqueado`,value:`Acesso restrito`,color:`caption-tag-31`}];categories=[{label:`Financeiro`,color:`caption-tag-03`,icon:`an an-currency-circle-dollar`},{label:`Recursos Humanos`,color:`caption-tag-08`,icon:`an an-users`},{label:`Logistica`,color:`caption-tag-13`,icon:`an an-truck`},{label:`Vendas`,color:`caption-tag-18`,icon:`an an-shopping-cart-simple`},{label:`Suporte`,color:`caption-tag-23`,icon:`an an-headset`},{label:`Marketing`,color:`caption-tag-28`,icon:`an an-megaphone-simple`},{label:`TI`,color:`caption-tag-33`,icon:`an an-desktop-tower`}];families=[{name:`Familia 01-05`,tags:[{label:`caption-tag-01`,color:`caption-tag-01`},{label:`caption-tag-02`,color:`caption-tag-02`},{label:`caption-tag-03`,color:`caption-tag-03`},{label:`caption-tag-04`,color:`caption-tag-04`},{label:`caption-tag-05`,color:`caption-tag-05`}]},{name:`Familia 06-10`,tags:[{label:`caption-tag-06`,color:`caption-tag-06`},{label:`caption-tag-07`,color:`caption-tag-07`},{label:`caption-tag-08`,color:`caption-tag-08`},{label:`caption-tag-09`,color:`caption-tag-09`},{label:`caption-tag-10`,color:`caption-tag-10`}]},{name:`Familia 11-15`,tags:[{label:`caption-tag-11`,color:`caption-tag-11`},{label:`caption-tag-12`,color:`caption-tag-12`},{label:`caption-tag-13`,color:`caption-tag-13`},{label:`caption-tag-14`,color:`caption-tag-14`},{label:`caption-tag-15`,color:`caption-tag-15`}]},{name:`Familia 16-20`,tags:[{label:`caption-tag-16`,color:`caption-tag-16`},{label:`caption-tag-17`,color:`caption-tag-17`},{label:`caption-tag-18`,color:`caption-tag-18`},{label:`caption-tag-19`,color:`caption-tag-19`},{label:`caption-tag-20`,color:`caption-tag-20`}]},{name:`Familia 21-25`,tags:[{label:`caption-tag-21`,color:`caption-tag-21`},{label:`caption-tag-22`,color:`caption-tag-22`},{label:`caption-tag-23`,color:`caption-tag-23`},{label:`caption-tag-24`,color:`caption-tag-24`},{label:`caption-tag-25`,color:`caption-tag-25`}]},{name:`Familia 26-30`,tags:[{label:`caption-tag-26`,color:`caption-tag-26`},{label:`caption-tag-27`,color:`caption-tag-27`},{label:`caption-tag-28`,color:`caption-tag-28`},{label:`caption-tag-29`,color:`caption-tag-29`},{label:`caption-tag-30`,color:`caption-tag-30`}]},{name:`Familia 31-35`,tags:[{label:`caption-tag-31`,color:`caption-tag-31`},{label:`caption-tag-32`,color:`caption-tag-32`},{label:`caption-tag-33`,color:`caption-tag-33`},{label:`caption-tag-34`,color:`caption-tag-34`},{label:`caption-tag-35`,color:`caption-tag-35`}]}];static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-caption-tag-colors`]],standalone:!1,decls:17,vars:0,consts:[[`p-title`,`Caption Tag Colors`],[`p-title`,`Paleta completa - 35 cores`,1,`po-md-12`,`po-mb-1`],[1,`po-row`],[1,`po-md-3`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`],[`p-title`,`Status de processos`,1,`po-md-12`,`po-mb-1`],[`p-orientation`,`horizontal`,1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-label`,`p-value`],[`p-title`,`Categorias com icones`,1,`po-md-12`],[1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-icon`,`p-value`],[`p-title`,`Familias de cores`,1,`po-md-12`,`po-mb-1`],[3,`p-label`],[1,`po-md-4`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-widget`,1)(2,`div`,2),xx(3,He,1,2,`po-tag`,3,j),lg()(),Ml(5,`po-widget`,4)(6,`div`,2),xx(7,Re,1,3,`po-tag`,5,j),lg()(),Ml(9,`po-widget`,6)(10,`div`,2),xx(11,$e,1,3,`po-tag`,7,j),lg()(),Ml(13,`po-widget`,8)(14,`po-tabs`),xx(15,Ge,4,1,`po-tab`,9,Ne),lg()()()),r&2&&(Up(3),Nx(i.captionTags),Up(4),Nx(i.statusItems),Up(4),Nx(i.categories),Up(4),Nx(i.families))},dependencies:[ys,V8e,SCe,ECe,$8e],encapsulation:2,changeDetection:1})}return o})();var Je=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-caption-tag-colors-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tag - Caption Tag Colors`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Caption Tag Colors">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tag-caption-tag-colors`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Je,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ce],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-doc`]],standalone:!1,decls:1168,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTagOrientation`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoTagModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-tag`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoTagComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),lg(),Ml(18,`p`),mN(19,`Além disso, é possível definir uma ação que será executada tanto ao `),Ml(20,`em`),mN(21,`click`),lg(),mN(22,` quanto através das teclas `),Ml(23,`em`),mN(24,`enter/space`),lg(),mN(25,` enquanto navega
utilizando a tecla `),Ml(26,`em`),mN(27,`tab`),lg(),mN(28,`.`),lg(),Ml(29,`p`),mN(30,`Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.`),lg(),Ml(31,`h4`),mN(32,`Tokens customizáveis`),lg(),Ml(33,`p`),mN(34,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(35,`blockquote`)(36,`p`),mN(37,`Para maiores informações, acesse o guia `),Ml(38,`a`,6),mN(39,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(40,`.`),lg()(),Ml(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),mN(45,`Propriedade`),lg(),Ml(46,`th`),mN(47,`Descrição`),lg(),Ml(48,`th`),mN(49,`Valor Padrão`),lg()()(),Ml(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),mN(54,`Default Values`),lg()(),ql(55,`td`)(56,`td`),lg(),Ml(57,`tr`)(58,`td`)(59,`code`),mN(60,`--font-family`),lg()(),Ml(61,`td`),mN(62,`Família tipográfica usada`),lg(),Ml(63,`td`)(64,`code`),mN(65,`var(--font-family-theme)`),lg()()(),Ml(66,`tr`)(67,`td`)(68,`code`),mN(69,`--font-size`),lg()(),Ml(70,`td`),mN(71,`Tamanho da fonte`),lg(),Ml(72,`td`)(73,`code`),mN(74,`var(--font-size-sm)`),lg()()(),Ml(75,`tr`)(76,`td`)(77,`code`),mN(78,`--line-height`),lg()(),Ml(79,`td`),mN(80,`Tamanho da label`),lg(),Ml(81,`td`)(82,`code`),mN(83,`var(---line-height-sm)`),lg()()(),Ml(84,`tr`)(85,`td`)(86,`code`),mN(87,`--border-radius`),lg()(),Ml(88,`td`),mN(89,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(90,`td`)(91,`code`),mN(92,`var(--border-radius-pill)`),lg()()(),Ml(93,`tr`)(94,`td`)(95,`code`),mN(96,`--gap`),lg()(),Ml(97,`td`),mN(98,`Espaçamento entre o label e o value`),lg(),Ml(99,`td`)(100,`code`),mN(101,`var(--spacing-xs)`),lg()()(),Ml(102,`tr`)(103,`td`)(104,`strong`),mN(105,`Neutral`),lg()(),ql(106,`td`)(107,`td`),lg(),Ml(108,`tr`)(109,`td`)(110,`code`),mN(111,`--color-neutral`),lg()(),Ml(112,`td`),mN(113,`Cor principal no estado neutral`),lg(),Ml(114,`td`)(115,`code`),mN(116,`var(--color-neutral-light-10)`),lg()()(),Ml(117,`tr`)(118,`td`)(119,`code`),mN(120,`--text-color-positive`),lg()(),Ml(121,`td`),mN(122,`Cor do texto no estado neutral`),lg(),Ml(123,`td`)(124,`code`),mN(125,`var(--color-neutral-dark-80)`),lg()()(),Ml(126,`tr`)(127,`td`)(128,`strong`),mN(129,`Positive`),lg()(),ql(130,`td`)(131,`td`),lg(),Ml(132,`tr`)(133,`td`)(134,`code`),mN(135,`--color-positive`),lg()(),Ml(136,`td`),mN(137,`Cor principal no estado positive`),lg(),Ml(138,`td`)(139,`code`),mN(140,`var(--color-feedback-positive-lightest)`),lg()()(),Ml(141,`tr`)(142,`td`)(143,`code`),mN(144,`--text-color-positive`),lg()(),Ml(145,`td`),mN(146,`Cor do texto no estado positive`),lg(),Ml(147,`td`)(148,`code`),mN(149,`var(--color-feedback-positive-dark)`),lg()()(),Ml(150,`tr`)(151,`td`)(152,`strong`),mN(153,`Negative`),lg()(),ql(154,`td`)(155,`td`),lg(),Ml(156,`tr`)(157,`td`)(158,`code`),mN(159,`--color-negative`),lg()(),Ml(160,`td`),mN(161,`Cor principal no estado danger`),lg(),Ml(162,`td`)(163,`code`),mN(164,`var(--color-feedback-negative-lightest)`),lg()()(),Ml(165,`tr`)(166,`td`)(167,`code`),mN(168,`--text-color-negative`),lg()(),Ml(169,`td`),mN(170,`Cor do texto no estado danger`),lg(),Ml(171,`td`)(172,`code`),mN(173,`var(--color-feedback-negative-darker)`),lg()()(),Ml(174,`tr`)(175,`td`)(176,`strong`),mN(177,`Warning`),lg()(),ql(178,`td`)(179,`td`),lg(),Ml(180,`tr`)(181,`td`)(182,`code`),mN(183,`--color-tag-warning`),lg()(),Ml(184,`td`),mN(185,`Cor principal no estado warning`),lg(),Ml(186,`td`)(187,`code`),mN(188,`var(--color-feedback-warning-lightest)`),lg()()(),Ml(189,`tr`)(190,`td`)(191,`code`),mN(192,`--text-color-warning`),lg()(),Ml(193,`td`),mN(194,`Cor do texto no estado warning`),lg(),Ml(195,`td`)(196,`code`),mN(197,`var(--color-feedback-warning-darkest)`),lg()()(),Ml(198,`tr`)(199,`td`)(200,`strong`),mN(201,`Info`),lg()(),ql(202,`td`)(203,`td`),lg(),Ml(204,`tr`)(205,`td`)(206,`code`),mN(207,`--color-info`),lg()(),Ml(208,`td`),mN(209,`Cor principal no estado info`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--color-feedback-info-lightest)`),lg()()(),Ml(213,`tr`)(214,`td`)(215,`code`),mN(216,`--text-color-info`),lg()(),Ml(217,`td`),mN(218,`Cor do texto no estado info`),lg(),Ml(219,`td`)(220,`code`),mN(221,`var(--color-feedback-info-dark)`),lg()()(),Ml(222,`tr`)(223,`td`)(224,`strong`),mN(225,`Removable`),lg()(),ql(226,`td`)(227,`td`),lg(),Ml(228,`tr`)(229,`td`)(230,`code`),mN(231,`--color`),lg()(),Ml(232,`td`),mN(233,`Cor principal quando removable`),lg(),Ml(234,`td`)(235,`code`),mN(236,`var(--color-brand-01-lightest)`),lg()()(),Ml(237,`tr`)(238,`td`)(239,`code`),mN(240,`--border-color`),lg()(),Ml(241,`td`),mN(242,`Cor de borda quando removable \xA0`),lg(),Ml(243,`td`)(244,`code`),mN(245,`var(--color-brand-01-lighter)`),lg()()(),Ml(246,`tr`)(247,`td`)(248,`code`),mN(249,`--color-icon`),lg()(),Ml(250,`td`),mN(251,`Cor do ícone quando removable \xA0`),lg(),Ml(252,`td`)(253,`code`),mN(254,`var(--color-action-default)`),lg()()(),Ml(255,`tr`)(256,`td`)(257,`code`),mN(258,`--text-color`),lg()(),Ml(259,`td`),mN(260,`Cor do texto quando removable \xA0`),lg(),Ml(261,`td`)(262,`code`),mN(263,`var(--color-neutral-dark-80)`),lg()()(),Ml(264,`tr`)(265,`td`)(266,`code`),mN(267,`--color-hover`),lg()(),Ml(268,`td`),mN(269,`Cor do hover no estado removable \xA0`),lg(),Ml(270,`td`)(271,`code`),mN(272,`var(--color-brand-01-lighter)`),lg()()(),Ml(273,`tr`)(274,`td`)(275,`strong`),mN(276,`Focused`),lg()(),ql(277,`td`)(278,`td`),lg(),Ml(279,`tr`)(280,`td`)(281,`code`),mN(282,`--outline-color-focused`),lg()(),Ml(283,`td`),mN(284,`Cor do outline do estado de focus`),lg(),Ml(285,`td`)(286,`code`),mN(287,`var(--color-action-focus)`),lg()()(),Ml(288,`tr`)(289,`td`)(290,`strong`),mN(291,`Disabled`),lg()(),ql(292,`td`)(293,`td`),lg(),Ml(294,`tr`)(295,`td`)(296,`code`),mN(297,`--color-disabled`),lg()(),Ml(298,`td`),mN(299,`Cor principal no estado disabled`),lg(),Ml(300,`td`)(301,`code`),mN(302,`var(--color-neutral-light-20)`),lg()()(),Ml(303,`tr`)(304,`td`)(305,`code`),mN(306,`--border-color-disabled`),lg()(),Ml(307,`td`),mN(308,`Cor da borda no estado disabled \xA0`),lg(),Ml(309,`td`)(310,`code`),mN(311,`var(--color-action-disabled)`),lg()()(),Ml(312,`tr`)(313,`td`)(314,`code`),mN(315,`--color-icon-disabled`),lg()(),Ml(316,`td`),mN(317,`Cor do icone no estado disabled \xA0`),lg(),Ml(318,`td`)(319,`code`),mN(320,`var(--color-action-disabled)`),lg()()(),Ml(321,`tr`)(322,`td`)(323,`code`),mN(324,`--text-color-disabled`),lg()(),Ml(325,`td`),mN(326,`Cor do texto no estado disabled \xA0`),lg(),Ml(327,`td`)(328,`code`),mN(329,`var(--color-neutral-mid-60)`),lg()()()()()(),Ml(330,`div`,7)(331,`h4`,8),mN(332,`Seletor`),lg(),Ml(333,`pre`,9),mN(334,`<po-tag
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
`),lg()(),Ml(335,`h4`,10),mN(336,`Propriedades`),lg(),Ml(337,`table`,11)(338,`tr`,12)(339,`th`,13),mN(340,`Nome`),lg(),Ml(341,`th`,13),mN(342,`Tipo`),lg(),Ml(343,`th`,13),mN(344,`Padrão`),lg(),Ml(345,`th`,13),mN(346,`Descrição`),lg()(),Ml(347,`tr`,14)(348,`td`,15)(349,`div`,16)(350,`span`,17),mN(351,` (p-click)`),ql(352,`br`),lg()()(),Ml(353,`td`,18)(354,`code`,19),mN(355,`EventEmitter`),lg()(),Ml(356,`td`,20),mN(357,`-`),lg(),Ml(358,`td`,21)(359,`em`)(360,`strong`),mN(361,`(opcional)`),lg()(),Ml(362,`p`),mN(363,`Ação que será executada ao clicar sobre o `),Ml(364,`code`),mN(365,`po-tag`),lg(),mN(366,` e que receberá como parâmetro um objeto contendo o seu valor e tipo.`),lg(),Ml(367,`p`),mN(368,`O evento de click só funciona se a tag não for removível.`),lg()()(),Ml(369,`tr`,14)(370,`td`,15)(371,`div`,22)(372,`span`,23),mN(373,` p-color`),ql(374,`br`),lg()()(),Ml(375,`td`,18)(376,`code`,24),mN(377,`string`),lg()(),Ml(378,`td`,20),mN(379,`-`),lg(),Ml(380,`td`,21)(381,`em`)(382,`strong`),mN(383,`(opcional)`),lg()(),Ml(384,`p`),mN(385,`Determina a cor da tag. As maneiras de customizar as cores são:`),lg(),Ml(386,`ul`)(387,`li`),mN(388,`Hexadeximal, por exemplo `),Ml(389,`code`),mN(390,`#c64840`),lg(),mN(391,`;`),lg(),Ml(392,`li`),mN(393,`RGB, como `),Ml(394,`code`),mN(395,`rgb(0, 0, 165)`),lg(),mN(396,`;`),lg(),Ml(397,`li`),mN(398,`O nome da cor, por exemplo `),Ml(399,`code`),mN(400,`blue`),lg(),mN(401,`;`),lg(),Ml(402,`li`),mN(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Ml(404,`ul`)(405,`li`),ql(406,`span`,25),Ml(407,`code`),mN(408,`color-01`),lg()(),Ml(409,`li`),ql(410,`span`,26),Ml(411,`code`),mN(412,`color-02`),lg()(),Ml(413,`li`),ql(414,`span`,27),Ml(415,`code`),mN(416,`color-03`),lg()(),Ml(417,`li`),ql(418,`span`,28),Ml(419,`code`),mN(420,`color-04`),lg()(),Ml(421,`li`),ql(422,`span`,29),Ml(423,`code`),mN(424,`color-05`),lg()(),Ml(425,`li`),ql(426,`span`,30),Ml(427,`code`),mN(428,`color-06`),lg()(),Ml(429,`li`),ql(430,`span`,31),Ml(431,`code`),mN(432,`color-07`),lg()(),Ml(433,`li`),ql(434,`span`,32),Ml(435,`code`),mN(436,`color-08`),lg()(),Ml(437,`li`),ql(438,`span`,33),Ml(439,`code`),mN(440,`color-09`),lg()(),Ml(441,`li`),ql(442,`span`,34),Ml(443,`code`),mN(444,`color-10`),lg()(),Ml(445,`li`),ql(446,`span`,35),Ml(447,`code`),mN(448,`color-11`),lg()(),Ml(449,`li`),ql(450,`span`,36),Ml(451,`code`),mN(452,`color-12`),lg()()()()(),Ml(453,`blockquote`)(454,`p`),mN(455,`Também é possível utilizar as 35 cores da paleta `),Ml(456,`strong`),mN(457,`Caption Tag Colors`),lg(),mN(458,`:`),lg()(),Ml(459,`ul`)(460,`li`),ql(461,`span`,37),Ml(462,`code`),mN(463,`caption-tag-01`),lg(),ql(464,`span`,38),Ml(465,`code`),mN(466,`caption-tag-02`),lg(),ql(467,`span`,39),Ml(468,`code`),mN(469,`caption-tag-03`),lg(),ql(470,`span`,40),Ml(471,`code`),mN(472,`caption-tag-04`),lg(),ql(473,`span`,41),Ml(474,`code`),mN(475,`caption-tag-05`),lg()(),Ml(476,`li`),ql(477,`span`,42),Ml(478,`code`),mN(479,`caption-tag-06`),lg(),ql(480,`span`,43),Ml(481,`code`),mN(482,`caption-tag-07`),lg(),ql(483,`span`,44),Ml(484,`code`),mN(485,`caption-tag-08`),lg(),ql(486,`span`,45),Ml(487,`code`),mN(488,`caption-tag-09`),lg(),ql(489,`span`,46),Ml(490,`code`),mN(491,`caption-tag-10`),lg()(),Ml(492,`li`),ql(493,`span`,47),Ml(494,`code`),mN(495,`caption-tag-11`),lg(),ql(496,`span`,48),Ml(497,`code`),mN(498,`caption-tag-12`),lg(),ql(499,`span`,49),Ml(500,`code`),mN(501,`caption-tag-13`),lg(),ql(502,`span`,50),Ml(503,`code`),mN(504,`caption-tag-14`),lg(),ql(505,`span`,51),Ml(506,`code`),mN(507,`caption-tag-15`),lg()(),Ml(508,`li`),ql(509,`span`,52),Ml(510,`code`),mN(511,`caption-tag-16`),lg(),ql(512,`span`,53),Ml(513,`code`),mN(514,`caption-tag-17`),lg(),ql(515,`span`,54),Ml(516,`code`),mN(517,`caption-tag-18`),lg(),ql(518,`span`,55),Ml(519,`code`),mN(520,`caption-tag-19`),lg(),ql(521,`span`,56),Ml(522,`code`),mN(523,`caption-tag-20`),lg()(),Ml(524,`li`),ql(525,`span`,57),Ml(526,`code`),mN(527,`caption-tag-21`),lg(),ql(528,`span`,58),Ml(529,`code`),mN(530,`caption-tag-22`),lg(),ql(531,`span`,59),Ml(532,`code`),mN(533,`caption-tag-23`),lg(),ql(534,`span`,60),Ml(535,`code`),mN(536,`caption-tag-24`),lg(),ql(537,`span`,61),Ml(538,`code`),mN(539,`caption-tag-25`),lg()(),Ml(540,`li`),ql(541,`span`,62),Ml(542,`code`),mN(543,`caption-tag-26`),lg(),ql(544,`span`,63),Ml(545,`code`),mN(546,`caption-tag-27`),lg(),ql(547,`span`,64),Ml(548,`code`),mN(549,`caption-tag-28`),lg(),ql(550,`span`,65),Ml(551,`code`),mN(552,`caption-tag-29`),lg(),ql(553,`span`,66),Ml(554,`code`),mN(555,`caption-tag-30`),lg()(),Ml(556,`li`),ql(557,`span`,67),Ml(558,`code`),mN(559,`caption-tag-31`),lg(),ql(560,`span`,68),Ml(561,`code`),mN(562,`caption-tag-32`),lg(),ql(563,`span`,69),Ml(564,`code`),mN(565,`caption-tag-33`),lg(),ql(566,`span`,70),Ml(567,`code`),mN(568,`caption-tag-34`),lg(),ql(569,`span`,71),Ml(570,`code`),mN(571,`caption-tag-35`),lg()()(),Ml(572,`p`),mN(573,`Exemplo de uso:`),lg(),Ml(574,`pre`)(575,`code`),mN(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),lg()(),Ml(577,`ul`)(578,`li`),mN(579,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background;`),lg(),Ml(580,`li`),mN(581,`Para as cores legacy (`),Ml(582,`code`),mN(583,`color-01`),lg(),mN(584,` a `),Ml(585,`code`),mN(586,`color-12`),lg(),mN(587,`) e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade.`),lg(),Ml(588,`li`),mN(589,`Para as cores `),Ml(590,`strong`),mN(591,`Caption Tag Colors`),lg(),mN(592,` (`),Ml(593,`code`),mN(594,`caption-tag-01`),lg(),mN(595,` a `),Ml(596,`code`),mN(597,`caption-tag-35`),lg(),mN(598,`), a cor do texto é fixa e definida via token CSS, não sendo possível alterá-la via `),Ml(599,`code`),mN(600,`p-text-color`),lg(),mN(601,`.`),lg()(),Ml(602,`blockquote`)(603,`p`)(604,`strong`),mN(605,`Atenção:`),lg(),mN(606,` A propriedade `),Ml(607,`code`),mN(608,`p-type`),lg(),mN(609,` sobrepõe esta definição.`),lg()()()(),Ml(610,`tr`,14)(611,`td`,15)(612,`div`,22)(613,`span`,23),mN(614,` p-disabled`),ql(615,`br`),lg()()(),Ml(616,`td`,18)(617,`code`,72),mN(618,`boolean`),lg()(),Ml(619,`td`,20)(620,`p`)(621,`code`),mN(622,`false`),lg()()(),Ml(623,`td`,21)(624,`em`)(625,`strong`),mN(626,`(opcional)`),lg()(),Ml(627,`p`),mN(628,`Desabilita o `),Ml(629,`code`),mN(630,`po-tag`),lg(),mN(631,` e não permite que o usuário interaja com o mesmo.`),lg(),Ml(632,`blockquote`)(633,`p`),mN(634,`A propriedade `),Ml(635,`code`),mN(636,`p-disabled`),lg(),mN(637,` somente terá efeito caso a propriedade `),Ml(638,`code`),mN(639,`p-removable`),lg(),mN(640,` esteja definida como `),Ml(641,`code`),mN(642,`true`),lg(),mN(643,`.`),lg()()()(),Ml(644,`tr`,14)(645,`td`,15)(646,`div`,22)(647,`span`,23),mN(648,` p-icon`),ql(649,`br`),lg()()(),Ml(650,`td`,18)(651,`code`,24),mN(652,`string `),lg(),Ml(653,`code`,72),mN(654,` boolean `),lg(),Ml(655,`code`,73),mN(656,` TemplateRef<void>`),lg()(),Ml(657,`td`,20)(658,`p`)(659,`code`),mN(660,`false`),lg()()(),Ml(661,`td`,21)(662,`em`)(663,`strong`),mN(664,`(opcional)`),lg()(),Ml(665,`p`),mN(666,`Define ou ativa um ícone que será exibido ao lado do valor da `),Ml(667,`em`),mN(668,`tag`),lg(),mN(669,`.`),lg(),Ml(670,`p`),mN(671,`Quando `),Ml(672,`code`),mN(673,`p-type`),lg(),mN(674,` estiver definida, basta informar um valor igual a `),Ml(675,`code`),mN(676,`true`),lg(),mN(677,` para que o ícone seja exibido conforme descrições abaixo:`),lg(),Ml(678,`ul`)(679,`li`),ql(680,`span`,74),mN(681,` - `),Ml(682,`code`),mN(683,`success`),lg()(),Ml(684,`li`),ql(685,`span`,75),mN(686,` - `),Ml(687,`code`),mN(688,`warning`),lg()(),Ml(689,`li`),ql(690,`span`,76),mN(691,` - `),Ml(692,`code`),mN(693,`danger`),lg()(),Ml(694,`li`),ql(695,`span`,77),mN(696,` - `),Ml(697,`code`),mN(698,`info`),lg()()(),Ml(699,`p`),mN(700,`Também É possível usar qualquer um dos ícones da `),Ml(701,`a`,78),mN(702,`Biblioteca de ícones`),lg(),mN(703,`. conforme exemplo abaixo:`),lg(),Ml(704,`pre`)(705,`code`),mN(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),lg()(),Ml(707,`p`),mN(708,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(709,`em`),mN(710,`Font Awesome`),lg(),mN(711,`, da seguinte forma:`),lg(),Ml(712,`pre`)(713,`code`),mN(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),lg()(),Ml(715,`p`),mN(716,`Outra opção seria a customização do ícone através do `),Ml(717,`code`),mN(718,`TemplateRef`),lg(),mN(719,`, conforme exemplo abaixo:`),lg(),Ml(720,`pre`)(721,`code`),mN(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(723,`blockquote`)(724,`p`),mN(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(726,`code`),mN(727,`font-size: inherit`),lg(),mN(728,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(729,`tr`,14)(730,`td`,15)(731,`div`,22)(732,`span`,23),mN(733,` p-label`),ql(734,`br`),lg()()(),Ml(735,`td`,18)(736,`code`,24),mN(737,`string`),lg()(),Ml(738,`td`,20),mN(739,`-`),lg(),Ml(740,`td`,21)(741,`em`)(742,`strong`),mN(743,`(opcional)`),lg()(),Ml(744,`p`),mN(745,`Define uma legenda que será exibida acima ou ao lado da `),Ml(746,`em`),mN(747,`tag`),lg(),mN(748,`, de acordo com a `),Ml(749,`code`),mN(750,`p-orientation`),lg(),mN(751,`.`),lg()()(),Ml(752,`tr`,14)(753,`td`,15)(754,`div`,22)(755,`span`,23),mN(756,` p-literals`),ql(757,`br`),lg()()(),Ml(758,`td`,18)(759,`code`,79),mN(760,`PoTagLiterals`),lg()(),Ml(761,`td`,20),mN(762,`-`),lg(),Ml(763,`td`,21)(764,`em`)(765,`strong`),mN(766,`(opcional)`),lg()(),Ml(767,`p`),mN(768,`Objeto com as literais usadas no `),Ml(769,`code`),mN(770,`po-tag`),lg(),mN(771,`.`),lg(),Ml(772,`p`),mN(773,`Para utilizar, basta passar a literal customizada:`),lg(),Ml(774,`pre`)(775,`code`),mN(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),lg()(),Ml(777,`p`),mN(778,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),lg(),Ml(779,`pre`)(780,`code`),mN(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),lg()(),Ml(782,`blockquote`)(783,`p`),mN(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(785,`a`,80)(786,`code`),mN(787,`PoI18nService`),lg()(),mN(788,` ou do browser.`),lg()()()(),Ml(789,`tr`,14)(790,`td`,15)(791,`div`,22)(792,`span`,23),mN(793,` p-orientation`),ql(794,`br`),lg()()(),Ml(795,`td`,18)(796,`code`,81),mN(797,`PoTagOrientation`),lg()(),Ml(798,`td`,20)(799,`p`)(800,`code`),mN(801,`vertical`),lg()()(),Ml(802,`td`,21)(803,`em`)(804,`strong`),mN(805,`(opcional)`),lg()(),Ml(806,`p`),mN(807,`Define o `),Ml(808,`em`),mN(809,`layout`),lg(),mN(810,` de exibição.`),lg()()(),Ml(811,`tr`,14)(812,`td`,15)(813,`div`,22)(814,`span`,23),mN(815,` p-removable`),ql(816,`br`),lg()()(),Ml(817,`td`,18)(818,`code`,72),mN(819,`boolean`),lg()(),Ml(820,`td`,20)(821,`p`)(822,`code`),mN(823,`false`),lg()()(),Ml(824,`td`,21)(825,`em`)(826,`strong`),mN(827,`(opcional)`),lg()(),Ml(828,`p`),mN(829,`Habilita a opção de remover a tag`),lg()()(),Ml(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),mN(834,` (p-close)`),ql(835,`br`),lg()()(),Ml(836,`td`,18)(837,`code`,19),mN(838,`EventEmitter`),lg()(),Ml(839,`td`,20),mN(840,`-`),lg(),Ml(841,`td`,21)(842,`em`)(843,`strong`),mN(844,`(opcional)`),lg()(),Ml(845,`p`),mN(846,`Ação que sera executada quando clicar sobre o ícone de remover no `),Ml(847,`code`),mN(848,`po-tag`),lg()()()(),Ml(849,`tr`,14)(850,`td`,15)(851,`div`,22)(852,`span`,23),mN(853,` p-text-color`),ql(854,`br`),lg()()(),Ml(855,`td`,18)(856,`code`,24),mN(857,`string`),lg()(),Ml(858,`td`,20),mN(859,`-`),lg(),Ml(860,`td`,21)(861,`em`)(862,`strong`),mN(863,`(opcional)`),lg()(),Ml(864,`p`),mN(865,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),lg(),Ml(866,`ul`)(867,`li`)(868,`p`),mN(869,`Hexadeximal, por exemplo `),Ml(870,`code`),mN(871,`#c64840`),lg(),mN(872,`;`),lg()(),Ml(873,`li`)(874,`p`),mN(875,`RGB, como `),Ml(876,`code`),mN(877,`rgb(0, 0, 165)`),lg(),mN(878,`;`),lg()(),Ml(879,`li`)(880,`p`),mN(881,`O nome da cor, por exemplo `),Ml(882,`code`),mN(883,`blue`),lg(),mN(884,`;`),lg()(),Ml(885,`li`)(886,`p`),mN(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),lg(),Ml(888,`ul`)(889,`li`),ql(890,`span`,25),Ml(891,`code`),mN(892,`color-01`),lg()(),Ml(893,`li`),ql(894,`span`,26),Ml(895,`code`),mN(896,`color-02`),lg()(),Ml(897,`li`),ql(898,`span`,27),Ml(899,`code`),mN(900,`color-03`),lg()(),Ml(901,`li`),ql(902,`span`,28),Ml(903,`code`),mN(904,`color-04`),lg()(),Ml(905,`li`),ql(906,`span`,29),Ml(907,`code`),mN(908,`color-05`),lg()(),Ml(909,`li`),ql(910,`span`,30),Ml(911,`code`),mN(912,`color-06`),lg()(),Ml(913,`li`),ql(914,`span`,31),Ml(915,`code`),mN(916,`color-07`),lg()(),Ml(917,`li`),ql(918,`span`,32),Ml(919,`code`),mN(920,`color-08`),lg()(),Ml(921,`li`),ql(922,`span`,33),Ml(923,`code`),mN(924,`color-09`),lg()(),Ml(925,`li`),ql(926,`span`,34),Ml(927,`code`),mN(928,`color-10`),lg()(),Ml(929,`li`),ql(930,`span`,35),Ml(931,`code`),mN(932,`color-11`),lg()(),Ml(933,`li`),ql(934,`span`,36),Ml(935,`code`),mN(936,`color-12`),lg()()()(),Ml(937,`li`)(938,`p`),mN(939,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),lg()()(),Ml(940,`blockquote`)(941,`p`)(942,`strong`),mN(943,`Atenção:`),lg(),mN(944,` A propriedade `),Ml(945,`code`),mN(946,`p-type`),lg(),mN(947,` sobrepõe esta definição.`),lg()(),Ml(948,`blockquote`)(949,`p`)(950,`strong`),mN(951,`Atenção:`),lg(),mN(952,` As cores da paleta `),Ml(953,`strong`),mN(954,`Caption Tag Colors`),lg(),mN(955,` (`),Ml(956,`code`),mN(957,`caption-tag-01`),lg(),mN(958,` a `),Ml(959,`code`),mN(960,`caption-tag-35`),lg(),mN(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),lg()()()(),Ml(962,`tr`,14)(963,`td`,15)(964,`div`,22)(965,`span`,23),mN(966,` p-type`),ql(967,`br`),lg()()(),Ml(968,`td`,18)(969,`code`,82),mN(970,`PoTagType`),lg()(),Ml(971,`td`,20)(972,`p`)(973,`code`),mN(974,`info`),lg()()(),Ml(975,`td`,21)(976,`em`)(977,`strong`),mN(978,`(opcional)`),lg()(),Ml(979,`p`),mN(980,`Define o tipo da `),Ml(981,`em`),mN(982,`tag`),lg(),mN(983,`.`),lg(),Ml(984,`p`),mN(985,`Valores válidos:`),lg(),Ml(986,`ul`)(987,`li`)(988,`code`),mN(989,`success`),lg(),mN(990,`: cor verde utilizada para simbolizar sucesso ou êxito.`),lg(),Ml(991,`li`)(992,`code`),mN(993,`warning`),lg(),mN(994,`: cor amarela que representa aviso ou advertência.`),lg(),Ml(995,`li`)(996,`code`),mN(997,`danger`),lg(),mN(998,`: cor vermelha para erro ou aviso crítico.`),lg(),Ml(999,`li`)(1e3,`code`),mN(1001,`info`),lg(),mN(1002,`: cor azul claro que caracteriza conteúdo informativo.`),lg(),Ml(1003,`li`)(1004,`code`),mN(1005,`neutral`),lg(),mN(1006,`: cor cinza claro para uso geral.`),lg()(),Ml(1007,`blockquote`)(1008,`p`),mN(1009,`Quando esta propriedade for definida, irá sobrepor a definição de `),Ml(1010,`code`),mN(1011,`p-color`),lg(),mN(1012,` e `),Ml(1013,`code`),mN(1014,`p-icon`),lg(),mN(1015,` somente será exibido caso seja `),Ml(1016,`code`),mN(1017,`true`),lg(),mN(1018,`.`),lg()()()(),Ml(1019,`tr`,14)(1020,`td`,15)(1021,`div`,22)(1022,`span`,23),mN(1023,` p-value`),ql(1024,`br`),lg()()(),Ml(1025,`td`,18)(1026,`code`,24),mN(1027,`string`),lg()(),Ml(1028,`td`,20),mN(1029,`-`),lg(),Ml(1030,`td`,21)(1031,`p`),mN(1032,`Texto da tag.`),lg()()()(),Ml(1033,`h3`),mN(1034,`Interfaces`),lg(),Ml(1035,`h4`,83)(1036,`code`,5),mN(1037,`PoTagLiterals`),lg()(),Ml(1038,`div`,2)(1039,`p`),mN(1040,`Interface para definição das literais usadas no `),Ml(1041,`code`),mN(1042,`po-tag`),lg(),mN(1043,`.`),lg()(),Ml(1044,`h4`,10),mN(1045,`Propriedades`),lg(),Ml(1046,`table`,11)(1047,`tr`,12)(1048,`th`,13),mN(1049,`Nome`),lg(),Ml(1050,`th`,13),mN(1051,`Tipo`),lg(),Ml(1052,`th`,13),mN(1053,`Descrição`),lg()(),Ml(1054,`tr`,14)(1055,`td`,15)(1056,`div`,22)(1057,`span`,23),mN(1058,` remove`),ql(1059,`br`),lg()()(),Ml(1060,`td`,18)(1061,`code`,24),mN(1062,`string`),lg()(),Ml(1063,`td`,21)(1064,`em`)(1065,`strong`),mN(1066,`(opcional)`),lg()(),Ml(1067,`p`),mN(1068,`Texto exibido no tooltip indicando remoção da tag.`),lg()()()(),Ml(1069,`h3`),mN(1070,`Enums`),lg(),Ml(1071,`h4`,4)(1072,`code`,5),mN(1073,`PoTagOrientation`),lg()(),Ml(1074,`div`,2)(1075,`p`),mN(1076,`Define os tipos de orientações disponíveis para o `),Ml(1077,`code`),mN(1078,`po-tag`),lg(),mN(1079,`.`),lg()(),Ml(1080,`h4`,10),mN(1081,`Propriedades`),lg(),Ml(1082,`table`,11)(1083,`tr`,12)(1084,`th`,13),mN(1085,`Nome`),lg(),Ml(1086,`th`,13),mN(1087,`Descrição`),lg()(),Ml(1088,`tr`,14)(1089,`td`,15)(1090,`div`,22)(1091,`span`,23),mN(1092,` Horizontal`),ql(1093,`br`),lg()()(),Ml(1094,`td`,21)(1095,`p`),mN(1096,`A tag será exibida na horizontal, ao lado direito em relação ao label.`),lg()()(),Ml(1097,`tr`,14)(1098,`td`,15)(1099,`div`,22)(1100,`span`,23),mN(1101,` Vertical`),ql(1102,`br`),lg()()(),Ml(1103,`td`,21)(1104,`p`),mN(1105,`Exibe a tag na vertical, ou seja, abaixo do label.`),lg()()()(),Ml(1106,`h4`,4)(1107,`code`,5),mN(1108,`PoTagType`),lg()(),Ml(1109,`div`,2)(1110,`p`),mN(1111,`Define os tipos disponíveis para o `),Ml(1112,`code`),mN(1113,`po-tag`),lg(),mN(1114,`.`),lg()(),Ml(1115,`h4`,10),mN(1116,`Propriedades`),lg(),Ml(1117,`table`,11)(1118,`tr`,12)(1119,`th`,13),mN(1120,`Nome`),lg(),Ml(1121,`th`,13),mN(1122,`Descrição`),lg()(),Ml(1123,`tr`,14)(1124,`td`,15)(1125,`div`,22)(1126,`span`,23),mN(1127,` Danger`),ql(1128,`br`),lg()()(),Ml(1129,`td`,21)(1130,`p`),mN(1131,`Erro, perigo, problema ou aviso crítico.`),lg()()(),Ml(1132,`tr`,14)(1133,`td`,15)(1134,`div`,22)(1135,`span`,23),mN(1136,` Info`),ql(1137,`br`),lg()()(),Ml(1138,`td`,21)(1139,`p`),mN(1140,`Informativo ou explicativo.`),lg()()(),Ml(1141,`tr`,14)(1142,`td`,15)(1143,`div`,22)(1144,`span`,23),mN(1145,` Success`),ql(1146,`br`),lg()()(),Ml(1147,`td`,21)(1148,`p`),mN(1149,`Confirmação, resultados positivos ou êxito.`),lg()()(),Ml(1150,`tr`,14)(1151,`td`,15)(1152,`div`,22)(1153,`span`,23),mN(1154,` Warning`),ql(1155,`br`),lg()()(),Ml(1156,`td`,21)(1157,`p`),mN(1158,`Aviso ou advertência.`),lg()()(),Ml(1159,`tr`,14)(1160,`td`,15)(1161,`div`,22)(1162,`span`,23),mN(1163,` Neutral`),ql(1164,`br`),lg()()(),Ml(1165,`td`,21)(1166,`p`),mN(1167,`De uso geral, quando os tipos Info, Warning, Success e Danger não atendem a necessidade.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-tag-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-tag-basic-view`)(6,`sample-po-tag-labs-view`)(7,`sample-po-tag-bank-account-view`)(8,`sample-po-tag-caption-tag-colors-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ee,ve,he,Te,ye],encapsulation:2,changeDetection:1})}return o})()}];var we=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[NL.forChild(Ke),NL]})}return o})();var _t=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[ar,we]})}return o})();export{_t as DocPoTagModule};