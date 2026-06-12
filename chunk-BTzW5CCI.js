import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aV as Xp,a$ as Qt,bP as ri,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,b3 as q3,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,bH as Wde,cE as Uz,d2 as Uhe,b9 as ONe,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&Hl(0,"po-button",0);},dependencies:[Qt,ri],encapsulation:2,changeDetection:1})}return n})();var he=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tooltip Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tooltip-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,he,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ae],encapsulation:2})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore();}restore(){this.tooltip="",this.tooltipPosition=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:false,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let s=gx();Cl(0,"div",1)(1,"div",2),Hl(2,"po-button",3),og()(),Hl(3,"po-divider"),Cl(4,"form",null,0)(6,"div",1)(7,"po-input",4),gw("ngModelChange",function(l){return Jy(s),Zx(i.tooltip,l)||(i.tooltip=l),e_(l)}),og(),Z0(),og(),Cl(8,"div",1)(9,"po-radio-group",5),gw("ngModelChange",function(l){return Jy(s),Zx(i.tooltipPosition,l)||(i.tooltipPosition=l),e_(l)}),og(),Z0(),og(),Cl(10,"div",1)(11,"po-button",6),dt("p-click",function(){return i.restore()}),og()()();}a&2&&(Lp(2),ZE("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),Lp(5),pw("ngModel",i.tooltip),X0(),Lp(2),pw("ngModel",i.tooltipPosition),ZE("p-options",i.tooltipPositionOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Nde,ri],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tooltip Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tooltip-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return n})();var ve=["formNewUser"],se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m;}ngOnInit(){this.initialize();}cancel(){this.formNewUser.reset();}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields");}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form";}static \u0275fac=function(a){return new(a||n)(w(Xp))};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&zl(ve,7),a&2){let s;uo(s=fo())&&(i.formNewUser=s.first);}},standalone:false,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let s=gx();Cl(0,"div",1)(1,"po-widget",2),dt("p-primary-action",function(){return i.cancel()})("p-secondary-action",function(){return i.confirm()}),Cl(2,"form",null,0)(4,"div",1)(5,"po-input",3),gw("ngModelChange",function(l){return Jy(s),Zx(i.registration,l)||(i.registration=l),e_(l)}),og(),Z0(),Cl(6,"po-email",4),gw("ngModelChange",function(l){return Jy(s),Zx(i.email,l)||(i.email=l),e_(l)}),og(),Z0(),og(),Cl(7,"div",1)(8,"po-input",5),gw("ngModelChange",function(l){return Jy(s),Zx(i.name,l)||(i.name=l),e_(l)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(l){return Jy(s),Zx(i.CPF,l)||(i.CPF=l),e_(l)}),og(),Z0(),og(),Cl(10,"div",1)(11,"po-datepicker",7),gw("ngModelChange",function(l){return Jy(s),Zx(i.birthDate,l)||(i.birthDate=l),e_(l)}),og(),Z0(),Cl(12,"po-input",8),gw("ngModelChange",function(l){return Jy(s),Zx(i.genre,l)||(i.genre=l),e_(l)}),og(),Z0(),og(),Cl(13,"div",1)(14,"po-password",9),gw("ngModelChange",function(l){return Jy(s),Zx(i.password,l)||(i.password=l),e_(l)}),og(),Z0(),Cl(15,"po-password",10),gw("ngModelChange",function(l){return Jy(s),Zx(i.confirmPassword,l)||(i.confirmPassword=l),e_(l)}),og(),Z0(),og()()()();}a&2&&(Lp(5),pw("ngModel",i.registration),ZE("p-tooltip",i.registrationTooltip),X0(),Lp(),pw("ngModel",i.email),ZE("p-tooltip",i.emailTooltip),X0(),Lp(2),pw("ngModel",i.name),ZE("p-tooltip",i.nameTooltip),X0(),Lp(),pw("ngModel",i.CPF),X0(),Lp(2),pw("ngModel",i.birthDate),X0(),Lp(),pw("ngModel",i.genre),X0(),Lp(2),pw("ngModel",i.password),ZE("p-tooltip",i.passwordTooltip),X0(),Lp(),pw("ngModel",i.confirmPassword),ZE("p-pattern",i.password),X0());},dependencies:[lY,sY,aY,gk,fk,Wde,Uz,q3,Uhe,ONe,ri],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tooltip - New User"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tooltip-new-user"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:false,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo da diretiva Po-Tooltip."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoTooltipDirective"),og()(),Cl(12,"div",2)(13,"p"),qx(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),og(),Cl(15,"p"),qx(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),og(),Cl(17,"p"),qx(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Cl(19,"a",6)(20,"strong"),qx(21,"po-popover"),og()(),qx(22,"."),og(),Cl(23,"h4"),qx(24,"Tokens customiz\xE1veis"),og(),Cl(25,"p"),qx(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(27,"blockquote")(28,"p"),qx(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(30,"a",7),qx(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(32,"."),og()(),Cl(33,"table")(34,"thead")(35,"tr")(36,"th"),qx(37,"Propriedade"),og(),Cl(38,"th"),qx(39,"Descri\xE7\xE3o"),og(),Cl(40,"th"),qx(41,"Valor Padr\xE3o"),og()()(),Cl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),qx(46,"Default Values"),og()(),Hl(47,"td")(48,"td"),og(),Cl(49,"tr")(50,"td")(51,"code"),qx(52,"--border-radius"),og(),qx(53," \xA0"),og(),Cl(54,"td"),qx(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(56,"td")(57,"code"),qx(58,"var(--border-radius-md)"),og()()(),Cl(59,"tr")(60,"td")(61,"code"),qx(62,"--color"),og()(),Cl(63,"td"),qx(64,"Cor principal da tooltip"),og(),Cl(65,"td")(66,"code"),qx(67,"var(--color-neutral-dark-80)"),og()()(),Cl(68,"tr")(69,"td")(70,"code"),qx(71,"--font-family"),og()(),Cl(72,"td"),qx(73,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(74,"td")(75,"code"),qx(76,"var(--font-family-theme)"),og()()(),Cl(77,"tr")(78,"td")(79,"code"),qx(80,"--text-color"),og()(),Cl(81,"td"),qx(82,"Cor do texto"),og(),Cl(83,"td")(84,"code"),qx(85,"var(--color-neutral-light-00)"),og()()()()()(),Cl(86,"div",8)(87,"h4",9),qx(88,"Seletor"),og(),Cl(89,"pre",10),qx(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),og()(),Cl(91,"h4",11),qx(92,"Propriedades"),og(),Cl(93,"table",12)(94,"tr",13)(95,"th",14),qx(96,"Nome"),og(),Cl(97,"th",14),qx(98,"Tipo"),og(),Cl(99,"th",14),qx(100,"Padr\xE3o"),og(),Cl(101,"th",14),qx(102,"Descri\xE7\xE3o"),og()(),Cl(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),qx(107," p-append-in-body"),Hl(108,"br"),og()()(),Cl(109,"td",19)(110,"code",20),qx(111,"boolean"),og()(),Cl(112,"td",21)(113,"p")(114,"code"),qx(115,"false"),og()()(),Cl(116,"td",22)(117,"em")(118,"strong"),qx(119,"(opcional)"),og()(),Cl(120,"p"),qx(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),og()()(),Cl(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),qx(126," p-hide-arrow"),Hl(127,"br"),og()()(),Cl(128,"td",19)(129,"code",20),qx(130,"boolean"),og()(),Cl(131,"td",21)(132,"p")(133,"code"),qx(134,"false"),og()()(),Cl(135,"td",22)(136,"em")(137,"strong"),qx(138,"(opcional)"),og()(),Cl(139,"p"),qx(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),og(),Cl(141,"p"),qx(142,"Quando "),Cl(143,"code"),qx(144,"true"),og(),qx(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Cl(146,"code"),qx(147,"false"),og(),qx(148,", a seta ser\xE1 exibida normalmente."),og(),Cl(149,"p"),qx(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),og()()(),Cl(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),qx(155," p-inner-html"),Hl(156,"br"),og()()(),Cl(157,"td",19)(158,"code",20),qx(159,"boolean"),og()(),Cl(160,"td",21)(161,"p")(162,"code"),qx(163,"false"),og()()(),Cl(164,"td",22)(165,"em")(166,"strong"),qx(167,"(opcional)"),og()(),Cl(168,"p"),qx(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),og(),Cl(170,"p"),qx(171,"Quando "),Cl(172,"code"),qx(173,"true"),og(),qx(174,", o valor da propriedade "),Cl(175,"code"),qx(176,"tooltip"),og(),qx(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Cl(178,"code"),qx(179,"false"),og(),qx(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),og()()(),Cl(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),qx(185," p-tooltip"),Hl(186,"br"),og()()(),Cl(187,"td",19)(188,"code",23),qx(189,"string"),og()(),Cl(190,"td",21),qx(191,"-"),og(),Cl(192,"td",22)(193,"p"),qx(194,"Habilita e atribui um texto ao po-tooltip."),og(),Cl(195,"p")(196,"strong"),qx(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()()()(),Cl(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),qx(202," p-tooltip-position"),Hl(203,"br"),og()()(),Cl(204,"td",19)(205,"code",23),qx(206,"string"),og()(),Cl(207,"td",21)(208,"p"),qx(209,"bottom"),og()(),Cl(210,"td",22)(211,"em")(212,"strong"),qx(213,"(opcional)"),og()(),Cl(214,"p"),qx(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Cl(216,"p"),qx(217,"Posi\xE7\xF5es v\xE1lidas:"),og(),Cl(218,"ul")(219,"li")(220,"code"),qx(221,"right"),og(),qx(222,": Posiciona o po-tooltip no lado direito do componente alvo."),og(),Cl(223,"li")(224,"code"),qx(225,"right-bottom"),og(),qx(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),og(),Cl(227,"li")(228,"code"),qx(229,"right-top"),og(),qx(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),og(),Cl(231,"li")(232,"code"),qx(233,"bottom"),og(),qx(234,": Posiciona o po-tooltip abaixo do componente alvo."),og(),Cl(235,"li")(236,"code"),qx(237,"bottom-left"),og(),qx(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),og(),Cl(239,"li")(240,"code"),qx(241,"bottom-right"),og(),qx(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),og(),Cl(243,"li")(244,"code"),qx(245,"left"),og(),qx(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),og(),Cl(247,"li")(248,"code"),qx(249,"left-top"),og(),qx(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),og(),Cl(251,"li")(252,"code"),qx(253,"left-bottom"),og(),qx(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),og(),Cl(255,"li")(256,"code"),qx(257,"top"),og(),qx(258,": Posiciona o po-tooltip acima do componente alvo."),og(),Cl(259,"li")(260,"code"),qx(261,"top-right"),og(),qx(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),og(),Cl(263,"li")(264,"code"),qx(265,"top-left"),og(),qx(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),og()()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-tooltip-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,pe,me,de,ce],encapsulation:2})}return n})();var xe=[{path:"",component:ue}],ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[bL.forChild(xe),bL]})}return n})();var Ye=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ca,ge]})}return n})();export{Ye as DocPoTooltipModule};