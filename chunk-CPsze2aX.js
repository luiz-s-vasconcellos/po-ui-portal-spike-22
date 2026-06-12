import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,c9 as Qde,cv as y3,s,r as r$1,aV as Xp,a$ as Qt,Q as Cl,a1 as dt,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,z as qx,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,cr as _3,b9 as ONe,aq as ix,at as ox,a3 as SNe,aD as Jy,aT as Zx,aE as e_,aA as Ex}from'./main-OS7VVRJY.js';var de=(()=>{class o{onClick(){alert("Po Button!");}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Button",3,"p-click"]],template:function(a,i){a&1&&(Cl(0,"po-button",0),dt("p-click",function(){return i.onClick()}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Button Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-button-basic/sample-po-button-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-button-basic/sample-po-button-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-button-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return o})();var me=(()=>{class o{poDialog=f(Qde);label;kind;icon;size;properties;type;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"fa fa-podcast",value:"fa fa-podcast"}];kindsOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];typeOptions=[{label:"button",value:y3.Button},{label:"submit",value:y3.Submit},{label:"reset",value:y3.Reset}];ngOnInit(){this.restore();}buttonClick(){this.poDialog.alert({title:"PO Button",message:"Hello PO World!!!"});}propertiesChange(r){this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false}),r&&r.forEach(a=>{a==="danger"&&this.properties.includes("danger")&&(this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:true}));});}verifyDisabled(r){let a=[...this.propertiesOptions];r==="tertiary"?(a[2]={value:"danger",label:"Danger",disabled:true},this.propertiesOptions=a):(a[2]={value:"danger",label:"Danger",disabled:false},this.propertiesOptions=a);}restore(){this.label=void 0,this.kind="secondary",this.size="medium",this.icon=void 0,this.type=y3.Button,this.properties=[],this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false});}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs"]],standalone:false,decls:14,vars:19,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-click","p-disabled","p-icon","p-label","p-loading","p-size","p-danger","p-kind","p-type"],["name","label","p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","kind","p-columns","4","p-label","Kind",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","type","p-columns","4","p-label","Type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let u=gx();Cl(0,"div",1)(1,"po-button",2),dt("p-click",function(){return i.buttonClick()}),og()(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",1)(6,"po-input",3),gw("ngModelChange",function(d){return Jy(u),Zx(i.label,d)||(i.label=d),e_(d)}),og(),Z0(),og(),Cl(7,"po-checkbox-group",4),gw("ngModelChange",function(d){return Jy(u),Zx(i.properties,d)||(i.properties=d),e_(d)}),dt("p-change",function(d){return i.propertiesChange(d)}),og(),Z0(),Cl(8,"po-radio-group",5),gw("ngModelChange",function(d){return Jy(u),Zx(i.icon,d)||(i.icon=d),e_(d)}),og(),Z0(),Cl(9,"po-radio-group",6),gw("ngModelChange",function(d){return Jy(u),Zx(i.kind,d)||(i.kind=d),e_(d)}),dt("p-change",function(d){return i.verifyDisabled(d)}),og(),Z0(),Cl(10,"po-radio-group",7),gw("ngModelChange",function(d){return Jy(u),Zx(i.type,d)||(i.type=d),e_(d)}),og(),Z0(),Cl(11,"po-radio-group",8),gw("ngModelChange",function(d){return Jy(u),Zx(i.size,d)||(i.size=d),e_(d)}),dt("p-change",function(d){return i.verifyDisabled(d)}),og(),Z0(),Cl(12,"div",1)(13,"po-button",9),dt("p-click",function(){return i.restore()}),og()()();}a&2&&(Lp(),ZE("p-disabled",i.properties.includes("disabled"))("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-size",i.size)("p-danger",i.properties.includes("danger"))("p-kind",i.kind)("p-type",i.type),Lp(5),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.icon),ZE("p-options",i.iconsOptions),X0(),Lp(),pw("ngModel",i.kind),ZE("p-options",i.kindsOptions),X0(),Lp(),pw("ngModel",i.type),ZE("p-options",i.typeOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizesOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Button Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-button-labs/sample-po-button-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-button-labs/sample-po-button-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-button-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ye,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return o})();function Pe(o,he){if(o&1){let r=gx();Cl(0,"div",0),Hl(1,"po-avatar",2),Cl(2,"div",3)(3,"span",4),qx(4),og(),Cl(5,"span",5),qx(6),og(),Cl(7,"span",5),qx(8),og()()(),Cl(9,"div",0)(10,"po-button",6),dt("p-click",function(){Jy(r);let i=Ex();return e_(i.notification("added","success"))}),og(),Cl(11,"po-button",7),dt("p-click",function(){Jy(r);let i=Ex();return e_(i.notification("ignored","warning"))}),og(),Cl(12,"po-button",8),dt("p-click",function(){Jy(r);let i=Ex();return e_(i.notification("blocked","information"))}),og()();}if(o&2){let r=Ex();Lp(),ZE("p-src",r.userAvatar),Lp(3),dg(" ",r.currentFriend.name," "),Lp(2),dg(" ",r.currentFriend.mutualFriends," mutual friends "),Lp(2),dg(" Resides in ",r.currentFriend.reside," ");}}function we(o,he){o&1&&(Cl(0,"div",0)(1,"span",9),qx(2,"Congratulations TOTVS, no more requests!"),og()());}var ue=(()=>{class o{poNotification=f(Xp);currentFriend;userAvatar="https://lorempixel.com/144/144/";newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-icon","fa fa-check-circle","p-label","Confirm",1,"po-md-4",3,"p-click"],["p-icon","fa fa-eye-slash","p-label","Ignore",1,"po-md-4",3,"p-click"],["p-icon","fa fa-ban","p-label","Block",1,"po-md-4",3,"p-click"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"po-widget",1),ix(2,Pe,13,4)(3,we,3,0,"div",0),og()()),a&2&&(Lp(2),ox(i.currentFriend?2:3));},dependencies:[_3,Qt,ONe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Button Social Network"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-button-social-network/sample-po-button-social-network.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-button-social-network/sample-po-button-social-network.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-button-social-network"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Be,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-doc"]],standalone:false,decls:819,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoButtonType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoButtonModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-button."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoButtonComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O "),Cl(15,"code"),qx(16,"po-button"),og(),qx(17," permite que o usu\xE1rio execute a\xE7\xF5es predefinidas pelo desenvolvedor."),og(),Cl(18,"p"),qx(19,"Atrav\xE9s dos tipos, \xE9 poss\xEDvel identificar a import\xE2ncia de cada a\xE7\xE3o."),og(),Cl(20,"h4"),qx(21,"Boas pr\xE1ticas"),og(),Cl(22,"ul")(23,"li"),qx(24,"Evite "),Cl(25,"code"),qx(26,"labels"),og(),qx(27," extensos que quebram o layout do "),Cl(28,"code"),qx(29,"po-button"),og(),qx(30,", use "),Cl(31,"code"),qx(32,"labels"),og(),qx(33," diretos, curtos e intuitivos."),og(),Cl(34,"li"),qx(35,"Utilize apenas um "),Cl(36,"code"),qx(37,"po-button"),og(),qx(38," configurado como "),Cl(39,"code"),qx(40,"primary"),og(),qx(41," por p\xE1gina."),og(),Cl(42,"li"),qx(43,"Para a\xE7\xF5es irrevers\xEDveis use sempre a propriedade "),Cl(44,"code"),qx(45,"p-danger"),og(),qx(46,"."),og()(),Cl(47,"h4"),qx(48,"Acessibilidade tratada no componente"),og(),Cl(49,"p"),qx(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Cl(51,"ul")(52,"li"),qx(53,"Quando em foco, o bot\xE3o \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Cl(54,"a",6),qx(55,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()(),Cl(56,"li"),qx(57,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Cl(58,"a",7),qx(59,"WCAG 2.4.12: Focus Appearance"),og()()(),Cl(60,"h4"),qx(61,"Tokens customiz\xE1veis"),og(),Cl(62,"p"),qx(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(64,"blockquote")(65,"p"),qx(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(67,"a",8),qx(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(69,"."),og()(),Cl(70,"table")(71,"thead")(72,"tr")(73,"th"),qx(74,"Propriedade"),og(),Cl(75,"th"),qx(76,"Descri\xE7\xE3o"),og(),Cl(77,"th"),qx(78,"Valor Padr\xE3o"),og()()(),Cl(79,"tbody")(80,"tr")(81,"td")(82,"code"),qx(83,"--font-family"),og()(),Cl(84,"td"),qx(85,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(86,"td")(87,"code"),qx(88,"var(--font-family-theme)"),og()()(),Cl(89,"tr")(90,"td")(91,"code"),qx(92,"--font-size"),og()(),Cl(93,"td"),qx(94,"Tamanho da fonte"),og(),Cl(95,"td")(96,"code"),qx(97,"var(--font-size-default)"),og()()(),Cl(98,"tr")(99,"td")(100,"code"),qx(101,"--font-weight"),og()(),Cl(102,"td"),qx(103,"Peso da fonte"),og(),Cl(104,"td")(105,"code"),qx(106,"var(--font-weight-bold)"),og()()(),Cl(107,"tr")(108,"td")(109,"code"),qx(110,"--line-height"),og()(),Cl(111,"td"),qx(112,"Tamanho da label"),og(),Cl(113,"td")(114,"code"),qx(115,"var(--line-height-none)"),og()()(),Cl(116,"tr")(117,"td")(118,"code"),qx(119,"--border-radius"),og()(),Cl(120,"td"),qx(121,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(122,"td")(123,"code"),qx(124,"var(--border-radius-md)"),og()()(),Cl(125,"tr")(126,"td")(127,"code"),qx(128,"--border-width"),og()(),Cl(129,"td"),qx(130,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Cl(131,"td")(132,"code"),qx(133,"var(--border-width-md)"),og()()(),Cl(134,"tr")(135,"td")(136,"code"),qx(137,"--padding"),og()(),Cl(138,"td"),qx(139,"Preenchimento"),og(),Cl(140,"td")(141,"code"),qx(142,"0 1em"),og()()(),Cl(143,"tr")(144,"td")(145,"strong"),qx(146,"Danger"),og()(),Hl(147,"td")(148,"td"),og(),Cl(149,"tr")(150,"td")(151,"code"),qx(152,"--text-color-danger"),og()(),Cl(153,"td"),qx(154,"Cor do texto no estado danger"),og(),Cl(155,"td")(156,"code"),qx(157,"var(--color-neutral-light-00)"),og()()(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--color-button-danger"),og()(),Cl(162,"td"),qx(163,"Cor do bot\xE3o no estado danger"),og(),Cl(164,"td")(165,"code"),qx(166,"var(--color-feedback-negative-dark)"),og()()(),Cl(167,"tr")(168,"td")(169,"code"),qx(170,"--color-danger-hover"),og()(),Cl(171,"td"),qx(172,"Cor de hover no estado danger"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--color-feedback-negative-darker)"),og()()(),Cl(176,"tr")(177,"td")(178,"code"),qx(179,"--color-danger-pressed"),og()(),Cl(180,"td"),qx(181,"Cor pressionada no estado danger"),og(),Cl(182,"td")(183,"code"),qx(184,"var(--color-feedback-negative-darkest)"),og()()(),Cl(185,"tr")(186,"td")(187,"code"),qx(188,"--background-danger-hover"),og()(),Cl(189,"td"),qx(190,"Cor de background de hover no estado danger"),og(),Cl(191,"td")(192,"code"),qx(193,"var(--color-feedback-negative-lighter)"),og()()(),Cl(194,"tr")(195,"td")(196,"code"),qx(197,"--border-color-danger-hover"),og()(),Cl(198,"td"),qx(199,"Cor da borda de hover no estado danger"),og(),Cl(200,"td")(201,"code"),qx(202,"var(--color-feedback-negative-darkest)"),og()()(),Cl(203,"tr")(204,"td")(205,"code"),qx(206,"--background-danger-pressed"),og()(),Cl(207,"td"),qx(208,"Cor de background pressionado no estado danger"),og(),Cl(209,"td")(210,"code"),qx(211,"var(--color-feedback-negative-light)"),og()()(),Cl(212,"tr")(213,"td")(214,"code"),qx(215,"--background-color-button-danger"),og(),qx(216,"\xA0"),og(),Cl(217,"td"),qx(218,"Cor de background do bot\xE3o no estado danger"),og(),Cl(219,"td")(220,"code"),qx(221,"var(--color-transparent)"),og()()(),Cl(222,"tr")(223,"td")(224,"strong"),qx(225,"Default Values"),og()(),Hl(226,"td")(227,"td"),og(),Cl(228,"tr")(229,"td")(230,"code"),qx(231,"--text-color"),og()(),Cl(232,"td"),qx(233,"Cor do texto"),og(),Cl(234,"td")(235,"code"),qx(236,"var(--color-neutral-light-00)"),og()()(),Cl(237,"tr")(238,"td")(239,"code"),qx(240,"--color"),og()(),Cl(241,"td"),qx(242,"Cor principal do bot\xE3o"),og(),Cl(243,"td")(244,"code"),qx(245,"var(--color-action-default)"),og()()(),Cl(246,"tr")(247,"td")(248,"code"),qx(249,"--background-color"),og()(),Cl(250,"td"),qx(251,"Cor de background"),og(),Cl(252,"td")(253,"code"),qx(254,"var(--color-transparent)"),og()()(),Cl(255,"tr")(256,"td")(257,"code"),qx(258,"--border-color"),og()(),Cl(259,"td"),qx(260,"Cor da borda"),og(),Cl(261,"td")(262,"code"),qx(263,"var(--color-transparent)"),og()()(),Cl(264,"tr")(265,"td")(266,"code"),qx(267,"--shadow"),og()(),Cl(268,"td"),qx(269,"Cont\xE9m o valor da sombra do elemento"),og(),Cl(270,"td")(271,"code"),qx(272,"var(--shadow-none)"),og()()(),Cl(273,"tr")(274,"td")(275,"strong"),qx(276,"Hover"),og()(),Hl(277,"td")(278,"td"),og(),Cl(279,"tr")(280,"td")(281,"code"),qx(282,"--color-hover"),og()(),Cl(283,"td"),qx(284,"Cor principal no estado hover"),og(),Cl(285,"td")(286,"code"),qx(287,"var(--color-action-hover)"),og()()(),Cl(288,"tr")(289,"td")(290,"code"),qx(291,"--background-hover"),og()(),Cl(292,"td"),qx(293,"Cor de background no estado hover"),og(),Cl(294,"td")(295,"code"),qx(296,"var(--color-brand-01-lighter)"),og()()(),Cl(297,"tr")(298,"td")(299,"code"),qx(300,"--border-color-hover"),og()(),Cl(301,"td"),qx(302,"Cor da borda no estado hover"),og(),Cl(303,"td")(304,"code"),qx(305,"var(--color-brand-01-darkest)"),og()()(),Cl(306,"tr")(307,"td")(308,"strong"),qx(309,"Focused"),og()(),Hl(310,"td")(311,"td"),og(),Cl(312,"tr")(313,"td")(314,"code"),qx(315,"--outline-color-focused"),og()(),Cl(316,"td"),qx(317,"Cor do outline do estado de focus"),og(),Cl(318,"td")(319,"code"),qx(320,"var(--color-action-focus)"),og()()(),Cl(321,"tr")(322,"td")(323,"strong"),qx(324,"Pressed"),og()(),Hl(325,"td")(326,"td"),og(),Cl(327,"tr")(328,"td")(329,"code"),qx(330,"--color-pressed"),og()(),Cl(331,"td"),qx(332,"Cor principal no estado de pressionado"),og(),Cl(333,"td")(334,"code"),qx(335,"var(--color-action-pressed)"),og()()(),Cl(336,"tr")(337,"td")(338,"code"),qx(339,"--background-pressed"),og()(),Cl(340,"td"),qx(341,"Cor de background no estado de pressionado\xA0"),og(),Cl(342,"td")(343,"code"),qx(344,"var(--color-brand-01-light)"),og()()(),Cl(345,"tr")(346,"td")(347,"strong"),qx(348,"Disabled"),og()(),Hl(349,"td")(350,"td"),og(),Cl(351,"tr")(352,"td")(353,"code"),qx(354,"--text-color-disabled"),og()(),Cl(355,"td"),qx(356,"Cor do texto no estado disabled"),og(),Cl(357,"td")(358,"code"),qx(359,"var(--color-neutral-dark-70)"),og()()(),Cl(360,"tr")(361,"td")(362,"code"),qx(363,"--color-disabled"),og()(),Cl(364,"td"),qx(365,"Cor principal no estado disabled"),og(),Cl(366,"td")(367,"code"),qx(368,"var(--color-action-disabled)"),og()()(),Cl(369,"tr")(370,"td")(371,"code"),qx(372,"--background-color-disabled"),og()(),Cl(373,"td"),qx(374,"Cor de background no estado disabled"),og(),Cl(375,"td")(376,"code"),qx(377,"var(--color-transparent)"),og()()()()()(),Cl(378,"div",9)(379,"h4",10),qx(380,"Seletor"),og(),Cl(381,"pre",11),qx(382,`<po-button
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
`),og()(),Cl(383,"h4",12),qx(384,"Propriedades"),og(),Cl(385,"table",13)(386,"tr",14)(387,"th",15),qx(388,"Nome"),og(),Cl(389,"th",15),qx(390,"Tipo"),og(),Cl(391,"th",15),qx(392,"Padr\xE3o"),og(),Cl(393,"th",15),qx(394,"Descri\xE7\xE3o"),og()(),Cl(395,"tr",16)(396,"td",17)(397,"div",18)(398,"span",19),qx(399," p-aria-label"),Hl(400,"br"),og()()(),Cl(401,"td",20)(402,"code",21),qx(403,"string"),og()(),Cl(404,"td",22),qx(405,"-"),og(),Cl(406,"td",23)(407,"em")(408,"strong"),qx(409,"(opcional)"),og()(),Cl(410,"p"),qx(411,"Define um "),Cl(412,"code"),qx(413,"aria-label"),og(),qx(414," para o "),Cl(415,"code"),qx(416,"po-button"),og(),qx(417,"."),og(),Cl(418,"p"),qx(419,"Caso esta propriedade n\xE3o seja informada ser\xE1 considerada a label do bot\xE3o."),og(),Cl(420,"blockquote")(421,"p"),qx(422,"Em caso de bot\xF5es com apenas \xEDcone a atribui\xE7\xE3o de valor \xE0 esta propriedade \xE9 muito importante para acessibilidade."),og()()()(),Cl(423,"tr",16)(424,"td",17)(425,"div",24)(426,"span",25),qx(427," (p-click)"),Hl(428,"br"),og()()(),Cl(429,"td",20)(430,"code",26),qx(431,"EventEmitter"),og()(),Cl(432,"td",22),qx(433,"-"),og(),Cl(434,"td",23)(435,"p"),qx(436,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio clicar sobre o "),Cl(437,"code"),qx(438,"po-button"),og(),qx(439,"."),og()()(),Cl(440,"tr",16)(441,"td",17)(442,"div",18)(443,"span",19),qx(444," p-danger"),Hl(445,"br"),og()()(),Cl(446,"td",20)(447,"code",27),qx(448,"boolean"),og()(),Cl(449,"td",22),qx(450,"-"),og(),Cl(451,"td",23)(452,"em")(453,"strong"),qx(454,"(opcional)"),og()(),Cl(455,"p"),qx(456,"Deve ser usado em a\xE7\xF5es irrevers\xEDveis que o usu\xE1rio precisa ter cuidado ao execut\xE1-la, como a exclus\xE3o de um registro."),og(),Cl(457,"blockquote")(458,"p"),qx(459,"A propriedade "),Cl(460,"code"),qx(461,'p-kind="tertiary"'),og(),qx(462," ser\xE1 inativada ao utilizar esta propriedade."),og()()()(),Cl(463,"tr",16)(464,"td",17)(465,"div",18)(466,"span",19),qx(467," p-disabled"),Hl(468,"br"),og()()(),Cl(469,"td",20)(470,"code",27),qx(471,"boolean"),og()(),Cl(472,"td",22)(473,"p")(474,"code"),qx(475,"false"),og()()(),Cl(476,"td",23)(477,"em")(478,"strong"),qx(479,"(opcional)"),og()(),Cl(480,"p"),qx(481,"Desabilita o "),Cl(482,"code"),qx(483,"po-button"),og(),qx(484," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og()()(),Cl(485,"tr",16)(486,"td",17)(487,"div",18)(488,"span",19),qx(489," p-icon"),Hl(490,"br"),og()()(),Cl(491,"td",20)(492,"code",21),qx(493,"string "),og(),Cl(494,"code",28),qx(495," TemplateRef<void>"),og()(),Cl(496,"td",22),qx(497,"-"),og(),Cl(498,"td",23)(499,"em")(500,"strong"),qx(501,"(opcional)"),og()(),Cl(502,"p"),qx(503,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Cl(504,"p"),qx(505,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(506,"a",29),qx(507,"Biblioteca de \xEDcones"),og(),qx(508,", conforme exemplo:"),og(),Cl(509,"pre")(510,"code"),qx(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),og()(),Cl(512,"p"),qx(513,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(514,"em"),qx(515,"Font Awesome"),og(),qx(516,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Cl(517,"pre")(518,"code"),qx(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),og()(),Cl(520,"p"),qx(521,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(522,"code"),qx(523,"TemplateRef"),og(),qx(524,", conforme exemplo abaixo:"),og(),Cl(525,"pre")(526,"code"),qx(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(528,"blockquote")(529,"p"),qx(530,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(531,"code"),qx(532,"font-size: inherit"),og(),qx(533," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(534,"tr",16)(535,"td",17)(536,"div",18)(537,"span",19),qx(538," p-kind"),Hl(539,"br"),og()()(),Cl(540,"td",20)(541,"code",21),qx(542,"string"),og()(),Cl(543,"td",22)(544,"p")(545,"code"),qx(546,"secondary"),og()()(),Cl(547,"td",23)(548,"em")(549,"strong"),qx(550,"(opcional)"),og()(),Cl(551,"p"),qx(552,"Define o estilo visual do componente conforme valores especificados no enum "),Cl(553,"code"),qx(554,"PoButtonKind"),og(),qx(555,":"),og(),Cl(556,"ul")(557,"li")(558,"code"),qx(559,"primary"),og(),qx(560,": destaca o bot\xE3o, sendo recomendado para a\xE7\xF5es principais."),og(),Cl(561,"li")(562,"code"),qx(563,"secondary"),og(),qx(564,": estilo padr\xE3o, ideal para a\xE7\xF5es secund\xE1rias."),og(),Cl(565,"li")(566,"code"),qx(567,"tertiary"),og(),qx(568,": exibe o bot\xE3o sem preenchimento no fundo, indicado para a\xE7\xF5es opcionais."),og()()()(),Cl(569,"tr",16)(570,"td",17)(571,"div",18)(572,"span",19),qx(573," p-label"),Hl(574,"br"),og()()(),Cl(575,"td",20)(576,"code",21),qx(577,"string"),og()(),Cl(578,"td",22),qx(579,"-"),og(),Cl(580,"td",23)(581,"em")(582,"strong"),qx(583,"(opcional)"),og()(),Cl(584,"p"),qx(585,"Label do bot\xE3o."),og()()(),Cl(586,"tr",16)(587,"td",17)(588,"div",18)(589,"span",19),qx(590," p-loading"),Hl(591,"br"),og()()(),Cl(592,"td",20)(593,"code",27),qx(594,"boolean"),og()(),Cl(595,"td",22)(596,"p")(597,"code"),qx(598,"false"),og()()(),Cl(599,"td",23)(600,"em")(601,"strong"),qx(602,"(opcional)"),og()(),Cl(603,"p"),qx(604,"Exibe um \xEDcone de carregamento \xE0 esquerda do "),Cl(605,"em"),qx(606,"label"),og(),qx(607," do bot\xE3o."),og(),Cl(608,"blockquote")(609,"p"),qx(610,"Quando esta propriedade estiver habilitada, desabilitar\xE1 o bot\xE3o."),og()()()(),Cl(611,"tr",16)(612,"td",17)(613,"div",18)(614,"span",19),qx(615," p-size"),Hl(616,"br"),og()()(),Cl(617,"td",20)(618,"code",21),qx(619,"string"),og()(),Cl(620,"td",22)(621,"p")(622,"code"),qx(623,"medium"),og()()(),Cl(624,"td",23)(625,"em")(626,"strong"),qx(627,"(opcional)"),og()(),Cl(628,"p"),qx(629,"Define o tamanho do componente:"),og(),Cl(630,"ul")(631,"li")(632,"code"),qx(633,"small"),og(),qx(634,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(635,"li")(636,"code"),qx(637,"medium"),og(),qx(638,": altura de 44px."),og(),Cl(639,"li")(640,"code"),qx(641,"large"),og(),qx(642,": altura de 56px."),og()(),Cl(643,"blockquote")(644,"p"),qx(645,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(646,"code"),qx(647,"medium"),og(),qx(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(649,"a",30),qx(650,"po-theme"),og(),qx(651,"."),og()()()(),Cl(652,"tr",16)(653,"td",17)(654,"div",18)(655,"span",19),qx(656," p-tabindex"),Hl(657,"br"),og()()(),Cl(658,"td",20)(659,"code",31),qx(660,"number "),og(),Cl(661,"code",21),qx(662," string"),og()(),Cl(663,"td",22),qx(664,"-"),og(),Cl(665,"td",23)(666,"em")(667,"strong"),qx(668,"(opcional)"),og()(),Cl(669,"p"),qx(670,"Define o "),Cl(671,"code"),qx(672,"tabindex"),og(),qx(673," do elemento "),Cl(674,"code"),qx(675,"<button>"),og(),qx(676," nativo interno."),og(),Cl(677,"p"),qx(678,"Use "),Cl(679,"code"),qx(680,'[tabindex]="-1"'),og(),qx(681," para remover o bot\xE3o da ordem de foco do teclado."),og()()(),Cl(682,"tr",16)(683,"td",17)(684,"div",18)(685,"span",19),qx(686," p-type"),Hl(687,"br"),og()()(),Cl(688,"td",20)(689,"code",32),qx(690,"PoButtonType"),og()(),Cl(691,"td",22)(692,"p")(693,"code"),qx(694,"PoButtonType.Button"),og()()(),Cl(695,"td",23)(696,"em")(697,"strong"),qx(698,"(opcional)"),og()(),Cl(699,"p"),qx(700,"Define o tipo do bot\xE3o."),og()()()(),Cl(701,"h3",12),qx(702,"M\xE9todos"),og(),Cl(703,"table",33)(704,"tr",16)(705,"th",34)(706,"div",18)(707,"h4")(708,"span",19),qx(709," focus "),og()()()()(),Cl(710,"tr",23)(711,"td",23)(712,"p"),qx(713,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(714,"p"),qx(715,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(716,"pre")(717,"code"),qx(718,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),og()()()()(),Hl(719,"br"),Cl(720,"h3"),qx(721,"Enums"),og(),Cl(722,"h4",4)(723,"code",5),qx(724,"PoButtonKind"),og()(),Cl(725,"div",2)(726,"p"),qx(727,"Estilos dispon\xEDveis do button."),og()(),Cl(728,"h4",12),qx(729,"Propriedades"),og(),Cl(730,"table",13)(731,"tr",14)(732,"th",15),qx(733,"Nome"),og(),Cl(734,"th",15),qx(735,"Descri\xE7\xE3o"),og()(),Cl(736,"tr",16)(737,"td",17)(738,"div",18)(739,"span",19),qx(740," primary"),Hl(741,"br"),og()()(),Cl(742,"td",23)(743,"p"),qx(744,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),og()()(),Cl(745,"tr",16)(746,"td",17)(747,"div",18)(748,"span",19),qx(749," secondary"),Hl(750,"br"),og()()(),Cl(751,"td",23)(752,"p"),qx(753,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),og()()(),Cl(754,"tr",16)(755,"td",17)(756,"div",18)(757,"span",19),qx(758," tertiary"),Hl(759,"br"),og()()(),Cl(760,"td",23)(761,"p"),qx(762,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),og()()()(),Cl(763,"h4",4)(764,"code",5),qx(765,"PoButtonType"),og()(),Cl(766,"div",2)(767,"p"),qx(768,"Enumera\xE7\xE3o que define os tipos poss\xEDveis para o "),Cl(769,"code"),qx(770,"PoButtonComponent"),og(),qx(771,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),og()(),Cl(772,"h4",12),qx(773,"Propriedades"),og(),Cl(774,"table",13)(775,"tr",14)(776,"th",15),qx(777,"Nome"),og(),Cl(778,"th",15),qx(779,"Descri\xE7\xE3o"),og()(),Cl(780,"tr",16)(781,"td",17)(782,"div",18)(783,"span",19),qx(784," Submit"),Hl(785,"br"),og()()(),Cl(786,"td",23)(787,"p"),qx(788,"Define o bot\xE3o como do tipo "),Cl(789,"code"),qx(790,"submit"),og(),qx(791,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Cl(792,"code"),qx(793,"submit"),og(),qx(794,"."),og()()(),Cl(795,"tr",16)(796,"td",17)(797,"div",18)(798,"span",19),qx(799," Button"),Hl(800,"br"),og()()(),Cl(801,"td",23)(802,"p"),qx(803,"Define o bot\xE3o como do tipo "),Cl(804,"code"),qx(805,"button"),og(),qx(806,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),og()()(),Cl(807,"tr",16)(808,"td",17)(809,"div",18)(810,"span",19),qx(811," Reset"),Hl(812,"br"),og()()(),Cl(813,"td",23)(814,"p"),qx(815,"Define o bot\xE3o como do tipo "),Cl(816,"code"),qx(817,"reset"),og(),qx(818,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var Se=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Button",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-button-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-button-basic-view")(6,"sample-po-button-labs-view")(7,"sample-po-button-social-network-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,se,ce,be,Ee],encapsulation:2})}return o})();var Oe=[{path:"",component:Se}],ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[bL.forChild(Oe),bL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ca,ge]})}return o})();export{mt as DocPoButtonModule};