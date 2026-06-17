import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,aW as Yp,b0 as Qt,bL as ri,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b1 as mv,b4 as F3,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,bD as Ade,cz as Ez,cZ as Whe,ba as bNe,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&Wl(0,"po-button",0);},dependencies:[Qt,ri],encapsulation:2,changeDetection:1})}return n})();var he=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tooltip Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tooltip-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,he,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ae],encapsulation:2})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore();}restore(){this.tooltip="",this.tooltipPosition=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:false,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let s=Ex();Sl(0,"div",1)(1,"div",2),Wl(2,"po-button",3),sg()(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"div",1)(7,"po-input",4),Ew("ngModelChange",function(l){return Xy(s),tN(i.tooltip,l)||(i.tooltip=l),Qy(l)}),sg(),JA(),sg(),Sl(8,"div",1)(9,"po-radio-group",5),Ew("ngModelChange",function(l){return Xy(s),tN(i.tooltipPosition,l)||(i.tooltipPosition=l),Qy(l)}),sg(),JA(),sg(),Sl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(Vp(2),tw("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),Vp(5),Dw("ngModel",i.tooltip),t0(),Vp(2),Dw("ngModel",i.tooltipPosition),tw("p-options",i.tooltipPositionOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Pde,ri],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tooltip Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tooltip-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return n})();var ve=["formNewUser"],se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m;}ngOnInit(){this.initialize();}cancel(){this.formNewUser.reset();}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields");}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form";}static \u0275fac=function(a){return new(a||n)(C(Yp))};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&ql(ve,7),a&2){let s;lo(s=uo())&&(i.formNewUser=s.first);}},standalone:false,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let s=Ex();Sl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.cancel()})("p-secondary-action",function(){return i.confirm()}),Sl(2,"form",null,0)(4,"div",1)(5,"po-input",3),Ew("ngModelChange",function(l){return Xy(s),tN(i.registration,l)||(i.registration=l),Qy(l)}),sg(),JA(),Sl(6,"po-email",4),Ew("ngModelChange",function(l){return Xy(s),tN(i.email,l)||(i.email=l),Qy(l)}),sg(),JA(),sg(),Sl(7,"div",1)(8,"po-input",5),Ew("ngModelChange",function(l){return Xy(s),tN(i.name,l)||(i.name=l),Qy(l)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(l){return Xy(s),tN(i.CPF,l)||(i.CPF=l),Qy(l)}),sg(),JA(),sg(),Sl(10,"div",1)(11,"po-datepicker",7),Ew("ngModelChange",function(l){return Xy(s),tN(i.birthDate,l)||(i.birthDate=l),Qy(l)}),sg(),JA(),Sl(12,"po-input",8),Ew("ngModelChange",function(l){return Xy(s),tN(i.genre,l)||(i.genre=l),Qy(l)}),sg(),JA(),sg(),Sl(13,"div",1)(14,"po-password",9),Ew("ngModelChange",function(l){return Xy(s),tN(i.password,l)||(i.password=l),Qy(l)}),sg(),JA(),Sl(15,"po-password",10),Ew("ngModelChange",function(l){return Xy(s),tN(i.confirmPassword,l)||(i.confirmPassword=l),Qy(l)}),sg(),JA(),sg()()()();}a&2&&(Vp(5),Dw("ngModel",i.registration),tw("p-tooltip",i.registrationTooltip),t0(),Vp(),Dw("ngModel",i.email),tw("p-tooltip",i.emailTooltip),t0(),Vp(2),Dw("ngModel",i.name),tw("p-tooltip",i.nameTooltip),t0(),Vp(),Dw("ngModel",i.CPF),t0(),Vp(2),Dw("ngModel",i.birthDate),t0(),Vp(),Dw("ngModel",i.genre),t0(),Vp(2),Dw("ngModel",i.password),tw("p-tooltip",i.passwordTooltip),t0(),Vp(),Dw("ngModel",i.confirmPassword),tw("p-pattern",i.password),t0());},dependencies:[J9,K9,X9,Dk,vk,Ade,Ez,F3,Whe,bNe,ri],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tooltip - New User"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tooltip-new-user"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:false,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo da diretiva Po-Tooltip."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoTooltipDirective"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),sg(),Sl(15,"p"),Jx(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),sg(),Sl(17,"p"),Jx(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Sl(19,"a",6)(20,"strong"),Jx(21,"po-popover"),sg()(),Jx(22,"."),sg(),Sl(23,"h4"),Jx(24,"Tokens customiz\xE1veis"),sg(),Sl(25,"p"),Jx(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(27,"blockquote")(28,"p"),Jx(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(30,"a",7),Jx(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(32,"."),sg()(),Sl(33,"table")(34,"thead")(35,"tr")(36,"th"),Jx(37,"Propriedade"),sg(),Sl(38,"th"),Jx(39,"Descri\xE7\xE3o"),sg(),Sl(40,"th"),Jx(41,"Valor Padr\xE3o"),sg()()(),Sl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),Jx(46,"Default Values"),sg()(),Wl(47,"td")(48,"td"),sg(),Sl(49,"tr")(50,"td")(51,"code"),Jx(52,"--border-radius"),sg(),Jx(53," \xA0"),sg(),Sl(54,"td"),Jx(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(56,"td")(57,"code"),Jx(58,"var(--border-radius-md)"),sg()()(),Sl(59,"tr")(60,"td")(61,"code"),Jx(62,"--color"),sg()(),Sl(63,"td"),Jx(64,"Cor principal da tooltip"),sg(),Sl(65,"td")(66,"code"),Jx(67,"var(--color-neutral-dark-80)"),sg()()(),Sl(68,"tr")(69,"td")(70,"code"),Jx(71,"--font-family"),sg()(),Sl(72,"td"),Jx(73,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(74,"td")(75,"code"),Jx(76,"var(--font-family-theme)"),sg()()(),Sl(77,"tr")(78,"td")(79,"code"),Jx(80,"--text-color"),sg()(),Sl(81,"td"),Jx(82,"Cor do texto"),sg(),Sl(83,"td")(84,"code"),Jx(85,"var(--color-neutral-light-00)"),sg()()()()()(),Sl(86,"div",8)(87,"h4",9),Jx(88,"Seletor"),sg(),Sl(89,"pre",10),Jx(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),sg()(),Sl(91,"h4",11),Jx(92,"Propriedades"),sg(),Sl(93,"table",12)(94,"tr",13)(95,"th",14),Jx(96,"Nome"),sg(),Sl(97,"th",14),Jx(98,"Tipo"),sg(),Sl(99,"th",14),Jx(100,"Padr\xE3o"),sg(),Sl(101,"th",14),Jx(102,"Descri\xE7\xE3o"),sg()(),Sl(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),Jx(107," p-append-in-body"),Wl(108,"br"),sg()()(),Sl(109,"td",19)(110,"code",20),Jx(111,"boolean"),sg()(),Sl(112,"td",21)(113,"p")(114,"code"),Jx(115,"false"),sg()()(),Sl(116,"td",22)(117,"em")(118,"strong"),Jx(119,"(opcional)"),sg()(),Sl(120,"p"),Jx(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),sg()()(),Sl(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),Jx(126," p-hide-arrow"),Wl(127,"br"),sg()()(),Sl(128,"td",19)(129,"code",20),Jx(130,"boolean"),sg()(),Sl(131,"td",21)(132,"p")(133,"code"),Jx(134,"false"),sg()()(),Sl(135,"td",22)(136,"em")(137,"strong"),Jx(138,"(opcional)"),sg()(),Sl(139,"p"),Jx(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),sg(),Sl(141,"p"),Jx(142,"Quando "),Sl(143,"code"),Jx(144,"true"),sg(),Jx(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Sl(146,"code"),Jx(147,"false"),sg(),Jx(148,", a seta ser\xE1 exibida normalmente."),sg(),Sl(149,"p"),Jx(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),sg()()(),Sl(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),Jx(155," p-inner-html"),Wl(156,"br"),sg()()(),Sl(157,"td",19)(158,"code",20),Jx(159,"boolean"),sg()(),Sl(160,"td",21)(161,"p")(162,"code"),Jx(163,"false"),sg()()(),Sl(164,"td",22)(165,"em")(166,"strong"),Jx(167,"(opcional)"),sg()(),Sl(168,"p"),Jx(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),sg(),Sl(170,"p"),Jx(171,"Quando "),Sl(172,"code"),Jx(173,"true"),sg(),Jx(174,", o valor da propriedade "),Sl(175,"code"),Jx(176,"tooltip"),sg(),Jx(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Sl(178,"code"),Jx(179,"false"),sg(),Jx(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),sg()()(),Sl(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),Jx(185," p-tooltip"),Wl(186,"br"),sg()()(),Sl(187,"td",19)(188,"code",23),Jx(189,"string"),sg()(),Sl(190,"td",21),Jx(191,"-"),sg(),Sl(192,"td",22)(193,"p"),Jx(194,"Habilita e atribui um texto ao po-tooltip."),sg(),Sl(195,"p")(196,"strong"),Jx(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()()()(),Sl(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),Jx(202," p-tooltip-position"),Wl(203,"br"),sg()()(),Sl(204,"td",19)(205,"code",23),Jx(206,"string"),sg()(),Sl(207,"td",21)(208,"p"),Jx(209,"bottom"),sg()(),Sl(210,"td",22)(211,"em")(212,"strong"),Jx(213,"(opcional)"),sg()(),Sl(214,"p"),Jx(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),sg(),Sl(216,"p"),Jx(217,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Sl(218,"ul")(219,"li")(220,"code"),Jx(221,"right"),sg(),Jx(222,": Posiciona o po-tooltip no lado direito do componente alvo."),sg(),Sl(223,"li")(224,"code"),Jx(225,"right-bottom"),sg(),Jx(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),sg(),Sl(227,"li")(228,"code"),Jx(229,"right-top"),sg(),Jx(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),sg(),Sl(231,"li")(232,"code"),Jx(233,"bottom"),sg(),Jx(234,": Posiciona o po-tooltip abaixo do componente alvo."),sg(),Sl(235,"li")(236,"code"),Jx(237,"bottom-left"),sg(),Jx(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),sg(),Sl(239,"li")(240,"code"),Jx(241,"bottom-right"),sg(),Jx(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),sg(),Sl(243,"li")(244,"code"),Jx(245,"left"),sg(),Jx(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),sg(),Sl(247,"li")(248,"code"),Jx(249,"left-top"),sg(),Jx(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),sg(),Sl(251,"li")(252,"code"),Jx(253,"left-bottom"),sg(),Jx(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),sg(),Sl(255,"li")(256,"code"),Jx(257,"top"),sg(),Jx(258,": Posiciona o po-tooltip acima do componente alvo."),sg(),Sl(259,"li")(260,"code"),Jx(261,"top-right"),sg(),Jx(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),sg(),Sl(263,"li")(264,"code"),Jx(265,"top-left"),sg(),Jx(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-tooltip-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,pe,me,de,ce],encapsulation:2})}return n})();var xe=[{path:"",component:ue}],ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[pL.forChild(xe),pL]})}return n})();var Ye=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,ge]})}return n})();export{Ye as DocPoTooltipModule};