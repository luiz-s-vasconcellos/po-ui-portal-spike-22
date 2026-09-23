import{$r as Vx,An as wbe,Et as V8e,Gt as di,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,Nt as Y0e,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,X as KH,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,da as uo,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Tooltip`,`p-tooltip`,`po-tooltip`]],template:function(a,i){a&1&&ql(0,`po-button`,0)},dependencies:[Zt,di],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tooltip Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tooltip-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,fe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`},{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`}];ngOnInit(){this.restore()}restore(){this.tooltip=``,this.tooltipPosition=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-labs`]],standalone:!1,decls:12,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-md-4`,`po-lg-2`,`po-offset-md-4`,`po-offset-lg-5`,`po-offset-xl-5`],[`p-label`,`Po-Tooltip`,3,`p-tooltip`,`p-tooltip-position`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`tooltipPosition`,`p-label`,`Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let s=Vx();Ml(0,`div`,1)(1,`div`,2),ql(2,`po-button`,3),lg()(),ql(3,`po-divider`),Ml(4,`form`,null,0)(6,`div`,1)(7,`po-input`,4),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.tooltip,l)||(i.tooltip=l),Jy(l)}),lg(),f0(),lg(),Ml(8,`div`,1)(9,`po-radio-group`,5),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.tooltipPosition,l)||(i.tooltipPosition=l),Jy(l)}),lg(),f0(),lg(),Ml(10,`div`,1)(11,`po-button`,6),ht(`p-click`,function(){return i.restore()}),lg()()()}a&2&&(Up(2),cw(`p-tooltip`,i.tooltip)(`p-tooltip-position`,i.tooltipPosition),Up(5),Tw(`ngModel`,i.tooltip),p0(),Up(2),Tw(`ngModel`,i.tooltipPosition),cw(`p-options`,i.tooltipPositionOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,q0e,di],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tooltip Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tooltip-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return n})();var ve=[`formNewUser`];var se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success(`New user registered`),this.cancel()):this.poNotification.error(`Please fill in the required fields`)}initialize(){this.emailTooltip=`your_account@po-ui.com`,this.nameTooltip=`Enter full name`,this.passwordTooltip=`Password must contain at least 8 characters`,this.registrationTooltip=`The registration number is on the registration form`}static ɵfac=function(a){return new(a||n)(w(Eu))};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-new-user`]],viewQuery:function(a,i){if(a&1&&Zl(ve,7),a&2){let s;lo(s=uo())&&(i.formNewUser=s.first)}},standalone:!1,decls:16,vars:13,consts:[[`formNewUser`,`ngForm`],[1,`po-row`],[`p-primary-label`,`Cancel`,`p-secondary-label`,`Confirm`,`p-title`,`Register New User`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`],[`name`,`registration`,`p-clean`,``,`p-label`,`Registration`,`p-mask`,`99999-99/99`,`p-minlength`,`11`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-pattern`,`@po-ui.com`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`CPF`,`p-clean`,``,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-minlength`,`14`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`password`,`p-clean`,``,`p-label`,`Password`,`p-minlength`,`8`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`confirmPassword`,`p-clean`,``,`p-label`,`Confirm Password`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-pattern`]],template:function(a,i){if(a&1){let s=Vx();Ml(0,`div`,1)(1,`po-widget`,2),ht(`p-primary-action`,function(){return i.cancel()})(`p-secondary-action`,function(){return i.confirm()}),Ml(2,`form`,null,0)(4,`div`,1)(5,`po-input`,3),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.registration,l)||(i.registration=l),Jy(l)}),lg(),f0(),Ml(6,`po-email`,4),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.email,l)||(i.email=l),Jy(l)}),lg(),f0(),lg(),Ml(7,`div`,1)(8,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.name,l)||(i.name=l),Jy(l)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.CPF,l)||(i.CPF=l),Jy(l)}),lg(),f0(),lg(),Ml(10,`div`,1)(11,`po-datepicker`,7),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.birthDate,l)||(i.birthDate=l),Jy(l)}),lg(),f0(),Ml(12,`po-input`,8),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.genre,l)||(i.genre=l),Jy(l)}),lg(),f0(),lg(),Ml(13,`div`,1)(14,`po-password`,9),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.password,l)||(i.password=l),Jy(l)}),lg(),f0(),Ml(15,`po-password`,10),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.confirmPassword,l)||(i.confirmPassword=l),Jy(l)}),lg(),f0(),lg()()()()}a&2&&(Up(5),Tw(`ngModel`,i.registration),cw(`p-tooltip`,i.registrationTooltip),p0(),Up(),Tw(`ngModel`,i.email),cw(`p-tooltip`,i.emailTooltip),p0(),Up(2),Tw(`ngModel`,i.name),cw(`p-tooltip`,i.nameTooltip),p0(),Up(),Tw(`ngModel`,i.CPF),p0(),Up(2),Tw(`ngModel`,i.birthDate),p0(),Up(),Tw(`ngModel`,i.genre),p0(),Up(2),Tw(`ngModel`,i.password),cw(`p-tooltip`,i.passwordTooltip),p0(),Up(),Tw(`ngModel`,i.confirmPassword),cw(`p-pattern`,i.password),p0())},dependencies:[IY,wY,CY,Vk,kk,Y0e,KH,lU,wbe,$8e,di],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-new-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tooltip - New User`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tooltip-new-user`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Pe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-tooltip-doc`]],standalone:!1,decls:267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-popover?view=doc`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoTooltipModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo da diretiva Po-Tooltip.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoTooltipDirective`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),lg(),Ml(15,`p`),mN(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),lg(),Ml(17,`p`),mN(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Ml(19,`a`,6)(20,`strong`),mN(21,`po-popover`),lg()(),mN(22,`.`),lg(),Ml(23,`h4`),mN(24,`Tokens customizáveis`),lg(),Ml(25,`p`),mN(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(27,`blockquote`)(28,`p`),mN(29,`Para maiores informações, acesse o guia `),Ml(30,`a`,7),mN(31,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(32,`.`),lg()(),Ml(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),mN(37,`Propriedade`),lg(),Ml(38,`th`),mN(39,`Descrição`),lg(),Ml(40,`th`),mN(41,`Valor Padrão`),lg()()(),Ml(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),mN(46,`Default Values`),lg()(),ql(47,`td`)(48,`td`),lg(),Ml(49,`tr`)(50,`td`)(51,`code`),mN(52,`--border-radius`),lg(),mN(53,` \xA0`),lg(),Ml(54,`td`),mN(55,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(56,`td`)(57,`code`),mN(58,`var(--border-radius-md)`),lg()()(),Ml(59,`tr`)(60,`td`)(61,`code`),mN(62,`--color`),lg()(),Ml(63,`td`),mN(64,`Cor principal da tooltip`),lg(),Ml(65,`td`)(66,`code`),mN(67,`var(--color-neutral-dark-80)`),lg()()(),Ml(68,`tr`)(69,`td`)(70,`code`),mN(71,`--font-family`),lg()(),Ml(72,`td`),mN(73,`Família tipográfica usada`),lg(),Ml(74,`td`)(75,`code`),mN(76,`var(--font-family-theme)`),lg()()(),Ml(77,`tr`)(78,`td`)(79,`code`),mN(80,`--text-color`),lg()(),Ml(81,`td`),mN(82,`Cor do texto`),lg(),Ml(83,`td`)(84,`code`),mN(85,`var(--color-neutral-light-00)`),lg()()()()()(),Ml(86,`div`,8)(87,`h4`,9),mN(88,`Seletor`),lg(),Ml(89,`pre`,10),mN(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),lg()(),Ml(91,`h4`,11),mN(92,`Propriedades`),lg(),Ml(93,`table`,12)(94,`tr`,13)(95,`th`,14),mN(96,`Nome`),lg(),Ml(97,`th`,14),mN(98,`Tipo`),lg(),Ml(99,`th`,14),mN(100,`Padrão`),lg(),Ml(101,`th`,14),mN(102,`Descrição`),lg()(),Ml(103,`tr`,15)(104,`td`,16)(105,`div`,17)(106,`span`,18),mN(107,` p-append-in-body`),ql(108,`br`),lg()()(),Ml(109,`td`,19)(110,`code`,20),mN(111,`boolean`),lg()(),Ml(112,`td`,21)(113,`p`)(114,`code`),mN(115,`false`),lg()()(),Ml(116,`td`,22)(117,`em`)(118,`strong`),mN(119,`(opcional)`),lg()(),Ml(120,`p`),mN(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),lg()()(),Ml(122,`tr`,15)(123,`td`,16)(124,`div`,17)(125,`span`,18),mN(126,` p-hide-arrow`),ql(127,`br`),lg()()(),Ml(128,`td`,19)(129,`code`,20),mN(130,`boolean`),lg()(),Ml(131,`td`,21)(132,`p`)(133,`code`),mN(134,`false`),lg()()(),Ml(135,`td`,22)(136,`em`)(137,`strong`),mN(138,`(opcional)`),lg()(),Ml(139,`p`),mN(140,`Controla a exibição da seta de indicação da tooltip.`),lg(),Ml(141,`p`),mN(142,`Quando `),Ml(143,`code`),mN(144,`true`),lg(),mN(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Ml(146,`code`),mN(147,`false`),lg(),mN(148,`, a seta será exibida normalmente.`),lg(),Ml(149,`p`),mN(150,`Essa propriedade é útil em cenários onde a seta não é necessária ou pode interferir no layout da aplicação.`),lg()()(),Ml(151,`tr`,15)(152,`td`,16)(153,`div`,17)(154,`span`,18),mN(155,` p-inner-html`),ql(156,`br`),lg()()(),Ml(157,`td`,19)(158,`code`,20),mN(159,`boolean`),lg()(),Ml(160,`td`,21)(161,`p`)(162,`code`),mN(163,`false`),lg()()(),Ml(164,`td`,22)(165,`em`)(166,`strong`),mN(167,`(opcional)`),lg()(),Ml(168,`p`),mN(169,`Permite a renderização de conteúdo HTML dentro da tooltip.`),lg(),Ml(170,`p`),mN(171,`Quando `),Ml(172,`code`),mN(173,`true`),lg(),mN(174,`, o valor da propriedade `),Ml(175,`code`),mN(176,`tooltip`),lg(),mN(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Ml(178,`code`),mN(179,`false`),lg(),mN(180,`, o conteúdo será tratado como texto puro.`),lg()()(),Ml(181,`tr`,15)(182,`td`,16)(183,`div`,17)(184,`span`,18),mN(185,` p-tooltip`),ql(186,`br`),lg()()(),Ml(187,`td`,19)(188,`code`,23),mN(189,`string`),lg()(),Ml(190,`td`,21),mN(191,`-`),lg(),Ml(192,`td`,22)(193,`p`),mN(194,`Habilita e atribui um texto ao po-tooltip.`),lg(),Ml(195,`p`)(196,`strong`),mN(197,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()()()(),Ml(198,`tr`,15)(199,`td`,16)(200,`div`,17)(201,`span`,18),mN(202,` p-tooltip-position`),ql(203,`br`),lg()()(),Ml(204,`td`,19)(205,`code`,23),mN(206,`string`),lg()(),Ml(207,`td`,21)(208,`p`),mN(209,`bottom`),lg()(),Ml(210,`td`,22)(211,`em`)(212,`strong`),mN(213,`(opcional)`),lg()(),Ml(214,`p`),mN(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),lg(),Ml(216,`p`),mN(217,`Posições válidas:`),lg(),Ml(218,`ul`)(219,`li`)(220,`code`),mN(221,`right`),lg(),mN(222,`: Posiciona o po-tooltip no lado direito do componente alvo.`),lg(),Ml(223,`li`)(224,`code`),mN(225,`right-bottom`),lg(),mN(226,`: Posiciona o po-tooltip no lado direito inferior do componente alvo.`),lg(),Ml(227,`li`)(228,`code`),mN(229,`right-top`),lg(),mN(230,`: Posiciona o po-tooltip no lado direito superior do componente alvo.`),lg(),Ml(231,`li`)(232,`code`),mN(233,`bottom`),lg(),mN(234,`: Posiciona o po-tooltip abaixo do componente alvo.`),lg(),Ml(235,`li`)(236,`code`),mN(237,`bottom-left`),lg(),mN(238,`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.`),lg(),Ml(239,`li`)(240,`code`),mN(241,`bottom-right`),lg(),mN(242,`: Posiciona o po-tooltip abaixo e à direita do componente alvo.`),lg(),Ml(243,`li`)(244,`code`),mN(245,`left`),lg(),mN(246,`: Posiciona o po-tooltip no lado esquerdo do componente alvo.`),lg(),Ml(247,`li`)(248,`code`),mN(249,`left-top`),lg(),mN(250,`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.`),lg(),Ml(251,`li`)(252,`code`),mN(253,`left-bottom`),lg(),mN(254,`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.`),lg(),Ml(255,`li`)(256,`code`),mN(257,`top`),lg(),mN(258,`: Posiciona o po-tooltip acima do componente alvo.`),lg(),Ml(259,`li`)(260,`code`),mN(261,`top-right`),lg(),mN(262,`: Posiciona o po-tooltip acima e à direita do componente alvo.`),lg(),Ml(263,`li`)(264,`code`),mN(265,`top-left`),lg(),mN(266,`: Posiciona o po-tooltip acima e à esquerda do componente alvo.`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Tooltip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-tooltip-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-tooltip-basic-view`)(6,`sample-po-tooltip-labs-view`)(7,`sample-po-tooltip-new-user-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,me,de,ce],encapsulation:2,changeDetection:1})}return n})()}];var ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(xe),NL]})}return n})();var Ye=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,ge]})}return n})();export{Ye as DocPoTooltipModule};