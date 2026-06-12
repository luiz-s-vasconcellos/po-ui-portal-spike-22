import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,bx as Rk,dx as Sa,dy as iv,dz as mh,dA as Gue,b9 as ONe,Q as Cl,R as Hl,T as og,z as qx,H as Lp,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,a1 as dt,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,cV as bk,cW as wk,a$ as Qt,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,bL as H3,cd as sme,aB as gx,aq as ix,aM as gw,aN as Z0,at as ox,aO as pw,aP as X0,b0 as _v,d9 as eR,a3 as SNe,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic"]],standalone:false,decls:8,vars:3,consts:[["p-title","Bar"],[3,"p-value"],[1,"po-mt-1"],["p-title","Circle",1,"po-mt-2"],["p-shape","circle",3,"p-value","p-radius"]],template:function(l,i){l&1&&(Cl(0,"div")(1,"po-widget",0),Hl(2,"po-progress",1),og()(),Cl(3,"div",2)(4,"po-widget",3),Hl(5,"po-progress",4),Cl(6,"div",2),qx(7,"Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),og()()()),l&2&&(Lp(2),ZE("p-value",25),Lp(3),ZE("p-value",25)("p-radius",24));},dependencies:[Gue,ONe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Progress Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<div>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-progress-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return o})();function Oe(o,Q){if(o&1&&(Cl(0,"po-widget",3),Hl(1,"po-info",15),og()),o&2){let r=Ex();Lp(),ZE("p-value",r.event);}}function Ae(o,Q){if(o&1&&(Cl(0,"div")(1,"po-widget",21)(2,"form",22),Hl(3,"po-input",23),Z0(),Hl(4,"po-select",24),Z0(),Hl(5,"po-select",25),Z0(),Hl(6,"po-switch",26),Z0(),Hl(7,"po-switch",27),Z0(),og()()()),o&2){let r=Ex(2);Lp(2),ZE("formGroup",r.actionForm),Lp(),X0(),Lp(),ZE("p-options",r.iconOptions),X0(),Lp(),ZE("p-options",r.typeOptions),X0(),Lp(),X0(),Lp(),X0();}}function ze(o,Q){if(o&1){let r=gx();Cl(0,"po-select",16),gw("ngModelChange",function(i){Jy(r);let m=Ex();return Zx(m.infoIcon,i)||(m.infoIcon=i),e_(i)}),og(),Z0(),Cl(1,"po-input",17),gw("ngModelChange",function(i){Jy(r);let m=Ex();return Zx(m.text,i)||(m.text=i),e_(i)}),og(),Z0(),Cl(2,"po-input",18),gw("ngModelChange",function(i){Jy(r);let m=Ex();return Zx(m.info,i)||(m.info=i),e_(i)}),og(),Z0(),Cl(3,"po-radio-group",19),gw("ngModelChange",function(i){Jy(r);let m=Ex();return Zx(m.sizeActions,i)||(m.sizeActions=i),e_(i)}),og(),Z0(),Cl(4,"po-switch",20),gw("ngModelChange",function(i){Jy(r);let m=Ex();return Zx(m.showAction,i)||(m.showAction=i),e_(i)}),og(),Z0(),ix(5,Ae,8,3,"div");}if(o&2){let r=Ex();pw("ngModel",r.infoIcon),ZE("p-options",r.infoIconsOptions),X0(),Lp(),pw("ngModel",r.text),X0(),Lp(),pw("ngModel",r.info),X0(),Lp(),pw("ngModel",r.sizeActions),ZE("p-options",r.sizeActionsOptions),X0(),Lp(),pw("ngModel",r.showAction),X0(),Lp(),ox(r.showAction?5:-1);}}function Be(o,Q){if(o&1){let r=gx();Cl(0,"po-number",28),gw("ngModelChange",function(i){Jy(r);let m=Ex();return Zx(m.radius,i)||(m.radius=i),e_(i)}),og(),Z0();}if(o&2){let r=Ex();pw("ngModel",r.radius),X0();}}var he=(()=>{class o{fb=f(Rk);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=Sa.Default;size=iv.large;shape=mh.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:Sa.Default},{label:"Success",value:Sa.Success},{label:"Error",value:Sa.Error}];sizeOptions=[{label:"Medium",value:iv.medium},{label:"Large",value:iv.large}];shapeOptions=[{label:"Bar",value:mh.bar},{label:"Circle",value:mh.circle}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];allPropertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm();}onShapeChange(r){this.restore(r),r==="circle"?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!=="disabledCancel"):this.propertiesOptions=[...this.allPropertiesOptions];}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r);});}updateAction(r){this.action=r;}onEvent(r){this.event=r;}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=false,this.indeterminate=false,this.showPercentage=false,this.status=Sa.Default,this.text=void 0,this.value=void 0,this.size=iv.large,this.radius=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.showAction=false,this.properties=[],this.sizeActions="medium",r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=mh.bar);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs"]],standalone:false,decls:17,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[1,"sample-progress-grid"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-shape","p-radius","p-size-actions","p-custom-action"],["p-title","Events"],["p-title","Properties"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],["name","shape","p-label","Shape",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mt-2"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12","po-mt-2",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],[3,"p-value"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-mb-2",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let m=gx();Cl(0,"div",1)(1,"po-progress",2),dt("p-custom-action-click",function(){return i.onEvent("p-custom-action-click")})("p-cancel",function(){return i.onEvent("p-cancel")})("p-retry",function(){return i.onEvent("p-retry")}),og(),ix(2,Oe,2,1,"po-widget",3),Cl(3,"po-widget",4)(4,"form",null,0)(6,"div",5)(7,"po-radio-group",6),gw("ngModelChange",function(d){return Jy(m),Zx(i.shape,d)||(i.shape=d),e_(d)}),dt("p-change",function(d){return i.onShapeChange(d)}),og(),Z0(),og(),Cl(8,"div",7)(9,"po-number",8),gw("ngModelChange",function(d){return Jy(m),Zx(i.value,d)||(i.value=d),e_(d)}),og(),Z0(),Cl(10,"po-select",9),gw("ngModelChange",function(d){return Jy(m),Zx(i.size,d)||(i.size=d),e_(d)}),og(),Z0(),Cl(11,"po-select",10),gw("ngModelChange",function(d){return Jy(m),Zx(i.status,d)||(i.status=d),e_(d)}),og(),Z0(),ix(12,ze,6,8),ix(13,Be,1,1,"po-number",11),Cl(14,"po-checkbox-group",12),gw("ngModelChange",function(d){return Jy(m),Zx(i.properties,d)||(i.properties=d),e_(d)}),og(),Z0(),og()()(),Cl(15,"div",13)(16,"po-button",14),dt("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),ZE("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-shape",i.shape)("p-radius",i.radius)("p-size-actions",i.sizeActions)("p-custom-action",i.action),Lp(),ox(i.shape==="bar"?2:-1),Lp(5),pw("ngModel",i.shape),ZE("p-options",i.shapeOptions),X0(),Lp(2),pw("ngModel",i.value),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0(),Lp(),pw("ngModel",i.status),ZE("p-options",i.statusOptions),X0(),Lp(),ox(i.shape==="bar"?12:-1),Lp(),ox(i.shape==="circle"?13:-1),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0());},dependencies:[lY,sY,aY,gk,fk,bk,wk,Qt,L3,q3,Hhe,Nde,nme,H3,sme,Gue,ONe],styles:[".sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}"],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Progress Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="sample-progress-grid">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-progress-labs/sample-po-progress-labs.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-progress-labs"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return `${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=true;}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++;},20);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication"]],standalone:false,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),gw("ngModelChange",function(v){return Zx(i.publication,v)||(i.publication=v),v}),og(),Z0(),Hl(3,"po-divider",3)(4,"po-progress",4),og(),Cl(5,"div",1)(6,"po-button",5),dt("p-click",function(){return i.updatePublication()}),og()()()),l&2&&(Lp(2),pw("ngModel",i.publication),X0(),Lp(2),ZE("p-value",i.progressBarValue)("p-show-percentage",true),Lp(2),ZE("p-disabled",i.buttonDisabled));},dependencies:[sY,gk,Qt,_v,eR,SNe,Gue],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Progress - Publication"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Edit publication">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-progress-publication"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,xe],encapsulation:2})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle"]],standalone:false,decls:99,vars:2,consts:[[1,"container"],["p-title","Regra de Adequa\xE7\xE3o de Layout"],[1,"line-height"],[1,"po-font-text-large-bold"],[1,"po-text-large"],["p-title","Exemplo B\xE1sico - Radius M\xEDnimo (24px)"],[1,"po-row","po-align-items-center"],[1,"po-md-6","po-lg-4","po-center"],["p-shape","circle","p-show-percentage","true","p-radius","24",3,"p-value"],[1,"po-md-6","po-lg-8"],[1,"po-font-text"],["p-title","Com Radius Maior (60px)"],["p-shape","circle","p-show-percentage","true","p-radius","60",3,"p-value"],["p-title","Com Status Error (Radius 24px)"],["p-shape","circle","p-value","50","p-status","error","p-radius","24"],["p-title","Modo Indeterminado"],["p-shape","circle","p-indeterminate","true","p-radius","30"],["p-title","Compara\xE7\xE3o Visual - Diferentes Status"],[1,"po-row","row"],[1,"po-md-3","po-center","items"],[1,"po-font-text-large-bold","po-mb-1"],["p-shape","circle","p-value","100","p-status","success","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","50","p-status","warning","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","0","p-status","error","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","75","p-show-percentage","true","p-radius","25"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"p",3),qx(4,"\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),og(),Cl(5,"p",4),qx(6," O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos. "),og()()(),Cl(7,"po-widget",5)(8,"div",6)(9,"div",7),Hl(10,"po-progress",8),og(),Cl(11,"div",9)(12,"p")(13,"strong"),qx(14,"Configura\xE7\xE3o:"),og()(),Cl(15,"ul")(16,"li"),qx(17,'p-shape="circle"'),og(),Cl(18,"li"),qx(19,'p-value="65"'),og(),Cl(20,"li"),qx(21,'p-show-percentage="true"'),og(),Cl(22,"li"),qx(23,'p-radius="24" (valor m\xEDnimo permitido)'),og()(),Cl(24,"p",10),qx(25,"A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo."),og()()()(),Cl(26,"po-widget",11)(27,"div",6)(28,"div",7),Hl(29,"po-progress",12),og(),Cl(30,"div",9)(31,"p")(32,"strong"),qx(33,"Configura\xE7\xE3o:"),og()(),Cl(34,"ul")(35,"li"),qx(36,'p-shape="circle"'),og(),Cl(37,"li"),qx(38,'p-value="65"'),og(),Cl(39,"li"),qx(40,'p-show-percentage="true"'),og(),Cl(41,"li"),qx(42,'p-radius="60" (valor maior)'),og()(),Cl(43,"p",10),qx(44," Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o. "),og()()()(),Cl(45,"po-widget",13)(46,"div",6)(47,"div",7),Hl(48,"po-progress",14),og(),Cl(49,"div",9)(50,"p")(51,"strong"),qx(52,"Configura\xE7\xE3o:"),og()(),Cl(53,"ul")(54,"li"),qx(55,'p-shape="circle"'),og(),Cl(56,"li"),qx(57,'p-value="50"'),og(),Cl(58,"li"),qx(59,'p-status="error"'),og(),Cl(60,"li"),qx(61,'p-radius="24" (valor m\xEDnimo)'),og()(),Cl(62,"p",10),qx(63,"\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o."),og()()()(),Cl(64,"po-widget",15)(65,"div",6)(66,"div",7),Hl(67,"po-progress",16),og(),Cl(68,"div",9)(69,"p")(70,"strong"),qx(71,"Configura\xE7\xE3o:"),og()(),Cl(72,"ul")(73,"li"),qx(74,'p-shape="circle"'),og(),Cl(75,"li"),qx(76,'p-indeterminate="true"'),og(),Cl(77,"li"),qx(78,'p-radius="30"'),og()(),Cl(79,"p",10),qx(80,"Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento."),og()()()(),Cl(81,"po-widget",17)(82,"div",18)(83,"div",19)(84,"p",20),qx(85,"Success"),og(),Hl(86,"po-progress",21),og(),Cl(87,"div",19)(88,"p",20),qx(89,"Warning"),og(),Hl(90,"po-progress",22),og(),Cl(91,"div",19)(92,"p",20),qx(93,"Error"),og(),Hl(94,"po-progress",23),og(),Cl(95,"div",19)(96,"p",20),qx(97,"Default"),og(),Hl(98,"po-progress",24),og()()()()),l&2&&(Lp(10),ZE("p-value",i.value),Lp(19),ZE("p-value",i.value));},dependencies:[Gue,ONe],styles:[".container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Progress Circle"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-progress-circle/sample-po-progress-circle.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="container">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-progress-circle/sample-po-progress-circle.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-progress-circle/sample-po-progress-circle.component.css"),og(),Cl(25,"pre",11),qx(26,`.container {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-progress-circle"),og(),Hl(29,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Re,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ce],encapsulation:2})}return o})();var we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-doc"]],standalone:false,decls:966,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoProgressModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-progress"),og(),qx(9,"."),og()(),Cl(10,"h3",3),qx(11,"Componente"),og(),Cl(12,"h4",4)(13,"code",5),qx(14,"PoProgressComponent"),og()(),Cl(15,"div",2)(16,"p"),qx(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),og(),Cl(18,"p"),qx(19,"Este componente pode ser utilizado no "),Cl(20,"em"),qx(21,"upload"),og(),qx(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),og(),Cl(23,"h4"),qx(24,"Tokens customiz\xE1veis"),og(),Cl(25,"p"),qx(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(27,"blockquote")(28,"p"),qx(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(30,"a",6),qx(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(32,"."),og()(),Cl(33,"table")(34,"thead")(35,"tr")(36,"th"),qx(37,"Propriedade"),og(),Cl(38,"th"),qx(39,"Descri\xE7\xE3o"),og(),Cl(40,"th"),qx(41,"Valor Padr\xE3o"),og()()(),Cl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),qx(46,"Default Values"),og()(),Hl(47,"td")(48,"td"),og(),Cl(49,"tr")(50,"td")(51,"code"),qx(52,"--font-family"),og()(),Cl(53,"td"),qx(54,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(55,"td")(56,"code"),qx(57,"var(--font-family-theme)"),og()()(),Cl(58,"tr")(59,"td")(60,"code"),qx(61,"--text-color"),og()(),Cl(62,"td"),qx(63,"Cor do texto"),og(),Cl(64,"td")(65,"code"),qx(66,"var(--color-neutral-dark-90)"),og()()(),Cl(67,"tr")(68,"td")(69,"strong"),qx(70,"Error"),og()(),Hl(71,"td")(72,"td"),og(),Cl(73,"tr")(74,"td")(75,"code"),qx(76,"--text-color-error"),og()(),Cl(77,"td"),qx(78,"Cor do texto no estado error"),og(),Cl(79,"td")(80,"code"),qx(81,"var(--color-feedback-negative-dark)"),og()()(),Cl(82,"tr")(83,"td")(84,"code"),qx(85,"--color-icon-error"),og()(),Cl(86,"td"),qx(87,"Cor do \xEDcone no estado error"),og(),Cl(88,"td")(89,"code"),qx(90,"var(--color-feedback-negative-dark)"),og()()(),Cl(91,"tr")(92,"td")(93,"strong"),qx(94,"po-progress-bar"),og()(),Hl(95,"td")(96,"td"),og(),Cl(97,"tr")(98,"td")(99,"code"),qx(100,"--background-color-tray"),og()(),Cl(101,"td"),qx(102,"Cor do background"),og(),Cl(103,"td")(104,"code"),qx(105,"var(--color-brand-01-lightest)"),og()()(),Cl(106,"tr")(107,"td")(108,"code"),qx(109,"--background-color-indicator"),og()(),Cl(110,"td"),qx(111,"Cor do background do indicador"),og(),Cl(112,"td")(113,"code"),qx(114,"var(--color-action-default)"),og()()(),Cl(115,"tr")(116,"td")(117,"strong"),qx(118,"po-progress-circle"),og()(),Hl(119,"td")(120,"td"),og(),Cl(121,"tr")(122,"td")(123,"code"),qx(124,"--background-color-tray"),og()(),Cl(125,"td"),qx(126,"Cor do background"),og(),Cl(127,"td")(128,"code"),qx(129,"var(--color-brand-01-lightest)"),og()()(),Cl(130,"tr")(131,"td")(132,"code"),qx(133,"--background-color-indicator"),og()(),Cl(134,"td"),qx(135,"Cor do background do indicador"),og(),Cl(136,"td")(137,"code"),qx(138,"var(--color-action-default)"),og()()()()()(),Cl(139,"div",7)(140,"h4",8),qx(141,"Seletor"),og(),Cl(142,"pre",9),qx(143,`<po-progress
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
`),og()(),Cl(144,"h4",10),qx(145,"Propriedades"),og(),Cl(146,"table",11)(147,"tr",12)(148,"th",13),qx(149,"Nome"),og(),Cl(150,"th",13),qx(151,"Tipo"),og(),Cl(152,"th",13),qx(153,"Padr\xE3o"),og(),Cl(154,"th",13),qx(155,"Descri\xE7\xE3o"),og()(),Cl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),qx(160," p-aria-label"),Hl(161,"br"),og()()(),Cl(162,"td",18)(163,"code",19),qx(164,"string"),og()(),Cl(165,"td",20),qx(166,"-"),og(),Cl(167,"td",21)(168,"em")(169,"strong"),qx(170,"(opcional)"),og()(),Cl(171,"p"),qx(172,"Define um nome acess\xEDvel para o elemento com "),Cl(173,"code"),qx(174,'role="progressbar"'),og(),qx(175,"."),og(),Cl(176,"p"),qx(177,"Quando n\xE3o informado, o componente utiliza o valor de "),Cl(178,"code"),qx(179,"p-text"),og(),qx(180," como alternativa, se dispon\xEDvel."),og()()(),Cl(181,"tr",14)(182,"td",15)(183,"div",22)(184,"span",23),qx(185," (p-cancel)"),Hl(186,"br"),og()()(),Cl(187,"td",18)(188,"code",24),qx(189,"EventEmitter"),og()(),Cl(190,"td",20),qx(191,"-"),og(),Cl(192,"td",21)(193,"em")(194,"strong"),qx(195,"(opcional)"),og()(),Cl(196,"p"),qx(197,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),og(),Cl(198,"p"),qx(199,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),og(),Cl(200,"blockquote")(201,"p"),qx(202,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),Cl(203,"code"),qx(204,"PoProgressStatus.Success"),og(),qx(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),og()(),Cl(206,"blockquote")(207,"p"),qx(208,"N\xE3o compat\xEDvel com "),Cl(209,"code"),qx(210,'p-shape="circle"'),og(),qx(211,"."),og()()()(),Cl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),qx(216," p-custom-action"),Hl(217,"br"),og()()(),Cl(218,"td",18)(219,"code",25),qx(220,"PoProgressAction"),og()(),Cl(221,"td",20),qx(222,"-"),og(),Cl(223,"td",21)(224,"em")(225,"strong"),qx(226,"(opcional)"),og()(),Cl(227,"p"),qx(228,"Permite definir uma a\xE7\xE3o personalizada no componente "),Cl(229,"code"),qx(230,"po-progress"),og(),qx(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Cl(232,"strong"),qx(233,"PoProgressAction"),og(),qx(234,", possibilitando configurar:"),og(),Cl(235,"ul")(236,"li")(237,"strong")(238,"code"),qx(239,"label"),og()(),qx(240,": Texto exibido no bot\xE3o (opcional)."),og(),Cl(241,"li")(242,"strong")(243,"code"),qx(244,"icon"),og()(),qx(245,": \xCDcone exibido no bot\xE3o (opcional)."),og(),Cl(246,"li")(247,"strong")(248,"code"),qx(249,"type"),og()(),qx(250,": Tipo do bot\xE3o ("),Cl(251,"code"),qx(252,"default"),og(),qx(253," ou "),Cl(254,"code"),qx(255,"danger"),og(),qx(256,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),og(),Cl(257,"li")(258,"strong")(259,"code"),qx(260,"disabled"),og()(),qx(261,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),og(),Cl(262,"li")(263,"strong")(264,"code"),qx(265,"visible"),og()(),qx(266,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),og()(),Cl(267,"blockquote")(268,"p"),qx(269,"N\xE3o compat\xEDvel com "),Cl(270,"code"),qx(271,'p-shape="circle"'),og(),qx(272,"."),og()()()(),Cl(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),qx(277," (p-custom-action-click)"),Hl(278,"br"),og()()(),Cl(279,"td",18)(280,"code",24),qx(281,"EventEmitter"),og()(),Cl(282,"td",20),qx(283,"-"),og(),Cl(284,"td",21)(285,"em")(286,"strong"),qx(287,"(opcional)"),og()(),Cl(288,"p"),qx(289,"Evento emitido quando o bot\xE3o definido em "),Cl(290,"code"),qx(291,"p-custom-action"),og(),qx(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),og(),Cl(293,"blockquote")(294,"p"),qx(295,"N\xE3o compat\xEDvel com "),Cl(296,"code"),qx(297,'p-shape="circle"'),og(),qx(298,"."),og()()()(),Cl(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),qx(303," p-disabled-cancel"),Hl(304,"br"),og()()(),Cl(305,"td",18)(306,"code",26),qx(307,"boolean"),og()(),Cl(308,"td",20)(309,"p")(310,"code"),qx(311,"false"),og()()(),Cl(312,"td",21)(313,"em")(314,"strong"),qx(315,"(opcional)"),og()(),Cl(316,"p"),qx(317,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),og(),Cl(318,"blockquote")(319,"p"),qx(320,"Se nenhuma fun\xE7\xE3o for passada para o evento "),Cl(321,"code"),qx(322,"(p-cancel)"),og(),qx(323," ou a barra de progresso estiver com o status "),Cl(324,"code"),qx(325,"PoProgressStatus.Success"),og(),qx(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),og()(),Cl(327,"blockquote")(328,"p"),qx(329,"N\xE3o compat\xEDvel com "),Cl(330,"code"),qx(331,'p-shape="circle"'),og(),qx(332,"."),og()()()(),Cl(333,"tr",14)(334,"td",15)(335,"div",16)(336,"span",17),qx(337," p-indeterminate"),Hl(338,"br"),og()()(),Cl(339,"td",18)(340,"code",26),qx(341,"boolean"),og()(),Cl(342,"td",20)(343,"p")(344,"code"),qx(345,"false"),og()()(),Cl(346,"td",21)(347,"em")(348,"strong"),qx(349,"(opcional)"),og()(),Cl(350,"p"),qx(351,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),og(),Cl(352,"p"),qx(353,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),og(),Cl(354,"blockquote")(355,"p"),qx(356,"Caso esta propriedade e a "),Cl(357,"code"),qx(358,"p-value"),og(),qx(359," seja habilitada, a propriedade "),Cl(360,"code"),qx(361,"p-value"),og(),qx(362," ser\xE1 ignorada."),og()()()(),Cl(363,"tr",14)(364,"td",15)(365,"div",16)(366,"span",17),qx(367," p-info"),Hl(368,"br"),og()()(),Cl(369,"td",18)(370,"code",19),qx(371,"string"),og()(),Cl(372,"td",20),qx(373,"-"),og(),Cl(374,"td",21)(375,"em")(376,"strong"),qx(377,"(opcional)"),og()(),Cl(378,"p"),qx(379,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),og(),Cl(380,"blockquote")(381,"p"),qx(382,"N\xE3o compat\xEDvel com "),Cl(383,"code"),qx(384,'p-shape="circle"'),og(),qx(385,"."),og()()()(),Cl(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),qx(390," p-info-icon"),Hl(391,"br"),og()()(),Cl(392,"td",18)(393,"code",19),qx(394,"string "),og(),Cl(395,"code",27),qx(396," TemplateRef<void>"),og()(),Cl(397,"td",20),qx(398,"-"),og(),Cl(399,"td",21)(400,"em")(401,"strong"),qx(402,"(opcional)"),og()(),Cl(403,"p"),qx(404,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),Cl(405,"code"),qx(406,"p-info"),og(),qx(407,"."),og(),Cl(408,"p"),qx(409,"Exemplo: "),Cl(410,"code"),qx(411,"an an-check"),og(),qx(412,"."),og(),Cl(413,"blockquote")(414,"p"),qx(415,"N\xE3o compat\xEDvel com "),Cl(416,"code"),qx(417,'p-shape="circle"'),og(),qx(418,"."),og()()()(),Cl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),qx(423," p-radius"),Hl(424,"br"),og()()(),Cl(425,"td",18)(426,"code",28),qx(427,"number"),og()(),Cl(428,"td",20)(429,"p")(430,"code"),qx(431,"45"),og(),qx(432," (autom\xE1tico)"),og()(),Cl(433,"td",21)(434,"em")(435,"strong"),qx(436,"(opcional)"),og()(),Cl(437,"p"),qx(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Cl(439,"code"),qx(440,'p-shape="circle"'),og(),qx(441,"."),og(),Cl(442,"blockquote")(443,"p"),qx(444,"O valor m\xEDnimo aceito \xE9 "),Cl(445,"strong"),qx(446,"24"),og(),qx(447,"."),og()(),Cl(448,"blockquote")(449,"p"),qx(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Cl(451,"strong"),qx(452,"45"),og(),qx(453," ser\xE1 utilizado."),og()(),Cl(454,"blockquote")(455,"p"),qx(456,"N\xE3o compat\xEDvel com "),Cl(457,"code"),qx(458,'p-shape="bar"'),og(),qx(459,"."),og()()()(),Cl(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),qx(464," (p-retry)"),Hl(465,"br"),og()()(),Cl(466,"td",18)(467,"code",24),qx(468,"EventEmitter"),og()(),Cl(469,"td",20),qx(470,"-"),og(),Cl(471,"td",21)(472,"em")(473,"strong"),qx(474,"(opcional)"),og()(),Cl(475,"p"),qx(476,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),og(),Cl(477,"blockquote")(478,"p"),qx(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Cl(480,"code"),qx(481,"PoProgressStatus.Error"),og(),qx(482,"."),og()(),Cl(483,"blockquote")(484,"p"),qx(485,"N\xE3o compat\xEDvel com "),Cl(486,"code"),qx(487,'p-shape="circle"'),og(),qx(488,"."),og()()()(),Cl(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),qx(493," p-shape"),Hl(494,"br"),og()()(),Cl(495,"td",18)(496,"code",19),qx(497,"string"),og()(),Cl(498,"td",20)(499,"p")(500,"code"),qx(501,"bar"),og()()(),Cl(502,"td",21)(503,"em")(504,"strong"),qx(505,"(opcional)"),og()(),Cl(506,"p"),qx(507,"Define o formato visual do componente de progresso."),og(),Cl(508,"p"),qx(509,"Valores v\xE1lidos:"),og(),Cl(510,"ul")(511,"li")(512,"code"),qx(513,"bar"),og(),qx(514,": exibe o progresso em formato de barra."),og(),Cl(515,"li")(516,"code"),qx(517,"circle"),og(),qx(518,": exibe o progresso em formato circular."),og()()()(),Cl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),qx(523," p-show-percentage"),Hl(524,"br"),og()()(),Cl(525,"td",18)(526,"code",26),qx(527,"boolean"),og()(),Cl(528,"td",20)(529,"p")(530,"code"),qx(531,"false"),og()()(),Cl(532,"td",21)(533,"em")(534,"strong"),qx(535,"(opcional)"),og()(),Cl(536,"p"),qx(537,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),og(),Cl(538,"blockquote")(539,"p"),qx(540,"Se utilizada no "),Cl(541,"code"),qx(542,'p-shape="circle"'),og(),qx(543," e o status estiver como "),Cl(544,"code"),qx(545,"error"),og(),qx(546,", a porcentagem n\xE3o ser\xE1 exibida."),og()()()(),Cl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),qx(551," p-size"),Hl(552,"br"),og()()(),Cl(553,"td",18)(554,"code",19),qx(555,"string"),og()(),Cl(556,"td",20)(557,"p")(558,"code"),qx(559,"large"),og()()(),Cl(560,"td",21)(561,"em")(562,"strong"),qx(563,"(opcional)"),og()(),Cl(564,"p"),qx(565,"Define a expessura da barra de progresso."),og(),Cl(566,"p"),qx(567,"Valores v\xE1lidos:"),og(),Cl(568,"ul")(569,"li"),qx(570,"medium"),og(),Cl(571,"li"),qx(572,"large"),og()()()(),Cl(573,"tr",14)(574,"td",15)(575,"div",16)(576,"span",17),qx(577," p-size-actions"),Hl(578,"br"),og()()(),Cl(579,"td",18)(580,"code",19),qx(581,"string"),og()(),Cl(582,"td",20)(583,"p")(584,"code"),qx(585,"medium"),og()()(),Cl(586,"td",21)(587,"em")(588,"strong"),qx(589,"(opcional)"),og()(),Cl(590,"p"),qx(591,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),Cl(592,"code"),qx(593,"p-size"),og(),qx(594,":"),og(),Cl(595,"ul")(596,"li")(597,"code"),qx(598,"small"),og(),qx(599,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(600,"li")(601,"code"),qx(602,"medium"),og(),qx(603,": aplica a medida medium de cada componente."),og()(),Cl(604,"blockquote")(605,"p"),qx(606,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(607,"code"),qx(608,"medium"),og(),qx(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(610,"a",29),qx(611,"po-theme"),og(),qx(612,"."),og()(),Cl(613,"blockquote")(614,"p"),qx(615,"N\xE3o compat\xEDvel com "),Cl(616,"code"),qx(617,'p-shape="circle"'),og(),qx(618,"."),og()()()(),Cl(619,"tr",14)(620,"td",15)(621,"div",16)(622,"span",17),qx(623," p-status"),Hl(624,"br"),og()()(),Cl(625,"td",18)(626,"code",30),qx(627,"PoProgressStatus"),og()(),Cl(628,"td",20)(629,"p")(630,"code"),qx(631,"PoProgressStatus.Default"),og()()(),Cl(632,"td",21)(633,"em")(634,"strong"),qx(635,"(opcional)"),og()(),Cl(636,"p"),qx(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),og()()(),Cl(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),qx(642," p-text"),Hl(643,"br"),og()()(),Cl(644,"td",18)(645,"code",19),qx(646,"string"),og()(),Cl(647,"td",20),qx(648,"-"),og(),Cl(649,"td",21)(650,"em")(651,"strong"),qx(652,"(opcional)"),og()(),Cl(653,"p"),qx(654,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),og(),Cl(655,"blockquote")(656,"p"),qx(657,"N\xE3o compat\xEDvel com "),Cl(658,"code"),qx(659,'p-shape="circle"'),og(),qx(660,"."),og()()()(),Cl(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),qx(665," p-value"),Hl(666,"br"),og()()(),Cl(667,"td",18)(668,"code",28),qx(669,"number"),og()(),Cl(670,"td",20)(671,"p")(672,"code"),qx(673,"0"),og()()(),Cl(674,"td",21)(675,"em")(676,"strong"),qx(677,"(opcional)"),og()(),Cl(678,"p"),qx(679,"Valor que representar\xE1 o progresso."),og(),Cl(680,"blockquote")(681,"p"),qx(682,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),Cl(683,"code"),qx(684,"0"),og(),qx(685," \xE0 "),Cl(686,"code"),qx(687,"100"),og(),qx(688,"."),og()()()()(),Cl(689,"h3"),qx(690,"Interfaces"),og(),Cl(691,"h4",31)(692,"code",5),qx(693,"PoProgressAction"),og()(),Cl(694,"div",2)(695,"p"),qx(696,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),og()(),Cl(697,"h4",10),qx(698,"Propriedades"),og(),Cl(699,"table",11)(700,"tr",12)(701,"th",13),qx(702,"Nome"),og(),Cl(703,"th",13),qx(704,"Tipo"),og(),Cl(705,"th",13),qx(706,"Descri\xE7\xE3o"),og()(),Cl(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),qx(711," disabled"),Hl(712,"br"),og()()(),Cl(713,"td",18)(714,"code",26),qx(715,"boolean "),og(),Cl(716,"code",32),qx(717," Function"),og()(),Cl(718,"td",21)(719,"em")(720,"strong"),qx(721,"(opcional)"),og()(),Cl(722,"p"),qx(723,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),og(),Cl(724,"p"),qx(725,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),og()()(),Cl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),qx(730," icon"),Hl(731,"br"),og()()(),Cl(732,"td",18)(733,"code",19),qx(734,"string "),og(),Cl(735,"code",27),qx(736," TemplateRef<void>"),og()(),Cl(737,"td",21)(738,"em")(739,"strong"),qx(740,"(opcional)"),og()(),Cl(741,"p"),qx(742,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(743,"p"),qx(744,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(745,"a",33),qx(746,"Biblioteca de \xEDcones"),og(),qx(747,". conforme exemplo abaixo:"),og(),Cl(748,"pre")(749,"code"),qx(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),og()(),Cl(751,"p"),qx(752,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Cl(753,"pre")(754,"code"),qx(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),og()(),Cl(756,"p"),qx(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(758,"code"),qx(759,"TemplateRef"),og(),qx(760,`, conforme exemplo abaixo:
component.html:`),og(),Cl(761,"pre")(762,"code"),qx(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),og()(),Cl(764,"p"),qx(765,"component.ts:"),og(),Cl(766,"pre")(767,"code"),qx(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),og()()()(),Cl(769,"tr",14)(770,"td",15)(771,"div",16)(772,"span",17),qx(773," label"),Hl(774,"br"),og()()(),Cl(775,"td",18)(776,"code",19),qx(777,"string"),og()(),Cl(778,"td",21)(779,"em")(780,"strong"),qx(781,"(opcional)"),og()(),Cl(782,"p"),qx(783,"R\xF3tulo da a\xE7\xE3o."),og()()(),Cl(784,"tr",14)(785,"td",15)(786,"div",16)(787,"span",17),qx(788," type"),Hl(789,"br"),og()()(),Cl(790,"td",18)(791,"code",19),qx(792,"string"),og()(),Cl(793,"td",21)(794,"em")(795,"strong"),qx(796,"(opcional)"),og()(),Cl(797,"p"),qx(798,"Define a cor do item, sendo "),Cl(799,"code"),qx(800,"default"),og(),qx(801," o padr\xE3o."),og(),Cl(802,"p"),qx(803,"Valores v\xE1lidos:"),og(),Cl(804,"ul")(805,"li")(806,"code"),qx(807,"default"),og()(),Cl(808,"li")(809,"code"),qx(810,"danger"),og(),qx(811," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),og()()()(),Cl(812,"tr",14)(813,"td",15)(814,"div",16)(815,"span",17),qx(816," visible"),Hl(817,"br"),og()()(),Cl(818,"td",18)(819,"code",26),qx(820,"boolean "),og(),Cl(821,"code",32),qx(822," Function"),og()(),Cl(823,"td",21)(824,"em")(825,"strong"),qx(826,"(opcional)"),og()(),Cl(827,"p"),qx(828,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),og(),Cl(829,"blockquote")(830,"p"),qx(831,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),og()(),Cl(832,"p"),qx(833,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),og(),Cl(834,"ul")(835,"li")(836,"p"),qx(837,"Fun\xE7\xE3o que deve retornar um booleano."),og()(),Cl(838,"li")(839,"p"),qx(840,"Informar diretamente um valor booleano."),og()()()()()(),Cl(841,"h3"),qx(842,"Enums"),og(),Cl(843,"h4",4)(844,"code",5),qx(845,"PoProgressShape"),og()(),Cl(846,"div",2)(847,"p"),qx(848,"Enum "),Cl(849,"code"),qx(850,"PoProgressShape"),og(),qx(851," para definir o formato visual do componente de progresso."),og()(),Cl(852,"h4",10),qx(853,"Propriedades"),og(),Cl(854,"table",11)(855,"tr",12)(856,"th",13),qx(857,"Nome"),og(),Cl(858,"th",13),qx(859,"Descri\xE7\xE3o"),og()(),Cl(860,"tr",14)(861,"td",15)(862,"div",16)(863,"span",17),qx(864," bar"),Hl(865,"br"),og()()(),Cl(866,"td",21)(867,"p"),qx(868,"Formato barra de progresso (padr\xE3o)."),og()()(),Cl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),qx(873," circle"),Hl(874,"br"),og()()(),Cl(875,"td",21)(876,"p"),qx(877,"Formato circular de progresso."),og()()()(),Cl(878,"h4",4)(879,"code",5),qx(880,"PoProgressSize"),og()(),Cl(881,"div",2)(882,"p"),qx(883,"Enum para configurar a expessura ("),Cl(884,"code"),qx(885,"p-size"),og(),qx(886,") da barra de progresso do componente."),og()(),Cl(887,"h4",10),qx(888,"Propriedades"),og(),Cl(889,"table",11)(890,"tr",12)(891,"th",13),qx(892,"Nome"),og(),Cl(893,"th",13),qx(894,"Descri\xE7\xE3o"),og()(),Cl(895,"tr",14)(896,"td",15)(897,"div",16)(898,"span",17),qx(899," medium"),Hl(900,"br"),og()()(),Cl(901,"td",21)(902,"p"),qx(903,"Tamanho m\xE9dio com 4px."),og()()(),Cl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),qx(908," large"),Hl(909,"br"),og()()(),Cl(910,"td",21)(911,"p"),qx(912,"Tamanho grande com 8px."),og()()()(),Cl(913,"h4",4)(914,"code",5),qx(915,"PoProgressStatus"),og()(),Cl(916,"div",2)(917,"p"),qx(918,"Enum "),Cl(919,"code"),qx(920,"PoProgressStatus"),og(),qx(921," para os status de barra de progresso."),og()(),Cl(922,"h4",10),qx(923,"Propriedades"),og(),Cl(924,"table",11)(925,"tr",12)(926,"th",13),qx(927,"Nome"),og(),Cl(928,"th",13),qx(929,"Descri\xE7\xE3o"),og()(),Cl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),qx(934," Default"),Hl(935,"br"),og()()(),Cl(936,"td",21)(937,"p"),qx(938,"Define o status "),Cl(939,"code"),qx(940,"default"),og(),qx(941," para a barra de progresso."),og()()(),Cl(942,"tr",14)(943,"td",15)(944,"div",16)(945,"span",17),qx(946," Error"),Hl(947,"br"),og()()(),Cl(948,"td",21)(949,"p"),qx(950,"Define o status de "),Cl(951,"code"),qx(952,"error"),og(),qx(953," para a barra de progresso."),og()()(),Cl(954,"tr",14)(955,"td",15)(956,"div",16)(957,"span",17),qx(958," Success"),Hl(959,"br"),og()()(),Cl(960,"td",21)(961,"p"),qx(962,"Define o status de "),Cl(963,"code"),qx(964,"success"),og(),qx(965," para a barra de progresso."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var ye=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-progress-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view")(8,"sample-po-progress-circle-view"),og()()()),l&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Se,ve,fe,Pe,we],encapsulation:2})}return o})();var Ge=[{path:"",component:ye}],_e=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[bL.forChild(Ge),bL]})}return o})();var wt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ca,_e]})}return o})();export{wt as DocPoProgressModule};