import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,b7 as Ge,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,aO as Yo,bB as ga,bd as na,bC as Vp,aW as IO,al as lx,am as pw,an as $0,a4 as oN,ap as hw,aq as G0,a5 as aN,aQ as dt$1,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy,aX as _x,c3 as zo}from'./main-6SPFG3VI.js';var ce=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:false,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&Ul(0,"po-checkbox",0);},dependencies:[Ge],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Checkbox Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-checkbox-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,fe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ce],encapsulation:2})}return i})();var ue=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.checkbox=void 0,this.disabled=false,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=false;}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:false,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-checkbox",1),pw("ngModelChange",function(r){return Qy(d),$x(n.checkbox,r)||(n.checkbox=r),Jy(r)}),ut("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3),oN(4,"json"),Ul(5,"po-info",4),ng(),Ul(6,"po-divider"),wl(7,"form",null,0)(9,"div",2)(10,"po-input",5),pw("ngModelChange",function(r){return Qy(d),$x(n.label,r)||(n.label=r),Jy(r)}),ng(),$0(),wl(11,"po-input",6),pw("ngModelChange",function(r){return Qy(d),$x(n.help,r)||(n.help=r),Jy(r)}),ng(),$0(),wl(12,"po-input",7),pw("ngModelChange",function(r){return Qy(d),$x(n.helperText,r)||(n.helperText=r),Jy(r)}),ng(),$0(),wl(13,"po-switch",8),pw("ngModelChange",function(r){return Qy(d),$x(n.disabled,r)||(n.disabled=r),Jy(r)}),ng(),$0(),wl(14,"po-switch",9),pw("ngModelChange",function(r){return Qy(d),$x(n.labelTextWrap,r)||(n.labelTextWrap=r),Jy(r)}),ng(),$0(),wl(15,"po-switch",10),pw("ngModelChange",function(r){return Qy(d),$x(n.compactLabel,r)||(n.compactLabel=r),Jy(r)}),ng(),$0(),wl(16,"po-radio-group",11),pw("ngModelChange",function(r){return Qy(d),$x(n.size,r)||(n.size=r),Jy(r)}),ng(),$0(),ng(),wl(17,"div",2)(18,"po-button",12),ut("p-click",function(){return n.restore()}),ng()()();}l&2&&(hw("ngModel",n.checkbox),YE("p-helper",n.helperText)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap)("p-compact-label",n.compactLabel),G0(),Pp(3),YE("p-value",aN(4,18,n.checkbox)),Pp(2),YE("p-value",n.event),Pp(5),hw("ngModel",n.label),G0(),Pp(),hw("ngModel",n.help),G0(),Pp(),hw("ngModel",n.helperText),G0(),Pp(),hw("ngModel",n.disabled),G0(),Pp(),hw("ngModel",n.labelTextWrap),G0(),Pp(),hw("ngModel",n.compactLabel),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Ge,Yo,ga,na,Vp,IO],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Checkbox Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-checkbox
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-checkbox-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return i})();var be=(()=>{class i{modalTerm;acceptance=false;primaryAction={action:()=>{this.modalTerm.close();},disabled:true,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&$l(zo,7),l&2){let d;uo(d=fo())&&(n.modalTerm=d.first);}},standalone:false,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-button",1),ut("p-click",function(){Qy(d);let r=_x(2);return Jy(r.open())}),ng(),wl(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),Ux(6,"MIT License"),ng()(),wl(7,"div",4)(8,"h4"),Ux(9,"Copyright (c) 2019 PO UI"),ng()(),Ul(10,"po-divider",4),wl(11,"div",4)(12,"p"),Ux(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),ng(),Ul(14,"br"),wl(15,"p"),Ux(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),ng(),Ul(17,"br"),wl(18,"p"),Ux(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),ng()()(),Ul(20,"po-divider"),wl(21,"div",6)(22,"po-checkbox",7),pw("ngModelChange",function(r){return Qy(d),$x(n.acceptance,r)||(n.acceptance=r),Jy(r)}),ut("p-change",function(){return n.primaryAction.disabled=!n.acceptance}),ng(),$0(),ng()();}l&2&&(Pp(),YE("p-primary-action",n.primaryAction),Pp(21),hw("ngModel",n.acceptance),G0());},dependencies:[iY,ck,Pe$1,di,Ge,dt$1],encapsulation:2,changeDetection:1})}return i})();var Me=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Checkbox - Acceptance Term"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-checkbox-acceptance-term"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return i})();var xe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:false,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoCheckboxComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O componente "),wl(24,"code"),Ux(25,"po-checkbox"),ng(),Ux(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),wl(27,"em"),Ux(28,"click"),ng(),Ux(29," do "),wl(30,"em"),Ux(31,"mouse"),ng(),Ux(32," quanto por meio da tecla "),wl(33,"em"),Ux(34,"space"),ng(),Ux(35," quando estiver com foco."),ng(),wl(36,"p"),Ux(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),ng(),wl(38,"blockquote")(39,"p"),Ux(40,"O "),wl(41,"em"),Ux(42,"model"),ng(),Ux(43," deste componente aceitar\xE1 valores igual \xE0 "),wl(44,"code"),Ux(45,"true"),ng(),Ux(46,", "),wl(47,"code"),Ux(48,"false"),ng(),Ux(49," ou "),wl(50,"code"),Ux(51,"null"),ng(),Ux(52," para quando for indeterminado/mixed."),ng()(),wl(53,"p")(54,"strong"),Ux(55,"Acessibilidade tratada no componente:"),ng()(),wl(56,"p"),Ux(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),ng(),wl(58,"ul")(59,"li"),Ux(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),wl(61,"a",6),Ux(62,"WCAG 4.1.2: Name, Role, Value"),ng()(),wl(63,"li"),Ux(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),wl(65,"a",7),Ux(66,"WCAG 2.4.12: Focus Appearance"),ng()(),wl(67,"li"),Ux(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),wl(69,"a",8),Ux(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),ng()()(),wl(71,"h4"),Ux(72,"Tokens customiz\xE1veis"),ng(),wl(73,"p"),Ux(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(75,"blockquote")(76,"p"),Ux(77,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(78,"a",9),Ux(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(80,"."),ng()(),wl(81,"table")(82,"thead")(83,"tr")(84,"th"),Ux(85,"Propriedade"),ng(),wl(86,"th"),Ux(87,"Descri\xE7\xE3o"),ng(),wl(88,"th"),Ux(89,"Valor Padr\xE3o"),ng()()(),wl(90,"tbody")(91,"tr")(92,"td")(93,"strong"),Ux(94,"Default Values"),ng()(),Ul(95,"td")(96,"td"),ng(),wl(97,"tr")(98,"td")(99,"code"),Ux(100,"--border-color"),ng()(),wl(101,"td"),Ux(102,"Cor da borda"),ng(),wl(103,"td")(104,"code"),Ux(105,"var(--color-neutral-dark-70)"),ng()()(),wl(106,"tr")(107,"td")(108,"code"),Ux(109,"--color-unchecked"),ng()(),wl(110,"td"),Ux(111,"Cor quando n\xE3o selecionado"),ng(),wl(112,"td")(113,"code"),Ux(114,"var(--color-neutral-light-00)"),ng()()(),wl(115,"tr")(116,"td")(117,"code"),Ux(118,"--color-checked"),ng()(),wl(119,"td"),Ux(120,"Cor quando selecionado"),ng(),wl(121,"td")(122,"code"),Ux(123,"var(--color-action-default)"),ng()()(),wl(124,"tr")(125,"td")(126,"code"),Ux(127,"--field-container-title-justify"),ng()(),wl(128,"td"),Ux(129,"Alinhamento horizontal do t\xEDtulo ("),wl(130,"code"),Ux(131,"justify-content"),ng(),Ux(132,")"),ng(),wl(133,"td")(134,"code"),Ux(135,"space-between"),ng()()(),wl(136,"tr")(137,"td")(138,"code"),Ux(139,"--field-container-title-flex"),ng()(),wl(140,"td"),Ux(141,"Flex do t\xEDtulo ("),wl(142,"code"),Ux(143,"flex"),ng(),Ux(144,")"),ng(),wl(145,"td")(146,"code"),Ux(147,"1 auto"),ng()()(),wl(148,"tr")(149,"td")(150,"strong"),Ux(151,"Hover"),ng()(),Ul(152,"td")(153,"td"),ng(),wl(154,"tr")(155,"td")(156,"code"),Ux(157,"--color-hover"),ng()(),wl(158,"td"),Ux(159,"Cor principal no estado hover"),ng(),wl(160,"td")(161,"code"),Ux(162,"var(--color-action-hover)"),ng()()(),wl(163,"tr")(164,"td")(165,"code"),Ux(166,"--shadow-color-hover"),ng()(),wl(167,"td"),Ux(168,"Cor da sombra no estado hover"),ng(),wl(169,"td")(170,"code"),Ux(171,"var(--color-brand-01-lighter)"),ng()()(),wl(172,"tr")(173,"td")(174,"strong"),Ux(175,"Focused"),ng()(),Ul(176,"td")(177,"td"),ng(),wl(178,"tr")(179,"td")(180,"code"),Ux(181,"--outline-color-focused"),ng()(),wl(182,"td"),Ux(183,"Cor do outline do estado de focus"),ng(),wl(184,"td")(185,"code"),Ux(186,"var(--color-action-focus)"),ng()()(),wl(187,"tr")(188,"td")(189,"strong"),Ux(190,"Disabled"),ng()(),Ul(191,"td")(192,"td"),ng(),wl(193,"tr")(194,"td")(195,"code"),Ux(196,"--color-unchecked-disabled"),ng(),Ux(197," \xA0"),ng(),wl(198,"td"),Ux(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),ng(),wl(200,"td")(201,"code"),Ux(202,"var(--color-action-disabled)"),ng()()(),wl(203,"tr")(204,"td")(205,"code"),Ux(206,"--color-checked-disabled"),ng(),Ux(207," \xA0"),ng(),wl(208,"td"),Ux(209,"Cor pricipal quando selecionado no estado disabled"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-neutral-dark-70)"),ng()()()()()(),wl(213,"div",10)(214,"h4",11),Ux(215,"Seletor"),ng(),wl(216,"pre",12),Ux(217,`<po-checkbox
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
`),ng()(),wl(218,"h4",13),Ux(219,"Propriedades"),ng(),wl(220,"table",14)(221,"tr",15)(222,"th",16),Ux(223,"Nome"),ng(),wl(224,"th",16),Ux(225,"Tipo"),ng(),wl(226,"th",16),Ux(227,"Padr\xE3o"),ng(),wl(228,"th",16),Ux(229,"Descri\xE7\xE3o"),ng()(),wl(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),Ux(234," (p-additional-help)"),Ul(235,"br"),ng()(),wl(236,"div",21),Ux(237,"Deprecated"),ng()(),wl(238,"td",22)(239,"code",23),Ux(240,"EventEmitter"),ng()(),wl(241,"td",24),Ux(242,"-"),ng(),wl(243,"td",25)(244,"em")(245,"strong"),Ux(246,"(opcional)"),ng()(),wl(247,"p"),Ux(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(249,"blockquote")(250,"p"),Ux(251,"Essa propriedade est\xE1 "),wl(252,"strong"),Ux(253,"depreciada"),ng(),Ux(254," e ser\xE1 removida na vers\xE3o "),wl(255,"code"),Ux(256,"23.x.x"),ng(),Ux(257,". Recomendamos utilizar a propriedade "),wl(258,"code"),Ux(259,"p-helper"),ng(),Ux(260," que oferece mais recursos e flexibilidade."),ng()()()(),wl(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),Ux(265," p-additional-help-tooltip"),Ul(266,"br"),ng()(),wl(267,"div",21),Ux(268,"Deprecated"),ng()(),wl(269,"td",22)(270,"code",28),Ux(271,"string"),ng()(),wl(272,"td",24),Ux(273,"-"),ng(),wl(274,"td",25)(275,"em")(276,"strong"),Ux(277,"(opcional)"),ng()(),wl(278,"p"),Ux(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(280,"code"),Ux(281,"po-helper"),ng(),Ux(282,`.
`),wl(283,"strong"),Ux(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(285,"blockquote")(286,"p"),Ux(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(288,"blockquote")(289,"p"),Ux(290,"Essa propriedade est\xE1 "),wl(291,"strong"),Ux(292,"depreciada"),ng(),Ux(293," e ser\xE1 removida na vers\xE3o "),wl(294,"code"),Ux(295,"23.x.x"),ng(),Ux(296,". Recomendamos utilizar a propriedade "),wl(297,"code"),Ux(298,"p-helper"),ng(),Ux(299," que oferece mais recursos e flexibilidade."),ng()()()(),wl(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),Ux(304," p-append-in-body"),Ul(305,"br"),ng()()(),wl(306,"td",22)(307,"code",29),Ux(308,"boolean"),ng()(),wl(309,"td",24)(310,"p")(311,"code"),Ux(312,"false"),ng()()(),wl(313,"td",25)(314,"em")(315,"strong"),Ux(316,"(opcional)"),ng()(),wl(317,"p"),Ux(318,"Define que o popover ("),wl(319,"code"),Ux(320,"p-helper"),ng(),Ux(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(322,"blockquote")(323,"p"),Ux(324,"Quando utilizado com "),wl(325,"code"),Ux(326,"p-helper"),ng(),Ux(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),Ux(332," p-auto-focus"),Ul(333,"br"),ng()()(),wl(334,"td",22)(335,"code",29),Ux(336,"boolean"),ng()(),wl(337,"td",24)(338,"p")(339,"code"),Ux(340,"false"),ng()()(),wl(341,"td",25)(342,"em")(343,"strong"),Ux(344,"(opcional)"),ng()(),wl(345,"p"),Ux(346,"Aplica foco no elemento ao ser iniciado."),ng(),wl(347,"blockquote")(348,"p"),Ux(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),Ux(354," (p-blur)"),Ul(355,"br"),ng()()(),wl(356,"td",22)(357,"code",23),Ux(358,"EventEmitter"),ng()(),wl(359,"td",24),Ux(360,"-"),ng(),wl(361,"td",25)(362,"em")(363,"strong"),Ux(364,"(opcional)"),ng()(),wl(365,"p"),Ux(366,"Evento disparado ao sair do campo."),ng()()(),wl(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),Ux(371," (p-change)"),Ul(372,"br"),ng()()(),wl(373,"td",22)(374,"code",23),Ux(375,"EventEmitter"),ng()(),wl(376,"td",24),Ux(377,"-"),ng(),wl(378,"td",25)(379,"em")(380,"strong"),Ux(381,"(opcional)"),ng()(),wl(382,"p"),Ux(383,"Evento disparado quando o valor do "),wl(384,"em"),Ux(385,"checkbox"),ng(),Ux(386," for alterado."),ng()()(),wl(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),Ux(391," p-compact-label"),Ul(392,"br"),ng()()(),wl(393,"td",22)(394,"code",29),Ux(395,"boolean"),ng()(),wl(396,"td",24)(397,"p")(398,"code"),Ux(399,"false"),ng()()(),wl(400,"td",25)(401,"em")(402,"strong"),Ux(403,"(opcional)"),ng()(),wl(404,"p"),Ux(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(406,"p"),Ux(407,"Quando habilitado ("),wl(408,"code"),Ux(409,"true"),ng(),Ux(410,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(411,"ul")(412,"li")(413,"code"),Ux(414,"po-label"),ng()(),wl(415,"li")(416,"code"),Ux(417,"p-requirement (showRequired)"),ng()(),wl(418,"li")(419,"code"),Ux(420,"po-helper"),ng()()(),wl(421,"p"),Ux(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(423,"p"),Ux(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(425,"ul")(426,"li")(427,"code"),Ux(428,"--field-container-title-justify"),ng()(),wl(429,"li")(430,"code"),Ux(431,"--field-container-title-flex"),ng()()(),wl(432,"p"),Ux(433,"Exemplo:"),ng(),wl(434,"pre")(435,"code"),Ux(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(437,"p"),Ux(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),Ux(443," p-disabled"),Ul(444,"br"),ng()()(),wl(445,"td",22)(446,"code",29),Ux(447,"boolean"),ng()(),wl(448,"td",24)(449,"p")(450,"code"),Ux(451,"false"),ng()()(),wl(452,"td",25)(453,"em")(454,"strong"),Ux(455,"(opcional)"),ng()(),wl(456,"p"),Ux(457,"Define o estado do "),wl(458,"em"),Ux(459,"checkbox"),ng(),Ux(460," como desabilitado."),ng()()(),wl(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),Ux(465," p-help"),Ul(466,"br"),ng()()(),wl(467,"td",22)(468,"code",28),Ux(469,"string"),ng()(),wl(470,"td",24),Ux(471,"-"),ng(),wl(472,"td",25)(473,"em")(474,"strong"),Ux(475,"(opcional)"),ng()(),wl(476,"p"),Ux(477,"Texto de apoio do campo"),ng()()(),wl(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),Ux(482," (p-keydown)"),Ul(483,"br"),ng()()(),wl(484,"td",22)(485,"code",23),Ux(486,"EventEmitter"),ng()(),wl(487,"td",24),Ux(488,"-"),ng(),wl(489,"td",25)(490,"em")(491,"strong"),Ux(492,"(opcional)"),ng()(),wl(493,"p"),Ux(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(495,"code"),Ux(496,"KeyboardEvent"),ng(),Ux(497," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),Ux(502," p-label"),Ul(503,"br"),ng()()(),wl(504,"td",22)(505,"code",28),Ux(506,"string"),ng()(),wl(507,"td",24),Ux(508,"-"),ng(),wl(509,"td",25)(510,"em")(511,"strong"),Ux(512,"(opcional)"),ng()(),wl(513,"p"),Ux(514,"Texto de exibi\xE7\xE3o do "),wl(515,"em"),Ux(516,"checkbox"),ng(),Ux(517,"."),ng()()(),wl(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),Ux(522," p-label-text-wrap"),Ul(523,"br"),ng()()(),wl(524,"td",22)(525,"code",29),Ux(526,"boolean"),ng()(),wl(527,"td",24)(528,"p")(529,"code"),Ux(530,"false"),ng()()(),wl(531,"td",25)(532,"em")(533,"strong"),Ux(534,"(opcional)"),ng()(),wl(535,"p"),Ux(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(537,"code"),Ux(538,"p-label"),ng(),Ux(539,". Quando "),wl(540,"code"),Ux(541,"p-label-text-wrap"),ng(),Ux(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),Ux(547," name"),Ul(548,"br"),ng()()(),wl(549,"td",22)(550,"code",28),Ux(551,"string"),ng()(),wl(552,"td",24),Ux(553,"-"),ng(),wl(554,"td",25)(555,"p"),Ux(556,"Define o nome do "),wl(557,"em"),Ux(558,"checkbox"),ng(),Ux(559,"."),ng()()(),wl(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),Ux(564," p-helper"),Ul(565,"br"),ng()()(),wl(566,"td",22)(567,"code",30),Ux(568,"PoHelperOptions "),ng(),wl(569,"code",28),Ux(570," string"),ng()(),wl(571,"td",24),Ux(572,"-"),ng(),wl(573,"td",25)(574,"em")(575,"strong"),Ux(576,"(opcional)"),ng()(),wl(577,"p"),Ux(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(579,"code"),Ux(580,"p-label"),ng(),Ux(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(582,"code"),Ux(583,"p-label"),ng(),Ux(584,"."),ng(),wl(585,"blockquote")(586,"p"),Ux(587,"Para mais informa\xE7\xF5es acesse: "),wl(588,"a",31),Ux(589,"https://po-ui.io/documentation/po-helper"),ng(),Ux(590,"."),ng()(),wl(591,"blockquote")(592,"p"),Ux(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(594,"code"),Ux(595,"p-additional-help-tooltip"),ng(),Ux(596," e "),wl(597,"code"),Ux(598,"p-additional-help"),ng(),Ux(599,") ser\xE1 ignorado."),ng()()()(),wl(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),Ux(604," p-size"),Ul(605,"br"),ng()()(),wl(606,"td",22)(607,"code",28),Ux(608,"string"),ng()(),wl(609,"td",24)(610,"p")(611,"code"),Ux(612,"medium"),ng()()(),wl(613,"td",25)(614,"em")(615,"strong"),Ux(616,"(opcional)"),ng()(),wl(617,"p"),Ux(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),ng(),wl(619,"ul")(620,"li")(621,"code"),Ux(622,"small"),ng(),Ux(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(624,"li")(625,"code"),Ux(626,"medium"),ng(),Ux(627,": 24x24."),ng(),wl(628,"li")(629,"code"),Ux(630,"large"),ng(),Ux(631,": 32x32."),ng()(),wl(632,"blockquote")(633,"p"),Ux(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(635,"code"),Ux(636,"medium"),ng(),Ux(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(638,"a",32),Ux(639,"po-theme"),ng(),Ux(640,"."),ng()()()()(),wl(641,"h3",13),Ux(642,"M\xE9todos"),ng(),wl(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),Ux(649," focus "),ng()()()()(),wl(650,"tr",25)(651,"td",25)(652,"p"),Ux(653,"Fun\xE7\xE3o que atribui foco ao "),wl(654,"em"),Ux(655,"checkbox"),ng(),Ux(656,"."),ng(),wl(657,"p"),Ux(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),wl(659,"code"),Ux(660,"ViewChild"),ng(),Ux(661,", como por exemplo:"),ng(),wl(662,"pre")(663,"code"),Ux(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),ng()()()()(),Ul(665,"br"),wl(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),Ux(672," showAdditionalHelp "),ng()()()()(),wl(673,"tr",25)(674,"td",25)(675,"p"),Ux(676,"M\xE9todo que exibe "),wl(677,"code"),Ux(678,"p-helper"),ng(),Ux(679," ou executa a a\xE7\xE3o definida em "),wl(680,"code"),Ux(681,"p-helper{eventOnClick}"),ng(),Ux(682," ou em "),wl(683,"code"),Ux(684,"p-additionalHelp"),ng(),Ux(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(686,"code"),Ux(687,"p-keydown"),ng(),Ux(688,"."),ng(),wl(689,"blockquote")(690,"p"),Ux(691,"Exibe ou oculta o conte\xFAdo do componente "),wl(692,"code"),Ux(693,"po-helper"),ng(),Ux(694," quando o componente estiver com foco."),ng()(),wl(695,"pre")(696,"code"),Ux(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),ng()(),wl(698,"pre")(699,"code"),Ux(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(701,"br"),ng());},dependencies:[fP],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-checkbox-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),ng()()()),l&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,se,he,Ee,xe],encapsulation:2})}return i})();var Ie=[{path:"",component:Se}],Ce=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(Ie),vL]})}return i})();var dt=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[u5,Ce]})}return i})();export{dt as DocPoCheckboxModule};