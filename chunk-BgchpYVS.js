import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Ln as xu,Mn as w5,Pi as mt,Ri as nu,U as Jee,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,i as _a,ir as EF,ji as mO,mn as ni,nn as goe,pa as wg,r as Ta,rt as Ote,ta as ue$1,tr as Do,ua as wK,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var pe=(()=>{class i{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&nu(0,`po-button-group`,0),a&2&&jE(`p-buttons`,o.buttons)},dependencies:[Jee],encapsulation:2,changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i});var re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-group-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ce,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,pe],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{poNotification=p(zu);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:xu.None},{label:`single`,value:xu.Single},{label:`multiple`,value:xu.Multiple}];ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let c=Sx();jc(0,`div`,2),nu(1,`po-button-group`,3),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),JN(),ob(`ngModelChange`,function(s){return y_(c),sO(o.button.label,s)||(o.button.label=s),v_(s)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(s){return y_(c),sO(o.button.action,s)||(o.button.action=s),v_(s)}),wg(),jc(8,`po-input`,6),JN(),ob(`ngModelChange`,function(s){return y_(c),sO(o.button.tooltip,s)||(o.button.tooltip=s),v_(s)}),wg(),jc(9,`po-radio-group`,7),JN(),ob(`ngModelChange`,function(s){return y_(c),sO(o.button.icon,s)||(o.button.icon=s),v_(s)}),wg(),jc(10,`po-switch`,8),JN(),ob(`ngModelChange`,function(s){return y_(c),sO(o.button.disabled,s)||(o.button.disabled=s),v_(s)}),wg()(),jc(11,`div`,2)(12,`po-button`,9),mt(`p-click`,function(){y_(c);let s=Fx(4);return o.addButton(),v_(s.reset())}),wg()()(),nu(13,`po-divider`),jc(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),JN(),ob(`ngModelChange`,function(s){return y_(c),sO(o.toggle,s)||(o.toggle=s),v_(s)}),wg(),jc(18,`po-radio-group`,11),JN(),ob(`ngModelChange`,function(s){return y_(c),sO(o.size,s)||(o.size=s),v_(s)}),wg()(),jc(19,`div`,2)(20,`po-button`,12),mt(`p-click`,function(){y_(c);let s=Fx(4);return Fx(15).reset(),s.reset(),v_(o.restore())}),wg()()()}if(a&2){let c=Fx(4);rg(),jE(`p-buttons`,o.buttons)(`p-toggle`,o.toggle)(`p-size`,o.size),rg(5),ib(`ngModel`,o.button.label),t0(),rg(),ib(`ngModel`,o.button.action),t0(),rg(),ib(`ngModel`,o.button.tooltip),t0(),rg(),ib(`ngModel`,o.button.icon),jE(`p-options`,o.iconsOptions),t0(),rg(),ib(`ngModel`,o.button.disabled),t0(),rg(2),jE(`p-disabled`,c.invalid),rg(5),ib(`ngModel`,o.toggle),jE(`p-options`,o.toggleOptions),t0(),rg(),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Jee,Lf,A5,Ote,moe,w5],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-group-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Be,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poNotification=p(zu);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(p){let a=this.randomPassword(),o=this.getTypeNotification(p.label);this.poNotification[o](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=``){switch(p){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`div`,1),iO(2,`Choose the type of attendance`),wg(),jc(3,`div`,2),iO(4,`Get your password`),wg()(),nu(5,`po-divider`),jc(6,`div`,0),nu(7,`po-button-group`,3),wg()),a&2&&(rg(7),jE(`p-buttons`,o.attendances))},dependencies:[Jee,Lf],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Group - Attendance`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-group-attendance`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(p){this.selectedWeekDay=p.selected?p.label:``}selectPeriod(p){this.selectedPeriod=p.selected?p.label:``}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(a,o){a&1&&(jc(0,`div`,0),iO(1,`Opening Service Ticket`),wg(),jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),iO(5,`Day of the week`),wg(),jc(6,`div`,3),nu(7,`po-button-group`,4),wg(),jc(8,`div`,3),nu(9,`po-button-group`,4),wg(),nu(10,`po-divider`),jc(11,`div`,5)(12,`strong`),iO(13,`Selected day:`),wg(),iO(14),wg(),jc(15,`div`,5)(16,`strong`),iO(17,`Selected period:`),wg(),iO(18),wg()()()),a&2&&(rg(7),jE(`p-buttons`,o.weekDays),rg(2),jE(`p-buttons`,o.periods),rg(5),Ag(` `,o.selectedWeekDay||`None`),rg(4),Ag(` `,o.selectedPeriod||`None`))},dependencies:[Jee,Lf,Noe],encapsulation:2})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Group - Opening Service Ticket`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-group-opening-service-ticket`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(a,o){a&1&&(jc(0,`div`,0),iO(1,`Create New Post`),wg(),jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),nu(5,`po-button-group`,3),wg(),jc(6,`div`,2),nu(7,`po-button-group`,4),wg(),jc(8,`po-textarea`,5),JN(),ob(`ngModelChange`,function(h){return sO(o.textArea,h)||(o.textArea=h),h}),wg(),jc(9,`div`,6),iO(10),wg()()()),a&2&&(rg(5),jE(`p-buttons`,o.fontStyle),rg(2),jE(`p-buttons`,o.textAlign),rg(),ib(`ngModel`,o.textArea),t0(),rg(),Do(`font-weight`,o.setBold?`bold`:`normal`)(`font-style`,o.setItalic?`italic`:`normal`)(`text-decoration`,o.setUnderline?`underline`:`none`)(`text-align`,o.setTextAlignment),rg(),Ag(` `,o.textArea,` `))},dependencies:[CK,TF,Jee,goe,Noe],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Group - Post`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-group-post`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ie,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-button-group.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoButtonGroupComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-button-group`),wg(),iO(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),wg(),jc(18,`p`),iO(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),wg(),jc(20,`p`),iO(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),wg(),jc(22,`h4`),iO(23,`Boas práticas`),wg(),jc(24,`ul`)(25,`li`),iO(26,`Evite usar o `),jc(27,`code`),iO(28,`po-button-group`),wg(),iO(29,` com apenas 1 ação, para isso utilize o `),jc(30,`code`),iO(31,`po-button`),wg(),iO(32,`.`),wg(),jc(33,`li`),iO(34,`Procure utilizar no máximo 3 ações para cada `),jc(35,`code`),iO(36,`po-button-group`),wg(),iO(37,`.`),wg()(),jc(38,`blockquote`)(39,`p`),iO(40,`As recomendações do `),jc(41,`code`),iO(42,`po-button`),wg(),iO(43,` também valem para o `),jc(44,`code`),iO(45,`po-button-group`),wg(),iO(46,`.`),wg()(),jc(47,`h4`),iO(48,`Tokens customizáveis`),wg(),jc(49,`p`),iO(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(51,`blockquote`)(52,`p`),iO(53,`Para maiores informações, acesse o guia `),jc(54,`a`,6),iO(55,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(56,`.`),wg()(),jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),iO(61,`Propriedade`),wg(),jc(62,`th`),iO(63,`Descrição`),wg(),jc(64,`th`),iO(65,`Valor Padrão`),wg()()(),jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),iO(70,`Default Values`),wg()(),nu(71,`td`)(72,`td`),wg(),jc(73,`tr`)(74,`td`)(75,`code`),iO(76,`--font-family`),wg()(),jc(77,`td`),iO(78,`Família tipográfica usada`),wg(),jc(79,`td`)(80,`code`),iO(81,`var(--font-family-theme)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),iO(85,`--font-size`),wg()(),jc(86,`td`),iO(87,`Tamanho da fonte`),wg(),jc(88,`td`)(89,`code`),iO(90,`var(--font-size-default)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),iO(94,`--font-weight`),wg()(),jc(95,`td`),iO(96,`Peso da fonte`),wg(),jc(97,`td`)(98,`code`),iO(99,`var(--font-weight-bold)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`code`),iO(103,`--line-height`),wg()(),jc(104,`td`),iO(105,`Tamanho da label`),wg(),jc(106,`td`)(107,`code`),iO(108,`var(--line-height-none)`),wg()()(),jc(109,`tr`)(110,`td`)(111,`code`),iO(112,`--border-radius`),wg()(),jc(113,`td`),iO(114,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(115,`td`)(116,`code`),iO(117,`var(--border-radius-md)`),wg()()(),jc(118,`tr`)(119,`td`)(120,`code`),iO(121,`--border-width`),wg()(),jc(122,`td`),iO(123,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(124,`td`)(125,`code`),iO(126,`var(--border-width-md)`),wg()()(),jc(127,`tr`)(128,`td`)(129,`code`),iO(130,`--padding`),wg()(),jc(131,`td`),iO(132,`Preenchimento`),wg(),jc(133,`td`)(134,`code`),iO(135,`0 1em`),wg()()(),jc(136,`tr`)(137,`td`)(138,`code`),iO(139,`--text-color`),wg()(),jc(140,`td`),iO(141,`Cor do texto`),wg(),jc(142,`td`)(143,`code`),iO(144,`var(--color-neutral-light-00)`),wg()()(),jc(145,`tr`)(146,`td`)(147,`code`),iO(148,`--color`),wg()(),jc(149,`td`),iO(150,`Cor principal do botão`),wg(),jc(151,`td`)(152,`code`),iO(153,`var(--color-action-default)`),wg()()(),jc(154,`tr`)(155,`td`)(156,`code`),iO(157,`--background-color`),wg()(),jc(158,`td`),iO(159,`Cor de background`),wg(),jc(160,`td`)(161,`code`),iO(162,`var(--color-transparent)`),wg()()(),jc(163,`tr`)(164,`td`)(165,`code`),iO(166,`--shadow`),wg()(),jc(167,`td`),iO(168,`Contém o valor da sombra do elemento`),wg(),jc(169,`td`)(170,`code`),iO(171,`var(--shadow-none)`),wg()()(),jc(172,`tr`)(173,`td`)(174,`strong`),iO(175,`Hover`),wg()(),nu(176,`td`)(177,`td`),wg(),jc(178,`tr`)(179,`td`)(180,`code`),iO(181,`--color-hover`),wg()(),jc(182,`td`),iO(183,`Cor principal no estado hover`),wg(),jc(184,`td`)(185,`code`),iO(186,`var(--color-action-hover)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`code`),iO(190,`--background-hover`),wg()(),jc(191,`td`),iO(192,`Cor de background no estado hover`),wg(),jc(193,`td`)(194,`code`),iO(195,`var(--color-brand-01-lighter)`),wg()()(),jc(196,`tr`)(197,`td`)(198,`code`),iO(199,`--border-color-hover`),wg()(),jc(200,`td`),iO(201,`Cor da borda no estado hover`),wg(),jc(202,`td`)(203,`code`),iO(204,`var(--color-brand-01-darkest)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`strong`),iO(208,`Focused`),wg()(),nu(209,`td`)(210,`td`),wg(),jc(211,`tr`)(212,`td`)(213,`code`),iO(214,`--outline-color-focused`),wg()(),jc(215,`td`),iO(216,`Cor do outline do estado de focus`),wg(),jc(217,`td`)(218,`code`),iO(219,`var(--color-action-focus)`),wg()()(),jc(220,`tr`)(221,`td`)(222,`strong`),iO(223,`Pressed`),wg()(),nu(224,`td`)(225,`td`),wg(),jc(226,`tr`)(227,`td`)(228,`code`),iO(229,`--color-pressed`),wg()(),jc(230,`td`),iO(231,`Cor principal no estado de pressionado`),wg(),jc(232,`td`)(233,`code`),iO(234,`var(--color-action-pressed)`),wg()()(),jc(235,`tr`)(236,`td`)(237,`code`),iO(238,`--background-pressed`),wg()(),jc(239,`td`),iO(240,`Cor de background no estado de pressionado\xA0`),wg(),jc(241,`td`)(242,`code`),iO(243,`var(--color-brand-01-light)`),wg()()(),jc(244,`tr`)(245,`td`)(246,`strong`),iO(247,`Disabled`),wg()(),nu(248,`td`)(249,`td`),wg(),jc(250,`tr`)(251,`td`)(252,`code`),iO(253,`--color-disabled`),wg()(),jc(254,`td`),iO(255,`Cor principal no estado disabled`),wg(),jc(256,`td`)(257,`code`),iO(258,`var(--color-action-disabled)`),wg()()(),jc(259,`tr`)(260,`td`)(261,`code`),iO(262,`--background-color-disabled`),wg(),iO(263,` \xA0`),wg(),jc(264,`td`),iO(265,`Cor de background no estado disabled`),wg(),jc(266,`td`)(267,`code`),iO(268,`var(--color-transparent)`),wg()()()()()(),jc(269,`div`,7)(270,`h4`,8),iO(271,`Seletor`),wg(),jc(272,`pre`,9),iO(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),wg()(),jc(274,`h4`,10),iO(275,`Propriedades`),wg(),jc(276,`table`,11)(277,`tr`,12)(278,`th`,13),iO(279,`Nome`),wg(),jc(280,`th`,13),iO(281,`Tipo`),wg(),jc(282,`th`,13),iO(283,`Padrão`),wg(),jc(284,`th`,13),iO(285,`Descrição`),wg()(),jc(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),iO(290,` p-buttons`),nu(291,`br`),wg()()(),jc(292,`td`,18)(293,`code`,19),iO(294,`Array<PoButtonGroupItem>`),wg()(),jc(295,`td`,20),iO(296,`-`),wg(),jc(297,`td`,21)(298,`p`),iO(299,`Lista de botões.`),wg()()(),jc(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),iO(304,` p-size`),nu(305,`br`),wg()()(),jc(306,`td`,18)(307,`code`,22),iO(308,`string`),wg()(),jc(309,`td`,20)(310,`p`)(311,`code`),iO(312,`medium`),wg()()(),jc(313,`td`,21)(314,`em`)(315,`strong`),iO(316,`(opcional)`),wg()(),jc(317,`p`),iO(318,`Define o tamanho do componente:`),wg(),jc(319,`ul`)(320,`li`)(321,`code`),iO(322,`small`),wg(),iO(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),wg(),jc(324,`li`)(325,`code`),iO(326,`medium`),wg(),iO(327,`: altura de 44px.`),wg()(),jc(328,`blockquote`)(329,`p`),iO(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(331,`code`),iO(332,`medium`),wg(),iO(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(334,`a`,23),iO(335,`po-theme`),wg(),iO(336,`.`),wg()()()(),jc(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),iO(341,` p-toggle`),nu(342,`br`),wg()()(),jc(343,`td`,18)(344,`code`,22),iO(345,`string`),wg()(),jc(346,`td`,20)(347,`p`)(348,`code`),iO(349,`none`),wg()()(),jc(350,`td`,21)(351,`em`)(352,`strong`),iO(353,`(opcional)`),wg()(),jc(354,`p`),iO(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),jc(356,`code`),iO(357,`PoButtonGroupToggle`),wg(),iO(358,`:`),wg(),jc(359,`ul`)(360,`li`)(361,`code`),iO(362,`multiple`),wg(),iO(363,`: permite múltiplas seleções.`),wg(),jc(364,`li`)(365,`code`),iO(366,`none`),wg(),iO(367,`: desativa a funcionalidade de seleção.`),wg(),jc(368,`li`)(369,`code`),iO(370,`single`),wg(),iO(371,`: restringe a seleção a um único botão.`),wg()()()()(),jc(372,`h3`),iO(373,`Interfaces`),wg(),jc(374,`h4`,24)(375,`code`,5),iO(376,`PoButtonGroupItem`),wg()(),jc(377,`div`,2)(378,`p`),iO(379,`Interface para os itens do `),jc(380,`code`),iO(381,`po-button-group`),wg(),iO(382,`.`),wg()(),jc(383,`h4`,10),iO(384,`Propriedades`),wg(),jc(385,`table`,11)(386,`tr`,12)(387,`th`,13),iO(388,`Nome`),wg(),jc(389,`th`,13),iO(390,`Tipo`),wg(),jc(391,`th`,13),iO(392,`Descrição`),wg()(),jc(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),iO(397,` action`),nu(398,`br`),wg()()(),jc(399,`td`,18)(400,`code`,25),iO(401,`Function`),wg()(),jc(402,`td`,21)(403,`p`),iO(404,`Ação executada ao clicar sobre o botão.`),wg()()(),jc(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),iO(409,` disabled`),nu(410,`br`),wg()()(),jc(411,`td`,18)(412,`code`,26),iO(413,`boolean`),wg()(),jc(414,`td`,21)(415,`em`)(416,`strong`),iO(417,`(opcional)`),wg()(),jc(418,`p`),iO(419,`Se verdadeiro, define o botão como desabilitado.`),wg(),jc(420,`blockquote`)(421,`p`),iO(422,`Por padrão esta propriedade é `),jc(423,`code`),iO(424,`false`),wg(),iO(425,`.`),wg()()()(),jc(426,`tr`,14)(427,`td`,15)(428,`div`,16)(429,`span`,17),iO(430,` icon`),nu(431,`br`),wg()()(),jc(432,`td`,18)(433,`code`,22),iO(434,`string `),wg(),jc(435,`code`,27),iO(436,` TemplateRef<void>`),wg()(),jc(437,`td`,21)(438,`em`)(439,`strong`),iO(440,`(opcional)`),wg()(),jc(441,`p`),iO(442,`Ícone exibido ao lado esquerdo do label do botão.`),wg(),jc(443,`p`),iO(444,`É possível usar qualquer um dos ícones da `),jc(445,`a`,28),iO(446,`Biblioteca de ícones`),wg(),iO(447,`. conforme exemplo abaixo:`),wg(),jc(448,`pre`)(449,`code`),iO(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),wg()(),jc(451,`p`),iO(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(453,`em`),iO(454,`Font Awesome`),wg(),iO(455,`, da seguinte forma:`),wg(),jc(456,`pre`)(457,`code`),iO(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),wg()(),jc(459,`p`),iO(460,`Outra opção seria a customização do ícone através do `),jc(461,`code`),iO(462,`TemplateRef`),wg(),iO(463,`, conforme exemplo abaixo:`),wg(),jc(464,`p`),iO(465,`component.html:`),wg(),jc(466,`pre`)(467,`code`),iO(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(469,`p`),iO(470,`component.ts:`),wg(),jc(471,`pre`)(472,`code`),iO(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),wg()(),jc(474,`blockquote`)(475,`p`),iO(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(477,`code`),iO(478,`font-size: inherit`),wg(),iO(479,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(480,`tr`,14)(481,`td`,15)(482,`div`,16)(483,`span`,17),iO(484,` label`),nu(485,`br`),wg()()(),jc(486,`td`,18)(487,`code`,22),iO(488,`string`),wg()(),jc(489,`td`,21)(490,`em`)(491,`strong`),iO(492,`(opcional)`),wg()(),jc(493,`p`),iO(494,`Label do botão.`),wg()()(),jc(495,`tr`,14)(496,`td`,15)(497,`div`,16)(498,`span`,17),iO(499,` selected`),nu(500,`br`),wg()()(),jc(501,`td`,18)(502,`code`,26),iO(503,`boolean`),wg()(),jc(504,`td`,21)(505,`em`)(506,`strong`),iO(507,`(opcional)`),wg()(),jc(508,`p`),iO(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),jc(510,`code`),iO(511,`p-toggle`),wg(),iO(512,`.`),wg()()(),jc(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),iO(517,` tooltip`),nu(518,`br`),wg()()(),jc(519,`td`,18)(520,`code`,22),iO(521,`string`),wg()(),jc(522,`td`,21)(523,`em`)(524,`strong`),iO(525,`(opcional)`),wg()(),jc(526,`p`),iO(527,`Define a mensagem a ser exibida ao posicionar o `),jc(528,`em`),iO(529,`mouse`),wg(),iO(530,` sobre o botão.`),wg()()()(),jc(531,`h3`),iO(532,`Enums`),wg(),jc(533,`h4`,4)(534,`code`,5),iO(535,`PoButtonGroupToggle`),wg()(),jc(536,`div`,2)(537,`p`),iO(538,`Tipos de seleção (`),jc(539,`code`),iO(540,`p-toggle`),wg(),iO(541,`) disponíveis para o componente.`),wg()(),jc(542,`h4`,10),iO(543,`Propriedades`),wg(),jc(544,`table`,11)(545,`tr`,12)(546,`th`,13),iO(547,`Nome`),wg(),jc(548,`th`,13),iO(549,`Descrição`),wg()(),jc(550,`tr`,14)(551,`td`,15)(552,`div`,16)(553,`span`,17),iO(554,` Multiple`),nu(555,`br`),wg()()(),jc(556,`td`,21)(557,`p`),iO(558,`Seleção múltipla.`),wg()()(),jc(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),iO(563,` None`),nu(564,`br`),wg()()(),jc(565,`td`,21)(566,`p`),iO(567,`Seleção desabilitada.`),wg()()(),jc(568,`tr`,14)(569,`td`,15)(570,`div`,16)(571,`span`,17),iO(572,` Single`),nu(573,`br`),wg()()(),jc(574,`td`,21)(575,`p`),iO(576,`Seleção única.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var We=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Button Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-button-group-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-button-group-basic-view`)(6,`sample-po-button-group-labs-view`)(7,`sample-po-button-group-attendance-view`)(8,`sample-po-button-group-opening-service-ticket-view`)(9,`sample-po-button-group-post-view`),wg()()()),a&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,re,de,ce,ge,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe$1({type:i});static ɵinj=ue$1({imports:[C1.forChild(We),C1]})}return i})();var Pt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe$1({type:i});static ɵinj=ue$1({imports:[Ta,Ee]})}return i})();export{Pt as DocPoButtonGroupModule};