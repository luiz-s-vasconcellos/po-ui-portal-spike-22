import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,bW as Mp,bX as Kc,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bB as ga,ai as ya,bd as na,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,aP as Da,aU as IR,bY as ho,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var me=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic"]],standalone:false,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&Ul(0,"po-button-group",0),a&2&&YE("p-buttons",o.buttons);},dependencies:[Kc],encapsulation:2,changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Button Group Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-button-group-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ce,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,me],encapsulation:2})}return i})();var de=(()=>{class i{poNotification=f(Bp);button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:Mp.None},{label:"single",value:Mp.Single},{label:"multiple",value:Mp.Multiple}];ngOnInit(){this.restore();}action(r){this.poNotification.success(r.action);}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={};}restore(){this.size="medium",this.button={},this.buttons=[];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs"]],standalone:false,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=lx();wl(0,"div",2),Ul(1,"po-button-group",3),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",2)(6,"po-input",4),pw("ngModelChange",function(m){return Qy(u),$x(o.button.label,m)||(o.button.label=m),Jy(m)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(m){return Qy(u),$x(o.button.action,m)||(o.button.action=m),Jy(m)}),ng(),$0(),wl(8,"po-input",6),pw("ngModelChange",function(m){return Qy(u),$x(o.button.tooltip,m)||(o.button.tooltip=m),Jy(m)}),ng(),$0(),wl(9,"po-radio-group",7),pw("ngModelChange",function(m){return Qy(u),$x(o.button.icon,m)||(o.button.icon=m),Jy(m)}),ng(),$0(),wl(10,"po-switch",8),pw("ngModelChange",function(m){return Qy(u),$x(o.button.disabled,m)||(o.button.disabled=m),Jy(m)}),ng(),$0(),ng(),wl(11,"div",2)(12,"po-button",9),ut("p-click",function(){Qy(u);let m=_x(4);return o.addButton(),Jy(m.reset())}),ng()()(),Ul(13,"po-divider"),wl(14,"form",null,1)(16,"div",2)(17,"po-select",10),pw("ngModelChange",function(m){return Qy(u),$x(o.toggle,m)||(o.toggle=m),Jy(m)}),ng(),$0(),wl(18,"po-radio-group",11),pw("ngModelChange",function(m){return Qy(u),$x(o.size,m)||(o.size=m),Jy(m)}),ng(),$0(),ng(),wl(19,"div",2)(20,"po-button",12),ut("p-click",function(){Qy(u);let m=_x(4);return _x(15).reset(),m.reset(),Jy(o.restore())}),ng()()();}if(a&2){let u=_x(4);Pp(),YE("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),Pp(5),hw("ngModel",o.button.label),G0(),Pp(),hw("ngModel",o.button.action),G0(),Pp(),hw("ngModel",o.button.tooltip),G0(),Pp(),hw("ngModel",o.button.icon),YE("p-options",o.iconsOptions),G0(),Pp(),hw("ngModel",o.button.disabled),G0(),Pp(2),YE("p-disabled",u.invalid),Pp(5),hw("ngModel",o.toggle),YE("p-options",o.toggleOptions),G0(),Pp(),hw("ngModel",o.size),YE("p-options",o.sizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,Kc,di,Yo,ga,ya,na],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Button Group Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-button-group-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,de],encapsulation:2})}return i})();var ce=(()=>{class i{poNotification=f(Bp);attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `);}getTypeNotification(r=""){switch(r){case "Emergency":return "error";case "Appointment":return "information";case "Exams":return "success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:false,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"div",1),Ux(2,"Choose the type of attendance"),ng(),wl(3,"div",2),Ux(4,"Get your password"),ng()(),Ul(5,"po-divider"),wl(6,"div",0),Ul(7,"po-button-group",3),ng()),a&2&&(Pp(7),YE("p-buttons",o.attendances));},dependencies:[Kc,di],encapsulation:2,changeDetection:1})}return i})();var Ge=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Button Group - Attendance"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-button-group-attendance"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ce],encapsulation:2})}return i})();var be=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:true,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post"]],standalone:false,decls:11,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(wl(0,"div",0),Ux(1,"Create New Post"),ng(),wl(2,"po-widget")(3,"div",1)(4,"div",2),Ul(5,"po-button-group",3),ng(),wl(6,"div",2),Ul(7,"po-button-group",4),ng(),wl(8,"po-textarea",5),pw("ngModelChange",function(g){return $x(o.textArea,g)||(o.textArea=g),g}),ng(),$0(),wl(9,"div",6),Ux(10),ng()()()),a&2&&(Pp(5),YE("p-buttons",o.fontStyle),Pp(2),YE("p-buttons",o.textAlign),Pp(),hw("ngModel",o.textArea),G0(),Pp(),ho("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),Pp(),cg(" ",o.textArea," "));},dependencies:[iY,ck,Kc,Da,IR],encapsulation:2,changeDetection:1})}return i})();var Ae=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Button Group - Post"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-button-group-post"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ae,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return i})();var Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-doc"]],standalone:false,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-button-group."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoButtonGroupComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-button-group"),ng(),Ux(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),ng(),wl(18,"p"),Ux(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),ng(),wl(20,"p"),Ux(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),ng(),wl(22,"h4"),Ux(23,"Boas pr\xE1ticas"),ng(),wl(24,"ul")(25,"li"),Ux(26,"Evite usar o "),wl(27,"code"),Ux(28,"po-button-group"),ng(),Ux(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),wl(30,"code"),Ux(31,"po-button"),ng(),Ux(32,"."),ng(),wl(33,"li"),Ux(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),wl(35,"code"),Ux(36,"po-button-group"),ng(),Ux(37,"."),ng()(),wl(38,"blockquote")(39,"p"),Ux(40,"As recomenda\xE7\xF5es do "),wl(41,"code"),Ux(42,"po-button"),ng(),Ux(43," tamb\xE9m valem para o "),wl(44,"code"),Ux(45,"po-button-group"),ng(),Ux(46,"."),ng()(),wl(47,"h4"),Ux(48,"Tokens customiz\xE1veis"),ng(),wl(49,"p"),Ux(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(51,"blockquote")(52,"p"),Ux(53,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(54,"a",6),Ux(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(56,"."),ng()(),wl(57,"table")(58,"thead")(59,"tr")(60,"th"),Ux(61,"Propriedade"),ng(),wl(62,"th"),Ux(63,"Descri\xE7\xE3o"),ng(),wl(64,"th"),Ux(65,"Valor Padr\xE3o"),ng()()(),wl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Ux(70,"Default Values"),ng()(),Ul(71,"td")(72,"td"),ng(),wl(73,"tr")(74,"td")(75,"code"),Ux(76,"--font-family"),ng()(),wl(77,"td"),Ux(78,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(79,"td")(80,"code"),Ux(81,"var(--font-family-theme)"),ng()()(),wl(82,"tr")(83,"td")(84,"code"),Ux(85,"--font-size"),ng()(),wl(86,"td"),Ux(87,"Tamanho da fonte"),ng(),wl(88,"td")(89,"code"),Ux(90,"var(--font-size-default)"),ng()()(),wl(91,"tr")(92,"td")(93,"code"),Ux(94,"--font-weight"),ng()(),wl(95,"td"),Ux(96,"Peso da fonte"),ng(),wl(97,"td")(98,"code"),Ux(99,"var(--font-weight-bold)"),ng()()(),wl(100,"tr")(101,"td")(102,"code"),Ux(103,"--line-height"),ng()(),wl(104,"td"),Ux(105,"Tamanho da label"),ng(),wl(106,"td")(107,"code"),Ux(108,"var(--line-height-none)"),ng()()(),wl(109,"tr")(110,"td")(111,"code"),Ux(112,"--border-radius"),ng()(),wl(113,"td"),Ux(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(115,"td")(116,"code"),Ux(117,"var(--border-radius-md)"),ng()()(),wl(118,"tr")(119,"td")(120,"code"),Ux(121,"--border-width"),ng()(),wl(122,"td"),Ux(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),ng(),wl(124,"td")(125,"code"),Ux(126,"var(--border-width-md)"),ng()()(),wl(127,"tr")(128,"td")(129,"code"),Ux(130,"--padding"),ng()(),wl(131,"td"),Ux(132,"Preenchimento"),ng(),wl(133,"td")(134,"code"),Ux(135,"0 1em"),ng()()(),wl(136,"tr")(137,"td")(138,"code"),Ux(139,"--text-color"),ng()(),wl(140,"td"),Ux(141,"Cor do texto"),ng(),wl(142,"td")(143,"code"),Ux(144,"var(--color-neutral-light-00)"),ng()()(),wl(145,"tr")(146,"td")(147,"code"),Ux(148,"--color"),ng()(),wl(149,"td"),Ux(150,"Cor principal do bot\xE3o"),ng(),wl(151,"td")(152,"code"),Ux(153,"var(--color-action-default)"),ng()()(),wl(154,"tr")(155,"td")(156,"code"),Ux(157,"--background-color"),ng()(),wl(158,"td"),Ux(159,"Cor de background"),ng(),wl(160,"td")(161,"code"),Ux(162,"var(--color-transparent)"),ng()()(),wl(163,"tr")(164,"td")(165,"code"),Ux(166,"--shadow"),ng()(),wl(167,"td"),Ux(168,"Cont\xE9m o valor da sombra do elemento"),ng(),wl(169,"td")(170,"code"),Ux(171,"var(--shadow-none)"),ng()()(),wl(172,"tr")(173,"td")(174,"strong"),Ux(175,"Hover"),ng()(),Ul(176,"td")(177,"td"),ng(),wl(178,"tr")(179,"td")(180,"code"),Ux(181,"--color-hover"),ng()(),wl(182,"td"),Ux(183,"Cor principal no estado hover"),ng(),wl(184,"td")(185,"code"),Ux(186,"var(--color-action-hover)"),ng()()(),wl(187,"tr")(188,"td")(189,"code"),Ux(190,"--background-hover"),ng()(),wl(191,"td"),Ux(192,"Cor de background no estado hover"),ng(),wl(193,"td")(194,"code"),Ux(195,"var(--color-brand-01-lighter)"),ng()()(),wl(196,"tr")(197,"td")(198,"code"),Ux(199,"--border-color-hover"),ng()(),wl(200,"td"),Ux(201,"Cor da borda no estado hover"),ng(),wl(202,"td")(203,"code"),Ux(204,"var(--color-brand-01-darkest)"),ng()()(),wl(205,"tr")(206,"td")(207,"strong"),Ux(208,"Focused"),ng()(),Ul(209,"td")(210,"td"),ng(),wl(211,"tr")(212,"td")(213,"code"),Ux(214,"--outline-color-focused"),ng()(),wl(215,"td"),Ux(216,"Cor do outline do estado de focus"),ng(),wl(217,"td")(218,"code"),Ux(219,"var(--color-action-focus)"),ng()()(),wl(220,"tr")(221,"td")(222,"strong"),Ux(223,"Pressed"),ng()(),Ul(224,"td")(225,"td"),ng(),wl(226,"tr")(227,"td")(228,"code"),Ux(229,"--color-pressed"),ng()(),wl(230,"td"),Ux(231,"Cor principal no estado de pressionado"),ng(),wl(232,"td")(233,"code"),Ux(234,"var(--color-action-pressed)"),ng()()(),wl(235,"tr")(236,"td")(237,"code"),Ux(238,"--background-pressed"),ng()(),wl(239,"td"),Ux(240,"Cor de background no estado de pressionado\xA0"),ng(),wl(241,"td")(242,"code"),Ux(243,"var(--color-brand-01-light)"),ng()()(),wl(244,"tr")(245,"td")(246,"strong"),Ux(247,"Disabled"),ng()(),Ul(248,"td")(249,"td"),ng(),wl(250,"tr")(251,"td")(252,"code"),Ux(253,"--color-disabled"),ng()(),wl(254,"td"),Ux(255,"Cor principal no estado disabled"),ng(),wl(256,"td")(257,"code"),Ux(258,"var(--color-action-disabled)"),ng()()(),wl(259,"tr")(260,"td")(261,"code"),Ux(262,"--background-color-disabled"),ng(),Ux(263," \xA0"),ng(),wl(264,"td"),Ux(265,"Cor de background no estado disabled"),ng(),wl(266,"td")(267,"code"),Ux(268,"var(--color-transparent)"),ng()()()()()(),wl(269,"div",7)(270,"h4",8),Ux(271,"Seletor"),ng(),wl(272,"pre",9),Ux(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),ng()(),wl(274,"h4",10),Ux(275,"Propriedades"),ng(),wl(276,"table",11)(277,"tr",12)(278,"th",13),Ux(279,"Nome"),ng(),wl(280,"th",13),Ux(281,"Tipo"),ng(),wl(282,"th",13),Ux(283,"Padr\xE3o"),ng(),wl(284,"th",13),Ux(285,"Descri\xE7\xE3o"),ng()(),wl(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),Ux(290," p-buttons"),Ul(291,"br"),ng()()(),wl(292,"td",18)(293,"code",19),Ux(294,"Array<PoButtonGroupItem>"),ng()(),wl(295,"td",20),Ux(296,"-"),ng(),wl(297,"td",21)(298,"p"),Ux(299,"Lista de bot\xF5es."),ng()()(),wl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),Ux(304," p-size"),Ul(305,"br"),ng()()(),wl(306,"td",18)(307,"code",22),Ux(308,"string"),ng()(),wl(309,"td",20)(310,"p")(311,"code"),Ux(312,"medium"),ng()()(),wl(313,"td",21)(314,"em")(315,"strong"),Ux(316,"(opcional)"),ng()(),wl(317,"p"),Ux(318,"Define o tamanho do componente:"),ng(),wl(319,"ul")(320,"li")(321,"code"),Ux(322,"small"),ng(),Ux(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(324,"li")(325,"code"),Ux(326,"medium"),ng(),Ux(327,": altura de 44px."),ng()(),wl(328,"blockquote")(329,"p"),Ux(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(331,"code"),Ux(332,"medium"),ng(),Ux(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(334,"a",23),Ux(335,"po-theme"),ng(),Ux(336,"."),ng()()()(),wl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),Ux(341," p-toggle"),Ul(342,"br"),ng()()(),wl(343,"td",18)(344,"code",22),Ux(345,"string"),ng()(),wl(346,"td",20)(347,"p")(348,"code"),Ux(349,"none"),ng()()(),wl(350,"td",21)(351,"em")(352,"strong"),Ux(353,"(opcional)"),ng()(),wl(354,"p"),Ux(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),wl(356,"code"),Ux(357,"PoButtonGroupToggle"),ng(),Ux(358,":"),ng(),wl(359,"ul")(360,"li")(361,"code"),Ux(362,"multiple"),ng(),Ux(363,": permite m\xFAltiplas sele\xE7\xF5es."),ng(),wl(364,"li")(365,"code"),Ux(366,"none"),ng(),Ux(367,": desativa a funcionalidade de sele\xE7\xE3o."),ng(),wl(368,"li")(369,"code"),Ux(370,"single"),ng(),Ux(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),ng()()()()(),wl(372,"h3"),Ux(373,"Interfaces"),ng(),wl(374,"h4",24)(375,"code",5),Ux(376,"PoButtonGroupItem"),ng()(),wl(377,"div",2)(378,"p"),Ux(379,"Interface para os itens do "),wl(380,"code"),Ux(381,"po-button-group"),ng(),Ux(382,"."),ng()(),wl(383,"h4",10),Ux(384,"Propriedades"),ng(),wl(385,"table",11)(386,"tr",12)(387,"th",13),Ux(388,"Nome"),ng(),wl(389,"th",13),Ux(390,"Tipo"),ng(),wl(391,"th",13),Ux(392,"Descri\xE7\xE3o"),ng()(),wl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),Ux(397," action"),Ul(398,"br"),ng()()(),wl(399,"td",18)(400,"code",25),Ux(401,"Function"),ng()(),wl(402,"td",21)(403,"p"),Ux(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),ng()()(),wl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),Ux(409," disabled"),Ul(410,"br"),ng()()(),wl(411,"td",18)(412,"code",26),Ux(413,"boolean"),ng()(),wl(414,"td",21)(415,"em")(416,"strong"),Ux(417,"(opcional)"),ng()(),wl(418,"p"),Ux(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),ng(),wl(420,"blockquote")(421,"p"),Ux(422,"Por padr\xE3o esta propriedade \xE9 "),wl(423,"code"),Ux(424,"false"),ng(),Ux(425,"."),ng()()()(),wl(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),Ux(430," icon"),Ul(431,"br"),ng()()(),wl(432,"td",18)(433,"code",22),Ux(434,"string "),ng(),wl(435,"code",27),Ux(436," TemplateRef<void>"),ng()(),wl(437,"td",21)(438,"em")(439,"strong"),Ux(440,"(opcional)"),ng()(),wl(441,"p"),Ux(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),ng(),wl(443,"p"),Ux(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(445,"a",28),Ux(446,"Biblioteca de \xEDcones"),ng(),Ux(447,". conforme exemplo abaixo:"),ng(),wl(448,"pre")(449,"code"),Ux(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),ng()(),wl(451,"p"),Ux(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(453,"em"),Ux(454,"Font Awesome"),ng(),Ux(455,", da seguinte forma:"),ng(),wl(456,"pre")(457,"code"),Ux(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),ng()(),wl(459,"p"),Ux(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(461,"code"),Ux(462,"TemplateRef"),ng(),Ux(463,", conforme exemplo abaixo:"),ng(),wl(464,"p"),Ux(465,"component.html:"),ng(),wl(466,"pre")(467,"code"),Ux(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(469,"p"),Ux(470,"component.ts:"),ng(),wl(471,"pre")(472,"code"),Ux(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),ng()(),wl(474,"blockquote")(475,"p"),Ux(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(477,"code"),Ux(478,"font-size: inherit"),ng(),Ux(479," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),Ux(484," label"),Ul(485,"br"),ng()()(),wl(486,"td",18)(487,"code",22),Ux(488,"string"),ng()(),wl(489,"td",21)(490,"em")(491,"strong"),Ux(492,"(opcional)"),ng()(),wl(493,"p"),Ux(494,"Label do bot\xE3o."),ng()()(),wl(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),Ux(499," selected"),Ul(500,"br"),ng()()(),wl(501,"td",18)(502,"code",26),Ux(503,"boolean"),ng()(),wl(504,"td",21)(505,"em")(506,"strong"),Ux(507,"(opcional)"),ng()(),wl(508,"p"),Ux(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),wl(510,"code"),Ux(511,"p-toggle"),ng(),Ux(512,"."),ng()()(),wl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),Ux(517," tooltip"),Ul(518,"br"),ng()()(),wl(519,"td",18)(520,"code",22),Ux(521,"string"),ng()(),wl(522,"td",21)(523,"em")(524,"strong"),Ux(525,"(opcional)"),ng()(),wl(526,"p"),Ux(527,"Define a mensagem a ser exibida ao posicionar o "),wl(528,"em"),Ux(529,"mouse"),ng(),Ux(530," sobre o bot\xE3o."),ng()()()(),wl(531,"h3"),Ux(532,"Enums"),ng(),wl(533,"h4",4)(534,"code",5),Ux(535,"PoButtonGroupToggle"),ng()(),wl(536,"div",2)(537,"p"),Ux(538,"Tipos de sele\xE7\xE3o ("),wl(539,"code"),Ux(540,"p-toggle"),ng(),Ux(541,") dispon\xEDveis para o componente."),ng()(),wl(542,"h4",10),Ux(543,"Propriedades"),ng(),wl(544,"table",11)(545,"tr",12)(546,"th",13),Ux(547,"Nome"),ng(),wl(548,"th",13),Ux(549,"Descri\xE7\xE3o"),ng()(),wl(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),Ux(554," Multiple"),Ul(555,"br"),ng()()(),wl(556,"td",21)(557,"p"),Ux(558,"Sele\xE7\xE3o m\xFAltipla."),ng()()(),wl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),Ux(563," None"),Ul(564,"br"),ng()()(),wl(565,"td",21)(566,"p"),Ux(567,"Sele\xE7\xE3o desabilitada."),ng()()(),wl(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),Ux(572," Single"),Ul(573,"br"),ng()()(),wl(574,"td",21)(575,"p"),Ux(576,"Sele\xE7\xE3o \xFAnica."),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-button-group-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,se,ue,ge,he,Se],encapsulation:2})}return i})();var Le=[{path:"",component:fe}],Ee=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(Le),vL]})}return i})();var wt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[u5,Ee]})}return i})();export{wt as DocPoButtonGroupModule};