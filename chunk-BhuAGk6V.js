import {f as fe,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,bB as cc,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,bH as M3,c9 as Yhe,bc as $O,aB as Sx,aM as ww,aN as r0,a4 as wN,aO as Ew,aP as o0,a5 as bN,b6 as Yo,av as Yl,aw as uo,ax as fo,a3 as lNe,aD as Ky,aT as sN,aE as Xy,bd as Fx}from'./main-P7IRR5MZ.js';var pe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:false,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,o){l&1&&Gl(0,"po-checkbox",0);},dependencies:[cc],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Checkbox Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-checkbox-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Se,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,pe],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.checkbox=void 0,this.disabled=false,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=false;}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:false,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let d=Sx();Tl(0,"po-checkbox",1),ww("ngModelChange",function(r){return Ky(d),sN(o.checkbox,r)||(o.checkbox=r),Xy(r)}),ht("p-change",function(){return o.changeEvent("p-change")})("p-keydown",function(){return o.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3),wN(4,"json"),Gl(5,"po-info",4),sg(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"div",2)(10,"po-input",5),ww("ngModelChange",function(r){return Ky(d),sN(o.label,r)||(o.label=r),Xy(r)}),sg(),r0(),Tl(11,"po-input",6),ww("ngModelChange",function(r){return Ky(d),sN(o.help,r)||(o.help=r),Xy(r)}),sg(),r0(),Tl(12,"po-input",7),ww("ngModelChange",function(r){return Ky(d),sN(o.helperText,r)||(o.helperText=r),Xy(r)}),sg(),r0(),Tl(13,"po-switch",8),ww("ngModelChange",function(r){return Ky(d),sN(o.disabled,r)||(o.disabled=r),Xy(r)}),sg(),r0(),Tl(14,"po-switch",9),ww("ngModelChange",function(r){return Ky(d),sN(o.labelTextWrap,r)||(o.labelTextWrap=r),Xy(r)}),sg(),r0(),Tl(15,"po-switch",10),ww("ngModelChange",function(r){return Ky(d),sN(o.compactLabel,r)||(o.compactLabel=r),Xy(r)}),sg(),r0(),Tl(16,"po-radio-group",11),ww("ngModelChange",function(r){return Ky(d),sN(o.size,r)||(o.size=r),Xy(r)}),sg(),r0(),sg(),Tl(17,"div",2)(18,"po-button",12),ht("p-click",function(){return o.restore()}),sg()()();}l&2&&(Ew("ngModel",o.checkbox),nw("p-helper",o.helperText)("p-disabled",o.disabled)("p-help",o.help)("p-label",o.label)("p-size",o.size)("p-label-text-wrap",o.labelTextWrap)("p-compact-label",o.compactLabel),o0(),Vp(3),nw("p-value",bN(4,18,o.checkbox)),Vp(2),nw("p-value",o.event),Vp(5),Ew("ngModel",o.label),o0(),Vp(),Ew("ngModel",o.help),o0(),Vp(),Ew("ngModel",o.helperText),o0(),Vp(),Ew("ngModel",o.disabled),o0(),Vp(),Ew("ngModel",o.labelTextWrap),o0(),Vp(),Ew("ngModel",o.compactLabel),o0(),Vp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,cc,O3,Dde,M3,Yhe,$O],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Checkbox Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-checkbox
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-checkbox-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ve,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,de],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{modalTerm;acceptance=false;primaryAction={action:()=>{this.modalTerm.close();},disabled:true,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,o){if(l&1&&Yl(Yo,7),l&2){let d;uo(d=fo())&&(o.modalTerm=d.first);}},standalone:false,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,o){if(l&1){let d=Sx();Tl(0,"po-button",1),ht("p-click",function(){Ky(d);let r=Fx(2);return Xy(r.open())}),sg(),Tl(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),iN(6,"MIT License"),sg()(),Tl(7,"div",4)(8,"h4"),iN(9,"Copyright (c) 2019 PO UI"),sg()(),Gl(10,"po-divider",4),Tl(11,"div",4)(12,"p"),iN(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),sg(),Gl(14,"br"),Tl(15,"p"),iN(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),sg(),Gl(17,"br"),Tl(18,"p"),iN(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),sg()()(),Gl(20,"po-divider"),Tl(21,"div",6)(22,"po-checkbox",7),ww("ngModelChange",function(r){return Ky(d),sN(o.acceptance,r)||(o.acceptance=r),Xy(r)}),ht("p-change",function(){return o.primaryAction.disabled=!o.acceptance}),sg(),r0(),sg()();}l&2&&(Vp(),nw("p-primary-action",o.primaryAction),Vp(21),Ew("ngModel",o.acceptance),o0());},dependencies:[nY,Sk,Qt,mv,cc,Yo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Checkbox - Acceptance Term"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-checkbox-acceptance-term"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,we,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:false,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoCheckboxComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"O componente "),Tl(24,"code"),iN(25,"po-checkbox"),sg(),iN(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Tl(27,"em"),iN(28,"click"),sg(),iN(29," do "),Tl(30,"em"),iN(31,"mouse"),sg(),iN(32," quanto por meio da tecla "),Tl(33,"em"),iN(34,"space"),sg(),iN(35," quando estiver com foco."),sg(),Tl(36,"p"),iN(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),sg(),Tl(38,"blockquote")(39,"p"),iN(40,"O "),Tl(41,"em"),iN(42,"model"),sg(),iN(43," deste componente aceitar\xE1 valores igual \xE0 "),Tl(44,"code"),iN(45,"true"),sg(),iN(46,", "),Tl(47,"code"),iN(48,"false"),sg(),iN(49," ou "),Tl(50,"code"),iN(51,"null"),sg(),iN(52," para quando for indeterminado/mixed."),sg()(),Tl(53,"p")(54,"strong"),iN(55,"Acessibilidade tratada no componente:"),sg()(),Tl(56,"p"),iN(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(58,"ul")(59,"li"),iN(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Tl(61,"a",6),iN(62,"WCAG 4.1.2: Name, Role, Value"),sg()(),Tl(63,"li"),iN(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Tl(65,"a",7),iN(66,"WCAG 2.4.12: Focus Appearance"),sg()(),Tl(67,"li"),iN(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),Tl(69,"a",8),iN(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),sg()()(),Tl(71,"h4"),iN(72,"Tokens customiz\xE1veis"),sg(),Tl(73,"p"),iN(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(75,"blockquote")(76,"p"),iN(77,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(78,"a",9),iN(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(80,"."),sg()(),Tl(81,"table")(82,"thead")(83,"tr")(84,"th"),iN(85,"Propriedade"),sg(),Tl(86,"th"),iN(87,"Descri\xE7\xE3o"),sg(),Tl(88,"th"),iN(89,"Valor Padr\xE3o"),sg()()(),Tl(90,"tbody")(91,"tr")(92,"td")(93,"strong"),iN(94,"Default Values"),sg()(),Gl(95,"td")(96,"td"),sg(),Tl(97,"tr")(98,"td")(99,"code"),iN(100,"--border-color"),sg()(),Tl(101,"td"),iN(102,"Cor da borda"),sg(),Tl(103,"td")(104,"code"),iN(105,"var(--color-neutral-dark-70)"),sg()()(),Tl(106,"tr")(107,"td")(108,"code"),iN(109,"--color-unchecked"),sg()(),Tl(110,"td"),iN(111,"Cor quando n\xE3o selecionado"),sg(),Tl(112,"td")(113,"code"),iN(114,"var(--color-neutral-light-00)"),sg()()(),Tl(115,"tr")(116,"td")(117,"code"),iN(118,"--color-checked"),sg()(),Tl(119,"td"),iN(120,"Cor quando selecionado"),sg(),Tl(121,"td")(122,"code"),iN(123,"var(--color-action-default)"),sg()()(),Tl(124,"tr")(125,"td")(126,"code"),iN(127,"--field-container-title-justify"),sg()(),Tl(128,"td"),iN(129,"Alinhamento horizontal do t\xEDtulo ("),Tl(130,"code"),iN(131,"justify-content"),sg(),iN(132,")"),sg(),Tl(133,"td")(134,"code"),iN(135,"space-between"),sg()()(),Tl(136,"tr")(137,"td")(138,"code"),iN(139,"--field-container-title-flex"),sg()(),Tl(140,"td"),iN(141,"Flex do t\xEDtulo ("),Tl(142,"code"),iN(143,"flex"),sg(),iN(144,")"),sg(),Tl(145,"td")(146,"code"),iN(147,"1 auto"),sg()()(),Tl(148,"tr")(149,"td")(150,"strong"),iN(151,"Hover"),sg()(),Gl(152,"td")(153,"td"),sg(),Tl(154,"tr")(155,"td")(156,"code"),iN(157,"--color-hover"),sg()(),Tl(158,"td"),iN(159,"Cor principal no estado hover"),sg(),Tl(160,"td")(161,"code"),iN(162,"var(--color-action-hover)"),sg()()(),Tl(163,"tr")(164,"td")(165,"code"),iN(166,"--shadow-color-hover"),sg()(),Tl(167,"td"),iN(168,"Cor da sombra no estado hover"),sg(),Tl(169,"td")(170,"code"),iN(171,"var(--color-brand-01-lighter)"),sg()()(),Tl(172,"tr")(173,"td")(174,"strong"),iN(175,"Focused"),sg()(),Gl(176,"td")(177,"td"),sg(),Tl(178,"tr")(179,"td")(180,"code"),iN(181,"--outline-color-focused"),sg()(),Tl(182,"td"),iN(183,"Cor do outline do estado de focus"),sg(),Tl(184,"td")(185,"code"),iN(186,"var(--color-action-focus)"),sg()()(),Tl(187,"tr")(188,"td")(189,"strong"),iN(190,"Disabled"),sg()(),Gl(191,"td")(192,"td"),sg(),Tl(193,"tr")(194,"td")(195,"code"),iN(196,"--color-unchecked-disabled"),sg(),iN(197," \xA0"),sg(),Tl(198,"td"),iN(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),sg(),Tl(200,"td")(201,"code"),iN(202,"var(--color-action-disabled)"),sg()()(),Tl(203,"tr")(204,"td")(205,"code"),iN(206,"--color-checked-disabled"),sg(),iN(207," \xA0"),sg(),Tl(208,"td"),iN(209,"Cor pricipal quando selecionado no estado disabled"),sg(),Tl(210,"td")(211,"code"),iN(212,"var(--color-neutral-dark-70)"),sg()()()()()(),Tl(213,"div",10)(214,"h4",11),iN(215,"Seletor"),sg(),Tl(216,"pre",12),iN(217,`<po-checkbox
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
`),sg()(),Tl(218,"h4",13),iN(219,"Propriedades"),sg(),Tl(220,"table",14)(221,"tr",15)(222,"th",16),iN(223,"Nome"),sg(),Tl(224,"th",16),iN(225,"Tipo"),sg(),Tl(226,"th",16),iN(227,"Padr\xE3o"),sg(),Tl(228,"th",16),iN(229,"Descri\xE7\xE3o"),sg()(),Tl(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),iN(234," (p-additional-help)"),Gl(235,"br"),sg()(),Tl(236,"div",21),iN(237,"Deprecated"),sg()(),Tl(238,"td",22)(239,"code",23),iN(240,"EventEmitter"),sg()(),Tl(241,"td",24),iN(242,"-"),sg(),Tl(243,"td",25)(244,"em")(245,"strong"),iN(246,"(opcional)"),sg()(),Tl(247,"p"),iN(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(249,"blockquote")(250,"p"),iN(251,"Essa propriedade est\xE1 "),Tl(252,"strong"),iN(253,"depreciada"),sg(),iN(254," e ser\xE1 removida na vers\xE3o "),Tl(255,"code"),iN(256,"23.x.x"),sg(),iN(257,". Recomendamos utilizar a propriedade "),Tl(258,"code"),iN(259,"p-helper"),sg(),iN(260," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),iN(265," p-additional-help-tooltip"),Gl(266,"br"),sg()(),Tl(267,"div",21),iN(268,"Deprecated"),sg()(),Tl(269,"td",22)(270,"code",28),iN(271,"string"),sg()(),Tl(272,"td",24),iN(273,"-"),sg(),Tl(274,"td",25)(275,"em")(276,"strong"),iN(277,"(opcional)"),sg()(),Tl(278,"p"),iN(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(280,"code"),iN(281,"po-helper"),sg(),iN(282,`.
`),Tl(283,"strong"),iN(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(285,"blockquote")(286,"p"),iN(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(288,"blockquote")(289,"p"),iN(290,"Essa propriedade est\xE1 "),Tl(291,"strong"),iN(292,"depreciada"),sg(),iN(293," e ser\xE1 removida na vers\xE3o "),Tl(294,"code"),iN(295,"23.x.x"),sg(),iN(296,". Recomendamos utilizar a propriedade "),Tl(297,"code"),iN(298,"p-helper"),sg(),iN(299," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),iN(304," p-append-in-body"),Gl(305,"br"),sg()()(),Tl(306,"td",22)(307,"code",29),iN(308,"boolean"),sg()(),Tl(309,"td",24)(310,"p")(311,"code"),iN(312,"false"),sg()()(),Tl(313,"td",25)(314,"em")(315,"strong"),iN(316,"(opcional)"),sg()(),Tl(317,"p"),iN(318,"Define que o popover ("),Tl(319,"code"),iN(320,"p-helper"),sg(),iN(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(322,"blockquote")(323,"p"),iN(324,"Quando utilizado com "),Tl(325,"code"),iN(326,"p-helper"),sg(),iN(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),iN(332," p-auto-focus"),Gl(333,"br"),sg()()(),Tl(334,"td",22)(335,"code",29),iN(336,"boolean"),sg()(),Tl(337,"td",24)(338,"p")(339,"code"),iN(340,"false"),sg()()(),Tl(341,"td",25)(342,"em")(343,"strong"),iN(344,"(opcional)"),sg()(),Tl(345,"p"),iN(346,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(347,"blockquote")(348,"p"),iN(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),iN(354," (p-blur)"),Gl(355,"br"),sg()()(),Tl(356,"td",22)(357,"code",23),iN(358,"EventEmitter"),sg()(),Tl(359,"td",24),iN(360,"-"),sg(),Tl(361,"td",25)(362,"em")(363,"strong"),iN(364,"(opcional)"),sg()(),Tl(365,"p"),iN(366,"Evento disparado ao sair do campo."),sg()()(),Tl(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),iN(371," (p-change)"),Gl(372,"br"),sg()()(),Tl(373,"td",22)(374,"code",23),iN(375,"EventEmitter"),sg()(),Tl(376,"td",24),iN(377,"-"),sg(),Tl(378,"td",25)(379,"em")(380,"strong"),iN(381,"(opcional)"),sg()(),Tl(382,"p"),iN(383,"Evento disparado quando o valor do "),Tl(384,"em"),iN(385,"checkbox"),sg(),iN(386," for alterado."),sg()()(),Tl(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),iN(391," p-compact-label"),Gl(392,"br"),sg()()(),Tl(393,"td",22)(394,"code",29),iN(395,"boolean"),sg()(),Tl(396,"td",24)(397,"p")(398,"code"),iN(399,"false"),sg()()(),Tl(400,"td",25)(401,"em")(402,"strong"),iN(403,"(opcional)"),sg()(),Tl(404,"p"),iN(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(406,"p"),iN(407,"Quando habilitado ("),Tl(408,"code"),iN(409,"true"),sg(),iN(410,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(411,"ul")(412,"li")(413,"code"),iN(414,"po-label"),sg()(),Tl(415,"li")(416,"code"),iN(417,"p-requirement (showRequired)"),sg()(),Tl(418,"li")(419,"code"),iN(420,"po-helper"),sg()()(),Tl(421,"p"),iN(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(423,"p"),iN(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(425,"ul")(426,"li")(427,"code"),iN(428,"--field-container-title-justify"),sg()(),Tl(429,"li")(430,"code"),iN(431,"--field-container-title-flex"),sg()()(),Tl(432,"p"),iN(433,"Exemplo:"),sg(),Tl(434,"pre")(435,"code"),iN(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(437,"p"),iN(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),iN(443," p-disabled"),Gl(444,"br"),sg()()(),Tl(445,"td",22)(446,"code",29),iN(447,"boolean"),sg()(),Tl(448,"td",24)(449,"p")(450,"code"),iN(451,"false"),sg()()(),Tl(452,"td",25)(453,"em")(454,"strong"),iN(455,"(opcional)"),sg()(),Tl(456,"p"),iN(457,"Define o estado do "),Tl(458,"em"),iN(459,"checkbox"),sg(),iN(460," como desabilitado."),sg()()(),Tl(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),iN(465," p-help"),Gl(466,"br"),sg()()(),Tl(467,"td",22)(468,"code",28),iN(469,"string"),sg()(),Tl(470,"td",24),iN(471,"-"),sg(),Tl(472,"td",25)(473,"em")(474,"strong"),iN(475,"(opcional)"),sg()(),Tl(476,"p"),iN(477,"Texto de apoio do campo"),sg()()(),Tl(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),iN(482," (p-keydown)"),Gl(483,"br"),sg()()(),Tl(484,"td",22)(485,"code",23),iN(486,"EventEmitter"),sg()(),Tl(487,"td",24),iN(488,"-"),sg(),Tl(489,"td",25)(490,"em")(491,"strong"),iN(492,"(opcional)"),sg()(),Tl(493,"p"),iN(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(495,"code"),iN(496,"KeyboardEvent"),sg(),iN(497," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),iN(502," p-label"),Gl(503,"br"),sg()()(),Tl(504,"td",22)(505,"code",28),iN(506,"string"),sg()(),Tl(507,"td",24),iN(508,"-"),sg(),Tl(509,"td",25)(510,"em")(511,"strong"),iN(512,"(opcional)"),sg()(),Tl(513,"p"),iN(514,"Texto de exibi\xE7\xE3o do "),Tl(515,"em"),iN(516,"checkbox"),sg(),iN(517,"."),sg()()(),Tl(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),iN(522," p-label-text-wrap"),Gl(523,"br"),sg()()(),Tl(524,"td",22)(525,"code",29),iN(526,"boolean"),sg()(),Tl(527,"td",24)(528,"p")(529,"code"),iN(530,"false"),sg()()(),Tl(531,"td",25)(532,"em")(533,"strong"),iN(534,"(opcional)"),sg()(),Tl(535,"p"),iN(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(537,"code"),iN(538,"p-label"),sg(),iN(539,". Quando "),Tl(540,"code"),iN(541,"p-label-text-wrap"),sg(),iN(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),iN(547," name"),Gl(548,"br"),sg()()(),Tl(549,"td",22)(550,"code",28),iN(551,"string"),sg()(),Tl(552,"td",24),iN(553,"-"),sg(),Tl(554,"td",25)(555,"p"),iN(556,"Define o nome do "),Tl(557,"em"),iN(558,"checkbox"),sg(),iN(559,"."),sg()()(),Tl(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),iN(564," p-helper"),Gl(565,"br"),sg()()(),Tl(566,"td",22)(567,"code",30),iN(568,"PoHelperOptions "),sg(),Tl(569,"code",28),iN(570," string"),sg()(),Tl(571,"td",24),iN(572,"-"),sg(),Tl(573,"td",25)(574,"em")(575,"strong"),iN(576,"(opcional)"),sg()(),Tl(577,"p"),iN(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(579,"code"),iN(580,"p-label"),sg(),iN(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(582,"code"),iN(583,"p-label"),sg(),iN(584,"."),sg(),Tl(585,"blockquote")(586,"p"),iN(587,"Para mais informa\xE7\xF5es acesse: "),Tl(588,"a",31),iN(589,"https://po-ui.io/documentation/po-helper"),sg(),iN(590,"."),sg()(),Tl(591,"blockquote")(592,"p"),iN(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(594,"code"),iN(595,"p-additional-help-tooltip"),sg(),iN(596," e "),Tl(597,"code"),iN(598,"p-additional-help"),sg(),iN(599,") ser\xE1 ignorado."),sg()()()(),Tl(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),iN(604," p-size"),Gl(605,"br"),sg()()(),Tl(606,"td",22)(607,"code",28),iN(608,"string"),sg()(),Tl(609,"td",24)(610,"p")(611,"code"),iN(612,"medium"),sg()()(),Tl(613,"td",25)(614,"em")(615,"strong"),iN(616,"(opcional)"),sg()(),Tl(617,"p"),iN(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),sg(),Tl(619,"ul")(620,"li")(621,"code"),iN(622,"small"),sg(),iN(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(624,"li")(625,"code"),iN(626,"medium"),sg(),iN(627,": 24x24."),sg(),Tl(628,"li")(629,"code"),iN(630,"large"),sg(),iN(631,": 32x32."),sg()(),Tl(632,"blockquote")(633,"p"),iN(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(635,"code"),iN(636,"medium"),sg(),iN(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(638,"a",32),iN(639,"po-theme"),sg(),iN(640,"."),sg()()()()(),Tl(641,"h3",13),iN(642,"M\xE9todos"),sg(),Tl(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),iN(649," focus "),sg()()()()(),Tl(650,"tr",25)(651,"td",25)(652,"p"),iN(653,"Fun\xE7\xE3o que atribui foco ao "),Tl(654,"em"),iN(655,"checkbox"),sg(),iN(656,"."),sg(),Tl(657,"p"),iN(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),Tl(659,"code"),iN(660,"ViewChild"),sg(),iN(661,", como por exemplo:"),sg(),Tl(662,"pre")(663,"code"),iN(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),sg()()()()(),Gl(665,"br"),Tl(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),iN(672," showAdditionalHelp "),sg()()()()(),Tl(673,"tr",25)(674,"td",25)(675,"p"),iN(676,"M\xE9todo que exibe "),Tl(677,"code"),iN(678,"p-helper"),sg(),iN(679," ou executa a a\xE7\xE3o definida em "),Tl(680,"code"),iN(681,"p-helper{eventOnClick}"),sg(),iN(682," ou em "),Tl(683,"code"),iN(684,"p-additionalHelp"),sg(),iN(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(686,"code"),iN(687,"p-keydown"),sg(),iN(688,"."),sg(),Tl(689,"blockquote")(690,"p"),iN(691,"Exibe ou oculta o conte\xFAdo do componente "),Tl(692,"code"),iN(693,"po-helper"),sg(),iN(694," quando o componente estiver com foco."),sg()(),Tl(695,"pre")(696,"code"),iN(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),sg()(),Tl(698,"pre")(699,"code"),iN(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(701,"br"),sg());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-checkbox-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),sg()()()),l&2&&(nw("p-actions",o.actions),Vp(2),nw("p-active",o.activeTab==="doc"),Vp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[lNe,Wme,jme,me,ce,ue,he],encapsulation:2,changeDetection:1})}return i})();var Ae=[{path:"",component:be}],Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[DL.forChild(Ae),DL]})}return i})();var $e=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ar,Ee]})}return i})();export{$e as DocPoCheckboxModule};