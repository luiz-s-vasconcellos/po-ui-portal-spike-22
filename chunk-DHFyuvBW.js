import{$r as Zn,Br as Sx,Ei as jc,Fi as mx,Ft as _f,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,Lr as SF,Mn as w5,Pi as mt,Q as Nie,Ri as nu,Rt as _oe,Ti as jF,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,an as ib$1,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,ga as xx,i as _a,ir as EF,ji as mO,ki as kF,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,un as m5,va as y_,wi as jE,wn as s4,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn,zt as _s}from"./main-ADAH4OB5.js";var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-basic`]],standalone:!1,decls:8,vars:3,consts:[[`p-title`,`Bar`],[3,`p-value`],[1,`po-mt-1`],[`p-title`,`Circle`,1,`po-mt-2`],[`p-shape`,`circle`,3,`p-value`,`p-radius`]],template:function(l,i){l&1&&(jc(0,`div`)(1,`po-widget`,0),nu(2,`po-progress`,1),wg()(),jc(3,`div`,2)(4,`po-widget`,3),nu(5,`po-progress`,4),jc(6,`div`,2),iO(7,`Para adequação do layout, o valor mínimo de p-radius é 24px.`),wg()()()),l&2&&(rg(2),jE(`p-value`,25),rg(3),jE(`p-value`,25)(`p-radius`,24))},dependencies:[Nie,Noe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Progress Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-progress-basic/sample-po-progress-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-progress-basic/sample-po-progress-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-progress-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Me,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return o})();function Oe(o,Q){if(o&1&&(jc(0,`po-widget`,3),nu(1,`po-info`,15),wg()),o&2){let r=xx();rg(),jE(`p-value`,r.event)}}function Ae(o,Q){if(o&1&&(jc(0,`div`)(1,`po-widget`,21)(2,`form`,22)(3,`po-input`,23),JN(),wg(),jc(4,`po-select`,24),JN(),wg(),jc(5,`po-select`,25),JN(),wg(),jc(6,`po-switch`,26),JN(),wg(),jc(7,`po-switch`,27),JN(),wg()()()()),o&2){let r=xx(2);rg(2),jE(`formGroup`,r.actionForm),rg(),t0(),rg(),jE(`p-options`,r.iconOptions),t0(),rg(),jE(`p-options`,r.typeOptions),t0(),rg(),t0(),rg(),t0()}}function ze(o,Q){if(o&1){let r=Sx();jc(0,`po-select`,16),JN(),ob(`ngModelChange`,function(i){y_(r);let m=xx();return sO(m.infoIcon,i)||(m.infoIcon=i),v_(i)}),wg(),jc(1,`po-input`,17),JN(),ob(`ngModelChange`,function(i){y_(r);let m=xx();return sO(m.text,i)||(m.text=i),v_(i)}),wg(),jc(2,`po-input`,18),JN(),ob(`ngModelChange`,function(i){y_(r);let m=xx();return sO(m.info,i)||(m.info=i),v_(i)}),wg(),jc(3,`po-radio-group`,19),JN(),ob(`ngModelChange`,function(i){y_(r);let m=xx();return sO(m.sizeActions,i)||(m.sizeActions=i),v_(i)}),wg(),jc(4,`po-switch`,20),JN(),ob(`ngModelChange`,function(i){y_(r);let m=xx();return sO(m.showAction,i)||(m.showAction=i),v_(i)}),wg(),px(5,Ae,8,3,`div`)}if(o&2){let r=xx();ib(`ngModel`,r.infoIcon),jE(`p-options`,r.infoIconsOptions),t0(),rg(),ib(`ngModel`,r.text),t0(),rg(),ib(`ngModel`,r.info),t0(),rg(),ib(`ngModel`,r.sizeActions),jE(`p-options`,r.sizeActionsOptions),t0(),rg(),ib(`ngModel`,r.showAction),t0(),rg(),mx(r.showAction?5:-1)}}function Be(o,Q){if(o&1){let r=Sx();jc(0,`po-number`,28),JN(),ob(`ngModelChange`,function(i){y_(r);let m=xx();return sO(m.radius,i)||(m.radius=i),v_(i)}),wg()}if(o&2){let r=xx();ib(`ngModel`,r.radius),t0()}}var he=(()=>{class o{fb=p(jF);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=_s.Default;size=ib$1.large;shape=_f.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:`an an-warning-circle`,value:`an an-warning-circle`},{label:`an an-check`,value:`an an-check`},{label:`an an-user`,value:`an an-user`},{label:`an an-cloud-slash`,value:`an an-cloud-slash`}];statusOptions=[{label:`Default`,value:_s.Default},{label:`Success`,value:_s.Success},{label:`Error`,value:_s.Error}];sizeOptions=[{label:`Medium`,value:ib$1.medium},{label:`Large`,value:ib$1.large}];shapeOptions=[{label:`Bar`,value:_f.bar},{label:`Circle`,value:_f.circle}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Visible`,value:`visible`}];allPropertiesOptions=[{value:`disabledCancel`,label:`Disabled cancel`},{value:`indeterminate`,label:`Indeterminate`},{value:`showPercentage`,label:`Show percentage`}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm()}onShapeChange(r){this.restore(r),r===`circle`?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!==`disabledCancel`):this.propertiesOptions=[...this.allPropertiesOptions]}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r)})}updateAction(r){this.action=r}onEvent(r){this.event=r}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=_s.Default,this.text=void 0,this.value=void 0,this.size=ib$1.large,this.radius=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.showAction=!1,this.properties=[],this.sizeActions=`medium`,r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=_f.bar)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-labs`]],standalone:!1,decls:17,vars:25,consts:[[`progressBarPropertiesForm`,`ngForm`],[1,`sample-progress-grid`],[3,`p-custom-action-click`,`p-cancel`,`p-retry`,`p-disabled-cancel`,`p-indeterminate`,`p-show-percentage`,`p-info`,`p-info-icon`,`p-status`,`p-text`,`p-value`,`p-size`,`p-shape`,`p-radius`,`p-size-actions`,`p-custom-action`],[`p-title`,`Events`],[`p-title`,`Properties`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`],[`name`,`shape`,`p-label`,`Shape`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`,`po-mt-2`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-max`,`100`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`Size`,`p-label`,`Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Status`,`p-label`,`Status`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[3,`p-value`],[`name`,`infoIcon`,`p-label`,`Info icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`text`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`info`,`p-clean`,``,`p-label`,`Info`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`sizeActions`,`p-columns`,`4`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-mb-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`addAction`,`p-label`,`Add Action Button`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`]],template:function(l,i){if(l&1){let m=Sx();jc(0,`div`,1)(1,`po-progress`,2),mt(`p-custom-action-click`,function(){return i.onEvent(`p-custom-action-click`)})(`p-cancel`,function(){return i.onEvent(`p-cancel`)})(`p-retry`,function(){return i.onEvent(`p-retry`)}),wg(),px(2,Oe,2,1,`po-widget`,3),jc(3,`po-widget`,4)(4,`form`,null,0)(6,`div`,5)(7,`po-radio-group`,6),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(i.shape,d)||(i.shape=d),v_(d)}),mt(`p-change`,function(d){return i.onShapeChange(d)}),wg()(),jc(8,`div`,7)(9,`po-number`,8),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(i.value,d)||(i.value=d),v_(d)}),wg(),jc(10,`po-select`,9),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(i.size,d)||(i.size=d),v_(d)}),wg(),jc(11,`po-select`,10),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(i.status,d)||(i.status=d),v_(d)}),wg(),px(12,ze,6,8),px(13,Be,1,1,`po-number`,11),jc(14,`po-checkbox-group`,12),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(i.properties,d)||(i.properties=d),v_(d)}),wg()()()(),jc(15,`div`,13)(16,`po-button`,14),mt(`p-click`,function(){return i.restore()}),wg()()()}l&2&&(rg(),jE(`p-disabled-cancel`,i.properties.includes(`disabledCancel`))(`p-indeterminate`,i.properties.includes(`indeterminate`))(`p-show-percentage`,i.properties.includes(`showPercentage`))(`p-info`,i.info)(`p-info-icon`,i.infoIcon)(`p-status`,i.status)(`p-text`,i.text)(`p-value`,i.value)(`p-size`,i.size)(`p-shape`,i.shape)(`p-radius`,i.radius)(`p-size-actions`,i.sizeActions)(`p-custom-action`,i.action),rg(),mx(i.shape===`bar`?2:-1),rg(5),ib(`ngModel`,i.shape),jE(`p-options`,i.shapeOptions),t0(),rg(2),ib(`ngModel`,i.value),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0(),rg(),ib(`ngModel`,i.status),jE(`p-options`,i.statusOptions),t0(),rg(),mx(i.shape===`bar`?12:-1),rg(),mx(i.shape===`circle`?13:-1),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0())},dependencies:[wK,CK,EK,TF,EF,SF,kF,ni,m5,A5,doe,Ote,moe,w5,_oe,Nie,Noe],styles:[`.sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}`],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Progress Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-progress-labs/sample-po-progress-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="sample-progress-grid">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-progress-labs/sample-po-progress-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-progress-labs/sample-po-progress-labs.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-progress-labs`),wg(),nu(29,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ve,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++},20)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-publication`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Edit publication`],[1,`po-row`],[1,`po-md-9`,3,`ngModelChange`,`ngModel`],[1,`po-md-9`],[`p-text`,`Loading update`,1,`po-md-9`,3,`p-value`,`p-show-percentage`],[`p-label`,`Update publication`,3,`p-click`,`p-disabled`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`div`,1)(2,`po-rich-text`,2),JN(),ob(`ngModelChange`,function(v){return sO(i.publication,v)||(i.publication=v),v}),wg(),nu(3,`po-divider`,3)(4,`po-progress`,4),wg(),jc(5,`div`,1)(6,`po-button`,5),mt(`p-click`,function(){return i.updatePublication()}),wg()()()),l&2&&(rg(2),ib(`ngModel`,i.publication),t0(),rg(2),jE(`p-value`,i.progressBarValue)(`p-show-percentage`,!0),rg(2),jE(`p-disabled`,i.buttonDisabled))},dependencies:[CK,TF,ni,Lf,s4,Kze,Nie],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-publication-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Progress - Publication`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-progress-publication/sample-po-progress-publication.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Edit publication">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-progress-publication/sample-po-progress-publication.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-progress-publication`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ie,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,xe],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-circle`]],standalone:!1,decls:99,vars:2,consts:[[1,`container`],[`p-title`,`Regra de Adequação de Layout`],[1,`line-height`],[1,`po-font-text-large-bold`],[1,`po-text-large`],[`p-title`,`Exemplo Básico - Radius Mínimo (24px)`],[1,`po-row`,`po-align-items-center`],[1,`po-md-6`,`po-lg-4`,`po-center`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`24`,3,`p-value`],[1,`po-md-6`,`po-lg-8`],[1,`po-font-text`],[`p-title`,`Com Radius Maior (60px)`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`60`,3,`p-value`],[`p-title`,`Com Status Error (Radius 24px)`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`error`,`p-radius`,`24`],[`p-title`,`Modo Indeterminado`],[`p-shape`,`circle`,`p-indeterminate`,`true`,`p-radius`,`30`],[`p-title`,`Comparação Visual - Diferentes Status`],[1,`po-row`,`row`],[1,`po-md-3`,`po-center`,`items`],[1,`po-font-text-large-bold`,`po-mb-1`],[`p-shape`,`circle`,`p-value`,`100`,`p-status`,`success`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`warning`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`0`,`p-status`,`error`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`75`,`p-show-percentage`,`true`,`p-radius`,`25`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`p`,3),iO(4,`📏 Para adequação do layout, o valor mínimo de p-radius é 24px.`),wg(),jc(5,`p`,4),iO(6,` O raio mínimo de 24px é necessário para evitar colisão entre o conteúdo central (porcentagem ou ícone de erro) e a borda do círculo. Valores menores podem causar sobreposição visual dos elementos. `),wg()()(),jc(7,`po-widget`,5)(8,`div`,6)(9,`div`,7),nu(10,`po-progress`,8),wg(),jc(11,`div`,9)(12,`p`)(13,`strong`),iO(14,`Configuração:`),wg()(),jc(15,`ul`)(16,`li`),iO(17,`p-shape="circle"`),wg(),jc(18,`li`),iO(19,`p-value="65"`),wg(),jc(20,`li`),iO(21,`p-show-percentage="true"`),wg(),jc(22,`li`),iO(23,`p-radius="24" (valor mínimo permitido)`),wg()(),jc(24,`p`,10),iO(25,`A porcentagem é exibida no centro sem colisão com a borda do círculo.`),wg()()()(),jc(26,`po-widget`,11)(27,`div`,6)(28,`div`,7),nu(29,`po-progress`,12),wg(),jc(30,`div`,9)(31,`p`)(32,`strong`),iO(33,`Configuração:`),wg()(),jc(34,`ul`)(35,`li`),iO(36,`p-shape="circle"`),wg(),jc(37,`li`),iO(38,`p-value="65"`),wg(),jc(39,`li`),iO(40,`p-show-percentage="true"`),wg(),jc(41,`li`),iO(42,`p-radius="60" (valor maior)`),wg()(),jc(43,`p`,10),iO(44,` Maior espaço disponível para o conteúdo central. Recomendado para melhor visualização. `),wg()()()(),jc(45,`po-widget`,13)(46,`div`,6)(47,`div`,7),nu(48,`po-progress`,14),wg(),jc(49,`div`,9)(50,`p`)(51,`strong`),iO(52,`Configuração:`),wg()(),jc(53,`ul`)(54,`li`),iO(55,`p-shape="circle"`),wg(),jc(56,`li`),iO(57,`p-value="50"`),wg(),jc(58,`li`),iO(59,`p-status="error"`),wg(),jc(60,`li`),iO(61,`p-radius="24" (valor mínimo)`),wg()(),jc(62,`p`,10),iO(63,`Ícone de erro exibido no centro. O radius mínimo de 24px evita sobreposição.`),wg()()()(),jc(64,`po-widget`,15)(65,`div`,6)(66,`div`,7),nu(67,`po-progress`,16),wg(),jc(68,`div`,9)(69,`p`)(70,`strong`),iO(71,`Configuração:`),wg()(),jc(72,`ul`)(73,`li`),iO(74,`p-shape="circle"`),wg(),jc(75,`li`),iO(76,`p-indeterminate="true"`),wg(),jc(77,`li`),iO(78,`p-radius="30"`),wg()(),jc(79,`p`,10),iO(80,`Animação contínua para indicar progresso em andamento.`),wg()()()(),jc(81,`po-widget`,17)(82,`div`,18)(83,`div`,19)(84,`p`,20),iO(85,`Success`),wg(),nu(86,`po-progress`,21),wg(),jc(87,`div`,19)(88,`p`,20),iO(89,`Warning`),wg(),nu(90,`po-progress`,22),wg(),jc(91,`div`,19)(92,`p`,20),iO(93,`Error`),wg(),nu(94,`po-progress`,23),wg(),jc(95,`div`,19)(96,`p`,20),iO(97,`Default`),wg(),nu(98,`po-progress`,24),wg()()()()),l&2&&(rg(10),jE(`p-value`,i.value),rg(19),jE(`p-value`,i.value))},dependencies:[Nie,Noe],styles:[`.container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}`],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-circle-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Progress Circle`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-progress-circle/sample-po-progress-circle.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="container">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-progress-circle/sample-po-progress-circle.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-progress-circle/sample-po-progress-circle.component.css`),wg(),jc(25,`pre`,11),iO(26,`.container {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-progress-circle`),wg(),nu(29,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Re,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ce],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-doc`]],standalone:!1,decls:966,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoProgressStatus`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoProgressModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-progress`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoProgressComponent`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa.`),wg(),jc(18,`p`),iO(19,`Este componente pode ser utilizado no `),jc(20,`em`),iO(21,`upload`),wg(),iO(22,` de arquivos, uma atualização no sistema ou o processamento de uma imagem.`),wg(),jc(23,`h4`),iO(24,`Tokens customizáveis`),wg(),jc(25,`p`),iO(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(27,`blockquote`)(28,`p`),iO(29,`Para maiores informações, acesse o guia `),jc(30,`a`,6),iO(31,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(32,`.`),wg()(),jc(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),iO(37,`Propriedade`),wg(),jc(38,`th`),iO(39,`Descrição`),wg(),jc(40,`th`),iO(41,`Valor Padrão`),wg()()(),jc(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),iO(46,`Default Values`),wg()(),nu(47,`td`)(48,`td`),wg(),jc(49,`tr`)(50,`td`)(51,`code`),iO(52,`--font-family`),wg()(),jc(53,`td`),iO(54,`Família tipográfica usada`),wg(),jc(55,`td`)(56,`code`),iO(57,`var(--font-family-theme)`),wg()()(),jc(58,`tr`)(59,`td`)(60,`code`),iO(61,`--text-color`),wg()(),jc(62,`td`),iO(63,`Cor do texto`),wg(),jc(64,`td`)(65,`code`),iO(66,`var(--color-neutral-dark-90)`),wg()()(),jc(67,`tr`)(68,`td`)(69,`strong`),iO(70,`Error`),wg()(),nu(71,`td`)(72,`td`),wg(),jc(73,`tr`)(74,`td`)(75,`code`),iO(76,`--text-color-error`),wg()(),jc(77,`td`),iO(78,`Cor do texto no estado error`),wg(),jc(79,`td`)(80,`code`),iO(81,`var(--color-feedback-negative-dark)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),iO(85,`--color-icon-error`),wg()(),jc(86,`td`),iO(87,`Cor do ícone no estado error`),wg(),jc(88,`td`)(89,`code`),iO(90,`var(--color-feedback-negative-dark)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`strong`),iO(94,`po-progress-bar`),wg()(),nu(95,`td`)(96,`td`),wg(),jc(97,`tr`)(98,`td`)(99,`code`),iO(100,`--background-color-tray`),wg()(),jc(101,`td`),iO(102,`Cor do background`),wg(),jc(103,`td`)(104,`code`),iO(105,`var(--color-brand-01-lightest)`),wg()()(),jc(106,`tr`)(107,`td`)(108,`code`),iO(109,`--background-color-indicator`),wg()(),jc(110,`td`),iO(111,`Cor do background do indicador`),wg(),jc(112,`td`)(113,`code`),iO(114,`var(--color-action-default)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`strong`),iO(118,`po-progress-circle`),wg()(),nu(119,`td`)(120,`td`),wg(),jc(121,`tr`)(122,`td`)(123,`code`),iO(124,`--background-color-tray`),wg()(),jc(125,`td`),iO(126,`Cor do background`),wg(),jc(127,`td`)(128,`code`),iO(129,`var(--color-brand-01-lightest)`),wg()()(),jc(130,`tr`)(131,`td`)(132,`code`),iO(133,`--background-color-indicator`),wg()(),jc(134,`td`),iO(135,`Cor do background do indicador`),wg(),jc(136,`td`)(137,`code`),iO(138,`var(--color-action-default)`),wg()()()()()(),jc(139,`div`,7)(140,`h4`,8),iO(141,`Seletor`),wg(),jc(142,`pre`,9),iO(143,`<po-progress
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
`),wg()(),jc(144,`h4`,10),iO(145,`Propriedades`),wg(),jc(146,`table`,11)(147,`tr`,12)(148,`th`,13),iO(149,`Nome`),wg(),jc(150,`th`,13),iO(151,`Tipo`),wg(),jc(152,`th`,13),iO(153,`Padrão`),wg(),jc(154,`th`,13),iO(155,`Descrição`),wg()(),jc(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),iO(160,` p-aria-label`),nu(161,`br`),wg()()(),jc(162,`td`,18)(163,`code`,19),iO(164,`string`),wg()(),jc(165,`td`,20),iO(166,`-`),wg(),jc(167,`td`,21)(168,`em`)(169,`strong`),iO(170,`(opcional)`),wg()(),jc(171,`p`),iO(172,`Define um nome acessível para o elemento com `),jc(173,`code`),iO(174,`role="progressbar"`),wg(),iO(175,`.`),wg(),jc(176,`p`),iO(177,`Quando não informado, o componente utiliza o valor de `),jc(178,`code`),iO(179,`p-text`),wg(),iO(180,` como alternativa, se disponível.`),wg()()(),jc(181,`tr`,14)(182,`td`,15)(183,`div`,22)(184,`span`,23),iO(185,` (p-cancel)`),nu(186,`br`),wg()()(),jc(187,`td`,18)(188,`code`,24),iO(189,`EventEmitter`),wg()(),jc(190,`td`,20),iO(191,`-`),wg(),jc(192,`td`,21)(193,`em`)(194,`strong`),iO(195,`(opcional)`),wg()(),jc(196,`p`),iO(197,`Evento que será disparado ao clicar no ícone de cancelamento ("x") na parte inferior da barra de progresso.`),wg(),jc(198,`p`),iO(199,`Ao ser disparado, a função receberá como parâmetro o status atual da barra de progresso.`),wg(),jc(200,`blockquote`)(201,`p`),iO(202,`Se nenhuma função for passada para o evento ou a barra de progresso estiver com o status `),jc(203,`code`),iO(204,`PoProgressStatus.Success`),wg(),iO(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),wg()(),jc(206,`blockquote`)(207,`p`),iO(208,`Não compatível com `),jc(209,`code`),iO(210,`p-shape="circle"`),wg(),iO(211,`.`),wg()()()(),jc(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),iO(216,` p-custom-action`),nu(217,`br`),wg()()(),jc(218,`td`,18)(219,`code`,25),iO(220,`PoProgressAction`),wg()(),jc(221,`td`,20),iO(222,`-`),wg(),jc(223,`td`,21)(224,`em`)(225,`strong`),iO(226,`(opcional)`),wg()(),jc(227,`p`),iO(228,`Permite definir uma ação personalizada no componente `),jc(229,`code`),iO(230,`po-progress`),wg(),iO(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),jc(232,`strong`),iO(233,`PoProgressAction`),wg(),iO(234,`, possibilitando configurar:`),wg(),jc(235,`ul`)(236,`li`)(237,`strong`)(238,`code`),iO(239,`label`),wg()(),iO(240,`: Texto exibido no botão (opcional).`),wg(),jc(241,`li`)(242,`strong`)(243,`code`),iO(244,`icon`),wg()(),iO(245,`: Ícone exibido no botão (opcional).`),wg(),jc(246,`li`)(247,`strong`)(248,`code`),iO(249,`type`),wg()(),iO(250,`: Tipo do botão (`),jc(251,`code`),iO(252,`default`),wg(),iO(253,` ou `),jc(254,`code`),iO(255,`danger`),wg(),iO(256,`) para indicar a intenção da ação (opcional).`),wg(),jc(257,`li`)(258,`strong`)(259,`code`),iO(260,`disabled`),wg()(),iO(261,`: Indica se o botão deve estar desabilitado (opcional).`),wg(),jc(262,`li`)(263,`strong`)(264,`code`),iO(265,`visible`),wg()(),iO(266,`: Determina se o botão será exibido. Pode ser um valor booleano ou uma função que retorna um booleano (opcional).`),wg()(),jc(267,`blockquote`)(268,`p`),iO(269,`Não compatível com `),jc(270,`code`),iO(271,`p-shape="circle"`),wg(),iO(272,`.`),wg()()()(),jc(273,`tr`,14)(274,`td`,15)(275,`div`,22)(276,`span`,23),iO(277,` (p-custom-action-click)`),nu(278,`br`),wg()()(),jc(279,`td`,18)(280,`code`,24),iO(281,`EventEmitter`),wg()(),jc(282,`td`,20),iO(283,`-`),wg(),jc(284,`td`,21)(285,`em`)(286,`strong`),iO(287,`(opcional)`),wg()(),jc(288,`p`),iO(289,`Evento emitido quando o botão definido em `),jc(290,`code`),iO(291,`p-custom-action`),wg(),iO(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),wg(),jc(293,`blockquote`)(294,`p`),iO(295,`Não compatível com `),jc(296,`code`),iO(297,`p-shape="circle"`),wg(),iO(298,`.`),wg()()()(),jc(299,`tr`,14)(300,`td`,15)(301,`div`,16)(302,`span`,17),iO(303,` p-disabled-cancel`),nu(304,`br`),wg()()(),jc(305,`td`,18)(306,`code`,26),iO(307,`boolean`),wg()(),jc(308,`td`,20)(309,`p`)(310,`code`),iO(311,`false`),wg()()(),jc(312,`td`,21)(313,`em`)(314,`strong`),iO(315,`(opcional)`),wg()(),jc(316,`p`),iO(317,`Desabilita botão de cancelamento na parte inferior da barra de progresso.`),wg(),jc(318,`blockquote`)(319,`p`),iO(320,`Se nenhuma função for passada para o evento `),jc(321,`code`),iO(322,`(p-cancel)`),wg(),iO(323,` ou a barra de progresso estiver com o status `),jc(324,`code`),iO(325,`PoProgressStatus.Success`),wg(),iO(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),wg()(),jc(327,`blockquote`)(328,`p`),iO(329,`Não compatível com `),jc(330,`code`),iO(331,`p-shape="circle"`),wg(),iO(332,`.`),wg()()()(),jc(333,`tr`,14)(334,`td`,15)(335,`div`,16)(336,`span`,17),iO(337,` p-indeterminate`),nu(338,`br`),wg()()(),jc(339,`td`,18)(340,`code`,26),iO(341,`boolean`),wg()(),jc(342,`td`,20)(343,`p`)(344,`code`),iO(345,`false`),wg()()(),jc(346,`td`,21)(347,`em`)(348,`strong`),iO(349,`(opcional)`),wg()(),jc(350,`p`),iO(351,`Habilita o modo indeterminado na barra de progresso, que mostra uma animação fixa sem um valor estabelecido.`),wg(),jc(352,`p`),iO(353,`Esta opção pode ser utilizada quando não souber quanto tempo levará para que um processo seja concluído.`),wg(),jc(354,`blockquote`)(355,`p`),iO(356,`Caso esta propriedade e a `),jc(357,`code`),iO(358,`p-value`),wg(),iO(359,` seja habilitada, a propriedade `),jc(360,`code`),iO(361,`p-value`),wg(),iO(362,` será ignorada.`),wg()()()(),jc(363,`tr`,14)(364,`td`,15)(365,`div`,16)(366,`span`,17),iO(367,` p-info`),nu(368,`br`),wg()()(),jc(369,`td`,18)(370,`code`,19),iO(371,`string`),wg()(),jc(372,`td`,20),iO(373,`-`),wg(),jc(374,`td`,21)(375,`em`)(376,`strong`),iO(377,`(opcional)`),wg()(),jc(378,`p`),iO(379,`Informação adicional que aparecerá abaixo da barra de progresso ao lado direito.`),wg(),jc(380,`blockquote`)(381,`p`),iO(382,`Não compatível com `),jc(383,`code`),iO(384,`p-shape="circle"`),wg(),iO(385,`.`),wg()()()(),jc(386,`tr`,14)(387,`td`,15)(388,`div`,16)(389,`span`,17),iO(390,` p-info-icon`),nu(391,`br`),wg()()(),jc(392,`td`,18)(393,`code`,19),iO(394,`string `),wg(),jc(395,`code`,27),iO(396,` TemplateRef<void>`),wg()(),jc(397,`td`,20),iO(398,`-`),wg(),jc(399,`td`,21)(400,`em`)(401,`strong`),iO(402,`(opcional)`),wg()(),jc(403,`p`),iO(404,`Ícone que aparecerá ao lado do texto da propriedade `),jc(405,`code`),iO(406,`p-info`),wg(),iO(407,`.`),wg(),jc(408,`p`),iO(409,`Exemplo: `),jc(410,`code`),iO(411,`an an-check`),wg(),iO(412,`.`),wg(),jc(413,`blockquote`)(414,`p`),iO(415,`Não compatível com `),jc(416,`code`),iO(417,`p-shape="circle"`),wg(),iO(418,`.`),wg()()()(),jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),iO(423,` p-radius`),nu(424,`br`),wg()()(),jc(425,`td`,18)(426,`code`,28),iO(427,`number`),wg()(),jc(428,`td`,20)(429,`p`)(430,`code`),iO(431,`45`),wg(),iO(432,` (automático)`),wg()(),jc(433,`td`,21)(434,`em`)(435,`strong`),iO(436,`(opcional)`),wg()(),jc(437,`p`),iO(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),jc(439,`code`),iO(440,`p-shape="circle"`),wg(),iO(441,`.`),wg(),jc(442,`blockquote`)(443,`p`),iO(444,`O valor mínimo aceito é `),jc(445,`strong`),iO(446,`24`),wg(),iO(447,`.`),wg()(),jc(448,`blockquote`)(449,`p`),iO(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),jc(451,`strong`),iO(452,`45`),wg(),iO(453,` será utilizado.`),wg()(),jc(454,`blockquote`)(455,`p`),iO(456,`Não compatível com `),jc(457,`code`),iO(458,`p-shape="bar"`),wg(),iO(459,`.`),wg()()()(),jc(460,`tr`,14)(461,`td`,15)(462,`div`,22)(463,`span`,23),iO(464,` (p-retry)`),nu(465,`br`),wg()()(),jc(466,`td`,18)(467,`code`,24),iO(468,`EventEmitter`),wg()(),jc(469,`td`,20),iO(470,`-`),wg(),jc(471,`td`,21)(472,`em`)(473,`strong`),iO(474,`(opcional)`),wg()(),jc(475,`p`),iO(476,`Evento que será disparado ao clicar no ícone de tentar novamente na parte inferior da barra de progresso.`),wg(),jc(477,`blockquote`)(478,`p`),iO(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),jc(480,`code`),iO(481,`PoProgressStatus.Error`),wg(),iO(482,`.`),wg()(),jc(483,`blockquote`)(484,`p`),iO(485,`Não compatível com `),jc(486,`code`),iO(487,`p-shape="circle"`),wg(),iO(488,`.`),wg()()()(),jc(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),iO(493,` p-shape`),nu(494,`br`),wg()()(),jc(495,`td`,18)(496,`code`,19),iO(497,`string`),wg()(),jc(498,`td`,20)(499,`p`)(500,`code`),iO(501,`bar`),wg()()(),jc(502,`td`,21)(503,`em`)(504,`strong`),iO(505,`(opcional)`),wg()(),jc(506,`p`),iO(507,`Define o formato visual do componente de progresso.`),wg(),jc(508,`p`),iO(509,`Valores válidos:`),wg(),jc(510,`ul`)(511,`li`)(512,`code`),iO(513,`bar`),wg(),iO(514,`: exibe o progresso em formato de barra.`),wg(),jc(515,`li`)(516,`code`),iO(517,`circle`),wg(),iO(518,`: exibe o progresso em formato circular.`),wg()()()(),jc(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),iO(523,` p-show-percentage`),nu(524,`br`),wg()()(),jc(525,`td`,18)(526,`code`,26),iO(527,`boolean`),wg()(),jc(528,`td`,20)(529,`p`)(530,`code`),iO(531,`false`),wg()()(),jc(532,`td`,21)(533,`em`)(534,`strong`),iO(535,`(opcional)`),wg()(),jc(536,`p`),iO(537,`Ativa a exibição da porcentagem atual da barra de progresso.`),wg(),jc(538,`blockquote`)(539,`p`),iO(540,`Se utilizada no `),jc(541,`code`),iO(542,`p-shape="circle"`),wg(),iO(543,` e o status estiver como `),jc(544,`code`),iO(545,`error`),wg(),iO(546,`, a porcentagem não será exibida.`),wg()()()(),jc(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),iO(551,` p-size`),nu(552,`br`),wg()()(),jc(553,`td`,18)(554,`code`,19),iO(555,`string`),wg()(),jc(556,`td`,20)(557,`p`)(558,`code`),iO(559,`large`),wg()()(),jc(560,`td`,21)(561,`em`)(562,`strong`),iO(563,`(opcional)`),wg()(),jc(564,`p`),iO(565,`Define a expessura da barra de progresso.`),wg(),jc(566,`p`),iO(567,`Valores válidos:`),wg(),jc(568,`ul`)(569,`li`),iO(570,`medium`),wg(),jc(571,`li`),iO(572,`large`),wg()()()(),jc(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),iO(577,` p-size-actions`),nu(578,`br`),wg()()(),jc(579,`td`,18)(580,`code`,19),iO(581,`string`),wg()(),jc(582,`td`,20)(583,`p`)(584,`code`),iO(585,`medium`),wg()()(),jc(586,`td`,21)(587,`em`)(588,`strong`),iO(589,`(opcional)`),wg()(),jc(590,`p`),iO(591,`Define o tamanho das ações no componente com excessão da barra de progresso que pode ser ajustada através da propriedade `),jc(592,`code`),iO(593,`p-size`),wg(),iO(594,`:`),wg(),jc(595,`ul`)(596,`li`)(597,`code`),iO(598,`small`),wg(),iO(599,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(600,`li`)(601,`code`),iO(602,`medium`),wg(),iO(603,`: aplica a medida medium de cada componente.`),wg()(),jc(604,`blockquote`)(605,`p`),iO(606,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(607,`code`),iO(608,`medium`),wg(),iO(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(610,`a`,29),iO(611,`po-theme`),wg(),iO(612,`.`),wg()(),jc(613,`blockquote`)(614,`p`),iO(615,`Não compatível com `),jc(616,`code`),iO(617,`p-shape="circle"`),wg(),iO(618,`.`),wg()()()(),jc(619,`tr`,14)(620,`td`,15)(621,`div`,16)(622,`span`,17),iO(623,` p-status`),nu(624,`br`),wg()()(),jc(625,`td`,18)(626,`code`,30),iO(627,`PoProgressStatus`),wg()(),jc(628,`td`,20)(629,`p`)(630,`code`),iO(631,`PoProgressStatus.Default`),wg()()(),jc(632,`td`,21)(633,`em`)(634,`strong`),iO(635,`(opcional)`),wg()(),jc(636,`p`),iO(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),wg()()(),jc(638,`tr`,14)(639,`td`,15)(640,`div`,16)(641,`span`,17),iO(642,` p-text`),nu(643,`br`),wg()()(),jc(644,`td`,18)(645,`code`,19),iO(646,`string`),wg()(),jc(647,`td`,20),iO(648,`-`),wg(),jc(649,`td`,21)(650,`em`)(651,`strong`),iO(652,`(opcional)`),wg()(),jc(653,`p`),iO(654,`Texto principal que aparecerá abaixo da barra de progresso no lado esquerdo.`),wg(),jc(655,`blockquote`)(656,`p`),iO(657,`Não compatível com `),jc(658,`code`),iO(659,`p-shape="circle"`),wg(),iO(660,`.`),wg()()()(),jc(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),iO(665,` p-value`),nu(666,`br`),wg()()(),jc(667,`td`,18)(668,`code`,28),iO(669,`number`),wg()(),jc(670,`td`,20)(671,`p`)(672,`code`),iO(673,`0`),wg()()(),jc(674,`td`,21)(675,`em`)(676,`strong`),iO(677,`(opcional)`),wg()(),jc(678,`p`),iO(679,`Valor que representará o progresso.`),wg(),jc(680,`blockquote`)(681,`p`),iO(682,`Os valores aceitos são números inteiros de `),jc(683,`code`),iO(684,`0`),wg(),iO(685,` à `),jc(686,`code`),iO(687,`100`),wg(),iO(688,`.`),wg()()()()(),jc(689,`h3`),iO(690,`Interfaces`),wg(),jc(691,`h4`,31)(692,`code`,5),iO(693,`PoProgressAction`),wg()(),jc(694,`div`,2)(695,`p`),iO(696,`Interface para as ações dos componentes po-progress e po-upload.`),wg()(),jc(697,`h4`,10),iO(698,`Propriedades`),wg(),jc(699,`table`,11)(700,`tr`,12)(701,`th`,13),iO(702,`Nome`),wg(),jc(703,`th`,13),iO(704,`Tipo`),wg(),jc(705,`th`,13),iO(706,`Descrição`),wg()(),jc(707,`tr`,14)(708,`td`,15)(709,`div`,16)(710,`span`,17),iO(711,` disabled`),nu(712,`br`),wg()()(),jc(713,`td`,18)(714,`code`,26),iO(715,`boolean `),wg(),jc(716,`code`,32),iO(717,` Function`),wg()(),jc(718,`td`,21)(719,`em`)(720,`strong`),iO(721,`(opcional)`),wg()(),jc(722,`p`),iO(723,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),wg(),jc(724,`p`),iO(725,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),wg()()(),jc(726,`tr`,14)(727,`td`,15)(728,`div`,16)(729,`span`,17),iO(730,` icon`),nu(731,`br`),wg()()(),jc(732,`td`,18)(733,`code`,19),iO(734,`string `),wg(),jc(735,`code`,27),iO(736,` TemplateRef<void>`),wg()(),jc(737,`td`,21)(738,`em`)(739,`strong`),iO(740,`(opcional)`),wg()(),jc(741,`p`),iO(742,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),wg(),jc(743,`p`),iO(744,`É possível usar qualquer um dos ícones da `),jc(745,`a`,33),iO(746,`Biblioteca de ícones`),wg(),iO(747,`. conforme exemplo abaixo:`),wg(),jc(748,`pre`)(749,`code`),iO(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),wg()(),jc(751,`p`),iO(752,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),wg(),jc(753,`pre`)(754,`code`),iO(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),wg()(),jc(756,`p`),iO(757,`Outra opção seria a customização do ícone através do `),jc(758,`code`),iO(759,`TemplateRef`),wg(),iO(760,`, conforme exemplo abaixo:
component.html:`),wg(),jc(761,`pre`)(762,`code`),iO(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),wg()(),jc(764,`p`),iO(765,`component.ts:`),wg(),jc(766,`pre`)(767,`code`),iO(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),wg()()()(),jc(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),iO(773,` label`),nu(774,`br`),wg()()(),jc(775,`td`,18)(776,`code`,19),iO(777,`string`),wg()(),jc(778,`td`,21)(779,`em`)(780,`strong`),iO(781,`(opcional)`),wg()(),jc(782,`p`),iO(783,`Rótulo da ação.`),wg()()(),jc(784,`tr`,14)(785,`td`,15)(786,`div`,16)(787,`span`,17),iO(788,` type`),nu(789,`br`),wg()()(),jc(790,`td`,18)(791,`code`,19),iO(792,`string`),wg()(),jc(793,`td`,21)(794,`em`)(795,`strong`),iO(796,`(opcional)`),wg()(),jc(797,`p`),iO(798,`Define a cor do item, sendo `),jc(799,`code`),iO(800,`default`),wg(),iO(801,` o padrão.`),wg(),jc(802,`p`),iO(803,`Valores válidos:`),wg(),jc(804,`ul`)(805,`li`)(806,`code`),iO(807,`default`),wg()(),jc(808,`li`)(809,`code`),iO(810,`danger`),wg(),iO(811,` - indicado para ações exclusivas (excluir, sair).`),wg()()()(),jc(812,`tr`,14)(813,`td`,15)(814,`div`,16)(815,`span`,17),iO(816,` visible`),nu(817,`br`),wg()()(),jc(818,`td`,18)(819,`code`,26),iO(820,`boolean `),wg(),jc(821,`code`,32),iO(822,` Function`),wg()(),jc(823,`td`,21)(824,`em`)(825,`strong`),iO(826,`(opcional)`),wg()(),jc(827,`p`),iO(828,`Define se a ação será visível.`),wg(),jc(829,`blockquote`)(830,`p`),iO(831,`Caso o valor não seja especificado a ação será visível.`),wg()(),jc(832,`p`),iO(833,`Opções para tornar a ação visível ou não:`),wg(),jc(834,`ul`)(835,`li`)(836,`p`),iO(837,`Função que deve retornar um booleano.`),wg()(),jc(838,`li`)(839,`p`),iO(840,`Informar diretamente um valor booleano.`),wg()()()()()(),jc(841,`h3`),iO(842,`Enums`),wg(),jc(843,`h4`,4)(844,`code`,5),iO(845,`PoProgressShape`),wg()(),jc(846,`div`,2)(847,`p`),iO(848,`Enum `),jc(849,`code`),iO(850,`PoProgressShape`),wg(),iO(851,` para definir o formato visual do componente de progresso.`),wg()(),jc(852,`h4`,10),iO(853,`Propriedades`),wg(),jc(854,`table`,11)(855,`tr`,12)(856,`th`,13),iO(857,`Nome`),wg(),jc(858,`th`,13),iO(859,`Descrição`),wg()(),jc(860,`tr`,14)(861,`td`,15)(862,`div`,16)(863,`span`,17),iO(864,` bar`),nu(865,`br`),wg()()(),jc(866,`td`,21)(867,`p`),iO(868,`Formato barra de progresso (padrão).`),wg()()(),jc(869,`tr`,14)(870,`td`,15)(871,`div`,16)(872,`span`,17),iO(873,` circle`),nu(874,`br`),wg()()(),jc(875,`td`,21)(876,`p`),iO(877,`Formato circular de progresso.`),wg()()()(),jc(878,`h4`,4)(879,`code`,5),iO(880,`PoProgressSize`),wg()(),jc(881,`div`,2)(882,`p`),iO(883,`Enum para configurar a expessura (`),jc(884,`code`),iO(885,`p-size`),wg(),iO(886,`) da barra de progresso do componente.`),wg()(),jc(887,`h4`,10),iO(888,`Propriedades`),wg(),jc(889,`table`,11)(890,`tr`,12)(891,`th`,13),iO(892,`Nome`),wg(),jc(893,`th`,13),iO(894,`Descrição`),wg()(),jc(895,`tr`,14)(896,`td`,15)(897,`div`,16)(898,`span`,17),iO(899,` medium`),nu(900,`br`),wg()()(),jc(901,`td`,21)(902,`p`),iO(903,`Tamanho médio com 4px.`),wg()()(),jc(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),iO(908,` large`),nu(909,`br`),wg()()(),jc(910,`td`,21)(911,`p`),iO(912,`Tamanho grande com 8px.`),wg()()()(),jc(913,`h4`,4)(914,`code`,5),iO(915,`PoProgressStatus`),wg()(),jc(916,`div`,2)(917,`p`),iO(918,`Enum `),jc(919,`code`),iO(920,`PoProgressStatus`),wg(),iO(921,` para os status de barra de progresso.`),wg()(),jc(922,`h4`,10),iO(923,`Propriedades`),wg(),jc(924,`table`,11)(925,`tr`,12)(926,`th`,13),iO(927,`Nome`),wg(),jc(928,`th`,13),iO(929,`Descrição`),wg()(),jc(930,`tr`,14)(931,`td`,15)(932,`div`,16)(933,`span`,17),iO(934,` Default`),nu(935,`br`),wg()()(),jc(936,`td`,21)(937,`p`),iO(938,`Define o status `),jc(939,`code`),iO(940,`default`),wg(),iO(941,` para a barra de progresso.`),wg()()(),jc(942,`tr`,14)(943,`td`,15)(944,`div`,16)(945,`span`,17),iO(946,` Error`),nu(947,`br`),wg()()(),jc(948,`td`,21)(949,`p`),iO(950,`Define o status de `),jc(951,`code`),iO(952,`error`),wg(),iO(953,` para a barra de progresso.`),wg()()(),jc(954,`tr`,14)(955,`td`,15)(956,`div`,16)(957,`span`,17),iO(958,` Success`),nu(959,`br`),wg()()(),jc(960,`td`,21)(961,`p`),iO(962,`Define o status de `),jc(963,`code`),iO(964,`success`),wg(),iO(965,` para a barra de progresso.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Progress`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-progress-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-progress-basic-view`)(6,`sample-po-progress-labs-view`)(7,`sample-po-progress-publication-view`)(8,`sample-po-progress-circle-view`),wg()()()),l&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,Se,ve,fe,Pe,we],encapsulation:2,changeDetection:1})}return o})()}];var De=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(Ge),C1]})}return o})();var wt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,De]})}return o})();export{wt as DocPoProgressModule};