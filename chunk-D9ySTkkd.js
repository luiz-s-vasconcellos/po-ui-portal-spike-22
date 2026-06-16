import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,aE as Bp,aK as Pe$1,bh as ge$1,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aL as di,aO as Yo,bB as ga,al as lx,am as pw,an as $0,ap as hw,aq as G0,b9 as Ro,c2 as Ap,ct as ma,aU as IR,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&Ul(0,"po-button",0);},dependencies:[Pe$1,ge$1],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tooltip Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tooltip-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Se,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return n})();var se=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore();}restore(){this.tooltip="",this.tooltipPosition=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:false,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let s=lx();wl(0,"div",1)(1,"div",2),Ul(2,"po-button",3),ng()(),Ul(3,"po-divider"),wl(4,"form",null,0)(6,"div",1)(7,"po-input",4),pw("ngModelChange",function(l){return Qy(s),$x(i.tooltip,l)||(i.tooltip=l),Jy(l)}),ng(),$0(),ng(),wl(8,"div",1)(9,"po-radio-group",5),pw("ngModelChange",function(l){return Qy(s),$x(i.tooltipPosition,l)||(i.tooltipPosition=l),Jy(l)}),ng(),$0(),ng(),wl(10,"div",1)(11,"po-button",6),ut("p-click",function(){return i.restore()}),ng()()();}a&2&&(Pp(2),YE("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),Pp(5),hw("ngModel",i.tooltip),G0(),Pp(2),hw("ngModel",i.tooltipPosition),YE("p-options",i.tooltipPositionOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Yo,ga,ge$1],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tooltip Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tooltip-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return n})();var _e=["formNewUser"],ce=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m;}ngOnInit(){this.initialize();}cancel(){this.formNewUser.reset();}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields");}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form";}static \u0275fac=function(a){return new(a||n)(C(Bp))};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&$l(_e,7),a&2){let s;uo(s=fo())&&(i.formNewUser=s.first);}},standalone:false,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let s=lx();wl(0,"div",1)(1,"po-widget",2),ut("p-primary-action",function(){return i.cancel()})("p-secondary-action",function(){return i.confirm()}),wl(2,"form",null,0)(4,"div",1)(5,"po-input",3),pw("ngModelChange",function(l){return Qy(s),$x(i.registration,l)||(i.registration=l),Jy(l)}),ng(),$0(),wl(6,"po-email",4),pw("ngModelChange",function(l){return Qy(s),$x(i.email,l)||(i.email=l),Jy(l)}),ng(),$0(),ng(),wl(7,"div",1)(8,"po-input",5),pw("ngModelChange",function(l){return Qy(s),$x(i.name,l)||(i.name=l),Jy(l)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(l){return Qy(s),$x(i.CPF,l)||(i.CPF=l),Jy(l)}),ng(),$0(),ng(),wl(10,"div",1)(11,"po-datepicker",7),pw("ngModelChange",function(l){return Qy(s),$x(i.birthDate,l)||(i.birthDate=l),Jy(l)}),ng(),$0(),wl(12,"po-input",8),pw("ngModelChange",function(l){return Qy(s),$x(i.genre,l)||(i.genre=l),Jy(l)}),ng(),$0(),ng(),wl(13,"div",1)(14,"po-password",9),pw("ngModelChange",function(l){return Qy(s),$x(i.password,l)||(i.password=l),Jy(l)}),ng(),$0(),wl(15,"po-password",10),pw("ngModelChange",function(l){return Qy(s),$x(i.confirmPassword,l)||(i.confirmPassword=l),Jy(l)}),ng(),$0(),ng()()()();}a&2&&(Pp(5),hw("ngModel",i.registration),YE("p-tooltip",i.registrationTooltip),G0(),Pp(),hw("ngModel",i.email),YE("p-tooltip",i.emailTooltip),G0(),Pp(2),hw("ngModel",i.name),YE("p-tooltip",i.nameTooltip),G0(),Pp(),hw("ngModel",i.CPF),G0(),Pp(2),hw("ngModel",i.birthDate),G0(),Pp(),hw("ngModel",i.genre),G0(),Pp(2),hw("ngModel",i.password),YE("p-tooltip",i.passwordTooltip),G0(),Pp(),hw("ngModel",i.confirmPassword),YE("p-pattern",i.password),G0());},dependencies:[aY,iY,oY,ck,ok,Ro,Ap,Yo,ma,IR,ge$1],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Tooltip - New User"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-tooltip-new-user"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ce],encapsulation:2})}return n})();var ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:false,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo da diretiva Po-Tooltip."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoTooltipDirective"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),ng(),wl(15,"p"),Ux(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),ng(),wl(17,"p"),Ux(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),wl(19,"a",6)(20,"strong"),Ux(21,"po-popover"),ng()(),Ux(22,"."),ng(),wl(23,"h4"),Ux(24,"Tokens customiz\xE1veis"),ng(),wl(25,"p"),Ux(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(27,"blockquote")(28,"p"),Ux(29,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(30,"a",7),Ux(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(32,"."),ng()(),wl(33,"table")(34,"thead")(35,"tr")(36,"th"),Ux(37,"Propriedade"),ng(),wl(38,"th"),Ux(39,"Descri\xE7\xE3o"),ng(),wl(40,"th"),Ux(41,"Valor Padr\xE3o"),ng()()(),wl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),Ux(46,"Default Values"),ng()(),Ul(47,"td")(48,"td"),ng(),wl(49,"tr")(50,"td")(51,"code"),Ux(52,"--border-radius"),ng(),Ux(53," \xA0"),ng(),wl(54,"td"),Ux(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(56,"td")(57,"code"),Ux(58,"var(--border-radius-md)"),ng()()(),wl(59,"tr")(60,"td")(61,"code"),Ux(62,"--color"),ng()(),wl(63,"td"),Ux(64,"Cor principal da tooltip"),ng(),wl(65,"td")(66,"code"),Ux(67,"var(--color-neutral-dark-80)"),ng()()(),wl(68,"tr")(69,"td")(70,"code"),Ux(71,"--font-family"),ng()(),wl(72,"td"),Ux(73,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(74,"td")(75,"code"),Ux(76,"var(--font-family-theme)"),ng()()(),wl(77,"tr")(78,"td")(79,"code"),Ux(80,"--text-color"),ng()(),wl(81,"td"),Ux(82,"Cor do texto"),ng(),wl(83,"td")(84,"code"),Ux(85,"var(--color-neutral-light-00)"),ng()()()()()(),wl(86,"div",8)(87,"h4",9),Ux(88,"Seletor"),ng(),wl(89,"pre",10),Ux(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),ng()(),wl(91,"h4",11),Ux(92,"Propriedades"),ng(),wl(93,"table",12)(94,"tr",13)(95,"th",14),Ux(96,"Nome"),ng(),wl(97,"th",14),Ux(98,"Tipo"),ng(),wl(99,"th",14),Ux(100,"Padr\xE3o"),ng(),wl(101,"th",14),Ux(102,"Descri\xE7\xE3o"),ng()(),wl(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),Ux(107," p-append-in-body"),Ul(108,"br"),ng()()(),wl(109,"td",19)(110,"code",20),Ux(111,"boolean"),ng()(),wl(112,"td",21)(113,"p")(114,"code"),Ux(115,"false"),ng()()(),wl(116,"td",22)(117,"em")(118,"strong"),Ux(119,"(opcional)"),ng()(),wl(120,"p"),Ux(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),ng()()(),wl(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),Ux(126," p-hide-arrow"),Ul(127,"br"),ng()()(),wl(128,"td",19)(129,"code",20),Ux(130,"boolean"),ng()(),wl(131,"td",21)(132,"p")(133,"code"),Ux(134,"false"),ng()()(),wl(135,"td",22)(136,"em")(137,"strong"),Ux(138,"(opcional)"),ng()(),wl(139,"p"),Ux(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),ng(),wl(141,"p"),Ux(142,"Quando "),wl(143,"code"),Ux(144,"true"),ng(),Ux(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),wl(146,"code"),Ux(147,"false"),ng(),Ux(148,", a seta ser\xE1 exibida normalmente."),ng(),wl(149,"p"),Ux(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),ng()()(),wl(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),Ux(155," p-inner-html"),Ul(156,"br"),ng()()(),wl(157,"td",19)(158,"code",20),Ux(159,"boolean"),ng()(),wl(160,"td",21)(161,"p")(162,"code"),Ux(163,"false"),ng()()(),wl(164,"td",22)(165,"em")(166,"strong"),Ux(167,"(opcional)"),ng()(),wl(168,"p"),Ux(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),ng(),wl(170,"p"),Ux(171,"Quando "),wl(172,"code"),Ux(173,"true"),ng(),Ux(174,", o valor da propriedade "),wl(175,"code"),Ux(176,"tooltip"),ng(),Ux(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),wl(178,"code"),Ux(179,"false"),ng(),Ux(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),ng()()(),wl(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),Ux(185," p-tooltip"),Ul(186,"br"),ng()()(),wl(187,"td",19)(188,"code",23),Ux(189,"string"),ng()(),wl(190,"td",21),Ux(191,"-"),ng(),wl(192,"td",22)(193,"p"),Ux(194,"Habilita e atribui um texto ao po-tooltip."),ng(),wl(195,"p")(196,"strong"),Ux(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()()()(),wl(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),Ux(202," p-tooltip-position"),Ul(203,"br"),ng()()(),wl(204,"td",19)(205,"code",23),Ux(206,"string"),ng()(),wl(207,"td",21)(208,"p"),Ux(209,"bottom"),ng()(),wl(210,"td",22)(211,"em")(212,"strong"),Ux(213,"(opcional)"),ng()(),wl(214,"p"),Ux(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ng(),wl(216,"p"),Ux(217,"Posi\xE7\xF5es v\xE1lidas:"),ng(),wl(218,"ul")(219,"li")(220,"code"),Ux(221,"right"),ng(),Ux(222,": Posiciona o po-tooltip no lado direito do componente alvo."),ng(),wl(223,"li")(224,"code"),Ux(225,"right-bottom"),ng(),Ux(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),ng(),wl(227,"li")(228,"code"),Ux(229,"right-top"),ng(),Ux(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),ng(),wl(231,"li")(232,"code"),Ux(233,"bottom"),ng(),Ux(234,": Posiciona o po-tooltip abaixo do componente alvo."),ng(),wl(235,"li")(236,"code"),Ux(237,"bottom-left"),ng(),Ux(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),ng(),wl(239,"li")(240,"code"),Ux(241,"bottom-right"),ng(),Ux(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),ng(),wl(243,"li")(244,"code"),Ux(245,"left"),ng(),Ux(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),ng(),wl(247,"li")(248,"code"),Ux(249,"left-top"),ng(),Ux(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),ng(),wl(251,"li")(252,"code"),Ux(253,"left-bottom"),ng(),Ux(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),ng(),wl(255,"li")(256,"code"),Ux(257,"top"),ng(),Ux(258,": Posiciona o po-tooltip acima do componente alvo."),ng(),wl(259,"li")(260,"code"),Ux(261,"top-right"),ng(),Ux(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),ng(),wl(263,"li")(264,"code"),Ux(265,"top-left"),ng(),Ux(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),ng()()()()()());},dependencies:[fP],encapsulation:2})}return n})();var fe=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-tooltip-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),ng()()()),a&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,me,de,ue,ge],encapsulation:2})}return n})();var ke=[{path:"",component:fe}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[vL.forChild(ke),vL]})}return n})();var mt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[u5,he]})}return n})();export{mt as DocPoTooltipModule};