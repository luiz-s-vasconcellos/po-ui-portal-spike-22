import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,bF as mc,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,bL as H3,cd as sme,bb as OO,aB as gx,aM as gw,aN as Z0,a4 as dN,aO as pw,aP as X0,a5 as hN,b5 as Ko,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_,bc as Sx}from'./main-OS7VVRJY.js';var pe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:false,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&Hl(0,"po-checkbox",0);},dependencies:[mc],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Checkbox Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-checkbox-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,pe],encapsulation:2})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.checkbox=void 0,this.disabled=false,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=false;}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:false,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-checkbox",1),gw("ngModelChange",function(r){return Jy(d),Zx(n.checkbox,r)||(n.checkbox=r),e_(r)}),dt("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3),dN(4,"json"),Hl(5,"po-info",4),og(),Hl(6,"po-divider"),Cl(7,"form",null,0)(9,"div",2)(10,"po-input",5),gw("ngModelChange",function(r){return Jy(d),Zx(n.label,r)||(n.label=r),e_(r)}),og(),Z0(),Cl(11,"po-input",6),gw("ngModelChange",function(r){return Jy(d),Zx(n.help,r)||(n.help=r),e_(r)}),og(),Z0(),Cl(12,"po-input",7),gw("ngModelChange",function(r){return Jy(d),Zx(n.helperText,r)||(n.helperText=r),e_(r)}),og(),Z0(),Cl(13,"po-switch",8),gw("ngModelChange",function(r){return Jy(d),Zx(n.disabled,r)||(n.disabled=r),e_(r)}),og(),Z0(),Cl(14,"po-switch",9),gw("ngModelChange",function(r){return Jy(d),Zx(n.labelTextWrap,r)||(n.labelTextWrap=r),e_(r)}),og(),Z0(),Cl(15,"po-switch",10),gw("ngModelChange",function(r){return Jy(d),Zx(n.compactLabel,r)||(n.compactLabel=r),e_(r)}),og(),Z0(),Cl(16,"po-radio-group",11),gw("ngModelChange",function(r){return Jy(d),Zx(n.size,r)||(n.size=r),e_(r)}),og(),Z0(),og(),Cl(17,"div",2)(18,"po-button",12),dt("p-click",function(){return n.restore()}),og()()();}l&2&&(pw("ngModel",n.checkbox),ZE("p-helper",n.helperText)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap)("p-compact-label",n.compactLabel),X0(),Lp(3),ZE("p-value",hN(4,18,n.checkbox)),Lp(2),ZE("p-value",n.event),Lp(5),pw("ngModel",n.label),X0(),Lp(),pw("ngModel",n.help),X0(),Lp(),pw("ngModel",n.helperText),X0(),Lp(),pw("ngModel",n.disabled),X0(),Lp(),pw("ngModel",n.labelTextWrap),X0(),Lp(),pw("ngModel",n.compactLabel),X0(),Lp(),pw("ngModel",n.size),ZE("p-options",n.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,mc,q3,Nde,H3,sme,OO],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Checkbox Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-checkbox
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-checkbox-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return i})();var se=(()=>{class i{modalTerm;acceptance=false;primaryAction={action:()=>{this.modalTerm.close();},disabled:true,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&zl(Ko,7),l&2){let d;uo(d=fo())&&(n.modalTerm=d.first);}},standalone:false,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-button",1),dt("p-click",function(){Jy(d);let r=Sx(2);return e_(r.open())}),og(),Cl(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),qx(6,"MIT License"),og()(),Cl(7,"div",4)(8,"h4"),qx(9,"Copyright (c) 2019 PO UI"),og()(),Hl(10,"po-divider",4),Cl(11,"div",4)(12,"p"),qx(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),og(),Hl(14,"br"),Cl(15,"p"),qx(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),og(),Hl(17,"br"),Cl(18,"p"),qx(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),og()()(),Hl(20,"po-divider"),Cl(21,"div",6)(22,"po-checkbox",7),gw("ngModelChange",function(r){return Jy(d),Zx(n.acceptance,r)||(n.acceptance=r),e_(r)}),dt("p-change",function(){return n.primaryAction.disabled=!n.acceptance}),og(),Z0(),og()();}l&2&&(Lp(),ZE("p-primary-action",n.primaryAction),Lp(21),pw("ngModel",n.acceptance),X0());},dependencies:[sY,gk,Qt,_v,mc,Ko],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Checkbox - Acceptance Term"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-checkbox-acceptance-term"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return i})();var he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:false,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoCheckboxComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"O componente "),Cl(24,"code"),qx(25,"po-checkbox"),og(),qx(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Cl(27,"em"),qx(28,"click"),og(),qx(29," do "),Cl(30,"em"),qx(31,"mouse"),og(),qx(32," quanto por meio da tecla "),Cl(33,"em"),qx(34,"space"),og(),qx(35," quando estiver com foco."),og(),Cl(36,"p"),qx(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),og(),Cl(38,"blockquote")(39,"p"),qx(40,"O "),Cl(41,"em"),qx(42,"model"),og(),qx(43," deste componente aceitar\xE1 valores igual \xE0 "),Cl(44,"code"),qx(45,"true"),og(),qx(46,", "),Cl(47,"code"),qx(48,"false"),og(),qx(49," ou "),Cl(50,"code"),qx(51,"null"),og(),qx(52," para quando for indeterminado/mixed."),og()(),Cl(53,"p")(54,"strong"),qx(55,"Acessibilidade tratada no componente:"),og()(),Cl(56,"p"),qx(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Cl(58,"ul")(59,"li"),qx(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Cl(61,"a",6),qx(62,"WCAG 4.1.2: Name, Role, Value"),og()(),Cl(63,"li"),qx(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Cl(65,"a",7),qx(66,"WCAG 2.4.12: Focus Appearance"),og()(),Cl(67,"li"),qx(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),Cl(69,"a",8),qx(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Cl(71,"h4"),qx(72,"Tokens customiz\xE1veis"),og(),Cl(73,"p"),qx(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(75,"blockquote")(76,"p"),qx(77,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(78,"a",9),qx(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(80,"."),og()(),Cl(81,"table")(82,"thead")(83,"tr")(84,"th"),qx(85,"Propriedade"),og(),Cl(86,"th"),qx(87,"Descri\xE7\xE3o"),og(),Cl(88,"th"),qx(89,"Valor Padr\xE3o"),og()()(),Cl(90,"tbody")(91,"tr")(92,"td")(93,"strong"),qx(94,"Default Values"),og()(),Hl(95,"td")(96,"td"),og(),Cl(97,"tr")(98,"td")(99,"code"),qx(100,"--border-color"),og()(),Cl(101,"td"),qx(102,"Cor da borda"),og(),Cl(103,"td")(104,"code"),qx(105,"var(--color-neutral-dark-70)"),og()()(),Cl(106,"tr")(107,"td")(108,"code"),qx(109,"--color-unchecked"),og()(),Cl(110,"td"),qx(111,"Cor quando n\xE3o selecionado"),og(),Cl(112,"td")(113,"code"),qx(114,"var(--color-neutral-light-00)"),og()()(),Cl(115,"tr")(116,"td")(117,"code"),qx(118,"--color-checked"),og()(),Cl(119,"td"),qx(120,"Cor quando selecionado"),og(),Cl(121,"td")(122,"code"),qx(123,"var(--color-action-default)"),og()()(),Cl(124,"tr")(125,"td")(126,"code"),qx(127,"--field-container-title-justify"),og()(),Cl(128,"td"),qx(129,"Alinhamento horizontal do t\xEDtulo ("),Cl(130,"code"),qx(131,"justify-content"),og(),qx(132,")"),og(),Cl(133,"td")(134,"code"),qx(135,"space-between"),og()()(),Cl(136,"tr")(137,"td")(138,"code"),qx(139,"--field-container-title-flex"),og()(),Cl(140,"td"),qx(141,"Flex do t\xEDtulo ("),Cl(142,"code"),qx(143,"flex"),og(),qx(144,")"),og(),Cl(145,"td")(146,"code"),qx(147,"1 auto"),og()()(),Cl(148,"tr")(149,"td")(150,"strong"),qx(151,"Hover"),og()(),Hl(152,"td")(153,"td"),og(),Cl(154,"tr")(155,"td")(156,"code"),qx(157,"--color-hover"),og()(),Cl(158,"td"),qx(159,"Cor principal no estado hover"),og(),Cl(160,"td")(161,"code"),qx(162,"var(--color-action-hover)"),og()()(),Cl(163,"tr")(164,"td")(165,"code"),qx(166,"--shadow-color-hover"),og()(),Cl(167,"td"),qx(168,"Cor da sombra no estado hover"),og(),Cl(169,"td")(170,"code"),qx(171,"var(--color-brand-01-lighter)"),og()()(),Cl(172,"tr")(173,"td")(174,"strong"),qx(175,"Focused"),og()(),Hl(176,"td")(177,"td"),og(),Cl(178,"tr")(179,"td")(180,"code"),qx(181,"--outline-color-focused"),og()(),Cl(182,"td"),qx(183,"Cor do outline do estado de focus"),og(),Cl(184,"td")(185,"code"),qx(186,"var(--color-action-focus)"),og()()(),Cl(187,"tr")(188,"td")(189,"strong"),qx(190,"Disabled"),og()(),Hl(191,"td")(192,"td"),og(),Cl(193,"tr")(194,"td")(195,"code"),qx(196,"--color-unchecked-disabled"),og(),qx(197," \xA0"),og(),Cl(198,"td"),qx(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),og(),Cl(200,"td")(201,"code"),qx(202,"var(--color-action-disabled)"),og()()(),Cl(203,"tr")(204,"td")(205,"code"),qx(206,"--color-checked-disabled"),og(),qx(207," \xA0"),og(),Cl(208,"td"),qx(209,"Cor pricipal quando selecionado no estado disabled"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-neutral-dark-70)"),og()()()()()(),Cl(213,"div",10)(214,"h4",11),qx(215,"Seletor"),og(),Cl(216,"pre",12),qx(217,`<po-checkbox
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
`),og()(),Cl(218,"h4",13),qx(219,"Propriedades"),og(),Cl(220,"table",14)(221,"tr",15)(222,"th",16),qx(223,"Nome"),og(),Cl(224,"th",16),qx(225,"Tipo"),og(),Cl(226,"th",16),qx(227,"Padr\xE3o"),og(),Cl(228,"th",16),qx(229,"Descri\xE7\xE3o"),og()(),Cl(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),qx(234," (p-additional-help)"),Hl(235,"br"),og()(),Cl(236,"div",21),qx(237,"Deprecated"),og()(),Cl(238,"td",22)(239,"code",23),qx(240,"EventEmitter"),og()(),Cl(241,"td",24),qx(242,"-"),og(),Cl(243,"td",25)(244,"em")(245,"strong"),qx(246,"(opcional)"),og()(),Cl(247,"p"),qx(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(249,"blockquote")(250,"p"),qx(251,"Essa propriedade est\xE1 "),Cl(252,"strong"),qx(253,"depreciada"),og(),qx(254," e ser\xE1 removida na vers\xE3o "),Cl(255,"code"),qx(256,"23.x.x"),og(),qx(257,". Recomendamos utilizar a propriedade "),Cl(258,"code"),qx(259,"p-helper"),og(),qx(260," que oferece mais recursos e flexibilidade."),og()()()(),Cl(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),qx(265," p-additional-help-tooltip"),Hl(266,"br"),og()(),Cl(267,"div",21),qx(268,"Deprecated"),og()(),Cl(269,"td",22)(270,"code",28),qx(271,"string"),og()(),Cl(272,"td",24),qx(273,"-"),og(),Cl(274,"td",25)(275,"em")(276,"strong"),qx(277,"(opcional)"),og()(),Cl(278,"p"),qx(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(280,"code"),qx(281,"po-helper"),og(),qx(282,`.
`),Cl(283,"strong"),qx(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(285,"blockquote")(286,"p"),qx(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(288,"blockquote")(289,"p"),qx(290,"Essa propriedade est\xE1 "),Cl(291,"strong"),qx(292,"depreciada"),og(),qx(293," e ser\xE1 removida na vers\xE3o "),Cl(294,"code"),qx(295,"23.x.x"),og(),qx(296,". Recomendamos utilizar a propriedade "),Cl(297,"code"),qx(298,"p-helper"),og(),qx(299," que oferece mais recursos e flexibilidade."),og()()()(),Cl(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),qx(304," p-append-in-body"),Hl(305,"br"),og()()(),Cl(306,"td",22)(307,"code",29),qx(308,"boolean"),og()(),Cl(309,"td",24)(310,"p")(311,"code"),qx(312,"false"),og()()(),Cl(313,"td",25)(314,"em")(315,"strong"),qx(316,"(opcional)"),og()(),Cl(317,"p"),qx(318,"Define que o popover ("),Cl(319,"code"),qx(320,"p-helper"),og(),qx(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(322,"blockquote")(323,"p"),qx(324,"Quando utilizado com "),Cl(325,"code"),qx(326,"p-helper"),og(),qx(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),qx(332," p-auto-focus"),Hl(333,"br"),og()()(),Cl(334,"td",22)(335,"code",29),qx(336,"boolean"),og()(),Cl(337,"td",24)(338,"p")(339,"code"),qx(340,"false"),og()()(),Cl(341,"td",25)(342,"em")(343,"strong"),qx(344,"(opcional)"),og()(),Cl(345,"p"),qx(346,"Aplica foco no elemento ao ser iniciado."),og(),Cl(347,"blockquote")(348,"p"),qx(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),qx(354," (p-blur)"),Hl(355,"br"),og()()(),Cl(356,"td",22)(357,"code",23),qx(358,"EventEmitter"),og()(),Cl(359,"td",24),qx(360,"-"),og(),Cl(361,"td",25)(362,"em")(363,"strong"),qx(364,"(opcional)"),og()(),Cl(365,"p"),qx(366,"Evento disparado ao sair do campo."),og()()(),Cl(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),qx(371," (p-change)"),Hl(372,"br"),og()()(),Cl(373,"td",22)(374,"code",23),qx(375,"EventEmitter"),og()(),Cl(376,"td",24),qx(377,"-"),og(),Cl(378,"td",25)(379,"em")(380,"strong"),qx(381,"(opcional)"),og()(),Cl(382,"p"),qx(383,"Evento disparado quando o valor do "),Cl(384,"em"),qx(385,"checkbox"),og(),qx(386," for alterado."),og()()(),Cl(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),qx(391," p-compact-label"),Hl(392,"br"),og()()(),Cl(393,"td",22)(394,"code",29),qx(395,"boolean"),og()(),Cl(396,"td",24)(397,"p")(398,"code"),qx(399,"false"),og()()(),Cl(400,"td",25)(401,"em")(402,"strong"),qx(403,"(opcional)"),og()(),Cl(404,"p"),qx(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(406,"p"),qx(407,"Quando habilitado ("),Cl(408,"code"),qx(409,"true"),og(),qx(410,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(411,"ul")(412,"li")(413,"code"),qx(414,"po-label"),og()(),Cl(415,"li")(416,"code"),qx(417,"p-requirement (showRequired)"),og()(),Cl(418,"li")(419,"code"),qx(420,"po-helper"),og()()(),Cl(421,"p"),qx(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(423,"p"),qx(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(425,"ul")(426,"li")(427,"code"),qx(428,"--field-container-title-justify"),og()(),Cl(429,"li")(430,"code"),qx(431,"--field-container-title-flex"),og()()(),Cl(432,"p"),qx(433,"Exemplo:"),og(),Cl(434,"pre")(435,"code"),qx(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(437,"p"),qx(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),qx(443," p-disabled"),Hl(444,"br"),og()()(),Cl(445,"td",22)(446,"code",29),qx(447,"boolean"),og()(),Cl(448,"td",24)(449,"p")(450,"code"),qx(451,"false"),og()()(),Cl(452,"td",25)(453,"em")(454,"strong"),qx(455,"(opcional)"),og()(),Cl(456,"p"),qx(457,"Define o estado do "),Cl(458,"em"),qx(459,"checkbox"),og(),qx(460," como desabilitado."),og()()(),Cl(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),qx(465," p-help"),Hl(466,"br"),og()()(),Cl(467,"td",22)(468,"code",28),qx(469,"string"),og()(),Cl(470,"td",24),qx(471,"-"),og(),Cl(472,"td",25)(473,"em")(474,"strong"),qx(475,"(opcional)"),og()(),Cl(476,"p"),qx(477,"Texto de apoio do campo"),og()()(),Cl(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),qx(482," (p-keydown)"),Hl(483,"br"),og()()(),Cl(484,"td",22)(485,"code",23),qx(486,"EventEmitter"),og()(),Cl(487,"td",24),qx(488,"-"),og(),Cl(489,"td",25)(490,"em")(491,"strong"),qx(492,"(opcional)"),og()(),Cl(493,"p"),qx(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(495,"code"),qx(496,"KeyboardEvent"),og(),qx(497," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),qx(502," p-label"),Hl(503,"br"),og()()(),Cl(504,"td",22)(505,"code",28),qx(506,"string"),og()(),Cl(507,"td",24),qx(508,"-"),og(),Cl(509,"td",25)(510,"em")(511,"strong"),qx(512,"(opcional)"),og()(),Cl(513,"p"),qx(514,"Texto de exibi\xE7\xE3o do "),Cl(515,"em"),qx(516,"checkbox"),og(),qx(517,"."),og()()(),Cl(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),qx(522," p-label-text-wrap"),Hl(523,"br"),og()()(),Cl(524,"td",22)(525,"code",29),qx(526,"boolean"),og()(),Cl(527,"td",24)(528,"p")(529,"code"),qx(530,"false"),og()()(),Cl(531,"td",25)(532,"em")(533,"strong"),qx(534,"(opcional)"),og()(),Cl(535,"p"),qx(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(537,"code"),qx(538,"p-label"),og(),qx(539,". Quando "),Cl(540,"code"),qx(541,"p-label-text-wrap"),og(),qx(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),qx(547," name"),Hl(548,"br"),og()()(),Cl(549,"td",22)(550,"code",28),qx(551,"string"),og()(),Cl(552,"td",24),qx(553,"-"),og(),Cl(554,"td",25)(555,"p"),qx(556,"Define o nome do "),Cl(557,"em"),qx(558,"checkbox"),og(),qx(559,"."),og()()(),Cl(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),qx(564," p-helper"),Hl(565,"br"),og()()(),Cl(566,"td",22)(567,"code",30),qx(568,"PoHelperOptions "),og(),Cl(569,"code",28),qx(570," string"),og()(),Cl(571,"td",24),qx(572,"-"),og(),Cl(573,"td",25)(574,"em")(575,"strong"),qx(576,"(opcional)"),og()(),Cl(577,"p"),qx(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(579,"code"),qx(580,"p-label"),og(),qx(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(582,"code"),qx(583,"p-label"),og(),qx(584,"."),og(),Cl(585,"blockquote")(586,"p"),qx(587,"Para mais informa\xE7\xF5es acesse: "),Cl(588,"a",31),qx(589,"https://po-ui.io/documentation/po-helper"),og(),qx(590,"."),og()(),Cl(591,"blockquote")(592,"p"),qx(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(594,"code"),qx(595,"p-additional-help-tooltip"),og(),qx(596," e "),Cl(597,"code"),qx(598,"p-additional-help"),og(),qx(599,") ser\xE1 ignorado."),og()()()(),Cl(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),qx(604," p-size"),Hl(605,"br"),og()()(),Cl(606,"td",22)(607,"code",28),qx(608,"string"),og()(),Cl(609,"td",24)(610,"p")(611,"code"),qx(612,"medium"),og()()(),Cl(613,"td",25)(614,"em")(615,"strong"),qx(616,"(opcional)"),og()(),Cl(617,"p"),qx(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),og(),Cl(619,"ul")(620,"li")(621,"code"),qx(622,"small"),og(),qx(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(624,"li")(625,"code"),qx(626,"medium"),og(),qx(627,": 24x24."),og(),Cl(628,"li")(629,"code"),qx(630,"large"),og(),qx(631,": 32x32."),og()(),Cl(632,"blockquote")(633,"p"),qx(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(635,"code"),qx(636,"medium"),og(),qx(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(638,"a",32),qx(639,"po-theme"),og(),qx(640,"."),og()()()()(),Cl(641,"h3",13),qx(642,"M\xE9todos"),og(),Cl(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),qx(649," focus "),og()()()()(),Cl(650,"tr",25)(651,"td",25)(652,"p"),qx(653,"Fun\xE7\xE3o que atribui foco ao "),Cl(654,"em"),qx(655,"checkbox"),og(),qx(656,"."),og(),Cl(657,"p"),qx(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),Cl(659,"code"),qx(660,"ViewChild"),og(),qx(661,", como por exemplo:"),og(),Cl(662,"pre")(663,"code"),qx(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),og()()()()(),Hl(665,"br"),Cl(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),qx(672," showAdditionalHelp "),og()()()()(),Cl(673,"tr",25)(674,"td",25)(675,"p"),qx(676,"M\xE9todo que exibe "),Cl(677,"code"),qx(678,"p-helper"),og(),qx(679," ou executa a a\xE7\xE3o definida em "),Cl(680,"code"),qx(681,"p-helper{eventOnClick}"),og(),qx(682," ou em "),Cl(683,"code"),qx(684,"p-additionalHelp"),og(),qx(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(686,"code"),qx(687,"p-keydown"),og(),qx(688,"."),og(),Cl(689,"blockquote")(690,"p"),qx(691,"Exibe ou oculta o conte\xFAdo do componente "),Cl(692,"code"),qx(693,"po-helper"),og(),qx(694," quando o componente estiver com foco."),og()(),Cl(695,"pre")(696,"code"),qx(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),og()(),Cl(698,"pre")(699,"code"),qx(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(701,"br"),og());},dependencies:[Zr],encapsulation:2})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-checkbox-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),og()()()),l&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,me,ce,ue,he],encapsulation:2})}return i})();var Ae=[{path:"",component:be}],Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[bL.forChild(Ae),bL]})}return i})();var $e=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ca,Ee]})}return i})();export{$e as DocPoCheckboxModule};