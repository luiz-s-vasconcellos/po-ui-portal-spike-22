import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,by as vle,bG as K1,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bB as ga,bd as na,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,as as $l,at as uo,au as fo,b9 as Ro,ai as ya,bH as lz,ao as QA,ar as JA,bF as X1,ah as uo$1,bC as Vp,a7 as Qx,a3 as D3,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var we=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:false,decls:1,vars:0,template:function(i,o){i&1&&Ul(0,"po-page-change-password");},dependencies:[K1],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Change Password Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-change-password></po-page-change-password>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-change-password-basic"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,we],encapsulation:2})}return a})();var Ee=(()=>{class a{poDialog=f(vle);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:false};}restore(){this.componentsSize="medium",this.hideCurrentPassword=false,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:false},this.requirements=[],this.secondaryLogo=void 0;}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()});}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&$l(K1,7),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let m=lx();wl(0,"po-page-change-password",2),ut("p-submit",function(p){return o.submit(p)}),ng(),Ul(1,"po-divider",3),wl(2,"form",null,0)(4,"div",4)(5,"po-input",5),pw("ngModelChange",function(p){return Qy(m),$x(o.urlHome,p)||(o.urlHome=p),Jy(p)}),ng(),$0(),wl(6,"po-input",6),pw("ngModelChange",function(p){return Qy(m),$x(o.recovery,p)||(o.recovery=p),Jy(p)}),ng(),$0(),ng(),wl(7,"div",4)(8,"po-input",7),pw("ngModelChange",function(p){return Qy(m),$x(o.urlBack,p)||(o.urlBack=p),Jy(p)}),ng(),$0(),wl(9,"po-input",8),pw("ngModelChange",function(p){return Qy(m),$x(o.logo,p)||(o.logo=p),Jy(p)}),ng(),$0(),ng(),wl(10,"div",4)(11,"po-input",9),pw("ngModelChange",function(p){return Qy(m),$x(o.secondaryLogo,p)||(o.secondaryLogo=p),Jy(p)}),ng(),$0(),wl(12,"po-switch",10),pw("ngModelChange",function(p){return Qy(m),$x(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),Jy(p)}),ng(),$0(),ng(),wl(13,"po-radio-group",11),pw("ngModelChange",function(p){return Qy(m),$x(o.componentsSize,p)||(o.componentsSize=p),Jy(p)}),ng(),$0(),Ul(14,"br")(15,"po-divider"),wl(16,"form",null,1)(18,"div",4)(19,"po-input",12),pw("ngModelChange",function(p){return Qy(m),$x(o.requirement.requirement,p)||(o.requirement.requirement=p),Jy(p)}),ng(),$0(),wl(20,"po-switch",13),pw("ngModelChange",function(p){return Qy(m),$x(o.requirement.status,p)||(o.requirement.status=p),Jy(p)}),ng(),$0(),ng(),wl(21,"div",4)(22,"po-button",14),ut("p-click",function(){return o.addRequirement()}),ng()()(),Ul(23,"po-divider"),wl(24,"div",4)(25,"po-button",15),ut("p-click",function(){return o.restore()}),ng()()();}if(i&2){let m=_x(17);YE("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),Pp(5),hw("ngModel",o.urlHome),G0(),Pp(),hw("ngModel",o.recovery),G0(),Pp(2),hw("ngModel",o.urlBack),G0(),Pp(),hw("ngModel",o.logo),G0(),Pp(2),hw("ngModel",o.secondaryLogo),G0(),Pp(),hw("ngModel",o.hideCurrentPassword),G0(),Pp(),hw("ngModel",o.componentsSize),YE("p-options",o.componentsSizeOptions),G0(),Pp(6),hw("ngModel",o.requirement.requirement),G0(),Pp(),hw("ngModel",o.requirement.status),G0(),Pp(2),YE("p-disabled",m.form.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,di,Yo,ga,na,K1],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Change Password Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-change-password
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-change-password-labs"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ae,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return a})();function Ie(a,$){if(a&1){let r=lx();wl(0,"po-page-edit",1)(1,"form",null,0)(3,"div",3)(4,"div",3),Ul(5,"po-input",4),$0(),wl(6,"po-datepicker",5),pw("ngModelChange",function(o){Qy(r);let m=gx();return $x(m.birthday,o)||(m.birthday=o),Jy(o)}),ng(),$0(),Ul(7,"po-input",6),$0(),ng(),wl(8,"div",3)(9,"po-select",7),pw("ngModelChange",function(o){Qy(r);let m=gx();return $x(m.country,o)||(m.country=o),Jy(o)}),ng(),$0(),wl(10,"po-select",8),pw("ngModelChange",function(o){Qy(r);let m=gx();return $x(m.city,o)||(m.city=o),Jy(o)}),ng(),$0(),Ul(11,"po-input",9),$0(),ng(),Ul(12,"po-divider",10),wl(13,"po-button",11),ut("p-click",function(){Qy(r);let o=gx();return Jy(o.showChangePasswordScreen())}),ng()()()();}if(a&2){let r=gx();YE("p-breadcrumb",r.breadcrumb),Pp(5),YE("ngModel",r.fullName),G0(),Pp(),hw("ngModel",r.birthday),G0(),Pp(),YE("ngModel",r.email),G0(),Pp(2),hw("ngModel",r.country),YE("p-options",r.countryOptions),G0(),Pp(),hw("ngModel",r.city),YE("p-options",r.cityOptions),G0(),Pp(),YE("ngModel",r.phoneNumber),G0();}}function He(a,$){if(a&1){let r=lx();wl(0,"po-page-change-password",12),ut("p-submit",function(){Qy(r);let o=gx();return Jy(o.onSubmit())}),ng();}if(a&2){let r=gx();YE("p-url-back",r.url)("p-url-home",r.url);}}var fe=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize();}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=false,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home";}onSubmit(){this.changePassword.openConfirmation();}showChangePasswordScreen(){this.changePasswordScreen=true;}showProfileScreen(){this.changePasswordScreen=false;}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&$l(K1,5),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:1,consts:[["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-url-back","p-url-home"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){i&1&&QA(0,Ie,14,9,"po-page-edit",1)(1,He,1,2,"po-page-change-password",2),i&2&&JA(o.changePasswordScreen?1:0);},dependencies:[aY,iY,oY,ck,ok,Pe,di,Ro,Yo,ya,lz,K1],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Change Password Modify"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),ng(),wl(13,"pre",7),Ux(14,`@if (!changePasswordScreen) {
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-change-password-modify"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return a})();function Ue(a,$){if(a&1){let r=lx();wl(0,"po-page-login",2),ut("p-login-submit",function(){Qy(r);let o=gx();return Jy(o.checkLogin())}),ng();}}function Qe(a,$){if(a&1){let r=lx();wl(0,"po-page-change-password",3),ut("p-submit",function(){Qy(r);let o=gx();return Jy(o.onSubmit())}),ng();}if(a&2){let r=gx();YE("p-requirements",r.requirements);}}var ye=(()=>{class a{changePassword;login=false;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login;}onSubmit(){this.changePassword.openConfirmation();}validateCases(r){if(r){let i=r.match(/[a-z]/g);return !(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return !(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&$l(K1,7),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&(QA(0,Ue,1,0,"po-page-login",0),QA(1,Qe,1,1,"po-page-change-password",1)),i&2&&(JA(o.login?-1:0),Pp(),JA(o.login?1:-1));},dependencies:[K1,X1],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Change Password Create"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),ng(),wl(13,"pre",7),Ux(14,`@if (!login) {
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-change-password-create"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Je,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return a})();var Ke=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),_e=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:false,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(wl(0,"po-container")(1,"div",0),Ul(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),ng()(),Ul(5,"po-page-change-password",4)),i&2&&(Pp(5),YE("p-recovery",Qx(1,Ke)));},dependencies:[uo$1,Vp,K1],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Change Password Request"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-change-password-request"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,$e,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,_e],encapsulation:2})}return a})();var qe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:false,decls:671,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do template do po-page-change-password."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoPageChangePasswordComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-page-change-password"),ng(),Ux(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),ng(),wl(18,"p"),Ux(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),ng(),wl(20,"p"),Ux(21,"A propriedade "),wl(22,"code"),Ux(23,"p-url-new-password"),ng(),Ux(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),wl(25,"em"),Ux(26,"client side"),ng(),Ux(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),wl(28,"em"),Ux(29,"propriedades"),ng(),Ux(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ng(),wl(31,"p"),Ux(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),wl(33,"em"),Ux(34,"assets"),ng(),Ux(35," no arquivo "),wl(36,"strong"),Ux(37,"angular.json"),ng(),Ux(38," da aplica\xE7\xE3o na seguinte ordem:"),ng(),wl(39,"pre")(40,"code"),Ux(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ng()()(),wl(42,"div",6)(43,"h4",7),Ux(44,"Seletor"),ng(),wl(45,"pre",8),Ux(46,`<po-page-change-password
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
`),ng()(),wl(47,"h4",9),Ux(48,"Propriedades"),ng(),wl(49,"table",10)(50,"tr",11)(51,"th",12),Ux(52,"Nome"),ng(),wl(53,"th",12),Ux(54,"Tipo"),ng(),wl(55,"th",12),Ux(56,"Padr\xE3o"),ng(),wl(57,"th",12),Ux(58,"Descri\xE7\xE3o"),ng()(),wl(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),Ux(63," p-components-size"),Ul(64,"br"),ng()()(),wl(65,"td",17)(66,"code",18),Ux(67,"string"),ng()(),wl(68,"td",19)(69,"p")(70,"code"),Ux(71,"medium"),ng()()(),wl(72,"td",20)(73,"em")(74,"strong"),Ux(75,"(opcional)"),ng()(),wl(76,"p"),Ux(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(78,"ul")(79,"li")(80,"code"),Ux(81,"small"),ng(),Ux(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(83,"li")(84,"code"),Ux(85,"medium"),ng(),Ux(86,": aplica a medida medium de cada componente."),ng()(),wl(87,"blockquote")(88,"p"),Ux(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(90,"code"),Ux(91,"medium"),ng(),Ux(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(93,"a",21),Ux(94,"po-theme"),ng(),Ux(95,"."),ng()()()(),wl(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),Ux(100," p-hide-current-password"),Ul(101,"br"),ng()()(),wl(102,"td",17)(103,"code",22),Ux(104,"boolean"),ng()(),wl(105,"td",19)(106,"p")(107,"code"),Ux(108,"false"),ng()()(),wl(109,"td",20)(110,"em")(111,"strong"),Ux(112,"(opcional)"),ng()(),wl(113,"p"),Ux(114,"Esconde o campo "),wl(115,"code"),Ux(116,"Senha atual"),ng(),Ux(117," para que o template seja para cria\xE7\xE3o de senha."),ng()()(),wl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),Ux(122," p-logo"),Ul(123,"br"),ng()()(),wl(124,"td",17)(125,"code",18),Ux(126,"string"),ng()(),wl(127,"td",19),Ux(128,"-"),ng(),wl(129,"td",20)(130,"em")(131,"strong"),Ux(132,"(opcional)"),ng()(),wl(133,"p"),Ux(134,"Caminho para a logomarca localizada na parte superior."),ng(),wl(135,"blockquote")(136,"p"),Ux(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),ng()()()(),wl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),Ux(142," p-no-autocomplete-password"),Ul(143,"br"),ng()()(),wl(144,"td",17)(145,"code",22),Ux(146,"boolean"),ng()(),wl(147,"td",19)(148,"p")(149,"code"),Ux(150,"true"),ng()()(),wl(151,"td",20)(152,"em")(153,"strong"),Ux(154,"(opcional)"),ng()(),wl(155,"p"),Ux(156,"Define a propriedade nativa "),wl(157,"code"),Ux(158,"autocomplete"),ng(),Ux(159," do campo como "),wl(160,"code"),Ux(161,"off"),ng(),Ux(162,"."),ng(),wl(163,"blockquote")(164,"p"),Ux(165,"No input de senha("),wl(166,"code"),Ux(167,"po-password"),ng(),Ux(168,") ser\xE1 definido como "),wl(169,"code"),Ux(170,"new-password"),ng(),Ux(171,"."),ng()()()(),wl(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),Ux(176," p-recovery"),Ul(177,"br"),ng()()(),wl(178,"td",17)(179,"code",18),Ux(180,"string "),ng(),wl(181,"code",23),Ux(182," Function "),ng(),wl(183,"code",24),Ux(184," PoPageChangePasswordRecovery"),ng()(),wl(185,"td",19),Ux(186,"-"),ng(),wl(187,"td",20)(188,"em")(189,"strong"),Ux(190,"(opcional)"),ng()(),wl(191,"p"),Ux(192,"URL para a a\xE7\xE3o do link "),wl(193,"code"),Ux(194,"Esqueceu a senha"),ng(),Ux(195,"."),ng(),wl(196,"p"),Ux(197,"A propriedade aceita os seguintes tipos:"),ng(),wl(198,"ul")(199,"li")(200,"p")(201,"strong"),Ux(202,"String"),ng(),Ux(203,": informe uma url externa ou uma rota v\xE1lida;"),ng()(),wl(204,"li")(205,"p")(206,"strong"),Ux(207,"Function"),ng(),Ux(208,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),ng(),wl(209,"pre")(210,"code"),Ux(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),ng()()(),wl(212,"li")(213,"p")(214,"strong"),Ux(215,"PoPageChangePasswordRecovery"),ng(),Ux(216,": cria-se v\xEDnculo autom\xE1tico com o template "),wl(217,"strong"),Ux(218,"po-modal-password-recovery"),ng(),Ux(219,`.
O objeto deve conter a `),wl(220,"strong"),Ux(221,"url"),ng(),Ux(222," para requisi\xE7\xE3o dos recursos e pode-se definir o "),wl(223,"strong"),Ux(224,"tipo"),ng(),Ux(225,` de modal para recupera\xE7\xE3o de senha,
`),wl(226,"strong"),Ux(227,"email"),ng(),Ux(228," para contato e "),wl(229,"strong"),Ux(230,"m\xE1scara"),ng(),Ux(231," do campo de telefone."),ng()()(),wl(232,"blockquote")(233,"p"),Ux(234,"Caso n\xE3o tenha valor o link "),wl(235,"code"),Ux(236,"Esqueceu a senha"),ng(),Ux(237," desaparece."),ng()()()(),wl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),Ux(242," p-requirements"),Ul(243,"br"),ng()()(),wl(244,"td",17)(245,"code",25),Ux(246,"PoPageChangePasswordRequirement[]"),ng()(),wl(247,"td",19),Ux(248,"-"),ng(),wl(249,"td",20)(250,"em")(251,"strong"),Ux(252,"(opcional)"),ng()(),wl(253,"p"),Ux(254,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),ng()()(),wl(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),Ux(259," p-secondary-logo"),Ul(260,"br"),ng()()(),wl(261,"td",17)(262,"code",18),Ux(263,"string"),ng()(),wl(264,"td",19),Ux(265,"-"),ng(),wl(266,"td",20)(267,"em")(268,"strong"),Ux(269,"(opcional)"),ng()(),wl(270,"p"),Ux(271,"Caminho para a logomarca localizada no rodap\xE9."),ng()()(),wl(272,"tr",13)(273,"td",14)(274,"div",26)(275,"span",27),Ux(276," (p-submit)"),Ul(277,"br"),ng()()(),wl(278,"td",17)(279,"code",28),Ux(280,"EventEmitter"),ng()(),wl(281,"td",19),Ux(282,"-"),ng(),wl(283,"td",20)(284,"em")(285,"strong"),Ux(286,"(opcional)"),ng()(),wl(287,"p"),Ux(288,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),ng(),wl(289,"p"),Ux(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),wl(291,"code"),Ux(292,"openConfirmation"),ng(),Ux(293,". Exemplo:"),ng(),wl(294,"pre")(295,"code"),Ux(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),ng()(),wl(297,"blockquote")(298,"p"),Ux(299,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),wl(300,"code"),Ux(301,"p-url-new-password"),ng(),Ux(302,"."),ng()()()(),wl(303,"tr",13)(304,"td",14)(305,"div",15)(306,"span",16),Ux(307," p-token"),Ul(308,"br"),ng()()(),wl(309,"td",17)(310,"code",18),Ux(311,"string"),ng()(),wl(312,"td",19),Ux(313,"-"),ng(),wl(314,"td",20)(315,"em")(316,"strong"),Ux(317,"(opcional)"),ng()(),wl(318,"p"),Ux(319,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),ng(),wl(320,"blockquote")(321,"p"),Ux(322,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),ng()()()(),wl(323,"tr",13)(324,"td",14)(325,"div",15)(326,"span",16),Ux(327," p-url-back"),Ul(328,"br"),ng()()(),wl(329,"td",17)(330,"code",18),Ux(331,"string"),ng()(),wl(332,"td",19)(333,"p")(334,"code"),Ux(335,"/"),ng()()(),wl(336,"td",20)(337,"em")(338,"strong"),Ux(339,"(opcional)"),ng()(),wl(340,"p"),Ux(341,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),ng(),wl(342,"blockquote")(343,"p"),Ux(344,"O bot\xE3o "),wl(345,"code"),Ux(346,"Voltar"),ng(),Ux(347," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),wl(348,"code"),Ux(349,"p-hide-current-password"),ng(),Ux(350,` for
falsa.`),ng()()()(),wl(351,"tr",13)(352,"td",14)(353,"div",15)(354,"span",16),Ux(355," p-url-home"),Ul(356,"br"),ng()()(),wl(357,"td",17)(358,"code",18),Ux(359,"string"),ng()(),wl(360,"td",19)(361,"p")(362,"code"),Ux(363,"/"),ng()()(),wl(364,"td",20)(365,"em")(366,"strong"),Ux(367,"(opcional)"),ng()(),wl(368,"p"),Ux(369,"URL para a a\xE7\xE3o do bot\xE3o "),wl(370,"code"),Ux(371,"Entrar no sistema"),ng(),Ux(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),wl(373,"code"),Ux(374,"openConfirmation"),ng(),Ux(375,"."),ng()()(),wl(376,"tr",13)(377,"td",14)(378,"div",15)(379,"span",16),Ux(380," p-url-new-password"),Ul(381,"br"),ng()()(),wl(382,"td",17)(383,"code",18),Ux(384,"string"),ng()(),wl(385,"td",19),Ux(386,"-"),ng(),wl(387,"td",20)(388,"em")(389,"strong"),Ux(390,"(opcional)"),ng()(),wl(391,"p"),Ux(392,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),wl(393,"code"),Ux(394,"p-submit"),ng(),Ux(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),ng(),wl(396,"h3"),Ux(397,"Processo"),ng(),wl(398,"p"),Ux(399,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),wl(400,"strong"),Ux(401,"salvar"),ng(),Ux(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),wl(403,"code"),Ux(404,"POST"),ng(),Ux(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),ng(),wl(406,"pre")(407,"code"),Ux(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),ng()(),wl(409,"p"),Ux(410,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),wl(411,"code"),Ux(412,"204"),ng(),Ux(413,"."),ng(),wl(414,"p"),Ux(415,"Em caso de "),wl(416,"strong"),Ux(417,"sucesso"),ng(),Ux(418,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),ng(),wl(419,"blockquote")(420,"p"),Ux(421,"O token ser\xE1 informado pela propriedade "),wl(422,"code"),Ux(423,"p-token"),ng(),Ux(424,"do componente ou por um "),wl(425,"em"),Ux(426,"query parameter"),ng(),Ux(427," na URL do template."),ng()(),wl(428,"p")(429,"em"),Ux(430,"Processo finalizado."),ng()(),Ul(431,"hr"),wl(432,"h4"),Ux(433,"Praticidade"),ng(),wl(434,"p"),Ux(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),wl(436,"code"),Ux(437,"po-page-change-password"),ng(),Ux(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),wl(439,"code"),Ux(440,"/change-password"),ng(),Ux(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),ng(),wl(442,"pre")(443,"code"),Ux(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),ng()(),wl(445,"p"),Ux(446,"O metadado "),wl(447,"code"),Ux(448,"serviceApi"),ng(),Ux(449," deve ser a "),wl(450,"strong"),Ux(451,"url"),ng(),Ux(452," para requisi\xE7\xE3o dos recursos de troca de senha. E "),wl(453,"code"),Ux(454,"recovery"),ng(),Ux(455,` \xE9 a interface
`),wl(456,"code"),Ux(457,"PoPageChangePasswordRecovery"),ng(),Ux(458," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),ng(),wl(459,"blockquote")(460,"p"),Ux(461,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),ng()()()()(),wl(462,"h3",9),Ux(463,"M\xE9todos"),ng(),wl(464,"table",29)(465,"tr",13)(466,"th",30)(467,"div",15)(468,"h4")(469,"span",16),Ux(470," openConfirmation "),ng()()()()(),wl(471,"tr",20)(472,"td",20)(473,"p"),Ux(474,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),wl(475,"code"),Ux(476,"p-url-home"),ng(),Ux(477,""),ng()()()(),Ul(478,"br"),wl(479,"h3"),Ux(480,"Interfaces"),ng(),wl(481,"h4",31)(482,"code",5),Ux(483,"PoPageChangePasswordRecovery"),ng()(),wl(484,"div",2)(485,"p"),Ux(486,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),wl(487,"code"),Ux(488,"po-modal-password-recovery"),ng(),Ux(489,"."),ng()(),wl(490,"h4",9),Ux(491,"Propriedades"),ng(),wl(492,"table",10)(493,"tr",11)(494,"th",12),Ux(495,"Nome"),ng(),wl(496,"th",12),Ux(497,"Tipo"),ng(),wl(498,"th",12),Ux(499,"Descri\xE7\xE3o"),ng()(),wl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),Ux(504," contactMail"),Ul(505,"br"),ng()()(),wl(506,"td",17)(507,"code",18),Ux(508,"string"),ng()(),wl(509,"td",20)(510,"em")(511,"strong"),Ux(512,"(opcional)"),ng()(),wl(513,"p"),Ux(514,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),ng()()(),wl(515,"tr",13)(516,"td",14)(517,"div",15)(518,"span",16),Ux(519," phoneMask"),Ul(520,"br"),ng()()(),wl(521,"td",17)(522,"code",18),Ux(523,"string"),ng()(),wl(524,"td",20)(525,"em")(526,"strong"),Ux(527,"(opcional)"),ng()(),wl(528,"p"),Ux(529,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),ng()()(),wl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),Ux(534," type"),Ul(535,"br"),ng()()(),wl(536,"td",17)(537,"code",32),Ux(538,"PoModalPasswordRecoveryType"),ng()(),wl(539,"td",20)(540,"em")(541,"strong"),Ux(542,"(opcional)"),ng()(),wl(543,"p"),Ux(544,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),wl(545,"a",33),Ux(546,"PoModalPasswordRecoveryType"),ng(),Ux(547,"."),ng(),wl(548,"blockquote")(549,"p"),Ux(550,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),wl(551,"code"),Ux(552,"PoModalPasswordRecoveryType.Email"),ng(),Ux(553,"."),ng()()()(),wl(554,"tr",13)(555,"td",14)(556,"div",15)(557,"span",16),Ux(558," url"),Ul(559,"br"),ng()()(),wl(560,"td",17)(561,"code",18),Ux(562,"string"),ng()(),wl(563,"td",20)(564,"p"),Ux(565,"Endpoint usado pelo template "),wl(566,"strong"),Ux(567,"PoModalPasswordRecovery"),ng(),Ux(568," para requisi\xE7\xE3o do recurso."),ng(),wl(569,"blockquote")(570,"p"),Ux(571,"Saiba mais em "),wl(572,"a",33),Ux(573,"PoModalPasswordRecovery"),ng(),Ux(574,"."),ng()()()()(),wl(575,"h4",31)(576,"code",5),Ux(577,"PoPageChangePasswordRequirement"),ng()(),wl(578,"div",2)(579,"p"),Ux(580,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),wl(581,"code"),Ux(582,"p-password-requirements"),ng(),Ux(583,"."),ng()(),wl(584,"h4",9),Ux(585,"Propriedades"),ng(),wl(586,"table",10)(587,"tr",11)(588,"th",12),Ux(589,"Nome"),ng(),wl(590,"th",12),Ux(591,"Tipo"),ng(),wl(592,"th",12),Ux(593,"Descri\xE7\xE3o"),ng()(),wl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),Ux(598," requirement"),Ul(599,"br"),ng()()(),wl(600,"td",17)(601,"code",18),Ux(602,"string"),ng()(),wl(603,"td",20)(604,"p"),Ux(605,"Requisito."),ng()()(),wl(606,"tr",13)(607,"td",14)(608,"div",15)(609,"span",16),Ux(610," status"),Ul(611,"br"),ng()()(),wl(612,"td",17)(613,"code",22),Ux(614,"boolean "),ng(),wl(615,"code",23),Ux(616," Function"),ng()(),wl(617,"td",20)(618,"p"),Ux(619,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),ng(),wl(620,"p"),Ux(621,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),ng()()()(),wl(622,"h4",31)(623,"code",5),Ux(624,"PoPageChangePassword"),ng()(),wl(625,"div",2)(626,"p"),Ux(627,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),wl(628,"code"),Ux(629,"po-page-change-password"),ng(),Ux(630,"."),ng()(),wl(631,"h4",9),Ux(632,"Propriedades"),ng(),wl(633,"table",10)(634,"tr",11)(635,"th",12),Ux(636,"Nome"),ng(),wl(637,"th",12),Ux(638,"Tipo"),ng(),wl(639,"th",12),Ux(640,"Descri\xE7\xE3o"),ng()(),wl(641,"tr",13)(642,"td",14)(643,"div",15)(644,"span",16),Ux(645," currentPassword"),Ul(646,"br"),ng()()(),wl(647,"td",17)(648,"code",18),Ux(649,"string"),ng()(),wl(650,"td",20)(651,"em")(652,"strong"),Ux(653,"(opcional)"),ng()(),wl(654,"p"),Ux(655,"Senha atual"),ng()()(),wl(656,"tr",13)(657,"td",14)(658,"div",15)(659,"span",16),Ux(660," newPassword"),Ul(661,"br"),ng()()(),wl(662,"td",17)(663,"code",18),Ux(664,"string"),ng()(),wl(665,"td",20)(666,"em")(667,"strong"),Ux(668,"(opcional)"),ng()(),wl(669,"p"),Ux(670,"Nova senha"),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-page-change-password-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),ng()()()),i&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,Se,be,xe,ve,Me,qe],encapsulation:2})}return a})();var nt=[{path:"",component:Te}],ke=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(nt),vL]})}return a})();var Zt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,ke]})}return a})();export{Zt as DocPoPageChangePasswordModule};