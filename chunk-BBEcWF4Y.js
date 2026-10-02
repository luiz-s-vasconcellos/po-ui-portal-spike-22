import{Br as RE,Di as he,Dt as aae,Hn as AN,It as eoe,Kn as BP,Li as kL,Q as Pze,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Tt as _i,Ui as m0,Un as Ac,Wi as mg,Xn as C9,Yn as Bx,ai as aN,b as Au,dr as Hp,dt as Tte,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,ht as V3,i as _a,ki as ho,la as ug,li as cE,lr as Hn,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,vr as Jv,wt as _4,xi as fo}from"./main-TFA52GHY.js";var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-tooltip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Tooltip`,`p-tooltip`,`po-tooltip`]],template:function(a,i){a&1&&Kc(0,`po-button`,0)},dependencies:[ni,_i],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-tooltip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tooltip Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tooltip-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,fe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`},{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`}];ngOnInit(){this.restore()}restore(){this.tooltip=``,this.tooltipPosition=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-tooltip-labs`]],standalone:!1,decls:12,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-md-4`,`po-lg-2`,`po-offset-md-4`,`po-offset-lg-5`,`po-offset-xl-5`],[`p-label`,`Po-Tooltip`,3,`p-tooltip`,`p-tooltip-position`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`tooltipPosition`,`p-label`,`Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let s=Bx();Ac(0,`div`,1)(1,`div`,2),Kc(2,`po-button`,3),ug()(),Kc(3,`po-divider`),Ac(4,`form`,null,0)(6,`div`,1)(7,`po-input`,4),RE(`ngModelChange`,function(l){return Jv(s),DN(i.tooltip,l)||(i.tooltip=l),e_(l)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-radio-group`,5),RE(`ngModelChange`,function(l){return Jv(s),DN(i.tooltipPosition,l)||(i.tooltipPosition=l),e_(l)}),ug(),p0(),ug(),Ac(10,`div`,1)(11,`po-button`,6),pt(`p-click`,function(){return i.restore()}),ug()()()}a&2&&(Hp(2),cE(`p-tooltip`,i.tooltip)(`p-tooltip-position`,i.tooltipPosition),Hp(5),TE(`ngModel`,i.tooltip),m0(),Hp(2),TE(`ngModel`,i.tooltipPosition),cE(`p-options`,i.tooltipPositionOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,_4,Cte,_i],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-tooltip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tooltip Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <div class="po-md-4 po-lg-2 po-offset-md-4 po-offset-lg-5 po-offset-xl-5">
    <po-button [p-tooltip]="tooltip" [p-tooltip-position]="tooltipPosition" p-label="Po-Tooltip"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-12" name="tooltip" [(ngModel)]="tooltip" p-clean p-label="Tooltip"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="tooltipPosition"
      [(ngModel)]="tooltipPosition"
      p-label="Position"
      [p-options]="tooltipPositionOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-labs',
  templateUrl: './sample-po-tooltip-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipLabsComponent implements OnInit {
  tooltip: string;
  tooltipPosition: string;

  public readonly tooltipPositionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.tooltip = '';
    this.tooltipPosition = undefined;
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tooltip-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,re],encapsulation:2,changeDetection:1})}return n})();var ve=[`formNewUser`];var se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success(`New user registered`),this.cancel()):this.poNotification.error(`Please fill in the required fields`)}initialize(){this.emailTooltip=`your_account@po-ui.com`,this.nameTooltip=`Enter full name`,this.passwordTooltip=`Password must contain at least 8 characters`,this.registrationTooltip=`The registration number is on the registration form`}static ɵfac=function(a){return new(a||n)(E(Au))};static ɵcmp=Hn({type:n,selectors:[[`sample-po-tooltip-new-user`]],viewQuery:function(a,i){if(a&1&&Xc(ve,7),a&2){let s;fo(s=ho())&&(i.formNewUser=s.first)}},standalone:!1,decls:16,vars:13,consts:[[`formNewUser`,`ngForm`],[1,`po-row`],[`p-primary-label`,`Cancel`,`p-secondary-label`,`Confirm`,`p-title`,`Register New User`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`],[`name`,`registration`,`p-clean`,``,`p-label`,`Registration`,`p-mask`,`99999-99/99`,`p-minlength`,`11`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-pattern`,`@po-ui.com`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`CPF`,`p-clean`,``,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-minlength`,`14`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`password`,`p-clean`,``,`p-label`,`Password`,`p-minlength`,`8`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`confirmPassword`,`p-clean`,``,`p-label`,`Confirm Password`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-pattern`]],template:function(a,i){if(a&1){let s=Bx();Ac(0,`div`,1)(1,`po-widget`,2),pt(`p-primary-action`,function(){return i.cancel()})(`p-secondary-action`,function(){return i.confirm()}),Ac(2,`form`,null,0)(4,`div`,1)(5,`po-input`,3),RE(`ngModelChange`,function(l){return Jv(s),DN(i.registration,l)||(i.registration=l),e_(l)}),ug(),p0(),Ac(6,`po-email`,4),RE(`ngModelChange`,function(l){return Jv(s),DN(i.email,l)||(i.email=l),e_(l)}),ug(),p0(),ug(),Ac(7,`div`,1)(8,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(s),DN(i.name,l)||(i.name=l),e_(l)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(l){return Jv(s),DN(i.CPF,l)||(i.CPF=l),e_(l)}),ug(),p0(),ug(),Ac(10,`div`,1)(11,`po-datepicker`,7),RE(`ngModelChange`,function(l){return Jv(s),DN(i.birthDate,l)||(i.birthDate=l),e_(l)}),ug(),p0(),Ac(12,`po-input`,8),RE(`ngModelChange`,function(l){return Jv(s),DN(i.genre,l)||(i.genre=l),e_(l)}),ug(),p0(),ug(),Ac(13,`div`,1)(14,`po-password`,9),RE(`ngModelChange`,function(l){return Jv(s),DN(i.password,l)||(i.password=l),e_(l)}),ug(),p0(),Ac(15,`po-password`,10),RE(`ngModelChange`,function(l){return Jv(s),DN(i.confirmPassword,l)||(i.confirmPassword=l),e_(l)}),ug(),p0(),ug()()()()}a&2&&(Hp(5),TE(`ngModel`,i.registration),cE(`p-tooltip`,i.registrationTooltip),m0(),Hp(),TE(`ngModel`,i.email),cE(`p-tooltip`,i.emailTooltip),m0(),Hp(2),TE(`ngModel`,i.name),cE(`p-tooltip`,i.nameTooltip),m0(),Hp(),TE(`ngModel`,i.CPF),m0(),Hp(2),TE(`ngModel`,i.birthDate),m0(),Hp(),TE(`ngModel`,i.genre),m0(),Hp(2),TE(`ngModel`,i.password),cE(`p-tooltip`,i.passwordTooltip),m0(),Hp(),TE(`ngModel`,i.confirmPassword),cE(`p-pattern`,i.password),m0())},dependencies:[b9,D9,C9,BP,LP,Tte,V3,_4,eoe,Pze,_i],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-tooltip-new-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tooltip - New User`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-widget
    class="po-md-12"
    p-primary-label="Cancel"
    p-secondary-label="Confirm"
    p-title="Register New User"
    (p-primary-action)="cancel()"
    (p-secondary-action)="confirm()"
  >
    <form #formNewUser="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="registration"
          [(ngModel)]="registration"
          p-clean
          p-label="Registration"
          p-mask="99999-99/99"
          p-minlength="11"
          p-required
          [p-tooltip]="registrationTooltip"
        >
        </po-input>

        <po-email
          class="po-md-6"
          name="email"
          [(ngModel)]="email"
          p-clean
          p-label="Email"
          p-pattern="@po-ui.com"
          p-required
          [p-tooltip]="emailTooltip"
        >
        </po-email>
      </div>

      <div class="po-row">
        <po-input
          class="po-md-6"
          name="name"
          [(ngModel)]="name"
          p-clean
          p-label="Name"
          p-required
          [p-tooltip]="nameTooltip"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="CPF"
          [(ngModel)]="CPF"
          p-clean
          p-label="CPF"
          p-mask="999.999.999-99"
          p-minlength="14"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
        </po-datepicker>

        <po-input class="po-md-6" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
      </div>

      <div class="po-row">
        <po-password
          class="po-md-6"
          name="password"
          [(ngModel)]="password"
          p-clean
          p-label="Password"
          p-minlength="8"
          p-required
          [p-tooltip]="passwordTooltip"
        >
        </po-password>

        <po-password
          class="po-md-6"
          name="confirmPassword"
          [(ngModel)]="confirmPassword"
          p-clean
          p-label="Confirm Password"
          p-required
          [p-pattern]="password"
        >
        </po-password>
      </div>
    </form>
  </po-widget>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-new-user',
  templateUrl: './sample-po-tooltip-new-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipNewUserComponent implements OnInit {
  @ViewChild('formNewUser', { static: true }) formNewUser: UntypedFormControl;

  birthDate: Date;
  confirmPassword: string;
  CPF: string;
  email: string;
  emailTooltip: string;
  genre: string;
  name: string;
  nameTooltip: string;
  password: string;
  passwordTooltip: string;
  registration: number;
  registrationTooltip: string;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.formNewUser.reset();
  }

  confirm() {
    if (this.formNewUser.valid) {
      this.poNotification.success(\`New user registered\`);
      this.cancel();
    } else {
      this.poNotification.error(\`Please fill in the required fields\`);
    }
  }

  initialize() {
    this.emailTooltip = 'your_account@po-ui.com';
    this.nameTooltip = 'Enter full name';
    this.passwordTooltip = 'Password must contain at least 8 characters';
    this.registrationTooltip = 'The registration number is on the registration form';
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tooltip-new-user`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Pe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-tooltip-doc`]],standalone:!1,decls:267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-popover?view=doc`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTooltipModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo da diretiva Po-Tooltip.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoTooltipDirective`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),ug(),Ac(15,`p`),vN(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),ug(),Ac(17,`p`),vN(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Ac(19,`a`,6)(20,`strong`),vN(21,`po-popover`),ug()(),vN(22,`.`),ug(),Ac(23,`h4`),vN(24,`Tokens customizáveis`),ug(),Ac(25,`p`),vN(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(27,`blockquote`)(28,`p`),vN(29,`Para maiores informações, acesse o guia `),Ac(30,`a`,7),vN(31,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(32,`.`),ug()(),Ac(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),vN(37,`Propriedade`),ug(),Ac(38,`th`),vN(39,`Descrição`),ug(),Ac(40,`th`),vN(41,`Valor Padrão`),ug()()(),Ac(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),vN(46,`Default Values`),ug()(),Kc(47,`td`)(48,`td`),ug(),Ac(49,`tr`)(50,`td`)(51,`code`),vN(52,`--border-radius`),ug(),vN(53,` \xA0`),ug(),Ac(54,`td`),vN(55,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(56,`td`)(57,`code`),vN(58,`var(--border-radius-md)`),ug()()(),Ac(59,`tr`)(60,`td`)(61,`code`),vN(62,`--color`),ug()(),Ac(63,`td`),vN(64,`Cor principal da tooltip`),ug(),Ac(65,`td`)(66,`code`),vN(67,`var(--color-neutral-dark-80)`),ug()()(),Ac(68,`tr`)(69,`td`)(70,`code`),vN(71,`--font-family`),ug()(),Ac(72,`td`),vN(73,`Família tipográfica usada`),ug(),Ac(74,`td`)(75,`code`),vN(76,`var(--font-family-theme)`),ug()()(),Ac(77,`tr`)(78,`td`)(79,`code`),vN(80,`--text-color`),ug()(),Ac(81,`td`),vN(82,`Cor do texto`),ug(),Ac(83,`td`)(84,`code`),vN(85,`var(--color-neutral-light-00)`),ug()()()()()(),Ac(86,`div`,8)(87,`h4`,9),vN(88,`Seletor`),ug(),Ac(89,`pre`,10),vN(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),ug()(),Ac(91,`h4`,11),vN(92,`Propriedades`),ug(),Ac(93,`table`,12)(94,`tr`,13)(95,`th`,14),vN(96,`Nome`),ug(),Ac(97,`th`,14),vN(98,`Tipo`),ug(),Ac(99,`th`,14),vN(100,`Padrão`),ug(),Ac(101,`th`,14),vN(102,`Descrição`),ug()(),Ac(103,`tr`,15)(104,`td`,16)(105,`div`,17)(106,`span`,18),vN(107,` p-append-in-body`),Kc(108,`br`),ug()()(),Ac(109,`td`,19)(110,`code`,20),vN(111,`boolean`),ug()(),Ac(112,`td`,21)(113,`p`)(114,`code`),vN(115,`false`),ug()()(),Ac(116,`td`,22)(117,`em`)(118,`strong`),vN(119,`(opcional)`),ug()(),Ac(120,`p`),vN(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),ug()()(),Ac(122,`tr`,15)(123,`td`,16)(124,`div`,17)(125,`span`,18),vN(126,` p-hide-arrow`),Kc(127,`br`),ug()()(),Ac(128,`td`,19)(129,`code`,20),vN(130,`boolean`),ug()(),Ac(131,`td`,21)(132,`p`)(133,`code`),vN(134,`false`),ug()()(),Ac(135,`td`,22)(136,`em`)(137,`strong`),vN(138,`(opcional)`),ug()(),Ac(139,`p`),vN(140,`Controla a exibição da seta de indicação da tooltip.`),ug(),Ac(141,`p`),vN(142,`Quando `),Ac(143,`code`),vN(144,`true`),ug(),vN(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Ac(146,`code`),vN(147,`false`),ug(),vN(148,`, a seta será exibida normalmente.`),ug(),Ac(149,`p`),vN(150,`Essa propriedade é útil em cenários onde a seta não é necessária ou pode interferir no layout da aplicação.`),ug()()(),Ac(151,`tr`,15)(152,`td`,16)(153,`div`,17)(154,`span`,18),vN(155,` p-inner-html`),Kc(156,`br`),ug()()(),Ac(157,`td`,19)(158,`code`,20),vN(159,`boolean`),ug()(),Ac(160,`td`,21)(161,`p`)(162,`code`),vN(163,`false`),ug()()(),Ac(164,`td`,22)(165,`em`)(166,`strong`),vN(167,`(opcional)`),ug()(),Ac(168,`p`),vN(169,`Permite a renderização de conteúdo HTML dentro da tooltip.`),ug(),Ac(170,`p`),vN(171,`Quando `),Ac(172,`code`),vN(173,`true`),ug(),vN(174,`, o valor da propriedade `),Ac(175,`code`),vN(176,`tooltip`),ug(),vN(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Ac(178,`code`),vN(179,`false`),ug(),vN(180,`, o conteúdo será tratado como texto puro.`),ug()()(),Ac(181,`tr`,15)(182,`td`,16)(183,`div`,17)(184,`span`,18),vN(185,` p-tooltip`),Kc(186,`br`),ug()()(),Ac(187,`td`,19)(188,`code`,23),vN(189,`string`),ug()(),Ac(190,`td`,21),vN(191,`-`),ug(),Ac(192,`td`,22)(193,`p`),vN(194,`Habilita e atribui um texto ao po-tooltip.`),ug(),Ac(195,`p`)(196,`strong`),vN(197,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()()()(),Ac(198,`tr`,15)(199,`td`,16)(200,`div`,17)(201,`span`,18),vN(202,` p-tooltip-position`),Kc(203,`br`),ug()()(),Ac(204,`td`,19)(205,`code`,23),vN(206,`string`),ug()(),Ac(207,`td`,21)(208,`p`),vN(209,`bottom`),ug()(),Ac(210,`td`,22)(211,`em`)(212,`strong`),vN(213,`(opcional)`),ug()(),Ac(214,`p`),vN(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ug(),Ac(216,`p`),vN(217,`Posições válidas:`),ug(),Ac(218,`ul`)(219,`li`)(220,`code`),vN(221,`right`),ug(),vN(222,`: Posiciona o po-tooltip no lado direito do componente alvo.`),ug(),Ac(223,`li`)(224,`code`),vN(225,`right-bottom`),ug(),vN(226,`: Posiciona o po-tooltip no lado direito inferior do componente alvo.`),ug(),Ac(227,`li`)(228,`code`),vN(229,`right-top`),ug(),vN(230,`: Posiciona o po-tooltip no lado direito superior do componente alvo.`),ug(),Ac(231,`li`)(232,`code`),vN(233,`bottom`),ug(),vN(234,`: Posiciona o po-tooltip abaixo do componente alvo.`),ug(),Ac(235,`li`)(236,`code`),vN(237,`bottom-left`),ug(),vN(238,`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.`),ug(),Ac(239,`li`)(240,`code`),vN(241,`bottom-right`),ug(),vN(242,`: Posiciona o po-tooltip abaixo e à direita do componente alvo.`),ug(),Ac(243,`li`)(244,`code`),vN(245,`left`),ug(),vN(246,`: Posiciona o po-tooltip no lado esquerdo do componente alvo.`),ug(),Ac(247,`li`)(248,`code`),vN(249,`left-top`),ug(),vN(250,`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.`),ug(),Ac(251,`li`)(252,`code`),vN(253,`left-bottom`),ug(),vN(254,`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.`),ug(),Ac(255,`li`)(256,`code`),vN(257,`top`),ug(),vN(258,`: Posiciona o po-tooltip acima do componente alvo.`),ug(),Ac(259,`li`)(260,`code`),vN(261,`top-right`),ug(),vN(262,`: Posiciona o po-tooltip acima e à direita do componente alvo.`),ug(),Ac(263,`li`)(264,`code`),vN(265,`top-left`),ug(),vN(266,`: Posiciona o po-tooltip acima e à esquerda do componente alvo.`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Tooltip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-tooltip-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-tooltip-basic-view`)(6,`sample-po-tooltip-labs-view`)(7,`sample-po-tooltip-new-user-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,pe,me,de,ce],encapsulation:2,changeDetection:1})}return n})()}];var ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(xe),kL]})}return n})();var Ye=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,ge]})}return n})();export{Ye as DocPoTooltipModule};