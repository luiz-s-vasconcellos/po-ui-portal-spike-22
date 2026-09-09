import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Li as ht,Ni as gY,Nn as z0e,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,Yt as hbe,Zt as hi,_r as Ky,aa as uN,ei as Yl,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,la as uo,lr as Gl,nt as O8e,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Tooltip`,`p-tooltip`,`po-tooltip`]],template:function(a,i){a&1&&Gl(0,`po-button`,0)},dependencies:[Zt,hi],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tooltip Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tooltip-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,fe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`},{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`}];ngOnInit(){this.restore()}restore(){this.tooltip=``,this.tooltipPosition=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-labs`]],standalone:!1,decls:12,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-md-4`,`po-lg-2`,`po-offset-md-4`,`po-offset-lg-5`,`po-offset-xl-5`],[`p-label`,`Po-Tooltip`,3,`p-tooltip`,`p-tooltip-position`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`tooltipPosition`,`p-label`,`Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let s=Ax();Tl(0,`div`,1)(1,`div`,2),Gl(2,`po-button`,3),ag()(),Gl(3,`po-divider`),Tl(4,`form`,null,0)(6,`div`,1)(7,`po-input`,4),ww(`ngModelChange`,function(l){return Ky(s),uN(i.tooltip,l)||(i.tooltip=l),Xy(l)}),ag(),a0(),ag(),Tl(8,`div`,1)(9,`po-radio-group`,5),ww(`ngModelChange`,function(l){return Ky(s),uN(i.tooltipPosition,l)||(i.tooltipPosition=l),Xy(l)}),ag(),a0(),ag(),Tl(10,`div`,1)(11,`po-button`,6),ht(`p-click`,function(){return i.restore()}),ag()()()}a&2&&(jp(2),nw(`p-tooltip`,i.tooltip)(`p-tooltip-position`,i.tooltipPosition),jp(5),Ew(`ngModel`,i.tooltip),l0(),jp(2),Ew(`ngModel`,i.tooltipPosition),nw(`p-options`,i.tooltipPositionOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,L0e,hi],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tooltip Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tooltip-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return n})();var ve=[`formNewUser`];var se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success(`New user registered`),this.cancel()):this.poNotification.error(`Please fill in the required fields`)}initialize(){this.emailTooltip=`your_account@po-ui.com`,this.nameTooltip=`Enter full name`,this.passwordTooltip=`Password must contain at least 8 characters`,this.registrationTooltip=`The registration number is on the registration form`}static ɵfac=function(a){return new(a||n)(w(Eu))};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-new-user`]],viewQuery:function(a,i){if(a&1&&Yl(ve,7),a&2){let s;lo(s=uo())&&(i.formNewUser=s.first)}},standalone:!1,decls:16,vars:13,consts:[[`formNewUser`,`ngForm`],[1,`po-row`],[`p-primary-label`,`Cancel`,`p-secondary-label`,`Confirm`,`p-title`,`Register New User`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`],[`name`,`registration`,`p-clean`,``,`p-label`,`Registration`,`p-mask`,`99999-99/99`,`p-minlength`,`11`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-pattern`,`@po-ui.com`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`CPF`,`p-clean`,``,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-minlength`,`14`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`password`,`p-clean`,``,`p-label`,`Password`,`p-minlength`,`8`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`confirmPassword`,`p-clean`,``,`p-label`,`Confirm Password`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-pattern`]],template:function(a,i){if(a&1){let s=Ax();Tl(0,`div`,1)(1,`po-widget`,2),ht(`p-primary-action`,function(){return i.cancel()})(`p-secondary-action`,function(){return i.confirm()}),Tl(2,`form`,null,0)(4,`div`,1)(5,`po-input`,3),ww(`ngModelChange`,function(l){return Ky(s),uN(i.registration,l)||(i.registration=l),Xy(l)}),ag(),a0(),Tl(6,`po-email`,4),ww(`ngModelChange`,function(l){return Ky(s),uN(i.email,l)||(i.email=l),Xy(l)}),ag(),a0(),ag(),Tl(7,`div`,1)(8,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(s),uN(i.name,l)||(i.name=l),Xy(l)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(l){return Ky(s),uN(i.CPF,l)||(i.CPF=l),Xy(l)}),ag(),a0(),ag(),Tl(10,`div`,1)(11,`po-datepicker`,7),ww(`ngModelChange`,function(l){return Ky(s),uN(i.birthDate,l)||(i.birthDate=l),Xy(l)}),ag(),a0(),Tl(12,`po-input`,8),ww(`ngModelChange`,function(l){return Ky(s),uN(i.genre,l)||(i.genre=l),Xy(l)}),ag(),a0(),ag(),Tl(13,`div`,1)(14,`po-password`,9),ww(`ngModelChange`,function(l){return Ky(s),uN(i.password,l)||(i.password=l),Xy(l)}),ag(),a0(),Tl(15,`po-password`,10),ww(`ngModelChange`,function(l){return Ky(s),uN(i.confirmPassword,l)||(i.confirmPassword=l),Xy(l)}),ag(),a0(),ag()()()()}a&2&&(jp(5),Ew(`ngModel`,i.registration),nw(`p-tooltip`,i.registrationTooltip),l0(),jp(),Ew(`ngModel`,i.email),nw(`p-tooltip`,i.emailTooltip),l0(),jp(2),Ew(`ngModel`,i.name),nw(`p-tooltip`,i.nameTooltip),l0(),jp(),Ew(`ngModel`,i.CPF),l0(),jp(2),Ew(`ngModel`,i.birthDate),l0(),jp(),Ew(`ngModel`,i.genre),l0(),jp(2),Ew(`ngModel`,i.password),nw(`p-tooltip`,i.passwordTooltip),l0(),jp(),Ew(`ngModel`,i.confirmPassword),nw(`p-pattern`,i.password),l0())},dependencies:[yY,gY,mY,Ak,Tk,z0e,qH,iU,hbe,O8e,hi],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-new-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Tooltip - New User`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-tooltip-new-user`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Pe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-doc`]],standalone:!1,decls:267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-popover?view=doc`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoTooltipModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo da diretiva Po-Tooltip.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoTooltipDirective`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),ag(),Tl(15,`p`),cN(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),ag(),Tl(17,`p`),cN(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Tl(19,`a`,6)(20,`strong`),cN(21,`po-popover`),ag()(),cN(22,`.`),ag(),Tl(23,`h4`),cN(24,`Tokens customizáveis`),ag(),Tl(25,`p`),cN(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(27,`blockquote`)(28,`p`),cN(29,`Para maiores informações, acesse o guia `),Tl(30,`a`,7),cN(31,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(32,`.`),ag()(),Tl(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),cN(37,`Propriedade`),ag(),Tl(38,`th`),cN(39,`Descrição`),ag(),Tl(40,`th`),cN(41,`Valor Padrão`),ag()()(),Tl(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),cN(46,`Default Values`),ag()(),Gl(47,`td`)(48,`td`),ag(),Tl(49,`tr`)(50,`td`)(51,`code`),cN(52,`--border-radius`),ag(),cN(53,` \xA0`),ag(),Tl(54,`td`),cN(55,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(56,`td`)(57,`code`),cN(58,`var(--border-radius-md)`),ag()()(),Tl(59,`tr`)(60,`td`)(61,`code`),cN(62,`--color`),ag()(),Tl(63,`td`),cN(64,`Cor principal da tooltip`),ag(),Tl(65,`td`)(66,`code`),cN(67,`var(--color-neutral-dark-80)`),ag()()(),Tl(68,`tr`)(69,`td`)(70,`code`),cN(71,`--font-family`),ag()(),Tl(72,`td`),cN(73,`Família tipográfica usada`),ag(),Tl(74,`td`)(75,`code`),cN(76,`var(--font-family-theme)`),ag()()(),Tl(77,`tr`)(78,`td`)(79,`code`),cN(80,`--text-color`),ag()(),Tl(81,`td`),cN(82,`Cor do texto`),ag(),Tl(83,`td`)(84,`code`),cN(85,`var(--color-neutral-light-00)`),ag()()()()()(),Tl(86,`div`,8)(87,`h4`,9),cN(88,`Seletor`),ag(),Tl(89,`pre`,10),cN(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),ag()(),Tl(91,`h4`,11),cN(92,`Propriedades`),ag(),Tl(93,`table`,12)(94,`tr`,13)(95,`th`,14),cN(96,`Nome`),ag(),Tl(97,`th`,14),cN(98,`Tipo`),ag(),Tl(99,`th`,14),cN(100,`Padrão`),ag(),Tl(101,`th`,14),cN(102,`Descrição`),ag()(),Tl(103,`tr`,15)(104,`td`,16)(105,`div`,17)(106,`span`,18),cN(107,` p-append-in-body`),Gl(108,`br`),ag()()(),Tl(109,`td`,19)(110,`code`,20),cN(111,`boolean`),ag()(),Tl(112,`td`,21)(113,`p`)(114,`code`),cN(115,`false`),ag()()(),Tl(116,`td`,22)(117,`em`)(118,`strong`),cN(119,`(opcional)`),ag()(),Tl(120,`p`),cN(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),ag()()(),Tl(122,`tr`,15)(123,`td`,16)(124,`div`,17)(125,`span`,18),cN(126,` p-hide-arrow`),Gl(127,`br`),ag()()(),Tl(128,`td`,19)(129,`code`,20),cN(130,`boolean`),ag()(),Tl(131,`td`,21)(132,`p`)(133,`code`),cN(134,`false`),ag()()(),Tl(135,`td`,22)(136,`em`)(137,`strong`),cN(138,`(opcional)`),ag()(),Tl(139,`p`),cN(140,`Controla a exibição da seta de indicação da tooltip.`),ag(),Tl(141,`p`),cN(142,`Quando `),Tl(143,`code`),cN(144,`true`),ag(),cN(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Tl(146,`code`),cN(147,`false`),ag(),cN(148,`, a seta será exibida normalmente.`),ag(),Tl(149,`p`),cN(150,`Essa propriedade é útil em cenários onde a seta não é necessária ou pode interferir no layout da aplicação.`),ag()()(),Tl(151,`tr`,15)(152,`td`,16)(153,`div`,17)(154,`span`,18),cN(155,` p-inner-html`),Gl(156,`br`),ag()()(),Tl(157,`td`,19)(158,`code`,20),cN(159,`boolean`),ag()(),Tl(160,`td`,21)(161,`p`)(162,`code`),cN(163,`false`),ag()()(),Tl(164,`td`,22)(165,`em`)(166,`strong`),cN(167,`(opcional)`),ag()(),Tl(168,`p`),cN(169,`Permite a renderização de conteúdo HTML dentro da tooltip.`),ag(),Tl(170,`p`),cN(171,`Quando `),Tl(172,`code`),cN(173,`true`),ag(),cN(174,`, o valor da propriedade `),Tl(175,`code`),cN(176,`tooltip`),ag(),cN(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Tl(178,`code`),cN(179,`false`),ag(),cN(180,`, o conteúdo será tratado como texto puro.`),ag()()(),Tl(181,`tr`,15)(182,`td`,16)(183,`div`,17)(184,`span`,18),cN(185,` p-tooltip`),Gl(186,`br`),ag()()(),Tl(187,`td`,19)(188,`code`,23),cN(189,`string`),ag()(),Tl(190,`td`,21),cN(191,`-`),ag(),Tl(192,`td`,22)(193,`p`),cN(194,`Habilita e atribui um texto ao po-tooltip.`),ag(),Tl(195,`p`)(196,`strong`),cN(197,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()()()(),Tl(198,`tr`,15)(199,`td`,16)(200,`div`,17)(201,`span`,18),cN(202,` p-tooltip-position`),Gl(203,`br`),ag()()(),Tl(204,`td`,19)(205,`code`,23),cN(206,`string`),ag()(),Tl(207,`td`,21)(208,`p`),cN(209,`bottom`),ag()(),Tl(210,`td`,22)(211,`em`)(212,`strong`),cN(213,`(opcional)`),ag()(),Tl(214,`p`),cN(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ag(),Tl(216,`p`),cN(217,`Posições válidas:`),ag(),Tl(218,`ul`)(219,`li`)(220,`code`),cN(221,`right`),ag(),cN(222,`: Posiciona o po-tooltip no lado direito do componente alvo.`),ag(),Tl(223,`li`)(224,`code`),cN(225,`right-bottom`),ag(),cN(226,`: Posiciona o po-tooltip no lado direito inferior do componente alvo.`),ag(),Tl(227,`li`)(228,`code`),cN(229,`right-top`),ag(),cN(230,`: Posiciona o po-tooltip no lado direito superior do componente alvo.`),ag(),Tl(231,`li`)(232,`code`),cN(233,`bottom`),ag(),cN(234,`: Posiciona o po-tooltip abaixo do componente alvo.`),ag(),Tl(235,`li`)(236,`code`),cN(237,`bottom-left`),ag(),cN(238,`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.`),ag(),Tl(239,`li`)(240,`code`),cN(241,`bottom-right`),ag(),cN(242,`: Posiciona o po-tooltip abaixo e à direita do componente alvo.`),ag(),Tl(243,`li`)(244,`code`),cN(245,`left`),ag(),cN(246,`: Posiciona o po-tooltip no lado esquerdo do componente alvo.`),ag(),Tl(247,`li`)(248,`code`),cN(249,`left-top`),ag(),cN(250,`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.`),ag(),Tl(251,`li`)(252,`code`),cN(253,`left-bottom`),ag(),cN(254,`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.`),ag(),Tl(255,`li`)(256,`code`),cN(257,`top`),ag(),cN(258,`: Posiciona o po-tooltip acima do componente alvo.`),ag(),Tl(259,`li`)(260,`code`),cN(261,`top-right`),ag(),cN(262,`: Posiciona o po-tooltip acima e à direita do componente alvo.`),ag(),Tl(263,`li`)(264,`code`),cN(265,`top-left`),ag(),cN(266,`: Posiciona o po-tooltip acima e à esquerda do componente alvo.`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Tooltip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-tooltip-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-tooltip-basic-view`)(6,`sample-po-tooltip-labs-view`)(7,`sample-po-tooltip-new-user-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,me,de,ce],encapsulation:2,changeDetection:1})}return n})()}];var ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(xe),bL]})}return n})();var Ye=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,ge]})}return n})();export{Ye as DocPoTooltipModule};