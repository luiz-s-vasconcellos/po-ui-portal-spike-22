import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,U as L0e,Ui as l0,Ut as fu,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,ha as ww,ji as fo,k as Eu,l as ar,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,wt as Xve,yi as cN}from"./main-3EWTGE7T.js";var pe=(()=>{class i{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&Gl(0,`po-button-group`,0),a&2&&nw(`p-buttons`,o.buttons)},dependencies:[Xve],encapsulation:2,changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Group Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-basic',
  templateUrl: './sample-po-button-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupBasicComponent {
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) }
  ];

  action(button) {
    alert(\`\${button.label}\`);
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-group-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ce,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{poNotification=f(Eu);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:fu.None},{label:`single`,value:fu.Single},{label:`multiple`,value:fu.Multiple}];ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let c=Ax();Tl(0,`div`,2),Gl(1,`po-button-group`,3),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),ww(`ngModelChange`,function(s){return Ky(c),uN(o.button.label,s)||(o.button.label=s),Xy(s)}),ag(),a0(),Tl(7,`po-input`,5),ww(`ngModelChange`,function(s){return Ky(c),uN(o.button.action,s)||(o.button.action=s),Xy(s)}),ag(),a0(),Tl(8,`po-input`,6),ww(`ngModelChange`,function(s){return Ky(c),uN(o.button.tooltip,s)||(o.button.tooltip=s),Xy(s)}),ag(),a0(),Tl(9,`po-radio-group`,7),ww(`ngModelChange`,function(s){return Ky(c),uN(o.button.icon,s)||(o.button.icon=s),Xy(s)}),ag(),a0(),Tl(10,`po-switch`,8),ww(`ngModelChange`,function(s){return Ky(c),uN(o.button.disabled,s)||(o.button.disabled=s),Xy(s)}),ag(),a0(),ag(),Tl(11,`div`,2)(12,`po-button`,9),ht(`p-click`,function(){Ky(c);let s=Bx(4);return o.addButton(),Xy(s.reset())}),ag()()(),Gl(13,`po-divider`),Tl(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),ww(`ngModelChange`,function(s){return Ky(c),uN(o.toggle,s)||(o.toggle=s),Xy(s)}),ag(),a0(),Tl(18,`po-radio-group`,11),ww(`ngModelChange`,function(s){return Ky(c),uN(o.size,s)||(o.size=s),Xy(s)}),ag(),a0(),ag(),Tl(19,`div`,2)(20,`po-button`,12),ht(`p-click`,function(){Ky(c);let s=Bx(4);return Bx(15).reset(),s.reset(),Xy(o.restore())}),ag()()()}if(a&2){let c=Bx(4);jp(),nw(`p-buttons`,o.buttons)(`p-toggle`,o.toggle)(`p-size`,o.size),jp(5),Ew(`ngModel`,o.button.label),l0(),jp(),Ew(`ngModel`,o.button.action),l0(),jp(),Ew(`ngModel`,o.button.tooltip),l0(),jp(),Ew(`ngModel`,o.button.icon),nw(`p-options`,o.iconsOptions),l0(),jp(),Ew(`ngModel`,o.button.disabled),l0(),jp(2),nw(`p-disabled`,c.invalid),jp(5),Ew(`ngModel`,o.toggle),nw(`p-options`,o.toggleOptions),l0(),jp(),Ew(`ngModel`,o.size),nw(`p-options`,o.sizeOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xve,Xy$1,iU,L0e,fbe,j4],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Group Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="buttons" [p-toggle]="toggle" [p-size]="size"> </po-button-group>
</div>

<po-divider />

<form #fButtons="ngForm">
  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="buttonLabel" [(ngModel)]="button.label" p-label="Button label"> </po-input>

    <po-input
      class="po-lg-4 po-md-6"
      name="buttonAction"
      [(ngModel)]="button.action"
      p-label="Button action"
      p-required
    >
    </po-input>

    <po-input class="po-lg-4 po-md-6" name="buttonTooltip" [(ngModel)]="button.tooltip" p-label="Button tooltip">
    </po-input>

    <po-radio-group
      class="po-lg-12"
      name="buttonIcon"
      [(ngModel)]="button.icon"
      p-columns="4"
      p-label="Button Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-switch class="po-lg-4 po-md-6" name="buttonDisabled" [(ngModel)]="button.disabled" p-label="Button disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add button"
      [p-disabled]="fButtons.invalid"
      (p-click)="addButton(); fButtons.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select
      class="po-lg-4 po-md-6"
      name="toggle"
      [(ngModel)]="toggle"
      p-label="Toggle"
      [p-options]="toggleOptions"
    ></po-select>

    <po-radio-group
      class="po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); fButtons.reset(); restore()">
    </po-button>
  </div>
</form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoButtonGroupItem,
  PoButtonGroupToggle,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-labs',
  templateUrl: './sample-po-button-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  button: any;
  buttons: Array<PoButtonGroupItem>;
  size: string;
  toggle: PoButtonGroupToggle;

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
  ];

  ngOnInit() {
    this.restore();
  }

  action(button) {
    this.poNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled,
      tooltip: this.button.tooltip
    });

    this.button = {};
  }

  restore() {
    this.size = 'medium';
    this.button = {};
    this.buttons = [];
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-group-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Be,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poNotification=f(Eu);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(p){let a=this.randomPassword(),o=this.getTypeNotification(p.label);this.poNotification[o](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=``){switch(p){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`div`,1),cN(2,`Choose the type of attendance`),ag(),Tl(3,`div`,2),cN(4,`Get your password`),ag()(),Gl(5,`po-divider`),Tl(6,`div`,0),Gl(7,`po-button-group`,3),ag()),a&2&&(jp(7),nw(`p-buttons`,o.attendances))},dependencies:[Xve,Xy$1],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Group - Attendance`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-attendance',
  templateUrl: './sample-po-button-group-attendance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupAttendanceComponent {
  private poNotification = inject(PoNotificationService);

  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'an an-calendar-dots', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'an an-syringe', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'an an-flask', action: this.getPassword.bind(this) }
  ];

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.poNotification[typeNotification](\`
      Type of attendance: \${attendance.label} -
      Your password: \${password}
    \`);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-group-attendance`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(p){this.selectedWeekDay=p.selected?p.label:``}selectPeriod(p){this.selectedPeriod=p.selected?p.label:``}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(a,o){a&1&&(Tl(0,`div`,0),cN(1,`Opening Service Ticket`),ag(),Tl(2,`po-widget`)(3,`div`,1)(4,`div`,2),cN(5,`Day of the week`),ag(),Tl(6,`div`,3),Gl(7,`po-button-group`,4),ag(),Tl(8,`div`,3),Gl(9,`po-button-group`,4),ag(),Gl(10,`po-divider`),Tl(11,`div`,5)(12,`strong`),cN(13,`Selected day:`),ag(),cN(14),ag(),Tl(15,`div`,5)(16,`strong`),cN(17,`Selected period:`),ag(),cN(18),ag()()()),a&2&&(jp(7),nw(`p-buttons`,o.weekDays),jp(2),nw(`p-buttons`,o.periods),jp(5),hg(` `,o.selectedWeekDay||`None`),jp(4),hg(` `,o.selectedPeriod||`None`))},dependencies:[Xve,Xy$1,O8e],encapsulation:2})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Group - Opening Service Ticket`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

<po-widget>
  <div class="po-row">
    <div class="po-md-12 po-mb-1 po-font-text-bold">Day of the week</div>
    <div class="po-md-12 po-mb-3">
      <po-button-group p-toggle="single" [p-buttons]="weekDays"> </po-button-group>
    </div>

    <div class="po-md-12 po-mb-3">
      <po-button-group p-toggle="single" [p-buttons]="periods"> </po-button-group>
    </div>

    <po-divider></po-divider>

    <div class="po-md-12 po-font-text"><strong>Selected day:</strong> { { selectedWeekDay || 'None' }}</div>
    <div class="po-md-12 po-font-text"><strong>Selected period:</strong> { { selectedPeriod || 'None' }}</div>
  </div>
</po-widget>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-opening-service-ticket',
  templateUrl: './sample-po-button-group-opening-service-ticket.component.html',
  standalone: false
})
export class SamplePoButtonGroupOpeningServiceTicketComponent {
  selectedWeekDay: string = '';
  selectedPeriod: string = '';

  weekDays: Array<PoButtonGroupItem> = [
    { label: 'Mon', tooltip: 'Monday', action: this.selectWeekDay.bind(this) },
    { label: 'Tue', tooltip: 'Tuesday', action: this.selectWeekDay.bind(this) },
    { label: 'Wed', tooltip: 'Wednesday', action: this.selectWeekDay.bind(this) },
    { label: 'Thu', tooltip: 'Thursday', action: this.selectWeekDay.bind(this) },
    { label: 'Fri', tooltip: 'Friday', action: this.selectWeekDay.bind(this) }
  ];

  periods: Array<PoButtonGroupItem> = [
    { label: 'Morning', action: this.selectPeriod.bind(this) },
    { label: 'Afternoon', action: this.selectPeriod.bind(this) },
    { label: 'Evening', action: this.selectPeriod.bind(this) }
  ];

  selectWeekDay(button: PoButtonGroupItem): void {
    this.selectedWeekDay = button.selected ? button.label : '';
  }

  selectPeriod(button: PoButtonGroupItem): void {
    this.selectedPeriod = button.selected ? button.label : '';
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-group-opening-service-ticket`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(a,o){a&1&&(Tl(0,`div`,0),cN(1,`Create New Post`),ag(),Tl(2,`po-widget`)(3,`div`,1)(4,`div`,2),Gl(5,`po-button-group`,3),ag(),Tl(6,`div`,2),Gl(7,`po-button-group`,4),ag(),Tl(8,`po-textarea`,5),ww(`ngModelChange`,function(h){return uN(o.textArea,h)||(o.textArea=h),h}),ag(),a0(),Tl(9,`div`,6),cN(10),ag()()()),a&2&&(jp(5),nw(`p-buttons`,o.fontStyle),jp(2),nw(`p-buttons`,o.textAlign),jp(),Ew(`ngModel`,o.textArea),l0(),jp(),fo(`font-weight`,o.setBold?`bold`:`normal`)(`font-style`,o.setItalic?`italic`:`normal`)(`text-decoration`,o.setUnderline?`underline`:`none`)(`text-align`,o.setTextAlignment),jp(),hg(` `,o.textArea,` `))},dependencies:[gY,Ak,Xve,vbe,O8e],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Button Group - Post`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-font-title po-mb-2">Create New Post</div>
<po-widget>
  <div class="po-row">
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="multiple" [p-buttons]="fontStyle"> </po-button-group>
    </div>
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="single" [p-buttons]="textAlign"> </po-button-group>
    </div>
    <po-textarea class="po-md-12" name="textArea" [(ngModel)]="textArea" p-maxlength="400"> </po-textarea>

    <div
      class="po-md-12 po-mt-3 po-font-text-large"
      [style.font-weight]="setBold ? 'bold' : 'normal'"
      [style.font-style]="setItalic ? 'italic' : 'normal'"
      [style.text-decoration]="setUnderline ? 'underline' : 'none'"
      [style.text-align]="setTextAlignment"
    >
      { { textArea }}
    </div>
  </div>
</po-widget>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-post',
  templateUrl: './sample-po-button-group-post.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupPostComponent {
  setBold: boolean;
  setItalic: boolean;
  setTextAlignment: string;
  setUnderline: boolean;
  textArea: string = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';

  fontStyle: Array<PoButtonGroupItem> = [
    { icon: 'an an-text-b', action: () => (this.setBold = !this.setBold), tooltip: 'Bold' },
    { icon: 'an an-text-italic', action: () => (this.setItalic = !this.setItalic), tooltip: 'Italic' },
    { icon: 'an an-text-underline', action: () => (this.setUnderline = !this.setUnderline), tooltip: 'Underline' }
  ];

  textAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'an an-text-align-left',
      selected: true,
      action: () => (this.setTextAlignment = 'left'),
      tooltip: 'Left align'
    },
    { icon: 'an an-text-align-center', action: () => (this.setTextAlignment = 'center'), tooltip: 'Center align' },
    { icon: 'an an-text-align-right', action: () => (this.setTextAlignment = 'right'), tooltip: 'Right align' },
    { icon: 'an an-text-align-justify', action: () => (this.setTextAlignment = 'justify'), tooltip: 'Justify' }
  ];
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-button-group-post`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ie,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(a,o){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-button-group.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoButtonGroupComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-button-group`),ag(),cN(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),ag(),Tl(18,`p`),cN(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),ag(),Tl(20,`p`),cN(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),ag(),Tl(22,`h4`),cN(23,`Boas práticas`),ag(),Tl(24,`ul`)(25,`li`),cN(26,`Evite usar o `),Tl(27,`code`),cN(28,`po-button-group`),ag(),cN(29,` com apenas 1 ação, para isso utilize o `),Tl(30,`code`),cN(31,`po-button`),ag(),cN(32,`.`),ag(),Tl(33,`li`),cN(34,`Procure utilizar no máximo 3 ações para cada `),Tl(35,`code`),cN(36,`po-button-group`),ag(),cN(37,`.`),ag()(),Tl(38,`blockquote`)(39,`p`),cN(40,`As recomendações do `),Tl(41,`code`),cN(42,`po-button`),ag(),cN(43,` também valem para o `),Tl(44,`code`),cN(45,`po-button-group`),ag(),cN(46,`.`),ag()(),Tl(47,`h4`),cN(48,`Tokens customizáveis`),ag(),Tl(49,`p`),cN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(51,`blockquote`)(52,`p`),cN(53,`Para maiores informações, acesse o guia `),Tl(54,`a`,6),cN(55,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(56,`.`),ag()(),Tl(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),cN(61,`Propriedade`),ag(),Tl(62,`th`),cN(63,`Descrição`),ag(),Tl(64,`th`),cN(65,`Valor Padrão`),ag()()(),Tl(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),cN(70,`Default Values`),ag()(),Gl(71,`td`)(72,`td`),ag(),Tl(73,`tr`)(74,`td`)(75,`code`),cN(76,`--font-family`),ag()(),Tl(77,`td`),cN(78,`Família tipográfica usada`),ag(),Tl(79,`td`)(80,`code`),cN(81,`var(--font-family-theme)`),ag()()(),Tl(82,`tr`)(83,`td`)(84,`code`),cN(85,`--font-size`),ag()(),Tl(86,`td`),cN(87,`Tamanho da fonte`),ag(),Tl(88,`td`)(89,`code`),cN(90,`var(--font-size-default)`),ag()()(),Tl(91,`tr`)(92,`td`)(93,`code`),cN(94,`--font-weight`),ag()(),Tl(95,`td`),cN(96,`Peso da fonte`),ag(),Tl(97,`td`)(98,`code`),cN(99,`var(--font-weight-bold)`),ag()()(),Tl(100,`tr`)(101,`td`)(102,`code`),cN(103,`--line-height`),ag()(),Tl(104,`td`),cN(105,`Tamanho da label`),ag(),Tl(106,`td`)(107,`code`),cN(108,`var(--line-height-none)`),ag()()(),Tl(109,`tr`)(110,`td`)(111,`code`),cN(112,`--border-radius`),ag()(),Tl(113,`td`),cN(114,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(115,`td`)(116,`code`),cN(117,`var(--border-radius-md)`),ag()()(),Tl(118,`tr`)(119,`td`)(120,`code`),cN(121,`--border-width`),ag()(),Tl(122,`td`),cN(123,`Contém o valor da largura dos cantos do elemento\xA0`),ag(),Tl(124,`td`)(125,`code`),cN(126,`var(--border-width-md)`),ag()()(),Tl(127,`tr`)(128,`td`)(129,`code`),cN(130,`--padding`),ag()(),Tl(131,`td`),cN(132,`Preenchimento`),ag(),Tl(133,`td`)(134,`code`),cN(135,`0 1em`),ag()()(),Tl(136,`tr`)(137,`td`)(138,`code`),cN(139,`--text-color`),ag()(),Tl(140,`td`),cN(141,`Cor do texto`),ag(),Tl(142,`td`)(143,`code`),cN(144,`var(--color-neutral-light-00)`),ag()()(),Tl(145,`tr`)(146,`td`)(147,`code`),cN(148,`--color`),ag()(),Tl(149,`td`),cN(150,`Cor principal do botão`),ag(),Tl(151,`td`)(152,`code`),cN(153,`var(--color-action-default)`),ag()()(),Tl(154,`tr`)(155,`td`)(156,`code`),cN(157,`--background-color`),ag()(),Tl(158,`td`),cN(159,`Cor de background`),ag(),Tl(160,`td`)(161,`code`),cN(162,`var(--color-transparent)`),ag()()(),Tl(163,`tr`)(164,`td`)(165,`code`),cN(166,`--shadow`),ag()(),Tl(167,`td`),cN(168,`Contém o valor da sombra do elemento`),ag(),Tl(169,`td`)(170,`code`),cN(171,`var(--shadow-none)`),ag()()(),Tl(172,`tr`)(173,`td`)(174,`strong`),cN(175,`Hover`),ag()(),Gl(176,`td`)(177,`td`),ag(),Tl(178,`tr`)(179,`td`)(180,`code`),cN(181,`--color-hover`),ag()(),Tl(182,`td`),cN(183,`Cor principal no estado hover`),ag(),Tl(184,`td`)(185,`code`),cN(186,`var(--color-action-hover)`),ag()()(),Tl(187,`tr`)(188,`td`)(189,`code`),cN(190,`--background-hover`),ag()(),Tl(191,`td`),cN(192,`Cor de background no estado hover`),ag(),Tl(193,`td`)(194,`code`),cN(195,`var(--color-brand-01-lighter)`),ag()()(),Tl(196,`tr`)(197,`td`)(198,`code`),cN(199,`--border-color-hover`),ag()(),Tl(200,`td`),cN(201,`Cor da borda no estado hover`),ag(),Tl(202,`td`)(203,`code`),cN(204,`var(--color-brand-01-darkest)`),ag()()(),Tl(205,`tr`)(206,`td`)(207,`strong`),cN(208,`Focused`),ag()(),Gl(209,`td`)(210,`td`),ag(),Tl(211,`tr`)(212,`td`)(213,`code`),cN(214,`--outline-color-focused`),ag()(),Tl(215,`td`),cN(216,`Cor do outline do estado de focus`),ag(),Tl(217,`td`)(218,`code`),cN(219,`var(--color-action-focus)`),ag()()(),Tl(220,`tr`)(221,`td`)(222,`strong`),cN(223,`Pressed`),ag()(),Gl(224,`td`)(225,`td`),ag(),Tl(226,`tr`)(227,`td`)(228,`code`),cN(229,`--color-pressed`),ag()(),Tl(230,`td`),cN(231,`Cor principal no estado de pressionado`),ag(),Tl(232,`td`)(233,`code`),cN(234,`var(--color-action-pressed)`),ag()()(),Tl(235,`tr`)(236,`td`)(237,`code`),cN(238,`--background-pressed`),ag()(),Tl(239,`td`),cN(240,`Cor de background no estado de pressionado\xA0`),ag(),Tl(241,`td`)(242,`code`),cN(243,`var(--color-brand-01-light)`),ag()()(),Tl(244,`tr`)(245,`td`)(246,`strong`),cN(247,`Disabled`),ag()(),Gl(248,`td`)(249,`td`),ag(),Tl(250,`tr`)(251,`td`)(252,`code`),cN(253,`--color-disabled`),ag()(),Tl(254,`td`),cN(255,`Cor principal no estado disabled`),ag(),Tl(256,`td`)(257,`code`),cN(258,`var(--color-action-disabled)`),ag()()(),Tl(259,`tr`)(260,`td`)(261,`code`),cN(262,`--background-color-disabled`),ag(),cN(263,` \xA0`),ag(),Tl(264,`td`),cN(265,`Cor de background no estado disabled`),ag(),Tl(266,`td`)(267,`code`),cN(268,`var(--color-transparent)`),ag()()()()()(),Tl(269,`div`,7)(270,`h4`,8),cN(271,`Seletor`),ag(),Tl(272,`pre`,9),cN(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),ag()(),Tl(274,`h4`,10),cN(275,`Propriedades`),ag(),Tl(276,`table`,11)(277,`tr`,12)(278,`th`,13),cN(279,`Nome`),ag(),Tl(280,`th`,13),cN(281,`Tipo`),ag(),Tl(282,`th`,13),cN(283,`Padrão`),ag(),Tl(284,`th`,13),cN(285,`Descrição`),ag()(),Tl(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),cN(290,` p-buttons`),Gl(291,`br`),ag()()(),Tl(292,`td`,18)(293,`code`,19),cN(294,`Array<PoButtonGroupItem>`),ag()(),Tl(295,`td`,20),cN(296,`-`),ag(),Tl(297,`td`,21)(298,`p`),cN(299,`Lista de botões.`),ag()()(),Tl(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),cN(304,` p-size`),Gl(305,`br`),ag()()(),Tl(306,`td`,18)(307,`code`,22),cN(308,`string`),ag()(),Tl(309,`td`,20)(310,`p`)(311,`code`),cN(312,`medium`),ag()()(),Tl(313,`td`,21)(314,`em`)(315,`strong`),cN(316,`(opcional)`),ag()(),Tl(317,`p`),cN(318,`Define o tamanho do componente:`),ag(),Tl(319,`ul`)(320,`li`)(321,`code`),cN(322,`small`),ag(),cN(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(324,`li`)(325,`code`),cN(326,`medium`),ag(),cN(327,`: altura de 44px.`),ag()(),Tl(328,`blockquote`)(329,`p`),cN(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(331,`code`),cN(332,`medium`),ag(),cN(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(334,`a`,23),cN(335,`po-theme`),ag(),cN(336,`.`),ag()()()(),Tl(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),cN(341,` p-toggle`),Gl(342,`br`),ag()()(),Tl(343,`td`,18)(344,`code`,22),cN(345,`string`),ag()(),Tl(346,`td`,20)(347,`p`)(348,`code`),cN(349,`none`),ag()()(),Tl(350,`td`,21)(351,`em`)(352,`strong`),cN(353,`(opcional)`),ag()(),Tl(354,`p`),cN(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),Tl(356,`code`),cN(357,`PoButtonGroupToggle`),ag(),cN(358,`:`),ag(),Tl(359,`ul`)(360,`li`)(361,`code`),cN(362,`multiple`),ag(),cN(363,`: permite múltiplas seleções.`),ag(),Tl(364,`li`)(365,`code`),cN(366,`none`),ag(),cN(367,`: desativa a funcionalidade de seleção.`),ag(),Tl(368,`li`)(369,`code`),cN(370,`single`),ag(),cN(371,`: restringe a seleção a um único botão.`),ag()()()()(),Tl(372,`h3`),cN(373,`Interfaces`),ag(),Tl(374,`h4`,24)(375,`code`,5),cN(376,`PoButtonGroupItem`),ag()(),Tl(377,`div`,2)(378,`p`),cN(379,`Interface para os itens do `),Tl(380,`code`),cN(381,`po-button-group`),ag(),cN(382,`.`),ag()(),Tl(383,`h4`,10),cN(384,`Propriedades`),ag(),Tl(385,`table`,11)(386,`tr`,12)(387,`th`,13),cN(388,`Nome`),ag(),Tl(389,`th`,13),cN(390,`Tipo`),ag(),Tl(391,`th`,13),cN(392,`Descrição`),ag()(),Tl(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),cN(397,` action`),Gl(398,`br`),ag()()(),Tl(399,`td`,18)(400,`code`,25),cN(401,`Function`),ag()(),Tl(402,`td`,21)(403,`p`),cN(404,`Ação executada ao clicar sobre o botão.`),ag()()(),Tl(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),cN(409,` disabled`),Gl(410,`br`),ag()()(),Tl(411,`td`,18)(412,`code`,26),cN(413,`boolean`),ag()(),Tl(414,`td`,21)(415,`em`)(416,`strong`),cN(417,`(opcional)`),ag()(),Tl(418,`p`),cN(419,`Se verdadeiro, define o botão como desabilitado.`),ag(),Tl(420,`blockquote`)(421,`p`),cN(422,`Por padrão esta propriedade é `),Tl(423,`code`),cN(424,`false`),ag(),cN(425,`.`),ag()()()(),Tl(426,`tr`,14)(427,`td`,15)(428,`div`,16)(429,`span`,17),cN(430,` icon`),Gl(431,`br`),ag()()(),Tl(432,`td`,18)(433,`code`,22),cN(434,`string `),ag(),Tl(435,`code`,27),cN(436,` TemplateRef<void>`),ag()(),Tl(437,`td`,21)(438,`em`)(439,`strong`),cN(440,`(opcional)`),ag()(),Tl(441,`p`),cN(442,`Ícone exibido ao lado esquerdo do label do botão.`),ag(),Tl(443,`p`),cN(444,`É possível usar qualquer um dos ícones da `),Tl(445,`a`,28),cN(446,`Biblioteca de ícones`),ag(),cN(447,`. conforme exemplo abaixo:`),ag(),Tl(448,`pre`)(449,`code`),cN(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),ag()(),Tl(451,`p`),cN(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(453,`em`),cN(454,`Font Awesome`),ag(),cN(455,`, da seguinte forma:`),ag(),Tl(456,`pre`)(457,`code`),cN(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),ag()(),Tl(459,`p`),cN(460,`Outra opção seria a customização do ícone através do `),Tl(461,`code`),cN(462,`TemplateRef`),ag(),cN(463,`, conforme exemplo abaixo:`),ag(),Tl(464,`p`),cN(465,`component.html:`),ag(),Tl(466,`pre`)(467,`code`),cN(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(469,`p`),cN(470,`component.ts:`),ag(),Tl(471,`pre`)(472,`code`),cN(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),ag()(),Tl(474,`blockquote`)(475,`p`),cN(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(477,`code`),cN(478,`font-size: inherit`),ag(),cN(479,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(480,`tr`,14)(481,`td`,15)(482,`div`,16)(483,`span`,17),cN(484,` label`),Gl(485,`br`),ag()()(),Tl(486,`td`,18)(487,`code`,22),cN(488,`string`),ag()(),Tl(489,`td`,21)(490,`em`)(491,`strong`),cN(492,`(opcional)`),ag()(),Tl(493,`p`),cN(494,`Label do botão.`),ag()()(),Tl(495,`tr`,14)(496,`td`,15)(497,`div`,16)(498,`span`,17),cN(499,` selected`),Gl(500,`br`),ag()()(),Tl(501,`td`,18)(502,`code`,26),cN(503,`boolean`),ag()(),Tl(504,`td`,21)(505,`em`)(506,`strong`),cN(507,`(opcional)`),ag()(),Tl(508,`p`),cN(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),Tl(510,`code`),cN(511,`p-toggle`),ag(),cN(512,`.`),ag()()(),Tl(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),cN(517,` tooltip`),Gl(518,`br`),ag()()(),Tl(519,`td`,18)(520,`code`,22),cN(521,`string`),ag()(),Tl(522,`td`,21)(523,`em`)(524,`strong`),cN(525,`(opcional)`),ag()(),Tl(526,`p`),cN(527,`Define a mensagem a ser exibida ao posicionar o `),Tl(528,`em`),cN(529,`mouse`),ag(),cN(530,` sobre o botão.`),ag()()()(),Tl(531,`h3`),cN(532,`Enums`),ag(),Tl(533,`h4`,4)(534,`code`,5),cN(535,`PoButtonGroupToggle`),ag()(),Tl(536,`div`,2)(537,`p`),cN(538,`Tipos de seleção (`),Tl(539,`code`),cN(540,`p-toggle`),ag(),cN(541,`) disponíveis para o componente.`),ag()(),Tl(542,`h4`,10),cN(543,`Propriedades`),ag(),Tl(544,`table`,11)(545,`tr`,12)(546,`th`,13),cN(547,`Nome`),ag(),Tl(548,`th`,13),cN(549,`Descrição`),ag()(),Tl(550,`tr`,14)(551,`td`,15)(552,`div`,16)(553,`span`,17),cN(554,` Multiple`),Gl(555,`br`),ag()()(),Tl(556,`td`,21)(557,`p`),cN(558,`Seleção múltipla.`),ag()()(),Tl(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),cN(563,` None`),Gl(564,`br`),ag()()(),Tl(565,`td`,21)(566,`p`),cN(567,`Seleção desabilitada.`),ag()()(),Tl(568,`tr`,14)(569,`td`,15)(570,`div`,16)(571,`span`,17),cN(572,` Single`),Gl(573,`br`),ag()()(),Tl(574,`td`,21)(575,`p`),cN(576,`Seleção única.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var We=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Button Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-button-group-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-button-group-basic-view`)(6,`sample-po-button-group-labs-view`)(7,`sample-po-button-group-attendance-view`)(8,`sample-po-button-group-opening-service-ticket-view`)(9,`sample-po-button-group-post-view`),ag()()()),a&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,re,de,ce,ge,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[bL.forChild(We),bL]})}return i})();var Pt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,Ee]})}return i})();export{Pt as DocPoButtonGroupModule};