import{Br as RE,Di as he$1,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,O as Dc,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Wi as mg,Xn as C9,Yn as Bx,Zr as VN,ai as aN,an as p4,ar as FN,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,ki as ho,la as ug,li as cE,lr as Hn,na as rk,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue$1,tr as DN,un as roe,vr as Jv,wt as _4,xi as fo}from"./main-VW33P2VM.js";var me=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-checkbox-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`checkbox`,`p-label`,`PO Checkbox`]],template:function(l,o){l&1&&Kc(0,`po-checkbox`,0)},dependencies:[Dc],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-checkbox-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Checkbox Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-checkbox-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,me],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.label=void 0,this.size=`medium`,this.compactLabel=!1}static ɵfac=function(l){return new(l||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-checkbox-labs`]],standalone:!1,decls:19,vars:20,consts:[[`f`,`ngForm`],[`name`,`checkbox`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-size`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`labelTextWrap`,`p-label`,`Label Text Wrap`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`compactLabel`,`p-label`,`Compact Label`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Bx();Ac(0,`po-checkbox`,1),RE(`ngModelChange`,function(r){return Jv(d),DN(o.checkbox,r)||(o.checkbox=r),e_(r)}),pt(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3),FN(4,`json`),Kc(5,`po-info`,4),ug(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`div`,2)(10,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(d),DN(o.label,r)||(o.label=r),e_(r)}),ug(),p0(),Ac(11,`po-input`,6),RE(`ngModelChange`,function(r){return Jv(d),DN(o.help,r)||(o.help=r),e_(r)}),ug(),p0(),Ac(12,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(d),DN(o.helperText,r)||(o.helperText=r),e_(r)}),ug(),p0(),Ac(13,`po-switch`,8),RE(`ngModelChange`,function(r){return Jv(d),DN(o.disabled,r)||(o.disabled=r),e_(r)}),ug(),p0(),Ac(14,`po-switch`,9),RE(`ngModelChange`,function(r){return Jv(d),DN(o.labelTextWrap,r)||(o.labelTextWrap=r),e_(r)}),ug(),p0(),Ac(15,`po-switch`,10),RE(`ngModelChange`,function(r){return Jv(d),DN(o.compactLabel,r)||(o.compactLabel=r),e_(r)}),ug(),p0(),Ac(16,`po-radio-group`,11),RE(`ngModelChange`,function(r){return Jv(d),DN(o.size,r)||(o.size=r),e_(r)}),ug(),p0(),ug(),Ac(17,`div`,2)(18,`po-button`,12),pt(`p-click`,function(){return o.restore()}),ug()()()}l&2&&(TE(`ngModel`,o.checkbox),cE(`p-helper`,o.helperText)(`p-disabled`,o.disabled)(`p-help`,o.help)(`p-label`,o.label)(`p-size`,o.size)(`p-label-text-wrap`,o.labelTextWrap)(`p-compact-label`,o.compactLabel),m0(),Hp(3),cE(`p-value`,VN(4,18,o.checkbox)),Hp(2),cE(`p-value`,o.event),Hp(5),TE(`ngModel`,o.label),m0(),Hp(),TE(`ngModel`,o.help),m0(),Hp(),TE(`ngModel`,o.helperText),m0(),Hp(),TE(`ngModel`,o.disabled),m0(),Hp(),TE(`ngModel`,o.labelTextWrap),m0(),Hp(),TE(`ngModel`,o.compactLabel),m0(),Hp(),TE(`ngModel`,o.size),cE(`p-options`,o.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,Dc,_4,Cte,p4,roe,rk],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-checkbox-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Checkbox Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-checkbox
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-checkbox-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,de],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:`Confirm`};static ɵfac=function(l){return new(l||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-checkbox-acceptance-term`]],viewQuery:function(l,o){if(l&1&&Xc(wa,7),l&2){let d;fo(d=ho())&&(o.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[[`modalTerm`,``],[`p-label`,`View term`,3,`p-click`],[`p-title`,`Acceptance Term`,3,`p-primary-action`],[1,`po-row`],[1,`po-sm-12`],[1,`po-font-text-large-bold`],[1,`po-row`,`po-p-1`],[`name`,`acceptance`,`p-label`,`I have read and agree to the terms of service and privacy`,3,`ngModelChange`,`p-change`,`ngModel`]],template:function(l,o){if(l&1){let d=Bx();Ac(0,`po-button`,1),pt(`p-click`,function(){Jv(d);let r=Zx(2);return e_(r.open())}),ug(),Ac(1,`po-modal`,2,0)(3,`div`,3)(4,`div`,4)(5,`h3`,5),vN(6,`MIT License`),ug()(),Ac(7,`div`,4)(8,`h4`),vN(9,`Copyright (c) 2019 PO UI`),ug()(),Kc(10,`po-divider`,4),Ac(11,`div`,4)(12,`p`),vN(13,` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: `),ug(),Kc(14,`br`),Ac(15,`p`),vN(16,` The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. `),ug(),Kc(17,`br`),Ac(18,`p`),vN(19,` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `),ug()()(),Kc(20,`po-divider`),Ac(21,`div`,6)(22,`po-checkbox`,7),RE(`ngModelChange`,function(r){return Jv(d),DN(o.acceptance,r)||(o.acceptance=r),e_(r)}),pt(`p-change`,function(){return o.primaryAction.disabled=!o.acceptance}),ug(),p0(),ug()()}l&2&&(Hp(),cE(`p-primary-action`,o.primaryAction),Hp(21),TE(`ngModel`,o.acceptance),m0())},dependencies:[D9,BP,ni,ob,Dc,wa],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-checkbox-acceptance-term-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Checkbox - Acceptance Term`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-checkbox-acceptance-term`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-checkbox-doc`]],standalone:!1,decls:735,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoCheckboxComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O componente `),Ac(24,`code`),vN(25,`po-checkbox`),ug(),vN(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Ac(27,`em`),vN(28,`click`),ug(),vN(29,` do `),Ac(30,`em`),vN(31,`mouse`),ug(),vN(32,` quanto por meio da tecla `),Ac(33,`em`),vN(34,`space`),ug(),vN(35,` quando estiver com foco.`),ug(),Ac(36,`p`),vN(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),ug(),Ac(38,`blockquote`)(39,`p`),vN(40,`O `),Ac(41,`em`),vN(42,`model`),ug(),vN(43,` deste componente aceitará valores igual à `),Ac(44,`code`),vN(45,`true`),ug(),vN(46,`, `),Ac(47,`code`),vN(48,`false`),ug(),vN(49,` ou `),Ac(50,`code`),vN(51,`null`),ug(),vN(52,` para quando for indeterminado/mixed.`),ug()(),Ac(53,`p`)(54,`strong`),vN(55,`Acessibilidade tratada no componente:`),ug()(),Ac(56,`p`),vN(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ug(),Ac(58,`ul`)(59,`li`),vN(60,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Ac(61,`a`,6),vN(62,`WCAG 4.1.2: Name, Role, Value`),ug()(),Ac(63,`li`),vN(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Ac(65,`a`,7),vN(66,`WCAG 2.4.12: Focus Appearance`),ug()(),Ac(67,`li`),vN(68,`A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. `),Ac(69,`a`,8),vN(70,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),ug()()(),Ac(71,`h4`),vN(72,`Tokens customizáveis`),ug(),Ac(73,`p`),vN(74,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(75,`blockquote`)(76,`p`),vN(77,`Para maiores informações, acesse o guia `),Ac(78,`a`,9),vN(79,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(80,`.`),ug()(),Ac(81,`table`)(82,`thead`)(83,`tr`)(84,`th`),vN(85,`Propriedade`),ug(),Ac(86,`th`),vN(87,`Descrição`),ug(),Ac(88,`th`),vN(89,`Valor Padrão`),ug()()(),Ac(90,`tbody`)(91,`tr`)(92,`td`)(93,`strong`),vN(94,`Default Values`),ug()(),Kc(95,`td`)(96,`td`),ug(),Ac(97,`tr`)(98,`td`)(99,`code`),vN(100,`--border-color`),ug()(),Ac(101,`td`),vN(102,`Cor da borda`),ug(),Ac(103,`td`)(104,`code`),vN(105,`var(--color-neutral-dark-70)`),ug()()(),Ac(106,`tr`)(107,`td`)(108,`code`),vN(109,`--color-unchecked`),ug()(),Ac(110,`td`),vN(111,`Cor quando não selecionado`),ug(),Ac(112,`td`)(113,`code`),vN(114,`var(--color-neutral-light-00)`),ug()()(),Ac(115,`tr`)(116,`td`)(117,`code`),vN(118,`--color-checked`),ug()(),Ac(119,`td`),vN(120,`Cor quando selecionado`),ug(),Ac(121,`td`)(122,`code`),vN(123,`var(--color-action-default)`),ug()()(),Ac(124,`tr`)(125,`td`)(126,`code`),vN(127,`--field-container-title-justify`),ug()(),Ac(128,`td`),vN(129,`Alinhamento horizontal do título (`),Ac(130,`code`),vN(131,`justify-content`),ug(),vN(132,`)`),ug(),Ac(133,`td`)(134,`code`),vN(135,`space-between`),ug()()(),Ac(136,`tr`)(137,`td`)(138,`code`),vN(139,`--field-container-title-flex`),ug()(),Ac(140,`td`),vN(141,`Flex do título (`),Ac(142,`code`),vN(143,`flex`),ug(),vN(144,`)`),ug(),Ac(145,`td`)(146,`code`),vN(147,`1 auto`),ug()()(),Ac(148,`tr`)(149,`td`)(150,`strong`),vN(151,`Hover`),ug()(),Kc(152,`td`)(153,`td`),ug(),Ac(154,`tr`)(155,`td`)(156,`code`),vN(157,`--color-hover`),ug()(),Ac(158,`td`),vN(159,`Cor principal no estado hover`),ug(),Ac(160,`td`)(161,`code`),vN(162,`var(--color-action-hover)`),ug()()(),Ac(163,`tr`)(164,`td`)(165,`code`),vN(166,`--shadow-color-hover`),ug()(),Ac(167,`td`),vN(168,`Cor da sombra no estado hover`),ug(),Ac(169,`td`)(170,`code`),vN(171,`var(--color-brand-01-lighter)`),ug()()(),Ac(172,`tr`)(173,`td`)(174,`strong`),vN(175,`Focused`),ug()(),Kc(176,`td`)(177,`td`),ug(),Ac(178,`tr`)(179,`td`)(180,`code`),vN(181,`--outline-color-focused`),ug()(),Ac(182,`td`),vN(183,`Cor do outline do estado de focus`),ug(),Ac(184,`td`)(185,`code`),vN(186,`var(--color-action-focus)`),ug()()(),Ac(187,`tr`)(188,`td`)(189,`strong`),vN(190,`Disabled`),ug()(),Kc(191,`td`)(192,`td`),ug(),Ac(193,`tr`)(194,`td`)(195,`code`),vN(196,`--color-unchecked-disabled`),ug(),vN(197,` \xA0`),ug(),Ac(198,`td`),vN(199,`Cor pricipal quando não selecionado no estado disabled\xA0`),ug(),Ac(200,`td`)(201,`code`),vN(202,`var(--color-action-disabled)`),ug()()(),Ac(203,`tr`)(204,`td`)(205,`code`),vN(206,`--color-checked-disabled`),ug(),vN(207,` \xA0`),ug(),Ac(208,`td`),vN(209,`Cor pricipal quando selecionado no estado disabled`),ug(),Ac(210,`td`)(211,`code`),vN(212,`var(--color-neutral-dark-70)`),ug()()()()()(),Ac(213,`div`,10)(214,`h4`,11),vN(215,`Seletor`),ug(),Ac(216,`pre`,12),vN(217,`<po-checkbox
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
`),ug()(),Ac(218,`h4`,13),vN(219,`Propriedades`),ug(),Ac(220,`table`,14)(221,`tr`,15)(222,`th`,16),vN(223,`Nome`),ug(),Ac(224,`th`,16),vN(225,`Tipo`),ug(),Ac(226,`th`,16),vN(227,`Padrão`),ug(),Ac(228,`th`,16),vN(229,`Descrição`),ug()(),Ac(230,`tr`,17)(231,`td`,18)(232,`div`,19)(233,`span`,20),vN(234,` (p-additional-help)`),Kc(235,`br`),ug()(),Ac(236,`div`,21),vN(237,`Deprecated`),ug()(),Ac(238,`td`,22)(239,`code`,23),vN(240,`EventEmitter`),ug()(),Ac(241,`td`,24),vN(242,`-`),ug(),Ac(243,`td`,25)(244,`em`)(245,`strong`),vN(246,`(opcional)`),ug()(),Ac(247,`p`),vN(248,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(249,`blockquote`)(250,`p`),vN(251,`Essa propriedade está `),Ac(252,`strong`),vN(253,`depreciada`),ug(),vN(254,` e será removida na versão `),Ac(255,`code`),vN(256,`23.x.x`),ug(),vN(257,`. Recomendamos utilizar a propriedade `),Ac(258,`code`),vN(259,`p-helper`),ug(),vN(260,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(261,`tr`,17)(262,`td`,18)(263,`div`,26)(264,`span`,27),vN(265,` p-additional-help-tooltip`),Kc(266,`br`),ug()(),Ac(267,`div`,21),vN(268,`Deprecated`),ug()(),Ac(269,`td`,22)(270,`code`,28),vN(271,`string`),ug()(),Ac(272,`td`,24),vN(273,`-`),ug(),Ac(274,`td`,25)(275,`em`)(276,`strong`),vN(277,`(opcional)`),ug()(),Ac(278,`p`),vN(279,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(280,`code`),vN(281,`po-helper`),ug(),vN(282,`.
`),Ac(283,`strong`),vN(284,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(285,`blockquote`)(286,`p`),vN(287,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(288,`blockquote`)(289,`p`),vN(290,`Essa propriedade está `),Ac(291,`strong`),vN(292,`depreciada`),ug(),vN(293,` e será removida na versão `),Ac(294,`code`),vN(295,`23.x.x`),ug(),vN(296,`. Recomendamos utilizar a propriedade `),Ac(297,`code`),vN(298,`p-helper`),ug(),vN(299,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(300,`tr`,17)(301,`td`,18)(302,`div`,26)(303,`span`,27),vN(304,` p-append-in-body`),Kc(305,`br`),ug()()(),Ac(306,`td`,22)(307,`code`,29),vN(308,`boolean`),ug()(),Ac(309,`td`,24)(310,`p`)(311,`code`),vN(312,`false`),ug()()(),Ac(313,`td`,25)(314,`em`)(315,`strong`),vN(316,`(opcional)`),ug()(),Ac(317,`p`),vN(318,`Define que o popover (`),Ac(319,`code`),vN(320,`p-helper`),ug(),vN(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(322,`blockquote`)(323,`p`),vN(324,`Quando utilizado com `),Ac(325,`code`),vN(326,`p-helper`),ug(),vN(327,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(328,`tr`,17)(329,`td`,18)(330,`div`,26)(331,`span`,27),vN(332,` p-auto-focus`),Kc(333,`br`),ug()()(),Ac(334,`td`,22)(335,`code`,29),vN(336,`boolean`),ug()(),Ac(337,`td`,24)(338,`p`)(339,`code`),vN(340,`false`),ug()()(),Ac(341,`td`,25)(342,`em`)(343,`strong`),vN(344,`(opcional)`),ug()(),Ac(345,`p`),vN(346,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(347,`blockquote`)(348,`p`),vN(349,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(350,`tr`,17)(351,`td`,18)(352,`div`,19)(353,`span`,20),vN(354,` (p-blur)`),Kc(355,`br`),ug()()(),Ac(356,`td`,22)(357,`code`,23),vN(358,`EventEmitter`),ug()(),Ac(359,`td`,24),vN(360,`-`),ug(),Ac(361,`td`,25)(362,`em`)(363,`strong`),vN(364,`(opcional)`),ug()(),Ac(365,`p`),vN(366,`Evento disparado ao sair do campo.`),ug()()(),Ac(367,`tr`,17)(368,`td`,18)(369,`div`,19)(370,`span`,20),vN(371,` (p-change)`),Kc(372,`br`),ug()()(),Ac(373,`td`,22)(374,`code`,23),vN(375,`EventEmitter`),ug()(),Ac(376,`td`,24),vN(377,`-`),ug(),Ac(378,`td`,25)(379,`em`)(380,`strong`),vN(381,`(opcional)`),ug()(),Ac(382,`p`),vN(383,`Evento disparado quando o valor do `),Ac(384,`em`),vN(385,`checkbox`),ug(),vN(386,` for alterado.`),ug()()(),Ac(387,`tr`,17)(388,`td`,18)(389,`div`,19)(390,`span`,20),vN(391,` (p-change-model)`),Kc(392,`br`),ug()()(),Ac(393,`td`,22)(394,`code`,23),vN(395,`EventEmitter`),ug()(),Ac(396,`td`,24),vN(397,`-`),ug(),Ac(398,`td`,25)(399,`em`)(400,`strong`),vN(401,`(opcional)`),ug()(),Ac(402,`p`),vN(403,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(404,`code`),vN(405,`setValue`),ug(),vN(406,`, `),Ac(407,`code`),vN(408,`patchValue`),ug(),vN(409,`, carregamento assíncrono).`),ug(),Ac(410,`p`),vN(411,`Diferentemente do `),Ac(412,`code`),vN(413,`p-change`),ug(),vN(414,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(415,`code`),vN(416,`p-change-model`),ug(),vN(417,` cobre todos os cenários de alteração de valor.`),ug(),Ac(418,`p`),vN(419,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(420,`tr`,17)(421,`td`,18)(422,`div`,26)(423,`span`,27),vN(424,` p-compact-label`),Kc(425,`br`),ug()()(),Ac(426,`td`,22)(427,`code`,29),vN(428,`boolean`),ug()(),Ac(429,`td`,24)(430,`p`)(431,`code`),vN(432,`false`),ug()()(),Ac(433,`td`,25)(434,`em`)(435,`strong`),vN(436,`(opcional)`),ug()(),Ac(437,`p`),vN(438,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(439,`p`),vN(440,`Quando habilitado (`),Ac(441,`code`),vN(442,`true`),ug(),vN(443,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(444,`ul`)(445,`li`)(446,`code`),vN(447,`po-label`),ug()(),Ac(448,`li`)(449,`code`),vN(450,`p-requirement (showRequired)`),ug()(),Ac(451,`li`)(452,`code`),vN(453,`po-helper`),ug()()(),Ac(454,`p`),vN(455,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(456,`p`),vN(457,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(458,`ul`)(459,`li`)(460,`code`),vN(461,`--field-container-title-justify`),ug()(),Ac(462,`li`)(463,`code`),vN(464,`--field-container-title-flex`),ug()()(),Ac(465,`p`),vN(466,`Exemplo:`),ug(),Ac(467,`pre`)(468,`code`),vN(469,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(470,`p`),vN(471,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(472,`tr`,17)(473,`td`,18)(474,`div`,26)(475,`span`,27),vN(476,` p-disabled`),Kc(477,`br`),ug()()(),Ac(478,`td`,22)(479,`code`,29),vN(480,`boolean`),ug()(),Ac(481,`td`,24)(482,`p`)(483,`code`),vN(484,`false`),ug()()(),Ac(485,`td`,25)(486,`em`)(487,`strong`),vN(488,`(opcional)`),ug()(),Ac(489,`p`),vN(490,`Define o estado do `),Ac(491,`em`),vN(492,`checkbox`),ug(),vN(493,` como desabilitado.`),ug()()(),Ac(494,`tr`,17)(495,`td`,18)(496,`div`,26)(497,`span`,27),vN(498,` p-help`),Kc(499,`br`),ug()()(),Ac(500,`td`,22)(501,`code`,28),vN(502,`string`),ug()(),Ac(503,`td`,24),vN(504,`-`),ug(),Ac(505,`td`,25)(506,`em`)(507,`strong`),vN(508,`(opcional)`),ug()(),Ac(509,`p`),vN(510,`Texto de apoio do campo`),ug()()(),Ac(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),vN(515,` (p-keydown)`),Kc(516,`br`),ug()()(),Ac(517,`td`,22)(518,`code`,23),vN(519,`EventEmitter`),ug()(),Ac(520,`td`,24),vN(521,`-`),ug(),Ac(522,`td`,25)(523,`em`)(524,`strong`),vN(525,`(opcional)`),ug()(),Ac(526,`p`),vN(527,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(528,`code`),vN(529,`KeyboardEvent`),ug(),vN(530,` com informações sobre a tecla.`),ug()()(),Ac(531,`tr`,17)(532,`td`,18)(533,`div`,26)(534,`span`,27),vN(535,` p-label`),Kc(536,`br`),ug()()(),Ac(537,`td`,22)(538,`code`,28),vN(539,`string`),ug()(),Ac(540,`td`,24),vN(541,`-`),ug(),Ac(542,`td`,25)(543,`em`)(544,`strong`),vN(545,`(opcional)`),ug()(),Ac(546,`p`),vN(547,`Texto de exibição do `),Ac(548,`em`),vN(549,`checkbox`),ug(),vN(550,`.`),ug()()(),Ac(551,`tr`,17)(552,`td`,18)(553,`div`,26)(554,`span`,27),vN(555,` p-label-text-wrap`),Kc(556,`br`),ug()()(),Ac(557,`td`,22)(558,`code`,29),vN(559,`boolean`),ug()(),Ac(560,`td`,24)(561,`p`)(562,`code`),vN(563,`false`),ug()()(),Ac(564,`td`,25)(565,`em`)(566,`strong`),vN(567,`(opcional)`),ug()(),Ac(568,`p`),vN(569,`Habilita a quebra automática do texto da propriedade `),Ac(570,`code`),vN(571,`p-label`),ug(),vN(572,`. Quando `),Ac(573,`code`),vN(574,`p-label-text-wrap`),ug(),vN(575,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(576,`tr`,17)(577,`td`,18)(578,`div`,26)(579,`span`,27),vN(580,` name`),Kc(581,`br`),ug()()(),Ac(582,`td`,22)(583,`code`,28),vN(584,`string`),ug()(),Ac(585,`td`,24),vN(586,`-`),ug(),Ac(587,`td`,25)(588,`p`),vN(589,`Define o nome do `),Ac(590,`em`),vN(591,`checkbox`),ug(),vN(592,`.`),ug()()(),Ac(593,`tr`,17)(594,`td`,18)(595,`div`,26)(596,`span`,27),vN(597,` p-helper`),Kc(598,`br`),ug()()(),Ac(599,`td`,22)(600,`code`,30),vN(601,`PoHelperOptions `),ug(),Ac(602,`code`,28),vN(603,` string`),ug()(),Ac(604,`td`,24),vN(605,`-`),ug(),Ac(606,`td`,25)(607,`em`)(608,`strong`),vN(609,`(opcional)`),ug()(),Ac(610,`p`),vN(611,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(612,`code`),vN(613,`p-label`),ug(),vN(614,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(615,`code`),vN(616,`p-label`),ug(),vN(617,`.`),ug(),Ac(618,`blockquote`)(619,`p`),vN(620,`Para mais informações acesse: `),Ac(621,`a`,31),vN(622,`https://po-ui.io/documentation/po-helper`),ug(),vN(623,`.`),ug()(),Ac(624,`blockquote`)(625,`p`),vN(626,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(627,`code`),vN(628,`p-additional-help-tooltip`),ug(),vN(629,` e `),Ac(630,`code`),vN(631,`p-additional-help`),ug(),vN(632,`) será ignorado.`),ug()()()(),Ac(633,`tr`,17)(634,`td`,18)(635,`div`,26)(636,`span`,27),vN(637,` p-size`),Kc(638,`br`),ug()()(),Ac(639,`td`,22)(640,`code`,28),vN(641,`string`),ug()(),Ac(642,`td`,24)(643,`p`)(644,`code`),vN(645,`medium`),ug()()(),Ac(646,`td`,25)(647,`em`)(648,`strong`),vN(649,`(opcional)`),ug()(),Ac(650,`p`),vN(651,`Define o tamanho da caixa de seleção do componente:`),ug(),Ac(652,`ul`)(653,`li`)(654,`code`),vN(655,`small`),ug(),vN(656,`: 16x16 (disponível apenas para acessibilidade AA).`),ug(),Ac(657,`li`)(658,`code`),vN(659,`medium`),ug(),vN(660,`: 24x24.`),ug(),Ac(661,`li`)(662,`code`),vN(663,`large`),ug(),vN(664,`: 32x32.`),ug()(),Ac(665,`blockquote`)(666,`p`),vN(667,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(668,`code`),vN(669,`medium`),ug(),vN(670,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(671,`a`,32),vN(672,`po-theme`),ug(),vN(673,`.`),ug()()()()(),Ac(674,`h3`,13),vN(675,`Métodos`),ug(),Ac(676,`table`,33)(677,`tr`,17)(678,`th`,34)(679,`div`,26)(680,`h4`)(681,`span`,27),vN(682,` focus `),ug()()()()(),Ac(683,`tr`,25)(684,`td`,25)(685,`p`),vN(686,`Função que atribui foco ao `),Ac(687,`em`),vN(688,`checkbox`),ug(),vN(689,`.`),ug(),Ac(690,`p`),vN(691,`Para utilizá-la é necessário capturar a referência do componente no DOM através do `),Ac(692,`code`),vN(693,`ViewChild`),ug(),vN(694,`, como por exemplo:`),ug(),Ac(695,`pre`)(696,`code`),vN(697,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),ug()()()()(),Kc(698,`br`),Ac(699,`table`,33)(700,`tr`,17)(701,`th`,34)(702,`div`,26)(703,`h4`)(704,`span`,27),vN(705,` showAdditionalHelp `),ug()()()()(),Ac(706,`tr`,25)(707,`td`,25)(708,`p`),vN(709,`Método que exibe `),Ac(710,`code`),vN(711,`p-helper`),ug(),vN(712,` ou executa a ação definida em `),Ac(713,`code`),vN(714,`p-helper{eventOnClick}`),ug(),vN(715,` ou em `),Ac(716,`code`),vN(717,`p-additionalHelp`),ug(),vN(718,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(719,`code`),vN(720,`p-keydown`),ug(),vN(721,`.`),ug(),Ac(722,`blockquote`)(723,`p`),vN(724,`Exibe ou oculta o conteúdo do componente `),Ac(725,`code`),vN(726,`po-helper`),ug(),vN(727,` quando o componente estiver com foco.`),ug()(),Ac(728,`pre`)(729,`code`),vN(730,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),ug()(),Ac(731,`pre`)(732,`code`),vN(733,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(734,`br`),ug())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-checkbox-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-checkbox-basic-view`)(6,`sample-po-checkbox-labs-view`)(7,`sample-po-checkbox-acceptance-term-view`),ug()()()),l&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[vze,tae,aae,pe,ce,ue,he],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[kL.forChild(_e),kL]})}return i})();var $e=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[Ta,Ee]})}return i})();export{$e as DocPoCheckboxModule};