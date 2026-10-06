import{$i as pt,Br as Qn,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Ni as hw,Qn as C9,Qr as Ue,R as G5,Sa as zO,Ur as RN,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,ga as wN,gn as poe,gr as IE,hr as I,i as _a,ia as sE,in as kte,k as D4,ki as he$1,kn as v4,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,ui as be,va as xN,wr as Kc,zi as kL}from"./main-AGY457H2.js";var Oe=()=>({label:`Option 1`,value:`1`});var Le=()=>({label:`Option 2`,value:`2`});var De=(a,K)=>[a,K];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`p-options`]],template:function(p,i){p&1&&Kc(0,`po-select`,0),p&2&&cE(`p-options`,xN(3,De,RN(1,Oe),RN(2,Le)))},dependencies:[poe],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Select Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-select-basic/sample-po-select-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-select-basic/sample-po-select-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-select-basic`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ee],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{cdr=f(Ue);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`readonly`,label:`Read Only`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.select=``,this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size=`medium`}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(te=>te.label===i&&`options`in te);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-labs`]],standalone:!1,decls:33,vars:37,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`select`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-options`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po select options group`],[`name`,`selectOptionGroupSwitch`,`p-label`,`Select options group`,1,`po-lg-2`,`po-md-12`,3,`p-change`,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po select options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-lg-3`,`po-md-6`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(p,i){if(p&1){let m=Bx();Ac(0,`po-select`,2),RE(`ngModelChange`,function(o){return Jv(m),DN(i.select,o)||(i.select=o),e_(o)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,3),Kc(3,`po-info`,4)(4,`po-info`,5),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0),Kc(8,`po-divider`,6),Ac(9,`div`,3)(10,`po-switch`,7),pt(`p-change`,function(o){return i.restoreSwitch(o)}),RE(`ngModelChange`,function(o){return Jv(m),DN(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),e_(o)}),ug(),p0(),Ac(11,`po-select`,8),RE(`ngModelChange`,function(o){return Jv(m),DN(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),e_(o)}),pt(`p-change`,function(){return i.optionsGroupSelection()}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(o){return Jv(m),DN(i.optionsGroup,o)||(i.optionsGroup=o),e_(o)}),ug(),p0(),ug(),Kc(13,`po-divider`,10),Ac(14,`div`,3)(15,`po-input`,11),RE(`ngModelChange`,function(o){return Jv(m),DN(i.option.label,o)||(i.option.label=o),e_(o)}),ug(),p0(),Ac(16,`po-input`,12),RE(`ngModelChange`,function(o){return Jv(m),DN(i.option.value,o)||(i.option.value=o),e_(o)}),ug(),p0(),ug(),Ac(17,`div`,3)(18,`po-button`,13),pt(`p-click`,function(){return i.addOption()}),ug()()(),Kc(19,`po-divider`),Ac(20,`form`,null,1)(22,`po-input`,14),RE(`ngModelChange`,function(o){return Jv(m),DN(i.label,o)||(i.label=o),e_(o)}),ug(),p0(),Ac(23,`po-input`,15),RE(`ngModelChange`,function(o){return Jv(m),DN(i.help,o)||(i.help=o),e_(o)}),ug(),p0(),Ac(24,`po-input`,16),RE(`ngModelChange`,function(o){return Jv(m),DN(i.helperText,o)||(i.helperText=o),e_(o)}),ug(),p0(),Ac(25,`po-input`,17),RE(`ngModelChange`,function(o){return Jv(m),DN(i.placeholder,o)||(i.placeholder=o),e_(o)}),ug(),p0(),Ac(26,`po-input`,18),RE(`ngModelChange`,function(o){return Jv(m),DN(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),e_(o)}),ug(),p0(),Ac(27,`po-checkbox-group`,19),RE(`ngModelChange`,function(o){return Jv(m),DN(i.properties,o)||(i.properties=o),e_(o)}),ug(),p0(),Ac(28,`po-radio-group`,20),RE(`ngModelChange`,function(o){return Jv(m),DN(i.size,o)||(i.size=o),e_(o)}),ug(),p0(),Ac(29,`div`,3)(30,`div`,21)(31,`po-button`,22),pt(`p-click`,function(){return i.restore()}),ug()()(),Kc(32,`form`),ug()}if(p&2){let m=Zx(7);TE(`ngModel`,i.select),cE(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-options`,i.options)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),m0(),Hp(3),cE(`p-value`,i.select),Hp(),cE(`p-value`,i.event),Hp(6),TE(`ngModel`,i.selectOptionGroupSwitch),m0(),Hp(),TE(`ngModel`,i.selectedOptionsGroup),cE(`p-disabled`,!i.selectOptionGroupSwitch)(`p-options`,i.optionsGroupList),m0(),Hp(),TE(`ngModel`,i.optionsGroup),cE(`p-disabled`,!i.selectOptionGroupSwitch),m0(),Hp(3),TE(`ngModel`,i.option.label),m0(),Hp(),TE(`ngModel`,i.option.value),m0(),Hp(2),cE(`p-disabled`,m.invalid),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,poe,v4,hoe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Select Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-select-labs/sample-po-select-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-select
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-select-labs/sample-po-select-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-select-labs`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ge,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,fe],encapsulation:2,changeDetection:1})}return a})();var ee=(()=>{class a{http=f(hw);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(p){return new(p||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Ie(a,K){if(a&1&&(Ac(0,`div`,17),Kc(1,`po-avatar`,18),Ac(2,`div`,19)(3,`div`,20),vN(4),ug(),Ac(5,`div`,21),vN(6),ug()()()),a&2){let r=K.$implicit;Hp(),cE(`p-src`,wN(`https://po-sample-api.onrender.com/v1/sampleSelect/`,r.value,`.png`)),Hp(3),IE(r.label),Hp(2),IE(r.value)}}var xe=(()=>{class a{sampleService=f(ee);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:`CPF`,value:`CPF`},{label:`CNPJ`,value:`CNPJ`}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r===`CPF`?(this.documentLabel=`CPF Number`,this.mask=`999.999.999-99`,this.minLength=14,this.nameLabel=`Client Name`):(this.documentLabel=`CNPJ Number`,this.mask=`99.999.999/9999-99`,this.minLength=18,this.nameLabel=`Company Name`),this.address=``,this.document=``,this.name=``}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType=`CPF`}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:``}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:``}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state=`sp`,this.getCitiesByState(this.state)})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-customer-registration`]],standalone:!1,features:[be([ee])],decls:27,vars:22,consts:[[`f`,`ngForm`],[`modal`,``],[1,`po-row`],[`name`,`documentType`,`p-label`,`Document type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`document`,`p-mask-format-model`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`,`p-mask`,`p-minlength`],[`name`,`name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Send Informations`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Informations`],[`p-label`,`Document type`,1,`po-md-6`,3,`p-value`],[1,`po-md-6`,3,`p-label`,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`State`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`],[1,`sample-select-option-template-container`],[`p-size`,`xs`,3,`p-src`],[1,`sample-select-option-template-margin`],[1,`sample-select-option-template-label`],[1,`sample-select-option-template-value`]],template:function(p,i){if(p&1){let m=Bx();Ac(0,`form`,null,0)(2,`div`,2)(3,`po-radio-group`,3),RE(`ngModelChange`,function(o){return Jv(m),DN(i.documentType,o)||(i.documentType=o),e_(o)}),pt(`p-change`,function(o){return i.changeType(o)}),ug(),p0(),Ac(4,`po-input`,4),RE(`ngModelChange`,function(o){return Jv(m),DN(i.document,o)||(i.document=o),e_(o)}),ug(),p0(),ug(),Ac(5,`div`,2)(6,`po-input`,5),RE(`ngModelChange`,function(o){return Jv(m),DN(i.name,o)||(i.name=o),e_(o)}),ug(),p0(),Ac(7,`po-input`,6),RE(`ngModelChange`,function(o){return Jv(m),DN(i.address,o)||(i.address=o),e_(o)}),ug(),p0(),ug(),Ac(8,`div`,2)(9,`po-select`,7),RE(`ngModelChange`,function(o){return Jv(m),DN(i.state,o)||(i.state=o),e_(o)}),pt(`p-change`,function(){return i.onChangeState()}),sE(10,Ie,7,4,`ng-template`,8),ug(),p0(),Ac(11,`po-select`,9),RE(`ngModelChange`,function(o){return Jv(m),DN(i.city,o)||(i.city=o),e_(o)}),ug(),p0(),ug(),Ac(12,`div`,2)(13,`po-button`,10),pt(`p-click`,function(){Jv(m);let o=Zx(15);return e_(o.open())}),ug()()(),Ac(14,`po-modal`,11,1)(16,`div`,2),Kc(17,`po-info`,12)(18,`po-info`,13),ug(),Kc(19,`po-divider`),Ac(20,`div`,2),Kc(21,`po-info`,13)(22,`po-info`,14),ug(),Kc(23,`po-divider`),Ac(24,`div`,2),Kc(25,`po-info`,15)(26,`po-info`,16),ug()()}if(p&2){let m=Zx(1);Hp(3),TE(`ngModel`,i.documentType),cE(`p-options`,i.options),m0(),Hp(),TE(`ngModel`,i.document),cE(`p-label`,i.documentLabel)(`p-mask`,i.mask)(`p-minlength`,i.minLength),m0(),Hp(2),TE(`ngModel`,i.name),cE(`p-label`,i.nameLabel),m0(),Hp(),TE(`ngModel`,i.address),m0(),Hp(2),TE(`ngModel`,i.state),cE(`p-options`,i.stateOptions),m0(),Hp(2),TE(`ngModel`,i.city),cE(`p-options`,i.cityOptions),m0(),Hp(2),cE(`p-disabled`,m.invalid),Hp(4),cE(`p-value`,i.documentType),Hp(),cE(`p-label`,i.documentLabel)(`p-value`,i.document),Hp(3),cE(`p-label`,i.nameLabel)(`p-value`,i.name),Hp(),cE(`p-value`,i.address),Hp(3),cE(`p-value`,i.getStateByValue(i.state)),Hp(),cE(`p-value`,i.getCityByValue(i.city))}},dependencies:[b9,D9,C9,BP,LP,G5,ni,Ef,D4,kte,poe,hoe,ta],styles:[`.sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}`],changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-customer-registration-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Select - Customer registration`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #f="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()(),Ac(25,`po-tab`,10)(26,`div`)(27,`label`,6),vN(28,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`),ug(),Ac(29,`pre`,11),vN(30,`.sample-select-option-template-container {
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
`),ug()()()()(),Ac(31,`div`,12),Kc(32,`sample-po-select-customer-registration`),ug(),Kc(33,`hr`)),p&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,We,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,xe],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{select;fieldLabel=`nomeFantasia`;fieldValue=`cnpj`;empresas=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];labels=[{label:`Dados`,options:[{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`email`,value:`email`}]},{label:`Cidade`,options:[{label:`origem`,value:`origem`}]}];values=[{label:`codigo`,value:`codigo`},{label:`cnpj`,value:`cnpj`},{label:`id`,value:`id`},{label:`data`,value:`data`}];onChange(r){this.select=void 0}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-companies`]],standalone:!1,decls:5,vars:9,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`ngModelChange`,`ngModel`,`p-field-value`,`p-field-label`,`p-options`],[`p-label`,`Model`,`name`,`selectInfo`,3,`p-valueChange`,`p-value`],[1,`po-row`],[`name`,`fieldLabel`,`p-label`,`p-field-label`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`],[`name`,`selectValue`,`p-label`,`p-field-value`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`]],template:function(p,i){p&1&&(Ac(0,`po-select`,0),RE(`ngModelChange`,function(d){return DN(i.select,d)||(i.select=d),d}),ug(),p0(),Ac(1,`po-info`,1),RE(`p-valueChange`,function(d){return DN(i.select,d)||(i.select=d),d}),ug(),Ac(2,`div`,2)(3,`po-select`,3),pt(`p-change`,function(d){return i.onChange(d)}),RE(`ngModelChange`,function(d){return DN(i.fieldLabel,d)||(i.fieldLabel=d),d}),ug(),p0(),Ac(4,`po-select`,4),pt(`p-change`,function(d){return i.onChange(d)}),RE(`ngModelChange`,function(d){return DN(i.fieldValue,d)||(i.fieldValue=d),d}),ug(),p0(),ug()),p&2&&(TE(`ngModel`,i.select),cE(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel)(`p-options`,i.empresas),m0(),Hp(),TE(`p-value`,i.select),Hp(2),cE(`p-options`,i.labels),TE(`ngModel`,i.fieldLabel),m0(),Hp(),cE(`p-options`,i.values),TE(`ngModel`,i.fieldValue),m0())},dependencies:[D9,BP,poe,hoe],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-companies-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Select Companies`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-select-companies/sample-po-select-companies.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-select
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-select-companies/sample-po-select-companies.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-select-companies`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,je,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,_e],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-select-doc`]],standalone:!1,decls:1101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo-option-template`],[`href`,`/documentation/po-select-option-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(p,i){p&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoSelectComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),ug(),Ac(24,`blockquote`)(25,`p`),vN(26,`Ao passar um valor para o `),Ac(27,`em`),vN(28,`model`),ug(),vN(29,` que não está na lista de opções, o mesmo será definido como `),Ac(30,`code`),vN(31,`undefined`),ug(),vN(32,`.`),ug()(),Ac(33,`p`),vN(34,`Também existe a possibilidade de utilizar um `),Ac(35,`em`),vN(36,`template`),ug(),vN(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Ac(38,`strong`)(39,`a`,6),vN(40,`p-combo-option-template`),ug()(),vN(41,`.`),ug(),Ac(42,`blockquote`)(43,`p`),vN(44,`Obs: o template `),Ac(45,`strong`)(46,`a`,7),vN(47,`p-select-option-template`),ug()(),vN(48,` será depreciado na versão 14.x.x.`),ug()(),Ac(49,`h4`),vN(50,`Tokens customizáveis`),ug(),Ac(51,`p`),vN(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(53,`blockquote`)(54,`p`),vN(55,`Para maiores informações, acesse o guia `),Ac(56,`a`,8),vN(57,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(58,`.`),ug()(),Ac(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),vN(63,`Propriedade`),ug(),Ac(64,`th`),vN(65,`Descrição`),ug(),Ac(66,`th`),vN(67,`Valor Padrão`),ug()()(),Ac(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),vN(72,`Default Values`),ug()(),Kc(73,`td`)(74,`td`),ug(),Ac(75,`tr`)(76,`td`)(77,`code`),vN(78,`--font-family`),ug()(),Ac(79,`td`),vN(80,`Família tipográfica usada`),ug(),Ac(81,`td`)(82,`code`),vN(83,`var(--font-family-theme)`),ug()()(),Ac(84,`tr`)(85,`td`)(86,`code`),vN(87,`--font-size`),ug()(),Ac(88,`td`),vN(89,`Tamanho da fonte`),ug(),Ac(90,`td`)(91,`code`),vN(92,`var(--font-size-default)`),ug()()(),Ac(93,`tr`)(94,`td`)(95,`code`),vN(96,`--text-color-empty`),ug()(),Ac(97,`td`),vN(98,`Cor do placeholder`),ug(),Ac(99,`td`)(100,`code`),vN(101,`var(--color-neutral-light-30)`),ug()()(),Ac(102,`tr`)(103,`td`)(104,`code`),vN(105,`--color`),ug()(),Ac(106,`td`),vN(107,`Cor da borda`),ug(),Ac(108,`td`)(109,`code`),vN(110,`var(--color-neutral-dark-70)`),ug()()(),Ac(111,`tr`)(112,`td`)(113,`code`),vN(114,`--background`),ug()(),Ac(115,`td`),vN(116,`Cor de background`),ug(),Ac(117,`td`)(118,`code`),vN(119,`var(--color-neutral-light-05)`),ug()()(),Ac(120,`tr`)(121,`td`)(122,`code`),vN(123,`--text-color`),ug()(),Ac(124,`td`),vN(125,`Cor do texto`),ug(),Ac(126,`td`)(127,`code`),vN(128,`var(--color-neutral-dark-90)`),ug()()(),Ac(129,`tr`)(130,`td`)(131,`code`),vN(132,`--padding-horizontal`),ug()(),Ac(133,`td`),vN(134,`Preenchimento horizontal`),ug(),Ac(135,`td`)(136,`code`),vN(137,`0.5em`),ug()()(),Ac(138,`tr`)(139,`td`)(140,`code`),vN(141,`--padding-vertical`),ug()(),Ac(142,`td`),vN(143,`Preenchimento vertical`),ug(),Ac(144,`td`)(145,`code`),vN(146,`0.7em`),ug()()(),Ac(147,`tr`)(148,`td`)(149,`code`),vN(150,`--field-container-title-justify`),ug()(),Ac(151,`td`),vN(152,`Alinhamento horizontal do título (`),Ac(153,`code`),vN(154,`justify-content`),ug(),vN(155,`)`),ug(),Ac(156,`td`)(157,`code`),vN(158,`space-between`),ug()()(),Ac(159,`tr`)(160,`td`)(161,`code`),vN(162,`--field-container-title-flex`),ug()(),Ac(163,`td`),vN(164,`Flex do título (`),Ac(165,`code`),vN(166,`flex`),ug(),vN(167,`)`),ug(),Ac(168,`td`)(169,`code`),vN(170,`1 auto`),ug()()(),Ac(171,`tr`)(172,`td`)(173,`strong`),vN(174,`Hover`),ug()(),Kc(175,`td`)(176,`td`),ug(),Ac(177,`tr`)(178,`td`)(179,`code`),vN(180,`--color-hover`),ug()(),Ac(181,`td`),vN(182,`Cor principal no estado hover`),ug(),Ac(183,`td`)(184,`code`),vN(185,`var(--color-brand-01-dark)`),ug()()(),Ac(186,`tr`)(187,`td`)(188,`code`),vN(189,`--background-hover`),ug()(),Ac(190,`td`),vN(191,`Cor de background no estado hover`),ug(),Ac(192,`td`)(193,`code`),vN(194,`var(--color-brand-01-lighter)`),ug()()(),Ac(195,`tr`)(196,`td`)(197,`strong`),vN(198,`Focused`),ug()(),Kc(199,`td`)(200,`td`),ug(),Ac(201,`tr`)(202,`td`)(203,`code`),vN(204,`--outline-color-focused`),ug()(),Ac(205,`td`),vN(206,`Cor do outline do estado de focus`),ug(),Ac(207,`td`)(208,`code`),vN(209,`var(--color-action-focus)`),ug()()(),Ac(210,`tr`)(211,`td`)(212,`code`),vN(213,`--color-focused`),ug()(),Ac(214,`td`),vN(215,`Cor da borda no estado de focus`),ug(),Ac(216,`td`)(217,`code`),vN(218,`var(--color-action-default)`),ug()()(),Ac(219,`tr`)(220,`td`)(221,`strong`),vN(222,`Disabled`),ug()(),Kc(223,`td`)(224,`td`),ug(),Ac(225,`tr`)(226,`td`)(227,`code`),vN(228,`--color-disabled`),ug()(),Ac(229,`td`),vN(230,`Cor principal no estado disabled`),ug(),Ac(231,`td`)(232,`code`),vN(233,`var(--color-neutral-light-30)`),ug()()(),Ac(234,`tr`)(235,`td`)(236,`code`),vN(237,`--background-color-disabled`),ug(),vN(238,`\xA0`),ug(),Ac(239,`td`),vN(240,`Cor de background no estado disabled`),ug(),Ac(241,`td`)(242,`code`),vN(243,`var(--color-neutral-light-20)`),ug()()()()()(),Ac(244,`div`,9)(245,`h4`,10),vN(246,`Seletor`),ug(),Ac(247,`pre`,11),vN(248,`<po-select
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
`),ug()(),Ac(249,`h4`,12),vN(250,`Propriedades`),ug(),Ac(251,`table`,13)(252,`tr`,14)(253,`th`,15),vN(254,`Nome`),ug(),Ac(255,`th`,15),vN(256,`Tipo`),ug(),Ac(257,`th`,15),vN(258,`Padrão`),ug(),Ac(259,`th`,15),vN(260,`Descrição`),ug()(),Ac(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),vN(265,` (p-additional-help)`),Kc(266,`br`),ug()(),Ac(267,`div`,20),vN(268,`Deprecated`),ug()(),Ac(269,`td`,21)(270,`code`,22),vN(271,`EventEmitter`),ug()(),Ac(272,`td`,23),vN(273,`-`),ug(),Ac(274,`td`,24)(275,`em`)(276,`strong`),vN(277,`(opcional)`),ug()(),Ac(278,`p`),vN(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(280,`blockquote`)(281,`p`),vN(282,`Essa propriedade está `),Ac(283,`strong`),vN(284,`depreciada`),ug(),vN(285,` e será removida na versão `),Ac(286,`code`),vN(287,`23.x.x`),ug(),vN(288,`. Recomendamos utilizar a propriedade `),Ac(289,`code`),vN(290,`p-helper`),ug(),vN(291,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(292,`tr`,16)(293,`td`,17)(294,`div`,25)(295,`span`,26),vN(296,` p-additional-help-tooltip`),Kc(297,`br`),ug()(),Ac(298,`div`,20),vN(299,`Deprecated`),ug()(),Ac(300,`td`,21)(301,`code`,27),vN(302,`string`),ug()(),Ac(303,`td`,23),vN(304,`-`),ug(),Ac(305,`td`,24)(306,`em`)(307,`strong`),vN(308,`(opcional)`),ug()(),Ac(309,`p`),vN(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(311,`code`),vN(312,`po-helper`),ug(),vN(313,`.
`),Ac(314,`strong`),vN(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(316,`blockquote`)(317,`p`),vN(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(319,`blockquote`)(320,`p`),vN(321,`Essa propriedade está `),Ac(322,`strong`),vN(323,`depreciada`),ug(),vN(324,` e será removida na versão `),Ac(325,`code`),vN(326,`23.x.x`),ug(),vN(327,`. Recomendamos utilizar a propriedade `),Ac(328,`code`),vN(329,`p-helper`),ug(),vN(330,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(331,`tr`,16)(332,`td`,17)(333,`div`,25)(334,`span`,26),vN(335,` p-append-in-body`),Kc(336,`br`),ug()()(),Ac(337,`td`,21)(338,`code`,28),vN(339,`boolean`),ug()(),Ac(340,`td`,23)(341,`p`)(342,`code`),vN(343,`false`),ug()()(),Ac(344,`td`,24)(345,`em`)(346,`strong`),vN(347,`(opcional)`),ug()(),Ac(348,`p`),vN(349,`Define que o popover (`),Ac(350,`code`),vN(351,`p-helper`),ug(),vN(352,` e/ou `),Ac(353,`code`),vN(354,`p-error-limit`),ug(),vN(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(356,`blockquote`)(357,`p`),vN(358,`Quando utilizado com `),Ac(359,`code`),vN(360,`p-helper`),ug(),vN(361,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(362,`tr`,16)(363,`td`,17)(364,`div`,18)(365,`span`,19),vN(366,` (p-blur)`),Kc(367,`br`),ug()()(),Ac(368,`td`,21)(369,`code`,22),vN(370,`EventEmitter`),ug()(),Ac(371,`td`,23),vN(372,`-`),ug(),Ac(373,`td`,24)(374,`em`)(375,`strong`),vN(376,`(opcional)`),ug()(),Ac(377,`p`),vN(378,`Evento disparado ao sair do campo.`),ug()()(),Ac(379,`tr`,16)(380,`td`,17)(381,`div`,18)(382,`span`,19),vN(383,` (p-change)`),Kc(384,`br`),ug()()(),Ac(385,`td`,21)(386,`code`,22),vN(387,`EventEmitter`),ug()(),Ac(388,`td`,23),vN(389,`-`),ug(),Ac(390,`td`,24)(391,`em`)(392,`strong`),vN(393,`(opcional)`),ug()(),Ac(394,`p`),vN(395,`Evento disparado ao alterar valor do campo.`),ug()()(),Ac(396,`tr`,16)(397,`td`,17)(398,`div`,18)(399,`span`,19),vN(400,` (p-change-model)`),Kc(401,`br`),ug()()(),Ac(402,`td`,21)(403,`code`,22),vN(404,`EventEmitter`),ug()(),Ac(405,`td`,23),vN(406,`-`),ug(),Ac(407,`td`,24)(408,`em`)(409,`strong`),vN(410,`(opcional)`),ug()(),Ac(411,`p`),vN(412,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(413,`code`),vN(414,`setValue`),ug(),vN(415,`, `),Ac(416,`code`),vN(417,`patchValue`),ug(),vN(418,`, carregamento assíncrono).`),ug(),Ac(419,`p`),vN(420,`Diferentemente do `),Ac(421,`code`),vN(422,`p-change`),ug(),vN(423,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(424,`code`),vN(425,`p-change-model`),ug(),vN(426,` cobre todos os cenários de alteração de valor.`),ug(),Ac(427,`p`),vN(428,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(429,`tr`,16)(430,`td`,17)(431,`div`,25)(432,`span`,26),vN(433,` p-compact-label`),Kc(434,`br`),ug()()(),Ac(435,`td`,21)(436,`code`,28),vN(437,`boolean`),ug()(),Ac(438,`td`,23)(439,`p`)(440,`code`),vN(441,`false`),ug()()(),Ac(442,`td`,24)(443,`em`)(444,`strong`),vN(445,`(opcional)`),ug()(),Ac(446,`p`),vN(447,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(448,`p`),vN(449,`Quando habilitado (`),Ac(450,`code`),vN(451,`true`),ug(),vN(452,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(453,`ul`)(454,`li`)(455,`code`),vN(456,`po-label`),ug()(),Ac(457,`li`)(458,`code`),vN(459,`p-requirement (showRequired)`),ug()(),Ac(460,`li`)(461,`code`),vN(462,`po-helper`),ug()()(),Ac(463,`p`),vN(464,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(465,`p`),vN(466,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(467,`ul`)(468,`li`)(469,`code`),vN(470,`--field-container-title-justify`),ug()(),Ac(471,`li`)(472,`code`),vN(473,`--field-container-title-flex`),ug()()(),Ac(474,`p`),vN(475,`Exemplo:`),ug(),Ac(476,`pre`)(477,`code`),vN(478,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(479,`p`),vN(480,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(481,`tr`,16)(482,`td`,17)(483,`div`,25)(484,`span`,26),vN(485,` p-disabled`),Kc(486,`br`),ug()()(),Ac(487,`td`,21)(488,`code`,28),vN(489,`boolean`),ug()(),Ac(490,`td`,23)(491,`p`)(492,`code`),vN(493,`false`),ug()()(),Ac(494,`td`,24)(495,`em`)(496,`strong`),vN(497,`(opcional)`),ug()(),Ac(498,`p`),vN(499,`Indica se o campo será desabilitado.`),ug()()(),Ac(500,`tr`,16)(501,`td`,17)(502,`div`,25)(503,`span`,26),vN(504,` p-error-limit`),Kc(505,`br`),ug()()(),Ac(506,`td`,21)(507,`code`,28),vN(508,`boolean`),ug()(),Ac(509,`td`,23)(510,`p`)(511,`code`),vN(512,`false`),ug()()(),Ac(513,`td`,24)(514,`em`)(515,`strong`),vN(516,`(opcional)`),ug()(),Ac(517,`p`),vN(518,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(519,`blockquote`)(520,`p`),vN(521,`Caso essa propriedade seja definida como `),Ac(522,`code`),vN(523,`true`),ug(),vN(524,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(525,`tr`,16)(526,`td`,17)(527,`div`,25)(528,`span`,26),vN(529,` p-field-error-message`),Kc(530,`br`),ug()()(),Ac(531,`td`,21)(532,`code`,27),vN(533,`string`),ug()(),Ac(534,`td`,23),vN(535,`-`),ug(),Ac(536,`td`,24)(537,`em`)(538,`strong`),vN(539,`(opcional)`),ug()(),Ac(540,`p`),vN(541,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(542,`blockquote`)(543,`p`),vN(544,`Necessário que a propriedade `),Ac(545,`code`),vN(546,`p-required`),ug(),vN(547,` esteja habilitada.`),ug()()()(),Ac(548,`tr`,16)(549,`td`,17)(550,`div`,25)(551,`span`,26),vN(552,` p-field-label`),Kc(553,`br`),ug()()(),Ac(554,`td`,21)(555,`code`,27),vN(556,`string`),ug()(),Ac(557,`td`,23)(558,`p`)(559,`code`),vN(560,`label`),ug()()(),Ac(561,`td`,24)(562,`em`)(563,`strong`),vN(564,`(opcional)`),ug()(),Ac(565,`p`),vN(566,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ac(567,`code`),vN(568,`p-options`),ug(),vN(569,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),ug()()(),Ac(570,`tr`,16)(571,`td`,17)(572,`div`,25)(573,`span`,26),vN(574,` p-field-value`),Kc(575,`br`),ug()()(),Ac(576,`td`,21)(577,`code`,27),vN(578,`string`),ug()(),Ac(579,`td`,23)(580,`p`)(581,`code`),vN(582,`value`),ug()()(),Ac(583,`td`,24)(584,`em`)(585,`strong`),vN(586,`(opcional)`),ug()(),Ac(587,`p`),vN(588,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ac(589,`code`),vN(590,`p-options`),ug(),vN(591,`), esta propriedade será responsável pelo valor de cada item da lista.`),ug()()(),Ac(592,`tr`,16)(593,`td`,17)(594,`div`,25)(595,`span`,26),vN(596,` p-help`),Kc(597,`br`),ug()()(),Ac(598,`td`,21)(599,`code`,27),vN(600,`string`),ug()(),Ac(601,`td`,23),vN(602,`-`),ug(),Ac(603,`td`,24)(604,`p`),vN(605,`Texto de apoio para o campo.`),ug()()(),Ac(606,`tr`,16)(607,`td`,17)(608,`div`,18)(609,`span`,19),vN(610,` (p-keydown)`),Kc(611,`br`),ug()()(),Ac(612,`td`,21)(613,`code`,22),vN(614,`EventEmitter`),ug()(),Ac(615,`td`,23),vN(616,`-`),ug(),Ac(617,`td`,24)(618,`em`)(619,`strong`),vN(620,`(opcional)`),ug()(),Ac(621,`p`),vN(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(623,`code`),vN(624,`KeyboardEvent`),ug(),vN(625,` com informações sobre a tecla.`),ug()()(),Ac(626,`tr`,16)(627,`td`,17)(628,`div`,25)(629,`span`,26),vN(630,` p-label`),Kc(631,`br`),ug()()(),Ac(632,`td`,21)(633,`code`,27),vN(634,`string`),ug()(),Ac(635,`td`,23),vN(636,`-`),ug(),Ac(637,`td`,24)(638,`p`),vN(639,`Rótulo exibido pelo componente.`),ug()()(),Ac(640,`tr`,16)(641,`td`,17)(642,`div`,25)(643,`span`,26),vN(644,` p-label-text-wrap`),Kc(645,`br`),ug()()(),Ac(646,`td`,21)(647,`code`,28),vN(648,`boolean`),ug()(),Ac(649,`td`,23)(650,`p`)(651,`code`),vN(652,`false`),ug()()(),Ac(653,`td`,24)(654,`em`)(655,`strong`),vN(656,`(opcional)`),ug()(),Ac(657,`p`),vN(658,`Habilita a quebra automática do texto da propriedade `),Ac(659,`code`),vN(660,`p-label`),ug(),vN(661,`. Quando `),Ac(662,`code`),vN(663,`p-label-text-wrap`),ug(),vN(664,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(665,`tr`,16)(666,`td`,17)(667,`div`,25)(668,`span`,26),vN(669,` p-loading`),Kc(670,`br`),ug()()(),Ac(671,`td`,21)(672,`code`,28),vN(673,`boolean`),ug()(),Ac(674,`td`,23)(675,`p`)(676,`code`),vN(677,`false`),ug()()(),Ac(678,`td`,24)(679,`em`)(680,`strong`),vN(681,`(opcional)`),ug()(),Ac(682,`p`),vN(683,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(684,`tr`,16)(685,`td`,17)(686,`div`,25)(687,`span`,26),vN(688,` name`),Kc(689,`br`),ug()()(),Ac(690,`td`,21)(691,`code`,27),vN(692,`string`),ug()(),Ac(693,`td`,23),vN(694,`-`),ug(),Ac(695,`td`,24)(696,`p`),vN(697,`Nome do componente.`),ug()()(),Ac(698,`tr`,16)(699,`td`,17)(700,`div`,18)(701,`span`,19),vN(702,` (ngModelChange)`),Kc(703,`br`),ug()()(),Ac(704,`td`,21)(705,`code`,22),vN(706,`EventEmitter`),ug()(),Ac(707,`td`,23),vN(708,`-`),ug(),Ac(709,`td`,24)(710,`em`)(711,`strong`),vN(712,`(opcional)`),ug()(),Ac(713,`p`),vN(714,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),ug(),Ac(715,`p`),vN(716,`Na versão 12.2.0 do Angular a verificação `),Ac(717,`code`),vN(718,`strictTemplates`),ug(),vN(719,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ug(),Ac(720,`pre`)(721,`code`),vN(722,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),ug()()()(),Ac(723,`tr`,16)(724,`td`,17)(725,`div`,25)(726,`span`,26),vN(727,` p-optional`),Kc(728,`br`),ug()()(),Ac(729,`td`,21)(730,`code`,28),vN(731,`boolean`),ug()(),Ac(732,`td`,23)(733,`p`)(734,`code`),vN(735,`false`),ug()()(),Ac(736,`td`,24)(737,`em`)(738,`strong`),vN(739,`(opcional)`),ug()(),Ac(740,`p`),vN(741,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(742,`blockquote`)(743,`p`),vN(744,`Não será exibida a indicação se:`),ug()(),Ac(745,`ul`)(746,`li`),vN(747,`O campo conter `),Ac(748,`code`),vN(749,`p-required`),ug(),vN(750,`;`),ug(),Ac(751,`li`),vN(752,`Não possuir `),Ac(753,`code`),vN(754,`p-help`),ug(),vN(755,` e/ou `),Ac(756,`code`),vN(757,`p-label`),ug(),vN(758,`.`),ug()()()(),Ac(759,`tr`,16)(760,`td`,17)(761,`div`,25)(762,`span`,26),vN(763,` p-options`),Kc(764,`br`),ug()()(),Ac(765,`td`,21)(766,`code`,29),vN(767,`any[]`),ug()(),Ac(768,`td`,23),vN(769,`-`),ug(),Ac(770,`td`,24)(771,`p`),vN(772,`Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `),Ac(773,`code`),vN(774,`PoSelectOption`),ug(),vN(775,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Ac(776,`code`),vN(777,`PoSelectOptionGroup`),ug(),vN(778,`.`),ug(),Ac(779,`p`),vN(780,`Caso esta lista estiver vazia, o model será `),Ac(781,`code`),vN(782,`undefined`),ug(),vN(783,`.`),ug(),Ac(784,`blockquote`)(785,`p`),vN(786,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),ug()(),Ac(787,`pre`)(788,`code`),vN(789,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),ug()(),Ac(790,`blockquote`)(791,`p`),vN(792,`Para coleção de objetos dentro de grupos distintos será exibido a label e opções somente se a propriedade `),Ac(793,`code`),vN(794,`options`),ug(),vN(795,` possua valores. Sendo assim, a estrutura seguiria dessa forma:`),ug()(),Ac(796,`pre`)(797,`code`),vN(798,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),ug()(),Ac(799,`p`),vN(800,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),ug()()(),Ac(801,`tr`,16)(802,`td`,17)(803,`div`,25)(804,`span`,26),vN(805,` p-placeholder`),Kc(806,`br`),ug()()(),Ac(807,`td`,21)(808,`code`,27),vN(809,`string`),ug()(),Ac(810,`td`,23),vN(811,`-`),ug(),Ac(812,`td`,24)(813,`em`)(814,`strong`),vN(815,`(opcional)`),ug()(),Ac(816,`p`),vN(817,`Mensagem que aparecerá enquanto nenhuma opção estiver selecionada.`),ug()()(),Ac(818,`tr`,16)(819,`td`,17)(820,`div`,25)(821,`span`,26),vN(822,` p-helper`),Kc(823,`br`),ug()()(),Ac(824,`td`,21)(825,`code`,30),vN(826,`PoHelperOptions `),ug(),Ac(827,`code`,27),vN(828,` string`),ug()(),Ac(829,`td`,23),vN(830,`-`),ug(),Ac(831,`td`,24)(832,`em`)(833,`strong`),vN(834,`(opcional)`),ug()(),Ac(835,`p`),vN(836,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(837,`code`),vN(838,`p-label`),ug(),vN(839,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(840,`code`),vN(841,`p-label`),ug(),vN(842,`.`),ug(),Ac(843,`blockquote`)(844,`p`),vN(845,`Para mais informações acesse: `),Ac(846,`a`,31),vN(847,`https://po-ui.io/documentation/po-helper`),ug(),vN(848,`.`),ug()(),Ac(849,`blockquote`)(850,`p`),vN(851,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(852,`code`),vN(853,`p-additional-help-tooltip`),ug(),vN(854,` e `),Ac(855,`code`),vN(856,`p-additional-help`),ug(),vN(857,`) será ignorado.`),ug()()()(),Ac(858,`tr`,16)(859,`td`,17)(860,`div`,25)(861,`span`,26),vN(862,` p-readonly`),Kc(863,`br`),ug()()(),Ac(864,`td`,21)(865,`code`,28),vN(866,`boolean`),ug()(),Ac(867,`td`,23)(868,`p`)(869,`code`),vN(870,`false`),ug()()(),Ac(871,`td`,24)(872,`em`)(873,`strong`),vN(874,`(opcional)`),ug()(),Ac(875,`p`),vN(876,`Indica que o campo será somente para leitura.`),ug()()(),Ac(877,`tr`,16)(878,`td`,17)(879,`div`,25)(880,`span`,26),vN(881,` p-required`),Kc(882,`br`),ug()()(),Ac(883,`td`,21)(884,`code`,28),vN(885,`boolean`),ug()(),Ac(886,`td`,23)(887,`p`)(888,`code`),vN(889,`false`),ug()()(),Ac(890,`td`,24)(891,`em`)(892,`strong`),vN(893,`(opcional)`),ug()(),Ac(894,`p`),vN(895,`Define que o campo será obrigatório.`),ug()()(),Ac(896,`tr`,16)(897,`td`,17)(898,`div`,25)(899,`span`,26),vN(900,` p-show-required`),Kc(901,`br`),ug()()(),Ac(902,`td`,21)(903,`code`,28),vN(904,`boolean`),ug()(),Ac(905,`td`,23),vN(906,`-`),ug(),Ac(907,`td`,24)(908,`p`),vN(909,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(910,`blockquote`)(911,`p`),vN(912,`Não será exibida a indicação se:`),ug()(),Ac(913,`ul`)(914,`li`),vN(915,`Não possuir `),Ac(916,`code`),vN(917,`p-help`),ug(),vN(918,` e/ou `),Ac(919,`code`),vN(920,`p-label`),ug(),vN(921,`.`),ug()()()(),Ac(922,`tr`,16)(923,`td`,17)(924,`div`,25)(925,`span`,26),vN(926,` p-size`),Kc(927,`br`),ug()()(),Ac(928,`td`,21)(929,`code`,27),vN(930,`string`),ug()(),Ac(931,`td`,23)(932,`p`)(933,`code`),vN(934,`medium`),ug()()(),Ac(935,`td`,24)(936,`em`)(937,`strong`),vN(938,`(opcional)`),ug()(),Ac(939,`p`),vN(940,`Define o tamanho do componente:`),ug(),Ac(941,`ul`)(942,`li`)(943,`code`),vN(944,`small`),ug(),vN(945,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(946,`li`)(947,`code`),vN(948,`medium`),ug(),vN(949,`: altura do input como 44px.`),ug()(),Ac(950,`blockquote`)(951,`p`),vN(952,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(953,`code`),vN(954,`medium`),ug(),vN(955,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(956,`a`,32),vN(957,`po-theme`),ug(),vN(958,`.`),ug()()()()(),Ac(959,`h3`,12),vN(960,`Métodos`),ug(),Ac(961,`table`,33)(962,`tr`,16)(963,`th`,34)(964,`div`,25)(965,`h4`)(966,`span`,26),vN(967,` focus `),ug()()()()(),Ac(968,`tr`,24)(969,`td`,24)(970,`p`),vN(971,`Função que atribui foco ao componente.`),ug(),Ac(972,`p`),vN(973,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(974,`pre`)(975,`code`),vN(976,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),ug()()()()(),Kc(977,`br`),Ac(978,`table`,33)(979,`tr`,16)(980,`th`,34)(981,`div`,25)(982,`h4`)(983,`span`,26),vN(984,` showAdditionalHelp `),ug()()()()(),Ac(985,`tr`,24)(986,`td`,24)(987,`p`),vN(988,`Método que exibe `),Ac(989,`code`),vN(990,`p-helper`),ug(),vN(991,` ou executa a ação definida em `),Ac(992,`code`),vN(993,`p-helper{eventOnClick}`),ug(),vN(994,` ou em `),Ac(995,`code`),vN(996,`p-additionalHelp`),ug(),vN(997,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(998,`code`),vN(999,`p-keydown`),ug(),vN(1e3,`.`),ug(),Ac(1001,`blockquote`)(1002,`p`),vN(1003,`Exibe ou oculta o conteúdo do componente `),Ac(1004,`code`),vN(1005,`po-helper`),ug(),vN(1006,` quando o componente estiver com foco.`),ug()(),Ac(1007,`pre`)(1008,`code`),vN(1009,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),ug()(),Ac(1010,`pre`)(1011,`code`,35),vN(1012,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1013,`br`),Ac(1014,`h3`),vN(1015,`Interfaces`),ug(),Ac(1016,`h4`,36)(1017,`code`,5),vN(1018,`PoSelectOptionGroup`),ug()(),Ac(1019,`div`,2)(1020,`p`),vN(1021,`Interface da coleções de itens em grupo, utilizando uma label para o grupo e as opções do tipo `),Ac(1022,`code`),vN(1023,`PoSelectOption`),ug(),vN(1024,`.`),ug()(),Ac(1025,`h4`,12),vN(1026,`Propriedades`),ug(),Ac(1027,`table`,13)(1028,`tr`,14)(1029,`th`,15),vN(1030,`Nome`),ug(),Ac(1031,`th`,15),vN(1032,`Tipo`),ug(),Ac(1033,`th`,15),vN(1034,`Descrição`),ug()(),Ac(1035,`tr`,16)(1036,`td`,17)(1037,`div`,25)(1038,`span`,26),vN(1039,` label`),Kc(1040,`br`),ug()()(),Ac(1041,`td`,21)(1042,`code`,27),vN(1043,`string`),ug()(),Ac(1044,`td`,24)(1045,`p`),vN(1046,`Label para denominar o nome do grupo.`),ug()()(),Ac(1047,`tr`,16)(1048,`td`,17)(1049,`div`,25)(1050,`span`,26),vN(1051,` options`),Kc(1052,`br`),ug()()(),Ac(1053,`td`,21)(1054,`code`,37),vN(1055,`Array<PoSelectOption>`),ug()(),Ac(1056,`td`,24)(1057,`p`),vN(1058,`Lista com as opções disponíveis em cada grupo.`),ug()()()(),Ac(1059,`h4`,36)(1060,`code`,5),vN(1061,`PoSelectOption`),ug()(),Ac(1062,`div`,2)(1063,`p`),vN(1064,`Interface da coleções de itens que deve ser informado no componente po-select`),ug()(),Ac(1065,`h4`,12),vN(1066,`Propriedades`),ug(),Ac(1067,`table`,13)(1068,`tr`,14)(1069,`th`,15),vN(1070,`Nome`),ug(),Ac(1071,`th`,15),vN(1072,`Tipo`),ug(),Ac(1073,`th`,15),vN(1074,`Descrição`),ug()(),Ac(1075,`tr`,16)(1076,`td`,17)(1077,`div`,25)(1078,`span`,26),vN(1079,` label`),Kc(1080,`br`),ug()()(),Ac(1081,`td`,21)(1082,`code`,27),vN(1083,`string`),ug()(),Ac(1084,`td`,24)(1085,`p`),vN(1086,`Label a ser utilizada nos itens da lista.`),ug()()(),Ac(1087,`tr`,16)(1088,`td`,17)(1089,`div`,25)(1090,`span`,26),vN(1091,` value`),Kc(1092,`br`),ug()()(),Ac(1093,`td`,21)(1094,`code`,27),vN(1095,`string `),ug(),Ac(1096,`code`,38),vN(1097,` number`),ug()(),Ac(1098,`td`,24)(1099,`p`),vN(1100,`Valor do objeto que será atribuído ao model.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Select`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,i){p&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-select-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-select-basic-view`)(6,`sample-po-select-labs-view`)(7,`sample-po-select-customer-registration-view`)(8,`sample-po-select-companies-view`),ug()()()),p&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,he,Ce,ye,Pe,we],encapsulation:2,changeDetection:1})}return a})()}];var Me=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[kL.forChild(Je),kL]})}return a})();var Dt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[Ta,Me]})}return a})();export{Dt as DocPoSelectModule};