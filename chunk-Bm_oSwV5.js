import{$r as Vx,Ai as fo,Et as V8e,Hr as Tw,Ht as c0e,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,Zt as fu,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,pt as Pbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var pe=(()=>{class i{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&ql(0,`po-button-group`,0),a&2&&cw(`p-buttons`,o.buttons)},dependencies:[c0e],encapsulation:2,changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Group Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-group-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ce,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{poNotification=f(Eu);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:fu.None},{label:`single`,value:fu.Single},{label:`multiple`,value:fu.Multiple}];ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let c=Vx();Ml(0,`div`,2),ql(1,`po-button-group`,3),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),Mw(`ngModelChange`,function(s){return Qy(c),yN(o.button.label,s)||(o.button.label=s),Jy(s)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(s){return Qy(c),yN(o.button.action,s)||(o.button.action=s),Jy(s)}),lg(),f0(),Ml(8,`po-input`,6),Mw(`ngModelChange`,function(s){return Qy(c),yN(o.button.tooltip,s)||(o.button.tooltip=s),Jy(s)}),lg(),f0(),Ml(9,`po-radio-group`,7),Mw(`ngModelChange`,function(s){return Qy(c),yN(o.button.icon,s)||(o.button.icon=s),Jy(s)}),lg(),f0(),Ml(10,`po-switch`,8),Mw(`ngModelChange`,function(s){return Qy(c),yN(o.button.disabled,s)||(o.button.disabled=s),Jy(s)}),lg(),f0(),lg(),Ml(11,`div`,2)(12,`po-button`,9),ht(`p-click`,function(){Qy(c);let s=Yx(4);return o.addButton(),Jy(s.reset())}),lg()()(),ql(13,`po-divider`),Ml(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),Mw(`ngModelChange`,function(s){return Qy(c),yN(o.toggle,s)||(o.toggle=s),Jy(s)}),lg(),f0(),Ml(18,`po-radio-group`,11),Mw(`ngModelChange`,function(s){return Qy(c),yN(o.size,s)||(o.size=s),Jy(s)}),lg(),f0(),lg(),Ml(19,`div`,2)(20,`po-button`,12),ht(`p-click`,function(){Qy(c);let s=Yx(4);return Yx(15).reset(),s.reset(),Jy(o.restore())}),lg()()()}if(a&2){let c=Yx(4);Up(),cw(`p-buttons`,o.buttons)(`p-toggle`,o.toggle)(`p-size`,o.size),Up(5),Tw(`ngModel`,o.button.label),p0(),Up(),Tw(`ngModel`,o.button.action),p0(),Up(),Tw(`ngModel`,o.button.tooltip),p0(),Up(),Tw(`ngModel`,o.button.icon),cw(`p-options`,o.iconsOptions),p0(),Up(),Tw(`ngModel`,o.button.disabled),p0(),Up(2),cw(`p-disabled`,c.invalid),Up(5),Tw(`ngModel`,o.toggle),cw(`p-options`,o.toggleOptions),p0(),Up(),Tw(`ngModel`,o.size),cw(`p-options`,o.sizeOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,c0e,nb,lU,q0e,Tbe,J4],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Group Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-group-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Be,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poNotification=f(Eu);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(p){let a=this.randomPassword(),o=this.getTypeNotification(p.label);this.poNotification[o](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=``){switch(p){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`div`,1),mN(2,`Choose the type of attendance`),lg(),Ml(3,`div`,2),mN(4,`Get your password`),lg()(),ql(5,`po-divider`),Ml(6,`div`,0),ql(7,`po-button-group`,3),lg()),a&2&&(Up(7),cw(`p-buttons`,o.attendances))},dependencies:[c0e,nb],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Group - Attendance`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-group-attendance`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(p){this.selectedWeekDay=p.selected?p.label:``}selectPeriod(p){this.selectedPeriod=p.selected?p.label:``}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(a,o){a&1&&(Ml(0,`div`,0),mN(1,`Opening Service Ticket`),lg(),Ml(2,`po-widget`)(3,`div`,1)(4,`div`,2),mN(5,`Day of the week`),lg(),Ml(6,`div`,3),ql(7,`po-button-group`,4),lg(),Ml(8,`div`,3),ql(9,`po-button-group`,4),lg(),ql(10,`po-divider`),Ml(11,`div`,5)(12,`strong`),mN(13,`Selected day:`),lg(),mN(14),lg(),Ml(15,`div`,5)(16,`strong`),mN(17,`Selected period:`),lg(),mN(18),lg()()()),a&2&&(Up(7),cw(`p-buttons`,o.weekDays),Up(2),cw(`p-buttons`,o.periods),Up(5),gg(` `,o.selectedWeekDay||`None`),Up(4),gg(` `,o.selectedPeriod||`None`))},dependencies:[c0e,nb,$8e],encapsulation:2})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Group - Opening Service Ticket`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-group-opening-service-ticket`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(a,o){a&1&&(Ml(0,`div`,0),mN(1,`Create New Post`),lg(),Ml(2,`po-widget`)(3,`div`,1)(4,`div`,2),ql(5,`po-button-group`,3),lg(),Ml(6,`div`,2),ql(7,`po-button-group`,4),lg(),Ml(8,`po-textarea`,5),Mw(`ngModelChange`,function(h){return yN(o.textArea,h)||(o.textArea=h),h}),lg(),f0(),Ml(9,`div`,6),mN(10),lg()()()),a&2&&(Up(5),cw(`p-buttons`,o.fontStyle),Up(2),cw(`p-buttons`,o.textAlign),Up(),Tw(`ngModel`,o.textArea),p0(),Up(),fo(`font-weight`,o.setBold?`bold`:`normal`)(`font-style`,o.setItalic?`italic`:`normal`)(`text-decoration`,o.setUnderline?`underline`:`none`)(`text-align`,o.setTextAlignment),Up(),gg(` `,o.textArea,` `))},dependencies:[wY,Vk,c0e,Pbe,$8e],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Button Group - Post`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-button-group-post`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ie,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(a,o){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-button-group.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoButtonGroupComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-button-group`),lg(),mN(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),lg(),Ml(18,`p`),mN(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),lg(),Ml(20,`p`),mN(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),lg(),Ml(22,`h4`),mN(23,`Boas práticas`),lg(),Ml(24,`ul`)(25,`li`),mN(26,`Evite usar o `),Ml(27,`code`),mN(28,`po-button-group`),lg(),mN(29,` com apenas 1 ação, para isso utilize o `),Ml(30,`code`),mN(31,`po-button`),lg(),mN(32,`.`),lg(),Ml(33,`li`),mN(34,`Procure utilizar no máximo 3 ações para cada `),Ml(35,`code`),mN(36,`po-button-group`),lg(),mN(37,`.`),lg()(),Ml(38,`blockquote`)(39,`p`),mN(40,`As recomendações do `),Ml(41,`code`),mN(42,`po-button`),lg(),mN(43,` também valem para o `),Ml(44,`code`),mN(45,`po-button-group`),lg(),mN(46,`.`),lg()(),Ml(47,`h4`),mN(48,`Tokens customizáveis`),lg(),Ml(49,`p`),mN(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(51,`blockquote`)(52,`p`),mN(53,`Para maiores informações, acesse o guia `),Ml(54,`a`,6),mN(55,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(56,`.`),lg()(),Ml(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),mN(61,`Propriedade`),lg(),Ml(62,`th`),mN(63,`Descrição`),lg(),Ml(64,`th`),mN(65,`Valor Padrão`),lg()()(),Ml(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),mN(70,`Default Values`),lg()(),ql(71,`td`)(72,`td`),lg(),Ml(73,`tr`)(74,`td`)(75,`code`),mN(76,`--font-family`),lg()(),Ml(77,`td`),mN(78,`Família tipográfica usada`),lg(),Ml(79,`td`)(80,`code`),mN(81,`var(--font-family-theme)`),lg()()(),Ml(82,`tr`)(83,`td`)(84,`code`),mN(85,`--font-size`),lg()(),Ml(86,`td`),mN(87,`Tamanho da fonte`),lg(),Ml(88,`td`)(89,`code`),mN(90,`var(--font-size-default)`),lg()()(),Ml(91,`tr`)(92,`td`)(93,`code`),mN(94,`--font-weight`),lg()(),Ml(95,`td`),mN(96,`Peso da fonte`),lg(),Ml(97,`td`)(98,`code`),mN(99,`var(--font-weight-bold)`),lg()()(),Ml(100,`tr`)(101,`td`)(102,`code`),mN(103,`--line-height`),lg()(),Ml(104,`td`),mN(105,`Tamanho da label`),lg(),Ml(106,`td`)(107,`code`),mN(108,`var(--line-height-none)`),lg()()(),Ml(109,`tr`)(110,`td`)(111,`code`),mN(112,`--border-radius`),lg()(),Ml(113,`td`),mN(114,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(115,`td`)(116,`code`),mN(117,`var(--border-radius-md)`),lg()()(),Ml(118,`tr`)(119,`td`)(120,`code`),mN(121,`--border-width`),lg()(),Ml(122,`td`),mN(123,`Contém o valor da largura dos cantos do elemento\xA0`),lg(),Ml(124,`td`)(125,`code`),mN(126,`var(--border-width-md)`),lg()()(),Ml(127,`tr`)(128,`td`)(129,`code`),mN(130,`--padding`),lg()(),Ml(131,`td`),mN(132,`Preenchimento`),lg(),Ml(133,`td`)(134,`code`),mN(135,`0 1em`),lg()()(),Ml(136,`tr`)(137,`td`)(138,`code`),mN(139,`--text-color`),lg()(),Ml(140,`td`),mN(141,`Cor do texto`),lg(),Ml(142,`td`)(143,`code`),mN(144,`var(--color-neutral-light-00)`),lg()()(),Ml(145,`tr`)(146,`td`)(147,`code`),mN(148,`--color`),lg()(),Ml(149,`td`),mN(150,`Cor principal do botão`),lg(),Ml(151,`td`)(152,`code`),mN(153,`var(--color-action-default)`),lg()()(),Ml(154,`tr`)(155,`td`)(156,`code`),mN(157,`--background-color`),lg()(),Ml(158,`td`),mN(159,`Cor de background`),lg(),Ml(160,`td`)(161,`code`),mN(162,`var(--color-transparent)`),lg()()(),Ml(163,`tr`)(164,`td`)(165,`code`),mN(166,`--shadow`),lg()(),Ml(167,`td`),mN(168,`Contém o valor da sombra do elemento`),lg(),Ml(169,`td`)(170,`code`),mN(171,`var(--shadow-none)`),lg()()(),Ml(172,`tr`)(173,`td`)(174,`strong`),mN(175,`Hover`),lg()(),ql(176,`td`)(177,`td`),lg(),Ml(178,`tr`)(179,`td`)(180,`code`),mN(181,`--color-hover`),lg()(),Ml(182,`td`),mN(183,`Cor principal no estado hover`),lg(),Ml(184,`td`)(185,`code`),mN(186,`var(--color-action-hover)`),lg()()(),Ml(187,`tr`)(188,`td`)(189,`code`),mN(190,`--background-hover`),lg()(),Ml(191,`td`),mN(192,`Cor de background no estado hover`),lg(),Ml(193,`td`)(194,`code`),mN(195,`var(--color-brand-01-lighter)`),lg()()(),Ml(196,`tr`)(197,`td`)(198,`code`),mN(199,`--border-color-hover`),lg()(),Ml(200,`td`),mN(201,`Cor da borda no estado hover`),lg(),Ml(202,`td`)(203,`code`),mN(204,`var(--color-brand-01-darkest)`),lg()()(),Ml(205,`tr`)(206,`td`)(207,`strong`),mN(208,`Focused`),lg()(),ql(209,`td`)(210,`td`),lg(),Ml(211,`tr`)(212,`td`)(213,`code`),mN(214,`--outline-color-focused`),lg()(),Ml(215,`td`),mN(216,`Cor do outline do estado de focus`),lg(),Ml(217,`td`)(218,`code`),mN(219,`var(--color-action-focus)`),lg()()(),Ml(220,`tr`)(221,`td`)(222,`strong`),mN(223,`Pressed`),lg()(),ql(224,`td`)(225,`td`),lg(),Ml(226,`tr`)(227,`td`)(228,`code`),mN(229,`--color-pressed`),lg()(),Ml(230,`td`),mN(231,`Cor principal no estado de pressionado`),lg(),Ml(232,`td`)(233,`code`),mN(234,`var(--color-action-pressed)`),lg()()(),Ml(235,`tr`)(236,`td`)(237,`code`),mN(238,`--background-pressed`),lg()(),Ml(239,`td`),mN(240,`Cor de background no estado de pressionado\xA0`),lg(),Ml(241,`td`)(242,`code`),mN(243,`var(--color-brand-01-light)`),lg()()(),Ml(244,`tr`)(245,`td`)(246,`strong`),mN(247,`Disabled`),lg()(),ql(248,`td`)(249,`td`),lg(),Ml(250,`tr`)(251,`td`)(252,`code`),mN(253,`--color-disabled`),lg()(),Ml(254,`td`),mN(255,`Cor principal no estado disabled`),lg(),Ml(256,`td`)(257,`code`),mN(258,`var(--color-action-disabled)`),lg()()(),Ml(259,`tr`)(260,`td`)(261,`code`),mN(262,`--background-color-disabled`),lg(),mN(263,` \xA0`),lg(),Ml(264,`td`),mN(265,`Cor de background no estado disabled`),lg(),Ml(266,`td`)(267,`code`),mN(268,`var(--color-transparent)`),lg()()()()()(),Ml(269,`div`,7)(270,`h4`,8),mN(271,`Seletor`),lg(),Ml(272,`pre`,9),mN(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),lg()(),Ml(274,`h4`,10),mN(275,`Propriedades`),lg(),Ml(276,`table`,11)(277,`tr`,12)(278,`th`,13),mN(279,`Nome`),lg(),Ml(280,`th`,13),mN(281,`Tipo`),lg(),Ml(282,`th`,13),mN(283,`Padrão`),lg(),Ml(284,`th`,13),mN(285,`Descrição`),lg()(),Ml(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),mN(290,` p-buttons`),ql(291,`br`),lg()()(),Ml(292,`td`,18)(293,`code`,19),mN(294,`Array<PoButtonGroupItem>`),lg()(),Ml(295,`td`,20),mN(296,`-`),lg(),Ml(297,`td`,21)(298,`p`),mN(299,`Lista de botões.`),lg()()(),Ml(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),mN(304,` p-size`),ql(305,`br`),lg()()(),Ml(306,`td`,18)(307,`code`,22),mN(308,`string`),lg()(),Ml(309,`td`,20)(310,`p`)(311,`code`),mN(312,`medium`),lg()()(),Ml(313,`td`,21)(314,`em`)(315,`strong`),mN(316,`(opcional)`),lg()(),Ml(317,`p`),mN(318,`Define o tamanho do componente:`),lg(),Ml(319,`ul`)(320,`li`)(321,`code`),mN(322,`small`),lg(),mN(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(324,`li`)(325,`code`),mN(326,`medium`),lg(),mN(327,`: altura de 44px.`),lg()(),Ml(328,`blockquote`)(329,`p`),mN(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(331,`code`),mN(332,`medium`),lg(),mN(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(334,`a`,23),mN(335,`po-theme`),lg(),mN(336,`.`),lg()()()(),Ml(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),mN(341,` p-toggle`),ql(342,`br`),lg()()(),Ml(343,`td`,18)(344,`code`,22),mN(345,`string`),lg()(),Ml(346,`td`,20)(347,`p`)(348,`code`),mN(349,`none`),lg()()(),Ml(350,`td`,21)(351,`em`)(352,`strong`),mN(353,`(opcional)`),lg()(),Ml(354,`p`),mN(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),Ml(356,`code`),mN(357,`PoButtonGroupToggle`),lg(),mN(358,`:`),lg(),Ml(359,`ul`)(360,`li`)(361,`code`),mN(362,`multiple`),lg(),mN(363,`: permite múltiplas seleções.`),lg(),Ml(364,`li`)(365,`code`),mN(366,`none`),lg(),mN(367,`: desativa a funcionalidade de seleção.`),lg(),Ml(368,`li`)(369,`code`),mN(370,`single`),lg(),mN(371,`: restringe a seleção a um único botão.`),lg()()()()(),Ml(372,`h3`),mN(373,`Interfaces`),lg(),Ml(374,`h4`,24)(375,`code`,5),mN(376,`PoButtonGroupItem`),lg()(),Ml(377,`div`,2)(378,`p`),mN(379,`Interface para os itens do `),Ml(380,`code`),mN(381,`po-button-group`),lg(),mN(382,`.`),lg()(),Ml(383,`h4`,10),mN(384,`Propriedades`),lg(),Ml(385,`table`,11)(386,`tr`,12)(387,`th`,13),mN(388,`Nome`),lg(),Ml(389,`th`,13),mN(390,`Tipo`),lg(),Ml(391,`th`,13),mN(392,`Descrição`),lg()(),Ml(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),mN(397,` action`),ql(398,`br`),lg()()(),Ml(399,`td`,18)(400,`code`,25),mN(401,`Function`),lg()(),Ml(402,`td`,21)(403,`p`),mN(404,`Ação executada ao clicar sobre o botão.`),lg()()(),Ml(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),mN(409,` disabled`),ql(410,`br`),lg()()(),Ml(411,`td`,18)(412,`code`,26),mN(413,`boolean`),lg()(),Ml(414,`td`,21)(415,`em`)(416,`strong`),mN(417,`(opcional)`),lg()(),Ml(418,`p`),mN(419,`Se verdadeiro, define o botão como desabilitado.`),lg(),Ml(420,`blockquote`)(421,`p`),mN(422,`Por padrão esta propriedade é `),Ml(423,`code`),mN(424,`false`),lg(),mN(425,`.`),lg()()()(),Ml(426,`tr`,14)(427,`td`,15)(428,`div`,16)(429,`span`,17),mN(430,` icon`),ql(431,`br`),lg()()(),Ml(432,`td`,18)(433,`code`,22),mN(434,`string `),lg(),Ml(435,`code`,27),mN(436,` TemplateRef<void>`),lg()(),Ml(437,`td`,21)(438,`em`)(439,`strong`),mN(440,`(opcional)`),lg()(),Ml(441,`p`),mN(442,`Ícone exibido ao lado esquerdo do label do botão.`),lg(),Ml(443,`p`),mN(444,`É possível usar qualquer um dos ícones da `),Ml(445,`a`,28),mN(446,`Biblioteca de ícones`),lg(),mN(447,`. conforme exemplo abaixo:`),lg(),Ml(448,`pre`)(449,`code`),mN(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),lg()(),Ml(451,`p`),mN(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(453,`em`),mN(454,`Font Awesome`),lg(),mN(455,`, da seguinte forma:`),lg(),Ml(456,`pre`)(457,`code`),mN(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),lg()(),Ml(459,`p`),mN(460,`Outra opção seria a customização do ícone através do `),Ml(461,`code`),mN(462,`TemplateRef`),lg(),mN(463,`, conforme exemplo abaixo:`),lg(),Ml(464,`p`),mN(465,`component.html:`),lg(),Ml(466,`pre`)(467,`code`),mN(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(469,`p`),mN(470,`component.ts:`),lg(),Ml(471,`pre`)(472,`code`),mN(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),lg()(),Ml(474,`blockquote`)(475,`p`),mN(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(477,`code`),mN(478,`font-size: inherit`),lg(),mN(479,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(480,`tr`,14)(481,`td`,15)(482,`div`,16)(483,`span`,17),mN(484,` label`),ql(485,`br`),lg()()(),Ml(486,`td`,18)(487,`code`,22),mN(488,`string`),lg()(),Ml(489,`td`,21)(490,`em`)(491,`strong`),mN(492,`(opcional)`),lg()(),Ml(493,`p`),mN(494,`Label do botão.`),lg()()(),Ml(495,`tr`,14)(496,`td`,15)(497,`div`,16)(498,`span`,17),mN(499,` selected`),ql(500,`br`),lg()()(),Ml(501,`td`,18)(502,`code`,26),mN(503,`boolean`),lg()(),Ml(504,`td`,21)(505,`em`)(506,`strong`),mN(507,`(opcional)`),lg()(),Ml(508,`p`),mN(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),Ml(510,`code`),mN(511,`p-toggle`),lg(),mN(512,`.`),lg()()(),Ml(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),mN(517,` tooltip`),ql(518,`br`),lg()()(),Ml(519,`td`,18)(520,`code`,22),mN(521,`string`),lg()(),Ml(522,`td`,21)(523,`em`)(524,`strong`),mN(525,`(opcional)`),lg()(),Ml(526,`p`),mN(527,`Define a mensagem a ser exibida ao posicionar o `),Ml(528,`em`),mN(529,`mouse`),lg(),mN(530,` sobre o botão.`),lg()()()(),Ml(531,`h3`),mN(532,`Enums`),lg(),Ml(533,`h4`,4)(534,`code`,5),mN(535,`PoButtonGroupToggle`),lg()(),Ml(536,`div`,2)(537,`p`),mN(538,`Tipos de seleção (`),Ml(539,`code`),mN(540,`p-toggle`),lg(),mN(541,`) disponíveis para o componente.`),lg()(),Ml(542,`h4`,10),mN(543,`Propriedades`),lg(),Ml(544,`table`,11)(545,`tr`,12)(546,`th`,13),mN(547,`Nome`),lg(),Ml(548,`th`,13),mN(549,`Descrição`),lg()(),Ml(550,`tr`,14)(551,`td`,15)(552,`div`,16)(553,`span`,17),mN(554,` Multiple`),ql(555,`br`),lg()()(),Ml(556,`td`,21)(557,`p`),mN(558,`Seleção múltipla.`),lg()()(),Ml(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),mN(563,` None`),ql(564,`br`),lg()()(),Ml(565,`td`,21)(566,`p`),mN(567,`Seleção desabilitada.`),lg()()(),Ml(568,`tr`,14)(569,`td`,15)(570,`div`,16)(571,`span`,17),mN(572,` Single`),ql(573,`br`),lg()()(),Ml(574,`td`,21)(575,`p`),mN(576,`Seleção única.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var We=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Button Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-button-group-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-button-group-basic-view`)(6,`sample-po-button-group-labs-view`)(7,`sample-po-button-group-attendance-view`)(8,`sample-po-button-group-opening-service-ticket-view`)(9,`sample-po-button-group-post-view`),lg()()()),a&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,re,de,ce,ge,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[NL.forChild(We),NL]})}return i})();var Pt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,Ee]})}return i})();export{Pt as DocPoButtonGroupModule};