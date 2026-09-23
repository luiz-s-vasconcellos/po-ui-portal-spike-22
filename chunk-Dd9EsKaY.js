import{$r as Vx,E as Cp,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,ea as p0,er as FN,ga as w,kn as vr,kr as PN,l as ar,la as tP,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var me=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`checkbox`,`p-label`,`PO Checkbox`]],template:function(l,o){l&1&&ql(0,`po-checkbox`,0)},dependencies:[Cp],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Checkbox Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-checkbox-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.label=void 0,this.size=`medium`,this.compactLabel=!1}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-labs`]],standalone:!1,decls:19,vars:20,consts:[[`f`,`ngForm`],[`name`,`checkbox`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-size`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`labelTextWrap`,`p-label`,`Label Text Wrap`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`compactLabel`,`p-label`,`Compact Label`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Vx();Ml(0,`po-checkbox`,1),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.checkbox,r)||(o.checkbox=r),Jy(r)}),ht(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3),PN(4,`json`),ql(5,`po-info`,4),lg(),ql(6,`po-divider`),Ml(7,`form`,null,0)(9,`div`,2)(10,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.label,r)||(o.label=r),Jy(r)}),lg(),f0(),Ml(11,`po-input`,6),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.help,r)||(o.help=r),Jy(r)}),lg(),f0(),Ml(12,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.helperText,r)||(o.helperText=r),Jy(r)}),lg(),f0(),Ml(13,`po-switch`,8),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.disabled,r)||(o.disabled=r),Jy(r)}),lg(),f0(),Ml(14,`po-switch`,9),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.labelTextWrap,r)||(o.labelTextWrap=r),Jy(r)}),lg(),f0(),Ml(15,`po-switch`,10),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.compactLabel,r)||(o.compactLabel=r),Jy(r)}),lg(),f0(),Ml(16,`po-radio-group`,11),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.size,r)||(o.size=r),Jy(r)}),lg(),f0(),lg(),Ml(17,`div`,2)(18,`po-button`,12),ht(`p-click`,function(){return o.restore()}),lg()()()}l&2&&(Tw(`ngModel`,o.checkbox),cw(`p-helper`,o.helperText)(`p-disabled`,o.disabled)(`p-help`,o.help)(`p-label`,o.label)(`p-size`,o.size)(`p-label-text-wrap`,o.labelTextWrap)(`p-compact-label`,o.compactLabel),p0(),Up(3),cw(`p-value`,FN(4,18,o.checkbox)),Up(2),cw(`p-value`,o.event),Up(5),Tw(`ngModel`,o.label),p0(),Up(),Tw(`ngModel`,o.help),p0(),Up(),Tw(`ngModel`,o.helperText),p0(),Up(),Tw(`ngModel`,o.disabled),p0(),Up(),Tw(`ngModel`,o.labelTextWrap),p0(),Up(),Tw(`ngModel`,o.compactLabel),p0(),Up(),Tw(`ngModel`,o.size),cw(`p-options`,o.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,Cp,lU,q0e,J4,kbe,tP],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Checkbox Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-checkbox
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-checkbox-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:`Confirm`};static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-acceptance-term`]],viewQuery:function(l,o){if(l&1&&Zl(vr,7),l&2){let d;lo(d=uo())&&(o.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[[`modalTerm`,``],[`p-label`,`View term`,3,`p-click`],[`p-title`,`Acceptance Term`,3,`p-primary-action`],[1,`po-row`],[1,`po-sm-12`],[1,`po-font-text-large-bold`],[1,`po-row`,`po-p-1`],[`name`,`acceptance`,`p-label`,`I have read and agree to the terms of service and privacy`,3,`ngModelChange`,`p-change`,`ngModel`]],template:function(l,o){if(l&1){let d=Vx();Ml(0,`po-button`,1),ht(`p-click`,function(){Qy(d);return Jy(Yx(2).open())}),lg(),Ml(1,`po-modal`,2,0)(3,`div`,3)(4,`div`,4)(5,`h3`,5),mN(6,`MIT License`),lg()(),Ml(7,`div`,4)(8,`h4`),mN(9,`Copyright (c) 2019 PO UI`),lg()(),ql(10,`po-divider`,4),Ml(11,`div`,4)(12,`p`),mN(13,` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: `),lg(),ql(14,`br`),Ml(15,`p`),mN(16,` The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. `),lg(),ql(17,`br`),Ml(18,`p`),mN(19,` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `),lg()()(),ql(20,`po-divider`),Ml(21,`div`,6)(22,`po-checkbox`,7),Mw(`ngModelChange`,function(r){return Qy(d),yN(o.acceptance,r)||(o.acceptance=r),Jy(r)}),ht(`p-change`,function(){return o.primaryAction.disabled=!o.acceptance}),lg(),f0(),lg()()}l&2&&(Up(),cw(`p-primary-action`,o.primaryAction),Up(21),Tw(`ngModel`,o.acceptance),p0())},dependencies:[wY,Vk,Zt,nb,Cp,vr],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-acceptance-term-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Checkbox - Acceptance Term`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-checkbox-acceptance-term`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-checkbox-doc`]],standalone:!1,decls:735,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoCheckboxComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O componente `),Ml(24,`code`),mN(25,`po-checkbox`),lg(),mN(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Ml(27,`em`),mN(28,`click`),lg(),mN(29,` do `),Ml(30,`em`),mN(31,`mouse`),lg(),mN(32,` quanto por meio da tecla `),Ml(33,`em`),mN(34,`space`),lg(),mN(35,` quando estiver com foco.`),lg(),Ml(36,`p`),mN(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),lg(),Ml(38,`blockquote`)(39,`p`),mN(40,`O `),Ml(41,`em`),mN(42,`model`),lg(),mN(43,` deste componente aceitará valores igual à `),Ml(44,`code`),mN(45,`true`),lg(),mN(46,`, `),Ml(47,`code`),mN(48,`false`),lg(),mN(49,` ou `),Ml(50,`code`),mN(51,`null`),lg(),mN(52,` para quando for indeterminado/mixed.`),lg()(),Ml(53,`p`)(54,`strong`),mN(55,`Acessibilidade tratada no componente:`),lg()(),Ml(56,`p`),mN(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),lg(),Ml(58,`ul`)(59,`li`),mN(60,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Ml(61,`a`,6),mN(62,`WCAG 4.1.2: Name, Role, Value`),lg()(),Ml(63,`li`),mN(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Ml(65,`a`,7),mN(66,`WCAG 2.4.12: Focus Appearance`),lg()(),Ml(67,`li`),mN(68,`A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. `),Ml(69,`a`,8),mN(70,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),lg()()(),Ml(71,`h4`),mN(72,`Tokens customizáveis`),lg(),Ml(73,`p`),mN(74,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(75,`blockquote`)(76,`p`),mN(77,`Para maiores informações, acesse o guia `),Ml(78,`a`,9),mN(79,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(80,`.`),lg()(),Ml(81,`table`)(82,`thead`)(83,`tr`)(84,`th`),mN(85,`Propriedade`),lg(),Ml(86,`th`),mN(87,`Descrição`),lg(),Ml(88,`th`),mN(89,`Valor Padrão`),lg()()(),Ml(90,`tbody`)(91,`tr`)(92,`td`)(93,`strong`),mN(94,`Default Values`),lg()(),ql(95,`td`)(96,`td`),lg(),Ml(97,`tr`)(98,`td`)(99,`code`),mN(100,`--border-color`),lg()(),Ml(101,`td`),mN(102,`Cor da borda`),lg(),Ml(103,`td`)(104,`code`),mN(105,`var(--color-neutral-dark-70)`),lg()()(),Ml(106,`tr`)(107,`td`)(108,`code`),mN(109,`--color-unchecked`),lg()(),Ml(110,`td`),mN(111,`Cor quando não selecionado`),lg(),Ml(112,`td`)(113,`code`),mN(114,`var(--color-neutral-light-00)`),lg()()(),Ml(115,`tr`)(116,`td`)(117,`code`),mN(118,`--color-checked`),lg()(),Ml(119,`td`),mN(120,`Cor quando selecionado`),lg(),Ml(121,`td`)(122,`code`),mN(123,`var(--color-action-default)`),lg()()(),Ml(124,`tr`)(125,`td`)(126,`code`),mN(127,`--field-container-title-justify`),lg()(),Ml(128,`td`),mN(129,`Alinhamento horizontal do título (`),Ml(130,`code`),mN(131,`justify-content`),lg(),mN(132,`)`),lg(),Ml(133,`td`)(134,`code`),mN(135,`space-between`),lg()()(),Ml(136,`tr`)(137,`td`)(138,`code`),mN(139,`--field-container-title-flex`),lg()(),Ml(140,`td`),mN(141,`Flex do título (`),Ml(142,`code`),mN(143,`flex`),lg(),mN(144,`)`),lg(),Ml(145,`td`)(146,`code`),mN(147,`1 auto`),lg()()(),Ml(148,`tr`)(149,`td`)(150,`strong`),mN(151,`Hover`),lg()(),ql(152,`td`)(153,`td`),lg(),Ml(154,`tr`)(155,`td`)(156,`code`),mN(157,`--color-hover`),lg()(),Ml(158,`td`),mN(159,`Cor principal no estado hover`),lg(),Ml(160,`td`)(161,`code`),mN(162,`var(--color-action-hover)`),lg()()(),Ml(163,`tr`)(164,`td`)(165,`code`),mN(166,`--shadow-color-hover`),lg()(),Ml(167,`td`),mN(168,`Cor da sombra no estado hover`),lg(),Ml(169,`td`)(170,`code`),mN(171,`var(--color-brand-01-lighter)`),lg()()(),Ml(172,`tr`)(173,`td`)(174,`strong`),mN(175,`Focused`),lg()(),ql(176,`td`)(177,`td`),lg(),Ml(178,`tr`)(179,`td`)(180,`code`),mN(181,`--outline-color-focused`),lg()(),Ml(182,`td`),mN(183,`Cor do outline do estado de focus`),lg(),Ml(184,`td`)(185,`code`),mN(186,`var(--color-action-focus)`),lg()()(),Ml(187,`tr`)(188,`td`)(189,`strong`),mN(190,`Disabled`),lg()(),ql(191,`td`)(192,`td`),lg(),Ml(193,`tr`)(194,`td`)(195,`code`),mN(196,`--color-unchecked-disabled`),lg(),mN(197,` \xA0`),lg(),Ml(198,`td`),mN(199,`Cor pricipal quando não selecionado no estado disabled\xA0`),lg(),Ml(200,`td`)(201,`code`),mN(202,`var(--color-action-disabled)`),lg()()(),Ml(203,`tr`)(204,`td`)(205,`code`),mN(206,`--color-checked-disabled`),lg(),mN(207,` \xA0`),lg(),Ml(208,`td`),mN(209,`Cor pricipal quando selecionado no estado disabled`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--color-neutral-dark-70)`),lg()()()()()(),Ml(213,`div`,10)(214,`h4`,11),mN(215,`Seletor`),lg(),Ml(216,`pre`,12),mN(217,`<po-checkbox
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
`),lg()(),Ml(218,`h4`,13),mN(219,`Propriedades`),lg(),Ml(220,`table`,14)(221,`tr`,15)(222,`th`,16),mN(223,`Nome`),lg(),Ml(224,`th`,16),mN(225,`Tipo`),lg(),Ml(226,`th`,16),mN(227,`Padrão`),lg(),Ml(228,`th`,16),mN(229,`Descrição`),lg()(),Ml(230,`tr`,17)(231,`td`,18)(232,`div`,19)(233,`span`,20),mN(234,` (p-additional-help)`),ql(235,`br`),lg()(),Ml(236,`div`,21),mN(237,`Deprecated`),lg()(),Ml(238,`td`,22)(239,`code`,23),mN(240,`EventEmitter`),lg()(),Ml(241,`td`,24),mN(242,`-`),lg(),Ml(243,`td`,25)(244,`em`)(245,`strong`),mN(246,`(opcional)`),lg()(),Ml(247,`p`),mN(248,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(249,`blockquote`)(250,`p`),mN(251,`Essa propriedade está `),Ml(252,`strong`),mN(253,`depreciada`),lg(),mN(254,` e será removida na versão `),Ml(255,`code`),mN(256,`23.x.x`),lg(),mN(257,`. Recomendamos utilizar a propriedade `),Ml(258,`code`),mN(259,`p-helper`),lg(),mN(260,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(261,`tr`,17)(262,`td`,18)(263,`div`,26)(264,`span`,27),mN(265,` p-additional-help-tooltip`),ql(266,`br`),lg()(),Ml(267,`div`,21),mN(268,`Deprecated`),lg()(),Ml(269,`td`,22)(270,`code`,28),mN(271,`string`),lg()(),Ml(272,`td`,24),mN(273,`-`),lg(),Ml(274,`td`,25)(275,`em`)(276,`strong`),mN(277,`(opcional)`),lg()(),Ml(278,`p`),mN(279,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(280,`code`),mN(281,`po-helper`),lg(),mN(282,`.
`),Ml(283,`strong`),mN(284,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(285,`blockquote`)(286,`p`),mN(287,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(288,`blockquote`)(289,`p`),mN(290,`Essa propriedade está `),Ml(291,`strong`),mN(292,`depreciada`),lg(),mN(293,` e será removida na versão `),Ml(294,`code`),mN(295,`23.x.x`),lg(),mN(296,`. Recomendamos utilizar a propriedade `),Ml(297,`code`),mN(298,`p-helper`),lg(),mN(299,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(300,`tr`,17)(301,`td`,18)(302,`div`,26)(303,`span`,27),mN(304,` p-append-in-body`),ql(305,`br`),lg()()(),Ml(306,`td`,22)(307,`code`,29),mN(308,`boolean`),lg()(),Ml(309,`td`,24)(310,`p`)(311,`code`),mN(312,`false`),lg()()(),Ml(313,`td`,25)(314,`em`)(315,`strong`),mN(316,`(opcional)`),lg()(),Ml(317,`p`),mN(318,`Define que o popover (`),Ml(319,`code`),mN(320,`p-helper`),lg(),mN(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(322,`blockquote`)(323,`p`),mN(324,`Quando utilizado com `),Ml(325,`code`),mN(326,`p-helper`),lg(),mN(327,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(328,`tr`,17)(329,`td`,18)(330,`div`,26)(331,`span`,27),mN(332,` p-auto-focus`),ql(333,`br`),lg()()(),Ml(334,`td`,22)(335,`code`,29),mN(336,`boolean`),lg()(),Ml(337,`td`,24)(338,`p`)(339,`code`),mN(340,`false`),lg()()(),Ml(341,`td`,25)(342,`em`)(343,`strong`),mN(344,`(opcional)`),lg()(),Ml(345,`p`),mN(346,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(347,`blockquote`)(348,`p`),mN(349,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(350,`tr`,17)(351,`td`,18)(352,`div`,19)(353,`span`,20),mN(354,` (p-blur)`),ql(355,`br`),lg()()(),Ml(356,`td`,22)(357,`code`,23),mN(358,`EventEmitter`),lg()(),Ml(359,`td`,24),mN(360,`-`),lg(),Ml(361,`td`,25)(362,`em`)(363,`strong`),mN(364,`(opcional)`),lg()(),Ml(365,`p`),mN(366,`Evento disparado ao sair do campo.`),lg()()(),Ml(367,`tr`,17)(368,`td`,18)(369,`div`,19)(370,`span`,20),mN(371,` (p-change)`),ql(372,`br`),lg()()(),Ml(373,`td`,22)(374,`code`,23),mN(375,`EventEmitter`),lg()(),Ml(376,`td`,24),mN(377,`-`),lg(),Ml(378,`td`,25)(379,`em`)(380,`strong`),mN(381,`(opcional)`),lg()(),Ml(382,`p`),mN(383,`Evento disparado quando o valor do `),Ml(384,`em`),mN(385,`checkbox`),lg(),mN(386,` for alterado.`),lg()()(),Ml(387,`tr`,17)(388,`td`,18)(389,`div`,19)(390,`span`,20),mN(391,` (p-change-model)`),ql(392,`br`),lg()()(),Ml(393,`td`,22)(394,`code`,23),mN(395,`EventEmitter`),lg()(),Ml(396,`td`,24),mN(397,`-`),lg(),Ml(398,`td`,25)(399,`em`)(400,`strong`),mN(401,`(opcional)`),lg()(),Ml(402,`p`),mN(403,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(404,`code`),mN(405,`setValue`),lg(),mN(406,`, `),Ml(407,`code`),mN(408,`patchValue`),lg(),mN(409,`, carregamento assíncrono).`),lg(),Ml(410,`p`),mN(411,`Diferentemente do `),Ml(412,`code`),mN(413,`p-change`),lg(),mN(414,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(415,`code`),mN(416,`p-change-model`),lg(),mN(417,` cobre todos os cenários de alteração de valor.`),lg(),Ml(418,`p`),mN(419,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(420,`tr`,17)(421,`td`,18)(422,`div`,26)(423,`span`,27),mN(424,` p-compact-label`),ql(425,`br`),lg()()(),Ml(426,`td`,22)(427,`code`,29),mN(428,`boolean`),lg()(),Ml(429,`td`,24)(430,`p`)(431,`code`),mN(432,`false`),lg()()(),Ml(433,`td`,25)(434,`em`)(435,`strong`),mN(436,`(opcional)`),lg()(),Ml(437,`p`),mN(438,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(439,`p`),mN(440,`Quando habilitado (`),Ml(441,`code`),mN(442,`true`),lg(),mN(443,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(444,`ul`)(445,`li`)(446,`code`),mN(447,`po-label`),lg()(),Ml(448,`li`)(449,`code`),mN(450,`p-requirement (showRequired)`),lg()(),Ml(451,`li`)(452,`code`),mN(453,`po-helper`),lg()()(),Ml(454,`p`),mN(455,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(456,`p`),mN(457,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(458,`ul`)(459,`li`)(460,`code`),mN(461,`--field-container-title-justify`),lg()(),Ml(462,`li`)(463,`code`),mN(464,`--field-container-title-flex`),lg()()(),Ml(465,`p`),mN(466,`Exemplo:`),lg(),Ml(467,`pre`)(468,`code`),mN(469,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(470,`p`),mN(471,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(472,`tr`,17)(473,`td`,18)(474,`div`,26)(475,`span`,27),mN(476,` p-disabled`),ql(477,`br`),lg()()(),Ml(478,`td`,22)(479,`code`,29),mN(480,`boolean`),lg()(),Ml(481,`td`,24)(482,`p`)(483,`code`),mN(484,`false`),lg()()(),Ml(485,`td`,25)(486,`em`)(487,`strong`),mN(488,`(opcional)`),lg()(),Ml(489,`p`),mN(490,`Define o estado do `),Ml(491,`em`),mN(492,`checkbox`),lg(),mN(493,` como desabilitado.`),lg()()(),Ml(494,`tr`,17)(495,`td`,18)(496,`div`,26)(497,`span`,27),mN(498,` p-help`),ql(499,`br`),lg()()(),Ml(500,`td`,22)(501,`code`,28),mN(502,`string`),lg()(),Ml(503,`td`,24),mN(504,`-`),lg(),Ml(505,`td`,25)(506,`em`)(507,`strong`),mN(508,`(opcional)`),lg()(),Ml(509,`p`),mN(510,`Texto de apoio do campo`),lg()()(),Ml(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),mN(515,` (p-keydown)`),ql(516,`br`),lg()()(),Ml(517,`td`,22)(518,`code`,23),mN(519,`EventEmitter`),lg()(),Ml(520,`td`,24),mN(521,`-`),lg(),Ml(522,`td`,25)(523,`em`)(524,`strong`),mN(525,`(opcional)`),lg()(),Ml(526,`p`),mN(527,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(528,`code`),mN(529,`KeyboardEvent`),lg(),mN(530,` com informações sobre a tecla.`),lg()()(),Ml(531,`tr`,17)(532,`td`,18)(533,`div`,26)(534,`span`,27),mN(535,` p-label`),ql(536,`br`),lg()()(),Ml(537,`td`,22)(538,`code`,28),mN(539,`string`),lg()(),Ml(540,`td`,24),mN(541,`-`),lg(),Ml(542,`td`,25)(543,`em`)(544,`strong`),mN(545,`(opcional)`),lg()(),Ml(546,`p`),mN(547,`Texto de exibição do `),Ml(548,`em`),mN(549,`checkbox`),lg(),mN(550,`.`),lg()()(),Ml(551,`tr`,17)(552,`td`,18)(553,`div`,26)(554,`span`,27),mN(555,` p-label-text-wrap`),ql(556,`br`),lg()()(),Ml(557,`td`,22)(558,`code`,29),mN(559,`boolean`),lg()(),Ml(560,`td`,24)(561,`p`)(562,`code`),mN(563,`false`),lg()()(),Ml(564,`td`,25)(565,`em`)(566,`strong`),mN(567,`(opcional)`),lg()(),Ml(568,`p`),mN(569,`Habilita a quebra automática do texto da propriedade `),Ml(570,`code`),mN(571,`p-label`),lg(),mN(572,`. Quando `),Ml(573,`code`),mN(574,`p-label-text-wrap`),lg(),mN(575,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(576,`tr`,17)(577,`td`,18)(578,`div`,26)(579,`span`,27),mN(580,` name`),ql(581,`br`),lg()()(),Ml(582,`td`,22)(583,`code`,28),mN(584,`string`),lg()(),Ml(585,`td`,24),mN(586,`-`),lg(),Ml(587,`td`,25)(588,`p`),mN(589,`Define o nome do `),Ml(590,`em`),mN(591,`checkbox`),lg(),mN(592,`.`),lg()()(),Ml(593,`tr`,17)(594,`td`,18)(595,`div`,26)(596,`span`,27),mN(597,` p-helper`),ql(598,`br`),lg()()(),Ml(599,`td`,22)(600,`code`,30),mN(601,`PoHelperOptions `),lg(),Ml(602,`code`,28),mN(603,` string`),lg()(),Ml(604,`td`,24),mN(605,`-`),lg(),Ml(606,`td`,25)(607,`em`)(608,`strong`),mN(609,`(opcional)`),lg()(),Ml(610,`p`),mN(611,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(612,`code`),mN(613,`p-label`),lg(),mN(614,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(615,`code`),mN(616,`p-label`),lg(),mN(617,`.`),lg(),Ml(618,`blockquote`)(619,`p`),mN(620,`Para mais informações acesse: `),Ml(621,`a`,31),mN(622,`https://po-ui.io/documentation/po-helper`),lg(),mN(623,`.`),lg()(),Ml(624,`blockquote`)(625,`p`),mN(626,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(627,`code`),mN(628,`p-additional-help-tooltip`),lg(),mN(629,` e `),Ml(630,`code`),mN(631,`p-additional-help`),lg(),mN(632,`) será ignorado.`),lg()()()(),Ml(633,`tr`,17)(634,`td`,18)(635,`div`,26)(636,`span`,27),mN(637,` p-size`),ql(638,`br`),lg()()(),Ml(639,`td`,22)(640,`code`,28),mN(641,`string`),lg()(),Ml(642,`td`,24)(643,`p`)(644,`code`),mN(645,`medium`),lg()()(),Ml(646,`td`,25)(647,`em`)(648,`strong`),mN(649,`(opcional)`),lg()(),Ml(650,`p`),mN(651,`Define o tamanho da caixa de seleção do componente:`),lg(),Ml(652,`ul`)(653,`li`)(654,`code`),mN(655,`small`),lg(),mN(656,`: 16x16 (disponível apenas para acessibilidade AA).`),lg(),Ml(657,`li`)(658,`code`),mN(659,`medium`),lg(),mN(660,`: 24x24.`),lg(),Ml(661,`li`)(662,`code`),mN(663,`large`),lg(),mN(664,`: 32x32.`),lg()(),Ml(665,`blockquote`)(666,`p`),mN(667,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(668,`code`),mN(669,`medium`),lg(),mN(670,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(671,`a`,32),mN(672,`po-theme`),lg(),mN(673,`.`),lg()()()()(),Ml(674,`h3`,13),mN(675,`Métodos`),lg(),Ml(676,`table`,33)(677,`tr`,17)(678,`th`,34)(679,`div`,26)(680,`h4`)(681,`span`,27),mN(682,` focus `),lg()()()()(),Ml(683,`tr`,25)(684,`td`,25)(685,`p`),mN(686,`Função que atribui foco ao `),Ml(687,`em`),mN(688,`checkbox`),lg(),mN(689,`.`),lg(),Ml(690,`p`),mN(691,`Para utilizá-la é necessário capturar a referência do componente no DOM através do `),Ml(692,`code`),mN(693,`ViewChild`),lg(),mN(694,`, como por exemplo:`),lg(),Ml(695,`pre`)(696,`code`),mN(697,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),lg()()()()(),ql(698,`br`),Ml(699,`table`,33)(700,`tr`,17)(701,`th`,34)(702,`div`,26)(703,`h4`)(704,`span`,27),mN(705,` showAdditionalHelp `),lg()()()()(),Ml(706,`tr`,25)(707,`td`,25)(708,`p`),mN(709,`Método que exibe `),Ml(710,`code`),mN(711,`p-helper`),lg(),mN(712,` ou executa a ação definida em `),Ml(713,`code`),mN(714,`p-helper{eventOnClick}`),lg(),mN(715,` ou em `),Ml(716,`code`),mN(717,`p-additionalHelp`),lg(),mN(718,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(719,`code`),mN(720,`p-keydown`),lg(),mN(721,`.`),lg(),Ml(722,`blockquote`)(723,`p`),mN(724,`Exibe ou oculta o conteúdo do componente `),Ml(725,`code`),mN(726,`po-helper`),lg(),mN(727,` quando o componente estiver com foco.`),lg()(),Ml(728,`pre`)(729,`code`),mN(730,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),lg()(),Ml(731,`pre`)(732,`code`),mN(733,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(734,`br`),lg())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-checkbox-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-checkbox-basic-view`)(6,`sample-po-checkbox-labs-view`)(7,`sample-po-checkbox-acceptance-term-view`),lg()()()),l&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,ce,ue,he],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[NL.forChild(_e),NL]})}return i})();var $e=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,Ee]})}return i})();export{$e as DocPoCheckboxModule};