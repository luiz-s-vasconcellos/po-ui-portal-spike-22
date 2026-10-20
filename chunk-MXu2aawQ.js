import{$r as Zn,Br as Sx,Ca as zw,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Pr as R,Qi as tb,Qt as ea,Ri as nu,Rt as _oe,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_a as yO,aa as v_,ai as b,ar as EK,b as A5,bi as ib,cr as FE,dn as moe,dt as Sae,ea as uO,fa as we$1,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,mr as He,ot as Q4,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Oe=()=>({label:`Option 1`,value:`1`});var Le=()=>({label:`Option 2`,value:`2`});var De=(a,K)=>[a,K];var he=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`p-options`]],template:function(p,i){p&1&&nu(0,`po-select`,0),p&2&&jE(`p-options`,yO(3,De,gO(1,Oe),gO(2,Le)))},dependencies:[moe],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Select Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-select-basic/sample-po-select-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-select-basic/sample-po-select-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-select-basic`),wg(),nu(23,`hr`)),p&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ve,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{cdr=p(He);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`readonly`,label:`Read Only`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.select=``,this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size=`medium`}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(te=>te.label===i&&`options`in te);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-labs`]],standalone:!1,decls:33,vars:37,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`select`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-options`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po select options group`],[`name`,`selectOptionGroupSwitch`,`p-label`,`Select options group`,1,`po-lg-2`,`po-md-12`,3,`p-change`,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po select options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-lg-3`,`po-md-6`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(p,i){if(p&1){let m=Sx();jc(0,`po-select`,2),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.select,o)||(i.select=o),v_(o)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4)(4,`po-info`,5),wg(),nu(5,`po-divider`),jc(6,`form`,null,0),nu(8,`po-divider`,6),jc(9,`div`,3)(10,`po-switch`,7),JN(),mt(`p-change`,function(o){return i.restoreSwitch(o)}),ob(`ngModelChange`,function(o){return y_(m),sO(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),v_(o)}),wg(),jc(11,`po-select`,8),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),v_(o)}),mt(`p-change`,function(){return i.optionsGroupSelection()}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.optionsGroup,o)||(i.optionsGroup=o),v_(o)}),wg()(),nu(13,`po-divider`,10),jc(14,`div`,3)(15,`po-input`,11),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.option.label,o)||(i.option.label=o),v_(o)}),wg(),jc(16,`po-input`,12),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.option.value,o)||(i.option.value=o),v_(o)}),wg()(),jc(17,`div`,3)(18,`po-button`,13),mt(`p-click`,function(){return i.addOption()}),wg()()(),nu(19,`po-divider`),jc(20,`form`,null,1)(22,`po-input`,14),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.label,o)||(i.label=o),v_(o)}),wg(),jc(23,`po-input`,15),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.help,o)||(i.help=o),v_(o)}),wg(),jc(24,`po-input`,16),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.helperText,o)||(i.helperText=o),v_(o)}),wg(),jc(25,`po-input`,17),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.placeholder,o)||(i.placeholder=o),v_(o)}),wg(),jc(26,`po-input`,18),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),v_(o)}),wg(),jc(27,`po-checkbox-group`,19),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.properties,o)||(i.properties=o),v_(o)}),wg(),jc(28,`po-radio-group`,20),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.size,o)||(i.size=o),v_(o)}),wg(),jc(29,`div`,3)(30,`div`,21)(31,`po-button`,22),mt(`p-click`,function(){return i.restore()}),wg()()(),nu(32,`form`),wg()}if(p&2){let m=Fx(7);ib(`ngModel`,i.select),jE(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-options`,i.options)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),t0(),rg(3),jE(`p-value`,i.select),rg(),jE(`p-value`,i.event),rg(6),ib(`ngModel`,i.selectOptionGroupSwitch),t0(),rg(),ib(`ngModel`,i.selectedOptionsGroup),jE(`p-disabled`,!i.selectOptionGroupSwitch)(`p-options`,i.optionsGroupList),t0(),rg(),ib(`ngModel`,i.optionsGroup),jE(`p-disabled`,!i.selectOptionGroupSwitch),t0(),rg(3),ib(`ngModel`,i.option.label),t0(),rg(),ib(`ngModel`,i.option.value),t0(),rg(2),jE(`p-disabled`,m.invalid),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.fieldErrorMessage),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,moe,w5,_oe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Select Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-select-labs/sample-po-select-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-select
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-select-labs/sample-po-select-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-select-labs`),wg(),nu(23,`hr`)),p&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ge,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,fe],encapsulation:2,changeDetection:1})}return a})();var ee=(()=>{class a{http=p(zw);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Ie(a,K){if(a&1&&(jc(0,`div`,17),nu(1,`po-avatar`,18),jc(2,`div`,19)(3,`div`,20),iO(4),wg(),jc(5,`div`,21),iO(6),wg()()()),a&2){let r=K.$implicit;rg(),jE(`p-src`,uO(`https://po-sample-api.onrender.com/v1/sampleSelect/`,r.value,`.png`)),rg(3),tb(r.label),rg(2),tb(r.value)}}var xe=(()=>{class a{sampleService=p(ee);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:`CPF`,value:`CPF`},{label:`CNPJ`,value:`CNPJ`}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r===`CPF`?(this.documentLabel=`CPF Number`,this.mask=`999.999.999-99`,this.minLength=14,this.nameLabel=`Client Name`):(this.documentLabel=`CNPJ Number`,this.mask=`99.999.999/9999-99`,this.minLength=18,this.nameLabel=`Company Name`),this.address=``,this.document=``,this.name=``}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType=`CPF`}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:``}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:``}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state=`sp`,this.getCitiesByState(this.state)})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-customer-registration`]],standalone:!1,features:[we$1([ee])],decls:27,vars:22,consts:[[`f`,`ngForm`],[`modal`,``],[1,`po-row`],[`name`,`documentType`,`p-label`,`Document type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`document`,`p-mask-format-model`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`,`p-mask`,`p-minlength`],[`name`,`name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Send Informations`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Informations`],[`p-label`,`Document type`,1,`po-md-6`,3,`p-value`],[1,`po-md-6`,3,`p-label`,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`State`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`],[1,`sample-select-option-template-container`],[`p-size`,`xs`,3,`p-src`],[1,`sample-select-option-template-margin`],[1,`sample-select-option-template-label`],[1,`sample-select-option-template-value`]],template:function(p,i){if(p&1){let m=Sx();jc(0,`form`,null,0)(2,`div`,2)(3,`po-radio-group`,3),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.documentType,o)||(i.documentType=o),v_(o)}),mt(`p-change`,function(o){return i.changeType(o)}),wg(),jc(4,`po-input`,4),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.document,o)||(i.document=o),v_(o)}),wg()(),jc(5,`div`,2)(6,`po-input`,5),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.name,o)||(i.name=o),v_(o)}),wg(),jc(7,`po-input`,6),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.address,o)||(i.address=o),v_(o)}),wg()(),jc(8,`div`,2)(9,`po-select`,7),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.state,o)||(i.state=o),v_(o)}),mt(`p-change`,function(){return i.onChangeState()}),FE(10,Ie,7,4,`ng-template`,8),wg(),jc(11,`po-select`,9),JN(),ob(`ngModelChange`,function(o){return y_(m),sO(i.city,o)||(i.city=o),v_(o)}),wg()(),jc(12,`div`,2)(13,`po-button`,10),mt(`p-click`,function(){y_(m);let o=Fx(15);return v_(o.open())}),wg()()(),jc(14,`po-modal`,11,1)(16,`div`,2),nu(17,`po-info`,12)(18,`po-info`,13),wg(),nu(19,`po-divider`),jc(20,`div`,2),nu(21,`po-info`,13)(22,`po-info`,14),wg(),nu(23,`po-divider`),jc(24,`div`,2),nu(25,`po-info`,15)(26,`po-info`,16),wg()()}if(p&2){let m=Fx(1);rg(3),ib(`ngModel`,i.documentType),jE(`p-options`,i.options),t0(),rg(),ib(`ngModel`,i.document),jE(`p-label`,i.documentLabel)(`p-mask`,i.mask)(`p-minlength`,i.minLength),t0(),rg(2),ib(`ngModel`,i.name),jE(`p-label`,i.nameLabel),t0(),rg(),ib(`ngModel`,i.address),t0(),rg(2),ib(`ngModel`,i.state),jE(`p-options`,i.stateOptions),t0(),rg(2),ib(`ngModel`,i.city),jE(`p-options`,i.cityOptions),t0(),rg(2),jE(`p-disabled`,m.invalid),rg(4),jE(`p-value`,i.documentType),rg(),jE(`p-label`,i.documentLabel)(`p-value`,i.document),rg(3),jE(`p-label`,i.nameLabel)(`p-value`,i.name),rg(),jE(`p-value`,i.address),rg(3),jE(`p-value`,i.getStateByValue(i.state)),rg(),jE(`p-value`,i.getCityByValue(i.city))}},dependencies:[wK,CK,EK,TF,EF,Q4,ni,Lf,A5,Ote,moe,_oe,ea],styles:[`.sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}`],changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-customer-registration-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Select - Customer registration`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #f="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()(),jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),iO(28,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`),wg(),jc(29,`pre`,11),iO(30,`.sample-select-option-template-container {
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
`),wg()()()()(),jc(31,`div`,12),nu(32,`sample-po-select-customer-registration`),wg(),nu(33,`hr`)),p&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,We,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,xe],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{select;fieldLabel=`nomeFantasia`;fieldValue=`cnpj`;empresas=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];labels=[{label:`Dados`,options:[{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`email`,value:`email`}]},{label:`Cidade`,options:[{label:`origem`,value:`origem`}]}];values=[{label:`codigo`,value:`codigo`},{label:`cnpj`,value:`cnpj`},{label:`id`,value:`id`},{label:`data`,value:`data`}];onChange(r){this.select=void 0}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-companies`]],standalone:!1,decls:5,vars:9,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`ngModelChange`,`ngModel`,`p-field-value`,`p-field-label`,`p-options`],[`p-label`,`Model`,`name`,`selectInfo`,3,`p-valueChange`,`p-value`],[1,`po-row`],[`name`,`fieldLabel`,`p-label`,`p-field-label`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`],[`name`,`selectValue`,`p-label`,`p-field-value`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`]],template:function(p,i){p&1&&(jc(0,`po-select`,0),JN(),ob(`ngModelChange`,function(d){return sO(i.select,d)||(i.select=d),d}),wg(),jc(1,`po-info`,1),ob(`p-valueChange`,function(d){return sO(i.select,d)||(i.select=d),d}),wg(),jc(2,`div`,2)(3,`po-select`,3),JN(),mt(`p-change`,function(d){return i.onChange(d)}),ob(`ngModelChange`,function(d){return sO(i.fieldLabel,d)||(i.fieldLabel=d),d}),wg(),jc(4,`po-select`,4),JN(),mt(`p-change`,function(d){return i.onChange(d)}),ob(`ngModelChange`,function(d){return sO(i.fieldValue,d)||(i.fieldValue=d),d}),wg()()),p&2&&(ib(`ngModel`,i.select),jE(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel)(`p-options`,i.empresas),t0(),rg(),ib(`p-value`,i.select),rg(2),jE(`p-options`,i.labels),ib(`ngModel`,i.fieldLabel),t0(),rg(),jE(`p-options`,i.values),ib(`ngModel`,i.fieldValue),t0())},dependencies:[CK,TF,moe,_oe],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-companies-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Select Companies`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-select-companies/sample-po-select-companies.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-select
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-select-companies/sample-po-select-companies.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-select-companies`),wg(),nu(23,`hr`)),p&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,je,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,_e],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-doc`]],standalone:!1,decls:1101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo-option-template`],[`href`,`/documentation/po-select-option-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(p,i){p&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoSelectComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),wg(),jc(24,`blockquote`)(25,`p`),iO(26,`Ao passar um valor para o `),jc(27,`em`),iO(28,`model`),wg(),iO(29,` que não está na lista de opções, o mesmo será definido como `),jc(30,`code`),iO(31,`undefined`),wg(),iO(32,`.`),wg()(),jc(33,`p`),iO(34,`Também existe a possibilidade de utilizar um `),jc(35,`em`),iO(36,`template`),wg(),iO(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),jc(38,`strong`)(39,`a`,6),iO(40,`p-combo-option-template`),wg()(),iO(41,`.`),wg(),jc(42,`blockquote`)(43,`p`),iO(44,`Obs: o template `),jc(45,`strong`)(46,`a`,7),iO(47,`p-select-option-template`),wg()(),iO(48,` será depreciado na versão 14.x.x.`),wg()(),jc(49,`h4`),iO(50,`Tokens customizáveis`),wg(),jc(51,`p`),iO(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(53,`blockquote`)(54,`p`),iO(55,`Para maiores informações, acesse o guia `),jc(56,`a`,8),iO(57,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(58,`.`),wg()(),jc(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),iO(63,`Propriedade`),wg(),jc(64,`th`),iO(65,`Descrição`),wg(),jc(66,`th`),iO(67,`Valor Padrão`),wg()()(),jc(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),iO(72,`Default Values`),wg()(),nu(73,`td`)(74,`td`),wg(),jc(75,`tr`)(76,`td`)(77,`code`),iO(78,`--font-family`),wg()(),jc(79,`td`),iO(80,`Família tipográfica usada`),wg(),jc(81,`td`)(82,`code`),iO(83,`var(--font-family-theme)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),iO(87,`--font-size`),wg()(),jc(88,`td`),iO(89,`Tamanho da fonte`),wg(),jc(90,`td`)(91,`code`),iO(92,`var(--font-size-default)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`code`),iO(96,`--text-color-empty`),wg()(),jc(97,`td`),iO(98,`Cor do placeholder`),wg(),jc(99,`td`)(100,`code`),iO(101,`var(--color-neutral-light-30)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),iO(105,`--color`),wg()(),jc(106,`td`),iO(107,`Cor da borda`),wg(),jc(108,`td`)(109,`code`),iO(110,`var(--color-neutral-dark-70)`),wg()()(),jc(111,`tr`)(112,`td`)(113,`code`),iO(114,`--background`),wg()(),jc(115,`td`),iO(116,`Cor de background`),wg(),jc(117,`td`)(118,`code`),iO(119,`var(--color-neutral-light-05)`),wg()()(),jc(120,`tr`)(121,`td`)(122,`code`),iO(123,`--text-color`),wg()(),jc(124,`td`),iO(125,`Cor do texto`),wg(),jc(126,`td`)(127,`code`),iO(128,`var(--color-neutral-dark-90)`),wg()()(),jc(129,`tr`)(130,`td`)(131,`code`),iO(132,`--padding-horizontal`),wg()(),jc(133,`td`),iO(134,`Preenchimento horizontal`),wg(),jc(135,`td`)(136,`code`),iO(137,`0.5em`),wg()()(),jc(138,`tr`)(139,`td`)(140,`code`),iO(141,`--padding-vertical`),wg()(),jc(142,`td`),iO(143,`Preenchimento vertical`),wg(),jc(144,`td`)(145,`code`),iO(146,`0.7em`),wg()()(),jc(147,`tr`)(148,`td`)(149,`code`),iO(150,`--field-container-title-justify`),wg()(),jc(151,`td`),iO(152,`Alinhamento horizontal do título (`),jc(153,`code`),iO(154,`justify-content`),wg(),iO(155,`)`),wg(),jc(156,`td`)(157,`code`),iO(158,`space-between`),wg()()(),jc(159,`tr`)(160,`td`)(161,`code`),iO(162,`--field-container-title-flex`),wg()(),jc(163,`td`),iO(164,`Flex do título (`),jc(165,`code`),iO(166,`flex`),wg(),iO(167,`)`),wg(),jc(168,`td`)(169,`code`),iO(170,`1 auto`),wg()()(),jc(171,`tr`)(172,`td`)(173,`strong`),iO(174,`Hover`),wg()(),nu(175,`td`)(176,`td`),wg(),jc(177,`tr`)(178,`td`)(179,`code`),iO(180,`--color-hover`),wg()(),jc(181,`td`),iO(182,`Cor principal no estado hover`),wg(),jc(183,`td`)(184,`code`),iO(185,`var(--color-brand-01-dark)`),wg()()(),jc(186,`tr`)(187,`td`)(188,`code`),iO(189,`--background-hover`),wg()(),jc(190,`td`),iO(191,`Cor de background no estado hover`),wg(),jc(192,`td`)(193,`code`),iO(194,`var(--color-brand-01-lighter)`),wg()()(),jc(195,`tr`)(196,`td`)(197,`strong`),iO(198,`Focused`),wg()(),nu(199,`td`)(200,`td`),wg(),jc(201,`tr`)(202,`td`)(203,`code`),iO(204,`--outline-color-focused`),wg()(),jc(205,`td`),iO(206,`Cor do outline do estado de focus`),wg(),jc(207,`td`)(208,`code`),iO(209,`var(--color-action-focus)`),wg()()(),jc(210,`tr`)(211,`td`)(212,`code`),iO(213,`--color-focused`),wg()(),jc(214,`td`),iO(215,`Cor da borda no estado de focus`),wg(),jc(216,`td`)(217,`code`),iO(218,`var(--color-action-default)`),wg()()(),jc(219,`tr`)(220,`td`)(221,`strong`),iO(222,`Disabled`),wg()(),nu(223,`td`)(224,`td`),wg(),jc(225,`tr`)(226,`td`)(227,`code`),iO(228,`--color-disabled`),wg()(),jc(229,`td`),iO(230,`Cor principal no estado disabled`),wg(),jc(231,`td`)(232,`code`),iO(233,`var(--color-neutral-light-30)`),wg()()(),jc(234,`tr`)(235,`td`)(236,`code`),iO(237,`--background-color-disabled`),wg(),iO(238,`\xA0`),wg(),jc(239,`td`),iO(240,`Cor de background no estado disabled`),wg(),jc(241,`td`)(242,`code`),iO(243,`var(--color-neutral-light-20)`),wg()()()()()(),jc(244,`div`,9)(245,`h4`,10),iO(246,`Seletor`),wg(),jc(247,`pre`,11),iO(248,`<po-select
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
`),wg()(),jc(249,`h4`,12),iO(250,`Propriedades`),wg(),jc(251,`table`,13)(252,`tr`,14)(253,`th`,15),iO(254,`Nome`),wg(),jc(255,`th`,15),iO(256,`Tipo`),wg(),jc(257,`th`,15),iO(258,`Padrão`),wg(),jc(259,`th`,15),iO(260,`Descrição`),wg()(),jc(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),iO(265,` (p-additional-help)`),nu(266,`br`),wg()(),jc(267,`div`,20),iO(268,`Deprecated`),wg()(),jc(269,`td`,21)(270,`code`,22),iO(271,`EventEmitter`),wg()(),jc(272,`td`,23),iO(273,`-`),wg(),jc(274,`td`,24)(275,`em`)(276,`strong`),iO(277,`(opcional)`),wg()(),jc(278,`p`),iO(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(280,`blockquote`)(281,`p`),iO(282,`Essa propriedade está `),jc(283,`strong`),iO(284,`depreciada`),wg(),iO(285,` e será removida na versão `),jc(286,`code`),iO(287,`23.x.x`),wg(),iO(288,`. Recomendamos utilizar a propriedade `),jc(289,`code`),iO(290,`p-helper`),wg(),iO(291,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(292,`tr`,16)(293,`td`,17)(294,`div`,25)(295,`span`,26),iO(296,` p-additional-help-tooltip`),nu(297,`br`),wg()(),jc(298,`div`,20),iO(299,`Deprecated`),wg()(),jc(300,`td`,21)(301,`code`,27),iO(302,`string`),wg()(),jc(303,`td`,23),iO(304,`-`),wg(),jc(305,`td`,24)(306,`em`)(307,`strong`),iO(308,`(opcional)`),wg()(),jc(309,`p`),iO(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(311,`code`),iO(312,`po-helper`),wg(),iO(313,`.
`),jc(314,`strong`),iO(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(316,`blockquote`)(317,`p`),iO(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(319,`blockquote`)(320,`p`),iO(321,`Essa propriedade está `),jc(322,`strong`),iO(323,`depreciada`),wg(),iO(324,` e será removida na versão `),jc(325,`code`),iO(326,`23.x.x`),wg(),iO(327,`. Recomendamos utilizar a propriedade `),jc(328,`code`),iO(329,`p-helper`),wg(),iO(330,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(331,`tr`,16)(332,`td`,17)(333,`div`,25)(334,`span`,26),iO(335,` p-append-in-body`),nu(336,`br`),wg()()(),jc(337,`td`,21)(338,`code`,28),iO(339,`boolean`),wg()(),jc(340,`td`,23)(341,`p`)(342,`code`),iO(343,`false`),wg()()(),jc(344,`td`,24)(345,`em`)(346,`strong`),iO(347,`(opcional)`),wg()(),jc(348,`p`),iO(349,`Define que o popover (`),jc(350,`code`),iO(351,`p-helper`),wg(),iO(352,` e/ou `),jc(353,`code`),iO(354,`p-error-limit`),wg(),iO(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(356,`blockquote`)(357,`p`),iO(358,`Quando utilizado com `),jc(359,`code`),iO(360,`p-helper`),wg(),iO(361,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(362,`tr`,16)(363,`td`,17)(364,`div`,18)(365,`span`,19),iO(366,` (p-blur)`),nu(367,`br`),wg()()(),jc(368,`td`,21)(369,`code`,22),iO(370,`EventEmitter`),wg()(),jc(371,`td`,23),iO(372,`-`),wg(),jc(373,`td`,24)(374,`em`)(375,`strong`),iO(376,`(opcional)`),wg()(),jc(377,`p`),iO(378,`Evento disparado ao sair do campo.`),wg()()(),jc(379,`tr`,16)(380,`td`,17)(381,`div`,18)(382,`span`,19),iO(383,` (p-change)`),nu(384,`br`),wg()()(),jc(385,`td`,21)(386,`code`,22),iO(387,`EventEmitter`),wg()(),jc(388,`td`,23),iO(389,`-`),wg(),jc(390,`td`,24)(391,`em`)(392,`strong`),iO(393,`(opcional)`),wg()(),jc(394,`p`),iO(395,`Evento disparado ao alterar valor do campo.`),wg()()(),jc(396,`tr`,16)(397,`td`,17)(398,`div`,18)(399,`span`,19),iO(400,` (p-change-model)`),nu(401,`br`),wg()()(),jc(402,`td`,21)(403,`code`,22),iO(404,`EventEmitter`),wg()(),jc(405,`td`,23),iO(406,`-`),wg(),jc(407,`td`,24)(408,`em`)(409,`strong`),iO(410,`(opcional)`),wg()(),jc(411,`p`),iO(412,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(413,`code`),iO(414,`setValue`),wg(),iO(415,`, `),jc(416,`code`),iO(417,`patchValue`),wg(),iO(418,`, carregamento assíncrono).`),wg(),jc(419,`p`),iO(420,`Diferentemente do `),jc(421,`code`),iO(422,`p-change`),wg(),iO(423,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(424,`code`),iO(425,`p-change-model`),wg(),iO(426,` cobre todos os cenários de alteração de valor.`),wg(),jc(427,`p`),iO(428,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(429,`tr`,16)(430,`td`,17)(431,`div`,25)(432,`span`,26),iO(433,` p-compact-label`),nu(434,`br`),wg()()(),jc(435,`td`,21)(436,`code`,28),iO(437,`boolean`),wg()(),jc(438,`td`,23)(439,`p`)(440,`code`),iO(441,`false`),wg()()(),jc(442,`td`,24)(443,`em`)(444,`strong`),iO(445,`(opcional)`),wg()(),jc(446,`p`),iO(447,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(448,`p`),iO(449,`Quando habilitado (`),jc(450,`code`),iO(451,`true`),wg(),iO(452,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(453,`ul`)(454,`li`)(455,`code`),iO(456,`po-label`),wg()(),jc(457,`li`)(458,`code`),iO(459,`p-requirement (showRequired)`),wg()(),jc(460,`li`)(461,`code`),iO(462,`po-helper`),wg()()(),jc(463,`p`),iO(464,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(465,`p`),iO(466,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(467,`ul`)(468,`li`)(469,`code`),iO(470,`--field-container-title-justify`),wg()(),jc(471,`li`)(472,`code`),iO(473,`--field-container-title-flex`),wg()()(),jc(474,`p`),iO(475,`Exemplo:`),wg(),jc(476,`pre`)(477,`code`),iO(478,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(479,`p`),iO(480,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(481,`tr`,16)(482,`td`,17)(483,`div`,25)(484,`span`,26),iO(485,` p-disabled`),nu(486,`br`),wg()()(),jc(487,`td`,21)(488,`code`,28),iO(489,`boolean`),wg()(),jc(490,`td`,23)(491,`p`)(492,`code`),iO(493,`false`),wg()()(),jc(494,`td`,24)(495,`em`)(496,`strong`),iO(497,`(opcional)`),wg()(),jc(498,`p`),iO(499,`Indica se o campo será desabilitado.`),wg()()(),jc(500,`tr`,16)(501,`td`,17)(502,`div`,25)(503,`span`,26),iO(504,` p-error-limit`),nu(505,`br`),wg()()(),jc(506,`td`,21)(507,`code`,28),iO(508,`boolean`),wg()(),jc(509,`td`,23)(510,`p`)(511,`code`),iO(512,`false`),wg()()(),jc(513,`td`,24)(514,`em`)(515,`strong`),iO(516,`(opcional)`),wg()(),jc(517,`p`),iO(518,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(519,`blockquote`)(520,`p`),iO(521,`Caso essa propriedade seja definida como `),jc(522,`code`),iO(523,`true`),wg(),iO(524,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(525,`tr`,16)(526,`td`,17)(527,`div`,25)(528,`span`,26),iO(529,` p-field-error-message`),nu(530,`br`),wg()()(),jc(531,`td`,21)(532,`code`,27),iO(533,`string`),wg()(),jc(534,`td`,23),iO(535,`-`),wg(),jc(536,`td`,24)(537,`em`)(538,`strong`),iO(539,`(opcional)`),wg()(),jc(540,`p`),iO(541,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(542,`blockquote`)(543,`p`),iO(544,`Necessário que a propriedade `),jc(545,`code`),iO(546,`p-required`),wg(),iO(547,` esteja habilitada.`),wg()()()(),jc(548,`tr`,16)(549,`td`,17)(550,`div`,25)(551,`span`,26),iO(552,` p-field-label`),nu(553,`br`),wg()()(),jc(554,`td`,21)(555,`code`,27),iO(556,`string`),wg()(),jc(557,`td`,23)(558,`p`)(559,`code`),iO(560,`label`),wg()()(),jc(561,`td`,24)(562,`em`)(563,`strong`),iO(564,`(opcional)`),wg()(),jc(565,`p`),iO(566,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),jc(567,`code`),iO(568,`p-options`),wg(),iO(569,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),wg()()(),jc(570,`tr`,16)(571,`td`,17)(572,`div`,25)(573,`span`,26),iO(574,` p-field-value`),nu(575,`br`),wg()()(),jc(576,`td`,21)(577,`code`,27),iO(578,`string`),wg()(),jc(579,`td`,23)(580,`p`)(581,`code`),iO(582,`value`),wg()()(),jc(583,`td`,24)(584,`em`)(585,`strong`),iO(586,`(opcional)`),wg()(),jc(587,`p`),iO(588,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),jc(589,`code`),iO(590,`p-options`),wg(),iO(591,`), esta propriedade será responsável pelo valor de cada item da lista.`),wg()()(),jc(592,`tr`,16)(593,`td`,17)(594,`div`,25)(595,`span`,26),iO(596,` p-help`),nu(597,`br`),wg()()(),jc(598,`td`,21)(599,`code`,27),iO(600,`string`),wg()(),jc(601,`td`,23),iO(602,`-`),wg(),jc(603,`td`,24)(604,`p`),iO(605,`Texto de apoio para o campo.`),wg()()(),jc(606,`tr`,16)(607,`td`,17)(608,`div`,18)(609,`span`,19),iO(610,` (p-keydown)`),nu(611,`br`),wg()()(),jc(612,`td`,21)(613,`code`,22),iO(614,`EventEmitter`),wg()(),jc(615,`td`,23),iO(616,`-`),wg(),jc(617,`td`,24)(618,`em`)(619,`strong`),iO(620,`(opcional)`),wg()(),jc(621,`p`),iO(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(623,`code`),iO(624,`KeyboardEvent`),wg(),iO(625,` com informações sobre a tecla.`),wg()()(),jc(626,`tr`,16)(627,`td`,17)(628,`div`,25)(629,`span`,26),iO(630,` p-label`),nu(631,`br`),wg()()(),jc(632,`td`,21)(633,`code`,27),iO(634,`string`),wg()(),jc(635,`td`,23),iO(636,`-`),wg(),jc(637,`td`,24)(638,`p`),iO(639,`Rótulo exibido pelo componente.`),wg()()(),jc(640,`tr`,16)(641,`td`,17)(642,`div`,25)(643,`span`,26),iO(644,` p-label-text-wrap`),nu(645,`br`),wg()()(),jc(646,`td`,21)(647,`code`,28),iO(648,`boolean`),wg()(),jc(649,`td`,23)(650,`p`)(651,`code`),iO(652,`false`),wg()()(),jc(653,`td`,24)(654,`em`)(655,`strong`),iO(656,`(opcional)`),wg()(),jc(657,`p`),iO(658,`Habilita a quebra automática do texto da propriedade `),jc(659,`code`),iO(660,`p-label`),wg(),iO(661,`. Quando `),jc(662,`code`),iO(663,`p-label-text-wrap`),wg(),iO(664,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(665,`tr`,16)(666,`td`,17)(667,`div`,25)(668,`span`,26),iO(669,` p-loading`),nu(670,`br`),wg()()(),jc(671,`td`,21)(672,`code`,28),iO(673,`boolean`),wg()(),jc(674,`td`,23)(675,`p`)(676,`code`),iO(677,`false`),wg()()(),jc(678,`td`,24)(679,`em`)(680,`strong`),iO(681,`(opcional)`),wg()(),jc(682,`p`),iO(683,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(684,`tr`,16)(685,`td`,17)(686,`div`,25)(687,`span`,26),iO(688,` name`),nu(689,`br`),wg()()(),jc(690,`td`,21)(691,`code`,27),iO(692,`string`),wg()(),jc(693,`td`,23),iO(694,`-`),wg(),jc(695,`td`,24)(696,`p`),iO(697,`Nome do componente.`),wg()()(),jc(698,`tr`,16)(699,`td`,17)(700,`div`,18)(701,`span`,19),iO(702,` (ngModelChange)`),nu(703,`br`),wg()()(),jc(704,`td`,21)(705,`code`,22),iO(706,`EventEmitter`),wg()(),jc(707,`td`,23),iO(708,`-`),wg(),jc(709,`td`,24)(710,`em`)(711,`strong`),iO(712,`(opcional)`),wg()(),jc(713,`p`),iO(714,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),wg(),jc(715,`p`),iO(716,`Na versão 12.2.0 do Angular a verificação `),jc(717,`code`),iO(718,`strictTemplates`),wg(),iO(719,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),wg(),jc(720,`pre`)(721,`code`),iO(722,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),wg()()()(),jc(723,`tr`,16)(724,`td`,17)(725,`div`,25)(726,`span`,26),iO(727,` p-optional`),nu(728,`br`),wg()()(),jc(729,`td`,21)(730,`code`,28),iO(731,`boolean`),wg()(),jc(732,`td`,23)(733,`p`)(734,`code`),iO(735,`false`),wg()()(),jc(736,`td`,24)(737,`em`)(738,`strong`),iO(739,`(opcional)`),wg()(),jc(740,`p`),iO(741,`Define se a indicação de campo opcional será exibida.`),wg(),jc(742,`blockquote`)(743,`p`),iO(744,`Não será exibida a indicação se:`),wg()(),jc(745,`ul`)(746,`li`),iO(747,`O campo conter `),jc(748,`code`),iO(749,`p-required`),wg(),iO(750,`;`),wg(),jc(751,`li`),iO(752,`Não possuir `),jc(753,`code`),iO(754,`p-help`),wg(),iO(755,` e/ou `),jc(756,`code`),iO(757,`p-label`),wg(),iO(758,`.`),wg()()()(),jc(759,`tr`,16)(760,`td`,17)(761,`div`,25)(762,`span`,26),iO(763,` p-options`),nu(764,`br`),wg()()(),jc(765,`td`,21)(766,`code`,29),iO(767,`any[]`),wg()(),jc(768,`td`,23),iO(769,`-`),wg(),jc(770,`td`,24)(771,`p`),iO(772,`Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `),jc(773,`code`),iO(774,`PoSelectOption`),wg(),iO(775,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),jc(776,`code`),iO(777,`PoSelectOptionGroup`),wg(),iO(778,`.`),wg(),jc(779,`p`),iO(780,`Caso esta lista estiver vazia, o model será `),jc(781,`code`),iO(782,`undefined`),wg(),iO(783,`.`),wg(),jc(784,`blockquote`)(785,`p`),iO(786,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),wg()(),jc(787,`pre`)(788,`code`),iO(789,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),wg()(),jc(790,`blockquote`)(791,`p`),iO(792,`Para coleção de objetos dentro de grupos distintos será exibido a label e opções somente se a propriedade `),jc(793,`code`),iO(794,`options`),wg(),iO(795,` possua valores. Sendo assim, a estrutura seguiria dessa forma:`),wg()(),jc(796,`pre`)(797,`code`),iO(798,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),wg()(),jc(799,`p`),iO(800,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),wg()()(),jc(801,`tr`,16)(802,`td`,17)(803,`div`,25)(804,`span`,26),iO(805,` p-placeholder`),nu(806,`br`),wg()()(),jc(807,`td`,21)(808,`code`,27),iO(809,`string`),wg()(),jc(810,`td`,23),iO(811,`-`),wg(),jc(812,`td`,24)(813,`em`)(814,`strong`),iO(815,`(opcional)`),wg()(),jc(816,`p`),iO(817,`Mensagem que aparecerá enquanto nenhuma opção estiver selecionada.`),wg()()(),jc(818,`tr`,16)(819,`td`,17)(820,`div`,25)(821,`span`,26),iO(822,` p-helper`),nu(823,`br`),wg()()(),jc(824,`td`,21)(825,`code`,30),iO(826,`PoHelperOptions `),wg(),jc(827,`code`,27),iO(828,` string`),wg()(),jc(829,`td`,23),iO(830,`-`),wg(),jc(831,`td`,24)(832,`em`)(833,`strong`),iO(834,`(opcional)`),wg()(),jc(835,`p`),iO(836,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(837,`code`),iO(838,`p-label`),wg(),iO(839,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(840,`code`),iO(841,`p-label`),wg(),iO(842,`.`),wg(),jc(843,`blockquote`)(844,`p`),iO(845,`Para mais informações acesse: `),jc(846,`a`,31),iO(847,`https://po-ui.io/documentation/po-helper`),wg(),iO(848,`.`),wg()(),jc(849,`blockquote`)(850,`p`),iO(851,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(852,`code`),iO(853,`p-additional-help-tooltip`),wg(),iO(854,` e `),jc(855,`code`),iO(856,`p-additional-help`),wg(),iO(857,`) será ignorado.`),wg()()()(),jc(858,`tr`,16)(859,`td`,17)(860,`div`,25)(861,`span`,26),iO(862,` p-readonly`),nu(863,`br`),wg()()(),jc(864,`td`,21)(865,`code`,28),iO(866,`boolean`),wg()(),jc(867,`td`,23)(868,`p`)(869,`code`),iO(870,`false`),wg()()(),jc(871,`td`,24)(872,`em`)(873,`strong`),iO(874,`(opcional)`),wg()(),jc(875,`p`),iO(876,`Indica que o campo será somente para leitura.`),wg()()(),jc(877,`tr`,16)(878,`td`,17)(879,`div`,25)(880,`span`,26),iO(881,` p-required`),nu(882,`br`),wg()()(),jc(883,`td`,21)(884,`code`,28),iO(885,`boolean`),wg()(),jc(886,`td`,23)(887,`p`)(888,`code`),iO(889,`false`),wg()()(),jc(890,`td`,24)(891,`em`)(892,`strong`),iO(893,`(opcional)`),wg()(),jc(894,`p`),iO(895,`Define que o campo será obrigatório.`),wg()()(),jc(896,`tr`,16)(897,`td`,17)(898,`div`,25)(899,`span`,26),iO(900,` p-show-required`),nu(901,`br`),wg()()(),jc(902,`td`,21)(903,`code`,28),iO(904,`boolean`),wg()(),jc(905,`td`,23),iO(906,`-`),wg(),jc(907,`td`,24)(908,`p`),iO(909,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(910,`blockquote`)(911,`p`),iO(912,`Não será exibida a indicação se:`),wg()(),jc(913,`ul`)(914,`li`),iO(915,`Não possuir `),jc(916,`code`),iO(917,`p-help`),wg(),iO(918,` e/ou `),jc(919,`code`),iO(920,`p-label`),wg(),iO(921,`.`),wg()()()(),jc(922,`tr`,16)(923,`td`,17)(924,`div`,25)(925,`span`,26),iO(926,` p-size`),nu(927,`br`),wg()()(),jc(928,`td`,21)(929,`code`,27),iO(930,`string`),wg()(),jc(931,`td`,23)(932,`p`)(933,`code`),iO(934,`medium`),wg()()(),jc(935,`td`,24)(936,`em`)(937,`strong`),iO(938,`(opcional)`),wg()(),jc(939,`p`),iO(940,`Define o tamanho do componente:`),wg(),jc(941,`ul`)(942,`li`)(943,`code`),iO(944,`small`),wg(),iO(945,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(946,`li`)(947,`code`),iO(948,`medium`),wg(),iO(949,`: altura do input como 44px.`),wg()(),jc(950,`blockquote`)(951,`p`),iO(952,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(953,`code`),iO(954,`medium`),wg(),iO(955,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(956,`a`,32),iO(957,`po-theme`),wg(),iO(958,`.`),wg()()()()(),jc(959,`h3`,12),iO(960,`Métodos`),wg(),jc(961,`table`,33)(962,`tr`,16)(963,`th`,34)(964,`div`,25)(965,`h4`)(966,`span`,26),iO(967,` focus `),wg()()()()(),jc(968,`tr`,24)(969,`td`,24)(970,`p`),iO(971,`Função que atribui foco ao componente.`),wg(),jc(972,`p`),iO(973,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(974,`pre`)(975,`code`),iO(976,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),wg()()()()(),nu(977,`br`),jc(978,`table`,33)(979,`tr`,16)(980,`th`,34)(981,`div`,25)(982,`h4`)(983,`span`,26),iO(984,` showAdditionalHelp `),wg()()()()(),jc(985,`tr`,24)(986,`td`,24)(987,`p`),iO(988,`Método que exibe `),jc(989,`code`),iO(990,`p-helper`),wg(),iO(991,` ou executa a ação definida em `),jc(992,`code`),iO(993,`p-helper{eventOnClick}`),wg(),iO(994,` ou em `),jc(995,`code`),iO(996,`p-additionalHelp`),wg(),iO(997,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(998,`code`),iO(999,`p-keydown`),wg(),iO(1e3,`.`),wg(),jc(1001,`blockquote`)(1002,`p`),iO(1003,`Exibe ou oculta o conteúdo do componente `),jc(1004,`code`),iO(1005,`po-helper`),wg(),iO(1006,` quando o componente estiver com foco.`),wg()(),jc(1007,`pre`)(1008,`code`),iO(1009,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),wg()(),jc(1010,`pre`)(1011,`code`,35),iO(1012,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1013,`br`),jc(1014,`h3`),iO(1015,`Interfaces`),wg(),jc(1016,`h4`,36)(1017,`code`,5),iO(1018,`PoSelectOptionGroup`),wg()(),jc(1019,`div`,2)(1020,`p`),iO(1021,`Interface da coleções de itens em grupo, utilizando uma label para o grupo e as opções do tipo `),jc(1022,`code`),iO(1023,`PoSelectOption`),wg(),iO(1024,`.`),wg()(),jc(1025,`h4`,12),iO(1026,`Propriedades`),wg(),jc(1027,`table`,13)(1028,`tr`,14)(1029,`th`,15),iO(1030,`Nome`),wg(),jc(1031,`th`,15),iO(1032,`Tipo`),wg(),jc(1033,`th`,15),iO(1034,`Descrição`),wg()(),jc(1035,`tr`,16)(1036,`td`,17)(1037,`div`,25)(1038,`span`,26),iO(1039,` label`),nu(1040,`br`),wg()()(),jc(1041,`td`,21)(1042,`code`,27),iO(1043,`string`),wg()(),jc(1044,`td`,24)(1045,`p`),iO(1046,`Label para denominar o nome do grupo.`),wg()()(),jc(1047,`tr`,16)(1048,`td`,17)(1049,`div`,25)(1050,`span`,26),iO(1051,` options`),nu(1052,`br`),wg()()(),jc(1053,`td`,21)(1054,`code`,37),iO(1055,`Array<PoSelectOption>`),wg()(),jc(1056,`td`,24)(1057,`p`),iO(1058,`Lista com as opções disponíveis em cada grupo.`),wg()()()(),jc(1059,`h4`,36)(1060,`code`,5),iO(1061,`PoSelectOption`),wg()(),jc(1062,`div`,2)(1063,`p`),iO(1064,`Interface da coleções de itens que deve ser informado no componente po-select`),wg()(),jc(1065,`h4`,12),iO(1066,`Propriedades`),wg(),jc(1067,`table`,13)(1068,`tr`,14)(1069,`th`,15),iO(1070,`Nome`),wg(),jc(1071,`th`,15),iO(1072,`Tipo`),wg(),jc(1073,`th`,15),iO(1074,`Descrição`),wg()(),jc(1075,`tr`,16)(1076,`td`,17)(1077,`div`,25)(1078,`span`,26),iO(1079,` label`),nu(1080,`br`),wg()()(),jc(1081,`td`,21)(1082,`code`,27),iO(1083,`string`),wg()(),jc(1084,`td`,24)(1085,`p`),iO(1086,`Label a ser utilizada nos itens da lista.`),wg()()(),jc(1087,`tr`,16)(1088,`td`,17)(1089,`div`,25)(1090,`span`,26),iO(1091,` value`),nu(1092,`br`),wg()()(),jc(1093,`td`,21)(1094,`code`,27),iO(1095,`string `),wg(),jc(1096,`code`,38),iO(1097,` number`),wg()(),jc(1098,`td`,24)(1099,`p`),iO(1100,`Valor do objeto que será atribuído ao model.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Select`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,i){p&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-select-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-select-basic-view`)(6,`sample-po-select-labs-view`)(7,`sample-po-select-customer-registration-view`)(8,`sample-po-select-companies-view`),wg()()()),p&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,Ee,Ce,ye,Pe,we],encapsulation:2,changeDetection:1})}return a})()}];var Me=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(Je),C1]})}return a})();var Dt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,Me]})}return a})();export{Dt as DocPoSelectModule};