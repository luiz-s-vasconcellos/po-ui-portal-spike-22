import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,bt as Pk,aW as Yp,d7 as L3,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,cQ as Rk,cR as Tk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,aJ as Ghe,bH as E3,c9 as Qhe,ba as bNe,bc as LO,aB as Ex,aM as Ew,aN as JA,a4 as vN,aq as ux,aO as Dw,aP as t0,a5 as _N,at as dx,b5 as jhe,cX as O3,bd as xx,a7 as uN,av as ql,aw as lo,ax as uo,ab as lt$1,b6 as Yo,d8 as Vme,d9 as gNe,t as Pt,a3 as pNe,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic"]],standalone:false,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&Wl(0,"po-upload",0);},dependencies:[L3],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Upload Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,He,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Fe],encapsulation:2})}return a})();function Ge(a,Ie){if(a&1&&(Sl(0,"div")(1,"po-widget",22)(2,"form",23),Wl(3,"po-input",24),JA(),Wl(4,"po-select",25),JA(),Wl(5,"po-select",26),JA(),Wl(6,"po-switch",27),JA(),Wl(7,"po-switch",28),JA(),sg()()()),a&2){let d=Tx();Vp(2),tw("formGroup",d.actionForm),Vp(),t0(),Vp(),tw("p-options",d.iconOptions),t0(),Vp(),tw("p-options",d.typeOptions),t0(),Vp(),t0(),Vp(),t0();}}var De=(()=>{class a{fb=f(Pk);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm();}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d);});}updateAction(d){this.action=d;}changeEvent(d){this.event=d;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions);}catch(d){this.customModalActions=void 0;}}onChangeHeaders(d){try{this.headers=JSON.parse(d);}catch(r){this.headers=void 0;}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d});}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d});}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)});}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)});}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium";}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs"]],standalone:false,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=Ex();Sl(0,"po-upload",1),Ew("ngModelChange",function(l){return Xy(m),tN(i.upload,l)||(i.upload=l),Qy(l)}),ht("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),vN(4,"json"),Wl(5,"po-info",4),sg(),Wl(6,"po-divider"),Sl(7,"div",2)(8,"form",null,0)(10,"po-input",5),Ew("ngModelChange",function(l){return Xy(m),tN(i.allowedExtensions,l)||(i.allowedExtensions=l),Qy(l)}),ht("p-change",function(){return i.onChangeExtension()}),sg(),JA(),Sl(11,"po-number",6),Ew("ngModelChange",function(l){return Xy(m),tN(i.maxFiles,l)||(i.maxFiles=l),Qy(l)}),ht("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),sg(),JA(),Sl(12,"po-number",7),Ew("ngModelChange",function(l){return Xy(m),tN(i.dragDropHeight,l)||(i.dragDropHeight=l),Qy(l)}),sg(),JA(),Sl(13,"po-number",8),Ew("ngModelChange",function(l){return Xy(m),tN(i.minSize,l)||(i.minSize=l),Qy(l)}),ht("p-change",function(){return i.onChangeMinSize(i.minSize)}),sg(),JA(),Sl(14,"po-number",9),Ew("ngModelChange",function(l){return Xy(m),tN(i.maxSize,l)||(i.maxSize=l),Qy(l)}),ht("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),sg(),JA(),Wl(15,"po-divider"),Sl(16,"po-input",10),Ew("ngModelChange",function(l){return Xy(m),tN(i.label,l)||(i.label=l),Qy(l)}),sg(),JA(),Sl(17,"po-input",11),Ew("ngModelChange",function(l){return Xy(m),tN(i.help,l)||(i.help=l),Qy(l)}),sg(),JA(),Sl(18,"po-input",12),Ew("ngModelChange",function(l){return Xy(m),tN(i.helperText,l)||(i.helperText=l),Qy(l)}),sg(),JA(),Sl(19,"po-input",13),Ew("ngModelChange",function(l){return Xy(m),tN(i.formField,l)||(i.formField=l),Qy(l)}),sg(),JA(),Sl(20,"po-input",14),Ew("ngModelChange",function(l){return Xy(m),tN(i.url,l)||(i.url=l),Qy(l)}),sg(),JA(),Sl(21,"po-input",15),Ew("ngModelChange",function(l){return Xy(m),tN(i.headersLabs,l)||(i.headersLabs=l),Qy(l)}),ht("p-change",function(l){return i.onChangeHeaders(l)}),sg(),JA(),Sl(22,"po-input",16),Ew("ngModelChange",function(l){return Xy(m),tN(i.literals,l)||(i.literals=l),Qy(l)}),ht("p-change",function(){return i.changeLiterals()}),sg(),JA(),Sl(23,"po-input",17),Ew("ngModelChange",function(l){return Xy(m),tN(i.modalActions,l)||(i.modalActions=l),Qy(l)}),ht("p-change",function(){return i.changeModalActions()}),sg(),JA(),Sl(24,"po-checkbox-group",18),Ew("ngModelChange",function(l){return Xy(m),tN(i.properties,l)||(i.properties=l),Qy(l)}),sg(),JA(),ux(25,Ge,8,3,"div"),Sl(26,"po-radio-group",19),Ew("ngModelChange",function(l){return Xy(m),tN(i.size,l)||(i.size=l),Qy(l)}),sg(),JA(),Sl(27,"div",20)(28,"po-button",21),ht("p-click",function(){return i.restore()}),sg()()()();}r&2&&(Dw("ngModel",i.upload),tw("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),t0(),Vp(3),tw("p-value",_N(4,51,i.upload)),Vp(2),tw("p-value",i.event),Vp(5),Dw("ngModel",i.allowedExtensions),t0(),Vp(),Dw("ngModel",i.maxFiles),t0(),Vp(),Dw("ngModel",i.dragDropHeight),t0(),Vp(),Dw("ngModel",i.minSize),t0(),Vp(),Dw("ngModel",i.maxSize),t0(),Vp(2),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.formField),t0(),Vp(),Dw("ngModel",i.url),t0(),Vp(),Dw("ngModel",i.headersLabs),t0(),Vp(),Dw("ngModel",i.literals),t0(),Vp(),Dw("ngModel",i.modalActions),tw("p-disabled",!i.properties.includes("showThumbnail")),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),dx(i.properties.includes("showCustomAction")?25:-1),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Rk,Tk,Qt,mv,x3,F3,Uhe,Pde,Ghe,E3,L3,Qhe,bNe,LO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Upload Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-upload
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
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,De],encapsulation:2})}return a})();var Xe=["formOpportunity"],Ze=()=>({maxFileSize:"204800"}),Ue=(()=>{class a{poNotification=f(Yp);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=false;}apply(){this.formOpportunity.reset(),this.uploadedResume=false,this.poNotification.success("You were applied successfully");}resumeUploadError(){this.uploadedResume=false;}resumeUploadSuccess(){this.uploadedResume=true;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&ql(Xe,7),r&2){let m;lo(m=uo())&&(i.formOpportunity=m.first);}},standalone:false,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=Ex();Sl(0,"form",null,0)(2,"div",1)(3,"po-input",2),Ew("ngModelChange",function(l){return Xy(m),tN(i.name,l)||(i.name=l),Qy(l)}),sg(),JA(),sg(),Sl(4,"div",1)(5,"po-textarea",3),Ew("ngModelChange",function(l){return Xy(m),tN(i.biograph,l)||(i.biograph=l),Qy(l)}),sg(),JA(),sg(),Sl(6,"div",1)(7,"po-url",4),Ew("ngModelChange",function(l){return Xy(m),tN(i.linkedin,l)||(i.linkedin=l),Qy(l)}),sg(),JA(),sg(),Sl(8,"div",1)(9,"po-upload",5),Ew("ngModelChange",function(l){return Xy(m),tN(i.resume,l)||(i.resume=l),Qy(l)}),ht("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),sg(),JA(),sg(),Sl(10,"div",1)(11,"po-button",6),ht("p-click",function(){return i.apply()}),sg()()();}if(r&2){let m=xx(1);Vp(3),Dw("ngModel",i.name),t0(),Vp(2),Dw("ngModel",i.biograph),t0(),Vp(2),Dw("ngModel",i.linkedin),t0(),Vp(2),Dw("ngModel",i.resume),tw("p-restrictions",uN(6,Ze)),t0(),Vp(2),tw("p-disabled",m.invalid||!i.uploadedResume);}},dependencies:[J9,K9,X9,Dk,vk,Qt,F3,jhe,L3,O3],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Upload - Resume"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #formOpportunity="ngForm">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-resume"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,et,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ue],encapsulation:2})}return a})();var nt=["upload"],it=["stepper"],ot=["submitForm"],at=["sucessData"],lt=a=>({"po-invisible":a});function rt(a,Ie){if(a&1){let d=Ex();Sl(0,"div",8)(1,"div",9)(2,"p",11),Jx(3,"Confirm informations"),sg()(),Wl(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),Sl(7,"po-button",31),ht("p-click",function(){Xy(d);let i=Tx();return Qy(i.confirmSubmit())}),sg()();}if(a&2){let d=Tx();Vp(4),tw("p-value",d.project[0].name||"N/D"),Vp(),tw("p-value",d.title||"N/D"),Vp(),tw("p-value",d.description||"N/D");}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close();},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit();}canSubmitProject(){return !!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first();}submitProject(){this.upload.sendFiles(),this.stepper.next();}newSubmit(){this.project=[],this.title=void 0,this.description=void 0;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&ql(nt,7)(it,7)(ot,7)(at,7),r&2){let m;lo(m=uo())&&(i.upload=m.first),lo(m=uo())&&(i.stepper=m.first),lo(m=uo())&&(i.submitForm=m.first),lo(m=uo())&&(i.sucessData=m.first);}},standalone:false,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=Ex();Sl(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),Jx(8,"Welcome, TOTVS!"),sg(),Sl(9,"p",11),Jx(10,"Let's submit your project?"),sg()()(),Sl(11,"div",8)(12,"po-button",12),ht("p-click",function(){Xy(m);let l=xx(2);return Qy(l.next())}),sg()()()(),Sl(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),Jx(21,"Please, select your project:"),sg()(),Sl(22,"div",4)(23,"p",16),Jx(24,"*Upload a zip file containing your project."),sg()()(),Sl(25,"div",17)(26,"po-icon",18),ht("click",function(){Xy(m);let l=xx(32);return Qy(l.selectFiles())}),sg(),Sl(27,"po-icon",19),ht("click",function(){Xy(m);let l=xx(32);return Qy(l.clear())}),sg()()(),Sl(28,"div",4)(29,"label",20),Jx(30,"Attached"),sg(),Sl(31,"po-upload",21,2),Ew("ngModelChange",function(l){return Xy(m),tN(i.project,l)||(i.project=l),Qy(l)}),sg(),JA(),sg(),Sl(33,"div",4)(34,"po-input",22),Ew("ngModelChange",function(l){return Xy(m),tN(i.title,l)||(i.title=l),Qy(l)}),sg(),JA(),sg(),Sl(35,"div",4)(36,"po-textarea",23),Ew("ngModelChange",function(l){return Xy(m),tN(i.description,l)||(i.description=l),Qy(l)}),sg(),JA(),sg(),Sl(37,"div",8)(38,"po-button",24),ht("p-click",function(){return i.submitProject()}),sg()()()()(),Sl(39,"po-step",25)(40,"po-widget",7),ux(41,rt,8,3,"div",8),sg()()()(),Sl(42,"po-modal",26,3)(44,"div",4)(45,"p",27),Jx(46,"Project successfully submited!"),sg()()();}r&2&&(Vp(13),tw("p-can-active-next-step",i.canSubmitProject.bind(i)),Vp(14),tw("ngClass",dN(13,lt,i.project.length<1)),Vp(2),Pt("po-invisible",i.project.length<1),Vp(2),Dw("ngModel",i.project),tw("p-restrictions",i.restrictions),t0(),Vp(3),Dw("ngModel",i.title),tw("p-disabled",i.project.length<1),t0(),Vp(2),Dw("ngModel",i.description),tw("p-disabled",i.project.length<1),t0(),Vp(2),tw("p-disabled",i.canSubmitProject()),Vp(3),dx(i.canSubmitProject()?41:-1),Vp(),tw("p-primary-action",i.confirm));},dependencies:[bO,J9,K9,X9,Dk,vk,Qt,F3,jhe,L3,lt$1,Qhe,Yo,Vme,gNe,bNe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Upload - Realize & Show"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-rs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,pt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ae],encapsulation:2})}return a})();var ze=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:false};uploadSuccess(){this.customAction.visible=true;}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile);}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download"]],standalone:false,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(Sl(0,"po-upload",0),ht("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),sg()),r&2&&tw("p-custom-action",i.customAction)("p-multiple",true);},dependencies:[L3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Upload - with Download Button"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-upload-download/sample-po-upload-download.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-download"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ct,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ze],encapsulation:2})}return a})();var Et=()=>[".png",".jpg",".jpeg",".gif"],St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview"]],standalone:false,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&Wl(0,"po-upload",0),r&2&&tw("p-restrictions",dN(4,St,uN(3,Et)))("p-show-thumbnail",true)("p-multiple",true);},dependencies:[L3],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Upload - with Preview"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-preview"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,gt,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ve],encapsulation:2})}return a})();var je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-doc"]],standalone:false,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoUploadComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,"O componente "),Sl(24,"code"),Jx(25,"po-upload"),sg(),Jx(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),sg(),Sl(27,"ul")(28,"li"),Jx(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),sg(),Sl(30,"li"),Jx(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),sg(),Sl(32,"li"),Jx(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),sg(),Sl(34,"li"),Jx(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),sg(),Sl(36,"li"),Jx(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),sg(),Sl(38,"li"),Jx(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),sg()(),Sl(40,"h4"),Jx(41,"Tokens customiz\xE1veis"),sg(),Sl(42,"p"),Jx(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(44,"blockquote")(45,"p"),Jx(46,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(47,"a",6),Jx(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(49,"."),sg()(),Sl(50,"table")(51,"thead")(52,"tr")(53,"th"),Jx(54,"Propriedade"),sg(),Sl(55,"th"),Jx(56,"Descri\xE7\xE3o"),sg(),Sl(57,"th"),Jx(58,"Valor Padr\xE3o"),sg()()(),Sl(59,"tbody")(60,"tr")(61,"td")(62,"strong"),Jx(63,"FIELD CONTAINER"),sg()(),Wl(64,"td")(65,"td"),sg(),Sl(66,"tr")(67,"td")(68,"code"),Jx(69,"--field-container-title-justify"),sg()(),Sl(70,"td"),Jx(71,"Alinhamento horizontal do t\xEDtulo ("),Sl(72,"code"),Jx(73,"justify-content"),sg(),Jx(74,")"),sg(),Sl(75,"td")(76,"code"),Jx(77,"space-between"),sg()()(),Sl(78,"tr")(79,"td")(80,"code"),Jx(81,"--field-container-title-flex"),sg()(),Sl(82,"td"),Jx(83,"Flex do t\xEDtulo ("),Sl(84,"code"),Jx(85,"flex"),sg(),Jx(86,")"),sg(),Sl(87,"td")(88,"code"),Jx(89,"1 auto"),sg()()(),Sl(90,"tr")(91,"td")(92,"strong"),Jx(93,"TEXT SUPPORT"),sg()(),Wl(94,"td")(95,"td"),sg(),Sl(96,"tr")(97,"td")(98,"code"),Jx(99,"--font-family-text-support"),sg()(),Sl(100,"td"),Jx(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),sg(),Sl(102,"td")(103,"code"),Jx(104,"var(--font-family-theme)"),sg()()(),Sl(105,"tr")(106,"td")(107,"code"),Jx(108,"--text-color-text-support"),sg()(),Sl(109,"td"),Jx(110,"Cor da fonte no texto de suporte"),sg(),Sl(111,"td")(112,"code"),Jx(113,"var(--color-neutral-dark-90)"),sg()()(),Sl(114,"tr")(115,"td")(116,"strong"),Jx(117,"UPLOAD CONTENT"),sg()(),Wl(118,"td")(119,"td"),sg(),Sl(120,"tr")(121,"td")(122,"code"),Jx(123,"--background-color-content"),sg(),Jx(124," \xA0"),sg(),Sl(125,"td"),Jx(126,"Cor de fundo"),sg(),Sl(127,"td")(128,"code"),Jx(129,"var(--color-neutral-light-10)"),sg()()(),Sl(130,"tr")(131,"td")(132,"code"),Jx(133,"--border-color-content"),sg()(),Sl(134,"td"),Jx(135,"Cor da borda"),sg(),Sl(136,"td")(137,"code"),Jx(138,"var(--color-neutral-light-20)"),sg()()(),Sl(139,"tr")(140,"td")(141,"code"),Jx(142,"--border-radius-content"),sg()(),Sl(143,"td"),Jx(144,"Cont\xE9m o valor do raio dos cantos do elemento"),sg(),Sl(145,"td")(146,"code"),Jx(147,"var(--border-radius-md)"),sg()()(),Sl(148,"tr")(149,"td")(150,"code"),Jx(151,"--text-color-file-name"),sg()(),Sl(152,"td"),Jx(153,"Cor do texto do nome do arquivo"),sg(),Sl(154,"td")(155,"code"),Jx(156,"var(--color-neutral-dark-90)"),sg()()(),Sl(157,"tr")(158,"td")(159,"code"),Jx(160,"--font-family-file-name"),sg()(),Sl(161,"td"),Jx(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),sg(),Sl(163,"td")(164,"code"),Jx(165,"var(--font-family-theme)"),sg()()(),Sl(166,"tr")(167,"td")(168,"code"),Jx(169,"--text-color-info-bar"),sg()(),Sl(170,"td"),Jx(171,"Cor do texto de informa\xE7\xE3o"),sg(),Sl(172,"td")(173,"code"),Jx(174,"var(--color-neutral-mid-60)"),sg()()(),Sl(175,"tr")(176,"td")(177,"code"),Jx(178,"--font-family-info-bar"),sg()(),Sl(179,"td"),Jx(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),sg(),Sl(181,"td")(182,"code"),Jx(183,"var(--font-family-theme)"),sg()()(),Sl(184,"tr")(185,"td")(186,"strong"),Jx(187,"ERROR STATE"),sg()(),Wl(188,"td")(189,"td"),sg(),Sl(190,"tr")(191,"td")(192,"code"),Jx(193,"--background-color-content-error"),sg()(),Sl(194,"td"),Jx(195,"Cor de fundo do container de erro"),sg(),Sl(196,"td")(197,"code"),Jx(198,"var(--color-neutral-light-00)"),sg()()(),Sl(199,"tr")(200,"td")(201,"code"),Jx(202,"--border-color-content-error"),sg()(),Sl(203,"td"),Jx(204,"Cor da borda do container de erro"),sg(),Sl(205,"td")(206,"code"),Jx(207,"var(--color-feedback-negative-base)"),sg()()(),Sl(208,"tr")(209,"td")(210,"code"),Jx(211,"--text-color-error"),sg()(),Sl(212,"td"),Jx(213,"Cor do texto do container de erro"),sg(),Sl(214,"td")(215,"code"),Jx(216,"var(--color-feedback-negative-dark)"),sg()()(),Sl(217,"tr")(218,"td")(219,"code"),Jx(220,"--color-icon-error"),sg()(),Sl(221,"td"),Jx(222,"Cor do \xEDcone no estado de erro"),sg(),Sl(223,"td")(224,"code"),Jx(225,"var(--color-feedback-negative-base)"),sg()()(),Sl(226,"tr")(227,"td")(228,"code"),Jx(229,"--font-family-error"),sg()(),Sl(230,"td"),Jx(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),sg(),Sl(232,"td")(233,"code"),Jx(234,"var(--font-family-theme)"),sg()()(),Sl(235,"tr")(236,"td")(237,"strong"),Jx(238,"UPLOADED STATE"),sg()(),Wl(239,"td")(240,"td"),sg(),Sl(241,"tr")(242,"td")(243,"code"),Jx(244,"--background-color-content-uploaded"),sg()(),Sl(245,"td"),Jx(246,"Cor de fundo do container com status de enviado"),sg(),Sl(247,"td")(248,"code"),Jx(249,"var(--color-neutral-light-00)"),sg()()(),Sl(250,"tr")(251,"td")(252,"code"),Jx(253,"--border-color-content-uploaded"),sg()(),Sl(254,"td"),Jx(255,"Cor da borda do container com status de enviado"),sg(),Sl(256,"td")(257,"code"),Jx(258,"var(--color-neutral-light-20)"),sg()()(),Sl(259,"tr")(260,"td")(261,"strong"),Jx(262,"INTERACTIVE STATE"),sg()(),Wl(263,"td")(264,"td"),sg(),Sl(265,"tr")(266,"td")(267,"code"),Jx(268,"--text-color-file-name-interactive"),sg()(),Sl(269,"td"),Jx(270,"Cor do texto do nome do arquivo quando interativo"),sg(),Sl(271,"td")(272,"code"),Jx(273,"var(--color-action-default)"),sg()()(),Sl(274,"tr")(275,"td")(276,"strong"),Jx(277,"THUMBNAIL"),sg()(),Wl(278,"td")(279,"td"),sg(),Sl(280,"tr")(281,"td")(282,"code"),Jx(283,"--color-icon-thumbnail"),sg()(),Sl(284,"td"),Jx(285,"Cor do \xEDcone na thumbnail"),sg(),Sl(286,"td")(287,"code"),Jx(288,"var(--color-action-default)"),sg()()(),Sl(289,"tr")(290,"td")(291,"code"),Jx(292,"--border-width-thumbnail"),sg()(),Sl(293,"td"),Jx(294,"Tamanho da fonte na thumbnail"),sg(),Sl(295,"td")(296,"code"),Jx(297,"var(--border-width-sm)"),sg()()(),Sl(298,"tr")(299,"td")(300,"code"),Jx(301,"--border-radius-thumbnail"),sg()(),Sl(302,"td"),Jx(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),sg(),Sl(304,"td")(305,"code"),Jx(306,"var(--border-radius-md)"),sg()()(),Sl(307,"tr")(308,"td")(309,"code"),Jx(310,"--background-color-thumbnail"),sg()(),Sl(311,"td"),Jx(312,"Cor de fundo na thumbnail"),sg(),Sl(313,"td")(314,"code"),Jx(315,"var(--color-neutral-light-05)"),sg()()(),Sl(316,"tr")(317,"td")(318,"strong"),Jx(319,"Focused"),sg()(),Wl(320,"td")(321,"td"),sg(),Sl(322,"tr")(323,"td")(324,"code"),Jx(325,"--outline-color-focused"),sg()(),Sl(326,"td"),Jx(327,"Cor do outline do estado de focus"),sg(),Sl(328,"td")(329,"code"),Jx(330,"var(--color-action-focus)"),sg()()()()()(),Sl(331,"div",7)(332,"h4",8),Jx(333,"Seletor"),sg(),Sl(334,"pre",9),Jx(335,`<po-upload
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
`),sg()(),Sl(336,"h4",10),Jx(337,"Propriedades"),sg(),Sl(338,"table",11)(339,"tr",12)(340,"th",13),Jx(341,"Nome"),sg(),Sl(342,"th",13),Jx(343,"Tipo"),sg(),Sl(344,"th",13),Jx(345,"Padr\xE3o"),sg(),Sl(346,"th",13),Jx(347,"Descri\xE7\xE3o"),sg()(),Sl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),Jx(352," (p-additional-help)"),Wl(353,"br"),sg()(),Sl(354,"div",18),Jx(355,"Deprecated"),sg()(),Sl(356,"td",19)(357,"code",20),Jx(358,"EventEmitter"),sg()(),Sl(359,"td",21),Jx(360,"-"),sg(),Sl(361,"td",22)(362,"em")(363,"strong"),Jx(364,"(opcional)"),sg()(),Sl(365,"p"),Jx(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(367,"blockquote")(368,"p"),Jx(369,"Essa propriedade est\xE1 "),Sl(370,"strong"),Jx(371,"depreciada"),sg(),Jx(372," e ser\xE1 removida na vers\xE3o "),Sl(373,"code"),Jx(374,"23.x.x"),sg(),Jx(375,". Recomendamos utilizar a propriedade "),Sl(376,"code"),Jx(377,"p-helper"),sg(),Jx(378," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),Jx(383," p-additional-help-tooltip"),Wl(384,"br"),sg()(),Sl(385,"div",18),Jx(386,"Deprecated"),sg()(),Sl(387,"td",19)(388,"code",25),Jx(389,"string"),sg()(),Sl(390,"td",21),Jx(391,"-"),sg(),Sl(392,"td",22)(393,"em")(394,"strong"),Jx(395,"(opcional)"),sg()(),Sl(396,"p"),Jx(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(398,"code"),Jx(399,"po-helper"),sg(),Jx(400,`.
`),Sl(401,"strong"),Jx(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(403,"blockquote")(404,"p"),Jx(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(406,"blockquote")(407,"p"),Jx(408,"Essa propriedade est\xE1 "),Sl(409,"strong"),Jx(410,"depreciada"),sg(),Jx(411," e ser\xE1 removida na vers\xE3o "),Sl(412,"code"),Jx(413,"23.x.x"),sg(),Jx(414,". Recomendamos utilizar a propriedade "),Sl(415,"code"),Jx(416,"p-helper"),sg(),Jx(417," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),Jx(422," p-append-in-body"),Wl(423,"br"),sg()()(),Sl(424,"td",19)(425,"code",26),Jx(426,"boolean"),sg()(),Sl(427,"td",21)(428,"p")(429,"code"),Jx(430,"false"),sg()()(),Sl(431,"td",22)(432,"em")(433,"strong"),Jx(434,"(opcional)"),sg()(),Sl(435,"p"),Jx(436,"Define que o popover ("),Sl(437,"code"),Jx(438,"p-helper"),sg(),Jx(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(440,"blockquote")(441,"p"),Jx(442,"Quando utilizado com "),Sl(443,"code"),Jx(444,"p-helper"),sg(),Jx(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),Jx(450," p-auto-focus"),Wl(451,"br"),sg()()(),Sl(452,"td",19)(453,"code",26),Jx(454,"boolean"),sg()(),Sl(455,"td",21)(456,"p")(457,"code"),Jx(458,"false"),sg()()(),Sl(459,"td",22)(460,"em")(461,"strong"),Jx(462,"(opcional)"),sg()(),Sl(463,"p"),Jx(464,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(465,"blockquote")(466,"p"),Jx(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),Jx(472," p-auto-upload"),Wl(473,"br"),sg()()(),Sl(474,"td",19)(475,"code",26),Jx(476,"boolean"),sg()(),Sl(477,"td",21)(478,"p")(479,"code"),Jx(480,"false"),sg()()(),Sl(481,"td",22)(482,"em")(483,"strong"),Jx(484,"(opcional)"),sg()(),Sl(485,"p"),Jx(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Sl(487,"blockquote")(488,"p"),Jx(489,"Esta propriedade funciona somente se a propriedade "),Sl(490,"code"),Jx(491,"p-url"),sg(),Jx(492," tiver um valor atribu\xEDdo."),sg()()()(),Sl(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),Jx(497," p-compact-label"),Wl(498,"br"),sg()()(),Sl(499,"td",19)(500,"code",26),Jx(501,"boolean"),sg()(),Sl(502,"td",21)(503,"p")(504,"code"),Jx(505,"false"),sg()()(),Sl(506,"td",22)(507,"em")(508,"strong"),Jx(509,"(opcional)"),sg()(),Sl(510,"p"),Jx(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(512,"p"),Jx(513,"Quando habilitado ("),Sl(514,"code"),Jx(515,"true"),sg(),Jx(516,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(517,"ul")(518,"li")(519,"code"),Jx(520,"po-label"),sg()(),Sl(521,"li")(522,"code"),Jx(523,"p-requirement (showRequired)"),sg()(),Sl(524,"li")(525,"code"),Jx(526,"po-helper"),sg()()(),Sl(527,"p"),Jx(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(529,"p"),Jx(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(531,"ul")(532,"li")(533,"code"),Jx(534,"--field-container-title-justify"),sg()(),Sl(535,"li")(536,"code"),Jx(537,"--field-container-title-flex"),sg()()(),Sl(538,"p"),Jx(539,"Exemplo:"),sg(),Sl(540,"pre")(541,"code"),Jx(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(543,"p"),Jx(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),Jx(549," p-custom-action"),Wl(550,"br"),sg()()(),Sl(551,"td",19)(552,"code",27),Jx(553,"PoProgressAction"),sg()(),Sl(554,"td",21),Jx(555,"-"),sg(),Sl(556,"td",22)(557,"em")(558,"strong"),Jx(559,"(opcional)"),sg()(),Sl(560,"p"),Jx(561,"Define uma a\xE7\xE3o personalizada no componente "),Sl(562,"code"),Jx(563,"po-upload"),sg(),Jx(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Sl(565,"p"),Jx(566,"A a\xE7\xE3o deve implementar a interface "),Sl(567,"strong"),Jx(568,"PoProgressAction"),sg(),Jx(569,", permitindo configurar propriedades como:"),sg(),Sl(570,"ul")(571,"li")(572,"code"),Jx(573,"label"),sg(),Jx(574,": Texto do bot\xE3o."),sg(),Sl(575,"li")(576,"code"),Jx(577,"icon"),sg(),Jx(578,": \xCDcone a ser exibido no bot\xE3o."),sg(),Sl(579,"li")(580,"code"),Jx(581,"type"),sg(),Jx(582,": Tipo de bot\xE3o (ex.: "),Sl(583,"code"),Jx(584,"danger"),sg(),Jx(585," ou "),Sl(586,"code"),Jx(587,"default"),sg(),Jx(588,")."),sg(),Sl(589,"li")(590,"code"),Jx(591,"disabled"),sg(),Jx(592,": Indica se o bot\xE3o deve estar desabilitado."),sg(),Sl(593,"li")(594,"code"),Jx(595,"visible"),sg(),Jx(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),sg()(),Sl(597,"p")(598,"strong"),Jx(599,"Exemplo de uso:"),sg()(),Sl(600,"pre")(601,"code",28),Jx(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),sg()(),Sl(603,"pre")(604,"code",29),Jx(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),sg()()()(),Sl(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),Jx(610," (p-custom-action-click)"),Wl(611,"br"),sg()()(),Sl(612,"td",19)(613,"code",20),Jx(614,"EventEmitter"),sg()(),Sl(615,"td",21),Jx(616,"-"),sg(),Sl(617,"td",22)(618,"em")(619,"strong"),Jx(620,"(opcional)"),sg()(),Sl(621,"p"),Jx(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Sl(623,"code"),Jx(624,"p-custom-action"),sg(),Jx(625,"."),sg(),Sl(626,"p"),Jx(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Sl(628,"p")(629,"strong"),Jx(630,"Exemplo de uso:"),sg()(),Sl(631,"pre")(632,"code",28),Jx(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),sg()(),Sl(634,"pre")(635,"code",29),Jx(636,`customAction: PoProgressAction = {
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
`),sg()()()(),Sl(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),Jx(641," p-custom-modal-actions"),Wl(642,"br"),sg()()(),Sl(643,"td",19)(644,"code",30),Jx(645,"Array<PoModalAction>"),sg()(),Sl(646,"td",21),Jx(647,"-"),sg(),Sl(648,"td",22)(649,"em")(650,"strong"),Jx(651,"(opcional)"),sg()(),Sl(652,"p"),Jx(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),sg(),Sl(654,"p"),Jx(655,"A a\xE7\xE3o deve implementar a interface "),Sl(656,"strong"),Jx(657,"PoModalAction"),sg(),Jx(658,", permitindo configurar propriedades como:"),sg(),Sl(659,"ul")(660,"li")(661,"code"),Jx(662,"label"),sg(),Jx(663,": Texto do bot\xE3o."),sg(),Sl(664,"li")(665,"code"),Jx(666,"action"),sg(),Jx(667,": \xCDcone a ser exibido no bot\xE3o."),sg(),Sl(668,"li")(669,"code"),Jx(670,"danger"),sg(),Jx(671,": Define a propriedade "),Sl(672,"code"),Jx(673,"p-danger"),sg(),Jx(674," do bot\xE3o."),sg(),Sl(675,"li")(676,"code"),Jx(677,"disabled"),sg(),Jx(678,": Indica se o bot\xE3o deve estar desabilitado."),sg(),Sl(679,"li")(680,"code"),Jx(681,"visible"),sg(),Jx(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),sg()(),Sl(683,"p")(684,"strong"),Jx(685,"Exemplo de uso:"),sg()(),Sl(686,"pre")(687,"code",28),Jx(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),sg()(),Sl(689,"pre")(690,"code",29),Jx(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),sg()()()(),Sl(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),Jx(696," p-directory"),Wl(697,"br"),sg()()(),Sl(698,"td",19)(699,"code",26),Jx(700,"boolean"),sg()(),Sl(701,"td",21)(702,"p")(703,"code"),Jx(704,"false"),sg()()(),Sl(705,"td",22)(706,"em")(707,"strong"),Jx(708,"(opcional)"),sg()(),Sl(709,"p"),Jx(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Sl(711,"blockquote")(712,"p"),Jx(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Sl(714,"blockquote")(715,"p"),Jx(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Sl(717,"strong"),Jx(718,"Internet Explorer"),sg(),Jx(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()()()(),Sl(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),Jx(724," p-disabled"),Wl(725,"br"),sg()()(),Sl(726,"td",19)(727,"code",26),Jx(728,"boolean"),sg()(),Sl(729,"td",21),Jx(730,"-"),sg(),Sl(731,"td",22)(732,"em")(733,"strong"),Jx(734,"(opcional)"),sg()(),Sl(735,"p"),Jx(736,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Sl(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),Jx(741," p-disabled-remove-file"),Wl(742,"br"),sg()()(),Sl(743,"td",19)(744,"code",26),Jx(745,"boolean"),sg()(),Sl(746,"td",21)(747,"p")(748,"code"),Jx(749,"false"),sg()()(),Sl(750,"td",22)(751,"em")(752,"strong"),Jx(753,"(opcional)"),sg()(),Sl(754,"p"),Jx(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),sg()()(),Sl(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),Jx(760," p-drag-drop"),Wl(761,"br"),sg()()(),Sl(762,"td",19)(763,"code",26),Jx(764,"boolean"),sg()(),Sl(765,"td",21)(766,"p")(767,"code"),Jx(768,"false"),sg()()(),Sl(769,"td",22)(770,"em")(771,"strong"),Jx(772,"(opcional)"),sg()(),Sl(773,"p"),Jx(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Sl(775,"blockquote")(776,"p"),Jx(777,"Recomendamos utilizar apenas um "),Sl(778,"code"),Jx(779,"po-upload"),sg(),Jx(780," com esta funcionalidade por tela."),sg()()()(),Sl(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),Jx(785," p-drag-drop-height"),Wl(786,"br"),sg()()(),Sl(787,"td",19)(788,"code",31),Jx(789,"number"),sg()(),Sl(790,"td",21)(791,"p")(792,"code"),Jx(793,"320"),sg()()(),Sl(794,"td",22)(795,"em")(796,"strong"),Jx(797,"(opcional)"),sg()(),Sl(798,"p"),Jx(799,"Define em "),Sl(800,"em"),Jx(801,"pixels"),sg(),Jx(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Sl(803,"code"),Jx(804,"160px"),sg(),Jx(805,"."),sg(),Sl(806,"blockquote")(807,"p"),Jx(808,"Esta propriedade funciona somente se a propriedade "),Sl(809,"code"),Jx(810,"p-drag-drop"),sg(),Jx(811," estiver habilitada."),sg()()()(),Sl(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),Jx(816," p-restrictions"),Wl(817,"br"),sg()()(),Sl(818,"td",19)(819,"code",32),Jx(820,"PoUploadFileRestrictions"),sg()(),Sl(821,"td",21),Jx(822,"-"),sg(),Sl(823,"td",22)(824,"em")(825,"strong"),Jx(826,"(opcional)"),sg()(),Sl(827,"p"),Jx(828,"Objeto que segue a defini\xE7\xE3o da interface "),Sl(829,"code"),Jx(830,"PoUploadFileRestrictions"),sg(),Jx(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg()()(),Sl(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),Jx(836," p-form-field"),Wl(837,"br"),sg()()(),Sl(838,"td",19)(839,"code",25),Jx(840,"string"),sg()(),Sl(841,"td",21)(842,"p")(843,"code"),Jx(844,"files"),sg()()(),Sl(845,"td",22)(846,"em")(847,"strong"),Jx(848,"(opcional)"),sg()(),Sl(849,"p"),Jx(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Sl(851,"code"),Jx(852,"p-url"),sg(),Jx(853,"."),sg()()(),Sl(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),Jx(858," p-headers"),Wl(859,"br"),sg()()(),Sl(860,"td",19)(861,"code",33),Jx(862,"{ [name: string]: string "),sg(),Sl(863,"code",34),Jx(864,` Array<string>;
}`),sg()(),Sl(865,"td",21),Jx(866,"-"),sg(),Sl(867,"td",22)(868,"p"),Jx(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg()()(),Sl(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),Jx(874," p-help"),Wl(875,"br"),sg()()(),Sl(876,"td",19)(877,"code",25),Jx(878,"string"),sg()(),Sl(879,"td",21),Jx(880,"-"),sg(),Sl(881,"td",22)(882,"em")(883,"strong"),Jx(884,"(opcional)"),sg()(),Sl(885,"p"),Jx(886,"Texto de apoio para o campo."),sg()()(),Sl(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),Jx(891," p-hide-restrictions-info"),Wl(892,"br"),sg()()(),Sl(893,"td",19)(894,"code",26),Jx(895,"boolean"),sg()(),Sl(896,"td",21)(897,"p")(898,"code"),Jx(899,"false"),sg()()(),Sl(900,"td",22)(901,"em")(902,"strong"),Jx(903,"(opcional)"),sg()(),Sl(904,"p"),Jx(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg()()(),Sl(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),Jx(910," p-hide-select-button"),Wl(911,"br"),sg()()(),Sl(912,"td",19)(913,"code",26),Jx(914,"boolean"),sg()(),Sl(915,"td",21)(916,"p")(917,"code"),Jx(918,"false"),sg()()(),Sl(919,"td",22)(920,"em")(921,"strong"),Jx(922,"(opcional)"),sg()(),Sl(923,"p"),Jx(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Sl(925,"blockquote")(926,"p"),Jx(927,"Caso o valor definido seja "),Sl(928,"code"),Jx(929,"true"),sg(),Jx(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(931,"code"),Jx(932,"selectFiles()"),sg(),Jx(933," para sele\xE7\xE3o de arquivos."),sg()()()(),Sl(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),Jx(938," p-hide-send-button"),Wl(939,"br"),sg()()(),Sl(940,"td",19)(941,"code",26),Jx(942,"boolean"),sg()(),Sl(943,"td",21)(944,"p")(945,"code"),Jx(946,"false"),sg()()(),Sl(947,"td",22)(948,"em")(949,"strong"),Jx(950,"(opcional)"),sg()(),Sl(951,"p"),Jx(952,"Omite o bot\xE3o de envio de arquivos."),sg(),Sl(953,"blockquote")(954,"p"),Jx(955,"Caso o valor definido seja "),Sl(956,"code"),Jx(957,"true"),sg(),Jx(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(959,"code"),Jx(960,"sendFiles()"),sg(),Jx(961," para envio do(s) arquivo(s) selecionado(s)."),sg()()()(),Sl(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),Jx(966," p-multiple"),Wl(967,"br"),sg()()(),Sl(968,"td",19)(969,"code",26),Jx(970,"boolean"),sg()(),Sl(971,"td",21),Jx(972,"-"),sg(),Sl(973,"td",22)(974,"em")(975,"strong"),Jx(976,"(opcional)"),sg()(),Sl(977,"p"),Jx(978,"Define se pode selecionar mais de um arquivo."),sg(),Sl(979,"blockquote")(980,"p"),Jx(981,"Se utilizada a "),Sl(982,"code"),Jx(983,"p-directory"),sg(),Jx(984,", habilita-se automaticamente esta propriedade."),sg()()()(),Sl(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),Jx(989," (p-keydown)"),Wl(990,"br"),sg()()(),Sl(991,"td",19)(992,"code",20),Jx(993,"EventEmitter"),sg()(),Sl(994,"td",21),Jx(995,"-"),sg(),Sl(996,"td",22)(997,"em")(998,"strong"),Jx(999,"(opcional)"),sg()(),Sl(1e3,"p"),Jx(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(1002,"code"),Jx(1003,"KeyboardEvent"),sg(),Jx(1004," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),Jx(1009," p-label"),Wl(1010,"br"),sg()()(),Sl(1011,"td",19)(1012,"code",25),Jx(1013,"string"),sg()(),Sl(1014,"td",21),Jx(1015,"-"),sg(),Sl(1016,"td",22)(1017,"em")(1018,"strong"),Jx(1019,"(opcional)"),sg()(),Sl(1020,"p"),Jx(1021,"R\xF3tulo do campo."),sg()()(),Sl(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),Jx(1026," p-label-text-wrap"),Wl(1027,"br"),sg()()(),Sl(1028,"td",19)(1029,"code",26),Jx(1030,"boolean"),sg()(),Sl(1031,"td",21)(1032,"p")(1033,"code"),Jx(1034,"false"),sg()()(),Sl(1035,"td",22)(1036,"em")(1037,"strong"),Jx(1038,"(opcional)"),sg()(),Sl(1039,"p"),Jx(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(1041,"code"),Jx(1042,"p-label"),sg(),Jx(1043,". Quando "),Sl(1044,"code"),Jx(1045,"p-label-text-wrap"),sg(),Jx(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),Jx(1051," p-literals"),Wl(1052,"br"),sg()()(),Sl(1053,"td",19)(1054,"code",35),Jx(1055,"PoUploadLiterals"),sg()(),Sl(1056,"td",21),Jx(1057,"-"),sg(),Sl(1058,"td",22)(1059,"em")(1060,"strong"),Jx(1061,"(opcional)"),sg()(),Sl(1062,"p"),Jx(1063,"Objeto com as literais usadas no "),Sl(1064,"code"),Jx(1065,"po-upload"),sg(),Jx(1066,"."),sg(),Sl(1067,"p"),Jx(1068,"Existem duas maneiras de customizar o componente:"),sg(),Sl(1069,"ul")(1070,"li"),Jx(1071,"passando um objeto implementando a interface "),Sl(1072,"code"),Jx(1073,"PoUploadLiterals"),sg(),Jx(1074," com todas as literais dispon\xEDveis;"),sg(),Sl(1075,"li"),Jx(1076,"passando apenas as literais que deseja customizar:"),Sl(1077,"pre")(1078,"code"),Jx(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),sg()()()(),Sl(1080,"p"),Jx(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),sg(),Sl(1082,"pre")(1083,"code"),Jx(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),sg()(),Sl(1085,"blockquote")(1086,"p"),Jx(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Sl(1088,"em"),Jx(1089,"browser"),sg(),Jx(1090," (pt, en, es, ru)."),sg()()()(),Sl(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),Jx(1095," p-loading"),Wl(1096,"br"),sg()()(),Sl(1097,"td",19)(1098,"code",26),Jx(1099,"boolean"),sg()(),Sl(1100,"td",21)(1101,"p")(1102,"code"),Jx(1103,"false"),sg()()(),Sl(1104,"td",22)(1105,"em")(1106,"strong"),Jx(1107,"(opcional)"),sg()(),Sl(1108,"p"),Jx(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),Sl(1110,"code"),Jx(1111,"Selecionar arquivo"),sg(),Jx(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),sg(),Sl(1113,"blockquote")(1114,"p"),Jx(1115,"Incompat\xEDvel com "),Sl(1116,"code"),Jx(1117,"p-drag-drop"),sg(),Jx(1118," e "),Sl(1119,"code"),Jx(1120,"p-hide-select-button"),sg(),Jx(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),Sl(1122,"code"),Jx(1123,"Selecionar arquivo"),sg(),Jx(1124,"."),sg()()()(),Sl(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),Jx(1129," name"),Wl(1130,"br"),sg()()(),Sl(1131,"td",19)(1132,"code",25),Jx(1133,"string"),sg()(),Sl(1134,"td",21),Jx(1135,"-"),sg(),Sl(1136,"td",22)(1137,"p"),Jx(1138,"Define o valor do atributo "),Sl(1139,"code"),Jx(1140,"name"),sg(),Jx(1141," do componente."),sg()()(),Sl(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),Jx(1146," (ngModelChange)"),Wl(1147,"br"),sg()()(),Sl(1148,"td",19)(1149,"code",20),Jx(1150,"EventEmitter"),sg()(),Sl(1151,"td",21),Jx(1152,"-"),sg(),Sl(1153,"td",22)(1154,"em")(1155,"strong"),Jx(1156,"(opcional)"),sg()(),Sl(1157,"p"),Jx(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),Sl(1159,"em"),Jx(1160,"tag"),sg(),Sl(1161,"code"),Jx(1162,"form"),sg(),Jx(1163,"."),sg(),Sl(1164,"p"),Jx(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Sl(1166,"code"),Jx(1167,"strictTemplates"),sg(),Jx(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),sg(),Sl(1169,"pre")(1170,"code"),Jx(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),sg()()()(),Sl(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),Jx(1176," (p-cancel)"),Wl(1177,"br"),sg()()(),Sl(1178,"td",19)(1179,"code",20),Jx(1180,"EventEmitter"),sg()(),Sl(1181,"td",21),Jx(1182,"-"),sg(),Sl(1183,"td",22)(1184,"em")(1185,"strong"),Jx(1186,"(opcional)"),sg()(),Sl(1187,"p"),Jx(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),sg(),Sl(1189,"blockquote")(1190,"p"),Jx(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Sl(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),Jx(1196," (p-error)"),Wl(1197,"br"),sg()()(),Sl(1198,"td",19)(1199,"code",20),Jx(1200,"EventEmitter"),sg()(),Sl(1201,"td",21),Jx(1202,"-"),sg(),Sl(1203,"td",22)(1204,"em")(1205,"strong"),Jx(1206,"(opcional)"),sg()(),Sl(1207,"p"),Jx(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Sl(1209,"blockquote")(1210,"p"),Jx(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(1212,"code"),Jx(1213,"HttpErrorResponse"),sg(),Jx(1214,"."),sg()()()(),Sl(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),Jx(1219," (p-open-modal-preview)"),Wl(1220,"br"),sg()()(),Sl(1221,"td",19)(1222,"code",20),Jx(1223,"EventEmitter"),sg()(),Sl(1224,"td",21),Jx(1225,"-"),sg(),Sl(1226,"td",22)(1227,"em")(1228,"strong"),Jx(1229,"(opcional)"),sg()(),Sl(1230,"p"),Jx(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),sg(),Sl(1232,"blockquote")(1233,"p"),Jx(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Sl(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),Jx(1239," (p-remove)"),Wl(1240,"br"),sg()()(),Sl(1241,"td",19)(1242,"code",20),Jx(1243,"EventEmitter"),sg()(),Sl(1244,"td",21),Jx(1245,"-"),sg(),Sl(1246,"td",22)(1247,"em")(1248,"strong"),Jx(1249,"(opcional)"),sg()(),Sl(1250,"p"),Jx(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),sg(),Sl(1252,"blockquote")(1253,"p"),Jx(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),sg()()()(),Sl(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),Jx(1259," (p-success)"),Wl(1260,"br"),sg()()(),Sl(1261,"td",19)(1262,"code",20),Jx(1263,"EventEmitter"),sg()(),Sl(1264,"td",21),Jx(1265,"-"),sg(),Sl(1266,"td",22)(1267,"em")(1268,"strong"),Jx(1269,"(opcional)"),sg()(),Sl(1270,"p"),Jx(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Sl(1272,"blockquote")(1273,"p"),Jx(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(1275,"code"),Jx(1276,"HttpResponse"),sg(),Jx(1277,"."),sg()()()(),Sl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),Jx(1282," (p-upload)"),Wl(1283,"br"),sg()()(),Sl(1284,"td",19)(1285,"code",20),Jx(1286,"EventEmitter"),sg()(),Sl(1287,"td",21),Jx(1288,"-"),sg(),Sl(1289,"td",22)(1290,"em")(1291,"strong"),Jx(1292,"(opcional)"),sg()(),Sl(1293,"p"),Jx(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Sl(1295,"blockquote")(1296,"p"),Jx(1297,"data, nesta propriedade pode ser informado algum dado"),sg()(),Sl(1298,"pre")(1299,"code"),Jx(1300,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Sl(1301,"blockquote")(1302,"p"),Jx(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Sl(1304,"code"),Jx(1305,"data"),sg(),Jx(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),sg()(),Sl(1307,"pre")(1308,"code"),Jx(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),sg()()()(),Sl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),Jx(1314," p-optional"),Wl(1315,"br"),sg()()(),Sl(1316,"td",19)(1317,"code",26),Jx(1318,"boolean"),sg()(),Sl(1319,"td",21)(1320,"p")(1321,"code"),Jx(1322,"false"),sg()()(),Sl(1323,"td",22)(1324,"em")(1325,"strong"),Jx(1326,"(opcional)"),sg()(),Sl(1327,"p"),Jx(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(1329,"blockquote")(1330,"p"),Jx(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1332,"ul")(1333,"li"),Jx(1334,"O campo conter "),Sl(1335,"code"),Jx(1336,"p-required"),sg(),Jx(1337,";"),sg(),Sl(1338,"li"),Jx(1339,"N\xE3o possuir "),Sl(1340,"code"),Jx(1341,"p-help"),sg(),Jx(1342," e/ou "),Sl(1343,"code"),Jx(1344,"p-label"),sg(),Jx(1345,"."),sg()()()(),Sl(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),Jx(1350," p-helper"),Wl(1351,"br"),sg()()(),Sl(1352,"td",19)(1353,"code",36),Jx(1354,"PoHelperOptions "),sg(),Sl(1355,"code",25),Jx(1356," string"),sg()(),Sl(1357,"td",21),Jx(1358,"-"),sg(),Sl(1359,"td",22)(1360,"em")(1361,"strong"),Jx(1362,"(opcional)"),sg()(),Sl(1363,"p"),Jx(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1365,"code"),Jx(1366,"p-label"),sg(),Jx(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1368,"code"),Jx(1369,"p-label"),sg(),Jx(1370,"."),sg(),Sl(1371,"blockquote")(1372,"p"),Jx(1373,"Para mais informa\xE7\xF5es acesse: "),Sl(1374,"a",37),Jx(1375,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1376,"."),sg()(),Sl(1377,"blockquote")(1378,"p"),Jx(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1380,"code"),Jx(1381,"p-additional-help-tooltip"),sg(),Jx(1382," e "),Sl(1383,"code"),Jx(1384,"p-additional-help"),sg(),Jx(1385,") ser\xE1 ignorado."),sg()()()(),Sl(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),Jx(1390," p-required"),Wl(1391,"br"),sg()()(),Sl(1392,"td",19)(1393,"code",26),Jx(1394,"boolean"),sg()(),Sl(1395,"td",21)(1396,"p")(1397,"code"),Jx(1398,"false"),sg()()(),Sl(1399,"td",22)(1400,"em")(1401,"strong"),Jx(1402,"(opcional)"),sg()(),Sl(1403,"p"),Jx(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Sl(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),Jx(1409," p-required-url"),Wl(1410,"br"),sg()()(),Sl(1411,"td",19)(1412,"code",26),Jx(1413,"boolean"),sg()(),Sl(1414,"td",21)(1415,"p")(1416,"code"),Jx(1417,"true"),sg()()(),Sl(1418,"td",22)(1419,"em")(1420,"strong"),Jx(1421,"(opcional)"),sg()(),Sl(1422,"p"),Jx(1423,"Define se a propriedade "),Sl(1424,"code"),Jx(1425,"p-url"),sg(),Jx(1426," \xE9 obrigat\xF3ria."),sg(),Sl(1427,"p"),Jx(1428,"Caso a propriedade seja definida como "),Sl(1429,"code"),Jx(1430,"false"),sg(),Jx(1431,":"),sg(),Sl(1432,"ul")(1433,"li"),Jx(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),Sl(1435,"code"),Jx(1436,"p-url"),sg(),Jx(1437," definida."),sg(),Sl(1438,"li"),Jx(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),Sl(1440,"code"),Jx(1441,"p-url"),sg(),Jx(1442," seja definida."),sg()(),Sl(1443,"blockquote")(1444,"p"),Jx(1445,"Se utilizada com a propriedade "),Sl(1446,"code"),Jx(1447,"p-auto-upload"),sg(),Jx(1448," definida como "),Sl(1449,"code"),Jx(1450,"true"),sg(),Jx(1451," ser\xE1 necess\xE1rio definir a propriedade "),Sl(1452,"code"),Jx(1453,"p-url"),sg(),Jx(1454,"."),sg()()()(),Sl(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),Jx(1459," p-show-required"),Wl(1460,"br"),sg()()(),Sl(1461,"td",19)(1462,"code",26),Jx(1463,"boolean"),sg()(),Sl(1464,"td",21),Jx(1465,"-"),sg(),Sl(1466,"td",22)(1467,"p"),Jx(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(1469,"blockquote")(1470,"p"),Jx(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1472,"ul")(1473,"li"),Jx(1474,"N\xE3o possuir "),Sl(1475,"code"),Jx(1476,"p-help"),sg(),Jx(1477," e/ou "),Sl(1478,"code"),Jx(1479,"p-label"),sg(),Jx(1480,"."),sg()()()(),Sl(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),Jx(1485," p-show-thumbnail"),Wl(1486,"br"),sg()()(),Sl(1487,"td",19)(1488,"code",26),Jx(1489,"boolean"),sg()(),Sl(1490,"td",21)(1491,"p")(1492,"code"),Jx(1493,"true"),sg()()(),Sl(1494,"td",22)(1495,"em")(1496,"strong"),Jx(1497,"(opcional)"),sg()(),Sl(1498,"p"),Jx(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Sl(1500,"blockquote")(1501,"p"),Jx(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),Sl(1503,"code"),Jx(1504,".png"),sg(),Jx(1505,", "),Sl(1506,"code"),Jx(1507,".jpg"),sg(),Jx(1508,", "),Sl(1509,"code"),Jx(1510,".jpeg"),sg(),Jx(1511," e "),Sl(1512,"code"),Jx(1513,".gif"),sg(),Jx(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),sg()()()(),Sl(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),Jx(1519," p-size"),Wl(1520,"br"),sg()()(),Sl(1521,"td",19)(1522,"code",25),Jx(1523,"string"),sg()(),Sl(1524,"td",21)(1525,"p")(1526,"code"),Jx(1527,"medium"),sg()()(),Sl(1528,"td",22)(1529,"em")(1530,"strong"),Jx(1531,"(opcional)"),sg()(),Sl(1532,"p"),Jx(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),sg(),Sl(1534,"ul")(1535,"li")(1536,"code"),Jx(1537,"small"),sg(),Jx(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1539,"li")(1540,"code"),Jx(1541,"medium"),sg(),Jx(1542,": altura do button como 44px."),sg()(),Sl(1543,"blockquote")(1544,"p"),Jx(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1546,"code"),Jx(1547,"medium"),sg(),Jx(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1549,"a",38),Jx(1550,"po-theme"),sg(),Jx(1551,"."),sg()()()(),Sl(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),Jx(1556," p-url"),Wl(1557,"br"),sg()()(),Sl(1558,"td",19)(1559,"code",25),Jx(1560,"string"),sg()(),Sl(1561,"td",21),Jx(1562,"-"),sg(),Sl(1563,"td",22)(1564,"p"),Jx(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg()()()(),Sl(1566,"h3",10),Jx(1567,"M\xE9todos"),sg(),Sl(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),Jx(1574," clear "),sg()()()()(),Sl(1575,"tr",22)(1576,"td",22)(1577,"p"),Jx(1578,"M\xE9todo respons\xE1vel por "),Sl(1579,"strong"),Jx(1580,"limpar"),sg(),Jx(1581," o(s) arquivo(s) selecionado(s)."),sg()()()(),Wl(1582,"br"),Sl(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),Jx(1589," focus "),sg()()()()(),Sl(1590,"tr",22)(1591,"td",22)(1592,"p"),Jx(1593,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1594,"p"),Jx(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1596,"pre")(1597,"code"),Jx(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),sg()()()()(),Wl(1599,"br"),Sl(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),Jx(1606," closeModal "),sg()()()()(),Sl(1607,"tr",22)(1608,"td",22)(1609,"p"),Jx(1610,"M\xE9todo respons\xE1vel por fechar o modal."),sg()()()(),Wl(1611,"br"),Sl(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),Jx(1618," selectFiles "),sg()()()()(),Sl(1619,"tr",22)(1620,"td",22)(1621,"p"),Jx(1622,"M\xE9todo respons\xE1vel por "),Sl(1623,"strong"),Jx(1624,"abrir"),sg(),Jx(1625," a janela para sele\xE7\xE3o de arquivo(s)."),sg()()()(),Wl(1626,"br"),Sl(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),Jx(1633," sendFiles "),sg()()()()(),Sl(1634,"tr",22)(1635,"td",22)(1636,"p"),Jx(1637,"M\xE9todo respons\xE1vel por "),Sl(1638,"strong"),Jx(1639,"enviar"),sg(),Jx(1640," o(s) arquivo(s) selecionado(s)."),sg()()()(),Wl(1641,"br"),Sl(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),Jx(1648," showAdditionalHelp "),sg()()()()(),Sl(1649,"tr",22)(1650,"td",22)(1651,"p"),Jx(1652,"M\xE9todo que exibe "),Sl(1653,"code"),Jx(1654,"p-helper"),sg(),Jx(1655," ou executa a a\xE7\xE3o definida em "),Sl(1656,"code"),Jx(1657,"p-helper{eventOnClick}"),sg(),Jx(1658," ou em "),Sl(1659,"code"),Jx(1660,"p-additionalHelp"),sg(),Jx(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1662,"code"),Jx(1663,"p-keydown"),sg(),Jx(1664,"."),sg(),Sl(1665,"blockquote")(1666,"p"),Jx(1667,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1668,"code"),Jx(1669,"po-helper"),sg(),Jx(1670," quando o componente estiver com foco."),sg()(),Sl(1671,"pre")(1672,"code"),Jx(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),sg()(),Sl(1674,"pre")(1675,"code"),Jx(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1677,"br"),Sl(1678,"h3"),Jx(1679,"Interfaces"),sg(),Sl(1680,"h4",41)(1681,"code",5),Jx(1682,"PoUploadFileRestrictions"),sg()(),Sl(1683,"div",2)(1684,"p"),Jx(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),sg()(),Sl(1686,"h4",10),Jx(1687,"Propriedades"),sg(),Sl(1688,"table",11)(1689,"tr",12)(1690,"th",13),Jx(1691,"Nome"),sg(),Sl(1692,"th",13),Jx(1693,"Tipo"),sg(),Sl(1694,"th",13),Jx(1695,"Descri\xE7\xE3o"),sg()(),Sl(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),Jx(1700," allowedExtensions"),Wl(1701,"br"),sg()()(),Sl(1702,"td",19)(1703,"code",42),Jx(1704,"Array<string>"),sg()(),Sl(1705,"td",22)(1706,"em")(1707,"strong"),Jx(1708,"(opcional)"),sg()(),Sl(1709,"p"),Jx(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),sg(),Sl(1711,"pre")(1712,"code"),Jx(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),sg()()()(),Sl(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),Jx(1718," maxFileSize"),Wl(1719,"br"),sg()()(),Sl(1720,"td",19)(1721,"code",31),Jx(1722,"number"),sg()(),Sl(1723,"td",22)(1724,"em")(1725,"strong"),Jx(1726,"(opcional)"),sg()(),Sl(1727,"p"),Jx(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),sg(),Sl(1729,"p"),Jx(1730,"Deve ser informado um valor em "),Sl(1731,"em"),Jx(1732,"bytes"),sg(),Jx(1733,", por exemplo: "),Sl(1734,"code"),Jx(1735,"31457280"),sg(),Jx(1736," (30MB)."),sg(),Sl(1737,"blockquote")(1738,"p"),Jx(1739,"Por padr\xE3o o valor \xE9 "),Sl(1740,"code"),Jx(1741,"30 MB"),sg(),Jx(1742,"."),sg()()()(),Sl(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),Jx(1747," maxFiles"),Wl(1748,"br"),sg()()(),Sl(1749,"td",19)(1750,"code",31),Jx(1751,"number"),sg()(),Sl(1752,"td",22)(1753,"em")(1754,"strong"),Jx(1755,"(opcional)"),sg()(),Sl(1756,"p"),Jx(1757,"Quantidade m\xE1xima de arquivos para o "),Sl(1758,"em"),Jx(1759,"upload"),sg(),Jx(1760,"."),sg(),Sl(1761,"blockquote")(1762,"p"),Jx(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),Sl(1764,"code"),Jx(1765,"p-multiple"),sg(),Jx(1766," estiver habilitada e seu valor for maior do que zero."),sg()()()(),Sl(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),Jx(1771," minFileSize"),Wl(1772,"br"),sg()()(),Sl(1773,"td",19)(1774,"code",31),Jx(1775,"number"),sg()(),Sl(1776,"td",22)(1777,"em")(1778,"strong"),Jx(1779,"(opcional)"),sg()(),Sl(1780,"p"),Jx(1781,"Tamanho m\xEDnimo em "),Sl(1782,"em"),Jx(1783,"bytes"),sg(),Jx(1784," do arquivo que ser\xE1 enviado ao servidor."),sg(),Sl(1785,"blockquote")(1786,"p"),Jx(1787,"Por padr\xE3o o valor \xE9 "),Sl(1788,"code"),Jx(1789,"0"),sg(),Jx(1790,"."),sg()()()()(),Sl(1791,"h4",41)(1792,"code",5),Jx(1793,"PoUploadLiterals"),sg()(),Sl(1794,"div",2)(1795,"p"),Jx(1796,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1797,"code"),Jx(1798,"po-upload"),sg(),Jx(1799,"."),sg()(),Sl(1800,"h4",10),Jx(1801,"Propriedades"),sg(),Sl(1802,"table",11)(1803,"tr",12)(1804,"th",13),Jx(1805,"Nome"),sg(),Sl(1806,"th",13),Jx(1807,"Tipo"),sg(),Sl(1808,"th",13),Jx(1809,"Descri\xE7\xE3o"),sg()(),Sl(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),Jx(1814," close"),Wl(1815,"br"),sg()()(),Sl(1816,"td",19)(1817,"code",25),Jx(1818,"string"),sg()(),Sl(1819,"td",22)(1820,"em")(1821,"strong"),Jx(1822,"(opcional)"),sg()(),Sl(1823,"p"),Jx(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),sg()()(),Sl(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),Jx(1829," continue"),Wl(1830,"br"),sg()()(),Sl(1831,"td",19)(1832,"code",25),Jx(1833,"string"),sg()(),Sl(1834,"td",22)(1835,"em")(1836,"strong"),Jx(1837,"(opcional)"),sg()(),Sl(1838,"p"),Jx(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),sg()()(),Sl(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),Jx(1844," doneText"),Wl(1845,"br"),sg()()(),Sl(1846,"td",19)(1847,"code",25),Jx(1848,"string"),sg()(),Sl(1849,"td",22)(1850,"em")(1851,"strong"),Jx(1852,"(opcional)"),sg()(),Sl(1853,"p"),Jx(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),sg()()(),Sl(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),Jx(1859," dragFilesHere"),Wl(1860,"br"),sg()()(),Sl(1861,"td",19)(1862,"code",25),Jx(1863,"string"),sg()(),Sl(1864,"td",22)(1865,"em")(1866,"strong"),Jx(1867,"(opcional)"),sg()(),Sl(1868,"p"),Jx(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),Sl(1870,"code"),Jx(1871,"p-drag-drop"),sg(),Jx(1872,"."),sg()()(),Sl(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),Jx(1877," dragFoldersHere"),Wl(1878,"br"),sg()()(),Sl(1879,"td",19)(1880,"code",25),Jx(1881,"string"),sg()(),Sl(1882,"td",22)(1883,"em")(1884,"strong"),Jx(1885,"(opcional)"),sg()(),Sl(1886,"p"),Jx(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),Sl(1888,"code"),Jx(1889,"p-drag-drop"),sg(),Jx(1890,"."),sg()()(),Sl(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),Jx(1895," dropFilesHere"),Wl(1896,"br"),sg()()(),Sl(1897,"td",19)(1898,"code",25),Jx(1899,"string"),sg()(),Sl(1900,"td",22)(1901,"em")(1902,"strong"),Jx(1903,"(opcional)"),sg()(),Sl(1904,"p"),Jx(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),Sl(1906,"code"),Jx(1907,"p-drag-drop"),sg()()()(),Sl(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),Jx(1912," dropFoldersHere"),Wl(1913,"br"),sg()()(),Sl(1914,"td",19)(1915,"code",25),Jx(1916,"string"),sg()(),Sl(1917,"td",22)(1918,"em")(1919,"strong"),Jx(1920,"(opcional)"),sg()(),Sl(1921,"p"),Jx(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),Sl(1923,"code"),Jx(1924,"p-drag-drop"),sg(),Jx(1925,"."),sg()()(),Sl(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),Jx(1930," errorOccurred"),Wl(1931,"br"),sg()()(),Sl(1932,"td",19)(1933,"code",25),Jx(1934,"string"),sg()(),Sl(1935,"td",22)(1936,"em")(1937,"strong"),Jx(1938,"(opcional)"),sg()(),Sl(1939,"p"),Jx(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),sg()()(),Sl(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),Jx(1945," files"),Wl(1946,"br"),sg()()(),Sl(1947,"td",19)(1948,"code",25),Jx(1949,"string"),sg()(),Sl(1950,"td",22)(1951,"em")(1952,"strong"),Jx(1953,"(opcional)"),sg()(),Sl(1954,"p"),Jx(1955,"Par\xE2metro "),Sl(1956,"em"),Jx(1957,"files"),sg(),Jx(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Sl(1959,"em"),Jx(1960,"dragDrop"),sg(),Jx(1961,"."),sg()()(),Sl(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),Jx(1966," folders"),Wl(1967,"br"),sg()()(),Sl(1968,"td",19)(1969,"code",25),Jx(1970,"string"),sg()(),Sl(1971,"td",22)(1972,"em")(1973,"strong"),Jx(1974,"(opcional)"),sg()(),Sl(1975,"p"),Jx(1976,"Par\xE2metro "),Sl(1977,"em"),Jx(1978,"folders"),sg(),Jx(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Sl(1980,"em"),Jx(1981,"dragDrop"),sg(),Jx(1982,"."),sg()()(),Sl(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),Jx(1987," invalidDropArea"),Wl(1988,"br"),sg()()(),Sl(1989,"td",19)(1990,"code",25),Jx(1991,"string"),sg()(),Sl(1992,"td",22)(1993,"em")(1994,"strong"),Jx(1995,"(opcional)"),sg()(),Sl(1996,"p"),Jx(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),Sl(1998,"em"),Jx(1999,"dragDrop"),sg(),Jx(2e3,"."),sg()()(),Sl(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),Jx(2005," preview"),Wl(2006,"br"),sg()()(),Sl(2007,"td",19)(2008,"code",25),Jx(2009,"string"),sg()(),Sl(2010,"td",22)(2011,"em")(2012,"strong"),Jx(2013,"(opcional)"),sg()(),Sl(2014,"p"),Jx(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),sg()()(),Sl(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),Jx(2020," selectFile"),Wl(2021,"br"),sg()()(),Sl(2022,"td",19)(2023,"code",25),Jx(2024,"string"),sg()(),Sl(2025,"td",22)(2026,"em")(2027,"strong"),Jx(2028,"(opcional)"),sg()(),Sl(2029,"p"),Jx(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),sg()()(),Sl(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),Jx(2035," selectFiles"),Wl(2036,"br"),sg()()(),Sl(2037,"td",19)(2038,"code",25),Jx(2039,"string"),sg()(),Sl(2040,"td",22)(2041,"em")(2042,"strong"),Jx(2043,"(opcional)"),sg()(),Sl(2044,"p"),Jx(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Sl(2046,"code"),Jx(2047,"p-multiple"),sg(),Jx(2048,"."),sg()()(),Sl(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),Jx(2053," selectFilesOnComputer"),Wl(2054,"br"),sg()()(),Sl(2055,"td",19)(2056,"code",25),Jx(2057,"string"),sg()(),Sl(2058,"td",22)(2059,"em")(2060,"strong"),Jx(2061,"(opcional)"),sg()(),Sl(2062,"p"),Jx(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Sl(2064,"em"),Jx(2065,"dragDrop"),sg(),Jx(2066,"."),sg()()(),Sl(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),Jx(2071," selectFolder"),Wl(2072,"br"),sg()()(),Sl(2073,"td",19)(2074,"code",25),Jx(2075,"string"),sg()(),Sl(2076,"td",22)(2077,"em")(2078,"strong"),Jx(2079,"(opcional)"),sg()(),Sl(2080,"p"),Jx(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Sl(2082,"code"),Jx(2083,"p-directory"),sg(),Jx(2084,"."),sg()()(),Sl(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),Jx(2089," selectFolderOnComputer"),Wl(2090,"br"),sg()()(),Sl(2091,"td",19)(2092,"code",25),Jx(2093,"string"),sg()(),Sl(2094,"td",22)(2095,"em")(2096,"strong"),Jx(2097,"(opcional)"),sg()(),Sl(2098,"p"),Jx(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Sl(2100,"em"),Jx(2101,"dragDrop"),sg(),Jx(2102,"."),sg()()(),Sl(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),Jx(2107," sentWithSuccess"),Wl(2108,"br"),sg()()(),Sl(2109,"td",19)(2110,"code",25),Jx(2111,"string"),sg()(),Sl(2112,"td",22)(2113,"em")(2114,"strong"),Jx(2115,"(opcional)"),sg()(),Sl(2116,"p"),Jx(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),sg()()(),Sl(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),Jx(2122," startSending"),Wl(2123,"br"),sg()()(),Sl(2124,"td",19)(2125,"code",25),Jx(2126,"string"),sg()(),Sl(2127,"td",22)(2128,"em")(2129,"strong"),Jx(2130,"(opcional)"),sg()(),Sl(2131,"p"),Jx(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),sg()()(),Sl(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),Jx(2137," thumbnail"),Wl(2138,"br"),sg()()(),Sl(2139,"td",19)(2140,"code",25),Jx(2141,"string"),sg()(),Sl(2142,"td",22)(2143,"em")(2144,"strong"),Jx(2145,"(opcional)"),sg()(),Sl(2146,"p"),Jx(2147,"Texto do leitor da miniatura da imagem."),sg()()(),Sl(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),Jx(2152," tryAgain"),Wl(2153,"br"),sg()()(),Sl(2154,"td",19)(2155,"code",25),Jx(2156,"string"),sg()(),Sl(2157,"td",22)(2158,"em")(2159,"strong"),Jx(2160,"(opcional)"),sg()(),Sl(2161,"p"),Jx(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),sg()()(),Sl(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),Jx(2167," uploadingText"),Wl(2168,"br"),sg()()(),Sl(2169,"td",19)(2170,"code",25),Jx(2171,"string"),sg()(),Sl(2172,"td",22)(2173,"em")(2174,"strong"),Jx(2175,"(opcional)"),sg()(),Sl(2176,"p"),Jx(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),sg()()()(),Sl(2178,"h4",41)(2179,"code",5),Jx(2180,"PoProgressAction"),sg()(),Sl(2181,"div",2)(2182,"p"),Jx(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),sg()(),Sl(2184,"h4",10),Jx(2185,"Propriedades"),sg(),Sl(2186,"table",11)(2187,"tr",12)(2188,"th",13),Jx(2189,"Nome"),sg(),Sl(2190,"th",13),Jx(2191,"Tipo"),sg(),Sl(2192,"th",13),Jx(2193,"Descri\xE7\xE3o"),sg()(),Sl(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),Jx(2198," disabled"),Wl(2199,"br"),sg()()(),Sl(2200,"td",19)(2201,"code",26),Jx(2202,"boolean "),sg(),Sl(2203,"code",43),Jx(2204," Function"),sg()(),Sl(2205,"td",22)(2206,"em")(2207,"strong"),Jx(2208,"(opcional)"),sg()(),Sl(2209,"p"),Jx(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),sg(),Sl(2211,"p"),Jx(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),sg()()(),Sl(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),Jx(2217," icon"),Wl(2218,"br"),sg()()(),Sl(2219,"td",19)(2220,"code",25),Jx(2221,"string "),sg(),Sl(2222,"code",44),Jx(2223," TemplateRef<void>"),sg()(),Sl(2224,"td",22)(2225,"em")(2226,"strong"),Jx(2227,"(opcional)"),sg()(),Sl(2228,"p"),Jx(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(2230,"p"),Jx(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(2232,"a",45),Jx(2233,"Biblioteca de \xEDcones"),sg(),Jx(2234,". conforme exemplo abaixo:"),sg(),Sl(2235,"pre")(2236,"code"),Jx(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),sg()(),Sl(2238,"p"),Jx(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Sl(2240,"pre")(2241,"code"),Jx(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),sg()(),Sl(2243,"p"),Jx(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(2245,"code"),Jx(2246,"TemplateRef"),sg(),Jx(2247,`, conforme exemplo abaixo:
component.html:`),sg(),Sl(2248,"pre")(2249,"code"),Jx(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),sg()(),Sl(2251,"p"),Jx(2252,"component.ts:"),sg(),Sl(2253,"pre")(2254,"code"),Jx(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),sg()()()(),Sl(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),Jx(2260," label"),Wl(2261,"br"),sg()()(),Sl(2262,"td",19)(2263,"code",25),Jx(2264,"string"),sg()(),Sl(2265,"td",22)(2266,"em")(2267,"strong"),Jx(2268,"(opcional)"),sg()(),Sl(2269,"p"),Jx(2270,"R\xF3tulo da a\xE7\xE3o."),sg()()(),Sl(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),Jx(2275," type"),Wl(2276,"br"),sg()()(),Sl(2277,"td",19)(2278,"code",25),Jx(2279,"string"),sg()(),Sl(2280,"td",22)(2281,"em")(2282,"strong"),Jx(2283,"(opcional)"),sg()(),Sl(2284,"p"),Jx(2285,"Define a cor do item, sendo "),Sl(2286,"code"),Jx(2287,"default"),sg(),Jx(2288," o padr\xE3o."),sg(),Sl(2289,"p"),Jx(2290,"Valores v\xE1lidos:"),sg(),Sl(2291,"ul")(2292,"li")(2293,"code"),Jx(2294,"default"),sg()(),Sl(2295,"li")(2296,"code"),Jx(2297,"danger"),sg(),Jx(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),sg()()()(),Sl(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),Jx(2303," visible"),Wl(2304,"br"),sg()()(),Sl(2305,"td",19)(2306,"code",26),Jx(2307,"boolean "),sg(),Sl(2308,"code",43),Jx(2309," Function"),sg()(),Sl(2310,"td",22)(2311,"em")(2312,"strong"),Jx(2313,"(opcional)"),sg()(),Sl(2314,"p"),Jx(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg(),Sl(2316,"blockquote")(2317,"p"),Jx(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),sg()(),Sl(2319,"p"),Jx(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),sg(),Sl(2321,"ul")(2322,"li")(2323,"p"),Jx(2324,"Fun\xE7\xE3o que deve retornar um booleano."),sg()(),Sl(2325,"li")(2326,"p"),Jx(2327,"Informar diretamente um valor booleano."),sg()()()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-upload-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Me,qe,ke,Le,Re,Oe,je],encapsulation:2})}return a})();var vt=[{path:"",component:Be}],Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(vt),pL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ne]})}return a})();export{cn as DocPoUploadModule};