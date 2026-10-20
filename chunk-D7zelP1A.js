import{$r as Zn,An as uoe,Bn as zu,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,It as _i,Ji as qx,Jn as C1,K as K3,Kn as Ag,Pi as mt,Ri as nu,Si as iu,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,et as Noe,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,ut as Rte,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ae=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-tooltip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Tooltip`,`p-tooltip`,`po-tooltip`]],template:function(a,i){a&1&&nu(0,`po-button`,0)},dependencies:[ni,_i],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-tooltip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Tooltip Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tooltip-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,fe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`},{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`}];ngOnInit(){this.restore()}restore(){this.tooltip=``,this.tooltipPosition=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-tooltip-labs`]],standalone:!1,decls:12,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-md-4`,`po-lg-2`,`po-offset-md-4`,`po-offset-lg-5`,`po-offset-xl-5`],[`p-label`,`Po-Tooltip`,3,`p-tooltip`,`p-tooltip-position`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`tooltipPosition`,`p-label`,`Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Sx();jc(0,`div`,1)(1,`div`,2),nu(2,`po-button`,3),wg()(),nu(3,`po-divider`),jc(4,`form`,null,0)(6,`div`,1)(7,`po-input`,4),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.tooltip,l)||(i.tooltip=l),v_(l)}),wg()(),jc(8,`div`,1)(9,`po-radio-group`,5),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.tooltipPosition,l)||(i.tooltipPosition=l),v_(l)}),wg()(),jc(10,`div`,1)(11,`po-button`,6),mt(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(rg(2),jE(`p-tooltip`,i.tooltip)(`p-tooltip-position`,i.tooltipPosition),rg(5),ib(`ngModel`,i.tooltip),t0(),rg(2),ib(`ngModel`,i.tooltipPosition),jE(`p-options`,i.tooltipPositionOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,Ote,_i],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-tooltip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Tooltip Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tooltip-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,re],encapsulation:2,changeDetection:1})}return n})();var ve=[`formNewUser`];var me=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(s){this.poNotification=s}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success(`New user registered`),this.cancel()):this.poNotification.error(`Please fill in the required fields`)}initialize(){this.emailTooltip=`your_account@po-ui.com`,this.nameTooltip=`Enter full name`,this.passwordTooltip=`Password must contain at least 8 characters`,this.registrationTooltip=`The registration number is on the registration form`}static ɵfac=function(a){return new(a||n)(b(zu))};static ɵcmp=Zn({type:n,selectors:[[`sample-po-tooltip-new-user`]],viewQuery:function(a,i){if(a&1&&iu(ve,7),a&2){let m;vo(m=_o())&&(i.formNewUser=m.first)}},standalone:!1,decls:16,vars:13,consts:[[`formNewUser`,`ngForm`],[1,`po-row`],[`p-primary-label`,`Cancel`,`p-secondary-label`,`Confirm`,`p-title`,`Register New User`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`],[`name`,`registration`,`p-clean`,``,`p-label`,`Registration`,`p-mask`,`99999-99/99`,`p-minlength`,`11`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-pattern`,`@po-ui.com`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`CPF`,`p-clean`,``,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-minlength`,`14`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`password`,`p-clean`,``,`p-label`,`Password`,`p-minlength`,`8`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`confirmPassword`,`p-clean`,``,`p-label`,`Confirm Password`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-pattern`]],template:function(a,i){if(a&1){let m=Sx();jc(0,`div`,1)(1,`po-widget`,2),mt(`p-primary-action`,function(){return i.cancel()})(`p-secondary-action`,function(){return i.confirm()}),jc(2,`form`,null,0)(4,`div`,1)(5,`po-input`,3),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.registration,l)||(i.registration=l),v_(l)}),wg(),jc(6,`po-email`,4),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.email,l)||(i.email=l),v_(l)}),wg()(),jc(7,`div`,1)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.name,l)||(i.name=l),v_(l)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.CPF,l)||(i.CPF=l),v_(l)}),wg()(),jc(10,`div`,1)(11,`po-datepicker`,7),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.birthDate,l)||(i.birthDate=l),v_(l)}),wg(),jc(12,`po-input`,8),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.genre,l)||(i.genre=l),v_(l)}),wg()(),jc(13,`div`,1)(14,`po-password`,9),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.password,l)||(i.password=l),v_(l)}),wg(),jc(15,`po-password`,10),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.confirmPassword,l)||(i.confirmPassword=l),v_(l)}),wg()()()()()}a&2&&(rg(5),ib(`ngModel`,i.registration),jE(`p-tooltip`,i.registrationTooltip),t0(),rg(),ib(`ngModel`,i.email),jE(`p-tooltip`,i.emailTooltip),t0(),rg(2),ib(`ngModel`,i.name),jE(`p-tooltip`,i.nameTooltip),t0(),rg(),ib(`ngModel`,i.CPF),t0(),rg(2),ib(`ngModel`,i.birthDate),t0(),rg(),ib(`ngModel`,i.genre),t0(),rg(2),ib(`ngModel`,i.password),jE(`p-tooltip`,i.passwordTooltip),t0(),rg(),ib(`ngModel`,i.confirmPassword),jE(`p-pattern`,i.password),t0())},dependencies:[wK,CK,EK,TF,EF,Rte,K3,A5,uoe,Noe,_i],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-tooltip-new-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Tooltip - New User`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tooltip-new-user`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Pe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-tooltip-doc`]],standalone:!1,decls:267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-popover?view=doc`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoTooltipModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo da diretiva Po-Tooltip.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoTooltipDirective`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),wg(),jc(15,`p`),iO(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),wg(),jc(17,`p`),iO(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),jc(19,`a`,6)(20,`strong`),iO(21,`po-popover`),wg()(),iO(22,`.`),wg(),jc(23,`h4`),iO(24,`Tokens customizáveis`),wg(),jc(25,`p`),iO(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(27,`blockquote`)(28,`p`),iO(29,`Para maiores informações, acesse o guia `),jc(30,`a`,7),iO(31,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(32,`.`),wg()(),jc(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),iO(37,`Propriedade`),wg(),jc(38,`th`),iO(39,`Descrição`),wg(),jc(40,`th`),iO(41,`Valor Padrão`),wg()()(),jc(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),iO(46,`Default Values`),wg()(),nu(47,`td`)(48,`td`),wg(),jc(49,`tr`)(50,`td`)(51,`code`),iO(52,`--border-radius`),wg(),iO(53,` \xA0`),wg(),jc(54,`td`),iO(55,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(56,`td`)(57,`code`),iO(58,`var(--border-radius-md)`),wg()()(),jc(59,`tr`)(60,`td`)(61,`code`),iO(62,`--color`),wg()(),jc(63,`td`),iO(64,`Cor principal da tooltip`),wg(),jc(65,`td`)(66,`code`),iO(67,`var(--color-neutral-dark-80)`),wg()()(),jc(68,`tr`)(69,`td`)(70,`code`),iO(71,`--font-family`),wg()(),jc(72,`td`),iO(73,`Família tipográfica usada`),wg(),jc(74,`td`)(75,`code`),iO(76,`var(--font-family-theme)`),wg()()(),jc(77,`tr`)(78,`td`)(79,`code`),iO(80,`--text-color`),wg()(),jc(81,`td`),iO(82,`Cor do texto`),wg(),jc(83,`td`)(84,`code`),iO(85,`var(--color-neutral-light-00)`),wg()()()()()(),jc(86,`div`,8)(87,`h4`,9),iO(88,`Seletor`),wg(),jc(89,`pre`,10),iO(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),wg()(),jc(91,`h4`,11),iO(92,`Propriedades`),wg(),jc(93,`table`,12)(94,`tr`,13)(95,`th`,14),iO(96,`Nome`),wg(),jc(97,`th`,14),iO(98,`Tipo`),wg(),jc(99,`th`,14),iO(100,`Padrão`),wg(),jc(101,`th`,14),iO(102,`Descrição`),wg()(),jc(103,`tr`,15)(104,`td`,16)(105,`div`,17)(106,`span`,18),iO(107,` p-append-in-body`),nu(108,`br`),wg()()(),jc(109,`td`,19)(110,`code`,20),iO(111,`boolean`),wg()(),jc(112,`td`,21)(113,`p`)(114,`code`),iO(115,`false`),wg()()(),jc(116,`td`,22)(117,`em`)(118,`strong`),iO(119,`(opcional)`),wg()(),jc(120,`p`),iO(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),wg()()(),jc(122,`tr`,15)(123,`td`,16)(124,`div`,17)(125,`span`,18),iO(126,` p-hide-arrow`),nu(127,`br`),wg()()(),jc(128,`td`,19)(129,`code`,20),iO(130,`boolean`),wg()(),jc(131,`td`,21)(132,`p`)(133,`code`),iO(134,`false`),wg()()(),jc(135,`td`,22)(136,`em`)(137,`strong`),iO(138,`(opcional)`),wg()(),jc(139,`p`),iO(140,`Controla a exibição da seta de indicação da tooltip.`),wg(),jc(141,`p`),iO(142,`Quando `),jc(143,`code`),iO(144,`true`),wg(),iO(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),jc(146,`code`),iO(147,`false`),wg(),iO(148,`, a seta será exibida normalmente.`),wg(),jc(149,`p`),iO(150,`Essa propriedade é útil em cenários onde a seta não é necessária ou pode interferir no layout da aplicação.`),wg()()(),jc(151,`tr`,15)(152,`td`,16)(153,`div`,17)(154,`span`,18),iO(155,` p-inner-html`),nu(156,`br`),wg()()(),jc(157,`td`,19)(158,`code`,20),iO(159,`boolean`),wg()(),jc(160,`td`,21)(161,`p`)(162,`code`),iO(163,`false`),wg()()(),jc(164,`td`,22)(165,`em`)(166,`strong`),iO(167,`(opcional)`),wg()(),jc(168,`p`),iO(169,`Permite a renderização de conteúdo HTML dentro da tooltip.`),wg(),jc(170,`p`),iO(171,`Quando `),jc(172,`code`),iO(173,`true`),wg(),iO(174,`, o valor da propriedade `),jc(175,`code`),iO(176,`tooltip`),wg(),iO(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),jc(178,`code`),iO(179,`false`),wg(),iO(180,`, o conteúdo será tratado como texto puro.`),wg()()(),jc(181,`tr`,15)(182,`td`,16)(183,`div`,17)(184,`span`,18),iO(185,` p-tooltip`),nu(186,`br`),wg()()(),jc(187,`td`,19)(188,`code`,23),iO(189,`string`),wg()(),jc(190,`td`,21),iO(191,`-`),wg(),jc(192,`td`,22)(193,`p`),iO(194,`Habilita e atribui um texto ao po-tooltip.`),wg(),jc(195,`p`)(196,`strong`),iO(197,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()()()(),jc(198,`tr`,15)(199,`td`,16)(200,`div`,17)(201,`span`,18),iO(202,` p-tooltip-position`),nu(203,`br`),wg()()(),jc(204,`td`,19)(205,`code`,23),iO(206,`string`),wg()(),jc(207,`td`,21)(208,`p`),iO(209,`bottom`),wg()(),jc(210,`td`,22)(211,`em`)(212,`strong`),iO(213,`(opcional)`),wg()(),jc(214,`p`),iO(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),wg(),jc(216,`p`),iO(217,`Posições válidas:`),wg(),jc(218,`ul`)(219,`li`)(220,`code`),iO(221,`right`),wg(),iO(222,`: Posiciona o po-tooltip no lado direito do componente alvo.`),wg(),jc(223,`li`)(224,`code`),iO(225,`right-bottom`),wg(),iO(226,`: Posiciona o po-tooltip no lado direito inferior do componente alvo.`),wg(),jc(227,`li`)(228,`code`),iO(229,`right-top`),wg(),iO(230,`: Posiciona o po-tooltip no lado direito superior do componente alvo.`),wg(),jc(231,`li`)(232,`code`),iO(233,`bottom`),wg(),iO(234,`: Posiciona o po-tooltip abaixo do componente alvo.`),wg(),jc(235,`li`)(236,`code`),iO(237,`bottom-left`),wg(),iO(238,`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.`),wg(),jc(239,`li`)(240,`code`),iO(241,`bottom-right`),wg(),iO(242,`: Posiciona o po-tooltip abaixo e à direita do componente alvo.`),wg(),jc(243,`li`)(244,`code`),iO(245,`left`),wg(),iO(246,`: Posiciona o po-tooltip no lado esquerdo do componente alvo.`),wg(),jc(247,`li`)(248,`code`),iO(249,`left-top`),wg(),iO(250,`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.`),wg(),jc(251,`li`)(252,`code`),iO(253,`left-bottom`),wg(),iO(254,`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.`),wg(),jc(255,`li`)(256,`code`),iO(257,`top`),wg(),iO(258,`: Posiciona o po-tooltip acima do componente alvo.`),wg(),jc(259,`li`)(260,`code`),iO(261,`top-right`),wg(),iO(262,`: Posiciona o po-tooltip acima e à direita do componente alvo.`),wg(),jc(263,`li`)(264,`code`),iO(265,`top-left`),wg(),iO(266,`: Posiciona o po-tooltip acima e à esquerda do componente alvo.`),wg()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Tooltip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-tooltip-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-tooltip-basic-view`)(6,`sample-po-tooltip-labs-view`)(7,`sample-po-tooltip-new-user-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,pe,se,de,ce],encapsulation:2,changeDetection:1})}return n})()}];var ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[C1.forChild(xe),C1]})}return n})();var Ye=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[Ta,ge]})}return n})();export{Ye as DocPoTooltipModule};