import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Kr as Un,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_r as Ml,an as k4,ar as IY,bi as cw,br as NL,cn as lU,ea as p0,et as M4,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx}from"./main-NT5YGKBQ.js";var de=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(a,i){a&1&&(Ml(0,`po-button`,0),ht(`p-click`,function(){return i.onClick()}),lg())},dependencies:[Zt],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-basic/sample-po-button-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-basic/sample-po-button-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-button-basic',
  templateUrl: './sample-po-button-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonBasicComponent {
  onClick() {
    alert('Po Button!');
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,fe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{poDialog=f(e_e);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:M4.Button},{label:`submit`,value:M4.Submit},{label:`reset`,value:M4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1}),r$1&&r$1.forEach(a=>{a===`danger`&&this.properties.includes(`danger`)&&(this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!0}))})}verifyDisabled(r){let a=[...this.propertiesOptions];r===`tertiary`?(a[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=a):(a[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=M4.Button,this.properties=[],this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let u=Vx();Ml(0,`div`,1)(1,`po-button`,2),ht(`p-click`,function(){return i.buttonClick()}),lg()(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),Mw(`ngModelChange`,function(d){return Qy(u),yN(i.label,d)||(i.label=d),Jy(d)}),lg(),f0(),lg(),Ml(7,`po-checkbox-group`,4),Mw(`ngModelChange`,function(d){return Qy(u),yN(i.properties,d)||(i.properties=d),Jy(d)}),ht(`p-change`,function(d){return i.propertiesChange(d)}),lg(),f0(),Ml(8,`po-radio-group`,5),Mw(`ngModelChange`,function(d){return Qy(u),yN(i.icon,d)||(i.icon=d),Jy(d)}),lg(),f0(),Ml(9,`po-radio-group`,6),Mw(`ngModelChange`,function(d){return Qy(u),yN(i.kind,d)||(i.kind=d),Jy(d)}),ht(`p-change`,function(d){return i.verifyDisabled(d)}),lg(),f0(),Ml(10,`po-radio-group`,7),Mw(`ngModelChange`,function(d){return Qy(u),yN(i.type,d)||(i.type=d),Jy(d)}),lg(),f0(),Ml(11,`po-radio-group`,8),Mw(`ngModelChange`,function(d){return Qy(u),yN(i.size,d)||(i.size=d),Jy(d)}),ht(`p-change`,function(d){return i.verifyDisabled(d)}),lg(),f0(),Ml(12,`div`,1)(13,`po-button`,9),ht(`p-click`,function(){return i.restore()}),lg()()()}a&2&&(Up(),cw(`p-disabled`,i.properties.includes(`disabled`))(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-size`,i.size)(`p-danger`,i.properties.includes(`danger`))(`p-kind`,i.kind)(`p-type`,i.type),Up(5),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.icon),cw(`p-options`,i.iconsOptions),p0(),Up(),Tw(`ngModel`,i.kind),cw(`p-options`,i.kindsOptions),p0(),Up(),Tw(`ngModel`,i.type),cw(`p-options`,i.typeOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizesOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-labs/sample-po-button-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-button
    class="po-sm-12"
    [p-disabled]="properties.includes('disabled')"
    [p-icon]="icon"
    [p-label]="label"
    [p-loading]="properties.includes('loading')"
    [p-size]="size"
    [p-danger]="properties.includes('danger')"
    [p-kind]="kind"
    (p-click)="buttonClick()"
    [p-type]="type"
  >
  </po-button>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6 po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
  </div>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
    (p-change)="propertiesChange($event)"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="icon"
    [(ngModel)]="icon"
    p-columns="4"
    p-label="Icon"
    [p-options]="iconsOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="kind"
    [(ngModel)]="kind"
    p-columns="4"
    p-label="Kind"
    [p-options]="kindsOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    p-columns="4"
    p-label="Type"
    [p-options]="typeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizesOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-labs/sample-po-button-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoButtonType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-labs',
  templateUrl: './sample-po-button-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  label: string;
  kind: string;
  icon: string;
  size: string;
  properties: Array<string>;
  type: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' }
  ];

  kindsOptions: Array<PoRadioGroupOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  typeOptions: Array<PoRadioGroupOption> = [
    { label: 'button', value: PoButtonType.Button },
    { label: 'submit', value: PoButtonType.Submit },
    { label: 'reset', value: PoButtonType.Reset }
  ];

  ngOnInit() {
    this.restore();
  }

  buttonClick() {
    this.poDialog.alert({ title: 'PO Button', message: 'Hello PO World!!!' });
  }

  propertiesChange(event) {
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };

    if (event) {
      event.forEach(property => {
        if (property === 'danger' && this.properties.includes('danger')) {
          this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: true };
        }
      });
    }
  }

  verifyDisabled(event) {
    const value = [...this.propertiesOptions];

    if (event === 'tertiary') {
      value[2] = { value: 'danger', label: 'Danger', disabled: true };
      this.propertiesOptions = value;
    } else {
      value[2] = { value: 'danger', label: 'Danger', disabled: false };
      this.propertiesOptions = value;
    }
  }

  restore() {
    this.label = undefined;
    this.kind = 'secondary';
    this.size = 'medium';
    this.icon = undefined;
    this.type = PoButtonType.Button;
    this.properties = [];
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return o})();function Pe(o,he){if(o&1){let r=Vx();Ml(0,`div`,0),ql(1,`po-avatar`,2),Ml(2,`div`,3)(3,`span`,4),mN(4),lg(),Ml(5,`span`,5),mN(6),lg(),Ml(7,`span`,5),mN(8),lg()()(),Ml(9,`div`,0)(10,`po-button`,6),ht(`p-click`,function(){Qy(r);return Jy(zx().notification(`added`,`success`))}),lg(),Ml(11,`po-button`,7),ht(`p-click`,function(){Qy(r);return Jy(zx().notification(`ignored`,`warning`))}),lg(),Ml(12,`po-button`,8),ht(`p-click`,function(){Qy(r);return Jy(zx().notification(`blocked`,`information`))}),lg()()}if(o&2){let r=zx();Up(),cw(`p-src`,r.userAvatar),Up(3),gg(` `,r.currentFriend.name,` `),Up(2),gg(` `,r.currentFriend.mutualFriends,` mutual friends `),Up(2),gg(` Resides in `,r.currentFriend.reside,` `)}}function we(o,he){o&1&&(Ml(0,`div`,0)(1,`span`,9),mN(2,`Congratulations TOTVS, no more requests!`),lg()())}var ue=(()=>{class o{poNotification=f(Eu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`po-widget`,1),Tx(2,Pe,13,4)(3,we,3,0,`div`,0),lg()()),a&2&&(Up(2),Mx(i.currentFriend?2:3))},dependencies:[k4,Zt,$8e],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Social Network`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-button
          class="po-md-4"
          p-icon="fa fa-check-circle"
          p-label="Confirm"
          (p-click)="notification('added', 'success')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-eye-slash"
          p-label="Ignore"
          (p-click)="notification('ignored', 'warning')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-ban"
          p-label="Block"
          (p-click)="notification('blocked', 'information')"
        ></po-button>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-social-network',
  templateUrl: './sample-po-button-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-social-network`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:819,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoButtonModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-button.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoButtonComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O `),Ml(15,`code`),mN(16,`po-button`),lg(),mN(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),lg(),Ml(18,`p`),mN(19,`Através dos tipos, é possível identificar a importância de cada ação.`),lg(),Ml(20,`h4`),mN(21,`Boas práticas`),lg(),Ml(22,`ul`)(23,`li`),mN(24,`Evite `),Ml(25,`code`),mN(26,`labels`),lg(),mN(27,` extensos que quebram o layout do `),Ml(28,`code`),mN(29,`po-button`),lg(),mN(30,`, use `),Ml(31,`code`),mN(32,`labels`),lg(),mN(33,` diretos, curtos e intuitivos.`),lg(),Ml(34,`li`),mN(35,`Utilize apenas um `),Ml(36,`code`),mN(37,`po-button`),lg(),mN(38,` configurado como `),Ml(39,`code`),mN(40,`primary`),lg(),mN(41,` por página.`),lg(),Ml(42,`li`),mN(43,`Para ações irreversíveis use sempre a propriedade `),Ml(44,`code`),mN(45,`p-danger`),lg(),mN(46,`.`),lg()(),Ml(47,`h4`),mN(48,`Acessibilidade tratada no componente`),lg(),Ml(49,`p`),mN(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),lg(),Ml(51,`ul`)(52,`li`),mN(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),Ml(54,`a`,6),mN(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),lg()(),Ml(56,`li`),mN(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Ml(58,`a`,7),mN(59,`WCAG 2.4.12: Focus Appearance`),lg()()(),Ml(60,`h4`),mN(61,`Tokens customizáveis`),lg(),Ml(62,`p`),mN(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(64,`blockquote`)(65,`p`),mN(66,`Para maiores informações, acesse o guia `),Ml(67,`a`,8),mN(68,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(69,`.`),lg()(),Ml(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),mN(74,`Propriedade`),lg(),Ml(75,`th`),mN(76,`Descrição`),lg(),Ml(77,`th`),mN(78,`Valor Padrão`),lg()()(),Ml(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),mN(83,`--font-family`),lg()(),Ml(84,`td`),mN(85,`Família tipográfica usada`),lg(),Ml(86,`td`)(87,`code`),mN(88,`var(--font-family-theme)`),lg()()(),Ml(89,`tr`)(90,`td`)(91,`code`),mN(92,`--font-size`),lg()(),Ml(93,`td`),mN(94,`Tamanho da fonte`),lg(),Ml(95,`td`)(96,`code`),mN(97,`var(--font-size-default)`),lg()()(),Ml(98,`tr`)(99,`td`)(100,`code`),mN(101,`--font-weight`),lg()(),Ml(102,`td`),mN(103,`Peso da fonte`),lg(),Ml(104,`td`)(105,`code`),mN(106,`var(--font-weight-bold)`),lg()()(),Ml(107,`tr`)(108,`td`)(109,`code`),mN(110,`--line-height`),lg()(),Ml(111,`td`),mN(112,`Tamanho da label`),lg(),Ml(113,`td`)(114,`code`),mN(115,`var(--line-height-none)`),lg()()(),Ml(116,`tr`)(117,`td`)(118,`code`),mN(119,`--border-radius`),lg()(),Ml(120,`td`),mN(121,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(122,`td`)(123,`code`),mN(124,`var(--border-radius-md)`),lg()()(),Ml(125,`tr`)(126,`td`)(127,`code`),mN(128,`--border-width`),lg()(),Ml(129,`td`),mN(130,`Contém o valor da largura dos cantos do elemento\xA0`),lg(),Ml(131,`td`)(132,`code`),mN(133,`var(--border-width-md)`),lg()()(),Ml(134,`tr`)(135,`td`)(136,`code`),mN(137,`--padding`),lg()(),Ml(138,`td`),mN(139,`Preenchimento`),lg(),Ml(140,`td`)(141,`code`),mN(142,`0 1em`),lg()()(),Ml(143,`tr`)(144,`td`)(145,`strong`),mN(146,`Danger`),lg()(),ql(147,`td`)(148,`td`),lg(),Ml(149,`tr`)(150,`td`)(151,`code`),mN(152,`--text-color-danger`),lg()(),Ml(153,`td`),mN(154,`Cor do texto no estado danger`),lg(),Ml(155,`td`)(156,`code`),mN(157,`var(--color-neutral-light-00)`),lg()()(),Ml(158,`tr`)(159,`td`)(160,`code`),mN(161,`--color-button-danger`),lg()(),Ml(162,`td`),mN(163,`Cor do botão no estado danger`),lg(),Ml(164,`td`)(165,`code`),mN(166,`var(--color-feedback-negative-dark)`),lg()()(),Ml(167,`tr`)(168,`td`)(169,`code`),mN(170,`--color-danger-hover`),lg()(),Ml(171,`td`),mN(172,`Cor de hover no estado danger`),lg(),Ml(173,`td`)(174,`code`),mN(175,`var(--color-feedback-negative-darker)`),lg()()(),Ml(176,`tr`)(177,`td`)(178,`code`),mN(179,`--color-danger-pressed`),lg()(),Ml(180,`td`),mN(181,`Cor pressionada no estado danger`),lg(),Ml(182,`td`)(183,`code`),mN(184,`var(--color-feedback-negative-darkest)`),lg()()(),Ml(185,`tr`)(186,`td`)(187,`code`),mN(188,`--background-danger-hover`),lg()(),Ml(189,`td`),mN(190,`Cor de background de hover no estado danger`),lg(),Ml(191,`td`)(192,`code`),mN(193,`var(--color-feedback-negative-lighter)`),lg()()(),Ml(194,`tr`)(195,`td`)(196,`code`),mN(197,`--border-color-danger-hover`),lg()(),Ml(198,`td`),mN(199,`Cor da borda de hover no estado danger`),lg(),Ml(200,`td`)(201,`code`),mN(202,`var(--color-feedback-negative-darkest)`),lg()()(),Ml(203,`tr`)(204,`td`)(205,`code`),mN(206,`--background-danger-pressed`),lg()(),Ml(207,`td`),mN(208,`Cor de background pressionado no estado danger`),lg(),Ml(209,`td`)(210,`code`),mN(211,`var(--color-feedback-negative-light)`),lg()()(),Ml(212,`tr`)(213,`td`)(214,`code`),mN(215,`--background-color-button-danger`),lg(),mN(216,`\xA0`),lg(),Ml(217,`td`),mN(218,`Cor de background do botão no estado danger`),lg(),Ml(219,`td`)(220,`code`),mN(221,`var(--color-transparent)`),lg()()(),Ml(222,`tr`)(223,`td`)(224,`strong`),mN(225,`Default Values`),lg()(),ql(226,`td`)(227,`td`),lg(),Ml(228,`tr`)(229,`td`)(230,`code`),mN(231,`--text-color`),lg()(),Ml(232,`td`),mN(233,`Cor do texto`),lg(),Ml(234,`td`)(235,`code`),mN(236,`var(--color-neutral-light-00)`),lg()()(),Ml(237,`tr`)(238,`td`)(239,`code`),mN(240,`--color`),lg()(),Ml(241,`td`),mN(242,`Cor principal do botão`),lg(),Ml(243,`td`)(244,`code`),mN(245,`var(--color-action-default)`),lg()()(),Ml(246,`tr`)(247,`td`)(248,`code`),mN(249,`--background-color`),lg()(),Ml(250,`td`),mN(251,`Cor de background`),lg(),Ml(252,`td`)(253,`code`),mN(254,`var(--color-transparent)`),lg()()(),Ml(255,`tr`)(256,`td`)(257,`code`),mN(258,`--border-color`),lg()(),Ml(259,`td`),mN(260,`Cor da borda`),lg(),Ml(261,`td`)(262,`code`),mN(263,`var(--color-transparent)`),lg()()(),Ml(264,`tr`)(265,`td`)(266,`code`),mN(267,`--shadow`),lg()(),Ml(268,`td`),mN(269,`Contém o valor da sombra do elemento`),lg(),Ml(270,`td`)(271,`code`),mN(272,`var(--shadow-none)`),lg()()(),Ml(273,`tr`)(274,`td`)(275,`strong`),mN(276,`Hover`),lg()(),ql(277,`td`)(278,`td`),lg(),Ml(279,`tr`)(280,`td`)(281,`code`),mN(282,`--color-hover`),lg()(),Ml(283,`td`),mN(284,`Cor principal no estado hover`),lg(),Ml(285,`td`)(286,`code`),mN(287,`var(--color-action-hover)`),lg()()(),Ml(288,`tr`)(289,`td`)(290,`code`),mN(291,`--background-hover`),lg()(),Ml(292,`td`),mN(293,`Cor de background no estado hover`),lg(),Ml(294,`td`)(295,`code`),mN(296,`var(--color-brand-01-lighter)`),lg()()(),Ml(297,`tr`)(298,`td`)(299,`code`),mN(300,`--border-color-hover`),lg()(),Ml(301,`td`),mN(302,`Cor da borda no estado hover`),lg(),Ml(303,`td`)(304,`code`),mN(305,`var(--color-brand-01-darkest)`),lg()()(),Ml(306,`tr`)(307,`td`)(308,`strong`),mN(309,`Focused`),lg()(),ql(310,`td`)(311,`td`),lg(),Ml(312,`tr`)(313,`td`)(314,`code`),mN(315,`--outline-color-focused`),lg()(),Ml(316,`td`),mN(317,`Cor do outline do estado de focus`),lg(),Ml(318,`td`)(319,`code`),mN(320,`var(--color-action-focus)`),lg()()(),Ml(321,`tr`)(322,`td`)(323,`strong`),mN(324,`Pressed`),lg()(),ql(325,`td`)(326,`td`),lg(),Ml(327,`tr`)(328,`td`)(329,`code`),mN(330,`--color-pressed`),lg()(),Ml(331,`td`),mN(332,`Cor principal no estado de pressionado`),lg(),Ml(333,`td`)(334,`code`),mN(335,`var(--color-action-pressed)`),lg()()(),Ml(336,`tr`)(337,`td`)(338,`code`),mN(339,`--background-pressed`),lg()(),Ml(340,`td`),mN(341,`Cor de background no estado de pressionado\xA0`),lg(),Ml(342,`td`)(343,`code`),mN(344,`var(--color-brand-01-light)`),lg()()(),Ml(345,`tr`)(346,`td`)(347,`strong`),mN(348,`Disabled`),lg()(),ql(349,`td`)(350,`td`),lg(),Ml(351,`tr`)(352,`td`)(353,`code`),mN(354,`--text-color-disabled`),lg()(),Ml(355,`td`),mN(356,`Cor do texto no estado disabled`),lg(),Ml(357,`td`)(358,`code`),mN(359,`var(--color-neutral-dark-70)`),lg()()(),Ml(360,`tr`)(361,`td`)(362,`code`),mN(363,`--color-disabled`),lg()(),Ml(364,`td`),mN(365,`Cor principal no estado disabled`),lg(),Ml(366,`td`)(367,`code`),mN(368,`var(--color-action-disabled)`),lg()()(),Ml(369,`tr`)(370,`td`)(371,`code`),mN(372,`--background-color-disabled`),lg()(),Ml(373,`td`),mN(374,`Cor de background no estado disabled`),lg(),Ml(375,`td`)(376,`code`),mN(377,`var(--color-transparent)`),lg()()()()()(),Ml(378,`div`,9)(379,`h4`,10),mN(380,`Seletor`),lg(),Ml(381,`pre`,11),mN(382,`<po-button
    p-aria-label="string"
    (p-click)="EventEmitter"
    p-danger="boolean"
    p-disabled="boolean"
    p-icon="string | TemplateRef<void>"
    p-kind="string"
    p-label="string"
    p-loading="boolean"
    p-size="string"
    p-tabindex="number | string"
    p-type="PoButtonType" >
</po-button>
`),lg()(),Ml(383,`h4`,12),mN(384,`Propriedades`),lg(),Ml(385,`table`,13)(386,`tr`,14)(387,`th`,15),mN(388,`Nome`),lg(),Ml(389,`th`,15),mN(390,`Tipo`),lg(),Ml(391,`th`,15),mN(392,`Padrão`),lg(),Ml(393,`th`,15),mN(394,`Descrição`),lg()(),Ml(395,`tr`,16)(396,`td`,17)(397,`div`,18)(398,`span`,19),mN(399,` p-aria-label`),ql(400,`br`),lg()()(),Ml(401,`td`,20)(402,`code`,21),mN(403,`string`),lg()(),Ml(404,`td`,22),mN(405,`-`),lg(),Ml(406,`td`,23)(407,`em`)(408,`strong`),mN(409,`(opcional)`),lg()(),Ml(410,`p`),mN(411,`Define um `),Ml(412,`code`),mN(413,`aria-label`),lg(),mN(414,` para o `),Ml(415,`code`),mN(416,`po-button`),lg(),mN(417,`.`),lg(),Ml(418,`p`),mN(419,`Caso esta propriedade não seja informada será considerada a label do botão.`),lg(),Ml(420,`blockquote`)(421,`p`),mN(422,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),lg()()()(),Ml(423,`tr`,16)(424,`td`,17)(425,`div`,24)(426,`span`,25),mN(427,` (p-click)`),ql(428,`br`),lg()()(),Ml(429,`td`,20)(430,`code`,26),mN(431,`EventEmitter`),lg()(),Ml(432,`td`,22),mN(433,`-`),lg(),Ml(434,`td`,23)(435,`p`),mN(436,`Ação que será executada quando o usuário clicar sobre o `),Ml(437,`code`),mN(438,`po-button`),lg(),mN(439,`.`),lg()()(),Ml(440,`tr`,16)(441,`td`,17)(442,`div`,18)(443,`span`,19),mN(444,` p-danger`),ql(445,`br`),lg()()(),Ml(446,`td`,20)(447,`code`,27),mN(448,`boolean`),lg()(),Ml(449,`td`,22),mN(450,`-`),lg(),Ml(451,`td`,23)(452,`em`)(453,`strong`),mN(454,`(opcional)`),lg()(),Ml(455,`p`),mN(456,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),lg(),Ml(457,`blockquote`)(458,`p`),mN(459,`A propriedade `),Ml(460,`code`),mN(461,`p-kind="tertiary"`),lg(),mN(462,` será inativada ao utilizar esta propriedade.`),lg()()()(),Ml(463,`tr`,16)(464,`td`,17)(465,`div`,18)(466,`span`,19),mN(467,` p-disabled`),ql(468,`br`),lg()()(),Ml(469,`td`,20)(470,`code`,27),mN(471,`boolean`),lg()(),Ml(472,`td`,22)(473,`p`)(474,`code`),mN(475,`false`),lg()()(),Ml(476,`td`,23)(477,`em`)(478,`strong`),mN(479,`(opcional)`),lg()(),Ml(480,`p`),mN(481,`Desabilita o `),Ml(482,`code`),mN(483,`po-button`),lg(),mN(484,` e não permite que o usuário interaja com o mesmo.`),lg()()(),Ml(485,`tr`,16)(486,`td`,17)(487,`div`,18)(488,`span`,19),mN(489,` p-icon`),ql(490,`br`),lg()()(),Ml(491,`td`,20)(492,`code`,21),mN(493,`string `),lg(),Ml(494,`code`,28),mN(495,` TemplateRef<void>`),lg()(),Ml(496,`td`,22),mN(497,`-`),lg(),Ml(498,`td`,23)(499,`em`)(500,`strong`),mN(501,`(opcional)`),lg()(),Ml(502,`p`),mN(503,`Ícone exibido ao lado esquerdo do label do botão.`),lg(),Ml(504,`p`),mN(505,`É possível usar qualquer um dos ícones da `),Ml(506,`a`,29),mN(507,`Biblioteca de ícones`),lg(),mN(508,`, conforme exemplo:`),lg(),Ml(509,`pre`)(510,`code`),mN(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),lg()(),Ml(512,`p`),mN(513,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(514,`em`),mN(515,`Font Awesome`),lg(),mN(516,`, desde que a biblioteca
esteja carregada no projeto:`),lg(),Ml(517,`pre`)(518,`code`),mN(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),lg()(),Ml(520,`p`),mN(521,`Outra opção seria a customização do ícone através do `),Ml(522,`code`),mN(523,`TemplateRef`),lg(),mN(524,`, conforme exemplo abaixo:`),lg(),Ml(525,`pre`)(526,`code`),mN(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(528,`blockquote`)(529,`p`),mN(530,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(531,`code`),mN(532,`font-size: inherit`),lg(),mN(533,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(534,`tr`,16)(535,`td`,17)(536,`div`,18)(537,`span`,19),mN(538,` p-kind`),ql(539,`br`),lg()()(),Ml(540,`td`,20)(541,`code`,21),mN(542,`string`),lg()(),Ml(543,`td`,22)(544,`p`)(545,`code`),mN(546,`secondary`),lg()()(),Ml(547,`td`,23)(548,`em`)(549,`strong`),mN(550,`(opcional)`),lg()(),Ml(551,`p`),mN(552,`Define o estilo visual do componente conforme valores especificados no enum `),Ml(553,`code`),mN(554,`PoButtonKind`),lg(),mN(555,`:`),lg(),Ml(556,`ul`)(557,`li`)(558,`code`),mN(559,`primary`),lg(),mN(560,`: destaca o botão, sendo recomendado para ações principais.`),lg(),Ml(561,`li`)(562,`code`),mN(563,`secondary`),lg(),mN(564,`: estilo padrão, ideal para ações secundárias.`),lg(),Ml(565,`li`)(566,`code`),mN(567,`tertiary`),lg(),mN(568,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),lg()()()(),Ml(569,`tr`,16)(570,`td`,17)(571,`div`,18)(572,`span`,19),mN(573,` p-label`),ql(574,`br`),lg()()(),Ml(575,`td`,20)(576,`code`,21),mN(577,`string`),lg()(),Ml(578,`td`,22),mN(579,`-`),lg(),Ml(580,`td`,23)(581,`em`)(582,`strong`),mN(583,`(opcional)`),lg()(),Ml(584,`p`),mN(585,`Label do botão.`),lg()()(),Ml(586,`tr`,16)(587,`td`,17)(588,`div`,18)(589,`span`,19),mN(590,` p-loading`),ql(591,`br`),lg()()(),Ml(592,`td`,20)(593,`code`,27),mN(594,`boolean`),lg()(),Ml(595,`td`,22)(596,`p`)(597,`code`),mN(598,`false`),lg()()(),Ml(599,`td`,23)(600,`em`)(601,`strong`),mN(602,`(opcional)`),lg()(),Ml(603,`p`),mN(604,`Exibe um ícone de carregamento à esquerda do `),Ml(605,`em`),mN(606,`label`),lg(),mN(607,` do botão.`),lg(),Ml(608,`blockquote`)(609,`p`),mN(610,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),lg()()()(),Ml(611,`tr`,16)(612,`td`,17)(613,`div`,18)(614,`span`,19),mN(615,` p-size`),ql(616,`br`),lg()()(),Ml(617,`td`,20)(618,`code`,21),mN(619,`string`),lg()(),Ml(620,`td`,22)(621,`p`)(622,`code`),mN(623,`medium`),lg()()(),Ml(624,`td`,23)(625,`em`)(626,`strong`),mN(627,`(opcional)`),lg()(),Ml(628,`p`),mN(629,`Define o tamanho do componente:`),lg(),Ml(630,`ul`)(631,`li`)(632,`code`),mN(633,`small`),lg(),mN(634,`: altura de 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(635,`li`)(636,`code`),mN(637,`medium`),lg(),mN(638,`: altura de 44px.`),lg(),Ml(639,`li`)(640,`code`),mN(641,`large`),lg(),mN(642,`: altura de 56px.`),lg()(),Ml(643,`blockquote`)(644,`p`),mN(645,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(646,`code`),mN(647,`medium`),lg(),mN(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(649,`a`,30),mN(650,`po-theme`),lg(),mN(651,`.`),lg()()()(),Ml(652,`tr`,16)(653,`td`,17)(654,`div`,18)(655,`span`,19),mN(656,` p-tabindex`),ql(657,`br`),lg()()(),Ml(658,`td`,20)(659,`code`,31),mN(660,`number `),lg(),Ml(661,`code`,21),mN(662,` string`),lg()(),Ml(663,`td`,22),mN(664,`-`),lg(),Ml(665,`td`,23)(666,`em`)(667,`strong`),mN(668,`(opcional)`),lg()(),Ml(669,`p`),mN(670,`Define o `),Ml(671,`code`),mN(672,`tabindex`),lg(),mN(673,` do elemento `),Ml(674,`code`),mN(675,`<button>`),lg(),mN(676,` nativo interno.`),lg(),Ml(677,`p`),mN(678,`Use `),Ml(679,`code`),mN(680,`[tabindex]="-1"`),lg(),mN(681,` para remover o botão da ordem de foco do teclado.`),lg()()(),Ml(682,`tr`,16)(683,`td`,17)(684,`div`,18)(685,`span`,19),mN(686,` p-type`),ql(687,`br`),lg()()(),Ml(688,`td`,20)(689,`code`,32),mN(690,`PoButtonType`),lg()(),Ml(691,`td`,22)(692,`p`)(693,`code`),mN(694,`PoButtonType.Button`),lg()()(),Ml(695,`td`,23)(696,`em`)(697,`strong`),mN(698,`(opcional)`),lg()(),Ml(699,`p`),mN(700,`Define o tipo do botão.`),lg()()()(),Ml(701,`h3`,12),mN(702,`Métodos`),lg(),Ml(703,`table`,33)(704,`tr`,16)(705,`th`,34)(706,`div`,18)(707,`h4`)(708,`span`,19),mN(709,` focus `),lg()()()()(),Ml(710,`tr`,23)(711,`td`,23)(712,`p`),mN(713,`Função que atribui foco ao componente.`),lg(),Ml(714,`p`),mN(715,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(716,`pre`)(717,`code`),mN(718,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),lg()()()()(),ql(719,`br`),Ml(720,`h3`),mN(721,`Enums`),lg(),Ml(722,`h4`,4)(723,`code`,5),mN(724,`PoButtonKind`),lg()(),Ml(725,`div`,2)(726,`p`),mN(727,`Estilos disponíveis do button.`),lg()(),Ml(728,`h4`,12),mN(729,`Propriedades`),lg(),Ml(730,`table`,13)(731,`tr`,14)(732,`th`,15),mN(733,`Nome`),lg(),Ml(734,`th`,15),mN(735,`Descrição`),lg()(),Ml(736,`tr`,16)(737,`td`,17)(738,`div`,18)(739,`span`,19),mN(740,` primary`),ql(741,`br`),lg()()(),Ml(742,`td`,23)(743,`p`),mN(744,`Estilo primário, usado para ações principais que requerem maior destaque.`),lg()()(),Ml(745,`tr`,16)(746,`td`,17)(747,`div`,18)(748,`span`,19),mN(749,` secondary`),ql(750,`br`),lg()()(),Ml(751,`td`,23)(752,`p`),mN(753,`Estilo secundário, usado como padrão, para ações comuns.`),lg()()(),Ml(754,`tr`,16)(755,`td`,17)(756,`div`,18)(757,`span`,19),mN(758,` tertiary`),ql(759,`br`),lg()()(),Ml(760,`td`,23)(761,`p`),mN(762,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),lg()()()(),Ml(763,`h4`,4)(764,`code`,5),mN(765,`PoButtonType`),lg()(),Ml(766,`div`,2)(767,`p`),mN(768,`Enumeração que define os tipos possíveis para o `),Ml(769,`code`),mN(770,`PoButtonComponent`),lg(),mN(771,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),lg()(),Ml(772,`h4`,12),mN(773,`Propriedades`),lg(),Ml(774,`table`,13)(775,`tr`,14)(776,`th`,15),mN(777,`Nome`),lg(),Ml(778,`th`,15),mN(779,`Descrição`),lg()(),Ml(780,`tr`,16)(781,`td`,17)(782,`div`,18)(783,`span`,19),mN(784,` Submit`),ql(785,`br`),lg()()(),Ml(786,`td`,23)(787,`p`),mN(788,`Define o botão como do tipo `),Ml(789,`code`),mN(790,`submit`),lg(),mN(791,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Ml(792,`code`),mN(793,`submit`),lg(),mN(794,`.`),lg()()(),Ml(795,`tr`,16)(796,`td`,17)(797,`div`,18)(798,`span`,19),mN(799,` Button`),ql(800,`br`),lg()()(),Ml(801,`td`,23)(802,`p`),mN(803,`Define o botão como do tipo `),Ml(804,`code`),mN(805,`button`),lg(),mN(806,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),lg()()(),Ml(807,`tr`,16)(808,`td`,17)(809,`div`,18)(810,`span`,19),mN(811,` Reset`),ql(812,`br`),lg()()(),Ml(813,`td`,23)(814,`p`),mN(815,`Define o botão como do tipo `),Ml(816,`code`),mN(817,`reset`),lg(),mN(818,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Button`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-button-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-button-basic-view`)(6,`sample-po-button-labs-view`)(7,`sample-po-button-social-network-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,se,ce,be,Ee],encapsulation:2,changeDetection:1})}return o})()}];var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[NL.forChild(Oe),NL]})}return o})();var mt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[ar,Se]})}return o})();export{mt as DocPoButtonModule};