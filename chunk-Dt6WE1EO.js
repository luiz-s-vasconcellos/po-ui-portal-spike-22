import{$i as pt,At as Yee,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,O as Cu,Qi as po,Qn as C9,Sa as zO,Vt as doe,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,bi as f,br as Jv,ca as ue$1,ci as b9,ct as Ou,di as cE,dr as Hn,fn as ni,gn as poe,i as _a,in as kte,k as D4,ki as he$1,kn as v4,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ua as ug,wr as Kc,zi as kL}from"./main-FUFQFMHQ.js";var pe=(()=>{class i{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&Kc(0,`po-button-group`,0),a&2&&cE(`p-buttons`,o.buttons)},dependencies:[Yee],encapsulation:2,changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Button Group Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-button-group-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ce,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,pe],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{poNotification=f(Ou);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:Cu.None},{label:`single`,value:Cu.Single},{label:`multiple`,value:Cu.Multiple}];ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let c=Bx();Ac(0,`div`,2),Kc(1,`po-button-group`,3),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),RE(`ngModelChange`,function(s){return Jv(c),DN(o.button.label,s)||(o.button.label=s),e_(s)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(s){return Jv(c),DN(o.button.action,s)||(o.button.action=s),e_(s)}),ug(),p0(),Ac(8,`po-input`,6),RE(`ngModelChange`,function(s){return Jv(c),DN(o.button.tooltip,s)||(o.button.tooltip=s),e_(s)}),ug(),p0(),Ac(9,`po-radio-group`,7),RE(`ngModelChange`,function(s){return Jv(c),DN(o.button.icon,s)||(o.button.icon=s),e_(s)}),ug(),p0(),Ac(10,`po-switch`,8),RE(`ngModelChange`,function(s){return Jv(c),DN(o.button.disabled,s)||(o.button.disabled=s),e_(s)}),ug(),p0(),ug(),Ac(11,`div`,2)(12,`po-button`,9),pt(`p-click`,function(){Jv(c);let s=Zx(4);return o.addButton(),e_(s.reset())}),ug()()(),Kc(13,`po-divider`),Ac(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),RE(`ngModelChange`,function(s){return Jv(c),DN(o.toggle,s)||(o.toggle=s),e_(s)}),ug(),p0(),Ac(18,`po-radio-group`,11),RE(`ngModelChange`,function(s){return Jv(c),DN(o.size,s)||(o.size=s),e_(s)}),ug(),p0(),ug(),Ac(19,`div`,2)(20,`po-button`,12),pt(`p-click`,function(){Jv(c);let s=Zx(4);return Zx(15).reset(),s.reset(),e_(o.restore())}),ug()()()}if(a&2){let c=Zx(4);Hp(),cE(`p-buttons`,o.buttons)(`p-toggle`,o.toggle)(`p-size`,o.size),Hp(5),TE(`ngModel`,o.button.label),m0(),Hp(),TE(`ngModel`,o.button.action),m0(),Hp(),TE(`ngModel`,o.button.tooltip),m0(),Hp(),TE(`ngModel`,o.button.icon),cE(`p-options`,o.iconsOptions),m0(),Hp(),TE(`ngModel`,o.button.disabled),m0(),Hp(2),cE(`p-disabled`,c.invalid),Hp(5),TE(`ngModel`,o.toggle),cE(`p-options`,o.toggleOptions),m0(),Hp(),TE(`ngModel`,o.size),cE(`p-options`,o.sizeOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Yee,Ef,D4,kte,poe,v4],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Button Group Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-button-group-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Be,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,se],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poNotification=f(Ou);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(p){let a=this.randomPassword(),o=this.getTypeNotification(p.label);this.poNotification[o](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=``){switch(p){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`div`,1),vN(2,`Choose the type of attendance`),ug(),Ac(3,`div`,2),vN(4,`Get your password`),ug()(),Kc(5,`po-divider`),Ac(6,`div`,0),Kc(7,`po-button-group`,3),ug()),a&2&&(Hp(7),cE(`p-buttons`,o.attendances))},dependencies:[Yee,Ef],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Button Group - Attendance`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-button-group-attendance`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(p){this.selectedWeekDay=p.selected?p.label:``}selectPeriod(p){this.selectedPeriod=p.selected?p.label:``}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(a,o){a&1&&(Ac(0,`div`,0),vN(1,`Opening Service Ticket`),ug(),Ac(2,`po-widget`)(3,`div`,1)(4,`div`,2),vN(5,`Day of the week`),ug(),Ac(6,`div`,3),Kc(7,`po-button-group`,4),ug(),Ac(8,`div`,3),Kc(9,`po-button-group`,4),ug(),Kc(10,`po-divider`),Ac(11,`div`,5)(12,`strong`),vN(13,`Selected day:`),ug(),vN(14),ug(),Ac(15,`div`,5)(16,`strong`),vN(17,`Selected period:`),ug(),vN(18),ug()()()),a&2&&(Hp(7),cE(`p-buttons`,o.weekDays),Hp(2),cE(`p-buttons`,o.periods),Hp(5),mg(` `,o.selectedWeekDay||`None`),Hp(4),mg(` `,o.selectedPeriod||`None`))},dependencies:[Yee,Ef,Ooe],encapsulation:2})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Button Group - Opening Service Ticket`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-button-group-opening-service-ticket`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(a,o){a&1&&(Ac(0,`div`,0),vN(1,`Create New Post`),ug(),Ac(2,`po-widget`)(3,`div`,1)(4,`div`,2),Kc(5,`po-button-group`,3),ug(),Ac(6,`div`,2),Kc(7,`po-button-group`,4),ug(),Ac(8,`po-textarea`,5),RE(`ngModelChange`,function(h){return DN(o.textArea,h)||(o.textArea=h),h}),ug(),p0(),Ac(9,`div`,6),vN(10),ug()()()),a&2&&(Hp(5),cE(`p-buttons`,o.fontStyle),Hp(2),cE(`p-buttons`,o.textAlign),Hp(),TE(`ngModel`,o.textArea),m0(),Hp(),po(`font-weight`,o.setBold?`bold`:`normal`)(`font-style`,o.setItalic?`italic`:`normal`)(`text-decoration`,o.setUnderline?`underline`:`none`)(`text-align`,o.setTextAlignment),Hp(),mg(` `,o.textArea,` `))},dependencies:[D9,BP,Yee,doe,Ooe],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Button Group - Post`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-button-group-post`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ie,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(a,o){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-button-group.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoButtonGroupComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-button-group`),ug(),vN(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),ug(),Ac(18,`p`),vN(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),ug(),Ac(20,`p`),vN(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),ug(),Ac(22,`h4`),vN(23,`Boas práticas`),ug(),Ac(24,`ul`)(25,`li`),vN(26,`Evite usar o `),Ac(27,`code`),vN(28,`po-button-group`),ug(),vN(29,` com apenas 1 ação, para isso utilize o `),Ac(30,`code`),vN(31,`po-button`),ug(),vN(32,`.`),ug(),Ac(33,`li`),vN(34,`Procure utilizar no máximo 3 ações para cada `),Ac(35,`code`),vN(36,`po-button-group`),ug(),vN(37,`.`),ug()(),Ac(38,`blockquote`)(39,`p`),vN(40,`As recomendações do `),Ac(41,`code`),vN(42,`po-button`),ug(),vN(43,` também valem para o `),Ac(44,`code`),vN(45,`po-button-group`),ug(),vN(46,`.`),ug()(),Ac(47,`h4`),vN(48,`Tokens customizáveis`),ug(),Ac(49,`p`),vN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(51,`blockquote`)(52,`p`),vN(53,`Para maiores informações, acesse o guia `),Ac(54,`a`,6),vN(55,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(56,`.`),ug()(),Ac(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),vN(61,`Propriedade`),ug(),Ac(62,`th`),vN(63,`Descrição`),ug(),Ac(64,`th`),vN(65,`Valor Padrão`),ug()()(),Ac(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),vN(70,`Default Values`),ug()(),Kc(71,`td`)(72,`td`),ug(),Ac(73,`tr`)(74,`td`)(75,`code`),vN(76,`--font-family`),ug()(),Ac(77,`td`),vN(78,`Família tipográfica usada`),ug(),Ac(79,`td`)(80,`code`),vN(81,`var(--font-family-theme)`),ug()()(),Ac(82,`tr`)(83,`td`)(84,`code`),vN(85,`--font-size`),ug()(),Ac(86,`td`),vN(87,`Tamanho da fonte`),ug(),Ac(88,`td`)(89,`code`),vN(90,`var(--font-size-default)`),ug()()(),Ac(91,`tr`)(92,`td`)(93,`code`),vN(94,`--font-weight`),ug()(),Ac(95,`td`),vN(96,`Peso da fonte`),ug(),Ac(97,`td`)(98,`code`),vN(99,`var(--font-weight-bold)`),ug()()(),Ac(100,`tr`)(101,`td`)(102,`code`),vN(103,`--line-height`),ug()(),Ac(104,`td`),vN(105,`Tamanho da label`),ug(),Ac(106,`td`)(107,`code`),vN(108,`var(--line-height-none)`),ug()()(),Ac(109,`tr`)(110,`td`)(111,`code`),vN(112,`--border-radius`),ug()(),Ac(113,`td`),vN(114,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(115,`td`)(116,`code`),vN(117,`var(--border-radius-md)`),ug()()(),Ac(118,`tr`)(119,`td`)(120,`code`),vN(121,`--border-width`),ug()(),Ac(122,`td`),vN(123,`Contém o valor da largura dos cantos do elemento\xA0`),ug(),Ac(124,`td`)(125,`code`),vN(126,`var(--border-width-md)`),ug()()(),Ac(127,`tr`)(128,`td`)(129,`code`),vN(130,`--padding`),ug()(),Ac(131,`td`),vN(132,`Preenchimento`),ug(),Ac(133,`td`)(134,`code`),vN(135,`0 1em`),ug()()(),Ac(136,`tr`)(137,`td`)(138,`code`),vN(139,`--text-color`),ug()(),Ac(140,`td`),vN(141,`Cor do texto`),ug(),Ac(142,`td`)(143,`code`),vN(144,`var(--color-neutral-light-00)`),ug()()(),Ac(145,`tr`)(146,`td`)(147,`code`),vN(148,`--color`),ug()(),Ac(149,`td`),vN(150,`Cor principal do botão`),ug(),Ac(151,`td`)(152,`code`),vN(153,`var(--color-action-default)`),ug()()(),Ac(154,`tr`)(155,`td`)(156,`code`),vN(157,`--background-color`),ug()(),Ac(158,`td`),vN(159,`Cor de background`),ug(),Ac(160,`td`)(161,`code`),vN(162,`var(--color-transparent)`),ug()()(),Ac(163,`tr`)(164,`td`)(165,`code`),vN(166,`--shadow`),ug()(),Ac(167,`td`),vN(168,`Contém o valor da sombra do elemento`),ug(),Ac(169,`td`)(170,`code`),vN(171,`var(--shadow-none)`),ug()()(),Ac(172,`tr`)(173,`td`)(174,`strong`),vN(175,`Hover`),ug()(),Kc(176,`td`)(177,`td`),ug(),Ac(178,`tr`)(179,`td`)(180,`code`),vN(181,`--color-hover`),ug()(),Ac(182,`td`),vN(183,`Cor principal no estado hover`),ug(),Ac(184,`td`)(185,`code`),vN(186,`var(--color-action-hover)`),ug()()(),Ac(187,`tr`)(188,`td`)(189,`code`),vN(190,`--background-hover`),ug()(),Ac(191,`td`),vN(192,`Cor de background no estado hover`),ug(),Ac(193,`td`)(194,`code`),vN(195,`var(--color-brand-01-lighter)`),ug()()(),Ac(196,`tr`)(197,`td`)(198,`code`),vN(199,`--border-color-hover`),ug()(),Ac(200,`td`),vN(201,`Cor da borda no estado hover`),ug(),Ac(202,`td`)(203,`code`),vN(204,`var(--color-brand-01-darkest)`),ug()()(),Ac(205,`tr`)(206,`td`)(207,`strong`),vN(208,`Focused`),ug()(),Kc(209,`td`)(210,`td`),ug(),Ac(211,`tr`)(212,`td`)(213,`code`),vN(214,`--outline-color-focused`),ug()(),Ac(215,`td`),vN(216,`Cor do outline do estado de focus`),ug(),Ac(217,`td`)(218,`code`),vN(219,`var(--color-action-focus)`),ug()()(),Ac(220,`tr`)(221,`td`)(222,`strong`),vN(223,`Pressed`),ug()(),Kc(224,`td`)(225,`td`),ug(),Ac(226,`tr`)(227,`td`)(228,`code`),vN(229,`--color-pressed`),ug()(),Ac(230,`td`),vN(231,`Cor principal no estado de pressionado`),ug(),Ac(232,`td`)(233,`code`),vN(234,`var(--color-action-pressed)`),ug()()(),Ac(235,`tr`)(236,`td`)(237,`code`),vN(238,`--background-pressed`),ug()(),Ac(239,`td`),vN(240,`Cor de background no estado de pressionado\xA0`),ug(),Ac(241,`td`)(242,`code`),vN(243,`var(--color-brand-01-light)`),ug()()(),Ac(244,`tr`)(245,`td`)(246,`strong`),vN(247,`Disabled`),ug()(),Kc(248,`td`)(249,`td`),ug(),Ac(250,`tr`)(251,`td`)(252,`code`),vN(253,`--color-disabled`),ug()(),Ac(254,`td`),vN(255,`Cor principal no estado disabled`),ug(),Ac(256,`td`)(257,`code`),vN(258,`var(--color-action-disabled)`),ug()()(),Ac(259,`tr`)(260,`td`)(261,`code`),vN(262,`--background-color-disabled`),ug(),vN(263,` \xA0`),ug(),Ac(264,`td`),vN(265,`Cor de background no estado disabled`),ug(),Ac(266,`td`)(267,`code`),vN(268,`var(--color-transparent)`),ug()()()()()(),Ac(269,`div`,7)(270,`h4`,8),vN(271,`Seletor`),ug(),Ac(272,`pre`,9),vN(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),ug()(),Ac(274,`h4`,10),vN(275,`Propriedades`),ug(),Ac(276,`table`,11)(277,`tr`,12)(278,`th`,13),vN(279,`Nome`),ug(),Ac(280,`th`,13),vN(281,`Tipo`),ug(),Ac(282,`th`,13),vN(283,`Padrão`),ug(),Ac(284,`th`,13),vN(285,`Descrição`),ug()(),Ac(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),vN(290,` p-buttons`),Kc(291,`br`),ug()()(),Ac(292,`td`,18)(293,`code`,19),vN(294,`Array<PoButtonGroupItem>`),ug()(),Ac(295,`td`,20),vN(296,`-`),ug(),Ac(297,`td`,21)(298,`p`),vN(299,`Lista de botões.`),ug()()(),Ac(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),vN(304,` p-size`),Kc(305,`br`),ug()()(),Ac(306,`td`,18)(307,`code`,22),vN(308,`string`),ug()(),Ac(309,`td`,20)(310,`p`)(311,`code`),vN(312,`medium`),ug()()(),Ac(313,`td`,21)(314,`em`)(315,`strong`),vN(316,`(opcional)`),ug()(),Ac(317,`p`),vN(318,`Define o tamanho do componente:`),ug(),Ac(319,`ul`)(320,`li`)(321,`code`),vN(322,`small`),ug(),vN(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(324,`li`)(325,`code`),vN(326,`medium`),ug(),vN(327,`: altura de 44px.`),ug()(),Ac(328,`blockquote`)(329,`p`),vN(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(331,`code`),vN(332,`medium`),ug(),vN(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(334,`a`,23),vN(335,`po-theme`),ug(),vN(336,`.`),ug()()()(),Ac(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),vN(341,` p-toggle`),Kc(342,`br`),ug()()(),Ac(343,`td`,18)(344,`code`,22),vN(345,`string`),ug()(),Ac(346,`td`,20)(347,`p`)(348,`code`),vN(349,`none`),ug()()(),Ac(350,`td`,21)(351,`em`)(352,`strong`),vN(353,`(opcional)`),ug()(),Ac(354,`p`),vN(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),Ac(356,`code`),vN(357,`PoButtonGroupToggle`),ug(),vN(358,`:`),ug(),Ac(359,`ul`)(360,`li`)(361,`code`),vN(362,`multiple`),ug(),vN(363,`: permite múltiplas seleções.`),ug(),Ac(364,`li`)(365,`code`),vN(366,`none`),ug(),vN(367,`: desativa a funcionalidade de seleção.`),ug(),Ac(368,`li`)(369,`code`),vN(370,`single`),ug(),vN(371,`: restringe a seleção a um único botão.`),ug()()()()(),Ac(372,`h3`),vN(373,`Interfaces`),ug(),Ac(374,`h4`,24)(375,`code`,5),vN(376,`PoButtonGroupItem`),ug()(),Ac(377,`div`,2)(378,`p`),vN(379,`Interface para os itens do `),Ac(380,`code`),vN(381,`po-button-group`),ug(),vN(382,`.`),ug()(),Ac(383,`h4`,10),vN(384,`Propriedades`),ug(),Ac(385,`table`,11)(386,`tr`,12)(387,`th`,13),vN(388,`Nome`),ug(),Ac(389,`th`,13),vN(390,`Tipo`),ug(),Ac(391,`th`,13),vN(392,`Descrição`),ug()(),Ac(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),vN(397,` action`),Kc(398,`br`),ug()()(),Ac(399,`td`,18)(400,`code`,25),vN(401,`Function`),ug()(),Ac(402,`td`,21)(403,`p`),vN(404,`Ação executada ao clicar sobre o botão.`),ug()()(),Ac(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),vN(409,` disabled`),Kc(410,`br`),ug()()(),Ac(411,`td`,18)(412,`code`,26),vN(413,`boolean`),ug()(),Ac(414,`td`,21)(415,`em`)(416,`strong`),vN(417,`(opcional)`),ug()(),Ac(418,`p`),vN(419,`Se verdadeiro, define o botão como desabilitado.`),ug(),Ac(420,`blockquote`)(421,`p`),vN(422,`Por padrão esta propriedade é `),Ac(423,`code`),vN(424,`false`),ug(),vN(425,`.`),ug()()()(),Ac(426,`tr`,14)(427,`td`,15)(428,`div`,16)(429,`span`,17),vN(430,` icon`),Kc(431,`br`),ug()()(),Ac(432,`td`,18)(433,`code`,22),vN(434,`string `),ug(),Ac(435,`code`,27),vN(436,` TemplateRef<void>`),ug()(),Ac(437,`td`,21)(438,`em`)(439,`strong`),vN(440,`(opcional)`),ug()(),Ac(441,`p`),vN(442,`Ícone exibido ao lado esquerdo do label do botão.`),ug(),Ac(443,`p`),vN(444,`É possível usar qualquer um dos ícones da `),Ac(445,`a`,28),vN(446,`Biblioteca de ícones`),ug(),vN(447,`. conforme exemplo abaixo:`),ug(),Ac(448,`pre`)(449,`code`),vN(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),ug()(),Ac(451,`p`),vN(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(453,`em`),vN(454,`Font Awesome`),ug(),vN(455,`, da seguinte forma:`),ug(),Ac(456,`pre`)(457,`code`),vN(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),ug()(),Ac(459,`p`),vN(460,`Outra opção seria a customização do ícone através do `),Ac(461,`code`),vN(462,`TemplateRef`),ug(),vN(463,`, conforme exemplo abaixo:`),ug(),Ac(464,`p`),vN(465,`component.html:`),ug(),Ac(466,`pre`)(467,`code`),vN(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(469,`p`),vN(470,`component.ts:`),ug(),Ac(471,`pre`)(472,`code`),vN(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),ug()(),Ac(474,`blockquote`)(475,`p`),vN(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(477,`code`),vN(478,`font-size: inherit`),ug(),vN(479,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(480,`tr`,14)(481,`td`,15)(482,`div`,16)(483,`span`,17),vN(484,` label`),Kc(485,`br`),ug()()(),Ac(486,`td`,18)(487,`code`,22),vN(488,`string`),ug()(),Ac(489,`td`,21)(490,`em`)(491,`strong`),vN(492,`(opcional)`),ug()(),Ac(493,`p`),vN(494,`Label do botão.`),ug()()(),Ac(495,`tr`,14)(496,`td`,15)(497,`div`,16)(498,`span`,17),vN(499,` selected`),Kc(500,`br`),ug()()(),Ac(501,`td`,18)(502,`code`,26),vN(503,`boolean`),ug()(),Ac(504,`td`,21)(505,`em`)(506,`strong`),vN(507,`(opcional)`),ug()(),Ac(508,`p`),vN(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),Ac(510,`code`),vN(511,`p-toggle`),ug(),vN(512,`.`),ug()()(),Ac(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),vN(517,` tooltip`),Kc(518,`br`),ug()()(),Ac(519,`td`,18)(520,`code`,22),vN(521,`string`),ug()(),Ac(522,`td`,21)(523,`em`)(524,`strong`),vN(525,`(opcional)`),ug()(),Ac(526,`p`),vN(527,`Define a mensagem a ser exibida ao posicionar o `),Ac(528,`em`),vN(529,`mouse`),ug(),vN(530,` sobre o botão.`),ug()()()(),Ac(531,`h3`),vN(532,`Enums`),ug(),Ac(533,`h4`,4)(534,`code`,5),vN(535,`PoButtonGroupToggle`),ug()(),Ac(536,`div`,2)(537,`p`),vN(538,`Tipos de seleção (`),Ac(539,`code`),vN(540,`p-toggle`),ug(),vN(541,`) disponíveis para o componente.`),ug()(),Ac(542,`h4`,10),vN(543,`Propriedades`),ug(),Ac(544,`table`,11)(545,`tr`,12)(546,`th`,13),vN(547,`Nome`),ug(),Ac(548,`th`,13),vN(549,`Descrição`),ug()(),Ac(550,`tr`,14)(551,`td`,15)(552,`div`,16)(553,`span`,17),vN(554,` Multiple`),Kc(555,`br`),ug()()(),Ac(556,`td`,21)(557,`p`),vN(558,`Seleção múltipla.`),ug()()(),Ac(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),vN(563,` None`),Kc(564,`br`),ug()()(),Ac(565,`td`,21)(566,`p`),vN(567,`Seleção desabilitada.`),ug()()(),Ac(568,`tr`,14)(569,`td`,15)(570,`div`,16)(571,`span`,17),vN(572,` Single`),Kc(573,`br`),ug()()(),Ac(574,`td`,21)(575,`p`),vN(576,`Seleção única.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var We=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Button Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-button-group-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-button-group-basic-view`)(6,`sample-po-button-group-labs-view`)(7,`sample-po-button-group-attendance-view`)(8,`sample-po-button-group-opening-service-ticket-view`)(9,`sample-po-button-group-post-view`),ug()()()),a&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[$ze,gae,bae,re,de,ce,ge,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[kL.forChild(We),kL]})}return i})();var Pt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[Ta,Ee]})}return i})();export{Pt as DocPoButtonGroupModule};