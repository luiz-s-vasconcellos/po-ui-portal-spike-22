import{$r as Vx,Br as TN,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,Kt as dt,M as ECe,Mi as gg,Mn as xbe,Ni as he,P as Eu,Pr as Qk,Qi as oN,Sa as yN,Sn as sU,St as U8e,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Yt as fCe,Zr as Vk,_ as $8e,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,er as FN,ga as w,jr as Pt,kn as vr,kr as PN,l as ar,la as tP,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,pt as Pbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx,zt as aU}from"./main-NT5YGKBQ.js";var De=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`upload`,`p-label`,`PO Upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`]],template:function(r,i){r&1&&ql(0,`po-upload`,0)},dependencies:[aU],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Upload Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-upload-basic/sample-po-upload-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-upload-basic/sample-po-upload-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-upload-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,He,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,De],encapsulation:2,changeDetection:1})}return a})();function Ge(a,Ne){if(a&1&&(Ml(0,`div`)(1,`po-widget`,22)(2,`form`,23),ql(3,`po-input`,24),f0(),ql(4,`po-select`,25),f0(),ql(5,`po-select`,26),f0(),ql(6,`po-switch`,27),f0(),ql(7,`po-switch`,28),f0(),lg()()()),a&2){let d=zx();Up(2),cw(`formGroup`,d.actionForm),Up(),p0(),Up(),cw(`p-options`,d.iconOptions),p0(),Up(),cw(`p-options`,d.typeOptions),p0(),Up(),p0(),Up(),p0()}}var Me=(()=>{class a{fb=f(Qk);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:`autoupload`,label:`Automatic upload`},{value:`directory`,label:`Directory`},{value:`disabled`,label:`Disabled`},{value:`disabledRemoveFile`,label:`Disabled Remove File`},{value:`dragDrop`,label:`Drag Drop`},{value:`requiredUrl`,label:`required Url`},{value:`multiple`,label:`Multiple upload`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`restrictionsInfo`,label:`Hide Restrictions Info`},{value:`selectButton`,label:`Hide Select Files Button`},{value:`sendButton`,label:`Hide Send Files Button`},{value:`showCustomAction`,label:`Add Custom Action to Progress`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`showThumbnail`,label:`Show Thumbnail`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(d){this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch(r){this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(`,`).map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText=``,this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals=``,this.modalActions=``,this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url=`https://po-sample-api.onrender.com/v1/uploads/addFile`,this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.customModalActions=[],this.size=`medium`}getValueInBytes(d){return 1048576*d}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-labs`]],standalone:!1,decls:29,vars:53,consts:[[`fRestrictions`,`ngForm`],[`name`,`upload`,3,`ngModelChange`,`p-custom-action-click`,`p-error`,`p-keydown`,`p-success`,`p-upload`,`p-open-modal-preview`,`p-remove`,`ngModel`,`p-helper`,`p-auto-upload`,`p-directory`,`p-disabled`,`p-required-url`,`p-disabled-remove-file`,`p-drag-drop`,`p-drag-drop-height`,`p-form-field`,`p-help`,`p-hide-select-button`,`p-hide-restrictions-info`,`p-hide-send-button`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-optional`,`p-required`,`p-show-required`,`p-show-thumbnail`,`p-restrictions`,`p-size`,`p-url`,`p-headers`,`p-custom-action`,`p-label-text-wrap`,`p-compact-label`,`p-custom-modal-actions`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`allowedExtensions`,`p-help`,`Digite as extensões permitidas separadas por vírgula`,`p-label`,`Allowed Extensions`,`p-placeholder`,`.png, .jpeg, .jpg`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxFiles`,`p-clean`,``,`p-help`,`Requer p-multiple habilitado`,`p-label`,`Max Files`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`dragDropHeight`,`p-clean`,``,`p-help`,`Altura da área de arrastar e soltar`,`p-label`,`Drag Drop Height`,`p-min`,`160`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Min File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Max File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`formField`,`p-clean`,``,`p-label`,`Form Field`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,`p-required`,``,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`headers`,`p-help`,`Ex.: {"Authorization": "12312414"}`,`p-label`,`Headers`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`customModalActions`,`p-help`,`Ex.: [{"label": "Label", "disabled": false}]`,`p-label`,`Custom Modal Actions`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`],[`name`,`properties`,`p-columns`,`4`,`p-help`,`Select any options`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`]],template:function(r,i){if(r&1){let m=Vx();Ml(0,`po-upload`,1),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.upload,l)||(i.upload=l),Jy(l)}),ht(`p-custom-action-click`,function(){return i.changeEvent(`p-custom-action-click`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-success`,function(){return i.changeEvent(`p-success`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-open-modal-preview`,function(){return i.changeEvent(`p-open-modal-preview`)})(`p-remove`,function(){return i.changeEvent(`p-remove`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3),PN(4,`json`),ql(5,`po-info`,4),lg(),ql(6,`po-divider`),Ml(7,`div`,2)(8,`form`,null,0)(10,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.allowedExtensions,l)||(i.allowedExtensions=l),Jy(l)}),ht(`p-change`,function(){return i.onChangeExtension()}),lg(),f0(),Ml(11,`po-number`,6),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.maxFiles,l)||(i.maxFiles=l),Jy(l)}),ht(`p-change`,function(){return i.onChangeMaxFiles(i.maxFiles)}),lg(),f0(),Ml(12,`po-number`,7),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.dragDropHeight,l)||(i.dragDropHeight=l),Jy(l)}),lg(),f0(),Ml(13,`po-number`,8),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.minSize,l)||(i.minSize=l),Jy(l)}),ht(`p-change`,function(){return i.onChangeMinSize(i.minSize)}),lg(),f0(),Ml(14,`po-number`,9),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.maxSize,l)||(i.maxSize=l),Jy(l)}),ht(`p-change`,function(){return i.onChangeMaxSize(i.maxSize)}),lg(),f0(),ql(15,`po-divider`),Ml(16,`po-input`,10),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.label,l)||(i.label=l),Jy(l)}),lg(),f0(),Ml(17,`po-input`,11),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.help,l)||(i.help=l),Jy(l)}),lg(),f0(),Ml(18,`po-input`,12),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.helperText,l)||(i.helperText=l),Jy(l)}),lg(),f0(),Ml(19,`po-input`,13),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.formField,l)||(i.formField=l),Jy(l)}),lg(),f0(),Ml(20,`po-input`,14),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.url,l)||(i.url=l),Jy(l)}),lg(),f0(),Ml(21,`po-input`,15),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.headersLabs,l)||(i.headersLabs=l),Jy(l)}),ht(`p-change`,function(l){return i.onChangeHeaders(l)}),lg(),f0(),Ml(22,`po-input`,16),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.literals,l)||(i.literals=l),Jy(l)}),ht(`p-change`,function(){return i.changeLiterals()}),lg(),f0(),Ml(23,`po-input`,17),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.modalActions,l)||(i.modalActions=l),Jy(l)}),ht(`p-change`,function(){return i.changeModalActions()}),lg(),f0(),Ml(24,`po-checkbox-group`,18),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.properties,l)||(i.properties=l),Jy(l)}),lg(),f0(),Tx(25,Ge,8,3,`div`),Ml(26,`po-radio-group`,19),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.size,l)||(i.size=l),Jy(l)}),lg(),f0(),Ml(27,`div`,20)(28,`po-button`,21),ht(`p-click`,function(){return i.restore()}),lg()()()()}r&2&&(Tw(`ngModel`,i.upload),cw(`p-helper`,i.helperText)(`p-auto-upload`,i.properties.includes(`autoupload`))(`p-directory`,i.properties.includes(`directory`))(`p-disabled`,i.properties.includes(`disabled`))(`p-required-url`,i.properties.includes(`requiredUrl`))(`p-disabled-remove-file`,i.properties.includes(`disabledRemoveFile`))(`p-drag-drop`,i.properties.includes(`dragDrop`))(`p-drag-drop-height`,i.dragDropHeight)(`p-form-field`,i.formField)(`p-help`,i.help)(`p-hide-select-button`,i.properties.includes(`selectButton`))(`p-hide-restrictions-info`,i.properties.includes(`restrictionsInfo`))(`p-hide-send-button`,i.properties.includes(`sendButton`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-multiple`,i.properties.includes(`multiple`))(`p-optional`,i.properties.includes(`optional`))(`p-required`,i.properties.includes(`required`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-thumbnail`,i.properties.includes(`showThumbnail`))(`p-restrictions`,i.restrictions)(`p-size`,i.size)(`p-url`,i.url)(`p-headers`,i.headers)(`p-custom-action`,i.action)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-custom-modal-actions`,i.customModalActions),p0(),Up(3),cw(`p-value`,FN(4,51,i.upload)),Up(2),cw(`p-value`,i.event),Up(5),Tw(`ngModel`,i.allowedExtensions),p0(),Up(),Tw(`ngModel`,i.maxFiles),p0(),Up(),Tw(`ngModel`,i.dragDropHeight),p0(),Up(),Tw(`ngModel`,i.minSize),p0(),Up(),Tw(`ngModel`,i.maxSize),p0(),Up(2),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.formField),p0(),Up(),Tw(`ngModel`,i.url),p0(),Up(),Tw(`ngModel`,i.headersLabs),p0(),Up(),Tw(`ngModel`,i.literals),p0(),Up(),Tw(`ngModel`,i.modalActions),cw(`p-disabled`,!i.properties.includes(`showThumbnail`)),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Mx(i.properties.includes(`showCustomAction`)?25:-1),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,qk,Wk,Zt,nb,G4,lU,xbe,q0e,Tbe,J4,aU,kbe,$8e,tP],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Upload Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-upload-labs/sample-po-upload-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-upload
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-upload-labs/sample-po-upload-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-upload-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ke,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Me],encapsulation:2,changeDetection:1})}return a})();var Xe=[`formOpportunity`];var Ze=()=>({maxFileSize:`204800`});var Ue=(()=>{class a{poNotification=f(Eu);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success(`You were applied successfully`)}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-resume`]],viewQuery:function(r,i){if(r&1&&Zl(Xe,7),r&2){let m;lo(m=uo())&&(i.formOpportunity=m.first)}},standalone:!1,decls:12,vars:7,consts:[[`formOpportunity`,`ngForm`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Full Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`biograph`,`p-label`,`Biograph`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`linkedin`,`p-clean`,``,`p-label`,`LinkedIn URL`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`resume`,`p-label`,`Resume`,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-md-12`,3,`ngModelChange`,`p-error`,`p-success`,`ngModel`,`p-restrictions`],[`p-label`,`Apply`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let m=Vx();Ml(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.name,l)||(i.name=l),Jy(l)}),lg(),f0(),lg(),Ml(4,`div`,1)(5,`po-textarea`,3),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.biograph,l)||(i.biograph=l),Jy(l)}),lg(),f0(),lg(),Ml(6,`div`,1)(7,`po-url`,4),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.linkedin,l)||(i.linkedin=l),Jy(l)}),lg(),f0(),lg(),Ml(8,`div`,1)(9,`po-upload`,5),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.resume,l)||(i.resume=l),Jy(l)}),ht(`p-error`,function(){return i.resumeUploadError()})(`p-success`,function(){return i.resumeUploadSuccess()}),lg(),f0(),lg(),Ml(10,`div`,1)(11,`po-button`,6),ht(`p-click`,function(){return i.apply()}),lg()()()}if(r&2){let m=Yx(1);Up(3),Tw(`ngModel`,i.name),p0(),Up(2),Tw(`ngModel`,i.biograph),p0(),Up(2),Tw(`ngModel`,i.linkedin),p0(),Up(2),Tw(`ngModel`,i.resume),cw(`p-restrictions`,TN(6,Ze)),p0(),Up(2),cw(`p-disabled`,m.invalid||!i.uploadedResume)}},dependencies:[IY,wY,CY,Vk,kk,Zt,lU,Pbe,aU,sU],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-resume-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Upload - Resume`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-upload-resume/sample-po-upload-resume.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #formOpportunity="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-upload-resume/sample-po-upload-resume.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-upload-resume`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,et,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ue],encapsulation:2,changeDetection:1})}return a})();var nt=[`upload`];var it=[`stepper`];var ot=[`submitForm`];var at=[`sucessData`];var lt=a=>({"po-invisible":a});function rt(a,Ne){if(a&1){let d=Vx();Ml(0,`div`,8)(1,`div`,9)(2,`p`,11),mN(3,`Confirm informations`),lg()(),ql(4,`po-info`,28)(5,`po-info`,29)(6,`po-info`,30),Ml(7,`po-button`,31),ht(`p-click`,function(){Qy(d);return Jy(zx().confirmSubmit())}),lg()()}if(a&2){let d=zx();Up(4),cw(`p-value`,d.project[0].name||`N/D`),Up(),cw(`p-value`,d.title||`N/D`),Up(),cw(`p-value`,d.description||`N/D`)}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:`Return`};description;project=[];restrictions={allowedExtensions:[`.zip`,`.7z`,`.tar`,`.wim`]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-rs`]],viewQuery:function(r,i){if(r&1&&Zl(nt,7)(it,7)(ot,7)(at,7),r&2){let m;lo(m=uo())&&(i.upload=m.first),lo(m=uo())&&(i.stepper=m.first),lo(m=uo())&&(i.submitForm=m.first),lo(m=uo())&&(i.sucessData=m.first)}},standalone:!1,decls:47,vars:15,consts:[[`stepper`,``],[`submitForm`,`ngForm`],[`upload`,``],[`sucessData`,``],[1,`po-row`],[`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`42`,1,`po-lg-10`,`po-offset-lg-2`,`po-offset-xl-2`],[`p-label`,`Welcome`],[`p-title`,`Realize & Show`,1,`po-lg-8`,`po-mt-2`],[1,`tht-row`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-text-large`],[`p-label`,`Yes!`,`p-kind`,`primary`,1,`po-sm-12`,`po-mt-2`,3,`p-click`],[`p-label`,`Submit`,3,`p-can-active-next-step`],[1,`po-lg-10`],[1,`po-font-subtitle`],[1,`po-font-text-small-bold`],[1,`po-font-title`,`po-lg-2`],[`p-icon`,`an an-cloud-arrow-up`,1,`po-clickable`,3,`click`],[`p-icon`,`an an-fill an-x-circle`,1,`po-clickable`,3,`click`,`ngClass`],[1,`po-sm-12`,`po-mt-3`,`po-font-text-bold`],[`name`,`project`,`p-hide-select-button`,``,`p-hide-send-button`,``,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-restrictions`],[`name`,`title`,`p-label`,`Title`,`p-placeholder`,`Be creative`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`description`,`p-label`,`Description`,`p-maxlength`,`140`,`p-placeholder`,`Resume on few words`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Done`,1,`po-sm-12`,`po-mt-2`,3,`p-click`,`p-disabled`],[`p-label`,`Confirm`],[`p-title`,`Confirmation`,3,`p-primary-action`],[1,`po-sm-12`,`po-font-title`],[`p-label`,`File name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Title`,1,`po-md-4`,3,`p-value`],[`p-label`,`Description`,1,`po-md-4`,3,`p-value`],[`p-label`,`Confirm`,1,`po-sm-12`,`po-mt-2`,`po-mb-2`,3,`p-click`]],template:function(r,i){if(r&1){let m=Vx();Ml(0,`div`,4)(1,`po-stepper`,5,0)(3,`po-step`,6)(4,`po-widget`,7)(5,`div`,8)(6,`div`,9)(7,`h1`,10),mN(8,`Welcome, TOTVS!`),lg(),Ml(9,`p`,11),mN(10,`Let's submit your project?`),lg()()(),Ml(11,`div`,8)(12,`po-button`,12),ht(`p-click`,function(){Qy(m);return Jy(Yx(2).next())}),lg()()()(),Ml(13,`po-step`,13)(14,`po-widget`,7)(15,`form`,null,1)(17,`div`,4)(18,`div`,14)(19,`div`,4)(20,`p`,15),mN(21,`Please, select your project:`),lg()(),Ml(22,`div`,4)(23,`p`,16),mN(24,`*Upload a zip file containing your project.`),lg()()(),Ml(25,`div`,17)(26,`po-icon`,18),ht(`click`,function(){Qy(m);return Jy(Yx(32).selectFiles())}),lg(),Ml(27,`po-icon`,19),ht(`click`,function(){Qy(m);return Jy(Yx(32).clear())}),lg()()(),Ml(28,`div`,4)(29,`label`,20),mN(30,`Attached`),lg(),Ml(31,`po-upload`,21,2),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.project,l)||(i.project=l),Jy(l)}),lg(),f0(),lg(),Ml(33,`div`,4)(34,`po-input`,22),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.title,l)||(i.title=l),Jy(l)}),lg(),f0(),lg(),Ml(35,`div`,4)(36,`po-textarea`,23),Mw(`ngModelChange`,function(l){return Qy(m),yN(i.description,l)||(i.description=l),Jy(l)}),lg(),f0(),lg(),Ml(37,`div`,8)(38,`po-button`,24),ht(`p-click`,function(){return i.submitProject()}),lg()()()()(),Ml(39,`po-step`,25)(40,`po-widget`,7),Tx(41,rt,8,3,`div`,8),lg()()()(),Ml(42,`po-modal`,26,3)(44,`div`,4)(45,`p`,27),mN(46,`Project successfully submited!`),lg()()()}r&2&&(Up(13),cw(`p-can-active-next-step`,i.canSubmitProject.bind(i)),Up(14),cw(`ngClass`,MN(13,lt,i.project.length<1)),Up(2),Pt(`po-invisible`,i.project.length<1),Up(2),Tw(`ngModel`,i.project),cw(`p-restrictions`,i.restrictions),p0(),Up(3),Tw(`ngModel`,i.title),cw(`p-disabled`,i.project.length<1),p0(),Up(2),Tw(`ngModel`,i.description),cw(`p-disabled`,i.project.length<1),p0(),Up(2),cw(`p-disabled`,i.canSubmitProject()),Up(3),Mx(i.canSubmitProject()?41:-1),Up(),cw(`p-primary-action`,i.confirm))},dependencies:[HO,IY,wY,CY,Vk,kk,Zt,lU,Pbe,aU,dt,kbe,vr,fCe,U8e,$8e],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-rs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Upload - Realize & Show`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-upload-rs/sample-po-upload-rs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-upload-rs/sample-po-upload-rs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-upload-rs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,pt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ae],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{customAction={icon:`an an-download`,type:`default`,visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error(`Arquivo inválido ou não encontrado.`);return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement(`a`);i.href=r,i.download=d.name,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-download`]],standalone:!1,decls:1,vars:2,consts:[[`name`,`upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-custom-action-click`,`p-success`,`p-custom-action`,`p-multiple`]],template:function(r,i){r&1&&(Ml(0,`po-upload`,0),ht(`p-custom-action-click`,function(s){return i.onCustomActionClick(s)})(`p-success`,function(){return i.uploadSuccess()}),lg()),r&2&&cw(`p-custom-action`,i.customAction)(`p-multiple`,!0)},dependencies:[aU],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-download-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Upload - with Download Button`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-upload-download/sample-po-upload-download.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-upload-download/sample-po-upload-download.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-upload-download`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ct,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ze],encapsulation:2,changeDetection:1})}return a})();var Et=()=>[`.png`,`.jpg`,`.jpeg`,`.gif`];var St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280});var Ve=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-preview`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`upload`,`p-label`,`PO Upload com Pré-visualização`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-restrictions`,`p-show-thumbnail`,`p-multiple`]],template:function(r,i){r&1&&ql(0,`po-upload`,0),r&2&&cw(`p-restrictions`,MN(4,St,TN(3,Et)))(`p-show-thumbnail`,!0)(`p-multiple`,!0)},dependencies:[aU],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-preview-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Upload - with Preview`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-upload-preview/sample-po-upload-preview.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-upload-preview/sample-po-upload-preview.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-upload-preview`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,gt,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ve],encapsulation:2,changeDetection:1})}return a})();var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-upload-doc`]],standalone:!1,decls:2328,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-html`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Array<PoModalAction>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoUploadComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O componente `),Ml(24,`code`),mN(25,`po-upload`),lg(),mN(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),lg(),Ml(27,`ul`)(28,`li`),mN(29,`Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.`),lg(),Ml(30,`li`),mN(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),lg(),Ml(32,`li`),mN(33,`Restrições de formatos de arquivo e tamanho.`),lg(),Ml(34,`li`),mN(35,`Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.`),lg(),Ml(36,`li`),mN(37,`Função de erro que será disparada quando houver erro no envio dos arquivos.`),lg(),Ml(38,`li`),mN(39,`Permite habilitar uma área onde os arquivos podem ser arrastados.`),lg()(),Ml(40,`h4`),mN(41,`Tokens customizáveis`),lg(),Ml(42,`p`),mN(43,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(44,`blockquote`)(45,`p`),mN(46,`Para maiores informações, acesse o guia `),Ml(47,`a`,6),mN(48,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(49,`.`),lg()(),Ml(50,`table`)(51,`thead`)(52,`tr`)(53,`th`),mN(54,`Propriedade`),lg(),Ml(55,`th`),mN(56,`Descrição`),lg(),Ml(57,`th`),mN(58,`Valor Padrão`),lg()()(),Ml(59,`tbody`)(60,`tr`)(61,`td`)(62,`strong`),mN(63,`FIELD CONTAINER`),lg()(),ql(64,`td`)(65,`td`),lg(),Ml(66,`tr`)(67,`td`)(68,`code`),mN(69,`--field-container-title-justify`),lg()(),Ml(70,`td`),mN(71,`Alinhamento horizontal do título (`),Ml(72,`code`),mN(73,`justify-content`),lg(),mN(74,`)`),lg(),Ml(75,`td`)(76,`code`),mN(77,`space-between`),lg()()(),Ml(78,`tr`)(79,`td`)(80,`code`),mN(81,`--field-container-title-flex`),lg()(),Ml(82,`td`),mN(83,`Flex do título (`),Ml(84,`code`),mN(85,`flex`),lg(),mN(86,`)`),lg(),Ml(87,`td`)(88,`code`),mN(89,`1 auto`),lg()()(),Ml(90,`tr`)(91,`td`)(92,`strong`),mN(93,`TEXT SUPPORT`),lg()(),ql(94,`td`)(95,`td`),lg(),Ml(96,`tr`)(97,`td`)(98,`code`),mN(99,`--font-family-text-support`),lg()(),Ml(100,`td`),mN(101,`Família tipográfica usada no texto de suporte`),lg(),Ml(102,`td`)(103,`code`),mN(104,`var(--font-family-theme)`),lg()()(),Ml(105,`tr`)(106,`td`)(107,`code`),mN(108,`--text-color-text-support`),lg()(),Ml(109,`td`),mN(110,`Cor da fonte no texto de suporte`),lg(),Ml(111,`td`)(112,`code`),mN(113,`var(--color-neutral-dark-90)`),lg()()(),Ml(114,`tr`)(115,`td`)(116,`strong`),mN(117,`UPLOAD CONTENT`),lg()(),ql(118,`td`)(119,`td`),lg(),Ml(120,`tr`)(121,`td`)(122,`code`),mN(123,`--background-color-content`),lg(),mN(124,` \xA0`),lg(),Ml(125,`td`),mN(126,`Cor de fundo`),lg(),Ml(127,`td`)(128,`code`),mN(129,`var(--color-neutral-light-10)`),lg()()(),Ml(130,`tr`)(131,`td`)(132,`code`),mN(133,`--border-color-content`),lg()(),Ml(134,`td`),mN(135,`Cor da borda`),lg(),Ml(136,`td`)(137,`code`),mN(138,`var(--color-neutral-light-20)`),lg()()(),Ml(139,`tr`)(140,`td`)(141,`code`),mN(142,`--border-radius-content`),lg()(),Ml(143,`td`),mN(144,`Contém o valor do raio dos cantos do elemento`),lg(),Ml(145,`td`)(146,`code`),mN(147,`var(--border-radius-md)`),lg()()(),Ml(148,`tr`)(149,`td`)(150,`code`),mN(151,`--text-color-file-name`),lg()(),Ml(152,`td`),mN(153,`Cor do texto do nome do arquivo`),lg(),Ml(154,`td`)(155,`code`),mN(156,`var(--color-neutral-dark-90)`),lg()()(),Ml(157,`tr`)(158,`td`)(159,`code`),mN(160,`--font-family-file-name`),lg()(),Ml(161,`td`),mN(162,`Família tipográfica usada no texto do arquivo`),lg(),Ml(163,`td`)(164,`code`),mN(165,`var(--font-family-theme)`),lg()()(),Ml(166,`tr`)(167,`td`)(168,`code`),mN(169,`--text-color-info-bar`),lg()(),Ml(170,`td`),mN(171,`Cor do texto de informação`),lg(),Ml(172,`td`)(173,`code`),mN(174,`var(--color-neutral-mid-60)`),lg()()(),Ml(175,`tr`)(176,`td`)(177,`code`),mN(178,`--font-family-info-bar`),lg()(),Ml(179,`td`),mN(180,`Família tipográfica usada no texto de informação`),lg(),Ml(181,`td`)(182,`code`),mN(183,`var(--font-family-theme)`),lg()()(),Ml(184,`tr`)(185,`td`)(186,`strong`),mN(187,`ERROR STATE`),lg()(),ql(188,`td`)(189,`td`),lg(),Ml(190,`tr`)(191,`td`)(192,`code`),mN(193,`--background-color-content-error`),lg()(),Ml(194,`td`),mN(195,`Cor de fundo do container de erro`),lg(),Ml(196,`td`)(197,`code`),mN(198,`var(--color-neutral-light-00)`),lg()()(),Ml(199,`tr`)(200,`td`)(201,`code`),mN(202,`--border-color-content-error`),lg()(),Ml(203,`td`),mN(204,`Cor da borda do container de erro`),lg(),Ml(205,`td`)(206,`code`),mN(207,`var(--color-feedback-negative-base)`),lg()()(),Ml(208,`tr`)(209,`td`)(210,`code`),mN(211,`--text-color-error`),lg()(),Ml(212,`td`),mN(213,`Cor do texto do container de erro`),lg(),Ml(214,`td`)(215,`code`),mN(216,`var(--color-feedback-negative-dark)`),lg()()(),Ml(217,`tr`)(218,`td`)(219,`code`),mN(220,`--color-icon-error`),lg()(),Ml(221,`td`),mN(222,`Cor do ícone no estado de erro`),lg(),Ml(223,`td`)(224,`code`),mN(225,`var(--color-feedback-negative-base)`),lg()()(),Ml(226,`tr`)(227,`td`)(228,`code`),mN(229,`--font-family-error`),lg()(),Ml(230,`td`),mN(231,`Família tipográfica usada no texto de erro`),lg(),Ml(232,`td`)(233,`code`),mN(234,`var(--font-family-theme)`),lg()()(),Ml(235,`tr`)(236,`td`)(237,`strong`),mN(238,`UPLOADED STATE`),lg()(),ql(239,`td`)(240,`td`),lg(),Ml(241,`tr`)(242,`td`)(243,`code`),mN(244,`--background-color-content-uploaded`),lg()(),Ml(245,`td`),mN(246,`Cor de fundo do container com status de enviado`),lg(),Ml(247,`td`)(248,`code`),mN(249,`var(--color-neutral-light-00)`),lg()()(),Ml(250,`tr`)(251,`td`)(252,`code`),mN(253,`--border-color-content-uploaded`),lg()(),Ml(254,`td`),mN(255,`Cor da borda do container com status de enviado`),lg(),Ml(256,`td`)(257,`code`),mN(258,`var(--color-neutral-light-20)`),lg()()(),Ml(259,`tr`)(260,`td`)(261,`strong`),mN(262,`INTERACTIVE STATE`),lg()(),ql(263,`td`)(264,`td`),lg(),Ml(265,`tr`)(266,`td`)(267,`code`),mN(268,`--text-color-file-name-interactive`),lg()(),Ml(269,`td`),mN(270,`Cor do texto do nome do arquivo quando interativo`),lg(),Ml(271,`td`)(272,`code`),mN(273,`var(--color-action-default)`),lg()()(),Ml(274,`tr`)(275,`td`)(276,`strong`),mN(277,`THUMBNAIL`),lg()(),ql(278,`td`)(279,`td`),lg(),Ml(280,`tr`)(281,`td`)(282,`code`),mN(283,`--color-icon-thumbnail`),lg()(),Ml(284,`td`),mN(285,`Cor do ícone na thumbnail`),lg(),Ml(286,`td`)(287,`code`),mN(288,`var(--color-action-default)`),lg()()(),Ml(289,`tr`)(290,`td`)(291,`code`),mN(292,`--border-width-thumbnail`),lg()(),Ml(293,`td`),mN(294,`Tamanho da fonte na thumbnail`),lg(),Ml(295,`td`)(296,`code`),mN(297,`var(--border-width-sm)`),lg()()(),Ml(298,`tr`)(299,`td`)(300,`code`),mN(301,`--border-radius-thumbnail`),lg()(),Ml(302,`td`),mN(303,`Contém o valor do raio dos cantos na thumbnail`),lg(),Ml(304,`td`)(305,`code`),mN(306,`var(--border-radius-md)`),lg()()(),Ml(307,`tr`)(308,`td`)(309,`code`),mN(310,`--background-color-thumbnail`),lg()(),Ml(311,`td`),mN(312,`Cor de fundo na thumbnail`),lg(),Ml(313,`td`)(314,`code`),mN(315,`var(--color-neutral-light-05)`),lg()()(),Ml(316,`tr`)(317,`td`)(318,`strong`),mN(319,`Focused`),lg()(),ql(320,`td`)(321,`td`),lg(),Ml(322,`tr`)(323,`td`)(324,`code`),mN(325,`--outline-color-focused`),lg()(),Ml(326,`td`),mN(327,`Cor do outline do estado de focus`),lg(),Ml(328,`td`)(329,`code`),mN(330,`var(--color-action-focus)`),lg()()()()()(),Ml(331,`div`,7)(332,`h4`,8),mN(333,`Seletor`),lg(),Ml(334,`pre`,9),mN(335,`<po-upload
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
`),lg()(),Ml(336,`h4`,10),mN(337,`Propriedades`),lg(),Ml(338,`table`,11)(339,`tr`,12)(340,`th`,13),mN(341,`Nome`),lg(),Ml(342,`th`,13),mN(343,`Tipo`),lg(),Ml(344,`th`,13),mN(345,`Padrão`),lg(),Ml(346,`th`,13),mN(347,`Descrição`),lg()(),Ml(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),mN(352,` (p-additional-help)`),ql(353,`br`),lg()(),Ml(354,`div`,18),mN(355,`Deprecated`),lg()(),Ml(356,`td`,19)(357,`code`,20),mN(358,`EventEmitter`),lg()(),Ml(359,`td`,21),mN(360,`-`),lg(),Ml(361,`td`,22)(362,`em`)(363,`strong`),mN(364,`(opcional)`),lg()(),Ml(365,`p`),mN(366,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(367,`blockquote`)(368,`p`),mN(369,`Essa propriedade está `),Ml(370,`strong`),mN(371,`depreciada`),lg(),mN(372,` e será removida na versão `),Ml(373,`code`),mN(374,`23.x.x`),lg(),mN(375,`. Recomendamos utilizar a propriedade `),Ml(376,`code`),mN(377,`p-helper`),lg(),mN(378,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(379,`tr`,14)(380,`td`,15)(381,`div`,23)(382,`span`,24),mN(383,` p-additional-help-tooltip`),ql(384,`br`),lg()(),Ml(385,`div`,18),mN(386,`Deprecated`),lg()(),Ml(387,`td`,19)(388,`code`,25),mN(389,`string`),lg()(),Ml(390,`td`,21),mN(391,`-`),lg(),Ml(392,`td`,22)(393,`em`)(394,`strong`),mN(395,`(opcional)`),lg()(),Ml(396,`p`),mN(397,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(398,`code`),mN(399,`po-helper`),lg(),mN(400,`.
`),Ml(401,`strong`),mN(402,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(403,`blockquote`)(404,`p`),mN(405,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(406,`blockquote`)(407,`p`),mN(408,`Essa propriedade está `),Ml(409,`strong`),mN(410,`depreciada`),lg(),mN(411,` e será removida na versão `),Ml(412,`code`),mN(413,`23.x.x`),lg(),mN(414,`. Recomendamos utilizar a propriedade `),Ml(415,`code`),mN(416,`p-helper`),lg(),mN(417,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(418,`tr`,14)(419,`td`,15)(420,`div`,23)(421,`span`,24),mN(422,` p-append-in-body`),ql(423,`br`),lg()()(),Ml(424,`td`,19)(425,`code`,26),mN(426,`boolean`),lg()(),Ml(427,`td`,21)(428,`p`)(429,`code`),mN(430,`false`),lg()()(),Ml(431,`td`,22)(432,`em`)(433,`strong`),mN(434,`(opcional)`),lg()(),Ml(435,`p`),mN(436,`Define que o popover (`),Ml(437,`code`),mN(438,`p-helper`),lg(),mN(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(440,`blockquote`)(441,`p`),mN(442,`Quando utilizado com `),Ml(443,`code`),mN(444,`p-helper`),lg(),mN(445,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(446,`tr`,14)(447,`td`,15)(448,`div`,23)(449,`span`,24),mN(450,` p-auto-focus`),ql(451,`br`),lg()()(),Ml(452,`td`,19)(453,`code`,26),mN(454,`boolean`),lg()(),Ml(455,`td`,21)(456,`p`)(457,`code`),mN(458,`false`),lg()()(),Ml(459,`td`,22)(460,`em`)(461,`strong`),mN(462,`(opcional)`),lg()(),Ml(463,`p`),mN(464,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(465,`blockquote`)(466,`p`),mN(467,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(468,`tr`,14)(469,`td`,15)(470,`div`,23)(471,`span`,24),mN(472,` p-auto-upload`),ql(473,`br`),lg()()(),Ml(474,`td`,19)(475,`code`,26),mN(476,`boolean`),lg()(),Ml(477,`td`,21)(478,`p`)(479,`code`),mN(480,`false`),lg()()(),Ml(481,`td`,22)(482,`em`)(483,`strong`),mN(484,`(opcional)`),lg()(),Ml(485,`p`),mN(486,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),lg(),Ml(487,`blockquote`)(488,`p`),mN(489,`Esta propriedade funciona somente se a propriedade `),Ml(490,`code`),mN(491,`p-url`),lg(),mN(492,` tiver um valor atribuído.`),lg()()()(),Ml(493,`tr`,14)(494,`td`,15)(495,`div`,23)(496,`span`,24),mN(497,` p-compact-label`),ql(498,`br`),lg()()(),Ml(499,`td`,19)(500,`code`,26),mN(501,`boolean`),lg()(),Ml(502,`td`,21)(503,`p`)(504,`code`),mN(505,`false`),lg()()(),Ml(506,`td`,22)(507,`em`)(508,`strong`),mN(509,`(opcional)`),lg()(),Ml(510,`p`),mN(511,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(512,`p`),mN(513,`Quando habilitado (`),Ml(514,`code`),mN(515,`true`),lg(),mN(516,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(517,`ul`)(518,`li`)(519,`code`),mN(520,`po-label`),lg()(),Ml(521,`li`)(522,`code`),mN(523,`p-requirement (showRequired)`),lg()(),Ml(524,`li`)(525,`code`),mN(526,`po-helper`),lg()()(),Ml(527,`p`),mN(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(529,`p`),mN(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(531,`ul`)(532,`li`)(533,`code`),mN(534,`--field-container-title-justify`),lg()(),Ml(535,`li`)(536,`code`),mN(537,`--field-container-title-flex`),lg()()(),Ml(538,`p`),mN(539,`Exemplo:`),lg(),Ml(540,`pre`)(541,`code`),mN(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(543,`p`),mN(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(545,`tr`,14)(546,`td`,15)(547,`div`,23)(548,`span`,24),mN(549,` p-custom-action`),ql(550,`br`),lg()()(),Ml(551,`td`,19)(552,`code`,27),mN(553,`PoProgressAction`),lg()(),Ml(554,`td`,21),mN(555,`-`),lg(),Ml(556,`td`,22)(557,`em`)(558,`strong`),mN(559,`(opcional)`),lg()(),Ml(560,`p`),mN(561,`Define uma ação personalizada no componente `),Ml(562,`code`),mN(563,`po-upload`),lg(),mN(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),lg(),Ml(565,`p`),mN(566,`A ação deve implementar a interface `),Ml(567,`strong`),mN(568,`PoProgressAction`),lg(),mN(569,`, permitindo configurar propriedades como:`),lg(),Ml(570,`ul`)(571,`li`)(572,`code`),mN(573,`label`),lg(),mN(574,`: Texto do botão.`),lg(),Ml(575,`li`)(576,`code`),mN(577,`icon`),lg(),mN(578,`: Ícone a ser exibido no botão.`),lg(),Ml(579,`li`)(580,`code`),mN(581,`type`),lg(),mN(582,`: Tipo de botão (ex.: `),Ml(583,`code`),mN(584,`danger`),lg(),mN(585,` ou `),Ml(586,`code`),mN(587,`default`),lg(),mN(588,`).`),lg(),Ml(589,`li`)(590,`code`),mN(591,`disabled`),lg(),mN(592,`: Indica se o botão deve estar desabilitado.`),lg(),Ml(593,`li`)(594,`code`),mN(595,`visible`),lg(),mN(596,`: Indica se o botão deve estar visível.`),lg()(),Ml(597,`p`)(598,`strong`),mN(599,`Exemplo de uso:`),lg()(),Ml(600,`pre`)(601,`code`,28),mN(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),lg()(),Ml(603,`pre`)(604,`code`,29),mN(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),lg()()()(),Ml(606,`tr`,14)(607,`td`,15)(608,`div`,16)(609,`span`,17),mN(610,` (p-custom-action-click)`),ql(611,`br`),lg()()(),Ml(612,`td`,19)(613,`code`,20),mN(614,`EventEmitter`),lg()(),Ml(615,`td`,21),mN(616,`-`),lg(),Ml(617,`td`,22)(618,`em`)(619,`strong`),mN(620,`(opcional)`),lg()(),Ml(621,`p`),mN(622,`Evento emitido ao clicar na ação personalizada configurada no `),Ml(623,`code`),mN(624,`p-custom-action`),lg(),mN(625,`.`),lg(),Ml(626,`p`),mN(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),lg(),Ml(628,`p`)(629,`strong`),mN(630,`Exemplo de uso:`),lg()(),Ml(631,`pre`)(632,`code`,28),mN(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),lg()(),Ml(634,`pre`)(635,`code`,29),mN(636,`customAction: PoProgressAction = {
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
`),lg()()()(),Ml(637,`tr`,14)(638,`td`,15)(639,`div`,23)(640,`span`,24),mN(641,` p-custom-modal-actions`),ql(642,`br`),lg()()(),Ml(643,`td`,19)(644,`code`,30),mN(645,`Array<PoModalAction>`),lg()(),Ml(646,`td`,21),mN(647,`-`),lg(),Ml(648,`td`,22)(649,`em`)(650,`strong`),mN(651,`(opcional)`),lg()(),Ml(652,`p`),mN(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),lg(),Ml(654,`p`),mN(655,`A ação deve implementar a interface `),Ml(656,`strong`),mN(657,`PoModalAction`),lg(),mN(658,`, permitindo configurar propriedades como:`),lg(),Ml(659,`ul`)(660,`li`)(661,`code`),mN(662,`label`),lg(),mN(663,`: Texto do botão.`),lg(),Ml(664,`li`)(665,`code`),mN(666,`action`),lg(),mN(667,`: Ícone a ser exibido no botão.`),lg(),Ml(668,`li`)(669,`code`),mN(670,`danger`),lg(),mN(671,`: Define a propriedade `),Ml(672,`code`),mN(673,`p-danger`),lg(),mN(674,` do botão.`),lg(),Ml(675,`li`)(676,`code`),mN(677,`disabled`),lg(),mN(678,`: Indica se o botão deve estar desabilitado.`),lg(),Ml(679,`li`)(680,`code`),mN(681,`visible`),lg(),mN(682,`: Indica se o botão deve estar visível.`),lg()(),Ml(683,`p`)(684,`strong`),mN(685,`Exemplo de uso:`),lg()(),Ml(686,`pre`)(687,`code`,28),mN(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),lg()(),Ml(689,`pre`)(690,`code`,29),mN(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),lg()()()(),Ml(692,`tr`,14)(693,`td`,15)(694,`div`,23)(695,`span`,24),mN(696,` p-directory`),ql(697,`br`),lg()()(),Ml(698,`td`,19)(699,`code`,26),mN(700,`boolean`),lg()(),Ml(701,`td`,21)(702,`p`)(703,`code`),mN(704,`false`),lg()()(),Ml(705,`td`,22)(706,`em`)(707,`strong`),mN(708,`(opcional)`),lg()(),Ml(709,`p`),mN(710,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),lg(),Ml(711,`blockquote`)(712,`p`),mN(713,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),lg()(),Ml(714,`blockquote`)(715,`p`),mN(716,`Definição não suportada pelo browser `),Ml(717,`strong`),mN(718,`Internet Explorer`),lg(),mN(719,`, todavia será possível a seleção de arquivos padrão.`),lg()()()(),Ml(720,`tr`,14)(721,`td`,15)(722,`div`,23)(723,`span`,24),mN(724,` p-disabled`),ql(725,`br`),lg()()(),Ml(726,`td`,19)(727,`code`,26),mN(728,`boolean`),lg()(),Ml(729,`td`,21),mN(730,`-`),lg(),Ml(731,`td`,22)(732,`em`)(733,`strong`),mN(734,`(opcional)`),lg()(),Ml(735,`p`),mN(736,`Indica que o campo será desabilitado.`),lg()()(),Ml(737,`tr`,14)(738,`td`,15)(739,`div`,23)(740,`span`,24),mN(741,` p-disabled-remove-file`),ql(742,`br`),lg()()(),Ml(743,`td`,19)(744,`code`,26),mN(745,`boolean`),lg()(),Ml(746,`td`,21)(747,`p`)(748,`code`),mN(749,`false`),lg()()(),Ml(750,`td`,22)(751,`em`)(752,`strong`),mN(753,`(opcional)`),lg()(),Ml(754,`p`),mN(755,`Desabilita botão de remover o(s) arquivo(s) selecionado(s).`),lg()()(),Ml(756,`tr`,14)(757,`td`,15)(758,`div`,23)(759,`span`,24),mN(760,` p-drag-drop`),ql(761,`br`),lg()()(),Ml(762,`td`,19)(763,`code`,26),mN(764,`boolean`),lg()(),Ml(765,`td`,21)(766,`p`)(767,`code`),mN(768,`false`),lg()()(),Ml(769,`td`,22)(770,`em`)(771,`strong`),mN(772,`(opcional)`),lg()(),Ml(773,`p`),mN(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),lg(),Ml(775,`blockquote`)(776,`p`),mN(777,`Recomendamos utilizar apenas um `),Ml(778,`code`),mN(779,`po-upload`),lg(),mN(780,` com esta funcionalidade por tela.`),lg()()()(),Ml(781,`tr`,14)(782,`td`,15)(783,`div`,23)(784,`span`,24),mN(785,` p-drag-drop-height`),ql(786,`br`),lg()()(),Ml(787,`td`,19)(788,`code`,31),mN(789,`number`),lg()(),Ml(790,`td`,21)(791,`p`)(792,`code`),mN(793,`320`),lg()()(),Ml(794,`td`,22)(795,`em`)(796,`strong`),mN(797,`(opcional)`),lg()(),Ml(798,`p`),mN(799,`Define em `),Ml(800,`em`),mN(801,`pixels`),lg(),mN(802,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Ml(803,`code`),mN(804,`160px`),lg(),mN(805,`.`),lg(),Ml(806,`blockquote`)(807,`p`),mN(808,`Esta propriedade funciona somente se a propriedade `),Ml(809,`code`),mN(810,`p-drag-drop`),lg(),mN(811,` estiver habilitada.`),lg()()()(),Ml(812,`tr`,14)(813,`td`,15)(814,`div`,23)(815,`span`,24),mN(816,` p-restrictions`),ql(817,`br`),lg()()(),Ml(818,`td`,19)(819,`code`,32),mN(820,`PoUploadFileRestrictions`),lg()(),Ml(821,`td`,21),mN(822,`-`),lg(),Ml(823,`td`,22)(824,`em`)(825,`strong`),mN(826,`(opcional)`),lg()(),Ml(827,`p`),mN(828,`Objeto que segue a definição da interface `),Ml(829,`code`),mN(830,`PoUploadFileRestrictions`),lg(),mN(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),lg()()(),Ml(832,`tr`,14)(833,`td`,15)(834,`div`,23)(835,`span`,24),mN(836,` p-form-field`),ql(837,`br`),lg()()(),Ml(838,`td`,19)(839,`code`,25),mN(840,`string`),lg()(),Ml(841,`td`,21)(842,`p`)(843,`code`),mN(844,`files`),lg()()(),Ml(845,`td`,22)(846,`em`)(847,`strong`),mN(848,`(opcional)`),lg()(),Ml(849,`p`),mN(850,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Ml(851,`code`),mN(852,`p-url`),lg(),mN(853,`.`),lg()()(),Ml(854,`tr`,14)(855,`td`,15)(856,`div`,23)(857,`span`,24),mN(858,` p-headers`),ql(859,`br`),lg()()(),Ml(860,`td`,19)(861,`code`,33),mN(862,`{ [name: string]: string `),lg(),Ml(863,`code`,34),mN(864,` Array<string>;
}`),lg()(),Ml(865,`td`,21),mN(866,`-`),lg(),Ml(867,`td`,22)(868,`p`),mN(869,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),lg()()(),Ml(870,`tr`,14)(871,`td`,15)(872,`div`,23)(873,`span`,24),mN(874,` p-help`),ql(875,`br`),lg()()(),Ml(876,`td`,19)(877,`code`,25),mN(878,`string`),lg()(),Ml(879,`td`,21),mN(880,`-`),lg(),Ml(881,`td`,22)(882,`em`)(883,`strong`),mN(884,`(opcional)`),lg()(),Ml(885,`p`),mN(886,`Texto de apoio para o campo.`),lg()()(),Ml(887,`tr`,14)(888,`td`,15)(889,`div`,23)(890,`span`,24),mN(891,` p-hide-restrictions-info`),ql(892,`br`),lg()()(),Ml(893,`td`,19)(894,`code`,26),mN(895,`boolean`),lg()(),Ml(896,`td`,21)(897,`p`)(898,`code`),mN(899,`false`),lg()()(),Ml(900,`td`,22)(901,`em`)(902,`strong`),mN(903,`(opcional)`),lg()(),Ml(904,`p`),mN(905,`Oculta visualmente as informações de restrições para o upload.`),lg()()(),Ml(906,`tr`,14)(907,`td`,15)(908,`div`,23)(909,`span`,24),mN(910,` p-hide-select-button`),ql(911,`br`),lg()()(),Ml(912,`td`,19)(913,`code`,26),mN(914,`boolean`),lg()(),Ml(915,`td`,21)(916,`p`)(917,`code`),mN(918,`false`),lg()()(),Ml(919,`td`,22)(920,`em`)(921,`strong`),mN(922,`(opcional)`),lg()(),Ml(923,`p`),mN(924,`Omite o botão de seleção de arquivos.`),lg(),Ml(925,`blockquote`)(926,`p`),mN(927,`Caso o valor definido seja `),Ml(928,`code`),mN(929,`true`),lg(),mN(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ml(931,`code`),mN(932,`selectFiles()`),lg(),mN(933,` para seleção de arquivos.`),lg()()()(),Ml(934,`tr`,14)(935,`td`,15)(936,`div`,23)(937,`span`,24),mN(938,` p-hide-send-button`),ql(939,`br`),lg()()(),Ml(940,`td`,19)(941,`code`,26),mN(942,`boolean`),lg()(),Ml(943,`td`,21)(944,`p`)(945,`code`),mN(946,`false`),lg()()(),Ml(947,`td`,22)(948,`em`)(949,`strong`),mN(950,`(opcional)`),lg()(),Ml(951,`p`),mN(952,`Omite o botão de envio de arquivos.`),lg(),Ml(953,`blockquote`)(954,`p`),mN(955,`Caso o valor definido seja `),Ml(956,`code`),mN(957,`true`),lg(),mN(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ml(959,`code`),mN(960,`sendFiles()`),lg(),mN(961,` para envio do(s) arquivo(s) selecionado(s).`),lg()()()(),Ml(962,`tr`,14)(963,`td`,15)(964,`div`,23)(965,`span`,24),mN(966,` p-multiple`),ql(967,`br`),lg()()(),Ml(968,`td`,19)(969,`code`,26),mN(970,`boolean`),lg()(),Ml(971,`td`,21),mN(972,`-`),lg(),Ml(973,`td`,22)(974,`em`)(975,`strong`),mN(976,`(opcional)`),lg()(),Ml(977,`p`),mN(978,`Define se pode selecionar mais de um arquivo.`),lg(),Ml(979,`blockquote`)(980,`p`),mN(981,`Se utilizada a `),Ml(982,`code`),mN(983,`p-directory`),lg(),mN(984,`, habilita-se automaticamente esta propriedade.`),lg()()()(),Ml(985,`tr`,14)(986,`td`,15)(987,`div`,16)(988,`span`,17),mN(989,` (p-keydown)`),ql(990,`br`),lg()()(),Ml(991,`td`,19)(992,`code`,20),mN(993,`EventEmitter`),lg()(),Ml(994,`td`,21),mN(995,`-`),lg(),Ml(996,`td`,22)(997,`em`)(998,`strong`),mN(999,`(opcional)`),lg()(),Ml(1e3,`p`),mN(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(1002,`code`),mN(1003,`KeyboardEvent`),lg(),mN(1004,` com informações sobre a tecla.`),lg()()(),Ml(1005,`tr`,14)(1006,`td`,15)(1007,`div`,23)(1008,`span`,24),mN(1009,` p-label`),ql(1010,`br`),lg()()(),Ml(1011,`td`,19)(1012,`code`,25),mN(1013,`string`),lg()(),Ml(1014,`td`,21),mN(1015,`-`),lg(),Ml(1016,`td`,22)(1017,`em`)(1018,`strong`),mN(1019,`(opcional)`),lg()(),Ml(1020,`p`),mN(1021,`Rótulo do campo.`),lg()()(),Ml(1022,`tr`,14)(1023,`td`,15)(1024,`div`,23)(1025,`span`,24),mN(1026,` p-label-text-wrap`),ql(1027,`br`),lg()()(),Ml(1028,`td`,19)(1029,`code`,26),mN(1030,`boolean`),lg()(),Ml(1031,`td`,21)(1032,`p`)(1033,`code`),mN(1034,`false`),lg()()(),Ml(1035,`td`,22)(1036,`em`)(1037,`strong`),mN(1038,`(opcional)`),lg()(),Ml(1039,`p`),mN(1040,`Habilita a quebra automática do texto da propriedade `),Ml(1041,`code`),mN(1042,`p-label`),lg(),mN(1043,`. Quando `),Ml(1044,`code`),mN(1045,`p-label-text-wrap`),lg(),mN(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),mN(1051,` p-literals`),ql(1052,`br`),lg()()(),Ml(1053,`td`,19)(1054,`code`,35),mN(1055,`PoUploadLiterals`),lg()(),Ml(1056,`td`,21),mN(1057,`-`),lg(),Ml(1058,`td`,22)(1059,`em`)(1060,`strong`),mN(1061,`(opcional)`),lg()(),Ml(1062,`p`),mN(1063,`Objeto com as literais usadas no `),Ml(1064,`code`),mN(1065,`po-upload`),lg(),mN(1066,`.`),lg(),Ml(1067,`p`),mN(1068,`Existem duas maneiras de customizar o componente:`),lg(),Ml(1069,`ul`)(1070,`li`),mN(1071,`passando um objeto implementando a interface `),Ml(1072,`code`),mN(1073,`PoUploadLiterals`),lg(),mN(1074,` com todas as literais disponíveis;`),lg(),Ml(1075,`li`),mN(1076,`passando apenas as literais que deseja customizar:`),Ml(1077,`pre`)(1078,`code`),mN(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),lg()()()(),Ml(1080,`p`),mN(1081,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),lg(),Ml(1082,`pre`)(1083,`code`),mN(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),lg()(),Ml(1085,`blockquote`)(1086,`p`),mN(1087,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ml(1088,`em`),mN(1089,`browser`),lg(),mN(1090,` (pt, en, es, ru).`),lg()()()(),Ml(1091,`tr`,14)(1092,`td`,15)(1093,`div`,23)(1094,`span`,24),mN(1095,` p-loading`),ql(1096,`br`),lg()()(),Ml(1097,`td`,19)(1098,`code`,26),mN(1099,`boolean`),lg()(),Ml(1100,`td`,21)(1101,`p`)(1102,`code`),mN(1103,`false`),lg()()(),Ml(1104,`td`,22)(1105,`em`)(1106,`strong`),mN(1107,`(opcional)`),lg()(),Ml(1108,`p`),mN(1109,`Exibe um ícone de carregamento no botão `),Ml(1110,`code`),mN(1111,`Selecionar arquivo`),lg(),mN(1112,`, à esquerda do texto, sinalizando que uma operação está\xA0em andamento.`),lg(),Ml(1113,`blockquote`)(1114,`p`),mN(1115,`Incompatível com `),Ml(1116,`code`),mN(1117,`p-drag-drop`),lg(),mN(1118,` e `),Ml(1119,`code`),mN(1120,`p-hide-select-button`),lg(),mN(1121,`, pois o estado de loading depende da exibição do botão `),Ml(1122,`code`),mN(1123,`Selecionar arquivo`),lg(),mN(1124,`.`),lg()()()(),Ml(1125,`tr`,14)(1126,`td`,15)(1127,`div`,23)(1128,`span`,24),mN(1129,` name`),ql(1130,`br`),lg()()(),Ml(1131,`td`,19)(1132,`code`,25),mN(1133,`string`),lg()(),Ml(1134,`td`,21),mN(1135,`-`),lg(),Ml(1136,`td`,22)(1137,`p`),mN(1138,`Define o valor do atributo `),Ml(1139,`code`),mN(1140,`name`),lg(),mN(1141,` do componente.`),lg()()(),Ml(1142,`tr`,14)(1143,`td`,15)(1144,`div`,16)(1145,`span`,17),mN(1146,` (ngModelChange)`),ql(1147,`br`),lg()()(),Ml(1148,`td`,19)(1149,`code`,20),mN(1150,`EventEmitter`),lg()(),Ml(1151,`td`,21),mN(1152,`-`),lg(),Ml(1153,`td`,22)(1154,`em`)(1155,`strong`),mN(1156,`(opcional)`),lg()(),Ml(1157,`p`),mN(1158,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da `),Ml(1159,`em`),mN(1160,`tag`),lg(),Ml(1161,`code`),mN(1162,`form`),lg(),mN(1163,`.`),lg(),Ml(1164,`p`),mN(1165,`Na versão 12.2.0 do Angular a verificação `),Ml(1166,`code`),mN(1167,`strictTemplates`),lg(),mN(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),lg(),Ml(1169,`pre`)(1170,`code`),mN(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),lg()()()(),Ml(1172,`tr`,14)(1173,`td`,15)(1174,`div`,16)(1175,`span`,17),mN(1176,` (p-cancel)`),ql(1177,`br`),lg()()(),Ml(1178,`td`,19)(1179,`code`,20),mN(1180,`EventEmitter`),lg()(),Ml(1181,`td`,21),mN(1182,`-`),lg(),Ml(1183,`td`,22)(1184,`em`)(1185,`strong`),mN(1186,`(opcional)`),lg()(),Ml(1187,`p`),mN(1188,`Evento será disparado ao clicar no ícone de fechar.`),lg(),Ml(1189,`blockquote`)(1190,`p`),mN(1191,`Por parâmetro será passado o objeto do arquivo.`),lg()()()(),Ml(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),mN(1196,` (p-error)`),ql(1197,`br`),lg()()(),Ml(1198,`td`,19)(1199,`code`,20),mN(1200,`EventEmitter`),lg()(),Ml(1201,`td`,21),mN(1202,`-`),lg(),Ml(1203,`td`,22)(1204,`em`)(1205,`strong`),mN(1206,`(opcional)`),lg()(),Ml(1207,`p`),mN(1208,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),lg(),Ml(1209,`blockquote`)(1210,`p`),mN(1211,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ml(1212,`code`),mN(1213,`HttpErrorResponse`),lg(),mN(1214,`.`),lg()()()(),Ml(1215,`tr`,14)(1216,`td`,15)(1217,`div`,16)(1218,`span`,17),mN(1219,` (p-open-modal-preview)`),ql(1220,`br`),lg()()(),Ml(1221,`td`,19)(1222,`code`,20),mN(1223,`EventEmitter`),lg()(),Ml(1224,`td`,21),mN(1225,`-`),lg(),Ml(1226,`td`,22)(1227,`em`)(1228,`strong`),mN(1229,`(opcional)`),lg()(),Ml(1230,`p`),mN(1231,`Evento será disparado ao abrir o modal de pré-visualização.`),lg(),Ml(1232,`blockquote`)(1233,`p`),mN(1234,`Por parâmetro será passado o objeto do arquivo.`),lg()()()(),Ml(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),mN(1239,` (p-remove)`),ql(1240,`br`),lg()()(),Ml(1241,`td`,19)(1242,`code`,20),mN(1243,`EventEmitter`),lg()(),Ml(1244,`td`,21),mN(1245,`-`),lg(),Ml(1246,`td`,22)(1247,`em`)(1248,`strong`),mN(1249,`(opcional)`),lg()(),Ml(1250,`p`),mN(1251,`Evento será disparado ao clicar no ícone de remover.`),lg(),Ml(1252,`blockquote`)(1253,`p`),mN(1254,`Por parâmetro será passado o objeto do arquivo.`),lg()()()(),Ml(1255,`tr`,14)(1256,`td`,15)(1257,`div`,16)(1258,`span`,17),mN(1259,` (p-success)`),ql(1260,`br`),lg()()(),Ml(1261,`td`,19)(1262,`code`,20),mN(1263,`EventEmitter`),lg()(),Ml(1264,`td`,21),mN(1265,`-`),lg(),Ml(1266,`td`,22)(1267,`em`)(1268,`strong`),mN(1269,`(opcional)`),lg()(),Ml(1270,`p`),mN(1271,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),lg(),Ml(1272,`blockquote`)(1273,`p`),mN(1274,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ml(1275,`code`),mN(1276,`HttpResponse`),lg(),mN(1277,`.`),lg()()()(),Ml(1278,`tr`,14)(1279,`td`,15)(1280,`div`,16)(1281,`span`,17),mN(1282,` (p-upload)`),ql(1283,`br`),lg()()(),Ml(1284,`td`,19)(1285,`code`,20),mN(1286,`EventEmitter`),lg()(),Ml(1287,`td`,21),mN(1288,`-`),lg(),Ml(1289,`td`,22)(1290,`em`)(1291,`strong`),mN(1292,`(opcional)`),lg()(),Ml(1293,`p`),mN(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),lg(),Ml(1295,`blockquote`)(1296,`p`),mN(1297,`data, nesta propriedade pode ser informado algum dado`),lg()(),Ml(1298,`pre`)(1299,`code`),mN(1300,`event.data = {id: 'id do usu\xE1rio'};
`),lg()(),Ml(1301,`blockquote`)(1302,`p`),mN(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Ml(1304,`code`),mN(1305,`data`),lg(),mN(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),lg()(),Ml(1307,`pre`)(1308,`code`),mN(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),lg()()()(),Ml(1310,`tr`,14)(1311,`td`,15)(1312,`div`,23)(1313,`span`,24),mN(1314,` p-optional`),ql(1315,`br`),lg()()(),Ml(1316,`td`,19)(1317,`code`,26),mN(1318,`boolean`),lg()(),Ml(1319,`td`,21)(1320,`p`)(1321,`code`),mN(1322,`false`),lg()()(),Ml(1323,`td`,22)(1324,`em`)(1325,`strong`),mN(1326,`(opcional)`),lg()(),Ml(1327,`p`),mN(1328,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(1329,`blockquote`)(1330,`p`),mN(1331,`Não será exibida a indicação se:`),lg()(),Ml(1332,`ul`)(1333,`li`),mN(1334,`O campo conter `),Ml(1335,`code`),mN(1336,`p-required`),lg(),mN(1337,`;`),lg(),Ml(1338,`li`),mN(1339,`Não possuir `),Ml(1340,`code`),mN(1341,`p-help`),lg(),mN(1342,` e/ou `),Ml(1343,`code`),mN(1344,`p-label`),lg(),mN(1345,`.`),lg()()()(),Ml(1346,`tr`,14)(1347,`td`,15)(1348,`div`,23)(1349,`span`,24),mN(1350,` p-helper`),ql(1351,`br`),lg()()(),Ml(1352,`td`,19)(1353,`code`,36),mN(1354,`PoHelperOptions `),lg(),Ml(1355,`code`,25),mN(1356,` string`),lg()(),Ml(1357,`td`,21),mN(1358,`-`),lg(),Ml(1359,`td`,22)(1360,`em`)(1361,`strong`),mN(1362,`(opcional)`),lg()(),Ml(1363,`p`),mN(1364,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1365,`code`),mN(1366,`p-label`),lg(),mN(1367,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1368,`code`),mN(1369,`p-label`),lg(),mN(1370,`.`),lg(),Ml(1371,`blockquote`)(1372,`p`),mN(1373,`Para mais informações acesse: `),Ml(1374,`a`,37),mN(1375,`https://po-ui.io/documentation/po-helper`),lg(),mN(1376,`.`),lg()(),Ml(1377,`blockquote`)(1378,`p`),mN(1379,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1380,`code`),mN(1381,`p-additional-help-tooltip`),lg(),mN(1382,` e `),Ml(1383,`code`),mN(1384,`p-additional-help`),lg(),mN(1385,`) será ignorado.`),lg()()()(),Ml(1386,`tr`,14)(1387,`td`,15)(1388,`div`,23)(1389,`span`,24),mN(1390,` p-required`),ql(1391,`br`),lg()()(),Ml(1392,`td`,19)(1393,`code`,26),mN(1394,`boolean`),lg()(),Ml(1395,`td`,21)(1396,`p`)(1397,`code`),mN(1398,`false`),lg()()(),Ml(1399,`td`,22)(1400,`em`)(1401,`strong`),mN(1402,`(opcional)`),lg()(),Ml(1403,`p`),mN(1404,`Define que o campo será obrigatório.`),lg()()(),Ml(1405,`tr`,14)(1406,`td`,15)(1407,`div`,23)(1408,`span`,24),mN(1409,` p-required-url`),ql(1410,`br`),lg()()(),Ml(1411,`td`,19)(1412,`code`,26),mN(1413,`boolean`),lg()(),Ml(1414,`td`,21)(1415,`p`)(1416,`code`),mN(1417,`true`),lg()()(),Ml(1418,`td`,22)(1419,`em`)(1420,`strong`),mN(1421,`(opcional)`),lg()(),Ml(1422,`p`),mN(1423,`Define se a propriedade `),Ml(1424,`code`),mN(1425,`p-url`),lg(),mN(1426,` é obrigatória.`),lg(),Ml(1427,`p`),mN(1428,`Caso a propriedade seja definida como `),Ml(1429,`code`),mN(1430,`false`),lg(),mN(1431,`:`),lg(),Ml(1432,`ul`)(1433,`li`),mN(1434,`o botão de "Selecionar arquivo" ficará habilitado mesmo sem a propriedade `),Ml(1435,`code`),mN(1436,`p-url`),lg(),mN(1437,` definida.`),lg(),Ml(1438,`li`),mN(1439,`o botão "Iniciar envio" ficará oculto até que a propriedade `),Ml(1440,`code`),mN(1441,`p-url`),lg(),mN(1442,` seja definida.`),lg()(),Ml(1443,`blockquote`)(1444,`p`),mN(1445,`Se utilizada com a propriedade `),Ml(1446,`code`),mN(1447,`p-auto-upload`),lg(),mN(1448,` definida como `),Ml(1449,`code`),mN(1450,`true`),lg(),mN(1451,` será necessário definir a propriedade `),Ml(1452,`code`),mN(1453,`p-url`),lg(),mN(1454,`.`),lg()()()(),Ml(1455,`tr`,14)(1456,`td`,15)(1457,`div`,23)(1458,`span`,24),mN(1459,` p-show-required`),ql(1460,`br`),lg()()(),Ml(1461,`td`,19)(1462,`code`,26),mN(1463,`boolean`),lg()(),Ml(1464,`td`,21),mN(1465,`-`),lg(),Ml(1466,`td`,22)(1467,`p`),mN(1468,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1469,`blockquote`)(1470,`p`),mN(1471,`Não será exibida a indicação se:`),lg()(),Ml(1472,`ul`)(1473,`li`),mN(1474,`Não possuir `),Ml(1475,`code`),mN(1476,`p-help`),lg(),mN(1477,` e/ou `),Ml(1478,`code`),mN(1479,`p-label`),lg(),mN(1480,`.`),lg()()()(),Ml(1481,`tr`,14)(1482,`td`,15)(1483,`div`,23)(1484,`span`,24),mN(1485,` p-show-thumbnail`),ql(1486,`br`),lg()()(),Ml(1487,`td`,19)(1488,`code`,26),mN(1489,`boolean`),lg()(),Ml(1490,`td`,21)(1491,`p`)(1492,`code`),mN(1493,`true`),lg()()(),Ml(1494,`td`,22)(1495,`em`)(1496,`strong`),mN(1497,`(opcional)`),lg()(),Ml(1498,`p`),mN(1499,`Exibe a pré-visualização de imagens ao anexá-las.`),lg(),Ml(1500,`blockquote`)(1501,`p`),mN(1502,`Propriedade funciona apenas em arquivos de formato de imagem (`),Ml(1503,`code`),mN(1504,`.png`),lg(),mN(1505,`, `),Ml(1506,`code`),mN(1507,`.jpg`),lg(),mN(1508,`, `),Ml(1509,`code`),mN(1510,`.jpeg`),lg(),mN(1511,` e `),Ml(1512,`code`),mN(1513,`.gif`),lg(),mN(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),lg()()()(),Ml(1515,`tr`,14)(1516,`td`,15)(1517,`div`,23)(1518,`span`,24),mN(1519,` p-size`),ql(1520,`br`),lg()()(),Ml(1521,`td`,19)(1522,`code`,25),mN(1523,`string`),lg()(),Ml(1524,`td`,21)(1525,`p`)(1526,`code`),mN(1527,`medium`),lg()()(),Ml(1528,`td`,22)(1529,`em`)(1530,`strong`),mN(1531,`(opcional)`),lg()(),Ml(1532,`p`),mN(1533,`Define o tamanho e as ações do componente:`),lg(),Ml(1534,`ul`)(1535,`li`)(1536,`code`),mN(1537,`small`),lg(),mN(1538,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1539,`li`)(1540,`code`),mN(1541,`medium`),lg(),mN(1542,`: altura do button como 44px.`),lg()(),Ml(1543,`blockquote`)(1544,`p`),mN(1545,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1546,`code`),mN(1547,`medium`),lg(),mN(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1549,`a`,38),mN(1550,`po-theme`),lg(),mN(1551,`.`),lg()()()(),Ml(1552,`tr`,14)(1553,`td`,15)(1554,`div`,23)(1555,`span`,24),mN(1556,` p-url`),ql(1557,`br`),lg()()(),Ml(1558,`td`,19)(1559,`code`,25),mN(1560,`string`),lg()(),Ml(1561,`td`,21),mN(1562,`-`),lg(),Ml(1563,`td`,22)(1564,`p`),mN(1565,`URL que deve ser feita a requisição com os arquivos selecionados.`),lg()()()(),Ml(1566,`h3`,10),mN(1567,`Métodos`),lg(),Ml(1568,`table`,39)(1569,`tr`,14)(1570,`th`,40)(1571,`div`,23)(1572,`h4`)(1573,`span`,24),mN(1574,` clear `),lg()()()()(),Ml(1575,`tr`,22)(1576,`td`,22)(1577,`p`),mN(1578,`Método responsável por `),Ml(1579,`strong`),mN(1580,`limpar`),lg(),mN(1581,` o(s) arquivo(s) selecionado(s).`),lg()()()(),ql(1582,`br`),Ml(1583,`table`,39)(1584,`tr`,14)(1585,`th`,40)(1586,`div`,23)(1587,`h4`)(1588,`span`,24),mN(1589,` focus `),lg()()()()(),Ml(1590,`tr`,22)(1591,`td`,22)(1592,`p`),mN(1593,`Função que atribui foco ao componente.`),lg(),Ml(1594,`p`),mN(1595,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1596,`pre`)(1597,`code`),mN(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),lg()()()()(),ql(1599,`br`),Ml(1600,`table`,39)(1601,`tr`,14)(1602,`th`,40)(1603,`div`,23)(1604,`h4`)(1605,`span`,24),mN(1606,` closeModal `),lg()()()()(),Ml(1607,`tr`,22)(1608,`td`,22)(1609,`p`),mN(1610,`Método responsável por fechar o modal.`),lg()()()(),ql(1611,`br`),Ml(1612,`table`,39)(1613,`tr`,14)(1614,`th`,40)(1615,`div`,23)(1616,`h4`)(1617,`span`,24),mN(1618,` selectFiles `),lg()()()()(),Ml(1619,`tr`,22)(1620,`td`,22)(1621,`p`),mN(1622,`Método responsável por `),Ml(1623,`strong`),mN(1624,`abrir`),lg(),mN(1625,` a janela para seleção de arquivo(s).`),lg()()()(),ql(1626,`br`),Ml(1627,`table`,39)(1628,`tr`,14)(1629,`th`,40)(1630,`div`,23)(1631,`h4`)(1632,`span`,24),mN(1633,` sendFiles `),lg()()()()(),Ml(1634,`tr`,22)(1635,`td`,22)(1636,`p`),mN(1637,`Método responsável por `),Ml(1638,`strong`),mN(1639,`enviar`),lg(),mN(1640,` o(s) arquivo(s) selecionado(s).`),lg()()()(),ql(1641,`br`),Ml(1642,`table`,39)(1643,`tr`,14)(1644,`th`,40)(1645,`div`,23)(1646,`h4`)(1647,`span`,24),mN(1648,` showAdditionalHelp `),lg()()()()(),Ml(1649,`tr`,22)(1650,`td`,22)(1651,`p`),mN(1652,`Método que exibe `),Ml(1653,`code`),mN(1654,`p-helper`),lg(),mN(1655,` ou executa a ação definida em `),Ml(1656,`code`),mN(1657,`p-helper{eventOnClick}`),lg(),mN(1658,` ou em `),Ml(1659,`code`),mN(1660,`p-additionalHelp`),lg(),mN(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1662,`code`),mN(1663,`p-keydown`),lg(),mN(1664,`.`),lg(),Ml(1665,`blockquote`)(1666,`p`),mN(1667,`Exibe ou oculta o conteúdo do componente `),Ml(1668,`code`),mN(1669,`po-helper`),lg(),mN(1670,` quando o componente estiver com foco.`),lg()(),Ml(1671,`pre`)(1672,`code`),mN(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),lg()(),Ml(1674,`pre`)(1675,`code`),mN(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1677,`br`),Ml(1678,`h3`),mN(1679,`Interfaces`),lg(),Ml(1680,`h4`,41)(1681,`code`,5),mN(1682,`PoUploadFileRestrictions`),lg()(),Ml(1683,`div`,2)(1684,`p`),mN(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),lg()(),Ml(1686,`h4`,10),mN(1687,`Propriedades`),lg(),Ml(1688,`table`,11)(1689,`tr`,12)(1690,`th`,13),mN(1691,`Nome`),lg(),Ml(1692,`th`,13),mN(1693,`Tipo`),lg(),Ml(1694,`th`,13),mN(1695,`Descrição`),lg()(),Ml(1696,`tr`,14)(1697,`td`,15)(1698,`div`,23)(1699,`span`,24),mN(1700,` allowedExtensions`),ql(1701,`br`),lg()()(),Ml(1702,`td`,19)(1703,`code`,42),mN(1704,`Array<string>`),lg()(),Ml(1705,`td`,22)(1706,`em`)(1707,`strong`),mN(1708,`(opcional)`),lg()(),Ml(1709,`p`),mN(1710,`Extensões permitidas de arquivos que serão enviados ao servidor, devendo ser informada uma coleção de extensões, por exemplo:`),lg(),Ml(1711,`pre`)(1712,`code`),mN(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),lg()()()(),Ml(1714,`tr`,14)(1715,`td`,15)(1716,`div`,23)(1717,`span`,24),mN(1718,` maxFileSize`),ql(1719,`br`),lg()()(),Ml(1720,`td`,19)(1721,`code`,31),mN(1722,`number`),lg()(),Ml(1723,`td`,22)(1724,`em`)(1725,`strong`),mN(1726,`(opcional)`),lg()(),Ml(1727,`p`),mN(1728,`Tamanho máximo do arquivo a ser enviado ao servidor.`),lg(),Ml(1729,`p`),mN(1730,`Deve ser informado um valor em `),Ml(1731,`em`),mN(1732,`bytes`),lg(),mN(1733,`, por exemplo: `),Ml(1734,`code`),mN(1735,`31457280`),lg(),mN(1736,` (30MB).`),lg(),Ml(1737,`blockquote`)(1738,`p`),mN(1739,`Por padrão o valor é `),Ml(1740,`code`),mN(1741,`30 MB`),lg(),mN(1742,`.`),lg()()()(),Ml(1743,`tr`,14)(1744,`td`,15)(1745,`div`,23)(1746,`span`,24),mN(1747,` maxFiles`),ql(1748,`br`),lg()()(),Ml(1749,`td`,19)(1750,`code`,31),mN(1751,`number`),lg()(),Ml(1752,`td`,22)(1753,`em`)(1754,`strong`),mN(1755,`(opcional)`),lg()(),Ml(1756,`p`),mN(1757,`Quantidade máxima de arquivos para o `),Ml(1758,`em`),mN(1759,`upload`),lg(),mN(1760,`.`),lg(),Ml(1761,`blockquote`)(1762,`p`),mN(1763,`Esta propriedade será válida somente se a propriedade `),Ml(1764,`code`),mN(1765,`p-multiple`),lg(),mN(1766,` estiver habilitada e seu valor for maior do que zero.`),lg()()()(),Ml(1767,`tr`,14)(1768,`td`,15)(1769,`div`,23)(1770,`span`,24),mN(1771,` minFileSize`),ql(1772,`br`),lg()()(),Ml(1773,`td`,19)(1774,`code`,31),mN(1775,`number`),lg()(),Ml(1776,`td`,22)(1777,`em`)(1778,`strong`),mN(1779,`(opcional)`),lg()(),Ml(1780,`p`),mN(1781,`Tamanho mínimo em `),Ml(1782,`em`),mN(1783,`bytes`),lg(),mN(1784,` do arquivo que será enviado ao servidor.`),lg(),Ml(1785,`blockquote`)(1786,`p`),mN(1787,`Por padrão o valor é `),Ml(1788,`code`),mN(1789,`0`),lg(),mN(1790,`.`),lg()()()()(),Ml(1791,`h4`,41)(1792,`code`,5),mN(1793,`PoUploadLiterals`),lg()(),Ml(1794,`div`,2)(1795,`p`),mN(1796,`Interface para definição das literais usadas no `),Ml(1797,`code`),mN(1798,`po-upload`),lg(),mN(1799,`.`),lg()(),Ml(1800,`h4`,10),mN(1801,`Propriedades`),lg(),Ml(1802,`table`,11)(1803,`tr`,12)(1804,`th`,13),mN(1805,`Nome`),lg(),Ml(1806,`th`,13),mN(1807,`Tipo`),lg(),Ml(1808,`th`,13),mN(1809,`Descrição`),lg()(),Ml(1810,`tr`,14)(1811,`td`,15)(1812,`div`,23)(1813,`span`,24),mN(1814,` close`),ql(1815,`br`),lg()()(),Ml(1816,`td`,19)(1817,`code`,25),mN(1818,`string`),lg()(),Ml(1819,`td`,22)(1820,`em`)(1821,`strong`),mN(1822,`(opcional)`),lg()(),Ml(1823,`p`),mN(1824,`Texto do leitor de tela ao focar no ícone de fechar.`),lg()()(),Ml(1825,`tr`,14)(1826,`td`,15)(1827,`div`,23)(1828,`span`,24),mN(1829,` continue`),ql(1830,`br`),lg()()(),Ml(1831,`td`,19)(1832,`code`,25),mN(1833,`string`),lg()(),Ml(1834,`td`,22)(1835,`em`)(1836,`strong`),mN(1837,`(opcional)`),lg()(),Ml(1838,`p`),mN(1839,`Texto do botão padrão do modal de pré-visualizar.`),lg()()(),Ml(1840,`tr`,14)(1841,`td`,15)(1842,`div`,23)(1843,`span`,24),mN(1844,` doneText`),ql(1845,`br`),lg()()(),Ml(1846,`td`,19)(1847,`code`,25),mN(1848,`string`),lg()(),Ml(1849,`td`,22)(1850,`em`)(1851,`strong`),mN(1852,`(opcional)`),lg()(),Ml(1853,`p`),mN(1854,`Texto a ser exibido no container de informação quando o estado for de sucesso.`),lg()()(),Ml(1855,`tr`,14)(1856,`td`,15)(1857,`div`,23)(1858,`span`,24),mN(1859,` dragFilesHere`),ql(1860,`br`),lg()()(),Ml(1861,`td`,19)(1862,`code`,25),mN(1863,`string`),lg()(),Ml(1864,`td`,22)(1865,`em`)(1866,`strong`),mN(1867,`(opcional)`),lg()(),Ml(1868,`p`),mN(1869,`Texto indicativo para a área onde os arquivos devem ser arrastados quando utilizada a propriedade `),Ml(1870,`code`),mN(1871,`p-drag-drop`),lg(),mN(1872,`.`),lg()()(),Ml(1873,`tr`,14)(1874,`td`,15)(1875,`div`,23)(1876,`span`,24),mN(1877,` dragFoldersHere`),ql(1878,`br`),lg()()(),Ml(1879,`td`,19)(1880,`code`,25),mN(1881,`string`),lg()(),Ml(1882,`td`,22)(1883,`em`)(1884,`strong`),mN(1885,`(opcional)`),lg()(),Ml(1886,`p`),mN(1887,`Texto indicativo para a área onde os diretórios devem ser arrastados quando utilizada a propriedade `),Ml(1888,`code`),mN(1889,`p-drag-drop`),lg(),mN(1890,`.`),lg()()(),Ml(1891,`tr`,14)(1892,`td`,15)(1893,`div`,23)(1894,`span`,24),mN(1895,` dropFilesHere`),ql(1896,`br`),lg()()(),Ml(1897,`td`,19)(1898,`code`,25),mN(1899,`string`),lg()(),Ml(1900,`td`,22)(1901,`em`)(1902,`strong`),mN(1903,`(opcional)`),lg()(),Ml(1904,`p`),mN(1905,`Texto indicativo para a área onde os arquivos devem ser soltos quando utilizada a propriedade `),Ml(1906,`code`),mN(1907,`p-drag-drop`),lg()()()(),Ml(1908,`tr`,14)(1909,`td`,15)(1910,`div`,23)(1911,`span`,24),mN(1912,` dropFoldersHere`),ql(1913,`br`),lg()()(),Ml(1914,`td`,19)(1915,`code`,25),mN(1916,`string`),lg()(),Ml(1917,`td`,22)(1918,`em`)(1919,`strong`),mN(1920,`(opcional)`),lg()(),Ml(1921,`p`),mN(1922,`Texto indicativo para a área onde os diretórios devem ser soltos quando utilizada a propriedade `),Ml(1923,`code`),mN(1924,`p-drag-drop`),lg(),mN(1925,`.`),lg()()(),Ml(1926,`tr`,14)(1927,`td`,15)(1928,`div`,23)(1929,`span`,24),mN(1930,` errorOccurred`),ql(1931,`br`),lg()()(),Ml(1932,`td`,19)(1933,`code`,25),mN(1934,`string`),lg()(),Ml(1935,`td`,22)(1936,`em`)(1937,`strong`),mN(1938,`(opcional)`),lg()(),Ml(1939,`p`),mN(1940,`Texto a ser exibido quando ocorrer erro no envio do arquivo.`),lg()()(),Ml(1941,`tr`,14)(1942,`td`,15)(1943,`div`,23)(1944,`span`,24),mN(1945,` files`),ql(1946,`br`),lg()()(),Ml(1947,`td`,19)(1948,`code`,25),mN(1949,`string`),lg()(),Ml(1950,`td`,22)(1951,`em`)(1952,`strong`),mN(1953,`(opcional)`),lg()(),Ml(1954,`p`),mN(1955,`Parâmetro `),Ml(1956,`em`),mN(1957,`files`),lg(),mN(1958,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Ml(1959,`em`),mN(1960,`dragDrop`),lg(),mN(1961,`.`),lg()()(),Ml(1962,`tr`,14)(1963,`td`,15)(1964,`div`,23)(1965,`span`,24),mN(1966,` folders`),ql(1967,`br`),lg()()(),Ml(1968,`td`,19)(1969,`code`,25),mN(1970,`string`),lg()(),Ml(1971,`td`,22)(1972,`em`)(1973,`strong`),mN(1974,`(opcional)`),lg()(),Ml(1975,`p`),mN(1976,`Parâmetro `),Ml(1977,`em`),mN(1978,`folders`),lg(),mN(1979,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Ml(1980,`em`),mN(1981,`dragDrop`),lg(),mN(1982,`.`),lg()()(),Ml(1983,`tr`,14)(1984,`td`,15)(1985,`div`,23)(1986,`span`,24),mN(1987,` invalidDropArea`),ql(1988,`br`),lg()()(),Ml(1989,`td`,19)(1990,`code`,25),mN(1991,`string`),lg()(),Ml(1992,`td`,22)(1993,`em`)(1994,`strong`),mN(1995,`(opcional)`),lg()(),Ml(1996,`p`),mN(1997,`Texto exibido caso o usuário arrastar um arquivo para um local inválido ao utilizar a opção de `),Ml(1998,`em`),mN(1999,`dragDrop`),lg(),mN(2e3,`.`),lg()()(),Ml(2001,`tr`,14)(2002,`td`,15)(2003,`div`,23)(2004,`span`,24),mN(2005,` preview`),ql(2006,`br`),lg()()(),Ml(2007,`td`,19)(2008,`code`,25),mN(2009,`string`),lg()(),Ml(2010,`td`,22)(2011,`em`)(2012,`strong`),mN(2013,`(opcional)`),lg()(),Ml(2014,`p`),mN(2015,`Título do modal de pré-visualizar.`),lg()()(),Ml(2016,`tr`,14)(2017,`td`,15)(2018,`div`,23)(2019,`span`,24),mN(2020,` selectFile`),ql(2021,`br`),lg()()(),Ml(2022,`td`,19)(2023,`code`,25),mN(2024,`string`),lg()(),Ml(2025,`td`,22)(2026,`em`)(2027,`strong`),mN(2028,`(opcional)`),lg()(),Ml(2029,`p`),mN(2030,`Texto exibido no label do botão de seleção dos arquivos.`),lg()()(),Ml(2031,`tr`,14)(2032,`td`,15)(2033,`div`,23)(2034,`span`,24),mN(2035,` selectFiles`),ql(2036,`br`),lg()()(),Ml(2037,`td`,19)(2038,`code`,25),mN(2039,`string`),lg()(),Ml(2040,`td`,22)(2041,`em`)(2042,`strong`),mN(2043,`(opcional)`),lg()(),Ml(2044,`p`),mN(2045,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Ml(2046,`code`),mN(2047,`p-multiple`),lg(),mN(2048,`.`),lg()()(),Ml(2049,`tr`,14)(2050,`td`,15)(2051,`div`,23)(2052,`span`,24),mN(2053,` selectFilesOnComputer`),ql(2054,`br`),lg()()(),Ml(2055,`td`,19)(2056,`code`,25),mN(2057,`string`),lg()(),Ml(2058,`td`,22)(2059,`em`)(2060,`strong`),mN(2061,`(opcional)`),lg()(),Ml(2062,`p`),mN(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Ml(2064,`em`),mN(2065,`dragDrop`),lg(),mN(2066,`.`),lg()()(),Ml(2067,`tr`,14)(2068,`td`,15)(2069,`div`,23)(2070,`span`,24),mN(2071,` selectFolder`),ql(2072,`br`),lg()()(),Ml(2073,`td`,19)(2074,`code`,25),mN(2075,`string`),lg()(),Ml(2076,`td`,22)(2077,`em`)(2078,`strong`),mN(2079,`(opcional)`),lg()(),Ml(2080,`p`),mN(2081,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Ml(2082,`code`),mN(2083,`p-directory`),lg(),mN(2084,`.`),lg()()(),Ml(2085,`tr`,14)(2086,`td`,15)(2087,`div`,23)(2088,`span`,24),mN(2089,` selectFolderOnComputer`),ql(2090,`br`),lg()()(),Ml(2091,`td`,19)(2092,`code`,25),mN(2093,`string`),lg()(),Ml(2094,`td`,22)(2095,`em`)(2096,`strong`),mN(2097,`(opcional)`),lg()(),Ml(2098,`p`),mN(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Ml(2100,`em`),mN(2101,`dragDrop`),lg(),mN(2102,`.`),lg()()(),Ml(2103,`tr`,14)(2104,`td`,15)(2105,`div`,23)(2106,`span`,24),mN(2107,` sentWithSuccess`),ql(2108,`br`),lg()()(),Ml(2109,`td`,19)(2110,`code`,25),mN(2111,`string`),lg()(),Ml(2112,`td`,22)(2113,`em`)(2114,`strong`),mN(2115,`(opcional)`),lg()(),Ml(2116,`p`),mN(2117,`Texto a ser exibido quando o envio do arquivo for realizado com sucesso.`),lg()()(),Ml(2118,`tr`,14)(2119,`td`,15)(2120,`div`,23)(2121,`span`,24),mN(2122,` startSending`),ql(2123,`br`),lg()()(),Ml(2124,`td`,19)(2125,`code`,25),mN(2126,`string`),lg()(),Ml(2127,`td`,22)(2128,`em`)(2129,`strong`),mN(2130,`(opcional)`),lg()(),Ml(2131,`p`),mN(2132,`Texto exibido no label do botão para iniciar o envio dos arquivos.`),lg()()(),Ml(2133,`tr`,14)(2134,`td`,15)(2135,`div`,23)(2136,`span`,24),mN(2137,` thumbnail`),ql(2138,`br`),lg()()(),Ml(2139,`td`,19)(2140,`code`,25),mN(2141,`string`),lg()(),Ml(2142,`td`,22)(2143,`em`)(2144,`strong`),mN(2145,`(opcional)`),lg()(),Ml(2146,`p`),mN(2147,`Texto do leitor da miniatura da imagem.`),lg()()(),Ml(2148,`tr`,14)(2149,`td`,15)(2150,`div`,23)(2151,`span`,24),mN(2152,` tryAgain`),ql(2153,`br`),lg()()(),Ml(2154,`td`,19)(2155,`code`,25),mN(2156,`string`),lg()(),Ml(2157,`td`,22)(2158,`em`)(2159,`strong`),mN(2160,`(opcional)`),lg()(),Ml(2161,`p`),mN(2162,`Texto de Tente novamente ao ocorrer erro ao enviar.`),lg()()(),Ml(2163,`tr`,14)(2164,`td`,15)(2165,`div`,23)(2166,`span`,24),mN(2167,` uploadingText`),ql(2168,`br`),lg()()(),Ml(2169,`td`,19)(2170,`code`,25),mN(2171,`string`),lg()(),Ml(2172,`td`,22)(2173,`em`)(2174,`strong`),mN(2175,`(opcional)`),lg()(),Ml(2176,`p`),mN(2177,`Texto a ser exibido no container de informação quando o estado for enviando.`),lg()()()(),Ml(2178,`h4`,41)(2179,`code`,5),mN(2180,`PoProgressAction`),lg()(),Ml(2181,`div`,2)(2182,`p`),mN(2183,`Interface para as ações dos componentes po-progress e po-upload.`),lg()(),Ml(2184,`h4`,10),mN(2185,`Propriedades`),lg(),Ml(2186,`table`,11)(2187,`tr`,12)(2188,`th`,13),mN(2189,`Nome`),lg(),Ml(2190,`th`,13),mN(2191,`Tipo`),lg(),Ml(2192,`th`,13),mN(2193,`Descrição`),lg()(),Ml(2194,`tr`,14)(2195,`td`,15)(2196,`div`,23)(2197,`span`,24),mN(2198,` disabled`),ql(2199,`br`),lg()()(),Ml(2200,`td`,19)(2201,`code`,26),mN(2202,`boolean `),lg(),Ml(2203,`code`,43),mN(2204,` Function`),lg()(),Ml(2205,`td`,22)(2206,`em`)(2207,`strong`),mN(2208,`(opcional)`),lg()(),Ml(2209,`p`),mN(2210,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),lg(),Ml(2211,`p`),mN(2212,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),lg()()(),Ml(2213,`tr`,14)(2214,`td`,15)(2215,`div`,23)(2216,`span`,24),mN(2217,` icon`),ql(2218,`br`),lg()()(),Ml(2219,`td`,19)(2220,`code`,25),mN(2221,`string `),lg(),Ml(2222,`code`,44),mN(2223,` TemplateRef<void>`),lg()(),Ml(2224,`td`,22)(2225,`em`)(2226,`strong`),mN(2227,`(opcional)`),lg()(),Ml(2228,`p`),mN(2229,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),lg(),Ml(2230,`p`),mN(2231,`É possível usar qualquer um dos ícones da `),Ml(2232,`a`,45),mN(2233,`Biblioteca de ícones`),lg(),mN(2234,`. conforme exemplo abaixo:`),lg(),Ml(2235,`pre`)(2236,`code`),mN(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),lg()(),Ml(2238,`p`),mN(2239,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),lg(),Ml(2240,`pre`)(2241,`code`),mN(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),lg()(),Ml(2243,`p`),mN(2244,`Outra opção seria a customização do ícone através do `),Ml(2245,`code`),mN(2246,`TemplateRef`),lg(),mN(2247,`, conforme exemplo abaixo:
component.html:`),lg(),Ml(2248,`pre`)(2249,`code`),mN(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),lg()(),Ml(2251,`p`),mN(2252,`component.ts:`),lg(),Ml(2253,`pre`)(2254,`code`),mN(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),lg()()()(),Ml(2256,`tr`,14)(2257,`td`,15)(2258,`div`,23)(2259,`span`,24),mN(2260,` label`),ql(2261,`br`),lg()()(),Ml(2262,`td`,19)(2263,`code`,25),mN(2264,`string`),lg()(),Ml(2265,`td`,22)(2266,`em`)(2267,`strong`),mN(2268,`(opcional)`),lg()(),Ml(2269,`p`),mN(2270,`Rótulo da ação.`),lg()()(),Ml(2271,`tr`,14)(2272,`td`,15)(2273,`div`,23)(2274,`span`,24),mN(2275,` type`),ql(2276,`br`),lg()()(),Ml(2277,`td`,19)(2278,`code`,25),mN(2279,`string`),lg()(),Ml(2280,`td`,22)(2281,`em`)(2282,`strong`),mN(2283,`(opcional)`),lg()(),Ml(2284,`p`),mN(2285,`Define a cor do item, sendo `),Ml(2286,`code`),mN(2287,`default`),lg(),mN(2288,` o padrão.`),lg(),Ml(2289,`p`),mN(2290,`Valores válidos:`),lg(),Ml(2291,`ul`)(2292,`li`)(2293,`code`),mN(2294,`default`),lg()(),Ml(2295,`li`)(2296,`code`),mN(2297,`danger`),lg(),mN(2298,` - indicado para ações exclusivas (excluir, sair).`),lg()()()(),Ml(2299,`tr`,14)(2300,`td`,15)(2301,`div`,23)(2302,`span`,24),mN(2303,` visible`),ql(2304,`br`),lg()()(),Ml(2305,`td`,19)(2306,`code`,26),mN(2307,`boolean `),lg(),Ml(2308,`code`,43),mN(2309,` Function`),lg()(),Ml(2310,`td`,22)(2311,`em`)(2312,`strong`),mN(2313,`(opcional)`),lg()(),Ml(2314,`p`),mN(2315,`Define se a ação será visível.`),lg(),Ml(2316,`blockquote`)(2317,`p`),mN(2318,`Caso o valor não seja especificado a ação será visível.`),lg()(),Ml(2319,`p`),mN(2320,`Opções para tornar a ação visível ou não:`),lg(),Ml(2321,`ul`)(2322,`li`)(2323,`p`),mN(2324,`Função que deve retornar um booleano.`),lg()(),Ml(2325,`li`)(2326,`p`),mN(2327,`Informar diretamente um valor booleano.`),lg()()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var vt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Upload`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-upload-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-upload-basic-view`)(6,`sample-po-upload-labs-view`)(7,`sample-po-upload-resume-view`)(8,`sample-po-upload-rs-view`)(9,`sample-po-upload-download-view`)(10,`sample-po-upload-preview-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Fe,qe,ke,Le,Re,Oe,je],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(vt),NL]})}return a})();var cn=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ie]})}return a})();export{cn as DocPoUploadModule};