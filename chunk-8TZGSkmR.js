import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,da as wO,dt as Sae,hr as Hk,i as _a,ir as EF,ji as mO,lt as Rl,mn as ni,ni as _o,or as EO,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue$1,ua as wK,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var me=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`checkbox`,`p-label`,`PO Checkbox`]],template:function(l,o){l&1&&nu(0,`po-checkbox`,0)},dependencies:[Rl],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Checkbox Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Se,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.label=void 0,this.size=`medium`,this.compactLabel=!1}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-labs`]],standalone:!1,decls:19,vars:20,consts:[[`f`,`ngForm`],[`name`,`checkbox`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-size`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`labelTextWrap`,`p-label`,`Label Text Wrap`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`compactLabel`,`p-label`,`Compact Label`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Sx();jc(0,`po-checkbox`,1),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.checkbox,r)||(o.checkbox=r),v_(r)}),mt(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),EO(4,`json`),nu(5,`po-info`,4),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,5),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.label,r)||(o.label=r),v_(r)}),wg(),jc(11,`po-input`,6),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.help,r)||(o.help=r),v_(r)}),wg(),jc(12,`po-input`,7),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.helperText,r)||(o.helperText=r),v_(r)}),wg(),jc(13,`po-switch`,8),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.disabled,r)||(o.disabled=r),v_(r)}),wg(),jc(14,`po-switch`,9),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.labelTextWrap,r)||(o.labelTextWrap=r),v_(r)}),wg(),jc(15,`po-switch`,10),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.compactLabel,r)||(o.compactLabel=r),v_(r)}),wg(),jc(16,`po-radio-group`,11),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.size,r)||(o.size=r),v_(r)}),wg()(),jc(17,`div`,2)(18,`po-button`,12),mt(`p-click`,function(){return o.restore()}),wg()()()}l&2&&(ib(`ngModel`,o.checkbox),jE(`p-helper`,o.helperText)(`p-disabled`,o.disabled)(`p-help`,o.help)(`p-label`,o.label)(`p-size`,o.size)(`p-label-text-wrap`,o.labelTextWrap)(`p-compact-label`,o.compactLabel),t0(),rg(3),jE(`p-value`,wO(4,18,o.checkbox)),rg(2),jE(`p-value`,o.event),rg(5),ib(`ngModel`,o.label),t0(),rg(),ib(`ngModel`,o.help),t0(),rg(),ib(`ngModel`,o.helperText),t0(),rg(),ib(`ngModel`,o.disabled),t0(),rg(),ib(`ngModel`,o.labelTextWrap),t0(),rg(),ib(`ngModel`,o.compactLabel),t0(),rg(),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,Rl,A5,Ote,w5,_oe,Hk],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Checkbox Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-helper]="helperText"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-label-text-wrap]="labelTextWrap"
  [p-compact-label]="compactLabel"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
    <po-switch class="po-sm-3" name="labelTextWrap" [(ngModel)]="labelTextWrap" p-label="Label Text Wrap"> </po-switch>
    <po-switch class="po-sm-3" name="compactLabel" [(ngModel)]="compactLabel" p-label="Compact Label"> </po-switch>

    <po-radio-group
      class="po-md-12"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  helperText: string;
  checkbox: boolean | null;
  disabled: boolean;
  help: string;
  size: string;
  event: string;
  label: string;
  labelTextWrap: boolean;
  compactLabel: boolean;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
    this.compactLabel = false;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:`Confirm`};static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-acceptance-term`]],viewQuery:function(l,o){if(l&1&&iu(ea,7),l&2){let d;vo(d=_o())&&(o.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[[`modalTerm`,``],[`p-label`,`View term`,3,`p-click`],[`p-title`,`Acceptance Term`,3,`p-primary-action`],[1,`po-row`],[1,`po-sm-12`],[1,`po-font-text-large-bold`],[1,`po-row`,`po-p-1`],[`name`,`acceptance`,`p-label`,`I have read and agree to the terms of service and privacy`,3,`ngModelChange`,`p-change`,`ngModel`]],template:function(l,o){if(l&1){let d=Sx();jc(0,`po-button`,1),mt(`p-click`,function(){y_(d);let r=Fx(2);return v_(r.open())}),wg(),jc(1,`po-modal`,2,0)(3,`div`,3)(4,`div`,4)(5,`h3`,5),iO(6,`MIT License`),wg()(),jc(7,`div`,4)(8,`h4`),iO(9,`Copyright (c) 2019 PO UI`),wg()(),nu(10,`po-divider`,4),jc(11,`div`,4)(12,`p`),iO(13,` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: `),wg(),nu(14,`br`),jc(15,`p`),iO(16,` The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. `),wg(),nu(17,`br`),jc(18,`p`),iO(19,` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `),wg()()(),nu(20,`po-divider`),jc(21,`div`,6)(22,`po-checkbox`,7),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.acceptance,r)||(o.acceptance=r),v_(r)}),mt(`p-change`,function(){return o.primaryAction.disabled=!o.acceptance}),wg()()()}l&2&&(rg(),jE(`p-primary-action`,o.primaryAction),rg(21),ib(`ngModel`,o.acceptance),t0())},dependencies:[CK,TF,ni,Lf,Rl,ea],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-acceptance-term-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Checkbox - Acceptance Term`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-acceptance-term`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-doc`]],standalone:!1,decls:735,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoCheckboxComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O componente `),jc(24,`code`),iO(25,`po-checkbox`),wg(),iO(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),jc(27,`em`),iO(28,`click`),wg(),iO(29,` do `),jc(30,`em`),iO(31,`mouse`),wg(),iO(32,` quanto por meio da tecla `),jc(33,`em`),iO(34,`space`),wg(),iO(35,` quando estiver com foco.`),wg(),jc(36,`p`),iO(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),wg(),jc(38,`blockquote`)(39,`p`),iO(40,`O `),jc(41,`em`),iO(42,`model`),wg(),iO(43,` deste componente aceitará valores igual à `),jc(44,`code`),iO(45,`true`),wg(),iO(46,`, `),jc(47,`code`),iO(48,`false`),wg(),iO(49,` ou `),jc(50,`code`),iO(51,`null`),wg(),iO(52,` para quando for indeterminado/mixed.`),wg()(),jc(53,`p`)(54,`strong`),iO(55,`Acessibilidade tratada no componente:`),wg()(),jc(56,`p`),iO(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(58,`ul`)(59,`li`),iO(60,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),jc(61,`a`,6),iO(62,`WCAG 4.1.2: Name, Role, Value`),wg()(),jc(63,`li`),iO(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(65,`a`,7),iO(66,`WCAG 2.4.12: Focus Appearance`),wg()(),jc(67,`li`),iO(68,`A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. `),jc(69,`a`,8),iO(70,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),wg()()(),jc(71,`h4`),iO(72,`Tokens customizáveis`),wg(),jc(73,`p`),iO(74,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(75,`blockquote`)(76,`p`),iO(77,`Para maiores informações, acesse o guia `),jc(78,`a`,9),iO(79,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(80,`.`),wg()(),jc(81,`table`)(82,`thead`)(83,`tr`)(84,`th`),iO(85,`Propriedade`),wg(),jc(86,`th`),iO(87,`Descrição`),wg(),jc(88,`th`),iO(89,`Valor Padrão`),wg()()(),jc(90,`tbody`)(91,`tr`)(92,`td`)(93,`strong`),iO(94,`Default Values`),wg()(),nu(95,`td`)(96,`td`),wg(),jc(97,`tr`)(98,`td`)(99,`code`),iO(100,`--border-color`),wg()(),jc(101,`td`),iO(102,`Cor da borda`),wg(),jc(103,`td`)(104,`code`),iO(105,`var(--color-neutral-dark-70)`),wg()()(),jc(106,`tr`)(107,`td`)(108,`code`),iO(109,`--color-unchecked`),wg()(),jc(110,`td`),iO(111,`Cor quando não selecionado`),wg(),jc(112,`td`)(113,`code`),iO(114,`var(--color-neutral-light-00)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`code`),iO(118,`--color-checked`),wg()(),jc(119,`td`),iO(120,`Cor quando selecionado`),wg(),jc(121,`td`)(122,`code`),iO(123,`var(--color-action-default)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),iO(127,`--field-container-title-justify`),wg()(),jc(128,`td`),iO(129,`Alinhamento horizontal do título (`),jc(130,`code`),iO(131,`justify-content`),wg(),iO(132,`)`),wg(),jc(133,`td`)(134,`code`),iO(135,`space-between`),wg()()(),jc(136,`tr`)(137,`td`)(138,`code`),iO(139,`--field-container-title-flex`),wg()(),jc(140,`td`),iO(141,`Flex do título (`),jc(142,`code`),iO(143,`flex`),wg(),iO(144,`)`),wg(),jc(145,`td`)(146,`code`),iO(147,`1 auto`),wg()()(),jc(148,`tr`)(149,`td`)(150,`strong`),iO(151,`Hover`),wg()(),nu(152,`td`)(153,`td`),wg(),jc(154,`tr`)(155,`td`)(156,`code`),iO(157,`--color-hover`),wg()(),jc(158,`td`),iO(159,`Cor principal no estado hover`),wg(),jc(160,`td`)(161,`code`),iO(162,`var(--color-action-hover)`),wg()()(),jc(163,`tr`)(164,`td`)(165,`code`),iO(166,`--shadow-color-hover`),wg()(),jc(167,`td`),iO(168,`Cor da sombra no estado hover`),wg(),jc(169,`td`)(170,`code`),iO(171,`var(--color-brand-01-lighter)`),wg()()(),jc(172,`tr`)(173,`td`)(174,`strong`),iO(175,`Focused`),wg()(),nu(176,`td`)(177,`td`),wg(),jc(178,`tr`)(179,`td`)(180,`code`),iO(181,`--outline-color-focused`),wg()(),jc(182,`td`),iO(183,`Cor do outline do estado de focus`),wg(),jc(184,`td`)(185,`code`),iO(186,`var(--color-action-focus)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`strong`),iO(190,`Disabled`),wg()(),nu(191,`td`)(192,`td`),wg(),jc(193,`tr`)(194,`td`)(195,`code`),iO(196,`--color-unchecked-disabled`),wg(),iO(197,` \xA0`),wg(),jc(198,`td`),iO(199,`Cor pricipal quando não selecionado no estado disabled\xA0`),wg(),jc(200,`td`)(201,`code`),iO(202,`var(--color-action-disabled)`),wg()()(),jc(203,`tr`)(204,`td`)(205,`code`),iO(206,`--color-checked-disabled`),wg(),iO(207,` \xA0`),wg(),jc(208,`td`),iO(209,`Cor pricipal quando selecionado no estado disabled`),wg(),jc(210,`td`)(211,`code`),iO(212,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(213,`div`,10)(214,`h4`,11),iO(215,`Seletor`),wg(),jc(216,`pre`,12),iO(217,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-checkbox>
`),wg()(),jc(218,`h4`,13),iO(219,`Propriedades`),wg(),jc(220,`table`,14)(221,`tr`,15)(222,`th`,16),iO(223,`Nome`),wg(),jc(224,`th`,16),iO(225,`Tipo`),wg(),jc(226,`th`,16),iO(227,`Padrão`),wg(),jc(228,`th`,16),iO(229,`Descrição`),wg()(),jc(230,`tr`,17)(231,`td`,18)(232,`div`,19)(233,`span`,20),iO(234,` (p-additional-help)`),nu(235,`br`),wg()(),jc(236,`div`,21),iO(237,`Deprecated`),wg()(),jc(238,`td`,22)(239,`code`,23),iO(240,`EventEmitter`),wg()(),jc(241,`td`,24),iO(242,`-`),wg(),jc(243,`td`,25)(244,`em`)(245,`strong`),iO(246,`(opcional)`),wg()(),jc(247,`p`),iO(248,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(249,`blockquote`)(250,`p`),iO(251,`Essa propriedade está `),jc(252,`strong`),iO(253,`depreciada`),wg(),iO(254,` e será removida na versão `),jc(255,`code`),iO(256,`23.x.x`),wg(),iO(257,`. Recomendamos utilizar a propriedade `),jc(258,`code`),iO(259,`p-helper`),wg(),iO(260,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(261,`tr`,17)(262,`td`,18)(263,`div`,26)(264,`span`,27),iO(265,` p-additional-help-tooltip`),nu(266,`br`),wg()(),jc(267,`div`,21),iO(268,`Deprecated`),wg()(),jc(269,`td`,22)(270,`code`,28),iO(271,`string`),wg()(),jc(272,`td`,24),iO(273,`-`),wg(),jc(274,`td`,25)(275,`em`)(276,`strong`),iO(277,`(opcional)`),wg()(),jc(278,`p`),iO(279,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(280,`code`),iO(281,`po-helper`),wg(),iO(282,`.
`),jc(283,`strong`),iO(284,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(285,`blockquote`)(286,`p`),iO(287,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(288,`blockquote`)(289,`p`),iO(290,`Essa propriedade está `),jc(291,`strong`),iO(292,`depreciada`),wg(),iO(293,` e será removida na versão `),jc(294,`code`),iO(295,`23.x.x`),wg(),iO(296,`. Recomendamos utilizar a propriedade `),jc(297,`code`),iO(298,`p-helper`),wg(),iO(299,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(300,`tr`,17)(301,`td`,18)(302,`div`,26)(303,`span`,27),iO(304,` p-append-in-body`),nu(305,`br`),wg()()(),jc(306,`td`,22)(307,`code`,29),iO(308,`boolean`),wg()(),jc(309,`td`,24)(310,`p`)(311,`code`),iO(312,`false`),wg()()(),jc(313,`td`,25)(314,`em`)(315,`strong`),iO(316,`(opcional)`),wg()(),jc(317,`p`),iO(318,`Define que o popover (`),jc(319,`code`),iO(320,`p-helper`),wg(),iO(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(322,`blockquote`)(323,`p`),iO(324,`Quando utilizado com `),jc(325,`code`),iO(326,`p-helper`),wg(),iO(327,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(328,`tr`,17)(329,`td`,18)(330,`div`,26)(331,`span`,27),iO(332,` p-auto-focus`),nu(333,`br`),wg()()(),jc(334,`td`,22)(335,`code`,29),iO(336,`boolean`),wg()(),jc(337,`td`,24)(338,`p`)(339,`code`),iO(340,`false`),wg()()(),jc(341,`td`,25)(342,`em`)(343,`strong`),iO(344,`(opcional)`),wg()(),jc(345,`p`),iO(346,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(347,`blockquote`)(348,`p`),iO(349,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(350,`tr`,17)(351,`td`,18)(352,`div`,19)(353,`span`,20),iO(354,` (p-blur)`),nu(355,`br`),wg()()(),jc(356,`td`,22)(357,`code`,23),iO(358,`EventEmitter`),wg()(),jc(359,`td`,24),iO(360,`-`),wg(),jc(361,`td`,25)(362,`em`)(363,`strong`),iO(364,`(opcional)`),wg()(),jc(365,`p`),iO(366,`Evento disparado ao sair do campo.`),wg()()(),jc(367,`tr`,17)(368,`td`,18)(369,`div`,19)(370,`span`,20),iO(371,` (p-change)`),nu(372,`br`),wg()()(),jc(373,`td`,22)(374,`code`,23),iO(375,`EventEmitter`),wg()(),jc(376,`td`,24),iO(377,`-`),wg(),jc(378,`td`,25)(379,`em`)(380,`strong`),iO(381,`(opcional)`),wg()(),jc(382,`p`),iO(383,`Evento disparado quando o valor do `),jc(384,`em`),iO(385,`checkbox`),wg(),iO(386,` for alterado.`),wg()()(),jc(387,`tr`,17)(388,`td`,18)(389,`div`,19)(390,`span`,20),iO(391,` (p-change-model)`),nu(392,`br`),wg()()(),jc(393,`td`,22)(394,`code`,23),iO(395,`EventEmitter`),wg()(),jc(396,`td`,24),iO(397,`-`),wg(),jc(398,`td`,25)(399,`em`)(400,`strong`),iO(401,`(opcional)`),wg()(),jc(402,`p`),iO(403,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(404,`code`),iO(405,`setValue`),wg(),iO(406,`, `),jc(407,`code`),iO(408,`patchValue`),wg(),iO(409,`, carregamento assíncrono).`),wg(),jc(410,`p`),iO(411,`Diferentemente do `),jc(412,`code`),iO(413,`p-change`),wg(),iO(414,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(415,`code`),iO(416,`p-change-model`),wg(),iO(417,` cobre todos os cenários de alteração de valor.`),wg(),jc(418,`p`),iO(419,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(420,`tr`,17)(421,`td`,18)(422,`div`,26)(423,`span`,27),iO(424,` p-compact-label`),nu(425,`br`),wg()()(),jc(426,`td`,22)(427,`code`,29),iO(428,`boolean`),wg()(),jc(429,`td`,24)(430,`p`)(431,`code`),iO(432,`false`),wg()()(),jc(433,`td`,25)(434,`em`)(435,`strong`),iO(436,`(opcional)`),wg()(),jc(437,`p`),iO(438,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(439,`p`),iO(440,`Quando habilitado (`),jc(441,`code`),iO(442,`true`),wg(),iO(443,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(444,`ul`)(445,`li`)(446,`code`),iO(447,`po-label`),wg()(),jc(448,`li`)(449,`code`),iO(450,`p-requirement (showRequired)`),wg()(),jc(451,`li`)(452,`code`),iO(453,`po-helper`),wg()()(),jc(454,`p`),iO(455,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(456,`p`),iO(457,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(458,`ul`)(459,`li`)(460,`code`),iO(461,`--field-container-title-justify`),wg()(),jc(462,`li`)(463,`code`),iO(464,`--field-container-title-flex`),wg()()(),jc(465,`p`),iO(466,`Exemplo:`),wg(),jc(467,`pre`)(468,`code`),iO(469,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(470,`p`),iO(471,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(472,`tr`,17)(473,`td`,18)(474,`div`,26)(475,`span`,27),iO(476,` p-disabled`),nu(477,`br`),wg()()(),jc(478,`td`,22)(479,`code`,29),iO(480,`boolean`),wg()(),jc(481,`td`,24)(482,`p`)(483,`code`),iO(484,`false`),wg()()(),jc(485,`td`,25)(486,`em`)(487,`strong`),iO(488,`(opcional)`),wg()(),jc(489,`p`),iO(490,`Define o estado do `),jc(491,`em`),iO(492,`checkbox`),wg(),iO(493,` como desabilitado.`),wg()()(),jc(494,`tr`,17)(495,`td`,18)(496,`div`,26)(497,`span`,27),iO(498,` p-help`),nu(499,`br`),wg()()(),jc(500,`td`,22)(501,`code`,28),iO(502,`string`),wg()(),jc(503,`td`,24),iO(504,`-`),wg(),jc(505,`td`,25)(506,`em`)(507,`strong`),iO(508,`(opcional)`),wg()(),jc(509,`p`),iO(510,`Texto de apoio do campo`),wg()()(),jc(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),iO(515,` (p-keydown)`),nu(516,`br`),wg()()(),jc(517,`td`,22)(518,`code`,23),iO(519,`EventEmitter`),wg()(),jc(520,`td`,24),iO(521,`-`),wg(),jc(522,`td`,25)(523,`em`)(524,`strong`),iO(525,`(opcional)`),wg()(),jc(526,`p`),iO(527,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(528,`code`),iO(529,`KeyboardEvent`),wg(),iO(530,` com informações sobre a tecla.`),wg()()(),jc(531,`tr`,17)(532,`td`,18)(533,`div`,26)(534,`span`,27),iO(535,` p-label`),nu(536,`br`),wg()()(),jc(537,`td`,22)(538,`code`,28),iO(539,`string`),wg()(),jc(540,`td`,24),iO(541,`-`),wg(),jc(542,`td`,25)(543,`em`)(544,`strong`),iO(545,`(opcional)`),wg()(),jc(546,`p`),iO(547,`Texto de exibição do `),jc(548,`em`),iO(549,`checkbox`),wg(),iO(550,`.`),wg()()(),jc(551,`tr`,17)(552,`td`,18)(553,`div`,26)(554,`span`,27),iO(555,` p-label-text-wrap`),nu(556,`br`),wg()()(),jc(557,`td`,22)(558,`code`,29),iO(559,`boolean`),wg()(),jc(560,`td`,24)(561,`p`)(562,`code`),iO(563,`false`),wg()()(),jc(564,`td`,25)(565,`em`)(566,`strong`),iO(567,`(opcional)`),wg()(),jc(568,`p`),iO(569,`Habilita a quebra automática do texto da propriedade `),jc(570,`code`),iO(571,`p-label`),wg(),iO(572,`. Quando `),jc(573,`code`),iO(574,`p-label-text-wrap`),wg(),iO(575,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(576,`tr`,17)(577,`td`,18)(578,`div`,26)(579,`span`,27),iO(580,` name`),nu(581,`br`),wg()()(),jc(582,`td`,22)(583,`code`,28),iO(584,`string`),wg()(),jc(585,`td`,24),iO(586,`-`),wg(),jc(587,`td`,25)(588,`p`),iO(589,`Define o nome do `),jc(590,`em`),iO(591,`checkbox`),wg(),iO(592,`.`),wg()()(),jc(593,`tr`,17)(594,`td`,18)(595,`div`,26)(596,`span`,27),iO(597,` p-helper`),nu(598,`br`),wg()()(),jc(599,`td`,22)(600,`code`,30),iO(601,`PoHelperOptions `),wg(),jc(602,`code`,28),iO(603,` string`),wg()(),jc(604,`td`,24),iO(605,`-`),wg(),jc(606,`td`,25)(607,`em`)(608,`strong`),iO(609,`(opcional)`),wg()(),jc(610,`p`),iO(611,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(612,`code`),iO(613,`p-label`),wg(),iO(614,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(615,`code`),iO(616,`p-label`),wg(),iO(617,`.`),wg(),jc(618,`blockquote`)(619,`p`),iO(620,`Para mais informações acesse: `),jc(621,`a`,31),iO(622,`https://po-ui.io/documentation/po-helper`),wg(),iO(623,`.`),wg()(),jc(624,`blockquote`)(625,`p`),iO(626,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(627,`code`),iO(628,`p-additional-help-tooltip`),wg(),iO(629,` e `),jc(630,`code`),iO(631,`p-additional-help`),wg(),iO(632,`) será ignorado.`),wg()()()(),jc(633,`tr`,17)(634,`td`,18)(635,`div`,26)(636,`span`,27),iO(637,` p-size`),nu(638,`br`),wg()()(),jc(639,`td`,22)(640,`code`,28),iO(641,`string`),wg()(),jc(642,`td`,24)(643,`p`)(644,`code`),iO(645,`medium`),wg()()(),jc(646,`td`,25)(647,`em`)(648,`strong`),iO(649,`(opcional)`),wg()(),jc(650,`p`),iO(651,`Define o tamanho da caixa de seleção do componente:`),wg(),jc(652,`ul`)(653,`li`)(654,`code`),iO(655,`small`),wg(),iO(656,`: 16x16 (disponível apenas para acessibilidade AA).`),wg(),jc(657,`li`)(658,`code`),iO(659,`medium`),wg(),iO(660,`: 24x24.`),wg(),jc(661,`li`)(662,`code`),iO(663,`large`),wg(),iO(664,`: 32x32.`),wg()(),jc(665,`blockquote`)(666,`p`),iO(667,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(668,`code`),iO(669,`medium`),wg(),iO(670,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(671,`a`,32),iO(672,`po-theme`),wg(),iO(673,`.`),wg()()()()(),jc(674,`h3`,13),iO(675,`Métodos`),wg(),jc(676,`table`,33)(677,`tr`,17)(678,`th`,34)(679,`div`,26)(680,`h4`)(681,`span`,27),iO(682,` focus `),wg()()()()(),jc(683,`tr`,25)(684,`td`,25)(685,`p`),iO(686,`Função que atribui foco ao `),jc(687,`em`),iO(688,`checkbox`),wg(),iO(689,`.`),wg(),jc(690,`p`),iO(691,`Para utilizá-la é necessário capturar a referência do componente no DOM através do `),jc(692,`code`),iO(693,`ViewChild`),wg(),iO(694,`, como por exemplo:`),wg(),jc(695,`pre`)(696,`code`),iO(697,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),wg()()()()(),nu(698,`br`),jc(699,`table`,33)(700,`tr`,17)(701,`th`,34)(702,`div`,26)(703,`h4`)(704,`span`,27),iO(705,` showAdditionalHelp `),wg()()()()(),jc(706,`tr`,25)(707,`td`,25)(708,`p`),iO(709,`Método que exibe `),jc(710,`code`),iO(711,`p-helper`),wg(),iO(712,` ou executa a ação definida em `),jc(713,`code`),iO(714,`p-helper{eventOnClick}`),wg(),iO(715,` ou em `),jc(716,`code`),iO(717,`p-additionalHelp`),wg(),iO(718,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(719,`code`),iO(720,`p-keydown`),wg(),iO(721,`.`),wg(),jc(722,`blockquote`)(723,`p`),iO(724,`Exibe ou oculta o conteúdo do componente `),jc(725,`code`),iO(726,`po-helper`),wg(),iO(727,` quando o componente estiver com foco.`),wg()(),jc(728,`pre`)(729,`code`),iO(730,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),wg()(),jc(731,`pre`)(732,`code`),iO(733,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(734,`br`),wg())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-checkbox-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-checkbox-basic-view`)(6,`sample-po-checkbox-labs-view`)(7,`sample-po-checkbox-acceptance-term-view`),wg()()()),l&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,pe,ce,ue,he],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe$1({type:i});static ɵinj=ue$1({imports:[C1.forChild(_e),C1]})}return i})();var $e=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe$1({type:i});static ɵinj=ue$1({imports:[Ta,Ee]})}return i})();export{$e as DocPoCheckboxModule};