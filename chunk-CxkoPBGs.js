import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Ft as dt,G as M8e,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Pr as Pt,Qn as DN,Qr as Xx,Rt as eU,Sa as zk,Sn as vbe,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ea as qO,ei as Yl,fi as ag,gi as bL,ha as ww,hn as rCe,jn as ybe,k as Eu,l as ar,la as uo,li as _x,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,vn as tU,wn as vr,wr as MN,xr as Lk,yi as cN,yn as ube,zi as jk,zr as SN}from"./main-3EWTGE7T.js";var De=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`upload`,`p-label`,`PO Upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`]],template:function(r,i){r&1&&Gl(0,`po-upload`,0)},dependencies:[eU],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Upload Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-upload-basic/sample-po-upload-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-upload-basic/sample-po-upload-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-upload-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,He,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,De],encapsulation:2,changeDetection:1})}return a})();function Ge(a,Ne){if(a&1&&(Tl(0,`div`)(1,`po-widget`,22)(2,`form`,23),Gl(3,`po-input`,24),a0(),Gl(4,`po-select`,25),a0(),Gl(5,`po-select`,26),a0(),Gl(6,`po-switch`,27),a0(),Gl(7,`po-switch`,28),a0(),ag()()()),a&2){let d=Fx();jp(2),nw(`formGroup`,d.actionForm),jp(),l0(),jp(),nw(`p-options`,d.iconOptions),l0(),jp(),nw(`p-options`,d.typeOptions),l0(),jp(),l0(),jp(),l0()}}var Me=(()=>{class a{fb=f(zk);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:`autoupload`,label:`Automatic upload`},{value:`directory`,label:`Directory`},{value:`disabled`,label:`Disabled`},{value:`disabledRemoveFile`,label:`Disabled Remove File`},{value:`dragDrop`,label:`Drag Drop`},{value:`requiredUrl`,label:`required Url`},{value:`multiple`,label:`Multiple upload`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`restrictionsInfo`,label:`Hide Restrictions Info`},{value:`selectButton`,label:`Hide Select Files Button`},{value:`sendButton`,label:`Hide Send Files Button`},{value:`showCustomAction`,label:`Add Custom Action to Progress`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`showThumbnail`,label:`Show Thumbnail`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(d){this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch(r){this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(`,`).map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText=``,this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals=``,this.modalActions=``,this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url=`https://po-sample-api.onrender.com/v1/uploads/addFile`,this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.customModalActions=[],this.size=`medium`}getValueInBytes(d){return 1048576*d}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-labs`]],standalone:!1,decls:29,vars:53,consts:[[`fRestrictions`,`ngForm`],[`name`,`upload`,3,`ngModelChange`,`p-custom-action-click`,`p-error`,`p-keydown`,`p-success`,`p-upload`,`p-open-modal-preview`,`p-remove`,`ngModel`,`p-helper`,`p-auto-upload`,`p-directory`,`p-disabled`,`p-required-url`,`p-disabled-remove-file`,`p-drag-drop`,`p-drag-drop-height`,`p-form-field`,`p-help`,`p-hide-select-button`,`p-hide-restrictions-info`,`p-hide-send-button`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-optional`,`p-required`,`p-show-required`,`p-show-thumbnail`,`p-restrictions`,`p-size`,`p-url`,`p-headers`,`p-custom-action`,`p-label-text-wrap`,`p-compact-label`,`p-custom-modal-actions`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`allowedExtensions`,`p-help`,`Digite as extensões permitidas separadas por vírgula`,`p-label`,`Allowed Extensions`,`p-placeholder`,`.png, .jpeg, .jpg`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxFiles`,`p-clean`,``,`p-help`,`Requer p-multiple habilitado`,`p-label`,`Max Files`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`dragDropHeight`,`p-clean`,``,`p-help`,`Altura da área de arrastar e soltar`,`p-label`,`Drag Drop Height`,`p-min`,`160`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Min File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Max File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`formField`,`p-clean`,``,`p-label`,`Form Field`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,`p-required`,``,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`headers`,`p-help`,`Ex.: {"Authorization": "12312414"}`,`p-label`,`Headers`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`customModalActions`,`p-help`,`Ex.: [{"label": "Label", "disabled": false}]`,`p-label`,`Custom Modal Actions`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`],[`name`,`properties`,`p-columns`,`4`,`p-help`,`Select any options`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`]],template:function(r,i){if(r&1){let m=Ax();Tl(0,`po-upload`,1),ww(`ngModelChange`,function(l){return Ky(m),uN(i.upload,l)||(i.upload=l),Xy(l)}),ht(`p-custom-action-click`,function(){return i.changeEvent(`p-custom-action-click`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-success`,function(){return i.changeEvent(`p-success`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-open-modal-preview`,function(){return i.changeEvent(`p-open-modal-preview`)})(`p-remove`,function(){return i.changeEvent(`p-remove`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3),SN(4,`json`),Gl(5,`po-info`,4),ag(),Gl(6,`po-divider`),Tl(7,`div`,2)(8,`form`,null,0)(10,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(m),uN(i.allowedExtensions,l)||(i.allowedExtensions=l),Xy(l)}),ht(`p-change`,function(){return i.onChangeExtension()}),ag(),a0(),Tl(11,`po-number`,6),ww(`ngModelChange`,function(l){return Ky(m),uN(i.maxFiles,l)||(i.maxFiles=l),Xy(l)}),ht(`p-change`,function(){return i.onChangeMaxFiles(i.maxFiles)}),ag(),a0(),Tl(12,`po-number`,7),ww(`ngModelChange`,function(l){return Ky(m),uN(i.dragDropHeight,l)||(i.dragDropHeight=l),Xy(l)}),ag(),a0(),Tl(13,`po-number`,8),ww(`ngModelChange`,function(l){return Ky(m),uN(i.minSize,l)||(i.minSize=l),Xy(l)}),ht(`p-change`,function(){return i.onChangeMinSize(i.minSize)}),ag(),a0(),Tl(14,`po-number`,9),ww(`ngModelChange`,function(l){return Ky(m),uN(i.maxSize,l)||(i.maxSize=l),Xy(l)}),ht(`p-change`,function(){return i.onChangeMaxSize(i.maxSize)}),ag(),a0(),Gl(15,`po-divider`),Tl(16,`po-input`,10),ww(`ngModelChange`,function(l){return Ky(m),uN(i.label,l)||(i.label=l),Xy(l)}),ag(),a0(),Tl(17,`po-input`,11),ww(`ngModelChange`,function(l){return Ky(m),uN(i.help,l)||(i.help=l),Xy(l)}),ag(),a0(),Tl(18,`po-input`,12),ww(`ngModelChange`,function(l){return Ky(m),uN(i.helperText,l)||(i.helperText=l),Xy(l)}),ag(),a0(),Tl(19,`po-input`,13),ww(`ngModelChange`,function(l){return Ky(m),uN(i.formField,l)||(i.formField=l),Xy(l)}),ag(),a0(),Tl(20,`po-input`,14),ww(`ngModelChange`,function(l){return Ky(m),uN(i.url,l)||(i.url=l),Xy(l)}),ag(),a0(),Tl(21,`po-input`,15),ww(`ngModelChange`,function(l){return Ky(m),uN(i.headersLabs,l)||(i.headersLabs=l),Xy(l)}),ht(`p-change`,function(l){return i.onChangeHeaders(l)}),ag(),a0(),Tl(22,`po-input`,16),ww(`ngModelChange`,function(l){return Ky(m),uN(i.literals,l)||(i.literals=l),Xy(l)}),ht(`p-change`,function(){return i.changeLiterals()}),ag(),a0(),Tl(23,`po-input`,17),ww(`ngModelChange`,function(l){return Ky(m),uN(i.modalActions,l)||(i.modalActions=l),Xy(l)}),ht(`p-change`,function(){return i.changeModalActions()}),ag(),a0(),Tl(24,`po-checkbox-group`,18),ww(`ngModelChange`,function(l){return Ky(m),uN(i.properties,l)||(i.properties=l),Xy(l)}),ag(),a0(),_x(25,Ge,8,3,`div`),Tl(26,`po-radio-group`,19),ww(`ngModelChange`,function(l){return Ky(m),uN(i.size,l)||(i.size=l),Xy(l)}),ag(),a0(),Tl(27,`div`,20)(28,`po-button`,21),ht(`p-click`,function(){return i.restore()}),ag()()()()}r&2&&(Ew(`ngModel`,i.upload),nw(`p-helper`,i.helperText)(`p-auto-upload`,i.properties.includes(`autoupload`))(`p-directory`,i.properties.includes(`directory`))(`p-disabled`,i.properties.includes(`disabled`))(`p-required-url`,i.properties.includes(`requiredUrl`))(`p-disabled-remove-file`,i.properties.includes(`disabledRemoveFile`))(`p-drag-drop`,i.properties.includes(`dragDrop`))(`p-drag-drop-height`,i.dragDropHeight)(`p-form-field`,i.formField)(`p-help`,i.help)(`p-hide-select-button`,i.properties.includes(`selectButton`))(`p-hide-restrictions-info`,i.properties.includes(`restrictionsInfo`))(`p-hide-send-button`,i.properties.includes(`sendButton`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-multiple`,i.properties.includes(`multiple`))(`p-optional`,i.properties.includes(`optional`))(`p-required`,i.properties.includes(`required`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-thumbnail`,i.properties.includes(`showThumbnail`))(`p-restrictions`,i.restrictions)(`p-size`,i.size)(`p-url`,i.url)(`p-headers`,i.headers)(`p-custom-action`,i.action)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-custom-modal-actions`,i.customModalActions),l0(),jp(3),nw(`p-value`,MN(4,51,i.upload)),jp(2),nw(`p-value`,i.event),jp(5),Ew(`ngModel`,i.allowedExtensions),l0(),jp(),Ew(`ngModel`,i.maxFiles),l0(),jp(),Ew(`ngModel`,i.dragDropHeight),l0(),jp(),Ew(`ngModel`,i.minSize),l0(),jp(),Ew(`ngModel`,i.maxSize),l0(),jp(2),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.formField),l0(),jp(),Ew(`ngModel`,i.url),l0(),jp(),Ew(`ngModel`,i.headersLabs),l0(),jp(),Ew(`ngModel`,i.literals),l0(),jp(),Ew(`ngModel`,i.modalActions),nw(`p-disabled`,!i.properties.includes(`showThumbnail`)),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Dx(i.properties.includes(`showCustomAction`)?25:-1),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,jk,Lk,Zt,Xy$1,N4,iU,ube,L0e,fbe,j4,eU,ybe,O8e,qO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Upload Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-upload-labs/sample-po-upload-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-upload
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-upload-labs/sample-po-upload-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-upload-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ke,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Me],encapsulation:2,changeDetection:1})}return a})();var Xe=[`formOpportunity`];var Ze=()=>({maxFileSize:`204800`});var Ue=(()=>{class a{poNotification=f(Eu);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success(`You were applied successfully`)}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-resume`]],viewQuery:function(r,i){if(r&1&&Yl(Xe,7),r&2){let m;lo(m=uo())&&(i.formOpportunity=m.first)}},standalone:!1,decls:12,vars:7,consts:[[`formOpportunity`,`ngForm`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Full Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`biograph`,`p-label`,`Biograph`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`linkedin`,`p-clean`,``,`p-label`,`LinkedIn URL`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`resume`,`p-label`,`Resume`,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-md-12`,3,`ngModelChange`,`p-error`,`p-success`,`ngModel`,`p-restrictions`],[`p-label`,`Apply`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let m=Ax();Tl(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),ww(`ngModelChange`,function(l){return Ky(m),uN(i.name,l)||(i.name=l),Xy(l)}),ag(),a0(),ag(),Tl(4,`div`,1)(5,`po-textarea`,3),ww(`ngModelChange`,function(l){return Ky(m),uN(i.biograph,l)||(i.biograph=l),Xy(l)}),ag(),a0(),ag(),Tl(6,`div`,1)(7,`po-url`,4),ww(`ngModelChange`,function(l){return Ky(m),uN(i.linkedin,l)||(i.linkedin=l),Xy(l)}),ag(),a0(),ag(),Tl(8,`div`,1)(9,`po-upload`,5),ww(`ngModelChange`,function(l){return Ky(m),uN(i.resume,l)||(i.resume=l),Xy(l)}),ht(`p-error`,function(){return i.resumeUploadError()})(`p-success`,function(){return i.resumeUploadSuccess()}),ag(),a0(),ag(),Tl(10,`div`,1)(11,`po-button`,6),ht(`p-click`,function(){return i.apply()}),ag()()()}if(r&2){let m=Bx(1);jp(3),Ew(`ngModel`,i.name),l0(),jp(2),Ew(`ngModel`,i.biograph),l0(),jp(2),Ew(`ngModel`,i.linkedin),l0(),jp(2),Ew(`ngModel`,i.resume),nw(`p-restrictions`,_N(6,Ze)),l0(),jp(2),nw(`p-disabled`,m.invalid||!i.uploadedResume)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,iU,vbe,eU,tU],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-resume-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Upload - Resume`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-upload-resume/sample-po-upload-resume.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #formOpportunity="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-upload-resume/sample-po-upload-resume.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-upload-resume`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,et,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ue],encapsulation:2,changeDetection:1})}return a})();var nt=[`upload`];var it=[`stepper`];var ot=[`submitForm`];var at=[`sucessData`];var lt=a=>({"po-invisible":a});function rt(a,Ne){if(a&1){let d=Ax();Tl(0,`div`,8)(1,`div`,9)(2,`p`,11),cN(3,`Confirm informations`),ag()(),Gl(4,`po-info`,28)(5,`po-info`,29)(6,`po-info`,30),Tl(7,`po-button`,31),ht(`p-click`,function(){Ky(d);return Xy(Fx().confirmSubmit())}),ag()()}if(a&2){let d=Fx();jp(4),nw(`p-value`,d.project[0].name||`N/D`),jp(),nw(`p-value`,d.title||`N/D`),jp(),nw(`p-value`,d.description||`N/D`)}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:`Return`};description;project=[];restrictions={allowedExtensions:[`.zip`,`.7z`,`.tar`,`.wim`]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-rs`]],viewQuery:function(r,i){if(r&1&&Yl(nt,7)(it,7)(ot,7)(at,7),r&2){let m;lo(m=uo())&&(i.upload=m.first),lo(m=uo())&&(i.stepper=m.first),lo(m=uo())&&(i.submitForm=m.first),lo(m=uo())&&(i.sucessData=m.first)}},standalone:!1,decls:47,vars:15,consts:[[`stepper`,``],[`submitForm`,`ngForm`],[`upload`,``],[`sucessData`,``],[1,`po-row`],[`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`42`,1,`po-lg-10`,`po-offset-lg-2`,`po-offset-xl-2`],[`p-label`,`Welcome`],[`p-title`,`Realize & Show`,1,`po-lg-8`,`po-mt-2`],[1,`tht-row`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-text-large`],[`p-label`,`Yes!`,`p-kind`,`primary`,1,`po-sm-12`,`po-mt-2`,3,`p-click`],[`p-label`,`Submit`,3,`p-can-active-next-step`],[1,`po-lg-10`],[1,`po-font-subtitle`],[1,`po-font-text-small-bold`],[1,`po-font-title`,`po-lg-2`],[`p-icon`,`an an-cloud-arrow-up`,1,`po-clickable`,3,`click`],[`p-icon`,`an an-fill an-x-circle`,1,`po-clickable`,3,`click`,`ngClass`],[1,`po-sm-12`,`po-mt-3`,`po-font-text-bold`],[`name`,`project`,`p-hide-select-button`,``,`p-hide-send-button`,``,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-restrictions`],[`name`,`title`,`p-label`,`Title`,`p-placeholder`,`Be creative`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`description`,`p-label`,`Description`,`p-maxlength`,`140`,`p-placeholder`,`Resume on few words`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Done`,1,`po-sm-12`,`po-mt-2`,3,`p-click`,`p-disabled`],[`p-label`,`Confirm`],[`p-title`,`Confirmation`,3,`p-primary-action`],[1,`po-sm-12`,`po-font-title`],[`p-label`,`File name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Title`,1,`po-md-4`,3,`p-value`],[`p-label`,`Description`,1,`po-md-4`,3,`p-value`],[`p-label`,`Confirm`,1,`po-sm-12`,`po-mt-2`,`po-mb-2`,3,`p-click`]],template:function(r,i){if(r&1){let m=Ax();Tl(0,`div`,4)(1,`po-stepper`,5,0)(3,`po-step`,6)(4,`po-widget`,7)(5,`div`,8)(6,`div`,9)(7,`h1`,10),cN(8,`Welcome, TOTVS!`),ag(),Tl(9,`p`,11),cN(10,`Let's submit your project?`),ag()()(),Tl(11,`div`,8)(12,`po-button`,12),ht(`p-click`,function(){Ky(m);return Xy(Bx(2).next())}),ag()()()(),Tl(13,`po-step`,13)(14,`po-widget`,7)(15,`form`,null,1)(17,`div`,4)(18,`div`,14)(19,`div`,4)(20,`p`,15),cN(21,`Please, select your project:`),ag()(),Tl(22,`div`,4)(23,`p`,16),cN(24,`*Upload a zip file containing your project.`),ag()()(),Tl(25,`div`,17)(26,`po-icon`,18),ht(`click`,function(){Ky(m);return Xy(Bx(32).selectFiles())}),ag(),Tl(27,`po-icon`,19),ht(`click`,function(){Ky(m);return Xy(Bx(32).clear())}),ag()()(),Tl(28,`div`,4)(29,`label`,20),cN(30,`Attached`),ag(),Tl(31,`po-upload`,21,2),ww(`ngModelChange`,function(l){return Ky(m),uN(i.project,l)||(i.project=l),Xy(l)}),ag(),a0(),ag(),Tl(33,`div`,4)(34,`po-input`,22),ww(`ngModelChange`,function(l){return Ky(m),uN(i.title,l)||(i.title=l),Xy(l)}),ag(),a0(),ag(),Tl(35,`div`,4)(36,`po-textarea`,23),ww(`ngModelChange`,function(l){return Ky(m),uN(i.description,l)||(i.description=l),Xy(l)}),ag(),a0(),ag(),Tl(37,`div`,8)(38,`po-button`,24),ht(`p-click`,function(){return i.submitProject()}),ag()()()()(),Tl(39,`po-step`,25)(40,`po-widget`,7),_x(41,rt,8,3,`div`,8),ag()()()(),Tl(42,`po-modal`,26,3)(44,`div`,4)(45,`p`,27),cN(46,`Project successfully submited!`),ag()()()}r&2&&(jp(13),nw(`p-can-active-next-step`,i.canSubmitProject.bind(i)),jp(14),nw(`ngClass`,DN(13,lt,i.project.length<1)),jp(2),Pt(`po-invisible`,i.project.length<1),jp(2),Ew(`ngModel`,i.project),nw(`p-restrictions`,i.restrictions),l0(),jp(3),Ew(`ngModel`,i.title),nw(`p-disabled`,i.project.length<1),l0(),jp(2),Ew(`ngModel`,i.description),nw(`p-disabled`,i.project.length<1),l0(),jp(2),nw(`p-disabled`,i.canSubmitProject()),jp(3),Dx(i.canSubmitProject()?41:-1),jp(),nw(`p-primary-action`,i.confirm))},dependencies:[PO,yY,gY,mY,Ak,Tk,Zt,iU,vbe,eU,dt,ybe,vr,rCe,M8e,O8e],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-rs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Upload - Realize & Show`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-upload-rs/sample-po-upload-rs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-upload-rs/sample-po-upload-rs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-upload-rs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,pt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ae],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{customAction={icon:`an an-download`,type:`default`,visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error(`Arquivo inválido ou não encontrado.`);return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement(`a`);i.href=r,i.download=d.name,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-download`]],standalone:!1,decls:1,vars:2,consts:[[`name`,`upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-custom-action-click`,`p-success`,`p-custom-action`,`p-multiple`]],template:function(r,i){r&1&&(Tl(0,`po-upload`,0),ht(`p-custom-action-click`,function(s){return i.onCustomActionClick(s)})(`p-success`,function(){return i.uploadSuccess()}),ag()),r&2&&nw(`p-custom-action`,i.customAction)(`p-multiple`,!0)},dependencies:[eU],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-download-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Upload - with Download Button`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-upload-download/sample-po-upload-download.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-upload-download/sample-po-upload-download.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-upload-download`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ct,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ze],encapsulation:2,changeDetection:1})}return a})();var Et=()=>[`.png`,`.jpg`,`.jpeg`,`.gif`];var St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280});var Ve=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-preview`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`upload`,`p-label`,`PO Upload com Pré-visualização`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-restrictions`,`p-show-thumbnail`,`p-multiple`]],template:function(r,i){r&1&&Gl(0,`po-upload`,0),r&2&&nw(`p-restrictions`,DN(4,St,_N(3,Et)))(`p-show-thumbnail`,!0)(`p-multiple`,!0)},dependencies:[eU],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-preview-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Upload - with Preview`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-upload-preview/sample-po-upload-preview.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-upload-preview/sample-po-upload-preview.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-upload-preview`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,gt,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ve],encapsulation:2,changeDetection:1})}return a})();var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-doc`]],standalone:!1,decls:2328,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-html`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Array<PoModalAction>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoUploadComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O componente `),Tl(24,`code`),cN(25,`po-upload`),ag(),cN(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),ag(),Tl(27,`ul`)(28,`li`),cN(29,`Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.`),ag(),Tl(30,`li`),cN(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),ag(),Tl(32,`li`),cN(33,`Restrições de formatos de arquivo e tamanho.`),ag(),Tl(34,`li`),cN(35,`Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.`),ag(),Tl(36,`li`),cN(37,`Função de erro que será disparada quando houver erro no envio dos arquivos.`),ag(),Tl(38,`li`),cN(39,`Permite habilitar uma área onde os arquivos podem ser arrastados.`),ag()(),Tl(40,`h4`),cN(41,`Tokens customizáveis`),ag(),Tl(42,`p`),cN(43,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(44,`blockquote`)(45,`p`),cN(46,`Para maiores informações, acesse o guia `),Tl(47,`a`,6),cN(48,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(49,`.`),ag()(),Tl(50,`table`)(51,`thead`)(52,`tr`)(53,`th`),cN(54,`Propriedade`),ag(),Tl(55,`th`),cN(56,`Descrição`),ag(),Tl(57,`th`),cN(58,`Valor Padrão`),ag()()(),Tl(59,`tbody`)(60,`tr`)(61,`td`)(62,`strong`),cN(63,`FIELD CONTAINER`),ag()(),Gl(64,`td`)(65,`td`),ag(),Tl(66,`tr`)(67,`td`)(68,`code`),cN(69,`--field-container-title-justify`),ag()(),Tl(70,`td`),cN(71,`Alinhamento horizontal do título (`),Tl(72,`code`),cN(73,`justify-content`),ag(),cN(74,`)`),ag(),Tl(75,`td`)(76,`code`),cN(77,`space-between`),ag()()(),Tl(78,`tr`)(79,`td`)(80,`code`),cN(81,`--field-container-title-flex`),ag()(),Tl(82,`td`),cN(83,`Flex do título (`),Tl(84,`code`),cN(85,`flex`),ag(),cN(86,`)`),ag(),Tl(87,`td`)(88,`code`),cN(89,`1 auto`),ag()()(),Tl(90,`tr`)(91,`td`)(92,`strong`),cN(93,`TEXT SUPPORT`),ag()(),Gl(94,`td`)(95,`td`),ag(),Tl(96,`tr`)(97,`td`)(98,`code`),cN(99,`--font-family-text-support`),ag()(),Tl(100,`td`),cN(101,`Família tipográfica usada no texto de suporte`),ag(),Tl(102,`td`)(103,`code`),cN(104,`var(--font-family-theme)`),ag()()(),Tl(105,`tr`)(106,`td`)(107,`code`),cN(108,`--text-color-text-support`),ag()(),Tl(109,`td`),cN(110,`Cor da fonte no texto de suporte`),ag(),Tl(111,`td`)(112,`code`),cN(113,`var(--color-neutral-dark-90)`),ag()()(),Tl(114,`tr`)(115,`td`)(116,`strong`),cN(117,`UPLOAD CONTENT`),ag()(),Gl(118,`td`)(119,`td`),ag(),Tl(120,`tr`)(121,`td`)(122,`code`),cN(123,`--background-color-content`),ag(),cN(124,` \xA0`),ag(),Tl(125,`td`),cN(126,`Cor de fundo`),ag(),Tl(127,`td`)(128,`code`),cN(129,`var(--color-neutral-light-10)`),ag()()(),Tl(130,`tr`)(131,`td`)(132,`code`),cN(133,`--border-color-content`),ag()(),Tl(134,`td`),cN(135,`Cor da borda`),ag(),Tl(136,`td`)(137,`code`),cN(138,`var(--color-neutral-light-20)`),ag()()(),Tl(139,`tr`)(140,`td`)(141,`code`),cN(142,`--border-radius-content`),ag()(),Tl(143,`td`),cN(144,`Contém o valor do raio dos cantos do elemento`),ag(),Tl(145,`td`)(146,`code`),cN(147,`var(--border-radius-md)`),ag()()(),Tl(148,`tr`)(149,`td`)(150,`code`),cN(151,`--text-color-file-name`),ag()(),Tl(152,`td`),cN(153,`Cor do texto do nome do arquivo`),ag(),Tl(154,`td`)(155,`code`),cN(156,`var(--color-neutral-dark-90)`),ag()()(),Tl(157,`tr`)(158,`td`)(159,`code`),cN(160,`--font-family-file-name`),ag()(),Tl(161,`td`),cN(162,`Família tipográfica usada no texto do arquivo`),ag(),Tl(163,`td`)(164,`code`),cN(165,`var(--font-family-theme)`),ag()()(),Tl(166,`tr`)(167,`td`)(168,`code`),cN(169,`--text-color-info-bar`),ag()(),Tl(170,`td`),cN(171,`Cor do texto de informação`),ag(),Tl(172,`td`)(173,`code`),cN(174,`var(--color-neutral-mid-60)`),ag()()(),Tl(175,`tr`)(176,`td`)(177,`code`),cN(178,`--font-family-info-bar`),ag()(),Tl(179,`td`),cN(180,`Família tipográfica usada no texto de informação`),ag(),Tl(181,`td`)(182,`code`),cN(183,`var(--font-family-theme)`),ag()()(),Tl(184,`tr`)(185,`td`)(186,`strong`),cN(187,`ERROR STATE`),ag()(),Gl(188,`td`)(189,`td`),ag(),Tl(190,`tr`)(191,`td`)(192,`code`),cN(193,`--background-color-content-error`),ag()(),Tl(194,`td`),cN(195,`Cor de fundo do container de erro`),ag(),Tl(196,`td`)(197,`code`),cN(198,`var(--color-neutral-light-00)`),ag()()(),Tl(199,`tr`)(200,`td`)(201,`code`),cN(202,`--border-color-content-error`),ag()(),Tl(203,`td`),cN(204,`Cor da borda do container de erro`),ag(),Tl(205,`td`)(206,`code`),cN(207,`var(--color-feedback-negative-base)`),ag()()(),Tl(208,`tr`)(209,`td`)(210,`code`),cN(211,`--text-color-error`),ag()(),Tl(212,`td`),cN(213,`Cor do texto do container de erro`),ag(),Tl(214,`td`)(215,`code`),cN(216,`var(--color-feedback-negative-dark)`),ag()()(),Tl(217,`tr`)(218,`td`)(219,`code`),cN(220,`--color-icon-error`),ag()(),Tl(221,`td`),cN(222,`Cor do ícone no estado de erro`),ag(),Tl(223,`td`)(224,`code`),cN(225,`var(--color-feedback-negative-base)`),ag()()(),Tl(226,`tr`)(227,`td`)(228,`code`),cN(229,`--font-family-error`),ag()(),Tl(230,`td`),cN(231,`Família tipográfica usada no texto de erro`),ag(),Tl(232,`td`)(233,`code`),cN(234,`var(--font-family-theme)`),ag()()(),Tl(235,`tr`)(236,`td`)(237,`strong`),cN(238,`UPLOADED STATE`),ag()(),Gl(239,`td`)(240,`td`),ag(),Tl(241,`tr`)(242,`td`)(243,`code`),cN(244,`--background-color-content-uploaded`),ag()(),Tl(245,`td`),cN(246,`Cor de fundo do container com status de enviado`),ag(),Tl(247,`td`)(248,`code`),cN(249,`var(--color-neutral-light-00)`),ag()()(),Tl(250,`tr`)(251,`td`)(252,`code`),cN(253,`--border-color-content-uploaded`),ag()(),Tl(254,`td`),cN(255,`Cor da borda do container com status de enviado`),ag(),Tl(256,`td`)(257,`code`),cN(258,`var(--color-neutral-light-20)`),ag()()(),Tl(259,`tr`)(260,`td`)(261,`strong`),cN(262,`INTERACTIVE STATE`),ag()(),Gl(263,`td`)(264,`td`),ag(),Tl(265,`tr`)(266,`td`)(267,`code`),cN(268,`--text-color-file-name-interactive`),ag()(),Tl(269,`td`),cN(270,`Cor do texto do nome do arquivo quando interativo`),ag(),Tl(271,`td`)(272,`code`),cN(273,`var(--color-action-default)`),ag()()(),Tl(274,`tr`)(275,`td`)(276,`strong`),cN(277,`THUMBNAIL`),ag()(),Gl(278,`td`)(279,`td`),ag(),Tl(280,`tr`)(281,`td`)(282,`code`),cN(283,`--color-icon-thumbnail`),ag()(),Tl(284,`td`),cN(285,`Cor do ícone na thumbnail`),ag(),Tl(286,`td`)(287,`code`),cN(288,`var(--color-action-default)`),ag()()(),Tl(289,`tr`)(290,`td`)(291,`code`),cN(292,`--border-width-thumbnail`),ag()(),Tl(293,`td`),cN(294,`Tamanho da fonte na thumbnail`),ag(),Tl(295,`td`)(296,`code`),cN(297,`var(--border-width-sm)`),ag()()(),Tl(298,`tr`)(299,`td`)(300,`code`),cN(301,`--border-radius-thumbnail`),ag()(),Tl(302,`td`),cN(303,`Contém o valor do raio dos cantos na thumbnail`),ag(),Tl(304,`td`)(305,`code`),cN(306,`var(--border-radius-md)`),ag()()(),Tl(307,`tr`)(308,`td`)(309,`code`),cN(310,`--background-color-thumbnail`),ag()(),Tl(311,`td`),cN(312,`Cor de fundo na thumbnail`),ag(),Tl(313,`td`)(314,`code`),cN(315,`var(--color-neutral-light-05)`),ag()()(),Tl(316,`tr`)(317,`td`)(318,`strong`),cN(319,`Focused`),ag()(),Gl(320,`td`)(321,`td`),ag(),Tl(322,`tr`)(323,`td`)(324,`code`),cN(325,`--outline-color-focused`),ag()(),Tl(326,`td`),cN(327,`Cor do outline do estado de focus`),ag(),Tl(328,`td`)(329,`code`),cN(330,`var(--color-action-focus)`),ag()()()()()(),Tl(331,`div`,7)(332,`h4`,8),cN(333,`Seletor`),ag(),Tl(334,`pre`,9),cN(335,`<po-upload
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
`),ag()(),Tl(336,`h4`,10),cN(337,`Propriedades`),ag(),Tl(338,`table`,11)(339,`tr`,12)(340,`th`,13),cN(341,`Nome`),ag(),Tl(342,`th`,13),cN(343,`Tipo`),ag(),Tl(344,`th`,13),cN(345,`Padrão`),ag(),Tl(346,`th`,13),cN(347,`Descrição`),ag()(),Tl(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),cN(352,` (p-additional-help)`),Gl(353,`br`),ag()(),Tl(354,`div`,18),cN(355,`Deprecated`),ag()(),Tl(356,`td`,19)(357,`code`,20),cN(358,`EventEmitter`),ag()(),Tl(359,`td`,21),cN(360,`-`),ag(),Tl(361,`td`,22)(362,`em`)(363,`strong`),cN(364,`(opcional)`),ag()(),Tl(365,`p`),cN(366,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(367,`blockquote`)(368,`p`),cN(369,`Essa propriedade está `),Tl(370,`strong`),cN(371,`depreciada`),ag(),cN(372,` e será removida na versão `),Tl(373,`code`),cN(374,`23.x.x`),ag(),cN(375,`. Recomendamos utilizar a propriedade `),Tl(376,`code`),cN(377,`p-helper`),ag(),cN(378,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(379,`tr`,14)(380,`td`,15)(381,`div`,23)(382,`span`,24),cN(383,` p-additional-help-tooltip`),Gl(384,`br`),ag()(),Tl(385,`div`,18),cN(386,`Deprecated`),ag()(),Tl(387,`td`,19)(388,`code`,25),cN(389,`string`),ag()(),Tl(390,`td`,21),cN(391,`-`),ag(),Tl(392,`td`,22)(393,`em`)(394,`strong`),cN(395,`(opcional)`),ag()(),Tl(396,`p`),cN(397,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(398,`code`),cN(399,`po-helper`),ag(),cN(400,`.
`),Tl(401,`strong`),cN(402,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(403,`blockquote`)(404,`p`),cN(405,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(406,`blockquote`)(407,`p`),cN(408,`Essa propriedade está `),Tl(409,`strong`),cN(410,`depreciada`),ag(),cN(411,` e será removida na versão `),Tl(412,`code`),cN(413,`23.x.x`),ag(),cN(414,`. Recomendamos utilizar a propriedade `),Tl(415,`code`),cN(416,`p-helper`),ag(),cN(417,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(418,`tr`,14)(419,`td`,15)(420,`div`,23)(421,`span`,24),cN(422,` p-append-in-body`),Gl(423,`br`),ag()()(),Tl(424,`td`,19)(425,`code`,26),cN(426,`boolean`),ag()(),Tl(427,`td`,21)(428,`p`)(429,`code`),cN(430,`false`),ag()()(),Tl(431,`td`,22)(432,`em`)(433,`strong`),cN(434,`(opcional)`),ag()(),Tl(435,`p`),cN(436,`Define que o popover (`),Tl(437,`code`),cN(438,`p-helper`),ag(),cN(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(440,`blockquote`)(441,`p`),cN(442,`Quando utilizado com `),Tl(443,`code`),cN(444,`p-helper`),ag(),cN(445,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(446,`tr`,14)(447,`td`,15)(448,`div`,23)(449,`span`,24),cN(450,` p-auto-focus`),Gl(451,`br`),ag()()(),Tl(452,`td`,19)(453,`code`,26),cN(454,`boolean`),ag()(),Tl(455,`td`,21)(456,`p`)(457,`code`),cN(458,`false`),ag()()(),Tl(459,`td`,22)(460,`em`)(461,`strong`),cN(462,`(opcional)`),ag()(),Tl(463,`p`),cN(464,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(465,`blockquote`)(466,`p`),cN(467,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(468,`tr`,14)(469,`td`,15)(470,`div`,23)(471,`span`,24),cN(472,` p-auto-upload`),Gl(473,`br`),ag()()(),Tl(474,`td`,19)(475,`code`,26),cN(476,`boolean`),ag()(),Tl(477,`td`,21)(478,`p`)(479,`code`),cN(480,`false`),ag()()(),Tl(481,`td`,22)(482,`em`)(483,`strong`),cN(484,`(opcional)`),ag()(),Tl(485,`p`),cN(486,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),ag(),Tl(487,`blockquote`)(488,`p`),cN(489,`Esta propriedade funciona somente se a propriedade `),Tl(490,`code`),cN(491,`p-url`),ag(),cN(492,` tiver um valor atribuído.`),ag()()()(),Tl(493,`tr`,14)(494,`td`,15)(495,`div`,23)(496,`span`,24),cN(497,` p-compact-label`),Gl(498,`br`),ag()()(),Tl(499,`td`,19)(500,`code`,26),cN(501,`boolean`),ag()(),Tl(502,`td`,21)(503,`p`)(504,`code`),cN(505,`false`),ag()()(),Tl(506,`td`,22)(507,`em`)(508,`strong`),cN(509,`(opcional)`),ag()(),Tl(510,`p`),cN(511,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(512,`p`),cN(513,`Quando habilitado (`),Tl(514,`code`),cN(515,`true`),ag(),cN(516,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(517,`ul`)(518,`li`)(519,`code`),cN(520,`po-label`),ag()(),Tl(521,`li`)(522,`code`),cN(523,`p-requirement (showRequired)`),ag()(),Tl(524,`li`)(525,`code`),cN(526,`po-helper`),ag()()(),Tl(527,`p`),cN(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(529,`p`),cN(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(531,`ul`)(532,`li`)(533,`code`),cN(534,`--field-container-title-justify`),ag()(),Tl(535,`li`)(536,`code`),cN(537,`--field-container-title-flex`),ag()()(),Tl(538,`p`),cN(539,`Exemplo:`),ag(),Tl(540,`pre`)(541,`code`),cN(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(543,`p`),cN(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(545,`tr`,14)(546,`td`,15)(547,`div`,23)(548,`span`,24),cN(549,` p-custom-action`),Gl(550,`br`),ag()()(),Tl(551,`td`,19)(552,`code`,27),cN(553,`PoProgressAction`),ag()(),Tl(554,`td`,21),cN(555,`-`),ag(),Tl(556,`td`,22)(557,`em`)(558,`strong`),cN(559,`(opcional)`),ag()(),Tl(560,`p`),cN(561,`Define uma ação personalizada no componente `),Tl(562,`code`),cN(563,`po-upload`),ag(),cN(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ag(),Tl(565,`p`),cN(566,`A ação deve implementar a interface `),Tl(567,`strong`),cN(568,`PoProgressAction`),ag(),cN(569,`, permitindo configurar propriedades como:`),ag(),Tl(570,`ul`)(571,`li`)(572,`code`),cN(573,`label`),ag(),cN(574,`: Texto do botão.`),ag(),Tl(575,`li`)(576,`code`),cN(577,`icon`),ag(),cN(578,`: Ícone a ser exibido no botão.`),ag(),Tl(579,`li`)(580,`code`),cN(581,`type`),ag(),cN(582,`: Tipo de botão (ex.: `),Tl(583,`code`),cN(584,`danger`),ag(),cN(585,` ou `),Tl(586,`code`),cN(587,`default`),ag(),cN(588,`).`),ag(),Tl(589,`li`)(590,`code`),cN(591,`disabled`),ag(),cN(592,`: Indica se o botão deve estar desabilitado.`),ag(),Tl(593,`li`)(594,`code`),cN(595,`visible`),ag(),cN(596,`: Indica se o botão deve estar visível.`),ag()(),Tl(597,`p`)(598,`strong`),cN(599,`Exemplo de uso:`),ag()(),Tl(600,`pre`)(601,`code`,28),cN(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),ag()(),Tl(603,`pre`)(604,`code`,29),cN(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),ag()()()(),Tl(606,`tr`,14)(607,`td`,15)(608,`div`,16)(609,`span`,17),cN(610,` (p-custom-action-click)`),Gl(611,`br`),ag()()(),Tl(612,`td`,19)(613,`code`,20),cN(614,`EventEmitter`),ag()(),Tl(615,`td`,21),cN(616,`-`),ag(),Tl(617,`td`,22)(618,`em`)(619,`strong`),cN(620,`(opcional)`),ag()(),Tl(621,`p`),cN(622,`Evento emitido ao clicar na ação personalizada configurada no `),Tl(623,`code`),cN(624,`p-custom-action`),ag(),cN(625,`.`),ag(),Tl(626,`p`),cN(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ag(),Tl(628,`p`)(629,`strong`),cN(630,`Exemplo de uso:`),ag()(),Tl(631,`pre`)(632,`code`,28),cN(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),ag()(),Tl(634,`pre`)(635,`code`,29),cN(636,`customAction: PoProgressAction = {
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
`),ag()()()(),Tl(637,`tr`,14)(638,`td`,15)(639,`div`,23)(640,`span`,24),cN(641,` p-custom-modal-actions`),Gl(642,`br`),ag()()(),Tl(643,`td`,19)(644,`code`,30),cN(645,`Array<PoModalAction>`),ag()(),Tl(646,`td`,21),cN(647,`-`),ag(),Tl(648,`td`,22)(649,`em`)(650,`strong`),cN(651,`(opcional)`),ag()(),Tl(652,`p`),cN(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),ag(),Tl(654,`p`),cN(655,`A ação deve implementar a interface `),Tl(656,`strong`),cN(657,`PoModalAction`),ag(),cN(658,`, permitindo configurar propriedades como:`),ag(),Tl(659,`ul`)(660,`li`)(661,`code`),cN(662,`label`),ag(),cN(663,`: Texto do botão.`),ag(),Tl(664,`li`)(665,`code`),cN(666,`action`),ag(),cN(667,`: Ícone a ser exibido no botão.`),ag(),Tl(668,`li`)(669,`code`),cN(670,`danger`),ag(),cN(671,`: Define a propriedade `),Tl(672,`code`),cN(673,`p-danger`),ag(),cN(674,` do botão.`),ag(),Tl(675,`li`)(676,`code`),cN(677,`disabled`),ag(),cN(678,`: Indica se o botão deve estar desabilitado.`),ag(),Tl(679,`li`)(680,`code`),cN(681,`visible`),ag(),cN(682,`: Indica se o botão deve estar visível.`),ag()(),Tl(683,`p`)(684,`strong`),cN(685,`Exemplo de uso:`),ag()(),Tl(686,`pre`)(687,`code`,28),cN(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),ag()(),Tl(689,`pre`)(690,`code`,29),cN(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),ag()()()(),Tl(692,`tr`,14)(693,`td`,15)(694,`div`,23)(695,`span`,24),cN(696,` p-directory`),Gl(697,`br`),ag()()(),Tl(698,`td`,19)(699,`code`,26),cN(700,`boolean`),ag()(),Tl(701,`td`,21)(702,`p`)(703,`code`),cN(704,`false`),ag()()(),Tl(705,`td`,22)(706,`em`)(707,`strong`),cN(708,`(opcional)`),ag()(),Tl(709,`p`),cN(710,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),ag(),Tl(711,`blockquote`)(712,`p`),cN(713,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),ag()(),Tl(714,`blockquote`)(715,`p`),cN(716,`Definição não suportada pelo browser `),Tl(717,`strong`),cN(718,`Internet Explorer`),ag(),cN(719,`, todavia será possível a seleção de arquivos padrão.`),ag()()()(),Tl(720,`tr`,14)(721,`td`,15)(722,`div`,23)(723,`span`,24),cN(724,` p-disabled`),Gl(725,`br`),ag()()(),Tl(726,`td`,19)(727,`code`,26),cN(728,`boolean`),ag()(),Tl(729,`td`,21),cN(730,`-`),ag(),Tl(731,`td`,22)(732,`em`)(733,`strong`),cN(734,`(opcional)`),ag()(),Tl(735,`p`),cN(736,`Indica que o campo será desabilitado.`),ag()()(),Tl(737,`tr`,14)(738,`td`,15)(739,`div`,23)(740,`span`,24),cN(741,` p-disabled-remove-file`),Gl(742,`br`),ag()()(),Tl(743,`td`,19)(744,`code`,26),cN(745,`boolean`),ag()(),Tl(746,`td`,21)(747,`p`)(748,`code`),cN(749,`false`),ag()()(),Tl(750,`td`,22)(751,`em`)(752,`strong`),cN(753,`(opcional)`),ag()(),Tl(754,`p`),cN(755,`Desabilita botão de remover o(s) arquivo(s) selecionado(s).`),ag()()(),Tl(756,`tr`,14)(757,`td`,15)(758,`div`,23)(759,`span`,24),cN(760,` p-drag-drop`),Gl(761,`br`),ag()()(),Tl(762,`td`,19)(763,`code`,26),cN(764,`boolean`),ag()(),Tl(765,`td`,21)(766,`p`)(767,`code`),cN(768,`false`),ag()()(),Tl(769,`td`,22)(770,`em`)(771,`strong`),cN(772,`(opcional)`),ag()(),Tl(773,`p`),cN(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ag(),Tl(775,`blockquote`)(776,`p`),cN(777,`Recomendamos utilizar apenas um `),Tl(778,`code`),cN(779,`po-upload`),ag(),cN(780,` com esta funcionalidade por tela.`),ag()()()(),Tl(781,`tr`,14)(782,`td`,15)(783,`div`,23)(784,`span`,24),cN(785,` p-drag-drop-height`),Gl(786,`br`),ag()()(),Tl(787,`td`,19)(788,`code`,31),cN(789,`number`),ag()(),Tl(790,`td`,21)(791,`p`)(792,`code`),cN(793,`320`),ag()()(),Tl(794,`td`,22)(795,`em`)(796,`strong`),cN(797,`(opcional)`),ag()(),Tl(798,`p`),cN(799,`Define em `),Tl(800,`em`),cN(801,`pixels`),ag(),cN(802,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Tl(803,`code`),cN(804,`160px`),ag(),cN(805,`.`),ag(),Tl(806,`blockquote`)(807,`p`),cN(808,`Esta propriedade funciona somente se a propriedade `),Tl(809,`code`),cN(810,`p-drag-drop`),ag(),cN(811,` estiver habilitada.`),ag()()()(),Tl(812,`tr`,14)(813,`td`,15)(814,`div`,23)(815,`span`,24),cN(816,` p-restrictions`),Gl(817,`br`),ag()()(),Tl(818,`td`,19)(819,`code`,32),cN(820,`PoUploadFileRestrictions`),ag()(),Tl(821,`td`,21),cN(822,`-`),ag(),Tl(823,`td`,22)(824,`em`)(825,`strong`),cN(826,`(opcional)`),ag()(),Tl(827,`p`),cN(828,`Objeto que segue a definição da interface `),Tl(829,`code`),cN(830,`PoUploadFileRestrictions`),ag(),cN(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ag()()(),Tl(832,`tr`,14)(833,`td`,15)(834,`div`,23)(835,`span`,24),cN(836,` p-form-field`),Gl(837,`br`),ag()()(),Tl(838,`td`,19)(839,`code`,25),cN(840,`string`),ag()(),Tl(841,`td`,21)(842,`p`)(843,`code`),cN(844,`files`),ag()()(),Tl(845,`td`,22)(846,`em`)(847,`strong`),cN(848,`(opcional)`),ag()(),Tl(849,`p`),cN(850,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Tl(851,`code`),cN(852,`p-url`),ag(),cN(853,`.`),ag()()(),Tl(854,`tr`,14)(855,`td`,15)(856,`div`,23)(857,`span`,24),cN(858,` p-headers`),Gl(859,`br`),ag()()(),Tl(860,`td`,19)(861,`code`,33),cN(862,`{ [name: string]: string `),ag(),Tl(863,`code`,34),cN(864,` Array<string>;
}`),ag()(),Tl(865,`td`,21),cN(866,`-`),ag(),Tl(867,`td`,22)(868,`p`),cN(869,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),ag()()(),Tl(870,`tr`,14)(871,`td`,15)(872,`div`,23)(873,`span`,24),cN(874,` p-help`),Gl(875,`br`),ag()()(),Tl(876,`td`,19)(877,`code`,25),cN(878,`string`),ag()(),Tl(879,`td`,21),cN(880,`-`),ag(),Tl(881,`td`,22)(882,`em`)(883,`strong`),cN(884,`(opcional)`),ag()(),Tl(885,`p`),cN(886,`Texto de apoio para o campo.`),ag()()(),Tl(887,`tr`,14)(888,`td`,15)(889,`div`,23)(890,`span`,24),cN(891,` p-hide-restrictions-info`),Gl(892,`br`),ag()()(),Tl(893,`td`,19)(894,`code`,26),cN(895,`boolean`),ag()(),Tl(896,`td`,21)(897,`p`)(898,`code`),cN(899,`false`),ag()()(),Tl(900,`td`,22)(901,`em`)(902,`strong`),cN(903,`(opcional)`),ag()(),Tl(904,`p`),cN(905,`Oculta visualmente as informações de restrições para o upload.`),ag()()(),Tl(906,`tr`,14)(907,`td`,15)(908,`div`,23)(909,`span`,24),cN(910,` p-hide-select-button`),Gl(911,`br`),ag()()(),Tl(912,`td`,19)(913,`code`,26),cN(914,`boolean`),ag()(),Tl(915,`td`,21)(916,`p`)(917,`code`),cN(918,`false`),ag()()(),Tl(919,`td`,22)(920,`em`)(921,`strong`),cN(922,`(opcional)`),ag()(),Tl(923,`p`),cN(924,`Omite o botão de seleção de arquivos.`),ag(),Tl(925,`blockquote`)(926,`p`),cN(927,`Caso o valor definido seja `),Tl(928,`code`),cN(929,`true`),ag(),cN(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(931,`code`),cN(932,`selectFiles()`),ag(),cN(933,` para seleção de arquivos.`),ag()()()(),Tl(934,`tr`,14)(935,`td`,15)(936,`div`,23)(937,`span`,24),cN(938,` p-hide-send-button`),Gl(939,`br`),ag()()(),Tl(940,`td`,19)(941,`code`,26),cN(942,`boolean`),ag()(),Tl(943,`td`,21)(944,`p`)(945,`code`),cN(946,`false`),ag()()(),Tl(947,`td`,22)(948,`em`)(949,`strong`),cN(950,`(opcional)`),ag()(),Tl(951,`p`),cN(952,`Omite o botão de envio de arquivos.`),ag(),Tl(953,`blockquote`)(954,`p`),cN(955,`Caso o valor definido seja `),Tl(956,`code`),cN(957,`true`),ag(),cN(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(959,`code`),cN(960,`sendFiles()`),ag(),cN(961,` para envio do(s) arquivo(s) selecionado(s).`),ag()()()(),Tl(962,`tr`,14)(963,`td`,15)(964,`div`,23)(965,`span`,24),cN(966,` p-multiple`),Gl(967,`br`),ag()()(),Tl(968,`td`,19)(969,`code`,26),cN(970,`boolean`),ag()(),Tl(971,`td`,21),cN(972,`-`),ag(),Tl(973,`td`,22)(974,`em`)(975,`strong`),cN(976,`(opcional)`),ag()(),Tl(977,`p`),cN(978,`Define se pode selecionar mais de um arquivo.`),ag(),Tl(979,`blockquote`)(980,`p`),cN(981,`Se utilizada a `),Tl(982,`code`),cN(983,`p-directory`),ag(),cN(984,`, habilita-se automaticamente esta propriedade.`),ag()()()(),Tl(985,`tr`,14)(986,`td`,15)(987,`div`,16)(988,`span`,17),cN(989,` (p-keydown)`),Gl(990,`br`),ag()()(),Tl(991,`td`,19)(992,`code`,20),cN(993,`EventEmitter`),ag()(),Tl(994,`td`,21),cN(995,`-`),ag(),Tl(996,`td`,22)(997,`em`)(998,`strong`),cN(999,`(opcional)`),ag()(),Tl(1e3,`p`),cN(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(1002,`code`),cN(1003,`KeyboardEvent`),ag(),cN(1004,` com informações sobre a tecla.`),ag()()(),Tl(1005,`tr`,14)(1006,`td`,15)(1007,`div`,23)(1008,`span`,24),cN(1009,` p-label`),Gl(1010,`br`),ag()()(),Tl(1011,`td`,19)(1012,`code`,25),cN(1013,`string`),ag()(),Tl(1014,`td`,21),cN(1015,`-`),ag(),Tl(1016,`td`,22)(1017,`em`)(1018,`strong`),cN(1019,`(opcional)`),ag()(),Tl(1020,`p`),cN(1021,`Rótulo do campo.`),ag()()(),Tl(1022,`tr`,14)(1023,`td`,15)(1024,`div`,23)(1025,`span`,24),cN(1026,` p-label-text-wrap`),Gl(1027,`br`),ag()()(),Tl(1028,`td`,19)(1029,`code`,26),cN(1030,`boolean`),ag()(),Tl(1031,`td`,21)(1032,`p`)(1033,`code`),cN(1034,`false`),ag()()(),Tl(1035,`td`,22)(1036,`em`)(1037,`strong`),cN(1038,`(opcional)`),ag()(),Tl(1039,`p`),cN(1040,`Habilita a quebra automática do texto da propriedade `),Tl(1041,`code`),cN(1042,`p-label`),ag(),cN(1043,`. Quando `),Tl(1044,`code`),cN(1045,`p-label-text-wrap`),ag(),cN(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),cN(1051,` p-literals`),Gl(1052,`br`),ag()()(),Tl(1053,`td`,19)(1054,`code`,35),cN(1055,`PoUploadLiterals`),ag()(),Tl(1056,`td`,21),cN(1057,`-`),ag(),Tl(1058,`td`,22)(1059,`em`)(1060,`strong`),cN(1061,`(opcional)`),ag()(),Tl(1062,`p`),cN(1063,`Objeto com as literais usadas no `),Tl(1064,`code`),cN(1065,`po-upload`),ag(),cN(1066,`.`),ag(),Tl(1067,`p`),cN(1068,`Existem duas maneiras de customizar o componente:`),ag(),Tl(1069,`ul`)(1070,`li`),cN(1071,`passando um objeto implementando a interface `),Tl(1072,`code`),cN(1073,`PoUploadLiterals`),ag(),cN(1074,` com todas as literais disponíveis;`),ag(),Tl(1075,`li`),cN(1076,`passando apenas as literais que deseja customizar:`),Tl(1077,`pre`)(1078,`code`),cN(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),ag()()()(),Tl(1080,`p`),cN(1081,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),ag(),Tl(1082,`pre`)(1083,`code`),cN(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),ag()(),Tl(1085,`blockquote`)(1086,`p`),cN(1087,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Tl(1088,`em`),cN(1089,`browser`),ag(),cN(1090,` (pt, en, es, ru).`),ag()()()(),Tl(1091,`tr`,14)(1092,`td`,15)(1093,`div`,23)(1094,`span`,24),cN(1095,` p-loading`),Gl(1096,`br`),ag()()(),Tl(1097,`td`,19)(1098,`code`,26),cN(1099,`boolean`),ag()(),Tl(1100,`td`,21)(1101,`p`)(1102,`code`),cN(1103,`false`),ag()()(),Tl(1104,`td`,22)(1105,`em`)(1106,`strong`),cN(1107,`(opcional)`),ag()(),Tl(1108,`p`),cN(1109,`Exibe um ícone de carregamento no botão `),Tl(1110,`code`),cN(1111,`Selecionar arquivo`),ag(),cN(1112,`, à esquerda do texto, sinalizando que uma operação está\xA0em andamento.`),ag(),Tl(1113,`blockquote`)(1114,`p`),cN(1115,`Incompatível com `),Tl(1116,`code`),cN(1117,`p-drag-drop`),ag(),cN(1118,` e `),Tl(1119,`code`),cN(1120,`p-hide-select-button`),ag(),cN(1121,`, pois o estado de loading depende da exibição do botão `),Tl(1122,`code`),cN(1123,`Selecionar arquivo`),ag(),cN(1124,`.`),ag()()()(),Tl(1125,`tr`,14)(1126,`td`,15)(1127,`div`,23)(1128,`span`,24),cN(1129,` name`),Gl(1130,`br`),ag()()(),Tl(1131,`td`,19)(1132,`code`,25),cN(1133,`string`),ag()(),Tl(1134,`td`,21),cN(1135,`-`),ag(),Tl(1136,`td`,22)(1137,`p`),cN(1138,`Define o valor do atributo `),Tl(1139,`code`),cN(1140,`name`),ag(),cN(1141,` do componente.`),ag()()(),Tl(1142,`tr`,14)(1143,`td`,15)(1144,`div`,16)(1145,`span`,17),cN(1146,` (ngModelChange)`),Gl(1147,`br`),ag()()(),Tl(1148,`td`,19)(1149,`code`,20),cN(1150,`EventEmitter`),ag()(),Tl(1151,`td`,21),cN(1152,`-`),ag(),Tl(1153,`td`,22)(1154,`em`)(1155,`strong`),cN(1156,`(opcional)`),ag()(),Tl(1157,`p`),cN(1158,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da `),Tl(1159,`em`),cN(1160,`tag`),ag(),Tl(1161,`code`),cN(1162,`form`),ag(),cN(1163,`.`),ag(),Tl(1164,`p`),cN(1165,`Na versão 12.2.0 do Angular a verificação `),Tl(1166,`code`),cN(1167,`strictTemplates`),ag(),cN(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ag(),Tl(1169,`pre`)(1170,`code`),cN(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),ag()()()(),Tl(1172,`tr`,14)(1173,`td`,15)(1174,`div`,16)(1175,`span`,17),cN(1176,` (p-cancel)`),Gl(1177,`br`),ag()()(),Tl(1178,`td`,19)(1179,`code`,20),cN(1180,`EventEmitter`),ag()(),Tl(1181,`td`,21),cN(1182,`-`),ag(),Tl(1183,`td`,22)(1184,`em`)(1185,`strong`),cN(1186,`(opcional)`),ag()(),Tl(1187,`p`),cN(1188,`Evento será disparado ao clicar no ícone de fechar.`),ag(),Tl(1189,`blockquote`)(1190,`p`),cN(1191,`Por parâmetro será passado o objeto do arquivo.`),ag()()()(),Tl(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),cN(1196,` (p-error)`),Gl(1197,`br`),ag()()(),Tl(1198,`td`,19)(1199,`code`,20),cN(1200,`EventEmitter`),ag()(),Tl(1201,`td`,21),cN(1202,`-`),ag(),Tl(1203,`td`,22)(1204,`em`)(1205,`strong`),cN(1206,`(opcional)`),ag()(),Tl(1207,`p`),cN(1208,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),ag(),Tl(1209,`blockquote`)(1210,`p`),cN(1211,`Por parâmetro será passado o objeto do retorno que é do tipo `),Tl(1212,`code`),cN(1213,`HttpErrorResponse`),ag(),cN(1214,`.`),ag()()()(),Tl(1215,`tr`,14)(1216,`td`,15)(1217,`div`,16)(1218,`span`,17),cN(1219,` (p-open-modal-preview)`),Gl(1220,`br`),ag()()(),Tl(1221,`td`,19)(1222,`code`,20),cN(1223,`EventEmitter`),ag()(),Tl(1224,`td`,21),cN(1225,`-`),ag(),Tl(1226,`td`,22)(1227,`em`)(1228,`strong`),cN(1229,`(opcional)`),ag()(),Tl(1230,`p`),cN(1231,`Evento será disparado ao abrir o modal de pré-visualização.`),ag(),Tl(1232,`blockquote`)(1233,`p`),cN(1234,`Por parâmetro será passado o objeto do arquivo.`),ag()()()(),Tl(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),cN(1239,` (p-remove)`),Gl(1240,`br`),ag()()(),Tl(1241,`td`,19)(1242,`code`,20),cN(1243,`EventEmitter`),ag()(),Tl(1244,`td`,21),cN(1245,`-`),ag(),Tl(1246,`td`,22)(1247,`em`)(1248,`strong`),cN(1249,`(opcional)`),ag()(),Tl(1250,`p`),cN(1251,`Evento será disparado ao clicar no ícone de remover.`),ag(),Tl(1252,`blockquote`)(1253,`p`),cN(1254,`Por parâmetro será passado o objeto do arquivo.`),ag()()()(),Tl(1255,`tr`,14)(1256,`td`,15)(1257,`div`,16)(1258,`span`,17),cN(1259,` (p-success)`),Gl(1260,`br`),ag()()(),Tl(1261,`td`,19)(1262,`code`,20),cN(1263,`EventEmitter`),ag()(),Tl(1264,`td`,21),cN(1265,`-`),ag(),Tl(1266,`td`,22)(1267,`em`)(1268,`strong`),cN(1269,`(opcional)`),ag()(),Tl(1270,`p`),cN(1271,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),ag(),Tl(1272,`blockquote`)(1273,`p`),cN(1274,`Por parâmetro será passado o objeto do retorno que é do tipo `),Tl(1275,`code`),cN(1276,`HttpResponse`),ag(),cN(1277,`.`),ag()()()(),Tl(1278,`tr`,14)(1279,`td`,15)(1280,`div`,16)(1281,`span`,17),cN(1282,` (p-upload)`),Gl(1283,`br`),ag()()(),Tl(1284,`td`,19)(1285,`code`,20),cN(1286,`EventEmitter`),ag()(),Tl(1287,`td`,21),cN(1288,`-`),ag(),Tl(1289,`td`,22)(1290,`em`)(1291,`strong`),cN(1292,`(opcional)`),ag()(),Tl(1293,`p`),cN(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ag(),Tl(1295,`blockquote`)(1296,`p`),cN(1297,`data, nesta propriedade pode ser informado algum dado`),ag()(),Tl(1298,`pre`)(1299,`code`),cN(1300,`event.data = {id: 'id do usu\xE1rio'};
`),ag()(),Tl(1301,`blockquote`)(1302,`p`),cN(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Tl(1304,`code`),cN(1305,`data`),ag(),cN(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),ag()(),Tl(1307,`pre`)(1308,`code`),cN(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),ag()()()(),Tl(1310,`tr`,14)(1311,`td`,15)(1312,`div`,23)(1313,`span`,24),cN(1314,` p-optional`),Gl(1315,`br`),ag()()(),Tl(1316,`td`,19)(1317,`code`,26),cN(1318,`boolean`),ag()(),Tl(1319,`td`,21)(1320,`p`)(1321,`code`),cN(1322,`false`),ag()()(),Tl(1323,`td`,22)(1324,`em`)(1325,`strong`),cN(1326,`(opcional)`),ag()(),Tl(1327,`p`),cN(1328,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(1329,`blockquote`)(1330,`p`),cN(1331,`Não será exibida a indicação se:`),ag()(),Tl(1332,`ul`)(1333,`li`),cN(1334,`O campo conter `),Tl(1335,`code`),cN(1336,`p-required`),ag(),cN(1337,`;`),ag(),Tl(1338,`li`),cN(1339,`Não possuir `),Tl(1340,`code`),cN(1341,`p-help`),ag(),cN(1342,` e/ou `),Tl(1343,`code`),cN(1344,`p-label`),ag(),cN(1345,`.`),ag()()()(),Tl(1346,`tr`,14)(1347,`td`,15)(1348,`div`,23)(1349,`span`,24),cN(1350,` p-helper`),Gl(1351,`br`),ag()()(),Tl(1352,`td`,19)(1353,`code`,36),cN(1354,`PoHelperOptions `),ag(),Tl(1355,`code`,25),cN(1356,` string`),ag()(),Tl(1357,`td`,21),cN(1358,`-`),ag(),Tl(1359,`td`,22)(1360,`em`)(1361,`strong`),cN(1362,`(opcional)`),ag()(),Tl(1363,`p`),cN(1364,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1365,`code`),cN(1366,`p-label`),ag(),cN(1367,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1368,`code`),cN(1369,`p-label`),ag(),cN(1370,`.`),ag(),Tl(1371,`blockquote`)(1372,`p`),cN(1373,`Para mais informações acesse: `),Tl(1374,`a`,37),cN(1375,`https://po-ui.io/documentation/po-helper`),ag(),cN(1376,`.`),ag()(),Tl(1377,`blockquote`)(1378,`p`),cN(1379,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1380,`code`),cN(1381,`p-additional-help-tooltip`),ag(),cN(1382,` e `),Tl(1383,`code`),cN(1384,`p-additional-help`),ag(),cN(1385,`) será ignorado.`),ag()()()(),Tl(1386,`tr`,14)(1387,`td`,15)(1388,`div`,23)(1389,`span`,24),cN(1390,` p-required`),Gl(1391,`br`),ag()()(),Tl(1392,`td`,19)(1393,`code`,26),cN(1394,`boolean`),ag()(),Tl(1395,`td`,21)(1396,`p`)(1397,`code`),cN(1398,`false`),ag()()(),Tl(1399,`td`,22)(1400,`em`)(1401,`strong`),cN(1402,`(opcional)`),ag()(),Tl(1403,`p`),cN(1404,`Define que o campo será obrigatório.`),ag()()(),Tl(1405,`tr`,14)(1406,`td`,15)(1407,`div`,23)(1408,`span`,24),cN(1409,` p-required-url`),Gl(1410,`br`),ag()()(),Tl(1411,`td`,19)(1412,`code`,26),cN(1413,`boolean`),ag()(),Tl(1414,`td`,21)(1415,`p`)(1416,`code`),cN(1417,`true`),ag()()(),Tl(1418,`td`,22)(1419,`em`)(1420,`strong`),cN(1421,`(opcional)`),ag()(),Tl(1422,`p`),cN(1423,`Define se a propriedade `),Tl(1424,`code`),cN(1425,`p-url`),ag(),cN(1426,` é obrigatória.`),ag(),Tl(1427,`p`),cN(1428,`Caso a propriedade seja definida como `),Tl(1429,`code`),cN(1430,`false`),ag(),cN(1431,`:`),ag(),Tl(1432,`ul`)(1433,`li`),cN(1434,`o botão de "Selecionar arquivo" ficará habilitado mesmo sem a propriedade `),Tl(1435,`code`),cN(1436,`p-url`),ag(),cN(1437,` definida.`),ag(),Tl(1438,`li`),cN(1439,`o botão "Iniciar envio" ficará oculto até que a propriedade `),Tl(1440,`code`),cN(1441,`p-url`),ag(),cN(1442,` seja definida.`),ag()(),Tl(1443,`blockquote`)(1444,`p`),cN(1445,`Se utilizada com a propriedade `),Tl(1446,`code`),cN(1447,`p-auto-upload`),ag(),cN(1448,` definida como `),Tl(1449,`code`),cN(1450,`true`),ag(),cN(1451,` será necessário definir a propriedade `),Tl(1452,`code`),cN(1453,`p-url`),ag(),cN(1454,`.`),ag()()()(),Tl(1455,`tr`,14)(1456,`td`,15)(1457,`div`,23)(1458,`span`,24),cN(1459,` p-show-required`),Gl(1460,`br`),ag()()(),Tl(1461,`td`,19)(1462,`code`,26),cN(1463,`boolean`),ag()(),Tl(1464,`td`,21),cN(1465,`-`),ag(),Tl(1466,`td`,22)(1467,`p`),cN(1468,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1469,`blockquote`)(1470,`p`),cN(1471,`Não será exibida a indicação se:`),ag()(),Tl(1472,`ul`)(1473,`li`),cN(1474,`Não possuir `),Tl(1475,`code`),cN(1476,`p-help`),ag(),cN(1477,` e/ou `),Tl(1478,`code`),cN(1479,`p-label`),ag(),cN(1480,`.`),ag()()()(),Tl(1481,`tr`,14)(1482,`td`,15)(1483,`div`,23)(1484,`span`,24),cN(1485,` p-show-thumbnail`),Gl(1486,`br`),ag()()(),Tl(1487,`td`,19)(1488,`code`,26),cN(1489,`boolean`),ag()(),Tl(1490,`td`,21)(1491,`p`)(1492,`code`),cN(1493,`true`),ag()()(),Tl(1494,`td`,22)(1495,`em`)(1496,`strong`),cN(1497,`(opcional)`),ag()(),Tl(1498,`p`),cN(1499,`Exibe a pré-visualização de imagens ao anexá-las.`),ag(),Tl(1500,`blockquote`)(1501,`p`),cN(1502,`Propriedade funciona apenas em arquivos de formato de imagem (`),Tl(1503,`code`),cN(1504,`.png`),ag(),cN(1505,`, `),Tl(1506,`code`),cN(1507,`.jpg`),ag(),cN(1508,`, `),Tl(1509,`code`),cN(1510,`.jpeg`),ag(),cN(1511,` e `),Tl(1512,`code`),cN(1513,`.gif`),ag(),cN(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),ag()()()(),Tl(1515,`tr`,14)(1516,`td`,15)(1517,`div`,23)(1518,`span`,24),cN(1519,` p-size`),Gl(1520,`br`),ag()()(),Tl(1521,`td`,19)(1522,`code`,25),cN(1523,`string`),ag()(),Tl(1524,`td`,21)(1525,`p`)(1526,`code`),cN(1527,`medium`),ag()()(),Tl(1528,`td`,22)(1529,`em`)(1530,`strong`),cN(1531,`(opcional)`),ag()(),Tl(1532,`p`),cN(1533,`Define o tamanho e as ações do componente:`),ag(),Tl(1534,`ul`)(1535,`li`)(1536,`code`),cN(1537,`small`),ag(),cN(1538,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1539,`li`)(1540,`code`),cN(1541,`medium`),ag(),cN(1542,`: altura do button como 44px.`),ag()(),Tl(1543,`blockquote`)(1544,`p`),cN(1545,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1546,`code`),cN(1547,`medium`),ag(),cN(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1549,`a`,38),cN(1550,`po-theme`),ag(),cN(1551,`.`),ag()()()(),Tl(1552,`tr`,14)(1553,`td`,15)(1554,`div`,23)(1555,`span`,24),cN(1556,` p-url`),Gl(1557,`br`),ag()()(),Tl(1558,`td`,19)(1559,`code`,25),cN(1560,`string`),ag()(),Tl(1561,`td`,21),cN(1562,`-`),ag(),Tl(1563,`td`,22)(1564,`p`),cN(1565,`URL que deve ser feita a requisição com os arquivos selecionados.`),ag()()()(),Tl(1566,`h3`,10),cN(1567,`Métodos`),ag(),Tl(1568,`table`,39)(1569,`tr`,14)(1570,`th`,40)(1571,`div`,23)(1572,`h4`)(1573,`span`,24),cN(1574,` clear `),ag()()()()(),Tl(1575,`tr`,22)(1576,`td`,22)(1577,`p`),cN(1578,`Método responsável por `),Tl(1579,`strong`),cN(1580,`limpar`),ag(),cN(1581,` o(s) arquivo(s) selecionado(s).`),ag()()()(),Gl(1582,`br`),Tl(1583,`table`,39)(1584,`tr`,14)(1585,`th`,40)(1586,`div`,23)(1587,`h4`)(1588,`span`,24),cN(1589,` focus `),ag()()()()(),Tl(1590,`tr`,22)(1591,`td`,22)(1592,`p`),cN(1593,`Função que atribui foco ao componente.`),ag(),Tl(1594,`p`),cN(1595,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1596,`pre`)(1597,`code`),cN(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),ag()()()()(),Gl(1599,`br`),Tl(1600,`table`,39)(1601,`tr`,14)(1602,`th`,40)(1603,`div`,23)(1604,`h4`)(1605,`span`,24),cN(1606,` closeModal `),ag()()()()(),Tl(1607,`tr`,22)(1608,`td`,22)(1609,`p`),cN(1610,`Método responsável por fechar o modal.`),ag()()()(),Gl(1611,`br`),Tl(1612,`table`,39)(1613,`tr`,14)(1614,`th`,40)(1615,`div`,23)(1616,`h4`)(1617,`span`,24),cN(1618,` selectFiles `),ag()()()()(),Tl(1619,`tr`,22)(1620,`td`,22)(1621,`p`),cN(1622,`Método responsável por `),Tl(1623,`strong`),cN(1624,`abrir`),ag(),cN(1625,` a janela para seleção de arquivo(s).`),ag()()()(),Gl(1626,`br`),Tl(1627,`table`,39)(1628,`tr`,14)(1629,`th`,40)(1630,`div`,23)(1631,`h4`)(1632,`span`,24),cN(1633,` sendFiles `),ag()()()()(),Tl(1634,`tr`,22)(1635,`td`,22)(1636,`p`),cN(1637,`Método responsável por `),Tl(1638,`strong`),cN(1639,`enviar`),ag(),cN(1640,` o(s) arquivo(s) selecionado(s).`),ag()()()(),Gl(1641,`br`),Tl(1642,`table`,39)(1643,`tr`,14)(1644,`th`,40)(1645,`div`,23)(1646,`h4`)(1647,`span`,24),cN(1648,` showAdditionalHelp `),ag()()()()(),Tl(1649,`tr`,22)(1650,`td`,22)(1651,`p`),cN(1652,`Método que exibe `),Tl(1653,`code`),cN(1654,`p-helper`),ag(),cN(1655,` ou executa a ação definida em `),Tl(1656,`code`),cN(1657,`p-helper{eventOnClick}`),ag(),cN(1658,` ou em `),Tl(1659,`code`),cN(1660,`p-additionalHelp`),ag(),cN(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1662,`code`),cN(1663,`p-keydown`),ag(),cN(1664,`.`),ag(),Tl(1665,`blockquote`)(1666,`p`),cN(1667,`Exibe ou oculta o conteúdo do componente `),Tl(1668,`code`),cN(1669,`po-helper`),ag(),cN(1670,` quando o componente estiver com foco.`),ag()(),Tl(1671,`pre`)(1672,`code`),cN(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),ag()(),Tl(1674,`pre`)(1675,`code`),cN(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1677,`br`),Tl(1678,`h3`),cN(1679,`Interfaces`),ag(),Tl(1680,`h4`,41)(1681,`code`,5),cN(1682,`PoUploadFileRestrictions`),ag()(),Tl(1683,`div`,2)(1684,`p`),cN(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),ag()(),Tl(1686,`h4`,10),cN(1687,`Propriedades`),ag(),Tl(1688,`table`,11)(1689,`tr`,12)(1690,`th`,13),cN(1691,`Nome`),ag(),Tl(1692,`th`,13),cN(1693,`Tipo`),ag(),Tl(1694,`th`,13),cN(1695,`Descrição`),ag()(),Tl(1696,`tr`,14)(1697,`td`,15)(1698,`div`,23)(1699,`span`,24),cN(1700,` allowedExtensions`),Gl(1701,`br`),ag()()(),Tl(1702,`td`,19)(1703,`code`,42),cN(1704,`Array<string>`),ag()(),Tl(1705,`td`,22)(1706,`em`)(1707,`strong`),cN(1708,`(opcional)`),ag()(),Tl(1709,`p`),cN(1710,`Extensões permitidas de arquivos que serão enviados ao servidor, devendo ser informada uma coleção de extensões, por exemplo:`),ag(),Tl(1711,`pre`)(1712,`code`),cN(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),ag()()()(),Tl(1714,`tr`,14)(1715,`td`,15)(1716,`div`,23)(1717,`span`,24),cN(1718,` maxFileSize`),Gl(1719,`br`),ag()()(),Tl(1720,`td`,19)(1721,`code`,31),cN(1722,`number`),ag()(),Tl(1723,`td`,22)(1724,`em`)(1725,`strong`),cN(1726,`(opcional)`),ag()(),Tl(1727,`p`),cN(1728,`Tamanho máximo do arquivo a ser enviado ao servidor.`),ag(),Tl(1729,`p`),cN(1730,`Deve ser informado um valor em `),Tl(1731,`em`),cN(1732,`bytes`),ag(),cN(1733,`, por exemplo: `),Tl(1734,`code`),cN(1735,`31457280`),ag(),cN(1736,` (30MB).`),ag(),Tl(1737,`blockquote`)(1738,`p`),cN(1739,`Por padrão o valor é `),Tl(1740,`code`),cN(1741,`30 MB`),ag(),cN(1742,`.`),ag()()()(),Tl(1743,`tr`,14)(1744,`td`,15)(1745,`div`,23)(1746,`span`,24),cN(1747,` maxFiles`),Gl(1748,`br`),ag()()(),Tl(1749,`td`,19)(1750,`code`,31),cN(1751,`number`),ag()(),Tl(1752,`td`,22)(1753,`em`)(1754,`strong`),cN(1755,`(opcional)`),ag()(),Tl(1756,`p`),cN(1757,`Quantidade máxima de arquivos para o `),Tl(1758,`em`),cN(1759,`upload`),ag(),cN(1760,`.`),ag(),Tl(1761,`blockquote`)(1762,`p`),cN(1763,`Esta propriedade será válida somente se a propriedade `),Tl(1764,`code`),cN(1765,`p-multiple`),ag(),cN(1766,` estiver habilitada e seu valor for maior do que zero.`),ag()()()(),Tl(1767,`tr`,14)(1768,`td`,15)(1769,`div`,23)(1770,`span`,24),cN(1771,` minFileSize`),Gl(1772,`br`),ag()()(),Tl(1773,`td`,19)(1774,`code`,31),cN(1775,`number`),ag()(),Tl(1776,`td`,22)(1777,`em`)(1778,`strong`),cN(1779,`(opcional)`),ag()(),Tl(1780,`p`),cN(1781,`Tamanho mínimo em `),Tl(1782,`em`),cN(1783,`bytes`),ag(),cN(1784,` do arquivo que será enviado ao servidor.`),ag(),Tl(1785,`blockquote`)(1786,`p`),cN(1787,`Por padrão o valor é `),Tl(1788,`code`),cN(1789,`0`),ag(),cN(1790,`.`),ag()()()()(),Tl(1791,`h4`,41)(1792,`code`,5),cN(1793,`PoUploadLiterals`),ag()(),Tl(1794,`div`,2)(1795,`p`),cN(1796,`Interface para definição das literais usadas no `),Tl(1797,`code`),cN(1798,`po-upload`),ag(),cN(1799,`.`),ag()(),Tl(1800,`h4`,10),cN(1801,`Propriedades`),ag(),Tl(1802,`table`,11)(1803,`tr`,12)(1804,`th`,13),cN(1805,`Nome`),ag(),Tl(1806,`th`,13),cN(1807,`Tipo`),ag(),Tl(1808,`th`,13),cN(1809,`Descrição`),ag()(),Tl(1810,`tr`,14)(1811,`td`,15)(1812,`div`,23)(1813,`span`,24),cN(1814,` close`),Gl(1815,`br`),ag()()(),Tl(1816,`td`,19)(1817,`code`,25),cN(1818,`string`),ag()(),Tl(1819,`td`,22)(1820,`em`)(1821,`strong`),cN(1822,`(opcional)`),ag()(),Tl(1823,`p`),cN(1824,`Texto do leitor de tela ao focar no ícone de fechar.`),ag()()(),Tl(1825,`tr`,14)(1826,`td`,15)(1827,`div`,23)(1828,`span`,24),cN(1829,` continue`),Gl(1830,`br`),ag()()(),Tl(1831,`td`,19)(1832,`code`,25),cN(1833,`string`),ag()(),Tl(1834,`td`,22)(1835,`em`)(1836,`strong`),cN(1837,`(opcional)`),ag()(),Tl(1838,`p`),cN(1839,`Texto do botão padrão do modal de pré-visualizar.`),ag()()(),Tl(1840,`tr`,14)(1841,`td`,15)(1842,`div`,23)(1843,`span`,24),cN(1844,` doneText`),Gl(1845,`br`),ag()()(),Tl(1846,`td`,19)(1847,`code`,25),cN(1848,`string`),ag()(),Tl(1849,`td`,22)(1850,`em`)(1851,`strong`),cN(1852,`(opcional)`),ag()(),Tl(1853,`p`),cN(1854,`Texto a ser exibido no container de informação quando o estado for de sucesso.`),ag()()(),Tl(1855,`tr`,14)(1856,`td`,15)(1857,`div`,23)(1858,`span`,24),cN(1859,` dragFilesHere`),Gl(1860,`br`),ag()()(),Tl(1861,`td`,19)(1862,`code`,25),cN(1863,`string`),ag()(),Tl(1864,`td`,22)(1865,`em`)(1866,`strong`),cN(1867,`(opcional)`),ag()(),Tl(1868,`p`),cN(1869,`Texto indicativo para a área onde os arquivos devem ser arrastados quando utilizada a propriedade `),Tl(1870,`code`),cN(1871,`p-drag-drop`),ag(),cN(1872,`.`),ag()()(),Tl(1873,`tr`,14)(1874,`td`,15)(1875,`div`,23)(1876,`span`,24),cN(1877,` dragFoldersHere`),Gl(1878,`br`),ag()()(),Tl(1879,`td`,19)(1880,`code`,25),cN(1881,`string`),ag()(),Tl(1882,`td`,22)(1883,`em`)(1884,`strong`),cN(1885,`(opcional)`),ag()(),Tl(1886,`p`),cN(1887,`Texto indicativo para a área onde os diretórios devem ser arrastados quando utilizada a propriedade `),Tl(1888,`code`),cN(1889,`p-drag-drop`),ag(),cN(1890,`.`),ag()()(),Tl(1891,`tr`,14)(1892,`td`,15)(1893,`div`,23)(1894,`span`,24),cN(1895,` dropFilesHere`),Gl(1896,`br`),ag()()(),Tl(1897,`td`,19)(1898,`code`,25),cN(1899,`string`),ag()(),Tl(1900,`td`,22)(1901,`em`)(1902,`strong`),cN(1903,`(opcional)`),ag()(),Tl(1904,`p`),cN(1905,`Texto indicativo para a área onde os arquivos devem ser soltos quando utilizada a propriedade `),Tl(1906,`code`),cN(1907,`p-drag-drop`),ag()()()(),Tl(1908,`tr`,14)(1909,`td`,15)(1910,`div`,23)(1911,`span`,24),cN(1912,` dropFoldersHere`),Gl(1913,`br`),ag()()(),Tl(1914,`td`,19)(1915,`code`,25),cN(1916,`string`),ag()(),Tl(1917,`td`,22)(1918,`em`)(1919,`strong`),cN(1920,`(opcional)`),ag()(),Tl(1921,`p`),cN(1922,`Texto indicativo para a área onde os diretórios devem ser soltos quando utilizada a propriedade `),Tl(1923,`code`),cN(1924,`p-drag-drop`),ag(),cN(1925,`.`),ag()()(),Tl(1926,`tr`,14)(1927,`td`,15)(1928,`div`,23)(1929,`span`,24),cN(1930,` errorOccurred`),Gl(1931,`br`),ag()()(),Tl(1932,`td`,19)(1933,`code`,25),cN(1934,`string`),ag()(),Tl(1935,`td`,22)(1936,`em`)(1937,`strong`),cN(1938,`(opcional)`),ag()(),Tl(1939,`p`),cN(1940,`Texto a ser exibido quando ocorrer erro no envio do arquivo.`),ag()()(),Tl(1941,`tr`,14)(1942,`td`,15)(1943,`div`,23)(1944,`span`,24),cN(1945,` files`),Gl(1946,`br`),ag()()(),Tl(1947,`td`,19)(1948,`code`,25),cN(1949,`string`),ag()(),Tl(1950,`td`,22)(1951,`em`)(1952,`strong`),cN(1953,`(opcional)`),ag()(),Tl(1954,`p`),cN(1955,`Parâmetro `),Tl(1956,`em`),cN(1957,`files`),ag(),cN(1958,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Tl(1959,`em`),cN(1960,`dragDrop`),ag(),cN(1961,`.`),ag()()(),Tl(1962,`tr`,14)(1963,`td`,15)(1964,`div`,23)(1965,`span`,24),cN(1966,` folders`),Gl(1967,`br`),ag()()(),Tl(1968,`td`,19)(1969,`code`,25),cN(1970,`string`),ag()(),Tl(1971,`td`,22)(1972,`em`)(1973,`strong`),cN(1974,`(opcional)`),ag()(),Tl(1975,`p`),cN(1976,`Parâmetro `),Tl(1977,`em`),cN(1978,`folders`),ag(),cN(1979,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Tl(1980,`em`),cN(1981,`dragDrop`),ag(),cN(1982,`.`),ag()()(),Tl(1983,`tr`,14)(1984,`td`,15)(1985,`div`,23)(1986,`span`,24),cN(1987,` invalidDropArea`),Gl(1988,`br`),ag()()(),Tl(1989,`td`,19)(1990,`code`,25),cN(1991,`string`),ag()(),Tl(1992,`td`,22)(1993,`em`)(1994,`strong`),cN(1995,`(opcional)`),ag()(),Tl(1996,`p`),cN(1997,`Texto exibido caso o usuário arrastar um arquivo para um local inválido ao utilizar a opção de `),Tl(1998,`em`),cN(1999,`dragDrop`),ag(),cN(2e3,`.`),ag()()(),Tl(2001,`tr`,14)(2002,`td`,15)(2003,`div`,23)(2004,`span`,24),cN(2005,` preview`),Gl(2006,`br`),ag()()(),Tl(2007,`td`,19)(2008,`code`,25),cN(2009,`string`),ag()(),Tl(2010,`td`,22)(2011,`em`)(2012,`strong`),cN(2013,`(opcional)`),ag()(),Tl(2014,`p`),cN(2015,`Título do modal de pré-visualizar.`),ag()()(),Tl(2016,`tr`,14)(2017,`td`,15)(2018,`div`,23)(2019,`span`,24),cN(2020,` selectFile`),Gl(2021,`br`),ag()()(),Tl(2022,`td`,19)(2023,`code`,25),cN(2024,`string`),ag()(),Tl(2025,`td`,22)(2026,`em`)(2027,`strong`),cN(2028,`(opcional)`),ag()(),Tl(2029,`p`),cN(2030,`Texto exibido no label do botão de seleção dos arquivos.`),ag()()(),Tl(2031,`tr`,14)(2032,`td`,15)(2033,`div`,23)(2034,`span`,24),cN(2035,` selectFiles`),Gl(2036,`br`),ag()()(),Tl(2037,`td`,19)(2038,`code`,25),cN(2039,`string`),ag()(),Tl(2040,`td`,22)(2041,`em`)(2042,`strong`),cN(2043,`(opcional)`),ag()(),Tl(2044,`p`),cN(2045,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Tl(2046,`code`),cN(2047,`p-multiple`),ag(),cN(2048,`.`),ag()()(),Tl(2049,`tr`,14)(2050,`td`,15)(2051,`div`,23)(2052,`span`,24),cN(2053,` selectFilesOnComputer`),Gl(2054,`br`),ag()()(),Tl(2055,`td`,19)(2056,`code`,25),cN(2057,`string`),ag()(),Tl(2058,`td`,22)(2059,`em`)(2060,`strong`),cN(2061,`(opcional)`),ag()(),Tl(2062,`p`),cN(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Tl(2064,`em`),cN(2065,`dragDrop`),ag(),cN(2066,`.`),ag()()(),Tl(2067,`tr`,14)(2068,`td`,15)(2069,`div`,23)(2070,`span`,24),cN(2071,` selectFolder`),Gl(2072,`br`),ag()()(),Tl(2073,`td`,19)(2074,`code`,25),cN(2075,`string`),ag()(),Tl(2076,`td`,22)(2077,`em`)(2078,`strong`),cN(2079,`(opcional)`),ag()(),Tl(2080,`p`),cN(2081,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Tl(2082,`code`),cN(2083,`p-directory`),ag(),cN(2084,`.`),ag()()(),Tl(2085,`tr`,14)(2086,`td`,15)(2087,`div`,23)(2088,`span`,24),cN(2089,` selectFolderOnComputer`),Gl(2090,`br`),ag()()(),Tl(2091,`td`,19)(2092,`code`,25),cN(2093,`string`),ag()(),Tl(2094,`td`,22)(2095,`em`)(2096,`strong`),cN(2097,`(opcional)`),ag()(),Tl(2098,`p`),cN(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Tl(2100,`em`),cN(2101,`dragDrop`),ag(),cN(2102,`.`),ag()()(),Tl(2103,`tr`,14)(2104,`td`,15)(2105,`div`,23)(2106,`span`,24),cN(2107,` sentWithSuccess`),Gl(2108,`br`),ag()()(),Tl(2109,`td`,19)(2110,`code`,25),cN(2111,`string`),ag()(),Tl(2112,`td`,22)(2113,`em`)(2114,`strong`),cN(2115,`(opcional)`),ag()(),Tl(2116,`p`),cN(2117,`Texto a ser exibido quando o envio do arquivo for realizado com sucesso.`),ag()()(),Tl(2118,`tr`,14)(2119,`td`,15)(2120,`div`,23)(2121,`span`,24),cN(2122,` startSending`),Gl(2123,`br`),ag()()(),Tl(2124,`td`,19)(2125,`code`,25),cN(2126,`string`),ag()(),Tl(2127,`td`,22)(2128,`em`)(2129,`strong`),cN(2130,`(opcional)`),ag()(),Tl(2131,`p`),cN(2132,`Texto exibido no label do botão para iniciar o envio dos arquivos.`),ag()()(),Tl(2133,`tr`,14)(2134,`td`,15)(2135,`div`,23)(2136,`span`,24),cN(2137,` thumbnail`),Gl(2138,`br`),ag()()(),Tl(2139,`td`,19)(2140,`code`,25),cN(2141,`string`),ag()(),Tl(2142,`td`,22)(2143,`em`)(2144,`strong`),cN(2145,`(opcional)`),ag()(),Tl(2146,`p`),cN(2147,`Texto do leitor da miniatura da imagem.`),ag()()(),Tl(2148,`tr`,14)(2149,`td`,15)(2150,`div`,23)(2151,`span`,24),cN(2152,` tryAgain`),Gl(2153,`br`),ag()()(),Tl(2154,`td`,19)(2155,`code`,25),cN(2156,`string`),ag()(),Tl(2157,`td`,22)(2158,`em`)(2159,`strong`),cN(2160,`(opcional)`),ag()(),Tl(2161,`p`),cN(2162,`Texto de Tente novamente ao ocorrer erro ao enviar.`),ag()()(),Tl(2163,`tr`,14)(2164,`td`,15)(2165,`div`,23)(2166,`span`,24),cN(2167,` uploadingText`),Gl(2168,`br`),ag()()(),Tl(2169,`td`,19)(2170,`code`,25),cN(2171,`string`),ag()(),Tl(2172,`td`,22)(2173,`em`)(2174,`strong`),cN(2175,`(opcional)`),ag()(),Tl(2176,`p`),cN(2177,`Texto a ser exibido no container de informação quando o estado for enviando.`),ag()()()(),Tl(2178,`h4`,41)(2179,`code`,5),cN(2180,`PoProgressAction`),ag()(),Tl(2181,`div`,2)(2182,`p`),cN(2183,`Interface para as ações dos componentes po-progress e po-upload.`),ag()(),Tl(2184,`h4`,10),cN(2185,`Propriedades`),ag(),Tl(2186,`table`,11)(2187,`tr`,12)(2188,`th`,13),cN(2189,`Nome`),ag(),Tl(2190,`th`,13),cN(2191,`Tipo`),ag(),Tl(2192,`th`,13),cN(2193,`Descrição`),ag()(),Tl(2194,`tr`,14)(2195,`td`,15)(2196,`div`,23)(2197,`span`,24),cN(2198,` disabled`),Gl(2199,`br`),ag()()(),Tl(2200,`td`,19)(2201,`code`,26),cN(2202,`boolean `),ag(),Tl(2203,`code`,43),cN(2204,` Function`),ag()(),Tl(2205,`td`,22)(2206,`em`)(2207,`strong`),cN(2208,`(opcional)`),ag()(),Tl(2209,`p`),cN(2210,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),ag(),Tl(2211,`p`),cN(2212,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),ag()()(),Tl(2213,`tr`,14)(2214,`td`,15)(2215,`div`,23)(2216,`span`,24),cN(2217,` icon`),Gl(2218,`br`),ag()()(),Tl(2219,`td`,19)(2220,`code`,25),cN(2221,`string `),ag(),Tl(2222,`code`,44),cN(2223,` TemplateRef<void>`),ag()(),Tl(2224,`td`,22)(2225,`em`)(2226,`strong`),cN(2227,`(opcional)`),ag()(),Tl(2228,`p`),cN(2229,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),ag(),Tl(2230,`p`),cN(2231,`É possível usar qualquer um dos ícones da `),Tl(2232,`a`,45),cN(2233,`Biblioteca de ícones`),ag(),cN(2234,`. conforme exemplo abaixo:`),ag(),Tl(2235,`pre`)(2236,`code`),cN(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),ag()(),Tl(2238,`p`),cN(2239,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ag(),Tl(2240,`pre`)(2241,`code`),cN(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),ag()(),Tl(2243,`p`),cN(2244,`Outra opção seria a customização do ícone através do `),Tl(2245,`code`),cN(2246,`TemplateRef`),ag(),cN(2247,`, conforme exemplo abaixo:
component.html:`),ag(),Tl(2248,`pre`)(2249,`code`),cN(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),ag()(),Tl(2251,`p`),cN(2252,`component.ts:`),ag(),Tl(2253,`pre`)(2254,`code`),cN(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),ag()()()(),Tl(2256,`tr`,14)(2257,`td`,15)(2258,`div`,23)(2259,`span`,24),cN(2260,` label`),Gl(2261,`br`),ag()()(),Tl(2262,`td`,19)(2263,`code`,25),cN(2264,`string`),ag()(),Tl(2265,`td`,22)(2266,`em`)(2267,`strong`),cN(2268,`(opcional)`),ag()(),Tl(2269,`p`),cN(2270,`Rótulo da ação.`),ag()()(),Tl(2271,`tr`,14)(2272,`td`,15)(2273,`div`,23)(2274,`span`,24),cN(2275,` type`),Gl(2276,`br`),ag()()(),Tl(2277,`td`,19)(2278,`code`,25),cN(2279,`string`),ag()(),Tl(2280,`td`,22)(2281,`em`)(2282,`strong`),cN(2283,`(opcional)`),ag()(),Tl(2284,`p`),cN(2285,`Define a cor do item, sendo `),Tl(2286,`code`),cN(2287,`default`),ag(),cN(2288,` o padrão.`),ag(),Tl(2289,`p`),cN(2290,`Valores válidos:`),ag(),Tl(2291,`ul`)(2292,`li`)(2293,`code`),cN(2294,`default`),ag()(),Tl(2295,`li`)(2296,`code`),cN(2297,`danger`),ag(),cN(2298,` - indicado para ações exclusivas (excluir, sair).`),ag()()()(),Tl(2299,`tr`,14)(2300,`td`,15)(2301,`div`,23)(2302,`span`,24),cN(2303,` visible`),Gl(2304,`br`),ag()()(),Tl(2305,`td`,19)(2306,`code`,26),cN(2307,`boolean `),ag(),Tl(2308,`code`,43),cN(2309,` Function`),ag()(),Tl(2310,`td`,22)(2311,`em`)(2312,`strong`),cN(2313,`(opcional)`),ag()(),Tl(2314,`p`),cN(2315,`Define se a ação será visível.`),ag(),Tl(2316,`blockquote`)(2317,`p`),cN(2318,`Caso o valor não seja especificado a ação será visível.`),ag()(),Tl(2319,`p`),cN(2320,`Opções para tornar a ação visível ou não:`),ag(),Tl(2321,`ul`)(2322,`li`)(2323,`p`),cN(2324,`Função que deve retornar um booleano.`),ag()(),Tl(2325,`li`)(2326,`p`),cN(2327,`Informar diretamente um valor booleano.`),ag()()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var vt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Upload`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-upload-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-upload-basic-view`)(6,`sample-po-upload-labs-view`)(7,`sample-po-upload-resume-view`)(8,`sample-po-upload-rs-view`)(9,`sample-po-upload-download-view`)(10,`sample-po-upload-preview-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Fe,qe,ke,Le,Re,Oe,je],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(vt),bL]})}return a})();var cn=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ie]})}return a})();export{cn as DocPoUploadModule};