import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,cr as Vp,cs as Gpe,M as Wl,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp$1,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,aJ as Ghe,bH as E3,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,b5 as jhe,ba as bNe,ct as fo,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var re=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic"]],standalone:false,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&Wl(0,"po-button-group",0),a&2&&tw("p-buttons",o.buttons);},dependencies:[Gpe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Button Group Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-basic',
  templateUrl: './sample-po-button-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupBasicComponent {
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) }
  ];

  action(button) {
    alert(\`\${button.label}\`);
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-basic"),sg(),Wl(23,"hr")),a&2&&(Vp$1(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),tw("ngClass",dN(4,fe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return i})();var me=(()=>{class i{poNotification=f(Yp);button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:Vp.None},{label:"single",value:Vp.Single},{label:"multiple",value:Vp.Multiple}];ngOnInit(){this.restore();}action(r){this.poNotification.success(r.action);}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={};}restore(){this.size="medium",this.button={},this.buttons=[];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs"]],standalone:false,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=Ex();Sl(0,"div",2),Wl(1,"po-button-group",3),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",2)(6,"po-input",4),Ew("ngModelChange",function(m){return Xy(u),tN(o.button.label,m)||(o.button.label=m),Qy(m)}),sg(),JA(),Sl(7,"po-input",5),Ew("ngModelChange",function(m){return Xy(u),tN(o.button.action,m)||(o.button.action=m),Qy(m)}),sg(),JA(),Sl(8,"po-input",6),Ew("ngModelChange",function(m){return Xy(u),tN(o.button.tooltip,m)||(o.button.tooltip=m),Qy(m)}),sg(),JA(),Sl(9,"po-radio-group",7),Ew("ngModelChange",function(m){return Xy(u),tN(o.button.icon,m)||(o.button.icon=m),Qy(m)}),sg(),JA(),Sl(10,"po-switch",8),Ew("ngModelChange",function(m){return Xy(u),tN(o.button.disabled,m)||(o.button.disabled=m),Qy(m)}),sg(),JA(),sg(),Sl(11,"div",2)(12,"po-button",9),ht("p-click",function(){Xy(u);let m=xx(4);return o.addButton(),Qy(m.reset())}),sg()()(),Wl(13,"po-divider"),Sl(14,"form",null,1)(16,"div",2)(17,"po-select",10),Ew("ngModelChange",function(m){return Xy(u),tN(o.toggle,m)||(o.toggle=m),Qy(m)}),sg(),JA(),Sl(18,"po-radio-group",11),Ew("ngModelChange",function(m){return Xy(u),tN(o.size,m)||(o.size=m),Qy(m)}),sg(),JA(),sg(),Sl(19,"div",2)(20,"po-button",12),ht("p-click",function(){Xy(u);let m=xx(4);return xx(15).reset(),m.reset(),Qy(o.restore())}),sg()()();}if(a&2){let u=xx(4);Vp$1(),tw("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),Vp$1(5),Dw("ngModel",o.button.label),t0(),Vp$1(),Dw("ngModel",o.button.action),t0(),Vp$1(),Dw("ngModel",o.button.tooltip),t0(),Vp$1(),Dw("ngModel",o.button.icon),tw("p-options",o.iconsOptions),t0(),Vp$1(),Dw("ngModel",o.button.disabled),t0(),Vp$1(2),tw("p-disabled",u.invalid),Vp$1(5),Dw("ngModel",o.toggle),tw("p-options",o.toggleOptions),t0(),Vp$1(),Dw("ngModel",o.size),tw("p-options",o.sizeOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,Gpe,mv,F3,Pde,Ghe,E3],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Button Group Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="buttons" [p-toggle]="toggle" [p-size]="size"> </po-button-group>
</div>

<po-divider />

<form #fButtons="ngForm">
  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="buttonLabel" [(ngModel)]="button.label" p-label="Button label"> </po-input>

    <po-input
      class="po-lg-4 po-md-6"
      name="buttonAction"
      [(ngModel)]="button.action"
      p-label="Button action"
      p-required
    >
    </po-input>

    <po-input class="po-lg-4 po-md-6" name="buttonTooltip" [(ngModel)]="button.tooltip" p-label="Button tooltip">
    </po-input>

    <po-radio-group
      class="po-lg-12"
      name="buttonIcon"
      [(ngModel)]="button.icon"
      p-columns="4"
      p-label="Button Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-switch class="po-lg-4 po-md-6" name="buttonDisabled" [(ngModel)]="button.disabled" p-label="Button disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add button"
      [p-disabled]="fButtons.invalid"
      (p-click)="addButton(); fButtons.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select
      class="po-lg-4 po-md-6"
      name="toggle"
      [(ngModel)]="toggle"
      p-label="Toggle"
      [p-options]="toggleOptions"
    ></po-select>

    <po-radio-group
      class="po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); fButtons.reset(); restore()">
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoButtonGroupItem,
  PoButtonGroupToggle,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-labs',
  templateUrl: './sample-po-button-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  button: any;
  buttons: Array<PoButtonGroupItem>;
  size: string;
  toggle: PoButtonGroupToggle;

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
  ];

  ngOnInit() {
    this.restore();
  }

  action(button) {
    this.poNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled,
      tooltip: this.button.tooltip
    });

    this.button = {};
  }

  restore() {
    this.size = 'medium';
    this.button = {};
    this.buttons = [];
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-labs"),sg(),Wl(23,"hr")),a&2&&(Vp$1(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),tw("ngClass",dN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return i})();var de=(()=>{class i{poNotification=f(Yp);attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `);}getTypeNotification(r=""){switch(r){case "Emergency":return "error";case "Appointment":return "information";case "Exams":return "success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:false,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"div",1),Jx(2,"Choose the type of attendance"),sg(),Sl(3,"div",2),Jx(4,"Get your password"),sg()(),Wl(5,"po-divider"),Sl(6,"div",0),Wl(7,"po-button-group",3),sg()),a&2&&(Vp$1(7),tw("p-buttons",o.attendances));},dependencies:[Gpe,mv],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Button Group - Attendance"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-attendance',
  templateUrl: './sample-po-button-group-attendance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupAttendanceComponent {
  private poNotification = inject(PoNotificationService);

  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'an an-calendar-dots', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'an an-syringe', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'an an-flask', action: this.getPassword.bind(this) }
  ];

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.poNotification[typeNotification](\`
      Type of attendance: \${attendance.label} -
      Your password: \${password}
    \`);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-attendance"),sg(),Wl(23,"hr")),a&2&&(Vp$1(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),tw("ngClass",dN(4,we,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return i})();var ce=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:true,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post"]],standalone:false,decls:11,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(Sl(0,"div",0),Jx(1,"Create New Post"),sg(),Sl(2,"po-widget")(3,"div",1)(4,"div",2),Wl(5,"po-button-group",3),sg(),Sl(6,"div",2),Wl(7,"po-button-group",4),sg(),Sl(8,"po-textarea",5),Ew("ngModelChange",function(g){return tN(o.textArea,g)||(o.textArea=g),g}),sg(),JA(),Sl(9,"div",6),Jx(10),sg()()()),a&2&&(Vp$1(5),tw("p-buttons",o.fontStyle),Vp$1(2),tw("p-buttons",o.textAlign),Vp$1(),Dw("ngModel",o.textArea),t0(),Vp$1(),fo("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),Vp$1(),fg(" ",o.textArea," "));},dependencies:[K9,Dk,Gpe,jhe,bNe],encapsulation:2,changeDetection:1})}return i})();var Ge=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Button Group - Post"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-font-title po-mb-2">Create New Post</div>
<po-widget>
  <div class="po-row">
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="multiple" [p-buttons]="fontStyle"> </po-button-group>
    </div>
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="single" [p-buttons]="textAlign"> </po-button-group>
    </div>
    <po-textarea class="po-md-12" name="textArea" [(ngModel)]="textArea" p-maxlength="400"> </po-textarea>

    <div
      class="po-md-12 po-mt-3 po-font-text-large"
      [style.font-weight]="setBold ? 'bold' : 'normal'"
      [style.font-style]="setItalic ? 'italic' : 'normal'"
      [style.text-decoration]="setUnderline ? 'underline' : 'none'"
      [style.text-align]="setTextAlignment"
    >
      { { textArea }}
    </div>
  </div>
</po-widget>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-post',
  templateUrl: './sample-po-button-group-post.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupPostComponent {
  setBold: boolean;
  setItalic: boolean;
  setTextAlignment: string;
  setUnderline: boolean;
  textArea: string = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';

  fontStyle: Array<PoButtonGroupItem> = [
    { icon: 'an an-text-b', action: () => (this.setBold = !this.setBold), tooltip: 'Bold' },
    { icon: 'an an-text-italic', action: () => (this.setItalic = !this.setItalic), tooltip: 'Italic' },
    { icon: 'an an-text-underline', action: () => (this.setUnderline = !this.setUnderline), tooltip: 'Underline' }
  ];

  textAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'an an-text-align-left',
      selected: true,
      action: () => (this.setTextAlignment = 'left'),
      tooltip: 'Left align'
    },
    { icon: 'an an-text-align-center', action: () => (this.setTextAlignment = 'center'), tooltip: 'Center align' },
    { icon: 'an an-text-align-right', action: () => (this.setTextAlignment = 'right'), tooltip: 'Right align' },
    { icon: 'an an-text-align-justify', action: () => (this.setTextAlignment = 'justify'), tooltip: 'Justify' }
  ];
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-post"),sg(),Wl(23,"hr")),a&2&&(Vp$1(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),tw("ngClass",dN(4,Ge,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-doc"]],standalone:false,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-button-group."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoButtonGroupComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-button-group"),sg(),Jx(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),sg(),Sl(18,"p"),Jx(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),sg(),Sl(20,"p"),Jx(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),sg(),Sl(22,"h4"),Jx(23,"Boas pr\xE1ticas"),sg(),Sl(24,"ul")(25,"li"),Jx(26,"Evite usar o "),Sl(27,"code"),Jx(28,"po-button-group"),sg(),Jx(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),Sl(30,"code"),Jx(31,"po-button"),sg(),Jx(32,"."),sg(),Sl(33,"li"),Jx(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),Sl(35,"code"),Jx(36,"po-button-group"),sg(),Jx(37,"."),sg()(),Sl(38,"blockquote")(39,"p"),Jx(40,"As recomenda\xE7\xF5es do "),Sl(41,"code"),Jx(42,"po-button"),sg(),Jx(43," tamb\xE9m valem para o "),Sl(44,"code"),Jx(45,"po-button-group"),sg(),Jx(46,"."),sg()(),Sl(47,"h4"),Jx(48,"Tokens customiz\xE1veis"),sg(),Sl(49,"p"),Jx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(51,"blockquote")(52,"p"),Jx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(54,"a",6),Jx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(56,"."),sg()(),Sl(57,"table")(58,"thead")(59,"tr")(60,"th"),Jx(61,"Propriedade"),sg(),Sl(62,"th"),Jx(63,"Descri\xE7\xE3o"),sg(),Sl(64,"th"),Jx(65,"Valor Padr\xE3o"),sg()()(),Sl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Jx(70,"Default Values"),sg()(),Wl(71,"td")(72,"td"),sg(),Sl(73,"tr")(74,"td")(75,"code"),Jx(76,"--font-family"),sg()(),Sl(77,"td"),Jx(78,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(79,"td")(80,"code"),Jx(81,"var(--font-family-theme)"),sg()()(),Sl(82,"tr")(83,"td")(84,"code"),Jx(85,"--font-size"),sg()(),Sl(86,"td"),Jx(87,"Tamanho da fonte"),sg(),Sl(88,"td")(89,"code"),Jx(90,"var(--font-size-default)"),sg()()(),Sl(91,"tr")(92,"td")(93,"code"),Jx(94,"--font-weight"),sg()(),Sl(95,"td"),Jx(96,"Peso da fonte"),sg(),Sl(97,"td")(98,"code"),Jx(99,"var(--font-weight-bold)"),sg()()(),Sl(100,"tr")(101,"td")(102,"code"),Jx(103,"--line-height"),sg()(),Sl(104,"td"),Jx(105,"Tamanho da label"),sg(),Sl(106,"td")(107,"code"),Jx(108,"var(--line-height-none)"),sg()()(),Sl(109,"tr")(110,"td")(111,"code"),Jx(112,"--border-radius"),sg()(),Sl(113,"td"),Jx(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(115,"td")(116,"code"),Jx(117,"var(--border-radius-md)"),sg()()(),Sl(118,"tr")(119,"td")(120,"code"),Jx(121,"--border-width"),sg()(),Sl(122,"td"),Jx(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(124,"td")(125,"code"),Jx(126,"var(--border-width-md)"),sg()()(),Sl(127,"tr")(128,"td")(129,"code"),Jx(130,"--padding"),sg()(),Sl(131,"td"),Jx(132,"Preenchimento"),sg(),Sl(133,"td")(134,"code"),Jx(135,"0 1em"),sg()()(),Sl(136,"tr")(137,"td")(138,"code"),Jx(139,"--text-color"),sg()(),Sl(140,"td"),Jx(141,"Cor do texto"),sg(),Sl(142,"td")(143,"code"),Jx(144,"var(--color-neutral-light-00)"),sg()()(),Sl(145,"tr")(146,"td")(147,"code"),Jx(148,"--color"),sg()(),Sl(149,"td"),Jx(150,"Cor principal do bot\xE3o"),sg(),Sl(151,"td")(152,"code"),Jx(153,"var(--color-action-default)"),sg()()(),Sl(154,"tr")(155,"td")(156,"code"),Jx(157,"--background-color"),sg()(),Sl(158,"td"),Jx(159,"Cor de background"),sg(),Sl(160,"td")(161,"code"),Jx(162,"var(--color-transparent)"),sg()()(),Sl(163,"tr")(164,"td")(165,"code"),Jx(166,"--shadow"),sg()(),Sl(167,"td"),Jx(168,"Cont\xE9m o valor da sombra do elemento"),sg(),Sl(169,"td")(170,"code"),Jx(171,"var(--shadow-none)"),sg()()(),Sl(172,"tr")(173,"td")(174,"strong"),Jx(175,"Hover"),sg()(),Wl(176,"td")(177,"td"),sg(),Sl(178,"tr")(179,"td")(180,"code"),Jx(181,"--color-hover"),sg()(),Sl(182,"td"),Jx(183,"Cor principal no estado hover"),sg(),Sl(184,"td")(185,"code"),Jx(186,"var(--color-action-hover)"),sg()()(),Sl(187,"tr")(188,"td")(189,"code"),Jx(190,"--background-hover"),sg()(),Sl(191,"td"),Jx(192,"Cor de background no estado hover"),sg(),Sl(193,"td")(194,"code"),Jx(195,"var(--color-brand-01-lighter)"),sg()()(),Sl(196,"tr")(197,"td")(198,"code"),Jx(199,"--border-color-hover"),sg()(),Sl(200,"td"),Jx(201,"Cor da borda no estado hover"),sg(),Sl(202,"td")(203,"code"),Jx(204,"var(--color-brand-01-darkest)"),sg()()(),Sl(205,"tr")(206,"td")(207,"strong"),Jx(208,"Focused"),sg()(),Wl(209,"td")(210,"td"),sg(),Sl(211,"tr")(212,"td")(213,"code"),Jx(214,"--outline-color-focused"),sg()(),Sl(215,"td"),Jx(216,"Cor do outline do estado de focus"),sg(),Sl(217,"td")(218,"code"),Jx(219,"var(--color-action-focus)"),sg()()(),Sl(220,"tr")(221,"td")(222,"strong"),Jx(223,"Pressed"),sg()(),Wl(224,"td")(225,"td"),sg(),Sl(226,"tr")(227,"td")(228,"code"),Jx(229,"--color-pressed"),sg()(),Sl(230,"td"),Jx(231,"Cor principal no estado de pressionado"),sg(),Sl(232,"td")(233,"code"),Jx(234,"var(--color-action-pressed)"),sg()()(),Sl(235,"tr")(236,"td")(237,"code"),Jx(238,"--background-pressed"),sg()(),Sl(239,"td"),Jx(240,"Cor de background no estado de pressionado\xA0"),sg(),Sl(241,"td")(242,"code"),Jx(243,"var(--color-brand-01-light)"),sg()()(),Sl(244,"tr")(245,"td")(246,"strong"),Jx(247,"Disabled"),sg()(),Wl(248,"td")(249,"td"),sg(),Sl(250,"tr")(251,"td")(252,"code"),Jx(253,"--color-disabled"),sg()(),Sl(254,"td"),Jx(255,"Cor principal no estado disabled"),sg(),Sl(256,"td")(257,"code"),Jx(258,"var(--color-action-disabled)"),sg()()(),Sl(259,"tr")(260,"td")(261,"code"),Jx(262,"--background-color-disabled"),sg(),Jx(263," \xA0"),sg(),Sl(264,"td"),Jx(265,"Cor de background no estado disabled"),sg(),Sl(266,"td")(267,"code"),Jx(268,"var(--color-transparent)"),sg()()()()()(),Sl(269,"div",7)(270,"h4",8),Jx(271,"Seletor"),sg(),Sl(272,"pre",9),Jx(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),sg()(),Sl(274,"h4",10),Jx(275,"Propriedades"),sg(),Sl(276,"table",11)(277,"tr",12)(278,"th",13),Jx(279,"Nome"),sg(),Sl(280,"th",13),Jx(281,"Tipo"),sg(),Sl(282,"th",13),Jx(283,"Padr\xE3o"),sg(),Sl(284,"th",13),Jx(285,"Descri\xE7\xE3o"),sg()(),Sl(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),Jx(290," p-buttons"),Wl(291,"br"),sg()()(),Sl(292,"td",18)(293,"code",19),Jx(294,"Array<PoButtonGroupItem>"),sg()(),Sl(295,"td",20),Jx(296,"-"),sg(),Sl(297,"td",21)(298,"p"),Jx(299,"Lista de bot\xF5es."),sg()()(),Sl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),Jx(304," p-size"),Wl(305,"br"),sg()()(),Sl(306,"td",18)(307,"code",22),Jx(308,"string"),sg()(),Sl(309,"td",20)(310,"p")(311,"code"),Jx(312,"medium"),sg()()(),Sl(313,"td",21)(314,"em")(315,"strong"),Jx(316,"(opcional)"),sg()(),Sl(317,"p"),Jx(318,"Define o tamanho do componente:"),sg(),Sl(319,"ul")(320,"li")(321,"code"),Jx(322,"small"),sg(),Jx(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(324,"li")(325,"code"),Jx(326,"medium"),sg(),Jx(327,": altura de 44px."),sg()(),Sl(328,"blockquote")(329,"p"),Jx(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(331,"code"),Jx(332,"medium"),sg(),Jx(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(334,"a",23),Jx(335,"po-theme"),sg(),Jx(336,"."),sg()()()(),Sl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),Jx(341," p-toggle"),Wl(342,"br"),sg()()(),Sl(343,"td",18)(344,"code",22),Jx(345,"string"),sg()(),Sl(346,"td",20)(347,"p")(348,"code"),Jx(349,"none"),sg()()(),Sl(350,"td",21)(351,"em")(352,"strong"),Jx(353,"(opcional)"),sg()(),Sl(354,"p"),Jx(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),Sl(356,"code"),Jx(357,"PoButtonGroupToggle"),sg(),Jx(358,":"),sg(),Sl(359,"ul")(360,"li")(361,"code"),Jx(362,"multiple"),sg(),Jx(363,": permite m\xFAltiplas sele\xE7\xF5es."),sg(),Sl(364,"li")(365,"code"),Jx(366,"none"),sg(),Jx(367,": desativa a funcionalidade de sele\xE7\xE3o."),sg(),Sl(368,"li")(369,"code"),Jx(370,"single"),sg(),Jx(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),sg()()()()(),Sl(372,"h3"),Jx(373,"Interfaces"),sg(),Sl(374,"h4",24)(375,"code",5),Jx(376,"PoButtonGroupItem"),sg()(),Sl(377,"div",2)(378,"p"),Jx(379,"Interface para os itens do "),Sl(380,"code"),Jx(381,"po-button-group"),sg(),Jx(382,"."),sg()(),Sl(383,"h4",10),Jx(384,"Propriedades"),sg(),Sl(385,"table",11)(386,"tr",12)(387,"th",13),Jx(388,"Nome"),sg(),Sl(389,"th",13),Jx(390,"Tipo"),sg(),Sl(391,"th",13),Jx(392,"Descri\xE7\xE3o"),sg()(),Sl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),Jx(397," action"),Wl(398,"br"),sg()()(),Sl(399,"td",18)(400,"code",25),Jx(401,"Function"),sg()(),Sl(402,"td",21)(403,"p"),Jx(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),sg()()(),Sl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),Jx(409," disabled"),Wl(410,"br"),sg()()(),Sl(411,"td",18)(412,"code",26),Jx(413,"boolean"),sg()(),Sl(414,"td",21)(415,"em")(416,"strong"),Jx(417,"(opcional)"),sg()(),Sl(418,"p"),Jx(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),sg(),Sl(420,"blockquote")(421,"p"),Jx(422,"Por padr\xE3o esta propriedade \xE9 "),Sl(423,"code"),Jx(424,"false"),sg(),Jx(425,"."),sg()()()(),Sl(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),Jx(430," icon"),Wl(431,"br"),sg()()(),Sl(432,"td",18)(433,"code",22),Jx(434,"string "),sg(),Sl(435,"code",27),Jx(436," TemplateRef<void>"),sg()(),Sl(437,"td",21)(438,"em")(439,"strong"),Jx(440,"(opcional)"),sg()(),Sl(441,"p"),Jx(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),sg(),Sl(443,"p"),Jx(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(445,"a",28),Jx(446,"Biblioteca de \xEDcones"),sg(),Jx(447,". conforme exemplo abaixo:"),sg(),Sl(448,"pre")(449,"code"),Jx(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),sg()(),Sl(451,"p"),Jx(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(453,"em"),Jx(454,"Font Awesome"),sg(),Jx(455,", da seguinte forma:"),sg(),Sl(456,"pre")(457,"code"),Jx(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),sg()(),Sl(459,"p"),Jx(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(461,"code"),Jx(462,"TemplateRef"),sg(),Jx(463,", conforme exemplo abaixo:"),sg(),Sl(464,"p"),Jx(465,"component.html:"),sg(),Sl(466,"pre")(467,"code"),Jx(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(469,"p"),Jx(470,"component.ts:"),sg(),Sl(471,"pre")(472,"code"),Jx(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),sg()(),Sl(474,"blockquote")(475,"p"),Jx(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(477,"code"),Jx(478,"font-size: inherit"),sg(),Jx(479," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),Jx(484," label"),Wl(485,"br"),sg()()(),Sl(486,"td",18)(487,"code",22),Jx(488,"string"),sg()(),Sl(489,"td",21)(490,"em")(491,"strong"),Jx(492,"(opcional)"),sg()(),Sl(493,"p"),Jx(494,"Label do bot\xE3o."),sg()()(),Sl(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),Jx(499," selected"),Wl(500,"br"),sg()()(),Sl(501,"td",18)(502,"code",26),Jx(503,"boolean"),sg()(),Sl(504,"td",21)(505,"em")(506,"strong"),Jx(507,"(opcional)"),sg()(),Sl(508,"p"),Jx(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),Sl(510,"code"),Jx(511,"p-toggle"),sg(),Jx(512,"."),sg()()(),Sl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),Jx(517," tooltip"),Wl(518,"br"),sg()()(),Sl(519,"td",18)(520,"code",22),Jx(521,"string"),sg()(),Sl(522,"td",21)(523,"em")(524,"strong"),Jx(525,"(opcional)"),sg()(),Sl(526,"p"),Jx(527,"Define a mensagem a ser exibida ao posicionar o "),Sl(528,"em"),Jx(529,"mouse"),sg(),Jx(530," sobre o bot\xE3o."),sg()()()(),Sl(531,"h3"),Jx(532,"Enums"),sg(),Sl(533,"h4",4)(534,"code",5),Jx(535,"PoButtonGroupToggle"),sg()(),Sl(536,"div",2)(537,"p"),Jx(538,"Tipos de sele\xE7\xE3o ("),Sl(539,"code"),Jx(540,"p-toggle"),sg(),Jx(541,") dispon\xEDveis para o componente."),sg()(),Sl(542,"h4",10),Jx(543,"Propriedades"),sg(),Sl(544,"table",11)(545,"tr",12)(546,"th",13),Jx(547,"Nome"),sg(),Sl(548,"th",13),Jx(549,"Descri\xE7\xE3o"),sg()(),Sl(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),Jx(554," Multiple"),Wl(555,"br"),sg()()(),Sl(556,"td",21)(557,"p"),Jx(558,"Sele\xE7\xE3o m\xFAltipla."),sg()()(),Sl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),Jx(563," None"),Wl(564,"br"),sg()()(),Sl(565,"td",21)(566,"p"),Jx(567,"Sele\xE7\xE3o desabilitada."),sg()()(),Sl(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),Jx(572," Single"),Wl(573,"br"),sg()()(),Sl(574,"td",21)(575,"p"),Jx(576,"Sele\xE7\xE3o \xFAnica."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-button-group-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp$1(2),tw("p-active",o.activeTab==="doc"),Vp$1(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,pe,se,ue,ge,be],encapsulation:2})}return i})();var Ae=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[pL.forChild(Ae),pL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,Se]})}return i})();export{bt as DocPoButtonGroupModule};