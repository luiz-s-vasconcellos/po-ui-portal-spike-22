import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,bt as Pk,ds as Ca,dt as X0,du as hh,dv as Lue,ba as bNe,H as Sl,M as Wl,O as sg,J as Jx,z as Vp,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,a1 as ht,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,cQ as Rk,cR as Tk,b0 as Qt,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,aJ as Ghe,bH as E3,c9 as Qhe,aB as Ex,aq as ux,aM as Ew,aN as JA,at as dx,aO as Dw,aP as t0,b1 as mv,d4 as Uz,a3 as pNe,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic"]],standalone:false,decls:8,vars:3,consts:[["p-title","Bar"],[3,"p-value"],[1,"po-mt-1"],["p-title","Circle",1,"po-mt-2"],["p-shape","circle",3,"p-value","p-radius"]],template:function(l,i){l&1&&(Sl(0,"div")(1,"po-widget",0),Wl(2,"po-progress",1),sg()(),Sl(3,"div",2)(4,"po-widget",3),Wl(5,"po-progress",4),Sl(6,"div",2),Jx(7,"Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),sg()()()),l&2&&(Vp(2),tw("p-value",25),Vp(3),tw("p-value",25)("p-radius",24));},dependencies:[Lue,bNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Progress Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-progress-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return o})();function Oe(o,Q){if(o&1&&(Sl(0,"po-widget",3),Wl(1,"po-info",15),sg()),o&2){let r=Tx();Vp(),tw("p-value",r.event);}}function Ae(o,Q){if(o&1&&(Sl(0,"div")(1,"po-widget",21)(2,"form",22),Wl(3,"po-input",23),JA(),Wl(4,"po-select",24),JA(),Wl(5,"po-select",25),JA(),Wl(6,"po-switch",26),JA(),Wl(7,"po-switch",27),JA(),sg()()()),o&2){let r=Tx(2);Vp(2),tw("formGroup",r.actionForm),Vp(),t0(),Vp(),tw("p-options",r.iconOptions),t0(),Vp(),tw("p-options",r.typeOptions),t0(),Vp(),t0(),Vp(),t0();}}function ze(o,Q){if(o&1){let r=Ex();Sl(0,"po-select",16),Ew("ngModelChange",function(i){Xy(r);let m=Tx();return tN(m.infoIcon,i)||(m.infoIcon=i),Qy(i)}),sg(),JA(),Sl(1,"po-input",17),Ew("ngModelChange",function(i){Xy(r);let m=Tx();return tN(m.text,i)||(m.text=i),Qy(i)}),sg(),JA(),Sl(2,"po-input",18),Ew("ngModelChange",function(i){Xy(r);let m=Tx();return tN(m.info,i)||(m.info=i),Qy(i)}),sg(),JA(),Sl(3,"po-radio-group",19),Ew("ngModelChange",function(i){Xy(r);let m=Tx();return tN(m.sizeActions,i)||(m.sizeActions=i),Qy(i)}),sg(),JA(),Sl(4,"po-switch",20),Ew("ngModelChange",function(i){Xy(r);let m=Tx();return tN(m.showAction,i)||(m.showAction=i),Qy(i)}),sg(),JA(),ux(5,Ae,8,3,"div");}if(o&2){let r=Tx();Dw("ngModel",r.infoIcon),tw("p-options",r.infoIconsOptions),t0(),Vp(),Dw("ngModel",r.text),t0(),Vp(),Dw("ngModel",r.info),t0(),Vp(),Dw("ngModel",r.sizeActions),tw("p-options",r.sizeActionsOptions),t0(),Vp(),Dw("ngModel",r.showAction),t0(),Vp(),dx(r.showAction?5:-1);}}function Be(o,Q){if(o&1){let r=Ex();Sl(0,"po-number",28),Ew("ngModelChange",function(i){Xy(r);let m=Tx();return tN(m.radius,i)||(m.radius=i),Qy(i)}),sg(),JA();}if(o&2){let r=Tx();Dw("ngModel",r.radius),t0();}}var he=(()=>{class o{fb=f(Pk);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=Ca.Default;size=X0.large;shape=hh.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:Ca.Default},{label:"Success",value:Ca.Success},{label:"Error",value:Ca.Error}];sizeOptions=[{label:"Medium",value:X0.medium},{label:"Large",value:X0.large}];shapeOptions=[{label:"Bar",value:hh.bar},{label:"Circle",value:hh.circle}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];allPropertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm();}onShapeChange(r){this.restore(r),r==="circle"?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!=="disabledCancel"):this.propertiesOptions=[...this.allPropertiesOptions];}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r);});}updateAction(r){this.action=r;}onEvent(r){this.event=r;}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=false,this.indeterminate=false,this.showPercentage=false,this.status=Ca.Default,this.text=void 0,this.value=void 0,this.size=X0.large,this.radius=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.showAction=false,this.properties=[],this.sizeActions="medium",r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=hh.bar);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs"]],standalone:false,decls:17,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[1,"sample-progress-grid"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-shape","p-radius","p-size-actions","p-custom-action"],["p-title","Events"],["p-title","Properties"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],["name","shape","p-label","Shape",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mt-2"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12","po-mt-2",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],[3,"p-value"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-mb-2",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let m=Ex();Sl(0,"div",1)(1,"po-progress",2),ht("p-custom-action-click",function(){return i.onEvent("p-custom-action-click")})("p-cancel",function(){return i.onEvent("p-cancel")})("p-retry",function(){return i.onEvent("p-retry")}),sg(),ux(2,Oe,2,1,"po-widget",3),Sl(3,"po-widget",4)(4,"form",null,0)(6,"div",5)(7,"po-radio-group",6),Ew("ngModelChange",function(d){return Xy(m),tN(i.shape,d)||(i.shape=d),Qy(d)}),ht("p-change",function(d){return i.onShapeChange(d)}),sg(),JA(),sg(),Sl(8,"div",7)(9,"po-number",8),Ew("ngModelChange",function(d){return Xy(m),tN(i.value,d)||(i.value=d),Qy(d)}),sg(),JA(),Sl(10,"po-select",9),Ew("ngModelChange",function(d){return Xy(m),tN(i.size,d)||(i.size=d),Qy(d)}),sg(),JA(),Sl(11,"po-select",10),Ew("ngModelChange",function(d){return Xy(m),tN(i.status,d)||(i.status=d),Qy(d)}),sg(),JA(),ux(12,ze,6,8),ux(13,Be,1,1,"po-number",11),Sl(14,"po-checkbox-group",12),Ew("ngModelChange",function(d){return Xy(m),tN(i.properties,d)||(i.properties=d),Qy(d)}),sg(),JA(),sg()()(),Sl(15,"div",13)(16,"po-button",14),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Vp(),tw("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-shape",i.shape)("p-radius",i.radius)("p-size-actions",i.sizeActions)("p-custom-action",i.action),Vp(),dx(i.shape==="bar"?2:-1),Vp(5),Dw("ngModel",i.shape),tw("p-options",i.shapeOptions),t0(),Vp(2),Dw("ngModel",i.value),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0(),Vp(),Dw("ngModel",i.status),tw("p-options",i.statusOptions),t0(),Vp(),dx(i.shape==="bar"?12:-1),Vp(),dx(i.shape==="circle"?13:-1),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Rk,Tk,Qt,x3,F3,Uhe,Pde,Ghe,E3,Qhe,Lue,bNe],styles:[".sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}"],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Progress Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="sample-progress-grid">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-progress-labs/sample-po-progress-labs.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-progress-labs"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return `${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=true;}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++;},20);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication"]],standalone:false,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),Ew("ngModelChange",function(v){return tN(i.publication,v)||(i.publication=v),v}),sg(),JA(),Wl(3,"po-divider",3)(4,"po-progress",4),sg(),Sl(5,"div",1)(6,"po-button",5),ht("p-click",function(){return i.updatePublication()}),sg()()()),l&2&&(Vp(2),Dw("ngModel",i.publication),t0(),Vp(2),tw("p-value",i.progressBarValue)("p-show-percentage",true),Vp(2),tw("p-disabled",i.buttonDisabled));},dependencies:[K9,Dk,Qt,mv,Uz,pNe,Lue],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Progress - Publication"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Edit publication">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-progress-publication"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,xe],encapsulation:2})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle"]],standalone:false,decls:99,vars:2,consts:[[1,"container"],["p-title","Regra de Adequa\xE7\xE3o de Layout"],[1,"line-height"],[1,"po-font-text-large-bold"],[1,"po-text-large"],["p-title","Exemplo B\xE1sico - Radius M\xEDnimo (24px)"],[1,"po-row","po-align-items-center"],[1,"po-md-6","po-lg-4","po-center"],["p-shape","circle","p-show-percentage","true","p-radius","24",3,"p-value"],[1,"po-md-6","po-lg-8"],[1,"po-font-text"],["p-title","Com Radius Maior (60px)"],["p-shape","circle","p-show-percentage","true","p-radius","60",3,"p-value"],["p-title","Com Status Error (Radius 24px)"],["p-shape","circle","p-value","50","p-status","error","p-radius","24"],["p-title","Modo Indeterminado"],["p-shape","circle","p-indeterminate","true","p-radius","30"],["p-title","Compara\xE7\xE3o Visual - Diferentes Status"],[1,"po-row","row"],[1,"po-md-3","po-center","items"],[1,"po-font-text-large-bold","po-mb-1"],["p-shape","circle","p-value","100","p-status","success","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","50","p-status","warning","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","0","p-status","error","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","75","p-show-percentage","true","p-radius","25"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"p",3),Jx(4,"\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),sg(),Sl(5,"p",4),Jx(6," O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos. "),sg()()(),Sl(7,"po-widget",5)(8,"div",6)(9,"div",7),Wl(10,"po-progress",8),sg(),Sl(11,"div",9)(12,"p")(13,"strong"),Jx(14,"Configura\xE7\xE3o:"),sg()(),Sl(15,"ul")(16,"li"),Jx(17,'p-shape="circle"'),sg(),Sl(18,"li"),Jx(19,'p-value="65"'),sg(),Sl(20,"li"),Jx(21,'p-show-percentage="true"'),sg(),Sl(22,"li"),Jx(23,'p-radius="24" (valor m\xEDnimo permitido)'),sg()(),Sl(24,"p",10),Jx(25,"A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo."),sg()()()(),Sl(26,"po-widget",11)(27,"div",6)(28,"div",7),Wl(29,"po-progress",12),sg(),Sl(30,"div",9)(31,"p")(32,"strong"),Jx(33,"Configura\xE7\xE3o:"),sg()(),Sl(34,"ul")(35,"li"),Jx(36,'p-shape="circle"'),sg(),Sl(37,"li"),Jx(38,'p-value="65"'),sg(),Sl(39,"li"),Jx(40,'p-show-percentage="true"'),sg(),Sl(41,"li"),Jx(42,'p-radius="60" (valor maior)'),sg()(),Sl(43,"p",10),Jx(44," Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o. "),sg()()()(),Sl(45,"po-widget",13)(46,"div",6)(47,"div",7),Wl(48,"po-progress",14),sg(),Sl(49,"div",9)(50,"p")(51,"strong"),Jx(52,"Configura\xE7\xE3o:"),sg()(),Sl(53,"ul")(54,"li"),Jx(55,'p-shape="circle"'),sg(),Sl(56,"li"),Jx(57,'p-value="50"'),sg(),Sl(58,"li"),Jx(59,'p-status="error"'),sg(),Sl(60,"li"),Jx(61,'p-radius="24" (valor m\xEDnimo)'),sg()(),Sl(62,"p",10),Jx(63,"\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o."),sg()()()(),Sl(64,"po-widget",15)(65,"div",6)(66,"div",7),Wl(67,"po-progress",16),sg(),Sl(68,"div",9)(69,"p")(70,"strong"),Jx(71,"Configura\xE7\xE3o:"),sg()(),Sl(72,"ul")(73,"li"),Jx(74,'p-shape="circle"'),sg(),Sl(75,"li"),Jx(76,'p-indeterminate="true"'),sg(),Sl(77,"li"),Jx(78,'p-radius="30"'),sg()(),Sl(79,"p",10),Jx(80,"Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento."),sg()()()(),Sl(81,"po-widget",17)(82,"div",18)(83,"div",19)(84,"p",20),Jx(85,"Success"),sg(),Wl(86,"po-progress",21),sg(),Sl(87,"div",19)(88,"p",20),Jx(89,"Warning"),sg(),Wl(90,"po-progress",22),sg(),Sl(91,"div",19)(92,"p",20),Jx(93,"Error"),sg(),Wl(94,"po-progress",23),sg(),Sl(95,"div",19)(96,"p",20),Jx(97,"Default"),sg(),Wl(98,"po-progress",24),sg()()()()),l&2&&(Vp(10),tw("p-value",i.value),Vp(19),tw("p-value",i.value));},dependencies:[Lue,bNe],styles:[".container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Progress Circle"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-progress-circle/sample-po-progress-circle.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="container">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-progress-circle/sample-po-progress-circle.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-progress-circle/sample-po-progress-circle.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.container {
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
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-progress-circle"),sg(),Wl(29,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Re,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ce],encapsulation:2})}return o})();var we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-doc"]],standalone:false,decls:966,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoProgressModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-progress"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoProgressComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),sg(),Sl(18,"p"),Jx(19,"Este componente pode ser utilizado no "),Sl(20,"em"),Jx(21,"upload"),sg(),Jx(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),sg(),Sl(23,"h4"),Jx(24,"Tokens customiz\xE1veis"),sg(),Sl(25,"p"),Jx(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(27,"blockquote")(28,"p"),Jx(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(30,"a",6),Jx(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(32,"."),sg()(),Sl(33,"table")(34,"thead")(35,"tr")(36,"th"),Jx(37,"Propriedade"),sg(),Sl(38,"th"),Jx(39,"Descri\xE7\xE3o"),sg(),Sl(40,"th"),Jx(41,"Valor Padr\xE3o"),sg()()(),Sl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),Jx(46,"Default Values"),sg()(),Wl(47,"td")(48,"td"),sg(),Sl(49,"tr")(50,"td")(51,"code"),Jx(52,"--font-family"),sg()(),Sl(53,"td"),Jx(54,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(55,"td")(56,"code"),Jx(57,"var(--font-family-theme)"),sg()()(),Sl(58,"tr")(59,"td")(60,"code"),Jx(61,"--text-color"),sg()(),Sl(62,"td"),Jx(63,"Cor do texto"),sg(),Sl(64,"td")(65,"code"),Jx(66,"var(--color-neutral-dark-90)"),sg()()(),Sl(67,"tr")(68,"td")(69,"strong"),Jx(70,"Error"),sg()(),Wl(71,"td")(72,"td"),sg(),Sl(73,"tr")(74,"td")(75,"code"),Jx(76,"--text-color-error"),sg()(),Sl(77,"td"),Jx(78,"Cor do texto no estado error"),sg(),Sl(79,"td")(80,"code"),Jx(81,"var(--color-feedback-negative-dark)"),sg()()(),Sl(82,"tr")(83,"td")(84,"code"),Jx(85,"--color-icon-error"),sg()(),Sl(86,"td"),Jx(87,"Cor do \xEDcone no estado error"),sg(),Sl(88,"td")(89,"code"),Jx(90,"var(--color-feedback-negative-dark)"),sg()()(),Sl(91,"tr")(92,"td")(93,"strong"),Jx(94,"po-progress-bar"),sg()(),Wl(95,"td")(96,"td"),sg(),Sl(97,"tr")(98,"td")(99,"code"),Jx(100,"--background-color-tray"),sg()(),Sl(101,"td"),Jx(102,"Cor do background"),sg(),Sl(103,"td")(104,"code"),Jx(105,"var(--color-brand-01-lightest)"),sg()()(),Sl(106,"tr")(107,"td")(108,"code"),Jx(109,"--background-color-indicator"),sg()(),Sl(110,"td"),Jx(111,"Cor do background do indicador"),sg(),Sl(112,"td")(113,"code"),Jx(114,"var(--color-action-default)"),sg()()(),Sl(115,"tr")(116,"td")(117,"strong"),Jx(118,"po-progress-circle"),sg()(),Wl(119,"td")(120,"td"),sg(),Sl(121,"tr")(122,"td")(123,"code"),Jx(124,"--background-color-tray"),sg()(),Sl(125,"td"),Jx(126,"Cor do background"),sg(),Sl(127,"td")(128,"code"),Jx(129,"var(--color-brand-01-lightest)"),sg()()(),Sl(130,"tr")(131,"td")(132,"code"),Jx(133,"--background-color-indicator"),sg()(),Sl(134,"td"),Jx(135,"Cor do background do indicador"),sg(),Sl(136,"td")(137,"code"),Jx(138,"var(--color-action-default)"),sg()()()()()(),Sl(139,"div",7)(140,"h4",8),Jx(141,"Seletor"),sg(),Sl(142,"pre",9),Jx(143,`<po-progress
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
`),sg()(),Sl(144,"h4",10),Jx(145,"Propriedades"),sg(),Sl(146,"table",11)(147,"tr",12)(148,"th",13),Jx(149,"Nome"),sg(),Sl(150,"th",13),Jx(151,"Tipo"),sg(),Sl(152,"th",13),Jx(153,"Padr\xE3o"),sg(),Sl(154,"th",13),Jx(155,"Descri\xE7\xE3o"),sg()(),Sl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),Jx(160," p-aria-label"),Wl(161,"br"),sg()()(),Sl(162,"td",18)(163,"code",19),Jx(164,"string"),sg()(),Sl(165,"td",20),Jx(166,"-"),sg(),Sl(167,"td",21)(168,"em")(169,"strong"),Jx(170,"(opcional)"),sg()(),Sl(171,"p"),Jx(172,"Define um nome acess\xEDvel para o elemento com "),Sl(173,"code"),Jx(174,'role="progressbar"'),sg(),Jx(175,"."),sg(),Sl(176,"p"),Jx(177,"Quando n\xE3o informado, o componente utiliza o valor de "),Sl(178,"code"),Jx(179,"p-text"),sg(),Jx(180," como alternativa, se dispon\xEDvel."),sg()()(),Sl(181,"tr",14)(182,"td",15)(183,"div",22)(184,"span",23),Jx(185," (p-cancel)"),Wl(186,"br"),sg()()(),Sl(187,"td",18)(188,"code",24),Jx(189,"EventEmitter"),sg()(),Sl(190,"td",20),Jx(191,"-"),sg(),Sl(192,"td",21)(193,"em")(194,"strong"),Jx(195,"(opcional)"),sg()(),Sl(196,"p"),Jx(197,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),sg(),Sl(198,"p"),Jx(199,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),sg(),Sl(200,"blockquote")(201,"p"),Jx(202,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),Sl(203,"code"),Jx(204,"PoProgressStatus.Success"),sg(),Jx(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),sg()(),Sl(206,"blockquote")(207,"p"),Jx(208,"N\xE3o compat\xEDvel com "),Sl(209,"code"),Jx(210,'p-shape="circle"'),sg(),Jx(211,"."),sg()()()(),Sl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),Jx(216," p-custom-action"),Wl(217,"br"),sg()()(),Sl(218,"td",18)(219,"code",25),Jx(220,"PoProgressAction"),sg()(),Sl(221,"td",20),Jx(222,"-"),sg(),Sl(223,"td",21)(224,"em")(225,"strong"),Jx(226,"(opcional)"),sg()(),Sl(227,"p"),Jx(228,"Permite definir uma a\xE7\xE3o personalizada no componente "),Sl(229,"code"),Jx(230,"po-progress"),sg(),Jx(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Sl(232,"strong"),Jx(233,"PoProgressAction"),sg(),Jx(234,", possibilitando configurar:"),sg(),Sl(235,"ul")(236,"li")(237,"strong")(238,"code"),Jx(239,"label"),sg()(),Jx(240,": Texto exibido no bot\xE3o (opcional)."),sg(),Sl(241,"li")(242,"strong")(243,"code"),Jx(244,"icon"),sg()(),Jx(245,": \xCDcone exibido no bot\xE3o (opcional)."),sg(),Sl(246,"li")(247,"strong")(248,"code"),Jx(249,"type"),sg()(),Jx(250,": Tipo do bot\xE3o ("),Sl(251,"code"),Jx(252,"default"),sg(),Jx(253," ou "),Sl(254,"code"),Jx(255,"danger"),sg(),Jx(256,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),sg(),Sl(257,"li")(258,"strong")(259,"code"),Jx(260,"disabled"),sg()(),Jx(261,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),sg(),Sl(262,"li")(263,"strong")(264,"code"),Jx(265,"visible"),sg()(),Jx(266,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),sg()(),Sl(267,"blockquote")(268,"p"),Jx(269,"N\xE3o compat\xEDvel com "),Sl(270,"code"),Jx(271,'p-shape="circle"'),sg(),Jx(272,"."),sg()()()(),Sl(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),Jx(277," (p-custom-action-click)"),Wl(278,"br"),sg()()(),Sl(279,"td",18)(280,"code",24),Jx(281,"EventEmitter"),sg()(),Sl(282,"td",20),Jx(283,"-"),sg(),Sl(284,"td",21)(285,"em")(286,"strong"),Jx(287,"(opcional)"),sg()(),Sl(288,"p"),Jx(289,"Evento emitido quando o bot\xE3o definido em "),Sl(290,"code"),Jx(291,"p-custom-action"),sg(),Jx(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),sg(),Sl(293,"blockquote")(294,"p"),Jx(295,"N\xE3o compat\xEDvel com "),Sl(296,"code"),Jx(297,'p-shape="circle"'),sg(),Jx(298,"."),sg()()()(),Sl(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),Jx(303," p-disabled-cancel"),Wl(304,"br"),sg()()(),Sl(305,"td",18)(306,"code",26),Jx(307,"boolean"),sg()(),Sl(308,"td",20)(309,"p")(310,"code"),Jx(311,"false"),sg()()(),Sl(312,"td",21)(313,"em")(314,"strong"),Jx(315,"(opcional)"),sg()(),Sl(316,"p"),Jx(317,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),sg(),Sl(318,"blockquote")(319,"p"),Jx(320,"Se nenhuma fun\xE7\xE3o for passada para o evento "),Sl(321,"code"),Jx(322,"(p-cancel)"),sg(),Jx(323," ou a barra de progresso estiver com o status "),Sl(324,"code"),Jx(325,"PoProgressStatus.Success"),sg(),Jx(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),sg()(),Sl(327,"blockquote")(328,"p"),Jx(329,"N\xE3o compat\xEDvel com "),Sl(330,"code"),Jx(331,'p-shape="circle"'),sg(),Jx(332,"."),sg()()()(),Sl(333,"tr",14)(334,"td",15)(335,"div",16)(336,"span",17),Jx(337," p-indeterminate"),Wl(338,"br"),sg()()(),Sl(339,"td",18)(340,"code",26),Jx(341,"boolean"),sg()(),Sl(342,"td",20)(343,"p")(344,"code"),Jx(345,"false"),sg()()(),Sl(346,"td",21)(347,"em")(348,"strong"),Jx(349,"(opcional)"),sg()(),Sl(350,"p"),Jx(351,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),sg(),Sl(352,"p"),Jx(353,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),sg(),Sl(354,"blockquote")(355,"p"),Jx(356,"Caso esta propriedade e a "),Sl(357,"code"),Jx(358,"p-value"),sg(),Jx(359," seja habilitada, a propriedade "),Sl(360,"code"),Jx(361,"p-value"),sg(),Jx(362," ser\xE1 ignorada."),sg()()()(),Sl(363,"tr",14)(364,"td",15)(365,"div",16)(366,"span",17),Jx(367," p-info"),Wl(368,"br"),sg()()(),Sl(369,"td",18)(370,"code",19),Jx(371,"string"),sg()(),Sl(372,"td",20),Jx(373,"-"),sg(),Sl(374,"td",21)(375,"em")(376,"strong"),Jx(377,"(opcional)"),sg()(),Sl(378,"p"),Jx(379,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),sg(),Sl(380,"blockquote")(381,"p"),Jx(382,"N\xE3o compat\xEDvel com "),Sl(383,"code"),Jx(384,'p-shape="circle"'),sg(),Jx(385,"."),sg()()()(),Sl(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),Jx(390," p-info-icon"),Wl(391,"br"),sg()()(),Sl(392,"td",18)(393,"code",19),Jx(394,"string "),sg(),Sl(395,"code",27),Jx(396," TemplateRef<void>"),sg()(),Sl(397,"td",20),Jx(398,"-"),sg(),Sl(399,"td",21)(400,"em")(401,"strong"),Jx(402,"(opcional)"),sg()(),Sl(403,"p"),Jx(404,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),Sl(405,"code"),Jx(406,"p-info"),sg(),Jx(407,"."),sg(),Sl(408,"p"),Jx(409,"Exemplo: "),Sl(410,"code"),Jx(411,"an an-check"),sg(),Jx(412,"."),sg(),Sl(413,"blockquote")(414,"p"),Jx(415,"N\xE3o compat\xEDvel com "),Sl(416,"code"),Jx(417,'p-shape="circle"'),sg(),Jx(418,"."),sg()()()(),Sl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Jx(423," p-radius"),Wl(424,"br"),sg()()(),Sl(425,"td",18)(426,"code",28),Jx(427,"number"),sg()(),Sl(428,"td",20)(429,"p")(430,"code"),Jx(431,"45"),sg(),Jx(432," (autom\xE1tico)"),sg()(),Sl(433,"td",21)(434,"em")(435,"strong"),Jx(436,"(opcional)"),sg()(),Sl(437,"p"),Jx(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Sl(439,"code"),Jx(440,'p-shape="circle"'),sg(),Jx(441,"."),sg(),Sl(442,"blockquote")(443,"p"),Jx(444,"O valor m\xEDnimo aceito \xE9 "),Sl(445,"strong"),Jx(446,"24"),sg(),Jx(447,"."),sg()(),Sl(448,"blockquote")(449,"p"),Jx(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Sl(451,"strong"),Jx(452,"45"),sg(),Jx(453," ser\xE1 utilizado."),sg()(),Sl(454,"blockquote")(455,"p"),Jx(456,"N\xE3o compat\xEDvel com "),Sl(457,"code"),Jx(458,'p-shape="bar"'),sg(),Jx(459,"."),sg()()()(),Sl(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),Jx(464," (p-retry)"),Wl(465,"br"),sg()()(),Sl(466,"td",18)(467,"code",24),Jx(468,"EventEmitter"),sg()(),Sl(469,"td",20),Jx(470,"-"),sg(),Sl(471,"td",21)(472,"em")(473,"strong"),Jx(474,"(opcional)"),sg()(),Sl(475,"p"),Jx(476,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),sg(),Sl(477,"blockquote")(478,"p"),Jx(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Sl(480,"code"),Jx(481,"PoProgressStatus.Error"),sg(),Jx(482,"."),sg()(),Sl(483,"blockquote")(484,"p"),Jx(485,"N\xE3o compat\xEDvel com "),Sl(486,"code"),Jx(487,'p-shape="circle"'),sg(),Jx(488,"."),sg()()()(),Sl(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),Jx(493," p-shape"),Wl(494,"br"),sg()()(),Sl(495,"td",18)(496,"code",19),Jx(497,"string"),sg()(),Sl(498,"td",20)(499,"p")(500,"code"),Jx(501,"bar"),sg()()(),Sl(502,"td",21)(503,"em")(504,"strong"),Jx(505,"(opcional)"),sg()(),Sl(506,"p"),Jx(507,"Define o formato visual do componente de progresso."),sg(),Sl(508,"p"),Jx(509,"Valores v\xE1lidos:"),sg(),Sl(510,"ul")(511,"li")(512,"code"),Jx(513,"bar"),sg(),Jx(514,": exibe o progresso em formato de barra."),sg(),Sl(515,"li")(516,"code"),Jx(517,"circle"),sg(),Jx(518,": exibe o progresso em formato circular."),sg()()()(),Sl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),Jx(523," p-show-percentage"),Wl(524,"br"),sg()()(),Sl(525,"td",18)(526,"code",26),Jx(527,"boolean"),sg()(),Sl(528,"td",20)(529,"p")(530,"code"),Jx(531,"false"),sg()()(),Sl(532,"td",21)(533,"em")(534,"strong"),Jx(535,"(opcional)"),sg()(),Sl(536,"p"),Jx(537,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),sg(),Sl(538,"blockquote")(539,"p"),Jx(540,"Se utilizada no "),Sl(541,"code"),Jx(542,'p-shape="circle"'),sg(),Jx(543," e o status estiver como "),Sl(544,"code"),Jx(545,"error"),sg(),Jx(546,", a porcentagem n\xE3o ser\xE1 exibida."),sg()()()(),Sl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Jx(551," p-size"),Wl(552,"br"),sg()()(),Sl(553,"td",18)(554,"code",19),Jx(555,"string"),sg()(),Sl(556,"td",20)(557,"p")(558,"code"),Jx(559,"large"),sg()()(),Sl(560,"td",21)(561,"em")(562,"strong"),Jx(563,"(opcional)"),sg()(),Sl(564,"p"),Jx(565,"Define a expessura da barra de progresso."),sg(),Sl(566,"p"),Jx(567,"Valores v\xE1lidos:"),sg(),Sl(568,"ul")(569,"li"),Jx(570,"medium"),sg(),Sl(571,"li"),Jx(572,"large"),sg()()()(),Sl(573,"tr",14)(574,"td",15)(575,"div",16)(576,"span",17),Jx(577," p-size-actions"),Wl(578,"br"),sg()()(),Sl(579,"td",18)(580,"code",19),Jx(581,"string"),sg()(),Sl(582,"td",20)(583,"p")(584,"code"),Jx(585,"medium"),sg()()(),Sl(586,"td",21)(587,"em")(588,"strong"),Jx(589,"(opcional)"),sg()(),Sl(590,"p"),Jx(591,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),Sl(592,"code"),Jx(593,"p-size"),sg(),Jx(594,":"),sg(),Sl(595,"ul")(596,"li")(597,"code"),Jx(598,"small"),sg(),Jx(599,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(600,"li")(601,"code"),Jx(602,"medium"),sg(),Jx(603,": aplica a medida medium de cada componente."),sg()(),Sl(604,"blockquote")(605,"p"),Jx(606,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(607,"code"),Jx(608,"medium"),sg(),Jx(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(610,"a",29),Jx(611,"po-theme"),sg(),Jx(612,"."),sg()(),Sl(613,"blockquote")(614,"p"),Jx(615,"N\xE3o compat\xEDvel com "),Sl(616,"code"),Jx(617,'p-shape="circle"'),sg(),Jx(618,"."),sg()()()(),Sl(619,"tr",14)(620,"td",15)(621,"div",16)(622,"span",17),Jx(623," p-status"),Wl(624,"br"),sg()()(),Sl(625,"td",18)(626,"code",30),Jx(627,"PoProgressStatus"),sg()(),Sl(628,"td",20)(629,"p")(630,"code"),Jx(631,"PoProgressStatus.Default"),sg()()(),Sl(632,"td",21)(633,"em")(634,"strong"),Jx(635,"(opcional)"),sg()(),Sl(636,"p"),Jx(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),sg()()(),Sl(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),Jx(642," p-text"),Wl(643,"br"),sg()()(),Sl(644,"td",18)(645,"code",19),Jx(646,"string"),sg()(),Sl(647,"td",20),Jx(648,"-"),sg(),Sl(649,"td",21)(650,"em")(651,"strong"),Jx(652,"(opcional)"),sg()(),Sl(653,"p"),Jx(654,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),sg(),Sl(655,"blockquote")(656,"p"),Jx(657,"N\xE3o compat\xEDvel com "),Sl(658,"code"),Jx(659,'p-shape="circle"'),sg(),Jx(660,"."),sg()()()(),Sl(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),Jx(665," p-value"),Wl(666,"br"),sg()()(),Sl(667,"td",18)(668,"code",28),Jx(669,"number"),sg()(),Sl(670,"td",20)(671,"p")(672,"code"),Jx(673,"0"),sg()()(),Sl(674,"td",21)(675,"em")(676,"strong"),Jx(677,"(opcional)"),sg()(),Sl(678,"p"),Jx(679,"Valor que representar\xE1 o progresso."),sg(),Sl(680,"blockquote")(681,"p"),Jx(682,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),Sl(683,"code"),Jx(684,"0"),sg(),Jx(685," \xE0 "),Sl(686,"code"),Jx(687,"100"),sg(),Jx(688,"."),sg()()()()(),Sl(689,"h3"),Jx(690,"Interfaces"),sg(),Sl(691,"h4",31)(692,"code",5),Jx(693,"PoProgressAction"),sg()(),Sl(694,"div",2)(695,"p"),Jx(696,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),sg()(),Sl(697,"h4",10),Jx(698,"Propriedades"),sg(),Sl(699,"table",11)(700,"tr",12)(701,"th",13),Jx(702,"Nome"),sg(),Sl(703,"th",13),Jx(704,"Tipo"),sg(),Sl(705,"th",13),Jx(706,"Descri\xE7\xE3o"),sg()(),Sl(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),Jx(711," disabled"),Wl(712,"br"),sg()()(),Sl(713,"td",18)(714,"code",26),Jx(715,"boolean "),sg(),Sl(716,"code",32),Jx(717," Function"),sg()(),Sl(718,"td",21)(719,"em")(720,"strong"),Jx(721,"(opcional)"),sg()(),Sl(722,"p"),Jx(723,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),sg(),Sl(724,"p"),Jx(725,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),sg()()(),Sl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),Jx(730," icon"),Wl(731,"br"),sg()()(),Sl(732,"td",18)(733,"code",19),Jx(734,"string "),sg(),Sl(735,"code",27),Jx(736," TemplateRef<void>"),sg()(),Sl(737,"td",21)(738,"em")(739,"strong"),Jx(740,"(opcional)"),sg()(),Sl(741,"p"),Jx(742,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(743,"p"),Jx(744,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(745,"a",33),Jx(746,"Biblioteca de \xEDcones"),sg(),Jx(747,". conforme exemplo abaixo:"),sg(),Sl(748,"pre")(749,"code"),Jx(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),sg()(),Sl(751,"p"),Jx(752,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Sl(753,"pre")(754,"code"),Jx(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),sg()(),Sl(756,"p"),Jx(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(758,"code"),Jx(759,"TemplateRef"),sg(),Jx(760,`, conforme exemplo abaixo:
component.html:`),sg(),Sl(761,"pre")(762,"code"),Jx(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),sg()(),Sl(764,"p"),Jx(765,"component.ts:"),sg(),Sl(766,"pre")(767,"code"),Jx(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),sg()()()(),Sl(769,"tr",14)(770,"td",15)(771,"div",16)(772,"span",17),Jx(773," label"),Wl(774,"br"),sg()()(),Sl(775,"td",18)(776,"code",19),Jx(777,"string"),sg()(),Sl(778,"td",21)(779,"em")(780,"strong"),Jx(781,"(opcional)"),sg()(),Sl(782,"p"),Jx(783,"R\xF3tulo da a\xE7\xE3o."),sg()()(),Sl(784,"tr",14)(785,"td",15)(786,"div",16)(787,"span",17),Jx(788," type"),Wl(789,"br"),sg()()(),Sl(790,"td",18)(791,"code",19),Jx(792,"string"),sg()(),Sl(793,"td",21)(794,"em")(795,"strong"),Jx(796,"(opcional)"),sg()(),Sl(797,"p"),Jx(798,"Define a cor do item, sendo "),Sl(799,"code"),Jx(800,"default"),sg(),Jx(801," o padr\xE3o."),sg(),Sl(802,"p"),Jx(803,"Valores v\xE1lidos:"),sg(),Sl(804,"ul")(805,"li")(806,"code"),Jx(807,"default"),sg()(),Sl(808,"li")(809,"code"),Jx(810,"danger"),sg(),Jx(811," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),sg()()()(),Sl(812,"tr",14)(813,"td",15)(814,"div",16)(815,"span",17),Jx(816," visible"),Wl(817,"br"),sg()()(),Sl(818,"td",18)(819,"code",26),Jx(820,"boolean "),sg(),Sl(821,"code",32),Jx(822," Function"),sg()(),Sl(823,"td",21)(824,"em")(825,"strong"),Jx(826,"(opcional)"),sg()(),Sl(827,"p"),Jx(828,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg(),Sl(829,"blockquote")(830,"p"),Jx(831,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg()(),Sl(832,"p"),Jx(833,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),sg(),Sl(834,"ul")(835,"li")(836,"p"),Jx(837,"Fun\xE7\xE3o que deve retornar um booleano."),sg()(),Sl(838,"li")(839,"p"),Jx(840,"Informar diretamente um valor booleano."),sg()()()()()(),Sl(841,"h3"),Jx(842,"Enums"),sg(),Sl(843,"h4",4)(844,"code",5),Jx(845,"PoProgressShape"),sg()(),Sl(846,"div",2)(847,"p"),Jx(848,"Enum "),Sl(849,"code"),Jx(850,"PoProgressShape"),sg(),Jx(851," para definir o formato visual do componente de progresso."),sg()(),Sl(852,"h4",10),Jx(853,"Propriedades"),sg(),Sl(854,"table",11)(855,"tr",12)(856,"th",13),Jx(857,"Nome"),sg(),Sl(858,"th",13),Jx(859,"Descri\xE7\xE3o"),sg()(),Sl(860,"tr",14)(861,"td",15)(862,"div",16)(863,"span",17),Jx(864," bar"),Wl(865,"br"),sg()()(),Sl(866,"td",21)(867,"p"),Jx(868,"Formato barra de progresso (padr\xE3o)."),sg()()(),Sl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),Jx(873," circle"),Wl(874,"br"),sg()()(),Sl(875,"td",21)(876,"p"),Jx(877,"Formato circular de progresso."),sg()()()(),Sl(878,"h4",4)(879,"code",5),Jx(880,"PoProgressSize"),sg()(),Sl(881,"div",2)(882,"p"),Jx(883,"Enum para configurar a expessura ("),Sl(884,"code"),Jx(885,"p-size"),sg(),Jx(886,") da barra de progresso do componente."),sg()(),Sl(887,"h4",10),Jx(888,"Propriedades"),sg(),Sl(889,"table",11)(890,"tr",12)(891,"th",13),Jx(892,"Nome"),sg(),Sl(893,"th",13),Jx(894,"Descri\xE7\xE3o"),sg()(),Sl(895,"tr",14)(896,"td",15)(897,"div",16)(898,"span",17),Jx(899," medium"),Wl(900,"br"),sg()()(),Sl(901,"td",21)(902,"p"),Jx(903,"Tamanho m\xE9dio com 4px."),sg()()(),Sl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),Jx(908," large"),Wl(909,"br"),sg()()(),Sl(910,"td",21)(911,"p"),Jx(912,"Tamanho grande com 8px."),sg()()()(),Sl(913,"h4",4)(914,"code",5),Jx(915,"PoProgressStatus"),sg()(),Sl(916,"div",2)(917,"p"),Jx(918,"Enum "),Sl(919,"code"),Jx(920,"PoProgressStatus"),sg(),Jx(921," para os status de barra de progresso."),sg()(),Sl(922,"h4",10),Jx(923,"Propriedades"),sg(),Sl(924,"table",11)(925,"tr",12)(926,"th",13),Jx(927,"Nome"),sg(),Sl(928,"th",13),Jx(929,"Descri\xE7\xE3o"),sg()(),Sl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),Jx(934," Default"),Wl(935,"br"),sg()()(),Sl(936,"td",21)(937,"p"),Jx(938,"Define o status "),Sl(939,"code"),Jx(940,"default"),sg(),Jx(941," para a barra de progresso."),sg()()(),Sl(942,"tr",14)(943,"td",15)(944,"div",16)(945,"span",17),Jx(946," Error"),Wl(947,"br"),sg()()(),Sl(948,"td",21)(949,"p"),Jx(950,"Define o status de "),Sl(951,"code"),Jx(952,"error"),sg(),Jx(953," para a barra de progresso."),sg()()(),Sl(954,"tr",14)(955,"td",15)(956,"div",16)(957,"span",17),Jx(958," Success"),Wl(959,"br"),sg()()(),Sl(960,"td",21)(961,"p"),Jx(962,"Define o status de "),Sl(963,"code"),Jx(964,"success"),sg(),Jx(965," para a barra de progresso."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var ye=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-progress-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view")(8,"sample-po-progress-circle-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Se,ve,fe,Pe,we],encapsulation:2})}return o})();var Ge=[{path:"",component:ye}],_e=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[pL.forChild(Ge),pL]})}return o})();var wt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,_e]})}return o})();export{wt as DocPoProgressModule};