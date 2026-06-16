import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aZ as wk,cZ as ua,c_ as O0,c$ as th,d0 as za,aU as IR,J as wl,N as Ul,R as ng,z as Ux,P as Pp,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,a1 as ut,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,ck as vk,cl as gk,aK as Pe$1,bx as ia,aO as Yo,bT as ha,bB as ga,ai as ya,bd as na,bC as Vp,al as lx,ao as QA,am as pw,an as $0,ar as JA,ap as hw,aq as G0,aL as di,cA as Lp,a3 as D3,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic"]],standalone:false,decls:8,vars:3,consts:[["p-title","Bar"],[3,"p-value"],[1,"po-mt-1"],["p-title","Circle",1,"po-mt-2"],["p-shape","circle",3,"p-value","p-radius"]],template:function(l,i){l&1&&(wl(0,"div")(1,"po-widget",0),Ul(2,"po-progress",1),ng()(),wl(3,"div",2)(4,"po-widget",3),Ul(5,"po-progress",4),wl(6,"div",2),Ux(7,"Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),ng()()()),l&2&&(Pp(2),YE("p-value",25),Pp(3),YE("p-value",25)("p-radius",24));},dependencies:[za,IR],encapsulation:2,changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Progress Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div>
  <po-widget p-title="Bar">
    <po-progress [p-value]="25"></po-progress>
  </po-widget>
</div>

<div class="po-mt-1">
  <po-widget p-title="Circle" class="po-mt-2">
    <po-progress [p-value]="25" p-shape="circle" [p-radius]="24"></po-progress>
    <div class="po-mt-1">Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</div>
  </po-widget>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-progress-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Oe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ve],encapsulation:2})}return o})();function qe(o,J){if(o&1&&(wl(0,"po-widget",3),Ul(1,"po-info",15),ng()),o&2){let r=gx();Pp(),YE("p-value",r.event);}}function Ve(o,J){if(o&1&&(wl(0,"div")(1,"po-widget",21)(2,"form",22),Ul(3,"po-input",23),$0(),Ul(4,"po-select",24),$0(),Ul(5,"po-select",25),$0(),Ul(6,"po-switch",26),$0(),Ul(7,"po-switch",27),$0(),ng()()()),o&2){let r=gx(2);Pp(2),YE("formGroup",r.actionForm),Pp(),G0(),Pp(),YE("p-options",r.iconOptions),G0(),Pp(),YE("p-options",r.typeOptions),G0(),Pp(),G0(),Pp(),G0();}}function Le(o,J){if(o&1){let r=lx();wl(0,"po-select",16),pw("ngModelChange",function(i){Qy(r);let m=gx();return $x(m.infoIcon,i)||(m.infoIcon=i),Jy(i)}),ng(),$0(),wl(1,"po-input",17),pw("ngModelChange",function(i){Qy(r);let m=gx();return $x(m.text,i)||(m.text=i),Jy(i)}),ng(),$0(),wl(2,"po-input",18),pw("ngModelChange",function(i){Qy(r);let m=gx();return $x(m.info,i)||(m.info=i),Jy(i)}),ng(),$0(),wl(3,"po-radio-group",19),pw("ngModelChange",function(i){Qy(r);let m=gx();return $x(m.sizeActions,i)||(m.sizeActions=i),Jy(i)}),ng(),$0(),wl(4,"po-switch",20),pw("ngModelChange",function(i){Qy(r);let m=gx();return $x(m.showAction,i)||(m.showAction=i),Jy(i)}),ng(),$0(),QA(5,Ve,8,3,"div");}if(o&2){let r=gx();hw("ngModel",r.infoIcon),YE("p-options",r.infoIconsOptions),G0(),Pp(),hw("ngModel",r.text),G0(),Pp(),hw("ngModel",r.info),G0(),Pp(),hw("ngModel",r.sizeActions),YE("p-options",r.sizeActionsOptions),G0(),Pp(),hw("ngModel",r.showAction),G0(),Pp(),JA(r.showAction?5:-1);}}function Fe(o,J){if(o&1){let r=lx();wl(0,"po-number",28),pw("ngModelChange",function(i){Qy(r);let m=gx();return $x(m.radius,i)||(m.radius=i),Jy(i)}),ng(),$0();}if(o&2){let r=gx();hw("ngModel",r.radius),G0();}}var fe=(()=>{class o{fb=f(wk);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=ua.Default;size=O0.large;shape=th.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:ua.Default},{label:"Success",value:ua.Success},{label:"Error",value:ua.Error}];sizeOptions=[{label:"Medium",value:O0.medium},{label:"Large",value:O0.large}];shapeOptions=[{label:"Bar",value:th.bar},{label:"Circle",value:th.circle}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];allPropertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm();}onShapeChange(r){this.restore(r),r==="circle"?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!=="disabledCancel"):this.propertiesOptions=[...this.allPropertiesOptions];}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r);});}updateAction(r){this.action=r;}onEvent(r){this.event=r;}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=false,this.indeterminate=false,this.showPercentage=false,this.status=ua.Default,this.text=void 0,this.value=void 0,this.size=O0.large,this.radius=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.showAction=false,this.properties=[],this.sizeActions="medium",r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=th.bar);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs"]],standalone:false,decls:17,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[1,"sample-progress-grid"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-shape","p-radius","p-size-actions","p-custom-action"],["p-title","Events"],["p-title","Properties"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],["name","shape","p-label","Shape",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mt-2"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12","po-mt-2",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],[3,"p-value"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-mb-2",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let m=lx();wl(0,"div",1)(1,"po-progress",2),ut("p-custom-action-click",function(){return i.onEvent("p-custom-action-click")})("p-cancel",function(){return i.onEvent("p-cancel")})("p-retry",function(){return i.onEvent("p-retry")}),ng(),QA(2,qe,2,1,"po-widget",3),wl(3,"po-widget",4)(4,"form",null,0)(6,"div",5)(7,"po-radio-group",6),pw("ngModelChange",function(d){return Qy(m),$x(i.shape,d)||(i.shape=d),Jy(d)}),ut("p-change",function(d){return i.onShapeChange(d)}),ng(),$0(),ng(),wl(8,"div",7)(9,"po-number",8),pw("ngModelChange",function(d){return Qy(m),$x(i.value,d)||(i.value=d),Jy(d)}),ng(),$0(),wl(10,"po-select",9),pw("ngModelChange",function(d){return Qy(m),$x(i.size,d)||(i.size=d),Jy(d)}),ng(),$0(),wl(11,"po-select",10),pw("ngModelChange",function(d){return Qy(m),$x(i.status,d)||(i.status=d),Jy(d)}),ng(),$0(),QA(12,Le,6,8),QA(13,Fe,1,1,"po-number",11),wl(14,"po-checkbox-group",12),pw("ngModelChange",function(d){return Qy(m),$x(i.properties,d)||(i.properties=d),Jy(d)}),ng(),$0(),ng()()(),wl(15,"div",13)(16,"po-button",14),ut("p-click",function(){return i.restore()}),ng()()();}l&2&&(Pp(),YE("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-shape",i.shape)("p-radius",i.radius)("p-size-actions",i.sizeActions)("p-custom-action",i.action),Pp(),JA(i.shape==="bar"?2:-1),Pp(5),hw("ngModel",i.shape),YE("p-options",i.shapeOptions),G0(),Pp(2),hw("ngModel",i.value),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0(),Pp(),hw("ngModel",i.status),YE("p-options",i.statusOptions),G0(),Pp(),JA(i.shape==="bar"?12:-1),Pp(),JA(i.shape==="circle"?13:-1),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0());},dependencies:[aY,iY,oY,ck,ok,vk,gk,Pe$1,ia,Yo,ha,ga,ya,na,Vp,za,IR],styles:[".sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}"],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Progress Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="sample-progress-grid">
  <po-progress
    [p-disabled-cancel]="properties.includes('disabledCancel')"
    [p-indeterminate]="properties.includes('indeterminate')"
    [p-show-percentage]="properties.includes('showPercentage')"
    [p-info]="info"
    [p-info-icon]="infoIcon"
    [p-status]="status"
    [p-text]="text"
    [p-value]="value"
    [p-size]="size"
    [p-shape]="shape"
    [p-radius]="radius"
    [p-size-actions]="sizeActions"
    [p-custom-action]="action"
    (p-custom-action-click)="onEvent('p-custom-action-click')"
    (p-cancel)="onEvent('p-cancel')"
    (p-retry)="onEvent('p-retry')"
  />

  @if (shape === 'bar') {
    <po-widget p-title="Events">
      <po-info [p-value]="event" />
    </po-widget>
  }

  <po-widget p-title="Properties">
    <form #progressBarPropertiesForm="ngForm">
      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12">
        <po-radio-group
          class="po-md-6 po-lg-3"
          name="shape"
          [(ngModel)]="shape"
          p-label="Shape"
          [p-options]="shapeOptions"
          (p-change)="onShapeChange($event)"
        >
        </po-radio-group>
      </div>

      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12 po-mt-2">
        <po-number
          class="po-md-6 po-lg-3"
          name="value"
          [(ngModel)]="value"
          p-clean
          p-label="Value"
          p-max="100"
          p-min="0"
        />

        <po-select class="po-md-6 po-lg-3" name="Size" p-label="Size" [(ngModel)]="size" [p-options]="sizeOptions" />

        <po-select
          class="po-md-6 po-lg-3"
          name="Status"
          p-label="Status"
          [(ngModel)]="status"
          [p-options]="statusOptions"
        />

        @if (shape === 'bar') {
          <po-select
            class="po-md-6 po-lg-3"
            name="infoIcon"
            [(ngModel)]="infoIcon"
            p-label="Info icon"
            [p-options]="infoIconsOptions"
          />

          <po-input class="po-md-6" name="text" [(ngModel)]="text" p-clean p-label="Label" />

          <po-input class="po-md-6" name="info" [(ngModel)]="info" p-clean p-label="Info" />

          <po-radio-group
            class="po-md-12 po-mb-2"
            name="sizeActions"
            [(ngModel)]="sizeActions"
            p-columns="4"
            p-label="Size actions"
            p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
            [p-options]="sizeActionsOptions"
          >
          </po-radio-group>

          <po-switch class="po-md-3" name="addAction" [(ngModel)]="showAction" p-label="Add Action Button" />

          @if (showAction) {
            <div>
              <po-widget p-title="Action Button">
                <form [formGroup]="actionForm" class="po-row">
                  <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
                  <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
                  <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
                  <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
                  <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
                </form>
              </po-widget>
            </div>
          }
        }

        @if (shape === 'circle') {
          <po-number
            class="po-md-6 po-lg-3"
            name="radius"
            [(ngModel)]="radius"
            p-clean
            p-label="Radius"
            p-help="Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."
            p-min="24"
          />
        }

        <po-checkbox-group
          class="po-md-12 po-mt-2"
          name="properties"
          [(ngModel)]="properties"
          p-columns="4"
          p-label="Properties"
          [p-options]="propertiesOptions"
        >
        </po-checkbox-group>
      </div>
    </form>
  </po-widget>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressStatus,
  PoRadioGroupOption,
  PoProgressSize,
  PoProgressShape,
  PoProgressAction,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-progress-labs',
  templateUrl: './sample-po-progress-labs.component.html',
  styleUrls: ['./sample-po-progress-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  event: any;
  info: string;
  infoIcon: string;
  disabledCancel: boolean;
  indeterminate: boolean;
  showPercentage: boolean;
  status: PoProgressStatus = PoProgressStatus.Default;
  size: PoProgressSize = PoProgressSize.large;
  shape: PoProgressShape = PoProgressShape.bar;
  radius: number;
  text: string;
  value: number;
  action: PoProgressAction;
  actionForm: FormGroup;
  showAction: false;
  properties: Array<string>;
  sizeActions: string;

  infoIconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-warning-circle', value: 'an an-warning-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-cloud-slash', value: 'an an-cloud-slash' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoProgressStatus.Default },
    { label: 'Success', value: PoProgressStatus.Success },
    { label: 'Error', value: PoProgressStatus.Error }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: PoProgressSize.medium },
    { label: 'Large', value: PoProgressSize.large }
  ];

  shapeOptions: Array<PoRadioGroupOption> = [
    { label: 'Bar', value: PoProgressShape.bar },
    { label: 'Circle', value: PoProgressShape.circle }
  ];

  sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Visible', value: 'visible' }
  ];

  private readonly allPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabledCancel', label: 'Disabled cancel' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'showPercentage', label: 'Show percentage' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [...this.allPropertiesOptions];

  constructor() {
    this.initializeActionForm();
  }

  onShapeChange(value: string): void {
    this.restore(value);

    if (value === 'circle') {
      this.propertiesOptions = this.allPropertiesOptions.filter(property => property.value !== 'disabledCancel');
    } else {
      this.propertiesOptions = [...this.allPropertiesOptions];
    }
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  onEvent(event) {
    this.event = event;
  }

  restore(shape?: string) {
    this.event = undefined;
    this.info = undefined;
    this.infoIcon = undefined;
    this.disabledCancel = false;
    this.indeterminate = false;
    this.showPercentage = false;
    this.status = PoProgressStatus.Default;
    this.text = undefined;
    this.value = undefined;
    this.size = PoProgressSize.large;
    this.radius = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.showAction = false;
    this.properties = [];
    this.sizeActions = 'medium';

    if (!shape) {
      this.propertiesOptions = [...this.allPropertiesOptions];
      this.shape = PoProgressShape.bar;
    }
  }
}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-progress-labs/sample-po-progress-labs.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-progress-labs"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ne,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return o})();var Pe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return `${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=true;}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++;},20);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication"]],standalone:false,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),pw("ngModelChange",function(v){return $x(i.publication,v)||(i.publication=v),v}),ng(),$0(),Ul(3,"po-divider",3)(4,"po-progress",4),ng(),wl(5,"div",1)(6,"po-button",5),ut("p-click",function(){return i.updatePublication()}),ng()()()),l&2&&(Pp(2),hw("ngModel",i.publication),G0(),Pp(2),YE("p-value",i.progressBarValue)("p-show-percentage",true),Pp(2),YE("p-disabled",i.buttonDisabled));},dependencies:[iY,ck,Pe$1,di,Lp,D3,za],encapsulation:2,changeDetection:1})}return o})();var je=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Progress - Publication"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Edit publication">
  <div class="po-row">
    <po-rich-text class="po-md-9" [(ngModel)]="publication"></po-rich-text>

    <po-divider class="po-md-9"></po-divider>

    <po-progress class="po-md-9" p-text="Loading update" [p-value]="progressBarValue" [p-show-percentage]="true">
    </po-progress>
  </div>

  <div class="po-row">
    <po-button p-label="Update publication" [p-disabled]="buttonDisabled" (p-click)="updatePublication()"> </po-button>
  </div>
</po-page-default>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-publication',
  templateUrl: './sample-po-progress-publication.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressPublicationComponent {
  buttonDisabled: boolean;
  progressBarValue = 0;
  publication: string = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.\`;

  get progressBarInfo() {
    return \`\${this.progressBarValue}/100\`;
  }

  finishEdition() {
    this.buttonDisabled = true;
  }

  updatePublication() {
    const interval = setInterval(() => {
      if (this.progressBarValue >= 100) {
        clearInterval(interval);

        this.finishEdition();
      } else {
        this.progressBarValue++;
      }
    }, 20);
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-progress-publication"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,je,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Pe],encapsulation:2})}return o})();var ye=(()=>{class o{minRadius=24;value=65;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle"]],standalone:false,decls:99,vars:2,consts:[[1,"container"],["p-title","Regra de Adequa\xE7\xE3o de Layout"],[1,"line-height"],[1,"po-font-text-large-bold"],[1,"po-text-large"],["p-title","Exemplo B\xE1sico - Radius M\xEDnimo (24px)"],[1,"po-row","po-align-items-center"],[1,"po-md-6","po-lg-4","po-center"],["p-shape","circle","p-show-percentage","true","p-radius","24",3,"p-value"],[1,"po-md-6","po-lg-8"],[1,"po-font-text"],["p-title","Com Radius Maior (60px)"],["p-shape","circle","p-show-percentage","true","p-radius","60",3,"p-value"],["p-title","Com Status Error (Radius 24px)"],["p-shape","circle","p-value","50","p-status","error","p-radius","24"],["p-title","Modo Indeterminado"],["p-shape","circle","p-indeterminate","true","p-radius","30"],["p-title","Compara\xE7\xE3o Visual - Diferentes Status"],[1,"po-row","row"],[1,"po-md-3","po-center","items"],[1,"po-font-text-large-bold","po-mb-1"],["p-shape","circle","p-value","100","p-status","success","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","50","p-status","warning","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","0","p-status","error","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","75","p-show-percentage","true","p-radius","25"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"p",3),Ux(4,"\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),ng(),wl(5,"p",4),Ux(6," O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos. "),ng()()(),wl(7,"po-widget",5)(8,"div",6)(9,"div",7),Ul(10,"po-progress",8),ng(),wl(11,"div",9)(12,"p")(13,"strong"),Ux(14,"Configura\xE7\xE3o:"),ng()(),wl(15,"ul")(16,"li"),Ux(17,'p-shape="circle"'),ng(),wl(18,"li"),Ux(19,'p-value="65"'),ng(),wl(20,"li"),Ux(21,'p-show-percentage="true"'),ng(),wl(22,"li"),Ux(23,'p-radius="24" (valor m\xEDnimo permitido)'),ng()(),wl(24,"p",10),Ux(25,"A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo."),ng()()()(),wl(26,"po-widget",11)(27,"div",6)(28,"div",7),Ul(29,"po-progress",12),ng(),wl(30,"div",9)(31,"p")(32,"strong"),Ux(33,"Configura\xE7\xE3o:"),ng()(),wl(34,"ul")(35,"li"),Ux(36,'p-shape="circle"'),ng(),wl(37,"li"),Ux(38,'p-value="65"'),ng(),wl(39,"li"),Ux(40,'p-show-percentage="true"'),ng(),wl(41,"li"),Ux(42,'p-radius="60" (valor maior)'),ng()(),wl(43,"p",10),Ux(44," Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o. "),ng()()()(),wl(45,"po-widget",13)(46,"div",6)(47,"div",7),Ul(48,"po-progress",14),ng(),wl(49,"div",9)(50,"p")(51,"strong"),Ux(52,"Configura\xE7\xE3o:"),ng()(),wl(53,"ul")(54,"li"),Ux(55,'p-shape="circle"'),ng(),wl(56,"li"),Ux(57,'p-value="50"'),ng(),wl(58,"li"),Ux(59,'p-status="error"'),ng(),wl(60,"li"),Ux(61,'p-radius="24" (valor m\xEDnimo)'),ng()(),wl(62,"p",10),Ux(63,"\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o."),ng()()()(),wl(64,"po-widget",15)(65,"div",6)(66,"div",7),Ul(67,"po-progress",16),ng(),wl(68,"div",9)(69,"p")(70,"strong"),Ux(71,"Configura\xE7\xE3o:"),ng()(),wl(72,"ul")(73,"li"),Ux(74,'p-shape="circle"'),ng(),wl(75,"li"),Ux(76,'p-indeterminate="true"'),ng(),wl(77,"li"),Ux(78,'p-radius="30"'),ng()(),wl(79,"p",10),Ux(80,"Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento."),ng()()()(),wl(81,"po-widget",17)(82,"div",18)(83,"div",19)(84,"p",20),Ux(85,"Success"),ng(),Ul(86,"po-progress",21),ng(),wl(87,"div",19)(88,"p",20),Ux(89,"Warning"),ng(),Ul(90,"po-progress",22),ng(),wl(91,"div",19)(92,"p",20),Ux(93,"Error"),ng(),Ul(94,"po-progress",23),ng(),wl(95,"div",19)(96,"p",20),Ux(97,"Default"),ng(),Ul(98,"po-progress",24),ng()()()()),l&2&&(Pp(10),YE("p-value",i.value),Pp(19),YE("p-value",i.value));},dependencies:[za,IR],styles:[".container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"],changeDetection:1})}return o})();var Qe=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Progress Circle"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-progress-circle/sample-po-progress-circle.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="container">
  <po-widget p-title="Regra de Adequa\xE7\xE3o de Layout">
    <div class="line-height">
      <p class="po-font-text-large-bold">\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</p>
      <p class="po-text-large">
        O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e
        a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos.
      </p>
    </div>
  </po-widget>

  <po-widget p-title="Exemplo B\xE1sico - Radius M\xEDnimo (24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="24" (valor m\xEDnimo permitido)</li>
        </ul>
        <p class="po-font-text">A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Radius Maior (60px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="60"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="60" (valor maior)</li>
        </ul>
        <p class="po-font-text">
          Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o.
        </p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Status Error (Radius 24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-value="50" p-status="error" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="50"</li>
          <li>p-status="error"</li>
          <li>p-radius="24" (valor m\xEDnimo)</li>
        </ul>
        <p class="po-font-text">\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Modo Indeterminado">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-indeterminate="true" p-radius="30"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-indeterminate="true"</li>
          <li>p-radius="30"</li>
        </ul>
        <p class="po-font-text">Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Compara\xE7\xE3o Visual - Diferentes Status">
    <div class="po-row row">
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Success</p>
        <po-progress
          p-shape="circle"
          p-value="100"
          p-status="success"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Warning</p>
        <po-progress
          p-shape="circle"
          p-value="50"
          p-status="warning"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Error</p>
        <po-progress p-shape="circle" p-value="0" p-status="error" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Default</p>
        <po-progress p-shape="circle" p-value="75" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
    </div>
  </po-widget>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-progress-circle/sample-po-progress-circle.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-circle',
  templateUrl: './sample-po-progress-circle.component.html',
  styleUrls: ['./sample-po-progress-circle.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressCircleComponent {
  minRadius = 24;
  value = 65;
}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-progress-circle/sample-po-progress-circle.component.css"),ng(),wl(25,"pre",11),Ux(26,`.container {
  display: grid;
  gap: 24px;
  padding: 16px;
}

.line-height {
  line-height: 1.6;
}

.row {
  text-align: center;
  gap: 16px;
}

.items {
  display: flex;
  align-items: center;
  flex-direction: column;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-progress-circle"),ng(),Ul(29,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Qe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return o})();var De=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-doc"]],standalone:false,decls:966,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoProgressModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-progress"),ng(),Ux(9,"."),ng()(),wl(10,"h3",3),Ux(11,"Componente"),ng(),wl(12,"h4",4)(13,"code",5),Ux(14,"PoProgressComponent"),ng()(),wl(15,"div",2)(16,"p"),Ux(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),ng(),wl(18,"p"),Ux(19,"Este componente pode ser utilizado no "),wl(20,"em"),Ux(21,"upload"),ng(),Ux(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),ng(),wl(23,"h4"),Ux(24,"Tokens customiz\xE1veis"),ng(),wl(25,"p"),Ux(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(27,"blockquote")(28,"p"),Ux(29,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(30,"a",6),Ux(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(32,"."),ng()(),wl(33,"table")(34,"thead")(35,"tr")(36,"th"),Ux(37,"Propriedade"),ng(),wl(38,"th"),Ux(39,"Descri\xE7\xE3o"),ng(),wl(40,"th"),Ux(41,"Valor Padr\xE3o"),ng()()(),wl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),Ux(46,"Default Values"),ng()(),Ul(47,"td")(48,"td"),ng(),wl(49,"tr")(50,"td")(51,"code"),Ux(52,"--font-family"),ng()(),wl(53,"td"),Ux(54,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(55,"td")(56,"code"),Ux(57,"var(--font-family-theme)"),ng()()(),wl(58,"tr")(59,"td")(60,"code"),Ux(61,"--text-color"),ng()(),wl(62,"td"),Ux(63,"Cor do texto"),ng(),wl(64,"td")(65,"code"),Ux(66,"var(--color-neutral-dark-90)"),ng()()(),wl(67,"tr")(68,"td")(69,"strong"),Ux(70,"Error"),ng()(),Ul(71,"td")(72,"td"),ng(),wl(73,"tr")(74,"td")(75,"code"),Ux(76,"--text-color-error"),ng()(),wl(77,"td"),Ux(78,"Cor do texto no estado error"),ng(),wl(79,"td")(80,"code"),Ux(81,"var(--color-feedback-negative-dark)"),ng()()(),wl(82,"tr")(83,"td")(84,"code"),Ux(85,"--color-icon-error"),ng()(),wl(86,"td"),Ux(87,"Cor do \xEDcone no estado error"),ng(),wl(88,"td")(89,"code"),Ux(90,"var(--color-feedback-negative-dark)"),ng()()(),wl(91,"tr")(92,"td")(93,"strong"),Ux(94,"po-progress-bar"),ng()(),Ul(95,"td")(96,"td"),ng(),wl(97,"tr")(98,"td")(99,"code"),Ux(100,"--background-color-tray"),ng()(),wl(101,"td"),Ux(102,"Cor do background"),ng(),wl(103,"td")(104,"code"),Ux(105,"var(--color-brand-01-lightest)"),ng()()(),wl(106,"tr")(107,"td")(108,"code"),Ux(109,"--background-color-indicator"),ng()(),wl(110,"td"),Ux(111,"Cor do background do indicador"),ng(),wl(112,"td")(113,"code"),Ux(114,"var(--color-action-default)"),ng()()(),wl(115,"tr")(116,"td")(117,"strong"),Ux(118,"po-progress-circle"),ng()(),Ul(119,"td")(120,"td"),ng(),wl(121,"tr")(122,"td")(123,"code"),Ux(124,"--background-color-tray"),ng()(),wl(125,"td"),Ux(126,"Cor do background"),ng(),wl(127,"td")(128,"code"),Ux(129,"var(--color-brand-01-lightest)"),ng()()(),wl(130,"tr")(131,"td")(132,"code"),Ux(133,"--background-color-indicator"),ng()(),wl(134,"td"),Ux(135,"Cor do background do indicador"),ng(),wl(136,"td")(137,"code"),Ux(138,"var(--color-action-default)"),ng()()()()()(),wl(139,"div",7)(140,"h4",8),Ux(141,"Seletor"),ng(),wl(142,"pre",9),Ux(143,`<po-progress
    p-aria-label="string"
    (p-cancel)="EventEmitter"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-disabled-cancel="boolean"
    p-indeterminate="boolean"
    p-info="string"
    p-info-icon="string | TemplateRef<void>"
    p-radius="number"
    (p-retry)="EventEmitter"
    p-shape="string"
    p-show-percentage="boolean"
    p-size="string"
    p-size-actions="string"
    p-status="PoProgressStatus"
    p-text="string"
    p-value="number" >
</po-progress>
`),ng()(),wl(144,"h4",10),Ux(145,"Propriedades"),ng(),wl(146,"table",11)(147,"tr",12)(148,"th",13),Ux(149,"Nome"),ng(),wl(150,"th",13),Ux(151,"Tipo"),ng(),wl(152,"th",13),Ux(153,"Padr\xE3o"),ng(),wl(154,"th",13),Ux(155,"Descri\xE7\xE3o"),ng()(),wl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),Ux(160," p-aria-label"),Ul(161,"br"),ng()()(),wl(162,"td",18)(163,"code",19),Ux(164,"string"),ng()(),wl(165,"td",20),Ux(166,"-"),ng(),wl(167,"td",21)(168,"em")(169,"strong"),Ux(170,"(opcional)"),ng()(),wl(171,"p"),Ux(172,"Define um nome acess\xEDvel para o elemento com "),wl(173,"code"),Ux(174,'role="progressbar"'),ng(),Ux(175,"."),ng(),wl(176,"p"),Ux(177,"Quando n\xE3o informado, o componente utiliza o valor de "),wl(178,"code"),Ux(179,"p-text"),ng(),Ux(180," como alternativa, se dispon\xEDvel."),ng()()(),wl(181,"tr",14)(182,"td",15)(183,"div",22)(184,"span",23),Ux(185," (p-cancel)"),Ul(186,"br"),ng()()(),wl(187,"td",18)(188,"code",24),Ux(189,"EventEmitter"),ng()(),wl(190,"td",20),Ux(191,"-"),ng(),wl(192,"td",21)(193,"em")(194,"strong"),Ux(195,"(opcional)"),ng()(),wl(196,"p"),Ux(197,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),ng(),wl(198,"p"),Ux(199,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),ng(),wl(200,"blockquote")(201,"p"),Ux(202,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),wl(203,"code"),Ux(204,"PoProgressStatus.Success"),ng(),Ux(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),ng()(),wl(206,"blockquote")(207,"p"),Ux(208,"N\xE3o compat\xEDvel com "),wl(209,"code"),Ux(210,'p-shape="circle"'),ng(),Ux(211,"."),ng()()()(),wl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),Ux(216," p-custom-action"),Ul(217,"br"),ng()()(),wl(218,"td",18)(219,"code",25),Ux(220,"PoProgressAction"),ng()(),wl(221,"td",20),Ux(222,"-"),ng(),wl(223,"td",21)(224,"em")(225,"strong"),Ux(226,"(opcional)"),ng()(),wl(227,"p"),Ux(228,"Permite definir uma a\xE7\xE3o personalizada no componente "),wl(229,"code"),Ux(230,"po-progress"),ng(),Ux(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),wl(232,"strong"),Ux(233,"PoProgressAction"),ng(),Ux(234,", possibilitando configurar:"),ng(),wl(235,"ul")(236,"li")(237,"strong")(238,"code"),Ux(239,"label"),ng()(),Ux(240,": Texto exibido no bot\xE3o (opcional)."),ng(),wl(241,"li")(242,"strong")(243,"code"),Ux(244,"icon"),ng()(),Ux(245,": \xCDcone exibido no bot\xE3o (opcional)."),ng(),wl(246,"li")(247,"strong")(248,"code"),Ux(249,"type"),ng()(),Ux(250,": Tipo do bot\xE3o ("),wl(251,"code"),Ux(252,"default"),ng(),Ux(253," ou "),wl(254,"code"),Ux(255,"danger"),ng(),Ux(256,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),ng(),wl(257,"li")(258,"strong")(259,"code"),Ux(260,"disabled"),ng()(),Ux(261,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),ng(),wl(262,"li")(263,"strong")(264,"code"),Ux(265,"visible"),ng()(),Ux(266,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),ng()(),wl(267,"blockquote")(268,"p"),Ux(269,"N\xE3o compat\xEDvel com "),wl(270,"code"),Ux(271,'p-shape="circle"'),ng(),Ux(272,"."),ng()()()(),wl(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),Ux(277," (p-custom-action-click)"),Ul(278,"br"),ng()()(),wl(279,"td",18)(280,"code",24),Ux(281,"EventEmitter"),ng()(),wl(282,"td",20),Ux(283,"-"),ng(),wl(284,"td",21)(285,"em")(286,"strong"),Ux(287,"(opcional)"),ng()(),wl(288,"p"),Ux(289,"Evento emitido quando o bot\xE3o definido em "),wl(290,"code"),Ux(291,"p-custom-action"),ng(),Ux(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),ng(),wl(293,"blockquote")(294,"p"),Ux(295,"N\xE3o compat\xEDvel com "),wl(296,"code"),Ux(297,'p-shape="circle"'),ng(),Ux(298,"."),ng()()()(),wl(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),Ux(303," p-disabled-cancel"),Ul(304,"br"),ng()()(),wl(305,"td",18)(306,"code",26),Ux(307,"boolean"),ng()(),wl(308,"td",20)(309,"p")(310,"code"),Ux(311,"false"),ng()()(),wl(312,"td",21)(313,"em")(314,"strong"),Ux(315,"(opcional)"),ng()(),wl(316,"p"),Ux(317,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),ng(),wl(318,"blockquote")(319,"p"),Ux(320,"Se nenhuma fun\xE7\xE3o for passada para o evento "),wl(321,"code"),Ux(322,"(p-cancel)"),ng(),Ux(323," ou a barra de progresso estiver com o status "),wl(324,"code"),Ux(325,"PoProgressStatus.Success"),ng(),Ux(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),ng()(),wl(327,"blockquote")(328,"p"),Ux(329,"N\xE3o compat\xEDvel com "),wl(330,"code"),Ux(331,'p-shape="circle"'),ng(),Ux(332,"."),ng()()()(),wl(333,"tr",14)(334,"td",15)(335,"div",16)(336,"span",17),Ux(337," p-indeterminate"),Ul(338,"br"),ng()()(),wl(339,"td",18)(340,"code",26),Ux(341,"boolean"),ng()(),wl(342,"td",20)(343,"p")(344,"code"),Ux(345,"false"),ng()()(),wl(346,"td",21)(347,"em")(348,"strong"),Ux(349,"(opcional)"),ng()(),wl(350,"p"),Ux(351,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),ng(),wl(352,"p"),Ux(353,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),ng(),wl(354,"blockquote")(355,"p"),Ux(356,"Caso esta propriedade e a "),wl(357,"code"),Ux(358,"p-value"),ng(),Ux(359," seja habilitada, a propriedade "),wl(360,"code"),Ux(361,"p-value"),ng(),Ux(362," ser\xE1 ignorada."),ng()()()(),wl(363,"tr",14)(364,"td",15)(365,"div",16)(366,"span",17),Ux(367," p-info"),Ul(368,"br"),ng()()(),wl(369,"td",18)(370,"code",19),Ux(371,"string"),ng()(),wl(372,"td",20),Ux(373,"-"),ng(),wl(374,"td",21)(375,"em")(376,"strong"),Ux(377,"(opcional)"),ng()(),wl(378,"p"),Ux(379,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),ng(),wl(380,"blockquote")(381,"p"),Ux(382,"N\xE3o compat\xEDvel com "),wl(383,"code"),Ux(384,'p-shape="circle"'),ng(),Ux(385,"."),ng()()()(),wl(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),Ux(390," p-info-icon"),Ul(391,"br"),ng()()(),wl(392,"td",18)(393,"code",19),Ux(394,"string "),ng(),wl(395,"code",27),Ux(396," TemplateRef<void>"),ng()(),wl(397,"td",20),Ux(398,"-"),ng(),wl(399,"td",21)(400,"em")(401,"strong"),Ux(402,"(opcional)"),ng()(),wl(403,"p"),Ux(404,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),wl(405,"code"),Ux(406,"p-info"),ng(),Ux(407,"."),ng(),wl(408,"p"),Ux(409,"Exemplo: "),wl(410,"code"),Ux(411,"an an-check"),ng(),Ux(412,"."),ng(),wl(413,"blockquote")(414,"p"),Ux(415,"N\xE3o compat\xEDvel com "),wl(416,"code"),Ux(417,'p-shape="circle"'),ng(),Ux(418,"."),ng()()()(),wl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Ux(423," p-radius"),Ul(424,"br"),ng()()(),wl(425,"td",18)(426,"code",28),Ux(427,"number"),ng()(),wl(428,"td",20)(429,"p")(430,"code"),Ux(431,"45"),ng(),Ux(432," (autom\xE1tico)"),ng()(),wl(433,"td",21)(434,"em")(435,"strong"),Ux(436,"(opcional)"),ng()(),wl(437,"p"),Ux(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),wl(439,"code"),Ux(440,'p-shape="circle"'),ng(),Ux(441,"."),ng(),wl(442,"blockquote")(443,"p"),Ux(444,"O valor m\xEDnimo aceito \xE9 "),wl(445,"strong"),Ux(446,"24"),ng(),Ux(447,"."),ng()(),wl(448,"blockquote")(449,"p"),Ux(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),wl(451,"strong"),Ux(452,"45"),ng(),Ux(453," ser\xE1 utilizado."),ng()(),wl(454,"blockquote")(455,"p"),Ux(456,"N\xE3o compat\xEDvel com "),wl(457,"code"),Ux(458,'p-shape="bar"'),ng(),Ux(459,"."),ng()()()(),wl(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),Ux(464," (p-retry)"),Ul(465,"br"),ng()()(),wl(466,"td",18)(467,"code",24),Ux(468,"EventEmitter"),ng()(),wl(469,"td",20),Ux(470,"-"),ng(),wl(471,"td",21)(472,"em")(473,"strong"),Ux(474,"(opcional)"),ng()(),wl(475,"p"),Ux(476,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),ng(),wl(477,"blockquote")(478,"p"),Ux(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),wl(480,"code"),Ux(481,"PoProgressStatus.Error"),ng(),Ux(482,"."),ng()(),wl(483,"blockquote")(484,"p"),Ux(485,"N\xE3o compat\xEDvel com "),wl(486,"code"),Ux(487,'p-shape="circle"'),ng(),Ux(488,"."),ng()()()(),wl(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),Ux(493," p-shape"),Ul(494,"br"),ng()()(),wl(495,"td",18)(496,"code",19),Ux(497,"string"),ng()(),wl(498,"td",20)(499,"p")(500,"code"),Ux(501,"bar"),ng()()(),wl(502,"td",21)(503,"em")(504,"strong"),Ux(505,"(opcional)"),ng()(),wl(506,"p"),Ux(507,"Define o formato visual do componente de progresso."),ng(),wl(508,"p"),Ux(509,"Valores v\xE1lidos:"),ng(),wl(510,"ul")(511,"li")(512,"code"),Ux(513,"bar"),ng(),Ux(514,": exibe o progresso em formato de barra."),ng(),wl(515,"li")(516,"code"),Ux(517,"circle"),ng(),Ux(518,": exibe o progresso em formato circular."),ng()()()(),wl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),Ux(523," p-show-percentage"),Ul(524,"br"),ng()()(),wl(525,"td",18)(526,"code",26),Ux(527,"boolean"),ng()(),wl(528,"td",20)(529,"p")(530,"code"),Ux(531,"false"),ng()()(),wl(532,"td",21)(533,"em")(534,"strong"),Ux(535,"(opcional)"),ng()(),wl(536,"p"),Ux(537,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),ng(),wl(538,"blockquote")(539,"p"),Ux(540,"Se utilizada no "),wl(541,"code"),Ux(542,'p-shape="circle"'),ng(),Ux(543," e o status estiver como "),wl(544,"code"),Ux(545,"error"),ng(),Ux(546,", a porcentagem n\xE3o ser\xE1 exibida."),ng()()()(),wl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Ux(551," p-size"),Ul(552,"br"),ng()()(),wl(553,"td",18)(554,"code",19),Ux(555,"string"),ng()(),wl(556,"td",20)(557,"p")(558,"code"),Ux(559,"large"),ng()()(),wl(560,"td",21)(561,"em")(562,"strong"),Ux(563,"(opcional)"),ng()(),wl(564,"p"),Ux(565,"Define a expessura da barra de progresso."),ng(),wl(566,"p"),Ux(567,"Valores v\xE1lidos:"),ng(),wl(568,"ul")(569,"li"),Ux(570,"medium"),ng(),wl(571,"li"),Ux(572,"large"),ng()()()(),wl(573,"tr",14)(574,"td",15)(575,"div",16)(576,"span",17),Ux(577," p-size-actions"),Ul(578,"br"),ng()()(),wl(579,"td",18)(580,"code",19),Ux(581,"string"),ng()(),wl(582,"td",20)(583,"p")(584,"code"),Ux(585,"medium"),ng()()(),wl(586,"td",21)(587,"em")(588,"strong"),Ux(589,"(opcional)"),ng()(),wl(590,"p"),Ux(591,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),wl(592,"code"),Ux(593,"p-size"),ng(),Ux(594,":"),ng(),wl(595,"ul")(596,"li")(597,"code"),Ux(598,"small"),ng(),Ux(599,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(600,"li")(601,"code"),Ux(602,"medium"),ng(),Ux(603,": aplica a medida medium de cada componente."),ng()(),wl(604,"blockquote")(605,"p"),Ux(606,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(607,"code"),Ux(608,"medium"),ng(),Ux(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(610,"a",29),Ux(611,"po-theme"),ng(),Ux(612,"."),ng()(),wl(613,"blockquote")(614,"p"),Ux(615,"N\xE3o compat\xEDvel com "),wl(616,"code"),Ux(617,'p-shape="circle"'),ng(),Ux(618,"."),ng()()()(),wl(619,"tr",14)(620,"td",15)(621,"div",16)(622,"span",17),Ux(623," p-status"),Ul(624,"br"),ng()()(),wl(625,"td",18)(626,"code",30),Ux(627,"PoProgressStatus"),ng()(),wl(628,"td",20)(629,"p")(630,"code"),Ux(631,"PoProgressStatus.Default"),ng()()(),wl(632,"td",21)(633,"em")(634,"strong"),Ux(635,"(opcional)"),ng()(),wl(636,"p"),Ux(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),ng()()(),wl(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),Ux(642," p-text"),Ul(643,"br"),ng()()(),wl(644,"td",18)(645,"code",19),Ux(646,"string"),ng()(),wl(647,"td",20),Ux(648,"-"),ng(),wl(649,"td",21)(650,"em")(651,"strong"),Ux(652,"(opcional)"),ng()(),wl(653,"p"),Ux(654,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),ng(),wl(655,"blockquote")(656,"p"),Ux(657,"N\xE3o compat\xEDvel com "),wl(658,"code"),Ux(659,'p-shape="circle"'),ng(),Ux(660,"."),ng()()()(),wl(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),Ux(665," p-value"),Ul(666,"br"),ng()()(),wl(667,"td",18)(668,"code",28),Ux(669,"number"),ng()(),wl(670,"td",20)(671,"p")(672,"code"),Ux(673,"0"),ng()()(),wl(674,"td",21)(675,"em")(676,"strong"),Ux(677,"(opcional)"),ng()(),wl(678,"p"),Ux(679,"Valor que representar\xE1 o progresso."),ng(),wl(680,"blockquote")(681,"p"),Ux(682,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),wl(683,"code"),Ux(684,"0"),ng(),Ux(685," \xE0 "),wl(686,"code"),Ux(687,"100"),ng(),Ux(688,"."),ng()()()()(),wl(689,"h3"),Ux(690,"Interfaces"),ng(),wl(691,"h4",31)(692,"code",5),Ux(693,"PoProgressAction"),ng()(),wl(694,"div",2)(695,"p"),Ux(696,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),ng()(),wl(697,"h4",10),Ux(698,"Propriedades"),ng(),wl(699,"table",11)(700,"tr",12)(701,"th",13),Ux(702,"Nome"),ng(),wl(703,"th",13),Ux(704,"Tipo"),ng(),wl(705,"th",13),Ux(706,"Descri\xE7\xE3o"),ng()(),wl(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),Ux(711," disabled"),Ul(712,"br"),ng()()(),wl(713,"td",18)(714,"code",26),Ux(715,"boolean "),ng(),wl(716,"code",32),Ux(717," Function"),ng()(),wl(718,"td",21)(719,"em")(720,"strong"),Ux(721,"(opcional)"),ng()(),wl(722,"p"),Ux(723,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),ng(),wl(724,"p"),Ux(725,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),ng()()(),wl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),Ux(730," icon"),Ul(731,"br"),ng()()(),wl(732,"td",18)(733,"code",19),Ux(734,"string "),ng(),wl(735,"code",27),Ux(736," TemplateRef<void>"),ng()(),wl(737,"td",21)(738,"em")(739,"strong"),Ux(740,"(opcional)"),ng()(),wl(741,"p"),Ux(742,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(743,"p"),Ux(744,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(745,"a",33),Ux(746,"Biblioteca de \xEDcones"),ng(),Ux(747,". conforme exemplo abaixo:"),ng(),wl(748,"pre")(749,"code"),Ux(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),ng()(),wl(751,"p"),Ux(752,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),ng(),wl(753,"pre")(754,"code"),Ux(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),ng()(),wl(756,"p"),Ux(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(758,"code"),Ux(759,"TemplateRef"),ng(),Ux(760,`, conforme exemplo abaixo:
component.html:`),ng(),wl(761,"pre")(762,"code"),Ux(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),ng()(),wl(764,"p"),Ux(765,"component.ts:"),ng(),wl(766,"pre")(767,"code"),Ux(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),ng()()()(),wl(769,"tr",14)(770,"td",15)(771,"div",16)(772,"span",17),Ux(773," label"),Ul(774,"br"),ng()()(),wl(775,"td",18)(776,"code",19),Ux(777,"string"),ng()(),wl(778,"td",21)(779,"em")(780,"strong"),Ux(781,"(opcional)"),ng()(),wl(782,"p"),Ux(783,"R\xF3tulo da a\xE7\xE3o."),ng()()(),wl(784,"tr",14)(785,"td",15)(786,"div",16)(787,"span",17),Ux(788," type"),Ul(789,"br"),ng()()(),wl(790,"td",18)(791,"code",19),Ux(792,"string"),ng()(),wl(793,"td",21)(794,"em")(795,"strong"),Ux(796,"(opcional)"),ng()(),wl(797,"p"),Ux(798,"Define a cor do item, sendo "),wl(799,"code"),Ux(800,"default"),ng(),Ux(801," o padr\xE3o."),ng(),wl(802,"p"),Ux(803,"Valores v\xE1lidos:"),ng(),wl(804,"ul")(805,"li")(806,"code"),Ux(807,"default"),ng()(),wl(808,"li")(809,"code"),Ux(810,"danger"),ng(),Ux(811," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),ng()()()(),wl(812,"tr",14)(813,"td",15)(814,"div",16)(815,"span",17),Ux(816," visible"),Ul(817,"br"),ng()()(),wl(818,"td",18)(819,"code",26),Ux(820,"boolean "),ng(),wl(821,"code",32),Ux(822," Function"),ng()(),wl(823,"td",21)(824,"em")(825,"strong"),Ux(826,"(opcional)"),ng()(),wl(827,"p"),Ux(828,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),ng(),wl(829,"blockquote")(830,"p"),Ux(831,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),ng()(),wl(832,"p"),Ux(833,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),ng(),wl(834,"ul")(835,"li")(836,"p"),Ux(837,"Fun\xE7\xE3o que deve retornar um booleano."),ng()(),wl(838,"li")(839,"p"),Ux(840,"Informar diretamente um valor booleano."),ng()()()()()(),wl(841,"h3"),Ux(842,"Enums"),ng(),wl(843,"h4",4)(844,"code",5),Ux(845,"PoProgressShape"),ng()(),wl(846,"div",2)(847,"p"),Ux(848,"Enum "),wl(849,"code"),Ux(850,"PoProgressShape"),ng(),Ux(851," para definir o formato visual do componente de progresso."),ng()(),wl(852,"h4",10),Ux(853,"Propriedades"),ng(),wl(854,"table",11)(855,"tr",12)(856,"th",13),Ux(857,"Nome"),ng(),wl(858,"th",13),Ux(859,"Descri\xE7\xE3o"),ng()(),wl(860,"tr",14)(861,"td",15)(862,"div",16)(863,"span",17),Ux(864," bar"),Ul(865,"br"),ng()()(),wl(866,"td",21)(867,"p"),Ux(868,"Formato barra de progresso (padr\xE3o)."),ng()()(),wl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),Ux(873," circle"),Ul(874,"br"),ng()()(),wl(875,"td",21)(876,"p"),Ux(877,"Formato circular de progresso."),ng()()()(),wl(878,"h4",4)(879,"code",5),Ux(880,"PoProgressSize"),ng()(),wl(881,"div",2)(882,"p"),Ux(883,"Enum para configurar a expessura ("),wl(884,"code"),Ux(885,"p-size"),ng(),Ux(886,") da barra de progresso do componente."),ng()(),wl(887,"h4",10),Ux(888,"Propriedades"),ng(),wl(889,"table",11)(890,"tr",12)(891,"th",13),Ux(892,"Nome"),ng(),wl(893,"th",13),Ux(894,"Descri\xE7\xE3o"),ng()(),wl(895,"tr",14)(896,"td",15)(897,"div",16)(898,"span",17),Ux(899," medium"),Ul(900,"br"),ng()()(),wl(901,"td",21)(902,"p"),Ux(903,"Tamanho m\xE9dio com 4px."),ng()()(),wl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),Ux(908," large"),Ul(909,"br"),ng()()(),wl(910,"td",21)(911,"p"),Ux(912,"Tamanho grande com 8px."),ng()()()(),wl(913,"h4",4)(914,"code",5),Ux(915,"PoProgressStatus"),ng()(),wl(916,"div",2)(917,"p"),Ux(918,"Enum "),wl(919,"code"),Ux(920,"PoProgressStatus"),ng(),Ux(921," para os status de barra de progresso."),ng()(),wl(922,"h4",10),Ux(923,"Propriedades"),ng(),wl(924,"table",11)(925,"tr",12)(926,"th",13),Ux(927,"Nome"),ng(),wl(928,"th",13),Ux(929,"Descri\xE7\xE3o"),ng()(),wl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),Ux(934," Default"),Ul(935,"br"),ng()()(),wl(936,"td",21)(937,"p"),Ux(938,"Define o status "),wl(939,"code"),Ux(940,"default"),ng(),Ux(941," para a barra de progresso."),ng()()(),wl(942,"tr",14)(943,"td",15)(944,"div",16)(945,"span",17),Ux(946," Error"),Ul(947,"br"),ng()()(),wl(948,"td",21)(949,"p"),Ux(950,"Define o status de "),wl(951,"code"),Ux(952,"error"),ng(),Ux(953," para a barra de progresso."),ng()()(),wl(954,"tr",14)(955,"td",15)(956,"div",16)(957,"span",17),Ux(958," Success"),Ul(959,"br"),ng()()(),wl(960,"td",21)(961,"p"),Ux(962,"Define o status de "),wl(963,"code"),Ux(964,"success"),ng(),Ux(965," para a barra de progresso."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var Me=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-progress-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view")(8,"sample-po-progress-circle-view"),ng()()()),l&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,xe,Ce,we,_e,De],encapsulation:2})}return o})();var Xe=[{path:"",component:Me}],Te=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[vL.forChild(Xe),vL]})}return o})();var Ft=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[u5,Te]})}return o})();export{Ft as DocPoProgressModule};