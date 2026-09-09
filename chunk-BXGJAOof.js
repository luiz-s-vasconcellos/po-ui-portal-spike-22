import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,En as w4,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce$1,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qi as pN,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Wn as Be,X as N4,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,ai as _N,ba as yw,dr as I,er as EN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,mr as JE,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN}from"./main-3EWTGE7T.js";var Oe=()=>({label:`Option 1`,value:`1`});var Le=()=>({label:`Option 2`,value:`2`});var De=(a,K)=>[a,K];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`p-options`]],template:function(p,i){p&1&&Gl(0,`po-select`,0),p&2&&nw(`p-options`,EN(3,De,_N(1,Oe),_N(2,Le)))},dependencies:[fbe],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Select Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-select-basic/sample-po-select-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-select-basic/sample-po-select-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-select-basic`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ee],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{cdr=f(Be);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`readonly`,label:`Read Only`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.select=``,this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size=`medium`}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(te=>te.label===i&&`options`in te);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-labs`]],standalone:!1,decls:33,vars:37,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`select`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-options`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po select options group`],[`name`,`selectOptionGroupSwitch`,`p-label`,`Select options group`,1,`po-lg-2`,`po-md-12`,3,`p-change`,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po select options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-lg-3`,`po-md-6`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(p,i){if(p&1){let m=Ax();Tl(0,`po-select`,2),ww(`ngModelChange`,function(o){return Ky(m),uN(i.select,o)||(i.select=o),Xy(o)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,3),Gl(3,`po-info`,4)(4,`po-info`,5),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0),Gl(8,`po-divider`,6),Tl(9,`div`,3)(10,`po-switch`,7),ht(`p-change`,function(o){return i.restoreSwitch(o)}),ww(`ngModelChange`,function(o){return Ky(m),uN(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),Xy(o)}),ag(),a0(),Tl(11,`po-select`,8),ww(`ngModelChange`,function(o){return Ky(m),uN(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),Xy(o)}),ht(`p-change`,function(){return i.optionsGroupSelection()}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(o){return Ky(m),uN(i.optionsGroup,o)||(i.optionsGroup=o),Xy(o)}),ag(),a0(),ag(),Gl(13,`po-divider`,10),Tl(14,`div`,3)(15,`po-input`,11),ww(`ngModelChange`,function(o){return Ky(m),uN(i.option.label,o)||(i.option.label=o),Xy(o)}),ag(),a0(),Tl(16,`po-input`,12),ww(`ngModelChange`,function(o){return Ky(m),uN(i.option.value,o)||(i.option.value=o),Xy(o)}),ag(),a0(),ag(),Tl(17,`div`,3)(18,`po-button`,13),ht(`p-click`,function(){return i.addOption()}),ag()()(),Gl(19,`po-divider`),Tl(20,`form`,null,1)(22,`po-input`,14),ww(`ngModelChange`,function(o){return Ky(m),uN(i.label,o)||(i.label=o),Xy(o)}),ag(),a0(),Tl(23,`po-input`,15),ww(`ngModelChange`,function(o){return Ky(m),uN(i.help,o)||(i.help=o),Xy(o)}),ag(),a0(),Tl(24,`po-input`,16),ww(`ngModelChange`,function(o){return Ky(m),uN(i.helperText,o)||(i.helperText=o),Xy(o)}),ag(),a0(),Tl(25,`po-input`,17),ww(`ngModelChange`,function(o){return Ky(m),uN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),ag(),a0(),Tl(26,`po-input`,18),ww(`ngModelChange`,function(o){return Ky(m),uN(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),Xy(o)}),ag(),a0(),Tl(27,`po-checkbox-group`,19),ww(`ngModelChange`,function(o){return Ky(m),uN(i.properties,o)||(i.properties=o),Xy(o)}),ag(),a0(),Tl(28,`po-radio-group`,20),ww(`ngModelChange`,function(o){return Ky(m),uN(i.size,o)||(i.size=o),Xy(o)}),ag(),a0(),Tl(29,`div`,3)(30,`div`,21)(31,`po-button`,22),ht(`p-click`,function(){return i.restore()}),ag()()(),Gl(32,`form`),ag()}if(p&2){let m=Bx(7);Ew(`ngModel`,i.select),nw(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-options`,i.options)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),l0(),jp(3),nw(`p-value`,i.select),jp(),nw(`p-value`,i.event),jp(6),Ew(`ngModel`,i.selectOptionGroupSwitch),l0(),jp(),Ew(`ngModel`,i.selectedOptionsGroup),nw(`p-disabled`,!i.selectOptionGroupSwitch)(`p-options`,i.optionsGroupList),l0(),jp(),Ew(`ngModel`,i.optionsGroup),nw(`p-disabled`,!i.selectOptionGroupSwitch),l0(),jp(3),Ew(`ngModel`,i.option.label),l0(),jp(),Ew(`ngModel`,i.option.value),l0(),jp(2),nw(`p-disabled`,m.invalid),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.fieldErrorMessage),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,fbe,j4,ybe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Select Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-select-labs/sample-po-select-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-select>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

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

  <div class="po-row">
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-select-labs/sample-po-select-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  helperText: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-select-labs`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ge,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,fe],encapsulation:2,changeDetection:1})}return a})();var ee=(()=>{class a{http=f(ob);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(p){return new(p||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Ie(a,K){if(a&1&&(Tl(0,`div`,17),Gl(1,`po-avatar`,18),Tl(2,`div`,19)(3,`div`,20),cN(4),ag(),Tl(5,`div`,21),cN(6),ag()()()),a&2){let r=K.$implicit;jp(),nw(`p-src`,pN(`https://po-sample-api.onrender.com/v1/sampleSelect/`,r.value,`.png`)),jp(3),yw(r.label),jp(2),yw(r.value)}}var xe=(()=>{class a{sampleService=f(ee);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:`CPF`,value:`CPF`},{label:`CNPJ`,value:`CNPJ`}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r===`CPF`?(this.documentLabel=`CPF Number`,this.mask=`999.999.999-99`,this.minLength=14,this.nameLabel=`Client Name`):(this.documentLabel=`CNPJ Number`,this.mask=`99.999.999/9999-99`,this.minLength=18,this.nameLabel=`Company Name`),this.address=``,this.document=``,this.name=``}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType=`CPF`}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:``}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:``}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state=`sp`,this.getCitiesByState(this.state)})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-customer-registration`]],standalone:!1,features:[Ce$1([ee])],decls:27,vars:22,consts:[[`f`,`ngForm`],[`modal`,``],[1,`po-row`],[`name`,`documentType`,`p-label`,`Document type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`document`,`p-mask-format-model`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`,`p-mask`,`p-minlength`],[`name`,`name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Send Informations`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Informations`],[`p-label`,`Document type`,1,`po-md-6`,3,`p-value`],[1,`po-md-6`,3,`p-label`,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`State`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`],[1,`sample-select-option-template-container`],[`p-size`,`xs`,3,`p-src`],[1,`sample-select-option-template-margin`],[1,`sample-select-option-template-label`],[1,`sample-select-option-template-value`]],template:function(p,i){if(p&1){let m=Ax();Tl(0,`form`,null,0)(2,`div`,2)(3,`po-radio-group`,3),ww(`ngModelChange`,function(o){return Ky(m),uN(i.documentType,o)||(i.documentType=o),Xy(o)}),ht(`p-change`,function(o){return i.changeType(o)}),ag(),a0(),Tl(4,`po-input`,4),ww(`ngModelChange`,function(o){return Ky(m),uN(i.document,o)||(i.document=o),Xy(o)}),ag(),a0(),ag(),Tl(5,`div`,2)(6,`po-input`,5),ww(`ngModelChange`,function(o){return Ky(m),uN(i.name,o)||(i.name=o),Xy(o)}),ag(),a0(),Tl(7,`po-input`,6),ww(`ngModelChange`,function(o){return Ky(m),uN(i.address,o)||(i.address=o),Xy(o)}),ag(),a0(),ag(),Tl(8,`div`,2)(9,`po-select`,7),ww(`ngModelChange`,function(o){return Ky(m),uN(i.state,o)||(i.state=o),Xy(o)}),ht(`p-change`,function(){return i.onChangeState()}),JE(10,Ie,7,4,`ng-template`,8),ag(),a0(),Tl(11,`po-select`,9),ww(`ngModelChange`,function(o){return Ky(m),uN(i.city,o)||(i.city=o),Xy(o)}),ag(),a0(),ag(),Tl(12,`div`,2)(13,`po-button`,10),ht(`p-click`,function(){Ky(m);return Xy(Bx(15).open())}),ag()()(),Tl(14,`po-modal`,11,1)(16,`div`,2),Gl(17,`po-info`,12)(18,`po-info`,13),ag(),Gl(19,`po-divider`),Tl(20,`div`,2),Gl(21,`po-info`,13)(22,`po-info`,14),ag(),Gl(23,`po-divider`),Tl(24,`div`,2),Gl(25,`po-info`,15)(26,`po-info`,16),ag()()}if(p&2){let m=Bx(1);jp(3),Ew(`ngModel`,i.documentType),nw(`p-options`,i.options),l0(),jp(),Ew(`ngModel`,i.document),nw(`p-label`,i.documentLabel)(`p-mask`,i.mask)(`p-minlength`,i.minLength),l0(),jp(2),Ew(`ngModel`,i.name),nw(`p-label`,i.nameLabel),l0(),jp(),Ew(`ngModel`,i.address),l0(),jp(2),Ew(`ngModel`,i.state),nw(`p-options`,i.stateOptions),l0(),jp(2),Ew(`ngModel`,i.city),nw(`p-options`,i.cityOptions),l0(),jp(2),nw(`p-disabled`,m.invalid),jp(4),nw(`p-value`,i.documentType),jp(),nw(`p-label`,i.documentLabel)(`p-value`,i.document),jp(3),nw(`p-label`,i.nameLabel)(`p-value`,i.name),jp(),nw(`p-value`,i.address),jp(3),nw(`p-value`,i.getStateByValue(i.state)),jp(),nw(`p-value`,i.getCityByValue(i.city))}},dependencies:[yY,gY,mY,Ak,Tk,w4,Zt,Xy$1,iU,L0e,fbe,ybe,vr],styles:[`.sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}`],changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-customer-registration-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Select - Customer registration`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styleUrls: ['./sample-po-select-customer-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  private sampleService = inject(SamplePoSelectCustomerRegistrationService);

  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),ag()()(),Tl(25,`po-tab`,10)(26,`div`)(27,`label`,6),cN(28,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`),ag(),Tl(29,`pre`,11),cN(30,`.sample-select-option-template-container {
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
}

.sample-select-option-template-margin {
  margin: 5px;
}

.sample-select-option-template-label {
  font-size: 16px;
}

.sample-select-option-template-value {
  font-size: 12px;
  text-transform: uppercase;
}
`),ag()()()()(),Tl(31,`div`,12),Gl(32,`sample-po-select-customer-registration`),ag(),Gl(33,`hr`)),p&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,We,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,xe],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{select;fieldLabel=`nomeFantasia`;fieldValue=`cnpj`;empresas=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];labels=[{label:`Dados`,options:[{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`email`,value:`email`}]},{label:`Cidade`,options:[{label:`origem`,value:`origem`}]}];values=[{label:`codigo`,value:`codigo`},{label:`cnpj`,value:`cnpj`},{label:`id`,value:`id`},{label:`data`,value:`data`}];onChange(r){this.select=void 0}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-companies`]],standalone:!1,decls:5,vars:9,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`ngModelChange`,`ngModel`,`p-field-value`,`p-field-label`,`p-options`],[`p-label`,`Model`,`name`,`selectInfo`,3,`p-valueChange`,`p-value`],[1,`po-row`],[`name`,`fieldLabel`,`p-label`,`p-field-label`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`],[`name`,`selectValue`,`p-label`,`p-field-value`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`]],template:function(p,i){p&1&&(Tl(0,`po-select`,0),ww(`ngModelChange`,function(d){return uN(i.select,d)||(i.select=d),d}),ag(),a0(),Tl(1,`po-info`,1),ww(`p-valueChange`,function(d){return uN(i.select,d)||(i.select=d),d}),ag(),Tl(2,`div`,2)(3,`po-select`,3),ht(`p-change`,function(d){return i.onChange(d)}),ww(`ngModelChange`,function(d){return uN(i.fieldLabel,d)||(i.fieldLabel=d),d}),ag(),a0(),Tl(4,`po-select`,4),ht(`p-change`,function(d){return i.onChange(d)}),ww(`ngModelChange`,function(d){return uN(i.fieldValue,d)||(i.fieldValue=d),d}),ag(),a0(),ag()),p&2&&(Ew(`ngModel`,i.select),nw(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel)(`p-options`,i.empresas),l0(),jp(),Ew(`p-value`,i.select),jp(2),nw(`p-options`,i.labels),Ew(`ngModel`,i.fieldLabel),l0(),jp(),nw(`p-options`,i.values),Ew(`ngModel`,i.fieldValue),l0())},dependencies:[gY,Ak,fbe,ybe],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-companies-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Select Companies`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-select-companies/sample-po-select-companies.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-select-companies/sample-po-select-companies.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-select-companies`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,je,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,_e],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-select-doc`]],standalone:!1,decls:1101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo-option-template`],[`href`,`/documentation/po-select-option-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(p,i){p&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoSelectComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),ag(),Tl(24,`blockquote`)(25,`p`),cN(26,`Ao passar um valor para o `),Tl(27,`em`),cN(28,`model`),ag(),cN(29,` que não está na lista de opções, o mesmo será definido como `),Tl(30,`code`),cN(31,`undefined`),ag(),cN(32,`.`),ag()(),Tl(33,`p`),cN(34,`Também existe a possibilidade de utilizar um `),Tl(35,`em`),cN(36,`template`),ag(),cN(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Tl(38,`strong`)(39,`a`,6),cN(40,`p-combo-option-template`),ag()(),cN(41,`.`),ag(),Tl(42,`blockquote`)(43,`p`),cN(44,`Obs: o template `),Tl(45,`strong`)(46,`a`,7),cN(47,`p-select-option-template`),ag()(),cN(48,` será depreciado na versão 14.x.x.`),ag()(),Tl(49,`h4`),cN(50,`Tokens customizáveis`),ag(),Tl(51,`p`),cN(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(53,`blockquote`)(54,`p`),cN(55,`Para maiores informações, acesse o guia `),Tl(56,`a`,8),cN(57,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(58,`.`),ag()(),Tl(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),cN(63,`Propriedade`),ag(),Tl(64,`th`),cN(65,`Descrição`),ag(),Tl(66,`th`),cN(67,`Valor Padrão`),ag()()(),Tl(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),cN(72,`Default Values`),ag()(),Gl(73,`td`)(74,`td`),ag(),Tl(75,`tr`)(76,`td`)(77,`code`),cN(78,`--font-family`),ag()(),Tl(79,`td`),cN(80,`Família tipográfica usada`),ag(),Tl(81,`td`)(82,`code`),cN(83,`var(--font-family-theme)`),ag()()(),Tl(84,`tr`)(85,`td`)(86,`code`),cN(87,`--font-size`),ag()(),Tl(88,`td`),cN(89,`Tamanho da fonte`),ag(),Tl(90,`td`)(91,`code`),cN(92,`var(--font-size-default)`),ag()()(),Tl(93,`tr`)(94,`td`)(95,`code`),cN(96,`--text-color-empty`),ag()(),Tl(97,`td`),cN(98,`Cor do placeholder`),ag(),Tl(99,`td`)(100,`code`),cN(101,`var(--color-neutral-light-30)`),ag()()(),Tl(102,`tr`)(103,`td`)(104,`code`),cN(105,`--color`),ag()(),Tl(106,`td`),cN(107,`Cor da borda`),ag(),Tl(108,`td`)(109,`code`),cN(110,`var(--color-neutral-dark-70)`),ag()()(),Tl(111,`tr`)(112,`td`)(113,`code`),cN(114,`--background`),ag()(),Tl(115,`td`),cN(116,`Cor de background`),ag(),Tl(117,`td`)(118,`code`),cN(119,`var(--color-neutral-light-05)`),ag()()(),Tl(120,`tr`)(121,`td`)(122,`code`),cN(123,`--text-color`),ag()(),Tl(124,`td`),cN(125,`Cor do texto`),ag(),Tl(126,`td`)(127,`code`),cN(128,`var(--color-neutral-dark-90)`),ag()()(),Tl(129,`tr`)(130,`td`)(131,`code`),cN(132,`--padding-horizontal`),ag()(),Tl(133,`td`),cN(134,`Preenchimento horizontal`),ag(),Tl(135,`td`)(136,`code`),cN(137,`0.5em`),ag()()(),Tl(138,`tr`)(139,`td`)(140,`code`),cN(141,`--padding-vertical`),ag()(),Tl(142,`td`),cN(143,`Preenchimento vertical`),ag(),Tl(144,`td`)(145,`code`),cN(146,`0.7em`),ag()()(),Tl(147,`tr`)(148,`td`)(149,`code`),cN(150,`--field-container-title-justify`),ag()(),Tl(151,`td`),cN(152,`Alinhamento horizontal do título (`),Tl(153,`code`),cN(154,`justify-content`),ag(),cN(155,`)`),ag(),Tl(156,`td`)(157,`code`),cN(158,`space-between`),ag()()(),Tl(159,`tr`)(160,`td`)(161,`code`),cN(162,`--field-container-title-flex`),ag()(),Tl(163,`td`),cN(164,`Flex do título (`),Tl(165,`code`),cN(166,`flex`),ag(),cN(167,`)`),ag(),Tl(168,`td`)(169,`code`),cN(170,`1 auto`),ag()()(),Tl(171,`tr`)(172,`td`)(173,`strong`),cN(174,`Hover`),ag()(),Gl(175,`td`)(176,`td`),ag(),Tl(177,`tr`)(178,`td`)(179,`code`),cN(180,`--color-hover`),ag()(),Tl(181,`td`),cN(182,`Cor principal no estado hover`),ag(),Tl(183,`td`)(184,`code`),cN(185,`var(--color-brand-01-dark)`),ag()()(),Tl(186,`tr`)(187,`td`)(188,`code`),cN(189,`--background-hover`),ag()(),Tl(190,`td`),cN(191,`Cor de background no estado hover`),ag(),Tl(192,`td`)(193,`code`),cN(194,`var(--color-brand-01-lighter)`),ag()()(),Tl(195,`tr`)(196,`td`)(197,`strong`),cN(198,`Focused`),ag()(),Gl(199,`td`)(200,`td`),ag(),Tl(201,`tr`)(202,`td`)(203,`code`),cN(204,`--outline-color-focused`),ag()(),Tl(205,`td`),cN(206,`Cor do outline do estado de focus`),ag(),Tl(207,`td`)(208,`code`),cN(209,`var(--color-action-focus)`),ag()()(),Tl(210,`tr`)(211,`td`)(212,`code`),cN(213,`--color-focused`),ag()(),Tl(214,`td`),cN(215,`Cor da borda no estado de focus`),ag(),Tl(216,`td`)(217,`code`),cN(218,`var(--color-action-default)`),ag()()(),Tl(219,`tr`)(220,`td`)(221,`strong`),cN(222,`Disabled`),ag()(),Gl(223,`td`)(224,`td`),ag(),Tl(225,`tr`)(226,`td`)(227,`code`),cN(228,`--color-disabled`),ag()(),Tl(229,`td`),cN(230,`Cor principal no estado disabled`),ag(),Tl(231,`td`)(232,`code`),cN(233,`var(--color-neutral-light-30)`),ag()()(),Tl(234,`tr`)(235,`td`)(236,`code`),cN(237,`--background-color-disabled`),ag(),cN(238,`\xA0`),ag(),Tl(239,`td`),cN(240,`Cor de background no estado disabled`),ag(),Tl(241,`td`)(242,`code`),cN(243,`var(--color-neutral-light-20)`),ag()()()()()(),Tl(244,`div`,9)(245,`h4`,10),cN(246,`Seletor`),ag(),Tl(247,`pre`,11),cN(248,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),ag()(),Tl(249,`h4`,12),cN(250,`Propriedades`),ag(),Tl(251,`table`,13)(252,`tr`,14)(253,`th`,15),cN(254,`Nome`),ag(),Tl(255,`th`,15),cN(256,`Tipo`),ag(),Tl(257,`th`,15),cN(258,`Padrão`),ag(),Tl(259,`th`,15),cN(260,`Descrição`),ag()(),Tl(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),cN(265,` (p-additional-help)`),Gl(266,`br`),ag()(),Tl(267,`div`,20),cN(268,`Deprecated`),ag()(),Tl(269,`td`,21)(270,`code`,22),cN(271,`EventEmitter`),ag()(),Tl(272,`td`,23),cN(273,`-`),ag(),Tl(274,`td`,24)(275,`em`)(276,`strong`),cN(277,`(opcional)`),ag()(),Tl(278,`p`),cN(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(280,`blockquote`)(281,`p`),cN(282,`Essa propriedade está `),Tl(283,`strong`),cN(284,`depreciada`),ag(),cN(285,` e será removida na versão `),Tl(286,`code`),cN(287,`23.x.x`),ag(),cN(288,`. Recomendamos utilizar a propriedade `),Tl(289,`code`),cN(290,`p-helper`),ag(),cN(291,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(292,`tr`,16)(293,`td`,17)(294,`div`,25)(295,`span`,26),cN(296,` p-additional-help-tooltip`),Gl(297,`br`),ag()(),Tl(298,`div`,20),cN(299,`Deprecated`),ag()(),Tl(300,`td`,21)(301,`code`,27),cN(302,`string`),ag()(),Tl(303,`td`,23),cN(304,`-`),ag(),Tl(305,`td`,24)(306,`em`)(307,`strong`),cN(308,`(opcional)`),ag()(),Tl(309,`p`),cN(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(311,`code`),cN(312,`po-helper`),ag(),cN(313,`.
`),Tl(314,`strong`),cN(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(316,`blockquote`)(317,`p`),cN(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(319,`blockquote`)(320,`p`),cN(321,`Essa propriedade está `),Tl(322,`strong`),cN(323,`depreciada`),ag(),cN(324,` e será removida na versão `),Tl(325,`code`),cN(326,`23.x.x`),ag(),cN(327,`. Recomendamos utilizar a propriedade `),Tl(328,`code`),cN(329,`p-helper`),ag(),cN(330,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(331,`tr`,16)(332,`td`,17)(333,`div`,25)(334,`span`,26),cN(335,` p-append-in-body`),Gl(336,`br`),ag()()(),Tl(337,`td`,21)(338,`code`,28),cN(339,`boolean`),ag()(),Tl(340,`td`,23)(341,`p`)(342,`code`),cN(343,`false`),ag()()(),Tl(344,`td`,24)(345,`em`)(346,`strong`),cN(347,`(opcional)`),ag()(),Tl(348,`p`),cN(349,`Define que o popover (`),Tl(350,`code`),cN(351,`p-helper`),ag(),cN(352,` e/ou `),Tl(353,`code`),cN(354,`p-error-limit`),ag(),cN(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(356,`blockquote`)(357,`p`),cN(358,`Quando utilizado com `),Tl(359,`code`),cN(360,`p-helper`),ag(),cN(361,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(362,`tr`,16)(363,`td`,17)(364,`div`,18)(365,`span`,19),cN(366,` (p-blur)`),Gl(367,`br`),ag()()(),Tl(368,`td`,21)(369,`code`,22),cN(370,`EventEmitter`),ag()(),Tl(371,`td`,23),cN(372,`-`),ag(),Tl(373,`td`,24)(374,`em`)(375,`strong`),cN(376,`(opcional)`),ag()(),Tl(377,`p`),cN(378,`Evento disparado ao sair do campo.`),ag()()(),Tl(379,`tr`,16)(380,`td`,17)(381,`div`,18)(382,`span`,19),cN(383,` (p-change)`),Gl(384,`br`),ag()()(),Tl(385,`td`,21)(386,`code`,22),cN(387,`EventEmitter`),ag()(),Tl(388,`td`,23),cN(389,`-`),ag(),Tl(390,`td`,24)(391,`em`)(392,`strong`),cN(393,`(opcional)`),ag()(),Tl(394,`p`),cN(395,`Evento disparado ao alterar valor do campo.`),ag()()(),Tl(396,`tr`,16)(397,`td`,17)(398,`div`,18)(399,`span`,19),cN(400,` (p-change-model)`),Gl(401,`br`),ag()()(),Tl(402,`td`,21)(403,`code`,22),cN(404,`EventEmitter`),ag()(),Tl(405,`td`,23),cN(406,`-`),ag(),Tl(407,`td`,24)(408,`em`)(409,`strong`),cN(410,`(opcional)`),ag()(),Tl(411,`p`),cN(412,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(413,`code`),cN(414,`setValue`),ag(),cN(415,`, `),Tl(416,`code`),cN(417,`patchValue`),ag(),cN(418,`, carregamento assíncrono).`),ag(),Tl(419,`p`),cN(420,`Diferentemente do `),Tl(421,`code`),cN(422,`p-change`),ag(),cN(423,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(424,`code`),cN(425,`p-change-model`),ag(),cN(426,` cobre todos os cenários de alteração de valor.`),ag(),Tl(427,`p`),cN(428,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(429,`tr`,16)(430,`td`,17)(431,`div`,25)(432,`span`,26),cN(433,` p-compact-label`),Gl(434,`br`),ag()()(),Tl(435,`td`,21)(436,`code`,28),cN(437,`boolean`),ag()(),Tl(438,`td`,23)(439,`p`)(440,`code`),cN(441,`false`),ag()()(),Tl(442,`td`,24)(443,`em`)(444,`strong`),cN(445,`(opcional)`),ag()(),Tl(446,`p`),cN(447,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(448,`p`),cN(449,`Quando habilitado (`),Tl(450,`code`),cN(451,`true`),ag(),cN(452,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(453,`ul`)(454,`li`)(455,`code`),cN(456,`po-label`),ag()(),Tl(457,`li`)(458,`code`),cN(459,`p-requirement (showRequired)`),ag()(),Tl(460,`li`)(461,`code`),cN(462,`po-helper`),ag()()(),Tl(463,`p`),cN(464,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(465,`p`),cN(466,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(467,`ul`)(468,`li`)(469,`code`),cN(470,`--field-container-title-justify`),ag()(),Tl(471,`li`)(472,`code`),cN(473,`--field-container-title-flex`),ag()()(),Tl(474,`p`),cN(475,`Exemplo:`),ag(),Tl(476,`pre`)(477,`code`),cN(478,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(479,`p`),cN(480,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(481,`tr`,16)(482,`td`,17)(483,`div`,25)(484,`span`,26),cN(485,` p-disabled`),Gl(486,`br`),ag()()(),Tl(487,`td`,21)(488,`code`,28),cN(489,`boolean`),ag()(),Tl(490,`td`,23)(491,`p`)(492,`code`),cN(493,`false`),ag()()(),Tl(494,`td`,24)(495,`em`)(496,`strong`),cN(497,`(opcional)`),ag()(),Tl(498,`p`),cN(499,`Indica se o campo será desabilitado.`),ag()()(),Tl(500,`tr`,16)(501,`td`,17)(502,`div`,25)(503,`span`,26),cN(504,` p-error-limit`),Gl(505,`br`),ag()()(),Tl(506,`td`,21)(507,`code`,28),cN(508,`boolean`),ag()(),Tl(509,`td`,23)(510,`p`)(511,`code`),cN(512,`false`),ag()()(),Tl(513,`td`,24)(514,`em`)(515,`strong`),cN(516,`(opcional)`),ag()(),Tl(517,`p`),cN(518,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(519,`blockquote`)(520,`p`),cN(521,`Caso essa propriedade seja definida como `),Tl(522,`code`),cN(523,`true`),ag(),cN(524,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(525,`tr`,16)(526,`td`,17)(527,`div`,25)(528,`span`,26),cN(529,` p-field-error-message`),Gl(530,`br`),ag()()(),Tl(531,`td`,21)(532,`code`,27),cN(533,`string`),ag()(),Tl(534,`td`,23),cN(535,`-`),ag(),Tl(536,`td`,24)(537,`em`)(538,`strong`),cN(539,`(opcional)`),ag()(),Tl(540,`p`),cN(541,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ag(),Tl(542,`blockquote`)(543,`p`),cN(544,`Necessário que a propriedade `),Tl(545,`code`),cN(546,`p-required`),ag(),cN(547,` esteja habilitada.`),ag()()()(),Tl(548,`tr`,16)(549,`td`,17)(550,`div`,25)(551,`span`,26),cN(552,` p-field-label`),Gl(553,`br`),ag()()(),Tl(554,`td`,21)(555,`code`,27),cN(556,`string`),ag()(),Tl(557,`td`,23)(558,`p`)(559,`code`),cN(560,`label`),ag()()(),Tl(561,`td`,24)(562,`em`)(563,`strong`),cN(564,`(opcional)`),ag()(),Tl(565,`p`),cN(566,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(567,`code`),cN(568,`p-options`),ag(),cN(569,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),ag()()(),Tl(570,`tr`,16)(571,`td`,17)(572,`div`,25)(573,`span`,26),cN(574,` p-field-value`),Gl(575,`br`),ag()()(),Tl(576,`td`,21)(577,`code`,27),cN(578,`string`),ag()(),Tl(579,`td`,23)(580,`p`)(581,`code`),cN(582,`value`),ag()()(),Tl(583,`td`,24)(584,`em`)(585,`strong`),cN(586,`(opcional)`),ag()(),Tl(587,`p`),cN(588,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(589,`code`),cN(590,`p-options`),ag(),cN(591,`), esta propriedade será responsável pelo valor de cada item da lista.`),ag()()(),Tl(592,`tr`,16)(593,`td`,17)(594,`div`,25)(595,`span`,26),cN(596,` p-help`),Gl(597,`br`),ag()()(),Tl(598,`td`,21)(599,`code`,27),cN(600,`string`),ag()(),Tl(601,`td`,23),cN(602,`-`),ag(),Tl(603,`td`,24)(604,`p`),cN(605,`Texto de apoio para o campo.`),ag()()(),Tl(606,`tr`,16)(607,`td`,17)(608,`div`,18)(609,`span`,19),cN(610,` (p-keydown)`),Gl(611,`br`),ag()()(),Tl(612,`td`,21)(613,`code`,22),cN(614,`EventEmitter`),ag()(),Tl(615,`td`,23),cN(616,`-`),ag(),Tl(617,`td`,24)(618,`em`)(619,`strong`),cN(620,`(opcional)`),ag()(),Tl(621,`p`),cN(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(623,`code`),cN(624,`KeyboardEvent`),ag(),cN(625,` com informações sobre a tecla.`),ag()()(),Tl(626,`tr`,16)(627,`td`,17)(628,`div`,25)(629,`span`,26),cN(630,` p-label`),Gl(631,`br`),ag()()(),Tl(632,`td`,21)(633,`code`,27),cN(634,`string`),ag()(),Tl(635,`td`,23),cN(636,`-`),ag(),Tl(637,`td`,24)(638,`p`),cN(639,`Rótulo exibido pelo componente.`),ag()()(),Tl(640,`tr`,16)(641,`td`,17)(642,`div`,25)(643,`span`,26),cN(644,` p-label-text-wrap`),Gl(645,`br`),ag()()(),Tl(646,`td`,21)(647,`code`,28),cN(648,`boolean`),ag()(),Tl(649,`td`,23)(650,`p`)(651,`code`),cN(652,`false`),ag()()(),Tl(653,`td`,24)(654,`em`)(655,`strong`),cN(656,`(opcional)`),ag()(),Tl(657,`p`),cN(658,`Habilita a quebra automática do texto da propriedade `),Tl(659,`code`),cN(660,`p-label`),ag(),cN(661,`. Quando `),Tl(662,`code`),cN(663,`p-label-text-wrap`),ag(),cN(664,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(665,`tr`,16)(666,`td`,17)(667,`div`,25)(668,`span`,26),cN(669,` p-loading`),Gl(670,`br`),ag()()(),Tl(671,`td`,21)(672,`code`,28),cN(673,`boolean`),ag()(),Tl(674,`td`,23)(675,`p`)(676,`code`),cN(677,`false`),ag()()(),Tl(678,`td`,24)(679,`em`)(680,`strong`),cN(681,`(opcional)`),ag()(),Tl(682,`p`),cN(683,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(684,`tr`,16)(685,`td`,17)(686,`div`,25)(687,`span`,26),cN(688,` name`),Gl(689,`br`),ag()()(),Tl(690,`td`,21)(691,`code`,27),cN(692,`string`),ag()(),Tl(693,`td`,23),cN(694,`-`),ag(),Tl(695,`td`,24)(696,`p`),cN(697,`Nome do componente.`),ag()()(),Tl(698,`tr`,16)(699,`td`,17)(700,`div`,18)(701,`span`,19),cN(702,` (ngModelChange)`),Gl(703,`br`),ag()()(),Tl(704,`td`,21)(705,`code`,22),cN(706,`EventEmitter`),ag()(),Tl(707,`td`,23),cN(708,`-`),ag(),Tl(709,`td`,24)(710,`em`)(711,`strong`),cN(712,`(opcional)`),ag()(),Tl(713,`p`),cN(714,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),ag(),Tl(715,`p`),cN(716,`Na versão 12.2.0 do Angular a verificação `),Tl(717,`code`),cN(718,`strictTemplates`),ag(),cN(719,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ag(),Tl(720,`pre`)(721,`code`),cN(722,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),ag()()()(),Tl(723,`tr`,16)(724,`td`,17)(725,`div`,25)(726,`span`,26),cN(727,` p-optional`),Gl(728,`br`),ag()()(),Tl(729,`td`,21)(730,`code`,28),cN(731,`boolean`),ag()(),Tl(732,`td`,23)(733,`p`)(734,`code`),cN(735,`false`),ag()()(),Tl(736,`td`,24)(737,`em`)(738,`strong`),cN(739,`(opcional)`),ag()(),Tl(740,`p`),cN(741,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(742,`blockquote`)(743,`p`),cN(744,`Não será exibida a indicação se:`),ag()(),Tl(745,`ul`)(746,`li`),cN(747,`O campo conter `),Tl(748,`code`),cN(749,`p-required`),ag(),cN(750,`;`),ag(),Tl(751,`li`),cN(752,`Não possuir `),Tl(753,`code`),cN(754,`p-help`),ag(),cN(755,` e/ou `),Tl(756,`code`),cN(757,`p-label`),ag(),cN(758,`.`),ag()()()(),Tl(759,`tr`,16)(760,`td`,17)(761,`div`,25)(762,`span`,26),cN(763,` p-options`),Gl(764,`br`),ag()()(),Tl(765,`td`,21)(766,`code`,29),cN(767,`any[]`),ag()(),Tl(768,`td`,23),cN(769,`-`),ag(),Tl(770,`td`,24)(771,`p`),cN(772,`Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `),Tl(773,`code`),cN(774,`PoSelectOption`),ag(),cN(775,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Tl(776,`code`),cN(777,`PoSelectOptionGroup`),ag(),cN(778,`.`),ag(),Tl(779,`p`),cN(780,`Caso esta lista estiver vazia, o model será `),Tl(781,`code`),cN(782,`undefined`),ag(),cN(783,`.`),ag(),Tl(784,`blockquote`)(785,`p`),cN(786,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),ag()(),Tl(787,`pre`)(788,`code`),cN(789,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),ag()(),Tl(790,`blockquote`)(791,`p`),cN(792,`Para coleção de objetos dentro de grupos distintos será exibido a label e opções somente se a propriedade `),Tl(793,`code`),cN(794,`options`),ag(),cN(795,` possua valores. Sendo assim, a estrutura seguiria dessa forma:`),ag()(),Tl(796,`pre`)(797,`code`),cN(798,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),ag()(),Tl(799,`p`),cN(800,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),ag()()(),Tl(801,`tr`,16)(802,`td`,17)(803,`div`,25)(804,`span`,26),cN(805,` p-placeholder`),Gl(806,`br`),ag()()(),Tl(807,`td`,21)(808,`code`,27),cN(809,`string`),ag()(),Tl(810,`td`,23),cN(811,`-`),ag(),Tl(812,`td`,24)(813,`em`)(814,`strong`),cN(815,`(opcional)`),ag()(),Tl(816,`p`),cN(817,`Mensagem que aparecerá enquanto nenhuma opção estiver selecionada.`),ag()()(),Tl(818,`tr`,16)(819,`td`,17)(820,`div`,25)(821,`span`,26),cN(822,` p-helper`),Gl(823,`br`),ag()()(),Tl(824,`td`,21)(825,`code`,30),cN(826,`PoHelperOptions `),ag(),Tl(827,`code`,27),cN(828,` string`),ag()(),Tl(829,`td`,23),cN(830,`-`),ag(),Tl(831,`td`,24)(832,`em`)(833,`strong`),cN(834,`(opcional)`),ag()(),Tl(835,`p`),cN(836,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(837,`code`),cN(838,`p-label`),ag(),cN(839,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(840,`code`),cN(841,`p-label`),ag(),cN(842,`.`),ag(),Tl(843,`blockquote`)(844,`p`),cN(845,`Para mais informações acesse: `),Tl(846,`a`,31),cN(847,`https://po-ui.io/documentation/po-helper`),ag(),cN(848,`.`),ag()(),Tl(849,`blockquote`)(850,`p`),cN(851,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(852,`code`),cN(853,`p-additional-help-tooltip`),ag(),cN(854,` e `),Tl(855,`code`),cN(856,`p-additional-help`),ag(),cN(857,`) será ignorado.`),ag()()()(),Tl(858,`tr`,16)(859,`td`,17)(860,`div`,25)(861,`span`,26),cN(862,` p-readonly`),Gl(863,`br`),ag()()(),Tl(864,`td`,21)(865,`code`,28),cN(866,`boolean`),ag()(),Tl(867,`td`,23)(868,`p`)(869,`code`),cN(870,`false`),ag()()(),Tl(871,`td`,24)(872,`em`)(873,`strong`),cN(874,`(opcional)`),ag()(),Tl(875,`p`),cN(876,`Indica que o campo será somente para leitura.`),ag()()(),Tl(877,`tr`,16)(878,`td`,17)(879,`div`,25)(880,`span`,26),cN(881,` p-required`),Gl(882,`br`),ag()()(),Tl(883,`td`,21)(884,`code`,28),cN(885,`boolean`),ag()(),Tl(886,`td`,23)(887,`p`)(888,`code`),cN(889,`false`),ag()()(),Tl(890,`td`,24)(891,`em`)(892,`strong`),cN(893,`(opcional)`),ag()(),Tl(894,`p`),cN(895,`Define que o campo será obrigatório.`),ag()()(),Tl(896,`tr`,16)(897,`td`,17)(898,`div`,25)(899,`span`,26),cN(900,` p-show-required`),Gl(901,`br`),ag()()(),Tl(902,`td`,21)(903,`code`,28),cN(904,`boolean`),ag()(),Tl(905,`td`,23),cN(906,`-`),ag(),Tl(907,`td`,24)(908,`p`),cN(909,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(910,`blockquote`)(911,`p`),cN(912,`Não será exibida a indicação se:`),ag()(),Tl(913,`ul`)(914,`li`),cN(915,`Não possuir `),Tl(916,`code`),cN(917,`p-help`),ag(),cN(918,` e/ou `),Tl(919,`code`),cN(920,`p-label`),ag(),cN(921,`.`),ag()()()(),Tl(922,`tr`,16)(923,`td`,17)(924,`div`,25)(925,`span`,26),cN(926,` p-size`),Gl(927,`br`),ag()()(),Tl(928,`td`,21)(929,`code`,27),cN(930,`string`),ag()(),Tl(931,`td`,23)(932,`p`)(933,`code`),cN(934,`medium`),ag()()(),Tl(935,`td`,24)(936,`em`)(937,`strong`),cN(938,`(opcional)`),ag()(),Tl(939,`p`),cN(940,`Define o tamanho do componente:`),ag(),Tl(941,`ul`)(942,`li`)(943,`code`),cN(944,`small`),ag(),cN(945,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(946,`li`)(947,`code`),cN(948,`medium`),ag(),cN(949,`: altura do input como 44px.`),ag()(),Tl(950,`blockquote`)(951,`p`),cN(952,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(953,`code`),cN(954,`medium`),ag(),cN(955,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(956,`a`,32),cN(957,`po-theme`),ag(),cN(958,`.`),ag()()()()(),Tl(959,`h3`,12),cN(960,`Métodos`),ag(),Tl(961,`table`,33)(962,`tr`,16)(963,`th`,34)(964,`div`,25)(965,`h4`)(966,`span`,26),cN(967,` focus `),ag()()()()(),Tl(968,`tr`,24)(969,`td`,24)(970,`p`),cN(971,`Função que atribui foco ao componente.`),ag(),Tl(972,`p`),cN(973,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(974,`pre`)(975,`code`),cN(976,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),ag()()()()(),Gl(977,`br`),Tl(978,`table`,33)(979,`tr`,16)(980,`th`,34)(981,`div`,25)(982,`h4`)(983,`span`,26),cN(984,` showAdditionalHelp `),ag()()()()(),Tl(985,`tr`,24)(986,`td`,24)(987,`p`),cN(988,`Método que exibe `),Tl(989,`code`),cN(990,`p-helper`),ag(),cN(991,` ou executa a ação definida em `),Tl(992,`code`),cN(993,`p-helper{eventOnClick}`),ag(),cN(994,` ou em `),Tl(995,`code`),cN(996,`p-additionalHelp`),ag(),cN(997,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(998,`code`),cN(999,`p-keydown`),ag(),cN(1e3,`.`),ag(),Tl(1001,`blockquote`)(1002,`p`),cN(1003,`Exibe ou oculta o conteúdo do componente `),Tl(1004,`code`),cN(1005,`po-helper`),ag(),cN(1006,` quando o componente estiver com foco.`),ag()(),Tl(1007,`pre`)(1008,`code`),cN(1009,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),ag()(),Tl(1010,`pre`)(1011,`code`,35),cN(1012,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1013,`br`),Tl(1014,`h3`),cN(1015,`Interfaces`),ag(),Tl(1016,`h4`,36)(1017,`code`,5),cN(1018,`PoSelectOptionGroup`),ag()(),Tl(1019,`div`,2)(1020,`p`),cN(1021,`Interface da coleções de itens em grupo, utilizando uma label para o grupo e as opções do tipo `),Tl(1022,`code`),cN(1023,`PoSelectOption`),ag(),cN(1024,`.`),ag()(),Tl(1025,`h4`,12),cN(1026,`Propriedades`),ag(),Tl(1027,`table`,13)(1028,`tr`,14)(1029,`th`,15),cN(1030,`Nome`),ag(),Tl(1031,`th`,15),cN(1032,`Tipo`),ag(),Tl(1033,`th`,15),cN(1034,`Descrição`),ag()(),Tl(1035,`tr`,16)(1036,`td`,17)(1037,`div`,25)(1038,`span`,26),cN(1039,` label`),Gl(1040,`br`),ag()()(),Tl(1041,`td`,21)(1042,`code`,27),cN(1043,`string`),ag()(),Tl(1044,`td`,24)(1045,`p`),cN(1046,`Label para denominar o nome do grupo.`),ag()()(),Tl(1047,`tr`,16)(1048,`td`,17)(1049,`div`,25)(1050,`span`,26),cN(1051,` options`),Gl(1052,`br`),ag()()(),Tl(1053,`td`,21)(1054,`code`,37),cN(1055,`Array<PoSelectOption>`),ag()(),Tl(1056,`td`,24)(1057,`p`),cN(1058,`Lista com as opções disponíveis em cada grupo.`),ag()()()(),Tl(1059,`h4`,36)(1060,`code`,5),cN(1061,`PoSelectOption`),ag()(),Tl(1062,`div`,2)(1063,`p`),cN(1064,`Interface da coleções de itens que deve ser informado no componente po-select`),ag()(),Tl(1065,`h4`,12),cN(1066,`Propriedades`),ag(),Tl(1067,`table`,13)(1068,`tr`,14)(1069,`th`,15),cN(1070,`Nome`),ag(),Tl(1071,`th`,15),cN(1072,`Tipo`),ag(),Tl(1073,`th`,15),cN(1074,`Descrição`),ag()(),Tl(1075,`tr`,16)(1076,`td`,17)(1077,`div`,25)(1078,`span`,26),cN(1079,` label`),Gl(1080,`br`),ag()()(),Tl(1081,`td`,21)(1082,`code`,27),cN(1083,`string`),ag()(),Tl(1084,`td`,24)(1085,`p`),cN(1086,`Label a ser utilizada nos itens da lista.`),ag()()(),Tl(1087,`tr`,16)(1088,`td`,17)(1089,`div`,25)(1090,`span`,26),cN(1091,` value`),Gl(1092,`br`),ag()()(),Tl(1093,`td`,21)(1094,`code`,27),cN(1095,`string `),ag(),Tl(1096,`code`,38),cN(1097,` number`),ag()(),Tl(1098,`td`,24)(1099,`p`),cN(1100,`Valor do objeto que será atribuído ao model.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Select`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,i){p&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-select-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-select-basic-view`)(6,`sample-po-select-labs-view`)(7,`sample-po-select-customer-registration-view`)(8,`sample-po-select-companies-view`),ag()()()),p&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,he,Ce,ye,Pe,we],encapsulation:2,changeDetection:1})}return a})()}];var Me=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[bL.forChild(Je),bL]})}return a})();var Dt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,Me]})}return a})();export{Dt as DocPoSelectModule};