import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,aU as l3,s,c as r$1,aW as Yp,b0 as Qt,H as Sl,a1 as ht,O as sg,an as bO,aH as Ga,b8 as Gme,b9 as Qme,M as Wl,J as Jx,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,cn as s3,ba as bNe,aq as ux,at as dx,a3 as pNe,aD as Xy,aT as tN,aE as Qy,aA as Tx}from'./main-UTR4MKMU.js';var de=(()=>{class o{onClick(){alert("Po Button!");}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Button",3,"p-click"]],template:function(a,i){a&1&&(Sl(0,"po-button",0),ht("p-click",function(){return i.onClick()}),sg());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Button Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-button-basic/sample-po-button-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-button-basic/sample-po-button-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-button-basic',
  templateUrl: './sample-po-button-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonBasicComponent {
  onClick() {
    alert('Po Button!');
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,fe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return o})();var me=(()=>{class o{poDialog=f(zde);label;kind;icon;size;properties;type;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"fa fa-podcast",value:"fa fa-podcast"}];kindsOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];typeOptions=[{label:"button",value:l3.Button},{label:"submit",value:l3.Submit},{label:"reset",value:l3.Reset}];ngOnInit(){this.restore();}buttonClick(){this.poDialog.alert({title:"PO Button",message:"Hello PO World!!!"});}propertiesChange(r){this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false}),r&&r.forEach(a=>{a==="danger"&&this.properties.includes("danger")&&(this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:true}));});}verifyDisabled(r){let a=[...this.propertiesOptions];r==="tertiary"?(a[2]={value:"danger",label:"Danger",disabled:true},this.propertiesOptions=a):(a[2]={value:"danger",label:"Danger",disabled:false},this.propertiesOptions=a);}restore(){this.label=void 0,this.kind="secondary",this.size="medium",this.icon=void 0,this.type=l3.Button,this.properties=[],this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false});}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs"]],standalone:false,decls:14,vars:19,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-click","p-disabled","p-icon","p-label","p-loading","p-size","p-danger","p-kind","p-type"],["name","label","p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","kind","p-columns","4","p-label","Kind",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","type","p-columns","4","p-label","Type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let u=Ex();Sl(0,"div",1)(1,"po-button",2),ht("p-click",function(){return i.buttonClick()}),sg()(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-input",3),Ew("ngModelChange",function(d){return Xy(u),tN(i.label,d)||(i.label=d),Qy(d)}),sg(),JA(),sg(),Sl(7,"po-checkbox-group",4),Ew("ngModelChange",function(d){return Xy(u),tN(i.properties,d)||(i.properties=d),Qy(d)}),ht("p-change",function(d){return i.propertiesChange(d)}),sg(),JA(),Sl(8,"po-radio-group",5),Ew("ngModelChange",function(d){return Xy(u),tN(i.icon,d)||(i.icon=d),Qy(d)}),sg(),JA(),Sl(9,"po-radio-group",6),Ew("ngModelChange",function(d){return Xy(u),tN(i.kind,d)||(i.kind=d),Qy(d)}),ht("p-change",function(d){return i.verifyDisabled(d)}),sg(),JA(),Sl(10,"po-radio-group",7),Ew("ngModelChange",function(d){return Xy(u),tN(i.type,d)||(i.type=d),Qy(d)}),sg(),JA(),Sl(11,"po-radio-group",8),Ew("ngModelChange",function(d){return Xy(u),tN(i.size,d)||(i.size=d),Qy(d)}),ht("p-change",function(d){return i.verifyDisabled(d)}),sg(),JA(),Sl(12,"div",1)(13,"po-button",9),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(Vp(),tw("p-disabled",i.properties.includes("disabled"))("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-size",i.size)("p-danger",i.properties.includes("danger"))("p-kind",i.kind)("p-type",i.type),Vp(5),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconsOptions),t0(),Vp(),Dw("ngModel",i.kind),tw("p-options",i.kindsOptions),t0(),Vp(),Dw("ngModel",i.type),tw("p-options",i.typeOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizesOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Button Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-button-labs/sample-po-button-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-button
    class="po-sm-12"
    [p-disabled]="properties.includes('disabled')"
    [p-icon]="icon"
    [p-label]="label"
    [p-loading]="properties.includes('loading')"
    [p-size]="size"
    [p-danger]="properties.includes('danger')"
    [p-kind]="kind"
    (p-click)="buttonClick()"
    [p-type]="type"
  >
  </po-button>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6 po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
  </div>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
    (p-change)="propertiesChange($event)"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="icon"
    [(ngModel)]="icon"
    p-columns="4"
    p-label="Icon"
    [p-options]="iconsOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="kind"
    [(ngModel)]="kind"
    p-columns="4"
    p-label="Kind"
    [p-options]="kindsOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    p-columns="4"
    p-label="Type"
    [p-options]="typeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizesOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-button-labs/sample-po-button-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoButtonType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-labs',
  templateUrl: './sample-po-button-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  label: string;
  kind: string;
  icon: string;
  size: string;
  properties: Array<string>;
  type: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' }
  ];

  kindsOptions: Array<PoRadioGroupOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  typeOptions: Array<PoRadioGroupOption> = [
    { label: 'button', value: PoButtonType.Button },
    { label: 'submit', value: PoButtonType.Submit },
    { label: 'reset', value: PoButtonType.Reset }
  ];

  ngOnInit() {
    this.restore();
  }

  buttonClick() {
    this.poDialog.alert({ title: 'PO Button', message: 'Hello PO World!!!' });
  }

  propertiesChange(event) {
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };

    if (event) {
      event.forEach(property => {
        if (property === 'danger' && this.properties.includes('danger')) {
          this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: true };
        }
      });
    }
  }

  verifyDisabled(event) {
    const value = [...this.propertiesOptions];

    if (event === 'tertiary') {
      value[2] = { value: 'danger', label: 'Danger', disabled: true };
      this.propertiesOptions = value;
    } else {
      value[2] = { value: 'danger', label: 'Danger', disabled: false };
      this.propertiesOptions = value;
    }
  }

  restore() {
    this.label = undefined;
    this.kind = 'secondary';
    this.size = 'medium';
    this.icon = undefined;
    this.type = PoButtonType.Button;
    this.properties = [];
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return o})();function Pe(o,he){if(o&1){let r=Ex();Sl(0,"div",0),Wl(1,"po-avatar",2),Sl(2,"div",3)(3,"span",4),Jx(4),sg(),Sl(5,"span",5),Jx(6),sg(),Sl(7,"span",5),Jx(8),sg()()(),Sl(9,"div",0)(10,"po-button",6),ht("p-click",function(){Xy(r);let i=Tx();return Qy(i.notification("added","success"))}),sg(),Sl(11,"po-button",7),ht("p-click",function(){Xy(r);let i=Tx();return Qy(i.notification("ignored","warning"))}),sg(),Sl(12,"po-button",8),ht("p-click",function(){Xy(r);let i=Tx();return Qy(i.notification("blocked","information"))}),sg()();}if(o&2){let r=Tx();Vp(),tw("p-src",r.userAvatar),Vp(3),fg(" ",r.currentFriend.name," "),Vp(2),fg(" ",r.currentFriend.mutualFriends," mutual friends "),Vp(2),fg(" Resides in ",r.currentFriend.reside," ");}}function we(o,he){o&1&&(Sl(0,"div",0)(1,"span",9),Jx(2,"Congratulations TOTVS, no more requests!"),sg()());}var ue=(()=>{class o{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-icon","fa fa-check-circle","p-label","Confirm",1,"po-md-4",3,"p-click"],["p-icon","fa fa-eye-slash","p-label","Ignore",1,"po-md-4",3,"p-click"],["p-icon","fa fa-ban","p-label","Block",1,"po-md-4",3,"p-click"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"po-widget",1),ux(2,Pe,13,4)(3,we,3,0,"div",0),sg()()),a&2&&(Vp(2),dx(i.currentFriend?2:3));},dependencies:[s3,Qt,bNe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Button Social Network"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-button-social-network/sample-po-button-social-network.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-button
          class="po-md-4"
          p-icon="fa fa-check-circle"
          p-label="Confirm"
          (p-click)="notification('added', 'success')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-eye-slash"
          p-label="Ignore"
          (p-click)="notification('ignored', 'warning')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-ban"
          p-label="Block"
          (p-click)="notification('blocked', 'information')"
        ></po-button>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-button-social-network/sample-po-button-social-network.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-social-network',
  templateUrl: './sample-po-button-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-social-network"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-doc"]],standalone:false,decls:819,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoButtonType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoButtonModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-button."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoButtonComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O "),Sl(15,"code"),Jx(16,"po-button"),sg(),Jx(17," permite que o usu\xE1rio execute a\xE7\xF5es predefinidas pelo desenvolvedor."),sg(),Sl(18,"p"),Jx(19,"Atrav\xE9s dos tipos, \xE9 poss\xEDvel identificar a import\xE2ncia de cada a\xE7\xE3o."),sg(),Sl(20,"h4"),Jx(21,"Boas pr\xE1ticas"),sg(),Sl(22,"ul")(23,"li"),Jx(24,"Evite "),Sl(25,"code"),Jx(26,"labels"),sg(),Jx(27," extensos que quebram o layout do "),Sl(28,"code"),Jx(29,"po-button"),sg(),Jx(30,", use "),Sl(31,"code"),Jx(32,"labels"),sg(),Jx(33," diretos, curtos e intuitivos."),sg(),Sl(34,"li"),Jx(35,"Utilize apenas um "),Sl(36,"code"),Jx(37,"po-button"),sg(),Jx(38," configurado como "),Sl(39,"code"),Jx(40,"primary"),sg(),Jx(41," por p\xE1gina."),sg(),Sl(42,"li"),Jx(43,"Para a\xE7\xF5es irrevers\xEDveis use sempre a propriedade "),Sl(44,"code"),Jx(45,"p-danger"),sg(),Jx(46,"."),sg()(),Sl(47,"h4"),Jx(48,"Acessibilidade tratada no componente"),sg(),Sl(49,"p"),Jx(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Sl(51,"ul")(52,"li"),Jx(53,"Quando em foco, o bot\xE3o \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(54,"a",6),Jx(55,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),sg()(),Sl(56,"li"),Jx(57,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(58,"a",7),Jx(59,"WCAG 2.4.12: Focus Appearance"),sg()()(),Sl(60,"h4"),Jx(61,"Tokens customiz\xE1veis"),sg(),Sl(62,"p"),Jx(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(64,"blockquote")(65,"p"),Jx(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(67,"a",8),Jx(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(69,"."),sg()(),Sl(70,"table")(71,"thead")(72,"tr")(73,"th"),Jx(74,"Propriedade"),sg(),Sl(75,"th"),Jx(76,"Descri\xE7\xE3o"),sg(),Sl(77,"th"),Jx(78,"Valor Padr\xE3o"),sg()()(),Sl(79,"tbody")(80,"tr")(81,"td")(82,"code"),Jx(83,"--font-family"),sg()(),Sl(84,"td"),Jx(85,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(86,"td")(87,"code"),Jx(88,"var(--font-family-theme)"),sg()()(),Sl(89,"tr")(90,"td")(91,"code"),Jx(92,"--font-size"),sg()(),Sl(93,"td"),Jx(94,"Tamanho da fonte"),sg(),Sl(95,"td")(96,"code"),Jx(97,"var(--font-size-default)"),sg()()(),Sl(98,"tr")(99,"td")(100,"code"),Jx(101,"--font-weight"),sg()(),Sl(102,"td"),Jx(103,"Peso da fonte"),sg(),Sl(104,"td")(105,"code"),Jx(106,"var(--font-weight-bold)"),sg()()(),Sl(107,"tr")(108,"td")(109,"code"),Jx(110,"--line-height"),sg()(),Sl(111,"td"),Jx(112,"Tamanho da label"),sg(),Sl(113,"td")(114,"code"),Jx(115,"var(--line-height-none)"),sg()()(),Sl(116,"tr")(117,"td")(118,"code"),Jx(119,"--border-radius"),sg()(),Sl(120,"td"),Jx(121,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(122,"td")(123,"code"),Jx(124,"var(--border-radius-md)"),sg()()(),Sl(125,"tr")(126,"td")(127,"code"),Jx(128,"--border-width"),sg()(),Sl(129,"td"),Jx(130,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(131,"td")(132,"code"),Jx(133,"var(--border-width-md)"),sg()()(),Sl(134,"tr")(135,"td")(136,"code"),Jx(137,"--padding"),sg()(),Sl(138,"td"),Jx(139,"Preenchimento"),sg(),Sl(140,"td")(141,"code"),Jx(142,"0 1em"),sg()()(),Sl(143,"tr")(144,"td")(145,"strong"),Jx(146,"Danger"),sg()(),Wl(147,"td")(148,"td"),sg(),Sl(149,"tr")(150,"td")(151,"code"),Jx(152,"--text-color-danger"),sg()(),Sl(153,"td"),Jx(154,"Cor do texto no estado danger"),sg(),Sl(155,"td")(156,"code"),Jx(157,"var(--color-neutral-light-00)"),sg()()(),Sl(158,"tr")(159,"td")(160,"code"),Jx(161,"--color-button-danger"),sg()(),Sl(162,"td"),Jx(163,"Cor do bot\xE3o no estado danger"),sg(),Sl(164,"td")(165,"code"),Jx(166,"var(--color-feedback-negative-dark)"),sg()()(),Sl(167,"tr")(168,"td")(169,"code"),Jx(170,"--color-danger-hover"),sg()(),Sl(171,"td"),Jx(172,"Cor de hover no estado danger"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--color-feedback-negative-darker)"),sg()()(),Sl(176,"tr")(177,"td")(178,"code"),Jx(179,"--color-danger-pressed"),sg()(),Sl(180,"td"),Jx(181,"Cor pressionada no estado danger"),sg(),Sl(182,"td")(183,"code"),Jx(184,"var(--color-feedback-negative-darkest)"),sg()()(),Sl(185,"tr")(186,"td")(187,"code"),Jx(188,"--background-danger-hover"),sg()(),Sl(189,"td"),Jx(190,"Cor de background de hover no estado danger"),sg(),Sl(191,"td")(192,"code"),Jx(193,"var(--color-feedback-negative-lighter)"),sg()()(),Sl(194,"tr")(195,"td")(196,"code"),Jx(197,"--border-color-danger-hover"),sg()(),Sl(198,"td"),Jx(199,"Cor da borda de hover no estado danger"),sg(),Sl(200,"td")(201,"code"),Jx(202,"var(--color-feedback-negative-darkest)"),sg()()(),Sl(203,"tr")(204,"td")(205,"code"),Jx(206,"--background-danger-pressed"),sg()(),Sl(207,"td"),Jx(208,"Cor de background pressionado no estado danger"),sg(),Sl(209,"td")(210,"code"),Jx(211,"var(--color-feedback-negative-light)"),sg()()(),Sl(212,"tr")(213,"td")(214,"code"),Jx(215,"--background-color-button-danger"),sg(),Jx(216,"\xA0"),sg(),Sl(217,"td"),Jx(218,"Cor de background do bot\xE3o no estado danger"),sg(),Sl(219,"td")(220,"code"),Jx(221,"var(--color-transparent)"),sg()()(),Sl(222,"tr")(223,"td")(224,"strong"),Jx(225,"Default Values"),sg()(),Wl(226,"td")(227,"td"),sg(),Sl(228,"tr")(229,"td")(230,"code"),Jx(231,"--text-color"),sg()(),Sl(232,"td"),Jx(233,"Cor do texto"),sg(),Sl(234,"td")(235,"code"),Jx(236,"var(--color-neutral-light-00)"),sg()()(),Sl(237,"tr")(238,"td")(239,"code"),Jx(240,"--color"),sg()(),Sl(241,"td"),Jx(242,"Cor principal do bot\xE3o"),sg(),Sl(243,"td")(244,"code"),Jx(245,"var(--color-action-default)"),sg()()(),Sl(246,"tr")(247,"td")(248,"code"),Jx(249,"--background-color"),sg()(),Sl(250,"td"),Jx(251,"Cor de background"),sg(),Sl(252,"td")(253,"code"),Jx(254,"var(--color-transparent)"),sg()()(),Sl(255,"tr")(256,"td")(257,"code"),Jx(258,"--border-color"),sg()(),Sl(259,"td"),Jx(260,"Cor da borda"),sg(),Sl(261,"td")(262,"code"),Jx(263,"var(--color-transparent)"),sg()()(),Sl(264,"tr")(265,"td")(266,"code"),Jx(267,"--shadow"),sg()(),Sl(268,"td"),Jx(269,"Cont\xE9m o valor da sombra do elemento"),sg(),Sl(270,"td")(271,"code"),Jx(272,"var(--shadow-none)"),sg()()(),Sl(273,"tr")(274,"td")(275,"strong"),Jx(276,"Hover"),sg()(),Wl(277,"td")(278,"td"),sg(),Sl(279,"tr")(280,"td")(281,"code"),Jx(282,"--color-hover"),sg()(),Sl(283,"td"),Jx(284,"Cor principal no estado hover"),sg(),Sl(285,"td")(286,"code"),Jx(287,"var(--color-action-hover)"),sg()()(),Sl(288,"tr")(289,"td")(290,"code"),Jx(291,"--background-hover"),sg()(),Sl(292,"td"),Jx(293,"Cor de background no estado hover"),sg(),Sl(294,"td")(295,"code"),Jx(296,"var(--color-brand-01-lighter)"),sg()()(),Sl(297,"tr")(298,"td")(299,"code"),Jx(300,"--border-color-hover"),sg()(),Sl(301,"td"),Jx(302,"Cor da borda no estado hover"),sg(),Sl(303,"td")(304,"code"),Jx(305,"var(--color-brand-01-darkest)"),sg()()(),Sl(306,"tr")(307,"td")(308,"strong"),Jx(309,"Focused"),sg()(),Wl(310,"td")(311,"td"),sg(),Sl(312,"tr")(313,"td")(314,"code"),Jx(315,"--outline-color-focused"),sg()(),Sl(316,"td"),Jx(317,"Cor do outline do estado de focus"),sg(),Sl(318,"td")(319,"code"),Jx(320,"var(--color-action-focus)"),sg()()(),Sl(321,"tr")(322,"td")(323,"strong"),Jx(324,"Pressed"),sg()(),Wl(325,"td")(326,"td"),sg(),Sl(327,"tr")(328,"td")(329,"code"),Jx(330,"--color-pressed"),sg()(),Sl(331,"td"),Jx(332,"Cor principal no estado de pressionado"),sg(),Sl(333,"td")(334,"code"),Jx(335,"var(--color-action-pressed)"),sg()()(),Sl(336,"tr")(337,"td")(338,"code"),Jx(339,"--background-pressed"),sg()(),Sl(340,"td"),Jx(341,"Cor de background no estado de pressionado\xA0"),sg(),Sl(342,"td")(343,"code"),Jx(344,"var(--color-brand-01-light)"),sg()()(),Sl(345,"tr")(346,"td")(347,"strong"),Jx(348,"Disabled"),sg()(),Wl(349,"td")(350,"td"),sg(),Sl(351,"tr")(352,"td")(353,"code"),Jx(354,"--text-color-disabled"),sg()(),Sl(355,"td"),Jx(356,"Cor do texto no estado disabled"),sg(),Sl(357,"td")(358,"code"),Jx(359,"var(--color-neutral-dark-70)"),sg()()(),Sl(360,"tr")(361,"td")(362,"code"),Jx(363,"--color-disabled"),sg()(),Sl(364,"td"),Jx(365,"Cor principal no estado disabled"),sg(),Sl(366,"td")(367,"code"),Jx(368,"var(--color-action-disabled)"),sg()()(),Sl(369,"tr")(370,"td")(371,"code"),Jx(372,"--background-color-disabled"),sg()(),Sl(373,"td"),Jx(374,"Cor de background no estado disabled"),sg(),Sl(375,"td")(376,"code"),Jx(377,"var(--color-transparent)"),sg()()()()()(),Sl(378,"div",9)(379,"h4",10),Jx(380,"Seletor"),sg(),Sl(381,"pre",11),Jx(382,`<po-button
    p-aria-label="string"
    (p-click)="EventEmitter"
    p-danger="boolean"
    p-disabled="boolean"
    p-icon="string | TemplateRef<void>"
    p-kind="string"
    p-label="string"
    p-loading="boolean"
    p-size="string"
    p-tabindex="number | string"
    p-type="PoButtonType" >
</po-button>
`),sg()(),Sl(383,"h4",12),Jx(384,"Propriedades"),sg(),Sl(385,"table",13)(386,"tr",14)(387,"th",15),Jx(388,"Nome"),sg(),Sl(389,"th",15),Jx(390,"Tipo"),sg(),Sl(391,"th",15),Jx(392,"Padr\xE3o"),sg(),Sl(393,"th",15),Jx(394,"Descri\xE7\xE3o"),sg()(),Sl(395,"tr",16)(396,"td",17)(397,"div",18)(398,"span",19),Jx(399," p-aria-label"),Wl(400,"br"),sg()()(),Sl(401,"td",20)(402,"code",21),Jx(403,"string"),sg()(),Sl(404,"td",22),Jx(405,"-"),sg(),Sl(406,"td",23)(407,"em")(408,"strong"),Jx(409,"(opcional)"),sg()(),Sl(410,"p"),Jx(411,"Define um "),Sl(412,"code"),Jx(413,"aria-label"),sg(),Jx(414," para o "),Sl(415,"code"),Jx(416,"po-button"),sg(),Jx(417,"."),sg(),Sl(418,"p"),Jx(419,"Caso esta propriedade n\xE3o seja informada ser\xE1 considerada a label do bot\xE3o."),sg(),Sl(420,"blockquote")(421,"p"),Jx(422,"Em caso de bot\xF5es com apenas \xEDcone a atribui\xE7\xE3o de valor \xE0 esta propriedade \xE9 muito importante para acessibilidade."),sg()()()(),Sl(423,"tr",16)(424,"td",17)(425,"div",24)(426,"span",25),Jx(427," (p-click)"),Wl(428,"br"),sg()()(),Sl(429,"td",20)(430,"code",26),Jx(431,"EventEmitter"),sg()(),Sl(432,"td",22),Jx(433,"-"),sg(),Sl(434,"td",23)(435,"p"),Jx(436,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio clicar sobre o "),Sl(437,"code"),Jx(438,"po-button"),sg(),Jx(439,"."),sg()()(),Sl(440,"tr",16)(441,"td",17)(442,"div",18)(443,"span",19),Jx(444," p-danger"),Wl(445,"br"),sg()()(),Sl(446,"td",20)(447,"code",27),Jx(448,"boolean"),sg()(),Sl(449,"td",22),Jx(450,"-"),sg(),Sl(451,"td",23)(452,"em")(453,"strong"),Jx(454,"(opcional)"),sg()(),Sl(455,"p"),Jx(456,"Deve ser usado em a\xE7\xF5es irrevers\xEDveis que o usu\xE1rio precisa ter cuidado ao execut\xE1-la, como a exclus\xE3o de um registro."),sg(),Sl(457,"blockquote")(458,"p"),Jx(459,"A propriedade "),Sl(460,"code"),Jx(461,'p-kind="tertiary"'),sg(),Jx(462," ser\xE1 inativada ao utilizar esta propriedade."),sg()()()(),Sl(463,"tr",16)(464,"td",17)(465,"div",18)(466,"span",19),Jx(467," p-disabled"),Wl(468,"br"),sg()()(),Sl(469,"td",20)(470,"code",27),Jx(471,"boolean"),sg()(),Sl(472,"td",22)(473,"p")(474,"code"),Jx(475,"false"),sg()()(),Sl(476,"td",23)(477,"em")(478,"strong"),Jx(479,"(opcional)"),sg()(),Sl(480,"p"),Jx(481,"Desabilita o "),Sl(482,"code"),Jx(483,"po-button"),sg(),Jx(484," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),sg()()(),Sl(485,"tr",16)(486,"td",17)(487,"div",18)(488,"span",19),Jx(489," p-icon"),Wl(490,"br"),sg()()(),Sl(491,"td",20)(492,"code",21),Jx(493,"string "),sg(),Sl(494,"code",28),Jx(495," TemplateRef<void>"),sg()(),Sl(496,"td",22),Jx(497,"-"),sg(),Sl(498,"td",23)(499,"em")(500,"strong"),Jx(501,"(opcional)"),sg()(),Sl(502,"p"),Jx(503,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),sg(),Sl(504,"p"),Jx(505,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(506,"a",29),Jx(507,"Biblioteca de \xEDcones"),sg(),Jx(508,", conforme exemplo:"),sg(),Sl(509,"pre")(510,"code"),Jx(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),sg()(),Sl(512,"p"),Jx(513,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(514,"em"),Jx(515,"Font Awesome"),sg(),Jx(516,`, desde que a biblioteca
esteja carregada no projeto:`),sg(),Sl(517,"pre")(518,"code"),Jx(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),sg()(),Sl(520,"p"),Jx(521,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(522,"code"),Jx(523,"TemplateRef"),sg(),Jx(524,", conforme exemplo abaixo:"),sg(),Sl(525,"pre")(526,"code"),Jx(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(528,"blockquote")(529,"p"),Jx(530,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(531,"code"),Jx(532,"font-size: inherit"),sg(),Jx(533," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(534,"tr",16)(535,"td",17)(536,"div",18)(537,"span",19),Jx(538," p-kind"),Wl(539,"br"),sg()()(),Sl(540,"td",20)(541,"code",21),Jx(542,"string"),sg()(),Sl(543,"td",22)(544,"p")(545,"code"),Jx(546,"secondary"),sg()()(),Sl(547,"td",23)(548,"em")(549,"strong"),Jx(550,"(opcional)"),sg()(),Sl(551,"p"),Jx(552,"Define o estilo visual do componente conforme valores especificados no enum "),Sl(553,"code"),Jx(554,"PoButtonKind"),sg(),Jx(555,":"),sg(),Sl(556,"ul")(557,"li")(558,"code"),Jx(559,"primary"),sg(),Jx(560,": destaca o bot\xE3o, sendo recomendado para a\xE7\xF5es principais."),sg(),Sl(561,"li")(562,"code"),Jx(563,"secondary"),sg(),Jx(564,": estilo padr\xE3o, ideal para a\xE7\xF5es secund\xE1rias."),sg(),Sl(565,"li")(566,"code"),Jx(567,"tertiary"),sg(),Jx(568,": exibe o bot\xE3o sem preenchimento no fundo, indicado para a\xE7\xF5es opcionais."),sg()()()(),Sl(569,"tr",16)(570,"td",17)(571,"div",18)(572,"span",19),Jx(573," p-label"),Wl(574,"br"),sg()()(),Sl(575,"td",20)(576,"code",21),Jx(577,"string"),sg()(),Sl(578,"td",22),Jx(579,"-"),sg(),Sl(580,"td",23)(581,"em")(582,"strong"),Jx(583,"(opcional)"),sg()(),Sl(584,"p"),Jx(585,"Label do bot\xE3o."),sg()()(),Sl(586,"tr",16)(587,"td",17)(588,"div",18)(589,"span",19),Jx(590," p-loading"),Wl(591,"br"),sg()()(),Sl(592,"td",20)(593,"code",27),Jx(594,"boolean"),sg()(),Sl(595,"td",22)(596,"p")(597,"code"),Jx(598,"false"),sg()()(),Sl(599,"td",23)(600,"em")(601,"strong"),Jx(602,"(opcional)"),sg()(),Sl(603,"p"),Jx(604,"Exibe um \xEDcone de carregamento \xE0 esquerda do "),Sl(605,"em"),Jx(606,"label"),sg(),Jx(607," do bot\xE3o."),sg(),Sl(608,"blockquote")(609,"p"),Jx(610,"Quando esta propriedade estiver habilitada, desabilitar\xE1 o bot\xE3o."),sg()()()(),Sl(611,"tr",16)(612,"td",17)(613,"div",18)(614,"span",19),Jx(615," p-size"),Wl(616,"br"),sg()()(),Sl(617,"td",20)(618,"code",21),Jx(619,"string"),sg()(),Sl(620,"td",22)(621,"p")(622,"code"),Jx(623,"medium"),sg()()(),Sl(624,"td",23)(625,"em")(626,"strong"),Jx(627,"(opcional)"),sg()(),Sl(628,"p"),Jx(629,"Define o tamanho do componente:"),sg(),Sl(630,"ul")(631,"li")(632,"code"),Jx(633,"small"),sg(),Jx(634,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(635,"li")(636,"code"),Jx(637,"medium"),sg(),Jx(638,": altura de 44px."),sg(),Sl(639,"li")(640,"code"),Jx(641,"large"),sg(),Jx(642,": altura de 56px."),sg()(),Sl(643,"blockquote")(644,"p"),Jx(645,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(646,"code"),Jx(647,"medium"),sg(),Jx(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(649,"a",30),Jx(650,"po-theme"),sg(),Jx(651,"."),sg()()()(),Sl(652,"tr",16)(653,"td",17)(654,"div",18)(655,"span",19),Jx(656," p-tabindex"),Wl(657,"br"),sg()()(),Sl(658,"td",20)(659,"code",31),Jx(660,"number "),sg(),Sl(661,"code",21),Jx(662," string"),sg()(),Sl(663,"td",22),Jx(664,"-"),sg(),Sl(665,"td",23)(666,"em")(667,"strong"),Jx(668,"(opcional)"),sg()(),Sl(669,"p"),Jx(670,"Define o "),Sl(671,"code"),Jx(672,"tabindex"),sg(),Jx(673," do elemento "),Sl(674,"code"),Jx(675,"<button>"),sg(),Jx(676," nativo interno."),sg(),Sl(677,"p"),Jx(678,"Use "),Sl(679,"code"),Jx(680,'[tabindex]="-1"'),sg(),Jx(681," para remover o bot\xE3o da ordem de foco do teclado."),sg()()(),Sl(682,"tr",16)(683,"td",17)(684,"div",18)(685,"span",19),Jx(686," p-type"),Wl(687,"br"),sg()()(),Sl(688,"td",20)(689,"code",32),Jx(690,"PoButtonType"),sg()(),Sl(691,"td",22)(692,"p")(693,"code"),Jx(694,"PoButtonType.Button"),sg()()(),Sl(695,"td",23)(696,"em")(697,"strong"),Jx(698,"(opcional)"),sg()(),Sl(699,"p"),Jx(700,"Define o tipo do bot\xE3o."),sg()()()(),Sl(701,"h3",12),Jx(702,"M\xE9todos"),sg(),Sl(703,"table",33)(704,"tr",16)(705,"th",34)(706,"div",18)(707,"h4")(708,"span",19),Jx(709," focus "),sg()()()()(),Sl(710,"tr",23)(711,"td",23)(712,"p"),Jx(713,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(714,"p"),Jx(715,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(716,"pre")(717,"code"),Jx(718,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),sg()()()()(),Wl(719,"br"),Sl(720,"h3"),Jx(721,"Enums"),sg(),Sl(722,"h4",4)(723,"code",5),Jx(724,"PoButtonKind"),sg()(),Sl(725,"div",2)(726,"p"),Jx(727,"Estilos dispon\xEDveis do button."),sg()(),Sl(728,"h4",12),Jx(729,"Propriedades"),sg(),Sl(730,"table",13)(731,"tr",14)(732,"th",15),Jx(733,"Nome"),sg(),Sl(734,"th",15),Jx(735,"Descri\xE7\xE3o"),sg()(),Sl(736,"tr",16)(737,"td",17)(738,"div",18)(739,"span",19),Jx(740," primary"),Wl(741,"br"),sg()()(),Sl(742,"td",23)(743,"p"),Jx(744,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),sg()()(),Sl(745,"tr",16)(746,"td",17)(747,"div",18)(748,"span",19),Jx(749," secondary"),Wl(750,"br"),sg()()(),Sl(751,"td",23)(752,"p"),Jx(753,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),sg()()(),Sl(754,"tr",16)(755,"td",17)(756,"div",18)(757,"span",19),Jx(758," tertiary"),Wl(759,"br"),sg()()(),Sl(760,"td",23)(761,"p"),Jx(762,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),sg()()()(),Sl(763,"h4",4)(764,"code",5),Jx(765,"PoButtonType"),sg()(),Sl(766,"div",2)(767,"p"),Jx(768,"Enumera\xE7\xE3o que define os tipos poss\xEDveis para o "),Sl(769,"code"),Jx(770,"PoButtonComponent"),sg(),Jx(771,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),sg()(),Sl(772,"h4",12),Jx(773,"Propriedades"),sg(),Sl(774,"table",13)(775,"tr",14)(776,"th",15),Jx(777,"Nome"),sg(),Sl(778,"th",15),Jx(779,"Descri\xE7\xE3o"),sg()(),Sl(780,"tr",16)(781,"td",17)(782,"div",18)(783,"span",19),Jx(784," Submit"),Wl(785,"br"),sg()()(),Sl(786,"td",23)(787,"p"),Jx(788,"Define o bot\xE3o como do tipo "),Sl(789,"code"),Jx(790,"submit"),sg(),Jx(791,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Sl(792,"code"),Jx(793,"submit"),sg(),Jx(794,"."),sg()()(),Sl(795,"tr",16)(796,"td",17)(797,"div",18)(798,"span",19),Jx(799," Button"),Wl(800,"br"),sg()()(),Sl(801,"td",23)(802,"p"),Jx(803,"Define o bot\xE3o como do tipo "),Sl(804,"code"),Jx(805,"button"),sg(),Jx(806,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),sg()()(),Sl(807,"tr",16)(808,"td",17)(809,"div",18)(810,"span",19),Jx(811," Reset"),Wl(812,"br"),sg()()(),Sl(813,"td",23)(814,"p"),Jx(815,"Define o bot\xE3o como do tipo "),Sl(816,"code"),Jx(817,"reset"),sg(),Jx(818,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var Se=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Button",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-button-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-button-basic-view")(6,"sample-po-button-labs-view")(7,"sample-po-button-social-network-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,se,ce,be,Ee],encapsulation:2})}return o})();var Oe=[{path:"",component:Se}],ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[pL.forChild(Oe),pL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ar,ge]})}return o})();export{mt as DocPoButtonModule};