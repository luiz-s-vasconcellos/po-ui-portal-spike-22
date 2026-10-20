import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Jt as dae,Ki as px,Kn as Ag,Lr as SF,Mn as w5,O as E5,Pi as mt,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Ti as jF,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Z as M5,Zi as t0,Zt as eFe,aa as v_,ai as b,ar as EK,b as A5,bi as ib,da as wO,dn as moe,dt as Sae,et as Noe,ga as xx,gt as Tt,hr as Hk,i as _a,ir as EF,ji as mO,ki as kF,lr as Ft,mi as gO,mn as ni,ni as _o,nn as goe,or as EO,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var De=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`upload`,`p-label`,`PO Upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`]],template:function(r,i){r&1&&nu(0,`po-upload`,0)},dependencies:[M5],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Upload Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-upload-basic/sample-po-upload-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-upload-basic/sample-po-upload-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-upload-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,He,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,De],encapsulation:2,changeDetection:1})}return a})();function Ge(a,Ne){if(a&1&&(jc(0,`div`)(1,`po-widget`,22)(2,`form`,23)(3,`po-input`,24),JN(),wg(),jc(4,`po-select`,25),JN(),wg(),jc(5,`po-select`,26),JN(),wg(),jc(6,`po-switch`,27),JN(),wg(),jc(7,`po-switch`,28),JN(),wg()()()()),a&2){let d=xx();rg(2),jE(`formGroup`,d.actionForm),rg(),t0(),rg(),jE(`p-options`,d.iconOptions),t0(),rg(),jE(`p-options`,d.typeOptions),t0(),rg(),t0(),rg(),t0()}}var Me=(()=>{class a{fb=p(jF);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:`autoupload`,label:`Automatic upload`},{value:`directory`,label:`Directory`},{value:`disabled`,label:`Disabled`},{value:`disabledRemoveFile`,label:`Disabled Remove File`},{value:`dragDrop`,label:`Drag Drop`},{value:`requiredUrl`,label:`required Url`},{value:`multiple`,label:`Multiple upload`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`restrictionsInfo`,label:`Hide Restrictions Info`},{value:`selectButton`,label:`Hide Select Files Button`},{value:`sendButton`,label:`Hide Send Files Button`},{value:`showCustomAction`,label:`Add Custom Action to Progress`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`showThumbnail`,label:`Show Thumbnail`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(d){this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch(r){this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(`,`).map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText=``,this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals=``,this.modalActions=``,this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url=`https://po-sample-api.onrender.com/v1/uploads/addFile`,this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.customModalActions=[],this.size=`medium`}getValueInBytes(d){return 1048576*d}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-labs`]],standalone:!1,decls:29,vars:53,consts:[[`fRestrictions`,`ngForm`],[`name`,`upload`,3,`ngModelChange`,`p-custom-action-click`,`p-error`,`p-keydown`,`p-success`,`p-upload`,`p-open-modal-preview`,`p-remove`,`ngModel`,`p-helper`,`p-auto-upload`,`p-directory`,`p-disabled`,`p-required-url`,`p-disabled-remove-file`,`p-drag-drop`,`p-drag-drop-height`,`p-form-field`,`p-help`,`p-hide-select-button`,`p-hide-restrictions-info`,`p-hide-send-button`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-optional`,`p-required`,`p-show-required`,`p-show-thumbnail`,`p-restrictions`,`p-size`,`p-url`,`p-headers`,`p-custom-action`,`p-label-text-wrap`,`p-compact-label`,`p-custom-modal-actions`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`allowedExtensions`,`p-help`,`Digite as extensões permitidas separadas por vírgula`,`p-label`,`Allowed Extensions`,`p-placeholder`,`.png, .jpeg, .jpg`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxFiles`,`p-clean`,``,`p-help`,`Requer p-multiple habilitado`,`p-label`,`Max Files`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`dragDropHeight`,`p-clean`,``,`p-help`,`Altura da área de arrastar e soltar`,`p-label`,`Drag Drop Height`,`p-min`,`160`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Min File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Max File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`formField`,`p-clean`,``,`p-label`,`Form Field`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,`p-required`,``,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`headers`,`p-help`,`Ex.: {"Authorization": "12312414"}`,`p-label`,`Headers`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`customModalActions`,`p-help`,`Ex.: [{"label": "Label", "disabled": false}]`,`p-label`,`Custom Modal Actions`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`],[`name`,`properties`,`p-columns`,`4`,`p-help`,`Select any options`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`]],template:function(r,i){if(r&1){let m=Sx();jc(0,`po-upload`,1),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.upload,l)||(i.upload=l),v_(l)}),mt(`p-custom-action-click`,function(){return i.changeEvent(`p-custom-action-click`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-success`,function(){return i.changeEvent(`p-success`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-open-modal-preview`,function(){return i.changeEvent(`p-open-modal-preview`)})(`p-remove`,function(){return i.changeEvent(`p-remove`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),EO(4,`json`),nu(5,`po-info`,4),wg(),nu(6,`po-divider`),jc(7,`div`,2)(8,`form`,null,0)(10,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.allowedExtensions,l)||(i.allowedExtensions=l),v_(l)}),mt(`p-change`,function(){return i.onChangeExtension()}),wg(),jc(11,`po-number`,6),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.maxFiles,l)||(i.maxFiles=l),v_(l)}),mt(`p-change`,function(){return i.onChangeMaxFiles(i.maxFiles)}),wg(),jc(12,`po-number`,7),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.dragDropHeight,l)||(i.dragDropHeight=l),v_(l)}),wg(),jc(13,`po-number`,8),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.minSize,l)||(i.minSize=l),v_(l)}),mt(`p-change`,function(){return i.onChangeMinSize(i.minSize)}),wg(),jc(14,`po-number`,9),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.maxSize,l)||(i.maxSize=l),v_(l)}),mt(`p-change`,function(){return i.onChangeMaxSize(i.maxSize)}),wg(),nu(15,`po-divider`),jc(16,`po-input`,10),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.label,l)||(i.label=l),v_(l)}),wg(),jc(17,`po-input`,11),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.help,l)||(i.help=l),v_(l)}),wg(),jc(18,`po-input`,12),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.helperText,l)||(i.helperText=l),v_(l)}),wg(),jc(19,`po-input`,13),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.formField,l)||(i.formField=l),v_(l)}),wg(),jc(20,`po-input`,14),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.url,l)||(i.url=l),v_(l)}),wg(),jc(21,`po-input`,15),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.headersLabs,l)||(i.headersLabs=l),v_(l)}),mt(`p-change`,function(l){return i.onChangeHeaders(l)}),wg(),jc(22,`po-input`,16),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.literals,l)||(i.literals=l),v_(l)}),mt(`p-change`,function(){return i.changeLiterals()}),wg(),jc(23,`po-input`,17),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.modalActions,l)||(i.modalActions=l),v_(l)}),mt(`p-change`,function(){return i.changeModalActions()}),wg(),jc(24,`po-checkbox-group`,18),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.properties,l)||(i.properties=l),v_(l)}),wg(),px(25,Ge,8,3,`div`),jc(26,`po-radio-group`,19),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.size,l)||(i.size=l),v_(l)}),wg(),jc(27,`div`,20)(28,`po-button`,21),mt(`p-click`,function(){return i.restore()}),wg()()()()}r&2&&(ib(`ngModel`,i.upload),jE(`p-helper`,i.helperText)(`p-auto-upload`,i.properties.includes(`autoupload`))(`p-directory`,i.properties.includes(`directory`))(`p-disabled`,i.properties.includes(`disabled`))(`p-required-url`,i.properties.includes(`requiredUrl`))(`p-disabled-remove-file`,i.properties.includes(`disabledRemoveFile`))(`p-drag-drop`,i.properties.includes(`dragDrop`))(`p-drag-drop-height`,i.dragDropHeight)(`p-form-field`,i.formField)(`p-help`,i.help)(`p-hide-select-button`,i.properties.includes(`selectButton`))(`p-hide-restrictions-info`,i.properties.includes(`restrictionsInfo`))(`p-hide-send-button`,i.properties.includes(`sendButton`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-multiple`,i.properties.includes(`multiple`))(`p-optional`,i.properties.includes(`optional`))(`p-required`,i.properties.includes(`required`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-thumbnail`,i.properties.includes(`showThumbnail`))(`p-restrictions`,i.restrictions)(`p-size`,i.size)(`p-url`,i.url)(`p-headers`,i.headers)(`p-custom-action`,i.action)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-custom-modal-actions`,i.customModalActions),t0(),rg(3),jE(`p-value`,wO(4,51,i.upload)),rg(2),jE(`p-value`,i.event),rg(5),ib(`ngModel`,i.allowedExtensions),t0(),rg(),ib(`ngModel`,i.maxFiles),t0(),rg(),ib(`ngModel`,i.dragDropHeight),t0(),rg(),ib(`ngModel`,i.minSize),t0(),rg(),ib(`ngModel`,i.maxSize),t0(),rg(2),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.formField),t0(),rg(),ib(`ngModel`,i.url),t0(),rg(),ib(`ngModel`,i.headersLabs),t0(),rg(),ib(`ngModel`,i.literals),t0(),rg(),ib(`ngModel`,i.modalActions),jE(`p-disabled`,!i.properties.includes(`showThumbnail`)),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),mx(i.properties.includes(`showCustomAction`)?25:-1),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,SF,kF,ni,Lf,m5,A5,doe,Ote,moe,w5,M5,_oe,Noe,Hk],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Upload Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-upload-labs/sample-po-upload-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-helper]="helperText"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-thumbnail]="properties.includes('showThumbnail')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-custom-modal-actions]="customModalActions"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
  (p-upload)="changeEvent('p-upload')"
  (p-open-modal-preview)="changeEvent('p-open-modal-preview')"
  (p-remove)="changeEvent('p-remove')"
>
</po-upload>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <po-divider />

    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="customModalActions"
      [(ngModel)]="modalActions"
      [p-disabled]="!properties.includes('showThumbnail')"
      p-help='Ex.: [{"label": "Label", "disabled": false}]'
      p-label="Custom Modal Actions"
      (p-change)="changeModalActions()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    @if (properties.includes('showCustomAction')) {
      <div>
        <po-widget p-title="Action Button">
          <form [formGroup]="actionForm" class="po-row">
            <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
            <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
            <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
            <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
            <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
          </form>
        </po-widget>
      </div>
    }

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

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-upload-labs/sample-po-upload-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals,
  PoModalAction
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  helperText: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  modalActions: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  customModalActions: Array<PoModalAction>;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'showThumbnail', label: 'Show Thumbnail' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor() {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeModalActions() {
    try {
      this.customModalActions = JSON.parse(this.modalActions);
    } catch {
      this.customModalActions = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.helperText = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.modalActions = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.customModalActions = [];
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-upload-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ke,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Me],encapsulation:2,changeDetection:1})}return a})();var Xe=[`formOpportunity`];var Ze=()=>({maxFileSize:`204800`});var Ue=(()=>{class a{poNotification=p(zu);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success(`You were applied successfully`)}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-resume`]],viewQuery:function(r,i){if(r&1&&iu(Xe,7),r&2){let m;vo(m=_o())&&(i.formOpportunity=m.first)}},standalone:!1,decls:12,vars:7,consts:[[`formOpportunity`,`ngForm`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Full Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`biograph`,`p-label`,`Biograph`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`linkedin`,`p-clean`,``,`p-label`,`LinkedIn URL`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`resume`,`p-label`,`Resume`,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-md-12`,3,`ngModelChange`,`p-error`,`p-success`,`ngModel`,`p-restrictions`],[`p-label`,`Apply`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let m=Sx();jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.name,l)||(i.name=l),v_(l)}),wg()(),jc(4,`div`,1)(5,`po-textarea`,3),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.biograph,l)||(i.biograph=l),v_(l)}),wg()(),jc(6,`div`,1)(7,`po-url`,4),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.linkedin,l)||(i.linkedin=l),v_(l)}),wg()(),jc(8,`div`,1)(9,`po-upload`,5),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.resume,l)||(i.resume=l),v_(l)}),mt(`p-error`,function(){return i.resumeUploadError()})(`p-success`,function(){return i.resumeUploadSuccess()}),wg()(),jc(10,`div`,1)(11,`po-button`,6),mt(`p-click`,function(){return i.apply()}),wg()()()}if(r&2){let m=Fx(1);rg(3),ib(`ngModel`,i.name),t0(),rg(2),ib(`ngModel`,i.biograph),t0(),rg(2),ib(`ngModel`,i.linkedin),t0(),rg(2),ib(`ngModel`,i.resume),jE(`p-restrictions`,gO(6,Ze)),t0(),rg(2),jE(`p-disabled`,m.invalid||!i.uploadedResume)}},dependencies:[wK,CK,EK,TF,EF,ni,A5,goe,M5,E5],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-resume-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Upload - Resume`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-upload-resume/sample-po-upload-resume.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-upload-resume/sample-po-upload-resume.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-upload-resume`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,et,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ue],encapsulation:2,changeDetection:1})}return a})();var nt=[`upload`];var it=[`stepper`];var ot=[`submitForm`];var at=[`sucessData`];var lt=a=>({"po-invisible":a});function rt(a,Ne){if(a&1){let d=Sx();jc(0,`div`,8)(1,`div`,9)(2,`p`,11),iO(3,`Confirm informations`),wg()(),nu(4,`po-info`,28)(5,`po-info`,29)(6,`po-info`,30),jc(7,`po-button`,31),mt(`p-click`,function(){y_(d);let i=xx();return v_(i.confirmSubmit())}),wg()()}if(a&2){let d=xx();rg(4),jE(`p-value`,d.project[0].name||`N/D`),rg(),jE(`p-value`,d.title||`N/D`),rg(),jE(`p-value`,d.description||`N/D`)}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:`Return`};description;project=[];restrictions={allowedExtensions:[`.zip`,`.7z`,`.tar`,`.wim`]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-rs`]],viewQuery:function(r,i){if(r&1&&iu(nt,7)(it,7)(ot,7)(at,7),r&2){let m;vo(m=_o())&&(i.upload=m.first),vo(m=_o())&&(i.stepper=m.first),vo(m=_o())&&(i.submitForm=m.first),vo(m=_o())&&(i.sucessData=m.first)}},standalone:!1,decls:47,vars:15,consts:[[`stepper`,``],[`submitForm`,`ngForm`],[`upload`,``],[`sucessData`,``],[1,`po-row`],[`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`42`,1,`po-lg-10`,`po-offset-lg-2`,`po-offset-xl-2`],[`p-label`,`Welcome`],[`p-title`,`Realize & Show`,1,`po-lg-8`,`po-mt-2`],[1,`tht-row`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-text-large`],[`p-label`,`Yes!`,`p-kind`,`primary`,1,`po-sm-12`,`po-mt-2`,3,`p-click`],[`p-label`,`Submit`,3,`p-can-active-next-step`],[1,`po-lg-10`],[1,`po-font-subtitle`],[1,`po-font-text-small-bold`],[1,`po-font-title`,`po-lg-2`],[`p-icon`,`an an-cloud-arrow-up`,1,`po-clickable`,3,`click`],[`p-icon`,`an an-fill an-x-circle`,1,`po-clickable`,3,`click`,`ngClass`],[1,`po-sm-12`,`po-mt-3`,`po-font-text-bold`],[`name`,`project`,`p-hide-select-button`,``,`p-hide-send-button`,``,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-restrictions`],[`name`,`title`,`p-label`,`Title`,`p-placeholder`,`Be creative`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`description`,`p-label`,`Description`,`p-maxlength`,`140`,`p-placeholder`,`Resume on few words`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Done`,1,`po-sm-12`,`po-mt-2`,3,`p-click`,`p-disabled`],[`p-label`,`Confirm`],[`p-title`,`Confirmation`,3,`p-primary-action`],[1,`po-sm-12`,`po-font-title`],[`p-label`,`File name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Title`,1,`po-md-4`,3,`p-value`],[`p-label`,`Description`,1,`po-md-4`,3,`p-value`],[`p-label`,`Confirm`,1,`po-sm-12`,`po-mt-2`,`po-mb-2`,3,`p-click`]],template:function(r,i){if(r&1){let m=Sx();jc(0,`div`,4)(1,`po-stepper`,5,0)(3,`po-step`,6)(4,`po-widget`,7)(5,`div`,8)(6,`div`,9)(7,`h1`,10),iO(8,`Welcome, TOTVS!`),wg(),jc(9,`p`,11),iO(10,`Let's submit your project?`),wg()()(),jc(11,`div`,8)(12,`po-button`,12),mt(`p-click`,function(){y_(m);let l=Fx(2);return v_(l.next())}),wg()()()(),jc(13,`po-step`,13)(14,`po-widget`,7)(15,`form`,null,1)(17,`div`,4)(18,`div`,14)(19,`div`,4)(20,`p`,15),iO(21,`Please, select your project:`),wg()(),jc(22,`div`,4)(23,`p`,16),iO(24,`*Upload a zip file containing your project.`),wg()()(),jc(25,`div`,17)(26,`po-icon`,18),mt(`click`,function(){y_(m);let l=Fx(32);return v_(l.selectFiles())}),wg(),jc(27,`po-icon`,19),mt(`click`,function(){y_(m);let l=Fx(32);return v_(l.clear())}),wg()()(),jc(28,`div`,4)(29,`label`,20),iO(30,`Attached`),wg(),jc(31,`po-upload`,21,2),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.project,l)||(i.project=l),v_(l)}),wg()(),jc(33,`div`,4)(34,`po-input`,22),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.title,l)||(i.title=l),v_(l)}),wg()(),jc(35,`div`,4)(36,`po-textarea`,23),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(i.description,l)||(i.description=l),v_(l)}),wg()(),jc(37,`div`,8)(38,`po-button`,24),mt(`p-click`,function(){return i.submitProject()}),wg()()()()(),jc(39,`po-step`,25)(40,`po-widget`,7),px(41,rt,8,3,`div`,8),wg()()()(),jc(42,`po-modal`,26,3)(44,`div`,4)(45,`p`,27),iO(46,`Project successfully submited!`),wg()()()}r&2&&(rg(13),jE(`p-can-active-next-step`,i.canSubmitProject.bind(i)),rg(14),jE(`ngClass`,mO(13,lt,i.project.length<1)),rg(2),Ft(`po-invisible`,i.project.length<1),rg(2),ib(`ngModel`,i.project),jE(`p-restrictions`,i.restrictions),t0(),rg(3),ib(`ngModel`,i.title),jE(`p-disabled`,i.project.length<1),t0(),rg(2),ib(`ngModel`,i.description),jE(`p-disabled`,i.project.length<1),t0(),rg(2),jE(`p-disabled`,i.canSubmitProject()),rg(3),mx(i.canSubmitProject()?41:-1),rg(),jE(`p-primary-action`,i.confirm))},dependencies:[Rk,wK,CK,EK,TF,EF,ni,A5,goe,M5,Tt,_oe,ea,dae,eFe,Noe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-rs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Upload - Realize & Show`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-upload-rs/sample-po-upload-rs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVS!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        @if (canSubmitProject()) {
          <div class="tht-row">
            <div class="po-sm-12">
              <p class="po-font-text-large">Confirm informations</p>
            </div>
            <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>
            <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
          </div>
        }
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-upload-rs/sample-po-upload-rs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-upload-rs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,pt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ae],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{customAction={icon:`an an-download`,type:`default`,visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error(`Arquivo inválido ou não encontrado.`);return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement(`a`);i.href=r,i.download=d.name,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-download`]],standalone:!1,decls:1,vars:2,consts:[[`name`,`upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-custom-action-click`,`p-success`,`p-custom-action`,`p-multiple`]],template:function(r,i){r&1&&(jc(0,`po-upload`,0),mt(`p-custom-action-click`,function(s){return i.onCustomActionClick(s)})(`p-success`,function(){return i.uploadSuccess()}),wg()),r&2&&jE(`p-custom-action`,i.customAction)(`p-multiple`,!0)},dependencies:[M5],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-download-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Upload - with Download Button`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-upload-download/sample-po-upload-download.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-upload-download/sample-po-upload-download.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-upload-download`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ct,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ze],encapsulation:2,changeDetection:1})}return a})();var Et=()=>[`.png`,`.jpg`,`.jpeg`,`.gif`];var St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280});var Ve=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-preview`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`upload`,`p-label`,`PO Upload com Pré-visualização`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-restrictions`,`p-show-thumbnail`,`p-multiple`]],template:function(r,i){r&1&&nu(0,`po-upload`,0),r&2&&jE(`p-restrictions`,mO(4,St,gO(3,Et)))(`p-show-thumbnail`,!0)(`p-multiple`,!0)},dependencies:[M5],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-preview-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Upload - with Preview`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-upload-preview/sample-po-upload-preview.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-upload-preview/sample-po-upload-preview.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-upload-preview`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,gt,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ve],encapsulation:2,changeDetection:1})}return a})();var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-upload-doc`]],standalone:!1,decls:2328,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-html`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Array<PoModalAction>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoUploadComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O componente `),jc(24,`code`),iO(25,`po-upload`),wg(),iO(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),wg(),jc(27,`ul`)(28,`li`),iO(29,`Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.`),wg(),jc(30,`li`),iO(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),wg(),jc(32,`li`),iO(33,`Restrições de formatos de arquivo e tamanho.`),wg(),jc(34,`li`),iO(35,`Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.`),wg(),jc(36,`li`),iO(37,`Função de erro que será disparada quando houver erro no envio dos arquivos.`),wg(),jc(38,`li`),iO(39,`Permite habilitar uma área onde os arquivos podem ser arrastados.`),wg()(),jc(40,`h4`),iO(41,`Tokens customizáveis`),wg(),jc(42,`p`),iO(43,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(44,`blockquote`)(45,`p`),iO(46,`Para maiores informações, acesse o guia `),jc(47,`a`,6),iO(48,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(49,`.`),wg()(),jc(50,`table`)(51,`thead`)(52,`tr`)(53,`th`),iO(54,`Propriedade`),wg(),jc(55,`th`),iO(56,`Descrição`),wg(),jc(57,`th`),iO(58,`Valor Padrão`),wg()()(),jc(59,`tbody`)(60,`tr`)(61,`td`)(62,`strong`),iO(63,`FIELD CONTAINER`),wg()(),nu(64,`td`)(65,`td`),wg(),jc(66,`tr`)(67,`td`)(68,`code`),iO(69,`--field-container-title-justify`),wg()(),jc(70,`td`),iO(71,`Alinhamento horizontal do título (`),jc(72,`code`),iO(73,`justify-content`),wg(),iO(74,`)`),wg(),jc(75,`td`)(76,`code`),iO(77,`space-between`),wg()()(),jc(78,`tr`)(79,`td`)(80,`code`),iO(81,`--field-container-title-flex`),wg()(),jc(82,`td`),iO(83,`Flex do título (`),jc(84,`code`),iO(85,`flex`),wg(),iO(86,`)`),wg(),jc(87,`td`)(88,`code`),iO(89,`1 auto`),wg()()(),jc(90,`tr`)(91,`td`)(92,`strong`),iO(93,`TEXT SUPPORT`),wg()(),nu(94,`td`)(95,`td`),wg(),jc(96,`tr`)(97,`td`)(98,`code`),iO(99,`--font-family-text-support`),wg()(),jc(100,`td`),iO(101,`Família tipográfica usada no texto de suporte`),wg(),jc(102,`td`)(103,`code`),iO(104,`var(--font-family-theme)`),wg()()(),jc(105,`tr`)(106,`td`)(107,`code`),iO(108,`--text-color-text-support`),wg()(),jc(109,`td`),iO(110,`Cor da fonte no texto de suporte`),wg(),jc(111,`td`)(112,`code`),iO(113,`var(--color-neutral-dark-90)`),wg()()(),jc(114,`tr`)(115,`td`)(116,`strong`),iO(117,`UPLOAD CONTENT`),wg()(),nu(118,`td`)(119,`td`),wg(),jc(120,`tr`)(121,`td`)(122,`code`),iO(123,`--background-color-content`),wg(),iO(124,` \xA0`),wg(),jc(125,`td`),iO(126,`Cor de fundo`),wg(),jc(127,`td`)(128,`code`),iO(129,`var(--color-neutral-light-10)`),wg()()(),jc(130,`tr`)(131,`td`)(132,`code`),iO(133,`--border-color-content`),wg()(),jc(134,`td`),iO(135,`Cor da borda`),wg(),jc(136,`td`)(137,`code`),iO(138,`var(--color-neutral-light-20)`),wg()()(),jc(139,`tr`)(140,`td`)(141,`code`),iO(142,`--border-radius-content`),wg()(),jc(143,`td`),iO(144,`Contém o valor do raio dos cantos do elemento`),wg(),jc(145,`td`)(146,`code`),iO(147,`var(--border-radius-md)`),wg()()(),jc(148,`tr`)(149,`td`)(150,`code`),iO(151,`--text-color-file-name`),wg()(),jc(152,`td`),iO(153,`Cor do texto do nome do arquivo`),wg(),jc(154,`td`)(155,`code`),iO(156,`var(--color-neutral-dark-90)`),wg()()(),jc(157,`tr`)(158,`td`)(159,`code`),iO(160,`--font-family-file-name`),wg()(),jc(161,`td`),iO(162,`Família tipográfica usada no texto do arquivo`),wg(),jc(163,`td`)(164,`code`),iO(165,`var(--font-family-theme)`),wg()()(),jc(166,`tr`)(167,`td`)(168,`code`),iO(169,`--text-color-info-bar`),wg()(),jc(170,`td`),iO(171,`Cor do texto de informação`),wg(),jc(172,`td`)(173,`code`),iO(174,`var(--color-neutral-mid-60)`),wg()()(),jc(175,`tr`)(176,`td`)(177,`code`),iO(178,`--font-family-info-bar`),wg()(),jc(179,`td`),iO(180,`Família tipográfica usada no texto de informação`),wg(),jc(181,`td`)(182,`code`),iO(183,`var(--font-family-theme)`),wg()()(),jc(184,`tr`)(185,`td`)(186,`strong`),iO(187,`ERROR STATE`),wg()(),nu(188,`td`)(189,`td`),wg(),jc(190,`tr`)(191,`td`)(192,`code`),iO(193,`--background-color-content-error`),wg()(),jc(194,`td`),iO(195,`Cor de fundo do container de erro`),wg(),jc(196,`td`)(197,`code`),iO(198,`var(--color-neutral-light-00)`),wg()()(),jc(199,`tr`)(200,`td`)(201,`code`),iO(202,`--border-color-content-error`),wg()(),jc(203,`td`),iO(204,`Cor da borda do container de erro`),wg(),jc(205,`td`)(206,`code`),iO(207,`var(--color-feedback-negative-base)`),wg()()(),jc(208,`tr`)(209,`td`)(210,`code`),iO(211,`--text-color-error`),wg()(),jc(212,`td`),iO(213,`Cor do texto do container de erro`),wg(),jc(214,`td`)(215,`code`),iO(216,`var(--color-feedback-negative-dark)`),wg()()(),jc(217,`tr`)(218,`td`)(219,`code`),iO(220,`--color-icon-error`),wg()(),jc(221,`td`),iO(222,`Cor do ícone no estado de erro`),wg(),jc(223,`td`)(224,`code`),iO(225,`var(--color-feedback-negative-base)`),wg()()(),jc(226,`tr`)(227,`td`)(228,`code`),iO(229,`--font-family-error`),wg()(),jc(230,`td`),iO(231,`Família tipográfica usada no texto de erro`),wg(),jc(232,`td`)(233,`code`),iO(234,`var(--font-family-theme)`),wg()()(),jc(235,`tr`)(236,`td`)(237,`strong`),iO(238,`UPLOADED STATE`),wg()(),nu(239,`td`)(240,`td`),wg(),jc(241,`tr`)(242,`td`)(243,`code`),iO(244,`--background-color-content-uploaded`),wg()(),jc(245,`td`),iO(246,`Cor de fundo do container com status de enviado`),wg(),jc(247,`td`)(248,`code`),iO(249,`var(--color-neutral-light-00)`),wg()()(),jc(250,`tr`)(251,`td`)(252,`code`),iO(253,`--border-color-content-uploaded`),wg()(),jc(254,`td`),iO(255,`Cor da borda do container com status de enviado`),wg(),jc(256,`td`)(257,`code`),iO(258,`var(--color-neutral-light-20)`),wg()()(),jc(259,`tr`)(260,`td`)(261,`strong`),iO(262,`INTERACTIVE STATE`),wg()(),nu(263,`td`)(264,`td`),wg(),jc(265,`tr`)(266,`td`)(267,`code`),iO(268,`--text-color-file-name-interactive`),wg()(),jc(269,`td`),iO(270,`Cor do texto do nome do arquivo quando interativo`),wg(),jc(271,`td`)(272,`code`),iO(273,`var(--color-action-default)`),wg()()(),jc(274,`tr`)(275,`td`)(276,`strong`),iO(277,`THUMBNAIL`),wg()(),nu(278,`td`)(279,`td`),wg(),jc(280,`tr`)(281,`td`)(282,`code`),iO(283,`--color-icon-thumbnail`),wg()(),jc(284,`td`),iO(285,`Cor do ícone na thumbnail`),wg(),jc(286,`td`)(287,`code`),iO(288,`var(--color-action-default)`),wg()()(),jc(289,`tr`)(290,`td`)(291,`code`),iO(292,`--border-width-thumbnail`),wg()(),jc(293,`td`),iO(294,`Tamanho da fonte na thumbnail`),wg(),jc(295,`td`)(296,`code`),iO(297,`var(--border-width-sm)`),wg()()(),jc(298,`tr`)(299,`td`)(300,`code`),iO(301,`--border-radius-thumbnail`),wg()(),jc(302,`td`),iO(303,`Contém o valor do raio dos cantos na thumbnail`),wg(),jc(304,`td`)(305,`code`),iO(306,`var(--border-radius-md)`),wg()()(),jc(307,`tr`)(308,`td`)(309,`code`),iO(310,`--background-color-thumbnail`),wg()(),jc(311,`td`),iO(312,`Cor de fundo na thumbnail`),wg(),jc(313,`td`)(314,`code`),iO(315,`var(--color-neutral-light-05)`),wg()()(),jc(316,`tr`)(317,`td`)(318,`strong`),iO(319,`Focused`),wg()(),nu(320,`td`)(321,`td`),wg(),jc(322,`tr`)(323,`td`)(324,`code`),iO(325,`--outline-color-focused`),wg()(),jc(326,`td`),iO(327,`Cor do outline do estado de focus`),wg(),jc(328,`td`)(329,`code`),iO(330,`var(--color-action-focus)`),wg()()()()()(),jc(331,`div`,7)(332,`h4`,8),iO(333,`Seletor`),wg(),jc(334,`pre`,9),iO(335,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-compact-label="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-custom-modal-actions="Array<PoModalAction>"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoUploadLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-cancel)="EventEmitter"
    (p-error)="EventEmitter"
    (p-open-modal-preview)="EventEmitter"
    (p-remove)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-show-thumbnail="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),wg()(),jc(336,`h4`,10),iO(337,`Propriedades`),wg(),jc(338,`table`,11)(339,`tr`,12)(340,`th`,13),iO(341,`Nome`),wg(),jc(342,`th`,13),iO(343,`Tipo`),wg(),jc(344,`th`,13),iO(345,`Padrão`),wg(),jc(346,`th`,13),iO(347,`Descrição`),wg()(),jc(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),iO(352,` (p-additional-help)`),nu(353,`br`),wg()(),jc(354,`div`,18),iO(355,`Deprecated`),wg()(),jc(356,`td`,19)(357,`code`,20),iO(358,`EventEmitter`),wg()(),jc(359,`td`,21),iO(360,`-`),wg(),jc(361,`td`,22)(362,`em`)(363,`strong`),iO(364,`(opcional)`),wg()(),jc(365,`p`),iO(366,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(367,`blockquote`)(368,`p`),iO(369,`Essa propriedade está `),jc(370,`strong`),iO(371,`depreciada`),wg(),iO(372,` e será removida na versão `),jc(373,`code`),iO(374,`23.x.x`),wg(),iO(375,`. Recomendamos utilizar a propriedade `),jc(376,`code`),iO(377,`p-helper`),wg(),iO(378,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(379,`tr`,14)(380,`td`,15)(381,`div`,23)(382,`span`,24),iO(383,` p-additional-help-tooltip`),nu(384,`br`),wg()(),jc(385,`div`,18),iO(386,`Deprecated`),wg()(),jc(387,`td`,19)(388,`code`,25),iO(389,`string`),wg()(),jc(390,`td`,21),iO(391,`-`),wg(),jc(392,`td`,22)(393,`em`)(394,`strong`),iO(395,`(opcional)`),wg()(),jc(396,`p`),iO(397,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(398,`code`),iO(399,`po-helper`),wg(),iO(400,`.
`),jc(401,`strong`),iO(402,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(403,`blockquote`)(404,`p`),iO(405,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(406,`blockquote`)(407,`p`),iO(408,`Essa propriedade está `),jc(409,`strong`),iO(410,`depreciada`),wg(),iO(411,` e será removida na versão `),jc(412,`code`),iO(413,`23.x.x`),wg(),iO(414,`. Recomendamos utilizar a propriedade `),jc(415,`code`),iO(416,`p-helper`),wg(),iO(417,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(418,`tr`,14)(419,`td`,15)(420,`div`,23)(421,`span`,24),iO(422,` p-append-in-body`),nu(423,`br`),wg()()(),jc(424,`td`,19)(425,`code`,26),iO(426,`boolean`),wg()(),jc(427,`td`,21)(428,`p`)(429,`code`),iO(430,`false`),wg()()(),jc(431,`td`,22)(432,`em`)(433,`strong`),iO(434,`(opcional)`),wg()(),jc(435,`p`),iO(436,`Define que o popover (`),jc(437,`code`),iO(438,`p-helper`),wg(),iO(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(440,`blockquote`)(441,`p`),iO(442,`Quando utilizado com `),jc(443,`code`),iO(444,`p-helper`),wg(),iO(445,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(446,`tr`,14)(447,`td`,15)(448,`div`,23)(449,`span`,24),iO(450,` p-auto-focus`),nu(451,`br`),wg()()(),jc(452,`td`,19)(453,`code`,26),iO(454,`boolean`),wg()(),jc(455,`td`,21)(456,`p`)(457,`code`),iO(458,`false`),wg()()(),jc(459,`td`,22)(460,`em`)(461,`strong`),iO(462,`(opcional)`),wg()(),jc(463,`p`),iO(464,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(465,`blockquote`)(466,`p`),iO(467,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(468,`tr`,14)(469,`td`,15)(470,`div`,23)(471,`span`,24),iO(472,` p-auto-upload`),nu(473,`br`),wg()()(),jc(474,`td`,19)(475,`code`,26),iO(476,`boolean`),wg()(),jc(477,`td`,21)(478,`p`)(479,`code`),iO(480,`false`),wg()()(),jc(481,`td`,22)(482,`em`)(483,`strong`),iO(484,`(opcional)`),wg()(),jc(485,`p`),iO(486,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),wg(),jc(487,`blockquote`)(488,`p`),iO(489,`Esta propriedade funciona somente se a propriedade `),jc(490,`code`),iO(491,`p-url`),wg(),iO(492,` tiver um valor atribuído.`),wg()()()(),jc(493,`tr`,14)(494,`td`,15)(495,`div`,23)(496,`span`,24),iO(497,` p-compact-label`),nu(498,`br`),wg()()(),jc(499,`td`,19)(500,`code`,26),iO(501,`boolean`),wg()(),jc(502,`td`,21)(503,`p`)(504,`code`),iO(505,`false`),wg()()(),jc(506,`td`,22)(507,`em`)(508,`strong`),iO(509,`(opcional)`),wg()(),jc(510,`p`),iO(511,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(512,`p`),iO(513,`Quando habilitado (`),jc(514,`code`),iO(515,`true`),wg(),iO(516,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(517,`ul`)(518,`li`)(519,`code`),iO(520,`po-label`),wg()(),jc(521,`li`)(522,`code`),iO(523,`p-requirement (showRequired)`),wg()(),jc(524,`li`)(525,`code`),iO(526,`po-helper`),wg()()(),jc(527,`p`),iO(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(529,`p`),iO(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(531,`ul`)(532,`li`)(533,`code`),iO(534,`--field-container-title-justify`),wg()(),jc(535,`li`)(536,`code`),iO(537,`--field-container-title-flex`),wg()()(),jc(538,`p`),iO(539,`Exemplo:`),wg(),jc(540,`pre`)(541,`code`),iO(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(543,`p`),iO(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(545,`tr`,14)(546,`td`,15)(547,`div`,23)(548,`span`,24),iO(549,` p-custom-action`),nu(550,`br`),wg()()(),jc(551,`td`,19)(552,`code`,27),iO(553,`PoProgressAction`),wg()(),jc(554,`td`,21),iO(555,`-`),wg(),jc(556,`td`,22)(557,`em`)(558,`strong`),iO(559,`(opcional)`),wg()(),jc(560,`p`),iO(561,`Define uma ação personalizada no componente `),jc(562,`code`),iO(563,`po-upload`),wg(),iO(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),wg(),jc(565,`p`),iO(566,`A ação deve implementar a interface `),jc(567,`strong`),iO(568,`PoProgressAction`),wg(),iO(569,`, permitindo configurar propriedades como:`),wg(),jc(570,`ul`)(571,`li`)(572,`code`),iO(573,`label`),wg(),iO(574,`: Texto do botão.`),wg(),jc(575,`li`)(576,`code`),iO(577,`icon`),wg(),iO(578,`: Ícone a ser exibido no botão.`),wg(),jc(579,`li`)(580,`code`),iO(581,`type`),wg(),iO(582,`: Tipo de botão (ex.: `),jc(583,`code`),iO(584,`danger`),wg(),iO(585,` ou `),jc(586,`code`),iO(587,`default`),wg(),iO(588,`).`),wg(),jc(589,`li`)(590,`code`),iO(591,`disabled`),wg(),iO(592,`: Indica se o botão deve estar desabilitado.`),wg(),jc(593,`li`)(594,`code`),iO(595,`visible`),wg(),iO(596,`: Indica se o botão deve estar visível.`),wg()(),jc(597,`p`)(598,`strong`),iO(599,`Exemplo de uso:`),wg()(),jc(600,`pre`)(601,`code`,28),iO(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),wg()(),jc(603,`pre`)(604,`code`,29),iO(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),wg()()()(),jc(606,`tr`,14)(607,`td`,15)(608,`div`,16)(609,`span`,17),iO(610,` (p-custom-action-click)`),nu(611,`br`),wg()()(),jc(612,`td`,19)(613,`code`,20),iO(614,`EventEmitter`),wg()(),jc(615,`td`,21),iO(616,`-`),wg(),jc(617,`td`,22)(618,`em`)(619,`strong`),iO(620,`(opcional)`),wg()(),jc(621,`p`),iO(622,`Evento emitido ao clicar na ação personalizada configurada no `),jc(623,`code`),iO(624,`p-custom-action`),wg(),iO(625,`.`),wg(),jc(626,`p`),iO(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),wg(),jc(628,`p`)(629,`strong`),iO(630,`Exemplo de uso:`),wg()(),jc(631,`pre`)(632,`code`,28),iO(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),wg()(),jc(634,`pre`)(635,`code`,29),iO(636,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),wg()()()(),jc(637,`tr`,14)(638,`td`,15)(639,`div`,23)(640,`span`,24),iO(641,` p-custom-modal-actions`),nu(642,`br`),wg()()(),jc(643,`td`,19)(644,`code`,30),iO(645,`Array<PoModalAction>`),wg()(),jc(646,`td`,21),iO(647,`-`),wg(),jc(648,`td`,22)(649,`em`)(650,`strong`),iO(651,`(opcional)`),wg()(),jc(652,`p`),iO(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),wg(),jc(654,`p`),iO(655,`A ação deve implementar a interface `),jc(656,`strong`),iO(657,`PoModalAction`),wg(),iO(658,`, permitindo configurar propriedades como:`),wg(),jc(659,`ul`)(660,`li`)(661,`code`),iO(662,`label`),wg(),iO(663,`: Texto do botão.`),wg(),jc(664,`li`)(665,`code`),iO(666,`action`),wg(),iO(667,`: Ícone a ser exibido no botão.`),wg(),jc(668,`li`)(669,`code`),iO(670,`danger`),wg(),iO(671,`: Define a propriedade `),jc(672,`code`),iO(673,`p-danger`),wg(),iO(674,` do botão.`),wg(),jc(675,`li`)(676,`code`),iO(677,`disabled`),wg(),iO(678,`: Indica se o botão deve estar desabilitado.`),wg(),jc(679,`li`)(680,`code`),iO(681,`visible`),wg(),iO(682,`: Indica se o botão deve estar visível.`),wg()(),jc(683,`p`)(684,`strong`),iO(685,`Exemplo de uso:`),wg()(),jc(686,`pre`)(687,`code`,28),iO(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),wg()(),jc(689,`pre`)(690,`code`,29),iO(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),wg()()()(),jc(692,`tr`,14)(693,`td`,15)(694,`div`,23)(695,`span`,24),iO(696,` p-directory`),nu(697,`br`),wg()()(),jc(698,`td`,19)(699,`code`,26),iO(700,`boolean`),wg()(),jc(701,`td`,21)(702,`p`)(703,`code`),iO(704,`false`),wg()()(),jc(705,`td`,22)(706,`em`)(707,`strong`),iO(708,`(opcional)`),wg()(),jc(709,`p`),iO(710,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),wg(),jc(711,`blockquote`)(712,`p`),iO(713,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),wg()(),jc(714,`blockquote`)(715,`p`),iO(716,`Definição não suportada pelo browser `),jc(717,`strong`),iO(718,`Internet Explorer`),wg(),iO(719,`, todavia será possível a seleção de arquivos padrão.`),wg()()()(),jc(720,`tr`,14)(721,`td`,15)(722,`div`,23)(723,`span`,24),iO(724,` p-disabled`),nu(725,`br`),wg()()(),jc(726,`td`,19)(727,`code`,26),iO(728,`boolean`),wg()(),jc(729,`td`,21),iO(730,`-`),wg(),jc(731,`td`,22)(732,`em`)(733,`strong`),iO(734,`(opcional)`),wg()(),jc(735,`p`),iO(736,`Indica que o campo será desabilitado.`),wg()()(),jc(737,`tr`,14)(738,`td`,15)(739,`div`,23)(740,`span`,24),iO(741,` p-disabled-remove-file`),nu(742,`br`),wg()()(),jc(743,`td`,19)(744,`code`,26),iO(745,`boolean`),wg()(),jc(746,`td`,21)(747,`p`)(748,`code`),iO(749,`false`),wg()()(),jc(750,`td`,22)(751,`em`)(752,`strong`),iO(753,`(opcional)`),wg()(),jc(754,`p`),iO(755,`Desabilita botão de remover o(s) arquivo(s) selecionado(s).`),wg()()(),jc(756,`tr`,14)(757,`td`,15)(758,`div`,23)(759,`span`,24),iO(760,` p-drag-drop`),nu(761,`br`),wg()()(),jc(762,`td`,19)(763,`code`,26),iO(764,`boolean`),wg()(),jc(765,`td`,21)(766,`p`)(767,`code`),iO(768,`false`),wg()()(),jc(769,`td`,22)(770,`em`)(771,`strong`),iO(772,`(opcional)`),wg()(),jc(773,`p`),iO(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),wg(),jc(775,`blockquote`)(776,`p`),iO(777,`Recomendamos utilizar apenas um `),jc(778,`code`),iO(779,`po-upload`),wg(),iO(780,` com esta funcionalidade por tela.`),wg()()()(),jc(781,`tr`,14)(782,`td`,15)(783,`div`,23)(784,`span`,24),iO(785,` p-drag-drop-height`),nu(786,`br`),wg()()(),jc(787,`td`,19)(788,`code`,31),iO(789,`number`),wg()(),jc(790,`td`,21)(791,`p`)(792,`code`),iO(793,`320`),wg()()(),jc(794,`td`,22)(795,`em`)(796,`strong`),iO(797,`(opcional)`),wg()(),jc(798,`p`),iO(799,`Define em `),jc(800,`em`),iO(801,`pixels`),wg(),iO(802,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),jc(803,`code`),iO(804,`160px`),wg(),iO(805,`.`),wg(),jc(806,`blockquote`)(807,`p`),iO(808,`Esta propriedade funciona somente se a propriedade `),jc(809,`code`),iO(810,`p-drag-drop`),wg(),iO(811,` estiver habilitada.`),wg()()()(),jc(812,`tr`,14)(813,`td`,15)(814,`div`,23)(815,`span`,24),iO(816,` p-restrictions`),nu(817,`br`),wg()()(),jc(818,`td`,19)(819,`code`,32),iO(820,`PoUploadFileRestrictions`),wg()(),jc(821,`td`,21),iO(822,`-`),wg(),jc(823,`td`,22)(824,`em`)(825,`strong`),iO(826,`(opcional)`),wg()(),jc(827,`p`),iO(828,`Objeto que segue a definição da interface `),jc(829,`code`),iO(830,`PoUploadFileRestrictions`),wg(),iO(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),wg()()(),jc(832,`tr`,14)(833,`td`,15)(834,`div`,23)(835,`span`,24),iO(836,` p-form-field`),nu(837,`br`),wg()()(),jc(838,`td`,19)(839,`code`,25),iO(840,`string`),wg()(),jc(841,`td`,21)(842,`p`)(843,`code`),iO(844,`files`),wg()()(),jc(845,`td`,22)(846,`em`)(847,`strong`),iO(848,`(opcional)`),wg()(),jc(849,`p`),iO(850,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),jc(851,`code`),iO(852,`p-url`),wg(),iO(853,`.`),wg()()(),jc(854,`tr`,14)(855,`td`,15)(856,`div`,23)(857,`span`,24),iO(858,` p-headers`),nu(859,`br`),wg()()(),jc(860,`td`,19)(861,`code`,33),iO(862,`{ [name: string]: string `),wg(),jc(863,`code`,34),iO(864,` Array<string>;
}`),wg()(),jc(865,`td`,21),iO(866,`-`),wg(),jc(867,`td`,22)(868,`p`),iO(869,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),wg()()(),jc(870,`tr`,14)(871,`td`,15)(872,`div`,23)(873,`span`,24),iO(874,` p-help`),nu(875,`br`),wg()()(),jc(876,`td`,19)(877,`code`,25),iO(878,`string`),wg()(),jc(879,`td`,21),iO(880,`-`),wg(),jc(881,`td`,22)(882,`em`)(883,`strong`),iO(884,`(opcional)`),wg()(),jc(885,`p`),iO(886,`Texto de apoio para o campo.`),wg()()(),jc(887,`tr`,14)(888,`td`,15)(889,`div`,23)(890,`span`,24),iO(891,` p-hide-restrictions-info`),nu(892,`br`),wg()()(),jc(893,`td`,19)(894,`code`,26),iO(895,`boolean`),wg()(),jc(896,`td`,21)(897,`p`)(898,`code`),iO(899,`false`),wg()()(),jc(900,`td`,22)(901,`em`)(902,`strong`),iO(903,`(opcional)`),wg()(),jc(904,`p`),iO(905,`Oculta visualmente as informações de restrições para o upload.`),wg()()(),jc(906,`tr`,14)(907,`td`,15)(908,`div`,23)(909,`span`,24),iO(910,` p-hide-select-button`),nu(911,`br`),wg()()(),jc(912,`td`,19)(913,`code`,26),iO(914,`boolean`),wg()(),jc(915,`td`,21)(916,`p`)(917,`code`),iO(918,`false`),wg()()(),jc(919,`td`,22)(920,`em`)(921,`strong`),iO(922,`(opcional)`),wg()(),jc(923,`p`),iO(924,`Omite o botão de seleção de arquivos.`),wg(),jc(925,`blockquote`)(926,`p`),iO(927,`Caso o valor definido seja `),jc(928,`code`),iO(929,`true`),wg(),iO(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(931,`code`),iO(932,`selectFiles()`),wg(),iO(933,` para seleção de arquivos.`),wg()()()(),jc(934,`tr`,14)(935,`td`,15)(936,`div`,23)(937,`span`,24),iO(938,` p-hide-send-button`),nu(939,`br`),wg()()(),jc(940,`td`,19)(941,`code`,26),iO(942,`boolean`),wg()(),jc(943,`td`,21)(944,`p`)(945,`code`),iO(946,`false`),wg()()(),jc(947,`td`,22)(948,`em`)(949,`strong`),iO(950,`(opcional)`),wg()(),jc(951,`p`),iO(952,`Omite o botão de envio de arquivos.`),wg(),jc(953,`blockquote`)(954,`p`),iO(955,`Caso o valor definido seja `),jc(956,`code`),iO(957,`true`),wg(),iO(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(959,`code`),iO(960,`sendFiles()`),wg(),iO(961,` para envio do(s) arquivo(s) selecionado(s).`),wg()()()(),jc(962,`tr`,14)(963,`td`,15)(964,`div`,23)(965,`span`,24),iO(966,` p-multiple`),nu(967,`br`),wg()()(),jc(968,`td`,19)(969,`code`,26),iO(970,`boolean`),wg()(),jc(971,`td`,21),iO(972,`-`),wg(),jc(973,`td`,22)(974,`em`)(975,`strong`),iO(976,`(opcional)`),wg()(),jc(977,`p`),iO(978,`Define se pode selecionar mais de um arquivo.`),wg(),jc(979,`blockquote`)(980,`p`),iO(981,`Se utilizada a `),jc(982,`code`),iO(983,`p-directory`),wg(),iO(984,`, habilita-se automaticamente esta propriedade.`),wg()()()(),jc(985,`tr`,14)(986,`td`,15)(987,`div`,16)(988,`span`,17),iO(989,` (p-keydown)`),nu(990,`br`),wg()()(),jc(991,`td`,19)(992,`code`,20),iO(993,`EventEmitter`),wg()(),jc(994,`td`,21),iO(995,`-`),wg(),jc(996,`td`,22)(997,`em`)(998,`strong`),iO(999,`(opcional)`),wg()(),jc(1e3,`p`),iO(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(1002,`code`),iO(1003,`KeyboardEvent`),wg(),iO(1004,` com informações sobre a tecla.`),wg()()(),jc(1005,`tr`,14)(1006,`td`,15)(1007,`div`,23)(1008,`span`,24),iO(1009,` p-label`),nu(1010,`br`),wg()()(),jc(1011,`td`,19)(1012,`code`,25),iO(1013,`string`),wg()(),jc(1014,`td`,21),iO(1015,`-`),wg(),jc(1016,`td`,22)(1017,`em`)(1018,`strong`),iO(1019,`(opcional)`),wg()(),jc(1020,`p`),iO(1021,`Rótulo do campo.`),wg()()(),jc(1022,`tr`,14)(1023,`td`,15)(1024,`div`,23)(1025,`span`,24),iO(1026,` p-label-text-wrap`),nu(1027,`br`),wg()()(),jc(1028,`td`,19)(1029,`code`,26),iO(1030,`boolean`),wg()(),jc(1031,`td`,21)(1032,`p`)(1033,`code`),iO(1034,`false`),wg()()(),jc(1035,`td`,22)(1036,`em`)(1037,`strong`),iO(1038,`(opcional)`),wg()(),jc(1039,`p`),iO(1040,`Habilita a quebra automática do texto da propriedade `),jc(1041,`code`),iO(1042,`p-label`),wg(),iO(1043,`. Quando `),jc(1044,`code`),iO(1045,`p-label-text-wrap`),wg(),iO(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),iO(1051,` p-literals`),nu(1052,`br`),wg()()(),jc(1053,`td`,19)(1054,`code`,35),iO(1055,`PoUploadLiterals`),wg()(),jc(1056,`td`,21),iO(1057,`-`),wg(),jc(1058,`td`,22)(1059,`em`)(1060,`strong`),iO(1061,`(opcional)`),wg()(),jc(1062,`p`),iO(1063,`Objeto com as literais usadas no `),jc(1064,`code`),iO(1065,`po-upload`),wg(),iO(1066,`.`),wg(),jc(1067,`p`),iO(1068,`Existem duas maneiras de customizar o componente:`),wg(),jc(1069,`ul`)(1070,`li`),iO(1071,`passando um objeto implementando a interface `),jc(1072,`code`),iO(1073,`PoUploadLiterals`),wg(),iO(1074,` com todas as literais disponíveis;`),wg(),jc(1075,`li`),iO(1076,`passando apenas as literais que deseja customizar:`),jc(1077,`pre`)(1078,`code`),iO(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),wg()()()(),jc(1080,`p`),iO(1081,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),wg(),jc(1082,`pre`)(1083,`code`),iO(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),wg()(),jc(1085,`blockquote`)(1086,`p`),iO(1087,`O objeto padrão de literais será traduzido de acordo com o idioma do `),jc(1088,`em`),iO(1089,`browser`),wg(),iO(1090,` (pt, en, es, ru).`),wg()()()(),jc(1091,`tr`,14)(1092,`td`,15)(1093,`div`,23)(1094,`span`,24),iO(1095,` p-loading`),nu(1096,`br`),wg()()(),jc(1097,`td`,19)(1098,`code`,26),iO(1099,`boolean`),wg()(),jc(1100,`td`,21)(1101,`p`)(1102,`code`),iO(1103,`false`),wg()()(),jc(1104,`td`,22)(1105,`em`)(1106,`strong`),iO(1107,`(opcional)`),wg()(),jc(1108,`p`),iO(1109,`Exibe um ícone de carregamento no botão `),jc(1110,`code`),iO(1111,`Selecionar arquivo`),wg(),iO(1112,`, à esquerda do texto, sinalizando que uma operação está\xA0em andamento.`),wg(),jc(1113,`blockquote`)(1114,`p`),iO(1115,`Incompatível com `),jc(1116,`code`),iO(1117,`p-drag-drop`),wg(),iO(1118,` e `),jc(1119,`code`),iO(1120,`p-hide-select-button`),wg(),iO(1121,`, pois o estado de loading depende da exibição do botão `),jc(1122,`code`),iO(1123,`Selecionar arquivo`),wg(),iO(1124,`.`),wg()()()(),jc(1125,`tr`,14)(1126,`td`,15)(1127,`div`,23)(1128,`span`,24),iO(1129,` name`),nu(1130,`br`),wg()()(),jc(1131,`td`,19)(1132,`code`,25),iO(1133,`string`),wg()(),jc(1134,`td`,21),iO(1135,`-`),wg(),jc(1136,`td`,22)(1137,`p`),iO(1138,`Define o valor do atributo `),jc(1139,`code`),iO(1140,`name`),wg(),iO(1141,` do componente.`),wg()()(),jc(1142,`tr`,14)(1143,`td`,15)(1144,`div`,16)(1145,`span`,17),iO(1146,` (ngModelChange)`),nu(1147,`br`),wg()()(),jc(1148,`td`,19)(1149,`code`,20),iO(1150,`EventEmitter`),wg()(),jc(1151,`td`,21),iO(1152,`-`),wg(),jc(1153,`td`,22)(1154,`em`)(1155,`strong`),iO(1156,`(opcional)`),wg()(),jc(1157,`p`),iO(1158,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da `),jc(1159,`em`),iO(1160,`tag`),wg(),jc(1161,`code`),iO(1162,`form`),wg(),iO(1163,`.`),wg(),jc(1164,`p`),iO(1165,`Na versão 12.2.0 do Angular a verificação `),jc(1166,`code`),iO(1167,`strictTemplates`),wg(),iO(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),wg(),jc(1169,`pre`)(1170,`code`),iO(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),wg()()()(),jc(1172,`tr`,14)(1173,`td`,15)(1174,`div`,16)(1175,`span`,17),iO(1176,` (p-cancel)`),nu(1177,`br`),wg()()(),jc(1178,`td`,19)(1179,`code`,20),iO(1180,`EventEmitter`),wg()(),jc(1181,`td`,21),iO(1182,`-`),wg(),jc(1183,`td`,22)(1184,`em`)(1185,`strong`),iO(1186,`(opcional)`),wg()(),jc(1187,`p`),iO(1188,`Evento será disparado ao clicar no ícone de fechar.`),wg(),jc(1189,`blockquote`)(1190,`p`),iO(1191,`Por parâmetro será passado o objeto do arquivo.`),wg()()()(),jc(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),iO(1196,` (p-error)`),nu(1197,`br`),wg()()(),jc(1198,`td`,19)(1199,`code`,20),iO(1200,`EventEmitter`),wg()(),jc(1201,`td`,21),iO(1202,`-`),wg(),jc(1203,`td`,22)(1204,`em`)(1205,`strong`),iO(1206,`(opcional)`),wg()(),jc(1207,`p`),iO(1208,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),wg(),jc(1209,`blockquote`)(1210,`p`),iO(1211,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(1212,`code`),iO(1213,`HttpErrorResponse`),wg(),iO(1214,`.`),wg()()()(),jc(1215,`tr`,14)(1216,`td`,15)(1217,`div`,16)(1218,`span`,17),iO(1219,` (p-open-modal-preview)`),nu(1220,`br`),wg()()(),jc(1221,`td`,19)(1222,`code`,20),iO(1223,`EventEmitter`),wg()(),jc(1224,`td`,21),iO(1225,`-`),wg(),jc(1226,`td`,22)(1227,`em`)(1228,`strong`),iO(1229,`(opcional)`),wg()(),jc(1230,`p`),iO(1231,`Evento será disparado ao abrir o modal de pré-visualização.`),wg(),jc(1232,`blockquote`)(1233,`p`),iO(1234,`Por parâmetro será passado o objeto do arquivo.`),wg()()()(),jc(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),iO(1239,` (p-remove)`),nu(1240,`br`),wg()()(),jc(1241,`td`,19)(1242,`code`,20),iO(1243,`EventEmitter`),wg()(),jc(1244,`td`,21),iO(1245,`-`),wg(),jc(1246,`td`,22)(1247,`em`)(1248,`strong`),iO(1249,`(opcional)`),wg()(),jc(1250,`p`),iO(1251,`Evento será disparado ao clicar no ícone de remover.`),wg(),jc(1252,`blockquote`)(1253,`p`),iO(1254,`Por parâmetro será passado o objeto do arquivo.`),wg()()()(),jc(1255,`tr`,14)(1256,`td`,15)(1257,`div`,16)(1258,`span`,17),iO(1259,` (p-success)`),nu(1260,`br`),wg()()(),jc(1261,`td`,19)(1262,`code`,20),iO(1263,`EventEmitter`),wg()(),jc(1264,`td`,21),iO(1265,`-`),wg(),jc(1266,`td`,22)(1267,`em`)(1268,`strong`),iO(1269,`(opcional)`),wg()(),jc(1270,`p`),iO(1271,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),wg(),jc(1272,`blockquote`)(1273,`p`),iO(1274,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(1275,`code`),iO(1276,`HttpResponse`),wg(),iO(1277,`.`),wg()()()(),jc(1278,`tr`,14)(1279,`td`,15)(1280,`div`,16)(1281,`span`,17),iO(1282,` (p-upload)`),nu(1283,`br`),wg()()(),jc(1284,`td`,19)(1285,`code`,20),iO(1286,`EventEmitter`),wg()(),jc(1287,`td`,21),iO(1288,`-`),wg(),jc(1289,`td`,22)(1290,`em`)(1291,`strong`),iO(1292,`(opcional)`),wg()(),jc(1293,`p`),iO(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),wg(),jc(1295,`blockquote`)(1296,`p`),iO(1297,`data, nesta propriedade pode ser informado algum dado`),wg()(),jc(1298,`pre`)(1299,`code`),iO(1300,`event.data = {id: 'id do usu\xE1rio'};
`),wg()(),jc(1301,`blockquote`)(1302,`p`),iO(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),jc(1304,`code`),iO(1305,`data`),wg(),iO(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),wg()(),jc(1307,`pre`)(1308,`code`),iO(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),wg()()()(),jc(1310,`tr`,14)(1311,`td`,15)(1312,`div`,23)(1313,`span`,24),iO(1314,` p-optional`),nu(1315,`br`),wg()()(),jc(1316,`td`,19)(1317,`code`,26),iO(1318,`boolean`),wg()(),jc(1319,`td`,21)(1320,`p`)(1321,`code`),iO(1322,`false`),wg()()(),jc(1323,`td`,22)(1324,`em`)(1325,`strong`),iO(1326,`(opcional)`),wg()(),jc(1327,`p`),iO(1328,`Define se a indicação de campo opcional será exibida.`),wg(),jc(1329,`blockquote`)(1330,`p`),iO(1331,`Não será exibida a indicação se:`),wg()(),jc(1332,`ul`)(1333,`li`),iO(1334,`O campo conter `),jc(1335,`code`),iO(1336,`p-required`),wg(),iO(1337,`;`),wg(),jc(1338,`li`),iO(1339,`Não possuir `),jc(1340,`code`),iO(1341,`p-help`),wg(),iO(1342,` e/ou `),jc(1343,`code`),iO(1344,`p-label`),wg(),iO(1345,`.`),wg()()()(),jc(1346,`tr`,14)(1347,`td`,15)(1348,`div`,23)(1349,`span`,24),iO(1350,` p-helper`),nu(1351,`br`),wg()()(),jc(1352,`td`,19)(1353,`code`,36),iO(1354,`PoHelperOptions `),wg(),jc(1355,`code`,25),iO(1356,` string`),wg()(),jc(1357,`td`,21),iO(1358,`-`),wg(),jc(1359,`td`,22)(1360,`em`)(1361,`strong`),iO(1362,`(opcional)`),wg()(),jc(1363,`p`),iO(1364,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1365,`code`),iO(1366,`p-label`),wg(),iO(1367,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1368,`code`),iO(1369,`p-label`),wg(),iO(1370,`.`),wg(),jc(1371,`blockquote`)(1372,`p`),iO(1373,`Para mais informações acesse: `),jc(1374,`a`,37),iO(1375,`https://po-ui.io/documentation/po-helper`),wg(),iO(1376,`.`),wg()(),jc(1377,`blockquote`)(1378,`p`),iO(1379,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1380,`code`),iO(1381,`p-additional-help-tooltip`),wg(),iO(1382,` e `),jc(1383,`code`),iO(1384,`p-additional-help`),wg(),iO(1385,`) será ignorado.`),wg()()()(),jc(1386,`tr`,14)(1387,`td`,15)(1388,`div`,23)(1389,`span`,24),iO(1390,` p-required`),nu(1391,`br`),wg()()(),jc(1392,`td`,19)(1393,`code`,26),iO(1394,`boolean`),wg()(),jc(1395,`td`,21)(1396,`p`)(1397,`code`),iO(1398,`false`),wg()()(),jc(1399,`td`,22)(1400,`em`)(1401,`strong`),iO(1402,`(opcional)`),wg()(),jc(1403,`p`),iO(1404,`Define que o campo será obrigatório.`),wg()()(),jc(1405,`tr`,14)(1406,`td`,15)(1407,`div`,23)(1408,`span`,24),iO(1409,` p-required-url`),nu(1410,`br`),wg()()(),jc(1411,`td`,19)(1412,`code`,26),iO(1413,`boolean`),wg()(),jc(1414,`td`,21)(1415,`p`)(1416,`code`),iO(1417,`true`),wg()()(),jc(1418,`td`,22)(1419,`em`)(1420,`strong`),iO(1421,`(opcional)`),wg()(),jc(1422,`p`),iO(1423,`Define se a propriedade `),jc(1424,`code`),iO(1425,`p-url`),wg(),iO(1426,` é obrigatória.`),wg(),jc(1427,`p`),iO(1428,`Caso a propriedade seja definida como `),jc(1429,`code`),iO(1430,`false`),wg(),iO(1431,`:`),wg(),jc(1432,`ul`)(1433,`li`),iO(1434,`o botão de "Selecionar arquivo" ficará habilitado mesmo sem a propriedade `),jc(1435,`code`),iO(1436,`p-url`),wg(),iO(1437,` definida.`),wg(),jc(1438,`li`),iO(1439,`o botão "Iniciar envio" ficará oculto até que a propriedade `),jc(1440,`code`),iO(1441,`p-url`),wg(),iO(1442,` seja definida.`),wg()(),jc(1443,`blockquote`)(1444,`p`),iO(1445,`Se utilizada com a propriedade `),jc(1446,`code`),iO(1447,`p-auto-upload`),wg(),iO(1448,` definida como `),jc(1449,`code`),iO(1450,`true`),wg(),iO(1451,` será necessário definir a propriedade `),jc(1452,`code`),iO(1453,`p-url`),wg(),iO(1454,`.`),wg()()()(),jc(1455,`tr`,14)(1456,`td`,15)(1457,`div`,23)(1458,`span`,24),iO(1459,` p-show-required`),nu(1460,`br`),wg()()(),jc(1461,`td`,19)(1462,`code`,26),iO(1463,`boolean`),wg()(),jc(1464,`td`,21),iO(1465,`-`),wg(),jc(1466,`td`,22)(1467,`p`),iO(1468,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1469,`blockquote`)(1470,`p`),iO(1471,`Não será exibida a indicação se:`),wg()(),jc(1472,`ul`)(1473,`li`),iO(1474,`Não possuir `),jc(1475,`code`),iO(1476,`p-help`),wg(),iO(1477,` e/ou `),jc(1478,`code`),iO(1479,`p-label`),wg(),iO(1480,`.`),wg()()()(),jc(1481,`tr`,14)(1482,`td`,15)(1483,`div`,23)(1484,`span`,24),iO(1485,` p-show-thumbnail`),nu(1486,`br`),wg()()(),jc(1487,`td`,19)(1488,`code`,26),iO(1489,`boolean`),wg()(),jc(1490,`td`,21)(1491,`p`)(1492,`code`),iO(1493,`true`),wg()()(),jc(1494,`td`,22)(1495,`em`)(1496,`strong`),iO(1497,`(opcional)`),wg()(),jc(1498,`p`),iO(1499,`Exibe a pré-visualização de imagens ao anexá-las.`),wg(),jc(1500,`blockquote`)(1501,`p`),iO(1502,`Propriedade funciona apenas em arquivos de formato de imagem (`),jc(1503,`code`),iO(1504,`.png`),wg(),iO(1505,`, `),jc(1506,`code`),iO(1507,`.jpg`),wg(),iO(1508,`, `),jc(1509,`code`),iO(1510,`.jpeg`),wg(),iO(1511,` e `),jc(1512,`code`),iO(1513,`.gif`),wg(),iO(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),wg()()()(),jc(1515,`tr`,14)(1516,`td`,15)(1517,`div`,23)(1518,`span`,24),iO(1519,` p-size`),nu(1520,`br`),wg()()(),jc(1521,`td`,19)(1522,`code`,25),iO(1523,`string`),wg()(),jc(1524,`td`,21)(1525,`p`)(1526,`code`),iO(1527,`medium`),wg()()(),jc(1528,`td`,22)(1529,`em`)(1530,`strong`),iO(1531,`(opcional)`),wg()(),jc(1532,`p`),iO(1533,`Define o tamanho e as ações do componente:`),wg(),jc(1534,`ul`)(1535,`li`)(1536,`code`),iO(1537,`small`),wg(),iO(1538,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1539,`li`)(1540,`code`),iO(1541,`medium`),wg(),iO(1542,`: altura do button como 44px.`),wg()(),jc(1543,`blockquote`)(1544,`p`),iO(1545,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1546,`code`),iO(1547,`medium`),wg(),iO(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1549,`a`,38),iO(1550,`po-theme`),wg(),iO(1551,`.`),wg()()()(),jc(1552,`tr`,14)(1553,`td`,15)(1554,`div`,23)(1555,`span`,24),iO(1556,` p-url`),nu(1557,`br`),wg()()(),jc(1558,`td`,19)(1559,`code`,25),iO(1560,`string`),wg()(),jc(1561,`td`,21),iO(1562,`-`),wg(),jc(1563,`td`,22)(1564,`p`),iO(1565,`URL que deve ser feita a requisição com os arquivos selecionados.`),wg()()()(),jc(1566,`h3`,10),iO(1567,`Métodos`),wg(),jc(1568,`table`,39)(1569,`tr`,14)(1570,`th`,40)(1571,`div`,23)(1572,`h4`)(1573,`span`,24),iO(1574,` clear `),wg()()()()(),jc(1575,`tr`,22)(1576,`td`,22)(1577,`p`),iO(1578,`Método responsável por `),jc(1579,`strong`),iO(1580,`limpar`),wg(),iO(1581,` o(s) arquivo(s) selecionado(s).`),wg()()()(),nu(1582,`br`),jc(1583,`table`,39)(1584,`tr`,14)(1585,`th`,40)(1586,`div`,23)(1587,`h4`)(1588,`span`,24),iO(1589,` focus `),wg()()()()(),jc(1590,`tr`,22)(1591,`td`,22)(1592,`p`),iO(1593,`Função que atribui foco ao componente.`),wg(),jc(1594,`p`),iO(1595,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1596,`pre`)(1597,`code`),iO(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),wg()()()()(),nu(1599,`br`),jc(1600,`table`,39)(1601,`tr`,14)(1602,`th`,40)(1603,`div`,23)(1604,`h4`)(1605,`span`,24),iO(1606,` closeModal `),wg()()()()(),jc(1607,`tr`,22)(1608,`td`,22)(1609,`p`),iO(1610,`Método responsável por fechar o modal.`),wg()()()(),nu(1611,`br`),jc(1612,`table`,39)(1613,`tr`,14)(1614,`th`,40)(1615,`div`,23)(1616,`h4`)(1617,`span`,24),iO(1618,` selectFiles `),wg()()()()(),jc(1619,`tr`,22)(1620,`td`,22)(1621,`p`),iO(1622,`Método responsável por `),jc(1623,`strong`),iO(1624,`abrir`),wg(),iO(1625,` a janela para seleção de arquivo(s).`),wg()()()(),nu(1626,`br`),jc(1627,`table`,39)(1628,`tr`,14)(1629,`th`,40)(1630,`div`,23)(1631,`h4`)(1632,`span`,24),iO(1633,` sendFiles `),wg()()()()(),jc(1634,`tr`,22)(1635,`td`,22)(1636,`p`),iO(1637,`Método responsável por `),jc(1638,`strong`),iO(1639,`enviar`),wg(),iO(1640,` o(s) arquivo(s) selecionado(s).`),wg()()()(),nu(1641,`br`),jc(1642,`table`,39)(1643,`tr`,14)(1644,`th`,40)(1645,`div`,23)(1646,`h4`)(1647,`span`,24),iO(1648,` showAdditionalHelp `),wg()()()()(),jc(1649,`tr`,22)(1650,`td`,22)(1651,`p`),iO(1652,`Método que exibe `),jc(1653,`code`),iO(1654,`p-helper`),wg(),iO(1655,` ou executa a ação definida em `),jc(1656,`code`),iO(1657,`p-helper{eventOnClick}`),wg(),iO(1658,` ou em `),jc(1659,`code`),iO(1660,`p-additionalHelp`),wg(),iO(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1662,`code`),iO(1663,`p-keydown`),wg(),iO(1664,`.`),wg(),jc(1665,`blockquote`)(1666,`p`),iO(1667,`Exibe ou oculta o conteúdo do componente `),jc(1668,`code`),iO(1669,`po-helper`),wg(),iO(1670,` quando o componente estiver com foco.`),wg()(),jc(1671,`pre`)(1672,`code`),iO(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),wg()(),jc(1674,`pre`)(1675,`code`),iO(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1677,`br`),jc(1678,`h3`),iO(1679,`Interfaces`),wg(),jc(1680,`h4`,41)(1681,`code`,5),iO(1682,`PoUploadFileRestrictions`),wg()(),jc(1683,`div`,2)(1684,`p`),iO(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),wg()(),jc(1686,`h4`,10),iO(1687,`Propriedades`),wg(),jc(1688,`table`,11)(1689,`tr`,12)(1690,`th`,13),iO(1691,`Nome`),wg(),jc(1692,`th`,13),iO(1693,`Tipo`),wg(),jc(1694,`th`,13),iO(1695,`Descrição`),wg()(),jc(1696,`tr`,14)(1697,`td`,15)(1698,`div`,23)(1699,`span`,24),iO(1700,` allowedExtensions`),nu(1701,`br`),wg()()(),jc(1702,`td`,19)(1703,`code`,42),iO(1704,`Array<string>`),wg()(),jc(1705,`td`,22)(1706,`em`)(1707,`strong`),iO(1708,`(opcional)`),wg()(),jc(1709,`p`),iO(1710,`Extensões permitidas de arquivos que serão enviados ao servidor, devendo ser informada uma coleção de extensões, por exemplo:`),wg(),jc(1711,`pre`)(1712,`code`),iO(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),wg()()()(),jc(1714,`tr`,14)(1715,`td`,15)(1716,`div`,23)(1717,`span`,24),iO(1718,` maxFileSize`),nu(1719,`br`),wg()()(),jc(1720,`td`,19)(1721,`code`,31),iO(1722,`number`),wg()(),jc(1723,`td`,22)(1724,`em`)(1725,`strong`),iO(1726,`(opcional)`),wg()(),jc(1727,`p`),iO(1728,`Tamanho máximo do arquivo a ser enviado ao servidor.`),wg(),jc(1729,`p`),iO(1730,`Deve ser informado um valor em `),jc(1731,`em`),iO(1732,`bytes`),wg(),iO(1733,`, por exemplo: `),jc(1734,`code`),iO(1735,`31457280`),wg(),iO(1736,` (30MB).`),wg(),jc(1737,`blockquote`)(1738,`p`),iO(1739,`Por padrão o valor é `),jc(1740,`code`),iO(1741,`30 MB`),wg(),iO(1742,`.`),wg()()()(),jc(1743,`tr`,14)(1744,`td`,15)(1745,`div`,23)(1746,`span`,24),iO(1747,` maxFiles`),nu(1748,`br`),wg()()(),jc(1749,`td`,19)(1750,`code`,31),iO(1751,`number`),wg()(),jc(1752,`td`,22)(1753,`em`)(1754,`strong`),iO(1755,`(opcional)`),wg()(),jc(1756,`p`),iO(1757,`Quantidade máxima de arquivos para o `),jc(1758,`em`),iO(1759,`upload`),wg(),iO(1760,`.`),wg(),jc(1761,`blockquote`)(1762,`p`),iO(1763,`Esta propriedade será válida somente se a propriedade `),jc(1764,`code`),iO(1765,`p-multiple`),wg(),iO(1766,` estiver habilitada e seu valor for maior do que zero.`),wg()()()(),jc(1767,`tr`,14)(1768,`td`,15)(1769,`div`,23)(1770,`span`,24),iO(1771,` minFileSize`),nu(1772,`br`),wg()()(),jc(1773,`td`,19)(1774,`code`,31),iO(1775,`number`),wg()(),jc(1776,`td`,22)(1777,`em`)(1778,`strong`),iO(1779,`(opcional)`),wg()(),jc(1780,`p`),iO(1781,`Tamanho mínimo em `),jc(1782,`em`),iO(1783,`bytes`),wg(),iO(1784,` do arquivo que será enviado ao servidor.`),wg(),jc(1785,`blockquote`)(1786,`p`),iO(1787,`Por padrão o valor é `),jc(1788,`code`),iO(1789,`0`),wg(),iO(1790,`.`),wg()()()()(),jc(1791,`h4`,41)(1792,`code`,5),iO(1793,`PoUploadLiterals`),wg()(),jc(1794,`div`,2)(1795,`p`),iO(1796,`Interface para definição das literais usadas no `),jc(1797,`code`),iO(1798,`po-upload`),wg(),iO(1799,`.`),wg()(),jc(1800,`h4`,10),iO(1801,`Propriedades`),wg(),jc(1802,`table`,11)(1803,`tr`,12)(1804,`th`,13),iO(1805,`Nome`),wg(),jc(1806,`th`,13),iO(1807,`Tipo`),wg(),jc(1808,`th`,13),iO(1809,`Descrição`),wg()(),jc(1810,`tr`,14)(1811,`td`,15)(1812,`div`,23)(1813,`span`,24),iO(1814,` close`),nu(1815,`br`),wg()()(),jc(1816,`td`,19)(1817,`code`,25),iO(1818,`string`),wg()(),jc(1819,`td`,22)(1820,`em`)(1821,`strong`),iO(1822,`(opcional)`),wg()(),jc(1823,`p`),iO(1824,`Texto do leitor de tela ao focar no ícone de fechar.`),wg()()(),jc(1825,`tr`,14)(1826,`td`,15)(1827,`div`,23)(1828,`span`,24),iO(1829,` continue`),nu(1830,`br`),wg()()(),jc(1831,`td`,19)(1832,`code`,25),iO(1833,`string`),wg()(),jc(1834,`td`,22)(1835,`em`)(1836,`strong`),iO(1837,`(opcional)`),wg()(),jc(1838,`p`),iO(1839,`Texto do botão padrão do modal de pré-visualizar.`),wg()()(),jc(1840,`tr`,14)(1841,`td`,15)(1842,`div`,23)(1843,`span`,24),iO(1844,` doneText`),nu(1845,`br`),wg()()(),jc(1846,`td`,19)(1847,`code`,25),iO(1848,`string`),wg()(),jc(1849,`td`,22)(1850,`em`)(1851,`strong`),iO(1852,`(opcional)`),wg()(),jc(1853,`p`),iO(1854,`Texto a ser exibido no container de informação quando o estado for de sucesso.`),wg()()(),jc(1855,`tr`,14)(1856,`td`,15)(1857,`div`,23)(1858,`span`,24),iO(1859,` dragFilesHere`),nu(1860,`br`),wg()()(),jc(1861,`td`,19)(1862,`code`,25),iO(1863,`string`),wg()(),jc(1864,`td`,22)(1865,`em`)(1866,`strong`),iO(1867,`(opcional)`),wg()(),jc(1868,`p`),iO(1869,`Texto indicativo para a área onde os arquivos devem ser arrastados quando utilizada a propriedade `),jc(1870,`code`),iO(1871,`p-drag-drop`),wg(),iO(1872,`.`),wg()()(),jc(1873,`tr`,14)(1874,`td`,15)(1875,`div`,23)(1876,`span`,24),iO(1877,` dragFoldersHere`),nu(1878,`br`),wg()()(),jc(1879,`td`,19)(1880,`code`,25),iO(1881,`string`),wg()(),jc(1882,`td`,22)(1883,`em`)(1884,`strong`),iO(1885,`(opcional)`),wg()(),jc(1886,`p`),iO(1887,`Texto indicativo para a área onde os diretórios devem ser arrastados quando utilizada a propriedade `),jc(1888,`code`),iO(1889,`p-drag-drop`),wg(),iO(1890,`.`),wg()()(),jc(1891,`tr`,14)(1892,`td`,15)(1893,`div`,23)(1894,`span`,24),iO(1895,` dropFilesHere`),nu(1896,`br`),wg()()(),jc(1897,`td`,19)(1898,`code`,25),iO(1899,`string`),wg()(),jc(1900,`td`,22)(1901,`em`)(1902,`strong`),iO(1903,`(opcional)`),wg()(),jc(1904,`p`),iO(1905,`Texto indicativo para a área onde os arquivos devem ser soltos quando utilizada a propriedade `),jc(1906,`code`),iO(1907,`p-drag-drop`),wg()()()(),jc(1908,`tr`,14)(1909,`td`,15)(1910,`div`,23)(1911,`span`,24),iO(1912,` dropFoldersHere`),nu(1913,`br`),wg()()(),jc(1914,`td`,19)(1915,`code`,25),iO(1916,`string`),wg()(),jc(1917,`td`,22)(1918,`em`)(1919,`strong`),iO(1920,`(opcional)`),wg()(),jc(1921,`p`),iO(1922,`Texto indicativo para a área onde os diretórios devem ser soltos quando utilizada a propriedade `),jc(1923,`code`),iO(1924,`p-drag-drop`),wg(),iO(1925,`.`),wg()()(),jc(1926,`tr`,14)(1927,`td`,15)(1928,`div`,23)(1929,`span`,24),iO(1930,` errorOccurred`),nu(1931,`br`),wg()()(),jc(1932,`td`,19)(1933,`code`,25),iO(1934,`string`),wg()(),jc(1935,`td`,22)(1936,`em`)(1937,`strong`),iO(1938,`(opcional)`),wg()(),jc(1939,`p`),iO(1940,`Texto a ser exibido quando ocorrer erro no envio do arquivo.`),wg()()(),jc(1941,`tr`,14)(1942,`td`,15)(1943,`div`,23)(1944,`span`,24),iO(1945,` files`),nu(1946,`br`),wg()()(),jc(1947,`td`,19)(1948,`code`,25),iO(1949,`string`),wg()(),jc(1950,`td`,22)(1951,`em`)(1952,`strong`),iO(1953,`(opcional)`),wg()(),jc(1954,`p`),iO(1955,`Parâmetro `),jc(1956,`em`),iO(1957,`files`),wg(),iO(1958,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),jc(1959,`em`),iO(1960,`dragDrop`),wg(),iO(1961,`.`),wg()()(),jc(1962,`tr`,14)(1963,`td`,15)(1964,`div`,23)(1965,`span`,24),iO(1966,` folders`),nu(1967,`br`),wg()()(),jc(1968,`td`,19)(1969,`code`,25),iO(1970,`string`),wg()(),jc(1971,`td`,22)(1972,`em`)(1973,`strong`),iO(1974,`(opcional)`),wg()(),jc(1975,`p`),iO(1976,`Parâmetro `),jc(1977,`em`),iO(1978,`folders`),wg(),iO(1979,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),jc(1980,`em`),iO(1981,`dragDrop`),wg(),iO(1982,`.`),wg()()(),jc(1983,`tr`,14)(1984,`td`,15)(1985,`div`,23)(1986,`span`,24),iO(1987,` invalidDropArea`),nu(1988,`br`),wg()()(),jc(1989,`td`,19)(1990,`code`,25),iO(1991,`string`),wg()(),jc(1992,`td`,22)(1993,`em`)(1994,`strong`),iO(1995,`(opcional)`),wg()(),jc(1996,`p`),iO(1997,`Texto exibido caso o usuário arrastar um arquivo para um local inválido ao utilizar a opção de `),jc(1998,`em`),iO(1999,`dragDrop`),wg(),iO(2e3,`.`),wg()()(),jc(2001,`tr`,14)(2002,`td`,15)(2003,`div`,23)(2004,`span`,24),iO(2005,` preview`),nu(2006,`br`),wg()()(),jc(2007,`td`,19)(2008,`code`,25),iO(2009,`string`),wg()(),jc(2010,`td`,22)(2011,`em`)(2012,`strong`),iO(2013,`(opcional)`),wg()(),jc(2014,`p`),iO(2015,`Título do modal de pré-visualizar.`),wg()()(),jc(2016,`tr`,14)(2017,`td`,15)(2018,`div`,23)(2019,`span`,24),iO(2020,` selectFile`),nu(2021,`br`),wg()()(),jc(2022,`td`,19)(2023,`code`,25),iO(2024,`string`),wg()(),jc(2025,`td`,22)(2026,`em`)(2027,`strong`),iO(2028,`(opcional)`),wg()(),jc(2029,`p`),iO(2030,`Texto exibido no label do botão de seleção dos arquivos.`),wg()()(),jc(2031,`tr`,14)(2032,`td`,15)(2033,`div`,23)(2034,`span`,24),iO(2035,` selectFiles`),nu(2036,`br`),wg()()(),jc(2037,`td`,19)(2038,`code`,25),iO(2039,`string`),wg()(),jc(2040,`td`,22)(2041,`em`)(2042,`strong`),iO(2043,`(opcional)`),wg()(),jc(2044,`p`),iO(2045,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),jc(2046,`code`),iO(2047,`p-multiple`),wg(),iO(2048,`.`),wg()()(),jc(2049,`tr`,14)(2050,`td`,15)(2051,`div`,23)(2052,`span`,24),iO(2053,` selectFilesOnComputer`),nu(2054,`br`),wg()()(),jc(2055,`td`,19)(2056,`code`,25),iO(2057,`string`),wg()(),jc(2058,`td`,22)(2059,`em`)(2060,`strong`),iO(2061,`(opcional)`),wg()(),jc(2062,`p`),iO(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),jc(2064,`em`),iO(2065,`dragDrop`),wg(),iO(2066,`.`),wg()()(),jc(2067,`tr`,14)(2068,`td`,15)(2069,`div`,23)(2070,`span`,24),iO(2071,` selectFolder`),nu(2072,`br`),wg()()(),jc(2073,`td`,19)(2074,`code`,25),iO(2075,`string`),wg()(),jc(2076,`td`,22)(2077,`em`)(2078,`strong`),iO(2079,`(opcional)`),wg()(),jc(2080,`p`),iO(2081,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),jc(2082,`code`),iO(2083,`p-directory`),wg(),iO(2084,`.`),wg()()(),jc(2085,`tr`,14)(2086,`td`,15)(2087,`div`,23)(2088,`span`,24),iO(2089,` selectFolderOnComputer`),nu(2090,`br`),wg()()(),jc(2091,`td`,19)(2092,`code`,25),iO(2093,`string`),wg()(),jc(2094,`td`,22)(2095,`em`)(2096,`strong`),iO(2097,`(opcional)`),wg()(),jc(2098,`p`),iO(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),jc(2100,`em`),iO(2101,`dragDrop`),wg(),iO(2102,`.`),wg()()(),jc(2103,`tr`,14)(2104,`td`,15)(2105,`div`,23)(2106,`span`,24),iO(2107,` sentWithSuccess`),nu(2108,`br`),wg()()(),jc(2109,`td`,19)(2110,`code`,25),iO(2111,`string`),wg()(),jc(2112,`td`,22)(2113,`em`)(2114,`strong`),iO(2115,`(opcional)`),wg()(),jc(2116,`p`),iO(2117,`Texto a ser exibido quando o envio do arquivo for realizado com sucesso.`),wg()()(),jc(2118,`tr`,14)(2119,`td`,15)(2120,`div`,23)(2121,`span`,24),iO(2122,` startSending`),nu(2123,`br`),wg()()(),jc(2124,`td`,19)(2125,`code`,25),iO(2126,`string`),wg()(),jc(2127,`td`,22)(2128,`em`)(2129,`strong`),iO(2130,`(opcional)`),wg()(),jc(2131,`p`),iO(2132,`Texto exibido no label do botão para iniciar o envio dos arquivos.`),wg()()(),jc(2133,`tr`,14)(2134,`td`,15)(2135,`div`,23)(2136,`span`,24),iO(2137,` thumbnail`),nu(2138,`br`),wg()()(),jc(2139,`td`,19)(2140,`code`,25),iO(2141,`string`),wg()(),jc(2142,`td`,22)(2143,`em`)(2144,`strong`),iO(2145,`(opcional)`),wg()(),jc(2146,`p`),iO(2147,`Texto do leitor da miniatura da imagem.`),wg()()(),jc(2148,`tr`,14)(2149,`td`,15)(2150,`div`,23)(2151,`span`,24),iO(2152,` tryAgain`),nu(2153,`br`),wg()()(),jc(2154,`td`,19)(2155,`code`,25),iO(2156,`string`),wg()(),jc(2157,`td`,22)(2158,`em`)(2159,`strong`),iO(2160,`(opcional)`),wg()(),jc(2161,`p`),iO(2162,`Texto de Tente novamente ao ocorrer erro ao enviar.`),wg()()(),jc(2163,`tr`,14)(2164,`td`,15)(2165,`div`,23)(2166,`span`,24),iO(2167,` uploadingText`),nu(2168,`br`),wg()()(),jc(2169,`td`,19)(2170,`code`,25),iO(2171,`string`),wg()(),jc(2172,`td`,22)(2173,`em`)(2174,`strong`),iO(2175,`(opcional)`),wg()(),jc(2176,`p`),iO(2177,`Texto a ser exibido no container de informação quando o estado for enviando.`),wg()()()(),jc(2178,`h4`,41)(2179,`code`,5),iO(2180,`PoProgressAction`),wg()(),jc(2181,`div`,2)(2182,`p`),iO(2183,`Interface para as ações dos componentes po-progress e po-upload.`),wg()(),jc(2184,`h4`,10),iO(2185,`Propriedades`),wg(),jc(2186,`table`,11)(2187,`tr`,12)(2188,`th`,13),iO(2189,`Nome`),wg(),jc(2190,`th`,13),iO(2191,`Tipo`),wg(),jc(2192,`th`,13),iO(2193,`Descrição`),wg()(),jc(2194,`tr`,14)(2195,`td`,15)(2196,`div`,23)(2197,`span`,24),iO(2198,` disabled`),nu(2199,`br`),wg()()(),jc(2200,`td`,19)(2201,`code`,26),iO(2202,`boolean `),wg(),jc(2203,`code`,43),iO(2204,` Function`),wg()(),jc(2205,`td`,22)(2206,`em`)(2207,`strong`),iO(2208,`(opcional)`),wg()(),jc(2209,`p`),iO(2210,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),wg(),jc(2211,`p`),iO(2212,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),wg()()(),jc(2213,`tr`,14)(2214,`td`,15)(2215,`div`,23)(2216,`span`,24),iO(2217,` icon`),nu(2218,`br`),wg()()(),jc(2219,`td`,19)(2220,`code`,25),iO(2221,`string `),wg(),jc(2222,`code`,44),iO(2223,` TemplateRef<void>`),wg()(),jc(2224,`td`,22)(2225,`em`)(2226,`strong`),iO(2227,`(opcional)`),wg()(),jc(2228,`p`),iO(2229,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),wg(),jc(2230,`p`),iO(2231,`É possível usar qualquer um dos ícones da `),jc(2232,`a`,45),iO(2233,`Biblioteca de ícones`),wg(),iO(2234,`. conforme exemplo abaixo:`),wg(),jc(2235,`pre`)(2236,`code`),iO(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),wg()(),jc(2238,`p`),iO(2239,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),wg(),jc(2240,`pre`)(2241,`code`),iO(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),wg()(),jc(2243,`p`),iO(2244,`Outra opção seria a customização do ícone através do `),jc(2245,`code`),iO(2246,`TemplateRef`),wg(),iO(2247,`, conforme exemplo abaixo:
component.html:`),wg(),jc(2248,`pre`)(2249,`code`),iO(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),wg()(),jc(2251,`p`),iO(2252,`component.ts:`),wg(),jc(2253,`pre`)(2254,`code`),iO(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),wg()()()(),jc(2256,`tr`,14)(2257,`td`,15)(2258,`div`,23)(2259,`span`,24),iO(2260,` label`),nu(2261,`br`),wg()()(),jc(2262,`td`,19)(2263,`code`,25),iO(2264,`string`),wg()(),jc(2265,`td`,22)(2266,`em`)(2267,`strong`),iO(2268,`(opcional)`),wg()(),jc(2269,`p`),iO(2270,`Rótulo da ação.`),wg()()(),jc(2271,`tr`,14)(2272,`td`,15)(2273,`div`,23)(2274,`span`,24),iO(2275,` type`),nu(2276,`br`),wg()()(),jc(2277,`td`,19)(2278,`code`,25),iO(2279,`string`),wg()(),jc(2280,`td`,22)(2281,`em`)(2282,`strong`),iO(2283,`(opcional)`),wg()(),jc(2284,`p`),iO(2285,`Define a cor do item, sendo `),jc(2286,`code`),iO(2287,`default`),wg(),iO(2288,` o padrão.`),wg(),jc(2289,`p`),iO(2290,`Valores válidos:`),wg(),jc(2291,`ul`)(2292,`li`)(2293,`code`),iO(2294,`default`),wg()(),jc(2295,`li`)(2296,`code`),iO(2297,`danger`),wg(),iO(2298,` - indicado para ações exclusivas (excluir, sair).`),wg()()()(),jc(2299,`tr`,14)(2300,`td`,15)(2301,`div`,23)(2302,`span`,24),iO(2303,` visible`),nu(2304,`br`),wg()()(),jc(2305,`td`,19)(2306,`code`,26),iO(2307,`boolean `),wg(),jc(2308,`code`,43),iO(2309,` Function`),wg()(),jc(2310,`td`,22)(2311,`em`)(2312,`strong`),iO(2313,`(opcional)`),wg()(),jc(2314,`p`),iO(2315,`Define se a ação será visível.`),wg(),jc(2316,`blockquote`)(2317,`p`),iO(2318,`Caso o valor não seja especificado a ação será visível.`),wg()(),jc(2319,`p`),iO(2320,`Opções para tornar a ação visível ou não:`),wg(),jc(2321,`ul`)(2322,`li`)(2323,`p`),iO(2324,`Função que deve retornar um booleano.`),wg()(),jc(2325,`li`)(2326,`p`),iO(2327,`Informar diretamente um valor booleano.`),wg()()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var vt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Upload`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-upload-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-upload-basic-view`)(6,`sample-po-upload-labs-view`)(7,`sample-po-upload-resume-view`)(8,`sample-po-upload-rs-view`)(9,`sample-po-upload-download-view`)(10,`sample-po-upload-preview-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,Fe,qe,ke,Le,Re,Oe,je],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(vt),C1]})}return a})();var cn=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,Ie]})}return a})();export{cn as DocPoUploadModule};