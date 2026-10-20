import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Ct as Wte,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,Pi as mt$1,Ri as nu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,et as Noe,ga as xx,i as _a,ir as EF,ji as mO,kt as Z4,mn as ni,ot as Q4,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,un as m5,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var de=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(a,i){a&1&&(jc(0,`po-button`,0),mt$1(`p-click`,function(){return i.onClick()}),wg())},dependencies:[ni],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Basic`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-basic/sample-po-button-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-basic/sample-po-button-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,fe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{poDialog=p(Wte);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:Z4.Button},{label:`submit`,value:Z4.Submit},{label:`reset`,value:Z4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1}),r$1&&r$1.forEach(a=>{a===`danger`&&this.properties.includes(`danger`)&&(this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!0}))})}verifyDisabled(r){let a=[...this.propertiesOptions];r===`tertiary`?(a[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=a):(a[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=Z4.Button,this.properties=[],this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let u=Sx();jc(0,`div`,1)(1,`po-button`,2),mt$1(`p-click`,function(){return i.buttonClick()}),wg()(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(i.label,d)||(i.label=d),v_(d)}),wg()(),jc(7,`po-checkbox-group`,4),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(i.properties,d)||(i.properties=d),v_(d)}),mt$1(`p-change`,function(d){return i.propertiesChange(d)}),wg(),jc(8,`po-radio-group`,5),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(i.icon,d)||(i.icon=d),v_(d)}),wg(),jc(9,`po-radio-group`,6),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(i.kind,d)||(i.kind=d),v_(d)}),mt$1(`p-change`,function(d){return i.verifyDisabled(d)}),wg(),jc(10,`po-radio-group`,7),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(i.type,d)||(i.type=d),v_(d)}),wg(),jc(11,`po-radio-group`,8),JN(),ob(`ngModelChange`,function(d){return y_(u),sO(i.size,d)||(i.size=d),v_(d)}),mt$1(`p-change`,function(d){return i.verifyDisabled(d)}),wg(),jc(12,`div`,1)(13,`po-button`,9),mt$1(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(rg(),jE(`p-disabled`,i.properties.includes(`disabled`))(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-size`,i.size)(`p-danger`,i.properties.includes(`danger`))(`p-kind`,i.kind)(`p-type`,i.type),rg(5),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.icon),jE(`p-options`,i.iconsOptions),t0(),rg(),ib(`ngModel`,i.kind),jE(`p-options`,i.kindsOptions),t0(),rg(),ib(`ngModel`,i.type),jE(`p-options`,i.typeOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizesOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Labs`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-labs/sample-po-button-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-labs/sample-po-button-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ye,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return o})();function Pe(o,he){if(o&1){let r=Sx();jc(0,`div`,0),nu(1,`po-avatar`,2),jc(2,`div`,3)(3,`span`,4),iO(4),wg(),jc(5,`span`,5),iO(6),wg(),jc(7,`span`,5),iO(8),wg()()(),jc(9,`div`,0)(10,`po-button`,6),mt$1(`p-click`,function(){y_(r);let i=xx();return v_(i.notification(`added`,`success`))}),wg(),jc(11,`po-button`,7),mt$1(`p-click`,function(){y_(r);let i=xx();return v_(i.notification(`ignored`,`warning`))}),wg(),jc(12,`po-button`,8),mt$1(`p-click`,function(){y_(r);let i=xx();return v_(i.notification(`blocked`,`information`))}),wg()()}if(o&2){let r=xx();rg(),jE(`p-src`,r.userAvatar),rg(3),Ag(` `,r.currentFriend.name,` `),rg(2),Ag(` `,r.currentFriend.mutualFriends,` mutual friends `),rg(2),Ag(` Resides in `,r.currentFriend.reside,` `)}}function we(o,he){o&1&&(jc(0,`div`,0)(1,`span`,9),iO(2,`Congratulations TOTVS, no more requests!`),wg()())}var ue=(()=>{class o{poNotification=p(zu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`po-widget`,1),px(2,Pe,13,4)(3,we,3,0,`div`,0),wg()()),a&2&&(rg(2),mx(i.currentFriend?2:3))},dependencies:[Q4,ni,Noe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Social Network`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-social-network`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Be,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:819,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoButtonModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-button.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoButtonComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O `),jc(15,`code`),iO(16,`po-button`),wg(),iO(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),wg(),jc(18,`p`),iO(19,`Através dos tipos, é possível identificar a importância de cada ação.`),wg(),jc(20,`h4`),iO(21,`Boas práticas`),wg(),jc(22,`ul`)(23,`li`),iO(24,`Evite `),jc(25,`code`),iO(26,`labels`),wg(),iO(27,` extensos que quebram o layout do `),jc(28,`code`),iO(29,`po-button`),wg(),iO(30,`, use `),jc(31,`code`),iO(32,`labels`),wg(),iO(33,` diretos, curtos e intuitivos.`),wg(),jc(34,`li`),iO(35,`Utilize apenas um `),jc(36,`code`),iO(37,`po-button`),wg(),iO(38,` configurado como `),jc(39,`code`),iO(40,`primary`),wg(),iO(41,` por página.`),wg(),jc(42,`li`),iO(43,`Para ações irreversíveis use sempre a propriedade `),jc(44,`code`),iO(45,`p-danger`),wg(),iO(46,`.`),wg()(),jc(47,`h4`),iO(48,`Acessibilidade tratada no componente`),wg(),jc(49,`p`),iO(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(51,`ul`)(52,`li`),iO(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),jc(54,`a`,6),iO(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),wg()(),jc(56,`li`),iO(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(58,`a`,7),iO(59,`WCAG 2.4.12: Focus Appearance`),wg()()(),jc(60,`h4`),iO(61,`Tokens customizáveis`),wg(),jc(62,`p`),iO(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(64,`blockquote`)(65,`p`),iO(66,`Para maiores informações, acesse o guia `),jc(67,`a`,8),iO(68,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(69,`.`),wg()(),jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),iO(74,`Propriedade`),wg(),jc(75,`th`),iO(76,`Descrição`),wg(),jc(77,`th`),iO(78,`Valor Padrão`),wg()()(),jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),iO(83,`--font-family`),wg()(),jc(84,`td`),iO(85,`Família tipográfica usada`),wg(),jc(86,`td`)(87,`code`),iO(88,`var(--font-family-theme)`),wg()()(),jc(89,`tr`)(90,`td`)(91,`code`),iO(92,`--font-size`),wg()(),jc(93,`td`),iO(94,`Tamanho da fonte`),wg(),jc(95,`td`)(96,`code`),iO(97,`var(--font-size-default)`),wg()()(),jc(98,`tr`)(99,`td`)(100,`code`),iO(101,`--font-weight`),wg()(),jc(102,`td`),iO(103,`Peso da fonte`),wg(),jc(104,`td`)(105,`code`),iO(106,`var(--font-weight-bold)`),wg()()(),jc(107,`tr`)(108,`td`)(109,`code`),iO(110,`--line-height`),wg()(),jc(111,`td`),iO(112,`Tamanho da label`),wg(),jc(113,`td`)(114,`code`),iO(115,`var(--line-height-none)`),wg()()(),jc(116,`tr`)(117,`td`)(118,`code`),iO(119,`--border-radius`),wg()(),jc(120,`td`),iO(121,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(122,`td`)(123,`code`),iO(124,`var(--border-radius-md)`),wg()()(),jc(125,`tr`)(126,`td`)(127,`code`),iO(128,`--border-width`),wg()(),jc(129,`td`),iO(130,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(131,`td`)(132,`code`),iO(133,`var(--border-width-md)`),wg()()(),jc(134,`tr`)(135,`td`)(136,`code`),iO(137,`--padding`),wg()(),jc(138,`td`),iO(139,`Preenchimento`),wg(),jc(140,`td`)(141,`code`),iO(142,`0 1em`),wg()()(),jc(143,`tr`)(144,`td`)(145,`strong`),iO(146,`Danger`),wg()(),nu(147,`td`)(148,`td`),wg(),jc(149,`tr`)(150,`td`)(151,`code`),iO(152,`--text-color-danger`),wg()(),jc(153,`td`),iO(154,`Cor do texto no estado danger`),wg(),jc(155,`td`)(156,`code`),iO(157,`var(--color-neutral-light-00)`),wg()()(),jc(158,`tr`)(159,`td`)(160,`code`),iO(161,`--color-button-danger`),wg()(),jc(162,`td`),iO(163,`Cor do botão no estado danger`),wg(),jc(164,`td`)(165,`code`),iO(166,`var(--color-feedback-negative-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),iO(170,`--color-danger-hover`),wg()(),jc(171,`td`),iO(172,`Cor de hover no estado danger`),wg(),jc(173,`td`)(174,`code`),iO(175,`var(--color-feedback-negative-darker)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`code`),iO(179,`--color-danger-pressed`),wg()(),jc(180,`td`),iO(181,`Cor pressionada no estado danger`),wg(),jc(182,`td`)(183,`code`),iO(184,`var(--color-feedback-negative-darkest)`),wg()()(),jc(185,`tr`)(186,`td`)(187,`code`),iO(188,`--background-danger-hover`),wg()(),jc(189,`td`),iO(190,`Cor de background de hover no estado danger`),wg(),jc(191,`td`)(192,`code`),iO(193,`var(--color-feedback-negative-lighter)`),wg()()(),jc(194,`tr`)(195,`td`)(196,`code`),iO(197,`--border-color-danger-hover`),wg()(),jc(198,`td`),iO(199,`Cor da borda de hover no estado danger`),wg(),jc(200,`td`)(201,`code`),iO(202,`var(--color-feedback-negative-darkest)`),wg()()(),jc(203,`tr`)(204,`td`)(205,`code`),iO(206,`--background-danger-pressed`),wg()(),jc(207,`td`),iO(208,`Cor de background pressionado no estado danger`),wg(),jc(209,`td`)(210,`code`),iO(211,`var(--color-feedback-negative-light)`),wg()()(),jc(212,`tr`)(213,`td`)(214,`code`),iO(215,`--background-color-button-danger`),wg(),iO(216,`\xA0`),wg(),jc(217,`td`),iO(218,`Cor de background do botão no estado danger`),wg(),jc(219,`td`)(220,`code`),iO(221,`var(--color-transparent)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`strong`),iO(225,`Default Values`),wg()(),nu(226,`td`)(227,`td`),wg(),jc(228,`tr`)(229,`td`)(230,`code`),iO(231,`--text-color`),wg()(),jc(232,`td`),iO(233,`Cor do texto`),wg(),jc(234,`td`)(235,`code`),iO(236,`var(--color-neutral-light-00)`),wg()()(),jc(237,`tr`)(238,`td`)(239,`code`),iO(240,`--color`),wg()(),jc(241,`td`),iO(242,`Cor principal do botão`),wg(),jc(243,`td`)(244,`code`),iO(245,`var(--color-action-default)`),wg()()(),jc(246,`tr`)(247,`td`)(248,`code`),iO(249,`--background-color`),wg()(),jc(250,`td`),iO(251,`Cor de background`),wg(),jc(252,`td`)(253,`code`),iO(254,`var(--color-transparent)`),wg()()(),jc(255,`tr`)(256,`td`)(257,`code`),iO(258,`--border-color`),wg()(),jc(259,`td`),iO(260,`Cor da borda`),wg(),jc(261,`td`)(262,`code`),iO(263,`var(--color-transparent)`),wg()()(),jc(264,`tr`)(265,`td`)(266,`code`),iO(267,`--shadow`),wg()(),jc(268,`td`),iO(269,`Contém o valor da sombra do elemento`),wg(),jc(270,`td`)(271,`code`),iO(272,`var(--shadow-none)`),wg()()(),jc(273,`tr`)(274,`td`)(275,`strong`),iO(276,`Hover`),wg()(),nu(277,`td`)(278,`td`),wg(),jc(279,`tr`)(280,`td`)(281,`code`),iO(282,`--color-hover`),wg()(),jc(283,`td`),iO(284,`Cor principal no estado hover`),wg(),jc(285,`td`)(286,`code`),iO(287,`var(--color-action-hover)`),wg()()(),jc(288,`tr`)(289,`td`)(290,`code`),iO(291,`--background-hover`),wg()(),jc(292,`td`),iO(293,`Cor de background no estado hover`),wg(),jc(294,`td`)(295,`code`),iO(296,`var(--color-brand-01-lighter)`),wg()()(),jc(297,`tr`)(298,`td`)(299,`code`),iO(300,`--border-color-hover`),wg()(),jc(301,`td`),iO(302,`Cor da borda no estado hover`),wg(),jc(303,`td`)(304,`code`),iO(305,`var(--color-brand-01-darkest)`),wg()()(),jc(306,`tr`)(307,`td`)(308,`strong`),iO(309,`Focused`),wg()(),nu(310,`td`)(311,`td`),wg(),jc(312,`tr`)(313,`td`)(314,`code`),iO(315,`--outline-color-focused`),wg()(),jc(316,`td`),iO(317,`Cor do outline do estado de focus`),wg(),jc(318,`td`)(319,`code`),iO(320,`var(--color-action-focus)`),wg()()(),jc(321,`tr`)(322,`td`)(323,`strong`),iO(324,`Pressed`),wg()(),nu(325,`td`)(326,`td`),wg(),jc(327,`tr`)(328,`td`)(329,`code`),iO(330,`--color-pressed`),wg()(),jc(331,`td`),iO(332,`Cor principal no estado de pressionado`),wg(),jc(333,`td`)(334,`code`),iO(335,`var(--color-action-pressed)`),wg()()(),jc(336,`tr`)(337,`td`)(338,`code`),iO(339,`--background-pressed`),wg()(),jc(340,`td`),iO(341,`Cor de background no estado de pressionado\xA0`),wg(),jc(342,`td`)(343,`code`),iO(344,`var(--color-brand-01-light)`),wg()()(),jc(345,`tr`)(346,`td`)(347,`strong`),iO(348,`Disabled`),wg()(),nu(349,`td`)(350,`td`),wg(),jc(351,`tr`)(352,`td`)(353,`code`),iO(354,`--text-color-disabled`),wg()(),jc(355,`td`),iO(356,`Cor do texto no estado disabled`),wg(),jc(357,`td`)(358,`code`),iO(359,`var(--color-neutral-dark-70)`),wg()()(),jc(360,`tr`)(361,`td`)(362,`code`),iO(363,`--color-disabled`),wg()(),jc(364,`td`),iO(365,`Cor principal no estado disabled`),wg(),jc(366,`td`)(367,`code`),iO(368,`var(--color-action-disabled)`),wg()()(),jc(369,`tr`)(370,`td`)(371,`code`),iO(372,`--background-color-disabled`),wg()(),jc(373,`td`),iO(374,`Cor de background no estado disabled`),wg(),jc(375,`td`)(376,`code`),iO(377,`var(--color-transparent)`),wg()()()()()(),jc(378,`div`,9)(379,`h4`,10),iO(380,`Seletor`),wg(),jc(381,`pre`,11),iO(382,`<po-button
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
`),wg()(),jc(383,`h4`,12),iO(384,`Propriedades`),wg(),jc(385,`table`,13)(386,`tr`,14)(387,`th`,15),iO(388,`Nome`),wg(),jc(389,`th`,15),iO(390,`Tipo`),wg(),jc(391,`th`,15),iO(392,`Padrão`),wg(),jc(393,`th`,15),iO(394,`Descrição`),wg()(),jc(395,`tr`,16)(396,`td`,17)(397,`div`,18)(398,`span`,19),iO(399,` p-aria-label`),nu(400,`br`),wg()()(),jc(401,`td`,20)(402,`code`,21),iO(403,`string`),wg()(),jc(404,`td`,22),iO(405,`-`),wg(),jc(406,`td`,23)(407,`em`)(408,`strong`),iO(409,`(opcional)`),wg()(),jc(410,`p`),iO(411,`Define um `),jc(412,`code`),iO(413,`aria-label`),wg(),iO(414,` para o `),jc(415,`code`),iO(416,`po-button`),wg(),iO(417,`.`),wg(),jc(418,`p`),iO(419,`Caso esta propriedade não seja informada será considerada a label do botão.`),wg(),jc(420,`blockquote`)(421,`p`),iO(422,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),wg()()()(),jc(423,`tr`,16)(424,`td`,17)(425,`div`,24)(426,`span`,25),iO(427,` (p-click)`),nu(428,`br`),wg()()(),jc(429,`td`,20)(430,`code`,26),iO(431,`EventEmitter`),wg()(),jc(432,`td`,22),iO(433,`-`),wg(),jc(434,`td`,23)(435,`p`),iO(436,`Ação que será executada quando o usuário clicar sobre o `),jc(437,`code`),iO(438,`po-button`),wg(),iO(439,`.`),wg()()(),jc(440,`tr`,16)(441,`td`,17)(442,`div`,18)(443,`span`,19),iO(444,` p-danger`),nu(445,`br`),wg()()(),jc(446,`td`,20)(447,`code`,27),iO(448,`boolean`),wg()(),jc(449,`td`,22),iO(450,`-`),wg(),jc(451,`td`,23)(452,`em`)(453,`strong`),iO(454,`(opcional)`),wg()(),jc(455,`p`),iO(456,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),wg(),jc(457,`blockquote`)(458,`p`),iO(459,`A propriedade `),jc(460,`code`),iO(461,`p-kind="tertiary"`),wg(),iO(462,` será inativada ao utilizar esta propriedade.`),wg()()()(),jc(463,`tr`,16)(464,`td`,17)(465,`div`,18)(466,`span`,19),iO(467,` p-disabled`),nu(468,`br`),wg()()(),jc(469,`td`,20)(470,`code`,27),iO(471,`boolean`),wg()(),jc(472,`td`,22)(473,`p`)(474,`code`),iO(475,`false`),wg()()(),jc(476,`td`,23)(477,`em`)(478,`strong`),iO(479,`(opcional)`),wg()(),jc(480,`p`),iO(481,`Desabilita o `),jc(482,`code`),iO(483,`po-button`),wg(),iO(484,` e não permite que o usuário interaja com o mesmo.`),wg()()(),jc(485,`tr`,16)(486,`td`,17)(487,`div`,18)(488,`span`,19),iO(489,` p-icon`),nu(490,`br`),wg()()(),jc(491,`td`,20)(492,`code`,21),iO(493,`string `),wg(),jc(494,`code`,28),iO(495,` TemplateRef<void>`),wg()(),jc(496,`td`,22),iO(497,`-`),wg(),jc(498,`td`,23)(499,`em`)(500,`strong`),iO(501,`(opcional)`),wg()(),jc(502,`p`),iO(503,`Ícone exibido ao lado esquerdo do label do botão.`),wg(),jc(504,`p`),iO(505,`É possível usar qualquer um dos ícones da `),jc(506,`a`,29),iO(507,`Biblioteca de ícones`),wg(),iO(508,`, conforme exemplo:`),wg(),jc(509,`pre`)(510,`code`),iO(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),wg()(),jc(512,`p`),iO(513,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(514,`em`),iO(515,`Font Awesome`),wg(),iO(516,`, desde que a biblioteca
esteja carregada no projeto:`),wg(),jc(517,`pre`)(518,`code`),iO(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),wg()(),jc(520,`p`),iO(521,`Outra opção seria a customização do ícone através do `),jc(522,`code`),iO(523,`TemplateRef`),wg(),iO(524,`, conforme exemplo abaixo:`),wg(),jc(525,`pre`)(526,`code`),iO(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(528,`blockquote`)(529,`p`),iO(530,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(531,`code`),iO(532,`font-size: inherit`),wg(),iO(533,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(534,`tr`,16)(535,`td`,17)(536,`div`,18)(537,`span`,19),iO(538,` p-kind`),nu(539,`br`),wg()()(),jc(540,`td`,20)(541,`code`,21),iO(542,`string`),wg()(),jc(543,`td`,22)(544,`p`)(545,`code`),iO(546,`secondary`),wg()()(),jc(547,`td`,23)(548,`em`)(549,`strong`),iO(550,`(opcional)`),wg()(),jc(551,`p`),iO(552,`Define o estilo visual do componente conforme valores especificados no enum `),jc(553,`code`),iO(554,`PoButtonKind`),wg(),iO(555,`:`),wg(),jc(556,`ul`)(557,`li`)(558,`code`),iO(559,`primary`),wg(),iO(560,`: destaca o botão, sendo recomendado para ações principais.`),wg(),jc(561,`li`)(562,`code`),iO(563,`secondary`),wg(),iO(564,`: estilo padrão, ideal para ações secundárias.`),wg(),jc(565,`li`)(566,`code`),iO(567,`tertiary`),wg(),iO(568,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),wg()()()(),jc(569,`tr`,16)(570,`td`,17)(571,`div`,18)(572,`span`,19),iO(573,` p-label`),nu(574,`br`),wg()()(),jc(575,`td`,20)(576,`code`,21),iO(577,`string`),wg()(),jc(578,`td`,22),iO(579,`-`),wg(),jc(580,`td`,23)(581,`em`)(582,`strong`),iO(583,`(opcional)`),wg()(),jc(584,`p`),iO(585,`Label do botão.`),wg()()(),jc(586,`tr`,16)(587,`td`,17)(588,`div`,18)(589,`span`,19),iO(590,` p-loading`),nu(591,`br`),wg()()(),jc(592,`td`,20)(593,`code`,27),iO(594,`boolean`),wg()(),jc(595,`td`,22)(596,`p`)(597,`code`),iO(598,`false`),wg()()(),jc(599,`td`,23)(600,`em`)(601,`strong`),iO(602,`(opcional)`),wg()(),jc(603,`p`),iO(604,`Exibe um ícone de carregamento à esquerda do `),jc(605,`em`),iO(606,`label`),wg(),iO(607,` do botão.`),wg(),jc(608,`blockquote`)(609,`p`),iO(610,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),wg()()()(),jc(611,`tr`,16)(612,`td`,17)(613,`div`,18)(614,`span`,19),iO(615,` p-size`),nu(616,`br`),wg()()(),jc(617,`td`,20)(618,`code`,21),iO(619,`string`),wg()(),jc(620,`td`,22)(621,`p`)(622,`code`),iO(623,`medium`),wg()()(),jc(624,`td`,23)(625,`em`)(626,`strong`),iO(627,`(opcional)`),wg()(),jc(628,`p`),iO(629,`Define o tamanho do componente:`),wg(),jc(630,`ul`)(631,`li`)(632,`code`),iO(633,`small`),wg(),iO(634,`: altura de 32px (disponível apenas para acessibilidade AA).`),wg(),jc(635,`li`)(636,`code`),iO(637,`medium`),wg(),iO(638,`: altura de 44px.`),wg(),jc(639,`li`)(640,`code`),iO(641,`large`),wg(),iO(642,`: altura de 56px.`),wg()(),jc(643,`blockquote`)(644,`p`),iO(645,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(646,`code`),iO(647,`medium`),wg(),iO(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(649,`a`,30),iO(650,`po-theme`),wg(),iO(651,`.`),wg()()()(),jc(652,`tr`,16)(653,`td`,17)(654,`div`,18)(655,`span`,19),iO(656,` p-tabindex`),nu(657,`br`),wg()()(),jc(658,`td`,20)(659,`code`,31),iO(660,`number `),wg(),jc(661,`code`,21),iO(662,` string`),wg()(),jc(663,`td`,22),iO(664,`-`),wg(),jc(665,`td`,23)(666,`em`)(667,`strong`),iO(668,`(opcional)`),wg()(),jc(669,`p`),iO(670,`Define o `),jc(671,`code`),iO(672,`tabindex`),wg(),iO(673,` do elemento `),jc(674,`code`),iO(675,`<button>`),wg(),iO(676,` nativo interno.`),wg(),jc(677,`p`),iO(678,`Use `),jc(679,`code`),iO(680,`[tabindex]="-1"`),wg(),iO(681,` para remover o botão da ordem de foco do teclado.`),wg()()(),jc(682,`tr`,16)(683,`td`,17)(684,`div`,18)(685,`span`,19),iO(686,` p-type`),nu(687,`br`),wg()()(),jc(688,`td`,20)(689,`code`,32),iO(690,`PoButtonType`),wg()(),jc(691,`td`,22)(692,`p`)(693,`code`),iO(694,`PoButtonType.Button`),wg()()(),jc(695,`td`,23)(696,`em`)(697,`strong`),iO(698,`(opcional)`),wg()(),jc(699,`p`),iO(700,`Define o tipo do botão.`),wg()()()(),jc(701,`h3`,12),iO(702,`Métodos`),wg(),jc(703,`table`,33)(704,`tr`,16)(705,`th`,34)(706,`div`,18)(707,`h4`)(708,`span`,19),iO(709,` focus `),wg()()()()(),jc(710,`tr`,23)(711,`td`,23)(712,`p`),iO(713,`Função que atribui foco ao componente.`),wg(),jc(714,`p`),iO(715,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(716,`pre`)(717,`code`),iO(718,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),wg()()()()(),nu(719,`br`),jc(720,`h3`),iO(721,`Enums`),wg(),jc(722,`h4`,4)(723,`code`,5),iO(724,`PoButtonKind`),wg()(),jc(725,`div`,2)(726,`p`),iO(727,`Estilos disponíveis do button.`),wg()(),jc(728,`h4`,12),iO(729,`Propriedades`),wg(),jc(730,`table`,13)(731,`tr`,14)(732,`th`,15),iO(733,`Nome`),wg(),jc(734,`th`,15),iO(735,`Descrição`),wg()(),jc(736,`tr`,16)(737,`td`,17)(738,`div`,18)(739,`span`,19),iO(740,` primary`),nu(741,`br`),wg()()(),jc(742,`td`,23)(743,`p`),iO(744,`Estilo primário, usado para ações principais que requerem maior destaque.`),wg()()(),jc(745,`tr`,16)(746,`td`,17)(747,`div`,18)(748,`span`,19),iO(749,` secondary`),nu(750,`br`),wg()()(),jc(751,`td`,23)(752,`p`),iO(753,`Estilo secundário, usado como padrão, para ações comuns.`),wg()()(),jc(754,`tr`,16)(755,`td`,17)(756,`div`,18)(757,`span`,19),iO(758,` tertiary`),nu(759,`br`),wg()()(),jc(760,`td`,23)(761,`p`),iO(762,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),wg()()()(),jc(763,`h4`,4)(764,`code`,5),iO(765,`PoButtonType`),wg()(),jc(766,`div`,2)(767,`p`),iO(768,`Enumeração que define os tipos possíveis para o `),jc(769,`code`),iO(770,`PoButtonComponent`),wg(),iO(771,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),wg()(),jc(772,`h4`,12),iO(773,`Propriedades`),wg(),jc(774,`table`,13)(775,`tr`,14)(776,`th`,15),iO(777,`Nome`),wg(),jc(778,`th`,15),iO(779,`Descrição`),wg()(),jc(780,`tr`,16)(781,`td`,17)(782,`div`,18)(783,`span`,19),iO(784,` Submit`),nu(785,`br`),wg()()(),jc(786,`td`,23)(787,`p`),iO(788,`Define o botão como do tipo `),jc(789,`code`),iO(790,`submit`),wg(),iO(791,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),jc(792,`code`),iO(793,`submit`),wg(),iO(794,`.`),wg()()(),jc(795,`tr`,16)(796,`td`,17)(797,`div`,18)(798,`span`,19),iO(799,` Button`),nu(800,`br`),wg()()(),jc(801,`td`,23)(802,`p`),iO(803,`Define o botão como do tipo `),jc(804,`code`),iO(805,`button`),wg(),iO(806,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),wg()()(),jc(807,`tr`,16)(808,`td`,17)(809,`div`,18)(810,`span`,19),iO(811,` Reset`),nu(812,`br`),wg()()(),jc(813,`td`,23)(814,`p`),iO(815,`Define o botão como do tipo `),jc(816,`code`),iO(817,`reset`),wg(),iO(818,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Button`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt$1(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-button-doc`),wg(),jc(4,`po-tab`,3),mt$1(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-button-basic-view`)(6,`sample-po-button-labs-view`)(7,`sample-po-button-social-network-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,se,ce,be,Ee],encapsulation:2,changeDetection:1})}return o})()}];var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue$1({imports:[C1.forChild(Oe),C1]})}return o})();var mt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue$1({imports:[Ta,Se]})}return o})();export{mt as DocPoButtonModule};