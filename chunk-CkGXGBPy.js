import {f as fe$1,u as ue$1,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,aW as Yp,b0 as Qt,bL as ri,L as Gl,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b1 as mv,b4 as L3,c8 as Tde,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,bD as Mde,cz as Pz,cZ as Hhe,ba as vNe,av as Yl,aw as uo,ax as fo,a3 as sNe,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&Gl(0,"po-button",0);},dependencies:[Qt,ri],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Tooltip Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tooltip-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,fe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore();}restore(){this.tooltip="",this.tooltipPosition=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:false,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let s=Sx();Tl(0,"div",1)(1,"div",2),Gl(2,"po-button",3),sg()(),Gl(3,"po-divider"),Tl(4,"form",null,0)(6,"div",1)(7,"po-input",4),ww("ngModelChange",function(l){return Ky(s),sN(i.tooltip,l)||(i.tooltip=l),Xy(l)}),sg(),r0(),sg(),Tl(8,"div",1)(9,"po-radio-group",5),ww("ngModelChange",function(l){return Ky(s),sN(i.tooltipPosition,l)||(i.tooltipPosition=l),Xy(l)}),sg(),r0(),sg(),Tl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(Vp(2),nw("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),Vp(5),Ew("ngModel",i.tooltip),o0(),Vp(2),Ew("ngModel",i.tooltipPosition),nw("p-options",i.tooltipPositionOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,L3,Tde,ri],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Tooltip Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tooltip-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,re],encapsulation:2,changeDetection:1})}return n})();var ve=["formNewUser"],se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m;}ngOnInit(){this.initialize();}cancel(){this.formNewUser.reset();}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields");}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form";}static \u0275fac=function(a){return new(a||n)(w(Yp))};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&Yl(ve,7),a&2){let s;uo(s=fo())&&(i.formNewUser=s.first);}},standalone:false,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let s=Sx();Tl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.cancel()})("p-secondary-action",function(){return i.confirm()}),Tl(2,"form",null,0)(4,"div",1)(5,"po-input",3),ww("ngModelChange",function(l){return Ky(s),sN(i.registration,l)||(i.registration=l),Xy(l)}),sg(),r0(),Tl(6,"po-email",4),ww("ngModelChange",function(l){return Ky(s),sN(i.email,l)||(i.email=l),Xy(l)}),sg(),r0(),sg(),Tl(7,"div",1)(8,"po-input",5),ww("ngModelChange",function(l){return Ky(s),sN(i.name,l)||(i.name=l),Xy(l)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(l){return Ky(s),sN(i.CPF,l)||(i.CPF=l),Xy(l)}),sg(),r0(),sg(),Tl(10,"div",1)(11,"po-datepicker",7),ww("ngModelChange",function(l){return Ky(s),sN(i.birthDate,l)||(i.birthDate=l),Xy(l)}),sg(),r0(),Tl(12,"po-input",8),ww("ngModelChange",function(l){return Ky(s),sN(i.genre,l)||(i.genre=l),Xy(l)}),sg(),r0(),sg(),Tl(13,"div",1)(14,"po-password",9),ww("ngModelChange",function(l){return Ky(s),sN(i.password,l)||(i.password=l),Xy(l)}),sg(),r0(),Tl(15,"po-password",10),ww("ngModelChange",function(l){return Ky(s),sN(i.confirmPassword,l)||(i.confirmPassword=l),Xy(l)}),sg(),r0(),sg()()()();}a&2&&(Vp(5),Ew("ngModel",i.registration),nw("p-tooltip",i.registrationTooltip),o0(),Vp(),Ew("ngModel",i.email),nw("p-tooltip",i.emailTooltip),o0(),Vp(2),Ew("ngModel",i.name),nw("p-tooltip",i.nameTooltip),o0(),Vp(),Ew("ngModel",i.CPF),o0(),Vp(2),Ew("ngModel",i.birthDate),o0(),Vp(),Ew("ngModel",i.genre),o0(),Vp(2),Ew("ngModel",i.password),nw("p-tooltip",i.passwordTooltip),o0(),Vp(),Ew("ngModel",i.confirmPassword),nw("p-pattern",i.password),o0());},dependencies:[oY,nY,rY,Sk,Ck,Mde,Pz,L3,Hhe,vNe,ri],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Tooltip - New User"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tooltip-new-user"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:false,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo da diretiva Po-Tooltip."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoTooltipDirective"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),sg(),Tl(15,"p"),iN(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),sg(),Tl(17,"p"),iN(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Tl(19,"a",6)(20,"strong"),iN(21,"po-popover"),sg()(),iN(22,"."),sg(),Tl(23,"h4"),iN(24,"Tokens customiz\xE1veis"),sg(),Tl(25,"p"),iN(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(27,"blockquote")(28,"p"),iN(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(30,"a",7),iN(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(32,"."),sg()(),Tl(33,"table")(34,"thead")(35,"tr")(36,"th"),iN(37,"Propriedade"),sg(),Tl(38,"th"),iN(39,"Descri\xE7\xE3o"),sg(),Tl(40,"th"),iN(41,"Valor Padr\xE3o"),sg()()(),Tl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),iN(46,"Default Values"),sg()(),Gl(47,"td")(48,"td"),sg(),Tl(49,"tr")(50,"td")(51,"code"),iN(52,"--border-radius"),sg(),iN(53," \xA0"),sg(),Tl(54,"td"),iN(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(56,"td")(57,"code"),iN(58,"var(--border-radius-md)"),sg()()(),Tl(59,"tr")(60,"td")(61,"code"),iN(62,"--color"),sg()(),Tl(63,"td"),iN(64,"Cor principal da tooltip"),sg(),Tl(65,"td")(66,"code"),iN(67,"var(--color-neutral-dark-80)"),sg()()(),Tl(68,"tr")(69,"td")(70,"code"),iN(71,"--font-family"),sg()(),Tl(72,"td"),iN(73,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(74,"td")(75,"code"),iN(76,"var(--font-family-theme)"),sg()()(),Tl(77,"tr")(78,"td")(79,"code"),iN(80,"--text-color"),sg()(),Tl(81,"td"),iN(82,"Cor do texto"),sg(),Tl(83,"td")(84,"code"),iN(85,"var(--color-neutral-light-00)"),sg()()()()()(),Tl(86,"div",8)(87,"h4",9),iN(88,"Seletor"),sg(),Tl(89,"pre",10),iN(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),sg()(),Tl(91,"h4",11),iN(92,"Propriedades"),sg(),Tl(93,"table",12)(94,"tr",13)(95,"th",14),iN(96,"Nome"),sg(),Tl(97,"th",14),iN(98,"Tipo"),sg(),Tl(99,"th",14),iN(100,"Padr\xE3o"),sg(),Tl(101,"th",14),iN(102,"Descri\xE7\xE3o"),sg()(),Tl(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),iN(107," p-append-in-body"),Gl(108,"br"),sg()()(),Tl(109,"td",19)(110,"code",20),iN(111,"boolean"),sg()(),Tl(112,"td",21)(113,"p")(114,"code"),iN(115,"false"),sg()()(),Tl(116,"td",22)(117,"em")(118,"strong"),iN(119,"(opcional)"),sg()(),Tl(120,"p"),iN(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),sg()()(),Tl(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),iN(126," p-hide-arrow"),Gl(127,"br"),sg()()(),Tl(128,"td",19)(129,"code",20),iN(130,"boolean"),sg()(),Tl(131,"td",21)(132,"p")(133,"code"),iN(134,"false"),sg()()(),Tl(135,"td",22)(136,"em")(137,"strong"),iN(138,"(opcional)"),sg()(),Tl(139,"p"),iN(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),sg(),Tl(141,"p"),iN(142,"Quando "),Tl(143,"code"),iN(144,"true"),sg(),iN(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Tl(146,"code"),iN(147,"false"),sg(),iN(148,", a seta ser\xE1 exibida normalmente."),sg(),Tl(149,"p"),iN(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),sg()()(),Tl(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),iN(155," p-inner-html"),Gl(156,"br"),sg()()(),Tl(157,"td",19)(158,"code",20),iN(159,"boolean"),sg()(),Tl(160,"td",21)(161,"p")(162,"code"),iN(163,"false"),sg()()(),Tl(164,"td",22)(165,"em")(166,"strong"),iN(167,"(opcional)"),sg()(),Tl(168,"p"),iN(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),sg(),Tl(170,"p"),iN(171,"Quando "),Tl(172,"code"),iN(173,"true"),sg(),iN(174,", o valor da propriedade "),Tl(175,"code"),iN(176,"tooltip"),sg(),iN(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Tl(178,"code"),iN(179,"false"),sg(),iN(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),sg()()(),Tl(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),iN(185," p-tooltip"),Gl(186,"br"),sg()()(),Tl(187,"td",19)(188,"code",23),iN(189,"string"),sg()(),Tl(190,"td",21),iN(191,"-"),sg(),Tl(192,"td",22)(193,"p"),iN(194,"Habilita e atribui um texto ao po-tooltip."),sg(),Tl(195,"p")(196,"strong"),iN(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()()()(),Tl(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),iN(202," p-tooltip-position"),Gl(203,"br"),sg()()(),Tl(204,"td",19)(205,"code",23),iN(206,"string"),sg()(),Tl(207,"td",21)(208,"p"),iN(209,"bottom"),sg()(),Tl(210,"td",22)(211,"em")(212,"strong"),iN(213,"(opcional)"),sg()(),Tl(214,"p"),iN(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),sg(),Tl(216,"p"),iN(217,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Tl(218,"ul")(219,"li")(220,"code"),iN(221,"right"),sg(),iN(222,": Posiciona o po-tooltip no lado direito do componente alvo."),sg(),Tl(223,"li")(224,"code"),iN(225,"right-bottom"),sg(),iN(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),sg(),Tl(227,"li")(228,"code"),iN(229,"right-top"),sg(),iN(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),sg(),Tl(231,"li")(232,"code"),iN(233,"bottom"),sg(),iN(234,": Posiciona o po-tooltip abaixo do componente alvo."),sg(),Tl(235,"li")(236,"code"),iN(237,"bottom-left"),sg(),iN(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),sg(),Tl(239,"li")(240,"code"),iN(241,"bottom-right"),sg(),iN(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),sg(),Tl(243,"li")(244,"code"),iN(245,"left"),sg(),iN(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),sg(),Tl(247,"li")(248,"code"),iN(249,"left-top"),sg(),iN(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),sg(),Tl(251,"li")(252,"code"),iN(253,"left-bottom"),sg(),iN(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),sg(),Tl(255,"li")(256,"code"),iN(257,"top"),sg(),iN(258,": Posiciona o po-tooltip acima do componente alvo."),sg(),Tl(259,"li")(260,"code"),iN(261,"top-right"),sg(),iN(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),sg(),Tl(263,"li")(264,"code"),iN(265,"top-left"),sg(),iN(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),sg()()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-tooltip-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),sg()()()),a&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,pe,me,de,ce],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:"",component:ue}],ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[DL.forChild(xe),DL]})}return n})();var Ye=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[sr,ge]})}return n})();export{Ye as DocPoTooltipModule};