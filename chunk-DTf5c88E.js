import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,bt as Bk,dr as Ca,ds as X0,dt as hh,du as Iue,ba as _Ne,T as Tl,L as Gl,M as sg,C as iN,H as Vp,O as nw,an as AO,aH as Ga,b8 as Wme,b9 as jme,a1 as ht,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,cQ as kk,cR as Ok,b0 as Qt,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,aJ as qhe,bH as M3,c9 as Yhe,aB as Sx,aq as gx,aM as ww,aN as r0,at as mx,aO as Ew,aP as o0,b1 as mv,d4 as Bz,a3 as lNe,aA as Nx,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic"]],standalone:false,decls:8,vars:3,consts:[["p-title","Bar"],[3,"p-value"],[1,"po-mt-1"],["p-title","Circle",1,"po-mt-2"],["p-shape","circle",3,"p-value","p-radius"]],template:function(l,i){l&1&&(Tl(0,"div")(1,"po-widget",0),Gl(2,"po-progress",1),sg()(),Tl(3,"div",2)(4,"po-widget",3),Gl(5,"po-progress",4),Tl(6,"div",2),iN(7,"Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),sg()()()),l&2&&(Vp(2),nw("p-value",25),Vp(3),nw("p-value",25)("p-radius",24));},dependencies:[Iue,_Ne],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Progress Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-progress-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Me,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,be],encapsulation:2,changeDetection:1})}return o})();function Oe(o,Q){if(o&1&&(Tl(0,"po-widget",3),Gl(1,"po-info",15),sg()),o&2){let r=Nx();Vp(),nw("p-value",r.event);}}function Ae(o,Q){if(o&1&&(Tl(0,"div")(1,"po-widget",21)(2,"form",22),Gl(3,"po-input",23),r0(),Gl(4,"po-select",24),r0(),Gl(5,"po-select",25),r0(),Gl(6,"po-switch",26),r0(),Gl(7,"po-switch",27),r0(),sg()()()),o&2){let r=Nx(2);Vp(2),nw("formGroup",r.actionForm),Vp(),o0(),Vp(),nw("p-options",r.iconOptions),o0(),Vp(),nw("p-options",r.typeOptions),o0(),Vp(),o0(),Vp(),o0();}}function ze(o,Q){if(o&1){let r=Sx();Tl(0,"po-select",16),ww("ngModelChange",function(i){Ky(r);let m=Nx();return sN(m.infoIcon,i)||(m.infoIcon=i),Xy(i)}),sg(),r0(),Tl(1,"po-input",17),ww("ngModelChange",function(i){Ky(r);let m=Nx();return sN(m.text,i)||(m.text=i),Xy(i)}),sg(),r0(),Tl(2,"po-input",18),ww("ngModelChange",function(i){Ky(r);let m=Nx();return sN(m.info,i)||(m.info=i),Xy(i)}),sg(),r0(),Tl(3,"po-radio-group",19),ww("ngModelChange",function(i){Ky(r);let m=Nx();return sN(m.sizeActions,i)||(m.sizeActions=i),Xy(i)}),sg(),r0(),Tl(4,"po-switch",20),ww("ngModelChange",function(i){Ky(r);let m=Nx();return sN(m.showAction,i)||(m.showAction=i),Xy(i)}),sg(),r0(),gx(5,Ae,8,3,"div");}if(o&2){let r=Nx();Ew("ngModel",r.infoIcon),nw("p-options",r.infoIconsOptions),o0(),Vp(),Ew("ngModel",r.text),o0(),Vp(),Ew("ngModel",r.info),o0(),Vp(),Ew("ngModel",r.sizeActions),nw("p-options",r.sizeActionsOptions),o0(),Vp(),Ew("ngModel",r.showAction),o0(),Vp(),mx(r.showAction?5:-1);}}function Be(o,Q){if(o&1){let r=Sx();Tl(0,"po-number",28),ww("ngModelChange",function(i){Ky(r);let m=Nx();return sN(m.radius,i)||(m.radius=i),Xy(i)}),sg(),r0();}if(o&2){let r=Nx();Ew("ngModel",r.radius),o0();}}var he=(()=>{class o{fb=f(Bk);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=Ca.Default;size=X0.large;shape=hh.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:Ca.Default},{label:"Success",value:Ca.Success},{label:"Error",value:Ca.Error}];sizeOptions=[{label:"Medium",value:X0.medium},{label:"Large",value:X0.large}];shapeOptions=[{label:"Bar",value:hh.bar},{label:"Circle",value:hh.circle}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];allPropertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm();}onShapeChange(r){this.restore(r),r==="circle"?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!=="disabledCancel"):this.propertiesOptions=[...this.allPropertiesOptions];}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r);});}updateAction(r){this.action=r;}onEvent(r){this.event=r;}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=false,this.indeterminate=false,this.showPercentage=false,this.status=Ca.Default,this.text=void 0,this.value=void 0,this.size=X0.large,this.radius=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.showAction=false,this.properties=[],this.sizeActions="medium",r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=hh.bar);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs"]],standalone:false,decls:17,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[1,"sample-progress-grid"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-shape","p-radius","p-size-actions","p-custom-action"],["p-title","Events"],["p-title","Properties"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],["name","shape","p-label","Shape",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mt-2"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12","po-mt-2",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],[3,"p-value"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-mb-2",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let m=Sx();Tl(0,"div",1)(1,"po-progress",2),ht("p-custom-action-click",function(){return i.onEvent("p-custom-action-click")})("p-cancel",function(){return i.onEvent("p-cancel")})("p-retry",function(){return i.onEvent("p-retry")}),sg(),gx(2,Oe,2,1,"po-widget",3),Tl(3,"po-widget",4)(4,"form",null,0)(6,"div",5)(7,"po-radio-group",6),ww("ngModelChange",function(d){return Ky(m),sN(i.shape,d)||(i.shape=d),Xy(d)}),ht("p-change",function(d){return i.onShapeChange(d)}),sg(),r0(),sg(),Tl(8,"div",7)(9,"po-number",8),ww("ngModelChange",function(d){return Ky(m),sN(i.value,d)||(i.value=d),Xy(d)}),sg(),r0(),Tl(10,"po-select",9),ww("ngModelChange",function(d){return Ky(m),sN(i.size,d)||(i.size=d),Xy(d)}),sg(),r0(),Tl(11,"po-select",10),ww("ngModelChange",function(d){return Ky(m),sN(i.status,d)||(i.status=d),Xy(d)}),sg(),r0(),gx(12,ze,6,8),gx(13,Be,1,1,"po-number",11),Tl(14,"po-checkbox-group",12),ww("ngModelChange",function(d){return Ky(m),sN(i.properties,d)||(i.properties=d),Xy(d)}),sg(),r0(),sg()()(),Tl(15,"div",13)(16,"po-button",14),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Vp(),nw("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-shape",i.shape)("p-radius",i.radius)("p-size-actions",i.sizeActions)("p-custom-action",i.action),Vp(),mx(i.shape==="bar"?2:-1),Vp(5),Ew("ngModel",i.shape),nw("p-options",i.shapeOptions),o0(),Vp(2),Ew("ngModel",i.value),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0(),Vp(),Ew("ngModel",i.status),nw("p-options",i.statusOptions),o0(),Vp(),mx(i.shape==="bar"?12:-1),Vp(),mx(i.shape==="circle"?13:-1),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,kk,Ok,Qt,C3,O3,Hhe,Dde,qhe,M3,Yhe,Iue,_Ne],styles:[".sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}"],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Progress Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="sample-progress-grid">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-progress-labs/sample-po-progress-labs.component.css"),sg(),Tl(25,"pre",11),iN(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-progress-labs"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,he],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return `${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=true;}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++;},20);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication"]],standalone:false,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),ww("ngModelChange",function(v){return sN(i.publication,v)||(i.publication=v),v}),sg(),r0(),Gl(3,"po-divider",3)(4,"po-progress",4),sg(),Tl(5,"div",1)(6,"po-button",5),ht("p-click",function(){return i.updatePublication()}),sg()()()),l&2&&(Vp(2),Ew("ngModel",i.publication),o0(),Vp(2),nw("p-value",i.progressBarValue)("p-show-percentage",true),Vp(2),nw("p-disabled",i.buttonDisabled));},dependencies:[nY,Sk,Qt,mv,Bz,lNe,Iue],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Progress - Publication"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Edit publication">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-progress-publication"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,xe],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle"]],standalone:false,decls:99,vars:2,consts:[[1,"container"],["p-title","Regra de Adequa\xE7\xE3o de Layout"],[1,"line-height"],[1,"po-font-text-large-bold"],[1,"po-text-large"],["p-title","Exemplo B\xE1sico - Radius M\xEDnimo (24px)"],[1,"po-row","po-align-items-center"],[1,"po-md-6","po-lg-4","po-center"],["p-shape","circle","p-show-percentage","true","p-radius","24",3,"p-value"],[1,"po-md-6","po-lg-8"],[1,"po-font-text"],["p-title","Com Radius Maior (60px)"],["p-shape","circle","p-show-percentage","true","p-radius","60",3,"p-value"],["p-title","Com Status Error (Radius 24px)"],["p-shape","circle","p-value","50","p-status","error","p-radius","24"],["p-title","Modo Indeterminado"],["p-shape","circle","p-indeterminate","true","p-radius","30"],["p-title","Compara\xE7\xE3o Visual - Diferentes Status"],[1,"po-row","row"],[1,"po-md-3","po-center","items"],[1,"po-font-text-large-bold","po-mb-1"],["p-shape","circle","p-value","100","p-status","success","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","50","p-status","warning","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","0","p-status","error","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","75","p-show-percentage","true","p-radius","25"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"p",3),iN(4,"\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),sg(),Tl(5,"p",4),iN(6," O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos. "),sg()()(),Tl(7,"po-widget",5)(8,"div",6)(9,"div",7),Gl(10,"po-progress",8),sg(),Tl(11,"div",9)(12,"p")(13,"strong"),iN(14,"Configura\xE7\xE3o:"),sg()(),Tl(15,"ul")(16,"li"),iN(17,'p-shape="circle"'),sg(),Tl(18,"li"),iN(19,'p-value="65"'),sg(),Tl(20,"li"),iN(21,'p-show-percentage="true"'),sg(),Tl(22,"li"),iN(23,'p-radius="24" (valor m\xEDnimo permitido)'),sg()(),Tl(24,"p",10),iN(25,"A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo."),sg()()()(),Tl(26,"po-widget",11)(27,"div",6)(28,"div",7),Gl(29,"po-progress",12),sg(),Tl(30,"div",9)(31,"p")(32,"strong"),iN(33,"Configura\xE7\xE3o:"),sg()(),Tl(34,"ul")(35,"li"),iN(36,'p-shape="circle"'),sg(),Tl(37,"li"),iN(38,'p-value="65"'),sg(),Tl(39,"li"),iN(40,'p-show-percentage="true"'),sg(),Tl(41,"li"),iN(42,'p-radius="60" (valor maior)'),sg()(),Tl(43,"p",10),iN(44," Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o. "),sg()()()(),Tl(45,"po-widget",13)(46,"div",6)(47,"div",7),Gl(48,"po-progress",14),sg(),Tl(49,"div",9)(50,"p")(51,"strong"),iN(52,"Configura\xE7\xE3o:"),sg()(),Tl(53,"ul")(54,"li"),iN(55,'p-shape="circle"'),sg(),Tl(56,"li"),iN(57,'p-value="50"'),sg(),Tl(58,"li"),iN(59,'p-status="error"'),sg(),Tl(60,"li"),iN(61,'p-radius="24" (valor m\xEDnimo)'),sg()(),Tl(62,"p",10),iN(63,"\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o."),sg()()()(),Tl(64,"po-widget",15)(65,"div",6)(66,"div",7),Gl(67,"po-progress",16),sg(),Tl(68,"div",9)(69,"p")(70,"strong"),iN(71,"Configura\xE7\xE3o:"),sg()(),Tl(72,"ul")(73,"li"),iN(74,'p-shape="circle"'),sg(),Tl(75,"li"),iN(76,'p-indeterminate="true"'),sg(),Tl(77,"li"),iN(78,'p-radius="30"'),sg()(),Tl(79,"p",10),iN(80,"Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento."),sg()()()(),Tl(81,"po-widget",17)(82,"div",18)(83,"div",19)(84,"p",20),iN(85,"Success"),sg(),Gl(86,"po-progress",21),sg(),Tl(87,"div",19)(88,"p",20),iN(89,"Warning"),sg(),Gl(90,"po-progress",22),sg(),Tl(91,"div",19)(92,"p",20),iN(93,"Error"),sg(),Gl(94,"po-progress",23),sg(),Tl(95,"div",19)(96,"p",20),iN(97,"Default"),sg(),Gl(98,"po-progress",24),sg()()()()),l&2&&(Vp(10),nw("p-value",i.value),Vp(19),nw("p-value",i.value));},dependencies:[Iue,_Ne],styles:[".container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Progress Circle"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-progress-circle/sample-po-progress-circle.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="container">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-progress-circle/sample-po-progress-circle.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-progress-circle/sample-po-progress-circle.component.css"),sg(),Tl(25,"pre",11),iN(26,`.container {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-progress-circle"),sg(),Gl(29,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Re,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ce],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-doc"]],standalone:false,decls:966,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoProgressModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-progress"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoProgressComponent"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),sg(),Tl(18,"p"),iN(19,"Este componente pode ser utilizado no "),Tl(20,"em"),iN(21,"upload"),sg(),iN(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),sg(),Tl(23,"h4"),iN(24,"Tokens customiz\xE1veis"),sg(),Tl(25,"p"),iN(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(27,"blockquote")(28,"p"),iN(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(30,"a",6),iN(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(32,"."),sg()(),Tl(33,"table")(34,"thead")(35,"tr")(36,"th"),iN(37,"Propriedade"),sg(),Tl(38,"th"),iN(39,"Descri\xE7\xE3o"),sg(),Tl(40,"th"),iN(41,"Valor Padr\xE3o"),sg()()(),Tl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),iN(46,"Default Values"),sg()(),Gl(47,"td")(48,"td"),sg(),Tl(49,"tr")(50,"td")(51,"code"),iN(52,"--font-family"),sg()(),Tl(53,"td"),iN(54,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(55,"td")(56,"code"),iN(57,"var(--font-family-theme)"),sg()()(),Tl(58,"tr")(59,"td")(60,"code"),iN(61,"--text-color"),sg()(),Tl(62,"td"),iN(63,"Cor do texto"),sg(),Tl(64,"td")(65,"code"),iN(66,"var(--color-neutral-dark-90)"),sg()()(),Tl(67,"tr")(68,"td")(69,"strong"),iN(70,"Error"),sg()(),Gl(71,"td")(72,"td"),sg(),Tl(73,"tr")(74,"td")(75,"code"),iN(76,"--text-color-error"),sg()(),Tl(77,"td"),iN(78,"Cor do texto no estado error"),sg(),Tl(79,"td")(80,"code"),iN(81,"var(--color-feedback-negative-dark)"),sg()()(),Tl(82,"tr")(83,"td")(84,"code"),iN(85,"--color-icon-error"),sg()(),Tl(86,"td"),iN(87,"Cor do \xEDcone no estado error"),sg(),Tl(88,"td")(89,"code"),iN(90,"var(--color-feedback-negative-dark)"),sg()()(),Tl(91,"tr")(92,"td")(93,"strong"),iN(94,"po-progress-bar"),sg()(),Gl(95,"td")(96,"td"),sg(),Tl(97,"tr")(98,"td")(99,"code"),iN(100,"--background-color-tray"),sg()(),Tl(101,"td"),iN(102,"Cor do background"),sg(),Tl(103,"td")(104,"code"),iN(105,"var(--color-brand-01-lightest)"),sg()()(),Tl(106,"tr")(107,"td")(108,"code"),iN(109,"--background-color-indicator"),sg()(),Tl(110,"td"),iN(111,"Cor do background do indicador"),sg(),Tl(112,"td")(113,"code"),iN(114,"var(--color-action-default)"),sg()()(),Tl(115,"tr")(116,"td")(117,"strong"),iN(118,"po-progress-circle"),sg()(),Gl(119,"td")(120,"td"),sg(),Tl(121,"tr")(122,"td")(123,"code"),iN(124,"--background-color-tray"),sg()(),Tl(125,"td"),iN(126,"Cor do background"),sg(),Tl(127,"td")(128,"code"),iN(129,"var(--color-brand-01-lightest)"),sg()()(),Tl(130,"tr")(131,"td")(132,"code"),iN(133,"--background-color-indicator"),sg()(),Tl(134,"td"),iN(135,"Cor do background do indicador"),sg(),Tl(136,"td")(137,"code"),iN(138,"var(--color-action-default)"),sg()()()()()(),Tl(139,"div",7)(140,"h4",8),iN(141,"Seletor"),sg(),Tl(142,"pre",9),iN(143,`<po-progress
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
`),sg()(),Tl(144,"h4",10),iN(145,"Propriedades"),sg(),Tl(146,"table",11)(147,"tr",12)(148,"th",13),iN(149,"Nome"),sg(),Tl(150,"th",13),iN(151,"Tipo"),sg(),Tl(152,"th",13),iN(153,"Padr\xE3o"),sg(),Tl(154,"th",13),iN(155,"Descri\xE7\xE3o"),sg()(),Tl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),iN(160," p-aria-label"),Gl(161,"br"),sg()()(),Tl(162,"td",18)(163,"code",19),iN(164,"string"),sg()(),Tl(165,"td",20),iN(166,"-"),sg(),Tl(167,"td",21)(168,"em")(169,"strong"),iN(170,"(opcional)"),sg()(),Tl(171,"p"),iN(172,"Define um nome acess\xEDvel para o elemento com "),Tl(173,"code"),iN(174,'role="progressbar"'),sg(),iN(175,"."),sg(),Tl(176,"p"),iN(177,"Quando n\xE3o informado, o componente utiliza o valor de "),Tl(178,"code"),iN(179,"p-text"),sg(),iN(180," como alternativa, se dispon\xEDvel."),sg()()(),Tl(181,"tr",14)(182,"td",15)(183,"div",22)(184,"span",23),iN(185," (p-cancel)"),Gl(186,"br"),sg()()(),Tl(187,"td",18)(188,"code",24),iN(189,"EventEmitter"),sg()(),Tl(190,"td",20),iN(191,"-"),sg(),Tl(192,"td",21)(193,"em")(194,"strong"),iN(195,"(opcional)"),sg()(),Tl(196,"p"),iN(197,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),sg(),Tl(198,"p"),iN(199,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),sg(),Tl(200,"blockquote")(201,"p"),iN(202,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),Tl(203,"code"),iN(204,"PoProgressStatus.Success"),sg(),iN(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),sg()(),Tl(206,"blockquote")(207,"p"),iN(208,"N\xE3o compat\xEDvel com "),Tl(209,"code"),iN(210,'p-shape="circle"'),sg(),iN(211,"."),sg()()()(),Tl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),iN(216," p-custom-action"),Gl(217,"br"),sg()()(),Tl(218,"td",18)(219,"code",25),iN(220,"PoProgressAction"),sg()(),Tl(221,"td",20),iN(222,"-"),sg(),Tl(223,"td",21)(224,"em")(225,"strong"),iN(226,"(opcional)"),sg()(),Tl(227,"p"),iN(228,"Permite definir uma a\xE7\xE3o personalizada no componente "),Tl(229,"code"),iN(230,"po-progress"),sg(),iN(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Tl(232,"strong"),iN(233,"PoProgressAction"),sg(),iN(234,", possibilitando configurar:"),sg(),Tl(235,"ul")(236,"li")(237,"strong")(238,"code"),iN(239,"label"),sg()(),iN(240,": Texto exibido no bot\xE3o (opcional)."),sg(),Tl(241,"li")(242,"strong")(243,"code"),iN(244,"icon"),sg()(),iN(245,": \xCDcone exibido no bot\xE3o (opcional)."),sg(),Tl(246,"li")(247,"strong")(248,"code"),iN(249,"type"),sg()(),iN(250,": Tipo do bot\xE3o ("),Tl(251,"code"),iN(252,"default"),sg(),iN(253," ou "),Tl(254,"code"),iN(255,"danger"),sg(),iN(256,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),sg(),Tl(257,"li")(258,"strong")(259,"code"),iN(260,"disabled"),sg()(),iN(261,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),sg(),Tl(262,"li")(263,"strong")(264,"code"),iN(265,"visible"),sg()(),iN(266,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),sg()(),Tl(267,"blockquote")(268,"p"),iN(269,"N\xE3o compat\xEDvel com "),Tl(270,"code"),iN(271,'p-shape="circle"'),sg(),iN(272,"."),sg()()()(),Tl(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),iN(277," (p-custom-action-click)"),Gl(278,"br"),sg()()(),Tl(279,"td",18)(280,"code",24),iN(281,"EventEmitter"),sg()(),Tl(282,"td",20),iN(283,"-"),sg(),Tl(284,"td",21)(285,"em")(286,"strong"),iN(287,"(opcional)"),sg()(),Tl(288,"p"),iN(289,"Evento emitido quando o bot\xE3o definido em "),Tl(290,"code"),iN(291,"p-custom-action"),sg(),iN(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),sg(),Tl(293,"blockquote")(294,"p"),iN(295,"N\xE3o compat\xEDvel com "),Tl(296,"code"),iN(297,'p-shape="circle"'),sg(),iN(298,"."),sg()()()(),Tl(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),iN(303," p-disabled-cancel"),Gl(304,"br"),sg()()(),Tl(305,"td",18)(306,"code",26),iN(307,"boolean"),sg()(),Tl(308,"td",20)(309,"p")(310,"code"),iN(311,"false"),sg()()(),Tl(312,"td",21)(313,"em")(314,"strong"),iN(315,"(opcional)"),sg()(),Tl(316,"p"),iN(317,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),sg(),Tl(318,"blockquote")(319,"p"),iN(320,"Se nenhuma fun\xE7\xE3o for passada para o evento "),Tl(321,"code"),iN(322,"(p-cancel)"),sg(),iN(323," ou a barra de progresso estiver com o status "),Tl(324,"code"),iN(325,"PoProgressStatus.Success"),sg(),iN(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),sg()(),Tl(327,"blockquote")(328,"p"),iN(329,"N\xE3o compat\xEDvel com "),Tl(330,"code"),iN(331,'p-shape="circle"'),sg(),iN(332,"."),sg()()()(),Tl(333,"tr",14)(334,"td",15)(335,"div",16)(336,"span",17),iN(337," p-indeterminate"),Gl(338,"br"),sg()()(),Tl(339,"td",18)(340,"code",26),iN(341,"boolean"),sg()(),Tl(342,"td",20)(343,"p")(344,"code"),iN(345,"false"),sg()()(),Tl(346,"td",21)(347,"em")(348,"strong"),iN(349,"(opcional)"),sg()(),Tl(350,"p"),iN(351,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),sg(),Tl(352,"p"),iN(353,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),sg(),Tl(354,"blockquote")(355,"p"),iN(356,"Caso esta propriedade e a "),Tl(357,"code"),iN(358,"p-value"),sg(),iN(359," seja habilitada, a propriedade "),Tl(360,"code"),iN(361,"p-value"),sg(),iN(362," ser\xE1 ignorada."),sg()()()(),Tl(363,"tr",14)(364,"td",15)(365,"div",16)(366,"span",17),iN(367," p-info"),Gl(368,"br"),sg()()(),Tl(369,"td",18)(370,"code",19),iN(371,"string"),sg()(),Tl(372,"td",20),iN(373,"-"),sg(),Tl(374,"td",21)(375,"em")(376,"strong"),iN(377,"(opcional)"),sg()(),Tl(378,"p"),iN(379,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),sg(),Tl(380,"blockquote")(381,"p"),iN(382,"N\xE3o compat\xEDvel com "),Tl(383,"code"),iN(384,'p-shape="circle"'),sg(),iN(385,"."),sg()()()(),Tl(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),iN(390," p-info-icon"),Gl(391,"br"),sg()()(),Tl(392,"td",18)(393,"code",19),iN(394,"string "),sg(),Tl(395,"code",27),iN(396," TemplateRef<void>"),sg()(),Tl(397,"td",20),iN(398,"-"),sg(),Tl(399,"td",21)(400,"em")(401,"strong"),iN(402,"(opcional)"),sg()(),Tl(403,"p"),iN(404,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),Tl(405,"code"),iN(406,"p-info"),sg(),iN(407,"."),sg(),Tl(408,"p"),iN(409,"Exemplo: "),Tl(410,"code"),iN(411,"an an-check"),sg(),iN(412,"."),sg(),Tl(413,"blockquote")(414,"p"),iN(415,"N\xE3o compat\xEDvel com "),Tl(416,"code"),iN(417,'p-shape="circle"'),sg(),iN(418,"."),sg()()()(),Tl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),iN(423," p-radius"),Gl(424,"br"),sg()()(),Tl(425,"td",18)(426,"code",28),iN(427,"number"),sg()(),Tl(428,"td",20)(429,"p")(430,"code"),iN(431,"45"),sg(),iN(432," (autom\xE1tico)"),sg()(),Tl(433,"td",21)(434,"em")(435,"strong"),iN(436,"(opcional)"),sg()(),Tl(437,"p"),iN(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Tl(439,"code"),iN(440,'p-shape="circle"'),sg(),iN(441,"."),sg(),Tl(442,"blockquote")(443,"p"),iN(444,"O valor m\xEDnimo aceito \xE9 "),Tl(445,"strong"),iN(446,"24"),sg(),iN(447,"."),sg()(),Tl(448,"blockquote")(449,"p"),iN(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Tl(451,"strong"),iN(452,"45"),sg(),iN(453," ser\xE1 utilizado."),sg()(),Tl(454,"blockquote")(455,"p"),iN(456,"N\xE3o compat\xEDvel com "),Tl(457,"code"),iN(458,'p-shape="bar"'),sg(),iN(459,"."),sg()()()(),Tl(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),iN(464," (p-retry)"),Gl(465,"br"),sg()()(),Tl(466,"td",18)(467,"code",24),iN(468,"EventEmitter"),sg()(),Tl(469,"td",20),iN(470,"-"),sg(),Tl(471,"td",21)(472,"em")(473,"strong"),iN(474,"(opcional)"),sg()(),Tl(475,"p"),iN(476,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),sg(),Tl(477,"blockquote")(478,"p"),iN(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Tl(480,"code"),iN(481,"PoProgressStatus.Error"),sg(),iN(482,"."),sg()(),Tl(483,"blockquote")(484,"p"),iN(485,"N\xE3o compat\xEDvel com "),Tl(486,"code"),iN(487,'p-shape="circle"'),sg(),iN(488,"."),sg()()()(),Tl(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),iN(493," p-shape"),Gl(494,"br"),sg()()(),Tl(495,"td",18)(496,"code",19),iN(497,"string"),sg()(),Tl(498,"td",20)(499,"p")(500,"code"),iN(501,"bar"),sg()()(),Tl(502,"td",21)(503,"em")(504,"strong"),iN(505,"(opcional)"),sg()(),Tl(506,"p"),iN(507,"Define o formato visual do componente de progresso."),sg(),Tl(508,"p"),iN(509,"Valores v\xE1lidos:"),sg(),Tl(510,"ul")(511,"li")(512,"code"),iN(513,"bar"),sg(),iN(514,": exibe o progresso em formato de barra."),sg(),Tl(515,"li")(516,"code"),iN(517,"circle"),sg(),iN(518,": exibe o progresso em formato circular."),sg()()()(),Tl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),iN(523," p-show-percentage"),Gl(524,"br"),sg()()(),Tl(525,"td",18)(526,"code",26),iN(527,"boolean"),sg()(),Tl(528,"td",20)(529,"p")(530,"code"),iN(531,"false"),sg()()(),Tl(532,"td",21)(533,"em")(534,"strong"),iN(535,"(opcional)"),sg()(),Tl(536,"p"),iN(537,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),sg(),Tl(538,"blockquote")(539,"p"),iN(540,"Se utilizada no "),Tl(541,"code"),iN(542,'p-shape="circle"'),sg(),iN(543," e o status estiver como "),Tl(544,"code"),iN(545,"error"),sg(),iN(546,", a porcentagem n\xE3o ser\xE1 exibida."),sg()()()(),Tl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),iN(551," p-size"),Gl(552,"br"),sg()()(),Tl(553,"td",18)(554,"code",19),iN(555,"string"),sg()(),Tl(556,"td",20)(557,"p")(558,"code"),iN(559,"large"),sg()()(),Tl(560,"td",21)(561,"em")(562,"strong"),iN(563,"(opcional)"),sg()(),Tl(564,"p"),iN(565,"Define a expessura da barra de progresso."),sg(),Tl(566,"p"),iN(567,"Valores v\xE1lidos:"),sg(),Tl(568,"ul")(569,"li"),iN(570,"medium"),sg(),Tl(571,"li"),iN(572,"large"),sg()()()(),Tl(573,"tr",14)(574,"td",15)(575,"div",16)(576,"span",17),iN(577," p-size-actions"),Gl(578,"br"),sg()()(),Tl(579,"td",18)(580,"code",19),iN(581,"string"),sg()(),Tl(582,"td",20)(583,"p")(584,"code"),iN(585,"medium"),sg()()(),Tl(586,"td",21)(587,"em")(588,"strong"),iN(589,"(opcional)"),sg()(),Tl(590,"p"),iN(591,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),Tl(592,"code"),iN(593,"p-size"),sg(),iN(594,":"),sg(),Tl(595,"ul")(596,"li")(597,"code"),iN(598,"small"),sg(),iN(599,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(600,"li")(601,"code"),iN(602,"medium"),sg(),iN(603,": aplica a medida medium de cada componente."),sg()(),Tl(604,"blockquote")(605,"p"),iN(606,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(607,"code"),iN(608,"medium"),sg(),iN(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(610,"a",29),iN(611,"po-theme"),sg(),iN(612,"."),sg()(),Tl(613,"blockquote")(614,"p"),iN(615,"N\xE3o compat\xEDvel com "),Tl(616,"code"),iN(617,'p-shape="circle"'),sg(),iN(618,"."),sg()()()(),Tl(619,"tr",14)(620,"td",15)(621,"div",16)(622,"span",17),iN(623," p-status"),Gl(624,"br"),sg()()(),Tl(625,"td",18)(626,"code",30),iN(627,"PoProgressStatus"),sg()(),Tl(628,"td",20)(629,"p")(630,"code"),iN(631,"PoProgressStatus.Default"),sg()()(),Tl(632,"td",21)(633,"em")(634,"strong"),iN(635,"(opcional)"),sg()(),Tl(636,"p"),iN(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),sg()()(),Tl(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),iN(642," p-text"),Gl(643,"br"),sg()()(),Tl(644,"td",18)(645,"code",19),iN(646,"string"),sg()(),Tl(647,"td",20),iN(648,"-"),sg(),Tl(649,"td",21)(650,"em")(651,"strong"),iN(652,"(opcional)"),sg()(),Tl(653,"p"),iN(654,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),sg(),Tl(655,"blockquote")(656,"p"),iN(657,"N\xE3o compat\xEDvel com "),Tl(658,"code"),iN(659,'p-shape="circle"'),sg(),iN(660,"."),sg()()()(),Tl(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),iN(665," p-value"),Gl(666,"br"),sg()()(),Tl(667,"td",18)(668,"code",28),iN(669,"number"),sg()(),Tl(670,"td",20)(671,"p")(672,"code"),iN(673,"0"),sg()()(),Tl(674,"td",21)(675,"em")(676,"strong"),iN(677,"(opcional)"),sg()(),Tl(678,"p"),iN(679,"Valor que representar\xE1 o progresso."),sg(),Tl(680,"blockquote")(681,"p"),iN(682,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),Tl(683,"code"),iN(684,"0"),sg(),iN(685," \xE0 "),Tl(686,"code"),iN(687,"100"),sg(),iN(688,"."),sg()()()()(),Tl(689,"h3"),iN(690,"Interfaces"),sg(),Tl(691,"h4",31)(692,"code",5),iN(693,"PoProgressAction"),sg()(),Tl(694,"div",2)(695,"p"),iN(696,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),sg()(),Tl(697,"h4",10),iN(698,"Propriedades"),sg(),Tl(699,"table",11)(700,"tr",12)(701,"th",13),iN(702,"Nome"),sg(),Tl(703,"th",13),iN(704,"Tipo"),sg(),Tl(705,"th",13),iN(706,"Descri\xE7\xE3o"),sg()(),Tl(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),iN(711," disabled"),Gl(712,"br"),sg()()(),Tl(713,"td",18)(714,"code",26),iN(715,"boolean "),sg(),Tl(716,"code",32),iN(717," Function"),sg()(),Tl(718,"td",21)(719,"em")(720,"strong"),iN(721,"(opcional)"),sg()(),Tl(722,"p"),iN(723,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),sg(),Tl(724,"p"),iN(725,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),sg()()(),Tl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),iN(730," icon"),Gl(731,"br"),sg()()(),Tl(732,"td",18)(733,"code",19),iN(734,"string "),sg(),Tl(735,"code",27),iN(736," TemplateRef<void>"),sg()(),Tl(737,"td",21)(738,"em")(739,"strong"),iN(740,"(opcional)"),sg()(),Tl(741,"p"),iN(742,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(743,"p"),iN(744,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(745,"a",33),iN(746,"Biblioteca de \xEDcones"),sg(),iN(747,". conforme exemplo abaixo:"),sg(),Tl(748,"pre")(749,"code"),iN(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),sg()(),Tl(751,"p"),iN(752,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Tl(753,"pre")(754,"code"),iN(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),sg()(),Tl(756,"p"),iN(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(758,"code"),iN(759,"TemplateRef"),sg(),iN(760,`, conforme exemplo abaixo:
component.html:`),sg(),Tl(761,"pre")(762,"code"),iN(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),sg()(),Tl(764,"p"),iN(765,"component.ts:"),sg(),Tl(766,"pre")(767,"code"),iN(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),sg()()()(),Tl(769,"tr",14)(770,"td",15)(771,"div",16)(772,"span",17),iN(773," label"),Gl(774,"br"),sg()()(),Tl(775,"td",18)(776,"code",19),iN(777,"string"),sg()(),Tl(778,"td",21)(779,"em")(780,"strong"),iN(781,"(opcional)"),sg()(),Tl(782,"p"),iN(783,"R\xF3tulo da a\xE7\xE3o."),sg()()(),Tl(784,"tr",14)(785,"td",15)(786,"div",16)(787,"span",17),iN(788," type"),Gl(789,"br"),sg()()(),Tl(790,"td",18)(791,"code",19),iN(792,"string"),sg()(),Tl(793,"td",21)(794,"em")(795,"strong"),iN(796,"(opcional)"),sg()(),Tl(797,"p"),iN(798,"Define a cor do item, sendo "),Tl(799,"code"),iN(800,"default"),sg(),iN(801," o padr\xE3o."),sg(),Tl(802,"p"),iN(803,"Valores v\xE1lidos:"),sg(),Tl(804,"ul")(805,"li")(806,"code"),iN(807,"default"),sg()(),Tl(808,"li")(809,"code"),iN(810,"danger"),sg(),iN(811," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),sg()()()(),Tl(812,"tr",14)(813,"td",15)(814,"div",16)(815,"span",17),iN(816," visible"),Gl(817,"br"),sg()()(),Tl(818,"td",18)(819,"code",26),iN(820,"boolean "),sg(),Tl(821,"code",32),iN(822," Function"),sg()(),Tl(823,"td",21)(824,"em")(825,"strong"),iN(826,"(opcional)"),sg()(),Tl(827,"p"),iN(828,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg(),Tl(829,"blockquote")(830,"p"),iN(831,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg()(),Tl(832,"p"),iN(833,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),sg(),Tl(834,"ul")(835,"li")(836,"p"),iN(837,"Fun\xE7\xE3o que deve retornar um booleano."),sg()(),Tl(838,"li")(839,"p"),iN(840,"Informar diretamente um valor booleano."),sg()()()()()(),Tl(841,"h3"),iN(842,"Enums"),sg(),Tl(843,"h4",4)(844,"code",5),iN(845,"PoProgressShape"),sg()(),Tl(846,"div",2)(847,"p"),iN(848,"Enum "),Tl(849,"code"),iN(850,"PoProgressShape"),sg(),iN(851," para definir o formato visual do componente de progresso."),sg()(),Tl(852,"h4",10),iN(853,"Propriedades"),sg(),Tl(854,"table",11)(855,"tr",12)(856,"th",13),iN(857,"Nome"),sg(),Tl(858,"th",13),iN(859,"Descri\xE7\xE3o"),sg()(),Tl(860,"tr",14)(861,"td",15)(862,"div",16)(863,"span",17),iN(864," bar"),Gl(865,"br"),sg()()(),Tl(866,"td",21)(867,"p"),iN(868,"Formato barra de progresso (padr\xE3o)."),sg()()(),Tl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),iN(873," circle"),Gl(874,"br"),sg()()(),Tl(875,"td",21)(876,"p"),iN(877,"Formato circular de progresso."),sg()()()(),Tl(878,"h4",4)(879,"code",5),iN(880,"PoProgressSize"),sg()(),Tl(881,"div",2)(882,"p"),iN(883,"Enum para configurar a expessura ("),Tl(884,"code"),iN(885,"p-size"),sg(),iN(886,") da barra de progresso do componente."),sg()(),Tl(887,"h4",10),iN(888,"Propriedades"),sg(),Tl(889,"table",11)(890,"tr",12)(891,"th",13),iN(892,"Nome"),sg(),Tl(893,"th",13),iN(894,"Descri\xE7\xE3o"),sg()(),Tl(895,"tr",14)(896,"td",15)(897,"div",16)(898,"span",17),iN(899," medium"),Gl(900,"br"),sg()()(),Tl(901,"td",21)(902,"p"),iN(903,"Tamanho m\xE9dio com 4px."),sg()()(),Tl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),iN(908," large"),Gl(909,"br"),sg()()(),Tl(910,"td",21)(911,"p"),iN(912,"Tamanho grande com 8px."),sg()()()(),Tl(913,"h4",4)(914,"code",5),iN(915,"PoProgressStatus"),sg()(),Tl(916,"div",2)(917,"p"),iN(918,"Enum "),Tl(919,"code"),iN(920,"PoProgressStatus"),sg(),iN(921," para os status de barra de progresso."),sg()(),Tl(922,"h4",10),iN(923,"Propriedades"),sg(),Tl(924,"table",11)(925,"tr",12)(926,"th",13),iN(927,"Nome"),sg(),Tl(928,"th",13),iN(929,"Descri\xE7\xE3o"),sg()(),Tl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),iN(934," Default"),Gl(935,"br"),sg()()(),Tl(936,"td",21)(937,"p"),iN(938,"Define o status "),Tl(939,"code"),iN(940,"default"),sg(),iN(941," para a barra de progresso."),sg()()(),Tl(942,"tr",14)(943,"td",15)(944,"div",16)(945,"span",17),iN(946," Error"),Gl(947,"br"),sg()()(),Tl(948,"td",21)(949,"p"),iN(950,"Define o status de "),Tl(951,"code"),iN(952,"error"),sg(),iN(953," para a barra de progresso."),sg()()(),Tl(954,"tr",14)(955,"td",15)(956,"div",16)(957,"span",17),iN(958," Success"),Gl(959,"br"),sg()()(),Tl(960,"td",21)(961,"p"),iN(962,"Define o status de "),Tl(963,"code"),iN(964,"success"),sg(),iN(965," para a barra de progresso."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-progress-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view")(8,"sample-po-progress-circle-view"),sg()()()),l&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,Se,ve,fe,Pe,we],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:"",component:ye}],De=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[DL.forChild(Ge),DL]})}return o})();var wt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,De]})}return o})();export{wt as DocPoProgressModule};