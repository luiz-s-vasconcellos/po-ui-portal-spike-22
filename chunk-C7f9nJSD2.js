import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Mt as bp,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ea as qO,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,la as uo,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,wn as vr,wr as MN,yi as cN,zr as SN}from"./main-3EWTGE7T.js";var me=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`checkbox`,`p-label`,`PO Checkbox`]],template:function(l,o){l&1&&Gl(0,`po-checkbox`,0)},dependencies:[bp],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Checkbox Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-checkbox-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Se,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.label=void 0,this.size=`medium`,this.compactLabel=!1}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-labs`]],standalone:!1,decls:19,vars:20,consts:[[`f`,`ngForm`],[`name`,`checkbox`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-size`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`labelTextWrap`,`p-label`,`Label Text Wrap`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`compactLabel`,`p-label`,`Compact Label`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Ax();Tl(0,`po-checkbox`,1),ww(`ngModelChange`,function(r){return Ky(d),uN(o.checkbox,r)||(o.checkbox=r),Xy(r)}),ht(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3),SN(4,`json`),Gl(5,`po-info`,4),ag(),Gl(6,`po-divider`),Tl(7,`form`,null,0)(9,`div`,2)(10,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(d),uN(o.label,r)||(o.label=r),Xy(r)}),ag(),a0(),Tl(11,`po-input`,6),ww(`ngModelChange`,function(r){return Ky(d),uN(o.help,r)||(o.help=r),Xy(r)}),ag(),a0(),Tl(12,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(d),uN(o.helperText,r)||(o.helperText=r),Xy(r)}),ag(),a0(),Tl(13,`po-switch`,8),ww(`ngModelChange`,function(r){return Ky(d),uN(o.disabled,r)||(o.disabled=r),Xy(r)}),ag(),a0(),Tl(14,`po-switch`,9),ww(`ngModelChange`,function(r){return Ky(d),uN(o.labelTextWrap,r)||(o.labelTextWrap=r),Xy(r)}),ag(),a0(),Tl(15,`po-switch`,10),ww(`ngModelChange`,function(r){return Ky(d),uN(o.compactLabel,r)||(o.compactLabel=r),Xy(r)}),ag(),a0(),Tl(16,`po-radio-group`,11),ww(`ngModelChange`,function(r){return Ky(d),uN(o.size,r)||(o.size=r),Xy(r)}),ag(),a0(),ag(),Tl(17,`div`,2)(18,`po-button`,12),ht(`p-click`,function(){return o.restore()}),ag()()()}l&2&&(Ew(`ngModel`,o.checkbox),nw(`p-helper`,o.helperText)(`p-disabled`,o.disabled)(`p-help`,o.help)(`p-label`,o.label)(`p-size`,o.size)(`p-label-text-wrap`,o.labelTextWrap)(`p-compact-label`,o.compactLabel),l0(),jp(3),nw(`p-value`,MN(4,18,o.checkbox)),jp(2),nw(`p-value`,o.event),jp(5),Ew(`ngModel`,o.label),l0(),jp(),Ew(`ngModel`,o.help),l0(),jp(),Ew(`ngModel`,o.helperText),l0(),jp(),Ew(`ngModel`,o.disabled),l0(),jp(),Ew(`ngModel`,o.labelTextWrap),l0(),jp(),Ew(`ngModel`,o.compactLabel),l0(),jp(),Ew(`ngModel`,o.size),nw(`p-options`,o.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,bp,iU,L0e,j4,ybe,qO],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Checkbox Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-checkbox
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-checkbox-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:`Confirm`};static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-acceptance-term`]],viewQuery:function(l,o){if(l&1&&Yl(vr,7),l&2){let d;lo(d=uo())&&(o.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[[`modalTerm`,``],[`p-label`,`View term`,3,`p-click`],[`p-title`,`Acceptance Term`,3,`p-primary-action`],[1,`po-row`],[1,`po-sm-12`],[1,`po-font-text-large-bold`],[1,`po-row`,`po-p-1`],[`name`,`acceptance`,`p-label`,`I have read and agree to the terms of service and privacy`,3,`ngModelChange`,`p-change`,`ngModel`]],template:function(l,o){if(l&1){let d=Ax();Tl(0,`po-button`,1),ht(`p-click`,function(){Ky(d);return Xy(Bx(2).open())}),ag(),Tl(1,`po-modal`,2,0)(3,`div`,3)(4,`div`,4)(5,`h3`,5),cN(6,`MIT License`),ag()(),Tl(7,`div`,4)(8,`h4`),cN(9,`Copyright (c) 2019 PO UI`),ag()(),Gl(10,`po-divider`,4),Tl(11,`div`,4)(12,`p`),cN(13,` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: `),ag(),Gl(14,`br`),Tl(15,`p`),cN(16,` The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. `),ag(),Gl(17,`br`),Tl(18,`p`),cN(19,` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `),ag()()(),Gl(20,`po-divider`),Tl(21,`div`,6)(22,`po-checkbox`,7),ww(`ngModelChange`,function(r){return Ky(d),uN(o.acceptance,r)||(o.acceptance=r),Xy(r)}),ht(`p-change`,function(){return o.primaryAction.disabled=!o.acceptance}),ag(),a0(),ag()()}l&2&&(jp(),nw(`p-primary-action`,o.primaryAction),jp(21),Ew(`ngModel`,o.acceptance),l0())},dependencies:[gY,Ak,Zt,Xy$1,bp,vr],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-acceptance-term-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Checkbox - Acceptance Term`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-checkbox-acceptance-term`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-doc`]],standalone:!1,decls:735,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoCheckboxComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O componente `),Tl(24,`code`),cN(25,`po-checkbox`),ag(),cN(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Tl(27,`em`),cN(28,`click`),ag(),cN(29,` do `),Tl(30,`em`),cN(31,`mouse`),ag(),cN(32,` quanto por meio da tecla `),Tl(33,`em`),cN(34,`space`),ag(),cN(35,` quando estiver com foco.`),ag(),Tl(36,`p`),cN(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),ag(),Tl(38,`blockquote`)(39,`p`),cN(40,`O `),Tl(41,`em`),cN(42,`model`),ag(),cN(43,` deste componente aceitará valores igual à `),Tl(44,`code`),cN(45,`true`),ag(),cN(46,`, `),Tl(47,`code`),cN(48,`false`),ag(),cN(49,` ou `),Tl(50,`code`),cN(51,`null`),ag(),cN(52,` para quando for indeterminado/mixed.`),ag()(),Tl(53,`p`)(54,`strong`),cN(55,`Acessibilidade tratada no componente:`),ag()(),Tl(56,`p`),cN(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ag(),Tl(58,`ul`)(59,`li`),cN(60,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Tl(61,`a`,6),cN(62,`WCAG 4.1.2: Name, Role, Value`),ag()(),Tl(63,`li`),cN(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Tl(65,`a`,7),cN(66,`WCAG 2.4.12: Focus Appearance`),ag()(),Tl(67,`li`),cN(68,`A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. `),Tl(69,`a`,8),cN(70,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),ag()()(),Tl(71,`h4`),cN(72,`Tokens customizáveis`),ag(),Tl(73,`p`),cN(74,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(75,`blockquote`)(76,`p`),cN(77,`Para maiores informações, acesse o guia `),Tl(78,`a`,9),cN(79,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(80,`.`),ag()(),Tl(81,`table`)(82,`thead`)(83,`tr`)(84,`th`),cN(85,`Propriedade`),ag(),Tl(86,`th`),cN(87,`Descrição`),ag(),Tl(88,`th`),cN(89,`Valor Padrão`),ag()()(),Tl(90,`tbody`)(91,`tr`)(92,`td`)(93,`strong`),cN(94,`Default Values`),ag()(),Gl(95,`td`)(96,`td`),ag(),Tl(97,`tr`)(98,`td`)(99,`code`),cN(100,`--border-color`),ag()(),Tl(101,`td`),cN(102,`Cor da borda`),ag(),Tl(103,`td`)(104,`code`),cN(105,`var(--color-neutral-dark-70)`),ag()()(),Tl(106,`tr`)(107,`td`)(108,`code`),cN(109,`--color-unchecked`),ag()(),Tl(110,`td`),cN(111,`Cor quando não selecionado`),ag(),Tl(112,`td`)(113,`code`),cN(114,`var(--color-neutral-light-00)`),ag()()(),Tl(115,`tr`)(116,`td`)(117,`code`),cN(118,`--color-checked`),ag()(),Tl(119,`td`),cN(120,`Cor quando selecionado`),ag(),Tl(121,`td`)(122,`code`),cN(123,`var(--color-action-default)`),ag()()(),Tl(124,`tr`)(125,`td`)(126,`code`),cN(127,`--field-container-title-justify`),ag()(),Tl(128,`td`),cN(129,`Alinhamento horizontal do título (`),Tl(130,`code`),cN(131,`justify-content`),ag(),cN(132,`)`),ag(),Tl(133,`td`)(134,`code`),cN(135,`space-between`),ag()()(),Tl(136,`tr`)(137,`td`)(138,`code`),cN(139,`--field-container-title-flex`),ag()(),Tl(140,`td`),cN(141,`Flex do título (`),Tl(142,`code`),cN(143,`flex`),ag(),cN(144,`)`),ag(),Tl(145,`td`)(146,`code`),cN(147,`1 auto`),ag()()(),Tl(148,`tr`)(149,`td`)(150,`strong`),cN(151,`Hover`),ag()(),Gl(152,`td`)(153,`td`),ag(),Tl(154,`tr`)(155,`td`)(156,`code`),cN(157,`--color-hover`),ag()(),Tl(158,`td`),cN(159,`Cor principal no estado hover`),ag(),Tl(160,`td`)(161,`code`),cN(162,`var(--color-action-hover)`),ag()()(),Tl(163,`tr`)(164,`td`)(165,`code`),cN(166,`--shadow-color-hover`),ag()(),Tl(167,`td`),cN(168,`Cor da sombra no estado hover`),ag(),Tl(169,`td`)(170,`code`),cN(171,`var(--color-brand-01-lighter)`),ag()()(),Tl(172,`tr`)(173,`td`)(174,`strong`),cN(175,`Focused`),ag()(),Gl(176,`td`)(177,`td`),ag(),Tl(178,`tr`)(179,`td`)(180,`code`),cN(181,`--outline-color-focused`),ag()(),Tl(182,`td`),cN(183,`Cor do outline do estado de focus`),ag(),Tl(184,`td`)(185,`code`),cN(186,`var(--color-action-focus)`),ag()()(),Tl(187,`tr`)(188,`td`)(189,`strong`),cN(190,`Disabled`),ag()(),Gl(191,`td`)(192,`td`),ag(),Tl(193,`tr`)(194,`td`)(195,`code`),cN(196,`--color-unchecked-disabled`),ag(),cN(197,` \xA0`),ag(),Tl(198,`td`),cN(199,`Cor pricipal quando não selecionado no estado disabled\xA0`),ag(),Tl(200,`td`)(201,`code`),cN(202,`var(--color-action-disabled)`),ag()()(),Tl(203,`tr`)(204,`td`)(205,`code`),cN(206,`--color-checked-disabled`),ag(),cN(207,` \xA0`),ag(),Tl(208,`td`),cN(209,`Cor pricipal quando selecionado no estado disabled`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--color-neutral-dark-70)`),ag()()()()()(),Tl(213,`div`,10)(214,`h4`,11),cN(215,`Seletor`),ag(),Tl(216,`pre`,12),cN(217,`<po-checkbox
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
`),ag()(),Tl(218,`h4`,13),cN(219,`Propriedades`),ag(),Tl(220,`table`,14)(221,`tr`,15)(222,`th`,16),cN(223,`Nome`),ag(),Tl(224,`th`,16),cN(225,`Tipo`),ag(),Tl(226,`th`,16),cN(227,`Padrão`),ag(),Tl(228,`th`,16),cN(229,`Descrição`),ag()(),Tl(230,`tr`,17)(231,`td`,18)(232,`div`,19)(233,`span`,20),cN(234,` (p-additional-help)`),Gl(235,`br`),ag()(),Tl(236,`div`,21),cN(237,`Deprecated`),ag()(),Tl(238,`td`,22)(239,`code`,23),cN(240,`EventEmitter`),ag()(),Tl(241,`td`,24),cN(242,`-`),ag(),Tl(243,`td`,25)(244,`em`)(245,`strong`),cN(246,`(opcional)`),ag()(),Tl(247,`p`),cN(248,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(249,`blockquote`)(250,`p`),cN(251,`Essa propriedade está `),Tl(252,`strong`),cN(253,`depreciada`),ag(),cN(254,` e será removida na versão `),Tl(255,`code`),cN(256,`23.x.x`),ag(),cN(257,`. Recomendamos utilizar a propriedade `),Tl(258,`code`),cN(259,`p-helper`),ag(),cN(260,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(261,`tr`,17)(262,`td`,18)(263,`div`,26)(264,`span`,27),cN(265,` p-additional-help-tooltip`),Gl(266,`br`),ag()(),Tl(267,`div`,21),cN(268,`Deprecated`),ag()(),Tl(269,`td`,22)(270,`code`,28),cN(271,`string`),ag()(),Tl(272,`td`,24),cN(273,`-`),ag(),Tl(274,`td`,25)(275,`em`)(276,`strong`),cN(277,`(opcional)`),ag()(),Tl(278,`p`),cN(279,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(280,`code`),cN(281,`po-helper`),ag(),cN(282,`.
`),Tl(283,`strong`),cN(284,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(285,`blockquote`)(286,`p`),cN(287,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(288,`blockquote`)(289,`p`),cN(290,`Essa propriedade está `),Tl(291,`strong`),cN(292,`depreciada`),ag(),cN(293,` e será removida na versão `),Tl(294,`code`),cN(295,`23.x.x`),ag(),cN(296,`. Recomendamos utilizar a propriedade `),Tl(297,`code`),cN(298,`p-helper`),ag(),cN(299,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(300,`tr`,17)(301,`td`,18)(302,`div`,26)(303,`span`,27),cN(304,` p-append-in-body`),Gl(305,`br`),ag()()(),Tl(306,`td`,22)(307,`code`,29),cN(308,`boolean`),ag()(),Tl(309,`td`,24)(310,`p`)(311,`code`),cN(312,`false`),ag()()(),Tl(313,`td`,25)(314,`em`)(315,`strong`),cN(316,`(opcional)`),ag()(),Tl(317,`p`),cN(318,`Define que o popover (`),Tl(319,`code`),cN(320,`p-helper`),ag(),cN(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(322,`blockquote`)(323,`p`),cN(324,`Quando utilizado com `),Tl(325,`code`),cN(326,`p-helper`),ag(),cN(327,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(328,`tr`,17)(329,`td`,18)(330,`div`,26)(331,`span`,27),cN(332,` p-auto-focus`),Gl(333,`br`),ag()()(),Tl(334,`td`,22)(335,`code`,29),cN(336,`boolean`),ag()(),Tl(337,`td`,24)(338,`p`)(339,`code`),cN(340,`false`),ag()()(),Tl(341,`td`,25)(342,`em`)(343,`strong`),cN(344,`(opcional)`),ag()(),Tl(345,`p`),cN(346,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(347,`blockquote`)(348,`p`),cN(349,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(350,`tr`,17)(351,`td`,18)(352,`div`,19)(353,`span`,20),cN(354,` (p-blur)`),Gl(355,`br`),ag()()(),Tl(356,`td`,22)(357,`code`,23),cN(358,`EventEmitter`),ag()(),Tl(359,`td`,24),cN(360,`-`),ag(),Tl(361,`td`,25)(362,`em`)(363,`strong`),cN(364,`(opcional)`),ag()(),Tl(365,`p`),cN(366,`Evento disparado ao sair do campo.`),ag()()(),Tl(367,`tr`,17)(368,`td`,18)(369,`div`,19)(370,`span`,20),cN(371,` (p-change)`),Gl(372,`br`),ag()()(),Tl(373,`td`,22)(374,`code`,23),cN(375,`EventEmitter`),ag()(),Tl(376,`td`,24),cN(377,`-`),ag(),Tl(378,`td`,25)(379,`em`)(380,`strong`),cN(381,`(opcional)`),ag()(),Tl(382,`p`),cN(383,`Evento disparado quando o valor do `),Tl(384,`em`),cN(385,`checkbox`),ag(),cN(386,` for alterado.`),ag()()(),Tl(387,`tr`,17)(388,`td`,18)(389,`div`,19)(390,`span`,20),cN(391,` (p-change-model)`),Gl(392,`br`),ag()()(),Tl(393,`td`,22)(394,`code`,23),cN(395,`EventEmitter`),ag()(),Tl(396,`td`,24),cN(397,`-`),ag(),Tl(398,`td`,25)(399,`em`)(400,`strong`),cN(401,`(opcional)`),ag()(),Tl(402,`p`),cN(403,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(404,`code`),cN(405,`setValue`),ag(),cN(406,`, `),Tl(407,`code`),cN(408,`patchValue`),ag(),cN(409,`, carregamento assíncrono).`),ag(),Tl(410,`p`),cN(411,`Diferentemente do `),Tl(412,`code`),cN(413,`p-change`),ag(),cN(414,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(415,`code`),cN(416,`p-change-model`),ag(),cN(417,` cobre todos os cenários de alteração de valor.`),ag(),Tl(418,`p`),cN(419,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(420,`tr`,17)(421,`td`,18)(422,`div`,26)(423,`span`,27),cN(424,` p-compact-label`),Gl(425,`br`),ag()()(),Tl(426,`td`,22)(427,`code`,29),cN(428,`boolean`),ag()(),Tl(429,`td`,24)(430,`p`)(431,`code`),cN(432,`false`),ag()()(),Tl(433,`td`,25)(434,`em`)(435,`strong`),cN(436,`(opcional)`),ag()(),Tl(437,`p`),cN(438,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(439,`p`),cN(440,`Quando habilitado (`),Tl(441,`code`),cN(442,`true`),ag(),cN(443,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(444,`ul`)(445,`li`)(446,`code`),cN(447,`po-label`),ag()(),Tl(448,`li`)(449,`code`),cN(450,`p-requirement (showRequired)`),ag()(),Tl(451,`li`)(452,`code`),cN(453,`po-helper`),ag()()(),Tl(454,`p`),cN(455,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(456,`p`),cN(457,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(458,`ul`)(459,`li`)(460,`code`),cN(461,`--field-container-title-justify`),ag()(),Tl(462,`li`)(463,`code`),cN(464,`--field-container-title-flex`),ag()()(),Tl(465,`p`),cN(466,`Exemplo:`),ag(),Tl(467,`pre`)(468,`code`),cN(469,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(470,`p`),cN(471,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(472,`tr`,17)(473,`td`,18)(474,`div`,26)(475,`span`,27),cN(476,` p-disabled`),Gl(477,`br`),ag()()(),Tl(478,`td`,22)(479,`code`,29),cN(480,`boolean`),ag()(),Tl(481,`td`,24)(482,`p`)(483,`code`),cN(484,`false`),ag()()(),Tl(485,`td`,25)(486,`em`)(487,`strong`),cN(488,`(opcional)`),ag()(),Tl(489,`p`),cN(490,`Define o estado do `),Tl(491,`em`),cN(492,`checkbox`),ag(),cN(493,` como desabilitado.`),ag()()(),Tl(494,`tr`,17)(495,`td`,18)(496,`div`,26)(497,`span`,27),cN(498,` p-help`),Gl(499,`br`),ag()()(),Tl(500,`td`,22)(501,`code`,28),cN(502,`string`),ag()(),Tl(503,`td`,24),cN(504,`-`),ag(),Tl(505,`td`,25)(506,`em`)(507,`strong`),cN(508,`(opcional)`),ag()(),Tl(509,`p`),cN(510,`Texto de apoio do campo`),ag()()(),Tl(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),cN(515,` (p-keydown)`),Gl(516,`br`),ag()()(),Tl(517,`td`,22)(518,`code`,23),cN(519,`EventEmitter`),ag()(),Tl(520,`td`,24),cN(521,`-`),ag(),Tl(522,`td`,25)(523,`em`)(524,`strong`),cN(525,`(opcional)`),ag()(),Tl(526,`p`),cN(527,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(528,`code`),cN(529,`KeyboardEvent`),ag(),cN(530,` com informações sobre a tecla.`),ag()()(),Tl(531,`tr`,17)(532,`td`,18)(533,`div`,26)(534,`span`,27),cN(535,` p-label`),Gl(536,`br`),ag()()(),Tl(537,`td`,22)(538,`code`,28),cN(539,`string`),ag()(),Tl(540,`td`,24),cN(541,`-`),ag(),Tl(542,`td`,25)(543,`em`)(544,`strong`),cN(545,`(opcional)`),ag()(),Tl(546,`p`),cN(547,`Texto de exibição do `),Tl(548,`em`),cN(549,`checkbox`),ag(),cN(550,`.`),ag()()(),Tl(551,`tr`,17)(552,`td`,18)(553,`div`,26)(554,`span`,27),cN(555,` p-label-text-wrap`),Gl(556,`br`),ag()()(),Tl(557,`td`,22)(558,`code`,29),cN(559,`boolean`),ag()(),Tl(560,`td`,24)(561,`p`)(562,`code`),cN(563,`false`),ag()()(),Tl(564,`td`,25)(565,`em`)(566,`strong`),cN(567,`(opcional)`),ag()(),Tl(568,`p`),cN(569,`Habilita a quebra automática do texto da propriedade `),Tl(570,`code`),cN(571,`p-label`),ag(),cN(572,`. Quando `),Tl(573,`code`),cN(574,`p-label-text-wrap`),ag(),cN(575,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(576,`tr`,17)(577,`td`,18)(578,`div`,26)(579,`span`,27),cN(580,` name`),Gl(581,`br`),ag()()(),Tl(582,`td`,22)(583,`code`,28),cN(584,`string`),ag()(),Tl(585,`td`,24),cN(586,`-`),ag(),Tl(587,`td`,25)(588,`p`),cN(589,`Define o nome do `),Tl(590,`em`),cN(591,`checkbox`),ag(),cN(592,`.`),ag()()(),Tl(593,`tr`,17)(594,`td`,18)(595,`div`,26)(596,`span`,27),cN(597,` p-helper`),Gl(598,`br`),ag()()(),Tl(599,`td`,22)(600,`code`,30),cN(601,`PoHelperOptions `),ag(),Tl(602,`code`,28),cN(603,` string`),ag()(),Tl(604,`td`,24),cN(605,`-`),ag(),Tl(606,`td`,25)(607,`em`)(608,`strong`),cN(609,`(opcional)`),ag()(),Tl(610,`p`),cN(611,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(612,`code`),cN(613,`p-label`),ag(),cN(614,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(615,`code`),cN(616,`p-label`),ag(),cN(617,`.`),ag(),Tl(618,`blockquote`)(619,`p`),cN(620,`Para mais informações acesse: `),Tl(621,`a`,31),cN(622,`https://po-ui.io/documentation/po-helper`),ag(),cN(623,`.`),ag()(),Tl(624,`blockquote`)(625,`p`),cN(626,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(627,`code`),cN(628,`p-additional-help-tooltip`),ag(),cN(629,` e `),Tl(630,`code`),cN(631,`p-additional-help`),ag(),cN(632,`) será ignorado.`),ag()()()(),Tl(633,`tr`,17)(634,`td`,18)(635,`div`,26)(636,`span`,27),cN(637,` p-size`),Gl(638,`br`),ag()()(),Tl(639,`td`,22)(640,`code`,28),cN(641,`string`),ag()(),Tl(642,`td`,24)(643,`p`)(644,`code`),cN(645,`medium`),ag()()(),Tl(646,`td`,25)(647,`em`)(648,`strong`),cN(649,`(opcional)`),ag()(),Tl(650,`p`),cN(651,`Define o tamanho da caixa de seleção do componente:`),ag(),Tl(652,`ul`)(653,`li`)(654,`code`),cN(655,`small`),ag(),cN(656,`: 16x16 (disponível apenas para acessibilidade AA).`),ag(),Tl(657,`li`)(658,`code`),cN(659,`medium`),ag(),cN(660,`: 24x24.`),ag(),Tl(661,`li`)(662,`code`),cN(663,`large`),ag(),cN(664,`: 32x32.`),ag()(),Tl(665,`blockquote`)(666,`p`),cN(667,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(668,`code`),cN(669,`medium`),ag(),cN(670,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(671,`a`,32),cN(672,`po-theme`),ag(),cN(673,`.`),ag()()()()(),Tl(674,`h3`,13),cN(675,`Métodos`),ag(),Tl(676,`table`,33)(677,`tr`,17)(678,`th`,34)(679,`div`,26)(680,`h4`)(681,`span`,27),cN(682,` focus `),ag()()()()(),Tl(683,`tr`,25)(684,`td`,25)(685,`p`),cN(686,`Função que atribui foco ao `),Tl(687,`em`),cN(688,`checkbox`),ag(),cN(689,`.`),ag(),Tl(690,`p`),cN(691,`Para utilizá-la é necessário capturar a referência do componente no DOM através do `),Tl(692,`code`),cN(693,`ViewChild`),ag(),cN(694,`, como por exemplo:`),ag(),Tl(695,`pre`)(696,`code`),cN(697,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),ag()()()()(),Gl(698,`br`),Tl(699,`table`,33)(700,`tr`,17)(701,`th`,34)(702,`div`,26)(703,`h4`)(704,`span`,27),cN(705,` showAdditionalHelp `),ag()()()()(),Tl(706,`tr`,25)(707,`td`,25)(708,`p`),cN(709,`Método que exibe `),Tl(710,`code`),cN(711,`p-helper`),ag(),cN(712,` ou executa a ação definida em `),Tl(713,`code`),cN(714,`p-helper{eventOnClick}`),ag(),cN(715,` ou em `),Tl(716,`code`),cN(717,`p-additionalHelp`),ag(),cN(718,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(719,`code`),cN(720,`p-keydown`),ag(),cN(721,`.`),ag(),Tl(722,`blockquote`)(723,`p`),cN(724,`Exibe ou oculta o conteúdo do componente `),Tl(725,`code`),cN(726,`po-helper`),ag(),cN(727,` quando o componente estiver com foco.`),ag()(),Tl(728,`pre`)(729,`code`),cN(730,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),ag()(),Tl(731,`pre`)(732,`code`),cN(733,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(734,`br`),ag())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-checkbox-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-checkbox-basic-view`)(6,`sample-po-checkbox-labs-view`)(7,`sample-po-checkbox-acceptance-term-view`),ag()()()),l&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,ce,ue,he],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[bL.forChild(_e),bL]})}return i})();var $e=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,Ee]})}return i})();export{$e as DocPoCheckboxModule};