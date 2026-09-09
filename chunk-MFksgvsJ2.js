import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,En as w4,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,li as _x,lr as Gl,lt as S4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,sr as Fx,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var de=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(a,i){a&1&&(Tl(0,`po-button`,0),ht(`p-click`,function(){return i.onClick()}),ag())},dependencies:[Zt],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-basic/sample-po-button-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-basic/sample-po-button-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,fe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{poDialog=f(W0e);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:S4.Button},{label:`submit`,value:S4.Submit},{label:`reset`,value:S4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1}),r$1&&r$1.forEach(a=>{a===`danger`&&this.properties.includes(`danger`)&&(this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!0}))})}verifyDisabled(r){let a=[...this.propertiesOptions];r===`tertiary`?(a[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=a):(a[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=S4.Button,this.properties=[],this.kindsOptions[2]=s(r({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let u=Ax();Tl(0,`div`,1)(1,`po-button`,2),ht(`p-click`,function(){return i.buttonClick()}),ag()(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),ww(`ngModelChange`,function(d){return Ky(u),uN(i.label,d)||(i.label=d),Xy(d)}),ag(),a0(),ag(),Tl(7,`po-checkbox-group`,4),ww(`ngModelChange`,function(d){return Ky(u),uN(i.properties,d)||(i.properties=d),Xy(d)}),ht(`p-change`,function(d){return i.propertiesChange(d)}),ag(),a0(),Tl(8,`po-radio-group`,5),ww(`ngModelChange`,function(d){return Ky(u),uN(i.icon,d)||(i.icon=d),Xy(d)}),ag(),a0(),Tl(9,`po-radio-group`,6),ww(`ngModelChange`,function(d){return Ky(u),uN(i.kind,d)||(i.kind=d),Xy(d)}),ht(`p-change`,function(d){return i.verifyDisabled(d)}),ag(),a0(),Tl(10,`po-radio-group`,7),ww(`ngModelChange`,function(d){return Ky(u),uN(i.type,d)||(i.type=d),Xy(d)}),ag(),a0(),Tl(11,`po-radio-group`,8),ww(`ngModelChange`,function(d){return Ky(u),uN(i.size,d)||(i.size=d),Xy(d)}),ht(`p-change`,function(d){return i.verifyDisabled(d)}),ag(),a0(),Tl(12,`div`,1)(13,`po-button`,9),ht(`p-click`,function(){return i.restore()}),ag()()()}a&2&&(jp(),nw(`p-disabled`,i.properties.includes(`disabled`))(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-size`,i.size)(`p-danger`,i.properties.includes(`danger`))(`p-kind`,i.kind)(`p-type`,i.type),jp(5),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.icon),nw(`p-options`,i.iconsOptions),l0(),jp(),Ew(`ngModel`,i.kind),nw(`p-options`,i.kindsOptions),l0(),jp(),Ew(`ngModel`,i.type),nw(`p-options`,i.typeOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizesOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-labs/sample-po-button-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-labs/sample-po-button-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return o})();function Pe(o,he){if(o&1){let r=Ax();Tl(0,`div`,0),Gl(1,`po-avatar`,2),Tl(2,`div`,3)(3,`span`,4),cN(4),ag(),Tl(5,`span`,5),cN(6),ag(),Tl(7,`span`,5),cN(8),ag()()(),Tl(9,`div`,0)(10,`po-button`,6),ht(`p-click`,function(){Ky(r);return Xy(Fx().notification(`added`,`success`))}),ag(),Tl(11,`po-button`,7),ht(`p-click`,function(){Ky(r);return Xy(Fx().notification(`ignored`,`warning`))}),ag(),Tl(12,`po-button`,8),ht(`p-click`,function(){Ky(r);return Xy(Fx().notification(`blocked`,`information`))}),ag()()}if(o&2){let r=Fx();jp(),nw(`p-src`,r.userAvatar),jp(3),hg(` `,r.currentFriend.name,` `),jp(2),hg(` `,r.currentFriend.mutualFriends,` mutual friends `),jp(2),hg(` Resides in `,r.currentFriend.reside,` `)}}function we(o,he){o&1&&(Tl(0,`div`,0)(1,`span`,9),cN(2,`Congratulations TOTVS, no more requests!`),ag()())}var ue=(()=>{class o{poNotification=f(Eu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`po-widget`,1),_x(2,Pe,13,4)(3,we,3,0,`div`,0),ag()()),a&2&&(jp(2),Dx(i.currentFriend?2:3))},dependencies:[w4,Zt,O8e],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Social Network`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-social-network`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:819,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoButtonModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-button.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoButtonComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O `),Tl(15,`code`),cN(16,`po-button`),ag(),cN(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),ag(),Tl(18,`p`),cN(19,`Através dos tipos, é possível identificar a importância de cada ação.`),ag(),Tl(20,`h4`),cN(21,`Boas práticas`),ag(),Tl(22,`ul`)(23,`li`),cN(24,`Evite `),Tl(25,`code`),cN(26,`labels`),ag(),cN(27,` extensos que quebram o layout do `),Tl(28,`code`),cN(29,`po-button`),ag(),cN(30,`, use `),Tl(31,`code`),cN(32,`labels`),ag(),cN(33,` diretos, curtos e intuitivos.`),ag(),Tl(34,`li`),cN(35,`Utilize apenas um `),Tl(36,`code`),cN(37,`po-button`),ag(),cN(38,` configurado como `),Tl(39,`code`),cN(40,`primary`),ag(),cN(41,` por página.`),ag(),Tl(42,`li`),cN(43,`Para ações irreversíveis use sempre a propriedade `),Tl(44,`code`),cN(45,`p-danger`),ag(),cN(46,`.`),ag()(),Tl(47,`h4`),cN(48,`Acessibilidade tratada no componente`),ag(),Tl(49,`p`),cN(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ag(),Tl(51,`ul`)(52,`li`),cN(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),Tl(54,`a`,6),cN(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),ag()(),Tl(56,`li`),cN(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Tl(58,`a`,7),cN(59,`WCAG 2.4.12: Focus Appearance`),ag()()(),Tl(60,`h4`),cN(61,`Tokens customizáveis`),ag(),Tl(62,`p`),cN(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(64,`blockquote`)(65,`p`),cN(66,`Para maiores informações, acesse o guia `),Tl(67,`a`,8),cN(68,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(69,`.`),ag()(),Tl(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),cN(74,`Propriedade`),ag(),Tl(75,`th`),cN(76,`Descrição`),ag(),Tl(77,`th`),cN(78,`Valor Padrão`),ag()()(),Tl(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),cN(83,`--font-family`),ag()(),Tl(84,`td`),cN(85,`Família tipográfica usada`),ag(),Tl(86,`td`)(87,`code`),cN(88,`var(--font-family-theme)`),ag()()(),Tl(89,`tr`)(90,`td`)(91,`code`),cN(92,`--font-size`),ag()(),Tl(93,`td`),cN(94,`Tamanho da fonte`),ag(),Tl(95,`td`)(96,`code`),cN(97,`var(--font-size-default)`),ag()()(),Tl(98,`tr`)(99,`td`)(100,`code`),cN(101,`--font-weight`),ag()(),Tl(102,`td`),cN(103,`Peso da fonte`),ag(),Tl(104,`td`)(105,`code`),cN(106,`var(--font-weight-bold)`),ag()()(),Tl(107,`tr`)(108,`td`)(109,`code`),cN(110,`--line-height`),ag()(),Tl(111,`td`),cN(112,`Tamanho da label`),ag(),Tl(113,`td`)(114,`code`),cN(115,`var(--line-height-none)`),ag()()(),Tl(116,`tr`)(117,`td`)(118,`code`),cN(119,`--border-radius`),ag()(),Tl(120,`td`),cN(121,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(122,`td`)(123,`code`),cN(124,`var(--border-radius-md)`),ag()()(),Tl(125,`tr`)(126,`td`)(127,`code`),cN(128,`--border-width`),ag()(),Tl(129,`td`),cN(130,`Contém o valor da largura dos cantos do elemento\xA0`),ag(),Tl(131,`td`)(132,`code`),cN(133,`var(--border-width-md)`),ag()()(),Tl(134,`tr`)(135,`td`)(136,`code`),cN(137,`--padding`),ag()(),Tl(138,`td`),cN(139,`Preenchimento`),ag(),Tl(140,`td`)(141,`code`),cN(142,`0 1em`),ag()()(),Tl(143,`tr`)(144,`td`)(145,`strong`),cN(146,`Danger`),ag()(),Gl(147,`td`)(148,`td`),ag(),Tl(149,`tr`)(150,`td`)(151,`code`),cN(152,`--text-color-danger`),ag()(),Tl(153,`td`),cN(154,`Cor do texto no estado danger`),ag(),Tl(155,`td`)(156,`code`),cN(157,`var(--color-neutral-light-00)`),ag()()(),Tl(158,`tr`)(159,`td`)(160,`code`),cN(161,`--color-button-danger`),ag()(),Tl(162,`td`),cN(163,`Cor do botão no estado danger`),ag(),Tl(164,`td`)(165,`code`),cN(166,`var(--color-feedback-negative-dark)`),ag()()(),Tl(167,`tr`)(168,`td`)(169,`code`),cN(170,`--color-danger-hover`),ag()(),Tl(171,`td`),cN(172,`Cor de hover no estado danger`),ag(),Tl(173,`td`)(174,`code`),cN(175,`var(--color-feedback-negative-darker)`),ag()()(),Tl(176,`tr`)(177,`td`)(178,`code`),cN(179,`--color-danger-pressed`),ag()(),Tl(180,`td`),cN(181,`Cor pressionada no estado danger`),ag(),Tl(182,`td`)(183,`code`),cN(184,`var(--color-feedback-negative-darkest)`),ag()()(),Tl(185,`tr`)(186,`td`)(187,`code`),cN(188,`--background-danger-hover`),ag()(),Tl(189,`td`),cN(190,`Cor de background de hover no estado danger`),ag(),Tl(191,`td`)(192,`code`),cN(193,`var(--color-feedback-negative-lighter)`),ag()()(),Tl(194,`tr`)(195,`td`)(196,`code`),cN(197,`--border-color-danger-hover`),ag()(),Tl(198,`td`),cN(199,`Cor da borda de hover no estado danger`),ag(),Tl(200,`td`)(201,`code`),cN(202,`var(--color-feedback-negative-darkest)`),ag()()(),Tl(203,`tr`)(204,`td`)(205,`code`),cN(206,`--background-danger-pressed`),ag()(),Tl(207,`td`),cN(208,`Cor de background pressionado no estado danger`),ag(),Tl(209,`td`)(210,`code`),cN(211,`var(--color-feedback-negative-light)`),ag()()(),Tl(212,`tr`)(213,`td`)(214,`code`),cN(215,`--background-color-button-danger`),ag(),cN(216,`\xA0`),ag(),Tl(217,`td`),cN(218,`Cor de background do botão no estado danger`),ag(),Tl(219,`td`)(220,`code`),cN(221,`var(--color-transparent)`),ag()()(),Tl(222,`tr`)(223,`td`)(224,`strong`),cN(225,`Default Values`),ag()(),Gl(226,`td`)(227,`td`),ag(),Tl(228,`tr`)(229,`td`)(230,`code`),cN(231,`--text-color`),ag()(),Tl(232,`td`),cN(233,`Cor do texto`),ag(),Tl(234,`td`)(235,`code`),cN(236,`var(--color-neutral-light-00)`),ag()()(),Tl(237,`tr`)(238,`td`)(239,`code`),cN(240,`--color`),ag()(),Tl(241,`td`),cN(242,`Cor principal do botão`),ag(),Tl(243,`td`)(244,`code`),cN(245,`var(--color-action-default)`),ag()()(),Tl(246,`tr`)(247,`td`)(248,`code`),cN(249,`--background-color`),ag()(),Tl(250,`td`),cN(251,`Cor de background`),ag(),Tl(252,`td`)(253,`code`),cN(254,`var(--color-transparent)`),ag()()(),Tl(255,`tr`)(256,`td`)(257,`code`),cN(258,`--border-color`),ag()(),Tl(259,`td`),cN(260,`Cor da borda`),ag(),Tl(261,`td`)(262,`code`),cN(263,`var(--color-transparent)`),ag()()(),Tl(264,`tr`)(265,`td`)(266,`code`),cN(267,`--shadow`),ag()(),Tl(268,`td`),cN(269,`Contém o valor da sombra do elemento`),ag(),Tl(270,`td`)(271,`code`),cN(272,`var(--shadow-none)`),ag()()(),Tl(273,`tr`)(274,`td`)(275,`strong`),cN(276,`Hover`),ag()(),Gl(277,`td`)(278,`td`),ag(),Tl(279,`tr`)(280,`td`)(281,`code`),cN(282,`--color-hover`),ag()(),Tl(283,`td`),cN(284,`Cor principal no estado hover`),ag(),Tl(285,`td`)(286,`code`),cN(287,`var(--color-action-hover)`),ag()()(),Tl(288,`tr`)(289,`td`)(290,`code`),cN(291,`--background-hover`),ag()(),Tl(292,`td`),cN(293,`Cor de background no estado hover`),ag(),Tl(294,`td`)(295,`code`),cN(296,`var(--color-brand-01-lighter)`),ag()()(),Tl(297,`tr`)(298,`td`)(299,`code`),cN(300,`--border-color-hover`),ag()(),Tl(301,`td`),cN(302,`Cor da borda no estado hover`),ag(),Tl(303,`td`)(304,`code`),cN(305,`var(--color-brand-01-darkest)`),ag()()(),Tl(306,`tr`)(307,`td`)(308,`strong`),cN(309,`Focused`),ag()(),Gl(310,`td`)(311,`td`),ag(),Tl(312,`tr`)(313,`td`)(314,`code`),cN(315,`--outline-color-focused`),ag()(),Tl(316,`td`),cN(317,`Cor do outline do estado de focus`),ag(),Tl(318,`td`)(319,`code`),cN(320,`var(--color-action-focus)`),ag()()(),Tl(321,`tr`)(322,`td`)(323,`strong`),cN(324,`Pressed`),ag()(),Gl(325,`td`)(326,`td`),ag(),Tl(327,`tr`)(328,`td`)(329,`code`),cN(330,`--color-pressed`),ag()(),Tl(331,`td`),cN(332,`Cor principal no estado de pressionado`),ag(),Tl(333,`td`)(334,`code`),cN(335,`var(--color-action-pressed)`),ag()()(),Tl(336,`tr`)(337,`td`)(338,`code`),cN(339,`--background-pressed`),ag()(),Tl(340,`td`),cN(341,`Cor de background no estado de pressionado\xA0`),ag(),Tl(342,`td`)(343,`code`),cN(344,`var(--color-brand-01-light)`),ag()()(),Tl(345,`tr`)(346,`td`)(347,`strong`),cN(348,`Disabled`),ag()(),Gl(349,`td`)(350,`td`),ag(),Tl(351,`tr`)(352,`td`)(353,`code`),cN(354,`--text-color-disabled`),ag()(),Tl(355,`td`),cN(356,`Cor do texto no estado disabled`),ag(),Tl(357,`td`)(358,`code`),cN(359,`var(--color-neutral-dark-70)`),ag()()(),Tl(360,`tr`)(361,`td`)(362,`code`),cN(363,`--color-disabled`),ag()(),Tl(364,`td`),cN(365,`Cor principal no estado disabled`),ag(),Tl(366,`td`)(367,`code`),cN(368,`var(--color-action-disabled)`),ag()()(),Tl(369,`tr`)(370,`td`)(371,`code`),cN(372,`--background-color-disabled`),ag()(),Tl(373,`td`),cN(374,`Cor de background no estado disabled`),ag(),Tl(375,`td`)(376,`code`),cN(377,`var(--color-transparent)`),ag()()()()()(),Tl(378,`div`,9)(379,`h4`,10),cN(380,`Seletor`),ag(),Tl(381,`pre`,11),cN(382,`<po-button
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
`),ag()(),Tl(383,`h4`,12),cN(384,`Propriedades`),ag(),Tl(385,`table`,13)(386,`tr`,14)(387,`th`,15),cN(388,`Nome`),ag(),Tl(389,`th`,15),cN(390,`Tipo`),ag(),Tl(391,`th`,15),cN(392,`Padrão`),ag(),Tl(393,`th`,15),cN(394,`Descrição`),ag()(),Tl(395,`tr`,16)(396,`td`,17)(397,`div`,18)(398,`span`,19),cN(399,` p-aria-label`),Gl(400,`br`),ag()()(),Tl(401,`td`,20)(402,`code`,21),cN(403,`string`),ag()(),Tl(404,`td`,22),cN(405,`-`),ag(),Tl(406,`td`,23)(407,`em`)(408,`strong`),cN(409,`(opcional)`),ag()(),Tl(410,`p`),cN(411,`Define um `),Tl(412,`code`),cN(413,`aria-label`),ag(),cN(414,` para o `),Tl(415,`code`),cN(416,`po-button`),ag(),cN(417,`.`),ag(),Tl(418,`p`),cN(419,`Caso esta propriedade não seja informada será considerada a label do botão.`),ag(),Tl(420,`blockquote`)(421,`p`),cN(422,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),ag()()()(),Tl(423,`tr`,16)(424,`td`,17)(425,`div`,24)(426,`span`,25),cN(427,` (p-click)`),Gl(428,`br`),ag()()(),Tl(429,`td`,20)(430,`code`,26),cN(431,`EventEmitter`),ag()(),Tl(432,`td`,22),cN(433,`-`),ag(),Tl(434,`td`,23)(435,`p`),cN(436,`Ação que será executada quando o usuário clicar sobre o `),Tl(437,`code`),cN(438,`po-button`),ag(),cN(439,`.`),ag()()(),Tl(440,`tr`,16)(441,`td`,17)(442,`div`,18)(443,`span`,19),cN(444,` p-danger`),Gl(445,`br`),ag()()(),Tl(446,`td`,20)(447,`code`,27),cN(448,`boolean`),ag()(),Tl(449,`td`,22),cN(450,`-`),ag(),Tl(451,`td`,23)(452,`em`)(453,`strong`),cN(454,`(opcional)`),ag()(),Tl(455,`p`),cN(456,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),ag(),Tl(457,`blockquote`)(458,`p`),cN(459,`A propriedade `),Tl(460,`code`),cN(461,`p-kind="tertiary"`),ag(),cN(462,` será inativada ao utilizar esta propriedade.`),ag()()()(),Tl(463,`tr`,16)(464,`td`,17)(465,`div`,18)(466,`span`,19),cN(467,` p-disabled`),Gl(468,`br`),ag()()(),Tl(469,`td`,20)(470,`code`,27),cN(471,`boolean`),ag()(),Tl(472,`td`,22)(473,`p`)(474,`code`),cN(475,`false`),ag()()(),Tl(476,`td`,23)(477,`em`)(478,`strong`),cN(479,`(opcional)`),ag()(),Tl(480,`p`),cN(481,`Desabilita o `),Tl(482,`code`),cN(483,`po-button`),ag(),cN(484,` e não permite que o usuário interaja com o mesmo.`),ag()()(),Tl(485,`tr`,16)(486,`td`,17)(487,`div`,18)(488,`span`,19),cN(489,` p-icon`),Gl(490,`br`),ag()()(),Tl(491,`td`,20)(492,`code`,21),cN(493,`string `),ag(),Tl(494,`code`,28),cN(495,` TemplateRef<void>`),ag()(),Tl(496,`td`,22),cN(497,`-`),ag(),Tl(498,`td`,23)(499,`em`)(500,`strong`),cN(501,`(opcional)`),ag()(),Tl(502,`p`),cN(503,`Ícone exibido ao lado esquerdo do label do botão.`),ag(),Tl(504,`p`),cN(505,`É possível usar qualquer um dos ícones da `),Tl(506,`a`,29),cN(507,`Biblioteca de ícones`),ag(),cN(508,`, conforme exemplo:`),ag(),Tl(509,`pre`)(510,`code`),cN(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),ag()(),Tl(512,`p`),cN(513,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(514,`em`),cN(515,`Font Awesome`),ag(),cN(516,`, desde que a biblioteca
esteja carregada no projeto:`),ag(),Tl(517,`pre`)(518,`code`),cN(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),ag()(),Tl(520,`p`),cN(521,`Outra opção seria a customização do ícone através do `),Tl(522,`code`),cN(523,`TemplateRef`),ag(),cN(524,`, conforme exemplo abaixo:`),ag(),Tl(525,`pre`)(526,`code`),cN(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(528,`blockquote`)(529,`p`),cN(530,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(531,`code`),cN(532,`font-size: inherit`),ag(),cN(533,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(534,`tr`,16)(535,`td`,17)(536,`div`,18)(537,`span`,19),cN(538,` p-kind`),Gl(539,`br`),ag()()(),Tl(540,`td`,20)(541,`code`,21),cN(542,`string`),ag()(),Tl(543,`td`,22)(544,`p`)(545,`code`),cN(546,`secondary`),ag()()(),Tl(547,`td`,23)(548,`em`)(549,`strong`),cN(550,`(opcional)`),ag()(),Tl(551,`p`),cN(552,`Define o estilo visual do componente conforme valores especificados no enum `),Tl(553,`code`),cN(554,`PoButtonKind`),ag(),cN(555,`:`),ag(),Tl(556,`ul`)(557,`li`)(558,`code`),cN(559,`primary`),ag(),cN(560,`: destaca o botão, sendo recomendado para ações principais.`),ag(),Tl(561,`li`)(562,`code`),cN(563,`secondary`),ag(),cN(564,`: estilo padrão, ideal para ações secundárias.`),ag(),Tl(565,`li`)(566,`code`),cN(567,`tertiary`),ag(),cN(568,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),ag()()()(),Tl(569,`tr`,16)(570,`td`,17)(571,`div`,18)(572,`span`,19),cN(573,` p-label`),Gl(574,`br`),ag()()(),Tl(575,`td`,20)(576,`code`,21),cN(577,`string`),ag()(),Tl(578,`td`,22),cN(579,`-`),ag(),Tl(580,`td`,23)(581,`em`)(582,`strong`),cN(583,`(opcional)`),ag()(),Tl(584,`p`),cN(585,`Label do botão.`),ag()()(),Tl(586,`tr`,16)(587,`td`,17)(588,`div`,18)(589,`span`,19),cN(590,` p-loading`),Gl(591,`br`),ag()()(),Tl(592,`td`,20)(593,`code`,27),cN(594,`boolean`),ag()(),Tl(595,`td`,22)(596,`p`)(597,`code`),cN(598,`false`),ag()()(),Tl(599,`td`,23)(600,`em`)(601,`strong`),cN(602,`(opcional)`),ag()(),Tl(603,`p`),cN(604,`Exibe um ícone de carregamento à esquerda do `),Tl(605,`em`),cN(606,`label`),ag(),cN(607,` do botão.`),ag(),Tl(608,`blockquote`)(609,`p`),cN(610,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),ag()()()(),Tl(611,`tr`,16)(612,`td`,17)(613,`div`,18)(614,`span`,19),cN(615,` p-size`),Gl(616,`br`),ag()()(),Tl(617,`td`,20)(618,`code`,21),cN(619,`string`),ag()(),Tl(620,`td`,22)(621,`p`)(622,`code`),cN(623,`medium`),ag()()(),Tl(624,`td`,23)(625,`em`)(626,`strong`),cN(627,`(opcional)`),ag()(),Tl(628,`p`),cN(629,`Define o tamanho do componente:`),ag(),Tl(630,`ul`)(631,`li`)(632,`code`),cN(633,`small`),ag(),cN(634,`: altura de 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(635,`li`)(636,`code`),cN(637,`medium`),ag(),cN(638,`: altura de 44px.`),ag(),Tl(639,`li`)(640,`code`),cN(641,`large`),ag(),cN(642,`: altura de 56px.`),ag()(),Tl(643,`blockquote`)(644,`p`),cN(645,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(646,`code`),cN(647,`medium`),ag(),cN(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(649,`a`,30),cN(650,`po-theme`),ag(),cN(651,`.`),ag()()()(),Tl(652,`tr`,16)(653,`td`,17)(654,`div`,18)(655,`span`,19),cN(656,` p-tabindex`),Gl(657,`br`),ag()()(),Tl(658,`td`,20)(659,`code`,31),cN(660,`number `),ag(),Tl(661,`code`,21),cN(662,` string`),ag()(),Tl(663,`td`,22),cN(664,`-`),ag(),Tl(665,`td`,23)(666,`em`)(667,`strong`),cN(668,`(opcional)`),ag()(),Tl(669,`p`),cN(670,`Define o `),Tl(671,`code`),cN(672,`tabindex`),ag(),cN(673,` do elemento `),Tl(674,`code`),cN(675,`<button>`),ag(),cN(676,` nativo interno.`),ag(),Tl(677,`p`),cN(678,`Use `),Tl(679,`code`),cN(680,`[tabindex]="-1"`),ag(),cN(681,` para remover o botão da ordem de foco do teclado.`),ag()()(),Tl(682,`tr`,16)(683,`td`,17)(684,`div`,18)(685,`span`,19),cN(686,` p-type`),Gl(687,`br`),ag()()(),Tl(688,`td`,20)(689,`code`,32),cN(690,`PoButtonType`),ag()(),Tl(691,`td`,22)(692,`p`)(693,`code`),cN(694,`PoButtonType.Button`),ag()()(),Tl(695,`td`,23)(696,`em`)(697,`strong`),cN(698,`(opcional)`),ag()(),Tl(699,`p`),cN(700,`Define o tipo do botão.`),ag()()()(),Tl(701,`h3`,12),cN(702,`Métodos`),ag(),Tl(703,`table`,33)(704,`tr`,16)(705,`th`,34)(706,`div`,18)(707,`h4`)(708,`span`,19),cN(709,` focus `),ag()()()()(),Tl(710,`tr`,23)(711,`td`,23)(712,`p`),cN(713,`Função que atribui foco ao componente.`),ag(),Tl(714,`p`),cN(715,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(716,`pre`)(717,`code`),cN(718,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),ag()()()()(),Gl(719,`br`),Tl(720,`h3`),cN(721,`Enums`),ag(),Tl(722,`h4`,4)(723,`code`,5),cN(724,`PoButtonKind`),ag()(),Tl(725,`div`,2)(726,`p`),cN(727,`Estilos disponíveis do button.`),ag()(),Tl(728,`h4`,12),cN(729,`Propriedades`),ag(),Tl(730,`table`,13)(731,`tr`,14)(732,`th`,15),cN(733,`Nome`),ag(),Tl(734,`th`,15),cN(735,`Descrição`),ag()(),Tl(736,`tr`,16)(737,`td`,17)(738,`div`,18)(739,`span`,19),cN(740,` primary`),Gl(741,`br`),ag()()(),Tl(742,`td`,23)(743,`p`),cN(744,`Estilo primário, usado para ações principais que requerem maior destaque.`),ag()()(),Tl(745,`tr`,16)(746,`td`,17)(747,`div`,18)(748,`span`,19),cN(749,` secondary`),Gl(750,`br`),ag()()(),Tl(751,`td`,23)(752,`p`),cN(753,`Estilo secundário, usado como padrão, para ações comuns.`),ag()()(),Tl(754,`tr`,16)(755,`td`,17)(756,`div`,18)(757,`span`,19),cN(758,` tertiary`),Gl(759,`br`),ag()()(),Tl(760,`td`,23)(761,`p`),cN(762,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),ag()()()(),Tl(763,`h4`,4)(764,`code`,5),cN(765,`PoButtonType`),ag()(),Tl(766,`div`,2)(767,`p`),cN(768,`Enumeração que define os tipos possíveis para o `),Tl(769,`code`),cN(770,`PoButtonComponent`),ag(),cN(771,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),ag()(),Tl(772,`h4`,12),cN(773,`Propriedades`),ag(),Tl(774,`table`,13)(775,`tr`,14)(776,`th`,15),cN(777,`Nome`),ag(),Tl(778,`th`,15),cN(779,`Descrição`),ag()(),Tl(780,`tr`,16)(781,`td`,17)(782,`div`,18)(783,`span`,19),cN(784,` Submit`),Gl(785,`br`),ag()()(),Tl(786,`td`,23)(787,`p`),cN(788,`Define o botão como do tipo `),Tl(789,`code`),cN(790,`submit`),ag(),cN(791,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Tl(792,`code`),cN(793,`submit`),ag(),cN(794,`.`),ag()()(),Tl(795,`tr`,16)(796,`td`,17)(797,`div`,18)(798,`span`,19),cN(799,` Button`),Gl(800,`br`),ag()()(),Tl(801,`td`,23)(802,`p`),cN(803,`Define o botão como do tipo `),Tl(804,`code`),cN(805,`button`),ag(),cN(806,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),ag()()(),Tl(807,`tr`,16)(808,`td`,17)(809,`div`,18)(810,`span`,19),cN(811,` Reset`),Gl(812,`br`),ag()()(),Tl(813,`td`,23)(814,`p`),cN(815,`Define o botão como do tipo `),Tl(816,`code`),cN(817,`reset`),ag(),cN(818,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Button`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-button-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-button-basic-view`)(6,`sample-po-button-labs-view`)(7,`sample-po-button-social-network-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,se,ce,be,Ee],encapsulation:2,changeDetection:1})}return o})()}];var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[bL.forChild(Oe),bL]})}return o})();var mt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[ar,Se]})}return o})();export{mt as DocPoButtonModule};