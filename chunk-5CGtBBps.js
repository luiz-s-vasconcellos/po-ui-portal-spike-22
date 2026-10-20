import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,O as E5,Pi as mt,Qr as Z,Ri as nu,Rt as _oe,Si as iu,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var de=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-url-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`url`,`p-label`,`PO Url`]],template:function(l,i){l&1&&nu(0,`po-url`,0)},dependencies:[E5],encapsulation:2,changeDetection:1})}return a})();var ge=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-url-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Url Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-url-basic/sample-po-url-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-url name="url" p-label="PO Url"> </po-url>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-url-basic/sample-po-url-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-url-basic',
  templateUrl: './sample-po-url-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUrlBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-url-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ge,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{helperText;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;url;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`showRequired`,label:`Show Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`required`,label:`Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern=``,this.placeholder=``,this.minlength=void 0,this.maxlength=void 0,this.size=`medium`,this.url=``,this.event=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-url-labs`]],standalone:!1,decls:19,vars:34,consts:[[`f`,`ngForm`],[`name`,`url`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let p=Sx();jc(0,`po-url`,1),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.url,r)||(i.url=r),v_(r)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.label,r)||(i.label=r),v_(r)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.help,r)||(i.help=r),v_(r)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.helperText,r)||(i.helperText=r),v_(r)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.placeholder,r)||(i.placeholder=r),v_(r)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.errorPattern,r)||(i.errorPattern=r),v_(r)}),wg(),jc(13,`po-number`,10),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.minlength,r)||(i.minlength=r),v_(r)}),wg(),jc(14,`po-number`,11),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.maxlength,r)||(i.maxlength=r),v_(r)}),wg(),jc(15,`po-checkbox-group`,12),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.properties,r)||(i.properties=r),v_(r)}),wg(),jc(16,`po-radio-group`,13),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.size,r)||(i.size=r),v_(r)}),wg(),jc(17,`div`,2)(18,`po-button`,14),mt(`p-click`,function(){return i.restore()}),wg()()()}l&2&&(ib(`ngModel`,i.url),jE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),t0(),rg(3),jE(`p-value`,i.url),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.errorPattern),t0(),rg(),ib(`ngModel`,i.minlength),t0(),rg(),ib(`ngModel`,i.maxlength),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,E5,_oe],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-url-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Url Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-url-labs/sample-po-url-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-url
  name="url"
  [(ngModel)]="url"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
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
</po-url>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="url"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-url-labs/sample-po-url-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-labs',
  templateUrl: './sample-po-url-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUrlLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  url: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'required', label: 'Required' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;
    this.size = 'medium';
    this.url = '';
    this.event = '';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-url-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ye,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return a})();var Pe=[`boxUrl`];var ue=(()=>{class a{poNotification=p(zu);boxUrlElement;baseUrls=[];shortenedUrl;url;urlColumns=[{property:`url`,label:`Long URL`},{property:`short`,label:`Shortened URL`}];copyToClipboard(){this.boxUrlElement.nativeElement.querySelector(`input`).select(),document.execCommand(`copy`),this.poNotification.success(`Text copied!`)}shortenUrl(){let m=btoa(this.url.replace(/http|www|com|br|\/|\./gi,``).trim());this.shortenedUrl=`po.com/${m.substr(m.length-3)}`+this.baseUrls.length,this.baseUrls.push({url:this.url,short:this.shortenedUrl})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-url-shortener`]],viewQuery:function(l,i){if(l&1&&iu(Pe,7,Z),l&2){let p;vo(p=_o())&&(i.boxUrlElement=p.first)}},standalone:!1,decls:11,vars:7,consts:[[`f`,`ngForm`],[`boxUrl`,``],[1,`po-row`],[`name`,`url`,`p-label`,`Type your URL to be shortened`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortenedUrl`,`p-label`,`URL shortened`,`p-readonly`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Shorten URL`,`p-kind`,`primary`,1,`po-lg-2`,3,`p-click`,`p-disabled`],[`p-icon`,`an an-copy`,`p-label`,`Copy`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-lg-2`,3,`click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(l,i){if(l&1){let p=Sx();jc(0,`form`,null,0)(2,`div`,2)(3,`po-url`,3),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.url,r)||(i.url=r),v_(r)}),wg(),jc(4,`po-input`,4,1),JN(),ob(`ngModelChange`,function(r){return y_(p),sO(i.shortenedUrl,r)||(i.shortenedUrl=r),v_(r)}),wg()(),jc(6,`div`,2)(7,`po-button`,5),mt(`p-click`,function(){return i.shortenUrl()}),wg(),jc(8,`po-button`,6),mt(`click`,function(){return i.copyToClipboard()}),wg()()(),nu(9,`po-divider`)(10,`po-table`,7)}if(l&2){let p=Fx(1);rg(3),ib(`ngModel`,i.url),t0(),rg(),ib(`ngModel`,i.shortenedUrl),t0(),rg(3),jE(`p-disabled`,p.invalid),rg(),jE(`p-disabled`,!i.shortenedUrl),rg(2),jE(`p-columns`,i.urlColumns)(`p-items`,i.baseUrls)(`p-hide-table-search`,!1)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,E5,I5],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-url-shortener-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Url - Shortener`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-url-shortener/sample-po-url-shortener.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #f="ngForm">
  <div class="po-row">
    <po-url class="po-lg-6" name="url" [(ngModel)]="url" p-label="Type your URL to be shortened" p-required> </po-url>

    <po-input #boxUrl class="po-lg-6" name="shortenedUrl" [(ngModel)]="shortenedUrl" p-label="URL shortened" p-readonly>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2" p-label="Shorten URL" p-kind="primary" [p-disabled]="f.invalid" (p-click)="shortenUrl()">
    </po-button>

    <po-button
      class="po-offset-lg-4 po-offset-xl-4 po-lg-2"
      p-icon="an an-copy"
      p-label="Copy"
      [p-disabled]="!shortenedUrl"
      (click)="copyToClipboard()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<po-table p-striped="true" [p-columns]="urlColumns" [p-items]="baseUrls" [p-hide-table-search]="false"> </po-table>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-url-shortener/sample-po-url-shortener.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-shortener',
  templateUrl: './sample-po-url-shortener.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUrlShortenerComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('boxUrl', { read: ElementRef, static: true }) boxUrlElement;

  baseUrls: Array<any> = [];
  shortenedUrl: string;
  url: string;

  public readonly urlColumns: Array<PoTableColumn> = [
    { property: 'url', label: 'Long URL' },
    { property: 'short', label: 'Shortened URL' }
  ];

  copyToClipboard() {
    this.boxUrlElement.nativeElement.querySelector('input').select();
    document.execCommand('copy');
    this.poNotification.success('Text copied!');
  }

  shortenUrl() {
    const urlBase64 = btoa(this.url.replace(/http|www|com|br|\\/|\\./gi, '').trim());

    this.shortenedUrl = \`po.com/\${urlBase64.substr(urlBase64.length - 3)}\` + this.baseUrls.length;
    this.baseUrls.push({ url: this.url, short: this.shortenedUrl });
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-url-shortener`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Me,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-url-doc`]],standalone:!1,decls:1357,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoUrlComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),wg(),jc(24,`p`),iO(25,`Importante:`),wg(),jc(26,`ul`)(27,`li`),iO(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),wg()(),jc(29,`h4`),iO(30,`Tokens customizáveis`),wg(),jc(31,`p`),iO(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(33,`br`),iO(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(35,`code`),iO(36,`.po-input`),wg()(),jc(37,`blockquote`)(38,`p`),iO(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),jc(40,`a`,6),iO(41,`Grid System`),wg(),iO(42,`.`),wg()(),jc(43,`blockquote`)(44,`p`),iO(45,`Para maiores informações, acesse o guia `),jc(46,`a`,7),iO(47,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(48,`.`),wg()(),jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),iO(53,`Propriedade`),wg(),jc(54,`th`),iO(55,`Descrição`),wg(),jc(56,`th`),iO(57,`Valor Padrão`),wg()()(),jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),iO(62,`Default Values`),wg()(),nu(63,`td`)(64,`td`),wg(),jc(65,`tr`)(66,`td`)(67,`code`),iO(68,`--font-family`),wg()(),jc(69,`td`),iO(70,`Família tipográfica usada`),wg(),jc(71,`td`)(72,`code`),iO(73,`var(--font-family-theme)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),iO(77,`--font-size`),wg()(),jc(78,`td`),iO(79,`Tamanho da fonte`),wg(),jc(80,`td`)(81,`code`),iO(82,`var(--font-size-default)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),iO(86,`--text-color-placeholder`),wg()(),jc(87,`td`),iO(88,`Cor do texto placeholder`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--color-neutral-light-30)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--color`),wg()(),jc(96,`td`),iO(97,`Cor pincipal do input`),wg(),jc(98,`td`)(99,`code`),iO(100,`var(--color-neutral-dark-70)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--background`),wg()(),jc(105,`td`),iO(106,`Cor de background`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--color-neutral-light-05)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),iO(113,`--padding`),wg()(),jc(114,`td`),iO(115,`Preenchimento`),wg(),jc(116,`td`)(117,`code`),iO(118,`0 0.5rem`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),iO(122,`--text-color`),wg()(),jc(123,`td`),iO(124,`Cor do texto`),wg(),jc(125,`td`)(126,`code`),iO(127,`var(--color-neutral-dark-90)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),iO(131,`--field-container-title-justify`),wg()(),jc(132,`td`),iO(133,`Alinhamento horizontal do título (`),jc(134,`code`),iO(135,`justify-content`),wg(),iO(136,`)`),wg(),jc(137,`td`)(138,`code`),iO(139,`space-between`),wg()()(),jc(140,`tr`)(141,`td`)(142,`code`),iO(143,`--field-container-title-flex`),wg()(),jc(144,`td`),iO(145,`Flex do título (`),jc(146,`code`),iO(147,`flex`),wg(),iO(148,`)`),wg(),jc(149,`td`)(150,`code`),iO(151,`1 auto`),wg()()(),jc(152,`tr`)(153,`td`)(154,`strong`),iO(155,`Hover`),wg()(),nu(156,`td`)(157,`td`),wg(),jc(158,`tr`)(159,`td`)(160,`code`),iO(161,`--color-hover`),wg()(),jc(162,`td`),iO(163,`Cor principal no estado hover`),wg(),jc(164,`td`)(165,`code`),iO(166,`var(--color-brand-01-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),iO(170,`--background-hover`),wg()(),jc(171,`td`),iO(172,`Cor de background no estado hover`),wg(),jc(173,`td`)(174,`code`),iO(175,`var(--color-brand-01-lightest)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`strong`),iO(179,`Focused`),wg()(),nu(180,`td`)(181,`td`),wg(),jc(182,`tr`)(183,`td`)(184,`code`),iO(185,`--color-focused`),wg()(),jc(186,`td`),iO(187,`Cor principal no estado de focus`),wg(),jc(188,`td`)(189,`code`),iO(190,`var(--color-action-default)`),wg()()(),jc(191,`tr`)(192,`td`)(193,`code`),iO(194,`--outline-color-focused`),wg()(),jc(195,`td`),iO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),iO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),iO(203,`Disabled`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),iO(209,`--color-disabled`),wg()(),jc(210,`td`),iO(211,`Cor principal no estado disabled`),wg(),jc(212,`td`)(213,`code`),iO(214,`var(--color-neutral-light-30)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),iO(218,`--background-disabled`),wg()(),jc(219,`td`),iO(220,`Cor de background no estado disabled`),wg(),jc(221,`td`)(222,`code`),iO(223,`var(--color-neutral-light-20)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`code`),iO(227,`--text-color-disabled`),wg()(),jc(228,`td`),iO(229,`Cor do texto no estado disabled`),wg(),jc(230,`td`)(231,`code`),iO(232,`var(--color-neutral-dark-70)`),wg()()()()(),jc(233,`p`),nu(234,`br`),iO(235,` O `),jc(236,`code`),iO(237,`po-url`),wg(),iO(238,` é um input específico para receber URL, com o pattern já configurado.`),wg()(),jc(239,`div`,8)(240,`h4`,9),iO(241,`Seletor`),wg(),jc(242,`pre`,10),iO(243,`<po-url
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-upper-case="boolean" >
</po-url>
`),wg()(),jc(244,`h4`,11),iO(245,`Propriedades`),wg(),jc(246,`table`,12)(247,`tr`,13)(248,`th`,14),iO(249,`Nome`),wg(),jc(250,`th`,14),iO(251,`Tipo`),wg(),jc(252,`th`,14),iO(253,`Padrão`),wg(),jc(254,`th`,14),iO(255,`Descrição`),wg()(),jc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),iO(260,` (p-additional-help)`),nu(261,`br`),wg()(),jc(262,`div`,19),iO(263,`Deprecated`),wg()(),jc(264,`td`,20)(265,`code`,21),iO(266,`EventEmitter`),wg()(),jc(267,`td`,22),iO(268,`-`),wg(),jc(269,`td`,23)(270,`em`)(271,`strong`),iO(272,`(opcional)`),wg()(),jc(273,`p`),iO(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(275,`blockquote`)(276,`p`),iO(277,`Essa propriedade está `),jc(278,`strong`),iO(279,`depreciada`),wg(),iO(280,` e será removida na versão `),jc(281,`code`),iO(282,`23.x.x`),wg(),iO(283,`. Recomendamos utilizar a propriedade `),jc(284,`code`),iO(285,`p-helper`),wg(),iO(286,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(287,`tr`,15)(288,`td`,16)(289,`div`,24)(290,`span`,25),iO(291,` p-additional-help-tooltip`),nu(292,`br`),wg()(),jc(293,`div`,19),iO(294,`Deprecated`),wg()(),jc(295,`td`,20)(296,`code`,26),iO(297,`string`),wg()(),jc(298,`td`,22),iO(299,`-`),wg(),jc(300,`td`,23)(301,`em`)(302,`strong`),iO(303,`(opcional)`),wg()(),jc(304,`p`),iO(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(306,`code`),iO(307,`po-helper`),wg(),iO(308,`.
`),jc(309,`strong`),iO(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(311,`blockquote`)(312,`p`),iO(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(314,`blockquote`)(315,`p`),iO(316,`Essa propriedade está `),jc(317,`strong`),iO(318,`depreciada`),wg(),iO(319,` e será removida na versão `),jc(320,`code`),iO(321,`23.x.x`),wg(),iO(322,`. Recomendamos utilizar a propriedade `),jc(323,`code`),iO(324,`p-helper`),wg(),iO(325,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(326,`tr`,15)(327,`td`,16)(328,`div`,24)(329,`span`,25),iO(330,` p-append-in-body`),nu(331,`br`),wg()()(),jc(332,`td`,20)(333,`code`,27),iO(334,`boolean`),wg()(),jc(335,`td`,22)(336,`p`)(337,`code`),iO(338,`false`),wg()()(),jc(339,`td`,23)(340,`em`)(341,`strong`),iO(342,`(opcional)`),wg()(),jc(343,`p`),iO(344,`Define que o popover (`),jc(345,`code`),iO(346,`p-helper`),wg(),iO(347,` e/ou `),jc(348,`code`),iO(349,`p-error-limit`),wg(),iO(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(351,`blockquote`)(352,`p`),iO(353,`Quando utilizado com `),jc(354,`code`),iO(355,`p-helper`),wg(),iO(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(357,`tr`,15)(358,`td`,16)(359,`div`,24)(360,`span`,25),iO(361,` p-auto-focus`),nu(362,`br`),wg()()(),jc(363,`td`,20)(364,`code`,27),iO(365,`boolean`),wg()(),jc(366,`td`,22)(367,`p`)(368,`code`),iO(369,`false`),wg()()(),jc(370,`td`,23)(371,`em`)(372,`strong`),iO(373,`(opcional)`),wg()(),jc(374,`p`),iO(375,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(376,`blockquote`)(377,`p`),iO(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),iO(383,` (p-blur)`),nu(384,`br`),wg()()(),jc(385,`td`,20)(386,`code`,21),iO(387,`EventEmitter`),wg()(),jc(388,`td`,22),iO(389,`-`),wg(),jc(390,`td`,23)(391,`em`)(392,`strong`),iO(393,`(opcional)`),wg()(),jc(394,`p`),iO(395,`Evento disparado ao sair do campo.`),wg()()(),jc(396,`tr`,15)(397,`td`,16)(398,`div`,17)(399,`span`,18),iO(400,` (p-change)`),nu(401,`br`),wg()()(),jc(402,`td`,20)(403,`code`,21),iO(404,`EventEmitter`),wg()(),jc(405,`td`,22),iO(406,`-`),wg(),jc(407,`td`,23)(408,`em`)(409,`strong`),iO(410,`(opcional)`),wg()(),jc(411,`p`),iO(412,`Evento disparado ao alterar valor e deixar o campo.`),wg()()(),jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),iO(417,` (p-change-model)`),nu(418,`br`),wg()()(),jc(419,`td`,20)(420,`code`,21),iO(421,`EventEmitter`),wg()(),jc(422,`td`,22),iO(423,`-`),wg(),jc(424,`td`,23)(425,`em`)(426,`strong`),iO(427,`(opcional)`),wg()(),jc(428,`p`),iO(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(430,`code`),iO(431,`setValue`),wg(),iO(432,`, `),jc(433,`code`),iO(434,`patchValue`),wg(),iO(435,`, carregamento assíncrono).`),wg(),jc(436,`p`),iO(437,`Diferentemente do `),jc(438,`code`),iO(439,`p-change`),wg(),iO(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(441,`code`),iO(442,`p-change-model`),wg(),iO(443,` cobre todos os cenários de alteração de valor.`),wg(),jc(444,`p`),iO(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(446,`tr`,15)(447,`td`,16)(448,`div`,24)(449,`span`,25),iO(450,`p-clean`),nu(451,`br`),wg()()(),jc(452,`td`,20)(453,`code`,27),iO(454,`boolean`),wg()(),jc(455,`td`,22),iO(456,`-`),wg(),jc(457,`td`,23)(458,`em`)(459,`strong`),iO(460,`(opcional)`),wg()(),jc(461,`p`),iO(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg()()(),jc(463,`tr`,15)(464,`td`,16)(465,`div`,24)(466,`span`,25),iO(467,` p-compact-label`),nu(468,`br`),wg()()(),jc(469,`td`,20)(470,`code`,27),iO(471,`boolean`),wg()(),jc(472,`td`,22)(473,`p`)(474,`code`),iO(475,`false`),wg()()(),jc(476,`td`,23)(477,`em`)(478,`strong`),iO(479,`(opcional)`),wg()(),jc(480,`p`),iO(481,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(482,`p`),iO(483,`Quando habilitado (`),jc(484,`code`),iO(485,`true`),wg(),iO(486,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(487,`ul`)(488,`li`)(489,`code`),iO(490,`po-label`),wg()(),jc(491,`li`)(492,`code`),iO(493,`p-requirement (showRequired)`),wg()(),jc(494,`li`)(495,`code`),iO(496,`po-helper`),wg()()(),jc(497,`p`),iO(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(499,`p`),iO(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(501,`ul`)(502,`li`)(503,`code`),iO(504,`--field-container-title-justify`),wg()(),jc(505,`li`)(506,`code`),iO(507,`--field-container-title-flex`),wg()()(),jc(508,`p`),iO(509,`Exemplo:`),wg(),jc(510,`pre`)(511,`code`),iO(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(513,`p`),iO(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(515,`tr`,15)(516,`td`,16)(517,`div`,24)(518,`span`,25),iO(519,`p-disabled`),nu(520,`br`),wg()()(),jc(521,`td`,20)(522,`code`,27),iO(523,`boolean`),wg()(),jc(524,`td`,22)(525,`p`)(526,`code`),iO(527,`false`),wg()()(),jc(528,`td`,23)(529,`em`)(530,`strong`),iO(531,`(opcional)`),wg()(),jc(532,`p`),iO(533,`Se verdadeiro, desabilita o campo.`),wg()()(),jc(534,`tr`,15)(535,`td`,16)(536,`div`,24)(537,`span`,25),iO(538,` p-emit-all-changes`),nu(539,`br`),wg()()(),jc(540,`td`,20)(541,`code`,27),iO(542,`boolean`),wg()(),jc(543,`td`,22)(544,`p`)(545,`code`),iO(546,`false`),wg()()(),jc(547,`td`,23)(548,`em`)(549,`strong`),iO(550,`(opcional)`),wg()(),jc(551,`p`),iO(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),wg()()(),jc(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),iO(557,` (p-enter)`),nu(558,`br`),wg()()(),jc(559,`td`,20)(560,`code`,21),iO(561,`EventEmitter`),wg()(),jc(562,`td`,22),iO(563,`-`),wg(),jc(564,`td`,23)(565,`em`)(566,`strong`),iO(567,`(opcional)`),wg()(),jc(568,`p`),iO(569,`Evento disparado ao entrar do campo.`),wg()()(),jc(570,`tr`,15)(571,`td`,16)(572,`div`,24)(573,`span`,25),iO(574,` p-error-async-properties`),nu(575,`br`),wg()()(),jc(576,`td`,20)(577,`code`,28),iO(578,`ErrorAsyncProperties`),wg()(),jc(579,`td`,22),iO(580,`-`),wg(),jc(581,`td`,23)(582,`em`)(583,`strong`),iO(584,`(opcional)`),wg()(),jc(585,`p`),iO(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),jc(587,`code`),iO(588,`Reactive Forms`),wg(),iO(589,`. Em formulários reativos, pode-se utilizar o próprio `),jc(590,`code`),iO(591,`asyncValidators`),wg(),iO(592,`.`),wg()()(),jc(593,`tr`,15)(594,`td`,16)(595,`div`,24)(596,`span`,25),iO(597,` p-error-limit`),nu(598,`br`),wg()()(),jc(599,`td`,20)(600,`code`,27),iO(601,`boolean`),wg()(),jc(602,`td`,22)(603,`p`)(604,`code`),iO(605,`false`),wg()()(),jc(606,`td`,23)(607,`em`)(608,`strong`),iO(609,`(opcional)`),wg()(),jc(610,`p`),iO(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(612,`blockquote`)(613,`p`),iO(614,`Caso essa propriedade seja definida como `),jc(615,`code`),iO(616,`true`),wg(),iO(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),iO(622,` p-error-pattern`),nu(623,`br`),wg()()(),jc(624,`td`,20)(625,`code`,26),iO(626,`string`),wg()(),jc(627,`td`,22),iO(628,`-`),wg(),jc(629,`td`,23)(630,`em`)(631,`strong`),iO(632,`(opcional)`),wg()(),jc(633,`p`),iO(634,`Mensagem que será apresentada quando o `),jc(635,`code`),iO(636,`pattern`),wg(),iO(637,` ou a máscara não for satisfeita.`),wg(),jc(638,`blockquote`)(639,`p`),iO(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),jc(641,`code`),iO(642,`p-required-field-error-message`),wg(),iO(643,` em conjunto.`),wg()()()(),jc(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),iO(648,` p-help`),nu(649,`br`),wg()()(),jc(650,`td`,20)(651,`code`,26),iO(652,`string`),wg()(),jc(653,`td`,22),iO(654,`-`),wg(),jc(655,`td`,23)(656,`em`)(657,`strong`),iO(658,`(opcional)`),wg()(),jc(659,`p`),iO(660,`Texto de apoio do campo.`),wg()()(),jc(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),iO(665,` p-icon`),nu(666,`br`),wg()()(),jc(667,`td`,20)(668,`code`,26),iO(669,`string `),wg(),jc(670,`code`,29),iO(671,` TemplateRef<void>`),wg()(),jc(672,`td`,22),iO(673,`-`),wg(),jc(674,`td`,23)(675,`em`)(676,`strong`),iO(677,`(opcional)`),wg()(),jc(678,`p`),iO(679,`Define o ícone que será exibido no início do campo.`),wg(),jc(680,`p`),iO(681,`É possível usar qualquer um dos ícones da `),jc(682,`a`,30),iO(683,`Biblioteca de ícones`),wg(),iO(684,`. conforme exemplo abaixo:`),wg(),jc(685,`pre`)(686,`code`),iO(687,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),wg()(),jc(688,`p`),iO(689,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(690,`em`),iO(691,`Font Awesome`),wg(),iO(692,`, da seguinte forma:`),wg(),jc(693,`pre`)(694,`code`),iO(695,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),wg()(),jc(696,`p`),iO(697,`Outra opção seria a customização do ícone através do `),jc(698,`code`),iO(699,`TemplateRef`),wg(),iO(700,`, conforme exemplo abaixo:`),wg(),jc(701,`pre`)(702,`code`),iO(703,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(704,`blockquote`)(705,`p`),iO(706,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(707,`code`),iO(708,`font-size: inherit`),wg(),iO(709,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(710,`tr`,15)(711,`td`,16)(712,`div`,17)(713,`span`,18),iO(714,` (p-keydown)`),nu(715,`br`),wg()()(),jc(716,`td`,20)(717,`code`,21),iO(718,`EventEmitter`),wg()(),jc(719,`td`,22),iO(720,`-`),wg(),jc(721,`td`,23)(722,`em`)(723,`strong`),iO(724,`(opcional)`),wg()(),jc(725,`p`),iO(726,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(727,`code`),iO(728,`KeyboardEvent`),wg(),iO(729,` com informações sobre a tecla.`),wg()()(),jc(730,`tr`,15)(731,`td`,16)(732,`div`,24)(733,`span`,25),iO(734,` p-label`),nu(735,`br`),wg()()(),jc(736,`td`,20)(737,`code`,26),iO(738,`string`),wg()(),jc(739,`td`,22),iO(740,`-`),wg(),jc(741,`td`,23)(742,`em`)(743,`strong`),iO(744,`(opcional)`),wg()(),jc(745,`p`),iO(746,`Rótulo do campo.`),wg()()(),jc(747,`tr`,15)(748,`td`,16)(749,`div`,24)(750,`span`,25),iO(751,` p-label-text-wrap`),nu(752,`br`),wg()()(),jc(753,`td`,20)(754,`code`,27),iO(755,`boolean`),wg()(),jc(756,`td`,22)(757,`p`)(758,`code`),iO(759,`false`),wg()()(),jc(760,`td`,23)(761,`em`)(762,`strong`),iO(763,`(opcional)`),wg()(),jc(764,`p`),iO(765,`Habilita a quebra automática do texto da propriedade `),jc(766,`code`),iO(767,`p-label`),wg(),iO(768,`. Quando `),jc(769,`code`),iO(770,`p-label-text-wrap`),wg(),iO(771,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),iO(776,` p-loading`),nu(777,`br`),wg()()(),jc(778,`td`,20)(779,`code`,27),iO(780,`boolean`),wg()(),jc(781,`td`,22)(782,`p`)(783,`code`),iO(784,`false`),wg()()(),jc(785,`td`,23)(786,`em`)(787,`strong`),iO(788,`(opcional)`),wg()(),jc(789,`p`),iO(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),iO(795,`p-mask`),nu(796,`br`),wg()()(),jc(797,`td`,20)(798,`code`,26),iO(799,`string`),wg()(),jc(800,`td`,22),iO(801,`-`),wg(),jc(802,`td`,23)(803,`em`)(804,`strong`),iO(805,`(opcional)`),wg()(),jc(806,`p`),iO(807,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),wg()()(),jc(808,`tr`,15)(809,`td`,16)(810,`div`,24)(811,`span`,25),iO(812,`p-mask-format-model`),nu(813,`br`),wg()()(),jc(814,`td`,20)(815,`code`,27),iO(816,`boolean`),wg()(),jc(817,`td`,22)(818,`p`)(819,`code`),iO(820,`false`),wg()()(),jc(821,`td`,23)(822,`em`)(823,`strong`),iO(824,`(opcional)`),wg()(),jc(825,`p`),iO(826,`Indica se o `),jc(827,`code`),iO(828,`model`),wg(),iO(829,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),wg()()(),jc(830,`tr`,15)(831,`td`,16)(832,`div`,24)(833,`span`,25),iO(834,` p-mask-no-length-validation`),nu(835,`br`),wg()()(),jc(836,`td`,20)(837,`code`,27),iO(838,`boolean`),wg()(),jc(839,`td`,22)(840,`p`)(841,`code`),iO(842,`false`),wg()()(),jc(843,`td`,23)(844,`p`),iO(845,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(846,`code`),iO(847,`minLength`),wg(),iO(848,`) e máximo (`),jc(849,`code`),iO(850,`maxLength`),wg(),iO(851,`) quando há uma máscara (`),jc(852,`code`),iO(853,`p-mask`),wg(),iO(854,`) definida.`),wg(),jc(855,`ul`)(856,`li`),iO(857,`Quando `),jc(858,`code`),iO(859,`true`),wg(),iO(860,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(861,`li`),iO(862,`Quando `),jc(863,`code`),iO(864,`false`),wg(),iO(865,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(866,`blockquote`)(867,`p`),iO(868,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(869,`code`),iO(870,`p-mask-format-model`),wg(),iO(871,`.`),wg()(),jc(872,`p`),iO(873,`Exemplo:`),wg(),jc(874,`pre`)(875,`code`),iO(876,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),wg()(),jc(877,`ul`)(878,`li`),iO(879,`Entrada: `),jc(880,`code`),iO(881,`123-456`),wg(),iO(882,` → Validação será aplicada somente aos números, ignorando o caractere especial `),jc(883,`code`),iO(884,`-`),wg(),iO(885,`.`),wg()()()(),jc(886,`tr`,15)(887,`td`,16)(888,`div`,24)(889,`span`,25),iO(890,` p-maxlength`),nu(891,`br`),wg()()(),jc(892,`td`,20)(893,`code`,31),iO(894,`number`),wg()(),jc(895,`td`,22),iO(896,`-`),wg(),jc(897,`td`,23)(898,`em`)(899,`strong`),iO(900,`(opcional)`),wg()(),jc(901,`p`),iO(902,`Indica a quantidade máxima de caracteres que o campo aceita.`),wg()()(),jc(903,`tr`,15)(904,`td`,16)(905,`div`,24)(906,`span`,25),iO(907,` p-minlength`),nu(908,`br`),wg()()(),jc(909,`td`,20)(910,`code`,31),iO(911,`number`),wg()(),jc(912,`td`,22),iO(913,`-`),wg(),jc(914,`td`,23)(915,`em`)(916,`strong`),iO(917,`(opcional)`),wg()(),jc(918,`p`),iO(919,`Indica a quantidade mínima de caracteres que o campo aceita.`),wg()()(),jc(920,`tr`,15)(921,`td`,16)(922,`div`,24)(923,`span`,25),iO(924,` name`),nu(925,`br`),wg()()(),jc(926,`td`,20)(927,`code`,26),iO(928,`string`),wg()(),jc(929,`td`,22),iO(930,`-`),wg(),jc(931,`td`,23)(932,`p`),iO(933,`Nome e identificador do campo.`),wg()()(),jc(934,`tr`,15)(935,`td`,16)(936,`div`,24)(937,`span`,25),iO(938,` p-no-autocomplete`),nu(939,`br`),wg()()(),jc(940,`td`,20)(941,`code`,27),iO(942,`boolean`),wg()(),jc(943,`td`,22)(944,`p`)(945,`code`),iO(946,`false`),wg()()(),jc(947,`td`,23)(948,`em`)(949,`strong`),iO(950,`(opcional)`),wg()(),jc(951,`p`),iO(952,`Define a propriedade nativa `),jc(953,`code`),iO(954,`autocomplete`),wg(),iO(955,` do campo como `),jc(956,`code`),iO(957,`off`),wg(),iO(958,`.`),wg(),jc(959,`blockquote`)(960,`p`),iO(961,`No componente `),jc(962,`code`),iO(963,`po-password`),wg(),iO(964,` será definido como `),jc(965,`code`),iO(966,`new-password`),wg(),iO(967,`.`),wg()(),jc(968,`p`),iO(969,`Nos componentes `),jc(970,`code`),iO(971,`po-password`),wg(),iO(972,` e `),jc(973,`code`),iO(974,`po-login`),wg(),iO(975,` o valor padrão será `),jc(976,`code`),iO(977,`true`),wg(),iO(978,`.`),wg()()(),jc(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),iO(983,` p-optional`),nu(984,`br`),wg()()(),jc(985,`td`,20)(986,`code`,27),iO(987,`boolean`),wg()(),jc(988,`td`,22)(989,`p`)(990,`code`),iO(991,`false`),wg()()(),jc(992,`td`,23)(993,`em`)(994,`strong`),iO(995,`(opcional)`),wg()(),jc(996,`p`),iO(997,`Define se a indicação de campo opcional será exibida.`),wg(),jc(998,`blockquote`)(999,`p`),iO(1e3,`Não será exibida a indicação se:`),wg()(),jc(1001,`ul`)(1002,`li`),iO(1003,`O campo conter `),jc(1004,`code`),iO(1005,`p-required`),wg(),iO(1006,`;`),wg(),jc(1007,`li`),iO(1008,`Não possuir `),jc(1009,`code`),iO(1010,`p-help`),wg(),iO(1011,` e/ou `),jc(1012,`code`),iO(1013,`p-label`),wg(),iO(1014,`.`),wg()()()(),jc(1015,`tr`,15)(1016,`td`,16)(1017,`div`,24)(1018,`span`,25),iO(1019,`p-pattern`),nu(1020,`br`),wg()()(),jc(1021,`td`,20)(1022,`code`,26),iO(1023,`string`),wg()(),jc(1024,`td`,22),iO(1025,`-`),wg(),jc(1026,`td`,23)(1027,`em`)(1028,`strong`),iO(1029,`(opcional)`),wg()(),jc(1030,`p`),iO(1031,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),jc(1032,`code`),iO(1033,`(p-mask)`),wg(),iO(1034,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),wg()()(),jc(1035,`tr`,15)(1036,`td`,16)(1037,`div`,24)(1038,`span`,25),iO(1039,` p-placeholder`),nu(1040,`br`),wg()()(),jc(1041,`td`,20)(1042,`code`,26),iO(1043,`string`),wg()(),jc(1044,`td`,22)(1045,`p`),iO(1046,`''`),wg()(),jc(1047,`td`,23)(1048,`em`)(1049,`strong`),iO(1050,`(opcional)`),wg()(),jc(1051,`p`),iO(1052,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1053,`tr`,15)(1054,`td`,16)(1055,`div`,24)(1056,`span`,25),iO(1057,` p-helper`),nu(1058,`br`),wg()()(),jc(1059,`td`,20)(1060,`code`,32),iO(1061,`PoHelperOptions `),wg(),jc(1062,`code`,26),iO(1063,` string`),wg()(),jc(1064,`td`,22),iO(1065,`-`),wg(),jc(1066,`td`,23)(1067,`em`)(1068,`strong`),iO(1069,`(opcional)`),wg()(),jc(1070,`p`),iO(1071,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1072,`code`),iO(1073,`p-label`),wg(),iO(1074,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1075,`code`),iO(1076,`p-label`),wg(),iO(1077,`.`),wg(),jc(1078,`blockquote`)(1079,`p`),iO(1080,`Para mais informações acesse: `),jc(1081,`a`,33),iO(1082,`https://po-ui.io/documentation/po-helper`),wg(),iO(1083,`.`),wg()(),jc(1084,`blockquote`)(1085,`p`),iO(1086,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1087,`code`),iO(1088,`p-additional-help-tooltip`),wg(),iO(1089,` e `),jc(1090,`code`),iO(1091,`p-additional-help`),wg(),iO(1092,`) será ignorado.`),wg()()()(),jc(1093,`tr`,15)(1094,`td`,16)(1095,`div`,24)(1096,`span`,25),iO(1097,`p-readonly`),nu(1098,`br`),wg()()(),jc(1099,`td`,20)(1100,`code`,27),iO(1101,`boolean`),wg()(),jc(1102,`td`,22),iO(1103,`-`),wg(),jc(1104,`td`,23)(1105,`em`)(1106,`strong`),iO(1107,`(opcional)`),wg()(),jc(1108,`p`),iO(1109,`Indica que o campo será somente leitura.`),wg()()(),jc(1110,`tr`,15)(1111,`td`,16)(1112,`div`,24)(1113,`span`,25),iO(1114,`p-required`),nu(1115,`br`),wg()()(),jc(1116,`td`,20)(1117,`code`,27),iO(1118,`boolean`),wg()(),jc(1119,`td`,22)(1120,`p`)(1121,`code`),iO(1122,`false`),wg()()(),jc(1123,`td`,23)(1124,`em`)(1125,`strong`),iO(1126,`(opcional)`),wg()(),jc(1127,`p`),iO(1128,`Define que o campo será obrigatório.`),wg(),jc(1129,`blockquote`)(1130,`p`),iO(1131,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1132,`code`),iO(1133,`(p-disabled)`),wg(),iO(1134,`.`),wg()()()(),jc(1135,`tr`,15)(1136,`td`,16)(1137,`div`,24)(1138,`span`,25),iO(1139,` p-required-field-error-message`),nu(1140,`br`),wg()()(),jc(1141,`td`,20)(1142,`code`,27),iO(1143,`boolean`),wg()(),jc(1144,`td`,22)(1145,`p`)(1146,`code`),iO(1147,`false`),wg()()(),jc(1148,`td`,23)(1149,`em`)(1150,`strong`),iO(1151,`(opcional)`),wg()(),jc(1152,`p`),iO(1153,`Exibe a mensagem setada na propriedade `),jc(1154,`code`),iO(1155,`p-error-pattern`),wg(),iO(1156,` se o campo estiver vazio e for requerido.`),wg(),jc(1157,`blockquote`)(1158,`p`),iO(1159,`Necessário que a propriedade `),jc(1160,`code`),iO(1161,`p-required`),wg(),iO(1162,` esteja habilitada.`),wg()()()(),jc(1163,`tr`,15)(1164,`td`,16)(1165,`div`,24)(1166,`span`,25),iO(1167,` p-show-required`),nu(1168,`br`),wg()()(),jc(1169,`td`,20)(1170,`code`,27),iO(1171,`boolean`),wg()(),jc(1172,`td`,22),iO(1173,`-`),wg(),jc(1174,`td`,23)(1175,`p`),iO(1176,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1177,`blockquote`)(1178,`p`),iO(1179,`Não será exibida a indicação se:`),wg()(),jc(1180,`ul`)(1181,`li`),iO(1182,`Não possuir `),jc(1183,`code`),iO(1184,`p-help`),wg(),iO(1185,` e/ou `),jc(1186,`code`),iO(1187,`p-label`),wg(),iO(1188,`.`),wg()()()(),jc(1189,`tr`,15)(1190,`td`,16)(1191,`div`,24)(1192,`span`,25),iO(1193,` p-size`),nu(1194,`br`),wg()()(),jc(1195,`td`,20)(1196,`code`,26),iO(1197,`string`),wg()(),jc(1198,`td`,22)(1199,`p`)(1200,`code`),iO(1201,`medium`),wg()()(),jc(1202,`td`,23)(1203,`em`)(1204,`strong`),iO(1205,`(opcional)`),wg()(),jc(1206,`p`),iO(1207,`Define o tamanho do componente:`),wg(),jc(1208,`ul`)(1209,`li`)(1210,`code`),iO(1211,`small`),wg(),iO(1212,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1213,`li`)(1214,`code`),iO(1215,`medium`),wg(),iO(1216,`: altura do input como 44px.`),wg()(),jc(1217,`blockquote`)(1218,`p`),iO(1219,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1220,`code`),iO(1221,`medium`),wg(),iO(1222,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1223,`a`,34),iO(1224,`po-theme`),wg(),iO(1225,`.`),wg()()()(),jc(1226,`tr`,15)(1227,`td`,16)(1228,`div`,24)(1229,`span`,25),iO(1230,` p-upper-case`),nu(1231,`br`),wg()()(),jc(1232,`td`,20)(1233,`code`,27),iO(1234,`boolean`),wg()(),jc(1235,`td`,22),iO(1236,`-`),wg(),jc(1237,`td`,23)(1238,`p`),iO(1239,`Converte o conteúdo do campo em maiúsulo automaticamente.`),wg()()()(),jc(1240,`h3`,11),iO(1241,`Métodos`),wg(),jc(1242,`table`,35)(1243,`tr`,15)(1244,`th`,36)(1245,`div`,24)(1246,`h4`)(1247,`span`,25),iO(1248,` showAdditionalHelp `),wg()()()()(),jc(1249,`tr`,23)(1250,`td`,23)(1251,`p`),iO(1252,`Método que exibe `),jc(1253,`code`),iO(1254,`p-helper`),wg(),iO(1255,` ou executa a ação definida em `),jc(1256,`code`),iO(1257,`p-helper{eventOnClick}`),wg(),iO(1258,` ou em `),jc(1259,`code`),iO(1260,`p-additionalHelp`),wg(),iO(1261,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1262,`code`),iO(1263,`p-keydown`),wg(),iO(1264,`.`),wg(),jc(1265,`blockquote`)(1266,`p`),iO(1267,`Exibe ou oculta o conteúdo do componente `),jc(1268,`code`),iO(1269,`po-helper`),wg(),iO(1270,` quando o componente estiver com foco.`),wg()(),jc(1271,`pre`)(1272,`code`),iO(1273,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),wg()(),jc(1274,`pre`)(1275,`code`),iO(1276,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1277,`br`),jc(1278,`table`,35)(1279,`tr`,15)(1280,`th`,36)(1281,`div`,24)(1282,`h4`)(1283,`span`,25),iO(1284,` focus `),wg()()()()(),jc(1285,`tr`,23)(1286,`td`,23)(1287,`p`),iO(1288,`Função que atribui foco ao componente.`),wg(),jc(1289,`p`),iO(1290,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1291,`pre`)(1292,`code`),iO(1293,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),wg()()()()(),nu(1294,`br`),jc(1295,`h3`),iO(1296,`Interfaces`),wg(),jc(1297,`h4`,37)(1298,`code`,5),iO(1299,`ErrorAsyncProperties`),wg()(),jc(1300,`div`,2)(1301,`p`),iO(1302,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(1303,`h4`,11),iO(1304,`Propriedades`),wg(),jc(1305,`table`,12)(1306,`tr`,13)(1307,`th`,14),iO(1308,`Nome`),wg(),jc(1309,`th`,14),iO(1310,`Tipo`),wg(),jc(1311,`th`,14),iO(1312,`Descrição`),wg()(),jc(1313,`tr`,15)(1314,`td`,16)(1315,`div`,24)(1316,`span`,25),iO(1317,` errorAsync`),nu(1318,`br`),wg()()(),jc(1319,`td`,20)(1320,`code`,38),iO(1321,`(value) => Observable<boolean>`),wg()(),jc(1322,`td`,23)(1323,`p`),iO(1324,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1325,`code`),iO(1326,`change`),wg(),iO(1327,` ou `),jc(1328,`code`),iO(1329,`change-model`),wg(),iO(1330,`, dependendo do valor da propriedade `),jc(1331,`code`),iO(1332,`triggerMode`),wg(),iO(1333,`.`),wg()()(),jc(1334,`tr`,15)(1335,`td`,16)(1336,`div`,24)(1337,`span`,25),iO(1338,` triggerMode`),nu(1339,`br`),wg()()(),jc(1340,`td`,20)(1341,`code`,39),iO(1342,`'change' `),wg(),jc(1343,`code`,40),iO(1344,` 'changeModel'`),wg()(),jc(1345,`td`,23)(1346,`em`)(1347,`strong`),iO(1348,`(opcional)`),wg()(),jc(1349,`p`),iO(1350,`Controla se o método será executado no disparo do output `),jc(1351,`code`),iO(1352,`change`),wg(),iO(1353,` ou `),jc(1354,`code`),iO(1355,`change-model`),wg(),iO(1356,`.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Url`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-url-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-url-basic-view`)(6,`sample-po-url-labs-view`)(7,`sample-po-url-shortener-view`),wg()()()),l&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,pe,ce,Ee,Se],encapsulation:2,changeDetection:1})}return a})()}];var xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue$1({imports:[C1.forChild(qe),C1]})}return a})();var at=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue$1({imports:[Ta,xe]})}return a})();export{at as DocPoUrlModule};