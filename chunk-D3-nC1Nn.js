import{$r as Wx,Br as RE,Di as he$1,Dt as aae,G as K3,Hn as AN,Kn as BP,L as Gy,Li as kL,Nn as ys,Q as Pze,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Ur as Rx,Wi as mg,Wn as Ax,Wt as ioe,Xn as C9,Yn as Bx,Z as Pie,ai as aN,an as p4,dr as Hp,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,la as ug,li as cE,lr as Hn,mi as eF,mn as t4,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,ta as qP,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xr as KP,yn as uf}from"./main-VW33P2VM.js";var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-basic`]],standalone:!1,decls:8,vars:3,consts:[[`p-title`,`Bar`],[3,`p-value`],[1,`po-mt-1`],[`p-title`,`Circle`,1,`po-mt-2`],[`p-shape`,`circle`,3,`p-value`,`p-radius`]],template:function(l,i){l&1&&(Ac(0,`div`)(1,`po-widget`,0),Kc(2,`po-progress`,1),ug()(),Ac(3,`div`,2)(4,`po-widget`,3),Kc(5,`po-progress`,4),Ac(6,`div`,2),vN(7,`Para adequação do layout, o valor mínimo de p-radius é 24px.`),ug()()()),l&2&&(Hp(2),cE(`p-value`,25),Hp(3),cE(`p-value`,25)(`p-radius`,24))},dependencies:[Pie,Pze],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Progress Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-progress-basic/sample-po-progress-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-progress-basic/sample-po-progress-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-progress-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Me,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,be],encapsulation:2,changeDetection:1})}return o})();function Oe(o,Q){if(o&1&&(Ac(0,`po-widget`,3),Kc(1,`po-info`,15),ug()),o&2){let r=Wx();Hp(),cE(`p-value`,r.event)}}function Ae(o,Q){if(o&1&&(Ac(0,`div`)(1,`po-widget`,21)(2,`form`,22),Kc(3,`po-input`,23),p0(),Kc(4,`po-select`,24),p0(),Kc(5,`po-select`,25),p0(),Kc(6,`po-switch`,26),p0(),Kc(7,`po-switch`,27),p0(),ug()()()),o&2){let r=Wx(2);Hp(2),cE(`formGroup`,r.actionForm),Hp(),m0(),Hp(),cE(`p-options`,r.iconOptions),m0(),Hp(),cE(`p-options`,r.typeOptions),m0(),Hp(),m0(),Hp(),m0()}}function ze(o,Q){if(o&1){let r=Bx();Ac(0,`po-select`,16),RE(`ngModelChange`,function(i){Jv(r);let m=Wx();return DN(m.infoIcon,i)||(m.infoIcon=i),e_(i)}),ug(),p0(),Ac(1,`po-input`,17),RE(`ngModelChange`,function(i){Jv(r);let m=Wx();return DN(m.text,i)||(m.text=i),e_(i)}),ug(),p0(),Ac(2,`po-input`,18),RE(`ngModelChange`,function(i){Jv(r);let m=Wx();return DN(m.info,i)||(m.info=i),e_(i)}),ug(),p0(),Ac(3,`po-radio-group`,19),RE(`ngModelChange`,function(i){Jv(r);let m=Wx();return DN(m.sizeActions,i)||(m.sizeActions=i),e_(i)}),ug(),p0(),Ac(4,`po-switch`,20),RE(`ngModelChange`,function(i){Jv(r);let m=Wx();return DN(m.showAction,i)||(m.showAction=i),e_(i)}),ug(),p0(),Rx(5,Ae,8,3,`div`)}if(o&2){let r=Wx();TE(`ngModel`,r.infoIcon),cE(`p-options`,r.infoIconsOptions),m0(),Hp(),TE(`ngModel`,r.text),m0(),Hp(),TE(`ngModel`,r.info),m0(),Hp(),TE(`ngModel`,r.sizeActions),cE(`p-options`,r.sizeActionsOptions),m0(),Hp(),TE(`ngModel`,r.showAction),m0(),Hp(),Ax(r.showAction?5:-1)}}function Be(o,Q){if(o&1){let r=Bx();Ac(0,`po-number`,28),RE(`ngModelChange`,function(i){Jv(r);let m=Wx();return DN(m.radius,i)||(m.radius=i),e_(i)}),ug(),p0()}if(o&2){let r=Wx();TE(`ngModel`,r.radius),m0()}}var he=(()=>{class o{fb=f(eF);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=ys.Default;size=Gy.large;shape=uf.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:`an an-warning-circle`,value:`an an-warning-circle`},{label:`an an-check`,value:`an an-check`},{label:`an an-user`,value:`an an-user`},{label:`an an-cloud-slash`,value:`an an-cloud-slash`}];statusOptions=[{label:`Default`,value:ys.Default},{label:`Success`,value:ys.Success},{label:`Error`,value:ys.Error}];sizeOptions=[{label:`Medium`,value:Gy.medium},{label:`Large`,value:Gy.large}];shapeOptions=[{label:`Bar`,value:uf.bar},{label:`Circle`,value:uf.circle}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Visible`,value:`visible`}];allPropertiesOptions=[{value:`disabledCancel`,label:`Disabled cancel`},{value:`indeterminate`,label:`Indeterminate`},{value:`showPercentage`,label:`Show percentage`}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm()}onShapeChange(r){this.restore(r),r===`circle`?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!==`disabledCancel`):this.propertiesOptions=[...this.allPropertiesOptions]}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r)})}updateAction(r){this.action=r}onEvent(r){this.event=r}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=ys.Default,this.text=void 0,this.value=void 0,this.size=Gy.large,this.radius=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.showAction=!1,this.properties=[],this.sizeActions=`medium`,r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=uf.bar)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-labs`]],standalone:!1,decls:17,vars:25,consts:[[`progressBarPropertiesForm`,`ngForm`],[1,`sample-progress-grid`],[3,`p-custom-action-click`,`p-cancel`,`p-retry`,`p-disabled-cancel`,`p-indeterminate`,`p-show-percentage`,`p-info`,`p-info-icon`,`p-status`,`p-text`,`p-value`,`p-size`,`p-shape`,`p-radius`,`p-size-actions`,`p-custom-action`],[`p-title`,`Events`],[`p-title`,`Properties`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`],[`name`,`shape`,`p-label`,`Shape`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`,`po-mt-2`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-max`,`100`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`Size`,`p-label`,`Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Status`,`p-label`,`Status`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[3,`p-value`],[`name`,`infoIcon`,`p-label`,`Info icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`text`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`info`,`p-clean`,``,`p-label`,`Info`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`sizeActions`,`p-columns`,`4`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-mb-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`addAction`,`p-label`,`Add Action Button`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`]],template:function(l,i){if(l&1){let m=Bx();Ac(0,`div`,1)(1,`po-progress`,2),pt(`p-custom-action-click`,function(){return i.onEvent(`p-custom-action-click`)})(`p-cancel`,function(){return i.onEvent(`p-cancel`)})(`p-retry`,function(){return i.onEvent(`p-retry`)}),ug(),Rx(2,Oe,2,1,`po-widget`,3),Ac(3,`po-widget`,4)(4,`form`,null,0)(6,`div`,5)(7,`po-radio-group`,6),RE(`ngModelChange`,function(d){return Jv(m),DN(i.shape,d)||(i.shape=d),e_(d)}),pt(`p-change`,function(d){return i.onShapeChange(d)}),ug(),p0(),ug(),Ac(8,`div`,7)(9,`po-number`,8),RE(`ngModelChange`,function(d){return Jv(m),DN(i.value,d)||(i.value=d),e_(d)}),ug(),p0(),Ac(10,`po-select`,9),RE(`ngModelChange`,function(d){return Jv(m),DN(i.size,d)||(i.size=d),e_(d)}),ug(),p0(),Ac(11,`po-select`,10),RE(`ngModelChange`,function(d){return Jv(m),DN(i.status,d)||(i.status=d),e_(d)}),ug(),p0(),Rx(12,ze,6,8),Rx(13,Be,1,1,`po-number`,11),Ac(14,`po-checkbox-group`,12),RE(`ngModelChange`,function(d){return Jv(m),DN(i.properties,d)||(i.properties=d),e_(d)}),ug(),p0(),ug()()(),Ac(15,`div`,13)(16,`po-button`,14),pt(`p-click`,function(){return i.restore()}),ug()()()}l&2&&(Hp(),cE(`p-disabled-cancel`,i.properties.includes(`disabledCancel`))(`p-indeterminate`,i.properties.includes(`indeterminate`))(`p-show-percentage`,i.properties.includes(`showPercentage`))(`p-info`,i.info)(`p-info-icon`,i.infoIcon)(`p-status`,i.status)(`p-text`,i.text)(`p-value`,i.value)(`p-size`,i.size)(`p-shape`,i.shape)(`p-radius`,i.radius)(`p-size-actions`,i.sizeActions)(`p-custom-action`,i.action),Hp(),Ax(i.shape===`bar`?2:-1),Hp(5),TE(`ngModel`,i.shape),cE(`p-options`,i.shapeOptions),m0(),Hp(2),TE(`ngModel`,i.value),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0(),Hp(),TE(`ngModel`,i.status),cE(`p-options`,i.statusOptions),m0(),Hp(),Ax(i.shape===`bar`?12:-1),Hp(),Ax(i.shape===`circle`?13:-1),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0())},dependencies:[b9,D9,C9,BP,LP,KP,qP,ni,t4,_4,Jne,Cte,ioe,p4,roe,Pie,Pze],styles:[`.sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}`],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Progress Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-progress-labs/sample-po-progress-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="sample-progress-grid">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-progress-labs/sample-po-progress-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-progress-labs/sample-po-progress-labs.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-progress-labs`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,he],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++},20)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-publication`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Edit publication`],[1,`po-row`],[1,`po-md-9`,3,`ngModelChange`,`ngModel`],[1,`po-md-9`],[`p-text`,`Loading update`,1,`po-md-9`,3,`p-value`,`p-show-percentage`],[`p-label`,`Update publication`,3,`p-click`,`p-disabled`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`div`,1)(2,`po-rich-text`,2),RE(`ngModelChange`,function(v){return DN(i.publication,v)||(i.publication=v),v}),ug(),p0(),Kc(3,`po-divider`,3)(4,`po-progress`,4),ug(),Ac(5,`div`,1)(6,`po-button`,5),pt(`p-click`,function(){return i.updatePublication()}),ug()()()),l&2&&(Hp(2),TE(`ngModel`,i.publication),m0(),Hp(2),cE(`p-value`,i.progressBarValue)(`p-show-percentage`,!0),Hp(2),cE(`p-disabled`,i.buttonDisabled))},dependencies:[D9,BP,ni,ob,K3,vze,Pie],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-publication-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Progress - Publication`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-progress-publication/sample-po-progress-publication.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Edit publication">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-progress-publication/sample-po-progress-publication.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-progress-publication`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,xe],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-circle`]],standalone:!1,decls:99,vars:2,consts:[[1,`container`],[`p-title`,`Regra de Adequação de Layout`],[1,`line-height`],[1,`po-font-text-large-bold`],[1,`po-text-large`],[`p-title`,`Exemplo Básico - Radius Mínimo (24px)`],[1,`po-row`,`po-align-items-center`],[1,`po-md-6`,`po-lg-4`,`po-center`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`24`,3,`p-value`],[1,`po-md-6`,`po-lg-8`],[1,`po-font-text`],[`p-title`,`Com Radius Maior (60px)`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`60`,3,`p-value`],[`p-title`,`Com Status Error (Radius 24px)`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`error`,`p-radius`,`24`],[`p-title`,`Modo Indeterminado`],[`p-shape`,`circle`,`p-indeterminate`,`true`,`p-radius`,`30`],[`p-title`,`Comparação Visual - Diferentes Status`],[1,`po-row`,`row`],[1,`po-md-3`,`po-center`,`items`],[1,`po-font-text-large-bold`,`po-mb-1`],[`p-shape`,`circle`,`p-value`,`100`,`p-status`,`success`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`warning`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`0`,`p-status`,`error`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`75`,`p-show-percentage`,`true`,`p-radius`,`25`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`p`,3),vN(4,`📏 Para adequação do layout, o valor mínimo de p-radius é 24px.`),ug(),Ac(5,`p`,4),vN(6,` O raio mínimo de 24px é necessário para evitar colisão entre o conteúdo central (porcentagem ou ícone de erro) e a borda do círculo. Valores menores podem causar sobreposição visual dos elementos. `),ug()()(),Ac(7,`po-widget`,5)(8,`div`,6)(9,`div`,7),Kc(10,`po-progress`,8),ug(),Ac(11,`div`,9)(12,`p`)(13,`strong`),vN(14,`Configuração:`),ug()(),Ac(15,`ul`)(16,`li`),vN(17,`p-shape="circle"`),ug(),Ac(18,`li`),vN(19,`p-value="65"`),ug(),Ac(20,`li`),vN(21,`p-show-percentage="true"`),ug(),Ac(22,`li`),vN(23,`p-radius="24" (valor mínimo permitido)`),ug()(),Ac(24,`p`,10),vN(25,`A porcentagem é exibida no centro sem colisão com a borda do círculo.`),ug()()()(),Ac(26,`po-widget`,11)(27,`div`,6)(28,`div`,7),Kc(29,`po-progress`,12),ug(),Ac(30,`div`,9)(31,`p`)(32,`strong`),vN(33,`Configuração:`),ug()(),Ac(34,`ul`)(35,`li`),vN(36,`p-shape="circle"`),ug(),Ac(37,`li`),vN(38,`p-value="65"`),ug(),Ac(39,`li`),vN(40,`p-show-percentage="true"`),ug(),Ac(41,`li`),vN(42,`p-radius="60" (valor maior)`),ug()(),Ac(43,`p`,10),vN(44,` Maior espaço disponível para o conteúdo central. Recomendado para melhor visualização. `),ug()()()(),Ac(45,`po-widget`,13)(46,`div`,6)(47,`div`,7),Kc(48,`po-progress`,14),ug(),Ac(49,`div`,9)(50,`p`)(51,`strong`),vN(52,`Configuração:`),ug()(),Ac(53,`ul`)(54,`li`),vN(55,`p-shape="circle"`),ug(),Ac(56,`li`),vN(57,`p-value="50"`),ug(),Ac(58,`li`),vN(59,`p-status="error"`),ug(),Ac(60,`li`),vN(61,`p-radius="24" (valor mínimo)`),ug()(),Ac(62,`p`,10),vN(63,`Ícone de erro exibido no centro. O radius mínimo de 24px evita sobreposição.`),ug()()()(),Ac(64,`po-widget`,15)(65,`div`,6)(66,`div`,7),Kc(67,`po-progress`,16),ug(),Ac(68,`div`,9)(69,`p`)(70,`strong`),vN(71,`Configuração:`),ug()(),Ac(72,`ul`)(73,`li`),vN(74,`p-shape="circle"`),ug(),Ac(75,`li`),vN(76,`p-indeterminate="true"`),ug(),Ac(77,`li`),vN(78,`p-radius="30"`),ug()(),Ac(79,`p`,10),vN(80,`Animação contínua para indicar progresso em andamento.`),ug()()()(),Ac(81,`po-widget`,17)(82,`div`,18)(83,`div`,19)(84,`p`,20),vN(85,`Success`),ug(),Kc(86,`po-progress`,21),ug(),Ac(87,`div`,19)(88,`p`,20),vN(89,`Warning`),ug(),Kc(90,`po-progress`,22),ug(),Ac(91,`div`,19)(92,`p`,20),vN(93,`Error`),ug(),Kc(94,`po-progress`,23),ug(),Ac(95,`div`,19)(96,`p`,20),vN(97,`Default`),ug(),Kc(98,`po-progress`,24),ug()()()()),l&2&&(Hp(10),cE(`p-value`,i.value),Hp(19),cE(`p-value`,i.value))},dependencies:[Pie,Pze],styles:[`.container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}`],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-circle-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Progress Circle`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-progress-circle/sample-po-progress-circle.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="container">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-progress-circle/sample-po-progress-circle.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-progress-circle/sample-po-progress-circle.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.container {
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
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-progress-circle`),ug(),Kc(29,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Re,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ce],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-progress-doc`]],standalone:!1,decls:966,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoProgressStatus`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoProgressModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-progress`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoProgressComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa.`),ug(),Ac(18,`p`),vN(19,`Este componente pode ser utilizado no `),Ac(20,`em`),vN(21,`upload`),ug(),vN(22,` de arquivos, uma atualização no sistema ou o processamento de uma imagem.`),ug(),Ac(23,`h4`),vN(24,`Tokens customizáveis`),ug(),Ac(25,`p`),vN(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(27,`blockquote`)(28,`p`),vN(29,`Para maiores informações, acesse o guia `),Ac(30,`a`,6),vN(31,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(32,`.`),ug()(),Ac(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),vN(37,`Propriedade`),ug(),Ac(38,`th`),vN(39,`Descrição`),ug(),Ac(40,`th`),vN(41,`Valor Padrão`),ug()()(),Ac(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),vN(46,`Default Values`),ug()(),Kc(47,`td`)(48,`td`),ug(),Ac(49,`tr`)(50,`td`)(51,`code`),vN(52,`--font-family`),ug()(),Ac(53,`td`),vN(54,`Família tipográfica usada`),ug(),Ac(55,`td`)(56,`code`),vN(57,`var(--font-family-theme)`),ug()()(),Ac(58,`tr`)(59,`td`)(60,`code`),vN(61,`--text-color`),ug()(),Ac(62,`td`),vN(63,`Cor do texto`),ug(),Ac(64,`td`)(65,`code`),vN(66,`var(--color-neutral-dark-90)`),ug()()(),Ac(67,`tr`)(68,`td`)(69,`strong`),vN(70,`Error`),ug()(),Kc(71,`td`)(72,`td`),ug(),Ac(73,`tr`)(74,`td`)(75,`code`),vN(76,`--text-color-error`),ug()(),Ac(77,`td`),vN(78,`Cor do texto no estado error`),ug(),Ac(79,`td`)(80,`code`),vN(81,`var(--color-feedback-negative-dark)`),ug()()(),Ac(82,`tr`)(83,`td`)(84,`code`),vN(85,`--color-icon-error`),ug()(),Ac(86,`td`),vN(87,`Cor do ícone no estado error`),ug(),Ac(88,`td`)(89,`code`),vN(90,`var(--color-feedback-negative-dark)`),ug()()(),Ac(91,`tr`)(92,`td`)(93,`strong`),vN(94,`po-progress-bar`),ug()(),Kc(95,`td`)(96,`td`),ug(),Ac(97,`tr`)(98,`td`)(99,`code`),vN(100,`--background-color-tray`),ug()(),Ac(101,`td`),vN(102,`Cor do background`),ug(),Ac(103,`td`)(104,`code`),vN(105,`var(--color-brand-01-lightest)`),ug()()(),Ac(106,`tr`)(107,`td`)(108,`code`),vN(109,`--background-color-indicator`),ug()(),Ac(110,`td`),vN(111,`Cor do background do indicador`),ug(),Ac(112,`td`)(113,`code`),vN(114,`var(--color-action-default)`),ug()()(),Ac(115,`tr`)(116,`td`)(117,`strong`),vN(118,`po-progress-circle`),ug()(),Kc(119,`td`)(120,`td`),ug(),Ac(121,`tr`)(122,`td`)(123,`code`),vN(124,`--background-color-tray`),ug()(),Ac(125,`td`),vN(126,`Cor do background`),ug(),Ac(127,`td`)(128,`code`),vN(129,`var(--color-brand-01-lightest)`),ug()()(),Ac(130,`tr`)(131,`td`)(132,`code`),vN(133,`--background-color-indicator`),ug()(),Ac(134,`td`),vN(135,`Cor do background do indicador`),ug(),Ac(136,`td`)(137,`code`),vN(138,`var(--color-action-default)`),ug()()()()()(),Ac(139,`div`,7)(140,`h4`,8),vN(141,`Seletor`),ug(),Ac(142,`pre`,9),vN(143,`<po-progress
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
`),ug()(),Ac(144,`h4`,10),vN(145,`Propriedades`),ug(),Ac(146,`table`,11)(147,`tr`,12)(148,`th`,13),vN(149,`Nome`),ug(),Ac(150,`th`,13),vN(151,`Tipo`),ug(),Ac(152,`th`,13),vN(153,`Padrão`),ug(),Ac(154,`th`,13),vN(155,`Descrição`),ug()(),Ac(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),vN(160,` p-aria-label`),Kc(161,`br`),ug()()(),Ac(162,`td`,18)(163,`code`,19),vN(164,`string`),ug()(),Ac(165,`td`,20),vN(166,`-`),ug(),Ac(167,`td`,21)(168,`em`)(169,`strong`),vN(170,`(opcional)`),ug()(),Ac(171,`p`),vN(172,`Define um nome acessível para o elemento com `),Ac(173,`code`),vN(174,`role="progressbar"`),ug(),vN(175,`.`),ug(),Ac(176,`p`),vN(177,`Quando não informado, o componente utiliza o valor de `),Ac(178,`code`),vN(179,`p-text`),ug(),vN(180,` como alternativa, se disponível.`),ug()()(),Ac(181,`tr`,14)(182,`td`,15)(183,`div`,22)(184,`span`,23),vN(185,` (p-cancel)`),Kc(186,`br`),ug()()(),Ac(187,`td`,18)(188,`code`,24),vN(189,`EventEmitter`),ug()(),Ac(190,`td`,20),vN(191,`-`),ug(),Ac(192,`td`,21)(193,`em`)(194,`strong`),vN(195,`(opcional)`),ug()(),Ac(196,`p`),vN(197,`Evento que será disparado ao clicar no ícone de cancelamento ("x") na parte inferior da barra de progresso.`),ug(),Ac(198,`p`),vN(199,`Ao ser disparado, a função receberá como parâmetro o status atual da barra de progresso.`),ug(),Ac(200,`blockquote`)(201,`p`),vN(202,`Se nenhuma função for passada para o evento ou a barra de progresso estiver com o status `),Ac(203,`code`),vN(204,`PoProgressStatus.Success`),ug(),vN(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),ug()(),Ac(206,`blockquote`)(207,`p`),vN(208,`Não compatível com `),Ac(209,`code`),vN(210,`p-shape="circle"`),ug(),vN(211,`.`),ug()()()(),Ac(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),vN(216,` p-custom-action`),Kc(217,`br`),ug()()(),Ac(218,`td`,18)(219,`code`,25),vN(220,`PoProgressAction`),ug()(),Ac(221,`td`,20),vN(222,`-`),ug(),Ac(223,`td`,21)(224,`em`)(225,`strong`),vN(226,`(opcional)`),ug()(),Ac(227,`p`),vN(228,`Permite definir uma ação personalizada no componente `),Ac(229,`code`),vN(230,`po-progress`),ug(),vN(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Ac(232,`strong`),vN(233,`PoProgressAction`),ug(),vN(234,`, possibilitando configurar:`),ug(),Ac(235,`ul`)(236,`li`)(237,`strong`)(238,`code`),vN(239,`label`),ug()(),vN(240,`: Texto exibido no botão (opcional).`),ug(),Ac(241,`li`)(242,`strong`)(243,`code`),vN(244,`icon`),ug()(),vN(245,`: Ícone exibido no botão (opcional).`),ug(),Ac(246,`li`)(247,`strong`)(248,`code`),vN(249,`type`),ug()(),vN(250,`: Tipo do botão (`),Ac(251,`code`),vN(252,`default`),ug(),vN(253,` ou `),Ac(254,`code`),vN(255,`danger`),ug(),vN(256,`) para indicar a intenção da ação (opcional).`),ug(),Ac(257,`li`)(258,`strong`)(259,`code`),vN(260,`disabled`),ug()(),vN(261,`: Indica se o botão deve estar desabilitado (opcional).`),ug(),Ac(262,`li`)(263,`strong`)(264,`code`),vN(265,`visible`),ug()(),vN(266,`: Determina se o botão será exibido. Pode ser um valor booleano ou uma função que retorna um booleano (opcional).`),ug()(),Ac(267,`blockquote`)(268,`p`),vN(269,`Não compatível com `),Ac(270,`code`),vN(271,`p-shape="circle"`),ug(),vN(272,`.`),ug()()()(),Ac(273,`tr`,14)(274,`td`,15)(275,`div`,22)(276,`span`,23),vN(277,` (p-custom-action-click)`),Kc(278,`br`),ug()()(),Ac(279,`td`,18)(280,`code`,24),vN(281,`EventEmitter`),ug()(),Ac(282,`td`,20),vN(283,`-`),ug(),Ac(284,`td`,21)(285,`em`)(286,`strong`),vN(287,`(opcional)`),ug()(),Ac(288,`p`),vN(289,`Evento emitido quando o botão definido em `),Ac(290,`code`),vN(291,`p-custom-action`),ug(),vN(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),ug(),Ac(293,`blockquote`)(294,`p`),vN(295,`Não compatível com `),Ac(296,`code`),vN(297,`p-shape="circle"`),ug(),vN(298,`.`),ug()()()(),Ac(299,`tr`,14)(300,`td`,15)(301,`div`,16)(302,`span`,17),vN(303,` p-disabled-cancel`),Kc(304,`br`),ug()()(),Ac(305,`td`,18)(306,`code`,26),vN(307,`boolean`),ug()(),Ac(308,`td`,20)(309,`p`)(310,`code`),vN(311,`false`),ug()()(),Ac(312,`td`,21)(313,`em`)(314,`strong`),vN(315,`(opcional)`),ug()(),Ac(316,`p`),vN(317,`Desabilita botão de cancelamento na parte inferior da barra de progresso.`),ug(),Ac(318,`blockquote`)(319,`p`),vN(320,`Se nenhuma função for passada para o evento `),Ac(321,`code`),vN(322,`(p-cancel)`),ug(),vN(323,` ou a barra de progresso estiver com o status `),Ac(324,`code`),vN(325,`PoProgressStatus.Success`),ug(),vN(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),ug()(),Ac(327,`blockquote`)(328,`p`),vN(329,`Não compatível com `),Ac(330,`code`),vN(331,`p-shape="circle"`),ug(),vN(332,`.`),ug()()()(),Ac(333,`tr`,14)(334,`td`,15)(335,`div`,16)(336,`span`,17),vN(337,` p-indeterminate`),Kc(338,`br`),ug()()(),Ac(339,`td`,18)(340,`code`,26),vN(341,`boolean`),ug()(),Ac(342,`td`,20)(343,`p`)(344,`code`),vN(345,`false`),ug()()(),Ac(346,`td`,21)(347,`em`)(348,`strong`),vN(349,`(opcional)`),ug()(),Ac(350,`p`),vN(351,`Habilita o modo indeterminado na barra de progresso, que mostra uma animação fixa sem um valor estabelecido.`),ug(),Ac(352,`p`),vN(353,`Esta opção pode ser utilizada quando não souber quanto tempo levará para que um processo seja concluído.`),ug(),Ac(354,`blockquote`)(355,`p`),vN(356,`Caso esta propriedade e a `),Ac(357,`code`),vN(358,`p-value`),ug(),vN(359,` seja habilitada, a propriedade `),Ac(360,`code`),vN(361,`p-value`),ug(),vN(362,` será ignorada.`),ug()()()(),Ac(363,`tr`,14)(364,`td`,15)(365,`div`,16)(366,`span`,17),vN(367,` p-info`),Kc(368,`br`),ug()()(),Ac(369,`td`,18)(370,`code`,19),vN(371,`string`),ug()(),Ac(372,`td`,20),vN(373,`-`),ug(),Ac(374,`td`,21)(375,`em`)(376,`strong`),vN(377,`(opcional)`),ug()(),Ac(378,`p`),vN(379,`Informação adicional que aparecerá abaixo da barra de progresso ao lado direito.`),ug(),Ac(380,`blockquote`)(381,`p`),vN(382,`Não compatível com `),Ac(383,`code`),vN(384,`p-shape="circle"`),ug(),vN(385,`.`),ug()()()(),Ac(386,`tr`,14)(387,`td`,15)(388,`div`,16)(389,`span`,17),vN(390,` p-info-icon`),Kc(391,`br`),ug()()(),Ac(392,`td`,18)(393,`code`,19),vN(394,`string `),ug(),Ac(395,`code`,27),vN(396,` TemplateRef<void>`),ug()(),Ac(397,`td`,20),vN(398,`-`),ug(),Ac(399,`td`,21)(400,`em`)(401,`strong`),vN(402,`(opcional)`),ug()(),Ac(403,`p`),vN(404,`Ícone que aparecerá ao lado do texto da propriedade `),Ac(405,`code`),vN(406,`p-info`),ug(),vN(407,`.`),ug(),Ac(408,`p`),vN(409,`Exemplo: `),Ac(410,`code`),vN(411,`an an-check`),ug(),vN(412,`.`),ug(),Ac(413,`blockquote`)(414,`p`),vN(415,`Não compatível com `),Ac(416,`code`),vN(417,`p-shape="circle"`),ug(),vN(418,`.`),ug()()()(),Ac(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),vN(423,` p-radius`),Kc(424,`br`),ug()()(),Ac(425,`td`,18)(426,`code`,28),vN(427,`number`),ug()(),Ac(428,`td`,20)(429,`p`)(430,`code`),vN(431,`45`),ug(),vN(432,` (automático)`),ug()(),Ac(433,`td`,21)(434,`em`)(435,`strong`),vN(436,`(opcional)`),ug()(),Ac(437,`p`),vN(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Ac(439,`code`),vN(440,`p-shape="circle"`),ug(),vN(441,`.`),ug(),Ac(442,`blockquote`)(443,`p`),vN(444,`O valor mínimo aceito é `),Ac(445,`strong`),vN(446,`24`),ug(),vN(447,`.`),ug()(),Ac(448,`blockquote`)(449,`p`),vN(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Ac(451,`strong`),vN(452,`45`),ug(),vN(453,` será utilizado.`),ug()(),Ac(454,`blockquote`)(455,`p`),vN(456,`Não compatível com `),Ac(457,`code`),vN(458,`p-shape="bar"`),ug(),vN(459,`.`),ug()()()(),Ac(460,`tr`,14)(461,`td`,15)(462,`div`,22)(463,`span`,23),vN(464,` (p-retry)`),Kc(465,`br`),ug()()(),Ac(466,`td`,18)(467,`code`,24),vN(468,`EventEmitter`),ug()(),Ac(469,`td`,20),vN(470,`-`),ug(),Ac(471,`td`,21)(472,`em`)(473,`strong`),vN(474,`(opcional)`),ug()(),Ac(475,`p`),vN(476,`Evento que será disparado ao clicar no ícone de tentar novamente na parte inferior da barra de progresso.`),ug(),Ac(477,`blockquote`)(478,`p`),vN(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Ac(480,`code`),vN(481,`PoProgressStatus.Error`),ug(),vN(482,`.`),ug()(),Ac(483,`blockquote`)(484,`p`),vN(485,`Não compatível com `),Ac(486,`code`),vN(487,`p-shape="circle"`),ug(),vN(488,`.`),ug()()()(),Ac(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),vN(493,` p-shape`),Kc(494,`br`),ug()()(),Ac(495,`td`,18)(496,`code`,19),vN(497,`string`),ug()(),Ac(498,`td`,20)(499,`p`)(500,`code`),vN(501,`bar`),ug()()(),Ac(502,`td`,21)(503,`em`)(504,`strong`),vN(505,`(opcional)`),ug()(),Ac(506,`p`),vN(507,`Define o formato visual do componente de progresso.`),ug(),Ac(508,`p`),vN(509,`Valores válidos:`),ug(),Ac(510,`ul`)(511,`li`)(512,`code`),vN(513,`bar`),ug(),vN(514,`: exibe o progresso em formato de barra.`),ug(),Ac(515,`li`)(516,`code`),vN(517,`circle`),ug(),vN(518,`: exibe o progresso em formato circular.`),ug()()()(),Ac(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),vN(523,` p-show-percentage`),Kc(524,`br`),ug()()(),Ac(525,`td`,18)(526,`code`,26),vN(527,`boolean`),ug()(),Ac(528,`td`,20)(529,`p`)(530,`code`),vN(531,`false`),ug()()(),Ac(532,`td`,21)(533,`em`)(534,`strong`),vN(535,`(opcional)`),ug()(),Ac(536,`p`),vN(537,`Ativa a exibição da porcentagem atual da barra de progresso.`),ug(),Ac(538,`blockquote`)(539,`p`),vN(540,`Se utilizada no `),Ac(541,`code`),vN(542,`p-shape="circle"`),ug(),vN(543,` e o status estiver como `),Ac(544,`code`),vN(545,`error`),ug(),vN(546,`, a porcentagem não será exibida.`),ug()()()(),Ac(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),vN(551,` p-size`),Kc(552,`br`),ug()()(),Ac(553,`td`,18)(554,`code`,19),vN(555,`string`),ug()(),Ac(556,`td`,20)(557,`p`)(558,`code`),vN(559,`large`),ug()()(),Ac(560,`td`,21)(561,`em`)(562,`strong`),vN(563,`(opcional)`),ug()(),Ac(564,`p`),vN(565,`Define a expessura da barra de progresso.`),ug(),Ac(566,`p`),vN(567,`Valores válidos:`),ug(),Ac(568,`ul`)(569,`li`),vN(570,`medium`),ug(),Ac(571,`li`),vN(572,`large`),ug()()()(),Ac(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),vN(577,` p-size-actions`),Kc(578,`br`),ug()()(),Ac(579,`td`,18)(580,`code`,19),vN(581,`string`),ug()(),Ac(582,`td`,20)(583,`p`)(584,`code`),vN(585,`medium`),ug()()(),Ac(586,`td`,21)(587,`em`)(588,`strong`),vN(589,`(opcional)`),ug()(),Ac(590,`p`),vN(591,`Define o tamanho das ações no componente com excessão da barra de progresso que pode ser ajustada através da propriedade `),Ac(592,`code`),vN(593,`p-size`),ug(),vN(594,`:`),ug(),Ac(595,`ul`)(596,`li`)(597,`code`),vN(598,`small`),ug(),vN(599,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(600,`li`)(601,`code`),vN(602,`medium`),ug(),vN(603,`: aplica a medida medium de cada componente.`),ug()(),Ac(604,`blockquote`)(605,`p`),vN(606,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(607,`code`),vN(608,`medium`),ug(),vN(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(610,`a`,29),vN(611,`po-theme`),ug(),vN(612,`.`),ug()(),Ac(613,`blockquote`)(614,`p`),vN(615,`Não compatível com `),Ac(616,`code`),vN(617,`p-shape="circle"`),ug(),vN(618,`.`),ug()()()(),Ac(619,`tr`,14)(620,`td`,15)(621,`div`,16)(622,`span`,17),vN(623,` p-status`),Kc(624,`br`),ug()()(),Ac(625,`td`,18)(626,`code`,30),vN(627,`PoProgressStatus`),ug()(),Ac(628,`td`,20)(629,`p`)(630,`code`),vN(631,`PoProgressStatus.Default`),ug()()(),Ac(632,`td`,21)(633,`em`)(634,`strong`),vN(635,`(opcional)`),ug()(),Ac(636,`p`),vN(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),ug()()(),Ac(638,`tr`,14)(639,`td`,15)(640,`div`,16)(641,`span`,17),vN(642,` p-text`),Kc(643,`br`),ug()()(),Ac(644,`td`,18)(645,`code`,19),vN(646,`string`),ug()(),Ac(647,`td`,20),vN(648,`-`),ug(),Ac(649,`td`,21)(650,`em`)(651,`strong`),vN(652,`(opcional)`),ug()(),Ac(653,`p`),vN(654,`Texto principal que aparecerá abaixo da barra de progresso no lado esquerdo.`),ug(),Ac(655,`blockquote`)(656,`p`),vN(657,`Não compatível com `),Ac(658,`code`),vN(659,`p-shape="circle"`),ug(),vN(660,`.`),ug()()()(),Ac(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),vN(665,` p-value`),Kc(666,`br`),ug()()(),Ac(667,`td`,18)(668,`code`,28),vN(669,`number`),ug()(),Ac(670,`td`,20)(671,`p`)(672,`code`),vN(673,`0`),ug()()(),Ac(674,`td`,21)(675,`em`)(676,`strong`),vN(677,`(opcional)`),ug()(),Ac(678,`p`),vN(679,`Valor que representará o progresso.`),ug(),Ac(680,`blockquote`)(681,`p`),vN(682,`Os valores aceitos são números inteiros de `),Ac(683,`code`),vN(684,`0`),ug(),vN(685,` à `),Ac(686,`code`),vN(687,`100`),ug(),vN(688,`.`),ug()()()()(),Ac(689,`h3`),vN(690,`Interfaces`),ug(),Ac(691,`h4`,31)(692,`code`,5),vN(693,`PoProgressAction`),ug()(),Ac(694,`div`,2)(695,`p`),vN(696,`Interface para as ações dos componentes po-progress e po-upload.`),ug()(),Ac(697,`h4`,10),vN(698,`Propriedades`),ug(),Ac(699,`table`,11)(700,`tr`,12)(701,`th`,13),vN(702,`Nome`),ug(),Ac(703,`th`,13),vN(704,`Tipo`),ug(),Ac(705,`th`,13),vN(706,`Descrição`),ug()(),Ac(707,`tr`,14)(708,`td`,15)(709,`div`,16)(710,`span`,17),vN(711,` disabled`),Kc(712,`br`),ug()()(),Ac(713,`td`,18)(714,`code`,26),vN(715,`boolean `),ug(),Ac(716,`code`,32),vN(717,` Function`),ug()(),Ac(718,`td`,21)(719,`em`)(720,`strong`),vN(721,`(opcional)`),ug()(),Ac(722,`p`),vN(723,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),ug(),Ac(724,`p`),vN(725,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),ug()()(),Ac(726,`tr`,14)(727,`td`,15)(728,`div`,16)(729,`span`,17),vN(730,` icon`),Kc(731,`br`),ug()()(),Ac(732,`td`,18)(733,`code`,19),vN(734,`string `),ug(),Ac(735,`code`,27),vN(736,` TemplateRef<void>`),ug()(),Ac(737,`td`,21)(738,`em`)(739,`strong`),vN(740,`(opcional)`),ug()(),Ac(741,`p`),vN(742,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),ug(),Ac(743,`p`),vN(744,`É possível usar qualquer um dos ícones da `),Ac(745,`a`,33),vN(746,`Biblioteca de ícones`),ug(),vN(747,`. conforme exemplo abaixo:`),ug(),Ac(748,`pre`)(749,`code`),vN(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),ug()(),Ac(751,`p`),vN(752,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ug(),Ac(753,`pre`)(754,`code`),vN(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),ug()(),Ac(756,`p`),vN(757,`Outra opção seria a customização do ícone através do `),Ac(758,`code`),vN(759,`TemplateRef`),ug(),vN(760,`, conforme exemplo abaixo:
component.html:`),ug(),Ac(761,`pre`)(762,`code`),vN(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),ug()(),Ac(764,`p`),vN(765,`component.ts:`),ug(),Ac(766,`pre`)(767,`code`),vN(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),ug()()()(),Ac(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),vN(773,` label`),Kc(774,`br`),ug()()(),Ac(775,`td`,18)(776,`code`,19),vN(777,`string`),ug()(),Ac(778,`td`,21)(779,`em`)(780,`strong`),vN(781,`(opcional)`),ug()(),Ac(782,`p`),vN(783,`Rótulo da ação.`),ug()()(),Ac(784,`tr`,14)(785,`td`,15)(786,`div`,16)(787,`span`,17),vN(788,` type`),Kc(789,`br`),ug()()(),Ac(790,`td`,18)(791,`code`,19),vN(792,`string`),ug()(),Ac(793,`td`,21)(794,`em`)(795,`strong`),vN(796,`(opcional)`),ug()(),Ac(797,`p`),vN(798,`Define a cor do item, sendo `),Ac(799,`code`),vN(800,`default`),ug(),vN(801,` o padrão.`),ug(),Ac(802,`p`),vN(803,`Valores válidos:`),ug(),Ac(804,`ul`)(805,`li`)(806,`code`),vN(807,`default`),ug()(),Ac(808,`li`)(809,`code`),vN(810,`danger`),ug(),vN(811,` - indicado para ações exclusivas (excluir, sair).`),ug()()()(),Ac(812,`tr`,14)(813,`td`,15)(814,`div`,16)(815,`span`,17),vN(816,` visible`),Kc(817,`br`),ug()()(),Ac(818,`td`,18)(819,`code`,26),vN(820,`boolean `),ug(),Ac(821,`code`,32),vN(822,` Function`),ug()(),Ac(823,`td`,21)(824,`em`)(825,`strong`),vN(826,`(opcional)`),ug()(),Ac(827,`p`),vN(828,`Define se a ação será visível.`),ug(),Ac(829,`blockquote`)(830,`p`),vN(831,`Caso o valor não seja especificado a ação será visível.`),ug()(),Ac(832,`p`),vN(833,`Opções para tornar a ação visível ou não:`),ug(),Ac(834,`ul`)(835,`li`)(836,`p`),vN(837,`Função que deve retornar um booleano.`),ug()(),Ac(838,`li`)(839,`p`),vN(840,`Informar diretamente um valor booleano.`),ug()()()()()(),Ac(841,`h3`),vN(842,`Enums`),ug(),Ac(843,`h4`,4)(844,`code`,5),vN(845,`PoProgressShape`),ug()(),Ac(846,`div`,2)(847,`p`),vN(848,`Enum `),Ac(849,`code`),vN(850,`PoProgressShape`),ug(),vN(851,` para definir o formato visual do componente de progresso.`),ug()(),Ac(852,`h4`,10),vN(853,`Propriedades`),ug(),Ac(854,`table`,11)(855,`tr`,12)(856,`th`,13),vN(857,`Nome`),ug(),Ac(858,`th`,13),vN(859,`Descrição`),ug()(),Ac(860,`tr`,14)(861,`td`,15)(862,`div`,16)(863,`span`,17),vN(864,` bar`),Kc(865,`br`),ug()()(),Ac(866,`td`,21)(867,`p`),vN(868,`Formato barra de progresso (padrão).`),ug()()(),Ac(869,`tr`,14)(870,`td`,15)(871,`div`,16)(872,`span`,17),vN(873,` circle`),Kc(874,`br`),ug()()(),Ac(875,`td`,21)(876,`p`),vN(877,`Formato circular de progresso.`),ug()()()(),Ac(878,`h4`,4)(879,`code`,5),vN(880,`PoProgressSize`),ug()(),Ac(881,`div`,2)(882,`p`),vN(883,`Enum para configurar a expessura (`),Ac(884,`code`),vN(885,`p-size`),ug(),vN(886,`) da barra de progresso do componente.`),ug()(),Ac(887,`h4`,10),vN(888,`Propriedades`),ug(),Ac(889,`table`,11)(890,`tr`,12)(891,`th`,13),vN(892,`Nome`),ug(),Ac(893,`th`,13),vN(894,`Descrição`),ug()(),Ac(895,`tr`,14)(896,`td`,15)(897,`div`,16)(898,`span`,17),vN(899,` medium`),Kc(900,`br`),ug()()(),Ac(901,`td`,21)(902,`p`),vN(903,`Tamanho médio com 4px.`),ug()()(),Ac(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),vN(908,` large`),Kc(909,`br`),ug()()(),Ac(910,`td`,21)(911,`p`),vN(912,`Tamanho grande com 8px.`),ug()()()(),Ac(913,`h4`,4)(914,`code`,5),vN(915,`PoProgressStatus`),ug()(),Ac(916,`div`,2)(917,`p`),vN(918,`Enum `),Ac(919,`code`),vN(920,`PoProgressStatus`),ug(),vN(921,` para os status de barra de progresso.`),ug()(),Ac(922,`h4`,10),vN(923,`Propriedades`),ug(),Ac(924,`table`,11)(925,`tr`,12)(926,`th`,13),vN(927,`Nome`),ug(),Ac(928,`th`,13),vN(929,`Descrição`),ug()(),Ac(930,`tr`,14)(931,`td`,15)(932,`div`,16)(933,`span`,17),vN(934,` Default`),Kc(935,`br`),ug()()(),Ac(936,`td`,21)(937,`p`),vN(938,`Define o status `),Ac(939,`code`),vN(940,`default`),ug(),vN(941,` para a barra de progresso.`),ug()()(),Ac(942,`tr`,14)(943,`td`,15)(944,`div`,16)(945,`span`,17),vN(946,` Error`),Kc(947,`br`),ug()()(),Ac(948,`td`,21)(949,`p`),vN(950,`Define o status de `),Ac(951,`code`),vN(952,`error`),ug(),vN(953,` para a barra de progresso.`),ug()()(),Ac(954,`tr`,14)(955,`td`,15)(956,`div`,16)(957,`span`,17),vN(958,` Success`),Kc(959,`br`),ug()()(),Ac(960,`td`,21)(961,`p`),vN(962,`Define o status de `),Ac(963,`code`),vN(964,`success`),ug(),vN(965,` para a barra de progresso.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Progress`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-progress-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-progress-basic-view`)(6,`sample-po-progress-labs-view`)(7,`sample-po-progress-publication-view`)(8,`sample-po-progress-circle-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,Se,ve,fe,Pe,we],encapsulation:2,changeDetection:1})}return o})()}];var De=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[kL.forChild(Ge),kL]})}return o})();var wt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[Ta,De]})}return o})();export{wt as DocPoProgressModule};