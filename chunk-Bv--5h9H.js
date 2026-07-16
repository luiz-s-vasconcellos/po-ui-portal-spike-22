import {f as fe$1,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,aW as Yp,cr as Vp,cs as Gpe,L as Gl,O as nw,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp$1,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,aJ as qhe,bH as M3,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,b5 as $he,ba as _Ne,ct as ho,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var re=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic"]],standalone:false,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&Gl(0,"po-button-group",0),a&2&&nw("p-buttons",o.buttons);},dependencies:[Gpe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Button Group Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-button-group-basic"),sg(),Gl(23,"hr")),a&2&&(Vp$1(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),nw("ngClass",mN(4,fe,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,re],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poNotification=f(Yp);button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:Vp.None},{label:"single",value:Vp.Single},{label:"multiple",value:Vp.Multiple}];ngOnInit(){this.restore();}action(r){this.poNotification.success(r.action);}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={};}restore(){this.size="medium",this.button={},this.buttons=[];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs"]],standalone:false,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=Sx();Tl(0,"div",2),Gl(1,"po-button-group",3),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",2)(6,"po-input",4),ww("ngModelChange",function(m){return Ky(u),sN(o.button.label,m)||(o.button.label=m),Xy(m)}),sg(),r0(),Tl(7,"po-input",5),ww("ngModelChange",function(m){return Ky(u),sN(o.button.action,m)||(o.button.action=m),Xy(m)}),sg(),r0(),Tl(8,"po-input",6),ww("ngModelChange",function(m){return Ky(u),sN(o.button.tooltip,m)||(o.button.tooltip=m),Xy(m)}),sg(),r0(),Tl(9,"po-radio-group",7),ww("ngModelChange",function(m){return Ky(u),sN(o.button.icon,m)||(o.button.icon=m),Xy(m)}),sg(),r0(),Tl(10,"po-switch",8),ww("ngModelChange",function(m){return Ky(u),sN(o.button.disabled,m)||(o.button.disabled=m),Xy(m)}),sg(),r0(),sg(),Tl(11,"div",2)(12,"po-button",9),ht("p-click",function(){Ky(u);let m=Fx(4);return o.addButton(),Xy(m.reset())}),sg()()(),Gl(13,"po-divider"),Tl(14,"form",null,1)(16,"div",2)(17,"po-select",10),ww("ngModelChange",function(m){return Ky(u),sN(o.toggle,m)||(o.toggle=m),Xy(m)}),sg(),r0(),Tl(18,"po-radio-group",11),ww("ngModelChange",function(m){return Ky(u),sN(o.size,m)||(o.size=m),Xy(m)}),sg(),r0(),sg(),Tl(19,"div",2)(20,"po-button",12),ht("p-click",function(){Ky(u);let m=Fx(4);return Fx(15).reset(),m.reset(),Xy(o.restore())}),sg()()();}if(a&2){let u=Fx(4);Vp$1(),nw("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),Vp$1(5),Ew("ngModel",o.button.label),o0(),Vp$1(),Ew("ngModel",o.button.action),o0(),Vp$1(),Ew("ngModel",o.button.tooltip),o0(),Vp$1(),Ew("ngModel",o.button.icon),nw("p-options",o.iconsOptions),o0(),Vp$1(),Ew("ngModel",o.button.disabled),o0(),Vp$1(2),nw("p-disabled",u.invalid),Vp$1(5),Ew("ngModel",o.toggle),nw("p-options",o.toggleOptions),o0(),Vp$1(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,Gpe,mv,O3,Dde,qhe,M3],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Button Group Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-button-group-labs"),sg(),Gl(23,"hr")),a&2&&(Vp$1(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),nw("ngClass",mN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,me],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{poNotification=f(Yp);attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `);}getTypeNotification(r=""){switch(r){case "Emergency":return "error";case "Appointment":return "information";case "Exams":return "success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:false,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"div",1),iN(2,"Choose the type of attendance"),sg(),Tl(3,"div",2),iN(4,"Get your password"),sg()(),Gl(5,"po-divider"),Tl(6,"div",0),Gl(7,"po-button-group",3),sg()),a&2&&(Vp$1(7),nw("p-buttons",o.attendances));},dependencies:[Gpe,mv],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Button Group - Attendance"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-button-group-attendance"),sg(),Gl(23,"hr")),a&2&&(Vp$1(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),nw("ngClass",mN(4,we,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,de],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:true,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post"]],standalone:false,decls:11,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(Tl(0,"div",0),iN(1,"Create New Post"),sg(),Tl(2,"po-widget")(3,"div",1)(4,"div",2),Gl(5,"po-button-group",3),sg(),Tl(6,"div",2),Gl(7,"po-button-group",4),sg(),Tl(8,"po-textarea",5),ww("ngModelChange",function(g){return sN(o.textArea,g)||(o.textArea=g),g}),sg(),r0(),Tl(9,"div",6),iN(10),sg()()()),a&2&&(Vp$1(5),nw("p-buttons",o.fontStyle),Vp$1(2),nw("p-buttons",o.textAlign),Vp$1(),Ew("ngModel",o.textArea),o0(),Vp$1(),ho("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),Vp$1(),fg(" ",o.textArea," "));},dependencies:[nY,Sk,Gpe,$he,_Ne],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Button Group - Post"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-button-group-post"),sg(),Gl(23,"hr")),a&2&&(Vp$1(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp$1(),fg(" ",o.sampleCodeButtonLabel),Vp$1(),nw("ngClass",mN(4,_e,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ce],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-doc"]],standalone:false,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-button-group."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoButtonGroupComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-button-group"),sg(),iN(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),sg(),Tl(18,"p"),iN(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),sg(),Tl(20,"p"),iN(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),sg(),Tl(22,"h4"),iN(23,"Boas pr\xE1ticas"),sg(),Tl(24,"ul")(25,"li"),iN(26,"Evite usar o "),Tl(27,"code"),iN(28,"po-button-group"),sg(),iN(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),Tl(30,"code"),iN(31,"po-button"),sg(),iN(32,"."),sg(),Tl(33,"li"),iN(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),Tl(35,"code"),iN(36,"po-button-group"),sg(),iN(37,"."),sg()(),Tl(38,"blockquote")(39,"p"),iN(40,"As recomenda\xE7\xF5es do "),Tl(41,"code"),iN(42,"po-button"),sg(),iN(43," tamb\xE9m valem para o "),Tl(44,"code"),iN(45,"po-button-group"),sg(),iN(46,"."),sg()(),Tl(47,"h4"),iN(48,"Tokens customiz\xE1veis"),sg(),Tl(49,"p"),iN(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(51,"blockquote")(52,"p"),iN(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(54,"a",6),iN(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(56,"."),sg()(),Tl(57,"table")(58,"thead")(59,"tr")(60,"th"),iN(61,"Propriedade"),sg(),Tl(62,"th"),iN(63,"Descri\xE7\xE3o"),sg(),Tl(64,"th"),iN(65,"Valor Padr\xE3o"),sg()()(),Tl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),iN(70,"Default Values"),sg()(),Gl(71,"td")(72,"td"),sg(),Tl(73,"tr")(74,"td")(75,"code"),iN(76,"--font-family"),sg()(),Tl(77,"td"),iN(78,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(79,"td")(80,"code"),iN(81,"var(--font-family-theme)"),sg()()(),Tl(82,"tr")(83,"td")(84,"code"),iN(85,"--font-size"),sg()(),Tl(86,"td"),iN(87,"Tamanho da fonte"),sg(),Tl(88,"td")(89,"code"),iN(90,"var(--font-size-default)"),sg()()(),Tl(91,"tr")(92,"td")(93,"code"),iN(94,"--font-weight"),sg()(),Tl(95,"td"),iN(96,"Peso da fonte"),sg(),Tl(97,"td")(98,"code"),iN(99,"var(--font-weight-bold)"),sg()()(),Tl(100,"tr")(101,"td")(102,"code"),iN(103,"--line-height"),sg()(),Tl(104,"td"),iN(105,"Tamanho da label"),sg(),Tl(106,"td")(107,"code"),iN(108,"var(--line-height-none)"),sg()()(),Tl(109,"tr")(110,"td")(111,"code"),iN(112,"--border-radius"),sg()(),Tl(113,"td"),iN(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(115,"td")(116,"code"),iN(117,"var(--border-radius-md)"),sg()()(),Tl(118,"tr")(119,"td")(120,"code"),iN(121,"--border-width"),sg()(),Tl(122,"td"),iN(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Tl(124,"td")(125,"code"),iN(126,"var(--border-width-md)"),sg()()(),Tl(127,"tr")(128,"td")(129,"code"),iN(130,"--padding"),sg()(),Tl(131,"td"),iN(132,"Preenchimento"),sg(),Tl(133,"td")(134,"code"),iN(135,"0 1em"),sg()()(),Tl(136,"tr")(137,"td")(138,"code"),iN(139,"--text-color"),sg()(),Tl(140,"td"),iN(141,"Cor do texto"),sg(),Tl(142,"td")(143,"code"),iN(144,"var(--color-neutral-light-00)"),sg()()(),Tl(145,"tr")(146,"td")(147,"code"),iN(148,"--color"),sg()(),Tl(149,"td"),iN(150,"Cor principal do bot\xE3o"),sg(),Tl(151,"td")(152,"code"),iN(153,"var(--color-action-default)"),sg()()(),Tl(154,"tr")(155,"td")(156,"code"),iN(157,"--background-color"),sg()(),Tl(158,"td"),iN(159,"Cor de background"),sg(),Tl(160,"td")(161,"code"),iN(162,"var(--color-transparent)"),sg()()(),Tl(163,"tr")(164,"td")(165,"code"),iN(166,"--shadow"),sg()(),Tl(167,"td"),iN(168,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(169,"td")(170,"code"),iN(171,"var(--shadow-none)"),sg()()(),Tl(172,"tr")(173,"td")(174,"strong"),iN(175,"Hover"),sg()(),Gl(176,"td")(177,"td"),sg(),Tl(178,"tr")(179,"td")(180,"code"),iN(181,"--color-hover"),sg()(),Tl(182,"td"),iN(183,"Cor principal no estado hover"),sg(),Tl(184,"td")(185,"code"),iN(186,"var(--color-action-hover)"),sg()()(),Tl(187,"tr")(188,"td")(189,"code"),iN(190,"--background-hover"),sg()(),Tl(191,"td"),iN(192,"Cor de background no estado hover"),sg(),Tl(193,"td")(194,"code"),iN(195,"var(--color-brand-01-lighter)"),sg()()(),Tl(196,"tr")(197,"td")(198,"code"),iN(199,"--border-color-hover"),sg()(),Tl(200,"td"),iN(201,"Cor da borda no estado hover"),sg(),Tl(202,"td")(203,"code"),iN(204,"var(--color-brand-01-darkest)"),sg()()(),Tl(205,"tr")(206,"td")(207,"strong"),iN(208,"Focused"),sg()(),Gl(209,"td")(210,"td"),sg(),Tl(211,"tr")(212,"td")(213,"code"),iN(214,"--outline-color-focused"),sg()(),Tl(215,"td"),iN(216,"Cor do outline do estado de focus"),sg(),Tl(217,"td")(218,"code"),iN(219,"var(--color-action-focus)"),sg()()(),Tl(220,"tr")(221,"td")(222,"strong"),iN(223,"Pressed"),sg()(),Gl(224,"td")(225,"td"),sg(),Tl(226,"tr")(227,"td")(228,"code"),iN(229,"--color-pressed"),sg()(),Tl(230,"td"),iN(231,"Cor principal no estado de pressionado"),sg(),Tl(232,"td")(233,"code"),iN(234,"var(--color-action-pressed)"),sg()()(),Tl(235,"tr")(236,"td")(237,"code"),iN(238,"--background-pressed"),sg()(),Tl(239,"td"),iN(240,"Cor de background no estado de pressionado\xA0"),sg(),Tl(241,"td")(242,"code"),iN(243,"var(--color-brand-01-light)"),sg()()(),Tl(244,"tr")(245,"td")(246,"strong"),iN(247,"Disabled"),sg()(),Gl(248,"td")(249,"td"),sg(),Tl(250,"tr")(251,"td")(252,"code"),iN(253,"--color-disabled"),sg()(),Tl(254,"td"),iN(255,"Cor principal no estado disabled"),sg(),Tl(256,"td")(257,"code"),iN(258,"var(--color-action-disabled)"),sg()()(),Tl(259,"tr")(260,"td")(261,"code"),iN(262,"--background-color-disabled"),sg(),iN(263," \xA0"),sg(),Tl(264,"td"),iN(265,"Cor de background no estado disabled"),sg(),Tl(266,"td")(267,"code"),iN(268,"var(--color-transparent)"),sg()()()()()(),Tl(269,"div",7)(270,"h4",8),iN(271,"Seletor"),sg(),Tl(272,"pre",9),iN(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),sg()(),Tl(274,"h4",10),iN(275,"Propriedades"),sg(),Tl(276,"table",11)(277,"tr",12)(278,"th",13),iN(279,"Nome"),sg(),Tl(280,"th",13),iN(281,"Tipo"),sg(),Tl(282,"th",13),iN(283,"Padr\xE3o"),sg(),Tl(284,"th",13),iN(285,"Descri\xE7\xE3o"),sg()(),Tl(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),iN(290," p-buttons"),Gl(291,"br"),sg()()(),Tl(292,"td",18)(293,"code",19),iN(294,"Array<PoButtonGroupItem>"),sg()(),Tl(295,"td",20),iN(296,"-"),sg(),Tl(297,"td",21)(298,"p"),iN(299,"Lista de bot\xF5es."),sg()()(),Tl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),iN(304," p-size"),Gl(305,"br"),sg()()(),Tl(306,"td",18)(307,"code",22),iN(308,"string"),sg()(),Tl(309,"td",20)(310,"p")(311,"code"),iN(312,"medium"),sg()()(),Tl(313,"td",21)(314,"em")(315,"strong"),iN(316,"(opcional)"),sg()(),Tl(317,"p"),iN(318,"Define o tamanho do componente:"),sg(),Tl(319,"ul")(320,"li")(321,"code"),iN(322,"small"),sg(),iN(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(324,"li")(325,"code"),iN(326,"medium"),sg(),iN(327,": altura de 44px."),sg()(),Tl(328,"blockquote")(329,"p"),iN(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(331,"code"),iN(332,"medium"),sg(),iN(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(334,"a",23),iN(335,"po-theme"),sg(),iN(336,"."),sg()()()(),Tl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),iN(341," p-toggle"),Gl(342,"br"),sg()()(),Tl(343,"td",18)(344,"code",22),iN(345,"string"),sg()(),Tl(346,"td",20)(347,"p")(348,"code"),iN(349,"none"),sg()()(),Tl(350,"td",21)(351,"em")(352,"strong"),iN(353,"(opcional)"),sg()(),Tl(354,"p"),iN(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),Tl(356,"code"),iN(357,"PoButtonGroupToggle"),sg(),iN(358,":"),sg(),Tl(359,"ul")(360,"li")(361,"code"),iN(362,"multiple"),sg(),iN(363,": permite m\xFAltiplas sele\xE7\xF5es."),sg(),Tl(364,"li")(365,"code"),iN(366,"none"),sg(),iN(367,": desativa a funcionalidade de sele\xE7\xE3o."),sg(),Tl(368,"li")(369,"code"),iN(370,"single"),sg(),iN(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),sg()()()()(),Tl(372,"h3"),iN(373,"Interfaces"),sg(),Tl(374,"h4",24)(375,"code",5),iN(376,"PoButtonGroupItem"),sg()(),Tl(377,"div",2)(378,"p"),iN(379,"Interface para os itens do "),Tl(380,"code"),iN(381,"po-button-group"),sg(),iN(382,"."),sg()(),Tl(383,"h4",10),iN(384,"Propriedades"),sg(),Tl(385,"table",11)(386,"tr",12)(387,"th",13),iN(388,"Nome"),sg(),Tl(389,"th",13),iN(390,"Tipo"),sg(),Tl(391,"th",13),iN(392,"Descri\xE7\xE3o"),sg()(),Tl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),iN(397," action"),Gl(398,"br"),sg()()(),Tl(399,"td",18)(400,"code",25),iN(401,"Function"),sg()(),Tl(402,"td",21)(403,"p"),iN(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),sg()()(),Tl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),iN(409," disabled"),Gl(410,"br"),sg()()(),Tl(411,"td",18)(412,"code",26),iN(413,"boolean"),sg()(),Tl(414,"td",21)(415,"em")(416,"strong"),iN(417,"(opcional)"),sg()(),Tl(418,"p"),iN(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),sg(),Tl(420,"blockquote")(421,"p"),iN(422,"Por padr\xE3o esta propriedade \xE9 "),Tl(423,"code"),iN(424,"false"),sg(),iN(425,"."),sg()()()(),Tl(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),iN(430," icon"),Gl(431,"br"),sg()()(),Tl(432,"td",18)(433,"code",22),iN(434,"string "),sg(),Tl(435,"code",27),iN(436," TemplateRef<void>"),sg()(),Tl(437,"td",21)(438,"em")(439,"strong"),iN(440,"(opcional)"),sg()(),Tl(441,"p"),iN(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),sg(),Tl(443,"p"),iN(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(445,"a",28),iN(446,"Biblioteca de \xEDcones"),sg(),iN(447,". conforme exemplo abaixo:"),sg(),Tl(448,"pre")(449,"code"),iN(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),sg()(),Tl(451,"p"),iN(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(453,"em"),iN(454,"Font Awesome"),sg(),iN(455,", da seguinte forma:"),sg(),Tl(456,"pre")(457,"code"),iN(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),sg()(),Tl(459,"p"),iN(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(461,"code"),iN(462,"TemplateRef"),sg(),iN(463,", conforme exemplo abaixo:"),sg(),Tl(464,"p"),iN(465,"component.html:"),sg(),Tl(466,"pre")(467,"code"),iN(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(469,"p"),iN(470,"component.ts:"),sg(),Tl(471,"pre")(472,"code"),iN(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),sg()(),Tl(474,"blockquote")(475,"p"),iN(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(477,"code"),iN(478,"font-size: inherit"),sg(),iN(479," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),iN(484," label"),Gl(485,"br"),sg()()(),Tl(486,"td",18)(487,"code",22),iN(488,"string"),sg()(),Tl(489,"td",21)(490,"em")(491,"strong"),iN(492,"(opcional)"),sg()(),Tl(493,"p"),iN(494,"Label do bot\xE3o."),sg()()(),Tl(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),iN(499," selected"),Gl(500,"br"),sg()()(),Tl(501,"td",18)(502,"code",26),iN(503,"boolean"),sg()(),Tl(504,"td",21)(505,"em")(506,"strong"),iN(507,"(opcional)"),sg()(),Tl(508,"p"),iN(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),Tl(510,"code"),iN(511,"p-toggle"),sg(),iN(512,"."),sg()()(),Tl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),iN(517," tooltip"),Gl(518,"br"),sg()()(),Tl(519,"td",18)(520,"code",22),iN(521,"string"),sg()(),Tl(522,"td",21)(523,"em")(524,"strong"),iN(525,"(opcional)"),sg()(),Tl(526,"p"),iN(527,"Define a mensagem a ser exibida ao posicionar o "),Tl(528,"em"),iN(529,"mouse"),sg(),iN(530," sobre o bot\xE3o."),sg()()()(),Tl(531,"h3"),iN(532,"Enums"),sg(),Tl(533,"h4",4)(534,"code",5),iN(535,"PoButtonGroupToggle"),sg()(),Tl(536,"div",2)(537,"p"),iN(538,"Tipos de sele\xE7\xE3o ("),Tl(539,"code"),iN(540,"p-toggle"),sg(),iN(541,") dispon\xEDveis para o componente."),sg()(),Tl(542,"h4",10),iN(543,"Propriedades"),sg(),Tl(544,"table",11)(545,"tr",12)(546,"th",13),iN(547,"Nome"),sg(),Tl(548,"th",13),iN(549,"Descri\xE7\xE3o"),sg()(),Tl(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),iN(554," Multiple"),Gl(555,"br"),sg()()(),Tl(556,"td",21)(557,"p"),iN(558,"Sele\xE7\xE3o m\xFAltipla."),sg()()(),Tl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),iN(563," None"),Gl(564,"br"),sg()()(),Tl(565,"td",21)(566,"p"),iN(567,"Sele\xE7\xE3o desabilitada."),sg()()(),Tl(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),iN(572," Single"),Gl(573,"br"),sg()()(),Tl(574,"td",21)(575,"p"),iN(576,"Sele\xE7\xE3o \xFAnica."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-button-group-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),sg()()()),a&2&&(nw("p-actions",o.actions),Vp$1(2),nw("p-active",o.activeTab==="doc"),Vp$1(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[lNe,Wme,jme,pe,se,ue,ge,be],encapsulation:2,changeDetection:1})}return i})();var Ae=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[DL.forChild(Ae),DL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,Se]})}return i})();export{bt as DocPoButtonGroupModule};