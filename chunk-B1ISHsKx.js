import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,bB as cc,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,bH as E3,c9 as Qhe,bc as LO,aB as Ex,aM as Ew,aN as JA,a4 as vN,aO as Dw,aP as t0,a5 as _N,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy,bd as xx}from'./main-QNYCBKHQ.js';var pe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:false,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&Wl(0,"po-checkbox",0);},dependencies:[cc],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Checkbox Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.checkbox=void 0,this.disabled=false,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=false;}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:false,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=Ex();Sl(0,"po-checkbox",1),Ew("ngModelChange",function(r){return Xy(d),tN(n.checkbox,r)||(n.checkbox=r),Qy(r)}),ht("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),vN(4,"json"),Wl(5,"po-info",4),sg(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",2)(10,"po-input",5),Ew("ngModelChange",function(r){return Xy(d),tN(n.label,r)||(n.label=r),Qy(r)}),sg(),JA(),Sl(11,"po-input",6),Ew("ngModelChange",function(r){return Xy(d),tN(n.help,r)||(n.help=r),Qy(r)}),sg(),JA(),Sl(12,"po-input",7),Ew("ngModelChange",function(r){return Xy(d),tN(n.helperText,r)||(n.helperText=r),Qy(r)}),sg(),JA(),Sl(13,"po-switch",8),Ew("ngModelChange",function(r){return Xy(d),tN(n.disabled,r)||(n.disabled=r),Qy(r)}),sg(),JA(),Sl(14,"po-switch",9),Ew("ngModelChange",function(r){return Xy(d),tN(n.labelTextWrap,r)||(n.labelTextWrap=r),Qy(r)}),sg(),JA(),Sl(15,"po-switch",10),Ew("ngModelChange",function(r){return Xy(d),tN(n.compactLabel,r)||(n.compactLabel=r),Qy(r)}),sg(),JA(),Sl(16,"po-radio-group",11),Ew("ngModelChange",function(r){return Xy(d),tN(n.size,r)||(n.size=r),Qy(r)}),sg(),JA(),sg(),Sl(17,"div",2)(18,"po-button",12),ht("p-click",function(){return n.restore()}),sg()()();}l&2&&(Dw("ngModel",n.checkbox),tw("p-helper",n.helperText)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap)("p-compact-label",n.compactLabel),t0(),Vp(3),tw("p-value",_N(4,18,n.checkbox)),Vp(2),tw("p-value",n.event),Vp(5),Dw("ngModel",n.label),t0(),Vp(),Dw("ngModel",n.help),t0(),Vp(),Dw("ngModel",n.helperText),t0(),Vp(),Dw("ngModel",n.disabled),t0(),Vp(),Dw("ngModel",n.labelTextWrap),t0(),Vp(),Dw("ngModel",n.compactLabel),t0(),Vp(),Dw("ngModel",n.size),tw("p-options",n.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,cc,F3,Pde,E3,Qhe,LO],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Checkbox Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-helper]="helperText"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return i})();var se=(()=>{class i{modalTerm;acceptance=false;primaryAction={action:()=>{this.modalTerm.close();},disabled:true,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&ql(Yo,7),l&2){let d;lo(d=uo())&&(n.modalTerm=d.first);}},standalone:false,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let d=Ex();Sl(0,"po-button",1),ht("p-click",function(){Xy(d);let r=xx(2);return Qy(r.open())}),sg(),Sl(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),Jx(6,"MIT License"),sg()(),Sl(7,"div",4)(8,"h4"),Jx(9,"Copyright (c) 2019 PO UI"),sg()(),Wl(10,"po-divider",4),Sl(11,"div",4)(12,"p"),Jx(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),sg(),Wl(14,"br"),Sl(15,"p"),Jx(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),sg(),Wl(17,"br"),Sl(18,"p"),Jx(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),sg()()(),Wl(20,"po-divider"),Sl(21,"div",6)(22,"po-checkbox",7),Ew("ngModelChange",function(r){return Xy(d),tN(n.acceptance,r)||(n.acceptance=r),Qy(r)}),ht("p-change",function(){return n.primaryAction.disabled=!n.acceptance}),sg(),JA(),sg()();}l&2&&(Vp(),tw("p-primary-action",n.primaryAction),Vp(21),Dw("ngModel",n.acceptance),t0());},dependencies:[K9,Dk,Qt,mv,cc,Yo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Checkbox - Acceptance Term"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-acceptance-term"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return i})();var he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:false,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoCheckboxComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,"O componente "),Sl(24,"code"),Jx(25,"po-checkbox"),sg(),Jx(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Sl(27,"em"),Jx(28,"click"),sg(),Jx(29," do "),Sl(30,"em"),Jx(31,"mouse"),sg(),Jx(32," quanto por meio da tecla "),Sl(33,"em"),Jx(34,"space"),sg(),Jx(35," quando estiver com foco."),sg(),Sl(36,"p"),Jx(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),sg(),Sl(38,"blockquote")(39,"p"),Jx(40,"O "),Sl(41,"em"),Jx(42,"model"),sg(),Jx(43," deste componente aceitar\xE1 valores igual \xE0 "),Sl(44,"code"),Jx(45,"true"),sg(),Jx(46,", "),Sl(47,"code"),Jx(48,"false"),sg(),Jx(49," ou "),Sl(50,"code"),Jx(51,"null"),sg(),Jx(52," para quando for indeterminado/mixed."),sg()(),Sl(53,"p")(54,"strong"),Jx(55,"Acessibilidade tratada no componente:"),sg()(),Sl(56,"p"),Jx(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Sl(58,"ul")(59,"li"),Jx(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Sl(61,"a",6),Jx(62,"WCAG 4.1.2: Name, Role, Value"),sg()(),Sl(63,"li"),Jx(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(65,"a",7),Jx(66,"WCAG 2.4.12: Focus Appearance"),sg()(),Sl(67,"li"),Jx(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),Sl(69,"a",8),Jx(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),sg()()(),Sl(71,"h4"),Jx(72,"Tokens customiz\xE1veis"),sg(),Sl(73,"p"),Jx(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(75,"blockquote")(76,"p"),Jx(77,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(78,"a",9),Jx(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(80,"."),sg()(),Sl(81,"table")(82,"thead")(83,"tr")(84,"th"),Jx(85,"Propriedade"),sg(),Sl(86,"th"),Jx(87,"Descri\xE7\xE3o"),sg(),Sl(88,"th"),Jx(89,"Valor Padr\xE3o"),sg()()(),Sl(90,"tbody")(91,"tr")(92,"td")(93,"strong"),Jx(94,"Default Values"),sg()(),Wl(95,"td")(96,"td"),sg(),Sl(97,"tr")(98,"td")(99,"code"),Jx(100,"--border-color"),sg()(),Sl(101,"td"),Jx(102,"Cor da borda"),sg(),Sl(103,"td")(104,"code"),Jx(105,"var(--color-neutral-dark-70)"),sg()()(),Sl(106,"tr")(107,"td")(108,"code"),Jx(109,"--color-unchecked"),sg()(),Sl(110,"td"),Jx(111,"Cor quando n\xE3o selecionado"),sg(),Sl(112,"td")(113,"code"),Jx(114,"var(--color-neutral-light-00)"),sg()()(),Sl(115,"tr")(116,"td")(117,"code"),Jx(118,"--color-checked"),sg()(),Sl(119,"td"),Jx(120,"Cor quando selecionado"),sg(),Sl(121,"td")(122,"code"),Jx(123,"var(--color-action-default)"),sg()()(),Sl(124,"tr")(125,"td")(126,"code"),Jx(127,"--field-container-title-justify"),sg()(),Sl(128,"td"),Jx(129,"Alinhamento horizontal do t\xEDtulo ("),Sl(130,"code"),Jx(131,"justify-content"),sg(),Jx(132,")"),sg(),Sl(133,"td")(134,"code"),Jx(135,"space-between"),sg()()(),Sl(136,"tr")(137,"td")(138,"code"),Jx(139,"--field-container-title-flex"),sg()(),Sl(140,"td"),Jx(141,"Flex do t\xEDtulo ("),Sl(142,"code"),Jx(143,"flex"),sg(),Jx(144,")"),sg(),Sl(145,"td")(146,"code"),Jx(147,"1 auto"),sg()()(),Sl(148,"tr")(149,"td")(150,"strong"),Jx(151,"Hover"),sg()(),Wl(152,"td")(153,"td"),sg(),Sl(154,"tr")(155,"td")(156,"code"),Jx(157,"--color-hover"),sg()(),Sl(158,"td"),Jx(159,"Cor principal no estado hover"),sg(),Sl(160,"td")(161,"code"),Jx(162,"var(--color-action-hover)"),sg()()(),Sl(163,"tr")(164,"td")(165,"code"),Jx(166,"--shadow-color-hover"),sg()(),Sl(167,"td"),Jx(168,"Cor da sombra no estado hover"),sg(),Sl(169,"td")(170,"code"),Jx(171,"var(--color-brand-01-lighter)"),sg()()(),Sl(172,"tr")(173,"td")(174,"strong"),Jx(175,"Focused"),sg()(),Wl(176,"td")(177,"td"),sg(),Sl(178,"tr")(179,"td")(180,"code"),Jx(181,"--outline-color-focused"),sg()(),Sl(182,"td"),Jx(183,"Cor do outline do estado de focus"),sg(),Sl(184,"td")(185,"code"),Jx(186,"var(--color-action-focus)"),sg()()(),Sl(187,"tr")(188,"td")(189,"strong"),Jx(190,"Disabled"),sg()(),Wl(191,"td")(192,"td"),sg(),Sl(193,"tr")(194,"td")(195,"code"),Jx(196,"--color-unchecked-disabled"),sg(),Jx(197," \xA0"),sg(),Sl(198,"td"),Jx(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),sg(),Sl(200,"td")(201,"code"),Jx(202,"var(--color-action-disabled)"),sg()()(),Sl(203,"tr")(204,"td")(205,"code"),Jx(206,"--color-checked-disabled"),sg(),Jx(207," \xA0"),sg(),Sl(208,"td"),Jx(209,"Cor pricipal quando selecionado no estado disabled"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-neutral-dark-70)"),sg()()()()()(),Sl(213,"div",10)(214,"h4",11),Jx(215,"Seletor"),sg(),Sl(216,"pre",12),Jx(217,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
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
`),sg()(),Sl(218,"h4",13),Jx(219,"Propriedades"),sg(),Sl(220,"table",14)(221,"tr",15)(222,"th",16),Jx(223,"Nome"),sg(),Sl(224,"th",16),Jx(225,"Tipo"),sg(),Sl(226,"th",16),Jx(227,"Padr\xE3o"),sg(),Sl(228,"th",16),Jx(229,"Descri\xE7\xE3o"),sg()(),Sl(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),Jx(234," (p-additional-help)"),Wl(235,"br"),sg()(),Sl(236,"div",21),Jx(237,"Deprecated"),sg()(),Sl(238,"td",22)(239,"code",23),Jx(240,"EventEmitter"),sg()(),Sl(241,"td",24),Jx(242,"-"),sg(),Sl(243,"td",25)(244,"em")(245,"strong"),Jx(246,"(opcional)"),sg()(),Sl(247,"p"),Jx(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(249,"blockquote")(250,"p"),Jx(251,"Essa propriedade est\xE1 "),Sl(252,"strong"),Jx(253,"depreciada"),sg(),Jx(254," e ser\xE1 removida na vers\xE3o "),Sl(255,"code"),Jx(256,"23.x.x"),sg(),Jx(257,". Recomendamos utilizar a propriedade "),Sl(258,"code"),Jx(259,"p-helper"),sg(),Jx(260," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),Jx(265," p-additional-help-tooltip"),Wl(266,"br"),sg()(),Sl(267,"div",21),Jx(268,"Deprecated"),sg()(),Sl(269,"td",22)(270,"code",28),Jx(271,"string"),sg()(),Sl(272,"td",24),Jx(273,"-"),sg(),Sl(274,"td",25)(275,"em")(276,"strong"),Jx(277,"(opcional)"),sg()(),Sl(278,"p"),Jx(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(280,"code"),Jx(281,"po-helper"),sg(),Jx(282,`.
`),Sl(283,"strong"),Jx(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(285,"blockquote")(286,"p"),Jx(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(288,"blockquote")(289,"p"),Jx(290,"Essa propriedade est\xE1 "),Sl(291,"strong"),Jx(292,"depreciada"),sg(),Jx(293," e ser\xE1 removida na vers\xE3o "),Sl(294,"code"),Jx(295,"23.x.x"),sg(),Jx(296,". Recomendamos utilizar a propriedade "),Sl(297,"code"),Jx(298,"p-helper"),sg(),Jx(299," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),Jx(304," p-append-in-body"),Wl(305,"br"),sg()()(),Sl(306,"td",22)(307,"code",29),Jx(308,"boolean"),sg()(),Sl(309,"td",24)(310,"p")(311,"code"),Jx(312,"false"),sg()()(),Sl(313,"td",25)(314,"em")(315,"strong"),Jx(316,"(opcional)"),sg()(),Sl(317,"p"),Jx(318,"Define que o popover ("),Sl(319,"code"),Jx(320,"p-helper"),sg(),Jx(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(322,"blockquote")(323,"p"),Jx(324,"Quando utilizado com "),Sl(325,"code"),Jx(326,"p-helper"),sg(),Jx(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),Jx(332," p-auto-focus"),Wl(333,"br"),sg()()(),Sl(334,"td",22)(335,"code",29),Jx(336,"boolean"),sg()(),Sl(337,"td",24)(338,"p")(339,"code"),Jx(340,"false"),sg()()(),Sl(341,"td",25)(342,"em")(343,"strong"),Jx(344,"(opcional)"),sg()(),Sl(345,"p"),Jx(346,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(347,"blockquote")(348,"p"),Jx(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),Jx(354," (p-blur)"),Wl(355,"br"),sg()()(),Sl(356,"td",22)(357,"code",23),Jx(358,"EventEmitter"),sg()(),Sl(359,"td",24),Jx(360,"-"),sg(),Sl(361,"td",25)(362,"em")(363,"strong"),Jx(364,"(opcional)"),sg()(),Sl(365,"p"),Jx(366,"Evento disparado ao sair do campo."),sg()()(),Sl(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),Jx(371," (p-change)"),Wl(372,"br"),sg()()(),Sl(373,"td",22)(374,"code",23),Jx(375,"EventEmitter"),sg()(),Sl(376,"td",24),Jx(377,"-"),sg(),Sl(378,"td",25)(379,"em")(380,"strong"),Jx(381,"(opcional)"),sg()(),Sl(382,"p"),Jx(383,"Evento disparado quando o valor do "),Sl(384,"em"),Jx(385,"checkbox"),sg(),Jx(386," for alterado."),sg()()(),Sl(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),Jx(391," p-compact-label"),Wl(392,"br"),sg()()(),Sl(393,"td",22)(394,"code",29),Jx(395,"boolean"),sg()(),Sl(396,"td",24)(397,"p")(398,"code"),Jx(399,"false"),sg()()(),Sl(400,"td",25)(401,"em")(402,"strong"),Jx(403,"(opcional)"),sg()(),Sl(404,"p"),Jx(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(406,"p"),Jx(407,"Quando habilitado ("),Sl(408,"code"),Jx(409,"true"),sg(),Jx(410,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(411,"ul")(412,"li")(413,"code"),Jx(414,"po-label"),sg()(),Sl(415,"li")(416,"code"),Jx(417,"p-requirement (showRequired)"),sg()(),Sl(418,"li")(419,"code"),Jx(420,"po-helper"),sg()()(),Sl(421,"p"),Jx(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(423,"p"),Jx(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(425,"ul")(426,"li")(427,"code"),Jx(428,"--field-container-title-justify"),sg()(),Sl(429,"li")(430,"code"),Jx(431,"--field-container-title-flex"),sg()()(),Sl(432,"p"),Jx(433,"Exemplo:"),sg(),Sl(434,"pre")(435,"code"),Jx(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(437,"p"),Jx(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),Jx(443," p-disabled"),Wl(444,"br"),sg()()(),Sl(445,"td",22)(446,"code",29),Jx(447,"boolean"),sg()(),Sl(448,"td",24)(449,"p")(450,"code"),Jx(451,"false"),sg()()(),Sl(452,"td",25)(453,"em")(454,"strong"),Jx(455,"(opcional)"),sg()(),Sl(456,"p"),Jx(457,"Define o estado do "),Sl(458,"em"),Jx(459,"checkbox"),sg(),Jx(460," como desabilitado."),sg()()(),Sl(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),Jx(465," p-help"),Wl(466,"br"),sg()()(),Sl(467,"td",22)(468,"code",28),Jx(469,"string"),sg()(),Sl(470,"td",24),Jx(471,"-"),sg(),Sl(472,"td",25)(473,"em")(474,"strong"),Jx(475,"(opcional)"),sg()(),Sl(476,"p"),Jx(477,"Texto de apoio do campo"),sg()()(),Sl(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),Jx(482," (p-keydown)"),Wl(483,"br"),sg()()(),Sl(484,"td",22)(485,"code",23),Jx(486,"EventEmitter"),sg()(),Sl(487,"td",24),Jx(488,"-"),sg(),Sl(489,"td",25)(490,"em")(491,"strong"),Jx(492,"(opcional)"),sg()(),Sl(493,"p"),Jx(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(495,"code"),Jx(496,"KeyboardEvent"),sg(),Jx(497," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),Jx(502," p-label"),Wl(503,"br"),sg()()(),Sl(504,"td",22)(505,"code",28),Jx(506,"string"),sg()(),Sl(507,"td",24),Jx(508,"-"),sg(),Sl(509,"td",25)(510,"em")(511,"strong"),Jx(512,"(opcional)"),sg()(),Sl(513,"p"),Jx(514,"Texto de exibi\xE7\xE3o do "),Sl(515,"em"),Jx(516,"checkbox"),sg(),Jx(517,"."),sg()()(),Sl(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),Jx(522," p-label-text-wrap"),Wl(523,"br"),sg()()(),Sl(524,"td",22)(525,"code",29),Jx(526,"boolean"),sg()(),Sl(527,"td",24)(528,"p")(529,"code"),Jx(530,"false"),sg()()(),Sl(531,"td",25)(532,"em")(533,"strong"),Jx(534,"(opcional)"),sg()(),Sl(535,"p"),Jx(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(537,"code"),Jx(538,"p-label"),sg(),Jx(539,". Quando "),Sl(540,"code"),Jx(541,"p-label-text-wrap"),sg(),Jx(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),Jx(547," name"),Wl(548,"br"),sg()()(),Sl(549,"td",22)(550,"code",28),Jx(551,"string"),sg()(),Sl(552,"td",24),Jx(553,"-"),sg(),Sl(554,"td",25)(555,"p"),Jx(556,"Define o nome do "),Sl(557,"em"),Jx(558,"checkbox"),sg(),Jx(559,"."),sg()()(),Sl(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),Jx(564," p-helper"),Wl(565,"br"),sg()()(),Sl(566,"td",22)(567,"code",30),Jx(568,"PoHelperOptions "),sg(),Sl(569,"code",28),Jx(570," string"),sg()(),Sl(571,"td",24),Jx(572,"-"),sg(),Sl(573,"td",25)(574,"em")(575,"strong"),Jx(576,"(opcional)"),sg()(),Sl(577,"p"),Jx(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(579,"code"),Jx(580,"p-label"),sg(),Jx(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(582,"code"),Jx(583,"p-label"),sg(),Jx(584,"."),sg(),Sl(585,"blockquote")(586,"p"),Jx(587,"Para mais informa\xE7\xF5es acesse: "),Sl(588,"a",31),Jx(589,"https://po-ui.io/documentation/po-helper"),sg(),Jx(590,"."),sg()(),Sl(591,"blockquote")(592,"p"),Jx(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(594,"code"),Jx(595,"p-additional-help-tooltip"),sg(),Jx(596," e "),Sl(597,"code"),Jx(598,"p-additional-help"),sg(),Jx(599,") ser\xE1 ignorado."),sg()()()(),Sl(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),Jx(604," p-size"),Wl(605,"br"),sg()()(),Sl(606,"td",22)(607,"code",28),Jx(608,"string"),sg()(),Sl(609,"td",24)(610,"p")(611,"code"),Jx(612,"medium"),sg()()(),Sl(613,"td",25)(614,"em")(615,"strong"),Jx(616,"(opcional)"),sg()(),Sl(617,"p"),Jx(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),sg(),Sl(619,"ul")(620,"li")(621,"code"),Jx(622,"small"),sg(),Jx(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(624,"li")(625,"code"),Jx(626,"medium"),sg(),Jx(627,": 24x24."),sg(),Sl(628,"li")(629,"code"),Jx(630,"large"),sg(),Jx(631,": 32x32."),sg()(),Sl(632,"blockquote")(633,"p"),Jx(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(635,"code"),Jx(636,"medium"),sg(),Jx(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(638,"a",32),Jx(639,"po-theme"),sg(),Jx(640,"."),sg()()()()(),Sl(641,"h3",13),Jx(642,"M\xE9todos"),sg(),Sl(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),Jx(649," focus "),sg()()()()(),Sl(650,"tr",25)(651,"td",25)(652,"p"),Jx(653,"Fun\xE7\xE3o que atribui foco ao "),Sl(654,"em"),Jx(655,"checkbox"),sg(),Jx(656,"."),sg(),Sl(657,"p"),Jx(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),Sl(659,"code"),Jx(660,"ViewChild"),sg(),Jx(661,", como por exemplo:"),sg(),Sl(662,"pre")(663,"code"),Jx(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),sg()()()()(),Wl(665,"br"),Sl(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),Jx(672," showAdditionalHelp "),sg()()()()(),Sl(673,"tr",25)(674,"td",25)(675,"p"),Jx(676,"M\xE9todo que exibe "),Sl(677,"code"),Jx(678,"p-helper"),sg(),Jx(679," ou executa a a\xE7\xE3o definida em "),Sl(680,"code"),Jx(681,"p-helper{eventOnClick}"),sg(),Jx(682," ou em "),Sl(683,"code"),Jx(684,"p-additionalHelp"),sg(),Jx(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(686,"code"),Jx(687,"p-keydown"),sg(),Jx(688,"."),sg(),Sl(689,"blockquote")(690,"p"),Jx(691,"Exibe ou oculta o conte\xFAdo do componente "),Sl(692,"code"),Jx(693,"po-helper"),sg(),Jx(694," quando o componente estiver com foco."),sg()(),Sl(695,"pre")(696,"code"),Jx(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),sg()(),Sl(698,"pre")(699,"code"),Jx(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(701,"br"),sg());},dependencies:[Ga],encapsulation:2})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-checkbox-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,me,ce,ue,he],encapsulation:2})}return i})();var Ae=[{path:"",component:be}],Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[pL.forChild(Ae),pL]})}return i})();var $e=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ar,Ee]})}return i})();export{$e as DocPoCheckboxModule};