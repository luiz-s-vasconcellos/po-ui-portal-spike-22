import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,aW as Yp,b0 as Qt,bL as ri,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b1 as mv,b4 as O3,c8 as Sde,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,bD as Mde,cz as Mz,cZ as Bhe,ba as gNe,av as Yl,aw as uo,ax as fo,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&Gl(0,"po-button",0);},dependencies:[Qt,ri],encapsulation:2,changeDetection:1})}return n})();var he=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tooltip Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tooltip-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,he,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ae],encapsulation:2})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore();}restore(){this.tooltip="",this.tooltipPosition=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:false,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let s=Cx();Tl(0,"div",1)(1,"div",2),Gl(2,"po-button",3),sg()(),Gl(3,"po-divider"),Tl(4,"form",null,0)(6,"div",1)(7,"po-input",4),Ew("ngModelChange",function(l){return Ky(s),rN(i.tooltip,l)||(i.tooltip=l),Xy(l)}),sg(),t0(),sg(),Tl(8,"div",1)(9,"po-radio-group",5),Ew("ngModelChange",function(l){return Ky(s),rN(i.tooltipPosition,l)||(i.tooltipPosition=l),Xy(l)}),sg(),t0(),sg(),Tl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(Vp(2),tw("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),Vp(5),Dw("ngModel",i.tooltip),r0(),Vp(2),Dw("ngModel",i.tooltipPosition),tw("p-options",i.tooltipPositionOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,O3,Sde,ri],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tooltip Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tooltip-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,re],encapsulation:2})}return n})();var ve=["formNewUser"],se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m;}ngOnInit(){this.initialize();}cancel(){this.formNewUser.reset();}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields");}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form";}static \u0275fac=function(a){return new(a||n)(w(Yp))};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&Yl(ve,7),a&2){let s;uo(s=fo())&&(i.formNewUser=s.first);}},standalone:false,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let s=Cx();Tl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.cancel()})("p-secondary-action",function(){return i.confirm()}),Tl(2,"form",null,0)(4,"div",1)(5,"po-input",3),Ew("ngModelChange",function(l){return Ky(s),rN(i.registration,l)||(i.registration=l),Xy(l)}),sg(),t0(),Tl(6,"po-email",4),Ew("ngModelChange",function(l){return Ky(s),rN(i.email,l)||(i.email=l),Xy(l)}),sg(),t0(),sg(),Tl(7,"div",1)(8,"po-input",5),Ew("ngModelChange",function(l){return Ky(s),rN(i.name,l)||(i.name=l),Xy(l)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(l){return Ky(s),rN(i.CPF,l)||(i.CPF=l),Xy(l)}),sg(),t0(),sg(),Tl(10,"div",1)(11,"po-datepicker",7),Ew("ngModelChange",function(l){return Ky(s),rN(i.birthDate,l)||(i.birthDate=l),Xy(l)}),sg(),t0(),Tl(12,"po-input",8),Ew("ngModelChange",function(l){return Ky(s),rN(i.genre,l)||(i.genre=l),Xy(l)}),sg(),t0(),sg(),Tl(13,"div",1)(14,"po-password",9),Ew("ngModelChange",function(l){return Ky(s),rN(i.password,l)||(i.password=l),Xy(l)}),sg(),t0(),Tl(15,"po-password",10),Ew("ngModelChange",function(l){return Ky(s),rN(i.confirmPassword,l)||(i.confirmPassword=l),Xy(l)}),sg(),t0(),sg()()()();}a&2&&(Vp(5),Dw("ngModel",i.registration),tw("p-tooltip",i.registrationTooltip),r0(),Vp(),Dw("ngModel",i.email),tw("p-tooltip",i.emailTooltip),r0(),Vp(2),Dw("ngModel",i.name),tw("p-tooltip",i.nameTooltip),r0(),Vp(),Dw("ngModel",i.CPF),r0(),Vp(2),Dw("ngModel",i.birthDate),r0(),Vp(),Dw("ngModel",i.genre),r0(),Vp(2),Dw("ngModel",i.password),tw("p-tooltip",i.passwordTooltip),r0(),Vp(),Dw("ngModel",i.confirmPassword),tw("p-pattern",i.password),r0());},dependencies:[nY,J9,eY,Ck,Dk,Mde,Mz,O3,Bhe,gNe,ri],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tooltip - New User"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tooltip-new-user"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,se],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:false,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo da diretiva Po-Tooltip."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoTooltipDirective"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),sg(),Tl(15,"p"),tN(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),sg(),Tl(17,"p"),tN(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Tl(19,"a",6)(20,"strong"),tN(21,"po-popover"),sg()(),tN(22,"."),sg(),Tl(23,"h4"),tN(24,"Tokens customiz\xE1veis"),sg(),Tl(25,"p"),tN(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(27,"blockquote")(28,"p"),tN(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(30,"a",7),tN(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(32,"."),sg()(),Tl(33,"table")(34,"thead")(35,"tr")(36,"th"),tN(37,"Propriedade"),sg(),Tl(38,"th"),tN(39,"Descri\xE7\xE3o"),sg(),Tl(40,"th"),tN(41,"Valor Padr\xE3o"),sg()()(),Tl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),tN(46,"Default Values"),sg()(),Gl(47,"td")(48,"td"),sg(),Tl(49,"tr")(50,"td")(51,"code"),tN(52,"--border-radius"),sg(),tN(53," \xA0"),sg(),Tl(54,"td"),tN(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(56,"td")(57,"code"),tN(58,"var(--border-radius-md)"),sg()()(),Tl(59,"tr")(60,"td")(61,"code"),tN(62,"--color"),sg()(),Tl(63,"td"),tN(64,"Cor principal da tooltip"),sg(),Tl(65,"td")(66,"code"),tN(67,"var(--color-neutral-dark-80)"),sg()()(),Tl(68,"tr")(69,"td")(70,"code"),tN(71,"--font-family"),sg()(),Tl(72,"td"),tN(73,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(74,"td")(75,"code"),tN(76,"var(--font-family-theme)"),sg()()(),Tl(77,"tr")(78,"td")(79,"code"),tN(80,"--text-color"),sg()(),Tl(81,"td"),tN(82,"Cor do texto"),sg(),Tl(83,"td")(84,"code"),tN(85,"var(--color-neutral-light-00)"),sg()()()()()(),Tl(86,"div",8)(87,"h4",9),tN(88,"Seletor"),sg(),Tl(89,"pre",10),tN(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),sg()(),Tl(91,"h4",11),tN(92,"Propriedades"),sg(),Tl(93,"table",12)(94,"tr",13)(95,"th",14),tN(96,"Nome"),sg(),Tl(97,"th",14),tN(98,"Tipo"),sg(),Tl(99,"th",14),tN(100,"Padr\xE3o"),sg(),Tl(101,"th",14),tN(102,"Descri\xE7\xE3o"),sg()(),Tl(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),tN(107," p-append-in-body"),Gl(108,"br"),sg()()(),Tl(109,"td",19)(110,"code",20),tN(111,"boolean"),sg()(),Tl(112,"td",21)(113,"p")(114,"code"),tN(115,"false"),sg()()(),Tl(116,"td",22)(117,"em")(118,"strong"),tN(119,"(opcional)"),sg()(),Tl(120,"p"),tN(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),sg()()(),Tl(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),tN(126," p-hide-arrow"),Gl(127,"br"),sg()()(),Tl(128,"td",19)(129,"code",20),tN(130,"boolean"),sg()(),Tl(131,"td",21)(132,"p")(133,"code"),tN(134,"false"),sg()()(),Tl(135,"td",22)(136,"em")(137,"strong"),tN(138,"(opcional)"),sg()(),Tl(139,"p"),tN(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),sg(),Tl(141,"p"),tN(142,"Quando "),Tl(143,"code"),tN(144,"true"),sg(),tN(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Tl(146,"code"),tN(147,"false"),sg(),tN(148,", a seta ser\xE1 exibida normalmente."),sg(),Tl(149,"p"),tN(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),sg()()(),Tl(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),tN(155," p-inner-html"),Gl(156,"br"),sg()()(),Tl(157,"td",19)(158,"code",20),tN(159,"boolean"),sg()(),Tl(160,"td",21)(161,"p")(162,"code"),tN(163,"false"),sg()()(),Tl(164,"td",22)(165,"em")(166,"strong"),tN(167,"(opcional)"),sg()(),Tl(168,"p"),tN(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),sg(),Tl(170,"p"),tN(171,"Quando "),Tl(172,"code"),tN(173,"true"),sg(),tN(174,", o valor da propriedade "),Tl(175,"code"),tN(176,"tooltip"),sg(),tN(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Tl(178,"code"),tN(179,"false"),sg(),tN(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),sg()()(),Tl(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),tN(185," p-tooltip"),Gl(186,"br"),sg()()(),Tl(187,"td",19)(188,"code",23),tN(189,"string"),sg()(),Tl(190,"td",21),tN(191,"-"),sg(),Tl(192,"td",22)(193,"p"),tN(194,"Habilita e atribui um texto ao po-tooltip."),sg(),Tl(195,"p")(196,"strong"),tN(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()()()(),Tl(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),tN(202," p-tooltip-position"),Gl(203,"br"),sg()()(),Tl(204,"td",19)(205,"code",23),tN(206,"string"),sg()(),Tl(207,"td",21)(208,"p"),tN(209,"bottom"),sg()(),Tl(210,"td",22)(211,"em")(212,"strong"),tN(213,"(opcional)"),sg()(),Tl(214,"p"),tN(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),sg(),Tl(216,"p"),tN(217,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Tl(218,"ul")(219,"li")(220,"code"),tN(221,"right"),sg(),tN(222,": Posiciona o po-tooltip no lado direito do componente alvo."),sg(),Tl(223,"li")(224,"code"),tN(225,"right-bottom"),sg(),tN(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),sg(),Tl(227,"li")(228,"code"),tN(229,"right-top"),sg(),tN(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),sg(),Tl(231,"li")(232,"code"),tN(233,"bottom"),sg(),tN(234,": Posiciona o po-tooltip abaixo do componente alvo."),sg(),Tl(235,"li")(236,"code"),tN(237,"bottom-left"),sg(),tN(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),sg(),Tl(239,"li")(240,"code"),tN(241,"bottom-right"),sg(),tN(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),sg(),Tl(243,"li")(244,"code"),tN(245,"left"),sg(),tN(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),sg(),Tl(247,"li")(248,"code"),tN(249,"left-top"),sg(),tN(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),sg(),Tl(251,"li")(252,"code"),tN(253,"left-bottom"),sg(),tN(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),sg(),Tl(255,"li")(256,"code"),tN(257,"top"),sg(),tN(258,": Posiciona o po-tooltip acima do componente alvo."),sg(),Tl(259,"li")(260,"code"),tN(261,"top-right"),sg(),tN(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),sg(),Tl(263,"li")(264,"code"),tN(265,"top-left"),sg(),tN(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-tooltip-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,pe,me,de,ce],encapsulation:2})}return n})();var xe=[{path:"",component:ue}],ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[vL.forChild(xe),vL]})}return n})();var Ye=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,ge]})}return n})();export{Ye as DocPoTooltipModule};