import{$ as N_e,$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Qt as i5,Sa as zk,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_n as rf,_r as Ky,aa as uN,ct as Ry,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,li as _x,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,qt as gs,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,xr as Lk,yi as cN,yn as ube,zi as jk}from"./main-3EWTGE7T.js";var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-basic`]],standalone:!1,decls:8,vars:3,consts:[[`p-title`,`Bar`],[3,`p-value`],[1,`po-mt-1`],[`p-title`,`Circle`,1,`po-mt-2`],[`p-shape`,`circle`,3,`p-value`,`p-radius`]],template:function(l,i){l&1&&(Tl(0,`div`)(1,`po-widget`,0),Gl(2,`po-progress`,1),ag()(),Tl(3,`div`,2)(4,`po-widget`,3),Gl(5,`po-progress`,4),Tl(6,`div`,2),cN(7,`Para adequação do layout, o valor mínimo de p-radius é 24px.`),ag()()()),l&2&&(jp(2),nw(`p-value`,25),jp(3),nw(`p-value`,25)(`p-radius`,24))},dependencies:[N_e,O8e],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Progress Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-progress-basic/sample-po-progress-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-progress-basic/sample-po-progress-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-progress-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Me,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return o})();function Oe(o,Q){if(o&1&&(Tl(0,`po-widget`,3),Gl(1,`po-info`,15),ag()),o&2){let r=Fx();jp(),nw(`p-value`,r.event)}}function Ae(o,Q){if(o&1&&(Tl(0,`div`)(1,`po-widget`,21)(2,`form`,22),Gl(3,`po-input`,23),a0(),Gl(4,`po-select`,24),a0(),Gl(5,`po-select`,25),a0(),Gl(6,`po-switch`,26),a0(),Gl(7,`po-switch`,27),a0(),ag()()()),o&2){let r=Fx(2);jp(2),nw(`formGroup`,r.actionForm),jp(),l0(),jp(),nw(`p-options`,r.iconOptions),l0(),jp(),nw(`p-options`,r.typeOptions),l0(),jp(),l0(),jp(),l0()}}function ze(o,Q){if(o&1){let r=Ax();Tl(0,`po-select`,16),ww(`ngModelChange`,function(i){Ky(r);let m=Fx();return uN(m.infoIcon,i)||(m.infoIcon=i),Xy(i)}),ag(),a0(),Tl(1,`po-input`,17),ww(`ngModelChange`,function(i){Ky(r);let m=Fx();return uN(m.text,i)||(m.text=i),Xy(i)}),ag(),a0(),Tl(2,`po-input`,18),ww(`ngModelChange`,function(i){Ky(r);let m=Fx();return uN(m.info,i)||(m.info=i),Xy(i)}),ag(),a0(),Tl(3,`po-radio-group`,19),ww(`ngModelChange`,function(i){Ky(r);let m=Fx();return uN(m.sizeActions,i)||(m.sizeActions=i),Xy(i)}),ag(),a0(),Tl(4,`po-switch`,20),ww(`ngModelChange`,function(i){Ky(r);let m=Fx();return uN(m.showAction,i)||(m.showAction=i),Xy(i)}),ag(),a0(),_x(5,Ae,8,3,`div`)}if(o&2){let r=Fx();Ew(`ngModel`,r.infoIcon),nw(`p-options`,r.infoIconsOptions),l0(),jp(),Ew(`ngModel`,r.text),l0(),jp(),Ew(`ngModel`,r.info),l0(),jp(),Ew(`ngModel`,r.sizeActions),nw(`p-options`,r.sizeActionsOptions),l0(),jp(),Ew(`ngModel`,r.showAction),l0(),jp(),Dx(r.showAction?5:-1)}}function Be(o,Q){if(o&1){let r=Ax();Tl(0,`po-number`,28),ww(`ngModelChange`,function(i){Ky(r);let m=Fx();return uN(m.radius,i)||(m.radius=i),Xy(i)}),ag(),a0()}if(o&2)Ew(`ngModel`,Fx().radius),l0()}var he=(()=>{class o{fb=f(zk);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=gs.Default;size=Ry.large;shape=rf.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:`an an-warning-circle`,value:`an an-warning-circle`},{label:`an an-check`,value:`an an-check`},{label:`an an-user`,value:`an an-user`},{label:`an an-cloud-slash`,value:`an an-cloud-slash`}];statusOptions=[{label:`Default`,value:gs.Default},{label:`Success`,value:gs.Success},{label:`Error`,value:gs.Error}];sizeOptions=[{label:`Medium`,value:Ry.medium},{label:`Large`,value:Ry.large}];shapeOptions=[{label:`Bar`,value:rf.bar},{label:`Circle`,value:rf.circle}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Visible`,value:`visible`}];allPropertiesOptions=[{value:`disabledCancel`,label:`Disabled cancel`},{value:`indeterminate`,label:`Indeterminate`},{value:`showPercentage`,label:`Show percentage`}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm()}onShapeChange(r){this.restore(r),r===`circle`?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!==`disabledCancel`):this.propertiesOptions=[...this.allPropertiesOptions]}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r)})}updateAction(r){this.action=r}onEvent(r){this.event=r}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=gs.Default,this.text=void 0,this.value=void 0,this.size=Ry.large,this.radius=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.showAction=!1,this.properties=[],this.sizeActions=`medium`,r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=rf.bar)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-labs`]],standalone:!1,decls:17,vars:25,consts:[[`progressBarPropertiesForm`,`ngForm`],[1,`sample-progress-grid`],[3,`p-custom-action-click`,`p-cancel`,`p-retry`,`p-disabled-cancel`,`p-indeterminate`,`p-show-percentage`,`p-info`,`p-info-icon`,`p-status`,`p-text`,`p-value`,`p-size`,`p-shape`,`p-radius`,`p-size-actions`,`p-custom-action`],[`p-title`,`Events`],[`p-title`,`Properties`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`],[`name`,`shape`,`p-label`,`Shape`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`,`po-mt-2`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-max`,`100`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`Size`,`p-label`,`Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Status`,`p-label`,`Status`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[3,`p-value`],[`name`,`infoIcon`,`p-label`,`Info icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`text`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`info`,`p-clean`,``,`p-label`,`Info`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`sizeActions`,`p-columns`,`4`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-mb-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`addAction`,`p-label`,`Add Action Button`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`]],template:function(l,i){if(l&1){let m=Ax();Tl(0,`div`,1)(1,`po-progress`,2),ht(`p-custom-action-click`,function(){return i.onEvent(`p-custom-action-click`)})(`p-cancel`,function(){return i.onEvent(`p-cancel`)})(`p-retry`,function(){return i.onEvent(`p-retry`)}),ag(),_x(2,Oe,2,1,`po-widget`,3),Tl(3,`po-widget`,4)(4,`form`,null,0)(6,`div`,5)(7,`po-radio-group`,6),ww(`ngModelChange`,function(d){return Ky(m),uN(i.shape,d)||(i.shape=d),Xy(d)}),ht(`p-change`,function(d){return i.onShapeChange(d)}),ag(),a0(),ag(),Tl(8,`div`,7)(9,`po-number`,8),ww(`ngModelChange`,function(d){return Ky(m),uN(i.value,d)||(i.value=d),Xy(d)}),ag(),a0(),Tl(10,`po-select`,9),ww(`ngModelChange`,function(d){return Ky(m),uN(i.size,d)||(i.size=d),Xy(d)}),ag(),a0(),Tl(11,`po-select`,10),ww(`ngModelChange`,function(d){return Ky(m),uN(i.status,d)||(i.status=d),Xy(d)}),ag(),a0(),_x(12,ze,6,8),_x(13,Be,1,1,`po-number`,11),Tl(14,`po-checkbox-group`,12),ww(`ngModelChange`,function(d){return Ky(m),uN(i.properties,d)||(i.properties=d),Xy(d)}),ag(),a0(),ag()()(),Tl(15,`div`,13)(16,`po-button`,14),ht(`p-click`,function(){return i.restore()}),ag()()()}l&2&&(jp(),nw(`p-disabled-cancel`,i.properties.includes(`disabledCancel`))(`p-indeterminate`,i.properties.includes(`indeterminate`))(`p-show-percentage`,i.properties.includes(`showPercentage`))(`p-info`,i.info)(`p-info-icon`,i.infoIcon)(`p-status`,i.status)(`p-text`,i.text)(`p-value`,i.value)(`p-size`,i.size)(`p-shape`,i.shape)(`p-radius`,i.radius)(`p-size-actions`,i.sizeActions)(`p-custom-action`,i.action),jp(),Dx(i.shape===`bar`?2:-1),jp(5),Ew(`ngModel`,i.shape),nw(`p-options`,i.shapeOptions),l0(),jp(2),Ew(`ngModel`,i.value),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0(),jp(),Ew(`ngModel`,i.status),nw(`p-options`,i.statusOptions),l0(),jp(),Dx(i.shape===`bar`?12:-1),jp(),Dx(i.shape===`circle`?13:-1),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,jk,Lk,Zt,N4,iU,ube,L0e,fbe,j4,ybe,N_e,O8e],styles:[`.sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}`],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Progress Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-progress-labs/sample-po-progress-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="sample-progress-grid">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-progress-labs/sample-po-progress-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-progress-labs/sample-po-progress-labs.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-progress-labs`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++},20)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-publication`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Edit publication`],[1,`po-row`],[1,`po-md-9`,3,`ngModelChange`,`ngModel`],[1,`po-md-9`],[`p-text`,`Loading update`,1,`po-md-9`,3,`p-value`,`p-show-percentage`],[`p-label`,`Update publication`,3,`p-click`,`p-disabled`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`div`,1)(2,`po-rich-text`,2),ww(`ngModelChange`,function(v){return uN(i.publication,v)||(i.publication=v),v}),ag(),a0(),Gl(3,`po-divider`,3)(4,`po-progress`,4),ag(),Tl(5,`div`,1)(6,`po-button`,5),ht(`p-click`,function(){return i.updatePublication()}),ag()()()),l&2&&(jp(2),Ew(`ngModel`,i.publication),l0(),jp(2),nw(`p-value`,i.progressBarValue)(`p-show-percentage`,!0),jp(2),nw(`p-disabled`,i.buttonDisabled))},dependencies:[gY,Ak,Zt,Xy$1,i5,S8e,N_e],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-publication-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Progress - Publication`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-progress-publication/sample-po-progress-publication.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Edit publication">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-progress-publication/sample-po-progress-publication.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-progress-publication`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,xe],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-circle`]],standalone:!1,decls:99,vars:2,consts:[[1,`container`],[`p-title`,`Regra de Adequação de Layout`],[1,`line-height`],[1,`po-font-text-large-bold`],[1,`po-text-large`],[`p-title`,`Exemplo Básico - Radius Mínimo (24px)`],[1,`po-row`,`po-align-items-center`],[1,`po-md-6`,`po-lg-4`,`po-center`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`24`,3,`p-value`],[1,`po-md-6`,`po-lg-8`],[1,`po-font-text`],[`p-title`,`Com Radius Maior (60px)`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`60`,3,`p-value`],[`p-title`,`Com Status Error (Radius 24px)`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`error`,`p-radius`,`24`],[`p-title`,`Modo Indeterminado`],[`p-shape`,`circle`,`p-indeterminate`,`true`,`p-radius`,`30`],[`p-title`,`Comparação Visual - Diferentes Status`],[1,`po-row`,`row`],[1,`po-md-3`,`po-center`,`items`],[1,`po-font-text-large-bold`,`po-mb-1`],[`p-shape`,`circle`,`p-value`,`100`,`p-status`,`success`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`warning`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`0`,`p-status`,`error`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`75`,`p-show-percentage`,`true`,`p-radius`,`25`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`p`,3),cN(4,`📏 Para adequação do layout, o valor mínimo de p-radius é 24px.`),ag(),Tl(5,`p`,4),cN(6,` O raio mínimo de 24px é necessário para evitar colisão entre o conteúdo central (porcentagem ou ícone de erro) e a borda do círculo. Valores menores podem causar sobreposição visual dos elementos. `),ag()()(),Tl(7,`po-widget`,5)(8,`div`,6)(9,`div`,7),Gl(10,`po-progress`,8),ag(),Tl(11,`div`,9)(12,`p`)(13,`strong`),cN(14,`Configuração:`),ag()(),Tl(15,`ul`)(16,`li`),cN(17,`p-shape="circle"`),ag(),Tl(18,`li`),cN(19,`p-value="65"`),ag(),Tl(20,`li`),cN(21,`p-show-percentage="true"`),ag(),Tl(22,`li`),cN(23,`p-radius="24" (valor mínimo permitido)`),ag()(),Tl(24,`p`,10),cN(25,`A porcentagem é exibida no centro sem colisão com a borda do círculo.`),ag()()()(),Tl(26,`po-widget`,11)(27,`div`,6)(28,`div`,7),Gl(29,`po-progress`,12),ag(),Tl(30,`div`,9)(31,`p`)(32,`strong`),cN(33,`Configuração:`),ag()(),Tl(34,`ul`)(35,`li`),cN(36,`p-shape="circle"`),ag(),Tl(37,`li`),cN(38,`p-value="65"`),ag(),Tl(39,`li`),cN(40,`p-show-percentage="true"`),ag(),Tl(41,`li`),cN(42,`p-radius="60" (valor maior)`),ag()(),Tl(43,`p`,10),cN(44,` Maior espaço disponível para o conteúdo central. Recomendado para melhor visualização. `),ag()()()(),Tl(45,`po-widget`,13)(46,`div`,6)(47,`div`,7),Gl(48,`po-progress`,14),ag(),Tl(49,`div`,9)(50,`p`)(51,`strong`),cN(52,`Configuração:`),ag()(),Tl(53,`ul`)(54,`li`),cN(55,`p-shape="circle"`),ag(),Tl(56,`li`),cN(57,`p-value="50"`),ag(),Tl(58,`li`),cN(59,`p-status="error"`),ag(),Tl(60,`li`),cN(61,`p-radius="24" (valor mínimo)`),ag()(),Tl(62,`p`,10),cN(63,`Ícone de erro exibido no centro. O radius mínimo de 24px evita sobreposição.`),ag()()()(),Tl(64,`po-widget`,15)(65,`div`,6)(66,`div`,7),Gl(67,`po-progress`,16),ag(),Tl(68,`div`,9)(69,`p`)(70,`strong`),cN(71,`Configuração:`),ag()(),Tl(72,`ul`)(73,`li`),cN(74,`p-shape="circle"`),ag(),Tl(75,`li`),cN(76,`p-indeterminate="true"`),ag(),Tl(77,`li`),cN(78,`p-radius="30"`),ag()(),Tl(79,`p`,10),cN(80,`Animação contínua para indicar progresso em andamento.`),ag()()()(),Tl(81,`po-widget`,17)(82,`div`,18)(83,`div`,19)(84,`p`,20),cN(85,`Success`),ag(),Gl(86,`po-progress`,21),ag(),Tl(87,`div`,19)(88,`p`,20),cN(89,`Warning`),ag(),Gl(90,`po-progress`,22),ag(),Tl(91,`div`,19)(92,`p`,20),cN(93,`Error`),ag(),Gl(94,`po-progress`,23),ag(),Tl(95,`div`,19)(96,`p`,20),cN(97,`Default`),ag(),Gl(98,`po-progress`,24),ag()()()()),l&2&&(jp(10),nw(`p-value`,i.value),jp(19),nw(`p-value`,i.value))},dependencies:[N_e,O8e],styles:[`.container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}`],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-circle-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Progress Circle`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-progress-circle/sample-po-progress-circle.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="container">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-progress-circle/sample-po-progress-circle.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-progress-circle/sample-po-progress-circle.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.container {
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
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-progress-circle`),ag(),Gl(29,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Re,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ce],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-doc`]],standalone:!1,decls:966,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoProgressStatus`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoProgressModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-progress`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoProgressComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa.`),ag(),Tl(18,`p`),cN(19,`Este componente pode ser utilizado no `),Tl(20,`em`),cN(21,`upload`),ag(),cN(22,` de arquivos, uma atualização no sistema ou o processamento de uma imagem.`),ag(),Tl(23,`h4`),cN(24,`Tokens customizáveis`),ag(),Tl(25,`p`),cN(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(27,`blockquote`)(28,`p`),cN(29,`Para maiores informações, acesse o guia `),Tl(30,`a`,6),cN(31,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(32,`.`),ag()(),Tl(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),cN(37,`Propriedade`),ag(),Tl(38,`th`),cN(39,`Descrição`),ag(),Tl(40,`th`),cN(41,`Valor Padrão`),ag()()(),Tl(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),cN(46,`Default Values`),ag()(),Gl(47,`td`)(48,`td`),ag(),Tl(49,`tr`)(50,`td`)(51,`code`),cN(52,`--font-family`),ag()(),Tl(53,`td`),cN(54,`Família tipográfica usada`),ag(),Tl(55,`td`)(56,`code`),cN(57,`var(--font-family-theme)`),ag()()(),Tl(58,`tr`)(59,`td`)(60,`code`),cN(61,`--text-color`),ag()(),Tl(62,`td`),cN(63,`Cor do texto`),ag(),Tl(64,`td`)(65,`code`),cN(66,`var(--color-neutral-dark-90)`),ag()()(),Tl(67,`tr`)(68,`td`)(69,`strong`),cN(70,`Error`),ag()(),Gl(71,`td`)(72,`td`),ag(),Tl(73,`tr`)(74,`td`)(75,`code`),cN(76,`--text-color-error`),ag()(),Tl(77,`td`),cN(78,`Cor do texto no estado error`),ag(),Tl(79,`td`)(80,`code`),cN(81,`var(--color-feedback-negative-dark)`),ag()()(),Tl(82,`tr`)(83,`td`)(84,`code`),cN(85,`--color-icon-error`),ag()(),Tl(86,`td`),cN(87,`Cor do ícone no estado error`),ag(),Tl(88,`td`)(89,`code`),cN(90,`var(--color-feedback-negative-dark)`),ag()()(),Tl(91,`tr`)(92,`td`)(93,`strong`),cN(94,`po-progress-bar`),ag()(),Gl(95,`td`)(96,`td`),ag(),Tl(97,`tr`)(98,`td`)(99,`code`),cN(100,`--background-color-tray`),ag()(),Tl(101,`td`),cN(102,`Cor do background`),ag(),Tl(103,`td`)(104,`code`),cN(105,`var(--color-brand-01-lightest)`),ag()()(),Tl(106,`tr`)(107,`td`)(108,`code`),cN(109,`--background-color-indicator`),ag()(),Tl(110,`td`),cN(111,`Cor do background do indicador`),ag(),Tl(112,`td`)(113,`code`),cN(114,`var(--color-action-default)`),ag()()(),Tl(115,`tr`)(116,`td`)(117,`strong`),cN(118,`po-progress-circle`),ag()(),Gl(119,`td`)(120,`td`),ag(),Tl(121,`tr`)(122,`td`)(123,`code`),cN(124,`--background-color-tray`),ag()(),Tl(125,`td`),cN(126,`Cor do background`),ag(),Tl(127,`td`)(128,`code`),cN(129,`var(--color-brand-01-lightest)`),ag()()(),Tl(130,`tr`)(131,`td`)(132,`code`),cN(133,`--background-color-indicator`),ag()(),Tl(134,`td`),cN(135,`Cor do background do indicador`),ag(),Tl(136,`td`)(137,`code`),cN(138,`var(--color-action-default)`),ag()()()()()(),Tl(139,`div`,7)(140,`h4`,8),cN(141,`Seletor`),ag(),Tl(142,`pre`,9),cN(143,`<po-progress
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
`),ag()(),Tl(144,`h4`,10),cN(145,`Propriedades`),ag(),Tl(146,`table`,11)(147,`tr`,12)(148,`th`,13),cN(149,`Nome`),ag(),Tl(150,`th`,13),cN(151,`Tipo`),ag(),Tl(152,`th`,13),cN(153,`Padrão`),ag(),Tl(154,`th`,13),cN(155,`Descrição`),ag()(),Tl(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),cN(160,` p-aria-label`),Gl(161,`br`),ag()()(),Tl(162,`td`,18)(163,`code`,19),cN(164,`string`),ag()(),Tl(165,`td`,20),cN(166,`-`),ag(),Tl(167,`td`,21)(168,`em`)(169,`strong`),cN(170,`(opcional)`),ag()(),Tl(171,`p`),cN(172,`Define um nome acessível para o elemento com `),Tl(173,`code`),cN(174,`role="progressbar"`),ag(),cN(175,`.`),ag(),Tl(176,`p`),cN(177,`Quando não informado, o componente utiliza o valor de `),Tl(178,`code`),cN(179,`p-text`),ag(),cN(180,` como alternativa, se disponível.`),ag()()(),Tl(181,`tr`,14)(182,`td`,15)(183,`div`,22)(184,`span`,23),cN(185,` (p-cancel)`),Gl(186,`br`),ag()()(),Tl(187,`td`,18)(188,`code`,24),cN(189,`EventEmitter`),ag()(),Tl(190,`td`,20),cN(191,`-`),ag(),Tl(192,`td`,21)(193,`em`)(194,`strong`),cN(195,`(opcional)`),ag()(),Tl(196,`p`),cN(197,`Evento que será disparado ao clicar no ícone de cancelamento ("x") na parte inferior da barra de progresso.`),ag(),Tl(198,`p`),cN(199,`Ao ser disparado, a função receberá como parâmetro o status atual da barra de progresso.`),ag(),Tl(200,`blockquote`)(201,`p`),cN(202,`Se nenhuma função for passada para o evento ou a barra de progresso estiver com o status `),Tl(203,`code`),cN(204,`PoProgressStatus.Success`),ag(),cN(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),ag()(),Tl(206,`blockquote`)(207,`p`),cN(208,`Não compatível com `),Tl(209,`code`),cN(210,`p-shape="circle"`),ag(),cN(211,`.`),ag()()()(),Tl(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),cN(216,` p-custom-action`),Gl(217,`br`),ag()()(),Tl(218,`td`,18)(219,`code`,25),cN(220,`PoProgressAction`),ag()(),Tl(221,`td`,20),cN(222,`-`),ag(),Tl(223,`td`,21)(224,`em`)(225,`strong`),cN(226,`(opcional)`),ag()(),Tl(227,`p`),cN(228,`Permite definir uma ação personalizada no componente `),Tl(229,`code`),cN(230,`po-progress`),ag(),cN(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Tl(232,`strong`),cN(233,`PoProgressAction`),ag(),cN(234,`, possibilitando configurar:`),ag(),Tl(235,`ul`)(236,`li`)(237,`strong`)(238,`code`),cN(239,`label`),ag()(),cN(240,`: Texto exibido no botão (opcional).`),ag(),Tl(241,`li`)(242,`strong`)(243,`code`),cN(244,`icon`),ag()(),cN(245,`: Ícone exibido no botão (opcional).`),ag(),Tl(246,`li`)(247,`strong`)(248,`code`),cN(249,`type`),ag()(),cN(250,`: Tipo do botão (`),Tl(251,`code`),cN(252,`default`),ag(),cN(253,` ou `),Tl(254,`code`),cN(255,`danger`),ag(),cN(256,`) para indicar a intenção da ação (opcional).`),ag(),Tl(257,`li`)(258,`strong`)(259,`code`),cN(260,`disabled`),ag()(),cN(261,`: Indica se o botão deve estar desabilitado (opcional).`),ag(),Tl(262,`li`)(263,`strong`)(264,`code`),cN(265,`visible`),ag()(),cN(266,`: Determina se o botão será exibido. Pode ser um valor booleano ou uma função que retorna um booleano (opcional).`),ag()(),Tl(267,`blockquote`)(268,`p`),cN(269,`Não compatível com `),Tl(270,`code`),cN(271,`p-shape="circle"`),ag(),cN(272,`.`),ag()()()(),Tl(273,`tr`,14)(274,`td`,15)(275,`div`,22)(276,`span`,23),cN(277,` (p-custom-action-click)`),Gl(278,`br`),ag()()(),Tl(279,`td`,18)(280,`code`,24),cN(281,`EventEmitter`),ag()(),Tl(282,`td`,20),cN(283,`-`),ag(),Tl(284,`td`,21)(285,`em`)(286,`strong`),cN(287,`(opcional)`),ag()(),Tl(288,`p`),cN(289,`Evento emitido quando o botão definido em `),Tl(290,`code`),cN(291,`p-custom-action`),ag(),cN(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),ag(),Tl(293,`blockquote`)(294,`p`),cN(295,`Não compatível com `),Tl(296,`code`),cN(297,`p-shape="circle"`),ag(),cN(298,`.`),ag()()()(),Tl(299,`tr`,14)(300,`td`,15)(301,`div`,16)(302,`span`,17),cN(303,` p-disabled-cancel`),Gl(304,`br`),ag()()(),Tl(305,`td`,18)(306,`code`,26),cN(307,`boolean`),ag()(),Tl(308,`td`,20)(309,`p`)(310,`code`),cN(311,`false`),ag()()(),Tl(312,`td`,21)(313,`em`)(314,`strong`),cN(315,`(opcional)`),ag()(),Tl(316,`p`),cN(317,`Desabilita botão de cancelamento na parte inferior da barra de progresso.`),ag(),Tl(318,`blockquote`)(319,`p`),cN(320,`Se nenhuma função for passada para o evento `),Tl(321,`code`),cN(322,`(p-cancel)`),ag(),cN(323,` ou a barra de progresso estiver com o status `),Tl(324,`code`),cN(325,`PoProgressStatus.Success`),ag(),cN(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),ag()(),Tl(327,`blockquote`)(328,`p`),cN(329,`Não compatível com `),Tl(330,`code`),cN(331,`p-shape="circle"`),ag(),cN(332,`.`),ag()()()(),Tl(333,`tr`,14)(334,`td`,15)(335,`div`,16)(336,`span`,17),cN(337,` p-indeterminate`),Gl(338,`br`),ag()()(),Tl(339,`td`,18)(340,`code`,26),cN(341,`boolean`),ag()(),Tl(342,`td`,20)(343,`p`)(344,`code`),cN(345,`false`),ag()()(),Tl(346,`td`,21)(347,`em`)(348,`strong`),cN(349,`(opcional)`),ag()(),Tl(350,`p`),cN(351,`Habilita o modo indeterminado na barra de progresso, que mostra uma animação fixa sem um valor estabelecido.`),ag(),Tl(352,`p`),cN(353,`Esta opção pode ser utilizada quando não souber quanto tempo levará para que um processo seja concluído.`),ag(),Tl(354,`blockquote`)(355,`p`),cN(356,`Caso esta propriedade e a `),Tl(357,`code`),cN(358,`p-value`),ag(),cN(359,` seja habilitada, a propriedade `),Tl(360,`code`),cN(361,`p-value`),ag(),cN(362,` será ignorada.`),ag()()()(),Tl(363,`tr`,14)(364,`td`,15)(365,`div`,16)(366,`span`,17),cN(367,` p-info`),Gl(368,`br`),ag()()(),Tl(369,`td`,18)(370,`code`,19),cN(371,`string`),ag()(),Tl(372,`td`,20),cN(373,`-`),ag(),Tl(374,`td`,21)(375,`em`)(376,`strong`),cN(377,`(opcional)`),ag()(),Tl(378,`p`),cN(379,`Informação adicional que aparecerá abaixo da barra de progresso ao lado direito.`),ag(),Tl(380,`blockquote`)(381,`p`),cN(382,`Não compatível com `),Tl(383,`code`),cN(384,`p-shape="circle"`),ag(),cN(385,`.`),ag()()()(),Tl(386,`tr`,14)(387,`td`,15)(388,`div`,16)(389,`span`,17),cN(390,` p-info-icon`),Gl(391,`br`),ag()()(),Tl(392,`td`,18)(393,`code`,19),cN(394,`string `),ag(),Tl(395,`code`,27),cN(396,` TemplateRef<void>`),ag()(),Tl(397,`td`,20),cN(398,`-`),ag(),Tl(399,`td`,21)(400,`em`)(401,`strong`),cN(402,`(opcional)`),ag()(),Tl(403,`p`),cN(404,`Ícone que aparecerá ao lado do texto da propriedade `),Tl(405,`code`),cN(406,`p-info`),ag(),cN(407,`.`),ag(),Tl(408,`p`),cN(409,`Exemplo: `),Tl(410,`code`),cN(411,`an an-check`),ag(),cN(412,`.`),ag(),Tl(413,`blockquote`)(414,`p`),cN(415,`Não compatível com `),Tl(416,`code`),cN(417,`p-shape="circle"`),ag(),cN(418,`.`),ag()()()(),Tl(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),cN(423,` p-radius`),Gl(424,`br`),ag()()(),Tl(425,`td`,18)(426,`code`,28),cN(427,`number`),ag()(),Tl(428,`td`,20)(429,`p`)(430,`code`),cN(431,`45`),ag(),cN(432,` (automático)`),ag()(),Tl(433,`td`,21)(434,`em`)(435,`strong`),cN(436,`(opcional)`),ag()(),Tl(437,`p`),cN(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Tl(439,`code`),cN(440,`p-shape="circle"`),ag(),cN(441,`.`),ag(),Tl(442,`blockquote`)(443,`p`),cN(444,`O valor mínimo aceito é `),Tl(445,`strong`),cN(446,`24`),ag(),cN(447,`.`),ag()(),Tl(448,`blockquote`)(449,`p`),cN(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Tl(451,`strong`),cN(452,`45`),ag(),cN(453,` será utilizado.`),ag()(),Tl(454,`blockquote`)(455,`p`),cN(456,`Não compatível com `),Tl(457,`code`),cN(458,`p-shape="bar"`),ag(),cN(459,`.`),ag()()()(),Tl(460,`tr`,14)(461,`td`,15)(462,`div`,22)(463,`span`,23),cN(464,` (p-retry)`),Gl(465,`br`),ag()()(),Tl(466,`td`,18)(467,`code`,24),cN(468,`EventEmitter`),ag()(),Tl(469,`td`,20),cN(470,`-`),ag(),Tl(471,`td`,21)(472,`em`)(473,`strong`),cN(474,`(opcional)`),ag()(),Tl(475,`p`),cN(476,`Evento que será disparado ao clicar no ícone de tentar novamente na parte inferior da barra de progresso.`),ag(),Tl(477,`blockquote`)(478,`p`),cN(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Tl(480,`code`),cN(481,`PoProgressStatus.Error`),ag(),cN(482,`.`),ag()(),Tl(483,`blockquote`)(484,`p`),cN(485,`Não compatível com `),Tl(486,`code`),cN(487,`p-shape="circle"`),ag(),cN(488,`.`),ag()()()(),Tl(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),cN(493,` p-shape`),Gl(494,`br`),ag()()(),Tl(495,`td`,18)(496,`code`,19),cN(497,`string`),ag()(),Tl(498,`td`,20)(499,`p`)(500,`code`),cN(501,`bar`),ag()()(),Tl(502,`td`,21)(503,`em`)(504,`strong`),cN(505,`(opcional)`),ag()(),Tl(506,`p`),cN(507,`Define o formato visual do componente de progresso.`),ag(),Tl(508,`p`),cN(509,`Valores válidos:`),ag(),Tl(510,`ul`)(511,`li`)(512,`code`),cN(513,`bar`),ag(),cN(514,`: exibe o progresso em formato de barra.`),ag(),Tl(515,`li`)(516,`code`),cN(517,`circle`),ag(),cN(518,`: exibe o progresso em formato circular.`),ag()()()(),Tl(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),cN(523,` p-show-percentage`),Gl(524,`br`),ag()()(),Tl(525,`td`,18)(526,`code`,26),cN(527,`boolean`),ag()(),Tl(528,`td`,20)(529,`p`)(530,`code`),cN(531,`false`),ag()()(),Tl(532,`td`,21)(533,`em`)(534,`strong`),cN(535,`(opcional)`),ag()(),Tl(536,`p`),cN(537,`Ativa a exibição da porcentagem atual da barra de progresso.`),ag(),Tl(538,`blockquote`)(539,`p`),cN(540,`Se utilizada no `),Tl(541,`code`),cN(542,`p-shape="circle"`),ag(),cN(543,` e o status estiver como `),Tl(544,`code`),cN(545,`error`),ag(),cN(546,`, a porcentagem não será exibida.`),ag()()()(),Tl(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),cN(551,` p-size`),Gl(552,`br`),ag()()(),Tl(553,`td`,18)(554,`code`,19),cN(555,`string`),ag()(),Tl(556,`td`,20)(557,`p`)(558,`code`),cN(559,`large`),ag()()(),Tl(560,`td`,21)(561,`em`)(562,`strong`),cN(563,`(opcional)`),ag()(),Tl(564,`p`),cN(565,`Define a expessura da barra de progresso.`),ag(),Tl(566,`p`),cN(567,`Valores válidos:`),ag(),Tl(568,`ul`)(569,`li`),cN(570,`medium`),ag(),Tl(571,`li`),cN(572,`large`),ag()()()(),Tl(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),cN(577,` p-size-actions`),Gl(578,`br`),ag()()(),Tl(579,`td`,18)(580,`code`,19),cN(581,`string`),ag()(),Tl(582,`td`,20)(583,`p`)(584,`code`),cN(585,`medium`),ag()()(),Tl(586,`td`,21)(587,`em`)(588,`strong`),cN(589,`(opcional)`),ag()(),Tl(590,`p`),cN(591,`Define o tamanho das ações no componente com excessão da barra de progresso que pode ser ajustada através da propriedade `),Tl(592,`code`),cN(593,`p-size`),ag(),cN(594,`:`),ag(),Tl(595,`ul`)(596,`li`)(597,`code`),cN(598,`small`),ag(),cN(599,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(600,`li`)(601,`code`),cN(602,`medium`),ag(),cN(603,`: aplica a medida medium de cada componente.`),ag()(),Tl(604,`blockquote`)(605,`p`),cN(606,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(607,`code`),cN(608,`medium`),ag(),cN(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(610,`a`,29),cN(611,`po-theme`),ag(),cN(612,`.`),ag()(),Tl(613,`blockquote`)(614,`p`),cN(615,`Não compatível com `),Tl(616,`code`),cN(617,`p-shape="circle"`),ag(),cN(618,`.`),ag()()()(),Tl(619,`tr`,14)(620,`td`,15)(621,`div`,16)(622,`span`,17),cN(623,` p-status`),Gl(624,`br`),ag()()(),Tl(625,`td`,18)(626,`code`,30),cN(627,`PoProgressStatus`),ag()(),Tl(628,`td`,20)(629,`p`)(630,`code`),cN(631,`PoProgressStatus.Default`),ag()()(),Tl(632,`td`,21)(633,`em`)(634,`strong`),cN(635,`(opcional)`),ag()(),Tl(636,`p`),cN(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),ag()()(),Tl(638,`tr`,14)(639,`td`,15)(640,`div`,16)(641,`span`,17),cN(642,` p-text`),Gl(643,`br`),ag()()(),Tl(644,`td`,18)(645,`code`,19),cN(646,`string`),ag()(),Tl(647,`td`,20),cN(648,`-`),ag(),Tl(649,`td`,21)(650,`em`)(651,`strong`),cN(652,`(opcional)`),ag()(),Tl(653,`p`),cN(654,`Texto principal que aparecerá abaixo da barra de progresso no lado esquerdo.`),ag(),Tl(655,`blockquote`)(656,`p`),cN(657,`Não compatível com `),Tl(658,`code`),cN(659,`p-shape="circle"`),ag(),cN(660,`.`),ag()()()(),Tl(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),cN(665,` p-value`),Gl(666,`br`),ag()()(),Tl(667,`td`,18)(668,`code`,28),cN(669,`number`),ag()(),Tl(670,`td`,20)(671,`p`)(672,`code`),cN(673,`0`),ag()()(),Tl(674,`td`,21)(675,`em`)(676,`strong`),cN(677,`(opcional)`),ag()(),Tl(678,`p`),cN(679,`Valor que representará o progresso.`),ag(),Tl(680,`blockquote`)(681,`p`),cN(682,`Os valores aceitos são números inteiros de `),Tl(683,`code`),cN(684,`0`),ag(),cN(685,` à `),Tl(686,`code`),cN(687,`100`),ag(),cN(688,`.`),ag()()()()(),Tl(689,`h3`),cN(690,`Interfaces`),ag(),Tl(691,`h4`,31)(692,`code`,5),cN(693,`PoProgressAction`),ag()(),Tl(694,`div`,2)(695,`p`),cN(696,`Interface para as ações dos componentes po-progress e po-upload.`),ag()(),Tl(697,`h4`,10),cN(698,`Propriedades`),ag(),Tl(699,`table`,11)(700,`tr`,12)(701,`th`,13),cN(702,`Nome`),ag(),Tl(703,`th`,13),cN(704,`Tipo`),ag(),Tl(705,`th`,13),cN(706,`Descrição`),ag()(),Tl(707,`tr`,14)(708,`td`,15)(709,`div`,16)(710,`span`,17),cN(711,` disabled`),Gl(712,`br`),ag()()(),Tl(713,`td`,18)(714,`code`,26),cN(715,`boolean `),ag(),Tl(716,`code`,32),cN(717,` Function`),ag()(),Tl(718,`td`,21)(719,`em`)(720,`strong`),cN(721,`(opcional)`),ag()(),Tl(722,`p`),cN(723,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),ag(),Tl(724,`p`),cN(725,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),ag()()(),Tl(726,`tr`,14)(727,`td`,15)(728,`div`,16)(729,`span`,17),cN(730,` icon`),Gl(731,`br`),ag()()(),Tl(732,`td`,18)(733,`code`,19),cN(734,`string `),ag(),Tl(735,`code`,27),cN(736,` TemplateRef<void>`),ag()(),Tl(737,`td`,21)(738,`em`)(739,`strong`),cN(740,`(opcional)`),ag()(),Tl(741,`p`),cN(742,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),ag(),Tl(743,`p`),cN(744,`É possível usar qualquer um dos ícones da `),Tl(745,`a`,33),cN(746,`Biblioteca de ícones`),ag(),cN(747,`. conforme exemplo abaixo:`),ag(),Tl(748,`pre`)(749,`code`),cN(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),ag()(),Tl(751,`p`),cN(752,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ag(),Tl(753,`pre`)(754,`code`),cN(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),ag()(),Tl(756,`p`),cN(757,`Outra opção seria a customização do ícone através do `),Tl(758,`code`),cN(759,`TemplateRef`),ag(),cN(760,`, conforme exemplo abaixo:
component.html:`),ag(),Tl(761,`pre`)(762,`code`),cN(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),ag()(),Tl(764,`p`),cN(765,`component.ts:`),ag(),Tl(766,`pre`)(767,`code`),cN(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),ag()()()(),Tl(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),cN(773,` label`),Gl(774,`br`),ag()()(),Tl(775,`td`,18)(776,`code`,19),cN(777,`string`),ag()(),Tl(778,`td`,21)(779,`em`)(780,`strong`),cN(781,`(opcional)`),ag()(),Tl(782,`p`),cN(783,`Rótulo da ação.`),ag()()(),Tl(784,`tr`,14)(785,`td`,15)(786,`div`,16)(787,`span`,17),cN(788,` type`),Gl(789,`br`),ag()()(),Tl(790,`td`,18)(791,`code`,19),cN(792,`string`),ag()(),Tl(793,`td`,21)(794,`em`)(795,`strong`),cN(796,`(opcional)`),ag()(),Tl(797,`p`),cN(798,`Define a cor do item, sendo `),Tl(799,`code`),cN(800,`default`),ag(),cN(801,` o padrão.`),ag(),Tl(802,`p`),cN(803,`Valores válidos:`),ag(),Tl(804,`ul`)(805,`li`)(806,`code`),cN(807,`default`),ag()(),Tl(808,`li`)(809,`code`),cN(810,`danger`),ag(),cN(811,` - indicado para ações exclusivas (excluir, sair).`),ag()()()(),Tl(812,`tr`,14)(813,`td`,15)(814,`div`,16)(815,`span`,17),cN(816,` visible`),Gl(817,`br`),ag()()(),Tl(818,`td`,18)(819,`code`,26),cN(820,`boolean `),ag(),Tl(821,`code`,32),cN(822,` Function`),ag()(),Tl(823,`td`,21)(824,`em`)(825,`strong`),cN(826,`(opcional)`),ag()(),Tl(827,`p`),cN(828,`Define se a ação será visível.`),ag(),Tl(829,`blockquote`)(830,`p`),cN(831,`Caso o valor não seja especificado a ação será visível.`),ag()(),Tl(832,`p`),cN(833,`Opções para tornar a ação visível ou não:`),ag(),Tl(834,`ul`)(835,`li`)(836,`p`),cN(837,`Função que deve retornar um booleano.`),ag()(),Tl(838,`li`)(839,`p`),cN(840,`Informar diretamente um valor booleano.`),ag()()()()()(),Tl(841,`h3`),cN(842,`Enums`),ag(),Tl(843,`h4`,4)(844,`code`,5),cN(845,`PoProgressShape`),ag()(),Tl(846,`div`,2)(847,`p`),cN(848,`Enum `),Tl(849,`code`),cN(850,`PoProgressShape`),ag(),cN(851,` para definir o formato visual do componente de progresso.`),ag()(),Tl(852,`h4`,10),cN(853,`Propriedades`),ag(),Tl(854,`table`,11)(855,`tr`,12)(856,`th`,13),cN(857,`Nome`),ag(),Tl(858,`th`,13),cN(859,`Descrição`),ag()(),Tl(860,`tr`,14)(861,`td`,15)(862,`div`,16)(863,`span`,17),cN(864,` bar`),Gl(865,`br`),ag()()(),Tl(866,`td`,21)(867,`p`),cN(868,`Formato barra de progresso (padrão).`),ag()()(),Tl(869,`tr`,14)(870,`td`,15)(871,`div`,16)(872,`span`,17),cN(873,` circle`),Gl(874,`br`),ag()()(),Tl(875,`td`,21)(876,`p`),cN(877,`Formato circular de progresso.`),ag()()()(),Tl(878,`h4`,4)(879,`code`,5),cN(880,`PoProgressSize`),ag()(),Tl(881,`div`,2)(882,`p`),cN(883,`Enum para configurar a expessura (`),Tl(884,`code`),cN(885,`p-size`),ag(),cN(886,`) da barra de progresso do componente.`),ag()(),Tl(887,`h4`,10),cN(888,`Propriedades`),ag(),Tl(889,`table`,11)(890,`tr`,12)(891,`th`,13),cN(892,`Nome`),ag(),Tl(893,`th`,13),cN(894,`Descrição`),ag()(),Tl(895,`tr`,14)(896,`td`,15)(897,`div`,16)(898,`span`,17),cN(899,` medium`),Gl(900,`br`),ag()()(),Tl(901,`td`,21)(902,`p`),cN(903,`Tamanho médio com 4px.`),ag()()(),Tl(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),cN(908,` large`),Gl(909,`br`),ag()()(),Tl(910,`td`,21)(911,`p`),cN(912,`Tamanho grande com 8px.`),ag()()()(),Tl(913,`h4`,4)(914,`code`,5),cN(915,`PoProgressStatus`),ag()(),Tl(916,`div`,2)(917,`p`),cN(918,`Enum `),Tl(919,`code`),cN(920,`PoProgressStatus`),ag(),cN(921,` para os status de barra de progresso.`),ag()(),Tl(922,`h4`,10),cN(923,`Propriedades`),ag(),Tl(924,`table`,11)(925,`tr`,12)(926,`th`,13),cN(927,`Nome`),ag(),Tl(928,`th`,13),cN(929,`Descrição`),ag()(),Tl(930,`tr`,14)(931,`td`,15)(932,`div`,16)(933,`span`,17),cN(934,` Default`),Gl(935,`br`),ag()()(),Tl(936,`td`,21)(937,`p`),cN(938,`Define o status `),Tl(939,`code`),cN(940,`default`),ag(),cN(941,` para a barra de progresso.`),ag()()(),Tl(942,`tr`,14)(943,`td`,15)(944,`div`,16)(945,`span`,17),cN(946,` Error`),Gl(947,`br`),ag()()(),Tl(948,`td`,21)(949,`p`),cN(950,`Define o status de `),Tl(951,`code`),cN(952,`error`),ag(),cN(953,` para a barra de progresso.`),ag()()(),Tl(954,`tr`,14)(955,`td`,15)(956,`div`,16)(957,`span`,17),cN(958,` Success`),Gl(959,`br`),ag()()(),Tl(960,`td`,21)(961,`p`),cN(962,`Define o status de `),Tl(963,`code`),cN(964,`success`),ag(),cN(965,` para a barra de progresso.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Progress`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-progress-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-progress-basic-view`)(6,`sample-po-progress-labs-view`)(7,`sample-po-progress-publication-view`)(8,`sample-po-progress-circle-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Se,ve,fe,Pe,we],encapsulation:2,changeDetection:1})}return o})()}];var De=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[bL.forChild(Ge),bL]})}return o})();var wt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[ar,De]})}return o})();export{wt as DocPoProgressModule};