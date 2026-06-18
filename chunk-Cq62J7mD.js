import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,cd as Ma,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,bH as E3,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,bD as Ade,aJ as Ghe,ce as uNe,aq as ux,at as dx,cc as za,aI as dc,c9 as Qhe,a7 as uN,a3 as pNe,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var Pe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:false,decls:1,vars:0,template:function(i,o){i&1&&Wl(0,"po-page-change-password");},dependencies:[Ma],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Change Password Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-change-password></po-page-change-password>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-basic"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Pe],encapsulation:2})}return a})();var Se=(()=>{class a{poDialog=f(zde);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:false};}restore(){this.componentsSize="medium",this.hideCurrentPassword=false,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:false},this.requirements=[],this.secondaryLogo=void 0;}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()});}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&ql(Ma,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let m=Ex();Sl(0,"po-page-change-password",2),ht("p-submit",function(p){return o.submit(p)}),sg(),Wl(1,"po-divider",3),Sl(2,"form",null,0)(4,"div",4)(5,"po-input",5),Ew("ngModelChange",function(p){return Xy(m),tN(o.urlHome,p)||(o.urlHome=p),Qy(p)}),sg(),JA(),Sl(6,"po-input",6),Ew("ngModelChange",function(p){return Xy(m),tN(o.recovery,p)||(o.recovery=p),Qy(p)}),sg(),JA(),sg(),Sl(7,"div",4)(8,"po-input",7),Ew("ngModelChange",function(p){return Xy(m),tN(o.urlBack,p)||(o.urlBack=p),Qy(p)}),sg(),JA(),Sl(9,"po-input",8),Ew("ngModelChange",function(p){return Xy(m),tN(o.logo,p)||(o.logo=p),Qy(p)}),sg(),JA(),sg(),Sl(10,"div",4)(11,"po-input",9),Ew("ngModelChange",function(p){return Xy(m),tN(o.secondaryLogo,p)||(o.secondaryLogo=p),Qy(p)}),sg(),JA(),Sl(12,"po-switch",10),Ew("ngModelChange",function(p){return Xy(m),tN(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),Qy(p)}),sg(),JA(),sg(),Sl(13,"po-radio-group",11),Ew("ngModelChange",function(p){return Xy(m),tN(o.componentsSize,p)||(o.componentsSize=p),Qy(p)}),sg(),JA(),Wl(14,"br")(15,"po-divider"),Sl(16,"form",null,1)(18,"div",4)(19,"po-input",12),Ew("ngModelChange",function(p){return Xy(m),tN(o.requirement.requirement,p)||(o.requirement.requirement=p),Qy(p)}),sg(),JA(),Sl(20,"po-switch",13),Ew("ngModelChange",function(p){return Xy(m),tN(o.requirement.status,p)||(o.requirement.status=p),Qy(p)}),sg(),JA(),sg(),Sl(21,"div",4)(22,"po-button",14),ht("p-click",function(){return o.addRequirement()}),sg()()(),Wl(23,"po-divider"),Sl(24,"div",4)(25,"po-button",15),ht("p-click",function(){return o.restore()}),sg()()();}if(i&2){let m=xx(17);tw("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),Vp(5),Dw("ngModel",o.urlHome),t0(),Vp(),Dw("ngModel",o.recovery),t0(),Vp(2),Dw("ngModel",o.urlBack),t0(),Vp(),Dw("ngModel",o.logo),t0(),Vp(2),Dw("ngModel",o.secondaryLogo),t0(),Vp(),Dw("ngModel",o.hideCurrentPassword),t0(),Vp(),Dw("ngModel",o.componentsSize),tw("p-options",o.componentsSizeOptions),t0(),Vp(6),Dw("ngModel",o.requirement.requirement),t0(),Vp(),Dw("ngModel",o.requirement.status),t0(),Vp(2),tw("p-disabled",m.form.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Pde,E3,Ma],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Change Password Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-change-password
  [p-components-size]="componentsSize"
  [p-hide-current-password]="hideCurrentPassword"
  [p-logo]="logo"
  [p-recovery]="recovery"
  [p-requirements]="requirements"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="urlBack"
  [p-url-home]="urlHome"
  (p-submit)="submit($event)"
>
</po-page-change-password>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="urlHome" [(ngModel)]="urlHome" p-label="Url home"> </po-input>

    <po-input class="po-md-6" name="recovery" [(ngModel)]="recovery" p-label="Recovery"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="urlBack" [(ngModel)]="urlBack" p-label="Url back"> </po-input>

    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>

    <po-switch
      class="po-lg-6"
      name="hideCurrentPassword"
      [(ngModel)]="hideCurrentPassword"
      p-label="Hide current password"
    >
    </po-switch>
  </div>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <br />

  <po-divider />

  <form #fRequirements="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="requirement"
        [(ngModel)]="requirement.requirement"
        p-label="Requirement"
        p-required
      >
      </po-input>

      <po-switch class="po-md-6" name="requirementStatus" [(ngModel)]="requirement.status" p-label="Requirement Status">
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-3"
        p-label="Add Password Requirement"
        [p-disabled]="fRequirements.form.invalid"
        (p-click)="addRequirement()"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoRadioGroupOption } from '@po-ui/ng-components';
import {
  PoPageChangePassword,
  PoPageChangePasswordComponent,
  PoPageChangePasswordRequirement
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-labs',
  templateUrl: './sample-po-page-change-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  componentsSize: string;
  hideCurrentPassword: boolean;
  logo: string;
  recovery: string;
  requirement: PoPageChangePasswordRequirement;
  requirements: Array<PoPageChangePasswordRequirement>;
  secondaryLogo: string;
  urlBack: string;
  urlHome: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addRequirement() {
    this.requirements = [...this.requirements, this.requirement];
    this.requirement = { requirement: '', status: false };
  }

  restore() {
    this.componentsSize = 'medium';
    this.hideCurrentPassword = false;
    this.logo = undefined;
    this.urlBack = '';
    this.urlHome = '';
    this.recovery = '';
    this.requirement = { requirement: '', status: false };
    this.requirements = [];
    this.secondaryLogo = undefined;
  }

  submit(formData: PoPageChangePassword) {
    this.poDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData),
      componentsSize: this.componentsSize,
      ok: () => this.changePassword.openConfirmation()
    });
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-labs"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return a})();function Ne(a,X){if(a&1){let r=Ex();Sl(0,"po-page-edit",1)(1,"form",null,0)(3,"div",3)(4,"div",3),Wl(5,"po-input",4),JA(),Sl(6,"po-datepicker",5),Ew("ngModelChange",function(o){Xy(r);let m=Tx();return tN(m.birthday,o)||(m.birthday=o),Qy(o)}),sg(),JA(),Wl(7,"po-input",6),JA(),sg(),Sl(8,"div",3)(9,"po-select",7),Ew("ngModelChange",function(o){Xy(r);let m=Tx();return tN(m.country,o)||(m.country=o),Qy(o)}),sg(),JA(),Sl(10,"po-select",8),Ew("ngModelChange",function(o){Xy(r);let m=Tx();return tN(m.city,o)||(m.city=o),Qy(o)}),sg(),JA(),Wl(11,"po-input",9),JA(),sg(),Wl(12,"po-divider",10),Sl(13,"po-button",11),ht("p-click",function(){Xy(r);let o=Tx();return Qy(o.showChangePasswordScreen())}),sg()()()();}if(a&2){let r=Tx();tw("p-breadcrumb",r.breadcrumb),Vp(5),tw("ngModel",r.fullName),t0(),Vp(),Dw("ngModel",r.birthday),t0(),Vp(),tw("ngModel",r.email),t0(),Vp(2),Dw("ngModel",r.country),tw("p-options",r.countryOptions),t0(),Vp(),Dw("ngModel",r.city),tw("p-options",r.cityOptions),t0(),Vp(),tw("ngModel",r.phoneNumber),t0();}}function ze(a,X){if(a&1){let r=Ex();Sl(0,"po-page-change-password",12),ht("p-submit",function(){Xy(r);let o=Tx();return Qy(o.onSubmit())}),sg();}if(a&2){let r=Tx();tw("p-url-back",r.url)("p-url-home",r.url);}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize();}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=false,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home";}onSubmit(){this.changePassword.openConfirmation();}showChangePasswordScreen(){this.changePasswordScreen=true;}showProfileScreen(){this.changePasswordScreen=false;}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&ql(Ma,5),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:1,consts:[["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-url-back","p-url-home"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){i&1&&ux(0,Ne,14,9,"po-page-edit",1)(1,ze,1,2,"po-page-change-password",2),i&2&&dx(o.changePasswordScreen?1:0);},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,Ade,F3,Ghe,uNe,Ma],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Change Password Modify"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),sg(),Sl(13,"pre",7),Jx(14,`@if (!changePasswordScreen) {
  <po-page-edit p-title="User Profile" [p-breadcrumb]="breadcrumb">
    <form #formEditUser="ngForm">
      <div class="po-row">
        <div class="po-row">
          <po-input class="po-md-12" name="fullName" [ngModel]="fullName" p-label="Name"> </po-input>
          <po-datepicker
            class="po-md-6"
            name="birthday"
            [(ngModel)]="birthday"
            p-clean
            p-format="dd/mm/yyyy"
            p-label="Birthday Date"
            p-required
          >
          </po-datepicker>
          <po-input class="po-md-6" name="email" [ngModel]="email" p-label="Email"> </po-input>
        </div>
        <div class="po-row">
          <po-select
            class="po-md-6"
            name="country"
            [(ngModel)]="country"
            p-disabled
            p-label="Country"
            [p-options]="countryOptions"
          >
          </po-select>
          <po-select class="po-md-6" name="city" [(ngModel)]="city" p-disabled p-label="City" [p-options]="cityOptions">
          </po-select>
          <po-input
            class="po-md-12"
            name="phoneNumber"
            [ngModel]="phoneNumber"
            p-label="Phone Number"
            p-mask="(99)99999-9999"
          >
          </po-input>
        </div>
        <po-divider class="po-md-12 po-mt-3" p-label="Change Password"> </po-divider>
        <po-button
          class="po-pb-3 po-pt-3 po-md-3"
          p-label="Change Your Password"
          (p-click)="showChangePasswordScreen()"
        >
        </po-button>
      </div>
    </form>
  </po-page-edit>
} @else {
  <po-page-change-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-url-back]="url"
    [p-url-home]="url"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoPageChangePasswordComponent } from '@po-ui/ng-templates';

import { PoBreadcrumb, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-change-password-modify',
  templateUrl: './sample-po-page-change-password-modify.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordModifyComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

  birthday: string;
  changePasswordScreen: boolean;
  city: string;
  country: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  url: string;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/documentation/po-page-change-password' }, { label: 'Profile' }]
  };

  public readonly cityOptions: Array<PoSelectOption> = [{ label: 'S\xE3o Paulo', value: 'sp' }];

  public readonly countryOptions: Array<PoSelectOption> = [{ label: 'Brazil', value: 'br' }];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.birthday = '1991-11-28T00:00:00-02:00';
    this.changePasswordScreen = false;
    this.city = 'sp';
    this.country = 'br';
    this.email = 'natasha.romanova@mail.com.br';
    this.fullName = 'Natasha Romanova';
    this.phoneNumber = '119999999999';
    this.url = '/home';
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  showChangePasswordScreen() {
    this.changePasswordScreen = true;
  }

  showProfileScreen() {
    this.changePasswordScreen = false;
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-modify"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return a})();function He(a,X){if(a&1){let r=Ex();Sl(0,"po-page-login",2),ht("p-login-submit",function(){Xy(r);let o=Tx();return Qy(o.checkLogin())}),sg();}}function We(a,X){if(a&1){let r=Ex();Sl(0,"po-page-change-password",3),ht("p-submit",function(){Xy(r);let o=Tx();return Qy(o.onSubmit())}),sg();}if(a&2){let r=Tx();tw("p-requirements",r.requirements);}}var xe=(()=>{class a{changePassword;login=false;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login;}onSubmit(){this.changePassword.openConfirmation();}validateCases(r){if(r){let i=r.match(/[a-z]/g);return !(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return !(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&ql(Ma,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&(ux(0,He,1,0,"po-page-login",0),ux(1,We,1,1,"po-page-change-password",1)),i&2&&(dx(o.login?-1:0),Vp(),dx(o.login?1:-1));},dependencies:[Ma,za],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Change Password Create"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),sg(),Sl(13,"pre",7),Jx(14,`@if (!login) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (login) {
  <po-page-change-password
    p-hide-current-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    p-url-home="/home"
    [p-requirements]="requirements"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoPageChangePasswordComponent, PoPageChangePasswordRequirement } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-create',
  templateUrl: './sample-po-page-change-password-create.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordCreateComponent {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  login: boolean = false;
  requirements: Array<PoPageChangePasswordRequirement> = [
    { requirement: 'Use at least one symbol (ex. !, @, #).', status: this.validateSymbols.bind(this) },
    { requirement: 'Mix uppercase and lowercase characters.', status: this.validateCases.bind(this) },
    { requirement: 'Min of 5 characters.', status: this.validateCharacters.bind(this) }
  ];

  checkLogin() {
    this.login = !this.login;
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  validateCases(newPassword: string) {
    if (newPassword) {
      let result = newPassword.match(/[a-z]/g);

      if (!result || result.length < 1) {
        return false;
      }

      result = newPassword.match(/[A-Z]/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }

  validateCharacters(newPassword: string) {
    return newPassword && newPassword.length >= 5;
  }

  validateSymbols(newPassword: string) {
    if (newPassword) {
      const result = newPassword.match(/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-create"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,je,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,xe],encapsulation:2})}return a})();var Qe=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),ve=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:false,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),sg()(),Wl(5,"po-page-change-password",4)),i&2&&(Vp(5),tw("p-recovery",uN(1,Qe)));},dependencies:[dc,Qhe,Ma],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Change Password Request"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your Password Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-change-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-token="rzDsQiSYoq"
  p-url-new-password="https://thf.totvs.com.br/sample/api/new-password"
  [p-recovery]="{ url: 'https://po-sample-api.onrender.com/v1/users', type: 'all', contactMail: 'support@mail.com' }"
>
</po-page-change-password>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-request"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Je,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ve],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:false,decls:671,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do template do po-page-change-password."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoPageChangePasswordComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-page-change-password"),sg(),Jx(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),sg(),Sl(18,"p"),Jx(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),sg(),Sl(20,"p"),Jx(21,"A propriedade "),Sl(22,"code"),Jx(23,"p-url-new-password"),sg(),Jx(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Sl(25,"em"),Jx(26,"client side"),sg(),Jx(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Sl(28,"em"),Jx(29,"propriedades"),sg(),Jx(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),sg(),Sl(31,"p"),Jx(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(33,"em"),Jx(34,"assets"),sg(),Jx(35," no arquivo "),Sl(36,"strong"),Jx(37,"angular.json"),sg(),Jx(38," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Sl(39,"pre")(40,"code"),Jx(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()()(),Sl(42,"div",6)(43,"h4",7),Jx(44,"Seletor"),sg(),Sl(45,"pre",8),Jx(46,`<po-page-change-password
    p-components-size="string"
    p-hide-current-password="boolean"
    p-logo="string"
    p-no-autocomplete-password="boolean"
    p-recovery="string | Function | PoPageChangePasswordRecovery"
    p-requirements="PoPageChangePasswordRequirement[]"
    p-secondary-logo="string"
    (p-submit)="EventEmitter"
    p-token="string"
    p-url-back="string"
    p-url-home="string"
    p-url-new-password="string" >
</po-page-change-password>
`),sg()(),Sl(47,"h4",9),Jx(48,"Propriedades"),sg(),Sl(49,"table",10)(50,"tr",11)(51,"th",12),Jx(52,"Nome"),sg(),Sl(53,"th",12),Jx(54,"Tipo"),sg(),Sl(55,"th",12),Jx(56,"Padr\xE3o"),sg(),Sl(57,"th",12),Jx(58,"Descri\xE7\xE3o"),sg()(),Sl(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),Jx(63," p-components-size"),Wl(64,"br"),sg()()(),Sl(65,"td",17)(66,"code",18),Jx(67,"string"),sg()(),Sl(68,"td",19)(69,"p")(70,"code"),Jx(71,"medium"),sg()()(),Sl(72,"td",20)(73,"em")(74,"strong"),Jx(75,"(opcional)"),sg()(),Sl(76,"p"),Jx(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(78,"ul")(79,"li")(80,"code"),Jx(81,"small"),sg(),Jx(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(83,"li")(84,"code"),Jx(85,"medium"),sg(),Jx(86,": aplica a medida medium de cada componente."),sg()(),Sl(87,"blockquote")(88,"p"),Jx(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(90,"code"),Jx(91,"medium"),sg(),Jx(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(93,"a",21),Jx(94,"po-theme"),sg(),Jx(95,"."),sg()()()(),Sl(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),Jx(100," p-hide-current-password"),Wl(101,"br"),sg()()(),Sl(102,"td",17)(103,"code",22),Jx(104,"boolean"),sg()(),Sl(105,"td",19)(106,"p")(107,"code"),Jx(108,"false"),sg()()(),Sl(109,"td",20)(110,"em")(111,"strong"),Jx(112,"(opcional)"),sg()(),Sl(113,"p"),Jx(114,"Esconde o campo "),Sl(115,"code"),Jx(116,"Senha atual"),sg(),Jx(117," para que o template seja para cria\xE7\xE3o de senha."),sg()()(),Sl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),Jx(122," p-logo"),Wl(123,"br"),sg()()(),Sl(124,"td",17)(125,"code",18),Jx(126,"string"),sg()(),Sl(127,"td",19),Jx(128,"-"),sg(),Sl(129,"td",20)(130,"em")(131,"strong"),Jx(132,"(opcional)"),sg()(),Sl(133,"p"),Jx(134,"Caminho para a logomarca localizada na parte superior."),sg(),Sl(135,"blockquote")(136,"p"),Jx(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),sg()()()(),Sl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),Jx(142," p-no-autocomplete-password"),Wl(143,"br"),sg()()(),Sl(144,"td",17)(145,"code",22),Jx(146,"boolean"),sg()(),Sl(147,"td",19)(148,"p")(149,"code"),Jx(150,"true"),sg()()(),Sl(151,"td",20)(152,"em")(153,"strong"),Jx(154,"(opcional)"),sg()(),Sl(155,"p"),Jx(156,"Define a propriedade nativa "),Sl(157,"code"),Jx(158,"autocomplete"),sg(),Jx(159," do campo como "),Sl(160,"code"),Jx(161,"off"),sg(),Jx(162,"."),sg(),Sl(163,"blockquote")(164,"p"),Jx(165,"No input de senha("),Sl(166,"code"),Jx(167,"po-password"),sg(),Jx(168,") ser\xE1 definido como "),Sl(169,"code"),Jx(170,"new-password"),sg(),Jx(171,"."),sg()()()(),Sl(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),Jx(176," p-recovery"),Wl(177,"br"),sg()()(),Sl(178,"td",17)(179,"code",18),Jx(180,"string "),sg(),Sl(181,"code",23),Jx(182," Function "),sg(),Sl(183,"code",24),Jx(184," PoPageChangePasswordRecovery"),sg()(),Sl(185,"td",19),Jx(186,"-"),sg(),Sl(187,"td",20)(188,"em")(189,"strong"),Jx(190,"(opcional)"),sg()(),Sl(191,"p"),Jx(192,"URL para a a\xE7\xE3o do link "),Sl(193,"code"),Jx(194,"Esqueceu a senha"),sg(),Jx(195,"."),sg(),Sl(196,"p"),Jx(197,"A propriedade aceita os seguintes tipos:"),sg(),Sl(198,"ul")(199,"li")(200,"p")(201,"strong"),Jx(202,"String"),sg(),Jx(203,": informe uma url externa ou uma rota v\xE1lida;"),sg()(),Sl(204,"li")(205,"p")(206,"strong"),Jx(207,"Function"),sg(),Jx(208,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),sg(),Sl(209,"pre")(210,"code"),Jx(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),sg()()(),Sl(212,"li")(213,"p")(214,"strong"),Jx(215,"PoPageChangePasswordRecovery"),sg(),Jx(216,": cria-se v\xEDnculo autom\xE1tico com o template "),Sl(217,"strong"),Jx(218,"po-modal-password-recovery"),sg(),Jx(219,`.
O objeto deve conter a `),Sl(220,"strong"),Jx(221,"url"),sg(),Jx(222," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Sl(223,"strong"),Jx(224,"tipo"),sg(),Jx(225,` de modal para recupera\xE7\xE3o de senha,
`),Sl(226,"strong"),Jx(227,"email"),sg(),Jx(228," para contato e "),Sl(229,"strong"),Jx(230,"m\xE1scara"),sg(),Jx(231," do campo de telefone."),sg()()(),Sl(232,"blockquote")(233,"p"),Jx(234,"Caso n\xE3o tenha valor o link "),Sl(235,"code"),Jx(236,"Esqueceu a senha"),sg(),Jx(237," desaparece."),sg()()()(),Sl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),Jx(242," p-requirements"),Wl(243,"br"),sg()()(),Sl(244,"td",17)(245,"code",25),Jx(246,"PoPageChangePasswordRequirement[]"),sg()(),Sl(247,"td",19),Jx(248,"-"),sg(),Sl(249,"td",20)(250,"em")(251,"strong"),Jx(252,"(opcional)"),sg()(),Sl(253,"p"),Jx(254,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),sg()()(),Sl(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),Jx(259," p-secondary-logo"),Wl(260,"br"),sg()()(),Sl(261,"td",17)(262,"code",18),Jx(263,"string"),sg()(),Sl(264,"td",19),Jx(265,"-"),sg(),Sl(266,"td",20)(267,"em")(268,"strong"),Jx(269,"(opcional)"),sg()(),Sl(270,"p"),Jx(271,"Caminho para a logomarca localizada no rodap\xE9."),sg()()(),Sl(272,"tr",13)(273,"td",14)(274,"div",26)(275,"span",27),Jx(276," (p-submit)"),Wl(277,"br"),sg()()(),Sl(278,"td",17)(279,"code",28),Jx(280,"EventEmitter"),sg()(),Sl(281,"td",19),Jx(282,"-"),sg(),Sl(283,"td",20)(284,"em")(285,"strong"),Jx(286,"(opcional)"),sg()(),Sl(287,"p"),Jx(288,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),sg(),Sl(289,"p"),Jx(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Sl(291,"code"),Jx(292,"openConfirmation"),sg(),Jx(293,". Exemplo:"),sg(),Sl(294,"pre")(295,"code"),Jx(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),sg()(),Sl(297,"blockquote")(298,"p"),Jx(299,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(300,"code"),Jx(301,"p-url-new-password"),sg(),Jx(302,"."),sg()()()(),Sl(303,"tr",13)(304,"td",14)(305,"div",15)(306,"span",16),Jx(307," p-token"),Wl(308,"br"),sg()()(),Sl(309,"td",17)(310,"code",18),Jx(311,"string"),sg()(),Sl(312,"td",19),Jx(313,"-"),sg(),Sl(314,"td",20)(315,"em")(316,"strong"),Jx(317,"(opcional)"),sg()(),Sl(318,"p"),Jx(319,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),sg(),Sl(320,"blockquote")(321,"p"),Jx(322,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),sg()()()(),Sl(323,"tr",13)(324,"td",14)(325,"div",15)(326,"span",16),Jx(327," p-url-back"),Wl(328,"br"),sg()()(),Sl(329,"td",17)(330,"code",18),Jx(331,"string"),sg()(),Sl(332,"td",19)(333,"p")(334,"code"),Jx(335,"/"),sg()()(),Sl(336,"td",20)(337,"em")(338,"strong"),Jx(339,"(opcional)"),sg()(),Sl(340,"p"),Jx(341,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),sg(),Sl(342,"blockquote")(343,"p"),Jx(344,"O bot\xE3o "),Sl(345,"code"),Jx(346,"Voltar"),sg(),Jx(347," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),Sl(348,"code"),Jx(349,"p-hide-current-password"),sg(),Jx(350,` for
falsa.`),sg()()()(),Sl(351,"tr",13)(352,"td",14)(353,"div",15)(354,"span",16),Jx(355," p-url-home"),Wl(356,"br"),sg()()(),Sl(357,"td",17)(358,"code",18),Jx(359,"string"),sg()(),Sl(360,"td",19)(361,"p")(362,"code"),Jx(363,"/"),sg()()(),Sl(364,"td",20)(365,"em")(366,"strong"),Jx(367,"(opcional)"),sg()(),Sl(368,"p"),Jx(369,"URL para a a\xE7\xE3o do bot\xE3o "),Sl(370,"code"),Jx(371,"Entrar no sistema"),sg(),Jx(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Sl(373,"code"),Jx(374,"openConfirmation"),sg(),Jx(375,"."),sg()()(),Sl(376,"tr",13)(377,"td",14)(378,"div",15)(379,"span",16),Jx(380," p-url-new-password"),Wl(381,"br"),sg()()(),Sl(382,"td",17)(383,"code",18),Jx(384,"string"),sg()(),Sl(385,"td",19),Jx(386,"-"),sg(),Sl(387,"td",20)(388,"em")(389,"strong"),Jx(390,"(opcional)"),sg()(),Sl(391,"p"),Jx(392,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),Sl(393,"code"),Jx(394,"p-submit"),sg(),Jx(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),sg(),Sl(396,"h3"),Jx(397,"Processo"),sg(),Sl(398,"p"),Jx(399,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),Sl(400,"strong"),Jx(401,"salvar"),sg(),Jx(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Sl(403,"code"),Jx(404,"POST"),sg(),Jx(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),sg(),Sl(406,"pre")(407,"code"),Jx(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),sg()(),Sl(409,"p"),Jx(410,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Sl(411,"code"),Jx(412,"204"),sg(),Jx(413,"."),sg(),Sl(414,"p"),Jx(415,"Em caso de "),Sl(416,"strong"),Jx(417,"sucesso"),sg(),Jx(418,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),sg(),Sl(419,"blockquote")(420,"p"),Jx(421,"O token ser\xE1 informado pela propriedade "),Sl(422,"code"),Jx(423,"p-token"),sg(),Jx(424,"do componente ou por um "),Sl(425,"em"),Jx(426,"query parameter"),sg(),Jx(427," na URL do template."),sg()(),Sl(428,"p")(429,"em"),Jx(430,"Processo finalizado."),sg()(),Wl(431,"hr"),Sl(432,"h4"),Jx(433,"Praticidade"),sg(),Sl(434,"p"),Jx(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Sl(436,"code"),Jx(437,"po-page-change-password"),sg(),Jx(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Sl(439,"code"),Jx(440,"/change-password"),sg(),Jx(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),sg(),Sl(442,"pre")(443,"code"),Jx(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'change-password', component: PoPageChangePasswordComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/new-password',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      }
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),sg()(),Sl(445,"p"),Jx(446,"O metadado "),Sl(447,"code"),Jx(448,"serviceApi"),sg(),Jx(449," deve ser a "),Sl(450,"strong"),Jx(451,"url"),sg(),Jx(452," para requisi\xE7\xE3o dos recursos de troca de senha. E "),Sl(453,"code"),Jx(454,"recovery"),sg(),Jx(455,` \xE9 a interface
`),Sl(456,"code"),Jx(457,"PoPageChangePasswordRecovery"),sg(),Jx(458," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),sg(),Sl(459,"blockquote")(460,"p"),Jx(461,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),sg()()()()(),Sl(462,"h3",9),Jx(463,"M\xE9todos"),sg(),Sl(464,"table",29)(465,"tr",13)(466,"th",30)(467,"div",15)(468,"h4")(469,"span",16),Jx(470," openConfirmation "),sg()()()()(),Sl(471,"tr",20)(472,"td",20)(473,"p"),Jx(474,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),Sl(475,"code"),Jx(476,"p-url-home"),sg(),Jx(477,""),sg()()()(),Wl(478,"br"),Sl(479,"h3"),Jx(480,"Interfaces"),sg(),Sl(481,"h4",31)(482,"code",5),Jx(483,"PoPageChangePasswordRecovery"),sg()(),Sl(484,"div",2)(485,"p"),Jx(486,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Sl(487,"code"),Jx(488,"po-modal-password-recovery"),sg(),Jx(489,"."),sg()(),Sl(490,"h4",9),Jx(491,"Propriedades"),sg(),Sl(492,"table",10)(493,"tr",11)(494,"th",12),Jx(495,"Nome"),sg(),Sl(496,"th",12),Jx(497,"Tipo"),sg(),Sl(498,"th",12),Jx(499,"Descri\xE7\xE3o"),sg()(),Sl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),Jx(504," contactMail"),Wl(505,"br"),sg()()(),Sl(506,"td",17)(507,"code",18),Jx(508,"string"),sg()(),Sl(509,"td",20)(510,"em")(511,"strong"),Jx(512,"(opcional)"),sg()(),Sl(513,"p"),Jx(514,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),sg()()(),Sl(515,"tr",13)(516,"td",14)(517,"div",15)(518,"span",16),Jx(519," phoneMask"),Wl(520,"br"),sg()()(),Sl(521,"td",17)(522,"code",18),Jx(523,"string"),sg()(),Sl(524,"td",20)(525,"em")(526,"strong"),Jx(527,"(opcional)"),sg()(),Sl(528,"p"),Jx(529,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),sg()()(),Sl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),Jx(534," type"),Wl(535,"br"),sg()()(),Sl(536,"td",17)(537,"code",32),Jx(538,"PoModalPasswordRecoveryType"),sg()(),Sl(539,"td",20)(540,"em")(541,"strong"),Jx(542,"(opcional)"),sg()(),Sl(543,"p"),Jx(544,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Sl(545,"a",33),Jx(546,"PoModalPasswordRecoveryType"),sg(),Jx(547,"."),sg(),Sl(548,"blockquote")(549,"p"),Jx(550,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Sl(551,"code"),Jx(552,"PoModalPasswordRecoveryType.Email"),sg(),Jx(553,"."),sg()()()(),Sl(554,"tr",13)(555,"td",14)(556,"div",15)(557,"span",16),Jx(558," url"),Wl(559,"br"),sg()()(),Sl(560,"td",17)(561,"code",18),Jx(562,"string"),sg()(),Sl(563,"td",20)(564,"p"),Jx(565,"Endpoint usado pelo template "),Sl(566,"strong"),Jx(567,"PoModalPasswordRecovery"),sg(),Jx(568," para requisi\xE7\xE3o do recurso."),sg(),Sl(569,"blockquote")(570,"p"),Jx(571,"Saiba mais em "),Sl(572,"a",33),Jx(573,"PoModalPasswordRecovery"),sg(),Jx(574,"."),sg()()()()(),Sl(575,"h4",31)(576,"code",5),Jx(577,"PoPageChangePasswordRequirement"),sg()(),Sl(578,"div",2)(579,"p"),Jx(580,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),Sl(581,"code"),Jx(582,"p-password-requirements"),sg(),Jx(583,"."),sg()(),Sl(584,"h4",9),Jx(585,"Propriedades"),sg(),Sl(586,"table",10)(587,"tr",11)(588,"th",12),Jx(589,"Nome"),sg(),Sl(590,"th",12),Jx(591,"Tipo"),sg(),Sl(592,"th",12),Jx(593,"Descri\xE7\xE3o"),sg()(),Sl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),Jx(598," requirement"),Wl(599,"br"),sg()()(),Sl(600,"td",17)(601,"code",18),Jx(602,"string"),sg()(),Sl(603,"td",20)(604,"p"),Jx(605,"Requisito."),sg()()(),Sl(606,"tr",13)(607,"td",14)(608,"div",15)(609,"span",16),Jx(610," status"),Wl(611,"br"),sg()()(),Sl(612,"td",17)(613,"code",22),Jx(614,"boolean "),sg(),Sl(615,"code",23),Jx(616," Function"),sg()(),Sl(617,"td",20)(618,"p"),Jx(619,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),sg(),Sl(620,"p"),Jx(621,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),sg()()()(),Sl(622,"h4",31)(623,"code",5),Jx(624,"PoPageChangePassword"),sg()(),Sl(625,"div",2)(626,"p"),Jx(627,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Sl(628,"code"),Jx(629,"po-page-change-password"),sg(),Jx(630,"."),sg()(),Sl(631,"h4",9),Jx(632,"Propriedades"),sg(),Sl(633,"table",10)(634,"tr",11)(635,"th",12),Jx(636,"Nome"),sg(),Sl(637,"th",12),Jx(638,"Tipo"),sg(),Sl(639,"th",12),Jx(640,"Descri\xE7\xE3o"),sg()(),Sl(641,"tr",13)(642,"td",14)(643,"div",15)(644,"span",16),Jx(645," currentPassword"),Wl(646,"br"),sg()()(),Sl(647,"td",17)(648,"code",18),Jx(649,"string"),sg()(),Sl(650,"td",20)(651,"em")(652,"strong"),Jx(653,"(opcional)"),sg()(),Sl(654,"p"),Jx(655,"Senha atual"),sg()()(),Sl(656,"tr",13)(657,"td",14)(658,"div",15)(659,"span",16),Jx(660," newPassword"),Wl(661,"br"),sg()()(),Sl(662,"td",17)(663,"code",18),Jx(664,"string"),sg()(),Sl(665,"td",20)(666,"em")(667,"strong"),Jx(668,"(opcional)"),sg()(),Sl(669,"p"),Jx(670,"Nova senha"),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var qe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-page-change-password-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),sg()()()),i&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,we,Ee,fe,ye,_e,Me],encapsulation:2})}return a})();var Xe=[{path:"",component:qe}],Te=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(Xe),pL]})}return a})();var zt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};