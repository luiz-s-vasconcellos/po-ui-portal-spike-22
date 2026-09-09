import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,En as w4,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,J as Ml,Ji as mY,Li as ht,Mn as ys,Ni as gY,Nr as PO,Ot as Zt,Pi as hN,Qi as pN,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,b as By,fi as ag,ga as wx,gi as bL,ha as ww,jn as ybe,l as ar,li as _x,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,vi as bx,yi as cN}from"./main-3EWTGE7T.js";var Se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-value`,`PO Tag`]],template:function(r,i){r&1&&Gl(0,`po-tag`,0)},dependencies:[ys],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tag Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tag-basic/sample-po-tag-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-tag p-value="PO Tag"> </po-tag>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tag-basic/sample-po-tag-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tag-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return o})();function Me(o,c){if(o&1){let l=Ax();Tl(0,`po-select`,14),ww(`ngModelChange`,function(i){Ky(l);let g=Fx();return uN(g.icon,i)||(g.icon=i),Xy(i)}),ag(),a0()}if(o&2){let l=Fx();Ew(`ngModel`,l.icon),nw(`p-options`,l.iconList),l0()}}function Be(o,c){if(o&1){let l=Ax();Tl(0,`po-switch`,15),ww(`ngModelChange`,function(i){Ky(l);let g=Fx();return uN(g.icon,i)||(g.icon=i),Xy(i)}),ag(),a0()}if(o&2)Ew(`ngModel`,Fx().icon),l0()}var xe=(()=>{class o{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:`removable`,label:`Removable`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];orientationOptions=[{label:`Horizontal`,value:By.Horizontal},{label:`Vertical`,value:By.Vertical}];typeOptions=[{label:`None`,value:void 0},{label:`Info`,value:Ml.Info},{label:`Danger`,value:Ml.Danger},{label:`Success`,value:Ml.Success},{label:`Warning`,value:Ml.Warning},{label:`Neutral`,value:Ml.Neutral}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}propertiesChange(l){let r=[...this.propertiesOptions];l.includes(`removable`)?(r[1]={value:`disabled`,label:`Disabled`,disabled:!1},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!==`disabled`)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value=`PO Tag`,this.type=void 0,this.event=``,this.textColor=void 0,this.properties=[]}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-labs`]],standalone:!1,decls:21,vars:22,consts:[[`f`,`ngForm`],[3,`p-click`,`p-color`,`p-disabled`,`p-removable`,`p-icon`,`p-text-color`,`p-label`,`p-orientation`,`p-type`,`p-value`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`color`,`p-clean`,``,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`textColor`,`p-clean`,``,`p-label`,`Text color`,`p-help`,`color-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModel`],[`name`,`orientation`,`p-columns`,`1`,`p-label`,`Orientation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let g=Ax();Tl(0,`po-tag`,1),ht(`p-click`,function(){return i.changeEvent(`p-click`)}),ag(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3),ag(),Gl(4,`po-divider`),Tl(5,`form`,null,0)(7,`div`,2)(8,`po-input`,4),ww(`ngModelChange`,function(d){return Ky(g),uN(i.label,d)||(i.label=d),Xy(d)}),ag(),a0(),Tl(9,`po-input`,5),ww(`ngModelChange`,function(d){return Ky(g),uN(i.value,d)||(i.value=d),Xy(d)}),ag(),a0(),ag(),Tl(10,`div`,2)(11,`po-input`,6),ww(`ngModelChange`,function(d){return Ky(g),uN(i.color,d)||(i.color=d),Xy(d)}),ag(),a0(),Tl(12,`po-input`,7),ww(`ngModelChange`,function(d){return Ky(g),uN(i.textColor,d)||(i.textColor=d),Xy(d)}),ag(),a0(),_x(13,Me,1,2,`po-select`,8),Tl(14,`po-checkbox-group`,9),ww(`ngModelChange`,function(d){return Ky(g),uN(i.properties,d)||(i.properties=d),Xy(d)}),ht(`p-change`,function(d){return i.propertiesChange(d)}),ag(),a0(),_x(15,Be,1,1,`po-switch`,10),ag(),Tl(16,`div`,2)(17,`po-radio-group`,11),ww(`ngModelChange`,function(d){return Ky(g),uN(i.orientation,d)||(i.orientation=d),Xy(d)}),ag(),a0(),Tl(18,`po-radio-group`,12),ww(`ngModelChange`,function(d){return Ky(g),uN(i.type,d)||(i.type=d),Xy(d)}),ag(),a0(),ag(),Tl(19,`div`,2)(20,`po-button`,13),ht(`p-click`,function(){return i.restore()}),ag()()()}r&2&&(nw(`p-color`,i.color)(`p-disabled`,i.properties.includes(`disabled`))(`p-removable`,i.properties.includes(`removable`))(`p-icon`,i.icon)(`p-text-color`,i.textColor)(`p-label`,i.label)(`p-orientation`,i.orientation)(`p-type`,i.type)(`p-value`,i.value),jp(3),nw(`p-value`,i.event),jp(5),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.value),l0(),jp(2),Ew(`ngModel`,i.color),l0(),jp(),Ew(`ngModel`,i.textColor),l0(),jp(),Dx(i.type?-1:13),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Dx(i.type?15:-1),jp(2),Ew(`ngModel`,i.orientation),nw(`p-options`,i.orientationOptions),l0(),jp(),Ew(`ngModel`,i.type),nw(`p-options`,i.typeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,fbe,j4,ys,ybe],styles:[`.sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tag Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tag-labs/sample-po-tag-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-tag
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tag-labs/sample-po-tag-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-tag-labs/sample-po-tag-labs.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-tag-labs`),ag(),Gl(29,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Fe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,xe],encapsulation:2,changeDetection:1})}return o})();function Oe(o,c){if(o&1&&Gl(0,`po-tag`,12),o&2){let l=c.$implicit;nw(`p-label`,l.label)(`p-type`,l.type)(`p-value`,l.value)}}function Ie(o,c){if(o&1&&(Tl(0,`po-widget`,15)(1,`div`,3),Gl(2,`po-info`,16)(3,`po-tag`,17),ag()()),o&2){let l=c.$implicit;jp(2),nw(`p-label`,l.label)(`p-value`,l.value),jp(),nw(`p-type`,l.type)(`p-value`,l.text)}}function Ve(o,c){if(o&1&&(Tl(0,`po-tab`,14),Cx(1,Ie,4,4,`po-widget`,15,wx),ag()),o&2){let l=c.$implicit;nw(`p-label`,hN(l.month)),jp(),bx(l.details)}}var fe=(()=>{class o{investiments=[{label:`Stocks`,type:`danger`,value:`Low -3.50%`},{label:`Treasury bills`,type:`success`,value:`Growing +2.25%`},{label:`Real estate`,type:`warning`,value:`Risk -0.02%`},{label:`Mutual fund`,type:`success`,value:`Growing +3.00%`}];items=[{month:`June`,details:[{label:`Automatic Payment`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Credit Card`,value:`$ 230`,type:`danger`,text:`Expense`},{label:`Personal Loan`,value:`$ 150`,type:`warning`,text:`Future`}]},{month:`July`,details:[{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Car insurance`,value:`$ 40`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 200`,type:`success`,text:`Income`},{label:`Bank statement`,value:`$ 5`,type:`info`,text:`Document`},{label:`Deposit`,value:`$ 70`,type:`success`,text:`Income`}]},{month:`August`,details:[{label:`Student Loan`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 50`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Automatic Payment`,value:`$ 230`,type:`warning`,text:`Future`},{label:`Credit Card`,value:`$ 150`,type:`warning`,text:`Future`}]}];advantages=[{title:`Platinum Card:`,description:`best card in the market. You earn points and have concierge service and cultural advice.`},{title:`Exclusive agencies:`,description:`environments designed to offer comfort and privacy.`},{title:`Unique experience`,description:`with exclusivity background in travel, culture, entertainment and much more.`},{title:`Progressive discounts`,description:`on service packages, according to the volume of investments.`},{title:`Free tax:`,description:`withdrawals and Transfers Between Unlimited Accounts.`}];userData={name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`};static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-bank-account`]],standalone:!1,decls:20,vars:4,consts:[[`p-title`,`Bank Statement`],[1,`po-mt-1`,`po-lg-7`],[`p-title`,`User information`,1,`po-md-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Name`,3,`p-value`],[`p-value`,`Premium Account`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-title`,`My Investiments`,1,`po-md-12`,`po-sm-mt-1`,`po-mt-1`,`po-lg-mt-1`],[1,`po-md-6`,`po-lg-3`,3,`p-label`,`p-type`,`p-value`],[`p-title`,`Last three month operations`,1,`po-mt-1`,`po-lg-5`],[`p-active`,``,3,`p-label`],[1,`po-lg-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[`p-label-size`,`6`,`p-orientation`,`horizontal`,1,`po-lg-9`,`po-md-8`,3,`p-label`,`p-value`],[`p-icon`,``,`p-orientation`,`horizontal`,1,`po-lg-3`,`po-md-4`,3,`p-type`,`p-value`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`div`,1)(2,`po-widget`,2)(3,`div`,3)(4,`div`,4),Gl(5,`po-avatar`,5),ag(),Tl(6,`div`,6)(7,`div`,7),Gl(8,`po-info`,8)(9,`po-tag`,9),ag(),Tl(10,`div`,7),Gl(11,`po-info`,10),ag()()()(),Tl(12,`po-widget`,11)(13,`div`,3),Cx(14,Oe,1,3,`po-tag`,12,wx),ag()()(),Tl(16,`po-widget`,13)(17,`po-tabs`),Cx(18,Ve,3,2,`po-tab`,14,wx),ag()()()),r&2&&(jp(5),nw(`p-src`,pN(`assets/graphics/`,i.userData.photo)),jp(3),nw(`p-value`,i.userData.name),jp(3),nw(`p-value`,i.userData.email),jp(3),bx(i.investiments),jp(4),bx(i.items))},dependencies:[w4,ys,ybe,S8e,mCe,_Ce,O8e],encapsulation:2,changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-bank-account-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tag - Bank Account`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Bank Statement">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tag-bank-account`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,qe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,fe],encapsulation:2,changeDetection:1})}return o})();var j=(o,c)=>c.color;var Ne=(o,c)=>c.name;function He(o,c){if(o&1&&Gl(0,`po-tag`,3),o&2){let l=c.$implicit;nw(`p-color`,l.color)(`p-value`,l.label)}}function Re(o,c){if(o&1&&Gl(0,`po-tag`,5),o&2){let l=c.$implicit;nw(`p-color`,l.color)(`p-label`,l.label)(`p-value`,l.value)}}function $e(o,c){if(o&1&&Gl(0,`po-tag`,7),o&2){let l=c.$implicit;nw(`p-color`,l.color)(`p-icon`,l.icon)(`p-value`,l.label)}}function je(o,c){if(o&1&&Gl(0,`po-tag`,10),o&2){let l=c.$implicit;nw(`p-color`,l.color)(`p-value`,l.label)}}function Ge(o,c){if(o&1&&(Tl(0,`po-tab`,9)(1,`div`,2),Cx(2,je,1,2,`po-tag`,10,j),ag()()),o&2){let l=c.$implicit;nw(`p-label`,l.name),jp(2),bx(l.tags)}}var Ce=(()=>{class o{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,`0`);return{label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:`Ativo`,value:`Em operacao`,color:`caption-tag-01`},{label:`Pendente`,value:`Aguardando aprovacao`,color:`caption-tag-06`},{label:`Em analise`,value:`Verificacao interna`,color:`caption-tag-11`},{label:`Concluido`,value:`Finalizado com sucesso`,color:`caption-tag-16`},{label:`Cancelado`,value:`Operacao cancelada`,color:`caption-tag-21`},{label:`Expirado`,value:`Prazo excedido`,color:`caption-tag-26`},{label:`Bloqueado`,value:`Acesso restrito`,color:`caption-tag-31`}];categories=[{label:`Financeiro`,color:`caption-tag-03`,icon:`an an-currency-circle-dollar`},{label:`Recursos Humanos`,color:`caption-tag-08`,icon:`an an-users`},{label:`Logistica`,color:`caption-tag-13`,icon:`an an-truck`},{label:`Vendas`,color:`caption-tag-18`,icon:`an an-shopping-cart-simple`},{label:`Suporte`,color:`caption-tag-23`,icon:`an an-headset`},{label:`Marketing`,color:`caption-tag-28`,icon:`an an-megaphone-simple`},{label:`TI`,color:`caption-tag-33`,icon:`an an-desktop-tower`}];families=[{name:`Familia 01-05`,tags:[{label:`caption-tag-01`,color:`caption-tag-01`},{label:`caption-tag-02`,color:`caption-tag-02`},{label:`caption-tag-03`,color:`caption-tag-03`},{label:`caption-tag-04`,color:`caption-tag-04`},{label:`caption-tag-05`,color:`caption-tag-05`}]},{name:`Familia 06-10`,tags:[{label:`caption-tag-06`,color:`caption-tag-06`},{label:`caption-tag-07`,color:`caption-tag-07`},{label:`caption-tag-08`,color:`caption-tag-08`},{label:`caption-tag-09`,color:`caption-tag-09`},{label:`caption-tag-10`,color:`caption-tag-10`}]},{name:`Familia 11-15`,tags:[{label:`caption-tag-11`,color:`caption-tag-11`},{label:`caption-tag-12`,color:`caption-tag-12`},{label:`caption-tag-13`,color:`caption-tag-13`},{label:`caption-tag-14`,color:`caption-tag-14`},{label:`caption-tag-15`,color:`caption-tag-15`}]},{name:`Familia 16-20`,tags:[{label:`caption-tag-16`,color:`caption-tag-16`},{label:`caption-tag-17`,color:`caption-tag-17`},{label:`caption-tag-18`,color:`caption-tag-18`},{label:`caption-tag-19`,color:`caption-tag-19`},{label:`caption-tag-20`,color:`caption-tag-20`}]},{name:`Familia 21-25`,tags:[{label:`caption-tag-21`,color:`caption-tag-21`},{label:`caption-tag-22`,color:`caption-tag-22`},{label:`caption-tag-23`,color:`caption-tag-23`},{label:`caption-tag-24`,color:`caption-tag-24`},{label:`caption-tag-25`,color:`caption-tag-25`}]},{name:`Familia 26-30`,tags:[{label:`caption-tag-26`,color:`caption-tag-26`},{label:`caption-tag-27`,color:`caption-tag-27`},{label:`caption-tag-28`,color:`caption-tag-28`},{label:`caption-tag-29`,color:`caption-tag-29`},{label:`caption-tag-30`,color:`caption-tag-30`}]},{name:`Familia 31-35`,tags:[{label:`caption-tag-31`,color:`caption-tag-31`},{label:`caption-tag-32`,color:`caption-tag-32`},{label:`caption-tag-33`,color:`caption-tag-33`},{label:`caption-tag-34`,color:`caption-tag-34`},{label:`caption-tag-35`,color:`caption-tag-35`}]}];static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-caption-tag-colors`]],standalone:!1,decls:17,vars:0,consts:[[`p-title`,`Caption Tag Colors`],[`p-title`,`Paleta completa - 35 cores`,1,`po-md-12`,`po-mb-1`],[1,`po-row`],[1,`po-md-3`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`],[`p-title`,`Status de processos`,1,`po-md-12`,`po-mb-1`],[`p-orientation`,`horizontal`,1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-label`,`p-value`],[`p-title`,`Categorias com icones`,1,`po-md-12`],[1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-icon`,`p-value`],[`p-title`,`Familias de cores`,1,`po-md-12`,`po-mb-1`],[3,`p-label`],[1,`po-md-4`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-widget`,1)(2,`div`,2),Cx(3,He,1,2,`po-tag`,3,j),ag()(),Tl(5,`po-widget`,4)(6,`div`,2),Cx(7,Re,1,3,`po-tag`,5,j),ag()(),Tl(9,`po-widget`,6)(10,`div`,2),Cx(11,$e,1,3,`po-tag`,7,j),ag()(),Tl(13,`po-widget`,8)(14,`po-tabs`),Cx(15,Ge,4,1,`po-tab`,9,Ne),ag()()()),r&2&&(jp(3),bx(i.captionTags),jp(4),bx(i.statusItems),jp(4),bx(i.categories),jp(4),bx(i.families))},dependencies:[ys,S8e,mCe,_Ce,O8e],encapsulation:2,changeDetection:1})}return o})();var Je=o=>({"docs-sample-code-tabs":o});var Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-caption-tag-colors-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tag - Caption Tag Colors`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Caption Tag Colors">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tag-caption-tag-colors`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Je,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ce],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-tag-doc`]],standalone:!1,decls:1168,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTagOrientation`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoTagModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-tag`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoTagComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),ag(),Tl(18,`p`),cN(19,`Além disso, é possível definir uma ação que será executada tanto ao `),Tl(20,`em`),cN(21,`click`),ag(),cN(22,` quanto através das teclas `),Tl(23,`em`),cN(24,`enter/space`),ag(),cN(25,` enquanto navega
utilizando a tecla `),Tl(26,`em`),cN(27,`tab`),ag(),cN(28,`.`),ag(),Tl(29,`p`),cN(30,`Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.`),ag(),Tl(31,`h4`),cN(32,`Tokens customizáveis`),ag(),Tl(33,`p`),cN(34,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(35,`blockquote`)(36,`p`),cN(37,`Para maiores informações, acesse o guia `),Tl(38,`a`,6),cN(39,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(40,`.`),ag()(),Tl(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),cN(45,`Propriedade`),ag(),Tl(46,`th`),cN(47,`Descrição`),ag(),Tl(48,`th`),cN(49,`Valor Padrão`),ag()()(),Tl(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),cN(54,`Default Values`),ag()(),Gl(55,`td`)(56,`td`),ag(),Tl(57,`tr`)(58,`td`)(59,`code`),cN(60,`--font-family`),ag()(),Tl(61,`td`),cN(62,`Família tipográfica usada`),ag(),Tl(63,`td`)(64,`code`),cN(65,`var(--font-family-theme)`),ag()()(),Tl(66,`tr`)(67,`td`)(68,`code`),cN(69,`--font-size`),ag()(),Tl(70,`td`),cN(71,`Tamanho da fonte`),ag(),Tl(72,`td`)(73,`code`),cN(74,`var(--font-size-sm)`),ag()()(),Tl(75,`tr`)(76,`td`)(77,`code`),cN(78,`--line-height`),ag()(),Tl(79,`td`),cN(80,`Tamanho da label`),ag(),Tl(81,`td`)(82,`code`),cN(83,`var(---line-height-sm)`),ag()()(),Tl(84,`tr`)(85,`td`)(86,`code`),cN(87,`--border-radius`),ag()(),Tl(88,`td`),cN(89,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(90,`td`)(91,`code`),cN(92,`var(--border-radius-pill)`),ag()()(),Tl(93,`tr`)(94,`td`)(95,`code`),cN(96,`--gap`),ag()(),Tl(97,`td`),cN(98,`Espaçamento entre o label e o value`),ag(),Tl(99,`td`)(100,`code`),cN(101,`var(--spacing-xs)`),ag()()(),Tl(102,`tr`)(103,`td`)(104,`strong`),cN(105,`Neutral`),ag()(),Gl(106,`td`)(107,`td`),ag(),Tl(108,`tr`)(109,`td`)(110,`code`),cN(111,`--color-neutral`),ag()(),Tl(112,`td`),cN(113,`Cor principal no estado neutral`),ag(),Tl(114,`td`)(115,`code`),cN(116,`var(--color-neutral-light-10)`),ag()()(),Tl(117,`tr`)(118,`td`)(119,`code`),cN(120,`--text-color-positive`),ag()(),Tl(121,`td`),cN(122,`Cor do texto no estado neutral`),ag(),Tl(123,`td`)(124,`code`),cN(125,`var(--color-neutral-dark-80)`),ag()()(),Tl(126,`tr`)(127,`td`)(128,`strong`),cN(129,`Positive`),ag()(),Gl(130,`td`)(131,`td`),ag(),Tl(132,`tr`)(133,`td`)(134,`code`),cN(135,`--color-positive`),ag()(),Tl(136,`td`),cN(137,`Cor principal no estado positive`),ag(),Tl(138,`td`)(139,`code`),cN(140,`var(--color-feedback-positive-lightest)`),ag()()(),Tl(141,`tr`)(142,`td`)(143,`code`),cN(144,`--text-color-positive`),ag()(),Tl(145,`td`),cN(146,`Cor do texto no estado positive`),ag(),Tl(147,`td`)(148,`code`),cN(149,`var(--color-feedback-positive-dark)`),ag()()(),Tl(150,`tr`)(151,`td`)(152,`strong`),cN(153,`Negative`),ag()(),Gl(154,`td`)(155,`td`),ag(),Tl(156,`tr`)(157,`td`)(158,`code`),cN(159,`--color-negative`),ag()(),Tl(160,`td`),cN(161,`Cor principal no estado danger`),ag(),Tl(162,`td`)(163,`code`),cN(164,`var(--color-feedback-negative-lightest)`),ag()()(),Tl(165,`tr`)(166,`td`)(167,`code`),cN(168,`--text-color-negative`),ag()(),Tl(169,`td`),cN(170,`Cor do texto no estado danger`),ag(),Tl(171,`td`)(172,`code`),cN(173,`var(--color-feedback-negative-darker)`),ag()()(),Tl(174,`tr`)(175,`td`)(176,`strong`),cN(177,`Warning`),ag()(),Gl(178,`td`)(179,`td`),ag(),Tl(180,`tr`)(181,`td`)(182,`code`),cN(183,`--color-tag-warning`),ag()(),Tl(184,`td`),cN(185,`Cor principal no estado warning`),ag(),Tl(186,`td`)(187,`code`),cN(188,`var(--color-feedback-warning-lightest)`),ag()()(),Tl(189,`tr`)(190,`td`)(191,`code`),cN(192,`--text-color-warning`),ag()(),Tl(193,`td`),cN(194,`Cor do texto no estado warning`),ag(),Tl(195,`td`)(196,`code`),cN(197,`var(--color-feedback-warning-darkest)`),ag()()(),Tl(198,`tr`)(199,`td`)(200,`strong`),cN(201,`Info`),ag()(),Gl(202,`td`)(203,`td`),ag(),Tl(204,`tr`)(205,`td`)(206,`code`),cN(207,`--color-info`),ag()(),Tl(208,`td`),cN(209,`Cor principal no estado info`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--color-feedback-info-lightest)`),ag()()(),Tl(213,`tr`)(214,`td`)(215,`code`),cN(216,`--text-color-info`),ag()(),Tl(217,`td`),cN(218,`Cor do texto no estado info`),ag(),Tl(219,`td`)(220,`code`),cN(221,`var(--color-feedback-info-dark)`),ag()()(),Tl(222,`tr`)(223,`td`)(224,`strong`),cN(225,`Removable`),ag()(),Gl(226,`td`)(227,`td`),ag(),Tl(228,`tr`)(229,`td`)(230,`code`),cN(231,`--color`),ag()(),Tl(232,`td`),cN(233,`Cor principal quando removable`),ag(),Tl(234,`td`)(235,`code`),cN(236,`var(--color-brand-01-lightest)`),ag()()(),Tl(237,`tr`)(238,`td`)(239,`code`),cN(240,`--border-color`),ag()(),Tl(241,`td`),cN(242,`Cor de borda quando removable \xA0`),ag(),Tl(243,`td`)(244,`code`),cN(245,`var(--color-brand-01-lighter)`),ag()()(),Tl(246,`tr`)(247,`td`)(248,`code`),cN(249,`--color-icon`),ag()(),Tl(250,`td`),cN(251,`Cor do ícone quando removable \xA0`),ag(),Tl(252,`td`)(253,`code`),cN(254,`var(--color-action-default)`),ag()()(),Tl(255,`tr`)(256,`td`)(257,`code`),cN(258,`--text-color`),ag()(),Tl(259,`td`),cN(260,`Cor do texto quando removable \xA0`),ag(),Tl(261,`td`)(262,`code`),cN(263,`var(--color-neutral-dark-80)`),ag()()(),Tl(264,`tr`)(265,`td`)(266,`code`),cN(267,`--color-hover`),ag()(),Tl(268,`td`),cN(269,`Cor do hover no estado removable \xA0`),ag(),Tl(270,`td`)(271,`code`),cN(272,`var(--color-brand-01-lighter)`),ag()()(),Tl(273,`tr`)(274,`td`)(275,`strong`),cN(276,`Focused`),ag()(),Gl(277,`td`)(278,`td`),ag(),Tl(279,`tr`)(280,`td`)(281,`code`),cN(282,`--outline-color-focused`),ag()(),Tl(283,`td`),cN(284,`Cor do outline do estado de focus`),ag(),Tl(285,`td`)(286,`code`),cN(287,`var(--color-action-focus)`),ag()()(),Tl(288,`tr`)(289,`td`)(290,`strong`),cN(291,`Disabled`),ag()(),Gl(292,`td`)(293,`td`),ag(),Tl(294,`tr`)(295,`td`)(296,`code`),cN(297,`--color-disabled`),ag()(),Tl(298,`td`),cN(299,`Cor principal no estado disabled`),ag(),Tl(300,`td`)(301,`code`),cN(302,`var(--color-neutral-light-20)`),ag()()(),Tl(303,`tr`)(304,`td`)(305,`code`),cN(306,`--border-color-disabled`),ag()(),Tl(307,`td`),cN(308,`Cor da borda no estado disabled \xA0`),ag(),Tl(309,`td`)(310,`code`),cN(311,`var(--color-action-disabled)`),ag()()(),Tl(312,`tr`)(313,`td`)(314,`code`),cN(315,`--color-icon-disabled`),ag()(),Tl(316,`td`),cN(317,`Cor do icone no estado disabled \xA0`),ag(),Tl(318,`td`)(319,`code`),cN(320,`var(--color-action-disabled)`),ag()()(),Tl(321,`tr`)(322,`td`)(323,`code`),cN(324,`--text-color-disabled`),ag()(),Tl(325,`td`),cN(326,`Cor do texto no estado disabled \xA0`),ag(),Tl(327,`td`)(328,`code`),cN(329,`var(--color-neutral-mid-60)`),ag()()()()()(),Tl(330,`div`,7)(331,`h4`,8),cN(332,`Seletor`),ag(),Tl(333,`pre`,9),cN(334,`<po-tag
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
`),ag()(),Tl(335,`h4`,10),cN(336,`Propriedades`),ag(),Tl(337,`table`,11)(338,`tr`,12)(339,`th`,13),cN(340,`Nome`),ag(),Tl(341,`th`,13),cN(342,`Tipo`),ag(),Tl(343,`th`,13),cN(344,`Padrão`),ag(),Tl(345,`th`,13),cN(346,`Descrição`),ag()(),Tl(347,`tr`,14)(348,`td`,15)(349,`div`,16)(350,`span`,17),cN(351,` (p-click)`),Gl(352,`br`),ag()()(),Tl(353,`td`,18)(354,`code`,19),cN(355,`EventEmitter`),ag()(),Tl(356,`td`,20),cN(357,`-`),ag(),Tl(358,`td`,21)(359,`em`)(360,`strong`),cN(361,`(opcional)`),ag()(),Tl(362,`p`),cN(363,`Ação que será executada ao clicar sobre o `),Tl(364,`code`),cN(365,`po-tag`),ag(),cN(366,` e que receberá como parâmetro um objeto contendo o seu valor e tipo.`),ag(),Tl(367,`p`),cN(368,`O evento de click só funciona se a tag não for removível.`),ag()()(),Tl(369,`tr`,14)(370,`td`,15)(371,`div`,22)(372,`span`,23),cN(373,` p-color`),Gl(374,`br`),ag()()(),Tl(375,`td`,18)(376,`code`,24),cN(377,`string`),ag()(),Tl(378,`td`,20),cN(379,`-`),ag(),Tl(380,`td`,21)(381,`em`)(382,`strong`),cN(383,`(opcional)`),ag()(),Tl(384,`p`),cN(385,`Determina a cor da tag. As maneiras de customizar as cores são:`),ag(),Tl(386,`ul`)(387,`li`),cN(388,`Hexadeximal, por exemplo `),Tl(389,`code`),cN(390,`#c64840`),ag(),cN(391,`;`),ag(),Tl(392,`li`),cN(393,`RGB, como `),Tl(394,`code`),cN(395,`rgb(0, 0, 165)`),ag(),cN(396,`;`),ag(),Tl(397,`li`),cN(398,`O nome da cor, por exemplo `),Tl(399,`code`),cN(400,`blue`),ag(),cN(401,`;`),ag(),Tl(402,`li`),cN(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Tl(404,`ul`)(405,`li`),Gl(406,`span`,25),Tl(407,`code`),cN(408,`color-01`),ag()(),Tl(409,`li`),Gl(410,`span`,26),Tl(411,`code`),cN(412,`color-02`),ag()(),Tl(413,`li`),Gl(414,`span`,27),Tl(415,`code`),cN(416,`color-03`),ag()(),Tl(417,`li`),Gl(418,`span`,28),Tl(419,`code`),cN(420,`color-04`),ag()(),Tl(421,`li`),Gl(422,`span`,29),Tl(423,`code`),cN(424,`color-05`),ag()(),Tl(425,`li`),Gl(426,`span`,30),Tl(427,`code`),cN(428,`color-06`),ag()(),Tl(429,`li`),Gl(430,`span`,31),Tl(431,`code`),cN(432,`color-07`),ag()(),Tl(433,`li`),Gl(434,`span`,32),Tl(435,`code`),cN(436,`color-08`),ag()(),Tl(437,`li`),Gl(438,`span`,33),Tl(439,`code`),cN(440,`color-09`),ag()(),Tl(441,`li`),Gl(442,`span`,34),Tl(443,`code`),cN(444,`color-10`),ag()(),Tl(445,`li`),Gl(446,`span`,35),Tl(447,`code`),cN(448,`color-11`),ag()(),Tl(449,`li`),Gl(450,`span`,36),Tl(451,`code`),cN(452,`color-12`),ag()()()()(),Tl(453,`blockquote`)(454,`p`),cN(455,`Também é possível utilizar as 35 cores da paleta `),Tl(456,`strong`),cN(457,`Caption Tag Colors`),ag(),cN(458,`:`),ag()(),Tl(459,`ul`)(460,`li`),Gl(461,`span`,37),Tl(462,`code`),cN(463,`caption-tag-01`),ag(),Gl(464,`span`,38),Tl(465,`code`),cN(466,`caption-tag-02`),ag(),Gl(467,`span`,39),Tl(468,`code`),cN(469,`caption-tag-03`),ag(),Gl(470,`span`,40),Tl(471,`code`),cN(472,`caption-tag-04`),ag(),Gl(473,`span`,41),Tl(474,`code`),cN(475,`caption-tag-05`),ag()(),Tl(476,`li`),Gl(477,`span`,42),Tl(478,`code`),cN(479,`caption-tag-06`),ag(),Gl(480,`span`,43),Tl(481,`code`),cN(482,`caption-tag-07`),ag(),Gl(483,`span`,44),Tl(484,`code`),cN(485,`caption-tag-08`),ag(),Gl(486,`span`,45),Tl(487,`code`),cN(488,`caption-tag-09`),ag(),Gl(489,`span`,46),Tl(490,`code`),cN(491,`caption-tag-10`),ag()(),Tl(492,`li`),Gl(493,`span`,47),Tl(494,`code`),cN(495,`caption-tag-11`),ag(),Gl(496,`span`,48),Tl(497,`code`),cN(498,`caption-tag-12`),ag(),Gl(499,`span`,49),Tl(500,`code`),cN(501,`caption-tag-13`),ag(),Gl(502,`span`,50),Tl(503,`code`),cN(504,`caption-tag-14`),ag(),Gl(505,`span`,51),Tl(506,`code`),cN(507,`caption-tag-15`),ag()(),Tl(508,`li`),Gl(509,`span`,52),Tl(510,`code`),cN(511,`caption-tag-16`),ag(),Gl(512,`span`,53),Tl(513,`code`),cN(514,`caption-tag-17`),ag(),Gl(515,`span`,54),Tl(516,`code`),cN(517,`caption-tag-18`),ag(),Gl(518,`span`,55),Tl(519,`code`),cN(520,`caption-tag-19`),ag(),Gl(521,`span`,56),Tl(522,`code`),cN(523,`caption-tag-20`),ag()(),Tl(524,`li`),Gl(525,`span`,57),Tl(526,`code`),cN(527,`caption-tag-21`),ag(),Gl(528,`span`,58),Tl(529,`code`),cN(530,`caption-tag-22`),ag(),Gl(531,`span`,59),Tl(532,`code`),cN(533,`caption-tag-23`),ag(),Gl(534,`span`,60),Tl(535,`code`),cN(536,`caption-tag-24`),ag(),Gl(537,`span`,61),Tl(538,`code`),cN(539,`caption-tag-25`),ag()(),Tl(540,`li`),Gl(541,`span`,62),Tl(542,`code`),cN(543,`caption-tag-26`),ag(),Gl(544,`span`,63),Tl(545,`code`),cN(546,`caption-tag-27`),ag(),Gl(547,`span`,64),Tl(548,`code`),cN(549,`caption-tag-28`),ag(),Gl(550,`span`,65),Tl(551,`code`),cN(552,`caption-tag-29`),ag(),Gl(553,`span`,66),Tl(554,`code`),cN(555,`caption-tag-30`),ag()(),Tl(556,`li`),Gl(557,`span`,67),Tl(558,`code`),cN(559,`caption-tag-31`),ag(),Gl(560,`span`,68),Tl(561,`code`),cN(562,`caption-tag-32`),ag(),Gl(563,`span`,69),Tl(564,`code`),cN(565,`caption-tag-33`),ag(),Gl(566,`span`,70),Tl(567,`code`),cN(568,`caption-tag-34`),ag(),Gl(569,`span`,71),Tl(570,`code`),cN(571,`caption-tag-35`),ag()()(),Tl(572,`p`),cN(573,`Exemplo de uso:`),ag(),Tl(574,`pre`)(575,`code`),cN(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),ag()(),Tl(577,`ul`)(578,`li`),cN(579,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background;`),ag(),Tl(580,`li`),cN(581,`Para as cores legacy (`),Tl(582,`code`),cN(583,`color-01`),ag(),cN(584,` a `),Tl(585,`code`),cN(586,`color-12`),ag(),cN(587,`) e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade.`),ag(),Tl(588,`li`),cN(589,`Para as cores `),Tl(590,`strong`),cN(591,`Caption Tag Colors`),ag(),cN(592,` (`),Tl(593,`code`),cN(594,`caption-tag-01`),ag(),cN(595,` a `),Tl(596,`code`),cN(597,`caption-tag-35`),ag(),cN(598,`), a cor do texto é fixa e definida via token CSS, não sendo possível alterá-la via `),Tl(599,`code`),cN(600,`p-text-color`),ag(),cN(601,`.`),ag()(),Tl(602,`blockquote`)(603,`p`)(604,`strong`),cN(605,`Atenção:`),ag(),cN(606,` A propriedade `),Tl(607,`code`),cN(608,`p-type`),ag(),cN(609,` sobrepõe esta definição.`),ag()()()(),Tl(610,`tr`,14)(611,`td`,15)(612,`div`,22)(613,`span`,23),cN(614,` p-disabled`),Gl(615,`br`),ag()()(),Tl(616,`td`,18)(617,`code`,72),cN(618,`boolean`),ag()(),Tl(619,`td`,20)(620,`p`)(621,`code`),cN(622,`false`),ag()()(),Tl(623,`td`,21)(624,`em`)(625,`strong`),cN(626,`(opcional)`),ag()(),Tl(627,`p`),cN(628,`Desabilita o `),Tl(629,`code`),cN(630,`po-tag`),ag(),cN(631,` e não permite que o usuário interaja com o mesmo.`),ag(),Tl(632,`blockquote`)(633,`p`),cN(634,`A propriedade `),Tl(635,`code`),cN(636,`p-disabled`),ag(),cN(637,` somente terá efeito caso a propriedade `),Tl(638,`code`),cN(639,`p-removable`),ag(),cN(640,` esteja definida como `),Tl(641,`code`),cN(642,`true`),ag(),cN(643,`.`),ag()()()(),Tl(644,`tr`,14)(645,`td`,15)(646,`div`,22)(647,`span`,23),cN(648,` p-icon`),Gl(649,`br`),ag()()(),Tl(650,`td`,18)(651,`code`,24),cN(652,`string `),ag(),Tl(653,`code`,72),cN(654,` boolean `),ag(),Tl(655,`code`,73),cN(656,` TemplateRef<void>`),ag()(),Tl(657,`td`,20)(658,`p`)(659,`code`),cN(660,`false`),ag()()(),Tl(661,`td`,21)(662,`em`)(663,`strong`),cN(664,`(opcional)`),ag()(),Tl(665,`p`),cN(666,`Define ou ativa um ícone que será exibido ao lado do valor da `),Tl(667,`em`),cN(668,`tag`),ag(),cN(669,`.`),ag(),Tl(670,`p`),cN(671,`Quando `),Tl(672,`code`),cN(673,`p-type`),ag(),cN(674,` estiver definida, basta informar um valor igual a `),Tl(675,`code`),cN(676,`true`),ag(),cN(677,` para que o ícone seja exibido conforme descrições abaixo:`),ag(),Tl(678,`ul`)(679,`li`),Gl(680,`span`,74),cN(681,` - `),Tl(682,`code`),cN(683,`success`),ag()(),Tl(684,`li`),Gl(685,`span`,75),cN(686,` - `),Tl(687,`code`),cN(688,`warning`),ag()(),Tl(689,`li`),Gl(690,`span`,76),cN(691,` - `),Tl(692,`code`),cN(693,`danger`),ag()(),Tl(694,`li`),Gl(695,`span`,77),cN(696,` - `),Tl(697,`code`),cN(698,`info`),ag()()(),Tl(699,`p`),cN(700,`Também É possível usar qualquer um dos ícones da `),Tl(701,`a`,78),cN(702,`Biblioteca de ícones`),ag(),cN(703,`. conforme exemplo abaixo:`),ag(),Tl(704,`pre`)(705,`code`),cN(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),ag()(),Tl(707,`p`),cN(708,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(709,`em`),cN(710,`Font Awesome`),ag(),cN(711,`, da seguinte forma:`),ag(),Tl(712,`pre`)(713,`code`),cN(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),ag()(),Tl(715,`p`),cN(716,`Outra opção seria a customização do ícone através do `),Tl(717,`code`),cN(718,`TemplateRef`),ag(),cN(719,`, conforme exemplo abaixo:`),ag(),Tl(720,`pre`)(721,`code`),cN(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(723,`blockquote`)(724,`p`),cN(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(726,`code`),cN(727,`font-size: inherit`),ag(),cN(728,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(729,`tr`,14)(730,`td`,15)(731,`div`,22)(732,`span`,23),cN(733,` p-label`),Gl(734,`br`),ag()()(),Tl(735,`td`,18)(736,`code`,24),cN(737,`string`),ag()(),Tl(738,`td`,20),cN(739,`-`),ag(),Tl(740,`td`,21)(741,`em`)(742,`strong`),cN(743,`(opcional)`),ag()(),Tl(744,`p`),cN(745,`Define uma legenda que será exibida acima ou ao lado da `),Tl(746,`em`),cN(747,`tag`),ag(),cN(748,`, de acordo com a `),Tl(749,`code`),cN(750,`p-orientation`),ag(),cN(751,`.`),ag()()(),Tl(752,`tr`,14)(753,`td`,15)(754,`div`,22)(755,`span`,23),cN(756,` p-literals`),Gl(757,`br`),ag()()(),Tl(758,`td`,18)(759,`code`,79),cN(760,`PoTagLiterals`),ag()(),Tl(761,`td`,20),cN(762,`-`),ag(),Tl(763,`td`,21)(764,`em`)(765,`strong`),cN(766,`(opcional)`),ag()(),Tl(767,`p`),cN(768,`Objeto com as literais usadas no `),Tl(769,`code`),cN(770,`po-tag`),ag(),cN(771,`.`),ag(),Tl(772,`p`),cN(773,`Para utilizar, basta passar a literal customizada:`),ag(),Tl(774,`pre`)(775,`code`),cN(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),ag()(),Tl(777,`p`),cN(778,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),ag(),Tl(779,`pre`)(780,`code`),cN(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),ag()(),Tl(782,`blockquote`)(783,`p`),cN(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(785,`a`,80)(786,`code`),cN(787,`PoI18nService`),ag()(),cN(788,` ou do browser.`),ag()()()(),Tl(789,`tr`,14)(790,`td`,15)(791,`div`,22)(792,`span`,23),cN(793,` p-orientation`),Gl(794,`br`),ag()()(),Tl(795,`td`,18)(796,`code`,81),cN(797,`PoTagOrientation`),ag()(),Tl(798,`td`,20)(799,`p`)(800,`code`),cN(801,`vertical`),ag()()(),Tl(802,`td`,21)(803,`em`)(804,`strong`),cN(805,`(opcional)`),ag()(),Tl(806,`p`),cN(807,`Define o `),Tl(808,`em`),cN(809,`layout`),ag(),cN(810,` de exibição.`),ag()()(),Tl(811,`tr`,14)(812,`td`,15)(813,`div`,22)(814,`span`,23),cN(815,` p-removable`),Gl(816,`br`),ag()()(),Tl(817,`td`,18)(818,`code`,72),cN(819,`boolean`),ag()(),Tl(820,`td`,20)(821,`p`)(822,`code`),cN(823,`false`),ag()()(),Tl(824,`td`,21)(825,`em`)(826,`strong`),cN(827,`(opcional)`),ag()(),Tl(828,`p`),cN(829,`Habilita a opção de remover a tag`),ag()()(),Tl(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),cN(834,` (p-close)`),Gl(835,`br`),ag()()(),Tl(836,`td`,18)(837,`code`,19),cN(838,`EventEmitter`),ag()(),Tl(839,`td`,20),cN(840,`-`),ag(),Tl(841,`td`,21)(842,`em`)(843,`strong`),cN(844,`(opcional)`),ag()(),Tl(845,`p`),cN(846,`Ação que sera executada quando clicar sobre o ícone de remover no `),Tl(847,`code`),cN(848,`po-tag`),ag()()()(),Tl(849,`tr`,14)(850,`td`,15)(851,`div`,22)(852,`span`,23),cN(853,` p-text-color`),Gl(854,`br`),ag()()(),Tl(855,`td`,18)(856,`code`,24),cN(857,`string`),ag()(),Tl(858,`td`,20),cN(859,`-`),ag(),Tl(860,`td`,21)(861,`em`)(862,`strong`),cN(863,`(opcional)`),ag()(),Tl(864,`p`),cN(865,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),ag(),Tl(866,`ul`)(867,`li`)(868,`p`),cN(869,`Hexadeximal, por exemplo `),Tl(870,`code`),cN(871,`#c64840`),ag(),cN(872,`;`),ag()(),Tl(873,`li`)(874,`p`),cN(875,`RGB, como `),Tl(876,`code`),cN(877,`rgb(0, 0, 165)`),ag(),cN(878,`;`),ag()(),Tl(879,`li`)(880,`p`),cN(881,`O nome da cor, por exemplo `),Tl(882,`code`),cN(883,`blue`),ag(),cN(884,`;`),ag()(),Tl(885,`li`)(886,`p`),cN(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),ag(),Tl(888,`ul`)(889,`li`),Gl(890,`span`,25),Tl(891,`code`),cN(892,`color-01`),ag()(),Tl(893,`li`),Gl(894,`span`,26),Tl(895,`code`),cN(896,`color-02`),ag()(),Tl(897,`li`),Gl(898,`span`,27),Tl(899,`code`),cN(900,`color-03`),ag()(),Tl(901,`li`),Gl(902,`span`,28),Tl(903,`code`),cN(904,`color-04`),ag()(),Tl(905,`li`),Gl(906,`span`,29),Tl(907,`code`),cN(908,`color-05`),ag()(),Tl(909,`li`),Gl(910,`span`,30),Tl(911,`code`),cN(912,`color-06`),ag()(),Tl(913,`li`),Gl(914,`span`,31),Tl(915,`code`),cN(916,`color-07`),ag()(),Tl(917,`li`),Gl(918,`span`,32),Tl(919,`code`),cN(920,`color-08`),ag()(),Tl(921,`li`),Gl(922,`span`,33),Tl(923,`code`),cN(924,`color-09`),ag()(),Tl(925,`li`),Gl(926,`span`,34),Tl(927,`code`),cN(928,`color-10`),ag()(),Tl(929,`li`),Gl(930,`span`,35),Tl(931,`code`),cN(932,`color-11`),ag()(),Tl(933,`li`),Gl(934,`span`,36),Tl(935,`code`),cN(936,`color-12`),ag()()()(),Tl(937,`li`)(938,`p`),cN(939,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),ag()()(),Tl(940,`blockquote`)(941,`p`)(942,`strong`),cN(943,`Atenção:`),ag(),cN(944,` A propriedade `),Tl(945,`code`),cN(946,`p-type`),ag(),cN(947,` sobrepõe esta definição.`),ag()(),Tl(948,`blockquote`)(949,`p`)(950,`strong`),cN(951,`Atenção:`),ag(),cN(952,` As cores da paleta `),Tl(953,`strong`),cN(954,`Caption Tag Colors`),ag(),cN(955,` (`),Tl(956,`code`),cN(957,`caption-tag-01`),ag(),cN(958,` a `),Tl(959,`code`),cN(960,`caption-tag-35`),ag(),cN(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),ag()()()(),Tl(962,`tr`,14)(963,`td`,15)(964,`div`,22)(965,`span`,23),cN(966,` p-type`),Gl(967,`br`),ag()()(),Tl(968,`td`,18)(969,`code`,82),cN(970,`PoTagType`),ag()(),Tl(971,`td`,20)(972,`p`)(973,`code`),cN(974,`info`),ag()()(),Tl(975,`td`,21)(976,`em`)(977,`strong`),cN(978,`(opcional)`),ag()(),Tl(979,`p`),cN(980,`Define o tipo da `),Tl(981,`em`),cN(982,`tag`),ag(),cN(983,`.`),ag(),Tl(984,`p`),cN(985,`Valores válidos:`),ag(),Tl(986,`ul`)(987,`li`)(988,`code`),cN(989,`success`),ag(),cN(990,`: cor verde utilizada para simbolizar sucesso ou êxito.`),ag(),Tl(991,`li`)(992,`code`),cN(993,`warning`),ag(),cN(994,`: cor amarela que representa aviso ou advertência.`),ag(),Tl(995,`li`)(996,`code`),cN(997,`danger`),ag(),cN(998,`: cor vermelha para erro ou aviso crítico.`),ag(),Tl(999,`li`)(1e3,`code`),cN(1001,`info`),ag(),cN(1002,`: cor azul claro que caracteriza conteúdo informativo.`),ag(),Tl(1003,`li`)(1004,`code`),cN(1005,`neutral`),ag(),cN(1006,`: cor cinza claro para uso geral.`),ag()(),Tl(1007,`blockquote`)(1008,`p`),cN(1009,`Quando esta propriedade for definida, irá sobrepor a definição de `),Tl(1010,`code`),cN(1011,`p-color`),ag(),cN(1012,` e `),Tl(1013,`code`),cN(1014,`p-icon`),ag(),cN(1015,` somente será exibido caso seja `),Tl(1016,`code`),cN(1017,`true`),ag(),cN(1018,`.`),ag()()()(),Tl(1019,`tr`,14)(1020,`td`,15)(1021,`div`,22)(1022,`span`,23),cN(1023,` p-value`),Gl(1024,`br`),ag()()(),Tl(1025,`td`,18)(1026,`code`,24),cN(1027,`string`),ag()(),Tl(1028,`td`,20),cN(1029,`-`),ag(),Tl(1030,`td`,21)(1031,`p`),cN(1032,`Texto da tag.`),ag()()()(),Tl(1033,`h3`),cN(1034,`Interfaces`),ag(),Tl(1035,`h4`,83)(1036,`code`,5),cN(1037,`PoTagLiterals`),ag()(),Tl(1038,`div`,2)(1039,`p`),cN(1040,`Interface para definição das literais usadas no `),Tl(1041,`code`),cN(1042,`po-tag`),ag(),cN(1043,`.`),ag()(),Tl(1044,`h4`,10),cN(1045,`Propriedades`),ag(),Tl(1046,`table`,11)(1047,`tr`,12)(1048,`th`,13),cN(1049,`Nome`),ag(),Tl(1050,`th`,13),cN(1051,`Tipo`),ag(),Tl(1052,`th`,13),cN(1053,`Descrição`),ag()(),Tl(1054,`tr`,14)(1055,`td`,15)(1056,`div`,22)(1057,`span`,23),cN(1058,` remove`),Gl(1059,`br`),ag()()(),Tl(1060,`td`,18)(1061,`code`,24),cN(1062,`string`),ag()(),Tl(1063,`td`,21)(1064,`em`)(1065,`strong`),cN(1066,`(opcional)`),ag()(),Tl(1067,`p`),cN(1068,`Texto exibido no tooltip indicando remoção da tag.`),ag()()()(),Tl(1069,`h3`),cN(1070,`Enums`),ag(),Tl(1071,`h4`,4)(1072,`code`,5),cN(1073,`PoTagOrientation`),ag()(),Tl(1074,`div`,2)(1075,`p`),cN(1076,`Define os tipos de orientações disponíveis para o `),Tl(1077,`code`),cN(1078,`po-tag`),ag(),cN(1079,`.`),ag()(),Tl(1080,`h4`,10),cN(1081,`Propriedades`),ag(),Tl(1082,`table`,11)(1083,`tr`,12)(1084,`th`,13),cN(1085,`Nome`),ag(),Tl(1086,`th`,13),cN(1087,`Descrição`),ag()(),Tl(1088,`tr`,14)(1089,`td`,15)(1090,`div`,22)(1091,`span`,23),cN(1092,` Horizontal`),Gl(1093,`br`),ag()()(),Tl(1094,`td`,21)(1095,`p`),cN(1096,`A tag será exibida na horizontal, ao lado direito em relação ao label.`),ag()()(),Tl(1097,`tr`,14)(1098,`td`,15)(1099,`div`,22)(1100,`span`,23),cN(1101,` Vertical`),Gl(1102,`br`),ag()()(),Tl(1103,`td`,21)(1104,`p`),cN(1105,`Exibe a tag na vertical, ou seja, abaixo do label.`),ag()()()(),Tl(1106,`h4`,4)(1107,`code`,5),cN(1108,`PoTagType`),ag()(),Tl(1109,`div`,2)(1110,`p`),cN(1111,`Define os tipos disponíveis para o `),Tl(1112,`code`),cN(1113,`po-tag`),ag(),cN(1114,`.`),ag()(),Tl(1115,`h4`,10),cN(1116,`Propriedades`),ag(),Tl(1117,`table`,11)(1118,`tr`,12)(1119,`th`,13),cN(1120,`Nome`),ag(),Tl(1121,`th`,13),cN(1122,`Descrição`),ag()(),Tl(1123,`tr`,14)(1124,`td`,15)(1125,`div`,22)(1126,`span`,23),cN(1127,` Danger`),Gl(1128,`br`),ag()()(),Tl(1129,`td`,21)(1130,`p`),cN(1131,`Erro, perigo, problema ou aviso crítico.`),ag()()(),Tl(1132,`tr`,14)(1133,`td`,15)(1134,`div`,22)(1135,`span`,23),cN(1136,` Info`),Gl(1137,`br`),ag()()(),Tl(1138,`td`,21)(1139,`p`),cN(1140,`Informativo ou explicativo.`),ag()()(),Tl(1141,`tr`,14)(1142,`td`,15)(1143,`div`,22)(1144,`span`,23),cN(1145,` Success`),Gl(1146,`br`),ag()()(),Tl(1147,`td`,21)(1148,`p`),cN(1149,`Confirmação, resultados positivos ou êxito.`),ag()()(),Tl(1150,`tr`,14)(1151,`td`,15)(1152,`div`,22)(1153,`span`,23),cN(1154,` Warning`),Gl(1155,`br`),ag()()(),Tl(1156,`td`,21)(1157,`p`),cN(1158,`Aviso ou advertência.`),ag()()(),Tl(1159,`tr`,14)(1160,`td`,15)(1161,`div`,22)(1162,`span`,23),cN(1163,` Neutral`),Gl(1164,`br`),ag()()(),Tl(1165,`td`,21)(1166,`p`),cN(1167,`De uso geral, quando os tipos Info, Warning, Success e Danger não atendem a necessidade.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-tag-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-tag-basic-view`)(6,`sample-po-tag-labs-view`)(7,`sample-po-tag-bank-account-view`)(8,`sample-po-tag-caption-tag-colors-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Ee,ve,he,Te,ye],encapsulation:2,changeDetection:1})}return o})()}];var we=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[bL.forChild(Ke),bL]})}return o})();var _t=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[ar,we]})}return o})();export{_t as DocPoTagModule};