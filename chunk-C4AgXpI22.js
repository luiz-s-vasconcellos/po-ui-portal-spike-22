import{$r as Vx,$t as gs,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,Pr as Qk,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Z as K_e,Zr as Vk,_ as $8e,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,cn as lU,ea as p0,ga as w,kt as Wy,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sn as l5,sr as Jy,ti as Wk,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,wn as sf,yr as Mx}from"./main-NT5YGKBQ.js";var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-basic`]],standalone:!1,decls:8,vars:3,consts:[[`p-title`,`Bar`],[3,`p-value`],[1,`po-mt-1`],[`p-title`,`Circle`,1,`po-mt-2`],[`p-shape`,`circle`,3,`p-value`,`p-radius`]],template:function(l,i){l&1&&(Ml(0,`div`)(1,`po-widget`,0),ql(2,`po-progress`,1),lg()(),Ml(3,`div`,2)(4,`po-widget`,3),ql(5,`po-progress`,4),Ml(6,`div`,2),mN(7,`Para adequação do layout, o valor mínimo de p-radius é 24px.`),lg()()()),l&2&&(Up(2),cw(`p-value`,25),Up(3),cw(`p-value`,25)(`p-radius`,24))},dependencies:[K_e,$8e],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Progress Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-progress-basic/sample-po-progress-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-progress-basic/sample-po-progress-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-progress-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Me,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return o})();function Oe(o,Q){if(o&1&&(Ml(0,`po-widget`,3),ql(1,`po-info`,15),lg()),o&2){let r=zx();Up(),cw(`p-value`,r.event)}}function Ae(o,Q){if(o&1&&(Ml(0,`div`)(1,`po-widget`,21)(2,`form`,22),ql(3,`po-input`,23),f0(),ql(4,`po-select`,24),f0(),ql(5,`po-select`,25),f0(),ql(6,`po-switch`,26),f0(),ql(7,`po-switch`,27),f0(),lg()()()),o&2){let r=zx(2);Up(2),cw(`formGroup`,r.actionForm),Up(),p0(),Up(),cw(`p-options`,r.iconOptions),p0(),Up(),cw(`p-options`,r.typeOptions),p0(),Up(),p0(),Up(),p0()}}function ze(o,Q){if(o&1){let r=Vx();Ml(0,`po-select`,16),Mw(`ngModelChange`,function(i){Qy(r);let m=zx();return yN(m.infoIcon,i)||(m.infoIcon=i),Jy(i)}),lg(),f0(),Ml(1,`po-input`,17),Mw(`ngModelChange`,function(i){Qy(r);let m=zx();return yN(m.text,i)||(m.text=i),Jy(i)}),lg(),f0(),Ml(2,`po-input`,18),Mw(`ngModelChange`,function(i){Qy(r);let m=zx();return yN(m.info,i)||(m.info=i),Jy(i)}),lg(),f0(),Ml(3,`po-radio-group`,19),Mw(`ngModelChange`,function(i){Qy(r);let m=zx();return yN(m.sizeActions,i)||(m.sizeActions=i),Jy(i)}),lg(),f0(),Ml(4,`po-switch`,20),Mw(`ngModelChange`,function(i){Qy(r);let m=zx();return yN(m.showAction,i)||(m.showAction=i),Jy(i)}),lg(),f0(),Tx(5,Ae,8,3,`div`)}if(o&2){let r=zx();Tw(`ngModel`,r.infoIcon),cw(`p-options`,r.infoIconsOptions),p0(),Up(),Tw(`ngModel`,r.text),p0(),Up(),Tw(`ngModel`,r.info),p0(),Up(),Tw(`ngModel`,r.sizeActions),cw(`p-options`,r.sizeActionsOptions),p0(),Up(),Tw(`ngModel`,r.showAction),p0(),Up(),Mx(r.showAction?5:-1)}}function Be(o,Q){if(o&1){let r=Vx();Ml(0,`po-number`,28),Mw(`ngModelChange`,function(i){Qy(r);let m=zx();return yN(m.radius,i)||(m.radius=i),Jy(i)}),lg(),f0()}if(o&2)Tw(`ngModel`,zx().radius),p0()}var he=(()=>{class o{fb=f(Qk);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=gs.Default;size=Wy.large;shape=sf.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:`an an-warning-circle`,value:`an an-warning-circle`},{label:`an an-check`,value:`an an-check`},{label:`an an-user`,value:`an an-user`},{label:`an an-cloud-slash`,value:`an an-cloud-slash`}];statusOptions=[{label:`Default`,value:gs.Default},{label:`Success`,value:gs.Success},{label:`Error`,value:gs.Error}];sizeOptions=[{label:`Medium`,value:Wy.medium},{label:`Large`,value:Wy.large}];shapeOptions=[{label:`Bar`,value:sf.bar},{label:`Circle`,value:sf.circle}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Visible`,value:`visible`}];allPropertiesOptions=[{value:`disabledCancel`,label:`Disabled cancel`},{value:`indeterminate`,label:`Indeterminate`},{value:`showPercentage`,label:`Show percentage`}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm()}onShapeChange(r){this.restore(r),r===`circle`?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!==`disabledCancel`):this.propertiesOptions=[...this.allPropertiesOptions]}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r)})}updateAction(r){this.action=r}onEvent(r){this.event=r}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=gs.Default,this.text=void 0,this.value=void 0,this.size=Wy.large,this.radius=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.showAction=!1,this.properties=[],this.sizeActions=`medium`,r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=sf.bar)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-labs`]],standalone:!1,decls:17,vars:25,consts:[[`progressBarPropertiesForm`,`ngForm`],[1,`sample-progress-grid`],[3,`p-custom-action-click`,`p-cancel`,`p-retry`,`p-disabled-cancel`,`p-indeterminate`,`p-show-percentage`,`p-info`,`p-info-icon`,`p-status`,`p-text`,`p-value`,`p-size`,`p-shape`,`p-radius`,`p-size-actions`,`p-custom-action`],[`p-title`,`Events`],[`p-title`,`Properties`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`],[`name`,`shape`,`p-label`,`Shape`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`,`po-mt-2`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-max`,`100`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`Size`,`p-label`,`Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Status`,`p-label`,`Status`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[3,`p-value`],[`name`,`infoIcon`,`p-label`,`Info icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`text`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`info`,`p-clean`,``,`p-label`,`Info`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`sizeActions`,`p-columns`,`4`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-mb-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`addAction`,`p-label`,`Add Action Button`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`]],template:function(l,i){if(l&1){let m=Vx();Ml(0,`div`,1)(1,`po-progress`,2),ht(`p-custom-action-click`,function(){return i.onEvent(`p-custom-action-click`)})(`p-cancel`,function(){return i.onEvent(`p-cancel`)})(`p-retry`,function(){return i.onEvent(`p-retry`)}),lg(),Tx(2,Oe,2,1,`po-widget`,3),Ml(3,`po-widget`,4)(4,`form`,null,0)(6,`div`,5)(7,`po-radio-group`,6),Mw(`ngModelChange`,function(d){return Qy(m),yN(i.shape,d)||(i.shape=d),Jy(d)}),ht(`p-change`,function(d){return i.onShapeChange(d)}),lg(),f0(),lg(),Ml(8,`div`,7)(9,`po-number`,8),Mw(`ngModelChange`,function(d){return Qy(m),yN(i.value,d)||(i.value=d),Jy(d)}),lg(),f0(),Ml(10,`po-select`,9),Mw(`ngModelChange`,function(d){return Qy(m),yN(i.size,d)||(i.size=d),Jy(d)}),lg(),f0(),Ml(11,`po-select`,10),Mw(`ngModelChange`,function(d){return Qy(m),yN(i.status,d)||(i.status=d),Jy(d)}),lg(),f0(),Tx(12,ze,6,8),Tx(13,Be,1,1,`po-number`,11),Ml(14,`po-checkbox-group`,12),Mw(`ngModelChange`,function(d){return Qy(m),yN(i.properties,d)||(i.properties=d),Jy(d)}),lg(),f0(),lg()()(),Ml(15,`div`,13)(16,`po-button`,14),ht(`p-click`,function(){return i.restore()}),lg()()()}l&2&&(Up(),cw(`p-disabled-cancel`,i.properties.includes(`disabledCancel`))(`p-indeterminate`,i.properties.includes(`indeterminate`))(`p-show-percentage`,i.properties.includes(`showPercentage`))(`p-info`,i.info)(`p-info-icon`,i.infoIcon)(`p-status`,i.status)(`p-text`,i.text)(`p-value`,i.value)(`p-size`,i.size)(`p-shape`,i.shape)(`p-radius`,i.radius)(`p-size-actions`,i.sizeActions)(`p-custom-action`,i.action),Up(),Mx(i.shape===`bar`?2:-1),Up(5),Tw(`ngModel`,i.shape),cw(`p-options`,i.shapeOptions),p0(),Up(2),Tw(`ngModel`,i.value),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0(),Up(),Tw(`ngModel`,i.status),cw(`p-options`,i.statusOptions),p0(),Up(),Mx(i.shape===`bar`?12:-1),Up(),Mx(i.shape===`circle`?13:-1),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,qk,Wk,Zt,G4,lU,xbe,q0e,Tbe,J4,kbe,K_e,$8e],styles:[`.sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}`],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Progress Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-progress-labs/sample-po-progress-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="sample-progress-grid">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-progress-labs/sample-po-progress-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-progress-labs/sample-po-progress-labs.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-progress-labs`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++},20)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-publication`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Edit publication`],[1,`po-row`],[1,`po-md-9`,3,`ngModelChange`,`ngModel`],[1,`po-md-9`],[`p-text`,`Loading update`,1,`po-md-9`,3,`p-value`,`p-show-percentage`],[`p-label`,`Update publication`,3,`p-click`,`p-disabled`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`div`,1)(2,`po-rich-text`,2),Mw(`ngModelChange`,function(v){return yN(i.publication,v)||(i.publication=v),v}),lg(),f0(),ql(3,`po-divider`,3)(4,`po-progress`,4),lg(),Ml(5,`div`,1)(6,`po-button`,5),ht(`p-click`,function(){return i.updatePublication()}),lg()()()),l&2&&(Up(2),Tw(`ngModel`,i.publication),p0(),Up(2),cw(`p-value`,i.progressBarValue)(`p-show-percentage`,!0),Up(2),cw(`p-disabled`,i.buttonDisabled))},dependencies:[wY,Vk,Zt,nb,l5,V8e,K_e],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-publication-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Progress - Publication`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-progress-publication/sample-po-progress-publication.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Edit publication">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-progress-publication/sample-po-progress-publication.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-progress-publication`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,xe],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-circle`]],standalone:!1,decls:99,vars:2,consts:[[1,`container`],[`p-title`,`Regra de Adequação de Layout`],[1,`line-height`],[1,`po-font-text-large-bold`],[1,`po-text-large`],[`p-title`,`Exemplo Básico - Radius Mínimo (24px)`],[1,`po-row`,`po-align-items-center`],[1,`po-md-6`,`po-lg-4`,`po-center`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`24`,3,`p-value`],[1,`po-md-6`,`po-lg-8`],[1,`po-font-text`],[`p-title`,`Com Radius Maior (60px)`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`60`,3,`p-value`],[`p-title`,`Com Status Error (Radius 24px)`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`error`,`p-radius`,`24`],[`p-title`,`Modo Indeterminado`],[`p-shape`,`circle`,`p-indeterminate`,`true`,`p-radius`,`30`],[`p-title`,`Comparação Visual - Diferentes Status`],[1,`po-row`,`row`],[1,`po-md-3`,`po-center`,`items`],[1,`po-font-text-large-bold`,`po-mb-1`],[`p-shape`,`circle`,`p-value`,`100`,`p-status`,`success`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`warning`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`0`,`p-status`,`error`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`75`,`p-show-percentage`,`true`,`p-radius`,`25`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`p`,3),mN(4,`📏 Para adequação do layout, o valor mínimo de p-radius é 24px.`),lg(),Ml(5,`p`,4),mN(6,` O raio mínimo de 24px é necessário para evitar colisão entre o conteúdo central (porcentagem ou ícone de erro) e a borda do círculo. Valores menores podem causar sobreposição visual dos elementos. `),lg()()(),Ml(7,`po-widget`,5)(8,`div`,6)(9,`div`,7),ql(10,`po-progress`,8),lg(),Ml(11,`div`,9)(12,`p`)(13,`strong`),mN(14,`Configuração:`),lg()(),Ml(15,`ul`)(16,`li`),mN(17,`p-shape="circle"`),lg(),Ml(18,`li`),mN(19,`p-value="65"`),lg(),Ml(20,`li`),mN(21,`p-show-percentage="true"`),lg(),Ml(22,`li`),mN(23,`p-radius="24" (valor mínimo permitido)`),lg()(),Ml(24,`p`,10),mN(25,`A porcentagem é exibida no centro sem colisão com a borda do círculo.`),lg()()()(),Ml(26,`po-widget`,11)(27,`div`,6)(28,`div`,7),ql(29,`po-progress`,12),lg(),Ml(30,`div`,9)(31,`p`)(32,`strong`),mN(33,`Configuração:`),lg()(),Ml(34,`ul`)(35,`li`),mN(36,`p-shape="circle"`),lg(),Ml(37,`li`),mN(38,`p-value="65"`),lg(),Ml(39,`li`),mN(40,`p-show-percentage="true"`),lg(),Ml(41,`li`),mN(42,`p-radius="60" (valor maior)`),lg()(),Ml(43,`p`,10),mN(44,` Maior espaço disponível para o conteúdo central. Recomendado para melhor visualização. `),lg()()()(),Ml(45,`po-widget`,13)(46,`div`,6)(47,`div`,7),ql(48,`po-progress`,14),lg(),Ml(49,`div`,9)(50,`p`)(51,`strong`),mN(52,`Configuração:`),lg()(),Ml(53,`ul`)(54,`li`),mN(55,`p-shape="circle"`),lg(),Ml(56,`li`),mN(57,`p-value="50"`),lg(),Ml(58,`li`),mN(59,`p-status="error"`),lg(),Ml(60,`li`),mN(61,`p-radius="24" (valor mínimo)`),lg()(),Ml(62,`p`,10),mN(63,`Ícone de erro exibido no centro. O radius mínimo de 24px evita sobreposição.`),lg()()()(),Ml(64,`po-widget`,15)(65,`div`,6)(66,`div`,7),ql(67,`po-progress`,16),lg(),Ml(68,`div`,9)(69,`p`)(70,`strong`),mN(71,`Configuração:`),lg()(),Ml(72,`ul`)(73,`li`),mN(74,`p-shape="circle"`),lg(),Ml(75,`li`),mN(76,`p-indeterminate="true"`),lg(),Ml(77,`li`),mN(78,`p-radius="30"`),lg()(),Ml(79,`p`,10),mN(80,`Animação contínua para indicar progresso em andamento.`),lg()()()(),Ml(81,`po-widget`,17)(82,`div`,18)(83,`div`,19)(84,`p`,20),mN(85,`Success`),lg(),ql(86,`po-progress`,21),lg(),Ml(87,`div`,19)(88,`p`,20),mN(89,`Warning`),lg(),ql(90,`po-progress`,22),lg(),Ml(91,`div`,19)(92,`p`,20),mN(93,`Error`),lg(),ql(94,`po-progress`,23),lg(),Ml(95,`div`,19)(96,`p`,20),mN(97,`Default`),lg(),ql(98,`po-progress`,24),lg()()()()),l&2&&(Up(10),cw(`p-value`,i.value),Up(19),cw(`p-value`,i.value))},dependencies:[K_e,$8e],styles:[`.container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}`],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-circle-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Progress Circle`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-progress-circle/sample-po-progress-circle.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="container">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-progress-circle/sample-po-progress-circle.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-progress-circle/sample-po-progress-circle.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.container {
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
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-progress-circle`),lg(),ql(29,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Re,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ce],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-progress-doc`]],standalone:!1,decls:966,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoProgressStatus`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoProgressModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-progress`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoProgressComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa.`),lg(),Ml(18,`p`),mN(19,`Este componente pode ser utilizado no `),Ml(20,`em`),mN(21,`upload`),lg(),mN(22,` de arquivos, uma atualização no sistema ou o processamento de uma imagem.`),lg(),Ml(23,`h4`),mN(24,`Tokens customizáveis`),lg(),Ml(25,`p`),mN(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(27,`blockquote`)(28,`p`),mN(29,`Para maiores informações, acesse o guia `),Ml(30,`a`,6),mN(31,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(32,`.`),lg()(),Ml(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),mN(37,`Propriedade`),lg(),Ml(38,`th`),mN(39,`Descrição`),lg(),Ml(40,`th`),mN(41,`Valor Padrão`),lg()()(),Ml(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),mN(46,`Default Values`),lg()(),ql(47,`td`)(48,`td`),lg(),Ml(49,`tr`)(50,`td`)(51,`code`),mN(52,`--font-family`),lg()(),Ml(53,`td`),mN(54,`Família tipográfica usada`),lg(),Ml(55,`td`)(56,`code`),mN(57,`var(--font-family-theme)`),lg()()(),Ml(58,`tr`)(59,`td`)(60,`code`),mN(61,`--text-color`),lg()(),Ml(62,`td`),mN(63,`Cor do texto`),lg(),Ml(64,`td`)(65,`code`),mN(66,`var(--color-neutral-dark-90)`),lg()()(),Ml(67,`tr`)(68,`td`)(69,`strong`),mN(70,`Error`),lg()(),ql(71,`td`)(72,`td`),lg(),Ml(73,`tr`)(74,`td`)(75,`code`),mN(76,`--text-color-error`),lg()(),Ml(77,`td`),mN(78,`Cor do texto no estado error`),lg(),Ml(79,`td`)(80,`code`),mN(81,`var(--color-feedback-negative-dark)`),lg()()(),Ml(82,`tr`)(83,`td`)(84,`code`),mN(85,`--color-icon-error`),lg()(),Ml(86,`td`),mN(87,`Cor do ícone no estado error`),lg(),Ml(88,`td`)(89,`code`),mN(90,`var(--color-feedback-negative-dark)`),lg()()(),Ml(91,`tr`)(92,`td`)(93,`strong`),mN(94,`po-progress-bar`),lg()(),ql(95,`td`)(96,`td`),lg(),Ml(97,`tr`)(98,`td`)(99,`code`),mN(100,`--background-color-tray`),lg()(),Ml(101,`td`),mN(102,`Cor do background`),lg(),Ml(103,`td`)(104,`code`),mN(105,`var(--color-brand-01-lightest)`),lg()()(),Ml(106,`tr`)(107,`td`)(108,`code`),mN(109,`--background-color-indicator`),lg()(),Ml(110,`td`),mN(111,`Cor do background do indicador`),lg(),Ml(112,`td`)(113,`code`),mN(114,`var(--color-action-default)`),lg()()(),Ml(115,`tr`)(116,`td`)(117,`strong`),mN(118,`po-progress-circle`),lg()(),ql(119,`td`)(120,`td`),lg(),Ml(121,`tr`)(122,`td`)(123,`code`),mN(124,`--background-color-tray`),lg()(),Ml(125,`td`),mN(126,`Cor do background`),lg(),Ml(127,`td`)(128,`code`),mN(129,`var(--color-brand-01-lightest)`),lg()()(),Ml(130,`tr`)(131,`td`)(132,`code`),mN(133,`--background-color-indicator`),lg()(),Ml(134,`td`),mN(135,`Cor do background do indicador`),lg(),Ml(136,`td`)(137,`code`),mN(138,`var(--color-action-default)`),lg()()()()()(),Ml(139,`div`,7)(140,`h4`,8),mN(141,`Seletor`),lg(),Ml(142,`pre`,9),mN(143,`<po-progress
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
`),lg()(),Ml(144,`h4`,10),mN(145,`Propriedades`),lg(),Ml(146,`table`,11)(147,`tr`,12)(148,`th`,13),mN(149,`Nome`),lg(),Ml(150,`th`,13),mN(151,`Tipo`),lg(),Ml(152,`th`,13),mN(153,`Padrão`),lg(),Ml(154,`th`,13),mN(155,`Descrição`),lg()(),Ml(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),mN(160,` p-aria-label`),ql(161,`br`),lg()()(),Ml(162,`td`,18)(163,`code`,19),mN(164,`string`),lg()(),Ml(165,`td`,20),mN(166,`-`),lg(),Ml(167,`td`,21)(168,`em`)(169,`strong`),mN(170,`(opcional)`),lg()(),Ml(171,`p`),mN(172,`Define um nome acessível para o elemento com `),Ml(173,`code`),mN(174,`role="progressbar"`),lg(),mN(175,`.`),lg(),Ml(176,`p`),mN(177,`Quando não informado, o componente utiliza o valor de `),Ml(178,`code`),mN(179,`p-text`),lg(),mN(180,` como alternativa, se disponível.`),lg()()(),Ml(181,`tr`,14)(182,`td`,15)(183,`div`,22)(184,`span`,23),mN(185,` (p-cancel)`),ql(186,`br`),lg()()(),Ml(187,`td`,18)(188,`code`,24),mN(189,`EventEmitter`),lg()(),Ml(190,`td`,20),mN(191,`-`),lg(),Ml(192,`td`,21)(193,`em`)(194,`strong`),mN(195,`(opcional)`),lg()(),Ml(196,`p`),mN(197,`Evento que será disparado ao clicar no ícone de cancelamento ("x") na parte inferior da barra de progresso.`),lg(),Ml(198,`p`),mN(199,`Ao ser disparado, a função receberá como parâmetro o status atual da barra de progresso.`),lg(),Ml(200,`blockquote`)(201,`p`),mN(202,`Se nenhuma função for passada para o evento ou a barra de progresso estiver com o status `),Ml(203,`code`),mN(204,`PoProgressStatus.Success`),lg(),mN(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),lg()(),Ml(206,`blockquote`)(207,`p`),mN(208,`Não compatível com `),Ml(209,`code`),mN(210,`p-shape="circle"`),lg(),mN(211,`.`),lg()()()(),Ml(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),mN(216,` p-custom-action`),ql(217,`br`),lg()()(),Ml(218,`td`,18)(219,`code`,25),mN(220,`PoProgressAction`),lg()(),Ml(221,`td`,20),mN(222,`-`),lg(),Ml(223,`td`,21)(224,`em`)(225,`strong`),mN(226,`(opcional)`),lg()(),Ml(227,`p`),mN(228,`Permite definir uma ação personalizada no componente `),Ml(229,`code`),mN(230,`po-progress`),lg(),mN(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Ml(232,`strong`),mN(233,`PoProgressAction`),lg(),mN(234,`, possibilitando configurar:`),lg(),Ml(235,`ul`)(236,`li`)(237,`strong`)(238,`code`),mN(239,`label`),lg()(),mN(240,`: Texto exibido no botão (opcional).`),lg(),Ml(241,`li`)(242,`strong`)(243,`code`),mN(244,`icon`),lg()(),mN(245,`: Ícone exibido no botão (opcional).`),lg(),Ml(246,`li`)(247,`strong`)(248,`code`),mN(249,`type`),lg()(),mN(250,`: Tipo do botão (`),Ml(251,`code`),mN(252,`default`),lg(),mN(253,` ou `),Ml(254,`code`),mN(255,`danger`),lg(),mN(256,`) para indicar a intenção da ação (opcional).`),lg(),Ml(257,`li`)(258,`strong`)(259,`code`),mN(260,`disabled`),lg()(),mN(261,`: Indica se o botão deve estar desabilitado (opcional).`),lg(),Ml(262,`li`)(263,`strong`)(264,`code`),mN(265,`visible`),lg()(),mN(266,`: Determina se o botão será exibido. Pode ser um valor booleano ou uma função que retorna um booleano (opcional).`),lg()(),Ml(267,`blockquote`)(268,`p`),mN(269,`Não compatível com `),Ml(270,`code`),mN(271,`p-shape="circle"`),lg(),mN(272,`.`),lg()()()(),Ml(273,`tr`,14)(274,`td`,15)(275,`div`,22)(276,`span`,23),mN(277,` (p-custom-action-click)`),ql(278,`br`),lg()()(),Ml(279,`td`,18)(280,`code`,24),mN(281,`EventEmitter`),lg()(),Ml(282,`td`,20),mN(283,`-`),lg(),Ml(284,`td`,21)(285,`em`)(286,`strong`),mN(287,`(opcional)`),lg()(),Ml(288,`p`),mN(289,`Evento emitido quando o botão definido em `),Ml(290,`code`),mN(291,`p-custom-action`),lg(),mN(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),lg(),Ml(293,`blockquote`)(294,`p`),mN(295,`Não compatível com `),Ml(296,`code`),mN(297,`p-shape="circle"`),lg(),mN(298,`.`),lg()()()(),Ml(299,`tr`,14)(300,`td`,15)(301,`div`,16)(302,`span`,17),mN(303,` p-disabled-cancel`),ql(304,`br`),lg()()(),Ml(305,`td`,18)(306,`code`,26),mN(307,`boolean`),lg()(),Ml(308,`td`,20)(309,`p`)(310,`code`),mN(311,`false`),lg()()(),Ml(312,`td`,21)(313,`em`)(314,`strong`),mN(315,`(opcional)`),lg()(),Ml(316,`p`),mN(317,`Desabilita botão de cancelamento na parte inferior da barra de progresso.`),lg(),Ml(318,`blockquote`)(319,`p`),mN(320,`Se nenhuma função for passada para o evento `),Ml(321,`code`),mN(322,`(p-cancel)`),lg(),mN(323,` ou a barra de progresso estiver com o status `),Ml(324,`code`),mN(325,`PoProgressStatus.Success`),lg(),mN(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),lg()(),Ml(327,`blockquote`)(328,`p`),mN(329,`Não compatível com `),Ml(330,`code`),mN(331,`p-shape="circle"`),lg(),mN(332,`.`),lg()()()(),Ml(333,`tr`,14)(334,`td`,15)(335,`div`,16)(336,`span`,17),mN(337,` p-indeterminate`),ql(338,`br`),lg()()(),Ml(339,`td`,18)(340,`code`,26),mN(341,`boolean`),lg()(),Ml(342,`td`,20)(343,`p`)(344,`code`),mN(345,`false`),lg()()(),Ml(346,`td`,21)(347,`em`)(348,`strong`),mN(349,`(opcional)`),lg()(),Ml(350,`p`),mN(351,`Habilita o modo indeterminado na barra de progresso, que mostra uma animação fixa sem um valor estabelecido.`),lg(),Ml(352,`p`),mN(353,`Esta opção pode ser utilizada quando não souber quanto tempo levará para que um processo seja concluído.`),lg(),Ml(354,`blockquote`)(355,`p`),mN(356,`Caso esta propriedade e a `),Ml(357,`code`),mN(358,`p-value`),lg(),mN(359,` seja habilitada, a propriedade `),Ml(360,`code`),mN(361,`p-value`),lg(),mN(362,` será ignorada.`),lg()()()(),Ml(363,`tr`,14)(364,`td`,15)(365,`div`,16)(366,`span`,17),mN(367,` p-info`),ql(368,`br`),lg()()(),Ml(369,`td`,18)(370,`code`,19),mN(371,`string`),lg()(),Ml(372,`td`,20),mN(373,`-`),lg(),Ml(374,`td`,21)(375,`em`)(376,`strong`),mN(377,`(opcional)`),lg()(),Ml(378,`p`),mN(379,`Informação adicional que aparecerá abaixo da barra de progresso ao lado direito.`),lg(),Ml(380,`blockquote`)(381,`p`),mN(382,`Não compatível com `),Ml(383,`code`),mN(384,`p-shape="circle"`),lg(),mN(385,`.`),lg()()()(),Ml(386,`tr`,14)(387,`td`,15)(388,`div`,16)(389,`span`,17),mN(390,` p-info-icon`),ql(391,`br`),lg()()(),Ml(392,`td`,18)(393,`code`,19),mN(394,`string `),lg(),Ml(395,`code`,27),mN(396,` TemplateRef<void>`),lg()(),Ml(397,`td`,20),mN(398,`-`),lg(),Ml(399,`td`,21)(400,`em`)(401,`strong`),mN(402,`(opcional)`),lg()(),Ml(403,`p`),mN(404,`Ícone que aparecerá ao lado do texto da propriedade `),Ml(405,`code`),mN(406,`p-info`),lg(),mN(407,`.`),lg(),Ml(408,`p`),mN(409,`Exemplo: `),Ml(410,`code`),mN(411,`an an-check`),lg(),mN(412,`.`),lg(),Ml(413,`blockquote`)(414,`p`),mN(415,`Não compatível com `),Ml(416,`code`),mN(417,`p-shape="circle"`),lg(),mN(418,`.`),lg()()()(),Ml(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),mN(423,` p-radius`),ql(424,`br`),lg()()(),Ml(425,`td`,18)(426,`code`,28),mN(427,`number`),lg()(),Ml(428,`td`,20)(429,`p`)(430,`code`),mN(431,`45`),lg(),mN(432,` (automático)`),lg()(),Ml(433,`td`,21)(434,`em`)(435,`strong`),mN(436,`(opcional)`),lg()(),Ml(437,`p`),mN(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Ml(439,`code`),mN(440,`p-shape="circle"`),lg(),mN(441,`.`),lg(),Ml(442,`blockquote`)(443,`p`),mN(444,`O valor mínimo aceito é `),Ml(445,`strong`),mN(446,`24`),lg(),mN(447,`.`),lg()(),Ml(448,`blockquote`)(449,`p`),mN(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Ml(451,`strong`),mN(452,`45`),lg(),mN(453,` será utilizado.`),lg()(),Ml(454,`blockquote`)(455,`p`),mN(456,`Não compatível com `),Ml(457,`code`),mN(458,`p-shape="bar"`),lg(),mN(459,`.`),lg()()()(),Ml(460,`tr`,14)(461,`td`,15)(462,`div`,22)(463,`span`,23),mN(464,` (p-retry)`),ql(465,`br`),lg()()(),Ml(466,`td`,18)(467,`code`,24),mN(468,`EventEmitter`),lg()(),Ml(469,`td`,20),mN(470,`-`),lg(),Ml(471,`td`,21)(472,`em`)(473,`strong`),mN(474,`(opcional)`),lg()(),Ml(475,`p`),mN(476,`Evento que será disparado ao clicar no ícone de tentar novamente na parte inferior da barra de progresso.`),lg(),Ml(477,`blockquote`)(478,`p`),mN(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Ml(480,`code`),mN(481,`PoProgressStatus.Error`),lg(),mN(482,`.`),lg()(),Ml(483,`blockquote`)(484,`p`),mN(485,`Não compatível com `),Ml(486,`code`),mN(487,`p-shape="circle"`),lg(),mN(488,`.`),lg()()()(),Ml(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),mN(493,` p-shape`),ql(494,`br`),lg()()(),Ml(495,`td`,18)(496,`code`,19),mN(497,`string`),lg()(),Ml(498,`td`,20)(499,`p`)(500,`code`),mN(501,`bar`),lg()()(),Ml(502,`td`,21)(503,`em`)(504,`strong`),mN(505,`(opcional)`),lg()(),Ml(506,`p`),mN(507,`Define o formato visual do componente de progresso.`),lg(),Ml(508,`p`),mN(509,`Valores válidos:`),lg(),Ml(510,`ul`)(511,`li`)(512,`code`),mN(513,`bar`),lg(),mN(514,`: exibe o progresso em formato de barra.`),lg(),Ml(515,`li`)(516,`code`),mN(517,`circle`),lg(),mN(518,`: exibe o progresso em formato circular.`),lg()()()(),Ml(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),mN(523,` p-show-percentage`),ql(524,`br`),lg()()(),Ml(525,`td`,18)(526,`code`,26),mN(527,`boolean`),lg()(),Ml(528,`td`,20)(529,`p`)(530,`code`),mN(531,`false`),lg()()(),Ml(532,`td`,21)(533,`em`)(534,`strong`),mN(535,`(opcional)`),lg()(),Ml(536,`p`),mN(537,`Ativa a exibição da porcentagem atual da barra de progresso.`),lg(),Ml(538,`blockquote`)(539,`p`),mN(540,`Se utilizada no `),Ml(541,`code`),mN(542,`p-shape="circle"`),lg(),mN(543,` e o status estiver como `),Ml(544,`code`),mN(545,`error`),lg(),mN(546,`, a porcentagem não será exibida.`),lg()()()(),Ml(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),mN(551,` p-size`),ql(552,`br`),lg()()(),Ml(553,`td`,18)(554,`code`,19),mN(555,`string`),lg()(),Ml(556,`td`,20)(557,`p`)(558,`code`),mN(559,`large`),lg()()(),Ml(560,`td`,21)(561,`em`)(562,`strong`),mN(563,`(opcional)`),lg()(),Ml(564,`p`),mN(565,`Define a expessura da barra de progresso.`),lg(),Ml(566,`p`),mN(567,`Valores válidos:`),lg(),Ml(568,`ul`)(569,`li`),mN(570,`medium`),lg(),Ml(571,`li`),mN(572,`large`),lg()()()(),Ml(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),mN(577,` p-size-actions`),ql(578,`br`),lg()()(),Ml(579,`td`,18)(580,`code`,19),mN(581,`string`),lg()(),Ml(582,`td`,20)(583,`p`)(584,`code`),mN(585,`medium`),lg()()(),Ml(586,`td`,21)(587,`em`)(588,`strong`),mN(589,`(opcional)`),lg()(),Ml(590,`p`),mN(591,`Define o tamanho das ações no componente com excessão da barra de progresso que pode ser ajustada através da propriedade `),Ml(592,`code`),mN(593,`p-size`),lg(),mN(594,`:`),lg(),Ml(595,`ul`)(596,`li`)(597,`code`),mN(598,`small`),lg(),mN(599,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(600,`li`)(601,`code`),mN(602,`medium`),lg(),mN(603,`: aplica a medida medium de cada componente.`),lg()(),Ml(604,`blockquote`)(605,`p`),mN(606,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(607,`code`),mN(608,`medium`),lg(),mN(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(610,`a`,29),mN(611,`po-theme`),lg(),mN(612,`.`),lg()(),Ml(613,`blockquote`)(614,`p`),mN(615,`Não compatível com `),Ml(616,`code`),mN(617,`p-shape="circle"`),lg(),mN(618,`.`),lg()()()(),Ml(619,`tr`,14)(620,`td`,15)(621,`div`,16)(622,`span`,17),mN(623,` p-status`),ql(624,`br`),lg()()(),Ml(625,`td`,18)(626,`code`,30),mN(627,`PoProgressStatus`),lg()(),Ml(628,`td`,20)(629,`p`)(630,`code`),mN(631,`PoProgressStatus.Default`),lg()()(),Ml(632,`td`,21)(633,`em`)(634,`strong`),mN(635,`(opcional)`),lg()(),Ml(636,`p`),mN(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),lg()()(),Ml(638,`tr`,14)(639,`td`,15)(640,`div`,16)(641,`span`,17),mN(642,` p-text`),ql(643,`br`),lg()()(),Ml(644,`td`,18)(645,`code`,19),mN(646,`string`),lg()(),Ml(647,`td`,20),mN(648,`-`),lg(),Ml(649,`td`,21)(650,`em`)(651,`strong`),mN(652,`(opcional)`),lg()(),Ml(653,`p`),mN(654,`Texto principal que aparecerá abaixo da barra de progresso no lado esquerdo.`),lg(),Ml(655,`blockquote`)(656,`p`),mN(657,`Não compatível com `),Ml(658,`code`),mN(659,`p-shape="circle"`),lg(),mN(660,`.`),lg()()()(),Ml(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),mN(665,` p-value`),ql(666,`br`),lg()()(),Ml(667,`td`,18)(668,`code`,28),mN(669,`number`),lg()(),Ml(670,`td`,20)(671,`p`)(672,`code`),mN(673,`0`),lg()()(),Ml(674,`td`,21)(675,`em`)(676,`strong`),mN(677,`(opcional)`),lg()(),Ml(678,`p`),mN(679,`Valor que representará o progresso.`),lg(),Ml(680,`blockquote`)(681,`p`),mN(682,`Os valores aceitos são números inteiros de `),Ml(683,`code`),mN(684,`0`),lg(),mN(685,` à `),Ml(686,`code`),mN(687,`100`),lg(),mN(688,`.`),lg()()()()(),Ml(689,`h3`),mN(690,`Interfaces`),lg(),Ml(691,`h4`,31)(692,`code`,5),mN(693,`PoProgressAction`),lg()(),Ml(694,`div`,2)(695,`p`),mN(696,`Interface para as ações dos componentes po-progress e po-upload.`),lg()(),Ml(697,`h4`,10),mN(698,`Propriedades`),lg(),Ml(699,`table`,11)(700,`tr`,12)(701,`th`,13),mN(702,`Nome`),lg(),Ml(703,`th`,13),mN(704,`Tipo`),lg(),Ml(705,`th`,13),mN(706,`Descrição`),lg()(),Ml(707,`tr`,14)(708,`td`,15)(709,`div`,16)(710,`span`,17),mN(711,` disabled`),ql(712,`br`),lg()()(),Ml(713,`td`,18)(714,`code`,26),mN(715,`boolean `),lg(),Ml(716,`code`,32),mN(717,` Function`),lg()(),Ml(718,`td`,21)(719,`em`)(720,`strong`),mN(721,`(opcional)`),lg()(),Ml(722,`p`),mN(723,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),lg(),Ml(724,`p`),mN(725,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),lg()()(),Ml(726,`tr`,14)(727,`td`,15)(728,`div`,16)(729,`span`,17),mN(730,` icon`),ql(731,`br`),lg()()(),Ml(732,`td`,18)(733,`code`,19),mN(734,`string `),lg(),Ml(735,`code`,27),mN(736,` TemplateRef<void>`),lg()(),Ml(737,`td`,21)(738,`em`)(739,`strong`),mN(740,`(opcional)`),lg()(),Ml(741,`p`),mN(742,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),lg(),Ml(743,`p`),mN(744,`É possível usar qualquer um dos ícones da `),Ml(745,`a`,33),mN(746,`Biblioteca de ícones`),lg(),mN(747,`. conforme exemplo abaixo:`),lg(),Ml(748,`pre`)(749,`code`),mN(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),lg()(),Ml(751,`p`),mN(752,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),lg(),Ml(753,`pre`)(754,`code`),mN(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),lg()(),Ml(756,`p`),mN(757,`Outra opção seria a customização do ícone através do `),Ml(758,`code`),mN(759,`TemplateRef`),lg(),mN(760,`, conforme exemplo abaixo:
component.html:`),lg(),Ml(761,`pre`)(762,`code`),mN(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),lg()(),Ml(764,`p`),mN(765,`component.ts:`),lg(),Ml(766,`pre`)(767,`code`),mN(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),lg()()()(),Ml(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),mN(773,` label`),ql(774,`br`),lg()()(),Ml(775,`td`,18)(776,`code`,19),mN(777,`string`),lg()(),Ml(778,`td`,21)(779,`em`)(780,`strong`),mN(781,`(opcional)`),lg()(),Ml(782,`p`),mN(783,`Rótulo da ação.`),lg()()(),Ml(784,`tr`,14)(785,`td`,15)(786,`div`,16)(787,`span`,17),mN(788,` type`),ql(789,`br`),lg()()(),Ml(790,`td`,18)(791,`code`,19),mN(792,`string`),lg()(),Ml(793,`td`,21)(794,`em`)(795,`strong`),mN(796,`(opcional)`),lg()(),Ml(797,`p`),mN(798,`Define a cor do item, sendo `),Ml(799,`code`),mN(800,`default`),lg(),mN(801,` o padrão.`),lg(),Ml(802,`p`),mN(803,`Valores válidos:`),lg(),Ml(804,`ul`)(805,`li`)(806,`code`),mN(807,`default`),lg()(),Ml(808,`li`)(809,`code`),mN(810,`danger`),lg(),mN(811,` - indicado para ações exclusivas (excluir, sair).`),lg()()()(),Ml(812,`tr`,14)(813,`td`,15)(814,`div`,16)(815,`span`,17),mN(816,` visible`),ql(817,`br`),lg()()(),Ml(818,`td`,18)(819,`code`,26),mN(820,`boolean `),lg(),Ml(821,`code`,32),mN(822,` Function`),lg()(),Ml(823,`td`,21)(824,`em`)(825,`strong`),mN(826,`(opcional)`),lg()(),Ml(827,`p`),mN(828,`Define se a ação será visível.`),lg(),Ml(829,`blockquote`)(830,`p`),mN(831,`Caso o valor não seja especificado a ação será visível.`),lg()(),Ml(832,`p`),mN(833,`Opções para tornar a ação visível ou não:`),lg(),Ml(834,`ul`)(835,`li`)(836,`p`),mN(837,`Função que deve retornar um booleano.`),lg()(),Ml(838,`li`)(839,`p`),mN(840,`Informar diretamente um valor booleano.`),lg()()()()()(),Ml(841,`h3`),mN(842,`Enums`),lg(),Ml(843,`h4`,4)(844,`code`,5),mN(845,`PoProgressShape`),lg()(),Ml(846,`div`,2)(847,`p`),mN(848,`Enum `),Ml(849,`code`),mN(850,`PoProgressShape`),lg(),mN(851,` para definir o formato visual do componente de progresso.`),lg()(),Ml(852,`h4`,10),mN(853,`Propriedades`),lg(),Ml(854,`table`,11)(855,`tr`,12)(856,`th`,13),mN(857,`Nome`),lg(),Ml(858,`th`,13),mN(859,`Descrição`),lg()(),Ml(860,`tr`,14)(861,`td`,15)(862,`div`,16)(863,`span`,17),mN(864,` bar`),ql(865,`br`),lg()()(),Ml(866,`td`,21)(867,`p`),mN(868,`Formato barra de progresso (padrão).`),lg()()(),Ml(869,`tr`,14)(870,`td`,15)(871,`div`,16)(872,`span`,17),mN(873,` circle`),ql(874,`br`),lg()()(),Ml(875,`td`,21)(876,`p`),mN(877,`Formato circular de progresso.`),lg()()()(),Ml(878,`h4`,4)(879,`code`,5),mN(880,`PoProgressSize`),lg()(),Ml(881,`div`,2)(882,`p`),mN(883,`Enum para configurar a expessura (`),Ml(884,`code`),mN(885,`p-size`),lg(),mN(886,`) da barra de progresso do componente.`),lg()(),Ml(887,`h4`,10),mN(888,`Propriedades`),lg(),Ml(889,`table`,11)(890,`tr`,12)(891,`th`,13),mN(892,`Nome`),lg(),Ml(893,`th`,13),mN(894,`Descrição`),lg()(),Ml(895,`tr`,14)(896,`td`,15)(897,`div`,16)(898,`span`,17),mN(899,` medium`),ql(900,`br`),lg()()(),Ml(901,`td`,21)(902,`p`),mN(903,`Tamanho médio com 4px.`),lg()()(),Ml(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),mN(908,` large`),ql(909,`br`),lg()()(),Ml(910,`td`,21)(911,`p`),mN(912,`Tamanho grande com 8px.`),lg()()()(),Ml(913,`h4`,4)(914,`code`,5),mN(915,`PoProgressStatus`),lg()(),Ml(916,`div`,2)(917,`p`),mN(918,`Enum `),Ml(919,`code`),mN(920,`PoProgressStatus`),lg(),mN(921,` para os status de barra de progresso.`),lg()(),Ml(922,`h4`,10),mN(923,`Propriedades`),lg(),Ml(924,`table`,11)(925,`tr`,12)(926,`th`,13),mN(927,`Nome`),lg(),Ml(928,`th`,13),mN(929,`Descrição`),lg()(),Ml(930,`tr`,14)(931,`td`,15)(932,`div`,16)(933,`span`,17),mN(934,` Default`),ql(935,`br`),lg()()(),Ml(936,`td`,21)(937,`p`),mN(938,`Define o status `),Ml(939,`code`),mN(940,`default`),lg(),mN(941,` para a barra de progresso.`),lg()()(),Ml(942,`tr`,14)(943,`td`,15)(944,`div`,16)(945,`span`,17),mN(946,` Error`),ql(947,`br`),lg()()(),Ml(948,`td`,21)(949,`p`),mN(950,`Define o status de `),Ml(951,`code`),mN(952,`error`),lg(),mN(953,` para a barra de progresso.`),lg()()(),Ml(954,`tr`,14)(955,`td`,15)(956,`div`,16)(957,`span`,17),mN(958,` Success`),ql(959,`br`),lg()()(),Ml(960,`td`,21)(961,`p`),mN(962,`Define o status de `),Ml(963,`code`),mN(964,`success`),lg(),mN(965,` para a barra de progresso.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Progress`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-progress-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-progress-basic-view`)(6,`sample-po-progress-labs-view`)(7,`sample-po-progress-publication-view`)(8,`sample-po-progress-circle-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Se,ve,fe,Pe,we],encapsulation:2,changeDetection:1})}return o})()}];var De=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[NL.forChild(Ge),NL]})}return o})();var wt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[ar,De]})}return o})();export{wt as DocPoProgressModule};