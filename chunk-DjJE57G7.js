import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,cw as Bp,cx as nde,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,aJ as nme,bL as H3,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,b4 as rme,b9 as ONe,cy as ho,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var re=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic"]],standalone:false,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&Hl(0,"po-button-group",0),a&2&&ZE("p-buttons",o.buttons);},dependencies:[nde],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Button Group Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-button-group-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return i})();var me=(()=>{class i{poNotification=f(Xp);button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:Bp.None},{label:"single",value:Bp.Single},{label:"multiple",value:Bp.Multiple}];ngOnInit(){this.restore();}action(r){this.poNotification.success(r.action);}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={};}restore(){this.size="medium",this.button={},this.buttons=[];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs"]],standalone:false,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=gx();Cl(0,"div",2),Hl(1,"po-button-group",3),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",2)(6,"po-input",4),gw("ngModelChange",function(m){return Jy(u),Zx(o.button.label,m)||(o.button.label=m),e_(m)}),og(),Z0(),Cl(7,"po-input",5),gw("ngModelChange",function(m){return Jy(u),Zx(o.button.action,m)||(o.button.action=m),e_(m)}),og(),Z0(),Cl(8,"po-input",6),gw("ngModelChange",function(m){return Jy(u),Zx(o.button.tooltip,m)||(o.button.tooltip=m),e_(m)}),og(),Z0(),Cl(9,"po-radio-group",7),gw("ngModelChange",function(m){return Jy(u),Zx(o.button.icon,m)||(o.button.icon=m),e_(m)}),og(),Z0(),Cl(10,"po-switch",8),gw("ngModelChange",function(m){return Jy(u),Zx(o.button.disabled,m)||(o.button.disabled=m),e_(m)}),og(),Z0(),og(),Cl(11,"div",2)(12,"po-button",9),dt("p-click",function(){Jy(u);let m=Sx(4);return o.addButton(),e_(m.reset())}),og()()(),Hl(13,"po-divider"),Cl(14,"form",null,1)(16,"div",2)(17,"po-select",10),gw("ngModelChange",function(m){return Jy(u),Zx(o.toggle,m)||(o.toggle=m),e_(m)}),og(),Z0(),Cl(18,"po-radio-group",11),gw("ngModelChange",function(m){return Jy(u),Zx(o.size,m)||(o.size=m),e_(m)}),og(),Z0(),og(),Cl(19,"div",2)(20,"po-button",12),dt("p-click",function(){Jy(u);let m=Sx(4);return Sx(15).reset(),m.reset(),e_(o.restore())}),og()()();}if(a&2){let u=Sx(4);Lp(),ZE("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),Lp(5),pw("ngModel",o.button.label),X0(),Lp(),pw("ngModel",o.button.action),X0(),Lp(),pw("ngModel",o.button.tooltip),X0(),Lp(),pw("ngModel",o.button.icon),ZE("p-options",o.iconsOptions),X0(),Lp(),pw("ngModel",o.button.disabled),X0(),Lp(2),ZE("p-disabled",u.invalid),Lp(5),pw("ngModel",o.toggle),ZE("p-options",o.toggleOptions),X0(),Lp(),pw("ngModel",o.size),ZE("p-options",o.sizeOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,nde,_v,q3,Nde,nme,H3],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Button Group Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-button-group-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return i})();var de=(()=>{class i{poNotification=f(Xp);attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `);}getTypeNotification(r=""){switch(r){case "Emergency":return "error";case "Appointment":return "information";case "Exams":return "success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:false,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"div",1),qx(2,"Choose the type of attendance"),og(),Cl(3,"div",2),qx(4,"Get your password"),og()(),Hl(5,"po-divider"),Cl(6,"div",0),Hl(7,"po-button-group",3),og()),a&2&&(Lp(7),ZE("p-buttons",o.attendances));},dependencies:[nde,_v],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Button Group - Attendance"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-button-group-attendance"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return i})();var ce=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:true,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post"]],standalone:false,decls:11,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(Cl(0,"div",0),qx(1,"Create New Post"),og(),Cl(2,"po-widget")(3,"div",1)(4,"div",2),Hl(5,"po-button-group",3),og(),Cl(6,"div",2),Hl(7,"po-button-group",4),og(),Cl(8,"po-textarea",5),gw("ngModelChange",function(g){return Zx(o.textArea,g)||(o.textArea=g),g}),og(),Z0(),Cl(9,"div",6),qx(10),og()()()),a&2&&(Lp(5),ZE("p-buttons",o.fontStyle),Lp(2),ZE("p-buttons",o.textAlign),Lp(),pw("ngModel",o.textArea),X0(),Lp(),ho("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),Lp(),dg(" ",o.textArea," "));},dependencies:[sY,gk,nde,rme,ONe],encapsulation:2,changeDetection:1})}return i})();var Ge=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Button Group - Post"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-button-group-post"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ge,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-doc"]],standalone:false,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-button-group."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoButtonGroupComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-button-group"),og(),qx(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),og(),Cl(18,"p"),qx(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),og(),Cl(20,"p"),qx(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),og(),Cl(22,"h4"),qx(23,"Boas pr\xE1ticas"),og(),Cl(24,"ul")(25,"li"),qx(26,"Evite usar o "),Cl(27,"code"),qx(28,"po-button-group"),og(),qx(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),Cl(30,"code"),qx(31,"po-button"),og(),qx(32,"."),og(),Cl(33,"li"),qx(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),Cl(35,"code"),qx(36,"po-button-group"),og(),qx(37,"."),og()(),Cl(38,"blockquote")(39,"p"),qx(40,"As recomenda\xE7\xF5es do "),Cl(41,"code"),qx(42,"po-button"),og(),qx(43," tamb\xE9m valem para o "),Cl(44,"code"),qx(45,"po-button-group"),og(),qx(46,"."),og()(),Cl(47,"h4"),qx(48,"Tokens customiz\xE1veis"),og(),Cl(49,"p"),qx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(51,"blockquote")(52,"p"),qx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(54,"a",6),qx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(56,"."),og()(),Cl(57,"table")(58,"thead")(59,"tr")(60,"th"),qx(61,"Propriedade"),og(),Cl(62,"th"),qx(63,"Descri\xE7\xE3o"),og(),Cl(64,"th"),qx(65,"Valor Padr\xE3o"),og()()(),Cl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),qx(70,"Default Values"),og()(),Hl(71,"td")(72,"td"),og(),Cl(73,"tr")(74,"td")(75,"code"),qx(76,"--font-family"),og()(),Cl(77,"td"),qx(78,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(79,"td")(80,"code"),qx(81,"var(--font-family-theme)"),og()()(),Cl(82,"tr")(83,"td")(84,"code"),qx(85,"--font-size"),og()(),Cl(86,"td"),qx(87,"Tamanho da fonte"),og(),Cl(88,"td")(89,"code"),qx(90,"var(--font-size-default)"),og()()(),Cl(91,"tr")(92,"td")(93,"code"),qx(94,"--font-weight"),og()(),Cl(95,"td"),qx(96,"Peso da fonte"),og(),Cl(97,"td")(98,"code"),qx(99,"var(--font-weight-bold)"),og()()(),Cl(100,"tr")(101,"td")(102,"code"),qx(103,"--line-height"),og()(),Cl(104,"td"),qx(105,"Tamanho da label"),og(),Cl(106,"td")(107,"code"),qx(108,"var(--line-height-none)"),og()()(),Cl(109,"tr")(110,"td")(111,"code"),qx(112,"--border-radius"),og()(),Cl(113,"td"),qx(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(115,"td")(116,"code"),qx(117,"var(--border-radius-md)"),og()()(),Cl(118,"tr")(119,"td")(120,"code"),qx(121,"--border-width"),og()(),Cl(122,"td"),qx(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Cl(124,"td")(125,"code"),qx(126,"var(--border-width-md)"),og()()(),Cl(127,"tr")(128,"td")(129,"code"),qx(130,"--padding"),og()(),Cl(131,"td"),qx(132,"Preenchimento"),og(),Cl(133,"td")(134,"code"),qx(135,"0 1em"),og()()(),Cl(136,"tr")(137,"td")(138,"code"),qx(139,"--text-color"),og()(),Cl(140,"td"),qx(141,"Cor do texto"),og(),Cl(142,"td")(143,"code"),qx(144,"var(--color-neutral-light-00)"),og()()(),Cl(145,"tr")(146,"td")(147,"code"),qx(148,"--color"),og()(),Cl(149,"td"),qx(150,"Cor principal do bot\xE3o"),og(),Cl(151,"td")(152,"code"),qx(153,"var(--color-action-default)"),og()()(),Cl(154,"tr")(155,"td")(156,"code"),qx(157,"--background-color"),og()(),Cl(158,"td"),qx(159,"Cor de background"),og(),Cl(160,"td")(161,"code"),qx(162,"var(--color-transparent)"),og()()(),Cl(163,"tr")(164,"td")(165,"code"),qx(166,"--shadow"),og()(),Cl(167,"td"),qx(168,"Cont\xE9m o valor da sombra do elemento"),og(),Cl(169,"td")(170,"code"),qx(171,"var(--shadow-none)"),og()()(),Cl(172,"tr")(173,"td")(174,"strong"),qx(175,"Hover"),og()(),Hl(176,"td")(177,"td"),og(),Cl(178,"tr")(179,"td")(180,"code"),qx(181,"--color-hover"),og()(),Cl(182,"td"),qx(183,"Cor principal no estado hover"),og(),Cl(184,"td")(185,"code"),qx(186,"var(--color-action-hover)"),og()()(),Cl(187,"tr")(188,"td")(189,"code"),qx(190,"--background-hover"),og()(),Cl(191,"td"),qx(192,"Cor de background no estado hover"),og(),Cl(193,"td")(194,"code"),qx(195,"var(--color-brand-01-lighter)"),og()()(),Cl(196,"tr")(197,"td")(198,"code"),qx(199,"--border-color-hover"),og()(),Cl(200,"td"),qx(201,"Cor da borda no estado hover"),og(),Cl(202,"td")(203,"code"),qx(204,"var(--color-brand-01-darkest)"),og()()(),Cl(205,"tr")(206,"td")(207,"strong"),qx(208,"Focused"),og()(),Hl(209,"td")(210,"td"),og(),Cl(211,"tr")(212,"td")(213,"code"),qx(214,"--outline-color-focused"),og()(),Cl(215,"td"),qx(216,"Cor do outline do estado de focus"),og(),Cl(217,"td")(218,"code"),qx(219,"var(--color-action-focus)"),og()()(),Cl(220,"tr")(221,"td")(222,"strong"),qx(223,"Pressed"),og()(),Hl(224,"td")(225,"td"),og(),Cl(226,"tr")(227,"td")(228,"code"),qx(229,"--color-pressed"),og()(),Cl(230,"td"),qx(231,"Cor principal no estado de pressionado"),og(),Cl(232,"td")(233,"code"),qx(234,"var(--color-action-pressed)"),og()()(),Cl(235,"tr")(236,"td")(237,"code"),qx(238,"--background-pressed"),og()(),Cl(239,"td"),qx(240,"Cor de background no estado de pressionado\xA0"),og(),Cl(241,"td")(242,"code"),qx(243,"var(--color-brand-01-light)"),og()()(),Cl(244,"tr")(245,"td")(246,"strong"),qx(247,"Disabled"),og()(),Hl(248,"td")(249,"td"),og(),Cl(250,"tr")(251,"td")(252,"code"),qx(253,"--color-disabled"),og()(),Cl(254,"td"),qx(255,"Cor principal no estado disabled"),og(),Cl(256,"td")(257,"code"),qx(258,"var(--color-action-disabled)"),og()()(),Cl(259,"tr")(260,"td")(261,"code"),qx(262,"--background-color-disabled"),og(),qx(263," \xA0"),og(),Cl(264,"td"),qx(265,"Cor de background no estado disabled"),og(),Cl(266,"td")(267,"code"),qx(268,"var(--color-transparent)"),og()()()()()(),Cl(269,"div",7)(270,"h4",8),qx(271,"Seletor"),og(),Cl(272,"pre",9),qx(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),og()(),Cl(274,"h4",10),qx(275,"Propriedades"),og(),Cl(276,"table",11)(277,"tr",12)(278,"th",13),qx(279,"Nome"),og(),Cl(280,"th",13),qx(281,"Tipo"),og(),Cl(282,"th",13),qx(283,"Padr\xE3o"),og(),Cl(284,"th",13),qx(285,"Descri\xE7\xE3o"),og()(),Cl(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),qx(290," p-buttons"),Hl(291,"br"),og()()(),Cl(292,"td",18)(293,"code",19),qx(294,"Array<PoButtonGroupItem>"),og()(),Cl(295,"td",20),qx(296,"-"),og(),Cl(297,"td",21)(298,"p"),qx(299,"Lista de bot\xF5es."),og()()(),Cl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),qx(304," p-size"),Hl(305,"br"),og()()(),Cl(306,"td",18)(307,"code",22),qx(308,"string"),og()(),Cl(309,"td",20)(310,"p")(311,"code"),qx(312,"medium"),og()()(),Cl(313,"td",21)(314,"em")(315,"strong"),qx(316,"(opcional)"),og()(),Cl(317,"p"),qx(318,"Define o tamanho do componente:"),og(),Cl(319,"ul")(320,"li")(321,"code"),qx(322,"small"),og(),qx(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(324,"li")(325,"code"),qx(326,"medium"),og(),qx(327,": altura de 44px."),og()(),Cl(328,"blockquote")(329,"p"),qx(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(331,"code"),qx(332,"medium"),og(),qx(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(334,"a",23),qx(335,"po-theme"),og(),qx(336,"."),og()()()(),Cl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),qx(341," p-toggle"),Hl(342,"br"),og()()(),Cl(343,"td",18)(344,"code",22),qx(345,"string"),og()(),Cl(346,"td",20)(347,"p")(348,"code"),qx(349,"none"),og()()(),Cl(350,"td",21)(351,"em")(352,"strong"),qx(353,"(opcional)"),og()(),Cl(354,"p"),qx(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),Cl(356,"code"),qx(357,"PoButtonGroupToggle"),og(),qx(358,":"),og(),Cl(359,"ul")(360,"li")(361,"code"),qx(362,"multiple"),og(),qx(363,": permite m\xFAltiplas sele\xE7\xF5es."),og(),Cl(364,"li")(365,"code"),qx(366,"none"),og(),qx(367,": desativa a funcionalidade de sele\xE7\xE3o."),og(),Cl(368,"li")(369,"code"),qx(370,"single"),og(),qx(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),og()()()()(),Cl(372,"h3"),qx(373,"Interfaces"),og(),Cl(374,"h4",24)(375,"code",5),qx(376,"PoButtonGroupItem"),og()(),Cl(377,"div",2)(378,"p"),qx(379,"Interface para os itens do "),Cl(380,"code"),qx(381,"po-button-group"),og(),qx(382,"."),og()(),Cl(383,"h4",10),qx(384,"Propriedades"),og(),Cl(385,"table",11)(386,"tr",12)(387,"th",13),qx(388,"Nome"),og(),Cl(389,"th",13),qx(390,"Tipo"),og(),Cl(391,"th",13),qx(392,"Descri\xE7\xE3o"),og()(),Cl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),qx(397," action"),Hl(398,"br"),og()()(),Cl(399,"td",18)(400,"code",25),qx(401,"Function"),og()(),Cl(402,"td",21)(403,"p"),qx(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),og()()(),Cl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),qx(409," disabled"),Hl(410,"br"),og()()(),Cl(411,"td",18)(412,"code",26),qx(413,"boolean"),og()(),Cl(414,"td",21)(415,"em")(416,"strong"),qx(417,"(opcional)"),og()(),Cl(418,"p"),qx(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),og(),Cl(420,"blockquote")(421,"p"),qx(422,"Por padr\xE3o esta propriedade \xE9 "),Cl(423,"code"),qx(424,"false"),og(),qx(425,"."),og()()()(),Cl(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),qx(430," icon"),Hl(431,"br"),og()()(),Cl(432,"td",18)(433,"code",22),qx(434,"string "),og(),Cl(435,"code",27),qx(436," TemplateRef<void>"),og()(),Cl(437,"td",21)(438,"em")(439,"strong"),qx(440,"(opcional)"),og()(),Cl(441,"p"),qx(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Cl(443,"p"),qx(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(445,"a",28),qx(446,"Biblioteca de \xEDcones"),og(),qx(447,". conforme exemplo abaixo:"),og(),Cl(448,"pre")(449,"code"),qx(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),og()(),Cl(451,"p"),qx(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(453,"em"),qx(454,"Font Awesome"),og(),qx(455,", da seguinte forma:"),og(),Cl(456,"pre")(457,"code"),qx(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),og()(),Cl(459,"p"),qx(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(461,"code"),qx(462,"TemplateRef"),og(),qx(463,", conforme exemplo abaixo:"),og(),Cl(464,"p"),qx(465,"component.html:"),og(),Cl(466,"pre")(467,"code"),qx(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(469,"p"),qx(470,"component.ts:"),og(),Cl(471,"pre")(472,"code"),qx(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),og()(),Cl(474,"blockquote")(475,"p"),qx(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(477,"code"),qx(478,"font-size: inherit"),og(),qx(479," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),qx(484," label"),Hl(485,"br"),og()()(),Cl(486,"td",18)(487,"code",22),qx(488,"string"),og()(),Cl(489,"td",21)(490,"em")(491,"strong"),qx(492,"(opcional)"),og()(),Cl(493,"p"),qx(494,"Label do bot\xE3o."),og()()(),Cl(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),qx(499," selected"),Hl(500,"br"),og()()(),Cl(501,"td",18)(502,"code",26),qx(503,"boolean"),og()(),Cl(504,"td",21)(505,"em")(506,"strong"),qx(507,"(opcional)"),og()(),Cl(508,"p"),qx(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),Cl(510,"code"),qx(511,"p-toggle"),og(),qx(512,"."),og()()(),Cl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),qx(517," tooltip"),Hl(518,"br"),og()()(),Cl(519,"td",18)(520,"code",22),qx(521,"string"),og()(),Cl(522,"td",21)(523,"em")(524,"strong"),qx(525,"(opcional)"),og()(),Cl(526,"p"),qx(527,"Define a mensagem a ser exibida ao posicionar o "),Cl(528,"em"),qx(529,"mouse"),og(),qx(530," sobre o bot\xE3o."),og()()()(),Cl(531,"h3"),qx(532,"Enums"),og(),Cl(533,"h4",4)(534,"code",5),qx(535,"PoButtonGroupToggle"),og()(),Cl(536,"div",2)(537,"p"),qx(538,"Tipos de sele\xE7\xE3o ("),Cl(539,"code"),qx(540,"p-toggle"),og(),qx(541,") dispon\xEDveis para o componente."),og()(),Cl(542,"h4",10),qx(543,"Propriedades"),og(),Cl(544,"table",11)(545,"tr",12)(546,"th",13),qx(547,"Nome"),og(),Cl(548,"th",13),qx(549,"Descri\xE7\xE3o"),og()(),Cl(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),qx(554," Multiple"),Hl(555,"br"),og()()(),Cl(556,"td",21)(557,"p"),qx(558,"Sele\xE7\xE3o m\xFAltipla."),og()()(),Cl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),qx(563," None"),Hl(564,"br"),og()()(),Cl(565,"td",21)(566,"p"),qx(567,"Sele\xE7\xE3o desabilitada."),og()()(),Cl(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),qx(572," Single"),Hl(573,"br"),og()()(),Cl(574,"td",21)(575,"p"),qx(576,"Sele\xE7\xE3o \xFAnica."),og()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-button-group-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),og()()()),a&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,pe,se,ue,ge,be],encapsulation:2})}return i})();var Ae=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[bL.forChild(Ae),bL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ca,Se]})}return i})();export{bt as DocPoButtonGroupModule};