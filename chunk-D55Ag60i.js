import{$i as pt$1,$r as VN,Br as Qn,Ci as fo,Cr as KP,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kn as Ax,Lt as bae,M as Ef,Mt as Zze,Qn as C9,Sa as zO,Sn as sae,Ur as RN,Vt as doe,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,gi as eF,gn as poe,ht as S4,i as _a,in as kte,ji as ho,k as D4,ki as he,kn as v4,na as qP,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,ra as rk,rr as DN,si as aN,sr as FN,st as Ooe,ti as Wx,ua as ug,wr as Kc,yt as T4,zi as kL,zr as Pt,zt as bt}from"./main-EZZF3RMT.js";var De=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`upload`,`p-label`,`PO Upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`]],template:function(r,i){r&1&&Kc(0,`po-upload`,0)},dependencies:[S4],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Upload Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-upload-basic/sample-po-upload-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-upload-basic/sample-po-upload-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-upload-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,He,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,De],encapsulation:2,changeDetection:1})}return a})();function Ge(a,Ne){if(a&1&&(Ac(0,`div`)(1,`po-widget`,22)(2,`form`,23),Kc(3,`po-input`,24),p0(),Kc(4,`po-select`,25),p0(),Kc(5,`po-select`,26),p0(),Kc(6,`po-switch`,27),p0(),Kc(7,`po-switch`,28),p0(),ug()()()),a&2){let d=Wx();Hp(2),cE(`formGroup`,d.actionForm),Hp(),m0(),Hp(),cE(`p-options`,d.iconOptions),m0(),Hp(),cE(`p-options`,d.typeOptions),m0(),Hp(),m0(),Hp(),m0()}}var Me=(()=>{class a{fb=f(eF);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:`autoupload`,label:`Automatic upload`},{value:`directory`,label:`Directory`},{value:`disabled`,label:`Disabled`},{value:`disabledRemoveFile`,label:`Disabled Remove File`},{value:`dragDrop`,label:`Drag Drop`},{value:`requiredUrl`,label:`required Url`},{value:`multiple`,label:`Multiple upload`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`restrictionsInfo`,label:`Hide Restrictions Info`},{value:`selectButton`,label:`Hide Select Files Button`},{value:`sendButton`,label:`Hide Send Files Button`},{value:`showCustomAction`,label:`Add Custom Action to Progress`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`showThumbnail`,label:`Show Thumbnail`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(d){this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch(r){this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(`,`).map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText=``,this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals=``,this.modalActions=``,this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url=`https://po-sample-api.onrender.com/v1/uploads/addFile`,this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.customModalActions=[],this.size=`medium`}getValueInBytes(d){return 1048576*d}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-labs`]],standalone:!1,decls:29,vars:53,consts:[[`fRestrictions`,`ngForm`],[`name`,`upload`,3,`ngModelChange`,`p-custom-action-click`,`p-error`,`p-keydown`,`p-success`,`p-upload`,`p-open-modal-preview`,`p-remove`,`ngModel`,`p-helper`,`p-auto-upload`,`p-directory`,`p-disabled`,`p-required-url`,`p-disabled-remove-file`,`p-drag-drop`,`p-drag-drop-height`,`p-form-field`,`p-help`,`p-hide-select-button`,`p-hide-restrictions-info`,`p-hide-send-button`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-optional`,`p-required`,`p-show-required`,`p-show-thumbnail`,`p-restrictions`,`p-size`,`p-url`,`p-headers`,`p-custom-action`,`p-label-text-wrap`,`p-compact-label`,`p-custom-modal-actions`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`allowedExtensions`,`p-help`,`Digite as extensões permitidas separadas por vírgula`,`p-label`,`Allowed Extensions`,`p-placeholder`,`.png, .jpeg, .jpg`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxFiles`,`p-clean`,``,`p-help`,`Requer p-multiple habilitado`,`p-label`,`Max Files`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`dragDropHeight`,`p-clean`,``,`p-help`,`Altura da área de arrastar e soltar`,`p-label`,`Drag Drop Height`,`p-min`,`160`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Min File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Max File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`formField`,`p-clean`,``,`p-label`,`Form Field`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,`p-required`,``,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`headers`,`p-help`,`Ex.: {"Authorization": "12312414"}`,`p-label`,`Headers`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`customModalActions`,`p-help`,`Ex.: [{"label": "Label", "disabled": false}]`,`p-label`,`Custom Modal Actions`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`],[`name`,`properties`,`p-columns`,`4`,`p-help`,`Select any options`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`]],template:function(r,i){if(r&1){let m=Bx();Ac(0,`po-upload`,1),RE(`ngModelChange`,function(l){return Jv(m),DN(i.upload,l)||(i.upload=l),e_(l)}),pt$1(`p-custom-action-click`,function(){return i.changeEvent(`p-custom-action-click`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-success`,function(){return i.changeEvent(`p-success`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-open-modal-preview`,function(){return i.changeEvent(`p-open-modal-preview`)})(`p-remove`,function(){return i.changeEvent(`p-remove`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3),FN(4,`json`),Kc(5,`po-info`,4),ug(),Kc(6,`po-divider`),Ac(7,`div`,2)(8,`form`,null,0)(10,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(m),DN(i.allowedExtensions,l)||(i.allowedExtensions=l),e_(l)}),pt$1(`p-change`,function(){return i.onChangeExtension()}),ug(),p0(),Ac(11,`po-number`,6),RE(`ngModelChange`,function(l){return Jv(m),DN(i.maxFiles,l)||(i.maxFiles=l),e_(l)}),pt$1(`p-change`,function(){return i.onChangeMaxFiles(i.maxFiles)}),ug(),p0(),Ac(12,`po-number`,7),RE(`ngModelChange`,function(l){return Jv(m),DN(i.dragDropHeight,l)||(i.dragDropHeight=l),e_(l)}),ug(),p0(),Ac(13,`po-number`,8),RE(`ngModelChange`,function(l){return Jv(m),DN(i.minSize,l)||(i.minSize=l),e_(l)}),pt$1(`p-change`,function(){return i.onChangeMinSize(i.minSize)}),ug(),p0(),Ac(14,`po-number`,9),RE(`ngModelChange`,function(l){return Jv(m),DN(i.maxSize,l)||(i.maxSize=l),e_(l)}),pt$1(`p-change`,function(){return i.onChangeMaxSize(i.maxSize)}),ug(),p0(),Kc(15,`po-divider`),Ac(16,`po-input`,10),RE(`ngModelChange`,function(l){return Jv(m),DN(i.label,l)||(i.label=l),e_(l)}),ug(),p0(),Ac(17,`po-input`,11),RE(`ngModelChange`,function(l){return Jv(m),DN(i.help,l)||(i.help=l),e_(l)}),ug(),p0(),Ac(18,`po-input`,12),RE(`ngModelChange`,function(l){return Jv(m),DN(i.helperText,l)||(i.helperText=l),e_(l)}),ug(),p0(),Ac(19,`po-input`,13),RE(`ngModelChange`,function(l){return Jv(m),DN(i.formField,l)||(i.formField=l),e_(l)}),ug(),p0(),Ac(20,`po-input`,14),RE(`ngModelChange`,function(l){return Jv(m),DN(i.url,l)||(i.url=l),e_(l)}),ug(),p0(),Ac(21,`po-input`,15),RE(`ngModelChange`,function(l){return Jv(m),DN(i.headersLabs,l)||(i.headersLabs=l),e_(l)}),pt$1(`p-change`,function(l){return i.onChangeHeaders(l)}),ug(),p0(),Ac(22,`po-input`,16),RE(`ngModelChange`,function(l){return Jv(m),DN(i.literals,l)||(i.literals=l),e_(l)}),pt$1(`p-change`,function(){return i.changeLiterals()}),ug(),p0(),Ac(23,`po-input`,17),RE(`ngModelChange`,function(l){return Jv(m),DN(i.modalActions,l)||(i.modalActions=l),e_(l)}),pt$1(`p-change`,function(){return i.changeModalActions()}),ug(),p0(),Ac(24,`po-checkbox-group`,18),RE(`ngModelChange`,function(l){return Jv(m),DN(i.properties,l)||(i.properties=l),e_(l)}),ug(),p0(),Rx(25,Ge,8,3,`div`),Ac(26,`po-radio-group`,19),RE(`ngModelChange`,function(l){return Jv(m),DN(i.size,l)||(i.size=l),e_(l)}),ug(),p0(),Ac(27,`div`,20)(28,`po-button`,21),pt$1(`p-click`,function(){return i.restore()}),ug()()()()}r&2&&(TE(`ngModel`,i.upload),cE(`p-helper`,i.helperText)(`p-auto-upload`,i.properties.includes(`autoupload`))(`p-directory`,i.properties.includes(`directory`))(`p-disabled`,i.properties.includes(`disabled`))(`p-required-url`,i.properties.includes(`requiredUrl`))(`p-disabled-remove-file`,i.properties.includes(`disabledRemoveFile`))(`p-drag-drop`,i.properties.includes(`dragDrop`))(`p-drag-drop-height`,i.dragDropHeight)(`p-form-field`,i.formField)(`p-help`,i.help)(`p-hide-select-button`,i.properties.includes(`selectButton`))(`p-hide-restrictions-info`,i.properties.includes(`restrictionsInfo`))(`p-hide-send-button`,i.properties.includes(`sendButton`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-multiple`,i.properties.includes(`multiple`))(`p-optional`,i.properties.includes(`optional`))(`p-required`,i.properties.includes(`required`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-thumbnail`,i.properties.includes(`showThumbnail`))(`p-restrictions`,i.restrictions)(`p-size`,i.size)(`p-url`,i.url)(`p-headers`,i.headers)(`p-custom-action`,i.action)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-custom-modal-actions`,i.customModalActions),m0(),Hp(3),cE(`p-value`,VN(4,51,i.upload)),Hp(2),cE(`p-value`,i.event),Hp(5),TE(`ngModel`,i.allowedExtensions),m0(),Hp(),TE(`ngModel`,i.maxFiles),m0(),Hp(),TE(`ngModel`,i.dragDropHeight),m0(),Hp(),TE(`ngModel`,i.minSize),m0(),Hp(),TE(`ngModel`,i.maxSize),m0(),Hp(2),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.formField),m0(),Hp(),TE(`ngModel`,i.url),m0(),Hp(),TE(`ngModel`,i.headersLabs),m0(),Hp(),TE(`ngModel`,i.literals),m0(),Hp(),TE(`ngModel`,i.modalActions),cE(`p-disabled`,!i.properties.includes(`showThumbnail`)),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),Ax(i.properties.includes(`showCustomAction`)?25:-1),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,KP,qP,ni,Ef,l4,D4,roe,kte,poe,v4,S4,hoe,Ooe,rk],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Upload Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-upload-labs/sample-po-upload-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-upload
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-upload-labs/sample-po-upload-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-upload-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ke,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Me],encapsulation:2,changeDetection:1})}return a})();var Xe=[`formOpportunity`];var Ze=()=>({maxFileSize:`204800`});var Ue=(()=>{class a{poNotification=f(Ou);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success(`You were applied successfully`)}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-resume`]],viewQuery:function(r,i){if(r&1&&Xc(Xe,7),r&2){let m;fo(m=ho())&&(i.formOpportunity=m.first)}},standalone:!1,decls:12,vars:7,consts:[[`formOpportunity`,`ngForm`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Full Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`biograph`,`p-label`,`Biograph`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`linkedin`,`p-clean`,``,`p-label`,`LinkedIn URL`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`resume`,`p-label`,`Resume`,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-md-12`,3,`ngModelChange`,`p-error`,`p-success`,`ngModel`,`p-restrictions`],[`p-label`,`Apply`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let m=Bx();Ac(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),RE(`ngModelChange`,function(l){return Jv(m),DN(i.name,l)||(i.name=l),e_(l)}),ug(),p0(),ug(),Ac(4,`div`,1)(5,`po-textarea`,3),RE(`ngModelChange`,function(l){return Jv(m),DN(i.biograph,l)||(i.biograph=l),e_(l)}),ug(),p0(),ug(),Ac(6,`div`,1)(7,`po-url`,4),RE(`ngModelChange`,function(l){return Jv(m),DN(i.linkedin,l)||(i.linkedin=l),e_(l)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-upload`,5),RE(`ngModelChange`,function(l){return Jv(m),DN(i.resume,l)||(i.resume=l),e_(l)}),pt$1(`p-error`,function(){return i.resumeUploadError()})(`p-success`,function(){return i.resumeUploadSuccess()}),ug(),p0(),ug(),Ac(10,`div`,1)(11,`po-button`,6),pt$1(`p-click`,function(){return i.apply()}),ug()()()}if(r&2){let m=Zx(1);Hp(3),TE(`ngModel`,i.name),m0(),Hp(2),TE(`ngModel`,i.biograph),m0(),Hp(2),TE(`ngModel`,i.linkedin),m0(),Hp(2),TE(`ngModel`,i.resume),cE(`p-restrictions`,RN(6,Ze)),m0(),Hp(2),cE(`p-disabled`,m.invalid||!i.uploadedResume)}},dependencies:[b9,D9,C9,BP,LP,ni,D4,doe,S4,T4],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-resume-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Upload - Resume`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-upload-resume/sample-po-upload-resume.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #formOpportunity="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-upload-resume/sample-po-upload-resume.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-upload-resume`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,et,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ue],encapsulation:2,changeDetection:1})}return a})();var nt=[`upload`];var it=[`stepper`];var ot=[`submitForm`];var at=[`sucessData`];var lt=a=>({"po-invisible":a});function rt(a,Ne){if(a&1){let d=Bx();Ac(0,`div`,8)(1,`div`,9)(2,`p`,11),vN(3,`Confirm informations`),ug()(),Kc(4,`po-info`,28)(5,`po-info`,29)(6,`po-info`,30),Ac(7,`po-button`,31),pt$1(`p-click`,function(){Jv(d);let i=Wx();return e_(i.confirmSubmit())}),ug()()}if(a&2){let d=Wx();Hp(4),cE(`p-value`,d.project[0].name||`N/D`),Hp(),cE(`p-value`,d.title||`N/D`),Hp(),cE(`p-value`,d.description||`N/D`)}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:`Return`};description;project=[];restrictions={allowedExtensions:[`.zip`,`.7z`,`.tar`,`.wim`]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-rs`]],viewQuery:function(r,i){if(r&1&&Xc(nt,7)(it,7)(ot,7)(at,7),r&2){let m;fo(m=ho())&&(i.upload=m.first),fo(m=ho())&&(i.stepper=m.first),fo(m=ho())&&(i.submitForm=m.first),fo(m=ho())&&(i.sucessData=m.first)}},standalone:!1,decls:47,vars:15,consts:[[`stepper`,``],[`submitForm`,`ngForm`],[`upload`,``],[`sucessData`,``],[1,`po-row`],[`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`42`,1,`po-lg-10`,`po-offset-lg-2`,`po-offset-xl-2`],[`p-label`,`Welcome`],[`p-title`,`Realize & Show`,1,`po-lg-8`,`po-mt-2`],[1,`tht-row`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-text-large`],[`p-label`,`Yes!`,`p-kind`,`primary`,1,`po-sm-12`,`po-mt-2`,3,`p-click`],[`p-label`,`Submit`,3,`p-can-active-next-step`],[1,`po-lg-10`],[1,`po-font-subtitle`],[1,`po-font-text-small-bold`],[1,`po-font-title`,`po-lg-2`],[`p-icon`,`an an-cloud-arrow-up`,1,`po-clickable`,3,`click`],[`p-icon`,`an an-fill an-x-circle`,1,`po-clickable`,3,`click`,`ngClass`],[1,`po-sm-12`,`po-mt-3`,`po-font-text-bold`],[`name`,`project`,`p-hide-select-button`,``,`p-hide-send-button`,``,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-restrictions`],[`name`,`title`,`p-label`,`Title`,`p-placeholder`,`Be creative`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`description`,`p-label`,`Description`,`p-maxlength`,`140`,`p-placeholder`,`Resume on few words`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Done`,1,`po-sm-12`,`po-mt-2`,3,`p-click`,`p-disabled`],[`p-label`,`Confirm`],[`p-title`,`Confirmation`,3,`p-primary-action`],[1,`po-sm-12`,`po-font-title`],[`p-label`,`File name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Title`,1,`po-md-4`,3,`p-value`],[`p-label`,`Description`,1,`po-md-4`,3,`p-value`],[`p-label`,`Confirm`,1,`po-sm-12`,`po-mt-2`,`po-mb-2`,3,`p-click`]],template:function(r,i){if(r&1){let m=Bx();Ac(0,`div`,4)(1,`po-stepper`,5,0)(3,`po-step`,6)(4,`po-widget`,7)(5,`div`,8)(6,`div`,9)(7,`h1`,10),vN(8,`Welcome, TOTVS!`),ug(),Ac(9,`p`,11),vN(10,`Let's submit your project?`),ug()()(),Ac(11,`div`,8)(12,`po-button`,12),pt$1(`p-click`,function(){Jv(m);let l=Zx(2);return e_(l.next())}),ug()()()(),Ac(13,`po-step`,13)(14,`po-widget`,7)(15,`form`,null,1)(17,`div`,4)(18,`div`,14)(19,`div`,4)(20,`p`,15),vN(21,`Please, select your project:`),ug()(),Ac(22,`div`,4)(23,`p`,16),vN(24,`*Upload a zip file containing your project.`),ug()()(),Ac(25,`div`,17)(26,`po-icon`,18),pt$1(`click`,function(){Jv(m);let l=Zx(32);return e_(l.selectFiles())}),ug(),Ac(27,`po-icon`,19),pt$1(`click`,function(){Jv(m);let l=Zx(32);return e_(l.clear())}),ug()()(),Ac(28,`div`,4)(29,`label`,20),vN(30,`Attached`),ug(),Ac(31,`po-upload`,21,2),RE(`ngModelChange`,function(l){return Jv(m),DN(i.project,l)||(i.project=l),e_(l)}),ug(),p0(),ug(),Ac(33,`div`,4)(34,`po-input`,22),RE(`ngModelChange`,function(l){return Jv(m),DN(i.title,l)||(i.title=l),e_(l)}),ug(),p0(),ug(),Ac(35,`div`,4)(36,`po-textarea`,23),RE(`ngModelChange`,function(l){return Jv(m),DN(i.description,l)||(i.description=l),e_(l)}),ug(),p0(),ug(),Ac(37,`div`,8)(38,`po-button`,24),pt$1(`p-click`,function(){return i.submitProject()}),ug()()()()(),Ac(39,`po-step`,25)(40,`po-widget`,7),Rx(41,rt,8,3,`div`,8),ug()()()(),Ac(42,`po-modal`,26,3)(44,`div`,4)(45,`p`,27),vN(46,`Project successfully submited!`),ug()()()}r&2&&(Hp(13),cE(`p-can-active-next-step`,i.canSubmitProject.bind(i)),Hp(14),cE(`ngClass`,AN(13,lt,i.project.length<1)),Hp(2),Pt(`po-invisible`,i.project.length<1),Hp(2),TE(`ngModel`,i.project),cE(`p-restrictions`,i.restrictions),m0(),Hp(3),TE(`ngModel`,i.title),cE(`p-disabled`,i.project.length<1),m0(),Hp(2),TE(`ngModel`,i.description),cE(`p-disabled`,i.project.length<1),m0(),Hp(2),cE(`p-disabled`,i.canSubmitProject()),Hp(3),Ax(i.canSubmitProject()?41:-1),Hp(),cE(`p-primary-action`,i.confirm))},dependencies:[zO,b9,D9,C9,BP,LP,ni,D4,doe,S4,bt,hoe,ta,sae,Zze,Ooe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-rs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Upload - Realize & Show`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-upload-rs/sample-po-upload-rs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-upload-rs/sample-po-upload-rs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-upload-rs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,pt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ae],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{customAction={icon:`an an-download`,type:`default`,visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error(`Arquivo inválido ou não encontrado.`);return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement(`a`);i.href=r,i.download=d.name,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-download`]],standalone:!1,decls:1,vars:2,consts:[[`name`,`upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-custom-action-click`,`p-success`,`p-custom-action`,`p-multiple`]],template:function(r,i){r&1&&(Ac(0,`po-upload`,0),pt$1(`p-custom-action-click`,function(s){return i.onCustomActionClick(s)})(`p-success`,function(){return i.uploadSuccess()}),ug()),r&2&&cE(`p-custom-action`,i.customAction)(`p-multiple`,!0)},dependencies:[S4],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-download-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Upload - with Download Button`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-upload-download/sample-po-upload-download.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-upload-download/sample-po-upload-download.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-upload-download`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ct,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ze],encapsulation:2,changeDetection:1})}return a})();var Et=()=>[`.png`,`.jpg`,`.jpeg`,`.gif`];var St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280});var Ve=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-preview`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`upload`,`p-label`,`PO Upload com Pré-visualização`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-restrictions`,`p-show-thumbnail`,`p-multiple`]],template:function(r,i){r&1&&Kc(0,`po-upload`,0),r&2&&cE(`p-restrictions`,AN(4,St,RN(3,Et)))(`p-show-thumbnail`,!0)(`p-multiple`,!0)},dependencies:[S4],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-preview-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Upload - with Preview`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-upload-preview/sample-po-upload-preview.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-upload-preview/sample-po-upload-preview.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-upload-preview`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,gt,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ve],encapsulation:2,changeDetection:1})}return a})();var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-upload-doc`]],standalone:!1,decls:2328,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-html`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Array<PoModalAction>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoUploadComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O componente `),Ac(24,`code`),vN(25,`po-upload`),ug(),vN(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),ug(),Ac(27,`ul`)(28,`li`),vN(29,`Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.`),ug(),Ac(30,`li`),vN(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),ug(),Ac(32,`li`),vN(33,`Restrições de formatos de arquivo e tamanho.`),ug(),Ac(34,`li`),vN(35,`Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.`),ug(),Ac(36,`li`),vN(37,`Função de erro que será disparada quando houver erro no envio dos arquivos.`),ug(),Ac(38,`li`),vN(39,`Permite habilitar uma área onde os arquivos podem ser arrastados.`),ug()(),Ac(40,`h4`),vN(41,`Tokens customizáveis`),ug(),Ac(42,`p`),vN(43,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(44,`blockquote`)(45,`p`),vN(46,`Para maiores informações, acesse o guia `),Ac(47,`a`,6),vN(48,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(49,`.`),ug()(),Ac(50,`table`)(51,`thead`)(52,`tr`)(53,`th`),vN(54,`Propriedade`),ug(),Ac(55,`th`),vN(56,`Descrição`),ug(),Ac(57,`th`),vN(58,`Valor Padrão`),ug()()(),Ac(59,`tbody`)(60,`tr`)(61,`td`)(62,`strong`),vN(63,`FIELD CONTAINER`),ug()(),Kc(64,`td`)(65,`td`),ug(),Ac(66,`tr`)(67,`td`)(68,`code`),vN(69,`--field-container-title-justify`),ug()(),Ac(70,`td`),vN(71,`Alinhamento horizontal do título (`),Ac(72,`code`),vN(73,`justify-content`),ug(),vN(74,`)`),ug(),Ac(75,`td`)(76,`code`),vN(77,`space-between`),ug()()(),Ac(78,`tr`)(79,`td`)(80,`code`),vN(81,`--field-container-title-flex`),ug()(),Ac(82,`td`),vN(83,`Flex do título (`),Ac(84,`code`),vN(85,`flex`),ug(),vN(86,`)`),ug(),Ac(87,`td`)(88,`code`),vN(89,`1 auto`),ug()()(),Ac(90,`tr`)(91,`td`)(92,`strong`),vN(93,`TEXT SUPPORT`),ug()(),Kc(94,`td`)(95,`td`),ug(),Ac(96,`tr`)(97,`td`)(98,`code`),vN(99,`--font-family-text-support`),ug()(),Ac(100,`td`),vN(101,`Família tipográfica usada no texto de suporte`),ug(),Ac(102,`td`)(103,`code`),vN(104,`var(--font-family-theme)`),ug()()(),Ac(105,`tr`)(106,`td`)(107,`code`),vN(108,`--text-color-text-support`),ug()(),Ac(109,`td`),vN(110,`Cor da fonte no texto de suporte`),ug(),Ac(111,`td`)(112,`code`),vN(113,`var(--color-neutral-dark-90)`),ug()()(),Ac(114,`tr`)(115,`td`)(116,`strong`),vN(117,`UPLOAD CONTENT`),ug()(),Kc(118,`td`)(119,`td`),ug(),Ac(120,`tr`)(121,`td`)(122,`code`),vN(123,`--background-color-content`),ug(),vN(124,` \xA0`),ug(),Ac(125,`td`),vN(126,`Cor de fundo`),ug(),Ac(127,`td`)(128,`code`),vN(129,`var(--color-neutral-light-10)`),ug()()(),Ac(130,`tr`)(131,`td`)(132,`code`),vN(133,`--border-color-content`),ug()(),Ac(134,`td`),vN(135,`Cor da borda`),ug(),Ac(136,`td`)(137,`code`),vN(138,`var(--color-neutral-light-20)`),ug()()(),Ac(139,`tr`)(140,`td`)(141,`code`),vN(142,`--border-radius-content`),ug()(),Ac(143,`td`),vN(144,`Contém o valor do raio dos cantos do elemento`),ug(),Ac(145,`td`)(146,`code`),vN(147,`var(--border-radius-md)`),ug()()(),Ac(148,`tr`)(149,`td`)(150,`code`),vN(151,`--text-color-file-name`),ug()(),Ac(152,`td`),vN(153,`Cor do texto do nome do arquivo`),ug(),Ac(154,`td`)(155,`code`),vN(156,`var(--color-neutral-dark-90)`),ug()()(),Ac(157,`tr`)(158,`td`)(159,`code`),vN(160,`--font-family-file-name`),ug()(),Ac(161,`td`),vN(162,`Família tipográfica usada no texto do arquivo`),ug(),Ac(163,`td`)(164,`code`),vN(165,`var(--font-family-theme)`),ug()()(),Ac(166,`tr`)(167,`td`)(168,`code`),vN(169,`--text-color-info-bar`),ug()(),Ac(170,`td`),vN(171,`Cor do texto de informação`),ug(),Ac(172,`td`)(173,`code`),vN(174,`var(--color-neutral-mid-60)`),ug()()(),Ac(175,`tr`)(176,`td`)(177,`code`),vN(178,`--font-family-info-bar`),ug()(),Ac(179,`td`),vN(180,`Família tipográfica usada no texto de informação`),ug(),Ac(181,`td`)(182,`code`),vN(183,`var(--font-family-theme)`),ug()()(),Ac(184,`tr`)(185,`td`)(186,`strong`),vN(187,`ERROR STATE`),ug()(),Kc(188,`td`)(189,`td`),ug(),Ac(190,`tr`)(191,`td`)(192,`code`),vN(193,`--background-color-content-error`),ug()(),Ac(194,`td`),vN(195,`Cor de fundo do container de erro`),ug(),Ac(196,`td`)(197,`code`),vN(198,`var(--color-neutral-light-00)`),ug()()(),Ac(199,`tr`)(200,`td`)(201,`code`),vN(202,`--border-color-content-error`),ug()(),Ac(203,`td`),vN(204,`Cor da borda do container de erro`),ug(),Ac(205,`td`)(206,`code`),vN(207,`var(--color-feedback-negative-base)`),ug()()(),Ac(208,`tr`)(209,`td`)(210,`code`),vN(211,`--text-color-error`),ug()(),Ac(212,`td`),vN(213,`Cor do texto do container de erro`),ug(),Ac(214,`td`)(215,`code`),vN(216,`var(--color-feedback-negative-dark)`),ug()()(),Ac(217,`tr`)(218,`td`)(219,`code`),vN(220,`--color-icon-error`),ug()(),Ac(221,`td`),vN(222,`Cor do ícone no estado de erro`),ug(),Ac(223,`td`)(224,`code`),vN(225,`var(--color-feedback-negative-base)`),ug()()(),Ac(226,`tr`)(227,`td`)(228,`code`),vN(229,`--font-family-error`),ug()(),Ac(230,`td`),vN(231,`Família tipográfica usada no texto de erro`),ug(),Ac(232,`td`)(233,`code`),vN(234,`var(--font-family-theme)`),ug()()(),Ac(235,`tr`)(236,`td`)(237,`strong`),vN(238,`UPLOADED STATE`),ug()(),Kc(239,`td`)(240,`td`),ug(),Ac(241,`tr`)(242,`td`)(243,`code`),vN(244,`--background-color-content-uploaded`),ug()(),Ac(245,`td`),vN(246,`Cor de fundo do container com status de enviado`),ug(),Ac(247,`td`)(248,`code`),vN(249,`var(--color-neutral-light-00)`),ug()()(),Ac(250,`tr`)(251,`td`)(252,`code`),vN(253,`--border-color-content-uploaded`),ug()(),Ac(254,`td`),vN(255,`Cor da borda do container com status de enviado`),ug(),Ac(256,`td`)(257,`code`),vN(258,`var(--color-neutral-light-20)`),ug()()(),Ac(259,`tr`)(260,`td`)(261,`strong`),vN(262,`INTERACTIVE STATE`),ug()(),Kc(263,`td`)(264,`td`),ug(),Ac(265,`tr`)(266,`td`)(267,`code`),vN(268,`--text-color-file-name-interactive`),ug()(),Ac(269,`td`),vN(270,`Cor do texto do nome do arquivo quando interativo`),ug(),Ac(271,`td`)(272,`code`),vN(273,`var(--color-action-default)`),ug()()(),Ac(274,`tr`)(275,`td`)(276,`strong`),vN(277,`THUMBNAIL`),ug()(),Kc(278,`td`)(279,`td`),ug(),Ac(280,`tr`)(281,`td`)(282,`code`),vN(283,`--color-icon-thumbnail`),ug()(),Ac(284,`td`),vN(285,`Cor do ícone na thumbnail`),ug(),Ac(286,`td`)(287,`code`),vN(288,`var(--color-action-default)`),ug()()(),Ac(289,`tr`)(290,`td`)(291,`code`),vN(292,`--border-width-thumbnail`),ug()(),Ac(293,`td`),vN(294,`Tamanho da fonte na thumbnail`),ug(),Ac(295,`td`)(296,`code`),vN(297,`var(--border-width-sm)`),ug()()(),Ac(298,`tr`)(299,`td`)(300,`code`),vN(301,`--border-radius-thumbnail`),ug()(),Ac(302,`td`),vN(303,`Contém o valor do raio dos cantos na thumbnail`),ug(),Ac(304,`td`)(305,`code`),vN(306,`var(--border-radius-md)`),ug()()(),Ac(307,`tr`)(308,`td`)(309,`code`),vN(310,`--background-color-thumbnail`),ug()(),Ac(311,`td`),vN(312,`Cor de fundo na thumbnail`),ug(),Ac(313,`td`)(314,`code`),vN(315,`var(--color-neutral-light-05)`),ug()()(),Ac(316,`tr`)(317,`td`)(318,`strong`),vN(319,`Focused`),ug()(),Kc(320,`td`)(321,`td`),ug(),Ac(322,`tr`)(323,`td`)(324,`code`),vN(325,`--outline-color-focused`),ug()(),Ac(326,`td`),vN(327,`Cor do outline do estado de focus`),ug(),Ac(328,`td`)(329,`code`),vN(330,`var(--color-action-focus)`),ug()()()()()(),Ac(331,`div`,7)(332,`h4`,8),vN(333,`Seletor`),ug(),Ac(334,`pre`,9),vN(335,`<po-upload
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
`),ug()(),Ac(336,`h4`,10),vN(337,`Propriedades`),ug(),Ac(338,`table`,11)(339,`tr`,12)(340,`th`,13),vN(341,`Nome`),ug(),Ac(342,`th`,13),vN(343,`Tipo`),ug(),Ac(344,`th`,13),vN(345,`Padrão`),ug(),Ac(346,`th`,13),vN(347,`Descrição`),ug()(),Ac(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),vN(352,` (p-additional-help)`),Kc(353,`br`),ug()(),Ac(354,`div`,18),vN(355,`Deprecated`),ug()(),Ac(356,`td`,19)(357,`code`,20),vN(358,`EventEmitter`),ug()(),Ac(359,`td`,21),vN(360,`-`),ug(),Ac(361,`td`,22)(362,`em`)(363,`strong`),vN(364,`(opcional)`),ug()(),Ac(365,`p`),vN(366,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(367,`blockquote`)(368,`p`),vN(369,`Essa propriedade está `),Ac(370,`strong`),vN(371,`depreciada`),ug(),vN(372,` e será removida na versão `),Ac(373,`code`),vN(374,`23.x.x`),ug(),vN(375,`. Recomendamos utilizar a propriedade `),Ac(376,`code`),vN(377,`p-helper`),ug(),vN(378,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(379,`tr`,14)(380,`td`,15)(381,`div`,23)(382,`span`,24),vN(383,` p-additional-help-tooltip`),Kc(384,`br`),ug()(),Ac(385,`div`,18),vN(386,`Deprecated`),ug()(),Ac(387,`td`,19)(388,`code`,25),vN(389,`string`),ug()(),Ac(390,`td`,21),vN(391,`-`),ug(),Ac(392,`td`,22)(393,`em`)(394,`strong`),vN(395,`(opcional)`),ug()(),Ac(396,`p`),vN(397,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(398,`code`),vN(399,`po-helper`),ug(),vN(400,`.
`),Ac(401,`strong`),vN(402,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(403,`blockquote`)(404,`p`),vN(405,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(406,`blockquote`)(407,`p`),vN(408,`Essa propriedade está `),Ac(409,`strong`),vN(410,`depreciada`),ug(),vN(411,` e será removida na versão `),Ac(412,`code`),vN(413,`23.x.x`),ug(),vN(414,`. Recomendamos utilizar a propriedade `),Ac(415,`code`),vN(416,`p-helper`),ug(),vN(417,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(418,`tr`,14)(419,`td`,15)(420,`div`,23)(421,`span`,24),vN(422,` p-append-in-body`),Kc(423,`br`),ug()()(),Ac(424,`td`,19)(425,`code`,26),vN(426,`boolean`),ug()(),Ac(427,`td`,21)(428,`p`)(429,`code`),vN(430,`false`),ug()()(),Ac(431,`td`,22)(432,`em`)(433,`strong`),vN(434,`(opcional)`),ug()(),Ac(435,`p`),vN(436,`Define que o popover (`),Ac(437,`code`),vN(438,`p-helper`),ug(),vN(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(440,`blockquote`)(441,`p`),vN(442,`Quando utilizado com `),Ac(443,`code`),vN(444,`p-helper`),ug(),vN(445,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(446,`tr`,14)(447,`td`,15)(448,`div`,23)(449,`span`,24),vN(450,` p-auto-focus`),Kc(451,`br`),ug()()(),Ac(452,`td`,19)(453,`code`,26),vN(454,`boolean`),ug()(),Ac(455,`td`,21)(456,`p`)(457,`code`),vN(458,`false`),ug()()(),Ac(459,`td`,22)(460,`em`)(461,`strong`),vN(462,`(opcional)`),ug()(),Ac(463,`p`),vN(464,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(465,`blockquote`)(466,`p`),vN(467,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(468,`tr`,14)(469,`td`,15)(470,`div`,23)(471,`span`,24),vN(472,` p-auto-upload`),Kc(473,`br`),ug()()(),Ac(474,`td`,19)(475,`code`,26),vN(476,`boolean`),ug()(),Ac(477,`td`,21)(478,`p`)(479,`code`),vN(480,`false`),ug()()(),Ac(481,`td`,22)(482,`em`)(483,`strong`),vN(484,`(opcional)`),ug()(),Ac(485,`p`),vN(486,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),ug(),Ac(487,`blockquote`)(488,`p`),vN(489,`Esta propriedade funciona somente se a propriedade `),Ac(490,`code`),vN(491,`p-url`),ug(),vN(492,` tiver um valor atribuído.`),ug()()()(),Ac(493,`tr`,14)(494,`td`,15)(495,`div`,23)(496,`span`,24),vN(497,` p-compact-label`),Kc(498,`br`),ug()()(),Ac(499,`td`,19)(500,`code`,26),vN(501,`boolean`),ug()(),Ac(502,`td`,21)(503,`p`)(504,`code`),vN(505,`false`),ug()()(),Ac(506,`td`,22)(507,`em`)(508,`strong`),vN(509,`(opcional)`),ug()(),Ac(510,`p`),vN(511,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(512,`p`),vN(513,`Quando habilitado (`),Ac(514,`code`),vN(515,`true`),ug(),vN(516,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(517,`ul`)(518,`li`)(519,`code`),vN(520,`po-label`),ug()(),Ac(521,`li`)(522,`code`),vN(523,`p-requirement (showRequired)`),ug()(),Ac(524,`li`)(525,`code`),vN(526,`po-helper`),ug()()(),Ac(527,`p`),vN(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(529,`p`),vN(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(531,`ul`)(532,`li`)(533,`code`),vN(534,`--field-container-title-justify`),ug()(),Ac(535,`li`)(536,`code`),vN(537,`--field-container-title-flex`),ug()()(),Ac(538,`p`),vN(539,`Exemplo:`),ug(),Ac(540,`pre`)(541,`code`),vN(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(543,`p`),vN(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(545,`tr`,14)(546,`td`,15)(547,`div`,23)(548,`span`,24),vN(549,` p-custom-action`),Kc(550,`br`),ug()()(),Ac(551,`td`,19)(552,`code`,27),vN(553,`PoProgressAction`),ug()(),Ac(554,`td`,21),vN(555,`-`),ug(),Ac(556,`td`,22)(557,`em`)(558,`strong`),vN(559,`(opcional)`),ug()(),Ac(560,`p`),vN(561,`Define uma ação personalizada no componente `),Ac(562,`code`),vN(563,`po-upload`),ug(),vN(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ug(),Ac(565,`p`),vN(566,`A ação deve implementar a interface `),Ac(567,`strong`),vN(568,`PoProgressAction`),ug(),vN(569,`, permitindo configurar propriedades como:`),ug(),Ac(570,`ul`)(571,`li`)(572,`code`),vN(573,`label`),ug(),vN(574,`: Texto do botão.`),ug(),Ac(575,`li`)(576,`code`),vN(577,`icon`),ug(),vN(578,`: Ícone a ser exibido no botão.`),ug(),Ac(579,`li`)(580,`code`),vN(581,`type`),ug(),vN(582,`: Tipo de botão (ex.: `),Ac(583,`code`),vN(584,`danger`),ug(),vN(585,` ou `),Ac(586,`code`),vN(587,`default`),ug(),vN(588,`).`),ug(),Ac(589,`li`)(590,`code`),vN(591,`disabled`),ug(),vN(592,`: Indica se o botão deve estar desabilitado.`),ug(),Ac(593,`li`)(594,`code`),vN(595,`visible`),ug(),vN(596,`: Indica se o botão deve estar visível.`),ug()(),Ac(597,`p`)(598,`strong`),vN(599,`Exemplo de uso:`),ug()(),Ac(600,`pre`)(601,`code`,28),vN(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),ug()(),Ac(603,`pre`)(604,`code`,29),vN(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),ug()()()(),Ac(606,`tr`,14)(607,`td`,15)(608,`div`,16)(609,`span`,17),vN(610,` (p-custom-action-click)`),Kc(611,`br`),ug()()(),Ac(612,`td`,19)(613,`code`,20),vN(614,`EventEmitter`),ug()(),Ac(615,`td`,21),vN(616,`-`),ug(),Ac(617,`td`,22)(618,`em`)(619,`strong`),vN(620,`(opcional)`),ug()(),Ac(621,`p`),vN(622,`Evento emitido ao clicar na ação personalizada configurada no `),Ac(623,`code`),vN(624,`p-custom-action`),ug(),vN(625,`.`),ug(),Ac(626,`p`),vN(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ug(),Ac(628,`p`)(629,`strong`),vN(630,`Exemplo de uso:`),ug()(),Ac(631,`pre`)(632,`code`,28),vN(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),ug()(),Ac(634,`pre`)(635,`code`,29),vN(636,`customAction: PoProgressAction = {
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
`),ug()()()(),Ac(637,`tr`,14)(638,`td`,15)(639,`div`,23)(640,`span`,24),vN(641,` p-custom-modal-actions`),Kc(642,`br`),ug()()(),Ac(643,`td`,19)(644,`code`,30),vN(645,`Array<PoModalAction>`),ug()(),Ac(646,`td`,21),vN(647,`-`),ug(),Ac(648,`td`,22)(649,`em`)(650,`strong`),vN(651,`(opcional)`),ug()(),Ac(652,`p`),vN(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),ug(),Ac(654,`p`),vN(655,`A ação deve implementar a interface `),Ac(656,`strong`),vN(657,`PoModalAction`),ug(),vN(658,`, permitindo configurar propriedades como:`),ug(),Ac(659,`ul`)(660,`li`)(661,`code`),vN(662,`label`),ug(),vN(663,`: Texto do botão.`),ug(),Ac(664,`li`)(665,`code`),vN(666,`action`),ug(),vN(667,`: Ícone a ser exibido no botão.`),ug(),Ac(668,`li`)(669,`code`),vN(670,`danger`),ug(),vN(671,`: Define a propriedade `),Ac(672,`code`),vN(673,`p-danger`),ug(),vN(674,` do botão.`),ug(),Ac(675,`li`)(676,`code`),vN(677,`disabled`),ug(),vN(678,`: Indica se o botão deve estar desabilitado.`),ug(),Ac(679,`li`)(680,`code`),vN(681,`visible`),ug(),vN(682,`: Indica se o botão deve estar visível.`),ug()(),Ac(683,`p`)(684,`strong`),vN(685,`Exemplo de uso:`),ug()(),Ac(686,`pre`)(687,`code`,28),vN(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),ug()(),Ac(689,`pre`)(690,`code`,29),vN(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),ug()()()(),Ac(692,`tr`,14)(693,`td`,15)(694,`div`,23)(695,`span`,24),vN(696,` p-directory`),Kc(697,`br`),ug()()(),Ac(698,`td`,19)(699,`code`,26),vN(700,`boolean`),ug()(),Ac(701,`td`,21)(702,`p`)(703,`code`),vN(704,`false`),ug()()(),Ac(705,`td`,22)(706,`em`)(707,`strong`),vN(708,`(opcional)`),ug()(),Ac(709,`p`),vN(710,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),ug(),Ac(711,`blockquote`)(712,`p`),vN(713,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),ug()(),Ac(714,`blockquote`)(715,`p`),vN(716,`Definição não suportada pelo browser `),Ac(717,`strong`),vN(718,`Internet Explorer`),ug(),vN(719,`, todavia será possível a seleção de arquivos padrão.`),ug()()()(),Ac(720,`tr`,14)(721,`td`,15)(722,`div`,23)(723,`span`,24),vN(724,` p-disabled`),Kc(725,`br`),ug()()(),Ac(726,`td`,19)(727,`code`,26),vN(728,`boolean`),ug()(),Ac(729,`td`,21),vN(730,`-`),ug(),Ac(731,`td`,22)(732,`em`)(733,`strong`),vN(734,`(opcional)`),ug()(),Ac(735,`p`),vN(736,`Indica que o campo será desabilitado.`),ug()()(),Ac(737,`tr`,14)(738,`td`,15)(739,`div`,23)(740,`span`,24),vN(741,` p-disabled-remove-file`),Kc(742,`br`),ug()()(),Ac(743,`td`,19)(744,`code`,26),vN(745,`boolean`),ug()(),Ac(746,`td`,21)(747,`p`)(748,`code`),vN(749,`false`),ug()()(),Ac(750,`td`,22)(751,`em`)(752,`strong`),vN(753,`(opcional)`),ug()(),Ac(754,`p`),vN(755,`Desabilita botão de remover o(s) arquivo(s) selecionado(s).`),ug()()(),Ac(756,`tr`,14)(757,`td`,15)(758,`div`,23)(759,`span`,24),vN(760,` p-drag-drop`),Kc(761,`br`),ug()()(),Ac(762,`td`,19)(763,`code`,26),vN(764,`boolean`),ug()(),Ac(765,`td`,21)(766,`p`)(767,`code`),vN(768,`false`),ug()()(),Ac(769,`td`,22)(770,`em`)(771,`strong`),vN(772,`(opcional)`),ug()(),Ac(773,`p`),vN(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ug(),Ac(775,`blockquote`)(776,`p`),vN(777,`Recomendamos utilizar apenas um `),Ac(778,`code`),vN(779,`po-upload`),ug(),vN(780,` com esta funcionalidade por tela.`),ug()()()(),Ac(781,`tr`,14)(782,`td`,15)(783,`div`,23)(784,`span`,24),vN(785,` p-drag-drop-height`),Kc(786,`br`),ug()()(),Ac(787,`td`,19)(788,`code`,31),vN(789,`number`),ug()(),Ac(790,`td`,21)(791,`p`)(792,`code`),vN(793,`320`),ug()()(),Ac(794,`td`,22)(795,`em`)(796,`strong`),vN(797,`(opcional)`),ug()(),Ac(798,`p`),vN(799,`Define em `),Ac(800,`em`),vN(801,`pixels`),ug(),vN(802,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Ac(803,`code`),vN(804,`160px`),ug(),vN(805,`.`),ug(),Ac(806,`blockquote`)(807,`p`),vN(808,`Esta propriedade funciona somente se a propriedade `),Ac(809,`code`),vN(810,`p-drag-drop`),ug(),vN(811,` estiver habilitada.`),ug()()()(),Ac(812,`tr`,14)(813,`td`,15)(814,`div`,23)(815,`span`,24),vN(816,` p-restrictions`),Kc(817,`br`),ug()()(),Ac(818,`td`,19)(819,`code`,32),vN(820,`PoUploadFileRestrictions`),ug()(),Ac(821,`td`,21),vN(822,`-`),ug(),Ac(823,`td`,22)(824,`em`)(825,`strong`),vN(826,`(opcional)`),ug()(),Ac(827,`p`),vN(828,`Objeto que segue a definição da interface `),Ac(829,`code`),vN(830,`PoUploadFileRestrictions`),ug(),vN(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ug()()(),Ac(832,`tr`,14)(833,`td`,15)(834,`div`,23)(835,`span`,24),vN(836,` p-form-field`),Kc(837,`br`),ug()()(),Ac(838,`td`,19)(839,`code`,25),vN(840,`string`),ug()(),Ac(841,`td`,21)(842,`p`)(843,`code`),vN(844,`files`),ug()()(),Ac(845,`td`,22)(846,`em`)(847,`strong`),vN(848,`(opcional)`),ug()(),Ac(849,`p`),vN(850,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Ac(851,`code`),vN(852,`p-url`),ug(),vN(853,`.`),ug()()(),Ac(854,`tr`,14)(855,`td`,15)(856,`div`,23)(857,`span`,24),vN(858,` p-headers`),Kc(859,`br`),ug()()(),Ac(860,`td`,19)(861,`code`,33),vN(862,`{ [name: string]: string `),ug(),Ac(863,`code`,34),vN(864,` Array<string>;
}`),ug()(),Ac(865,`td`,21),vN(866,`-`),ug(),Ac(867,`td`,22)(868,`p`),vN(869,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),ug()()(),Ac(870,`tr`,14)(871,`td`,15)(872,`div`,23)(873,`span`,24),vN(874,` p-help`),Kc(875,`br`),ug()()(),Ac(876,`td`,19)(877,`code`,25),vN(878,`string`),ug()(),Ac(879,`td`,21),vN(880,`-`),ug(),Ac(881,`td`,22)(882,`em`)(883,`strong`),vN(884,`(opcional)`),ug()(),Ac(885,`p`),vN(886,`Texto de apoio para o campo.`),ug()()(),Ac(887,`tr`,14)(888,`td`,15)(889,`div`,23)(890,`span`,24),vN(891,` p-hide-restrictions-info`),Kc(892,`br`),ug()()(),Ac(893,`td`,19)(894,`code`,26),vN(895,`boolean`),ug()(),Ac(896,`td`,21)(897,`p`)(898,`code`),vN(899,`false`),ug()()(),Ac(900,`td`,22)(901,`em`)(902,`strong`),vN(903,`(opcional)`),ug()(),Ac(904,`p`),vN(905,`Oculta visualmente as informações de restrições para o upload.`),ug()()(),Ac(906,`tr`,14)(907,`td`,15)(908,`div`,23)(909,`span`,24),vN(910,` p-hide-select-button`),Kc(911,`br`),ug()()(),Ac(912,`td`,19)(913,`code`,26),vN(914,`boolean`),ug()(),Ac(915,`td`,21)(916,`p`)(917,`code`),vN(918,`false`),ug()()(),Ac(919,`td`,22)(920,`em`)(921,`strong`),vN(922,`(opcional)`),ug()(),Ac(923,`p`),vN(924,`Omite o botão de seleção de arquivos.`),ug(),Ac(925,`blockquote`)(926,`p`),vN(927,`Caso o valor definido seja `),Ac(928,`code`),vN(929,`true`),ug(),vN(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(931,`code`),vN(932,`selectFiles()`),ug(),vN(933,` para seleção de arquivos.`),ug()()()(),Ac(934,`tr`,14)(935,`td`,15)(936,`div`,23)(937,`span`,24),vN(938,` p-hide-send-button`),Kc(939,`br`),ug()()(),Ac(940,`td`,19)(941,`code`,26),vN(942,`boolean`),ug()(),Ac(943,`td`,21)(944,`p`)(945,`code`),vN(946,`false`),ug()()(),Ac(947,`td`,22)(948,`em`)(949,`strong`),vN(950,`(opcional)`),ug()(),Ac(951,`p`),vN(952,`Omite o botão de envio de arquivos.`),ug(),Ac(953,`blockquote`)(954,`p`),vN(955,`Caso o valor definido seja `),Ac(956,`code`),vN(957,`true`),ug(),vN(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(959,`code`),vN(960,`sendFiles()`),ug(),vN(961,` para envio do(s) arquivo(s) selecionado(s).`),ug()()()(),Ac(962,`tr`,14)(963,`td`,15)(964,`div`,23)(965,`span`,24),vN(966,` p-multiple`),Kc(967,`br`),ug()()(),Ac(968,`td`,19)(969,`code`,26),vN(970,`boolean`),ug()(),Ac(971,`td`,21),vN(972,`-`),ug(),Ac(973,`td`,22)(974,`em`)(975,`strong`),vN(976,`(opcional)`),ug()(),Ac(977,`p`),vN(978,`Define se pode selecionar mais de um arquivo.`),ug(),Ac(979,`blockquote`)(980,`p`),vN(981,`Se utilizada a `),Ac(982,`code`),vN(983,`p-directory`),ug(),vN(984,`, habilita-se automaticamente esta propriedade.`),ug()()()(),Ac(985,`tr`,14)(986,`td`,15)(987,`div`,16)(988,`span`,17),vN(989,` (p-keydown)`),Kc(990,`br`),ug()()(),Ac(991,`td`,19)(992,`code`,20),vN(993,`EventEmitter`),ug()(),Ac(994,`td`,21),vN(995,`-`),ug(),Ac(996,`td`,22)(997,`em`)(998,`strong`),vN(999,`(opcional)`),ug()(),Ac(1e3,`p`),vN(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(1002,`code`),vN(1003,`KeyboardEvent`),ug(),vN(1004,` com informações sobre a tecla.`),ug()()(),Ac(1005,`tr`,14)(1006,`td`,15)(1007,`div`,23)(1008,`span`,24),vN(1009,` p-label`),Kc(1010,`br`),ug()()(),Ac(1011,`td`,19)(1012,`code`,25),vN(1013,`string`),ug()(),Ac(1014,`td`,21),vN(1015,`-`),ug(),Ac(1016,`td`,22)(1017,`em`)(1018,`strong`),vN(1019,`(opcional)`),ug()(),Ac(1020,`p`),vN(1021,`Rótulo do campo.`),ug()()(),Ac(1022,`tr`,14)(1023,`td`,15)(1024,`div`,23)(1025,`span`,24),vN(1026,` p-label-text-wrap`),Kc(1027,`br`),ug()()(),Ac(1028,`td`,19)(1029,`code`,26),vN(1030,`boolean`),ug()(),Ac(1031,`td`,21)(1032,`p`)(1033,`code`),vN(1034,`false`),ug()()(),Ac(1035,`td`,22)(1036,`em`)(1037,`strong`),vN(1038,`(opcional)`),ug()(),Ac(1039,`p`),vN(1040,`Habilita a quebra automática do texto da propriedade `),Ac(1041,`code`),vN(1042,`p-label`),ug(),vN(1043,`. Quando `),Ac(1044,`code`),vN(1045,`p-label-text-wrap`),ug(),vN(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),vN(1051,` p-literals`),Kc(1052,`br`),ug()()(),Ac(1053,`td`,19)(1054,`code`,35),vN(1055,`PoUploadLiterals`),ug()(),Ac(1056,`td`,21),vN(1057,`-`),ug(),Ac(1058,`td`,22)(1059,`em`)(1060,`strong`),vN(1061,`(opcional)`),ug()(),Ac(1062,`p`),vN(1063,`Objeto com as literais usadas no `),Ac(1064,`code`),vN(1065,`po-upload`),ug(),vN(1066,`.`),ug(),Ac(1067,`p`),vN(1068,`Existem duas maneiras de customizar o componente:`),ug(),Ac(1069,`ul`)(1070,`li`),vN(1071,`passando um objeto implementando a interface `),Ac(1072,`code`),vN(1073,`PoUploadLiterals`),ug(),vN(1074,` com todas as literais disponíveis;`),ug(),Ac(1075,`li`),vN(1076,`passando apenas as literais que deseja customizar:`),Ac(1077,`pre`)(1078,`code`),vN(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),ug()()()(),Ac(1080,`p`),vN(1081,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),ug(),Ac(1082,`pre`)(1083,`code`),vN(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),ug()(),Ac(1085,`blockquote`)(1086,`p`),vN(1087,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ac(1088,`em`),vN(1089,`browser`),ug(),vN(1090,` (pt, en, es, ru).`),ug()()()(),Ac(1091,`tr`,14)(1092,`td`,15)(1093,`div`,23)(1094,`span`,24),vN(1095,` p-loading`),Kc(1096,`br`),ug()()(),Ac(1097,`td`,19)(1098,`code`,26),vN(1099,`boolean`),ug()(),Ac(1100,`td`,21)(1101,`p`)(1102,`code`),vN(1103,`false`),ug()()(),Ac(1104,`td`,22)(1105,`em`)(1106,`strong`),vN(1107,`(opcional)`),ug()(),Ac(1108,`p`),vN(1109,`Exibe um ícone de carregamento no botão `),Ac(1110,`code`),vN(1111,`Selecionar arquivo`),ug(),vN(1112,`, à esquerda do texto, sinalizando que uma operação está\xA0em andamento.`),ug(),Ac(1113,`blockquote`)(1114,`p`),vN(1115,`Incompatível com `),Ac(1116,`code`),vN(1117,`p-drag-drop`),ug(),vN(1118,` e `),Ac(1119,`code`),vN(1120,`p-hide-select-button`),ug(),vN(1121,`, pois o estado de loading depende da exibição do botão `),Ac(1122,`code`),vN(1123,`Selecionar arquivo`),ug(),vN(1124,`.`),ug()()()(),Ac(1125,`tr`,14)(1126,`td`,15)(1127,`div`,23)(1128,`span`,24),vN(1129,` name`),Kc(1130,`br`),ug()()(),Ac(1131,`td`,19)(1132,`code`,25),vN(1133,`string`),ug()(),Ac(1134,`td`,21),vN(1135,`-`),ug(),Ac(1136,`td`,22)(1137,`p`),vN(1138,`Define o valor do atributo `),Ac(1139,`code`),vN(1140,`name`),ug(),vN(1141,` do componente.`),ug()()(),Ac(1142,`tr`,14)(1143,`td`,15)(1144,`div`,16)(1145,`span`,17),vN(1146,` (ngModelChange)`),Kc(1147,`br`),ug()()(),Ac(1148,`td`,19)(1149,`code`,20),vN(1150,`EventEmitter`),ug()(),Ac(1151,`td`,21),vN(1152,`-`),ug(),Ac(1153,`td`,22)(1154,`em`)(1155,`strong`),vN(1156,`(opcional)`),ug()(),Ac(1157,`p`),vN(1158,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da `),Ac(1159,`em`),vN(1160,`tag`),ug(),Ac(1161,`code`),vN(1162,`form`),ug(),vN(1163,`.`),ug(),Ac(1164,`p`),vN(1165,`Na versão 12.2.0 do Angular a verificação `),Ac(1166,`code`),vN(1167,`strictTemplates`),ug(),vN(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ug(),Ac(1169,`pre`)(1170,`code`),vN(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),ug()()()(),Ac(1172,`tr`,14)(1173,`td`,15)(1174,`div`,16)(1175,`span`,17),vN(1176,` (p-cancel)`),Kc(1177,`br`),ug()()(),Ac(1178,`td`,19)(1179,`code`,20),vN(1180,`EventEmitter`),ug()(),Ac(1181,`td`,21),vN(1182,`-`),ug(),Ac(1183,`td`,22)(1184,`em`)(1185,`strong`),vN(1186,`(opcional)`),ug()(),Ac(1187,`p`),vN(1188,`Evento será disparado ao clicar no ícone de fechar.`),ug(),Ac(1189,`blockquote`)(1190,`p`),vN(1191,`Por parâmetro será passado o objeto do arquivo.`),ug()()()(),Ac(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),vN(1196,` (p-error)`),Kc(1197,`br`),ug()()(),Ac(1198,`td`,19)(1199,`code`,20),vN(1200,`EventEmitter`),ug()(),Ac(1201,`td`,21),vN(1202,`-`),ug(),Ac(1203,`td`,22)(1204,`em`)(1205,`strong`),vN(1206,`(opcional)`),ug()(),Ac(1207,`p`),vN(1208,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),ug(),Ac(1209,`blockquote`)(1210,`p`),vN(1211,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(1212,`code`),vN(1213,`HttpErrorResponse`),ug(),vN(1214,`.`),ug()()()(),Ac(1215,`tr`,14)(1216,`td`,15)(1217,`div`,16)(1218,`span`,17),vN(1219,` (p-open-modal-preview)`),Kc(1220,`br`),ug()()(),Ac(1221,`td`,19)(1222,`code`,20),vN(1223,`EventEmitter`),ug()(),Ac(1224,`td`,21),vN(1225,`-`),ug(),Ac(1226,`td`,22)(1227,`em`)(1228,`strong`),vN(1229,`(opcional)`),ug()(),Ac(1230,`p`),vN(1231,`Evento será disparado ao abrir o modal de pré-visualização.`),ug(),Ac(1232,`blockquote`)(1233,`p`),vN(1234,`Por parâmetro será passado o objeto do arquivo.`),ug()()()(),Ac(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),vN(1239,` (p-remove)`),Kc(1240,`br`),ug()()(),Ac(1241,`td`,19)(1242,`code`,20),vN(1243,`EventEmitter`),ug()(),Ac(1244,`td`,21),vN(1245,`-`),ug(),Ac(1246,`td`,22)(1247,`em`)(1248,`strong`),vN(1249,`(opcional)`),ug()(),Ac(1250,`p`),vN(1251,`Evento será disparado ao clicar no ícone de remover.`),ug(),Ac(1252,`blockquote`)(1253,`p`),vN(1254,`Por parâmetro será passado o objeto do arquivo.`),ug()()()(),Ac(1255,`tr`,14)(1256,`td`,15)(1257,`div`,16)(1258,`span`,17),vN(1259,` (p-success)`),Kc(1260,`br`),ug()()(),Ac(1261,`td`,19)(1262,`code`,20),vN(1263,`EventEmitter`),ug()(),Ac(1264,`td`,21),vN(1265,`-`),ug(),Ac(1266,`td`,22)(1267,`em`)(1268,`strong`),vN(1269,`(opcional)`),ug()(),Ac(1270,`p`),vN(1271,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),ug(),Ac(1272,`blockquote`)(1273,`p`),vN(1274,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(1275,`code`),vN(1276,`HttpResponse`),ug(),vN(1277,`.`),ug()()()(),Ac(1278,`tr`,14)(1279,`td`,15)(1280,`div`,16)(1281,`span`,17),vN(1282,` (p-upload)`),Kc(1283,`br`),ug()()(),Ac(1284,`td`,19)(1285,`code`,20),vN(1286,`EventEmitter`),ug()(),Ac(1287,`td`,21),vN(1288,`-`),ug(),Ac(1289,`td`,22)(1290,`em`)(1291,`strong`),vN(1292,`(opcional)`),ug()(),Ac(1293,`p`),vN(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ug(),Ac(1295,`blockquote`)(1296,`p`),vN(1297,`data, nesta propriedade pode ser informado algum dado`),ug()(),Ac(1298,`pre`)(1299,`code`),vN(1300,`event.data = {id: 'id do usu\xE1rio'};
`),ug()(),Ac(1301,`blockquote`)(1302,`p`),vN(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Ac(1304,`code`),vN(1305,`data`),ug(),vN(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),ug()(),Ac(1307,`pre`)(1308,`code`),vN(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),ug()()()(),Ac(1310,`tr`,14)(1311,`td`,15)(1312,`div`,23)(1313,`span`,24),vN(1314,` p-optional`),Kc(1315,`br`),ug()()(),Ac(1316,`td`,19)(1317,`code`,26),vN(1318,`boolean`),ug()(),Ac(1319,`td`,21)(1320,`p`)(1321,`code`),vN(1322,`false`),ug()()(),Ac(1323,`td`,22)(1324,`em`)(1325,`strong`),vN(1326,`(opcional)`),ug()(),Ac(1327,`p`),vN(1328,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(1329,`blockquote`)(1330,`p`),vN(1331,`Não será exibida a indicação se:`),ug()(),Ac(1332,`ul`)(1333,`li`),vN(1334,`O campo conter `),Ac(1335,`code`),vN(1336,`p-required`),ug(),vN(1337,`;`),ug(),Ac(1338,`li`),vN(1339,`Não possuir `),Ac(1340,`code`),vN(1341,`p-help`),ug(),vN(1342,` e/ou `),Ac(1343,`code`),vN(1344,`p-label`),ug(),vN(1345,`.`),ug()()()(),Ac(1346,`tr`,14)(1347,`td`,15)(1348,`div`,23)(1349,`span`,24),vN(1350,` p-helper`),Kc(1351,`br`),ug()()(),Ac(1352,`td`,19)(1353,`code`,36),vN(1354,`PoHelperOptions `),ug(),Ac(1355,`code`,25),vN(1356,` string`),ug()(),Ac(1357,`td`,21),vN(1358,`-`),ug(),Ac(1359,`td`,22)(1360,`em`)(1361,`strong`),vN(1362,`(opcional)`),ug()(),Ac(1363,`p`),vN(1364,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1365,`code`),vN(1366,`p-label`),ug(),vN(1367,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1368,`code`),vN(1369,`p-label`),ug(),vN(1370,`.`),ug(),Ac(1371,`blockquote`)(1372,`p`),vN(1373,`Para mais informações acesse: `),Ac(1374,`a`,37),vN(1375,`https://po-ui.io/documentation/po-helper`),ug(),vN(1376,`.`),ug()(),Ac(1377,`blockquote`)(1378,`p`),vN(1379,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1380,`code`),vN(1381,`p-additional-help-tooltip`),ug(),vN(1382,` e `),Ac(1383,`code`),vN(1384,`p-additional-help`),ug(),vN(1385,`) será ignorado.`),ug()()()(),Ac(1386,`tr`,14)(1387,`td`,15)(1388,`div`,23)(1389,`span`,24),vN(1390,` p-required`),Kc(1391,`br`),ug()()(),Ac(1392,`td`,19)(1393,`code`,26),vN(1394,`boolean`),ug()(),Ac(1395,`td`,21)(1396,`p`)(1397,`code`),vN(1398,`false`),ug()()(),Ac(1399,`td`,22)(1400,`em`)(1401,`strong`),vN(1402,`(opcional)`),ug()(),Ac(1403,`p`),vN(1404,`Define que o campo será obrigatório.`),ug()()(),Ac(1405,`tr`,14)(1406,`td`,15)(1407,`div`,23)(1408,`span`,24),vN(1409,` p-required-url`),Kc(1410,`br`),ug()()(),Ac(1411,`td`,19)(1412,`code`,26),vN(1413,`boolean`),ug()(),Ac(1414,`td`,21)(1415,`p`)(1416,`code`),vN(1417,`true`),ug()()(),Ac(1418,`td`,22)(1419,`em`)(1420,`strong`),vN(1421,`(opcional)`),ug()(),Ac(1422,`p`),vN(1423,`Define se a propriedade `),Ac(1424,`code`),vN(1425,`p-url`),ug(),vN(1426,` é obrigatória.`),ug(),Ac(1427,`p`),vN(1428,`Caso a propriedade seja definida como `),Ac(1429,`code`),vN(1430,`false`),ug(),vN(1431,`:`),ug(),Ac(1432,`ul`)(1433,`li`),vN(1434,`o botão de "Selecionar arquivo" ficará habilitado mesmo sem a propriedade `),Ac(1435,`code`),vN(1436,`p-url`),ug(),vN(1437,` definida.`),ug(),Ac(1438,`li`),vN(1439,`o botão "Iniciar envio" ficará oculto até que a propriedade `),Ac(1440,`code`),vN(1441,`p-url`),ug(),vN(1442,` seja definida.`),ug()(),Ac(1443,`blockquote`)(1444,`p`),vN(1445,`Se utilizada com a propriedade `),Ac(1446,`code`),vN(1447,`p-auto-upload`),ug(),vN(1448,` definida como `),Ac(1449,`code`),vN(1450,`true`),ug(),vN(1451,` será necessário definir a propriedade `),Ac(1452,`code`),vN(1453,`p-url`),ug(),vN(1454,`.`),ug()()()(),Ac(1455,`tr`,14)(1456,`td`,15)(1457,`div`,23)(1458,`span`,24),vN(1459,` p-show-required`),Kc(1460,`br`),ug()()(),Ac(1461,`td`,19)(1462,`code`,26),vN(1463,`boolean`),ug()(),Ac(1464,`td`,21),vN(1465,`-`),ug(),Ac(1466,`td`,22)(1467,`p`),vN(1468,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1469,`blockquote`)(1470,`p`),vN(1471,`Não será exibida a indicação se:`),ug()(),Ac(1472,`ul`)(1473,`li`),vN(1474,`Não possuir `),Ac(1475,`code`),vN(1476,`p-help`),ug(),vN(1477,` e/ou `),Ac(1478,`code`),vN(1479,`p-label`),ug(),vN(1480,`.`),ug()()()(),Ac(1481,`tr`,14)(1482,`td`,15)(1483,`div`,23)(1484,`span`,24),vN(1485,` p-show-thumbnail`),Kc(1486,`br`),ug()()(),Ac(1487,`td`,19)(1488,`code`,26),vN(1489,`boolean`),ug()(),Ac(1490,`td`,21)(1491,`p`)(1492,`code`),vN(1493,`true`),ug()()(),Ac(1494,`td`,22)(1495,`em`)(1496,`strong`),vN(1497,`(opcional)`),ug()(),Ac(1498,`p`),vN(1499,`Exibe a pré-visualização de imagens ao anexá-las.`),ug(),Ac(1500,`blockquote`)(1501,`p`),vN(1502,`Propriedade funciona apenas em arquivos de formato de imagem (`),Ac(1503,`code`),vN(1504,`.png`),ug(),vN(1505,`, `),Ac(1506,`code`),vN(1507,`.jpg`),ug(),vN(1508,`, `),Ac(1509,`code`),vN(1510,`.jpeg`),ug(),vN(1511,` e `),Ac(1512,`code`),vN(1513,`.gif`),ug(),vN(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),ug()()()(),Ac(1515,`tr`,14)(1516,`td`,15)(1517,`div`,23)(1518,`span`,24),vN(1519,` p-size`),Kc(1520,`br`),ug()()(),Ac(1521,`td`,19)(1522,`code`,25),vN(1523,`string`),ug()(),Ac(1524,`td`,21)(1525,`p`)(1526,`code`),vN(1527,`medium`),ug()()(),Ac(1528,`td`,22)(1529,`em`)(1530,`strong`),vN(1531,`(opcional)`),ug()(),Ac(1532,`p`),vN(1533,`Define o tamanho e as ações do componente:`),ug(),Ac(1534,`ul`)(1535,`li`)(1536,`code`),vN(1537,`small`),ug(),vN(1538,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1539,`li`)(1540,`code`),vN(1541,`medium`),ug(),vN(1542,`: altura do button como 44px.`),ug()(),Ac(1543,`blockquote`)(1544,`p`),vN(1545,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1546,`code`),vN(1547,`medium`),ug(),vN(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1549,`a`,38),vN(1550,`po-theme`),ug(),vN(1551,`.`),ug()()()(),Ac(1552,`tr`,14)(1553,`td`,15)(1554,`div`,23)(1555,`span`,24),vN(1556,` p-url`),Kc(1557,`br`),ug()()(),Ac(1558,`td`,19)(1559,`code`,25),vN(1560,`string`),ug()(),Ac(1561,`td`,21),vN(1562,`-`),ug(),Ac(1563,`td`,22)(1564,`p`),vN(1565,`URL que deve ser feita a requisição com os arquivos selecionados.`),ug()()()(),Ac(1566,`h3`,10),vN(1567,`Métodos`),ug(),Ac(1568,`table`,39)(1569,`tr`,14)(1570,`th`,40)(1571,`div`,23)(1572,`h4`)(1573,`span`,24),vN(1574,` clear `),ug()()()()(),Ac(1575,`tr`,22)(1576,`td`,22)(1577,`p`),vN(1578,`Método responsável por `),Ac(1579,`strong`),vN(1580,`limpar`),ug(),vN(1581,` o(s) arquivo(s) selecionado(s).`),ug()()()(),Kc(1582,`br`),Ac(1583,`table`,39)(1584,`tr`,14)(1585,`th`,40)(1586,`div`,23)(1587,`h4`)(1588,`span`,24),vN(1589,` focus `),ug()()()()(),Ac(1590,`tr`,22)(1591,`td`,22)(1592,`p`),vN(1593,`Função que atribui foco ao componente.`),ug(),Ac(1594,`p`),vN(1595,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1596,`pre`)(1597,`code`),vN(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),ug()()()()(),Kc(1599,`br`),Ac(1600,`table`,39)(1601,`tr`,14)(1602,`th`,40)(1603,`div`,23)(1604,`h4`)(1605,`span`,24),vN(1606,` closeModal `),ug()()()()(),Ac(1607,`tr`,22)(1608,`td`,22)(1609,`p`),vN(1610,`Método responsável por fechar o modal.`),ug()()()(),Kc(1611,`br`),Ac(1612,`table`,39)(1613,`tr`,14)(1614,`th`,40)(1615,`div`,23)(1616,`h4`)(1617,`span`,24),vN(1618,` selectFiles `),ug()()()()(),Ac(1619,`tr`,22)(1620,`td`,22)(1621,`p`),vN(1622,`Método responsável por `),Ac(1623,`strong`),vN(1624,`abrir`),ug(),vN(1625,` a janela para seleção de arquivo(s).`),ug()()()(),Kc(1626,`br`),Ac(1627,`table`,39)(1628,`tr`,14)(1629,`th`,40)(1630,`div`,23)(1631,`h4`)(1632,`span`,24),vN(1633,` sendFiles `),ug()()()()(),Ac(1634,`tr`,22)(1635,`td`,22)(1636,`p`),vN(1637,`Método responsável por `),Ac(1638,`strong`),vN(1639,`enviar`),ug(),vN(1640,` o(s) arquivo(s) selecionado(s).`),ug()()()(),Kc(1641,`br`),Ac(1642,`table`,39)(1643,`tr`,14)(1644,`th`,40)(1645,`div`,23)(1646,`h4`)(1647,`span`,24),vN(1648,` showAdditionalHelp `),ug()()()()(),Ac(1649,`tr`,22)(1650,`td`,22)(1651,`p`),vN(1652,`Método que exibe `),Ac(1653,`code`),vN(1654,`p-helper`),ug(),vN(1655,` ou executa a ação definida em `),Ac(1656,`code`),vN(1657,`p-helper{eventOnClick}`),ug(),vN(1658,` ou em `),Ac(1659,`code`),vN(1660,`p-additionalHelp`),ug(),vN(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1662,`code`),vN(1663,`p-keydown`),ug(),vN(1664,`.`),ug(),Ac(1665,`blockquote`)(1666,`p`),vN(1667,`Exibe ou oculta o conteúdo do componente `),Ac(1668,`code`),vN(1669,`po-helper`),ug(),vN(1670,` quando o componente estiver com foco.`),ug()(),Ac(1671,`pre`)(1672,`code`),vN(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),ug()(),Ac(1674,`pre`)(1675,`code`),vN(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1677,`br`),Ac(1678,`h3`),vN(1679,`Interfaces`),ug(),Ac(1680,`h4`,41)(1681,`code`,5),vN(1682,`PoUploadFileRestrictions`),ug()(),Ac(1683,`div`,2)(1684,`p`),vN(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),ug()(),Ac(1686,`h4`,10),vN(1687,`Propriedades`),ug(),Ac(1688,`table`,11)(1689,`tr`,12)(1690,`th`,13),vN(1691,`Nome`),ug(),Ac(1692,`th`,13),vN(1693,`Tipo`),ug(),Ac(1694,`th`,13),vN(1695,`Descrição`),ug()(),Ac(1696,`tr`,14)(1697,`td`,15)(1698,`div`,23)(1699,`span`,24),vN(1700,` allowedExtensions`),Kc(1701,`br`),ug()()(),Ac(1702,`td`,19)(1703,`code`,42),vN(1704,`Array<string>`),ug()(),Ac(1705,`td`,22)(1706,`em`)(1707,`strong`),vN(1708,`(opcional)`),ug()(),Ac(1709,`p`),vN(1710,`Extensões permitidas de arquivos que serão enviados ao servidor, devendo ser informada uma coleção de extensões, por exemplo:`),ug(),Ac(1711,`pre`)(1712,`code`),vN(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),ug()()()(),Ac(1714,`tr`,14)(1715,`td`,15)(1716,`div`,23)(1717,`span`,24),vN(1718,` maxFileSize`),Kc(1719,`br`),ug()()(),Ac(1720,`td`,19)(1721,`code`,31),vN(1722,`number`),ug()(),Ac(1723,`td`,22)(1724,`em`)(1725,`strong`),vN(1726,`(opcional)`),ug()(),Ac(1727,`p`),vN(1728,`Tamanho máximo do arquivo a ser enviado ao servidor.`),ug(),Ac(1729,`p`),vN(1730,`Deve ser informado um valor em `),Ac(1731,`em`),vN(1732,`bytes`),ug(),vN(1733,`, por exemplo: `),Ac(1734,`code`),vN(1735,`31457280`),ug(),vN(1736,` (30MB).`),ug(),Ac(1737,`blockquote`)(1738,`p`),vN(1739,`Por padrão o valor é `),Ac(1740,`code`),vN(1741,`30 MB`),ug(),vN(1742,`.`),ug()()()(),Ac(1743,`tr`,14)(1744,`td`,15)(1745,`div`,23)(1746,`span`,24),vN(1747,` maxFiles`),Kc(1748,`br`),ug()()(),Ac(1749,`td`,19)(1750,`code`,31),vN(1751,`number`),ug()(),Ac(1752,`td`,22)(1753,`em`)(1754,`strong`),vN(1755,`(opcional)`),ug()(),Ac(1756,`p`),vN(1757,`Quantidade máxima de arquivos para o `),Ac(1758,`em`),vN(1759,`upload`),ug(),vN(1760,`.`),ug(),Ac(1761,`blockquote`)(1762,`p`),vN(1763,`Esta propriedade será válida somente se a propriedade `),Ac(1764,`code`),vN(1765,`p-multiple`),ug(),vN(1766,` estiver habilitada e seu valor for maior do que zero.`),ug()()()(),Ac(1767,`tr`,14)(1768,`td`,15)(1769,`div`,23)(1770,`span`,24),vN(1771,` minFileSize`),Kc(1772,`br`),ug()()(),Ac(1773,`td`,19)(1774,`code`,31),vN(1775,`number`),ug()(),Ac(1776,`td`,22)(1777,`em`)(1778,`strong`),vN(1779,`(opcional)`),ug()(),Ac(1780,`p`),vN(1781,`Tamanho mínimo em `),Ac(1782,`em`),vN(1783,`bytes`),ug(),vN(1784,` do arquivo que será enviado ao servidor.`),ug(),Ac(1785,`blockquote`)(1786,`p`),vN(1787,`Por padrão o valor é `),Ac(1788,`code`),vN(1789,`0`),ug(),vN(1790,`.`),ug()()()()(),Ac(1791,`h4`,41)(1792,`code`,5),vN(1793,`PoUploadLiterals`),ug()(),Ac(1794,`div`,2)(1795,`p`),vN(1796,`Interface para definição das literais usadas no `),Ac(1797,`code`),vN(1798,`po-upload`),ug(),vN(1799,`.`),ug()(),Ac(1800,`h4`,10),vN(1801,`Propriedades`),ug(),Ac(1802,`table`,11)(1803,`tr`,12)(1804,`th`,13),vN(1805,`Nome`),ug(),Ac(1806,`th`,13),vN(1807,`Tipo`),ug(),Ac(1808,`th`,13),vN(1809,`Descrição`),ug()(),Ac(1810,`tr`,14)(1811,`td`,15)(1812,`div`,23)(1813,`span`,24),vN(1814,` close`),Kc(1815,`br`),ug()()(),Ac(1816,`td`,19)(1817,`code`,25),vN(1818,`string`),ug()(),Ac(1819,`td`,22)(1820,`em`)(1821,`strong`),vN(1822,`(opcional)`),ug()(),Ac(1823,`p`),vN(1824,`Texto do leitor de tela ao focar no ícone de fechar.`),ug()()(),Ac(1825,`tr`,14)(1826,`td`,15)(1827,`div`,23)(1828,`span`,24),vN(1829,` continue`),Kc(1830,`br`),ug()()(),Ac(1831,`td`,19)(1832,`code`,25),vN(1833,`string`),ug()(),Ac(1834,`td`,22)(1835,`em`)(1836,`strong`),vN(1837,`(opcional)`),ug()(),Ac(1838,`p`),vN(1839,`Texto do botão padrão do modal de pré-visualizar.`),ug()()(),Ac(1840,`tr`,14)(1841,`td`,15)(1842,`div`,23)(1843,`span`,24),vN(1844,` doneText`),Kc(1845,`br`),ug()()(),Ac(1846,`td`,19)(1847,`code`,25),vN(1848,`string`),ug()(),Ac(1849,`td`,22)(1850,`em`)(1851,`strong`),vN(1852,`(opcional)`),ug()(),Ac(1853,`p`),vN(1854,`Texto a ser exibido no container de informação quando o estado for de sucesso.`),ug()()(),Ac(1855,`tr`,14)(1856,`td`,15)(1857,`div`,23)(1858,`span`,24),vN(1859,` dragFilesHere`),Kc(1860,`br`),ug()()(),Ac(1861,`td`,19)(1862,`code`,25),vN(1863,`string`),ug()(),Ac(1864,`td`,22)(1865,`em`)(1866,`strong`),vN(1867,`(opcional)`),ug()(),Ac(1868,`p`),vN(1869,`Texto indicativo para a área onde os arquivos devem ser arrastados quando utilizada a propriedade `),Ac(1870,`code`),vN(1871,`p-drag-drop`),ug(),vN(1872,`.`),ug()()(),Ac(1873,`tr`,14)(1874,`td`,15)(1875,`div`,23)(1876,`span`,24),vN(1877,` dragFoldersHere`),Kc(1878,`br`),ug()()(),Ac(1879,`td`,19)(1880,`code`,25),vN(1881,`string`),ug()(),Ac(1882,`td`,22)(1883,`em`)(1884,`strong`),vN(1885,`(opcional)`),ug()(),Ac(1886,`p`),vN(1887,`Texto indicativo para a área onde os diretórios devem ser arrastados quando utilizada a propriedade `),Ac(1888,`code`),vN(1889,`p-drag-drop`),ug(),vN(1890,`.`),ug()()(),Ac(1891,`tr`,14)(1892,`td`,15)(1893,`div`,23)(1894,`span`,24),vN(1895,` dropFilesHere`),Kc(1896,`br`),ug()()(),Ac(1897,`td`,19)(1898,`code`,25),vN(1899,`string`),ug()(),Ac(1900,`td`,22)(1901,`em`)(1902,`strong`),vN(1903,`(opcional)`),ug()(),Ac(1904,`p`),vN(1905,`Texto indicativo para a área onde os arquivos devem ser soltos quando utilizada a propriedade `),Ac(1906,`code`),vN(1907,`p-drag-drop`),ug()()()(),Ac(1908,`tr`,14)(1909,`td`,15)(1910,`div`,23)(1911,`span`,24),vN(1912,` dropFoldersHere`),Kc(1913,`br`),ug()()(),Ac(1914,`td`,19)(1915,`code`,25),vN(1916,`string`),ug()(),Ac(1917,`td`,22)(1918,`em`)(1919,`strong`),vN(1920,`(opcional)`),ug()(),Ac(1921,`p`),vN(1922,`Texto indicativo para a área onde os diretórios devem ser soltos quando utilizada a propriedade `),Ac(1923,`code`),vN(1924,`p-drag-drop`),ug(),vN(1925,`.`),ug()()(),Ac(1926,`tr`,14)(1927,`td`,15)(1928,`div`,23)(1929,`span`,24),vN(1930,` errorOccurred`),Kc(1931,`br`),ug()()(),Ac(1932,`td`,19)(1933,`code`,25),vN(1934,`string`),ug()(),Ac(1935,`td`,22)(1936,`em`)(1937,`strong`),vN(1938,`(opcional)`),ug()(),Ac(1939,`p`),vN(1940,`Texto a ser exibido quando ocorrer erro no envio do arquivo.`),ug()()(),Ac(1941,`tr`,14)(1942,`td`,15)(1943,`div`,23)(1944,`span`,24),vN(1945,` files`),Kc(1946,`br`),ug()()(),Ac(1947,`td`,19)(1948,`code`,25),vN(1949,`string`),ug()(),Ac(1950,`td`,22)(1951,`em`)(1952,`strong`),vN(1953,`(opcional)`),ug()(),Ac(1954,`p`),vN(1955,`Parâmetro `),Ac(1956,`em`),vN(1957,`files`),ug(),vN(1958,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Ac(1959,`em`),vN(1960,`dragDrop`),ug(),vN(1961,`.`),ug()()(),Ac(1962,`tr`,14)(1963,`td`,15)(1964,`div`,23)(1965,`span`,24),vN(1966,` folders`),Kc(1967,`br`),ug()()(),Ac(1968,`td`,19)(1969,`code`,25),vN(1970,`string`),ug()(),Ac(1971,`td`,22)(1972,`em`)(1973,`strong`),vN(1974,`(opcional)`),ug()(),Ac(1975,`p`),vN(1976,`Parâmetro `),Ac(1977,`em`),vN(1978,`folders`),ug(),vN(1979,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Ac(1980,`em`),vN(1981,`dragDrop`),ug(),vN(1982,`.`),ug()()(),Ac(1983,`tr`,14)(1984,`td`,15)(1985,`div`,23)(1986,`span`,24),vN(1987,` invalidDropArea`),Kc(1988,`br`),ug()()(),Ac(1989,`td`,19)(1990,`code`,25),vN(1991,`string`),ug()(),Ac(1992,`td`,22)(1993,`em`)(1994,`strong`),vN(1995,`(opcional)`),ug()(),Ac(1996,`p`),vN(1997,`Texto exibido caso o usuário arrastar um arquivo para um local inválido ao utilizar a opção de `),Ac(1998,`em`),vN(1999,`dragDrop`),ug(),vN(2e3,`.`),ug()()(),Ac(2001,`tr`,14)(2002,`td`,15)(2003,`div`,23)(2004,`span`,24),vN(2005,` preview`),Kc(2006,`br`),ug()()(),Ac(2007,`td`,19)(2008,`code`,25),vN(2009,`string`),ug()(),Ac(2010,`td`,22)(2011,`em`)(2012,`strong`),vN(2013,`(opcional)`),ug()(),Ac(2014,`p`),vN(2015,`Título do modal de pré-visualizar.`),ug()()(),Ac(2016,`tr`,14)(2017,`td`,15)(2018,`div`,23)(2019,`span`,24),vN(2020,` selectFile`),Kc(2021,`br`),ug()()(),Ac(2022,`td`,19)(2023,`code`,25),vN(2024,`string`),ug()(),Ac(2025,`td`,22)(2026,`em`)(2027,`strong`),vN(2028,`(opcional)`),ug()(),Ac(2029,`p`),vN(2030,`Texto exibido no label do botão de seleção dos arquivos.`),ug()()(),Ac(2031,`tr`,14)(2032,`td`,15)(2033,`div`,23)(2034,`span`,24),vN(2035,` selectFiles`),Kc(2036,`br`),ug()()(),Ac(2037,`td`,19)(2038,`code`,25),vN(2039,`string`),ug()(),Ac(2040,`td`,22)(2041,`em`)(2042,`strong`),vN(2043,`(opcional)`),ug()(),Ac(2044,`p`),vN(2045,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Ac(2046,`code`),vN(2047,`p-multiple`),ug(),vN(2048,`.`),ug()()(),Ac(2049,`tr`,14)(2050,`td`,15)(2051,`div`,23)(2052,`span`,24),vN(2053,` selectFilesOnComputer`),Kc(2054,`br`),ug()()(),Ac(2055,`td`,19)(2056,`code`,25),vN(2057,`string`),ug()(),Ac(2058,`td`,22)(2059,`em`)(2060,`strong`),vN(2061,`(opcional)`),ug()(),Ac(2062,`p`),vN(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Ac(2064,`em`),vN(2065,`dragDrop`),ug(),vN(2066,`.`),ug()()(),Ac(2067,`tr`,14)(2068,`td`,15)(2069,`div`,23)(2070,`span`,24),vN(2071,` selectFolder`),Kc(2072,`br`),ug()()(),Ac(2073,`td`,19)(2074,`code`,25),vN(2075,`string`),ug()(),Ac(2076,`td`,22)(2077,`em`)(2078,`strong`),vN(2079,`(opcional)`),ug()(),Ac(2080,`p`),vN(2081,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Ac(2082,`code`),vN(2083,`p-directory`),ug(),vN(2084,`.`),ug()()(),Ac(2085,`tr`,14)(2086,`td`,15)(2087,`div`,23)(2088,`span`,24),vN(2089,` selectFolderOnComputer`),Kc(2090,`br`),ug()()(),Ac(2091,`td`,19)(2092,`code`,25),vN(2093,`string`),ug()(),Ac(2094,`td`,22)(2095,`em`)(2096,`strong`),vN(2097,`(opcional)`),ug()(),Ac(2098,`p`),vN(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Ac(2100,`em`),vN(2101,`dragDrop`),ug(),vN(2102,`.`),ug()()(),Ac(2103,`tr`,14)(2104,`td`,15)(2105,`div`,23)(2106,`span`,24),vN(2107,` sentWithSuccess`),Kc(2108,`br`),ug()()(),Ac(2109,`td`,19)(2110,`code`,25),vN(2111,`string`),ug()(),Ac(2112,`td`,22)(2113,`em`)(2114,`strong`),vN(2115,`(opcional)`),ug()(),Ac(2116,`p`),vN(2117,`Texto a ser exibido quando o envio do arquivo for realizado com sucesso.`),ug()()(),Ac(2118,`tr`,14)(2119,`td`,15)(2120,`div`,23)(2121,`span`,24),vN(2122,` startSending`),Kc(2123,`br`),ug()()(),Ac(2124,`td`,19)(2125,`code`,25),vN(2126,`string`),ug()(),Ac(2127,`td`,22)(2128,`em`)(2129,`strong`),vN(2130,`(opcional)`),ug()(),Ac(2131,`p`),vN(2132,`Texto exibido no label do botão para iniciar o envio dos arquivos.`),ug()()(),Ac(2133,`tr`,14)(2134,`td`,15)(2135,`div`,23)(2136,`span`,24),vN(2137,` thumbnail`),Kc(2138,`br`),ug()()(),Ac(2139,`td`,19)(2140,`code`,25),vN(2141,`string`),ug()(),Ac(2142,`td`,22)(2143,`em`)(2144,`strong`),vN(2145,`(opcional)`),ug()(),Ac(2146,`p`),vN(2147,`Texto do leitor da miniatura da imagem.`),ug()()(),Ac(2148,`tr`,14)(2149,`td`,15)(2150,`div`,23)(2151,`span`,24),vN(2152,` tryAgain`),Kc(2153,`br`),ug()()(),Ac(2154,`td`,19)(2155,`code`,25),vN(2156,`string`),ug()(),Ac(2157,`td`,22)(2158,`em`)(2159,`strong`),vN(2160,`(opcional)`),ug()(),Ac(2161,`p`),vN(2162,`Texto de Tente novamente ao ocorrer erro ao enviar.`),ug()()(),Ac(2163,`tr`,14)(2164,`td`,15)(2165,`div`,23)(2166,`span`,24),vN(2167,` uploadingText`),Kc(2168,`br`),ug()()(),Ac(2169,`td`,19)(2170,`code`,25),vN(2171,`string`),ug()(),Ac(2172,`td`,22)(2173,`em`)(2174,`strong`),vN(2175,`(opcional)`),ug()(),Ac(2176,`p`),vN(2177,`Texto a ser exibido no container de informação quando o estado for enviando.`),ug()()()(),Ac(2178,`h4`,41)(2179,`code`,5),vN(2180,`PoProgressAction`),ug()(),Ac(2181,`div`,2)(2182,`p`),vN(2183,`Interface para as ações dos componentes po-progress e po-upload.`),ug()(),Ac(2184,`h4`,10),vN(2185,`Propriedades`),ug(),Ac(2186,`table`,11)(2187,`tr`,12)(2188,`th`,13),vN(2189,`Nome`),ug(),Ac(2190,`th`,13),vN(2191,`Tipo`),ug(),Ac(2192,`th`,13),vN(2193,`Descrição`),ug()(),Ac(2194,`tr`,14)(2195,`td`,15)(2196,`div`,23)(2197,`span`,24),vN(2198,` disabled`),Kc(2199,`br`),ug()()(),Ac(2200,`td`,19)(2201,`code`,26),vN(2202,`boolean `),ug(),Ac(2203,`code`,43),vN(2204,` Function`),ug()(),Ac(2205,`td`,22)(2206,`em`)(2207,`strong`),vN(2208,`(opcional)`),ug()(),Ac(2209,`p`),vN(2210,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),ug(),Ac(2211,`p`),vN(2212,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),ug()()(),Ac(2213,`tr`,14)(2214,`td`,15)(2215,`div`,23)(2216,`span`,24),vN(2217,` icon`),Kc(2218,`br`),ug()()(),Ac(2219,`td`,19)(2220,`code`,25),vN(2221,`string `),ug(),Ac(2222,`code`,44),vN(2223,` TemplateRef<void>`),ug()(),Ac(2224,`td`,22)(2225,`em`)(2226,`strong`),vN(2227,`(opcional)`),ug()(),Ac(2228,`p`),vN(2229,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),ug(),Ac(2230,`p`),vN(2231,`É possível usar qualquer um dos ícones da `),Ac(2232,`a`,45),vN(2233,`Biblioteca de ícones`),ug(),vN(2234,`. conforme exemplo abaixo:`),ug(),Ac(2235,`pre`)(2236,`code`),vN(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),ug()(),Ac(2238,`p`),vN(2239,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ug(),Ac(2240,`pre`)(2241,`code`),vN(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),ug()(),Ac(2243,`p`),vN(2244,`Outra opção seria a customização do ícone através do `),Ac(2245,`code`),vN(2246,`TemplateRef`),ug(),vN(2247,`, conforme exemplo abaixo:
component.html:`),ug(),Ac(2248,`pre`)(2249,`code`),vN(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),ug()(),Ac(2251,`p`),vN(2252,`component.ts:`),ug(),Ac(2253,`pre`)(2254,`code`),vN(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),ug()()()(),Ac(2256,`tr`,14)(2257,`td`,15)(2258,`div`,23)(2259,`span`,24),vN(2260,` label`),Kc(2261,`br`),ug()()(),Ac(2262,`td`,19)(2263,`code`,25),vN(2264,`string`),ug()(),Ac(2265,`td`,22)(2266,`em`)(2267,`strong`),vN(2268,`(opcional)`),ug()(),Ac(2269,`p`),vN(2270,`Rótulo da ação.`),ug()()(),Ac(2271,`tr`,14)(2272,`td`,15)(2273,`div`,23)(2274,`span`,24),vN(2275,` type`),Kc(2276,`br`),ug()()(),Ac(2277,`td`,19)(2278,`code`,25),vN(2279,`string`),ug()(),Ac(2280,`td`,22)(2281,`em`)(2282,`strong`),vN(2283,`(opcional)`),ug()(),Ac(2284,`p`),vN(2285,`Define a cor do item, sendo `),Ac(2286,`code`),vN(2287,`default`),ug(),vN(2288,` o padrão.`),ug(),Ac(2289,`p`),vN(2290,`Valores válidos:`),ug(),Ac(2291,`ul`)(2292,`li`)(2293,`code`),vN(2294,`default`),ug()(),Ac(2295,`li`)(2296,`code`),vN(2297,`danger`),ug(),vN(2298,` - indicado para ações exclusivas (excluir, sair).`),ug()()()(),Ac(2299,`tr`,14)(2300,`td`,15)(2301,`div`,23)(2302,`span`,24),vN(2303,` visible`),Kc(2304,`br`),ug()()(),Ac(2305,`td`,19)(2306,`code`,26),vN(2307,`boolean `),ug(),Ac(2308,`code`,43),vN(2309,` Function`),ug()(),Ac(2310,`td`,22)(2311,`em`)(2312,`strong`),vN(2313,`(opcional)`),ug()(),Ac(2314,`p`),vN(2315,`Define se a ação será visível.`),ug(),Ac(2316,`blockquote`)(2317,`p`),vN(2318,`Caso o valor não seja especificado a ação será visível.`),ug()(),Ac(2319,`p`),vN(2320,`Opções para tornar a ação visível ou não:`),ug(),Ac(2321,`ul`)(2322,`li`)(2323,`p`),vN(2324,`Função que deve retornar um booleano.`),ug()(),Ac(2325,`li`)(2326,`p`),vN(2327,`Informar diretamente um valor booleano.`),ug()()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var vt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Upload`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-upload-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-upload-basic-view`)(6,`sample-po-upload-labs-view`)(7,`sample-po-upload-resume-view`)(8,`sample-po-upload-rs-view`)(9,`sample-po-upload-download-view`)(10,`sample-po-upload-preview-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,Fe,qe,ke,Le,Re,Oe,je],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(vt),kL]})}return a})();var cn=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Ie]})}return a})();export{cn as DocPoUploadModule};