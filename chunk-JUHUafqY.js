import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,c5 as Ode,cd as Ma,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,b4 as O3,c8 as Sde,bH as k3,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,av as Yl,aw as uo,ax as fo,bD as Mde,aJ as Uhe,ce as lNe,aq as fx,at as hx,cc as za,aI as dc,c9 as $he,a7 as fN,a3 as aNe,aA as Rx,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var Pe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:false,decls:1,vars:0,template:function(i,o){i&1&&Gl(0,"po-page-change-password");},dependencies:[Ma],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Change Password Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-change-password></po-page-change-password>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-change-password-basic"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,De,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Pe],encapsulation:2})}return a})();var Se=(()=>{class a{poDialog=f(Ode);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:false};}restore(){this.componentsSize="medium",this.hideCurrentPassword=false,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:false},this.requirements=[],this.secondaryLogo=void 0;}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()});}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&Yl(Ma,7),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let m=Cx();Tl(0,"po-page-change-password",2),ht("p-submit",function(p){return o.submit(p)}),sg(),Gl(1,"po-divider",3),Tl(2,"form",null,0)(4,"div",4)(5,"po-input",5),Ew("ngModelChange",function(p){return Ky(m),rN(o.urlHome,p)||(o.urlHome=p),Xy(p)}),sg(),t0(),Tl(6,"po-input",6),Ew("ngModelChange",function(p){return Ky(m),rN(o.recovery,p)||(o.recovery=p),Xy(p)}),sg(),t0(),sg(),Tl(7,"div",4)(8,"po-input",7),Ew("ngModelChange",function(p){return Ky(m),rN(o.urlBack,p)||(o.urlBack=p),Xy(p)}),sg(),t0(),Tl(9,"po-input",8),Ew("ngModelChange",function(p){return Ky(m),rN(o.logo,p)||(o.logo=p),Xy(p)}),sg(),t0(),sg(),Tl(10,"div",4)(11,"po-input",9),Ew("ngModelChange",function(p){return Ky(m),rN(o.secondaryLogo,p)||(o.secondaryLogo=p),Xy(p)}),sg(),t0(),Tl(12,"po-switch",10),Ew("ngModelChange",function(p){return Ky(m),rN(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),Xy(p)}),sg(),t0(),sg(),Tl(13,"po-radio-group",11),Ew("ngModelChange",function(p){return Ky(m),rN(o.componentsSize,p)||(o.componentsSize=p),Xy(p)}),sg(),t0(),Gl(14,"br")(15,"po-divider"),Tl(16,"form",null,1)(18,"div",4)(19,"po-input",12),Ew("ngModelChange",function(p){return Ky(m),rN(o.requirement.requirement,p)||(o.requirement.requirement=p),Xy(p)}),sg(),t0(),Tl(20,"po-switch",13),Ew("ngModelChange",function(p){return Ky(m),rN(o.requirement.status,p)||(o.requirement.status=p),Xy(p)}),sg(),t0(),sg(),Tl(21,"div",4)(22,"po-button",14),ht("p-click",function(){return o.addRequirement()}),sg()()(),Gl(23,"po-divider"),Tl(24,"div",4)(25,"po-button",15),ht("p-click",function(){return o.restore()}),sg()()();}if(i&2){let m=Ox(17);tw("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),Vp(5),Dw("ngModel",o.urlHome),r0(),Vp(),Dw("ngModel",o.recovery),r0(),Vp(2),Dw("ngModel",o.urlBack),r0(),Vp(),Dw("ngModel",o.logo),r0(),Vp(2),Dw("ngModel",o.secondaryLogo),r0(),Vp(),Dw("ngModel",o.hideCurrentPassword),r0(),Vp(),Dw("ngModel",o.componentsSize),tw("p-options",o.componentsSizeOptions),r0(),Vp(6),Dw("ngModel",o.requirement.requirement),r0(),Vp(),Dw("ngModel",o.requirement.status),r0(),Vp(2),tw("p-disabled",m.form.invalid);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,O3,Sde,k3,Ma],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Change Password Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-change-password
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-change-password-labs"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Be,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return a})();function Ne(a,X){if(a&1){let r=Cx();Tl(0,"po-page-edit",1)(1,"form",null,0)(3,"div",3)(4,"div",3),Gl(5,"po-input",4),t0(),Tl(6,"po-datepicker",5),Ew("ngModelChange",function(o){Ky(r);let m=Rx();return rN(m.birthday,o)||(m.birthday=o),Xy(o)}),sg(),t0(),Gl(7,"po-input",6),t0(),sg(),Tl(8,"div",3)(9,"po-select",7),Ew("ngModelChange",function(o){Ky(r);let m=Rx();return rN(m.country,o)||(m.country=o),Xy(o)}),sg(),t0(),Tl(10,"po-select",8),Ew("ngModelChange",function(o){Ky(r);let m=Rx();return rN(m.city,o)||(m.city=o),Xy(o)}),sg(),t0(),Gl(11,"po-input",9),t0(),sg(),Gl(12,"po-divider",10),Tl(13,"po-button",11),ht("p-click",function(){Ky(r);let o=Rx();return Xy(o.showChangePasswordScreen())}),sg()()()();}if(a&2){let r=Rx();tw("p-breadcrumb",r.breadcrumb),Vp(5),tw("ngModel",r.fullName),r0(),Vp(),Dw("ngModel",r.birthday),r0(),Vp(),tw("ngModel",r.email),r0(),Vp(2),Dw("ngModel",r.country),tw("p-options",r.countryOptions),r0(),Vp(),Dw("ngModel",r.city),tw("p-options",r.cityOptions),r0(),Vp(),tw("ngModel",r.phoneNumber),r0();}}function ze(a,X){if(a&1){let r=Cx();Tl(0,"po-page-change-password",12),ht("p-submit",function(){Ky(r);let o=Rx();return Xy(o.onSubmit())}),sg();}if(a&2){let r=Rx();tw("p-url-back",r.url)("p-url-home",r.url);}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize();}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=false,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home";}onSubmit(){this.changePassword.openConfirmation();}showChangePasswordScreen(){this.changePasswordScreen=true;}showProfileScreen(){this.changePasswordScreen=false;}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&Yl(Ma,5),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:1,consts:[["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-url-back","p-url-home"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){i&1&&fx(0,Ne,14,9,"po-page-edit",1)(1,ze,1,2,"po-page-change-password",2),i&2&&hx(o.changePasswordScreen?1:0);},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,Mde,O3,Uhe,lNe,Ma],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Change Password Modify"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),sg(),Tl(13,"pre",7),tN(14,`@if (!changePasswordScreen) {
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-change-password-modify"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,be],encapsulation:2})}return a})();function He(a,X){if(a&1){let r=Cx();Tl(0,"po-page-login",2),ht("p-login-submit",function(){Ky(r);let o=Rx();return Xy(o.checkLogin())}),sg();}}function We(a,X){if(a&1){let r=Cx();Tl(0,"po-page-change-password",3),ht("p-submit",function(){Ky(r);let o=Rx();return Xy(o.onSubmit())}),sg();}if(a&2){let r=Rx();tw("p-requirements",r.requirements);}}var xe=(()=>{class a{changePassword;login=false;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login;}onSubmit(){this.changePassword.openConfirmation();}validateCases(r){if(r){let i=r.match(/[a-z]/g);return !(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return !(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&Yl(Ma,7),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&(fx(0,He,1,0,"po-page-login",0),fx(1,We,1,1,"po-page-change-password",1)),i&2&&(hx(o.login?-1:0),Vp(),hx(o.login?1:-1));},dependencies:[Ma,za],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Change Password Create"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),sg(),Tl(13,"pre",7),tN(14,`@if (!login) {
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-change-password-create"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,je,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,xe],encapsulation:2})}return a})();var Qe=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),ve=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:false,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(Tl(0,"po-container")(1,"div",0),Gl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),sg()(),Gl(5,"po-page-change-password",4)),i&2&&(Vp(5),tw("p-recovery",fN(1,Qe)));},dependencies:[dc,$he,Ma],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Change Password Request"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-change-password-request"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Je,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ve],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:false,decls:671,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do template do po-page-change-password."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoPageChangePasswordComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-page-change-password"),sg(),tN(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),sg(),Tl(18,"p"),tN(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),sg(),Tl(20,"p"),tN(21,"A propriedade "),Tl(22,"code"),tN(23,"p-url-new-password"),sg(),tN(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Tl(25,"em"),tN(26,"client side"),sg(),tN(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Tl(28,"em"),tN(29,"propriedades"),sg(),tN(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),sg(),Tl(31,"p"),tN(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(33,"em"),tN(34,"assets"),sg(),tN(35," no arquivo "),Tl(36,"strong"),tN(37,"angular.json"),sg(),tN(38," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Tl(39,"pre")(40,"code"),tN(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()()(),Tl(42,"div",6)(43,"h4",7),tN(44,"Seletor"),sg(),Tl(45,"pre",8),tN(46,`<po-page-change-password
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
`),sg()(),Tl(47,"h4",9),tN(48,"Propriedades"),sg(),Tl(49,"table",10)(50,"tr",11)(51,"th",12),tN(52,"Nome"),sg(),Tl(53,"th",12),tN(54,"Tipo"),sg(),Tl(55,"th",12),tN(56,"Padr\xE3o"),sg(),Tl(57,"th",12),tN(58,"Descri\xE7\xE3o"),sg()(),Tl(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),tN(63," p-components-size"),Gl(64,"br"),sg()()(),Tl(65,"td",17)(66,"code",18),tN(67,"string"),sg()(),Tl(68,"td",19)(69,"p")(70,"code"),tN(71,"medium"),sg()()(),Tl(72,"td",20)(73,"em")(74,"strong"),tN(75,"(opcional)"),sg()(),Tl(76,"p"),tN(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(78,"ul")(79,"li")(80,"code"),tN(81,"small"),sg(),tN(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(83,"li")(84,"code"),tN(85,"medium"),sg(),tN(86,": aplica a medida medium de cada componente."),sg()(),Tl(87,"blockquote")(88,"p"),tN(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(90,"code"),tN(91,"medium"),sg(),tN(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(93,"a",21),tN(94,"po-theme"),sg(),tN(95,"."),sg()()()(),Tl(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),tN(100," p-hide-current-password"),Gl(101,"br"),sg()()(),Tl(102,"td",17)(103,"code",22),tN(104,"boolean"),sg()(),Tl(105,"td",19)(106,"p")(107,"code"),tN(108,"false"),sg()()(),Tl(109,"td",20)(110,"em")(111,"strong"),tN(112,"(opcional)"),sg()(),Tl(113,"p"),tN(114,"Esconde o campo "),Tl(115,"code"),tN(116,"Senha atual"),sg(),tN(117," para que o template seja para cria\xE7\xE3o de senha."),sg()()(),Tl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),tN(122," p-logo"),Gl(123,"br"),sg()()(),Tl(124,"td",17)(125,"code",18),tN(126,"string"),sg()(),Tl(127,"td",19),tN(128,"-"),sg(),Tl(129,"td",20)(130,"em")(131,"strong"),tN(132,"(opcional)"),sg()(),Tl(133,"p"),tN(134,"Caminho para a logomarca localizada na parte superior."),sg(),Tl(135,"blockquote")(136,"p"),tN(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),sg()()()(),Tl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),tN(142," p-no-autocomplete-password"),Gl(143,"br"),sg()()(),Tl(144,"td",17)(145,"code",22),tN(146,"boolean"),sg()(),Tl(147,"td",19)(148,"p")(149,"code"),tN(150,"true"),sg()()(),Tl(151,"td",20)(152,"em")(153,"strong"),tN(154,"(opcional)"),sg()(),Tl(155,"p"),tN(156,"Define a propriedade nativa "),Tl(157,"code"),tN(158,"autocomplete"),sg(),tN(159," do campo como "),Tl(160,"code"),tN(161,"off"),sg(),tN(162,"."),sg(),Tl(163,"blockquote")(164,"p"),tN(165,"No input de senha("),Tl(166,"code"),tN(167,"po-password"),sg(),tN(168,") ser\xE1 definido como "),Tl(169,"code"),tN(170,"new-password"),sg(),tN(171,"."),sg()()()(),Tl(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),tN(176," p-recovery"),Gl(177,"br"),sg()()(),Tl(178,"td",17)(179,"code",18),tN(180,"string "),sg(),Tl(181,"code",23),tN(182," Function "),sg(),Tl(183,"code",24),tN(184," PoPageChangePasswordRecovery"),sg()(),Tl(185,"td",19),tN(186,"-"),sg(),Tl(187,"td",20)(188,"em")(189,"strong"),tN(190,"(opcional)"),sg()(),Tl(191,"p"),tN(192,"URL para a a\xE7\xE3o do link "),Tl(193,"code"),tN(194,"Esqueceu a senha"),sg(),tN(195,"."),sg(),Tl(196,"p"),tN(197,"A propriedade aceita os seguintes tipos:"),sg(),Tl(198,"ul")(199,"li")(200,"p")(201,"strong"),tN(202,"String"),sg(),tN(203,": informe uma url externa ou uma rota v\xE1lida;"),sg()(),Tl(204,"li")(205,"p")(206,"strong"),tN(207,"Function"),sg(),tN(208,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),sg(),Tl(209,"pre")(210,"code"),tN(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),sg()()(),Tl(212,"li")(213,"p")(214,"strong"),tN(215,"PoPageChangePasswordRecovery"),sg(),tN(216,": cria-se v\xEDnculo autom\xE1tico com o template "),Tl(217,"strong"),tN(218,"po-modal-password-recovery"),sg(),tN(219,`.
O objeto deve conter a `),Tl(220,"strong"),tN(221,"url"),sg(),tN(222," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Tl(223,"strong"),tN(224,"tipo"),sg(),tN(225,` de modal para recupera\xE7\xE3o de senha,
`),Tl(226,"strong"),tN(227,"email"),sg(),tN(228," para contato e "),Tl(229,"strong"),tN(230,"m\xE1scara"),sg(),tN(231," do campo de telefone."),sg()()(),Tl(232,"blockquote")(233,"p"),tN(234,"Caso n\xE3o tenha valor o link "),Tl(235,"code"),tN(236,"Esqueceu a senha"),sg(),tN(237," desaparece."),sg()()()(),Tl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),tN(242," p-requirements"),Gl(243,"br"),sg()()(),Tl(244,"td",17)(245,"code",25),tN(246,"PoPageChangePasswordRequirement[]"),sg()(),Tl(247,"td",19),tN(248,"-"),sg(),Tl(249,"td",20)(250,"em")(251,"strong"),tN(252,"(opcional)"),sg()(),Tl(253,"p"),tN(254,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),sg()()(),Tl(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),tN(259," p-secondary-logo"),Gl(260,"br"),sg()()(),Tl(261,"td",17)(262,"code",18),tN(263,"string"),sg()(),Tl(264,"td",19),tN(265,"-"),sg(),Tl(266,"td",20)(267,"em")(268,"strong"),tN(269,"(opcional)"),sg()(),Tl(270,"p"),tN(271,"Caminho para a logomarca localizada no rodap\xE9."),sg()()(),Tl(272,"tr",13)(273,"td",14)(274,"div",26)(275,"span",27),tN(276," (p-submit)"),Gl(277,"br"),sg()()(),Tl(278,"td",17)(279,"code",28),tN(280,"EventEmitter"),sg()(),Tl(281,"td",19),tN(282,"-"),sg(),Tl(283,"td",20)(284,"em")(285,"strong"),tN(286,"(opcional)"),sg()(),Tl(287,"p"),tN(288,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),sg(),Tl(289,"p"),tN(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Tl(291,"code"),tN(292,"openConfirmation"),sg(),tN(293,". Exemplo:"),sg(),Tl(294,"pre")(295,"code"),tN(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),sg()(),Tl(297,"blockquote")(298,"p"),tN(299,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Tl(300,"code"),tN(301,"p-url-new-password"),sg(),tN(302,"."),sg()()()(),Tl(303,"tr",13)(304,"td",14)(305,"div",15)(306,"span",16),tN(307," p-token"),Gl(308,"br"),sg()()(),Tl(309,"td",17)(310,"code",18),tN(311,"string"),sg()(),Tl(312,"td",19),tN(313,"-"),sg(),Tl(314,"td",20)(315,"em")(316,"strong"),tN(317,"(opcional)"),sg()(),Tl(318,"p"),tN(319,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),sg(),Tl(320,"blockquote")(321,"p"),tN(322,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),sg()()()(),Tl(323,"tr",13)(324,"td",14)(325,"div",15)(326,"span",16),tN(327," p-url-back"),Gl(328,"br"),sg()()(),Tl(329,"td",17)(330,"code",18),tN(331,"string"),sg()(),Tl(332,"td",19)(333,"p")(334,"code"),tN(335,"/"),sg()()(),Tl(336,"td",20)(337,"em")(338,"strong"),tN(339,"(opcional)"),sg()(),Tl(340,"p"),tN(341,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),sg(),Tl(342,"blockquote")(343,"p"),tN(344,"O bot\xE3o "),Tl(345,"code"),tN(346,"Voltar"),sg(),tN(347," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),Tl(348,"code"),tN(349,"p-hide-current-password"),sg(),tN(350,` for
falsa.`),sg()()()(),Tl(351,"tr",13)(352,"td",14)(353,"div",15)(354,"span",16),tN(355," p-url-home"),Gl(356,"br"),sg()()(),Tl(357,"td",17)(358,"code",18),tN(359,"string"),sg()(),Tl(360,"td",19)(361,"p")(362,"code"),tN(363,"/"),sg()()(),Tl(364,"td",20)(365,"em")(366,"strong"),tN(367,"(opcional)"),sg()(),Tl(368,"p"),tN(369,"URL para a a\xE7\xE3o do bot\xE3o "),Tl(370,"code"),tN(371,"Entrar no sistema"),sg(),tN(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Tl(373,"code"),tN(374,"openConfirmation"),sg(),tN(375,"."),sg()()(),Tl(376,"tr",13)(377,"td",14)(378,"div",15)(379,"span",16),tN(380," p-url-new-password"),Gl(381,"br"),sg()()(),Tl(382,"td",17)(383,"code",18),tN(384,"string"),sg()(),Tl(385,"td",19),tN(386,"-"),sg(),Tl(387,"td",20)(388,"em")(389,"strong"),tN(390,"(opcional)"),sg()(),Tl(391,"p"),tN(392,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),Tl(393,"code"),tN(394,"p-submit"),sg(),tN(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),sg(),Tl(396,"h3"),tN(397,"Processo"),sg(),Tl(398,"p"),tN(399,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),Tl(400,"strong"),tN(401,"salvar"),sg(),tN(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Tl(403,"code"),tN(404,"POST"),sg(),tN(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),sg(),Tl(406,"pre")(407,"code"),tN(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),sg()(),Tl(409,"p"),tN(410,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Tl(411,"code"),tN(412,"204"),sg(),tN(413,"."),sg(),Tl(414,"p"),tN(415,"Em caso de "),Tl(416,"strong"),tN(417,"sucesso"),sg(),tN(418,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),sg(),Tl(419,"blockquote")(420,"p"),tN(421,"O token ser\xE1 informado pela propriedade "),Tl(422,"code"),tN(423,"p-token"),sg(),tN(424,"do componente ou por um "),Tl(425,"em"),tN(426,"query parameter"),sg(),tN(427," na URL do template."),sg()(),Tl(428,"p")(429,"em"),tN(430,"Processo finalizado."),sg()(),Gl(431,"hr"),Tl(432,"h4"),tN(433,"Praticidade"),sg(),Tl(434,"p"),tN(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Tl(436,"code"),tN(437,"po-page-change-password"),sg(),tN(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Tl(439,"code"),tN(440,"/change-password"),sg(),tN(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),sg(),Tl(442,"pre")(443,"code"),tN(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),sg()(),Tl(445,"p"),tN(446,"O metadado "),Tl(447,"code"),tN(448,"serviceApi"),sg(),tN(449," deve ser a "),Tl(450,"strong"),tN(451,"url"),sg(),tN(452," para requisi\xE7\xE3o dos recursos de troca de senha. E "),Tl(453,"code"),tN(454,"recovery"),sg(),tN(455,` \xE9 a interface
`),Tl(456,"code"),tN(457,"PoPageChangePasswordRecovery"),sg(),tN(458," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),sg(),Tl(459,"blockquote")(460,"p"),tN(461,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),sg()()()()(),Tl(462,"h3",9),tN(463,"M\xE9todos"),sg(),Tl(464,"table",29)(465,"tr",13)(466,"th",30)(467,"div",15)(468,"h4")(469,"span",16),tN(470," openConfirmation "),sg()()()()(),Tl(471,"tr",20)(472,"td",20)(473,"p"),tN(474,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),Tl(475,"code"),tN(476,"p-url-home"),sg(),tN(477,""),sg()()()(),Gl(478,"br"),Tl(479,"h3"),tN(480,"Interfaces"),sg(),Tl(481,"h4",31)(482,"code",5),tN(483,"PoPageChangePasswordRecovery"),sg()(),Tl(484,"div",2)(485,"p"),tN(486,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Tl(487,"code"),tN(488,"po-modal-password-recovery"),sg(),tN(489,"."),sg()(),Tl(490,"h4",9),tN(491,"Propriedades"),sg(),Tl(492,"table",10)(493,"tr",11)(494,"th",12),tN(495,"Nome"),sg(),Tl(496,"th",12),tN(497,"Tipo"),sg(),Tl(498,"th",12),tN(499,"Descri\xE7\xE3o"),sg()(),Tl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),tN(504," contactMail"),Gl(505,"br"),sg()()(),Tl(506,"td",17)(507,"code",18),tN(508,"string"),sg()(),Tl(509,"td",20)(510,"em")(511,"strong"),tN(512,"(opcional)"),sg()(),Tl(513,"p"),tN(514,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),sg()()(),Tl(515,"tr",13)(516,"td",14)(517,"div",15)(518,"span",16),tN(519," phoneMask"),Gl(520,"br"),sg()()(),Tl(521,"td",17)(522,"code",18),tN(523,"string"),sg()(),Tl(524,"td",20)(525,"em")(526,"strong"),tN(527,"(opcional)"),sg()(),Tl(528,"p"),tN(529,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),sg()()(),Tl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),tN(534," type"),Gl(535,"br"),sg()()(),Tl(536,"td",17)(537,"code",32),tN(538,"PoModalPasswordRecoveryType"),sg()(),Tl(539,"td",20)(540,"em")(541,"strong"),tN(542,"(opcional)"),sg()(),Tl(543,"p"),tN(544,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Tl(545,"a",33),tN(546,"PoModalPasswordRecoveryType"),sg(),tN(547,"."),sg(),Tl(548,"blockquote")(549,"p"),tN(550,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Tl(551,"code"),tN(552,"PoModalPasswordRecoveryType.Email"),sg(),tN(553,"."),sg()()()(),Tl(554,"tr",13)(555,"td",14)(556,"div",15)(557,"span",16),tN(558," url"),Gl(559,"br"),sg()()(),Tl(560,"td",17)(561,"code",18),tN(562,"string"),sg()(),Tl(563,"td",20)(564,"p"),tN(565,"Endpoint usado pelo template "),Tl(566,"strong"),tN(567,"PoModalPasswordRecovery"),sg(),tN(568," para requisi\xE7\xE3o do recurso."),sg(),Tl(569,"blockquote")(570,"p"),tN(571,"Saiba mais em "),Tl(572,"a",33),tN(573,"PoModalPasswordRecovery"),sg(),tN(574,"."),sg()()()()(),Tl(575,"h4",31)(576,"code",5),tN(577,"PoPageChangePasswordRequirement"),sg()(),Tl(578,"div",2)(579,"p"),tN(580,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),Tl(581,"code"),tN(582,"p-password-requirements"),sg(),tN(583,"."),sg()(),Tl(584,"h4",9),tN(585,"Propriedades"),sg(),Tl(586,"table",10)(587,"tr",11)(588,"th",12),tN(589,"Nome"),sg(),Tl(590,"th",12),tN(591,"Tipo"),sg(),Tl(592,"th",12),tN(593,"Descri\xE7\xE3o"),sg()(),Tl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),tN(598," requirement"),Gl(599,"br"),sg()()(),Tl(600,"td",17)(601,"code",18),tN(602,"string"),sg()(),Tl(603,"td",20)(604,"p"),tN(605,"Requisito."),sg()()(),Tl(606,"tr",13)(607,"td",14)(608,"div",15)(609,"span",16),tN(610," status"),Gl(611,"br"),sg()()(),Tl(612,"td",17)(613,"code",22),tN(614,"boolean "),sg(),Tl(615,"code",23),tN(616," Function"),sg()(),Tl(617,"td",20)(618,"p"),tN(619,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),sg(),Tl(620,"p"),tN(621,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),sg()()()(),Tl(622,"h4",31)(623,"code",5),tN(624,"PoPageChangePassword"),sg()(),Tl(625,"div",2)(626,"p"),tN(627,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Tl(628,"code"),tN(629,"po-page-change-password"),sg(),tN(630,"."),sg()(),Tl(631,"h4",9),tN(632,"Propriedades"),sg(),Tl(633,"table",10)(634,"tr",11)(635,"th",12),tN(636,"Nome"),sg(),Tl(637,"th",12),tN(638,"Tipo"),sg(),Tl(639,"th",12),tN(640,"Descri\xE7\xE3o"),sg()(),Tl(641,"tr",13)(642,"td",14)(643,"div",15)(644,"span",16),tN(645," currentPassword"),Gl(646,"br"),sg()()(),Tl(647,"td",17)(648,"code",18),tN(649,"string"),sg()(),Tl(650,"td",20)(651,"em")(652,"strong"),tN(653,"(opcional)"),sg()(),Tl(654,"p"),tN(655,"Senha atual"),sg()()(),Tl(656,"tr",13)(657,"td",14)(658,"div",15)(659,"span",16),tN(660," newPassword"),Gl(661,"br"),sg()()(),Tl(662,"td",17)(663,"code",18),tN(664,"string"),sg()(),Tl(665,"td",20)(666,"em")(667,"strong"),tN(668,"(opcional)"),sg()(),Tl(669,"p"),tN(670,"Nova senha"),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var qe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-page-change-password-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),sg()()()),i&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,we,Ee,fe,ye,_e,Me],encapsulation:2})}return a})();var Xe=[{path:"",component:qe}],Te=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Xe),vL]})}return a})();var zt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};