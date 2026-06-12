import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,c9 as Qde,ch as Fr,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,bL as H3,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,bH as Wde,aJ as nme,ci as DNe,aq as ix,at as ox,cg as Rr,aI as gc,cd as sme,a7 as iN,a3 as SNe,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Pe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:false,decls:1,vars:0,template:function(i,o){i&1&&Hl(0,"po-page-change-password");},dependencies:[Fr],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Change Password Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-change-password></po-page-change-password>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-change-password-basic"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Pe],encapsulation:2})}return a})();var Se=(()=>{class a{poDialog=f(Qde);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:false};}restore(){this.componentsSize="medium",this.hideCurrentPassword=false,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:false},this.requirements=[],this.secondaryLogo=void 0;}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()});}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&zl(Fr,7),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let m=gx();Cl(0,"po-page-change-password",2),dt("p-submit",function(p){return o.submit(p)}),og(),Hl(1,"po-divider",3),Cl(2,"form",null,0)(4,"div",4)(5,"po-input",5),gw("ngModelChange",function(p){return Jy(m),Zx(o.urlHome,p)||(o.urlHome=p),e_(p)}),og(),Z0(),Cl(6,"po-input",6),gw("ngModelChange",function(p){return Jy(m),Zx(o.recovery,p)||(o.recovery=p),e_(p)}),og(),Z0(),og(),Cl(7,"div",4)(8,"po-input",7),gw("ngModelChange",function(p){return Jy(m),Zx(o.urlBack,p)||(o.urlBack=p),e_(p)}),og(),Z0(),Cl(9,"po-input",8),gw("ngModelChange",function(p){return Jy(m),Zx(o.logo,p)||(o.logo=p),e_(p)}),og(),Z0(),og(),Cl(10,"div",4)(11,"po-input",9),gw("ngModelChange",function(p){return Jy(m),Zx(o.secondaryLogo,p)||(o.secondaryLogo=p),e_(p)}),og(),Z0(),Cl(12,"po-switch",10),gw("ngModelChange",function(p){return Jy(m),Zx(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),e_(p)}),og(),Z0(),og(),Cl(13,"po-radio-group",11),gw("ngModelChange",function(p){return Jy(m),Zx(o.componentsSize,p)||(o.componentsSize=p),e_(p)}),og(),Z0(),Hl(14,"br")(15,"po-divider"),Cl(16,"form",null,1)(18,"div",4)(19,"po-input",12),gw("ngModelChange",function(p){return Jy(m),Zx(o.requirement.requirement,p)||(o.requirement.requirement=p),e_(p)}),og(),Z0(),Cl(20,"po-switch",13),gw("ngModelChange",function(p){return Jy(m),Zx(o.requirement.status,p)||(o.requirement.status=p),e_(p)}),og(),Z0(),og(),Cl(21,"div",4)(22,"po-button",14),dt("p-click",function(){return o.addRequirement()}),og()()(),Hl(23,"po-divider"),Cl(24,"div",4)(25,"po-button",15),dt("p-click",function(){return o.restore()}),og()()();}if(i&2){let m=Sx(17);ZE("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),Lp(5),pw("ngModel",o.urlHome),X0(),Lp(),pw("ngModel",o.recovery),X0(),Lp(2),pw("ngModel",o.urlBack),X0(),Lp(),pw("ngModel",o.logo),X0(),Lp(2),pw("ngModel",o.secondaryLogo),X0(),Lp(),pw("ngModel",o.hideCurrentPassword),X0(),Lp(),pw("ngModel",o.componentsSize),ZE("p-options",o.componentsSizeOptions),X0(),Lp(6),pw("ngModel",o.requirement.requirement),X0(),Lp(),pw("ngModel",o.requirement.status),X0(),Lp(2),ZE("p-disabled",m.form.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Nde,H3,Fr],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Change Password Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-change-password
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-change-password-labs"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Be,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return a})();function Ne(a,X){if(a&1){let r=gx();Cl(0,"po-page-edit",1)(1,"form",null,0)(3,"div",3)(4,"div",3),Hl(5,"po-input",4),Z0(),Cl(6,"po-datepicker",5),gw("ngModelChange",function(o){Jy(r);let m=Ex();return Zx(m.birthday,o)||(m.birthday=o),e_(o)}),og(),Z0(),Hl(7,"po-input",6),Z0(),og(),Cl(8,"div",3)(9,"po-select",7),gw("ngModelChange",function(o){Jy(r);let m=Ex();return Zx(m.country,o)||(m.country=o),e_(o)}),og(),Z0(),Cl(10,"po-select",8),gw("ngModelChange",function(o){Jy(r);let m=Ex();return Zx(m.city,o)||(m.city=o),e_(o)}),og(),Z0(),Hl(11,"po-input",9),Z0(),og(),Hl(12,"po-divider",10),Cl(13,"po-button",11),dt("p-click",function(){Jy(r);let o=Ex();return e_(o.showChangePasswordScreen())}),og()()()();}if(a&2){let r=Ex();ZE("p-breadcrumb",r.breadcrumb),Lp(5),ZE("ngModel",r.fullName),X0(),Lp(),pw("ngModel",r.birthday),X0(),Lp(),ZE("ngModel",r.email),X0(),Lp(2),pw("ngModel",r.country),ZE("p-options",r.countryOptions),X0(),Lp(),pw("ngModel",r.city),ZE("p-options",r.cityOptions),X0(),Lp(),ZE("ngModel",r.phoneNumber),X0();}}function ze(a,X){if(a&1){let r=gx();Cl(0,"po-page-change-password",12),dt("p-submit",function(){Jy(r);let o=Ex();return e_(o.onSubmit())}),og();}if(a&2){let r=Ex();ZE("p-url-back",r.url)("p-url-home",r.url);}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize();}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=false,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home";}onSubmit(){this.changePassword.openConfirmation();}showChangePasswordScreen(){this.changePasswordScreen=true;}showProfileScreen(){this.changePasswordScreen=false;}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&zl(Fr,5),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:1,consts:[["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-url-back","p-url-home"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){i&1&&ix(0,Ne,14,9,"po-page-edit",1)(1,ze,1,2,"po-page-change-password",2),i&2&&ox(o.changePasswordScreen?1:0);},dependencies:[lY,sY,aY,gk,fk,Qt,_v,Wde,q3,nme,DNe,Fr],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Change Password Modify"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),og(),Cl(13,"pre",7),qx(14,`@if (!changePasswordScreen) {
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-change-password-modify"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return a})();function He(a,X){if(a&1){let r=gx();Cl(0,"po-page-login",2),dt("p-login-submit",function(){Jy(r);let o=Ex();return e_(o.checkLogin())}),og();}}function We(a,X){if(a&1){let r=gx();Cl(0,"po-page-change-password",3),dt("p-submit",function(){Jy(r);let o=Ex();return e_(o.onSubmit())}),og();}if(a&2){let r=Ex();ZE("p-requirements",r.requirements);}}var xe=(()=>{class a{changePassword;login=false;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login;}onSubmit(){this.changePassword.openConfirmation();}validateCases(r){if(r){let i=r.match(/[a-z]/g);return !(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return !(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&zl(Fr,7),i&2){let m;uo(m=fo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&(ix(0,He,1,0,"po-page-login",0),ix(1,We,1,1,"po-page-change-password",1)),i&2&&(ox(o.login?-1:0),Lp(),ox(o.login?1:-1));},dependencies:[Fr,Rr],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Change Password Create"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),og(),Cl(13,"pre",7),qx(14,`@if (!login) {
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-change-password-create"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,je,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,xe],encapsulation:2})}return a})();var Qe=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),ve=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:false,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(Cl(0,"po-container")(1,"div",0),Hl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),Hl(5,"po-page-change-password",4)),i&2&&(Lp(5),ZE("p-recovery",iN(1,Qe)));},dependencies:[gc,sme,Fr],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Change Password Request"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-change-password-request"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Je,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ve],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:false,decls:671,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do template do po-page-change-password."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoPageChangePasswordComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-page-change-password"),og(),qx(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),og(),Cl(18,"p"),qx(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),og(),Cl(20,"p"),qx(21,"A propriedade "),Cl(22,"code"),qx(23,"p-url-new-password"),og(),qx(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Cl(25,"em"),qx(26,"client side"),og(),qx(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Cl(28,"em"),qx(29,"propriedades"),og(),qx(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Cl(31,"p"),qx(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Cl(33,"em"),qx(34,"assets"),og(),qx(35," no arquivo "),Cl(36,"strong"),qx(37,"angular.json"),og(),qx(38," da aplica\xE7\xE3o na seguinte ordem:"),og(),Cl(39,"pre")(40,"code"),qx(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Cl(42,"div",6)(43,"h4",7),qx(44,"Seletor"),og(),Cl(45,"pre",8),qx(46,`<po-page-change-password
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
`),og()(),Cl(47,"h4",9),qx(48,"Propriedades"),og(),Cl(49,"table",10)(50,"tr",11)(51,"th",12),qx(52,"Nome"),og(),Cl(53,"th",12),qx(54,"Tipo"),og(),Cl(55,"th",12),qx(56,"Padr\xE3o"),og(),Cl(57,"th",12),qx(58,"Descri\xE7\xE3o"),og()(),Cl(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),qx(63," p-components-size"),Hl(64,"br"),og()()(),Cl(65,"td",17)(66,"code",18),qx(67,"string"),og()(),Cl(68,"td",19)(69,"p")(70,"code"),qx(71,"medium"),og()()(),Cl(72,"td",20)(73,"em")(74,"strong"),qx(75,"(opcional)"),og()(),Cl(76,"p"),qx(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(78,"ul")(79,"li")(80,"code"),qx(81,"small"),og(),qx(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(83,"li")(84,"code"),qx(85,"medium"),og(),qx(86,": aplica a medida medium de cada componente."),og()(),Cl(87,"blockquote")(88,"p"),qx(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(90,"code"),qx(91,"medium"),og(),qx(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(93,"a",21),qx(94,"po-theme"),og(),qx(95,"."),og()()()(),Cl(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),qx(100," p-hide-current-password"),Hl(101,"br"),og()()(),Cl(102,"td",17)(103,"code",22),qx(104,"boolean"),og()(),Cl(105,"td",19)(106,"p")(107,"code"),qx(108,"false"),og()()(),Cl(109,"td",20)(110,"em")(111,"strong"),qx(112,"(opcional)"),og()(),Cl(113,"p"),qx(114,"Esconde o campo "),Cl(115,"code"),qx(116,"Senha atual"),og(),qx(117," para que o template seja para cria\xE7\xE3o de senha."),og()()(),Cl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),qx(122," p-logo"),Hl(123,"br"),og()()(),Cl(124,"td",17)(125,"code",18),qx(126,"string"),og()(),Cl(127,"td",19),qx(128,"-"),og(),Cl(129,"td",20)(130,"em")(131,"strong"),qx(132,"(opcional)"),og()(),Cl(133,"p"),qx(134,"Caminho para a logomarca localizada na parte superior."),og(),Cl(135,"blockquote")(136,"p"),qx(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),og()()()(),Cl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),qx(142," p-no-autocomplete-password"),Hl(143,"br"),og()()(),Cl(144,"td",17)(145,"code",22),qx(146,"boolean"),og()(),Cl(147,"td",19)(148,"p")(149,"code"),qx(150,"true"),og()()(),Cl(151,"td",20)(152,"em")(153,"strong"),qx(154,"(opcional)"),og()(),Cl(155,"p"),qx(156,"Define a propriedade nativa "),Cl(157,"code"),qx(158,"autocomplete"),og(),qx(159," do campo como "),Cl(160,"code"),qx(161,"off"),og(),qx(162,"."),og(),Cl(163,"blockquote")(164,"p"),qx(165,"No input de senha("),Cl(166,"code"),qx(167,"po-password"),og(),qx(168,") ser\xE1 definido como "),Cl(169,"code"),qx(170,"new-password"),og(),qx(171,"."),og()()()(),Cl(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),qx(176," p-recovery"),Hl(177,"br"),og()()(),Cl(178,"td",17)(179,"code",18),qx(180,"string "),og(),Cl(181,"code",23),qx(182," Function "),og(),Cl(183,"code",24),qx(184," PoPageChangePasswordRecovery"),og()(),Cl(185,"td",19),qx(186,"-"),og(),Cl(187,"td",20)(188,"em")(189,"strong"),qx(190,"(opcional)"),og()(),Cl(191,"p"),qx(192,"URL para a a\xE7\xE3o do link "),Cl(193,"code"),qx(194,"Esqueceu a senha"),og(),qx(195,"."),og(),Cl(196,"p"),qx(197,"A propriedade aceita os seguintes tipos:"),og(),Cl(198,"ul")(199,"li")(200,"p")(201,"strong"),qx(202,"String"),og(),qx(203,": informe uma url externa ou uma rota v\xE1lida;"),og()(),Cl(204,"li")(205,"p")(206,"strong"),qx(207,"Function"),og(),qx(208,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),og(),Cl(209,"pre")(210,"code"),qx(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),og()()(),Cl(212,"li")(213,"p")(214,"strong"),qx(215,"PoPageChangePasswordRecovery"),og(),qx(216,": cria-se v\xEDnculo autom\xE1tico com o template "),Cl(217,"strong"),qx(218,"po-modal-password-recovery"),og(),qx(219,`.
O objeto deve conter a `),Cl(220,"strong"),qx(221,"url"),og(),qx(222," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Cl(223,"strong"),qx(224,"tipo"),og(),qx(225,` de modal para recupera\xE7\xE3o de senha,
`),Cl(226,"strong"),qx(227,"email"),og(),qx(228," para contato e "),Cl(229,"strong"),qx(230,"m\xE1scara"),og(),qx(231," do campo de telefone."),og()()(),Cl(232,"blockquote")(233,"p"),qx(234,"Caso n\xE3o tenha valor o link "),Cl(235,"code"),qx(236,"Esqueceu a senha"),og(),qx(237," desaparece."),og()()()(),Cl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),qx(242," p-requirements"),Hl(243,"br"),og()()(),Cl(244,"td",17)(245,"code",25),qx(246,"PoPageChangePasswordRequirement[]"),og()(),Cl(247,"td",19),qx(248,"-"),og(),Cl(249,"td",20)(250,"em")(251,"strong"),qx(252,"(opcional)"),og()(),Cl(253,"p"),qx(254,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),og()()(),Cl(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),qx(259," p-secondary-logo"),Hl(260,"br"),og()()(),Cl(261,"td",17)(262,"code",18),qx(263,"string"),og()(),Cl(264,"td",19),qx(265,"-"),og(),Cl(266,"td",20)(267,"em")(268,"strong"),qx(269,"(opcional)"),og()(),Cl(270,"p"),qx(271,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Cl(272,"tr",13)(273,"td",14)(274,"div",26)(275,"span",27),qx(276," (p-submit)"),Hl(277,"br"),og()()(),Cl(278,"td",17)(279,"code",28),qx(280,"EventEmitter"),og()(),Cl(281,"td",19),qx(282,"-"),og(),Cl(283,"td",20)(284,"em")(285,"strong"),qx(286,"(opcional)"),og()(),Cl(287,"p"),qx(288,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),og(),Cl(289,"p"),qx(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Cl(291,"code"),qx(292,"openConfirmation"),og(),qx(293,". Exemplo:"),og(),Cl(294,"pre")(295,"code"),qx(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),og()(),Cl(297,"blockquote")(298,"p"),qx(299,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Cl(300,"code"),qx(301,"p-url-new-password"),og(),qx(302,"."),og()()()(),Cl(303,"tr",13)(304,"td",14)(305,"div",15)(306,"span",16),qx(307," p-token"),Hl(308,"br"),og()()(),Cl(309,"td",17)(310,"code",18),qx(311,"string"),og()(),Cl(312,"td",19),qx(313,"-"),og(),Cl(314,"td",20)(315,"em")(316,"strong"),qx(317,"(opcional)"),og()(),Cl(318,"p"),qx(319,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),og(),Cl(320,"blockquote")(321,"p"),qx(322,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),og()()()(),Cl(323,"tr",13)(324,"td",14)(325,"div",15)(326,"span",16),qx(327," p-url-back"),Hl(328,"br"),og()()(),Cl(329,"td",17)(330,"code",18),qx(331,"string"),og()(),Cl(332,"td",19)(333,"p")(334,"code"),qx(335,"/"),og()()(),Cl(336,"td",20)(337,"em")(338,"strong"),qx(339,"(opcional)"),og()(),Cl(340,"p"),qx(341,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),og(),Cl(342,"blockquote")(343,"p"),qx(344,"O bot\xE3o "),Cl(345,"code"),qx(346,"Voltar"),og(),qx(347," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),Cl(348,"code"),qx(349,"p-hide-current-password"),og(),qx(350,` for
falsa.`),og()()()(),Cl(351,"tr",13)(352,"td",14)(353,"div",15)(354,"span",16),qx(355," p-url-home"),Hl(356,"br"),og()()(),Cl(357,"td",17)(358,"code",18),qx(359,"string"),og()(),Cl(360,"td",19)(361,"p")(362,"code"),qx(363,"/"),og()()(),Cl(364,"td",20)(365,"em")(366,"strong"),qx(367,"(opcional)"),og()(),Cl(368,"p"),qx(369,"URL para a a\xE7\xE3o do bot\xE3o "),Cl(370,"code"),qx(371,"Entrar no sistema"),og(),qx(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Cl(373,"code"),qx(374,"openConfirmation"),og(),qx(375,"."),og()()(),Cl(376,"tr",13)(377,"td",14)(378,"div",15)(379,"span",16),qx(380," p-url-new-password"),Hl(381,"br"),og()()(),Cl(382,"td",17)(383,"code",18),qx(384,"string"),og()(),Cl(385,"td",19),qx(386,"-"),og(),Cl(387,"td",20)(388,"em")(389,"strong"),qx(390,"(opcional)"),og()(),Cl(391,"p"),qx(392,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),Cl(393,"code"),qx(394,"p-submit"),og(),qx(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),og(),Cl(396,"h3"),qx(397,"Processo"),og(),Cl(398,"p"),qx(399,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),Cl(400,"strong"),qx(401,"salvar"),og(),qx(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Cl(403,"code"),qx(404,"POST"),og(),qx(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),og(),Cl(406,"pre")(407,"code"),qx(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),og()(),Cl(409,"p"),qx(410,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Cl(411,"code"),qx(412,"204"),og(),qx(413,"."),og(),Cl(414,"p"),qx(415,"Em caso de "),Cl(416,"strong"),qx(417,"sucesso"),og(),qx(418,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),og(),Cl(419,"blockquote")(420,"p"),qx(421,"O token ser\xE1 informado pela propriedade "),Cl(422,"code"),qx(423,"p-token"),og(),qx(424,"do componente ou por um "),Cl(425,"em"),qx(426,"query parameter"),og(),qx(427," na URL do template."),og()(),Cl(428,"p")(429,"em"),qx(430,"Processo finalizado."),og()(),Hl(431,"hr"),Cl(432,"h4"),qx(433,"Praticidade"),og(),Cl(434,"p"),qx(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Cl(436,"code"),qx(437,"po-page-change-password"),og(),qx(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Cl(439,"code"),qx(440,"/change-password"),og(),qx(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),og(),Cl(442,"pre")(443,"code"),qx(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),og()(),Cl(445,"p"),qx(446,"O metadado "),Cl(447,"code"),qx(448,"serviceApi"),og(),qx(449," deve ser a "),Cl(450,"strong"),qx(451,"url"),og(),qx(452," para requisi\xE7\xE3o dos recursos de troca de senha. E "),Cl(453,"code"),qx(454,"recovery"),og(),qx(455,` \xE9 a interface
`),Cl(456,"code"),qx(457,"PoPageChangePasswordRecovery"),og(),qx(458," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),og(),Cl(459,"blockquote")(460,"p"),qx(461,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),og()()()()(),Cl(462,"h3",9),qx(463,"M\xE9todos"),og(),Cl(464,"table",29)(465,"tr",13)(466,"th",30)(467,"div",15)(468,"h4")(469,"span",16),qx(470," openConfirmation "),og()()()()(),Cl(471,"tr",20)(472,"td",20)(473,"p"),qx(474,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),Cl(475,"code"),qx(476,"p-url-home"),og(),qx(477,""),og()()()(),Hl(478,"br"),Cl(479,"h3"),qx(480,"Interfaces"),og(),Cl(481,"h4",31)(482,"code",5),qx(483,"PoPageChangePasswordRecovery"),og()(),Cl(484,"div",2)(485,"p"),qx(486,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Cl(487,"code"),qx(488,"po-modal-password-recovery"),og(),qx(489,"."),og()(),Cl(490,"h4",9),qx(491,"Propriedades"),og(),Cl(492,"table",10)(493,"tr",11)(494,"th",12),qx(495,"Nome"),og(),Cl(496,"th",12),qx(497,"Tipo"),og(),Cl(498,"th",12),qx(499,"Descri\xE7\xE3o"),og()(),Cl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),qx(504," contactMail"),Hl(505,"br"),og()()(),Cl(506,"td",17)(507,"code",18),qx(508,"string"),og()(),Cl(509,"td",20)(510,"em")(511,"strong"),qx(512,"(opcional)"),og()(),Cl(513,"p"),qx(514,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Cl(515,"tr",13)(516,"td",14)(517,"div",15)(518,"span",16),qx(519," phoneMask"),Hl(520,"br"),og()()(),Cl(521,"td",17)(522,"code",18),qx(523,"string"),og()(),Cl(524,"td",20)(525,"em")(526,"strong"),qx(527,"(opcional)"),og()(),Cl(528,"p"),qx(529,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),og()()(),Cl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),qx(534," type"),Hl(535,"br"),og()()(),Cl(536,"td",17)(537,"code",32),qx(538,"PoModalPasswordRecoveryType"),og()(),Cl(539,"td",20)(540,"em")(541,"strong"),qx(542,"(opcional)"),og()(),Cl(543,"p"),qx(544,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Cl(545,"a",33),qx(546,"PoModalPasswordRecoveryType"),og(),qx(547,"."),og(),Cl(548,"blockquote")(549,"p"),qx(550,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Cl(551,"code"),qx(552,"PoModalPasswordRecoveryType.Email"),og(),qx(553,"."),og()()()(),Cl(554,"tr",13)(555,"td",14)(556,"div",15)(557,"span",16),qx(558," url"),Hl(559,"br"),og()()(),Cl(560,"td",17)(561,"code",18),qx(562,"string"),og()(),Cl(563,"td",20)(564,"p"),qx(565,"Endpoint usado pelo template "),Cl(566,"strong"),qx(567,"PoModalPasswordRecovery"),og(),qx(568," para requisi\xE7\xE3o do recurso."),og(),Cl(569,"blockquote")(570,"p"),qx(571,"Saiba mais em "),Cl(572,"a",33),qx(573,"PoModalPasswordRecovery"),og(),qx(574,"."),og()()()()(),Cl(575,"h4",31)(576,"code",5),qx(577,"PoPageChangePasswordRequirement"),og()(),Cl(578,"div",2)(579,"p"),qx(580,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),Cl(581,"code"),qx(582,"p-password-requirements"),og(),qx(583,"."),og()(),Cl(584,"h4",9),qx(585,"Propriedades"),og(),Cl(586,"table",10)(587,"tr",11)(588,"th",12),qx(589,"Nome"),og(),Cl(590,"th",12),qx(591,"Tipo"),og(),Cl(592,"th",12),qx(593,"Descri\xE7\xE3o"),og()(),Cl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),qx(598," requirement"),Hl(599,"br"),og()()(),Cl(600,"td",17)(601,"code",18),qx(602,"string"),og()(),Cl(603,"td",20)(604,"p"),qx(605,"Requisito."),og()()(),Cl(606,"tr",13)(607,"td",14)(608,"div",15)(609,"span",16),qx(610," status"),Hl(611,"br"),og()()(),Cl(612,"td",17)(613,"code",22),qx(614,"boolean "),og(),Cl(615,"code",23),qx(616," Function"),og()(),Cl(617,"td",20)(618,"p"),qx(619,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),og(),Cl(620,"p"),qx(621,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),og()()()(),Cl(622,"h4",31)(623,"code",5),qx(624,"PoPageChangePassword"),og()(),Cl(625,"div",2)(626,"p"),qx(627,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Cl(628,"code"),qx(629,"po-page-change-password"),og(),qx(630,"."),og()(),Cl(631,"h4",9),qx(632,"Propriedades"),og(),Cl(633,"table",10)(634,"tr",11)(635,"th",12),qx(636,"Nome"),og(),Cl(637,"th",12),qx(638,"Tipo"),og(),Cl(639,"th",12),qx(640,"Descri\xE7\xE3o"),og()(),Cl(641,"tr",13)(642,"td",14)(643,"div",15)(644,"span",16),qx(645," currentPassword"),Hl(646,"br"),og()()(),Cl(647,"td",17)(648,"code",18),qx(649,"string"),og()(),Cl(650,"td",20)(651,"em")(652,"strong"),qx(653,"(opcional)"),og()(),Cl(654,"p"),qx(655,"Senha atual"),og()()(),Cl(656,"tr",13)(657,"td",14)(658,"div",15)(659,"span",16),qx(660," newPassword"),Hl(661,"br"),og()()(),Cl(662,"td",17)(663,"code",18),qx(664,"string"),og()(),Cl(665,"td",20)(666,"em")(667,"strong"),qx(668,"(opcional)"),og()(),Cl(669,"p"),qx(670,"Nova senha"),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var qe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-page-change-password-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),og()()()),i&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,we,Ee,fe,ye,_e,Me],encapsulation:2})}return a})();var Xe=[{path:"",component:qe}],Te=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(Xe),bL]})}return a})();var zt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};